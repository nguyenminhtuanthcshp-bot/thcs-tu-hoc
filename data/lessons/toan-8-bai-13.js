/* Toán 8 – Bài 13. Hình chữ nhật. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [60, 50], B = [300, 50], Cc = [300, 190], D = [60, 190], O = G.mid(A, Cc);
  var Bt = [60, 190], At = [60, 40], Ct = [300, 190], Mt = G.mid(At, Ct);
  THCS.registerLesson('toan-8/bai-13', {
    objectives: [
      'Nhận biết được hình chữ nhật.',
      'Giải thích được tính chất về hai đường chéo của hình chữ nhật.',
      'Nhận biết được các dấu hiệu để một tứ giác là hình chữ nhật.',
      'Vận dụng tính chất đường trung tuyến ứng với cạnh huyền của tam giác vuông.'
    ],
    intro: 'Trang sách, màn hình, sân bóng… hình chữ nhật có mặt khắp nơi. Ở lớp 8, ta nhìn hình chữ nhật như một hình bình hành đặc biệt để khai thác thêm các tính chất.',
    steps: [
      { title: 'Định nghĩa', html: `<p><b>Hình chữ nhật</b> là tứ giác có bốn góc vuông.</p><p>Hình chữ nhật vừa là hình bình hành, vừa là hình thang cân, nên có đầy đủ tính chất của hai hình đó.</p>` },
      { title: 'Tính chất đường chéo', html: `<div class="box key">Trong hình chữ nhật, hai đường chéo <b>bằng nhau</b> và <b>cắt nhau tại trung điểm</b> của mỗi đường.</div>
        <p>Do đó OA = OB = OC = OD: giao điểm O cách đều bốn đỉnh.</p>`,
        svg: S.geo({ w: 360, h: 230, P: { A: A, B: B, C: Cc, D: D, O: O }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'AC', color: C.red }, { s: 'BD', color: C.red }], right: ['DAB', 'ABC', 'BCD', 'CDA'], ticks: [['AO', 1, C.red], ['OC', 1, C.red], ['BO', 1, C.red], ['OD', 1, C.red]], off: { O: [0, -12] } }), caption: 'OA = OB = OC = OD.' },
      { title: 'Dấu hiệu nhận biết', html: `<ol><li>Tứ giác có ba góc vuông.</li><li>Hình thang cân có một góc vuông.</li><li>Hình bình hành có một góc vuông.</li><li>Hình bình hành có hai đường chéo bằng nhau.</li></ol>` },
      { title: 'Áp dụng vào tam giác vuông', html: `<div class="box key">Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền <b>bằng nửa cạnh huyền</b>.</div>
        <p>Ngược lại: tam giác có một đường trung tuyến bằng nửa cạnh tương ứng thì là tam giác vuông.</p>`,
        svg: S.geo({ w: 360, h: 220, P: { B: Bt, A: At, C: Ct, M: Mt }, seg: ['AB', 'BC', 'CA', { s: 'BM', color: C.blue, width: 2.5 }], right: ['ABC'], ticks: [['AM', 1], ['MC', 1], ['BM', 1, C.blue]], off: { M: [8, -12] } }), caption: 'ΔABC vuông tại B, M là trung điểm AC: BM = AM = MC = AC : 2.' },
      { title: 'Vì sao?', html: `<p>Lấy D đối xứng với B qua M. ABCD có hai đường chéo cắt nhau tại trung điểm mỗi đường nên là hình bình hành, lại có ∠B = 90° nên là hình chữ nhật. Do đó BD = AC, suy ra BM = {{1|2}}BD = {{1|2}}AC.</p>` }
    ],
    summary: 'Hình chữ nhật: tứ giác có 4 góc vuông; hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường. Trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.',
    examples: [
      { title: 'Tính đường chéo', problem: 'Hình chữ nhật ABCD có AC = 10 cm, hai đường chéo cắt nhau tại O. Tính OB.', solution: 'BD = AC = 10 cm và O là trung điểm BD, nên OB = 5 cm.' },
      { title: 'Nhận biết', problem: 'Hình bình hành ABCD có ∠A = 90°. Chứng minh ABCD là hình chữ nhật.', solution: 'Trong hình bình hành, góc đối bằng nhau: ∠C = ∠A = 90°; góc kề bù nhau: ∠B = ∠D = 90°. Tứ giác có bốn góc vuông là hình chữ nhật.' },
      { title: 'Trung tuyến ứng với cạnh huyền', problem: 'Tam giác ABC vuông tại A có BC = 13 cm. Tính độ dài trung tuyến AM.', solution: 'AM = BC : 2 = 6,5 cm.' }
    ],
    exercises: [
      { question: 'Hình chữ nhật có hai đường chéo cắt nhau tại O và OA = 4,5 cm. Tính độ dài mỗi đường chéo.', hints: ['O là trung điểm AC.', 'AC = 2 · OA; BD = AC.'], solution: 'AC = BD = 9 cm.' },
      { question: 'Tam giác ABC có trung tuyến AM = 5 cm, BC = 10 cm. Tính ∠BAC.', hints: ['AM = BC : 2.', 'Tam giác có trung tuyến bằng nửa cạnh tương ứng là tam giác vuông.'], solution: '∠BAC = 90°.' },
      { question: 'Cho tam giác ABC vuông tại A, M là trung điểm BC. Kẻ MD ⊥ AB, ME ⊥ AC. Tứ giác ADME là hình gì?', hints: ['Tứ giác ADME có ∠A = ∠D = ∠E = 90°.', 'Tứ giác có ba góc vuông.'], solution: 'ADME là hình chữ nhật.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Hình chữ nhật là tứ giác có:', options: ['Hai góc vuông', 'Bốn góc vuông', 'Hai cạnh bằng nhau', 'Hai đường chéo vuông góc'], answer: 1, explain: 'Định nghĩa.' },
      { type: 'short', calc: '10 / 2', q: 'Hình chữ nhật ABCD có AC = 10 cm, O là giao hai đường chéo. OB bằng bao nhiêu cm?', unit: 'cm', answer: '5', explain: 'BD = AC = 10, OB = 5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.', answer: true, explain: 'Dấu hiệu nhận biết.' },
      { type: 'short', calc: '13 / 2', q: 'Tam giác vuông có cạnh huyền 13 cm. Trung tuyến ứng với cạnh huyền dài bao nhiêu cm? (Dùng dấu phẩy hoặc chấm cho số thập phân.)', unit: 'cm', answer: '6.5', answerText: '6,5', explain: '13 : 2 = 6,5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thang cân có một góc vuông là hình chữ nhật.', answer: true, explain: 'Dấu hiệu nhận biết.' },
      { type: 'mcq', q: 'Tam giác ABC có trung tuyến AM bằng nửa BC. Khi đó:', options: ['∠A = 90°', '∠B = 90°', '∠C = 90°', 'ΔABC đều'], answer: 0, explain: 'Góc vuông tại đỉnh đối diện cạnh BC.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tứ giác có hai đường chéo bằng nhau là hình chữ nhật.', answer: false, explain: 'Hình thang cân cũng có hai đường chéo bằng nhau.' },
      { type: 'short', calc: '2 * 4.5', q: 'Hình chữ nhật có OA = 4,5 cm (O là giao hai đường chéo). Đường chéo BD dài bao nhiêu cm?', unit: 'cm', answer: '9', explain: 'BD = AC = 2 · 4,5.' }
    ]
  });
})();
