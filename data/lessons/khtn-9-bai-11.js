/* KHTN 9 – Bài 11. Điện trở. Định luật Ohm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-11', {
  objectives: [
    'Nêu được điện trở đặc trưng cho mức độ cản trở dòng điện; đơn vị ôm (Ω).',
    'Phát biểu và vận dụng được định luật Ohm I = U / R.',
    'Nêu được điện trở dây dẫn phụ thuộc vào chiều dài, tiết diện và vật liệu: R = ρ · l / S.'
  ],
  intro: 'Cùng cắm vào ổ điện 220 V, bóng đèn ngủ chỉ có dòng điện nhỏ chạy qua còn ấm siêu tốc lại có dòng điện lớn. Mỗi dụng cụ “cản trở” dòng điện ở mức khác nhau – đại lượng đặc trưng cho điều đó là <b>điện trở</b>.',
  steps: [
    { title: 'Thí nghiệm: quan hệ giữa I và U', html: `<p>Mắc một dây dẫn (điện trở) vào mạch có ampe kế nối tiếp, vôn kế song song. Thay đổi hiệu điện thế U giữa hai đầu dây, đọc cường độ dòng điện I.</p>
      <table><tr><th>U (V)</th><th>0</th><th>2</th><th>4</th><th>6</th></tr><tr><td>I (A)</td><td>0</td><td>0,2</td><td>0,4</td><td>0,6</td></tr></table>
      <p><i>(Số liệu minh hoạ.)</i> U tăng bao nhiêu lần thì I tăng bấy nhiêu lần: <b>I tỉ lệ thuận với U</b>; đồ thị là đường thẳng qua gốc toạ độ.</p>`,
      svg: S.circuit({ items: ['battery', 'switch', 'ammeter', 'resistor'], voltmeter: 3, closed: true, arrows: true, labels: true, label: 'Mạch đo U và I của một điện trở' }), caption: 'Ampe kế mắc nối tiếp, vôn kế mắc song song với điện trở.' },
    { title: 'Điện trở và định luật Ohm', html: `<p>Với mỗi dây dẫn, tỉ số U / I không đổi; tỉ số đó là <b>điện trở</b> R của dây:</p>
      <p class="math">R = U / I</p>
      <p>Đơn vị: <b>ôm</b> (Ω); 1 Ω = 1 V / 1 A; 1 kΩ = 1 000 Ω. Điện trở càng lớn thì dây cản trở dòng điện càng nhiều.</p>
      <div class="box key"><b>Định luật Ohm:</b> Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: <span class="math">I = U / R</span></div>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 0], [2, 0.2], [4, 0.4], [6, 0.6]], color: '#2563eb', dots: true }], xmax: 7, ymax: 0.8, xstep: 1, ystep: 0.2, xlabel: 'U (V)', ylabel: 'I (A)', label: 'Đồ thị I theo U của điện trở 10 Ω (số liệu minh hoạ)' }), caption: 'Đồ thị I – U của điện trở R = 10 Ω là đường thẳng qua gốc toạ độ (số liệu minh hoạ).' },
    { title: 'Điện trở của dây dẫn', html: `<p>Điện trở của dây dẫn hình trụ đồng chất:</p>
      <p class="math">R = ρ · l / S</p>
      <ul><li>l: chiều dài dây (m) – dây càng dài, R càng lớn.</li><li>S: tiết diện dây (m²) – dây càng to, R càng nhỏ.</li><li>ρ (rô): <b>điện trở suất</b> (Ω·m), phụ thuộc vật liệu.</li></ul>
      <table><tr><th>Vật liệu</th><th>ρ (Ω·m, ở 20 °C, tham khảo)</th></tr><tr><td>Bạc</td><td>1,6 · 10<sup>−8</sup></td></tr><tr><td>Đồng</td><td>1,7 · 10<sup>−8</sup></td></tr><tr><td>Nhôm</td><td>2,8 · 10<sup>−8</sup></td></tr><tr><td>Nichrome</td><td>1,1 · 10<sup>−6</sup></td></tr></table>`,
      svg: S.wireRes(), caption: 'Điện trở dây dẫn tỉ lệ thuận với chiều dài l, tỉ lệ nghịch với tiết diện S.' },
    { title: 'Ứng dụng', html: `<p>Dây dẫn điện trong nhà làm bằng đồng (ρ nhỏ) để ít hao phí. Dây đốt nóng của bàn là, bếp điện làm bằng hợp kim nichrome (ρ lớn) để toả nhiệt nhiều.</p>
      <p>Biến trở là điện trở có thể thay đổi trị số, dùng để điều chỉnh cường độ dòng điện (ví dụ núm chỉnh độ sáng đèn).</p>` }
  ],
  summary: 'Điện trở R = U / I đặc trưng cho mức cản trở dòng điện, đơn vị Ω. Định luật Ohm: I = U / R. Điện trở dây dẫn R = ρl / S: tỉ lệ thuận với chiều dài, tỉ lệ nghịch với tiết diện, phụ thuộc vật liệu (điện trở suất ρ).',
  examples: [
    { title: 'Tính cường độ dòng điện', problem: 'Đặt hiệu điện thế 12 V vào hai đầu điện trở 24 Ω. Tính I.', solution: 'I = U / R = 12 / 24 = 0,5 (A).' },
    { title: 'Tính điện trở', problem: 'Bóng đèn có dòng điện 0,5 A chạy qua khi hiệu điện thế là 6 V. Tính điện trở của đèn.', solution: 'R = U / I = 6 / 0,5 = 12 (Ω).' },
    { title: 'Điện trở dây đồng', problem: 'Dây đồng dài 100 m, tiết diện 1,7 mm² = 1,7 · 10<sup>−6</sup> m², ρ = 1,7 · 10<sup>−8</sup> Ω·m. Tính R.', solution: 'R = 1,7 · 10<sup>−8</sup> · 100 / (1,7 · 10<sup>−6</sup>) = 1 (Ω).' }
  ],
  exercises: [
    { question: 'Điện trở 20 Ω được mắc vào hiệu điện thế 6 V. Tính cường độ dòng điện.', hints: ['I = U / R.', '6 / 20 = ?'], solution: 'I = 6 / 20 = 0,3 A.' },
    { question: 'Hiệu điện thế đặt vào một dây dẫn tăng từ 3 V lên 9 V thì cường độ dòng điện thay đổi thế nào?', hints: ['I tỉ lệ thuận với U.', '9 / 3 = 3.'], solution: 'I tăng 3 lần.' },
    { question: 'Hai dây đồng cùng tiết diện, dây thứ nhất dài 2 m, dây thứ hai dài 6 m. So sánh điện trở.', hints: ['R tỉ lệ thuận với l.', 'Cùng vật liệu, cùng tiết diện.'], solution: 'R<sub>2</sub> = 3R<sub>1</sub> (dây dài gấp 3 thì điện trở gấp 3).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cường độ dòng điện qua dây dẫn tỉ lệ nghịch với điện trở của dây khi hiệu điện thế không đổi.', answer: true, explain: 'Định luật Ohm: I = U / R.' },
    { type: 'short', q: 'Đặt hiệu điện thế 9 V vào điện trở 3 Ω. Cường độ dòng điện bằng bao nhiêu ampe?', answer: '3', unit: 'A', calc: '9/3', explain: 'I = 9 / 3 = 3 A.' },
    { type: 'mcq', q: 'Đơn vị của điện trở là:', options: ['vôn (V)', 'ampe (A)', 'ôm (Ω)', 'oát (W)'], answer: 2, explain: 'Điện trở đo bằng ôm.' },
    { type: 'short', q: 'Dòng điện 0,2 A chạy qua điện trở khi hiệu điện thế là 4 V. Điện trở bằng bao nhiêu ôm?', answer: '20', unit: 'Ω', calc: '4/0.2', explain: 'R = 4 / 0,2 = 20 Ω.' },
    { type: 'mcq', q: 'Đồ thị biểu diễn I theo U của một điện trở là:', options: ['đường cong', 'đường thẳng đi qua gốc toạ độ', 'đường thẳng song song trục U', 'đường tròn'], answer: 1, explain: 'I tỉ lệ thuận với U.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dây dẫn càng dài (cùng vật liệu, cùng tiết diện) thì điện trở càng nhỏ.', answer: false, explain: 'R tỉ lệ thuận với chiều dài.' },
    { type: 'short', q: 'Điện trở 15 Ω có dòng điện 2 A chạy qua. Hiệu điện thế giữa hai đầu điện trở là bao nhiêu vôn?', answer: '30', unit: 'V', calc: '2*15', explain: 'U = I · R = 30 V.' },
    { type: 'mcq', q: 'Vì sao dây dẫn điện trong nhà thường làm bằng đồng?', options: ['Đồng rẻ nhất', 'Đồng có điện trở suất nhỏ, dẫn điện tốt', 'Đồng có điện trở suất lớn', 'Đồng không bị uốn cong'], answer: 1, explain: 'ρ của đồng nhỏ nên ít hao phí điện năng.' }
  ]
});
})();
