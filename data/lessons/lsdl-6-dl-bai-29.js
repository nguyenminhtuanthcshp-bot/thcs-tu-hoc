/* LS&ĐL 6 – Địa lí, Bài 29. Bảo vệ tự nhiên và khai thác thông minh các tài nguyên thiên nhiên vì sự phát triển bền vững. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-29', {
  objectives: [
    'Nêu được ý nghĩa của việc bảo vệ tự nhiên và khai thác thông minh các tài nguyên.',
    'Phân biệt tài nguyên tái tạo và không tái tạo.',
    'Hiểu khái niệm phát triển bền vững.',
    'Đề xuất được việc làm cụ thể để bảo vệ tự nhiên.'
  ],
  intro: 'Than đá phải mất hàng triệu năm mới hình thành nhưng con người có thể đốt hết một mỏ trong vài chục năm. Làm sao để thế hệ sau vẫn còn tài nguyên? Câu trả lời là <b>khai thác thông minh</b> và <b>phát triển bền vững</b>.',
  steps: [
    { title: 'Các loại tài nguyên', html: `<p>Phân loại:</p>`,
      svg: S.table({ title: 'Tài nguyên thiên nhiên', head: ['Loại', 'Ví dụ'], rows: [['Có thể tái tạo', 'Rừng, nước, đất, sinh vật'], ['Không tái tạo', 'Than, dầu mỏ, khí đốt, quặng'], ['Vô tận (năng lượng sạch)', 'Năng lượng Mặt Trời, gió']], colW: 250 }), caption: 'Ngay cả tài nguyên tái tạo cũng có thể cạn kiệt nếu khai thác quá mức.' },
    { title: 'Phát triển bền vững', html: `<p>Là sự phát triển đáp ứng nhu cầu hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai; kết hợp hài hoà <b>kinh tế – xã hội – môi trường</b>.</p>` },
    { title: 'Khai thác thông minh', html: `<p>Một số giải pháp:</p>`,
      svg: S.mindmap({ center: 'Khai thác thông minh', branches: [{ title: 'Tiết kiệm', items: ['Điện, nước', 'Giấy, nhựa'] }, { title: 'Tái chế', items: ['Phân loại rác', 'Tái sử dụng đồ cũ'] }, { title: 'Năng lượng sạch', items: ['Mặt Trời, gió', 'Giảm than, dầu'] }, { title: 'Bảo vệ', items: ['Trồng rừng', 'Bảo tồn loài quý'] }], w: 640, size: 13 }), caption: 'Ví dụ 3R: Giảm thiểu – Tái sử dụng – Tái chế.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Dùng hôm nay – nghĩ cho ngày mai.</div>` }
  ],
  summary: 'Tài nguyên thiên nhiên gồm loại có thể tái tạo (rừng, nước, đất, sinh vật), không tái tạo (than, dầu, khoáng sản) và năng lượng sạch gần như vô tận (Mặt Trời, gió). Phát triển bền vững là đáp ứng nhu cầu hiện tại mà không làm tổn hại thế hệ tương lai. Khai thác thông minh: tiết kiệm, tái chế, dùng năng lượng sạch, bảo vệ rừng và đa dạng sinh học.',
  examples: [
    { title: 'Tiết kiệm nước', problem: 'Khoá vòi khi đánh răng tiết kiệm 6 lít/lần, 2 lần/ngày. Một tuần tiết kiệm bao nhiêu lít?', solution: '6 × 2 × 7 = 84 lít.' },
    { title: 'Tái chế', problem: 'Lớp thu gom 15 kg giấy/tháng. Một năm học 9 tháng thu bao nhiêu kg?', solution: '135 kg.' },
    { title: 'Phân loại', problem: 'Dầu mỏ là tài nguyên tái tạo hay không tái tạo?', solution: 'Không tái tạo.' }
  ],
  exercises: [
    { question: 'Tắt đèn tiết kiệm 0,5 kWh/ngày. Một tháng (30 ngày) tiết kiệm bao nhiêu kWh?', hints: ['0,5 × 30.', 'Kết quả hai chữ số.'], solution: '15 kWh.' },
    { question: 'Kể hai tài nguyên không tái tạo.', hints: ['Nhiên liệu hoá thạch.', 'Quặng.'], solution: 'Than đá, dầu mỏ (khí đốt, quặng sắt…).' },
    { question: 'Phát triển bền vững kết hợp những mặt nào?', hints: ['Ba trụ cột.', 'Kinh tế…'], solution: 'Kinh tế, xã hội, môi trường.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Than đá là tài nguyên không tái tạo.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Tiết kiệm 6 lít/lần, 2 lần/ngày. Một tuần bao nhiêu lít?', answer: '84', unit: 'lít', calc: '6*2*7', explain: '84.' },
    { type: 'mcq', q: 'Năng lượng sạch:', options: ['Năng lượng Mặt Trời', 'Than đá', 'Dầu mỏ', 'Khí đốt'], answer: 0, explain: 'Mặt Trời.' },
    { type: 'short', q: 'Thu 15 kg giấy/tháng. 9 tháng bao nhiêu kg?', answer: '135', unit: 'kg', calc: '15*9', explain: '135.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tài nguyên tái tạo không bao giờ cạn kiệt dù khai thác thế nào.', answer: false, explain: 'Có thể cạn nếu quá mức.' },
    { type: 'short', q: 'Tiết kiệm 0,5 kWh/ngày. 30 ngày bao nhiêu kWh?', answer: '15', unit: 'kWh', calc: '0.5*30', explain: '15.' },
    { type: 'mcq', q: 'Việc làm góp phần phát triển bền vững:', options: ['Phân loại rác tại nguồn', 'Đốt rác nhựa', 'Bỏ đèn sáng cả ngày', 'Chặt cây lấy gỗ tuỳ ý'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Ba trụ cột của phát triển bền vững:', options: ['Kinh tế – xã hội – môi trường', 'Toán – Văn – Anh', 'Đất – nước – lửa', 'Ăn – ngủ – chơi'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
