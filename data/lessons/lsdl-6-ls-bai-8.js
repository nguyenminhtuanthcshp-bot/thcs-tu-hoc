/* LS&ĐL 6 – Lịch sử, Bài 8. Ấn Độ cổ đại. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-8', {
  objectives: [
    'Nêu được những thông tin cơ bản về điều kiện tự nhiên của Ấn Độ cổ đại.',
    'Trình bày được những điểm chính về chế độ xã hội của Ấn Độ cổ đại.',
    'Nêu được những thành tựu văn hoá tiêu biểu của Ấn Độ cổ đại.',
    'Hiểu ảnh hưởng của văn hoá Ấn Độ tới Đông Nam Á và Việt Nam.'
  ],
  intro: 'Khi đếm “một, hai, ba… mười”, rồi viết số 0, em đang dùng một phát minh tuyệt vời của người Ấn Độ cổ đại. Những ngôi tháp Chăm ở miền Trung Việt Nam cũng mang dấu ấn văn hoá Ấn Độ. Vậy <b>Ấn Độ cổ đại</b> đã hình thành và phát triển ra sao?',
  steps: [
    { title: 'Điều kiện tự nhiên', html: `<ul><li>Hai con sông lớn: <b>sông Ấn</b> và <b>sông Hằng</b> bồi đắp đồng bằng màu mỡ.</li><li>Phía bắc có dãy Hi-ma-lay-a; phía nam là cao nguyên Đê-can; khí hậu gió mùa.</li><li>Khoảng 2500 TCN, người Đra-vi-đa xây dựng các thành thị ở lưu vực sông Ấn (Ha-rap-pa, Mô-hen-giô Đa-rô); khoảng 1500 TCN, người A-ri-a tràn vào.</li></ul>` },
    { title: 'Chế độ đẳng cấp Vác-na', html: `<p>Xã hội chia thành bốn đẳng cấp, phân biệt rất khắt khe:</p>`,
      svg: S.table({ title: 'Bốn đẳng cấp trong xã hội Ấn Độ cổ đại', head: ['Đẳng cấp', 'Thành phần'], rows: [['Bra-man (Brahmin)', 'Tăng lữ, cao quý nhất'], ['Ksa-tri-a', 'Vương công, quý tộc, chiến binh'], ['Vai-si-a', 'Nông dân, thợ thủ công, thương nhân'], ['Su-đra', 'Người nghèo, thấp kém nhất']], colW: 250 }), caption: 'Đẳng cấp cha truyền con nối, rất khó thay đổi.' },
    { title: 'Thành tựu văn hoá', html: `<p>Ấn Độ cổ đại có nhiều đóng góp lớn:</p>`,
      svg: S.mindmap({ center: 'Văn hoá Ấn Độ', branches: [{ title: 'Tôn giáo', items: ['Bà La Môn, Hin-đu', 'Phật giáo (TK VI TCN)'] }, { title: 'Chữ viết, văn học', items: ['Chữ Phạn', 'Sử thi Ra-ma-ya-na'] }, { title: 'Khoa học', items: ['Chữ số, số 0', 'Thiên văn, y học'] }, { title: 'Kiến trúc', items: ['Đại bảo tháp San-chi', 'Chùa hang, đền tháp'] }], w: 640, size: 13 }), caption: 'TK: thế kỉ.' },
    { title: 'Ảnh hưởng tới Đông Nam Á', html: `<p>Phật giáo, Hin-đu giáo, chữ Phạn, kiến trúc đền tháp của Ấn Độ lan toả sang Đông Nam Á; ở Việt Nam thấy rõ qua tháp Chăm, di tích Óc Eo.</p>
      <div class="box key">Hệ thống chữ số và số 0 của Ấn Độ là nền tảng của toán học ngày nay.</div>` }
  ],
  summary: 'Ấn Độ cổ đại hình thành ở lưu vực sông Ấn và sông Hằng; khoảng 2500 TCN người Đra-vi-đa xây dựng thành thị, khoảng 1500 TCN người A-ri-a tràn vào. Xã hội chia bốn đẳng cấp (Bra-man, Ksa-tri-a, Vai-si-a, Su-đra). Thành tựu: Phật giáo (thế kỉ VI TCN), Hin-đu giáo, chữ Phạn, sử thi Ra-ma-ya-na và Ma-ha-bha-ra-ta, chữ số và số 0, kiến trúc đền tháp; ảnh hưởng rộng tới Đông Nam Á.',
  examples: [
    { title: 'Nhận diện', problem: 'Đẳng cấp nào cao quý nhất?', solution: 'Bra-man (tăng lữ).' },
    { title: 'Ảnh hưởng', problem: 'Nêu một dấu ấn văn hoá Ấn Độ ở Việt Nam.', solution: 'Các tháp Chăm (Mỹ Sơn) mang phong cách kiến trúc Hin-đu giáo.' },
    { title: 'Tính thời gian', problem: 'Người Đra-vi-đa xây thành thị khoảng 2500 TCN, người A-ri-a vào khoảng 1500 TCN. Cách nhau bao nhiêu năm?', solution: '2 500 − 1 500 = 1 000 năm.' }
  ],
  exercises: [
    { question: 'Vì sao chế độ đẳng cấp Vác-na là bất công?', hints: ['Cha truyền con nối.', 'Su-đra bị đối xử thế nào?'], solution: 'Con người bị phân biệt từ khi sinh ra, không thể thay đổi địa vị; đẳng cấp thấp bị khinh rẻ, thiệt thòi.' },
    { question: 'Phật giáo ra đời thế kỉ VI TCN. Thế kỉ đó kéo dài bao nhiêu năm?', hints: ['Mỗi thế kỉ bao nhiêu năm?', '100 năm.'], solution: '100 năm.' },
    { question: 'Kể tên hai sử thi nổi tiếng của Ấn Độ.', hints: ['Ra-ma-…', 'Ma-ha-…'], solution: 'Ra-ma-ya-na và Ma-ha-bha-ra-ta.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người Ấn Độ cổ đại đã sáng tạo ra chữ số 0.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hai con sông lớn của Ấn Độ:', options: ['Sông Ấn, sông Hằng', 'Sông Nin, sông Hằng', 'Hoàng Hà, Trường Giang', 'Ti-grơ, Ơ-phrát'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Xã hội Ấn Độ cổ đại có bao nhiêu đẳng cấp?', answer: '4', unit: 'đẳng cấp', calc: '4', explain: '4.' },
    { type: 'mcq', q: 'Đẳng cấp thấp kém nhất:', options: ['Su-đra', 'Bra-man', 'Ksa-tri-a', 'Vai-si-a'], answer: 0, explain: 'Su-đra.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phật giáo ra đời ở Trung Quốc.', answer: false, explain: 'Ở Ấn Độ.' },
    { type: 'short', q: 'Từ 2500 TCN đến 1500 TCN là bao nhiêu năm?', answer: '1000', answerText: '1 000', unit: 'năm', calc: '2500-1500', explain: '1 000.' },
    { type: 'mcq', q: 'Chữ viết phổ biến của Ấn Độ cổ đại:', options: ['Chữ Phạn', 'Chữ hình nêm', 'Chữ Hán', 'Chữ Nôm'], answer: 0, explain: 'Chữ Phạn.' },
    { type: 'mcq', q: 'Công trình ở Việt Nam chịu ảnh hưởng kiến trúc Ấn Độ:', options: ['Tháp Chăm', 'Văn Miếu', 'Chùa Một Cột', 'Hoàng thành Thăng Long'], answer: 0, explain: 'Tháp Chăm.' }
  ]
});
})();
