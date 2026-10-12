/* GDCD 6 – Bài 10. Quyền và nghĩa vụ cơ bản của công dân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-10', {
  objectives: [
    'Nêu được quy định của Hiến pháp năm 2013 về một số quyền và nghĩa vụ cơ bản của công dân.',
    'Hiểu được quyền công dân không tách rời nghĩa vụ công dân.',
    'Thực hiện được quyền và nghĩa vụ phù hợp lứa tuổi; tôn trọng quyền của người khác.'
  ],
  intro: 'Em có quyền được học tập – và cũng có nghĩa vụ học tập. Em có quyền tự do ngôn luận – nhưng không được xúc phạm người khác. <b>Quyền và nghĩa vụ</b> luôn đi cùng nhau.',
  steps: [
    { title: 'Quyền và nghĩa vụ trong Hiến pháp', html: `<p>Chương II của Hiến pháp năm 2013 quy định về <b>quyền con người, quyền và nghĩa vụ cơ bản của công dân</b>. Mọi người đều bình đẳng trước pháp luật (Điều 16).</p>` },
    { title: 'Một số quyền cơ bản', html: `<p>Một số quyền của công dân được Hiến pháp năm 2013 ghi nhận:</p>`,
      svg: S.table({ title: 'Một số quyền cơ bản (Hiến pháp năm 2013)', head: ['Quyền', 'Điều'], rows: [['Bình đẳng trước pháp luật', 'Điều 16'], ['Quyền sống', 'Điều 19'], ['Bí mật đời tư, bí mật cá nhân', 'Điều 21'], ['Tự do ngôn luận, báo chí', 'Điều 25'], ['Quyền học tập', 'Điều 39']], colW: 300 }), caption: 'Tóm tắt một số điều, diễn đạt ngắn gọn.' },
    { title: 'Một số nghĩa vụ cơ bản', html: `<ul><li>Học tập (Điều 39 – vừa là quyền vừa là nghĩa vụ).</li><li>Bảo vệ môi trường (Điều 43).</li><li>Bảo vệ Tổ quốc (Điều 45).</li><li>Tuân theo Hiến pháp và pháp luật (Điều 46).</li><li>Nộp thuế theo luật định (Điều 47).</li></ul>`,
      svg: S.compare({ title: 'Quyền đi đôi với nghĩa vụ', left: { h: 'Quyền của em', items: ['Được đi học', 'Được bày tỏ ý kiến', 'Được giữ bí mật thư tín'] }, right: { h: 'Không được làm', items: ['Bỏ học, quậy phá lớp', 'Xúc phạm, bịa đặt về người khác', 'Đọc trộm tin nhắn của bạn'] } }), caption: 'Hưởng quyền nhưng không xâm phạm quyền người khác.' },
    { title: 'Quyền không tách rời nghĩa vụ', html: `<p>Hiến pháp năm 2013 (Điều 15) khẳng định quyền công dân không tách rời nghĩa vụ công dân; việc thực hiện quyền không được xâm phạm lợi ích quốc gia, dân tộc, quyền và lợi ích hợp pháp của người khác.</p>
      <div class="box key">Hưởng quyền – làm tròn nghĩa vụ – tôn trọng quyền người khác.</div>` }
  ],
  summary: 'Hiến pháp năm 2013 (Chương II) quy định quyền con người, quyền và nghĩa vụ cơ bản của công dân: bình đẳng trước pháp luật (Điều 16), quyền sống (Điều 19), bí mật đời tư (Điều 21), tự do ngôn luận (Điều 25), học tập (Điều 39); nghĩa vụ bảo vệ môi trường (Điều 43), bảo vệ Tổ quốc (Điều 45), tuân theo pháp luật (Điều 46), nộp thuế (Điều 47). Quyền không tách rời nghĩa vụ (Điều 15).',
  examples: [
    { title: 'Xâm phạm quyền', problem: 'Lan tự ý đọc nhật kí của bạn rồi kể cho cả lớp. Lan xâm phạm quyền gì?', solution: 'Quyền bất khả xâm phạm về đời sống riêng tư, bí mật cá nhân (Điều 21).' },
    { title: 'Vừa quyền vừa nghĩa vụ', problem: 'Vì sao học tập vừa là quyền vừa là nghĩa vụ?', solution: 'Mọi công dân được Nhà nước tạo điều kiện học tập (quyền), đồng thời phải học tập để phát triển bản thân, đóng góp cho đất nước (nghĩa vụ).' },
    { title: 'Tự do ngôn luận', problem: 'Đăng bài bịa đặt nói xấu bạn trên mạng có phải là “tự do ngôn luận” không?', solution: 'Không. Tự do ngôn luận phải theo pháp luật, không được xâm phạm danh dự, nhân phẩm người khác.' }
  ],
  exercises: [
    { question: 'Kể ba quyền và ba nghĩa vụ cơ bản của công dân.', hints: ['Xem bảng ở bước 2.', 'Xem danh sách ở bước 3.'], solution: 'Quyền: sống, học tập, tự do ngôn luận. Nghĩa vụ: bảo vệ Tổ quốc, tuân theo pháp luật, bảo vệ môi trường.' },
    { question: 'Hiểu thế nào về câu “quyền công dân không tách rời nghĩa vụ công dân”?', hints: ['Hưởng quyền thì cần làm gì?', 'Giới hạn của quyền.'], solution: 'Công dân được hưởng quyền đồng thời phải thực hiện nghĩa vụ; khi thực hiện quyền không được xâm phạm lợi ích của Nhà nước, xã hội và người khác.' },
    { question: 'Học sinh có thể thực hiện nghĩa vụ bảo vệ môi trường bằng những việc gì?', hints: ['Ở lớp, ở nhà.', 'Rác thải, cây xanh.'], solution: 'Không xả rác, phân loại rác, trồng và chăm sóc cây, tiết kiệm điện nước.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo Hiến pháp năm 2013, mọi người đều bình đẳng trước pháp luật.', answer: true, explain: 'Điều 16.' },
    { type: 'mcq', q: 'Học tập là:', options: ['vừa là quyền vừa là nghĩa vụ', 'chỉ là quyền', 'chỉ là nghĩa vụ', 'không phải quyền'], answer: 0, explain: 'Điều 39.' },
    { type: 'mcq', q: 'Đọc trộm tin nhắn của bạn là xâm phạm quyền:', options: ['bí mật đời tư, thư tín', 'học tập', 'nộp thuế', 'bảo vệ Tổ quốc'], answer: 0, explain: 'Điều 21.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tự do ngôn luận cho phép bịa đặt, xúc phạm người khác.', answer: false, explain: 'Phải theo pháp luật.' },
    { type: 'short', q: 'Hiến pháp năm 2013 quy định quyền và nghĩa vụ học tập ở Điều mấy?', answer: '39', calc: '39', explain: 'Điều 39.' },
    { type: 'mcq', q: 'Nghĩa vụ cơ bản của công dân:', options: ['Bảo vệ Tổ quốc', 'Chơi game', 'Đi du lịch', 'Mua sắm'], answer: 0, explain: 'Điều 45.' },
    { type: 'short', q: 'Quyền và nghĩa vụ cơ bản của công dân nằm ở Chương mấy của Hiến pháp năm 2013?', answer: '2', calc: '2', explain: 'Chương II.' },
    { type: 'mcq', q: 'Quyền công dân:', options: ['không tách rời nghĩa vụ', 'không cần nghĩa vụ', 'chỉ dành cho người lớn', 'xâm phạm được quyền người khác'], answer: 0, explain: 'Điều 15.' }
  ]
});
})();
