/* Tin học 8 – Bài 16. Tin học với nghề nghiệp. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-16', {
  objectives: [
    'Nêu được một số nghề nghiệp đặc thù trong lĩnh vực tin học và công việc chính của mỗi nghề.',
    'Nhận biết được vai trò của tin học trong các ngành nghề khác.',
    'Biết các phẩm chất, năng lực cần có và tự định hướng bước đầu cho bản thân.'
  ],
  intro: 'Ai viết ra ứng dụng em dùng hằng ngày? Ai giữ cho mạng của trường hoạt động, ai bảo vệ tài khoản ngân hàng khỏi kẻ gian? Đó là những người làm <b>nghề tin học</b>.',
  steps: [
    { title: 'Một số nghề tin học', html: `<p>Lĩnh vực tin học có nhiều nghề khác nhau:</p>`,
      svg: S.mindmap({ center: 'Nghề tin học', branches: [{ title: 'Phát triển phần mềm', items: ['Lập trình viên', 'Kiểm thử phần mềm'] }, { title: 'Mạng và hệ thống', items: ['Quản trị mạng', 'An toàn thông tin'] }, { title: 'Dữ liệu', items: ['Phân tích dữ liệu', 'Trí tuệ nhân tạo'] }, { title: 'Thiết kế', items: ['Đồ hoạ, giao diện', 'Trò chơi'] }], w: 640, size: 13 }), caption: 'Một số nhóm nghề trong lĩnh vực tin học.' },
    { title: 'Công việc của một số nghề', html: `<ul><li><b>Lập trình viên</b>: phân tích yêu cầu, viết, kiểm thử, bảo trì chương trình.</li><li><b>Quản trị mạng</b>: lắp đặt, cấu hình, giám sát mạng máy tính.</li><li><b>Chuyên viên an toàn thông tin</b>: bảo vệ hệ thống, dữ liệu khỏi tấn công.</li><li><b>Chuyên viên phân tích dữ liệu</b>: thu thập, xử lí, trực quan hoá dữ liệu để hỗ trợ ra quyết định.</li></ul>` },
    { title: 'Tin học trong mọi ngành', html: `<p>Bác sĩ đọc phim chụp trên máy tính, kế toán dùng phần mềm kế toán, nông dân dùng cảm biến tưới tự động, giáo viên dạy trực tuyến… Kĩ năng tin học cần cho hầu hết các nghề.</p>`,
      svg: S.table({ title: 'Ví dụ ứng dụng tin học trong các ngành', head: ['Ngành', 'Ứng dụng'], rows: [['Y tế', 'Hồ sơ bệnh án điện tử, chẩn đoán hình ảnh'], ['Giáo dục', 'Lớp học trực tuyến, học liệu số'], ['Nông nghiệp', 'Cảm biến, tưới tự động'], ['Giao thông', 'Bản đồ số, điều khiển đèn tín hiệu']], colW: 310 }), caption: 'Tin học hỗ trợ mọi lĩnh vực.' },
    { title: 'Phẩm chất và năng lực cần có', html: `<p>Tư duy logic, kiên nhẫn, ham học hỏi (công nghệ thay đổi nhanh), làm việc nhóm, trung thực và có trách nhiệm (đặc biệt với dữ liệu của người khác), tiếng Anh. Có thể tìm hiểu qua câu lạc bộ tin học, các cuộc thi lập trình, dự án nhỏ.</p>
      <div class="box key">Nghề tin học đa dạng; kĩ năng tin học cần cho mọi nghề.</div>` }
  ],
  summary: 'Một số nghề tin học: lập trình viên, kiểm thử phần mềm, quản trị mạng, an toàn thông tin, phân tích dữ liệu, trí tuệ nhân tạo, thiết kế đồ hoạ/trò chơi. Tin học được ứng dụng trong y tế, giáo dục, nông nghiệp, giao thông… Cần tư duy logic, ham học hỏi, làm việc nhóm, trung thực, trách nhiệm.',
  examples: [
    { title: 'Ghép nghề và công việc', problem: 'Ai chịu trách nhiệm phát hiện, ngăn chặn tấn công vào hệ thống của ngân hàng?', solution: 'Chuyên viên an toàn thông tin.' },
    { title: 'Tin học trong nghề khác', problem: 'Nêu một cách người bán hàng dùng tin học.', solution: 'Quản lí hàng hoá bằng bảng tính/phần mềm, bán hàng trực tuyến, thanh toán điện tử.' },
    { title: 'Định hướng', problem: 'Bạn Minh thích vẽ và thích máy tính. Gợi ý nghề phù hợp.', solution: 'Thiết kế đồ hoạ, thiết kế giao diện, làm hoạt hình, thiết kế trò chơi.' }
  ],
  exercises: [
    { question: 'Kể tên ba nghề trong lĩnh vực tin học và công việc chính của mỗi nghề.', hints: ['Nghĩ về phần mềm, mạng, dữ liệu.', 'Mỗi nghề làm gì?'], solution: 'Lập trình viên – viết chương trình; quản trị mạng – vận hành mạng; phân tích dữ liệu – xử lí dữ liệu hỗ trợ quyết định.' },
    { question: 'Vì sao người làm nghề tin học cần trung thực, có trách nhiệm?', hints: ['Họ tiếp cận những gì?', 'Hậu quả nếu lạm dụng?'], solution: 'Họ có thể tiếp cận dữ liệu, hệ thống quan trọng của người khác; lạm dụng gây thiệt hại lớn và vi phạm pháp luật.' },
    { question: 'Một cuộc khảo sát (số liệu minh hoạ) lớp 40 bạn: 12 bạn muốn làm nghề liên quan tin học. Tỉ lệ phần trăm?', hints: ['12 : 40.', 'Nhân 100%.'], solution: '30%.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kĩ năng tin học cần thiết cho rất nhiều ngành nghề, không chỉ nghề tin học.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Nghề lắp đặt, cấu hình, giám sát mạng máy tính:', options: ['Quản trị mạng', 'Thiết kế đồ hoạ', 'Kế toán', 'Phân tích dữ liệu'], answer: 0, explain: 'Quản trị mạng.' },
    { type: 'mcq', q: 'Công việc chính của lập trình viên:', options: ['Viết và kiểm thử chương trình', 'Sửa xe máy', 'Trồng cây', 'Bán vé'], answer: 0, explain: 'Viết chương trình.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người làm tin học không cần học thêm vì công nghệ ít thay đổi.', answer: false, explain: 'Công nghệ thay đổi nhanh.' },
    { type: 'short', q: 'Khảo sát minh hoạ: 45 bạn, 9 bạn thích lập trình. Tỉ lệ phần trăm?', answer: '20', unit: '%', calc: '9/45*100', explain: '20%.' },
    { type: 'mcq', q: 'Ứng dụng tin học trong y tế là:', options: ['hồ sơ bệnh án điện tử', 'cày ruộng bằng trâu', 'viết thư tay', 'đèn dầu'], answer: 0, explain: 'Bệnh án điện tử.' },
    { type: 'short', q: 'Câu lạc bộ tin học có 3 nhóm, mỗi nhóm 8 bạn. Tổng số thành viên?', answer: '24', unit: 'bạn', calc: '3*8', explain: '24.' },
    { type: 'mcq', q: 'Phẩm chất quan trọng của người làm an toàn thông tin:', options: ['trung thực, có trách nhiệm', 'hay tò mò đọc trộm dữ liệu', 'ngại học hỏi', 'làm việc tuỳ tiện'], answer: 0, explain: 'Trung thực, trách nhiệm.' }
  ]
});
})();
