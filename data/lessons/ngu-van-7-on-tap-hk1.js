/* Ngữ văn 7 – Ôn tập học kì I (Bài 1 – Bài 5). Ví dụ do nhóm biên soạn tự viết hoặc là ca dao, tục ngữ (văn học dân gian). */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/on-tap-hk1', {
  objectives: [
    'Hệ thống hoá các thể loại đã học ở học kì I: truyện (truyện ngắn, tiểu thuyết), thơ bốn chữ – năm chữ, thơ trữ tình, tuỳ bút – tản văn.',
    'Hệ thống hoá kiến thức tiếng Việt: mở rộng thành phần câu bằng cụm từ, nói giảm nói tránh, số từ, phó từ, ngữ cảnh, dấu câu, từ ngữ địa phương.',
    'Ôn lại các kiểu bài viết, bài nói; vận dụng làm bài kiểm tra cuối kì.'
  ],
  intro: 'Năm bài học của học kì I giống như năm “khúc nhạc”: tuổi thơ, tâm hồn, yêu thương, đất nước, vùng miền. Bài ôn tập giúp em xếp chúng thành một bản đồ rõ ràng để tự tin làm bài kiểm tra.',
  steps: [
    { title: 'Bản đồ học kì I', html: `<p>Mỗi bài gắn với một thể loại đọc và một nhóm kiến thức tiếng Việt:</p>`,
      svg: S.mindmap({ center: 'Ngữ văn 7 – HK I', branches: [{ title: 'Bài 1', items: ['Truyện: đề tài, chi tiết, tính cách', 'Mở rộng câu bằng cụm từ'] }, { title: 'Bài 2', items: ['Thơ bốn chữ, năm chữ', 'Nói giảm nói tránh, điệp ngữ'] }, { title: 'Bài 3', items: ['Truyện: người kể chuyện', 'Số từ, phó từ'] }, { title: 'Bài 4', items: ['Thơ: tình cảm, cảm xúc', 'Ngữ cảnh; ngoặc đơn, ngoặc kép'] }, { title: 'Bài 5', items: ['Tuỳ bút, tản văn', 'Từ địa phương; gạch ngang'] }] }),
      caption: 'Sơ đồ tư duy tổng hợp học kì I.' },
    { title: 'So sánh các thể loại', html: `<table class="tbl"><tr><th>Thể loại</th><th>Đặc điểm nhận biết</th><th>Khi đọc cần chú ý</th></tr>
      <tr><td>Truyện ngắn, tiểu thuyết</td><td>Cốt truyện, nhân vật, người kể chuyện; đề tài, chi tiết</td><td>Tính cách nhân vật, ngôi kể, chủ đề</td></tr>
      <tr><td>Thơ bốn chữ, năm chữ</td><td>4 hoặc 5 tiếng mỗi dòng; vần chân, vần lưng; nhịp 2/2, 2/3, 3/2</td><td>Vần, nhịp, hình ảnh, biện pháp tu từ</td></tr>
      <tr><td>Thơ trữ tình (lục bát…)</td><td>Bộc lộ trực tiếp tình cảm, cảm xúc</td><td>Mạch cảm xúc, hình ảnh, giọng điệu</td></tr>
      <tr><td>Tuỳ bút, tản văn</td><td>Văn xuôi; cái tôi đậm nét; kết hợp tự sự, miêu tả, biểu cảm, nghị luận</td><td>Cảm xúc, suy tư, ngôn ngữ giàu chất thơ</td></tr></table>` },
    { title: 'Tổng hợp tiếng Việt', html: `<table class="tbl"><tr><th>Kiến thức</th><th>Ghi nhớ nhanh</th><th>Ví dụ</th></tr>
      <tr><td>Mở rộng câu bằng cụm từ</td><td>Trạng ngữ, chủ ngữ, vị ngữ có thể là cụm từ</td><td><u>Những bông hoa gạo đỏ rực</u> nở kín cành.</td></tr>
      <tr><td>Nói giảm nói tránh</td><td>Diễn đạt tế nhị, tránh đau buồn, thô tục</td><td>Cụ đã <b>về với tổ tiên</b>.</td></tr>
      <tr><td>Số từ, phó từ</td><td>Số từ chỉ số lượng, thứ tự; phó từ đi kèm DT, ĐT, TT</td><td><b>ba</b> quyển; <b>đã</b> học; <b>rất</b> đẹp</td></tr>
      <tr><td>Ngữ cảnh</td><td>Văn cảnh + tình huống giao tiếp quyết định nghĩa</td><td>tám mươi <b>xuân</b> = tám mươi tuổi</td></tr>
      <tr><td>Dấu câu</td><td>Ngoặc đơn: chú thích; ngoặc kép: lời dẫn, nghĩa đặc biệt, tên tác phẩm; gạch ngang: chú thích, lời thoại, liệt kê, liên danh</td><td>Huế – cố đô – rất đẹp.</td></tr>
      <tr><td>Từ ngữ địa phương</td><td>Dùng đúng hoàn cảnh; văn bản hành chính dùng từ toàn dân</td><td>mạ – mẹ; heo – lợn</td></tr></table>` },
    { title: 'Các kiểu bài viết và nói', html: `<table class="tbl"><tr><th>Bài</th><th>Viết</th><th>Nói và nghe</th></tr>
      <tr><td>1</td><td>Tóm tắt văn bản theo độ dài khác nhau</td><td>Trao đổi về một vấn đề em quan tâm</td></tr>
      <tr><td>2</td><td>Làm thơ bốn, năm chữ; đoạn văn cảm xúc về bài thơ</td><td>Suy nghĩ về vấn đề đời sống gợi ra từ tác phẩm</td></tr>
      <tr><td>3</td><td>Phân tích đặc điểm nhân vật</td><td>Ý kiến về vấn đề gợi ra từ nhân vật</td></tr>
      <tr><td>4</td><td>Bài văn biểu cảm về con người, sự việc</td><td>Ý kiến về hoạt động thiện nguyện</td></tr>
      <tr><td>5</td><td>Văn bản tường trình</td><td>Ý kiến về văn hoá truyền thống</td></tr></table>` },
    { title: 'Chiến lược làm bài kiểm tra', html: `<ul><li><b>Đọc hiểu</b>: xác định thể loại → người kể / chủ thể trữ tình → nội dung chính → biện pháp tu từ và tác dụng → thông điệp.</li><li><b>Tiếng Việt</b>: gạch chân đúng từ, cụm từ; gọi tên chính xác; nêu tác dụng trong ngữ cảnh.</li><li><b>Viết</b>: đọc kĩ đề, gạch chân kiểu bài; lập dàn ý 5 phút; viết đủ ba phần; dành 5 phút soát lỗi.</li></ul>
      <div class="box tip">Với câu hỏi “nêu tác dụng”, luôn trả lời cả hai mặt: hình thức (nhịp điệu, gợi hình…) và nội dung (nhấn mạnh điều gì, thể hiện cảm xúc gì).</div>` }
  ],
  summary: 'Học kì I: đọc truyện (đề tài, chi tiết, tính cách, người kể chuyện), thơ bốn – năm chữ, thơ trữ tình, tuỳ bút – tản văn; tiếng Việt: mở rộng câu bằng cụm từ, nói giảm nói tránh, điệp ngữ, liệt kê, số từ, phó từ, ngữ cảnh, dấu ngoặc đơn – ngoặc kép – gạch ngang, từ ngữ địa phương; viết: tóm tắt, làm thơ, phân tích nhân vật, biểu cảm, tường trình; nói: trình bày ý kiến về các vấn đề đời sống.',
  examples: [
    { title: 'Nhận diện thể loại', problem: 'Một văn bản văn xuôi ngắn, người viết xưng “tôi”, kể chuyện chiếc xe đạp cũ của bố rồi suy ngẫm về sự tần tảo của bố. Đó là thể loại gì?', solution: 'Tản văn: văn xuôi ngắn, viết về chuyện đời thường, kết hợp tự sự và suy ngẫm (nghị luận), bộc lộ cái tôi của người viết.' },
    { title: 'Số từ và phó từ', problem: 'Tìm số từ, phó từ trong câu: “Hai chú chim sẻ vẫn đang ríu rít trên cành.”', solution: 'Số từ: “hai” (chỉ số lượng). Phó từ: “vẫn” (tiếp diễn), “đang” (thời gian) bổ sung ý nghĩa cho động từ “ríu rít”.' },
    { title: 'Nói giảm nói tránh', problem: 'Chuyển câu sau sang cách nói tế nhị: “Bài hát của bạn dở quá.”', solution: 'Ví dụ: “Bài hát của bạn chưa thật hay, bạn luyện thêm phần điệp khúc chắc chắn sẽ tốt hơn.”' }
  ],
  exercises: [
    { question: 'Xác định thể thơ, cách gieo vần và nhịp trong đoạn đồng dao: “Chi chi chành chành / Cái đanh thổi lửa / Con ngựa chết trương / Ba vương ngũ đế.” (đồng dao dân gian)', hints: ['Đếm số tiếng mỗi dòng.', 'Tiếng cuối dòng trên vần với tiếng thứ mấy của dòng dưới?'], solution: 'Thể thơ bốn chữ (mỗi dòng 4 tiếng). Gieo vần lưng: “chành – đanh”, “lửa – ngựa”, “trương – vương” (tiếng cuối dòng trên vần với tiếng thứ hai dòng dưới). Nhịp 2/2: “Chi chi / chành chành; Cái đanh / thổi lửa”.' },
    { question: 'Đặt dấu câu thích hợp: Mẹ dặn Con nhớ mang áo mưa nhé ; Tràng An danh thắng ở Ninh Bình là di sản thế giới.', hints: ['Câu 1 có lời dẫn trực tiếp.', 'Câu 2 có phần chú thích cho “Tràng An” (có thể dùng gạch ngang hoặc ngoặc đơn).'], solution: 'Mẹ dặn: “Con nhớ mang áo mưa nhé!” – Tràng An – danh thắng ở Ninh Bình – là di sản thế giới. (hoặc: Tràng An (danh thắng ở Ninh Bình) là di sản thế giới.)' },
    { question: 'Lập dàn ý ngắn cho đề: “Viết bài văn biểu cảm về người bạn thân của em”.', hints: ['Mở bài: giới thiệu bạn, tình cảm chung.', 'Thân bài: đặc điểm, kỉ niệm, cảm xúc.'], solution: 'MB: giới thiệu bạn Minh – người bạn thân từ lớp 1; em quý bạn như anh em. TB: ngoại hình, tính cách (vui vẻ, hay giúp đỡ); kỉ niệm: bạn chép bài giúp em khi em ốm; lần hai đứa giận nhau rồi làm lành; cảm xúc: biết ơn, trân trọng. KB: khẳng định tình bạn, mong giữ mãi tình bạn đẹp.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Thể loại nào có đặc điểm “cái tôi đậm nét, ghi chép tự do cảm xúc, suy tư”?', options: ['Tuỳ bút', 'Truyện cổ tích', 'Văn bản thông tin', 'Tường trình'], answer: 0, explain: 'Đặc điểm của tuỳ bút.' },
    { type: 'short', q: 'Thơ bốn chữ có mỗi dòng bao nhiêu tiếng?', answer: ['4', 'bốn'], answerText: '4 tiếng', explain: 'Bốn chữ = 4 tiếng.' },
    { type: 'mcq', q: 'Từ “những” trong “những bông hoa” là:', options: ['Phó từ', 'Số từ', 'Danh từ', 'Tính từ'], answer: 0, explain: 'Phó từ đi kèm danh từ, chỉ số lượng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Cụ ấy đã yên nghỉ” là cách nói giảm nói tránh.', answer: true, explain: '“Yên nghỉ” thay cho “chết”.' },
    { type: 'mcq', q: 'Người kể chuyện xưng “tôi” là người kể ngôi thứ:', options: ['Nhất', 'Hai', 'Ba', 'Không xác định'], answer: 0, explain: 'Ngôi thứ nhất.' },
    { type: 'mcq', q: 'Dấu ngoặc đơn dùng để:', options: ['Đánh dấu phần chú thích', 'Đánh dấu lời dẫn trực tiếp', 'Kết thúc câu hỏi', 'Nối các tiếng trong từ phiên âm'], answer: 0, explain: 'Công dụng của dấu ngoặc đơn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Văn bản tường trình nên dùng nhiều từ ngữ địa phương và biện pháp tu từ.', answer: false, explain: 'Tường trình dùng từ ngữ toàn dân, chính xác, khách quan.' },
    { type: 'mcq', q: 'Trong “Bà đã ngoài tám mươi xuân”, muốn hiểu đúng từ “xuân” cần dựa vào:', options: ['Ngữ cảnh', 'Số nét chữ', 'Màu mực', 'Độ dài câu'], answer: 0, explain: 'Ngữ cảnh giúp xác định nghĩa của từ.' }
  ]
});
})();
