/* Ngữ văn 8 – Bài 2. Viết: Phân tích một tác phẩm văn học (bài thơ thất ngôn tứ tuyệt Đường luật). Ngữ liệu: “Mời trầu” (Hồ Xuân Hương, thơ Nôm cổ, phạm vi công cộng); dàn ý và bài viết mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b2-viet', {
  objectives: [
    'Nắm được yêu cầu của bài văn phân tích một bài thơ thất ngôn bát cú hoặc tứ tuyệt Đường luật.',
    'Biết tìm ý, lập dàn ý: phân tích nội dung (chủ đề, cảm xúc) gắn với nét đặc sắc nghệ thuật (thể thơ, bố cục, hình ảnh, từ ngữ, biện pháp tu từ).',
    'Viết được bài văn có luận điểm rõ, dẫn chứng là câu thơ cụ thể, diễn đạt mạch lạc.',
    'Tự chỉnh sửa bài viết theo bảng kiểm.'
  ],
  intro: 'Phân tích một bài thơ Đường luật không phải là “dịch” lại từng câu thơ sang văn xuôi. Em cần chỉ ra bài thơ nói gì, nói bằng cách nào và cách nói ấy hay ở đâu. Hãy cùng thực hành với bài tứ tuyệt “Mời trầu” của Hồ Xuân Hương.',
  text: {
    title: 'Mời trầu (Hồ Xuân Hương)',
    html: `<div class="poem">Quả cau nho nhỏ miếng trầu hôi,<br>Này của Xuân Hương mới quệt rồi.<br>Có phải duyên nhau thì thắm lại,<br>Đừng xanh như lá, bạc như vôi.</div>
<p><i>Chú thích (của nhóm biên soạn):</i> <i>quệt</i>: phết vôi lên lá trầu khi têm trầu; <i>thắm lại</i>: miếng trầu nhai với cau và vôi sẽ có màu đỏ thắm – ý nói tình duyên thắm thiết; <i>bạc như vôi</i>: thành ngữ chỉ sự bạc bẽo.</p>`,
    source: '“Mời trầu” – Hồ Xuân Hương (cuối thế kỉ XVIII – đầu thế kỉ XIX), thơ Nôm cổ, phạm vi công cộng. Chú thích, dàn ý, đoạn văn mẫu do nhóm biên soạn viết.'
  },
  steps: [
    { title: 'Yêu cầu của bài văn phân tích bài thơ Đường luật', html: `<ul><li>Giới thiệu tác giả, bài thơ và nêu khái quát nội dung, nét đặc sắc.</li>
      <li>Phân tích <b>nội dung</b> (chủ đề, cảm xúc, thông điệp) gắn với <b>nghệ thuật</b>: thể thơ, bố cục, niêm luật, vần, đối, hình ảnh, từ ngữ, biện pháp tu từ.</li>
      <li>Dẫn chứng là các câu thơ, từ ngữ cụ thể; lí lẽ giải thích vì sao hay.</li>
      <li>Khẳng định giá trị bài thơ và nêu cảm nhận của bản thân.</li></ul>
      <div class="box key">Tránh “diễn xuôi” câu thơ: mỗi đoạn phải trả lời được câu hỏi “câu thơ này hay ở đâu, vì sao?”.</div>` },
    { title: 'Tìm ý: đọc kĩ bài thơ theo bố cục', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th><th>Nghệ thuật cần chú ý</th></tr>
      <tr><td>Khai (câu 1)</td><td>Miếng trầu mời khách: nhỏ bé, giản dị</td><td>Từ láy “nho nhỏ”, cách nói khiêm nhường “trầu hôi”</td></tr>
      <tr><td>Thừa (câu 2)</td><td>Xưng tên “Xuân Hương”, trầu do chính tay mình têm</td><td>Cách xưng danh táo bạo, trực tiếp</td></tr>
      <tr><td>Chuyển (câu 3)</td><td>Mong muốn: nếu có duyên thì hãy “thắm lại”</td><td>Câu điều kiện “Có phải … thì …”, hình ảnh trầu đỏ thắm</td></tr>
      <tr><td>Hợp (câu 4)</td><td>Lời nhắn nhủ: đừng bạc bẽo</td><td>Thành ngữ “xanh như lá, bạc như vôi” được tách ra, phép đối</td></tr></table>` },
    { title: 'Lập dàn ý', html: `<p>Dàn ý có thể đi theo trình tự bố cục bài thơ hoặc theo các luận điểm (nội dung – nghệ thuật):</p>`,
      svg: S.flow({ vertical: true, w: 560, items: [{ title: 'Mở bài', text: 'Giới thiệu Hồ Xuân Hương, bài “Mời trầu”; nêu nhận xét chung' }, { title: 'Thân bài – luận điểm 1', text: 'Hai câu đầu: lời mời giản dị mà tự tin, xưng danh táo bạo' }, { title: 'Thân bài – luận điểm 2', text: 'Hai câu cuối: khát khao tình duyên thắm thiết, lời nhắn nhủ thẳng thắn' }, { title: 'Thân bài – luận điểm 3', text: 'Nghệ thuật: tứ tuyệt ngắn gọn, thơ Nôm, thành ngữ, hình ảnh trầu cau' }, { title: 'Kết bài', text: 'Khẳng định giá trị; cảm nghĩ của em' }] }),
      caption: 'Dàn ý bài văn phân tích bài thơ “Mời trầu”.' },
    { title: 'Viết đoạn phân tích: mô hình “Nêu – Dẫn – Phân tích – Đánh giá”', html: `<p><b>Nêu</b> luận điểm → <b>Dẫn</b> câu thơ → <b>Phân tích</b> từ ngữ, hình ảnh, biện pháp nghệ thuật → <b>Đánh giá</b> ý nghĩa.</p>
      <p><i>Đoạn mẫu:</i> Hai câu cuối bộc lộ trực tiếp khát vọng tình duyên của nữ sĩ. “Có phải duyên nhau thì thắm lại” – miếng trầu nhai cùng cau, vôi sẽ đỏ thắm, như tình duyên thắm thiết khi hai người thật lòng với nhau. Đến câu kết, nhà thơ khéo tách thành ngữ “bạc như vôi” thành một phép đối cân xứng: “xanh như lá” – “bạc như vôi”, vừa gắn với chính lá trầu, quả cau, vôi têm, vừa là lời nhắn nhủ thẳng thắn: đừng hờ hững, bạc bẽo. Lời thơ ngắn mà thể hiện một cá tính mạnh mẽ, một khát khao hạnh phúc chính đáng của người phụ nữ.</p>` },
    { title: 'Kiểm tra và chỉnh sửa', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Có / Chưa</th></tr>
      <tr><td>Mở bài giới thiệu tác giả, tác phẩm, nhận xét chung</td><td>☐</td></tr><tr><td>Mỗi đoạn thân bài có luận điểm rõ</td><td>☐</td></tr>
      <tr><td>Có dẫn chứng câu thơ, phân tích từ ngữ, hình ảnh, biện pháp nghệ thuật</td><td>☐</td></tr><tr><td>Có nhận xét về thể thơ Đường luật (bố cục, vần, đối…)</td><td>☐</td></tr>
      <tr><td>Kết bài khẳng định giá trị, nêu cảm nghĩ</td><td>☐</td></tr><tr><td>Không mắc lỗi chính tả, dùng từ, dấu câu</td><td>☐</td></tr></table>` }
  ],
  summary: 'Bài văn phân tích bài thơ Đường luật gồm: mở bài giới thiệu tác giả, bài thơ, nhận xét chung; thân bài phân tích nội dung gắn với nghệ thuật (bố cục, vần, đối, hình ảnh, từ ngữ, biện pháp tu từ), có dẫn chứng câu thơ cụ thể; kết bài khẳng định giá trị và nêu cảm nghĩ. Mỗi đoạn nên theo mô hình Nêu – Dẫn – Phân tích – Đánh giá, tránh diễn xuôi câu thơ.',
  examples: [
    { title: 'Viết mở bài', problem: 'Viết mở bài trực tiếp cho bài văn phân tích bài “Mời trầu”.', solution: 'Hồ Xuân Hương là nữ sĩ tài năng, được mệnh danh là “Bà chúa thơ Nôm”, với những vần thơ vừa dân dã vừa đầy cá tính. Bài thất ngôn tứ tuyệt “Mời trầu” chỉ có bốn câu nhưng đã thể hiện khát vọng tình duyên chân thành và thái độ thẳng thắn, tự tin của một người phụ nữ dám nói lên tiếng nói của trái tim mình.' },
    { title: 'Phân biệt phân tích và diễn xuôi', problem: 'Đoạn sau mắc lỗi gì? “Câu 1 nói quả cau nho nhỏ và miếng trầu hôi. Câu 2 nói đây là của Xuân Hương mới quệt rồi.”', solution: 'Đoạn văn chỉ diễn xuôi lại câu thơ, không phân tích. Cần chỉ ra cái hay: từ láy “nho nhỏ” và cách nói “trầu hôi” thể hiện sự khiêm nhường, giản dị; cách xưng tên “Xuân Hương” ngay trong thơ là một nét táo bạo, cho thấy ý thức về bản thân của nhà thơ.' },
    { title: 'Nhận xét về thể thơ', problem: 'Viết 2 – 3 câu nhận xét vai trò của thể tứ tuyệt trong bài “Mời trầu”.', solution: 'Thể thất ngôn tứ tuyệt với dung lượng chỉ bốn câu buộc lời thơ phải hàm súc: câu khai giới thiệu miếng trầu, câu thừa xưng danh, câu chuyển mở ra điều kiện “có phải duyên nhau”, câu hợp khép lại bằng lời nhắn nhủ. Bố cục chặt chẽ ấy giúp cảm xúc được đẩy dần lên và dồn lại ở câu cuối.' }
  ],
  exercises: [
    { question: 'Tìm hai nét đặc sắc nghệ thuật của bài “Mời trầu” và nêu dẫn chứng cho mỗi nét.', hints: ['Chú ý cách dùng thành ngữ ở câu cuối.', 'Chú ý cách xưng danh ở câu 2 và từ láy ở câu 1.'], solution: '(1) Vận dụng sáng tạo thành ngữ “bạc như vôi”, tách thành phép đối “xanh như lá – bạc như vôi”, gắn với chính trầu, cau, vôi. (2) Ngôn ngữ thơ Nôm giản dị, gần lời nói hằng ngày; cách xưng danh “Này của Xuân Hương” trực tiếp, táo bạo; từ láy “nho nhỏ” gợi sự khiêm nhường.' },
    { question: 'Viết kết bài (3 – 4 câu) cho bài văn phân tích bài “Mời trầu”.', hints: ['Khẳng định lại giá trị nội dung và nghệ thuật.', 'Nêu cảm nghĩ hoặc liên hệ của em.'], solution: 'Ví dụ: Bằng thể tứ tuyệt hàm súc, ngôn ngữ Nôm dân dã và cách dùng thành ngữ sáng tạo, “Mời trầu” đã nói lên khát vọng tình duyên thắm thiết, chân thành của người phụ nữ. Đọc bài thơ, em cảm phục một Hồ Xuân Hương thẳng thắn, tự tin. Miếng trầu nhỏ bé đã trở thành lời nhắn nhủ lớn về sự chân thành trong các mối quan hệ.' },
    { question: 'Lập dàn ý ngắn (3 luận điểm) phân tích bài “Bánh trôi nước” (đã học ở bài Đọc).', hints: ['Luận điểm có thể theo hai lớp nghĩa: tả bánh – nói về người phụ nữ.', 'Đừng quên luận điểm về nghệ thuật (ẩn dụ, thành ngữ “bảy nổi ba chìm”, chữ “Mà”).'], solution: 'Luận điểm 1: Vẻ đẹp của người phụ nữ qua hình ảnh chiếc bánh “trắng”, “tròn”. Luận điểm 2: Thân phận chìm nổi, bị định đoạt (“Bảy nổi ba chìm”, “Rắn nát mặc dầu tay kẻ nặn”) và tấm lòng son sắt (“Mà em vẫn giữ tấm lòng son”). Luận điểm 3: Nghệ thuật: ẩn dụ hai lớp nghĩa, thành ngữ dân gian được vận dụng sáng tạo, quan hệ từ “Mà” tạo bước ngoặt, thể tứ tuyệt hàm súc.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi phân tích một bài thơ Đường luật, điều cần tránh là:', options: ['diễn xuôi câu thơ mà không chỉ ra cái hay', 'dẫn chứng câu thơ cụ thể', 'gắn nội dung với nghệ thuật', 'nêu cảm nghĩ ở kết bài'], answer: 0, explain: 'Diễn xuôi không phải là phân tích.' },
    { type: 'short', q: 'Bài “Mời trầu” viết theo thể thơ gì (thất ngôn …)?', answer: ['tứ tuyệt', 'thất ngôn tứ tuyệt'], answerText: 'thất ngôn tứ tuyệt', explain: 'Bốn câu, mỗi câu bảy chữ.' },
    { type: 'mcq', q: 'Thành ngữ được vận dụng sáng tạo trong câu cuối bài “Mời trầu” là:', options: ['bạc như vôi', 'bảy nổi ba chìm', 'nước chảy đá mòn', 'một nắng hai sương'], answer: 0, explain: '“Đừng xanh như lá, bạc như vôi”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi đoạn thân bài nên có luận điểm rõ, dẫn chứng câu thơ và lời phân tích, đánh giá.', answer: true, explain: 'Mô hình Nêu – Dẫn – Phân tích – Đánh giá.' },
    { type: 'mcq', q: 'Câu thơ nào thể hiện cách xưng danh táo bạo của Hồ Xuân Hương?', options: ['Này của Xuân Hương mới quệt rồi', 'Quả cau nho nhỏ miếng trầu hôi', 'Có phải duyên nhau thì thắm lại', 'Đừng xanh như lá, bạc như vôi'], answer: 0, explain: 'Nhà thơ xưng tên mình ngay trong thơ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mở bài của bài văn phân tích chỉ cần chép lại toàn bộ bài thơ.', answer: false, explain: 'Mở bài cần giới thiệu tác giả, tác phẩm và nhận xét chung.' },
    { type: 'short', q: 'Theo bố cục khai – thừa – chuyển – hợp, câu thứ ba của bài tứ tuyệt gọi là câu gì?', answer: ['chuyển', 'câu chuyển'], answerText: 'chuyển', explain: 'Câu 3 là câu chuyển.' },
    { type: 'mcq', q: 'Từ láy “nho nhỏ” trong câu đầu gợi:', options: ['sự khiêm nhường, giản dị của miếng trầu mời', 'sự giàu sang', 'âm thanh nhai trầu', 'sự giận dữ'], answer: 0, explain: 'Gợi sự nhỏ bé, giản dị.' }
  ]
});
})();
