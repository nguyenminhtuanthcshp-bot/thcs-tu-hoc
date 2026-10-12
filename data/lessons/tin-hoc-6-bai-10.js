/* Tin học 6 – Bài 10. Sơ đồ tư duy. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-10', {
  objectives: [
    'Nêu được sơ đồ tư duy là gì và các thành phần của sơ đồ tư duy.',
    'Trình bày được ưu điểm của sơ đồ tư duy và của việc tạo sơ đồ tư duy bằng phần mềm.',
    'Sắp xếp được thông tin dưới dạng sơ đồ tư duy cho một chủ đề quen thuộc.'
  ],
  intro: 'Trước buổi dã ngoại, cả nhóm cần nhớ rất nhiều việc: mang gì, đi đâu, ai làm gì. Thay vì viết một danh sách dài, em có thể vẽ một <b>sơ đồ tư duy</b> để nhìn thấy tất cả chỉ trong một trang.',
  steps: [
    { title: 'Sơ đồ tư duy là gì?', html: `<p><b>Sơ đồ tư duy</b> là cách trình bày thông tin bằng hình vẽ gồm <b>chủ đề chính</b> ở trung tâm, các <b>chủ đề nhánh</b> toả ra xung quanh và các <b>ý chi tiết</b> nối vào mỗi nhánh, kết hợp từ ngắn gọn, màu sắc, hình ảnh.</p>`,
      svg: S.mindmap({ center: 'Buổi dã ngoại', branches: [{ title: 'Đồ dùng', items: ['Nước uống, mũ', 'Túi đựng rác'] }, { title: 'Địa điểm', items: ['Công viên gần trường'] }, { title: 'Phân công', items: ['Nhóm 1: đồ ăn', 'Nhóm 2: trò chơi'] }, { title: 'An toàn', items: ['Đi theo nhóm', 'Nghe hướng dẫn'] }], w: 640, size: 14 }), caption: 'Sơ đồ tư duy chuẩn bị buổi dã ngoại: chủ đề chính, các nhánh và ý chi tiết.' },
    { title: 'Ưu điểm của sơ đồ tư duy', html: `<ul><li>Dễ thấy mối liên hệ giữa các ý; dễ ghi nhớ.</li><li>Ngắn gọn, trực quan, có màu sắc, hình ảnh.</li><li>Dễ bổ sung, phát triển thêm ý.</li></ul>` },
    { title: 'Các bước tạo sơ đồ tư duy', html: `<p>Có thể vẽ trên giấy hoặc dùng phần mềm (ví dụ các phần mềm tạo sơ đồ tư duy miễn phí).</p>`,
      svg: S.flow({ items: ['Viết chủ đề chính ở giữa', 'Thêm các chủ đề nhánh', 'Thêm ý chi tiết cho mỗi nhánh', 'Thêm màu, hình ảnh, chỉnh sửa'], size: 13, label: 'Các bước tạo sơ đồ tư duy' }), caption: 'Bốn bước tạo một sơ đồ tư duy.' },
    { title: 'Ưu điểm khi dùng phần mềm', html: `<p>Phần mềm giúp: sửa, xoá, di chuyển nhánh dễ dàng; sơ đồ đẹp, rõ ràng; lưu, in, chia sẻ qua mạng; mở rộng không giới hạn khổ giấy.</p>
      <div class="box key">Mỗi nhánh nên dùng từ khoá ngắn gọn thay vì cả câu dài.</div>` }
  ],
  summary: 'Sơ đồ tư duy gồm chủ đề chính ở trung tâm, các chủ đề nhánh và ý chi tiết, dùng từ khoá ngắn gọn, màu sắc, hình ảnh. Sơ đồ tư duy giúp thấy mối liên hệ, dễ nhớ, dễ phát triển ý. Tạo bằng phần mềm thì dễ sửa, đẹp, dễ lưu và chia sẻ.',
  examples: [
    { title: 'Xác định thành phần', problem: 'Trong sơ đồ “Buổi dã ngoại” ở bước 1, “Đồ dùng” là thành phần nào? “Nước uống, mũ” là thành phần nào?', solution: '“Đồ dùng” là chủ đề nhánh; “Nước uống, mũ” là ý chi tiết của nhánh đó.' },
    { title: 'Chọn từ khoá', problem: 'Nên ghi lên nhánh “Chúng ta cần mang theo nước uống để không bị khát” hay “Nước uống”?', solution: '“Nước uống” – ngắn gọn, đúng nguyên tắc dùng từ khoá.' },
    { title: 'Đếm nhánh', problem: 'Một sơ đồ có 5 nhánh chính, mỗi nhánh 3 ý chi tiết. Sơ đồ có bao nhiêu ý chi tiết?', solution: '5 × 3 = 15 ý chi tiết.' }
  ],
  exercises: [
    { question: 'Lập sơ đồ tư duy (bằng lời) cho chủ đề “Em tự học ở nhà” với ít nhất 3 nhánh.', hints: ['Chủ đề chính đặt ở giữa.', 'Gợi ý nhánh: thời gian, góc học tập, môn học, nghỉ ngơi.'], solution: 'Ví dụ: Chủ đề “Em tự học ở nhà”; nhánh “Thời gian” (tối 19h–21h), “Góc học tập” (gọn gàng, đủ sáng), “Môn học” (Toán, Văn, Tin), “Nghỉ ngơi” (giải lao 5 phút).' },
    { question: 'Nêu hai ưu điểm của việc tạo sơ đồ tư duy bằng phần mềm so với vẽ tay.', hints: ['Nghĩ đến việc sửa chữa.', 'Nghĩ đến việc chia sẻ.'], solution: 'Dễ sửa, di chuyển nhánh; dễ lưu, in và chia sẻ qua mạng (hoặc: đẹp, không giới hạn khổ giấy).' },
    { question: 'Sơ đồ có 4 nhánh, mỗi nhánh 2 ý chi tiết; em thêm 1 nhánh mới có 3 ý. Sơ đồ có tất cả bao nhiêu ý chi tiết?', hints: ['4 × 2 = ?', 'Cộng thêm 3.'], solution: '4 × 2 + 3 = 11 ý chi tiết.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chủ đề chính của sơ đồ tư duy thường được đặt ở trung tâm.', answer: true, explain: 'Các nhánh toả ra từ chủ đề chính.' },
    { type: 'mcq', q: 'Trên các nhánh của sơ đồ tư duy nên ghi:', options: ['cả đoạn văn dài', 'từ khoá ngắn gọn', 'không ghi gì', 'chỉ ghi số'], answer: 1, explain: 'Dùng từ khoá ngắn gọn.' },
    { type: 'mcq', q: 'Đâu là ưu điểm của sơ đồ tư duy?', options: ['Khó nhìn', 'Thấy rõ mối liên hệ giữa các ý', 'Không thể bổ sung ý', 'Chỉ dùng được cho môn Toán'], answer: 1, explain: 'Sơ đồ giúp thấy mối liên hệ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sơ đồ tư duy chỉ có thể vẽ bằng máy tính.', answer: false, explain: 'Có thể vẽ tay trên giấy.' },
    { type: 'short', q: 'Sơ đồ có 6 nhánh, mỗi nhánh 2 ý chi tiết. Có bao nhiêu ý chi tiết?', answer: '12', unit: 'ý', calc: '6*2', explain: '6 × 2 = 12.' },
    { type: 'mcq', q: 'Bước đầu tiên khi tạo sơ đồ tư duy là:', options: ['tô màu', 'viết chủ đề chính', 'thêm ý chi tiết', 'in sơ đồ'], answer: 1, explain: 'Bắt đầu từ chủ đề chính.' },
    { type: 'mcq', q: 'Lợi ích của phần mềm tạo sơ đồ tư duy là:', options: ['dễ sửa và chia sẻ', 'không lưu được', 'chỉ có một màu', 'không in được'], answer: 0, explain: 'Phần mềm giúp sửa, lưu, chia sẻ dễ dàng.' },
    { type: 'short', q: 'Sơ đồ có 3 nhánh, mỗi nhánh 4 ý; xoá đi 2 ý. Còn bao nhiêu ý chi tiết?', answer: '10', unit: 'ý', calc: '3*4-2', explain: '12 − 2 = 10.' }
  ]
});
})();
