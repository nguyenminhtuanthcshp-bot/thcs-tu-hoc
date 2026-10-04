/* THCS Tự Học – hình minh hoạ SVG bổ sung cho môn Khoa học tự nhiên (dùng trong KHTN 6, KHTN 7, KHTN 8 và KHTN 9).
   Nạp SAU js/svg.js và TRƯỚC các tệp trong data/. Tệp này KHÔNG sửa js/svg.js: chỉ gắn thêm hàm
   vào đối tượng THCS.svg có sẵn. Mỗi hàm trả về một CHUỖI <svg class="fig-svg" …> có viewBox. */
(function () {
  'use strict';
  var S = window.THCS && window.THCS.svg;
  if (!S) return;
  var C = S.C, uid = 0;
  var FONT = 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function n2(v) { return Math.round(v * 100) / 100; }
  function num(v) { var s = String(n2(Math.abs(v))).replace('.', ','); return (v < 0 ? '−' : '') + s; }
  function wrap(w, h, body, label) {
    return '<svg class="fig-svg" viewBox="0 0 ' + n2(w) + ' ' + n2(h) + '" width="' + n2(w) + '" role="img" aria-label="' + esc(label || 'Hình minh hoạ') +
      '" xmlns="http://www.w3.org/2000/svg" font-family="' + FONT + '" font-size="14">' + body + '</svg>';
  }
  function T(x, y, t, o) { // chữ; t có thể chứa "\n" để xuống dòng
    o = o || {};
    var lines = String(t).split('\n'), lh = (o.size || 14) * 1.2, y0 = y - (o.vcenter ? (lines.length - 1) * lh / 2 : 0);
    return lines.map(function (s, i) {
      return '<text x="' + n2(x) + '" y="' + n2(y0 + i * lh) + '" text-anchor="' + (o.anchor || 'middle') + '"' + (o.size ? ' font-size="' + o.size + '"' : '') +
        ' fill="' + (o.color || C.ink) + '"' + (o.bold ? ' font-weight="700"' : '') + (o.italic ? ' font-style="italic"' : '') + '>' + esc(s) + '</text>';
    }).join('');
  }
  function L(x1, y1, x2, y2, o) {
    o = o || {};
    return '<line x1="' + n2(x1) + '" y1="' + n2(y1) + '" x2="' + n2(x2) + '" y2="' + n2(y2) + '" stroke="' + (o.color || C.ink) + '" stroke-width="' + (o.width || 2) + '"' +
      (o.dash ? ' stroke-dasharray="' + (o.dash === true ? '6 4' : o.dash) + '"' : '') + (o.marker ? ' marker-end="url(#' + o.marker + ')"' : '') + (o.start ? ' marker-start="url(#' + o.start + ')"' : '') + ' stroke-linecap="round"/>';
  }
  function A(id, color, size) {
    var s = size || 7;
    return '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="' + s + '" markerHeight="' + s + '" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + (color || C.ink) + '"/></marker></defs>';
  }
  function R(x, y, w, h, o) {
    o = o || {};
    return '<rect x="' + n2(x) + '" y="' + n2(y) + '" width="' + n2(w) + '" height="' + n2(h) + '"' + (o.rx ? ' rx="' + o.rx + '"' : '') + ' fill="' + (o.fill || 'none') + '" stroke="' + (o.stroke || 'none') + '" stroke-width="' + (o.sw || 2) + '"' + (o.dash ? ' stroke-dasharray="6 4"' : '') + (o.op != null ? ' fill-opacity="' + o.op + '"' : '') + '/>';
  }
  function Ci(cx, cy, r, o) {
    o = o || {};
    return '<circle cx="' + n2(cx) + '" cy="' + n2(cy) + '" r="' + n2(r) + '" fill="' + (o.fill || 'none') + '" stroke="' + (o.stroke || 'none') + '" stroke-width="' + (o.sw || 2) + '"' + (o.dash ? ' stroke-dasharray="5 4"' : '') + '/>';
  }
  function E(cx, cy, rx, ry, o) {
    o = o || {};
    return '<ellipse cx="' + n2(cx) + '" cy="' + n2(cy) + '" rx="' + n2(rx) + '" ry="' + n2(ry) + '" fill="' + (o.fill || 'none') + '" stroke="' + (o.stroke || 'none') + '" stroke-width="' + (o.sw || 2) + '"' + (o.rot ? ' transform="rotate(' + o.rot + ' ' + n2(cx) + ' ' + n2(cy) + ')"' : '') + '/>';
  }
  function P(d, o) {
    o = o || {};
    return '<path d="' + d + '" fill="' + (o.fill || 'none') + '" stroke="' + (o.stroke || 'none') + '" stroke-width="' + (o.sw || 2) + '" stroke-linejoin="round" stroke-linecap="round"' + (o.dash ? ' stroke-dasharray="6 4"' : '') + (o.op != null ? ' fill-opacity="' + o.op + '"' : '') + '/>';
  }
  function rnd(seed) { var s = seed || 1; return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }
  /* Nhãn có đường dẫn: [px, py, tx, ty, 'chữ', anchor?] */
  function callouts(list, o) {
    o = o || {};
    return list.map(function (c) {
      var anchor = c[5] || (c[2] >= c[0] ? 'start' : 'end'), dx = anchor === 'start' ? 4 : (anchor === 'end' ? -4 : 0);
      var nl = String(c[4]).split('\n').length, lh = (o.size || 13) * 1.2;
      var ty = anchor !== 'middle' ? c[3] + 5 : (c[3] < c[1] ? c[3] - 6 - (nl - 1) * lh : c[3] + 16);
      return L(c[0], c[1], c[2], c[3], { color: o.line || '#475569', width: 1.3 }) + Ci(c[0], c[1], 2.6, { fill: o.line || '#475569' }) +
        T(c[2] + dx, ty, c[4], { anchor: anchor, size: o.size || 13, bold: o.bold !== false, color: o.color || C.ink, vcenter: anchor !== 'middle' });
    }).join('');
  }

  /* labelled({ w, h, body, labels: [[px,py,tx,ty,'chữ']], label }) – hình tự vẽ kèm chú thích có đường dẫn */
  function labelled(o) { return wrap(o.w, o.h, o.body + callouts(o.labels || [], o), o.label); }

  /* ---------- Tế bào: cell('dong-vat' | 'thuc-vat' | 'nhan-so', { labels: false }) ---------- */
  function cell(kind, o) {
    o = o || {}; var b = '', lab = [], W = 480, H = 260;
    if (kind === 'thuc-vat') {
      b += R(130, 40, 220, 180, { rx: 8, fill: '#ecfccb', stroke: '#65a30d', sw: 9 });
      b += R(138, 48, 204, 164, { rx: 5, fill: '#f0fdf4', stroke: '#15803d', sw: 1.6 });
      b += R(185, 78, 120, 108, { rx: 26, fill: '#e0f2fe', stroke: '#0284c7', sw: 1.8 });
      b += Ci(165, 78, 17, { fill: C.purpleL, stroke: C.purple }) + Ci(168, 76, 5, { fill: C.purple });
      [[152, 150, 20], [322, 96, -30], [322, 170, 25], [252, 202, 5], [215, 60, -10], [290, 60, 15]].forEach(function (p) { b += E(p[0], p[1], 11, 6, { fill: '#4ade80', stroke: '#15803d', sw: 1.4, rot: p[2] }); });
      lab = [[346, 58, 372, 40, 'Thành tế bào'], [341, 132, 372, 110, 'Màng tế bào'], [322, 170, 372, 180, 'Lục lạp'], [300, 205, 372, 225, 'Tế bào chất'],
        [165, 78, 108, 55, 'Nhân'], [205, 140, 108, 130, 'Không bào'], [152, 150, 108, 190, 'Lục lạp']];
    } else if (kind === 'nhan-so') {
      H = 230;
      b += R(130, 80, 220, 90, { rx: 45, fill: '#fef3c7', stroke: '#b45309', sw: 7 });
      b += R(137, 87, 206, 76, { rx: 38, fill: '#fffbeb', stroke: '#d97706', sw: 1.5 });
      b += P('M205,125 C215,105 230,145 240,120 C250,98 262,146 272,122 C280,105 290,135 282,140 C270,150 250,108 238,138 C228,160 214,112 205,125 Z', { stroke: C.purple, sw: 2, fill: C.purpleL });
      var rr = rnd(7); for (var i = 0; i < 16; i++) { var x = 160 + rr() * 160, y = 100 + rr() * 50; if (x > 198 && x < 290 && y > 108 && y < 146) continue; b += Ci(x, y, 2.2, { fill: '#92400e' }); }
      b += P('M350,125 C365,110 375,140 390,125 C405,110 415,140 430,125 C440,115 448,122 455,118', { stroke: '#92400e', sw: 2.2 });
      b += P('M150,95 L132,78 M168,86 L160,66 M150,155 L132,172 M170,164 L160,184 M310,86 L318,66 M310,164 L318,184', { stroke: '#b45309', sw: 1.6 });
      lab = [[190, 83, 108, 40, 'Thành tế bào'], [175, 160, 108, 205, 'Màng tế bào'], [300, 140, 360, 200, 'Tế bào chất'], [250, 110, 285, 38, 'Vùng nhân (chưa có màng nhân)', 'middle'], [420, 128, 420, 160, 'Roi', 'middle'], [318, 66, 372, 50, 'Lông']];
    } else { // dong-vat
      b += P('M110,130 C110,60 190,38 240,42 C310,46 352,80 350,135 C348,195 290,222 225,220 C160,218 110,190 110,130 Z', { fill: '#fdf2f8', stroke: '#be185d', sw: 2.6 });
      b += Ci(215, 125, 32, { fill: C.purpleL, stroke: C.purple }) + Ci(222, 120, 9, { fill: C.purple });
      [[292, 100, 30], [170, 182, -20], [300, 172, -40], [160, 95, 60]].forEach(function (p) {
        b += E(p[0], p[1], 15, 7, { fill: '#fed7aa', stroke: C.orange, sw: 1.5, rot: p[2] });
        b += P('M' + (p[0] - 9) + ',' + p[1] + ' q3,-4 6,0 t6,0 t6,0', { stroke: C.orange, sw: 1 }).replace('<path', '<path transform="rotate(' + p[2] + ' ' + p[0] + ' ' + p[1] + ')"');
      });
      lab = [[348, 118, 372, 80, 'Màng tế bào'], [292, 100, 372, 125, 'Ti thể'], [262, 195, 372, 190, 'Tế bào chất'], [205, 128, 100, 70, 'Nhân'], [222, 120, 100, 110, 'Nhân con'], [170, 182, 100, 200, 'Ti thể']];
    }
    if (o.labels === false) lab = [];
    return labelled({ w: W, h: H, body: b, labels: lab, label: o.label || 'Sơ đồ cấu tạo tế bào' });
  }

  /* ---------- Kính hiển vi quang học (các bộ phận) ---------- */
  function microscope(o) {
    o = o || {}; var b = '';
    b += R(150, 318, 190, 24, { rx: 10, fill: '#475569', stroke: '#1e293b', sw: 2 });
    b += P('M268,318 L276,250 C318,222 318,140 268,96', { stroke: '#64748b', sw: 24 });
    b += R(176, 62, 42, 88, { rx: 4, fill: '#94a3b8', stroke: '#334155' });
    b += R(183, 24, 28, 40, { rx: 3, fill: '#1e293b', stroke: '#0f172a' });
    b += L(218, 100, 262, 100, { color: '#64748b', width: 14 });
    b += P('M168,150 L226,150 L234,166 L160,166 Z', { fill: '#475569', stroke: '#1e293b' });
    b += R(170, 166, 12, 30, { fill: '#cbd5e1', stroke: '#334155', sw: 1.6 }) + R(191, 166, 12, 38, { fill: '#e2e8f0', stroke: '#334155', sw: 1.6 }) + R(212, 166, 12, 24, { fill: '#cbd5e1', stroke: '#334155', sw: 1.6 });
    b += R(128, 208, 160, 11, { rx: 2, fill: '#1e293b', stroke: '#0f172a', sw: 1 });
    b += R(165, 202, 64, 6, { fill: '#bae6fd', stroke: '#0369a1', sw: 1 });
    b += P('M140,206 L168,203 M252,206 L226,203', { stroke: '#f59e0b', sw: 3 });
    b += Ci(284, 236, 16, { fill: '#cbd5e1', stroke: '#334155' }) + Ci(284, 270, 9, { fill: '#94a3b8', stroke: '#334155' });
    b += P('M185,300 L197,284 L209,300 Z', { fill: '#fde68a', stroke: '#b45309', sw: 1.5 }) + R(185, 300, 24, 18, { fill: '#e5e7eb', stroke: '#334155', sw: 1.5 });
    b += P('M197,282 L197,226 M190,284 L180,232 M204,284 L214,232', { stroke: '#f59e0b', sw: 1.4, dash: true });
    var lab = [[197, 36, 110, 30, 'Thị kính'], [180, 100, 110, 80, 'Ống kính'], [165, 158, 110, 135, 'Đĩa quay'], [197, 200, 110, 180, 'Vật kính'], [135, 213, 110, 228, 'Bàn kính'], [197, 300, 110, 280, 'Đèn chiếu sáng'], [165, 334, 110, 330, 'Chân kính'],
      [300, 170, 340, 150, 'Thân kính'], [246, 205, 340, 195, 'Kẹp giữ mẫu'], [298, 236, 340, 240, 'Ốc to (ốc sơ cấp)'], [292, 272, 340, 282, 'Ốc nhỏ (ốc vi cấp)']];
    if (o.labels === false) lab = [];
    return labelled({ w: 480, h: 350, body: b, labels: lab, size: 13, label: 'Các bộ phận của kính hiển vi quang học' });
  }

  /* ---------- Kính lúp ---------- */
  function magnifier() {
    var id = 'mg' + (++uid), b = '<defs><radialGradient id="' + id + '" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#bfdbfe"/></radialGradient></defs>';
    b += L(196, 158, 282, 244, { color: '#92400e', width: 20 }) + L(196, 158, 214, 176, { color: '#1f2937', width: 22 });
    b += Ci(145, 112, 68, { fill: 'url(#' + id + ')', stroke: '#1f2937', sw: 10 });
    b += P('M112,80 A48,48 0 0 1 150,62', { stroke: '#fff', sw: 5 });
    b += '<g transform="translate(70,250)">' + P('M0,-26 Q22,0 0,26 Q-22,0 0,-26 Z', { fill: '#dbeafe', stroke: '#2563eb', sw: 2 }) + '</g>' + T(70, 292, 'Mặt cắt mặt kính', { size: 12, color: C.muted });
    var lab = [[193, 64, 250, 40, 'Khung (vành kính)'], [150, 125, 250, 110, 'Mặt kính'], [250, 212, 300, 190, 'Tay cầm'], [82, 250, 120, 262, 'dày ở giữa, mỏng ở rìa']];
    return labelled({ w: 420, h: 300, body: b, labels: lab, size: 13, label: 'Cấu tạo kính lúp' });
  }

  /* ---------- Thước đo độ dài ----------
     ruler({ min: 0, max: 10, div: 10 (vạch chia mỗi đơn vị), unit: 'cm', obj: [a, b], objLabel, objColor, width, eye: true }) */
  function ruler(o) {
    var min = o.min || 0, max = o.max, div = o.div || 10, W = o.width || 620, pad = 26, top = o.obj ? 64 : 16, rh = 50;
    var X = function (v) { return pad + (v - min) / (max - min) * (W - 2 * pad); };
    var b = R(pad - 12, top, W - 2 * pad + 24, rh, { rx: 4, fill: '#fef9c3', stroke: '#a16207', sw: 1.6 });
    var steps = Math.round((max - min) * div);
    for (var k = 0; k <= steps; k++) {
      var v = min + k / div, x = X(v), major = k % div === 0, half = div % 2 === 0 && k % (div / 2) === 0;
      b += L(x, top, x, top + (major ? 20 : half ? 14 : 8), { width: major ? 1.6 : 1, color: '#422006' });
      if (major) b += T(x, top + 36, num(Math.round(v * 1000) / 1000), { size: 13, color: '#422006' });
    }
    b += T(W - pad + 6, top + rh - 5, o.unit || 'cm', { size: 11, anchor: 'end', color: '#854d0e' });
    if (o.obj) {
      var a = X(o.obj[0]), c = X(o.obj[1]), col = o.objColor || C.blue;
      if (o.shape === 'pencil') {
        b += P('M' + n2(a) + ',' + (top - 30) + ' L' + n2(c - 18) + ',' + (top - 30) + ' L' + n2(c) + ',' + (top - 20) + ' L' + n2(c - 18) + ',' + (top - 10) + ' L' + n2(a) + ',' + (top - 10) + ' Z', { fill: '#fde047', stroke: '#854d0e', sw: 1.6 });
        b += P('M' + n2(c - 6) + ',' + (top - 23.5) + ' L' + n2(c) + ',' + (top - 20) + ' L' + n2(c - 6) + ',' + (top - 16.5) + ' Z', { fill: '#1f2937' });
        b += R(a, top - 30, 12, 20, { fill: '#f9a8d4', stroke: '#854d0e', sw: 1.6 });
      } else b += R(a, top - 30, c - a, 20, { rx: 4, fill: col, op: 0.8, stroke: col, sw: 1.5 });
      b += L(a, top - 36, a, top + 2, { color: C.red, width: 1.4, dash: '4 3' }) + L(c, top - 36, c, top + 2, { color: C.red, width: 1.4, dash: '4 3' });
      if (o.objLabel) b += T((a + c) / 2, top - 40, o.objLabel, { size: 13, bold: true, color: C.ink });
    }
    return wrap(W, top + rh + 8, b, o.label || 'Thước đo độ dài');
  }

  /* ---------- Nhiệt kế ---------- thermometer({ min, max, step, minor, value, unit, title }) */
  function thermometer(o) {
    var min = o.min, max = o.max, step = o.step || 10, minor = o.minor || 5, W = o.width || 150, H = o.height || 300;
    var x = 50, top = o.title ? 44 : 22, bot = H - 58, Y = function (v) { return bot - (v - min) / (max - min) * (bot - top); };
    var b = o.title ? T(W / 2, 20, o.title, { size: 13, bold: true }) : '';
    b += R(x - 9, top - 10, 18, bot - top + 30, { rx: 9, fill: '#fff', stroke: '#64748b', sw: 2 });
    b += Ci(x, bot + 30, 17, { fill: C.red, stroke: '#64748b', sw: 2 });
    b += R(x - 4, Y(o.value), 8, bot + 20 - Y(o.value), { fill: C.red });
    var n = Math.round((max - min) / step * minor);
    for (var k = 0; k <= n; k++) {
      var v = min + k * step / minor, y = Y(v), maj = k % minor === 0;
      b += L(x + 10, y, x + (maj ? 24 : 17), y, { width: maj ? 1.6 : 1, color: '#334155' });
      if (maj) b += T(x + 28, y + 5, num(Math.round(v * 100) / 100), { size: 12, anchor: 'start', color: '#334155' });
    }
    b += T(x + 24, bot + 46, o.unit || '°C', { size: 12, anchor: 'start', color: C.muted });
    if (o.showValue !== false) b += T(x + 24, bot + 30, num(o.value) + ' ' + (o.unit || '°C'), { size: 14, bold: true, color: C.red, anchor: 'start' });
    return wrap(W, H, b, o.label || 'Nhiệt kế chỉ ' + num(o.value) + ' ' + (o.unit || '°C'));
  }

  /* ---------- Mặt đồng hồ đo (cân đồng hồ) ---------- dial({ max, step, minor, value, unit, title }) */
  function dial(o) {
    var W = 260, H = 262, cx = 130, cy = 142, r = 96, max = o.max, step = o.step || 1, minor = o.minor || 5;
    var a0 = -225, sweep = 270, ang = function (v) { return (a0 + v / max * sweep) * Math.PI / 180; };
    var b = o.title ? T(cx, 17, o.title, { size: 13, bold: true }) : '';
    b += Ci(cx, cy, r + 12, { fill: '#f8fafc', stroke: '#334155', sw: 3 });
    var n = Math.round(max / step * minor);
    for (var k = 0; k <= n; k++) {
      var v = k * step / minor, a = ang(v), maj = k % minor === 0, c = Math.cos(a), s = Math.sin(a);
      b += L(cx + r * c, cy + r * s, cx + (r - (maj ? 14 : 7)) * c, cy + (r - (maj ? 14 : 7)) * s, { width: maj ? 2 : 1, color: '#334155' });
      if (maj) b += T(cx + (r - 28) * c, cy + (r - 28) * s + 5, num(Math.round(v * 100) / 100), { size: 13, color: '#334155' });
    }
    var av = ang(o.value);
    b += L(cx, cy, cx + (r - 8) * Math.cos(av), cy + (r - 8) * Math.sin(av), { color: C.red, width: 3 }) + Ci(cx, cy, 6, { fill: C.red });
    b += T(cx, cy + 50, o.unit || 'kg', { size: 14, bold: true, color: C.muted });
    return wrap(W, H, b, o.label || 'Mặt đồng hồ chỉ ' + num(o.value) + ' ' + (o.unit || ''));
  }

  /* ---------- Lực kế lò xo ---------- forceMeter({ max, step, minor, value, unit: 'N', load: 'Quả nặng' }) */
  function forceMeter(o) {
    var max = o.max, step = o.step || 1, minor = o.minor || 5, W = 170, top = 40, len = 200, bot = top + len;
    var Y = function (v) { return top + v / max * len; }, b = '';
    b += L(70, 8, 70, 26, { width: 3 }) + P('M62,8 Q70,-2 78,8', { stroke: C.ink, sw: 3 });
    b += R(52, 26, 36, len + 34, { rx: 8, fill: '#e0f2fe', stroke: '#0369a1', sw: 2 });
    var n = Math.round(max / step * minor);
    for (var k = 0; k <= n; k++) {
      var v = k * step / minor, y = Y(v), maj = k % minor === 0;
      b += L(88, y, 88 + (maj ? 14 : 8), y, { width: maj ? 1.6 : 1, color: '#334155' });
      if (maj) b += T(108, y + 5, num(Math.round(v * 100) / 100), { size: 12, anchor: 'start', color: '#334155' });
    }
    b += T(108, top - 16, o.unit || 'N', { size: 12, anchor: 'start', color: C.muted });
    var py = Y(o.value);
    b += P('M70,30 ' + (function () { var s = '', seg = 10, h = (py - 34) / seg; for (var i = 1; i <= seg; i++) s += 'L' + (i % 2 ? 60 : 80) + ',' + n2(30 + i * h) + ' '; return s; })(), { stroke: '#64748b', sw: 1.6 });
    b += L(54, py, 90, py, { color: C.red, width: 3 });
    b += L(70, py, 70, bot + 50, { width: 2 }) + P('M70,' + (bot + 50) + ' q0,10 -8,10', { stroke: C.ink, sw: 2 });
    if (o.load !== false) b += R(48, bot + 62, 44, 34, { rx: 4, fill: '#9ca3af', stroke: '#374151' }) + T(70, bot + 84, o.load || '', { size: 11, color: '#fff', bold: true });
    return wrap(W, bot + 104, b, o.label || 'Lực kế chỉ ' + num(o.value) + ' ' + (o.unit || 'N'));
  }

  /* ---------- Đồng hồ kim ---------- clock({ h, m, s }) */
  function clock(o) {
    var cx = 90, cy = 90, r = 76, b = Ci(cx, cy, r + 6, { fill: '#fff', stroke: '#334155', sw: 4 });
    for (var k = 0; k < 60; k++) { var a = k * 6 * Math.PI / 180, maj = k % 5 === 0; b += L(cx + r * Math.sin(a), cy - r * Math.cos(a), cx + (r - (maj ? 10 : 4)) * Math.sin(a), cy - (r - (maj ? 10 : 4)) * Math.cos(a), { width: maj ? 2 : 1 }); }
    for (var hN = 1; hN <= 12; hN++) { var ah = hN * 30 * Math.PI / 180; b += T(cx + (r - 22) * Math.sin(ah), cy - (r - 22) * Math.cos(ah) + 5, String(hN), { size: 13, bold: true }); }
    var am = (o.m || 0) * 6 * Math.PI / 180, ahh = ((o.h % 12) + (o.m || 0) / 60) * 30 * Math.PI / 180;
    b += L(cx, cy, cx + 40 * Math.sin(ahh), cy - 40 * Math.cos(ahh), { width: 5 }) + L(cx, cy, cx + 60 * Math.sin(am), cy - 60 * Math.cos(am), { width: 3, color: C.blue });
    if (o.s != null) { var as = o.s * 6 * Math.PI / 180; b += L(cx, cy, cx + 66 * Math.sin(as), cy - 66 * Math.cos(as), { width: 1.4, color: C.red }); }
    b += Ci(cx, cy, 4, { fill: C.ink });
    return wrap(180, 180, b, o.label || 'Đồng hồ kim');
  }

  /* ---------- Mô hình hạt ở ba thể ---------- particles('ran' | 'long' | 'khi', { w, h, title }) */
  function particleBox(kind, x, y, w, h) {
    var b = R(x, y, w, h, { rx: 6, fill: '#fff', stroke: '#64748b', sw: 2 }), r = 7, col = kind === 'ran' ? C.blue : (kind === 'long' ? '#0891b2' : '#7c3aed'), rr = rnd(kind.length * 13 + 5);
    if (kind === 'ran') {
      for (var i = 0; i < 6; i++) for (var j = 0; j < 4; j++) b += Ci(x + w / 2 - 5 * r + i * 2 * r, y + h - r - 4 - j * 2 * r, r - 0.6, { fill: col, stroke: '#fff', sw: 1 });
    } else if (kind === 'long') {
      var pts = [];
      for (var t = 0; t < 400 && pts.length < 20; t++) {
        var px = x + r + 3 + rr() * (w - 2 * r - 6), py = y + h * 0.35 + rr() * (h * 0.65 - r - 3);
        if (pts.every(function (q) { return (q[0] - px) * (q[0] - px) + (q[1] - py) * (q[1] - py) >= (2 * r) * (2 * r) * 0.92; })) pts.push([px, py]);
      }
      pts.forEach(function (q) { b += Ci(q[0], q[1], r - 0.6, { fill: col, stroke: '#fff', sw: 1 }); });
    } else {
      var pts2 = [];
      for (var t2 = 0; t2 < 400 && pts2.length < 7; t2++) {
        var qx = x + r + 6 + rr() * (w - 2 * r - 12), qy = y + r + 6 + rr() * (h - 2 * r - 12);
        if (pts2.every(function (q) { return (q[0] - qx) * (q[0] - qx) + (q[1] - qy) * (q[1] - qy) >= 900; })) pts2.push([qx, qy]);
      }
      pts2.forEach(function (q, i) {
        var a = i * 2.1; b += L(q[0], q[1], q[0] + 16 * Math.cos(a), q[1] + 16 * Math.sin(a), { color: '#c4b5fd', width: 1.5, dash: '3 3' });
        b += Ci(q[0], q[1], r - 0.6, { fill: col, stroke: '#fff', sw: 1 });
      });
    }
    return b;
  }
  function particles(kind, o) {
    o = o || {}; var w = o.w || 150, h = o.h || 110, title = o.title || ({ ran: 'Thể rắn', long: 'Thể lỏng', khi: 'Thể khí' })[kind];
    return wrap(w + 10, h + 34, particleBox(kind, 5, 5, w, h) + T(w / 2 + 5, h + 28, title, { bold: true, size: 14 }), title);
  }
  /* Sơ đồ ba thể và sự chuyển thể */
  function stateChange(o) {
    o = o || {}; var W = 660, H = 270, bw = 130, bh = 96, y = 88, xs = [20, 265, 510], id = 'sc' + (++uid);
    var b = A(id + 'r', C.red) + A(id + 'b', C.blue);
    ['ran', 'long', 'khi'].forEach(function (k, i) { b += particleBox(k, xs[i], y, bw, bh) + T(xs[i] + bw / 2, y + bh + 24, ({ ran: 'RẮN', long: 'LỎNG', khi: 'KHÍ (HƠI)' })[k], { bold: true, size: 15 }); });
    function arc(x1, x2, up, col, idm, label) {
      var yy = up ? y - 6 : y + bh + 40, cy = up ? y - 62 : y + bh + 92, mx = (x1 + x2) / 2;
      return '<path d="M' + x1 + ',' + yy + ' Q' + mx + ',' + cy + ' ' + x2 + ',' + yy + '" fill="none" stroke="' + col + '" stroke-width="2.5" marker-end="url(#' + idm + ')"/>' +
        T(mx, up ? cy + 20 : cy - 12, label, { color: col, bold: true, size: 14 });
    }
    b += arc(xs[0] + bw - 20, xs[1] + 20, true, C.red, id + 'r', o.melt || 'Nóng chảy');
    b += arc(xs[1] + bw - 20, xs[2] + 20, true, C.red, id + 'r', o.boil || 'Bay hơi (sôi)');
    b += arc(xs[1] + 20, xs[0] + bw - 20, false, C.blue, id + 'b', o.freeze || 'Đông đặc');
    b += arc(xs[2] + 20, xs[1] + bw - 20, false, C.blue, id + 'b', o.cond || 'Ngưng tụ');
    b += T(12, 20, '→ nhận nhiệt (đỏ)', { anchor: 'start', size: 12, color: C.red }) + T(W - 12, 20, '→ toả nhiệt (xanh)', { anchor: 'end', size: 12, color: C.blue });
    return wrap(W, H, b, 'Sơ đồ các thể của chất và sự chuyển thể');
  }

  /* ---------- Biểu diễn lực bằng mũi tên ----------
     forces({ w, h, ground: y, box: {x,y,w,h,label,fill}, ball: {cx,cy,r,label}, arrows: [{x,y,deg,len,label,color,lx,ly}], scale: {len, text}, items: [...draw items] }) */
  function forces(o) {
    var W = o.w || 420, H = o.h || 220, b = '';
    if (o.ground != null) {
      b += L(10, o.ground, W - 10, o.ground, { width: 2.5, color: '#57534e' });
      for (var gx = 18; gx < W - 10; gx += 14) b += L(gx, o.ground + 2, gx - 9, o.ground + 12, { width: 1.2, color: '#a8a29e' });
    }
    if (o.box) b += R(o.box.x, o.box.y, o.box.w, o.box.h, { rx: 4, fill: o.box.fill || '#fde68a', stroke: '#92400e' }) + (o.box.label ? T(o.box.x + o.box.w / 2, o.box.y + o.box.h / 2 + 5, o.box.label, { size: 13, bold: true, color: '#78350f' }) : '');
    if (o.ball) b += Ci(o.ball.cx, o.ball.cy, o.ball.r, { fill: o.ball.fill || '#fecaca', stroke: C.red }) + (o.ball.label ? T(o.ball.cx, o.ball.cy + 5, o.ball.label, { size: 12, bold: true }) : '');
    if (o.body) b += o.body;
    (o.arrows || []).forEach(function (a, i) {
      var col = a.color || [C.red, C.blue, C.green, C.purple][i % 4], id = 'fa' + (++uid), rad = a.deg * Math.PI / 180;
      var x2 = a.x + a.len * Math.cos(rad), y2 = a.y - a.len * Math.sin(rad);
      b += A(id, col, 6) + L(a.x, a.y, x2, y2, { color: col, width: 3.2, marker: id }) + Ci(a.x, a.y, 4, { fill: col });
      if (a.label) {
        var cs = Math.cos(rad), vert = Math.abs(cs) < 0.3, lx = vert ? (a.x + x2) / 2 + 10 : x2 + 10 * cs, ly = vert ? (a.y + y2) / 2 + 5 : y2 - 12 * Math.sin(rad) + 5;
        b += T(a.lx != null ? a.lx : lx, a.ly != null ? a.ly : ly, a.label, { color: col, bold: true, size: 14, anchor: a.anchor || (vert ? 'start' : (cs > 0 ? 'start' : 'end')) });
      }
    });
    if (o.scale) {
      var sx = o.scale.x || 16, sy = o.scale.y || H - 14;
      b += L(sx, sy, sx + o.scale.len, sy, { width: 2 }) + L(sx, sy - 5, sx, sy + 5, { width: 2 }) + L(sx + o.scale.len, sy - 5, sx + o.scale.len, sy + 5, { width: 2 }) + T(sx + o.scale.len + 8, sy + 5, o.scale.text, { anchor: 'start', size: 12 });
    }
    if (o.items) b += S.draw({ w: W, h: H, items: o.items }).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
    return wrap(W, H, b, o.label || 'Biểu diễn lực bằng mũi tên');
  }

  /* ---------- Lò xo treo thẳng đứng ----------
     springs({ pxPerCm: 18, maxCm: 14, items: [{ l: 10, load: '50 g', label: 'Chưa treo' }] }) */
  function springs(o) {
    var k = o.pxPerCm || 18, maxCm = o.maxCm || 14, top = 30, items = o.items, W = 110 + items.length * 120, H = top + maxCm * k + 70, b = '';
    b += R(20, top - 14, W - 30, 14, { fill: '#9ca3af', stroke: '#4b5563', sw: 1.5 });
    for (var hx = 26; hx < W - 12; hx += 12) b += L(hx, top - 14, hx + 8, top - 24, { width: 1, color: '#6b7280' });
    b += R(34, top, 30, maxCm * k + 6, { fill: '#fef9c3', stroke: '#a16207', sw: 1.4 });
    for (var c = 0; c <= maxCm; c++) { var y = top + c * k; b += L(64, y, 54, y, { width: 1.4, color: '#422006' }) + (c % 2 === 0 ? T(50, y + 4, String(c), { size: 11, anchor: 'end', color: '#422006' }) : ''); }
    b += T(49, top + maxCm * k + 22, 'cm', { size: 11, color: '#854d0e' });
    items.forEach(function (it, i) {
      var x = 130 + i * 120, end = top + it.l * k, coils = 12, s = 'M' + x + ',' + top + ' L' + x + ',' + (top + 8), h = (end - top - 16) / coils;
      for (var j = 0; j < coils; j++) s += ' L' + (x + (j % 2 ? -12 : 12)) + ',' + n2(top + 8 + (j + 0.5) * h);
      s += ' L' + x + ',' + n2(end - 8) + ' L' + x + ',' + n2(end);
      b += P(s, { stroke: '#334155', sw: 2 });
      b += L(66, end, x - 6, end, { color: C.red, width: 1.2, dash: '4 3' });
      if (it.load) b += R(x - 22, end, 44, 30, { rx: 4, fill: '#6b7280', stroke: '#374151' }) + T(x, end + 20, it.load, { size: 12, bold: true, color: '#fff' });
      if (it.label) b += T(x, H - 10, it.label, { size: 12, bold: true });
    });
    return wrap(W, H, b, o.label || 'Lò xo treo các vật');
  }

  /* ---------- Biển báo phòng thực hành ----------
     signs([{ kind: 'cam' | 'canh-bao' | 'chi-dan', glyph: 'lua'|'ly'|'thuoc'|'dien'|'doc'|'an-mon'|'thoat'|'binh'|'kinh', label }]) */
  var GLYPH = {
    lua: function (c) { return P('M0,-28 C10,-14 22,-6 18,10 C15,24 -15,24 -18,10 C-21,-2 -8,-8 -5,-20 C-2,-10 6,-10 0,-28 Z', { fill: c }) + P('M0,-2 C6,4 9,8 7,14 C4,20 -5,20 -7,14 C-9,8 -2,6 0,-2 Z', { fill: '#fff' }); },
    ly: function (c) { return P('M-14,-20 L14,-20 L10,22 L-10,22 Z', { fill: c }) + L(4, -20, 12, -32, { color: c, width: 3 }) + R(-12, -12, 24, 6, { fill: '#fff' }); },
    thuoc: function (c) { return R(-26, 4, 40, 9, { fill: c }) + R(14, 4, 10, 9, { fill: c, op: 0.55 }) + P('M-20,-2 C-26,-10 -14,-14 -20,-24 M-10,-2 C-16,-10 -4,-14 -10,-24', { stroke: c, sw: 2.5 }); },
    dien: function (c) { return P('M5,-30 L-14,4 L-2,4 L-7,30 L15,-7 L2,-7 Z', { fill: c }); },
    doc: function (c) { return Ci(0, -8, 14, { fill: c }) + R(-8, 2, 16, 10, { rx: 2, fill: c }) + Ci(-5, -9, 4, { fill: '#fff' }) + Ci(5, -9, 4, { fill: '#fff' }) + L(-20, 12, 20, 28, { color: c, width: 5 }) + L(20, 12, -20, 28, { color: c, width: 5 }); },
    'an-mon': function (c) { return '<g transform="rotate(-35 -6 -18)">' + R(-12, -34, 12, 30, { rx: 4, fill: c }) + '</g>' + Ci(4, -2, 2.6, { fill: c }) + Ci(4, 8, 2.6, { fill: c }) + P('M-24,16 L24,16 L24,28 L-24,28 Z', { fill: c }) + P('M-2,16 Q4,24 10,16 Z', { fill: '#fff' }); },
    thoat: function (c) { return Ci(-8, -24, 5, { fill: c }) + P('M-8,-18 L-10,2 M-10,-12 L2,-6 M-10,-12 L-22,-4 M-10,2 L0,14 L0,26 M-10,2 L-22,24', { stroke: c, sw: 4 }) + P('M8,0 L26,0 M18,-8 L26,0 L18,8', { stroke: c, sw: 4 }); },
    binh: function (c) { return R(-10, -18, 20, 44, { rx: 7, fill: c }) + R(-4, -26, 8, 8, { fill: c }) + P('M4,-24 L18,-28 L22,-18', { stroke: c, sw: 3 }); },
    kinh: function (c) { return R(-26, -10, 22, 18, { rx: 7, fill: c }) + R(4, -10, 22, 18, { rx: 7, fill: c }) + L(-4, -2, 4, -2, { color: c, width: 4 }) + R(-21, -6, 12, 9, { rx: 3, fill: '#fff', op: 0.5 }) + R(9, -6, 12, 9, { rx: 3, fill: '#fff', op: 0.5 }); }
  };
  function sign(s) {
    var b = '', cx = 60, cy = 58, g = GLYPH[s.glyph] || GLYPH.lua;
    if (s.kind === 'cam') {
      b += Ci(cx, cy, 46, { fill: '#fff', stroke: C.red, sw: 9 }) + '<g transform="translate(' + cx + ',' + cy + ')">' + g('#111827') + '</g>' + L(cx - 32, cy - 32, cx + 32, cy + 32, { color: C.red, width: 8 });
    } else if (s.kind === 'canh-bao') {
      b += P('M' + cx + ',8 L112,102 L8,102 Z', { fill: '#facc15', stroke: '#111827', sw: 5 }) + '<g transform="translate(' + cx + ',70) scale(0.78)">' + g('#111827') + '</g>';
    } else if (s.kind === 'bat-buoc') {
      b += Ci(cx, cy, 48, { fill: '#1d4ed8' }) + '<g transform="translate(' + cx + ',' + cy + ')">' + g('#fff') + '</g>';
    } else {
      b += R(12, 10, 96, 96, { rx: 8, fill: s.red ? '#dc2626' : '#16a34a' }) + '<g transform="translate(' + cx + ',' + cy + ')">' + g('#fff') + '</g>';
    }
    return wrap(120, 112, b, s.label || 'Biển báo');
  }
  function signs(list) { return S.row(list.map(function (s) { return { svg: sign(s), caption: s.label }; })); }

  /* ---------- Khoá lưỡng phân (sơ đồ nhánh) ----------
     keyTree({ q: 'Câu hỏi?', yes: nhánh | 'Tên', no: nhánh | 'Tên', yesLabel, noLabel }, { w, size }) */
  function keyTree(root, o) {
    o = o || {}; var W = o.w || 660, size = o.size || 13, pitch = o.pitch || 92, nodes = [], maxD = 0;
    var nl = 0; (function count(n) { if (typeof n === 'string') { nl++; return; } count(n.yes); count(n.no); })(root);
    var lw = (W - 10) / nl, li = 0;
    var walkX = function (n, d) {
      maxD = Math.max(maxD, d);
      if (typeof n === 'string') { var lf = { leaf: true, t: n, d: d, x: 5 + lw * (li++ + 0.5) }; nodes.push(lf); return lf; }
      var me = { t: n.q, d: d, yl: n.yesLabel || 'Có', nl: n.noLabel || 'Không' };
      me.a = walkX(n.yes, d + 1); me.b = walkX(n.no, d + 1); me.x = (me.a.x + me.b.x) / 2; nodes.push(me); return me;
    };
    walkX(root, 0);
    var id = 'kt' + (++uid), b = A(id, C.muted, 6), H = (maxD + 1) * pitch + 10;
    function boxOf(n) {
      var bw = n.leaf ? Math.min(lw - 8, 150) : Math.min(210, Math.max(lw * 1.6, 130)), max = Math.max(6, Math.floor((bw - 12) / (size * 0.56)));
      var lines = S.splitLines(n.t, max), bh = lines.length * size * 1.25 + 14;
      return { w: bw, h: bh, lines: lines };
    }
    nodes.forEach(function (n) { n.box = boxOf(n); n.y = 10 + n.d * pitch; });
    nodes.forEach(function (n) {
      if (n.leaf) return;
      [[n.a, n.yl, C.green], [n.b, n.nl, C.red]].forEach(function (e) {
        var c = e[0], x1 = n.x, y1 = n.y + n.box.h, x2 = c.x, y2 = c.y - 2;
        b += L(x1, y1, x2, y2, { color: C.muted, width: 1.8, marker: id });
        b += T((x1 + x2) / 2 + (x2 < x1 ? -8 : 8), (y1 + y2) / 2 + 4, e[1], { size: 12, bold: true, color: e[2], anchor: x2 < x1 ? 'end' : 'start' });
      });
    });
    nodes.forEach(function (n) {
      var bx = n.box, x = n.x - bx.w / 2;
      b += R(x, n.y, bx.w, bx.h, { rx: 8, fill: n.leaf ? C.greenL : C.blueL, stroke: n.leaf ? C.green : C.blue, sw: 1.8 });
      bx.lines.forEach(function (l, i) { b += T(n.x, n.y + 7 + size + i * size * 1.25 - 2, l, { size: size, bold: n.leaf, color: n.leaf ? '#14532d' : C.ink }); });
      H = Math.max(H, n.y + bx.h + 8);
    });
    return wrap(W, H, b, o.label || 'Khoá lưỡng phân');
  }

  /* ---------- Mặt Trời – Trái Đất: ngày và đêm ---------- */
  function sunEarth() {
    var id = 'se' + (++uid), b = A(id, '#f59e0b', 6) + A(id + 'k', C.ink, 6);
    for (var k = 0; k < 12; k++) { var a = k * 30 * Math.PI / 180; b += L(70 + 50 * Math.cos(a), 120 + 50 * Math.sin(a), 70 + 62 * Math.cos(a), 120 + 62 * Math.sin(a), { color: '#f59e0b', width: 3 }); }
    b += Ci(70, 120, 44, { fill: '#fde047', stroke: '#f59e0b', sw: 3 }) + T(70, 125, 'Mặt Trời', { size: 13, bold: true, color: '#92400e' });
    [80, 120, 160].forEach(function (y) { b += L(150, y, 330, y, { color: '#f59e0b', width: 2, marker: id, dash: '8 5' }); });
    b += T(240, 70, 'Ánh sáng Mặt Trời', { size: 13, color: '#b45309', bold: true });
    b += Ci(420, 120, 70, { fill: '#93c5fd', stroke: '#1d4ed8', sw: 2 });
    b += P('M420,50 A70,70 0 0 1 420,190 Z', { fill: '#1e293b', op: 0.75 });
    b += L(420, 36, 420, 204, { color: C.ink, width: 1.5, dash: '5 4' }) + P('M385,30 A40,10 0 0 0 455,30', { stroke: C.ink, sw: 2 }).replace('/>', ' marker-end="url(#' + id + 'k)"/>');
    b += T(420, 22, 'Trái Đất tự quay từ Tây sang Đông', { size: 12, bold: true });
    b += T(385, 125, 'Ngày', { size: 14, bold: true, color: '#1e3a8a' }) + T(456, 125, 'Đêm', { size: 14, bold: true, color: '#fff' });
    b += T(270, 224, 'Nửa được chiếu sáng là ban ngày, nửa kia là ban đêm', { size: 12, color: C.muted });
    return wrap(540, 232, b, 'Ngày và đêm trên Trái Đất');
  }
  /* ---------- Chuyển động nhìn thấy của Mặt Trời trên bầu trời ---------- */
  function sunPath() {
    var id = 'sp' + (++uid), W = 560, H = 250, gy = 200, b = A(id, '#f59e0b', 7);
    b += R(0, gy, W, H - gy, { fill: '#dcfce7' }) + L(0, gy, W, gy, { color: '#15803d', width: 2 });
    b += P('M60,' + gy + ' Q280,-60 500,' + gy, { stroke: '#f59e0b', sw: 2, dash: true });
    var pts = [[98, 150, 'Sáng sớm'], [280, 70, 'Giữa trưa'], [462, 150, 'Chiều tối']];
    pts.forEach(function (p) { b += Ci(p[0], p[1], 16, { fill: '#fde047', stroke: '#f59e0b', sw: 2 }) + T(p[0], p[1] - 24, p[2], { size: 13, bold: true, color: '#92400e' }); });
    b += P('M160,112 Q200,90 230,82', { stroke: '#f59e0b', sw: 2.5 }).replace('/>', ' marker-end="url(#' + id + ')"/>') + P('M330,82 Q370,92 405,114', { stroke: '#f59e0b', sw: 2.5 }).replace('/>', ' marker-end="url(#' + id + ')"/>');
    b += Ci(280, 176, 6, { fill: C.ink }) + P('M280,182 L280,196 M272,188 L288,188 M280,196 L274,200 M280,196 L286,200', { stroke: C.ink, sw: 2.5 });
    b += T(40, 228, 'ĐÔNG', { bold: true, size: 15, color: C.red }) + T(520, 228, 'TÂY', { bold: true, size: 15, color: C.blue }) + T(280, 228, 'Người quan sát (nhìn về hướng Nam)', { size: 12, color: '#14532d' });
    return wrap(W, H, b, 'Mặt Trời mọc ở phía Đông, lặn ở phía Tây');
  }

  /* ---------- Pha Mặt Trăng ---------- */
  function phasePath(cx, cy, r, p) { // p: tuổi trăng theo phần của chu kì (0 = không trăng, 0,5 = trăng tròn)
    p = ((p % 1) + 1) % 1;
    var k = Math.cos(2 * Math.PI * p), rx = n2(Math.abs(k) * r), top = n2(cx) + ',' + n2(cy - r), bot = n2(cx) + ',' + n2(cy + r);
    if (p < 0.5) return 'M' + top + ' A' + r + ',' + r + ' 0 0 1 ' + bot + ' A' + rx + ',' + r + ' 0 0 ' + (k > 0 ? 0 : 1) + ' ' + top + ' Z';
    return 'M' + top + ' A' + r + ',' + r + ' 0 0 0 ' + bot + ' A' + rx + ',' + r + ' 0 0 ' + (k > 0 ? 1 : 0) + ' ' + top + ' Z';
  }
  function moonFace(cx, cy, r, p) {
    var b = Ci(cx, cy, r, { fill: '#334155', stroke: '#1e293b', sw: 1.5 });
    if (Math.abs(p - 0.5) < 1e-6) return b + Ci(cx, cy, r, { fill: '#fef3c7', stroke: '#1e293b', sw: 1.5 });
    if (p > 1e-6 && p < 1 - 1e-6) b += P(phasePath(cx, cy, r, p), { fill: '#fef3c7' });
    return b;
  }
  var PHASES = [[0, 'Không trăng\n(trăng mới)'], [0.125, 'Trăng lưỡi liềm\nđầu tháng'], [0.25, 'Trăng bán nguyệt\nđầu tháng'], [0.375, 'Trăng khuyết\nđầu tháng'],
    [0.5, 'Trăng tròn'], [0.625, 'Trăng khuyết\ncuối tháng'], [0.75, 'Trăng bán nguyệt\ncuối tháng'], [0.875, 'Trăng lưỡi liềm\ncuối tháng']];
  function moonStrip(o) {
    o = o || {}; var cols = o.cols || 4, cw = 150, W = cols * cw, rows = Math.ceil(PHASES.length / cols), rh = 118, b = '';
    PHASES.forEach(function (ph, i) {
      var cx = (i % cols) * cw + cw / 2, cy = Math.floor(i / cols) * rh + 40;
      b += moonFace(cx, cy, 28, ph[0]) + T(cx, cy + 48, (i + 1) + '. ' + ph[1], { size: 12, bold: true });
    });
    return wrap(W, rows * rh + 6, b, 'Các hình dạng nhìn thấy của Mặt Trăng trong một tháng âm lịch');
  }
  function moonOrbit() {
    var W = 520, H = 400, cx = 230, cy = 200, R0 = 140, id = 'mo' + (++uid), b = A(id, '#f59e0b', 6) + A(id + 'k', C.muted, 6);
    [60, 140, 200, 260, 340].forEach(function (y) { b += L(W - 10, y, W - 90, y, { color: '#f59e0b', width: 2, marker: id }); });
    b += T(W - 50, 30, 'Ánh sáng', { size: 12, bold: true, color: '#b45309' }) + T(W - 50, 46, 'Mặt Trời', { size: 12, bold: true, color: '#b45309' });
    b += Ci(cx, cy, R0, { stroke: '#cbd5e1', sw: 1.5, dash: true });
    b += P('M' + (cx + 60) + ',' + (cy - 150) + ' A150,150 0 0 0 ' + (cx - 60) + ',' + (cy - 150), { stroke: C.muted, sw: 1.6 }).replace('/>', ' marker-end="url(#' + id + 'k)"/>');
    b += Ci(cx, cy, 30, { fill: '#93c5fd', stroke: '#1d4ed8' }) + P('M' + cx + ',' + (cy - 30) + ' A30,30 0 0 0 ' + cx + ',' + (cy + 30) + ' Z', { fill: '#1e293b', op: 0.7 }) + T(cx, cy + 48, 'Trái Đất', { size: 12, bold: true, color: '#1d4ed8' });
    PHASES.forEach(function (ph, i) {
      var a = ph[0] * 2 * Math.PI, x = cx + R0 * Math.cos(a), y = cy - R0 * Math.sin(a);
      b += Ci(x, y, 15, { fill: '#334155', stroke: '#1e293b', sw: 1 }) + P('M' + n2(x) + ',' + n2(y - 15) + ' A15,15 0 0 1 ' + n2(x) + ',' + n2(y + 15) + ' Z', { fill: '#fef3c7' });
      var lx = cx + (R0 + 34) * Math.cos(a), ly = cy - (R0 + 34) * Math.sin(a);
      b += Ci(lx, ly, 11, { fill: '#fff', stroke: C.purple, sw: 1.5 }) + T(lx, ly + 5, String(i + 1), { size: 12, bold: true, color: C.purple });
    });
    b += T(10, H - 10, 'Hình nhìn từ phía trên cực Bắc (không theo tỉ lệ)', { size: 11, anchor: 'start', color: C.muted });
    return wrap(W, H, b, 'Vị trí Mặt Trăng trên quỹ đạo quanh Trái Đất');
  }

  /* ---------- Hệ Mặt Trời (không theo tỉ lệ) ---------- */
  function solarSystem() {
    var W = 680, H = 228, y = 104, b = '';
    b += Ci(-30, y, 90, { fill: '#fde047', stroke: '#f59e0b', sw: 3 }) + T(32, y + 5, 'Mặt Trời', { size: 13, bold: true, color: '#92400e' });
    var pl = [['Sao Thuỷ', 5, '#a8a29e', 96], ['Sao Kim', 8, '#fbbf24', 132], ['Trái Đất', 8.5, '#3b82f6', 170], ['Sao Hoả', 6.5, '#ef4444', 206], ['Sao Mộc', 24, '#d97706', 300], ['Sao Thổ', 20, '#eab308', 392], ['Sao Thiên Vương', 13, '#67e8f9', 498], ['Sao Hải Vương', 12.5, '#3b82f6', 604]];
    var rr = rnd(3); for (var i = 0; i < 40; i++) { var ax = 228 + rr() * 26, ay = y - 50 + rr() * 100; b += Ci(ax, ay, 1.3, { fill: '#78716c' }); }
    b += T(244, H - 26, 'Vành đai', { size: 10, color: C.muted }) + T(244, H - 14, 'tiểu hành tinh', { size: 10, color: C.muted });
    pl.forEach(function (p, i) {
      var off = (i === 2 || i === 3) ? 62 : 40;
      b += L(p[3], y, p[3], i % 2 ? y + off : y - off, { color: '#e5e7eb', width: 1 });
      b += Ci(p[3], y, p[1], { fill: p[2], stroke: '#1f2937', sw: 1 });
      if (p[0] === 'Sao Thổ') b += E(p[3], y, p[1] + 14, 5, { stroke: '#a16207', sw: 2.5, rot: -15 });
      b += T(p[3], i % 2 ? y + off + 16 : y - off - 6, (i + 1) + '. ' + p[0], { size: 12, bold: true });
    });
    b += T(W - 8, 14, 'Kích thước và khoảng cách không theo tỉ lệ', { size: 11, anchor: 'end', color: C.muted });
    return wrap(W, H, b, 'Tám hành tinh trong hệ Mặt Trời');
  }

  /* ---------- Chòm sao ---------- constellation('bac-cuc' | 'lap-ho') */
  function constellation(kind) {
    var stars, lines, W = 520, H = 330, b = R(0, 0, W, H, { rx: 10, fill: '#0f172a' }), pos = {}, labels = [];
    if (kind === 'lap-ho') {
      stars = { Bet: [5.919, 7.41, 5], Bel: [5.418, 6.35, 3.6], Alk: [5.679, -1.94, 3.4], Aln: [5.603, -1.2, 3.4], Min: [5.533, -0.3, 3.2], Sai: [5.796, -9.67, 3.4], Rig: [5.242, -8.2, 5], Mei: [5.585, 9.93, 2.6] };
      lines = [['Bet', 'Alk'], ['Bel', 'Min'], ['Alk', 'Aln'], ['Aln', 'Min'], ['Alk', 'Sai'], ['Min', 'Rig'], ['Bet', 'Mei'], ['Bel', 'Mei']];
      var xs = [], ys = [];
      Object.keys(stars).forEach(function (k) { xs.push(-stars[k][0] * 15); ys.push(-stars[k][1]); });
      var minx = Math.min.apply(null, xs), maxx = Math.max.apply(null, xs), miny = Math.min.apply(null, ys), maxy = Math.max.apply(null, ys);
      var sc = Math.min((W - 200) / (maxx - minx), (H - 70) / (maxy - miny));
      Object.keys(stars).forEach(function (k) { pos[k] = [W / 2 - (maxx - minx) * sc / 2 + (-stars[k][0] * 15 - minx) * sc, 35 + (-stars[k][1] - miny) * sc]; });
      labels = [['Bet', 'Betelgeuse (đỏ)', 10, -8, 'start', '#fca5a5'], ['Rig', 'Rigel (trắng xanh)', 0, 22, 'middle', '#bfdbfe'], ['Alk', '“Thắt lưng”: 3 sao gần thẳng hàng', -14, 5, 'end', '#fde68a']];
    } else {
      stars = { Pol: [2.53, 89.26, 4.6], Yil: [17.54, 86.59, 2], Eps: [16.77, 82.04, 2], Zet: [15.73, 77.79, 2.4], Eta: [16.29, 75.76, 2], Koc: [14.85, 74.16, 3.8], Phe: [15.35, 71.83, 3],
        Dub: [11.06, 61.75, 4.4], Mer: [11.03, 56.38, 3.8], Phd: [11.9, 53.69, 3.6], Meg: [12.26, 57.03, 3], Ali: [12.9, 55.96, 4], Miz: [13.4, 54.93, 3.8], Alk: [13.79, 49.31, 3.8] };
      lines = [['Pol', 'Yil'], ['Yil', 'Eps'], ['Eps', 'Zet'], ['Zet', 'Eta'], ['Eta', 'Phe'], ['Phe', 'Koc'], ['Koc', 'Zet'],
        ['Dub', 'Mer'], ['Mer', 'Phd'], ['Phd', 'Meg'], ['Meg', 'Dub'], ['Meg', 'Ali'], ['Ali', 'Miz'], ['Miz', 'Alk']];
      var rot = -1.75, raw = {};
      Object.keys(stars).forEach(function (k) { var r = 90 - stars[k][1], ph = stars[k][0] * 15 * Math.PI / 180 + rot; raw[k] = [r * Math.cos(ph), r * Math.sin(ph)]; });
      var ks = Object.keys(raw), mnx = Math.min.apply(null, ks.map(function (k) { return raw[k][0]; })), mxx = Math.max.apply(null, ks.map(function (k) { return raw[k][0]; }));
      var mny = Math.min.apply(null, ks.map(function (k) { return raw[k][1]; })), mxy = Math.max.apply(null, ks.map(function (k) { return raw[k][1]; }));
      var s2 = Math.min((W - 170) / (mxx - mnx), (H - 70) / (mxy - mny));
      ks.forEach(function (k) { pos[k] = [60 + (raw[k][0] - mnx) * s2, 40 + (raw[k][1] - mny) * s2]; });
      var d = [pos.Dub[0] - pos.Mer[0], pos.Dub[1] - pos.Mer[1]];
      b += L(pos.Mer[0], pos.Mer[1], pos.Pol[0] - d[0] * 0.15, pos.Pol[1] - d[1] * 0.15, { color: '#fbbf24', width: 1.4, dash: '5 5' });
      labels = [['Pol', 'Sao Bắc Cực', 10, -8, 'start', '#fde68a'], ['Koc', 'Gấu Nhỏ', 0, 24, 'middle', '#93c5fd'], ['Phd', 'Gấu Lớn (phần “cái gáo”)', 0, 32, 'middle', '#93c5fd']];
    }
    var rr = rnd(11); for (var i = 0; i < 60; i++) b += Ci(rr() * W, rr() * H, 0.5 + rr() * 0.8, { fill: '#64748b' });
    lines.forEach(function (l) { b += L(pos[l[0]][0], pos[l[0]][1], pos[l[1]][0], pos[l[1]][1], { color: '#60a5fa', width: 1.3 }); });
    Object.keys(stars).forEach(function (k) { b += Ci(pos[k][0], pos[k][1], stars[k][2], { fill: k === 'Bet' && kind === 'lap-ho' ? '#fca5a5' : '#fff' }); });
    labels.forEach(function (l) { b += T(pos[l[0]][0] + l[2], pos[l[0]][1] + l[3], l[1], { size: 13, bold: true, color: l[5], anchor: l[4] }); });
    return wrap(W, H, b, kind === 'lap-ho' ? 'Chòm sao Lạp Hộ' : 'Chòm sao Gấu Lớn, Gấu Nhỏ và sao Bắc Cực');
  }

  /* ---------- Ngân Hà nhìn từ trên xuống (hình vẽ mô phỏng) ---------- */
  function galaxy() {
    var W = 460, H = 330, cx = 230, cy = 160, b = R(0, 0, W, H, { rx: 10, fill: '#0f172a' }), rr = rnd(5);
    b += E(cx, cy, 44, 34, { fill: '#fde68a', stroke: 'none' }).replace('fill="#fde68a"', 'fill="#fde68a" fill-opacity="0.85"');
    for (var arm = 0; arm < 4; arm++) {
      for (var t = 0; t < 150; t++) {
        var th = t / 150 * 3.2 + arm * Math.PI / 2, rad = 26 + t * 0.95;
        var x = cx + rad * Math.cos(th) * 1.0 + (rr() - 0.5) * 16, y = cy + rad * Math.sin(th) * 0.78 + (rr() - 0.5) * 14;
        if (x > 8 && x < W - 8 && y > 8 && y < H - 30) b += Ci(x, y, 0.8 + rr() * 1.4, { fill: rr() > 0.7 ? '#bfdbfe' : '#e2e8f0' });
      }
    }
    var sx = cx + 118 * Math.cos(2.2), sy = cy + 118 * 0.78 * Math.sin(2.2);
    b += Ci(sx, sy, 6, { fill: 'none', stroke: '#facc15', sw: 2 }) + Ci(sx, sy, 2.5, { fill: '#facc15' });
    b += L(sx - 6, sy + 6, 70, 285, { color: '#facc15', width: 1.4 }) + T(70, 300, 'Hệ Mặt Trời ở đây', { size: 13, bold: true, color: '#facc15' });
    b += T(cx, 22, 'Ngân Hà (mô phỏng, nhìn từ trên xuống)', { size: 13, bold: true, color: '#e2e8f0' }) + T(cx + 36, cy + 5, 'Tâm', { size: 12, color: '#78350f', bold: true, anchor: 'end' });
    b += T(W - 12, H - 12, 'Đường kính ~ 100 000 năm ánh sáng', { size: 12, anchor: 'end', color: '#cbd5e1' });
    return wrap(W, H, b, 'Hình mô phỏng Ngân Hà');
  }

  /* ---------- Hình dạng vi khuẩn ---------- */
  function bacteria() {
    var W = 600, H = 150, b = '', col = '#fca5a5', st = '#b91c1c';
    [[40, 50], [62, 44], [52, 68], [80, 62], [30, 76], [98, 46]].forEach(function (p) { b += Ci(p[0] + 10, p[1] + 10, 10, { fill: col, stroke: st, sw: 1.6 }); });
    [[180, 50, 20], [200, 80, -10], [240, 56, 35]].forEach(function (p) { b += R(p[0], p[1], 46, 16, { rx: 8, fill: '#fde68a', stroke: '#b45309', sw: 1.6 }).replace('/>', ' transform="rotate(' + p[2] + ' ' + (p[0] + 23) + ' ' + (p[1] + 8) + ')"/>'); });
    b += P('M330,70 C340,40 352,40 358,70 C364,100 376,100 382,70 C388,40 400,40 406,70 C412,100 424,100 430,70', { stroke: '#7c3aed', sw: 5 });
    b += P('M500,50 C530,48 548,66 540,92', { stroke: '#0f766e', sw: 12 }) + P('M540,92 C548,104 556,108 566,110', { stroke: '#0f766e', sw: 1.5 });
    b += T(75, 125, 'Hình cầu', { bold: true }) + T(225, 125, 'Hình que', { bold: true }) + T(380, 125, 'Hình xoắn', { bold: true }) + T(530, 125, 'Hình dấu phẩy', { bold: true });
    b += T(W / 2, H - 4, 'Vi khuẩn rất nhỏ (thường chỉ vài micrômét), phải dùng kính hiển vi mới thấy.', { size: 11, color: C.muted });
    return wrap(W, H, b, 'Một số hình dạng của vi khuẩn');
  }
  /* ---------- Virus ---------- virus('cau-tao' | 'hinh-dang') */
  function virus(kind) {
    if (kind === 'cau-tao') {
      var b = Ci(170, 130, 88, { fill: '#fce7f3', stroke: '#be185d', sw: 3, dash: true });
      for (var k = 0; k < 16; k++) { var a = k * Math.PI / 8; b += L(170 + 88 * Math.cos(a), 130 + 88 * Math.sin(a), 170 + 102 * Math.cos(a), 130 + 102 * Math.sin(a), { color: '#be185d', width: 3 }) + Ci(170 + 104 * Math.cos(a), 130 + 104 * Math.sin(a), 4, { fill: '#be185d' }); }
      b += P(S.regular(6, 170, 130, 64, 0).map(function (q, i) { return (i ? 'L' : 'M') + n2(q[0]) + ',' + n2(q[1]); }).join(' ') + ' Z', { fill: '#dbeafe', stroke: C.blue, sw: 3 });
      b += P('M130,130 C140,100 155,160 165,125 C175,95 190,160 200,128 C206,112 214,122 212,134', { stroke: C.purple, sw: 3 });
      return labelled({ w: 460, h: 260, body: b, labels: [[232, 110, 300, 60, 'Vỏ protein'], [185, 128, 300, 130, 'Vật chất di truyền'], [262, 170, 290, 205, 'Vỏ ngoài và gai\n(chỉ có ở một số virus)']], label: 'Cấu tạo của virus' });
    }
    var s = '';
    s += R(40, 55, 110, 34, { rx: 6, fill: '#dcfce7', stroke: '#15803d' });
    for (var x = 48; x < 148; x += 10) s += P('M' + x + ',55 Q' + (x + 5) + ',72 ' + x + ',89', { stroke: '#15803d', sw: 1.4 });
    s += P(S.regular(6, 260, 72, 36, 0).map(function (q, i) { return (i ? 'L' : 'M') + n2(q[0]) + ',' + n2(q[1]); }).join(' ') + ' Z', { fill: '#dbeafe', stroke: C.blue, sw: 2.5 });
    S.regular(6, 260, 72, 36, 0).forEach(function (q) { s += L(260, 72, q[0], q[1], { color: C.blue, width: 1 }) + L(q[0], q[1], 260 + (q[0] - 260) * 1.35, 72 + (q[1] - 72) * 1.35, { color: C.blue, width: 2 }) + Ci(260 + (q[0] - 260) * 1.4, 72 + (q[1] - 72) * 1.4, 3, { fill: C.blue }); });
    s += P(S.regular(6, 420, 42, 24, 0).map(function (q, i) { return (i ? 'L' : 'M') + n2(q[0]) + ',' + n2(q[1]); }).join(' ') + ' Z', { fill: '#ede9fe', stroke: C.purple, sw: 2.5 });
    s += R(414, 64, 12, 40, { fill: '#ede9fe', stroke: C.purple, sw: 2 }) + P('M414,104 L392,124 M426,104 L448,124 M416,104 L404,128 M424,104 L436,128', { stroke: C.purple, sw: 2 });
    s += T(95, 140, 'Dạng xoắn', { bold: true }) + T(95, 158, '(virus khảm thuốc lá)', { size: 12, color: C.muted }) + T(260, 140, 'Dạng khối', { bold: true }) + T(260, 158, '(virus adeno)', { size: 12, color: C.muted }) + T(420, 140, 'Dạng hỗn hợp', { bold: true }) + T(420, 158, '(thể thực khuẩn)', { size: 12, color: C.muted });
    return wrap(500, 168, s, 'Ba dạng cấu trúc của virus');
  }

  /* ---------- Bậc phân loại (tháp ngược) ---------- taxonomy({ example: ['Động vật', …] }) */
  function taxonomy(o) {
    o = o || {}; var names = ['Giới', 'Ngành', 'Lớp', 'Bộ', 'Họ', 'Chi (giống)', 'Loài'], ex = o.example, W = ex ? 620 : 420, cx = 200, b = '', rh = 36;
    var cols = ['#1e40af', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];
    names.forEach(function (nm, i) {
      var top = 10 + i * rh, w1 = 360 - i * 44, w2 = 360 - (i + 1) * 44;
      b += P('M' + n2(cx - w1 / 2) + ',' + top + ' L' + n2(cx + w1 / 2) + ',' + top + ' L' + n2(cx + w2 / 2) + ',' + (top + rh - 3) + ' L' + n2(cx - w2 / 2) + ',' + (top + rh - 3) + ' Z', { fill: cols[i] });
      b += T(cx, top + 22, nm, { bold: true, color: i < 4 ? '#fff' : '#0f172a', size: 14 });
      if (ex) b += L(cx + w1 / 2 - 8, top + 17, 392, top + 17, { color: '#cbd5e1', width: 1, dash: '3 3' }) + T(398, top + 22, ex[i], { anchor: 'start', size: 13, bold: i === 6 });
    });
    return wrap(W, 10 + 7 * rh + 8, b, 'Các bậc phân loại sinh vật từ thấp đến cao');
  }

  /* ---------- Dụng cụ tách chất ---------- lab('loc' | 'co-can' | 'chiet') */
  function lab(kind) {
    var b = '', lb = [];
    if (kind === 'co-can') {
      b += P('M70,120 Q130,160 190,120 Z', { fill: '#e0f2fe', stroke: '#334155', sw: 2.5 }) + P('M86,128 Q130,150 174,128 Z', { fill: '#bae6fd' });
      b += L(60, 120, 200, 120, { width: 3, color: '#57534e' }) + L(75, 120, 60, 230, { width: 3, color: '#57534e' }) + L(185, 120, 200, 230, { width: 3, color: '#57534e' });
      b += P('M130,160 C140,172 142,182 136,192 C131,198 124,196 122,188 C118,178 126,170 130,160 Z', { fill: '#f97316' });
      b += R(108, 196, 44, 34, { rx: 8, fill: '#dbeafe', stroke: '#334155' }) + R(124, 186, 12, 10, { fill: '#e5e7eb', stroke: '#334155', sw: 1.5 });
      b += P('M100,108 q-4,-10 0,-20 t0,-20 M130,104 q-4,-10 0,-20 t0,-20 M160,108 q-4,-10 0,-20 t0,-20', { stroke: '#94a3b8', sw: 1.6 });
      lb = [[176, 124, 218, 100, 'Bát sứ đựng\ndung dịch'], [130, 60, 210, 44, 'Hơi nước'], [150, 212, 218, 212, 'Đèn cồn'], [66, 180, 30, 250, 'Kiềng', 'middle']];
      return labelled({ w: 320, h: 276, body: b, labels: lb, size: 12, label: 'Cô cạn dung dịch' });
    }
    if (kind === 'chiet') {
      b += L(40, 250, 40, 20, { width: 4, color: '#57534e' }) + R(20, 250, 80, 10, { fill: '#57534e' }) + L(40, 95, 96, 95, { width: 3, color: '#57534e' });
      b += P('M100,40 Q60,110 104,150 L104,176 L116,176 L116,150 Q160,110 120,40 Z', { fill: '#f8fafc', stroke: '#334155', sw: 2.5 });
      b += P('M88,70 L132,70 Q146,98 130,120 L90,120 Q74,98 88,70 Z', { fill: '#fde68a' });
      b += P('M90,120 L130,120 Q122,138 112,146 L108,146 Q98,138 90,120 Z', { fill: '#93c5fd' });
      b += R(98, 158, 24, 8, { fill: '#dc2626' });
      b += P('M80,196 L80,250 L140,250 L140,196', { stroke: '#334155', sw: 2.5 }) + R(82, 226, 56, 22, { fill: '#93c5fd' });
      lb = [[118, 90, 172, 70, 'Dầu ăn (nhẹ hơn, ở trên)'], [112, 134, 172, 128, 'Nước (ở dưới)'], [122, 162, 172, 170, 'Khoá phễu'], [138, 238, 172, 236, 'Nước chảy xuống cốc']];
      return labelled({ w: 360, h: 270, body: b, labels: lb, size: 12, label: 'Tách dầu ăn khỏi nước bằng phễu chiết' });
    }
    b += L(40, 250, 40, 20, { width: 4, color: '#57534e' }) + R(20, 250, 80, 10, { fill: '#57534e' }) + L(40, 70, 90, 70, { width: 3, color: '#57534e' });
    b += P('M70,40 L150,40 L116,110 L116,160 L104,160 L104,110 Z', { fill: '#f8fafc', stroke: '#334155', sw: 2.5 });
    b += P('M80,46 L140,46 L112,104 L108,104 Z', { fill: '#fff', stroke: '#9ca3af', sw: 1.5 });
    b += P('M92,70 L128,70 L112,102 L108,102 Z', { fill: '#a16207', op: 0.35 });
    var rr = rnd(9); for (var i = 0; i < 14; i++) b += Ci(96 + rr() * 26, 74 + rr() * 20, 1.8, { fill: '#78350f' });
    b += P('M80,176 L80,250 L140,250 L140,176', { stroke: '#334155', sw: 2.5 }) + R(82, 222, 56, 26, { fill: '#bae6fd' }) + L(110, 162, 110, 216, { color: '#38bdf8', width: 2, dash: '3 4' });
    lb = [[146, 44, 170, 30, 'Phễu'], [134, 58, 170, 62, 'Giấy lọc'], [112, 84, 170, 96, 'Cát bị giữ lại'], [136, 236, 170, 232, 'Nước lọc (trong)'], [138, 200, 170, 190, 'Cốc hứng']];
    return labelled({ w: 320, h: 270, body: b, labels: lb, size: 12, label: 'Lọc tách cát khỏi nước' });
  }

  /* ---------- Dòng năng lượng (có ích / hao phí) ----------
     energyFlow({ input: { label, value }, outputs: [{ label, value, color }], unit: 'J' }) */
  function energyFlow(o) {
    var W = 600, H = 230, x0 = 20, x1 = 230, x2 = 400, tot = o.input.value, sc = 140 / tot, b = '', y0 = 45, gap = 26;
    var inH = tot * sc;
    b += R(x0, y0, x1 - x0, inH, { fill: '#fbbf24', op: 0.9 }) + T((x0 + x1) / 2, y0 + inH / 2 + 5, o.input.label + ': ' + num(o.input.value) + ' ' + (o.unit || 'J'), { bold: true, size: 14 });
    var yi = y0, yo = 22;
    o.outputs.forEach(function (out, i) {
      var h = Math.max(out.value * sc, 2), col = out.color || (i === 0 ? C.green : '#ef4444');
      b += P('M' + x1 + ',' + n2(yi) + ' C' + ((x1 + x2) / 2) + ',' + n2(yi) + ' ' + ((x1 + x2) / 2) + ',' + n2(yo) + ' ' + x2 + ',' + n2(yo) + ' L' + x2 + ',' + n2(yo + h) + ' C' + ((x1 + x2) / 2) + ',' + n2(yo + h) + ' ' + ((x1 + x2) / 2) + ',' + n2(yi + h) + ' ' + x1 + ',' + n2(yi + h) + ' Z', { fill: col, op: 0.75 });
      b += P('M' + x2 + ',' + n2(yo) + ' L' + (x2 + 30) + ',' + n2(yo) + ' L' + (x2 + 42) + ',' + n2(yo + h / 2) + ' L' + (x2 + 30) + ',' + n2(yo + h) + ' L' + x2 + ',' + n2(yo + h) + ' Z', { fill: col, op: 0.75 });
      b += T(x2 + 50, yo + h / 2 + 5, out.label + ': ' + num(out.value) + ' ' + (o.unit || 'J'), { anchor: 'start', size: 13, bold: true, color: col === '#ef4444' ? '#b91c1c' : '#166534' });
      yi += h; yo += h + gap;
    });
    H = Math.max(H, yo + 10);
    return wrap(W + 60, H, b, o.label || 'Sơ đồ dòng năng lượng');
  }

  /* ---------- Biểu đồ hình quạt ---------- pieChart({ parts: [{ v, label, color }], title }) */
  function pieChart(o) {
    var cx = 110, cy = 110, r = 90, tot = 0, a = -Math.PI / 2, b = '';
    o.parts.forEach(function (p) { tot += p.v; });
    o.parts.forEach(function (p, i) {
      var da = p.v / tot * 2 * Math.PI, a2 = a + da, col = p.color || [C.blue, C.green, C.orange, C.purple][i % 4], large = da > Math.PI ? 1 : 0;
      b += '<path d="M' + cx + ',' + cy + ' L' + n2(cx + r * Math.cos(a)) + ',' + n2(cy + r * Math.sin(a)) + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + n2(cx + r * Math.cos(a2)) + ',' + n2(cy + r * Math.sin(a2)) + ' Z" fill="' + col + '" stroke="#fff" stroke-width="2"/>';
      b += R(230, 40 + i * 34, 18, 18, { rx: 3, fill: col }) + T(256, 54 + i * 34, p.label, { anchor: 'start', size: 14, bold: true });
      a = a2;
    });
    if (o.title) b += T(230, 20, o.title, { anchor: 'start', size: 13, color: C.muted });
    var mw = Math.max.apply(null, o.parts.map(function (p) { return 26 + p.label.length * 8.2; }).concat([o.title ? o.title.length * 7 : 0]));
    return wrap(Math.max(440, Math.ceil(230 + mw + 12)), 225, b, o.title || 'Biểu đồ hình quạt');
  }

  /* ---------- Sự phân chia tế bào: 1 → 2 → 4 → 8 ---------- */
  function cellDivision(o) {
    o = o || {}; var gens = o.gens || 4, W = 640, H = 170, id = 'cd' + (++uid), b = A(id, C.muted, 6), gx = (W - 40) / gens;
    for (var g = 0; g < gens; g++) {
      var n = Math.pow(2, g), cx = 20 + gx * g + gx / 2 - 16, r = Math.max(9, 22 - g * 4), cols = n <= 2 ? n : (n === 4 ? 2 : 4), rows = Math.ceil(n / cols);
      for (var k = 0; k < n; k++) {
        var x = cx + ((k % cols) - (cols - 1) / 2) * (2 * r + 3), y = 72 + (Math.floor(k / cols) - (rows - 1) / 2) * (2 * r + 3);
        b += Ci(x, y, r, { fill: '#fce7f3', stroke: '#be185d', sw: 1.6 }) + Ci(x, y, r * 0.35, { fill: C.purple });
      }
      b += T(cx, 150, n + ' tế bào', { bold: true, size: 13 });
      if (g < gens - 1) b += L(cx + 50, 72, cx + gx - 50, 72, { color: C.muted, width: 2.5, marker: id });
    }
    return wrap(W, H, b, 'Từ một tế bào phân chia thành 2, 4, 8 tế bào');
  }


  /* =====================================================================
     BỔ SUNG CHO KHTN 7 (nguyên tử, bảng tuần hoàn, phân tử, tốc độ, âm, ánh sáng, từ)
     ===================================================================== */
  var ELC = { H: ['#f8fafc', '#64748b'], O: ['#f87171', '#b91c1c'], C: ['#4b5563', '#111827'], N: ['#60a5fa', '#1d4ed8'], Cl: ['#4ade80', '#15803d'],
    Na: ['#c084fc', '#7e22ce'], S: ['#facc15', '#a16207'], Mg: ['#d4d4d8', '#52525b'] };
  function elc(s) { return ELC[s] || ['#cbd5e1', '#475569']; }
  var SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' };
  function fmla(s) { return String(s).replace(/\d/g, function (d) { return SUB[d]; }); }
  function arw(x1, y1, x2, y2, id, col, w) { return L(x1, y1, x2, y2, { color: col || C.ink, width: w || 2.5, marker: id }); }
  function polyPath(pts) { return pts.map(function (p, i) { return (i ? 'L' : 'M') + n2(p[0]) + ',' + n2(p[1]); }).join(' '); }

  /* Vẽ nguyên tử kiểu Rutherford – Bohr tại (cx, cy).
     o: { p, shells: [2, 8, 1], r0, dr, er, nr, start (góc bắt đầu của lớp ngoài, độ), slots (số chỗ ở lớp ngoài), hollow: [chỉ số chỗ trống] } */
  function atomBody(cx, cy, o) {
    var sh = o.shells, r0 = o.r0 || 26, dr = o.dr || 20, er = o.er || 4.6, nr = o.nr || 16, b = '';
    sh.forEach(function (m, k) {
      var r = r0 + dr * k, outer = k === sh.length - 1, slots = outer && o.slots ? o.slots : m, st = outer && o.start != null ? o.start : -90 + k * 20;
      b += Ci(cx, cy, r, { stroke: '#94a3b8', sw: 1.4 });
      for (var i = 0; i < slots; i++) {
        var a = (st + 360 * i / slots) * Math.PI / 180, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
        if (i >= slots - m) b += Ci(x, y, er, { fill: C.blue, stroke: '#1e3a8a', sw: 1 });
        else b += Ci(x, y, er, { fill: '#fff', stroke: C.blue, sw: 1.2, dash: true });
      }
    });
    b += Ci(cx, cy, nr, { fill: '#fecaca', stroke: C.red, sw: 2 }) + T(cx, cy + 4.5, '+' + o.p, { size: nr >= 15 ? 13 : 11, bold: true, color: '#991b1b' });
    return b;
  }
  /* atomModel({ name: 'Sodium (Na)', p: 11, n: 12, shells: [2, 8, 1] }) */
  function atomModel(o) {
    var k = o.shells.length, r0 = o.r0 || 26, dr = o.dr || 20, Rr = r0 + dr * (k - 1), W = Math.max(2 * Rr + 30, 176), cx = W / 2, cy = Rr + 12;
    var e = o.shells.reduce(function (s, v) { return s + v; }, 0), b = atomBody(cx, cy, { p: o.p, shells: o.shells, r0: r0, dr: dr }), y = cy + Rr + 24;
    if (o.name) { b += T(cx, y, o.name, { bold: true, size: 14 }); y += 18; }
    b += T(cx, y, (o.n != null ? o.p + 'p, ' + o.n + 'n, ' : '') + e + 'e (' + o.shells.join(', ') + ')', { size: 12, color: C.muted });
    return wrap(W, y + 8, b, 'Mô hình nguyên tử ' + (o.name || ''));
  }

  /* ---------- Trích bảng tuần hoàn: 20 nguyên tố đầu (các nhóm A) ---------- periodicTable({ highlight: ['Na', 'Cl'] }) */
  var PT = [[1, 'H', 'Hydrogen', '1', 0, 1, 'pk'], [2, 'He', 'Helium', '4', 7, 1, 'kh'], [3, 'Li', 'Lithium', '7', 0, 2, 'kl'], [4, 'Be', 'Beryllium', '9', 1, 2, 'kl'],
    [5, 'B', 'Boron', '11', 2, 2, 'ak'], [6, 'C', 'Carbon', '12', 3, 2, 'pk'], [7, 'N', 'Nitrogen', '14', 4, 2, 'pk'], [8, 'O', 'Oxygen', '16', 5, 2, 'pk'], [9, 'F', 'Fluorine', '19', 6, 2, 'pk'],
    [10, 'Ne', 'Neon', '20', 7, 2, 'kh'], [11, 'Na', 'Sodium', '23', 0, 3, 'kl'], [12, 'Mg', 'Magnesium', '24', 1, 3, 'kl'], [13, 'Al', 'Aluminium', '27', 2, 3, 'kl'], [14, 'Si', 'Silicon', '28', 3, 3, 'ak'],
    [15, 'P', 'Phosphorus', '31', 4, 3, 'pk'], [16, 'S', 'Sulfur', '32', 5, 3, 'pk'], [17, 'Cl', 'Chlorine', '35,5', 6, 3, 'pk'], [18, 'Ar', 'Argon', '40', 7, 3, 'kh'], [19, 'K', 'Potassium', '39', 0, 4, 'kl'], [20, 'Ca', 'Calcium', '40', 1, 4, 'kl']];
  var PTC = { kl: ['#dbeafe', 'Kim loại'], pk: ['#dcfce7', 'Phi kim'], ak: ['#fef9c3', 'Á kim'], kh: ['#ede9fe', 'Khí hiếm'] };
  function periodicTable(o) {
    o = o || {}; var cw = 70, ch = 64, x0 = 48, y0 = 32, hl = o.highlight || [], b = '';
    b += T(x0 - 24, y0 - 12, 'Chu kì', { size: 11, color: C.muted });
    ['IA', 'IIA', 'IIIA', 'IVA', 'VA', 'VIA', 'VIIA', 'VIIIA'].forEach(function (g, i) { b += T(x0 + i * cw + cw / 2, y0 - 12, g, { bold: true, size: 13, color: C.muted }); });
    for (var p = 1; p <= 4; p++) b += T(x0 - 22, y0 + (p - 1) * ch + ch / 2 + 5, String(p), { bold: true, size: 15, color: C.muted });
    PT.forEach(function (e) {
      var x = x0 + e[4] * cw, y = y0 + (e[5] - 1) * ch, on = hl.indexOf(e[1]) >= 0;
      b += R(x + 1, y + 1, cw - 2, ch - 2, { fill: PTC[e[6]][0], stroke: on ? C.red : '#94a3b8', sw: on ? 3 : 1.2, rx: 4 });
      b += T(x + 6, y + 15, String(e[0]), { anchor: 'start', size: 11, bold: true }) + T(x + cw - 6, y + 15, e[3], { anchor: 'end', size: 10, color: C.muted });
      b += T(x + cw / 2, y + 38, e[1], { size: 20, bold: true, color: on ? C.red : C.ink }) + T(x + cw / 2, y + 55, e[2], { size: 9.5 });
    });
    var ly = y0 + 4 * ch + 24;
    ['kl', 'pk', 'ak', 'kh'].forEach(function (k, i) { b += R(x0 + i * 120, ly - 12, 16, 16, { fill: PTC[k][0], stroke: '#94a3b8', sw: 1.2 }) + T(x0 + i * 120 + 22, ly + 1, PTC[k][1], { anchor: 'start', size: 13 }); });
    return wrap(x0 + 8 * cw + 10, ly + 14, b, 'Trích bảng tuần hoàn: 20 nguyên tố đầu tiên');
  }
  /* ---------- Một ô nguyên tố có chú thích ---------- elementCell({ z: 12, sym: 'Mg', name: 'Magnesium', mass: '24' }) */
  function elementCell(o) {
    var x = 170, y = 22, w = 130, h = 150, b = R(x, y, w, h, { fill: '#dbeafe', stroke: C.blue, sw: 2.5, rx: 8 });
    b += T(x + 12, y + 28, String(o.z), { anchor: 'start', size: 20, bold: true }) + T(x + w / 2, y + 86, o.sym, { size: 46, bold: true, color: C.blue }) +
      T(x + w / 2, y + 114, o.name, { size: 15 }) + T(x + w / 2, y + 138, o.mass, { size: 15, color: '#374151' });
    return labelled({ w: 480, h: 196, body: b, size: 13, label: 'Ô nguyên tố ' + o.name,
      labels: [[x + 18, y + 22, 120, 34, 'Số hiệu\nnguyên tử'], [x + w / 2 + 26, y + 70, 330, 50, 'Kí hiệu\nhoá học'], [x + w / 2 - 34, y + 110, 120, 118, 'Tên\nnguyên tố'], [x + w / 2 + 18, y + 134, 330, 150, 'Khối lượng\nnguyên tử (amu)']] });
  }

  /* ---------- Mô hình phân tử dạng quả cầu – que ---------- moleculeModel('H2O', { title: 'Nước' }) */
  var MOL = {
    H2: { a: [[-24, 0, 'H'], [24, 0, 'H']], b: [[0, 1, 1]] }, O2: { a: [[-30, 0, 'O'], [30, 0, 'O']], b: [[0, 1, 2]] }, N2: { a: [[-30, 0, 'N'], [30, 0, 'N']], b: [[0, 1, 3]] },
    Cl2: { a: [[-34, 0, 'Cl'], [34, 0, 'Cl']], b: [[0, 1, 1]] }, HCl: { a: [[-32, 0, 'H'], [20, 0, 'Cl']], b: [[0, 1, 1]] },
    H2O: { a: [[0, -8, 'O'], [-40, 22, 'H'], [40, 22, 'H']], b: [[0, 1, 1], [0, 2, 1]] }, CO2: { a: [[0, 0, 'C'], [-58, 0, 'O'], [58, 0, 'O']], b: [[0, 1, 2], [0, 2, 2]] },
    NH3: { a: [[0, -14, 'N'], [-42, 12, 'H'], [42, 12, 'H'], [0, 38, 'H']], b: [[0, 1, 1], [0, 2, 1], [0, 3, 1]] },
    CH4: { a: [[0, 0, 'C'], [-42, -28, 'H'], [42, -28, 'H'], [-42, 28, 'H'], [42, 28, 'H']], b: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]] }
  };
  var RAD = { H: 13, C: 19, N: 19, O: 19, Cl: 23, S: 22 };
  function moleculeModel(k, o) {
    o = o || {}; var m = MOL[k], W = o.w || 176, H = 136, cx = W / 2, cy = 56, b = '';
    m.b.forEach(function (bd) {
      var p = m.a[bd[0]], q = m.a[bd[1]], dx = q[0] - p[0], dy = q[1] - p[1], len = Math.sqrt(dx * dx + dy * dy), nx = -dy / len, ny = dx / len;
      for (var j = 0; j < bd[2]; j++) { var off = (j - (bd[2] - 1) / 2) * 7; b += L(cx + p[0] + nx * off, cy + p[1] + ny * off, cx + q[0] + nx * off, cy + q[1] + ny * off, { color: '#6b7280', width: 4 }); }
    });
    m.a.forEach(function (a) { var c = elc(a[2]), r = RAD[a[2]] || 18; b += Ci(cx + a[0], cy + a[1], r, { fill: c[0], stroke: c[1], sw: 2 }) + T(cx + a[0], cy + a[1] + 5, a[2], { size: 13, bold: true, color: a[2] === 'C' ? '#fff' : C.ink }); });
    b += T(cx, H - 12, o.title || fmla(k), { size: 14, bold: true });
    return wrap(W, H, b, 'Mô hình phân tử ' + fmla(k));
  }
  /* ---------- Mạng tinh thể muối ăn (mặt cắt phẳng) ---------- */
  function saltLattice() {
    var b = '', x0 = 40, y0 = 36, d = 46;
    for (var r = 0; r < 4; r++) for (var c = 0; c < 6; c++) { if (c < 5) b += L(x0 + c * d, y0 + r * d, x0 + (c + 1) * d, y0 + r * d, { color: '#cbd5e1', width: 1.5 }); if (r < 3) b += L(x0 + c * d, y0 + r * d, x0 + c * d, y0 + (r + 1) * d, { color: '#cbd5e1', width: 1.5 }); }
    for (r = 0; r < 4; r++) for (c = 0; c < 6; c++) {
      var na = (r + c) % 2 === 0, x = x0 + c * d, y = y0 + r * d;
      b += na ? Ci(x, y, 11, { fill: ELC.Na[0], stroke: ELC.Na[1] }) + T(x, y + 5, '+', { size: 14, bold: true }) : Ci(x, y, 18, { fill: ELC.Cl[0], stroke: ELC.Cl[1] }) + T(x, y + 5, '−', { size: 16, bold: true });
    }
    b += Ci(330, 60, 11, { fill: ELC.Na[0], stroke: ELC.Na[1] }) + T(350, 65, 'Ion Na⁺', { anchor: 'start', size: 14, bold: true }) + Ci(330, 104, 18, { fill: ELC.Cl[0], stroke: ELC.Cl[1] }) + T(356, 109, 'Ion Cl⁻', { anchor: 'start', size: 14, bold: true });
    return wrap(430, 200, b, 'Sự sắp xếp các ion trong muối ăn');
  }

  /* ---------- Liên kết hoá học ---------- bondScheme('ion' | 'H2' | 'H2O') */
  function bracket(cx, cy, r, charge) {
    var x1 = cx - r - 8, x2 = cx + r + 8, y1 = cy - r - 6, y2 = cy + r + 6;
    return P('M' + (x1 + 8) + ',' + y1 + ' L' + x1 + ',' + y1 + ' L' + x1 + ',' + y2 + ' L' + (x1 + 8) + ',' + y2, { stroke: C.ink, sw: 2 }) +
      P('M' + (x2 - 8) + ',' + y1 + ' L' + x2 + ',' + y1 + ' L' + x2 + ',' + y2 + ' L' + (x2 - 8) + ',' + y2, { stroke: C.ink, sw: 2 }) + T(x2 + 8, y1 + 8, charge, { size: 18, bold: true, color: C.red });
  }
  function bondScheme(kind) {
    var id = 'bd' + (++uid), b = A(id, C.orange, 7), s = { r0: 16, dr: 15, er: 3.6, nr: 12 };
    if (kind === 'ion') {
      var cy = 92;
      b += atomBody(66, cy, { p: 11, shells: [2, 8, 1], r0: 16, dr: 15, er: 3.6, nr: 12, start: 0 });
      b += atomBody(206, cy, { p: 17, shells: [2, 8, 7], r0: 16, dr: 15, er: 3.6, nr: 12, start: 180, slots: 8 });
      b += P('M112,' + (cy - 8) + ' Q136,' + (cy - 46) + ' 158,' + (cy - 8), { stroke: C.orange, sw: 2.5 }).replace('/>', ' marker-end="url(#' + id + ')"/>') + T(136, cy - 44, '1 e', { size: 13, bold: true, color: C.orange });
      b += T(290, cy + 8, '⟶', { size: 30, bold: true, color: C.muted });
      b += atomBody(400, cy, { p: 11, shells: [2, 8], r0: 16, dr: 15, er: 3.6, nr: 12 }) + bracket(400, cy, 31, '+');
      b += atomBody(560, cy, { p: 17, shells: [2, 8, 8], r0: 16, dr: 15, er: 3.6, nr: 12, start: 180 }) + bracket(560, cy, 46, '−');
      b += T(66, 172, 'Nguyên tử Na', { size: 13, bold: true }) + T(206, 172, 'Nguyên tử Cl', { size: 13, bold: true }) + T(400, 172, 'Ion Na⁺ (2, 8)', { size: 13, bold: true }) + T(560, 172, 'Ion Cl⁻ (2, 8, 8)', { size: 13, bold: true });
      return wrap(660, 186, b, 'Sự hình thành liên kết ion trong sodium chloride');
    }
    if (kind === 'H2') {
      b += Ci(200, 92, 40, { stroke: '#94a3b8', sw: 1.5 }) + Ci(264, 92, 40, { stroke: '#94a3b8', sw: 1.5 });
      b += Ci(232, 83, 4.8, { fill: C.blue, stroke: '#1e3a8a', sw: 1 }) + Ci(232, 101, 4.8, { fill: C.blue, stroke: '#1e3a8a', sw: 1 });
      b += Ci(200, 92, 13, { fill: '#fecaca', stroke: C.red }) + T(200, 96.5, '+1', { size: 11, bold: true, color: '#991b1b' }) + Ci(264, 92, 13, { fill: '#fecaca', stroke: C.red }) + T(264, 96.5, '+1', { size: 11, bold: true, color: '#991b1b' });
      return labelled({ w: 520, h: 176, body: b, size: 13, labels: [[232, 101, 330, 152, 'Cặp electron dùng chung'], [180, 126, 110, 158, 'Nguyên tử H'], [264, 52, 340, 26, 'Nguyên tử H']], label: 'Liên kết cộng hoá trị trong phân tử hydrogen' });
    }
    // H2O: O ở giữa, hai H chếch xuống dưới (góc liên kết khoảng 104,5°)
    var ox = 230, oy = 86, ro = 44, d = 60, rh = 24, parts = '';
    b += atomBody(ox, oy, { p: 8, shells: [2, 0], r0: 18, dr: 26, er: 4.2, nr: 13 });
    [128, 52].forEach(function (deg) {
      var a = deg * Math.PI / 180, hx = ox + d * Math.cos(a), hy = oy + d * Math.sin(a), px = Math.cos(a), py = Math.sin(a), mx = ox + 40 * px, my = oy + 40 * py;
      parts += Ci(hx, hy, rh, { stroke: '#94a3b8', sw: 1.4 }) + Ci(hx, hy, 11, { fill: '#fecaca', stroke: C.red }) + T(hx, hy + 4.5, '+1', { size: 11, bold: true, color: '#991b1b' });
      parts += Ci(mx - py * 5.5, my + px * 5.5, 4.2, { fill: C.blue, stroke: '#1e3a8a', sw: 1 }) + Ci(mx + py * 5.5, my - px * 5.5, 4.2, { fill: C.blue, stroke: '#1e3a8a', sw: 1 });
    });
    [-150, -128, -52, -30].forEach(function (deg) { var a = deg * Math.PI / 180; parts += Ci(ox + ro * Math.cos(a), oy + ro * Math.sin(a), 4.2, { fill: C.blue, stroke: '#1e3a8a', sw: 1 }); });
    b += parts;
    var la = 52 * Math.PI / 180;
    return labelled({ w: 540, h: 196, body: b, size: 13, labels: [[ox + 40 * Math.cos(la), oy + 40 * Math.sin(la), 330, 156, 'Cặp electron dùng chung'], [ox + ro * Math.cos(-0.52), oy + ro * Math.sin(-0.52), 330, 36, 'Nguyên tử O (lớp ngoài\nđủ 8 electron)'], [ox - 37, oy + 47, 110, 170, 'Nguyên tử H']], label: 'Liên kết cộng hoá trị trong phân tử nước' });
  }

  /* ---------- Quy tắc hoá trị (quy tắc chéo) ---------- valenceCross({ a: 'Al', va: 'III', b: 'O', vb: 'II', x: 2, y: 3 }) */
  function valenceCross(o) {
    var id = 'vc' + (++uid), b = A(id, C.orange, 7), ax = 110, bx = 230, y = 120;
    b += T(ax, 62, o.va, { size: 20, bold: true, color: C.red }) + T(bx, 62, o.vb, { size: 20, bold: true, color: C.red });
    b += T(ax, y, o.a, { size: 40, bold: true }) + T(bx, y, o.b, { size: 40, bold: true }) + T(ax + 40, y + 16, 'x', { size: 18, italic: true, color: C.blue }) + T(bx + (o.b.length > 1 ? 40 : 30), y + 16, 'y', { size: 18, italic: true, color: C.blue });
    b += arw(ax + 14, 70, bx + (o.b.length > 1 ? 34 : 24), y + 2, id, C.orange, 2) + arw(bx - 14, 70, ax + 34, y + 2, id, C.orange, 2);
    b += T(330, y - 4, '⇒', { size: 30, bold: true, color: C.muted }) + T(420, y, fmla(o.a + (o.x > 1 ? o.x : '') + o.b + (o.y > 1 ? o.y : '')), { size: 34, bold: true, color: C.green });
    b += T(250, 178, 'x · ' + o.va + ' = y · ' + o.vb + '  ⇒  x = ' + o.x + ', y = ' + o.y, { size: 15, bold: true });
    return wrap(500, 196, b, 'Lập công thức hoá học theo hoá trị');
  }

  /* ---------- Đồ thị (quãng đường – thời gian, đường cong sinh trưởng…) ----------
     xyGraph({ series: [{ pts: [[0,0],[1,40]], color, label, dots }], xmax, ymax, xstep, ystep, xlabel: 't (h)', ylabel: 's (km)', proj: [[x, y]], marks: [[x, y, 'A']] }) */
  function xyGraph(o) {
    var xl = o.xlabel || 't (h)', yl = o.ylabel || 's (km)', W = o.w || 540, H = o.h || 320, pl = 56, pr = Math.max(64, xl.length * 7.4 + 30), pt = 40, pb = 40;
    var x0 = o.xmin || 0, y0 = o.ymin || 0, X = function (x) { return pl + (x - x0) / (o.xmax - x0) * (W - pl - pr); }, Y = function (y) { return H - pb - (y - y0) / (o.ymax - y0) * (H - pb - pt); };
    var id = 'xy' + (++uid), b = A(id, C.ink, 7), v, eps = 1e-9;
    for (v = x0 + o.xstep; v <= o.xmax + eps; v += o.xstep) b += L(X(v), Y(y0), X(v), Y(o.ymax), { color: '#e5e7eb', width: 1 }) + T(X(v), Y(y0) + 18, num(v), { size: 12, color: C.muted });
    for (v = y0 + o.ystep; v <= o.ymax + eps; v += o.ystep) b += L(X(x0), Y(v), X(o.xmax), Y(v), { color: '#e5e7eb', width: 1 }) + (o.noYnum ? '' : T(X(x0) - 7, Y(v) + 4, num(v), { size: 12, color: C.muted, anchor: 'end' }));
    b += L(X(x0), Y(y0), X(o.xmax) + 22, Y(y0), { width: 1.8, marker: id }) + L(X(x0), Y(y0), X(x0), Y(o.ymax) - 24, { width: 1.8, marker: id });
    b += T(X(o.xmax) + 26, Y(y0) + 5, xl, { anchor: 'start', size: 13, bold: true }) + T(X(x0) + 8, 16, yl, { anchor: 'start', size: 13, bold: true }) + T(X(x0) - 8, Y(y0) + 16, 'O', { size: 12, italic: true });
    (o.proj || []).forEach(function (p) { b += L(X(p[0]), Y(p[1]), X(p[0]), Y(y0), { color: '#64748b', width: 1.3, dash: '4 4' }) + L(X(p[0]), Y(p[1]), X(x0), Y(p[1]), { color: '#64748b', width: 1.3, dash: '4 4' }); });
    (o.series || []).forEach(function (s, i) {
      var col = s.color || [C.blue, C.red, C.green, C.purple][i % 4];
      b += P(polyPath(s.pts.map(function (p) { return [X(p[0]), Y(p[1])]; })), { stroke: col, sw: 3 });
      if (s.dots) s.pts.forEach(function (p) { b += Ci(X(p[0]), Y(p[1]), 3.6, { fill: col }); });
      if (s.label) b += L(X(o.xmax) - 150, pt + 2 + i * 20, X(o.xmax) - 126, pt + 2 + i * 20, { color: col, width: 3 }) + T(X(o.xmax) - 120, pt + 7 + i * 20, s.label, { anchor: 'start', size: 13, bold: true, color: col });
    });
    (o.marks || []).forEach(function (m) { b += Ci(X(m[0]), Y(m[1]), 4, { fill: C.ink }) + T(X(m[0]) + (m[3] || 0), Y(m[1]) - 9 + (m[4] || 0), m[2], { size: 13, bold: true }); });
    return wrap(W, H, b, o.label || 'Đồ thị');
  }

  /* ---------- Đo tốc độ bằng cổng quang điện ---------- photoGate({ s: '0,50 m', t: '0,250 s' }) */
  function wheelCar(x, y, col) { return R(x, y, 64, 22, { rx: 5, fill: col || C.blue }) + R(x + 14, y - 14, 30, 16, { rx: 4, fill: col || C.blue, op: 0.75 }) + Ci(x + 14, y + 24, 7, { fill: '#111827' }) + Ci(x + 50, y + 24, 7, { fill: '#111827' }); }
  function photoGate(o) {
    o = o || {}; var id = 'pg' + (++uid), b = A(id, C.ink, 7), g1 = 260, g2 = 460;
    b += R(30, 166, 580, 8, { fill: '#94a3b8' }) + wheelCar(70, 138, C.orange) + arw(140, 132, 184, 132, id, C.orange, 2.5);
    [g1, g2].forEach(function (g, i) {
      b += R(g - 8, 92, 16, 74, { rx: 3, fill: '#334155' }) + Ci(g, 150, 4, { fill: '#ef4444' }) + P('M' + g + ',92 C' + g + ',60 ' + (i ? 420 : 300) + ',70 ' + (i ? 400 : 320) + ',58', { stroke: '#0f172a', sw: 1.6 });
      b += T(g, 194, 'Cổng quang điện ' + (i + 1), { size: 12, bold: true });
    });
    b += R(290, 14, 140, 46, { rx: 6, fill: '#1e293b' }) + R(302, 22, 116, 28, { rx: 3, fill: '#0f172a' }) + T(360, 42, o.t || '0,250 s', { size: 17, bold: true, color: '#4ade80' });
    b += T(440, 34, 'Đồng hồ đo thời', { anchor: 'start', size: 12, color: C.muted }) + T(440, 50, 'gian hiện số', { anchor: 'start', size: 12, color: C.muted });
    b += L(g1, 208, g2, 208, { width: 1.6, marker: id, start: id }) + T((g1 + g2) / 2, 228, 's = ' + (o.s || '0,50 m'), { size: 14, bold: true });
    return wrap(640, 240, b, 'Đo tốc độ bằng cổng quang điện và đồng hồ hiện số');
  }
  /* ---------- Khoảng cách an toàn khi tham gia giao thông ---------- roadSafety({ v: 60, d: '35 m' }) */
  function roadSafety(o) {
    o = o || {}; var id = 'rs' + (++uid), b = A(id, C.red, 7);
    b += R(10, 110, 620, 84, { fill: '#9ca3af' }) + L(10, 152, 630, 152, { color: '#fff', width: 3, dash: '18 14' });
    b += wheelCar(70, 124, C.blue) + wheelCar(380, 124, C.green);
    b += L(140, 104, 380, 104, { color: C.red, width: 2, marker: id, start: id }) + T(260, 96, 'Khoảng cách an toàn ≥ ' + (o.d || '35 m'), { size: 14, bold: true, color: C.red });
    b += R(556, 50, 6, 60, { fill: '#6b7280' }) + Ci(559, 46, 30, { fill: '#fff', stroke: C.red, sw: 7 }) + T(559, 54, String(o.v || 60), { size: 22, bold: true });
    b += T(559, 214, 'Tốc độ tối đa ' + (o.v || 60) + ' km/h', { size: 13, bold: true }) + T(104, 214, 'Xe sau', { size: 13, bold: true }) + T(412, 214, 'Xe trước', { size: 13, bold: true });
    return wrap(640, 226, b, 'Khoảng cách an toàn giữa hai xe');
  }

  /* ---------- Sóng âm: các lớp nén, dãn của không khí ---------- */
  function soundWave() {
    var id = 'sw' + (++uid), b = A(id, C.ink, 7), A0 = 8, lam = 120, k = 2 * Math.PI / lam;
    b += P('M40,70 L40,120 Q40,140 60,140 L70,140 Q90,140 90,120 L90,70', { stroke: '#64748b', sw: 7 }) + L(65, 140, 65, 185, { color: '#64748b', width: 7 });
    b += P('M28,80 Q20,95 28,110 M100,80 Q108,95 100,110', { stroke: C.orange, sw: 2 });
    for (var yy = 48; yy <= 160; yy += 12) for (var xe = 116; xe <= 616; xe += 9) b += Ci(xe + A0 * Math.sin(k * (xe - 116)), yy, 2.3, { fill: '#475569' });
    [176, 296, 416, 536].forEach(function (x) { b += R(x - 14, 42, 28, 124, { fill: '#bfdbfe', op: 0.35 }); });
    b += T(296, 32, 'Lớp nén', { size: 13, bold: true, color: C.blue }) + T(476, 184, 'Lớp dãn', { size: 13, bold: true, color: C.orange });
    b += L(150, 198, 300, 198, { width: 2, marker: id }) + T(308, 203, 'Hướng truyền âm', { anchor: 'start', size: 13, bold: true }) + T(65, 204, 'Âm thoa', { size: 13, bold: true });
    return wrap(640, 214, b, 'Sóng âm truyền trong không khí');
  }
  /* ---------- Màn hình dao động kí ---------- oscillo({ traces: [{ A: 0.8, f: 3, label: 'Âm to' }] }) */
  function oscillo(o) {
    var n = o.traces.length, sw = 250, sh = 150, b = '';
    o.traces.forEach(function (t, i) {
      var x0 = 10 + i * (sw + 20), y0 = 10, cy = y0 + sh / 2, pts = [];
      b += R(x0, y0, sw, sh, { rx: 10, fill: '#052e16' });
      for (var g = 25; g < sw; g += 25) b += L(x0 + g, y0 + 4, x0 + g, y0 + sh - 4, { color: '#14532d', width: 1 });
      for (g = 25; g < sh; g += 25) b += L(x0 + 4, y0 + g, x0 + sw - 4, y0 + g, { color: g === 75 ? '#166534' : '#14532d', width: 1 });
      for (var x = 8; x <= sw - 8; x += 2) pts.push([x0 + x, cy - t.A * 60 * Math.sin(2 * Math.PI * t.f * (x - 8) / (sw - 16))]);
      b += P(polyPath(pts), { stroke: '#4ade80', sw: 2.5 }) + T(x0 + sw / 2, y0 + sh + 24, t.label, { size: 14, bold: true });
    });
    return wrap(n * (sw + 20), sh + 44, b, 'Đồ thị dao động âm trên màn hình dao động kí');
  }
  /* ---------- Hạ âm – âm nghe được – siêu âm ---------- */
  function hearingRange() {
    var b = R(30, 50, 130, 44, { fill: '#e0e7ff' }) + R(160, 50, 300, 44, { fill: '#bbf7d0' }) + R(460, 50, 150, 44, { fill: '#f5d0fe' });
    b += T(95, 77, 'Hạ âm', { size: 15, bold: true }) + T(310, 77, 'Âm tai người nghe được', { size: 15, bold: true }) + T(535, 77, 'Siêu âm', { size: 15, bold: true });
    b += L(160, 44, 160, 104, { width: 2 }) + L(460, 44, 460, 104, { width: 2 }) + T(160, 122, '20 Hz', { size: 13, bold: true }) + T(460, 122, '20 000 Hz', { size: 13, bold: true });
    b += T(30, 30, 'Tần số tăng dần →', { anchor: 'start', size: 13, color: C.muted });
    b += T(95, 150, 'Voi, cá voi dùng', { size: 12 }) + T(95, 166, 'hạ âm để liên lạc', { size: 12 }) + T(535, 150, 'Dơi, cá heo phát và', { size: 12 }) + T(535, 166, 'nghe được siêu âm', { size: 12 });
    return wrap(640, 180, b, 'Miền tần số của âm');
  }
  /* ---------- Phản xạ âm ---------- echoScene('wall' | 'sonar' | 'barrier') */
  function person(x, y) { return Ci(x, y, 11, { fill: '#fde68a', stroke: '#92400e' }) + P('M' + x + ',' + (y + 11) + ' L' + x + ',' + (y + 52) + ' M' + (x - 16) + ',' + (y + 26) + ' L' + (x + 16) + ',' + (y + 26) + ' M' + x + ',' + (y + 52) + ' L' + (x - 12) + ',' + (y + 80) + ' M' + x + ',' + (y + 52) + ' L' + (x + 12) + ',' + (y + 80), { stroke: '#374151', sw: 3.5 }); }
  function echoScene(kind) {
    var id = 'ec' + (++uid), id2 = id + 'b', b = A(id, C.red, 7) + A(id2, C.blue, 7), i;
    if (kind === 'sonar') {
      b += R(10, 60, 580, 150, { fill: '#dbeafe' }) + P('M10,210 Q80,196 150,212 T290,208 T430,214 T590,206 L590,236 L10,236 Z', { fill: '#d6a86c', stroke: '#92400e' });
      b += P('M230,60 L250,40 L350,40 L370,60 Z', { fill: '#475569' }) + R(270, 24, 40, 16, { fill: '#64748b' });
      b += arw(290, 64, 290, 198, id, C.red, 2.5) + L(318, 198, 318, 64, { color: C.blue, width: 2.5, dash: '7 5', marker: id2 });
      b += T(282, 132, 'Siêu âm phát ra', { anchor: 'end', size: 13, bold: true, color: C.red }) + T(326, 132, 'Siêu âm phản xạ', { anchor: 'start', size: 13, bold: true, color: C.blue });
      b += L(500, 62, 500, 204, { width: 1.6, marker: id2, start: id2 }) + T(510, 138, 'h', { anchor: 'start', size: 16, bold: true, italic: true }) + T(80, 228, 'Đáy biển', { size: 13, bold: true });
      return wrap(600, 240, b, 'Đo độ sâu đáy biển bằng siêu âm');
    }
    if (kind === 'barrier') {
      b += R(10, 170, 190, 30, { fill: '#9ca3af' }) + wheelCar(60, 142, C.red);
      for (i = 0; i < 3; i++) b += R(262 + i * 22, 110, 6, 60, { fill: '#92400e' }) + Ci(265 + i * 22, 98, 20, { fill: '#22c55e', stroke: '#15803d' });
      b += R(330, 70, 16, 100, { fill: '#a8a29e', stroke: '#57534e' });
      b += P('M470,170 L470,110 L520,80 L570,110 L570,170 Z', { fill: '#fde68a', stroke: '#92400e' }) + R(505, 130, 26, 40, { fill: '#92400e' });
      for (i = 0; i < 3; i++) b += P('M' + (150 + i * 30) + ',' + (126 - i * 8) + ' q8,-8 0,-16 m10,20 q12,-14 0,-28', { stroke: C.red, sw: 2 });
      b += arw(210, 110, 318, 110, id, C.red, 2.5) + L(318, 126, 222, 146, { color: C.blue, width: 2.5, dash: '6 4', marker: id2 }) + L(352, 118, 452, 118, { color: '#fca5a5', width: 2, dash: '3 5' });
      b += T(100, 216, 'Nguồn ồn', { size: 13, bold: true }) + T(300, 216, 'Hàng cây, tường cách âm', { size: 13, bold: true }) + T(520, 196, 'Nhà ở', { size: 13, bold: true }) + T(404, 106, 'âm yếu đi', { size: 12, color: C.muted });
      return wrap(620, 228, b, 'Ngăn cản đường truyền của tiếng ồn');
    }
    b += person(70, 60) + R(560, 20, 40, 170, { fill: '#d6d3d1', stroke: '#57534e' });
    for (i = 0; i < 8; i++) b += L(560, 30 + i * 20, 600, 44 + i * 20, { color: '#78716c', width: 1.2 });
    b += arw(100, 90, 548, 90, id, C.red, 2.5) + L(548, 124, 100, 124, { color: C.blue, width: 2.5, dash: '7 5', marker: id2 });
    b += T(320, 80, 'Âm phát ra', { size: 13, bold: true, color: C.red }) + T(320, 144, 'Âm phản xạ (tiếng vang)', { size: 13, bold: true, color: C.blue });
    b += L(70, 172, 560, 172, { width: 1.5, marker: id2, start: id2 }) + T(315, 192, 'd', { size: 16, bold: true, italic: true }) + T(580, 208, 'Vách núi', { size: 13, bold: true });
    return wrap(620, 216, b, 'Phản xạ âm – tiếng vang');
  }

  /* ---------- Chùm sáng ---------- */
  function lightBeams() {
    var id = 'lb' + (++uid), b = A(id, '#d97706', 7), col = '#f59e0b', i;
    for (i = 0; i < 3; i++) b += arw(20, 36 + i * 34, 180, 36 + i * 34, id, col, 2.5);
    for (i = 0; i < 3; i++) b += arw(230, 30 + i * 40, 372, 70 + (i - 1) * 4, id, col, 2.5);
    for (i = 0; i < 3; i++) b += arw(440, 70, 596, 22 + i * 48, id, col, 2.5);
    b += Ci(440, 70, 6, { fill: '#facc15', stroke: '#d97706' });
    b += T(100, 150, 'Chùm sáng song song', { size: 13, bold: true }) + T(305, 150, 'Chùm sáng hội tụ', { size: 13, bold: true }) + T(515, 150, 'Chùm sáng phân kì', { size: 13, bold: true });
    return wrap(620, 162, b, 'Ba loại chùm sáng');
  }
  /* ---------- Vùng tối, vùng nửa tối ---------- shadowScene({ source: 'point' | 'large' }) */
  function shadowScene(o) {
    o = o || {}; var b = '', sx = 60, ox = 260, sc = 520, cy = 120, r = 30, big = o.source === 'large', f = function (ys, yo) { return yo + (yo - ys) * (sc - ox) / (ox - sx); };
    var st = big ? cy - 25 : cy, sb = big ? cy + 25 : cy, uT = f(st, cy - r), uB = f(sb, cy + r), pT = f(sb, cy - r), pB = f(st, cy + r);
    if (big) b += P('M' + ox + ',' + (cy - r) + ' L' + sc + ',' + n2(pT) + ' L' + sc + ',' + n2(pB) + ' L' + ox + ',' + (cy + r) + ' Z', { fill: '#94a3b8', op: 0.3 });
    b += P('M' + ox + ',' + (cy - r) + ' L' + sc + ',' + n2(uT) + ' L' + sc + ',' + n2(uB) + ' L' + ox + ',' + (cy + r) + ' Z', { fill: '#334155', op: 0.55 });
    b += R(sc, 8, 12, 224, { fill: '#e5e7eb', stroke: '#6b7280', sw: 1.5 });
    if (big) b += R(sc, pT, 12, pB - pT, { fill: '#94a3b8' });
    b += R(sc, uT, 12, uB - uT, { fill: '#1f2937' });
    [[st, cy - r], [sb, cy + r]].concat(big ? [[sb, cy - r], [st, cy + r]] : []).forEach(function (p) { b += L(sx, p[0], sc, f(p[0], p[1]), { color: '#f59e0b', width: 1.4, dash: '5 4' }); });
    b += big ? R(sx - 10, st, 20, sb - st, { rx: 8, fill: '#fde047', stroke: '#ca8a04' }) : Ci(sx, cy, 8, { fill: '#fde047', stroke: '#ca8a04' });
    b += Ci(ox, cy, r, { fill: '#475569' });
    b += T(sx, big ? sb + 22 : cy + 28, big ? 'Nguồn sáng rộng' : 'Nguồn sáng nhỏ', { size: 13, bold: true }) + T(ox, cy + r + 22, 'Vật cản', { size: 13, bold: true });
    b += T(sc + 18, cy + 5, 'Vùng tối', { anchor: 'start', size: 13, bold: true });
    if (big) b += T(sc + 18, (pT + uT) / 2 + 5, 'Vùng nửa tối', { anchor: 'start', size: 13, bold: true }) + T(sc + 18, (pB + uB) / 2 + 5, 'Vùng nửa tối', { anchor: 'start', size: 13, bold: true });
    else b += T(sc + 18, 30, 'Vùng sáng', { anchor: 'start', size: 13, bold: true });
    return wrap(640, 240, b, big ? 'Vùng tối và vùng nửa tối' : 'Vùng tối sau vật cản');
  }
  /* ---------- Phản xạ ánh sáng ---------- reflectionRays({ i: 40 }) | reflectionRays({ kind: 'diffuse' }) */
  function hatchBelow(x1, x2, y) { var s = L(x1, y, x2, y, { width: 3 }); for (var x = x1 + 6; x <= x2; x += 14) s += L(x, y + 2, x - 10, y + 12, { color: '#64748b', width: 1.3 }); return s; }
  function reflectionRays(o) {
    o = o || {}; var id = 'rf' + (++uid), col = '#f59e0b', b = A(id, '#d97706', 7);
    if (o.kind === 'diffuse') {
      var i, ang;
      b += hatchBelow(20, 280, 150);
      for (i = 0; i < 3; i++) { b += arw(40 + i * 40, 30, 90 + i * 40, 142, id, col, 2) + arw(90 + i * 40, 150, 140 + i * 40, 42, id, col, 2); }
      b += P('M340,150 L360,142 L376,156 L392,138 L410,154 L428,140 L446,156 L466,144 L484,152 L500,142 L520,150 L600,150', { stroke: C.ink, sw: 3 });
      for (i = 0; i < 3; i++) b += arw(360 + i * 60, 30, 390 + i * 55, 146, id, col, 2);
      [[392, 138, 330, 60], [392, 138, 410, 40], [446, 154, 520, 60], [446, 154, 450, 40], [500, 142, 590, 70], [500, 142, 540, 36]].forEach(function (s) { b += arw(s[0], s[1], s[2], s[3], id, '#fb923c', 1.6); });
      b += T(150, 186, 'Mặt nhẵn: phản xạ', { size: 13, bold: true }) + T(470, 186, 'Mặt gồ ghề: phản xạ khuếch tán', { size: 13, bold: true });
      return wrap(620, 196, b, 'Phản xạ trên mặt nhẵn và phản xạ khuếch tán');
    }
    var deg = o.i == null ? 40 : o.i, a = deg * Math.PI / 180, Ix = 280, Iy = 210, len = 165, Sx = Ix - len * Math.sin(a), Sy = Iy - len * Math.cos(a), Rx = Ix + len * Math.sin(a), Ry = Sy;
    b += hatchBelow(80, 480, Iy) + L(Ix, Iy, Ix, 36, { color: '#64748b', width: 1.5, dash: '6 5' }) + T(Ix, 28, 'N', { size: 14, bold: true });
    b += arw(Sx, Sy, (Sx + Ix) / 2, (Sy + Iy) / 2, id, col, 2.8) + L((Sx + Ix) / 2, (Sy + Iy) / 2, Ix, Iy, { color: col, width: 2.8 });
    b += arw(Ix, Iy, (Rx + Ix) / 2, (Ry + Iy) / 2, id, col, 2.8) + L((Rx + Ix) / 2, (Ry + Iy) / 2, Rx, Ry, { color: col, width: 2.8 });
    var r1 = 42, arc = function (a1, a2) { return P('M' + n2(Ix + r1 * Math.cos(a1)) + ',' + n2(Iy + r1 * Math.sin(a1)) + ' A' + r1 + ',' + r1 + ' 0 0 ' + (a2 > a1 ? 1 : 0) + ' ' + n2(Ix + r1 * Math.cos(a2)) + ',' + n2(Iy + r1 * Math.sin(a2)), { stroke: C.red, sw: 2 }); };
    b += arc(-Math.PI / 2 - a, -Math.PI / 2) + arc(-Math.PI / 2, -Math.PI / 2 + a);
    b += T(Ix - 60 * Math.sin(a / 2), Iy - 60 * Math.cos(a / 2) + 5, 'i', { size: 15, bold: true, italic: true, color: C.red }) + T(Ix + 60 * Math.sin(a / 2), Iy - 60 * Math.cos(a / 2) + 5, "i'", { size: 15, bold: true, italic: true, color: C.red });
    b += T(Sx - 8, Sy - 6, 'S', { size: 15, bold: true }) + T(Rx + 8, Ry - 6, 'R', { size: 15, bold: true }) + T(Ix, Iy + 30, 'I', { size: 15, bold: true });
    b += T((Sx + Ix) / 2 - 12, (Sy + Iy) / 2 + 4, 'Tia tới', { anchor: 'end', size: 13, bold: true }) + T((Rx + Ix) / 2 + 12, (Ry + Iy) / 2 + 4, 'Tia phản xạ', { anchor: 'start', size: 13, bold: true });
    b += T(440, Iy + 34, 'Gương phẳng', { size: 13, bold: true }) + T(Ix + 8, 70, 'Pháp tuyến', { anchor: 'start', size: 12, color: C.muted });
    return wrap(560, 252, b, 'Định luật phản xạ ánh sáng');
  }
  /* ---------- Ảnh qua gương phẳng ---------- mirrorImage({ kind: 'arrow' | 'point' }) */
  function eye(x, y) { return P('M' + (x - 16) + ',' + y + ' Q' + x + ',' + (y - 13) + ' ' + (x + 16) + ',' + y + ' Q' + x + ',' + (y + 13) + ' ' + (x - 16) + ',' + y + ' Z', { fill: '#fff', stroke: C.ink, sw: 2 }) + Ci(x + 4, y, 5, { fill: '#1e40af' }); }
  function mirrorV(x, y1, y2) { var s = L(x, y1, x, y2, { width: 3.5, color: '#0f172a' }); for (var y = y1 + 4; y <= y2; y += 13) s += L(x + 2, y, x + 12, y - 9, { color: '#64748b', width: 1.3 }); return s; }
  function mirrorImage(o) {
    o = o || {}; var id = 'mi' + (++uid), col = '#f59e0b', b = A(id, '#d97706', 7), mx = 300;
    if (o.kind === 'point') {
      var sx = 190, sy = 120, ix = 410;
      b += mirrorV(mx, 24, 216) + L(sx, sy, ix, sy, { color: '#94a3b8', width: 1.3, dash: '4 4' }) + P('M' + mx + ',' + (sy - 10) + ' L' + (mx - 10) + ',' + (sy - 10) + ' L' + (mx - 10) + ',' + sy, { stroke: C.ink, sw: 1.3 });
      [70, 170].forEach(function (my) {
        var dx = mx - ix, dy = my - sy, ex = mx + dx * 1.15, ey = my + dy * 1.15;
        b += arw(sx, sy, mx, my, id, col, 2.5) + arw(mx, my, ex, ey, id, col, 2.5) + L(mx, my, ix, sy, { color: col, width: 1.6, dash: '5 4' });
      });
      b += Ci(sx, sy, 5, { fill: '#f59e0b', stroke: '#b45309' }) + Ci(ix, sy, 5, { fill: '#fff', stroke: '#b45309', sw: 2 }) + T(sx - 12, sy + 5, 'S', { anchor: 'end', size: 15, bold: true }) + T(ix + 12, sy + 5, "S'", { anchor: 'start', size: 15, bold: true }) + T(mx - 6, sy + 22, 'H', { anchor: 'end', size: 14, bold: true });
      b += T(245, sy + 22, 'd', { size: 14, italic: true, bold: true }) + T(355, sy + 22, 'd', { size: 14, italic: true, bold: true }) + T(mx, 236, 'Gương phẳng', { size: 13, bold: true }) + T(ix + 30, 170, 'Ảnh ảo', { size: 13, bold: true, color: C.muted });
      return wrap(560, 246, b, 'Ảnh của một điểm sáng qua gương phẳng');
    }
    var Ax = 180, Ay = 100, By = 210, Ix = 420, E = [110, 40];
    b += mirrorV(mx, 20, 222);
    b += L(Ax, By, Ax, Ay + 4, { color: C.orange, width: 4, marker: id }) + L(Ix, By, Ix, Ay + 4, { color: C.orange, width: 3, dash: '7 5', marker: id });
    b += L(Ax, Ay, Ix, Ay, { color: '#cbd5e1', width: 1.2, dash: '3 4' }) + L(Ax, By, Ix, By, { color: '#cbd5e1', width: 1.2, dash: '3 4' });
    [[Ax, Ay, Ix, Ay], [Ax, By, Ix, By]].forEach(function (s) { var t = (s[2] - mx) / (s[2] - E[0]), my = s[3] + (E[1] - s[3]) * t; b += arw(s[0], s[1], mx, my, id, col, 2.2) + arw(mx, my, E[0] + 18, E[1] + (my - E[1]) * 18 / (mx - E[0]), id, col, 2.2) + L(mx, my, s[2], s[3], { color: col, width: 1.4, dash: '5 4' }); });
    b += eye(E[0], E[1]) + T(Ax - 10, Ay + 4, 'A', { anchor: 'end', size: 15, bold: true }) + T(Ax - 10, By + 4, 'B', { anchor: 'end', size: 15, bold: true }) + T(Ix + 10, Ay + 4, "A'", { anchor: 'start', size: 15, bold: true }) + T(Ix + 10, By + 4, "B'", { anchor: 'start', size: 15, bold: true });
    b += T(240, 238, 'd', { size: 14, italic: true, bold: true }) + T(360, 238, 'd', { size: 14, italic: true, bold: true }) + T(Ax, 238, 'Vật', { size: 13, bold: true }) + T(Ix, 238, 'Ảnh ảo', { size: 13, bold: true }) + T(mx + 50, 30, 'Gương', { anchor: 'start', size: 13, bold: true });
    return wrap(540, 250, b, 'Ảnh của vật qua gương phẳng');
  }

  /* ---------- Nam châm, từ trường ---------- */
  function barMag(x, y, w, h, nLeft) {
    var s = R(x, y, w / 2, h, { fill: nLeft ? '#ef4444' : '#3b82f6' }) + R(x + w / 2, y, w / 2, h, { fill: nLeft ? '#3b82f6' : '#ef4444' }) + R(x, y, w, h, { stroke: '#1f2937', sw: 1.5 });
    return s + T(x + w / 4, y + h / 2 + 7, nLeft ? 'N' : 'S', { size: 20, bold: true, color: '#fff' }) + T(x + 3 * w / 4, y + h / 2 + 7, nLeft ? 'S' : 'N', { size: 20, bold: true, color: '#fff' });
  }
  function needle(cx, cy, deg, r) { var a = deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a), l = r || 12, w = 4; return Ci(cx, cy, l + 3, { fill: '#fff', stroke: '#64748b', sw: 1.5 }) + P('M' + n2(cx + l * c) + ',' + n2(cy + l * s) + ' L' + n2(cx - w * s) + ',' + n2(cy + w * c) + ' L' + n2(cx + w * s) + ',' + n2(cy - w * c) + ' Z', { fill: '#ef4444' }) + P('M' + n2(cx - l * c) + ',' + n2(cy - l * s) + ' L' + n2(cx - w * s) + ',' + n2(cy + w * c) + ' L' + n2(cx + w * s) + ',' + n2(cy - w * c) + ' Z', { fill: '#3b82f6' }); }
  function magnetField(o) {
    o = o || {}; var b = '', cx = 300, cy = 150, x1 = 200, x2 = 400, fil = o.filings, ks = fil ? [0.6, 1, 1.5, 2, 2.6, 3.2] : [1, 2, 3], col = fil ? '#57534e' : C.purple;
    ks.forEach(function (k) {
      [1, -1].forEach(function (sg) {
        var yc = cy - sg * 10, cyc = cy - sg * (10 + 45 * k), apex = 0.25 * yc + 0.75 * cyc;
        b += P('M' + x2 + ',' + yc + ' C' + (x2 + 30 + 32 * k) + ',' + cyc + ' ' + (x1 - 30 - 32 * k) + ',' + cyc + ' ' + x1 + ',' + yc, { stroke: col, sw: fil ? 2.2 : 1.8, dash: fil ? true : false });
        if (!fil) b += P('M' + (cx - 7) + ',' + apex + ' L' + (cx + 5) + ',' + (apex - 6) + ' L' + (cx + 5) + ',' + (apex + 6) + ' Z', { fill: col });
      });
    });
    b += L(x2, cy, 580, cy, { color: col, width: fil ? 2.2 : 1.8, dash: fil ? '6 4' : false }) + L(20, cy, x1, cy, { color: col, width: fil ? 2.2 : 1.8, dash: fil ? '6 4' : false });
    if (!fil) b += P('M540,' + (cy - 6) + ' L552,' + cy + ' L540,' + (cy + 6) + ' Z', { fill: col }) + P('M60,' + (cy - 6) + ' L72,' + cy + ' L60,' + (cy + 6) + ' Z', { fill: col });
    b += barMag(x1, cy - 22, x2 - x1, 44, false);
    if (o.compass) b += needle(300, 0.25 * (cy - 10) + 0.75 * (cy - 100), 180) + needle(490, cy - 30, 0) + needle(110, cy - 30, 0) + needle(300, 300 - (0.25 * (cy - 10) + 0.75 * (cy - 100)), 180);
    return wrap(600, 300, b, fil ? 'Từ phổ của nam châm thẳng (mạt sắt)' : 'Đường sức từ của nam châm thẳng');
  }
  function magnetPoles() {
    var id = 'mp' + (++uid), b = A(id, C.ink, 7);
    b += barMag(30, 26, 150, 36, false) + barMag(260, 26, 150, 36, false) + arw(196, 44, 222, 44, id, C.ink, 2.5) + arw(244, 44, 218, 44, id, C.ink, 2.5);
    b += T(500, 50, 'N – S: hút nhau', { size: 15, bold: true, color: C.green });
    b += barMag(30, 106, 150, 36, false) + barMag(260, 106, 150, 36, true) + arw(210, 124, 186, 124, id, C.ink, 2.5) + arw(230, 124, 254, 124, id, C.ink, 2.5);
    b += T(500, 130, 'N – N: đẩy nhau', { size: 15, bold: true, color: C.red });
    return wrap(620, 164, b, 'Tương tác giữa hai nam châm');
  }
  function compassRose() {
    var cx = 120, cy = 112, b = Ci(cx, cy, 86, { fill: '#f8fafc', stroke: '#475569', sw: 4 }) + Ci(cx, cy, 70, { stroke: '#cbd5e1', sw: 1 });
    for (var i = 0; i < 36; i++) { var a = i * 10 * Math.PI / 180, l = i % 9 === 0 ? 12 : 6; b += L(cx + 70 * Math.cos(a), cy + 70 * Math.sin(a), cx + (70 - l) * Math.cos(a), cy + (70 - l) * Math.sin(a), { color: '#64748b', width: 1.3 }); }
    b += T(cx, cy - 44, 'B', { size: 16, bold: true, color: C.red }) + T(cx, cy + 56, 'N', { size: 16, bold: true }) + T(cx + 50, cy + 6, 'Đ', { size: 16, bold: true }) + T(cx - 50, cy + 6, 'T', { size: 16, bold: true });
    b += P('M' + cx + ',' + (cy - 36) + ' L' + (cx - 8) + ',' + cy + ' L' + (cx + 8) + ',' + cy + ' Z', { fill: '#ef4444' }) + P('M' + cx + ',' + (cy + 36) + ' L' + (cx - 8) + ',' + cy + ' L' + (cx + 8) + ',' + cy + ' Z', { fill: '#3b82f6' }) + Ci(cx, cy, 4, { fill: C.ink });
    return labelled({ w: 400, h: 226, body: b, size: 13, labels: [[cx + 2, cy - 30, 260, 40, 'Cực Bắc của kim\n(chỉ hướng bắc)'], [cx + 2, cy + 30, 260, 160, 'Cực Nam của kim'], [cx + 80, cy + 30, 260, 208, 'Mặt chia độ']], label: 'La bàn' });
  }
  function earthField() {
    var b = '', cx = 300, cy = 160, t = 11 * Math.PI / 180, dx = 50 * Math.sin(t), dy = 50 * Math.cos(t), tx = cx + dx, ty = cy - dy, bx = cx - dx, by = cy + dy;
    [1, 2].forEach(function (k) {
      [-1, 1].forEach(function (sg) {
        b += P('M' + n2(bx) + ',' + n2(by) + ' C' + (cx + sg * (120 + 70 * k)) + ',' + (by + 60 + 40 * k) + ' ' + (cx + sg * (120 + 70 * k)) + ',' + (ty - 60 - 40 * k) + ' ' + n2(tx) + ',' + n2(ty), { stroke: C.purple, sw: 1.6 });
        var mxp = cx + sg * 0.75 * (120 + 70 * k), myp = (by + ty) / 2 + 12;
        b += P('M' + mxp + ',' + (myp - 8) + ' L' + (mxp - 6) + ',' + (myp + 4) + ' L' + (mxp + 6) + ',' + (myp + 4) + ' Z', { fill: C.purple });
      });
    });
    b += Ci(cx, cy, 90, { fill: '#bfdbfe', stroke: '#1d4ed8', sw: 2 }) + P('M250,120 Q280,100 300,130 Q320,150 290,170 Q260,180 250,150 Z M320,190 Q350,180 360,200 Q340,230 320,215 Z', { fill: '#86efac', op: 0.9 });
    b += L(cx, 44, cx, 276, { color: '#334155', width: 1.5, dash: '6 5' });
    b += '<g transform="rotate(11 ' + cx + ' ' + cy + ')">' + R(cx - 11, cy - 50, 22, 50, { fill: '#3b82f6' }) + R(cx - 11, cy, 22, 50, { fill: '#ef4444' }) + T(cx, cy - 20, 'S', { size: 15, bold: true, color: '#fff' }) + T(cx, cy + 32, 'N', { size: 15, bold: true, color: '#fff' }) + '</g>';
    b += T(292, 38, 'Bắc địa lí', { anchor: 'end', size: 13, bold: true }) + T(326, 62, 'Bắc địa từ', { anchor: 'start', size: 13, bold: true, color: C.purple }) + Ci(cx + 90 * Math.sin(t), cy - 90 * Math.cos(t), 4, { fill: C.purple });
    b += T(292, 294, 'Nam địa lí', { anchor: 'end', size: 13, bold: true });
    return wrap(600, 310, b, 'Từ trường Trái Đất');
  }
  /* ---------- Nam châm điện ---------- */
  function electromagnet() {
    var b = '', i;
    b += L(190, 100, 450, 100, { color: '#9ca3af', width: 10 }) + R(180, 86, 10, 28, { fill: '#6b7280' }) + P('M450,95 L468,100 L450,105 Z', { fill: '#9ca3af' });
    for (i = 0; i < 14; i++) b += E(230 + i * 12, 100, 6, 16, { stroke: '#c2410c', sw: 3 });
    b += P('M226,114 C226,160 230,200 250,210 L300,210', { stroke: '#c2410c', sw: 2.5 }) + P('M390,114 C392,160 400,200 420,210 L380,210', { stroke: '#c2410c', sw: 2.5 });
    b += R(300, 196, 60, 28, { rx: 4, fill: '#1f2937' }) + R(360, 204, 6, 12, { fill: '#1f2937' }) + T(330, 215, '1,5 V', { size: 11, bold: true, color: '#fff' });
    b += Ci(380, 210, 3.5, { fill: C.ink }) + L(380, 210, 404, 196, { width: 2.5 }) + Ci(420, 210, 3.5, { fill: C.ink });
    b += P('M468,104 l0,20 q0,6 6,6 l4,0 q6,0 6,-6 l0,-14 q0,-4 -4,-4 l-2,0 q-4,0 -4,4 l0,12', { stroke: '#64748b', sw: 2 }) + P('M474,132 l0,20 q0,6 6,6 l4,0 q6,0 6,-6 l0,-14 q0,-4 -4,-4 l-2,0 q-4,0 -4,4 l0,12', { stroke: '#64748b', sw: 2 });
    return labelled({ w: 600, h: 246, body: b, size: 13, labels: [[200, 100, 120, 44, 'Lõi sắt\n(đinh sắt)'], [300, 86, 300, 30, 'Cuộn dây dẫn quấn quanh lõi'], [312, 222, 180, 236, 'Pin'], [404, 198, 470, 236, 'Công tắc'], [484, 150, 520, 84, 'Ghim giấy\nbị hút']], label: 'Nam châm điện đơn giản' });
  }

  /* ---------- Sinh học 7: quang hợp, hô hấp, trao đổi chất ---------- */
  function sunIcon(x, y, r) { var s = ''; for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; s += L(x + (r + 4) * Math.cos(a), y + (r + 4) * Math.sin(a), x + (r + 13) * Math.cos(a), y + (r + 13) * Math.sin(a), { color: '#f59e0b', width: 2.5 }); } return s + Ci(x, y, r, { fill: '#fde047', stroke: '#f59e0b' }); }
  function leafPath(x1, y, x2, h) { var m = (x1 + x2) / 2; return 'M' + x1 + ',' + y + ' C' + (x1 + (x2 - x1) * 0.2) + ',' + (y - h) + ' ' + (x2 - (x2 - x1) * 0.25) + ',' + (y - h) + ' ' + x2 + ',' + y + ' C' + (x2 - (x2 - x1) * 0.25) + ',' + (y + h) + ' ' + (x1 + (x2 - x1) * 0.2) + ',' + (y + h) + ' ' + x1 + ',' + y + ' Z'; }
  function photosynthesisScheme() {
    var id = 'ps' + (++uid), ib = id + 'b', io = id + 'o', b = A(id, '#475569', 7) + A(ib, C.blue, 7) + A(io, C.orange, 7);
    b += L(150, 176, 150, 296, { color: '#65a30d', width: 8 }) + L(150, 180, 196, 152, { color: '#65a30d', width: 5 });
    b += P(leafPath(196, 150, 456, 70), { fill: '#86efac', stroke: '#15803d', sw: 2.5 }) + L(196, 150, 456, 150, { color: '#15803d', width: 2 });
    for (var i = 0; i < 4; i++) b += L(250 + i * 50, 150, 280 + i * 50, 112, { color: '#15803d', width: 1.3 }) + L(250 + i * 50, 150, 280 + i * 50, 188, { color: '#15803d', width: 1.3 });
    b += sunIcon(62, 58, 24) + arw(96, 76, 228, 124, id, '#f59e0b', 3) + arw(100, 96, 212, 140, id, '#f59e0b', 3) + T(118, 128, 'Ánh sáng', { size: 13, bold: true, color: '#b45309' });
    b += arw(520, 86, 454, 118, id, '#475569', 3) + T(630, 50, 'Carbon dioxide (CO₂)', { anchor: 'end', size: 13, bold: true }) + T(630, 66, 'từ không khí', { anchor: 'end', size: 12, color: C.muted });
    b += arw(452, 176, 560, 226, id, '#475569', 3) + T(630, 246, 'Oxygen (O₂) thải ra', { anchor: 'end', size: 13, bold: true });
    b += arw(134, 290, 134, 190, ib, C.blue, 3) + T(124, 250, 'Nước', { anchor: 'end', size: 13, bold: true, color: C.blue }) + T(124, 266, '(từ rễ)', { anchor: 'end', size: 12, color: C.blue });
    b += arw(310, 196, 310, 262, io, C.orange, 3) + T(320, 240, 'Glucose (chất hữu cơ)', { anchor: 'start', size: 13, bold: true, color: '#c2410c' }) + T(320, 256, 'nuôi cây, tích luỹ', { anchor: 'start', size: 12, color: '#c2410c' });
    b += R(246, 124, 168, 22, { rx: 5, fill: '#ecfdf5', op: 0.9 }) + T(330, 140, 'Lục lạp (chứa diệp lục)', { size: 13, bold: true, color: '#14532d' });
    b += R(40, 290, 580, 30, { rx: 6, fill: '#f0fdf4', stroke: '#86efac', sw: 1.5 }) + T(330, 310, 'Nước + Carbon dioxide  ──(ánh sáng, diệp lục)──▶  Glucose + Oxygen', { size: 14, bold: true });
    return wrap(640, 330, b, 'Sơ đồ quá trình quang hợp ở lá cây');
  }
  function respirationScheme() {
    var id = 'rp' + (++uid), b = A(id, '#475569', 7);
    b += E(300, 130, 150, 92, { fill: '#fce7f3', stroke: '#be185d', sw: 2.5 }) + E(300, 130, 80, 38, { fill: '#fed7aa', stroke: '#c2410c', sw: 2.5 });
    b += P('M236,130 L250,108 L262,152 L276,108 L290,152 L304,108 L318,152 L332,108 L346,152 L360,120', { stroke: '#c2410c', sw: 2 }) + T(300, 190, 'Ti thể', { size: 13, bold: true, color: '#9a3412' }) + T(300, 58, 'Tế bào', { size: 13, bold: true, color: '#9d174d' });
    b += arw(30, 100, 176, 108, id, '#475569', 3) + T(30, 90, 'Glucose', { anchor: 'start', size: 13, bold: true }) + arw(30, 170, 176, 154, id, '#475569', 3) + T(30, 190, 'Oxygen (O₂)', { anchor: 'start', size: 13, bold: true });
    b += arw(426, 100, 590, 86, id, '#475569', 3) + T(470, 66, 'Carbon dioxide (CO₂)', { anchor: 'start', size: 13, bold: true }) + arw(446, 130, 590, 130, id, '#475569', 3) + T(470, 122, 'Nước (H₂O)', { anchor: 'start', size: 13, bold: true });
    b += arw(426, 160, 590, 186, id, '#dc2626', 3) + T(470, 204, 'Năng lượng (ATP, nhiệt)', { anchor: 'start', size: 13, bold: true, color: C.red });
    b += R(30, 234, 620, 30, { rx: 6, fill: '#fff7ed', stroke: '#fdba74', sw: 1.5 }) + T(340, 254, 'Glucose + Oxygen  ──▶  Carbon dioxide + Nước + Năng lượng (ATP, nhiệt)', { size: 14, bold: true });
    return wrap(680, 272, b, 'Sơ đồ quá trình hô hấp tế bào');
  }
  function stomaCell(cx, cy, open) {
    var w = open ? 16 : 3, s = '';
    s += P('M' + cx + ',' + (cy - 48) + ' C' + (cx - 46) + ',' + (cy - 48) + ' ' + (cx - 46) + ',' + (cy + 48) + ' ' + cx + ',' + (cy + 48) + ' C' + (cx - w) + ',' + (cy + 20) + ' ' + (cx - w) + ',' + (cy - 20) + ' ' + cx + ',' + (cy - 48) + ' Z', { fill: '#bbf7d0', stroke: '#15803d', sw: 2 });
    s += P('M' + cx + ',' + (cy - 48) + ' C' + (cx + 46) + ',' + (cy - 48) + ' ' + (cx + 46) + ',' + (cy + 48) + ' ' + cx + ',' + (cy + 48) + ' C' + (cx + w) + ',' + (cy + 20) + ' ' + (cx + w) + ',' + (cy - 20) + ' ' + cx + ',' + (cy - 48) + ' Z', { fill: '#bbf7d0', stroke: '#15803d', sw: 2 });
    if (open) s += P('M' + cx + ',' + (cy - 44) + ' C' + (cx - 13) + ',' + (cy - 18) + ' ' + (cx - 13) + ',' + (cy + 18) + ' ' + cx + ',' + (cy + 44) + ' C' + (cx + 13) + ',' + (cy + 18) + ' ' + (cx + 13) + ',' + (cy - 18) + ' ' + cx + ',' + (cy - 44) + ' Z', { fill: '#1f2937' });
    [[-24, -18], [-26, 6], [-20, 26], [24, -16], [26, 8], [20, 28]].forEach(function (p) { s += Ci(cx + p[0], cy + p[1], 4, { fill: '#16a34a' }); });
    return R(cx - 80, cy - 70, 160, 140, { rx: 10, fill: '#f7fee7', stroke: '#d9f99d', sw: 1.5 }) + s;
  }
  function stomataPair() {
    var b = stomaCell(120, 96, true) + stomaCell(480, 96, false);
    b += T(120, 190, 'Khí khổng mở', { size: 14, bold: true }) + T(480, 190, 'Khí khổng đóng', { size: 14, bold: true });
    b += callouts([[150, 70, 250, 40, 'Tế bào hạt đậu'], [122, 110, 250, 130, 'Khe khí khổng']], { size: 13 });
    return wrap(600, 204, b, 'Khí khổng mở và đóng');
  }
  function plantBody(cx, top, ground) {
    var s = L(cx, ground, cx, top, { color: '#65a30d', width: 8 });
    s += P(leafPath(cx + 4, top + 70, cx + 120, 34), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(cx - 4, top + 120, cx - 120, 34), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(cx + 3, top + 10, cx + 60, 14), { fill: '#bbf7d0', stroke: '#15803d' });
    s += R(cx - 180, ground, 360, 70, { fill: '#d6a86c' });
    s += P('M' + cx + ',' + ground + ' l-10,30 l-26,20 M' + cx + ',' + ground + ' l6,34 l-6,28 M' + cx + ',' + ground + ' l24,22 l30,14 M' + (cx - 10) + ',' + (ground + 30) + ' l18,18', { stroke: '#92400e', sw: 3 });
    return s;
  }
  function plantTransport() {
    var id = 'pt' + (++uid), ib = id + 'b', io = id + 'o', b = A(ib, C.blue, 7) + A(io, C.orange, 7), cx = 290, top = 60, gr = 260;
    b += plantBody(cx, top, gr);
    b += arw(cx + 16, 250, cx + 16, 96, ib, C.blue, 3) + arw(cx - 16, 110, cx - 16, 246, io, C.orange, 3);
    for (var i = 0; i < 3; i++) b += P('M' + (360 + i * 26) + ',' + 104 + ' q-8,-10 0,-20 q8,-10 0,-20', { stroke: '#38bdf8', sw: 2.2 });
    b += T(420, 40, 'Hơi nước thoát ra qua khí khổng', { size: 13, bold: true, color: '#0369a1' });
    b += T(cx + 30, 196, 'Nước, muối khoáng', { anchor: 'start', size: 13, bold: true, color: C.blue }) + T(cx + 30, 212, 'đi lên theo mạch gỗ', { anchor: 'start', size: 12, color: C.blue });
    b += T(cx - 30, 234, 'Chất hữu cơ đi', { anchor: 'end', size: 13, bold: true, color: '#c2410c' }) + T(cx - 30, 250, 'theo mạch rây', { anchor: 'end', size: 12, color: '#c2410c' });
    b += T(cx, 350, 'Lông hút ở rễ hấp thụ nước và muối khoáng từ đất', { size: 13, bold: true, color: '#78350f' });
    return wrap(600, 362, b, 'Sự vận chuyển nước, muối khoáng và chất hữu cơ trong cây');
  }
  function starchTest() {
    var b = '', lf = function (x, fill, strip, stripFill) {
      var s = P(leafPath(x + 20, 80, x + 180, 52), { fill: fill, stroke: '#15803d', sw: 2 }) + L(x + 4, 80, x + 20, 80, { color: '#15803d', width: 3 });
      if (strip) s += R(x + 86, 30, 30, 100, { fill: stripFill, op: stripFill === '#111827' ? 1 : 0.95 });
      return s;
    };
    b += lf(10, '#4ade80', true, '#111827') + lf(222, '#fef9c3', false) + lf(434, '#4c1d95', true, '#fef3c7');
    b += T(110, 160, 'Bịt một phần lá bằng', { size: 12, bold: true }) + T(110, 176, 'băng giấy đen, để ngoài sáng', { size: 12, bold: true });
    b += T(322, 160, 'Ngắt lá, đun cách thuỷ', { size: 12, bold: true }) + T(322, 176, 'trong cồn để tẩy diệp lục', { size: 12, bold: true });
    b += T(534, 160, 'Nhỏ iodine: phần được chiếu', { size: 12, bold: true }) + T(534, 176, 'sáng có màu xanh tím', { size: 12, bold: true });
    b += T(110, 18, '(1)', { size: 13, bold: true, color: C.muted }) + T(322, 18, '(2)', { size: 13, bold: true, color: C.muted }) + T(534, 18, '(3)', { size: 13, bold: true, color: C.muted });
    return wrap(650, 188, b, 'Thí nghiệm chứng minh lá cây tạo ra tinh bột khi được chiếu sáng');
  }
  function elodeaExp() {
    var b = '', i;
    b += sunIcon(60, 70, 22) + T(60, 124, 'Ánh sáng', { size: 13, bold: true, color: '#b45309' });
    b += R(150, 110, 240, 150, { fill: '#e0f2fe', stroke: '#64748b', sw: 2.5 }) + L(150, 110, 150, 260, { width: 3, color: '#64748b' });
    b += P('M200,250 L240,196 L300,196 L340,250 Z', { fill: 'none', stroke: '#475569', sw: 2.5 }) + R(258, 70, 24, 128, { fill: '#f1f5f9', stroke: '#475569', sw: 2.5, rx: 4 }) + R(261, 72, 18, 40, { fill: '#fff' });
    for (i = 0; i < 5; i++) b += P('M' + (230 + i * 20) + ',250 q-8,-20 4,-40 q10,-12 0,-24', { stroke: '#15803d', sw: 3 });
    [[270, 150], [266, 132], [272, 176], [268, 120]].forEach(function (p) { b += Ci(p[0], p[1], 3, { stroke: '#0284c7', sw: 1.5, fill: '#fff' }); });
    return labelled({ w: 560, h: 280, body: b, size: 13, labels: [[270, 90, 400, 60, 'Khí oxygen tích tụ\n(que đóm bùng cháy)'], [300, 230, 420, 200, 'Cành rong đuôi chó'], [336, 200, 420, 150, 'Phễu thuỷ tinh'], [380, 130, 420, 110, 'Nước']], label: 'Thí nghiệm chứng minh quang hợp giải phóng oxygen' });
  }
  function respExperiment() {
    var b = '', flask = function (x, seeds, turbid, label) {
      var s = P('M' + (x + 40) + ',40 L' + (x + 40) + ',90 L' + x + ',180 L' + (x + 120) + ',180 L' + (x + 80) + ',90 L' + (x + 80) + ',40', { fill: '#f8fafc', stroke: '#475569', sw: 2.5 }) + R(x + 36, 30, 48, 16, { rx: 3, fill: '#92400e' });
      for (var i = 0; i < 12; i++) s += E(x + 20 + (i % 6) * 16, 170 - Math.floor(i / 6) * 12, 7, 5, { fill: seeds, stroke: '#78350f', sw: 1 });
      if (seeds === '#fde68a') for (i = 0; i < 6; i++) s += P('M' + (x + 22 + i * 16) + ',' + 160 + ' q4,-10 0,-18', { stroke: '#65a30d', sw: 2 });
      s += P('M' + (x + 70) + ',30 L' + (x + 70) + ',12 L' + (x + 170) + ',12 L' + (x + 170) + ',150', { stroke: '#64748b', sw: 3 });
      s += R(x + 135, 100, 70, 80, { fill: turbid ? '#e5e7eb' : '#e0f2fe', stroke: '#475569', sw: 2 });
      if (turbid) for (i = 0; i < 14; i++) s += Ci(x + 143 + (i * 37) % 56, 120 + (i * 23) % 52, 2.2, { fill: '#9ca3af' });
      return s + T(x + 100, 206, label, { size: 13, bold: true }) + T(x + 210, 150, turbid ? 'vẩn đục' : 'vẫn trong', { anchor: 'start', size: 12, bold: true, color: turbid ? C.red : C.blue });
    };
    b += flask(20, '#fde68a', true, 'Hạt đang nảy mầm') + flask(330, '#d6a86c', false, 'Hạt khô (hoặc đã luộc chín)');
    b += T(310, 234, 'Cốc chứa nước vôi trong – carbon dioxide làm nước vôi trong vẩn đục', { size: 12, color: C.muted });
    return wrap(620, 244, b, 'Thí nghiệm chứng minh hạt nảy mầm hô hấp thải ra carbon dioxide');
  }
  function stemDyeExp() {
    var b = '', i;
    b += R(40, 120, 90, 100, { fill: '#fecaca', stroke: '#475569', sw: 2.5 }) + L(40, 130, 130, 130, { color: '#ef4444', width: 1 }) + L(84, 200, 90, 40, { color: '#65a30d', width: 7 });
    b += Ci(90, 36, 16, { fill: '#fda4af', stroke: '#be123c' }) + T(85, 244, 'Cành hoa trắng cắm', { size: 12, bold: true }) + T(85, 260, 'vào nước màu đỏ', { size: 12, bold: true });
    b += Ci(300, 120, 70, { fill: '#ecfccb', stroke: '#65a30d', sw: 3 });
    for (i = 0; i < 10; i++) { var a = i * Math.PI / 5; b += Ci(300 + 50 * Math.cos(a), 120 + 50 * Math.sin(a), 7, { fill: '#dc2626' }); }
    b += T(300, 216, 'Cắt ngang thân: các chấm đỏ', { size: 12, bold: true }) + T(300, 232, 'là mạch gỗ đã dẫn nước màu', { size: 12, bold: true });
    b += R(470, 170, 80, 50, { fill: '#b45309' }) + L(510, 170, 510, 90, { color: '#65a30d', width: 5 }) + P(leafPath(510, 110, 560, 14), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(510, 130, 460, 14), { fill: '#86efac', stroke: '#15803d' });
    b += P('M456,176 C440,60 580,60 564,176', { stroke: '#94a3b8', sw: 2, dash: true });
    [[480, 80], [540, 76], [470, 110], [552, 106], [510, 64]].forEach(function (p) { b += Ci(p[0], p[1], 3, { fill: '#7dd3fc', stroke: '#0284c7', sw: 1 }); });
    b += T(510, 244, 'Trùm túi ni lông: hơi nước', { size: 12, bold: true }) + T(510, 260, 'đọng thành giọt trong túi', { size: 12, bold: true });
    return wrap(620, 270, b, 'Thí nghiệm thân vận chuyển nước và lá thoát hơi nước');
  }
  function circulation() {
    var id = 'cr' + (++uid), ir = id + 'r', ib = id + 'b', b = A(ir, '#dc2626', 7) + A(ib, '#2563eb', 7);
    var box = function (x, y, w, h, t, f, s) { return R(x, y, w, h, { rx: 10, fill: f, stroke: s, sw: 2 }) + T(x + w / 2, y + h / 2 + 5, t, { size: 14, bold: true }); };
    b += box(250, 14, 140, 42, 'Phổi', '#e0f2fe', '#0284c7') + box(270, 116, 100, 42, 'Tim', '#fee2e2', '#dc2626') + box(220, 220, 200, 42, 'Các cơ quan, tế bào', '#fef3c7', '#d97706');
    b += P('M270,130 L200,130 L200,35 L244,35', { stroke: '#2563eb', sw: 3 }).replace('/>', ' marker-end="url(#' + ib + ')"/>') + P('M390,35 L440,35 L440,130 L376,130', { stroke: '#dc2626', sw: 3 }).replace('/>', ' marker-end="url(#' + ir + ')"/>');
    b += P('M370,148 L470,148 L470,241 L426,241', { stroke: '#dc2626', sw: 3 }).replace('/>', ' marker-end="url(#' + ir + ')"/>') + P('M220,241 L170,241 L170,148 L264,148', { stroke: '#2563eb', sw: 3 }).replace('/>', ' marker-end="url(#' + ib + ')"/>');
    b += T(190, 82, 'Máu nghèo O₂', { anchor: 'end', size: 12, bold: true, color: '#2563eb' }) + T(450, 82, 'Máu giàu O₂', { anchor: 'start', size: 12, bold: true, color: '#dc2626' });
    b += T(480, 200, 'Máu giàu O₂ và', { anchor: 'start', size: 12, bold: true, color: '#dc2626' }) + T(480, 216, 'chất dinh dưỡng', { anchor: 'start', size: 12, bold: true, color: '#dc2626' });
    b += T(160, 200, 'Máu nhiều CO₂', { anchor: 'end', size: 12, bold: true, color: '#2563eb' }) + T(160, 216, 'và chất thải', { anchor: 'end', size: 12, bold: true, color: '#2563eb' });
    return wrap(640, 272, b, 'Sơ đồ vận chuyển các chất trong cơ thể người');
  }
  function alveolus() {
    var id = 'al' + (++uid), b = A(id, '#475569', 7);
    b += Ci(200, 110, 80, { fill: '#e0f2fe', stroke: '#0284c7', sw: 3 }) + T(200, 90, 'Phế nang', { size: 14, bold: true, color: '#075985' }) + T(200, 108, '(chứa không khí)', { size: 12, color: '#075985' });
    b += P('M90,218 C150,178 250,178 310,218 L310,236 C250,196 150,196 90,236 Z', { fill: '#fca5a5', stroke: '#dc2626', sw: 2 }) + T(200, 256, 'Mao mạch máu', { size: 13, bold: true, color: '#b91c1c' });
    b += arw(170, 150, 150, 200, id, C.blue, 3) + T(146, 150, 'O₂', { anchor: 'end', size: 15, bold: true, color: C.blue }) + arw(240, 200, 256, 150, id, '#475569', 3) + T(264, 160, 'CO₂', { anchor: 'start', size: 15, bold: true });
    b += T(470, 70, 'O₂ khuếch tán từ phế nang', { size: 13, bold: true, color: C.blue }) + T(470, 88, 'vào máu', { size: 13, bold: true, color: C.blue });
    b += T(470, 140, 'CO₂ khuếch tán từ máu', { size: 13, bold: true }) + T(470, 158, 'ra phế nang', { size: 13, bold: true });
    return wrap(620, 268, b, 'Trao đổi khí ở phế nang');
  }

  /* ---------- Cảm ứng, sinh trưởng ---------- tropism('light' | 'gravity' | 'water' | 'touch' | 'tendril') */
  function pot(x, y) { return P('M' + (x - 34) + ',' + y + ' L' + (x + 34) + ',' + y + ' L' + (x + 26) + ',' + (y + 40) + ' L' + (x - 26) + ',' + (y + 40) + ' Z', { fill: '#c2410c', stroke: '#7c2d12' }); }
  function tropism(kind) {
    var b = '', id = 'tr' + (++uid);
    if (kind === 'light') {
      b += sunIcon(186, 36, 16) + pot(70, 150) + P('M70,150 C70,110 90,80 140,62', { stroke: '#65a30d', sw: 5 });
      b += P(leafPath(96, 98, 140, 12), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(84, 120, 44, 12), { fill: '#86efac', stroke: '#15803d' });
      return wrap(220, 196, b, 'Tính hướng sáng');
    }
    if (kind === 'gravity') {
      b += R(10, 96, 200, 90, { fill: '#e7c9a0' }) + E(110, 96, 14, 9, { fill: '#fde68a', stroke: '#92400e' });
      b += P('M120,94 C150,92 164,70 168,30', { stroke: '#65a30d', sw: 4 }) + P(leafPath(168, 30, 190, 7), { fill: '#86efac', stroke: '#15803d' });
      b += P('M100,100 C70,104 60,130 62,178', { stroke: '#a16207', sw: 3.5 }) + P('M68,140 l-14,10 M64,160 l12,8', { stroke: '#a16207', sw: 2 });
      b += T(150, 60, 'Thân', { anchor: 'end', size: 12, bold: true }) + T(76, 130, 'Rễ', { anchor: 'start', size: 12, bold: true });
      return wrap(220, 196, b, 'Tính hướng trọng lực');
    }
    if (kind === 'water') {
      b += R(10, 60, 200, 126, { fill: '#e7c9a0' }) + L(60, 60, 60, 16, { color: '#65a30d', width: 4 }) + P(leafPath(60, 30, 100, 9), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(60, 40, 22, 9), { fill: '#86efac', stroke: '#15803d' });
      b += P('M60,60 C66,100 120,120 150,150 M60,60 C80,90 110,96 146,116 M60,60 C56,96 50,120 44,140', { stroke: '#a16207', sw: 3 });
      b += R(150, 120, 50, 50, { rx: 6, fill: '#7dd3fc', stroke: '#0284c7' }) + T(175, 150, 'Nước', { size: 12, bold: true, color: '#075985' });
      return wrap(220, 196, b, 'Tính hướng nước');
    }
    if (kind === 'touch') {
      var leaflets = function (x, y, open) { var s = L(x, y, x + 150, y, { color: '#65a30d', width: 3 }); for (var i = 0; i < 7; i++) { var xx = x + 12 + i * 20; s += open ? E(xx, y - 11, 5, 11, { fill: '#86efac', stroke: '#15803d', sw: 1.5 }) + E(xx, y + 11, 5, 11, { fill: '#86efac', stroke: '#15803d', sw: 1.5 }) : E(xx + 4, y - 4, 9, 3, { fill: '#86efac', stroke: '#15803d', sw: 1.5, rot: -20 }); } return s; };
      b += leaflets(30, 50, true) + T(105, 90, 'Bình thường: lá xoè', { size: 12, bold: true }) + leaflets(30, 130, false) + T(105, 164, 'Khi chạm vào: lá cụp', { size: 12, bold: true });
      b += P('M190,118 l6,-12 l-2,10 l8,-6', { stroke: C.red, sw: 2 });
      return wrap(220, 180, b, 'Cây trinh nữ cụp lá khi bị chạm');
    }
    b += R(98, 20, 8, 170, { rx: 3, fill: '#a16207' }) + P('M60,190 C60,150 80,120 70,90', { stroke: '#65a30d', sw: 4 }) + P('M70,110 C90,110 110,104 102,96 C94,88 90,100 104,106 C118,112 116,86 100,82', { stroke: '#65a30d', sw: 2.5 });
    b += P(leafPath(70, 90, 40, 12), { fill: '#86efac', stroke: '#15803d' }) + P('M70,70 C60,50 70,40 90,40 C110,40 116,56 102,62 C92,66 92,52 104,50', { stroke: '#65a30d', sw: 2.5 }) + T(150, 100, 'Tua cuốn', { anchor: 'start', size: 12, bold: true });
    return wrap(220, 196, b, 'Tua cuốn quấn quanh giá thể');
  }
  function meristem() {
    var b = '', cx = 190;
    b += L(cx, 250, cx, 50, { color: '#65a30d', width: 10 }) + P(leafPath(cx + 4, 130, cx + 110, 26), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(cx - 4, 180, cx - 100, 26), { fill: '#86efac', stroke: '#15803d' });
    b += R(40, 250, 300, 60, { fill: '#e7c9a0' }) + P('M' + cx + ',250 L' + (cx - 6) + ',300 M' + cx + ',262 L' + (cx - 40) + ',292 M' + cx + ',262 L' + (cx + 40) + ',290', { stroke: '#a16207', sw: 4 });
    b += Ci(cx, 48, 9, { fill: '#ef4444' }) + Ci(cx - 6, 300, 7, { fill: '#ef4444' }) + Ci(cx + 8, 126, 6, { fill: '#f97316' });
    b += Ci(470, 150, 60, { fill: '#ecfccb', stroke: '#65a30d', sw: 3 }) + Ci(470, 150, 42, { stroke: '#ef4444', sw: 5 }) + Ci(470, 150, 30, { fill: '#fef3c7', stroke: '#d97706', sw: 1.5 }) + L(cx + 6, 200, 410, 160, { color: '#94a3b8', width: 1.2, dash: '4 4' });
    b += T(470, 232, 'Lát cắt ngang thân', { size: 12, bold: true, color: C.muted });
    return labelled({ w: 600, h: 320, body: b, size: 13, labels: [[cx + 8, 46, 300, 26, 'Mô phân sinh đỉnh thân'], [cx - 12, 300, 110, 244, 'Mô phân sinh\nđỉnh rễ'], [cx + 12, 124, 300, 96, 'Chồi nách'], [512, 150, 530, 70, 'Mô phân\nsinh bên']], label: 'Vị trí mô phân sinh ở thực vật' });
  }
  /* ---------- Vòng đời / chu trình ---------- lifeCycle({ stages: ['Trứng', 'Nòng nọc', …], title: 'Ếch', colors }) */
  function lifeCycle(o) {
    var n = o.stages.length, W = o.w || 600, H = o.h || 300, cx = W / 2, cy = H / 2, rx = o.rx || 200, ry = o.ry || 100, id = 'lc' + (++uid), b = A(id, C.muted, 7), bw = o.bw || 150, pts = [];
    for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + 2 * Math.PI * i / n; pts.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a), a]); }
    pts.forEach(function (p, i) {
      var a1 = p[2] + 0.42, a2 = pts[(i + 1) % n][2] - 0.42 + (i === n - 1 ? 2 * Math.PI : 0), seg = [];
      for (var t = 0; t <= 12; t++) { var a = a1 + (a2 - a1) * t / 12; seg.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)]); }
      b += P(polyPath(seg), { stroke: C.muted, sw: 2.2 }).replace('/>', ' marker-end="url(#' + id + ')"/>');
    });
    pts.forEach(function (p, i) {
      var lines = String(o.stages[i]).split('\n'), h = lines.length * 17 + 14, f = [['#dbeafe', '#2563eb'], ['#dcfce7', '#16a34a'], ['#ffedd5', '#ea580c'], ['#ede9fe', '#7c3aed'], ['#fce7f3', '#db2777'], ['#fef9c3', '#ca8a04']][i % 6];
      b += R(p[0] - bw / 2, p[1] - h / 2, bw, h, { rx: 10, fill: f[0], stroke: f[1], sw: 2 }) + T(p[0], p[1] - h / 2 + 22, o.stages[i], { size: 14, bold: true });
    });
    if (o.title) b += T(cx, cy + 5, o.title, { size: 15, bold: true, color: C.muted });
    return wrap(W, H, b, o.label || ('Vòng đời ' + (o.title || '')));
  }
  /* ---------- Cấu tạo hoa ---------- flowerParts({ pollen: true }) */
  function flowerParts(o) {
    o = o || {}; var b = '', cx = 300;
    b += L(cx, 330, cx, 262, { color: '#65a30d', width: 8 });
    b += P('M' + (cx - 20) + ',262 Q' + (cx - 70) + ',258 ' + (cx - 92) + ',232 Q' + (cx - 50) + ',236 ' + (cx - 14) + ',252 Z', { fill: '#4ade80', stroke: '#15803d' }) + P('M' + (cx + 20) + ',262 Q' + (cx + 70) + ',258 ' + (cx + 92) + ',232 Q' + (cx + 50) + ',236 ' + (cx + 14) + ',252 Z', { fill: '#4ade80', stroke: '#15803d' });
    b += P('M' + (cx - 24) + ',250 C' + (cx - 120) + ',230 ' + (cx - 150) + ',120 ' + (cx - 120) + ',70 C' + (cx - 80) + ',120 ' + (cx - 50) + ',190 ' + (cx - 20) + ',236 Z', { fill: '#fbcfe8', stroke: '#db2777', sw: 2 });
    b += P('M' + (cx + 24) + ',250 C' + (cx + 120) + ',230 ' + (cx + 150) + ',120 ' + (cx + 120) + ',70 C' + (cx + 80) + ',120 ' + (cx + 50) + ',190 ' + (cx + 20) + ',236 Z', { fill: '#fbcfe8', stroke: '#db2777', sw: 2 });
    b += E(cx, 258, 34, 12, { fill: '#a3e635', stroke: '#4d7c0f' });
    b += P('M' + (cx - 24) + ',250 C' + (cx - 40) + ',200 ' + (cx - 60) + ',170 ' + (cx - 64) + ',140', { stroke: '#a16207', sw: 2.5 }) + P('M' + (cx + 24) + ',250 C' + (cx + 40) + ',200 ' + (cx + 60) + ',170 ' + (cx + 64) + ',140', { stroke: '#a16207', sw: 2.5 });
    b += E(cx - 66, 128, 9, 16, { fill: '#facc15', stroke: '#a16207' }) + E(cx + 66, 128, 9, 16, { fill: '#facc15', stroke: '#a16207' });
    b += E(cx, 222, 26, 26, { fill: '#bbf7d0', stroke: '#15803d', sw: 2 }) + P('M' + (cx - 6) + ',198 L' + (cx - 5) + ',112 L' + (cx + 5) + ',112 L' + (cx + 6) + ',198 Z', { fill: '#bbf7d0', stroke: '#15803d', sw: 2 }) + E(cx, 106, 16, 8, { fill: '#86efac', stroke: '#15803d', sw: 2 });
    [[-10, 214], [10, 214], [0, 232]].forEach(function (p) { b += E(cx + p[0], p[1], 5, 7, { fill: '#fef3c7', stroke: '#a16207', sw: 1.5 }); });
    var lb = [[cx - 12, 104, 110, 70, 'Đầu nhuỵ'], [cx - 5, 160, 110, 150, 'Vòi nhuỵ'], [cx - 20, 226, 110, 214, 'Bầu nhuỵ'], [cx - 66, 120, 110, 110, 'Bao phấn'], [cx - 50, 180, 110, 184, 'Chỉ nhị'],
      [cx + 115, 110, 470, 60, 'Cánh hoa'], [cx + 80, 240, 470, 226, 'Đài hoa'], [cx + 30, 262, 470, 262, 'Đế hoa'], [cx + 4, 310, 470, 306, 'Cuống hoa'], [cx + 10, 214, 470, 170, 'Noãn']];
    if (o.pollen) {
      b += Ci(cx - 8, 98, 4, { fill: '#facc15', stroke: '#a16207' }) + Ci(cx + 8, 99, 4, { fill: '#facc15', stroke: '#a16207' }) + P('M' + (cx + 8) + ',103 C' + (cx + 2) + ',130 ' + (cx + 4) + ',170 ' + (cx + 1) + ',196 L' + (cx + 8) + ',210', { stroke: '#b45309', sw: 2, dash: true });
      lb = lb.filter(function (l) { return l[4] !== 'Cánh hoa'; }).concat([[cx + 8, 99, 470, 60, 'Hạt phấn'], [cx + 3, 150, 470, 110, 'Ống phấn']]);
    }
    return labelled({ w: 600, h: 340, body: b, labels: lb, size: 13, label: o.pollen ? 'Thụ phấn và thụ tinh ở hoa' : 'Cấu tạo của hoa' });
  }
  /* ---------- Nhân giống vô tính ở thực vật ---------- vegProp('giam' | 'chiet' | 'ghep') */
  function vegProp(kind) {
    var b = '';
    if (kind === 'giam') {
      b += R(10, 130, 200, 70, { fill: '#d6a86c' }) + L(80, 176, 130, 40, { color: '#65a30d', width: 7 }) + P(leafPath(122, 60, 168, 12), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(114, 80, 72, 12), { fill: '#86efac', stroke: '#15803d' });
      b += P('M80,176 l-16,14 M80,176 l2,20 M82,172 l18,14 M86,164 l-18,6', { stroke: '#a16207', sw: 2.2 });
      return wrap(220, 206, b, 'Giâm cành');
    }
    if (kind === 'chiet') {
      b += L(30, 196, 30, 20, { color: '#78350f', width: 14 }) + L(30, 90, 200, 70, { color: '#92400e', width: 8 }) + P(leafPath(170, 70, 214, 12), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(146, 76, 184, 10), { fill: '#86efac', stroke: '#15803d' });
      b += E(110, 80, 26, 20, { fill: '#a16207', stroke: '#713f12' }) + L(88, 70, 88, 92, { color: '#e5e7eb', width: 3 }) + L(132, 68, 132, 90, { color: '#e5e7eb', width: 3 });
      b += P('M100,98 l-4,18 M112,99 l2,20 M122,96 l8,16', { stroke: '#fef3c7', sw: 2 }) + T(110, 140, 'Bầu đất bó quanh', { size: 12, bold: true }) + T(110, 156, 'chỗ bóc vỏ, ra rễ', { size: 12, bold: true });
      return wrap(220, 206, b, 'Chiết cành');
    }
    b += R(10, 170, 200, 30, { fill: '#d6a86c' }) + L(110, 176, 110, 96, { color: '#78350f', width: 12 }) + L(110, 96, 110, 30, { color: '#65a30d', width: 8 });
    b += P(leafPath(112, 40, 160, 12), { fill: '#86efac', stroke: '#15803d' }) + P(leafPath(108, 56, 60, 12), { fill: '#86efac', stroke: '#15803d' });
    for (var i = 0; i < 4; i++) b += L(100, 86 + i * 7, 120, 90 + i * 7, { color: '#e5e7eb', width: 3 });
    b += T(124, 76, 'Cành ghép', { anchor: 'start', size: 12, bold: true }) + T(124, 140, 'Gốc ghép', { anchor: 'start', size: 12, bold: true });
    return wrap(220, 206, b, 'Ghép cành');
  }
  /* ---------- Sinh sản vô tính ở động vật ---------- asexualAnimal('phan-doi' | 'nay-choi') */
  function asexualAnimal(kind) {
    var id = 'as' + (++uid), b = A(id, C.muted, 7);
    if (kind === 'nay-choi') {
      var hydra = function (x, y, s) { var t = ''; t += P('M' + (x - 10 * s) + ',' + y + ' C' + (x - 12 * s) + ',' + (y - 50 * s) + ' ' + (x - 14 * s) + ',' + (y - 80 * s) + ' ' + (x - 12 * s) + ',' + (y - 100 * s) + ' L' + (x + 12 * s) + ',' + (y - 100 * s) + ' C' + (x + 14 * s) + ',' + (y - 80 * s) + ' ' + (x + 12 * s) + ',' + (y - 50 * s) + ' ' + (x + 10 * s) + ',' + y + ' Z', { fill: '#fde68a', stroke: '#b45309', sw: 2 });
        [-40, -20, 0, 20, 40].forEach(function (d) { t += P('M' + x + ',' + (y - 100 * s) + ' q' + (d * 0.5 * s) + ',' + (-20 * s) + ' ' + (d * s) + ',' + (-42 * s), { stroke: '#b45309', sw: 2.5 }); }); return t; };
      b += hydra(110, 210, 1) + P('M122,150 C150,140 170,120 176,100 L186,106 C176,130 156,150 122,164 Z', { fill: '#fde68a', stroke: '#b45309', sw: 2 }) + P('M181,103 q4,-14 16,-22 M181,103 q14,-6 26,-2', { stroke: '#b45309', sw: 2 });
        b += arw(220, 150, 280, 150, id, C.muted, 2.5) + hydra(340, 210, 0.6) + T(110, 232, 'Chồi mọc trên cơ thể mẹ', { size: 12, bold: true }) + T(340, 232, 'Chồi tách ra thành cá thể mới', { size: 12, bold: true });
      return labelled({ w: 480, h: 244, body: b, size: 13, labels: [[184, 104, 240, 60, 'Chồi']], label: 'Thuỷ tức sinh sản bằng nảy chồi' });
    }
    var cellA = function (x, y, rx, ry, nuc) { return E(x, y, rx, ry, { fill: '#fce7f3', stroke: '#be185d', sw: 2 }) + nuc.map(function (d) { return Ci(x + d, y, 8, { fill: C.purple }); }).join(''); };
    b += cellA(70, 70, 40, 36, [0]) + arw(122, 70, 160, 70, id, C.muted, 2.5);
    b += P('M180,70 C180,34 240,30 262,50 C284,30 344,34 344,70 C344,106 284,110 262,90 C240,110 180,106 180,70 Z', { fill: '#fce7f3', stroke: '#be185d', sw: 2 }) + Ci(226, 70, 8, { fill: C.purple }) + Ci(298, 70, 8, { fill: C.purple });
    b += arw(360, 70, 398, 70, id, C.muted, 2.5) + cellA(450, 70, 34, 30, [0]) + cellA(540, 70, 34, 30, [0]);
    b += T(70, 132, 'Tế bào mẹ', { size: 12, bold: true }) + T(262, 132, 'Nhân phân chia, tế bào thắt lại', { size: 12, bold: true }) + T(495, 132, '2 tế bào con', { size: 12, bold: true });
    return wrap(600, 144, b, 'Sinh sản bằng phân đôi');
  }
  /* ---------- Sinh sản hữu tính: giao tử → hợp tử → phôi ---------- */
  function zygoteFlow() {
    var id = 'zf' + (++uid), b = A(id, C.muted, 7);
    b += E(40, 50, 10, 7, { fill: '#93c5fd', stroke: '#1d4ed8' }) + P('M50,50 q10,-8 20,0 t20,0 t20,0', { stroke: '#1d4ed8', sw: 2 }) + T(64, 80, 'Giao tử đực', { size: 12, bold: true });
    b += Ci(70, 130, 30, { fill: '#fce7f3', stroke: '#be185d', sw: 2 }) + Ci(70, 130, 9, { fill: C.purple }) + T(70, 180, 'Giao tử cái', { size: 12, bold: true });
    b += arw(120, 60, 196, 96, id, C.muted, 2.5) + arw(110, 130, 196, 112, id, C.muted, 2.5) + T(158, 140, 'Thụ tinh', { size: 12, bold: true, color: C.orange });
    b += Ci(240, 104, 32, { fill: '#ede9fe', stroke: C.purple, sw: 2 }) + Ci(240, 104, 11, { fill: C.purple }) + T(240, 156, 'Hợp tử', { size: 13, bold: true });
    b += arw(282, 104, 330, 104, id, C.muted, 2.5);
    [[-12, -12], [12, -12], [-12, 12], [12, 12]].forEach(function (p) { b += Ci(372 + p[0], 104 + p[1], 13, { fill: '#ede9fe', stroke: C.purple, sw: 1.8 }); });
    b += T(372, 156, 'Phôi', { size: 13, bold: true }) + arw(410, 104, 458, 104, id, C.muted, 2.5);
    b += R(466, 80, 150, 48, { rx: 10, fill: '#dcfce7', stroke: C.green, sw: 2 }) + T(541, 109, 'Cơ thể mới', { size: 15, bold: true });
    return wrap(630, 192, b, 'Sơ đồ sinh sản hữu tính');
  }
  /* ---------- Sơ đồ nan hoa (cơ thể thống nhất) ---------- unityWheel({ center: 'Cơ thể', items: ['…'] }) */
  function unityWheel(o) {
    var W = o.w || 640, H = o.h || 330, cx = W / 2, cy = H / 2, rx = o.rx || 215, ry = o.ry || 112, n = o.items.length, id = 'uw' + (++uid), b = A(id, C.muted, 6);
    b += E(cx, cy, rx, ry, { stroke: '#cbd5e1', sw: 1.5 }).replace('/>', ' stroke-dasharray="6 5"/>');
    o.items.forEach(function (t, i) {
      var a = -Math.PI / 2 + 2 * Math.PI * i / n, x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a), lines = String(t).split('\n'), h = lines.length * 17 + 14, bw = o.bw || 170;
      var ex = cx + (rx - 70) * Math.cos(a) * 0.72, ey = cy + (ry - 20) * Math.sin(a) * 0.72;
      b += L(cx + 58 * Math.cos(a), cy + 34 * Math.sin(a), ex, ey, { color: C.muted, width: 2, marker: id, start: id });
      var f = [['#dbeafe', '#2563eb'], ['#dcfce7', '#16a34a'], ['#ffedd5', '#ea580c'], ['#ede9fe', '#7c3aed'], ['#fce7f3', '#db2777'], ['#fef9c3', '#ca8a04']][i % 6];
      b += R(x - bw / 2, y - h / 2, bw, h, { rx: 10, fill: f[0], stroke: f[1], sw: 2 }) + T(x, y - h / 2 + 22, t, { size: 13, bold: true });
    });
    b += E(cx, cy, 62, 36, { fill: '#fef9c3', stroke: '#ca8a04', sw: 2.5 }) + T(cx, cy + 5, o.center, { size: 15, bold: true });
    return wrap(W, H, b, o.label || 'Sơ đồ');
  }

  /* ---------- Vị trí vật sau những khoảng thời gian bằng nhau ---------- motionStrip({ rows: [{ label, d, color }], n: 4, max: 40, unit: 'm', dt: '1 s' }) */
  function motionStrip(o) {
    var n = o.n || 4, x0 = 110, x1 = 610, max = o.max, sc = (x1 - x0) / max, b = '', H = o.rows.length * 78 + 34;
    o.rows.forEach(function (r, i) {
      var y = 40 + i * 78, col = r.color || [C.blue, C.orange, C.green][i % 3];
      b += T(12, y + 5, r.label, { anchor: 'start', size: 13, bold: true, color: col }) + L(x0, y, x1, y, { color: '#cbd5e1', width: 3 });
      var every = Math.ceil(26 / (r.d * sc));
      for (var k = 0; k <= n; k++) { var x = x0 + k * r.d * sc; if (x > x1 + 1) break; b += Ci(x, y, 7, { fill: col }) + (k % every === 0 ? T(x, y - 13, (k * (o.dtNum || 1)) + ' s', { size: 11, color: C.muted }) : ''); }
    });
    var yb = H - 22, step = o.tick || 10;
    b += L(x0, yb, x1, yb, { width: 1.5 });
    for (var v = 0; v <= max + 1e-9; v += step) b += L(x0 + v * sc, yb - 4, x0 + v * sc, yb + 4, { width: 1.5 }) + T(x0 + v * sc, yb + 17, num(v) + (v === max ? ' ' + (o.unit || 'm') : ''), { size: 11, color: C.muted });
    return wrap(640, H + 6, b, o.label || 'Vị trí của vật sau những khoảng thời gian bằng nhau');
  }
  /* ---------- Thiết bị “bắn tốc độ” ---------- speedCamera({ v: '72 km/h' }) */
  function speedCamera(o) {
    o = o || {}; var b = R(10, 140, 620, 60, { fill: '#9ca3af' }) + L(10, 170, 630, 170, { color: '#fff', width: 3, dash: '18 14' });
    b += R(60, 40, 8, 100, { fill: '#6b7280' }) + R(44, 24, 52, 28, { rx: 5, fill: '#1f2937' }) + Ci(92, 38, 6, { fill: '#60a5fa' });
    b += P('M98,38 L380,120 L380,160 Z', { fill: '#fde68a', op: 0.45 }) + wheelCar(380, 150, C.red);
    b += R(470, 30, 150, 60, { rx: 8, fill: '#111827' }) + T(545, 54, 'Tốc độ của xe', { size: 12, color: '#e5e7eb' }) + T(545, 80, o.v || '72 km/h', { size: 20, bold: true, color: '#facc15' });
    b += T(70, 222, 'Camera đo tốc độ', { size: 13, bold: true }) + T(412, 222, 'Xe đang chạy', { size: 13, bold: true });
    return wrap(640, 232, b, 'Thiết bị đo tốc độ phương tiện giao thông');
  }

  /* ======================= KHTN 8 – Hoá học ======================= */
  /* Dụng cụ thí nghiệm: apparatus({ items: ['ong-nghiem','coc','binh-tam-giac','ong-dong','den-con','ong-hut','thia','kep','gia','phieu'] }) */
  var APP_NAME = { 'ong-nghiem': 'Ống nghiệm', 'coc': 'Cốc thuỷ tinh', 'binh-tam-giac': 'Bình tam giác', 'ong-dong': 'Ống đong', 'den-con': 'Đèn cồn', 'ong-hut': 'Ống hút nhỏ giọt', 'thia': 'Thìa lấy hoá chất', 'kep': 'Kẹp ống nghiệm', 'gia': 'Giá ống nghiệm', 'phieu': 'Phễu' };
  function lamp(cx, by, s) { // đèn cồn, đáy tại by
    s = s || 1; var w = 34 * s, h = 34 * s, b = '';
    b += P('M' + (cx - w) + ',' + by + ' L' + (cx - w * 0.75) + ',' + (by - h) + ' L' + (cx + w * 0.75) + ',' + (by - h) + ' L' + (cx + w) + ',' + by + ' Z', { fill: '#e0f2fe', stroke: '#334155', sw: 2 });
    b += P('M' + (cx - w * 0.94) + ',' + (by - 3) + ' L' + (cx - w * 0.82) + ',' + (by - h * 0.55) + ' L' + (cx + w * 0.82) + ',' + (by - h * 0.55) + ' L' + (cx + w * 0.94) + ',' + (by - 3) + ' Z', { fill: '#bfdbfe' });
    b += R(cx - 8 * s, by - h - 12 * s, 16 * s, 12 * s, { fill: '#94a3b8', stroke: '#334155', sw: 1.5 }) + L(cx, by - h - 12 * s, cx, by - h - 20 * s, { color: '#78350f', width: 3 * s });
    return b;
  }
  function flame(cx, y, s) { s = s || 1; return P('M' + cx + ',' + (y - 44 * s) + ' C' + (cx + 16 * s) + ',' + (y - 22 * s) + ' ' + (cx + 14 * s) + ',' + y + ' ' + cx + ',' + y + ' C' + (cx - 14 * s) + ',' + y + ' ' + (cx - 16 * s) + ',' + (y - 22 * s) + ' ' + cx + ',' + (y - 44 * s) + ' Z', { fill: '#fdba74', stroke: '#ea580c', sw: 1.5 }) + P('M' + cx + ',' + (y - 26 * s) + ' C' + (cx + 7 * s) + ',' + (y - 14 * s) + ' ' + (cx + 6 * s) + ',' + (y - 2 * s) + ' ' + cx + ',' + (y - 2 * s) + ' C' + (cx - 6 * s) + ',' + (y - 2 * s) + ' ' + (cx - 7 * s) + ',' + (y - 14 * s) + ' ' + cx + ',' + (y - 26 * s) + ' Z', { fill: '#60a5fa', op: 0.8 }); }
  function tubeShape(x, y, w, h, fillTo, col) { // ống nghiệm thẳng đứng, miệng tại (x, y)
    var r = w / 2, b = '';
    if (fillTo) b += P('M' + x + ',' + (y + h - fillTo) + ' L' + x + ',' + (y + h - r) + ' A' + r + ',' + r + ' 0 0 0 ' + (x + w) + ',' + (y + h - r) + ' L' + (x + w) + ',' + (y + h - fillTo) + ' Z', { fill: col || '#bfdbfe' });
    return b + P('M' + x + ',' + y + ' L' + x + ',' + (y + h - r) + ' A' + r + ',' + r + ' 0 0 0 ' + (x + w) + ',' + (y + h - r) + ' L' + (x + w) + ',' + y, { stroke: '#334155', sw: 2 }) + L(x - 3, y, x + w + 3, y, { color: '#334155', width: 2 });
  }
  function appItem(k, cx, by) {
    var b = '';
    if (k === 'ong-nghiem') b += tubeShape(cx - 11, by - 110, 22, 108, 36, '#bfdbfe');
    else if (k === 'coc') { b += R(cx - 30, by - 50, 60, 48, { fill: '#bfdbfe' }) + P('M' + (cx - 34) + ',' + (by - 92) + ' L' + (cx - 30) + ',' + (by - 88) + ' L' + (cx - 30) + ',' + by + ' L' + (cx + 30) + ',' + by + ' L' + (cx + 30) + ',' + (by - 92), { stroke: '#334155', sw: 2 }); for (var i = 1; i < 4; i++) b += L(cx - 30, by - i * 22, cx - 18, by - i * 22, { color: '#334155', width: 1.2 }); }
    else if (k === 'binh-tam-giac') b += P('M' + (cx - 34) + ',' + (by - 2) + ' L' + (cx - 20) + ',' + (by - 26) + ' L' + (cx + 20) + ',' + (by - 26) + ' L' + (cx + 34) + ',' + (by - 2) + ' Z', { fill: '#bbf7d0' }) + P('M' + (cx - 9) + ',' + (by - 100) + ' L' + (cx - 9) + ',' + (by - 62) + ' L' + (cx - 36) + ',' + by + ' L' + (cx + 36) + ',' + by + ' L' + (cx + 9) + ',' + (by - 62) + ' L' + (cx + 9) + ',' + (by - 100), { stroke: '#334155', sw: 2 });
    else if (k === 'ong-dong') { b += R(cx - 11, by - 50, 22, 42, { fill: '#bfdbfe' }) + P('M' + (cx - 11) + ',' + (by - 112) + ' L' + (cx - 11) + ',' + (by - 8) + ' M' + (cx + 11) + ',' + (by - 112) + ' L' + (cx + 11) + ',' + (by - 8), { stroke: '#334155', sw: 2 }) + R(cx - 26, by - 8, 52, 7, { rx: 2, fill: '#94a3b8', stroke: '#334155', sw: 1.5 }); for (var j = 0; j < 9; j++) b += L(cx - 11, by - 16 - j * 10, cx - (j % 2 ? 4 : 0), by - 16 - j * 10, { color: '#334155', width: 1 }); }
    else if (k === 'den-con') b += lamp(cx, by, 1) + flame(cx, by - 56, 0.8);
    else if (k === 'ong-hut') b += E(cx, by - 100, 9, 13, { fill: '#f87171', stroke: '#991b1b', sw: 1.5 }) + P('M' + (cx - 5) + ',' + (by - 88) + ' L' + (cx - 5) + ',' + (by - 26) + ' L' + cx + ',' + (by - 8) + ' L' + (cx + 5) + ',' + (by - 26) + ' L' + (cx + 5) + ',' + (by - 88), { fill: '#f1f5f9', stroke: '#334155', sw: 1.8 }) + Ci(cx, by - 2, 3, { fill: '#60a5fa' });
    else if (k === 'thia') b += L(cx - 30, by - 90, cx + 18, by - 22, { color: '#64748b', width: 5 }) + E(cx + 24, by - 14, 12, 7, { fill: '#cbd5e1', stroke: '#475569', sw: 1.5, rot: 55 });
    else if (k === 'kep') b += P('M' + (cx - 40) + ',' + (by - 40) + ' L' + (cx + 34) + ',' + (by - 40) + ' L' + (cx + 34) + ',' + (by - 28) + ' L' + (cx - 40) + ',' + (by - 32) + ' Z', { fill: '#d6a86c', stroke: '#78350f', sw: 1.5 }) + P('M' + (cx - 40) + ',' + (by - 54) + ' L' + (cx + 34) + ',' + (by - 50) + ' L' + (cx + 34) + ',' + (by - 42) + ' L' + (cx - 40) + ',' + (by - 42) + ' Z', { fill: '#d6a86c', stroke: '#78350f', sw: 1.5 }) + E(cx + 34, by - 41, 10, 13, { stroke: '#78350f', sw: 2 });
    else if (k === 'gia') { b += R(cx - 46, by - 60, 92, 10, { fill: '#d6a86c', stroke: '#78350f', sw: 1.5 }) + R(cx - 46, by - 10, 92, 8, { fill: '#d6a86c', stroke: '#78350f', sw: 1.5 }) + L(cx - 42, by - 50, cx - 42, by - 10, { color: '#78350f', width: 3 }) + L(cx + 42, by - 50, cx + 42, by - 10, { color: '#78350f', width: 3 }); [-24, 0, 24].forEach(function (d) { b += tubeShape(cx + d - 7, by - 96, 14, 84, 26, '#fecaca'); }); }
    else if (k === 'phieu') b += P('M' + (cx - 34) + ',' + (by - 100) + ' L' + (cx + 34) + ',' + (by - 100) + ' L' + (cx + 5) + ',' + (by - 56) + ' L' + (cx + 5) + ',' + (by - 8) + ' L' + (cx - 5) + ',' + (by - 8) + ' L' + (cx - 5) + ',' + (by - 56) + ' Z', { fill: '#f8fafc', stroke: '#334155', sw: 2 });
    return b;
  }
  function apparatus(o) {
    var items = (o && o.items) || ['ong-nghiem', 'coc', 'binh-tam-giac', 'ong-dong', 'den-con', 'ong-hut', 'thia', 'kep'], per = Math.min(4, items.length), cw = 130, ch = 160, b = '';
    items.forEach(function (k, i) { var cx = 10 + cw * (i % per) + cw / 2, top = 10 + ch * Math.floor(i / per); b += appItem(k, cx, top + 120) + T(cx, top + 146, APP_NAME[k] || k, { size: 13, bold: true }); });
    return wrap(20 + cw * per, 10 + ch * Math.ceil(items.length / per), b, 'Một số dụng cụ thí nghiệm');
  }
  /* Ngọn lửa đèn cồn có chú thích */
  function burnerFlame() {
    var b = lamp(150, 250, 1.6) + flame(150, 172, 2.2);
    return labelled({ w: 470, h: 262, body: b, size: 12, label: 'Cấu tạo đèn cồn và ngọn lửa', labels: [[166, 100, 250, 60, 'Phần ngoài: nóng nhất'], [150, 140, 250, 112, 'Phần trong: ít nóng'], [150, 180, 250, 170, 'Bấc đèn'], [178, 236, 250, 228, 'Cồn (không quá 2/3 bình)'], [96, 210, 40, 170, 'Thân đèn', 'middle']] });
  }
  /* Đun chất lỏng trong ống nghiệm */
  function heatTube() {
    var id = 'ht' + (++uid), b = A(id, C.red, 7);
    var g = '<g transform="translate(150,40) rotate(45)">' + P('M0,0 L150,0 A12,12 0 0 1 150,24 L0,24', { stroke: '#334155', sw: 2 }) + P('M110,2 L150,2 A10,10 0 0 1 150,22 L110,22 Z', { fill: '#93c5fd' }) + L(0, -3, 0, 27, { color: '#334155', width: 2 }) + R(36, -8, 14, 40, { rx: 3, fill: '#d6a86c', stroke: '#78350f', sw: 1.5 }) + '</g>';
    b += g + P('M130,86 L40,176', { stroke: '#78350f', sw: 6 });
    b += lamp(262, 262, 1.2) + flame(262, 196, 1.3);
    b += arw(144, 34, 118, 8, id, C.red, 2.5) + T(172, 22, 'Miệng ống hướng về phía không có người', { size: 12, bold: true, color: '#b91c1c', anchor: 'start' });
    return labelled({ w: 580, h: 272, body: b, size: 12, label: 'Đun chất lỏng trong ống nghiệm', labels: [[262, 128, 330, 116, 'Chất lỏng ≤ 1/3 ống'], [178, 76, 330, 70, 'Kẹp ở khoảng 1/3 ống tính từ miệng'], [262, 180, 330, 190, 'Đun bằng phần ngọn lửa ngoài']] });
  }
  /* Mô hình hạt trước và sau phản ứng: reactionParticles({ left: [['H','H'],['O','O']], right: [['H','O','H']], leftLabel, rightLabel }) */
  function molDraw(atoms, x, y) {
    var s = '', cx = x;
    atoms.forEach(function (a, i) { var r = a === 'H' ? 10 : 14; if (i) cx += (atoms[i - 1] === 'H' ? 10 : 14) + r - 6; var c = elc(a); s += Ci(cx, y, r, { fill: c[0], stroke: c[1], sw: 1.8 }) + T(cx, y + 4, a, { size: a.length > 1 ? 10 : 11, bold: true, color: a === 'C' ? '#fff' : '#111827' }); });
    return s;
  }
  function molWidth(atoms) { var w = 0; atoms.forEach(function (a, i) { var r = a === 'H' ? 10 : 14; w += i ? (atoms[i - 1] === 'H' ? 10 : 14) + r - 6 : r; }); return w + (atoms[atoms.length - 1] === 'H' ? 10 : 14); }
  function reactionParticles(o) {
    var id = 'rp' + (++uid), b = A(id, C.muted, 8), bw = 250, W = 2 * bw + 90, rowsL = Math.ceil(o.left.length / 2), rowsR = Math.ceil(o.right.length / 2), H = 60 + Math.max(rowsL, rowsR, 2) * 46;
    [[o.left, 10, o.leftLabel || 'Trước phản ứng'], [o.right, bw + 80, o.rightLabel || 'Sau phản ứng']].forEach(function (side) {
      b += R(side[1], 10, bw, H - 44, { rx: 12, fill: '#f8fafc', stroke: '#cbd5e1' }) + T(side[1] + bw / 2, H - 14, side[2], { size: 13, bold: true, color: C.muted });
      side[0].forEach(function (m, i) { var col = i % 2, row = Math.floor(i / 2), w = molWidth(m); b += molDraw(m, side[1] + 18 + col * (bw / 2) + (bw / 2 - 26 - w) / 2 + (m[0] === 'H' ? 10 : 14), 44 + row * 46); });
    });
    b += arw(bw + 18, (H - 44) / 2 + 10, bw + 70, (H - 44) / 2 + 10, id, C.muted, 3);
    return wrap(W, H, b, o.label || 'Mô hình phản ứng hoá học');
  }
  /* Định luật bảo toàn khối lượng: massBalance({ before: 'Trước phản ứng', after: 'Sau phản ứng', m: '152,40 g', note }) */
  function scaleFlask(x, reading, liquid, ppt) {
    var b = R(x, 170, 170, 34, { rx: 6, fill: '#e5e7eb', stroke: '#475569' }) + R(x + 50, 178, 70, 20, { rx: 3, fill: '#0f172a' }) + T(x + 85, 194, reading, { size: 13, bold: true, color: '#4ade80' });
    b += P('M' + (x + 75) + ',60 L' + (x + 75) + ',100 L' + (x + 40) + ',168 L' + (x + 130) + ',168 L' + (x + 95) + ',100 L' + (x + 95) + ',60', { fill: '#f8fafc', stroke: '#334155', sw: 2 });
    b += P('M' + (x + 58) + ',134 L' + (x + 112) + ',134 L' + (x + 128) + ',166 L' + (x + 42) + ',166 Z', { fill: liquid });
    if (ppt) { var r = rnd(3); for (var i = 0; i < 22; i++) b += Ci(x + 56 + r() * 58, 152 + r() * 12, 2, { fill: '#f8fafc', stroke: '#94a3b8', sw: 0.8 }); }
    return b + R(x + 70, 50, 30, 12, { rx: 3, fill: '#78350f' });
  }
  function massBalance(o) {
    o = o || {}; var id = 'mb' + (++uid), b = A(id, C.muted, 8);
    b += scaleFlask(20, o.m || '152,40 g', '#bfdbfe', false) + scaleFlask(290, o.m || '152,40 g', '#e0f2fe', true);
    b += arw(200, 130, 280, 130, id, C.muted, 3) + T(240, 118, 'phản ứng', { size: 12, color: C.muted });
    b += T(105, 226, o.before || 'Trước phản ứng', { size: 13, bold: true }) + T(375, 226, o.after || 'Sau phản ứng (có kết tủa)', { size: 13, bold: true });
    b += T(240, 26, o.note || 'Bình kín: tổng khối lượng không đổi', { size: 14, bold: true, color: '#166534' });
    return wrap(480, 240, b, 'Thí nghiệm kiểm chứng định luật bảo toàn khối lượng');
  }
  /* Sơ đồ chuyển đổi m – n – V – N */
  function molMap() {
    var id = 'mm' + (++uid), b = A(id, '#475569', 7), box = function (x, y, w, t, f) { return R(x, y, w, 50, { rx: 10, fill: f[0], stroke: f[1], sw: 2 }) + T(x + w / 2, y + 30, t, { size: 14, bold: true, vcenter: true }); };
    b += box(250, 140, 140, 'Số mol\nn (mol)', ['#fef9c3', '#ca8a04']) + box(10, 140, 150, 'Khối lượng\nm (g)', ['#dbeafe', '#2563eb']) + box(480, 140, 150, 'Thể tích khí\nV (L)', ['#dcfce7', '#16a34a']) + box(240, 10, 160, 'Số hạt N', ['#ede9fe', '#7c3aed']);
    b += arw(162, 155, 246, 155, id, '#475569', 2) + arw(246, 178, 162, 178, id, '#475569', 2) + T(204, 147, 'n = m : M', { size: 13, bold: true, color: '#1d4ed8' }) + T(204, 200, 'm = n · M', { size: 13, bold: true, color: '#1d4ed8' });
    b += arw(394, 155, 476, 155, id, '#475569', 2) + arw(476, 178, 394, 178, id, '#475569', 2) + T(435, 147, 'V = 24,79 · n', { size: 13, bold: true, color: '#15803d' }) + T(435, 200, 'n = V : 24,79', { size: 13, bold: true, color: '#15803d' });
    b += arw(305, 136, 305, 64, id, '#475569', 2) + arw(335, 64, 335, 136, id, '#475569', 2) + T(296, 104, 'N = n · 6,022 · 10²³', { size: 13, bold: true, color: '#6d28d9', anchor: 'end' });
    b += T(320, 222, 'V đo ở điều kiện chuẩn: 25 °C, 1 bar (1 mol khí chiếm 24,79 L)', { size: 12, color: C.muted });
    return wrap(640, 232, b, 'Sơ đồ chuyển đổi giữa khối lượng, số mol, thể tích khí và số hạt');
  }
  /* Dung dịch: chất tan + dung môi */
  function beaker(x, y, w, h, fill, lvl) { return R(x + 2, y + h - lvl, w - 4, lvl - 2, { fill: fill }) + P('M' + (x - 4) + ',' + y + ' L' + x + ',' + (y + 4) + ' L' + x + ',' + (y + h) + ' L' + (x + w) + ',' + (y + h) + ' L' + (x + w) + ',' + y, { stroke: '#334155', sw: 2 }); }
  function solutionScheme(o) {
    o = o || {}; var id = 'ss' + (++uid), b = A(id, C.muted, 8);
    b += P('M40,150 Q70,100 100,150 Z', { fill: '#f8fafc', stroke: '#94a3b8' }); var r = rnd(5); for (var i = 0; i < 26; i++) b += R(48 + r() * 46, 118 + r() * 28, 4, 4, { fill: '#e2e8f0', stroke: '#64748b', sw: 0.8 });
    b += T(70, 176, o.solute || 'Chất tan (muối ăn)', { size: 12, bold: true }) + T(70, 194, 'm chất tan', { size: 12, italic: true, color: C.muted });
    b += T(130, 130, '+', { size: 28, bold: true, color: C.muted });
    b += beaker(160, 70, 90, 90, '#bfdbfe', 60) + T(205, 176, o.solvent || 'Dung môi (nước)', { size: 12, bold: true }) + T(205, 194, 'm dung môi', { size: 12, italic: true, color: C.muted });
    b += arw(270, 120, 330, 120, id, C.muted, 3) + T(300, 108, 'khuấy', { size: 12, color: C.muted });
    b += beaker(350, 70, 90, 90, '#dbeafe', 64) + T(395, 176, 'Dung dịch', { size: 12, bold: true }) + T(395, 194, 'm dd = m chất tan + m dung môi', { size: 12, italic: true, color: C.muted });
    return wrap(520, 206, b, 'Chất tan hoà tan trong dung môi tạo thành dung dịch');
  }
  /* So sánh các ống nghiệm: tubesCompare({ tubes: [{ label, liquid, bubbles, solid: 'powder'|'chunk'|'strip', solidColor, top }], title }) */
  function tubesCompare(o) {
    var n = o.tubes.length, cw = o.cw || 130, W = Math.max(260, n * cw + 20, o.title ? o.title.length * 7.6 + 24 : 0), H = o.title ? 250 : 226, y0 = o.title ? 44 : 20, b = '';
    if (o.title) b += T(W / 2, 24, o.title, { size: 14, bold: true });
    o.tubes.forEach(function (t, i) {
      var cx = 10 + cw * i + cw / 2 + (W - 20 - n * cw) / 2, x = cx - 16, lvl = t.level || 70;
      b += tubeShape(x, y0 + 12, 32, 140, lvl, t.liquid || '#bfdbfe');
      var bot = y0 + 152;
      if (t.solid === 'powder') { var r = rnd(i + 2); for (var k = 0; k < 18; k++) b += Ci(cx - 10 + r() * 20, bot - 8 - r() * 6, 2, { fill: t.solidColor || '#e5e7eb', stroke: '#64748b', sw: 0.6 }); }
      if (t.solid === 'chunk') b += P('M' + (cx - 11) + ',' + (bot - 6) + ' L' + (cx - 6) + ',' + (bot - 18) + ' L' + (cx + 7) + ',' + (bot - 17) + ' L' + (cx + 11) + ',' + (bot - 6) + ' Z', { fill: t.solidColor || '#e5e7eb', stroke: '#475569', sw: 1.2 });
      if (t.solid === 'strip') b += R(cx - 4, bot - 50, 8, 44, { fill: t.solidColor || '#9ca3af', stroke: '#374151', sw: 1 });
      var rb = rnd(i + 11); for (var q = 0; q < (t.bubbles || 0); q++) b += Ci(cx - 9 + rb() * 18, bot - 14 - rb() * (lvl - 24), 2 + rb() * 2, { stroke: '#1e3a8a', sw: 1 });
      if (t.top) b += T(cx, y0 + 4, t.top, { size: 12, bold: true, color: '#b45309' });
      b += T(cx, y0 + 178, t.label, { size: 12, bold: true });
      if (t.sub) b += T(cx, y0 + 196, t.sub, { size: 12, color: C.muted });
    });
    return wrap(W, H, b, o.title || 'So sánh các ống nghiệm');
  }
  /* Thang pH: phScale({ marks: [{ v: 2, label: 'Nước chanh' }] }) */
  var PHC = ['#dc2626', '#ef4444', '#f97316', '#fb923c', '#facc15', '#fde047', '#a3e635', '#22c55e', '#14b8a6', '#06b6d4', '#3b82f6', '#2563eb', '#4f46e5', '#6d28d9', '#7e22ce'];
  function phScale(o) {
    o = o || {}; var x0 = 30, cw = 40, y = 90, b = '', id = 'ph' + (++uid);
    b += A(id, C.ink, 6);
    for (var i = 0; i <= 14; i++) b += R(x0 + i * cw, y, cw, 36, { fill: PHC[i] }) + T(x0 + i * cw + cw / 2, y + 24, String(i), { size: 14, bold: true, color: i >= 10 || i <= 1 ? '#fff' : '#111827' });
    b += R(x0, y, 15 * cw, 36, { stroke: '#334155', sw: 1.5 });
    b += T(x0 + 3.5 * cw, y + 58, '← Tính acid tăng dần', { size: 13, bold: true, color: '#b91c1c' }) + T(x0 + 7.5 * cw, y + 58, 'Trung tính', { size: 13, bold: true, color: '#15803d' }) + T(x0 + 11.5 * cw, y + 58, 'Tính base tăng dần →', { size: 13, bold: true, color: '#4338ca' });
    (o.marks || []).forEach(function (m, i) { var x = x0 + m.v * cw + cw / 2, up = i % 2 === 0, ly = up ? 30 + (i % 4 === 0 ? 0 : 20) : 176 + (i % 4 === 1 ? 0 : 20); b += L(x, up ? ly + 4 : ly - 16, x, up ? y - 2 : y + 64, { color: '#475569', width: 1.3 }) + T(x, ly, m.label + ' (' + num(m.v) + ')', { size: 12, bold: true }); });
    return wrap(x0 * 2 + 15 * cw, o.marks && o.marks.some(function (m, i) { return i % 2; }) ? 208 : 170, b, 'Thang pH');
  }
  /* Bao phân bón NPK: fertilizerBag({ n: 16, p: 16, k: 8 }) */
  function fertilizerBag(o) {
    o = o || {}; var n = o.n != null ? o.n : 16, p = o.p != null ? o.p : 16, k = o.k != null ? o.k : 8, b = '';
    b += P('M40,30 L200,30 L212,250 L28,250 Z', { fill: '#ecfccb', stroke: '#4d7c0f', sw: 3 }) + P('M40,30 L60,18 L180,18 L200,30', { stroke: '#4d7c0f', sw: 3 });
    b += T(120, 76, 'PHÂN BÓN', { size: 16, bold: true, color: '#365314' }) + T(120, 116, 'NPK ' + n + '-' + p + '-' + k, { size: 26, bold: true, color: '#166534' });
    b += P('M120,150 C104,170 104,196 120,214 C136,196 136,170 120,150 Z', { fill: '#86efac', stroke: '#15803d' }) + T(120, 238, 'Khối lượng tịnh: 50 kg', { size: 12, color: '#365314' });
    b += T(250, 90, 'Ý nghĩa các con số:', { size: 13, bold: true, anchor: 'start' }) + T(250, 122, n + '% đạm (N)', { size: 14, bold: true, anchor: 'start', color: '#1d4ed8' }) + T(250, 150, p + '% lân (tính theo P₂O₅)', { size: 14, bold: true, anchor: 'start', color: '#b45309' }) + T(250, 178, k + '% kali (tính theo K₂O)', { size: 14, bold: true, anchor: 'start', color: '#7c3aed' });
    return wrap(450, 262, b, 'Nhãn bao phân bón NPK');
  }
  /* Điều chế và thu khí bằng cách đẩy nước: gasCollect({ gas: 'Khí hydrogen', left: 'Zn + dung dịch HCl' }) */
  function gasCollect(o) {
    o = o || {}; var b = '', r = rnd(4);
    b += P('M70,60 L70,110 L30,196 L130,196 L90,110 L90,60', { fill: '#f8fafc', stroke: '#334155', sw: 2 }) + P('M46,160 L114,160 L128,194 L32,194 Z', { fill: '#dbeafe' });
    for (var i = 0; i < 5; i++) b += P('M' + (52 + i * 12) + ',192 l5,-8 l6,3 l-2,5 Z', { fill: '#9ca3af', stroke: '#374151', sw: 1 });
    for (var j = 0; j < 12; j++) b += Ci(48 + r() * 64, 166 + r() * 22, 2, { stroke: '#1e3a8a', sw: 1 });
    b += R(66, 50, 28, 12, { rx: 3, fill: '#78350f' }) + P('M80,50 L80,30 L250,30 L250,150 L282,150', { stroke: '#475569', sw: 4 });
    b += R(200, 120, 220, 80, { fill: '#bfdbfe' }) + P('M196,100 L196,204 L424,204 L424,100', { stroke: '#334155', sw: 2 });
    b += P('M290,60 L290,170 A14,14 0 0 0 318,170 L318,60', { stroke: '#334155', sw: 2 }) + P('M292,120 L292,170 A12,12 0 0 0 316,170 L316,120 Z', { fill: '#bfdbfe' });
    for (var k = 0; k < 5; k++) b += Ci(300 + r() * 10, 130 + k * 8, 2.4, { stroke: '#1e3a8a', sw: 1 });
    return labelled({ w: 610, h: 240, body: b, size: 12, label: 'Điều chế và thu khí bằng phương pháp đẩy nước', labels: [[80, 180, 140, 226, o.left || 'Kẽm + dung dịch HCl'], [304, 90, 350, 70, (o.gas || 'Khí hydrogen') + ' đẩy nước ra khỏi ống'], [400, 180, 440, 226, 'Chậu nước']] });
  }
  /* ======================= KHTN 8 – Khối lượng riêng, áp suất, moment lực ======================= */
  function cylinder(cx, top, h, max, step, v, stone) { // ống đong có vạch chia, mực nước v
    var w = 44, b = '', Y = function (x) { return top + h - x / max * h; };
    b += R(cx - w / 2 + 2, Y(v), w - 4, top + h - Y(v), { fill: '#bfdbfe' });
    if (stone) b += P('M' + (cx - 12) + ',' + (top + h - 4) + ' L' + (cx - 8) + ',' + (top + h - 22) + ' L' + (cx + 6) + ',' + (top + h - 26) + ' L' + (cx + 13) + ',' + (top + h - 6) + ' Z', { fill: '#78716c', stroke: '#292524', sw: 1.5 });
    b += P('M' + (cx - w / 2) + ',' + (top - 10) + ' L' + (cx - w / 2) + ',' + (top + h) + ' M' + (cx + w / 2) + ',' + (top - 10) + ' L' + (cx + w / 2) + ',' + (top + h), { stroke: '#334155', sw: 2 }) + R(cx - 40, top + h, 80, 8, { rx: 2, fill: '#94a3b8', stroke: '#334155', sw: 1.5 });
    for (var x = 0; x <= max + 1e-9; x += step / 2) { var maj = Math.abs(x / step - Math.round(x / step)) < 1e-6; b += L(cx - w / 2, Y(x), cx - w / 2 + (maj ? 12 : 7), Y(x), { color: '#334155', width: 1.2 }); if (maj && x > 0) b += T(cx - w / 2 - 5, Y(x) + 4, num(x), { size: 11, anchor: 'end', color: '#334155' }); }
    return b + L(cx - w / 2, Y(v), cx + w / 2, Y(v), { color: '#1d4ed8', width: 2 });
  }
  /* cylinderReading({ v1: 50, v2: 70, max: 100, step: 10, unit: 'cm³' }) – đo thể tích vật rắn bằng ống đong */
  function cylinderReading(o) {
    o = o || {}; var max = o.max || 100, step = o.step || 10, u = o.unit || 'cm³', id = 'cr' + (++uid), b = A(id, C.muted, 8);
    b += cylinder(90, 30, 200, max, step, o.v1 != null ? o.v1 : 50, false) + cylinder(330, 30, 200, max, step, o.v2 != null ? o.v2 : 70, true);
    b += arw(150, 130, 260, 130, id, C.muted, 3) + T(205, 118, 'thả vật vào', { size: 12, color: C.muted });
    b += T(90, 262, 'V₁ = ' + num(o.v1 != null ? o.v1 : 50) + ' ' + u, { size: 14, bold: true }) + T(330, 262, 'V₂ = ' + num(o.v2 != null ? o.v2 : 70) + ' ' + u, { size: 14, bold: true });
    b += T(210, 290, 'Thể tích vật: V = V₂ − V₁ = ' + num((o.v2 != null ? o.v2 : 70) - (o.v1 != null ? o.v1 : 50)) + ' ' + u, { size: 14, bold: true, color: '#1d4ed8' });
    return wrap(420, 302, b, 'Đo thể tích vật rắn không thấm nước bằng ống đong');
  }
  /* Bình tràn */
  function overflowCan() {
    var b = R(40, 80, 120, 150, { fill: '#bfdbfe' }) + P('M40,60 L40,230 L160,230 L160,60', { stroke: '#334155', sw: 2.5 }) + P('M160,86 L210,106', { stroke: '#334155', sw: 6 }) + P('M212,110 q4,20 0,50', { stroke: '#38bdf8', sw: 3, dash: '4 4' });
    b += P('M86,200 L92,180 L112,176 L122,198 Z', { fill: '#78716c', stroke: '#292524', sw: 1.5 }) + L(104, 20, 104, 176, { color: '#475569', width: 1.5 });
    b += R(190, 170, 60, 60, { fill: '#e0f2fe' }) + R(192, 206, 56, 22, { fill: '#bfdbfe' }) + P('M190,166 L190,230 L250,230 L250,166', { stroke: '#334155', sw: 2 });
    return labelled({ w: 440, h: 250, body: b, size: 12, label: 'Đo thể tích vật bằng bình tràn', labels: [[60, 120, 20, 36, 'Bình tràn đầy nước', 'start'], [118, 190, 270, 120, 'Vật rắn'], [236, 214, 270, 200, 'Nước tràn ra = thể tích vật']] });
  }
  /* Áp suất của viên gạch đặt theo 3 cách trên cát */
  function pressureBricks() {
    var b = R(10, 170, 580, 60, { fill: '#e7c9a0' }), r = rnd(7); for (var i = 0; i < 60; i++) b += Ci(14 + r() * 572, 176 + r() * 50, 1.3, { fill: '#a16207' });
    var br = function (x, y, w, h, d) { return P('M' + x + ',' + (170 + d) + ' Q' + (x + w / 2) + ',' + (176 + d) + ' ' + (x + w) + ',' + (170 + d), { stroke: '#92400e', sw: 1.5 }) + R(x, y + d, w, h, { rx: 2, fill: '#dc6b4a', stroke: '#7c2d12', sw: 2 }); };
    b += br(40, 130, 150, 40, 3) + br(250, 110, 110, 60, 6) + br(430, 60, 60, 110, 14);
    b += T(115, 252, 'Mặt tiếp xúc lớn nhất', { size: 12, bold: true }) + T(305, 252, 'Mặt tiếp xúc vừa', { size: 12, bold: true }) + T(460, 252, 'Mặt tiếp xúc nhỏ nhất', { size: 12, bold: true });
    b += T(115, 270, 'lún ít nhất', { size: 12, color: C.muted }) + T(305, 270, 'lún vừa', { size: 12, color: C.muted }) + T(460, 270, 'lún sâu nhất', { size: 12, color: C.muted });
    b += T(300, 30, 'Cùng áp lực F (trọng lượng viên gạch): S càng nhỏ thì áp suất p = F : S càng lớn', { size: 13, bold: true, color: '#1d4ed8' });
    return wrap(600, 282, b, 'Tác dụng của áp lực phụ thuộc diện tích bị ép');
  }
  /* Áp suất chất lỏng: bình có lỗ ở các độ sâu khác nhau */
  function liquidPressure() {
    var b = R(60, 50, 120, 190, { fill: '#bfdbfe' }) + P('M56,30 L60,30 L60,240 L180,240 L180,30 L184,30', { stroke: '#334155', sw: 3 }), id = 'lp' + (++uid);
    b += A(id, C.ink, 6);
    [[100, 40], [150, 80], [200, 125]].forEach(function (p, i) { b += Ci(180, p[0], 3, { fill: '#334155' }) + P('M182,' + p[0] + ' Q' + (180 + p[1] * 0.6) + ',' + (p[0] - 6) + ' ' + (180 + p[1]) + ',250', { stroke: '#38bdf8', sw: 4 }); });
    b += L(30, 50, 30, 150, { width: 1.5, marker: id, start: id }) + T(22, 104, 'h', { size: 14, italic: true, bold: true, anchor: 'end' }) + L(26, 150, 178, 150, { color: '#64748b', width: 1, dash: '3 3' });
    b += R(40, 250, 300, 8, { fill: '#94a3b8' });
    b += T(360, 90, 'Lỗ càng sâu, tia nước', { size: 13, bold: true, anchor: 'start' }) + T(360, 110, 'phun càng xa', { size: 13, bold: true, anchor: 'start' }) + T(360, 150, 'p = d · h', { size: 18, bold: true, anchor: 'start', color: '#1d4ed8' }) + T(360, 176, 'd: trọng lượng riêng (N/m³)', { size: 12, anchor: 'start', color: C.muted }) + T(360, 196, 'h: độ sâu (m)', { size: 12, anchor: 'start', color: C.muted });
    return wrap(560, 266, b, 'Áp suất chất lỏng tăng theo độ sâu');
  }
  /* Bình thông nhau */
  function communicatingVessels() {
    var lvl = 90, k = (lvl - 40) / 160 * 24, b = '';
    b += R(62, 200, 346, 28, { fill: '#bfdbfe' }) + R(62, lvl, 36, 200 - lvl, { fill: '#bfdbfe' }) + P('M' + (186 + k) + ',' + lvl + ' L' + (264 - k) + ',' + lvl + ' L240,200 L210,200 Z', { fill: '#bfdbfe' }) + R(352, lvl, 56, 200 - lvl, { fill: '#bfdbfe' });
    b += P('M60,40 L60,230 L410,230 L410,40 M100,40 L100,200 L210,200 L186,40 M264,40 L240,200 L350,200 L350,40', { stroke: '#334155', sw: 2.5 });
    b += L(30, lvl, 440, lvl, { color: '#dc2626', width: 1.5, dash: '6 4' }) + T(235, 24, 'Mực nước ở các nhánh ngang nhau (đường nét đứt)', { size: 12, bold: true, color: '#b91c1c' });
    return wrap(460, 246, b, 'Bình thông nhau chứa cùng một chất lỏng đứng yên');
  }
  /* Thí nghiệm Torricelli */
  function torricelli() {
    var id = 'to' + (++uid), b = A(id, C.ink, 6);
    b += P('M40,200 L40,240 L220,240 L220,200', { stroke: '#334155', sw: 2.5 }) + R(42, 212, 176, 26, { fill: '#9ca3af' });
    b += R(118, 70, 24, 170, { fill: '#9ca3af' }) + P('M118,244 L118,30 A12,12 0 0 1 142,30 L142,244', { stroke: '#334155', sw: 2 }) + R(119, 20, 22, 50, { fill: '#fff' }) + P('M118,30 A12,12 0 0 1 142,30', { stroke: '#334155', sw: 2 });
    b += L(170, 70, 170, 212, { width: 1.5, marker: id, start: id }) + L(142, 70, 176, 70, { color: '#64748b', width: 1, dash: '3 3' }) + T(178, 146, '76 cm', { size: 14, bold: true, anchor: 'start' });
    b += T(146, 44, 'Chân không', { size: 12, anchor: 'start', color: C.muted }) + T(40, 262, 'Chậu thuỷ ngân', { size: 12, bold: true, anchor: 'start' });
    b += T(270, 120, 'Áp suất khí quyển ở mặt biển', { size: 13, bold: true, anchor: 'start' }) + T(270, 142, '≈ áp suất cột thuỷ ngân cao 76 cm', { size: 13, anchor: 'start' }) + T(270, 164, '≈ 101 300 Pa', { size: 15, bold: true, anchor: 'start', color: '#1d4ed8' });
    return wrap(520, 274, b, 'Thí nghiệm Torricelli đo áp suất khí quyển');
  }
  /* Vật trong chất lỏng: buoyancy({ state: 'noi' | 'chim' | 'lo-lung' }) */
  function FA(x, y, col, anchor) { var dx = anchor === 'end' ? -9 : 0; return T(x + dx, y, 'F', { size: 15, bold: true, italic: true, color: col, anchor: anchor || 'start' }) + T(x + dx + (anchor === 'end' ? 8 : 10), y + 5, 'A', { size: 10, bold: true, color: col, anchor: 'start' }); }
  function buoyancy(o) {
    o = o || {}; var st = o.state || 'noi', id = 'bu' + (++uid), id2 = id + 'b', b = A(id, C.red, 7) + A(id2, C.blue, 7);
    b += R(40, 80, 220, 150, { fill: '#bfdbfe' }) + P('M36,40 L40,44 L40,230 L260,230 L260,40', { stroke: '#334155', sw: 2.5 });
    var y = st === 'noi' ? 60 : (st === 'chim' ? 150 : 120), cx = 150, h = 44;
    b += R(cx - 30, y, 60, h, { rx: 3, fill: st === 'chim' ? '#78716c' : (st === 'noi' ? '#d6a86c' : '#a3a3a3'), stroke: '#292524', sw: 2 });
    var fa = st === 'chim' ? 34 : 48, pw = st === 'chim' ? 64 : 48;
    b += arw(cx + 12, y + h / 2, cx + 12, y + h / 2 + pw, id, C.red, 3) + T(cx + 22, y + h / 2 + pw - 4, 'P', { size: 15, bold: true, color: C.red, anchor: 'start', italic: true });
    b += arw(cx - 12, y + h / 2, cx - 12, y + h / 2 - fa, id2, C.blue, 3) + FA(cx - 22, y + h / 2 - fa + 12, C.blue, 'end');
    var FS = 'F<tspan baseline-shift="sub" font-size="10">A</tspan>'; b += '<text x="150" y="256" text-anchor="middle" font-size="13" font-weight="700" fill="' + C.ink + '">' + (st === 'noi' ? 'Vật nổi: ' + FS + ' = P' : (st === 'chim' ? 'Vật chìm: P &gt; ' + FS : 'Vật lơ lửng: P = ' + FS)) + '</text>';
    return wrap(300, 268, b, 'Lực tác dụng lên vật nhúng trong chất lỏng');
  }
  /* Thí nghiệm lực đẩy Archimedes: archimedesExp({ air: 3, water: 2 }) */
  function springScale(x, val, max) {
    var top = 30, len = 120, Y = function (v) { return top + 10 + v / max * len; }, b = L(x, 6, x, top, { width: 3 }) + R(x - 16, top, 32, len + 24, { rx: 6, fill: '#e0f2fe', stroke: '#0369a1' });
    for (var v = 0; v <= max; v++) b += L(x + 4, Y(v), x + 14, Y(v), { color: '#334155', width: 1.3 }) + T(x - 4, Y(v) + 4, String(v), { size: 10, anchor: 'end', color: '#334155' });
    return b + L(x - 14, Y(val), x + 16, Y(val), { color: C.red, width: 3 }) + L(x, top + len + 24, x, top + len + 44, { width: 2 });
  }
  function archimedesExp(o) {
    o = o || {}; var a = o.air != null ? o.air : 3, w = o.water != null ? o.water : 2, max = o.max || 4, b = '';
    b += springScale(90, a, max) + R(68, 198, 44, 40, { rx: 3, fill: '#9ca3af', stroke: '#374151' }) + T(90, 262, 'Trong không khí: P = ' + num(a) + ' N', { size: 13, bold: true });
    b += springScale(330, w, max) + R(260, 180, 140, 80, { fill: '#bfdbfe' }) + P('M256,160 L260,164 L260,260 L400,260 L400,160', { stroke: '#334155', sw: 2 }) + R(308, 198, 44, 40, { rx: 3, fill: '#9ca3af', stroke: '#374151' }) + T(330, 282, 'Nhúng chìm trong nước: ' + num(w) + ' N', { size: 13, bold: true });
    b += T(210, 308, 'Lực đẩy Archimedes: F = ' + num(a) + ' − ' + num(w) + ' = ' + num(a - w) + ' N', { size: 14, bold: true, color: '#1d4ed8' });
    return wrap(440, 320, b, 'Đo lực đẩy Archimedes bằng lực kế');
  }
  /* Moment lực: cờ lê vặn đai ốc */
  function momentForce(o) {
    o = o || {}; var id = 'mf' + (++uid), b = A(id, C.red, 8) + A(id + 'd', C.ink, 6), ox = 90, oy = 150;
    b += P('M' + (ox - 22) + ',' + (oy - 13) + ' L' + ox + ',' + (oy - 26) + ' L' + (ox + 22) + ',' + (oy - 13) + ' L' + (ox + 22) + ',' + (oy + 13) + ' L' + ox + ',' + (oy + 26) + ' L' + (ox - 22) + ',' + (oy + 13) + ' Z', { fill: '#cbd5e1', stroke: '#334155', sw: 2 });
    b += R(ox + 20, oy - 10, 300, 20, { rx: 8, fill: '#94a3b8', stroke: '#334155', sw: 2 }) + Ci(ox, oy, 5, { fill: C.ink }) + T(ox - 6, oy + 44, 'O (trục quay)', { size: 12, bold: true });
    b += arw(ox + 300, oy - 10, ox + 300, oy - 100, id, C.red, 3.5) + T(ox + 312, oy - 80, 'F', { size: 18, bold: true, italic: true, color: C.red, anchor: 'start' });
    b += L(ox, oy + 26, ox + 300, oy + 26, { width: 1.5, marker: id + 'd', start: id + 'd' }) + T(ox + 150, oy + 46, 'd (cánh tay đòn)', { size: 13, bold: true, italic: true });
    b += T(190, 30, 'M = F · d', { size: 20, bold: true, color: '#1d4ed8' }) + T(190, 54, 'F càng lớn, d càng lớn thì tác dụng làm quay càng lớn', { size: 12, color: C.muted });
    return wrap(500, 214, b, 'Moment lực làm quay đai ốc quanh trục O');
  }
  /* Đòn bẩy: lever({ type: 1|2|3, d1, d2, f1: 'F₁', f2: 'F₂', ratio: d1/d2 (loại 1, đặt điểm tựa đúng tỉ lệ), title }) */
  function lever(o) {
    o = o || {}; var t = o.type || 1, id = 'lv' + (++uid), b = A(id, C.red, 8) + A(id + 'b', C.blue, 8) + A(id + 'd', C.ink, 6), y = 130, x0 = 60, x1 = 540;
    var O, xa, xb; // xa: điểm đặt lực tác dụng (F1), xb: điểm đặt vật (F2)
    if (t === 1) { xa = x1 - 10; xb = x0 + 10; O = o.ratio ? Math.round(xb + (xa - xb) / (1 + o.ratio)) : 360; } else if (t === 2) { O = x0 + 10; xa = x1 - 10; xb = 200; } else { O = x0 + 10; xa = 250; xb = x1 - 10; }
    b += R(x0, y - 6, x1 - x0, 12, { rx: 4, fill: '#d6a86c', stroke: '#78350f', sw: 2 }) + P('M' + O + ',' + (y + 6) + ' L' + (O - 22) + ',' + (y + 46) + ' L' + (O + 22) + ',' + (y + 46) + ' Z', { fill: '#94a3b8', stroke: '#334155', sw: 2 }) + T(O, y + 66, 'O', { size: 14, bold: true });
    b += R(xb - 26, y - 56, 52, 50, { rx: 4, fill: '#9ca3af', stroke: '#374151', sw: 2 }) + arw(xb, y + 6, xb, y + 70, id + 'b', C.blue, 3) + T(xb > 480 ? xb - 10 : xb + 10, y + 64, o.f2 || 'F₂', { size: 15, bold: true, color: C.blue, anchor: xb > 480 ? 'end' : 'start' });
    var up = t === 1 ? false : true;
    var fr = xa > 480, fx = fr ? xa - 10 : xa + 10, fa = fr ? 'end' : 'start';
    b += (up ? arw(xa, y - 6, xa, y - 76, id, C.red, 3) : arw(xa, y - 80, xa, y - 8, id, C.red, 3)) + T(fx, y - 60, o.f1 || 'F₁', { size: 15, bold: true, color: C.red, anchor: fa });
    var dy = y + 92;
    b += L(O, dy, xa, dy, { width: 1.4, marker: id + 'd', start: id + 'd', color: C.red }) + T((O + xa) / 2, dy - 6, 'd₁' + (o.d1 != null ? ' = ' + o.d1 : ''), { size: 13, bold: true, color: '#b91c1c' });
    b += L(O, dy + 26, xb, dy + 26, { width: 1.4, marker: id + 'd', start: id + 'd', color: C.blue }) + T((O + xb) / 2, dy + 20, 'd₂' + (o.d2 != null ? ' = ' + o.d2 : ''), { size: 13, bold: true, color: '#1d4ed8' });
    [O, xa, xb].forEach(function (x) { b += L(x, y + 8, x, dy + 30, { color: '#94a3b8', width: 1, dash: '3 3' }); });
    b += T(300, 22, o.title || ['', 'Đòn bẩy loại 1: điểm tựa O nằm giữa hai lực', 'Đòn bẩy loại 2: vật nằm giữa điểm tựa và lực tác dụng', 'Đòn bẩy loại 3: lực tác dụng nằm giữa điểm tựa và vật'][t], { size: 13, bold: true });
    return wrap(600, 262, b, 'Đòn bẩy');
  }
  /* ======================= KHTN 8 – Điện, Nhiệt ======================= */
  var SYMN = { cell: 'Nguồn điện (pin)', battery: 'Bộ pin (nguồn)', 'switch': 'Công tắc đóng', 'switch-open': 'Công tắc mở', lamp: 'Bóng đèn', resistor: 'Điện trở', ammeter: 'Ampe kế', voltmeter: 'Vôn kế', led: 'Điốt phát quang (LED)', fuse: 'Cầu chì', motor: 'Động cơ điện', wire: 'Dây nối' };
  function sym(k, x, y, closed) { // kí hiệu nằm ngang từ x đến x + 60 tại độ cao y
    var W = C.ink, b = '';
    if (k === 'cell' || k === 'battery') {
      var pl = function (px) { return L(px, y - 18, px, y + 18, { width: 2 }) + L(px + 9, y - 9, px + 9, y + 9, { width: 5 }); };
      if (k === 'cell') b += L(x, y, x + 25, y, { width: 2 }) + pl(x + 25) + L(x + 34, y, x + 60, y, { width: 2 });
      else b += L(x, y, x + 16, y, { width: 2 }) + pl(x + 16) + L(x + 25, y, x + 32, y, { width: 2, dash: '2 3' }) + pl(x + 32) + L(x + 41, y, x + 60, y, { width: 2 });
      b += T(x + (k === 'cell' ? 20 : 11), y - 22, '+', { size: 13, bold: true, color: C.red }) + T(x + (k === 'cell' ? 42 : 50), y - 22, '−', { size: 13, bold: true, color: C.blue });
    } else if (k === 'switch' || k === 'switch-open') {
      b += L(x, y, x + 16, y, { width: 2 }) + Ci(x + 18, y, 2.5, { fill: W }) + Ci(x + 42, y, 2.5, { fill: W }) + L(x + 44, y, x + 60, y, { width: 2 });
      b += k === 'switch' ? L(x + 18, y, x + 42, y - 2, { width: 2.5 }) : L(x + 18, y, x + 40, y - 16, { width: 2.5 });
    } else if (k === 'lamp') b += L(x, y, x + 16, y, { width: 2 }) + Ci(x + 30, y, 14, { stroke: W, sw: 2, fill: '#fff' }) + L(x + 20, y - 10, x + 40, y + 10, { width: 2 }) + L(x + 20, y + 10, x + 40, y - 10, { width: 2 }) + L(x + 44, y, x + 60, y, { width: 2 });
    else if (k === 'resistor') b += L(x, y, x + 12, y, { width: 2 }) + R(x + 12, y - 8, 36, 16, { stroke: W, sw: 2, fill: '#fff' }) + L(x + 48, y, x + 60, y, { width: 2 });
    else if (k === 'fuse') b += L(x, y, x + 12, y, { width: 2 }) + R(x + 12, y - 7, 36, 14, { stroke: W, sw: 2, fill: '#fff' }) + L(x + 12, y, x + 60, y, { width: 1.5 });
    else if (k === 'ammeter' || k === 'voltmeter' || k === 'motor') b += L(x, y, x + 16, y, { width: 2 }) + Ci(x + 30, y, 14, { stroke: W, sw: 2, fill: '#fff' }) + T(x + 30, y + 5, k === 'ammeter' ? 'A' : (k === 'voltmeter' ? 'V' : 'M'), { size: 14, bold: true }) + L(x + 44, y, x + 60, y, { width: 2 });
    else if (k === 'led') { b += L(x, y, x + 20, y, { width: 2 }) + P('M' + (x + 20) + ',' + (y - 10) + ' L' + (x + 38) + ',' + y + ' L' + (x + 20) + ',' + (y + 10) + ' Z', { fill: '#fff', stroke: W, sw: 2 }) + L(x + 38, y - 10, x + 38, y + 10, { width: 2 }) + L(x + 38, y, x + 60, y, { width: 2 }); b += L(x + 30, y - 12, x + 38, y - 22, { width: 1.4 }) + L(x + 36, y - 10, x + 44, y - 20, { width: 1.4 }); }
    else b += L(x, y, x + 60, y, { width: 2 });
    return b;
  }
  /* circuit({ items: ['cell','switch','lamp','ammeter'], voltmeter: 2, closed: true, arrows: true, labels: true, label }) */
  function circuit(o) {
    var it = o.items, n = it.length, nt = Math.ceil(n / 2), x0 = 60, x1 = 460, yt = 70, yb = 210, b = '', id = 'ci' + (++uid);
    b += A(id, C.red, 7);
    var place = function (list, y) {
      var seg = (x1 - x0) / list.length, s = '', pos = [];
      list.forEach(function (k, i) { var cx = x0 + seg * (i + 0.5), kk = (k === 'switch' && o.closed === false) ? 'switch-open' : k; s += L(x0 + seg * i, y, cx - 30, y, { width: 2 }) + sym(kk, cx - 30, y) + L(cx + 30, y, x0 + seg * (i + 1), y, { width: 2 }); pos.push(cx); if (o.labels) s += T(cx, y === yt ? y + 38 : y - 26, SYMN[kk] || kk, { size: 12, color: C.muted }); });
      return { s: s, pos: pos };
    };
    var top = place(it.slice(0, nt), yt), bot = place(it.slice(nt), yb);
    if (!it.slice(nt).length) b += L(x0, yb, x1, yb, { width: 2 });
    b += top.s + bot.s + L(x0, yt, x0, yb, { width: 2 }) + L(x1, yt, x1, yb, { width: 2 });
    if (o.voltmeter != null) {
      var vi = o.voltmeter, onTop = vi < nt, cx = onTop ? top.pos[vi] : bot.pos[vi - nt], y = onTop ? yt : yb, yy = onTop ? yt - 46 : yb + 60;
      b += Ci(cx - 36, y, 3, { fill: C.ink }) + Ci(cx + 36, y, 3, { fill: C.ink }) + P('M' + (cx - 36) + ',' + y + ' L' + (cx - 36) + ',' + yy + ' L' + (cx - 14) + ',' + yy + ' M' + (cx + 14) + ',' + yy + ' L' + (cx + 36) + ',' + yy + ' L' + (cx + 36) + ',' + y, { stroke: C.ink, sw: 2 }) + Ci(cx, yy, 14, { stroke: C.ink, sw: 2, fill: '#fff' }) + T(cx, yy + 5, 'V', { size: 14, bold: true });
    }
    if (o.arrows && o.closed !== false) b += arw(x0, 120, x0, 162, id, C.red, 2.5) + arw(x1, 162, x1, 120, id, C.red, 2.5) + T(x0 - 8, 146, 'I', { size: 15, bold: true, italic: true, color: C.red, anchor: 'end' });
    var H = (o.voltmeter != null && o.voltmeter >= nt) ? 290 : 262;
    return wrap(520, H, b, o.label || 'Sơ đồ mạch điện');
  }
  function circuitSymbols(o) {
    var ks = (o && o.items) || ['cell', 'battery', 'switch', 'switch-open', 'lamp', 'resistor', 'fuse', 'led', 'ammeter', 'voltmeter', 'motor', 'wire'], b = '';
    ks.forEach(function (k, i) { var cx = 20 + (i % 4) * 150, y = 40 + Math.floor(i / 4) * 86; b += sym(k, cx + 45, y) + T(cx + 75, y + 40, SYMN[k], { size: 12, bold: true }); });
    return wrap(620, 30 + Math.ceil(ks.length / 4) * 86, b, 'Kí hiệu một số bộ phận trong sơ đồ mạch điện');
  }
  /* Nhiễm điện: chargeScene('comb' | 'repel' | 'attract') */
  function chargeScene(kind) {
    var b = '';
    if (kind === 'comb') {
      b += R(60, 50, 200, 24, { rx: 4, fill: '#60a5fa', stroke: '#1d4ed8' }); for (var i = 0; i < 18; i++) b += L(68 + i * 10.5, 74, 68 + i * 10.5, 96, { color: '#1d4ed8', width: 3 });
      for (var j = 0; j < 7; j++) b += T(80 + j * 26, 66, '−', { size: 16, bold: true, color: '#fff' });
      var r = rnd(6); for (var k = 0; k < 16; k++) { var x = 70 + r() * 180, up = k < 6, y = up ? 104 + r() * 20 : 180 + r() * 16; b += R(x, y, 9, 6, { fill: '#fef9c3', stroke: '#a16207', sw: 1 }); }
      b += R(40, 200, 240, 6, { fill: '#d6a86c' });
      return labelled({ w: 470, h: 222, body: b, size: 12, label: 'Lược nhựa cọ xát hút các mẩu giấy vụn', labels: [[250, 62, 300, 50, 'Lược nhựa đã cọ xát\n(nhiễm điện âm)'], [200, 112, 300, 120, 'Giấy vụn bị hút lên'], [150, 190, 300, 186, 'Giấy vụn']] });
    }
    var att = kind === 'attract';
    b += L(40, 20, 400, 20, { width: 4, color: '#78350f' }) + L(180, 20, att ? 200 : 150, 150, { width: 1.5 }) + L(260, 20, att ? 240 : 290, 150, { width: 1.5 });
    b += Ci(att ? 200 : 150, 166, 18, { fill: '#fecaca', stroke: C.red }) + T(att ? 200 : 150, 172, '+', { size: 20, bold: true, color: C.red });
    b += Ci(att ? 240 : 290, 166, 18, { fill: att ? '#bfdbfe' : '#fecaca', stroke: att ? C.blue : C.red }) + T(att ? 240 : 290, 172, att ? '−' : '+', { size: 20, bold: true, color: att ? C.blue : C.red });
    b += T(220, 214, att ? 'Hai vật nhiễm điện khác loại: hút nhau' : 'Hai vật nhiễm điện cùng loại: đẩy nhau', { size: 13, bold: true });
    return wrap(440, 226, b, att ? 'Các vật nhiễm điện khác loại hút nhau' : 'Các vật nhiễm điện cùng loại đẩy nhau');
  }
  /* Chiều dòng điện và chiều dịch chuyển của electron */
  function currentDir() {
    var id = 'cd' + (++uid), b = A(id, C.red, 8) + A(id + 'e', C.blue, 7);
    b += R(40, 90, 480, 30, { rx: 15, fill: '#fde68a', stroke: '#b45309', sw: 2 });
    for (var i = 0; i < 9; i++) b += Ci(80 + i * 50, 105, 8, { fill: '#bfdbfe', stroke: C.blue, sw: 1.5 }) + T(80 + i * 50, 110, '−', { size: 14, bold: true, color: C.blue });
    b += arw(420, 146, 140, 146, id + 'e', C.blue, 2.5) + T(280, 170, 'Chiều dịch chuyển của các electron tự do', { size: 13, bold: true, color: '#1d4ed8' });
    b += arw(140, 62, 420, 62, id, C.red, 3) + T(280, 46, 'Quy ước chiều dòng điện: từ cực (+) qua dây dẫn tới cực (−)', { size: 13, bold: true, color: '#b91c1c' });
    b += T(26, 110, '+', { size: 22, bold: true, color: C.red }) + T(536, 110, '−', { size: 22, bold: true, color: C.blue });
    return wrap(560, 186, b, 'Chiều dòng điện trong dây dẫn kim loại');
  }
  /* Mặt đồng hồ đo: meter({ kind: 'A' | 'V', max: 1, step: 0.2, minor: 2, value: 0.6 }) */
  function meter(o) {
    o = o || {}; var max = o.max || 1, step = o.step || 0.2, minor = o.minor || 2, cx = 150, cy = 170, r = 110, b = '', a0 = 210, a1 = 330;
    var ang = function (v) { return (a0 + (a1 - a0) * v / max) * Math.PI / 180; };
    b += R(20, 30, 260, 190, { rx: 16, fill: '#f8fafc', stroke: '#334155', sw: 2.5 });
    var nT = Math.round(max / step * minor);
    for (var k = 0; k <= nT; k++) { var v = k * step / minor, a = ang(v), maj = k % minor === 0, r2 = maj ? r - 16 : r - 9; b += L(cx + r * Math.cos(a), cy + r * Math.sin(a), cx + r2 * Math.cos(a), cy + r2 * Math.sin(a), { width: maj ? 2 : 1.2 }); if (maj) b += T(cx + (r - 30) * Math.cos(a), cy + (r - 30) * Math.sin(a) + 4, num(Math.round(v * 1000) / 1000), { size: 12 }); }
    var av = ang(o.value || 0); b += L(cx, cy, cx + (r - 4) * Math.cos(av), cy + (r - 4) * Math.sin(av), { color: C.red, width: 2.5 }) + Ci(cx, cy, 6, { fill: C.ink });
    b += T(cx, cy + 36, o.kind === 'V' ? 'V' : 'A', { size: 22, bold: true, color: '#1d4ed8' });
    b += Ci(60, 206, 8, { fill: '#dc2626' }) + T(60, 211, '+', { size: 12, bold: true, color: '#fff' }) + Ci(240, 206, 8, { fill: '#111827' }) + T(240, 211, '−', { size: 12, bold: true, color: '#fff' });
    return wrap(300, 232, b, o.kind === 'V' ? 'Mặt vôn kế' : 'Mặt ampe kế');
  }
  /* Chuyển động của phân tử khi nhiệt độ khác nhau */
  function heatParticles() {
    var id = 'hp' + (++uid), b = A(id, '#475569', 5), r = rnd(12);
    [[40, '#dbeafe', 'Nước lạnh', 12], [300, '#fee2e2', 'Nước nóng', 30]].forEach(function (c) {
      b += beaker(c[0], 40, 200, 150, c[1], 130) + T(c[0] + 100, 214, c[2], { size: 13, bold: true });
      for (var i = 0; i < 14; i++) { var x = c[0] + 24 + r() * 150, y = 76 + r() * 96, a = r() * 6.28; b += Ci(x, y, 6, { fill: '#60a5fa', stroke: '#1e40af', sw: 1 }) + L(x + 7 * Math.cos(a), y + 7 * Math.sin(a), x + (7 + c[3]) * Math.cos(a), y + (7 + c[3]) * Math.sin(a), { color: '#475569', width: 1.4, marker: id }); }
    });
    b += T(270, 236, 'Nhiệt độ càng cao, các phân tử chuyển động càng nhanh, nội năng càng lớn', { size: 12, color: C.muted });
    return wrap(540, 248, b, 'Chuyển động nhiệt của các phân tử');
  }
  /* Đo năng lượng nhiệt bằng joulemeter */
  function joulemeter(o) {
    o = o || {}; var b = '';
    b += R(20, 60, 110, 80, { rx: 8, fill: '#e5e7eb', stroke: '#374151' }) + T(75, 96, 'Nguồn điện', { size: 12, bold: true }) + T(75, 116, '12 V', { size: 12, color: C.muted });
    b += R(180, 40, 170, 110, { rx: 10, fill: '#1e293b', stroke: '#0f172a' }) + R(196, 60, 138, 40, { rx: 4, fill: '#0f172a' }) + T(265, 88, o.reading || '12 450 J', { size: 20, bold: true, color: '#4ade80' }) + T(265, 128, 'JOULEMETER', { size: 12, bold: true, color: '#e5e7eb' });
    b += P('M130,90 L180,90 M130,110 L180,110', { stroke: '#dc2626', sw: 3 }) + P('M350,90 L430,90 L430,150 M350,110 L420,110 L420,150', { stroke: '#dc2626', sw: 3 });
    b += beaker(380, 150, 110, 100, '#bfdbfe', 80) + P('M420,150 L420,228 Q425,236 430,228 L430,150', { stroke: '#b91c1c', sw: 3 }) + P('M414,200 q8,6 16,0 q8,-6 16,0', { stroke: '#b91c1c', sw: 2 });
    b += R(462, 110, 10, 120, { rx: 5, fill: '#f8fafc', stroke: '#334155', sw: 1.5 }) + Ci(467, 232, 8, { fill: '#ef4444' }) + R(465, 170, 4, 60, { fill: '#ef4444' });
    return labelled({ w: 620, h: 270, body: b, size: 12, label: 'Đo năng lượng nhiệt cung cấp cho nước bằng joulemeter', labels: [[430, 216, 520, 250, 'Dây đốt nóng'], [470, 130, 520, 110, 'Nhiệt kế'], [400, 190, 330, 240, 'Nước']] });
  }
  /* Các hình thức truyền nhiệt: heatTransfer('dan' | 'doi-luu' | 'buc-xa') */
  function heatTransfer(kind) {
    var id = 'tr' + (++uid), b = A(id, C.red, 7), r;
    if (kind === 'doi-luu') {
      b += beaker(120, 30, 200, 170, '#dbeafe', 150) + lamp(220, 262, 1) + flame(220, 206, 0.9);
      b += P('M220,190 C220,120 220,90 220,70 C250,60 280,70 290,100 C300,140 290,170 260,180', { stroke: C.red, sw: 2.5 }).replace('/>', ' marker-end="url(#' + id + ')"/>') + P('M220,190 C220,120 220,90 220,70 C190,60 160,70 150,100 C140,140 150,170 180,180', { stroke: C.red, sw: 2.5 }).replace('/>', ' marker-end="url(#' + id + ')"/>');
      return labelled({ w: 550, h: 272, body: b, size: 12, label: 'Đối lưu trong chất lỏng', labels: [[220, 90, 350, 60, 'Nước nóng nhẹ hơn đi lên'], [292, 130, 350, 140, 'Nước lạnh nặng hơn đi xuống'], [220, 200, 350, 220, 'Đun ở đáy cốc']] });
    }
    if (kind === 'buc-xa') {
      b += sunIcon(80, 110, 36);
      for (var i = -2; i <= 2; i++) b += arw(130, 110 + i * 26, 300, 110 + i * 40, id, '#f59e0b', 2.5);
      b += Ci(380, 120, 64, { fill: '#bfdbfe', stroke: '#1d4ed8' }) + P('M340,80 q30,-10 50,10 q20,20 -10,40 q-20,14 -30,-10 Z', { fill: '#86efac', stroke: '#15803d', sw: 1.5 }) + T(380, 212, 'Trái Đất', { size: 13, bold: true }) + T(80, 176, 'Mặt Trời', { size: 13, bold: true });
      b += T(230, 226, 'Bức xạ nhiệt truyền được cả trong chân không', { size: 13, bold: true, color: '#b45309' });
      return wrap(470, 240, b, 'Bức xạ nhiệt');
    }
    b += R(60, 90, 360, 18, { rx: 4, fill: '#cbd5e1', stroke: '#475569' }) + lamp(420, 200, 1) + flame(420, 146, 0.9) + R(20, 60, 40, 100, { fill: '#78350f' });
    r = [100, 160, 220, 280, 340]; r.forEach(function (x, i) { b += (i >= 3 ? P('M' + x + ',116 l-5,10 l10,0 Z', { fill: '#fde68a', stroke: '#a16207', sw: 1 }) + L(x, 126, x, 150 + i * 6, { color: '#a16207', width: 1.4, dash: '3 3' }) : E(x, 114, 5, 7, { fill: '#fde68a', stroke: '#a16207', sw: 1.2 })) + L(x, 108, x, 124, { color: '#57534e', width: 1.6 }); });
    b += arw(390, 70, 120, 70, id, C.red, 2.5) + T(255, 56, 'Nhiệt truyền dọc thanh kim loại từ đầu nóng sang đầu lạnh', { size: 12, bold: true, color: '#b91c1c' });
    b += T(240, 200, 'Các đinh gắn sáp gần ngọn lửa rơi trước', { size: 12, color: C.muted });
    return wrap(480, 214, b, 'Dẫn nhiệt trong thanh kim loại');
  }
  /* Sự nở vì nhiệt: expansion('ring' | 'liquid' | 'gas' | 'rail' | 'bimetal') */
  function expansion(kind) {
    var b = '', id = 'ex' + (++uid);
    b += A(id, C.muted, 7);
    if (kind === 'ring') {
      [[110, 'Chưa hơ nóng: quả cầu lọt qua vòng', 26], [340, 'Hơ nóng quả cầu: không lọt qua', 32]].forEach(function (c) { b += Ci(c[0], 80, 34, { stroke: '#475569', sw: 7 }) + L(c[0], 114, c[0], 150, { color: '#475569', width: 5 }) + L(c[0], 40, c[0], 130 - c[2] * 2.2 - 40, { color: '#57534e', width: 2 }) + Ci(c[0], 130 - c[2], c[2], { fill: c[2] > 30 ? '#fca5a5' : '#cbd5e1', stroke: '#475569' }) + T(c[0], 196, c[1], { size: 12, bold: true }); });
      return wrap(460, 210, b, 'Quả cầu kim loại nở ra khi nóng lên');
    }
    if (kind === 'liquid' || kind === 'gas') {
      [[110, false], [330, true]].forEach(function (c) {
        var x = c[0];
        if (c[1]) b += beaker(x - 80, 110, 160, 90, '#fecaca', 60);
        b += P('M' + (x - 8) + ',30 L' + (x - 8) + ',110 L' + (x - 40) + ',160 A40,30 0 0 0 ' + (x + 40) + ',160 L' + (x + 8) + ',110 L' + (x + 8) + ',30', { fill: kind === 'liquid' ? '#bfdbfe' : '#f8fafc', stroke: '#334155', sw: 2 });
        if (kind === 'liquid') b += R(x - 3, c[1] ? 50 : 80, 6, c[1] ? 70 : 40, { fill: '#2563eb' }) + P('M' + (x - 10) + ',112 L' + (x + 10) + ',112', { stroke: '#334155', sw: 1 });
        else b += P('M' + (x - 8) + ',30 C' + (x - 8 - (c[1] ? 30 : 8)) + ',' + (c[1] ? -10 : 18) + ' ' + (x + 8 + (c[1] ? 30 : 8)) + ',' + (c[1] ? -10 : 18) + ' ' + (x + 8) + ',30', { fill: '#fda4af', stroke: '#be123c', sw: 1.5 });
        b += T(x, 222, c[1] ? 'Nhúng bình vào nước nóng' : 'Ban đầu', { size: 12, bold: true });
      });
      b += arw(180, 120, 260, 120, id, C.muted, 3);
      b += T(220, 244, kind === 'liquid' ? 'Chất lỏng nở ra, mực chất lỏng trong ống dâng lên' : 'Không khí trong bình nở ra làm quả bóng phồng lên', { size: 12, color: '#1d4ed8', bold: true });
      return wrap(440, 256, b, kind === 'liquid' ? 'Sự nở vì nhiệt của chất lỏng' : 'Sự nở vì nhiệt của chất khí');
    }
    if (kind === 'bimetal') {
      b += R(40, 60, 300, 12, { fill: '#b45309' }) + R(40, 72, 300, 12, { fill: '#94a3b8' }) + T(190, 50, 'Băng kép thẳng khi nguội (đồng ở trên, thép ở dưới)', { size: 12, bold: true });
      b += P('M40,170 Q190,150 330,110 L334,122 Q190,162 40,182 Z', { fill: '#b45309' }) + P('M40,182 Q190,162 334,122 L338,134 Q190,174 40,194 Z', { fill: '#94a3b8' }) + lamp(190, 262, 0.8) + flame(190, 210, 0.7);
      b += T(360, 130, 'Khi nóng: đồng nở nhiều hơn thép', { size: 12, bold: true, anchor: 'start' }) + T(360, 148, '→ băng kép cong về phía thép', { size: 12, anchor: 'start' });
      return wrap(600, 272, b, 'Băng kép bị cong khi nóng lên');
    }
    b += R(20, 110, 250, 18, { fill: '#94a3b8', stroke: '#334155' }) + R(290, 110, 250, 18, { fill: '#94a3b8', stroke: '#334155' }) + R(10, 128, 540, 14, { fill: '#78350f' });
    for (var i = 0; i < 6; i++) b += R(30 + i * 90, 142, 40, 14, { fill: '#a16207' });
    b += L(270, 80, 270, 104, { width: 1.3 }) + L(290, 80, 290, 104, { width: 1.3 }) + T(280, 70, 'Khe hở', { size: 13, bold: true });
    b += T(280, 190, 'Để khe hở giữa hai đầu thanh ray để ray nở ra khi trời nóng mà không bị cong', { size: 12, color: C.muted });
    return wrap(560, 204, b, 'Khe hở giữa hai thanh ray');
  }
  /* ======================= KHTN 8 – Sinh học cơ thể người, Sinh thái ======================= */
  var ORG = { // [nhãn, bên chú thích 'L'|'R', điểm neo x, y]
    'nao': ['Não', 'R', 214, 50], 'tuyen-yen': ['Tuyến yên', 'L', 198, 66], 'tuyen-giap': ['Tuyến giáp', 'R', 206, 112], 'khi-quan': ['Khí quản', 'L', 200, 128], 'thuc-quan': ['Thực quản', 'R', 209, 140],
    'phoi': ['Phổi', 'L', 168, 172], 'tim': ['Tim', 'R', 212, 192], 'gan': ['Gan', 'L', 176, 226], 'da-day': ['Dạ dày', 'R', 230, 226], 'tuy': ['Tuỵ', 'R', 222, 250], 'than': ['Thận', 'L', 178, 262], 'tuyen-tren-than': ['Tuyến trên thận', 'R', 222, 246],
    'ruot-non': ['Ruột non', 'R', 212, 288], 'ruot-gia': ['Ruột già', 'L', 170, 290], 'bang-quang': ['Bóng đái (bàng quang)', 'R', 206, 322], 'ong-dan-tieu': ['Ống dẫn nước tiểu', 'L', 186, 294], 'tuyen-sinh-duc': ['Tuyến sinh dục', 'L', 192, 342], 'tuy-song': ['Tuỷ sống', 'L', 200, 150] };
  function humanBody(o) {
    o = o || {}; var os = o.organs || ['nao', 'phoi', 'tim', 'gan', 'da-day', 'ruot-non', 'ruot-gia', 'than', 'bang-quang'], has = function (k) { return os.indexOf(k) >= 0; }, b = '';
    b += P('M200,96 L200,110 M140,118 Q200,100 260,118 L268,230 L286,320 L272,326 L256,250 L252,330 Q200,350 148,330 L144,250 L128,326 L114,320 L132,230 Z', { fill: '#fde7d4', stroke: '#c08457', sw: 2 });
    b += Ci(200, 60, 38, { fill: '#fde7d4', stroke: '#c08457', sw: 2 });
    if (has('nao')) b += E(200, 52, 27, 20, { fill: '#f9a8d4', stroke: '#be185d', sw: 1.5 }) + P('M180,50 q10,-8 20,0 q10,8 20,0', { stroke: '#be185d', sw: 1.2 });
    if (has('tuy-song')) b += L(200, 72, 200, 300, { color: '#eab308', width: 5 });
    if (has('tuyen-yen')) b += Ci(198, 66, 4, { fill: '#7c3aed' });
    if (has('khi-quan')) b += R(196, 100, 8, 54, { rx: 3, fill: '#bae6fd', stroke: '#0369a1', sw: 1.2 }) + P('M200,150 L180,160 M200,150 L220,160', { stroke: '#0369a1', sw: 3 });
    if (has('thuc-quan')) b += P('M206,100 L210,200 L222,214', { stroke: '#f59e0b', sw: 4 });
    if (has('tuyen-giap')) b += E(194, 112, 6, 5, { fill: '#a855f7' }) + E(206, 112, 6, 5, { fill: '#a855f7' });
    if (has('phoi')) b += P('M196,146 C170,140 150,170 152,212 L192,212 Z', { fill: '#fda4af', stroke: '#be123c', sw: 1.5 }) + P('M204,146 C230,140 250,170 248,212 L208,212 Z', { fill: '#fda4af', stroke: '#be123c', sw: 1.5 });
    if (has('tim')) b += P('M208,204 C190,190 196,176 206,182 C214,174 226,186 208,204 Z', { fill: '#dc2626', stroke: '#7f1d1d', sw: 1.2 });
    if (has('ruot-gia')) b += P('M170,312 L168,262 L234,262 L236,312', { stroke: '#a16207', sw: 10 });
    if (has('ruot-non')) b += P('M186,272 q14,-8 28,0 q8,8 -4,14 q-14,6 -24,0 q-8,6 4,14 q14,6 26,0 q8,6 -4,12', { stroke: '#f472b6', sw: 5 });
    if (has('gan')) b += P('M150,218 Q180,206 212,220 Q200,240 160,242 Z', { fill: '#92400e', stroke: '#451a03', sw: 1.2 });
    if (has('da-day')) b += P('M214,214 C240,204 256,222 246,242 C238,254 220,248 222,236 C224,228 214,226 214,214 Z', { fill: '#fdba74', stroke: '#c2410c', sw: 1.4 });
    if (has('tuy')) b += E(214, 252, 16, 5, { fill: '#fde047', stroke: '#a16207', sw: 1.2 });
    if (has('than')) b += P('M170,252 C160,258 162,276 174,278 C180,272 176,262 182,258 C180,252 174,250 170,252 Z', { fill: '#b91c1c' }) + P('M230,252 C240,258 238,276 226,278 C220,272 224,262 218,258 C220,252 226,250 230,252 Z', { fill: '#b91c1c' });
    if (has('tuyen-tren-than')) b += P('M168,250 l6,-7 l6,7 Z M220,250 l6,-7 l6,7 Z', { fill: '#f59e0b' });
    if (has('ong-dan-tieu')) b += P('M178,276 L194,318 M222,276 L206,318', { stroke: '#ca8a04', sw: 2 });
    if (has('bang-quang')) b += E(200, 322, 13, 9, { fill: '#fde68a', stroke: '#a16207', sw: 1.4 });
    if (has('tuyen-sinh-duc')) b += E(190, 342, 5, 4, { fill: '#8b5cf6' }) + E(210, 342, 5, 4, { fill: '#8b5cf6' });
    var lb = [], yl = {}, yr = {};
    os.forEach(function (k) { var d = ORG[k]; if (!d) return; lb.push([d[2], d[3], d[1] === 'L' ? 120 : 280, d[3], d[0], d[1] === 'L' ? 'end' : 'start']); });
    lb.sort(function (a, b2) { return a[1] - b2[1]; });
    var lastL = -99, lastR = -99; lb.forEach(function (l) { if (l[5] === 'end') { if (l[3] < lastL + 20) l[3] = lastL + 20; lastL = l[3]; } else { if (l[3] < lastR + 20) l[3] = lastR + 20; lastR = l[3]; } });
    if (o.title) b += T(200, 446, o.title, { size: 13, bold: true, color: C.muted });
    return labelled({ w: 440, h: o.title ? 456 : 432, body: b, labels: lb, size: 12, label: o.title || 'Vị trí một số cơ quan trong cơ thể người' });
  }
  /* Cơ và xương khi co tay */
  function armMuscle() {
    var b = '';
    b += R(92, 30, 16, 180, { rx: 8, fill: '#f5f5f4', stroke: '#78716c', sw: 2 }) + P('M100,208 L250,140', { stroke: '#78716c', sw: 14 }) + P('M100,208 L250,140', { stroke: '#f5f5f4', sw: 10 }) + Ci(100, 208, 12, { fill: '#e7e5e4', stroke: '#78716c', sw: 2 });
    b += P('M110,40 C168,70 170,160 150,186 L158,184 L148,192 C130,190 118,150 112,120 C110,90 108,60 110,40 Z', { fill: '#f87171', stroke: '#b91c1c', sw: 2 }) + P('M150,186 L166,178', { stroke: '#e5e7eb', sw: 4 });
    b += P('M90,40 C76,80 76,170 88,218 L92,218 C92,160 92,90 92,40 Z', { fill: '#fecaca', stroke: '#b91c1c', sw: 2 });
    return labelled({ w: 520, h: 250, body: b, size: 12, label: 'Cơ và xương phối hợp khi co cẳng tay', labels: [[150, 110, 280, 72, 'Cơ hai đầu co: ngắn lại, phình to'], [80, 130, 20, 236, 'Cơ ba đầu dãn', 'start'], [100, 60, 280, 36, 'Xương cánh tay'], [200, 164, 280, 130, 'Xương cẳng tay'], [108, 214, 280, 210, 'Khớp khuỷu tay']] });
  }
  /* Cấu tạo xương dài */
  function boneLong() {
    var b = P('M120,30 C80,30 80,80 110,90 L110,250 C80,260 80,310 120,310 C140,300 160,300 180,310 C220,310 220,260 190,250 L190,90 C220,80 220,30 180,30 C160,40 140,40 120,30 Z', { fill: '#fef3c7', stroke: '#a16207', sw: 2 });
    b += R(126, 100, 48, 140, { fill: '#fde68a' }) + P('M100,50 Q150,26 200,50', { stroke: '#93c5fd', sw: 6 }) + P('M100,290 Q150,314 200,290', { stroke: '#93c5fd', sw: 6 });
    var r = rnd(8); for (var i = 0; i < 30; i++) b += Ci(110 + r() * 80, 44 + r() * 40, 2.2, { stroke: '#dc2626', sw: 1 });
    b += L(110, 90, 110, 250, { color: '#c2410c', width: 2.5 });
    return labelled({ w: 520, h: 330, body: b, size: 12, label: 'Cấu tạo của xương dài', labels: [[150, 38, 260, 24, 'Sụn đầu xương'], [160, 64, 260, 70, 'Mô xương xốp (chứa tuỷ đỏ)'], [150, 170, 260, 170, 'Khoang xương (chứa tuỷ)'], [184, 210, 260, 210, 'Mô xương cứng'], [110, 150, 40, 120, 'Màng xương', 'start']] });
  }
  /* Các tế bào máu */
  function bloodCells() {
    var b = '', r = rnd(3);
    for (var i = 0; i < 5; i++) { var x = 50 + (i % 3) * 40 + (i > 2 ? 20 : 0), y = 70 + (i > 2 ? 40 : 0); b += Ci(x, y, 17, { fill: '#ef4444', stroke: '#991b1b', sw: 1.5 }) + Ci(x, y, 7, { fill: '#f87171' }); }
    b += Ci(260, 86, 34, { fill: '#e9d5ff', stroke: '#7e22ce', sw: 2 }) + P('M244,80 q8,-14 18,-4 q10,-10 18,4 q-4,14 -18,8 q-14,8 -18,-8 Z', { fill: '#7e22ce' });
    for (var j = 0; j < 8; j++) b += E(410 + r() * 90, 60 + r() * 50, 5, 3, { fill: '#fbbf24', stroke: '#b45309', sw: 1, rot: r() * 180 });
    b += T(80, 156, 'Hồng cầu', { size: 13, bold: true }) + T(80, 176, 'vận chuyển O₂, CO₂', { size: 12, color: C.muted }) + T(80, 194, 'không nhân, lõm hai mặt', { size: 12, color: C.muted });
    b += T(260, 156, 'Bạch cầu', { size: 13, bold: true }) + T(260, 176, 'bảo vệ cơ thể', { size: 12, color: C.muted }) + T(260, 194, 'có nhân, kích thước lớn', { size: 12, color: C.muted });
    b += T(455, 156, 'Tiểu cầu', { size: 13, bold: true }) + T(455, 176, 'tham gia đông máu', { size: 12, color: C.muted }) + T(455, 194, 'mảnh tế bào nhỏ', { size: 12, color: C.muted });
    return wrap(540, 206, b, 'Các tế bào máu');
  }
  /* Cấu tạo tim (sơ đồ) */
  function heart() {
    var id = 'he' + (++uid), b = A(id, C.ink, 6);
    b += P('M200,60 C140,40 90,80 100,150 C110,220 170,260 210,300 C250,260 330,220 330,150 C340,80 280,40 220,60 Z', { fill: '#fecaca', stroke: '#7f1d1d', sw: 2.5 });
    b += R(120, 80, 80, 70, { rx: 14, fill: '#93c5fd', stroke: '#1e3a8a', sw: 2 }) + R(220, 80, 90, 70, { rx: 14, fill: '#fca5a5', stroke: '#7f1d1d', sw: 2 });
    b += P('M122,160 L200,160 L204,260 C170,230 130,200 122,160 Z', { fill: '#93c5fd', stroke: '#1e3a8a', sw: 2 }) + P('M220,160 L312,160 C306,210 260,240 214,280 Z', { fill: '#f87171', stroke: '#7f1d1d', sw: 4 });
    b += P('M140,150 l10,10 l10,-10 M250,150 l10,10 l10,-10', { stroke: '#fff', sw: 2.5 });
    b += T(160, 118, 'Tâm nhĩ phải', { size: 11, bold: true }) + T(265, 118, 'Tâm nhĩ trái', { size: 11, bold: true }) + T(172, 212, 'Tâm thất phải', { size: 11, bold: true }) + T(264, 186, 'Tâm thất trái', { size: 11, bold: true });
    b += R(150, 20, 20, 60, { fill: '#60a5fa' }) + R(240, 14, 22, 66, { fill: '#ef4444' }) + R(196, 24, 18, 50, { fill: '#818cf8' });
    return labelled({ w: 560, h: 312, body: b, size: 12, label: 'Cấu tạo trong của tim (sơ đồ)', labels: [[150, 30, 110, 40, 'Tĩnh mạch chủ', 'end'], [250, 24, 350, 24, 'Động mạch chủ'], [205, 40, 350, 60, 'Động mạch phổi'], [150, 160, 86, 172, 'Van tim', 'end'], [300, 200, 350, 230, 'Thành tâm thất trái dày nhất']] });
  }
  /* Nơron */
  function neuron() {
    var b = '', r = rnd(5);
    for (var i = 0; i < 7; i++) { var a = 1.6 + i * 0.5, x2 = 90 + 70 * Math.cos(a), y2 = 120 + 70 * Math.sin(a); b += P('M90,120 Q' + n2(90 + 40 * Math.cos(a + 0.2)) + ',' + n2(120 + 40 * Math.sin(a + 0.2)) + ' ' + n2(x2) + ',' + n2(y2) + ' m0,0 l' + n2(10 * Math.cos(a + 0.6)) + ',' + n2(10 * Math.sin(a + 0.6)), { stroke: '#7c3aed', sw: 3 }); }
    b += Ci(90, 120, 26, { fill: '#ddd6fe', stroke: '#6d28d9', sw: 2 }) + Ci(90, 120, 9, { fill: '#6d28d9' }) + L(116, 120, 460, 120, { color: '#6d28d9', width: 4 });
    for (var k = 0; k < 5; k++) b += R(140 + k * 62, 110, 48, 20, { rx: 10, fill: '#fef3c7', stroke: '#d97706', sw: 1.5 });
    [-20, 0, 20].forEach(function (d) { b += P('M460,120 L500,' + (120 + d) + ' ', { stroke: '#6d28d9', sw: 2.5 }) + Ci(502, 120 + d, 5, { fill: '#a78bfa', stroke: '#6d28d9', sw: 1.5 }); });
    return labelled({ w: 560, h: 220, body: b, size: 12, label: 'Cấu tạo của một nơron', labels: [[60, 70, 40, 30, 'Sợi nhánh', 'start'], [90, 124, 60, 196, 'Thân (chứa nhân)', 'start'], [300, 120, 300, 60, 'Sợi trục', 'middle'], [226, 128, 220, 176, 'Bao myelin', 'middle'], [502, 140, 480, 196, 'Cúc xináp', 'middle']] });
  }
  /* Cấu tạo mắt */
  function eyeSection() {
    var b = Ci(250, 140, 100, { fill: '#f8fafc', stroke: '#475569', sw: 3 }) + P('M168,84 Q128,140 168,196', { fill: '#e0f2fe', stroke: '#0284c7', sw: 2.5 });
    b += P('M250,40 A100,100 0 0 1 250,240', { stroke: '#dc2626', sw: 6 }) + P('M180,96 L180,126 M180,154 L180,184', { stroke: '#7c2d12', sw: 7 }) + E(200, 140, 14, 34, { fill: '#bfdbfe', stroke: '#1d4ed8', sw: 2 });
    b += P('M346,120 L420,110 L420,170 L346,160', { fill: '#fde68a', stroke: '#a16207', sw: 2 }) + Ci(345, 140, 6, { fill: '#facc15' });
    return labelled({ w: 600, h: 280, body: b, size: 12, label: 'Cấu tạo cầu mắt (cắt dọc)', labels: [[150, 140, 60, 140, 'Giác mạc', 'end'], [180, 110, 120, 50, 'Mống mắt', 'end'], [180, 140, 110, 250, 'Đồng tử', 'end'], [206, 150, 260, 262, 'Thể thuỷ tinh', 'middle'], [268, 120, 300, 20, 'Dịch thuỷ tinh', 'middle'], [340, 90, 430, 60, 'Màng lưới'], [345, 140, 440, 144, 'Điểm vàng'], [420, 160, 440, 210, 'Dây thần kinh thị giác']] });
  }
  /* Tật khúc xạ: eyeFocus('normal' | 'can' | 'vien', { lens: true }) */
  function eyeFocus(kind, o) {
    o = o || {}; var b = '', f = kind === 'can' ? 250 : (kind === 'vien' ? 350 : 300), lens = o.lens && kind !== 'normal';
    b += E(250, 120, 60, 60, { stroke: '#475569', sw: 2.5 }) + E(206, 120, 8, 26, { fill: '#bfdbfe', stroke: '#1d4ed8', sw: 1.5 }) + P('M300,82 A60,60 0 0 1 300,158', { stroke: '#dc2626', sw: 4 });
    var fx = lens ? 306 : f;
    [-20, 20].forEach(function (d) { b += L(40, 120 + d, 206, 120 + d, { color: '#f59e0b', width: 2 }) + L(206, 120 + d, fx, 120, { color: '#f59e0b', width: 2 }); if (fx < 306) b += L(fx, 120, 306, 120 - d * (306 - fx) / (fx - 206), { color: '#f59e0b', width: 1.5, dash: '4 3' }); });
    if (lens) b += kind === 'can' ? P('M110,86 Q124,120 110,154 L130,154 Q116,120 130,86 Z', { fill: '#e0f2fe', stroke: '#0369a1', sw: 1.5 }) : P('M120,86 Q104,120 120,154 Q136,120 120,86 Z', { fill: '#e0f2fe', stroke: '#0369a1', sw: 1.5 });
    b += Ci(fx, 120, 4, { fill: C.red });
    var t = kind === 'can' ? (lens ? 'Cận thị: đeo kính phân kì, ảnh hiện đúng màng lưới' : 'Cận thị: ảnh hiện trước màng lưới') : (kind === 'vien' ? (lens ? 'Viễn thị: đeo kính hội tụ, ảnh hiện đúng màng lưới' : 'Viễn thị: ảnh hiện sau màng lưới') : 'Mắt bình thường: ảnh hiện đúng trên màng lưới');
    b += T(200, 210, t, { size: 13, bold: true });
    return wrap(400, 222, b, t);
  }
  /* Cấu tạo tai (sơ đồ) */
  function earSection() {
    var b = P('M60,60 C20,70 20,170 70,190 C90,170 70,150 90,130 L200,130 L200,150 L90,150', { fill: '#fde7d4', stroke: '#c08457', sw: 2.5 });
    b += L(200, 110, 200, 170, { color: '#be123c', width: 4 }) + P('M206,140 l14,-10 l14,6 l12,-8', { stroke: '#78716c', sw: 4 });
    b += P('M270,140 C270,110 310,110 310,140 C310,160 286,162 286,142 C286,130 298,130 298,140', { stroke: '#7c3aed', sw: 5 }) + P('M310,140 L380,120', { stroke: '#eab308', sw: 4 });
    return labelled({ w: 560, h: 230, body: b, size: 12, label: 'Cấu tạo của tai (sơ đồ)', labels: [[50, 110, 30, 210, 'Vành tai', 'start'], [150, 140, 150, 40, 'Ống tai', 'middle'], [200, 120, 230, 70, 'Màng nhĩ'], [232, 134, 250, 196, 'Chuỗi xương tai', 'middle'], [300, 128, 330, 70, 'Ốc tai'], [370, 124, 400, 170, 'Dây thần kinh thính giác']] });
  }
  /* Cấu tạo da */
  function skinSection() {
    var b = R(40, 40, 360, 30, { fill: '#fcd9b6' }) + R(40, 70, 360, 110, { fill: '#fbe4d0' }) + R(40, 180, 360, 50, { fill: '#fef3c7' });
    b += P('M40,40 Q100,34 160,40 T280,40 T400,40', { stroke: '#c08457', sw: 2 });
    for (var i = 0; i < 9; i++) b += Ci(60 + i * 40, 205, 12, { fill: '#fde68a', stroke: '#eab308', sw: 1 });
    b += P('M120,150 L118,20', { stroke: '#44403c', sw: 3 }) + E(120, 156, 8, 12, { fill: '#e7c9a0', stroke: '#78350f', sw: 1.5 }) + E(134, 110, 8, 6, { fill: '#fde047', stroke: '#a16207', sw: 1.2 });
    b += P('M250,40 L250,130 C236,136 236,150 250,150 C264,150 264,136 250,130', { stroke: '#0284c7', sw: 2.5 }) + P('M40,170 Q140,150 220,172 T400,166', { stroke: '#dc2626', sw: 3 }) + Ci(330, 90, 6, { fill: '#a855f7' }) + L(330, 96, 350, 150, { color: '#a855f7', width: 1.5 });
    return labelled({ w: 580, h: 250, body: b, size: 12, label: 'Cấu tạo của da', labels: [[380, 55, 420, 40, 'Lớp biểu bì'], [380, 120, 420, 96, 'Lớp bì'], [380, 205, 420, 206, 'Lớp mỡ dưới da'], [119, 30, 150, 20, 'Lông'], [134, 110, 160, 90, 'Tuyến nhờn'], [256, 142, 290, 176, 'Tuyến mồ hôi', 'start'], [330, 90, 420, 130, 'Thụ quan'], [200, 166, 440, 166, 'Mạch máu']] });
  }
  /* Lưới thức ăn: foodWeb({ nodes: [{ id, label, x, y, level: 0|1|2|3|'d' }], links: [['co','tho']], w, h }) – mũi tên từ sinh vật bị ăn → sinh vật ăn */
  var LVL = { 0: ['#dcfce7', '#16a34a'], 1: ['#fef9c3', '#ca8a04'], 2: ['#ffedd5', '#ea580c'], 3: ['#fee2e2', '#dc2626'], d: ['#e7e5e4', '#78716c'] };
  function foodWeb(o) {
    var id = 'fw' + (++uid), b = A(id, '#475569', 7), N = {}, W = o.w || 600, H = o.h || 320;
    o.nodes.forEach(function (n) { N[n.id] = n; n.bw = Math.max(70, n.label.length * 7.6 + 18); });
    o.links.forEach(function (l) { var a = N[l[0]], c = N[l[1]], dx = c.x - a.x, dy = c.y - a.y, len = Math.sqrt(dx * dx + dy * dy); var ka = Math.min(a.bw / 2 / Math.abs(dx || 1e-9), 17 / Math.abs(dy || 1e-9)), kc = Math.min(c.bw / 2 / Math.abs(dx || 1e-9), 17 / Math.abs(dy || 1e-9)); b += arw(a.x + dx * ka + dx / len * 2, a.y + dy * ka + dy / len * 2, c.x - dx * kc - dx / len * 4, c.y - dy * kc - dy / len * 4, id, '#475569', 1.8); });
    o.nodes.forEach(function (n) { var f = LVL[n.level] || LVL[1]; b += R(n.x - n.bw / 2, n.y - 16, n.bw, 32, { rx: 10, fill: f[0], stroke: f[1], sw: 2 }) + T(n.x, n.y + 5, n.label, { size: 13, bold: true }); });
    if (o.legend !== false) { var lg = [[0, 'Sinh vật sản xuất'], [1, 'Tiêu thụ bậc 1'], [2, 'Tiêu thụ bậc 2'], [3, 'Tiêu thụ bậc 3'], ['d', 'Sinh vật phân giải']].filter(function (x) { return o.nodes.some(function (n) { return n.level === x[0]; }); }); lg.forEach(function (x, i) { var f = LVL[x[0]]; b += R(10 + i * 118, H - 22, 14, 14, { rx: 3, fill: f[0], stroke: f[1], sw: 1.5 }) + T(28 + i * 118, H - 10, x[1], { size: 11, anchor: 'start' }); }); }
    return wrap(W, H, b, o.label || 'Lưới thức ăn');
  }
  /* Chuỗi thức ăn: foodChain({ items: ['Cỏ', 'Châu chấu', 'Ếch', 'Rắn'] }) */
  function foodChain(o) {
    var it = o.items, n = it.length, gap = 36, bw = Math.max.apply(null, it.map(function (s) { return s.length * 7.6 + 22; }).concat([84])), W = n * bw + (n - 1) * gap + 20, id = 'fc' + (++uid), b = A(id, '#475569', 7);
    it.forEach(function (s, i) { var x = 10 + i * (bw + gap), f = LVL[i > 3 ? 3 : i]; b += R(x, 14, bw, 40, { rx: 12, fill: f[0], stroke: f[1], sw: 2 }) + T(x + bw / 2, 39, s, { size: 13, bold: true }); if (i < n - 1) b += arw(x + bw + 3, 34, x + bw + gap - 4, 34, id, '#475569', 2.2); });
    return wrap(W, 68, b, o.label || 'Chuỗi thức ăn');
  }
  /* Tháp sinh thái: pyramid({ levels: [{ label, value }], title, unit }) – bậc thấp nhất đặt ở dưới */
  function ecoPyramid(o) {
    var lv = o.levels, n = lv.length, H = 60 + n * 46, W = 560, max = Math.max.apply(null, lv.map(function (l) { return l.value || 1; })), b = '';
    lv.forEach(function (l, i) { var w = o.equal ? 440 - i * (360 / n) : Math.max(90, 440 * Math.sqrt((l.value || 1) / max), (l.label.length + 12) * 7.4), y = H - 30 - (i + 1) * 46, f = LVL[i > 3 ? 3 : i]; b += R(W / 2 - w / 2, y, w, 40, { rx: 4, fill: f[0], stroke: f[1], sw: 2 }) + T(W / 2, y + 25, l.label + (l.value != null ? ': ' + num(l.value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (o.unit ? ' ' + o.unit : '') : ''), { size: 13, bold: true }); });
    if (o.title) b += T(W / 2, H - 8, o.title, { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Tháp sinh thái');
  }
  /* Giới hạn sinh thái: toleranceRange({ name: 'cá rô phi', min: 5.6, max: 42, lo: 20, hi: 35, unit: '°C' }) */
  function toleranceRange(o) {
    o = o || {}; var mn = o.min != null ? o.min : 5.6, mx = o.max != null ? o.max : 42, lo = o.lo != null ? o.lo : 20, hi = o.hi != null ? o.hi : 35, u = o.unit || '°C', W = 600, x0 = 50, x1 = 560, yb = 200;
    var span = mx - mn, X = function (v) { return x0 + 30 + (v - mn) / span * (x1 - x0 - 60); }, id = 'tl' + (++uid), b = A(id, C.ink, 7), pts = [];
    for (var i = 0; i <= 40; i++) { var v = mn + span * i / 40, t = (v - mn) / span; pts.push([X(v), yb - 150 * Math.pow(Math.sin(Math.PI * t), 1.4)]); }
    b += R(X(mn), 40, X(lo) - X(mn), yb - 40, { fill: '#fef9c3' }) + R(X(hi), 40, X(mx) - X(hi), yb - 40, { fill: '#fef9c3' }) + R(X(lo), 40, X(hi) - X(lo), yb - 40, { fill: '#dcfce7' }) + P(polyPath(pts), { stroke: '#16a34a', sw: 3 });
    b += L(x0, yb, x1 + 20, yb, { width: 1.8, marker: id }) + L(x0, yb, x0, 30, { width: 1.8, marker: id }) + T(x1 + 20, yb + 22, u, { size: 13, bold: true, anchor: 'end' }) + T(x0 + 8, 26, 'Mức độ sinh trưởng', { size: 12, bold: true, anchor: 'start' });
    [[mn, 'Giới hạn dưới'], [lo, ''], [hi, ''], [mx, 'Giới hạn trên']].forEach(function (p) { b += L(X(p[0]), yb, X(p[0]), yb + 6, { width: 1.5 }) + T(X(p[0]), yb + 22, num(p[0]), { size: 13, bold: true }) + (p[1] ? T(X(p[0]), yb + 40, p[1], { size: 12, color: '#b91c1c', bold: true }) : ''); });
    b += T((X(lo) + X(hi)) / 2, 150, 'Khoảng thuận lợi', { size: 13, bold: true, color: '#166534' }) + [[mn, lo], [hi, mx]].map(function (r) { var cx = (X(r[0]) + X(r[1])) / 2; return T(cx, 62, 'Khoảng', { size: 12, bold: true, color: '#a16207' }) + T(cx, 78, 'chống chịu', { size: 12, bold: true, color: '#a16207' }); }).join('');
    b += T(W / 2, yb + 64, 'Giới hạn sinh thái về nhiệt độ của ' + (o.name || 'cá rô phi ở Việt Nam'), { size: 13, bold: true });
    return wrap(W, yb + 76, b, 'Giới hạn sinh thái');
  }
  /* Tháp tuổi: ageStructure() – ba dạng phát triển, ổn định, suy thoái */
  function ageStructure() {
    var b = '', D = [['Dạng phát triển', [60, 36, 14]], ['Dạng ổn định', [44, 40, 24]], ['Dạng suy thoái', [30, 40, 34]]], cols = ['#86efac', '#fde047', '#fca5a5'];
    D.forEach(function (d, j) { var cx = 110 + j * 200; d[1].forEach(function (v, i) { var w = v * 2.6, y = 170 - (i + 1) * 40; b += R(cx - w / 2, y, w, 38, { rx: 3, fill: cols[i], stroke: '#475569', sw: 1.2 }); }); b += T(cx, 196, d[0], { size: 13, bold: true }); });
    [['#86efac', 'Nhóm tuổi trước sinh sản'], ['#fde047', 'Nhóm tuổi sinh sản'], ['#fca5a5', 'Nhóm tuổi sau sinh sản']].forEach(function (x, i) { b += R(20 + i * 196, 214, 14, 14, { rx: 3, fill: x[0], stroke: '#475569', sw: 1 }) + T(40 + i * 196, 226, x[1], { size: 12, anchor: 'start' }); });
    return wrap(620, 240, b, 'Các dạng tháp tuổi của quần thể');
  }
  /* Sinh quyển */
  function biosphere() {
    var b = R(10, 10, 600, 140, { fill: '#e0f2fe' }) + R(10, 150, 330, 110, { fill: '#d6a86c' }) + R(340, 150, 270, 110, { fill: '#60a5fa' }) + P('M10,150 Q120,120 230,146 T340,150', { fill: '#86efac', stroke: '#15803d', sw: 2 });
    b += L(120, 150, 120, 104, { color: '#78350f', width: 6 }) + Ci(120, 90, 26, { fill: '#22c55e', stroke: '#15803d' }) + P('M420,60 q10,-10 20,0 q10,-10 20,0', { stroke: '#1f2937', sw: 2.5 }) + P('M470,200 q20,-14 40,0 q-20,14 -40,0 Z M510,200 l12,-8 l0,16 Z', { fill: '#f97316', stroke: '#9a3412', sw: 1.2 });
    b += T(560, 40, 'Khí quyển (lớp dưới)', { size: 13, bold: true, anchor: 'end' }) + T(170, 230, 'Thạch quyển (lớp đất đá bề mặt)', { size: 13, bold: true }) + T(475, 246, 'Thuỷ quyển', { size: 13, bold: true, color: '#fff' });
    return wrap(620, 270, b, 'Sinh quyển gồm các phần của khí quyển, thuỷ quyển, thạch quyển có sinh vật sinh sống');
  }
  /* ======================= KHTN 9 – Năng lượng cơ học, Ánh sáng ======================= */
  var D2R = Math.PI / 180;
  function clipSeg(x1, y1, x2, y2, W, H, m) { // cắt đoạn thẳng theo khung [m, W−m] × [m, H−m] (Liang–Barsky)
    m = m == null ? 4 : m; var dx = x2 - x1, dy = y2 - y1, t0 = 0, t1 = 1, p = [-dx, dx, -dy, dy], q = [x1 - m, W - m - x1, y1 - m, H - m - y1];
    for (var i = 0; i < 4; i++) { if (p[i] === 0) { if (q[i] < 0) return null; } else { var t = q[i] / p[i]; if (p[i] < 0) { if (t > t1) return null; if (t > t0) t0 = t; } else { if (t < t0) return null; if (t < t1) t1 = t; } } }
    return [x1 + t0 * dx, y1 + t0 * dy, x1 + t1 * dx, y1 + t1 * dy];
  }
  function segC(x1, y1, x2, y2, W, H, o) { var c = clipSeg(x1, y1, x2, y2, W, H); return c ? L(c[0], c[1], c[2], c[3], o) : ''; }
  function midArrow(x1, y1, x2, y2, col, t) { // đầu mũi tên nhỏ ở giữa đoạn
    t = t == null ? 0.5 : t; var mx = x1 + (x2 - x1) * t, my = y1 + (y2 - y1) * t, a = Math.atan2(y2 - y1, x2 - x1), s = 7;
    return P('M' + n2(mx + s * Math.cos(a)) + ',' + n2(my + s * Math.sin(a)) + ' L' + n2(mx - s * Math.cos(a) + s * 0.7 * Math.sin(a)) + ',' + n2(my - s * Math.sin(a) - s * 0.7 * Math.cos(a)) + ' L' + n2(mx - s * Math.cos(a) - s * 0.7 * Math.sin(a)) + ',' + n2(my - s * Math.sin(a) + s * 0.7 * Math.cos(a)) + ' Z', { fill: col || C.red });
  }
  /* energyDrop({ m: 2, h: 5, points: [5, 3, 1, 0], title }) – vật rơi: thế năng chuyển hoá thành động năng, cơ năng không đổi */
  function energyDrop(o) {
    o = o || {}; var m = o.m || 1, h = o.h || 5, pts = o.points || [h, h * 0.6, h * 0.2, 0], Wm = 10 * m * h, W = 620, H = 300, y0 = 250, yT = 50, b = '';
    var Y = function (v) { return y0 - v / h * (y0 - yT); }, bx = 200, bw = 250;
    b += L(60, y0, 60, yT - 20, { width: 1.8 }) + L(40, y0, 150, y0, { width: 2.5, color: '#78350f' }) + T(66, yT - 22, 'h (m)', { size: 12, bold: true, anchor: 'start' }) + T(96, y0 + 18, 'Mặt đất (mốc thế năng)', { size: 11, color: C.muted });
    pts.forEach(function (v) {
      var y = Y(v), wt = 10 * m * v, wd = Wm - wt;
      b += L(55, y, 65, y, { width: 1.5 }) + T(50, y + 4, num(v), { size: 12, anchor: 'end' }) + Ci(105, v === 0 ? y - 11 : y, 11, { fill: '#f59e0b', stroke: '#92400e', sw: 1.5 });
      b += L(118, y, bx - 6, y, { color: '#cbd5e1', width: 1, dash: '3 3' });
      var w1 = wt / Wm * bw, w2 = wd / Wm * bw;
      if (w1 > 0) b += R(bx, y - 10, w1, 20, { fill: '#60a5fa', stroke: '#1d4ed8', sw: 1 });
      if (w2 > 0) b += R(bx + w1, y - 10, w2, 20, { fill: '#f87171', stroke: '#b91c1c', sw: 1 });
      b += T(bx + bw + 10, y + 4, 'Wt = ' + num(wt) + ' J; Wđ = ' + num(wd) + ' J', { size: 12, anchor: 'start' });
    });
    b += L(107, Y(pts[0]) + 16, 107, Y(pts[pts.length - 1]) - 26, { color: C.ink, width: 1.5, dash: '4 3' });
    b += R(bx, 12, 14, 12, { fill: '#60a5fa' }) + T(bx + 18, 22, 'Thế năng Wt', { size: 12, anchor: 'start' }) + R(bx + 120, 12, 14, 12, { fill: '#f87171' }) + T(bx + 138, 22, 'Động năng Wđ', { size: 12, anchor: 'start' }) + T(bx + 250, 22, 'Cơ năng W = ' + num(Wm) + ' J', { size: 12, bold: true, anchor: 'start' });
    b += T(W / 2, H - 8, o.title || ('Vật ' + num(m) + ' kg rơi từ độ cao ' + num(h) + ' m (bỏ qua sức cản không khí)'), { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Sự chuyển hoá thế năng thành động năng khi vật rơi');
  }
  /* pendulum() – con lắc đơn: vị trí A, O, B */
  function pendulum(o) {
    o = o || {}; var W = 600, H = 290, px = 300, py = 30, Lh = 190, a = 38 * D2R, b = '';
    var pos = [[-a, 'A'], [0, 'O'], [a, 'B']];
    b += R(240, 18, 120, 12, { fill: '#94a3b8' }) + P('M' + n2(px - Lh * Math.sin(a)) + ',' + n2(py + Lh * Math.cos(a)) + ' A' + Lh + ',' + Lh + ' 0 0 0 ' + n2(px + Lh * Math.sin(a)) + ',' + n2(py + Lh * Math.cos(a)), { stroke: '#94a3b8', sw: 1.5, dash: true });
    pos.forEach(function (p, i) { var x = px + Lh * Math.sin(p[0]), y = py + Lh * Math.cos(p[0]); b += L(px, py, x, y, { color: i === 1 ? '#475569' : '#94a3b8', width: 1.5, dash: i === 1 ? false : '4 3' }) + Ci(x, y, 14, { fill: '#f59e0b', stroke: '#92400e', sw: 1.5 }) + T(x, y + 5, p[1], { size: 13, bold: true }); });
    b += L(150, py + Lh + 16, 450, py + Lh + 16, { color: C.muted, width: 1, dash: '4 3' }) + T(455, py + Lh + 20, 'mốc thế năng', { size: 11, color: C.muted, anchor: 'start' });
    b += T(px - Lh * Math.sin(a) - 22, py + Lh * Math.cos(a) - 30, 'A: Wt lớn nhất\nWđ = 0', { size: 12, anchor: 'end', bold: true, color: '#1d4ed8' }) + T(px + Lh * Math.sin(a) + 22, py + Lh * Math.cos(a) - 30, 'B: Wt lớn nhất\nWđ = 0', { size: 12, anchor: 'start', bold: true, color: '#1d4ed8' }) + T(px, py + Lh + 42, 'O: Wđ lớn nhất, Wt nhỏ nhất', { size: 12, bold: true, color: '#b91c1c' });
    return wrap(W, H, b, 'Con lắc đơn dao động: động năng và thế năng chuyển hoá qua lại');
  }
  /* workForce({ F: 'F = 50 N', s: 's = 10 m' }) – lực kéo vật dịch chuyển: A = F·s */
  function workForce(o) {
    o = o || {}; var W = 600, H = 200, id = 'wf' + (++uid), b = A(id, C.red, 8) + A(id + 'b', C.blue, 7);
    b += L(30, 140, 570, 140, { width: 2.5, color: '#78350f' });
    b += R(70, 90, 70, 50, { rx: 4, fill: '#e2e8f0', stroke: '#94a3b8', sw: 1.5, dash: true }) + R(390, 90, 70, 50, { rx: 4, fill: '#fde68a', stroke: '#a16207', sw: 2 });
    b += L(460, 115, 540, 115, { color: C.red, width: 3, marker: id }) + T(500, 104, o.F || 'F', { size: 14, bold: true, color: C.red });
    b += L(105, 165, 425, 165, { color: C.blue, width: 2, marker: id + 'b', start: id + 'b' }) + T(265, 186, o.s || 's', { size: 14, bold: true, color: C.blue });
    b += L(105, 145, 105, 172, { color: C.blue, width: 1 }) + L(425, 145, 425, 172, { color: C.blue, width: 1 });
    b += T(265, 40, 'Công cơ học: A = F · s', { size: 15, bold: true }) + T(265, 62, '(lực F cùng hướng với chuyển động)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Lực F kéo vật dịch chuyển quãng đường s theo hướng của lực');
  }
  /* refraction({ i: 45, n1: 1, n2: 1.33, top: 'Không khí', bottom: 'Nước', reflect: false, values: true }) */
  function refraction(o) {
    o = o || {}; var na = o.n1 || 1, nb = o.n2 || 1.33, i = (o.i != null ? o.i : 45), W = 560, H = 300, cx = 280, cy = 150, Lr = 125, b = '', col = o.color || C.red;
    var s = na * Math.sin(i * D2R) / nb, tir = s > 1, r = tir ? null : Math.asin(s) / D2R;
    var water = function (nm) { return /nước|thuỷ tinh|kim cương/i.test(nm || ''); };
    b += R(0, 0, W, cy, { fill: water(o.top) ? '#bfdbfe' : '#f8fafc' }) + R(0, cy, W, H - cy, { fill: water(o.bottom || 'Nước') ? '#bfdbfe' : '#f8fafc' }) + L(0, cy, W, cy, { color: '#475569', width: 2 });
    b += L(cx, 12, cx, H - 12, { color: C.muted, width: 1.3, dash: '6 4' }) + T(cx + 6, 24, 'N', { size: 13, bold: true, anchor: 'start' }) + T(cx - 6, H - 14, "N'", { size: 13, bold: true, anchor: 'end' });
    var sx = cx - Lr * Math.sin(i * D2R), sy = cy - Lr * Math.cos(i * D2R);
    b += L(sx, sy, cx, cy, { color: col, width: 3 }) + midArrow(sx, sy, cx, cy, col) + T(sx - 6, sy - 4, 'S', { size: 14, bold: true, anchor: 'end' }) + T(cx - 8, cy + 18, 'I', { size: 14, bold: true, anchor: 'end' });
    b += P('M' + cx + ',' + (cy - 42) + ' A42,42 0 0 0 ' + n2(cx - 42 * Math.sin(i * D2R)) + ',' + n2(cy - 42 * Math.cos(i * D2R)), { stroke: '#0f766e', sw: 1.5 }) + T(cx - 58 * Math.sin(i * D2R / 2), cy - 58 * Math.cos(i * D2R / 2) + 5, 'i', { size: 14, bold: true, italic: true, color: '#0f766e' });
    if (o.reflect || tir) {
      var kx = cx + Lr * Math.sin(i * D2R), ky = cy - Lr * Math.cos(i * D2R);
      b += L(cx, cy, kx, ky, { color: col, width: tir ? 3 : 1.5, dash: tir ? false : '5 4' }) + midArrow(cx, cy, kx, ky, col, 0.6) + T(kx + 6, ky - 4, 'K', { size: 14, bold: true, anchor: 'start' });
      b += P('M' + cx + ',' + (cy - 42) + ' A42,42 0 0 1 ' + n2(cx + 42 * Math.sin(i * D2R)) + ',' + n2(cy - 42 * Math.cos(i * D2R)), { stroke: '#7c3aed', sw: 1.5 }) + T(cx + 58 * Math.sin(i * D2R / 2), cy - 58 * Math.cos(i * D2R / 2) + 5, "i'", { size: 14, bold: true, italic: true, color: '#7c3aed' });
    }
    if (!tir) {
      var rx = cx + Lr * Math.sin(r * D2R), ry = cy + Lr * Math.cos(r * D2R);
      b += L(cx, cy, rx, ry, { color: col, width: 3 }) + midArrow(cx, cy, rx, ry, col, 0.6) + T(rx + 6, ry + 4, 'R', { size: 14, bold: true, anchor: 'start' });
      b += P('M' + cx + ',' + (cy + 42) + ' A42,42 0 0 0 ' + n2(cx + 42 * Math.sin(r * D2R)) + ',' + n2(cy + 42 * Math.cos(r * D2R)), { stroke: '#b45309', sw: 1.5 }) + T(cx + 58 * Math.sin(r * D2R / 2), cy + 58 * Math.cos(r * D2R / 2) + 5, 'r', { size: 14, bold: true, italic: true, color: '#b45309' });
    }
    b += T(12, 24, (o.top || 'Không khí') + ' (n = ' + num(na) + ')', { size: 13, bold: true, anchor: 'start' }) + T(12, H - 14, (o.bottom || 'Nước') + ' (n = ' + num(nb) + ')', { size: 13, bold: true, anchor: 'start' });
    if (o.values !== false) b += T(W - 12, 24, 'i = ' + num(i) + '°', { size: 13, bold: true, anchor: 'end', color: '#0f766e' }) + T(W - 12, H - 14, tir ? 'Phản xạ toàn phần' : 'r ≈ ' + num(Math.round(r)) + '°', { size: 13, bold: true, anchor: 'end', color: tir ? '#7c3aed' : '#b45309' });
    return wrap(W, H, b, o.label || (tir ? 'Phản xạ toàn phần tại mặt phân cách' : 'Khúc xạ ánh sáng: tia tới SI, tia khúc xạ IR, pháp tuyến NN\''));
  }
  /* opticalFiber() – sợi quang: ánh sáng phản xạ toàn phần nhiều lần trong lõi */
  function opticalFiber() {
    var W = 600, H = 235, b = '', y1 = 70, y2 = 130, x0 = 40, x1 = 560;
    b += R(x0, y1 - 22, x1 - x0, y2 - y1 + 44, { rx: 12, fill: '#e0e7ff', stroke: '#6366f1', sw: 1.5 }) + R(x0, y1, x1 - x0, y2 - y1, { fill: '#dbeafe', stroke: '#2563eb', sw: 1.5 });
    var pts = [[x0 - 20, 118]], x = x0, y = 118, up = true, step = 70;
    pts.push([x0 + 10, 112]);
    x = x0 + 10; y = 112;
    while (x < x1 - step / 2) { var nx = x + step, ny = up ? y1 : y2; pts.push([nx, ny]); x = nx; y = ny; up = !up; }
    b += P(polyPath(pts), { stroke: C.red, sw: 2.5 });
    for (var k = 1; k < pts.length - 1; k++) b += midArrow(pts[k][0], pts[k][1], pts[k + 1][0], pts[k + 1][1], C.red);
    b += T(444, 28, 'Vỏ (chiết suất nhỏ hơn)', { size: 12, bold: true, color: '#4338ca', anchor: 'start' }) + L(200, 112, 200, 168, { color: '#1d4ed8', width: 1.2 }) + T(200, 184, 'Lõi (chiết suất lớn)', { size: 12, bold: true, color: '#1d4ed8' }) + L(420, 48, 440, 30, { color: '#4338ca', width: 1.2 }) + T(300, 222, 'Tia sáng phản xạ toàn phần liên tiếp tại mặt phân cách lõi – vỏ', { size: 12, color: C.ink });
    return wrap(W, H, b, 'Ánh sáng truyền trong sợi quang nhờ phản xạ toàn phần');
  }
  /* prism({ mode: 'tia' | 'tan-sac' }) – đường truyền qua lăng kính tính theo định luật khúc xạ */
  function prism(o) {
    o = o || {}; var W = 620, H = 300, b = '', ax = 250, ay = 40, side = 230, hgt = side * Math.sqrt(3) / 2, bl = [ax - side / 2, ay + hgt], br = [ax + side / 2, ay + hgt];
    var nrm = function (v) { var l = Math.hypot(v[0], v[1]); return [v[0] / l, v[1] / l]; };
    var refr = function (d, nn, eta) { var ci = -(nn[0] * d[0] + nn[1] * d[1]), k = 1 - eta * eta * (1 - ci * ci); if (k < 0) return null; var f = eta * ci - Math.sqrt(k); return nrm([eta * d[0] + f * nn[0], eta * d[1] + f * nn[1]]); };
    var inter = function (p, d, a, c) { var ex = c[0] - a[0], ey = c[1] - a[1], den = d[0] * ey - d[1] * ex; var t = ((a[0] - p[0]) * ey - (a[1] - p[1]) * ex) / den; return [p[0] + t * d[0], p[1] + t * d[1]]; };
    b += P('M' + ax + ',' + ay + ' L' + n2(br[0]) + ',' + n2(br[1]) + ' L' + n2(bl[0]) + ',' + n2(bl[1]) + ' Z', { fill: '#e0f2fe', stroke: '#0369a1', sw: 2 });
    var tL = 0.5, P1 = [bl[0] + (ax - bl[0]) * tL, bl[1] + (ay - bl[1]) * tL], nL = [-Math.sqrt(3) / 2, -0.5], nR = [Math.sqrt(3) / 2, -0.5];
    var d0 = nrm([1, -0.12]), src = [P1[0] - d0[0] * 200, P1[1] - d0[1] * 200];
    var tan = o.mode === 'tan-sac', cols = tan ? [['#dc2626', 1.46, 'Đỏ'], ['#f97316', 1.49], ['#eab308', 1.52], ['#16a34a', 1.55], ['#2563eb', 1.58], ['#4f46e5', 1.61], ['#9333ea', 1.64, 'Tím']] : [[C.red, 1.5]];
    var sc = clipSeg(src[0], src[1], P1[0], P1[1], W, H);
    b += L(sc[0], sc[1], P1[0], P1[1], { color: tan ? '#f8fafc' : C.red, width: tan ? 5 : 3 }) + (tan ? L(sc[0], sc[1], P1[0], P1[1], { color: '#64748b', width: 1 }) : '') + midArrow(sc[0], sc[1], P1[0], P1[1], tan ? '#475569' : C.red);
    b += L(P1[0] - nL[0] * 40, P1[1] - nL[1] * 40, P1[0] + nL[0] * 50, P1[1] + nL[1] * 50, { color: C.muted, width: 1, dash: '4 3' });
    cols.forEach(function (c, k) {
      var d1 = refr(d0, nL, 1 / c[1]), P2 = inter(P1, d1, [ax, ay], br), d2 = refr(d1, [-nR[0], -nR[1]], c[1]);
      b += L(P1[0], P1[1], P2[0], P2[1], { color: c[0], width: tan ? 1.6 : 3 });
      if (!tan) b += midArrow(P1[0], P1[1], P2[0], P2[1], c[0]) + L(P2[0] - nR[0] * 40, P2[1] - nR[1] * 40, P2[0] + nR[0] * 50, P2[1] + nR[1] * 50, { color: C.muted, width: 1, dash: '4 3' });
      if (d2) { var e = clipSeg(P2[0], P2[1], P2[0] + d2[0] * 400, P2[1] + d2[1] * 400, W - 70, H - 30, 10); if (e) { b += L(e[0], e[1], e[2], e[3], { color: c[0], width: tan ? 2.2 : 3 }) + (tan ? '' : midArrow(e[0], e[1], e[2], e[3], c[0], 0.5)); if (c[2]) b += T(e[2] + 6, e[3] + 4, c[2], { size: 12, bold: true, color: c[0], anchor: 'start' }); } }
    });
    b += T(ax, ay + hgt + 22, 'Lăng kính', { size: 13, bold: true, color: '#0369a1' }) + T(sc[0] + 4, sc[1] - 18, tan ? 'Ánh sáng trắng' : 'Tia sáng đơn sắc', { size: 12, bold: true, anchor: 'start' });
    b += T(W / 2, H - 6, tan ? 'Sự tán sắc ánh sáng trắng qua lăng kính (độ lệch giữa các màu được vẽ phóng đại)' : 'Tia ló bị lệch về phía đáy lăng kính', { size: 12, color: C.muted });
    return wrap(W, H, b, tan ? 'Tán sắc ánh sáng trắng qua lăng kính thành dải màu từ đỏ đến tím' : 'Đường truyền của tia sáng qua lăng kính');
  }
  /* lensShapes() – hình dạng và kí hiệu thấu kính hội tụ, phân kì */
  function lensShapes() {
    var W = 620, H = 230, b = '', f1 = { fill: '#dbeafe', stroke: '#1d4ed8', sw: 2 };
    var cx = [50, 115, 180, 350, 415, 480];
    b += P('M50,40 Q72,90 50,140 Q28,90 50,40 Z', f1) + P('M108,40 L108,140 Q134,90 108,40 Z', f1) + P('M170,40 Q196,90 170,140 Q182,90 170,40 Z', f1);
    b += P('M334,40 L366,40 Q350,90 366,140 L334,140 Q350,90 334,40 Z', f1) + P('M404,40 L428,40 Q414,90 428,140 L404,140 Z', f1) + P('M466,40 L492,40 Q474,90 492,140 L476,140 Q488,90 466,40 Z', f1);
    b += T(110, 20, 'Thấu kính hội tụ (rìa mỏng)', { size: 13, bold: true, color: '#1d4ed8' }) + T(415, 20, 'Thấu kính phân kì (rìa dày)', { size: 13, bold: true, color: '#1d4ed8' });
    var arrUp = function (x, y, out) { return out ? P('M' + (x - 7) + ',' + (y + 9) + ' L' + x + ',' + y + ' L' + (x + 7) + ',' + (y + 9), { stroke: C.ink, sw: 2 }) : P('M' + (x - 7) + ',' + (y - 9) + ' L' + x + ',' + y + ' L' + (x + 7) + ',' + (y - 9), { stroke: C.ink, sw: 2 }); };
    var arrDn = function (x, y, out) { return out ? P('M' + (x - 7) + ',' + (y - 9) + ' L' + x + ',' + y + ' L' + (x + 7) + ',' + (y - 9), { stroke: C.ink, sw: 2 }) : P('M' + (x - 7) + ',' + (y + 9) + ' L' + x + ',' + y + ' L' + (x + 7) + ',' + (y + 9), { stroke: C.ink, sw: 2 }); };
    b += L(110, 160, 110, 216, { width: 2 }) + arrUp(110, 160, true) + arrDn(110, 216, true) + T(125, 192, 'Kí hiệu', { size: 12, anchor: 'start', color: C.muted });
    b += L(415, 160, 415, 216, { width: 2 }) + arrUp(415, 160, false) + arrDn(415, 216, false) + T(430, 192, 'Kí hiệu', { size: 12, anchor: 'start', color: C.muted });
    return wrap(W, H, b, 'Hình dạng mặt cắt và kí hiệu của thấu kính hội tụ, thấu kính phân kì');
  }
  /* lensRay({ kind: 'ht' | 'pk', f: 2, d: 5, h: 1, note, thirdRay }) – dựng ảnh bằng hai tia đặc biệt; toạ độ tính theo công thức thấu kính */
  function lensRay(o) {
    o = o || {}; var pk = o.kind === 'pk', f = o.f || 2, d = o.d || 3 * f, h = o.h || 1, W = 620, H = 290, ay = 145, b = '', id = 'lr' + (++uid);
    var dp, hp, real;
    if (pk) { dp = -d * f / (d + f); real = false; } else if (Math.abs(d - f) < 1e-9) { dp = Infinity; real = true; } else { dp = d * f / (d - f); real = dp > 0; }
    hp = isFinite(dp) ? -h * dp / d : 0; // dp > 0: ảnh bên kia thấu kính (thật); dp < 0: ảnh cùng phía với vật (ảo)
    var xs = [-d, -f, f, 0].concat(isFinite(dp) ? [dp] : []).concat(o.twoF ? [-2 * f, 2 * f] : []), xmin = Math.min.apply(null, xs), xmax = Math.max.apply(null, xs.concat([1.5 * f]));
    xmin -= 0.3 * f; xmax += 0.45 * f; var s = (W - 40) / (xmax - xmin), X = function (x) { return 20 + (x - xmin) * s; };
    var ym = Math.max(Math.abs(h), isFinite(hp) ? Math.abs(hp) : 0), sv = 92 / ym, Y = function (y) { return ay - y * sv; };
    b += A(id, C.ink, 8);
    b += L(8, ay, W - 8, ay, { width: 1.5 });
    var lh = Math.max(ym * sv, h * sv) + 16, lx = X(0);
    b += L(lx, ay - lh, lx, ay + lh, { width: 2.5, color: '#1d4ed8' });
    b += pk ? P('M' + (lx - 8) + ',' + (ay - lh - 9) + ' L' + lx + ',' + (ay - lh) + ' L' + (lx + 8) + ',' + (ay - lh - 9) + ' M' + (lx - 8) + ',' + (ay + lh + 9) + ' L' + lx + ',' + (ay + lh) + ' L' + (lx + 8) + ',' + (ay + lh + 9), { stroke: '#1d4ed8', sw: 2.5 }) : P('M' + (lx - 8) + ',' + (ay - lh + 9) + ' L' + lx + ',' + (ay - lh) + ' L' + (lx + 8) + ',' + (ay - lh + 9) + ' M' + (lx - 8) + ',' + (ay + lh - 9) + ' L' + lx + ',' + (ay + lh) + ' L' + (lx + 8) + ',' + (ay + lh - 9), { stroke: '#1d4ed8', sw: 2.5 });
    [[-f, 'F'], [f, "F'"]].concat(o.twoF ? [[-2 * f, '2F'], [2 * f, "2F'"]] : []).forEach(function (p) { b += Ci(X(p[0]), ay, 3.2, { fill: C.ink }) + T(X(p[0]), ay + 20, p[1], { size: 13, bold: true }); });
    b += T(lx + 8, ay + 18, 'O', { size: 13, bold: true, anchor: 'start' });
    var Bx = X(-d), By = Y(h), rc = C.red;
    var marks = [-f, f].concat(o.twoF ? [-2 * f, 2 * f] : []), near = function (x) { return marks.some(function (m) { return Math.abs(X(m) - x) < 16; }); };
    b += L(Bx, ay, Bx, By + (h > 0 ? 6 : -6), { color: '#15803d', width: 3, marker: id }) + T(Bx, ay + (near(Bx) ? 38 : 20), 'A', { size: 13, bold: true, color: '#15803d' }) + T(Bx - 8, By - 2, 'B', { size: 13, bold: true, anchor: 'end', color: '#15803d' });
    var ray = function (x1, y1, x2, y2, dash) { return segC(x1, y1, x2, y2, W, H, { color: rc, width: dash ? 1.3 : 2, dash: dash ? '5 4' : false }); };
    var far = function (x1, y1, x2, y2) { var k = 50; return [x1 + (x2 - x1) * k, y1 + (y2 - y1) * k]; };
    // Tia 1: song song trục chính → qua F' (hội tụ) hoặc có đường kéo dài qua F (phân kì)
    var I1 = [lx, By];
    b += L(Bx, By, I1[0], I1[1], { color: rc, width: 2 }) + midArrow(Bx, By, I1[0], I1[1], rc);
    if (!pk) { var e1 = far(I1[0], I1[1], X(f), ay); b += ray(I1[0], I1[1], e1[0], e1[1]) + midArrow(I1[0], I1[1], X(f), ay, rc, 0.7); if (!real) { var g1 = far(I1[0], I1[1], 2 * I1[0] - X(f), 2 * I1[1] - ay); b += ray(I1[0], I1[1], g1[0], g1[1], true); } }
    else { var dir = [I1[0] - X(-f), I1[1] - ay], e2 = [I1[0] + dir[0] * 50, I1[1] + dir[1] * 50]; b += ray(I1[0], I1[1], e2[0], e2[1]) + midArrow(I1[0], I1[1], I1[0] + dir[0] * 0.5, I1[1] + dir[1] * 0.5, rc, 0.8) + ray(X(-f), ay, I1[0], I1[1], true); }
    // Tia 2: qua quang tâm O truyền thẳng
    var e3 = far(Bx, By, lx, ay); b += L(Bx, By, lx, ay, { color: rc, width: 2 }) + midArrow(Bx, By, lx, ay, rc, 0.55) + ray(lx, ay, e3[0], e3[1]);
    if (!real) { var g3 = far(lx, ay, Bx, By); b += ray(lx, ay, g3[0], g3[1], true); }
    if (isFinite(dp)) {
      var Ix = X(dp), Iy = Y(hp);
      b += L(Ix, ay, Ix, Iy + (hp > 0 ? 6 : -6), { color: '#7c3aed', width: 3, marker: id, dash: real ? false : '6 4' }) + T(Ix, hp > 0 ? ay + (near(Ix) || Math.abs(Ix - Bx) < 16 ? 38 : 20) : ay - 8, "A'", { size: 13, bold: true, color: '#7c3aed' }) + T(Ix + 8, hp > 0 ? Iy - 2 : Iy + 16, "B'", { size: 13, bold: true, anchor: 'start', color: '#7c3aed' });
    }
    var note = o.note || (!isFinite(dp) ? 'Vật tại tiêu điểm: chùm tia ló song song, không tạo ảnh' : (real ? 'Ảnh thật, ngược chiều vật' : 'Ảnh ảo, cùng chiều vật') + (isFinite(dp) ? (Math.abs(hp) > h * 1.001 ? ', lớn hơn vật' : (Math.abs(hp) < h * 0.999 ? ', nhỏ hơn vật' : ', bằng vật')) : ''));
    b += T(W / 2, H - 8, note, { size: 13, bold: true, color: '#7c3aed' });
    return wrap(W, H, b, (pk ? 'Thấu kính phân kì' : 'Thấu kính hội tụ') + ': dựng ảnh A\'B\' của vật AB (d = ' + num(d) + ', f = ' + num(f) + ')');
  }
  /* opticalBench() – thực hành đo tiêu cự: d = d' = 2f */
  function opticalBench(o) {
    o = o || {}; var W = 620, H = 210, b = '', id = 'ob' + (++uid);
    b += A(id, C.blue, 7) + R(20, 150, 580, 14, { rx: 3, fill: '#cbd5e1', stroke: '#64748b', sw: 1 });
    for (var k = 0; k <= 28; k++) b += L(30 + k * 20, 150, 30 + k * 20, 155, { width: 1, color: '#475569' });
    b += R(90, 70, 26, 80, { fill: '#fef3c7', stroke: '#a16207', sw: 1.5 }) + T(103, 118, 'F', { size: 22, bold: true, color: '#b91c1c' }) + T(103, 60, 'Vật sáng', { size: 12, bold: true });
    b += E(310, 105, 10, 48, { fill: '#dbeafe', stroke: '#1d4ed8', sw: 2 }) + L(310, 153, 310, 150, { width: 3 }) + T(310, 45, 'Thấu kính hội tụ', { size: 12, bold: true, color: '#1d4ed8' });
    b += R(506, 50, 10, 100, { fill: '#e2e8f0', stroke: '#475569', sw: 1.5 }) + '<text x="496" y="96" text-anchor="middle" font-size="22" font-weight="700" fill="#b91c1c" transform="rotate(180 496 90)">F</text>' + T(511, 40, 'Màn chắn', { size: 12, bold: true });
    b += L(103, 185, 306, 185, { color: C.blue, width: 1.8, marker: id, start: id }) + T(205, 202, 'd', { size: 14, bold: true, italic: true, color: C.blue }) + L(314, 185, 511, 185, { color: C.blue, width: 1.8, marker: id, start: id }) + T(412, 202, "d'", { size: 14, bold: true, italic: true, color: C.blue });
    b += T(W / 2, 22, o.title || 'Khi ảnh rõ nét, cao bằng vật: d = d\' = 2f ⇒ f = (d + d\') : 4', { size: 13, bold: true });
    return wrap(W, H, b, 'Bố trí thí nghiệm đo tiêu cự thấu kính hội tụ trên giá quang học');
  }
  /* ======================= KHTN 9 – Điện, Điện từ, Năng lượng ======================= */
  /* resCircuit({ kind: 'noi-tiep' | 'song-song', r: ['R₁ = 4 Ω', 'R₂ = 6 Ω'], ammeter: true, voltmeter: true, label }) */
  function resCircuit(o) {
    o = o || {}; var ss = o.kind === 'song-song', r = o.r || ['R₁', 'R₂'], x0 = 60, x1 = 500, yt = 60, yb = ss ? 200 : 190, b = '', W = 560;
    b += L(x0, yt, 120, yt) + sym('battery', 120, yt) + L(180, yt, 250, yt) + sym('switch', 250, yt) + L(310, yt, o.ammeter ? 370 : x1, yt);
    if (o.ammeter) b += sym('ammeter', 370, yt) + L(430, yt, x1, yt);
    b += T(150, yt + 32, 'Nguồn', { size: 12, color: C.muted }) + T(280, yt + 32, 'K', { size: 12, bold: true }) + (o.ammeter ? T(400, yt + 32, 'Ampe kế', { size: 12, color: C.muted }) : '');
    b += L(x0, yt, x0, yb) + L(x1, yt, x1, yb);
    var H;
    if (!ss) {
      var n = r.length, seg = (x1 - x0) / n;
      r.forEach(function (t, i) { var cx = x0 + seg * (i + 0.5); b += L(x0 + seg * i, yb, cx - 30, yb) + sym('resistor', cx - 30, yb) + L(cx + 30, yb, x0 + seg * (i + 1), yb) + T(cx, yb - 16, t, { size: 13, bold: true }); });
      H = 230;
      if (o.voltmeter) { b += Ci(x0 + 30, yb, 3, { fill: C.ink }) + Ci(x1 - 30, yb, 3, { fill: C.ink }) + P('M' + (x0 + 30) + ',' + yb + ' V' + (yb + 50) + ' H' + (W / 2 - 30) + ' M' + (W / 2 + 30) + ',' + (yb + 50) + ' H' + (x1 - 30) + ' V' + yb, { stroke: C.ink, sw: 2 }) + sym('voltmeter', W / 2 - 30, yb + 50); H = 270; }
    } else {
      var M = 150, N = 410, y1 = yb - 30, y2 = yb + 30;
      b += L(x0, yb, M, yb) + L(N, yb, x1, yb) + L(M, y1, M, y2) + L(N, y1, N, y2) + Ci(M, yb, 4, { fill: C.ink }) + Ci(N, yb, 4, { fill: C.ink }) + T(M - 8, yb - 8, 'M', { size: 13, bold: true, anchor: 'end' }) + T(N + 8, yb - 8, 'N', { size: 13, bold: true, anchor: 'start' });
      [[y1, r[0]], [y2, r[1] || 'R₂']].forEach(function (q) { b += L(M, q[0], 250, q[0]) + sym('resistor', 250, q[0]) + L(310, q[0], N, q[0]) + T(360, q[0] - 10, q[1], { size: 13, bold: true, anchor: 'start' }); });
      H = 250;
      if (o.voltmeter) { b += P('M' + M + ',' + y2 + ' V' + (y2 + 44) + ' H250 M310,' + (y2 + 44) + ' H' + N + ' V' + y2, { stroke: C.ink, sw: 2 }) + sym('voltmeter', 250, y2 + 44); H = 290; }
    }
    return wrap(W, H, b, o.label || (ss ? 'Sơ đồ đoạn mạch gồm hai điện trở mắc song song' : 'Sơ đồ đoạn mạch gồm các điện trở mắc nối tiếp'));
  }
  /* wireRes() – dây dẫn: chiều dài l, tiết diện S; R = ρl/S */
  function wireRes() {
    var W = 600, H = 190, id = 'wr' + (++uid), b = A(id, C.blue, 7);
    b += R(100, 60, 380, 40, { fill: '#fdba74' }) + L(100, 60, 480, 60, { color: '#9a3412', width: 2 }) + L(100, 100, 480, 100, { color: '#9a3412', width: 2 }) + E(480, 80, 10, 20, { fill: '#fed7aa', stroke: '#9a3412', sw: 2 }) + E(100, 80, 10, 20, { fill: '#fb923c', stroke: '#9a3412', sw: 2 });
    b += L(100, 130, 480, 130, { color: C.blue, width: 1.8, marker: id, start: id }) + T(290, 150, 'Chiều dài l', { size: 13, bold: true, color: C.blue });
    b += L(486, 70, 520, 56, { color: '#475569', width: 1.2 }) + T(524, 52, 'Tiết diện', { size: 13, bold: true, anchor: 'start' }) + T(524, 70, 'S', { size: 13, bold: true, anchor: 'start' });
    b += T(290, 36, 'Điện trở dây dẫn: R = ρ · l : S', { size: 15, bold: true }) + T(290, 178, 'ρ: điện trở suất của vật liệu (Ω·m) – dây càng dài, càng mảnh thì điện trở càng lớn', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Điện trở của dây dẫn phụ thuộc chiều dài, tiết diện và vật liệu');
  }
  function coil(x, y, n, w, h) { var b = ''; for (var k = 0; k < n; k++) b += E(x + k * w, y, w * 0.55, h / 2, { stroke: '#b45309', sw: 2.5 }); return b; }
  /* induction({ mode: 'dua-vao' | 'dung-yen' | 'rut-ra' }) – nam châm và cuộn dây nối điện kế */
  function induction(o) {
    o = o || {}; var md = o.mode || 'dua-vao', W = 600, H = 250, id = 'in' + (++uid), b = A(id, C.ink, 8);
    b += coil(300, 110, 8, 18, 70) + L(290, 145, 290, 200) + L(426, 145, 426, 200) + L(290, 200, 330, 200) + L(386, 200, 426, 200);
    b += Ci(358, 200, 28, { fill: '#fff', stroke: C.ink, sw: 2 }) + T(358, 222, 'G', { size: 11, bold: true });
    var ang = md === 'dua-vao' ? -35 : (md === 'rut-ra' ? 35 : 0);
    b += L(358, 206, 358 + 22 * Math.sin(ang * D2R), 206 - 22 * Math.cos(ang * D2R), { color: C.red, width: 2.5 }) + Ci(358, 206, 3, { fill: C.ink });
    var mx = md === 'dung-yen' ? 140 : (md === 'dua-vao' ? 120 : 140);
    b += R(mx, 95, 60, 30, { fill: '#ef4444', stroke: '#7f1d1d', sw: 1.5 }) + R(mx + 60, 95, 60, 30, { fill: '#3b82f6', stroke: '#1e3a8a', sw: 1.5 }) + T(mx + 30, 116, 'S', { size: 15, bold: true, color: '#fff' }) + T(mx + 90, 116, 'N', { size: 15, bold: true, color: '#fff' });
    if (md === 'dua-vao') b += L(mx + 20, 75, mx + 110, 75, { width: 2.5, marker: id }) + T(mx + 65, 62, 'Đưa nam châm lại gần', { size: 12, bold: true });
    if (md === 'rut-ra') b += L(mx + 110, 75, mx + 20, 75, { width: 2.5, marker: id }) + T(mx + 65, 62, 'Kéo nam châm ra xa', { size: 12, bold: true });
    if (md === 'dung-yen') b += T(mx + 60, 72, 'Nam châm đứng yên', { size: 12, bold: true });
    b += T(360, 50, 'Cuộn dây dẫn kín', { size: 12, bold: true, color: '#b45309' }) + T(460, 212, 'Điện kế', { size: 12, anchor: 'start', color: C.muted });
    b += T(W / 2, H - 6, md === 'dung-yen' ? 'Số đường sức từ qua cuộn dây không đổi: kim điện kế không lệch' : 'Số đường sức từ qua cuộn dây biến thiên: xuất hiện dòng điện cảm ứng, kim điện kế lệch', { size: 12, color: md === 'dung-yen' ? C.muted : C.red, bold: true });
    return wrap(W, H, b, 'Thí nghiệm cảm ứng điện từ với nam châm và cuộn dây');
  }
  /* generator() – máy phát điện xoay chiều: khung dây quay trong từ trường */
  function generator() {
    var W = 620, H = 280, id = 'gn' + (++uid), b = A(id, C.ink, 8);
    b += P('M40,70 L150,70 L150,100 L110,100 L110,190 L150,190 L150,220 L40,220 Z', { fill: '#ef4444', stroke: '#7f1d1d', sw: 1.5 }) + P('M470,70 L360,70 L360,100 L400,100 L400,190 L360,190 L360,220 L470,220 Z', { fill: '#3b82f6', stroke: '#1e3a8a', sw: 1.5 });
    b += T(75, 150, 'N', { size: 22, bold: true, color: '#fff' }) + T(435, 150, 'S', { size: 22, bold: true, color: '#fff' });
    for (var k = 0; k < 3; k++) b += L(160, 115 + k * 30, 350, 115 + k * 30, { color: '#94a3b8', width: 1, dash: '4 4' });
    b += P('M190,95 L320,125 L320,195 L190,165 Z', { stroke: '#b45309', sw: 4 }) + L(255, 60, 255, 95, { width: 3, color: '#475569' }) + L(255, 180, 255, 240, { width: 3, color: '#475569' });
    b += P('M230,55 A25,8 0 1 1 280,55', { stroke: C.ink, sw: 2 }) + P('M276,50 L281,56 L273,59', { fill: C.ink, stroke: C.ink, sw: 1 });
    b += E(255, 225, 18, 6, { stroke: '#a16207', sw: 3 }) + E(255, 245, 18, 6, { stroke: '#a16207', sw: 3 });
    b += L(273, 225, 520, 225) + L(273, 245, 300, 245) + L(300, 245, 300, 262) + L(300, 262, 560, 262) + L(520, 225, 520, 210) + L(560, 262, 560, 210) + Ci(540, 195, 22, { fill: '#fef9c3', stroke: C.ink, sw: 2 }) + L(526, 181, 554, 209, { width: 2 }) + L(526, 209, 554, 181, { width: 2 }) + L(520, 210, 525, 205) + L(560, 210, 555, 205);
    b += T(255, 30, 'Trục quay', { size: 12, bold: true }) + T(255, 166, 'Khung dây', { size: 12, bold: true, color: '#b45309' }) + T(170, 248, 'Vành khuyên\nvà chổi quét', { size: 12, bold: true, anchor: 'end' }) + T(540, 160, 'Bóng đèn', { size: 12, bold: true }) + T(95, 50, 'Nam châm', { size: 12, bold: true }) + T(415, 50, 'Nam châm', { size: 12, bold: true });
    return wrap(W, H, b, 'Máy phát điện xoay chiều: khung dây quay trong từ trường của nam châm (sơ đồ)');
  }
  /* acWave({ kind: 'ac' | 'dc', cycles: 2, label }) */
  function acWave(o) {
    o = o || {}; var W = 560, H = 200, x0 = 50, x1 = 520, y0 = 100, a = 60, id = 'ac' + (++uid), b = A(id, C.ink, 7), pts = [];
    b += L(x0, y0, x1 + 16, y0, { width: 1.6, marker: id }) + L(x0, 175, x0, 18, { width: 1.6, marker: id }) + T(x1 + 16, y0 + 20, 't', { size: 13, italic: true, bold: true, anchor: 'end' }) + T(x0 + 8, 20, o.dc === undefined && o.kind === 'dc' ? 'I' : 'i', { size: 13, italic: true, bold: true, anchor: 'start' }) + T(x0 - 8, y0 + 5, 'O', { size: 12, italic: true, anchor: 'end' });
    if (o.kind === 'dc') { b += L(x0, y0 - a * 0.7, x1, y0 - a * 0.7, { color: C.blue, width: 3 }); b += T(W / 2, H - 8, o.label || 'Dòng điện một chiều: chiều và độ lớn không đổi', { size: 12, color: C.muted }); }
    else {
      var cyc = o.cycles || 2; for (var k = 0; k <= 120; k++) { var t = k / 120; pts.push([x0 + t * (x1 - x0), y0 - a * Math.sin(2 * Math.PI * cyc * t)]); }
      b += P(polyPath(pts), { stroke: C.red, sw: 3 }) + T(x0 + (x1 - x0) / (4 * cyc), y0 - a - 8, 'chiều dương', { size: 11, color: C.muted }) + T(x0 + 3 * (x1 - x0) / (4 * cyc), y0 + a + 18, 'đổi chiều', { size: 11, color: C.muted });
      b += T(W / 2, H - 4, o.label || 'Dòng điện xoay chiều: chiều và độ lớn biến đổi tuần hoàn', { size: 12, color: C.muted });
    }
    return wrap(W, H, b, o.label || (o.kind === 'dc' ? 'Đồ thị dòng điện một chiều' : 'Đồ thị dòng điện xoay chiều theo thời gian'));
  }
  /* renewables({ items: ['mat-troi','gio','nuoc','dia-nhiet','sinh-khoi'] }) */
  function renewables(o) {
    var it = (o && o.items) || ['mat-troi', 'gio', 'nuoc', 'dia-nhiet', 'sinh-khoi'], NM = { 'mat-troi': 'Năng lượng Mặt Trời', gio: 'Năng lượng gió', nuoc: 'Năng lượng nước (thuỷ điện)', 'dia-nhiet': 'Năng lượng địa nhiệt', 'sinh-khoi': 'Năng lượng sinh khối' }, cw = 150, W = Math.min(3, it.length) * cw + 20, rows = Math.ceil(it.length / 3), H = rows * 150 + 10, b = '';
    it.forEach(function (k, i) {
      var x = 10 + (i % 3) * cw, y = 10 + Math.floor(i / 3) * 150, cx = x + cw / 2, g = '';
      g += R(x + 4, y, cw - 8, 140, { rx: 10, fill: '#f8fafc', stroke: '#cbd5e1', sw: 1 });
      if (k === 'mat-troi') { g += Ci(cx + 38, y + 28, 14, { fill: '#facc15', stroke: '#ca8a04', sw: 1.5 }) + P('M' + (cx - 40) + ',' + (y + 100) + ' L' + (cx - 20) + ',' + (y + 55) + ' L' + (cx + 40) + ',' + (y + 55) + ' L' + (cx + 20) + ',' + (y + 100) + ' Z', { fill: '#1e3a8a', stroke: '#0f172a', sw: 1.5 }); for (var q = 1; q < 3; q++) g += L(cx - 40 + q * 20, y + 100, cx - 20 + q * 20, y + 55, { color: '#93c5fd', width: 1 }); g += L(cx - 30, y + 78, cx + 30, y + 78, { color: '#93c5fd', width: 1 }) + L(cx, y + 100, cx, y + 112, { width: 3, color: '#475569' }); }
      if (k === 'gio') { g += L(cx, y + 50, cx - 4, y + 112, { width: 4, color: '#64748b' }) + L(cx, y + 50, cx + 4, y + 112, { width: 4, color: '#64748b' }); [0, 120, 240].forEach(function (d) { var a = d * D2R - Math.PI / 2; g += L(cx, y + 50, cx + 38 * Math.cos(a), y + 50 + 38 * Math.sin(a), { width: 5, color: '#e2e8f0' }) + L(cx, y + 50, cx + 38 * Math.cos(a), y + 50 + 38 * Math.sin(a), { width: 1, color: '#475569' }); }); g += Ci(cx, y + 50, 4, { fill: '#334155' }); }
      if (k === 'nuoc') { g += R(x + 14, y + 40, 48, 72, { fill: '#60a5fa' }) + P('M' + (cx - 14) + ',' + (y + 30) + ' L' + (cx + 4) + ',' + (y + 30) + ' L' + (cx + 20) + ',' + (y + 112) + ' L' + (cx - 14) + ',' + (y + 112) + ' Z', { fill: '#9ca3af', stroke: '#4b5563', sw: 1.5 }) + R(cx + 20, y + 96, 50, 16, { fill: '#93c5fd' }) + Ci(cx + 34, y + 88, 8, { fill: '#fde68a', stroke: '#a16207', sw: 1.5 }); }
      if (k === 'dia-nhiet') { g += R(x + 14, y + 40, cw - 28, 20, { fill: '#a3e635' }) + R(x + 14, y + 60, cw - 28, 25, { fill: '#b45309' }) + R(x + 14, y + 85, cw - 28, 27, { fill: '#ef4444' }) + L(cx, y + 110, cx, y + 26, { width: 5, color: '#475569' }) + P('M' + (cx + 8) + ',' + (y + 30) + ' q6,-8 0,-14', { stroke: '#94a3b8', sw: 2 }); }
      if (k === 'sinh-khoi') { g += P('M' + (cx - 30) + ',' + (y + 90) + ' Q' + cx + ',' + (y + 20) + ' ' + (cx + 30) + ',' + (y + 60) + ' Q' + cx + ',' + (y + 110) + ' ' + (cx - 30) + ',' + (y + 90) + ' Z', { fill: '#86efac', stroke: '#15803d', sw: 2 }) + L(cx - 30, y + 90, cx + 20, y + 62, { color: '#15803d', width: 1.5 }) + P('M' + (cx + 34) + ',' + (y + 112) + ' q-12,-14 0,-30 q12,16 0,30 Z', { fill: '#fb923c', stroke: '#c2410c', sw: 1.2 }); }
      g += T(cx, y + 130, NM[k].replace(' (thuỷ điện)', ''), { size: 11, bold: true });
      b += g;
    });
    return wrap(W, H, b, 'Một số dạng năng lượng tái tạo');
  }
  /* ======================= KHTN 9 – Hoá học ======================= */
  /* activitySeries({ highlight: ['Fe','Cu'], brackets: true }) – dãy hoạt động hoá học của kim loại */
  function activitySeries(o) {
    o = o || {}; var el = ['K', 'Na', 'Ca', 'Mg', 'Al', 'Zn', 'Fe', 'Pb', 'H', 'Cu', 'Ag', 'Au'], W = 620, cw = 48, x0 = 22, b = '', id = 'as' + (++uid), hl = o.highlight || [];
    b += A(id, C.ink, 8);
    el.forEach(function (e, i) { var x = x0 + i * cw, isH = e === 'H', on = hl.indexOf(e) >= 0; b += R(x, 50, cw - 6, 40, { rx: 6, fill: isH ? '#f1f5f9' : (on ? '#fde68a' : '#dbeafe'), stroke: on ? '#b45309' : (isH ? '#64748b' : '#1d4ed8'), sw: on ? 2.5 : 1.5, dash: isH }) + T(x + (cw - 6) / 2, 76, e, { size: 16, bold: true, color: isH ? '#475569' : C.ink }); });
    b += L(x0, 110, x0 + el.length * cw - 6, 110, { width: 2.2, marker: id }) + T(W / 2, 130, 'Mức độ hoạt động hoá học của kim loại giảm dần', { size: 13, bold: true });
    if (o.brackets !== false) {
      var br = function (i1, i2, y, t, up, col) { var xa = x0 + i1 * cw, xb = x0 + i2 * cw + cw - 6, s = up ? -1 : 1; return P('M' + xa + ',' + (y - 8 * s) + ' L' + xa + ',' + y + ' L' + xb + ',' + y + ' L' + xb + ',' + (y - 8 * s), { stroke: col, sw: 1.8 }) + T(up ? xa : (xa + xb) / 2, y + (up ? -8 : 18), t, { size: 12, bold: true, color: col, anchor: up ? 'start' : 'middle' }); };
      b += br(0, 2, 38, 'Tác dụng với nước ở nhiệt độ thường', true, '#0369a1') + br(0, 7, 158, 'Đẩy được hydrogen ra khỏi dung dịch HCl, H₂SO₄ loãng', false, '#15803d') + br(9, 11, 196, 'Không đẩy được H', false, '#b91c1c');
    }
    b += T(W / 2, 236, 'Kim loại đứng trước (trừ K, Na, Ca…) đẩy được kim loại đứng sau ra khỏi dung dịch muối', { size: 12, color: C.muted });
    return wrap(W, 248, b, 'Dãy hoạt động hoá học của một số kim loại');
  }
  /* structFormula({ mol: 'CH4' | 'C2H6' | 'C3H8' | 'C4H10' | 'C2H4' | 'C2H5OH' | 'CH3COOH' | 'CH3COOC2H5' | 'CH3Cl', title }) – công thức cấu tạo */
  var MOLS = {
    CH4: { a: [['C', 0, 0], ['H', 0, -1], ['H', 0, 1], ['H', -1, 0], ['H', 1, 0]], b: [[0, 1], [0, 2], [0, 3], [0, 4]], n: 'Methane CH₄' },
    CH3Cl: { a: [['C', 0, 0], ['H', 0, -1], ['H', 0, 1], ['H', -1, 0], ['Cl', 1, 0]], b: [[0, 1], [0, 2], [0, 3], [0, 4]], n: 'Methyl chloride CH₃Cl' },
    C2H4: { a: [['C', 0, 0], ['C', 1.1, 0], ['H', -0.75, -0.75], ['H', -0.75, 0.75], ['H', 1.85, -0.75], ['H', 1.85, 0.75]], b: [[0, 1, 2], [0, 2], [0, 3], [1, 4], [1, 5]], n: 'Ethylene C₂H₄' },
    C2H5OH: { a: [['C', 0, 0], ['C', 1, 0], ['O', 2, 0], ['H', 3, 0], ['H', 0, -1], ['H', 0, 1], ['H', -1, 0], ['H', 1, -1], ['H', 1, 1]], b: [[0, 1], [1, 2], [2, 3], [0, 4], [0, 5], [0, 6], [1, 7], [1, 8]], n: 'Ethylic alcohol C₂H₅OH' },
    CH3COOH: { a: [['C', 0, 0], ['C', 1, 0], ['O', 1, -1], ['O', 2, 0], ['H', 3, 0], ['H', 0, -1], ['H', 0, 1], ['H', -1, 0]], b: [[0, 1], [1, 2, 2], [1, 3], [3, 4], [0, 5], [0, 6], [0, 7]], n: 'Acetic acid CH₃COOH' },
    CH3COOC2H5: { a: [['C', 0, 0], ['C', 1, 0], ['O', 1, -1], ['O', 2, 0], ['C', 3, 0], ['C', 4, 0], ['H', 0, -1], ['H', 0, 1], ['H', -1, 0], ['H', 3, -1], ['H', 3, 1], ['H', 4, -1], ['H', 4, 1], ['H', 5, 0]], b: [[0, 1], [1, 2, 2], [1, 3], [3, 4], [4, 5], [0, 6], [0, 7], [0, 8], [4, 9], [4, 10], [5, 11], [5, 12], [5, 13]], n: 'Ethyl acetate CH₃COOC₂H₅' }
  };
  function alkaneMol(k) { var a = [], bd = [], i; for (i = 0; i < k; i++) a.push(['C', i, 0]); for (i = 0; i < k - 1; i++) bd.push([i, i + 1]); for (i = 0; i < k; i++) { a.push(['H', i, -1]); bd.push([i, a.length - 1]); a.push(['H', i, 1]); bd.push([i, a.length - 1]); } a.push(['H', -1, 0]); bd.push([0, a.length - 1]); a.push(['H', k, 0]); bd.push([k - 1, a.length - 1]); return a.length && { a: a, b: bd }; }
  MOLS.C2H6 = alkaneMol(2); MOLS.C2H6.n = 'Ethane C₂H₆'; MOLS.C3H8 = alkaneMol(3); MOLS.C3H8.n = 'Propane C₃H₈'; MOLS.C4H10 = alkaneMol(4); MOLS.C4H10.n = 'Butane C₄H₁₀';
  function molGroup(m, ox, oy, u) { // vẽ phân tử theo toạ độ lưới
    var g = '', col = { C: '#111827', H: '#6b7280', O: '#dc2626', Cl: '#16a34a', N: '#2563eb' };
    m.b.forEach(function (bd) { var p = m.a[bd[0]], q = m.a[bd[1]], x1 = ox + p[1] * u, y1 = oy + p[2] * u, x2 = ox + q[1] * u, y2 = oy + q[2] * u, dx = x2 - x1, dy = y2 - y1, l = Math.hypot(dx, dy), sh = 12 / l; var a1 = [x1 + dx * sh, y1 + dy * sh], a2 = [x2 - dx * sh, y2 - dy * sh]; if (bd[2] === 2) { var nx = -dy / l * 3.5, ny = dx / l * 3.5; g += L(a1[0] + nx, a1[1] + ny, a2[0] + nx, a2[1] + ny, { width: 2 }) + L(a1[0] - nx, a1[1] - ny, a2[0] - nx, a2[1] - ny, { width: 2 }); } else g += L(a1[0], a1[1], a2[0], a2[1], { width: 2 }); });
    m.a.forEach(function (p) { g += T(ox + p[1] * u, oy + p[2] * u + 6, p[0], { size: 17, bold: true, color: col[p[0]] || C.ink }); });
    return g;
  }
  function structFormula(o) {
    o = o || {}; var list = [].concat(o.mol || 'CH4'), u = o.u || 50, b = '', x = 20, H = 0, parts = [];
    list.forEach(function (k) { var m = MOLS[k], xs = m.a.map(function (p) { return p[1]; }), ys = m.a.map(function (p) { return p[2]; }), w = (Math.max.apply(null, xs) - Math.min.apply(null, xs)) * u + 50, h = (Math.max.apply(null, ys) - Math.min.apply(null, ys)) * u + 40; parts.push([m, xs, ys, w, h]); H = Math.max(H, h); });
    var W = parts.reduce(function (s, p) { return s + Math.max(p[3], p[0].n.length * 7.4 + 10) + 30; }, 10);
    parts.forEach(function (p) { var bw = Math.max(p[3], p[0].n.length * 7.4 + 10), ox = x + (bw - p[3]) / 2 + 25 - Math.min.apply(null, p[1]) * u, oy = 20 + (H - p[4]) / 2 + 20 - Math.min.apply(null, p[2]) * u; b += molGroup(p[0], ox, oy, u) + T(x + bw / 2, H + 44, p[0].n, { size: 13, bold: true, color: '#1d4ed8' }); x += bw + 30; });
    return wrap(W, H + 56, b, o.title || ('Công thức cấu tạo: ' + parts.map(function (p) { return p[0].n; }).join(', ')));
  }
  /* oilColumn() – chưng cất phân đoạn dầu mỏ */
  function oilColumn() {
    var W = 600, H = 320, id = 'oc' + (++uid), b = A(id, C.ink, 7), fr = [['Khí đốt (C₁ – C₄)', '#e0f2fe'], ['Xăng', '#fef9c3'], ['Dầu hoả', '#fde68a'], ['Dầu diesel', '#fdba74'], ['Dầu mazut, dầu nhờn', '#fb923c'], ['Nhựa đường (cặn)', '#78350f']];
    b += R(200, 30, 110, 260, { rx: 14, fill: '#f1f5f9', stroke: '#475569', sw: 2 });
    fr.forEach(function (f, i) { var y = 50 + i * 42; if (i < 5) b += L(210, y + 22, 300, y + 22, { color: '#94a3b8', width: 1.5 }); b += L(310, y, 380, y, { width: 2, marker: id }) + R(384, y - 14, 200, 28, { rx: 6, fill: f[1], stroke: '#94a3b8', sw: 1 }) + T(484, y + 5, f[0], { size: 12, bold: true, color: i === 5 ? '#fff' : C.ink }); });
    b += L(60, 270, 196, 270, { width: 2.5, marker: id }) + T(128, 258, 'Dầu thô đã đun nóng', { size: 12, bold: true }) + P('M110,290 q8,-12 0,-22 q12,10 8,22 Z', { fill: '#f97316' });
    b += L(170, 236, 170, 50, { color: '#b91c1c', width: 2, marker: id }) + T(162, 160, 'Nhiệt độ\ngiảm dần\nlên trên', { size: 11, bold: true, anchor: 'end', color: '#b91c1c', vcenter: true }) + T(255, 20, 'Tháp chưng cất', { size: 12, bold: true });
    b += T(W / 2, H - 8, 'Các phân đoạn có nhiệt độ sôi khác nhau được tách ra ở các độ cao khác nhau (sơ đồ đơn giản)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Sơ đồ chưng cất phân đoạn dầu mỏ');
  }
  /* blastFurnace() – lò cao luyện gang (sơ đồ đơn giản) */
  function blastFurnace() {
    var W = 600, H = 320, id = 'bf' + (++uid), b = A(id, C.ink, 7);
    b += P('M250,30 L350,30 L380,200 L360,270 L240,270 L220,200 Z', { fill: '#fed7aa', stroke: '#7c2d12', sw: 3 }) + R(240, 240, 120, 30, { fill: '#dc2626' }) + R(240, 226, 120, 14, { fill: '#a8a29e' });
    b += L(300, 8, 300, 36, { width: 2.5, marker: id }) + T(310, 16, 'Quặng sắt, than cốc, đá vôi', { size: 12, bold: true, anchor: 'start' });
    b += L(150, 210, 222, 210, { width: 2.5, marker: id }) + L(450, 210, 378, 210, { width: 2.5, marker: id }) + T(150, 200, 'Không khí nóng', { size: 12, bold: true }) + T(450, 200, 'Không khí nóng', { size: 12, bold: true });
    b += L(360, 233, 450, 250, { width: 2, marker: id }) + T(456, 256, 'Xỉ', { size: 12, bold: true, anchor: 'start' }) + L(360, 258, 450, 290, { width: 2, marker: id }) + T(456, 296, 'Gang lỏng', { size: 12, bold: true, anchor: 'start', color: '#b91c1c' });
    b += L(345, 40, 440, 60, { width: 2, marker: id }) + T(446, 66, 'Khí lò cao (CO₂, CO, N₂…)', { size: 12, bold: true, anchor: 'start' });
    b += T(300, 110, 'CO khử oxide sắt', { size: 12, bold: true, color: '#7c2d12' }) + T(300, 128, 'Fe₂O₃ + 3CO →', { size: 11, color: '#7c2d12' }) + T(300, 143, '2Fe + 3CO₂', { size: 11, color: '#7c2d12' }) + T(300, 180, 'C + O₂ → CO₂', { size: 12, color: '#7c2d12' }) + T(300, 198, 'CO₂ + C → 2CO', { size: 12, color: '#7c2d12' });
    b += T(W / 2, H - 6, 'Lò cao luyện gang (sơ đồ đơn giản, các phản ứng xảy ra ở nhiệt độ cao)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Sơ đồ lò cao luyện gang từ quặng sắt');
  }
  /* polymerChain({ kind: 'pe' | 'tinh-bot' | 'protein' }) */
  function polymerChain(o) {
    o = o || {}; var k = o.kind || 'pe', W = 620, id = 'pc' + (++uid), b = A(id, C.ink, 8), H;
    if (k === 'pe') {
      H = 200; var mono = MOLS.C2H4;
      b += T(30, 98, 'n', { size: 18, bold: true, italic: true }) + molGroup(mono, 70, 92, 40);
      b += L(150, 92, 230, 92, { width: 2.5, marker: id }) + T(190, 82, 'trùng hợp', { size: 12, bold: true }) + T(190, 110, 't°, p, xt', { size: 11, color: C.muted });
      var ch = { a: [], b: [] }; for (var j = 0; j < 6; j++) { ch.a.push(['C', j, 0]); if (j) ch.b.push([j - 1, j]); }
      for (j = 0; j < 6; j++) { ch.a.push(['H', j, -1]); ch.b.push([j, ch.a.length - 1]); ch.a.push(['H', j, 1]); ch.b.push([j, ch.a.length - 1]); }
      b += molGroup(ch, 280, 92, 50) + L(255, 92, 268, 92, { width: 2, dash: '3 3' }) + L(542, 92, 560, 92, { width: 2, dash: '3 3' });
      b += T(W / 2, 170, 'n CH₂=CH₂ → (–CH₂–CH₂–)ₙ   (polyethylene, PE)', { size: 14, bold: true, color: '#1d4ed8' }) + T(W / 2, 192, 'Nhiều phân tử ethylene (monomer) kết hợp tạo mạch polymer rất dài', { size: 12, color: C.muted });
    } else {
      H = 170; var n = 9, lab = k === 'protein' ? ['Gly', 'Ala', 'Val', 'Gly', 'Leu', 'Ser', 'Ala', 'Gly', 'Lys'] : null, cols = ['#fca5a5', '#fde68a', '#86efac', '#93c5fd', '#c4b5fd'];
      for (var q = 0; q < n; q++) { var x = 50 + q * 64, y = 70 + (k === 'protein' ? 14 * Math.sin(q) : 0); if (q) b += L(x - 64 + 22, 70 + (k === 'protein' ? 14 * Math.sin(q - 1) : 0), x - 22, y, { width: 2.5 }); b += k === 'protein' ? Ci(x, y, 22, { fill: cols[q % 5], stroke: '#475569', sw: 1.5 }) + T(x, y + 5, lab[q], { size: 12, bold: true }) : P('M' + (x - 20) + ',' + y + ' L' + (x - 10) + ',' + (y - 17) + ' L' + (x + 10) + ',' + (y - 17) + ' L' + (x + 20) + ',' + y + ' L' + (x + 10) + ',' + (y + 17) + ' L' + (x - 10) + ',' + (y + 17) + ' Z', { fill: '#fef3c7', stroke: '#a16207', sw: 1.5 }); }
      b += T(W / 2, 128, k === 'protein' ? 'Protein: chuỗi dài các amino acid liên kết với nhau (mỗi hình tròn là một amino acid)' : 'Tinh bột, cellulose: mạch dài gồm rất nhiều mắt xích glucose (mỗi hình lục giác là một mắt xích C₆H₁₀O₅)', { size: 12, bold: true, color: '#1d4ed8' }) + T(W / 2, 152, k === 'protein' ? '(sơ đồ đơn giản, tên amino acid chỉ để minh hoạ)' : 'Công thức chung (C₆H₁₀O₅)ₙ', { size: 12, color: C.muted });
    }
    return wrap(W, H, b, k === 'pe' ? 'Phản ứng trùng hợp ethylene tạo polyethylene' : (k === 'protein' ? 'Sơ đồ cấu tạo mạch protein' : 'Sơ đồ mạch tinh bột, cellulose'));
  }
  /* carbonCycle() – chu trình carbon */
  function carbonCycle() {
    var W = 620, H = 330, id = 'cc' + (++uid), b = A(id, '#475569', 8), bx = function (x, y, w, t, f) { return R(x - w / 2, y - 18, w, 36, { rx: 10, fill: f, stroke: '#64748b', sw: 1.5 }) + T(x, y + 5, t, { size: 13, bold: true }); };
    b += bx(310, 36, 200, 'CO₂ trong khí quyển', '#e0f2fe') + bx(90, 170, 140, 'Thực vật', '#dcfce7') + bx(310, 170, 140, 'Động vật', '#fef3c7') + bx(530, 170, 150, 'Nhà máy, xe cộ', '#fee2e2') + bx(200, 290, 190, 'Xác, chất thải sinh vật', '#e7e5e4') + bx(470, 290, 200, 'Nhiên liệu hoá thạch', '#d6d3d1');
    var ar = function (x1, y1, x2, y2, t, tx, ty, an) { return L(x1, y1, x2, y2, { color: '#475569', width: 2, marker: id }) + T(tx, ty, t, { size: 11, bold: true, color: '#0f766e', anchor: an || 'middle' }); };
    b += ar(230, 50, 110, 150, 'Quang hợp', 150, 92, 'end') + ar(130, 150, 250, 56, 'Hô hấp', 205, 118, 'start') + ar(160, 170, 238, 170, 'Ăn', 199, 162) + ar(310, 150, 310, 56, 'Hô hấp', 316, 110, 'start') + ar(520, 150, 390, 56, 'Đốt cháy', 470, 92, 'start');
    b += ar(100, 190, 160, 270, 'Chết', 120, 240, 'end') + ar(310, 190, 240, 270, 'Chết, thải', 290, 240, 'start') + ar(298, 290, 368, 290, 'Hàng triệu năm', 333, 264) + ar(500, 270, 525, 190, 'Khai thác', 520, 236, 'start');
    b += T(W / 2, H - 6, 'Chu trình carbon trong tự nhiên (sơ đồ đơn giản)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Sơ đồ chu trình carbon trong tự nhiên');
  }
  /* ======================= KHTN 9 – Di truyền, Tiến hoá ======================= */
  function genoJoin(a, b2) { // ghép hai giao tử thành kiểu gene: mỗi gene viết chữ hoa trước
    var out = ''; for (var k = 0; k < a.length; k++) { var p = [a[k], b2[k]].sort(function (x, y) { var ux = x === x.toUpperCase(), uy = y === y.toUpperCase(); return ux === uy ? (x < y ? -1 : 1) : (ux ? -1 : 1); }); out += p.join(''); } return out;
  }
  /* punnett({ g1: ['A','a'], g2: ['A','a'], n1: 'Bố (♂)', n2: 'Mẹ (♀)', traits: ['Hạt vàng','Hạt xanh'] }) – khung Punnett */
  function punnett(o) {
    o = o || {}; var g1 = o.g1 || ['A', 'a'], g2 = o.g2 || ['A', 'a'], n = g1.length, m = g2.length, cs = n > 2 ? 62 : 78, x0 = 150, y0 = 64, b = '';
    var sex = /^[XY]+$/.test(g1.concat(g2).join('')), di = g1[0].length === 2 && !sex;
    var P4 = ['#fde047', '#fdba74', '#86efac', '#93c5fd'], tr = o.traits || (sex ? ['Con gái (XX)', 'Con trai (XY)'] : (di ? ['Vàng, trơn', 'Vàng, nhăn', 'Xanh, trơn', 'Xanh, nhăn'] : ['Tính trạng trội', 'Tính trạng lặn']));
    var cls = function (gt) { if (sex) return gt.indexOf('Y') >= 0 ? 1 : 0; var up = function (c) { return c !== c.toLowerCase(); }; if (di) return (up(gt[0]) || up(gt[1]) ? 0 : 2) + (up(gt[2]) || up(gt[3]) ? 0 : 1); if (o.incomplete) return up(gt[0]) && up(gt[1]) ? 0 : (up(gt[0]) || up(gt[1]) ? 1 : 2); return up(gt[0]) || up(gt[1]) ? 0 : 1; };
    var colors = sex ? ['#fbcfe8', '#bfdbfe'] : (di ? P4 : (o.incomplete ? ['#fca5a5', '#fbcfe8', '#f8fafc'] : ['#fde047', '#86efac'])), count = {};
    b += T(x0 + n * cs / 2, 20, o.n1 || 'Giao tử ♂', { size: 13, bold: true, color: '#1d4ed8' }) + T(x0 - 50, y0 + m * cs / 2, o.n2 || 'Giao tử ♀', { size: 13, bold: true, color: '#be185d', anchor: 'end', vcenter: true });
    g1.forEach(function (g, i) { b += R(x0 + i * cs, y0 - 34, cs, 30, { fill: '#dbeafe', stroke: '#1d4ed8', sw: 1.2 }) + T(x0 + i * cs + cs / 2, y0 - 14, g, { size: 15, bold: true, color: '#1d4ed8' }); });
    g2.forEach(function (g, j) { b += R(x0 - 44, y0 + j * cs, 40, cs, { fill: '#fce7f3', stroke: '#be185d', sw: 1.2 }) + T(x0 - 24, y0 + j * cs + cs / 2 + 5, g, { size: 15, bold: true, color: '#be185d' }); });
    g2.forEach(function (gb, j) { g1.forEach(function (ga, i) { var gt = genoJoin(ga, gb), c = cls(gt); count[c] = (count[c] || 0) + 1; b += R(x0 + i * cs, y0 + j * cs, cs, cs, { fill: colors[c], stroke: '#475569', sw: 1.2 }) + T(x0 + i * cs + cs / 2, y0 + j * cs + cs / 2 + 5, gt, { size: n > 2 ? 13 : 16, bold: true }); }); });
    var lx = x0 + n * cs + 30, W = lx + 190, H = Math.max(y0 + m * cs + 16, 40 + tr.length * 30);
    tr.forEach(function (t, k) { if (!count[k] && !o.legendAll) return; b += R(lx, 44 + k * 30, 18, 18, { rx: 3, fill: colors[k], stroke: '#475569', sw: 1 }) + T(lx + 26, 58 + k * 30, t + (count[k] ? ': ' + (function (p, q) { var g = function (x, y) { return y ? g(y, x % y) : x; }, d = g(p, q); return p / d + '/' + q / d; })(count[k], n * m) : ''), { size: 12, bold: true, anchor: 'start' }); });
    return wrap(W, H, b, o.label || 'Khung Punnett xác định tỉ lệ kiểu gene, kiểu hình ở đời con');
  }
  /* crossScheme({ rows: [['P', 'AA (vàng)', '×', 'aa (xanh)'], ['G', 'A', '', 'a'], ['F₁', 'Aa – 100 % hạt vàng']], title }) – sơ đồ lai */
  function crossScheme(o) {
    var rows = o.rows, W = 600, lh = 38, H = rows.length * lh + (o.title ? 40 : 16), b = '', y0 = o.title ? 44 : 20;
    if (o.title) b += T(W / 2, 22, o.title, { size: 13, bold: true, color: '#1d4ed8' });
    rows.forEach(function (r, i) {
      var y = y0 + i * lh + 12; b += T(40, y, r[0], { size: 15, bold: true, color: '#b45309' }) + L(70, y - 20, 70, y + 10, { color: '#e2e8f0', width: 1 });
      if (r.length === 2) b += T(330, y, r[1], { size: 14, bold: true }); else { b += T(220, y, r[1], { size: 14, bold: true }) + T(330, y, r[2] || '', { size: 15, bold: true, color: C.red }) + T(440, y, r[3] || '', { size: 14, bold: true }); }
    });
    return wrap(W, H, b, o.title || 'Sơ đồ lai');
  }
  var BASEC = { A: '#ef4444', T: '#f59e0b', U: '#a855f7', G: '#22c55e', C: '#3b82f6' }, COMP = { A: 'T', T: 'A', G: 'C', C: 'G' }, COMPR = { A: 'U', T: 'A', G: 'C', C: 'G' };
  /* dnaHelix({ seq: 'ATGCGTACGTTAGC' }) – chuỗi xoắn kép DNA (sơ đồ) */
  function dnaHelix(o) {
    o = o || {}; var seq = o.seq || 'ATGCGTACGTTAGCAT', W = 620, H = 260, x0 = 40, x1 = 560, cy = 120, amp = 58, lam = (x1 - x0) / 1.5, b = '', p1 = [], p2 = [];
    for (var k = 0; k <= 150; k++) { var x = x0 + (x1 - x0) * k / 150, ph = 2 * Math.PI * (x - x0) / lam; p1.push([x, cy - amp * Math.sin(ph)]); p2.push([x, cy + amp * Math.sin(ph)]); }
    for (var i = 0; i < seq.length; i++) { var xx = x0 + 10 + (x1 - x0 - 20) * i / (seq.length - 1), ph2 = 2 * Math.PI * (xx - x0) / lam, ya = cy - amp * Math.sin(ph2), yb = cy + amp * Math.sin(ph2), bs = seq[i], cp = COMP[bs]; b += L(xx, ya, xx, cy, { color: BASEC[bs], width: 5 }) + L(xx, cy, xx, yb, { color: BASEC[cp], width: 5 }); }
    b += P(polyPath(p1), { stroke: '#1e3a8a', sw: 5 }) + P(polyPath(p2), { stroke: '#64748b', sw: 5 });
    b += T(x0, cy - amp - 16, 'Mạch 1', { size: 12, bold: true, anchor: 'start', color: '#1e3a8a' }) + T(x0, cy + amp + 26, 'Mạch 2', { size: 12, bold: true, anchor: 'start', color: '#475569' });
    var lg = [['A', 'Adenine'], ['T', 'Thymine'], ['G', 'Guanine'], ['C', 'Cytosine']]; lg.forEach(function (q, j) { b += R(90 + j * 120, 214, 16, 16, { rx: 3, fill: BASEC[q[0]] }) + T(112 + j * 120, 227, q[0] + ' – ' + q[1], { size: 12, bold: true, anchor: 'start' }); });
    b += T(W / 2, 252, 'A liên kết với T, G liên kết với C (nguyên tắc bổ sung); hai mạch xoắn song song quanh một trục', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Mô hình cấu trúc xoắn kép của phân tử DNA (sơ đồ)');
  }
  /* strandPair({ s1: 'ATGCTA', rna: false, n1: 'Mạch 1', n2: 'Mạch 2', hl: [2], s2: tuỳ chọn, codon: false, title }) – hai mạch theo nguyên tắc bổ sung */
  function strandPair(o) {
    o = o || {}; var s1 = o.s1 || 'ATGCTA', s2 = o.s2 || s1.split('').map(function (c) { return (o.rna ? COMPR : COMP)[c] || ' '; }).join(''), n = Math.max(s1.length, s2.length), gap = o.codon ? 8 : 0, cw = Math.min(40, (480 - gap * n / 3) / n), x0 = 120, b = '', hl = o.hl || [];
    var W = x0 + n * cw + Math.floor(n / 3) * gap + 30, H = o.title ? 150 : 126, y1 = o.title ? 50 : 26, y2 = y1 + 64;
    var X = function (i) { return x0 + i * cw + (o.codon ? Math.floor(i / 3) * gap : 0); };
    if (o.title) b += T(W / 2, 20, o.title, { size: 13, bold: true, color: '#1d4ed8' });
    b += T(x0 - 10, y1 + 21, o.n1 || 'Mạch 1', { size: 12, bold: true, anchor: 'end' }) + T(x0 - 10, y2 + 21, o.n2 || (o.rna ? 'mRNA' : 'Mạch 2'), { size: 12, bold: true, anchor: 'end', color: o.rna ? '#7e22ce' : C.ink });
    for (var i = 0; i < n; i++) {
      var c1 = s1[i], c2 = s2[i], on = hl.indexOf(i) >= 0, x = X(i);
      if (c1 && c1 !== ' ' && c1 !== '-') b += R(x + 2, y1, cw - 4, 30, { rx: 5, fill: BASEC[c1] || '#e5e7eb', stroke: on ? C.ink : 'none', sw: on ? 3 : 1, op: 0.9 }) + T(x + cw / 2, y1 + 21, c1, { size: 15, bold: true, color: '#fff' });
      if (c2 && c2 !== ' ' && c2 !== '-') b += R(x + 2, y2, cw - 4, 30, { rx: 5, fill: BASEC[c2] || '#e5e7eb', stroke: on ? C.ink : 'none', sw: on ? 3 : 1, op: 0.9 }) + T(x + cw / 2, y2 + 21, c2, { size: 15, bold: true, color: '#fff' });
      if (c1 && c2 && c1 !== ' ' && c2 !== ' ' && c1 !== '-' && c2 !== '-' && !o.noBonds) b += L(x + cw / 2 - 3, y1 + 32, x + cw / 2 - 3, y2 - 2, { color: '#94a3b8', width: 1.3, dash: '3 2' }) + L(x + cw / 2 + 3, y1 + 32, x + cw / 2 + 3, y2 - 2, { color: '#94a3b8', width: 1.3, dash: '3 2' });
    }
    return wrap(W, H, b, o.title || 'Trình tự nucleotide trên hai mạch theo nguyên tắc bổ sung');
  }
  /* replicationFork() – tái bản DNA theo nguyên tắc bán bảo toàn */
  function replicationFork() {
    var W = 620, H = 240, b = '', old = '#1e3a8a', nw = '#f97316';
    var bars = function (x1, x2, y, col) { return L(x1, y, x2, y, { color: col, width: 6 }); };
    b += bars(40, 250, 100, old) + bars(40, 250, 140, old); for (var k = 0; k < 10; k++) b += L(55 + k * 20, 104, 55 + k * 20, 136, { color: '#94a3b8', width: 2 });
    b += P('M250,100 Q300,100 340,50 L580,50', { stroke: old, sw: 6 }) + P('M250,140 Q300,140 340,190 L580,190', { stroke: old, sw: 6 });
    b += L(350, 84, 580, 84, { color: nw, width: 6 }) + L(350, 156, 580, 156, { color: nw, width: 6 });
    for (k = 0; k < 11; k++) { b += L(360 + k * 20, 55, 360 + k * 20, 80, { color: '#94a3b8', width: 2 }) + L(360 + k * 20, 160, 360 + k * 20, 186, { color: '#94a3b8', width: 2 }); }
    b += T(145, 80, 'DNA mẹ', { size: 13, bold: true }) + T(470, 38, 'Mạch cũ (của DNA mẹ)', { size: 12, bold: true, color: old }) + T(470, 112, 'Mạch mới tổng hợp', { size: 12, bold: true, color: nw }) + T(470, 146, 'Mạch mới tổng hợp', { size: 12, bold: true, color: nw }) + T(470, 208, 'Mạch cũ (của DNA mẹ)', { size: 12, bold: true, color: old });
    b += T(W / 2, H - 8, 'Mỗi DNA con gồm một mạch cũ và một mạch mới (nguyên tắc bổ sung, bán bảo toàn)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Sơ đồ tái bản DNA');
  }
  /* translation({ codons: ['AUG','GGC','UUA','UAA'], aas: ['Met','Gly','Leu','Kết thúc'] }) – dịch mã (sơ đồ đơn giản) */
  function translation(o) {
    o = o || {}; var cd = o.codons || ['AUG', 'GGC', 'UUA', 'AAA', 'UAA'], aa = o.aas || ['Met', 'Gly', 'Leu', 'Lys', 'Kết thúc'], cw = 100, x0 = 60, W = x0 + cd.length * cw + 40, H = 250, b = '', id = 'tl' + (++uid);
    b += A(id, '#475569', 7) + T(x0 - 10, 180, 'mRNA', { size: 13, bold: true, anchor: 'end', color: '#7e22ce' });
    cd.forEach(function (c, i) { var x = x0 + i * cw; for (var j = 0; j < 3; j++) b += R(x + 8 + j * 28, 162, 26, 28, { rx: 4, fill: BASEC[c[j]], op: 0.9 }) + T(x + 21 + j * 28, 182, c[j], { size: 14, bold: true, color: '#fff' }); b += L(x + 50, 156, x + 50, 110, { color: '#475569', width: 1.5, marker: id }); var stop = /Kết thúc/.test(aa[i]); b += stop ? R(x + 14, 72, 72, 30, { rx: 8, fill: '#f1f5f9', stroke: '#94a3b8', sw: 1.2 }) + T(x + 50, 92, aa[i], { size: 12, bold: true, color: C.muted }) : Ci(x + 50, 88, 22, { fill: '#fde68a', stroke: '#a16207', sw: 1.5 }) + T(x + 50, 93, aa[i], { size: 12, bold: true }); if (i && !stop) b += L(x - 28, 88, x + 28, 88, { width: 3, color: '#a16207' }); });
    b += E(x0 + 100, 176, 104, 30, { stroke: '#64748b', sw: 1.5, dash: true }) + T(x0 + 100, 222, 'Ribosome (dịch chuyển trên mRNA)', { size: 12, bold: true, color: '#475569' }) + T(W / 2, 30, 'Mỗi bộ ba (codon) trên mRNA quy định một amino acid; bộ ba kết thúc không quy định amino acid', { size: 12, bold: true });
    b += T(W / 2, H - 6, 'Chuỗi amino acid (polypeptide) được hình thành theo trình tự các bộ ba (sơ đồ đơn giản)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Sơ đồ quá trình dịch mã tổng hợp chuỗi polypeptide');
  }
  function chromo(x, y, len, col, dup, w) { // NST thẳng đứng, tâm (x, y); dup: NST kép
    w = w || 9; var g = '', half = len / 2, one = function (cx) { return R(cx - w / 2, y - half, w, half - 3, { rx: w / 2, fill: col, stroke: '#334155', sw: 1 }) + R(cx - w / 2, y + 3, w, half - 3, { rx: w / 2, fill: col, stroke: '#334155', sw: 1 }); };
    if (dup) g += one(x - w / 2 - 0.5) + one(x + w / 2 + 0.5) + Ci(x, y, 3.2, { fill: '#334155' }); else g += one(x) + Ci(x, y, 2.6, { fill: '#334155' });
    return g;
  }
  /* chromosome() – cấu trúc NST kép ở kì giữa */
  function chromosome() {
    var W = 600, H = 250, b = '';
    b += R(322, 30, 34, 90, { rx: 17, fill: '#c4b5fd', stroke: '#5b21b6', sw: 2 }) + R(322, 132, 34, 100, { rx: 17, fill: '#c4b5fd', stroke: '#5b21b6', sw: 2 }) + R(364, 30, 34, 90, { rx: 17, fill: '#a78bfa', stroke: '#5b21b6', sw: 2 }) + R(364, 132, 34, 100, { rx: 17, fill: '#a78bfa', stroke: '#5b21b6', sw: 2 });
    b += P('M339,118 Q360,126 381,118 L381,134 Q360,126 339,134 Z', { fill: '#5b21b6' });
    var co = [[322, 70, 210, 70, 'Nhiễm sắc tử (chromatid)'], [398, 180, 430, 200, 'Nhiễm sắc tử chị em'], [362, 126, 430, 126, 'Tâm động'], [339, 40, 210, 26, 'Đầu mút']];
    b += co.map(function (c) { var an = c[2] > c[0] ? 'start' : 'end'; return L(c[0], c[1], c[2], c[3], { color: '#475569', width: 1.3 }) + Ci(c[0], c[1], 2.6, { fill: '#475569' }) + T(c[2] + (an === 'start' ? 4 : -4), c[3] + 5, c[4], { size: 13, bold: true, anchor: an }); }).join('');
    b += T(W / 2, H - 4, 'NST kép ở kì giữa gồm hai nhiễm sắc tử chị em đính nhau ở tâm động', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Cấu trúc nhiễm sắc thể kép');
  }
  /* karyotype({ sex: 'XY' | 'XX', tri: 21 }) – bộ NST người (sơ đồ) */
  function karyotype(o) {
    o = o || {}; var W = 620, H = 330, b = '', rows = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 'sex']], ht = function (k) { return k === 'X' ? 44 : (k === 'Y' ? 20 : 64 - (k - 1) * 2.2); };
    rows.forEach(function (r, ri) {
      var y = 50 + ri * 72 + (ri === 0 ? 4 : 0), step = W / (r.length + 0.4);
      r.forEach(function (k, ci) {
        var cx = step * (ci + 0.7), pair = k === 'sex' ? (o.sex === 'XX' ? ['X', 'X'] : ['X', 'Y']) : [k, k]; if (o.tri === k) pair.push(k);
        var col = k === 'sex' ? '#f9a8d4' : (o.tri === k ? '#fca5a5' : '#c4b5fd');
        pair.forEach(function (q, j) { var h = ht(q) * 0.75, x = cx + (j - (pair.length - 1) / 2) * 16; b += chromo(x, y - h / 2 + 22, h, q === 'Y' ? '#93c5fd' : col, false, 9); });
        b += T(cx, y + 42, k === 'sex' ? (o.sex === 'XX' ? 'XX' : 'XY') : String(k), { size: 12, bold: true, color: o.tri === k ? C.red : C.ink });
      });
    });
    b += T(W / 2, 16, o.tri ? 'Có 3 NST số ' + o.tri + ' (thể ba nhiễm – hội chứng Down)' : (o.sex === 'XX' ? 'Bộ NST của nữ: 22 cặp NST thường + XX' : 'Bộ NST của nam: 22 cặp NST thường + XY'), { size: 13, bold: true, color: o.tri ? C.red : '#1d4ed8' });
    b += T(W / 2, H - 6, 'Bộ NST người 2n = 46 (sơ đồ, kích thước không theo tỉ lệ thực)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Sơ đồ bộ nhiễm sắc thể của người');
  }
  function cellBox(cx, cy, r, inner, lab) { return Ci(cx, cy, r, { fill: '#fefce8', stroke: '#a16207', sw: 2 }) + inner + T(cx, cy + r + 20, lab, { size: 12, bold: true }); }
  /* cellStages({ kind: 'nguyen-phan' | 'giam-phan' }) – các kì phân bào (2n = 4) */
  function cellStages(o) {
    o = o || {}; var gp = o.kind === 'giam-phan', W = 640, H = 200, b = '', cy = 90, R1 = 50, xs = [66, 192, 318, 444, 572], red = '#f87171', blue = '#60a5fa';
    var P2 = [[red, 34], [blue, 34], [red, 22], [blue, 22]];
    if (!gp) {
      var sq = ''; for (var k = 0; k < 4; k++) sq += P('M' + (40 + k * 12) + ',' + (cy - 20 + k * 9) + ' q8,-10 16,0 t16,0', { stroke: P2[k][0], sw: 2 }); b += cellBox(xs[0], cy, R1, sq, 'Kì trung gian') + Ci(xs[0], cy, 22, { stroke: '#a16207', sw: 1, dash: true });
      b += cellBox(xs[1], cy, R1, chromo(xs[1] - 20, cy - 10, 34, red, true) + chromo(xs[1] + 18, cy - 14, 34, blue, true) + chromo(xs[1] - 8, cy + 22, 22, red, true) + chromo(xs[1] + 22, cy + 20, 22, blue, true), 'Kì đầu');
      b += cellBox(xs[2], cy, R1, L(xs[2], cy - 46, xs[2], cy + 46, { color: '#d4d4d4', width: 1, dash: '3 3' }) + [0, 1, 2, 3].map(function (i) { return chromo(xs[2], cy - 30 + i * 20, P2[i][1] * 0.55, P2[i][0], true, 7).replace(/rx="3.5"/g, 'rx="3.5"'); }).join(''), 'Kì giữa');
      var sep = ''; [-1, 1].forEach(function (s) { P2.forEach(function (p, i) { sep += chromo(xs[3] + s * 30, cy - 27 + i * 18, p[1] * 0.5, p[0], false, 7); }); }); b += cellBox(xs[3], cy, R1, sep, 'Kì sau');
      var two = ''; [-1, 1].forEach(function (s) { var cx = xs[4] + s * 28; two += Ci(cx, cy, 25, { fill: '#fefce8', stroke: '#a16207', sw: 2 }); P2.forEach(function (p, i) { two += chromo(cx - 9 + (i % 2) * 18, cy - 8 + Math.floor(i / 2) * 18, p[1] * 0.4, p[0], false, 6); }); }); b += two + T(xs[4], cy + R1 + 20, 'Kì cuối', { size: 12, bold: true });
      b += T(W / 2, H - 6, 'Nguyên phân: từ 1 tế bào (2n = 4) tạo 2 tế bào con có bộ NST 2n giống tế bào mẹ', { size: 12, color: C.muted });
    } else {
      b += cellBox(xs[0], cy, R1, [0, 1].map(function (i) { return chromo(xs[0] - 10, cy - 18 + i * 34, P2[i * 2][1] * 0.8, red, true, 7) + chromo(xs[0] + 10, cy - 18 + i * 34, P2[i * 2][1] * 0.8, blue, true, 7); }).join(''), 'Kì giữa I');
      b += cellBox(xs[1], cy, R1, chromo(xs[1] - 30, cy - 16, 26, red, true, 7) + chromo(xs[1] - 30, cy + 18, 18, blue, true, 7) + chromo(xs[1] + 30, cy - 16, 26, blue, true, 7) + chromo(xs[1] + 30, cy + 18, 18, red, true, 7), 'Kì sau I');
      var c2 = ''; [[-1, [red, blue]], [1, [blue, red]]].forEach(function (q) { var cx = xs[2] + q[0] * 28; c2 += Ci(cx, cy, 25, { fill: '#fefce8', stroke: '#a16207', sw: 2 }) + chromo(cx, cy - 8, 20, q[1][0], true, 6) + chromo(cx, cy + 14, 14, q[1][1], true, 6); }); b += c2 + T(xs[2], cy + R1 + 20, 'Kết thúc GP I (n kép)', { size: 12, bold: true });
      var c3 = ''; [[-1, [red, blue]], [1, [blue, red]]].forEach(function (q) { var cx = xs[3] + q[0] * 28; c3 += Ci(cx, cy, 25, { fill: '#fefce8', stroke: '#a16207', sw: 2 }) + chromo(cx - 8, cy, 18, q[1][0], false, 6) + chromo(cx + 8, cy, 18, q[1][0], false, 6) + chromo(cx - 8, cy + 18, 10, q[1][1], false, 5) + chromo(cx + 8, cy + 18, 10, q[1][1], false, 5); }); b += c3 + T(xs[3], cy + R1 + 20, 'Kì sau II', { size: 12, bold: true });
      var c4 = '', gam = [[red, blue], [red, blue], [blue, red], [blue, red]]; gam.forEach(function (g, i) { var cx = xs[4] - 36 + (i % 2) * 72 - (i % 2) * 36, cy2 = cy - 22 + Math.floor(i / 2) * 44; cx = xs[4] + (i % 2 ? 22 : -22); c4 += Ci(cx, cy2, 19, { fill: '#fefce8', stroke: '#a16207', sw: 2 }) + chromo(cx - 5, cy2, 18, g[0], false, 5) + chromo(cx + 6, cy2 + 2, 12, g[1], false, 5); }); b += c4 + T(xs[4], cy + R1 + 20, '4 tế bào con (n)', { size: 12, bold: true });
      b += T(W / 2, H - 6, 'Giảm phân: từ 1 tế bào (2n = 4) qua hai lần phân bào tạo 4 tế bào con có bộ NST đơn bội n = 2', { size: 12, color: C.muted });
    }
    return wrap(W, H, b, gp ? 'Sơ đồ các kì chính của giảm phân' : 'Sơ đồ các kì của nguyên phân');
  }
  /* linkedGenes({ top: ['A','B'], bottom: ['a','b'] }) – hai gene cùng nằm trên một NST */
  function linkedGenes(o) {
    o = o || {}; var t = o.top || ['A', 'B'], bt = o.bottom || ['a', 'b'], W = 560, H = 230, b = '';
    [[200, t, '#fca5a5'], [260, bt, '#93c5fd']].forEach(function (q) { b += R(q[0] - 14, 30, 28, 160, { rx: 14, fill: q[2], stroke: '#334155', sw: 1.5 }) + Ci(q[0], 110, 4, { fill: '#334155' }); q[1].forEach(function (g, i) { var y = 60 + i * 90; b += R(q[0] - 14, y - 8, 28, 16, { fill: '#fef08a', stroke: '#a16207', sw: 1 }) + T(q[0] + (q[0] < 230 ? -24 : 24), y + 5, g, { size: 16, bold: true, anchor: q[0] < 230 ? 'end' : 'start' }); }); });
    b += T(380, 70, 'Gene nằm trên cùng', { size: 12, bold: true, anchor: 'start' }) + T(380, 88, 'một NST di truyền', { size: 12, bold: true, anchor: 'start' }) + T(380, 106, 'cùng nhau', { size: 12, bold: true, anchor: 'start' }) + T(380, 140, 'Kiểu gene: ' + t.join('') + '/' + bt.join(''), { size: 13, bold: true, anchor: 'start', color: '#1d4ed8' }) + T(380, 162, 'Giao tử: ' + t.join('') + ' và ' + bt.join(''), { size: 13, bold: true, anchor: 'start', color: '#1d4ed8' });
    b += T(W / 2, H - 8, 'Cặp NST tương đồng mang hai cặp gene liên kết hoàn toàn (sơ đồ)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Hai cặp gene cùng nằm trên một cặp nhiễm sắc thể tương đồng');
  }
  /* chromMutation({ kind: 'mat-doan' | 'lap-doan' | 'dao-doan' | 'chuyen-doan' | 'all' }) – đột biến cấu trúc NST */
  function chromMutation(o) {
    o = o || {}; var kinds = o.kind && o.kind !== 'all' ? [o.kind] : ['mat-doan', 'lap-doan', 'dao-doan', 'chuyen-doan'], NM = { 'mat-doan': ['Mất đoạn', 'ABE•FGH'], 'lap-doan': ['Lặp đoạn', 'ABCBCDE•FGH'], 'dao-doan': ['Đảo đoạn', 'ADCBE•FGH'], 'chuyen-doan': ['Chuyển đoạn', 'ABCDE•FMN'] }, W = 620, rh = 56, H = kinds.length * rh + 50, b = '', sw = 30;
    var bar = function (x, y, s, hl, col) { var g = '', cx = x; s.split('').forEach(function (c) { if (c === '•') { g += Ci(cx + 6, y + 13, 6, { fill: '#334155' }); cx += 12; return; } var on = hl.indexOf(c) >= 0; g += R(cx, y, sw, 26, { fill: on ? '#fca5a5' : (col || '#ddd6fe'), stroke: '#475569', sw: 1 }) + T(cx + sw / 2, y + 18, c, { size: 13, bold: true }); cx += sw; }); return g; };
    b += T(20, 30, 'NST ban đầu:', { size: 12, bold: true, anchor: 'start' }) + bar(140, 12, 'ABCDE•FGH', []);
    kinds.forEach(function (k, i) { var y = 50 + i * rh, hl = { 'mat-doan': [], 'lap-doan': ['B', 'C'], 'dao-doan': ['D', 'C', 'B'], 'chuyen-doan': ['M', 'N'] }[k]; b += T(20, y + 22, NM[k][0] + ':', { size: 12, bold: true, anchor: 'start', color: C.red }) + bar(140, y + 4, NM[k][1], hl); if (k === 'mat-doan') b += T(140 + 7 * sw + 24, y + 22, '(mất đoạn CD)', { size: 12, anchor: 'start', color: C.muted }); if (k === 'chuyen-doan') b += T(140 + 8 * sw + 30, y + 22, '(GH đổi chỗ với MN của NST khác)', { size: 12, anchor: 'start', color: C.muted }); });
    return wrap(W, H, b, 'Các dạng đột biến cấu trúc nhiễm sắc thể (sơ đồ)');
  }
  /* ploidy() – đột biến số lượng NST: 2n, 2n + 1, 2n − 1, 3n (loài có n = 3) */
  function ploidy() {
    var W = 620, H = 200, b = '', sets = [['Bình thường (2n)', [2, 2, 2]], ['Thể ba (2n + 1)', [2, 3, 2]], ['Thể một (2n − 1)', [2, 1, 2]], ['Tam bội (3n)', [3, 3, 3]]], hs = [46, 34, 24];
    sets.forEach(function (s, i) { var cx = 80 + i * 153; b += Ci(cx, 90, 62, { fill: '#fefce8', stroke: '#a16207', sw: 2 }); s[1].forEach(function (c, j) { for (var q = 0; q < c; q++) b += chromo(cx - 34 + j * 34 + (q - (c - 1) / 2) * 11, 90, hs[j], (c !== 2 && i < 3) ? '#fca5a5' : ['#c4b5fd', '#93c5fd', '#86efac'][j], false, 8); }); b += T(cx, 174, s[0], { size: 12, bold: true, color: i ? C.red : C.ink }); });
    b += T(W / 2, H - 4, 'Ví dụ ở loài có n = 3 (sơ đồ): mỗi màu là một cặp NST tương đồng', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Một số dạng đột biến số lượng nhiễm sắc thể');
  }
  /* pedigree({ people: [{ id, x, g, sex: 'm'|'f', aff }], couples: [[a, b]], kids: [[a, b, [ids]]], title }) – sơ đồ phả hệ */
  function pedigree(o) {
    var ppl = {}, W = o.w || 560, gens = 0, b = '', s = 30, Y = function (g) { return 50 + (g - 1) * 90; };
    o.people.forEach(function (p) { ppl[p.id] = p; gens = Math.max(gens, p.g); });
    var H = Y(gens) + 90, pos = function (id) { var p = ppl[id]; return [p.x, Y(p.g)]; };
    (o.couples || []).forEach(function (c) { var a = pos(c[0]), d = pos(c[1]); b += L(a[0] + s / 2, a[1], d[0] - s / 2, d[1], { width: 2 }); });
    (o.kids || []).forEach(function (k) { var a = pos(k[0]), d = pos(k[1]), mx = (a[0] + d[0]) / 2, ys = a[1] + 45, xs = k[2].map(function (id) { return pos(id)[0]; }); b += L(mx, a[1], mx, ys, { width: 2 }) + L(Math.min.apply(null, xs.concat([mx])), ys, Math.max.apply(null, xs.concat([mx])), ys, { width: 2 }); xs.forEach(function (x) { b += L(x, ys, x, ys + 45 - s / 2, { width: 2 }); }); });
    o.people.forEach(function (p) { var q = pos(p.id), f = p.aff ? '#1f2937' : '#fff'; b += p.sex === 'm' ? R(q[0] - s / 2, q[1] - s / 2, s, s, { fill: f, stroke: C.ink, sw: 2 }) : Ci(q[0], q[1], s / 2, { fill: f, stroke: C.ink, sw: 2 }); b += T(q[0], q[1] + s / 2 + 16, String(p.id), { size: 11, color: C.muted }); });
    for (var g = 1; g <= gens; g++) b += T(18, Y(g) + 5, ['I', 'II', 'III', 'IV'][g - 1], { size: 14, bold: true, color: '#b45309' });
    var ly = H - 22; b += R(40, ly - 11, 14, 14, { fill: '#fff', stroke: C.ink, sw: 1.5 }) + T(60, ly, 'Nam bình thường', { size: 11, anchor: 'start' }) + Ci(177, ly - 4, 7, { fill: '#fff', stroke: C.ink, sw: 1.5 }) + T(188, ly, 'Nữ bình thường', { size: 11, anchor: 'start' }) + R(300, ly - 11, 14, 14, { fill: '#1f2937', stroke: C.ink, sw: 1.5 }) + T(320, ly, 'Nam bị bệnh', { size: 11, anchor: 'start' }) + Ci(417, ly - 4, 7, { fill: '#1f2937', stroke: C.ink, sw: 1.5 }) + T(428, ly, 'Nữ bị bệnh', { size: 11, anchor: 'start' });
    return wrap(W, H, b, o.title || 'Sơ đồ phả hệ');
  }
  /* geneTransfer() – tạo vi khuẩn sản xuất insulin người (sơ đồ) */
  function geneTransfer() {
    var W = 640, H = 230, id = 'gt' + (++uid), b = A(id, '#475569', 8);
    b += Ci(70, 90, 44, { fill: '#fde7d4', stroke: '#c08457', sw: 2 }) + P('M45,90 q12,-14 25,0 t25,0', { stroke: '#1e3a8a', sw: 3 }) + R(62, 82, 16, 16, { fill: 'none', stroke: C.red, sw: 2 }) + T(70, 150, 'Tế bào người', { size: 12, bold: true }) + T(70, 166, '(gene insulin)', { size: 11, color: C.muted });
    b += L(120, 90, 170, 90, { width: 2, marker: id }) + T(145, 80, 'cắt', { size: 11, bold: true, color: '#0f766e' });
    b += R(180, 82, 40, 16, { rx: 3, fill: '#fca5a5', stroke: C.red, sw: 1.5 }) + T(200, 120, 'Gene cần chuyển', { size: 11, bold: true });
    b += Ci(200, 36, 18, { stroke: '#7c3aed', sw: 3 }) + T(230, 30, 'Plasmid', { size: 11, bold: true, anchor: 'start', color: '#7c3aed' });
    b += L(230, 90, 285, 90, { width: 2, marker: id }) + T(258, 80, 'nối', { size: 11, bold: true, color: '#0f766e' });
    b += Ci(330, 90, 32, { stroke: '#7c3aed', sw: 3 }) + P('M' + (330 + 32 * Math.cos(-0.5)) + ',' + (90 + 32 * Math.sin(-0.5)) + ' A32,32 0 0 1 ' + n2(330 + 32 * Math.cos(0.5)) + ',' + n2(90 + 32 * Math.sin(0.5)), { stroke: C.red, sw: 5 }) + T(330, 150, 'DNA tái tổ hợp', { size: 12, bold: true });
    b += L(372, 90, 420, 90, { width: 2, marker: id }) + T(396, 80, 'chuyển', { size: 11, bold: true, color: '#0f766e' });
    b += R(430, 62, 90, 56, { rx: 28, fill: '#dcfce7', stroke: '#15803d', sw: 2 }) + Ci(475, 90, 12, { stroke: '#7c3aed', sw: 2 }) + T(475, 150, 'Vi khuẩn E. coli', { size: 12, bold: true });
    b += L(526, 90, 560, 90, { width: 2, marker: id }) + [0, 1, 2].map(function (i) { return Ci(585 + (i % 2) * 18, 74 + i * 16, 6, { fill: '#fde047', stroke: '#a16207', sw: 1 }); }).join('') + T(595, 150, 'Insulin', { size: 12, bold: true });
    b += T(W / 2, 200, 'Vi khuẩn mang gene insulin sinh sản rất nhanh, tạo ra lượng lớn insulin dùng chữa bệnh tiểu đường', { size: 12, color: C.muted }) + T(W / 2, 220, '(sơ đồ đơn giản các bước của kĩ thuật chuyển gene)', { size: 11, color: C.muted });
    return wrap(W, H, b, 'Sơ đồ kĩ thuật chuyển gene insulin người vào vi khuẩn');
  }
  /* evoTree({ tree: ['Cá', ['Lưỡng cư', ['Thú', ['Bò sát', 'Chim']]]], title }) – cây phát sinh (sơ đồ) */
  function evoTree(o) {
    o = o || {}; var tree = o.tree || ['Cá xương', ['Lưỡng cư', ['Thú', ['Bò sát', 'Chim']]]], leaves = [], b = '', W = 600;
    var depth = function (t) { return typeof t === 'string' ? 0 : 1 + Math.max.apply(null, t.map(depth)); }, D = depth(tree), n = 0;
    var count = function (t) { if (typeof t === 'string') { n++; return; } t.forEach(count); }; count(tree);
    var H = n * 46 + 60, x0 = 40, xl = 400, dx = (xl - x0) / D, yi = 0;
    var draw = function (t, lvl) { if (typeof t === 'string') { var y = 36 + yi * 46; yi++; b += T(xl + 12, y + 5, t, { size: 14, bold: true, anchor: 'start' }); return [xl, y]; } var xs = x0 + lvl * dx, ch = t.map(function (c) { return draw(c, lvl + 1); }), ys = ch.map(function (c) { return c[1]; }), my = (Math.min.apply(null, ys) + Math.max.apply(null, ys)) / 2; b += L(xs, Math.min.apply(null, ys), xs, Math.max.apply(null, ys), { width: 3, color: '#15803d' }); ch.forEach(function (c) { b += L(xs, c[1], c[0], c[1], { width: 3, color: '#15803d' }); }); b += Ci(xs, my, 4.5, { fill: '#15803d' }); return [xs, my]; };
    var root = draw(tree, 0); b += L(x0 - 20, root[1], x0, root[1], { width: 3, color: '#15803d' }) + T(x0 - 22, root[1] - 10, o.root || 'Tổ tiên chung', { size: 11, bold: true, anchor: 'start', color: '#15803d' });
    b += T(W / 2, H - 10, o.title || 'Cây phát sinh chủng loại (sơ đồ đơn giản): nhánh càng gần nhau, quan hệ họ hàng càng gần', { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Cây phát sinh chủng loại');
  }
  /* geoTimeline() – các đại địa chất (không theo tỉ lệ thời gian) */
  function geoTimeline() {
    var W = 640, H = 250, b = '', E5 = [['Thái cổ', '4 000 – 2 500', 'Sự sống đầu tiên\n(nhân sơ)', '#e7e5e4'], ['Nguyên sinh', '2 500 – 541', 'Sinh vật nhân thực,\nsinh vật đa bào', '#fde68a'], ['Cổ sinh', '541 – 252', 'Cá, lưỡng cư, bò sát;\nthực vật lên cạn', '#bbf7d0'], ['Trung sinh', '252 – 66', 'Khủng long;\nthú, chim xuất hiện', '#bfdbfe'], ['Tân sinh', '66 – nay', 'Thú, chim phát triển;\nloài người xuất hiện', '#fbcfe8']], cw = 120;
    E5.forEach(function (e, i) { var x = 20 + i * cw; b += R(x, 40, cw, 50, { fill: e[3], stroke: '#475569', sw: 1.2 }) + T(x + cw / 2, 62, 'Đại ' + e[0], { size: 12, bold: true }) + T(x + cw / 2, 80, e[1], { size: 11, color: '#374151' }) + T(x + cw / 2, 112 + (i % 2) * 44, e[2], { size: 11, color: C.ink }) + L(x + cw / 2, 92, x + cw / 2, 98 + (i % 2) * 44, { color: '#94a3b8', width: 1 }); });
    b += T(W / 2, 22, 'Thời gian (triệu năm trước) →  hiện nay', { size: 12, bold: true }) + T(W / 2, H - 10, 'Các mốc thời gian là giá trị gần đúng (tham khảo); độ dài các ô không theo tỉ lệ thời gian', { size: 11, color: C.muted });
    return wrap(W, H, b, 'Các đại địa chất và sự phát triển của sinh giới');
  }

  var API = { labelled: labelled, cell: cell, microscope: microscope, magnifier: magnifier, ruler: ruler, thermometer: thermometer, dial: dial, forceMeter: forceMeter, clock: clock,
    particles: particles, stateChange: stateChange, forces: forces, springs: springs, sign: sign, signs: signs, keyTree: keyTree, sunEarth: sunEarth, sunPath: sunPath,
    moonStrip: moonStrip, moonOrbit: moonOrbit, moonFace: function (p, r) { var rr = r || 30; return wrap(2 * rr + 8, 2 * rr + 8, moonFace(rr + 4, rr + 4, rr, p), 'Mặt Trăng'); },
    solarSystem: solarSystem, constellation: constellation, galaxy: galaxy, bacteria: bacteria, virus: virus, taxonomy: taxonomy, lab: lab, energyFlow: energyFlow, pieChart: pieChart, cellDivision: cellDivision,
    kwrap: wrap,
    atomModel: atomModel, periodicTable: periodicTable, elementCell: elementCell, moleculeModel: moleculeModel, saltLattice: saltLattice, bondScheme: bondScheme, valenceCross: valenceCross,
    xyGraph: xyGraph, photoGate: photoGate, roadSafety: roadSafety, soundWave: soundWave, oscillo: oscillo, hearingRange: hearingRange, echoScene: echoScene,
    lightBeams: lightBeams, shadowScene: shadowScene, reflectionRays: reflectionRays, mirrorImage: mirrorImage, magnetField: magnetField, magnetPoles: magnetPoles, compassRose: compassRose,
    earthField: earthField, electromagnet: electromagnet, photosynthesisScheme: photosynthesisScheme, respirationScheme: respirationScheme, stomataPair: stomataPair, plantTransport: plantTransport,
    starchTest: starchTest, elodeaExp: elodeaExp, respExperiment: respExperiment, stemDyeExp: stemDyeExp, circulation: circulation, alveolus: alveolus, tropism: tropism, meristem: meristem,
    lifeCycle: lifeCycle, flowerParts: flowerParts, vegProp: vegProp, asexualAnimal: asexualAnimal, zygoteFlow: zygoteFlow, unityWheel: unityWheel, motionStrip: motionStrip, speedCamera: speedCamera,
    apparatus: apparatus, burnerFlame: burnerFlame, heatTube: heatTube, reactionParticles: reactionParticles, massBalance: massBalance, molMap: molMap, solutionScheme: solutionScheme, tubesCompare: tubesCompare, phScale: phScale, fertilizerBag: fertilizerBag, gasCollect: gasCollect, cylinderReading: cylinderReading, overflowCan: overflowCan, pressureBricks: pressureBricks, liquidPressure: liquidPressure, communicatingVessels: communicatingVessels, torricelli: torricelli, buoyancy: buoyancy, archimedesExp: archimedesExp, momentForce: momentForce, lever: lever, circuit: circuit, circuitSymbols: circuitSymbols, chargeScene: chargeScene, currentDir: currentDir, meter: meter, heatParticles: heatParticles, joulemeter: joulemeter, heatTransfer: heatTransfer, expansion: expansion, humanBody: humanBody, armMuscle: armMuscle, boneLong: boneLong, bloodCells: bloodCells, heart: heart, neuron: neuron, eyeSection: eyeSection, eyeFocus: eyeFocus, earSection: earSection, skinSection: skinSection, foodWeb: foodWeb, foodChain: foodChain, ecoPyramid: ecoPyramid, toleranceRange: toleranceRange, ageStructure: ageStructure, biosphere: biosphere, energyDrop: energyDrop, pendulum: pendulum, workForce: workForce, refraction: refraction, opticalFiber: opticalFiber, prism: prism, lensShapes: lensShapes, lensRay: lensRay, opticalBench: opticalBench, resCircuit: resCircuit, wireRes: wireRes, induction: induction, generator: generator, acWave: acWave, renewables: renewables, activitySeries: activitySeries, structFormula: structFormula, oilColumn: oilColumn, blastFurnace: blastFurnace, polymerChain: polymerChain, carbonCycle: carbonCycle, punnett: punnett, crossScheme: crossScheme, dnaHelix: dnaHelix, strandPair: strandPair, replicationFork: replicationFork, translation: translation, chromosome: chromosome, karyotype: karyotype, cellStages: cellStages, linkedGenes: linkedGenes, chromMutation: chromMutation, ploidy: ploidy, pedigree: pedigree, geneTransfer: geneTransfer, evoTree: evoTree, geoTimeline: geoTimeline };
  Object.keys(API).forEach(function (k) { S[k] = API[k]; });
})();
