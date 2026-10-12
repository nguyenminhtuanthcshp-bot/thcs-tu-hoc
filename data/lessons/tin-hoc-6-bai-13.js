/* Tin học 6 – Bài 13. Thực hành: Tìm kiếm và thay thế. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-13', {
  objectives: [
    'Nêu được tác dụng của công cụ tìm kiếm và thay thế trong phần mềm soạn thảo văn bản.',
    'Thực hiện được việc tìm một từ, cụm từ trong văn bản.',
    'Thực hiện được việc thay thế một từ, cụm từ (thay từng chỗ hoặc thay tất cả) một cách cẩn thận.'
  ],
  intro: 'Bài văn của em dài 4 trang và em lỡ gõ “Ha Noi” không dấu ở rất nhiều chỗ. Sửa từng chỗ rất mất thời gian và dễ sót. Công cụ <b>Tìm kiếm và thay thế</b> sẽ giúp em sửa tất cả chỉ trong vài giây.',
  steps: [
    { title: 'Tìm kiếm', html: `<p>Lệnh <b>Find</b> (Tìm, phím tắt <b>Ctrl+F</b>) giúp tìm nhanh vị trí một từ hoặc cụm từ trong văn bản. Các kết quả tìm được sẽ được đánh dấu để em xem lần lượt.</p>` },
    { title: 'Thay thế', html: `<p>Lệnh <b>Replace</b> (Thay thế, phím tắt thường là <b>Ctrl+H</b>) mở hộp thoại có hai ô:</p>
      <ul><li><b>Tìm gì</b> (Find what): từ cần tìm;</li><li><b>Thay bằng</b> (Replace with): từ mới.</li></ul>
      <p>Nhấn <b>Thay thế</b> để thay từng chỗ, hoặc <b>Thay tất cả</b> để thay mọi chỗ cùng lúc.</p>`,
      svg: S.findReplace(), caption: 'Hộp thoại Tìm và thay thế: thay “Ha Noi” bằng “Hà Nội”.' },
    { title: 'Thay thế cẩn thận', html: `<p>“Thay tất cả” rất nhanh nhưng có thể thay nhầm những chỗ không mong muốn. Ví dụ thay “an” bằng “ăn” sẽ làm hỏng cả các từ “bạn”, “an toàn”.</p>
      <div class="box tip">Hãy dùng từ cần tìm đủ dài, đặc trưng; có thể chọn tuỳ chọn “Chỉ tìm cả từ” (Match whole word) hoặc thay từng chỗ để kiểm tra.</div>` },
    { title: 'Thực hành', html: `<ol><li>Mở một văn bản có sẵn.</li><li>Dùng Ctrl+F tìm từ “trường”, đếm số kết quả.</li><li>Dùng Ctrl+H thay “HS” bằng “học sinh”, xem kết quả.</li><li>Lưu văn bản với tên mới.</li></ol>` }
  ],
  summary: 'Find (Ctrl+F) tìm nhanh vị trí từ, cụm từ. Replace (Ctrl+H) thay thế: nhập từ cần tìm và từ thay thế, chọn thay từng chỗ hoặc thay tất cả. Cần cẩn thận khi thay tất cả để tránh thay nhầm.',
  examples: [
    { title: 'Chọn lệnh', problem: 'Em muốn biết trong văn bản có bao nhiêu chỗ xuất hiện từ “Internet”. Dùng lệnh nào?', solution: 'Lệnh Find (Ctrl+F); phần mềm sẽ đếm và đánh dấu các kết quả.' },
    { title: 'Thay nhầm', problem: 'Thay tất cả “ca” bằng “cá” trong câu “Cả lớp ca hát” sẽ ra sao?', solution: 'Câu thành “Cả lớp cá hát” – thay nhầm nghĩa. Cần kiểm tra từng chỗ.' },
    { title: 'Tiết kiệm thời gian', problem: 'Sửa tay mỗi chỗ mất 10 giây. Văn bản có 30 chỗ cần sửa. Sửa tay mất bao lâu?', solution: '30 × 10 = 300 giây = 5 phút; dùng “Thay tất cả” chỉ mất vài giây.' }
  ],
  exercises: [
    { question: 'Nêu các bước thay từ “máy vi tính” bằng “máy tính” trong toàn bộ văn bản.', hints: ['Mở hộp thoại thay thế bằng phím tắt nào?', 'Điền hai ô rồi chọn nút nào?'], solution: 'Nhấn Ctrl+H; ô Tìm gì nhập “máy vi tính”, ô Thay bằng nhập “máy tính”; nhấn Thay tất cả; kiểm tra lại văn bản.' },
    { question: 'Vì sao nên thận trọng khi dùng “Thay tất cả” với từ ngắn?', hints: ['Từ ngắn có thể là một phần của từ khác.', 'Lấy ví dụ “an” trong “bạn”.'], solution: 'Vì từ ngắn có thể nằm trong nhiều từ khác, thay tất cả sẽ làm sai những từ đó.' },
    { question: 'Văn bản có 48 chỗ cần sửa; em đã thay từng chỗ được 3/4 số chỗ. Còn bao nhiêu chỗ chưa sửa?', hints: ['Số chỗ đã sửa: 48 × 3/4.', 'Lấy 48 trừ đi số chỗ đã sửa.'], solution: 'Đã sửa 36 chỗ; còn 48 − 36 = 12 chỗ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lệnh Replace dùng để thay thế từ hoặc cụm từ trong văn bản.', answer: true, explain: 'Replace = thay thế.' },
    { type: 'mcq', q: 'Phím tắt thường dùng để tìm kiếm trong văn bản là:', options: ['Ctrl+F', 'Ctrl+P', 'Ctrl+S', 'Ctrl+Z'], answer: 0, explain: 'Ctrl+F (Find).' },
    { type: 'mcq', q: 'Trong hộp thoại thay thế, ô “Replace with” để nhập:', options: ['từ cần tìm', 'từ thay thế', 'tên tệp', 'số trang'], answer: 1, explain: 'Replace with: thay bằng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Thay tất cả” không bao giờ thay nhầm.', answer: false, explain: 'Có thể thay nhầm những từ chứa chuỗi cần tìm.' },
    { type: 'short', q: 'Sửa tay mỗi chỗ mất 6 giây. Có 50 chỗ cần sửa. Mất bao nhiêu phút?', answer: '5', unit: 'phút', calc: '6*50/60', explain: '300 giây = 5 phút.' },
    { type: 'mcq', q: 'Để chỉ tìm đúng cả từ “an” mà không tìm trong “bạn”, chọn tuỳ chọn:', options: ['Match whole word', 'Print', 'Bold', 'Zoom'], answer: 0, explain: 'Chỉ tìm cả từ.' },
    { type: 'short', q: 'Tìm thấy 24 chỗ, em thay 1/3 số chỗ. Đã thay bao nhiêu chỗ?', answer: '8', unit: 'chỗ', calc: '24/3', explain: '24 : 3 = 8.' },
    { type: 'mcq', q: 'Muốn thay một chỗ rồi kiểm tra trước khi thay chỗ tiếp theo, nhấn nút:', options: ['Thay thế (Replace)', 'Thay tất cả (Replace All)', 'Đóng', 'In'], answer: 0, explain: 'Thay từng chỗ một.' }
  ]
});
})();
