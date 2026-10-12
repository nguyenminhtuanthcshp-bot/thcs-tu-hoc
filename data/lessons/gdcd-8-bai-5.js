/* GDCD 8 – Bài 5. Bảo vệ môi trường và tài nguyên thiên nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-5', {
  objectives: [
    'Nêu được một số quy định cơ bản của pháp luật về bảo vệ môi trường, tài nguyên thiên nhiên.',
    'Nêu được các biện pháp cần thiết để bảo vệ môi trường và tài nguyên thiên nhiên.',
    'Thực hiện được việc bảo vệ môi trường phù hợp lứa tuổi.',
    'Phê phán, đấu tranh với hành vi gây ô nhiễm môi trường, phá hoại tài nguyên.'
  ],
  intro: 'Con kênh gần trường của Ngọc từng trong xanh, nay đầy túi ni lông và bốc mùi. Câu lạc bộ Môi trường của trường quyết định tổ chức “Chủ nhật xanh” và vận động người dân không xả rác. Vì sao phải <b>bảo vệ môi trường và tài nguyên thiên nhiên</b>?',
  steps: [
    { title: 'Môi trường và tài nguyên thiên nhiên', html: `<ul><li><b>Môi trường</b>: các yếu tố vật chất tự nhiên và nhân tạo bao quanh con người (đất, nước, không khí, sinh vật…).</li><li><b>Tài nguyên thiên nhiên</b>: của cải có sẵn trong tự nhiên con người có thể khai thác, sử dụng (rừng, khoáng sản, nguồn nước…).</li></ul><p>Môi trường và tài nguyên quyết định sự sống còn và phát triển của con người.</p>` },
    { title: 'Quy định của pháp luật', html: `<ul><li><b>Hiến pháp năm 2013, Điều 43</b>: mọi người có quyền được sống trong môi trường trong lành và có nghĩa vụ bảo vệ môi trường.</li><li><b>Luật Bảo vệ môi trường năm 2020</b> (Luật số 72/2020/QH14, hiệu lực từ 1/1/2022), <b>Điều 6</b> nghiêm cấm nhiều hành vi, trong đó có:</li></ul>`,
      svg: S.table({ title: 'Một số hành vi bị nghiêm cấm (Luật BVMT 2020, Điều 6)', head: ['Hành vi', 'Ví dụ'], rows: [['Đổ, thải chất thải sai quy định', 'Vứt rác xuống kênh'], ['Xả thải chưa xử lí', 'Xả nước thải ra sông'], ['Gây ồn, khói bụi quá mức', 'Đốt rác, hát karaoke ồn'], ['Nhập khẩu chất thải', 'Đưa rác ngoại vào'], ['Phá hoại di sản thiên nhiên', 'Khai thác trái phép']], colW: 250 }), caption: 'Tóm tắt, diễn đạt lại; không liệt kê đủ các khoản của Điều 6.' },
    { title: 'Biện pháp bảo vệ', html: `<ul><li>Tiết kiệm điện, nước; hạn chế đồ nhựa dùng một lần.</li><li>Phân loại rác tại nguồn; tái chế, tái sử dụng.</li><li>Trồng và chăm sóc cây xanh; không săn bắt động vật hoang dã.</li><li>Tố giác hành vi xả thải, phá rừng trái phép.</li></ul>` },
    { title: 'Học sinh hành động', html: `<p>Ví dụ kết quả “Chủ nhật xanh” của câu lạc bộ:</p>`,
      svg: S.pieChart({ title: 'Rác thu gom ở kênh: 50 kg (minh hoạ)', parts: [{ v: 30, label: 'Túi ni lông, nhựa: 30 kg' }, { v: 12, label: 'Giấy, bìa: 12 kg' }, { v: 8, label: 'Rác khác: 8 kg' }] }), caption: 'Số liệu minh hoạ: nhựa chiếm 60% lượng rác.' }
  ],
  summary: 'Môi trường và tài nguyên thiên nhiên quyết định sự sống và phát triển của con người. Hiến pháp 2013 (Điều 43) và Luật Bảo vệ môi trường 2020 (Điều 6 nêu các hành vi bị nghiêm cấm) quy định quyền, nghĩa vụ bảo vệ môi trường. Học sinh tiết kiệm điện nước, phân loại rác, trồng cây, phê phán và tố giác hành vi gây ô nhiễm.',
  examples: [
    { title: 'Tính tỉ lệ', problem: 'Thu 50 kg rác, trong đó 30 kg là nhựa. Nhựa chiếm bao nhiêu phần trăm?', solution: '30 : 50 × 100% = 60%.' },
    { title: 'Nhận diện vi phạm', problem: 'Một xưởng xả nước thải chưa xử lí ra sông. Hành vi này vi phạm gì?', solution: 'Vi phạm điều cấm xả thải chưa xử lí đạt quy chuẩn (Luật BVMT 2020, Điều 6).' },
    { title: 'Tiết kiệm', problem: 'Mỗi ngày gia đình em tiết kiệm được 20 lít nước. Trong 30 ngày tiết kiệm bao nhiêu lít?', solution: '600 lít.' }
  ],
  exercises: [
    { question: 'Kể ba việc học sinh có thể làm để giảm rác nhựa.', hints: ['Khi đi mua hàng.', 'Khi đi học.'], solution: 'Dùng túi vải; mang bình nước cá nhân; không dùng ống hút nhựa, hộp xốp.' },
    { question: 'Một lớp phân loại được 18 kg giấy vụn, bán 4 000 đồng/kg. Lớp thu được bao nhiêu tiền?', hints: ['Nhân số kg với giá.', '18 × 4 000.'], solution: '72 000 đồng.' },
    { question: 'Hàng xóm thường đốt rác nhựa gây khói độc. Em xử lí thế nào?', hints: ['Góp ý lịch sự.', 'Báo người có trách nhiệm.'], solution: 'Nhờ bố mẹ góp ý nhẹ nhàng, giải thích tác hại; nếu vẫn tiếp diễn thì báo tổ dân phố, chính quyền địa phương.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi người có quyền được sống trong môi trường trong lành và có nghĩa vụ bảo vệ môi trường.', answer: true, explain: 'Hiến pháp 2013, Điều 43.' },
    { type: 'mcq', q: 'Luật Bảo vệ môi trường hiện hành được ban hành năm:', options: ['2020', '2005', '2014', '1993'], answer: 0, explain: 'Luật số 72/2020/QH14.' },
    { type: 'short', q: '30 kg nhựa trong 50 kg rác chiếm bao nhiêu %?', answer: '60', unit: '%', calc: '30/50*100', explain: '60%.' },
    { type: 'mcq', q: 'Hành vi bị nghiêm cấm:', options: ['Xả nước thải chưa xử lí ra sông', 'Phân loại rác', 'Trồng cây', 'Tiết kiệm điện'], answer: 0, explain: 'Điều 6.' },
    { type: 'short', q: 'Mỗi ngày tiết kiệm 20 lít nước. 30 ngày tiết kiệm bao nhiêu lít?', answer: '600', unit: 'lít', calc: '20*30', explain: '600.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảo vệ môi trường chỉ là trách nhiệm của Nhà nước.', answer: false, explain: 'Của mọi người.' },
    { type: 'short', q: 'Bán 18 kg giấy vụn, 4 000 đồng/kg. Thu được bao nhiêu đồng?', answer: '72000', answerText: '72 000', unit: 'đồng', calc: '18*4000', explain: '72 000.' },
    { type: 'mcq', q: 'Biện pháp bảo vệ tài nguyên rừng:', options: ['Trồng cây, không phá rừng trái phép', 'Đốt rừng làm rẫy', 'Săn bắt động vật hoang dã', 'Chặt cây lấy gỗ tuỳ ý'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
