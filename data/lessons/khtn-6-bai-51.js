/* KHTN 6 – Bài 51. Tiết kiệm năng lượng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-51', {
  objectives: [
    'Nêu được vì sao cần tiết kiệm năng lượng.',
    'Đề xuất được các biện pháp tiết kiệm năng lượng trong gia đình, trường học.',
    'Tính được lượng điện tiêu thụ (số điện, kWh) của thiết bị đơn giản để so sánh và lựa chọn cách dùng tiết kiệm.'
  ],
  intro: 'Mỗi tháng, gia đình em trả tiền điện, tiền gas, tiền xăng. Dùng năng lượng tiết kiệm vừa giảm chi phí vừa bảo vệ môi trường và giữ tài nguyên cho tương lai.',
  steps: [
    { title: 'Vì sao cần tiết kiệm năng lượng?', html: `<ul><li>Các nguồn năng lượng không tái tạo (than, dầu, khí) đang cạn dần.</li><li>Sản xuất điện từ than, dầu thải khí carbon dioxide và khói bụi, gây ô nhiễm và biến đổi khí hậu.</li>
      <li>Giảm chi phí cho gia đình và xã hội.</li></ul>
      <div class="box key">Tiết kiệm năng lượng là sử dụng năng lượng <b>hợp lí, đúng lúc, đúng mức</b>, không lãng phí – không phải là không dùng.</div>` },
    { title: 'Biện pháp tiết kiệm ở gia đình', html: `<ul><li>Tắt đèn, quạt, tivi, điều hoà khi ra khỏi phòng; rút sạc khi đã đầy pin.</li><li>Dùng đèn LED, thiết bị có nhãn tiết kiệm năng lượng.</li>
      <li>Tận dụng ánh sáng, gió tự nhiên: mở cửa sổ, sơn tường màu sáng.</li><li>Đặt điều hoà ở khoảng 26–28 °C; đóng kín cửa khi bật điều hoà.</li>
      <li>Không mở tủ lạnh quá lâu; không cho thức ăn còn nóng vào tủ lạnh.</li><li>Đậy nắp nồi khi nấu; chọn ngọn lửa vừa đáy nồi.</li><li>Đi bộ, đi xe đạp, xe buýt thay cho xe máy, ô tô cá nhân khi có thể.</li></ul>` },
    { title: 'Đọc và tính "số điện"', html: `<p>Công tơ điện đo điện năng tiêu thụ theo đơn vị <b>kilôoát giờ (kWh)</b>, quen gọi là "<b>số điện</b>". Trên thiết bị ghi con số như 60 W, 1 000 W cho biết mức tiêu thụ điện mỗi giờ.</p>
      <div class="box key">Số điện (kWh) = (số oát ghi trên thiết bị × số giờ sử dụng) : 1 000</div>
      <p>Ví dụ: bóng đèn 100 W bật 10 giờ tiêu thụ 100 × 10 : 1 000 = 1 kWh (1 số điện).</p>`,
      svg: S.bar({ cats: ['Đèn sợi đốt 60 W', 'Đèn LED 9 W'], series: [{ name: 'Số điện dùng trong 30 ngày', values: [9, 1.35], color: '#f59e0b' }], width: 520, height: 280, title: 'Số điện dùng trong 30 ngày, mỗi ngày 5 giờ' }),
      caption: 'Hai bóng đèn sáng tương đương: đèn LED dùng ít điện hơn hẳn.' },
    { title: 'Tiết kiệm ở trường học', html: `<ul><li>Tắt đèn, quạt khi ra chơi, khi tan học; phân công bạn trực nhật kiểm tra.</li><li>Kéo rèm, mở cửa sổ để lấy ánh sáng tự nhiên.</li>
      <li>Tuyên truyền, làm khẩu hiệu "Tắt khi không dùng"; hưởng ứng Giờ Trái Đất.</li></ul>` }
  ],
  summary: 'Cần tiết kiệm năng lượng vì nguồn không tái tạo đang cạn, sản xuất năng lượng gây ô nhiễm và tốn kém. Tiết kiệm bằng cách tắt thiết bị khi không dùng, dùng đèn LED và thiết bị hiệu quả, tận dụng ánh sáng và gió tự nhiên, đi lại bằng phương tiện công cộng. Số điện (kWh) = số oát × số giờ : 1 000.',
  examples: [
    { title: 'Tính số điện', problem: 'Một quạt 50 W chạy 8 giờ mỗi ngày. Mỗi ngày quạt tiêu thụ bao nhiêu số điện?', solution: '50 × 8 : 1 000 = <b>0,4 kWh</b>.' },
    { title: 'So sánh hai đèn', problem: 'Đèn sợi đốt 60 W và đèn LED 9 W sáng tương đương, mỗi ngày bật 5 giờ trong 30 ngày. Mỗi đèn dùng bao nhiêu số điện? Tiết kiệm được bao nhiêu?', solution: 'Sợi đốt: 60 × 5 × 30 : 1 000 = <b>9 kWh</b>. LED: 9 × 5 × 30 : 1 000 = <b>1,35 kWh</b>. Tiết kiệm: 9 − 1,35 = <b>7,65 kWh</b>.' },
    { title: 'Hành động', problem: 'Nêu hai việc em có thể làm ngay hôm nay để tiết kiệm điện ở nhà.', solution: 'Tắt đèn, quạt khi ra khỏi phòng; rút sạc điện thoại khi pin đã đầy (hoặc: mở cửa sổ học bài ban ngày thay vì bật đèn).' }
  ],
  exercises: [
    { question: 'Nồi cơm điện 700 W dùng 1 giờ mỗi ngày. Trong 30 ngày tiêu thụ bao nhiêu số điện?', hints: ['Số điện một ngày = 700 × 1 : 1 000.', 'Nhân với 30 ngày.'], solution: 'Một ngày: 0,7 kWh. 30 ngày: 0,7 × 30 = <b>21 kWh</b>.' },
    { question: 'Tivi 100 W, mỗi ngày gia đình xem 4 giờ. Nếu giảm xuống 3 giờ mỗi ngày thì trong 30 ngày tiết kiệm được bao nhiêu số điện?', hints: ['Mỗi ngày giảm 1 giờ.', '100 × 1 × 30 : 1 000.'], solution: 'Mỗi ngày giảm 1 giờ: 100 × 1 : 1 000 = 0,1 kWh. 30 ngày: 0,1 × 30 = <b>3 kWh</b>.' },
    { question: 'Vì sao không nên cho thức ăn còn nóng vào tủ lạnh?', hints: ['Tủ lạnh phải làm gì với thức ăn nóng?', 'Hơi nóng ảnh hưởng đến các thực phẩm khác và máy nén thế nào?'], solution: 'Thức ăn nóng làm nhiệt độ trong tủ tăng, tủ lạnh phải chạy nhiều hơn để làm lạnh → <b>tốn điện</b>; hơi nóng còn ảnh hưởng thực phẩm khác. Nên để thức ăn nguội bớt (nhưng không để quá lâu ngoài trời) rồi mới cất.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Việc làm nào giúp tiết kiệm năng lượng?', options: ['Tắt đèn khi ra khỏi phòng', 'Mở tủ lạnh thật lâu', 'Bật điều hoà 18 °C và mở cửa sổ', 'Để tivi bật khi đi ngủ'], answer: 0, explain: 'Tắt thiết bị khi không dùng.' },
    { type: 'short', q: 'Bóng đèn 100 W bật 10 giờ tiêu thụ bao nhiêu kWh?', answer: '1', unit: 'kWh', calc: '100*10/1000', explain: '100 × 10 : 1 000 = 1 kWh.' },
    { type: 'short', q: 'Quạt 40 W chạy 5 giờ tiêu thụ bao nhiêu kWh? (dùng dấu phẩy)', answer: '0,2', unit: 'kWh', calc: '40*5/1000', explain: '40 × 5 : 1 000 = 0,2 kWh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tiết kiệm năng lượng nghĩa là không sử dụng điện.', answer: false, explain: 'Tiết kiệm là dùng hợp lí, không lãng phí.' },
    { type: 'mcq', q: 'Loại bóng đèn nên dùng để tiết kiệm điện là:', options: ['Đèn LED', 'Đèn sợi đốt', 'Đèn dầu', 'Nến'], answer: 0, explain: 'Đèn LED ít hao phí.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đi xe đạp thay xe máy khi đi quãng đường ngắn giúp tiết kiệm năng lượng.', answer: true, explain: 'Không tốn xăng, không thải khói.' },
    { type: 'short', q: 'Theo biểu đồ, trong 30 ngày đèn sợi đốt dùng nhiều hơn đèn LED bao nhiêu số điện? (dùng dấu phẩy)', svg: S.bar({ cats: ['Đèn sợi đốt 60 W', 'Đèn LED 9 W'], series: [{ name: 'Số điện', values: [9, 1.35], color: '#f59e0b' }], width: 520, height: 280, title: 'Số điện dùng trong 30 ngày' }), answer: '7,65', unit: 'kWh', calc: '9-1.35', explain: '9 − 1,35 = 7,65 kWh.' },
    { type: 'mcq', q: 'Nhiệt độ điều hoà nên đặt để tiết kiệm điện là khoảng:', options: ['26–28 °C', '16–18 °C', '10 °C', '35 °C'], answer: 0, explain: 'Chênh lệch ít với bên ngoài, đỡ tốn điện.' }
  ]
});
})();
