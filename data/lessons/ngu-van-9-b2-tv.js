/* Ngữ văn 9 – Bài 2. Thực hành tiếng Việt: Biện pháp tu từ chơi chữ; điệp thanh, điệp vần. Ngữ liệu: ca dao, câu đố – vế đối dân gian (văn học dân gian), thơ Nguyễn Khuyến và Nguyễn Du (thuộc phạm vi công cộng), câu văn do nhóm biên soạn tự đặt. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b2-tv', {
  objectives: [
    'Nhận biết được biện pháp tu từ chơi chữ và các lối chơi chữ thường gặp (đồng âm, nói lái, dùng từ trái nghĩa, dùng từ cùng trường nghĩa, điệp âm).',
    'Nhận biết được biện pháp điệp thanh (lặp thanh bằng hoặc thanh trắc) và điệp vần; phân tích được tác dụng trong văn bản.',
    'Vận dụng được chơi chữ, điệp thanh, điệp vần khi viết, nói một cách phù hợp, có văn hoá.'
  ],
  intro: '“Bà già đi chợ Cầu Đông…” – chỉ một chữ “lợi” mà khiến người nghe bật cười. Tiếng Việt giàu âm thanh, nhiều từ đồng âm, nên người Việt rất giỏi “chơi chữ”. Bài học này còn giúp em nghe ra “nhạc” của câu thơ qua điệp thanh, điệp vần.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) <i>Trăng bao nhiêu tuổi trăng già, / Núi bao nhiêu tuổi gọi là núi non?</i> (ca dao)</p>
<p>(2) <i>Bà già đi chợ Cầu Đông, / Bói xem một quẻ lấy chồng lợi chăng? / Thầy bói xem quẻ nói rằng: / Lợi thì có lợi nhưng răng chẳng còn.</i> (ca dao)</p>
<p>(3) <i>Con cá đối nằm trên cối đá.</i> (vế đối dân gian)</p>
<p>(4) <i>Ruồi đậu mâm xôi đậu, kiến bò đĩa thịt bò.</i> (câu đối dân gian)</p>
<p>(5) <i>Ao thu lạnh lẽo nước trong veo, / Một chiếc thuyền câu bé tẻo teo.</i> (Nguyễn Khuyến, “Thu điếu”)</p>
<p>(6) <i>Lơ thơ tơ liễu buông mành.</i> (Nguyễn Du, “Truyện Kiều”)</p>
<p>(7) Đêm đông mưa rơi trên hiên nhà. &nbsp;(8) Sóng vỗ đá, sấm dội, bão giật mạnh. <i>(câu do nhóm biên soạn đặt)</i></p>`,
    source: '(1), (2) ca dao; (3), (4) vế đối, câu đối dân gian (văn học dân gian). (5) Nguyễn Khuyến (1835 – 1909), (6) Nguyễn Du (1765 – 1820), bài “Khóc Tổng Cóc” của Hồ Xuân Hương trích trong bước 2 – thuộc phạm vi công cộng. (7), (8) câu do nhóm biên soạn tự đặt.'
  },
  steps: [
    { title: 'Chơi chữ là gì?', html: `<p><b>Chơi chữ</b> là biện pháp tu từ lợi dụng đặc sắc về <b>âm, nghĩa</b> của từ ngữ để tạo sắc thái dí dỏm, hài hước hoặc làm câu văn hàm súc, gây bất ngờ, thú vị.</p>
      <p>Chơi chữ xuất hiện nhiều trong ca dao, câu đố, câu đối, thơ trào phúng và cả lời nói hằng ngày.</p>` },
    { title: 'Các lối chơi chữ thường gặp', html: `<table class="tbl"><tr><th>Lối chơi chữ</th><th>Ví dụ</th><th>Giải thích</th></tr>
      <tr><td>Dùng từ đồng âm</td><td>(2) “lợi”; (4) “đậu”, “bò”</td><td>“lợi” (có lợi) – “lợi” (nướu răng); “đậu” (động từ) – “đậu” (hạt đậu)</td></tr>
      <tr><td>Dùng từ trái nghĩa, đồng âm</td><td>(1) “già” – “non”</td><td>“non” là núi, đồng âm với “non” (trẻ) – đối lập “già”</td></tr>
      <tr><td>Nói lái</td><td>(3) “cá đối” – “cối đá”</td><td>Đảo phụ âm đầu/vần: cá đối → cối đá</td></tr>
      <tr><td>Dùng từ cùng trường nghĩa</td><td>“Chàng Cóc ơi! Chàng Cóc ơi! / Thiếp <i>bén</i> duyên chàng có thế thôi. / <i>Nòng nọc</i> đứt đuôi từ đây nhé, / Nghìn vàng khôn <i>chuộc</i> dấu bôi vôi.” (Hồ Xuân Hương)</td><td>Cài tên các loài họ ếch nhái (cóc, bén, nòng nọc, chẫu chuộc) vào lời thơ, vừa than vừa đùa</td></tr>
      <tr><td>Điệp âm</td><td>(6) “Lơ thơ tơ”</td><td>Lặp lại âm, vần tạo nhạc tính</td></tr></table>`,
      svg: S.mindmap({ center: 'Lối chơi chữ', branches: [{ title: 'Đồng âm', items: ['lợi – lợi', 'đậu, bò'] }, { title: 'Trái nghĩa', items: ['già – non', 'bất ngờ, dí dỏm'] }, { title: 'Nói lái', items: ['cá đối – cối đá', 'đảo âm, vần'] }, { title: 'Trường nghĩa, điệp âm', items: ['cóc, bén, nòng nọc', '“Lơ thơ tơ”'] }] }),
      caption: 'Sơ đồ các lối chơi chữ thường gặp.' },
    { title: 'Điệp thanh', html: `<p><b>Điệp thanh</b> là lặp lại các tiếng cùng thanh (cùng <b>bằng</b> hoặc cùng <b>trắc</b>) để tạo âm hưởng, nhịp điệu, gợi cảm xúc.</p>
      <ul><li>Câu (7) “Đêm đông mưa rơi trên hiên nhà”: 7/7 tiếng thanh bằng → âm điệu êm, kéo dài, gợi nỗi buồn đều đều.</li>
      <li>Câu (8) “Sóng vỗ đá, sấm dội, bão giật mạnh”: toàn thanh trắc → âm điệu gắt, dồn dập, gợi sự dữ dội.</li></ul>` },
    { title: 'Điệp vần', html: `<p><b>Điệp vần</b> là lặp lại những tiếng có vần giống nhau hoặc gần nhau để tạo nhạc tính, tăng sức gợi.</p>
      <ul><li>(5) “trong <b>veo</b>… bé t<b>eo</b> t<b>eo</b>” (và “lạnh l<b>ẽo</b>”): vần “eo” lặp lại gợi cảm giác thu nhỏ, co lại, tĩnh lặng của cảnh thu.</li>
      <li>(6) “L<b>ơ</b> th<b>ơ</b> t<b>ơ</b>”: vần “ơ” lặp lại gợi sự thưa thớt, mềm mại của tơ liễu, nhuốm buồn.</li></ul>
      <div class="box key">Điệp thanh, điệp vần là “nhạc” của câu thơ: cần đọc to để cảm nhận.</div>` },
    { title: 'Sử dụng phù hợp', html: `<ul><li>Chơi chữ tạo tiếng cười, sự thông minh, nhưng không dùng để chế giễu, xúc phạm người khác.</li>
      <li>Trong văn bản trang trọng (đơn từ, văn bản hành chính), hạn chế chơi chữ để tránh hiểu lầm.</li>
      <li>Khi phân tích: gọi tên biện pháp → chỉ ra từ ngữ → giải thích cơ chế (đồng âm, nói lái…) → nêu tác dụng.</li></ul>` }
  ],
  summary: 'Chơi chữ lợi dụng đặc sắc về âm, nghĩa của từ (đồng âm, gần âm, nói lái, trái nghĩa, cùng trường nghĩa, điệp âm) để tạo sắc thái dí dỏm hoặc hàm súc. Điệp thanh lặp lại thanh bằng hoặc thanh trắc; điệp vần lặp lại tiếng cùng vần – cả hai tạo nhạc tính, gợi cảm xúc. Khi phân tích: gọi tên – chỉ từ ngữ – giải thích – nêu tác dụng.',
  examples: [
    { title: 'Phân tích chơi chữ đồng âm', problem: 'Chỉ ra và phân tích lối chơi chữ trong bài ca dao (2).', solution: 'Từ “lợi” được dùng hai nghĩa: “lợi chăng?” – có lợi, có tốt không (lấy chồng có tốt không); “Lợi thì có lợi nhưng răng chẳng còn” – “lợi” là phần thịt bao quanh chân răng. Thầy bói trả lời nước đôi, vừa đáp câu hỏi vừa ngầm chê bà già đã rụng hết răng mà còn muốn lấy chồng. Lối chơi chữ đồng âm tạo tiếng cười hóm hỉnh, nhẹ nhàng.' },
    { title: 'Nói lái', problem: 'Giải thích lối chơi chữ trong vế (3).', solution: '“Cá đối” nói lái thành “cối đá” (đổi vần của hai tiếng: cá + đối → cối + đá). Vế đối vừa tả một cảnh lạ (con cá đối nằm trên cối đá), vừa chứa phép nói lái khiến người đối khó tìm vế tương ứng – thể hiện sự thông minh, dí dỏm của dân gian.' },
    { title: 'Tác dụng của điệp vần', problem: 'Phân tích điệp vần trong hai câu thơ (5).', solution: 'Vần “eo” lặp lại ở “veo”, “tẻo teo” (cùng vần gần “lẽo”). Đây là vần hẹp, gợi cảm giác nhỏ bé, thu lại, tĩnh lặng. Nhờ đó, cảnh thu làng quê Bắc Bộ hiện lên trong trẻo, vắng lặng: ao nhỏ, nước trong, chiếc thuyền câu “bé tẻo teo” – đồng thời gợi tâm trạng cô quạnh của nhà thơ.' }
  ],
  exercises: [
    { question: 'Chỉ ra lối chơi chữ trong câu (4) “Ruồi đậu mâm xôi đậu, kiến bò đĩa thịt bò.”', hints: ['Tìm hai từ được lặp lại.', 'Mỗi từ có mấy nghĩa?'], solution: 'Chơi chữ bằng từ đồng âm: “đậu” (động từ: con ruồi đậu) – “đậu” (danh từ: xôi đậu); “bò” (động từ: con kiến bò) – “bò” (danh từ: thịt bò). Câu đối vừa tả cảnh thật, vừa tạo sự thú vị nhờ các từ đồng âm đặt đối xứng.' },
    { question: 'Tìm một câu thơ/câu văn có điệp thanh bằng và một câu có điệp thanh trắc (có thể tự đặt), nêu tác dụng.', hints: ['Kiểm tra từng tiếng: không dấu, dấu huyền là bằng; sắc, hỏi, ngã, nặng là trắc.', 'Thanh bằng gợi êm, nhẹ; thanh trắc gợi mạnh, gắt.'], solution: 'Bằng: “Chiều thu sương buông trên sông quê” (toàn thanh bằng) – gợi không gian êm ả, mơ màng, man mác buồn. Trắc: “Gió rít, lá đổ, cửa sổ vỡ” (toàn trắc) – gợi cơn bão dữ dội, dồn dập, căng thẳng.' },
    { question: 'Viết đoạn văn (5 – 7 câu) giới thiệu một câu đố hoặc bài ca dao có chơi chữ mà em biết, phân tích tác dụng.', hints: ['Có thể dùng câu đố về các con vật, đồ vật.', 'Nêu cơ chế chơi chữ và hiệu quả.'], solution: 'Ví dụ: Ca dao có câu “Trăng bao nhiêu tuổi trăng già / Núi bao nhiêu tuổi gọi là núi non?”. Câu hỏi nghe ngây thơ nhưng chứa một lối chơi chữ thông minh. Chữ “non” vừa có nghĩa là núi (“núi non”), vừa đồng âm với “non” nghĩa là trẻ, đối lập với “già” ở câu trên. Người nghe bất ngờ khi nhận ra cặp “già – non” ẩn trong hai hình ảnh thiên nhiên quen thuộc. Nhờ chơi chữ, bài ca dao trở nên dí dỏm, dễ nhớ và thể hiện trí tuệ, óc hài hước của người lao động.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Trong bài ca dao “Bà già đi chợ Cầu Đông…”, từ nào được dùng để chơi chữ?', options: ['lợi', 'chợ', 'quẻ', 'chồng'], answer: 0, explain: '“lợi” – có lợi / lợi răng.' },
    { type: 'mcq', q: '“Con cá đối nằm trên cối đá” chơi chữ theo lối:', options: ['nói lái', 'dùng từ trái nghĩa', 'dùng từ đồng nghĩa', 'điệp thanh'], answer: 0, explain: 'cá đối ↔ cối đá.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Đêm đông mưa rơi trên hiên nhà” sử dụng điệp thanh bằng.', answer: true, explain: 'Cả 7 tiếng đều thanh bằng.' },
    { type: 'short', q: 'Trong câu “Ao thu lạnh lẽo nước trong veo, / Một chiếc thuyền câu bé tẻo teo.”, vần nào được lặp lại?', answer: ['eo', 'vần eo'], answerText: 'vần “eo”', explain: 'veo – tẻo – teo.' },
    { type: 'mcq', q: 'Từ “non” trong “Núi bao nhiêu tuổi gọi là núi non?” tạo chơi chữ vì:', options: ['đồng âm với “non” (trẻ), đối lập “già”', 'là từ láy', 'là từ Hán Việt', 'là từ địa phương'], answer: 0, explain: 'Đồng âm, trái nghĩa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng nhiều lối chơi chữ trong đơn xin phép gửi thầy cô.', answer: false, explain: 'Văn bản trang trọng hạn chế chơi chữ.' },
    { type: 'short', q: 'Biện pháp lặp lại các tiếng cùng thanh bằng hoặc cùng thanh trắc gọi là gì (“điệp …”)?', answer: ['điệp thanh', 'thanh', 'diep thanh'], answerText: 'điệp thanh', explain: 'Tạo âm hưởng, nhịp điệu.' },
    { type: 'mcq', q: 'Câu toàn thanh trắc thường gợi:', options: ['sự mạnh mẽ, dồn dập, gắt gao', 'sự êm ả, nhẹ nhàng', 'sự vui tươi, nhí nhảnh', 'không gợi gì'], answer: 0, explain: 'Thanh trắc gợi âm điệu gắt.' }
  ]
});
})();
