/* KHTN 8 – Bài 42. Quần thể sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-42', {
  objectives: [
    'Phát biểu được khái niệm quần thể sinh vật; lấy được ví dụ.',
    'Nêu được các đặc trưng cơ bản của quần thể: số lượng cá thể, mật độ, tỉ lệ giới tính, nhóm tuổi, phân bố.',
    'Tính được mật độ quần thể; đọc được tháp tuổi.',
    'Nêu được một số biện pháp bảo vệ quần thể.'
  ],
  intro: 'Một đàn voi trong rừng, một ruộng lúa, một đàn cá trong hồ… Tập hợp các cá thể cùng loài sống cùng nhau có những đặc điểm gì mà một cá thể riêng lẻ không có?',
  steps: [
    { title: 'Khái niệm quần thể', html: `<p><b>Quần thể sinh vật</b> là tập hợp các cá thể <b>cùng loài</b>, sinh sống trong một khoảng không gian xác định, vào một thời điểm nhất định, có khả năng sinh sản tạo thành thế hệ mới.</p>
      <p>Ví dụ: đàn voi ở vườn quốc gia Yok Đôn, rừng cọ ở Phú Thọ. Tập hợp cá chép, cá mè, cá rô trong một ao <b>không</b> phải một quần thể (khác loài).</p>` },
    { title: 'Số lượng và mật độ', html: `<p><b>Kích thước quần thể</b>: số lượng cá thể (hoặc khối lượng, năng lượng) của quần thể.</p><p><b>Mật độ quần thể</b> = số lượng cá thể : diện tích (hoặc thể tích) nơi sống.</p>
      <p>Ví dụ: 2 000 cây thông trên 4 ha ⇒ mật độ 500 cây/ha.</p>`,
      svg: S.bar({ title: 'Số lượng cá thể của một quần thể qua các năm (số liệu minh hoạ)', cats: ['2020', '2021', '2022', '2023', '2024'], series: [{ name: 'Số cá thể', values: [120, 150, 190, 210, 200], color: '#16a34a' }], yMax: 250, yStep: 50, width: 520, height: 280 }) },
    { title: 'Tỉ lệ giới tính và nhóm tuổi', html: `<ul><li><b>Tỉ lệ giới tính</b>: tỉ lệ số cá thể đực/cái; ở đa số loài xấp xỉ 1 : 1, có thể thay đổi theo điều kiện sống.</li><li><b>Nhóm tuổi</b>: trước sinh sản, sinh sản, sau sinh sản. Tháp tuổi có ba dạng: phát triển, ổn định, suy thoái.</li></ul>`,
      svg: S.ageStructure(), caption: 'Tháp tuổi dạng phát triển có đáy rộng (nhiều cá thể non); dạng suy thoái có đáy hẹp.' },
    { title: 'Phân bố và bảo vệ quần thể', html: `<ul><li>Các kiểu phân bố: <b>đều</b> (cây thông trong rừng trồng, chim cánh cụt làm tổ), <b>theo nhóm</b> (phổ biến nhất: đàn trâu rừng, bụi tre), <b>ngẫu nhiên</b> (cây gỗ trong rừng nhiệt đới).</li><li>Bảo vệ quần thể: bảo vệ môi trường sống; chống săn bắt, khai thác quá mức; xây dựng khu bảo tồn; nhân giống loài quý hiếm.</li></ul>` }
  ],
  summary: 'Quần thể là tập hợp cá thể cùng loài, cùng không gian, cùng thời điểm, có khả năng sinh sản. Đặc trưng: số lượng, mật độ (= số cá thể : diện tích hoặc thể tích), tỉ lệ giới tính, nhóm tuổi (tháp tuổi phát triển, ổn định, suy thoái), phân bố (đều, theo nhóm, ngẫu nhiên).',
  examples: [
    { title: 'Tính mật độ', problem: 'Một khu rừng 5 ha có 1 500 cây lim. Tính mật độ quần thể lim.', solution: '1 500 : 5 = 300 cây/ha.' },
    { title: 'Nhận biết quần thể', problem: 'Tập hợp nào là quần thể: (a) các con cá trong hồ; (b) các cây lúa trong một ruộng lúa?', solution: '(b) là quần thể (cùng loài). (a) gồm nhiều loài cá khác nhau nên không phải một quần thể.' },
    { title: 'Tính số cá thể', problem: 'Mật độ bèo tây là 40 cây/m². Một ao có mặt nước 200 m² phủ kín bèo. Tính số cây bèo.', solution: '40 · 200 = 8 000 cây.' }
  ],
  exercises: [
    { question: 'Một quần thể có 60 % cá thể trước sinh sản, 30 % sinh sản, 10 % sau sinh sản. Quần thể thuộc dạng tháp tuổi nào?', hints: ['Nhóm tuổi nào chiếm nhiều nhất?', 'Đáy tháp rộng.'], solution: 'Dạng phát triển (đáy rộng – nhiều cá thể non).' },
    { question: 'Trong 0,5 m³ nước ao có 30 con cá mè (số liệu minh hoạ). Tính mật độ.', hints: ['Mật độ = số cá thể : thể tích.', '30 : 0,5.'], solution: '30 : 0,5 = 60 con/m³.' },
    { question: 'Nêu ba biện pháp bảo vệ quần thể sinh vật.', hints: ['Nơi sống.', 'Săn bắt, khai thác.'], solution: 'Bảo vệ môi trường sống; cấm săn bắt, khai thác quá mức; xây dựng khu bảo tồn, vườn quốc gia.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các cá thể trong một quần thể thuộc cùng một loài.', answer: true, explain: 'Đó là điều kiện của quần thể.' },
    { type: 'short', q: 'Một khu rừng 4 ha có 2 000 cây thông. Mật độ quần thể thông là bao nhiêu cây/ha?', answer: '500', unit: 'cây/ha', calc: '2000/4', explain: '2 000 : 4 = 500 cây/ha.' },
    { type: 'mcq', q: 'Tập hợp nào là quần thể sinh vật?', options: ['Các loài cá trong ao', 'Các cây cọ trên một quả đồi', 'Các con chim trong rừng', 'Cây cỏ trên cánh đồng'], answer: 1, explain: 'Cùng một loài cọ.' },
    { type: 'mcq', q: 'Tháp tuổi có đáy rộng, nhóm tuổi trước sinh sản chiếm tỉ lệ cao là dạng:', options: ['ổn định', 'suy thoái', 'phát triển', 'cân bằng'], answer: 2, explain: 'Dạng phát triển.' },
    { type: 'short', q: 'Mật độ bèo tây 50 cây/m². Mặt ao 120 m² phủ kín bèo có bao nhiêu cây?', answer: '6000', answerText: '6 000', unit: 'cây', calc: '50*120', explain: '50 · 120 = 6 000 cây.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kiểu phân bố đều là kiểu phân bố phổ biến nhất trong tự nhiên.', answer: false, explain: 'Phân bố theo nhóm phổ biến nhất.' },
    { type: 'short', q: 'Theo biểu đồ minh hoạ, số cá thể năm 2023 là 210, năm 2020 là 120. Số cá thể tăng thêm bao nhiêu?', answer: '90', unit: 'cá thể', calc: '210-120', explain: '210 − 120 = 90 cá thể.' },
    { type: 'short', q: 'Trong 2 m³ nước có 36 con cá. Mật độ là bao nhiêu con/m³?', answer: '18', unit: 'con/m³', calc: '36/2', explain: '36 : 2 = 18 con/m³.' }
  ]
});
})();
