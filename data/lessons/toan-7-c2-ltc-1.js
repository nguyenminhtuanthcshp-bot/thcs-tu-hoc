/* Toán 7 – Chương II. Luyện tập chung (sau Bài 7). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-7/c2-ltc-1', {
  objectives: [
    'Phân biệt số hữu tỉ và số vô tỉ qua dạng thập phân; chuyển đổi phân số ↔ thập phân.',
    'Tính căn bậc hai số học, giá trị tuyệt đối và so sánh các số thực.',
    'Làm tròn số và ước lượng kết quả phép tính với số thực.'
  ],
  intro: 'Luyện tập tổng hợp chương II. Mỗi con số em gặp hãy tự hỏi: nó là hữu tỉ hay vô tỉ? nằm ở đâu trên trục số?',
  steps: [
    { title: 'Phân loại số thực', html: `<table class="tbl"><tr><th>Dạng thập phân</th><th>Loại số</th><th>Ví dụ</th></tr><tr><td>Hữu hạn</td><td>Hữu tỉ</td><td>{{3|8}} = 0,375</td></tr><tr><td>Vô hạn tuần hoàn</td><td>Hữu tỉ</td><td>{{2|11}} = 0,(18)</td></tr><tr><td>Vô hạn không tuần hoàn</td><td>Vô tỉ</td><td>√3 = 1,7320508…</td></tr></table>` },
    { title: 'Căn bậc hai và giá trị tuyệt đối', html: `<p>√a chỉ có nghĩa khi a ≥ 0 và luôn ≥ 0. |a| luôn ≥ 0, |a| = |−a|.</p><p>Phương trình |x| = a (a &gt; 0) có hai nghiệm x = a, x = −a; |x| = 0 ⇔ x = 0; |x| = số âm thì vô nghiệm.</p>` },
    { title: 'So sánh trên trục số', html: `<p>Đặt các số lên trục số giúp so sánh nhanh:</p>`,
      svg: S.numberLine({ min: -3, max: 3, div: 2, width: 560, marks: [{ v: -Math.sqrt(5), label: '−√5', color: S.C.purple }, { v: -0.5, label: '−0,5', color: S.C.blue }, { v: 2 / 3, label: '0,(6)', color: S.C.green }, { v: Math.sqrt(3), label: '√3', color: S.C.orange }, { v: 2.5, label: '2,5', color: S.C.pink }] }),
      caption: '−√5 &lt; −0,5 &lt; 0,(6) &lt; √3 &lt; 2,5.' },
    { title: 'Làm tròn và ước lượng', html: `<p>Làm tròn đến hàng nào thì nhìn chữ số ngay sau hàng đó. Ước lượng trước khi tính giúp phát hiện kết quả vô lí: √20 + √30 ≈ 4,5 + 5,5 = 10.</p>
      <div class="box note">Làm tròn với độ chính xác d: ví dụ “độ chính xác 0,05” nghĩa là làm tròn đến hàng phần mười.</div>` }
  ],
  summary: 'Hữu hạn/tuần hoàn → hữu tỉ; không tuần hoàn → vô tỉ. √a ≥ 0 với a ≥ 0; |a| ≥ 0. So sánh bằng thập phân hoặc trục số; ước lượng trước, làm tròn sau.',
  examples: [
    { title: 'Viết phân số thành thập phân', problem: 'Viết {{13|6}} dưới dạng số thập phân và làm tròn đến hàng phần trăm.', solution: '13 : 6 = 2,1666… = 2,1(6) ≈ 2,17.' },
    { title: 'Tính', problem: 'Tính: √{{25|36}} − |−{{1|3}}| + (−√2)<sup>2</sup>.', solution: '{{5|6}} − {{1|3}} + 2 = {{5|6}} − {{2|6}} + 2 = {{1|2}} + 2 = {{5|2}}.' },
    { title: 'Tìm x', problem: 'Tìm x, biết: 2|x| − 1 = 5.', solution: '2|x| = 6 ⇒ |x| = 3 ⇒ x = 3 hoặc x = −3.' }
  ],
  exercises: [
    { question: 'Trong các số sau, số nào là số vô tỉ: 0,(12); √16; √15; −3,5; π?', hints: ['√16 = 4 là số nguyên.', 'Số vô tỉ có dạng thập phân vô hạn không tuần hoàn.'], solution: 'Số vô tỉ: √15 và π.' },
    { question: 'So sánh 2√2 và 3.', hints: ['2√2 = √8 (vì (2√2)<sup>2</sup> = 8).', '3 = √9.'], solution: '√8 &lt; √9 nên 2√2 &lt; 3.' },
    { question: 'Một sân hình vuông có diện tích 50 m². Tính cạnh sân (làm tròn đến hàng phần mười).', hints: ['Cạnh = √50.', '√50 = 7,0710…'], solution: 'Cạnh ≈ 7,1 m.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số {{2|11}} viết dưới dạng thập phân là:', options: ['0,(18)', '0,1(8)', '0,18', '0,(181)'], answer: 0, explain: '2 : 11 = 0,181818… = 0,(18).' },
    { type: 'short', calc: 'Math.sqrt(25/36) - Math.abs(-1/3) + 2', q: 'Tính: √{{25|36}} − |−{{1|3}}| + (−√2)<sup>2</sup> (dạng a/b hoặc số thập phân).', answer: ['5/2', '2.5'], answerText: '5/2 (2,5)', explain: '{{5|6}} − {{1|3}} + 2 = {{5|2}}.' },
    { type: 'short', calc: '(5 + 1) / 2', q: 'Tìm số x dương, biết 2|x| − 1 = 5.', answer: '3', explain: '|x| = 3; x dương nên x = 3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 2√2 &gt; 3.', answer: false, explain: '(2√2)<sup>2</sup> = 8 &lt; 9 = 3<sup>2</sup> nên 2√2 &lt; 3.' },
    { type: 'short', calc: 'round(13 / 6, 2)', q: 'Làm tròn {{13|6}} đến hàng phần trăm.', answer: '2.17', answerText: '2,17', explain: '2,1666… ≈ 2,17.' },
    { type: 'short', calc: 'round(Math.sqrt(50), 1)', q: 'Sân vuông diện tích 50 m². Cạnh sân (làm tròn đến hàng phần mười) là bao nhiêu mét?', unit: 'm', answer: '7.1', answerText: '7,1', explain: '√50 ≈ 7,07 ≈ 7,1.' },
    { type: 'mcq', q: 'Phương trình |x| = −2 có:', options: ['1 nghiệm', '2 nghiệm', 'vô số nghiệm', 'không có nghiệm'], answer: 3, explain: 'Giá trị tuyệt đối luôn không âm nên không có x nào thoả mãn.' },
    { type: 'short', calc: 'round(Math.sqrt(20) + Math.sqrt(30), 0)', q: 'Ước lượng √20 + √30 rồi làm tròn đến hàng đơn vị.', answer: '10', explain: '√20 ≈ 4,47; √30 ≈ 5,48; tổng ≈ 9,95 ≈ 10.' }
  ]
});
})();
