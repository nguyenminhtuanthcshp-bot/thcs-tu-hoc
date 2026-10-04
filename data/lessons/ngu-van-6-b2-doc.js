/* Ngữ văn 6 – Bài 2. Đọc hiểu: Thơ có yếu tố tự sự và miêu tả. Bài thơ đọc là sáng tác của nhóm biên soạn. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b2-doc', {
  objectives: [
    'Nhận biết được bài thơ có yếu tố tự sự (kể sự việc) và yếu tố miêu tả (tả cảnh, tả người).',
    'Nhận biết được số tiếng, vần, nhịp của bài thơ năm chữ.',
    'Hiểu được tác dụng của yếu tố tự sự, miêu tả trong việc thể hiện tình cảm của người viết.',
    'Cảm nhận được tình cảm gia đình được gửi gắm qua bài thơ.'
  ],
  intro: 'Có những bài thơ như một câu chuyện nhỏ: có nhân vật, có sự việc, có cảnh vật, và khép lại bằng một cảm xúc thật ấm áp. Hãy đọc bài thơ “Chiếc ô của mẹ”.',
  text: {
    title: 'Chiếc ô của mẹ',
    html: `<div class="poem">Chiều nay mưa tầm tã
Cổng trường ướt mênh mang
Em đứng nép hiên vắng
Ngóng về phía đầu làng.

Bỗng thấy chiếc ô xanh
Nghiêng nghiêng qua hàng sấu
Mẹ đi như chạy vội
Áo mẹ ướt một màu.

Mẹ che ô cho em
Tay mẹ lạnh, mắt cười:
“Con đói chưa, về nhé,
Bếp nhà còn lửa vui.”

Đường về trơn và dài
Ô nhỏ mà mưa lớn
Ô nghiêng hết về em
Vai mẹ ướt từng cơn.

Giờ em đã lớn khôn
Mỗi chiều mưa giăng lối
Lại thấy chiếc ô xanh
Nghiêng về em không mỏi.</div>`,
    source: 'Bài thơ do nhóm biên soạn sáng tác để minh hoạ (không trích từ sách giáo khoa).'
  },
  steps: [
    { title: 'Thể thơ, vần và nhịp', html: `<ul><li>Bài thơ viết theo thể <b>thơ năm chữ</b>: mỗi dòng 5 tiếng, chia khổ bốn dòng.</li><li><b>Vần</b> thường gieo ở cuối dòng 2 và dòng 4 của mỗi khổ: <i>mang – làng</i>, <i>sấu – màu</i>, <i>lớn – cơn</i>.</li><li><b>Nhịp</b> phổ biến 2/3 hoặc 3/2: “Chiều nay / mưa tầm tã”, “Ô nghiêng / hết về em”.</li></ul>` },
    { title: 'Yếu tố tự sự', html: `<p><b>Yếu tố tự sự</b> trong thơ là việc kể lại <b>sự việc</b> có nhân vật, có diễn biến. Bài thơ kể một câu chuyện nhỏ theo trình tự:</p>`,
      svg: S.flow({ items: ['Mưa to, em đứng chờ ở cổng trường', 'Mẹ vội vã đến đón', 'Mẹ che ô, hỏi han con', 'Trên đường về, ô nghiêng hết về em', 'Em lớn lên vẫn nhớ mãi'], size: 15 }),
      caption: 'Chuỗi sự việc được kể trong bài thơ.' },
    { title: 'Yếu tố miêu tả', html: `<p><b>Yếu tố miêu tả</b> giúp người đọc “nhìn thấy” cảnh và người:</p>
      <table class="tbl"><tr><th>Đối tượng</th><th>Từ ngữ, hình ảnh miêu tả</th></tr><tr><td>Cảnh mưa</td><td>“mưa tầm tã”, “cổng trường ướt mênh mang”, “đường về trơn và dài”</td></tr><tr><td>Hình ảnh người mẹ</td><td>“đi như chạy vội”, “áo mẹ ướt một màu”, “tay mẹ lạnh, mắt cười”, “vai mẹ ướt từng cơn”</td></tr><tr><td>Chiếc ô</td><td>“chiếc ô xanh / nghiêng nghiêng”, “ô nhỏ mà mưa lớn”</td></tr></table>` },
    { title: 'Tự sự, miêu tả để biểu cảm', html: `<p>Kể và tả không nhằm để kể và tả, mà để <b>bộc lộ cảm xúc</b>. Sự đối lập “ô nhỏ – mưa lớn”, “em khô – vai mẹ ướt” làm nổi bật <b>sự hi sinh thầm lặng</b> của mẹ và <b>lòng biết ơn</b> của người con.</p>
      <p>Khổ cuối chuyển từ kể chuyện sang suy ngẫm: “chiếc ô xanh” không còn chỉ là một đồ vật mà trở thành <b>hình ảnh tượng trưng</b> cho tình thương che chở của mẹ.</p>` },
    { title: 'Cách đọc một bài thơ có yếu tố tự sự, miêu tả', html: `<ol><li>Đọc to, chú ý vần, nhịp.</li><li>Tóm tắt câu chuyện được kể (ai, làm gì, diễn biến ra sao).</li><li>Tìm từ ngữ, hình ảnh miêu tả nổi bật.</li><li>Tìm những chi tiết bộc lộ cảm xúc; nêu thông điệp của bài thơ.</li></ol>` }
  ],
  summary: 'Thơ có yếu tố tự sự kể lại sự việc có nhân vật, diễn biến; yếu tố miêu tả khắc hoạ cảnh và người. Cả hai cùng giúp nhà thơ bộc lộ cảm xúc. “Chiếc ô của mẹ” là bài thơ năm chữ kể chuyện mẹ đón con trong mưa, ca ngợi tình mẹ.',
  examples: [
    { title: 'Tìm vần', problem: 'Chỉ ra các tiếng hiệp vần trong khổ thơ thứ hai.', solution: 'Tiếng cuối dòng 2 và dòng 4: <b>sấu – màu</b> (cùng vần “âu/au”).' },
    { title: 'Chi tiết miêu tả', problem: 'Chi tiết “Tay mẹ lạnh, mắt cười” cho thấy điều gì về người mẹ?', solution: '“Tay mẹ lạnh” cho thấy mẹ đã đi trong mưa rét vất vả; “mắt cười” cho thấy mẹ vẫn vui vẻ, giấu mệt nhọc để con yên lòng. Chi tiết thể hiện tình yêu thương, sự hi sinh của mẹ.' },
    { title: 'Ý nghĩa hình ảnh', problem: 'Vì sao ở khổ cuối, người con “lại thấy chiếc ô xanh” dù đã lớn khôn?', solution: 'Đó là hình ảnh trong kí ức và trong tâm hồn: tình thương của mẹ luôn che chở con suốt cuộc đời. Chiếc ô trở thành biểu tượng của tình mẹ.' }
  ],
  exercises: [
    { question: 'Tìm hai hình ảnh đối lập trong khổ thơ thứ tư và nêu tác dụng.', hints: ['Chú ý các cặp: nhỏ – lớn; em – mẹ.', 'Sự đối lập làm nổi bật điều gì ở người mẹ?'], solution: '“Ô nhỏ – mưa lớn”; “ô nghiêng hết về em – vai mẹ ướt”. Đối lập làm nổi bật sự hi sinh thầm lặng của mẹ: mẹ chịu ướt để con được khô.' },
    { question: 'Tóm tắt câu chuyện được kể trong bài thơ bằng 2–3 câu.', hints: ['Nêu nhân vật, hoàn cảnh, sự việc chính.', 'Nhớ thêm cảm xúc ở khổ cuối.'], solution: 'Một chiều mưa to, em đứng chờ ở cổng trường. Mẹ vội vã đến đón, che ô cho con và nghiêng ô về phía con suốt đường về, dù mẹ ướt sũng. Lớn lên, người con vẫn nhớ mãi hình ảnh chiếc ô của mẹ.' },
    { question: 'Chỉ ra nhịp của dòng thơ “Mẹ đi như chạy vội” và nhận xét tác dụng của cách so sánh trong dòng thơ.', hints: ['Ngắt thành hai nhóm tiếng.', '“như chạy vội” gợi dáng đi thế nào?'], solution: 'Nhịp 2/3: “Mẹ đi / như chạy vội”. So sánh gợi dáng đi gấp gáp, lo lắng của mẹ vì sợ con chờ lâu, bị ướt.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bài thơ “Chiếc ô của mẹ” được viết theo thể thơ nào?', options: ['Lục bát', 'Thơ năm chữ', 'Thơ bảy chữ', 'Thơ tự do'], answer: 1, explain: 'Mỗi dòng có 5 tiếng.' },
    { type: 'short', q: 'Mỗi dòng của bài thơ có bao nhiêu tiếng?', answer: ['5', 'năm'], answerText: '5 tiếng', explain: 'Ví dụ: “Chiều / nay / mưa / tầm / tã” – 5 tiếng.' },
    { type: 'mcq', q: 'Yếu tố tự sự trong bài thơ thể hiện ở:', options: ['Việc kể lại chuyện mẹ đón con trong mưa', 'Việc dùng nhiều dấu chấm than', 'Việc chia khổ', 'Việc gieo vần'], answer: 0, explain: 'Tự sự là kể sự việc có nhân vật, diễn biến.' },
    { type: 'mcq', q: 'Chi tiết nào là yếu tố miêu tả?', options: ['“Con đói chưa, về nhé”', '“Áo mẹ ướt một màu”', '“Giờ em đã lớn khôn”', '“Mẹ che ô cho em”'], answer: 1, explain: 'Chi tiết tả hình ảnh người mẹ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tiếng “lớn – cơn” ở khổ thứ tư hiệp vần với nhau.', answer: true, explain: 'Cùng vần “ơn”.' },
    { type: 'mcq', q: 'Hình ảnh “ô nghiêng hết về em” thể hiện:', options: ['Mẹ cầm ô không khéo', 'Sự hi sinh, che chở của mẹ', 'Trời có gió to', 'Em thích chiếc ô'], answer: 1, explain: 'Mẹ chịu ướt để con được khô.' },
    { type: 'mcq', q: 'Ở khổ cuối, “chiếc ô xanh” trở thành:', options: ['Món quà sinh nhật', 'Biểu tượng cho tình thương che chở của mẹ', 'Một đồ vật bị mất', 'Hình ảnh cơn mưa'], answer: 1, explain: 'Hình ảnh mang ý nghĩa tượng trưng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong thơ, yếu tố tự sự và miêu tả giúp nhà thơ bộc lộ cảm xúc.', answer: true, explain: 'Kể, tả là phương tiện để biểu cảm.' }
  ]
});
})();
