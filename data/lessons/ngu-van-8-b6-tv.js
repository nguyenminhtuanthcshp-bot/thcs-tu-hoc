/* Ngữ văn 8 – Bài 6. Thực hành tiếng Việt: Trợ từ và thán từ. Ngữ liệu: truyện ngắn “Cái bơm xe của ông Sáu”, ca dao và câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b6-tv', {
  objectives: [
    'Nhận biết được trợ từ (đi kèm từ ngữ để nhấn mạnh, biểu thị thái độ; đứng đầu hoặc cuối câu) và thán từ (bộc lộ cảm xúc, gọi – đáp).',
    'Phân tích được tác dụng của trợ từ, thán từ trong văn bản và trong giao tiếp.',
    'Sử dụng trợ từ, thán từ phù hợp với đối tượng, hoàn cảnh giao tiếp.'
  ],
  intro: 'So sánh hai câu: “Nó ăn hai bát cơm.” và “Nó ăn những hai bát cơm.” Chỉ thêm một từ “những”, người nghe đã hiểu người nói cho rằng hai bát là nhiều. Những từ nhỏ như “những, chính, ngay, à, nhé, ôi, vâng…” có sức mạnh không nhỏ trong câu.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) “Đi đi cháu, kẻo muộn!” – “Cháu cứ đi thi cho tốt. Học giỏi là trả cho ông rồi.” <i>(Truyện “Cái bơm xe của ông Sáu”)</i></p>
<p>(2) Chính ông Sáu đã sửa xe cho tôi ngay giữa trời mưa. Ông sửa chỉ mất có năm phút.</p>
<p>(3) Ôi, chiếc bơm cũ ấy mới đẹp làm sao! – Này, cậu có biết ông Sáu từng là bộ đội không? – Vâng, cháu cảm ơn ông ạ.</p>
<p>(4) <i>Ai ơi chớ bỏ ruộng hoang / Bao nhiêu tấc đất tấc vàng bấy nhiêu.</i> <i>(Ca dao)</i></p>`,
    source: '(1) Trích truyện ngắn do nhóm biên soạn tự viết. (2), (3) Câu văn do nhóm biên soạn tự viết. (4) Ca dao (văn học dân gian).'
  },
  steps: [
    { title: 'Trợ từ', html: `<p><b>Trợ từ</b> là những từ đi kèm các từ ngữ khác trong câu để <b>nhấn mạnh</b> hoặc <b>biểu thị thái độ, đánh giá</b> của người nói về sự vật, sự việc được nói đến. Có hai nhóm:</p>
      <table class="tbl"><tr><th>Nhóm</th><th>Ví dụ</th><th>Tác dụng</th></tr>
      <tr><td>Đi kèm một từ ngữ trong câu</td><td>những, cái, có, chính, đích, ngay, cả, đến, là…</td><td>“Chính ông Sáu” – nhấn mạnh đối tượng; “những hai bát” – cho là nhiều; “chỉ mất có năm phút” – cho là ít</td></tr>
      <tr><td>Đứng đầu hoặc cuối câu</td><td>à, ư, nhỉ, nhé, chứ, đâu, đấy, cơ mà…</td><td>Tạo câu hỏi (“Cậu đi à?”), câu cầu khiến (“Đi nhé!”), thể hiện sắc thái tình cảm</td></tr></table>` },
    { title: 'Thán từ', html: `<p><b>Thán từ</b> là những từ dùng để <b>bộc lộ cảm xúc</b> hoặc để <b>gọi – đáp</b>:</p>
      <ul><li>Bộc lộ cảm xúc: <i>ôi, than ôi, trời ơi, chao ôi, ái chà, ô hay, eo ơi…</i> (“<b>Ôi</b>, chiếc bơm cũ ấy mới đẹp làm sao!”)</li>
      <li>Gọi – đáp: <i>này, ơi, hỡi, vâng, dạ, ừ…</i> (“<b>Này</b>, cậu có biết…?”, “<b>Vâng</b>, cháu cảm ơn ông ạ.”, “<b>Ai ơi</b>…”)</li></ul>
      <p>Thán từ thường đứng đầu câu, có thể tách ra thành một câu đặc biệt (“Trời ơi!”) hoặc làm thành phần biệt lập trong câu.</p>`,
      svg: S.mindmap({ center: 'Từ “nhỏ” trong câu', branches: [{ title: 'Trợ từ đi kèm từ ngữ', items: ['những, chính, ngay', 'có, cả, đến'] }, { title: 'Trợ từ đầu/cuối câu', items: ['à, ư, nhỉ', 'nhé, chứ, đấy'] }, { title: 'Thán từ cảm xúc', items: ['ôi, trời ơi', 'chao ôi, ái chà'] }, { title: 'Thán từ gọi – đáp', items: ['này, ơi, hỡi', 'vâng, dạ, ừ'] }] }),
      caption: 'Phân loại trợ từ và thán từ.' },
    { title: 'Phân tích tác dụng trong ngữ liệu', html: `<ul><li>(1) “cứ” trong “Cháu cứ đi thi” thể hiện sự trấn an, khuyến khích; “là” trong “Học giỏi là trả cho ông rồi” nhấn mạnh điều ông coi là “món quà”.</li>
      <li>(2) “Chính” nhấn mạnh ông Sáu – không phải ai khác; “ngay” nhấn mạnh hoàn cảnh khó khăn (giữa trời mưa); “có” cho thấy người nói đánh giá năm phút là rất nhanh.</li>
      <li>(3) “Ôi” bộc lộ sự xúc động, ngưỡng mộ; “Này” dùng để gọi, thu hút sự chú ý; “Vâng” để đáp lời lễ phép.</li>
      <li>(4) “ơi” trong “Ai ơi” là thán từ gọi, tạo giọng tâm tình, nhắn nhủ của ca dao.</li></ul>` },
    { title: 'Sử dụng trợ từ, thán từ phù hợp', html: `<ul><li>Với người trên dùng “<b>vâng, dạ</b>”, kèm trợ từ “<b>ạ</b>” cuối câu; với bạn bè có thể dùng “<b>ừ</b>, <b>nhé</b>, <b>nhỉ</b>”.</li><li>Trong văn bản trang trọng (đơn, báo cáo, văn nghị luận) hạn chế thán từ và trợ từ mang tính khẩu ngữ (à, ư, cơ mà…).</li><li>Không lạm dụng: quá nhiều “ôi, trời ơi” khiến lời văn cường điệu, thiếu chân thành.</li></ul>
      <div class="box key">Cách nêu tác dụng: “Trợ từ/thán từ … → nhấn mạnh …/bộc lộ cảm xúc … → thể hiện thái độ … của người nói.”</div>` }
  ],
  summary: 'Trợ từ đi kèm từ ngữ khác để nhấn mạnh hoặc biểu thị thái độ, đánh giá (những, chính, ngay, có, cả…), hoặc đứng đầu/cuối câu để tạo kiểu câu và sắc thái tình cảm (à, ư, nhỉ, nhé, chứ…). Thán từ dùng để bộc lộ cảm xúc (ôi, trời ơi, chao ôi…) hoặc gọi – đáp (này, ơi, vâng, dạ…). Cần dùng trợ từ, thán từ phù hợp với đối tượng và hoàn cảnh giao tiếp.',
  examples: [
    { title: 'Nhận diện trợ từ', problem: 'Tìm trợ từ và nêu tác dụng: “Bài toán khó thế mà Lan giải mất có năm phút.”', solution: 'Trợ từ “có” đi kèm cụm “năm phút”, cho thấy người nói đánh giá khoảng thời gian ấy là rất ngắn; qua đó ngầm khen Lan giỏi, nhanh nhẹn.' },
    { title: 'So sánh câu có và không có trợ từ', problem: 'So sánh: (a) “Nó đọc ba cuốn sách.” (b) “Nó đọc những ba cuốn sách.” (c) “Nó đọc có ba cuốn sách.”', solution: '(a) chỉ thông báo khách quan. (b) có trợ từ “những” – người nói cho rằng ba cuốn là nhiều (ngạc nhiên, khen). (c) có trợ từ “có” – người nói cho rằng ba cuốn là ít (chê, tiếc). Trợ từ thể hiện thái độ đánh giá của người nói.' },
    { title: 'Phân loại thán từ', problem: 'Phân loại thán từ: “Trời ơi, muộn mất rồi!”, “Dạ, con về rồi ạ.”, “Chao ôi, cảnh đẹp quá!”, “Ơi, mẹ đây!”', solution: 'Bộc lộ cảm xúc: “Trời ơi” (lo lắng, hốt hoảng), “Chao ôi” (ngạc nhiên, thích thú). Gọi – đáp: “Dạ” (đáp lễ phép), “Ơi” (đáp lời gọi).' }
  ],
  exercises: [
    { question: 'Tìm trợ từ trong các câu sau và cho biết tác dụng: (a) “Đích thị cậu ấy là người nhặt được ví.” (b) “Ngay cả thầy hiệu trưởng cũng tham gia trồng cây.”', hints: ['Tìm từ đi kèm để nhấn mạnh.', '“Đích thị”, “ngay”, “cả” nhấn mạnh điều gì?'], solution: '(a) “Đích thị” nhấn mạnh, khẳng định chắc chắn người nhặt được ví chính là cậu ấy. (b) “Ngay”, “cả” nhấn mạnh sự việc vượt quá mong đợi: đến thầy hiệu trưởng cũng tham gia, cho thấy phong trào rất sôi nổi.' },
    { question: 'Đặt ba câu: một câu có trợ từ cuối câu tạo câu hỏi, một câu có thán từ bộc lộ cảm xúc, một câu có thán từ gọi – đáp.', hints: ['Trợ từ tạo câu hỏi: à, ư, nhỉ, hả…', 'Thán từ: ôi, trời ơi / này, vâng, dạ…'], solution: 'Ví dụ: (1) “Mai lớp mình đi tham quan à?” (trợ từ “à”). (2) “Ôi, bông hoa này thơm quá!” (thán từ cảm xúc “Ôi”). (3) “Vâng, con xin phép mẹ đi học ạ.” (thán từ đáp “Vâng”).' },
    { question: 'Viết đoạn văn (5 – 6 câu) kể lại một kỉ niệm được giúp đỡ, có dùng ít nhất hai trợ từ và hai thán từ; gạch chân các từ đó.', hints: ['Có thể viết đoạn đối thoại xen lời kể.', 'Dùng “chính, ngay, những…” và “ôi, vâng, này…”.'], solution: 'Ví dụ: Hôm ấy, tôi làm rơi <u>cả</u> chồng sách xuống vũng nước. “<u>Trời ơi</u>!” – tôi kêu lên. <u>Chính</u> bạn Hà, người tôi ít nói chuyện nhất lớp, đã chạy tới nhặt giúp. “<u>Này</u>, cậu cầm lấy khăn mà lau.” – Hà nói. Chúng tôi lau khô <u>những</u> mười cuốn sách. Từ hôm đó, tôi và Hà trở thành đôi bạn thân.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Từ nào là thán từ bộc lộ cảm xúc?', options: ['chao ôi', 'chính', 'những', 'nhé'], answer: 0, explain: '“Chao ôi” bộc lộ cảm xúc.' },
    { type: 'mcq', q: 'Trong câu “Nó ăn những hai bát cơm”, trợ từ “những” biểu thị:', options: ['người nói cho là nhiều', 'người nói cho là ít', 'câu hỏi', 'lời gọi'], answer: 0, explain: '“Những” nhấn mạnh số lượng nhiều.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Vâng”, “dạ”, “ừ” là thán từ dùng để gọi – đáp.', answer: true, explain: 'Nhóm thán từ gọi – đáp.' },
    { type: 'short', q: 'Trong câu “Chính ông Sáu đã sửa xe cho tôi”, trợ từ nào nhấn mạnh đối tượng?', answer: ['chính'], answerText: 'chính', explain: '“Chính” nhấn mạnh ông Sáu.' },
    { type: 'mcq', q: 'Trợ từ nào thường đứng cuối câu để tạo câu hỏi?', options: ['à', 'chính', 'ngay', 'những'], answer: 0, explain: '“Cậu đi à?”' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng nhiều thán từ như “trời ơi, ôi” trong đơn xin phép gửi thầy cô.', answer: false, explain: 'Văn bản trang trọng hạn chế thán từ.' },
    { type: 'short', q: 'Trong câu ca dao “Ai ơi chớ bỏ ruộng hoang”, thán từ gọi là từ nào?', answer: ['ơi', 'oi'], answerText: 'ơi', explain: '“Ai ơi” – thán từ gọi.' },
    { type: 'mcq', q: 'Câu nào dùng thán từ phù hợp khi đáp lời thầy giáo?', options: ['“Vâng, em hiểu rồi ạ.”', '“Ừ, biết rồi.”', '“Ơ hay, sao thế?”', '“Này, thầy ơi.”'], answer: 0, explain: 'Lễ phép với người trên.' }
  ]
});
})();
