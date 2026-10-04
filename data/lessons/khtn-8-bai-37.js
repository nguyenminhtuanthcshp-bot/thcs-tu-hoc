/* KHTN 8 – Bài 37. Hệ thần kinh và các giác quan ở người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-37', {
  objectives: [
    'Nêu được cấu tạo, chức năng của hệ thần kinh; cấu tạo của neuron.',
    'Nêu được một số bệnh về hệ thần kinh và tác hại của chất gây nghiện; cách phòng tránh.',
    'Nêu được cấu tạo, chức năng của mắt và tai; một số bệnh, tật về mắt, tai và cách bảo vệ.',
    'Vận dụng hiểu biết để bảo vệ mắt, tai trong học tập và sinh hoạt.'
  ],
  intro: 'Chạm tay vào cốc nước nóng, em rụt tay lại trước cả khi kịp nghĩ. Hệ thần kinh nhận, xử lí và trả lời thông tin nhanh như thế nào? Mắt và tai giúp ta cảm nhận thế giới ra sao?',
  steps: [
    { title: 'Cấu tạo và chức năng của hệ thần kinh', html: `<ul><li><b>Bộ phận trung ương</b>: não (trong hộp sọ) và tuỷ sống (trong ống xương sống).</li><li><b>Bộ phận ngoại biên</b>: dây thần kinh và hạch thần kinh.</li></ul>
      <p>Hệ thần kinh điều khiển, điều hoà và phối hợp hoạt động của các cơ quan, giúp cơ thể thích nghi với môi trường.</p>
      <p><b>Neuron</b> (tế bào thần kinh) là đơn vị cấu tạo của hệ thần kinh, gồm thân, các sợi nhánh và một sợi trục (thường có bao myelin), tận cùng là các cúc xi náp.</p>`,
      svg: S.neuron(), caption: 'Cấu tạo một neuron (sơ đồ).' },
    { title: 'Phản xạ, bệnh thần kinh và chất gây nghiện', html: `<p><b>Phản xạ</b> là phản ứng của cơ thể trả lời kích thích từ môi trường, thông qua hệ thần kinh.</p>
      <ul><li>Một số bệnh: Alzheimer (suy giảm trí nhớ), Parkinson (run, cứng cơ), động kinh…</li><li><b>Chất gây nghiện</b> (ma tuý, rượu bia, thuốc lá…) gây tổn thương hệ thần kinh, gây nghiện, ảnh hưởng sức khoẻ và xã hội. Tuyệt đối không thử ma tuý; nói không với rượu bia, thuốc lá.</li></ul>`,
      svg: S.flow({ items: ['Cơ quan thụ cảm (da)', 'Neuron hướng tâm', 'Trung ương thần kinh', 'Neuron li tâm', 'Cơ quan phản ứng (cơ tay)'], size: 12, label: 'Đường đi của xung thần kinh trong phản xạ rụt tay' }) },
    { title: 'Thị giác – mắt', html: `<p>Cầu mắt gồm màng cứng (phía trước là giác mạc trong suốt), màng mạch (có mống mắt, đồng tử), màng lưới (chứa tế bào thụ cảm thị giác); bên trong có thể thuỷ tinh và dịch thuỷ tinh. Ảnh của vật hiện trên màng lưới, xung thần kinh theo dây thần kinh thị giác lên não.</p>`,
      svg: S.eyeSection() },
    { title: 'Tật khúc xạ và bệnh về mắt', html: `<ul><li><b>Cận thị</b>: chỉ nhìn rõ vật ở gần; ảnh của vật ở xa hiện trước màng lưới. Khắc phục: đeo kính phân kì (kính cận).</li><li><b>Viễn thị</b>: nhìn rõ vật ở xa, khó nhìn vật ở gần; ảnh hiện sau màng lưới. Khắc phục: đeo kính hội tụ.</li><li>Bệnh về mắt: đau mắt đỏ, đục thuỷ tinh thể, loạn thị…</li></ul>
      <div class="box tip">Bảo vệ mắt: ngồi đọc sách cách mắt khoảng 30 cm, đủ ánh sáng; quy tắc 20 – 20 – 20 (cứ 20 phút nhìn màn hình thì nhìn xa khoảng 6 m (20 feet) trong 20 giây); không dụi mắt, ăn đủ vitamin A.</div>`,
      svg: [S.eyeFocus('can'), S.eyeFocus('can', { lens: true })], caption: 'Mắt cận: ảnh của vật ở xa hiện trước màng lưới; đeo kính phân kì đưa ảnh về màng lưới.' },
    { title: 'Thính giác – tai', html: `<ul><li><b>Tai ngoài</b>: vành tai, ống tai, màng nhĩ.</li><li><b>Tai giữa</b>: chuỗi xương tai (truyền rung động).</li><li><b>Tai trong</b>: ốc tai (chứa tế bào thụ cảm thính giác) và bộ phận tiền đình (giữ thăng bằng).</li></ul>
      <p>Bệnh về tai: viêm tai giữa, ù tai… Bảo vệ tai: vệ sinh tai đúng cách, không dùng vật nhọn ngoáy tai, tránh tiếng ồn lớn, không nghe tai nghe âm lượng quá to và quá lâu.</p>`,
      svg: S.earSection() }
  ],
  summary: 'Hệ thần kinh gồm trung ương (não, tuỷ sống) và ngoại biên (dây, hạch thần kinh); đơn vị là neuron. Chất gây nghiện hủy hoại hệ thần kinh. Mắt: ảnh hiện trên màng lưới; cận thị đeo kính phân kì, viễn thị đeo kính hội tụ. Tai gồm tai ngoài, giữa, trong; ốc tai thu nhận âm thanh. Giữ khoảng cách đọc khoảng 30 cm, tránh tiếng ồn lớn.',
  examples: [
    { title: 'Phân tích phản xạ', problem: 'Nêu đường đi của xung thần kinh khi tay chạm vật nóng và rụt lại.', solution: 'Thụ quan ở da → neuron hướng tâm → tuỷ sống (trung ương) → neuron li tâm → cơ tay co, rụt tay lại.' },
    { title: 'Khoảng cách đọc sách', problem: 'Khoảng cách đọc sách phù hợp là 30 cm. Đổi ra mét.', solution: '30 cm = 0,3 m.' },
    { title: 'Kính cận', problem: 'Vì sao người cận thị phải đeo kính phân kì?', solution: 'Kính phân kì làm chùm sáng phân kì bớt trước khi vào mắt, đưa ảnh của vật ở xa lùi về đúng màng lưới.' }
  ],
  exercises: [
    { question: 'Kể tên các bộ phận của hệ thần kinh.', hints: ['Có bộ phận trung ương và ngoại biên.', 'Trung ương gồm hai phần.'], solution: 'Trung ương: não, tuỷ sống; ngoại biên: dây thần kinh, hạch thần kinh.' },
    { question: 'Theo quy tắc 20 – 20 – 20, trong 2 giờ học trực tuyến, em cần nghỉ nhìn xa ít nhất mấy lần?', hints: ['2 giờ = 120 phút.', 'Chia cho 20.'], solution: '120 : 20 = 6 lần.' },
    { question: 'Nêu ba việc làm để bảo vệ tai.', hints: ['Liên quan đến vệ sinh.', 'Liên quan đến tiếng ồn.'], solution: 'Vệ sinh tai đúng cách, không ngoáy tai bằng vật nhọn; tránh nơi ồn ào; không nghe tai nghe to và lâu.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Não và tuỷ sống thuộc bộ phận trung ương của hệ thần kinh.', answer: true, explain: 'Dây và hạch thần kinh là ngoại biên.' },
    { type: 'mcq', q: 'Đơn vị cấu tạo của hệ thần kinh là:', options: ['nephron', 'neuron', 'hồng cầu', 'phế nang'], answer: 1, explain: 'Neuron là tế bào thần kinh.' },
    { type: 'mcq', q: 'Người cận thị cần đeo:', options: ['kính hội tụ', 'kính phân kì', 'kính râm', 'kính lúp'], answer: 1, explain: 'Ảnh hiện trước màng lưới, cần kính phân kì.' },
    { type: 'short', q: 'Khoảng cách đọc sách phù hợp là 30 cm. Khoảng cách đó bằng bao nhiêu mét?', answer: '0,3', unit: 'm', calc: '30/100', explain: '30 : 100 = 0,3 m.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chuỗi xương tai nằm ở tai trong.', answer: false, explain: 'Chuỗi xương tai thuộc tai giữa.' },
    { type: 'short', q: 'Theo quy tắc 20 – 20 – 20, trong 100 phút dùng máy tính cần nghỉ nhìn xa bao nhiêu lần?', answer: '5', unit: 'lần', calc: '100/20', explain: '100 : 20 = 5 lần.' },
    { type: 'mcq', q: 'Bộ phận của tai chứa tế bào thụ cảm thính giác là:', options: ['vành tai', 'màng nhĩ', 'ốc tai', 'ống tai'], answer: 2, explain: 'Ốc tai thuộc tai trong.' },
    { type: 'short', q: 'Xung thần kinh truyền với tốc độ khoảng 100 m/s (tham khảo). Thời gian truyền trên quãng đường 1 m là bao nhiêu giây?', answer: '0,01', unit: 's', calc: '1/100', explain: 't = 1 : 100 = 0,01 s.' }
  ]
});
})();
