/* KHTN 8 – Bài 38. Hệ nội tiết ở người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-38', {
  objectives: [
    'Kể tên và xác định được vị trí các tuyến nội tiết chính; nêu được chức năng của chúng.',
    'Phân biệt được tuyến nội tiết với tuyến ngoại tiết; nêu được tính chất của hormone.',
    'Nêu được một số bệnh liên quan đến hệ nội tiết (tiểu đường, bướu cổ) và cách phòng tránh.'
  ],
  intro: 'Vì sao đến tuổi dậy thì, cơ thể thay đổi nhanh chóng? Vì sao thiếu iodine có thể gây bướu cổ? Câu trả lời liên quan đến những “sứ giả hoá học” gọi là hormone.',
  steps: [
    { title: 'Tuyến nội tiết và hormone', html: `<ul><li><b>Tuyến nội tiết</b> tiết <b>hormone</b> ngấm thẳng vào máu, theo máu đến cơ quan đích (ví dụ: tuyến giáp, tuyến yên).</li><li><b>Tuyến ngoại tiết</b> tiết chất theo ống dẫn ra ngoài hoặc vào khoang cơ thể (tuyến nước bọt, tuyến mồ hôi).</li><li>Tuyến tuỵ vừa là tuyến nội tiết (tiết insulin, glucagon) vừa là tuyến ngoại tiết (tiết dịch tuỵ) – gọi là tuyến pha.</li></ul>
      <p>Hormone có hoạt tính sinh học cao (lượng nhỏ nhưng tác dụng rõ), tác động đến cơ quan xác định.</p>` },
    { title: 'Các tuyến nội tiết chính', html: `<table class="tbl"><tr><th>Tuyến</th><th>Vai trò chính</th></tr><tr><td>Tuyến yên</td><td>tiết hormone tăng trưởng (GH), điều khiển nhiều tuyến khác</td></tr><tr><td>Tuyến giáp</td><td>tiết thyroxine (chứa iodine), điều hoà trao đổi chất</td></tr><tr><td>Tuyến trên thận</td><td>tiết adrenaline, cortisol…</td></tr><tr><td>Tuyến tuỵ</td><td>tiết insulin, glucagon điều hoà glucose máu</td></tr><tr><td>Tuyến sinh dục</td><td>tinh hoàn tiết testosterone; buồng trứng tiết estrogen, progesterone</td></tr></table>`,
      svg: S.humanBody({ organs: ['nao', 'tuyen-yen', 'tuyen-giap', 'tuyen-tren-than', 'than', 'tuy', 'tuyen-sinh-duc'], title: 'Vị trí một số tuyến nội tiết' }) },
    { title: 'Bệnh liên quan đến nội tiết', html: `<ul><li><b>Bướu cổ</b> (do thiếu iodine): tuyến giáp phì to. Phòng bệnh: dùng muối iodine, ăn hải sản.</li><li><b>Tiểu đường</b>: glucose máu cao do thiếu hoặc kém insulin. Phòng bệnh: ăn uống điều độ, hạn chế đồ ngọt, tập thể dục, giữ cân nặng hợp lí.</li><li>Rối loạn hormone tăng trưởng có thể gây bệnh người khổng lồ hoặc người lùn.</li></ul>
      <div class="box tip">Khuyến nghị: dùng muối iodine nhưng ăn nhạt – dưới 5 g muối mỗi ngày (khuyến nghị của WHO cho người trưởng thành).</div>` },
    { title: 'Nội tiết phối hợp với thần kinh', html: `<p>Khi gặp nguy hiểm, hệ thần kinh kích thích tuyến trên thận tiết adrenaline ⇒ tim đập nhanh, thở nhanh, glucose máu tăng ⇒ cơ thể sẵn sàng phản ứng.</p>`,
      svg: S.flow({ items: ['Gặp nguy hiểm', 'Hệ thần kinh kích thích', 'Tuyến trên thận tiết adrenaline', 'Tim đập nhanh, thở nhanh, glucose máu tăng'], size: 13, label: 'Phối hợp thần kinh – nội tiết khi gặp nguy hiểm' }) }
  ],
  summary: 'Tuyến nội tiết tiết hormone vào máu, tác động đến cơ quan đích. Các tuyến chính: tuyến yên, giáp, trên thận, tuỵ, sinh dục. Thiếu iodine gây bướu cổ; thiếu hoặc kém insulin gây tiểu đường. Dùng muối iodine, ăn nhạt, hạn chế đồ ngọt, tập thể dục.',
  examples: [
    { title: 'Phân biệt tuyến', problem: 'Tuyến nước bọt và tuyến giáp, tuyến nào là tuyến nội tiết?', solution: 'Tuyến giáp là tuyến nội tiết (hormone vào máu); tuyến nước bọt là tuyến ngoại tiết (có ống dẫn vào khoang miệng).' },
    { title: 'Lượng muối', problem: 'Một bạn ăn 7 g muối mỗi ngày. So với khuyến nghị dưới 5 g, bạn cần giảm ít nhất bao nhiêu gam?', solution: '7 − 5 = 2 (g).' },
    { title: 'Tuyến pha', problem: 'Vì sao tuyến tuỵ được gọi là tuyến pha?', solution: 'Vì tuỵ vừa tiết dịch tuỵ theo ống dẫn vào ruột non (ngoại tiết), vừa tiết insulin, glucagon vào máu (nội tiết).' }
  ],
  exercises: [
    { question: 'Kể tên năm tuyến nội tiết chính.', hints: ['Có tuyến ở não.', 'Có tuyến ở cổ, bụng.'], solution: 'Tuyến yên, tuyến giáp, tuyến trên thận, tuyến tuỵ, tuyến sinh dục.' },
    { question: 'Vì sao nên dùng muối iodine?', hints: ['Iodine là thành phần của hormone nào?', 'Thiếu iodine gây bệnh gì?'], solution: 'Iodine là thành phần của thyroxine; thiếu iodine tuyến giáp hoạt động kém, phì to gây bướu cổ.' },
    { question: 'Một gia đình 4 người, mỗi người dùng tối đa 5 g muối/ngày. Lượng muối tối đa cả gia đình dùng trong 30 ngày là bao nhiêu gam?', hints: ['Tính lượng mỗi ngày cả gia đình.', 'Nhân với 30.'], solution: '4 · 5 · 30 = 600 g.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hormone do tuyến nội tiết tiết ra được ngấm thẳng vào máu.', answer: true, explain: 'Tuyến nội tiết không có ống dẫn.' },
    { type: 'mcq', q: 'Thiếu iodine trong khẩu phần ăn có thể gây bệnh:', options: ['tiểu đường', 'bướu cổ', 'cận thị', 'sỏi thận'], answer: 1, explain: 'Tuyến giáp phì to.' },
    { type: 'mcq', q: 'Hormone insulin do tuyến nào tiết ra?', options: ['Tuyến giáp', 'Tuyến yên', 'Tuyến tuỵ', 'Tuyến trên thận'], answer: 2, explain: 'Tuỵ tiết insulin và glucagon.' },
    { type: 'short', q: 'Một bạn ăn 8 g muối mỗi ngày. Để đạt mức 5 g/ngày, bạn cần giảm bao nhiêu gam?', answer: '3', unit: 'g', calc: '8-5', explain: '8 − 5 = 3 g.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tuyến nước bọt là tuyến nội tiết.', answer: false, explain: 'Đó là tuyến ngoại tiết.' },
    { type: 'short', q: 'Mỗi người dùng tối đa 5 g muối/ngày. Trong một tuần (7 ngày), lượng muối tối đa là bao nhiêu gam?', answer: '35', unit: 'g', calc: '5*7', explain: '5 · 7 = 35 g.' },
    { type: 'mcq', q: 'Khi gặp nguy hiểm, tuyến trên thận tiết:', options: ['adrenaline', 'insulin', 'thyroxine', 'estrogen'], answer: 0, explain: 'Adrenaline giúp cơ thể sẵn sàng phản ứng.' },
    { type: 'short', q: 'Một gia đình 3 người, mỗi người 5 g muối/ngày. Lượng muối tối đa cả nhà dùng trong 30 ngày là bao nhiêu gam?', answer: '450', unit: 'g', calc: '3*5*30', explain: '3 · 5 · 30 = 450 g.' }
  ]
});
})();
