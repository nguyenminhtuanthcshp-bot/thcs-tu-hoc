/* Ngữ văn 6 – Bài 5. Nói và nghe: Chia sẻ một trải nghiệm về nơi em sống hoặc từng đến. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b5-noi', {
  objectives: [
    'Chia sẻ được một trải nghiệm về nơi em sống hoặc từng đến, có trình tự và cảm xúc.',
    'Biết chuẩn bị bài nói: chọn trải nghiệm, tìm ý, lập dàn ý, chuẩn bị tranh ảnh minh hoạ.',
    'Biết lắng nghe, đặt câu hỏi và nhận xét bài nói của bạn.'
  ],
  intro: 'Em đã từng đi thăm biển, lên núi, về quê ngoại hay khám phá một góc phố quen? Hãy biến chuyến đi ấy thành một bài nói hấp dẫn, như một “hướng dẫn viên du lịch nhí”.',
  steps: [
    { title: 'Chọn trải nghiệm', html: `<ul><li>Chọn nơi em <b>thực sự</b> sống hoặc đã đến, có ấn tượng sâu sắc.</li><li>Xác định điều đáng nhớ nhất: cảnh đẹp, con người, món ăn, một sự việc bất ngờ.</li><li>Chuẩn bị ảnh, tranh vẽ, bản đồ nhỏ nếu có.</li></ul>` },
    { title: 'Quy trình chuẩn bị', html: `<p>Thực hiện các bước:</p>`,
      svg: S.flow({ items: [{ title: 'Chọn nơi', text: 'Nơi sống / từng đến' }, { title: 'Tìm ý', text: 'Ở đâu? Khi nào? Thấy gì? Cảm xúc?' }, { title: 'Dàn ý', text: 'Mở đầu – nội dung – kết thúc' }, { title: 'Luyện nói', text: 'Tập với tranh ảnh, canh giờ' }] }),
      caption: 'Các bước chuẩn bị bài chia sẻ trải nghiệm.' },
    { title: 'Dàn ý bài nói', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr><tr><td>Mở đầu</td><td>Chào; giới thiệu nơi em muốn chia sẻ và lí do chọn.</td></tr><tr><td>Nội dung chính</td><td>Thời gian, người đi cùng; hành trình; cảnh vật, con người, nét văn hoá nổi bật; sự việc đáng nhớ.</td></tr><tr><td>Kết thúc</td><td>Cảm xúc, điều em học được; lời mời các bạn đến thăm.</td></tr></table>` },
    { title: 'Kĩ năng trình bày', html: `<ul><li>Dùng từ ngữ miêu tả gợi hình; kể có điểm nhấn.</li><li>Chỉ vào tranh ảnh đúng lúc; không che mặt bằng giấy.</li><li>Giọng nói hào hứng, rõ; ánh mắt hướng về người nghe.</li><li>Người nghe: ghi chú, chuẩn bị 1 câu hỏi cho bạn.</li></ul>` },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đạt / Chưa đạt</th></tr><tr><td>Giới thiệu rõ nơi chốn, thời gian</td><td></td></tr><tr><td>Có chi tiết cảnh vật, con người nổi bật</td><td></td></tr><tr><td>Có sự việc/ấn tượng đáng nhớ</td><td></td></tr><tr><td>Nêu cảm xúc, bài học</td><td></td></tr><tr><td>Sử dụng tranh ảnh hợp lí (nếu có)</td><td></td></tr><tr><td>Giọng nói, ánh mắt, cử chỉ phù hợp; đúng giờ</td><td></td></tr></table>` }
  ],
  summary: 'Chia sẻ trải nghiệm về một nơi chốn: chọn nơi có ấn tượng, tìm ý (ở đâu, khi nào, thấy gì, cảm xúc), lập dàn ý 3 phần, luyện nói với tranh ảnh; trình bày hào hứng, rõ ràng; người nghe ghi chú, đặt câu hỏi, nhận xét theo bảng kiểm.',
  examples: [
    { title: 'Lời mở đầu hấp dẫn', problem: 'Viết lời mở đầu cho bài nói về chuyến đi Hạ Long.', solution: '“Chào các bạn! Nếu được chọn một nơi để quay lại, mình sẽ chọn ngay vịnh Hạ Long – nơi có hàng nghìn hòn đảo đá nhô lên giữa làn nước xanh ngọc. Hôm nay mình xin kể về chuyến đi đáng nhớ ấy.”' },
    { title: 'Tả chi tiết nổi bật', problem: 'Viết 2 câu tả một chi tiết ấn tượng ở nơi em sống.', solution: 'Ví dụ: “Đầu ngõ nhà mình có cây gạo trăm tuổi. Tháng Ba, hoa gạo nở đỏ rực như những ngọn đuốc thắp sáng cả góc trời.”' },
    { title: 'Câu hỏi của người nghe', problem: 'Đặt một câu hỏi phù hợp sau khi nghe bạn kể về chuyến đi Đà Lạt.', solution: 'Ví dụ: “Trong chuyến đi, điều gì khiến bạn bất ngờ nhất về thời tiết hay con người Đà Lạt?”' }
  ],
  exercises: [
    { question: 'Lập dàn ý 3 phần cho bài nói về nơi em đang sống.', hints: ['Mở đầu: giới thiệu nơi sống.', 'Nội dung: cảnh, người, nét riêng; kết thúc: tình cảm.'], solution: 'MĐ: chào, giới thiệu “xóm em ở ven sông”. ND: cảnh bến sông, cây đa; người dân chăm chỉ, thân thiện; phiên chợ sớm; kỉ niệm tắm sông cùng bạn. KT: yêu và tự hào về xóm nhỏ; mời các bạn ghé chơi.' },
    { question: 'Nêu hai điều cần tránh khi dùng tranh ảnh minh hoạ lúc nói.', hints: ['Nghĩ về vị trí cầm tranh.', 'Nghĩ về số lượng tranh.'], solution: 'Tránh che mặt, quay lưng lại người nghe khi chỉ tranh; tránh dùng quá nhiều ảnh làm rối, lạc trọng tâm.' },
    { question: 'Viết lời kết thúc bài nói về một chuyến về quê ngoại.', hints: ['Nêu cảm xúc.', 'Nêu điều em học được hoặc mong muốn.'], solution: 'Ví dụ: “Chuyến về quê ngoại giúp mình hiểu vì sao mẹ luôn nhớ quê. Mình mong hè sau lại được về, được nghe bà kể chuyện dưới giàn mướp. Cảm ơn các bạn đã lắng nghe!”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bài nói chia sẻ trải nghiệm về một nơi chốn nên kể ở ngôi:', options: ['Thứ nhất', 'Thứ hai', 'Thứ ba', 'Không cần ngôi'], answer: 0, explain: 'Người nói kể trải nghiệm của mình.' },
    { type: 'mcq', q: 'Phần nội dung chính nên có:', options: ['Cảnh vật, con người, sự việc đáng nhớ', 'Chỉ lời chào', 'Chỉ lời cảm ơn', 'Danh sách đồ dùng'], answer: 0, explain: 'Đó là trọng tâm bài nói.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên chọn nơi em chưa từng đến và chỉ đọc thông tin trên mạng.', answer: false, explain: 'Cần trải nghiệm thật của em.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tranh ảnh minh hoạ giúp bài nói sinh động hơn nếu dùng hợp lí.', answer: true, explain: 'Hỗ trợ trực quan.' },
    { type: 'mcq', q: 'Người nghe nên:', options: ['Ghi chú và chuẩn bị câu hỏi', 'Làm việc riêng', 'Cười chê', 'Bỏ ra ngoài'], answer: 0, explain: 'Lắng nghe tích cực.' },
    { type: 'mcq', q: 'Khi chỉ vào tranh, em nên:', options: ['Đứng nghiêng, vẫn hướng mặt về người nghe', 'Quay lưng lại lớp', 'Che mặt bằng tranh', 'Không nói gì'], answer: 0, explain: 'Giữ giao tiếp với người nghe.' },
    { type: 'mcq', q: 'Phần kết thúc nên có:', options: ['Cảm xúc, bài học, lời mời', 'Một chuyến đi khác', 'Lời phê bình bạn', 'Số liệu dân số'], answer: 0, explain: 'Khép lại trọn vẹn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cần kiểm soát thời gian khi trình bày.', answer: true, explain: 'Đúng thời lượng quy định.' }
  ]
});
})();
