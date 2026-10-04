/* Toán 6 – Chương III. Luyện tập chung (sau Bài 15). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/c3-ltc-1', {
  objectives: [
    'Củng cố tập hợp số nguyên, trục số, số đối, so sánh số nguyên.',
    'Cộng, trừ số nguyên thành thạo; áp dụng quy tắc dấu ngoặc để tính nhanh.',
    'Giải bài toán thực tế có dùng số nguyên âm.'
  ],
  intro: 'Luyện tập Bài 13 – Bài 15. Hãy dùng trục số mỗi khi thấy lúng túng với dấu “−”.',
  steps: [
    { title: 'Trục số và so sánh', html: `<p>Số bên trái nhỏ hơn số bên phải. Số âm &lt; 0 &lt; số dương.</p>`,
      svg: S.numberLine({ min: -6, max: 6, marks: [{ v: -5, label: '−5' }, { v: -2, label: '−2' }, { v: 4, label: '4' }] }), caption: '−5 &lt; −2 &lt; 4.' },
    { title: 'Cộng và trừ', html: `<ul><li>Cùng dấu: cộng phần số, giữ dấu.</li><li>Khác dấu: hiệu hai phần số, dấu của số có phần số lớn hơn.</li><li>a − b = a + (−b).</li></ul>` },
    { title: 'Dấu ngoặc', html: `<p>Trước ngoặc là “−”: đổi dấu tất cả số hạng trong ngoặc khi bỏ ngoặc.</p>` },
    { title: 'Mô hình thực tế', html: `<p>Lên cao / tăng / có / lãi: dấu “+”. Xuống thấp / giảm / nợ / lỗ: dấu “−”. Độ chênh lệch giữa a và b (a lớn hơn): a − b.</p>` }
  ],
  summary: 'Nắm chắc trục số, số đối, quy tắc cộng trừ số nguyên và quy tắc dấu ngoặc.',
  examples: [
    { title: 'Chênh lệch nhiệt độ', problem: 'Nhiệt độ cao nhất trong ngày là 5 °C, thấp nhất là −4 °C. Chênh lệch nhiệt độ là bao nhiêu?', solution: '5 − (−4) = 5 + 4 = <b>9 °C</b>.',
      svg: S.numberLine({ min: -5, max: 6, jumps: [{ from: -4, to: 5, label: '9 °C' }], marks: [{ v: -4, label: '−4' }, { v: 5, label: '5' }] }) },
    { title: 'Tính nhanh', problem: 'Tính: (−37) + 54 + (−63) + 46.', solution: '[(−37) + (−63)] + (54 + 46) = −100 + 100 = <b>0</b>.' },
    { title: 'Lãi lỗ', problem: 'Một cửa hàng tháng 1 lãi 12 triệu, tháng 2 lỗ 5 triệu, tháng 3 lỗ 9 triệu. Sau ba tháng cửa hàng lãi hay lỗ bao nhiêu?', solution: '12 + (−5) + (−9) = −2. Cửa hàng <b>lỗ 2 triệu đồng</b>.' }
  ],
  exercises: [
    { question: 'Sắp xếp theo thứ tự giảm dần: −15; 8; 0; −3; 12; −20.', hints: ['Số dương lớn nhất đứng đầu.', 'Trong các số âm, −3 lớn nhất.'], solution: '<b>12 &gt; 8 &gt; 0 &gt; −3 &gt; −15 &gt; −20</b>.' },
    { question: 'Tính: 125 − (25 − 78) − 78.', hints: ['Bỏ ngoặc: 125 − 25 + 78 − 78.', '78 − 78 = 0.'], solution: '= <b>100</b>.' },
    { question: 'Người thợ lặn đang ở độ cao −15 m, lặn sâu thêm 12 m rồi nổi lên 8 m. Người đó đang ở độ cao nào?', hints: ['Lặn sâu thêm: cộng −12.', 'Nổi lên: cộng 8.'], solution: '(−15) + (−12) + 8 = <b>−19 m</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính: (−23) + 15.', answer: '-8', answerText: '−8', calc: '-23+15', explain: '15 − 23 = −8.' },
    { type: 'short', q: 'Tính: (−7) − 18.', answer: '-25', answerText: '−25', calc: '-7-18', explain: '(−7) + (−18) = −25.' },
    { type: 'mcq', q: 'Số nguyên nhỏ nhất trong các số −4; 2; −9; 0 là:', options: ['−4', '0', '−9', '2'], answer: 2, calc: '-9', explain: '−9 nằm xa nhất về bên trái.' },
    { type: 'short', q: 'Tính: 36 − (46 − 10).', answer: '0', calc: '36-(46-10)', explain: '36 − 46 + 10 = 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hiệu của hai số nguyên luôn nhỏ hơn số bị trừ.', answer: false, explain: 'Ví dụ 3 − (−2) = 5 &gt; 3.' },
    { type: 'short', q: 'Chênh lệch giữa 8 °C và −6 °C là bao nhiêu độ?', answer: '14', unit: '°C', calc: '8-(-6)', explain: '8 − (−6) = 14.' },
    { type: 'short', q: 'Tìm x biết x + (−12) = −30.', answer: '-18', answerText: '−18', calc: '-30+12', explain: 'x = −30 − (−12) = −18.' },
    { type: 'mcq', q: 'Năm 776 trước Công nguyên có thể biểu diễn là năm:', options: ['776', '−776', '0', '+776'], answer: 1, calc: '-776', explain: 'Năm trước Công nguyên được biểu diễn bằng số âm.' }
  ]
});
})();
