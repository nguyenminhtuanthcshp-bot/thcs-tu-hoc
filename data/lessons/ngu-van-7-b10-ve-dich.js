/* Ngữ văn 7 – Bài 10. Về đích: Ngày hội với sách. Nội dung hướng dẫn và ví dụ do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b10-ve-dich', {
  objectives: [
    'Tổ chức và tham gia “Ngày hội với sách”: trưng bày, giới thiệu sách, trình diễn sản phẩm sáng tạo sau khi đọc.',
    'Vận dụng tổng hợp kĩ năng đọc, viết, nói và nghe đã học trong năm.',
    'Lan toả tình yêu sách và văn hoá đọc trong trường lớp.'
  ],
  intro: 'Sau một năm “chinh phục” những trang sách, đã đến lúc về đích! Ngày hội với sách là dịp để em khoe những cuốn sách mình yêu và những sản phẩm sáng tạo mình đã làm.',
  steps: [
    { title: 'Các hoạt động trong ngày hội', html: `<p>Ngày hội có thể gồm nhiều hoạt động phong phú:</p>`,
      svg: S.mindmap({ center: 'Ngày hội với sách', branches: [{ title: 'Trưng bày', items: ['Góc sách theo thể loại', 'Tranh, sơ đồ, bookmark'] }, { title: 'Giới thiệu sách', items: ['Bài nói 1–3 phút', 'Poster giới thiệu'] }, { title: 'Trình diễn', items: ['Đọc thơ, kể chuyện', 'Đóng vai nhân vật'] }, { title: 'Giao lưu', items: ['Đổi sách', 'Đố vui về sách'] }] }),
      caption: 'Các hoạt động gợi ý cho ngày hội.' },
    { title: 'Kế hoạch tổ chức', html: `<p>Lớp chia nhóm, phân công và chuẩn bị theo tiến trình:</p>`,
      svg: S.flow({ items: [{ title: 'Lên ý tưởng', text: 'Chủ đề, hoạt động' }, { title: 'Phân công', text: 'Nhóm trưng bày, dẫn chương trình…' }, { title: 'Chuẩn bị', text: 'Sản phẩm, kịch bản, tập dượt' }, { title: 'Tổ chức, rút kinh nghiệm', text: 'Diễn ra ngày hội, tổng kết' }] }),
      caption: 'Bốn bước tổ chức ngày hội.' },
    { title: 'Bảng phân công mẫu', html: `<table class="tbl"><tr><th>Nhóm</th><th>Nhiệm vụ</th><th>Sản phẩm</th></tr>
      <tr><td>Nhóm 1</td><td>Góc truyện và tiểu thuyết</td><td>Poster giới thiệu “Không gia đình”, sơ đồ nhân vật</td></tr>
      <tr><td>Nhóm 2</td><td>Góc thơ và ca dao</td><td>Tuyển tập thơ bốn chữ, năm chữ do lớp sáng tác</td></tr>
      <tr><td>Nhóm 3</td><td>Góc ngụ ngôn và khoa học viễn tưởng</td><td>Tiểu phẩm “Đẽo cày giữa đường”, mô hình tàu Nautilus</td></tr>
      <tr><td>Nhóm 4</td><td>Góc sách thông tin</td><td>Sơ đồ về rừng ngập mặn, bảng luật trò chơi dân gian</td></tr>
      <tr><td>Ban tổ chức</td><td>Dẫn chương trình, đố vui, tổng kết</td><td>Kịch bản chương trình, câu hỏi đố vui</td></tr></table>` },
    { title: 'Bài giới thiệu sách 1 phút', html: `<p>Cấu trúc gợi ý: <b>Móc câu</b> (câu hỏi, chi tiết gây tò mò) → <b>Thông tin sách</b> (tên, tác giả, thể loại) → <b>Điều hấp dẫn</b> (không kể hết kết thúc!) → <b>Lời mời</b>.</p>
      <div class="box text"><p>“Các bạn có biết một cậu bé tám tuổi bị bán cho một gánh xiếc rong sẽ sống ra sao không? Đó là Rémi trong tiểu thuyết “Không gia đình” của nhà văn Pháp Hector Malot. Cùng cụ Vitalis, chú chó Capi và chú khỉ Joli-Coeur, Rémi đi khắp nước Pháp, gặp bao gian nan và cả những tấm lòng tốt đẹp. Liệu cậu có tìm được gia đình thật của mình? Mời các bạn mượn sách ở góc Nhóm 1 để tự khám phá nhé!”</p></div>
      <p class="muted">Lời giới thiệu do nhóm biên soạn viết để minh hoạ.</p>` },
    { title: 'Đánh giá và rút kinh nghiệm', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Tốt</th><th>Đạt</th><th>Cần cố gắng</th></tr>
      <tr><td>Sản phẩm đúng nội dung sách, sáng tạo</td><td></td><td></td><td></td></tr>
      <tr><td>Giới thiệu rõ ràng, hấp dẫn</td><td></td><td></td><td></td></tr>
      <tr><td>Phối hợp nhóm</td><td></td><td></td><td></td></tr>
      <tr><td>Ghi đúng tên sách, tác giả, nguồn trích dẫn</td><td></td><td></td><td></td></tr></table>
      <div class="box tip">Sau ngày hội, mỗi bạn viết 3–5 dòng: điều em học được, cuốn sách em muốn đọc tiếp trong hè.</div>` }
  ],
  summary: 'Ngày hội với sách: trưng bày sách và sản phẩm sáng tạo theo thể loại, giới thiệu sách, trình diễn (đọc thơ, kể chuyện, tiểu phẩm), giao lưu đổi sách, đố vui. Tổ chức theo bốn bước: lên ý tưởng – phân công – chuẩn bị – tổ chức và rút kinh nghiệm. Bài giới thiệu sách: móc câu – thông tin sách – điều hấp dẫn (không kể hết kết thúc) – lời mời.',
  examples: [
    { title: 'Câu mở đầu hấp dẫn', problem: 'Viết câu “móc câu” để giới thiệu “Hai vạn dặm dưới đáy biển”.', solution: '“Nếu một “con quái vật” biển khổng lồ hoá ra lại là một con tàu, bạn có dám bước vào bên trong không?”' },
    { title: 'Đố vui về sách', problem: 'Soạn một câu đố vui về truyện ngụ ngôn đã học.', solution: '“Nhân vật nào tưởng bầu trời chỉ bé bằng chiếc vung?” – Đáp án: con ếch trong truyện “Ếch ngồi đáy giếng”.' },
    { title: 'Tránh “spoil”', problem: 'Vì sao bài giới thiệu sách không nên kể hết kết thúc?', solution: 'Kể hết kết thúc làm mất sự tò mò, người nghe không còn muốn đọc. Nên dừng ở câu hỏi gợi mở để khơi dậy mong muốn tự khám phá.' }
  ],
  exercises: [
    { question: 'Viết bài giới thiệu sách 1 phút (khoảng 80–120 chữ) về một cuốn sách em yêu thích.', hints: ['Theo cấu trúc: móc câu – thông tin – điều hấp dẫn – lời mời.', 'Không kể hết kết thúc.'], solution: 'Ví dụ (tuyển tập truyện ngụ ngôn Aesop): “Bạn có biết vì sao chú rùa chậm chạp lại thắng thỏ trong cuộc chạy thi? Câu trả lời nằm trong tuyển tập truyện ngụ ngôn Aesop – nhà kể chuyện Hy Lạp cổ đại. Mỗi truyện chỉ dài vài đoạn nhưng chứa một bài học thông minh, dí dỏm về cách sống. Đọc xong, bạn sẽ thấy mình trong cả con cáo lẫn chú rùa. Hãy ghé góc Nhóm 3 để đọc thử nhé!”' },
    { question: 'Lập kế hoạch ngắn cho nhóm em trong ngày hội (nhiệm vụ, sản phẩm, người phụ trách, thời hạn).', hints: ['Lập bảng 4 cột.', 'Mỗi bạn một nhiệm vụ rõ ràng.'], solution: 'Ví dụ: Nhiệm vụ – làm poster “Không gia đình” | Sản phẩm – 1 poster A1 | Phụ trách – Lan, Minh | Thời hạn – thứ Tư. Nhiệm vụ – tập tiểu phẩm “Đẽo cày giữa đường” | Sản phẩm – tiểu phẩm 5 phút | Phụ trách – Hùng, Mai, Tú | Thời hạn – thứ Năm. Nhiệm vụ – soạn 10 câu đố | Phụ trách – An | Thời hạn – thứ Ba.' },
    { question: 'Soạn 3 câu hỏi đố vui (kèm đáp án) về các văn bản đã học trong học kì II.', hints: ['Chọn từ Bài 6 đến Bài 10.', 'Câu hỏi ngắn, đáp án rõ.'], solution: 'Ví dụ: 1) Tàu ngầm của thuyền trưởng Nemo tên là gì? – Nautilus. 2) Anh nông dân trong “Đẽo cày giữa đường” mất hết vốn vì sao? – Vì ai nói gì cũng nghe, không có chủ kiến. 3) Chú chó thông minh trong gánh xiếc của cụ Vitalis tên là gì? – Capi.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Mục đích chính của “Ngày hội với sách” là:', options: ['Lan toả tình yêu sách, chia sẻ sản phẩm sau khi đọc', 'Bán sách kiếm lời', 'Kiểm tra học kì', 'Thi chạy tiếp sức'], answer: 0, explain: 'Lan toả văn hoá đọc.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài giới thiệu sách nên kể hết kết thúc để người nghe hiểu rõ.', answer: false, explain: 'Nên giữ bí mật để khơi gợi tò mò.' },
    { type: 'mcq', q: 'Phần “móc câu” trong bài giới thiệu sách có tác dụng:', options: ['Gây tò mò, thu hút người nghe', 'Tóm tắt toàn bộ sách', 'Nêu giá tiền', 'Liệt kê số trang'], answer: 0, explain: 'Thu hút ngay từ đầu.' },
    { type: 'mcq', q: 'Bước cuối cùng khi tổ chức ngày hội là:', options: ['Tổ chức và rút kinh nghiệm', 'Lên ý tưởng', 'Phân công', 'Chuẩn bị sản phẩm'], answer: 0, explain: 'Tổng kết sau hoạt động.' },
    { type: 'short', q: 'Theo gợi ý, bài giới thiệu sách ngắn nên kéo dài khoảng mấy phút? (ghi số)', answer: ['1', 'một'], answerText: '1 phút', explain: 'Bài giới thiệu sách 1 phút.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi trưng bày sản phẩm, cần ghi đúng tên sách, tác giả.', answer: true, explain: 'Tôn trọng tác giả, nguồn.' },
    { type: 'mcq', q: 'Hoạt động nào KHÔNG phù hợp với ngày hội?', options: ['Xé sách để làm đồ chơi', 'Đổi sách với bạn', 'Đóng vai nhân vật', 'Đố vui về sách'], answer: 0, explain: 'Cần giữ gìn sách.' },
    { type: 'mcq', q: 'Tiểu phẩm “Đẽo cày giữa đường” phù hợp với góc sách nào?', options: ['Ngụ ngôn', 'Văn bản thông tin', 'Thơ năm chữ', 'Tường trình'], answer: 0, explain: 'Đó là truyện ngụ ngôn.' }
  ]
});
})();
