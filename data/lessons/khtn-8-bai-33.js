/* KHTN 8 – Bài 33. Máu và hệ tuần hoàn của cơ thể người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-33', {
  objectives: [
    'Nêu được thành phần và chức năng của máu (huyết tương, hồng cầu, bạch cầu, tiểu cầu).',
    'Nêu được khái niệm miễn dịch, kháng nguyên, kháng thể, vaccine; nêu được nguyên tắc truyền máu theo nhóm máu ABO.',
    'Mô tả được cấu tạo của tim, mạch máu và đường đi của máu trong hai vòng tuần hoàn.',
    'Nêu được một số bệnh tim mạch và biện pháp bảo vệ hệ tuần hoàn.'
  ],
  intro: 'Mỗi phút, trái tim nhỏ bằng nắm tay đẩy khoảng 5 lít máu đi khắp cơ thể. Máu gồm những gì và được vận chuyển theo con đường nào?',
  steps: [
    { title: 'Thành phần và chức năng của máu', html: `<p>Máu gồm <b>huyết tương</b> (khoảng 55 %) và <b>các tế bào máu</b> (khoảng 45 %).</p>
      <ul><li>Huyết tương: chủ yếu là nước, chứa chất dinh dưỡng, hormone, kháng thể, chất thải… ⇒ vận chuyển các chất.</li><li><b>Hồng cầu</b>: chứa hemoglobin, vận chuyển O<sub>2</sub> và CO<sub>2</sub>.</li><li><b>Bạch cầu</b>: bảo vệ cơ thể (thực bào, tạo kháng thể…).</li><li><b>Tiểu cầu</b>: tham gia quá trình đông máu.</li></ul>`,
      svg: S.bloodCells() },
    { title: 'Miễn dịch và nhóm máu', html: `<p><b>Kháng nguyên</b> là chất lạ (thường có trên bề mặt vi khuẩn, virus) kích thích cơ thể tạo <b>kháng thể</b>. <b>Miễn dịch</b> là khả năng cơ thể không mắc một bệnh nào đó. <b>Vaccine</b> giúp cơ thể tạo miễn dịch chủ động.</p>
      <p>Hệ nhóm máu ABO gồm 4 nhóm: A, B, AB, O. Nguyên tắc truyền máu: cần xét nghiệm để truyền máu phù hợp, tránh kết dính hồng cầu. Nhóm O có thể cho các nhóm khác (lượng ít, truyền chậm); nhóm AB có thể nhận từ các nhóm khác; tốt nhất là truyền cùng nhóm máu.</p>
      <table class="tbl"><tr><th>Nhóm máu</th><th>Có thể cho</th><th>Có thể nhận</th></tr><tr><td>O</td><td>O, A, B, AB</td><td>O</td></tr><tr><td>A</td><td>A, AB</td><td>A, O</td></tr><tr><td>B</td><td>B, AB</td><td>B, O</td></tr><tr><td>AB</td><td>AB</td><td>AB, A, B, O</td></tr></table>` },
    { title: 'Tim và mạch máu', html: `<p><b>Tim</b> có 4 ngăn: tâm nhĩ phải, tâm thất phải, tâm nhĩ trái, tâm thất trái; thành tâm thất trái dày nhất. Van tim giúp máu chảy theo một chiều. Tim co dãn theo chu kì; nhịp tim trung bình ở người trưởng thành khoảng 75 lần/phút.</p>
      <ul><li><b>Động mạch</b>: đưa máu từ tim đi, thành dày, đàn hồi.</li><li><b>Tĩnh mạch</b>: đưa máu về tim, có van (ở tĩnh mạch chân tay).</li><li><b>Mao mạch</b>: rất nhỏ, thành mỏng, là nơi trao đổi chất với tế bào.</li></ul>`,
      svg: S.heart() },
    { title: 'Hai vòng tuần hoàn', html: `<ul><li><b>Vòng tuần hoàn nhỏ</b>: tâm thất phải → động mạch phổi → mao mạch phổi (máu nhận O<sub>2</sub>, thải CO<sub>2</sub>) → tĩnh mạch phổi → tâm nhĩ trái.</li><li><b>Vòng tuần hoàn lớn</b>: tâm thất trái → động mạch chủ → mao mạch các cơ quan (trao đổi chất) → tĩnh mạch chủ → tâm nhĩ phải.</li></ul>`,
      svg: S.circulation(), caption: 'Sơ đồ hai vòng tuần hoàn: máu giàu O₂ (đỏ), máu nghèo O₂ (xanh).' },
    { title: 'Bảo vệ hệ tuần hoàn', html: `<ul><li>Bệnh thường gặp: cao huyết áp, xơ vữa động mạch, thiếu máu, đột quỵ.</li><li>Biện pháp: ăn nhạt, hạn chế mỡ động vật, không hút thuốc lá, uống rượu bia; tập thể dục đều đặn; khám sức khoẻ định kì.</li><li>Sơ cứu chảy máu: vết thương nhỏ – rửa sạch, băng ép; chảy máu động mạch – ép chặt phía trên vết thương, buộc garô đúng cách và đưa ngay đến cơ sở y tế.</li></ul>` }
  ],
  summary: 'Máu: huyết tương (~55 %) + tế bào máu (~45 %): hồng cầu vận chuyển khí, bạch cầu bảo vệ, tiểu cầu đông máu. Vaccine tạo miễn dịch. Nhóm máu ABO: truyền máu phù hợp, tốt nhất cùng nhóm. Tim 4 ngăn; động mạch, tĩnh mạch, mao mạch; vòng tuần hoàn nhỏ (qua phổi) và lớn (qua các cơ quan).',
  examples: [
    { title: 'Tính thể tích huyết tương', problem: 'Một người có khoảng 5 L máu, huyết tương chiếm 55 %. Tính thể tích huyết tương.', solution: '5 · 55 : 100 = 2,75 (L).' },
    { title: 'Truyền máu', problem: 'Người có nhóm máu B cần truyền máu. Có thể nhận máu từ những nhóm nào?', solution: 'Nhóm B (tốt nhất) hoặc nhóm O (lượng ít, truyền chậm).' },
    { title: 'Chu kì tim', problem: 'Nhịp tim 75 lần/phút. Mỗi chu kì tim kéo dài bao lâu?', solution: '60 : 75 = 0,8 (s).' }
  ],
  exercises: [
    { question: 'Vì sao thành tâm thất trái dày hơn các ngăn tim khác?', hints: ['Tâm thất trái đẩy máu vào vòng tuần hoàn nào?', 'Vòng tuần hoàn lớn đi khắp cơ thể.'], solution: 'Tâm thất trái đẩy máu vào động mạch chủ đi khắp cơ thể (vòng tuần hoàn lớn), cần lực co mạnh nhất nên thành dày nhất.' },
    { question: 'Tiêm vaccine giúp cơ thể phòng bệnh như thế nào?', hints: ['Vaccine chứa kháng nguyên đã làm yếu hoặc bất hoạt.', 'Cơ thể tạo ra gì?'], solution: 'Vaccine kích thích cơ thể tạo kháng thể và trí nhớ miễn dịch; khi mầm bệnh thật xâm nhập, cơ thể nhanh chóng tiêu diệt chúng.' },
    { question: 'Mỗi lần co, tim đẩy khoảng 70 mL máu. Với nhịp tim 75 lần/phút, mỗi phút tim đẩy bao nhiêu lít máu?', hints: ['Nhân thể tích mỗi lần co với số lần co.', 'Đổi mL sang L.'], solution: '70 · 75 = 5 250 mL = 5,25 L.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hồng cầu có chức năng vận chuyển O<sub>2</sub> và CO<sub>2</sub>.', answer: true, explain: 'Nhờ hemoglobin.' },
    { type: 'mcq', q: 'Tế bào máu tham gia quá trình đông máu là:', options: ['hồng cầu', 'bạch cầu', 'tiểu cầu', 'tế bào thần kinh'], answer: 2, explain: 'Tiểu cầu tham gia đông máu.' },
    { type: 'short', q: 'Cơ thể có khoảng 5 L máu, tế bào máu chiếm 45 %. Thể tích các tế bào máu là bao nhiêu lít?', answer: '2,25', unit: 'L', calc: '5*45/100', explain: '5 · 45 : 100 = 2,25 L.' },
    { type: 'mcq', q: 'Vòng tuần hoàn nhỏ bắt đầu từ:', options: ['tâm thất trái', 'tâm thất phải', 'tâm nhĩ trái', 'tâm nhĩ phải'], answer: 1, explain: 'Tâm thất phải → động mạch phổi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người nhóm máu O có thể nhận máu của mọi nhóm máu.', answer: false, explain: 'Nhóm O chỉ nhận được nhóm O.' },
    { type: 'short', q: 'Nhịp tim 80 lần/phút. Mỗi chu kì tim kéo dài bao nhiêu giây?', answer: '0,75', unit: 's', calc: '60/80', explain: '60 : 80 = 0,75 s.' },
    { type: 'mcq', q: 'Mạch máu là nơi trao đổi chất giữa máu và tế bào là:', options: ['động mạch chủ', 'tĩnh mạch chủ', 'mao mạch', 'động mạch phổi'], answer: 2, explain: 'Mao mạch thành mỏng, máu chảy chậm.' },
    { type: 'short', q: 'Mỗi lần co tim đẩy 70 mL máu, nhịp tim 72 lần/phút. Mỗi phút tim đẩy bao nhiêu mL máu?', answer: '5040', answerText: '5 040', unit: 'mL', calc: '70*72', explain: '70 · 72 = 5 040 mL.' }
  ]
});
})();
