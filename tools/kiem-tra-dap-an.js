#!/usr/bin/env node
/* Kiểm tra dữ liệu bài học (chạy: node tools/kiem-tra-dap-an.js [tiền tố, ví dụ toan-6]).
   1) Tính lại đáp án số: mỗi câu hỏi quiz có trường calc (biểu thức JavaScript) sẽ được tính và so với
      đáp án (câu short) hoặc giá trị số của phương án đúng (câu mcq). Ứng dụng web bỏ qua trường calc.
   2) Kiểm tra cấu trúc: mục tiêu, 4–5 bước, 3 ví dụ, 3 bài tập (mỗi bài 2 gợi ý + lời giải), quiz 8 câu,
      chỉ số đáp án mcq hợp lệ, đáp án tf là true/false, bài học khớp với khung chương trình.
   3) Câu short có requireSimplest: true phải có đáp án ở dạng tối giản; đề có chữ “tối giản/rút gọn” mà thiếu cờ sẽ bị báo lỗi.
   4) Với các khung trong STRICT_CALC (hiện là toan-7, toan-8, toan-9, khtn-7, khtn-8, khtn-9, tin-hoc-6): mọi câu short có đáp án là số (số nguyên, số thập phân, phân số a/b)
      bắt buộc phải có calc để được tính lại; thiếu calc bị báo lỗi. Cuối báo cáo in tỉ lệ câu số có calc theo khung.
   Trong calc có thể dùng các hàm trợ giúp gcd(a, b), lcm(a, b), divisors(n), round(x, d), sqrt(x), sum(mảng), mean(mảng),
   poly([a0, a1, a2, ...], x) (giá trị đa thức a0 + a1·x + a2·x² + ...) và Math.
   Trả mã thoát 1 nếu có lỗi. */
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');
var ROOT = path.join(__dirname, '..'), prefix = process.argv[2] || '';
var courses = {}, lessons = {};
var ctx = { console: console, Math: Math,
  gcd: function g(a, b) { a = Math.abs(a); b = Math.abs(b); return b ? g(b, a % b) : a; },
  lcm: function (a, b) { return a / ctx.gcd(a, b) * b; },
  divisors: function (n) { var r = []; for (var i = 1; i <= n; i++) if (n % i === 0) r.push(i); return r; },
  round: function (x, d) { var k = Math.pow(10, d || 0); return Math.round(x * k + 1e-9 * Math.sign(x)) / k; },
  sqrt: Math.sqrt,
  sum: function (a) { return a.reduce(function (s, x) { return s + x; }, 0); },
  mean: function (a) { return ctx.sum(a) / a.length; },
  poly: function (c, x) { return c.reduce(function (s, a, i) { return s + a * Math.pow(x, i); }, 0); } };
var STRICT_CALC = ['toan-7', 'toan-8', 'toan-9', 'khtn-7', 'khtn-8', 'khtn-9', 'tin-hoc-6', 'tin-hoc-7', 'tin-hoc-8'];
ctx.window = ctx;
ctx.THCS = {
  registerSubject: function () {},
  registerCourse: function (c) { courses[c.subject + '-' + c.grade] = c; },
  registerLesson: function (key, d) { lessons[key] = d; }
};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/svg.js'), 'utf8'), ctx, { filename: 'svg.js' });
fs.readdirSync(path.join(ROOT, 'js')).filter(function (f) { return /^svg-.+\.js$/.test(f); }).sort().forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', f), 'utf8'), ctx, { filename: f }); }); // thư viện hình bổ sung, ví dụ js/svg-khtn.js
fs.readdirSync(path.join(ROOT, 'data/courses')).forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/courses', f), 'utf8'), ctx, { filename: f }); });
fs.readdirSync(path.join(ROOT, 'data/lessons')).forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/lessons', f), 'utf8'), ctx, { filename: f }); });

function lessonId(l) { if (typeof l !== 'string') return l.id; var m = /^Bài (\d+)/.exec(l); return m ? 'bai-' + m[1] : null; }
function toNum(s) {
  var t = String(s).replace(/<[^>]+>/g, '').replace(/\{\{\s*(−?-?\d+)\s*\|\s*(\d+)\s*\}\}/g, '$1/$2').replace(/−/g, '-');
  t = t.replace(/(\d) (?=\d{3}(?!\d))/g, '$1').trim();
  t = t.replace(/^[^\d-]*?(?=-?\d)/, '');                 // bỏ tiền tố như "x = "
  var m = /^(-?\d+(?:[.,]\d+)?)(?:\s*\/\s*(-?\d+(?:[.,]\d+)?))?/.exec(t);
  if (!m) return NaN;
  var a = parseFloat(m[1].replace(',', '.')); return m[2] ? a / parseFloat(m[2].replace(',', '.')) : a;
}
function isSimplest(s) { // giống js/app.js: số nguyên hoặc a/b với b > 1, ƯCLN(|a|, b) = 1
  var t = String(s).trim().replace(/\s/g, '').replace(/−/g, '-');
  if (/^-?\d+$/.test(t)) return true;
  var m = /^(-?\d+)\/(\d+)$/.exec(t);
  return !!m && +m[2] > 1 && ctx.gcd(Math.abs(+m[1]), +m[2]) === 1;
}
function close(a, b) { return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b)); }

var errors = [], nCalc = 0, nLessons = 0, missing = [], cover = {};
function isNumericAnswer(a) { return /^-?\d+(?:[.,]\d+)?(?:\/-?\d+)?$/.test(String(a).replace(/−/g, '-').replace(/\s/g, '')); }
Object.keys(courses).forEach(function (ck) {
  if (prefix && ck.indexOf(prefix) !== 0) return;
  var c = courses[ck], ids = [];
  c.chapters.forEach(function (ch) { ch.lessons.forEach(function (l) { ids.push(lessonId(l)); }); });
  ids.forEach(function (id) { if (!lessons[ck + '/' + id]) missing.push(ck + '/' + id); });
  ((c.diagnostic || {}).questions || []).forEach(function (q, i) { if (ids.indexOf(q.lesson) < 0) errors.push(ck + ' diagnostic #' + (i + 1) + ': thẻ lesson "' + q.lesson + '" không có trong khung'); });
  console.log(ck + ': ' + ids.filter(function (id) { return lessons[ck + '/' + id]; }).length + '/' + ids.length + ' bài đã soạn');
});
Object.keys(lessons).forEach(function (key) {
  if (prefix && key.indexOf(prefix) !== 0) return;
  var d = lessons[key], E = function (m) { errors.push(key + ': ' + m); }; nLessons++;
  var ck = key.split('/')[0], c = courses[ck];
  if (!c) E('không có khung chương trình ' + ck);
  if (!d.objectives || d.objectives.length < 3) E('thiếu mục tiêu');
  if (!d.steps || d.steps.length < 4 || d.steps.length > 5) E('số bước = ' + (d.steps || []).length);
  if (!d.examples || d.examples.length !== 3) E('số ví dụ = ' + (d.examples || []).length);
  (d.exercises || []).forEach(function (x, i) { if (!x.hints || x.hints.length !== 2 || !x.solution) E('bài tập ' + (i + 1) + ' thiếu gợi ý/lời giải'); });
  if (!d.exercises || d.exercises.length !== 3) E('số bài tập = ' + (d.exercises || []).length);
  if (!d.quiz || d.quiz.length !== 8) E('số câu quiz = ' + (d.quiz || []).length);
  ['steps', 'examples', 'exercises', 'quiz'].forEach(function (k) { (d[k] || []).forEach(function (it, i) { if (it.svg && (!/<svg[\s\S]*<\/svg>/.test([].concat(it.svg).join('')) || /<script|undefined|NaN/.test([].concat(it.svg).join('')))) E(k + ' ' + (i + 1) + ': svg không hợp lệ'); }); });
  (d.quiz || []).forEach(function (q, i) {
    var tag = 'quiz ' + (i + 1);
    if (q.type === 'mcq' && !(q.answer >= 0 && q.answer < q.options.length && q.answer === Math.floor(q.answer))) E(tag + ': chỉ số đáp án sai');
    if (q.type === 'tf' && typeof q.answer !== 'boolean') E(tag + ': đáp án tf phải là boolean');
    if (q.type === 'short' && (q.answer == null || q.answer === '')) E(tag + ': thiếu đáp án');
    if (q.type === 'mcq') { var seen = {}; q.options.forEach(function (o) { if (seen[o]) E(tag + ': phương án trùng "' + o + '"'); seen[o] = 1; }); }
    if (q.type === 'short' && q.requireSimplest) [].concat(q.answer).forEach(function (a) { if (!isSimplest(a)) E(tag + ': requireSimplest nhưng đáp án "' + a + '" chưa ở dạng tối giản'); });
    if (q.type === 'short' && !q.requireSimplest && /tối giản|rút gọn/i.test(q.q) && [].concat(q.answer).some(function (a) { return /\//.test(a); })) E(tag + ': đề yêu cầu tối giản/rút gọn nhưng thiếu requireSimplest: true');
    if (q.type === 'short' && isNumericAnswer([].concat(q.answer)[0])) {
      var cv = cover[ck] = cover[ck] || [0, 0]; cv[1]++; if (q.calc != null) cv[0]++;
      else if (STRICT_CALC.indexOf(ck) >= 0) E(tag + ': đáp án số nhưng thiếu calc (bắt buộc với ' + ck + ')');
    }
    if (q.calc == null) return;
    var v; try { v = vm.runInContext('(' + q.calc + ')', ctx); } catch (e) { E(tag + ': calc lỗi ' + e.message); return; }
    nCalc++;
    var target = q.type === 'mcq' ? toNum(q.options[q.answer]) : toNum([].concat(q.answer)[0]);
    if (isNaN(target) || !close(v, target)) E(tag + ': calc = ' + v + ' nhưng đáp án là ' + (q.type === 'mcq' ? q.options[q.answer] : q.answer));
    if (q.type === 'mcq') q.options.forEach(function (o, j) { if (j !== q.answer && close(toNum(o), v)) E(tag + ': phương án ' + j + ' cũng bằng ' + v); });
  });
});
console.log('Đã kiểm tra ' + nLessons + ' bài, tính lại ' + nCalc + ' đáp án số.');
Object.keys(cover).sort().forEach(function (k) { console.log('  ' + k + ': ' + cover[k][0] + '/' + cover[k][1] + ' câu short đáp án số có calc' + (STRICT_CALC.indexOf(k) >= 0 ? ' (bắt buộc)' : '')); });
if (missing.length) console.log('Chưa soạn (' + missing.length + '): ' + missing.join(', '));
errors.forEach(function (e) { console.log('LỖI  ' + e); });
console.log(errors.length ? errors.length + ' lỗi.' : 'Không có lỗi.');
process.exit(errors.length ? 1 : 0);
