/* Ngữ văn 8 – Bài 8. Thực hành tiếng Việt: Thành phần biệt lập (tình thái, cảm thán, gọi – đáp, phụ chú). Ngữ liệu: thơ Nôm cổ của Nguyễn Khuyến (phạm vi công cộng), ca dao và câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b8-tv', {
  objectives: [
    'Nhận biết được thành phần biệt lập: tình thái, cảm thán, gọi – đáp, phụ chú (chêm xen).',
    'Hiểu được chức năng của từng thành phần biệt lập và tác dụng của chúng trong câu.',
    'Sử dụng được các thành phần biệt lập phù hợp khi nói và viết, nhất là trong văn nghị luận văn học.'
  ],
  intro: 'Thử bỏ cụm từ “có lẽ” khỏi câu “Có lẽ, ngày mai trời sẽ mưa.” – câu vẫn đúng ngữ pháp, nhưng thái độ “phỏng đoán” của người nói đã biến mất. Những thành phần “đứng riêng” như vậy gọi là thành phần biệt lập.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) Có lẽ, Nguyễn Khuyến là nhà thơ viết về làng quê Bắc Bộ chân thật nhất.</p>
<p>(2) Chao ôi, cảnh đêm thu trong thơ ông mới tĩnh lặng làm sao!</p>
<p>(3) Này, cậu đã đọc bài “Bạn đến chơi nhà” chưa? – Thưa cô, em đọc rồi ạ.</p>
<p>(4) Nguyễn Khuyến – người đỗ đầu cả ba kì thi – lại chọn cuộc sống ẩn dật ở quê nhà.</p>
<p>(5) Bài “Thu ẩm” (nghĩa là “uống rượu mùa thu”) được viết bằng chữ Nôm.</p>
<p>(6) <i>Bầu ơi thương lấy bí cùng / Tuy rằng khác giống nhưng chung một giàn.</i> <i>(Ca dao)</i></p>
<p><i>(Câu (1) – (5) do nhóm biên soạn viết, nói về tác giả, tác phẩm thuộc phạm vi công cộng.)</i></p>`,
    source: 'Câu (1) – (5) do nhóm biên soạn tự viết; câu (6) là ca dao (văn học dân gian).'
  },
  steps: [
    { title: 'Thành phần biệt lập là gì?', html: `<p><b>Thành phần biệt lập</b> là thành phần không tham gia vào việc diễn đạt nghĩa sự việc của câu (không phải chủ ngữ, vị ngữ, trạng ngữ…). Bỏ đi, câu vẫn đủ nghĩa sự việc, nhưng mất đi thái độ, cảm xúc, lời gọi hay thông tin bổ sung.</p>`,
      svg: S.mindmap({ center: 'Thành phần biệt lập', branches: [{ title: 'Tình thái', items: ['Cách nhìn của người nói', 'có lẽ, chắc chắn, hình như'] }, { title: 'Cảm thán', items: ['Bộc lộ tâm lí', 'ôi, chao ôi, trời ơi'] }, { title: 'Gọi – đáp', items: ['Tạo lập, duy trì giao tiếp', 'này, ơi, thưa, vâng'] }, { title: 'Phụ chú', items: ['Bổ sung, giải thích', 'giữa gạch ngang, ngoặc đơn'] }] }),
      caption: 'Bốn loại thành phần biệt lập.' },
    { title: 'Thành phần tình thái và cảm thán', html: `<table class="tbl"><tr><th>Thành phần</th><th>Chức năng</th><th>Ví dụ</th></tr>
      <tr><td>Tình thái</td><td>Thể hiện cách nhìn, độ tin cậy của người nói với sự việc: chắc chắn (chắc chắn, hẳn là), phỏng đoán (có lẽ, hình như, dường như), ý kiến (theo tôi, theo nhiều nhà nghiên cứu)…</td><td>“<b>Có lẽ</b>, Nguyễn Khuyến là nhà thơ…” (1)</td></tr>
      <tr><td>Cảm thán</td><td>Bộc lộ tâm lí, cảm xúc của người nói (vui, buồn, ngạc nhiên, xúc động…)</td><td>“<b>Chao ôi</b>, cảnh đêm thu…” (2)</td></tr></table>
      <p>Thành phần tình thái rất hữu ích trong văn nghị luận: “theo tôi”, “có thể nói”, “chắc chắn” giúp người viết thể hiện mức độ khẳng định phù hợp.</p>` },
    { title: 'Thành phần gọi – đáp và phụ chú', html: `<table class="tbl"><tr><th>Thành phần</th><th>Chức năng</th><th>Ví dụ</th></tr>
      <tr><td>Gọi – đáp</td><td>Dùng để tạo lập hoặc duy trì quan hệ giao tiếp</td><td>“<b>Này</b>, cậu đã đọc…?” (gọi); “<b>Thưa cô</b>, em đọc rồi ạ.” (đáp); “<b>Bầu ơi</b>…” (6)</td></tr>
      <tr><td>Phụ chú (chêm xen)</td><td>Bổ sung, giải thích thêm cho một bộ phận của câu; thường đặt giữa hai dấu gạch ngang, hai dấu phẩy, trong ngoặc đơn hoặc sau dấu hai chấm</td><td>“Nguyễn Khuyến <b>– người đỗ đầu cả ba kì thi –</b> lại…” (4); “Bài ‘Thu ẩm’ <b>(nghĩa là ‘uống rượu mùa thu’)</b>…” (5)</td></tr></table>` },
    { title: 'Nhận diện bằng phép thử lược bỏ', html: `<p>Cách kiểm tra: <b>bỏ thử</b> thành phần nghi là biệt lập. Nếu câu vẫn đủ nghĩa sự việc thì đó là thành phần biệt lập.</p>
      <p>Ví dụ: “Nguyễn Khuyến <s>– người đỗ đầu cả ba kì thi –</s> lại chọn cuộc sống ẩn dật ở quê nhà.” → Câu vẫn đủ nghĩa. Nhưng thiếu phụ chú, người đọc không thấy được sự đối lập thú vị: người đỗ đạt cao nhất lại chọn về quê.</p>
      <div class="box key">Lưu ý dấu câu: thành phần biệt lập thường được ngăn cách với phần còn lại của câu bằng dấu phẩy, dấu gạch ngang hoặc dấu ngoặc đơn.</div>` }
  ],
  summary: 'Thành phần biệt lập không tham gia diễn đạt nghĩa sự việc của câu, gồm: tình thái (cách nhìn, độ tin cậy: có lẽ, chắc chắn, theo tôi…), cảm thán (bộc lộ cảm xúc: ôi, chao ôi…), gọi – đáp (tạo lập, duy trì giao tiếp: này, ơi, thưa, vâng…), phụ chú (bổ sung, giải thích; đặt giữa gạch ngang, dấu phẩy, ngoặc đơn). Có thể nhận diện bằng phép thử lược bỏ.',
  examples: [
    { title: 'Xác định thành phần biệt lập', problem: 'Xác định thành phần biệt lập và gọi tên: “Hình như, mùa thu đã về trên những ngõ trúc làng quê.”', solution: '“Hình như” là thành phần tình thái, thể hiện sự phỏng đoán, chưa chắc chắn của người nói; đồng thời gợi cảm nhận mơ hồ, nhẹ nhàng về sự chuyển mùa.' },
    { title: 'Phân biệt thán từ và thành phần cảm thán', problem: 'Trong câu “Ôi, bài thơ hay quá!”, “Ôi” là gì? Còn trong câu “Trời ơi!” thì sao?', solution: 'Trong câu “Ôi, bài thơ hay quá!”, “Ôi” là thán từ làm thành phần cảm thán (thành phần biệt lập) của câu. Còn “Trời ơi!” đứng riêng thành một câu đặc biệt, bộc lộ cảm xúc – không còn là thành phần biệt lập trong một câu khác.' },
    { title: 'Tác dụng của phụ chú', problem: 'Nêu tác dụng của phần phụ chú trong câu (5).', solution: 'Phần “(nghĩa là ‘uống rượu mùa thu’)” giải thích nghĩa của nhan đề Hán Việt “Thu ẩm”, giúp người đọc hiểu ngay tên bài thơ mà không làm gián đoạn thông tin chính (bài thơ viết bằng chữ Nôm).' }
  ],
  exercises: [
    { question: 'Tìm và gọi tên thành phần biệt lập trong các câu: (a) “Chắc chắn, bạn sẽ yêu thơ Nguyễn Khuyến khi đọc ‘Thu ẩm’.” (b) “Lan ơi, cho mình mượn cuốn sách nhé!” (c) “Hồ Xuân Hương – ‘Bà chúa thơ Nôm’ – để lại nhiều bài thơ độc đáo.”', hints: ['Dùng phép thử lược bỏ.', 'Xem dấu câu ngăn cách.'], solution: '(a) “Chắc chắn”: thành phần tình thái (độ tin cậy cao). (b) “Lan ơi”: thành phần gọi – đáp (gọi). (c) “– ‘Bà chúa thơ Nôm’ –”: thành phần phụ chú, giải thích thêm về Hồ Xuân Hương.' },
    { question: 'Viết lại câu “Nguyễn Khuyến sinh năm 1835 mất năm 1909 là nhà thơ lớn cuối thế kỉ XIX.” bằng cách đưa thông tin năm sinh, năm mất vào thành phần phụ chú.', hints: ['Dùng dấu ngoặc đơn hoặc gạch ngang.', 'Đặt phụ chú ngay sau tên nhà thơ.'], solution: '“Nguyễn Khuyến (1835 – 1909) là nhà thơ lớn cuối thế kỉ XIX.” Phần “(1835 – 1909)” là thành phần phụ chú, giúp câu gọn gàng, thông tin chính nổi bật.' },
    { question: 'Viết đoạn văn (5 – 6 câu) nêu cảm nhận về một bài thơ đã học, có dùng ít nhất một thành phần tình thái, một thành phần cảm thán và một thành phần phụ chú; gạch chân các thành phần đó.', hints: ['Tình thái: theo em, có lẽ, chắc chắn…', 'Phụ chú: giải thích tên tác giả, nhan đề bằng ngoặc đơn/gạch ngang.'], solution: 'Ví dụ: “Bánh trôi nước” <u>– một bài thơ tứ tuyệt của Hồ Xuân Hương –</u> đã để lại trong em nhiều suy nghĩ. <u>Theo em</u>, hình ảnh chiếc bánh trắng, tròn là ẩn dụ đẹp về người phụ nữ. <u>Ôi</u>, câu thơ “Mà em vẫn giữ tấm lòng son” mới kiêu hãnh làm sao! <u>Có lẽ</u>, chính chữ “Mà” đã làm nên sức sống của bài thơ. Bài thơ giúp em thêm trân trọng những người phụ nữ quanh mình.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Thành phần biệt lập thể hiện cách nhìn, độ tin cậy của người nói là:', options: ['thành phần tình thái', 'thành phần cảm thán', 'thành phần gọi – đáp', 'thành phần phụ chú'], answer: 0, explain: 'Có lẽ, chắc chắn, hình như…' },
    { type: 'short', q: 'Trong câu “Hình như, trời sắp mưa.”, thành phần tình thái là cụm từ nào?', answer: ['hình như', 'hinh nhu'], answerText: 'hình như', explain: 'Thể hiện sự phỏng đoán.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bỏ thành phần biệt lập đi, câu vẫn đủ nghĩa sự việc.', answer: true, explain: 'Thành phần biệt lập không tham gia nghĩa sự việc.' },
    { type: 'mcq', q: 'Trong câu “Bầu ơi thương lấy bí cùng”, “Bầu ơi” là thành phần:', options: ['gọi – đáp', 'tình thái', 'phụ chú', 'chủ ngữ'], answer: 0, explain: 'Lời gọi.' },
    { type: 'mcq', q: 'Thành phần phụ chú thường được đặt:', options: ['giữa hai dấu gạch ngang, hai dấu phẩy hoặc trong ngoặc đơn', 'ở cuối đoạn văn', 'trong dấu chấm hỏi', 'sau dấu chấm than'], answer: 0, explain: 'Dấu hiệu hình thức của phụ chú.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Chao ôi” trong câu “Chao ôi, cảnh đẹp quá!” là thành phần tình thái.', answer: false, explain: 'Đó là thành phần cảm thán.' },
    { type: 'short', q: 'Trong câu “Thưa cô, em đọc rồi ạ.”, thành phần gọi – đáp là từ ngữ nào?', answer: ['thưa cô', 'thua co'], answerText: 'Thưa cô', explain: 'Lời đáp lễ phép.' },
    { type: 'mcq', q: 'Trong văn nghị luận, cụm từ nào là thành phần tình thái giúp thể hiện ý kiến cá nhân?', options: ['Theo em', 'Nguyễn Khuyến', 'bài thơ', 'mùa thu'], answer: 0, explain: '“Theo em” nêu nguồn ý kiến.' }
  ]
});
})();
