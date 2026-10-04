/* Ngữ văn 8 – Ôn tập học kì II (Bài 6 – Bài 10). Ngữ liệu: đoạn truyện do nhóm biên soạn tự viết, hai câu đầu bài “Bạn đến chơi nhà” (Nguyễn Khuyến – phạm vi công cộng), ca dao (văn học dân gian) và câu văn tự đặt. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/on-tap-hk2', {
  objectives: [
    'Hệ thống hoá các thể loại đã học ở học kì II: truyện ngắn, thơ tự do, văn bản nghị luận văn học, văn bản thông tin và nghị luận về môi trường; đọc mở rộng theo hành trình.',
    'Hệ thống hoá kiến thức tiếng Việt: trợ từ, thán từ; biện pháp tu từ, nghĩa của từ, lựa chọn cấu trúc câu; thành phần biệt lập; kiểu câu theo mục đích nói; câu khẳng định, phủ định.',
    'Ôn lại các kiểu bài viết, bài nói của học kì II; vận dụng làm đề kiểm tra cuối năm.',
    'Tự đánh giá được điểm mạnh, điểm cần cố gắng và lập kế hoạch ôn tập.'
  ],
  intro: 'Học kì II đưa em đi từ những chân dung cuộc sống trong truyện ngắn, qua tin yêu và ước vọng của thơ tự do, đến trang viết của nhà văn, những vấn đề của hôm nay – ngày mai và hành trình cùng sách. Bài ôn tập giúp em nối tất cả lại thành một hệ thống.',
  text: {
    title: 'Ngữ liệu luyện tập',
    html: `<p>(1) Chiều ấy, mưa như trút. Tôi đứng nép dưới mái hiên, lòng thầm trách mình quên áo mưa. Bỗng một bà cụ bán rau – có lẽ đã ngoài bảy mươi – dúi vào tay tôi tấm ni lông còn gấp vuông vức. “Cháu cầm lấy mà về, kẻo ướt hết sách vở.” Chao ôi, tôi chỉ kịp lí nhí cảm ơn thì bà đã đội thúng rau đi vào màn mưa. Mãi sau này tôi vẫn nhớ cái dáng lưng còng ấy. <i>(Đoạn truyện do nhóm biên soạn viết)</i></p>
<div class="poem">(2) Đã bấy lâu nay bác tới nhà,<br>Trẻ thì đi vắng, chợ thì xa.<br><i>(Nguyễn Khuyến, “Bạn đến chơi nhà”)</i></div>
<p>(3) Ai ơi, chớ bỏ ruộng hoang, / Bao nhiêu tấc đất, tấc vàng bấy nhiêu. <i>(Ca dao)</i></p>`,
    source: '(1) Đoạn truyện do nhóm biên soạn tự viết. (2) “Bạn đến chơi nhà” – Nguyễn Khuyến (1835 – 1909), thơ Nôm, phạm vi công cộng. (3) Ca dao (văn học dân gian).'
  },
  steps: [
    { title: 'Bản đồ học kì II', html: `<p>Mỗi bài gắn với một thể loại đọc và một nhóm kiến thức tiếng Việt:</p>`,
      svg: S.mindmap({ center: 'Ngữ văn 8 – HK II', branches: [{ title: 'Bài 6', items: ['Truyện ngắn', 'Trợ từ, thán từ'] }, { title: 'Bài 7', items: ['Thơ tự do', 'Biện pháp tu từ…'] }, { title: 'Bài 8', items: ['Nghị luận văn học', 'Thành phần biệt lập'] }, { title: 'Bài 9', items: ['VB thông tin, nghị luận', 'Kiểu câu; phủ định'] }, { title: 'Bài 10', items: ['Đọc mở rộng', 'Ngày hội với sách'] }] }),
      caption: 'Bản đồ kiến thức Ngữ văn 8 – học kì II.' },
    { title: 'So sánh các thể loại', html: `<table class="tbl"><tr><th>Thể loại</th><th>Đặc điểm nhận biết</th><th>Khi đọc cần chú ý</th></tr>
      <tr><td>Truyện ngắn</td><td>Dung lượng nhỏ, ít nhân vật, một tình huống đặc sắc</td><td>Cốt truyện, tình huống, nhân vật, chi tiết, chủ đề</td></tr>
      <tr><td>Thơ tự do</td><td>Không hạn định số chữ, số dòng; vần nhịp linh hoạt</td><td>Hình ảnh, cảm xúc, biện pháp tu từ, mạch cảm xúc</td></tr>
      <tr><td>Nghị luận văn học</td><td>Bàn về tác phẩm, tác giả; bằng chứng lấy từ tác phẩm</td><td>Luận đề, luận điểm, lí lẽ, bằng chứng</td></tr>
      <tr><td>VB thông tin giải thích hiện tượng</td><td>Khách quan, nhân – quả, phương tiện phi ngôn ngữ</td><td>Cách triển khai, độ tin cậy của thông tin</td></tr>
      <tr><td>VB nghị luận xã hội (môi trường)</td><td>Ý kiến của người viết, kêu gọi hành động</td><td>Luận đề, luận điểm, bằng chứng thực tế</td></tr></table>` },
    { title: 'Tổng hợp tiếng Việt', html: `<table class="tbl"><tr><th>Kiến thức</th><th>Ghi nhớ nhanh</th><th>Ví dụ trong ngữ liệu</th></tr>
      <tr><td>Trợ từ</td><td>Nhấn mạnh, biểu thị thái độ (những, cái, chính, ngay, chỉ…)</td><td>“tôi <b>chỉ</b> kịp lí nhí cảm ơn”</td></tr>
      <tr><td>Thán từ</td><td>Bộc lộ cảm xúc hoặc gọi – đáp (ôi, chao ôi, này, vâng…)</td><td>“<b>Chao ôi</b>”</td></tr>
      <tr><td>Biện pháp tu từ</td><td>So sánh, ẩn dụ, nhân hoá, điệp ngữ, nói quá…</td><td>“mưa <b>như trút</b>” (so sánh); “tấc đất, tấc vàng”</td></tr>
      <tr><td>Thành phần biệt lập</td><td>Tình thái, cảm thán, gọi – đáp, phụ chú</td><td>“– <b>có lẽ đã ngoài bảy mươi</b> –” (phụ chú); “<b>Ai ơi</b>” (gọi – đáp)</td></tr>
      <tr><td>Kiểu câu theo mục đích</td><td>Kể, hỏi, khiến, cảm</td><td>“Cháu cầm lấy mà về…” (câu khiến)</td></tr>
      <tr><td>Câu phủ định</td><td>không, chẳng, chưa, chớ…; miêu tả / bác bỏ</td><td>“<b>chớ</b> bỏ ruộng hoang” (câu khiến mang ý phủ định)</td></tr></table>` },
    { title: 'Các kiểu bài viết, bài nói', html: `<table class="tbl"><tr><th>Bài</th><th>Viết</th><th>Nói và nghe</th></tr>
      <tr><td>6</td><td>Phân tích truyện: nhân vật, tình huống</td><td>Giới thiệu một cuốn sách (truyện)</td></tr>
      <tr><td>7</td><td>Làm thơ tự do; đoạn văn cảm nghĩ về bài thơ tự do</td><td>Thảo luận một vấn đề đời sống gợi từ tác phẩm</td></tr>
      <tr><td>8</td><td>Phân tích truyện: chủ đề, nét đặc sắc nghệ thuật</td><td>Trình bày ý kiến về văn học trong đời sống</td></tr>
      <tr><td>9</td><td>Thuyết minh giải thích hiện tượng tự nhiên; văn bản kiến nghị</td><td>Thảo luận về nề nếp sinh hoạt</td></tr>
      <tr><td>10</td><td>Giới thiệu sách; sáng tạo từ sách</td><td>Ngày hội với sách</td></tr></table>`,
      svg: S.flow({ w: 620, items: [{ title: 'Đọc đề', text: 'Gạch từ khoá' }, { title: 'Dàn ý', text: '5 phút' }, { title: 'Viết', text: 'Đủ ba phần' }, { title: 'Soát lại', text: 'Sửa lỗi' }] }),
      caption: 'Quy trình làm bài viết trong giờ kiểm tra.' },
    { title: 'Chiến lược làm bài kiểm tra cuối năm', html: `<ol><li><b>Đọc hiểu:</b> xác định thể loại trước; câu hỏi về nhân vật, chi tiết cần dẫn chứng cụ thể từ ngữ liệu.</li>
      <li><b>Tiếng Việt:</b> gọi đúng tên hiện tượng → chỉ ra từ ngữ → nêu tác dụng trong ngữ cảnh.</li>
      <li><b>Viết:</b> phân tích truyện cần có luận đề rõ, mỗi đoạn một luận điểm kèm bằng chứng; văn bản kiến nghị phải đúng thể thức.</li>
      <li>Phân bổ thời gian hợp lí; chừa 3 – 5 phút đọc lại.</li></ol>` }
  ],
  summary: 'Học kì II: truyện ngắn (tình huống, nhân vật, chi tiết), thơ tự do (hình ảnh, cảm xúc, vần nhịp linh hoạt), nghị luận văn học (luận đề, luận điểm, bằng chứng từ tác phẩm), văn bản thông tin và nghị luận về môi trường, đọc mở rộng. Tiếng Việt: trợ từ, thán từ; biện pháp tu từ, nghĩa của từ, cấu trúc câu; thành phần biệt lập; kiểu câu theo mục đích nói; câu khẳng định, phủ định. Viết: phân tích truyện, thơ tự do, thuyết minh giải thích, kiến nghị, giới thiệu sách.',
  examples: [
    { title: 'Đọc hiểu đoạn truyện', problem: 'Đoạn truyện (1) có tình huống gì? Chi tiết nào khắc hoạ rõ nhất nhân vật bà cụ?', solution: 'Tình huống: nhân vật “tôi” bị kẹt mưa vì quên áo mưa thì được một bà cụ bán rau xa lạ cho tấm ni lông. Chi tiết đặc sắc: bà “dúi vào tay tôi tấm ni lông còn gấp vuông vức”, dặn “kẻo ướt hết sách vở” rồi “đội thúng rau đi vào màn mưa” – cho thấy bà nghèo nhưng nhân hậu, lo cho người khác hơn bản thân, giúp đỡ mà không cần đền đáp.' },
    { title: 'Tiếng Việt tổng hợp', problem: 'Tìm trong đoạn (1): một thán từ, một thành phần phụ chú, một câu khiến.', solution: 'Thán từ: “Chao ôi” (bộc lộ cảm xúc xúc động, ân hận). Thành phần phụ chú: “có lẽ đã ngoài bảy mươi” (đặt giữa hai dấu gạch ngang, bổ sung thông tin về tuổi bà cụ; bên trong có từ tình thái “có lẽ”). Câu khiến: “Cháu cầm lấy mà về, kẻo ướt hết sách vở.” (lời bảo, khuyên của bà cụ).' },
    { title: 'Nghị luận văn học ngắn', problem: 'Nêu một luận điểm và bằng chứng khi phân tích hai câu thơ (2).', solution: 'Luận điểm: hai câu mở đầu thể hiện niềm vui mừng và sự bối rối rất thật của nhà thơ khi bạn đến. Bằng chứng: lời chào “Đã bấy lâu nay bác tới nhà” như tiếng reo mừng vì lâu lắm mới gặp; câu “Trẻ thì đi vắng, chợ thì xa” mở ra hoàn cảnh khó tiếp đãi, với nhịp 4/3 và điệp “thì” tạo giọng hóm hỉnh. Từ đó chuẩn bị cho câu kết “Bác đến chơi đây ta với ta” khẳng định tình bạn vượt lên vật chất.' }
  ],
  exercises: [
    { question: 'Chỉ ra biện pháp tu từ trong câu ca dao (3) và nêu tác dụng.', hints: ['Chú ý cách nói “tấc đất, tấc vàng”.', 'Cặp “bao nhiêu… bấy nhiêu” biểu thị quan hệ gì?'], solution: 'Biện pháp so sánh ngầm/ẩn dụ “tấc đất – tấc vàng” (đất quý như vàng), kết hợp cặp từ “bao nhiêu… bấy nhiêu” nhấn mạnh sự tương ứng. Tác dụng: khẳng định giá trị to lớn của đất đai, khuyên người nông dân chăm chỉ canh tác, không bỏ ruộng hoang; lời khuyên nhẹ nhàng mà thấm thía nhờ lời gọi “Ai ơi”.' },
    { question: 'Viết đoạn văn (6 – 8 câu) phân tích nhân vật bà cụ trong đoạn truyện (1), có dùng ít nhất một thành phần biệt lập.', hints: ['Câu chủ đề: nêu phẩm chất của bà cụ.', 'Dẫn chứng: hành động, lời nói, ngoại hình; nêu tác dụng.'], solution: 'Ví dụ: Bà cụ bán rau trong đoạn truyện là hình ảnh đẹp về lòng tốt giản dị. Bà nghèo – chỉ có thúng rau và tấm ni lông – nhưng sẵn sàng nhường chút che chở ấy cho một đứa trẻ xa lạ. Hành động “dúi vào tay” cho thấy bà giúp đỡ tự nhiên, không đợi được nhờ. Lời dặn “kẻo ướt hết sách vở” chứa đựng sự quan tâm như của một người bà. Chắc hẳn, bà sẽ ướt suốt quãng đường về, vậy mà bà vẫn “đội thúng rau đi vào màn mưa” không một lời than. Chi tiết “cái dáng lưng còng” khép lại đoạn văn như một ám ảnh, gợi lòng biết ơn trong nhân vật “tôi”. Qua bà cụ, tác giả nhắn gửi: lòng tốt thật sự thường lặng lẽ và không cần đền đáp. (Thành phần tình thái: “Chắc hẳn”.)' },
    { question: 'Lập dàn ý văn bản kiến nghị gửi nhà trường về việc mở “góc đọc sách” ở hành lang lớp học.', hints: ['Đủ thể thức: quốc hiệu, tiêu ngữ, kính gửi…', 'Thực trạng – lí do – đề xuất cụ thể – cảm ơn.'], solution: 'Phần đầu: Quốc hiệu, tiêu ngữ; địa điểm, ngày tháng; BẢN KIẾN NGHỊ (V/v mở góc đọc sách tại hành lang khối 8). Kính gửi: Ban Giám hiệu. Người kiến nghị: tập thể lớp 8A. Thực trạng: giờ ra chơi nhiều bạn dùng điện thoại hoặc chạy nhảy; thư viện ở xa, ít bạn tới. Lí do: góc đọc gần lớp giúp hình thành thói quen đọc, tận dụng giờ nghỉ. Đề xuất: bố trí hai giá sách, lớp 8A quyên góp và quản lí sách, luân phiên trực góc đọc. Kết thúc: mong được xem xét, cảm ơn; kí và ghi rõ họ tên.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Thể loại nào có đặc điểm “không hạn định số chữ, số dòng; vần nhịp linh hoạt”?', options: ['Thơ tự do', 'Thơ thất ngôn bát cú', 'Truyện ngắn', 'Văn bản kiến nghị'], answer: 0, explain: 'Bài 7.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong đoạn (1), “Chao ôi” là thán từ bộc lộ cảm xúc.', answer: true, explain: 'Thán từ cảm xúc.' },
    { type: 'short', q: 'Cụm từ đặt giữa hai dấu gạch ngang “có lẽ đã ngoài bảy mươi” là thành phần biệt lập gì (“thành phần …”)?', answer: ['phụ chú', 'phu chu', 'thành phần phụ chú'], answerText: 'phụ chú', explain: 'Bổ sung thông tin về tuổi bà cụ.' },
    { type: 'mcq', q: 'Bằng chứng trong văn bản nghị luận văn học chủ yếu lấy từ:', options: ['chính tác phẩm được bàn luận', 'số liệu thống kê kinh tế', 'bản tin thời tiết', 'quảng cáo'], answer: 0, explain: 'Bài 8.' },
    { type: 'mcq', q: 'Câu “Cháu cầm lấy mà về, kẻo ướt hết sách vở.” thuộc kiểu câu nào?', options: ['Câu khiến', 'Câu hỏi', 'Câu cảm', 'Câu kể thông báo'], answer: 0, explain: 'Lời bảo, khuyên.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Văn bản kiến nghị không cần ghi người hoặc cơ quan nhận.', answer: false, explain: 'Phải có mục “Kính gửi”.' },
    { type: 'short', q: 'Trong câu “tôi chỉ kịp lí nhí cảm ơn”, trợ từ nhấn mạnh là từ nào?', answer: ['chỉ', 'chi'], answerText: 'chỉ', explain: 'Nhấn mạnh sự ít ỏi, vội vàng.' },
    { type: 'mcq', q: 'Hai câu thơ (2) trích từ bài thơ nào của Nguyễn Khuyến?', options: ['Bạn đến chơi nhà', 'Thu ẩm', 'Tiến sĩ giấy', 'Qua Đèo Ngang'], answer: 0, explain: '“Qua Đèo Ngang” là của Bà Huyện Thanh Quan.' }
  ]
});
})();
