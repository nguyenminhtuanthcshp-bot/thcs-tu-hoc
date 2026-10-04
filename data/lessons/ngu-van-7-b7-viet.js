/* Ngữ văn 7 – Bài 7. Viết: Bài văn kể lại sự việc có thật liên quan đến nhân vật hoặc sự kiện lịch sử. Bài viết mẫu do nhóm biên soạn tự viết, dựa trên các sự kiện lịch sử phổ biến trong sách sử. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b7-viet', {
  objectives: [
    'Viết được bài văn kể lại sự việc có thật liên quan đến nhân vật hoặc sự kiện lịch sử.',
    'Tôn trọng sự thật lịch sử: thời gian, địa điểm, nhân vật, diễn biến chính xác; có thể dùng yếu tố miêu tả, biểu cảm cho sinh động.',
    'Biết tìm hiểu, chọn lọc tư liệu từ các nguồn tin cậy.'
  ],
  intro: 'Sông Bạch Đằng vẫn chảy, những cọc gỗ năm xưa vẫn còn nằm dưới lòng đất. Kể lại một sự kiện lịch sử không phải là bịa chuyện, mà là “làm sống lại” sự thật bằng lời văn của mình.',
  steps: [
    { title: 'Yêu cầu của kiểu bài', html: `<ul><li>Người kể thường xưng “tôi” hoặc kể ở ngôi thứ ba; giới thiệu được <b>sự việc, nhân vật</b> lịch sử.</li><li>Kể đúng <b>thời gian, địa điểm, diễn biến, kết quả</b> theo tư liệu tin cậy (sách giáo khoa Lịch sử, bảo tàng, sách sử).</li><li>Kết hợp kể với <b>miêu tả</b> (khung cảnh, trận đánh) và <b>biểu cảm</b> (suy nghĩ, tình cảm) nhưng không bịa sự kiện.</li><li>Nêu được <b>ý nghĩa</b> của sự việc và cảm nghĩ của người viết.</li></ul>
      <div class="box note">Phân biệt: truyền thuyết (như Thánh Gióng) có yếu tố kì ảo; bài văn kể sự việc lịch sử phải dựa trên sự thật đã được ghi chép.</div>` },
    { title: 'Quy trình viết', html: `<p>Bước tìm tư liệu đặc biệt quan trọng với kiểu bài này:</p>`,
      svg: S.flow({ items: [{ title: 'Chọn sự việc', text: 'Nhân vật, sự kiện em quan tâm' }, { title: 'Tìm tư liệu', text: 'SGK Lịch sử, bảo tàng, sách sử' }, { title: 'Lập dàn ý', text: 'Bối cảnh – diễn biến – kết quả – ý nghĩa' }, { title: 'Viết, kiểm tra', text: 'Soát mốc thời gian, tên riêng' }] }),
      caption: 'Quy trình viết bài kể sự việc lịch sử.' },
    { title: 'Tư liệu mẫu: Chiến thắng Bạch Đằng năm 938', html: `<table class="tbl"><tr><th>Mục</th><th>Thông tin</th></tr>
      <tr><td>Thời gian</td><td>Năm 938</td></tr>
      <tr><td>Địa điểm</td><td>Cửa sông Bạch Đằng (vùng Quảng Ninh – Hải Phòng ngày nay)</td></tr>
      <tr><td>Bối cảnh</td><td>Kiều Công Tiễn giết Dương Đình Nghệ, cầu cứu quân Nam Hán; Ngô Quyền diệt Kiều Công Tiễn, chuẩn bị đánh quân Nam Hán do Lưu Hoằng Tháo chỉ huy</td></tr>
      <tr><td>Kế sách</td><td>Đóng cọc gỗ đầu bịt sắt ở lòng sông; lợi dụng thuỷ triều: nhử địch vào lúc triều lên, đánh quật lại khi triều xuống</td></tr>
      <tr><td>Kết quả</td><td>Thuyền địch vướng cọc, vỡ đắm; Lưu Hoằng Tháo tử trận; quân Nam Hán thua to</td></tr>
      <tr><td>Ý nghĩa</td><td>Chấm dứt hơn một nghìn năm Bắc thuộc, mở ra thời kì độc lập lâu dài; năm 939 Ngô Quyền xưng vương, đóng đô ở Cổ Loa</td></tr></table>` },
    { title: 'Dàn ý', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr>
      <tr><td>Mở bài</td><td>Giới thiệu sự việc, nhân vật lịch sử; lí do em kể (tham quan, đọc sách…).</td></tr>
      <tr><td>Thân bài</td><td>Bối cảnh → sự chuẩn bị → diễn biến chính (theo trình tự thời gian) → kết quả. Xen miêu tả, biểu cảm.</td></tr>
      <tr><td>Kết bài</td><td>Ý nghĩa của sự việc; cảm nghĩ, bài học của bản thân.</td></tr></table>` },
    { title: 'Bài viết tham khảo (rút gọn)', html: `<div class="box text"><p>Mùa hè vừa rồi, em được bố đưa đi thăm bãi cọc Bạch Đằng. Đứng trước những cây cọc gỗ đen sẫm được tìm thấy dưới lòng đất, em như nghe lại tiếng reo hò của trận đánh năm 938.</p>
      <p>Năm ấy, Kiều Công Tiễn giết chủ tướng Dương Đình Nghệ rồi sang cầu cứu nhà Nam Hán. Quân Nam Hán do Lưu Hoằng Tháo chỉ huy lấy cớ đó kéo sang xâm lược. Ngô Quyền, con rể của Dương Đình Nghệ, nhanh chóng tiêu diệt Kiều Công Tiễn và bàn kế đánh giặc.</p>
      <p>Ông cho quân đẵn gỗ lim, gỗ táu, đẽo nhọn, bịt sắt, đóng xuống lòng sông Bạch Đằng. Khi triều lên, nước ngập, bãi cọc bị che khuất. Ta dùng thuyền nhẹ ra khiêu chiến rồi giả vờ thua chạy. Thuyền giặc to lớn hùng hổ đuổi theo, vượt qua bãi cọc lúc nào không biết.</p>
      <p>Đợi nước triều rút, Ngô Quyền hạ lệnh phản công. Thuyền giặc quay đầu chạy ra biển thì va phải cọc nhọn, chiếc thì vỡ, chiếc thì đắm. Lưu Hoằng Tháo tử trận giữa dòng. Quân Nam Hán thua to.</p>
      <p>Chiến thắng Bạch Đằng đã chấm dứt hơn một nghìn năm Bắc thuộc. Rời bãi cọc, em thầm tự hào về trí tuệ của cha ông và tự nhủ phải học thật tốt môn Lịch sử để hiểu hơn về đất nước mình.</p></div>
      <p class="muted">Bài viết do nhóm biên soạn tự viết; các sự kiện dựa theo kiến thức lịch sử phổ thông.</p>` }
  ],
  summary: 'Bài văn kể sự việc có thật liên quan đến nhân vật, sự kiện lịch sử: giới thiệu sự việc; kể đúng thời gian, địa điểm, diễn biến, kết quả theo tư liệu tin cậy; kết hợp miêu tả, biểu cảm nhưng không bịa đặt; nêu ý nghĩa và cảm nghĩ. Ví dụ: chiến thắng Bạch Đằng năm 938 của Ngô Quyền – cọc gỗ bịt sắt và thuỷ triều – chấm dứt hơn một nghìn năm Bắc thuộc.',
  examples: [
    { title: 'Mở bài', problem: 'Viết mở bài cho đề: “Kể lại sự kiện Lý Công Uẩn dời đô ra Thăng Long”.', solution: '“Mỗi lần đi qua tượng đài vua Lý Thái Tổ bên hồ Hoàn Kiếm, em lại nhớ tới sự kiện trọng đại năm 1010: nhà vua quyết định dời đô từ Hoa Lư ra thành Đại La, đổi tên là Thăng Long.”' },
    { title: 'Miêu tả trong kể', problem: 'Thêm một câu miêu tả hợp lí vào đoạn kể về ngày 2/9/1945 tại Quảng trường Ba Đình.', solution: 'Ví dụ: “Cả quảng trường rợp cờ đỏ sao vàng, hàng chục vạn người đứng lặng nghe Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập.” – miêu tả không khí, không thay đổi sự thật lịch sử.' },
    { title: 'Phát hiện sai sự thật', problem: 'Câu sau sai ở đâu: “Năm 1010, Ngô Quyền dời đô về Thăng Long.”', solution: 'Sai nhân vật: người dời đô năm 1010 là Lý Công Uẩn (Lý Thái Tổ), không phải Ngô Quyền. Kiểu bài này yêu cầu kiểm tra kĩ tên người, mốc thời gian.' }
  ],
  exercises: [
    { question: 'Lập dàn ý cho đề: “Kể lại sự kiện Lý Công Uẩn dời đô từ Hoa Lư ra Đại La (năm 1010)”.', hints: ['Bối cảnh: Hoa Lư chật hẹp, núi non hiểm trở.', 'Kết quả: đổi tên thành Thăng Long; ý nghĩa: mở ra thời kì phát triển.'], solution: 'MB: giới thiệu sự kiện năm 1010. TB: bối cảnh – Hoa Lư chật hẹp, chỉ hợp phòng thủ; nhà vua thấy Đại La ở trung tâm, đất rộng, bằng phẳng, thuận giao thông; quyết định dời đô (có ban Chiếu dời đô); truyền thuyết kể khi thuyền vua đến thành Đại La thấy rồng vàng bay lên nên đổi tên là Thăng Long (nêu rõ đây là truyền thuyết). KB: ý nghĩa – Thăng Long trở thành trung tâm của đất nước; cảm nghĩ tự hào.' },
    { question: 'Vì sao khi viết kiểu bài này cần ghi rõ nguồn tư liệu hoặc kiểm tra thông tin?', hints: ['Nghĩ về yêu cầu “có thật”.', 'Thông tin trên mạng có luôn đúng không?'], solution: 'Vì bài viết kể sự việc có thật; nếu sai thời gian, nhân vật, diễn biến sẽ làm sai lệch lịch sử và làm mất lòng tin của người đọc. Thông tin trên mạng có thể sai, cần đối chiếu với SGK Lịch sử, bảo tàng, sách sử tin cậy.' },
    { question: 'Viết đoạn kết bài (3–4 câu) cho bài kể về chiến thắng Bạch Đằng năm 938.', hints: ['Nêu ý nghĩa lịch sử.', 'Bày tỏ cảm nghĩ, liên hệ bản thân.'], solution: 'Ví dụ: “Chiến thắng Bạch Đằng năm 938 đã chấm dứt hơn một nghìn năm Bắc thuộc, mở ra thời kì độc lập lâu dài cho dân tộc. Kế sách cắm cọc lợi dụng thuỷ triều của Ngô Quyền là minh chứng cho trí thông minh của cha ông. Em tự hào và tự nhủ phải học tập thật tốt để xứng đáng với truyền thống ấy.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Yêu cầu quan trọng nhất của bài văn kể sự việc lịch sử là:', options: ['Tôn trọng sự thật lịch sử', 'Thêm nhiều yếu tố kì ảo', 'Thay đổi kết quả cho hấp dẫn', 'Không cần mốc thời gian'], answer: 0, explain: 'Sự việc phải có thật, chính xác.' },
    { type: 'short', q: 'Chiến thắng Bạch Đằng của Ngô Quyền diễn ra năm nào? (ghi số)', answer: ['938'], answerText: '938', explain: 'Năm 938.' },
    { type: 'mcq', q: 'Ngô Quyền lợi dụng yếu tố tự nhiên nào để đánh giặc trên sông Bạch Đằng?', options: ['Thuỷ triều', 'Gió mùa', 'Sương mù', 'Động đất'], answer: 0, explain: 'Nhử địch khi triều lên, đánh khi triều xuống.' },
    { type: 'mcq', q: 'Năm 1010, vua Lý Công Uẩn dời đô từ Hoa Lư ra:', options: ['Đại La (đổi tên là Thăng Long)', 'Cổ Loa', 'Phú Xuân', 'Tây Đô'], answer: 0, explain: 'Đại La được đổi tên thành Thăng Long.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể kết hợp miêu tả và biểu cảm trong bài kể sự việc lịch sử.', answer: true, explain: 'Miễn là không làm sai lệch sự thật.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thông tin tìm trên mạng luôn chính xác nên không cần đối chiếu.', answer: false, explain: 'Cần đối chiếu với nguồn tin cậy.' },
    { type: 'mcq', q: 'Phần thân bài nên sắp xếp sự việc theo trình tự nào là phổ biến nhất?', options: ['Thời gian', 'Ngẫu nhiên', 'Theo bảng chữ cái', 'Từ kết quả về bối cảnh không có liên kết'], answer: 0, explain: 'Kể theo trình tự thời gian giúp mạch lạc.' },
    { type: 'mcq', q: 'Nguồn tư liệu nào đáng tin cậy nhất cho học sinh?', options: ['Sách giáo khoa Lịch sử, bảo tàng', 'Bình luận ẩn danh trên mạng', 'Tin đồn', 'Phim hoạt hình giả tưởng'], answer: 0, explain: 'Nguồn chính thống, đã kiểm chứng.' }
  ]
});
})();
