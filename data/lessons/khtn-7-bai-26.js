/* KHTN 7 – Bài 26. Một số yếu tố ảnh hưởng đến hô hấp tế bào. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var temp = S.xyGraph({ series: [{ pts: [[0,4],[5,8],[10,14],[15,22],[20,34],[25,48],[30,62],[35,70],[40,56],[45,26],[50,6]], color: '#dc2626' }], xmax: 50, ymax: 100, xstep: 10, ystep: 20, xlabel: 't (°C)', ylabel: 'Cường độ hô hấp (tương đối)', noYnum: true, proj: [[35, 70]], label: 'Ảnh hưởng của nhiệt độ đến hô hấp' });
var water = S.bar({ title: 'Cường độ hô hấp của hạt thóc (tương đối)', cats: ['Độ ẩm 12%', 'Độ ẩm 16%', 'Độ ẩm 20%', 'Độ ẩm 25%'], series: [{ name: 'Hô hấp', values: [1, 4, 20, 60], color: '#0284c7' }], yMax: 60, yStep: 10, width: 560, height: 300 });
THCS.registerLesson('khtn-7/bai-26', {
  objectives: [
    'Nêu được một số yếu tố chủ yếu ảnh hưởng đến hô hấp tế bào: nhiệt độ, hàm lượng nước, nồng độ khí oxygen và carbon dioxide.',
    'Nêu được một số vận dụng hiểu biết về hô hấp tế bào trong thực tiễn, ví dụ bảo quản lương thực, thực phẩm.',
    'Giải thích được cơ sở khoa học của các biện pháp bảo quản nông sản.'
  ],
  intro: 'Thóc phơi chưa khô đem cất vào kho sẽ nhanh chóng nóng lên, bốc mùi và nảy mầm. Rau quả để trong tủ lạnh lại tươi được lâu. Vì sao vậy?',
  steps: [
    { title: 'Nhiệt độ', html: `<p>Hô hấp gồm nhiều phản ứng hoá học chịu ảnh hưởng của nhiệt độ. Trong giới hạn, nhiệt độ tăng thì hô hấp tăng; hô hấp mạnh nhất ở nhiệt độ thích hợp (khoảng 30 – 35 °C với nhiều loài cây); nhiệt độ quá cao thì hô hấp giảm mạnh, tế bào có thể chết. Nhiệt độ thấp làm hô hấp chậm lại.</p>`,
      svg: temp, caption: 'Đồ thị minh hoạ: hô hấp tăng theo nhiệt độ đến mức thích hợp rồi giảm mạnh.' },
    { title: 'Hàm lượng nước', html: `<p>Nước là môi trường cho các phản ứng hô hấp. <b>Cơ thể, cơ quan càng nhiều nước thì hô hấp càng mạnh</b>: hạt khô hô hấp rất yếu, hạt ngâm nước (hạt nảy mầm) hô hấp mạnh.</p>`,
      svg: water, caption: 'Số liệu minh hoạ: độ ẩm của hạt thóc càng cao thì cường độ hô hấp càng lớn.' },
    { title: 'Nồng độ oxygen và carbon dioxide', html: `<ul><li><b>Oxygen</b> là nguyên liệu của hô hấp: thiếu oxygen thì hô hấp giảm. Ví dụ đất bị ngập úng lâu, rễ cây thiếu oxygen, hô hấp kém, cây có thể chết.</li><li><b>Carbon dioxide</b> là sản phẩm của hô hấp: nồng độ carbon dioxide cao sẽ ức chế hô hấp.</li></ul>` },
    { title: 'Vận dụng: bảo quản lương thực, thực phẩm', html: `<p>Nguyên tắc: <b>giảm cường độ hô hấp</b> tới mức tối thiểu (không làm chết hoặc hỏng nông sản) để hạn chế tiêu hao chất hữu cơ.</p>
      <table class="tbl"><tr><th>Biện pháp</th><th>Ví dụ</th><th>Cơ sở</th></tr>
      <tr><td>Bảo quản lạnh</td><td>Rau, quả, thịt, cá trong tủ lạnh</td><td>Nhiệt độ thấp làm hô hấp chậm</td></tr>
      <tr><td>Bảo quản khô</td><td>Phơi khô thóc, ngô, đậu trước khi cất</td><td>Ít nước, hô hấp rất yếu</td></tr>
      <tr><td>Bảo quản trong khí carbon dioxide / hút chân không</td><td>Kho kín bơm carbon dioxide, túi hút chân không</td><td>Thiếu oxygen, nhiều carbon dioxide ức chế hô hấp</td></tr></table>
      <p>Trong trồng trọt: làm đất tơi xốp, thoát nước tốt để rễ đủ oxygen.</p>` }
  ],
  summary: 'Nhiệt độ, hàm lượng nước, nồng độ oxygen và carbon dioxide ảnh hưởng đến hô hấp tế bào. Hô hấp mạnh nhất ở nhiệt độ thích hợp; nhiều nước thì hô hấp mạnh; thiếu oxygen hoặc nhiều carbon dioxide thì hô hấp giảm. Bảo quản nông sản: lạnh, khô, giảm oxygen/tăng carbon dioxide để giảm hô hấp.',
  examples: [
    { title: 'Vì sao phải phơi khô thóc', problem: 'Vì sao phải phơi thật khô thóc trước khi cất vào kho?', solution: 'Hạt khô chứa ít nước nên hô hấp rất yếu, ít tiêu hao chất hữu cơ, ít toả nhiệt, không nảy mầm và khó bị nấm mốc.' },
    { title: 'Tính lượng nước mất đi', problem: '100 kg thóc tươi có độ ẩm 25%, sau khi phơi còn 85 kg thóc khô. Thóc đã mất bao nhiêu kg nước?', solution: 'Khối lượng giảm chính là nước bay hơi: 100 − 85 = 15 kg.' },
    { title: 'Giải thích hiện tượng ngập úng', problem: 'Vì sao cây trồng cạn (ngô, đậu) bị ngập nước lâu ngày thường bị chết?', solution: 'Đất ngập nước thiếu oxygen, rễ không hô hấp được, thiếu năng lượng để hút nước và muối khoáng nên rễ thối, cây chết.' }
  ],
  exercises: [
    { question: 'Nêu 3 biện pháp bảo quản rau quả và giải thích cơ sở khoa học của mỗi biện pháp.', hints: ['Nghĩ đến nhiệt độ và khí.', 'Mỗi biện pháp đều nhằm giảm hô hấp.'], solution: 'Để tủ lạnh (nhiệt độ thấp làm giảm hô hấp); bảo quản trong túi kín hoặc kho có nhiều carbon dioxide (ức chế hô hấp); làm khô (sấy khô trái cây, ít nước nên hô hấp yếu).' },
    { question: 'Vì sao không nên để khoai tây, hạt giống trong túi ni lông kín ở nơi ẩm, nóng?', hints: ['Nơi nóng, ẩm thì hô hấp thế nào?', 'Hô hấp mạnh tạo ra những gì?'], solution: 'Nơi nóng, ẩm làm hô hấp mạnh: tiêu hao chất hữu cơ, toả nhiệt, sinh hơi nước làm túi ẩm, dễ nảy mầm, thối hỏng.' },
    { question: 'Kho có 2 000 kg ngô; mỗi tháng hô hấp làm hao hụt 0,5% khối lượng. Sau 1 tháng hao hụt bao nhiêu kg?', hints: ['0,5% = 0,5/100.', 'Nhân với 2 000 kg.'], solution: '2 000 · 0,5 : 100 = 10 kg.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hạt khô hô hấp yếu hơn hạt đang nảy mầm.', answer: true, explain: 'Hạt khô chứa ít nước.' },
    { type: 'mcq', q: 'Yếu tố nào KHÔNG phải yếu tố chủ yếu ảnh hưởng đến hô hấp tế bào?', options: ['Nhiệt độ', 'Hàm lượng nước', 'Nồng độ oxygen', 'Màu sắc của vỏ hạt'], answer: 3, explain: 'Màu vỏ hạt không ảnh hưởng trực tiếp.' },
    { type: 'mcq', q: 'Bảo quản rau quả trong tủ lạnh dựa trên nguyên tắc:', options: ['tăng hô hấp', 'giảm hô hấp bằng nhiệt độ thấp', 'tăng lượng nước', 'tăng lượng oxygen'], answer: 1, explain: 'Nhiệt độ thấp làm hô hấp chậm lại.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nồng độ carbon dioxide cao làm hô hấp tế bào mạnh lên.', answer: false, explain: 'Carbon dioxide cao ức chế hô hấp.' },
    { type: 'short', q: '100 kg thóc tươi sau khi phơi còn 85 kg. Lượng nước đã bay hơi là bao nhiêu kg?', answer: '15', unit: 'kg', calc: '100-85', explain: '100 − 85 = 15 kg.' },
    { type: 'short', q: 'Kho 2 000 kg ngô hao hụt 0,5% mỗi tháng do hô hấp. Sau 1 tháng hao hụt bao nhiêu kg?', answer: '10', unit: 'kg', calc: '2000*0.5/100', explain: '2 000 · 0,005 = 10 kg.' },
    { type: 'mcq', q: 'Theo biểu đồ ở bước 2, hạt thóc hô hấp mạnh nhất khi độ ẩm là:', options: ['12%', '16%', '20%', '25%'], answer: 3, explain: 'Độ ẩm càng cao, hô hấp càng mạnh.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 2, cường độ hô hấp của hạt ở độ ẩm 25% gấp bao nhiêu lần ở độ ẩm 20%?', answer: '3', unit: 'lần', calc: '60/20', explain: '60 : 20 = 3 lần.' }
  ]
});
})();
