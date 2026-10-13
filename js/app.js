/* THCS Tự Học – ứng dụng chính (định tuyến, giao diện, chấm bài, tiến độ). Không phụ thuộc thư viện ngoài. */
(function () {
  'use strict';
  var T = window.THCS;
  var STORE_KEY = 'thcs-tu-hoc:v1';
  var PASS = 80;
  var app = document.getElementById('app');

  /* ---------- Tiện ích ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // Định dạng nội dung: {{tử|mẫu}} -> phân số hiển thị đẹp
  function fmt(s) {
    if (s == null) return '';
    return String(s).replace(/\{\{([^{}|]+)\|([^{}]+)\}\}/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
  }
  function fold(s) { // bỏ dấu tiếng Việt, chữ thường
    return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  }
  function pct(a, b) { return b ? Math.round(a * 100 / b) : 0; }
  function levelClass(p) { return p >= PASS ? 'ok' : (p >= 50 ? 'warn' : 'bad'); }
  function fmtDate(ts) { var d = new Date(ts); return d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }); }
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }
  function setSubjectColor(subj) {
    var m = T.subjects[subj];
    document.documentElement.style.setProperty('--subj', m ? m.color : '#4f46e5');
    document.documentElement.style.setProperty('--subj-light', m ? m.light : '#eef2ff');
  }

  /* ---------- Lưu trữ tiến độ ---------- */
  var store = load();
  function load() {
    try { var s = JSON.parse(localStorage.getItem(STORE_KEY)); if (s && typeof s === 'object') return fix(s); } catch (e) { /* bỏ qua */ }
    return fix({});
  }
  function fix(s) { s.lessons = s.lessons || {}; s.diagnostics = s.diagnostics || {}; return s; }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { toast('Không lưu được tiến độ trên trình duyệt này.'); } }

  /* ---------- Truy vấn dữ liệu ---------- */
  function course(subj, grade) { return T.courses[subj + '-' + grade]; }
  function allLessons(c) {
    var out = [];
    if (!c) return out;
    c.chapters.forEach(function (ch) { ch.lessons.forEach(function (l) { out.push({ lesson: l, chapter: ch }); }); });
    return out;
  }
  function chTitle(ch) { return (ch.part ? ch.part.replace(/^Phân môn /, '') + ' · ' : '') + ch.title; }
  function hasDiag(c) { return !!(c && c.diagnostic && c.diagnostic.questions && c.diagnostic.questions.length); }
  function lessonKey(c, l) { return c.key + '/' + l.id; }
  function content(c, l) { return T.lessons[lessonKey(c, l)]; }
  function lessonUrl(c, l) { return '#/lop-' + c.grade + '/' + c.subject + '/' + l.id; }
  function courseStats(c) {
    var list = allLessons(c), authored = 0, done = 0;
    list.forEach(function (x) { if (content(c, x.lesson)) authored++; var p = store.lessons[lessonKey(c, x.lesson)]; if (p && p.completed) done++; });
    return { total: list.length, authored: authored, done: done };
  }
  function findLesson(c, id) {
    var list = allLessons(c);
    for (var i = 0; i < list.length; i++) if (list[i].lesson.id === id) return { item: list[i], index: i, list: list };
    return null;
  }

  /* ---------- Khung trang ---------- */
  function crumbs(items) {
    return '<nav class="breadcrumb" aria-label="Đường dẫn">' + items.map(function (it, i) {
      var last = i === items.length - 1;
      return (last || !it[1] ? '<span>' + esc(it[0]) + '</span>' : '<a href="' + it[1] + '">' + esc(it[0]) + '</a>') + (last ? '' : ' <span>›</span>');
    }).join(' ') + '</nav>';
  }
  function progressBar(p, cls) { return '<div class="progress ' + (cls || '') + '" role="progressbar" aria-valuenow="' + p + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + p + '%"></span></div>'; }

  /* ---------- Trang chủ ---------- */
  function viewHome() {
    setSubjectColor(null);
    var hello = store.name ? 'Chào ' + esc(store.name) + '! 👋' : 'Chào em! 👋';
    var html = '<section class="hero"><div class="hero-art" aria-hidden="true">🎒</div><div>' +
      '<h1>' + hello + '</h1><p>Cùng tự học các môn <b>Toán</b>, <b>Ngữ văn</b>, <b>Khoa học tự nhiên</b>, <b>Tin học</b>, <b>Giáo dục công dân</b>, <b>Lịch sử và Địa lí</b> lớp 6 – 9 theo Chương trình giáo dục phổ thông 2018.</p>' +
      '<p class="muted">Chọn lớp của em để bắt đầu. Mỗi bài học có lí thuyết từng bước, ví dụ mẫu, bài luyện tập có gợi ý và bài kiểm tra tự chấm điểm.</p></div></section>' +
      '<h2>Em đang học lớp mấy?</h2><div class="grid cols-4">';
    T.grades.forEach(function (g) {
      var tot = 0, done = 0, auth = 0;
      T.subjectOrder.forEach(function (s) { var c = course(s, g); if (c) { var st = courseStats(c); tot += st.total; done += st.done; auth += st.authored; } });
      html += '<a class="grade-card g' + g + '" href="#/lop-' + g + '"><div><div class="g-label">Lớp</div><div class="g-num">' + g + '</div></div>' +
        '<div class="g-meta">' + tot + ' bài học · ' + auth + ' bài đã có nội dung<br>Em đã hoàn thành: ' + done + ' bài</div></a>';
    });
    html += '</div><h2 style="margin-top:30px">Các môn học</h2><div class="subject-chips">' + T.subjectOrder.map(function (s) { var m = T.subjects[s]; return '<span class="subject-chip" style="--c:' + m.color + ';--cl:' + m.light + '"><span aria-hidden="true">' + m.icon + '</span> ' + esc(m.name) + '</span>'; }).join('') + '</div>';
    html += '<h2 style="margin-top:30px">Học thế nào cho hiệu quả?</h2><div class="steps-intro">' +
      '<div><b>1. Kiểm tra đầu vào</b>Làm bài kiểm tra ngắn để biết mình đã vững phần nào.</div>' +
      '<div><b>2. Học từng bước</b>Đọc lí thuyết theo từng bước nhỏ, bấm “Tiếp tục” khi đã hiểu.</div>' +
      '<div><b>3. Luyện tập</b>Tự làm trước, cần thì xem Gợi ý 1, Gợi ý 2 rồi mới xem lời giải.</div>' +
      '<div><b>4. Kiểm tra cuối bài</b>Đạt từ 80% trở lên là hoàn thành bài học.</div></div>' +
      '<p style="margin-top:18px"><a class="btn" href="#/huong-dan">📘 Xem hướng dẫn tự học</a> <a class="btn" href="#/tien-do">📊 Tiến độ của em</a></p>';
    return { title: 'Trang chủ', html: html };
  }

  /* ---------- Trang lớp ---------- */
  function viewGrade(g) {
    setSubjectColor(null);
    var html = crumbs([['Trang chủ', '#/'], ['Lớp ' + g]]) + '<h1>Lớp ' + g + ' – Chọn môn học</h1><div class="grid cols-3">';
    T.subjectOrder.forEach(function (s) {
      var m = T.subjects[s], c = course(s, g);
      if (!c) return;
      var st = courseStats(c), p = pct(st.done, st.total), d = store.diagnostics[c.key];
      html += '<div class="card subject-card" style="--c:' + m.color + ';--cl:' + m.light + ';--subj:' + m.color + '">' +
        '<div class="s-icon" aria-hidden="true">' + m.icon + '</div><h2>' + esc(m.name) + ' ' + g + '</h2><div class="muted">' + esc(m.desc) + '</div>' +
        '<div>' + c.chapters.length + ' chương/chủ đề · ' + st.total + ' bài · <b>' + st.authored + '</b> bài đã có nội dung</div>' +
        progressBar(p) + '<div class="muted" style="font-size:.85rem">Đã hoàn thành ' + st.done + '/' + st.total + ' bài' +
        (d ? ' · Kiểm tra đầu vào: ' + d.score + '/' + d.total : '') + '</div>' +
        '<div class="btn-row"><a class="btn primary" style="background:' + m.color + ';border-color:' + m.color + '" href="#/lop-' + g + '/' + s + '">Vào học</a>' +
        (hasDiag(c) ? '<a class="btn" href="#/lop-' + g + '/' + s + '/kiem-tra-dau-vao">📝 Kiểm tra đầu vào</a>' : '<span class="muted" style="align-self:center;font-size:.85rem">🕒 Nội dung đang được biên soạn</span>') + '</div></div>';
    });
    html += '</div>';
    return { title: 'Lớp ' + g, html: html };
  }

  /* ---------- Trang môn học ---------- */
  function viewSubject(g, s) {
    var c = course(s, g), m = T.subjects[s];
    if (!c) return viewNotFound();
    setSubjectColor(s);
    var st = courseStats(c), d = store.diagnostics[c.key];
    var html = crumbs([['Trang chủ', '#/'], ['Lớp ' + g, '#/lop-' + g], [m.name]]) +
      '<section class="subject-head"><div class="s-icon" aria-hidden="true">' + m.icon + '</div><div style="flex:1;min-width:220px"><h1>' + esc(m.name) + ' ' + g + '</h1>' +
      '<div style="opacity:.92">Theo thứ tự bài học của sách giáo khoa bộ “' + esc(c.book || 'Kết nối tri thức với cuộc sống') + '”</div>' +
      '<div style="margin-top:10px">' + progressBar(pct(st.done, st.total)) + '<small>Đã hoàn thành ' + st.done + '/' + st.total + ' bài · ' + st.authored + ' bài đã có nội dung</small></div></div></section>';
    if (EX && EX.has(c)) html += EX.banner(c);
    if (hasDiag(c)) {
    html += '<div class="card diag-banner"><div class="d-ico" aria-hidden="true">📝</div><div class="d-text"><b>Kiểm tra đầu vào</b><br>';
    if (d) {
      html += 'Lần gần nhất (' + fmtDate(d.date) + '): đúng <b>' + d.score + '/' + d.total + '</b> câu (' + pct(d.score, d.total) + '%). ' +
        (d.recommended && d.recommended.length ? 'Có ' + d.recommended.length + ' bài em nên ôn lại.' : 'Em đã nắm vững kiến thức được kiểm tra!');
    } else {
      html += '<span class="muted">Làm ' + (c.diagnostic ? c.diagnostic.questions.length : 0) + ' câu hỏi ngắn để biết em cần học kĩ những bài nào.</span>';
    }
    html += '</div><a class="btn primary" href="#/lop-' + g + '/' + s + '/kiem-tra-dau-vao">' + (d ? 'Xem / làm lại' : 'Làm bài ngay') + '</a></div>';
    } else {
      html += '<div class="card box note">🕒 Các bài học của môn này đang được biên soạn. Em có thể xem trước khung chương trình (danh sách chương, bài) ở dưới đây.</div>';
    }
    var lastPart = null;
    c.chapters.forEach(function (ch, ci) {
      if (ch.part && ch.part !== lastPart) { html += '<h2 class="part-head">' + esc(ch.part) + '</h2>'; lastPart = ch.part; }
      var doneN = 0, authN = 0;
      ch.lessons.forEach(function (l) { if (content(c, l)) authN++; var p = store.lessons[lessonKey(c, l)]; if (p && p.completed) doneN++; });
      html += '<details class="card chapter"' + (ci < 2 || authN ? ' open' : '') + '><summary><span>' + esc(ch.title) + '</span><span class="ch-meta">' + doneN + '/' + ch.lessons.length + ' hoàn thành</span></summary><ul class="lesson-list">';
      ch.lessons.forEach(function (l) {
        var has = !!content(c, l), p = store.lessons[lessonKey(c, l)], done = p && p.completed;
        var cls = done ? 'done' : (has ? 'ready' : 'wip');
        var ico = done ? '✅' : (has ? '📘' : '🕒');
        var badge = done ? '<span class="badge ok">Đã hoàn thành' + (p.best != null ? ' · ' + p.best + '%' : '') + '</span>' :
          (has ? (p && p.best != null ? '<span class="badge warn">Điểm cao nhất ' + p.best + '%</span>' : '<span class="badge">Học ngay</span>') : '<span class="badge wip">Đang biên soạn</span>');
        html += '<li class="' + cls + '"><a href="' + lessonUrl(c, l) + '"><span class="l-ico" aria-hidden="true">' + ico + '</span><span class="l-title">' + esc(l.title) + '</span>' + badge + '</a></li>';
      });
      html += '</ul></details>';
    });
    return { title: m.name + ' ' + g, html: html };
  }

  /* ---------- Bộ chấm câu hỏi (dùng chung cho kiểm tra cuối bài và kiểm tra đầu vào) ---------- */
  var TYPE_LABEL = { mcq: 'Trắc nghiệm', tf: 'Đúng / Sai', short: 'Trả lời ngắn' };
  function renderQuestion(q, i, prefix, tag) {
    var name = prefix + '-q' + i, h = '<div class="q" data-i="' + i + '"><div class="q-head"><span class="q-num">Câu ' + (i + 1) + '</span><span class="q-type">' + TYPE_LABEL[q.type] + '</span>' + (tag ? '<span class="q-tag">' + esc(tag) + '</span>' : '') + '</div>' +
      '<div class="q-text">' + fmt(q.q) + '</div>' + figure(q);
    if (q.type === 'mcq') {
      // Xáo trộn thứ tự phương án mỗi lần hiển thị (trừ khi câu hỏi đặt keepOrder: true).
      // Giá trị của ô chọn vẫn là chỉ số gốc nên việc chấm điểm không đổi.
      var order = q.options.map(function (o, k) { return k; });
      if (!q.keepOrder) for (var r = order.length - 1; r > 0; r--) { var j = Math.floor(Math.random() * (r + 1)), t = order[r]; order[r] = order[j]; order[j] = t; }
      q._order = order;
      order.forEach(function (k, pos) {
        h += '<label class="opt"><input type="radio" name="' + name + '" value="' + k + '"><span><b>' + 'ABCDEFGH'[pos] + '.</b> ' + fmt(q.options[k]) + '</span></label>';
      });
    } else if (q.type === 'tf') {
      h += '<div class="tf-row"><label class="opt"><input type="radio" name="' + name + '" value="true"><span>✔️ Đúng</span></label><label class="opt"><input type="radio" name="' + name + '" value="false"><span>✖️ Sai</span></label></div>';
    } else {
      h += '<input class="short" type="text" name="' + name + '" autocomplete="off" placeholder="' + esc(q.placeholder || 'Nhập câu trả lời của em') + '">' + (q.unit ? ' <span class="muted">' + esc(q.unit) + '</span>' : '');
    }
    return h + '<div class="feedback hidden" aria-live="polite"></div></div>';
  }
  function normAns(s) {
    return fold(s).replace(/\s+/g, ' ').trim().replace(/[.。]$/, '').replace(/\s*([=+\-×x*/:;,()])\s*/g, '$1');
  }
  // key = true: chuỗi đáp án trong dữ liệu (dấu '.' luôn là dấu thập phân, ví dụ '0.225').
  // key = false: chữ học sinh gõ – '1.000.000' được hiểu là nhóm hàng nghìn kiểu Việt Nam.
  function toNumber(s, key) {
    var t = String(s).trim().replace(/\s/g, '').replace(/−/g, '-');
    if (!key && /^-?[1-9]\d{0,2}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, ''); // 1.000.000 kiểu Việt Nam
    t = t.replace(',', '.');
    var fr = /^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/.exec(t);
    if (fr) return parseFloat(fr[1]) / parseFloat(fr[2]);
    return /^-?\d+(\.\d+)?$/.test(t) ? parseFloat(t) : NaN;
  }
  function readAnswer(qEl, q) {
    if (q.type === 'short') { var v = qEl.querySelector('input.short').value; return v.trim() === '' ? null : v; }
    var r = qEl.querySelector('input[type=radio]:checked');
    return r ? r.value : null;
  }
  function gcdInt(a, b) { return b ? gcdInt(b, a % b) : a; }
  // Dạng tối giản: số nguyên, hoặc phân số a/b với b > 1 (mẫu dương) và ƯCLN(|a|, b) = 1
  function isSimplest(s) {
    var t = String(s).trim().replace(/\s/g, '').replace(/−/g, '-');
    if (/^-?\d+$/.test(t)) return true;
    var m = /^(-?\d+)\/(\d+)$/.exec(t);
    return !!m && +m[2] > 1 && gcdInt(Math.abs(+m[1]), +m[2]) === 1;
  }
  function stripUnit(q, given) {
    if (!q.unit) return given;
    var u = fold(q.unit).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var gf = fold(given).trim(), m = new RegExp('\\s*' + u + '$').exec(gf);
    return m && m.index > 0 ? gf.slice(0, m.index) : given;
  }
  // Đúng giá trị nhưng chưa tối giản (chỉ dùng để hiện lời nhắc)
  function notSimplest(q, given) {
    if (!q.requireSimplest || given == null) return false;
    var g = stripUnit(q, given);
    if (isSimplest(g)) return false;
    return checkAnswer(Object.assign({}, q, { requireSimplest: false }), given);
  }
  function checkAnswer(q, given) {
    if (given == null) return false;
    if (q.type === 'mcq') return Number(given) === q.answer;
    if (q.type === 'tf') return (given === 'true') === q.answer;
    var answers = Array.isArray(q.answer) ? q.answer : [q.answer];
    given = stripUnit(q, given); // cho phép học sinh gõ kèm đơn vị, ví dụ "50 J"
    if (q.requireSimplest && !isSimplest(given)) return false; // đề yêu cầu phân số tối giản
    var gNum = toNumber(given), gDec = toNumber(given, true); // gDec: phòng khi học sinh dùng '.' làm dấu thập phân (1.125)
    for (var i = 0; i < answers.length; i++) {
      var a = String(answers[i]);
      var aNum = toNumber(a, true);
      if (!isNaN(aNum) && ((!isNaN(gNum) && Math.abs(gNum - aNum) < 1e-9) || (!isNaN(gDec) && Math.abs(gDec - aNum) < 1e-9))) return true;
      if (normAns(given) === normAns(a)) return true;
    }
    return false;
  }
  function correctText(q) {
    if (q.type === 'mcq') return 'ABCDEFGH'[q._order ? q._order.indexOf(q.answer) : q.answer] + '. ' + fmt(q.options[q.answer]);
    if (q.type === 'tf') return q.answer ? 'Đúng' : 'Sai';
    return fmt(q.answerText || (Array.isArray(q.answer) ? q.answer[0] : q.answer));
  }
  // Chấm cả form, hiển thị phản hồi từng câu; trả về mảng kết quả đúng/sai
  function gradeForm(form, questions) {
    var results = [];
    form.querySelectorAll('.q').forEach(function (qEl) {
      var i = +qEl.dataset.i, q = questions[i], given = readAnswer(qEl, q), ok = checkAnswer(q, given);
      results[i] = ok;
      qEl.classList.add(ok ? 'correct' : 'wrong');
      qEl.querySelectorAll('input').forEach(function (inp) { inp.disabled = true; });
      if (q.type !== 'short') {
        qEl.querySelectorAll('.opt').forEach(function (lab) {
          var inp = lab.querySelector('input'), val = inp.value;
          var isRight = q.type === 'mcq' ? Number(val) === q.answer : (val === 'true') === q.answer;
          if (isRight) lab.classList.add('is-correct'); else if (inp.checked) lab.classList.add('is-wrong');
        });
      }
      var fb = qEl.querySelector('.feedback');
      fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = (ok ? '✅ <b>Chính xác!</b>' : (given == null ? '⚠️ <b>Em chưa trả lời câu này.</b>' : notSimplest(q, given) ? '❌ <b>Đúng giá trị nhưng phân số chưa tối giản.</b>' : '❌ <b>Chưa đúng.</b>') + ' Đáp án đúng: <b>' + correctText(q) + '</b>') +
        (q.explain ? '<div style="margin-top:6px">💬 ' + fmt(q.explain) + '</div>' : '');
    });
    return results;
  }
  function countUnanswered(form, questions) {
    var n = 0; form.querySelectorAll('.q').forEach(function (qEl) { if (readAnswer(qEl, questions[+qEl.dataset.i]) == null) n++; }); return n;
  }

  /* ---------- Trang bài học ---------- */
  function viewLesson(g, s, id) {
    var c = course(s, g), m = T.subjects[s];
    if (!c) return viewNotFound();
    var found = findLesson(c, id);
    if (!found) return viewNotFound();
    setSubjectColor(s);
    var l = found.item.lesson, ch = found.item.chapter, data = content(c, l), key = lessonKey(c, l), prog = store.lessons[key];
    var prev = found.list[found.index - 1], next = found.list[found.index + 1];
    var html = crumbs([['Trang chủ', '#/'], ['Lớp ' + g, '#/lop-' + g], [m.name, '#/lop-' + g + '/' + s], [l.title]]);
    html += '<section class="card lesson-head"><div class="muted">' + esc(m.icon + ' ' + m.name + ' ' + g + ' · ' + chTitle(ch)) + '</div><h1>' + esc(l.title) + '</h1>' +
      (prog && prog.completed ? '<span class="badge ok">✅ Đã hoàn thành · điểm cao nhất ' + prog.best + '%</span>' : (prog && prog.best != null ? '<span class="badge warn">Điểm cao nhất: ' + prog.best + '%</span>' : ''));
    if (!data) {
      html += '</section><section class="card placeholder"><div class="p-ico" aria-hidden="true">🛠️</div><h2>Bài học đang được biên soạn</h2>' +
        '<p>Thầy cô đang soạn nội dung cho bài này. Em hãy quay lại sau nhé!</p><p class="muted">Trong lúc chờ, em có thể học các bài đã có nội dung hoặc làm bài kiểm tra đầu vào của môn.</p>' +
        '<div class="btn-row" style="justify-content:center"><a class="btn primary" href="#/lop-' + g + '/' + s + '">Về danh sách bài</a><a class="btn" href="#/lop-' + g + '/' + s + '/kiem-tra-dau-vao">📝 Kiểm tra đầu vào</a></div></section>';
    } else {
      html += '<div class="lesson-toc"><a href="#muc-tieu" data-scroll>🎯 Mục tiêu</a>' + (data.text ? '<a href="#van-ban" data-scroll>📖 Văn bản</a>' : '') + '<a href="#hoc-tung-buoc" data-scroll>🪜 Học từng bước</a><a href="#vi-du" data-scroll>✏️ Ví dụ mẫu</a><a href="#luyen-tap" data-scroll>💪 Luyện tập</a><a href="#kiem-tra" data-scroll>🏁 Kiểm tra cuối bài</a></div></section>';
      html += '<section class="card sec" id="muc-tieu"><h2><span class="num">1</span>Mục tiêu bài học</h2><p class="muted" style="margin-top:0">Học xong bài này, em sẽ:</p><ul class="objectives">' +
        data.objectives.map(function (o) { return '<li>' + fmt(o) + '</li>'; }).join('') + '</ul>' + (data.intro ? '<div class="box note">' + fmt(data.intro) + '</div>' : '') + '</section>';
      if (data.text) html += '<section class="card sec" id="van-ban"><h2><span class="num">📖</span>Văn bản đọc</h2>' + renderText(data.text) + '</section>';
      var n = data.steps.length;
      html += '<section class="card sec" id="hoc-tung-buoc"><h2><span class="num">2</span>Học từng bước</h2>' +
        '<div class="step-progress">' + progressBar(pct(1, n)) + '<span class="txt" id="step-txt">Bước 1/' + n + '</span></div><ol class="step-list">' +
        data.steps.map(function (st, i) { return '<li class="step' + (i === 0 ? ' current' : ' hidden') + '" data-step="' + i + '"><div class="s-title">Bước ' + (i + 1) + ': ' + fmt(st.title) + '</div>' + fmt(st.html) + figure(st) + '</li>'; }).join('') +
        '</ol><div class="btn-row" id="step-actions"><button class="btn primary big" id="btn-next-step">Tiếp tục ➜</button><button class="btn ghost" id="btn-all-steps">Hiện tất cả các bước</button></div>' +
        '<div class="step-done hidden" id="step-done">🎉 Em đã học xong phần lí thuyết! Hãy xem các ví dụ mẫu bên dưới nhé.' + (data.summary ? '<div class="box key" style="margin-bottom:0;font-weight:400"><b>Ghi nhớ:</b> ' + fmt(data.summary) + '</div>' : '') + '</div></section>';
      html += '<section class="card sec" id="vi-du"><h2><span class="num">3</span>Ví dụ mẫu</h2>' + data.examples.map(function (ex, i) {
        return '<div class="example"><div class="e-title">Ví dụ ' + (i + 1) + (ex.title ? ': ' + fmt(ex.title) : '') + '</div><div>' + fmt(ex.problem) + '</div>' + figure(ex) +
          '<button class="btn" data-toggle-sol style="margin-top:10px">👀 Xem lời giải</button><div class="solution hidden"><b>Lời giải:</b> ' + fmt(ex.solution) + '</div></div>';
      }).join('') + '</section>';
      html += '<section class="card sec" id="luyen-tap"><h2><span class="num">4</span>Luyện tập</h2><p class="muted" style="margin-top:0">Em hãy tự làm vào vở trước. Khi cần, bấm lần lượt “Gợi ý 1”, “Gợi ý 2” rồi mới “Xem lời giải”.</p>' +
        data.exercises.map(function (ex, i) {
          var hints = ex.hints || [];
          return '<div class="exercise" data-ex="' + i + '" data-level="0" data-hints="' + hints.length + '"><div class="e-title">Bài ' + (i + 1) + '</div><div>' + fmt(ex.question) + '</div>' + figure(ex) +
            hints.map(function (h, k) { return '<div class="hint hidden" data-h="' + k + '"><b>💡 Gợi ý ' + (k + 1) + ':</b> ' + fmt(h) + '</div>'; }).join('') +
            '<div class="solution hidden"><b>✅ Lời giải:</b> ' + fmt(ex.solution) + '</div>' +
            '<div class="btn-row"><button class="btn" data-hint-btn>' + (hints.length ? '💡 Gợi ý 1' : '✅ Xem lời giải') + '</button></div></div>';
        }).join('') + '</section>';
      html += '<section class="card sec" id="kiem-tra"><h2><span class="num">5</span>Kiểm tra cuối bài</h2><p class="muted" style="margin-top:0">Gồm ' + data.quiz.length + ' câu. Làm đúng từ ' + PASS + '% trở lên, bài học sẽ được đánh dấu <b>“Đã hoàn thành”</b>. Với câu trả lời ngắn, em chỉ cần nhập số hoặc từ ngắn gọn.</p>' +
        (data.text ? '<details class="reread"><summary>📖 Xem lại văn bản đọc</summary>' + renderText(data.text) + '</details>' : '') +
        '<form id="quiz-form" novalidate>' + data.quiz.map(function (q, i) { return renderQuestion(q, i, 'lq'); }).join('') +
        '<div class="quiz-warn hidden" id="quiz-warn"></div><div class="btn-row"><button type="submit" class="btn primary big">📤 Nộp bài</button></div></form><div id="quiz-result"></div></section>';
    }
    html += '<nav class="lesson-nav">' + (prev ? '<a class="btn" href="' + lessonUrl(c, prev.lesson) + '">← ' + esc(prev.lesson.title) + '</a>' : '<span></span>') +
      (next ? '<a class="btn" href="' + lessonUrl(c, next.lesson) + '">' + esc(next.lesson.title) + ' →</a>' : '') + '</nav>';
    return { title: l.title, html: html, mount: data ? function (root) { mountLesson(root, c, l, data); } : null };
  }

  function figure(it) { // hình minh hoạ SVG tuỳ chọn: it.svg (chuỗi hoặc mảng chuỗi) + it.caption
    if (!it || !it.svg) return '';
    var svgs = Array.isArray(it.svg) ? it.svg.join('') : it.svg;
    return '<figure class="fig">' + svgs + (it.caption ? '<figcaption>' + fmt(it.caption) + '</figcaption>' : '') + '</figure>';
  }
  function renderText(t) {
    return '<div class="box text">' + (t.title ? '<div class="t-title">' + fmt(t.title) + '</div>' : '') + fmt(t.html) +
      (t.source ? '<div class="t-source">' + fmt(t.source) + '</div>' : '') + '</div>';
  }

  function mountLesson(root, c, l, data) {
    var n = data.steps.length, shown = 1;
    var btnNext = root.querySelector('#btn-next-step'), btnAll = root.querySelector('#btn-all-steps');
    function updateSteps() {
      root.querySelectorAll('.step').forEach(function (el, i) {
        el.classList.toggle('hidden', i >= shown);
        el.classList.toggle('current', i === shown - 1 && shown < n);
      });
      root.querySelector('#hoc-tung-buoc .progress > span').style.width = pct(shown, n) + '%';
      root.querySelector('#step-txt').textContent = shown >= n ? 'Hoàn thành ' + n + '/' + n + ' bước' : 'Bước ' + shown + '/' + n;
      if (shown >= n) { root.querySelector('#step-actions').classList.add('hidden'); root.querySelector('#step-done').classList.remove('hidden'); }
    }
    btnNext.addEventListener('click', function () {
      if (shown < n) shown++;
      updateSteps();
      var cur = root.querySelector('.step[data-step="' + (shown - 1) + '"]');
      if (cur && cur.scrollIntoView) cur.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    btnAll.addEventListener('click', function () { shown = n; updateSteps(); });
    if (n <= 1) updateSteps();

    root.querySelectorAll('[data-toggle-sol]').forEach(function (b) {
      b.addEventListener('click', function () {
        var sol = b.nextElementSibling, hid = sol.classList.toggle('hidden');
        b.textContent = hid ? '👀 Xem lời giải' : '🙈 Ẩn lời giải';
      });
    });
    root.querySelectorAll('.exercise').forEach(function (ex) {
      var btn = ex.querySelector('[data-hint-btn]');
      btn.addEventListener('click', function () {
        var level = +ex.dataset.level, nh = +ex.dataset.hints;
        if (level < nh) ex.querySelector('.hint[data-h="' + level + '"]').classList.remove('hidden');
        else ex.querySelector('.solution').classList.remove('hidden');
        level++; ex.dataset.level = level;
        if (level < nh) btn.textContent = '💡 Gợi ý ' + (level + 1);
        else if (level === nh) btn.textContent = '✅ Xem lời giải';
        else { btn.textContent = 'Đã hiện lời giải'; btn.disabled = true; }
      });
    });

    var form = root.querySelector('#quiz-form'), warned = false;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var un = countUnanswered(form, data.quiz), warn = root.querySelector('#quiz-warn');
      if (un > 0 && !warned) {
        warned = true; warn.textContent = '⚠️ Em còn ' + un + ' câu chưa trả lời. Bấm “Nộp bài” thêm lần nữa nếu em vẫn muốn nộp.'; warn.classList.remove('hidden'); return;
      }
      warn.classList.add('hidden');
      var res = gradeForm(form, data.quiz), score = res.filter(Boolean).length, total = data.quiz.length, p = pct(score, total);
      var key = lessonKey(c, l), prog = store.lessons[key] || { attempts: 0 };
      var firstDone = !prog.completed && p >= PASS;
      prog.attempts = (prog.attempts || 0) + 1;
      prog.best = Math.max(prog.best == null ? 0 : prog.best, p);
      prog.last = p; prog.date = Date.now();
      if (p >= PASS) prog.completed = true;
      store.lessons[key] = prog; save();
      form.querySelector('button[type=submit]').disabled = true;
      var pass = p >= PASS;
      var box = root.querySelector('#quiz-result');
      box.innerHTML = '<div class="card result' + (pass ? ' pass' : '') + '" id="quiz-score" aria-live="polite"><div class="score">' + score + '/' + total + '</div><div>Em làm đúng <b>' + score + '</b> trên <b>' + total + '</b> câu (<b>' + p + '%</b>).</div>' +
        (pass ? '<div class="done-badge">🏆 Đã hoàn thành bài học</div><div>' + (firstDone ? 'Tuyệt vời! Kết quả đã được lưu vào “Tiến độ của em”.' : 'Rất tốt! Em đã nắm vững bài này.') + '</div>'
          : '<p>Em cần đạt từ ' + PASS + '% để hoàn thành bài. Hãy xem lại lời giải thích ở từng câu, ôn phần “Học từng bước” rồi làm lại nhé! 💪</p>') +
        '<div class="muted" style="font-size:.85rem">Điểm cao nhất của em: ' + prog.best + '% · Số lần làm: ' + prog.attempts + '</div>' +
        '<div class="btn-row" style="justify-content:center"><button class="btn" id="btn-retry">🔁 Làm lại bài kiểm tra</button><a class="btn primary" href="#/lop-' + c.grade + '/' + c.subject + '">Về danh sách bài</a></div></div>';
      box.querySelector('#btn-retry').addEventListener('click', function () { route(); setTimeout(function () { var k = document.getElementById('kiem-tra'); if (k) k.scrollIntoView(); }, 30); });
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ---------- Kiểm tra đầu vào ---------- */
  function viewDiagnostic(g, s) {
    var c = course(s, g), m = T.subjects[s];
    if (!c || !hasDiag(c)) return viewNotFound();
    setSubjectColor(s);
    var qs = c.diagnostic.questions, prev = store.diagnostics[c.key];
    var html = crumbs([['Trang chủ', '#/'], ['Lớp ' + g, '#/lop-' + g], [m.name, '#/lop-' + g + '/' + s], ['Kiểm tra đầu vào']]) +
      '<section class="card lesson-head"><div class="muted">' + m.icon + ' ' + esc(m.name) + ' ' + g + '</div><h1>Kiểm tra đầu vào</h1>' +
      '<p>' + fmt(c.diagnostic.intro || 'Bài kiểm tra gồm ' + qs.length + ' câu, bao quát các chương của cả năm học. Em cứ làm theo hiểu biết của mình, không cần lo lắng về điểm số: kết quả chỉ để biết em nên học kĩ bài nào.') + '</p>' +
      '<p class="muted">Mỗi câu hỏi được gắn với một bài học. Sau khi nộp, em sẽ thấy điểm theo từng chương và danh sách bài nên học.</p>' +
      (prev ? '<div class="box note">Lần làm gần nhất: ' + fmtDate(prev.date) + ' – đúng ' + prev.score + '/' + prev.total + ' câu. <a href="#" id="show-prev">Xem lại kết quả</a></div>' : '') + '</section>';
    html += '<div id="prev-result"></div><form id="diag-form" class="card" novalidate>' + qs.map(function (q, i) {
      var f = findLesson(c, q.lesson);
      return renderQuestion(q, i, 'dq', f ? (f.item.chapter.part ? f.item.chapter.part.replace(/^Phân môn /, '') + ' · ' : '') + shortChapter(f.item.chapter.title) : '');
    }).join('') + '<div class="quiz-warn hidden" id="diag-warn"></div><div class="btn-row"><button type="submit" class="btn primary big">📤 Nộp bài và xem gợi ý</button></div></form><div id="diag-result"></div>';
    return {
      title: 'Kiểm tra đầu vào – ' + m.name + ' ' + g, html: html, mount: function (root) {
        var form = root.querySelector('#diag-form'), warned = false;
        var sp = root.querySelector('#show-prev');
        if (sp) sp.addEventListener('click', function (e) { e.preventDefault(); root.querySelector('#prev-result').innerHTML = diagResultHtml(c, prev, true); });
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var un = countUnanswered(form, qs), warn = root.querySelector('#diag-warn');
          if (un > 0 && !warned) { warned = true; warn.textContent = '⚠️ Em còn ' + un + ' câu chưa trả lời. Câu bỏ trống sẽ tính là chưa đúng. Bấm nộp thêm lần nữa để xem kết quả.'; warn.classList.remove('hidden'); return; }
          warn.classList.add('hidden');
          var res = gradeForm(form, qs);
          var byChapter = {}, wrongLessons = [];
          qs.forEach(function (q, i) {
            var f = findLesson(c, q.lesson), chId = f ? f.item.chapter.id : '?';
            byChapter[chId] = byChapter[chId] || { c: 0, t: 0 };
            byChapter[chId].t++; if (res[i]) byChapter[chId].c++;
            else if (f && wrongLessons.indexOf(q.lesson) < 0) wrongLessons.push(q.lesson);
          });
          var order = allLessons(c).map(function (x) { return x.lesson.id; });
          wrongLessons.sort(function (a, b) { return order.indexOf(a) - order.indexOf(b); });
          var r = { score: res.filter(Boolean).length, total: qs.length, byChapter: byChapter, recommended: wrongLessons, date: Date.now() };
          store.diagnostics[c.key] = r; save();
          form.querySelector('button[type=submit]').disabled = true;
          var box = root.querySelector('#diag-result');
          box.innerHTML = diagResultHtml(c, r, false);
          box.querySelector('#btn-diag-retry').addEventListener('click', function () { route(); window.scrollTo(0, 0); });
          box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    };
  }
  function shortChapter(t) { return String(t).split('.')[0]; }
  function diagResultHtml(c, r, isPrev) {
    var p = pct(r.score, r.total);
    var h = '<section class="card result' + (p >= PASS ? ' pass' : '') + '" id="diag-score"><h2>' + (isPrev ? 'Kết quả lần trước' : 'Kết quả kiểm tra đầu vào') + '</h2><div class="score">' + r.score + '/' + r.total + '</div><div>Em làm đúng <b>' + p + '%</b> số câu.</div>' +
      '<p>' + (p >= PASS ? 'Em có nền tảng tốt! Hãy tiếp tục học các bài mới và luyện tập đều đặn.' : (p >= 50 ? 'Em đã nắm được một phần kiến thức. Hãy ôn các bài được gợi ý dưới đây nhé.' : 'Không sao cả! Hãy bắt đầu từ các bài được gợi ý, học chắc từng bước.')) + '</p></section>';
    h += '<section class="card"><h2>📊 Điểm theo chương</h2><table class="tbl chap-table"><thead><tr><th>Chương / chủ đề</th><th>Mức độ</th><th>Đúng</th><th>Nhận xét</th></tr></thead><tbody>';
    c.chapters.forEach(function (ch) {
      var b = r.byChapter[ch.id]; if (!b) return;
      var pp = pct(b.c, b.t), lv = levelClass(pp);
      h += '<tr><td>' + esc(chTitle(ch)) + '</td><td>' + progressBar(pp, lv) + '</td><td>' + b.c + '/' + b.t + '</td><td>' + (lv === 'ok' ? '🟢 Đã vững' : (lv === 'warn' ? '🟡 Cần ôn thêm' : '🔴 Cần học lại')) + '</td></tr>';
    });
    h += '</tbody></table></section><section class="card" id="diag-rec"><h2>📚 Bài học em nên học</h2>';
    if (!r.recommended.length) h += '<p>Em đã trả lời đúng tất cả các câu. Hãy chọn bài tiếp theo trong danh sách để học nâng cao nhé! 🎉</p>';
    else {
      h += '<p class="muted" style="margin-top:0">Sắp xếp theo thứ tự trong sách giáo khoa. Hãy học lần lượt từ trên xuống.</p><ul class="rec-list">';
      r.recommended.forEach(function (id) {
        var f = findLesson(c, id); if (!f) return;
        var l = f.item.lesson, has = !!content(c, l), pr = store.lessons[lessonKey(c, l)];
        h += '<li><span aria-hidden="true">' + (pr && pr.completed ? '✅' : (has ? '📘' : '🕒')) + '</span><a href="' + lessonUrl(c, l) + '">' + esc(l.title) + '</a><small class="muted">' + esc(f.item.chapter.title) + '</small>' +
          (has ? (pr && pr.completed ? '<span class="badge ok">Đã hoàn thành</span>' : '<span class="badge">Có bài học</span>') : '<span class="badge wip">Đang biên soạn</span>') + '</li>';
      });
      h += '</ul>';
    }
    h += (isPrev ? '' : '<div class="btn-row"><button class="btn" id="btn-diag-retry">🔁 Làm lại bài kiểm tra</button><a class="btn primary" href="#/lop-' + c.grade + '/' + c.subject + '">Về danh sách bài học</a></div>') + '</section>';
    return h;
  }

  /* ---------- Tiến độ ---------- */
  function viewProgress() {
    setSubjectColor(null);
    var totalDone = 0, totalAuth = 0, diagN = 0, attempts = 0;
    Object.keys(store.lessons).forEach(function (k) { var p = store.lessons[k]; if (p.completed) totalDone++; attempts += p.attempts || 0; });
    Object.keys(T.lessons).forEach(function () { totalAuth++; });
    diagN = Object.keys(store.diagnostics).length;
    var html = crumbs([['Trang chủ', '#/'], ['Tiến độ của em']]) + '<h1>📊 Tiến độ của ' + (store.name ? esc(store.name) : 'em') + '</h1>' +
      '<div class="card"><label for="name-input"><b>Tên của em</b> <span class="muted">(không bắt buộc, chỉ lưu trên máy này)</span></label><div class="btn-row" style="margin-top:6px"><input id="name-input" class="short" maxlength="40" value="' + esc(store.name || '') + '" placeholder="Nhập tên của em"><button class="btn primary" id="btn-save-name">Lưu tên</button></div></div>' +
      '<div class="stat-grid"><div class="stat"><b>' + totalDone + '</b>bài đã hoàn thành</div><div class="stat"><b>' + totalAuth + '</b>bài đã có nội dung</div><div class="stat"><b>' + attempts + '</b>lượt làm kiểm tra</div><div class="stat"><b>' + diagN + '</b>bài kiểm tra đầu vào</div></div>';
    T.grades.forEach(function (g) {
      html += '<section class="card"><h2>Lớp ' + g + '</h2>';
      T.subjectOrder.forEach(function (s) {
        var c = course(s, g), m = T.subjects[s]; if (!c) return;
        var st = courseStats(c), d = store.diagnostics[c.key], p = pct(st.done, st.total);
        html += '<div class="prog-row" style="--subj:' + m.color + '"><div><div class="p-name">' + m.icon + ' <a href="#/lop-' + g + '/' + s + '" style="color:' + m.color + '">' + esc(m.name) + '</a></div></div>' +
          '<div>' + progressBar(p) + '<div class="p-num">' + st.done + '/' + st.total + ' bài hoàn thành (' + p + '%) · ' + st.authored + ' bài đã có nội dung</div></div>' +
          '<div class="p-num">' + (d ? '📝 Đầu vào: <b>' + d.score + '/' + d.total + '</b> (' + pct(d.score, d.total) + '%)<br>' + fmtDate(d.date) : '📝 Chưa làm kiểm tra đầu vào') + '</div></div>';
      });
      html += '</section>';
    });
    var best = [];
    Object.keys(store.lessons).forEach(function (k) {
      var p = store.lessons[k], parts = k.split('/'), c = T.courses[parts[0]]; if (!c) return;
      var f = findLesson(c, parts[1]); if (!f) return;
      best.push({ c: c, l: f.item.lesson, p: p });
    });
    best.sort(function (a, b) { return (b.p.date || 0) - (a.p.date || 0); });
    html += '<section class="card"><h2>🏅 Điểm kiểm tra cuối bài</h2>' + (best.length ? '<table class="tbl"><thead><tr><th>Bài học</th><th>Môn – lớp</th><th>Điểm cao nhất</th><th>Trạng thái</th></tr></thead><tbody>' +
      best.map(function (b) { return '<tr><td><a href="' + lessonUrl(b.c, b.l) + '">' + esc(b.l.title) + '</a></td><td>' + esc(T.subjects[b.c.subject].name + ' ' + b.c.grade) + '</td><td>' + b.p.best + '%</td><td>' + (b.p.completed ? '<span class="badge ok">Đã hoàn thành</span>' : '<span class="badge warn">Chưa đạt</span>') + '</td></tr>'; }).join('') +
      '</tbody></table>' : '<p class="muted">Em chưa làm bài kiểm tra cuối bài nào. Hãy chọn một bài học để bắt đầu nhé!</p>') + '</section>';
    html += '<section class="card"><h2>⚙️ Đặt lại tiến độ</h2><p class="muted">Xoá toàn bộ kết quả học tập đã lưu trên trình duyệt này (bài đã hoàn thành, điểm, kết quả kiểm tra đầu vào). Không thể hoàn tác.</p><button class="btn danger" id="btn-reset">🗑️ Xoá toàn bộ tiến độ</button></section>';
    return {
      title: 'Tiến độ của em', html: html, mount: function (root) {
        root.querySelector('#btn-save-name').addEventListener('click', function () {
          store.name = root.querySelector('#name-input').value.trim().slice(0, 40); store.askedName = true; save(); toast('Đã lưu tên!'); route();
        });
        root.querySelector('#btn-reset').addEventListener('click', function () {
          if (window.confirm('Em có chắc muốn xoá toàn bộ tiến độ học tập không?')) {
            var name = store.name; store = fix({ name: name, askedName: true }); save(); toast('Đã xoá tiến độ.'); route();
          }
        });
      }
    };
  }

  /* ---------- Tìm kiếm ---------- */
  function searchIndex() {
    var idx = [];
    T.grades.forEach(function (g) {
      T.subjectOrder.forEach(function (s) {
        var c = course(s, g); if (!c) return;
        allLessons(c).forEach(function (x) { idx.push({ c: c, l: x.lesson, ch: x.chapter, text: fold(x.lesson.title + ' ' + chTitle(x.chapter) + ' ' + (x.lesson.keywords || '')), title: fold(x.lesson.title) }); });
      });
    });
    return idx;
  }
  function highlight(title, q) {
    var f = fold(title), i = f.indexOf(q);
    if (!q || i < 0) return esc(title);
    return esc(title.slice(0, i)) + '<mark>' + esc(title.slice(i, i + q.length)) + '</mark>' + esc(title.slice(i + q.length));
  }
  function viewSearch(q) {
    setSubjectColor(null);
    var fq = fold(q).trim(), words = fq.split(/\s+/).filter(Boolean);
    var html = crumbs([['Trang chủ', '#/'], ['Tìm kiếm']]) + '<h1>🔍 Tìm bài học</h1><div class="card"><input id="search-page-input" class="short" style="width:100%" placeholder="Gõ tên bài, ví dụ: phân số, nguyên tử, từ láy…" value="' + esc(q) + '"></div>';
    if (!words.length) html += '<p class="muted">Hãy nhập từ khoá (có dấu hoặc không dấu đều được).</p>';
    else {
      var res = searchIndex().filter(function (x) { return words.every(function (w) { return x.text.indexOf(w) >= 0; }); });
      res.sort(function (a, b) { return (b.title.indexOf(fq) >= 0) - (a.title.indexOf(fq) >= 0); });
      html += '<p>Tìm thấy <b>' + res.length + '</b> bài học phù hợp với “' + esc(q) + '”.</p>';
      html += res.slice(0, 80).map(function (x) {
        var m = T.subjects[x.c.subject], has = !!content(x.c, x.l);
        return '<a class="search-result" href="' + lessonUrl(x.c, x.l) + '"><b>' + m.icon + ' ' + highlight(x.l.title, fq) + '</b> ' + (has ? '<span class="badge" style="--subj:' + m.color + ';--subj-light:' + m.light + '">Có bài học</span>' : '<span class="badge wip">Đang biên soạn</span>') +
          '<small>' + esc(m.name + ' ' + x.c.grade + ' · ' + chTitle(x.ch)) + '</small></a>';
      }).join('');
    }
    return {
      title: 'Tìm kiếm', html: html, mount: function (root) {
        var inp = root.querySelector('#search-page-input');
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') goSearch(inp.value, true); });
        if (!q) inp.focus();
      }
    };
  }
  function goSearch(q, replace) {
    var h = '#/tim-kiem/' + encodeURIComponent(q.trim());
    if (replace && /^#\/tim-kiem/.test(location.hash)) location.replace(h); else location.hash = h;
  }

  /* ---------- Trang tĩnh ---------- */
  function viewGuide() {
    setSubjectColor(null);
    var html = crumbs([['Trang chủ', '#/'], ['Hướng dẫn']]) + '<h1>📘 Hướng dẫn tự học với trang web</h1>' +
      '<section class="card"><h2>1. Bắt đầu từ đâu?</h2><ol><li>Ở <a href="#/">Trang chủ</a>, chọn <b>lớp</b> của em, rồi chọn <b>môn học</b>.</li>' +
      '<li>Nên làm <b>Kiểm tra đầu vào</b> của môn trước. Trang web sẽ cho em biết chương nào đã vững, chương nào cần ôn và gợi ý danh sách bài nên học.</li>' +
      '<li>Chọn bài học theo đúng thứ tự trong sách giáo khoa (từ trên xuống dưới). Bài có biểu tượng 📘 là bài đã có nội dung; 🕒 là bài đang được biên soạn; ✅ là bài em đã hoàn thành.</li><li>Môn <b>Lịch sử và Địa lí</b> gồm hai phân môn: danh sách bài được chia thành hai phần <b>Phân môn Lịch sử</b> và <b>Phân môn Địa lí</b> (lớp 7, 8, 9 có thêm phần <b>Chủ đề chung</b>), đúng như trong sách.</li><li>Với môn đang được biên soạn, em vẫn xem được toàn bộ danh sách chương, bài để biết trước cả năm học những gì.</li></ol></section>' +
      '<section class="card"><h2>2. Học một bài như thế nào?</h2><ol><li><b>Mục tiêu bài học:</b> đọc để biết học xong em cần làm được gì.</li>' +
      '<li><b>Học từng bước:</b> lí thuyết được chia nhỏ. Đọc kĩ từng bước, tự nói lại bằng lời của mình, rồi mới bấm <b>“Tiếp tục”</b>. Nên chép các ý chính vào vở.</li>' +
      '<li><b>Ví dụ mẫu:</b> thử tự giải trước, sau đó bấm “Xem lời giải” để so sánh cách làm.</li>' +
      '<li><b>Luyện tập:</b> làm vào vở. Nếu bí, bấm <b>Gợi ý 1</b>; vẫn chưa ra thì bấm <b>Gợi ý 2</b>; cuối cùng mới <b>Xem lời giải</b>. Đừng vội xem lời giải – tự nghĩ giúp em nhớ lâu hơn!</li>' +
      '<li><b>Kiểm tra cuối bài:</b> gồm trắc nghiệm, đúng/sai và trả lời ngắn. Trang web chấm ngay và giải thích từng câu. Đạt từ <b>80%</b> trở lên, bài được đánh dấu <b>“Đã hoàn thành”</b>. Chưa đạt thì ôn lại rồi làm lại – không giới hạn số lần.</li></ol></section>' +
      '<section class="card"><h2>3. Mẹo tự học hiệu quả</h2><ul><li>Mỗi ngày học 30–45 phút, đều đặn tốt hơn học dồn.</li><li>Học xong một bài, sau 1–2 ngày hãy làm lại bài kiểm tra để nhớ lâu.</li>' +
      '<li>Với câu trả lời ngắn: số thập phân có thể dùng dấu phẩy hoặc dấu chấm (ví dụ 2,5 hoặc 2.5); chữ có thể gõ có dấu hoặc không dấu.</li>' +
      '<li>Theo dõi kết quả ở trang <a href="#/tien-do">Tiến độ của em</a>. Tiến độ được lưu ngay trên trình duyệt của máy em đang dùng (không cần tài khoản, không gửi đi đâu).</li>' +
      '<li>Dùng ô <b>Tìm bài học</b> ở đầu trang để tìm nhanh theo tên bài (gõ không dấu cũng được).</li><li>Khi chưa hiểu, hãy hỏi thầy cô, bố mẹ hoặc bạn bè – trang web là người bạn đồng hành, không thay thế giờ học trên lớp.</li></ul></section>' +
      '<section class="card"><h2>4. Dành cho thầy cô và phụ huynh</h2><p>Trang web chạy hoàn toàn ngoại tuyến: chỉ cần mở tệp <code>index.html</code>. Nội dung được lưu trong các tệp dữ liệu JavaScript (thư mục <code>data/</code>), thầy cô có thể bổ sung bài học mới theo hướng dẫn trong tệp <code>README.md</code>.</p></section>';
    return { title: 'Hướng dẫn', html: html };
  }
  function viewAbout() {
    setSubjectColor(null);
    var nLessons = Object.keys(T.lessons).length, nTotal = 0, nDiag = 0;
    Object.keys(T.courses).forEach(function (k) { nTotal += allLessons(T.courses[k]).length; if (hasDiag(T.courses[k])) nDiag++; });
    var html = crumbs([['Trang chủ', '#/'], ['Về trang web']]) + '<h1>ℹ️ Về trang web “THCS Tự Học”</h1>' +
      '<section class="card"><h2>Mục đích</h2><p>Trang web giúp học sinh trung học cơ sở (lớp 6 – 9) tự học sáu môn <b>Toán</b>, <b>Ngữ văn</b>, <b>Khoa học tự nhiên</b>, <b>Tin học</b>, <b>Giáo dục công dân</b> và <b>Lịch sử và Địa lí</b> theo <b>Chương trình giáo dục phổ thông 2018</b>, ban hành kèm theo <b>Thông tư số 32/2018/TT-BGDĐT</b> ngày 26/12/2018 của Bộ trưởng Bộ Giáo dục và Đào tạo (được sửa đổi, bổ sung bởi Thông tư số 13/2022/TT-BGDĐT).</p>' +
      '<p>Cấu trúc chương, bài được sắp xếp theo thứ tự bài học của bộ sách giáo khoa <b>“Kết nối tri thức với cuộc sống”</b> – bộ sách được lựa chọn sử dụng thống nhất toàn quốc từ năm học 2026 – 2027 theo Quyết định số 3588/QĐ-BGDĐT ngày 26/12/2025 của Bộ Giáo dục và Đào tạo – để các em dễ đối chiếu với bài học trên lớp.</p></section>' +
      '<section class="card"><h2>Về bản quyền nội dung</h2><div class="box key"><b>Toàn bộ lời giảng, ví dụ, bài tập và câu hỏi trên trang web đều do nhóm biên soạn tự viết mới.</b> Nội dung bám sát các <i>yêu cầu cần đạt</i> của Chương trình GDPT 2018 nhưng <b>không sao chép</b> văn bản, bài tập hay hình ảnh của sách giáo khoa (SGK) hoặc của Nhà xuất bản Giáo dục Việt Nam.</div>' +
      '<p>Với Lịch sử và Địa lí, Giáo dục công dân: tư liệu gốc (văn bản cổ, ca dao, tục ngữ) chỉ được trích ngắn khi đã thuộc phạm vi công cộng; mọi nội dung khác được kể lại bằng lời mới.</p><p>Tên chương, tên bài chỉ được dùng để các em dễ tìm bài tương ứng trong SGK. Các ngữ liệu văn học được dùng là tác phẩm dân gian (truyện cổ, ca dao, tục ngữ), tác phẩm của tác giả đã mất từ lâu (thuộc phạm vi công cộng) hoặc đoạn văn do nhóm biên soạn tự viết.</p></section>' +
      '<section class="card"><h2>Phiên bản hiện tại</h2><ul><li>Phiên bản: ' + T.version + ' (bản thử nghiệm đầu tiên – MVP).</li><li>Khung chương trình: ' + Object.keys(T.courses).length + ' môn-lớp với ' + nTotal + ' bài học.</li>' +
      '<li>Bài học đã có đầy đủ nội dung: <b>' + nLessons + '</b> bài; bài kiểm tra đầu vào: <b>' + nDiag + '</b> bài.</li><li>Các bài còn lại hiển thị thông báo “Bài học đang được biên soạn” và sẽ được bổ sung dần.</li></ul></section>' +
      '<section class="card"><h2>Quyền riêng tư</h2><p>Trang web không thu thập dữ liệu. Tên (nếu em nhập) và kết quả học tập chỉ được lưu trong bộ nhớ trình duyệt (localStorage) trên máy của em. Em có thể xoá bất cứ lúc nào ở trang <a href="#/tien-do">Tiến độ của em</a>.</p></section>' +
      '<section class="card"><h2>Lưu ý</h2><p>Trang web là tài liệu tự học bổ trợ, không thay thế sách giáo khoa và bài giảng của thầy cô. Nếu phát hiện lỗi nội dung, thầy cô và các em vui lòng báo cho người quản lí trang để được chỉnh sửa.</p></section>';
    return { title: 'Về trang web', html: html };
  }
  function viewNotFound() {
    setSubjectColor(null);
    return { title: 'Không tìm thấy', html: '<section class="card placeholder"><div class="p-ico">🧭</div><h1>Không tìm thấy trang</h1><p>Đường dẫn này không tồn tại hoặc đã thay đổi.</p><a class="btn primary" href="#/">Về trang chủ</a></section>' };
  }

  /* ---------- Định tuyến ---------- */
  function parts() { return location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } }); }
  function route() {
    var p = parts(), v, navKey = '';
    if (EX) EX.stop();
    if (!p.length) { v = viewHome(); navKey = 'home'; }
    else if (p[0] === 'tien-do') { v = viewProgress(); navKey = 'tien-do'; }
    else if (p[0] === 'huong-dan') { v = viewGuide(); navKey = 'huong-dan'; }
    else if (p[0] === 'gioi-thieu') { v = viewAbout(); navKey = 'gioi-thieu'; }
    else if (p[0] === 'tim-kiem') { v = viewSearch(p.slice(1).join('/')); }
    else if (/^lop-[6-9]$/.test(p[0])) {
      var g = +p[0].slice(4);
      if (!p[1]) v = viewGrade(g);
      else if (!T.subjects[p[1]]) v = viewNotFound();
      else if (!p[2]) v = viewSubject(g, p[1]);
      else if (p[2] === 'kiem-tra-dau-vao') v = viewDiagnostic(g, p[1]);
      else if ((p[2] === 'on-tap' || p[2] === 'de-thi') && EX && course(p[1], g)) v = EX.route(course(p[1], g), p.slice(2)) || viewNotFound();
      else v = viewLesson(g, p[1], p[2]);
    } else v = viewNotFound();
    app.innerHTML = v.html;
    document.title = v.title + ' | THCS Tự Học';
    document.querySelectorAll('.main-nav a').forEach(function (a) { a.classList.toggle('active', a.dataset.nav === navKey); });
    document.querySelector('.main-nav').classList.remove('open');
    app.querySelectorAll('[data-scroll]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); var t = document.getElementById(a.getAttribute('href').slice(1)); if (t) t.scrollIntoView({ behavior: 'smooth' }); });
    });
    if (v.mount) v.mount(app);
    window.scrollTo(0, 0);
    var hs = document.getElementById('header-search');
    if (p[0] !== 'tim-kiem' && document.activeElement !== hs) hs.value = '';
  }

  /* ---------- Hộp thoại chào mừng ---------- */
  function askName() {
    if (store.askedName) return;
    var back = document.createElement('div');
    back.className = 'modal-back';
    back.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="welcome-title"><div style="font-size:3rem">👋</div><h2 id="welcome-title">Chào mừng em đến với THCS Tự Học!</h2>' +
      '<p>Em tên là gì? Trang web sẽ gọi tên em khi học. <span class="muted">(Không bắt buộc – tên chỉ lưu trên máy này.)</span></p>' +
      '<input id="welcome-name" maxlength="40" placeholder="Nhập tên của em"><div class="btn-row" style="justify-content:center"><button class="btn primary" id="welcome-ok">Bắt đầu học</button><button class="btn ghost" id="welcome-skip">Bỏ qua</button></div></div>';
    document.body.appendChild(back);
    var inp = back.querySelector('#welcome-name');
    setTimeout(function () { inp.focus(); }, 50);
    function close(name) { store.askedName = true; if (name) store.name = name.slice(0, 40); save(); back.remove(); route(); }
    back.querySelector('#welcome-ok').addEventListener('click', function () { close(inp.value.trim()); });
    back.querySelector('#welcome-skip').addEventListener('click', function () { close(''); });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') close(inp.value.trim()); });
  }

  /* ---------- Ôn tập & đề kiểm tra định kì (js/exam.js) ---------- */
  var EX = T.examModule ? T.examModule({ esc: esc, fmt: fmt, crumbs: crumbs, figure: figure, renderText: renderText, checkAnswer: checkAnswer,
    lessonKey: lessonKey, lessonUrl: lessonUrl, fmtDate: fmtDate, toast: toast, save: save, route: function () { route(); },
    store: function () { return store; } }) : null;

  /* ---------- Khởi động ---------- */
  function init() {
    var hs = document.getElementById('header-search'), timer;
    hs.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(function () { if (hs.value.trim()) goSearch(hs.value, true); }, 250); });
    hs.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); goSearch(hs.value, true); } });
    document.getElementById('menu-toggle').addEventListener('click', function () { document.querySelector('.main-nav').classList.toggle('open'); });
    window.addEventListener('hashchange', route);
    if (T.errors.length && window.console) console.warn('Lỗi dữ liệu:', T.errors);
    route();
    askName();
  }
  init();
})();
