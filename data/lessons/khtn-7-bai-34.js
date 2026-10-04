/* KHTN 7 – Bài 34. Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-34', {
  objectives: [
    'Vận dụng được các kiến thức cảm ứng ở thực vật vào giải thích một số hiện tượng thực tiễn trong trồng trọt.',
    'Vận dụng được kiến thức về tập tính ở động vật vào chăn nuôi, học tập và đời sống.',
    'Nêu được một số biện pháp dựa trên cảm ứng của sinh vật để bảo vệ cây trồng, vật nuôi.'
  ],
  intro: 'Người trồng mướp làm giàn, người nuôi gà gõ kẻng khi cho ăn, nông dân thắp đèn bẫy sâu trên đồng lúa. Tất cả đều là những ứng dụng khéo léo của cảm ứng.',
  steps: [
    { title: 'Vận dụng cảm ứng ở thực vật trong trồng trọt', html: `<table class="tbl"><tr><th>Tính cảm ứng</th><th>Ứng dụng</th></tr>
      <tr><td>Hướng tiếp xúc</td><td>Làm giàn, cắm cọc cho cây leo (mướp, bầu, bí, đậu, trầu không…)</td></tr>
      <tr><td>Hướng sáng</td><td>Trồng cây với mật độ hợp lí; trồng xen cây ưa bóng dưới cây ưa sáng; xoay chậu cây cảnh để cây mọc thẳng, cân đối</td></tr>
      <tr><td>Hướng nước, hướng hoá (chất dinh dưỡng)</td><td>Tưới nước, bón phân quanh gốc theo tán cây để rễ phát triển rộng; làm đất tơi xốp</td></tr></table>`,
      svg: S.row([{ svg: S.tropism('tendril'), caption: 'Tua cuốn quấn vào giàn' }, { svg: S.tropism('light'), caption: 'Cây vươn về phía ánh sáng' }]) },
    { title: 'Vận dụng tập tính trong chăn nuôi và bảo vệ cây trồng', html: `<ul><li>Huấn luyện vật nuôi: gõ kẻng khi cho gà, cá ăn để tạo thói quen tập trung; huấn luyện chó nghiệp vụ, chó chăn cừu.</li><li>Dùng <b>bẫy đèn</b> bắt sâu bướm (nhiều loài côn trùng có tập tính bay về phía ánh sáng vào ban đêm).</li><li>Dùng bù nhìn, tiếng động để xua chim khỏi ruộng; dùng chất dẫn dụ để bắt côn trùng gây hại.</li></ul>`,
      svg: S.flow({ items: ['Gõ kẻng', 'Cho ăn ngay sau đó', 'Lặp lại nhiều ngày', 'Nghe kẻng là gà chạy về'], size: 14, label: 'Hình thành tập tính học được ở vật nuôi' }),
      caption: 'Kết hợp lặp lại kích thích (tiếng kẻng) với thức ăn giúp hình thành tập tính học được.' },
    { title: 'Vận dụng trong học tập và đời sống', html: `<ul><li>Hình thành thói quen tốt: học bài và đi ngủ đúng giờ, lặp lại mỗi ngày sẽ thành nếp.</li><li>Rèn luyện kĩ năng: tập bơi, tập đi xe đạp, phản xạ khi tham gia giao thông (dừng khi đèn đỏ).</li><li>Phòng tránh nguy hiểm: không lại gần ong, rắn; nhận biết các tín hiệu cảnh báo.</li></ul>` },
    { title: 'Tổng kết', html: `<div class="box key">Hiểu cảm ứng của sinh vật giúp con người điều khiển sự sinh trưởng của cây trồng, huấn luyện vật nuôi, phòng trừ sinh vật gây hại và rèn luyện thói quen, kĩ năng cho bản thân.</div>` }
  ],
  summary: 'Trồng trọt: làm giàn cho cây leo (hướng tiếp xúc), trồng cây mật độ hợp lí (hướng sáng), tưới nước, bón phân quanh gốc (hướng nước, hướng hoá). Chăn nuôi: gõ kẻng khi cho ăn, huấn luyện vật nuôi (tập tính học được). Bảo vệ cây trồng: bẫy đèn bắt sâu, bù nhìn xua chim. Đời sống: rèn thói quen, kĩ năng tốt.',
  examples: [
    { title: 'Giải thích biện pháp', problem: 'Vì sao nên bón phân theo vòng tròn quanh tán cây thay vì đổ sát gốc?', solution: 'Rễ có tính hướng hoá và hướng nước; phân bón quanh tán giúp rễ mọc lan rộng để hấp thụ, cây bám chắc và hút được nhiều chất dinh dưỡng; bón sát gốc dễ làm tổn thương rễ.' },
    { title: 'Tính số sâu bắt được', problem: 'Một bẫy đèn bắt trung bình 150 con sâu bướm mỗi đêm. Trong 1 tuần bẫy bắt được bao nhiêu con?', solution: '150 · 7 = 1 050 con.' },
    { title: 'Xoay chậu cây cảnh', problem: 'Vì sao nên xoay chậu cây cảnh đặt cạnh cửa sổ vài ngày một lần?', solution: 'Cây có tính hướng sáng nên sẽ cong về phía cửa sổ; xoay chậu giúp các phía đều nhận ánh sáng, cây mọc thẳng, cân đối.' }
  ],
  exercises: [
    { question: 'Nêu 2 ví dụ vận dụng tính hướng tiếp xúc và hướng sáng trong trồng trọt.', hints: ['Cây leo cần gì để bám?', 'Cây cần ánh sáng như thế nào?'], solution: 'Hướng tiếp xúc: làm giàn cho mướp, cắm cọc cho đậu leo. Hướng sáng: trồng cây thưa hợp lí để đủ ánh sáng; xoay chậu cây cảnh.' },
    { question: 'Vì sao dùng bẫy đèn bắt sâu là biện pháp thân thiện với môi trường?', hints: ['So sánh với dùng thuốc trừ sâu.', 'Biện pháp này dựa vào tập tính nào?'], solution: 'Bẫy đèn dựa vào tập tính bay về phía ánh sáng của côn trùng, không dùng hoá chất nên không gây ô nhiễm đất, nước, không để lại dư lượng thuốc trên nông sản.' },
    { question: 'Người nuôi gõ kẻng mỗi ngày 3 lần trong 20 ngày để luyện đàn gà. Tổng số lần gõ kẻng là bao nhiêu?', hints: ['Số lần mỗi ngày nhân số ngày.', '3 · 20.'], solution: '3 · 20 = 60 lần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Làm giàn cho cây mướp là vận dụng tính hướng tiếp xúc.', answer: true, explain: 'Tua cuốn quấn vào giàn.' },
    { type: 'mcq', q: 'Bẫy đèn bắt sâu bướm dựa vào:', options: ['tập tính bay về phía ánh sáng của côn trùng', 'tính hướng nước của cây', 'tính hướng trọng lực', 'tập tính làm tổ'], answer: 0, explain: 'Côn trùng bị ánh đèn thu hút ban đêm.' },
    { type: 'mcq', q: 'Gõ kẻng mỗi khi cho cá ăn nhằm:', options: ['làm cá sợ hãi', 'hình thành tập tính học được', 'tăng nhiệt độ nước', 'giúp cá quang hợp'], answer: 1, explain: 'Cá quen tập trung khi nghe kẻng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên đổ phân bón sát gốc cây để rễ hấp thụ tốt nhất.', answer: false, explain: 'Nên bón quanh tán cây.' },
    { type: 'short', q: 'Bẫy đèn bắt 150 con sâu mỗi đêm. Trong 7 đêm bắt được bao nhiêu con?', answer: '1050', unit: 'con', calc: '150*7', explain: '150 · 7 = 1 050.' },
    { type: 'short', q: 'Gõ kẻng 3 lần/ngày trong 20 ngày. Tổng số lần gõ kẻng?', answer: '60', unit: 'lần', calc: '3*20', explain: '3 · 20 = 60.' },
    { type: 'mcq', q: 'Xoay chậu cây cảnh đặt cạnh cửa sổ là vận dụng tính:', options: ['hướng sáng', 'hướng nước', 'hướng tiếp xúc', 'hướng hoá'], answer: 0, explain: 'Giúp cây mọc thẳng, cân đối.' },
    { type: 'short', q: 'Một vườn có 40 cây mướp, mỗi cây cần 2 cọc giàn. Cần bao nhiêu cọc?', answer: '80', unit: 'cọc', calc: '40*2', explain: '40 · 2 = 80 cọc.' }
  ]
});
})();
