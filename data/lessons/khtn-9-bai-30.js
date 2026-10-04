/* KHTN 9 – Bài 30. Tinh bột và cellulose. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-30', {
  objectives: [
    'Nêu được trạng thái tự nhiên, tính chất vật lí, công thức chung (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub> của tinh bột và cellulose.',
    'Trình bày được phản ứng thuỷ phân tinh bột, cellulose và phản ứng màu của tinh bột với iodine.',
    'Nêu được sự tạo thành tinh bột, cellulose trong cây xanh và ứng dụng của chúng.'
  ],
  intro: 'Nhỏ một giọt dung dịch iodine lên lát khoai tây, vết nhỏ chuyển sang màu xanh tím. Đó là dấu hiệu của <b>tinh bột</b>. Còn tờ giấy, sợi bông em đang dùng gần như là <b>cellulose</b> tinh khiết.',
  steps: [
    { title: 'Trạng thái tự nhiên và tính chất vật lí', html: `<ul><li><b>Tinh bột</b>: có nhiều trong hạt (gạo, ngô, lúa mì), củ (khoai, sắn), quả xanh. Chất rắn màu trắng, không tan trong nước lạnh; trong nước nóng tạo dung dịch keo (hồ tinh bột).</li><li><b>Cellulose</b>: thành phần chính của vách tế bào thực vật, có nhiều trong gỗ, sợi bông (gần 98 %, tham khảo), đay, gai. Chất rắn màu trắng, không tan trong nước kể cả khi đun nóng.</li></ul>` },
    { title: 'Cấu tạo phân tử', html: `<p>Tinh bột và cellulose là <b>polymer thiên nhiên</b> do nhiều mắt xích –C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>– liên kết với nhau: <span class="math">(–C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>–)<sub>n</sub></span></p>
      <p>Số mắt xích n của cellulose lớn hơn nhiều so với tinh bột; cấu trúc mạch khác nhau nên tính chất khác nhau.</p>`,
      svg: S.polymerChain({ kind: 'tinh-bot' }), caption: 'Tinh bột và cellulose gồm rất nhiều mắt xích C₆H₁₀O₅.' },
    { title: 'Tính chất hoá học', html: `<p><b>Thuỷ phân</b> (đun với acid loãng, hoặc nhờ enzyme) tạo glucose:</p>
      <p class="math">(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub> + nH<sub>2</sub>O → nC<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (acid, t°)</p>
      <p><b>Phản ứng màu:</b> hồ tinh bột gặp iodine tạo màu <b>xanh tím</b>; đun nóng thì mất màu, để nguội lại xuất hiện. Dùng để nhận biết tinh bột (và ngược lại, nhận biết iodine).</p>`,
      svg: S.tubesCompare({ title: 'Nhỏ dung dịch iodine vào các ống', cw: 160, tubes: [{ label: 'Nước cất', sub: 'vàng nâu nhạt', liquid: '#fde68a' }, { label: 'Hồ tinh bột', sub: 'xanh tím', liquid: '#6d28d9' }, { label: 'Dung dịch glucose', sub: 'vàng nâu nhạt', liquid: '#fde68a' }] }), caption: 'Chỉ ống chứa hồ tinh bột chuyển màu xanh tím khi gặp iodine.' },
    { title: 'Sự tạo thành và ứng dụng', html: `<p>Trong cây xanh: CO<sub>2</sub> + H<sub>2</sub>O → glucose (quang hợp) → tinh bột, cellulose.</p>
      <ul><li><b>Tinh bột</b>: lương thực chính của con người; sản xuất glucose, ethylic alcohol, hồ dán.</li><li><b>Cellulose</b>: làm giấy, vải sợi (bông), đồ gỗ, vật liệu xây dựng.</li></ul>
      <p>Trong ống tiêu hoá, tinh bột bị enzyme thuỷ phân dần thành glucose; người không tiêu hoá được cellulose, nhưng chất xơ giúp ruột hoạt động tốt.</p>` }
  ],
  summary: 'Tinh bột (hạt, củ) và cellulose (gỗ, bông) là polymer thiên nhiên (C₆H₁₀O₅)n. Đều bị thuỷ phân tạo glucose. Hồ tinh bột gặp iodine cho màu xanh tím. Cây xanh tạo ra chúng từ glucose sinh ra trong quang hợp. Tinh bột làm lương thực; cellulose làm giấy, vải, gỗ.',
  examples: [
    { title: 'Thuỷ phân tinh bột', problem: 'Thuỷ phân hoàn toàn 16,2 g tinh bột. Tính khối lượng glucose thu được.', solution: 'Cứ 162 g mắt xích cho 180 g glucose ⇒ m = 16,2 · 180 / 162 = 18 g.' },
    { title: 'Nhận biết', problem: 'Có ba lọ: hồ tinh bột, dung dịch glucose, dung dịch saccharose. Nêu cách nhận biết.', solution: 'Dùng iodine nhận ra hồ tinh bột (xanh tím). Dùng phản ứng tráng bạc nhận ra glucose. Còn lại là saccharose.' },
    { title: 'Giải thích', problem: 'Vì sao khi nhai kĩ cơm ta thấy vị ngọt?', solution: 'Enzyme amylase trong nước bọt thuỷ phân một phần tinh bột thành đường (maltose) có vị ngọt.' }
  ],
  exercises: [
    { question: 'Thuỷ phân hoàn toàn 1 kg tinh bột (hiệu suất 100 %). Tính khối lượng glucose (làm tròn đến hàng phần trăm kg).', hints: ['162 kg tinh bột → 180 kg glucose.', 'm = 1 · 180 / 162.'], solution: 'm ≈ 1,11 kg.' },
    { question: 'Nêu hai điểm giống và một điểm khác nhau giữa tinh bột và cellulose.', hints: ['Công thức chung và phản ứng thuỷ phân.', 'Tính tan, phản ứng với iodine.'], solution: 'Giống: đều là polymer (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>, đều thuỷ phân tạo glucose. Khác: tinh bột tạo màu xanh tím với iodine và tan một phần trong nước nóng; cellulose thì không.' },
    { question: 'Sản xuất ethylic alcohol từ 324 kg tinh bột (hiệu suất toàn bộ 100 %). Tính khối lượng alcohol.', hints: ['Mỗi mắt xích (162) → 1 glucose → 2 C<sub>2</sub>H<sub>5</sub>OH.', '324 / 162 = 2 kmol mắt xích.'], solution: 'n<sub>C₂H₅OH</sub> = 4 kmol; m = 4 · 46 = 184 kg.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hồ tinh bột gặp iodine tạo màu xanh tím.', answer: true, explain: 'Phản ứng đặc trưng nhận biết tinh bột.' },
    { type: 'mcq', q: 'Thuỷ phân hoàn toàn tinh bột thu được:', options: ['saccharose', 'glucose', 'ethylic alcohol', 'fructose và glucose'], answer: 1, explain: '(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub> + nH<sub>2</sub>O → nC<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.' },
    { type: 'mcq', q: 'Vật nào chứa nhiều cellulose nhất?', options: ['Gạo', 'Sợi bông', 'Khoai tây', 'Đường mía'], answer: 1, explain: 'Sợi bông gần như là cellulose tinh khiết.' },
    { type: 'short', q: 'Khối lượng một mắt xích C<sub>6</sub>H<sub>10</sub>O<sub>5</sub> là bao nhiêu (amu)?', answer: '162', unit: 'amu', calc: '6*12+10+5*16', explain: '72 + 10 + 80 = 162.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cellulose tan tốt trong nước nóng.', answer: false, explain: 'Cellulose không tan trong nước kể cả khi đun nóng.' },
    { type: 'short', q: 'Thuỷ phân hoàn toàn 32,4 g tinh bột thu được bao nhiêu gam glucose?', answer: '36', unit: 'g', calc: '32.4/162*180', explain: '0,2 mol mắt xích → 0,2 mol glucose = 36 g.' },
    { type: 'mcq', q: 'Tinh bột và cellulose được tạo thành trong cây xanh nhờ quá trình:', options: ['hô hấp', 'quang hợp', 'lên men', 'thoát hơi nước'], answer: 1, explain: 'Quang hợp tạo glucose, rồi chuyển thành tinh bột, cellulose.' },
    { type: 'mcq', q: 'Công thức chung của tinh bột và cellulose là:', options: ['C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>', 'C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>', '(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>', '(C<sub>2</sub>H<sub>4</sub>)<sub>n</sub>'], answer: 2, explain: 'Polymer của mắt xích C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>.' }
  ]
});
})();
