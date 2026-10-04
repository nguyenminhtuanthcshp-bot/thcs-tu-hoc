/* THCS Tự Học – hình minh hoạ SVG bổ sung cho môn Toán (dùng từ Toán 7).
   Nạp SAU js/svg.js và TRƯỚC các tệp trong data/. Tệp này KHÔNG sửa js/svg.js: chỉ gắn thêm hàm vào THCS.svg.
   Hàm mới: geo (hình học theo tên điểm), geom (tính toạ độ: trung điểm, chân đường vuông góc, trọng tâm…),
   transversal (hai đường thẳng và cát tuyến), solid (hình hộp, lập phương, lăng trụ đứng – cạnh khuất nét đứt),
   sectorChart (biểu đồ hình quạt tròn), lineChart (biểu đồ đoạn thẳng),
   pyramid (hình chóp tam giác đều / tứ giác đều), plane (mặt phẳng toạ độ, đồ thị hàm số bậc nhất, parabol),
   regPoly (đa giác đều nội/ngoại tiếp), round (hình trụ, hình nón, hình cầu), histogram (biểu đồ ghép nhóm),
   probTree (sơ đồ cây), outcomeGrid (bảng kết quả phép thử hai bước);
   geo có thêm circles (đường tròn), sectors (hình quạt), carcs (tô đậm cung). */
(function () {
  'use strict';
  var S = window.THCS && window.THCS.svg;
  if (!S) return;
  var C = S.C, uid = 0, PAL = [C.blue, C.orange, C.green, C.purple, C.pink, C.red, '#0891b2', '#a16207'];
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function n2(v) { return Math.round(v * 100) / 100; }
  function num(v) { var s = String(n2(Math.abs(v))).replace('.', ','); return (v < 0 ? '−' : '') + s; }
  function wrap(w, h, body, label) {
    return '<svg class="fig-svg" viewBox="0 0 ' + n2(w) + ' ' + n2(h) + '" width="' + n2(w) + '" role="img" aria-label="' + esc(label || 'Hình minh hoạ') +
      '" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" font-size="15">' + body + '</svg>';
  }
  function text(x, y, t, o) { o = o || {}; return '<text x="' + n2(x) + '" y="' + n2(y) + '" text-anchor="' + (o.anchor || 'middle') + '"' + (o.size ? ' font-size="' + o.size + '"' : '') + ' fill="' + (o.color || C.ink) + '"' + (o.bold ? ' font-weight="700"' : '') + '>' + esc(t) + '</text>'; }
  function line(x1, y1, x2, y2, o) { o = o || {}; return '<line x1="' + n2(x1) + '" y1="' + n2(y1) + '" x2="' + n2(x2) + '" y2="' + n2(y2) + '" stroke="' + (o.color || C.ink) + '" stroke-width="' + (o.width || 2) + '"' + (o.dash ? ' stroke-dasharray="' + (o.dash === true ? '7 5' : o.dash) + '"' : '') + ' stroke-linecap="round"/>'; }
  function unit(x, y) { var d = Math.sqrt(x * x + y * y) || 1; return [x / d, y / d]; }

  /* ---------- geom: tính toán toạ độ (điểm là mảng [x, y]) ---------- */
  var geom = {
    mid: function (P, Q) { return [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2]; },
    along: function (P, Q, t) { return [P[0] + (Q[0] - P[0]) * t, P[1] + (Q[1] - P[1]) * t]; },
    foot: function (P, A, B) { var dx = B[0] - A[0], dy = B[1] - A[1], t = ((P[0] - A[0]) * dx + (P[1] - A[1]) * dy) / (dx * dx + dy * dy); return [A[0] + t * dx, A[1] + t * dy]; },
    dist: function (P, Q) { return Math.sqrt((P[0] - Q[0]) * (P[0] - Q[0]) + (P[1] - Q[1]) * (P[1] - Q[1])); },
    centroid: function (A, B, C2) { return [(A[0] + B[0] + C2[0]) / 3, (A[1] + B[1] + C2[1]) / 3]; },
    incenter: function (A, B, C2) { var a = geom.dist(B, C2), b = geom.dist(A, C2), c = geom.dist(A, B), s = a + b + c; return [(a * A[0] + b * B[0] + c * C2[0]) / s, (a * A[1] + b * B[1] + c * C2[1]) / s]; },
    circumcenter: function (A, B, C2) {
      var d = 2 * (A[0] * (B[1] - C2[1]) + B[0] * (C2[1] - A[1]) + C2[0] * (A[1] - B[1]));
      var a2 = A[0] * A[0] + A[1] * A[1], b2 = B[0] * B[0] + B[1] * B[1], c2 = C2[0] * C2[0] + C2[1] * C2[1];
      return [(a2 * (B[1] - C2[1]) + b2 * (C2[1] - A[1]) + c2 * (A[1] - B[1])) / d, (a2 * (C2[0] - B[0]) + b2 * (A[0] - C2[0]) + c2 * (B[0] - A[0])) / d];
    },
    orthocenter: function (A, B, C2) { var O = geom.circumcenter(A, B, C2); return [A[0] + B[0] + C2[0] - 2 * O[0], A[1] + B[1] + C2[1] - 2 * O[1]]; },
    /* điểm D trên cạnh BC sao cho AD là phân giác góc A */
    bisectFoot: function (A, B, C2) { var c = geom.dist(A, B), b = geom.dist(A, C2); return geom.along(B, C2, c / (b + c)); },
    /* điểm nằm trên tia từ O theo góc deg (độ, ngược chiều kim đồng hồ, trục y hướng xuống) với độ dài r */
    polar: function (O, deg, r) { var a = deg * Math.PI / 180; return [O[0] + r * Math.cos(a), O[1] - r * Math.sin(a)]; },
    shift: function (P, dx, dy) { return [P[0] + dx, P[1] + dy]; }
  };

  /* ---------- geo: vẽ hình theo tên điểm ----------
     o: { w, h, P: { A: [x, y], … },
          seg: ['AB', 'BC', …] | [{ s: 'AB', color, dash, width }], dash: ['AH'], line: ['AB'], ray: ['OA'] (tia gốc O qua A), ext,
          ticks: [['AB', 1], ['AC', 1]], arcs: [['BAC', 1, '50°', color]] (n cung), right: ['AHB'] (góc vuông tại H),
          fill: [['ABC', màu]], hide: ['M'] (không vẽ chấm/tên), dots: false (không vẽ chấm), off: { A: [dx, dy] } (vị trí tên),
          text: [[x, y, '…', màu]], parallel: [['AB', 1]] (kí hiệu song song), label }
     Điểm có tên chữ thường (x, y, t, x'…) chỉ ghi tên, không chấm – dùng cho đầu tia/đường thẳng (dotAll: true để chấm tất cả). — tên điểm có nhiều kí tự viết 'A\'-B' . */
  function pair(s) { return s.indexOf('-') >= 0 ? s.split('-') : s.length === 2 ? [s[0], s[1]] : s.length === 3 && s[1] === "'" ? [s.slice(0, 2), s[2]] : s.length === 3 ? [s[0], s.slice(1)] : [s.slice(0, 2), s.slice(2)]; }
  function triple(s) { if (s.indexOf('-') >= 0) return s.split('-'); var out = [], i = 0; while (i < s.length) { if (s[i + 1] === "'" || /\d/.test(s[i + 1] || '')) { out.push(s.slice(i, i + 2)); i += 2; } else { out.push(s[i]); i++; } } return out; }
  function geo(o) {
    var P = o.P, it = [], names = Object.keys(P), hide = o.hide || [];
    function g(n) { if (!P[n]) throw new Error('geo: thiếu điểm ' + n); return P[n]; }
    function gp(c) { return typeof c === 'string' ? g(c) : c; }
    var pre = '', post = '', circB = [];
    function arcD(O, A, B, big) { // cung tròn tâm O từ A đến B (cung nhỏ, hoặc cung lớn nếu big)
      var R = geom.dist(O, A), a1 = Math.atan2(A[1] - O[1], A[0] - O[0]), a2 = Math.atan2(B[1] - O[1], B[0] - O[0]), dA = a2 - a1;
      while (dA <= -Math.PI) dA += 2 * Math.PI; while (dA > Math.PI) dA -= 2 * Math.PI;
      if (big) dA = dA > 0 ? dA - 2 * Math.PI : dA + 2 * Math.PI;
      var E = [O[0] + R * Math.cos(a1 + dA), O[1] + R * Math.sin(a1 + dA)];
      return { d: 'M' + n2(A[0]) + ',' + n2(A[1]) + ' A' + n2(R) + ',' + n2(R) + ' 0 ' + (Math.abs(dA) > Math.PI ? 1 : 0) + ' ' + (dA > 0 ? 1 : 0) + ' ' + n2(E[0]) + ',' + n2(E[1]), mid: a1 + dA / 2, R: R };
    }
    (o.circles || []).forEach(function (c) {
      if (Array.isArray(c)) c = { c: c[0], r: c[1], color: c[2], fill: c[3] };
      var O = gp(c.c); circB.push([O[0], O[1], c.r]);
      pre += '<circle cx="' + n2(O[0]) + '" cy="' + n2(O[1]) + '" r="' + n2(c.r) + '" fill="' + (c.fill || 'none') + '" stroke="' + (c.color || C.ink) + '" stroke-width="' + (c.width || 2) + '"' + (c.dash ? ' stroke-dasharray="7 5"' : '') + '/>';
    });
    (o.sectors || []).forEach(function (q) {
      var O = gp(q.c), A = gp(q.a), B = gp(q.b), a = arcD(O, A, B, q.big);
      pre += '<path d="M' + n2(O[0]) + ',' + n2(O[1]) + ' L' + a.d.slice(1) + ' Z" fill="' + (q.fill || C.orangeL) + '" stroke="' + (q.color || 'none') + '" stroke-width="1.5"/>';
    });
    (o.carcs || []).forEach(function (q, j) {
      var O = gp(q.c), A = gp(q.a), B = gp(q.b), a = arcD(O, A, B, q.big), col = q.color || [C.red, C.blue, C.green, C.purple][j % 4];
      post += '<path d="' + a.d + '" fill="none" stroke="' + col + '" stroke-width="' + (q.width || 4) + '" stroke-linecap="round" opacity="0.85"/>';
      if (q.label) { var lr = a.R + (q.lr || 18); it.push({ text: [O[0] + lr * Math.cos(a.mid), O[1] + lr * Math.sin(a.mid) + 5, q.label], color: col, bold: true, size: 14 }); }
    });
    var cx = 0, cy = 0, vis = names.filter(function (n) { return hide.indexOf(n) < 0; });
    vis.forEach(function (n) { cx += P[n][0]; cy += P[n][1]; }); cx /= vis.length || 1; cy /= vis.length || 1;
    (o.fill || []).forEach(function (f) { it.push({ poly: triple(f[0]).map(g), fill: f[1] || C.blueL, color: 'none', width: 0 }); });
    function addSeg(s, extra) {
      var obj = typeof s === 'string' ? { s: s } : s, pq = pair(obj.s), A = g(pq[0]), B = g(pq[1]), k;
      var base = { color: obj.color, dash: obj.dash || (extra && extra.dash), width: obj.width };
      if (extra && extra.kind) { k = {}; k[extra.kind] = [A[0], A[1], B[0], B[1]]; k.ext = obj.ext == null ? (o.ext == null ? 40 : o.ext) : obj.ext; }
      else k = { seg: [A[0], A[1], B[0], B[1]] };
      Object.keys(base).forEach(function (x) { if (base[x] != null) k[x] = base[x]; });
      it.push(k);
    }
    (o.line || []).forEach(function (s) { addSeg(s, { kind: 'line' }); });
    (o.ray || []).forEach(function (s) { addSeg(s, { kind: 'ray' }); });
    (o.seg || []).forEach(function (s) { addSeg(s); });
    (o.dash || []).forEach(function (s) { addSeg(s, { dash: true }); });
    (o.ticks || []).forEach(function (t) { var pq = pair(t[0]), A = g(pq[0]), B = g(pq[1]); it.push({ tick: [A[0], A[1], B[0], B[1]], n: t[1] || 1, color: t[2] }); });
    (o.parallel || []).forEach(function (t) {
      var pq = pair(t[0]), A = g(pq[0]), B = g(pq[1]), m = geom.along(A, B, t[2] == null ? 0.5 : t[2]), u = unit(B[0] - A[0], B[1] - A[1]), nx = -u[1], ny = u[0];
      for (var k = 0; k < (t[1] || 1); k++) { var px = m[0] + u[0] * k * 7, py = m[1] + u[1] * k * 7; it.push({ seg: [px - u[0] * 6 + nx * 5, py - u[1] * 6 + ny * 5, px, py], color: C.red, width: 1.8 }, { seg: [px - u[0] * 6 - nx * 5, py - u[1] * 6 - ny * 5, px, py], color: C.red, width: 1.8 }); }
    });
    (o.right || []).forEach(function (r) { var t = triple(r), V = g(t[1]), A = g(t[0]), B = g(t[2]); it.push({ right: [V[0], V[1], A[0], A[1], B[0], B[1]], size: 11 }); });
    (o.arcs || []).forEach(function (a, j) {
      var t = triple(a[0]), V = g(t[1]), A = g(t[0]), B = g(t[2]), n = a[1] || 1, col = a[3] || [C.orange, C.blue, C.green, C.purple][j % 4], r0 = a[4] || 22;
      for (var k = 0; k < n; k++) it.push({ arc: [V[0], V[1], A[0], A[1], B[0], B[1]], r: r0 + k * 5, color: col, label: k === 0 && a[2] ? a[2] : '' });
    });
    if (o.dots !== false) vis.forEach(function (n) {
      var p = P[n], off = (o.off || {})[n], dx = p[0] - cx, dy = p[1] - cy, u = Math.abs(dx) + Math.abs(dy) < 4 ? [0.7, -0.7] : unit(dx, dy), d = 16;
      if (!off) off = [u[0] * d, u[1] * d + 5];
      if (/^[a-z]/.test(n) && !o.dotAll) it.push({ text: [p[0] + off[0], p[1] + off[1], n], bold: true, italic: true }); // tên tia/đường thẳng (chữ thường): không chấm điểm
      else it.push({ pt: [p[0], p[1], n, off[0], off[1]], r: 3.5 });
    });
    (o.text || []).forEach(function (t) { it.push({ text: [t[0], t[1], t[2]], color: t[3] || C.ink, bold: t[4] !== false, size: t[5] || 14 }); });
    var W0 = o.w || 360, H0 = o.h || 240, x1 = 0, y1 = 0, x2 = W0, y2 = H0;
    it.forEach(function (k) { // nới khung nhìn nếu tên điểm/chữ bị tràn ra ngoài (ước lượng hộp chữ ~ 9px mỗi kí tự, cao 15px)
      var t = k.text || (k.pt && k.pt[2] ? [k.pt[0] + (k.pt[3] == null ? 0 : k.pt[3]), k.pt[1] + (k.pt[4] == null ? -10 : k.pt[4]), k.pt[2]] : null);
      if (!t) return; var hw = String(t[2]).length * 4.6 + 2;
      x1 = Math.min(x1, t[0] - hw); x2 = Math.max(x2, t[0] + hw); y1 = Math.min(y1, t[1] - 15); y2 = Math.max(y2, t[1] + 5);
    });
    circB.forEach(function (c) { x1 = Math.min(x1, c[0] - c[2] - 3); x2 = Math.max(x2, c[0] + c[2] + 3); y1 = Math.min(y1, c[1] - c[2] - 3); y2 = Math.max(y2, c[1] + c[2] + 3); });
    var out = S.draw({ w: W0, h: H0, items: it, aria: o.label || 'Hình vẽ hình học' });
    if (pre || post) { var gt = out.indexOf('>') + 1; out = out.slice(0, gt) + pre + out.slice(gt, out.lastIndexOf('</svg>')) + post + '</svg>'; }
    if (x1 < 0 || y1 < 0 || x2 > W0 || y2 > H0) {
      x1 = Math.floor(x1); y1 = Math.floor(y1); var nw = Math.ceil(x2) - x1, nh = Math.ceil(y2) - y1;
      out = out.replace('viewBox="0 0 ' + n2(W0) + ' ' + n2(H0) + '" width="' + n2(W0) + '"', 'viewBox="' + x1 + ' ' + y1 + ' ' + nw + ' ' + nh + '" width="' + nw + '"');
    }
    return out;
  }

  /* ---------- transversal: hai đường thẳng a, b bị cắt bởi đường thẳng c ----------
     o: { parallel: true, tilt: 0 (độ nghiêng của b nếu không song song), deg: 60 (góc giữa c và a), names: ['A','B'],
          show: { A: [1,2,3,4], B: [...] } (số hiệu góc hiện), mark: [['A',1,màu,'60°'], ['B',3]] (tô cung),
          namePos: { B: [dx, dy] } (dời vị trí tên giao điểm nếu trùng nhãn), w, h }
     Quy ước số hiệu tại mỗi giao điểm: 1 = trên – phải, 2 = trên – trái, 3 = dưới – trái, 4 = dưới – phải. */
  function transversal(o) {
    o = o || {}; var W = o.w || 380, H = o.h || 250, deg = o.deg || 60, nm = o.names || ['A', 'B'];
    var ya = 75, yb = 185, xa = 205, rad = deg * Math.PI / 180, xb = xa - (yb - ya) / Math.tan(rad);
    var tilt = o.parallel === false ? (o.tilt == null ? 10 : o.tilt) : 0, tr = tilt * Math.PI / 180;
    var it = [], dA = [Math.cos(rad), -Math.sin(rad)];
    it.push({ seg: [20, ya, W - 20, ya] });
    var bx1 = 20, by1 = yb + (xb - 20) * Math.tan(tr), bx2 = W - 20, by2 = yb - (W - 20 - xb) * Math.tan(tr);
    it.push({ seg: [bx1, by1, bx2, by2] });
    it.push({ line: [xb, yb, xa, ya], ext: 55 });
    it.push({ text: [W - 14, ya - 8, 'a'], bold: true, color: C.blue, anchor: 'end' }, { text: [W - 14, by2 - 8, 'b'], bold: true, color: C.blue, anchor: 'end' });
    var tip = [xa + dA[0] * 55, ya + dA[1] * 55]; it.push({ text: [tip[0] + 12, tip[1] + 4, 'c'], bold: true, color: C.blue });
    if (o.parallel !== false) [[ya], [yb]].forEach(function (y, i) { var px = 70 + i * 0, py = y[0]; it.push({ seg: [px - 6, py - 5, px, py], color: C.red, width: 1.8 }, { seg: [px - 6, py + 5, px, py], color: C.red, width: 1.8 }); });
    function dirs(bAngle) { // hướng 4 tia tại giao điểm: phải, lên theo c, trái, xuống theo c
      var r = [Math.cos(bAngle), -Math.sin(bAngle)]; return [r, dA, [-r[0], -r[1]], [-dA[0], -dA[1]]];
    }
    var V = { }; V[nm[0]] = { p: [xa, ya], d: dirs(0) }; V[nm[1]] = { p: [xb, yb], d: dirs(tr) };
    (o.mark || []).forEach(function (m, j) {
      var v = V[m[0]], i = m[1] - 1, d1 = v.d[i], d2 = v.d[(i + 1) % 4], p = v.p;
      it.push({ arc: [p[0], p[1], p[0] + d1[0] * 40, p[1] + d1[1] * 40, p[0] + d2[0] * 40, p[1] + d2[1] * 40], r: 27 + (m[4] || 0), color: m[2] || [C.orange, C.green, C.purple, C.pink][j % 4], label: m[3] || '' });
    });
    var show = o.show || {};
    Object.keys(show).forEach(function (k) {
      var v = V[k]; show[k].forEach(function (n) {
        var i = n - 1, d1 = v.d[i], d2 = v.d[(i + 1) % 4], u = unit(d1[0] + d2[0], d1[1] + d2[1]), r = 17;
        it.push({ text: [v.p[0] + u[0] * r, v.p[1] + u[1] * r + 5, String(n)], size: 13, color: C.muted, bold: true });
      });
    });
    var np = o.namePos || {}, pa = np[nm[0]] || [-30, -8], pb = np[nm[1]] || [-32, 20];
    it.push({ pt: [xa, ya, nm[0], pa[0], pa[1]], r: 3.5 }, { pt: [xb, yb, nm[1], pb[0], pb[1]], r: 3.5 });
    return S.draw({ w: W, h: H, items: it, aria: o.label || 'Hai đường thẳng bị cắt bởi một đường thẳng' });
  }

  /* ---------- solid: hình khối (phối cảnh), cạnh khuất nét đứt ----------
     o: { kind: 'hhcn' | 'lapphuong' | 'langtru3' | 'langtru4', a, b, c (dài, rộng, cao – đơn vị vẽ tuỳ ý),
          names: true (ABCD.A'B'C'D' / ABC.A'B'C'), dims: { a: '5 cm', b: '3 cm', c: '4 cm' }, fill, label } */
  function solid(o) {
    o = o || {}; var kind = o.kind || 'hhcn', a = o.a || (kind === 'lapphuong' ? 3 : 5), b = o.b || (kind === 'lapphuong' ? 3 : 3), c = o.c || (kind === 'lapphuong' ? 3 : 3.2);
    if (kind === 'lapphuong') { b = a; c = a; }
    var k = 150 / Math.max(a, c + b * 0.5), dep = [0.5 * b * k * Math.cos(Math.PI / 5), -0.5 * b * k * Math.sin(Math.PI / 5) * 1.6];
    var x0 = 70, yb0 = 40 + c * k - dep[1] + 10, base;
    if (kind === 'langtru3') base = [[x0, yb0], [x0 + dep[0] * 1.3 + a * k * 0.35, yb0 + dep[1]], [x0 + a * k, yb0]]; // A (trước trái), B (sau), C (trước phải)
    else if (kind === 'langtru4') base = [[x0, yb0], [x0 + a * k, yb0], [x0 + a * k * 0.85 + dep[0] * 1.5, yb0 + dep[1] * 1.5], [x0 + a * k * 0.15 + dep[0] * 1.5, yb0 + dep[1] * 1.5]];
    else base = [[x0, yb0], [x0 + a * k, yb0], [x0 + a * k + dep[0], yb0 + dep[1]], [x0 + dep[0], yb0 + dep[1]]];
    var top = base.map(function (p) { return [p[0], p[1] - c * k]; }), n = base.length, it = [];
    var hidden = kind === 'langtru3' ? 1 : 3; // chỉ số đỉnh đáy khuất
    var fill = o.fill || C.blueL;
    it.push({ poly: top, fill: fill, color: 'none', width: 0 });
    for (var i = 0; i < n; i++) {
      var j = (i + 1) % n, hid = i === hidden || j === hidden;
      it.push({ seg: [base[i][0], base[i][1], base[j][0], base[j][1]], dash: hid, color: hid ? C.muted : C.ink, width: hid ? 1.6 : 2.2 });
      it.push({ seg: [top[i][0], top[i][1], top[j][0], top[j][1]] });
      it.push({ seg: [base[i][0], base[i][1], top[i][0], top[i][1]], dash: i === hidden, color: i === hidden ? C.muted : C.ink, width: i === hidden ? 1.6 : 2.2 });
    }
    if (o.names !== false) {
      var L = kind === 'langtru3' ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D'];
      var cxs = 0, cys = 0; base.concat(top).forEach(function (p) { cxs += p[0]; cys += p[1]; }); cxs /= 2 * n; cys /= 2 * n;
      base.forEach(function (p, i) { var u = unit(p[0] - cxs, 0.6); it.push({ text: [p[0] + u[0] * 14, p[1] + 18, L[i]], bold: true }); });
      top.forEach(function (p, i) {
        if (kind !== 'langtru3' && i === 1) { it.push({ text: [p[0] + 7, p[1] + 17, L[i] + "'"], bold: true, anchor: 'start' }); return; } // B' trước – phải: đặt trong mặt bên để không đè cạnh B'C'
        var u = unit(p[0] - cxs, -0.6); it.push({ text: [p[0] + u[0] * 14, p[1] - 8, L[i] + "'"], bold: true });
      });
    }
    var d = o.dims || {};
    if (d.a) it.push({ text: [(base[0][0] + (kind === 'langtru3' ? base[2][0] : base[1][0])) / 2, base[0][1] + 36, d.a], color: C.blue, bold: true, size: 14 });
    if (d.b) { var q1 = kind === 'langtru3' ? base[2] : base[1], q2 = kind === 'langtru3' ? base[1] : base[2]; it.push({ text: [(q1[0] + q2[0]) / 2 + 10, (q1[1] + q2[1]) / 2 + 16, d.b], color: C.blue, bold: true, size: 14, anchor: 'start' }); }
    if (d.c) { var e = base[0]; it.push({ text: [e[0] - 8, e[1] - c * k / 2 + 5, d.c], color: C.blue, bold: true, size: 14, anchor: 'end' }); }
    var maxX = 0, minY = 1e9; base.concat(top).forEach(function (p) { maxX = Math.max(maxX, p[0]); minY = Math.min(minY, p[1]); });
    var W = maxX + 90, H = yb0 + 50;
    return S.draw({ w: W, h: H, items: it, aria: o.label || 'Hình khối' });
  }

  /* ---------- sectorChart: biểu đồ hình quạt tròn ----------
     o: { title, parts: [{ label, value, color }], unit: '%' (value là phần trăm) , r, legend: true } */
  function sectorChart(o) {
    var parts = o.parts, tot = parts.reduce(function (s, p) { return s + p.value; }, 0), r = o.r || 95, T = o.title ? 38 : 12;
    var cx = r + 20, cy = T + r + 8, W = 2 * r + 60 + 220, H = Math.max(cy + r + 16, T + parts.length * 28 + 20), b = '', a = -Math.PI / 2;
    if (o.title) b += text(W / 2, 24, o.title, { bold: true, size: 16 });
    parts.forEach(function (p, i) {
      var frac = p.value / tot, a2 = a + frac * 2 * Math.PI, col = p.color || PAL[i % PAL.length], large = frac > 0.5 ? 1 : 0;
      b += frac >= 0.9999 ? '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + col + '" stroke="#fff" stroke-width="2"/>'
        : '<path d="M' + cx + ',' + cy + ' L' + n2(cx + r * Math.cos(a)) + ',' + n2(cy + r * Math.sin(a)) + ' A' + r + ',' + r + ' 0 ' + large + ' 1 ' + n2(cx + r * Math.cos(a2)) + ',' + n2(cy + r * Math.sin(a2)) + ' Z" fill="' + col + '" stroke="#fff" stroke-width="2"/>';
      var am = (a + a2) / 2, pct = o.unit === '%' ? p.value : Math.round(frac * 1000) / 10;
      if (frac >= 0.06) b += text(cx + r * 0.62 * Math.cos(am), cy + r * 0.62 * Math.sin(am) + 5, num(pct) + '%', { color: '#fff', bold: true, size: 14 });
      var ly = T + 14 + i * 28;
      b += '<rect x="' + (2 * r + 50) + '" y="' + (ly - 12) + '" width="16" height="16" rx="3" fill="' + col + '"/>' + text(2 * r + 74, ly + 1, p.label + ' (' + num(pct) + '%)', { anchor: 'start', size: 14 });
      a = a2;
    });
    return wrap(W, H, b, o.title || 'Biểu đồ hình quạt tròn');
  }

  /* ---------- lineChart: biểu đồ đoạn thẳng ----------
     o: { title, cats: [...], series: [{ name, values, color }] | values: [...], yMax, yStep, yLabel, xLabel, width, height } */
  function lineChart(o) {
    var S2 = o.series || [{ name: '', values: o.values }], W = o.width || 620, H = o.height || 320, L = 58, R = 20, T = o.title ? 44 : 20, B = 58 + (S2.length > 1 ? 26 : 0);
    var maxV = o.yMax || Math.max.apply(null, S2.map(function (s) { return Math.max.apply(null, s.values); })), step = o.yStep || Math.ceil(maxV / 5), topV = o.yMax || Math.ceil(maxV / step) * step;
    var minV = o.yMin || 0, ph = H - T - B, pw = W - L - R, Y = function (v) { return T + ph - (v - minV) / (topV - minV) * ph; }, n = o.cats.length, gw = pw / n;
    var b = '';
    if (o.title) b += text(W / 2, 24, o.title, { bold: true, size: 16 });
    for (var v = minV; v <= topV + 1e-9; v += step) b += line(L, Y(v), W - R, Y(v), { color: '#e5e7eb', width: 1 }) + text(L - 8, Y(v) + 5, num(v), { anchor: 'end', size: 13, color: C.muted });
    b += line(L, T - 6, L, T + ph, { width: 1.8 }) + line(L, T + ph, W - R, T + ph, { width: 1.8 });
    o.cats.forEach(function (c, i) { b += text(L + gw * i + gw / 2, T + ph + 22, c, { size: 13 }); });
    S2.forEach(function (s, j) {
      var col = s.color || PAL[j], pts = s.values.map(function (val, i) { return [L + gw * i + gw / 2, Y(val)]; });
      b += '<polyline points="' + pts.map(function (p) { return n2(p[0]) + ',' + n2(p[1]); }).join(' ') + '" fill="none" stroke="' + col + '" stroke-width="2.5"/>';
      pts.forEach(function (p, i) { b += '<circle cx="' + n2(p[0]) + '" cy="' + n2(p[1]) + '" r="4.5" fill="' + col + '"/>' + text(p[0], p[1] - 10, num(s.values[i]), { size: 12, bold: true, color: col }); });
    });
    if (o.yLabel) b += text(L - 50, T - 14, o.yLabel, { anchor: 'start', size: 12, color: C.muted });
    if (o.xLabel) b += text(W - R, T + ph + 42, o.xLabel, { anchor: 'end', size: 12, color: C.muted });
    if (S2.length > 1) { var lx = L; S2.forEach(function (s, j) { var col = s.color || PAL[j]; b += line(lx, H - 13, lx + 18, H - 13, { color: col, width: 3 }) + text(lx + 24, H - 8, s.name, { anchor: 'start', size: 13 }); lx += 40 + s.name.length * 8; }); }
    return wrap(W, H, b, o.title || 'Biểu đồ đoạn thẳng');
  }


  /* ---------- pyramid: hình chóp tam giác đều / tứ giác đều (Toán 8) ----------
     o: { kind: 'chop3' | 'chop4', names: ['S','A','B','C','D'] | false, height: true (vẽ SO nét đứt), apothem: true (vẽ trung đoạn SM),
          dims: { a: 'nhãn cạnh đáy', h: 'nhãn chiều cao', d: 'nhãn trung đoạn', e: 'nhãn cạnh bên' }, fill, label } */
  function pyramid(o) {
    o = o || {}; var kind = o.kind || 'chop4', it = [], N = o.names === false ? null : (o.names || (kind === 'chop3' ? ['S', 'A', 'B', 'C'] : ['S', 'A', 'B', 'C', 'D']));
    var base, x0 = 60, yb = 250, hp = o.hpx || 175;
    if (kind === 'chop3') base = [[x0, yb - 45], [x0 + 60, yb], [x0 + 230, yb - 35]]; // A trái, B trước, C phải; cạnh AC khuất
    else base = [[x0, yb], [x0 + 170, yb], [x0 + 240, yb - 62], [x0 + 70, yb - 62]]; // A trước trái, B trước phải, C sau phải, D sau trái (khuất)
    var n = base.length, O = [0, 0]; base.forEach(function (q) { O[0] += q[0] / n; O[1] += q[1] / n; });
    if (kind === 'chop3') O = [(base[0][0] + base[1][0] + base[2][0]) / 3, (base[0][1] + base[1][1] + base[2][1]) / 3];
    var Sx = [O[0], O[1] - hp], fill = o.fill || C.blueL;
    // mặt trước tô nhạt
    if (kind === 'chop3') { it.push({ poly: [Sx, base[0], base[1]], fill: fill, color: 'none', width: 0 }); it.push({ poly: [Sx, base[1], base[2]], fill: '#bfdbfe', color: 'none', width: 0 }); }
    else { it.push({ poly: [Sx, base[0], base[1]], fill: fill, color: 'none', width: 0 }); it.push({ poly: [Sx, base[1], base[2]], fill: '#bfdbfe', color: 'none', width: 0 }); }
    var hidE = kind === 'chop3' ? [[0, 2]] : [[2, 3], [3, 0]], hidV = kind === 'chop3' ? -1 : 3;
    function isHid(i, j) { return hidE.some(function (e) { return (e[0] === i && e[1] === j) || (e[0] === j && e[1] === i); }); }
    for (var i = 0; i < n; i++) { var j = (i + 1) % n, h = isHid(i, j); it.push({ seg: [base[i][0], base[i][1], base[j][0], base[j][1]], dash: h, color: h ? C.muted : C.ink, width: h ? 1.6 : 2.2 }); }
    base.forEach(function (q, i) { var h = i === hidV; it.push({ seg: [Sx[0], Sx[1], q[0], q[1]], dash: h, color: h ? C.muted : C.ink, width: h ? 1.6 : 2.2 }); });
    if (kind === 'chop4' && o.diag !== false) { it.push({ seg: [base[0][0], base[0][1], base[2][0], base[2][1]], dash: true, color: C.muted, width: 1.3 }); it.push({ seg: [base[1][0], base[1][1], base[3][0], base[3][1]], dash: true, color: C.muted, width: 1.3 }); }
    if (o.height !== false) { it.push({ seg: [Sx[0], Sx[1], O[0], O[1]], dash: true, color: C.red, width: 1.8 }); it.push({ circle: [O[0], O[1], 2.5], fill: C.red, color: C.red });
      it.push({ text: [O[0] - 6, O[1] + 16, 'O'], bold: true, size: 14, anchor: 'end', color: C.red }); }
    var M = kind === 'chop3' ? [(base[1][0] + base[2][0]) / 2, (base[1][1] + base[2][1]) / 2] : [(base[0][0] + base[1][0]) / 2, base[0][1]];
    if (o.apothem !== false) { it.push({ seg: [Sx[0], Sx[1], M[0], M[1]], color: C.green, width: 2 }); it.push({ circle: [M[0], M[1], 2.5], fill: C.green, color: C.green });
      it.push({ text: [M[0] + (kind === 'chop3' ? 10 : 0), M[1] + (kind === 'chop3' ? 18 : 20), 'M'], bold: true, size: 14, color: C.green }); }
    if (N) {
      it.push({ text: [Sx[0], Sx[1] - 10, N[0]], bold: true });
      var offs = kind === 'chop3' ? [[-14, 5], [0, 22], [14, 5]] : [[-12, 18], [12, 18], [14, 2], [-14, 2]];
      base.forEach(function (q, i) { it.push({ text: [q[0] + offs[i][0], q[1] + offs[i][1], N[i + 1]], bold: true }); });
    }
    var d = o.dims || {};
    if (d.a) { var p1 = kind === 'chop3' ? base[0] : base[0], p2 = base[1]; it.push({ text: [(p1[0] + p2[0]) / 2 - (kind === 'chop3' ? 18 : 0), (p1[1] + p2[1]) / 2 + (kind === 'chop3' ? 20 : 40), d.a], color: C.blue, bold: true, size: 14 }); }
    if (d.h) it.push({ text: [O[0] + (kind === 'chop3' ? -7 : 7), (Sx[1] + O[1]) / 2 + 20, d.h], color: C.red, bold: true, size: 14, anchor: kind === 'chop3' ? 'end' : 'start' });
    if (d.d) it.push({ text: [(Sx[0] + M[0]) / 2 + (kind === 'chop3' ? 8 : -8), (Sx[1] + M[1]) / 2 + 22, d.d], color: C.green, bold: true, size: 14, anchor: kind === 'chop3' ? 'start' : 'end' });
    if (d.e) { var q = base[kind === 'chop3' ? 2 : 2]; it.push({ text: [(Sx[0] + q[0]) / 2 + 10, (Sx[1] + q[1]) / 2 - 4, d.e], color: C.purple, bold: true, size: 14, anchor: 'start' }); }
    var maxX = Math.max.apply(null, base.map(function (q) { return q[0]; }));
    return S.draw({ w: maxX + 90, h: yb + (d.a && kind !== 'chop3' ? 56 : 36), items: it, aria: o.label || (kind === 'chop3' ? 'Hình chóp tam giác đều' : 'Hình chóp tứ giác đều') });
  }

  /* ---------- plane: mặt phẳng toạ độ Oxy, đồ thị hàm số bậc nhất / điểm ----------
     o: { x: [xmin, xmax], y: [ymin, ymax], u: 34 (px mỗi đơn vị), grid: true,
          lines: [{ a, b, color, label, dash }]   (y = a x + b; a = null và x0 cho đường thẳng đứng x = x0),
          curves: [{ f: function (x) {...}, color }],
          pts: [{ x, y, label, color, proj: true }], xMul, yMul (nhân số ghi trên vạch chia), xName, yName, title, label } */
  function plane(o) {
    var xr = o.x || [-5, 5], yr = o.y || [-4, 5], u = o.u || 34, pad = 30, T = o.title ? 40 : 22;
    var W = (xr[1] - xr[0]) * u + 2 * pad + 16, H = (yr[1] - yr[0]) * u + T + pad + 8 + (o.xName ? 10 : 0);
    var X = function (x) { return pad + (x - xr[0]) * u; }, Y = function (y) { return T + (yr[1] - y) * u; }, b = '';
    if (o.title) b += text(W / 2, 22, o.title, { bold: true, size: 15 });
    if (o.grid !== false) { for (var gx = Math.ceil(xr[0]); gx <= xr[1]; gx++) b += line(X(gx), Y(yr[0]), X(gx), Y(yr[1]), { color: '#e5e7eb', width: 1 }); for (var gy = Math.ceil(yr[0]); gy <= yr[1]; gy++) b += line(X(xr[0]), Y(gy), X(xr[1]), Y(gy), { color: '#e5e7eb', width: 1 }); }
    var ax = X(0), ay = Y(0);
    b += line(X(xr[0]), ay, X(xr[1]) + 10, ay, { width: 1.6 }) + '<path d="M' + n2(X(xr[1]) + 14) + ',' + n2(ay) + ' l-9,-4 l0,8 z" fill="' + C.ink + '"/>';
    b += line(ax, Y(yr[0]), ax, Y(yr[1]) - 8, { width: 1.6 }) + '<path d="M' + n2(ax) + ',' + n2(Y(yr[1]) - 12) + ' l-4,9 l8,0 z" fill="' + C.ink + '"/>';
    b += (o.xName ? text(X(xr[1]) + 14, ay + 34, o.xName, { size: 13, bold: true, anchor: 'end' }) : text(X(xr[1]) + 8, ay + 20, 'x', { size: 14, bold: true })) + text(ax + 12, Y(yr[1]) - 2, o.yName || 'y', { size: 14, bold: true, anchor: 'start' }) + text(ax - 7, ay + 16, 'O', { size: 13, bold: true, anchor: 'end' });
    var step = o.step || 1;
    for (var tx = Math.ceil(xr[0]); tx <= xr[1]; tx += step) if (tx !== 0) b += line(X(tx), ay - 3, X(tx), ay + 3, { width: 1.2 }) + text(X(tx), ay + 16, num(tx * (o.xMul || 1)), { size: 11, color: C.muted });
    for (var ty = Math.ceil(yr[0]); ty <= yr[1]; ty += step) if (ty !== 0) b += line(ax - 3, Y(ty), ax + 3, Y(ty), { width: 1.2 }) + text(ax - 6, Y(ty) + 4, num(ty * (o.yMul || 1)), { size: 11, color: C.muted, anchor: 'end' });
    var clipId = 'pl' + (++uid);
    b += '<defs><clipPath id="' + clipId + '"><rect x="' + n2(X(xr[0])) + '" y="' + n2(Y(yr[1])) + '" width="' + n2((xr[1] - xr[0]) * u) + '" height="' + n2((yr[1] - yr[0]) * u) + '"/></clipPath></defs>';
    (o.curves || []).forEach(function (c, i) {
      var pts = []; for (var k = 0; k <= 200; k++) { var x = xr[0] + (xr[1] - xr[0]) * k / 200, y = c.f(x); if (isFinite(y)) pts.push(n2(X(x)) + ',' + n2(Y(y))); }
      b += '<polyline clip-path="url(#' + clipId + ')" points="' + pts.join(' ') + '" fill="none" stroke="' + (c.color || PAL[i]) + '" stroke-width="2.4"/>';
      if (c.label) { var lx0 = c.lx !== undefined ? c.lx : xr[1] - (xr[1] - xr[0]) * 0.15, ly0 = c.f(lx0), cpx = X(lx0) + (c.dx || 8), cpy = Y(ly0) + (c.dy || 0), ctw = String(c.label).length * 7.6, can = 'start';
        if (cpx + ctw > W - 4) { can = 'end'; cpx = X(lx0) - 8; } cpy = Math.max(16, Math.min(H - 6, cpy));
        b += '<rect x="' + n2(can === 'start' ? cpx - 2 : cpx - ctw - 2) + '" y="' + n2(cpy - 13) + '" width="' + n2(ctw + 4) + '" height="17" rx="3" fill="#fff" fill-opacity="0.85"/>' + text(cpx, cpy, c.label, { anchor: can, size: 13, bold: true, color: c.color || PAL[i] }); }
    });
    (o.lines || []).forEach(function (l, i) {
      var col = l.color || PAL[i % PAL.length], x1, y1, x2, y2;
      if (l.a === null || l.a === undefined && l.x0 !== undefined) { x1 = x2 = l.x0; y1 = yr[0]; y2 = yr[1]; }
      else { x1 = xr[0]; x2 = xr[1]; y1 = l.a * x1 + l.b; y2 = l.a * x2 + l.b; }
      b += '<g clip-path="url(#' + clipId + ')">' + line(X(x1), Y(y1), X(x2), Y(y2), { color: col, width: 2.4, dash: l.dash }) + '</g>';
      if (l.label) {
        // nhãn đặt ở điểm trong khung gần mép, rồi kẹp vào trong viewBox
        var lx, ly;
        if (l.a === null || l.a === undefined && l.x0 !== undefined) { lx = l.x0; ly = yr[1] - 0.6; }
        else { var cand = []; for (var s2 = 0; s2 <= 100; s2++) { var xx = xr[0] + (xr[1] - xr[0]) * s2 / 100, yy = l.a * xx + l.b; if (yy >= yr[0] + 0.3 && yy <= yr[1] - 0.3) cand.push([xx, yy]); } var at = l.at !== undefined ? l.at : 0.85, c0 = cand[Math.min(cand.length - 1, Math.floor(cand.length * at))] || [0, l.b]; lx = c0[0]; ly = c0[1]; }
        var px = X(lx) + (l.dx || 8), py = Y(ly) + (l.dy || -8), anc = 'start', tw = String(l.label).length * 7.6;
        if (px + tw > W - 4) { anc = 'end'; px = X(lx) - 8; }
        if (anc === 'end' && px - tw < 4) { anc = 'start'; px = 4; }
        py = Math.max(16, Math.min(H - 6, py));
        b += '<rect x="' + n2(anc === 'start' ? px - 2 : px - tw - 2) + '" y="' + n2(py - 13) + '" width="' + n2(tw + 4) + '" height="17" rx="3" fill="#fff" fill-opacity="0.85"/>' + text(px, py, l.label, { anchor: anc, size: 13, bold: true, color: col });
      }
    });
    (o.pts || []).forEach(function (p) {
      var col = p.color || C.red, px = X(p.x), py = Y(p.y);
      if (p.proj) { b += line(px, py, px, ay, { color: col, width: 1.2, dash: '4 3' }) + line(px, py, ax, py, { color: col, width: 1.2, dash: '4 3' }); }
      b += '<circle cx="' + n2(px) + '" cy="' + n2(py) + '" r="4" fill="' + col + '"/>';
      if (p.label) { var tw2 = String(p.label).length * 7.4, lx2 = px + (p.dx !== undefined ? p.dx : 7), ly2 = py + (p.dy !== undefined ? p.dy : -8), an = 'start'; if (lx2 + tw2 > W - 4) { an = 'end'; lx2 = px - 7; } ly2 = Math.max(14, Math.min(H - 5, ly2)); b += text(lx2, ly2, p.label, { anchor: an, size: 13, bold: true, color: col }); }
    });
    return wrap(W, H, b, o.label || o.title || 'Mặt phẳng toạ độ');
  }


  /* ---------- regPoly: đa giác đều nội tiếp đường tròn (Toán 9) ----------
     o: { n, R: 90, rot: 90 (góc của đỉnh đầu, độ), names: ['A','B',…] | false, O: 'O' | false, outer: true (đường tròn ngoại tiếp),
          inner: false (đường tròn nội tiếp), radii: false (vẽ các bán kính OA…), apothem: false (vẽ OH ⊥ cạnh đầu), fill, arcs, text, w, h } */
  function regPoly(o) {
    var n = o.n || 6, R = o.R || 90, w = o.w || 2 * R + 80, h = o.h || 2 * R + 60, c = [w / 2, h / 2], rot = o.rot == null ? 90 : o.rot;
    var names = o.names === false ? null : (o.names || 'ABCDEFGHIJKL'.slice(0, n).split('')), P = {}, keys = [];
    for (var i = 0; i < n; i++) { var k = names ? names[i] : ('V' + i); P[k] = geom.polar(c, rot - i * 360 / n, R); keys.push(k); }
    var seg = keys.map(function (k, i) { return k + '-' + keys[(i + 1) % n]; }), dash = [], circles = [], right = [], hide = names ? [] : keys.slice();
    var On = o.O === false ? null : (o.O || 'O'); if (On) P[On] = c;
    if (o.outer !== false) circles.push({ c: c, r: R, color: C.blue });
    var r = R * Math.cos(Math.PI / n);
    if (o.inner) circles.push({ c: c, r: r, color: C.green, dash: true });
    if (o.radii && On) keys.forEach(function (k) { dash.push(On + '-' + k); });
    if (o.apothem && On) { P.H = geom.mid(P[keys[0]], P[keys[1]]); seg.push({ s: On + '-H', color: C.red, width: 2.2 }); right.push(On + '-H-' + keys[1]); }
    var off = {}; keys.forEach(function (k) { var u = unit(P[k][0] - c[0], P[k][1] - c[1]); off[k] = [u[0] * 16, u[1] * 16 + 5]; });
    if (On) off[On] = [-12, 16]; if (P.H) { var uh = unit(P.H[0] - c[0], P.H[1] - c[1]); off.H = [uh[0] * 16, uh[1] * 16 + 5]; }
    Object.keys(o.off || {}).forEach(function (k) { off[k] = o.off[k]; });
    return geo({ w: w, h: h, P: P, seg: seg, dash: dash, circles: circles, right: right, hide: hide, off: off, fill: o.fill ? [[keys.join('-'), o.fill]] : [], arcs: o.arcs, text: o.text, label: o.label || ('Đa giác đều ' + n + ' cạnh') });
  }
  // triple() cần hỗ trợ tên nối bằng '-' cho đa giác nhiều đỉnh: đã có sẵn.

  /* ---------- round: hình trụ, hình nón, hình cầu (Toán 9) ----------
     o: { kind: 'tru' | 'non' | 'cau', r: 60, h: 150, dims: { r: 'r', h: 'h', l: 'l' }, names: { O: 'O', O2: "O'", S: 'S' }, fill } */
  function round(o) {
    var kind = o.kind || 'tru', r = o.r || 60, hh = o.h || 150, ry = Math.max(10, r * 0.28), d = o.dims || {}, fill = o.fill || C.blueL, nm = o.names || {};
    var W = 2 * r + 130, cx = r + 50, b = '', H;
    function ell(x, y, dashBack, fillE) { // elip đáy: nửa trước nét liền, nửa sau nét đứt (hoặc liền)
      return (fillE ? '<ellipse cx="' + n2(x) + '" cy="' + n2(y) + '" rx="' + n2(r) + '" ry="' + n2(ry) + '" fill="' + fillE + '" stroke="none"/>' : '') +
        '<path d="M' + n2(x - r) + ',' + n2(y) + ' A' + n2(r) + ',' + n2(ry) + ' 0 0 0 ' + n2(x + r) + ',' + n2(y) + '" fill="none" stroke="' + C.ink + '" stroke-width="2.2"/>' +
        '<path d="M' + n2(x - r) + ',' + n2(y) + ' A' + n2(r) + ',' + n2(ry) + ' 0 0 1 ' + n2(x + r) + ',' + n2(y) + '" fill="none" stroke="' + (dashBack ? C.muted : C.ink) + '" stroke-width="' + (dashBack ? 1.6 : 2.2) + '"' + (dashBack ? ' stroke-dasharray="6 5"' : '') + '/>';
    }
    function dot(x, y, t, dx, dy, col) { return '<circle cx="' + n2(x) + '" cy="' + n2(y) + '" r="3" fill="' + (col || C.ink) + '"/>' + (t ? text(x + dx, y + dy, t, { bold: true, size: 14, color: col || C.ink }) : ''); }
    if (kind === 'tru') {
      var yt = 30 + ry, yb = yt + hh; H = yb + ry + 26;
      b += '<path d="M' + n2(cx - r) + ',' + n2(yt) + ' L' + n2(cx - r) + ',' + n2(yb) + ' A' + n2(r) + ',' + n2(ry) + ' 0 0 0 ' + n2(cx + r) + ',' + n2(yb) + ' L' + n2(cx + r) + ',' + n2(yt) + ' Z" fill="' + fill + '"/>';
      b += ell(cx, yb, true) + '<ellipse cx="' + n2(cx) + '" cy="' + n2(yt) + '" rx="' + n2(r) + '" ry="' + n2(ry) + '" fill="#dbeafe" stroke="' + C.ink + '" stroke-width="2.2"/>';
      b += line(cx - r, yt, cx - r, yb, { width: 2.2 }) + line(cx + r, yt, cx + r, yb, { width: 2.2 });
      b += line(cx, yt, cx, yb, { color: C.red, dash: '6 4', width: 1.8 }) + line(cx, yb, cx + r, yb, { color: C.blue, width: 2 }) + line(cx, yt, cx + r, yt, { color: C.blue, width: 1.6, dash: '5 4' });
      b += dot(cx, yt, nm.O2 === false ? '' : (nm.O2 || "O'"), -15, 5) + dot(cx, yb, nm.O === false ? '' : (nm.O || 'O'), -14, 5);
      if (d.r) b += text(cx + r / 2, yb - 7, d.r, { color: C.blue, bold: true, size: 14 });
      if (d.h) b += text(cx + r + 10, (yt + yb) / 2 + 5, d.h, { color: C.red, bold: true, size: 14, anchor: 'start' });
    } else if (kind === 'non') {
      var ys = 30, yb2 = ys + hh; H = yb2 + ry + 26;
      b += '<path d="M' + n2(cx) + ',' + n2(ys) + ' L' + n2(cx - r) + ',' + n2(yb2) + ' A' + n2(r) + ',' + n2(ry) + ' 0 0 0 ' + n2(cx + r) + ',' + n2(yb2) + ' Z" fill="' + fill + '"/>';
      b += ell(cx, yb2, true) + line(cx, ys, cx - r, yb2, { width: 2.2 }) + line(cx, ys, cx + r, yb2, { width: 2.2 });
      b += line(cx, ys, cx, yb2, { color: C.red, dash: '6 4', width: 1.8 }) + line(cx, yb2, cx + r, yb2, { color: C.blue, width: 2 });
      b += '<path d="M' + n2(cx + 10) + ',' + n2(yb2) + ' l0,-10 l-10,0" fill="none" stroke="' + C.ink + '" stroke-width="1.3"/>';
      b += dot(cx, ys, nm.S === false ? '' : (nm.S || 'S'), 0, -9) + dot(cx, yb2, nm.O === false ? '' : (nm.O || 'O'), -14, 5);
      if (d.r) b += text(cx + r / 2, yb2 - 7, d.r, { color: C.blue, bold: true, size: 14 });
      if (d.h) b += text(cx - 7, (ys + yb2) / 2 + 12, d.h, { color: C.red, bold: true, size: 14, anchor: 'end' });
      if (d.l) b += text(cx + r / 2 + 10, (ys + yb2) / 2 - 2, d.l, { color: C.purple, bold: true, size: 14, anchor: 'start' });
    } else {
      var cy = 30 + r; H = cy + r + 30;
      b += '<circle cx="' + n2(cx) + '" cy="' + n2(cy) + '" r="' + n2(r) + '" fill="' + fill + '" stroke="' + C.ink + '" stroke-width="2.2"/>' + ell(cx, cy, true);
      b += line(cx, cy, cx + r, cy, { color: C.blue, width: 2 }) + dot(cx, cy, nm.O === false ? '' : (nm.O || 'O'), -14, 5);
      if (d.r) b += text(cx + r / 2, cy - 7, d.r, { color: C.blue, bold: true, size: 14 });
    }
    return wrap(W, H, b, o.label || ({ tru: 'Hình trụ', non: 'Hình nón', cau: 'Hình cầu' })[kind]);
  }

  /* ---------- histogram: biểu đồ tần số / tần số tương đối ghép nhóm (cột sát nhau) (Toán 9) ----------
     o: { title, edges: [a0, a1, …, an], values: [n1, …, nn], yMax, yStep, yLabel, xLabel, color, unit ('' | '%'), labels: true, width, height } */
  function histogram(o) {
    var W = o.width || 420, H = o.height || 280, T = o.title ? 40 : 20, L = 46, R = 20, B = o.xLabel ? 52 : 36, e = o.edges, v = o.values, n = v.length, u = o.unit || '';
    var maxV = Math.max.apply(null, v), step = o.yStep || Math.max(1, Math.ceil(maxV / 5)), top = o.yMax || Math.ceil(maxV / step) * step;
    var ph = H - T - B, pw = W - L - R, bw = pw / n, Y = function (y) { return T + ph - y / top * ph; }, b = '';
    if (o.title) b += text(W / 2, 18, o.title, { bold: true, size: 14 });
    for (var t = 0; t <= top + 1e-9; t += step) { b += line(L, Y(t), W - R, Y(t), { color: '#e5e7eb', width: 1 }) + text(L - 6, Y(t) + 4, num(t) + (u && t ? u : ''), { anchor: 'end', size: 11, color: C.muted }); }
    v.forEach(function (val, i) {
      var x = L + i * bw; b += '<rect x="' + n2(x) + '" y="' + n2(Y(val)) + '" width="' + n2(bw) + '" height="' + n2(Y(0) - Y(val)) + '" fill="' + (o.color || C.blue) + '" fill-opacity="0.85" stroke="#fff" stroke-width="1.5"/>';
      if (o.labels !== false) b += text(x + bw / 2, Y(val) - 5, num(val) + u, { size: 11, bold: true, color: C.ink });
    });
    e.forEach(function (x, i) { b += line(L + i * bw, Y(0), L + i * bw, Y(0) + 4, { width: 1.2 }) + text(L + i * bw, Y(0) + 17, num(x), { size: 11, color: C.ink }); });
    b += line(L, Y(0), W - R, Y(0), { width: 1.6 }) + line(L, Y(0), L, T - 6, { width: 1.6 });
    if (o.yLabel) b += text(L - 4, T - 8, o.yLabel, { size: 11, color: C.muted, anchor: 'start' });
    if (o.xLabel) b += text(W / 2, H - 8, o.xLabel, { size: 12, color: C.muted });
    return wrap(W, H, b, o.title || 'Biểu đồ tần số ghép nhóm');
  }

  /* ---------- probTree: sơ đồ cây liệt kê kết quả của phép thử nhiều bước (Toán 9) ----------
     o: { levels: [['S', 'N'], ['S', 'N']] (nhãn nhánh mỗi bước), names: ['Lần 1', 'Lần 2'] (tên bước, tuỳ chọn), sep: '' (nối nhãn thành kết quả),
          mark: function (path) → true để tô đậm kết quả, dx: 110, dy: 28, title } */
  function probTree(o) {
    var lv = o.levels, dx = o.dx || 110, dy = o.dy || 28, sep = o.sep == null ? '' : o.sep, T = o.title ? 34 : 10, top = T + (o.names ? 24 : 6);
    var leaves = lv.reduce(function (p, l) { return p * l.length; }, 1), H = top + leaves * dy + 8, resW = 16 + lv.length * 12 * Math.max(1, sep.length + 1);
    var W = 30 + lv.length * dx + resW + 20, b = '';
    if (o.title) b += text(W / 2, 22, o.title, { bold: true, size: 15 });
    if (o.names) o.names.forEach(function (nm, i) { b += text(20 + (i + 1) * dx, top - 10, nm, { size: 12, color: C.muted }); });
    function node(depth, y0, y1, px, py, path) {
      var yc = (y0 + y1) / 2, x = 20 + depth * dx;
      if (depth > 0) b += line(px + 8, py, x - 12, yc, { color: C.muted, width: 1.4 }) + text(x, yc + 5, path[path.length - 1], { bold: true, size: 14, color: C.blue });
      else b += '<circle cx="' + x + '" cy="' + n2(yc) + '" r="4" fill="' + C.ink + '"/>';
      if (depth === lv.length) { var hl = o.mark && o.mark(path); b += text(x + 26, yc + 5, path.join(sep), { anchor: 'start', size: 14, bold: !!hl, color: hl ? C.red : C.ink }); return; }
      var k = lv[depth].length, h = (y1 - y0) / k;
      lv[depth].forEach(function (lab, i) { node(depth + 1, y0 + i * h, y0 + (i + 1) * h, x + (depth ? 6 : 0), yc, path.concat([lab])); });
    }
    node(0, top, top + leaves * dy, 0, 0, []);
    return wrap(W, H, b, o.title || 'Sơ đồ cây');
  }

  /* ---------- outcomeGrid: bảng kết quả của phép thử hai bước (ví dụ gieo hai xúc xắc) (Toán 9) ----------
     o: { rows: [1..6], cols: [1..6], rowName, colName, cell: function (r, c) → chuỗi, mark: function (r, c) → true để tô màu, cw: 46, ch: 26, title } */
  function outcomeGrid(o) {
    var R = o.rows, Cc = o.cols, cw = o.cw || 46, ch = o.ch || 26, T = o.title ? 34 : 8, L = 70, top = T + 26;
    var W = L + Cc.length * cw + 10, H = top + (R.length + 1) * ch + 8, b = '';
    if (o.title) b += text(W / 2, 22, o.title, { bold: true, size: 15 });
    if (o.colName) b += text(L + Cc.length * cw / 2, top - 8, o.colName, { size: 12, color: C.muted });
    var y0 = top;
    b += '<rect x="' + L + '" y="' + y0 + '" width="' + Cc.length * cw + '" height="' + ch + '" fill="#eef2ff"/>';
    b += '<rect x="' + (L - 40) + '" y="' + (y0 + ch) + '" width="40" height="' + R.length * ch + '" fill="#eef2ff"/>';
    if (o.rowName) b += text(L - 20, y0 + ch / 2 + 5, o.rowName, { size: 12, color: C.muted });
    Cc.forEach(function (c, j) { b += text(L + j * cw + cw / 2, y0 + ch / 2 + 5, String(c), { bold: true, size: 13 }); });
    R.forEach(function (r, i) {
      var y = y0 + (i + 1) * ch;
      b += text(L - 20, y + ch / 2 + 5, String(r), { bold: true, size: 13 });
      Cc.forEach(function (c, j) {
        var hl = o.mark && o.mark(r, c);
        if (hl) b += '<rect x="' + (L + j * cw + 1) + '" y="' + (y + 1) + '" width="' + (cw - 2) + '" height="' + (ch - 2) + '" rx="3" fill="' + C.orangeL + '"/>';
        b += text(L + j * cw + cw / 2, y + ch / 2 + 5, o.cell ? o.cell(r, c) : r + ',' + c, { size: 12, bold: !!hl, color: hl ? C.orange : C.ink });
      });
    });
    for (var i = 0; i <= R.length + 1; i++) b += line(i ? L - 40 : L, y0 + i * ch, L + Cc.length * cw, y0 + i * ch, { color: '#cbd5e1', width: 1 });
    for (var j = 0; j <= Cc.length; j++) b += line(L + j * cw, y0, L + j * cw, y0 + (R.length + 1) * ch, { color: '#cbd5e1', width: 1 });
    b += line(L - 40, y0 + ch, L - 40, y0 + (R.length + 1) * ch, { color: '#cbd5e1', width: 1 });
    return wrap(W, H, b, o.title || 'Bảng kết quả');
  }

  var API = { probTree: probTree, outcomeGrid: outcomeGrid, regPoly: regPoly, round: round, histogram: histogram, pyramid: pyramid, plane: plane, geo: geo, geom: geom, transversal: transversal, solid: solid, sectorChart: sectorChart, lineChart: lineChart };
  Object.keys(API).forEach(function (k) { S[k] = API[k]; });
})();
