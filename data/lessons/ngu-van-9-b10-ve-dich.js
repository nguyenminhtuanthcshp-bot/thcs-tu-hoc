/* Ngữ văn 9 – Bài 10. Về đích: Ngày hội với sách – phỏng vấn về sách và văn hoá đọc. Ngữ liệu: chương trình ngày hội và kịch bản phỏng vấn mẫu do nhóm biên soạn tự viết (tên người, lớp là giả định); các tác phẩm được nhắc tới đều thuộc phạm vi công cộng. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b10-ve-dich', {
  objectives: [
    'Biết tham gia tổ chức ngày hội với sách: trưng bày sản phẩm, giới thiệu sách, phỏng vấn về sách và văn hoá đọc.',
    'Biết chuẩn bị và thực hiện một cuộc phỏng vấn: mục đích, câu hỏi, cách hỏi – đáp, ghi chép, tổng hợp.',
    'Biết trả lời phỏng vấn mạch lạc, có dẫn chứng từ trải nghiệm đọc.',
    'Lan toả văn hoá đọc trong nhà trường và cộng đồng.'
  ],
  intro: 'Kết thúc năm học lớp 9 – năm cuối cấp – bằng một ngày hội với sách là cách đẹp để nhìn lại hành trình đọc của mình và truyền cảm hứng cho các em khoá sau. Điểm nhấn của ngày hội là những cuộc phỏng vấn về sách và văn hoá đọc.',
  text: {
    title: 'Chương trình ngày hội và kịch bản phỏng vấn mẫu',
    html: `<p><b>CHƯƠNG TRÌNH “NGÀY HỘI VỚI SÁCH – LỚP 9A”</b> (mẫu)</p>
<ul><li>7h30 – 8h00: Khai mạc, trưng bày áp phích quảng cáo sách (sản phẩm Thách thức thứ hai).</li>
<li>8h00 – 8h45: Góc “Đọc để trưởng thành” – chia sẻ nhật kí đọc.</li>
<li>8h45 – 9h30: Phỏng vấn “Sách và em” – phóng viên nhí phỏng vấn thầy cô, cô thư viện, các bạn.</li>
<li>9h30 – 10h00: Trao đổi sách cũ, tổng kết, bình chọn sản phẩm ấn tượng.</li></ul>
<p><b>Kịch bản phỏng vấn mẫu.</b> Phóng viên nhí: Ngọc (lớp 9A). Người trả lời: cô Hằng, phụ trách thư viện trường.</p>
<p><b>Ngọc:</b> Em chào cô ạ. Em là Ngọc, phóng viên của ngày hội. Cô có thể dành vài phút trò chuyện với chúng em về văn hoá đọc được không ạ?</p>
<p><b>Cô Hằng:</b> Chào em, cô rất sẵn lòng.</p>
<p><b>Ngọc:</b> Theo cô quan sát, năm nay học sinh trường mình đọc sách có gì thay đổi ạ?</p>
<p><b>Cô Hằng:</b> Cô thấy lượt mượn sách văn học nhiều hơn, nhất là sau khi các lớp làm áp phích giới thiệu sách. “Truyện Kiều”, “Những tấm lòng cao cả”, truyện Sherlock Holmes được mượn nhiều nhất.</p>
<p><b>Ngọc:</b> Vì sao cô nghĩ các bạn lại chọn những cuốn sách ấy ạ?</p>
<p><b>Cô Hằng:</b> Vì các em đã học trích đoạn trên lớp, thấy tò mò muốn đọc trọn vẹn. Đó là tín hiệu rất đáng mừng.</p>
<p><b>Ngọc:</b> Có bạn nói “bận học quá, không có thời gian đọc”. Cô có lời khuyên gì không ạ?</p>
<p><b>Cô Hằng:</b> Chỉ cần mười lăm phút mỗi ngày, trước khi ngủ chẳng hạn. Một năm, em có thể đọc xong vài cuốn sách. Quan trọng là đều đặn.</p>
<p><b>Ngọc:</b> Em cảm ơn cô rất nhiều ạ! Chúng em sẽ chia sẻ lời khuyên của cô trên bảng tin của trường.</p>`,
    source: 'Chương trình và kịch bản phỏng vấn do nhóm biên soạn tự viết; tên người, lớp và nhận xét của nhân vật là giả định, không phải số liệu thống kê.'
  },
  steps: [
    { title: 'Tổ chức ngày hội với sách', html: `<p>Các hoạt động chính của ngày hội:</p>`,
      svg: S.mindmap({ center: 'Ngày hội với sách', branches: [{ title: 'Trưng bày', items: ['Áp phích quảng cáo', 'Nhật kí đọc'] }, { title: 'Chia sẻ', items: ['Đọc để trưởng thành', 'Kể chuyện sách'] }, { title: 'Phỏng vấn', items: ['Thầy cô, thư viện', 'Các bạn'] }, { title: 'Lan toả', items: ['Trao đổi sách cũ', 'Bảng tin trường'] }] }),
      caption: 'Các hoạt động của ngày hội.' },
    { title: 'Chuẩn bị cuộc phỏng vấn', html: `<ul><li>Xác định <b>mục đích</b>: tìm hiểu thực trạng, kinh nghiệm, lời khuyên về văn hoá đọc.</li>
      <li>Chọn <b>người được phỏng vấn</b> phù hợp; xin phép, hẹn thời gian.</li>
      <li>Chuẩn bị <b>5 – 7 câu hỏi</b>: từ khái quát đến cụ thể; câu hỏi mở (vì sao, như thế nào).</li>
      <li>Chuẩn bị phương tiện ghi chép, ghi âm (phải xin phép trước khi ghi âm).</li></ul>`,
      svg: S.flow({ w: 620, items: [{ title: 'Chuẩn bị', text: 'Mục đích, câu hỏi' }, { title: 'Mở đầu', text: 'Chào, giới thiệu, xin phép' }, { title: 'Hỏi – đáp', text: 'Lắng nghe, hỏi thêm' }, { title: 'Kết thúc', text: 'Cảm ơn, tổng hợp' }] }),
      caption: 'Quy trình một cuộc phỏng vấn.' },
    { title: 'Kĩ năng hỏi và trả lời', html: `<table class="tbl"><tr><th>Người phỏng vấn</th><th>Người trả lời</th></tr>
      <tr><td>Chào hỏi lễ phép, giới thiệu bản thân, mục đích</td><td>Lắng nghe câu hỏi, trả lời đúng trọng tâm</td></tr>
      <tr><td>Hỏi câu mở; hỏi tiếp dựa trên câu trả lời (“Vì sao cô nghĩ…?”)</td><td>Dẫn chứng từ trải nghiệm, quan sát cụ thể</td></tr>
      <tr><td>Không ngắt lời; ghi chép ý chính</td><td>Nói rõ đâu là ý kiến cá nhân</td></tr>
      <tr><td>Cảm ơn, cho biết thông tin sẽ được dùng thế nào</td><td>Ngắn gọn, thân thiện</td></tr></table>` },
    { title: 'Tổng hợp và tự đánh giá hành trình đọc', html: `<ul><li>Tổng hợp câu trả lời thành bản tin ngắn cho bảng tin trường (ghi rõ người trả lời, nếu được đồng ý).</li>
      <li>Tự đánh giá cả năm: em đã đọc những cuốn nào? Cuốn nào làm em thay đổi nhiều nhất? Kế hoạch đọc mùa hè?</li></ul>
      <div class="box key">Văn hoá đọc không chỉ là đọc nhiều, mà là đọc đều đặn, đọc có suy ngẫm và biết chia sẻ.</div>` }
  ],
  summary: 'Ngày hội với sách gồm trưng bày sản phẩm (áp phích, nhật kí đọc), chia sẻ, phỏng vấn về sách và văn hoá đọc, trao đổi sách. Phỏng vấn: chuẩn bị mục đích, người được hỏi, 5 – 7 câu hỏi mở; mở đầu chào hỏi, giới thiệu, xin phép; hỏi – đáp, lắng nghe, hỏi tiếp; kết thúc cảm ơn và tổng hợp. Người trả lời đúng trọng tâm, có dẫn chứng. Cuối cùng tự đánh giá hành trình đọc cả năm.',
  examples: [
    { title: 'Câu hỏi nối tiếp', problem: 'Câu “Vì sao cô nghĩ các bạn lại chọn những cuốn sách ấy ạ?” thể hiện kĩ năng gì của người phỏng vấn?', solution: 'Kĩ năng lắng nghe và đặt câu hỏi nối tiếp: dựa vào câu trả lời trước (sách được mượn nhiều nhất) để hỏi sâu hơn về nguyên nhân, giúp cuộc phỏng vấn có chiều sâu thay vì chỉ hỏi theo danh sách.' },
    { title: 'Mở đầu phỏng vấn', problem: 'Lời mở đầu của Ngọc gồm những ý nào?', solution: 'Chào hỏi lễ phép, giới thiệu bản thân (tên, vai trò phóng viên ngày hội), nêu chủ đề (văn hoá đọc) và xin phép người được phỏng vấn. Đó là những yếu tố cần có để tạo thiện cảm và sự tôn trọng.' },
    { title: 'Câu trả lời có giá trị', problem: 'Lời khuyên “chỉ cần mười lăm phút mỗi ngày” thuyết phục ở điểm nào?', solution: 'Lời khuyên cụ thể, dễ thực hiện, trả lời đúng vào khó khăn “bận học”, kèm lí lẽ (một năm có thể đọc xong vài cuốn) và nhấn mạnh sự đều đặn. Người nghe thấy vừa sức để làm theo.' }
  ],
  exercises: [
    { question: 'Soạn 6 câu hỏi phỏng vấn một bạn cùng lớp về thói quen đọc sách.', hints: ['Từ khái quát đến cụ thể.', 'Câu hỏi mở.'], solution: '(1) Bạn thường đọc sách vào lúc nào trong ngày? (2) Cuốn sách bạn thích nhất năm nay là gì? Vì sao? (3) Cuốn sách nào khiến bạn thay đổi suy nghĩ hoặc cách cư xử? (4) Bạn chọn sách theo cách nào? (5) Khó khăn lớn nhất khi đọc sách của bạn là gì, bạn vượt qua thế nào? (6) Bạn muốn giới thiệu cuốn sách nào cho các em lớp 6?' },
    { question: 'Viết bản tin ngắn (5 – 6 câu) tổng hợp cuộc phỏng vấn mẫu với cô Hằng để đăng lên bảng tin trường.', hints: ['Nêu ai, ở đâu, nói gì.', 'Ghi rõ lời khuyên chính.'], solution: 'Ví dụ: Trong “Ngày hội với sách” của lớp 9A, phóng viên nhí Ngọc đã có cuộc trò chuyện với cô Hằng, phụ trách thư viện trường. Theo quan sát của cô, năm nay lượt mượn sách văn học tăng, đặc biệt sau khi các lớp làm áp phích giới thiệu sách. Những cuốn được mượn nhiều là “Truyện Kiều”, “Những tấm lòng cao cả” và truyện Sherlock Holmes. Cô cho rằng học trích đoạn trên lớp đã khơi gợi sự tò mò của học sinh. Lời khuyên của cô: chỉ cần mười lăm phút đọc mỗi ngày, quan trọng là đều đặn.' },
    { question: 'Tự đánh giá hành trình đọc của em trong năm lớp 9 (khoảng 5 câu) và đặt kế hoạch đọc mùa hè.', hints: ['Số sách, cuốn ấn tượng nhất.', 'Mục tiêu cụ thể cho mùa hè.'], solution: 'Ví dụ: Năm lớp 9, em đọc trọn vẹn bốn cuốn sách, trong đó có “Những tấm lòng cao cả” và một tập truyện Sherlock Holmes. Cuốn làm em thay đổi nhiều nhất là “Những tấm lòng cao cả”: em biết nói lời cảm ơn, xin lỗi bố mẹ nhiều hơn. Em chưa đọc đều, có tuần bỏ quên sách vì ôn thi. Mùa hè này, em đặt mục tiêu đọc mỗi ngày 20 phút, hoàn thành “Truyện Kiều” bản đầy đủ và hai cuốn sách khoa học. Em sẽ ghi nhật kí đọc mỗi tuần một trang.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi bắt đầu phỏng vấn, người phỏng vấn cần:', options: ['chào hỏi, giới thiệu bản thân, mục đích và xin phép', 'hỏi ngay câu khó nhất', 'ghi âm không cần xin phép', 'tự trả lời thay người được hỏi'], answer: 0, explain: 'Tạo thiện cảm, tôn trọng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu hỏi mở (vì sao, như thế nào) giúp người trả lời chia sẻ sâu hơn.', answer: true, explain: 'Khác câu hỏi có/không.' },
    { type: 'short', q: 'Theo cô Hằng, chỉ cần đọc … phút mỗi ngày (viết bằng số).', answer: ['15', 'mười lăm', 'muoi lam'], answerText: '15 (mười lăm)', explain: 'Quan trọng là đều đặn.' },
    { type: 'mcq', q: 'Muốn ghi âm cuộc phỏng vấn, cần:', options: ['xin phép người được phỏng vấn trước', 'ghi âm bí mật', 'không cần hỏi ai', 'chỉ báo sau khi xong'], answer: 0, explain: 'Tôn trọng quyền riêng tư.' },
    { type: 'mcq', q: 'Câu “Vì sao cô nghĩ các bạn lại chọn những cuốn sách ấy ạ?” là:', options: ['câu hỏi nối tiếp dựa trên câu trả lời trước', 'câu chào hỏi', 'câu kết thúc', 'câu không liên quan'], answer: 0, explain: 'Hỏi sâu hơn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người phỏng vấn nên ngắt lời để hỏi câu tiếp theo cho nhanh.', answer: false, explain: 'Không ngắt lời, lắng nghe.' },
    { type: 'short', q: 'Hoạt động cuối ngày hội giúp sách cũ tiếp tục có người đọc là “… sách cũ” (hai chữ, bắt đầu bằng “trao”).', answer: ['trao đổi', 'trao doi'], answerText: 'trao đổi', explain: 'Trao đổi sách cũ.' },
    { type: 'mcq', q: 'Theo bài học, văn hoá đọc là:', options: ['đọc đều đặn, có suy ngẫm và biết chia sẻ', 'chỉ đọc thật nhiều', 'chỉ đọc sách giáo khoa', 'đọc để khoe'], answer: 0, explain: 'Thông điệp của ngày hội.' }
  ]
});
})();
