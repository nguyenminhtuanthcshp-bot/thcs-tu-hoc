/* KHTN 9 – Bài 16. Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-16', {
  objectives: [
    'Mô tả được sơ lược vòng năng lượng trên Trái Đất, với Mặt Trời là nguồn năng lượng chủ yếu.',
    'Nêu được năng lượng hoá thạch (than đá, dầu mỏ, khí tự nhiên) và vì sao chúng là năng lượng không tái tạo.',
    'Nêu được tác hại của việc sử dụng năng lượng hoá thạch và biện pháp sử dụng hiệu quả.'
  ],
  intro: 'Than đá đốt trong nhà máy nhiệt điện thực chất là “năng lượng Mặt Trời” được cây cối tích trữ cách đây hàng trăm triệu năm. Năng lượng trên Trái Đất luôn chuyển hoá theo những vòng tuần hoàn khổng lồ.',
  steps: [
    { title: 'Mặt Trời – nguồn năng lượng chính', html: `<p>Phần lớn năng lượng trên Trái Đất có nguồn gốc từ <b>Mặt Trời</b>:</p>
      <ul><li>Làm nóng mặt đất, nước bốc hơi, tạo mây, mưa, gió, dòng chảy sông.</li><li>Cây xanh quang hợp, tích luỹ năng lượng hoá học trong chất hữu cơ, truyền qua chuỗi thức ăn.</li><li>Xác sinh vật bị vùi lấp hàng triệu năm biến thành than đá, dầu mỏ, khí tự nhiên.</li></ul>`,
      svg: S.flow({ items: ['Năng lượng Mặt Trời', 'Thực vật quang hợp (hoá năng)', 'Động vật, con người sử dụng', 'Xác sinh vật bị vùi lấp hàng triệu năm', 'Than đá, dầu mỏ, khí tự nhiên'], size: 13, label: 'Vòng năng lượng và sự hình thành nhiên liệu hoá thạch' }), caption: 'Nhiên liệu hoá thạch là năng lượng Mặt Trời được tích trữ từ hàng triệu năm trước.' },
    { title: 'Năng lượng hoá thạch', html: `<p><b>Năng lượng hoá thạch</b> là năng lượng thu được từ nhiên liệu hoá thạch: <b>than đá, dầu mỏ, khí tự nhiên</b>.</p>
      <p>Chúng hình thành rất chậm (hàng triệu năm) nên khi khai thác và sử dụng hết thì không thể bổ sung kịp: đây là nguồn năng lượng <b>không tái tạo</b>.</p>`,
      svg: S.pieChart({ title: 'Cơ cấu nguồn điện của một quốc gia (số liệu minh hoạ)', parts: [{ label: 'Than ≈ 45%', v: 45, color: '#475569' }, { label: 'Khí ≈ 10%', v: 10, color: '#f59e0b' }, { label: 'Thuỷ điện ≈ 30%', v: 30, color: '#2563eb' }, { label: 'Mặt trời, gió ≈ 15%', v: 15, color: '#16a34a' }] }), caption: 'Biểu đồ minh hoạ: nhiên liệu hoá thạch (than, khí) vẫn chiếm tỉ lệ lớn trong sản xuất điện.' },
    { title: 'Tác hại khi sử dụng', html: `<ul><li>Đốt nhiên liệu hoá thạch thải ra CO<sub>2</sub> – khí nhà kính chính gây <b>ấm lên toàn cầu</b>.</li><li>Thải SO<sub>2</sub>, NO<sub>x</sub>, bụi mịn gây ô nhiễm không khí, mưa acid, bệnh hô hấp.</li><li>Khai thác, vận chuyển có thể gây sự cố tràn dầu, sụt lún mỏ.</li></ul>` },
    { title: 'Sử dụng năng lượng hiệu quả', html: `<ul><li>Tiết kiệm điện, dùng thiết bị hiệu suất cao (đèn LED, thiết bị dán nhãn năng lượng).</li><li>Đi bộ, đi xe đạp, dùng phương tiện công cộng.</li><li>Tăng dần tỉ lệ năng lượng tái tạo: mặt trời, gió, nước.</li></ul>
      <div class="box tip">Hiệu suất: H = (năng lượng có ích / năng lượng toàn phần) · 100 %. Thiết bị hiệu suất cao lãng phí ít năng lượng hơn.</div>` }
  ],
  summary: 'Mặt Trời là nguồn năng lượng chính của Trái Đất; năng lượng chuyển hoá qua khí quyển, nước, sinh vật. Than đá, dầu mỏ, khí tự nhiên là nhiên liệu hoá thạch – không tái tạo. Đốt chúng thải CO₂ gây ấm lên toàn cầu và gây ô nhiễm; cần sử dụng tiết kiệm, hiệu quả.',
  examples: [
    { title: 'Nguồn gốc năng lượng', problem: 'Giải thích vì sao nói năng lượng của thuỷ điện cũng có nguồn gốc từ Mặt Trời.', solution: 'Mặt Trời làm nước bốc hơi, tạo mây và mưa; nước mưa đọng ở hồ trên cao có thế năng, chảy xuống làm quay tuabin.' },
    { title: 'Phân loại', problem: 'Trong các nguồn: than đá, gió, khí tự nhiên, dầu mỏ – nguồn nào không phải năng lượng hoá thạch?', solution: 'Gió.' },
    { title: 'Hiệu suất', problem: 'Bóng đèn tiêu thụ 100 J điện năng, phát ra 20 J quang năng có ích. Tính hiệu suất.', solution: 'H = 20 / 100 · 100 % = 20 %.' }
  ],
  exercises: [
    { question: 'Vì sao năng lượng hoá thạch được gọi là năng lượng không tái tạo?', hints: ['Nhiên liệu hoá thạch hình thành trong bao lâu?', 'So sánh với tốc độ con người sử dụng.'], solution: 'Vì chúng hình thành qua hàng triệu năm, trong khi con người khai thác rất nhanh; khi dùng hết không thể bổ sung kịp.' },
    { question: 'Nêu hai tác hại của việc đốt than đá trong nhà máy nhiệt điện.', hints: ['Khí thải chính là gì?', 'Bụi và khí SO<sub>2</sub>.'], solution: 'Thải CO<sub>2</sub> gây ấm lên toàn cầu; thải bụi, SO<sub>2</sub> gây ô nhiễm không khí, mưa acid.' },
    { question: 'Động cơ nhận 500 J năng lượng, sinh ra 150 J cơ năng có ích. Tính hiệu suất.', hints: ['H = A<sub>có ích</sub> / A<sub>toàn phần</sub> · 100 %.', '150 / 500 = 0,3.'], solution: 'H = 30 %.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Than đá, dầu mỏ, khí tự nhiên là các nguồn năng lượng tái tạo.', answer: false, explain: 'Chúng là năng lượng hoá thạch, không tái tạo.' },
    { type: 'mcq', q: 'Nguồn năng lượng chủ yếu của Trái Đất là:', options: ['Mặt Trăng', 'Mặt Trời', 'Lòng đất', 'Than đá'], answer: 1, explain: 'Mặt Trời cung cấp phần lớn năng lượng.' },
    { type: 'mcq', q: 'Khí thải chủ yếu gây ấm lên toàn cầu khi đốt nhiên liệu hoá thạch là:', options: ['O<sub>2</sub>', 'N<sub>2</sub>', 'CO<sub>2</sub>', 'H<sub>2</sub>'], answer: 2, explain: 'CO<sub>2</sub> là khí nhà kính chính.' },
    { type: 'short', q: 'Thiết bị nhận 200 J, cho 50 J năng lượng có ích. Hiệu suất bằng bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '50/200*100', explain: '50 / 200 · 100 % = 25 %.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhiên liệu hoá thạch được hình thành từ xác sinh vật bị vùi lấp hàng triệu năm.', answer: true, explain: 'Than đá từ thực vật; dầu mỏ, khí chủ yếu từ sinh vật biển.' },
    { type: 'mcq', q: 'Việc làm nào giúp sử dụng năng lượng hiệu quả?', options: ['Bật đèn cả ngày', 'Dùng đèn LED thay đèn sợi đốt', 'Để tivi ở chế độ chờ suốt đêm', 'Mở cửa khi bật điều hoà'], answer: 1, explain: 'Đèn LED tiết kiệm điện hơn nhiều.' },
    { type: 'short', q: 'Động cơ có hiệu suất 40 % nhận 1 000 J năng lượng. Năng lượng có ích là bao nhiêu jun?', answer: '400', unit: 'J', calc: '0.4*1000', explain: '0,4 · 1 000 = 400 J.' },
    { type: 'mcq', q: 'Năng lượng của gió có nguồn gốc từ:', options: ['Mặt Trời làm nóng không khí không đều', 'lòng đất', 'Mặt Trăng', 'than đá'], answer: 0, explain: 'Chênh lệch nhiệt độ tạo ra gió.' }
  ]
});
})();
