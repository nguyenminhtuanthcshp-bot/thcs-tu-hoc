/* Ngữ văn 9 – Bài 7. Viết: Tập làm thơ tám chữ; viết đoạn văn ghi lại cảm nghĩ về một bài thơ tám chữ. Bài thơ mẫu “Cánh diều tuổi thơ” và đoạn văn mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b7-viet', {
  objectives: [
    'Biết làm một bài thơ tám chữ đúng số tiếng, có nhịp và vần phù hợp, thể hiện cảm xúc chân thành.',
    'Biết viết đoạn văn ghi lại cảm nghĩ về một bài thơ tám chữ: nội dung và nghệ thuật.',
    'Biết tự rà soát, chỉnh sửa bài thơ, đoạn văn theo bảng kiểm.'
  ],
  intro: 'Làm thơ không chỉ dành cho nhà thơ. Khi em biết chọn một khoảnh khắc đáng nhớ, tìm hình ảnh riêng và gieo vần cho câu chữ “ngân” lên, em đã bước vào thế giới của thơ.',
  text: {
    title: 'Bài thơ và đoạn văn mẫu',
    html: `<p><b>Cánh diều tuổi thơ</b> (thơ tám chữ – nhóm biên soạn)</p>
<div class="poem">Chiều quê ngoại gió đồng xanh mát rượi,<br>Cánh diều ai chao lượn giữa trời cao.<br>Tiếng sáo vi vu ngân dài vời vợi,<br>Thả ước mơ bay tận những vì sao.<br><br>Nay phố thị giữa bộn bề năm tháng,<br>Ngước nhìn lên chỉ thấy khói mờ bay.<br>Chợt thèm lắm một chiều quê chạng vạng,<br>Sợi dây diều vẫn níu chặt đôi tay.</div>
<p><b>Đoạn văn cảm nghĩ (mẫu).</b> Bài thơ tám chữ “Cánh diều tuổi thơ” để lại trong em nỗi bâng khuâng khó tả. Khổ thơ đầu mở ra một chiều quê ngoại thật trong trẻo với “gió đồng xanh mát rượi”, cánh diều “chao lượn giữa trời cao” và tiếng sáo “ngân dài vời vợi”. Cánh diều ấy không chỉ là trò chơi mà còn mang theo “ước mơ bay tận những vì sao”. Sang khổ hai, bức tranh đổi khác: phố thị bộn bề, bầu trời chỉ còn “khói mờ bay”. Phép đối lập giữa hai khổ khiến nỗi nhớ quê, nhớ tuổi thơ càng thấm thía. Em đặc biệt thích câu kết “Sợi dây diều vẫn níu chặt đôi tay” – hình ảnh ẩn dụ cho sợi dây kỉ niệm không bao giờ đứt. Nhịp thơ 3/5, 4/4 dàn trải cùng vần cách “rượi – vợi”, “cao – sao”, “tháng – vạng”, “bay – tay” tạo âm hưởng nhẹ nhàng, tha thiết. Bài thơ nhắc em trân trọng những năm tháng tuổi thơ và quê hương.</p>`,
    source: 'Bài thơ và đoạn văn do nhóm biên soạn tự sáng tác.'
  },
  steps: [
    { title: 'Yêu cầu của bài thơ tám chữ', html: `<ul><li>Mỗi dòng <b>8 tiếng</b>; thường chia khổ 4 dòng.</li>
      <li><b>Nhịp</b> linh hoạt: 3/5, 5/3, 4/4, 3/2/3.</li>
      <li><b>Vần</b>: vần liền (AABB), vần cách (ABAB) hoặc vần ôm (ABBA).</li>
      <li>Có hình ảnh gợi cảm, cảm xúc chân thành, thông điệp rõ.</li></ul>` },
    { title: 'Quy trình làm thơ', html: `<p>Làm thơ cũng cần các bước rõ ràng:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Chọn cảm xúc', text: 'Khoảnh khắc đáng nhớ' }, { title: 'Tìm hình ảnh', text: 'Cụ thể, riêng' }, { title: 'Gieo vần, ngắt nhịp', text: '8 tiếng mỗi dòng' }, { title: 'Đọc to, sửa', text: 'Âm điệu, từ ngữ' }] }),
      caption: 'Quy trình tập làm thơ tám chữ.' },
    { title: 'Phân tích cách gieo vần bài mẫu', html: `<table class="tbl"><tr><th>Dòng</th><th>Tiếng cuối</th><th>Vần</th></tr>
      <tr><td>1 – 3</td><td>rượi – vợi</td><td>A (trắc)</td></tr>
      <tr><td>2 – 4</td><td>cao – sao</td><td>B (bằng)</td></tr>
      <tr><td>5 – 7</td><td>tháng – vạng</td><td>A (trắc)</td></tr>
      <tr><td>6 – 8</td><td>bay – tay</td><td>B (bằng)</td></tr></table>
      <p>→ Vần cách (ABAB), trắc – bằng xen kẽ tạo âm điệu nhịp nhàng.</p>` },
    { title: 'Đoạn văn ghi lại cảm nghĩ về bài thơ', html: `<p>Cấu trúc đoạn văn:</p>`,
      svg: S.mindmap({ center: 'Đoạn văn cảm nghĩ', branches: [{ title: 'Mở đoạn', items: ['Tên bài thơ', 'Ấn tượng chung'] }, { title: 'Nội dung', items: ['Hình ảnh nổi bật', 'Cảm xúc'] }, { title: 'Nghệ thuật', items: ['Nhịp, vần', 'Biện pháp tu từ'] }, { title: 'Kết đoạn', items: ['Ý nghĩa', 'Bài học'] }] }),
      caption: 'Các ý chính của đoạn văn cảm nghĩ.' },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Bài thơ</th><th>Đoạn văn</th></tr>
      <tr><td>☐ Mỗi dòng đúng 8 tiếng</td><td>☐ Nêu tên bài thơ, ấn tượng chung</td></tr>
      <tr><td>☐ Vần, nhịp phù hợp</td><td>☐ Dẫn câu thơ làm bằng chứng</td></tr>
      <tr><td>☐ Hình ảnh gợi cảm, riêng</td><td>☐ Nhận xét nghệ thuật</td></tr>
      <tr><td>☐ Cảm xúc chân thành</td><td>☐ Cảm xúc riêng, diễn đạt mạch lạc</td></tr></table>` }
  ],
  summary: 'Thơ tám chữ: mỗi dòng 8 tiếng, nhịp 3/5, 5/3, 4/4…, vần liền, cách hoặc ôm. Quy trình làm thơ: chọn cảm xúc – tìm hình ảnh – gieo vần, ngắt nhịp – đọc to và sửa. Đoạn văn cảm nghĩ về bài thơ: mở đoạn nêu tên bài và ấn tượng chung; thân đoạn trình bày cảm nghĩ về hình ảnh, cảm xúc, nghệ thuật có dẫn câu thơ; kết đoạn nêu ý nghĩa, bài học.',
  examples: [
    { title: 'Kiểm tra số tiếng', problem: 'Đếm số tiếng và xác định nhịp dòng “Chợt thèm lắm một chiều quê chạng vạng”.', solution: 'Chợt / thèm / lắm / một / chiều / quê / chạng / vạng = 8 tiếng. Nhịp 3/5: “Chợt thèm lắm / một chiều quê chạng vạng”.' },
    { title: 'Hình ảnh ẩn dụ', problem: 'Hình ảnh “Sợi dây diều vẫn níu chặt đôi tay” có ý nghĩa gì?', solution: 'Đây là ẩn dụ: sợi dây diều tượng trưng cho sợi dây kỉ niệm, tình cảm gắn bó với quê hương, tuổi thơ. Dù sống giữa phố thị, nhân vật trữ tình vẫn không rời được những kỉ niệm ấy.' },
    { title: 'Sửa một dòng thơ', problem: 'Dòng thơ “Cánh diều bay” chưa đúng thể. Hãy viết lại thành dòng 8 tiếng.', solution: 'Ví dụ: “Cánh diều bay chấp chới giữa trời xanh” (Cánh / diều / bay / chấp / chới / giữa / trời / xanh = 8 tiếng; nhịp 3/5).' }
  ],
  exercises: [
    { question: 'Làm một khổ thơ tám chữ (4 dòng) về mái trường, gieo vần liền hoặc vần cách.', hints: ['Chọn một hình ảnh: cây phượng, bảng đen, tiếng trống.', 'Đếm đủ 8 tiếng mỗi dòng.'], solution: 'Ví dụ (vần liền AABB): “Tiếng trống trường giục giã buổi đầu tiên, / Mẹ dắt tay qua cánh cổng bình yên. / Chín năm qua, bao nắng sớm mưa trưa, / Mai xa rồi, ai nhặt lá sân xưa?” Mỗi dòng 8 tiếng; dòng 1 – 2 vần “tiên – yên”, dòng 3 – 4 vần “trưa – xưa”; nhịp 3/5; câu hỏi cuối gợi nỗi lưu luyến khi sắp xa trường.' },
    { question: 'Chỉ ra lỗi và sửa khổ thơ sau: “Mẹ tôi ngồi vá áo dưới ánh đèn khuya / Kim chỉ đưa / Mẹ mỉm cười hiền / Tôi thương mẹ vô cùng” (dấu / ngăn cách các dòng).', hints: ['Đếm số tiếng mỗi dòng.', 'Kiểm tra vần.'], solution: 'Lỗi: số tiếng không đều (9, 3, 4, 5 tiếng), không có vần. Sửa: “Mẹ ngồi vá áo dưới ánh đèn khuya, / Đường kim chỉ đưa đều như gió thổi. / Ánh mắt hiền ẩn sau nếp nhăn kia, / Thương mẹ lắm mà con không nói nổi.” (mỗi dòng 8 tiếng; vần cách “khuya – kia”, “thổi – nổi”).' },
    { question: 'Viết đoạn văn (7 – 9 câu) ghi lại cảm nghĩ về bài thơ tám chữ “Gửi lớp chín” (phần Đọc).', hints: ['Ấn tượng chung, hình ảnh nổi bật.', 'Nghệ thuật: nhịp 3/5, điệp “Từ…”.'], solution: 'Ví dụ: Đọc “Gửi lớp chín”, em thấy như có ai nói hộ lòng mình. Ngay câu đầu “Rồi mai đây mỗi đứa một phương trời” đã gợi nỗi bâng khuâng của những ngày cuối cấp. Những hình ảnh thân quen – bảng đen, phấn trắng, hàng phượng, tiếng ve – hiện lên như một cuốn phim kỉ niệm. Em xúc động nhất ở khổ hai, khi phép điệp “Từ…” liệt kê những điều nuôi lớn ta: trang sách, lời thầy, bàn tay bạn. So sánh “lời thầy như nắng ấm ban mai” thật dịu dàng, ấm áp. Nhịp 3/5 dàn trải như một lời tâm sự chậm rãi. Câu kết “Xin cất giữ, mang theo suốt dặm dài” là lời hứa khiến em nghĩ đến chính mình. Bài thơ nhắc em trân trọng từng ngày còn lại bên mái trường.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Mỗi dòng thơ tám chữ có:', options: ['8 tiếng', '6 tiếng', '7 tiếng', 'số tiếng tuỳ ý'], answer: 0, explain: 'Thể thơ tám chữ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài thơ mẫu “Cánh diều tuổi thơ” gieo vần cách (ABAB).', answer: true, explain: 'rượi – vợi, cao – sao…' },
    { type: 'short', q: 'Kiểu vần ABBA được gọi là vần … (một chữ).', answer: ['ôm', 'om'], answerText: 'ôm', explain: 'Vần ôm.' },
    { type: 'mcq', q: 'Bước đầu tiên khi tập làm thơ là:', options: ['chọn cảm xúc, khoảnh khắc đáng nhớ', 'đếm chữ', 'đặt tên bài', 'chép thơ người khác'], answer: 0, explain: 'Cảm xúc là gốc của thơ.' },
    { type: 'mcq', q: 'Hình ảnh “Sợi dây diều vẫn níu chặt đôi tay” là:', options: ['ẩn dụ cho sợi dây kỉ niệm', 'so sánh', 'nói giảm nói tránh', 'liệt kê'], answer: 0, explain: 'Gắn bó với tuổi thơ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đoạn văn cảm nghĩ về bài thơ không cần dẫn câu thơ.', answer: false, explain: 'Cần dẫn câu thơ làm bằng chứng.' },
    { type: 'short', q: 'Hai khổ thơ “Cánh diều tuổi thơ” đối lập nhau: quê ngoại và phố … (một chữ).', answer: ['thị', 'thi'], answerText: 'thị', explain: '“Nay phố thị giữa bộn bề năm tháng”.' },
    { type: 'mcq', q: 'Nhịp thơ nào KHÔNG phổ biến ở thơ tám chữ?', options: ['1/7', '3/5', '4/4', '5/3'], answer: 0, explain: '3/5, 5/3, 4/4 thường gặp.' }
  ]
});
})();
