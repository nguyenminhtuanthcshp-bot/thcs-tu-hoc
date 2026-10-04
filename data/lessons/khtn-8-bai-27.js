/* KHTN 8 – Bài 27. Thực hành đo năng lượng nhiệt bằng joulemeter. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-27', {
  objectives: [
    'Sử dụng được joulemeter để đo năng lượng điện cung cấp cho dây đốt nóng (bằng năng lượng nhiệt truyền cho nước, bỏ qua hao phí).',
    'Đo được năng lượng nhiệt cần để làm nóng một lượng nước tăng thêm một số độ.',
    'Rút ra được: năng lượng nhiệt cần cung cấp tỉ lệ với độ tăng nhiệt độ và khối lượng nước.',
    'Nêu được nguyên nhân sai số và cách giảm hao phí nhiệt.'
  ],
  intro: 'Nồi cơm điện, ấm siêu tốc đều biến điện năng thành nhiệt. Làm sao đo được bao nhiêu jun năng lượng đã truyền cho nước? Dụng cụ <b>joulemeter</b> giúp ta làm việc đó.',
  steps: [
    { title: 'Dụng cụ', html: `<ul><li>Joulemeter: đo năng lượng điện (J) cung cấp cho dây đốt nóng.</li><li>Nguồn điện (biến áp 12 V), dây đốt nóng (điện trở), nhiệt kế, cốc nhựa xốp (hoặc bình nhiệt lượng kế), cân, nước.</li></ul>`,
      svg: S.joulemeter({ reading: '12 450 J' }), caption: 'Joulemeter đo năng lượng điện cung cấp cho dây đốt nóng nhúng trong nước (số chỉ minh hoạ).' },
    { title: 'Tiến hành', html: `<ol><li>Cân 0,2 kg nước cho vào cốc xốp, ghi nhiệt độ ban đầu t<sub>1</sub>.</li><li>Nhúng dây đốt nóng vào nước, đặt số chỉ joulemeter về 0, bật nguồn.</li><li>Khuấy nhẹ liên tục; khi nhiệt độ tăng thêm 5 °C, 10 °C, 15 °C… ghi số chỉ joulemeter.</li><li>Tắt nguồn khi xong.</li></ol>` },
    { title: 'Kết quả đo', html: `<p>Bảng kết quả với 0,2 kg nước (số liệu minh hoạ):</p>
      <table class="tbl"><tr><th>Độ tăng nhiệt độ (°C)</th><th>Năng lượng (J)</th></tr><tr><td>5</td><td>4 300</td></tr><tr><td>10</td><td>8 500</td></tr><tr><td>15</td><td>12 700</td></tr><tr><td>20</td><td>16 900</td></tr></table>
      <p>Nhận xét: độ tăng nhiệt độ gấp đôi thì năng lượng cần cung cấp gần gấp đôi ⇒ năng lượng nhiệt <b>tỉ lệ thuận</b> với độ tăng nhiệt độ.</p>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 0], [5, 4300], [10, 8500], [15, 12700], [20, 16900]], dots: true, color: '#dc2626' }], xmax: 22, ymax: 18000, xstep: 5, ystep: 3000, xlabel: 'Δt (°C)', ylabel: 'Q (J)', label: 'Năng lượng nhiệt theo độ tăng nhiệt độ của 0,2 kg nước (số liệu minh hoạ)' }) },
    { title: 'So sánh với giá trị tham khảo', html: `<p>Theo giá trị tham khảo, 1 kg nước tăng 1 °C cần khoảng 4 200 J ⇒ 0,2 kg nước tăng 10 °C cần khoảng 4 200 · 0,2 · 10 = 8 400 J. Kết quả đo 8 500 J lớn hơn một chút vì có hao phí nhiệt ra môi trường và làm nóng cốc, nhiệt kế.</p>
      <p>Khi dùng lượng nước gấp đôi, cùng độ tăng nhiệt độ thì năng lượng cần cung cấp cũng gần gấp đôi.</p>` },
    { title: 'Sai số và cách khắc phục', html: `<ul><li>Nhiệt truyền ra không khí, ra cốc ⇒ dùng cốc xốp có nắp, làm nhanh.</li><li>Nước nóng không đều ⇒ khuấy nhẹ liên tục.</li><li>Đọc nhiệt kế sai ⇒ mắt nhìn ngang vạch chất lỏng trong nhiệt kế.</li></ul>`,
      svg: S.thermometer({ min: 20, max: 50, step: 10, minor: 5, value: 35, title: 'Nhiệt kế' }), caption: 'Đọc nhiệt độ nước khi đang đun (ví dụ 35 °C).' }
  ],
  summary: 'Joulemeter đo năng lượng điện cung cấp cho dây đốt nóng (coi bằng năng lượng nhiệt nước nhận, bỏ qua hao phí). Năng lượng nhiệt cần cung cấp tỉ lệ thuận với độ tăng nhiệt độ và với khối lượng nước. Giảm sai số: cốc cách nhiệt, khuấy đều, đọc nhiệt kế đúng cách.',
  examples: [
    { title: 'Đọc bảng', problem: 'Theo bảng minh hoạ, để 0,2 kg nước tăng thêm từ 10 °C lên 20 °C (so với ban đầu) cần thêm bao nhiêu J?', solution: '16 900 − 8 500 = 8 400 (J).' },
    { title: 'Ước tính', problem: 'Dùng giá trị 4 200 J/(kg · °C), ước tính năng lượng để 0,5 kg nước tăng 20 °C.', solution: '4 200 · 0,5 · 20 = 42 000 (J).' },
    { title: 'Giải thích sai lệch', problem: 'Vì sao số đo joulemeter thường lớn hơn giá trị tính theo 4 200 J/(kg · °C)?', solution: 'Một phần năng lượng bị hao phí: làm nóng cốc, dây đốt, nhiệt kế và toả ra không khí.' }
  ],
  exercises: [
    { question: 'Ước tính năng lượng cần để 0,3 kg nước tăng 15 °C (dùng 4 200 J/(kg · °C)).', hints: ['Q = 4 200 · m · Δt.', 'm = 0,3 kg; Δt = 15 °C.'], solution: 'Q = 4 200 · 0,3 · 15 = 18 900 J.' },
    { question: 'Vì sao nên dùng cốc nhựa xốp có nắp thay cho cốc kim loại?', hints: ['Kim loại dẫn nhiệt thế nào?', 'Nắp ngăn gì?'], solution: 'Nhựa xốp dẫn nhiệt kém, nắp hạn chế đối lưu và bay hơi ⇒ giảm hao phí nhiệt, kết quả chính xác hơn.' },
    { question: 'Khi làm thí nghiệm với 0,4 kg nước (gấp đôi 0,2 kg), để tăng 10 °C cần khoảng bao nhiêu J? (dựa vào kết quả 8 500 J của 0,2 kg)', hints: ['Năng lượng tỉ lệ với khối lượng.', 'Khối lượng gấp đôi.'], solution: 'Khoảng 2 · 8 500 = 17 000 J.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Joulemeter dùng để đo năng lượng điện cung cấp cho thiết bị.', answer: true, explain: 'Số chỉ joulemeter có đơn vị J.' },
    { type: 'short', q: 'Ước tính năng lượng để 0,2 kg nước tăng 10 °C, dùng giá trị 4 200 J/(kg · °C).', answer: '8400', answerText: '8 400', unit: 'J', calc: '4200*0.2*10', explain: '4 200 · 0,2 · 10 = 8 400 J.' },
    { type: 'mcq', q: 'Năng lượng nhiệt cần để làm nóng một lượng nước:', options: ['không phụ thuộc độ tăng nhiệt độ', 'tỉ lệ thuận với độ tăng nhiệt độ', 'tỉ lệ nghịch với khối lượng nước', 'chỉ phụ thuộc thời gian đun'], answer: 1, explain: 'Độ tăng nhiệt độ gấp đôi thì năng lượng gấp đôi.' },
    { type: 'short', q: 'Theo bảng minh hoạ, 0,2 kg nước tăng 5 °C cần 4 300 J. Ước tính năng lượng để tăng 15 °C (theo tỉ lệ thuận) là bao nhiêu J?', answer: '12900', answerText: '12 900', unit: 'J', calc: '4300*3', explain: '4 300 · 3 = 12 900 J (đo thực tế được 12 700 J).' },
    { type: 'mcq', q: 'Để giảm hao phí nhiệt trong thí nghiệm nên:', options: ['dùng cốc kim loại mỏng', 'dùng cốc xốp có nắp', 'để cốc ngoài gió', 'không khuấy nước'], answer: 1, explain: 'Cốc xốp có nắp cách nhiệt tốt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kết quả đo bằng joulemeter luôn đúng bằng năng lượng nước nhận được, không có hao phí.', answer: false, explain: 'Luôn có hao phí ra cốc, dụng cụ và môi trường.' },
    { type: 'short', q: 'Ước tính năng lượng để 0,5 kg nước tăng 20 °C (dùng 4 200 J/(kg · °C)).', answer: '42000', answerText: '42 000', unit: 'J', calc: '4200*0.5*20', explain: '4 200 · 0,5 · 20 = 42 000 J.' },
    { type: 'short', q: 'Nhiệt độ nước tăng từ 25 °C lên 40 °C. Độ tăng nhiệt độ là bao nhiêu °C?', answer: '15', unit: '°C', calc: '40-25', explain: '40 − 25 = 15 °C.' }
  ]
});
})();
