/* KHTN 9 – Bài 48. Ứng dụng công nghệ di truyền vào đời sống. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-48', {
  objectives: [
    'Nêu được khái niệm công nghệ di truyền và kĩ thuật chuyển gene (kĩ thuật DNA tái tổ hợp).',
    'Nêu được một số ứng dụng của công nghệ di truyền trong nông nghiệp, y học, pháp y, bảo vệ môi trường.',
    'Nêu được các vấn đề đạo đức sinh học và an toàn sinh học liên quan tới công nghệ di truyền.'
  ],
  intro: 'Trước kia, insulin chữa bệnh tiểu đường được tách từ tuỵ lợn, bò với số lượng hạn chế. Ngày nay, vi khuẩn mang gene insulin người sản xuất insulin với số lượng lớn, giá rẻ – thành tựu của <b>công nghệ di truyền</b>.',
  steps: [
    { title: 'Công nghệ di truyền', html: `<p><b>Công nghệ di truyền</b> là ngành kĩ thuật về quy trình ứng dụng các kiến thức về cấu trúc, chức năng của vật chất di truyền để tạo ra sinh vật, sản phẩm mới phục vụ con người.</p>
      <p><b>Kĩ thuật chuyển gene</b>: chuyển một đoạn DNA mang gene mong muốn từ tế bào của loài này vào tế bào của loài khác, nhờ vật chuyển (thường là plasmid của vi khuẩn), tạo ra <b>sinh vật biến đổi gene</b>.</p>` },
    { title: 'Các bước tạo vi khuẩn sản xuất insulin', html: `<ol><li>Tách gene mã hoá insulin từ tế bào người và tách plasmid từ vi khuẩn.</li><li>Cắt và nối gene insulin vào plasmid ⇒ <b>DNA tái tổ hợp</b>.</li><li>Đưa DNA tái tổ hợp vào vi khuẩn E. coli.</li><li>Nuôi vi khuẩn sinh sản nhanh ⇒ thu và tinh chế insulin.</li></ol>`,
      svg: S.geneTransfer(), caption: 'Sơ đồ tạo vi khuẩn E. coli mang gene insulin người.' },
    { title: 'Ứng dụng', html: `<table><tr><th>Lĩnh vực</th><th>Ví dụ</th></tr><tr><td>Nông nghiệp</td><td>cây trồng kháng sâu, chịu hạn, lúa giàu vitamin A (“gạo vàng”), ngô biến đổi gene</td></tr><tr><td>Y học</td><td>sản xuất insulin, hormone tăng trưởng, vaccine; chẩn đoán bệnh di truyền</td></tr><tr><td>Pháp y</td><td>xác định danh tính, quan hệ huyết thống bằng phân tích DNA</td></tr><tr><td>Môi trường</td><td>vi sinh vật phân huỷ dầu loang, xử lí chất thải</td></tr></table>`,
      svg: S.mindmap({ center: 'Công nghệ di truyền', branches: [{ title: 'Nông nghiệp', items: ['Cây kháng sâu, chịu hạn', 'Gạo vàng giàu vitamin A'] }, { title: 'Y học', items: ['Insulin, vaccine', 'Chẩn đoán bệnh di truyền'] }, { title: 'Pháp y', items: ['Xác định danh tính', 'Xét nghiệm huyết thống'] }, { title: 'Môi trường', items: ['Vi sinh vật phân huỷ dầu'] }], size: 13, label: 'Một số ứng dụng của công nghệ di truyền' }), caption: 'Công nghệ di truyền được ứng dụng trong nhiều lĩnh vực.' },
    { title: 'Đạo đức sinh học', html: `<ul><li>Lo ngại về an toàn thực phẩm biến đổi gene, nguy cơ gene chuyển phát tán sang loài hoang dại, ảnh hưởng đa dạng sinh học.</li><li>Vấn đề đạo đức: nhân bản vô tính người, chỉnh sửa gene phôi người, bảo mật thông tin di truyền cá nhân, lựa chọn giới tính.</li></ul>
      <p>Mỗi quốc gia có quy định quản lí sinh vật biến đổi gene (đánh giá rủi ro, ghi nhãn sản phẩm) để sử dụng công nghệ an toàn, có trách nhiệm.</p>` }
  ],
  summary: 'Công nghệ di truyền ứng dụng hiểu biết về vật chất di truyền để tạo sinh vật, sản phẩm mới. Kĩ thuật chuyển gene: tạo DNA tái tổ hợp (gene + plasmid), chuyển vào tế bào nhận (ví dụ E. coli sản xuất insulin). Ứng dụng: nông nghiệp, y học, pháp y, môi trường. Cần quan tâm an toàn sinh học và đạo đức sinh học.',
  examples: [
    { title: 'Vì sao dùng vi khuẩn?', problem: 'Vì sao người ta thường dùng vi khuẩn E. coli làm tế bào nhận để sản xuất insulin?', solution: 'E. coli sinh sản rất nhanh, dễ nuôi, cấu tạo đơn giản ⇒ sản xuất được lượng lớn insulin trong thời gian ngắn.' },
    { title: 'Số vi khuẩn', problem: 'Một vi khuẩn mang gene insulin, cứ 20 phút phân chia một lần. Sau 2 giờ có bao nhiêu vi khuẩn (điều kiện lí tưởng)?', solution: '2 giờ = 6 lần phân chia ⇒ 2<sup>6</sup> = 64 vi khuẩn.' },
    { title: 'Pháp y', problem: 'Vì sao phân tích DNA có thể xác định danh tính một người?', solution: 'Trình tự DNA (một số đoạn đặc trưng) của mỗi người là duy nhất (trừ sinh đôi cùng trứng), nên so sánh mẫu DNA giúp xác định danh tính, quan hệ huyết thống.' }
  ],
  exercises: [
    { question: 'Nêu các bước chính của kĩ thuật chuyển gene tạo vi khuẩn sản xuất insulin.', hints: ['Tách gene và plasmid.', 'Tạo DNA tái tổ hợp, chuyển vào vi khuẩn, nuôi.'], solution: 'Tách gene insulin và plasmid → nối tạo DNA tái tổ hợp → chuyển vào E. coli → nuôi vi khuẩn, thu insulin.' },
    { question: 'Một vi khuẩn phân chia 30 phút một lần. Sau 3 giờ, từ 1 vi khuẩn có bao nhiêu vi khuẩn (điều kiện lí tưởng)?', hints: ['Số lần phân chia = 180 / 30.', 'Số vi khuẩn = 2<sup>k</sup>.'], solution: 'k = 6 ⇒ 64 vi khuẩn.' },
    { question: 'Nêu một lợi ích và một lo ngại về cây trồng biến đổi gene.', hints: ['Năng suất, kháng sâu.', 'Môi trường, sức khoẻ.'], solution: 'Lợi ích: kháng sâu nên giảm thuốc trừ sâu, tăng năng suất. Lo ngại: gene chuyển có thể phát tán sang loài hoang dại, ảnh hưởng đa dạng sinh học; cần đánh giá an toàn thực phẩm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Insulin chữa bệnh tiểu đường có thể được sản xuất nhờ vi khuẩn mang gene insulin người.', answer: true, explain: 'Thành tựu của công nghệ DNA tái tổ hợp.' },
    { type: 'mcq', q: 'Vật chuyển gene thường dùng trong kĩ thuật chuyển gene vào vi khuẩn là:', options: ['ribosome', 'plasmid', 'ty thể', 'không bào'], answer: 1, explain: 'Plasmid là DNA vòng nhỏ của vi khuẩn.' },
    { type: 'short', q: 'Một vi khuẩn phân chia 20 phút một lần. Sau 1 giờ có bao nhiêu vi khuẩn (từ 1 vi khuẩn, điều kiện lí tưởng)?', answer: '8', unit: 'vi khuẩn', calc: 'Math.pow(2,60/20)', explain: '3 lần phân chia ⇒ 2<sup>3</sup> = 8.' },
    { type: 'mcq', q: '“Gạo vàng” là giống lúa biến đổi gene giàu:', options: ['vitamin C', 'tiền vitamin A (β-carotene)', 'protein', 'sắt'], answer: 1, explain: 'Bổ sung gene tổng hợp β-carotene.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công nghệ di truyền không có bất kì rủi ro nào nên không cần quản lí.', answer: false, explain: 'Cần đánh giá an toàn sinh học và quản lí chặt chẽ.' },
    { type: 'mcq', q: 'Ứng dụng của công nghệ di truyền trong pháp y là:', options: ['tạo giống lúa mới', 'xác định danh tính bằng phân tích DNA', 'sản xuất phân bón', 'xử lí nước thải'], answer: 1, explain: 'Phân tích DNA để xác định danh tính.' },
    { type: 'short', q: 'Một vi khuẩn phân chia 30 phút một lần. Sau 2 giờ có bao nhiêu vi khuẩn (từ 1 vi khuẩn)?', answer: '16', unit: 'vi khuẩn', calc: 'Math.pow(2,120/30)', explain: '4 lần phân chia ⇒ 16.' },
    { type: 'mcq', q: 'DNA tái tổ hợp được tạo thành bằng cách:', options: ['nối gene cần chuyển với plasmid', 'trộn hai loại protein', 'lai hai giống lúa', 'chiếu tia UV'], answer: 0, explain: 'Gene + vật chuyển = DNA tái tổ hợp.' }
  ]
});
})();
