/* Tin học 6 – Bài 14. Thực hành tổng hợp: Hoàn thiện sổ lưu niệm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-14', {
  objectives: [
    'Vận dụng tổng hợp các kĩ năng soạn thảo: nhập, định dạng kí tự, đoạn, trang, chèn bảng, hình ảnh.',
    'Lập kế hoạch và hoàn thiện một sản phẩm văn bản (sổ lưu niệm) theo nhóm.',
    'Tổ chức, lưu trữ các tệp của sản phẩm một cách khoa học trong thư mục.'
  ],
  intro: 'Cuối năm học, lớp em muốn làm một cuốn <b>sổ lưu niệm</b> gồm ảnh tập thể, lời nhắn của các bạn và những kỉ niệm đẹp. Đây là dịp để em vận dụng tất cả kĩ năng soạn thảo đã học.',
  steps: [
    { title: 'Lập kế hoạch', html: `<p>Trước khi làm, nhóm thống nhất: nội dung các trang (bìa, giới thiệu lớp, ảnh, lời nhắn), phân công công việc, thời hạn hoàn thành.</p>`,
      svg: S.flow({ items: ['Lên ý tưởng, phân công', 'Thu thập ảnh, lời nhắn', 'Soạn thảo, định dạng', 'Kiểm tra, chỉnh sửa', 'Lưu, in, chia sẻ'], size: 13, label: 'Các bước làm sổ lưu niệm' }), caption: 'Quy trình thực hiện sản phẩm sổ lưu niệm.' },
    { title: 'Trình bày trang sổ lưu niệm', html: `<ul><li>Tiêu đề: cỡ chữ lớn, căn giữa, màu nổi bật.</li><li>Ảnh: chèn hình (Insert → Picture), điều chỉnh kích thước, vị trí.</li><li>Lời nhắn: trình bày trong bảng hai cột “Họ tên – Lời nhắn”.</li><li>Đánh số trang ở chân trang.</li></ul>`,
      svg: S.docPage({ variant: 'album' }), caption: 'Bố cục gợi ý một trang sổ lưu niệm: tiêu đề, ảnh, đoạn văn và bảng lời nhắn.' },
    { title: 'Tổ chức lưu trữ tệp', html: `<p>Đặt các tệp của sản phẩm trong một thư mục riêng, tên tệp ngắn gọn, không dấu, dễ hiểu.</p>`,
      svg: S.folderTree({ title: 'Thư mục của sản phẩm', root: { name: 'D:', children: [{ name: 'Lop6A', children: [{ name: 'SoLuuNiem', children: [{ name: 'Anh', children: ['anh-tap-the.jpg', 'tham-quan.jpg'] }, 'so-luu-niem.docx', 'loi-nhan.docx'] }] }] } }), caption: 'Cây thư mục lưu trữ các tệp của sổ lưu niệm.' },
    { title: 'Kiểm tra và hoàn thiện', html: `<p>Đọc soát chính tả (có thể dùng Tìm và thay thế để sửa lỗi lặp lại), kiểm tra định dạng thống nhất, xem trước khi in. Khi dùng ảnh và lời nhắn của bạn, cần được các bạn đồng ý.</p>
      <div class="box key">Sản phẩm tốt = nội dung ý nghĩa + trình bày thống nhất + lưu trữ khoa học.</div>` }
  ],
  summary: 'Làm sổ lưu niệm: lập kế hoạch, thu thập tư liệu, soạn thảo và định dạng (tiêu đề, ảnh, bảng lời nhắn, số trang), kiểm tra, lưu và in. Tổ chức tệp trong thư mục riêng, đặt tên dễ hiểu; tôn trọng ý kiến của bạn khi dùng ảnh, lời nhắn.',
  examples: [
    { title: 'Chọn công cụ', problem: 'Để trình bày lời nhắn của 40 bạn gọn gàng, nên dùng gì?', solution: 'Một bảng hai cột “Họ tên” và “Lời nhắn”, mỗi bạn một hàng.' },
    { title: 'Đặt tên tệp', problem: 'Tên tệp nào tốt hơn: “Tài liệu mới (3).docx” hay “so-luu-niem-6A.docx”?', solution: '“so-luu-niem-6A.docx” – ngắn gọn, rõ nội dung.' },
    { title: 'Tính số hàng', problem: 'Bảng lời nhắn có 1 hàng tiêu đề và mỗi bạn một hàng. Lớp có 38 bạn. Bảng có bao nhiêu hàng?', solution: '1 + 38 = 39 hàng.' }
  ],
  exercises: [
    { question: 'Lập kế hoạch phân công cho nhóm 4 bạn làm sổ lưu niệm.', hints: ['Liệt kê các việc: ảnh, lời nhắn, soạn thảo, kiểm tra.', 'Mỗi bạn nhận một việc chính.'], solution: 'Ví dụ: bạn 1 thu thập ảnh; bạn 2 thu lời nhắn; bạn 3 soạn thảo, định dạng; bạn 4 kiểm tra chính tả, in ấn. Cả nhóm cùng duyệt sản phẩm.' },
    { question: 'Vì sao nên lưu các tệp của sản phẩm trong một thư mục riêng?', hints: ['Nghĩ đến việc tìm lại tệp.', 'Nghĩ đến việc chia sẻ cho cả nhóm.'], solution: 'Dễ tìm, không lẫn với tệp khác, dễ sao chép và chia sẻ toàn bộ sản phẩm.' },
    { question: 'Sổ có 12 trang, mỗi trang in một mặt. In cho 3 thầy cô và 1 bản lưu. Cần bao nhiêu tờ giấy?', hints: ['Số bản in: 3 + 1.', 'Số tờ = số trang × số bản.'], solution: '12 × 4 = 48 tờ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên lưu các tệp của một sản phẩm trong cùng một thư mục.', answer: true, explain: 'Giúp dễ tìm, dễ chia sẻ.' },
    { type: 'mcq', q: 'Lệnh chèn ảnh vào văn bản thường là:', options: ['Insert → Picture', 'File → Close', 'Home → Paste', 'View → Ruler'], answer: 0, explain: 'Insert → Picture.' },
    { type: 'mcq', q: 'Bước nào nên làm đầu tiên khi làm sổ lưu niệm?', options: ['In ngay', 'Lập kế hoạch, phân công', 'Đặt tên tệp', 'Xoá ảnh cũ'], answer: 1, explain: 'Lập kế hoạch trước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng ảnh của bạn trong sổ mà không cần hỏi ý kiến.', answer: false, explain: 'Cần tôn trọng và hỏi ý kiến bạn.' },
    { type: 'short', q: 'Bảng lời nhắn có 1 hàng tiêu đề và 35 hàng cho 35 bạn. Bảng có bao nhiêu hàng?', answer: '36', unit: 'hàng', calc: '1+35', explain: '1 + 35 = 36.' },
    { type: 'mcq', q: 'Tên tệp nào phù hợp nhất?', options: ['abc.docx', 'Tài liệu mới.docx', 'so-luu-niem-6B.docx', '123.docx'], answer: 2, explain: 'Rõ nội dung, dễ tìm.' },
    { type: 'short', q: 'Sổ có 10 trang, in 5 bản (một mặt). Cần bao nhiêu tờ giấy?', answer: '50', unit: 'tờ', calc: '10*5', explain: '10 × 5 = 50.' },
    { type: 'mcq', q: 'Để sửa một lỗi chính tả lặp lại nhiều lần, nên dùng:', options: ['Tìm và thay thế', 'Chèn bảng', 'Đổi hướng giấy', 'Gộp ô'], answer: 0, explain: 'Replace giúp sửa nhanh.' }
  ]
});
})();
