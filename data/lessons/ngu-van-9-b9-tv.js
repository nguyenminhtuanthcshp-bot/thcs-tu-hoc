/* Ngữ văn 9 – Bài 9. Thực hành tiếng Việt: Biến đổi và mở rộng cấu trúc câu (chuyển câu chủ động thành câu bị động và ngược lại; tách câu, gộp câu; mở rộng thành phần câu bằng cụm từ, cụm chủ – vị). Ngữ liệu: câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b9-tv', {
  objectives: [
    'Biết biến đổi cấu trúc câu: chuyển câu chủ động thành câu bị động (và ngược lại), tách một câu thành nhiều câu, gộp nhiều câu thành một câu.',
    'Biết mở rộng thành phần câu bằng cụm từ hoặc cụm chủ – vị.',
    'Hiểu tác dụng của việc biến đổi, mở rộng cấu trúc câu và vận dụng khi viết văn bản thông tin, thuyết minh.'
  ],
  intro: 'Cùng một thông tin, ta có thể nói “UNESCO ghi danh Hoàng thành Thăng Long” hoặc “Hoàng thành Thăng Long được UNESCO ghi danh”. Mỗi cách đặt trọng tâm vào một đối tượng khác nhau. Biết biến đổi câu giúp em viết linh hoạt, đúng mục đích.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1a) UNESCO ghi danh Khu trung tâm Hoàng thành Thăng Long – Hà Nội năm 2010.</p>
<p>(1b) Khu trung tâm Hoàng thành Thăng Long – Hà Nội được UNESCO ghi danh năm 2010.</p>
<p>(2a) Cột cờ Hà Nội được xây dựng dưới thời Nguyễn và nay đã trở thành biểu tượng quen thuộc của Thủ đô.</p>
<p>(2b) Cột cờ Hà Nội được xây dựng dưới thời Nguyễn. Nay, nó đã trở thành biểu tượng quen thuộc của Thủ đô.</p>
<p>(3a) Du khách ngắm rồng đá.</p>
<p>(3b) Những du khách đến từ khắp nơi say mê ngắm đôi rồng đá mà các nghệ nhân thời Lê sơ đã chạm khắc tinh xảo.</p>`,
    source: 'Câu văn do nhóm biên soạn tự viết, dựa trên văn bản thông tin “Hoàng thành Thăng Long – nơi lắng đọng nghìn năm” (phần Đọc).'
  },
  steps: [
    { title: 'Chuyển câu chủ động thành câu bị động', html: `<ul><li><b>Câu chủ động</b>: chủ ngữ chỉ chủ thể thực hiện hành động (1a: <u>UNESCO</u> ghi danh…).</li>
      <li><b>Câu bị động</b>: chủ ngữ chỉ đối tượng chịu tác động của hành động, thường dùng <b>được, bị</b> (1b: <u>Khu trung tâm Hoàng thành…</u> được UNESCO ghi danh…).</li>
      <li>Cách chuyển: đưa từ ngữ chỉ đối tượng lên đầu câu làm chủ ngữ, thêm “được/bị”; có thể giữ hoặc lược chủ thể.</li></ul>
      <div class="box key">Tác dụng: đặt trọng tâm vào đối tượng đang nói tới (di tích), giúp liên kết câu trong đoạn khi đoạn văn đang nói về di tích ấy.</div>`,
      svg: S.flow({ w: 620, items: [{ title: 'Câu chủ động', text: 'UNESCO ghi danh X' }, { title: 'Đưa đối tượng', text: 'X lên đầu câu' }, { title: 'Thêm được/bị', text: 'X được …' }, { title: 'Câu bị động', text: 'X được UNESCO ghi danh' }] }),
      caption: 'Các bước chuyển câu chủ động thành câu bị động.' },
    { title: 'Tách câu và gộp câu', html: `<ul><li><b>Tách câu</b> (2a → 2b): tách một câu dài thành hai câu để nhấn mạnh từng thông tin, câu văn rõ ràng, dễ đọc.</li>
      <li><b>Gộp câu</b> (2b → 2a): gộp các câu ngắn có quan hệ chặt chẽ thành một câu, tránh lặp, câu văn liền mạch.</li>
      <li>Lựa chọn tuỳ mục đích: văn bản thông tin cho thiếu nhi nên dùng câu ngắn; bài viết học thuật có thể dùng câu dài hơn.</li></ul>` },
    { title: 'Mở rộng thành phần câu', html: `<p>Câu (3a) chỉ có nòng cốt; câu (3b) mở rộng các thành phần:</p>`,
      svg: S.mindmap({ center: 'Mở rộng câu', branches: [{ title: 'Chủ ngữ', items: ['Du khách →', 'Những du khách đến từ khắp nơi'] }, { title: 'Vị ngữ', items: ['ngắm →', 'say mê ngắm'] }, { title: 'Bổ ngữ', items: ['rồng đá →', 'đôi rồng đá…'] }, { title: 'Cụm C – V', items: ['mà các nghệ nhân…', 'đã chạm khắc'] }] }),
      caption: 'Mở rộng thành phần câu bằng cụm từ và cụm chủ – vị.' },
    { title: 'Tác dụng và lưu ý', html: `<ul><li>Mở rộng câu giúp thông tin cụ thể, chi tiết, giàu hình ảnh.</li>
      <li>Nhưng không nên mở rộng quá mức khiến câu rườm rà, khó hiểu.</li>
      <li>Khi biến đổi câu phải giữ nguyên nội dung thông tin cơ bản.</li></ul>
      <table class="tbl"><tr><th>Biến đổi</th><th>Tác dụng chính</th></tr>
      <tr><td>Chủ động → bị động</td><td>Đổi trọng tâm, liên kết đoạn</td></tr>
      <tr><td>Tách câu</td><td>Nhấn mạnh, rõ ràng</td></tr>
      <tr><td>Gộp câu</td><td>Gọn, liền mạch</td></tr>
      <tr><td>Mở rộng thành phần</td><td>Chi tiết, cụ thể</td></tr></table>` }
  ],
  summary: 'Biến đổi cấu trúc câu: chuyển câu chủ động thành câu bị động (đưa đối tượng lên làm chủ ngữ, thêm được/bị) để đổi trọng tâm, liên kết đoạn; tách câu để nhấn mạnh, rõ ràng; gộp câu để gọn, liền mạch. Mở rộng câu: mở rộng chủ ngữ, vị ngữ, bổ ngữ bằng cụm từ hoặc cụm chủ – vị để thông tin cụ thể, chi tiết; tránh rườm rà, giữ nguyên nội dung.',
  examples: [
    { title: 'Chuyển câu bị động', problem: 'Chuyển câu “Các nhà khảo cổ đã phát hiện nhiều lớp dấu tích kiến trúc ở khu 18 Hoàng Diệu.” thành câu bị động.', solution: '“Nhiều lớp dấu tích kiến trúc ở khu 18 Hoàng Diệu đã được các nhà khảo cổ phát hiện.” Chủ ngữ mới là đối tượng “nhiều lớp dấu tích kiến trúc”, thêm “được”.' },
    { title: 'Chọn câu phù hợp mạch văn', problem: 'Đoạn văn đang nói về Hoàng thành Thăng Long. Nên chọn (1a) hay (1b) để viết tiếp? Vì sao?', solution: 'Nên chọn (1b) vì chủ ngữ “Khu trung tâm Hoàng thành…” trùng với đối tượng đang được nói tới, giúp các câu trong đoạn liên kết chặt chẽ, trọng tâm thống nhất.' },
    { title: 'Nhận diện cụm C – V mở rộng', problem: 'Trong câu (3b), cụm chủ – vị nào được dùng để mở rộng? Nó bổ sung ý nghĩa cho từ nào?', solution: 'Cụm C – V “các nghệ nhân thời Lê sơ / đã chạm khắc tinh xảo” (nối bằng “mà”), bổ sung ý nghĩa cho “đôi rồng đá”, cho biết ai làm ra và làm như thế nào.' }
  ],
  exercises: [
    { question: 'Chuyển các câu sau thành câu bị động: (a) Người dân địa phương gìn giữ ngôi chùa cổ suốt nhiều thế kỉ. (b) Cơn bão đã làm đổ nhiều cây cổ thụ.', hints: ['Đối tượng chịu tác động lên đầu câu.', 'Chọn “được” (tích cực) hoặc “bị” (tiêu cực).'], solution: '(a) Ngôi chùa cổ được người dân địa phương gìn giữ suốt nhiều thế kỉ. (b) Nhiều cây cổ thụ đã bị cơn bão làm đổ.' },
    { question: 'Tách câu sau thành 2 – 3 câu: “Vịnh Hạ Long nổi tiếng với hàng nghìn hòn đảo đá vôi nhiều hình dáng và những hang động kì ảo và thu hút đông đảo du khách trong nước và quốc tế.”', hints: ['Mỗi câu một ý chính.', 'Dùng từ nối “Nơi đây”, “Vì thế”.'], solution: 'Vịnh Hạ Long nổi tiếng với hàng nghìn hòn đảo đá vôi nhiều hình dáng. Nơi đây còn có những hang động kì ảo. Vì thế, vịnh thu hút đông đảo du khách trong nước và quốc tế.' },
    { question: 'Mở rộng câu “Học sinh tham quan bảo tàng.” bằng cách mở rộng chủ ngữ, vị ngữ và có một cụm C – V.', hints: ['Thêm định ngữ cho “học sinh”.', 'Thêm cụm C – V bổ sung cho “bảo tàng”.'], solution: 'Ví dụ: Các bạn học sinh lớp 9A háo hức tham quan bảo tàng mà cô giáo đã giới thiệu trong giờ Lịch sử. (Mở rộng chủ ngữ: “Các bạn học sinh lớp 9A”; vị ngữ: “háo hức tham quan”; cụm C – V “cô giáo / đã giới thiệu…” bổ sung cho “bảo tàng”.)' }
  ],
  quiz: [
    { type: 'mcq', q: 'Câu bị động là câu có chủ ngữ chỉ:', options: ['đối tượng chịu tác động của hành động', 'chủ thể thực hiện hành động', 'thời gian', 'nơi chốn'], answer: 0, explain: 'Thường có “được/bị”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Khu trung tâm Hoàng thành Thăng Long được UNESCO ghi danh năm 2010.” là câu bị động.', answer: true, explain: 'Chủ ngữ là đối tượng, có “được”.' },
    { type: 'short', q: 'Từ thường dùng trong câu bị động mang nghĩa tiêu cực là … (một chữ).', answer: ['bị', 'bi'], answerText: 'bị', explain: 'Cây bị bão làm đổ.' },
    { type: 'mcq', q: 'Tách một câu dài thành nhiều câu nhằm:', options: ['nhấn mạnh từng thông tin, câu rõ ràng hơn', 'làm câu rườm rà', 'thay đổi nội dung', 'bỏ bớt thông tin'], answer: 0, explain: 'Tác dụng của tách câu.' },
    { type: 'mcq', q: 'Trong câu “Du khách ngắm đôi rồng đá mà các nghệ nhân đã chạm khắc”, phần mở rộng bằng cụm C – V là:', options: ['các nghệ nhân đã chạm khắc', 'Du khách', 'ngắm', 'đôi'], answer: 0, explain: 'Bổ sung cho “đôi rồng đá”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi biến đổi cấu trúc câu, có thể thay đổi nội dung thông tin cơ bản.', answer: false, explain: 'Phải giữ nguyên nội dung.' },
    { type: 'short', q: 'Gộp nhiều câu ngắn thành một câu giúp câu văn gọn và liền … (một chữ).', answer: ['mạch', 'mach'], answerText: 'mạch', explain: 'liền mạch.' },
    { type: 'mcq', q: 'Chuyển câu chủ động thành câu bị động thường nhằm:', options: ['đổi trọng tâm vào đối tượng, liên kết đoạn', 'thêm cảm xúc', 'tạo vần', 'rút ngắn câu tối đa'], answer: 0, explain: 'Đặt trọng tâm vào đối tượng.' }
  ]
});
})();
