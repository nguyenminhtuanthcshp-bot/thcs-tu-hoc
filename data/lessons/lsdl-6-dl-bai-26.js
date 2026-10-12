/* LS&ĐL 6 – Địa lí, Bài 26. Thực hành: Tìm hiểu môi trường tự nhiên địa phương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-26', {
  objectives: [
    'Biết cách tìm hiểu môi trường tự nhiên qua tài liệu và quan sát thực tế.',
    'Mô tả được các thành phần tự nhiên ở địa phương (địa hình, khí hậu, sông, đất, sinh vật).',
    'Biết ghi chép, xử lí số liệu đơn giản.',
    'Trình bày được báo cáo ngắn.'
  ],
  intro: 'Em đã học về địa hình, khí hậu, sông ngòi, đất, sinh vật của cả Trái Đất. Giờ là lúc trở thành “nhà địa lí nhí”, tìm hiểu <b>thiên nhiên nơi mình sống</b>.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Chọn khu vực: sân trường, công viên, cánh đồng, bờ sông…</li><li>Dụng cụ: sổ ghi chép, bút, điện thoại chụp ảnh, nhiệt kế, la bàn, bản đồ.</li><li>Phân công nhóm, đảm bảo an toàn.</li></ul>` },
    { title: 'Nội dung quan sát', html: `<p>Phiếu quan sát gợi ý:</p>`,
      svg: S.table({ title: 'Phiếu quan sát môi trường tự nhiên', head: ['Thành phần', 'Câu hỏi gợi ý'], rows: [['Địa hình', 'Bằng phẳng hay đồi núi? Độ cao?'], ['Khí hậu', 'Nhiệt độ hôm nay? Mùa mưa khi nào?'], ['Sông, hồ', 'Tên? Nước trong hay đục?'], ['Đất', 'Màu gì? Trồng cây gì?'], ['Sinh vật', 'Cây, con vật phổ biến?']], colW: 250 }), caption: 'Chụp ảnh minh hoạ cho từng mục.' },
    { title: 'Các bước thực hiện', html: `<p>Quy trình:</p>`,
      svg: S.flowchart({ title: 'Tìm hiểu môi trường', steps: [{ t: 'start', s: 'Lập kế hoạch' }, { t: 'proc', s: 'Quan sát, đo đạc' }, { t: 'proc', s: 'Xử lí số liệu' }, { t: 'end', s: 'Báo cáo' }] }), caption: 'Báo cáo bằng bài viết, poster hoặc trình chiếu.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Quan sát – ghi chép – so sánh – kết luận; luôn giữ an toàn và không xả rác.</div>` }
  ],
  summary: 'Tìm hiểu môi trường tự nhiên địa phương gồm các bước: lập kế hoạch, quan sát và đo đạc (địa hình, khí hậu, sông hồ, đất, sinh vật), xử lí số liệu, viết báo cáo. Cần chuẩn bị dụng cụ, phân công nhóm và đảm bảo an toàn.',
  examples: [
    { title: 'Nhiệt độ TB', problem: 'Nhóm đo nhiệt độ 3 lần: 27, 30, 33 °C. Trung bình?', solution: '(27 + 30 + 33) : 3 = 30 °C.' },
    { title: 'Đếm cây', problem: 'Sân trường có 3 hàng, mỗi hàng 12 cây. Tổng số cây?', solution: '36 cây.' },
    { title: 'Tỉ lệ', problem: 'Trong 40 cây có 10 cây bàng. Cây bàng chiếm bao nhiêu phần trăm?', solution: '25%.' }
  ],
  exercises: [
    { question: 'Đo 4 lần: 25, 28, 31, 28 °C. Trung bình?', hints: ['Cộng: 112.', 'Chia 4.'], solution: '28 °C.' },
    { question: 'Công viên có 50 cây, 20 cây phượng. Phượng chiếm bao nhiêu %?', hints: ['20 : 50.', '× 100.'], solution: '40%.' },
    { question: 'Kể ba dụng cụ cần mang khi đi thực địa.', hints: ['Ghi chép.', 'Đo, định hướng.'], solution: 'Sổ, bút, nhiệt kế, la bàn, điện thoại chụp ảnh.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi thực địa cần đảm bảo an toàn và không xả rác.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Đo 27, 30, 33 °C. Trung bình (°C)?', answer: '30', unit: '°C', calc: '(27+30+33)/3', explain: '30.' },
    { type: 'mcq', q: 'Dụng cụ xác định phương hướng khi thực địa:', options: ['La bàn', 'Nhiệt kế', 'Thước dây', 'Vũ kế'], answer: 0, explain: 'La bàn.' },
    { type: 'short', q: '40 cây có 10 cây bàng. Cây bàng chiếm bao nhiêu %?', answer: '25', unit: '%', calc: '10/40*100', explain: '25.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể bỏ qua bước lập kế hoạch khi đi thực địa.', answer: false, explain: 'Cần lập kế hoạch.' },
    { type: 'short', q: '3 hàng, mỗi hàng 12 cây. Tổng số cây?', answer: '36', unit: 'cây', calc: '3*12', explain: '36.' },
    { type: 'mcq', q: 'Bước cuối của hoạt động tìm hiểu:', options: ['Báo cáo kết quả', 'Lập kế hoạch', 'Chuẩn bị dụng cụ', 'Chia nhóm'], answer: 0, explain: 'Báo cáo.' },
    { type: 'short', q: '50 cây có 20 cây phượng. Phượng chiếm bao nhiêu %?', answer: '40', unit: '%', calc: '20/50*100', explain: '40.' }
  ]
});
})();
