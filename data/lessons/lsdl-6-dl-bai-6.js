/* LS&ĐL 6 – Địa lí, Bài 6. Trái Đất trong hệ Mặt Trời. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-6', {
  objectives: [
    'Xác định được vị trí của Trái Đất trong hệ Mặt Trời.',
    'Mô tả được hình dạng, kích thước Trái Đất.',
    'Giải thích được vì sao Trái Đất có sự sống.',
    'Thực hiện được một số phép tính về khoảng cách, kích thước.'
  ],
  intro: 'Ánh sáng đi khoảng 300 000 km mỗi giây, vậy mà phải mất hơn 8 phút mới đi từ Mặt Trời đến Trái Đất. Hành tinh của chúng ta nằm ở đâu trong <b>hệ Mặt Trời</b> rộng lớn?',
  steps: [
    { title: 'Vị trí trong hệ Mặt Trời', html: `<p>Hệ Mặt Trời có 8 hành tinh. Trái Đất đứng thứ <b>ba</b> theo thứ tự xa dần Mặt Trời, cách Mặt Trời trung bình khoảng <b>149,6 triệu km</b>.</p>`,
      svg: S.planets({ title: 'Tám hành tinh của hệ Mặt Trời', highlight: 2, items: [{ name: 'Thuỷ', r: 5 }, { name: 'Kim', r: 8 }, { name: 'Trái Đất', r: 8.5, sub: 'thứ 3' }, { name: 'Hoả', r: 6 }, { name: 'Mộc', r: 22 }, { name: 'Thổ', r: 19 }, { name: 'Thiên Vương', r: 13 }, { name: 'Hải Vương', r: 12.5 }], note: 'Kích thước tương đối gần đúng; khoảng cách không theo tỉ lệ.' }), caption: 'Mộc tinh là hành tinh lớn nhất.' },
    { title: 'Hình dạng và kích thước', html: `<ul><li>Trái Đất có dạng <b>hình cầu</b> (hơi dẹt ở hai cực).</li><li>Bán kính Xích đạo khoảng <b>6 378 km</b>; chu vi Xích đạo khoảng <b>40 076 km</b>.</li><li>Diện tích bề mặt khoảng 510 triệu km².</li></ul>` },
    { title: 'Vì sao có sự sống?', html: `<p>Khoảng cách đến Mặt Trời vừa phải → nhiệt độ thích hợp, có nước ở thể lỏng; có lớp khí quyển bảo vệ.</p>`,
      svg: S.table({ title: 'Số liệu cơ bản về Trái Đất', head: ['Đặc điểm', 'Số liệu (gần đúng)'], rows: [['Khoảng cách tới Mặt Trời', '149,6 triệu km'], ['Bán kính Xích đạo', '6 378 km'], ['Chu vi Xích đạo', '40 076 km'], ['Diện tích bề mặt', '510 triệu km²']], colW: 250 }), caption: 'Số liệu làm tròn.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Hành tinh thứ 3 – hình cầu – khoảng cách “vừa đủ” để có sự sống.</div>` }
  ],
  summary: 'Trái Đất là hành tinh thứ ba theo thứ tự xa dần Mặt Trời trong 8 hành tinh, cách Mặt Trời khoảng 149,6 triệu km. Trái Đất có dạng hình cầu, bán kính Xích đạo khoảng 6 378 km, chu vi Xích đạo khoảng 40 076 km, diện tích khoảng 510 triệu km². Khoảng cách vừa phải giúp Trái Đất có nhiệt độ thích hợp, nước lỏng và sự sống.',
  examples: [
    { title: 'Thời gian ánh sáng', problem: 'Ánh sáng đi 300 000 km/giây. Từ Mặt Trời (150 triệu km) đến Trái Đất mất bao nhiêu giây?', solution: '150 000 000 : 300 000 = 500 giây ≈ 8 phút 20 giây.' },
    { title: 'Thứ tự', problem: 'Hai hành tinh nằm giữa Mặt Trời và Trái Đất?', solution: 'Thuỷ tinh và Kim tinh.' },
    { title: 'Vòng quanh Trái Đất', problem: 'Máy bay bay 800 km/giờ dọc Xích đạo (khoảng 40 000 km) mất bao nhiêu giờ?', solution: '40 000 : 800 = 50 giờ.' }
  ],
  exercises: [
    { question: 'Kể tên 8 hành tinh theo thứ tự xa dần Mặt Trời.', hints: ['Bắt đầu: Thuỷ, Kim…', 'Kết thúc: Thiên Vương, Hải Vương.'], solution: 'Thuỷ, Kim, Trái Đất, Hoả, Mộc, Thổ, Thiên Vương, Hải Vương.' },
    { question: 'Đi bộ 5 km/giờ quanh Xích đạo (40 000 km) không nghỉ mất bao nhiêu giờ?', hints: ['40 000 : 5.', 'Kết quả hàng nghìn.'], solution: '8 000 giờ.' },
    { question: 'Vì sao Trái Đất có sự sống?', hints: ['Khoảng cách.', 'Nước, khí quyển.'], solution: 'Khoảng cách tới Mặt Trời vừa phải, nhiệt độ thích hợp, có nước lỏng và khí quyển.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trái Đất là hành tinh thứ ba theo thứ tự xa dần Mặt Trời.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hành tinh lớn nhất hệ Mặt Trời:', options: ['Mộc tinh', 'Trái Đất', 'Thổ tinh', 'Kim tinh'], answer: 0, explain: 'Mộc tinh.' },
    { type: 'short', q: 'Ánh sáng 300 000 km/giây đi 150 000 000 km mất bao nhiêu giây?', answer: '500', unit: 'giây', calc: '150000000/300000', explain: '500.' },
    { type: 'mcq', q: 'Hình dạng Trái Đất:', options: ['Hình cầu', 'Hình vuông', 'Hình đĩa phẳng', 'Hình trụ'], answer: 0, explain: 'Hình cầu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hệ Mặt Trời có 9 hành tinh.', answer: false, explain: '8 hành tinh.' },
    { type: 'short', q: 'Máy bay 800 km/giờ bay 40 000 km mất bao nhiêu giờ?', answer: '50', unit: 'giờ', calc: '40000/800', explain: '50.' },
    { type: 'mcq', q: 'Khoảng cách trung bình Trái Đất – Mặt Trời:', options: ['149,6 triệu km', '6 378 km', '40 076 km', '384 000 km'], answer: 0, explain: '149,6 triệu km.' },
    { type: 'short', q: 'Đi bộ 5 km/giờ quãng đường 40 000 km mất bao nhiêu giờ?', answer: '8000', answerText: '8 000', unit: 'giờ', calc: '40000/5', explain: '8 000.' }
  ]
});
})();
