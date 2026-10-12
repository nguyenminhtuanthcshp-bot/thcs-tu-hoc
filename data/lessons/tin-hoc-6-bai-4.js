/* Tin học 6 – Bài 4. Mạng máy tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-4', {
  objectives: [
    'Nêu được mạng máy tính là gì và lợi ích của mạng máy tính.',
    'Nêu được các thành phần chủ yếu của một mạng: thiết bị đầu cuối, thiết bị kết nối, phần mềm mạng.',
    'Phân biệt được mạng có dây và mạng không dây; lấy được ví dụ.'
  ],
  intro: 'Ở phòng máy của trường, thầy cô có thể gửi bài tập tới tất cả máy tính của học sinh, và cả lớp dùng chung một máy in. Điều đó có được là nhờ các máy tính được nối với nhau thành <b>mạng máy tính</b>.',
  steps: [
    { title: 'Mạng máy tính là gì?', html: `<p><b>Mạng máy tính</b> là nhóm các máy tính và thiết bị được kết nối với nhau để trao đổi dữ liệu và dùng chung tài nguyên.</p>
      <p>Lợi ích: chia sẻ dữ liệu (tệp, ảnh, bài tập), dùng chung thiết bị (máy in, máy quét), dùng chung phần mềm, trao đổi thông tin nhanh chóng.</p>` },
    { title: 'Các thành phần của mạng', html: `<ul><li><b>Thiết bị đầu cuối:</b> máy tính, điện thoại, máy tính bảng, máy in…</li><li><b>Thiết bị kết nối:</b> dây cáp, bộ chuyển mạch (switch), bộ định tuyến (router), bộ phát Wi-Fi…</li><li><b>Phần mềm mạng:</b> giúp các thiết bị trao đổi dữ liệu với nhau.</li></ul>`,
      svg: S.network({ kind: 'lan' }), caption: 'Mạng có dây trong phòng máy: các máy tính và máy in nối với bộ chuyển mạch.' },
    { title: 'Mạng có dây và mạng không dây', html: `<p><b>Mạng có dây:</b> thiết bị kết nối bằng dây cáp; ổn định, nhưng khó di chuyển thiết bị.</p>
      <p><b>Mạng không dây:</b> thiết bị kết nối bằng sóng (ví dụ Wi-Fi); thuận tiện khi di chuyển, nhưng có thể bị ảnh hưởng bởi khoảng cách và vật cản.</p>`,
      svg: S.network({ kind: 'wireless' }), caption: 'Mạng không dây: điện thoại, máy tính bảng kết nối với bộ phát Wi-Fi bằng sóng.' },
    { title: 'Sử dụng mạng có trách nhiệm', html: `<p>Khi dùng chung mạng, em cần: không tự ý xoá tệp của người khác, không mở tệp lạ, đặt mật khẩu Wi-Fi an toàn và hỏi ý kiến người lớn khi kết nối với mạng lạ ở nơi công cộng.</p>
      <div class="box key">Mạng máy tính = thiết bị đầu cuối + thiết bị kết nối + phần mềm mạng.</div>` }
  ],
  summary: 'Mạng máy tính là các máy tính, thiết bị được kết nối để trao đổi dữ liệu và dùng chung tài nguyên. Thành phần: thiết bị đầu cuối, thiết bị kết nối, phần mềm mạng. Có mạng có dây (cáp) và mạng không dây (sóng, Wi-Fi).',
  examples: [
    { title: 'Phân loại thiết bị', problem: 'Trong các thiết bị: điện thoại, bộ chuyển mạch, máy in, dây cáp mạng – thiết bị nào là thiết bị đầu cuối, thiết bị nào là thiết bị kết nối?', solution: 'Thiết bị đầu cuối: điện thoại, máy in. Thiết bị kết nối: bộ chuyển mạch, dây cáp mạng.' },
    { title: 'Lợi ích', problem: 'Phòng máy có 30 máy tính và 1 máy in. Nhờ mạng máy tính, điều gì xảy ra?', solution: 'Cả 30 máy tính có thể dùng chung 1 máy in, không cần mỗi máy một máy in.' },
    { title: 'Chọn loại mạng', problem: 'Gia đình muốn kết nối điện thoại, máy tính bảng ở nhiều phòng. Nên dùng mạng có dây hay không dây?', solution: 'Mạng không dây (Wi-Fi), vì các thiết bị di động thường xuyên di chuyển.' }
  ],
  exercises: [
    { question: 'Nêu ba lợi ích của mạng máy tính ở trường học.', hints: ['Nghĩ đến việc gửi bài tập, dùng máy in.', 'Nghĩ đến việc chia sẻ phần mềm, tài liệu.'], solution: 'Chia sẻ bài tập, tài liệu; dùng chung máy in; dùng chung phần mềm học tập; trao đổi thông tin nhanh.' },
    { question: 'So sánh một ưu điểm và một hạn chế của mạng không dây so với mạng có dây.', hints: ['Ưu điểm liên quan đến việc di chuyển.', 'Hạn chế liên quan đến khoảng cách, vật cản.'], solution: 'Ưu điểm: thiết bị di chuyển tự do, không cần đi dây. Hạn chế: tín hiệu có thể yếu khi xa bộ phát hoặc bị tường chắn.' },
    { question: 'Một bộ chuyển mạch có 24 cổng, đã dùng 17 cổng. Còn nối thêm được bao nhiêu thiết bị bằng dây?', hints: ['Mỗi thiết bị dùng một cổng.', '24 − 17.'], solution: '24 − 17 = 7 thiết bị.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mạng máy tính giúp các máy tính dùng chung tài nguyên như máy in.', answer: true, explain: 'Dùng chung tài nguyên là lợi ích chính của mạng.' },
    { type: 'mcq', q: 'Thiết bị nào là thiết bị kết nối?', options: ['Máy in', 'Bộ chuyển mạch (switch)', 'Điện thoại', 'Máy tính bảng'], answer: 1, explain: 'Switch kết nối các thiết bị trong mạng.' },
    { type: 'mcq', q: 'Mạng Wi-Fi là:', options: ['mạng có dây', 'mạng không dây', 'một loại máy in', 'một phần mềm soạn thảo'], answer: 1, explain: 'Wi-Fi truyền dữ liệu bằng sóng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thành phần của mạng máy tính chỉ gồm các máy tính.', answer: false, explain: 'Còn có thiết bị kết nối và phần mềm mạng.' },
    { type: 'short', q: 'Phòng máy có 3 dãy, mỗi dãy 12 máy tính nối mạng. Có bao nhiêu máy tính trong mạng?', answer: '36', unit: 'máy', calc: '3*12', explain: '3 × 12 = 36.' },
    { type: 'mcq', q: 'Thiết bị đầu cuối là:', options: ['dây cáp', 'bộ phát Wi-Fi', 'máy tính', 'bộ định tuyến'], answer: 2, explain: 'Máy tính là thiết bị đầu cuối.' },
    { type: 'short', q: 'Switch có 16 cổng, đã dùng 9 cổng. Còn trống bao nhiêu cổng?', answer: '7', unit: 'cổng', calc: '16-9', explain: '16 − 9 = 7.' },
    { type: 'mcq', q: 'Việc làm nào thể hiện dùng mạng có trách nhiệm?', options: ['Xoá tệp của bạn khác', 'Mở tệp lạ được gửi đến', 'Không tự ý thay đổi dữ liệu của người khác', 'Chia sẻ mật khẩu Wi-Fi cho người lạ'], answer: 2, explain: 'Tôn trọng dữ liệu của người khác.' }
  ]
});
})();
