/* KHTN 7 – Bài 21. Khái quát về trao đổi chất và chuyển hoá năng lượng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-21', {
  objectives: [
    'Phát biểu được khái niệm trao đổi chất và chuyển hoá năng lượng ở sinh vật.',
    'Nêu được vai trò của trao đổi chất và chuyển hoá năng lượng đối với sinh vật.',
    'Nhận ra được mối quan hệ giữa trao đổi chất và chuyển hoá năng lượng.'
  ],
  intro: 'Một chú mèo ăn cá, uống nước, hít thở không khí rồi chạy nhảy, giữ thân nhiệt ấm áp và lớn lên từng ngày. Thức ăn đã “biến” thành cơ thể và năng lượng của mèo bằng cách nào?',
  steps: [
    { title: 'Trao đổi chất là gì?', html: `<p><b>Trao đổi chất</b> ở sinh vật là quá trình cơ thể <b>lấy các chất</b> từ môi trường, <b>biến đổi</b> chúng thành các chất cần thiết cho cơ thể và tạo ra năng lượng cung cấp cho các hoạt động sống, đồng thời <b>trả lại môi trường</b> các chất thải.</p>
      <ul><li>Lấy vào: khí oxygen, thức ăn (chất dinh dưỡng), nước, muối khoáng…</li><li>Thải ra: khí carbon dioxide, nước tiểu, phân, mồ hôi…</li></ul>`,
      svg: S.flow({ items: ['Môi trường: oxygen, thức ăn, nước', 'Cơ thể: biến đổi các chất, tạo năng lượng', 'Thải ra môi trường: carbon dioxide, chất thải'], size: 15, label: 'Sơ đồ trao đổi chất giữa cơ thể và môi trường' }),
      caption: 'Trao đổi chất: cơ thể lấy chất từ môi trường, biến đổi rồi thải chất thải ra môi trường.' },
    { title: 'Chuyển hoá năng lượng là gì?', html: `<p><b>Chuyển hoá năng lượng</b> là sự biến đổi năng lượng từ dạng này sang dạng khác. Ví dụ:</p>
      <ul><li>Ở cây xanh: <b>quang năng</b> (năng lượng ánh sáng) được chuyển thành <b>hoá năng</b> tích luỹ trong chất hữu cơ.</li><li>Ở động vật: hoá năng trong thức ăn được chuyển thành <b>cơ năng</b> (vận động), <b>nhiệt năng</b> (giữ thân nhiệt), năng lượng cho hoạt động của tế bào…</li></ul>`,
      svg: S.flow({ items: ['Quang năng (ánh sáng Mặt Trời)', 'Hoá năng trong chất hữu cơ', 'Cơ năng, nhiệt năng, năng lượng cho tế bào'], size: 15, label: 'Sơ đồ chuyển hoá năng lượng' }),
      caption: 'Năng lượng ánh sáng được cây chuyển thành hoá năng; sinh vật dùng hoá năng cho các hoạt động sống.' },
    { title: 'Mối quan hệ giữa trao đổi chất và chuyển hoá năng lượng', html: `<p>Hai quá trình luôn <b>diễn ra đồng thời và gắn liền</b> với nhau: trong trao đổi chất, các chất được tổng hợp thì tích luỹ năng lượng, các chất bị phân giải thì giải phóng năng lượng.</p>
      <div class="box key">Tổng hợp chất ↔ tích luỹ năng lượng; phân giải chất ↔ giải phóng năng lượng.</div>` },
    { title: 'Vai trò đối với sinh vật', html: `<p>Trao đổi chất và chuyển hoá năng lượng <b>đảm bảo cho sinh vật tồn tại</b>: cung cấp nguyên liệu cấu tạo tế bào và năng lượng cho mọi hoạt động sống như sinh trưởng, phát triển, vận động, cảm ứng, sinh sản.</p>
      <p>Khi quá trình này ngừng lại, sinh vật sẽ chết. Đó là đặc trưng cơ bản của sự sống.</p>` }
  ],
  summary: 'Trao đổi chất: lấy chất từ môi trường, biến đổi thành chất cần thiết và năng lượng, thải chất thải ra môi trường. Chuyển hoá năng lượng: biến đổi năng lượng từ dạng này sang dạng khác. Hai quá trình gắn liền nhau và đảm bảo sự sống của sinh vật.',
  examples: [
    { title: 'Chỉ ra chất lấy vào và thải ra', problem: 'Khi em chạy bộ, cơ thể lấy vào và thải ra những chất nào?', solution: 'Lấy vào: oxygen (hít vào), nước (uống), chất dinh dưỡng (từ thức ăn đã ăn). Thải ra: carbon dioxide (thở ra), mồ hôi, sau đó là nước tiểu, phân.' },
    { title: 'Nhận ra dạng năng lượng', problem: 'Khi chạy bộ, hoá năng trong cơ thể được chuyển thành những dạng năng lượng nào?', solution: 'Chuyển thành cơ năng (cơ co, cơ thể chuyển động) và nhiệt năng (cơ thể nóng lên, toát mồ hôi).' },
    { title: 'Tính phần năng lượng', problem: 'Một người trong một ngày giải phóng 8 000 kJ năng lượng từ thức ăn, trong đó khoảng 75% biến thành nhiệt. Phần năng lượng biến thành nhiệt là bao nhiêu kJ?', solution: '8 000 · 75 : 100 = 6 000 kJ.' }
  ],
  exercises: [
    { question: 'Vì sao nói trao đổi chất là đặc trưng cơ bản của sự sống?', hints: ['Điều gì xảy ra khi sinh vật ngừng trao đổi chất?', 'Vật không sống có trao đổi chất không?'], solution: 'Mọi sinh vật đều phải trao đổi chất với môi trường để tồn tại, lớn lên, sinh sản; khi ngừng trao đổi chất thì sinh vật chết. Vật không sống không có quá trình này.' },
    { question: 'Nêu ví dụ về chuyển hoá năng lượng ở thực vật và ở động vật.', hints: ['Thực vật dùng năng lượng nào để tạo chất hữu cơ?', 'Động vật dùng năng lượng trong thức ăn để làm gì?'], solution: 'Thực vật: quang năng → hoá năng trong chất hữu cơ khi quang hợp. Động vật: hoá năng trong thức ăn → cơ năng khi vận động và nhiệt năng giữ thân nhiệt.' },
    { question: 'Một con bò ăn cỏ nhận được 10 000 kJ; 40% năng lượng đó thải theo phân, phần còn lại được cơ thể sử dụng. Bò sử dụng bao nhiêu kJ?', hints: ['Phần sử dụng chiếm 100% − 40% = 60%.', 'Tính 60% của 10 000 kJ.'], solution: '10 000 · 60 : 100 = 6 000 kJ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trao đổi chất và chuyển hoá năng lượng luôn diễn ra đồng thời, gắn liền với nhau.', answer: true, explain: 'Tổng hợp chất tích luỹ năng lượng, phân giải chất giải phóng năng lượng.' },
    { type: 'mcq', q: 'Chất nào cơ thể người LẤY VÀO từ môi trường?', options: ['Carbon dioxide', 'Oxygen', 'Nước tiểu', 'Mồ hôi'], answer: 1, explain: 'Oxygen được lấy vào khi hít vào.' },
    { type: 'mcq', q: 'Trong quang hợp, năng lượng được chuyển hoá từ:', options: ['hoá năng thành quang năng', 'quang năng thành hoá năng', 'nhiệt năng thành cơ năng', 'cơ năng thành điện năng'], answer: 1, explain: 'Ánh sáng → năng lượng hoá học trong chất hữu cơ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hòn đá nằm ngoài nắng cũng có trao đổi chất như sinh vật.', answer: false, explain: 'Trao đổi chất chỉ có ở sinh vật.' },
    { type: 'short', q: 'Một người giải phóng 8 000 kJ năng lượng trong một ngày, 75% biến thành nhiệt. Phần năng lượng biến thành nhiệt là bao nhiêu kJ?', answer: '6000', unit: 'kJ', calc: '8000*75/100', explain: '8 000 · 0,75 = 6 000 kJ.' },
    { type: 'mcq', q: 'Khi chạy, hoá năng trong cơ thể chủ yếu chuyển thành:', options: ['quang năng và điện năng', 'cơ năng và nhiệt năng', 'chỉ quang năng', 'chỉ điện năng'], answer: 1, explain: 'Cơ thể chuyển động và nóng lên.' },
    { type: 'short', q: 'Con bò nhận 10 000 kJ từ cỏ, 40% thải theo phân. Số kJ bò sử dụng là bao nhiêu?', answer: '6000', unit: 'kJ', calc: '10000*(100-40)/100', explain: '60% của 10 000 = 6 000 kJ.' },
    { type: 'short', q: 'Mỗi ngày một bạn học sinh thở ra khoảng 0,5 kg carbon dioxide. Trong 1 tuần (7 ngày), bạn thở ra khoảng bao nhiêu kg carbon dioxide?', answer: '3,5', unit: 'kg', calc: '0.5*7', explain: '0,5 · 7 = 3,5 kg.' }
  ]
});
})();
