/* KHTN 6 – Bài 18. Tế bào – Đơn vị cơ bản của sự sống. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-18', {
  objectives: [
    'Nêu được khái niệm tế bào và tế bào là đơn vị cấu trúc, chức năng của cơ thể sống.',
    'Nhận biết được hình dạng và kích thước khác nhau của một số loại tế bào.',
    'Đổi được đơn vị đo kích thước tế bào (mm, µm) và giải thích vì sao phần lớn tế bào phải quan sát bằng kính hiển vi.'
  ],
  intro: 'Mọi cơ thể sống, từ con vi khuẩn bé xíu đến cây lim hay con voi, đều được cấu tạo từ những "viên gạch" rất nhỏ gọi là <b>tế bào</b>.',
  steps: [
    { title: 'Tế bào là gì?', html: `<p><b>Tế bào</b> là đơn vị <b>cấu trúc</b> (xây dựng nên cơ thể) và đơn vị <b>chức năng</b> (thực hiện các hoạt động sống) của mọi cơ thể sống.</p>
      <ul><li>Có sinh vật chỉ gồm <b>một tế bào</b> (vi khuẩn, trùng roi, nấm men).</li><li>Có sinh vật gồm <b>rất nhiều tế bào</b> (cây xanh, con người: hàng chục nghìn tỉ tế bào).</li></ul>
      <div class="box key">Tế bào thực hiện được các hoạt động sống cơ bản: trao đổi chất, lớn lên, sinh sản, cảm ứng.</div>` },
    { title: 'Hình dạng tế bào', html: `<p>Tế bào có nhiều hình dạng, phù hợp với chức năng:</p>
      <ul><li>Hồng cầu: hình đĩa lõm hai mặt – dễ di chuyển trong mạch máu, vận chuyển khí.</li><li>Tế bào thần kinh: có nhiều nhánh dài – dẫn truyền tín hiệu đi xa.</li>
      <li>Tế bào cơ: hình thoi dài – co rút tạo cử động.</li><li>Tế bào biểu bì lá: dẹt, xếp sát nhau – che chở.</li><li>Tinh trùng: có đuôi dài – di chuyển.</li></ul>`,
      svg: S.draw({ w: 600, h: 190, aria: 'Một số hình dạng tế bào', items: [
        { circle: [80, 80, 42], fill: '#fecaca', color: '#b91c1c' }, { circle: [80, 80, 18], fill: '#fca5a5', color: '#fca5a5' }, { text: [80, 160, 'Hồng cầu'], bold: true, size: 14 },
        { poly: [[190, 80], [260, 55], [330, 80], [260, 105]], fill: '#fde68a', color: '#b45309' }, { circle: [260, 80, 8], fill: '#92400e', color: '#92400e' }, { text: [260, 160, 'Tế bào cơ'], bold: true, size: 14 },
        { circle: [450, 80, 22], fill: '#ddd6fe', color: '#6d28d9' }, { circle: [450, 80, 8], fill: '#6d28d9', color: '#6d28d9' },
        { seg: [470, 70, 540, 40], color: '#6d28d9' }, { seg: [472, 88, 570, 110], color: '#6d28d9' }, { seg: [440, 60, 410, 25], color: '#6d28d9' }, { seg: [432, 95, 400, 130], color: '#6d28d9' }, { seg: [540, 40, 560, 25], color: '#6d28d9' }, { seg: [540, 40, 565, 50], color: '#6d28d9' },
        { text: [470, 160, 'Tế bào thần kinh'], bold: true, size: 14 }] }),
      caption: 'Hình dạng tế bào phù hợp với chức năng (hình vẽ đơn giản, không theo tỉ lệ).' },
    { title: 'Kích thước tế bào', html: `<p>Đa số tế bào rất nhỏ, đo bằng <b>micromet</b> (kí hiệu <b>µm</b>):</p>
      <div class="box key">1 mm = 1 000 µm &nbsp;&nbsp;·&nbsp;&nbsp; 1 µm = 0,001 mm</div>
      <table class="tbl"><tr><th>Tế bào</th><th>Kích thước khoảng</th></tr><tr><td>Vi khuẩn</td><td>1 – 5 µm</td></tr><tr><td>Hồng cầu người</td><td>7 – 8 µm</td></tr>
      <tr><td>Tế bào biểu bì vảy hành</td><td>khoảng 0,2 mm (≈ 200 µm)</td></tr><tr><td>Tép bưởi, tép cam</td><td>vài mm – nhìn thấy bằng mắt thường</td></tr><tr><td>Trứng chim đà điểu</td><td>khoảng 15 cm – tế bào lớn nhất</td></tr></table>
      <p>Mắt thường chỉ phân biệt được vật khoảng 0,1 mm trở lên, nên phần lớn tế bào phải quan sát bằng <b>kính hiển vi</b>.</p>` },
    { title: 'Vì sao tế bào là đơn vị của sự sống?', html: `<ul><li>Cơ thể lớn lên nhờ tế bào <b>lớn lên và sinh sản</b> (phân chia).</li><li>Mọi tế bào đều sinh ra từ tế bào có trước.</li>
      <li>Các hoạt động của cơ thể (hô hấp, tiêu hoá, vận động…) đều là kết quả hoạt động phối hợp của các tế bào.</li></ul>` }
  ],
  summary: 'Tế bào là đơn vị cấu trúc và chức năng của cơ thể sống. Tế bào có nhiều hình dạng phù hợp với chức năng. Đa số tế bào có kích thước rất nhỏ (tính bằng µm; 1 mm = 1 000 µm) nên phải quan sát bằng kính hiển vi; một số ít tế bào lớn nhìn được bằng mắt thường.',
  examples: [
    { title: 'Đổi đơn vị', problem: 'Hồng cầu người có đường kính khoảng 8 µm. Đổi ra milimet.', solution: '1 µm = 0,001 mm nên 8 µm = 8 × 0,001 = <b>0,008 mm</b>.' },
    { title: 'Xếp hàng tế bào', problem: 'Nếu xếp các hồng cầu (đường kính 8 µm) sát nhau thành một hàng dài 1 mm thì cần bao nhiêu hồng cầu?', solution: '1 mm = 1 000 µm. Số hồng cầu: 1 000 : 8 = <b>125</b> hồng cầu.' },
    { title: 'Hình dạng và chức năng', problem: 'Vì sao tế bào thần kinh có nhiều nhánh và sợi rất dài?', solution: 'Để <b>nhận và truyền tín hiệu</b> đi xa, liên hệ được với nhiều tế bào khác.' }
  ],
  exercises: [
    { question: 'Tế bào vảy hành dài khoảng 0,2 mm. Đổi ra micromet.', hints: ['1 mm = 1 000 µm.', 'Nhân 0,2 với 1 000.'], solution: '0,2 × 1 000 = <b>200 µm</b>.' },
    { question: 'Một vi khuẩn dài 2 µm. Kính hiển vi phóng to 1 000 lần thì ảnh vi khuẩn dài bao nhiêu milimet?', hints: ['Độ dài ảnh = độ dài thật × số lần phóng to.', '2 µm × 1 000 = 2 000 µm; đổi ra mm.'], solution: '2 × 1 000 = 2 000 µm = <b>2 mm</b>.' },
    { question: 'Kể tên một tế bào có thể nhìn thấy bằng mắt thường và một tế bào phải dùng kính hiển vi mới thấy.', hints: ['Nghĩ về quả bưởi, quả trứng.', 'Nghĩ về vi khuẩn, hồng cầu.'], solution: 'Nhìn bằng mắt thường: tép bưởi, trứng gà (lòng đỏ). Cần kính hiển vi: vi khuẩn, hồng cầu, tế bào vảy hành…' }
  ],
  quiz: [
    { type: 'mcq', q: 'Tế bào là:', options: ['Đơn vị cấu trúc và chức năng của cơ thể sống', 'Một loại chất vô cơ', 'Chỉ có ở động vật', 'Một cơ quan của cây'], answer: 0, explain: 'Mọi cơ thể sống đều được cấu tạo từ tế bào.' },
    { type: 'short', q: '1 mm bằng bao nhiêu µm?', answer: '1000', unit: 'µm', explain: '1 mm = 1 000 µm.' },
    { type: 'short', q: 'Đổi 5 µm ra milimet (viết số thập phân dùng dấu phẩy).', answer: '0,005', unit: 'mm', explain: '5 × 0,001 = 0,005 mm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi tế bào đều phải dùng kính hiển vi mới nhìn thấy được.', answer: false, explain: 'Tép bưởi, trứng chim có thể nhìn thấy bằng mắt thường.' },
    { type: 'mcq', q: 'Tế bào có hình đĩa lõm hai mặt, vận chuyển khí trong máu là:', options: ['Tế bào thần kinh', 'Hồng cầu', 'Tế bào cơ', 'Tế bào biểu bì'], answer: 1, explain: 'Hồng cầu hình đĩa lõm hai mặt.' },
    { type: 'mcq', q: 'Tế bào lớn nhất thường được nêu làm ví dụ là:', options: ['Hồng cầu', 'Vi khuẩn', 'Trứng đà điểu', 'Tế bào vảy hành'], answer: 2, explain: 'Trứng đà điểu dài khoảng 15 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình dạng của tế bào phù hợp với chức năng của nó.', answer: true, explain: 'Ví dụ tế bào thần kinh có sợi dài để dẫn truyền.' },
    { type: 'short', q: 'Xếp các vi khuẩn dài 2 µm nối đuôi nhau thành hàng dài 1 mm thì cần bao nhiêu vi khuẩn?', answer: '500', unit: 'vi khuẩn', calc: '1000/2', explain: '1 000 µm : 2 µm = 500.' }
  ]
});
})();
