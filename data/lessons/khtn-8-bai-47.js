/* KHTN 8 – Bài 47. Bảo vệ môi trường. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-47', {
  objectives: [
    'Nêu được tác động của con người đối với môi trường qua các thời kì.',
    'Nêu được khái niệm ô nhiễm môi trường, các nguyên nhân gây ô nhiễm và biện pháp hạn chế.',
    'Trình bày được sơ lược về biến đổi khí hậu và biện pháp thích ứng.',
    'Nêu được tầm quan trọng của bảo vệ động vật hoang dã và thực hiện được một số hành động bảo vệ môi trường.'
  ],
  intro: 'Rác thải nhựa trôi nổi trên biển, không khí ô nhiễm ở các thành phố lớn, những đợt nắng nóng kỉ lục… Môi trường đang thay đổi thế nào và em có thể làm gì để bảo vệ “ngôi nhà chung”?',
  steps: [
    { title: 'Tác động của con người tới môi trường', html: `<ul><li>Thời kì nguyên thuỷ: săn bắt, hái lượm, dùng lửa – tác động nhỏ.</li><li>Xã hội nông nghiệp: chặt phá rừng lấy đất canh tác, chăn thả.</li><li>Xã hội công nghiệp: khai thác tài nguyên mạnh, đô thị hoá, sử dụng nhiều nhiên liệu hoá thạch, gây ô nhiễm; đồng thời con người cũng trồng rừng, bảo tồn, phát triển công nghệ sạch.</li></ul>` },
    { title: 'Ô nhiễm môi trường', html: `<p><b>Ô nhiễm môi trường</b> là sự thay đổi tính chất của môi trường (không khí, nước, đất…), gây ảnh hưởng xấu đến con người và sinh vật.</p>
      <ul><li>Nguyên nhân: khí thải từ phương tiện giao thông, nhà máy, đốt nhiên liệu; hoá chất bảo vệ thực vật; chất thải sinh hoạt (rác nhựa), chất thải công nghiệp; chất phóng xạ…</li><li>Biện pháp: xử lí chất thải; giảm dùng túi nilon, phân loại rác; sử dụng năng lượng sạch (mặt trời, gió); trồng cây xanh; hạn chế thuốc trừ sâu hoá học.</li></ul>`,
      svg: S.pieChart({ title: 'Thành phần rác thải sinh hoạt của một khu dân cư (số liệu minh hoạ)', parts: [{ label: 'Rác hữu cơ', v: 60, color: '#16a34a' }, { label: 'Nhựa, nilon', v: 15, color: '#2563eb' }, { label: 'Giấy', v: 10, color: '#f59e0b' }, { label: 'Kim loại, thuỷ tinh', v: 5, color: '#64748b' }, { label: 'Loại khác', v: 10, color: '#a855f7' }] }), caption: 'Phân loại rác tại nguồn giúp tái chế và ủ phân hữu cơ (số liệu minh hoạ).' },
    { title: 'Biến đổi khí hậu', html: `<p><b>Biến đổi khí hậu</b> là sự thay đổi của khí hậu (nhiệt độ, lượng mưa…) kéo dài, chủ yếu do con người thải nhiều khí nhà kính (CO<sub>2</sub>, CH<sub>4</sub>…) làm Trái Đất nóng lên.</p>
      <ul><li>Hậu quả: băng tan, nước biển dâng, thời tiết cực đoan (bão, lũ, hạn hán, nắng nóng), suy giảm đa dạng sinh học.</li><li>Thích ứng và giảm nhẹ: tiết kiệm điện, dùng năng lượng tái tạo, đi xe đạp, phương tiện công cộng; trồng rừng; xây dựng công trình phòng chống thiên tai; chọn giống cây trồng chịu hạn, chịu mặn.</li></ul>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 0.0], [1, 0.1], [2, 0.3], [3, 0.5], [4, 0.9], [5, 1.2]], color: '#dc2626', dots: true }], xmax: 5.5, ymax: 1.4, xstep: 1, ystep: 0.2, xlabel: 'Mốc thời gian', ylabel: 'Mức tăng nhiệt độ (°C)', label: 'Xu hướng tăng nhiệt độ trung bình toàn cầu qua các mốc thời gian (số liệu minh hoạ, đơn giản hoá)' }), caption: 'Đồ thị minh hoạ xu hướng: nhiệt độ trung bình toàn cầu tăng dần (số liệu minh hoạ, đơn giản hoá).' },
    { title: 'Bảo vệ động vật hoang dã và hành động của em', html: `<ul><li>Động vật hoang dã có vai trò trong chuỗi thức ăn, cân bằng tự nhiên, là nguồn gene quý và có giá trị khoa học, du lịch.</li><li>Không mua bán, sử dụng sản phẩm từ động vật hoang dã (ngà voi, sừng tê giác, vảy tê tê…); báo cho cơ quan chức năng khi phát hiện vi phạm.</li><li>Hành động của em: tiết kiệm điện, nước; phân loại rác; giảm đồ nhựa dùng một lần; trồng và chăm sóc cây xanh; tham gia các hoạt động bảo vệ môi trường ở trường, địa phương.</li></ul>`,
      svg: S.mindmap({ center: 'Em bảo vệ môi trường', branches: [{ title: 'Tiết kiệm', items: ['điện, nước'] }, { title: 'Rác thải', items: ['phân loại, giảm nhựa'] }, { title: 'Cây xanh', items: ['trồng, chăm sóc'] }, { title: 'Động vật hoang dã', items: ['không mua bán, sử dụng'] }], size: 13, label: 'Những việc em có thể làm để bảo vệ môi trường' }) }
  ],
  summary: 'Con người tác động ngày càng mạnh tới môi trường. Ô nhiễm môi trường do khí thải, chất thải, hoá chất… Biến đổi khí hậu do khí nhà kính, gây nước biển dâng, thời tiết cực đoan. Bảo vệ môi trường: xử lí, phân loại rác, dùng năng lượng sạch, trồng rừng, bảo vệ động vật hoang dã, tiết kiệm điện nước.',
  examples: [
    { title: 'Tính lượng rác', problem: 'Một khu dân cư thải 2 000 kg rác/ngày, rác hữu cơ chiếm 60 % (số liệu minh hoạ). Tính khối lượng rác hữu cơ.', solution: '2 000 · 60 % = 1 200 kg – có thể ủ thành phân hữu cơ.' },
    { title: 'Tiết kiệm điện', problem: 'Một bóng đèn 40 W mỗi ngày tắt sớm 2 giờ. Trong 30 ngày tiết kiệm được bao nhiêu kWh?', solution: '40 W = 0,04 kW; 0,04 · 2 · 30 = 2,4 kWh.' },
    { title: 'Liên hệ', problem: 'Vì sao đi xe đạp góp phần giảm biến đổi khí hậu?', solution: 'Xe đạp không đốt nhiên liệu nên không thải CO<sub>2</sub> – một khí nhà kính chính.' }
  ],
  exercises: [
    { question: 'Nêu ba nguyên nhân gây ô nhiễm không khí.', hints: ['Giao thông.', 'Nhà máy, đốt rác.'], solution: 'Khí thải xe cộ; khí thải nhà máy; đốt rác, đốt rơm rạ, đốt nhiên liệu.' },
    { question: 'Một lớp học 40 học sinh, mỗi bạn giảm dùng 5 túi nilon/tuần. Trong 4 tuần cả lớp giảm bao nhiêu túi?', hints: ['Số túi cả lớp giảm mỗi tuần.', 'Nhân 4.'], solution: '40 · 5 · 4 = 800 túi.' },
    { question: 'Nêu ba hậu quả của biến đổi khí hậu đối với Việt Nam.', hints: ['Vùng ven biển.', 'Thời tiết.'], solution: 'Nước biển dâng, xâm nhập mặn ở đồng bằng sông Cửu Long; bão, lũ, hạn hán thất thường; nắng nóng gay gắt hơn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khí CO<sub>2</sub> là một khí nhà kính.', answer: true, explain: 'CO<sub>2</sub> góp phần làm Trái Đất nóng lên.' },
    { type: 'mcq', q: 'Việc làm nào góp phần giảm ô nhiễm môi trường?', options: ['Đốt rác thải nhựa', 'Phân loại rác tại nguồn', 'Xả nước thải chưa xử lí ra sông', 'Dùng nhiều túi nilon'], answer: 1, explain: 'Phân loại rác giúp tái chế, xử lí hiệu quả.' },
    { type: 'short', q: 'Một khu dân cư thải 2 000 kg rác/ngày, rác hữu cơ chiếm 60 %. Khối lượng rác hữu cơ là bao nhiêu kg?', answer: '1200', answerText: '1 200', unit: 'kg', calc: '2000*60/100', explain: '2 000 · 0,6 = 1 200 kg.' },
    { type: 'mcq', q: 'Hậu quả nào là của biến đổi khí hậu?', options: ['Nước biển dâng', 'Tăng diện tích băng ở hai cực', 'Giảm thời tiết cực đoan', 'Tăng đa dạng sinh học'], answer: 0, explain: 'Băng tan, nước biển dâng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mua bán sản phẩm từ ngà voi, sừng tê giác không ảnh hưởng đến động vật hoang dã.', answer: false, explain: 'Thúc đẩy săn bắt trái phép, đe doạ tuyệt chủng.' },
    { type: 'short', q: 'Một bóng đèn 40 W mỗi ngày tắt sớm 2 giờ. Trong 30 ngày tiết kiệm được bao nhiêu kWh?', answer: '2,4', unit: 'kWh', calc: '40/1000*2*30', explain: '0,04 · 2 · 30 = 2,4 kWh.' },
    { type: 'short', q: 'Lớp 40 học sinh, mỗi bạn giảm 5 túi nilon/tuần. Trong 4 tuần cả lớp giảm bao nhiêu túi?', answer: '800', unit: 'túi', calc: '40*5*4', explain: '40 · 5 · 4 = 800 túi.' },
    { type: 'mcq', q: 'Nguồn năng lượng nào là năng lượng sạch, tái tạo?', options: ['Than đá', 'Dầu mỏ', 'Năng lượng mặt trời', 'Khí đốt'], answer: 2, explain: 'Năng lượng mặt trời không thải khí nhà kính khi sử dụng.' }
  ]
});
})();
