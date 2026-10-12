/* LS&ĐL 6 – Địa lí, Bài 16. Nhiệt độ không khí. Mây và mưa. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-16', {
  objectives: [
    'Trình bày được sự thay đổi nhiệt độ không khí theo vĩ độ, độ cao, gần hay xa biển.',
    'Tính được nhiệt độ trung bình ngày, tháng, năm.',
    'Mô tả được hiện tượng hình thành mây, mưa.',
    'Biết cách sử dụng nhiệt kế, ẩm kế, vũ kế.'
  ],
  intro: 'Cùng một ngày tháng 1, Hà Nội có thể chỉ 15 °C trong khi TP Hồ Chí Minh lên 32 °C. Vì sao <b>nhiệt độ không khí</b> mỗi nơi khác nhau, và làm sao tính được “nhiệt độ trung bình”?',
  steps: [
    { title: 'Nhiệt độ không khí', html: `<p>Không khí nóng lên chủ yếu nhờ mặt đất hấp thụ nhiệt Mặt Trời rồi toả ra. Đo bằng <b>nhiệt kế</b> đặt trong bóng râm, cách mặt đất 1,5 m.</p>
      <p><b>Nhiệt độ trung bình ngày</b> = tổng nhiệt độ các lần đo : số lần đo (thường đo 4 lần: 1, 7, 13, 19 giờ).</p>` },
    { title: 'Thay đổi nhiệt độ', html: `<p>Nhiệt độ thay đổi theo:</p>`,
      svg: S.table({ title: 'Nhân tố ảnh hưởng nhiệt độ', head: ['Nhân tố', 'Quy luật'], rows: [['Vĩ độ', 'Càng xa Xích đạo càng lạnh'], ['Độ cao', 'Lên cao 100 m giảm khoảng 0,6 °C'], ['Gần hay xa biển', 'Gần biển: nhiệt độ điều hoà hơn']], colW: 250 }), caption: 'Biên độ nhiệt = cao nhất − thấp nhất.' },
    { title: 'Mây và mưa', html: `<p>Quá trình hình thành:</p>`,
      svg: S.flowchart({ title: 'Mây và mưa hình thành', steps: [{ t: 'start', s: 'Hơi nước bốc lên' }, { t: 'proc', s: 'Lên cao, lạnh đi' }, { t: 'proc', s: 'Ngưng tụ thành mây' }, { t: 'end', s: 'Hạt lớn rơi: mưa' }] }), caption: 'Lượng mưa đo bằng vũ kế (mm).' },
    { title: 'Độ ẩm', html: `<p>Độ ẩm không khí cho biết lượng hơi nước trong không khí, đo bằng ẩm kế. Nhiệt độ càng cao, không khí chứa được càng nhiều hơi nước.</p>
      <div class="box key">TB ngày = (t₁ + t₂ + t₃ + t₄) : 4.</div>` }
  ],
  summary: 'Không khí nóng lên nhờ nhiệt toả ra từ mặt đất. Nhiệt độ trung bình ngày bằng tổng các lần đo chia số lần đo. Nhiệt độ thay đổi theo vĩ độ, độ cao (giảm khoảng 0,6 °C/100 m), gần hay xa biển. Hơi nước bốc lên, gặp lạnh ngưng tụ thành mây; hạt nước lớn rơi xuống thành mưa, đo bằng vũ kế.',
  examples: [
    { title: 'Nhiệt độ TB ngày', problem: 'Đo lúc 1h: 20 °C, 7h: 22 °C, 13h: 30 °C, 19h: 24 °C. Nhiệt độ TB ngày?', solution: '(20 + 22 + 30 + 24) : 4 = 24 °C.' },
    { title: 'Biên độ', problem: 'Cao nhất 34 °C, thấp nhất 25 °C. Biên độ nhiệt?', solution: '9 °C.' },
    { title: 'Tổng lượng mưa', problem: 'Ba ngày mưa 12 mm, 25 mm, 8 mm. Tổng?', solution: '45 mm.' }
  ],
  exercises: [
    { question: 'Đo 4 lần: 18, 21, 27, 22 °C. Nhiệt độ TB ngày?', hints: ['Cộng 4 số.', 'Chia 4.'], solution: '(18 + 21 + 27 + 22) : 4 = 22 °C.' },
    { question: 'Vì sao đặt nhiệt kế trong bóng râm?', hints: ['Ánh nắng chiếu trực tiếp.', 'Đo không khí, không đo nắng.'], solution: 'Để đo đúng nhiệt độ không khí, không bị ánh nắng làm nóng nhiệt kế.' },
    { question: 'Nhiệt độ TB các tháng: 1: 16 °C, 7: 29 °C. Biên độ nhiệt năm?', hints: ['Lấy lớn trừ nhỏ.', '29 − 16.'], solution: '13 °C.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Không khí nóng lên chủ yếu nhờ nhiệt toả ra từ mặt đất.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: '1h 20 °C, 7h 22 °C, 13h 30 °C, 19h 24 °C. TB ngày (°C)?', answer: '24', unit: '°C', calc: '(20+22+30+24)/4', explain: '24.' },
    { type: 'mcq', q: 'Dụng cụ đo lượng mưa:', options: ['Vũ kế', 'Nhiệt kế', 'Khí áp kế', 'La bàn'], answer: 0, explain: 'Vũ kế.' },
    { type: 'short', q: 'Cao nhất 34 °C, thấp nhất 25 °C. Biên độ (°C)?', answer: '9', unit: '°C', calc: '34-25', explain: '9.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Càng lên cao nhiệt độ không khí càng tăng.', answer: false, explain: 'Giảm.' },
    { type: 'short', q: 'Đo 18, 21, 27, 22 °C. TB ngày (°C)?', answer: '22', unit: '°C', calc: '(18+21+27+22)/4', explain: '22.' },
    { type: 'mcq', q: 'Mây hình thành do:', options: ['Hơi nước ngưng tụ', 'Bụi núi lửa', 'Khói nhà máy', 'Ánh sáng'], answer: 0, explain: 'Ngưng tụ.' },
    { type: 'short', q: 'Ba ngày mưa 12, 25, 8 mm. Tổng (mm)?', answer: '45', unit: 'mm', calc: '12+25+8', explain: '45.' }
  ]
});
})();
