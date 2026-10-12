/* Tin học 9 – Bài 5. Tìm hiểu phần mềm mô phỏng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-5', {
  objectives: [
    'Nêu được khái niệm và lợi ích của phần mềm mô phỏng.',
    'Nêu được ví dụ phần mềm mô phỏng trong học tập và đời sống.',
    'Nhận biết được hạn chế của mô phỏng so với thực tế.'
  ],
  intro: 'Phi công tập lái trên buồng lái giả lập trước khi bay thật; em có thể “thả” vật rơi trên Mặt Trăng ngay trên máy tính. Đó là nhờ <b>phần mềm mô phỏng</b>.',
  steps: [
    { title: 'Phần mềm mô phỏng là gì?', html: `<p><b>Phần mềm mô phỏng</b> dùng mô hình toán học, quy luật khoa học để tái hiện một hiện tượng, quá trình hay hệ thống trên máy tính. Người dùng thay đổi thông số và quan sát kết quả.</p>`,
      svg: S.ipo({ title: 'Mô phỏng hoạt động thế nào?', input: 'Thông số người dùng chọn', process: 'Mô hình, quy luật khoa học', output: 'Hình ảnh, số liệu, đồ thị' }), caption: 'Thay đổi đầu vào, quan sát đầu ra.' },
    { title: 'Lợi ích', html: `<ul><li><b>An toàn</b>: thí nghiệm nguy hiểm (hoá chất, điện cao thế).</li><li><b>Tiết kiệm</b>: không tốn vật liệu, thiết bị đắt tiền.</li><li><b>Quan sát được điều khó thấy</b>: chuyển động phân tử, hệ Mặt Trời, quá trình kéo dài hàng năm.</li><li><b>Lặp lại nhiều lần</b> với thông số khác nhau.</li></ul>` },
    { title: 'Ví dụ phần mềm mô phỏng', html: `<p>Mô phỏng khoa học tương tác (ví dụ bộ mô phỏng PhET), quả địa cầu ảo, mô phỏng lái xe, mô phỏng giao thông, dự báo thời tiết, mô phỏng mạch điện, mô phỏng lắp ráp máy tính…</p>`,
      svg: S.table({ title: 'Một số lĩnh vực dùng mô phỏng', head: ['Lĩnh vực', 'Ví dụ'], rows: [['Giáo dục', 'Thí nghiệm ảo Vật lí, Hoá học'], ['Giao thông', 'Tập lái xe, lái máy bay'], ['Khí tượng', 'Dự báo thời tiết, bão'], ['Xây dựng', 'Thử sức chịu tải công trình']], colW: 240 }), caption: 'Mô phỏng được dùng rộng rãi.' },
    { title: 'Hạn chế', html: `<p>Mô phỏng chỉ gần đúng với thực tế vì mô hình đã được đơn giản hoá (bỏ qua ma sát, sức cản…). Kết quả cần được kiểm chứng; mô phỏng không thay thế hoàn toàn thực hành thật.</p>
      <div class="box key">Mô phỏng: an toàn, tiết kiệm, trực quan – nhưng chỉ gần đúng.</div>` }
  ],
  summary: 'Phần mềm mô phỏng dùng mô hình, quy luật khoa học để tái hiện hiện tượng, quá trình trên máy tính; người dùng đổi thông số và quan sát kết quả. Lợi ích: an toàn, tiết kiệm, quan sát điều khó thấy, lặp lại nhiều lần. Hạn chế: chỉ gần đúng, cần kiểm chứng.',
  examples: [
    { title: 'Vì sao mô phỏng?', problem: 'Vì sao nên mô phỏng thí nghiệm đoản mạch điện thay vì làm thật?', solution: 'Vì làm thật nguy hiểm (cháy, giật điện); mô phỏng an toàn mà vẫn quan sát được hiện tượng.' },
    { title: 'Hạn chế', problem: 'Mô phỏng thả rơi bỏ qua sức cản không khí. Kết quả với chiếc lông chim khác thực tế thế nào?', solution: 'Mô phỏng cho lông chim rơi nhanh như hòn đá; thực tế lông chim rơi chậm hơn nhiều vì sức cản không khí.' },
    { title: 'Tính thời gian', problem: 'Mô phỏng chạy nhanh gấp 3 600 lần thực tế. Quá trình kéo dài 24 giờ được mô phỏng trong bao lâu?', solution: '24 giờ = 86 400 giây; 86 400 : 3 600 = 24 giây.' }
  ],
  exercises: [
    { question: 'Nêu ba lợi ích của phần mềm mô phỏng trong học tập.', hints: ['Về an toàn, chi phí.', 'Về quan sát và lặp lại.'], solution: 'An toàn; tiết kiệm chi phí; quan sát được hiện tượng khó thấy và thử nhiều lần.' },
    { question: 'Kể tên hai tình huống mà mô phỏng không thể thay thế hoàn toàn thực tế.', hints: ['Kĩ năng cần cảm nhận thật.', 'Kết quả cần kiểm chứng.'], solution: 'Ví dụ: học bơi; bác sĩ phẫu thuật thật; kiểm định công trình thật sau khi mô phỏng.' },
    { question: 'Mô phỏng tăng tốc 60 lần. Một quá trình 45 phút được mô phỏng trong bao nhiêu giây?', hints: ['Đổi 45 phút ra giây.', 'Chia 60.'], solution: '2 700 : 60 = 45 giây.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phần mềm mô phỏng giúp thực hiện thí nghiệm nguy hiểm một cách an toàn.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hạn chế của mô phỏng là:', options: ['nguy hiểm', 'chỉ gần đúng với thực tế', 'tốn vật liệu', 'không lặp lại được'], answer: 1, explain: 'Mô hình đơn giản hoá.' },
    { type: 'mcq', q: 'Ví dụ về phần mềm mô phỏng:', options: ['Thí nghiệm ảo Vật lí', 'Phần mềm soạn thảo', 'Trình duyệt web', 'Phần mềm diệt virus'], answer: 0, explain: 'Thí nghiệm ảo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kết quả mô phỏng luôn chính xác tuyệt đối, không cần kiểm chứng.', answer: false, explain: 'Cần kiểm chứng.' },
    { type: 'short', q: 'Mô phỏng nhanh gấp 120 lần. Quá trình 1 giờ được mô phỏng trong bao nhiêu giây?', answer: '30', unit: 'giây', calc: '3600/120', explain: '3 600 : 120.' },
    { type: 'short', q: 'Thí nghiệm thật tốn 250 000 đồng/lần. Mô phỏng 8 lần thay vì làm thật tiết kiệm bao nhiêu đồng?', answer: '2000000', answerText: '2 000 000', unit: 'đồng', calc: '250000*8', explain: '2 000 000.' },
    { type: 'mcq', q: 'Trong mô phỏng, người dùng thường:', options: ['thay đổi thông số và quan sát', 'viết lại phần mềm', 'chỉ xem video có sẵn', 'không tương tác'], answer: 0, explain: 'Đổi thông số, quan sát.' },
    { type: 'mcq', q: 'Phi công tập lái trên buồng lái giả lập là ứng dụng mô phỏng trong:', options: ['giao thông', 'nông nghiệp', 'âm nhạc', 'hội hoạ'], answer: 0, explain: 'Giao thông.' }
  ]
});
})();
