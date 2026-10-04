/* Ngữ văn 6 – Bài 10. Đọc: Đọc sách tự chọn và sáng tạo sản phẩm minh hoạ cho cuốn sách. Chỉ gợi ý các tác phẩm thuộc phạm vi công cộng (tác giả mất trên 50 năm) và truyện dân gian; không trích dẫn bản dịch. Nội dung hướng dẫn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b10-doc', {
  objectives: [
    'Biết chọn sách phù hợp, lập kế hoạch đọc và ghi nhật kí đọc sách.',
    'Nắm được nội dung chính, nhân vật, thông điệp của cuốn sách đã đọc.',
    'Sáng tạo được một sản phẩm minh hoạ cho cuốn sách (tranh, bookmark, áp phích, sơ đồ nhân vật, truyện tranh ngắn…).'
  ],
  intro: 'Bài học cuối năm không có văn bản bắt buộc – em được tự chọn một cuốn sách mình yêu thích, đọc thật kĩ và “kể lại” cuốn sách bằng một sản phẩm sáng tạo của riêng mình.',
  steps: [
    { title: 'Chọn sách', html: `<p>Chọn sách phù hợp lứa tuổi, hấp dẫn với em. Một số gợi ý là tác phẩm kinh điển đã thuộc phạm vi công cộng hoặc văn học dân gian:</p>
      <table class="tbl"><tr><th>Sách</th><th>Tác giả</th><th>Thể loại</th></tr><tr><td>Truyện cổ Andersen (Nàng tiên cá, Bộ quần áo mới của hoàng đế, Vịt con xấu xí…)</td><td>H. C. Andersen (Đan Mạch, 1805–1875)</td><td>Truyện cổ tích</td></tr><tr><td>Không gia đình</td><td>Hector Malot (Pháp, 1830–1907)</td><td>Tiểu thuyết</td></tr><tr><td>Những cuộc phiêu lưu của Tom Sawyer</td><td>Mark Twain (Mĩ, 1835–1910)</td><td>Tiểu thuyết</td></tr><tr><td>Truyện cổ tích, truyền thuyết Việt Nam</td><td>Dân gian</td><td>Truyện dân gian</td></tr></table>
      <p>Em cũng có thể chọn sách ở thư viện trường theo gợi ý của thầy cô.</p>` },
    { title: 'Lập kế hoạch và nhật kí đọc', html: `<p>Chia sách thành các phần, mỗi ngày đọc 15–20 phút. Ghi nhật kí đọc sách:</p>
      <table class="tbl"><tr><th>Ngày</th><th>Đọc đến</th><th>Sự việc chính</th><th>Nhân vật / chi tiết ấn tượng</th><th>Câu hỏi, suy nghĩ</th></tr><tr><td>1/5</td><td>Chương 1–2</td><td>…</td><td>…</td><td>…</td></tr></table>` },
    { title: 'Tìm hiểu cuốn sách', html: `<p>Sau khi đọc, trả lời các câu hỏi:</p>`,
      svg: S.mindmap({ center: 'Cuốn sách em đọc', branches: [{ title: 'Thông tin', items: ['Tên, tác giả', 'Thể loại'] }, { title: 'Nội dung', items: ['Sự việc chính', 'Kết thúc'] }, { title: 'Nhân vật', items: ['Tính cách', 'Chi tiết tiêu biểu'] }, { title: 'Thông điệp', items: ['Bài học', 'Liên hệ bản thân'] }] }),
      caption: 'Sơ đồ phiếu tìm hiểu cuốn sách.' },
    { title: 'Sáng tạo sản phẩm minh hoạ', html: `<table class="tbl"><tr><th>Sản phẩm</th><th>Gợi ý thực hiện</th></tr><tr><td>Tranh minh hoạ</td><td>Vẽ cảnh ấn tượng nhất, kèm một câu chú thích bằng lời của em.</td></tr><tr><td>Bookmark (thẻ đánh dấu sách)</td><td>Mặt trước: hình nhân vật; mặt sau: thông điệp của sách.</td></tr><tr><td>Áp phích giới thiệu sách</td><td>Tên sách, tác giả, hình ảnh, 3 lí do nên đọc.</td></tr><tr><td>Sơ đồ nhân vật</td><td>Các nhân vật và mối quan hệ, nối bằng mũi tên.</td></tr><tr><td>Truyện tranh 4 khung</td><td>Tóm tắt 4 sự việc chính.</td></tr></table>
      <div class="box tip">Khi trích dẫn, chỉ dùng câu ngắn và ghi rõ nguồn; phần lớn nội dung nên là lời của em.</div>` },
    { title: 'Ví dụ: áp phích cho “Bộ quần áo mới của hoàng đế” (Andersen)', html: `<div class="box note"><p><b>BỘ QUẦN ÁO MỚI CỦA HOÀNG ĐẾ</b> – H. C. Andersen</p><p>Hình vẽ: đoàn diễu hành, cậu bé chỉ tay về phía nhà vua.</p><p>Ba lí do nên đọc: (1) truyện ngắn, hài hước; (2) nhân vật cậu bé dũng cảm nói sự thật; (3) bài học: đừng vì sợ bị chê mà nói theo số đông.</p><p>Lời giới thiệu (của người làm áp phích): “Một câu nói thật của đứa trẻ có thể làm cả vương quốc tỉnh ngộ!”</p></div>` }
  ],
  summary: 'Đọc sách tự chọn: chọn sách phù hợp, lập kế hoạch và ghi nhật kí đọc; tìm hiểu thông tin, nội dung, nhân vật, thông điệp; sáng tạo sản phẩm minh hoạ (tranh, bookmark, áp phích, sơ đồ nhân vật, truyện tranh) bằng lời và hình ảnh của chính mình.',
  examples: [
    { title: 'Ghi nhật kí đọc', problem: 'Viết một dòng nhật kí đọc sau khi đọc truyện “Vịt con xấu xí”.', solution: 'Ví dụ: Ngày 3/5 – Đọc hết truyện. Sự việc chính: vịt con bị chê xấu, bỏ đi, trải qua mùa đông khắc nghiệt, cuối cùng hoá thành thiên nga. Ấn tượng: lúc vịt con nhìn thấy bóng mình dưới nước. Suy nghĩ: đừng vội đánh giá ai qua vẻ ngoài.' },
    { title: 'Chọn sản phẩm phù hợp', problem: 'Với một tiểu thuyết có nhiều nhân vật như “Không gia đình”, sản phẩm nào phù hợp để giúp người khác dễ theo dõi?', solution: 'Sơ đồ nhân vật – thể hiện nhân vật chính và các mối quan hệ, giúp người đọc nắm câu chuyện dài.' },
    { title: 'Viết thông điệp cho bookmark', problem: 'Viết thông điệp ngắn cho bookmark truyện “Cây tre trăm đốt”.', solution: 'Ví dụ: “Thật thà, chăm chỉ – rồi phép màu sẽ đến. Giữ lời hứa – để không phải ‘dính’ vào cây tre!”' }
  ],
  exercises: [
    { question: 'Lập kế hoạch đọc một cuốn sách khoảng 150 trang trong 2 tuần.', hints: ['Chia số trang cho số ngày.', 'Dành ngày cuối để làm sản phẩm.'], solution: 'Ví dụ: 12 ngày đọc, mỗi ngày khoảng 12–13 trang (15–20 phút); 2 ngày cuối ôn lại nhật kí, làm sản phẩm minh hoạ.' },
    { question: 'Nêu các nội dung cần có trên áp phích giới thiệu sách.', hints: ['Thông tin cơ bản về sách.', 'Hình ảnh và lí do nên đọc.'], solution: 'Tên sách, tác giả; hình ảnh minh hoạ; tóm tắt ngắn hoặc câu giới thiệu hấp dẫn; 2–3 lí do nên đọc.' },
    { question: 'Tóm tắt một truyện em đã đọc thành 4 khung truyện tranh (viết lời cho mỗi khung).', hints: ['Khung 1: mở đầu; khung 4: kết thúc.', 'Mỗi khung một câu ngắn.'], solution: 'Ví dụ “Sự tích Hồ Gươm”: (1) Giặc Minh đô hộ, nghĩa quân Lam Sơn còn yếu. (2) Lê Thận vớt lưỡi gươm, Lê Lợi thấy chuôi gươm trên cây đa. (3) Gươm thần giúp nghĩa quân đánh tan giặc. (4) Rùa Vàng đòi gươm, hồ được gọi là Hoàn Kiếm.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nhật kí đọc sách giúp em:', options: ['Ghi lại sự việc, cảm nghĩ trong quá trình đọc', 'Chép lại toàn bộ sách', 'Chấm điểm bạn', 'Không có tác dụng'], answer: 0, explain: 'Theo dõi và suy ngẫm.' },
    { type: 'mcq', q: 'Sản phẩm nào phù hợp để thể hiện mối quan hệ giữa các nhân vật?', options: ['Sơ đồ nhân vật', 'Bookmark một mặt trắng', 'Bài hát', 'Bảng cửu chương'], answer: 0, explain: 'Sơ đồ thể hiện quan hệ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sản phẩm minh hoạ nên chủ yếu là sáng tạo, lời văn của em.', answer: true, explain: 'Hạn chế chép nguyên văn.' },
    { type: 'mcq', q: 'Andersen là tác giả của:', options: ['Truyện cổ tích (Vịt con xấu xí, Nàng tiên cá…)', 'Không gia đình', 'Tom Sawyer', 'Sự tích Hồ Gươm'], answer: 0, explain: 'Nhà văn Đan Mạch.' },
    { type: 'mcq', q: 'Áp phích giới thiệu sách cần có:', options: ['Tên sách, tác giả, hình ảnh, lí do nên đọc', 'Chỉ giá tiền', 'Chỉ số trang', 'Toàn bộ nội dung sách'], answer: 0, explain: 'Thông tin hấp dẫn, ngắn gọn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên đọc dồn cả cuốn sách trong đêm trước hạn nộp.', answer: false, explain: 'Nên lập kế hoạch đọc đều.' },
    { type: 'mcq', q: 'Truyện tranh 4 khung dùng để:', options: ['Tóm tắt các sự việc chính', 'Liệt kê từ mới', 'Vẽ chân dung tác giả', 'Ghi lịch học'], answer: 0, explain: 'Mỗi khung một sự việc.' },
    { type: 'mcq', q: 'Khi trích dẫn câu văn trong sách, em cần:', options: ['Trích ngắn và ghi rõ nguồn', 'Chép cả chương', 'Không ghi nguồn', 'Sửa tuỳ ý'], answer: 0, explain: 'Tôn trọng tác giả.' }
  ]
});
})();
