/* KHTN 7 – Bài 23. Một số yếu tố ảnh hưởng đến quang hợp. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var light = S.xyGraph({ series: [{ pts: [[0,0],[1,24],[2,44],[3,58],[4,68],[5,74],[6,78],[7,80],[8,81],[10,81]], color: '#16a34a' }], xmax: 10, ymax: 100, xstep: 2, ystep: 20, xlabel: 'Cường độ ánh sáng', ylabel: 'Cường độ quang hợp (tương đối)', noYnum: true, marks: [[7, 80, 'Điểm bão hoà ánh sáng', 0, -6]], label: 'Ảnh hưởng của cường độ ánh sáng đến quang hợp' });
var temp = S.xyGraph({ series: [{ pts: [[0,4],[5,10],[10,20],[15,34],[20,52],[25,70],[30,80],[35,70],[40,40],[45,12],[50,0]], color: '#ea580c' }], xmax: 50, ymax: 100, xstep: 10, ystep: 20, xlabel: 't (°C)', ylabel: 'Cường độ quang hợp (tương đối)', noYnum: true, proj: [[30, 80]], label: 'Ảnh hưởng của nhiệt độ đến quang hợp' });
THCS.registerLesson('khtn-7/bai-23', {
  objectives: [
    'Nêu được một số yếu tố chủ yếu ảnh hưởng đến quang hợp: ánh sáng, nước, carbon dioxide, nhiệt độ.',
    'Đọc và giải thích được đồ thị ảnh hưởng của ánh sáng, nhiệt độ đến quang hợp.',
    'Vận dụng hiểu biết về quang hợp để giải thích ý nghĩa của trồng và bảo vệ cây xanh, các biện pháp kĩ thuật trong trồng trọt.'
  ],
  intro: 'Vì sao nhà kính trồng rau thường được chiếu thêm đèn và bơm thêm khí carbon dioxide? Vì sao cây trồng dưới tán cây to thường còi cọc?',
  steps: [
    { title: 'Ánh sáng', html: `<p>Ánh sáng cung cấp năng lượng cho quang hợp. Khi cường độ ánh sáng tăng, quang hợp tăng dần; đến một mức nhất định (<b>điểm bão hoà ánh sáng</b>) thì quang hợp không tăng nữa. Ánh sáng quá mạnh có thể làm lá bị nóng, khí khổng đóng, quang hợp giảm.</p>
      <ul><li><b>Cây ưa sáng</b> (lúa, ngô, bạch đàn…) cần nhiều ánh sáng, thường mọc nơi quang đãng.</li><li><b>Cây ưa bóng</b> (lá lốt, trầu không, vạn niên thanh…) cần ít ánh sáng, sống được dưới tán cây khác.</li></ul>`,
      svg: light, caption: 'Quang hợp tăng theo cường độ ánh sáng rồi đạt giá trị ổn định ở điểm bão hoà.' },
    { title: 'Nước', html: `<p>Nước là <b>nguyên liệu</b> của quang hợp và giúp khí khổng mở. Thiếu nước, khí khổng đóng lại, carbon dioxide khó vào lá nên quang hợp giảm; thiếu nước nặng thì cây héo, có thể chết.</p>
      <p>Mỗi loại cây có nhu cầu nước khác nhau: cây lúa, rau muống cần nhiều nước; xương rồng, thanh long chịu hạn tốt.</p>` },
    { title: 'Carbon dioxide', html: `<p>Carbon dioxide là nguyên liệu của quang hợp. Không khí chứa khoảng <b>0,04%</b> khí carbon dioxide. Trong một giới hạn nhất định, tăng nồng độ carbon dioxide thì quang hợp tăng; nồng độ quá cao lại gây hại cho cây.</p>
      <div class="box key">Ứng dụng: trong nhà kính có thể bổ sung khí carbon dioxide để tăng năng suất; trồng cây với mật độ hợp lí để lá không che khuất nhau, không khí lưu thông.</div>` },
    { title: 'Nhiệt độ', html: `<p>Nhiệt độ ảnh hưởng đến quá trình tổng hợp chất trong lục lạp. Mỗi loài cây quang hợp tốt nhất trong một khoảng nhiệt độ; với phần lớn cây trồng vùng nhiệt đới khoảng <b>25 – 35 °C</b>. Nhiệt độ quá thấp hoặc quá cao (trên khoảng 40 °C) đều làm quang hợp giảm mạnh, thậm chí ngừng.</p>`,
      svg: temp, caption: 'Đồ thị minh hoạ: quang hợp mạnh nhất ở khoảng 30 °C, giảm mạnh khi nhiệt độ quá thấp hoặc quá cao.' },
    { title: 'Vận dụng trong trồng trọt và bảo vệ cây xanh', html: `<ul><li>Trồng cây đúng thời vụ, mật độ hợp lí; trồng xen cây ưa bóng dưới cây ưa sáng.</li><li>Tưới tiêu hợp lí; chiếu sáng bổ sung, điều chỉnh nhiệt độ trong nhà kính.</li><li>Trồng và bảo vệ rừng, cây xanh giúp hấp thụ carbon dioxide, cung cấp oxygen, điều hoà khí hậu.</li></ul>` }
  ],
  summary: 'Các yếu tố chủ yếu ảnh hưởng đến quang hợp: ánh sáng, nước, carbon dioxide, nhiệt độ. Quang hợp tăng theo cường độ ánh sáng đến điểm bão hoà; tăng theo nồng độ carbon dioxide trong giới hạn; mạnh nhất ở khoảng nhiệt độ thích hợp (khoảng 25 – 35 °C với nhiều cây nhiệt đới). Thiếu nước làm khí khổng đóng, quang hợp giảm.',
  examples: [
    { title: 'Đọc đồ thị ánh sáng', problem: 'Theo đồ thị ở bước 1, khi cường độ ánh sáng vượt quá điểm bão hoà thì cường độ quang hợp thay đổi thế nào?', solution: 'Cường độ quang hợp hầu như không tăng nữa (đồ thị nằm ngang) vì ánh sáng không còn là yếu tố hạn chế.' },
    { title: 'Tính lượng carbon dioxide', problem: 'Không khí chứa khoảng 0,04% carbon dioxide theo thể tích. Trong 1 000 L không khí có khoảng bao nhiêu lít carbon dioxide?', solution: '1 000 · 0,04 : 100 = 0,4 L.' },
    { title: 'Giải thích biện pháp', problem: 'Vì sao không nên trồng cây quá dày?', solution: 'Cây trồng dày thì lá che khuất nhau, thiếu ánh sáng, không khí kém lưu thông nên thiếu carbon dioxide; quang hợp giảm, cây còi cọc, dễ bị sâu bệnh.' }
  ],
  exercises: [
    { question: 'Kể tên 3 cây ưa sáng và 3 cây ưa bóng. Nên trồng xen chúng như thế nào?', hints: ['Cây ưa sáng thường cao, mọc nơi trống trải.', 'Cây ưa bóng chịu được nơi râm mát.'], solution: 'Ưa sáng: lúa, ngô, bạch đàn; ưa bóng: lá lốt, trầu không, gừng. Trồng cây ưa bóng dưới tán hoặc xen giữa hàng cây ưa sáng.' },
    { question: 'Vào buổi trưa hè nắng gắt, cường độ quang hợp của nhiều cây giảm. Giải thích.', hints: ['Nhiệt độ lúc đó thế nào?', 'Cây mất nhiều nước thì khí khổng ra sao?'], solution: 'Nhiệt độ quá cao và cây mất nhiều nước nên khí khổng đóng bớt, carbon dioxide vào lá ít; nhiệt độ cao cũng ức chế quá trình tổng hợp chất ⇒ quang hợp giảm.' },
    { question: 'Một nhà kính 200 m³ chứa không khí có 0,04% carbon dioxide. Người ta bơm thêm để nồng độ đạt 0,1%. Thể tích carbon dioxide trong nhà kính tăng thêm bao nhiêu m³?', hints: ['Nồng độ tăng thêm 0,1% − 0,04% = 0,06%.', 'Tính 0,06% của 200 m³.'], solution: '200 · 0,06 : 100 = 0,12 m³.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ánh sáng, nước, carbon dioxide và nhiệt độ đều ảnh hưởng đến quang hợp.', answer: true, explain: 'Đó là bốn yếu tố chủ yếu.' },
    { type: 'mcq', q: 'Cây nào sau đây là cây ưa bóng?', options: ['Lúa', 'Ngô', 'Lá lốt', 'Bạch đàn'], answer: 2, explain: 'Lá lốt sống tốt nơi râm mát.' },
    { type: 'mcq', q: 'Khi thiếu nước, quang hợp giảm chủ yếu vì:', options: ['khí khổng đóng, carbon dioxide khó vào lá', 'lá nhận quá nhiều ánh sáng', 'diệp lục biến thành tinh bột', 'rễ hút quá nhiều muối khoáng'], answer: 0, explain: 'Nước còn là nguyên liệu của quang hợp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cường độ ánh sáng càng tăng thì quang hợp luôn tăng mãi không giới hạn.', answer: false, explain: 'Đến điểm bão hoà thì không tăng nữa.' },
    { type: 'short', q: 'Không khí chứa khoảng 0,04% carbon dioxide. Trong 1 000 L không khí có khoảng bao nhiêu lít carbon dioxide?', answer: '0,4', unit: 'L', calc: '1000*0.04/100', explain: '1 000 · 0,0004 = 0,4 L.' },
    { type: 'mcq', q: 'Theo đồ thị ở bước 4, quang hợp mạnh nhất ở khoảng nhiệt độ:', options: ['0 °C', '10 °C', '30 °C', '50 °C'], answer: 2, explain: 'Đỉnh đồ thị ở khoảng 30 °C.' },
    { type: 'short', q: 'Nhà kính 200 m³, nồng độ carbon dioxide tăng từ 0,04% lên 0,1%. Thể tích carbon dioxide tăng thêm bao nhiêu m³?', answer: '0,12', unit: 'm³', calc: '200*(0.1-0.04)/100', explain: '200 · 0,06% = 0,12 m³.' },
    { type: 'short', q: 'Nhiệt độ thích hợp cho quang hợp của một loại cây là từ 25 °C đến 35 °C. Khoảng nhiệt độ này rộng bao nhiêu °C?', answer: '10', unit: '°C', calc: '35-25', explain: '35 − 25 = 10 °C.' }
  ]
});
})();
