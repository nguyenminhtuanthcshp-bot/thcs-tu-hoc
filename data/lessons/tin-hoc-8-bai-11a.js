/* Tin học 8 – Bài 11a. Sử dụng bản mẫu tạo bài trình chiếu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-11a', {
  objectives: [
    'Nêu được lợi ích của việc dùng bản mẫu (template) để tạo bài trình chiếu.',
    'Tạo được bài trình chiếu từ bản mẫu có sẵn; thay nội dung, ảnh, màu cho phù hợp.',
    'Lưu được bài trình chiếu thành bản mẫu riêng để dùng lại.'
  ],
  intro: 'Thay vì bắt đầu từ trang trắng, em có thể chọn một <b>bản mẫu</b> đã thiết kế sẵn màu sắc, phông chữ, bố cục – chỉ việc thay nội dung của mình vào.',
  steps: [
    { title: 'Bản mẫu là gì?', html: `<p><b>Bản mẫu</b> (template) là tệp trình chiếu thiết kế sẵn: chủ đề màu, phông, nền, các bố cục trang (tiêu đề, nội dung, so sánh, hình ảnh…), đôi khi có cả nội dung gợi ý.</p>`,
      svg: S.slide({ layout: 'title', title: 'Hành trình khám phá', sub: 'Bản mẫu có sẵn – thay chữ của em vào đây', theme: ['#dcfce7', '#15803d'], note: 'Trang tiêu đề của một bản mẫu' }), caption: 'Bản mẫu đã có sẵn màu sắc, phông chữ.' },
    { title: 'Tạo bài từ bản mẫu', html: `<p><b>File → New</b> → chọn bản mẫu phù hợp chủ đề (hoặc tìm theo từ khoá) → <b>Create</b>. Sau đó: thay chữ trong các khung giữ chỗ, thay ảnh minh hoạ (Change Picture), xoá trang không cần, thêm trang theo bố cục có sẵn.</p>`,
      svg: S.flow({ items: ['File → New', 'Chọn bản mẫu', 'Create', 'Thay nội dung, ảnh', 'Lưu bài'], size: 12, label: 'Tạo bài trình chiếu từ bản mẫu' }), caption: 'Các bước tạo bài từ bản mẫu.' },
    { title: 'Chọn bản mẫu phù hợp', html: `<ul><li>Hợp chủ đề và người nghe (bài học, báo cáo khoa học, lễ hội…).</li><li>Chữ dễ đọc, màu không quá sặc sỡ.</li><li>Chỉ dùng bản mẫu được phép sử dụng (có sẵn trong phần mềm hoặc giấy phép rõ ràng).</li></ul>` },
    { title: 'Lưu bản mẫu riêng', html: `<p>Sau khi thiết kế trang chiếu cái cho lớp/nhóm, chọn <b>File → Save As</b> → kiểu tệp <b>PowerPoint Template (.potx)</b>. Lần sau mở bản mẫu này để có bài mới cùng phong cách.</p>
      <div class="box key">Bản mẫu = khung thiết kế sẵn; nội dung vẫn phải do em tự soạn.</div>` }
  ],
  summary: 'Bản mẫu là tệp trình chiếu thiết kế sẵn màu, phông, nền, bố cục. Tạo bài: File → New → chọn bản mẫu → Create → thay nội dung, ảnh. Chọn bản mẫu hợp chủ đề, dễ đọc, được phép dùng. Có thể lưu bản mẫu riêng dạng .potx.',
  examples: [
    { title: 'Chọn bản mẫu', problem: 'Bài giới thiệu “Lễ hội mùa xuân quê em” nên chọn bản mẫu như thế nào?', solution: 'Màu tươi sáng, có bố cục hình ảnh lớn, phông dễ đọc.' },
    { title: 'Thay ảnh', problem: 'Bản mẫu có ảnh minh hoạ không liên quan. Thay ảnh mà giữ vị trí, kích thước làm thế nào?', solution: 'Nháy phải ảnh → Change Picture → chọn ảnh mới.' },
    { title: 'Phần mở rộng', problem: 'Tệp bản mẫu và tệp trình chiếu thường có phần mở rộng gì?', solution: 'Bản mẫu: .potx; bài trình chiếu: .pptx.' }
  ],
  exercises: [
    { question: 'Nêu hai ưu điểm và một hạn chế khi dùng bản mẫu.', hints: ['Về thời gian và thẩm mĩ.', 'Nếu nhiều nhóm cùng chọn một bản mẫu?'], solution: 'Ưu: nhanh, đẹp và thống nhất. Hạn chế: dễ trùng với người khác, có thể không hợp nội dung nếu không chỉnh.' },
    { question: 'Bản mẫu có 12 trang gợi ý, em cần 7 trang. Em xoá bao nhiêu trang?', hints: ['12 − 7.', 'Giữ các bố cục cần dùng.'], solution: '5 trang.' },
    { question: 'Mô tả các bước lưu thiết kế của nhóm thành bản mẫu.', hints: ['Lệnh Save As.', 'Chọn kiểu tệp gì?'], solution: 'File → Save As → chọn kiểu PowerPoint Template (.potx) → đặt tên → Save.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bản mẫu giúp tạo bài trình chiếu nhanh và thống nhất.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Để tạo bài từ bản mẫu, bắt đầu bằng:', options: ['File → New', 'Insert → Chart', 'Home → Paste', 'Review → Comment'], answer: 0, explain: 'File → New.' },
    { type: 'mcq', q: 'Phần mở rộng của tệp bản mẫu PowerPoint:', options: ['.pptx', '.potx', '.docx', '.xlsx'], answer: 1, explain: '.potx.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dùng bản mẫu thì không cần tự soạn nội dung.', answer: false, explain: 'Nội dung phải tự soạn.' },
    { type: 'mcq', q: 'Lệnh thay ảnh mà giữ vị trí, kích thước:', options: ['Change Picture', 'Delete', 'Crop', 'Group'], answer: 0, explain: 'Change Picture.' },
    { type: 'short', q: 'Bản mẫu có 10 trang, xoá 4 trang rồi thêm 3 trang. Bài còn bao nhiêu trang?', answer: '9', unit: 'trang', calc: '10-4+3', explain: '9.' },
    { type: 'short', q: '5 nhóm dùng chung một bản mẫu, mỗi nhóm làm 8 trang. Tổng số trang của cả lớp?', answer: '40', unit: 'trang', calc: '5*8', explain: '40.' },
    { type: 'mcq', q: 'Tiêu chí chọn bản mẫu quan trọng nhất là:', options: ['nhiều hiệu ứng nhất', 'phù hợp chủ đề, dễ đọc', 'nhiều màu nhất', 'chữ nhỏ nhất'], answer: 1, explain: 'Phù hợp, dễ đọc.' }
  ]
});
})();
