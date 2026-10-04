/* Toán 7 – Bài 32. Quan hệ giữa đường vuông góc và đường xiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var P = { A: [190, 40], H: [190, 170], B: [300, 170], M: [70, 170], d: [370, 170] };
THCS.registerLesson('toan-7/bai-32', {
  objectives: [
    'Nhận biết đường vuông góc, đường xiên kẻ từ một điểm đến một đường thẳng.',
    'Nắm định lí: đường vuông góc ngắn hơn mọi đường xiên; hiểu khoảng cách từ một điểm đến một đường thẳng.',
    'Vận dụng để so sánh độ dài và giải quyết tình huống thực tế (đường đi ngắn nhất).'
  ],
  intro: 'Từ nhà ra con đường thẳng, đi theo hướng nào thì ngắn nhất? Câu trả lời: đi vuông góc với con đường!',
  steps: [
    { title: 'Đường vuông góc và đường xiên', html: `<p>Cho điểm A không thuộc đường thẳng d. Kẻ AH ⊥ d tại H. Lấy B ∈ d, B ≠ H.</p>
      <ul><li><b>AH</b>: đường vuông góc kẻ từ A đến d; <b>H</b>: chân đường vuông góc (hình chiếu của A trên d).</li><li><b>AB</b>: một đường xiên kẻ từ A đến d.</li></ul>`,
      svg: S.geo({ w: 400, h: 200, P: P, line: [{ s: 'M-d', ext: 20 }], seg: [{ s: 'AH', color: C.red, width: 3 }, { s: 'AB', color: C.blue }, { s: 'AM', color: C.blue }], right: ['AHB'], off: { d: [8, -10], H: [0, 22], B: [0, 22], M: [0, 22] } }),
      caption: 'AH (đỏ) là đường vuông góc; AB, AM (xanh) là các đường xiên.' },
    { title: 'Định lí', html: `<p>Trong các đường xiên và đường vuông góc kẻ từ một điểm nằm ngoài một đường thẳng đến đường thẳng đó, <b>đường vuông góc là đường ngắn nhất</b>.</p>
      <p><i>Giải thích:</i> tam giác AHB vuông tại H nên góc H = 90° là góc lớn nhất; theo Bài 31, cạnh đối diện AB lớn nhất, tức AB &gt; AH.</p>` },
    { title: 'Khoảng cách từ một điểm đến một đường thẳng', html: `<p>Độ dài đoạn AH (đường vuông góc) gọi là <b>khoảng cách từ điểm A đến đường thẳng d</b>. Nếu A ∈ d thì khoảng cách bằng 0.</p>
      <p>Trong tam giác, đường cao AH chính là khoảng cách từ A đến đường thẳng BC. Với diện tích S và cạnh BC: AH = 2S : BC.</p>` },
    { title: 'Ứng dụng thực tế', html: `<p>Bạn An đứng ở A cách bờ sông thẳng d. Để ra bờ nhanh nhất, An đi theo đường vuông góc AH. Trong các vận động viên nhảy xa, khoảng cách được đo vuông góc với ván giậm nhảy – chính là độ dài ngắn nhất.</p>` }
  ],
  summary: 'Từ A ∉ d: có đúng một đường vuông góc AH và vô số đường xiên. Đường vuông góc ngắn nhất: AH &lt; AB với mọi B ∈ d, B ≠ H. Độ dài AH là khoảng cách từ A đến d.',
  examples: [
    { title: 'So sánh', problem: 'Tam giác ABC vuông tại A. So sánh BA và BC.', solution: 'BA là đường vuông góc từ B đến AC, BC là đường xiên ⇒ BA &lt; BC.' },
    { title: 'Khoảng cách', problem: 'Tam giác ABC có diện tích 24 cm², BC = 8 cm. Tính khoảng cách từ A đến BC.', solution: 'AH = 2 · 24 : 8 = 6 cm.' },
    { title: 'Đúng hay sai', problem: 'A cách d là 5 cm. Có đường xiên nào từ A đến d dài 4 cm không?', solution: 'Không, vì mọi đường xiên đều dài hơn 5 cm.' }
  ],
  exercises: [
    { question: 'Tam giác MNP vuông tại M. Đoạn nào là khoảng cách từ N đến đường thẳng MP?', hints: ['NM ⊥ MP.', 'Đường vuông góc.'], solution: 'NM.' },
    { question: 'Tam giác ABC có diện tích 30 cm², BC = 12 cm. Tính khoảng cách từ A đến BC.', hints: ['S = BC · AH : 2.', 'AH = 60 : 12.'], solution: '5 cm.' },
    { question: 'Cho A cách d 3 cm; B, C ∈ d. Có thể có AB = 2,5 cm không? AC = 3 cm thì C ở đâu?', hints: ['Đường xiên dài hơn 3 cm.', 'AC = 3 cm thì AC là đường vuông góc.'], solution: 'Không thể AB = 2,5 cm; AC = 3 cm thì C trùng H.' }
  ],
  quiz: [
    { type: 'short', calc: '2 * 24 / 8', q: 'Tam giác ABC có diện tích 24 cm², BC = 8 cm. Khoảng cách từ A đến BC bằng bao nhiêu cm?', unit: 'cm', answer: '6', explain: '48 : 8.' },
    { type: 'short', calc: '2 * 30 / 12', q: 'Tam giác ABC diện tích 30 cm², BC = 12 cm. Khoảng cách từ A đến BC (cm)?', unit: 'cm', answer: '5', explain: '60 : 12.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ một điểm ngoài đường thẳng kẻ được đúng một đường vuông góc đến đường thẳng đó.', answer: true, explain: 'Duy nhất.' },
    { type: 'mcq', q: 'A cách d là 5 cm, B ∈ d. Độ dài AB có thể là:', options: ['3 cm', '4 cm', '4,9 cm', '6 cm'], answer: 3, explain: 'AB ≥ 5 cm.' },
    { type: 'mcq', q: 'Tam giác ABC vuông tại A. Khẳng định đúng:', options: ['BA &gt; BC', 'BA &lt; BC', 'BA = BC', 'AC &gt; BC'], answer: 1, explain: 'Đường vuông góc ngắn hơn đường xiên.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu A thuộc d thì khoảng cách từ A đến d bằng 0.', answer: true, explain: 'Theo quy ước.' },
    { type: 'short', calc: '1', q: 'Từ điểm A không thuộc d kẻ được bao nhiêu đường vuông góc đến d?', answer: '1', explain: 'Đúng một.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường xiên có thể ngắn hơn đường vuông góc kẻ từ cùng một điểm.', answer: false, explain: 'Đường vuông góc ngắn nhất.' }
  ]
});
})();
