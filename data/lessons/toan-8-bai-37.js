/* Toán 8 – Bài 37. Hình đồng dạng. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  var O = [30, 190];
  function sc(p, k) { return [O[0] + (p[0] - O[0]) * k, O[1] + (p[1] - O[1]) * k]; }
  var A = [100, 160], B = [140, 160], Cc = [140, 120], D = [100, 120];
  THCS.registerLesson('toan-8/bai-37', {
    objectives: [
      'Nhận biết được hình đồng dạng phối cảnh (hình vị tự) và hình đồng dạng qua các hình ảnh cụ thể.',
      'Nhận biết được vẻ đẹp trong tự nhiên, nghệ thuật, kiến trúc, công nghệ… biểu hiện qua hình đồng dạng.',
      'Xác định được tỉ số đồng dạng của hai hình đồng dạng phối cảnh.'
    ],
    intro: 'Phóng to một bức ảnh trên điện thoại, bản đồ với nhiều tỉ lệ khác nhau, búp bê Nga lồng vào nhau… đều là những ví dụ về hình đồng dạng.',
    steps: [
      { title: 'Hình đồng dạng phối cảnh', html: `<p>Cho điểm O và số k > 0. Với mỗi điểm M của hình H, lấy M' trên tia OM sao cho OM' = k · OM. Tập hợp các điểm M' tạo thành hình H' gọi là <b>hình đồng dạng phối cảnh</b> (hình vị tự) của H, O là <b>tâm phối cảnh</b>, k là <b>tỉ số</b>.</p>`,
        svg: S.geo({ w: 380, h: 200, P: { O: O, A: A, B: B, C: Cc, D: D, "A'": sc(A, 2), "B'": sc(B, 2), "C'": sc(Cc, 2), "D'": sc(D, 2) }, seg: ['AB', 'BC', 'CD', 'DA', "A'B'", "B'C'", "C'D'", "D'A'"], dash: ["OB'", "OC'", "OD'", "OA'"], fill: [['ABCD', C.blueL], ["A'B'C'D'", C.orangeL]], off: { A: [-2, 18], D: [-12, -4], "A'": [4, 18] } }), caption: 'Hình vuông A\'B\'C\'D\' là hình phối cảnh của ABCD, tâm O, tỉ số 2.' },
      { title: 'Tính chất', html: `<ul><li>Hình phối cảnh của đoạn thẳng là đoạn thẳng dài gấp k lần.</li><li>Góc được giữ nguyên số đo.</li><li>Hình phối cảnh của tam giác là tam giác đồng dạng với nó theo tỉ số k.</li></ul>` },
      { title: 'Hình đồng dạng', html: `<div class="box key">Hình H được gọi là đồng dạng với hình H' nếu có một hình đồng dạng phối cảnh của H bằng H'.</div><p>Hai hình tròn bất kì, hai hình vuông bất kì luôn đồng dạng. Hai hình chữ nhật chỉ đồng dạng khi tỉ số hai cạnh của chúng bằng nhau.</p>` },
      { title: 'Hình đồng dạng quanh ta', html: `<ul><li>Bản đồ và thực địa (tỉ lệ 1 : 100 000).</li><li>Mô hình kiến trúc, đồ chơi thu nhỏ.</li><li>Lá dương xỉ, vỏ ốc: phần nhỏ giống toàn thể.</li><li>Ảnh chụp phóng to, thu nhỏ giữ đúng tỉ lệ.</li></ul>` }
    ],
    summary: 'Hình phối cảnh tâm O tỉ số k: OM\' = k · OM, M\' nằm trên tia OM. Độ dài nhân k, góc giữ nguyên. Hình H đồng dạng với H\' nếu một hình phối cảnh của H bằng H\'.',
    examples: [
      { title: 'Tính độ dài', problem: 'Tam giác A\'B\'C\' là hình phối cảnh của ΔABC tỉ số 3, AB = 2 cm. Tính A\'B\'.', solution: 'A\'B\' = 3 · 2 = 6 cm.' },
      { title: 'Hình chữ nhật', problem: 'Hình chữ nhật 4 × 6 có đồng dạng với hình chữ nhật 6 × 9 không?', solution: '{{6|4}} = {{9|6}} = {{3|2}} ⇒ đồng dạng.' },
      { title: 'Bản đồ', problem: 'Trên bản đồ tỉ lệ 1 : 50 000, quãng đường dài 8 cm. Quãng đường thực dài bao nhiêu kilômét?', solution: '8 · 50 000 = 400 000 cm = 4 km.' }
    ],
    exercises: [
      { question: 'Ảnh 10 cm × 15 cm được phóng to để chiều rộng thành 20 cm. Chiều dài mới bằng bao nhiêu?', hints: ['Tỉ số k = 2.', '15 · 2.'], solution: '30 cm.' },
      { question: 'Hai hình vuông cạnh 3 cm và 5 cm có đồng dạng không? Tỉ số diện tích?', hints: ['Mọi hình vuông đều đồng dạng.', 'Tỉ số diện tích = k².'], solution: 'Đồng dạng, k = {{5|3}}, tỉ số diện tích {{25|9}}.' },
      { question: 'Hình chữ nhật 2 × 5 có đồng dạng với hình chữ nhật 4 × 8 không?', hints: ['{{4|2}} = 2.', '{{8|5}} = 1,6.'], solution: 'Không, vì hai tỉ số khác nhau.' }
    ],
    quiz: [
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai hình tròn bất kì luôn đồng dạng.', answer: true, explain: 'Phóng to/thu nhỏ theo tỉ số bán kính.' },
      { type: 'short', calc: '3 * 2', q: 'A\'B\'C\' là hình phối cảnh của ABC tỉ số 3, AB = 2 cm. Tính A\'B\'.', unit: 'cm', answer: '6', explain: '3 · 2.' },
      { type: 'short', calc: '8 * 50000 / 100000', q: 'Bản đồ tỉ lệ 1 : 50 000, đoạn đường 8 cm. Độ dài thực là bao nhiêu kilômét?', unit: 'km', answer: '4', explain: '400 000 cm = 4 km.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai hình chữ nhật bất kì luôn đồng dạng.', answer: false, explain: 'Cần tỉ số hai cạnh bằng nhau.' },
      { type: 'mcq', q: 'Hình chữ nhật nào đồng dạng với hình chữ nhật 4 × 6?', options: ['5 × 8', '6 × 9', '4 × 8', '3 × 5'], answer: 1, explain: '{{6|4}} = {{9|6}}.' },
      { type: 'short', calc: '15 * 20 / 10', q: 'Ảnh 10 cm × 15 cm phóng to để chiều rộng thành 20 cm. Chiều dài mới?', unit: 'cm', answer: '30', explain: 'k = 2.' },
      { type: 'mcq', q: 'Qua phép đồng dạng phối cảnh, đại lượng nào được giữ nguyên?', options: ['Độ dài đoạn thẳng', 'Số đo góc', 'Diện tích', 'Chu vi'], answer: 1, explain: 'Góc giữ nguyên.' },
      { type: 'short', requireSimplest: true, calc: '25 / 9', q: 'Hai hình vuông cạnh 3 cm và 5 cm. Tỉ số diện tích hình lớn so với hình nhỏ? (Dạng a/b tối giản.)', answer: ['25/9'], answerText: '25/9', explain: '({{5|3}})² = {{25|9}}.' }
    ]
  });
})();
