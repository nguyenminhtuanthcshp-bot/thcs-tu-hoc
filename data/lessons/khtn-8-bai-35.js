/* KHTN 8 – Bài 35. Hệ bài tiết ở người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-35', {
  objectives: [
    'Nêu được khái niệm bài tiết và các cơ quan bài tiết chủ yếu.',
    'Kể tên và xác định được vị trí các cơ quan của hệ bài tiết nước tiểu; nêu được chức năng của thận.',
    'Trình bày được quá trình tạo thành nước tiểu (lọc máu, tái hấp thụ, bài tiết tiếp).',
    'Nêu được một số bệnh về hệ bài tiết và biện pháp bảo vệ; tìm hiểu thành tựu ghép thận, chạy thận nhân tạo.'
  ],
  intro: 'Tế bào hoạt động luôn thải ra các chất thải như CO<sub>2</sub>, urea… Nếu tích tụ lại, chúng sẽ đầu độc cơ thể. Cơ thể “dọn rác” bằng cách nào?',
  steps: [
    { title: 'Bài tiết và cơ quan bài tiết', html: `<p><b>Bài tiết</b> là quá trình lọc và thải ra môi trường các chất thải do tế bào tạo ra, các chất dư thừa, chất độc hại, giúp duy trì môi trường trong ổn định.</p>
      <table class="tbl"><tr><th>Cơ quan</th><th>Sản phẩm bài tiết</th></tr><tr><td>Phổi</td><td>CO<sub>2</sub>, hơi nước</td></tr><tr><td>Da</td><td>mồ hôi</td></tr><tr><td>Thận</td><td>nước tiểu</td></tr></table>` },
    { title: 'Hệ bài tiết nước tiểu', html: `<p>Gồm: <b>hai quả thận</b> (lọc máu, tạo nước tiểu), <b>hai ống dẫn nước tiểu</b>, <b>bóng đái</b> (bàng quang – chứa nước tiểu) và <b>ống đái</b>.</p>
      <p>Mỗi quả thận có khoảng 1 triệu <b>nephron</b> – đơn vị chức năng của thận.</p>`,
      svg: S.humanBody({ organs: ['than', 'ong-dan-tieu', 'bang-quang'], title: 'Các cơ quan của hệ bài tiết nước tiểu' }) },
    { title: 'Quá trình tạo thành nước tiểu', html: `<ol><li><b>Lọc máu</b> ở cầu thận ⇒ tạo <b>nước tiểu đầu</b> (không có tế bào máu và protein).</li><li><b>Tái hấp thụ</b> ở ống thận: các chất cần thiết (nước, glucose, muối khoáng…) được hấp thụ trở lại máu.</li><li><b>Bài tiết tiếp</b>: các chất thải, chất độc còn lại được thải vào ống thận ⇒ <b>nước tiểu chính thức</b>.</li></ol>
      <p>Mỗi ngày thận lọc tạo khoảng 170 – 180 L nước tiểu đầu nhưng chỉ thải ra khoảng 1,5 L nước tiểu chính thức (giá trị tham khảo).</p>`,
      svg: S.flow({ items: ['Máu đến thận', 'Lọc ở cầu thận → nước tiểu đầu', 'Tái hấp thụ chất cần thiết', 'Bài tiết tiếp → nước tiểu chính thức'], size: 13, label: 'Quá trình tạo thành nước tiểu' }) },
    { title: 'Bảo vệ hệ bài tiết', html: `<ul><li>Bệnh thường gặp: sỏi thận, viêm thận, suy thận, viêm đường tiết niệu.</li><li>Biện pháp: uống đủ nước; không nhịn tiểu; ăn uống hợp lí, hạn chế muối, đồ ăn quá mặn, quá chua; giữ vệ sinh; không lạm dụng thuốc.</li><li>Thành tựu y học: <b>chạy thận nhân tạo</b> (máy lọc máu thay thận) và <b>ghép thận</b> giúp người suy thận nặng kéo dài sự sống.</li></ul>` }
  ],
  summary: 'Bài tiết giúp thải chất thải, duy trì môi trường trong ổn định; cơ quan bài tiết: phổi (CO<sub>2</sub>), da (mồ hôi), thận (nước tiểu). Hệ bài tiết nước tiểu: thận, ống dẫn nước tiểu, bóng đái, ống đái. Tạo nước tiểu: lọc máu → tái hấp thụ → bài tiết tiếp. Uống đủ nước, không nhịn tiểu.',
  examples: [
    { title: 'Tỉ lệ nước tiểu', problem: 'Mỗi ngày tạo 180 L nước tiểu đầu, thải 1,5 L nước tiểu chính thức. Bao nhiêu lít đã được tái hấp thụ?', solution: '180 − 1,5 = 178,5 (L) – hầu hết nước được hấp thụ trở lại.' },
    { title: 'Vì sao nước tiểu đầu không có protein', problem: 'Vì sao nước tiểu đầu không có tế bào máu và protein?', solution: 'Các lỗ lọc ở cầu thận rất nhỏ, tế bào máu và protein có kích thước lớn nên không qua được.' },
    { title: 'Nhịn tiểu', problem: 'Vì sao không nên nhịn tiểu lâu?', solution: 'Nhịn tiểu lâu tạo điều kiện cho các chất cặn lắng đọng gây sỏi, vi khuẩn phát triển gây viêm đường tiết niệu.' }
  ],
  exercises: [
    { question: 'Kể tên các cơ quan bài tiết và sản phẩm bài tiết của mỗi cơ quan.', hints: ['Có ba cơ quan chủ yếu.', 'Thận thải nước tiểu.'], solution: 'Phổi: CO<sub>2</sub>, hơi nước; da: mồ hôi; thận: nước tiểu.' },
    { question: 'Hai thận có tổng khoảng 2 triệu nephron. Nếu một thận bị cắt bỏ, còn khoảng bao nhiêu nephron?', hints: ['Mỗi thận khoảng 1 triệu nephron.', 'Còn một thận.'], solution: 'Khoảng 1 triệu nephron (một thận khoẻ vẫn đảm bảo chức năng bài tiết).' },
    { question: 'Nêu ba thói quen tốt giúp bảo vệ hệ bài tiết nước tiểu.', hints: ['Liên quan đến uống nước.', 'Liên quan đến ăn uống, đi tiểu.'], solution: 'Uống đủ nước mỗi ngày; không nhịn tiểu; ăn nhạt, hạn chế đồ quá mặn và thức ăn ôi thiu.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Da tham gia bài tiết thông qua việc tiết mồ hôi.', answer: true, explain: 'Mồ hôi chứa nước, muối, urea.' },
    { type: 'mcq', q: 'Đơn vị chức năng của thận là:', options: ['phế nang', 'nephron', 'nơron', 'lông ruột'], answer: 1, explain: 'Mỗi thận có khoảng 1 triệu nephron.' },
    { type: 'mcq', q: 'Cơ quan chứa nước tiểu trước khi thải ra ngoài là:', options: ['thận', 'ống dẫn nước tiểu', 'bóng đái', 'ống thận'], answer: 2, explain: 'Bóng đái (bàng quang) chứa nước tiểu.' },
    { type: 'short', q: 'Mỗi ngày tạo 170 L nước tiểu đầu, thải 1,5 L nước tiểu chính thức. Lượng được tái hấp thụ là bao nhiêu lít?', answer: '168,5', unit: 'L', calc: '170-1.5', explain: '170 − 1,5 = 168,5 L.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nước tiểu đầu chứa nhiều protein và tế bào máu.', answer: false, explain: 'Chúng không lọt qua cầu thận.' },
    { type: 'short', q: 'Mỗi thận có khoảng 1 triệu nephron. Hai thận có khoảng bao nhiêu triệu nephron?', answer: '2', unit: 'triệu nephron', calc: '2*1', explain: '2 · 1 = 2 triệu nephron.' },
    { type: 'mcq', q: 'Thói quen nào có hại cho hệ bài tiết?', options: ['Uống đủ nước', 'Nhịn tiểu lâu', 'Ăn nhạt', 'Giữ vệ sinh'], answer: 1, explain: 'Nhịn tiểu dễ gây sỏi, viêm.' },
    { type: 'short', q: 'Một người thải 1,5 L nước tiểu mỗi ngày. Trong 7 ngày thải bao nhiêu lít?', answer: '10,5', unit: 'L', calc: '1.5*7', explain: '1,5 · 7 = 10,5 L.' }
  ]
});
})();
