/* GDCD 7 – Bài 6. Ứng phó với tâm lí căng thẳng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-6', {
  objectives: [
    'Nêu được các tình huống thường gây căng thẳng; nguyên nhân và ảnh hưởng của căng thẳng.',
    'Nêu được cách ứng phó tích cực khi căng thẳng.',
    'Thực hành được một số cách ứng phó với tâm lí căng thẳng.'
  ],
  intro: 'Sắp đến kì thi, Ngọc mất ngủ, hay cáu gắt, đau đầu. Mẹ nhận ra con đang <b>căng thẳng</b> và cùng Ngọc tìm cách thư giãn, sắp xếp lại việc học. Biết cách ứng phó giúp em vượt qua áp lực.',
  steps: [
    { title: 'Căng thẳng là gì? Do đâu?', html: `<p><b>Căng thẳng</b> (stress) là trạng thái mệt mỏi, lo âu, bất an về tâm lí khi ta gặp áp lực vượt quá khả năng đáp ứng.</p>
      <ul><li><b>Nguyên nhân bên ngoài</b>: áp lực học tập, thi cử; mâu thuẫn với bạn bè, gia đình; bị bắt nạt; thay đổi môi trường…</li><li><b>Nguyên nhân bên trong</b>: suy nghĩ tiêu cực, đặt kì vọng quá cao, thiếu ngủ, sinh hoạt không điều độ…</li></ul>` },
    { title: 'Dấu hiệu và ảnh hưởng', html: `<p>Căng thẳng kéo dài ảnh hưởng tới cả cơ thể và tinh thần:</p>`,
      svg: S.mindmap({ center: 'Dấu hiệu căng thẳng', branches: [{ title: 'Cơ thể', items: ['Đau đầu, mệt mỏi', 'Mất ngủ, chán ăn'] }, { title: 'Cảm xúc', items: ['Lo âu, dễ cáu', 'Buồn bã'] }, { title: 'Suy nghĩ', items: ['Khó tập trung', 'Hay quên'] }, { title: 'Hành vi', items: ['Ngại giao tiếp', 'Học sút'] }], w: 640, size: 13 }), caption: 'Nhận ra dấu hiệu sớm để ứng phó kịp thời.' },
    { title: 'Cách ứng phó tích cực', html: `<ul><li>Hít thở sâu, thư giãn; nghe nhạc nhẹ, đọc sách.</li><li>Vận động, chơi thể thao, ngủ đủ giấc.</li><li>Suy nghĩ tích cực, đặt mục tiêu vừa sức, chia nhỏ việc.</li><li>Tâm sự với người tin cậy (bố mẹ, thầy cô, bạn thân), nhờ chuyên gia tư vấn khi cần.</li></ul>`,
      svg: S.compare({ title: 'Cách ứng phó', left: { h: 'Tích cực', items: ['Hít thở sâu, thư giãn', 'Tập thể dục, ngủ đủ', 'Tâm sự với người tin cậy', 'Lập kế hoạch, chia nhỏ việc'] }, right: { h: 'Tiêu cực', items: ['Chơi game thâu đêm', 'Bỏ ăn, thức khuya', 'Trút giận lên người khác', 'Thu mình, giấu kín'] } }), caption: 'Tránh những cách “giải toả” gây hại.' },
    { title: 'Thực hành hít thở 4 – 4 – 4', html: `<p>Hít vào bằng mũi trong 4 giây – giữ hơi 4 giây – thở ra chậm bằng miệng trong 4 giây. Lặp lại 5 lần. Bài tập giúp nhịp tim chậm lại, tâm trí bình tĩnh hơn.</p>
      <div class="box key">Nhận ra – bình tĩnh – tìm nguyên nhân – ứng phó tích cực – nhờ trợ giúp khi cần.</div>` }
  ],
  summary: 'Căng thẳng là trạng thái mệt mỏi, lo âu khi gặp áp lực vượt khả năng đáp ứng; do nguyên nhân bên ngoài (học tập, mâu thuẫn, bắt nạt…) và bên trong (suy nghĩ tiêu cực, kì vọng quá cao, thiếu ngủ…). Dấu hiệu: đau đầu, mất ngủ, lo âu, khó tập trung. Ứng phó tích cực: thư giãn, vận động, ngủ đủ, suy nghĩ tích cực, lập kế hoạch, tâm sự với người tin cậy.',
  examples: [
    { title: 'Nhận diện nguyên nhân', problem: 'Hưng căng thẳng vì tự đặt mục tiêu phải đạt điểm 10 tất cả các môn. Đó là nguyên nhân bên trong hay bên ngoài?', solution: 'Bên trong (đặt kì vọng quá cao).' },
    { title: 'Ứng phó', problem: 'Trước giờ thuyết trình, Lan tim đập nhanh, run tay. Lan nên làm gì?', solution: 'Hít thở sâu theo nhịp 4–4–4, tự nhủ tích cực (“mình đã chuẩn bị kĩ”), tập lại phần mở đầu.' },
    { title: 'Tính thời gian bài tập thở', problem: 'Mỗi lượt thở 4–4–4 mất bao lâu? 5 lượt mất bao lâu?', solution: '12 giây/lượt; 5 lượt = 60 giây.' }
  ],
  exercises: [
    { question: 'Kể ba tình huống thường gây căng thẳng cho học sinh lớp 7.', hints: ['Học tập, thi cử.', 'Quan hệ bạn bè, gia đình.'], solution: 'Ví dụ: sắp kiểm tra cuối kì; mâu thuẫn với bạn thân; bị so sánh với anh chị.' },
    { question: 'Vì sao chơi game thâu đêm không phải cách giải toả căng thẳng tốt?', hints: ['Ảnh hưởng tới giấc ngủ.', 'Vấn đề có được giải quyết không?'], solution: 'Gây thiếu ngủ, mệt mỏi, làm căng thẳng nặng hơn; vấn đề gốc không được giải quyết.' },
    { question: 'Lập kế hoạch ôn thi 4 môn trong 8 ngày, mỗi ngày 2 buổi. Mỗi môn được bao nhiêu buổi nếu chia đều?', hints: ['Tổng số buổi = 8 × 2.', 'Chia cho 4 môn.'], solution: '16 buổi : 4 = 4 buổi mỗi môn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mất ngủ, đau đầu có thể là dấu hiệu của căng thẳng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Cách ứng phó tích cực với căng thẳng:', options: ['Tâm sự với người tin cậy', 'Bỏ ăn', 'Trút giận lên em nhỏ', 'Thức khuya chơi game'], answer: 0, explain: 'Tích cực.' },
    { type: 'mcq', q: 'Nguyên nhân bên trong gây căng thẳng:', options: ['Đặt kì vọng quá cao', 'Bị bạn bắt nạt', 'Lịch thi dày', 'Chuyển trường'], answer: 0, explain: 'Bên trong.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi căng thẳng nên giấu kín, không kể với ai.', answer: false, explain: 'Nên tâm sự.' },
    { type: 'short', q: 'Mỗi lượt thở 4–4–4 mất 12 giây. 10 lượt mất bao nhiêu giây?', answer: '120', unit: 'giây', calc: '12*10', explain: '120.' },
    { type: 'short', q: 'Ôn 3 môn trong 6 ngày, mỗi ngày 2 buổi, chia đều. Mỗi môn bao nhiêu buổi?', answer: '4', unit: 'buổi', calc: '6*2/3', explain: '4.' },
    { type: 'mcq', q: 'Bài tập giúp bình tĩnh nhanh trước giờ thuyết trình:', options: ['Hít thở sâu', 'Uống nước tăng lực', 'Chạy thật nhanh', 'Xem điện thoại'], answer: 0, explain: 'Hít thở.' },
    { type: 'mcq', q: 'Căng thẳng kéo dài có thể dẫn tới:', options: ['học sút, sức khoẻ giảm', 'học giỏi hơn', 'ngủ ngon hơn', 'không ảnh hưởng'], answer: 0, explain: 'Ảnh hưởng xấu.' }
  ]
});
})();
