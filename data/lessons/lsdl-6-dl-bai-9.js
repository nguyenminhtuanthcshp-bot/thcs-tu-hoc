/* LS&ĐL 6 – Địa lí, Bài 9. Xác định phương hướng ngoài thực tế. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-9', {
  objectives: [
    'Xác định được phương hướng ngoài thực tế dựa vào la bàn.',
    'Xác định được phương hướng dựa vào Mặt Trời, sao Bắc Cực.',
    'Biết một số cách khác (bóng nắng, rêu cây) và hạn chế của chúng.',
    'Vận dụng kĩ năng xác định hướng khi đi dã ngoại.'
  ],
  intro: 'Đi cắm trại trong rừng, điện thoại hết pin, em làm sao biết đâu là hướng Bắc? Người xưa đã dùng Mặt Trời, sao trời và chiếc <b>la bàn</b> để không bị lạc.',
  steps: [
    { title: 'Dùng la bàn', html: `<p>Kim nam châm của la bàn luôn chỉ hướng Bắc – Nam. Cách dùng: đặt la bàn nằm ngang, chờ kim đứng yên, xoay vỏ cho vạch “B” (N) trùng đầu kim chỉ Bắc → đọc các hướng khác.</p>`,
      svg: S.compass({ title: 'Mặt la bàn: tám hướng', note: 'Đầu kim màu đỏ thường chỉ hướng Bắc.' }), caption: 'Tránh để la bàn gần vật bằng sắt, nam châm.' },
    { title: 'Dựa vào Mặt Trời', html: `<ul><li>Buổi sáng: đứng giang tay phải về phía Mặt Trời mọc (Đông) → trước mặt là Bắc, sau lưng là Nam, tay trái là Tây.</li><li>Buổi chiều: tay trái chỉ phía Mặt Trời lặn (Tây) → trước mặt là Bắc.</li></ul>` },
    { title: 'Dựa vào sao Bắc Cực', html: `<p>Ban đêm ở nửa cầu Bắc, sao Bắc Cực luôn ở hướng Bắc. Có thể tìm qua chòm sao Đại Hùng (Gấu Lớn).</p>`,
      svg: S.table({ title: 'So sánh các cách xác định hướng', head: ['Cách', 'Lưu ý'], rows: [['La bàn', 'Chính xác, tránh vật bằng sắt'], ['Mặt Trời', 'Chỉ khi trời nắng, gần đúng'], ['Sao Bắc Cực', 'Ban đêm, trời quang, nửa cầu Bắc'], ['Điện thoại (GPS)', 'Cần pin, có thể mất sóng']], colW: 250 }), caption: 'Nên kết hợp nhiều cách.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Sáng: tay phải – Đông; chiều: tay trái – Tây; trước mặt – Bắc.</div>` }
  ],
  summary: 'Có thể xác định phương hướng ngoài thực tế bằng la bàn (kim chỉ Bắc – Nam), dựa vào Mặt Trời (mọc ở phía Đông, lặn ở phía Tây) hoặc sao Bắc Cực (luôn ở hướng Bắc, nửa cầu Bắc). Mỗi cách có ưu điểm và hạn chế; nên kết hợp nhiều cách.',
  examples: [
    { title: 'Mặt Trời', problem: 'Buổi sáng, em đứng quay lưng về phía Mặt Trời. Trước mặt em là hướng nào?', solution: 'Hướng Tây.' },
    { title: 'Góc hướng', problem: 'Từ hướng Bắc quay theo chiều kim đồng hồ 135° được hướng nào?', solution: 'Đông Nam.' },
    { title: 'Chòm sao', problem: 'Sao Bắc Cực dùng được ở nửa cầu nào?', solution: 'Nửa cầu Bắc.' }
  ],
  exercises: [
    { question: 'Buổi chiều, Mặt Trời ở bên tay trái em. Em đang quay mặt về hướng nào?', hints: ['Chiều Mặt Trời ở phía Tây.', 'Tay trái – Tây thì trước mặt là…'], solution: 'Hướng Bắc.' },
    { question: 'Từ Bắc quay 90° theo chiều kim đồng hồ, rồi quay thêm 90° nữa. Đang ở hướng nào? Tổng góc?', hints: ['90 + 90.', '180° là hướng…'], solution: '180°, hướng Nam.' },
    { question: 'Vì sao không nên dùng la bàn cạnh xe máy?', hints: ['Xe có nhiều sắt.', 'Kim bị hút lệch.'], solution: 'Sắt thép làm kim nam châm bị lệch, chỉ sai hướng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kim nam châm của la bàn luôn chỉ hướng Bắc – Nam.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Mặt Trời mọc ở hướng:', options: ['Đông', 'Tây', 'Bắc', 'Nam'], answer: 0, explain: 'Đông.' },
    { type: 'short', q: 'Từ hướng Bắc quay theo chiều kim đồng hồ đến hướng Đông Nam là bao nhiêu độ?', answer: '135', unit: '°', calc: '45*3', explain: '135.' },
    { type: 'mcq', q: 'Ban đêm ở nửa cầu Bắc, xác định hướng Bắc nhờ:', options: ['Sao Bắc Cực', 'Mặt Trăng', 'Sao Kim', 'Đám mây'], answer: 0, explain: 'Sao Bắc Cực.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên đặt la bàn gần nam châm để đo chính xác hơn.', answer: false, explain: 'Gây sai lệch.' },
    { type: 'short', q: 'Từ Bắc quay 90° rồi thêm 90° (cùng chiều kim đồng hồ). Tổng góc?', answer: '180', unit: '°', calc: '90+90', explain: '180, hướng Nam.' },
    { type: 'mcq', q: 'Buổi sáng giang tay phải về phía Mặt Trời mọc, sau lưng là hướng:', options: ['Nam', 'Bắc', 'Đông', 'Tây'], answer: 0, explain: 'Nam.' },
    { type: 'mcq', q: 'Hạn chế của cách dựa vào Mặt Trời:', options: ['Chỉ dùng khi có nắng', 'Cần pin', 'Cần internet', 'Không có hạn chế'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
