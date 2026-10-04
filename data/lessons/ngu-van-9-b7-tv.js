/* Ngữ văn 9 – Bài 7. Thực hành tiếng Việt: Nghĩa của từ và sự phát triển của từ vựng (phát triển nghĩa mới, tạo từ mới, mượn từ); biện pháp tu từ so sánh, nhân hoá. Ngữ liệu: thơ Hàn Mặc Tử, Nguyễn Du (phạm vi công cộng), ca dao (văn học dân gian), câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b7-tv', {
  objectives: [
    'Hiểu nghĩa gốc, nghĩa chuyển của từ; nhận biết hai cách phát triển từ vựng: phát triển nghĩa mới cho từ cũ và tạo thêm từ mới (tạo từ ngữ mới, mượn từ).',
    'Nhận biết phương thức chuyển nghĩa ẩn dụ, hoán dụ.',
    'Phân tích được tác dụng của biện pháp tu từ so sánh, nhân hoá trong thơ.'
  ],
  intro: 'Từ “mạng” xưa chỉ tấm lưới (mạng nhện), nay còn chỉ mạng Internet; ngày trước chưa có từ “cư dân mạng”, nay ai cũng dùng. Từ vựng tiếng Việt luôn lớn lên cùng đời sống.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) <i>Vườn ai mướt quá xanh như ngọc</i> (Hàn Mặc Tử, “Đây thôn Vĩ Dạ”)</p>
<p>(2) <i>Buồn trông gió cuốn mặt duềnh, / Ầm ầm tiếng sóng kêu quanh ghế ngồi.</i> (Nguyễn Du, “Truyện Kiều”)</p>
<p>(3) <i>Trâu ơi ta bảo trâu này, / Trâu ra ngoài ruộng trâu cày với ta.</i> (Ca dao)</p>
<p>(4) Cư dân mạng chia sẻ rất nhanh clip về chú chó cứu chủ; nhiều người vào bình luận, thả tim. (Câu do nhóm biên soạn viết)</p>
<p>(5) Thư viện trường vừa xây dựng một ngân hàng đề ôn thi; các bạn có thể tải về qua cổng thông tin điện tử. (Câu do nhóm biên soạn viết)</p>`,
    source: '(1) Hàn Mặc Tử, (2) Nguyễn Du – thơ thuộc phạm vi công cộng; (3) ca dao (văn học dân gian); (4), (5) câu do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Nghĩa của từ: nghĩa gốc và nghĩa chuyển', html: `<ul><li><b>Nghĩa gốc</b>: nghĩa xuất hiện từ đầu, làm cơ sở cho các nghĩa khác. Ví dụ: <i>chân</i> – bộ phận dưới cùng của cơ thể.</li>
      <li><b>Nghĩa chuyển</b>: hình thành trên cơ sở nghĩa gốc. Ví dụ: <i>chân bàn, chân núi</i> (bộ phận dưới cùng của đồ vật, sự vật).</li>
      <li>Hai phương thức chuyển nghĩa chủ yếu: <b>ẩn dụ</b> (dựa trên nét tương đồng) và <b>hoán dụ</b> (dựa trên quan hệ gần gũi).</li></ul>` },
    { title: 'Hai cách phát triển từ vựng', html: `<p>Từ vựng phát triển theo hai hướng chính:</p>`,
      svg: S.mindmap({ center: 'Phát triển từ vựng', branches: [{ title: 'Nghĩa mới', items: ['ngân hàng (đề)', 'cổng (thông tin)'] }, { title: 'Ẩn dụ, hoán dụ', items: ['chân núi', 'thả tim'] }, { title: 'Tạo từ ngữ mới', items: ['cư dân mạng', 'kinh tế tri thức'] }, { title: 'Mượn từ', items: ['clip, video', 'Hán Việt: trực tuyến'] }] }),
      caption: 'Các cách phát triển từ vựng tiếng Việt.' },
    { title: 'Phân tích ví dụ', html: `<table class="tbl"><tr><th>Từ ngữ</th><th>Nghĩa cũ</th><th>Nghĩa mới / cách hình thành</th></tr>
      <tr><td>ngân hàng (đề)</td><td>tổ chức kinh doanh tiền tệ</td><td>nơi lưu trữ, tập hợp nhiều thứ để sử dụng (ẩn dụ)</td></tr>
      <tr><td>cổng (thông tin)</td><td>lối ra vào của nhà, khu vực</td><td>điểm truy cập vào hệ thống trên mạng (ẩn dụ)</td></tr>
      <tr><td>cư dân mạng</td><td>—</td><td>từ ngữ mới, ghép “cư dân” + “mạng”</td></tr>
      <tr><td>clip</td><td>—</td><td>mượn tiếng Anh</td></tr>
      <tr><td>thả tim</td><td>—</td><td>tạo mới, chỉ bày tỏ yêu thích trên mạng xã hội</td></tr></table>` },
    { title: 'So sánh và nhân hoá', html: `<ul><li><b>So sánh</b>: đối chiếu sự vật này với sự vật khác có nét tương đồng để tăng sức gợi hình, gợi cảm. (1) “xanh như ngọc”.</li>
      <li><b>Nhân hoá</b>: gọi, tả sự vật bằng từ ngữ vốn dùng cho người; trò chuyện với vật như với người. (2) “tiếng sóng <b>kêu</b>” – sóng như biết kêu than, gợi nỗi lo sợ của Kiều; (3) gọi “trâu ơi”, trò chuyện với trâu như bạn.</li></ul>`,
      svg: S.flow({ w: 620, items: [{ title: 'Nhận diện', text: 'như, là / từ chỉ người' }, { title: 'Chỉ ra', text: 'Vế so sánh / sự vật nhân hoá' }, { title: 'Tác dụng', text: 'Gợi hình, gợi cảm' }, { title: 'Ý nghĩa', text: 'Cảm xúc, chủ đề' }] }),
      caption: 'Các bước phân tích biện pháp tu từ.' }
  ],
  summary: 'Từ có nghĩa gốc và nghĩa chuyển; nghĩa chuyển hình thành chủ yếu theo phương thức ẩn dụ (tương đồng) và hoán dụ (gần gũi). Từ vựng phát triển bằng cách phát triển nghĩa mới cho từ cũ (ngân hàng đề, cổng thông tin) và tạo thêm từ mới: tạo từ ngữ mới (cư dân mạng, thả tim) hoặc mượn từ (clip, trực tuyến). So sánh đối chiếu sự vật có nét tương đồng; nhân hoá gọi, tả, trò chuyện với vật như với người; cả hai tăng sức gợi hình, gợi cảm.',
  examples: [
    { title: 'Nghĩa chuyển theo ẩn dụ', problem: 'Từ “ngân hàng” trong câu (5) được dùng với nghĩa nào? Theo phương thức gì?', solution: '“Ngân hàng đề” là kho lưu trữ nhiều đề ôn thi để sử dụng. Nghĩa mới hình thành theo phương thức ẩn dụ, dựa trên nét tương đồng: ngân hàng (tiền) là nơi cất giữ, tập hợp tiền; “ngân hàng đề” là nơi tập hợp đề.' },
    { title: 'Nhân hoá trong “Truyện Kiều”', problem: 'Phân tích biện pháp nhân hoá trong câu “Ầm ầm tiếng sóng kêu quanh ghế ngồi”.', solution: 'Sóng được nhân hoá bằng động từ “kêu”, như tiếng kêu than vây quanh Kiều. Kết hợp từ tượng thanh “ầm ầm”, hình ảnh gợi nỗi hoảng sợ, dự cảm về những tai hoạ sắp ập đến. Đây là bút pháp tả cảnh ngụ tình.' },
    { title: 'Nhận diện từ mới', problem: 'Tìm các từ ngữ mới trong câu (4) và cho biết cách hình thành.', solution: '“Cư dân mạng” – tạo từ ngữ mới bằng cách ghép; “clip” – mượn tiếng Anh; “thả tim” – tạo từ ngữ mới chỉ hành động bày tỏ yêu thích trên mạng xã hội; “bình luận” vốn có, nay thêm nghĩa “viết ý kiến dưới bài đăng”.' }
  ],
  exercises: [
    { question: 'Giải thích nghĩa gốc và nghĩa chuyển của từ “mũi” trong: mũi người, mũi thuyền, mũi Cà Mau, mũi tiêm.', hints: ['Nghĩa gốc: bộ phận cơ thể.', 'Nét chung: phần nhọn nhô ra phía trước.'], solution: 'Nghĩa gốc: “mũi người” – bộ phận nhô ra trên mặt, dùng để thở, ngửi. Nghĩa chuyển (ẩn dụ): “mũi thuyền” – phần nhọn phía trước thuyền; “mũi Cà Mau” – phần đất nhô ra biển; “mũi tiêm” – một lần tiêm (có đầu kim nhọn), cũng có thể hiểu là đơn vị lần tiêm.' },
    { question: 'Tìm 3 từ ngữ mới xuất hiện gần đây trong lĩnh vực công nghệ và cho biết cách hình thành.', hints: ['Ghép từ có sẵn.', 'Mượn tiếng nước ngoài.'], solution: 'Ví dụ: “học trực tuyến” – ghép “học” + “trực tuyến” (Hán Việt); “điện toán đám mây” – tạo từ ngữ mới, “đám mây” dùng theo ẩn dụ; “livestream” – mượn tiếng Anh, còn nói “phát trực tiếp”.' },
    { question: 'Viết đoạn văn (5 – 7 câu) tả cơn mưa đầu hạ, có sử dụng ít nhất một phép so sánh và một phép nhân hoá; gạch chân.', hints: ['So sánh: như, tựa, là.', 'Nhân hoá: gán hành động của người cho vật.'], solution: 'Ví dụ: Chiều ấy, bầu trời bỗng sầm lại. Gió <u>chạy</u> vội qua sân trường, <u>vò rối</u> tóc những hàng cây. Rồi mưa đổ xuống, hạt mưa <u>trắng xoá như những sợi chỉ bạc</u> giăng khắp không gian. Cây bàng già <u>dang tay</u> đón lấy cơn mưa đầu mùa. Chỉ mười phút sau, mưa tạnh, sân trường sạch bong, mát rượi. Mùi đất ngai ngái lan trong gió, <u>như lời chào</u> của mùa hạ.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hai cách phát triển từ vựng chủ yếu là:', options: ['phát triển nghĩa mới cho từ cũ và tạo thêm từ mới', 'bỏ bớt từ và rút gọn câu', 'chỉ mượn tiếng nước ngoài', 'chỉ dùng từ địa phương'], answer: 0, explain: 'Nghĩa mới / từ mới (tạo mới, mượn).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Ngân hàng đề” là nghĩa mới của từ “ngân hàng” hình thành theo phương thức ẩn dụ.', answer: true, explain: 'Nét tương đồng: nơi tập hợp, lưu trữ.' },
    { type: 'short', q: 'Từ “cư dân …” chỉ những người dùng mạng Internet (một chữ).', answer: ['mạng', 'mang'], answerText: 'mạng', explain: 'Từ ngữ mới.' },
    { type: 'mcq', q: 'Câu “Ầm ầm tiếng sóng kêu quanh ghế ngồi” sử dụng biện pháp:', options: ['nhân hoá', 'so sánh', 'chơi chữ', 'liệt kê'], answer: 0, explain: 'Sóng “kêu”.' },
    { type: 'mcq', q: 'Từ “clip” được hình thành bằng cách:', options: ['mượn tiếng nước ngoài', 'ghép hai từ thuần Việt', 'chuyển nghĩa ẩn dụ', 'láy âm'], answer: 0, explain: 'Mượn tiếng Anh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hoán dụ là phương thức chuyển nghĩa dựa trên nét tương đồng giữa hai sự vật.', answer: false, explain: 'Đó là ẩn dụ; hoán dụ dựa trên quan hệ gần gũi.' },
    { type: 'short', q: 'Nghĩa xuất hiện từ đầu, làm cơ sở cho các nghĩa khác gọi là nghĩa … (một chữ).', answer: ['gốc', 'goc'], answerText: 'gốc', explain: 'Nghĩa gốc – nghĩa chuyển.' },
    { type: 'mcq', q: 'Bài ca dao “Trâu ơi ta bảo trâu này” nhân hoá bằng cách:', options: ['trò chuyện, xưng hô với vật như với người', 'dùng từ “như”', 'nói quá', 'đảo ngữ'], answer: 0, explain: '“Trâu ơi”, “ta bảo”.' }
  ]
});
})();
