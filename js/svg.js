/* THCS Tự Học – thư viện vẽ hình minh hoạ SVG (chạy ngoại tuyến, không cần thư viện ngoài).
   Nạp SAU js/core.js và TRƯỚC các tệp trong data/. Mỗi hàm trả về một CHUỖI <svg …> có viewBox,
   tự co giãn theo khung (CSS: .fig svg { max-width: 100%; height: auto; }).
   Dùng trong dữ liệu bài học: { title: '…', html: '…', svg: THCS.svg.numberLine({...}), caption: '…' } */
(function () {
  'use strict';
  var C = { ink: '#1f2937', muted: '#6b7280', blue: '#2563eb', blueL: '#dbeafe', red: '#dc2626', green: '#16a34a',
    greenL: '#dcfce7', orange: '#ea580c', orangeL: '#ffedd5', purple: '#7c3aed', purpleL: '#ede9fe', yellowL: '#fef9c3', pink: '#db2777' };
  var PALETTE = [C.blue, C.orange, C.green, C.purple, C.pink, C.red];
  var uid = 0;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function n2(v) { return Math.round(v * 100) / 100; }
  function num(v) { // số kiểu Việt Nam: dấu trừ “−”, dấu phẩy thập phân
    var s = String(n2(Math.abs(v))).replace('.', ',');
    return (v < 0 ? '−' : '') + s;
  }
  function wrap(w, h, body, label) {
    return '<svg class="fig-svg" viewBox="0 0 ' + n2(w) + ' ' + n2(h) + '" width="' + n2(w) + '" role="img" aria-label="' + esc(label || 'Hình minh hoạ') +
      '" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" font-size="15">' + body + '</svg>';
  }
  function text(x, y, t, o) {
    o = o || {};
    return '<text x="' + n2(x) + '" y="' + n2(y) + '" text-anchor="' + (o.anchor || 'middle') + '"' + (o.size ? ' font-size="' + o.size + '"' : '') +
      ' fill="' + (o.color || C.ink) + '"' + (o.bold ? ' font-weight="700"' : '') + (o.italic ? ' font-style="italic"' : '') + '>' + esc(t) + '</text>';
  }
  function line(x1, y1, x2, y2, o) {
    o = o || {};
    return '<line x1="' + n2(x1) + '" y1="' + n2(y1) + '" x2="' + n2(x2) + '" y2="' + n2(y2) + '" stroke="' + (o.color || C.ink) + '" stroke-width="' + (o.width || 2) + '"' +
      (o.dash ? ' stroke-dasharray="' + (o.dash === true ? '7 5' : o.dash) + '"' : '') + (o.marker ? ' marker-end="url(#' + o.marker + ')"' : '') + ' stroke-linecap="round"/>';
  }
  function arrowDef(id, color) {
    return '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + (color || C.ink) + '"/></marker></defs>';
  }
  function fracText(x, y, t, color, size) { // "3/4" -> phân số chồng
    var m = /^(−?-?)(\d+)\/(\d+)$/.exec(String(t));
    if (!m) return text(x, y, t, { color: color, size: size });
    var s = size || 14, sign = m[1] ? '−' : '';
    return (sign ? text(x - s * 0.55, y + s * 0.2, sign, { color: color, size: s }) : '') + text(x, y - s * 0.15, m[2], { color: color, size: s }) +
      line(x - s * 0.45, y + s * 0.05, x + s * 0.45, y + s * 0.05, { color: color || C.ink, width: 1.2 }) + text(x, y + s * 0.95, m[3], { color: color, size: s });
  }

  /* ---------- Trục số / tia số ----------
     o: { min, max, div (số phần chia mỗi đơn vị, mặc định 1), ray (tia số bắt đầu từ 0), width,
          labelEvery (ghi số ở mỗi k đơn vị), marks: [{ v, label, color, above }], range: [a, b] (tô đoạn),
          jumps: [{ from, to, label, color }] (mũi tên nhảy), fracLabels: true (ghi phân số ở vạch chia),
          decLabels: true (ghi số thập phân ở vạch chia) } */
  function numberLine(o) {
    var min = o.min, max = o.max, div = o.div || 1, W = o.width || 640, pad = 34, jumps = o.jumps || [];
    var top = jumps.length ? 62 : (o.marks && o.marks.some(function (m) { return m.above; }) ? 34 : 14);
    var y = top + 16, H = y + (o.fracLabels ? 58 : 44);
    var id = 'nl' + (++uid);
    var X = function (v) { return pad + (v - min) / (max - min) * (W - 2 * pad - 10); };
    var b = arrowDef(id, C.ink) + arrowDef(id + 'j', C.orange);
    if (o.range) b += '<rect x="' + n2(X(o.range[0])) + '" y="' + (y - 6) + '" width="' + n2(X(o.range[1]) - X(o.range[0])) + '" height="12" rx="6" fill="' + C.greenL + '"/>';
    b += line(o.ray ? X(min) : X(min) - 16, y, W - 8, y, { marker: id, width: 2 });
    var every = o.labelEvery || 1, steps = Math.round((max - min) * div);
    for (var k = 0; k <= steps; k++) {
      var v = min + k / div, x = X(v), major = Math.abs(v - Math.round(v)) < 1e-9;
      b += line(x, y - (major ? 8 : 5), x, y + (major ? 8 : 5), { width: major ? 2 : 1.3, color: major ? C.ink : C.muted });
      if (major && Math.round(v) % every === 0) b += text(x, y + 28, num(Math.round(v)), { size: 15 });
      else if (!major && o.decLabels) b += text(x, y + 26, num(v), { size: 11, color: C.muted });
      else if (!major && o.fracLabels) { var nume = Math.round(v * div); b += fracText(x, y + 26, (nume < 0 ? '−' : '') + Math.abs(nume) + '/' + div, C.muted, 12); }
    }
    jumps.forEach(function (j) {
      var x1 = X(j.from), x2 = X(j.to), mid = (x1 + x2) / 2, hgt = Math.min(44, Math.abs(x2 - x1) / 2 + 12), col = j.color || C.orange;
      b += '<path d="M' + n2(x1) + ',' + (y - 4) + ' Q' + n2(mid) + ',' + n2(y - 4 - hgt * 1.4) + ' ' + n2(x2) + ',' + (y - 4) + '" fill="none" stroke="' + col + '" stroke-width="2" marker-end="url(#' + id + 'j)"/>';
      if (j.label) b += text(mid, y - 10 - hgt * 0.75, j.label, { color: col, size: 14, bold: true });
    });
    (o.marks || []).forEach(function (m, i) {
      var x = X(m.v), col = m.color || PALETTE[i % PALETTE.length];
      b += '<circle cx="' + n2(x) + '" cy="' + y + '" r="5.5" fill="' + col + '" stroke="#fff" stroke-width="1.5"/>';
      if (m.label) b += m.above === false || (!m.above && !jumps.length) ? text(x, y - 14, m.label, { color: col, bold: true }) : text(x, y - 14, m.label, { color: col, bold: true });
    });
    return wrap(W, H, b, o.aria || 'Trục số');
  }

  /* ---------- Vẽ hình học tổng quát ----------
     o: { w, h, items: [...] } — mỗi phần tử là một trong các dạng:
       { poly: [[x,y],...], fill, color, dash }            đa giác
       { seg: [x1,y1,x2,y2], color, dash, width }            đoạn thẳng
       { line: [x1,y1,x2,y2], ext }                          đường thẳng (kéo dài thêm ext px hai phía)
       { ray: [x1,y1,x2,y2], ext }                           tia gốc (x1,y1) đi qua (x2,y2)
       { pt: [x,y,'A', dx, dy], color }                     điểm có tên
       { text: [x,y,'…'], anchor, size, color, bold }
       { tick: [x1,y1,x2,y2], n }                            kí hiệu cạnh bằng nhau (n gạch)
       { right: [vx,vy, ax,ay, bx,by] }                      kí hiệu góc vuông tại V
       { arc: [vx,vy, ax,ay, bx,by], r, label, color }       cung đánh dấu góc AVB
       { axis: [x1,y1,x2,y2] }                               trục đối xứng (nét đứt đỏ)
       { circle: [cx,cy,r], fill, color }
       { grid: [x,y,cols,rows,size], fill, filled: số ô tô màu }                           */
  function unit(ax, ay) { var d = Math.sqrt(ax * ax + ay * ay) || 1; return [ax / d, ay / d]; }
  function draw(o) {
    var b = '', W = o.w || 360, H = o.h || 240;
    (o.items || []).forEach(function (it) {
      var col = it.color || C.ink, p;
      if (it.grid) {
        p = it.grid; var filled = it.filled || 0, cnt = 0;
        for (var r = 0; r < p[3]; r++) for (var c = 0; c < p[2]; c++) {
          b += '<rect x="' + n2(p[0] + c * p[4]) + '" y="' + n2(p[1] + r * p[4]) + '" width="' + p[4] + '" height="' + p[4] + '" fill="' + (cnt++ < filled ? (it.fill || C.blueL) : '#fff') + '" stroke="' + C.muted + '" stroke-width="1"/>';
        }
      } else if (it.poly) {
        b += '<polygon points="' + it.poly.map(function (q) { return n2(q[0]) + ',' + n2(q[1]); }).join(' ') + '" fill="' + (it.fill || 'none') + '" stroke="' + col + '" stroke-width="' + (it.width || 2.2) + '" stroke-linejoin="round"' + (it.dash ? ' stroke-dasharray="7 5"' : '') + '/>';
      } else if (it.seg) {
        p = it.seg; b += line(p[0], p[1], p[2], p[3], { color: col, dash: it.dash, width: it.width || 2.2 });
      } else if (it.line || it.ray) {
        p = it.line || it.ray; var u = unit(p[2] - p[0], p[3] - p[1]), e = it.ext == null ? 40 : it.ext;
        var sx = it.line ? p[0] - u[0] * e : p[0], sy = it.line ? p[1] - u[1] * e : p[1];
        b += line(sx, sy, p[2] + u[0] * e, p[3] + u[1] * e, { color: col, dash: it.dash, width: it.width || 2.2 });
      } else if (it.axis) {
        p = it.axis; b += line(p[0], p[1], p[2], p[3], { color: C.red, dash: '9 6', width: 2 });
      } else if (it.circle) {
        p = it.circle; b += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="' + (it.fill || 'none') + '" stroke="' + col + '" stroke-width="' + (it.width || 2) + '"/>';
      } else if (it.tick) {
        p = it.tick; var mx = (p[0] + p[2]) / 2, my = (p[1] + p[3]) / 2, d = unit(p[2] - p[0], p[3] - p[1]), nx = -d[1], ny = d[0], n = it.n || 1;
        for (var k = 0; k < n; k++) { var off = (k - (n - 1) / 2) * 5; var cx = mx + d[0] * off, cy = my + d[1] * off; b += line(cx - nx * 6, cy - ny * 6, cx + nx * 6, cy + ny * 6, { color: it.color || C.red, width: 1.8 }); }
      } else if (it.right) {
        p = it.right; var s = it.size || 12, ua = unit(p[2] - p[0], p[3] - p[1]), ub = unit(p[4] - p[0], p[5] - p[1]);
        b += '<path d="M' + n2(p[0] + ua[0] * s) + ',' + n2(p[1] + ua[1] * s) + ' L' + n2(p[0] + ua[0] * s + ub[0] * s) + ',' + n2(p[1] + ua[1] * s + ub[1] * s) + ' L' + n2(p[0] + ub[0] * s) + ',' + n2(p[1] + ub[1] * s) + '" fill="none" stroke="' + (it.color || C.ink) + '" stroke-width="1.5"/>';
      } else if (it.arc) {
        p = it.arc; var R = it.r || 26, a1 = Math.atan2(p[3] - p[1], p[2] - p[0]), a2 = Math.atan2(p[5] - p[1], p[4] - p[0]);
        var dA = a2 - a1; while (dA <= -Math.PI) dA += 2 * Math.PI; while (dA > Math.PI) dA -= 2 * Math.PI;
        var x1 = p[0] + R * Math.cos(a1), y1 = p[1] + R * Math.sin(a1), x2 = p[0] + R * Math.cos(a1 + dA), y2 = p[1] + R * Math.sin(a1 + dA);
        b += '<path d="M' + n2(x1) + ',' + n2(y1) + ' A' + R + ',' + R + ' 0 0 ' + (dA > 0 ? 1 : 0) + ' ' + n2(x2) + ',' + n2(y2) + '" fill="none" stroke="' + (it.color || C.orange) + '" stroke-width="2"/>';
        if (it.label) { var am = a1 + dA / 2, lr = R + 16; b += text(p[0] + lr * Math.cos(am), p[1] + lr * Math.sin(am) + 5, it.label, { color: it.color || C.orange, size: 14, bold: true }); }
      } else if (it.pt) {
        p = it.pt; b += '<circle cx="' + n2(p[0]) + '" cy="' + n2(p[1]) + '" r="' + (it.r || 4) + '" fill="' + (it.color || C.ink) + '"/>';
        if (p[2]) b += text(p[0] + (p[3] == null ? 0 : p[3]), p[1] + (p[4] == null ? -10 : p[4]), p[2], { color: it.color || C.ink, bold: true, italic: false });
      } else if (it.text) {
        p = it.text; b += text(p[0], p[1], p[2], { anchor: it.anchor, size: it.size, color: it.color, bold: it.bold });
      }
    });
    return wrap(W, H, b, o.aria || 'Hình vẽ');
  }
  /* Toạ độ các đỉnh của đa giác đều n cạnh, tâm (cx, cy), bán kính r, góc xoay rot (độ). */
  function regular(n, cx, cy, r, rot) {
    var pts = [], a0 = (rot == null ? -90 : rot) * Math.PI / 180;
    for (var i = 0; i < n; i++) { var a = a0 - i * 2 * Math.PI / n; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    return pts;
  }
  /* Đặt tên các đỉnh của đa giác (nhãn đẩy ra xa tâm). */
  function labels(pts, names, dist) {
    var cx = 0, cy = 0; pts.forEach(function (q) { cx += q[0]; cy += q[1]; }); cx /= pts.length; cy /= pts.length;
    return pts.map(function (q, i) { var u = unit(q[0] - cx, q[1] - cy), d = dist || 16; return { text: [q[0] + u[0] * d, q[1] + u[1] * d + 5, names[i]], bold: true }; });
  }
  /* Kí hiệu cạnh bằng nhau cho mọi cạnh của đa giác (hoặc theo danh sách số gạch từng cạnh). */
  function ticks(pts, counts) {
    return pts.map(function (q, i) { var r = pts[(i + 1) % pts.length]; var n = counts ? counts[i] : 1; return n ? { tick: [q[0], q[1], r[0], r[1]], n: n } : null; }).filter(Boolean);
  }

  /* ---------- Biểu đồ cột / cột kép ----------
     o: { title, cats: [...], series: [{ name, values: [...], color }], yMax, yStep, yLabel, xLabel, width, height } */
  function bar(o) {
    var W = o.width || 620, H = o.height || 320, L = 58, R = 16, T = o.title ? 44 : 20, B = 58 + (o.series.length > 1 ? 26 : 0);
    var cats = o.cats, S = o.series, n = cats.length, m = S.length;
    var maxV = o.yMax || Math.max.apply(null, S.map(function (s) { return Math.max.apply(null, s.values); }));
    var step = o.yStep || Math.ceil(maxV / 5), top = o.yMax || Math.ceil(maxV / step) * step;
    var ph = H - T - B, pw = W - L - R, Y = function (v) { return T + ph - v / top * ph; };
    var b = '';
    if (o.title) b += text(W / 2, 24, o.title, { bold: true, size: 16 });
    for (var v = 0; v <= top + 1e-9; v += step) { b += line(L, Y(v), W - R, Y(v), { color: '#e5e7eb', width: 1 }) + text(L - 8, Y(v) + 5, num(v), { anchor: 'end', size: 13, color: C.muted }); }
    b += line(L, T - 6, L, T + ph, { width: 1.8 }) + line(L, T + ph, W - R, T + ph, { width: 1.8 });
    var gw = pw / n, bw = Math.min(46, gw * 0.7 / m);
    cats.forEach(function (c, i) {
      var gx = L + gw * i + gw / 2 - bw * m / 2;
      S.forEach(function (s, j) {
        var val = s.values[i], x = gx + j * bw, col = s.color || PALETTE[j];
        b += '<rect x="' + n2(x + 2) + '" y="' + n2(Y(val)) + '" width="' + n2(bw - 4) + '" height="' + n2(T + ph - Y(val)) + '" fill="' + col + '" rx="3"/>';
        b += text(x + bw / 2, Y(val) - 6, num(val), { size: 12, color: col, bold: true });
      });
      b += text(L + gw * i + gw / 2, T + ph + 22, c, { size: 13 });
    });
    if (o.yLabel) b += text(L - 50, T - 14, o.yLabel, { anchor: 'start', size: 12, color: C.muted });
    if (o.xLabel) b += text(W - R, T + ph + 42, o.xLabel, { anchor: 'end', size: 12, color: C.muted });
    if (m > 1) {
      var lx = L;
      S.forEach(function (s, j) { var col = s.color || PALETTE[j]; b += '<rect x="' + lx + '" y="' + (H - 20) + '" width="14" height="14" fill="' + col + '" rx="2"/>' + text(lx + 20, H - 8, s.name, { anchor: 'start', size: 13 }); lx += 30 + s.name.length * 8; });
    }
    return wrap(W, H, b, o.title || 'Biểu đồ cột');
  }

  /* ---------- Biểu đồ tranh ----------
     o: { title, rows: [{ label, n }] (n có thể là số lẻ .5 để vẽ nửa biểu tượng), icon: '🍎', key: 'ứng với 10 học sinh' } */
  function picto(o) {
    var rows = o.rows, maxN = Math.max.apply(null, rows.map(function (r) { return Math.ceil(r.n); }));
    var lw = o.labelWidth || 110, cell = 34, W = Math.max(lw + maxN * cell + 30, 360), T = o.title ? 40 : 10, H = T + rows.length * 44 + (o.key ? 40 : 10);
    var b = '', id = 'pc' + (++uid);
    if (o.title) b += text(W / 2, 24, o.title, { bold: true, size: 16 });
    b += '<defs><clipPath id="' + id + '"><rect x="-20" y="-20" width="20" height="40"/></clipPath></defs>';
    rows.forEach(function (r, i) {
      var y = T + i * 44;
      b += '<rect x="4" y="' + (y + 2) + '" width="' + (W - 8) + '" height="40" rx="6" fill="' + (i % 2 ? '#fff' : '#f8fafc') + '" stroke="#e5e7eb"/>';
      b += text(12, y + 28, r.label, { anchor: 'start', size: 14 });
      for (var k = 0; k < Math.ceil(r.n); k++) {
        var x = lw + k * cell + cell / 2, half = (r.n - k) < 1;
        b += half ? '<g transform="translate(' + n2(x) + ',' + (y + 22) + ')"><g clip-path="url(#' + id + ')">' + text(0, 9, o.icon || '⭐', { size: 24 }) + '</g></g>' : text(x, y + 31, o.icon || '⭐', { size: 24 });
      }
    });
    if (o.key) b += text(12, H - 14, (o.icon || '⭐') + ' ' + o.key, { anchor: 'start', size: 14, color: C.muted });
    return wrap(W, H, b, o.title || 'Biểu đồ tranh');
  }

  /* ---------- Phân số: hình tròn / băng giấy chia phần ---------- */
  function pie(o) { // { parts, shaded, r, label }
    var r = o.r || 60, cx = r + 10, cy = r + 10, n = o.parts, b = '';
    for (var i = 0; i < n; i++) {
      var a1 = -Math.PI / 2 + i * 2 * Math.PI / n, a2 = a1 + 2 * Math.PI / n;
      var d = n === 1 ? '' : 'M' + cx + ',' + cy + ' L' + n2(cx + r * Math.cos(a1)) + ',' + n2(cy + r * Math.sin(a1)) + ' A' + r + ',' + r + ' 0 0 1 ' + n2(cx + r * Math.cos(a2)) + ',' + n2(cy + r * Math.sin(a2)) + ' Z';
      b += n === 1 ? '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + (o.shaded ? C.orange : '#fff') + '" stroke="' + C.ink + '" stroke-width="2"/>'
        : '<path d="' + d + '" fill="' + (i < o.shaded ? (o.color || C.orange) : '#fff') + '" stroke="' + C.ink + '" stroke-width="2"/>';
    }
    var H = 2 * r + 20 + (o.label ? 34 : 0);
    if (o.label) b += fracText(cx, 2 * r + 36, o.label, C.ink, 15);
    return wrap(2 * r + 20, H, b, 'Hình tròn chia ' + n + ' phần, tô ' + o.shaded + ' phần');
  }
  function fracBars(o) { // { bars: [{ parts, shaded, label }], width }
    var W = o.width || 420, h = 30, gap = 18, L = 70, b = '';
    o.bars.forEach(function (br, j) {
      var y = 10 + j * (h + gap), w = (W - L - 10) / br.parts;
      for (var i = 0; i < br.parts; i++) b += '<rect x="' + n2(L + i * w) + '" y="' + y + '" width="' + n2(w) + '" height="' + h + '" fill="' + (i < br.shaded ? (br.color || PALETTE[j % PALETTE.length]) : '#fff') + '" fill-opacity="' + (i < br.shaded ? 0.8 : 1) + '" stroke="' + C.ink + '" stroke-width="1.5"/>';
      if (br.label) b += fracText(L / 2 - 4, y + h / 2 - 2, br.label, C.ink, 13);
    });
    return wrap(W, 10 + o.bars.length * (h + gap), b, 'Băng giấy biểu diễn phân số');
  }

  /* ---------- Thước đo góc ---------- o: { deg, label } */
  function protractor(o) {
    var W = 380, H = 230, cx = 190, cy = 196, R = 150, b = '', d = o.deg;
    b += '<path d="M' + (cx - R) + ',' + cy + ' A' + R + ',' + R + ' 0 0 1 ' + (cx + R) + ',' + cy + ' Z" fill="' + C.yellowL + '" fill-opacity="0.7" stroke="' + C.muted + '" stroke-width="1.5"/>';
    for (var a = 0; a <= 180; a += 5) {
      var rad = a * Math.PI / 180, len = a % 10 === 0 ? 12 : 6, c = Math.cos(rad), s = Math.sin(rad);
      b += line(cx + R * c, cy - R * s, cx + (R - len) * c, cy - (R - len) * s, { color: C.muted, width: 1 });
      if (a % 30 === 0) b += text(cx + (R - 26) * c, cy - (R - 26) * s + 5, String(a), { size: 12, color: C.muted });
    }
    var rr = d * Math.PI / 180;
    b += line(cx, cy, cx + R + 12, cy, { color: C.blue, width: 2.5 }) + line(cx, cy, cx + (R + 12) * Math.cos(rr), cy - (R + 12) * Math.sin(rr), { color: C.blue, width: 2.5 });
    var ar = 40; b += '<path d="M' + (cx + ar) + ',' + cy + ' A' + ar + ',' + ar + ' 0 0 0 ' + n2(cx + ar * Math.cos(rr)) + ',' + n2(cy - ar * Math.sin(rr)) + '" fill="none" stroke="' + C.orange + '" stroke-width="2.5"/>';
    b += text(cx + 62 * Math.cos(rr / 2), cy - 62 * Math.sin(rr / 2) + 5, (o.label || d + '°'), { color: C.orange, bold: true });
    b += '<circle cx="' + cx + '" cy="' + cy + '" r="4" fill="' + C.ink + '"/>' + text(cx, cy + 22, o.vertex || 'O', { bold: true });
    if (o.names) { b += text(cx + R + 20, cy + 5, o.names[1], { bold: true, anchor: 'start' }) + text(cx + (R + 26) * Math.cos(rr), cy - (R + 26) * Math.sin(rr) + 5, o.names[0], { bold: true }); }
    return wrap(W, H, b, 'Thước đo góc chỉ ' + d + ' độ');
  }


  /* ---------- Các hình phẳng quen thuộc (Toán 6, chương IV–V) ----------
     shape(kind, o) với kind: 'tamgiacdeu' | 'hinhvuong' | 'lucgiacdeu' | 'hcn' | 'thoi' | 'binhhanh' | 'thangcan'
     o: { names: ['A','B',…] | false, ticks: true, angles: true (góc vuông / cung góc), diag: false (đường chéo nét đứt),
          height: false (đường cao nét đứt, nhãn 'h'), dims: [{ side: i, label: 'a' }], axes: [[x1,y1,x2,y2]], center: 'O',
          fill, extra: [ …phần tử draw… ] } */
  var SHAPES = {
    tamgiacdeu: function () { return { w: 240, h: 190, pts: regular(3, 120, 112, 80, -90), t: [1, 1, 1], fill: C.blueL }; },
    hinhvuong: function () { return { w: 220, h: 210, pts: [[50, 45], [170, 45], [170, 165], [50, 165]], t: [1, 1, 1, 1], fill: C.greenL, right: true }; },
    lucgiacdeu: function () { return { w: 240, h: 200, pts: [240, 300, 0, 60, 120, 180].map(function (a) { return [120 + 85 * Math.cos(a * Math.PI / 180), 100 + 85 * Math.sin(a * Math.PI / 180)]; }), t: [1, 1, 1, 1, 1, 1], fill: C.purpleL }; },
    hcn: function () { return { w: 260, h: 170, pts: [[30, 30], [230, 30], [230, 140], [30, 140]], t: [1, 2, 1, 2], fill: C.orangeL, right: true }; },
    thoi: function () { return { w: 240, h: 200, pts: [[120, 20], [215, 95], [120, 170], [25, 95]], t: [1, 1, 1, 1], fill: C.yellowL }; },
    binhhanh: function () { return { w: 270, h: 170, pts: [[70, 30], [240, 30], [200, 140], [30, 140]], t: [1, 2, 1, 2], fill: C.blueL, hFrom: 0 }; },
    thangcan: function () { return { w: 260, h: 170, pts: [[80, 30], [180, 30], [230, 140], [30, 140]], t: [0, 1, 0, 1], fill: C.greenL, hFrom: 0 }; }
  };
  function shapePts(kind) { return SHAPES[kind](); }
  function shape(kind, o) {
    o = o || {}; var d = SHAPES[kind](), P = d.pts, n = P.length, it = [];
    var cx = 0, cy = 0; P.forEach(function (q) { cx += q[0]; cy += q[1]; }); cx /= n; cy /= n;
    it.push({ poly: P, fill: o.fill || d.fill });
    if (o.height && d.hFrom != null) {
      var A = P[d.hFrom], foot = [A[0], P[2][1]];
      it.push({ seg: [A[0], A[1], foot[0], foot[1]], dash: true, color: C.purple, width: 1.8 }, { right: [foot[0], foot[1], A[0], A[1], P[2][0], P[2][1]], color: C.purple }, { text: [A[0] + 12, (A[1] + foot[1]) / 2 + 5, 'h'], color: C.purple, bold: true });
    }
    if (o.diag) {
      if (n === 4) it.push({ seg: [P[0][0], P[0][1], P[2][0], P[2][1]], dash: true, color: C.muted, width: 1.6 }, { seg: [P[1][0], P[1][1], P[3][0], P[3][1]], dash: true, color: C.muted, width: 1.6 });
      if (n === 6) for (var k = 0; k < 3; k++) it.push({ seg: [P[k][0], P[k][1], P[k + 3][0], P[k + 3][1]], dash: true, color: C.muted, width: 1.6 });
      if (kind === 'thoi' || kind === 'hinhvuong') it.push({ right: [cx, cy, P[0][0], P[0][1], P[1][0], P[1][1]], size: 9, color: C.muted });
    }
    if (o.ticks !== false) it = it.concat(ticks(P, d.t));
    if (o.angles !== false) {
      if (d.right) P.forEach(function (q, i) { var a = P[(i + n - 1) % n], b = P[(i + 1) % n]; it.push({ right: [q[0], q[1], a[0], a[1], b[0], b[1]] }); });
      if (kind === 'tamgiacdeu') P.forEach(function (q, i) { var a = P[(i + n - 1) % n], b = P[(i + 1) % n]; it.push({ arc: [q[0], q[1], a[0], a[1], b[0], b[1]], r: 18, label: o.angleLabel || '' }); });
    }
    (o.dims || []).forEach(function (dm) {
      var a = P[dm.side], b = P[(dm.side + 1) % n], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, u = unit(mx - cx, my - cy), dist = dm.dist || 18;
      it.push({ text: [mx + u[0] * dist, my + u[1] * dist + 5, dm.label], color: dm.color || C.blue, bold: true, size: 14 });
    });
    (o.axes || []).forEach(function (a) { it.push({ axis: a }); });
    if (o.center) it.push({ pt: [cx, cy, o.center, 12, -6], color: C.red });
    if (o.names !== false) it = it.concat(labels(P, o.names || ['A', 'B', 'C', 'D', 'E', 'F'].slice(0, n)));
    it = it.concat(o.extra || []);
    return draw({ w: d.w, h: d.h, items: it, aria: o.aria || 'Hình minh hoạ' });
  }


  /* ---------- Góc xOy ----------
     angle({ deg, names: ['x','O','y'], label, w, len, right (vẽ kí hiệu góc vuông khi deg = 90), point: { deg, dist, name } (điểm nằm trong góc), w, h }) */
  function angle(o) {
    var d = o.deg, n = o.names || ['x', 'O', 'y'], W = o.w || 340, L = o.len || Math.min(150, W / 2 - 20);
    var H = o.h || (d > 0 && d < 180 ? Math.round(L * Math.sin(Math.min(d, 90) * Math.PI / 180)) + 60 : 110);
    var ox = d >= 75 ? Math.round(W / 2) : Math.round(W * 0.18), oy = H - 30, rad = d * Math.PI / 180;
    var yx = ox + L * Math.cos(rad), yy = oy - L * Math.sin(rad);
    var it = [{ ray: [ox, oy, ox + L, oy], ext: 0 }, { ray: [ox, oy, yx, yy], ext: 0 }];
    if (d === 90 && o.right !== false) it.push({ right: [ox, oy, ox + L, oy, yx, yy], size: 16, color: C.orange });
    else it.push({ arc: [ox, oy, ox + L, oy, yx, yy - (d >= 180 ? 0.5 : 0)], r: d > 150 ? 26 : 34, label: o.label == null ? d + '°' : o.label });
    if (d === 90 && o.label !== '') it.push({ text: [ox + 34, oy - 26, o.label == null ? '90°' : o.label], color: C.orange, bold: true, size: 14, anchor: 'start' });
    if (o.point) { var pr = o.point.deg * Math.PI / 180, pd = o.point.dist || 90; it.push({ pt: [ox + pd * Math.cos(pr), oy - pd * Math.sin(pr), o.point.name || 'M', 12, -6], color: C.purple }); }
    it.push({ pt: [ox, oy, n[1], 0, 22] }, { text: [ox + L + 12, oy + 5, n[0]], bold: true, color: C.blue, anchor: 'start' }, { text: [yx + 12 * Math.cos(rad), yy - 12 * Math.sin(rad) + 5, n[2]], bold: true, color: C.blue });
    return draw({ w: W, h: H, items: it, aria: o.aria || 'Góc ' + n.join('') + ' bằng ' + d + ' độ' });
  }

  /* Ghép nhiều hình SVG thành một hàng (mỗi hình có chú thích). items: [{ svg, caption }] */
  function row(items) {
    return '<div class="fig-row">' + items.map(function (it) { return '<div class="fig-cell">' + it.svg + (it.caption ? '<div class="fig-cap">' + esc(it.caption) + '</div>' : '') + '</div>'; }).join('') + '</div>';
  }

  window.THCS = window.THCS || {};

  /* ---------- Sơ đồ chữ (dùng cho Ngữ văn): flow, mindmap, storyArc ---------- */
  function splitLines(t, max) { // ngắt dòng theo số kí tự tối đa
    var out = [], cur = '';
    String(t).split(/\s+/).forEach(function (w) {
      if (cur && (cur + ' ' + w).length > max) { out.push(cur); cur = w; } else cur = cur ? cur + ' ' + w : w;
    });
    if (cur) out.push(cur);
    return out;
  }
  function boxLines(it, w, size) { // it: chuỗi hoặc { title, text, items }
    var max = Math.max(6, Math.floor((w - 16) / (size * 0.56))), L = [];
    if (typeof it === 'string') splitLines(it, max).forEach(function (l) { L.push({ t: l }); });
    else {
      if (it.title) splitLines(it.title, max).forEach(function (l) { L.push({ t: l, bold: true }); });
      if (it.text) splitLines(it.text, max).forEach(function (l) { L.push({ t: l }); });
      (it.items || []).forEach(function (x) { splitLines('• ' + x, max).forEach(function (l, i) { L.push({ t: (i ? '   ' : '') + l, left: true }); }); });
    }
    return L;
  }
  function drawBox(x, y, w, h, L, o) {
    var s = o.size, lh = s * 1.3, b = '<rect x="' + n2(x) + '" y="' + n2(y) + '" width="' + n2(w) + '" height="' + n2(h) + '" rx="10" fill="' + (o.fill || C.blueL) + '" stroke="' + (o.stroke || C.blue) + '" stroke-width="2"/>';
    var y0 = y + h / 2 - (L.length - 1) * lh / 2 + s * 0.35;
    L.forEach(function (l, i) {
      b += l.left ? text(x + 10, y0 + i * lh, l.t, { size: s, anchor: 'start', color: C.ink })
                  : text(x + w / 2, y0 + i * lh, l.t, { size: s, bold: l.bold, color: l.bold ? (o.stroke || C.blue) : C.ink });
    });
    return b;
  }
  var FILLS = [[C.blueL, C.blue], [C.orangeL, C.orange], [C.greenL, C.green], [C.purpleL, C.purple], [C.yellowL, '#a16207'], ['#fce7f3', C.pink]];
  /* flow({ items: ['…' | {title, text}], w: 640, size: 16, vertical: false, label }) – chuỗi các bước nối bằng mũi tên */
  function flow(o) {
    var items = o.items, n = items.length, size = o.size || 16, W = o.w || 640, gap = 30, id = 'fl' + (++uid), b = arrowDef(id, C.muted);
    if (o.vertical) {
      var bw = W - 20, Ls = items.map(function (it) { return boxLines(it, bw, size); }), y = 8;
      Ls.forEach(function (L, i) {
        var h = L.length * size * 1.3 + 18, f = FILLS[i % FILLS.length];
        b += drawBox(10, y, bw, h, L, { size: size, fill: f[0], stroke: f[1] });
        y += h; if (i < n - 1) { b += line(W / 2, y + 2, W / 2, y + gap - 4, { color: C.muted, width: 2.5, marker: id }); y += gap; }
      });
      return wrap(W, y + 8, b, o.label || 'Sơ đồ các bước');
    }
    var bw2 = (W - 20 - (n - 1) * gap) / n, L2 = items.map(function (it) { return boxLines(it, bw2, size); });
    var hMax = Math.max.apply(null, L2.map(function (L) { return L.length; })) * size * 1.3 + 20;
    L2.forEach(function (L, i) {
      var x = 10 + i * (bw2 + gap), f = FILLS[i % FILLS.length];
      b += drawBox(x, 10, bw2, hMax, L, { size: size, fill: f[0], stroke: f[1] });
      if (i < n - 1) b += line(x + bw2 + 3, 10 + hMax / 2, x + bw2 + gap - 4, 10 + hMax / 2, { color: C.muted, width: 2.5, marker: id });
    });
    return wrap(W, hMax + 20, b, o.label || 'Sơ đồ các bước');
  }
  /* mindmap({ center: '…', branches: [{ title, items: [...] }], w: 680, size: 15, label }) – sơ đồ tư duy hai bên */
  function mindmap(o) {
    var W = o.w || 680, size = o.size || 15, br = o.branches, cw = 150, bw = (W - cw - 80) / 2, gapY = 14;
    var left = [], right = [];
    br.forEach(function (x, i) { (i % 2 ? right : left).push({ it: x, i: i }); });
    function layout(col) { var y = 10; col.forEach(function (c) { c.L = boxLines(c.it, bw, size); c.h = c.L.length * size * 1.3 + 16; c.y = y; y += c.h + gapY; }); return y - gapY + 10; }
    var H = Math.max(layout(left), layout(right), 120), cx = W / 2, cy = H / 2, b = '';
    function put(col, x) {
      var off = (H - (col.length ? col[col.length - 1].y + col[col.length - 1].h + 10 : 0)) / 2;
      col.forEach(function (c) {
        var f = FILLS[c.i % FILLS.length], y = c.y + off, ex = x < cx ? x + bw : x;
        b += '<path d="M' + n2(cx) + ',' + n2(cy) + ' C' + n2((cx + ex) / 2) + ',' + n2(cy) + ' ' + n2((cx + ex) / 2) + ',' + n2(y + c.h / 2) + ' ' + n2(ex) + ',' + n2(y + c.h / 2) + '" fill="none" stroke="' + f[1] + '" stroke-width="2.5"/>';
        b += drawBox(x, y, bw, c.h, c.L, { size: size, fill: f[0], stroke: f[1] });
      });
    }
    put(left, 10); put(right, W - 10 - bw);
    var CL = boxLines({ title: o.center }, cw, size + 1), ch = CL.length * (size + 1) * 1.3 + 22;
    b += drawBox(cx - cw / 2, cy - ch / 2, cw, ch, CL, { size: size + 1, fill: '#fff', stroke: C.ink });
    return wrap(W, H, b, o.label || 'Sơ đồ tư duy');
  }
  /* storyArc({ stages: ['Mở đầu', …], peak: 3, notes: ['…'], w: 680, label }) – “ngọn núi” cốt truyện */
  function storyArc(o) {
    var st = o.stages, n = st.length, W = o.w || 680, pk = o.peak == null ? Math.floor(n / 2) : o.peak, size = o.size || 15;
    var maxc0 = Math.min(15, Math.max(8, Math.floor((W - 160) / (n - 1) / (size * 0.56))));
    var pkLines = splitLines(st[pk], maxc0).length + (o.notes && o.notes[pk] ? splitLines(o.notes[pk], maxc0 + 2).length : 0);
    var top = 20 + pkLines * size * 1.25, base = top + 130, id = 'sa' + (++uid), b = arrowDef(id, C.orange), pts = [];
    for (var i = 0; i < n; i++) {
      var x = 80 + i * (W - 160) / (n - 1), y = i <= pk ? base - (base - top) * (pk ? i / pk : 1) : top + (base - top) * ((i - pk) / (n - 1 - pk)) * 0.75;
      pts.push([x, y]);
    }
    b += '<polyline points="' + pts.map(function (p) { return n2(p[0]) + ',' + n2(p[1]); }).join(' ') + '" fill="none" stroke="' + C.orange + '" stroke-width="3" stroke-linejoin="round"/>';
    var maxc = Math.min(15, Math.max(8, Math.floor((W - 160) / (n - 1) / (size * 0.56)))), H = base + 20, lh = size * 1.25;
    pts.forEach(function (p, i) {
      b += '<circle cx="' + n2(p[0]) + '" cy="' + n2(p[1]) + '" r="7" fill="' + (i === pk ? C.red : C.blue) + '" stroke="#fff" stroke-width="2"/>';
      var ls = splitLines(st[i], maxc).map(function (l) { return { t: l, bold: true }; });
      if (o.notes && o.notes[i]) splitLines(o.notes[i], maxc + 2).forEach(function (l) { ls.push({ t: l }); });
      var above = i === pk, y0 = above ? p[1] - 16 - (ls.length - 1) * lh : p[1] + 26;
      ls.forEach(function (l, k) {
        var yy = y0 + k * lh;
        b += text(p[0], yy, l.t, { size: l.bold ? size : size - 2, bold: l.bold, color: l.bold ? (i === pk ? C.red : C.ink) : C.muted });
        H = Math.max(H, yy + 10);
      });
    });
    return wrap(W, H + 6, b, o.label || 'Sơ đồ cốt truyện');
  }

  window.THCS.svg = { C: C, numberLine: numberLine, draw: draw, regular: regular, labels: labels, ticks: ticks, bar: bar, picto: picto, pie: pie, fracBars: fracBars, protractor: protractor, row: row, shape: shape, shapePts: shapePts, angle: angle, flow: flow, mindmap: mindmap, storyArc: storyArc, splitLines: splitLines };
})();
