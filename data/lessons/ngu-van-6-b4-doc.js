/* Ngữ văn 6 – Bài 4. Đọc hiểu: Ca dao và thơ lục bát. Văn bản đọc là ca dao (văn học dân gian, thuộc phạm vi công cộng). */
(function () {
var S = THCS.svg, C = S.C;
function lucBat() { // sơ đồ luật vần, luật thanh của thơ lục bát
  var rows = [['Gió', 'đưa', 'cành', 'trúc', 'la', 'đà'], ['Tiếng', 'chuông', 'Trấn', 'Vũ', 'canh', 'gà', 'Thọ', 'Xương'], ['Mịt', 'mù', 'khói', 'toả', 'ngàn', 'sương']];
  var tone = [{ 2: 'B', 4: 'T', 6: 'B' }, { 2: 'B', 4: 'T', 6: 'B', 8: 'B' }, { 2: 'B', 4: 'T', 6: 'B' }];
  var cw = 62, ch = 38, gx = 6, x0 = 20, ys = [30, 116, 202], b = '', id = 'lb' + Math.floor(Math.random() * 1e6);
  b += '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + C.orange + '"/></marker></defs>';
  function cx(i) { return x0 + i * (cw + gx); }
  rows.forEach(function (r, k) {
    r.forEach(function (w, i) {
      var t = tone[k][i + 1], rhyme = (k === 0 && i === 5) || (k === 1 && (i === 5 || i === 7)) || (k === 2 && i === 5);
      b += '<rect x="' + cx(i) + '" y="' + ys[k] + '" width="' + cw + '" height="' + ch + '" rx="7" fill="' + (rhyme ? C.orangeL : t ? C.blueL : '#fff') + '" stroke="' + (rhyme ? C.orange : C.muted) + '" stroke-width="' + (rhyme ? 2.2 : 1.2) + '"/>';
      b += '<text x="' + (cx(i) + cw / 2) + '" y="' + (ys[k] + 25) + '" text-anchor="middle" font-size="16" fill="' + C.ink + '"' + (rhyme ? ' font-weight="700"' : '') + '>' + w + '</text>';
      if (t) b += '<text x="' + (cx(i) + cw / 2) + '" y="' + (ys[k] + ch + 17) + '" text-anchor="middle" font-size="13" font-weight="700" fill="' + (t === 'B' ? C.blue : C.red) + '">' + t + '</text>';
    });
    b += '<text x="' + (cx(8) + 4) + '" y="' + (ys[k] + 25) + '" font-size="14" fill="' + C.muted + '">' + (k === 1 ? 'dòng bát (8)' : 'dòng lục (6)') + '</text>';
  });
  function curve(i1, k1, i2, k2) { var x1 = cx(i1) + cw / 2, y1 = ys[k1] + ch + 20, x2 = cx(i2) + cw / 2, y2 = ys[k2] - 2; return '<path d="M' + (x1 + 16) + ',' + (y1 - 4) + ' C' + (x1 + 40) + ',' + (y1 + 10) + ' ' + (x2 + 40) + ',' + (y2 - 12) + ' ' + (x2 + 18) + ',' + y2 + '" fill="none" stroke="' + C.orange + '" stroke-width="2.2" marker-end="url(#' + id + ')"/>'; }
  b += curve(5, 0, 5, 1) + curve(7, 1, 5, 2);
  return '<svg class="fig-svg" viewBox="0 0 680 262" width="680" role="img" aria-label="Sơ đồ luật thơ lục bát" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">' + b + '</svg>';
}
THCS.registerLesson('ngu-van-6/b4-doc', {
  objectives: [
    'Nhận biết được ca dao và đặc điểm của thể thơ lục bát (số tiếng, vần, nhịp, thanh).',
    'Hiểu được nội dung, tình cảm được thể hiện trong các bài ca dao về quê hương, đất nước.',
    'Nhận biết và nêu tác dụng của một số biện pháp tu từ trong ca dao.',
    'Bồi đắp tình yêu quê hương, niềm tự hào về vẻ đẹp đất nước.'
  ],
  intro: 'Từ lời ru của bà, của mẹ, những câu ca dao đã theo ta lớn lên. Chúng là tiếng hát tâm tình của người dân Việt, và phần lớn được viết bằng thể thơ dân tộc: <b>lục bát</b>.',
  text: {
    title: 'Chùm ca dao về quê hương, đất nước',
    html: `<div class="poem"><b>(1)</b>
Đường vô xứ Nghệ quanh quanh
Non xanh nước biếc như tranh hoạ đồ.

<b>(2)</b>
Gió đưa cành trúc la đà
Tiếng chuông Trấn Vũ, canh gà Thọ Xương
Mịt mù khói toả ngàn sương
Nhịp chày Yên Thái, mặt gương Tây Hồ.

<b>(3)</b>
Anh đi anh nhớ quê nhà
Nhớ canh rau muống, nhớ cà dầm tương
Nhớ ai dãi nắng dầm sương
Nhớ ai tát nước bên đường hôm nao.</div>`,
    source: 'Ca dao – văn học dân gian Việt Nam (thuộc phạm vi công cộng). Chùm ca dao do nhóm biên soạn tuyển chọn.'
  },
  steps: [
    { title: 'Ca dao là gì?', html: `<p><b>Ca dao</b> là những bài thơ dân gian, thường ngắn, do nhân dân sáng tác và lưu truyền bằng miệng, diễn tả đời sống tâm hồn, tình cảm của người lao động: tình yêu quê hương, gia đình, lứa đôi, lao động…</p><p>Phần lớn ca dao được viết theo thể <b>lục bát</b>, ngôn ngữ giản dị, giàu hình ảnh.</p>` },
    { title: 'Luật thơ lục bát', html: `<ul><li><b>Số tiếng</b>: từng cặp dòng 6 tiếng (lục) và 8 tiếng (bát).</li><li><b>Vần</b>: tiếng thứ 6 dòng lục vần với tiếng thứ 6 dòng bát; tiếng thứ 8 dòng bát vần với tiếng thứ 6 dòng lục tiếp theo. Vần là vần bằng.</li><li><b>Thanh</b>: tiếng 2 – bằng (B), tiếng 4 – trắc (T), tiếng 6 – bằng; dòng bát tiếng 8 cũng là bằng (tiếng 6 và 8 thường khác thanh huyền/ngang).</li><li><b>Nhịp</b>: thường nhịp chẵn 2/2/2, 2/2/2/2 (có khi 3/3, 4/4).</li></ul>`,
      svg: lucBat(), caption: 'Ô cam: các tiếng hiệp vần (đà – gà, Xương – sương). B: thanh bằng; T: thanh trắc.' },
    { title: 'Bài (1) và (2): vẻ đẹp của cảnh', html: `<p><b>Bài (1)</b>: con đường “quanh quanh” và cảnh “non xanh nước biếc” được so sánh “như tranh hoạ đồ” – ca ngợi xứ Nghệ đẹp như tranh vẽ.</p><p><b>Bài (2)</b>: bức tranh Thăng Long xưa được gợi bằng <b>âm thanh</b> (tiếng chuông Trấn Vũ, tiếng gà Thọ Xương, nhịp chày Yên Thái) và <b>hình ảnh</b> (cành trúc la đà, khói sương mịt mù, mặt hồ Tây như gương). Cảnh vừa thơ mộng vừa có hơi thở cuộc sống lao động.</p>` },
    { title: 'Bài (3): nỗi nhớ quê nhà', html: `<p>Người đi xa nhớ những điều <b>bình dị</b>: canh rau muống, cà dầm tương – rồi nhớ <b>con người</b> “dãi nắng dầm sương”, “tát nước bên đường”. Điệp ngữ “nhớ” lặp lại năm lần, nỗi nhớ tăng dần, da diết. Cách nói “ai” mơ hồ mà tình tứ, kín đáo.</p>` },
    { title: 'Cách đọc hiểu một bài ca dao', html: `<ol><li>Đọc diễn cảm theo nhịp chẵn.</li><li>Xác định chủ đề (cảnh gì? tình cảm gì?).</li><li>Tìm hình ảnh, từ ngữ, biện pháp tu từ nổi bật (so sánh, điệp ngữ, liệt kê…).</li><li>Nêu tình cảm, thông điệp; liên hệ bản thân.</li></ol>` }
  ],
  summary: 'Ca dao là thơ dân gian, phần lớn viết theo thể lục bát: cặp dòng 6 – 8 tiếng; vần ở tiếng 6 – 6 và 8 – 6; tiếng 2, 4, 6 theo luật B – T – B; nhịp chẵn. Chùm ca dao ca ngợi vẻ đẹp quê hương và thể hiện nỗi nhớ quê da diết.',
  examples: [
    { title: 'Kiểm tra luật vần', problem: 'Chỉ ra các tiếng hiệp vần trong bài ca dao (3).', solution: 'nhà – cà (tiếng 6 dòng lục – tiếng 6 dòng bát); tương – sương (tiếng 8 dòng bát – tiếng 6 dòng lục sau); sương – đường (tiếng 6 – tiếng 6).' },
    { title: 'Biện pháp tu từ', problem: 'Bài (1) dùng biện pháp tu từ gì? Nêu tác dụng.', solution: '<b>So sánh</b>: “Non xanh nước biếc như tranh hoạ đồ” – làm nổi bật vẻ đẹp tươi tắn, hài hoà của thiên nhiên xứ Nghệ, thể hiện niềm tự hào.' },
    { title: 'Ngắt nhịp', problem: 'Ngắt nhịp dòng thơ “Tiếng chuông Trấn Vũ, canh gà Thọ Xương”.', solution: 'Nhịp 2/2/2/2: “Tiếng chuông / Trấn Vũ, / canh gà / Thọ Xương”.' }
  ],
  exercises: [
    { question: 'Đếm số tiếng và kiểm tra luật thanh (tiếng 2, 4, 6) của dòng “Mịt mù khói toả ngàn sương”.', hints: ['Dòng lục có 6 tiếng.', 'Thanh bằng: không dấu và dấu huyền; còn lại là trắc.'], solution: '6 tiếng. Tiếng 2 “mù” (huyền – B), tiếng 4 “toả” (hỏi – T), tiếng 6 “sương” (ngang – B) ⇒ đúng luật B – T – B.' },
    { question: 'Bài ca dao (2) gợi tả Thăng Long xưa bằng những âm thanh nào?', hints: ['Tìm các danh từ chỉ âm thanh.', 'Chú ý các địa danh đi kèm.'], solution: 'Tiếng chuông (đền Trấn Vũ), tiếng gà gáy (Thọ Xương), nhịp chày (làng Yên Thái giã giấy).' },
    { question: 'Viết 2–3 câu nêu cảm nhận của em về nỗi nhớ trong bài ca dao (3).', hints: ['Người đi xa nhớ những gì?', 'Điệp ngữ “nhớ” có tác dụng gì?'], solution: 'Gợi ý: Nỗi nhớ bắt đầu từ những món ăn quê giản dị rồi đến những con người lam lũ, thân thương. Điệp ngữ “nhớ” khiến nỗi nhớ như dâng lên từng đợt, da diết. Em hiểu quê hương luôn là nơi neo giữ trái tim mỗi người.' }
  ],
  quiz: [
    { type: 'short', q: 'Dòng lục trong thơ lục bát có bao nhiêu tiếng?', answer: ['6', 'sáu'], answerText: '6 tiếng', explain: 'Lục = sáu.' },
    { type: 'mcq', q: 'Theo luật lục bát, tiếng thứ 6 dòng lục vần với:', options: ['Tiếng thứ 6 dòng bát', 'Tiếng thứ 2 dòng bát', 'Tiếng thứ 8 dòng bát', 'Tiếng thứ 1 dòng bát'], answer: 0, explain: 'Vần 6 – 6.' },
    { type: 'mcq', q: 'Trong bài (2), cặp tiếng nào hiệp vần 6 – 6?', options: ['đà – gà', 'trúc – chuông', 'đưa – Vũ', 'Xương – Hồ'], answer: 0, explain: '“đà” (tiếng 6 dòng lục) – “gà” (tiếng 6 dòng bát).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ca dao là sáng tác của một nhà thơ nổi tiếng thời trung đại.', answer: false, explain: 'Ca dao là sáng tác dân gian, của tập thể nhân dân.' },
    { type: 'mcq', q: 'Biện pháp tu từ nổi bật trong bài (3) là:', options: ['Điệp ngữ', 'Hoán dụ', 'Nói quá', 'Nhân hoá'], answer: 0, explain: 'Từ “nhớ” được lặp lại nhiều lần.' },
    { type: 'mcq', q: 'Theo luật thanh, tiếng thứ 4 của dòng lục thường mang thanh:', options: ['Bằng', 'Trắc', 'Huyền', 'Ngang'], answer: 1, explain: 'Luật B (2) – T (4) – B (6).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài (1) so sánh cảnh xứ Nghệ “như tranh hoạ đồ”.', answer: true, explain: 'Có từ so sánh “như”.' },
    { type: 'mcq', q: 'Nhịp phổ biến của thơ lục bát là:', options: ['Nhịp chẵn 2/2/2', 'Nhịp 3/4', 'Nhịp 1/5', 'Không có nhịp'], answer: 0, explain: 'Lục bát thường ngắt nhịp chẵn.' }
  ]
});
})();
