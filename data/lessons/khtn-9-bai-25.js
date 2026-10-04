/* KHTN 9 – Bài 25. Nguồn nhiên liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-25', {
  objectives: [
    'Nêu được khái niệm, thành phần, trạng thái tự nhiên của dầu mỏ, khí thiên nhiên, khí mỏ dầu.',
    'Trình bày được phương pháp khai thác và chế biến dầu mỏ (chưng cất phân đoạn); nêu được các sản phẩm chính.',
    'Nêu được cách sử dụng nhiên liệu an toàn, hiệu quả và giảm ô nhiễm môi trường.'
  ],
  intro: 'Mỏ Bạch Hổ ngoài khơi Vũng Tàu là một trong những mỏ dầu lớn nhất Việt Nam. Từ dầu thô đen sánh, nhà máy lọc dầu Dung Quất, Nghi Sơn tạo ra xăng, dầu diesel, khí hoá lỏng… phục vụ đời sống hằng ngày.',
  steps: [
    { title: 'Dầu mỏ', html: `<p><b>Dầu mỏ</b> là chất lỏng sánh, màu nâu đen, không tan trong nước, nhẹ hơn nước. Dầu mỏ là <b>hỗn hợp</b> phức tạp của nhiều hydrocarbon và một lượng nhỏ hợp chất khác.</p>
      <p>Trong mỏ dầu thường có ba lớp: lớp khí ở trên (khí mỏ dầu), lớp dầu lỏng ở giữa, lớp nước mặn ở dưới. Khai thác bằng cách khoan giếng dầu.</p>` },
    { title: 'Chế biến dầu mỏ', html: `<p>Dầu thô được <b>chưng cất phân đoạn</b> trong tháp chưng cất: các hydrocarbon có nhiệt độ sôi khác nhau được tách ra ở các độ cao khác nhau.</p>
      <p>Sản phẩm: khí đốt, xăng, dầu hoả, dầu diesel, dầu mazut, nhựa đường. Để tăng lượng xăng, người ta dùng phương pháp <b>cracking</b> (bẻ gãy phân tử lớn thành phân tử nhỏ).</p>`,
      svg: S.oilColumn(), caption: 'Chưng cất phân đoạn dầu mỏ: phân đoạn nhẹ (sôi thấp) ra ở trên, phân đoạn nặng ra ở dưới.' },
    { title: 'Khí thiên nhiên và khí mỏ dầu', html: `<ul><li><b>Khí thiên nhiên</b>: có trong các mỏ khí, thành phần chính là <b>methane</b> (khoảng 95 %, tham khảo).</li><li><b>Khí mỏ dầu</b> (khí đồng hành): có trong mỏ dầu, chứa methane cùng ethane, propane, butane…</li></ul>
      <p>Ứng dụng: nhiên liệu cho nhà máy điện, sản xuất phân đạm; khí hoá lỏng (LPG, chủ yếu propane, butane) dùng làm gas đun nấu.</p>`,
      svg: S.pieChart({ title: 'Thành phần một mẫu khí thiên nhiên (tham khảo)', parts: [{ label: 'Methane ≈ 95%', v: 95, color: '#2563eb' }, { label: 'Ethane, propane… ≈ 4%', v: 4, color: '#f59e0b' }, { label: 'Khí khác ≈ 1%', v: 1, color: '#94a3b8' }] }), caption: 'Thành phần chính của khí thiên nhiên là methane (số liệu tham khảo).' },
    { title: 'Sử dụng nhiên liệu hiệu quả, an toàn', html: `<ul><li>Cung cấp đủ oxygen để nhiên liệu cháy hoàn toàn (tránh tạo CO, muội than).</li><li>Tăng diện tích tiếp xúc giữa nhiên liệu và không khí (than tổ ong có lỗ, phun nhiên liệu thành hạt nhỏ).</li><li>Điều chỉnh lượng nhiên liệu phù hợp với nhu cầu.</li></ul>
      <p><b>Năng suất toả nhiệt</b> q (J/kg) cho biết nhiệt lượng toả ra khi đốt cháy hoàn toàn 1 kg nhiên liệu: Q = q · m. Xăng có q ≈ 46 · 10<sup>6</sup> J/kg (tham khảo).</p>` }
  ],
  summary: 'Dầu mỏ là hỗn hợp nhiều hydrocarbon; chưng cất phân đoạn tạo khí đốt, xăng, dầu hoả, diesel, mazut, nhựa đường; cracking tăng lượng xăng. Khí thiên nhiên chứa chủ yếu methane. Sử dụng nhiên liệu hiệu quả: đủ oxygen, tăng diện tích tiếp xúc, dùng đúng nhu cầu. Q = q · m.',
  examples: [
    { title: 'Nhiệt lượng toả ra', problem: 'Đốt cháy hoàn toàn 2 kg xăng (q = 46 · 10<sup>6</sup> J/kg). Tính nhiệt lượng toả ra.', solution: 'Q = 46 · 10<sup>6</sup> · 2 = 92 · 10<sup>6</sup> J = 92 MJ.' },
    { title: 'Giải thích', problem: 'Vì sao than tổ ong được làm có nhiều lỗ?', solution: 'Để tăng diện tích tiếp xúc với không khí, giúp than cháy hoàn toàn và hiệu quả hơn.' },
    { title: 'Tách dầu', problem: 'Vì sao khi có sự cố tràn dầu, dầu loang trên mặt biển?', solution: 'Dầu không tan trong nước và nhẹ hơn nước nên nổi và loang rộng thành lớp mỏng.' }
  ],
  exercises: [
    { question: 'Kể tên ba sản phẩm của quá trình chưng cất dầu mỏ và một ứng dụng của mỗi sản phẩm.', hints: ['Xăng, dầu diesel, nhựa đường…', 'Nhiên liệu cho phương tiện, làm đường.'], solution: 'Xăng: nhiên liệu xe máy, ô tô. Dầu diesel: xe tải, tàu thuyền. Nhựa đường: rải đường.' },
    { question: 'Đốt cháy hoàn toàn 0,5 kg khí gas (q ≈ 46 · 10<sup>6</sup> J/kg, tham khảo). Tính nhiệt lượng toả ra (theo MJ).', hints: ['Q = q · m.', '46 · 0,5 = ?'], solution: 'Q = 23 · 10<sup>6</sup> J = 23 MJ.' },
    { question: 'Nêu hai biện pháp giúp nhiên liệu cháy hoàn toàn.', hints: ['Cung cấp oxygen.', 'Diện tích tiếp xúc.'], solution: 'Cung cấp đủ không khí (oxygen); tăng diện tích tiếp xúc của nhiên liệu với không khí.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dầu mỏ là một hợp chất hoá học có công thức xác định.', answer: false, explain: 'Dầu mỏ là hỗn hợp của nhiều hydrocarbon.' },
    { type: 'mcq', q: 'Thành phần chính của khí thiên nhiên là:', options: ['ethylene', 'methane', 'butane', 'hydrogen'], answer: 1, explain: 'Methane chiếm khoảng 95 %.' },
    { type: 'mcq', q: 'Phương pháp tách dầu thô thành các phân đoạn là:', options: ['lọc', 'chưng cất phân đoạn', 'kết tinh', 'điện phân'], answer: 1, explain: 'Dựa vào nhiệt độ sôi khác nhau.' },
    { type: 'short', q: 'Đốt cháy hoàn toàn 3 kg nhiên liệu có q = 40 · 10<sup>6</sup> J/kg. Nhiệt lượng toả ra bằng bao nhiêu MJ?', answer: '120', unit: 'MJ', calc: '40*3', explain: 'Q = 40 · 10<sup>6</sup> · 3 = 120 · 10<sup>6</sup> J = 120 MJ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cracking dầu mỏ giúp tăng lượng xăng thu được.', answer: true, explain: 'Bẻ gãy phân tử lớn thành phân tử nhỏ (thuộc phân đoạn xăng).' },
    { type: 'mcq', q: 'Khí hoá lỏng (LPG) dùng làm gas đun nấu chứa chủ yếu:', options: ['methane và ethane', 'propane và butane', 'ethylene', 'oxygen'], answer: 1, explain: 'Propane và butane dễ hoá lỏng khi nén.' },
    { type: 'short', q: 'Cần đốt cháy hoàn toàn bao nhiêu kg nhiên liệu (q = 46 · 10<sup>6</sup> J/kg) để thu được 23 MJ?', answer: '0,5', unit: 'kg', calc: '23/46', explain: 'm = Q / q = 23 / 46 = 0,5 kg.' },
    { type: 'mcq', q: 'Việc làm nào giúp nhiên liệu cháy hoàn toàn?', options: ['Đun bếp trong phòng kín', 'Cung cấp đủ không khí', 'Chất củi thật chặt', 'Giảm lượng oxygen'], answer: 1, explain: 'Đủ oxygen giúp cháy hoàn toàn.' }
  ]
});
})();
