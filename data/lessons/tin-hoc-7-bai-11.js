/* Tin học 7 – Bài 11. Tạo bài trình chiếu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-11', {
  objectives: [
    'Nêu được cấu trúc của một bài trình chiếu: trang tiêu đề, các trang nội dung, trang kết.',
    'Biết sử dụng cấu trúc phân cấp (các mức đề mục) để tổ chức nội dung.',
    'Tạo được bài trình chiếu có tiêu đề, bố cục, thêm/xoá/sắp xếp trang chiếu.'
  ],
  intro: 'Khi thuyết trình trước lớp, vài trang chiếu ngắn gọn, rõ ràng giúp người nghe theo dõi dễ hơn hàng trang giấy. Hãy học cách <b>tạo bài trình chiếu</b>.',
  steps: [
    { title: 'Cấu trúc bài trình chiếu', html: `<p>Một bài trình chiếu thường gồm: <b>trang tiêu đề</b> (tên bài, tác giả), <b>các trang nội dung</b>, <b>trang kết</b> (tóm tắt, cảm ơn, nguồn tham khảo).</p>`,
      svg: S.slide({ layout: 'title', title: 'Bảo vệ môi trường', sub: 'Nhóm 3 – Lớp 7B', note: 'Trang tiêu đề: tên bài và người trình bày' }), caption: 'Trang tiêu đề.' },
    { title: 'Cấu trúc phân cấp', html: `<p>Nội dung trên trang chiếu nên sắp xếp theo <b>mức</b>: ý chính (mức 1), ý con (mức 2, thụt vào). Dùng phím <b>Tab</b> để hạ mức, <b>Shift+Tab</b> để nâng mức.</p>`,
      svg: S.mindmap({ center: 'Bảo vệ môi trường', branches: [{ title: 'Nguyên nhân ô nhiễm', items: ['Rác thải', 'Khí thải'] }, { title: 'Hậu quả', items: ['Sức khoẻ', 'Sinh vật'] }, { title: 'Giải pháp', items: ['Phân loại rác', 'Trồng cây'] }], w: 640, size: 14 }), caption: 'Sơ đồ phân cấp giúp lập dàn ý cho bài trình chiếu.' },
    { title: 'Bố cục và trang nội dung', html: `<p>Mỗi trang chọn một <b>bố cục</b> (Layout) phù hợp: tiêu đề + nội dung, hai cột, tiêu đề + hình ảnh… Thêm trang: <b>New Slide</b>; xoá: chọn trang, Delete; đổi thứ tự: kéo thả ở khung bên trái.</p>`,
      svg: S.slide({ title: 'Nguyên nhân ô nhiễm', bullets: ['Rác thải sinh hoạt', '   – Túi ni lông', 'Khí thải xe cộ'], note: 'Trang nội dung: ý mức 2 được thụt vào' }), caption: 'Trang nội dung theo bố cục tiêu đề và danh sách.' },
    { title: 'Lưu và trình chiếu', html: `<p>Lưu tệp (đuôi .pptx với PowerPoint). Nhấn <b>F5</b> để trình chiếu từ đầu, <b>Esc</b> để thoát.</p>
      <div class="box key">Tiêu đề – Nội dung (phân cấp) – Kết; mỗi trang một ý chính, chữ ngắn gọn.</div>` }
  ],
  summary: 'Bài trình chiếu gồm trang tiêu đề, các trang nội dung, trang kết. Nội dung tổ chức theo cấu trúc phân cấp (Tab hạ mức, Shift+Tab nâng mức). Chọn bố cục phù hợp; thêm (New Slide), xoá, sắp xếp trang; F5 để trình chiếu.',
  examples: [
    { title: 'Lập dàn ý', problem: 'Lập dàn ý 4 trang cho bài “Giới thiệu trường em”.', solution: 'Trang 1: tiêu đề; trang 2: lịch sử, vị trí; trang 3: hoạt động nổi bật; trang 4: kết, cảm ơn.' },
    { title: 'Phân mức', problem: 'Trong danh sách “Thể thao: bóng đá, cầu lông”, ý nào mức 1, ý nào mức 2?', solution: '“Thể thao” mức 1; “bóng đá”, “cầu lông” mức 2.' },
    { title: 'Phím tắt', problem: 'Em đang ở trang 1 và muốn trình chiếu từ đầu. Nhấn phím nào? Muốn thoát nhấn phím nào?', solution: 'F5 để trình chiếu; Esc để thoát.' }
  ],
  exercises: [
    { question: 'Vì sao nên dùng cấu trúc phân cấp trên trang chiếu?', hints: ['Người xem thấy gì đầu tiên?', 'Mối quan hệ ý chính – ý phụ.'], solution: 'Giúp người xem nhận ra ý chính, ý phụ; nội dung rõ ràng, mạch lạc.' },
    { question: 'Thuyết trình 6 phút, mỗi trang nội dung trình bày khoảng 1,5 phút. Cần bao nhiêu trang nội dung?', hints: ['Chia thời gian cho thời gian mỗi trang.', '6 : 1,5.'], solution: '4 trang nội dung (chưa kể trang tiêu đề, trang kết).' },
    { question: 'Nêu thao tác đưa trang 5 lên vị trí thứ 2.', hints: ['Khung nào hiển thị danh sách trang?', 'Kéo thả.'], solution: 'Ở khung danh sách trang bên trái, kéo trang 5 thả vào giữa trang 1 và trang 2.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trang đầu tiên của bài trình chiếu thường là trang tiêu đề.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Phím để hạ mức một dòng trong danh sách là:', options: ['Enter', 'Tab', 'Esc', 'F5'], answer: 1, explain: 'Tab hạ mức.' },
    { type: 'mcq', q: 'Phím bắt đầu trình chiếu từ trang đầu:', options: ['F1', 'F5', 'F12', 'Esc'], answer: 1, explain: 'F5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên chép thật nhiều chữ lên mỗi trang chiếu.', answer: false, explain: 'Chữ nên ngắn gọn.' },
    { type: 'mcq', q: 'Lệnh thêm trang chiếu mới:', options: ['New Slide', 'Delete', 'Rename', 'Sort'], answer: 0, explain: 'New Slide.' },
    { type: 'short', q: 'Thuyết trình 8 phút, mỗi trang 2 phút. Cần bao nhiêu trang nội dung?', answer: '4', unit: 'trang', calc: '8/2', explain: '8 : 2.' },
    { type: 'short', q: 'Bài có 1 trang tiêu đề, 6 trang nội dung, 1 trang kết. Tổng số trang?', answer: '8', unit: 'trang', calc: '1+6+1', explain: '1 + 6 + 1.' },
    { type: 'mcq', q: 'Tệp trình chiếu PowerPoint thường có phần mở rộng:', options: ['.docx', '.xlsx', '.pptx', '.mp3'], answer: 2, explain: '.pptx.' }
  ]
});
})();
