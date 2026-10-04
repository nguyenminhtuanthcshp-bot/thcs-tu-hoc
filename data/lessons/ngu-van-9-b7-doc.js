/* Ngữ văn 9 – Bài 7. Đọc hiểu thơ sáu chữ, bảy chữ, tám chữ. Ngữ liệu: khổ đầu “Đây thôn Vĩ Dạ” của Hàn Mặc Tử (1912 – 1940; tác phẩm đã thuộc phạm vi công cộng theo thời hạn bảo hộ của Luật Sở hữu trí tuệ Việt Nam), bài thơ sáu chữ “Bữa cơm chiều” và bài thơ tám chữ “Gửi lớp chín” do nhóm biên soạn tự sáng tác. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b7-doc', {
  objectives: [
    'Nhận biết đặc điểm hình thức của thơ sáu chữ, bảy chữ, tám chữ: số tiếng, nhịp, vần, khổ thơ.',
    'Phân tích được hình ảnh, ngôn ngữ, biện pháp tu từ và cảm xúc của nhân vật trữ tình.',
    'Hiểu được chủ đề, thông điệp của bài thơ; biết so sánh các thể thơ.',
    'Trân trọng vẻ đẹp của quê hương, gia đình, tuổi học trò qua thơ.'
  ],
  intro: 'Mỗi thể thơ như một “điệu nhạc” riêng: thơ sáu chữ gọn và nhẹ, thơ bảy chữ trang nhã, thơ tám chữ dạt dào như lời tâm sự. Cùng đọc ba bài thơ để cảm nhận “hồn thơ muôn điệu”.',
  text: {
    title: 'Ba bài thơ',
    html: `<p><b>(1) Đây thôn Vĩ Dạ</b> (khổ đầu) – Hàn Mặc Tử – thơ bảy chữ</p>
<div class="poem">Sao anh không về chơi thôn Vĩ?<br>Nhìn nắng hàng cau nắng mới lên.<br>Vườn ai mướt quá xanh như ngọc,<br>Lá trúc che ngang mặt chữ điền.</div>
<p><b>(2) Bữa cơm chiều</b> – thơ sáu chữ (nhóm biên soạn)</p>
<div class="poem">Chiều về trên đồng lúa chín,<br>Vàng tươi một dải chân trời.<br>Mẹ gặt về khi trăng mọc,<br>Hương đồng thơm cả tiếng cười.<br><br>Con ngồi bên hiên đợi mẹ,<br>Ngọn đèn thắp sáng mái nhà.<br>Bữa cơm chiều nay muộn quá,<br>Mà thơm mãi đến mai xa.</div>
<p><b>(3) Gửi lớp chín</b> – thơ tám chữ (nhóm biên soạn)</p>
<div class="poem">Rồi mai đây mỗi đứa một phương trời,<br>Bảng đen kia còn nhớ phấn trắng rơi,<br>Hàng phượng già vẫn thắp lửa hè sang,<br>Sân trường cũ ngân mãi tiếng ve vang.<br><br>Ta lớn lên từ những trang sách mở,<br>Từ lời thầy như nắng ấm ban mai,<br>Từ bàn tay bạn nắm lúc bỡ ngỡ,<br>Xin cất giữ, mang theo suốt dặm dài.</div>
<p><i>Chú thích:</i> <b>thôn Vĩ</b>: thôn Vĩ Dạ bên bờ sông Hương, xứ Huế; <b>mặt chữ điền</b>: khuôn mặt vuông vức, phúc hậu (theo quan niệm xưa).</p>`,
    source: '(1) Khổ đầu bài “Đây thôn Vĩ Dạ” – Hàn Mặc Tử (1912 – 1940), in trong tập “Thơ Điên” (“Đau thương”); tác giả mất đã quá thời hạn bảo hộ nên tác phẩm thuộc phạm vi công cộng. (2), (3) Thơ do nhóm biên soạn tự sáng tác.'
  },
  steps: [
    { title: 'Đặc điểm các thể thơ', html: `<table class="tbl"><tr><th>Thể thơ</th><th>Số tiếng/dòng</th><th>Nhịp thường gặp</th><th>Vần</th></tr>
      <tr><td>Sáu chữ</td><td>6</td><td>3/3, 2/2/2, 2/4</td><td>vần chân, thường ở dòng chẵn</td></tr>
      <tr><td>Bảy chữ</td><td>7</td><td>4/3, 2/2/3</td><td>vần chân (dòng 1, 2, 4 hoặc dòng chẵn)</td></tr>
      <tr><td>Tám chữ</td><td>8</td><td>3/5, 3/2/3, 5/3, 4/4</td><td>vần liền, vần cách, vần ôm</td></tr></table>
      <p>Số dòng, số khổ không hạn định; các thể thơ này rất linh hoạt so với thơ Đường luật.</p>`,
      svg: S.mindmap({ center: 'Thơ 6, 7, 8 chữ', branches: [{ title: 'Số tiếng', items: ['6 / 7 / 8 tiếng', 'Mỗi dòng'] }, { title: 'Nhịp', items: ['3/3, 4/3', '3/5, 4/4'] }, { title: 'Vần', items: ['Vần chân', 'Liền, cách, ôm'] }, { title: 'Khổ thơ', items: ['Thường 4 dòng', 'Không hạn định số khổ'] }] }),
      caption: 'Yếu tố hình thức cần chú ý.' },
    { title: 'Đọc “Đây thôn Vĩ Dạ” (khổ đầu)', html: `<ul><li>Câu hỏi mở đầu “Sao anh không về chơi thôn Vĩ?” – vừa như lời trách nhẹ, vừa như lời mời; cũng có thể là nhà thơ tự hỏi mình → nỗi nhớ, niềm khao khát trở về.</li>
      <li>“Nắng hàng cau nắng mới lên” – điệp từ “nắng”, ánh nắng sớm tinh khôi, trong trẻo.</li>
      <li>“Mướt quá xanh như ngọc” – so sánh, câu cảm thán: khu vườn xanh non, mỡ màng, lấp lánh.</li>
      <li>“Lá trúc che ngang mặt chữ điền” – con người hiện lên kín đáo, phúc hậu, hài hoà với thiên nhiên.</li></ul>
      <div class="box key">Nhịp 4/3 quen thuộc, vần “lên – điền” (bằng). Bức tranh thôn Vĩ đẹp, tươi sáng, ẩn chứa tình yêu thiên nhiên, con người xứ Huế.</div>` },
    { title: 'Đọc hai bài thơ sáu chữ và tám chữ', html: `<ul><li><b>Bữa cơm chiều</b>: nhịp 2/2/2 hoặc 3/3 nhẹ nhàng; vần “trời – cười”, “nhà – xa”; hình ảnh mẹ gặt về, “hương đồng thơm cả tiếng cười” (ẩn dụ chuyển đổi cảm giác) → tình mẹ con, niềm hạnh phúc giản dị.</li>
      <li><b>Gửi lớp chín</b>: nhịp 3/5 dạt dào; vần liền “trời – rơi”, “sang – vang”, vần cách “mở – ngỡ”, “mai – dài”; điệp từ “Từ…” liệt kê những điều nuôi lớn ta → lòng biết ơn, lưu luyến tuổi học trò.</li></ul>` },
    { title: 'Cách đọc hiểu một bài thơ', html: `<p>Trình tự gợi ý:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Nhận diện thể thơ', text: 'Số tiếng, nhịp, vần' }, { title: 'Hình ảnh, từ ngữ', text: 'Chi tiết nổi bật' }, { title: 'Biện pháp tu từ', text: 'So sánh, điệp, ẩn dụ' }, { title: 'Cảm xúc, chủ đề', text: 'Thông điệp' }] }),
      caption: 'Các bước đọc hiểu thơ.' }
  ],
  summary: 'Thơ sáu chữ, bảy chữ, tám chữ có số tiếng mỗi dòng tương ứng; nhịp linh hoạt (3/3, 4/3, 3/5…); vần chân (liền, cách, ôm); số dòng, số khổ không hạn định. Khi đọc cần nhận diện thể thơ, phân tích hình ảnh, từ ngữ, biện pháp tu từ và cảm xúc, chủ đề. Khổ đầu “Đây thôn Vĩ Dạ” (Hàn Mặc Tử) vẽ bức tranh thôn Vĩ tươi sáng, trong trẻo, gửi gắm nỗi nhớ và tình yêu xứ Huế.',
  examples: [
    { title: 'Phân tích câu hỏi mở đầu', problem: 'Câu thơ “Sao anh không về chơi thôn Vĩ?” có thể hiểu theo những cách nào?', solution: 'Có thể hiểu là lời trách nhẹ nhàng, lời mời mọc của cô gái xứ Huế với “anh”; cũng có thể là nhà thơ phân thân, tự hỏi chính mình. Dù hiểu thế nào, câu hỏi đều gợi nỗi nhớ, niềm khao khát được trở về với thôn Vĩ, với những điều thân thương.' },
    { title: 'Biện pháp so sánh', problem: 'Phân tích hình ảnh “Vườn ai mướt quá xanh như ngọc”.', solution: '“Mướt” gợi vẻ non tơ, mỡ màng; câu cảm thán “mướt quá” là lời reo vui ngỡ ngàng. So sánh “xanh như ngọc” khiến khu vườn không chỉ xanh mà còn trong trẻo, lấp lánh dưới nắng sớm, quý giá như ngọc. Đại từ phiếm chỉ “ai” vừa gợi sự xa xôi, vừa mơ hồ, bâng khuâng.' },
    { title: 'Nhận diện thể thơ tám chữ', problem: 'Xác định nhịp và vần của hai dòng đầu bài “Gửi lớp chín”.', solution: 'Mỗi dòng 8 tiếng. Nhịp 3/5: “Rồi mai đây / mỗi đứa một phương trời”, “Bảng đen kia / còn nhớ phấn trắng rơi”. Vần liền: “trời – rơi” (vần bằng) ở cuối hai dòng liên tiếp.' }
  ],
  exercises: [
    { question: 'Chỉ ra điểm giống và khác nhau về hình thức giữa bài thơ sáu chữ và bài thơ tám chữ trong phần Đọc.', hints: ['Số tiếng, nhịp, vần.', 'Số khổ, số dòng mỗi khổ.'], solution: 'Giống: đều có 2 khổ, mỗi khổ 4 dòng; đều gieo vần chân. Khác: “Bữa cơm chiều” mỗi dòng 6 tiếng, nhịp 2/2/2 hoặc 3/3, vần ở dòng chẵn (trời – cười, nhà – xa); “Gửi lớp chín” mỗi dòng 8 tiếng, nhịp 3/5, khổ 1 vần liền (trời – rơi, sang – vang), khổ 2 vần cách (mở – ngỡ, mai – dài).' },
    { question: 'Phân tích tác dụng của phép điệp “Từ…” trong khổ 2 bài “Gửi lớp chín”.', hints: ['Liệt kê những gì?', 'Cảm xúc của nhân vật trữ tình.'], solution: 'Phép điệp “Từ” ở đầu ba dòng liệt kê những điều nuôi lớn tâm hồn học trò: trang sách, lời thầy, bàn tay bạn. Nhịp điệp tạo cảm giác dồn dâng, như dòng hồi tưởng nối tiếp. Qua đó, nhân vật trữ tình bày tỏ lòng biết ơn sâu sắc và mong muốn “cất giữ, mang theo suốt dặm dài” những kỉ niệm đẹp.' },
    { question: 'Viết đoạn văn (6 – 8 câu) phân tích câu thơ “Lá trúc che ngang mặt chữ điền”.', hints: ['Hình ảnh con người và thiên nhiên.', 'Vẻ đẹp kín đáo, phúc hậu.'], solution: 'Ví dụ: Sau nắng hàng cau, sau khu vườn “xanh như ngọc”, con người xứ Huế xuất hiện thật kín đáo qua câu thơ “Lá trúc che ngang mặt chữ điền”. “Mặt chữ điền” gợi khuôn mặt vuông vức, phúc hậu theo quan niệm xưa. Hình ảnh ấy không hiện ra trọn vẹn mà được “lá trúc che ngang”, thấp thoáng sau hàng trúc. Cách miêu tả gợi vẻ đẹp dịu dàng, e ấp, rất Huế. Con người và thiên nhiên hài hoà, làm nên bức tranh thôn Vĩ vừa tươi tắn vừa đằm thắm. Câu thơ cũng cho thấy tình cảm trìu mến, nâng niu của nhà thơ với con người nơi đây.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bài thơ “Đây thôn Vĩ Dạ” được viết theo thể thơ:', options: ['bảy chữ', 'sáu chữ', 'tám chữ', 'lục bát'], answer: 0, explain: 'Mỗi dòng 7 tiếng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thơ tám chữ có thể gieo vần liền, vần cách hoặc vần ôm.', answer: true, explain: 'Rất linh hoạt.' },
    { type: 'short', q: 'Tác giả bài thơ “Đây thôn Vĩ Dạ” là ai?', answer: ['Hàn Mặc Tử', 'Han Mac Tu', 'Hàn Mạc Tử', 'Han Mạc Tu'], answerText: 'Hàn Mặc Tử', explain: '1912 – 1940.' },
    { type: 'mcq', q: '“Vườn ai mướt quá xanh như ngọc” sử dụng biện pháp:', options: ['so sánh', 'nói quá', 'hoán dụ', 'chơi chữ'], answer: 0, explain: '“xanh như ngọc”.' },
    { type: 'mcq', q: 'Nhịp thường gặp của thơ bảy chữ là:', options: ['4/3', '1/7', '6/2', '8/0'], answer: 0, explain: 'Hoặc 2/2/3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thơ sáu chữ, bảy chữ, tám chữ bắt buộc mỗi bài phải có đúng bốn dòng.', answer: false, explain: 'Số dòng, số khổ không hạn định.' },
    { type: 'short', q: '“Mặt chữ …” chỉ khuôn mặt vuông vức, phúc hậu (một chữ).', answer: ['điền', 'dien'], answerText: 'điền', explain: 'mặt chữ điền.' },
    { type: 'mcq', q: 'Cảm xúc chủ đạo trong bài “Gửi lớp chín” là:', options: ['biết ơn, lưu luyến tuổi học trò', 'giận dữ', 'sợ hãi', 'thờ ơ'], answer: 0, explain: 'Điệp “Từ…”, “Xin cất giữ”.' }
  ]
});
})();
