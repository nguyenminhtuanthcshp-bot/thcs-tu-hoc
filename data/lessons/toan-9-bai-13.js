/* Toán 9 – Bài 13. Mở đầu về đường tròn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var O = [150, 125], R = 85;
  THCS.registerLesson('toan-9/bai-13', {
    objectives: [
      'Nhận biết được đường tròn, tâm, bán kính và vị trí tương đối của một điểm với đường tròn.',
      'Nhận biết được tâm đối xứng và trục đối xứng của đường tròn.',
      'Vận dụng tính chất đối xứng và khoảng cách để giải bài toán về đường tròn.'
    ],
    intro: 'Bánh xe, mặt đồng hồ, miệng cốc… đều có dạng đường tròn. Điều gì làm cho mọi điểm trên đường tròn “đều như nhau”? Đó là chúng cách tâm một khoảng không đổi.',
    steps: [
      { title: 'Đường tròn', html: `<div class="box key">Đường tròn tâm O bán kính R (R &gt; 0), kí hiệu (O; R), là hình gồm tất cả các điểm cách O một khoảng bằng R.</div>`,
        svg: S.geo({ w: 300, h: 250, P: { O: O, A: G.polar(O, 30, R), M: G.polar(O, 150, 50), N: G.polar(O, 250, 125) }, circles: [{ c: 'O', r: R, color: C.blue }], seg: [{ s: 'OA', color: C.red }], dash: ['OM', 'ON'], text: [[200, 100, 'R', C.red]], off: { N: [14, 10], O: [14, 16] } }), caption: 'A nằm trên, M nằm trong, N nằm ngoài đường tròn (O; R).' },
      { title: 'Vị trí của một điểm', html: `<table class="tbl"><tr><th>Vị trí điểm M</th><th>Điều kiện</th></tr><tr><td>M nằm trên (O; R)</td><td>OM = R</td></tr><tr><td>M nằm trong (O; R)</td><td>OM &lt; R</td></tr><tr><td>M nằm ngoài (O; R)</td><td>OM &gt; R</td></tr></table>` },
      { title: 'Tâm đối xứng', html: `<p>Đường tròn có <b>tâm đối xứng</b> là tâm O: nếu A thuộc đường tròn thì điểm A' đối xứng với A qua O cũng thuộc đường tròn (AA' là đường kính).</p>` },
      { title: 'Trục đối xứng', html: `<p>Mỗi đường thẳng đi qua tâm là một <b>trục đối xứng</b> của đường tròn, nên đường tròn có vô số trục đối xứng.</p>`,
        svg: S.geo({ w: 300, h: 250, P: { O: O, A: G.polar(O, 60, R), B: G.polar(O, 120, R), d1: G.polar(O, 90, R + 22), d2: G.polar(O, 270, R + 22) }, circles: [{ c: 'O', r: R, color: C.blue }], seg: ['AB'], dash: ['d1-d2'], hide: ['d1', 'd2'], text: [[150, 20, 'd', C.red]], off: { O: [14, 5] } }), caption: 'A và B đối xứng qua đường thẳng d đi qua O.' },
      { title: 'Đường tròn qua ba điểm', html: `<p>Qua ba điểm không thẳng hàng vẽ được đúng một đường tròn; tâm của nó là giao điểm các đường trung trực của tam giác tạo bởi ba điểm đó.</p>` }
    ],
    summary: '(O; R) gồm các điểm cách O một khoảng R. So sánh OM với R để biết M nằm trong, trên hay ngoài. Tâm O là tâm đối xứng; mọi đường thẳng qua O là trục đối xứng.',
    examples: [
      { title: 'Vị trí điểm', problem: 'Cho (O; 5 cm) và OA = 3 cm, OB = 5 cm, OC = 7 cm. Xác định vị trí các điểm A, B, C.', solution: 'A nằm trong, B nằm trên, C nằm ngoài đường tròn.' },
      { title: 'Toạ độ', problem: 'Trên mặt phẳng toạ độ, đường tròn tâm O(0; 0) bán kính 5. Điểm M(3; 4) nằm ở đâu?', solution: 'OM = √(9 + 16) = 5 = R ⇒ M nằm trên đường tròn.' },
      { title: 'Tam giác vuông', problem: 'Tam giác ABC vuông tại A có BC = 10 cm. Chứng minh A, B, C cùng nằm trên một đường tròn và tính bán kính.', solution: 'Trung điểm O của BC cách đều A, B, C (trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền) ⇒ đường tròn tâm O, R = 5 cm.' }
    ],
    exercises: [
      { question: 'Hình chữ nhật ABCD có AB = 6 cm, BC = 8 cm. Chứng minh bốn đỉnh cùng nằm trên một đường tròn, tính bán kính.', hints: ['Giao điểm O của hai đường chéo cách đều bốn đỉnh.', 'AC = 10 cm.'], solution: 'R = 5 cm.' },
      { question: 'Cho (O; 4 cm), điểm M với OM = 6 cm. Tìm khoảng cách lớn nhất và nhỏ nhất từ M đến một điểm của đường tròn.', hints: ['Xét đường thẳng OM cắt đường tròn tại hai điểm.', 'Nhỏ nhất: OM − R; lớn nhất: OM + R.'], solution: 'Nhỏ nhất 2 cm, lớn nhất 10 cm.' },
      { question: 'Điểm N(−6; 8) có nằm trong đường tròn tâm O(0; 0) bán kính 9 không?', hints: ['ON = √(36 + 64).', 'So với 9.'], solution: 'ON = 10 &gt; 9: N nằm ngoài.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Cho (O; 5 cm), OA = 3 cm. Điểm A:', options: ['nằm trên đường tròn', 'nằm trong đường tròn', 'nằm ngoài đường tròn', 'trùng tâm'], answer: 1, explain: '3 &lt; 5.' },
      { type: 'short', calc: 'Math.sqrt(3 * 3 + 4 * 4)', q: 'Khoảng cách từ O(0; 0) tới M(3; 4) bằng bao nhiêu?', answer: '5', explain: '√25.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường tròn có đúng một trục đối xứng.', answer: false, explain: 'Có vô số trục đối xứng.' },
      { type: 'short', calc: 'Math.sqrt(6 * 6 + 8 * 8) / 2', q: 'Hình chữ nhật 6 cm × 8 cm. Bán kính đường tròn đi qua bốn đỉnh (cm)?', unit: 'cm', answer: '5', explain: 'Nửa đường chéo.' },
      { type: 'short', calc: '6 - 4', q: 'Cho (O; 4 cm), OM = 6 cm. Khoảng cách nhỏ nhất từ M tới đường tròn (cm)?', unit: 'cm', answer: '2', explain: 'OM − R.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tâm của đường tròn là tâm đối xứng của nó.', answer: true, explain: 'A thuộc đường tròn ⇒ A\' đối xứng qua O cũng thuộc.' },
      { type: 'short', calc: '10 / 2', q: 'Tam giác vuông có cạnh huyền 10 cm. Bán kính đường tròn đi qua ba đỉnh (cm)?', unit: 'cm', answer: '5', explain: 'Nửa cạnh huyền.' },
      { type: 'mcq', q: 'Qua ba điểm không thẳng hàng vẽ được bao nhiêu đường tròn?', options: ['0', '1', '2', 'vô số'], answer: 1, explain: 'Tâm là giao ba đường trung trực.' }
    ]
  });
})();
