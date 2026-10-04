/* KHTN 7 – Bài 41. Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var egg = S.bar({ title: 'Tỉ lệ đẻ trứng của đàn gà theo thời gian chiếu sáng (số liệu minh hoạ)', cats: ['8 giờ/ngày', '12 giờ/ngày', '16 giờ/ngày'], series: [{ name: 'Tỉ lệ đẻ (%)', values: [40, 60, 80], color: '#ca8a04' }], yMax: 100, yStep: 20, yLabel: '%', width: 580, height: 300 });
THCS.registerLesson('khtn-7/bai-41', {
  objectives: [
    'Nêu được một số yếu tố ảnh hưởng đến sinh sản ở sinh vật (yếu tố bên trong và yếu tố môi trường).',
    'Nêu được vai trò của hormone trong điều hoà sinh sản.',
    'Giải thích được một số ứng dụng điều khiển sinh sản ở sinh vật trong thực tiễn (thụ phấn nhân tạo, điều khiển số con, giới tính, chiếu sáng…); nêu được ý nghĩa của sinh đẻ có kế hoạch ở người.'
  ],
  intro: 'Người chăn nuôi bật đèn cho gà vào buổi tối, người nuôi cá dùng chế phẩm kích thích cá đẻ đồng loạt, nông dân rắc phấn cho hoa ngô. Con người đã có thể “điều khiển” sinh sản của sinh vật.',
  steps: [
    { title: 'Các yếu tố ảnh hưởng đến sinh sản', html: `<ul><li><b>Yếu tố bên trong</b>: đặc điểm di truyền của loài, <b>hormone</b>, tuổi, tình trạng sức khoẻ của cơ thể.</li><li><b>Yếu tố môi trường</b>: nhiệt độ, ánh sáng, nước, độ ẩm, thức ăn (chất dinh dưỡng)…</li></ul>
      <p>Ví dụ: trứng gà cần được ấp ở khoảng <b>37,5 °C</b> trong khoảng <b>21 ngày</b> mới nở; nhiều loài cây chỉ ra hoa khi độ dài ngày thích hợp; thiếu thức ăn làm vật nuôi đẻ ít, chậm động dục.</p>`,
      svg: egg, caption: 'Số liệu minh hoạ: thời gian chiếu sáng phù hợp làm tăng tỉ lệ đẻ trứng của gà.' },
    { title: 'Điều hoà sinh sản', html: `<p>Ở động vật và người, sinh sản được điều hoà chủ yếu bởi <b>hệ nội tiết</b> (các hormone) và <b>hệ thần kinh</b>. Các yếu tố môi trường tác động lên hệ thần kinh, tuyến nội tiết, từ đó ảnh hưởng đến sự tiết hormone điều khiển quá trình tạo giao tử, rụng trứng…</p>
      <p>Ở thực vật, sự ra hoa, tạo quả chịu ảnh hưởng của các chất điều hoà sinh trưởng (hormone thực vật) cùng với ánh sáng, nhiệt độ.</p>`,
      svg: S.flow({ items: ['Yếu tố môi trường (ánh sáng, nhiệt độ, thức ăn…)', 'Hệ thần kinh, tuyến nội tiết', 'Hormone sinh sản', 'Cơ quan sinh sản: tạo giao tử, sinh sản'], size: 14, label: 'Sơ đồ điều hoà sinh sản ở động vật' }),
      caption: 'Môi trường tác động qua hệ thần kinh và hormone để điều hoà sinh sản.' },
    { title: 'Điều khiển sinh sản trong thực tiễn', html: `<table class="tbl"><tr><th>Đối tượng</th><th>Biện pháp</th></tr>
      <tr><td>Thực vật</td><td>Thụ phấn nhân tạo (ngô, bí, thanh long…); chiếu sáng, bấm ngọn, dùng chất điều hoà sinh trưởng để điều khiển ra hoa, đậu quả; nhân giống vô tính</td></tr>
      <tr><td>Động vật</td><td>Thay đổi yếu tố môi trường (chiếu sáng cho gà, điều chỉnh nhiệt độ nước cho cá); dùng hormone kích thích cá đẻ; thụ tinh nhân tạo; ấp trứng nhân tạo; điều khiển tỉ lệ đực, cái theo nhu cầu</td></tr></table>` },
    { title: 'Sinh đẻ có kế hoạch ở người', html: `<p><b>Sinh đẻ có kế hoạch</b> là điều chỉnh số con, thời điểm sinh con và khoảng cách giữa các lần sinh cho phù hợp với điều kiện sức khoẻ, kinh tế của gia đình và xã hội.</p>
      <div class="box key">Ý nghĩa: bảo vệ sức khoẻ bà mẹ, trẻ em; nâng cao chất lượng cuộc sống; góp phần ổn định dân số. Tuổi học sinh cần hiểu đúng về sức khoẻ sinh sản, tránh mang thai ở tuổi vị thành niên.</div>` }
  ],
  summary: 'Sinh sản chịu ảnh hưởng của yếu tố bên trong (di truyền, hormone, tuổi) và môi trường (nhiệt độ, ánh sáng, nước, thức ăn). Hormone và hệ thần kinh điều hoà sinh sản. Điều khiển sinh sản: thụ phấn nhân tạo, chiếu sáng, dùng hormone, thụ tinh nhân tạo, ấp trứng nhân tạo. Sinh đẻ có kế hoạch bảo vệ sức khoẻ và nâng cao chất lượng cuộc sống.',
  examples: [
    { title: 'Đọc biểu đồ', problem: 'Theo biểu đồ, khi tăng thời gian chiếu sáng từ 8 giờ lên 16 giờ mỗi ngày, tỉ lệ đẻ tăng thêm bao nhiêu phần trăm? Đàn 500 gà khi đó có khoảng bao nhiêu con đẻ trứng mỗi ngày?', solution: 'Tăng 80% − 40% = 40%. Với chiếu sáng 16 giờ: 500 · 80 : 100 = 400 con đẻ trứng.' },
    { title: 'Tính ngày trứng nở', problem: 'Trứng gà bắt đầu ấp ngày 1 tháng 3, thời gian ấp khoảng 21 ngày. Trứng nở vào khoảng ngày nào?', solution: '1 + 21 = 22 ⇒ khoảng ngày 22 tháng 3.' },
    { title: 'Thụ phấn nhân tạo', problem: 'Vì sao trồng thanh long ruột đỏ người ta thường thụ phấn nhân tạo?', solution: 'Nhiều giống thanh long ruột đỏ khó tự thụ phấn, hoa nở về đêm, ít côn trùng; thụ phấn nhân tạo giúp tăng tỉ lệ đậu quả và kích thước quả.' }
  ],
  exercises: [
    { question: 'Kể 2 yếu tố bên trong và 3 yếu tố môi trường ảnh hưởng đến sinh sản của vật nuôi.', hints: ['Bên trong: liên quan đến bản thân cơ thể.', 'Môi trường: nhiệt độ, ánh sáng…'], solution: 'Bên trong: đặc điểm giống (di truyền), hormone (hoặc tuổi, sức khoẻ). Môi trường: nhiệt độ, ánh sáng, thức ăn.' },
    { question: 'Vì sao người nuôi cá thường tiêm hormone kích thích cho cá bố mẹ trong trại giống?', hints: ['Hormone có vai trò gì trong sinh sản?', 'Người nuôi muốn cá đẻ như thế nào?'], solution: 'Hormone kích thích cá chín trứng, đẻ đồng loạt đúng thời điểm mong muốn, giúp chủ động sản xuất nhiều cá giống.' },
    { question: 'Đàn 500 con gà, tỉ lệ đẻ 80%. Mỗi ngày thu được bao nhiêu quả trứng (mỗi con đẻ 1 quả)? Trong 30 ngày thu được bao nhiêu quả?', hints: ['Số con đẻ = 80% của 500.', 'Nhân với 30 ngày.'], solution: 'Mỗi ngày 400 quả; 30 ngày: 400 · 30 = 12 000 quả.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hormone tham gia điều hoà quá trình sinh sản ở động vật.', answer: true, explain: 'Hệ nội tiết cùng hệ thần kinh điều hoà sinh sản.' },
    { type: 'mcq', q: 'Yếu tố nào là yếu tố bên trong ảnh hưởng đến sinh sản?', options: ['Nhiệt độ', 'Ánh sáng', 'Hormone', 'Thức ăn'], answer: 2, explain: 'Các yếu tố còn lại là yếu tố môi trường.' },
    { type: 'mcq', q: 'Bật đèn chiếu sáng thêm cho gà vào buổi tối nhằm:', options: ['làm gà ngủ nhiều hơn', 'tăng tỉ lệ đẻ trứng', 'giảm lượng thức ăn', 'đổi màu lông'], answer: 1, explain: 'Thời gian chiếu sáng thích hợp kích thích gà đẻ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Con người không thể điều khiển sinh sản của vật nuôi và cây trồng.', answer: false, explain: 'Có nhiều biện pháp điều khiển.' },
    { type: 'short', q: 'Theo biểu đồ, tỉ lệ đẻ ở 16 giờ/ngày hơn ở 8 giờ/ngày bao nhiêu phần trăm?', answer: '40', unit: '%', calc: '80-40', explain: '80 − 40 = 40%.' },
    { type: 'short', q: 'Đàn 500 gà, tỉ lệ đẻ 80%. Mỗi ngày có bao nhiêu con đẻ trứng?', answer: '400', unit: 'con', calc: '500*80/100', explain: '500 · 0,8 = 400.' },
    { type: 'mcq', q: 'Ý nghĩa của sinh đẻ có kế hoạch là:', options: ['bảo vệ sức khoẻ bà mẹ và trẻ em, nâng cao chất lượng cuộc sống', 'tăng dân số thật nhanh', 'giảm tuổi thọ', 'không có ý nghĩa gì'], answer: 0, explain: 'Góp phần ổn định dân số.' },
    { type: 'short', q: 'Ấp trứng từ ngày 1 tháng 3, thời gian ấp 21 ngày. Trứng nở vào khoảng ngày bao nhiêu của tháng 3?', answer: '22', unit: 'tháng 3', calc: '1+21', explain: '1 + 21 = 22.' }
  ]
});
})();
