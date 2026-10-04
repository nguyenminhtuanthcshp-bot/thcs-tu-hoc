/* KHTN 7 – Bài 27. Thực hành: Hô hấp ở thực vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var tbar = S.bar({ title: 'Nhiệt độ trong bình sau 24 giờ (số liệu mẫu)', cats: ['Hạt đang nảy mầm', 'Hạt đã luộc chín'], series: [{ name: 'Nhiệt độ', values: [31, 26], color: '#ea580c' }], yMax: 35, yStep: 5, yLabel: '°C', width: 460, height: 280 });
THCS.registerLesson('khtn-7/bai-27', {
  objectives: [
    'Tiến hành được thí nghiệm về hô hấp tế bào ở thực vật thông qua sự nảy mầm của hạt.',
    'Chứng minh được hô hấp ở hạt nảy mầm thải khí carbon dioxide, hấp thụ oxygen và toả nhiệt.',
    'Rèn kĩ năng bố trí thí nghiệm đối chứng, đo đạc, ghi chép và giải thích kết quả.'
  ],
  intro: 'Hạt đang nảy mầm không có miệng, không có phổi, nhưng vẫn “thở”. Ba thí nghiệm nhỏ dưới đây sẽ chứng minh điều đó.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Hạt đậu xanh (hoặc thóc, ngô) đã ngâm nước cho nảy mầm; một phần hạt đã luộc chín làm đối chứng.</li><li>Bình thuỷ tinh có nắp, cốc nhỏ đựng nước vôi trong, nến và que dài gắn nến, nhiệt kế, bông ẩm.</li></ul>` },
    { title: 'Thí nghiệm 1: Hô hấp thải ra khí carbon dioxide', html: `<ol><li>Cho hạt nảy mầm vào bình A, hạt đã luộc vào bình B; đặt vào mỗi bình một cốc nhỏ đựng nước vôi trong; đậy kín.</li><li>Để khoảng 1 – 2 giờ, quan sát cốc nước vôi.</li></ol>
      <p><b>Kết quả</b>: nước vôi trong ở bình A bị <b>vẩn đục</b>, ở bình B vẫn trong. <b>Kết luận</b>: hạt nảy mầm hô hấp thải ra khí carbon dioxide.</p>`,
      svg: S.respExperiment(), caption: 'Khí carbon dioxide do hạt nảy mầm thải ra làm nước vôi trong vẩn đục.' },
    { title: 'Thí nghiệm 2: Hô hấp lấy khí oxygen', html: `<ol><li>Hai bình A (hạt nảy mầm), B (hạt luộc) đậy kín khoảng 1 ngày.</li><li>Mở nắp, nhanh chóng đưa cây nến đang cháy vào mỗi bình.</li></ol>
      <p><b>Kết quả</b>: nến ở bình A <b>tắt ngay</b>, nến ở bình B vẫn cháy một lúc. <b>Kết luận</b>: hạt nảy mầm đã lấy oxygen trong bình để hô hấp.</p>` },
    { title: 'Thí nghiệm 3: Hô hấp toả nhiệt', html: `<ol><li>Cho hạt nảy mầm vào bình A, hạt luộc vào bình B (có bông ẩm giữ nhiệt), cắm nhiệt kế vào mỗi bình.</li><li>Ghi nhiệt độ ban đầu và sau 24 giờ.</li></ol>
      <p><b>Kết quả</b>: nhiệt độ bình A tăng cao hơn bình B. <b>Kết luận</b>: hô hấp giải phóng năng lượng, một phần dưới dạng nhiệt.</p>`,
      svg: tbar, caption: 'Số liệu mẫu: bình hạt nảy mầm ấm hơn bình hạt luộc chín.' },
    { title: 'Báo cáo thực hành', html: `<p>Lập bảng ghi kết quả của cả ba thí nghiệm (bình A, bình B), giải thích và rút ra kết luận chung: <b>hạt nảy mầm hô hấp: lấy oxygen, thải carbon dioxide và toả nhiệt</b>. Hạt luộc chín đã chết nên không hô hấp.</p>` }
  ],
  summary: 'Hạt nảy mầm hô hấp mạnh: thải carbon dioxide (làm nước vôi trong vẩn đục), lấy oxygen (nến tắt trong bình kín), toả nhiệt (nhiệt độ bình tăng). Hạt luộc chín là đối chứng vì tế bào đã chết, không hô hấp.',
  examples: [
    { title: 'Vai trò bình đối chứng', problem: 'Vì sao phải có bình B chứa hạt đã luộc chín?', solution: 'Để so sánh: hai bình chỉ khác nhau ở chỗ hạt sống hay chết. Nhờ đó khẳng định các hiện tượng ở bình A là do hạt sống hô hấp gây ra.' },
    { title: 'Tính độ tăng nhiệt độ', problem: 'Nhiệt độ ban đầu của hai bình là 25 °C. Sau 24 giờ bình A là 31 °C, bình B là 26 °C. Nhiệt độ bình A tăng nhiều hơn bình B bao nhiêu độ?', solution: 'Bình A tăng 31 − 25 = 6 °C; bình B tăng 26 − 25 = 1 °C; chênh lệch 6 − 1 = 5 °C.' },
    { title: 'Giải thích hiện tượng', problem: 'Vì sao nến trong bình hạt nảy mầm tắt ngay?', solution: 'Hạt hô hấp đã dùng hết phần lớn oxygen trong bình, trong bình còn nhiều carbon dioxide; nến không có oxygen để duy trì sự cháy nên tắt.' }
  ],
  exercises: [
    { question: 'Vì sao hạt để làm thí nghiệm phải là hạt đang nảy mầm mà không dùng hạt khô?', hints: ['Hạt khô chứa ít nước.', 'Nước ảnh hưởng thế nào đến hô hấp?'], solution: 'Hạt khô chứa ít nước nên hô hấp rất yếu, kết quả khó quan sát. Hạt nảy mầm chứa nhiều nước, hô hấp mạnh, hiện tượng rõ.' },
    { question: 'Bạn An dùng 50 hạt đậu để ngâm, có 10% số hạt không nảy mầm. Có bao nhiêu hạt nảy mầm?', hints: ['Số hạt không nảy mầm: 10% của 50.', 'Lấy tổng trừ số hạt không nảy mầm.'], solution: 'Không nảy mầm: 50 · 10 : 100 = 5 hạt; nảy mầm: 50 − 5 = 45 hạt.' },
    { question: 'Nếu dùng nước cất thay nước vôi trong ở thí nghiệm 1 thì có quan sát được hiện tượng không? Vì sao?', hints: ['Chất nào nhận biết carbon dioxide?', 'Nước cất có đổi màu khi gặp carbon dioxide không?'], solution: 'Không quan sát được vì nước cất không bị vẩn đục khi gặp carbon dioxide; nước vôi trong mới là chất dùng để nhận biết khí này.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khí carbon dioxide làm nước vôi trong bị vẩn đục.', answer: true, explain: 'Dùng nước vôi trong để nhận biết carbon dioxide.' },
    { type: 'mcq', q: 'Trong thí nghiệm 2, nến ở bình hạt nảy mầm tắt ngay vì:', options: ['bình có nhiều oxygen', 'oxygen trong bình đã bị hạt dùng cho hô hấp', 'hạt toả ra nước', 'nhiệt độ bình quá thấp'], answer: 1, explain: 'Hô hấp lấy oxygen.' },
    { type: 'mcq', q: 'Bình đối chứng chứa:', options: ['hạt đang nảy mầm', 'hạt đã luộc chín', 'nước vôi trong', 'không khí'], answer: 1, explain: 'Hạt chết không hô hấp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hạt đã luộc chín vẫn hô hấp mạnh như hạt nảy mầm.', answer: false, explain: 'Tế bào đã chết.' },
    { type: 'short', q: 'Bình A tăng từ 25 °C lên 31 °C. Nhiệt độ tăng bao nhiêu °C?', answer: '6', unit: '°C', calc: '31-25', explain: '31 − 25 = 6 °C.' },
    { type: 'short', q: 'Ngâm 50 hạt, 10% không nảy mầm. Số hạt nảy mầm là bao nhiêu?', answer: '45', unit: 'hạt', calc: '50-50*10/100', explain: '50 − 5 = 45 hạt.' },
    { type: 'mcq', q: 'Thí nghiệm 3 chứng minh hô hấp:', options: ['thải oxygen', 'toả nhiệt', 'tạo tinh bột', 'cần ánh sáng'], answer: 1, explain: 'Nhiệt độ bình hạt nảy mầm tăng.' },
    { type: 'short', q: 'Sau 24 giờ, bình A 31 °C, bình B 26 °C. Bình A cao hơn bình B bao nhiêu °C?', answer: '5', unit: '°C', calc: '31-26', explain: '31 − 26 = 5 °C.' }
  ]
});
})();
