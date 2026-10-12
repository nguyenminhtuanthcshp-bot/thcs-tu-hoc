/* GDCD 8 – Bài 1. Tự hào về truyền thống dân tộc Việt Nam. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-1', {
  objectives: [
    'Nêu được một số truyền thống tốt đẹp của dân tộc Việt Nam.',
    'Nhận biết được giá trị của các truyền thống dân tộc.',
    'Kể được một số biểu hiện của lòng tự hào về truyền thống dân tộc.',
    'Phê phán việc làm trái truyền thống; giữ gìn, phát huy truyền thống bằng việc làm phù hợp.'
  ],
  intro: 'Trong chuyến tham quan bảo tàng, lớp 8A dừng lâu trước sa bàn trận Bạch Đằng năm 938. Hà hỏi: “Vì sao một dân tộc không đông người lại nhiều lần đánh thắng kẻ thù lớn mạnh?”. Câu trả lời nằm ở những <b>truyền thống tốt đẹp</b> của dân tộc.',
  steps: [
    { title: 'Truyền thống dân tộc là gì?', html: `<p><b>Truyền thống dân tộc</b> là những giá trị tốt đẹp (tư tưởng, đạo đức, lối sống, phong tục…) được hình thành trong lịch sử, truyền từ thế hệ này sang thế hệ khác.</p>`,
      svg: S.mindmap({ center: 'Truyền thống Việt Nam', branches: [{ title: 'Yêu nước', items: ['Chống ngoại xâm', 'Bảo vệ chủ quyền'] }, { title: 'Đoàn kết', items: ['Tương thân tương ái', '“Lá lành đùm lá rách”'] }, { title: 'Hiếu học', items: ['Tôn sư trọng đạo', 'Khuyến học'] }, { title: 'Cần cù', items: ['Lao động sáng tạo', 'Hiếu thảo, nhân nghĩa'] }], w: 640, size: 13 }), caption: 'Một số truyền thống tiêu biểu.' },
    { title: 'Truyền thống yêu nước qua các chiến thắng', html: `<p>Lòng yêu nước được thể hiện rõ qua các mốc lịch sử:</p>`,
      svg: S.table({ title: 'Một số chiến thắng tiêu biểu', head: ['Năm', 'Chiến thắng'], rows: [['938', 'Bạch Đằng (Ngô Quyền)'], ['1288', 'Bạch Đằng (Trần Hưng Đạo)'], ['1427', 'Chi Lăng – Xương Giang'], ['1789', 'Ngọc Hồi – Đống Đa'], ['1954', 'Điện Biên Phủ'], ['1975', 'Giải phóng miền Nam']], colW: 250 }), caption: 'Các mốc năm đã được kiểm chứng.' },
    { title: 'Giá trị của truyền thống', html: `<ul><li>Là nền tảng tinh thần, sức mạnh giúp dân tộc vượt qua khó khăn.</li><li>Góp phần tạo nên bản sắc riêng của Việt Nam.</li><li>Giáo dục, nuôi dưỡng nhân cách mỗi người.</li></ul>` },
    { title: 'Biểu hiện của lòng tự hào', html: `<ul><li>Tìm hiểu lịch sử, văn hoá dân tộc; giới thiệu với bạn bè quốc tế.</li><li>Tham gia đền ơn đáp nghĩa, thăm hỏi gia đình chính sách.</li><li>Học tập chăm chỉ, giữ gìn tiếng Việt, trang phục, phong tục đẹp.</li></ul>
      <div class="box key">Phê phán: chê bai, xuyên tạc lịch sử; sùng ngoại, coi thường văn hoá dân tộc.</div>` }
  ],
  summary: 'Truyền thống dân tộc là giá trị tốt đẹp truyền qua nhiều thế hệ: yêu nước, đoàn kết, cần cù, hiếu học, hiếu thảo, nhân nghĩa… Truyền thống là nền tảng tinh thần và bản sắc của dân tộc. Học sinh thể hiện lòng tự hào bằng việc tìm hiểu, giữ gìn, phát huy và phê phán hành vi trái truyền thống.',
  examples: [
    { title: 'Nhận diện truyền thống', problem: 'Câu “Uống nước nhớ nguồn” nói về truyền thống nào?', solution: 'Biết ơn, đền ơn đáp nghĩa.' },
    { title: 'Tính khoảng thời gian', problem: 'Từ chiến thắng Bạch Đằng năm 938 đến năm 2026 là bao nhiêu năm?', solution: '2026 − 938 = 1088 năm.' },
    { title: 'Ứng xử', problem: 'Một bạn đăng ảnh chế xuyên tạc về anh hùng dân tộc. Em làm gì?', solution: 'Không chia sẻ, góp ý với bạn, báo cáo nội dung sai lệch, chia sẻ thông tin đúng.' }
  ],
  exercises: [
    { question: 'Kể ba việc học sinh lớp 8 có thể làm để phát huy truyền thống hiếu học.', hints: ['Nghĩ tới việc học hằng ngày.', 'Nghĩ tới thầy cô, bạn bè.'], solution: 'Học tập chăm chỉ; kính trọng thầy cô; giúp bạn học yếu; tham gia quỹ khuyến học.' },
    { question: 'Chiến thắng Điện Biên Phủ (1954) cách chiến thắng Bạch Đằng của Trần Hưng Đạo (1288) bao nhiêu năm?', hints: ['Lấy năm sau trừ năm trước.', '1954 − 1288.'], solution: '666 năm.' },
    { question: 'Vì sao cần phê phán thái độ sùng ngoại, coi thường văn hoá dân tộc?', hints: ['Nghĩ đến bản sắc.', 'Nghĩ đến lòng tự trọng dân tộc.'], solution: 'Vì thái độ đó làm mai một bản sắc, giảm lòng tự hào và sức mạnh tinh thần của dân tộc; tiếp thu văn hoá nước ngoài phải có chọn lọc.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyền thống dân tộc là những giá trị tốt đẹp được truyền từ thế hệ này sang thế hệ khác.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Truyền thống nổi bật nhất trong lịch sử chống ngoại xâm:', options: ['Yêu nước', 'Hiếu khách', 'Cần kiệm', 'Hiếu học'], answer: 0, explain: 'Yêu nước.' },
    { type: 'short', q: 'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?', answer: '1954', calc: '1954', explain: 'Năm 1954.' },
    { type: 'mcq', q: 'Câu tục ngữ nói về truyền thống tương thân tương ái:', options: ['Lá lành đùm lá rách', 'Có công mài sắt có ngày nên kim', 'Ăn quả nhớ kẻ trồng cây', 'Tốt gỗ hơn tốt nước sơn'], answer: 0, explain: 'Đùm bọc nhau.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tiếp thu văn hoá nước ngoài là đi ngược truyền thống.', answer: false, explain: 'Tiếp thu có chọn lọc là cần thiết.' },
    { type: 'short', q: 'Từ năm 1945 đến năm 1975 là bao nhiêu năm?', answer: '30', unit: 'năm', calc: '1975-1945', explain: '30.' },
    { type: 'mcq', q: 'Việc làm thể hiện lòng tự hào dân tộc:', options: ['Giới thiệu áo dài với bạn nước ngoài', 'Chê tiếng Việt khó nghe', 'Xuyên tạc lịch sử', 'Bỏ qua ngày lễ dân tộc'], answer: 0, explain: 'Quảng bá văn hoá.' },
    { type: 'mcq', q: 'Giá trị của truyền thống dân tộc:', options: ['Nền tảng tinh thần, tạo bản sắc', 'Cản trở phát triển', 'Chỉ có ý nghĩa với người già', 'Không cần thiết'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
