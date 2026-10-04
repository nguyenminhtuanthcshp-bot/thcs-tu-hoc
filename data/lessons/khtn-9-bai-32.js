/* KHTN 9 – Bài 32. Polymer. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-32', {
  objectives: [
    'Nêu được khái niệm polymer, monomer, mắt xích; phân loại polymer theo nguồn gốc.',
    'Trình bày được tính chất chung của polymer và ứng dụng của chất dẻo, tơ, cao su.',
    'Nêu được tác hại của rác thải nhựa và các biện pháp sử dụng polymer an toàn, bảo vệ môi trường.'
  ],
  intro: 'Túi nilon, chai nhựa, áo sợi tổng hợp, lốp xe… đều làm từ <b>polymer</b>. Polymer giúp cuộc sống tiện lợi, nhưng rác thải nhựa đang là một vấn đề môi trường toàn cầu.',
  steps: [
    { title: 'Khái niệm polymer', html: `<p><b>Polymer</b> là những chất có phân tử khối rất lớn do nhiều đơn vị nhỏ (gọi là <b>mắt xích</b>) liên kết với nhau. Chất ban đầu tạo nên mắt xích gọi là <b>monomer</b>.</p>
      <p>Ví dụ: polyethylene (–CH<sub>2</sub>–CH<sub>2</sub>–)<sub>n</sub> tạo từ monomer ethylene CH<sub>2</sub>=CH<sub>2</sub>; n là <b>hệ số polymer hoá</b>.</p>`,
      svg: S.polymerChain({ kind: 'pe' }), caption: 'Polyethylene gồm rất nhiều mắt xích –CH₂–CH₂–.' },
    { title: 'Phân loại và tính chất chung', html: `<ul><li><b>Polymer thiên nhiên</b>: tinh bột, cellulose, protein, cao su thiên nhiên.</li><li><b>Polymer tổng hợp</b>: PE, PVC, PP, nylon, cao su buna.</li></ul>
      <p>Tính chất chung: là chất rắn, không bay hơi; phần lớn không tan trong nước; nhiều polymer bền, nhẹ, cách điện, cách nhiệt.</p>`,
      svg: S.mindmap({ center: 'Vật liệu polymer', branches: [{ title: 'Chất dẻo', items: ['PE: túi, màng bọc', 'PVC: ống nước, vỏ dây điện', 'PP: hộp đựng thực phẩm'] }, { title: 'Tơ', items: ['Tơ tằm, bông (thiên nhiên)', 'Nylon, polyester (tổng hợp)'] }, { title: 'Cao su', items: ['Cao su thiên nhiên', 'Cao su buna (tổng hợp)'] }], size: 13, label: 'Các loại vật liệu polymer thường gặp' }), caption: 'Ba nhóm vật liệu polymer: chất dẻo, tơ, cao su.' },
    { title: 'Chất dẻo, tơ, cao su', html: `<table><tr><th>Vật liệu</th><th>Đặc điểm</th></tr><tr><td>Chất dẻo</td><td>bị biến dạng khi nóng, giữ hình dạng khi nguội; dễ tạo hình</td></tr><tr><td>Tơ</td><td>polymer hình sợi dài, mảnh, bền; dệt vải</td></tr><tr><td>Cao su</td><td>có tính đàn hồi; làm lốp xe, găng tay, đệm</td></tr></table>` },
    { title: 'Rác thải nhựa và cách sử dụng an toàn', html: `<p>Nhiều loại nhựa tồn tại hàng chục đến hàng trăm năm trong môi trường, vỡ thành vi nhựa đi vào nước, đất, sinh vật.</p>
      <ul><li>Giảm dùng đồ nhựa dùng một lần; mang túi vải, bình nước cá nhân.</li><li>Phân loại rác, tái chế.</li><li>Không đựng thức ăn quá nóng hoặc dầu mỡ nóng trong hộp nhựa không chịu nhiệt; không đốt rác nhựa (sinh khí độc).</li></ul>`,
      svg: S.bar({ title: 'Thời gian phân huỷ ước tính (năm, tham khảo)', cats: ['Túi nhựa', 'Cốc nhựa', 'Chai nhựa'], series: [{ name: 'năm', values: [20, 50, 450], color: '#0891b2' }], yMax: 500, yStep: 100, width: 520, height: 270 }), caption: 'Các ước tính thường được trích dẫn (tham khảo); thực tế phụ thuộc loại nhựa và điều kiện môi trường.' }
  ],
  summary: 'Polymer là chất có phân tử khối rất lớn gồm nhiều mắt xích; monomer là chất tạo nên mắt xích. Polymer thiên nhiên (tinh bột, cellulose, protein) và tổng hợp (PE, PVC, nylon). Vật liệu polymer: chất dẻo, tơ, cao su. Cần giảm, tái chế rác nhựa và sử dụng đồ nhựa an toàn.',
  examples: [
    { title: 'Hệ số polymer hoá', problem: 'Một mẫu PE có phân tử khối trung bình 28 000. Tính hệ số polymer hoá n.', solution: 'Mắt xích –CH<sub>2</sub>–CH<sub>2</sub>– có M = 28 ⇒ n = 28 000 / 28 = 1 000.' },
    { title: 'Monomer', problem: 'Viết công thức monomer tạo nên PVC (–CH<sub>2</sub>–CHCl–)<sub>n</sub>.', solution: 'Vinyl chloride CH<sub>2</sub>=CHCl.' },
    { title: 'Phân loại', problem: 'Xếp các chất sau vào polymer thiên nhiên hay tổng hợp: tơ tằm, nylon, cellulose, PVC.', solution: 'Thiên nhiên: tơ tằm, cellulose. Tổng hợp: nylon, PVC.' }
  ],
  exercises: [
    { question: 'Một mẫu PVC có phân tử khối 62 500. Tính hệ số polymer hoá (mắt xích C<sub>2</sub>H<sub>3</sub>Cl, M = 62,5).', hints: ['n = M<sub>polymer</sub> / M<sub>mắt xích</sub>.', '62 500 / 62,5.'], solution: 'n = 1 000.' },
    { question: 'Nêu ba việc làm cụ thể của em để giảm rác thải nhựa.', hints: ['Thay đồ dùng một lần.', 'Phân loại, tái chế.'], solution: 'Ví dụ: mang bình nước riêng; dùng túi vải khi đi chợ; không dùng ống hút nhựa; phân loại chai nhựa để tái chế.' },
    { question: 'Vì sao không nên đốt rác thải nhựa?', hints: ['Khi cháy, PVC sinh ra khí gì?', 'Ảnh hưởng tới sức khoẻ, môi trường.'], solution: 'Đốt nhựa sinh nhiều khí độc (HCl, dioxin, CO…) và bụi, gây ô nhiễm không khí, hại sức khoẻ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tinh bột và cellulose là polymer thiên nhiên.', answer: true, explain: 'Chúng có sẵn trong tự nhiên.' },
    { type: 'mcq', q: 'Monomer dùng để tổng hợp polyethylene là:', options: ['methane', 'ethylene', 'vinyl chloride', 'glucose'], answer: 1, explain: 'n CH<sub>2</sub>=CH<sub>2</sub> → PE.' },
    { type: 'short', q: 'PE có phân tử khối 42 000. Hệ số polymer hoá n bằng bao nhiêu?', answer: '1500', answerText: '1 500', calc: '42000/28', explain: 'n = 42 000 / 28 = 1 500.' },
    { type: 'mcq', q: 'Vật liệu có tính đàn hồi là:', options: ['chất dẻo', 'tơ', 'cao su', 'thuỷ tinh'], answer: 2, explain: 'Cao su có tính đàn hồi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nylon là polymer thiên nhiên.', answer: false, explain: 'Nylon là tơ tổng hợp.' },
    { type: 'short', q: 'Khối lượng mắt xích –CH<sub>2</sub>–CHCl– của PVC là bao nhiêu (amu)?', answer: '62,5', unit: 'amu', calc: '2*12+3+35.5', explain: '24 + 3 + 35,5 = 62,5.' },
    { type: 'mcq', q: 'Việc làm nào góp phần giảm rác thải nhựa?', options: ['Dùng túi nilon một lần rồi vứt', 'Mang túi vải khi đi chợ', 'Đốt rác nhựa', 'Vứt chai nhựa xuống sông'], answer: 1, explain: 'Túi vải dùng được nhiều lần.' },
    { type: 'mcq', q: 'Ống dẫn nước, vỏ dây điện thường làm bằng:', options: ['PVC', 'tinh bột', 'tơ tằm', 'cao su thiên nhiên'], answer: 0, explain: 'PVC bền, cách điện.' }
  ]
});
})();
