/* KHTN 7 – Bài 15. Năng lượng ánh sáng. Tia sáng, vùng tối. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-15', {
  objectives: [
    'Nêu được ánh sáng là một dạng của năng lượng; lấy được ví dụ về sự chuyển hoá năng lượng ánh sáng.',
    'Biểu diễn được tia sáng; phân biệt được ba loại chùm sáng: song song, hội tụ, phân kì.',
    'Vẽ được hình biểu diễn vùng tối (bóng tối) và vùng nửa tối (bóng nửa tối) do nguồn sáng hẹp, nguồn sáng rộng tạo ra.'
  ],
  intro: 'Ánh nắng làm ta thấy ấm, làm cây xanh lớn lên, làm tấm pin trên mái nhà phát điện. Ánh sáng không chỉ giúp ta nhìn thấy mọi vật – nó còn mang <b>năng lượng</b>.',
  steps: [
    { title: 'Ánh sáng là một dạng năng lượng', html: `<p><b>Năng lượng ánh sáng</b> (quang năng) có thể chuyển hoá thành các dạng năng lượng khác:</p>
      <ul><li><b>Điện năng:</b> pin mặt trời biến quang năng thành điện năng.</li><li><b>Nhiệt năng:</b> ánh nắng làm nóng nước trong bình nước nóng năng lượng mặt trời, phơi khô quần áo, nông sản.</li><li><b>Hoá năng:</b> cây xanh dùng ánh sáng để quang hợp, tích luỹ năng lượng trong chất hữu cơ.</li></ul>` },
    { title: 'Tia sáng và chùm sáng', html: `<p>Trong môi trường trong suốt và đồng tính (không khí, nước, thuỷ tinh), ánh sáng truyền theo <b>đường thẳng</b>.</p>
      <p><b>Tia sáng</b> được biểu diễn bằng một đường thẳng có mũi tên chỉ hướng truyền ánh sáng. Một <b>chùm sáng</b> gồm nhiều tia sáng. Có ba loại chùm sáng:</p>
      <ul><li><b>Song song:</b> các tia không giao nhau.</li><li><b>Hội tụ:</b> các tia giao nhau tại một điểm trên đường truyền.</li><li><b>Phân kì:</b> các tia loe rộng ra.</li></ul>`,
      svg: S.lightBeams(), caption: 'Ba loại chùm sáng.' },
    { title: 'Vùng tối sau vật cản', html: `<p>Khi chiếu ánh sáng từ một <b>nguồn sáng nhỏ</b> (hẹp) vào một vật chắn sáng, phía sau vật có một vùng không nhận được ánh sáng, gọi là <b>vùng tối</b> (bóng tối).</p>
      <p>Vì ánh sáng truyền thẳng, ta vẽ vùng tối bằng các tia sáng đi từ nguồn sáng qua mép vật cản.</p>`,
      svg: S.shadowScene({ source: 'point' }), caption: 'Nguồn sáng nhỏ: sau vật cản chỉ có vùng tối, xung quanh là vùng được chiếu sáng.' },
    { title: 'Vùng nửa tối', html: `<p>Với <b>nguồn sáng rộng</b>, phía sau vật cản có:</p>
      <ul><li><b>Vùng tối:</b> không nhận được ánh sáng từ bất kì điểm nào của nguồn.</li><li><b>Vùng nửa tối:</b> chỉ nhận được ánh sáng từ một phần của nguồn sáng.</li></ul>
      <p>Hiện tượng nhật thực, nguyệt thực cũng được giải thích bằng vùng tối, vùng nửa tối do Mặt Trăng hoặc Trái Đất tạo ra.</p>`,
      svg: S.shadowScene({ source: 'large' }), caption: 'Nguồn sáng rộng tạo ra vùng tối ở giữa và vùng nửa tối ở hai bên.' }
  ],
  summary: 'Ánh sáng là một dạng năng lượng, có thể chuyển hoá thành điện năng, nhiệt năng, hoá năng. Ánh sáng truyền thẳng trong môi trường trong suốt, đồng tính. Tia sáng: đường thẳng có mũi tên. Chùm sáng: song song, hội tụ, phân kì. Nguồn sáng hẹp tạo vùng tối; nguồn sáng rộng tạo vùng tối và vùng nửa tối.',
  examples: [
    { title: 'Chuyển hoá năng lượng', problem: 'Nêu sự chuyển hoá năng lượng trong: (a) đèn đường chạy bằng pin mặt trời; (b) bình nước nóng năng lượng mặt trời.', solution: '(a) Ban ngày quang năng → điện năng (nạp vào pin); ban đêm điện năng → quang năng (đèn sáng). (b) Quang năng → nhiệt năng làm nóng nước.' },
    { title: 'Kích thước bóng tối', problem: 'Một bóng đèn nhỏ cách tấm bìa tròn đường kính 10 cm là 1 m; màn chắn cách bóng đèn 3 m, song song với bìa. Tính đường kính vùng tối trên màn.', solution: 'Các tia từ đèn qua mép bìa loe ra theo tỉ lệ khoảng cách: đường kính bóng = 10 · 3 : 1 = 30 cm.' },
    { title: 'Nhận dạng chùm sáng', problem: 'Ánh sáng từ đèn pin loe rộng ra khi đi xa. Đó là chùm sáng gì?', solution: 'Chùm sáng phân kì.' }
  ],
  exercises: [
    { question: 'Ánh sáng từ Mặt Trời đến Trái Đất mất khoảng 500 s. Biết tốc độ ánh sáng khoảng 300 000 km/s, tính khoảng cách từ Mặt Trời đến Trái Đất.', hints: ['Dùng s = v · t.', 'v = 300 000 km/s; t = 500 s.'], solution: 's = 300 000 · 500 = 150 000 000 km (150 triệu km).' },
    { question: 'Vì sao đứng dưới đèn ống dài (nguồn sáng rộng), bóng của bàn tay trên mặt bàn có phần giữa đậm và viền mờ?', hints: ['Nguồn sáng rộng tạo ra mấy loại vùng?', 'Phần viền nhận ánh sáng từ một phần nguồn.'], solution: 'Phần giữa là vùng tối (không nhận ánh sáng từ điểm nào của đèn); viền là vùng nửa tối (nhận ánh sáng từ một phần của đèn) nên mờ hơn.' },
    { question: 'Nêu một cách kiểm tra ánh sáng truyền theo đường thẳng bằng ba tấm bìa đục lỗ và một ngọn nến.', hints: ['Xếp ba lỗ như thế nào thì nhìn thấy ngọn nến?', 'Nếu dịch một tấm bìa thì sao?'], solution: 'Đặt ba tấm bìa có lỗ nhỏ sao cho ba lỗ và ngọn nến thẳng hàng: nhìn qua lỗ thấy ngọn nến. Dịch một tấm bìa lệch đi thì không thấy nữa ⇒ ánh sáng truyền theo đường thẳng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ánh sáng là một dạng của năng lượng.', answer: true, explain: 'Ánh sáng có thể chuyển hoá thành điện năng, nhiệt năng, hoá năng.' },
    { type: 'mcq', q: 'Pin mặt trời chuyển hoá năng lượng ánh sáng thành:', options: ['cơ năng', 'điện năng', 'hoá năng', 'âm năng'], answer: 1, explain: 'Pin mặt trời tạo ra dòng điện.' },
    { type: 'mcq', q: 'Chùm sáng gồm các tia giao nhau tại một điểm là chùm sáng:', options: ['song song', 'hội tụ', 'phân kì', 'tán xạ'], answer: 1, explain: 'Các tia hội tụ tại một điểm.' },
    { type: 'short', q: 'Ánh sáng đi từ Mặt Trời đến Trái Đất mất 500 s, tốc độ ánh sáng 300 000 km/s. Khoảng cách là bao nhiêu km?', answer: '150000000', unit: 'km', calc: '300000*500', explain: '300 000 · 500 = 150 000 000 km.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nguồn sáng nhỏ (hẹp) tạo ra cả vùng tối và vùng nửa tối phía sau vật cản.', answer: false, explain: 'Nguồn sáng hẹp chỉ tạo vùng tối; nguồn sáng rộng mới có vùng nửa tối.' },
    { type: 'short', q: 'Đèn nhỏ cách tấm bìa tròn đường kính 10 cm là 1 m; màn cách đèn 3 m. Đường kính vùng tối trên màn là bao nhiêu cm?', answer: '30', unit: 'cm', calc: '10*3/1', explain: '10 · 3 : 1 = 30 cm.' },
    { type: 'mcq', q: 'Vùng nửa tối là vùng:', options: ['không nhận được ánh sáng từ nguồn', 'nhận được ánh sáng từ một phần của nguồn sáng', 'nhận được ánh sáng từ toàn bộ nguồn', 'nằm trước vật cản'], answer: 1, explain: 'Đó là định nghĩa vùng nửa tối.' },
    { type: 'short', q: 'Một tấm pin mặt trời nhận 1 000 J năng lượng ánh sáng và tạo ra 180 J điện năng. Phần năng lượng không chuyển thành điện năng là bao nhiêu J?', answer: '820', unit: 'J', calc: '1000-180', explain: '1 000 − 180 = 820 J (chủ yếu thành nhiệt năng).' }
  ]
});
})();
