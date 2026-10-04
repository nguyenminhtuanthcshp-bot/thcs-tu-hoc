/* Ngữ văn 7 – Bài 8. Thực hành tiếng Việt: Liên kết câu, đoạn trong văn bản nghị luận (từ ngữ liên kết); thuật ngữ. Ví dụ do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b8-tv', {
  objectives: [
    'Nhận biết và sử dụng được các từ ngữ liên kết trong văn bản nghị luận theo từng quan hệ ý nghĩa.',
    'Nhận biết được thuật ngữ và đặc điểm của thuật ngữ; phân biệt thuật ngữ với từ ngữ thông thường.',
    'Dùng thuật ngữ chính xác khi viết về các môn học.'
  ],
  intro: 'Trong bài văn nghị luận, những từ nhỏ như “trước hết”, “tuy nhiên”, “vì vậy” giống như biển chỉ đường, giúp người đọc đi đúng mạch lập luận. Còn trong sách Toán, Khoa học, những từ như “phân số”, “quang hợp” lại có một nghĩa duy nhất – đó là thuật ngữ.',
  steps: [
    { title: 'Từ ngữ liên kết theo quan hệ ý nghĩa', html: `<table class="tbl"><tr><th>Quan hệ</th><th>Từ ngữ liên kết</th></tr>
      <tr><td>Trình tự, liệt kê</td><td>trước hết, thứ nhất, tiếp theo, sau cùng</td></tr>
      <tr><td>Bổ sung</td><td>hơn nữa, không chỉ vậy, bên cạnh đó, ngoài ra</td></tr>
      <tr><td>Tương phản</td><td>tuy nhiên, nhưng, ngược lại, mặt khác</td></tr>
      <tr><td>Nguyên nhân – kết quả</td><td>vì vậy, do đó, bởi vậy, cho nên</td></tr>
      <tr><td>Minh hoạ</td><td>chẳng hạn, ví dụ, như</td></tr>
      <tr><td>Tổng kết</td><td>tóm lại, nói tóm lại, nhìn chung</td></tr></table>` },
    { title: 'Liên kết đoạn trong bài nghị luận', html: `<p>Các từ ngữ liên kết đứng đầu đoạn giúp người đọc thấy ngay vị trí của đoạn trong mạch lập luận:</p>`,
      svg: S.flow({ items: [{ title: 'Trước hết', text: 'Luận điểm 1' }, { title: 'Không chỉ vậy', text: 'Luận điểm 2' }, { title: 'Tuy nhiên', text: 'Ý kiến trái chiều' }, { title: 'Tóm lại', text: 'Kết luận' }] }),
      caption: 'Từ ngữ liên kết đánh dấu mạch lập luận.' },
    { title: 'Thuật ngữ là gì?', html: `<p><b>Thuật ngữ</b> là từ ngữ biểu thị <b>khái niệm khoa học, công nghệ</b>, thường được dùng trong các văn bản khoa học, công nghệ.</p>
      <table class="tbl"><tr><th>Lĩnh vực</th><th>Thuật ngữ</th><th>Nghĩa</th></tr>
      <tr><td>Toán học</td><td>số nguyên tố</td><td>Số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó</td></tr>
      <tr><td>Sinh học</td><td>quang hợp</td><td>Quá trình cây xanh dùng năng lượng ánh sáng tổng hợp chất hữu cơ từ khí carbon dioxide và nước, giải phóng oxygen</td></tr>
      <tr><td>Ngữ văn</td><td>luận điểm</td><td>Ý kiến thể hiện quan điểm của người viết trong văn nghị luận</td></tr>
      <tr><td>Địa lí</td><td>kinh tuyến</td><td>Đường nối cực Bắc với cực Nam trên bề mặt quả Địa Cầu</td></tr></table>` },
    { title: 'Đặc điểm của thuật ngữ', html: `<p>Thuật ngữ có ba đặc điểm cần nhớ:</p>`,
      svg: S.mindmap({ center: 'Thuật ngữ', branches: [{ title: 'Chính xác', items: ['Mỗi thuật ngữ biểu thị một khái niệm', 'Mỗi khái niệm có một thuật ngữ'] }, { title: 'Không biểu cảm', items: ['Không mang sắc thái tình cảm'] }, { title: 'Phạm vi dùng', items: ['Văn bản khoa học, công nghệ', 'Có thể phổ biến vào đời sống'] }] }),
      caption: 'Đặc điểm của thuật ngữ.' },
    { title: 'Thuật ngữ và từ ngữ thông thường', html: `<p>Cùng một từ có thể là thuật ngữ ở văn bản khoa học nhưng là từ thông thường ở văn bản khác:</p>
      <ul><li>“<b>Muối</b> là hợp chất tạo thành từ phản ứng giữa acid và base.” → thuật ngữ hoá học, nghĩa chính xác.</li><li>“Tình nghĩa thầy trò <b>mặn</b> như <b>muối</b>.” → từ thông thường, mang nghĩa biểu cảm.</li></ul>
      <div class="box tip">Khi làm bài môn khoa học, dùng đúng thuật ngữ (“bay hơi” chứ không phải “bốc mất”); khi viết văn biểu cảm, có thể dùng từ giàu hình ảnh.</div>` }
  ],
  summary: 'Từ ngữ liên kết trong văn nghị luận thể hiện quan hệ trình tự (trước hết, tiếp theo), bổ sung (hơn nữa, không chỉ vậy), tương phản (tuy nhiên, ngược lại), nhân quả (vì vậy, do đó), minh hoạ (chẳng hạn), tổng kết (tóm lại). Thuật ngữ là từ ngữ biểu thị khái niệm khoa học, công nghệ; chính xác (mỗi thuật ngữ một khái niệm), không mang sắc thái biểu cảm, dùng chủ yếu trong văn bản khoa học.',
  examples: [
    { title: 'Chọn từ liên kết', problem: 'Điền từ liên kết phù hợp: “Đọc sách giúp mở rộng hiểu biết. (…), đọc sách còn bồi dưỡng tâm hồn.”', solution: 'Điền “Không chỉ vậy” / “Hơn nữa” / “Bên cạnh đó” – quan hệ bổ sung.' },
    { title: 'Nhận diện thuật ngữ', problem: 'Tìm thuật ngữ trong câu: “Nước sôi ở 100 °C khi áp suất bằng 1 atm.”', solution: 'Thuật ngữ: “sôi”, “áp suất”, “atm” (đơn vị đo áp suất) – thuộc lĩnh vực vật lí, biểu thị khái niệm khoa học chính xác.' },
    { title: 'Thuật ngữ hay từ thông thường?', problem: 'Từ “ẩn dụ” trong hai câu sau là thuật ngữ hay từ thông thường: (a) “Ẩn dụ là gọi tên sự vật này bằng tên sự vật khác có nét tương đồng.” (b) “Câu nói của bạn có ẩn ý gì vậy?”', solution: '(a) “Ẩn dụ” là thuật ngữ ngữ văn, dùng để định nghĩa khái niệm. (b) Từ “ẩn ý” là từ thông thường (ý ngầm), không phải thuật ngữ.' }
  ],
  exercises: [
    { question: 'Chỉ ra từ ngữ liên kết và quan hệ ý nghĩa: “Mạng xã hội giúp kết nối bạn bè. Tuy nhiên, dùng quá nhiều sẽ gây mất tập trung. Vì vậy, học sinh cần sử dụng có kế hoạch.”', hints: ['Có hai từ ngữ liên kết.', 'Một từ thể hiện sự đối lập, một từ thể hiện kết quả.'], solution: '“Tuy nhiên” – quan hệ tương phản (lợi ích ↔ tác hại). “Vì vậy” – quan hệ nguyên nhân – kết quả (dẫn đến lời khuyên).' },
    { question: 'Giải thích vì sao “số nguyên tố” là thuật ngữ.', hints: ['Nó thuộc lĩnh vực nào?', 'Nghĩa có chính xác, duy nhất không? Có biểu cảm không?'], solution: '“Số nguyên tố” thuộc lĩnh vực Toán học, biểu thị một khái niệm chính xác (số tự nhiên lớn hơn 1 chỉ có hai ước là 1 và chính nó), mỗi người dùng đều hiểu giống nhau, không mang sắc thái biểu cảm.' },
    { question: 'Viết đoạn văn nghị luận (4–5 câu) về lợi ích của việc tập thể dục buổi sáng, dùng ít nhất ba từ ngữ liên kết khác loại. Gạch chân các từ đó.', hints: ['Dùng từ chỉ trình tự, bổ sung, tổng kết.', 'Mỗi câu một ý.'], solution: 'Ví dụ: “Tập thể dục buổi sáng mang lại nhiều lợi ích. <u>Trước hết</u>, nó giúp cơ thể khoẻ mạnh, tăng sức đề kháng. <u>Không chỉ vậy</u>, không khí trong lành buổi sớm giúp tinh thần sảng khoái. <u>Chẳng hạn</u>, sau mười lăm phút chạy bộ, em thấy vào lớp tỉnh táo hẳn. <u>Tóm lại</u>, ai cũng nên dành chút thời gian mỗi sáng để vận động.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Từ ngữ liên kết nào thể hiện quan hệ tương phản?', options: ['Tuy nhiên', 'Hơn nữa', 'Vì vậy', 'Tóm lại'], answer: 0, explain: '“Tuy nhiên” – tương phản.' },
    { type: 'mcq', q: '“Tóm lại” thường dùng ở:', options: ['Đoạn kết luận', 'Đầu mở bài để giới thiệu', 'Giữa một câu hỏi', 'Lời thoại nhân vật cổ tích'], answer: 0, explain: 'Quan hệ tổng kết.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thuật ngữ thường mang sắc thái biểu cảm mạnh.', answer: false, explain: 'Thuật ngữ không mang sắc thái biểu cảm.' },
    { type: 'mcq', q: 'Từ nào là thuật ngữ?', options: ['Quang hợp', 'Xinh xắn', 'Vui vẻ', 'Lấp lánh'], answer: 0, explain: 'Thuật ngữ sinh học.' },
    { type: 'short', q: 'Điền từ ngữ liên kết chỉ quan hệ nhân quả: “Trời mưa to. (…), trận đấu bị hoãn.” (ghi 2 tiếng)', answer: ['vì vậy', 'do đó', 'bởi vậy', 'vì thế', 'cho nên'], answerText: 'Vì vậy / Do đó', explain: 'Quan hệ nguyên nhân – kết quả.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi thuật ngữ chỉ biểu thị một khái niệm.', answer: true, explain: 'Tính chính xác của thuật ngữ.' },
    { type: 'mcq', q: 'Thuật ngữ được dùng chủ yếu trong loại văn bản nào?', options: ['Văn bản khoa học, công nghệ', 'Ca dao', 'Thơ trữ tình', 'Truyện cười'], answer: 0, explain: 'Phạm vi sử dụng của thuật ngữ.' },
    { type: 'mcq', q: '“Hơn nữa” thể hiện quan hệ:', options: ['Bổ sung', 'Tương phản', 'Tổng kết', 'Nhân quả'], answer: 0, explain: 'Bổ sung thêm ý.' }
  ]
});
})();
