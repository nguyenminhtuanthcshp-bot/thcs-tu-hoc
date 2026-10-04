/* Ngữ văn 8 – Bài 3. Thực hành tiếng Việt: Đoạn văn diễn dịch, quy nạp, song song, phối hợp. Tất cả đoạn văn ví dụ do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b3-tv', {
  objectives: [
    'Nhận biết được câu chủ đề và các kiểu đoạn văn: diễn dịch, quy nạp, song song, phối hợp.',
    'Phân tích được mối quan hệ giữa câu chủ đề và các câu triển khai trong đoạn.',
    'Viết được đoạn văn theo từng kiểu, phù hợp với mục đích trình bày.'
  ],
  intro: 'Cùng một nội dung, có người nói “kết luận trước, giải thích sau”, có người lại “kể dần rồi mới chốt”. Trong viết văn cũng vậy: vị trí của câu chủ đề quyết định kiểu đoạn văn. Hãy cùng tìm hiểu bốn kiểu đoạn văn thường gặp.',
  text: {
    title: 'Bốn đoạn văn mẫu',
    html: `<p><b>(1)</b> <u>Tiếng Việt của chúng ta rất giàu và đẹp.</u> Tiếng Việt có hệ thống thanh điệu phong phú khiến lời nói du dương như lời hát. Vốn từ tiếng Việt dồi dào, có thể diễn tả những sắc thái tinh tế của tình cảm. Ngữ pháp tiếng Việt linh hoạt, giúp câu văn vừa chặt chẽ vừa uyển chuyển.</p>
<p><b>(2)</b> Mỗi sáng, bác lao công đã quét sạch con đường trước cổng trường. Chú bảo vệ đứng giữa dòng xe, nhắc các em nhỏ sang đường cẩn thận. Cô nhân viên thư viện lặng lẽ dán lại từng cuốn sách rách. <u>Ngôi trường bình yên của chúng ta được làm nên từ biết bao bàn tay thầm lặng.</u></p>
<p><b>(3)</b> Mùa xuân, làng tôi rộn ràng hội đình. Mùa hạ, cánh đồng vàng rực lúa chín, thơm lừng mùi rơm mới. Mùa thu, trẻ con rước đèn ông sao dưới trăng rằm. Mùa đông, cả nhà quây quần bên bếp lửa nghe bà kể chuyện.</p>
<p><b>(4)</b> <u>Đọc sách là thói quen quý giá.</u> Sách mở ra cho ta những vùng đất chưa từng đặt chân tới, những con người chưa từng gặp. Sách giúp ta hiểu người khác và hiểu chính mình. <u>Vì vậy, hãy dành cho sách một chút thời gian mỗi ngày.</u></p>`,
    source: 'Các đoạn văn mẫu do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Câu chủ đề và bốn kiểu đoạn văn', html: `<p><b>Câu chủ đề</b> là câu mang ý khái quát của cả đoạn, thường ngắn gọn, đủ thành phần chính. Dựa vào vị trí của câu chủ đề (hoặc không có câu chủ đề), ta có bốn kiểu đoạn văn:</p>`,
      svg: S.mindmap({ center: 'Kiểu đoạn văn', branches: [{ title: 'Diễn dịch', items: ['Câu chủ đề ở đầu đoạn'] }, { title: 'Quy nạp', items: ['Câu chủ đề ở cuối đoạn'] }, { title: 'Song song', items: ['Không có câu chủ đề', 'Các câu ngang hàng'] }, { title: 'Phối hợp', items: ['Câu chủ đề ở đầu và cuối đoạn'] }] }),
      caption: 'Phân loại đoạn văn theo vị trí câu chủ đề.' },
    { title: 'Đoạn diễn dịch và đoạn quy nạp', html: `<table class="tbl"><tr><th></th><th>Diễn dịch – đoạn (1)</th><th>Quy nạp – đoạn (2)</th></tr>
      <tr><td>Câu chủ đề</td><td>Đứng đầu: “Tiếng Việt … rất giàu và đẹp.”</td><td>Đứng cuối: “Ngôi trường bình yên … bàn tay thầm lặng.”</td></tr>
      <tr><td>Cách triển khai</td><td>Từ khái quát đến cụ thể: các câu sau giải thích, chứng minh</td><td>Từ cụ thể đến khái quát: các câu trước nêu ví dụ, dẫn tới kết luận</td></tr>
      <tr><td>Hiệu quả</td><td>Rõ ràng, người đọc nắm ý ngay</td><td>Tạo sự dẫn dắt, kết luận có sức nặng</td></tr></table>` },
    { title: 'Đoạn song song', html: `<p>Đoạn (3) không có câu chủ đề; bốn câu có vai trò <b>ngang hàng</b>, cùng làm rõ một nội dung chung (vẻ đẹp làng quê qua bốn mùa). Các câu thường có cấu trúc giống nhau (<i>Mùa xuân…, Mùa hạ…, Mùa thu…, Mùa đông…</i>), có thể đổi vị trí mà không làm thay đổi ý đoạn.</p>
      <div class="box key">Mẹo nhận biết: nếu không tìm được câu nào khái quát cho các câu còn lại, và các câu có thể hoán đổi – đó là đoạn song song.</div>` },
    { title: 'Đoạn phối hợp', html: `<p>Đoạn (4) có câu chủ đề ở <b>đầu</b> (“Đọc sách là thói quen quý giá.”) và câu ở <b>cuối</b> nhắc lại, mở rộng ý chủ đề dưới dạng lời khuyên (“Vì vậy, hãy dành cho sách…”). Kiểu đoạn này vừa rõ ràng vừa nhấn mạnh, hay dùng trong văn nghị luận.</p>
      <p>Các từ ngữ báo hiệu câu kết của đoạn quy nạp, phối hợp: <i>vì vậy, tóm lại, như vậy, do đó, có thể nói</i>.</p>` },
    { title: 'Cách viết đoạn văn theo kiểu cho trước', html: `<ol><li>Xác định ý chính → viết thành câu chủ đề ngắn gọn.</li><li>Tìm 3 – 4 ý triển khai (lí lẽ, ví dụ, chi tiết).</li><li>Sắp xếp theo kiểu yêu cầu: câu chủ đề đầu (diễn dịch), cuối (quy nạp), đầu và cuối (phối hợp), hoặc bỏ câu chủ đề (song song).</li><li>Dùng từ ngữ liên kết phù hợp; đọc lại kiểm tra các câu có cùng hướng về ý chính không.</li></ol>` }
  ],
  summary: 'Câu chủ đề mang ý khái quát của đoạn. Đoạn diễn dịch có câu chủ đề ở đầu; đoạn quy nạp có câu chủ đề ở cuối; đoạn song song không có câu chủ đề, các câu ngang hàng cùng làm rõ một nội dung; đoạn phối hợp có câu chủ đề ở đầu và câu khái quát ở cuối. Chọn kiểu đoạn phù hợp giúp trình bày rõ ràng, thuyết phục.',
  examples: [
    { title: 'Nhận diện kiểu đoạn', problem: 'Đoạn sau thuộc kiểu nào? “Bạn Minh luôn giúp các bạn học yếu làm bài. Bạn Lan nhận chăm sóc bồn hoa của lớp. Bạn Hùng tự nguyện trực nhật thay bạn ốm. Có thể nói, lớp 8A là một tập thể giàu tinh thần sẻ chia.”', solution: 'Đoạn quy nạp: ba câu đầu nêu những việc làm cụ thể; câu cuối (có từ “Có thể nói”) là câu chủ đề khái quát “lớp 8A là một tập thể giàu tinh thần sẻ chia”.' },
    { title: 'Chuyển đoạn diễn dịch thành quy nạp', problem: 'Chuyển đoạn (1) “Tiếng Việt của chúng ta rất giàu và đẹp…” thành đoạn quy nạp.', solution: 'Tiếng Việt có hệ thống thanh điệu phong phú khiến lời nói du dương như lời hát. Vốn từ tiếng Việt dồi dào, có thể diễn tả những sắc thái tinh tế của tình cảm. Ngữ pháp tiếng Việt linh hoạt, giúp câu văn vừa chặt chẽ vừa uyển chuyển. Tất cả những điều ấy cho thấy tiếng Việt của chúng ta rất giàu và đẹp.' },
    { title: 'Phân biệt song song và diễn dịch', problem: 'Đoạn: “Bà tôi dậy từ lúc gà gáy. Bà quét sân, nhóm bếp, nấu nồi cháo cho cả nhà. Bà ra vườn tưới rau khi trời còn mờ sương.” là đoạn song song hay diễn dịch?', solution: 'Đây là đoạn song song: không có câu nào khái quát cho các câu còn lại; các câu ngang hàng cùng kể những việc làm buổi sớm của bà. Nếu thêm câu đầu “Bà tôi là người chăm chỉ nhất nhà.”, đoạn sẽ trở thành diễn dịch.' }
  ],
  exercises: [
    { question: 'Viết một đoạn diễn dịch (4 – 5 câu) với câu chủ đề: “Học sinh có thể góp phần bảo vệ môi trường từ những việc nhỏ.”', hints: ['Đặt câu chủ đề ở đầu đoạn.', 'Các câu sau nêu việc làm cụ thể: phân loại rác, tiết kiệm điện, trồng cây…'], solution: 'Ví dụ: Học sinh có thể góp phần bảo vệ môi trường từ những việc nhỏ. Mỗi bạn có thể mang bình nước riêng thay vì dùng chai nhựa dùng một lần. Ở lớp, chúng ta tắt đèn, quạt khi ra về và phân loại rác vào đúng thùng. Cuối tuần, các bạn có thể cùng gia đình trồng thêm cây xanh hoặc tham gia nhặt rác ở công viên. Những việc làm ấy tuy nhỏ nhưng rất thiết thực.' },
    { question: 'Viết lại đoạn ở bài tập 1 thành đoạn phối hợp.', hints: ['Giữ câu chủ đề ở đầu.', 'Thêm câu kết khái quát, mở rộng ở cuối (dùng “Vì vậy”, “Như vậy”…).'], solution: 'Giữ nguyên các câu của đoạn diễn dịch, thay câu cuối bằng câu khái quát: “Như vậy, bảo vệ môi trường không phải là việc của riêng ai, mà bắt đầu từ chính những thói quen hằng ngày của mỗi học sinh.” Đoạn có câu chủ đề ở đầu và câu khái quát ở cuối nên là đoạn phối hợp.' },
    { question: 'Xác định kiểu đoạn và câu chủ đề (nếu có): “Ông bà dạy ta biết kính trên nhường dưới. Cha mẹ dạy ta biết yêu thương, sẻ chia. Thầy cô dạy ta biết học hỏi và sống tử tế. Bạn bè giúp ta biết lắng nghe và cảm thông.”', hints: ['Có câu nào mang ý khái quát cho cả đoạn không?', 'Các câu có cấu trúc giống nhau và có thể đổi chỗ không?'], solution: 'Đoạn song song: không có câu chủ đề; bốn câu ngang hàng, có cấu trúc tương tự (Ai – dạy/giúp ta biết…), cùng làm rõ nội dung chung: mỗi người thân quanh ta đều dạy ta những bài học quý.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đoạn văn có câu chủ đề đứng ở đầu đoạn là đoạn:', options: ['diễn dịch', 'quy nạp', 'song song', 'phối hợp'], answer: 0, explain: 'Diễn dịch: từ khái quát đến cụ thể.' },
    { type: 'mcq', q: 'Đoạn văn có câu chủ đề ở cả đầu và cuối đoạn là đoạn:', options: ['phối hợp', 'diễn dịch', 'quy nạp', 'song song'], answer: 0, explain: 'Kết hợp diễn dịch và quy nạp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đoạn song song không có câu chủ đề, các câu có vai trò ngang hàng.', answer: true, explain: 'Đặc điểm của đoạn song song.' },
    { type: 'short', q: 'Đoạn (2) trong bài (về những bàn tay thầm lặng) thuộc kiểu đoạn văn gì?', answer: ['quy nạp', 'quy nap'], answerText: 'quy nạp', explain: 'Câu chủ đề ở cuối đoạn.' },
    { type: 'mcq', q: 'Từ ngữ nào thường mở đầu câu kết của đoạn quy nạp?', options: ['Tóm lại', 'Ví dụ', 'Thứ nhất', 'Ngày xưa'], answer: 0, explain: '“Tóm lại, như vậy, vì vậy…” báo hiệu câu khái quát.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong đoạn diễn dịch, các câu sau câu chủ đề có nhiệm vụ giải thích, chứng minh cho câu chủ đề.', answer: true, explain: 'Triển khai từ khái quát đến cụ thể.' },
    { type: 'short', q: 'Câu mang ý khái quát của cả đoạn văn được gọi là câu gì (câu …)?', answer: ['chủ đề', 'câu chủ đề'], answerText: 'câu chủ đề', explain: 'Câu chủ đề.' },
    { type: 'mcq', q: 'Đoạn “Mùa xuân…, Mùa hạ…, Mùa thu…, Mùa đông…” trong bài là đoạn:', options: ['song song', 'diễn dịch', 'quy nạp', 'phối hợp'], answer: 0, explain: 'Không có câu chủ đề, các câu ngang hàng.' }
  ]
});
})();
