/* KHTN 7 – Bài 32. Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var wbar = S.bar({ title: 'Lượng nước giảm trong ống đong sau 2 ngày (số liệu mẫu)', cats: ['Cành để nguyên lá', 'Cành đã ngắt hết lá'], series: [{ name: 'Nước giảm', values: [12, 2], color: '#0284c7' }], yMax: 14, yStep: 2, width: 480, height: 280 });
THCS.registerLesson('khtn-7/bai-32', {
  objectives: [
    'Tiến hành được thí nghiệm chứng minh thân vận chuyển nước.',
    'Tiến hành được thí nghiệm chứng minh lá thoát hơi nước.',
    'Rèn kĩ năng quan sát mạch dẫn dưới kính lúp, đo lượng nước và giải thích kết quả.'
  ],
  intro: 'Có thể “nhìn thấy” đường đi của nước trong thân cây không? Chỉ cần một cành hoa trắng và một cốc nước màu, câu trả lời sẽ hiện ra sau vài giờ.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Cành hoa màu trắng (cúc, huệ) hoặc cần tây còn lá; cốc nước pha màu đỏ (mực đỏ, phẩm màu thực phẩm); dao nhỏ, kính lúp.</li><li>Chậu cây nhỏ (hoặc cành cây) còn lá, túi ni lông trong suốt, dây buộc; 2 ống đong, dầu ăn.</li></ul>` },
    { title: 'Thí nghiệm 1: Thân vận chuyển nước', html: `<ol><li>Cắm cành hoa trắng vào cốc nước màu đỏ, để nơi thoáng khoảng 2 – 4 giờ.</li><li>Quan sát màu cánh hoa, gân lá.</li><li>Cắt ngang thân, dùng kính lúp quan sát lát cắt.</li></ol>
      <p><b>Kết quả</b>: cánh hoa và gân lá chuyển sang màu đỏ; trên lát cắt ngang thân thấy các chấm đỏ – đó là <b>mạch gỗ</b>. <b>Kết luận</b>: nước và chất hoà tan được vận chuyển từ dưới lên qua mạch gỗ của thân.</p>` },
    { title: 'Thí nghiệm 2: Lá thoát hơi nước', html: `<ol><li>Trùm túi ni lông trong suốt lên một cành cây còn lá, buộc kín miệng túi; trùm túi lên một cành đã ngắt hết lá làm đối chứng. Để ngoài sáng vài giờ.</li><li>Cách khác: cắm cành nguyên lá vào ống đong A, cành đã ngắt lá vào ống đong B (cùng mực nước, nhỏ lớp dầu ăn phủ mặt nước để nước không bay hơi trực tiếp). Sau 2 ngày đọc mực nước.</li></ol>
      <p><b>Kết quả</b>: túi trùm cành có lá có nhiều giọt nước đọng ở mặt trong; mực nước ống A giảm nhiều hơn hẳn ống B. <b>Kết luận</b>: lá cây thoát hơi nước.</p>`,
      svg: [S.stemDyeExp(), wbar], caption: 'Nước màu đi theo mạch gỗ; cành có lá làm nước giảm nhiều hơn do lá thoát hơi nước.' },
    { title: 'Báo cáo thực hành', html: `<p>Ghi kết quả vào bảng, vẽ hình lát cắt ngang thân, trả lời câu hỏi và rút ra kết luận: <b>thân vận chuyển nước nhờ mạch gỗ; lá là cơ quan thoát hơi nước chủ yếu</b>.</p>` }
  ],
  summary: 'Cành hoa trắng cắm vào nước màu: cánh hoa, gân lá đổi màu, lát cắt thân có chấm màu ở mạch gỗ ⇒ thân vận chuyển nước qua mạch gỗ. Túi ni lông trùm cành có lá đọng nước, ống đong chứa cành có lá giảm nước nhiều hơn ⇒ lá thoát hơi nước.',
  examples: [
    { title: 'Vai trò lớp dầu ăn', problem: 'Vì sao phải nhỏ một lớp dầu ăn lên mặt nước trong ống đong?', solution: 'Lớp dầu ngăn nước bốc hơi trực tiếp từ mặt ống đong, để lượng nước giảm chỉ là do cành cây hút và thoát ra qua lá.' },
    { title: 'Tính lượng nước thoát qua lá', problem: 'Sau 2 ngày, ống A (cành có lá) giảm từ 50 mL xuống 38 mL; ống B (cành không lá) giảm từ 50 mL xuống 48 mL. Lượng nước thoát qua lá khoảng bao nhiêu mL?', solution: 'Ống A giảm 12 mL, ống B giảm 2 mL; phần do lá thoát hơi nước: 12 − 2 = 10 mL.' },
    { title: 'Giải thích hiện tượng', problem: 'Vì sao túi ni lông trùm cành không lá hầu như không có giọt nước?', solution: 'Cành không có lá nên hầu như không có khí khổng để thoát hơi nước, không có hơi nước ngưng tụ trong túi.' }
  ],
  exercises: [
    { question: 'Nếu cắm cành hoa vào nước màu rồi để trong phòng tối, lạnh thì hoa đổi màu nhanh hay chậm hơn? Vì sao?', hints: ['Thoát hơi nước tạo lực hút nước.', 'Nơi tối, lạnh thì thoát hơi nước thế nào?'], solution: 'Chậm hơn, vì nơi tối, lạnh khí khổng mở ít, thoát hơi nước yếu, lực hút nước lên cành nhỏ.' },
    { question: 'Ống đong A có 50 mL nước, sau 2 ngày còn 38 mL. Trung bình mỗi ngày giảm bao nhiêu mL?', hints: ['Lượng giảm = 50 − 38.', 'Chia cho số ngày.'], solution: 'Giảm 12 mL trong 2 ngày ⇒ 6 mL/ngày.' },
    { question: 'Vì sao khi làm thí nghiệm 1 nên dùng hoa màu trắng?', hints: ['Màu nào dễ thấy sự thay đổi?', 'Hoa màu đỏ sẵn thì sao?'], solution: 'Hoa trắng giúp dễ quan sát sự đổi màu do nước màu đi lên; nếu hoa sẵn có màu đậm thì khó nhận ra.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nước được vận chuyển từ rễ lên lá qua mạch gỗ.', answer: true, explain: 'Các chấm màu trên lát cắt là mạch gỗ.' },
    { type: 'mcq', q: 'Trên lát cắt ngang thân cành hoa cắm nước màu, các chấm màu là:', options: ['mạch rây', 'mạch gỗ', 'vỏ thân', 'ruột thân'], answer: 1, explain: 'Mạch gỗ dẫn nước.' },
    { type: 'mcq', q: 'Túi ni lông trùm cành có lá xuất hiện nhiều giọt nước chứng tỏ:', options: ['lá thoát hơi nước', 'lá hút nước từ không khí', 'túi bị thủng', 'lá quang hợp tạo tinh bột'], answer: 0, explain: 'Hơi nước thoát ra ngưng tụ trên túi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cành đã ngắt hết lá làm nước trong ống đong giảm nhiều hơn cành có lá.', answer: false, explain: 'Cành có lá thoát hơi nước nhiều hơn.' },
    { type: 'short', q: 'Ống A giảm 12 mL, ống B giảm 2 mL. Lượng nước thoát qua lá khoảng bao nhiêu mL?', answer: '10', unit: 'mL', calc: '12-2', explain: '12 − 2 = 10 mL.' },
    { type: 'short', q: 'Ống đong có 50 mL, sau 2 ngày còn 38 mL. Trung bình mỗi ngày giảm bao nhiêu mL?', answer: '6', unit: 'mL', calc: '(50-38)/2', explain: '12 : 2 = 6 mL.' },
    { type: 'mcq', q: 'Lớp dầu ăn trên mặt nước ống đong có tác dụng:', options: ['cung cấp chất dinh dưỡng', 'ngăn nước bay hơi trực tiếp', 'làm nước có màu', 'giết vi khuẩn'], answer: 1, explain: 'Để so sánh chính xác lượng nước cây sử dụng.' },
    { type: 'short', q: 'Theo biểu đồ, lượng nước giảm ở cành để nguyên lá gấp bao nhiêu lần cành đã ngắt lá?', answer: '6', unit: 'lần', calc: '12/2', explain: '12 : 2 = 6 lần.' }
  ]
});
})();
