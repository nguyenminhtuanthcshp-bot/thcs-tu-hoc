/* Toán 8 – Bài 9. Phân tích đa thức thành nhân tử. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-9', {
  objectives: [
    'Hiểu thế nào là phân tích đa thức thành nhân tử.',
    'Phân tích được đa thức thành nhân tử bằng phương pháp đặt nhân tử chung và dùng hằng đẳng thức.',
    'Phân tích được đa thức thành nhân tử bằng phương pháp nhóm hạng tử (và phối hợp các phương pháp).',
    'Vận dụng phân tích thành nhân tử để tính nhanh và tìm x.'
  ],
  intro: 'Nhân đa thức là “gộp” các thừa số thành tổng; phân tích thành nhân tử là việc ngược lại – biến một tổng thành tích. Đây là kĩ năng then chốt cho rút gọn phân thức và giải phương trình.',
  steps: [
    { title: 'Phân tích thành nhân tử là gì?', html: `<p>Phân tích đa thức thành nhân tử (hay thừa số) là biến đổi đa thức đó thành một <b>tích</b> của những đa thức.</p>
      <p class="math">x<sup>2</sup> + 3x = x(x + 3)</p>` },
    { title: 'Đặt nhân tử chung', html: `<p>Tìm nhân tử chung của mọi hạng tử: <b>ƯCLN của các hệ số</b> nhân với các biến chung (lấy số mũ nhỏ nhất).</p>
      <p class="math">6x<sup>3</sup>y − 9x<sup>2</sup>y<sup>2</sup> = 3x<sup>2</sup>y(2x − 3y)</p>
      <div class="box tip">Nhân tử chung có thể là một đa thức: x(y − 1) + 2(y − 1) = (y − 1)(x + 2). Đôi khi phải đổi dấu: 1 − y = −(y − 1).</div>` },
    { title: 'Dùng hằng đẳng thức', html: `<p>Nhận ra đa thức có dạng vế phải của một hằng đẳng thức:</p>
      <p class="math">x<sup>2</sup> − 25 = (x − 5)(x + 5); &nbsp; 4x<sup>2</sup> + 4x + 1 = (2x + 1)<sup>2</sup>; &nbsp; x<sup>3</sup> − 8 = (x − 2)(x<sup>2</sup> + 2x + 4)</p>` },
    { title: 'Nhóm hạng tử', html: `<p>Nhóm các hạng tử một cách hợp lí để mỗi nhóm có nhân tử chung (hoặc là hằng đẳng thức), rồi tiếp tục đặt nhân tử chung.</p>
      <p class="math">x<sup>2</sup> − xy + 3x − 3y = x(x − y) + 3(x − y) = (x − y)(x + 3)</p>
      <p class="math">x<sup>2</sup> − 2x + 1 − y<sup>2</sup> = (x − 1)<sup>2</sup> − y<sup>2</sup> = (x − 1 − y)(x − 1 + y)</p>` },
    { title: 'Ứng dụng: tìm x', html: `<p>Nếu A · B = 0 thì A = 0 hoặc B = 0.</p>
      <p>Ví dụ: x<sup>2</sup> − 4x = 0 ⇒ x(x − 4) = 0 ⇒ x = 0 hoặc x = 4.</p>
      <div class="box warn">Không được chia hai vế cho x khi chưa biết x ≠ 0 – sẽ làm mất nghiệm x = 0.</div>` }
  ],
  summary: 'Thứ tự thử: đặt nhân tử chung → hằng đẳng thức → nhóm hạng tử; phân tích đến khi không còn phân tích được nữa.',
  examples: [
    { title: 'Đặt nhân tử chung', problem: 'Phân tích: 5x(x − 2) − 3(2 − x).', solution: '3(2 − x) = −3(x − 2), nên biểu thức = 5x(x − 2) + 3(x − 2) = (x − 2)(5x + 3).' },
    { title: 'Phối hợp phương pháp', problem: 'Phân tích: 2x<sup>3</sup> − 8x.', solution: '2x<sup>3</sup> − 8x = 2x(x<sup>2</sup> − 4) = 2x(x − 2)(x + 2).' },
    { title: 'Tìm x', problem: 'Tìm x biết x<sup>3</sup> − 9x = 0.', solution: 'x(x − 3)(x + 3) = 0 ⇒ x = 0, x = 3 hoặc x = −3.' }
  ],
  exercises: [
    { question: 'Phân tích thành nhân tử: 12a<sup>2</sup>b − 18ab<sup>2</sup>.', hints: ['ƯCLN(12, 18) = 6; biến chung là a và b.', 'Nhân tử chung 6ab.'], solution: '6ab(2a − 3b).' },
    { question: 'Phân tích thành nhân tử: x<sup>2</sup> + 2x + 1 − 9y<sup>2</sup>.', hints: ['Nhóm ba hạng tử đầu: (x + 1)<sup>2</sup>.', '(x + 1)<sup>2</sup> − (3y)<sup>2</sup> là hiệu hai bình phương.'], solution: '(x + 1 − 3y)(x + 1 + 3y).' },
    { question: 'Tính nhanh: 87 · 43 + 87 · 57.', hints: ['Đặt 87 làm nhân tử chung.', '43 + 57 = 100.'], solution: '8700.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Phân tích x<sup>2</sup> − 7x thành nhân tử được:', options: ['x(x − 7)', 'x(x + 7)', '(x − 7)<sup>2</sup>', 'x<sup>2</sup>(1 − 7x)'], answer: 0, explain: 'Nhân tử chung x.' },
    { type: 'mcq', q: '9 − y<sup>2</sup> bằng:', options: ['(9 − y)(9 + y)', '(3 − y)<sup>2</sup>', '(3 − y)(3 + y)', '(y − 3)(y + 3)'], answer: 2, explain: '3<sup>2</sup> − y<sup>2</sup>.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: ab + a + b + 1 = (a + 1)(b + 1).', answer: true, explain: 'a(b + 1) + (b + 1) = (b + 1)(a + 1).' },
    { type: 'short', calc: '87 * 43 + 87 * 57', q: 'Tính nhanh 87 · 43 + 87 · 57.', answer: '8700', explain: '87 · (43 + 57) = 8700.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ x<sup>2</sup> = 5x suy ra x = 5 là nghiệm duy nhất.', answer: false, explain: 'x(x − 5) = 0 nên còn nghiệm x = 0.' },
    { type: 'short', calc: '4', q: 'Tìm nghiệm khác 0 của phương trình x<sup>2</sup> − 4x = 0.', answer: '4', explain: 'x(x − 4) = 0.' },
    { type: 'mcq', q: 'Nhân tử chung lớn nhất của 8x<sup>3</sup>y<sup>2</sup> và 12x<sup>2</sup>y<sup>3</sup> là:', options: ['4xy', '4x<sup>2</sup>y<sup>2</sup>', '2x<sup>2</sup>y<sup>2</sup>', '4x<sup>3</sup>y<sup>3</sup>'], answer: 1, explain: 'ƯCLN(8, 12) = 4; số mũ nhỏ nhất: x<sup>2</sup>, y<sup>2</sup>.' },
    { type: 'short', calc: '53 * 53 - 47 * 47', q: 'Tính nhanh 53<sup>2</sup> − 47<sup>2</sup>.', answer: '600', explain: '(53 − 47)(53 + 47) = 6 · 100.' }
  ]
});
