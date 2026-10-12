/* Tin học 7 – Bài 3. Quản lí dữ liệu trong máy tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-3', {
  objectives: [
    'Giải thích được vai trò của việc tổ chức tệp, thư mục theo cấu trúc cây; đọc được đường dẫn.',
    'Thực hiện được các thao tác với tệp, thư mục: tạo, đổi tên, sao chép, di chuyển, xoá.',
    'Nêu được vì sao cần sao lưu dữ liệu và bảo vệ dữ liệu.'
  ],
  intro: 'Tủ sách gọn gàng, có ngăn cho từng môn thì tìm sách rất nhanh. Dữ liệu trong máy tính cũng vậy: nếu tổ chức tệp vào các <b>thư mục</b> hợp lí, em sẽ tìm lại bài làm chỉ trong vài giây.',
  steps: [
    { title: 'Tệp, thư mục và cây thư mục', html: `<p><b>Tệp</b> chứa dữ liệu (văn bản, ảnh, âm thanh…). <b>Thư mục</b> chứa tệp và các thư mục con. Các thư mục lồng nhau tạo thành <b>cây thư mục</b>, gốc là ổ đĩa (C:, D:…).</p>`,
      svg: S.folderTree({ title: 'Cây thư mục học tập', root: { name: 'D:', children: [{ name: 'HocTap', children: [{ name: 'Toan', children: ['phan-so.docx'] }, { name: 'Tin', children: ['bai3.docx', 'cay-thu-muc.png'] }] }, { name: 'Anh', children: ['tham-quan.jpg'] }] } }), caption: 'Dữ liệu được tổ chức theo cấu trúc cây.' },
    { title: 'Đường dẫn', html: `<p><b>Đường dẫn</b> chỉ vị trí của tệp hay thư mục, gồm tên ổ đĩa và các thư mục lần lượt từ gốc, ngăn cách bởi dấu <code>\\</code>. Ví dụ: <code>D:\\HocTap\\Tin\\bai3.docx</code>.</p>` },
    { title: 'Thao tác với tệp và thư mục', html: `<ul><li><b>Tạo</b> thư mục mới (New Folder); <b>đổi tên</b> (Rename).</li><li><b>Sao chép</b> (Copy – Paste, Ctrl+C, Ctrl+V): tạo bản sao, bản gốc vẫn còn.</li><li><b>Di chuyển</b> (Cut – Paste, Ctrl+X, Ctrl+V): chuyển sang vị trí mới.</li><li><b>Xoá</b> (Delete): đưa vào Thùng rác, có thể khôi phục nếu chưa làm sạch Thùng rác.</li></ul>`,
      svg: S.flow({ items: ['Chọn tệp', 'Ctrl+C (sao chép) hoặc Ctrl+X (cắt)', 'Mở thư mục đích', 'Ctrl+V (dán)'], size: 13, label: 'Sao chép hoặc di chuyển tệp' }), caption: 'Các bước sao chép/di chuyển tệp.' },
    { title: 'Sao lưu và bảo vệ dữ liệu', html: `<p>Dữ liệu có thể mất do hỏng ổ đĩa, xoá nhầm, virus. Hãy <b>sao lưu</b> dữ liệu quan trọng ra thiết bị khác (ổ USB, ổ cứng ngoài) hoặc lưu trữ trực tuyến; đặt tên tệp, thư mục rõ ràng.</p>
      <div class="box key">Đường dẫn = ổ đĩa \\ thư mục \\ … \\ tên tệp.</div>` }
  ],
  summary: 'Tệp chứa dữ liệu, thư mục chứa tệp và thư mục con, tạo thành cây thư mục. Đường dẫn chỉ vị trí tệp (D:\\HocTap\\Tin\\bai3.docx). Thao tác: tạo, đổi tên, sao chép (Ctrl+C, Ctrl+V), di chuyển (Ctrl+X, Ctrl+V), xoá (vào Thùng rác). Cần sao lưu dữ liệu quan trọng.',
  examples: [
    { title: 'Viết đường dẫn', problem: 'Viết đường dẫn tới tệp “phan-so.docx” trong cây thư mục ở bước 1.', solution: 'D:\\HocTap\\Toan\\phan-so.docx' },
    { title: 'Sao chép hay di chuyển', problem: 'Em muốn có thêm một bản ảnh “tham-quan.jpg” trong thư mục Tin mà ảnh gốc vẫn ở thư mục Anh. Dùng thao tác nào?', solution: 'Sao chép (Ctrl+C rồi Ctrl+V vào thư mục Tin).' },
    { title: 'Đếm', problem: 'Trong cây ở bước 1, thư mục HocTap chứa bao nhiêu thư mục con và bao nhiêu tệp (kể cả trong thư mục con)?', solution: '2 thư mục con (Toan, Tin) và 3 tệp.' }
  ],
  exercises: [
    { question: 'Đề xuất cây thư mục để lưu bài tập các môn Toán, Ngữ văn, Tin học theo từng học kì.', hints: ['Thư mục gốc có thể là HocTap.', 'Mỗi môn chia thành HocKi1, HocKi2.'], solution: 'Ví dụ: D:\\HocTap\\Toan\\HocKi1, D:\\HocTap\\Toan\\HocKi2; tương tự cho NguVan và TinHoc.' },
    { question: 'Phân biệt sao chép và di chuyển tệp.', hints: ['Sau khi thực hiện, bản gốc còn ở chỗ cũ không?', 'Phím tắt nào khác nhau?'], solution: 'Sao chép (Ctrl+C) tạo bản sao, bản gốc vẫn còn; di chuyển (Ctrl+X) chuyển tệp đi, chỗ cũ không còn.' },
    { question: 'Thư mục có 12 tệp ảnh, mỗi tệp 3 MB. Cần ổ USB tối thiểu bao nhiêu MB trống để sao lưu?', hints: ['Tổng dung lượng = số tệp × dung lượng mỗi tệp.', '12 × 3.'], solution: '12 × 3 = 36 MB.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thư mục có thể chứa các thư mục con và tệp.', answer: true, explain: 'Tạo thành cấu trúc cây.' },
    { type: 'mcq', q: 'Tổ hợp phím để di chuyển (cắt) tệp là:', options: ['Ctrl+C', 'Ctrl+X', 'Ctrl+Z', 'Ctrl+P'], answer: 1, explain: 'Ctrl+X là cắt.' },
    { type: 'mcq', q: 'Trong đường dẫn D:\\HocTap\\Tin\\bai3.docx, tệp bai3.docx nằm trong thư mục:', options: ['HocTap', 'Tin', 'D:', 'docx'], answer: 1, explain: 'Thư mục chứa trực tiếp là Tin.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tệp bị xoá bằng phím Delete luôn mất vĩnh viễn ngay lập tức.', answer: false, explain: 'Tệp vào Thùng rác, có thể khôi phục.' },
    { type: 'mcq', q: 'Vì sao cần sao lưu dữ liệu?', options: ['Để máy chạy chậm hơn', 'Để phòng khi dữ liệu bị mất, hỏng', 'Để xoá dữ liệu cũ', 'Không cần thiết'], answer: 1, explain: 'Sao lưu giúp khôi phục khi mất dữ liệu.' },
    { type: 'short', q: 'Sao lưu 25 tệp, mỗi tệp 4 MB. Cần bao nhiêu MB?', answer: '100', unit: 'MB', calc: '25*4', explain: '25 × 4 = 100.' },
    { type: 'short', q: 'Đường dẫn D:\\A\\B\\C\\tep.txt có bao nhiêu thư mục (không tính ổ đĩa)?', answer: '3', unit: 'thư mục', calc: '3', explain: 'A, B, C.' },
    { type: 'mcq', q: 'Tên thư mục nào rõ ràng, dễ tìm nhất?', options: ['New folder (2)', 'abc', 'TinHoc_HocKi1', '123'], answer: 2, explain: 'Tên nói rõ nội dung.' }
  ]
});
})();
