/* Tin học 9 – Bài 17. Tin học và thế giới nghề nghiệp. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-17', {
  objectives: [
    'Nêu được một số nhóm nghề trong lĩnh vực tin học và sản phẩm, công việc tiêu biểu.',
    'Nhận biết được xu hướng: chuyển đổi số, trí tuệ nhân tạo, dữ liệu lớn tạo ra nhu cầu nghề nghiệp mới.',
    'Tìm hiểu được con đường học tập (ngành đào tạo) và tự đánh giá sự phù hợp của bản thân.'
  ],
  intro: 'Sắp kết thúc cấp THCS, em đang nghĩ đến lựa chọn học tập sắp tới. Tin học mở ra nhiều nghề nghiệp – và kĩ năng tin học cần cho hầu hết mọi nghề.',
  steps: [
    { title: 'Các nhóm nghề trong lĩnh vực tin học', html: `<p>Có thể chia thành các nhóm nghề:</p>`,
      svg: S.table({ title: 'Một số nhóm nghề tin học', head: ['Nhóm nghề', 'Công việc tiêu biểu'], rows: [['Phát triển phần mềm', 'Lập trình, kiểm thử'], ['Hạ tầng, mạng', 'Quản trị mạng, đám mây'], ['An toàn thông tin', 'Phát hiện tấn công'], ['Dữ liệu và trí tuệ nhân tạo', 'Phân tích dữ liệu, AI'], ['Thiết kế số', 'Giao diện, đồ hoạ']], colW: 260 }), caption: 'Mỗi nhóm có nhiều nghề cụ thể.' },
    { title: 'Xu hướng nghề nghiệp', html: `<p><b>Chuyển đổi số</b> diễn ra ở mọi ngành (chính phủ số, ngân hàng số, y tế số…), làm tăng nhu cầu nhân lực tin học. <b>Trí tuệ nhân tạo</b>, <b>dữ liệu lớn</b>, <b>Internet vạn vật</b> tạo ra những nghề mới; nhiều công việc lặp lại được tự động hoá, đòi hỏi người lao động liên tục học kĩ năng mới.</p>`,
      svg: S.mindmap({ center: 'Xu hướng công nghệ', branches: [{ title: 'Trí tuệ nhân tạo', items: ['Kĩ sư AI', 'Gán nhãn dữ liệu'] }, { title: 'Dữ liệu lớn', items: ['Phân tích dữ liệu'] }, { title: 'Internet vạn vật', items: ['Kĩ sư hệ thống nhúng'] }, { title: 'An ninh mạng', items: ['Chuyên gia bảo mật'] }], w: 640, size: 13 }), caption: 'Công nghệ mới, nghề mới.' },
    { title: 'Con đường học tập', html: `<p>Sau THCS có thể học THPT (chọn các môn phù hợp như Tin học, Toán) rồi học đại học, cao đẳng các ngành như Khoa học máy tính, Công nghệ thông tin, Kĩ thuật phần mềm, An toàn thông tin, Khoa học dữ liệu…; hoặc học nghề tại các trường nghề (lập trình, quản trị mạng, thiết kế đồ hoạ).</p>`,
      svg: S.flow({ items: ['THCS', 'THPT / Trường nghề', 'Cao đẳng / Đại học', 'Làm việc và học suốt đời'], size: 13, label: 'Một số con đường học tập' }), caption: 'Có nhiều con đường khác nhau.' },
    { title: 'Tự đánh giá bản thân', html: `<p>Hãy tự hỏi: em có thích giải quyết vấn đề, tư duy logic, kiên nhẫn sửa lỗi, ham học công nghệ mới, làm việc nhóm không? Tìm hiểu thêm qua câu lạc bộ, cuộc thi, dự án, trò chuyện với người làm nghề.</p>
      <div class="box key">Nghề tin học đa dạng, thay đổi nhanh – cần học suốt đời.</div>` }
  ],
  summary: 'Nhóm nghề tin học: phát triển phần mềm, hạ tầng – mạng, an toàn thông tin, dữ liệu và trí tuệ nhân tạo, thiết kế số. Chuyển đổi số, AI, dữ liệu lớn, IoT tạo nhu cầu và nghề mới. Con đường học tập: THPT hoặc trường nghề, cao đẳng, đại học các ngành Khoa học máy tính, CNTT, Kĩ thuật phần mềm, An toàn thông tin, Khoa học dữ liệu… Cần tự đánh giá sở thích, năng lực và học suốt đời.',
  examples: [
    { title: 'Ghép nghề', problem: 'Người xây dựng hệ thống gợi ý sản phẩm dựa trên dữ liệu mua hàng thuộc nhóm nghề nào?', solution: 'Dữ liệu và trí tuệ nhân tạo.' },
    { title: 'Chuyển đổi số', problem: 'Nêu một ví dụ chuyển đổi số trong dịch vụ công.', solution: 'Nộp hồ sơ, làm thủ tục hành chính trực tuyến trên cổng dịch vụ công.' },
    { title: 'Khảo sát', problem: 'Khảo sát minh hoạ: 120 học sinh lớp 9, 30 bạn muốn theo ngành liên quan tin học. Tỉ lệ?', solution: '25%.' }
  ],
  exercises: [
    { question: 'Kể tên ba ngành đào tạo đại học liên quan đến tin học.', hints: ['Ngành về máy tính, phần mềm.', 'Ngành về bảo mật, dữ liệu.'], solution: 'Ví dụ: Khoa học máy tính, Kĩ thuật phần mềm, An toàn thông tin (hoặc Khoa học dữ liệu, CNTT).' },
    { question: 'Vì sao người làm nghề tin học cần học suốt đời?', hints: ['Công nghệ thay đổi thế nào?', 'Công việc lặp lại bị gì?'], solution: 'Công nghệ thay đổi rất nhanh, nhiều công việc được tự động hoá; phải liên tục cập nhật kiến thức, kĩ năng mới.' },
    { question: 'Lập kế hoạch 3 việc em có thể làm trong năm học tới để tìm hiểu nghề tin học.', hints: ['Hoạt động ở trường.', 'Tìm hiểu từ người làm nghề.'], solution: 'Ví dụ: tham gia câu lạc bộ tin học; làm một dự án nhỏ (trang web lớp, trò chơi Scratch); phỏng vấn một người làm nghề.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chuyển đổi số làm tăng nhu cầu nhân lực có kĩ năng tin học.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Công việc bảo vệ hệ thống, phát hiện tấn công thuộc nhóm nghề:', options: ['An toàn thông tin', 'Thiết kế số', 'Kế toán', 'Du lịch'], answer: 0, explain: 'An toàn thông tin.' },
    { type: 'mcq', q: 'Ngành đào tạo liên quan trực tiếp tới tin học:', options: ['Khoa học máy tính', 'Nông học', 'Luật', 'Âm nhạc'], answer: 0, explain: 'Khoa học máy tính.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ có một con đường duy nhất là học đại học mới làm được nghề tin học.', answer: false, explain: 'Có thể học nghề, cao đẳng…' },
    { type: 'short', q: 'Khảo sát minh hoạ: 150 bạn, 45 bạn thích lập trình. Tỉ lệ (%)?', answer: '30', unit: '%', calc: '45/150*100', explain: '30%.' },
    { type: 'mcq', q: 'Xu hướng công nghệ tạo ra nghề mới là:', options: ['Trí tuệ nhân tạo', 'Máy chữ cơ', 'Điện báo', 'Đèn dầu'], answer: 0, explain: 'AI.' },
    { type: 'short', q: 'Câu lạc bộ có 36 thành viên chia đều thành 4 nhóm dự án. Mỗi nhóm bao nhiêu bạn?', answer: '9', unit: 'bạn', calc: '36/4', explain: '9.' },
    { type: 'mcq', q: 'Thiết kế giao diện ứng dụng thuộc nhóm nghề:', options: ['Thiết kế số', 'Hạ tầng mạng', 'An toàn thông tin', 'Dữ liệu'], answer: 0, explain: 'Thiết kế số.' }
  ]
});
})();
