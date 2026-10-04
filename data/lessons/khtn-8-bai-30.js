/* KHTN 8 – Bài 30. Khái quát về cơ thể người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-30', {
  objectives: [
    'Nêu được tên và vai trò chính của các cơ quan, hệ cơ quan trong cơ thể người.',
    'Xác định được vị trí một số cơ quan trong khoang ngực, khoang bụng.',
    'Trình bày được sự phối hợp hoạt động của các hệ cơ quan trong cơ thể.'
  ],
  intro: 'Khi em chạy bộ, tim đập nhanh hơn, em thở gấp hơn, mồ hôi toát ra… Có vẻ như cả cơ thể cùng “làm việc”. Cơ thể người được tổ chức như thế nào để phối hợp nhịp nhàng như vậy?',
  steps: [
    { title: 'Cấu tạo chung của cơ thể', html: `<p>Cơ thể người gồm ba phần: <b>đầu, thân và tay chân</b> (các chi). Phần thân có hai khoang được ngăn cách bởi <b>cơ hoành</b>:</p>
      <ul><li><b>Khoang ngực</b>: chứa tim, phổi.</li><li><b>Khoang bụng</b>: chứa dạ dày, ruột, gan, tuỵ, thận, bóng đái và cơ quan sinh sản.</li></ul>
      <p>Cơ thể được cấu tạo từ tế bào; các tế bào hợp thành mô, các mô hợp thành cơ quan, các cơ quan phối hợp thành hệ cơ quan.</p>`,
      svg: S.humanBody(), caption: 'Vị trí một số cơ quan trong khoang ngực và khoang bụng (sơ đồ đơn giản).' },
    { title: 'Các hệ cơ quan', html: `<table class="tbl"><tr><th>Hệ cơ quan</th><th>Chức năng chính</th></tr><tr><td>Vận động</td><td>nâng đỡ, bảo vệ, giúp cơ thể di chuyển</td></tr><tr><td>Tiêu hoá</td><td>biến đổi thức ăn, hấp thụ chất dinh dưỡng</td></tr><tr><td>Tuần hoàn</td><td>vận chuyển chất dinh dưỡng, O<sub>2</sub>, chất thải</td></tr><tr><td>Hô hấp</td><td>trao đổi khí O<sub>2</sub>, CO<sub>2</sub></td></tr><tr><td>Bài tiết</td><td>lọc máu, thải chất thải ra ngoài</td></tr><tr><td>Thần kinh, giác quan</td><td>điều khiển, điều hoà, cảm nhận</td></tr><tr><td>Nội tiết</td><td>tiết hormone điều hoà cơ thể</td></tr><tr><td>Sinh sản</td><td>duy trì nòi giống</td></tr></table>
      <p>Ngoài ra còn có da (bảo vệ, điều hoà thân nhiệt) và hệ miễn dịch (chống lại mầm bệnh).</p>` },
    { title: 'Sự phối hợp giữa các hệ cơ quan', html: `<p>Các hệ cơ quan hoạt động <b>phối hợp</b> với nhau dưới sự điều khiển của <b>hệ thần kinh</b> và <b>hệ nội tiết</b>, giúp cơ thể là một khối thống nhất.</p>
      <p>Ví dụ: khi chạy, hệ vận động hoạt động mạnh ⇒ tim đập nhanh (tuần hoàn), thở nhanh (hô hấp) để cung cấp nhiều O<sub>2</sub>, chất dinh dưỡng cho cơ; da tiết mồ hôi (bài tiết, điều hoà thân nhiệt).</p>`,
      svg: S.mindmap({ center: 'Cơ thể khi chạy', branches: [{ title: 'Vận động', items: ['cơ co mạnh'] }, { title: 'Tuần hoàn', items: ['tim đập nhanh'] }, { title: 'Hô hấp', items: ['thở nhanh, sâu'] }, { title: 'Da, bài tiết', items: ['tiết mồ hôi'] }, { title: 'Thần kinh', items: ['điều khiển, phối hợp'] }, { title: 'Nội tiết', items: ['hormone hỗ trợ'] }], size: 14, label: 'Các hệ cơ quan phối hợp khi cơ thể vận động' }) },
    { title: 'Nước trong cơ thể', html: `<p>Nước chiếm khoảng 60 – 70 % khối lượng cơ thể người trưởng thành, tham gia vận chuyển các chất, điều hoà thân nhiệt. Cần uống đủ nước mỗi ngày.</p>
      <p>Ví dụ: người nặng 50 kg, nếu nước chiếm 60 % thì khối lượng nước là 50 · 60 : 100 = 30 kg.</p>` }
  ],
  summary: 'Cơ thể người gồm đầu, thân, chi; thân có khoang ngực và khoang bụng ngăn bởi cơ hoành. Các hệ cơ quan: vận động, tiêu hoá, tuần hoàn, hô hấp, bài tiết, thần kinh – giác quan, nội tiết, sinh sản (cùng da, hệ miễn dịch). Các hệ phối hợp dưới sự điều khiển của thần kinh và nội tiết.',
  examples: [
    { title: 'Vị trí cơ quan', problem: 'Kể tên các cơ quan nằm trong khoang ngực.', solution: 'Tim, phổi (cùng khí quản, thực quản đi qua).' },
    { title: 'Phối hợp', problem: 'Khi ăn, những hệ cơ quan nào tham gia?', solution: 'Hệ tiêu hoá (biến đổi, hấp thụ), hệ tuần hoàn (vận chuyển chất dinh dưỡng), hệ vận động (nhai, nuốt), hệ thần kinh (điều khiển), hệ nội tiết (điều hoà đường huyết).' },
    { title: 'Tính khối lượng nước', problem: 'Một bạn nặng 40 kg, nước chiếm 65 % khối lượng cơ thể. Tính khối lượng nước.', solution: '40 · 65 : 100 = 26 (kg).' }
  ],
  exercises: [
    { question: 'Cơ hoành ngăn cách những khoang nào? Mỗi khoang chứa những cơ quan chính nào?', hints: ['Cơ thể có hai khoang chính ở phần thân.', 'Khoang trên chứa tim, phổi.'], solution: 'Cơ hoành ngăn khoang ngực (tim, phổi) và khoang bụng (dạ dày, ruột, gan, tuỵ, thận, bóng đái, cơ quan sinh sản).' },
    { question: 'Nêu chức năng của hệ tuần hoàn và hệ hô hấp. Hai hệ này liên quan với nhau thế nào?', hints: ['Hô hấp lấy O<sub>2</sub>, thải CO<sub>2</sub>.', 'Tuần hoàn vận chuyển khí.'], solution: 'Hệ hô hấp trao đổi khí với môi trường; hệ tuần hoàn vận chuyển O<sub>2</sub> từ phổi đến tế bào và CO<sub>2</sub> từ tế bào về phổi.' },
    { question: 'Vì sao nói cơ thể là một khối thống nhất?', hints: ['Các hệ có hoạt động riêng rẽ không?', 'Ai điều khiển sự phối hợp?'], solution: 'Vì các cơ quan, hệ cơ quan luôn phối hợp hoạt động với nhau dưới sự điều khiển của hệ thần kinh và hệ nội tiết; một hệ thay đổi thì các hệ khác cũng thay đổi theo.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cơ hoành ngăn cách khoang ngực và khoang bụng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Cơ quan nào nằm trong khoang ngực?', options: ['Dạ dày', 'Gan', 'Phổi', 'Thận'], answer: 2, explain: 'Khoang ngực chứa tim, phổi.' },
    { type: 'mcq', q: 'Hệ cơ quan có chức năng vận chuyển chất dinh dưỡng, O<sub>2</sub> và chất thải là:', options: ['hệ tiêu hoá', 'hệ tuần hoàn', 'hệ bài tiết', 'hệ vận động'], answer: 1, explain: 'Hệ tuần hoàn gồm tim và mạch máu.' },
    { type: 'short', q: 'Một người nặng 60 kg, nước chiếm 60 % khối lượng cơ thể. Khối lượng nước là bao nhiêu kg?', answer: '36', unit: 'kg', calc: '60*60/100', explain: '60 · 60 : 100 = 36 kg.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các hệ cơ quan trong cơ thể hoạt động độc lập, không liên quan đến nhau.', answer: false, explain: 'Chúng luôn phối hợp với nhau.' },
    { type: 'short', q: 'Tim đập trung bình 75 lần/phút. Trong 1 giờ tim đập bao nhiêu lần?', answer: '4500', answerText: '4 500', unit: 'lần', calc: '75*60', explain: '75 · 60 = 4 500 lần.' },
    { type: 'mcq', q: 'Hai hệ điều khiển, điều hoà hoạt động của các hệ cơ quan khác là:', options: ['tiêu hoá và bài tiết', 'thần kinh và nội tiết', 'tuần hoàn và hô hấp', 'vận động và sinh sản'], answer: 1, explain: 'Hệ thần kinh và hệ nội tiết.' },
    { type: 'short', q: 'Một bạn nặng 45 kg, nước chiếm 64 % khối lượng. Khối lượng nước là bao nhiêu kg?', answer: '28,8', unit: 'kg', calc: '45*64/100', explain: '45 · 64 : 100 = 28,8 kg.' }
  ]
});
})();
