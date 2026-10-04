/* KHTN 6 – Bài 25. Hệ thống phân loại sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-25', {
  objectives: [
    'Nêu được sự cần thiết của việc phân loại thế giới sống.',
    'Kể được các bậc phân loại từ nhỏ đến lớn: loài, chi (giống), họ, bộ, lớp, ngành, giới.',
    'Kể được năm giới sinh vật và nhận biết được cách gọi tên khoa học, tên địa phương của sinh vật.'
  ],
  intro: 'Trên Trái Đất có hàng triệu loài sinh vật. Để dễ tìm hiểu, nghiên cứu, người ta sắp xếp chúng thành từng nhóm theo những đặc điểm chung – gọi là <b>phân loại</b>.',
  steps: [
    { title: 'Vì sao cần phân loại?', html: `<ul><li>Giúp gọi đúng tên, tránh nhầm lẫn giữa các sinh vật.</li><li>Giúp nhận ra mối quan hệ họ hàng giữa các nhóm sinh vật.</li><li>Giúp nghiên cứu, bảo tồn và sử dụng sinh vật hiệu quả.</li></ul>
      <p>Giống như thư viện xếp sách theo ngăn, theo chủ đề để dễ tìm.</p>` },
    { title: 'Các bậc phân loại', html: `<p>Từ <b>nhỏ đến lớn</b>: <b>Loài → Chi (giống) → Họ → Bộ → Lớp → Ngành → Giới</b>.</p>
      <p>Bậc càng nhỏ, các sinh vật trong đó càng giống nhau nhiều. <b>Loài</b> là bậc phân loại cơ bản nhất.</p>`,
      svg: S.taxonomy({ example: ['Động vật', 'Dây sống', 'Thú', 'Ăn thịt', 'Mèo', 'Báo (Panthera)', 'Hổ (Panthera tigris)'] }),
      caption: 'Các bậc phân loại, ví dụ con hổ. Đọc từ dưới lên: từ nhỏ đến lớn.' },
    { title: 'Năm giới sinh vật', html: `<table class="tbl"><tr><th>Giới</th><th>Đặc điểm chính</th><th>Ví dụ</th></tr>
      <tr><td><b>Khởi sinh</b></td><td>Đơn bào, nhân sơ</td><td>Vi khuẩn</td></tr><tr><td><b>Nguyên sinh</b></td><td>Nhân thực, phần lớn đơn bào</td><td>Trùng roi, trùng giày, tảo</td></tr>
      <tr><td><b>Nấm</b></td><td>Nhân thực, sống dị dưỡng, thành tế bào bằng chitin</td><td>Nấm men, nấm rơm, mốc</td></tr><tr><td><b>Thực vật</b></td><td>Đa bào, nhân thực, tự dưỡng (quang hợp)</td><td>Rêu, dương xỉ, lúa</td></tr>
      <tr><td><b>Động vật</b></td><td>Đa bào, nhân thực, dị dưỡng, phần lớn di chuyển được</td><td>Giun, cá, chim, người</td></tr></table>` },
    { title: 'Tên khoa học và tên địa phương', html: `<ul><li><b>Tên địa phương</b> (tên thường gọi): mỗi vùng gọi một khác. Ví dụ quả dứa – quả thơm – quả khóm.</li>
      <li><b>Tên khoa học</b>: dùng thống nhất trên toàn thế giới, viết theo cách gọi tên <b>kép</b>: <b>tên chi</b> (viết hoa chữ đầu) + <b>tên loài</b> (viết thường), in nghiêng.
      Ví dụ: hổ – <i>Panthera tigris</i>; người – <i>Homo sapiens</i>; lúa – <i>Oryza sativa</i>.</li></ul>` }
  ],
  summary: 'Phân loại giúp gọi tên, nhận biết quan hệ và nghiên cứu sinh vật. Các bậc phân loại từ nhỏ đến lớn: loài, chi, họ, bộ, lớp, ngành, giới. Có năm giới: Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật. Tên khoa học gồm tên chi + tên loài, in nghiêng.',
  examples: [
    { title: 'Xếp giới', problem: 'Xếp vào giới phù hợp: vi khuẩn lao, cây lúa, nấm hương, con ếch, trùng roi.', solution: 'Khởi sinh: vi khuẩn lao. Nguyên sinh: trùng roi. Nấm: nấm hương. Thực vật: cây lúa. Động vật: con ếch.' },
    { title: 'Đọc tên khoa học', problem: 'Tên khoa học của người là <i>Homo sapiens</i>. Đâu là tên chi, đâu là tên loài?', solution: 'Tên chi: <b>Homo</b> (viết hoa chữ đầu). Tên loài: <b>sapiens</b> (viết thường).' },
    { title: 'Bậc phân loại', problem: 'Hổ và báo hoa mai cùng chi <i>Panthera</i>; hổ và mèo nhà cùng họ Mèo nhưng khác chi. Hổ gần với loài nào hơn?', solution: 'Hổ gần với <b>báo hoa mai</b> hơn, vì chúng cùng bậc chi (bậc nhỏ hơn họ).' }
  ],
  exercises: [
    { question: 'Sắp xếp các bậc phân loại sau theo thứ tự từ lớn đến nhỏ: họ, loài, giới, lớp, chi, ngành, bộ.', hints: ['Lớn nhất là giới.', 'Nhỏ nhất là loài.'], solution: 'Giới → Ngành → Lớp → Bộ → Họ → Chi → Loài.' },
    { question: 'Vì sao các nhà khoa học cần dùng tên khoa học thay vì tên địa phương?', hints: ['Một loài có thể có nhiều tên địa phương.', 'Người ở các nước khác nhau nói các ngôn ngữ khác nhau.'], solution: 'Tên địa phương khác nhau ở mỗi vùng, mỗi nước, dễ gây nhầm lẫn. Tên khoa học là duy nhất và thống nhất toàn thế giới, giúp mọi người hiểu đúng loài được nói tới.' },
    { question: 'Nấm có màu trắng, không quang hợp. Vì sao nấm không được xếp vào giới Thực vật?', hints: ['Thực vật tự tổng hợp chất hữu cơ nhờ gì?', 'Thành tế bào nấm làm bằng chất gì?'], solution: 'Nấm <b>không có diệp lục</b>, không quang hợp mà sống dị dưỡng; thành tế bào nấm bằng <b>chitin</b> chứ không phải cellulose. Vì vậy nấm được xếp thành giới riêng.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bậc phân loại nhỏ nhất (cơ bản nhất) là:', options: ['Giới', 'Loài', 'Họ', 'Ngành'], answer: 1, explain: 'Loài là bậc phân loại cơ bản.' },
    { type: 'mcq', q: 'Vi khuẩn thuộc giới:', options: ['Khởi sinh', 'Nguyên sinh', 'Nấm', 'Thực vật'], answer: 0, explain: 'Vi khuẩn đơn bào, nhân sơ.' },
    { type: 'mcq', q: 'Thứ tự đúng từ nhỏ đến lớn là:', keepOrder: true, options: ['Loài → chi → họ → bộ → lớp → ngành → giới', 'Loài → họ → chi → bộ → lớp → ngành → giới', 'Giới → ngành → lớp → bộ → họ → chi → loài', 'Loài → chi → bộ → họ → lớp → ngành → giới'], answer: 0, explain: 'Nhớ: loài, chi, họ, bộ, lớp, ngành, giới.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có tất cả năm giới sinh vật.', answer: true, explain: 'Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật.' },
    { type: 'mcq', q: 'Trong tên khoa học <i>Oryza sativa</i> (lúa), từ "Oryza" là:', options: ['Tên loài', 'Tên chi', 'Tên họ', 'Tên địa phương'], answer: 1, explain: 'Từ đầu, viết hoa, là tên chi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nấm thuộc giới Thực vật.', answer: false, explain: 'Nấm là một giới riêng.' },
    { type: 'mcq', q: 'Trùng roi, trùng giày thuộc giới:', options: ['Khởi sinh', 'Nguyên sinh', 'Nấm', 'Động vật'], answer: 1, explain: 'Chúng là sinh vật nhân thực, đơn bào – giới Nguyên sinh.' },
    { type: 'short', q: 'Có bao nhiêu bậc phân loại chính từ loài đến giới?', answer: '7', unit: 'bậc', explain: 'Loài, chi, họ, bộ, lớp, ngành, giới: 7 bậc.' }
  ]
});
})();
