/* Ngữ văn 6 – Bài 9. Đọc hiểu: Văn bản thông tin. Văn bản đọc do nhóm biên soạn tự viết để minh hoạ thể loại. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b9-doc', {
  objectives: [
    'Nhận biết được đặc điểm của văn bản thông tin: nhan đề, sa pô, đề mục, thông tin khách quan, hình ảnh/bảng biểu.',
    'Xác định được thông tin chính và cách triển khai thông tin (theo đề mục, nguyên nhân – kết quả, phân loại…).',
    'Hiểu vai trò của phương tiện phi ngôn ngữ (hình ảnh, sơ đồ, bảng).',
    'Có ý thức bảo vệ môi trường, Trái Đất – ngôi nhà chung.'
  ],
  intro: 'Có những khu rừng mọc ngay trên bùn, ngập nước mỗi khi thuỷ triều lên. Đó là rừng ngập mặn – “lá chắn xanh” của vùng ven biển. Văn bản thông tin dưới đây sẽ giúp em hiểu vì sao cần bảo vệ những khu rừng đặc biệt này.',
  text: {
    title: 'Rừng ngập mặn – lá chắn xanh ven biển',
    html: `<p><i>(Sa pô) Rừng ngập mặn không chỉ là nơi sinh sống của nhiều loài động vật mà còn bảo vệ bờ biển trước sóng gió. Hiểu về rừng ngập mặn là bước đầu để chung tay gìn giữ chúng.</i></p>
<p><b>1. Rừng ngập mặn là gì?</b><br>Rừng ngập mặn là kiểu rừng mọc ở vùng đất bùn ven biển, cửa sông, nơi nước mặn và nước ngọt hoà trộn, bị ngập theo con nước thuỷ triều. Các loài cây tiêu biểu là đước, mắm, bần, sú, vẹt. Nhiều cây có <b>rễ chống</b> cắm xuống bùn như những chiếc chân giúp cây đứng vững, hoặc <b>rễ thở</b> nhô lên khỏi mặt bùn để lấy không khí.</p>
<p><b>2. Vai trò của rừng ngập mặn</b><br>Thứ nhất, rừng là “bức tường xanh” giúp giảm sức mạnh của sóng, hạn chế xói lở bờ biển, bảo vệ làng mạc, đồng ruộng phía trong. Thứ hai, rễ cây chằng chịt là nơi trú ẩn, sinh sản của nhiều loài tôm, cua, cá, chim – nguồn sống của người dân ven biển. Thứ ba, rừng giúp lọc nước và hấp thụ khí các-bô-níc, góp phần giảm biến đổi khí hậu.</p>
<p><b>3. Một điểm đến tiêu biểu</b><br>Rừng ngập mặn Cần Giờ (Thành phố Hồ Chí Minh) được UNESCO công nhận là Khu dự trữ sinh quyển thế giới năm 2000. Khu rừng từng bị tàn phá nặng nề trong chiến tranh và đã được con người trồng lại, phục hồi.</p>
<p><b>4. Chúng ta có thể làm gì?</b><br>Không xả rác xuống sông, biển; không chặt phá cây rừng; tham gia các hoạt động trồng rừng; tìm hiểu và chia sẻ thông tin về rừng ngập mặn với mọi người.</p>`,
    source: 'Văn bản thông tin do nhóm biên soạn viết để minh hoạ thể loại, tổng hợp từ kiến thức phổ thông (không trích từ SGK).'
  },
  steps: [
    { title: 'Văn bản thông tin là gì?', html: `<p><b>Văn bản thông tin</b> là văn bản chủ yếu dùng để <b>cung cấp thông tin</b> chính xác, khách quan về sự vật, hiện tượng. Đặc điểm hình thức thường gặp:</p><ul><li><b>Nhan đề</b> nêu đối tượng; <b>sa pô</b> (đoạn tóm tắt in nghiêng dưới nhan đề).</li><li><b>Đề mục</b> chia thông tin thành từng phần.</li><li><b>Phương tiện phi ngôn ngữ</b>: hình ảnh, bảng, sơ đồ, số liệu.</li></ul>` },
    { title: 'Cấu trúc văn bản “Rừng ngập mặn”', html: `<p>Thông tin được triển khai theo các đề mục:</p>`,
      svg: S.mindmap({ center: 'Rừng ngập mặn', branches: [{ title: '1. Là gì?', items: ['Vùng bùn ven biển', 'Đước, mắm, bần…'] }, { title: '2. Vai trò', items: ['Chắn sóng, chống xói lở', 'Nơi ở của tôm, cá, chim', 'Hấp thụ khí CO₂'] }, { title: '3. Tiêu biểu', items: ['Cần Giờ', 'UNESCO 2000'] }, { title: '4. Hành động', items: ['Không xả rác', 'Trồng rừng'] }] }),
      caption: 'Sơ đồ tóm tắt thông tin chính của văn bản.' },
    { title: 'Cách triển khai thông tin', html: `<table class="tbl"><tr><th>Cách triển khai</th><th>Ví dụ trong văn bản</th></tr><tr><td>Định nghĩa, giải thích</td><td>“Rừng ngập mặn là kiểu rừng mọc ở vùng đất bùn ven biển…”</td></tr><tr><td>Phân loại, liệt kê</td><td>Các loài cây: đước, mắm, bần, sú, vẹt; rễ chống – rễ thở</td></tr><tr><td>Theo thứ tự (thứ nhất, thứ hai…)</td><td>Ba vai trò của rừng</td></tr><tr><td>Nêu ví dụ tiêu biểu, số liệu</td><td>Cần Giờ – Khu dự trữ sinh quyển năm 2000</td></tr></table>` },
    { title: 'Phương tiện phi ngôn ngữ', html: `<p>Văn bản thông tin thường kèm ảnh, sơ đồ, bảng. Ví dụ sơ đồ tư duy ở bước trước giúp người đọc nắm nhanh thông tin. Với văn bản này, có thể thêm: ảnh rễ chống cây đước, bản đồ vị trí Cần Giờ, bảng so sánh rễ chống – rễ thở.</p>` },
    { title: 'Phân biệt với văn bản văn học', html: `<table class="tbl"><tr><th></th><th>Văn bản thông tin</th><th>Văn bản văn học</th></tr><tr><td>Mục đích</td><td>Cung cấp thông tin</td><td>Gợi cảm xúc, thẩm mĩ</td></tr><tr><td>Ngôn ngữ</td><td>Chính xác, khách quan</td><td>Giàu hình ảnh, cảm xúc</td></tr><tr><td>Hình thức</td><td>Đề mục, sa pô, bảng, ảnh</td><td>Vần nhịp, cốt truyện…</td></tr></table>` }
  ],
  summary: 'Văn bản thông tin cung cấp thông tin chính xác, khách quan; có nhan đề, sa pô, đề mục, phương tiện phi ngôn ngữ; triển khai bằng định nghĩa, phân loại, liệt kê theo thứ tự, ví dụ, số liệu. Văn bản về rừng ngập mặn giới thiệu khái niệm, vai trò, điểm tiêu biểu và hành động bảo vệ.',
  examples: [
    { title: 'Xác định sa pô và đề mục', problem: 'Sa pô của văn bản có tác dụng gì? Văn bản có mấy đề mục?', solution: 'Sa pô tóm tắt nội dung, gợi sự chú ý của người đọc. Văn bản có 4 đề mục.' },
    { title: 'Tìm thông tin cụ thể', problem: 'Năm nào rừng ngập mặn Cần Giờ được UNESCO công nhận là Khu dự trữ sinh quyển thế giới?', solution: 'Năm 2000.' },
    { title: 'Phân biệt rễ chống và rễ thở', problem: 'Nêu tác dụng của rễ chống và rễ thở.', solution: 'Rễ chống cắm xuống bùn giúp cây đứng vững; rễ thở nhô khỏi mặt bùn để cây lấy không khí.' }
  ],
  exercises: [
    { question: 'Liệt kê ba vai trò của rừng ngập mặn được nêu trong văn bản.', hints: ['Tìm các từ “Thứ nhất, Thứ hai, Thứ ba”.', 'Đề mục 2.'], solution: '(1) Chắn sóng, hạn chế xói lở bờ biển; (2) nơi trú ẩn, sinh sản của tôm, cua, cá, chim; (3) lọc nước, hấp thụ khí các-bô-níc, giảm biến đổi khí hậu.' },
    { question: 'Vì sao nói văn bản trên là văn bản thông tin?', hints: ['Mục đích của văn bản.', 'Hình thức: sa pô, đề mục.'], solution: 'Văn bản nhằm cung cấp thông tin khách quan về rừng ngập mặn; có nhan đề, sa pô, đề mục; dùng định nghĩa, liệt kê, ví dụ, số liệu.' },
    { question: 'Đề xuất một phương tiện phi ngôn ngữ có thể thêm vào văn bản và giải thích tác dụng.', hints: ['Ảnh, bản đồ, bảng.', 'Giúp người đọc hình dung điều gì?'], solution: 'Ví dụ: ảnh chụp rễ chống của cây đước – giúp người đọc hình dung rõ đặc điểm “chân” của cây mà lời văn khó tả hết.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Văn bản thông tin chủ yếu dùng để:', options: ['Cung cấp thông tin chính xác, khách quan', 'Kể chuyện tưởng tượng', 'Bộc lộ cảm xúc', 'Gây cười'], answer: 0, explain: 'Mục đích văn bản thông tin.' },
    { type: 'mcq', q: 'Sa pô là:', options: ['Đoạn tóm tắt ngắn dưới nhan đề', 'Tên tác giả', 'Hình ảnh minh hoạ', 'Đoạn kết'], answer: 0, explain: 'Sa pô thường in nghiêng.' },
    { type: 'short', q: 'Rừng ngập mặn Cần Giờ được UNESCO công nhận là Khu dự trữ sinh quyển thế giới vào năm nào?', answer: ['2000', 'năm 2000'], answerText: '2000', explain: 'Theo văn bản.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rễ thở nhô lên khỏi mặt bùn giúp cây lấy không khí.', answer: true, explain: 'Chức năng rễ thở.' },
    { type: 'mcq', q: 'Loài cây nào tiêu biểu của rừng ngập mặn?', options: ['Đước', 'Thông', 'Cà phê', 'Xương rồng'], answer: 0, explain: 'Đước, mắm, bần, sú, vẹt.' },
    { type: 'mcq', q: 'Hình ảnh, bảng, sơ đồ được gọi là:', options: ['Phương tiện phi ngôn ngữ', 'Biện pháp tu từ', 'Trạng ngữ', 'Sa pô'], answer: 0, explain: 'Không dùng chữ viết là chính.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ngôn ngữ văn bản thông tin cần giàu cảm xúc, tưởng tượng.', answer: false, explain: 'Cần chính xác, khách quan.' },
    { type: 'mcq', q: 'Vai trò “bức tường xanh” của rừng ngập mặn là:', options: ['Giảm sóng, chống xói lở bờ biển', 'Làm đẹp thành phố', 'Cung cấp gỗ xây nhà', 'Tạo bóng mát công viên'], answer: 0, explain: 'Bảo vệ bờ biển.' }
  ]
});
})();
