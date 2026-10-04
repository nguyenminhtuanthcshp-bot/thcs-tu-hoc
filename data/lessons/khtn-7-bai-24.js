/* KHTN 7 – Bài 24. Thực hành: Chứng minh quang hợp ở cây xanh. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-24', {
  objectives: [
    'Tiến hành được thí nghiệm chứng minh quang hợp ở cây xanh tạo ra tinh bột.',
    'Tiến hành được thí nghiệm chứng minh quang hợp giải phóng khí oxygen.',
    'Rèn luyện kĩ năng bố trí thí nghiệm có đối chứng, quan sát và viết báo cáo.'
  ],
  intro: 'Không nhìn thấy tinh bột hay khí oxygen được tạo ra trong lá, làm sao ta biết chắc lá cây có quang hợp? Hãy để dung dịch iodine và que đóm “làm chứng”.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Chậu cây khoai lang (hoặc cây trầu không, rau muống…) đã để trong bóng tối 2 ngày để tiêu hết tinh bột trong lá.</li><li>Băng giấy đen (giấy bạc), kẹp giấy; cồn 90°; dung dịch iodine loãng; đèn cồn, cốc thuỷ tinh, ống nghiệm, đĩa petri.</li><li>Cành rong đuôi chó, cốc nước, phễu thuỷ tinh, que đóm.</li></ul>
      <div class="box key">An toàn: đun cồn <b>cách thuỷ</b>, không đun trực tiếp trên lửa; tránh để dung dịch iodine dính vào mắt, da.</div>` },
    { title: 'Thí nghiệm 1: Quang hợp tạo ra tinh bột', html: `<ol><li>Dùng băng giấy đen bịt kín một phần lá ở cả hai mặt. Đặt chậu cây ra chỗ có ánh nắng 4 – 6 giờ.</li><li>Ngắt lá, bỏ băng giấy, cho lá vào cồn 90° đun cách thuỷ để tẩy hết diệp lục.</li><li>Rửa lá bằng nước ấm, cho vào đĩa, nhỏ dung dịch iodine loãng.</li></ol>
      <p><b>Kết quả</b>: phần lá được chiếu sáng chuyển màu <b>xanh tím</b> (có tinh bột); phần bị bịt giấy đen không có màu xanh tím.</p>
      <div class="box key">Kết luận: lá cây chỉ tạo được tinh bột khi có ánh sáng.</div>`,
      svg: S.starchTest(), caption: 'Các bước thí nghiệm chứng minh quang hợp tạo ra tinh bột (thử bằng iodine).' },
    { title: 'Thí nghiệm 2: Quang hợp giải phóng khí oxygen', html: `<ol><li>Cho cành rong đuôi chó vào cốc nước, úp phễu lên, úp ống nghiệm đầy nước lên cuống phễu (cốc A). Làm tương tự với cốc B.</li><li>Để cốc A ngoài sáng, cốc B trong tối (hoặc bọc giấy đen) khoảng 4 – 6 giờ.</li><li>Quan sát; lấy ống nghiệm cốc A ra (bịt miệng), đưa que đóm còn tàn đỏ vào.</li></ol>
      <p><b>Kết quả</b>: cốc A có bọt khí nổi lên, mực nước trong ống nghiệm hạ xuống; que đóm <b>bùng cháy</b>. Cốc B hầu như không có bọt khí.</p>
      <div class="box key">Kết luận: khi có ánh sáng, cây quang hợp giải phóng khí oxygen (khí duy trì sự cháy).</div>`,
      svg: S.elodeaExp(), caption: 'Rong đuôi chó ngoài sáng thải bọt khí oxygen, khí này làm que đóm bùng cháy.' },
    { title: 'Viết báo cáo thực hành', html: `<p>Báo cáo gồm: mục đích; chuẩn bị; các bước tiến hành; kết quả (bảng, hình vẽ); giải thích; kết luận. Chú ý chỉ rõ <b>mẫu thí nghiệm</b> và <b>mẫu đối chứng</b> (phần lá bị bịt, cốc B để trong tối).</p>` }
  ],
  summary: 'Thí nghiệm iodine: phần lá được chiếu sáng có màu xanh tím ⇒ quang hợp tạo tinh bột khi có ánh sáng. Thí nghiệm rong đuôi chó: ngoài sáng có bọt khí làm que đóm bùng cháy ⇒ quang hợp giải phóng oxygen. Luôn bố trí mẫu đối chứng.',
  examples: [
    { title: 'Vì sao để cây trong tối trước', problem: 'Vì sao phải để chậu cây trong bóng tối 2 ngày trước khi làm thí nghiệm 1?', solution: 'Để lá tiêu hết (vận chuyển đi) tinh bột có sẵn, nhờ đó tinh bột phát hiện sau thí nghiệm chắc chắn là do lá mới tạo ra khi được chiếu sáng.' },
    { title: 'Vì sao tẩy diệp lục', problem: 'Vì sao phải đun lá trong cồn trước khi nhỏ iodine?', solution: 'Cồn hoà tan diệp lục làm lá mất màu xanh, giúp dễ quan sát màu xanh tím của tinh bột khi gặp iodine.' },
    { title: 'Tính thời gian', problem: 'Chậu cây được để trong tối 2 ngày rồi để ngoài nắng 5 giờ. Tổng thời gian chuẩn bị và chiếu sáng là bao nhiêu giờ?', solution: '2 · 24 + 5 = 53 giờ.' }
  ],
  exercises: [
    { question: 'Trong thí nghiệm 1, đâu là phần thí nghiệm và đâu là phần đối chứng?', hints: ['Phần nào nhận ánh sáng?', 'Hai phần chỉ khác nhau ở yếu tố nào?'], solution: 'Phần lá được chiếu sáng là phần thí nghiệm; phần bị bịt giấy đen (không có ánh sáng) là đối chứng. Hai phần chỉ khác nhau ở yếu tố ánh sáng.' },
    { question: 'Một lá có diện tích 60 cm², bị bịt giấy đen 1/3 diện tích. Diện tích phần lá chuyển màu xanh tím khi thử iodine khoảng bao nhiêu cm²?', hints: ['Phần bị bịt: 60 : 3.', 'Phần chiếu sáng = toàn lá − phần bị bịt.'], solution: 'Bị bịt 20 cm²; phần chiếu sáng 60 − 20 = 40 cm² chuyển màu xanh tím.' },
    { question: 'Nếu thay rong đuôi chó bằng cành nhựa giả thì kết quả thí nghiệm 2 thế nào? Vì sao?', hints: ['Cành nhựa có lục lạp không?', 'Có quang hợp không?'], solution: 'Không có bọt khí oxygen, que đóm không bùng cháy, vì cành nhựa không có diệp lục, không quang hợp.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tinh bột gặp dung dịch iodine chuyển màu xanh tím.', answer: true, explain: 'Đây là phản ứng nhận biết tinh bột.' },
    { type: 'mcq', q: 'Chất dùng để tẩy diệp lục của lá trong thí nghiệm 1 là:', options: ['nước muối', 'cồn', 'giấm', 'dung dịch iodine'], answer: 1, explain: 'Diệp lục tan trong cồn.' },
    { type: 'mcq', q: 'Khí thu được trong ống nghiệm ở cốc rong đặt ngoài sáng làm que đóm còn tàn đỏ:', options: ['tắt ngay', 'bùng cháy', 'không đổi', 'chuyển màu xanh'], answer: 1, explain: 'Oxygen duy trì sự cháy.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phần lá bị bịt giấy đen chuyển màu xanh tím khi nhỏ iodine.', answer: false, explain: 'Không có ánh sáng nên không tạo tinh bột.' },
    { type: 'short', q: 'Lá 60 cm² bị bịt 1/3 diện tích. Phần lá được chiếu sáng có diện tích bao nhiêu cm²?', answer: '40', unit: 'cm²', calc: '60-60/3', explain: '60 − 20 = 40 cm².' },
    { type: 'short', q: 'Để chậu cây trong tối 2 ngày. Thời gian đó là bao nhiêu giờ?', answer: '48', unit: 'giờ', calc: '2*24', explain: '2 · 24 = 48 giờ.' },
    { type: 'mcq', q: 'Vì sao phải đun cồn cách thuỷ?', options: ['Để cồn sôi nhanh hơn', 'Vì cồn dễ bắt lửa, đun trực tiếp dễ gây cháy', 'Để iodine không bay hơi', 'Để lá có màu xanh hơn'], answer: 1, explain: 'Đảm bảo an toàn.' },
    { type: 'short', q: 'Cốc rong ngoài sáng: sau 5 giờ thu được 10 mL khí trong ống nghiệm. Trung bình mỗi giờ thu được bao nhiêu mL khí?', answer: '2', unit: 'mL', calc: '10/5', explain: '10 : 5 = 2 mL/giờ.' }
  ]
});
})();
