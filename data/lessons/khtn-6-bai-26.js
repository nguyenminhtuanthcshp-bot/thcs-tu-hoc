/* KHTN 6 – Bài 26. Khoá lưỡng phân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-26', {
  objectives: [
    'Nêu được khoá lưỡng phân là gì và dùng để làm gì.',
    'Đọc được khoá lưỡng phân để xác định tên một sinh vật.',
    'Tự xây dựng được khoá lưỡng phân đơn giản cho một nhóm 3–5 sinh vật.'
  ],
  intro: 'Trò chơi "đoán vật" chỉ trả lời "có" hoặc "không" giúp ta loại dần cho tới khi đoán đúng. Các nhà sinh học cũng làm như vậy khi phân loại sinh vật, bằng công cụ gọi là <b>khoá lưỡng phân</b>.',
  steps: [
    { title: 'Khoá lưỡng phân là gì?', html: `<p><b>Khoá lưỡng phân</b> là cách phân chia sinh vật thành <b>hai nhóm</b> dựa vào một đặc điểm <b>đối lập</b> (có – không có; sống ở nước – sống trên cạn…). Mỗi nhóm lại được chia đôi tiếp cho đến khi mỗi nhóm chỉ còn <b>một</b> sinh vật.</p>
      <div class="box key">"Lưỡng" nghĩa là hai; "phân" nghĩa là chia. Mỗi bước chỉ có hai lựa chọn.</div>` },
    { title: 'Đọc một khoá lưỡng phân', html: `<p>Ví dụ khoá phân loại bốn con vật: cá chép, chim sẻ, mèo, giun đất. Bắt đầu từ ô trên cùng, trả lời câu hỏi rồi đi theo nhánh tương ứng.</p>`,
      svg: S.keyTree({ q: 'Có xương sống?', yes: { q: 'Sống dưới nước, thở bằng mang?', yes: 'Cá chép', no: { q: 'Có lông vũ?', yes: 'Chim sẻ', no: 'Mèo' } }, no: 'Giun đất' }, { w: 620 }),
      caption: 'Khoá lưỡng phân cho bốn loài động vật.' },
    { title: 'Các bước xây dựng khoá lưỡng phân', html: `<ol><li>Quan sát, liệt kê đặc điểm của từng sinh vật.</li><li>Chọn một đặc điểm chia nhóm thành <b>hai</b> nhóm (đặc điểm dễ quan sát, rõ ràng).</li>
      <li>Tiếp tục chia mỗi nhóm thành hai nhóm nhỏ hơn theo đặc điểm khác.</li><li>Lặp lại đến khi mỗi nhóm chỉ còn một sinh vật.</li></ol>
      <div class="box tip">Với n sinh vật, khoá lưỡng phân luôn cần đúng <b>n − 1</b> câu hỏi (mỗi câu hỏi tách thêm được một nhóm).</div>` },
    { title: 'Ví dụ với thực vật', html: `<p>Phân loại: cây rêu, cây dương xỉ, cây thông, cây bưởi.</p>`,
      svg: S.keyTree({ q: 'Có mạch dẫn?', yes: { q: 'Có hạt?', yes: { q: 'Có hoa, quả?', yes: 'Cây bưởi', no: 'Cây thông' }, no: 'Cây dương xỉ' }, no: 'Cây rêu' }, { w: 620 }),
      caption: 'Khoá lưỡng phân cho bốn loại cây.' }
  ],
  summary: 'Khoá lưỡng phân chia sinh vật thành hai nhóm theo đặc điểm đối lập, lặp lại đến khi mỗi nhóm còn một sinh vật. Muốn xây dựng: liệt kê đặc điểm, chọn đặc điểm rõ ràng chia đôi, lặp lại. Với n sinh vật cần n − 1 bước chia.',
  examples: [
    { title: 'Đọc khoá', problem: 'Dùng khoá động vật ở bước 2: một con vật có xương sống, không sống dưới nước, không có lông vũ. Đó là con gì?', solution: 'Có xương sống → không thở bằng mang → không có lông vũ → <b>mèo</b>.' },
    { title: 'Đặc điểm đối lập', problem: 'Cặp đặc điểm nào dùng được cho khoá lưỡng phân: a) "có cánh – không có cánh"; b) "màu đẹp – màu xấu"?', solution: 'Cặp <b>a)</b>, vì rõ ràng, ai quan sát cũng cho cùng kết quả. Cặp b) mang tính cảm nhận, không khách quan.' },
    { title: 'Đếm bước', problem: 'Khoá lưỡng phân cho 6 loài cần bao nhiêu câu hỏi (bước chia)?', solution: '6 − 1 = <b>5</b> câu hỏi.' }
  ],
  exercises: [
    { question: 'Xây dựng khoá lưỡng phân cho: con ếch, con cá rô, con gà, con muỗi.', hints: ['Đặc điểm đầu tiên: có xương sống hay không?', 'Trong nhóm có xương sống: có lông vũ không? Rồi: thở bằng mang suốt đời không?'], solution: 'Có xương sống? – Không → <b>muỗi</b>. – Có → Có lông vũ? – Có → <b>gà</b>. – Không → Suốt đời sống dưới nước, thở bằng mang? – Có → <b>cá rô</b>; Không → <b>ếch</b>.' },
    { question: 'Dùng khoá thực vật ở bước 4: một cây có mạch dẫn, có hạt nhưng không có hoa. Đó là cây gì?', hints: ['Đi nhánh "Có mạch dẫn".', 'Rồi "Có hạt", rồi "Không có hoa".'], solution: '<b>Cây thông</b>.' },
    { question: 'Vì sao đặc điểm "to – nhỏ" thường không phù hợp để xây dựng khoá lưỡng phân?', hints: ['To so với cái gì?', 'Cùng một loài có cá thể to, cá thể nhỏ.'], solution: 'Vì "to – nhỏ" là so sánh tương đối, không rõ ranh giới; con non và con trưởng thành của cùng một loài có kích thước khác nhau nên dễ phân loại sai.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khoá lưỡng phân mỗi lần chia sinh vật thành:', options: ['Hai nhóm', 'Ba nhóm', 'Bốn nhóm', 'Nhiều nhóm tuỳ ý'], answer: 0, explain: '"Lưỡng" là hai.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các đặc điểm dùng trong khoá lưỡng phân phải đối lập, rõ ràng.', answer: true, explain: 'Như có – không có.' },
    { type: 'short', q: 'Khoá lưỡng phân cho 8 loài cần bao nhiêu bước chia (câu hỏi)?', answer: '7', calc: '8-1', explain: 'n − 1 = 7.' },
    { type: 'mcq', q: 'Theo khoá dưới đây, con vật không có xương sống là:', svg: S.keyTree({ q: 'Có xương sống?', yes: { q: 'Sống dưới nước, thở bằng mang?', yes: 'Cá chép', no: { q: 'Có lông vũ?', yes: 'Chim sẻ', no: 'Mèo' } }, no: 'Giun đất' }, { w: 620 }), options: ['Cá chép', 'Chim sẻ', 'Mèo', 'Giun đất'], answer: 3, explain: 'Nhánh "Không" của câu hỏi đầu tiên.' },
    { type: 'mcq', q: 'Cặp đặc điểm nào phù hợp nhất cho khoá lưỡng phân?', options: ['Có chân – không có chân', 'Dễ thương – không dễ thương', 'Nhanh – hơi nhanh', 'Đắt – rẻ'], answer: 0, explain: 'Đặc điểm khách quan, đối lập.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kết thúc khoá lưỡng phân, mỗi nhánh cuối cùng chỉ còn một sinh vật.', answer: true, explain: 'Chia cho đến khi mỗi nhóm còn một sinh vật.' },
    { type: 'mcq', q: 'Trong khoá thực vật, cây có mạch dẫn nhưng không có hạt là:', options: ['Rêu', 'Dương xỉ', 'Thông', 'Bưởi'], answer: 1, explain: 'Dương xỉ có mạch dẫn, sinh sản bằng bào tử.' },
    { type: 'mcq', q: 'Bước đầu tiên khi xây dựng khoá lưỡng phân là:', options: ['Quan sát, liệt kê đặc điểm của các sinh vật', 'Đặt tên khoa học', 'Vẽ tranh', 'Đếm số chân'], answer: 0, explain: 'Cần biết đặc điểm rồi mới chọn cách chia.' }
  ]
});
})();
