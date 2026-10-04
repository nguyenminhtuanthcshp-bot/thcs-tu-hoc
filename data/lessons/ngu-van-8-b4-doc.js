/* Ngữ văn 8 – Bài 4. Đọc hiểu: Thơ trào phúng. Văn bản đọc: “Tiến sĩ giấy” (Nguyễn Khuyến, 1835 – 1909; thơ Nôm cổ, phạm vi công cộng) và bài lục bát trào phúng “Bữa sáng ‘sống ảo’” do nhóm biên soạn tự sáng tác. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b4-doc', {
  objectives: [
    'Nhận biết được đặc điểm của thơ trào phúng: đối tượng, mục đích, thủ pháp gây cười (tương phản, phóng đại, chơi chữ, điệp từ) và giọng điệu.',
    'Phân tích được mâu thuẫn trào phúng giữa vẻ ngoài và bản chất của đối tượng.',
    'Nêu được thái độ, tình cảm của tác giả và thông điệp của bài thơ.',
    'Biết phê phán cái xấu, cái giả dối; trân trọng giá trị thật.'
  ],
  intro: 'Tết Trung thu xưa, trẻ con được mua những “ông tiến sĩ giấy” mặc áo mũ xanh đỏ, ngồi ghế chéo, che lọng. Từ món đồ chơi ấy, Nguyễn Khuyến – chính ông cũng đỗ đầu ba kì thi – đã viết nên một bài thơ cười ra nước mắt. Hãy đọc và khám phá tiếng cười trào phúng.',
  text: {
    title: 'Tiến sĩ giấy (Nguyễn Khuyến) và Bữa sáng “sống ảo” (thơ của nhóm biên soạn)',
    html: `<p><b>Tiến sĩ giấy</b></p>
<div class="poem">Cũng cờ, cũng biển, cũng cân đai,<br>Cũng gọi ông nghè có kém ai.<br>Mảnh giấy làm nên thân giáp bảng,<br>Nét son điểm rõ mặt văn khôi.<br>Tấm thân xiêm áo sao mà nhẹ?<br>Cái giá khoa danh thế mới hời!<br>Ghế chéo lọng xanh ngồi bảnh choẹ,<br>Nghĩ rằng đồ thật hoá đồ chơi!</div>
<p><i>Chú thích (của nhóm biên soạn):</i> <i>cờ, biển, cân đai</i>: cờ, biển đề tên, mũ áo đai của người đỗ đạt; <i>ông nghè</i>: tiến sĩ; <i>giáp bảng</i>: bảng ghi tên người đỗ tiến sĩ; <i>văn khôi</i>: người đứng đầu về văn chương; <i>hời</i>: rẻ; <i>bảnh choẹ</i>: ra vẻ oai vệ, chải chuốt.</p>
<p><b>Bữa sáng “sống ảo”</b></p>
<div class="poem">Sáng nay anh ghé quán quen,<br>Phở vừa bưng tới, chưa chen đũa vào.<br>Máy kia giơ thấp giơ cao,<br>Chụp nghiêng, chụp thẳng, lại trao bạn nhờ.<br>Chỉnh màu, lồng chữ, thêm thơ,<br>Đăng lên, rồi ngóng rồi chờ “tim” rơi.<br>Trăm “tim”, trăm tiếng “tuyệt vời”,<br>Quay sang, bát phở hết hơi nóng rồi!</div>`,
    source: '“Tiến sĩ giấy” – Nguyễn Khuyến (1835 – 1909), thơ Nôm cổ, phạm vi công cộng; chú thích do nhóm biên soạn viết. “Bữa sáng ‘sống ảo’” – bài lục bát do nhóm biên soạn tự sáng tác để minh hoạ.'
  },
  steps: [
    { title: 'Thơ trào phúng là gì?', html: `<p><b>Thơ trào phúng</b> là thơ dùng tiếng cười để châm biếm, phê phán những thói hư tật xấu, những hiện tượng lố bịch, giả dối trong xã hội (và có khi tự giễu chính mình – <i>tự trào</i>).</p>
      <table class="tbl"><tr><th>Yếu tố</th><th>Đặc điểm</th></tr>
      <tr><td>Đối tượng</td><td>Cái xấu, cái giả, cái lạc hậu: kẻ hữu danh vô thực, thói khoe khoang, học đòi…</td></tr>
      <tr><td>Mâu thuẫn trào phúng</td><td>Vênh lệch giữa bên ngoài và bên trong, giữa danh và thực, giữa mong muốn và kết quả</td></tr>
      <tr><td>Thủ pháp</td><td>Tương phản, phóng đại, chơi chữ, điệp từ, dùng từ ngữ mỉa mai</td></tr>
      <tr><td>Giọng điệu</td><td>Hài hước, mỉa mai, châm biếm, đả kích hoặc tự trào, xót xa</td></tr></table>` },
    { title: 'Mâu thuẫn trào phúng trong “Tiến sĩ giấy”', html: `<p>Toàn bài xây dựng trên sự đối lập giữa <b>vẻ ngoài oai vệ</b> và <b>bản chất rỗng tuếch</b>:</p>`,
      svg: S.mindmap({ center: 'Tiến sĩ giấy', branches: [{ title: 'Vẻ ngoài', items: ['Cờ, biển, cân đai', 'Ghế chéo, lọng xanh'] }, { title: 'Bản chất', items: ['Mảnh giấy, nét son', 'Thân nhẹ, giá hời'] }, { title: 'Thủ pháp', items: ['Điệp từ “cũng”', 'Tương phản, chơi chữ'] }, { title: 'Ý nghĩa', items: ['Phê phán hư danh', 'Tự trào, xót xa'] }] }),
      caption: 'Mâu thuẫn trào phúng giữa vẻ ngoài và bản chất trong “Tiến sĩ giấy”.' },
    { title: 'Thủ pháp nghệ thuật', html: `<ul><li><b>Điệp từ “cũng”</b> (4 lần ở hai câu đầu): nhấn mạnh sự đầy đủ bề ngoài, giọng như khẳng định mà thực chất là mỉa mai – “cũng” chỉ là “cũng như”, không phải thật.</li>
      <li><b>Đối và tương phản:</b> “Mảnh giấy – thân giáp bảng”, “Nét son – mặt văn khôi”: danh vị cao quý được làm từ thứ rẻ mọn.</li>
      <li><b>Câu hỏi, câu cảm:</b> “sao mà nhẹ?”, “thế mới hời!” – cái giá của khoa danh thật rẻ.</li>
      <li><b>Từ ngữ mỉa mai, chơi chữ:</b> “bảnh choẹ”; câu kết “đồ thật hoá đồ chơi” – những ông nghè thật chẳng khác gì đồ chơi.</li></ul>` },
    { title: 'Thái độ của tác giả: châm biếm và tự trào', html: `<p>Bài thơ châm biếm lớp người đỗ đạt, có danh vị mà không có thực chất, cũng như sự rẻ rúng của khoa cử cuối thế kỉ XIX. Điều đặc biệt: Nguyễn Khuyến cũng từng đỗ Tam nguyên, làm quan. Vì vậy tiếng cười còn là <b>tự trào</b> – tự giễu mình bất lực, “làm quan” mà không giúp được dân, được nước. Tiếng cười vì thế chua chát, thâm trầm.</p>
      <div class="box key">Cùng thời, Trần Tế Xương (Tú Xương, 1870 – 1907) cũng nổi tiếng với thơ trào phúng về trường thi, về thói học đòi, lố lăng của xã hội thành thị buổi giao thời – tiếng cười sắc sảo, gay gắt hơn.</div>` },
    { title: 'Tiếng cười trào phúng hôm nay', html: `<p>Bài lục bát “Bữa sáng ‘sống ảo’” cho thấy thơ trào phúng vẫn sống trong đời thường. Mâu thuẫn trào phúng: người “thưởng thức” bữa sáng lại quên ăn; thứ được quan tâm là “tim” ảo chứ không phải bát phở thật. Các động từ dồn dập <i>giơ thấp giơ cao, chụp nghiêng, chụp thẳng, chỉnh màu, lồng chữ</i> (liệt kê, phóng đại) và câu kết bất ngờ “bát phở hết hơi nóng rồi” tạo tiếng cười nhẹ nhàng mà thấm thía về thói sống ảo.</p>` }
  ],
  summary: 'Thơ trào phúng dùng tiếng cười để phê phán cái xấu, cái giả; tiếng cười nảy sinh từ mâu thuẫn giữa vẻ ngoài và bản chất, danh và thực. Thủ pháp thường gặp: điệp từ, tương phản, phóng đại, chơi chữ, từ ngữ mỉa mai; giọng điệu từ hài hước đến châm biếm, đả kích, tự trào. “Tiến sĩ giấy” mỉa mai lớp người hư danh và khoa cử rẻ rúng, đồng thời là lời tự trào chua chát của Nguyễn Khuyến.',
  examples: [
    { title: 'Tác dụng của điệp từ', problem: 'Nêu tác dụng của điệp từ “cũng” trong hai câu đầu bài “Tiến sĩ giấy”.', solution: 'Từ “cũng” lặp bốn lần liệt kê đủ cờ, biển, cân đai, danh xưng “ông nghè”, như khẳng định tiến sĩ giấy chẳng kém gì tiến sĩ thật. Nhưng chính sự lặp lại ấy tạo giọng mỉa mai: tất cả chỉ là “cũng có”, “cũng như” về hình thức, còn thực chất thì rỗng. Tiếng cười bật ra từ sự vênh lệch ấy.' },
    { title: 'Phát hiện mâu thuẫn trào phúng', problem: 'Chỉ ra mâu thuẫn trào phúng trong bài “Bữa sáng ‘sống ảo’”.', solution: 'Mục đích của bữa sáng là ăn cho no, cho ngon; nhưng nhân vật lại mải chụp ảnh, chỉnh ảnh, chờ lượt thích đến mức bát phở nguội. Mâu thuẫn giữa mục đích và hành động (đi ăn mà không ăn), giữa giá trị thật (bát phở nóng) và giá trị ảo (“tim”, lời khen) tạo nên tiếng cười.' },
    { title: 'Phân tích câu kết', problem: 'Phân tích câu kết “Nghĩ rằng đồ thật hoá đồ chơi!” trong bài “Tiến sĩ giấy”.', solution: 'Câu kết là một lối chơi chữ sâu cay: ông tiến sĩ giấy là đồ chơi, nhưng nhìn các ông nghè thật chỉ có danh mà không có thực, tác giả thấy “đồ thật” cũng hoá thành “đồ chơi”. Dấu chấm than thể hiện sự chua chát. Câu thơ vừa đả kích lớp người hư danh, vừa là lời tự giễu của chính nhà thơ.' }
  ],
  exercises: [
    { question: 'Tìm các từ ngữ chỉ vẻ ngoài và các từ ngữ chỉ bản chất của “tiến sĩ giấy” trong bài thơ.', hints: ['Vẻ ngoài: đồ dùng, trang phục, tư thế.', 'Bản chất: chất liệu làm nên ông tiến sĩ, cái giá của khoa danh.'], solution: 'Vẻ ngoài: cờ, biển, cân đai, ông nghè, giáp bảng, văn khôi, xiêm áo, ghế chéo, lọng xanh, ngồi bảnh choẹ. Bản chất: mảnh giấy, nét son, thân nhẹ, cái giá khoa danh “hời”, “đồ chơi”.' },
    { question: 'Chỉ ra hai thủ pháp gây cười trong bài “Bữa sáng ‘sống ảo’” và nêu tác dụng.', hints: ['Chú ý chuỗi động từ ở câu 3 – 5.', 'Chú ý câu kết bất ngờ.'], solution: '(1) Liệt kê, phóng đại chuỗi hành động “giơ thấp giơ cao, chụp nghiêng, chụp thẳng, trao bạn nhờ, chỉnh màu, lồng chữ, thêm thơ” – cho thấy sự say mê chụp ảnh thái quá. (2) Kết thúc bất ngờ “bát phở hết hơi nóng rồi” – đảo ngược mong đợi, làm lộ ra sự vô lí của thói sống ảo. Hai thủ pháp tạo tiếng cười nhẹ nhàng, nhắc nhở người đọc biết trân trọng giá trị thật.' },
    { question: 'Viết đoạn văn (5 – 7 câu) trình bày cảm nhận về tiếng cười tự trào trong “Tiến sĩ giấy”.', hints: ['Nhớ lại: Nguyễn Khuyến từng đỗ Tam nguyên, làm quan.', 'Tiếng cười ấy vui hay chua chát? Vì sao?'], solution: 'Ví dụ: Đọc “Tiến sĩ giấy”, ta không chỉ cười những ông nghè hữu danh vô thực mà còn nghe thấy tiếng cười tự giễu của chính Nguyễn Khuyến. Ông đỗ đầu ba kì thi, từng làm quan, nhưng sống giữa thời đất nước bị xâm lược, ông thấy danh vị của mình cũng chẳng giúp được gì cho dân, cho nước. Vì thế, câu “Tấm thân xiêm áo sao mà nhẹ?” như lời ông tự hỏi mình. Câu kết “đồ thật hoá đồ chơi” vừa mỉa mai người đời, vừa xót xa cho bản thân. Tiếng cười ấy thâm trầm, chua chát, cho thấy một nhân cách thanh cao, biết tự vấn lương tâm.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Mục đích chủ yếu của thơ trào phúng là:', options: ['dùng tiếng cười để phê phán cái xấu, cái giả', 'ca ngợi vẻ đẹp thiên nhiên', 'kể chuyện lịch sử', 'thuyết minh về sự vật'], answer: 0, explain: 'Tiếng cười mang tính phê phán.' },
    { type: 'short', q: 'Trong hai câu đầu “Tiến sĩ giấy”, từ nào được điệp lại bốn lần?', answer: ['cũng'], answerText: 'cũng', explain: '“Cũng cờ, cũng biển, cũng cân đai, / Cũng gọi ông nghè…”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tự trào là tiếng cười tự giễu chính mình.', answer: true, explain: 'Ví dụ tiếng cười của Nguyễn Khuyến trong “Tiến sĩ giấy”.' },
    { type: 'mcq', q: 'Mâu thuẫn trào phúng chính trong “Tiến sĩ giấy” là giữa:', options: ['vẻ ngoài oai vệ và bản chất rỗng tuếch', 'mùa thu và mùa xuân', 'thành thị và nông thôn', 'người già và trẻ em'], answer: 0, explain: 'Danh và thực vênh lệch.' },
    { type: 'mcq', q: 'Từ “bảnh choẹ” trong câu “Ghế chéo lọng xanh ngồi bảnh choẹ” mang sắc thái:', options: ['mỉa mai, giễu cợt', 'trang trọng, kính cẩn', 'buồn thương', 'trung tính'], answer: 0, explain: 'Chỉ vẻ oai vệ, chải chuốt một cách lố bịch.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài “Bữa sáng ‘sống ảo’” là thơ của Tú Xương.', answer: false, explain: 'Đây là bài lục bát do nhóm biên soạn sáng tác.' },
    { type: 'short', q: 'Bài “Bữa sáng ‘sống ảo’” được viết theo thể thơ gì?', answer: ['lục bát', 'luc bat'], answerText: 'lục bát', explain: 'Các cặp câu 6 – 8 tiếng.' },
    { type: 'mcq', q: 'Câu “Nghĩ rằng đồ thật hoá đồ chơi!” sử dụng chủ yếu thủ pháp:', options: ['chơi chữ, tương phản', 'so sánh ngang bằng', 'nhân hoá', 'nói giảm nói tránh'], answer: 0, explain: '“Đồ thật – đồ chơi” đặt cạnh nhau tạo chơi chữ.' }
  ]
});
})();
