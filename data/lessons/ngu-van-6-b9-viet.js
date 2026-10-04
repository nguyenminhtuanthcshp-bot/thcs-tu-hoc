/* Ngữ văn 6 – Bài 9. Viết: Viết biên bản cuộc họp, cuộc thảo luận; tóm tắt bằng sơ đồ nội dung một văn bản. Biên bản và sơ đồ mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b9-viet', {
  objectives: [
    'Nêu được mục đích, yêu cầu và cấu trúc của biên bản.',
    'Viết được biên bản ghi lại một cuộc họp hoặc cuộc thảo luận đúng thể thức.',
    'Tóm tắt được nội dung chính của một văn bản đơn giản bằng sơ đồ.'
  ],
  intro: 'Cuộc họp lớp bàn kế hoạch trồng cây kết thúc, ai sẽ nhớ chính xác ai được phân công việc gì? Đó là lúc cần <b>biên bản</b>. Còn khi muốn nắm nhanh một văn bản dài, em có thể dùng <b>sơ đồ tóm tắt</b>.',
  steps: [
    { title: 'Biên bản là gì?', html: `<p><b>Biên bản</b> là loại văn bản ghi lại <b>chính xác, khách quan</b> diễn biến và kết quả của một cuộc họp, cuộc thảo luận hay một sự việc. Biên bản có giá trị làm bằng chứng, nên người ghi <b>không đưa cảm xúc, nhận xét riêng</b>.</p>` },
    { title: 'Cấu trúc biên bản', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr><tr><td>Phần mở đầu</td><td>Quốc hiệu, tiêu ngữ (với biên bản chính thức); tên biên bản; thời gian, địa điểm; thành phần tham dự (chủ trì, thư kí, người vắng).</td></tr><tr><td>Phần nội dung</td><td>Diễn biến cuộc họp: các ý kiến phát biểu, kết quả biểu quyết, kết luận, phân công.</td></tr><tr><td>Phần kết thúc</td><td>Thời gian kết thúc; chữ kí và họ tên của chủ trì (chủ toạ), thư kí.</td></tr></table>` },
    { title: 'Biên bản mẫu', html: `<p>Biên bản mẫu (nhóm biên soạn viết):</p><div class="box note"><p style="text-align:center"><b>BIÊN BẢN HỌP LỚP 6A</b><br><i>Về việc tổ chức hoạt động “Lớp học xanh”</i></p><p><b>Thời gian</b>: 15 giờ 30, thứ sáu, ngày 12 tháng 3.<br><b>Địa điểm</b>: phòng học lớp 6A.<br><b>Thành phần</b>: 38/40 học sinh (vắng 2 có phép); cô chủ nhiệm dự.<br><b>Chủ trì</b>: bạn Nguyễn Minh An (lớp trưởng). <b>Thư kí</b>: bạn Trần Thu Hà.</p><p><b>Nội dung</b>:<br>1. Lớp trưởng nêu mục đích: làm lớp học sạch, nhiều cây xanh.<br>2. Ý kiến: bạn Lan đề nghị mỗi tổ mang một chậu cây; bạn Khang đề nghị làm thùng phân loại rác; bạn Hoa đề nghị trực nhật cả giờ ra chơi.<br>3. Biểu quyết: 36/38 bạn đồng ý hai đề xuất đầu; đề xuất thứ ba chưa thông qua.<br>4. Phân công: tổ 1, 2 phụ trách cây xanh; tổ 3, 4 làm thùng phân loại rác; hoàn thành trước ngày 20 tháng 3.<br>5. Cô chủ nhiệm đồng ý kế hoạch.</p><p>Cuộc họp kết thúc lúc 16 giờ 15 cùng ngày.</p><p><b>Chủ trì</b> (kí, ghi rõ họ tên) — <b>Thư kí</b> (kí, ghi rõ họ tên)</p></div>` },
    { title: 'Tóm tắt văn bản bằng sơ đồ', html: `<p>Các bước: (1) đọc kĩ, xác định chủ đề; (2) tìm các ý chính (thường theo đề mục); (3) chọn dạng sơ đồ (tư duy, hình cây, dòng chảy); (4) ghi từ khoá ngắn gọn, nối các ý bằng đường/mũi tên.</p><p>Ví dụ sơ đồ dòng chảy tóm tắt đoạn văn nói về vòng đời một chai nhựa:</p>`,
      svg: S.flow({ items: [{ title: 'Sản xuất', text: 'Từ dầu mỏ' }, { title: 'Sử dụng', text: 'Vài phút đến vài ngày' }, { title: 'Vứt bỏ', text: 'Ra bãi rác, sông, biển' }, { title: 'Phân huỷ', text: 'Hàng trăm năm' }] }),
      caption: 'Sơ đồ tóm tắt “vòng đời một chai nhựa”.' },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Biên bản</th><th>Sơ đồ tóm tắt</th></tr><tr><td>Đủ tên, thời gian, địa điểm, thành phần</td><td>Thể hiện đúng chủ đề</td></tr><tr><td>Ghi đúng, đủ diễn biến, kết luận</td><td>Có đủ các ý chính</td></tr><tr><td>Khách quan, không cảm xúc riêng</td><td>Từ khoá ngắn gọn</td></tr><tr><td>Có chữ kí chủ trì, thư kí</td><td>Quan hệ giữa các ý rõ ràng</td></tr></table>` }
  ],
  summary: 'Biên bản ghi chính xác, khách quan diễn biến và kết quả cuộc họp/thảo luận: mở đầu (tên, thời gian, địa điểm, thành phần) – nội dung (ý kiến, biểu quyết, kết luận) – kết thúc (giờ kết thúc, chữ kí). Tóm tắt bằng sơ đồ: xác định chủ đề, ý chính, chọn dạng sơ đồ, ghi từ khoá.',
  examples: [
    { title: 'Câu không phù hợp trong biên bản', problem: 'Câu nào không nên có trong biên bản: (a) “Bạn Lan đề nghị mỗi tổ mang một chậu cây.” (b) “Bạn Lan phát biểu rất hay, ai cũng thích.”', solution: '(b) – có nhận xét, cảm xúc riêng của người ghi, không khách quan.' },
    { title: 'Thành phần biên bản', problem: 'Ai kí vào biên bản cuộc họp?', solution: 'Người chủ trì (chủ toạ) và thư kí (người ghi biên bản).' },
    { title: 'Chọn dạng sơ đồ', problem: 'Muốn tóm tắt văn bản “Rừng ngập mặn” gồm 4 đề mục, nên chọn sơ đồ nào?', solution: 'Sơ đồ tư duy: trung tâm là “Rừng ngập mặn”, 4 nhánh ứng với 4 đề mục, mỗi nhánh có vài từ khoá.' }
  ],
  exercises: [
    { question: 'Liệt kê các thông tin cần có ở phần mở đầu biên bản.', hints: ['Tên biên bản.', 'Thời gian, địa điểm, thành phần.'], solution: 'Tên biên bản (họp gì, về việc gì); thời gian; địa điểm; thành phần tham dự (có mặt, vắng); chủ trì; thư kí.' },
    { question: 'Viết lại cho khách quan: “Cuộc họp diễn ra quá dài và chán, cuối cùng mọi người cũng đồng ý trồng cây.”', hints: ['Bỏ cảm xúc “quá dài và chán”.', 'Ghi thời gian, kết quả cụ thể.'], solution: 'Ví dụ: “Cuộc họp kéo dài 45 phút. Kết quả biểu quyết: 36/38 thành viên đồng ý kế hoạch trồng cây.”' },
    { question: 'Vẽ (bằng lời) sơ đồ tóm tắt truyện “Cây tre trăm đốt” theo dạng dòng chảy.', hints: ['Mỗi ô một sự việc chính.', 'Nối bằng mũi tên theo thời gian.'], solution: 'Làm thuê ba năm → Lão lật lọng, đòi tre trăm đốt → Bụt dạy “khắc nhập, khắc xuất” → Lão dính vào tre → Anh Khoai cưới vợ.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Biên bản cần đảm bảo:', options: ['Chính xác, khách quan', 'Giàu cảm xúc', 'Có vần điệu', 'Tưởng tượng sáng tạo'], answer: 0, explain: 'Biên bản có giá trị làm bằng chứng.' },
    { type: 'mcq', q: 'Nội dung nào KHÔNG cần có trong biên bản cuộc họp?', options: ['Cảm xúc riêng của thư kí về từng thành viên', 'Thời gian, địa điểm', 'Thành phần tham dự', 'Kết luận cuộc họp'], answer: 0, explain: 'Không đưa cảm xúc riêng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biên bản cần có chữ kí của chủ trì và thư kí.', answer: true, explain: 'Xác nhận tính chính xác.' },
    { type: 'mcq', q: 'Phần nội dung biên bản ghi:', options: ['Diễn biến, ý kiến, biểu quyết, kết luận', 'Lời chào', 'Tên trường', 'Bài thơ'], answer: 0, explain: 'Diễn biến cuộc họp.' },
    { type: 'mcq', q: 'Khi tóm tắt bằng sơ đồ, nên ghi:', options: ['Từ khoá ngắn gọn', 'Cả đoạn văn dài', 'Chỉ hình vẽ, không chữ', 'Lời bình luận'], answer: 0, explain: 'Ngắn gọn, dễ nhìn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sơ đồ tư duy phù hợp để tóm tắt văn bản có nhiều đề mục.', answer: true, explain: 'Mỗi đề mục một nhánh.' },
    { type: 'mcq', q: 'Bước đầu tiên khi tóm tắt văn bản bằng sơ đồ:', options: ['Đọc kĩ, xác định chủ đề', 'Tô màu sơ đồ', 'Vẽ mũi tên', 'Viết kết luận'], answer: 0, explain: 'Hiểu văn bản trước.' },
    { type: 'mcq', q: 'Phần kết thúc biên bản gồm:', options: ['Thời gian kết thúc, chữ kí chủ trì và thư kí', 'Lời cảm ơn dài', 'Danh sách món ăn', 'Mục lục'], answer: 0, explain: 'Thể thức biên bản.' }
  ]
});
})();
