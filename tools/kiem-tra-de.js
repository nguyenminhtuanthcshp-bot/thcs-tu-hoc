#!/usr/bin/env node
/* Kiểm tra gói ôn tập & đề kiểm tra định kì (data/exams/*.js). Chạy: node tools/kiem-tra-de.js [tiền tố, ví dụ toan-6]
   - Cấu trúc theo Phụ lục CV 7991: 4 mốc (giữa kì 1, cuối kì 1, giữa kì 2, cuối kì 2); Phần I mỗi câu 4 phương án; Phần II mỗi câu 4 ý;
     điểm từng phần đúng mục tiêu (mặc định 3/2/2/3) và điểm theo mức độ Biết/Hiểu/Vận dụng (mặc định 4/3/3); tổng 10.
   - Tính lại: calc của câu nhiều lựa chọn (so với giá trị số của phương án đúng; báo lỗi nếu phương án khác cũng bằng giá trị đó)
     hoặc pick – hàm function(giá trị, chữ, mọi giá trị) phải đúng với đúng một phương án là đáp án,
     calc của câu trả lời ngắn (so với đáp án), check của từng ý đúng/sai (phải bằng đáp án Đ/S). Câu trả lời ngắn có đáp án số bắt buộc có calc.
   - Hướng dẫn chấm tự luận: tổng điểm các ý chấm bằng điểm của câu; chủ đề khớp chương của khung chương trình. Trả mã thoát 1 nếu có lỗi. */
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');
var ROOT = path.join(__dirname, '..'), prefix = process.argv[2] || '';
var courses = {}, exams = {}, errs = [], warns = [];
var ctx = { console: console, Math: Math,
  gcd: function g(a, b) { a = Math.abs(a); b = Math.abs(b); return b ? g(b, a % b) : a; },
  lcm: function (a, b) { return a / ctx.gcd(a, b) * b; } };
ctx.window = ctx;
ctx.THCS = { registerSubject: function () {}, registerCourse: function (c) { courses[c.subject + '-' + c.grade] = c; }, registerLesson: function () {}, registerExams: function (k, p) { exams[k] = p; } };
vm.createContext(ctx);
['svg.js'].concat(fs.readdirSync(path.join(ROOT, 'js')).filter(function (f) { return /^svg-.+\.js$/.test(f); }).sort()).forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', f), 'utf8'), ctx, { filename: f }); });
fs.readdirSync(path.join(ROOT, 'data/courses')).forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/courses', f), 'utf8'), ctx, { filename: f }); });
var exDir = path.join(ROOT, 'data/exams');
fs.readdirSync(exDir).sort().forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(exDir, f), 'utf8'), ctx, { filename: f }); });
// dùng đúng hàm tính điểm của ứng dụng
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/exam.js'), 'utf8'), ctx, { filename: 'exam.js' });
var X = ctx.THCS.examTools;
function E(m) { errs.push(m); } function W(m) { warns.push(m); }
function strip(s) { return String(s).replace(/<sup>(\d+)<\/sup>/g, '^$1').replace(/<[^>]+>/g, '').replace(/\{\{([^{}|]+)\|([^{}]+)\}\}/g, '($1)/($2)'); }
function optNum(s) {
  var t = strip(s).replace(/−/g, '-').replace(/(\d) (?=\d{3}\b)/g, '$1').replace(/(\d),(\d)/g, '$1.$2').trim();
  var fr = /^\((-?\d+(?:\.\d+)?)\)\/\((-?\d+(?:\.\d+)?)\)$/.exec(t); if (fr) return +fr[1] / +fr[2];
  if (/\^/.test(t)) return NaN;
  var m = /^(-?\d+(?:\.\d+)?)\s*(%|°|[a-zA-Zđ²³ ]*)$/.exec(t); return m ? +m[1] : NaN;
}
function num(s) { var t = String(s).replace(/−/g, '-').replace(',', '.'); var fr = /^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/.exec(t); if (fr) return +fr[1] / +fr[2]; return /^-?\d+(\.\d+)?$/.test(t) ? +t : NaN; }
function ev(code, tag) { try { return vm.runInContext('(' + code + ')', ctx); } catch (e) { E(tag + ': calc/check lỗi ' + e.message); return undefined; } }
function close(a, b) { return Math.abs(a - b) < 1e-6 * Math.max(1, Math.abs(b)); }
var NEED = ['giua-ki-1', 'cuoi-ki-1', 'giua-ki-2', 'cuoi-ki-2'], LV = ['B', 'H', 'V'], nEx = 0, nQ = 0;
Object.keys(exams).filter(function (k) { return k.indexOf(prefix) === 0; }).sort().forEach(function (key) {
  var p = exams[key], c = courses[key];
  if (!c) { E(key + ': không có khung chương trình'); return; }
  var chIds = c.chapters.map(function (ch) { return ch.id; });
  if (!p.split || p.split.length < 80) E(key + ': thiếu mô tả cách chia nội dung theo kì');
  var ids = p.checkpoints.map(function (k) { return k.id; });
  if (ids.join() !== NEED.join()) E(key + ': cần đúng 4 mốc ' + NEED.join(', ') + ' (có: ' + ids.join(', ') + ')');
  var target = p.partTarget || { mcq: 3, tf: 2, short: 2, essay: 3 }, lvT = p.levelTarget || { B: 4, H: 3, V: 3 };
  p.checkpoints.forEach(function (k) {
    var tag0 = key + '/' + k.id, ex = k.exam, rv = k.review;
    if (!rv || !rv.sections || !rv.sections.length) E(tag0 + ': thiếu nội dung ôn tập');
    else rv.sections.forEach(function (s, i) { if (s.chapter && chIds.indexOf(s.chapter) < 0) E(tag0 + ': mục ôn tập ' + i + ' trỏ tới chương không tồn tại ' + s.chapter); if (!s.points || s.points.length < 2) E(tag0 + ': mục ôn tập ' + i + ' quá ít ý'); });
    if (!k.scope) E(tag0 + ': thiếu phạm vi');
    if (!ex) { E(tag0 + ': thiếu đề'); return; }
    nEx++;
    if ((ex.minutes || 45) !== 45) E(tag0 + ': thời gian phải là 45 phút');
    var tIds = (ex.topics || []).map(function (t) { return t.id; });
    (ex.topics || []).forEach(function (t) { if (chIds.indexOf(t.chapter) < 0) E(tag0 + ': chủ đề ' + t.id + ' trỏ tới chương không tồn tại ' + t.chapter); if (!t.content) E(tag0 + ': chủ đề ' + t.id + ' thiếu nội dung'); if (!t.yccd || !(t.yccd.B || t.yccd.H || t.yccd.V)) E(tag0 + ': chủ đề ' + t.id + ' thiếu yêu cầu cần đạt'); });
    var used = {};
    function chk(q, tag, lvl) { nQ++; if (tIds.indexOf(q.topic) < 0) E(tag + ': chủ đề không hợp lệ ' + q.topic); used[q.topic] = 1; if (lvl !== undefined && LV.indexOf(lvl) < 0) E(tag + ': mức độ không hợp lệ ' + lvl); if (!q.q) E(tag + ': thiếu đề bài'); }
    var letters = [0, 0, 0, 0];
    (ex.mcq || []).forEach(function (q, i) {
      var tag = tag0 + ' P1.C' + (i + 1); chk(q, tag, q.level);
      if (!q.options || q.options.length !== 4) { E(tag + ': cần đúng 4 phương án'); return; }
      if (!(q.answer >= 0 && q.answer < 4 && q.answer % 1 === 0)) E(tag + ': chỉ số đáp án sai');
      letters[q.answer]++;
      var uniq = {}; q.options.forEach(function (o) { var s = strip(o).trim(); if (!s) E(tag + ': phương án rỗng'); if (uniq[s]) E(tag + ': hai phương án trùng nhau: ' + s); uniq[s] = 1; });
      if (!q.explain) E(tag + ': thiếu lời giải');
      if (q.calc != null) {
        var v = ev(q.calc, tag), a = optNum(q.options[q.answer]);
        if (isNaN(a)) E(tag + ': có calc nhưng phương án đúng không đọc được thành số: ' + q.options[q.answer]);
        else if (!close(v, a)) E(tag + ': calc = ' + v + ' nhưng phương án đúng là ' + strip(q.options[q.answer]));
        q.options.forEach(function (o, j) { var b = optNum(o); if (j !== q.answer && !isNaN(b) && close(v, b)) E(tag + ': phương án ' + 'ABCD'[j] + ' cũng bằng ' + v); });
      } else if (q.pick != null) {
        var fn = ev(q.pick, tag), vals = q.options.map(optNum);
        if (typeof fn === 'function') q.options.forEach(function (o, j) { var r = !!fn(vals[j], strip(o), vals); if (r !== (j === q.answer)) E(tag + ': pick cho phương án ' + 'ABCD'[j] + ' = ' + r + ' (đáp án ' + 'ABCD'[q.answer] + ')'); });
        else E(tag + ': pick phải là một hàm');
      } else if (!isNaN(optNum(q.options[q.answer])) && q.options.every(function (o) { return !isNaN(optNum(o)); })) E(tag + ': phương án là số nhưng thiếu calc');
    });
    if (Math.max.apply(null, letters) > 6) W(tag0 + ': đáp án Phần I dồn vào một chữ cái (' + letters.join('/') + ')');
    (ex.tf || []).forEach(function (q, i) {
      var tag = tag0 + ' P2.C' + (i + 1); chk(q, tag);
      if (!q.items || q.items.length !== 4) { E(tag + ': cần đúng 4 ý'); return; }
      var nt = 0;
      q.items.forEach(function (it, j) {
        var t2 = tag + 'abcd'[j]; if (LV.indexOf(it.level) < 0) E(t2 + ': mức độ không hợp lệ'); if (typeof it.answer !== 'boolean') E(t2 + ': đáp án phải true/false'); if (!it.explain) E(t2 + ': thiếu giải thích');
        if (it.answer) nt++;
        if (it.check != null) { var v = ev(it.check, t2); if (v !== it.answer) E(t2 + ': check = ' + v + ' nhưng đáp án là ' + it.answer); }
        else if (/\d/.test(strip(it.s).replace(/\b(?:[A-Z]{1,2}|[a-z])\d\b/g, '')) && /[=+·:−]|\d\s*(cm|m|%|đồng|lít)/.test(strip(it.s))) W(t2 + ': ý có số nhưng không có check');
      });
      if (nt === 0 || nt === 4) W(tag + ': cả 4 ý cùng ' + (nt ? 'Đúng' : 'Sai'));
    });
    (ex.short || []).forEach(function (q, i) {
      var tag = tag0 + ' P3.C' + (i + 1); chk(q, tag, q.level);
      var ans = Array.isArray(q.answer) ? q.answer : [q.answer]; if (!ans.length || ans[0] === '' || ans[0] == null) E(tag + ': thiếu đáp án');
      if (!q.explain) E(tag + ': thiếu lời giải');
      var a = num(ans[0]);
      if (!isNaN(a)) {
        if (q.calc == null) E(tag + ': đáp án số nhưng thiếu calc');
        else { var v = ev(q.calc, tag); if (!close(v, a)) E(tag + ': calc = ' + v + ' nhưng đáp án là ' + ans[0]); ans.forEach(function (x) { var b = num(x); if (!isNaN(b) && !close(b, a)) E(tag + ': các đáp án chấp nhận không cùng giá trị'); }); }
      }
    });
    (ex.essay || []).forEach(function (q, i) {
      var tag = tag0 + ' P4.C' + (i + 1); chk(q, tag);
      q.parts.forEach(function (pt, j) {
        var t2 = tag + 'abcdef'[j]; if (LV.indexOf(pt.level) < 0) E(t2 + ': mức độ không hợp lệ');
        if (!pt.answer || !pt.rubric || !pt.rubric.length) E(t2 + ': thiếu đáp án hoặc hướng dẫn chấm');
        var s = (pt.rubric || []).reduce(function (a, r) { return a + r[1]; }, 0);
        if (!close(s, pt.points)) E(t2 + ': tổng điểm hướng dẫn chấm ' + s + ' ≠ ' + pt.points);
        (pt.rubric || []).forEach(function (r) { if (!(r[1] > 0) || Math.round(r[1] * 100) % 25 !== 0) E(t2 + ': điểm ý chấm phải là bội của 0,25: ' + r[1]); });
        if (pt.calc) ev(pt.calc, t2);
      });
    });
    tIds.forEach(function (t) { if (!used[t]) E(tag0 + ': chủ đề ' + t + ' không có câu hỏi nào'); });
    var pp = X.partPoints(ex), us = X.units(ex), tot = 0;
    Object.keys(target).forEach(function (part) { if (!close(pp[part] || 0, target[part])) E(tag0 + ': ' + part + ' = ' + pp[part] + ' điểm, cần ' + target[part]); tot += pp[part] || 0; });
    if (!close(tot, 10)) E(tag0 + ': tổng điểm ' + tot + ' ≠ 10');
    LV.forEach(function (l) { var s = us.filter(function (u) { return u.level === l; }).reduce(function (a, u) { return a + u.pts; }, 0); if (!close(s, lvT[l])) E(tag0 + ': mức ' + l + ' = ' + s + ' điểm, cần ' + lvT[l]); });
  });
});
// Kiểm tra thang điểm đúng/sai của ứng dụng (QĐ 764/QĐ-BGDĐT)
if (X.TF_SCALE.join() !== '0,0.1,0.25,0.5,1') E('Thang điểm đúng/sai của ứng dụng sai: ' + X.TF_SCALE.join());
warns.forEach(function (w) { console.log('CẢNH BÁO ' + w); });
errs.forEach(function (e) { console.log('LỖI ' + e); });
console.log(nEx + ' đề, ' + nQ + ' câu hỏi đã kiểm tra. ' + (errs.length ? errs.length + ' lỗi.' : 'Không có lỗi.'));
process.exit(errs.length ? 1 : 0);
