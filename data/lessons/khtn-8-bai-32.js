/* KHTN 8 – Bài 32. Dinh dưỡng và tiêu hoá ở người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-32', {
  objectives: [
    'Nêu được khái niệm dinh dưỡng, chất dinh dưỡng và vai trò của chúng.',
    'Kể tên và xác định được vị trí các cơ quan của hệ tiêu hoá; trình bày được sự tiêu hoá ở khoang miệng, dạ dày, ruột non, ruột già.',
    'Nêu được nguyên tắc lập khẩu phần ăn và tính được năng lượng của khẩu phần đơn giản.',
    'Nêu được một số bệnh về tiêu hoá, vấn đề an toàn thực phẩm và cách phòng tránh.'
  ],
  intro: 'Một bát cơm, một đĩa rau, một quả trứng… sau vài giờ đã trở thành năng lượng và nguyên liệu xây dựng cơ thể em. Hành trình của thức ăn trong cơ thể diễn ra như thế nào?',
  steps: [
    { title: 'Dinh dưỡng và chất dinh dưỡng', html: `<p><b>Dinh dưỡng</b> là quá trình thu nhận, biến đổi và sử dụng chất dinh dưỡng để duy trì sự sống. <b>Chất dinh dưỡng</b> gồm: carbohydrate (tinh bột, đường), lipid (chất béo), protein (chất đạm), vitamin, chất khoáng; ngoài ra cơ thể cần nước và chất xơ.</p>
      <p>Năng lượng (giá trị tham khảo): 1 g carbohydrate ≈ 4 kcal; 1 g protein ≈ 4 kcal; 1 g lipid ≈ 9 kcal (1 kcal ≈ 4,18 kJ).</p>` },
    { title: 'Các cơ quan tiêu hoá', html: `<ul><li><b>Ống tiêu hoá</b>: miệng → hầu → thực quản → dạ dày → ruột non → ruột già → hậu môn.</li><li><b>Tuyến tiêu hoá</b>: tuyến nước bọt, tuyến vị (ở dạ dày), gan (tiết mật), tuỵ, tuyến ruột.</li></ul>`,
      svg: S.humanBody({ organs: ['thuc-quan', 'gan', 'da-day', 'tuy', 'ruot-non', 'ruot-gia'], title: 'Một số cơ quan của hệ tiêu hoá' }) },
    { title: 'Quá trình tiêu hoá', html: `<ul><li><b>Khoang miệng</b>: răng nghiền nhỏ thức ăn, lưỡi đảo trộn; enzyme amylase trong nước bọt biến đổi một phần tinh bột thành đường maltose.</li><li><b>Dạ dày</b>: co bóp nhào trộn; enzyme pepsin (trong dịch vị) biến đổi một phần protein thành chuỗi ngắn.</li><li><b>Ruột non</b>: nhờ dịch tuỵ, dịch ruột và mật, thức ăn được biến đổi hoàn toàn thành chất đơn giản (glucose, amino acid, glycerol và acid béo…) và được <b>hấp thụ</b> vào máu, bạch huyết. Ruột non là nơi tiêu hoá và hấp thụ chủ yếu.</li><li><b>Ruột già</b>: hấp thụ nước, muối khoáng; chất bã thành phân thải ra ngoài qua hậu môn.</li></ul>`,
      svg: S.flow({ items: ['Khoang miệng: nghiền, amylase', 'Dạ dày: nhào trộn, pepsin', 'Ruột non: tiêu hoá hoàn toàn, hấp thụ', 'Ruột già: hấp thụ nước, tạo phân'], size: 13, label: 'Đường đi và biến đổi của thức ăn' }) },
    { title: 'Khẩu phần ăn hợp lí', html: `<p><b>Khẩu phần</b> là lượng thức ăn cung cấp cho cơ thể trong một ngày. Nguyên tắc: đủ năng lượng, đủ chất, cân đối các nhóm chất, phù hợp lứa tuổi, giới tính, hoạt động.</p>
      <p>Ví dụ: bữa ăn có 100 g carbohydrate, 20 g protein, 15 g lipid cung cấp: 100 · 4 + 20 · 4 + 15 · 9 = 615 kcal.</p>`,
      svg: S.pieChart({ title: 'Tỉ lệ năng lượng khuyến nghị trong khẩu phần (tham khảo)', parts: [{ label: 'Carbohydrate', v: 60, color: '#f59e0b' }, { label: 'Lipid', v: 25, color: '#ef4444' }, { label: 'Protein', v: 15, color: '#3b82f6' }] }) },
    { title: 'Bệnh tiêu hoá và an toàn thực phẩm', html: `<ul><li>Bệnh thường gặp: sâu răng, viêm loét dạ dày, tiêu chảy, táo bón, ngộ độc thực phẩm, giun sán.</li><li>Phòng tránh: ăn chín uống sôi, rửa tay trước khi ăn, chải răng đúng cách, ăn đúng giờ, nhai kĩ; chọn thực phẩm tươi, rõ nguồn gốc, bảo quản đúng cách, không dùng thực phẩm quá hạn.</li></ul>` }
  ],
  summary: 'Chất dinh dưỡng: carbohydrate, lipid, protein, vitamin, chất khoáng (cùng nước, chất xơ). Ống tiêu hoá: miệng – hầu – thực quản – dạ dày – ruột non – ruột già – hậu môn; tuyến tiêu hoá: nước bọt, vị, gan, tuỵ, ruột. Ruột non là nơi tiêu hoá, hấp thụ chủ yếu. Khẩu phần cần đủ, cân đối; giữ vệ sinh, an toàn thực phẩm.',
  examples: [
    { title: 'Tính năng lượng', problem: 'Một cốc sữa có 12 g carbohydrate, 8 g protein, 8 g lipid. Tính năng lượng cốc sữa cung cấp (theo giá trị tham khảo).', solution: '12 · 4 + 8 · 4 + 8 · 9 = 48 + 32 + 72 = 152 (kcal).' },
    { title: 'Vị trí tiêu hoá', problem: 'Vì sao nói ruột non là nơi tiêu hoá và hấp thụ chủ yếu?', solution: 'Ở ruột non có đủ các loại enzyme (dịch tuỵ, dịch ruột) cùng mật để biến đổi hoàn toàn thức ăn; niêm mạc ruột non có nhiều nếp gấp, lông ruột làm diện tích hấp thụ rất lớn.' },
    { title: 'Nhai kĩ', problem: 'Vì sao nhai kĩ cơm lâu trong miệng thấy có vị ngọt?', solution: 'Enzyme amylase trong nước bọt biến đổi một phần tinh bột thành đường maltose có vị ngọt.' }
  ],
  exercises: [
    { question: 'Sắp xếp các cơ quan theo đường đi của thức ăn: dạ dày, thực quản, ruột già, miệng, ruột non, hầu.', hints: ['Bắt đầu từ miệng.', 'Dạ dày đứng trước ruột non.'], solution: 'Miệng → hầu → thực quản → dạ dày → ruột non → ruột già.' },
    { question: 'Bữa sáng gồm 60 g carbohydrate, 15 g protein, 10 g lipid. Tính năng lượng (kcal).', hints: ['Carbohydrate và protein: 4 kcal/g.', 'Lipid: 9 kcal/g.'], solution: '60 · 4 + 15 · 4 + 10 · 9 = 240 + 60 + 90 = 390 kcal.' },
    { question: 'Nêu ba việc làm để phòng ngộ độc thực phẩm.', hints: ['Liên quan đến chế biến.', 'Liên quan đến chọn mua, bảo quản.'], solution: 'Ví dụ: ăn chín uống sôi; rửa tay, rửa sạch dụng cụ; không ăn thực phẩm ôi thiu, quá hạn; bảo quản thức ăn trong tủ lạnh, đậy kín.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ruột non là nơi tiêu hoá và hấp thụ chất dinh dưỡng chủ yếu.', answer: true, explain: 'Có đủ enzyme và diện tích hấp thụ lớn.' },
    { type: 'mcq', q: 'Enzyme amylase trong nước bọt biến đổi:', options: ['protein thành amino acid', 'một phần tinh bột thành đường maltose', 'lipid thành acid béo', 'nước thành hơi'], answer: 1, explain: 'Amylase tác dụng lên tinh bột.' },
    { type: 'short', q: '1 g lipid cung cấp khoảng 9 kcal. 20 g lipid cung cấp khoảng bao nhiêu kcal?', answer: '180', unit: 'kcal', calc: '20*9', explain: '20 · 9 = 180 kcal.' },
    { type: 'mcq', q: 'Cơ quan nào KHÔNG thuộc ống tiêu hoá?', options: ['Dạ dày', 'Thực quản', 'Gan', 'Ruột già'], answer: 2, explain: 'Gan là tuyến tiêu hoá.' },
    { type: 'short', q: 'Bữa ăn có 80 g carbohydrate, 25 g protein, 10 g lipid. Năng lượng khoảng bao nhiêu kcal? (4; 4; 9 kcal/g)', answer: '510', unit: 'kcal', calc: '80*4+25*4+10*9', explain: '320 + 100 + 90 = 510 kcal.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ruột già là nơi hấp thụ chủ yếu các chất dinh dưỡng.', answer: false, explain: 'Ruột già chủ yếu hấp thụ nước, muối khoáng.' },
    { type: 'mcq', q: 'Ở dạ dày, enzyme pepsin biến đổi một phần:', options: ['tinh bột', 'protein', 'lipid', 'vitamin'], answer: 1, explain: 'Pepsin tác dụng lên protein.' },
    { type: 'short', q: 'Nhu cầu năng lượng một ngày là 2 200 kcal, carbohydrate nên cung cấp 60 %. Năng lượng từ carbohydrate là bao nhiêu kcal?', answer: '1320', answerText: '1 320', unit: 'kcal', calc: '2200*60/100', explain: '2 200 · 60 : 100 = 1 320 kcal.' }
  ]
});
})();
