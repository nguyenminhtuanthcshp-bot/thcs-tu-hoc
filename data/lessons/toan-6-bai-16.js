/* Toán 6 – Bài 16. Phép nhân số nguyên. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-16', {
  objectives: [
    'Nhân được hai số nguyên cùng dấu, khác dấu.',
    'Xác định đúng dấu của tích nhiều số nguyên.',
    'Vận dụng tính chất giao hoán, kết hợp, phân phối của phép nhân để tính nhanh.'
  ],
  intro: 'Mỗi ngày mực nước hồ giảm 3 cm (tức thay đổi −3 cm). Sau 4 ngày mực nước thay đổi bao nhiêu? Đó là 4 · (−3). Bài này giúp em nhân các số nguyên.',
  steps: [
    { title: 'Nhân hai số nguyên khác dấu', html: `<p>4 · (−3) = (−3) + (−3) + (−3) + (−3) = −12.</p>
      <p><b>Quy tắc:</b> nhân hai phần số rồi đặt dấu “−” trước kết quả. Ví dụ: (−7) · 5 = −35; 6 · (−9) = −54.</p>` },
    { title: 'Nhân hai số nguyên cùng dấu', html: `<p>Nhân hai phần số, kết quả mang dấu “+”. Ví dụ: (−4) · (−5) = 20.</p>
      <p>Ghi nhớ dấu: (+) · (+) = (+); (−) · (−) = (+); (+) · (−) = (−); (−) · (+) = (−). Nói gọn: <b>cùng dấu thì dương, khác dấu thì âm</b>. Mọi số nhân với 0 đều bằng 0.</p>` },
    { title: 'Tính chất', html: `<ul><li>Giao hoán: a · b = b · a. Kết hợp: (a · b) · c = a · (b · c).</li><li>Nhân với 1: a · 1 = a.</li><li>Phân phối: a · (b + c) = ab + ac; a · (b − c) = ab − ac.</li></ul>` },
    { title: 'Dấu của tích nhiều số', html: `<p>Đếm số thừa số âm: <b>chẵn</b> thì tích dương, <b>lẻ</b> thì tích âm (khi không có thừa số 0).</p>
      <p>Ví dụ: (−1) · (−2) · (−3) = −6 (ba thừa số âm); (−2)<sup>4</sup> = 16 nhưng (−2)<sup>3</sup> = −8.</p>` }
  ],
  summary: 'Tích hai số nguyên cùng dấu là số dương, khác dấu là số âm; nhân hai phần số rồi đặt dấu. Tích có số chẵn thừa số âm thì dương, số lẻ thừa số âm thì âm.',
  examples: [
    { title: 'Tính tích', problem: 'Tính: a) (−12) · 5; b) (−8) · (−25); c) (−3) · 4 · (−5) · (−1).', solution: 'a) <b>−60</b>; b) <b>200</b>; c) ba thừa số âm ⇒ tích âm: 3 · 4 · 5 · 1 = 60 ⇒ <b>−60</b>.' },
    { title: 'Tính nhanh', problem: 'Tính: (−25) · 37 · 4.', solution: '= [(−25) · 4] · 37 = (−100) · 37 = <b>−3 700</b>.' },
    { title: 'Phân phối', problem: 'Tính: (−17) · 64 + (−17) · 36.', solution: '= (−17) · (64 + 36) = (−17) · 100 = <b>−1 700</b>.' }
  ],
  exercises: [
    { question: 'Tính: (−15) · (−6).', hints: ['Cùng dấu ⇒ tích dương.', '15 · 6 = 90.'], solution: '<b>90</b>.' },
    { question: 'Một công ty mỗi tháng lỗ 150 triệu đồng (thay đổi −150 triệu). Sau 6 tháng, lợi nhuận thay đổi bao nhiêu?', hints: ['Lập tích 6 · (−150).', 'Khác dấu ⇒ tích âm.'], solution: '6 · (−150) = <b>−900 triệu đồng</b> (lỗ 900 triệu).' },
    { question: 'Không tính, so sánh (−5) · (−7) · (−9) với 0.', hints: ['Đếm số thừa số âm.', 'Ba thừa số âm (lẻ).'], solution: 'Tích âm nên <b>nhỏ hơn 0</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính: (−9) · 7.', answer: '-63', answerText: '−63', calc: '-9*7', explain: 'Khác dấu: −63.' },
    { type: 'short', q: 'Tính: (−11) · (−12).', answer: '132', calc: '-11*-12', explain: 'Cùng dấu: 132.' },
    { type: 'short', q: 'Tính: (−2)<sup>3</sup>.', answer: '-8', answerText: '−8', calc: 'Math.pow(-2,3)', explain: '(−2) · (−2) · (−2) = −8.' },
    { type: 'mcq', q: 'Tích (−1) · (−1) · … · (−1) gồm 10 thừa số bằng:', options: ['−1', '1', '−10', '10'], answer: 1, calc: 'Math.pow(-1,10)', explain: '10 thừa số âm (chẵn) ⇒ tích dương, bằng 1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bình phương của mọi số nguyên khác 0 đều là số dương.', answer: true, explain: 'a · a là tích hai số cùng dấu.' },
    { type: 'short', q: 'Tính nhanh: 125 · (−8) · (−3).', answer: '3000', answerText: '3 000', calc: '125*-8*-3', explain: '125 · (−8) = −1 000; (−1 000) · (−3) = 3 000.' },
    { type: 'short', q: 'Tính: (−6) · 45 + (−6) · 55.', answer: '-600', answerText: '−600', calc: '-6*45+-6*55', explain: '(−6) · 100 = −600.' },
    { type: 'mcq', q: 'Nếu a · b &lt; 0 và a &gt; 0 thì:', options: ['b &gt; 0', 'b &lt; 0', 'b = 0', 'Không xác định'], answer: 1, explain: 'Tích âm nên a, b khác dấu; a dương thì b âm.' }
  ]
});
