/* KHTN 7 – Bài 5. Phân tử – Đơn chất – Hợp chất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-5', {
  objectives: [
    'Nêu được khái niệm phân tử; tính được khối lượng phân tử theo đơn vị amu.',
    'Nêu được khái niệm đơn chất, hợp chất.',
    'Đưa ra được ví dụ và phân biệt đơn chất, hợp chất.'
  ],
  intro: 'Một giọt nước gồm rất nhiều hạt giống hệt nhau; mỗi hạt gồm 2 nguyên tử hydrogen gắn với 1 nguyên tử oxygen. Hạt ấy vẫn mang đầy đủ tính chất của nước – người ta gọi nó là <b>phân tử</b> nước.',
  steps: [
    { title: 'Phân tử là gì?', html: `<p><b>Phân tử</b> là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất.</p>
      <p>Ví dụ: phân tử hydrogen gồm 2 nguyên tử H; phân tử oxygen gồm 2 nguyên tử O; phân tử nước gồm 2 nguyên tử H và 1 nguyên tử O; phân tử carbon dioxide gồm 1 nguyên tử C và 2 nguyên tử O.</p>`,
      svg: S.row([{ svg: S.moleculeModel('H2', { title: 'Hydrogen H₂' }) }, { svg: S.moleculeModel('O2', { title: 'Oxygen O₂' }) }, { svg: S.moleculeModel('H2O', { title: 'Nước H₂O' }) }, { svg: S.moleculeModel('CO2', { title: 'Carbon dioxide CO₂' }) }]),
      caption: 'Mô hình quả cầu – que của một số phân tử (mỗi màu là một loại nguyên tử; que biểu diễn liên kết).' },
    { title: 'Khối lượng phân tử', html: `<p><b>Khối lượng phân tử</b> bằng tổng khối lượng của các nguyên tử có trong phân tử, tính theo đơn vị amu.</p>
      <table class="tbl"><tr><th>Chất</th><th>Cách tính</th><th>Khối lượng phân tử</th></tr>
      <tr><td>O<sub>2</sub></td><td>2 · 16</td><td>32 amu</td></tr><tr><td>H<sub>2</sub>O</td><td>2 · 1 + 16</td><td>18 amu</td></tr>
      <tr><td>CO<sub>2</sub></td><td>12 + 2 · 16</td><td>44 amu</td></tr><tr><td>CH<sub>4</sub></td><td>12 + 4 · 1</td><td>16 amu</td></tr></table>
      <p class="muted">Khối lượng nguyên tử: H = 1; C = 12; N = 14; O = 16; Na = 23; S = 32; Cl = 35,5 (amu).</p>` },
    { title: 'Đơn chất', html: `<p><b>Đơn chất</b> là chất được tạo nên từ <b>một nguyên tố hoá học</b>.</p>
      <ul><li>Kim loại: sắt (Fe), đồng (Cu), nhôm (Al)… – hạt hợp thành là các nguyên tử xếp khít nhau.</li><li>Phi kim: khí oxygen (O<sub>2</sub>), khí nitrogen (N<sub>2</sub>), khí chlorine (Cl<sub>2</sub>) – hạt hợp thành là phân tử; carbon, sulfur ở thể rắn.</li><li>Khí hiếm: He, Ne, Ar – hạt hợp thành là nguyên tử riêng rẽ.</li></ul>
      <div class="box note">Một nguyên tố có thể tạo nên nhiều đơn chất: oxygen tạo nên khí oxygen O<sub>2</sub> và khí ozone O<sub>3</sub>.</div>` },
    { title: 'Hợp chất', html: `<p><b>Hợp chất</b> là chất được tạo nên từ <b>hai hay nhiều nguyên tố hoá học</b>.</p>
      <p>Ví dụ: nước H<sub>2</sub>O (H, O), khí methane CH<sub>4</sub> (C, H), ammonia NH<sub>3</sub> (N, H), muối ăn NaCl (Na, Cl).</p>
      <p>Muối ăn không gồm các phân tử riêng rẽ mà gồm các ion Na<sup>+</sup> và Cl<sup>−</sup> xếp xen kẽ, đều đặn.</p>`,
      svg: [S.row([{ svg: S.moleculeModel('NH3', { title: 'Ammonia NH₃' }) }, { svg: S.moleculeModel('CH4', { title: 'Methane CH₄' }) }]), S.saltLattice()],
      caption: 'Phân tử ammonia, methane và cách sắp xếp các ion trong muối ăn.' },
    { title: 'So sánh đơn chất và hợp chất', html: `<table class="tbl"><tr><th></th><th>Đơn chất</th><th>Hợp chất</th></tr>
      <tr><td>Số nguyên tố tạo nên</td><td>1</td><td>từ 2 trở lên</td></tr>
      <tr><td>Ví dụ</td><td>Fe, Cu, O<sub>2</sub>, N<sub>2</sub>, He</td><td>H<sub>2</sub>O, CO<sub>2</sub>, NaCl, CH<sub>4</sub></td></tr></table>
      <div class="box tip">Cách nhận biết nhanh: đếm số <b>kí hiệu nguyên tố khác nhau</b> trong công thức (không đếm chỉ số). H<sub>2</sub>: 1 kí hiệu ⇒ đơn chất; H<sub>2</sub>O: 2 kí hiệu ⇒ hợp chất.</div>` }
  ],
  summary: 'Phân tử: hạt đại diện cho chất, gồm các nguyên tử liên kết với nhau. Khối lượng phân tử = tổng khối lượng các nguyên tử (amu). Đơn chất: tạo nên từ 1 nguyên tố (Fe, O₂, N₂). Hợp chất: tạo nên từ 2 nguyên tố trở lên (H₂O, CO₂, NaCl).',
  examples: [
    { title: 'Tính khối lượng phân tử', problem: 'Tính khối lượng phân tử của ammonia NH<sub>3</sub> (N = 14, H = 1).', solution: 'Khối lượng phân tử = 14 + 3 · 1 = 17 (amu).' },
    { title: 'Phân loại chất', problem: 'Trong các chất: Cl<sub>2</sub>, HCl, Cu, CaCO<sub>3</sub>, N<sub>2</sub>, chất nào là đơn chất, chất nào là hợp chất?', solution: 'Đơn chất: Cl<sub>2</sub>, Cu, N<sub>2</sub> (mỗi chất 1 nguyên tố). Hợp chất: HCl (H, Cl), CaCO<sub>3</sub> (Ca, C, O).' },
    { title: 'Nhận xét thành phần', problem: 'Phân tử glucose có công thức C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>. Glucose là đơn chất hay hợp chất? Mỗi phân tử có bao nhiêu nguyên tử?', solution: 'Hợp chất (3 nguyên tố C, H, O). Số nguyên tử: 6 + 12 + 6 = 24 nguyên tử.' }
  ],
  exercises: [
    { question: 'Tính khối lượng phân tử của sulfur dioxide SO<sub>2</sub> (S = 32, O = 16).', hints: ['Phân tử có 1 nguyên tử S và 2 nguyên tử O.', 'Cộng khối lượng: 32 + 2 · 16.'], solution: '32 + 2 · 16 = 64 (amu).' },
    { question: 'Khí ozone O<sub>3</sub> và khí oxygen O<sub>2</sub> có phải là cùng một chất không? Chúng là đơn chất hay hợp chất?', hints: ['So sánh số nguyên tử trong mỗi phân tử.', 'Cả hai được tạo nên từ mấy nguyên tố?'], solution: 'Là hai chất khác nhau (phân tử khác nhau: 3 và 2 nguyên tử O), nhưng đều là đơn chất vì chỉ tạo nên từ nguyên tố oxygen.' },
    { question: 'Một phân tử gồm 1 nguyên tử X liên kết với 4 nguyên tử H và có khối lượng phân tử 16 amu. Tìm khối lượng nguyên tử của X và cho biết X là nguyên tố nào.', hints: ['Khối lượng của 4 nguyên tử H là 4 amu.', 'Khối lượng X = 16 − 4.'], solution: 'X = 16 − 4 · 1 = 12 amu ⇒ X là carbon; phân tử là methane CH<sub>4</sub>.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nước là một đơn chất.', answer: false, explain: 'Nước H₂O được tạo nên từ 2 nguyên tố H và O nên là hợp chất.' },
    { type: 'short', q: 'Tính khối lượng phân tử của carbon dioxide CO<sub>2</sub> (amu).', answer: '44', unit: 'amu', calc: '12+2*16', explain: '12 + 2 · 16 = 44 (amu).' },
    { type: 'mcq', q: 'Chất nào sau đây là đơn chất?', options: ['H<sub>2</sub>O', 'NaCl', 'N<sub>2</sub>', 'CO<sub>2</sub>'], answer: 2, explain: 'N₂ chỉ gồm nguyên tố nitrogen.' },
    { type: 'mcq', q: 'Hợp chất là chất được tạo nên từ:', options: ['một nguyên tố hoá học', 'hai hay nhiều nguyên tố hoá học', 'chỉ các nguyên tử kim loại', 'chỉ các nguyên tử khí hiếm'], answer: 1, explain: 'Hợp chất gồm từ 2 nguyên tố trở lên.' },
    { type: 'short', q: 'Tính khối lượng phân tử của methane CH<sub>4</sub> (amu).', answer: '16', unit: 'amu', calc: '12+4*1', explain: '12 + 4 · 1 = 16 (amu).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi phân tử khí oxygen gồm 2 nguyên tử oxygen liên kết với nhau.', answer: true, explain: 'Công thức khí oxygen là O₂.' },
    { type: 'short', q: 'Tính khối lượng của muối ăn NaCl theo amu (Na = 23, Cl = 35,5). Viết số thập phân với dấu phẩy.', answer: '58,5', unit: 'amu', calc: '23+35.5', explain: '23 + 35,5 = 58,5 (amu).' },
    { type: 'mcq', q: 'Dãy nào gồm toàn hợp chất?', options: ['O<sub>2</sub>, H<sub>2</sub>O, Fe', 'H<sub>2</sub>O, CO<sub>2</sub>, NaCl', 'Cu, Al, Fe', 'N<sub>2</sub>, O<sub>3</sub>, He'], answer: 1, explain: 'H₂O, CO₂, NaCl đều có từ 2 nguyên tố trở lên.' }
  ]
});
})();
