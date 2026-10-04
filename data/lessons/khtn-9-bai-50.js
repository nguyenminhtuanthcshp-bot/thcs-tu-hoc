/* KHTN 9 – Bài 50. Cơ chế tiến hoá. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-50', {
  objectives: [
    'Trình bày được quan điểm của Lamarck và Darwin về cơ chế tiến hoá.',
    'Nêu được quan điểm của thuyết tiến hoá tổng hợp hiện đại: quần thể là đơn vị tiến hoá; các nhân tố tiến hoá.',
    'Vận dụng để giải thích sự hình thành đặc điểm thích nghi (ví dụ vi khuẩn kháng thuốc kháng sinh).'
  ],
  intro: 'Vì sao hươu cao cổ có cổ dài? Lamarck và Darwin đưa ra hai cách giải thích khác nhau. Ngày nay, nhờ hiểu biết về gene và đột biến, các nhà khoa học đã xây dựng thuyết tiến hoá tổng hợp hiện đại.',
  steps: [
    { title: 'Quan điểm của Lamarck', html: `<p>Lamarck (1744 – 1829) cho rằng: ngoại cảnh thay đổi chậm chạp, sinh vật chủ động thay đổi tập quán hoạt động để thích nghi; các đặc điểm thu được trong đời cá thể đều di truyền cho thế hệ sau. Ví dụ: hươu thường xuyên vươn cổ ăn lá cao nên cổ dài dần.</p>
      <p>Hạn chế: chưa hiểu cơ chế di truyền; thực tế các biến đổi do tập luyện trong đời cá thể không di truyền được.</p>` },
    { title: 'Quan điểm của Darwin', html: `<ul><li>Trong quần thể luôn có các <b>biến dị cá thể</b> di truyền được (hươu cổ dài, cổ ngắn khác nhau).</li><li>Sinh vật sinh ra nhiều hơn số có thể sống sót ⇒ <b>đấu tranh sinh tồn</b>.</li><li><b>Chọn lọc tự nhiên</b> giữ lại cá thể mang biến dị có lợi (hươu cổ dài ăn được lá cao), đào thải cá thể kém thích nghi.</li><li>Qua nhiều thế hệ, đặc điểm thích nghi được tích luỹ ⇒ hình thành loài mới.</li></ul>`,
      svg: S.flow({ items: ['Biến dị cá thể (cổ dài, cổ ngắn)', 'Đấu tranh sinh tồn (thiếu lá ở thấp)', 'Hươu cổ dài sống sót, sinh sản nhiều', 'Tích luỹ qua nhiều thế hệ', 'Loài hươu cao cổ'], size: 13, label: 'Giải thích của Darwin về cổ dài của hươu cao cổ' }), caption: 'Darwin: chọn lọc tự nhiên tích luỹ biến dị có lợi qua nhiều thế hệ.' },
    { title: 'Thuyết tiến hoá tổng hợp hiện đại', html: `<p><b>Quần thể</b> là đơn vị tiến hoá. Tiến hoá là quá trình biến đổi thành phần kiểu gene của quần thể. Các <b>nhân tố tiến hoá</b>:</p>
      <table><tr><th>Nhân tố</th><th>Vai trò</th></tr><tr><td>Đột biến</td><td>tạo alen mới – nguồn nguyên liệu sơ cấp</td></tr><tr><td>Giao phối (không ngẫu nhiên)</td><td>tạo biến dị tổ hợp, thay đổi tỉ lệ kiểu gene</td></tr><tr><td>Di – nhập gene</td><td>mang gene vào hoặc ra khỏi quần thể</td></tr><tr><td>Chọn lọc tự nhiên</td><td>nhân tố định hướng, giữ lại kiểu gene thích nghi</td></tr><tr><td>Phiêu bạt di truyền</td><td>biến đổi ngẫu nhiên tần số alen (rõ ở quần thể nhỏ)</td></tr></table>` },
    { title: 'Vi khuẩn kháng thuốc kháng sinh', html: `<p>Trong quần thể vi khuẩn có sẵn một số ít cá thể mang đột biến kháng thuốc. Khi dùng kháng sinh (nhất là dùng sai liều, không đủ liệu trình), vi khuẩn không kháng bị tiêu diệt, vi khuẩn kháng sống sót và sinh sản rất nhanh ⇒ quần thể kháng thuốc.</p>
      <div class="box tip">Chỉ dùng kháng sinh khi có chỉ định của bác sĩ, dùng đủ liều và đủ thời gian.</div>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 1], [1, 5], [2, 20], [3, 55], [4, 85], [5, 95]], color: '#dc2626', dots: true }], xmax: 5.5, ymax: 100, xstep: 1, ystep: 20, xlabel: 'Số lần dùng kháng sinh', ylabel: '% kháng thuốc', label: 'Tỉ lệ vi khuẩn kháng thuốc tăng qua các lần dùng kháng sinh (số liệu minh hoạ)' }), caption: 'Mỗi lần dùng kháng sinh, chọn lọc giữ lại vi khuẩn kháng thuốc (số liệu minh hoạ).' }
  ],
  summary: 'Lamarck: sinh vật chủ động thích nghi, đặc điểm thu được đều di truyền (chưa đúng). Darwin: biến dị cá thể + đấu tranh sinh tồn + chọn lọc tự nhiên ⇒ thích nghi, loài mới. Thuyết tổng hợp hiện đại: quần thể là đơn vị tiến hoá; nhân tố tiến hoá gồm đột biến, giao phối không ngẫu nhiên, di – nhập gene, chọn lọc tự nhiên (định hướng), phiêu bạt di truyền.',
  examples: [
    { title: 'Giải thích theo Darwin', problem: 'Giải thích sự hình thành màu xanh lục của sâu ăn lá theo Darwin.', solution: 'Quần thể sâu có biến dị về màu sắc; sâu màu xanh lục khó bị chim phát hiện nên sống sót, sinh sản nhiều; qua nhiều thế hệ, màu xanh lục trở nên phổ biến.' },
    { title: 'Nhân tố định hướng', problem: 'Nhân tố tiến hoá nào quy định chiều hướng tiến hoá?', solution: 'Chọn lọc tự nhiên.' },
    { title: 'Tốc độ sinh sản', problem: 'Một vi khuẩn kháng thuốc phân chia 30 phút một lần. Sau 5 giờ (điều kiện lí tưởng) có bao nhiêu vi khuẩn?', solution: '10 lần phân chia ⇒ 2<sup>10</sup> = 1 024 vi khuẩn.' }
  ],
  exercises: [
    { question: 'Nêu điểm khác nhau cơ bản giữa quan điểm của Lamarck và Darwin về sự hình thành cổ dài của hươu.', hints: ['Lamarck: tập quán vươn cổ.', 'Darwin: biến dị có sẵn và chọn lọc.'], solution: 'Lamarck: hươu vươn cổ nên cổ dài ra và di truyền cho con. Darwin: trong quần thể có sẵn hươu cổ dài, cổ ngắn; chọn lọc tự nhiên giữ lại hươu cổ dài.' },
    { question: 'Vì sao đột biến được gọi là nguồn nguyên liệu sơ cấp của tiến hoá?', hints: ['Đột biến tạo ra gì?', 'Giao phối dùng nguyên liệu nào để tạo biến dị tổ hợp?'], solution: 'Đột biến tạo ra các alen mới; từ đó giao phối tổ hợp lại thành biến dị tổ hợp (nguyên liệu thứ cấp) cho chọn lọc.' },
    { question: 'Vì sao lạm dụng kháng sinh làm tăng vi khuẩn kháng thuốc?', hints: ['Kháng sinh đóng vai trò gì đối với quần thể vi khuẩn?', 'Vi khuẩn nào sống sót?'], solution: 'Kháng sinh là tác nhân chọn lọc: tiêu diệt vi khuẩn không kháng, giữ lại vi khuẩn kháng thuốc; chúng sinh sản nhanh, làm tỉ lệ kháng thuốc tăng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo thuyết tiến hoá tổng hợp hiện đại, quần thể là đơn vị tiến hoá.', answer: true, explain: 'Tiến hoá là biến đổi thành phần kiểu gene của quần thể.' },
    { type: 'mcq', q: 'Nhân tố tiến hoá có vai trò định hướng là:', options: ['đột biến', 'chọn lọc tự nhiên', 'di – nhập gene', 'phiêu bạt di truyền'], answer: 1, explain: 'Chọn lọc tự nhiên quy định chiều hướng tiến hoá.' },
    { type: 'mcq', q: 'Nguồn nguyên liệu sơ cấp của tiến hoá là:', options: ['biến dị tổ hợp', 'đột biến', 'thường biến', 'di – nhập gene'], answer: 1, explain: 'Đột biến tạo alen mới.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo Darwin, mọi biến đổi do tập luyện trong đời cá thể đều di truyền cho thế hệ sau.', answer: false, explain: 'Đó là quan điểm của Lamarck.' },
    { type: 'short', q: 'Một vi khuẩn phân chia 1 giờ một lần. Sau 10 giờ (điều kiện lí tưởng) có bao nhiêu vi khuẩn?', answer: '1024', answerText: '1 024', unit: 'vi khuẩn', calc: 'Math.pow(2,10)', explain: '2<sup>10</sup> = 1 024.' },
    { type: 'mcq', q: 'Theo Darwin, động lực của chọn lọc tự nhiên là:', options: ['đấu tranh sinh tồn', 'nhu cầu con người', 'thức ăn dồi dào', 'ý muốn của sinh vật'], answer: 0, explain: 'Đấu tranh sinh tồn.' },
    { type: 'short', q: 'Trong 2 000 vi khuẩn có 2 % kháng thuốc. Số vi khuẩn kháng thuốc là bao nhiêu?', answer: '40', unit: 'vi khuẩn', calc: '2000*2/100', explain: '2 000 · 0,02 = 40.' },
    { type: 'mcq', q: 'Cách dùng kháng sinh đúng là:', options: ['tự mua uống khi bị cảm', 'dùng theo chỉ định của bác sĩ, đủ liều, đủ thời gian', 'ngừng thuốc ngay khi thấy đỡ', 'dùng thuốc còn thừa của người khác'], answer: 1, explain: 'Hạn chế hình thành vi khuẩn kháng thuốc.' }
  ]
});
})();
