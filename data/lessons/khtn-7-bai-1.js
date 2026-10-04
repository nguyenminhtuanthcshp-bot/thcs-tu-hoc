/* KHTN 7 – Bài 1. Phương pháp và kĩ năng học tập môn Khoa học tự nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-1', {
  objectives: [
    'Trình bày được các bước của phương pháp tìm hiểu tự nhiên.',
    'Thực hiện được các kĩ năng tiến trình: quan sát, phân loại, liên kết, đo, dự báo.',
    'Biết sử dụng đồng hồ đo thời gian hiện số dùng cổng quang điện.',
    'Làm được báo cáo, thuyết trình ngắn về một vấn đề đã tìm hiểu.'
  ],
  intro: 'Các nhà khoa học không “đoán mò”. Họ làm việc theo một <b>phương pháp</b> có các bước rõ ràng. Em cũng có thể học KHTN như một nhà khoa học nhỏ!',
  steps: [
    { title: 'Phương pháp tìm hiểu tự nhiên (5 bước)', html: `<ol><li><b>Quan sát và đặt câu hỏi</b> nghiên cứu.</li><li><b>Hình thành giả thuyết</b> (câu trả lời dự đoán cho câu hỏi).</li><li><b>Lập kế hoạch</b> kiểm tra giả thuyết.</li><li><b>Thực hiện kế hoạch</b> (làm thí nghiệm, thu thập số liệu, phân tích) → kết luận giả thuyết đúng hay sai.</li><li><b>Viết báo cáo</b>, thảo luận và trình bày báo cáo.</li></ol>
      <div class="box note">Nếu giả thuyết sai, ta quay lại bước 2 để đưa ra giả thuyết mới.</div>`,
      svg: S.flow({ items: ['1. Quan sát, đặt câu hỏi nghiên cứu', '2. Hình thành giả thuyết', '3. Lập kế hoạch kiểm tra giả thuyết', '4. Thực hiện kế hoạch', '5. Viết báo cáo, thảo luận, trình bày'], vertical: true, w: 420, size: 15 }),
      caption: 'Năm bước của phương pháp tìm hiểu tự nhiên.' },
    { title: 'Một ví dụ', html: `<p><b>Câu hỏi:</b> Muối ăn tan nhanh hơn trong nước nóng hay nước lạnh?</p>
      <p><b>Giả thuyết:</b> Muối tan nhanh hơn trong nước nóng.</p>
      <p><b>Kế hoạch:</b> Lấy hai cốc nước như nhau (một nóng, một lạnh), cho cùng một lượng muối, khuấy như nhau, đo thời gian muối tan hết.</p>
      <p><b>Thực hiện và kết luận:</b> Cốc nước nóng tan hết trước ⇒ giả thuyết đúng. Cuối cùng viết báo cáo và trình bày.</p>` },
    { title: 'Các kĩ năng học tập KHTN', html: `<ul><li><b>Quan sát, phân loại:</b> dùng giác quan (và dụng cụ) để thu thập thông tin; sắp xếp sự vật thành các nhóm theo đặc điểm chung.</li><li><b>Liên kết:</b> tìm ra mối liên hệ giữa các sự vật, hiện tượng (ví dụ: mây đen kéo đến – trời sắp mưa).</li><li><b>Đo:</b> dùng dụng cụ để xác định giá trị của đại lượng (độ dài, khối lượng, thời gian, nhiệt độ…).</li><li><b>Dự báo:</b> dựa vào hiểu biết và số liệu để nói trước điều có thể xảy ra.</li></ul>` },
    { title: 'Đồng hồ đo thời gian hiện số', html: `<p>Để đo những khoảng thời gian rất ngắn (vài phần trăm giây), người ta dùng <b>đồng hồ đo thời gian hiện số</b> kết hợp <b>cổng quang điện</b>.</p>
      <p>Khi vật đi qua cổng quang điện, nó chắn tia sáng hồng ngoại; tín hiệu được gửi về đồng hồ để <b>bắt đầu</b> hoặc <b>dừng</b> đếm. Núm chọn chế độ (MODE) cho phép đo thời gian vật đi qua một cổng, hoặc đi từ cổng A đến cổng B.</p>
      <p>Đo được thời gian t và quãng đường s giữa hai cổng, ta tính được tốc độ v = {{s|t}}.</p>`,
      svg: S.photoGate({ s: '0,50 m', t: '0,250 s' }), caption: 'Xe đi qua hai cổng quang điện; đồng hồ hiện số cho biết thời gian xe đi từ cổng 1 đến cổng 2.' }
  ],
  summary: '5 bước: quan sát – đặt câu hỏi → giả thuyết → lập kế hoạch → thực hiện → báo cáo. Kĩ năng: quan sát, phân loại, liên kết, đo, dự báo. Đồng hồ hiện số và cổng quang điện đo được khoảng thời gian rất ngắn.',
  examples: [
    { title: 'Nhận diện bước', problem: '“Em nghĩ rằng cây đậu sẽ mọc cao hơn nếu được tưới nước đều mỗi ngày.” Câu này thuộc bước nào của phương pháp tìm hiểu tự nhiên?', solution: 'Bước 2 – hình thành giả thuyết (một câu trả lời dự đoán, cần được kiểm tra).' },
    { title: 'Kĩ năng phân loại', problem: 'Phân loại các vật sau thành hai nhóm: con mèo, cái cốc, cây lúa, viên phấn, con cá.', solution: 'Theo tiêu chí vật sống / không sống: Vật sống: con mèo, cây lúa, con cá. Vật không sống: cái cốc, viên phấn.' },
    { title: 'Tính tốc độ từ số liệu đo', problem: 'Một viên bi lăn qua hai cổng quang điện cách nhau 0,5 m, đồng hồ chỉ 0,25 s. Tính tốc độ trung bình của bi.', solution: 'v = {{s|t}} = {{0,5|0,25}} = 2 (m/s).' }
  ],
  exercises: [
    { question: 'Sắp xếp các việc sau theo đúng thứ tự: (a) làm thí nghiệm; (b) viết báo cáo; (c) đặt câu hỏi; (d) đưa ra giả thuyết; (e) lập kế hoạch.', hints: ['Luôn bắt đầu từ quan sát và câu hỏi.', 'Giả thuyết có trước kế hoạch; báo cáo ở cuối cùng.'], solution: '(c) → (d) → (e) → (a) → (b).' },
    { question: '“Thấy chuồn chuồn bay thấp, bà đoán trời sắp mưa.” Bà đã dùng những kĩ năng nào?', hints: ['Bà nhìn thấy chuồn chuồn bay thấp – đó là kĩ năng gì?', 'Nói trước điều sắp xảy ra là kĩ năng gì?'], solution: 'Kĩ năng quan sát, liên kết (liên hệ chuồn chuồn bay thấp với trời mưa) và dự báo.' },
    { question: 'Một xe đồ chơi đi qua hai cổng quang điện cách nhau 0,6 m trong 0,4 s. Tính tốc độ của xe.', hints: ['Dùng công thức v = s : t.', 's = 0,6 m; t = 0,4 s.'], solution: 'v = 0,6 : 0,4 = 1,5 (m/s).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bước đầu tiên của phương pháp tìm hiểu tự nhiên là:', options: ['Hình thành giả thuyết', 'Quan sát và đặt câu hỏi nghiên cứu', 'Viết báo cáo', 'Lập kế hoạch'], answer: 1, explain: 'Mọi nghiên cứu bắt đầu từ quan sát và đặt câu hỏi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu kết quả thí nghiệm cho thấy giả thuyết sai, ta cần đưa ra giả thuyết mới.', answer: true, explain: 'Khi giả thuyết sai, quay lại bước hình thành giả thuyết.' },
    { type: 'mcq', q: 'Chia các con vật thành nhóm “có xương sống” và “không có xương sống” là kĩ năng:', options: ['Đo', 'Dự báo', 'Phân loại', 'Liên kết'], answer: 2, explain: 'Sắp xếp thành nhóm theo đặc điểm chung là kĩ năng phân loại.' },
    { type: 'mcq', q: 'Dụng cụ nào thích hợp để đo khoảng thời gian rất ngắn khi viên bi đi qua một đoạn đường nhỏ?', options: ['Đồng hồ treo tường', 'Đồng hồ đo thời gian hiện số với cổng quang điện', 'Nhiệt kế', 'Cân đồng hồ'], answer: 1, explain: 'Đồng hồ hiện số kết hợp cổng quang điện đo được khoảng thời gian rất ngắn.' },
    { type: 'short', q: 'Viên bi đi được 1,2 m trong 0,6 s. Tốc độ của bi là bao nhiêu m/s?', answer: '2', unit: 'm/s', calc: '1.2/0.6', explain: 'v = 1,2 : 0,6 = 2 (m/s).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giả thuyết là kết luận chắc chắn đúng, không cần kiểm tra.', answer: false, explain: 'Giả thuyết chỉ là dự đoán, cần được kiểm tra bằng thí nghiệm.' },
    { type: 'mcq', q: 'Bước cuối cùng của phương pháp tìm hiểu tự nhiên là:', options: ['Thực hiện kế hoạch', 'Đặt câu hỏi', 'Viết báo cáo, thảo luận và trình bày', 'Hình thành giả thuyết'], answer: 2, explain: 'Kết quả được viết thành báo cáo và trình bày, thảo luận.' },
    { type: 'mcq', q: '“Nhìn đám mây đen, em nói: chiều nay có thể mưa.” Đây chủ yếu là kĩ năng:', options: ['Đo', 'Dự báo', 'Phân loại', 'Viết báo cáo'], answer: 1, explain: 'Nói trước điều có thể xảy ra dựa trên quan sát là kĩ năng dự báo.' }
  ]
});
})();
