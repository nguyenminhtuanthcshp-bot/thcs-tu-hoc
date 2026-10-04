/* Ngữ văn 8 – Bài 2. Đọc hiểu: Thơ Đường luật. Văn bản đọc: “Thu ẩm” (Nguyễn Khuyến, 1835 – 1909) và “Bánh trôi nước” (Hồ Xuân Hương, cuối thế kỉ XVIII – đầu thế kỉ XIX) – thơ Nôm cổ, thuộc phạm vi công cộng. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b2-doc', {
  objectives: [
    'Nhận biết được đặc điểm của thơ thất ngôn bát cú và thất ngôn tứ tuyệt Đường luật: số câu, số chữ, bố cục, niêm, luật, vần, đối.',
    'Phân tích được tác dụng của hình ảnh, từ ngữ (từ tượng hình, từ láy), phép đối trong bài thơ.',
    'Nêu được chủ đề, cảm hứng và tâm trạng của nhân vật trữ tình.',
    'Trân trọng vẻ đẹp cổ điển của thơ ca trung đại Việt Nam.'
  ],
  intro: 'Thơ Đường luật giống như một “ngôi nhà” có kiến trúc chặt chẽ: số câu, số chữ, chỗ gieo vần, chỗ đối đều có quy định. Vậy mà trong khuôn khổ ấy, các nhà thơ Việt vẫn gửi được cả một trời thu làng quê hay một thân phận con người. Hãy đọc hai bài thơ Nôm dưới đây.',
  text: {
    title: 'Thu ẩm (Nguyễn Khuyến) và Bánh trôi nước (Hồ Xuân Hương)',
    html: `<p><b>Thu ẩm</b> <i>(Uống rượu mùa thu)</i></p>
<div class="poem">Năm gian nhà cỏ thấp le te,<br>Ngõ tối đêm sâu đóm lập loè.<br>Lưng giậu phất phơ màu khói nhạt,<br>Làn ao lóng lánh bóng trăng loe.<br>Da trời ai nhuộm mà xanh ngắt?<br>Mắt lão không vầy cũng đỏ hoe.<br>Rượu tiếng rằng hay, hay chẳng mấy,<br>Độ năm ba chén đã say nhè.</div>
<p><b>Bánh trôi nước</b></p>
<div class="poem">Thân em vừa trắng lại vừa tròn,<br>Bảy nổi ba chìm với nước non.<br>Rắn nát mặc dầu tay kẻ nặn,<br>Mà em vẫn giữ tấm lòng son.</div>
<p><i>Chú thích (của nhóm biên soạn):</i> <i>le te</i>: thấp, lè tè; <i>trăng loe</i>: ánh trăng toả rộng ra; <i>không vầy</i>: không dụi, không vò; <i>say nhè</i>: say lè nhè; <i>lòng son</i>: tấm lòng son sắt, thuỷ chung.</p>`,
    source: '“Thu ẩm” – Nguyễn Khuyến (1835 – 1909); “Bánh trôi nước” – Hồ Xuân Hương (cuối thế kỉ XVIII – đầu thế kỉ XIX). Thơ Nôm cổ, phạm vi công cộng; chú thích do nhóm biên soạn viết.'
  },
  steps: [
    { title: 'Nhận diện thơ Đường luật', html: `<table class="tbl"><tr><th>Đặc điểm</th><th>Thất ngôn bát cú</th><th>Thất ngôn tứ tuyệt</th></tr>
      <tr><td>Số câu, số chữ</td><td>8 câu, mỗi câu 7 chữ</td><td>4 câu, mỗi câu 7 chữ</td></tr>
      <tr><td>Bố cục</td><td>Đề (1–2), thực (3–4), luận (5–6), kết (7–8)</td><td>Khai (1), thừa (2), chuyển (3), hợp (4)</td></tr>
      <tr><td>Vần</td><td>Thường một vần bằng, gieo ở cuối câu 1, 2, 4, 6, 8</td><td>Gieo ở cuối câu 1, 2, 4</td></tr>
      <tr><td>Đối</td><td>Bắt buộc đối ở hai câu thực và hai câu luận</td><td>Không bắt buộc</td></tr>
      <tr><td>Luật, niêm</td><td colspan="2">Luật bằng hoặc trắc tính theo chữ thứ hai của câu 1; các chữ 2, 4, 6 theo quy tắc “nhất tam ngũ bất luận, nhị tứ lục phân minh”</td></tr></table>` },
    { title: 'Bố cục và mạch cảm xúc của “Thu ẩm”', html: `<p>Bài thơ đi từ cảnh đến tình, từ ngoại cảnh đến tâm trạng:</p>`,
      svg: S.flow({ items: [{ title: 'Đề (1–2)', text: 'Nhà cỏ thấp, ngõ tối, đóm lập loè' }, { title: 'Thực (3–4)', text: 'Khói nhạt lưng giậu, trăng loe mặt ao' }, { title: 'Luận (5–6)', text: 'Trời xanh ngắt, mắt lão đỏ hoe' }, { title: 'Kết (7–8)', text: 'Vài chén đã say: nỗi buồn khó giải' }] }),
      caption: 'Bố cục đề – thực – luận – kết của bài “Thu ẩm”.' },
    { title: 'Vần, luật và phép đối', html: `<ul><li><b>Vần:</b> một vần bằng “e/oe”: <i>te – loè – loe – hoe – nhè</i> (cuối câu 1, 2, 4, 6, 8).</li>
      <li><b>Luật:</b> chữ thứ hai câu 1 là “gian” (thanh bằng) → bài thơ làm theo <b>luật bằng</b>.</li>
      <li><b>Đối ở hai câu thực:</b> <i>Lưng giậu / Làn ao; phất phơ / lóng lánh; màu khói nhạt / bóng trăng loe</i> – đối từng cặp, tạo bức tranh cân xứng, có chiều cao (giậu) và mặt phẳng (ao).</li>
      <li><b>Đối ở hai câu luận:</b> <i>Da trời / Mắt lão; ai nhuộm / không vầy; xanh ngắt / đỏ hoe</i> – thiên nhiên thăm thẳm đặt cạnh con người già nua, buồn bã.</li></ul>` },
    { title: 'Hình ảnh, từ ngữ và tâm trạng', html: `<p>Các từ láy tượng hình <i>le te, lập loè, phất phơ, lóng lánh</i> vẽ nên một đêm thu làng quê tĩnh lặng, mờ ảo, rất Việt Nam. Câu hỏi “<i>Da trời ai nhuộm mà xanh ngắt?</i>” vừa ngỡ ngàng trước vẻ đẹp, vừa như một câu hỏi không lời đáp. Hình ảnh “<i>mắt lão … đỏ hoe</i>” gợi tuổi già, men rượu và cả nỗi buồn thầm kín.</p>
      <div class="box key">Hai câu kết tự giễu: rượu “hay chẳng mấy”, chỉ vài chén đã “say nhè”. Người đọc cảm nhận một tâm sự buồn của nhà nho ẩn dật trước thời thế – nỗi buồn khó nói, đành gửi vào chén rượu, cảnh thu.</div>` },
    { title: '“Bánh trôi nước” – thơ tứ tuyệt và lớp nghĩa ẩn dụ', html: `<table class="tbl"><tr><th>Câu</th><th>Nghĩa thực (chiếc bánh)</th><th>Nghĩa ẩn dụ (người phụ nữ)</th></tr>
      <tr><td>Khai: “trắng … tròn”</td><td>Bánh trắng, tròn</td><td>Vẻ đẹp trong trắng, đầy đặn</td></tr>
      <tr><td>Thừa: “Bảy nổi ba chìm”</td><td>Bánh luộc lúc chìm lúc nổi</td><td>Thân phận long đong, chìm nổi</td></tr>
      <tr><td>Chuyển: “Rắn nát … tay kẻ nặn”</td><td>Bánh rắn hay nát do người nặn</td><td>Số phận bị người khác định đoạt</td></tr>
      <tr><td>Hợp: “vẫn giữ tấm lòng son”</td><td>Nhân bánh màu đỏ</td><td>Phẩm chất son sắt, thuỷ chung không đổi</td></tr></table>
      <p>Bài thơ theo luật bằng (“em” – thanh bằng), vần “on”: <i>tròn – non – son</i>. Chữ “Mà” ở câu cuối tạo bước ngoặt: dù số phận chìm nổi, người phụ nữ vẫn khẳng định giá trị của mình.</p>` }
  ],
  summary: 'Thơ Đường luật có quy định chặt chẽ về số câu, số chữ, bố cục, vần, luật, niêm, đối. Thất ngôn bát cú có 8 câu, bố cục đề – thực – luận – kết, bắt buộc đối ở câu 3–4 và 5–6; thất ngôn tứ tuyệt có 4 câu, bố cục khai – thừa – chuyển – hợp. “Thu ẩm” vẽ cảnh đêm thu làng quê và gửi gắm nỗi buồn thầm kín; “Bánh trôi nước” dùng hình ảnh ẩn dụ để nói về vẻ đẹp, thân phận và tấm lòng son sắt của người phụ nữ.',
  examples: [
    { title: 'Xác định luật và vần', problem: 'Xác định luật (bằng hay trắc) và các chữ gieo vần của bài “Bánh trôi nước”.', solution: 'Chữ thứ hai câu 1 là “em” – thanh bằng nên bài thơ làm theo luật bằng. Vần “on” gieo ở cuối câu 1, 2, 4: “tròn – non – son” (đều là thanh bằng).' },
    { title: 'Phân tích phép đối', problem: 'Chỉ ra các cặp đối trong hai câu luận của “Thu ẩm” và nêu tác dụng.', solution: 'Các cặp đối: “Da trời – Mắt lão” (thiên nhiên – con người), “ai nhuộm – không vầy”, “xanh ngắt – đỏ hoe” (hai màu đối lập). Phép đối làm nổi bật sự tương phản giữa bầu trời thu trong xanh, bao la và con người già nua, đôi mắt đỏ hoe; qua đó gợi nỗi buồn, sự cô đơn của nhân vật trữ tình.' },
    { title: 'Hiểu chữ “Mà” trong câu kết', problem: 'Vì sao chữ “Mà” ở câu cuối bài “Bánh trôi nước” quan trọng?', solution: '“Mà” là quan hệ từ chỉ sự đối lập. Ba câu trên nói về vẻ đẹp và thân phận chìm nổi, bị người khác định đoạt; đến chữ “Mà”, ý thơ đảo chiều để khẳng định: dù hoàn cảnh thế nào, “em vẫn giữ tấm lòng son”. Nhờ đó, bài thơ không chỉ than thân mà còn thể hiện bản lĩnh, lòng tự trọng của người phụ nữ.' }
  ],
  exercises: [
    { question: 'Tìm bốn từ láy tượng hình trong bốn câu đầu bài “Thu ẩm” và cho biết mỗi từ gợi hình ảnh gì.', hints: ['Các từ láy đứng cạnh “thấp”, “đóm”, “màu khói”, “bóng trăng”.', 'Mỗi từ gợi dáng vẻ, trạng thái của sự vật.'], solution: '“le te”: nhà cỏ thấp lè tè, nghèo, đơn sơ; “lập loè”: ánh đóm lúc sáng lúc tắt trong ngõ tối; “phất phơ”: làn khói (sương) mỏng lay động ở lưng giậu; “lóng lánh”: bóng trăng phản chiếu lấp lánh trên mặt ao. Các từ láy vẽ nên đêm thu làng quê tĩnh lặng, mờ ảo.' },
    { question: 'Vì sao có thể nói “Thu ẩm” đi từ cảnh đến tình? Chỉ ra câu thơ đánh dấu sự chuyển hướng.', hints: ['Bốn câu đầu tả gì? Hai câu 5–6 xuất hiện hình ảnh nào của con người?', 'Chú ý hình ảnh “mắt lão”.'], solution: 'Bốn câu đầu tả cảnh đêm thu (nhà cỏ, ngõ tối, lưng giậu, làn ao). Đến câu 6 “Mắt lão không vầy cũng đỏ hoe”, hình ảnh con người xuất hiện, tâm trạng được bộc lộ; hai câu kết nói trực tiếp chuyện uống rượu, say. Vậy bài thơ đi từ cảnh vật bên ngoài đến tâm trạng bên trong.' },
    { question: 'Viết đoạn văn (5 – 7 câu) phân tích hai câu cuối bài “Bánh trôi nước”.', hints: ['Nghĩa thực và nghĩa ẩn dụ của “tay kẻ nặn”, “tấm lòng son”.', 'Tác dụng của quan hệ từ “Mà”, cụm “mặc dầu”.'], solution: 'Ví dụ: Hai câu kết là phần sâu sắc nhất của bài thơ. “Rắn nát mặc dầu tay kẻ nặn” – chiếc bánh rắn hay nát là do người nặn, cũng như số phận người phụ nữ xưa bị người khác định đoạt. Cụm từ “mặc dầu” vừa chấp nhận hoàn cảnh, vừa có chút thách thức. Nhưng chữ “Mà” ở câu cuối đã đảo chiều ý thơ: “em vẫn giữ tấm lòng son”. “Lòng son” vừa là nhân bánh đỏ, vừa là tấm lòng son sắt, thuỷ chung. Qua đó, Hồ Xuân Hương khẳng định vẻ đẹp phẩm chất và bản lĩnh của người phụ nữ trước mọi cảnh ngộ.' }
  ],
  quiz: [
    { type: 'short', q: 'Bài thơ thất ngôn tứ tuyệt có bao nhiêu câu?', answer: ['4', 'bốn'], answerText: '4', explain: '“Tứ tuyệt”: bốn câu.' },
    { type: 'mcq', q: 'Bố cục thường gặp của thơ thất ngôn bát cú là:', options: ['Đề – thực – luận – kết', 'Khai – thừa – chuyển – hợp', 'Mở bài – thân bài – kết bài', 'Mở đầu – thắt nút – mở nút'], answer: 0, explain: 'Khai – thừa – chuyển – hợp là của tứ tuyệt.' },
    { type: 'mcq', q: 'Trong thơ thất ngôn bát cú, phép đối bắt buộc ở:', options: ['hai câu thực và hai câu luận', 'hai câu đề', 'hai câu kết', 'tất cả các câu'], answer: 0, explain: 'Câu 3–4 và 5–6 phải đối nhau.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài “Thu ẩm” làm theo luật bằng vì chữ thứ hai câu đầu (“gian”) là thanh bằng.', answer: true, explain: 'Luật được xác định theo chữ thứ hai câu 1.' },
    { type: 'short', q: 'Các chữ “te, loè, loe, hoe, nhè” là chữ gieo vần của bài thơ nào (ghi tên bài)?', answer: ['Thu ẩm', 'Thu am'], answerText: 'Thu ẩm', explain: 'Vần “e/oe” của bài “Thu ẩm”.' },
    { type: 'mcq', q: 'Từ nào sau đây là từ láy tượng hình trong “Thu ẩm”?', options: ['lóng lánh', 'nhà cỏ', 'da trời', 'năm ba'], answer: 0, explain: '“Lóng lánh” gợi hình ảnh ánh sáng phản chiếu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Bảy nổi ba chìm” trong “Bánh trôi nước” chỉ đơn thuần tả cách luộc bánh, không có nghĩa ẩn dụ.', answer: false, explain: 'Còn ẩn dụ thân phận long đong của người phụ nữ.' },
    { type: 'mcq', q: 'Hình ảnh “tấm lòng son” trong “Bánh trôi nước” thể hiện:', options: ['phẩm chất son sắt, thuỷ chung', 'sự giàu có', 'nỗi sợ hãi', 'vẻ đẹp bên ngoài'], answer: 0, explain: 'Ẩn dụ cho tấm lòng trong sáng, thuỷ chung.' }
  ]
});
})();
