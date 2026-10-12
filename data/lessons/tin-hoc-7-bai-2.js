/* Tin học 7 – Bài 2. Phần mềm máy tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-2', {
  objectives: [
    'Phân biệt được hệ điều hành và phần mềm ứng dụng; nêu được ví dụ.',
    'Nêu được một số chức năng cơ bản của hệ điều hành.',
    'Nhận biết được loại tệp qua phần mở rộng của tên tệp.'
  ],
  intro: 'Bật máy tính lên, em thấy màn hình nền, các biểu tượng; nháy đúp một biểu tượng, phần mềm soạn thảo hay trò chơi mở ra. Thứ gì quản lí tất cả những việc đó? Đó là <b>hệ điều hành</b>.',
  steps: [
    { title: 'Hai loại phần mềm', html: `<ul><li><b>Hệ điều hành</b>: phần mềm quản lí, điều khiển toàn bộ máy tính, là cầu nối giữa người dùng, phần mềm ứng dụng và phần cứng. Ví dụ: Windows, macOS, Linux (máy tính); Android, iOS (điện thoại).</li><li><b>Phần mềm ứng dụng</b>: phục vụ công việc cụ thể như soạn thảo, bảng tính, trình chiếu, duyệt web, nghe nhạc, học tập…</li></ul>`,
      svg: S.flow({ items: ['Người dùng', 'Phần mềm ứng dụng', 'Hệ điều hành', 'Phần cứng'], vertical: true, w: 360, size: 14, label: 'Các lớp của máy tính' }), caption: 'Hệ điều hành nằm giữa phần mềm ứng dụng và phần cứng.' },
    { title: 'Chức năng của hệ điều hành', html: `<ul><li>Quản lí phần cứng (bộ nhớ, thiết bị vào – ra…).</li><li>Quản lí tệp và thư mục.</li><li>Chạy và quản lí các phần mềm ứng dụng.</li><li>Cung cấp giao diện để người dùng giao tiếp với máy; bảo vệ máy tính (tài khoản, mật khẩu).</li></ul>` },
    { title: 'Tệp và phần mở rộng', html: `<p>Tên tệp thường gồm <b>phần tên</b> và <b>phần mở rộng</b>, cách nhau bởi dấu chấm. Phần mở rộng cho biết loại tệp, giúp hệ điều hành chọn phần mềm mở tệp.</p>`,
      svg: S.table({ title: 'Một số phần mở rộng thường gặp', head: ['Phần mở rộng', 'Loại tệp'], rows: [['.docx', 'Văn bản'], ['.xlsx', 'Bảng tính'], ['.pptx', 'Trình chiếu'], ['.jpg, .png', 'Hình ảnh'], ['.mp3', 'Âm thanh'], ['.mp4', 'Video'], ['.exe', 'Chương trình chạy được (Windows)']], colW: 220 }), caption: 'Phần mở rộng giúp nhận biết loại tệp.' },
    { title: 'Dùng phần mềm có trách nhiệm', html: `<p>Chỉ cài phần mềm có nguồn gốc rõ ràng, có bản quyền hoặc miễn phí hợp pháp; cập nhật hệ điều hành để vá lỗi bảo mật; cẩn trọng với tệp <code>.exe</code> lạ.</p>
      <div class="box key">Không có hệ điều hành, máy tính không thể chạy các phần mềm ứng dụng.</div>` }
  ],
  summary: 'Phần mềm gồm hệ điều hành (Windows, macOS, Linux, Android, iOS) và phần mềm ứng dụng. Hệ điều hành quản lí phần cứng, tệp, chạy ứng dụng, cung cấp giao diện. Phần mở rộng của tên tệp (.docx, .xlsx, .jpg, .mp3…) cho biết loại tệp.',
  examples: [
    { title: 'Phân loại', problem: 'Android, phần mềm bảng tính, trình duyệt web, Windows – phần mềm nào là hệ điều hành?', solution: 'Android và Windows.' },
    { title: 'Phần mở rộng', problem: 'Tệp “baihat.mp3” và “anh-lop.jpg” là loại tệp gì?', solution: '“baihat.mp3” là tệp âm thanh; “anh-lop.jpg” là tệp hình ảnh.' },
    { title: 'Tách tên tệp', problem: 'Trong tên tệp “bao-cao.nhom2.docx”, phần mở rộng là gì?', solution: 'Phần mở rộng là phần sau dấu chấm cuối cùng: docx.' }
  ],
  exercises: [
    { question: 'Nêu ba chức năng của hệ điều hành.', hints: ['Hệ điều hành quản lí những gì?', 'Nghĩ đến tệp, phần cứng, ứng dụng.'], solution: 'Quản lí phần cứng; quản lí tệp, thư mục; chạy và quản lí phần mềm ứng dụng (hoặc cung cấp giao diện).' },
    { question: 'Vì sao không nên mở tệp .exe được gửi từ người lạ?', hints: ['Tệp .exe là chương trình chạy được.', 'Chương trình lạ có thể làm gì?'], solution: 'Tệp .exe có thể là phần mềm độc hại; khi chạy có thể phá hỏng dữ liệu, đánh cắp thông tin.' },
    { question: 'Ổ đĩa 256 GB, hệ điều hành chiếm 40 GB, các phần mềm ứng dụng chiếm 56 GB. Còn trống bao nhiêu GB?', hints: ['Cộng phần đã dùng.', '256 − (40 + 56).'], solution: '256 − 96 = 160 GB.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Windows là một hệ điều hành.', answer: true, explain: 'Windows là hệ điều hành cho máy tính.' },
    { type: 'mcq', q: 'Phần mềm nào là phần mềm ứng dụng?', options: ['Android', 'Linux', 'Phần mềm trình chiếu', 'iOS'], answer: 2, explain: 'Các lựa chọn còn lại là hệ điều hành.' },
    { type: 'mcq', q: 'Tệp có phần mở rộng .xlsx thường là tệp:', options: ['bảng tính', 'âm thanh', 'video', 'hình ảnh'], answer: 0, explain: '.xlsx là tệp bảng tính.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phần mềm ứng dụng có thể chạy khi máy tính không có hệ điều hành.', answer: false, explain: 'Ứng dụng chạy trên nền hệ điều hành.' },
    { type: 'mcq', q: 'Chức năng nào là của hệ điều hành?', options: ['Soạn thư mời', 'Quản lí tệp và thư mục', 'Vẽ tranh', 'Tính điểm trung bình'], answer: 1, explain: 'Quản lí tệp là chức năng của hệ điều hành.' },
    { type: 'short', q: 'Ổ đĩa 128 GB, đã dùng 80 GB. Còn trống bao nhiêu GB?', answer: '48', unit: 'GB', calc: '128-80', explain: '128 − 80 = 48.' },
    { type: 'short', q: 'Ổ đĩa 500 GB, đã dùng 125 GB. Đã dùng bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '125/500*100', explain: '125 : 500 = 25%.' },
    { type: 'mcq', q: 'Tệp “video-ngoai-khoa.mp4” là tệp:', options: ['văn bản', 'video', 'bảng tính', 'trình chiếu'], answer: 1, explain: '.mp4 là tệp video.' }
  ]
});
})();
