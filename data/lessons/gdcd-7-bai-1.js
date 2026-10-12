/* GDCD 7 – Bài 1. Tự hào về truyền thống quê hương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-1', {
  objectives: [
    'Nêu được một số truyền thống văn hoá, truyền thống yêu nước chống giặc ngoại xâm của quê hương.',
    'Thực hiện được những việc làm phù hợp để giữ gìn, phát huy truyền thống của quê hương.',
    'Phê phán những việc làm trái ngược với truyền thống tốt đẹp của quê hương.'
  ],
  intro: 'Nhân dịp 30/4, lớp 7B tổ chức tham quan nhà truyền thống của xã và phỏng vấn một cựu chiến binh. Các bạn bất ngờ khi biết quê mình có nhiều người con đã góp công bảo vệ Tổ quốc. Đó là <b>truyền thống quê hương</b>.',
  steps: [
    { title: 'Truyền thống quê hương là gì?', html: `<p><b>Truyền thống quê hương</b> là những giá trị tốt đẹp được hình thành trong quá trình lịch sử lâu dài của một vùng đất, được truyền từ thế hệ này sang thế hệ khác: yêu nước, cần cù lao động, hiếu học, tôn sư trọng đạo, đoàn kết, nghề thủ công, lễ hội, ẩm thực…</p>` },
    { title: 'Một số truyền thống tiêu biểu', html: `<p>Mỗi quê hương có những truyền thống riêng:</p>`,
      svg: S.mindmap({ center: 'Truyền thống quê hương', branches: [{ title: 'Yêu nước', items: ['Chống giặc ngoại xâm', 'Đền ơn đáp nghĩa'] }, { title: 'Văn hoá', items: ['Lễ hội, dân ca', 'Ẩm thực, trang phục'] }, { title: 'Lao động', items: ['Cần cù, sáng tạo', 'Làng nghề thủ công'] }, { title: 'Hiếu học', items: ['Tôn sư trọng đạo', 'Khuyến học'] }], w: 640, size: 13 }), caption: 'Ví dụ: dân ca quan họ (Bắc Ninh), đờn ca tài tử (Nam Bộ), làng gốm, làng lụa…' },
    { title: 'Giữ gìn và phát huy', html: `<p>Học sinh có thể: tìm hiểu lịch sử, văn hoá địa phương; tham gia lễ hội, chăm sóc nghĩa trang liệt sĩ, thăm hỏi gia đình chính sách; giới thiệu đặc sản, làng nghề quê mình; học tập tốt để xây dựng quê hương.</p>`,
      svg: S.compare({ title: 'Thái độ với truyền thống quê hương', left: { h: 'Nên', items: ['Tìm hiểu, giới thiệu quê hương', 'Tham gia hoạt động đền ơn đáp nghĩa', 'Học hát dân ca địa phương'] }, right: { h: 'Không nên', items: ['Chê bai phong tục quê mình', 'Viết, vẽ bậy lên di tích', 'Thờ ơ với lịch sử địa phương'] } }), caption: 'Tự hào cần đi đôi với hành động.' },
    { title: 'Ý nghĩa', html: `<p>Truyền thống quê hương là nguồn sức mạnh, niềm tự hào, giúp mỗi người gắn bó với quê hương; góp phần làm phong phú bản sắc văn hoá dân tộc.</p>
      <div class="box key">Hiểu – trân trọng – giữ gìn – phát huy truyền thống quê hương.</div>` }
  ],
  summary: 'Truyền thống quê hương là những giá trị tốt đẹp hình thành trong lịch sử của một vùng đất, truyền qua các thế hệ: yêu nước, cần cù, hiếu học, đoàn kết, văn hoá (lễ hội, dân ca, ẩm thực), nghề thủ công… Học sinh cần tìm hiểu, tự hào, giữ gìn và phát huy bằng việc làm cụ thể; phê phán thái độ chê bai, thờ ơ, phá hoại.',
  examples: [
    { title: 'Nhận diện', problem: 'Hằng năm, đoàn viên xã Đông Hưng đến dọn vệ sinh nghĩa trang liệt sĩ dịp 27/7. Việc làm thể hiện truyền thống gì?', solution: 'Truyền thống yêu nước, “uống nước nhớ nguồn”, đền ơn đáp nghĩa.' },
    { title: 'Phê phán', problem: 'Một nhóm bạn khắc tên lên cột đình làng để “lưu niệm”. Em nhận xét gì?', solution: 'Đó là hành vi xâm hại di tích, trái với truyền thống; cần khuyên ngăn và báo người quản lí di tích.' },
    { title: 'Tính số năm', problem: 'Lễ hội của làng có từ năm 1636. Đến năm 2026 là bao nhiêu năm?', solution: '390 năm.' }
  ],
  exercises: [
    { question: 'Kể hai truyền thống của quê hương em và việc em có thể làm để phát huy.', hints: ['Truyền thống yêu nước, văn hoá, nghề…', 'Việc vừa sức học sinh.'], solution: 'Ví dụ: quê có làng nghề mây tre → giới thiệu sản phẩm với bạn bè qua bài thuyết trình; truyền thống hiếu học → chăm chỉ học tập.' },
    { question: 'Vì sao giới trẻ cần tìm hiểu truyền thống quê hương?', hints: ['Biết để làm gì?', 'Nếu không ai tìm hiểu thì truyền thống sẽ ra sao?'], solution: 'Để hiểu, tự hào, gắn bó với quê hương và tiếp nối, phát huy truyền thống; nếu không, truyền thống có thể mai một.' },
    { question: 'Lớp có 40 bạn, 34 bạn đã từng tham quan di tích địa phương. Tỉ lệ là bao nhiêu phần trăm?', hints: ['34 : 40.', 'Nhân 100%.'], solution: '85%.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyền thống quê hương được truyền từ thế hệ này sang thế hệ khác.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Việc làm phát huy truyền thống yêu nước của quê hương:', options: ['Chăm sóc nghĩa trang liệt sĩ', 'Khắc tên lên di tích', 'Chê bai lễ hội quê nhà', 'Bỏ học đi chơi'], answer: 0, explain: 'Đền ơn đáp nghĩa.' },
    { type: 'mcq', q: 'Dân ca quan họ là truyền thống văn hoá của vùng:', options: ['Bắc Ninh – Bắc Giang', 'Nam Bộ', 'Tây Nguyên', 'Huế'], answer: 0, explain: 'Bắc Ninh, Bắc Giang.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ những vùng nổi tiếng mới có truyền thống tốt đẹp.', answer: false, explain: 'Quê hương nào cũng có.' },
    { type: 'short', q: 'Lễ hội có từ năm 1726. Đến năm 2026 là bao nhiêu năm?', answer: '300', unit: 'năm', calc: '2026-1726', explain: '300.' },
    { type: 'short', q: 'Lớp 45 bạn, 36 bạn biết hát một bài dân ca quê hương. Tỉ lệ (%)?', answer: '80', unit: '%', calc: '36/45*100', explain: '80%.' },
    { type: 'mcq', q: 'Hành vi trái với truyền thống quê hương:', options: ['Viết, vẽ bậy lên di tích', 'Giới thiệu đặc sản quê mình', 'Thăm gia đình thương binh', 'Học nghề truyền thống'], answer: 0, explain: 'Xâm hại di tích.' },
    { type: 'mcq', q: 'Ý nghĩa của truyền thống quê hương:', options: ['nguồn sức mạnh, niềm tự hào', 'gánh nặng cần bỏ', 'không có ý nghĩa', 'chỉ để du lịch'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
