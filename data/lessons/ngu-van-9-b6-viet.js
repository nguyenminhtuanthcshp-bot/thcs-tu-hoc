/* Ngữ văn 9 – Bài 6. Viết: Viết truyện kể sáng tạo (truyện ngắn) có yếu tố trinh thám. Truyện mẫu “Chiếc cúp biến mất” do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b6-viet', {
  objectives: [
    'Biết viết một truyện ngắn có yếu tố trinh thám: có bí ẩn, nhân vật điều tra, manh mối, suy luận và lời giải hợp lí.',
    'Biết cài đặt manh mối, chi tiết gây nhiễu và tạo sự hồi hộp.',
    'Biết sử dụng câu ghép để trình bày suy luận mạch lạc; tự chỉnh sửa theo bảng kiểm.'
  ],
  intro: 'Không cần một vụ án lớn, trường học cũng đầy những “bí ẩn” nhỏ: một đồ vật biến mất, một lá thư không tên… Hãy thử làm nhà văn trinh thám với một câu chuyện của chính em.',
  text: {
    title: 'Truyện mẫu: “Chiếc cúp biến mất”',
    html: `<p>Sáng thứ Hai, cả lớp 9B xôn xao: chiếc cúp giải nhất bóng đá của lớp, đặt trên nóc tủ sách, đã biến mất. Chiều thứ Sáu nó vẫn còn đó. Cửa lớp khoá suốt hai ngày nghỉ, chìa chỉ có cô chủ nhiệm và bác bảo vệ giữ.</p>
<p>“Chắc có người trèo cửa sổ vào lấy,” Quân nói to. Nhưng Ngân – lớp phó học tập, người mê truyện Sherlock Holmes – lặng lẽ đi quanh lớp. Cửa sổ vẫn cài then bên trong. Trên nóc tủ, lớp bụi mỏng có một khoảng tròn sạch – dấu đế cúp – và bên cạnh là hai vệt ngón tay nhỏ. Dưới chân tủ, Ngân nhặt được một mẩu giấy màu vàng óng, loại giấy dùng gói quà.</p>
<p>“Vệt bụi còn mới, chứng tỏ cúp bị lấy đi chưa lâu, có thể là sáng nay,” Ngân nghĩ. “Người lấy phải với được nóc tủ – hoặc đứng lên ghế.” Cô nhìn chiếc ghế cạnh tủ: trên mặt ghế còn in dấu giày có đế hình tổ ong.</p>
<p>Giờ ra chơi, Ngân để ý đôi giày của các bạn. Đôi giày đế tổ ong là của Hải, lớp trưởng, người luôn đến lớp sớm nhất để mở cửa – vì cô chủ nhiệm giao chìa khoá cho Hải từ tuần trước. Nhưng Hải là người quý chiếc cúp nhất, bởi chính cậu đã ghi bàn thắng quyết định. Ngân băn khoăn: “Vì sao Hải lại lấy?”</p>
<p>Ngân tìm Hải ở góc sân. Cậu đỏ mặt, rồi kể thật: cậu mang cúp đi làm sạch và gói trong giấy vàng, định tặng thầy thể dục – người sắp nghỉ hưu – vào buổi chia tay chiều nay, như một bất ngờ của cả lớp. “Tớ quên chưa kịp báo với các bạn,” Hải gãi đầu.</p>
<p>Chiều hôm ấy, khi thầy mở gói quà vàng óng, cả lớp 9B vỗ tay rộn rã. Ngân mỉm cười: có những “vụ án” mà lời giải lại là một món quà.</p>`,
    source: 'Truyện do nhóm biên soạn tự viết; nhân vật và sự việc là hư cấu.'
  },
  steps: [
    { title: 'Yêu cầu của truyện có yếu tố trinh thám', html: `<ul><li>Có một <b>bí ẩn</b> (đồ vật biến mất, sự việc lạ…).</li>
      <li>Có <b>nhân vật điều tra</b> quan sát, suy luận.</li>
      <li>Có <b>manh mối</b> hợp lí và có thể có <b>chi tiết gây nhiễu</b>.</li>
      <li>Có <b>lời giải</b> bất ngờ nhưng thuyết phục, khớp với mọi manh mối.</li>
      <li>Ngôi kể phù hợp; lời văn tạo hồi hộp; có thông điệp.</li></ul>` },
    { title: 'Cấu trúc truyện', html: `<p>Truyện mẫu đi theo cấu trúc quen thuộc:</p>`,
      svg: S.storyArc({ stages: ['Cúp biến mất', 'Ngân tìm manh mối', 'Nghi vấn về Hải', 'Hải kể thật', 'Món quà bất ngờ'], peak: 3, notes: ['bí ẩn', 'bụi, giấy, dấu giày', 'mâu thuẫn', 'lời giải', 'thông điệp'] }),
      caption: 'Sơ đồ cốt truyện “Chiếc cúp biến mất”.' },
    { title: 'Cài đặt manh mối', html: `<table class="tbl"><tr><th>Manh mối</th><th>Ý nghĩa</th></tr>
      <tr><td>Cửa sổ cài then bên trong</td><td>Loại bỏ giả thuyết “trèo cửa sổ” (chi tiết gây nhiễu từ lời Quân)</td></tr>
      <tr><td>Khoảng tròn sạch trên bụi</td><td>Cúp mới bị lấy</td></tr>
      <tr><td>Mẩu giấy gói quà vàng</td><td>Cúp được gói lại – gợi mục đích tặng quà</td></tr>
      <tr><td>Dấu giày đế tổ ong trên ghế</td><td>Xác định người lấy</td></tr></table>
      <div class="box key">Mọi manh mối phải được “trả lời” ở cuối truyện; đừng để người đọc thấy lời giải từ trên trời rơi xuống.</div>` },
    { title: 'Quy trình viết', html: `<p>Bắt đầu từ lời giải rồi “giấu” nó đi:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Nghĩ lời giải', text: 'Ai? Vì sao?' }, { title: 'Đặt manh mối', text: '3 – 4 chi tiết' }, { title: 'Thêm gây nhiễu', text: 'Giả thuyết sai' }, { title: 'Viết và sửa', text: 'Kiểm tra logic' }] }),
      caption: 'Quy trình viết truyện có yếu tố trinh thám.' },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đạt?</th></tr>
      <tr><td>Bí ẩn được nêu rõ ngay đầu truyện</td><td>☐</td></tr>
      <tr><td>Có ít nhất 3 manh mối, 1 chi tiết gây nhiễu</td><td>☐</td></tr>
      <tr><td>Nhân vật điều tra có suy luận hợp lí (dùng câu ghép nhân quả, điều kiện)</td><td>☐</td></tr>
      <tr><td>Lời giải khớp mọi manh mối</td><td>☐</td></tr>
      <tr><td>Có thông điệp; chính tả, diễn đạt tốt</td><td>☐</td></tr></table>` }
  ],
  summary: 'Truyện có yếu tố trinh thám cần: bí ẩn rõ ràng, nhân vật điều tra quan sát và suy luận, manh mối hợp lí, chi tiết gây nhiễu, lời giải bất ngờ mà khớp mọi manh mối, thông điệp. Cách viết: nghĩ lời giải trước, cài 3 – 4 manh mối, thêm giả thuyết sai, viết rồi kiểm tra logic; dùng câu ghép để trình bày suy luận.',
  examples: [
    { title: 'Chi tiết gây nhiễu', problem: 'Chi tiết nào trong truyện mẫu là chi tiết gây nhiễu? Nó bị loại bỏ bằng manh mối nào?', solution: 'Lời Quân “Chắc có người trèo cửa sổ vào lấy” là giả thuyết gây nhiễu. Nó bị loại bỏ vì cửa sổ vẫn cài then bên trong – kẻ lấy cúp không thể ra vào qua đó.' },
    { title: 'Lời giải bất ngờ', problem: 'Lời giải của truyện bất ngờ ở điểm nào? Vì sao vẫn hợp lí?', solution: 'Bất ngờ vì người lấy cúp là Hải – người quý chiếc cúp nhất – và mục đích không phải lấy trộm mà là tặng thầy. Hợp lí vì Hải có chìa khoá, đến lớp sớm, đôi giày đế tổ ong khớp dấu trên ghế, mẩu giấy gói quà khớp với việc gói cúp làm quà.' },
    { title: 'Câu ghép trong suy luận', problem: 'Tìm một câu ghép thể hiện suy luận của Ngân.', solution: '“Vệt bụi còn mới, chứng tỏ cúp bị lấy đi chưa lâu” – hai vế có quan hệ nguyên nhân – kết quả (dấu hiệu → kết luận), giúp suy luận rõ ràng.' }
  ],
  exercises: [
    { question: 'Lập dàn ý một truyện ngắn có yếu tố trinh thám với bí ẩn: “Những bông hoa trong vườn trường bị ngắt mỗi sáng”.', hints: ['Nghĩ lời giải trước: ai, vì sao?', 'Cài manh mối và chi tiết gây nhiễu.'], solution: 'Ví dụ: Bí ẩn: mỗi sáng vườn hoa lớp 9A mất vài bông. Nhân vật điều tra: Minh. Gây nhiễu: nghi các em lớp 6 hay chơi gần vườn. Manh mối: vết cắt gọn bằng kéo (không phải bẻ tay), dấu chân nhỏ ướt sương lúc sáng sớm, một cánh hoa rơi gần phòng y tế. Lời giải: cô lao công ngắt hoa cắm vào bình ở phòng y tế để các bạn ốm thấy vui hơn, vì nghĩ vườn là của chung. Kết: lớp 9A trồng thêm một luống hoa riêng tặng phòng y tế.' },
    { question: 'Viết đoạn văn (5 – 7 câu) miêu tả nhân vật điều tra đang quan sát hiện trường, có ít nhất 2 manh mối.', hints: ['Dùng giác quan: nhìn, sờ, ngửi.', 'Thể hiện suy nghĩ bằng câu ghép.'], solution: 'Ví dụ: Minh cúi xuống sát luống hoa. Những cuống hoa bị cắt vát gọn gàng, rõ ràng không phải do ai bẻ vội. Nếu là mấy em lớp 6 nghịch ngợm thì cuống hoa phải dập nát. Trên nền đất ẩm còn in mấy dấu dép nhỏ, mũi dép hướng về phía dãy nhà hiệu bộ. Minh đi theo dấu dép, và cậu dừng lại khi thấy một cánh hoa hồng rơi trước cửa phòng y tế. “Vậy là người ngắt hoa không hề vội vàng,” Minh lẩm bẩm.' },
    { question: 'Đọc lại truyện mẫu và đề xuất một cách kết thúc khác vẫn khớp với các manh mối.', hints: ['Giữ các manh mối: chìa khoá, giấy gói quà, dấu giày.', 'Thay đổi mục đích của nhân vật.'], solution: 'Ví dụ: Hải mang cúp đi khắc thêm tên tất cả cầu thủ của lớp lên đế cúp, gói giấy vàng để giữ bí mật, định trao lại cho cả lớp vào buổi sinh hoạt cuối tuần. Kết thúc vẫn khớp: Hải có chìa khoá, dấu giày trên ghế, giấy gói quà – nhưng thông điệp chuyển sang tinh thần đồng đội.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi viết truyện có yếu tố trinh thám, nên bắt đầu bằng việc:', options: ['nghĩ ra lời giải rồi cài manh mối', 'viết ngay phần kết không cần manh mối', 'chép một truyện có sẵn', 'bỏ qua nhân vật điều tra'], answer: 0, explain: 'Lời giải trước, manh mối sau.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lời giải của truyện trinh thám phải khớp với các manh mối đã cài đặt.', answer: true, explain: 'Bất ngờ nhưng hợp lí.' },
    { type: 'short', q: 'Chi tiết đánh lạc hướng người đọc gọi là chi tiết gây … (một chữ).', answer: ['nhiễu', 'nhieu'], answerText: 'nhiễu', explain: 'Như giả thuyết “trèo cửa sổ”.' },
    { type: 'mcq', q: 'Manh mối nào loại bỏ giả thuyết “trèo cửa sổ”?', options: ['cửa sổ cài then bên trong', 'mẩu giấy vàng', 'dấu giày trên ghế', 'khoảng tròn trên bụi'], answer: 0, explain: 'Không thể ra vào qua cửa sổ.' },
    { type: 'mcq', q: 'Vì sao Hải lấy chiếc cúp?', options: ['để gói làm quà tặng thầy thể dục sắp nghỉ hưu', 'để bán', 'vì ghen tị', 'để giấu đi'], answer: 0, explain: 'Lời giải bất ngờ, nhân văn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyện có yếu tố trinh thám nhất thiết phải có án mạng.', answer: false, explain: 'Bí ẩn có thể rất đời thường.' },
    { type: 'short', q: 'Dấu giày trên ghế có đế hình gì (hai chữ)?', answer: ['tổ ong', 'to ong'], answerText: 'tổ ong', explain: 'Khớp với giày của Hải.' },
    { type: 'mcq', q: 'Kiểu câu thích hợp để trình bày suy luận của nhân vật điều tra là:', options: ['câu ghép chỉ quan hệ nhân quả, điều kiện', 'câu đặc biệt', 'câu cảm thán', 'câu cầu khiến'], answer: 0, explain: 'Vì… nên, nếu… thì.' }
  ]
});
})();
