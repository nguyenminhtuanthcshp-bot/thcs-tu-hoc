/* Ngữ văn 7 – Bài 5. Thực hành tiếng Việt: Từ ngữ địa phương; dấu gạch ngang; biện pháp tu từ trong tuỳ bút, tản văn. Ví dụ là ca dao (văn học dân gian) và câu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b5-tv', {
  objectives: [
    'Hiểu thế nào là từ ngữ địa phương (phương ngữ); nhận biết một số từ ngữ địa phương ba miền và từ ngữ toàn dân tương ứng.',
    'Biết sử dụng từ ngữ địa phương phù hợp hoàn cảnh giao tiếp và mục đích viết.',
    'Nắm được công dụng của dấu gạch ngang và phân biệt với dấu gạch nối.',
    'Nhận biết và nêu tác dụng của so sánh, nhân hoá, câu hỏi tu từ, điệp ngữ trong văn bản.'
  ],
  intro: 'Người Hà Nội nói “quả dứa”, người Huế nói “trái thơm”, người Sài Gòn gọi “trái khóm”. Cùng một loại quả mà ba miền có ba cách gọi – đó là sự phong phú của <b>từ ngữ địa phương</b>, một “màu sắc” đáng yêu của tiếng Việt.',
  steps: [
    { title: 'Từ ngữ địa phương là gì?', html: `<p><b>Ngôn ngữ vùng miền (phương ngữ)</b> là biến thể của một ngôn ngữ theo từng địa phương, khác nhau chủ yếu về <b>ngữ âm</b> (cách phát âm) và <b>từ vựng</b>. <b>Từ ngữ địa phương</b> là từ ngữ chỉ được dùng ở một (hoặc một số) địa phương; <b>từ ngữ toàn dân</b> được dùng rộng rãi trong cả nước.</p>
      <table class="tbl"><tr><th>Từ toàn dân</th><th>Bắc Bộ</th><th>Trung Bộ</th><th>Nam Bộ</th></tr>
      <tr><td>mẹ</td><td>mẹ, u, bầm</td><td>mạ, mệ (bà)</td><td>má</td></tr>
      <tr><td>quả dứa</td><td>quả dứa</td><td>trái thơm</td><td>trái thơm, trái khóm</td></tr>
      <tr><td>ngã</td><td>ngã</td><td>bổ</td><td>té</td></tr>
      <tr><td>thế, sao, đâu</td><td>thế, sao, đâu</td><td>rứa, răng, mô</td><td>vậy, sao, đâu</td></tr></table>
      <p>Có từ địa phương không có từ toàn dân tương đương, ví dụ: <i>nhút</i> (món dưa làm từ xơ mít, miền Trung), <i>chôm chôm, sầu riêng</i> (lúc đầu là từ Nam Bộ, nay đã phổ biến toàn dân).</p>` },
    { title: 'Dùng từ ngữ địa phương thế nào cho phù hợp?', html: `<ul><li>Trong giao tiếp hằng ngày với người cùng địa phương: dùng tự nhiên, tạo sự thân mật.</li><li>Trong văn học (tuỳ bút, tản văn, truyện): dùng có chọn lọc để <b>tô đậm màu sắc địa phương</b>, khắc hoạ nhân vật.</li><li>Trong văn bản hành chính, khoa học, bài làm văn nghị luận, thuyết minh: nên dùng <b>từ ngữ toàn dân</b> để ai cũng hiểu.</li></ul>
      <div class="box tip">Nếu dùng từ địa phương khó hiểu trong bài viết, nên giải thích trong ngoặc đơn hoặc chú thích.</div>` },
    { title: 'Dấu gạch ngang', html: `<p><b>Dấu gạch ngang (–)</b> có các công dụng:</p>
      <table class="tbl"><tr><th>Công dụng</th><th>Ví dụ</th></tr>
      <tr><td>Đánh dấu bộ phận chú thích, giải thích trong câu</td><td>Chợ phiên – ngày hội của người vùng cao – họp mỗi tuần một lần.</td></tr>
      <tr><td>Đánh dấu lời nói trực tiếp của nhân vật (đặt đầu dòng)</td><td>– Bà cho hết thì cháu ăn gì?</td></tr>
      <tr><td>Đánh dấu các ý liệt kê (đặt đầu dòng)</td><td>Chuẩn bị: – giấy màu; – kéo; – hồ dán.</td></tr>
      <tr><td>Nối các từ trong một liên danh, chỉ quãng</td><td>tuyến đường Hà Nội – Huế; từ năm 1945 – 1954</td></tr></table>
      <div class="box note">Phân biệt: <b>dấu gạch nối (-)</b> ngắn hơn, không phải dấu câu, dùng nối các tiếng trong từ phiên âm nước ngoài: <i>Ma-ri Quy-ri, Pa-ri</i>.</div>` },
    { title: 'Biện pháp tu từ trong tuỳ bút, tản văn', html: `<table class="tbl"><tr><th>Biện pháp</th><th>Ví dụ</th><th>Tác dụng</th></tr>
      <tr><td>So sánh</td><td>“người đổ về như suối”</td><td>Gợi hình ảnh dòng người đông, liên tục</td></tr>
      <tr><td>Nhân hoá</td><td>“Sương còn ngủ quên trên lưng núi.”</td><td>Cảnh vật có hồn, gần gũi</td></tr>
      <tr><td>Câu hỏi tu từ</td><td>“Ai đi xa mà chẳng nhớ bát canh quê?”</td><td>Khẳng định cảm xúc, không cần trả lời, tạo sự đồng cảm</td></tr>
      <tr><td>Điệp ngữ</td><td>“Nhớ vườn rau, nhớ bếp lửa, nhớ tiếng mạ gọi.”</td><td>Nhấn mạnh nỗi nhớ da diết, tạo nhịp điệu</td></tr></table>` },
    { title: 'Tổng hợp', html: `<p>Kiến thức của bài được tóm tắt như sau:</p>`,
      svg: S.mindmap({ center: 'Tiếng Việt – Bài 5', branches: [{ title: 'Từ ngữ địa phương', items: ['Khác về âm, từ vựng', 'Dùng đúng hoàn cảnh'] }, { title: 'Dấu gạch ngang', items: ['Chú thích', 'Lời nói trực tiếp, liệt kê', 'Liên danh, chỉ quãng'] }, { title: 'Biện pháp tu từ', items: ['So sánh, nhân hoá', 'Câu hỏi tu từ, điệp ngữ'] }] }),
      caption: 'Sơ đồ tổng hợp kiến thức tiếng Việt Bài 5.' }
  ],
  summary: 'Từ ngữ địa phương là từ ngữ chỉ dùng ở một số địa phương, khác từ ngữ toàn dân về âm hoặc từ vựng; cần dùng phù hợp hoàn cảnh (tránh dùng trong văn bản hành chính, khoa học). Dấu gạch ngang đánh dấu chú thích, lời nói trực tiếp, ý liệt kê và nối các từ trong liên danh, chỉ quãng; khác dấu gạch nối trong từ phiên âm. Tuỳ bút, tản văn hay dùng so sánh, nhân hoá, câu hỏi tu từ, điệp ngữ.',
  examples: [
    { title: 'Tìm từ toàn dân tương ứng', problem: 'Tìm từ toàn dân tương ứng với các từ địa phương: “trái” (Nam Bộ), “heo” (Trung, Nam Bộ), “chén” (Nam Bộ, chỉ đồ đựng cơm).', solution: 'trái → quả; heo → lợn; chén → bát.' },
    { title: 'Công dụng dấu gạch ngang', problem: 'Nêu công dụng của dấu gạch ngang: “Huế – thành phố của những dòng sông và những khu vườn – luôn làm du khách say mê.”', solution: 'Hai dấu gạch ngang đánh dấu bộ phận chú thích, giải thích cho “Huế”.' },
    { title: 'Câu hỏi tu từ', problem: 'Câu nào là câu hỏi tu từ? (a) “Mấy giờ chợ tan hả bà?” (b) “Có ai đến chợ phiên mà không muốn quay lại lần nữa?”', solution: 'Câu (b) là câu hỏi tu từ: không nhằm hỏi mà khẳng định rằng ai đến chợ phiên cũng muốn quay lại. Câu (a) là câu hỏi thông thường, cần câu trả lời.' }
  ],
  exercises: [
    { question: 'Chuyển đoạn hội thoại sau sang từ ngữ toàn dân: “– Mạ ơi, răng chừ mạ mới về? – Mạ đi chợ mô xa lắm con à.”', hints: ['mạ = mẹ; răng = sao; chừ = bây giờ; mô = đâu.', 'Giữ nguyên ý nghĩa, chỉ thay từ.'], solution: '“– Mẹ ơi, sao bây giờ mẹ mới về? – Mẹ đi chợ ở đâu xa lắm con à.”' },
    { question: 'Có nên dùng từ “té” (Nam Bộ) trong một bản tường trình gửi nhà trường về việc bạn bị ngã ở cầu thang không? Vì sao?', hints: ['Tường trình là văn bản gì?', 'Ai sẽ đọc văn bản đó?'], solution: 'Không nên. Tường trình là văn bản hành chính, cần dùng từ ngữ toàn dân, chính xác để mọi người đọc đều hiểu đúng; nên viết “ngã”.' },
    { question: 'Viết 2 – 3 câu giới thiệu một món ăn quê em, có dùng một dấu gạch ngang để chú thích và một từ địa phương (kèm giải thích).', hints: ['Dấu gạch ngang đặt hai bên phần giải thích.', 'Từ địa phương có thể giải thích trong ngoặc đơn.'], solution: 'Ví dụ: Bánh bèo – món ăn dân dã của người Huế – được đổ trong những chiếc chén nhỏ. Mạ (mẹ) em thường rắc tôm chấy lên trên và rưới chút nước mắm ớt. Ăn một lần là nhớ mãi.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Từ ngữ địa phương là:', options: ['Từ ngữ chỉ dùng ở một hoặc một số địa phương', 'Từ ngữ được dùng trong cả nước', 'Từ mượn tiếng nước ngoài', 'Thuật ngữ khoa học'], answer: 0, explain: 'Định nghĩa từ ngữ địa phương.' },
    { type: 'short', q: 'Từ toàn dân tương ứng với từ địa phương “heo” là gì?', answer: ['lợn', 'con lợn'], answerText: 'lợn', explain: 'heo (Trung, Nam Bộ) – lợn (toàn dân, Bắc Bộ).' },
    { type: 'mcq', q: 'Từ “răng” trong câu “Răng mạ chưa về?” có nghĩa là:', options: ['Sao', 'Răng miệng', 'Nào', 'Thế'], answer: 0, explain: '“Răng” (miền Trung) = sao.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng nhiều từ ngữ địa phương trong văn bản hành chính để thể hiện bản sắc.', answer: false, explain: 'Văn bản hành chính cần từ ngữ toàn dân.' },
    { type: 'mcq', q: 'Dấu gạch ngang trong “tuyến đường Hà Nội – Hải Phòng” có công dụng:', options: ['Nối các từ trong một liên danh', 'Đánh dấu lời nói trực tiếp', 'Đánh dấu phần chú thích', 'Nối các tiếng trong từ phiên âm'], answer: 0, explain: 'Liên danh hai địa điểm.' },
    { type: 'mcq', q: 'Trong “Ma-ri Quy-ri”, dấu “-” là:', options: ['Dấu gạch nối', 'Dấu gạch ngang', 'Dấu trừ', 'Dấu chấm lửng'], answer: 0, explain: 'Dấu gạch nối dùng trong từ phiên âm, không phải dấu câu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu hỏi tu từ là câu hỏi không nhằm mục đích tìm câu trả lời mà để khẳng định hoặc bộc lộ cảm xúc.', answer: true, explain: 'Đặc điểm của câu hỏi tu từ.' },
    { type: 'mcq', q: '“Sương còn ngủ quên trên lưng núi” sử dụng biện pháp:', options: ['Nhân hoá', 'So sánh', 'Liệt kê', 'Nói giảm nói tránh'], answer: 0, explain: '“Ngủ quên” là hoạt động của người được gán cho sương.' }
  ]
});
})();
