/* LS&ĐL 7 – Lịch sử, Bài 11. Nhà Lý xây dựng và phát triển đất nước (1009 – 1225). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/ls-bai-11', {
  objectives: [
    'Trình bày được sự thành lập nhà Lý và việc dời đô ra Thăng Long.',
    'Mô tả được những nét chính về chính trị, kinh tế, xã hội, văn hoá, tôn giáo thời Lý.',
    'Giới thiệu được những thành tựu tiêu biểu về văn hoá, giáo dục.',
    'Đánh giá được ý nghĩa của sự kiện dời đô.'
  ],
  intro: 'Năm 2010, Hà Nội tổ chức Đại lễ kỉ niệm 1000 năm Thăng Long. Mốc ấy bắt đầu từ mùa thu năm 1010, khi vua Lý Thái Tổ dời đô từ Hoa Lư ra thành Đại La và đổi tên là <b>Thăng Long</b>.',
  steps: [
    { title: 'Thành lập và dời đô', html: `<p>Năm <b>1009</b>, Lý Công Uẩn lên ngôi, lập nhà Lý. Năm <b>1010</b>, nhà vua ban <b>Chiếu dời đô</b>, chuyển kinh đô ra Đại La, đổi tên thành Thăng Long. Năm <b>1054</b>, đổi quốc hiệu thành <b>Đại Việt</b>.</p>` },
    { title: 'Chính trị, pháp luật', html: `<ul><li>Bộ máy nhà nước quân chủ, chia cả nước thành 24 lộ.</li><li>Năm <b>1042</b> ban hành bộ luật <b>Hình thư</b> – bộ luật thành văn đầu tiên.</li><li>Quân đội: cấm quân và quân địa phương; chính sách “ngụ binh ư nông”.</li></ul>` },
    { title: 'Văn hoá, giáo dục', html: `<p>Mốc giáo dục quan trọng:</p>`,
      svg: S.timeline({ title: 'Giáo dục thời Lý', items: [{ y: '1070', s: 'Xây Văn Miếu' }, { y: '1075', s: 'Khoa thi đầu tiên' }, { y: '1076', s: 'Quốc Tử Giám' }] }), caption: 'Quốc Tử Giám – trường đại học đầu tiên của nước ta.' },
    { title: 'Kinh tế, tôn giáo', html: `<p>Khuyến khích nông nghiệp (lễ tịch điền, đắp đê), thủ công, buôn bán (Vân Đồn). Phật giáo rất thịnh: chùa Một Cột (1049).</p>
      <div class="box key">1010 dời đô; 1042 Hình thư; 1054 Đại Việt; 1070 Văn Miếu.</div>` }
  ],
  summary: 'Năm 1009 Lý Công Uẩn lập nhà Lý; năm 1010 dời đô ra Thăng Long; năm 1054 đổi quốc hiệu là Đại Việt. Nhà Lý chia nước thành 24 lộ, ban hành Hình thư (1042), thực hiện “ngụ binh ư nông”. Giáo dục: Văn Miếu (1070), khoa thi đầu tiên (1075), Quốc Tử Giám (1076). Kinh tế phát triển; Phật giáo thịnh hành.',
  examples: [
    { title: 'Ý nghĩa', problem: 'Vì sao dời đô ra Thăng Long?', solution: 'Đại La ở trung tâm đất nước, địa thế rộng, bằng phẳng, thuận lợi giao thông, phát triển lâu dài.' },
    { title: 'Tính thời gian', problem: 'Từ năm 1010 đến năm 2010 là bao nhiêu năm?', solution: '1 000 năm.' },
    { title: 'Giáo dục', problem: 'Văn Miếu xây trước khoa thi đầu tiên bao nhiêu năm?', solution: '1075 − 1070 = 5 năm.' }
  ],
  exercises: [
    { question: 'Bộ luật thành văn đầu tiên của nước ta?', hints: ['Năm 1042.', 'Hình…'], solution: 'Hình thư.' },
    { question: 'Nhà Lý tồn tại 1009 – 1225, bao nhiêu năm?', hints: ['1225 − 1009.', 'Hơn 200.'], solution: '216 năm.' },
    { question: 'Chính sách “ngụ binh ư nông” là gì?', hints: ['Binh lính.', 'Làm ruộng.'], solution: 'Cho quân lính luân phiên về làm ruộng, khi cần thì tập trung – vừa có quân vừa có sản xuất.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm 1010, nhà Lý dời đô ra Thăng Long.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Năm 1054, nhà Lý đổi quốc hiệu thành:', options: ['Đại Việt', 'Đại Cồ Việt', 'Đại Ngu', 'Vạn Xuân'], answer: 0, explain: 'Đại Việt.' },
    { type: 'short', q: 'Nhà Lý tồn tại 1009 – 1225, bao nhiêu năm?', answer: '216', unit: 'năm', calc: '1225-1009', explain: '216.' },
    { type: 'mcq', q: 'Trường đại học đầu tiên của nước ta:', options: ['Quốc Tử Giám', 'Văn Miếu', 'Quốc học Huế', 'Hàn lâm viện'], answer: 0, explain: 'Quốc Tử Giám (1076).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bộ Hình thư được ban hành năm 1070.', answer: false, explain: 'Năm 1042.' },
    { type: 'short', q: 'Từ 1010 đến 2010 là bao nhiêu năm?', answer: '1000', answerText: '1 000', unit: 'năm', calc: '2010-1010', explain: '1 000.' },
    { type: 'mcq', q: 'Văn Miếu được xây dựng năm:', options: ['1070', '1075', '1076', '1010'], answer: 0, explain: '1070.' },
    { type: 'short', q: 'Thời Lý chia cả nước thành bao nhiêu lộ?', answer: '24', unit: 'lộ', calc: '24', explain: '24.' }
  ]
});
})();
