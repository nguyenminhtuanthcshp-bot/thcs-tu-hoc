/* Toán 9 – Bài 17. Vị trí tương đối của hai đường tròn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  function two(d, R, r, name, inner) { // hai đường tròn tâm O (bán kính R) và O' (bán kính r), OO' = d
    var O = [inner ? 110 : 80, 95], O2 = [O[0] + d, 95];
    return S.geo({ w: 230, h: 215, P: { O: O, "O'": O2 }, circles: [{ c: 'O', r: R, color: C.blue }, { c: "O'", r: r, color: C.orange }], dash: ["O-O'"], text: [[115, 208, name, C.ink, true, 13]], off: inner ? { O: [-16, 5], "O'": [8, 18] } : { O: [-4, 18], "O'": [6, 18] } });
  }
  THCS.registerLesson('toan-9/bai-17', {
    objectives: [
      'Mô tả được ba vị trí tương đối của hai đường tròn (cắt nhau, tiếp xúc, không giao nhau).',
      'Liên hệ được vị trí tương đối với đoạn nối tâm OO\' và hai bán kính R, r.',
      'Vận dụng để nhận biết vị trí tương đối và giải bài toán thực tế (bánh răng, vòng tròn Olympic, logo).'
    ],
    intro: 'Hai bánh răng ăn khớp, các vòng tròn trên lá cờ Olympic, gợn sóng lan trên mặt nước… cho ta thấy nhiều cách hai đường tròn có thể nằm cạnh nhau.',
    steps: [
      { title: 'Hai đường tròn cắt nhau', html: `<p>Hai đường tròn có <b>hai điểm chung</b>. Khi đó R − r &lt; OO' &lt; R + r.</p><p>Đường nối tâm là đường trung trực của dây chung.</p>`,
        svg: two(95, 60, 45, "R − r < OO' < R + r"), caption: 'Hai đường tròn cắt nhau.' },
      { title: 'Hai đường tròn tiếp xúc', html: `<p>Hai đường tròn có <b>đúng một điểm chung</b> (tiếp điểm), tiếp điểm nằm trên đường nối tâm.</p><ul><li>Tiếp xúc ngoài: OO' = R + r.</li><li>Tiếp xúc trong: OO' = R − r (R &gt; r).</li></ul>`,
        svg: [two(105, 60, 45, "Tiếp xúc ngoài: OO' = R + r"), two(30, 70, 40, "Tiếp xúc trong: OO' = R − r", true)], caption: 'Hai trường hợp tiếp xúc.' },
      { title: 'Hai đường tròn không giao nhau', html: `<p>Hai đường tròn <b>không có điểm chung</b>:</p><ul><li>Ở ngoài nhau: OO' &gt; R + r.</li><li>Đựng nhau: OO' &lt; R − r. Đặc biệt OO' = 0: hai đường tròn đồng tâm.</li></ul>`,
        svg: [two(125, 55, 40, "Ngoài nhau: OO' > R + r"), two(18, 72, 35, "Đựng nhau: OO' < R − r", true)], caption: 'Hai trường hợp không giao nhau.' },
      { title: 'Bảng tóm tắt', html: `<table class="tbl"><tr><th>Vị trí</th><th>Số điểm chung</th><th>Hệ thức (R ≥ r)</th></tr><tr><td>Cắt nhau</td><td>2</td><td>R − r &lt; OO' &lt; R + r</td></tr><tr><td>Tiếp xúc ngoài</td><td>1</td><td>OO' = R + r</td></tr><tr><td>Tiếp xúc trong</td><td>1</td><td>OO' = R − r &gt; 0</td></tr><tr><td>Ngoài nhau</td><td>0</td><td>OO' &gt; R + r</td></tr><tr><td>Đựng nhau</td><td>0</td><td>OO' &lt; R − r</td></tr></table>` }
    ],
    summary: 'So sánh OO\' với R + r và R − r: cắt nhau khi nằm giữa; tiếp xúc ngoài/trong khi bằng R + r / R − r; ngoài nhau khi lớn hơn R + r; đựng nhau khi nhỏ hơn R − r.',
    examples: [
      { title: 'Nhận biết', problem: 'Cho (O; 5 cm), (O\'; 3 cm), OO\' = 7 cm. Xác định vị trí tương đối.', solution: 'R − r = 2 &lt; 7 &lt; 8 = R + r ⇒ cắt nhau.' },
      { title: 'Tiếp xúc', problem: 'Hai bánh răng ăn khớp có bán kính 12 cm và 8 cm, tiếp xúc ngoài. Tính khoảng cách hai tâm.', solution: 'OO\' = 12 + 8 = 20 cm.' },
      { title: 'Dây chung', problem: 'Hai đường tròn (O; 5) và (O\'; 5) cắt nhau tại A, B với OO\' = 8. Tính AB.', solution: 'OO\' là trung trực của AB, cắt AB tại trung điểm H, OH = 4. AH = √(25 − 16) = 3 ⇒ AB = 6.' }
    ],
    exercises: [
      { question: 'Cho (O; 6 cm) và (O\'; 2 cm) tiếp xúc trong. Tính OO\'.', hints: ['Tiếp xúc trong: OO\' = R − r.', '6 − 2.'], solution: '4 cm.' },
      { question: 'Cho (O; 4 cm), (O\'; 3 cm), OO\' = 9 cm. Hai đường tròn có điểm chung không?', hints: ['R + r = 7.', 'So sánh 9 và 7.'], solution: 'Không: 9 &gt; 7, hai đường tròn ở ngoài nhau.' },
      { question: 'Hai đường tròn cùng bán kính 10 cm cắt nhau tại A, B, OO\' = 16 cm. Tính AB.', hints: ['OH = 8.', 'AH = √(100 − 64).'], solution: 'AB = 12 cm.' }
    ],
    quiz: [
      { type: 'mcq', q: '(O; 5 cm), (O\'; 3 cm), OO\' = 7 cm. Hai đường tròn:', options: ['cắt nhau', 'tiếp xúc ngoài', 'ở ngoài nhau', 'đựng nhau'], answer: 0, explain: '2 &lt; 7 &lt; 8.' },
      { type: 'short', calc: '12 + 8', q: 'Hai bánh răng bán kính 12 cm và 8 cm tiếp xúc ngoài. Khoảng cách hai tâm (cm)?', unit: 'cm', answer: '20', explain: 'R + r.' },
      { type: 'short', calc: '6 - 2', q: '(O; 6 cm) và (O\'; 2 cm) tiếp xúc trong. OO\' = ? (cm)', unit: 'cm', answer: '4', explain: 'R − r.' },
      { type: 'short', calc: '2 * Math.sqrt(10 * 10 - 8 * 8)', q: 'Hai đường tròn bán kính 10 cm cắt nhau tại A, B, OO\' = 16 cm. AB = ? (cm)', unit: 'cm', answer: '12', explain: '2√(100 − 64).' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường tròn tiếp xúc thì tiếp điểm nằm trên đường nối tâm.', answer: true, explain: 'Tính chất tiếp xúc.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: (O; 4 cm) và (O\'; 3 cm) với OO\' = 9 cm cắt nhau.', answer: false, explain: '9 &gt; 7: ngoài nhau.' },
      { type: 'short', calc: '2 * Math.sqrt(5 * 5 - 4 * 4)', q: '(O; 5) và (O\'; 5) cắt nhau tại A, B, OO\' = 8. Độ dài dây chung AB?', answer: '6', explain: '2 · 3.' },
      { type: 'mcq', q: 'Hai đường tròn đồng tâm có vị trí tương đối là:', options: ['cắt nhau', 'tiếp xúc trong', 'đựng nhau', 'ngoài nhau'], answer: 2, explain: 'OO\' = 0 &lt; R − r.' }
    ]
  });
})();
