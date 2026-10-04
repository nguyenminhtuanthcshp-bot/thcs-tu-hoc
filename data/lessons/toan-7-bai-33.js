/* Toán 7 – Bài 33. Quan hệ giữa ba cạnh của một tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-33', {
  objectives: [
    'Nắm bất đẳng thức tam giác: mỗi cạnh nhỏ hơn tổng và lớn hơn hiệu hai cạnh còn lại.',
    'Kiểm tra ba đoạn thẳng cho trước có phải ba cạnh của một tam giác không.',
    'Tìm độ dài (hoặc khoảng giá trị) của cạnh thứ ba khi biết hai cạnh.'
  ],
  intro: 'Có ba que tính dài 3 cm, 4 cm và 8 cm. Em có ghép được một tam giác không? Thử là biết – nhưng toán học cho câu trả lời ngay!',
  steps: [
    { title: 'Bất đẳng thức tam giác', html: `<p>Trong một tam giác, <b>tổng độ dài hai cạnh bất kì luôn lớn hơn độ dài cạnh còn lại</b>.</p>
      <p>Tam giác ABC: AB + AC &gt; BC; AB + BC &gt; AC; AC + BC &gt; AB.</p>
      <p><i>Lí do:</i> đi thẳng từ B đến C luôn ngắn hơn đi vòng qua A.</p>`,
      svg: S.geo({ w: 380, h: 210, P: { A: [150, 40], B: [60, 180], C: [320, 180] }, seg: [{ s: 'AB', color: C.orange }, { s: 'AC', color: C.orange }, { s: 'BC', color: C.blue, width: 3 }], text: [[92, 104, 'c', C.orange], [248, 104, 'b', C.orange], [190, 200, 'a', C.blue]] }),
      caption: 'Đường thẳng BC (a) ngắn hơn đường gấp khúc BAC (c + b).' },
    { title: 'Hệ quả: lớn hơn hiệu', html: `<p>Từ bất đẳng thức tam giác suy ra: mỗi cạnh <b>lớn hơn hiệu</b> hai cạnh còn lại. Gộp lại:</p>
      <p style="text-align:center"><b>|b − c| &lt; a &lt; b + c</b></p>` },
    { title: 'Ba đoạn nào ghép được tam giác?', html: `<p>Chỉ cần kiểm tra: <b>cạnh lớn nhất &lt; tổng hai cạnh còn lại</b>.</p>
      <ul><li>3, 4, 5: 5 &lt; 3 + 4 ✓ – là tam giác.</li><li>3, 4, 8: 8 &gt; 3 + 4 ✗ – không ghép được (hình dưới).</li><li>2, 3, 5: 5 = 2 + 3 ✗ – ba điểm thẳng hàng.</li></ul>`,
      svg: S.draw({ w: 440, h: 235, items: [{ circle: [80, 120, 75], color: C.muted, width: 1 }, { circle: [320, 120, 100], color: C.muted, width: 1 }, { seg: [80, 120, 320, 120], width: 3, color: C.blue }, { seg: [80, 120, 137, 72], color: C.orange, width: 3 }, { seg: [320, 120, 234, 69], color: C.green, width: 3 }, { pt: [80, 120] }, { pt: [320, 120] }, { text: [200, 142, '8'], bold: true, color: C.blue }, { text: [98, 86, '3'], bold: true, color: C.orange }, { text: [290, 84, '4'], bold: true, color: C.green }] }),
      caption: 'Hai que 3 và 4 không thể chạm nhau: 3 + 4 &lt; 8.' },
    { title: 'Tìm cạnh thứ ba', html: `<p>Tam giác có hai cạnh 2 cm và 7 cm, cạnh thứ ba x: 7 − 2 &lt; x &lt; 7 + 2, tức 5 &lt; x &lt; 9. Nếu x là số nguyên thì x ∈ {6; 7; 8}.</p>
      <p>Tam giác cân có hai cạnh 3 cm và 7 cm: cạnh bên không thể là 3 (vì 3 + 3 &lt; 7) nên cạnh bên là 7 cm; chu vi 7 + 7 + 3 = 17 cm.</p>` }
  ],
  summary: 'Bất đẳng thức tam giác: |b − c| &lt; a &lt; b + c. Ba đoạn là ba cạnh tam giác ⇔ đoạn lớn nhất nhỏ hơn tổng hai đoạn kia.',
  examples: [
    { title: 'Kiểm tra', problem: 'Bộ ba nào là ba cạnh tam giác: (4; 5; 10), (5; 6; 7), (3; 3; 6)?', solution: 'Chỉ (5; 6; 7): 7 &lt; 11.' },
    { title: 'Cạnh nguyên', problem: 'Tam giác có hai cạnh 1 cm và 5 cm, cạnh thứ ba là số nguyên (cm). Tìm cạnh đó.', solution: '4 &lt; x &lt; 6 ⇒ x = 5.' },
    { title: 'Tam giác cân', problem: 'Tam giác cân có hai cạnh 4 cm và 9 cm. Tính chu vi.', solution: 'Cạnh bên 9 (vì 4 + 4 &lt; 9): 9 + 9 + 4 = 22 cm.' }
  ],
  exercises: [
    { question: 'Tam giác có hai cạnh 3 cm và 8 cm; cạnh thứ ba là số nguyên. Có mấy giá trị?', hints: ['5 &lt; x &lt; 11.', '6, 7, 8, 9, 10.'], solution: '5 giá trị.' },
    { question: 'Ba điểm A, B, C với AB = 4, BC = 6, AC = 10. Ba điểm có tạo thành tam giác không?', hints: ['4 + 6 = 10.', 'B nằm giữa A và C.'], solution: 'Không – A, B, C thẳng hàng.' },
    { question: 'Tam giác ABC có AB = 2 cm, AC = 8 cm, BC là số nguyên tố (cm). Tìm BC.', hints: ['6 &lt; BC &lt; 10.', 'Trong 7, 8, 9 chỉ có một số nguyên tố.'], solution: 'BC = 7 cm.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bộ ba nào là độ dài ba cạnh của một tam giác?', options: ['4; 5; 10', '5; 6; 7', '3; 3; 6', '1; 2; 4'], answer: 1, explain: '7 &lt; 5 + 6.' },
    { type: 'short', calc: '[6, 7, 8].length', q: 'Tam giác có hai cạnh 2 cm và 7 cm, cạnh thứ ba là số nguyên (cm). Có bao nhiêu giá trị?', answer: '3', explain: '5 &lt; x &lt; 9: 6, 7, 8.' },
    { type: 'short', calc: '7 + 7 + 3', q: 'Tam giác cân có hai cạnh 3 cm và 7 cm. Chu vi bằng bao nhiêu cm?', unit: 'cm', answer: '17', explain: 'Cạnh bên 7.' },
    { type: 'short', calc: '9 + 9 + 4', q: 'Tam giác cân có hai cạnh 4 cm và 9 cm. Chu vi (cm)?', unit: 'cm', answer: '22', explain: '9 + 9 + 4.' },
    { type: 'short', calc: '5 + 1 - 1', q: 'Tam giác có hai cạnh 1 cm và 5 cm, cạnh thứ ba là số nguyên. Cạnh đó dài bao nhiêu cm?', unit: 'cm', answer: '5', explain: '4 &lt; x &lt; 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ba đoạn 2 cm, 3 cm, 5 cm ghép được một tam giác.', answer: false, explain: '2 + 3 = 5: thẳng hàng.' },
    { type: 'short', calc: '8 + 3 - 1', q: 'Tam giác có hai cạnh 3 cm và 8 cm, cạnh thứ ba nguyên. Giá trị lớn nhất của cạnh thứ ba (cm)?', unit: 'cm', answer: '10', explain: 'x &lt; 11.' },
    { type: 'mcq', q: 'Tam giác ABC có AB = 4, AC = 7. Độ dài BC có thể là:', options: ['2', '3', '8', '11'], answer: 2, explain: '3 &lt; BC &lt; 11.' }
  ]
});
})();
