/* LS&ĐL 6 – Lịch sử, Bài 1. Lịch sử và cuộc sống. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-1', {
  objectives: [
    'Nêu được khái niệm lịch sử và môn Lịch sử.',
    'Hiểu được lịch sử là những gì đã diễn ra trong quá khứ.',
    'Giải thích được vì sao cần học lịch sử.',
    'Bước đầu biết liên hệ quá khứ với cuộc sống hiện tại.'
  ],
  intro: 'Ông nội của Minh hay kể chuyện ngày xưa đi học phải lội qua suối, thắp đèn dầu để học bài. Minh tò mò: “Những chuyện ngày xưa ấy có liên quan gì đến mình bây giờ?”. Câu trả lời bắt đầu từ việc hiểu <b>lịch sử là gì</b>.',
  steps: [
    { title: 'Lịch sử là gì?', html: `<ul><li><b>Lịch sử</b> là tất cả những gì đã xảy ra trong quá khứ của con người và xã hội loài người.</li><li>Lịch sử còn là những hiểu biết, ghi chép, kể lại của con người về quá khứ đó.</li><li><b>Môn Lịch sử</b> là môn học tìm hiểu về lịch sử loài người, từ khi con người xuất hiện đến nay.</li></ul>` },
    { title: 'Quá khứ – hiện tại – tương lai', html: `<p>Mọi sự vật, hiện tượng đều có quá trình hình thành và thay đổi theo thời gian:</p>`,
      svg: S.timeline({ title: 'Lịch sử của một ngôi trường (minh hoạ)', items: [{ y: '1960', s: 'Lớp học mái tranh' }, { y: '1985', s: 'Xây nhà cấp 4' }, { y: '2005', s: 'Nhà 2 tầng' }, { y: '2020', s: 'Phòng máy tính' }, { y: 'Hôm nay', s: 'Trường chuẩn' }], note: 'Mốc thời gian minh hoạ.' }), caption: 'Hiện tại được tạo nên từ quá khứ.' },
    { title: 'Vì sao phải học lịch sử?', html: `<p>Học lịch sử giúp em:</p>`,
      svg: S.mindmap({ center: 'Học lịch sử để', branches: [{ title: 'Biết cội nguồn', items: ['Tổ tiên, quê hương', 'Dân tộc, đất nước'] }, { title: 'Hiểu hiện tại', items: ['Vì sao có hôm nay', 'Truyền thống tốt đẹp'] }, { title: 'Rút bài học', items: ['Kinh nghiệm quá khứ', 'Tránh sai lầm'] }, { title: 'Định hướng', items: ['Xây dựng tương lai', 'Bảo vệ đất nước'] }], w: 640, size: 13 }), caption: '“Dân ta phải biết sử ta” (Hồ Chí Minh).' },
    { title: 'Học lịch sử quanh ta', html: `<ul><li>Hỏi chuyện ông bà, cha mẹ về quá khứ gia đình.</li><li>Tham quan bảo tàng, di tích, đình chùa ở địa phương.</li><li>Đọc sách, xem phim tài liệu có nguồn tin cậy.</li></ul>
      <div class="box key">Lịch sử không chỉ là chuyện của vua chúa – mỗi gia đình, mỗi làng đều có lịch sử.</div>` }
  ],
  summary: 'Lịch sử là những gì đã xảy ra trong quá khứ và cũng là những hiểu biết của con người về quá khứ đó. Môn Lịch sử tìm hiểu lịch sử loài người từ khi xuất hiện đến nay. Học lịch sử giúp biết cội nguồn, hiểu hiện tại, rút bài học kinh nghiệm và định hướng tương lai.',
  examples: [
    { title: 'Nhận diện', problem: 'Câu chuyện ông kể về thời đi học là gì đối với Minh?', solution: 'Là một phần lịch sử của gia đình, giúp Minh hiểu cuộc sống hôm nay đã thay đổi thế nào.' },
    { title: 'Tính khoảng thời gian', problem: 'Ngôi trường được xây năm 1960. Đến năm 2026 trường bao nhiêu năm tuổi?', solution: '2026 − 1960 = 66 năm.' },
    { title: 'Nguồn học lịch sử', problem: 'Kể hai cách tìm hiểu lịch sử địa phương.', solution: 'Tham quan đình làng, nhà văn hoá có trưng bày hiện vật; phỏng vấn người cao tuổi.' }
  ],
  exercises: [
    { question: 'Lập trục thời gian 4 mốc về cuộc đời em (năm sinh, vào lớp 1, vào lớp 6, hiện nay).', hints: ['Vào lớp 1 năm 6 tuổi.', 'Sắp xếp từ cũ đến mới.'], solution: 'Ví dụ: 2014 sinh – 2020 vào lớp 1 – 2025 vào lớp 6 – 2026 hiện nay.' },
    { question: 'Ông sinh năm 1950. Năm 2026 ông bao nhiêu tuổi?', hints: ['Lấy năm hiện tại trừ năm sinh.', '2026 − 1950.'], solution: '76 tuổi.' },
    { question: 'Vì sao nói “học lịch sử để rút ra bài học cho hiện tại”?', hints: ['Quá khứ có thành công và thất bại.', 'Nghĩ đến kinh nghiệm.'], solution: 'Vì những thành công, thất bại trong quá khứ cho ta kinh nghiệm để làm tốt hơn, tránh lặp lại sai lầm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lịch sử là những gì đã xảy ra trong quá khứ.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Môn Lịch sử tìm hiểu về:', options: ['lịch sử loài người từ khi xuất hiện đến nay', 'chỉ các vị vua', 'chỉ chiến tranh', 'tương lai'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Trường xây năm 1960. Năm 2026 trường bao nhiêu năm tuổi?', answer: '66', unit: 'năm', calc: '2026-1960', explain: '66.' },
    { type: 'mcq', q: 'Câu “Dân ta phải biết sử ta” là của:', options: ['Hồ Chí Minh', 'Ngô Quyền', 'Trần Hưng Đạo', 'Lê Lợi'], answer: 0, explain: 'Hồ Chí Minh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ quốc gia mới có lịch sử, gia đình thì không.', answer: false, explain: 'Gia đình, làng xã đều có lịch sử.' },
    { type: 'short', q: 'Ông sinh năm 1950. Năm 2026 ông bao nhiêu tuổi?', answer: '76', unit: 'tuổi', calc: '2026-1950', explain: '76.' },
    { type: 'mcq', q: 'Lợi ích của học lịch sử:', options: ['Biết cội nguồn, rút bài học', 'Không có ích', 'Chỉ để thi', 'Làm quên quá khứ'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Cách tìm hiểu lịch sử địa phương:', options: ['Tham quan di tích, hỏi người cao tuổi', 'Đoán mò', 'Xem tin đồn trên mạng', 'Bỏ qua'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
