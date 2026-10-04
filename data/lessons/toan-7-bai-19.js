/* Toán 7 – Bài 19. Biểu đồ đoạn thẳng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-19', {
  objectives: [
    'Đọc và mô tả dữ liệu biểu diễn trên biểu đồ đoạn thẳng.',
    'Vẽ được biểu đồ đoạn thẳng từ bảng số liệu.',
    'Nhận ra xu hướng tăng, giảm của dữ liệu theo thời gian; rút ra nhận xét đơn giản.'
  ],
  intro: 'Nhiệt độ trong tuần tăng hay giảm? Doanh thu tháng nào cao nhất? Biểu đồ đoạn thẳng giúp nhìn thấy “đường đi” của dữ liệu theo thời gian.',
  steps: [
    { title: 'Biểu đồ đoạn thẳng', html: `<p>Biểu đồ đoạn thẳng gồm:</p><ul><li>Trục ngang: các mốc thời gian (hoặc các đối tượng).</li><li>Trục đứng: giá trị, có chia khoảng đều và đơn vị.</li><li>Mỗi giá trị là một <b>điểm</b>; các điểm liên tiếp nối với nhau bằng <b>đoạn thẳng</b>.</li></ul>`,
      svg: S.lineChart({ title: 'Nhiệt độ cao nhất trong tuần (°C)', cats: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'], values: [29, 31, 30, 33, 34, 32, 28], yMin: 24, yMax: 36, yStep: 2, yLabel: '°C' }),
      caption: 'Nhiệt độ tăng dần đến thứ Sáu (34 °C) rồi giảm.' },
    { title: 'Đọc biểu đồ', html: `<ol><li>Đọc tiêu đề, đơn vị trên trục đứng.</li><li>Đọc giá trị từng điểm.</li><li>Nhận xét xu hướng: đoạn đi lên là tăng, đi xuống là giảm; đoạn dốc là thay đổi nhanh.</li><li>Tìm giá trị lớn nhất, nhỏ nhất.</li></ol>` },
    { title: 'Vẽ biểu đồ đoạn thẳng', html: `<ol><li>Vẽ hai trục vuông góc; trục ngang ghi các mốc thời gian, trục đứng chia đều theo giá trị.</li><li>Xác định các điểm theo bảng số liệu.</li><li>Nối các điểm liên tiếp bằng đoạn thẳng.</li><li>Ghi tiêu đề, đơn vị, giá trị tại mỗi điểm (nếu cần).</li></ol>` },
    { title: 'So sánh hai dãy số liệu', html: `<p>Có thể vẽ hai đường trên cùng một biểu đồ để so sánh.</p>`,
      svg: S.lineChart({ title: 'Số sách mượn thư viện (quyển)', cats: ['Th9', 'Th10', 'Th11', 'Th12', 'Th1'], series: [{ name: 'Lớp 7A', values: [20, 28, 35, 30, 40], color: C.blue }, { name: 'Lớp 7B', values: [25, 24, 30, 36, 32], color: C.orange }], yMin: 0, yMax: 45, yStep: 5, yLabel: 'quyển' }),
      caption: 'Lớp 7A tăng mạnh vào tháng 1; lớp 7B cao nhất vào tháng 12.' }
  ],
  summary: 'Biểu đồ đoạn thẳng: điểm = giá trị tại mỗi mốc, nối bằng đoạn thẳng. Đoạn đi lên – tăng, đi xuống – giảm. Dùng để theo dõi sự thay đổi theo thời gian.',
  examples: [
    { title: 'Đọc giá trị', problem: 'Theo biểu đồ bước 1, ngày nào nóng nhất, ngày nào mát nhất?', solution: 'Nóng nhất: thứ Sáu (34 °C). Mát nhất: Chủ nhật (28 °C).' },
    { title: 'Mức tăng', problem: 'Theo biểu đồ bước 1, từ thứ Tư đến thứ Năm nhiệt độ tăng bao nhiêu độ?', solution: '33 − 30 = 3 (°C).' },
    { title: 'Trung bình', problem: 'Tính nhiệt độ cao nhất trung bình của tuần (làm tròn đến hàng phần mười).', solution: '(29 + 31 + 30 + 33 + 34 + 32 + 28) : 7 = 217 : 7 = 31 (°C).' }
  ],
  exercises: [
    { question: 'Theo biểu đồ bước 4, tổng số sách lớp 7A mượn trong 5 tháng là bao nhiêu?', hints: ['Cộng 5 giá trị của lớp 7A.', '20 + 28 + 35 + 30 + 40.'], solution: '153 quyển.' },
    { question: 'Theo biểu đồ bước 4, tháng nào lớp 7B mượn nhiều hơn lớp 7A?', hints: ['So sánh từng tháng.', 'Th9: 25 &gt; 20.'], solution: 'Tháng 9 (25 &gt; 20) và tháng 12 (36 &gt; 30).' },
    { question: 'Vì sao biểu đồ đoạn thẳng phù hợp với dữ liệu nhiệt độ theo ngày hơn biểu đồ hình quạt?', hints: ['Hình quạt biểu diễn phần của tổng.', 'Nhiệt độ các ngày không cộng thành “toàn bộ”.'], solution: 'Dữ liệu thay đổi theo thời gian, không phải các phần của một tổng thể; biểu đồ đoạn thẳng thể hiện xu hướng tăng giảm.' }
  ],
  quiz: [
    { type: 'short', calc: 'Math.max(29, 31, 30, 33, 34, 32, 28)', q: 'Biểu đồ bước 1: nhiệt độ cao nhất trong tuần là bao nhiêu °C?', unit: '°C', answer: '34', explain: 'Thứ Sáu: 34 °C.' },
    { type: 'short', calc: '33 - 30', q: 'Biểu đồ bước 1: từ thứ Tư đến thứ Năm nhiệt độ tăng bao nhiêu °C?', unit: '°C', answer: '3', explain: '33 − 30 = 3.' },
    { type: 'short', calc: 'mean([29, 31, 30, 33, 34, 32, 28])', q: 'Biểu đồ bước 1: nhiệt độ trung bình của tuần là bao nhiêu °C?', unit: '°C', answer: '31', explain: '217 : 7 = 31.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đoạn thẳng đi xuống cho biết giá trị giảm.', answer: true, explain: 'Điểm sau thấp hơn điểm trước.' },
    { type: 'short', calc: 'sum([20, 28, 35, 30, 40])', q: 'Biểu đồ bước 4: tổng số sách lớp 7A mượn trong 5 tháng?', unit: 'quyển', answer: '153', explain: '20 + 28 + 35 + 30 + 40 = 153.' },
    { type: 'mcq', q: 'Biểu đồ nào thích hợp để biểu diễn cân nặng của một em bé qua từng tháng?', options: ['hình quạt tròn', 'đoạn thẳng', 'tranh', 'không cần biểu đồ'], answer: 1, explain: 'Theo dõi thay đổi theo thời gian.' },
    { type: 'short', calc: '34 - 28', q: 'Biểu đồ bước 1: chênh lệch giữa ngày nóng nhất và ngày mát nhất là bao nhiêu °C?', unit: '°C', answer: '6', explain: '34 − 28 = 6.' },
    { type: 'mcq', q: 'Biểu đồ bước 4: tháng nào lớp 7A mượn nhiều sách nhất?', options: ['Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 1'], answer: 3, explain: 'Tháng 1: 40 quyển.' }
  ]
});
})();
