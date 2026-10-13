/* THCS Tự Học – Ôn tập và đề kiểm tra định kì theo cấu trúc Công văn 7991/BGDĐT-GDTrH (17/12/2024).
   Nạp TRƯỚC app.js. app.js gọi THCS.examModule(api) để lấy các trang. Không phụ thuộc thư viện ngoài. */
(function () {
  'use strict';
  var T = window.THCS;
  var LV = { B: 'Biết', H: 'Hiểu', V: 'Vận dụng' };
  var TF_SCALE = [0, 0.1, 0.25, 0.5, 1]; // QĐ 764/QĐ-BGDĐT: đúng 1/2/3/4 ý -> 0,1/0,25/0,5/1 (x điểm tối đa của câu)
  var PART_NAME = { mcq: 'Phần I. Trắc nghiệm nhiều lựa chọn', tf: 'Phần II. Trắc nghiệm đúng – sai', short: 'Phần III. Trắc nghiệm trả lời ngắn', essay: 'Phần IV. Tự luận' };
  var timerId = null;

  function r2(x) { return Math.round(x * 100 + 1e-9) / 100; }
  function vn(x) { return String(r2(x)).replace('.', ','); }

  // Điểm mỗi câu theo phần, có thể ghi đè bằng exam.scheme
  function scheme(ex) {
    var s = ex.scheme || {};
    return { mcq: s.mcq != null ? s.mcq : 0.25, tf: s.tf != null ? s.tf : 1, short: s.short != null ? s.short : 0.5 };
  }
  // Danh sách "đơn vị chấm" của đề: dùng cho ma trận, đặc tả và kiểm tra tỉ lệ mức độ
  function units(ex) {
    var sc = scheme(ex), out = [];
    (ex.mcq || []).forEach(function (q, i) { out.push({ part: 'mcq', no: i + 1, label: 'C' + (i + 1), topic: q.topic, level: q.level, pts: sc.mcq }); });
    (ex.tf || []).forEach(function (q, i) { q.items.forEach(function (it, k) { out.push({ part: 'tf', no: i + 1, label: 'C' + (i + 1) + 'abcd'[k], topic: q.topic, level: it.level, pts: sc.tf / 4 }); }); });
    (ex.short || []).forEach(function (q, i) { out.push({ part: 'short', no: i + 1, label: 'C' + (i + 1), topic: q.topic, level: q.level, pts: sc.short }); });
    (ex.essay || []).forEach(function (q, i) { q.parts.forEach(function (p, k) { out.push({ part: 'essay', no: i + 1, label: 'C' + (i + 1) + (q.parts.length > 1 ? 'abcdef'[k] : ''), topic: q.topic, level: p.level, pts: p.points }); }); });
    return out;
  }
  function partPoints(ex) {
    var sc = scheme(ex), e = 0;
    (ex.essay || []).forEach(function (q) { q.parts.forEach(function (p) { e += p.points; }); });
    return { mcq: (ex.mcq || []).length * sc.mcq, tf: (ex.tf || []).length * sc.tf, short: (ex.short || []).length * sc.short, essay: e };
  }
  T.examTools = { units: units, partPoints: partPoints, scheme: scheme, TF_SCALE: TF_SCALE }; // dùng cho công cụ kiểm tra

  T.examModule = function (A) {
    var esc = A.esc, fmt = A.fmt;
    function pack(c) { return T.exams[c.key]; }
    function cp(c, id) { var p = pack(c); if (!p) return null; for (var i = 0; i < p.checkpoints.length; i++) if (p.checkpoints[i].id === id) return p.checkpoints[i]; return null; }
    function ekey(c, k) { return c.key + '/' + k.id; }
    function results(c, k) { var s = A.store(); s.exams = s.exams || {}; return s.exams[ekey(c, k)] || []; }
    function best(c, k) { var b = null; results(c, k).forEach(function (r) { var t = r.total != null ? r.total : r.obj; if (b == null || t > b) b = t; }); return b; }
    function chap(c, id) { for (var i = 0; i < c.chapters.length; i++) if (c.chapters[i].id === id) return c.chapters[i]; return null; }
    function base(c) { return '#/lop-' + c.grade + '/' + c.subject; }
    function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
    function figure(it) { return A.figure(it); }

    /* ---------- Trang tổng hợp ---------- */
    function viewIndex(c) {
      var p = pack(c), m = T.subjects[c.subject];
      var h = A.crumbs([['Trang chủ', '#/'], ['Lớp ' + c.grade, '#/lop-' + c.grade], [m.name + ' ' + c.grade, base(c)], ['Ôn tập & kiểm tra định kì']]) +
        '<h1>🗓️ Ôn tập & kiểm tra định kì – ' + esc(m.name) + ' ' + c.grade + '</h1>' +
        '<div class="card box note"><b>Cách chia nội dung theo kì:</b> ' + fmt(p.split) + '</div>' +
        '<div class="card"><b>Cấu trúc đề</b> (theo Phụ lục Công văn 7991/BGDĐT-GDTrH ngày 17/12/2024): ' + fmt(p.structure || defaultStructure()) + '</div><div class="grid cols-2">';
      p.checkpoints.forEach(function (k) {
        var b = best(c, k), n = results(c, k).length;
        h += '<div class="card exam-card"><h2>' + esc(k.name) + '</h2><div class="muted">' + fmt(k.scope) + '</div>' +
          (n ? '<div>Đã làm ' + n + ' lần · điểm cao nhất <b>' + vn(b) + '</b>/10</div>' : '<div class="muted">Chưa làm đề này.</div>') +
          '<div class="btn-row"><a class="btn" href="' + base(c) + '/on-tap/' + k.id + '">📚 Ôn tập</a><a class="btn primary" href="' + base(c) + '/de-thi/' + k.id + '">⏱️ Làm đề 45 phút</a>' +
          '<a class="btn ghost" href="' + base(c) + '/de-thi/' + k.id + '/giao-vien">🧑‍🏫 Ma trận · đặc tả</a></div></div>';
      });
      return { title: 'Ôn tập & kiểm tra – ' + m.name + ' ' + c.grade, html: h + '</div>' };
    }
    function defaultStructure() {
      return 'Phần I – nhiều lựa chọn (4 phương án) 3,0 điểm; Phần II – đúng/sai (mỗi câu 4 ý) 2,0 điểm; Phần III – trả lời ngắn 2,0 điểm; Phần IV – tự luận 3,0 điểm. Mức độ: Biết 4,0 – Hiểu 3,0 – Vận dụng 3,0 điểm. Câu đúng/sai chấm theo số ý đúng: 1 ý 0,1; 2 ý 0,25; 3 ý 0,5; 4 ý 1 điểm.';
    }

    /* ---------- Trang ôn tập ---------- */
    function viewReview(c, k) {
      var m = T.subjects[c.subject], rv = k.review || {};
      var h = A.crumbs([['Trang chủ', '#/'], ['Lớp ' + c.grade, '#/lop-' + c.grade], [m.name + ' ' + c.grade, base(c)], ['Ôn tập', base(c) + '/on-tap'], [k.name]]) +
        '<h1>📚 Ôn tập ' + esc(k.name.toLowerCase()) + '</h1><div class="card box note"><b>Phạm vi:</b> ' + fmt(k.scope) + '</div>';
      (rv.sections || []).forEach(function (sec) {
        var ch = sec.chapter ? chap(c, sec.chapter) : null;
        h += '<section class="card review-sec"><h2>' + esc(sec.title || (ch ? ch.title : '')) + '</h2><ul class="review-pts">' + sec.points.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul>';
        if (sec.example) h += '<div class="box tip"><b>Ví dụ:</b> ' + fmt(sec.example) + '</div>';
        if (ch) {
          h += '<div class="review-links"><b>Bài học liên quan:</b> ' + ch.lessons.map(function (l) {
            var pr = A.store().lessons[A.lessonKey(c, l)], ok = pr && pr.completed;
            return '<a href="' + A.lessonUrl(c, l) + '">' + (ok ? '✅ ' : '') + esc(l.title) + '</a>';
          }).join(' · ') + '</div>';
        }
        h += '</section>';
      });
      if (rv.mistakes && rv.mistakes.length) h += '<section class="card"><h2>⚠️ Lỗi hay gặp</h2><ul>' + rv.mistakes.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul></section>';
      if (rv.forms && rv.forms.length) h += '<section class="card"><h2>🧩 Các dạng bài thường gặp</h2><ol>' + rv.forms.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ol></section>';
      h += '<div class="btn-row"><a class="btn primary big" href="' + base(c) + '/de-thi/' + k.id + '">⏱️ Làm đề kiểm tra 45 phút</a><a class="btn" href="' + base(c) + '/on-tap">← Các kì khác</a></div>';
      return { title: 'Ôn tập ' + k.name + ' – ' + m.name + ' ' + c.grade, html: h };
    }

    /* ---------- Hiển thị câu hỏi trong đề ---------- */
    function qMCQ(q, i) {
      var name = 'mcq-' + i, h = '<div class="q eq" data-part="mcq" data-i="' + i + '"><div class="q-head"><span class="q-num">Câu ' + (i + 1) + '</span></div><div class="q-text">' + fmt(q.q) + '</div>' + figure(q);
      q.options.forEach(function (o, j) { h += '<label class="opt"><input type="radio" name="' + name + '" value="' + j + '"><span><b>' + 'ABCD'[j] + '.</b> ' + fmt(o) + '</span></label>'; });
      return h + '<div class="feedback hidden"></div></div>';
    }
    function qTF(q, i) {
      var h = '<div class="q eq" data-part="tf" data-i="' + i + '"><div class="q-head"><span class="q-num">Câu ' + (i + 1) + '</span></div><div class="q-text">' + fmt(q.q) + '</div>' + figure(q) + '<table class="tf-table"><thead><tr><th>Ý</th><th>Nội dung</th><th>Đúng</th><th>Sai</th></tr></thead><tbody>';
      q.items.forEach(function (it, k) {
        var name = 'tf-' + i + '-' + k;
        h += '<tr data-k="' + k + '"><td><b>' + 'abcd'[k] + ')</b></td><td>' + fmt(it.s) + '</td><td><label class="tf-cell"><input type="radio" name="' + name + '" value="true" aria-label="Ý ' + 'abcd'[k] + ' đúng"></label></td><td><label class="tf-cell"><input type="radio" name="' + name + '" value="false" aria-label="Ý ' + 'abcd'[k] + ' sai"></label></td></tr>';
      });
      return h + '</tbody></table><div class="feedback hidden"></div></div>';
    }
    function qShort(q, i) {
      return '<div class="q eq" data-part="short" data-i="' + i + '"><div class="q-head"><span class="q-num">Câu ' + (i + 1) + '</span></div><div class="q-text">' + fmt(q.q) + '</div>' + figure(q) +
        '<input class="short" type="text" inputmode="text" name="short-' + i + '" autocomplete="off" placeholder="Đáp số">' + (q.unit ? ' <span class="muted">' + esc(q.unit) + '</span>' : '') + '<div class="feedback hidden"></div></div>';
    }
    function qEssay(q, i) {
      var h = '<div class="q eq" data-part="essay" data-i="' + i + '"><div class="q-head"><span class="q-num">Câu ' + (i + 1) + '</span><span class="q-tag">' + vn(q.parts.reduce(function (a, p) { return a + p.points; }, 0)) + ' điểm</span></div><div class="q-text">' + fmt(q.q) + '</div>' + figure(q);
      if (q.text) h += A.renderText(q.text);
      q.parts.forEach(function (p, k) {
        h += '<div class="essay-part">' + (q.parts.length > 1 ? '<b>' + 'abcdef'[k] + ')</b> ' : '') + fmt(p.q) + ' <span class="muted">(' + vn(p.points) + ' đ)</span>' +
          '<textarea name="essay-' + i + '-' + k + '" rows="' + (p.rows || 4) + '" placeholder="Viết bài làm của em (hoặc làm ra giấy rồi tự chấm)"></textarea></div>';
      });
      return h + '<div class="essay-key hidden"></div></div>';
    }

    /* ---------- Trang làm đề ---------- */
    function viewExam(c, k) {
      stopTimer();
      var m = T.subjects[c.subject], ex = k.exam, pp = partPoints(ex), mins = ex.minutes || 45, key = ekey(c, k);
      var st = A.store(); st.examRun = st.examRun || {};
      var run = st.examRun[key];
      var list = results(c, k);
      var h = A.crumbs([['Trang chủ', '#/'], ['Lớp ' + c.grade, '#/lop-' + c.grade], [m.name + ' ' + c.grade, base(c)], ['Ôn tập', base(c) + '/on-tap'], ['Đề ' + k.name]]) +
        '<h1>⏱️ Đề kiểm tra ' + esc(k.name.toLowerCase()) + ' – ' + esc(m.name) + ' ' + c.grade + '</h1>' +
        '<div class="card"><div><b>Thời gian:</b> ' + mins + ' phút · <b>Phạm vi:</b> ' + fmt(k.scope) + '</div><ul class="exam-parts">' +
        ['mcq', 'tf', 'short', 'essay'].filter(function (x) { return pp[x] > 0; }).map(function (x) { return '<li>' + PART_NAME[x] + (ex.partNames && ex.partNames[x] ? ' (' + esc(ex.partNames[x]) + ')' : '') + ': <b>' + vn(pp[x]) + ' điểm</b></li>'; }).join('') + '</ul>' +
        (ex.note ? '<div class="muted">' + fmt(ex.note) + '</div>' : '') +
        (list.length ? '<details class="exam-hist"><summary>Kết quả đã lưu (' + list.length + ')</summary><ul>' + list.slice().reverse().map(function (r) { return '<li>' + A.fmtDate(r.date) + ': trắc nghiệm ' + vn(r.obj) + ' đ' + (r.essay != null ? ' + tự luận (tự chấm) ' + vn(r.essay) + ' đ = <b>' + vn(r.total) + '</b>/10' : ' (chưa tự chấm tự luận)') + '</li>'; }).join('') + '</ul></details>' : '') +
        '<div class="btn-row"><button class="btn primary big" id="ex-start">' + (run ? '▶️ Làm tiếp bài đang dở' : '▶️ Bắt đầu làm bài') + '</button>' + (run ? '<button class="btn" id="ex-restart">↺ Làm lại từ đầu</button>' : '') +
        '<a class="btn ghost" href="' + base(c) + '/on-tap/' + k.id + '">📚 Ôn tập trước</a><a class="btn ghost" href="' + base(c) + '/de-thi/' + k.id + '/giao-vien">🧑‍🏫 Ma trận · đặc tả</a></div></div>' +
        '<form id="exam-form" class="hidden" autocomplete="off"><div class="exam-timer" id="ex-timer" role="timer" aria-live="off"><span id="ex-clock">' + mins + ':00</span><span id="ex-count" class="muted"></span><button type="button" class="btn primary" id="ex-submit">Nộp bài</button></div>';
      ['mcq', 'tf', 'short', 'essay'].forEach(function (part) {
        var qs = ex[part] || []; if (!qs.length) return;
        h += '<section class="card exam-part"><h2>' + PART_NAME[part] + ' <small class="muted">(' + vn(pp[part]) + ' điểm)</small></h2>' + (ex.partNotes && ex.partNotes[part] ? '<p class="muted">' + fmt(ex.partNotes[part]) + '</p>' : '');
        if (part === 'essay' && ex.essayText) h += A.renderText(ex.essayText);
        qs.forEach(function (q, i) { h += (part === 'mcq' ? qMCQ : part === 'tf' ? qTF : part === 'short' ? qShort : qEssay)(q, i); });
        h += '</section>';
      });
      h += '<div class="btn-row"><button type="button" class="btn primary big" id="ex-submit2">Nộp bài</button></div></form><div id="ex-result"></div>';
      return { title: 'Đề ' + k.name + ' – ' + m.name + ' ' + c.grade, html: h, mount: function (root) { mountExam(root, c, k); } };
    }

    function collect(form) {
      var a = {};
      form.querySelectorAll('input[type=radio]:checked').forEach(function (r) { a[r.name] = r.value; });
      form.querySelectorAll('input.short, textarea').forEach(function (t) { if (t.value.trim()) a[t.name] = t.value; });
      return a;
    }
    function restore(form, a) {
      Object.keys(a || {}).forEach(function (n) {
        var r = form.querySelector('input[type=radio][name="' + n + '"][value="' + a[n] + '"]');
        if (r) r.checked = true; else { var t = form.querySelector('[name="' + n + '"]'); if (t) t.value = a[n]; }
      });
    }
    function totalItems(ex) { return (ex.mcq || []).length + (ex.tf || []).reduce(function (s, q) { return s + q.items.length; }, 0) + (ex.short || []).length; }

    function mountExam(root, c, k) {
      var ex = k.exam, key = ekey(c, k), mins = ex.minutes || 45, form = root.querySelector('#exam-form');
      var st = A.store();
      function start(fresh) {
        if (fresh || !st.examRun[key]) st.examRun[key] = { start: Date.now(), ans: {} };
        A.save();
        restore(form, st.examRun[key].ans);
        root.querySelector('.card').classList.add('hidden');
        form.classList.remove('hidden');
        var hd = document.querySelector('.site-header'), tm = root.querySelector('#ex-timer');
        if (hd && tm) tm.style.top = (hd.offsetHeight + 6) + 'px';
        tick(); stopTimer(); timerId = setInterval(tick, 1000);
        window.scrollTo(0, 0);
      }
      function left() { return mins * 60 - Math.floor((Date.now() - st.examRun[key].start) / 1000); }
      function tick() {
        if (!document.body.contains(form) || !st.examRun[key]) { stopTimer(); return; }
        var s = left(); if (s <= 0) { submit(true); return; }
        var el = root.querySelector('#ex-clock');
        el.textContent = '⏱️ ' + Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2);
        el.parentNode.classList.toggle('low', s <= 300);
        var a = collect(form), n = 0;
        Object.keys(a).forEach(function (x) { if (!/^essay/.test(x)) n++; });
        root.querySelector('#ex-count').textContent = 'Đã trả lời ' + n + '/' + totalItems(ex) + ' ý trắc nghiệm';
      }
      form.addEventListener('change', function () { if (st.examRun[key]) { st.examRun[key].ans = collect(form); A.save(); } });
      form.addEventListener('input', function (e) { if (st.examRun[key] && (e.target.tagName === 'TEXTAREA' || e.target.classList.contains('short'))) { st.examRun[key].ans = collect(form); A.save(); } });
      function submit(auto) {
        var a = collect(form);
        if (!auto) {
          var miss = totalItems(ex) - Object.keys(a).filter(function (x) { return !/^essay/.test(x); }).length;
          if (miss > 0 && !window.confirm('Em còn ' + miss + ' ý trắc nghiệm chưa trả lời. Vẫn nộp bài?')) return;
        }
        stopTimer();
        var used = Math.min(mins * 60, Math.floor((Date.now() - st.examRun[key].start) / 1000));
        delete st.examRun[key];
        grade(root, c, k, form, a, used, auto);
      }
      root.querySelector('#ex-start').addEventListener('click', function () { start(false); });
      var rs = root.querySelector('#ex-restart'); if (rs) rs.addEventListener('click', function () { start(true); });
      root.querySelector('#ex-submit').addEventListener('click', function () { submit(false); });
      root.querySelector('#ex-submit2').addEventListener('click', function () { submit(false); });
      form.addEventListener('submit', function (e) { e.preventDefault(); });
    }

    function scoreTF(q, i, a) {
      var n = 0; q.items.forEach(function (it, k) { var v = a['tf-' + i + '-' + k]; if (v != null && (v === 'true') === it.answer) n++; });
      return n;
    }
    function grade(root, c, k, form, a, used, auto) {
      var ex = k.exam, sc = scheme(ex), pts = { mcq: 0, tf: 0, short: 0 };
      form.querySelectorAll('input, textarea').forEach(function (x) { x.disabled = true; });
      (ex.mcq || []).forEach(function (q, i) {
        var el = form.querySelector('[data-part=mcq][data-i="' + i + '"]'), v = a['mcq-' + i], ok = v != null && +v === q.answer;
        if (ok) pts.mcq += sc.mcq;
        el.querySelectorAll('label.opt').forEach(function (lb, j) { if (j === q.answer) lb.classList.add('is-correct'); else if (v != null && +v === j) lb.classList.add('is-wrong'); });
        fb(el, ok, (ok ? 'Đúng' : (v == null ? 'Chưa trả lời' : 'Chưa đúng')) + '. Đáp án: <b>' + 'ABCD'[q.answer] + '</b>. ' + fmt(q.explain || ''));
      });
      (ex.tf || []).forEach(function (q, i) {
        var el = form.querySelector('[data-part=tf][data-i="' + i + '"]'), n = scoreTF(q, i, a), got = TF_SCALE[n] * sc.tf;
        pts.tf += got;
        q.items.forEach(function (it, k2) {
          var tr = el.querySelector('tr[data-k="' + k2 + '"]'), v = a['tf-' + i + '-' + k2];
          tr.classList.add(v != null && (v === 'true') === it.answer ? 'right' : 'wrong');
          tr.children[1].insertAdjacentHTML('beforeend', '<div class="tf-key">→ <b>' + (it.answer ? 'Đúng' : 'Sai') + '</b>. ' + fmt(it.explain || '') + '</div>');
        });
        fb(el, n === 4, 'Em chọn đúng <b>' + n + '/4</b> ý → <b>' + vn(got) + '</b> điểm (thang: 1 ý 0,1; 2 ý 0,25; 3 ý 0,5; 4 ý 1).');
      });
      (ex.short || []).forEach(function (q, i) {
        var el = form.querySelector('[data-part=short][data-i="' + i + '"]'), v = a['short-' + i], ok = A.checkAnswer(Object.assign({ type: 'short' }, q), v == null ? null : v);
        if (ok) pts.short += sc.short;
        fb(el, ok, (ok ? 'Đúng' : (v == null ? 'Chưa trả lời' : 'Chưa đúng')) + '. Đáp số: <b>' + fmt(q.answerText || (Array.isArray(q.answer) ? q.answer[0] : q.answer)) + (q.unit ? ' ' + esc(q.unit) : '') + '</b>. ' + fmt(q.explain || ''));
      });
      var obj = r2(pts.mcq + pts.tf + pts.short), pp = partPoints(ex);
      // Tự luận: hiện đáp án và hướng dẫn chấm, học sinh tự đánh dấu
      (ex.essay || []).forEach(function (q, i) {
        var el = form.querySelector('[data-part=essay][data-i="' + i + '"]'), box = el.querySelector('.essay-key'), h = '<div class="box tip"><b>Đáp án và hướng dẫn chấm</b> – em đối chiếu bài làm và đánh dấu các ý đạt:';
        q.parts.forEach(function (p, k2) {
          h += '<div class="hdc-part"><div><b>' + (q.parts.length > 1 ? 'abcdef'[k2] + ') ' : '') + 'Bài giải mẫu:</b> ' + fmt(p.answer) + '</div><ul class="rubric">';
          p.rubric.forEach(function (r, j) { h += '<li><label><input type="checkbox" class="rb" data-pts="' + r[1] + '"> ' + fmt(r[0]) + ' <b>(' + vn(r[1]) + ' đ)</b></label></li>'; });
          h += '</ul></div>';
        });
        box.innerHTML = h + '</div>'; box.classList.remove('hidden');
        box.querySelectorAll('input').forEach(function (x) { x.disabled = false; });
      });
      var res = root.querySelector('#ex-result'), mm = Math.floor(used / 60), ss = used % 60;
      var rec = { date: Date.now(), obj: obj, essay: null, total: null, parts: { mcq: r2(pts.mcq), tf: r2(pts.tf), short: r2(pts.short) }, time: used };
      var s = A.store(); s.exams = s.exams || {}; var arr = s.exams[ekey(c, k)] = s.exams[ekey(c, k)] || [];
      arr.push(rec); if (arr.length > 20) arr.shift(); A.save();
      res.innerHTML = '<div class="card result-card">' + (auto ? '<p class="badge warn">Hết giờ – bài đã được nộp tự động.</p>' : '') +
        '<h2>Kết quả phần trắc nghiệm: ' + vn(obj) + ' / ' + vn(pp.mcq + pp.tf + pp.short) + ' điểm</h2>' +
        '<ul><li>Phần I: ' + vn(pts.mcq) + '/' + vn(pp.mcq) + '</li><li>Phần II: ' + vn(pts.tf) + '/' + vn(pp.tf) + '</li>' + (pp.short ? '<li>Phần III: ' + vn(pts.short) + '/' + vn(pp.short) + '</li>' : '') + '</ul>' +
        '<p>Thời gian làm bài: ' + mm + ' phút ' + ss + ' giây.</p>' +
        (pp.essay ? '<p><b>Phần tự luận (' + vn(pp.essay) + ' đ):</b> kéo xuống từng câu, đối chiếu bài giải mẫu và đánh dấu các ý em làm đúng. Điểm tự chấm: <b id="self-pts">0</b> đ → Tổng: <b id="self-total">' + vn(obj) + '</b>/10</p><button class="btn primary" id="save-self">💾 Lưu điểm tự chấm</button>' : '') +
        '<div class="btn-row"><a class="btn" href="' + base(c) + '/on-tap/' + k.id + '">📚 Ôn lại</a><button class="btn" id="ex-again">↺ Làm lại đề</button></div></div>';
      form.insertAdjacentElement('beforebegin', res);
      var timer = root.querySelector('#ex-timer'); if (timer) timer.classList.add('hidden');
      root.querySelectorAll('#ex-submit2').forEach(function (b) { b.classList.add('hidden'); });
      function selfPts() { var t = 0; form.querySelectorAll('input.rb:checked').forEach(function (x) { t += +x.dataset.pts; }); return r2(t); }
      form.addEventListener('change', function (e) { if (e.target.classList.contains('rb')) { root.querySelector('#self-pts').textContent = vn(selfPts()); root.querySelector('#self-total').textContent = vn(obj + selfPts()); } });
      var sv = root.querySelector('#save-self');
      if (sv) sv.addEventListener('click', function () { rec.essay = selfPts(); rec.total = r2(obj + rec.essay); A.save(); A.toast('Đã lưu: ' + vn(rec.total) + '/10'); });
      root.querySelector('#ex-again').addEventListener('click', function () { A.route(); });
      window.scrollTo(0, 0);
    }
    function fb(el, ok, html) { var f = el.querySelector('.feedback'); f.className = 'feedback ' + (ok ? 'ok' : 'bad'); f.innerHTML = html; }

    /* ---------- Trang giáo viên: ma trận, bản đặc tả, đáp án ---------- */
    function viewTeacher(c, k) {
      stopTimer();
      var m = T.subjects[c.subject], ex = k.exam, us = units(ex), pp = partPoints(ex), parts = ['mcq', 'tf', 'short', 'essay'].filter(function (x) { return pp[x] > 0; });
      var lvls = ['B', 'H', 'V'], PN = { mcq: 'Nhiều lựa chọn', tf: 'Đúng – Sai (số ý)', short: 'Trả lời ngắn', essay: 'Tự luận' };
      function cell(list) { return list.length ? '<b>' + list.length + '</b><br><small>' + list.map(function (u) { return u.label; }).join(', ') + '</small>' : ''; }
      function head(extra) {
        return '<thead><tr><th rowspan="2">TT</th><th rowspan="2">Chủ đề/Chương</th><th rowspan="2">Nội dung/đơn vị kiến thức</th>' + (extra ? '<th rowspan="2">Yêu cầu cần đạt</th>' : '') +
          parts.map(function (p) { return '<th colspan="3">' + PN[p] + '</th>'; }).join('') + (extra ? '' : '<th colspan="3">Tổng điểm</th><th rowspan="2">Tỉ lệ %</th>') + '</tr><tr>' +
          parts.concat(extra ? [] : ['sum']).map(function () { return lvls.map(function (l) { return '<th>' + LV[l] + '</th>'; }).join(''); }).join('') + '</tr></thead>';
      }
      var mat = '<table class="matrix">' + head(false) + '<tbody>', spec = '<table class="matrix spec">' + head(true) + '<tbody>';
      ex.topics.forEach(function (t, ti) {
        var tu = us.filter(function (u) { return u.topic === t.id; }), ch = chap(c, t.chapter);
        var row = '<td>' + (ti + 1) + '</td><td>' + esc(ch ? ch.title : t.chapter) + '</td><td>' + fmt(t.content) + '</td>';
        var cells = parts.map(function (p) { return lvls.map(function (l) { return '<td>' + cell(tu.filter(function (u) { return u.part === p && u.level === l; })) + '</td>'; }).join(''); }).join('');
        var sums = lvls.map(function (l) { return '<td>' + vn(tu.filter(function (u) { return u.level === l; }).reduce(function (a, u) { return a + u.pts; }, 0)) + '</td>'; }).join('');
        var tot = tu.reduce(function (a, u) { return a + u.pts; }, 0);
        mat += '<tr>' + row + cells + sums + '<td>' + Math.round(tot * 10) + '%</td></tr>';
        var y = t.yccd || {};
        spec += '<tr>' + row + '<td class="yccd">' + lvls.filter(function (l) { return y[l]; }).map(function (l) { return '<div><b>' + LV[l] + ':</b> ' + fmt(y[l]) + '</div>'; }).join('') + (t.nl ? '<div class="muted">Năng lực: ' + esc(t.nl) + '</div>' : '') + '</td>' + cells + '</tr>';
      });
      function totRow(label, f, extra) { return '<tr class="tot"><td colspan="' + (extra ? 4 : 3) + '"><b>' + label + '</b></td>' + parts.map(function (p) { return f(p); }).join('') + '</tr>'; }
      var nCau = function (p) { return lvls.map(function (l) { return '<td>' + us.filter(function (u) { return u.part === p && u.level === l; }).length + '</td>'; }).join(''); };
      var lvPts = lvls.map(function (l) { return us.filter(function (u) { return u.level === l; }).reduce(function (a, u) { return a + u.pts; }, 0); });
      mat += totRow('Tổng số câu (Đúng – Sai: số ý)', nCau) .replace('</tr>', '<td colspan="3"></td><td></td></tr>') +
        totRow('Tổng số điểm', function (p) { return '<td colspan="3">' + vn(pp[p]) + '</td>'; }).replace('</tr>', lvPts.map(function (x) { return '<td>' + vn(x) + '</td>'; }).join('') + '<td>10,0</td></tr>') +
        totRow('Tỉ lệ %', function (p) { return '<td colspan="3">' + Math.round(pp[p] * 10) + '</td>'; }).replace('</tr>', lvPts.map(function (x) { return '<td>' + Math.round(x * 10) + '</td>'; }).join('') + '<td>100</td></tr>') + '</tbody></table>';
      spec += totRow('Tổng số câu (Đúng – Sai: số ý)', nCau, true) + totRow('Tổng số điểm', function (p) { return '<td colspan="3">' + vn(pp[p]) + '</td>'; }, true) + totRow('Tỉ lệ %', function (p) { return '<td colspan="3">' + Math.round(pp[p] * 10) + '</td>'; }, true) + '</tbody></table>';
      // Đáp án và hướng dẫn chấm
      var sc = scheme(ex), key = '<h2>3. Đáp án và hướng dẫn chấm</h2>';
      if ((ex.mcq || []).length) key += '<h3>' + PART_NAME.mcq + ' – mỗi câu ' + vn(sc.mcq) + ' đ</h3><div class="table-wrap"><table class="matrix"><tr>' + ex.mcq.map(function (q, i) { return '<th>C' + (i + 1) + '</th>'; }).join('') + '</tr><tr>' + ex.mcq.map(function (q) { return '<td><b>' + 'ABCD'[q.answer] + '</b></td>'; }).join('') + '</tr></table></div>';
      if ((ex.tf || []).length) key += '<h3>' + PART_NAME.tf + ' – mỗi câu ' + vn(sc.tf) + ' đ (đúng 1 ý: ' + vn(0.1 * sc.tf) + '; 2 ý: ' + vn(0.25 * sc.tf) + '; 3 ý: ' + vn(0.5 * sc.tf) + '; 4 ý: ' + vn(sc.tf) + ')</h3><div class="table-wrap"><table class="matrix"><tr><th>Câu</th><th>a)</th><th>b)</th><th>c)</th><th>d)</th></tr>' + ex.tf.map(function (q, i) { return '<tr><td>C' + (i + 1) + '</td>' + q.items.map(function (it) { return '<td>' + (it.answer ? 'Đ' : 'S') + '</td>'; }).join('') + '</tr>'; }).join('') + '</table></div>';
      if ((ex.short || []).length) key += '<h3>' + PART_NAME.short + ' – mỗi câu ' + vn(sc.short) + ' đ</h3><div class="table-wrap"><table class="matrix"><tr>' + ex.short.map(function (q, i) { return '<th>C' + (i + 1) + '</th>'; }).join('') + '</tr><tr>' + ex.short.map(function (q) { return '<td><b>' + fmt(q.answerText || (Array.isArray(q.answer) ? q.answer[0] : q.answer)) + '</b></td>'; }).join('') + '</tr></table></div>';
      (ex.essay || []).forEach(function (q, i) {
        key += '<h3>' + PART_NAME.essay + ' – Câu ' + (i + 1) + '</h3><div class="table-wrap"><table class="matrix hdc"><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr>';
        q.parts.forEach(function (p, k2) { p.rubric.forEach(function (r, j) { key += '<tr>' + (j === 0 ? '<td rowspan="' + p.rubric.length + '">' + (q.parts.length > 1 ? 'abcdef'[k2] + ')' : '') + '</td>' : '') + '<td>' + fmt(r[0]) + '</td><td>' + vn(r[1]) + '</td></tr>'; }); });
        key += '</table></div>';
      });
      var h = A.crumbs([['Trang chủ', '#/'], ['Lớp ' + c.grade, '#/lop-' + c.grade], [m.name + ' ' + c.grade, base(c)], ['Ôn tập', base(c) + '/on-tap'], ['Đề ' + k.name, base(c) + '/de-thi/' + k.id], ['Ma trận · đặc tả']]) +
        '<h1>🧑‍🏫 Ma trận, bản đặc tả, đáp án – đề ' + esc(k.name.toLowerCase()) + ' ' + esc(m.name) + ' ' + c.grade + '</h1>' +
        '<div class="card box note">Trang dành cho thầy cô và phụ huynh. Mẫu bảng theo Phụ lục Công văn 7991/BGDĐT-GDTrH; ô ghi số câu và số thứ tự câu (C1, C2…; câu đúng – sai ghi theo ý: C1a, C1b…). Thời gian ' + (ex.minutes || 45) + ' phút. <button class="btn" onclick="window.print()">🖨️ In</button></div>' +
        '<h2>1. Ma trận đề kiểm tra</h2><div class="table-wrap">' + mat + '</div><h2>2. Bản đặc tả đề kiểm tra</h2><div class="table-wrap">' + spec + '</div>' + key;
      return { title: 'Ma trận đề ' + k.name + ' – ' + m.name + ' ' + c.grade, html: h };
    }

    return {
      has: function (c) { return !!pack(c); },
      banner: function (c) {
        var p = pack(c); if (!p) return '';
        return '<div class="card diag-banner exam-banner"><div class="d-ico" aria-hidden="true">🗓️</div><div class="d-text"><b>Ôn tập & kiểm tra định kì</b><br>4 bài ôn tập (giữa kì 1, cuối kì 1, giữa kì 2, cuối kì 2) và 4 đề 45 phút theo cấu trúc Công văn 7991.</div><a class="btn primary" href="' + base(c) + '/on-tap">Mở</a></div>';
      },
      route: function (c, rest) {
        stopTimer();
        if (!pack(c)) return null;
        if (rest[0] === 'on-tap' && !rest[1]) return viewIndex(c);
        var k = cp(c, rest[1]); if (!k) return null;
        if (rest[0] === 'on-tap') return viewReview(c, k);
        if (rest[0] === 'de-thi' && !rest[2]) return viewExam(c, k);
        if (rest[0] === 'de-thi' && rest[2] === 'giao-vien') return viewTeacher(c, k);
        return null;
      },
      stop: stopTimer
    };
  };
})();
