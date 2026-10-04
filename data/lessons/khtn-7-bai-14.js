/* KHTN 7 – Bài 14. Phản xạ âm, chống ô nhiễm tiếng ồn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-14', {
  objectives: [
    'Lấy được ví dụ về vật phản xạ âm tốt, vật phản xạ âm kém; giải thích được hiện tượng tiếng vang.',
    'Vận dụng phản xạ âm để tính khoảng cách (đo độ sâu đáy biển).',
    'Nêu được tác hại của ô nhiễm tiếng ồn và đề xuất được các biện pháp chống ô nhiễm tiếng ồn.'
  ],
  intro: 'Đứng trước vách núi và hét to, vài giây sau em nghe thấy tiếng mình “vọng lại”. Âm thanh đã gặp vách núi và dội ngược trở về – đó là <b>phản xạ âm</b>.',
  steps: [
    { title: 'Phản xạ âm và tiếng vang', html: `<p>Âm gặp một vật cản sẽ bị <b>phản xạ</b> (dội lại). Âm dội lại gọi là <b>âm phản xạ</b>.</p>
      <p>Ta nghe được <b>tiếng vang</b> khi âm phản xạ đến tai chậm hơn âm phát ra trực tiếp ít nhất khoảng {{1|15}} giây. Vì vậy trong phòng nhỏ không có tiếng vang, còn trong hang động lớn, trước vách núi thì có.</p>`,
      svg: S.echoScene('wall'), caption: 'Âm phát ra gặp vách núi, phản xạ trở lại tai người: tiếng vang.' },
    { title: 'Vật phản xạ âm tốt, kém', html: `<table class="tbl"><tr><th>Phản xạ âm tốt (hấp thụ âm kém)</th><th>Phản xạ âm kém (hấp thụ âm tốt)</th></tr>
      <tr><td>Vật cứng, bề mặt nhẵn: tường gạch, bê tông, kim loại, kính, gỗ cứng</td><td>Vật mềm, xốp, bề mặt gồ ghề: rèm vải, thảm, mút xốp, bông, cao su xốp</td></tr></table>
      <p>Phòng thu âm, rạp hát thường được ốp vật liệu xốp, treo rèm dày để giảm âm phản xạ, giúp nghe rõ hơn.</p>` },
    { title: 'Ứng dụng: đo độ sâu đáy biển', html: `<p>Tàu phát sóng siêu âm xuống đáy biển và đo thời gian t từ lúc phát đến lúc nhận được âm phản xạ. Âm đi xuống rồi đi lên, tức là đi quãng đường 2h:</p>
      <p class="math">2h = v · t ⇒ h = {{v · t|2}}</p>
      <p>Ví dụ: v = 1 500 m/s, t = 2 s ⇒ h = 1 500 · 2 : 2 = 1 500 m. Loài dơi, cá heo cũng dùng siêu âm phản xạ để định hướng và tìm mồi.</p>`,
      svg: S.echoScene('sonar'), caption: 'Siêu âm đi xuống đáy biển rồi phản xạ trở lại tàu: quãng đường âm đi là 2h.' },
    { title: 'Ô nhiễm tiếng ồn', html: `<p>Tiếng ồn gây <b>ô nhiễm</b> khi nó to, kéo dài, làm ảnh hưởng xấu đến sức khoẻ (đau đầu, mất ngủ, giảm thính lực) và sinh hoạt, học tập của con người.</p>
      <p>Các biện pháp chống ô nhiễm tiếng ồn:</p>
      <ul><li><b>Giảm độ to của nguồn âm:</b> hạn chế bóp còi, lắp bộ giảm thanh, không mở loa quá to.</li><li><b>Ngăn chặn đường truyền âm:</b> xây tường cách âm, trồng cây xanh, đóng cửa kính.</li><li><b>Làm âm truyền theo hướng khác, hấp thụ âm:</b> dùng vật liệu xốp, rèm, thảm.</li><li>Tránh xa nguồn ồn; đeo nút bịt tai khi làm việc ở nơi quá ồn.</li></ul>`,
      svg: S.echoScene('barrier'), caption: 'Hàng cây và tường cách âm phản xạ, hấp thụ bớt tiếng ồn từ đường phố trước khi đến nhà ở.' }
  ],
  summary: 'Âm gặp vật cản bị phản xạ. Tiếng vang: âm phản xạ đến tai chậm hơn âm trực tiếp ít nhất 1/15 s. Vật cứng, nhẵn phản xạ âm tốt; vật mềm, xốp phản xạ âm kém. Đo độ sâu: h = v · t : 2. Chống ô nhiễm tiếng ồn: giảm độ to nguồn, ngăn chặn đường truyền, hấp thụ âm.',
  examples: [
    { title: 'Tính khoảng cách đến vách núi', problem: 'Một người hét lớn và nghe tiếng vang sau 2 s. Tính khoảng cách từ người đến vách núi (tốc độ âm trong không khí 340 m/s).', solution: 'Âm đi đến vách núi rồi quay lại: 2d = 340 · 2 = 680 m ⇒ d = 340 m.' },
    { title: 'Đo độ sâu', problem: 'Tàu phát siêu âm, sau 4 s nhận được âm phản xạ từ đáy biển. Tính độ sâu (v = 1 500 m/s).', solution: 'h = 1 500 · 4 : 2 = 3 000 m.' },
    { title: 'Chọn vật liệu', problem: 'Để giảm tiếng vang trong một hội trường, nên dùng vật liệu nào để ốp tường: kính, gạch men hay tấm xốp tiêu âm?', solution: 'Tấm xốp tiêu âm (mềm, xốp) vì nó hấp thụ âm tốt, phản xạ âm kém.' }
  ],
  exercises: [
    { question: 'Vì sao nói chuyện trong phòng nhỏ ta không nghe thấy tiếng vang, nhưng trong hang động lớn lại nghe thấy?', hints: ['Tiếng vang cần âm phản xạ đến chậm hơn âm trực tiếp ít nhất bao lâu?', 'Vật cản ở gần hay xa thì âm phản xạ về nhanh?'], solution: 'Trong phòng nhỏ, tường ở gần nên âm phản xạ về gần như cùng lúc với âm trực tiếp (chậm chưa tới 1/15 s), ta không phân biệt được. Trong hang lớn, vách hang ở xa nên âm phản xạ về chậm hơn đủ để nghe thành tiếng vang.' },
    { question: 'Tính khoảng cách ngắn nhất từ người đến bức tường để nghe được tiếng vang (v = 340 m/s, thời gian chậm tối thiểu 1/15 s).', hints: ['Quãng đường âm đi thêm: 340 · 1/15.', 'Quãng đường đó bằng 2 lần khoảng cách đến tường.'], solution: '2d = 340 : 15 ≈ 22,7 m ⇒ d ≈ 11,3 m.' },
    { question: 'Nhà em ở gần một xưởng cơ khí rất ồn. Đề xuất ít nhất ba biện pháp giảm tiếng ồn.', hints: ['Nghĩ đến nguồn âm, đường truyền âm và nơi nhận âm.', 'Có thể dùng cây xanh, cửa kính, rèm.'], solution: 'Đề nghị xưởng hoạt động đúng giờ, dùng máy móc có giảm thanh; trồng cây xanh, xây tường chắn giữa nhà và xưởng; lắp cửa kính kín, treo rèm dày, dùng vật liệu tiêu âm trong phòng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tấm rèm vải dày phản xạ âm tốt hơn bức tường gạch nhẵn.', answer: false, explain: 'Rèm mềm, xốp hấp thụ âm tốt, phản xạ âm kém.' },
    { type: 'mcq', q: 'Vật nào phản xạ âm tốt nhất?', options: ['Tấm thảm len', 'Miếng mút xốp', 'Mặt gương kính', 'Áo bông'], answer: 2, explain: 'Vật cứng, nhẵn phản xạ âm tốt.' },
    { type: 'short', q: 'Tàu phát siêu âm, sau 2 s nhận âm phản xạ từ đáy biển. Tốc độ âm trong nước 1 500 m/s. Độ sâu đáy biển là bao nhiêu mét?', answer: '1500', unit: 'm', calc: '1500*2/2', explain: 'h = 1 500 · 2 : 2 = 1 500 m.' },
    { type: 'short', q: 'Hét trước vách núi, 3 s sau nghe tiếng vang. Khoảng cách đến vách núi là bao nhiêu mét? (v = 340 m/s)', answer: '510', unit: 'm', calc: '340*3/2', explain: 'd = 340 · 3 : 2 = 510 m.' },
    { type: 'mcq', q: 'Biện pháp nào là “ngăn chặn đường truyền âm”?', options: ['Không bóp còi', 'Trồng hàng cây xanh quanh bệnh viện', 'Lắp bộ giảm thanh cho xe', 'Vặn nhỏ loa'], answer: 1, explain: 'Hàng cây chắn giữa nguồn ồn và nơi nhận âm.' },
    { type: 'short', q: 'Khoảng cách tối thiểu (m) từ người đến vật cản để nghe được tiếng vang, biết v = 340 m/s và âm phản xạ phải đến chậm hơn ít nhất 1/15 s? (làm tròn đến một chữ số thập phân)', answer: '11,3', unit: 'm', calc: 'round(340/15/2, 1)', explain: 'd = 340 · (1/15) : 2 ≈ 11,3 m.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tiếng ồn to và kéo dài có thể làm giảm thính lực.', answer: true, explain: 'Đây là một tác hại của ô nhiễm tiếng ồn.' },
    { type: 'mcq', q: 'Dơi định hướng khi bay trong đêm tối nhờ:', options: ['ánh sáng Mặt Trăng', 'siêu âm phản xạ', 'khứu giác', 'từ trường'], answer: 1, explain: 'Dơi phát siêu âm và nghe âm phản xạ từ vật cản, con mồi.' }
  ]
});
})();
