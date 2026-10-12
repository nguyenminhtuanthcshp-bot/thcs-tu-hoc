/* LS&ĐL 6 – Địa lí, Bài mở đầu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-mo-dau', {
  objectives: [
    'Nêu được vai trò của Địa lí trong cuộc sống.',
    'Hiểu được tầm quan trọng của các khái niệm cơ bản và kĩ năng địa lí.',
    'Nêu được ý nghĩa của việc học môn Địa lí đối với đời sống.',
    'Bước đầu biết cách học tốt môn Địa lí.'
  ],
  intro: 'Vì sao miền Bắc có mùa đông lạnh còn miền Nam nóng quanh năm? Vì sao có ngày dài, đêm ngắn? Làm sao tìm đường khi đến một nơi lạ? Môn <b>Địa lí</b> giúp em trả lời những câu hỏi đó.',
  steps: [
    { title: 'Địa lí học gì?', html: `<p>Địa lí nghiên cứu các hiện tượng tự nhiên (địa hình, khí hậu, sông ngòi, đất, sinh vật) và hoạt động của con người trên bề mặt Trái Đất, cùng mối quan hệ giữa chúng.</p>` },
    { title: 'Khái niệm và kĩ năng cơ bản', html: `<p>Học Địa lí cần:</p>`,
      svg: S.mindmap({ center: 'Học Địa lí', branches: [{ title: 'Khái niệm', items: ['Vị trí, không gian', 'Khí hậu, địa hình'] }, { title: 'Kĩ năng bản đồ', items: ['Đọc bản đồ', 'Tìm phương hướng'] }, { title: 'Kĩ năng số liệu', items: ['Đọc biểu đồ', 'Tính tỉ lệ, nhiệt độ'] }, { title: 'Thực địa', items: ['Quan sát', 'Ghi chép, chụp ảnh'] }], w: 640, size: 13 }), caption: 'Kĩ năng địa lí dùng được trong đời sống hằng ngày.' },
    { title: 'Địa lí và cuộc sống', html: `<ul><li>Biết xem dự báo thời tiết để chuẩn bị trang phục, đi lại.</li><li>Đọc bản đồ, chỉ đường; hiểu thiên tai để phòng tránh.</li><li>Biết sử dụng tài nguyên hợp lí, bảo vệ môi trường.</li></ul>` },
    { title: 'Học tốt Địa lí', html: `<div class="box key">Quan sát – đặt câu hỏi “Ở đâu? Vì sao? Như thế nào?” – sử dụng bản đồ, số liệu – liên hệ thực tế.</div>` }
  ],
  summary: 'Địa lí nghiên cứu tự nhiên và con người trên bề mặt Trái Đất cùng mối quan hệ giữa chúng. Học Địa lí cần nắm khái niệm cơ bản và rèn kĩ năng: đọc bản đồ, xác định phương hướng, phân tích số liệu, biểu đồ, quan sát thực địa. Kiến thức địa lí giúp ta hiểu thiên nhiên, ứng phó thiên tai, sống hài hoà với môi trường.',
  examples: [
    { title: 'Ứng dụng', problem: 'Dự báo ngày mai có mưa to. Kiến thức địa lí giúp gì?', solution: 'Biết chuẩn bị áo mưa, tránh vùng ngập, chủ động đi lại an toàn.' },
    { title: 'Câu hỏi địa lí', problem: 'Đặt một câu hỏi “Vì sao?” về quê em.', solution: 'Ví dụ: Vì sao quê em hay có bão vào tháng 9 – 10?' },
    { title: 'Tính toán', problem: 'Nhiệt độ sáng 22 °C, trưa 31 °C. Chênh lệch bao nhiêu độ?', solution: '31 − 22 = 9 °C.' }
  ],
  exercises: [
    { question: 'Kể hai kĩ năng địa lí quan trọng.', hints: ['Liên quan bản đồ.', 'Liên quan số liệu.'], solution: 'Đọc bản đồ; phân tích biểu đồ, số liệu (xác định phương hướng, quan sát thực địa…).' },
    { question: 'Nhiệt độ ban đêm 18 °C, ban ngày 27 °C. Chênh lệch?', hints: ['Lấy lớn trừ nhỏ.', '27 − 18.'], solution: '9 °C.' },
    { question: 'Vì sao cần học Địa lí?', hints: ['Hiểu thiên nhiên.', 'Ứng xử với môi trường.'], solution: 'Để hiểu thế giới xung quanh, giải thích hiện tượng tự nhiên, ứng phó thiên tai và sử dụng tài nguyên hợp lí.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Địa lí nghiên cứu cả tự nhiên và hoạt động của con người.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Công cụ quan trọng nhất của môn Địa lí:', options: ['Bản đồ', 'Kính hiển vi', 'Ống nghiệm', 'Đàn piano'], answer: 0, explain: 'Bản đồ.' },
    { type: 'short', q: 'Sáng 22 °C, trưa 31 °C. Chênh lệch bao nhiêu độ C?', answer: '9', unit: '°C', calc: '31-22', explain: '9.' },
    { type: 'mcq', q: 'Câu hỏi thường gặp khi học địa lí:', options: ['Ở đâu? Vì sao?', 'Ai viết?', 'Bao nhiêu tiền?', 'Hát thế nào?'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kiến thức địa lí không giúp ích gì cho phòng chống thiên tai.', answer: false, explain: 'Rất hữu ích.' },
    { type: 'short', q: 'Đêm 18 °C, ngày 27 °C. Chênh lệch?', answer: '9', unit: '°C', calc: '27-18', explain: '9.' },
    { type: 'mcq', q: 'Hoạt động thực địa là:', options: ['Quan sát, ghi chép ngoài thực tế', 'Chỉ đọc sách', 'Xem phim hoạt hình', 'Chơi điện tử'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Đối tượng nghiên cứu của Địa lí:', options: ['Bề mặt Trái Đất', 'Cơ thể người', 'Ngôn ngữ', 'Âm nhạc'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
