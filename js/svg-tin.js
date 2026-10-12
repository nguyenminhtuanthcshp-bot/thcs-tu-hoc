/* THCS Tự Học – hình minh hoạ SVG bổ sung cho môn Tin học (dùng từ Tin học 6).
   Nạp SAU js/svg.js và TRƯỚC các tệp trong data/. Chỉ gắn thêm hàm vào THCS.svg (không sửa svg.js).
   Mỗi hàm trả về một CHUỖI <svg class="fig-svg" …> có viewBox; mọi nhãn nằm trong viewBox. */
(function () {
  'use strict';
  var S = window.THCS && window.THCS.svg;
  if (!S) return;
  var C = S.C, uid = 0;
  var FONT = 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function n2(v) { return Math.round(v * 100) / 100; }
  function wrap(w, h, body, label) {
    return '<svg class="fig-svg" viewBox="0 0 ' + n2(w) + ' ' + n2(h) + '" width="' + n2(w) + '" role="img" aria-label="' + esc(label || 'Hình minh hoạ') +
      '" xmlns="http://www.w3.org/2000/svg" font-family="' + FONT + '" font-size="14">' + body + '</svg>';
  }
  function T(x, y, t, o) {
    o = o || {};
    var lines = String(t).split('\n'), lh = (o.size || 14) * 1.2, y0 = y - (o.vcenter ? (lines.length - 1) * lh / 2 : 0);
    return lines.map(function (s, i) {
      return '<text x="' + n2(x) + '" y="' + n2(y0 + i * lh) + '" text-anchor="' + (o.anchor || 'middle') + '"' + (o.size ? ' font-size="' + o.size + '"' : '') +
        ' fill="' + (o.color || C.ink) + '"' + (o.bold ? ' font-weight="700"' : '') + (o.mono ? ' font-family="Consolas, Menlo, monospace"' : '') + (o.italic ? ' font-style="italic"' : '') + ' dominant-baseline="' + (o.vcenter ? 'middle' : 'auto') + '">' + esc(s) + '</text>';
    }).join('');
  }
  function L(x1, y1, x2, y2, o) {
    o = o || {};
    return '<line x1="' + n2(x1) + '" y1="' + n2(y1) + '" x2="' + n2(x2) + '" y2="' + n2(y2) + '" stroke="' + (o.color || C.ink) + '" stroke-width="' + (o.width || 2) + '"' +
      (o.dash ? ' stroke-dasharray="6 4"' : '') + (o.marker ? ' marker-end="url(#' + o.marker + ')"' : '') + (o.start ? ' marker-start="url(#' + o.start + ')"' : '') + ' stroke-linecap="round"/>';
  }
  function P(d, o) { o = o || {}; return '<path d="' + d + '" fill="' + (o.fill || 'none') + '" stroke="' + (o.stroke || C.ink) + '" stroke-width="' + (o.sw || 2) + '"' + (o.dash ? ' stroke-dasharray="6 4"' : '') + (o.marker ? ' marker-end="url(#' + o.marker + ')"' : '') + ' stroke-linejoin="round"/>'; }
  function AR(id, color) { return '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + (color || C.ink) + '"/></marker></defs>'; }
  function R(x, y, w, h, o) {
    o = o || {};
    return '<rect x="' + n2(x) + '" y="' + n2(y) + '" width="' + n2(w) + '" height="' + n2(h) + '" rx="' + (o.rx == null ? 8 : o.rx) + '" fill="' + (o.fill || 'none') + '" stroke="' + (o.stroke || 'none') + '" stroke-width="' + (o.sw || 2) + '"' + (o.dash ? ' stroke-dasharray="6 4"' : '') + '/>';
  }
  function Ci(cx, cy, r, o) { o = o || {}; return '<circle cx="' + n2(cx) + '" cy="' + n2(cy) + '" r="' + n2(r) + '" fill="' + (o.fill || 'none') + '" stroke="' + (o.stroke || 'none') + '" stroke-width="' + (o.sw || 2) + '"/>'; }
  function box(x, y, w, h, t, fill, stroke, o) { o = o || {}; return R(x, y, w, h, { fill: fill, stroke: stroke, rx: o.rx }) + T(x + w / 2, y + h / 2, t, { size: o.size || 14, bold: o.bold !== false, vcenter: true, color: o.color }); }
  var COL = [['#dbeafe', '#2563eb'], ['#ffedd5', '#ea580c'], ['#dcfce7', '#16a34a'], ['#ede9fe', '#7c3aed'], ['#fef9c3', '#a16207'], ['#fce7f3', '#db2777']];
  function title(W, t) { return t ? T(W / 2, 22, t, { size: 15, bold: true, color: '#0e7490' }) : ''; }

  /* --- Biểu tượng thiết bị nhỏ --- */
  function iconPC(x, y, s, lab) { s = s || 1; return '<g transform="translate(' + n2(x) + ',' + n2(y) + ') scale(' + s + ')">' + R(-26, -22, 52, 34, { fill: '#e0f2fe', stroke: '#0369a1', rx: 4 }) + R(-21, -17, 42, 24, { fill: '#7dd3fc', stroke: 'none', rx: 2 }) + L(0, 12, 0, 18, { color: '#0369a1', width: 3 }) + L(-12, 19, 12, 19, { color: '#0369a1', width: 3 }) + '</g>' + (lab ? T(x, y + 36 * s, lab, { size: 12 }) : ''); }
  function iconPhone(x, y, lab) { return R(x - 11, y - 20, 22, 40, { fill: '#f1f5f9', stroke: '#334155', rx: 5 }) + R(x - 8, y - 15, 16, 26, { fill: '#a5f3fc', stroke: 'none', rx: 2 }) + Ci(x, y + 15, 2, { fill: '#334155' }) + (lab ? T(x, y + 36, lab, { size: 12 }) : ''); }
  function iconPrinter(x, y, lab) { return R(x - 24, y - 8, 48, 22, { fill: '#e5e7eb', stroke: '#374151', rx: 4 }) + R(x - 15, y - 22, 30, 14, { fill: '#fff', stroke: '#374151', rx: 1 }) + R(x - 15, y + 10, 30, 12, { fill: '#fff', stroke: '#374151', rx: 1 }) + (lab ? T(x, y + 38, lab, { size: 12 }) : ''); }
  function iconServer(x, y, lab) { var b = ''; for (var i = 0; i < 3; i++) b += R(x - 20, y - 26 + i * 17, 40, 14, { fill: '#e0e7ff', stroke: '#4338ca', rx: 3 }) + Ci(x + 12, y - 19 + i * 17, 2.2, { fill: '#22c55e' }); return b + (lab ? T(x, y + 40, lab, { size: 12 }) : ''); }
  function iconSwitch(x, y, lab) { var b = R(x - 34, y - 11, 68, 22, { fill: '#fef3c7', stroke: '#b45309', rx: 5 }); for (var i = 0; i < 5; i++) b += R(x - 26 + i * 11, y - 3, 7, 6, { fill: '#b45309', rx: 1 }); return b + (lab ? T(x, y + 28, lab, { size: 12, bold: true }) : ''); }
  function iconWifi(x, y, lab) { var b = R(x - 26, y - 9, 52, 20, { fill: '#dcfce7', stroke: '#15803d', rx: 5 }) + L(x - 14, y - 9, x - 18, y - 24, { color: '#15803d' }) + L(x + 14, y - 9, x + 18, y - 24, { color: '#15803d' }); for (var r = 1; r <= 3; r++) b += P('M' + n2(x - 7 * r) + ',' + n2(y - 20 - 4 * r) + ' Q' + n2(x) + ',' + n2(y - 28 - 8 * r) + ' ' + n2(x + 7 * r) + ',' + n2(y - 20 - 4 * r), { stroke: '#22c55e', sw: 2 }); return b + (lab ? T(x, y + 28, lab, { size: 12, bold: true }) : ''); }
  function cloud(x, y, w, h, t) { var rx = w / 2, ry = h / 2; return P('M' + n2(x - rx * 0.7) + ',' + n2(y + ry * 0.6) + ' a' + n2(rx * 0.35) + ',' + n2(ry * 0.5) + ' 0 0 1 ' + n2(-rx * 0.1) + ',' + n2(-ry * 0.95) + ' a' + n2(rx * 0.4) + ',' + n2(ry * 0.6) + ' 0 0 1 ' + n2(rx * 0.55) + ',' + n2(-ry * 0.6) + ' a' + n2(rx * 0.45) + ',' + n2(ry * 0.6) + ' 0 0 1 ' + n2(rx * 0.75) + ',' + n2(ry * 0.1) + ' a' + n2(rx * 0.35) + ',' + n2(ry * 0.5) + ' 0 0 1 ' + n2(rx * 0.3) + ',' + n2(ry * 0.95) + ' a' + n2(rx * 0.3) + ',' + n2(ry * 0.45) + ' 0 0 1 ' + n2(-rx * 0.15) + ',' + n2(ry * 0.5) + ' z', { fill: '#eff6ff', stroke: '#2563eb', sw: 2 }) + T(x, y + 4, t || 'Internet', { size: 15, bold: true, color: '#1d4ed8', vcenter: true }); }

  /* ipo({ input, process, output, storage, title }) – mô hình xử lí thông tin: thu nhận → xử lí → đưa ra, kèm lưu trữ */
  function ipo(o) {
    o = o || {}; var W = 640, H = o.storage === false ? 170 : 250, id = 'ip' + (++uid), b = AR(id, C.muted) + title(W, o.title), y = 50;
    var it = [['Thu nhận', o.input || 'Thông tin vào'], ['Xử lí', o.process || 'Biến đổi thông tin'], ['Đưa ra / truyền', o.output || 'Thông tin ra']];
    it.forEach(function (x, i) { var bx = 20 + i * 215; b += R(bx, y, 170, 80, { fill: COL[i][0], stroke: COL[i][1] }) + T(bx + 85, y + 26, x[0], { size: 15, bold: true, color: COL[i][1] }) + T(bx + 85, y + 52, x[1], { size: 12.5, vcenter: true }); if (i < 2) b += L(bx + 174, y + 40, bx + 210, y + 40, { color: C.muted, width: 2.5, marker: id }); });
    if (o.storage !== false) { b += R(235, 170, 170, 56, { fill: COL[3][0], stroke: COL[3][1] }) + T(320, 192, 'Lưu trữ', { size: 15, bold: true, color: COL[3][1] }) + T(320, 212, o.storage || 'Ghi nhớ để dùng lại', { size: 12.5 }); b += L(305, 134, 305, 166, { color: C.muted, width: 2.5, marker: id }) + L(335, 166, 335, 134, { color: C.muted, width: 2.5, marker: id }); }
    return wrap(W, H, b, o.title || 'Các hoạt động xử lí thông tin');
  }
  /* computerParts() – các thành phần của máy tính ứng với các hoạt động xử lí thông tin */
  function computerParts() {
    var W = 660, H = 290, id = 'cp' + (++uid), b = AR(id, C.muted);
    b += R(16, 40, 170, 190, { fill: '#dbeafe', stroke: '#2563eb' }) + T(101, 64, 'Thiết bị vào', { size: 15, bold: true, color: '#1d4ed8' }) + T(101, 86, '(thu nhận)', { size: 12, color: C.muted });
    b += R(46, 104, 110, 34, { fill: '#fff', stroke: '#2563eb', rx: 6 }); for (var i = 0; i < 3; i++) for (var j = 0; j < 8; j++) b += R(52 + j * 12.5, 109 + i * 9, 10, 6, { fill: '#93c5fd', rx: 1 });
    b += T(101, 154, 'Bàn phím', { size: 12 }) + '<ellipse cx="101" cy="183" rx="14" ry="20" fill="#fff" stroke="#2563eb" stroke-width="2"/>' + L(101, 165, 101, 178, { color: '#2563eb' }) + T(101, 220, 'Chuột, micro, camera…', { size: 11.5 });
    b += R(245, 40, 170, 110, { fill: '#ffedd5', stroke: '#ea580c' }) + T(330, 64, 'Bộ xử lí (CPU)', { size: 15, bold: true, color: '#c2410c' }) + T(330, 86, '(xử lí)', { size: 12, color: C.muted }) + R(300, 96, 60, 44, { fill: '#fdba74', stroke: '#c2410c', rx: 4 }) + T(330, 123, 'CPU', { size: 13, bold: true });
    b += R(245, 170, 170, 60, { fill: '#ede9fe', stroke: '#7c3aed' }) + T(330, 194, 'Bộ nhớ', { size: 15, bold: true, color: '#6d28d9' }) + T(330, 216, '(lưu trữ: RAM, ổ đĩa…)', { size: 12 });
    b += R(474, 40, 170, 190, { fill: '#dcfce7', stroke: '#16a34a' }) + T(559, 64, 'Thiết bị ra', { size: 15, bold: true, color: '#15803d' }) + T(559, 86, '(đưa ra)', { size: 12, color: C.muted });
    b += R(514, 100, 90, 56, { fill: '#fff', stroke: '#16a34a', rx: 4 }) + R(520, 106, 78, 44, { fill: '#bbf7d0', stroke: 'none', rx: 2 }) + L(559, 156, 559, 166, { color: '#16a34a', width: 3 }) + T(559, 184, 'Màn hình', { size: 12 }) + T(559, 220, 'Loa, máy in…', { size: 11.5 });
    b += L(190, 95, 241, 95, { color: C.muted, width: 2.5, marker: id }) + L(419, 95, 470, 95, { color: C.muted, width: 2.5, marker: id }) + L(320, 152, 320, 166, { color: C.muted, width: 2.5, marker: id }) + L(340, 166, 340, 152, { color: C.muted, width: 2.5, marker: id });
    b += T(W / 2, 266, 'Máy tính thực hiện đủ bốn hoạt động: thu nhận, xử lí, lưu trữ và đưa ra thông tin', { size: 12.5, color: C.muted });
    return wrap(W, H, b, 'Các thành phần của máy tính');
  }
  /* bits({ bits: '01000001', label, note, title }) – dãy bit trong các ô nhớ */
  function bits(o) {
    o = o || {}; var s = o.bits || '01000001', n = s.length, cw = Math.min(48, 560 / n), W = Math.max(360, n * cw + 80), x0 = (W - n * cw) / 2, b = title(W, o.title), y = o.title ? 44 : 20;
    for (var i = 0; i < n; i++) { var one = s[i] === '1'; b += R(x0 + i * cw, y, cw - 4, 44, { fill: one ? '#0e7490' : '#ecfeff', stroke: '#0e7490', rx: 6 }) + T(x0 + i * cw + (cw - 4) / 2, y + 23, s[i], { size: 20, bold: true, vcenter: true, mono: true, color: one ? '#fff' : '#0e7490' }); }
    if (o.label) b += T(W / 2, y + 70, o.label, { size: 13, bold: true });
    if (o.note) b += T(W / 2, y + (o.label ? 92 : 70), o.note, { size: 12, color: C.muted });
    return wrap(W, y + (o.note ? 104 : (o.label ? 84 : 60)), b, o.title || 'Dãy bit');
  }
  /* unitLadder() – các đơn vị đo dung lượng nhớ */
  function unitLadder() {
    var U = [['Byte (B)', '1 B = 8 bit'], ['Kilobyte (KB)', '1 KB = 1 024 B'], ['Megabyte (MB)', '1 MB = 1 024 KB'], ['Gigabyte (GB)', '1 GB = 1 024 MB'], ['Terabyte (TB)', '1 TB = 1 024 GB']];
    var W = 640, H = 270, id = 'ul' + (++uid), b = AR(id, '#0e7490') + title(W, 'Các đơn vị đo dung lượng thông tin');
    U.forEach(function (u, i) { var x = 14 + i * 124, y = 196 - i * 36, h = 46; b += R(x, y, 112, h, { fill: COL[i][0], stroke: COL[i][1] }) + T(x + 56, y + 19, u[0], { size: 12.5, bold: true, color: COL[i][1] }) + T(x + 56, y + 36, u[1], { size: 11.5 }); if (i < 4) b += L(x + 88, y - 3, x + 118, y - 30, { color: '#0e7490', width: 2, marker: id }) + T(x + 72, y - 22, '×1 024', { size: 10.5, color: '#0e7490', bold: true, anchor: 'end' }); });
    b += T(W / 2, 262, 'Bit là đơn vị nhỏ nhất; mỗi bậc lớn gấp 1 024 lần bậc liền trước (xấp xỉ một nghìn)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Các đơn vị đo dung lượng thông tin');
  }
  /* network({ kind: 'lan'|'wireless'|'internet' }) */
  function network(o) {
    o = o || {}; var k = o.kind || 'lan', W = 640, H = 300, b = '';
    if (k === 'internet') {
      b += cloud(320, 140, 230, 130, 'Internet');
      var pts = [[90, 70, 'pc', 'Máy tính ở nhà'], [90, 220, 'phone', 'Điện thoại'], [550, 70, 'server', 'Máy chủ web'], [550, 220, 'lan', 'Mạng LAN trường học']];
      pts.forEach(function (p) { b += L(p[0] + (p[0] < 320 ? 34 : -34), p[1], p[0] < 320 ? 225 : 415, 140 + (p[1] < 140 ? -30 : 30), { color: '#64748b', width: 2.2, dash: p[2] === 'phone' }); if (p[2] === 'pc') b += iconPC(p[0], p[1], 1, p[3]); else if (p[2] === 'phone') b += iconPhone(p[0], p[1], p[3]); else if (p[2] === 'server') b += iconServer(p[0], p[1], p[3]); else b += iconPC(p[0] - 18, p[1], 0.7) + iconPC(p[0] + 18, p[1], 0.7) + T(p[0], p[1] + 34, p[3], { size: 12 }); });
      b += T(W / 2, 286, 'Internet là mạng kết nối hàng triệu máy tính và mạng máy tính trên khắp thế giới (sơ đồ đơn giản)', { size: 12, color: C.muted });
      return wrap(W, H, b, 'Sơ đồ kết nối Internet');
    }
    var cx = 320, cy = 150, wl = k === 'wireless';
    b += wl ? iconWifi(cx, cy, 'Bộ phát Wi-Fi (thiết bị kết nối)') : iconSwitch(cx, cy, 'Bộ chuyển mạch (switch)');
    var dev = [[90, 70, 'pc', 'Máy tính 1'], [90, 230, 'pc', 'Máy tính 2'], [550, 70, wl ? 'phone' : 'pc', wl ? 'Điện thoại' : 'Máy tính 3'], [550, 230, 'printer', 'Máy in'], [320, 255, wl ? 'phone' : 'pc', wl ? 'Máy tính bảng' : 'Máy tính 4']];
    dev.forEach(function (d) { var ex = d[0] === 320 ? 320 : (d[0] < 320 ? d[0] + 34 : d[0] - 34), ey = d[0] === 320 ? d[1] - 26 : d[1]; b += L(ex, ey, cx + (d[0] < 320 ? -34 : (d[0] > 320 ? 34 : 0)), cy + (d[0] === 320 ? 11 : 0), { color: wl ? '#22c55e' : '#64748b', width: 2.2, dash: wl }); if (d[2] === 'pc') b += iconPC(d[0], d[1], 1, d[3]); else if (d[2] === 'phone') b += iconPhone(d[0], d[1], d[3]); else b += iconPrinter(d[0], d[1], d[3]); });
    b += T(W / 2, 20, wl ? 'Mạng không dây: thiết bị kết nối bằng sóng (nét đứt)' : 'Mạng có dây: thiết bị nối với bộ chuyển mạch bằng dây cáp', { size: 13, bold: true, color: '#0e7490' });
    return wrap(W, H, b, wl ? 'Mạng không dây' : 'Mạng máy tính có dây');
  }
  /* web() – trang web, siêu liên kết, trình duyệt và máy chủ */
  function web() {
    var W = 660, H = 300, id = 'wb' + (++uid), b = AR(id, '#7c3aed');
    function page(x, y, t, lines) { var s = R(x, y, 150, 110, { fill: '#fff', stroke: '#7c3aed', rx: 6 }) + R(x, y, 150, 22, { fill: '#ede9fe', stroke: '#7c3aed', rx: 6 }) + T(x + 75, y + 15, t, { size: 12, bold: true, color: '#6d28d9' }); lines.forEach(function (l, i) { s += T(x + 10, y + 42 + i * 18, l, { size: 11.5, anchor: 'start', color: /^\[/.test(l) ? '#2563eb' : C.ink }); }); return s; }
    b += page(20, 40, 'Trang chủ', ['Giới thiệu trường', '[Thời khoá biểu]', '[Câu lạc bộ]', 'Liên hệ']);
    b += page(255, 20, 'Thời khoá biểu', ['Lớp 6A, 6B…', '[Về trang chủ]']);
    b += page(255, 160, 'Câu lạc bộ', ['Tin học, Mĩ thuật', '[Đăng kí]']);
    b += page(490, 90, 'Đăng kí', ['Họ tên: ____', 'Lớp: ____']);
    b += P('M120,98 C190,98 200,60 251,60', { stroke: '#7c3aed', marker: id }) + P('M110,116 C190,116 200,200 251,200', { stroke: '#7c3aed', marker: id }) + P('M370,220 C430,220 440,150 486,150', { stroke: '#7c3aed', marker: id }) + P('M255,100 C220,100 200,150 174,150', { stroke: '#94a3b8', dash: true, marker: id });
    b += T(W / 2, 290, 'Các trang web liên kết với nhau bằng siêu liên kết (chữ xanh); nháy chuột vào liên kết để chuyển trang', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Trang web và siêu liên kết');
  }
  /* browser({ url, title, lines }) – cửa sổ trình duyệt */
  function browser(o) {
    o = o || {}; var W = 600, H = 260, b = R(10, 10, 580, 240, { fill: '#fff', stroke: '#475569', rx: 10 }) + R(10, 10, 580, 70, { fill: '#f1f5f9', stroke: '#475569', rx: 10 });
    b += R(24, 20, 150, 22, { fill: '#fff', stroke: '#94a3b8', rx: 6 }) + T(99, 35, o.tab || 'Trang chủ', { size: 11.5 });
    ['←', '→', '⟳'].forEach(function (c, i) { b += T(34 + i * 26, 68, c, { size: 16, bold: true, color: '#475569' }); });
    b += R(110, 52, 460, 24, { fill: '#fff', stroke: '#0e7490', rx: 12 }) + T(124, 69, o.url || 'https://www.example.edu.vn', { size: 12.5, anchor: 'start', mono: true });
    b += T(122, 100, '▲ Thanh địa chỉ: gõ địa chỉ trang web vào đây', { size: 12, anchor: 'start', color: '#0e7490', bold: true });
    (o.lines || ['Nội dung trang web: chữ, hình ảnh, âm thanh, video…', 'Các siêu liên kết dẫn tới trang khác']).forEach(function (l, i) { b += T(30, 140 + i * 26, l, { size: 13, anchor: 'start', color: i === 1 ? '#2563eb' : C.ink }); });
    b += T(300, 236, 'Cửa sổ trình duyệt (minh hoạ)', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Cửa sổ trình duyệt web');
  }
  /* email() – đường đi của thư điện tử */
  function email() {
    var W = 660, H = 250, id = 'em' + (++uid), b = AR(id, '#0e7490');
    b += iconPC(70, 110, 1.1, 'Người gửi') + T(70, 175, 'an@truong.edu.vn', { size: 11.5, mono: true });
    b += iconServer(250, 110, 'Máy chủ thư\nbên gửi') + iconServer(410, 110, 'Máy chủ thư\nbên nhận');
    b += iconPC(590, 110, 1.1, 'Người nhận') + T(590, 175, 'binh@thu.vn', { size: 11.5, mono: true });
    b += L(104, 100, 222, 100, { color: '#0e7490', width: 2.5, marker: id }) + L(278, 100, 382, 100, { color: '#0e7490', width: 2.5, marker: id }) + L(438, 100, 556, 100, { color: '#0e7490', width: 2.5, marker: id });
    b += T(163, 90, '① gửi', { size: 12, bold: true, color: '#0e7490' }) + T(330, 90, '② chuyển qua Internet', { size: 12, bold: true, color: '#0e7490' }) + T(497, 90, '③ nhận, đọc', { size: 12, bold: true, color: '#0e7490' });
    b += R(130, 196, 400, 40, { fill: '#ecfeff', stroke: '#0e7490', rx: 8 }) + T(330, 216, 'Địa chỉ thư: tên đăng nhập @ tên miền của nhà cung cấp', { size: 13, bold: true, vcenter: true });
    return wrap(W, H, b, 'Đường đi của thư điện tử');
  }
  /* emailAddr({ user, domain }) – cấu tạo địa chỉ thư điện tử */
  function emailAddr(o) {
    o = o || {}; var u = o.user || 'nguyenvanan2012', d = o.domain || 'gmail.com', W = 560, H = 150, cw = 11.5, uw = u.length * cw + 20, dw = d.length * cw + 20, x0 = (W - uw - dw - 36) / 2, b = '';
    b += R(x0, 30, uw, 40, { fill: '#dbeafe', stroke: '#2563eb' }) + T(x0 + uw / 2, 50, u, { size: 17, mono: true, vcenter: true, bold: true }) + T(x0 + uw + 18, 50, '@', { size: 24, bold: true, vcenter: true, color: '#dc2626' }) + R(x0 + uw + 36, 30, dw, 40, { fill: '#dcfce7', stroke: '#16a34a' }) + T(x0 + uw + 36 + dw / 2, 50, d, { size: 17, mono: true, vcenter: true, bold: true });
    b += T(x0 + uw / 2, 96, 'Tên đăng nhập', { size: 13, bold: true, color: '#1d4ed8' }) + T(x0 + uw + 18, 20, 'kí hiệu @', { size: 12, color: '#dc2626', bold: true }) + T(x0 + uw + 36 + dw / 2, 96, 'Tên miền (nhà cung cấp)', { size: 13, bold: true, color: '#15803d' });
    b += T(W / 2, 134, 'Mỗi địa chỉ thư điện tử là duy nhất; không chứa dấu cách và chữ có dấu', { size: 12, color: C.muted });
    return wrap(W, H, b, 'Cấu tạo địa chỉ thư điện tử');
  }
  /* searchBox({ query, results }) – máy tìm kiếm và kết quả */
  function searchBox(o) {
    o = o || {}; var W = 600, H = 250, b = R(10, 10, 580, 230, { fill: '#fff', stroke: '#475569', rx: 10 });
    b += R(40, 30, 420, 34, { fill: '#fff', stroke: '#0e7490', rx: 17 }) + T(60, 52, '🔍 ' + (o.query || 'vịnh Hạ Long di sản thiên nhiên thế giới'), { size: 13.5, anchor: 'start' }) + R(470, 30, 100, 34, { fill: '#0e7490', stroke: '#0e7490', rx: 17 }) + T(520, 48, 'Tìm kiếm', { size: 13, bold: true, color: '#fff', vcenter: true });
    b += T(44, 84, '▲ Từ khoá: các từ ngắn gọn, đặc trưng cho thông tin cần tìm', { size: 12, anchor: 'start', color: '#0e7490', bold: true });
    (o.results || [['Vịnh Hạ Long – Di sản thiên nhiên thế giới', 'https://…/ha-long', 'Vịnh Hạ Long ở tỉnh Quảng Ninh…'], ['Giới thiệu về vịnh Hạ Long', 'https://…/gioi-thieu', 'Thông tin tham quan, lịch sử công nhận…']]).forEach(function (r, i) {
      var y = 112 + i * 60; b += T(44, y, r[0], { size: 14, anchor: 'start', color: '#1d4ed8', bold: true }) + T(44, y + 18, r[1], { size: 11.5, anchor: 'start', color: '#15803d', mono: true }) + T(44, y + 36, r[2], { size: 12, anchor: 'start', color: '#475569' }); });
    return wrap(W, H, b, 'Máy tìm kiếm và danh sách kết quả');
  }
  /* folderTree({ root, items: [{ name, children: [...] }] | 'tên tệp' }) – cây thư mục */
  function folderTree(o) {
    o = o || {}; var rows = [];
    (function walk(n, d) { if (typeof n === 'string') { rows.push({ t: n, d: d, f: false }); return; } rows.push({ t: n.name, d: d, f: true }); (n.children || []).forEach(function (c) { walk(c, d + 1); }); })(o.root || { name: 'D:', children: [] }, 0);
    var W = o.w || 480, H = rows.length * 30 + 30 + (o.title ? 26 : 0), y0 = o.title ? 44 : 22, b = title(W, o.title);
    rows.forEach(function (r, i) {
      var x = 24 + r.d * 34, y = y0 + i * 30;
      if (r.d > 0) { var py = y0; for (var j = i - 1; j >= 0; j--) if (rows[j].d === r.d - 1) { py = y0 + j * 30; break; } b += L(x - 22, py + 10, x - 22, y, { color: '#94a3b8', width: 1.5 }) + L(x - 22, y, x - 4, y, { color: '#94a3b8', width: 1.5 }); }
      b += r.f ? P('M' + n2(x) + ',' + n2(y - 8) + ' h8 l3,3 h11 v14 h-22 z', { fill: '#fde68a', stroke: '#b45309', sw: 1.5 }) : P('M' + n2(x + 3) + ',' + n2(y - 9) + ' h11 l5,5 v13 h-16 z', { fill: '#fff', stroke: '#2563eb', sw: 1.5 });
      b += T(x + 28, y + 4, r.t, { size: 13, anchor: 'start', bold: r.f, color: r.f ? '#92400e' : '#1e40af' });
    });
    return wrap(W, H, b, o.title || 'Cây thư mục');
  }
  /* docPage({ variant: 'format'|'album' }) – trang văn bản với các định dạng */
  function docPage(o) {
    o = o || {}; var W = 620, H = 330, b = R(150, 10, 320, 300, { fill: '#fff', stroke: '#64748b', rx: 4 }) + R(176, 34, 268, 252, { fill: 'none', stroke: '#cbd5e1', rx: 0, dash: true, sw: 1.2 });
    var id = 'dp' + (++uid); b += AR(id, '#ea580c');
    if (o.lines) {
      o.lines.forEach(function (l, i) { b += T(i === 0 ? 310 : 192, 60 + i * 30, l, { size: i === 0 ? 16 : 13, bold: i === 0, anchor: i === 0 ? 'middle' : 'start' }); });
      return wrap(W, H, b, o.title || 'Trang văn bản');
    }
    if (o.variant === 'album') {
      b += T(310, 60, 'SỔ LƯU NIỆM LỚP 6A', { size: 16, bold: true, color: '#7c3aed' }) + R(196, 76, 100, 70, { fill: '#e0f2fe', stroke: '#0284c7', rx: 4 }) + P('M206,136 l25,-30 l18,20 l12,-12 l25,22 z', { fill: '#7dd3fc', stroke: 'none' }) + T(246, 162, 'Ảnh tập thể', { size: 11 });
      ['Kỉ niệm chuyến tham quan', 'bảo tàng ngày 20/11…'].forEach(function (l, i) { b += T(312, 96 + i * 18, l, { size: 11.5, anchor: 'start' }); });
      b += R(196, 180, 228, 80, { fill: '#fff', stroke: '#7c3aed', rx: 0 }); for (var r = 0; r < 4; r++) b += L(196, 180 + r * 20, 424, 180 + r * 20, { color: '#7c3aed', width: 1 }); b += L(276, 180, 276, 260, { color: '#7c3aed', width: 1 });
      ['Họ tên', 'Lời nhắn'].forEach(function (t, i) { b += T(i ? 350 : 236, 194, t, { size: 11, bold: true }); });
      b += T(310, 280, 'Trang 1', { size: 10.5, color: C.muted });
      return wrap(W, H, b, 'Bố cục một trang sổ lưu niệm');
    }
    b += T(310, 58, 'NGÀY HỘI ĐỌC SÁCH', { size: 16, bold: true }) + T(310, 82, 'Thư viện trường THCS', { size: 12, italic: true });
    var ln = ['Ngày hội diễn ra vào thứ Bảy. Mỗi lớp', 'chuẩn bị một góc trưng bày sách và giới', 'thiệu một cuốn sách yêu thích.'];
    ln.forEach(function (l, i) { b += T(190, 112 + i * 20, l, { size: 12, anchor: 'start' }); });
    b += T(190, 190, '• Thời gian: 8 giờ', { size: 12, anchor: 'start' }) + T(190, 210, '• Địa điểm: sân trường', { size: 12, anchor: 'start' });
    b += T(430, 262, 'Ban tổ chức', { size: 12, anchor: 'end', bold: true });
    var notes = [[60, 52, 'Căn giữa,\nchữ đậm, cỡ lớn', 236, 54], [60, 116, 'Căn thẳng\nhai lề', 186, 116], [60, 196, 'Đoạn có\ngạch đầu dòng', 186, 196], [560, 260, 'Căn phải', 434, 258], [560, 40, 'Lề trang', 446, 36]];
    notes.forEach(function (n) { b += T(n[0], n[1], n[2], { size: 11.5, color: '#c2410c', bold: true }) + L(n[0] + (n[0] < 310 ? 40 : -34), n[1] + 4, n[3], n[4], { color: '#ea580c', width: 1.5, marker: id }); });
    return wrap(W, H, b, 'Một văn bản đã được định dạng');
  }
  /* table({ head: [...], rows: [[...]], title, colW }) – bảng có hàng, cột, ô */
  function table(o) {
    o = o || {}; var head = o.head || [], rows = o.rows || [], nc = head.length, cw = o.colW || Math.min(150, 560 / nc), W = Math.max(360, nc * cw + 60), x0 = (W - nc * cw) / 2, y0 = o.title ? 40 : 14, rh = 30, b = title(W, o.title);
    b += R(x0, y0, nc * cw, rh, { fill: '#cffafe', stroke: 'none', rx: 0 });
    head.forEach(function (h, j) { b += T(x0 + j * cw + cw / 2, y0 + rh / 2, h, { size: 13, bold: true, vcenter: true }); });
    rows.forEach(function (r, i) { r.forEach(function (c, j) { var hl = o.hl && o.hl[0] === i && o.hl[1] === j; if (hl) b += R(x0 + j * cw, y0 + (i + 1) * rh, cw, rh, { fill: '#fef08a', stroke: 'none', rx: 0 }); b += T(x0 + j * cw + cw / 2, y0 + (i + 1) * rh + rh / 2, c, { size: 13, vcenter: true }); }); });
    for (var i = 0; i <= rows.length + 1; i++) b += L(x0, y0 + i * rh, x0 + nc * cw, y0 + i * rh, { color: '#0e7490', width: i === 0 || i === rows.length + 1 ? 2 : 1 });
    for (var j = 0; j <= nc; j++) b += L(x0 + j * cw, y0, x0 + j * cw, y0 + (rows.length + 1) * rh, { color: '#0e7490', width: j === 0 || j === nc ? 2 : 1 });
    var H = y0 + (rows.length + 1) * rh + (o.note ? 34 : 14); if (o.note) b += T(W / 2, H - 12, o.note, { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Bảng');
  }
  /* findReplace({ find, replace }) – hộp thoại Tìm và thay thế */
  function findReplace(o) {
    o = o || {}; var W = 560, H = 220, b = R(10, 10, 540, 200, { fill: '#f8fafc', stroke: '#475569', rx: 8 }) + R(10, 10, 540, 30, { fill: '#e2e8f0', stroke: '#475569', rx: 8 }) + T(30, 30, 'Tìm và thay thế', { size: 13, bold: true, anchor: 'start' });
    b += T(30, 70, 'Tìm gì (Find what):', { size: 13, anchor: 'start' }) + R(200, 54, 320, 26, { fill: '#fff', stroke: '#0e7490', rx: 4 }) + T(210, 72, o.find || 'Ha Noi', { size: 13, anchor: 'start', mono: true });
    b += T(30, 112, 'Thay bằng (Replace with):', { size: 13, anchor: 'start' }) + R(200, 96, 320, 26, { fill: '#fff', stroke: '#0e7490', rx: 4 }) + T(210, 114, o.replace || 'Hà Nội', { size: 13, anchor: 'start', mono: true });
    [['Thay thế (Replace)', 60], ['Thay tất cả (Replace All)', 220], ['Tìm tiếp (Find Next)', 400]].forEach(function (x) { b += R(x[1] - 20, 146, x[0].length * 6.4 + 20, 30, { fill: '#fff', stroke: '#64748b', rx: 6 }) + T(x[1] - 10 + x[0].length * 3.2, 161, x[0], { size: 12, vcenter: true }); });
    b += T(W / 2, 198, 'Hộp thoại minh hoạ (tên nút có thể khác nhau tuỳ phần mềm)', { size: 11, color: C.muted });
    return wrap(W, H, b, 'Hộp thoại Tìm và thay thế');
  }
  /* flowchart({ steps: [...], title, w }) – sơ đồ khối. Mỗi bước: { t: 'start'|'end'|'io'|'proc'|'if'|'loop', s, yes, no, body } */
  function flowchart(o) {
    o = o || {}; var W = o.w || 520, cx = W / 2, bw = 230, id = 'fc' + (++uid), b = AR(id, '#334155'), y = o.title ? 40 : 14, gap = 26;
    b += title(W, o.title);
    function arrow(y1, y2, x) { b += L(x || cx, y1, x || cx, y2 - 2, { color: '#334155', width: 2, marker: id }); }
    function shape(t, x, y, w, h, s) {
      if (t === 'start' || t === 'end') return R(x - w / 2, y, w, h, { fill: '#dcfce7', stroke: '#16a34a', rx: h / 2 }) + T(x, y + h / 2, s, { size: 13.5, bold: true, vcenter: true });
      if (t === 'io') return P('M' + n2(x - w / 2 + 14) + ',' + y + ' h' + n2(w) + ' l-28,' + h + ' h' + n2(-w) + ' z', { fill: '#dbeafe', stroke: '#2563eb' }) + T(x, y + h / 2, s, { size: 13, vcenter: true });
      if (t === 'if') return P('M' + x + ',' + y + ' l' + n2(w / 2) + ',' + n2(h / 2) + ' l' + n2(-w / 2) + ',' + n2(h / 2) + ' l' + n2(-w / 2) + ',' + n2(-h / 2) + ' z', { fill: '#fef9c3', stroke: '#a16207' }) + T(x, y + h / 2, s, { size: 13, bold: true, vcenter: true });
      return R(x - w / 2, y, w, h, { fill: '#ffedd5', stroke: '#ea580c', rx: 4 }) + T(x, y + h / 2, s, { size: 13, vcenter: true });
    }
    var steps = o.steps || [];
    steps.forEach(function (st, i) {
      var lines = String(st.s).split('\n').length, h = Math.max(38, lines * 17 + 16);
      if (st.t === 'if') {
        var dh = 70; b += shape('if', cx, y, 210, dh, st.s);
        var lx = cx - 150, rx = cx + 150, by = y + dh + 30, sw = 150;
        if (st.no) {
          b += P('M' + n2(cx - 105) + ',' + n2(y + dh / 2) + ' H' + lx + ' V' + n2(by - 2), { stroke: '#334155', marker: id }) + T(cx - 118, y + dh / 2 - 8, 'Sai', { size: 12, bold: true, color: '#dc2626' });
          b += P('M' + n2(cx + 105) + ',' + n2(y + dh / 2) + ' H' + rx + ' V' + n2(by - 2), { stroke: '#334155', marker: id }) + T(cx + 118, y + dh / 2 - 8, 'Đúng', { size: 12, bold: true, color: '#16a34a' });
          b += shape('proc', rx, by, sw, 40, st.yes) + shape('proc', lx, by, sw, 40, st.no);
          var jy = by + 64; b += P('M' + lx + ',' + n2(by + 40) + ' V' + jy + ' H' + n2(cx), { stroke: '#334155' }) + P('M' + rx + ',' + n2(by + 40) + ' V' + jy + ' H' + n2(cx), { stroke: '#334155' }); y = jy;
        } else {
          b += T(cx + 12, y + dh + 18, 'Đúng', { size: 12, bold: true, color: '#16a34a', anchor: 'start' }); arrow(y + dh, y + dh + 30);
          b += shape('proc', cx, y + dh + 30, bw, 40, st.yes);
          b += P('M' + n2(cx + 105) + ',' + n2(y + dh / 2) + ' H' + n2(cx + 160) + ' V' + n2(y + dh + 96) + ' H' + n2(cx), { stroke: '#334155' }) + T(cx + 118, y + dh / 2 - 8, 'Sai', { size: 12, bold: true, color: '#dc2626', anchor: 'start' });
          b += L(cx, y + dh + 70, cx, y + dh + 96, { color: '#334155', width: 2 }); y = y + dh + 96;
        }
      } else if (st.t === 'loop') {
        var dh2 = 66, top = y; b += shape('if', cx, y, 220, dh2, st.s);
        b += T(cx + 10, y + dh2 + 18, 'Đúng', { size: 12, bold: true, color: '#16a34a', anchor: 'start' }); arrow(y + dh2, y + dh2 + 30); y += dh2 + 30;
        (st.body || []).forEach(function (bd, k) { b += shape('proc', cx, y, bw, 38, bd); y += 38; if (k < st.body.length - 1) { arrow(y, y + 22); y += 22; } });
        b += P('M' + n2(cx) + ',' + y + ' V' + n2(y + 18) + ' H' + n2(cx - 170) + ' V' + n2(top - 12) + ' H' + n2(cx - 4), { stroke: '#334155', marker: id });
        b += P('M' + n2(cx + 110) + ',' + n2(top + dh2 / 2) + ' H' + n2(cx + 180) + ' V' + n2(y + 40) + ' H' + n2(cx), { stroke: '#334155' }) + T(cx + 120, top + dh2 / 2 - 8, 'Sai', { size: 12, bold: true, color: '#dc2626', anchor: 'start' });
        y += 40;
      } else { b += shape(st.t, cx, y, st.t === 'start' || st.t === 'end' ? 150 : bw, h, st.s); y += h; }
      if (i < steps.length - 1) { if (steps[i + 1].t === 'loop') { b += L(cx, y, cx, y + 8, { color: '#334155', width: 2 }); y += 8; b += L(cx, y, cx, y + gap - 8, { color: '#334155', width: 2, marker: id }); y += gap - 8; } else { arrow(y, y + gap); y += gap; } }
    });
    return wrap(W, y + 14, b, o.title || 'Sơ đồ khối của thuật toán');
  }
  /* blocks({ stack: [{ k, s, inner:[...] }], w, title }) – khối lệnh kiểu Scratch (vẽ lại đơn giản) */
  var BK = { event: ['#fbbf24', '#b45309'], motion: ['#60a5fa', '#1d4ed8'], looks: ['#a78bfa', '#6d28d9'], sound: ['#f0abfc', '#a21caf'], control: ['#fdba74', '#c2410c'], pen: ['#34d399', '#047857'], sensing: ['#67e8f9', '#0e7490'], operators: ['#86efac', '#15803d'], variables: ['#fb923c', '#c2410c'] };
  function blocks(o) {
    o = o || {}; var W = o.w || 420, b = title(W, o.title), y = o.title ? 40 : 14, x0 = 20;
    function draw(list, x) {
      list.forEach(function (bl) {
        var c = BK[bl.k] || BK.motion, w = Math.max(150, String(bl.s).length * 7.6 + 30);
        if (bl.inner) {
          var y0 = y; y += 36; var save = y; draw(bl.inner, x + 18); var ih = Math.max(y - save, 20); y = save + ih;
          b += P('M' + x + ',' + y0 + ' h12 l5,5 h14 l5,-5 h' + n2(w - 36) + ' v32 h' + n2(-(w - 54)) + ' l-5,5 h-14 l-5,-5 h-4 v' + n2(ih - 4) + ' h' + n2(w - 18) + ' v22 h' + n2(-w) + ' z', { fill: c[0], stroke: c[1], sw: 1.5 });
          b += T(x + 12, y0 + 22, bl.s, { size: 13, bold: true, anchor: 'start', color: '#1f2937' }); y += 24;
          // vẽ lại các khối bên trong lên trên
          var keep = y; y = save; draw(bl.inner, x + 18); y = keep;
        } else if (bl.k === 'event') {
          b += P('M' + x + ',' + n2(y + 12) + ' q30,-18 70,-4 h' + n2(w - 70) + ' v34 h' + n2(-(w - 36)) + ' l-5,5 h-14 l-5,-5 h-12 z', { fill: c[0], stroke: c[1], sw: 1.5 }) + T(x + 12, y + 31, bl.s, { size: 13, bold: true, anchor: 'start' }); y += 42;
        } else {
          b += P('M' + x + ',' + y + ' h12 l5,5 h14 l5,-5 h' + n2(w - 36) + ' v32 h' + n2(-(w - 36)) + ' l-5,5 h-14 l-5,-5 h-12 z', { fill: c[0], stroke: c[1], sw: 1.5 }) + T(x + 12, y + 21, bl.s, { size: 13, bold: true, anchor: 'start', color: '#1f2937' }); y += 32;
        }
      });
    }
    draw(o.stack || [], x0);
    var legend = o.legend !== false ? 'Khối lệnh vẽ minh hoạ theo kiểu Scratch' : '';
    if (legend) b += T(W / 2, y + 26, legend, { size: 11.5, color: C.muted });
    return wrap(W, y + (legend ? 38 : 14), b, o.title || 'Chương trình dạng khối lệnh');
  }
  /* turtle({ n, side, label }) – đường đi của nhân vật khi vẽ đa giác đều */
  function turtle(o) {
    o = o || {}; var n = o.n || 4, W = 360, H = 300, r = 100, cx = 180, cy = 150, pts = [], id = 'tu' + (++uid), b = AR(id, '#047857');
    for (var i = 0; i < n; i++) { var a = Math.PI / 2 + Math.PI / n + i * 2 * Math.PI / n; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    b += P('M' + pts.map(function (p) { return n2(p[0]) + ',' + n2(p[1]); }).join(' L') + ' Z', { stroke: '#047857', sw: 3, fill: '#ecfdf5' });
    for (var k = 0; k < n; k++) { var p = pts[k], q = pts[(k + 1) % n]; b += L(p[0] + (q[0] - p[0]) * 0.35, p[1] + (q[1] - p[1]) * 0.35, p[0] + (q[0] - p[0]) * 0.62, p[1] + (q[1] - p[1]) * 0.62, { color: '#047857', width: 2.5, marker: id }); }
    b += Ci(pts[0][0], pts[0][1], 7, { fill: '#f59e0b', stroke: '#b45309' }) + T(pts[0][0] - 12, pts[0][1] + 22, 'Xuất phát', { size: 12, bold: true, color: '#b45309' });
    b += T(cx, cy + 5, o.label || ('Mỗi lần quay ' + (360 / n) + '°'), { size: 13, bold: true, color: '#047857' });
    b += T(W / 2, H - 8, o.note || ('Lặp lại ' + n + ' lần: đi thẳng một đoạn rồi quay ' + (360 / n) + '°'), { size: 12, color: C.muted });
    return wrap(W, H, b, 'Hình do nhân vật vẽ ra');
  }
  /* dataInfo() – từ dữ liệu đến thông tin (ví dụ dự báo thời tiết) */
  function dataInfo(o) {
    o = o || {}; var W = 640, H = 210, id = 'di' + (++uid), b = AR(id, C.muted);
    b += R(16, 40, 180, 130, { fill: '#f1f5f9', stroke: '#64748b' }) + T(106, 62, o.dataTitle || 'Dữ liệu', { size: 15, bold: true, color: '#334155' });
    (o.data || ['Số: 35 °C, 80 %', 'Chữ: “mây, mưa rào”', 'Hình ảnh vệ tinh']).forEach(function (d, i) { b += T(106, 92 + i * 24, d, { size: 12.5 }); });
    b += R(246, 70, 150, 70, { fill: '#ffedd5', stroke: '#ea580c' }) + T(321, 98, o.proc || 'Con người /', { size: 13, bold: true }) + T(321, 118, o.proc2 || 'máy tính xử lí', { size: 13, bold: true });
    b += R(446, 40, 180, 130, { fill: '#dcfce7', stroke: '#16a34a' }) + T(536, 62, 'Thông tin', { size: 15, bold: true, color: '#15803d' });
    (o.info || ['Chiều nay trời nóng,', 'có mưa rào', '→ mang theo áo mưa']).forEach(function (d, i) { b += T(536, 92 + i * 24, d, { size: 12.5 }); });
    b += L(200, 105, 242, 105, { color: C.muted, width: 2.5, marker: id }) + L(400, 105, 442, 105, { color: C.muted, width: 2.5, marker: id });
    b += T(W / 2, 198, o.note || 'Dữ liệu được xử lí để có thông tin giúp con người hiểu biết và ra quyết định', { size: 12.5, color: C.muted });
    return wrap(W, H, b, 'Dữ liệu và thông tin');
  }
  var add = { ipo: ipo, computerParts: computerParts, bits: bits, unitLadder: unitLadder, network: network, web: web, browser: browser, email: email, emailAddr: emailAddr, searchBox: searchBox,
    folderTree: folderTree, docPage: docPage, table: table, findReplace: findReplace, flowchart: flowchart, blocks: blocks, turtle: turtle, dataInfo: dataInfo };
  Object.keys(add).forEach(function (k) { if (S[k]) throw new Error('Trùng tên hàm SVG: ' + k); S[k] = add[k]; });
  /* sheet({ cols: ['A','B',…], rows: [[…],[…]], active: 'B2', formula: '=…', title, colW, sel: ['A1','B3'] }) – trang tính */
  function sheet(o) {
    o = o || {}; var rows = o.rows || [], nc = (o.cols || []).length, cw = o.colW || Math.min(110, 520 / nc), rh = 26, x0 = 46, top = (o.title ? 34 : 8) + (o.formula != null ? 34 : 0), W = x0 + nc * cw + 14, b = title(W, o.title);
    function rc(ref) { var m = /^([A-Z])(\d+)$/.exec(ref || ''); return m ? [m[1].charCodeAt(0) - 65, +m[2] - 1] : null; }
    if (o.formula != null) { var fy = top - 30; b += R(4, fy, W - 8, 24, { fill: '#fff', stroke: '#94a3b8', rx: 3 }) + T(14, fy + 16, o.active || '', { size: 12, anchor: 'start', bold: true }) + T(60, fy + 16, 'fx', { size: 12, anchor: 'start', italic: true, color: C.muted }) + T(84, fy + 16, o.formula, { size: 12.5, anchor: 'start', mono: true }); }
    b += R(x0, top, nc * cw, rh, { fill: '#e2e8f0', stroke: 'none', rx: 0 }) + R(4, top, x0 - 4, rh * (rows.length + 1), { fill: '#e2e8f0', stroke: 'none', rx: 0 });
    var s1 = rc((o.sel || [])[0]), s2 = rc((o.sel || [])[1]);
    if (s1 && s2) b += R(x0 + s1[0] * cw, top + rh * (s1[1] + 1), (s2[0] - s1[0] + 1) * cw, (s2[1] - s1[1] + 1) * rh, { fill: '#dbeafe', stroke: 'none', rx: 0 });
    var a = rc(o.active);
    (o.cols || []).forEach(function (c, j) { b += T(x0 + j * cw + cw / 2, top + rh / 2, c, { size: 12, bold: true, vcenter: true, color: '#334155' }); });
    rows.forEach(function (r, i) { b += T(25, top + (i + 1.5) * rh, String(i + 1), { size: 12, bold: true, vcenter: true, color: '#334155' }); r.forEach(function (v, j) { var num = typeof v === 'number' || /^-?[\d.,]+%?$/.test(String(v)); b += T(num ? x0 + (j + 1) * cw - 6 : x0 + j * cw + 6, top + (i + 1.5) * rh, String(v), { size: 12.5, anchor: num ? 'end' : 'start', vcenter: true, bold: i === 0 && o.header !== false }); }); });
    for (var i = 0; i <= rows.length + 1; i++) b += L(4, top + i * rh, x0 + nc * cw, top + i * rh, { color: '#cbd5e1', width: 1 });
    for (var j = 0; j <= nc; j++) b += L(x0 + j * cw, top, x0 + j * cw, top + (rows.length + 1) * rh, { color: '#cbd5e1', width: 1 });
    if (a) b += R(x0 + a[0] * cw, top + rh * (a[1] + 1), cw, rh, { fill: 'none', stroke: '#16a34a', sw: 2.5, rx: 0 });
    var H = top + (rows.length + 1) * rh + (o.note ? 30 : 10); if (o.note) b += T(W / 2, H - 10, o.note, { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Trang tính');
  }
  /* slide({ title, bullets, layout: 'title'|'content'|'image', note, theme }) – trang chiếu */
  function slide(o) {
    o = o || {}; var W = 480, H = 300, th = o.theme || ['#ede9fe', '#6d28d9'], b = R(10, 10, 460, 260, { fill: '#fff', stroke: '#475569', rx: 6 }) + R(10, 10, 460, 14, { fill: th[1], stroke: 'none', rx: 3 });
    if (o.layout === 'title') { b += T(240, 120, o.title || 'Tiêu đề', { size: 24, bold: true, color: th[1] }) + T(240, 160, o.sub || 'Tiêu đề phụ', { size: 15, color: '#475569' }); }
    else {
      b += R(30, 34, 420, 44, { fill: th[0], stroke: 'none', rx: 6 }) + T(240, 62, o.title || 'Tiêu đề trang', { size: 18, bold: true, color: th[1] });
      var bw = o.layout === 'image' ? 230 : 400;
      (o.bullets || []).forEach(function (t, i) { b += Ci(42, 104 + i * 30, 4, { fill: th[1] }) + T(54, 109 + i * 30, t, { size: 14, anchor: 'start' }); });
      if (o.layout === 'image') b += R(290, 92, 160, 120, { fill: '#e0f2fe', stroke: '#0284c7', rx: 4 }) + P('M300,200 l40,-50 l30,30 l20,-18 l50,38 z', { fill: '#7dd3fc', stroke: 'none' }) + Ci(420, 118, 10, { fill: '#fde047' }) + T(370, 230, 'Hình ảnh', { size: 12, color: '#0369a1' });
    }
    b += T(240, 292, o.note || '', { size: 12, color: C.muted });
    return wrap(W, o.note ? H + 6 : H - 20, b, o.title || 'Trang chiếu');
  }
  /* arraySteps({ title, steps: [{ vals: [...], hl: [i…], ok: [i…], dim: [i…], note }], showIdx }) – từng bước tìm kiếm/sắp xếp */
  function arraySteps(o) {
    o = o || {}; var st = o.steps || [], n = st.length ? st[0].vals.length : 0, cw = Math.min(46, 340 / Math.max(n, 1)), lw = 70, W = Math.max(520, lw + n * cw + 250), y0 = o.title ? 40 : 14, rh = 46, b = title(W, o.title);
    if (o.showIdx !== false) for (var j = 0; j < n; j++) b += T(lw + j * cw + cw / 2, y0 + 4, String(j + 1), { size: 11, color: C.muted });
    st.forEach(function (s, i) {
      var y = y0 + 12 + i * rh; b += T(lw - 8, y + 20, s.label || ('Bước ' + (i + 1)), { size: 12, bold: true, anchor: 'end', color: '#0e7490' });
      s.vals.forEach(function (v, j) { var hl = (s.hl || []).indexOf(j) >= 0, ok = (s.ok || []).indexOf(j) >= 0, dim = (s.dim || []).indexOf(j) >= 0;
        b += R(lw + j * cw, y, cw - 4, 32, { fill: ok ? '#bbf7d0' : (hl ? '#fde68a' : (dim ? '#f1f5f9' : '#ecfeff')), stroke: ok ? '#16a34a' : (hl ? '#d97706' : (dim ? '#cbd5e1' : '#0e7490')), rx: 5 }) + T(lw + j * cw + (cw - 4) / 2, y + 17, String(v), { size: 14, bold: true, vcenter: true, color: dim ? '#94a3b8' : C.ink }); });
      if (s.note) b += T(lw + n * cw + 10, y + 20, s.note, { size: 12, anchor: 'start' });
    });
    var H = y0 + 12 + st.length * rh + (o.legend ? 22 : 4); if (o.legend) b += T(W / 2, H - 8, o.legend, { size: 11.5, color: C.muted });
    return wrap(W, H, b, o.title || 'Các bước của thuật toán');
  }
  S.sheet = sheet; S.slide = slide; S.arraySteps = arraySteps;
  /* timeline({ title, items: [{ y: '1642', s: 'Máy Pascaline', sub }] , note }) – trục thời gian (so le trên/dưới) */
  function timeline(o) {
    o = o || {}; var it = o.items || [], n = it.length, W = Math.max(600, n * 110 + 40), gx = (W - 40) / n, ay = (o.title ? 34 : 6) + 88, b = title(W, o.title), id = 'tl' + (++uid);
    b += AR(id, '#334155') + L(14, ay, W - 12, ay, { color: '#334155', width: 3, marker: id });
    it.forEach(function (e, i) { var x = 20 + gx * (i + .5), up = i % 2 === 0, cy = up ? ay - 78 : ay + 22;
      b += Ci(x, ay, 6, { fill: '#0e7490' }) + L(x, ay + (up ? -6 : 6), x, up ? cy + 56 : cy, { color: '#94a3b8', width: 1.5 });
      b += R(x - gx / 2 + 4, cy, gx - 8, 56, { fill: '#ecfeff', stroke: '#0e7490', rx: 6 }) + T(x, cy + 16, e.y, { size: 13, bold: true, color: '#0e7490' }) + T(x, cy + 33, e.s, { size: 11.5 }) + (e.sub ? T(x, cy + 48, e.sub, { size: 10.5, color: C.muted }) : ''); });
    var H = ay + 86 + (o.note ? 22 : 0); if (o.note) b += T(W / 2, H - 8, o.note, { size: 11.5, color: C.muted });
    return wrap(W, H, b, o.title || 'Trục thời gian');
  }
  /* layers({ title, items: ['Chữ', 'Hình', 'Nền'], active, note }) – các lớp ảnh xếp chồng (trên cùng ở đầu danh sách) */
  function layers(o) {
    o = o || {}; var it = o.items || [], W = 600, y0 = o.title ? 40 : 12, b = title(W, o.title), cols = ['#fde68a', '#bfdbfe', '#bbf7d0', '#fecaca', '#e9d5ff'];
    for (var i = it.length - 1; i >= 0; i--) { var dx = 30 + (it.length - 1 - i) * 0 , y = y0 + 20 + i * 34; b += P('M' + (60 + i * 0) + ',' + (y + 40) + ' l60,-40 h170 l-60,40 z', { fill: cols[i % 5], stroke: i === o.active ? '#dc2626' : '#475569', sw: i === o.active ? 2.5 : 1.2 }); }
    it.forEach(function (t, i) { var y = y0 + 20 + i * 34; b += L(300, y + 20, 340, y + 20, { color: '#94a3b8', width: 1 }) + R(344, y + 6, 220, 28, { fill: i === o.active ? '#fee2e2' : '#f8fafc', stroke: '#94a3b8', rx: 4 }) + T(356, y + 21, (i + 1) + '. ' + t, { size: 13, anchor: 'start', vcenter: true, bold: i === o.active }); });
    var H = y0 + 20 + it.length * 34 + 50 + (o.note ? 18 : 0); if (o.note) b += T(W / 2, H - 8, o.note, { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Các lớp ảnh');
  }
  /* cropBox({ title, w, h, crop: [x, y, w, h], labels: true, note }) – vùng cắt trên ảnh (kích thước theo điểm ảnh) */
  function cropBox(o) {
    o = o || {}; var W = 600, iw = o.w || 1200, ih = o.h || 800, k = Math.min(380 / iw, 240 / ih), x0 = 40, y0 = (o.title ? 40 : 12) + 10, pw = iw * k, ph = ih * k, b = title(W, o.title);
    b += R(x0, y0, pw, ph, { fill: '#e0f2fe', stroke: '#0284c7', rx: 0 }) + P('M' + x0 + ',' + (y0 + ph) + ' l' + n2(pw * .3) + ',' + n2(-ph * .5) + ' l' + n2(pw * .2) + ',' + n2(ph * .25) + ' l' + n2(pw * .25) + ',' + n2(-ph * .4) + ' l' + n2(pw * .25) + ',' + n2(ph * .65) + ' z', { fill: '#86efac', stroke: 'none' }) + Ci(x0 + pw * .82, y0 + ph * .2, ph * .08, { fill: '#fde047' });
    b += T(x0 + pw / 2, y0 + ph + 16, iw + ' điểm ảnh', { size: 12 }) + T(x0 + pw + 8, y0 + ph / 2, ih + ' điểm ảnh', { size: 12, anchor: 'start' });
    if (o.crop) { var c = o.crop; b += R(x0 + c[0] * k, y0 + c[1] * k, c[2] * k, c[3] * k, { fill: 'none', stroke: '#dc2626', sw: 2.5, rx: 0, dash: true }) + T(x0 + (c[0] + c[2] / 2) * k, y0 + c[1] * k - 6, 'Vùng giữ lại ' + c[2] + ' × ' + c[3], { size: 12, bold: true, color: '#dc2626' }); }
    var H = y0 + ph + 30 + (o.note ? 18 : 0); if (o.note) b += T(W / 2, H - 8, o.note, { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Cắt ảnh');
  }
  /* pageHF({ title, header, footer, body: n dòng, pageNo, note }) – trang văn bản có đầu trang, chân trang */
  function pageHF(o) {
    o = o || {}; var W = 600, y0 = o.title ? 34 : 8, b = title(W, o.title), px = 170, pw = 260, ph = 300;
    b += R(px, y0, pw, ph, { fill: '#fff', stroke: '#64748b', rx: 4 }) + R(px + 10, y0 + 8, pw - 20, 30, { fill: '#dbeafe', stroke: '#2563eb', rx: 3, dash: true, sw: 1.2 }) + T(px + pw / 2, y0 + 23, o.header || 'Đầu trang', { size: 12, vcenter: true });
    for (var i = 0; i < (o.body || 9); i++) b += R(px + 22, y0 + 54 + i * 22, (pw - 44) * (i % 3 === 2 ? .7 : 1), 8, { fill: '#cbd5e1', stroke: 'none', rx: 2 });
    b += R(px + 10, y0 + ph - 38, pw - 20, 30, { fill: '#dcfce7', stroke: '#16a34a', rx: 3, dash: true, sw: 1.2 }) + T(px + pw / 2, y0 + ph - 23, o.footer || 'Chân trang', { size: 12, vcenter: true });
    b += T(px - 12, y0 + 23, 'Header (đầu trang)', { size: 12, anchor: 'end', color: '#1d4ed8', bold: true, vcenter: true }) + T(px - 12, y0 + ph - 23, 'Footer (chân trang)', { size: 12, anchor: 'end', color: '#15803d', bold: true, vcenter: true }) + T(px + pw + 12, y0 + ph / 2, 'Nội dung chính', { size: 12, anchor: 'start', color: C.muted });
    var H = y0 + ph + 10 + (o.note ? 22 : 0); if (o.note) b += T(W / 2, H - 8, o.note, { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Đầu trang và chân trang');
  }
  S.timeline = timeline; S.layers = layers; S.cropBox = cropBox; S.pageHF = pageHF;
  /* videoTrack({ title, total: giây, tracks: [{ name, items: [{ s, e, t, c }] }], head: giây, note }) – dòng thời gian dựng video */
  function videoTrack(o) {
    o = o || {}; var W = 640, x0 = 110, tw = 500, tot = o.total || 60, k = tw / tot, y0 = (o.title ? 38 : 10), th = 34, tr = o.tracks || [], b = title(W, o.title), cols = ['#bfdbfe', '#fde68a', '#bbf7d0', '#fbcfe8', '#ddd6fe'];
    var step = tot <= 30 ? 5 : (tot <= 90 ? 10 : 30);
    for (var t = 0; t <= tot; t += step) b += L(x0 + t * k, y0 + 14, x0 + t * k, y0 + 20, { color: '#64748b', width: 1 }) + T(x0 + t * k, y0 + 9, t + ' s', { size: 10.5, color: C.muted });
    tr.forEach(function (r, i) { var y = y0 + 26 + i * (th + 8);
      b += R(10, y, x0 - 18, th, { fill: '#f1f5f9', stroke: '#cbd5e1', rx: 4 }) + T(16, y + th / 2, r.name, { size: 12, bold: true, anchor: 'start', vcenter: true });
      b += R(x0, y, tw, th, { fill: '#f8fafc', stroke: '#e2e8f0', rx: 3 });
      (r.items || []).forEach(function (it, j) { b += R(x0 + it.s * k + 1, y + 3, (it.e - it.s) * k - 2, th - 6, { fill: it.c || cols[(i + j) % 5], stroke: '#475569', rx: 4, sw: 1 }) + T(x0 + (it.s + it.e) / 2 * k, y + th / 2, it.t, { size: 11, vcenter: true }); });
    });
    var yb = y0 + 26 + tr.length * (th + 8);
    if (o.head != null) b += L(x0 + o.head * k, y0 + 18, x0 + o.head * k, yb, { color: '#dc2626', width: 2 }) + P('M' + n2(x0 + o.head * k - 6) + ',' + (y0 + 14) + ' h12 l-6,8 z', { fill: '#dc2626', stroke: 'none' });
    var H = yb + (o.note ? 24 : 6); if (o.note) b += T(W / 2, H - 8, o.note, { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Dòng thời gian dựng video');
  }
  S.videoTrack = videoTrack;
  /* ===== Hình cho GDCD ===== */
  /* card({ title, tag, lines: ['…'], q, color }) – thẻ tình huống (mỗi dòng ≤ ~70 kí tự) */
  function card(o) {
    o = o || {}; var W = 640, ls = o.lines || [], col = o.color || '#c2410c', y0 = o.title ? 36 : 8, h = 52 + ls.length * 24 + (o.q ? 40 : 0), b = title(W, o.title);
    b += R(20, y0, W - 40, h, { fill: '#fff7ed', stroke: col, rx: 14, sw: 2 });
    b += R(36, y0 + 12, 150, 26, { fill: col, stroke: 'none', rx: 13 }) + T(111, y0 + 25, o.tag || 'Tình huống', { size: 13, bold: true, color: '#fff', vcenter: true });
    ls.forEach(function (l, i) { b += T(40, y0 + 62 + i * 24, l, { size: 14, anchor: 'start' }); });
    if (o.q) { var yq = y0 + 58 + ls.length * 24; b += L(40, yq, W - 40, yq, { color: '#fdba74', width: 1 }) + T(40, yq + 22, '❓ ' + o.q, { size: 14, bold: true, anchor: 'start', color: '#9a3412' }); }
    return wrap(W, y0 + h + 8, b, o.title || 'Thẻ tình huống');
  }
  /* compare({ title, left: { h, items }, right: { h, items } }) – hai cột Nên / Không nên */
  function compare(o) {
    o = o || {}; var W = 640, y0 = o.title ? 38 : 8, a = o.left || { items: [] }, c = o.right || { items: [] }, n = Math.max(a.items.length, c.items.length), H = y0 + 44 + n * 30 + 14, b = title(W, o.title);
    [[a, 20, '#dcfce7', '#15803d', '✓'], [c, 330, '#fee2e2', '#b91c1c', '✗']].forEach(function (z) {
      b += R(z[1], y0, 290, H - y0 - 8, { fill: z[2], stroke: z[3], rx: 10, sw: 1.5 }) + T(z[1] + 145, y0 + 20, z[0].h || '', { size: 14, bold: true, color: z[3], vcenter: true });
      z[0].items.forEach(function (it, i) { b += T(z[1] + 14, y0 + 54 + i * 30, z[4] + ' ' + it, { size: 13, anchor: 'start', color: '#1f2937' }); });
    });
    return wrap(W, H, b, o.title || 'So sánh');
  }
  S.card = card; S.compare = compare;
})();
