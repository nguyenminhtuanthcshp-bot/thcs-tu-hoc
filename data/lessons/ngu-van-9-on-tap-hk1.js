/* Ngữ văn 9 – Ôn tập học kì I (Bài 1 – Bài 5). Ngữ liệu: “Truyện Kiều” (Nguyễn Du), “Lục Vân Tiên” (Nguyễn Đình Chiểu) – nguyên văn tiếng Việt, phạm vi công cộng; ca dao (văn học dân gian); đoạn văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/on-tap-hk1', {
  objectives: [
    'Hệ thống hoá các thể loại đã học ở học kì I: truyện truyền kì, thơ song thất lục bát, truyện thơ Nôm, văn bản nghị luận văn học, bi kịch.',
    'Hệ thống hoá kiến thức tiếng Việt: điển tích – điển cố, yếu tố Hán Việt, chơi chữ, điệp thanh – điệp vần, chữ Nôm – chữ Quốc ngữ, cách dẫn trực tiếp – gián tiếp, trích dẫn tài liệu, câu rút gọn – câu đặc biệt.',
    'Ôn lại các kiểu bài viết, bài nói; vận dụng làm đề kiểm tra cuối học kì I.'
  ],
  intro: 'Học kì I đưa em đi qua thế giới kì ảo của truyện truyền kì, những cung bậc tâm trạng trong thơ song thất lục bát, hồn nước trong truyện thơ Nôm, vẻ đẹp văn chương qua nghị luận văn học và nỗi đau trong bi kịch. Hãy sắp xếp tất cả thành một “bản đồ” và luyện theo dạng đề.',
  text: {
    title: 'Ngữ liệu luyện tập',
    html: `<div class="poem">Trăm năm trong cõi người ta,<br>Chữ tài chữ mệnh khéo là ghét nhau.<br>Trải qua một cuộc bể dâu,<br>Những điều trông thấy mà đau đớn lòng.<br><i>(Nguyễn Du, “Truyện Kiều”)</i></div>
<div class="poem">Nhớ câu kiến nghĩa bất vi,<br>Làm người thế ấy cũng phi anh hùng.<br><i>(Nguyễn Đình Chiểu, “Lục Vân Tiên”)</i></div>
<p>(3) Đêm cuối năm. Mưa phùn. Cả phố đã lên đèn. Mẹ vẫn ngồi bên bếp lửa canh nồi bánh chưng. Thấy tôi, mẹ hỏi: “Học xong chưa con?” – “Xong rồi ạ.” <i>(Đoạn văn do nhóm biên soạn viết)</i></p>`,
    source: '(1) “Truyện Kiều” – Nguyễn Du; (2) “Lục Vân Tiên” – Nguyễn Đình Chiểu: nguyên văn tiếng Việt, thuộc phạm vi công cộng. (3) Đoạn văn do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Bản đồ học kì I', html: `<p>Mỗi bài gắn với một thể loại đọc và một nhóm kiến thức tiếng Việt:</p>`,
      svg: S.mindmap({ center: 'Ngữ văn 9 – HK I', branches: [{ title: 'Bài 1', items: ['Truyện truyền kì', 'Điển cố, Hán Việt'] }, { title: 'Bài 2', items: ['Song thất lục bát', 'Chơi chữ, điệp thanh'] }, { title: 'Bài 3', items: ['Truyện thơ Nôm', 'Chữ Nôm, Quốc ngữ'] }, { title: 'Bài 4', items: ['Nghị luận văn học', 'Dẫn trực tiếp, gián tiếp'] }, { title: 'Bài 5', items: ['Bi kịch', 'Câu rút gọn, đặc biệt'] }] }),
      caption: 'Bản đồ kiến thức học kì I.' },
    { title: 'So sánh các thể loại', html: `<table class="tbl"><tr><th>Thể loại</th><th>Đặc điểm nhận biết</th><th>Khi đọc cần chú ý</th></tr>
      <tr><td>Truyện truyền kì</td><td>Chữ Hán, yếu tố kì ảo đan xen hiện thực</td><td>Ý nghĩa của yếu tố kì ảo, số phận nhân vật</td></tr>
      <tr><td>Thơ song thất lục bát</td><td>Khổ 4 dòng: 7 – 7 – 6 – 8; vần lưng, vần chân</td><td>Nhịp 3/4, tâm trạng nhân vật trữ tình</td></tr>
      <tr><td>Truyện thơ Nôm</td><td>Viết bằng chữ Nôm, thể lục bát, có cốt truyện</td><td>Nhân vật, bút pháp tả cảnh ngụ tình</td></tr>
      <tr><td>Nghị luận văn học</td><td>Luận đề, luận điểm, lí lẽ, bằng chứng từ tác phẩm</td><td>Mối quan hệ giữa các luận điểm</td></tr>
      <tr><td>Bi kịch</td><td>Xung đột không thể điều hoà, kết cục đau thương</td><td>Lời thoại, chỉ dẫn sân khấu, xung đột</td></tr></table>` },
    { title: 'Tổng hợp tiếng Việt', html: `<table class="tbl"><tr><th>Kiến thức</th><th>Ghi nhớ nhanh</th><th>Ví dụ</th></tr>
      <tr><td>Điển cố</td><td>Câu chuyện, sự việc xưa được nhắc gọn</td><td>“bể dâu” (dâu bể): cuộc đời biến đổi</td></tr>
      <tr><td>Yếu tố Hán Việt</td><td>Hiểu nghĩa từng yếu tố</td><td>“kiến nghĩa bất vi”: thấy việc nghĩa không làm</td></tr>
      <tr><td>Chơi chữ</td><td>Đồng âm, nói lái, trại âm…</td><td>“Ruồi đậu mâm xôi đậu”</td></tr>
      <tr><td>Dẫn trực tiếp / gián tiếp</td><td>Nguyên văn trong ngoặc kép / thuật lại ý</td><td>Mẹ hỏi: “Học xong chưa con?”</td></tr>
      <tr><td>Câu rút gọn / đặc biệt</td><td>Khôi phục được / không có C – V</td><td>“Xong rồi ạ.” / “Mưa phùn.”</td></tr></table>` },
    { title: 'Các kiểu bài viết, bài nói', html: `<table class="tbl"><tr><th>Bài</th><th>Viết</th><th>Nói và nghe</th></tr>
      <tr><td>1, 3</td><td>Nghị luận về vấn đề cần giải quyết</td><td>Trình bày ý kiến về sự việc, vấn đề thời sự</td></tr>
      <tr><td>2</td><td>Phân tích bài thơ song thất lục bát</td><td>Thảo luận vấn đề gợi từ tác phẩm</td></tr>
      <tr><td>4</td><td>Phân tích một tác phẩm truyện</td><td>Thảo luận vấn đề phù hợp lứa tuổi</td></tr>
      <tr><td>5</td><td>Phân tích một tác phẩm kịch</td><td>Thảo luận vấn đề gợi từ tác phẩm</td></tr></table>` },
    { title: 'Chiến lược làm bài kiểm tra', html: `<p>Ba phần của đề kiểm tra thường gặp:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Đọc hiểu', text: 'Gạch từ khoá câu hỏi' }, { title: 'Tiếng Việt', text: 'Gọi tên → chỉ ra → tác dụng' }, { title: 'Viết', text: '5 phút lập dàn ý' }, { title: 'Soát lại', text: '3 – 5 phút sửa lỗi' }] }),
      caption: 'Trình tự làm bài kiểm tra cuối học kì.' }
  ],
  summary: 'Học kì I Ngữ văn 9: truyện truyền kì (yếu tố kì ảo), thơ song thất lục bát (khổ 7 – 7 – 6 – 8), truyện thơ Nôm (lục bát, tả cảnh ngụ tình), nghị luận văn học (luận đề – luận điểm – bằng chứng), bi kịch (xung đột không thể điều hoà). Tiếng Việt: điển cố, Hán Việt, chơi chữ, điệp thanh – điệp vần, chữ Nôm – Quốc ngữ, dẫn trực tiếp – gián tiếp, trích dẫn tài liệu, câu rút gọn – câu đặc biệt. Viết: nghị luận vấn đề cần giải quyết, phân tích thơ, truyện, kịch.',
  examples: [
    { title: 'Đọc hiểu truyện thơ Nôm', problem: 'Bốn câu mở đầu “Truyện Kiều” viết theo thể thơ gì? Nêu nội dung khái quát.', solution: 'Thể lục bát (câu 6 chữ xen câu 8 chữ; tiếng 6 câu lục vần với tiếng 6 câu bát: “ta – là”, tiếng 8 câu bát vần với tiếng 6 câu lục sau: “nhau – dâu”). Nội dung: nêu quy luật “tài mệnh tương đố” (tài năng và số mệnh thường ghét nhau) và nỗi đau trước những biến đổi dữ dội của cuộc đời – mở ra câu chuyện về người con gái tài sắc mà bạc mệnh.' },
    { title: 'Điển cố', problem: 'Giải thích điển cố “bể dâu” và nêu tác dụng.', solution: '“Bể dâu” rút từ thành ngữ Hán “thương hải biến vi tang điền” (biển xanh biến thành ruộng dâu), chỉ sự thay đổi lớn lao, dữ dội của cuộc đời. Dùng điển cố giúp câu thơ hàm súc: chỉ hai chữ mà gợi cả một thời đại loạn lạc, đổi thay, khiến “những điều trông thấy” đau đớn lòng.' },
    { title: 'Câu rút gọn và câu đặc biệt', problem: 'Tìm câu đặc biệt và câu rút gọn trong đoạn văn (3).', solution: 'Câu đặc biệt: “Đêm cuối năm.” (nêu thời gian), “Mưa phùn.” (thông báo hiện tượng). Câu rút gọn: “Xong rồi ạ.” (lược chủ ngữ “Con” và vị ngữ “học”, khôi phục: “Con học xong rồi ạ.”). Câu “Học xong chưa con?” cũng lược chủ ngữ nhưng có từ hô gọi “con” cho biết đối tượng.' }
  ],
  exercises: [
    { question: 'Giải thích nghĩa của “kiến nghĩa bất vi” và nêu quan niệm về người anh hùng trong hai câu “Lục Vân Tiên”.', hints: ['kiến: thấy; nghĩa: việc nghĩa; bất: không; vi: làm.', '“phi anh hùng”: không phải anh hùng.'], solution: '“Kiến nghĩa bất vi” là thấy việc nghĩa mà không làm (rút từ câu của Khổng Tử “kiến nghĩa bất vi vô dũng dã”). Hai câu thơ nêu quan niệm: người anh hùng là người thấy việc nghĩa thì phải làm, thấy người gặp nạn phải ra tay cứu giúp; kẻ thấy việc nghĩa mà làm ngơ thì không xứng là anh hùng. Đây là lí do Vân Tiên đánh cướp cứu Kiều Nguyệt Nga.' },
    { question: 'Chuyển câu dẫn trực tiếp trong đoạn văn (3) thành dẫn gián tiếp.', hints: ['Bỏ dấu ngoặc kép, dấu hai chấm.', 'Đổi ngôi xưng hô cho phù hợp.'], solution: 'Thấy tôi, mẹ hỏi tôi đã học xong chưa. Tôi thưa với mẹ là tôi đã học xong rồi.' },
    { question: 'Lập dàn ý đoạn văn phân tích bốn câu mở đầu “Truyện Kiều” (khoảng 200 chữ).', hints: ['Câu chủ đề.', 'Phân tích “tài – mệnh”, “bể dâu”, “đau đớn lòng”.'], solution: 'Câu chủ đề: Bốn câu mở đầu “Truyện Kiều” là lời chiêm nghiệm sâu sắc của Nguyễn Du về cuộc đời. Ý 1: “Trăm năm” – một đời người, “cõi người ta” – cuộc đời trần thế. Ý 2: “Chữ tài chữ mệnh khéo là ghét nhau” – quy luật tài mệnh tương đố, báo trước số phận Kiều. Ý 3: điển cố “bể dâu” – biến đổi dữ dội của thời đại. Ý 4: “đau đớn lòng” – tấm lòng nhân đạo, xót thương của nhà thơ. Câu kết: lời thơ lục bát giản dị mà hàm súc, mở ra toàn bộ câu chuyện.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khổ thơ song thất lục bát gồm các dòng có số tiếng lần lượt là:', options: ['7 – 7 – 6 – 8', '6 – 8 – 6 – 8', '7 – 7 – 7 – 7', '5 – 5 – 5 – 5'], answer: 0, explain: 'Hai dòng thất, một cặp lục bát.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Truyện Kiều” và “Lục Vân Tiên” đều là truyện thơ Nôm viết theo thể lục bát.', answer: true, explain: 'Hai truyện thơ Nôm tiêu biểu.' },
    { type: 'short', q: 'Điển cố chỉ sự biến đổi dữ dội của cuộc đời trong câu “Trải qua một cuộc … …” (hai chữ).', answer: ['bể dâu', 'be dau'], answerText: 'bể dâu', explain: 'Thương hải biến vi tang điền.' },
    { type: 'mcq', q: 'Câu “Mưa phùn.” trong đoạn văn (3) là:', options: ['câu đặc biệt', 'câu rút gọn', 'câu ghép', 'câu hỏi'], answer: 0, explain: 'Thông báo hiện tượng, không có C – V.' },
    { type: 'mcq', q: 'Yếu tố kì ảo là đặc trưng của thể loại:', options: ['truyện truyền kì', 'văn bản nghị luận', 'bi kịch', 'văn bản thông tin'], answer: 0, explain: 'Bài 1 – Thế giới kì ảo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lời dẫn gián tiếp phải đặt trong dấu ngoặc kép.', answer: false, explain: 'Dẫn trực tiếp mới đặt trong ngoặc kép.' },
    { type: 'short', q: '“Kiến nghĩa bất vi” nghĩa là thấy việc nghĩa mà không … (một chữ).', answer: ['làm', 'lam'], answerText: 'làm', explain: 'bất: không; vi: làm.' },
    { type: 'mcq', q: 'Bi kịch khác hài kịch chủ yếu ở:', options: ['xung đột không thể điều hoà và kết cục đau thương', 'có lời thoại', 'có chỉ dẫn sân khấu', 'được diễn trên sân khấu'], answer: 0, explain: 'Hai thể đều có lời thoại, chỉ dẫn sân khấu.' }
  ]
});
})();
