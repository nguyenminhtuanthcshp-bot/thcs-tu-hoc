/* Toán 8 – Bài 35. Định lí Pythagore và ứng dụng. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-35', {
    objectives: [
      'Giải thích được định lí Pythagore và định lí Pythagore đảo.',
      'Tính được độ dài một cạnh của tam giác vuông khi biết hai cạnh còn lại.',
      'Nhận biết một tam giác có phải tam giác vuông hay không khi biết ba cạnh.',
      'Vận dụng định lí Pythagore giải quyết bài toán thực tế (thang dựa tường, đường chéo màn hình, khoảng cách).'
    ],
    intro: 'Một chiếc thang dài 5 m dựa vào tường, chân thang cách tường 3 m. Đỉnh thang ở độ cao bao nhiêu? Câu trả lời đến từ một trong những định lí nổi tiếng nhất của toán học.',
    steps: [
      { title: 'Định lí Pythagore', html: `<div class="box key">Trong một tam giác vuông, bình phương độ dài cạnh huyền bằng tổng bình phương độ dài hai cạnh góc vuông.</div>
        <p>ΔABC vuông tại A: <b>BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup></b>.</p>`,
        svg: S.geo({ w: 340, h: 220, P: { A: [50, 190], B: [50, 40], C: [250, 190] }, seg: ['AB', 'AC', { s: 'BC', color: C.red, width: 3 }], right: ['BAC'], text: [[30, 118, '3', C.blue], [150, 210, '4', C.blue], [160, 105, '5', C.red]] }), caption: '3² + 4² = 9 + 16 = 25 = 5².' },
      { title: 'Vì sao đúng? (ý tưởng chứng minh)', html: `<p>Kẻ đường cao AH của ΔABC vuông tại A. Hai tam giác HBA và ABC đồng dạng nên AB<sup>2</sup> = BH · BC; tương tự AC<sup>2</sup> = CH · BC. Cộng lại: AB<sup>2</sup> + AC<sup>2</sup> = (BH + CH) · BC = BC<sup>2</sup>.</p>` },
      { title: 'Định lí Pythagore đảo', html: `<div class="box key">Nếu một tam giác có bình phương một cạnh bằng tổng bình phương hai cạnh kia thì tam giác đó là tam giác vuông (góc vuông đối diện cạnh lớn nhất).</div>
        <p>Tam giác 6, 8, 10: 6<sup>2</sup> + 8<sup>2</sup> = 100 = 10<sup>2</sup> ⇒ vuông. Tam giác 4, 5, 6: 16 + 25 = 41 ≠ 36 ⇒ không vuông.</p>` },
      { title: 'Ứng dụng thực tế', html: `<p>Thang 5 m, chân cách tường 3 m: độ cao h = √(5<sup>2</sup> − 3<sup>2</sup>) = √16 = 4 m.</p>`,
        svg: S.geo({ w: 300, h: 220, P: { T: [230, 40], G: [230, 190], L: [110, 190] }, seg: [{ s: 'TG', color: C.gray, width: 5 }, 'GL', { s: 'LT', color: C.orange, width: 4 }], right: ['TGL'], text: [[118, 105, 'thang 5 m', C.orange], [170, 210, '3 m', C.blue], [242, 118, 'h', C.red]] }), caption: 'Thang dựa tường tạo thành tam giác vuông.' },
      { title: 'Bộ ba Pythagore thường gặp', html: `<p>(3; 4; 5), (5; 12; 13), (8; 15; 17), (7; 24; 25) và các bội của chúng như (6; 8; 10), (9; 12; 15).</p>` }
    ],
    summary: 'Vuông tại A ⇔ BC² = AB² + AC². Cạnh huyền = √(tổng bình phương hai cạnh góc vuông); cạnh góc vuông = √(huyền² − cạnh kia²).',
    examples: [
      { title: 'Tính cạnh huyền', problem: 'Tam giác vuông có hai cạnh góc vuông 5 cm và 12 cm. Tính cạnh huyền.', solution: '√(25 + 144) = √169 = 13 cm.' },
      { title: 'Tính cạnh góc vuông', problem: 'Tam giác vuông có cạnh huyền 17 cm, một cạnh góc vuông 8 cm. Tính cạnh còn lại.', solution: '√(289 − 64) = √225 = 15 cm.' },
      { title: 'Nhận biết tam giác vuông', problem: 'Tam giác có ba cạnh 9 cm, 12 cm, 15 cm có vuông không?', solution: '9² + 12² = 81 + 144 = 225 = 15² ⇒ vuông (góc đối diện cạnh 15 cm).' }
    ],
    exercises: [
      { question: 'Màn hình ti vi hình chữ nhật có chiều rộng 36 inch và chiều cao 27 inch. Đường chéo dài bao nhiêu inch?', hints: ['Đường chéo là cạnh huyền.', '36² + 27² = 1296 + 729 = 2025.'], solution: '√2025 = 45 inch.' },
      { question: 'Hình vuông cạnh 1 dm. Đường chéo dài bao nhiêu (làm tròn đến hàng phần trăm)?', hints: ['d² = 1 + 1 = 2.', '√2 ≈ 1,414.'], solution: 'd ≈ 1,41 dm.' },
      { question: 'Tam giác có ba cạnh 7, 8, 11 có vuông không?', hints: ['Cạnh lớn nhất là 11.', '49 + 64 = 113; 121.'], solution: '113 ≠ 121 nên tam giác không vuông.' }
    ],
    quiz: [
      { type: 'short', calc: 'sqrt(5*5 + 12*12)', q: 'Hai cạnh góc vuông 5 cm và 12 cm. Cạnh huyền dài bao nhiêu?', unit: 'cm', answer: '13', explain: '√169.' },
      { type: 'short', calc: 'sqrt(17*17 - 8*8)', q: 'Cạnh huyền 17 cm, một cạnh góc vuông 8 cm. Cạnh góc vuông còn lại?', unit: 'cm', answer: '15', explain: '√225.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác có ba cạnh 4 cm, 5 cm, 6 cm là tam giác vuông.', answer: false, explain: '16 + 25 = 41 ≠ 36.' },
      { type: 'mcq', q: 'Bộ ba nào là độ dài ba cạnh của một tam giác vuông?', options: ['2; 3; 4', '5; 12; 13', '6; 7; 9', '4; 6; 8'], answer: 1, explain: '25 + 144 = 169.' },
      { type: 'short', calc: 'sqrt(5*5 - 3*3)', q: 'Thang dài 5 m dựa tường, chân thang cách tường 3 m. Đỉnh thang cao bao nhiêu mét?', unit: 'm', answer: '4', explain: '√(25 − 9).' },
      { type: 'short', calc: 'sqrt(36*36 + 27*27)', q: 'Màn hình rộng 36 inch, cao 27 inch. Đường chéo dài bao nhiêu inch?', unit: 'inch', answer: '45', explain: '√2025.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong tam giác vuông, cạnh huyền là cạnh dài nhất.', answer: true, explain: 'BC² lớn hơn từng AB², AC².' },
      { type: 'mcq', q: 'ΔMNP có MN² = MP² + NP². Góc vuông là:', options: ['∠M', '∠N', '∠P', 'Không có'], answer: 2, explain: 'Góc đối diện cạnh MN là ∠P.' }
    ]
  });
})();
