/* Ngữ văn 9 – Bài 8. Thực hành tiếng Việt: Tên viết tắt của các tổ chức quốc tế quan trọng; lựa chọn câu đơn, câu ghép, các kiểu câu ghép phù hợp. Ngữ liệu: câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b8-tv', {
  objectives: [
    'Nhận biết, hiểu nghĩa và sử dụng đúng tên viết tắt của một số tổ chức quốc tế quan trọng (UN, UNESCO, WHO, UNICEF, ASEAN, WTO, FAO, IMF…).',
    'Biết quy tắc dùng tên viết tắt trong văn bản: lần đầu ghi tên đầy đủ kèm tên viết tắt.',
    'Biết lựa chọn câu đơn hay câu ghép, kiểu câu ghép phù hợp với mục đích diễn đạt.'
  ],
  intro: 'Đọc tin tức, em thường gặp những chữ viết tắt như UNESCO, WHO, ASEAN. Hiểu đúng chúng giúp em đọc văn bản nghị luận xã hội, văn bản thông tin chính xác hơn.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) Tổ chức Giáo dục, Khoa học và Văn hoá Liên hợp quốc (UNESCO) đã công nhận nhiều di sản của Việt Nam. Năm 2010, UNESCO ghi danh Khu trung tâm Hoàng thành Thăng Long – Hà Nội là Di sản văn hoá thế giới.</p>
<p>(2) Tổ chức Y tế Thế giới (WHO) khuyến nghị mọi người rửa tay thường xuyên để phòng bệnh.</p>
<p>(3) Việt Nam gia nhập Hiệp hội các quốc gia Đông Nam Á (ASEAN) năm 1995.</p>
<p>(4a) Chiến tranh cướp đi mái nhà. Chiến tranh cướp đi trường học. Chiến tranh cướp đi tuổi thơ.</p>
<p>(4b) Chiến tranh không chỉ cướp đi mái nhà, trường học mà còn cướp đi cả tuổi thơ của trẻ em.</p>`,
    source: 'Câu văn do nhóm biên soạn tự viết; thông tin về các tổ chức và mốc thời gian là kiến thức phổ thông.'
  },
  steps: [
    { title: 'Tên viết tắt của một số tổ chức quốc tế', html: `<table class="tbl"><tr><th>Viết tắt</th><th>Tên tiếng Anh</th><th>Tên tiếng Việt</th></tr>
      <tr><td>UN (LHQ)</td><td>United Nations</td><td>Liên hợp quốc</td></tr>
      <tr><td>UNESCO</td><td>United Nations Educational, Scientific and Cultural Organization</td><td>Tổ chức Giáo dục, Khoa học và Văn hoá Liên hợp quốc</td></tr>
      <tr><td>UNICEF</td><td>United Nations Children’s Fund</td><td>Quỹ Nhi đồng Liên hợp quốc</td></tr>
      <tr><td>WHO</td><td>World Health Organization</td><td>Tổ chức Y tế Thế giới</td></tr>
      <tr><td>FAO</td><td>Food and Agriculture Organization</td><td>Tổ chức Lương thực và Nông nghiệp Liên hợp quốc</td></tr>
      <tr><td>WTO</td><td>World Trade Organization</td><td>Tổ chức Thương mại Thế giới</td></tr>
      <tr><td>IMF</td><td>International Monetary Fund</td><td>Quỹ Tiền tệ Quốc tế</td></tr>
      <tr><td>ASEAN</td><td>Association of Southeast Asian Nations</td><td>Hiệp hội các quốc gia Đông Nam Á</td></tr></table>`,
      svg: S.mindmap({ center: 'Tổ chức quốc tế', branches: [{ title: 'Liên hợp quốc', items: ['UN', 'UNESCO, UNICEF'] }, { title: 'Y tế, lương thực', items: ['WHO', 'FAO'] }, { title: 'Kinh tế', items: ['WTO', 'IMF'] }, { title: 'Khu vực', items: ['ASEAN', 'Đông Nam Á'] }] }),
      caption: 'Nhóm các tổ chức theo lĩnh vực.' },
    { title: 'Quy tắc dùng tên viết tắt', html: `<ul><li>Lần đầu xuất hiện: ghi <b>tên đầy đủ</b>, tên viết tắt đặt <b>trong ngoặc đơn</b> – như câu (1), (2), (3).</li>
      <li>Những lần sau: dùng tên viết tắt (câu (1): “Năm 2010, UNESCO ghi danh…”).</li>
      <li>Viết hoa đúng, không tự đặt tên viết tắt tuỳ tiện.</li>
      <li>Tác dụng: ngắn gọn, tránh lặp tên dài, thuận tiện khi đọc.</li></ul>` },
    { title: 'Lựa chọn câu đơn hay câu ghép', html: `<ul><li><b>Câu đơn</b> ngắn, dứt khoát: nhấn mạnh từng ý, tạo nhịp mạnh, giàu cảm xúc. (4a): điệp “Chiến tranh cướp đi…” trong ba câu đơn → nhấn mạnh sự tàn khốc.</li>
      <li><b>Câu ghép / câu có cấu trúc phức</b>: thể hiện quan hệ logic giữa các ý (nguyên nhân, điều kiện, tăng tiến…). (4b): “không chỉ… mà còn…” → quan hệ tăng tiến, gọn và chặt chẽ.</li>
      <li>Chọn kiểu câu tuỳ mục đích: nhấn mạnh cảm xúc hay trình bày lập luận.</li></ul>`,
      svg: S.flow({ w: 620, items: [{ title: 'Mục đích', text: 'Nhấn mạnh hay lập luận?' }, { title: 'Nhấn mạnh', text: 'Câu đơn ngắn, điệp' }, { title: 'Lập luận', text: 'Câu ghép có kết từ' }, { title: 'Đọc lại', text: 'Nhịp, rõ nghĩa' }] }),
      caption: 'Cách lựa chọn kiểu câu.' },
    { title: 'Vận dụng khi viết nghị luận xã hội', html: `<ul><li>Khi nêu bằng chứng liên quan đến tổ chức quốc tế, dẫn đúng tên và chỉ dùng thông tin có nguồn đáng tin cậy.</li>
      <li>Phối hợp câu: dùng câu ghép để trình bày lí lẽ (“Vì… nên…”, “Nếu… thì…”), xen câu đơn ngắn để nhấn mạnh kết luận.</li>
      <li>Ví dụ: “Nếu mỗi người đều hờ hững với nỗi đau của người khác thì hoà bình sẽ chỉ còn là khẩu hiệu. Đừng hờ hững.”</li></ul>
      <div class="box key">Câu ghép giúp lập luận chặt chẽ; câu đơn ngắn đặt đúng chỗ tạo điểm nhấn và sức lay động.</div>` }
  ],
  summary: 'Một số tên viết tắt: UN (Liên hợp quốc), UNESCO (Tổ chức Giáo dục, Khoa học và Văn hoá LHQ), UNICEF (Quỹ Nhi đồng LHQ), WHO (Tổ chức Y tế Thế giới), FAO (Tổ chức Lương thực và Nông nghiệp LHQ), WTO (Tổ chức Thương mại Thế giới), IMF (Quỹ Tiền tệ Quốc tế), ASEAN (Hiệp hội các quốc gia Đông Nam Á). Lần đầu ghi tên đầy đủ kèm viết tắt trong ngoặc đơn. Câu đơn ngắn giúp nhấn mạnh, tạo nhịp; câu ghép giúp thể hiện quan hệ logic giữa các ý.',
  examples: [
    { title: 'Quy tắc dùng tên viết tắt', problem: 'Câu (1) sử dụng tên viết tắt UNESCO như thế nào? Vì sao?', solution: 'Lần đầu ghi tên đầy đủ “Tổ chức Giáo dục, Khoa học và Văn hoá Liên hợp quốc” kèm “(UNESCO)” trong ngoặc đơn; câu sau chỉ dùng “UNESCO”. Cách làm này giúp người đọc hiểu rõ tên viết tắt, đồng thời tránh lặp lại tên dài.' },
    { title: 'So sánh hai cách diễn đạt', problem: 'So sánh hiệu quả của (4a) và (4b).', solution: '(4a) dùng ba câu đơn với phép điệp “Chiến tranh cướp đi…”, nhịp ngắn, dồn dập, nhấn mạnh từng mất mát, giàu cảm xúc – phù hợp với lời kêu gọi, văn biểu cảm. (4b) dùng cấu trúc tăng tiến “không chỉ… mà còn…”, gọn, chặt chẽ, nhấn mạnh mất mát lớn nhất là tuổi thơ – phù hợp với lập luận.' },
    { title: 'Chữa lỗi dùng tên viết tắt', problem: 'Chữa câu: “WHO đã đưa ra khuyến cáo mới” (xuất hiện lần đầu trong bài viết cho học sinh lớp 6).', solution: '“Tổ chức Y tế Thế giới (WHO) đã đưa ra khuyến cáo mới.” – lần đầu cần ghi tên đầy đủ để người đọc hiểu.' }
  ],
  exercises: [
    { question: 'Cho biết tên tiếng Việt của các tổ chức: UNICEF, FAO, WTO, IMF.', hints: ['UNICEF liên quan đến trẻ em.', 'FAO: lương thực; WTO: thương mại; IMF: tiền tệ.'], solution: 'UNICEF: Quỹ Nhi đồng Liên hợp quốc; FAO: Tổ chức Lương thực và Nông nghiệp Liên hợp quốc; WTO: Tổ chức Thương mại Thế giới; IMF: Quỹ Tiền tệ Quốc tế.' },
    { question: 'Viết 2 câu có sử dụng tên viết tắt của tổ chức quốc tế theo đúng quy tắc (lần đầu và lần sau).', hints: ['Câu 1: tên đầy đủ + (viết tắt).', 'Câu 2: chỉ viết tắt.'], solution: 'Ví dụ: Quỹ Nhi đồng Liên hợp quốc (UNICEF) hoạt động vì quyền và cuộc sống của trẻ em trên toàn thế giới. Tại Việt Nam, UNICEF hỗ trợ nhiều chương trình về dinh dưỡng, giáo dục và nước sạch.' },
    { question: 'Viết lại đoạn sau bằng các câu đơn ngắn để tăng tính biểu cảm: “Vì rác thải nhựa tràn lan nên biển ô nhiễm, cá chết và con người cũng bị ảnh hưởng.”', hints: ['Tách thành nhiều câu đơn.', 'Có thể dùng phép điệp.'], solution: 'Ví dụ: Rác thải nhựa tràn lan. Biển kêu cứu. Cá chết trắng bờ. Và rồi, chính con người cũng phải gánh chịu hậu quả.' }
  ],
  quiz: [
    { type: 'mcq', q: 'UNESCO là tên viết tắt của:', options: ['Tổ chức Giáo dục, Khoa học và Văn hoá Liên hợp quốc', 'Tổ chức Y tế Thế giới', 'Quỹ Nhi đồng Liên hợp quốc', 'Tổ chức Thương mại Thế giới'], answer: 0, explain: 'United Nations Educational, Scientific and Cultural Organization.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lần đầu dùng tên viết tắt trong văn bản nên ghi tên đầy đủ kèm tên viết tắt trong ngoặc đơn.', answer: true, explain: 'Giúp người đọc hiểu rõ.' },
    { type: 'short', q: 'Tên viết tắt của Tổ chức Y tế Thế giới là gì?', answer: ['WHO', 'who'], answerText: 'WHO', explain: 'World Health Organization.' },
    { type: 'mcq', q: 'ASEAN là:', options: ['Hiệp hội các quốc gia Đông Nam Á', 'Quỹ Tiền tệ Quốc tế', 'Liên hợp quốc', 'Tổ chức Lương thực và Nông nghiệp'], answer: 0, explain: 'Việt Nam gia nhập năm 1995.' },
    { type: 'mcq', q: 'Muốn nhấn mạnh cảm xúc, tạo nhịp dồn dập, nên ưu tiên:', options: ['các câu đơn ngắn, có phép điệp', 'một câu ghép thật dài', 'câu bị động', 'câu hỏi chính danh'], answer: 0, explain: 'Như (4a).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: UNICEF là Tổ chức Thương mại Thế giới.', answer: false, explain: 'UNICEF là Quỹ Nhi đồng Liên hợp quốc.' },
    { type: 'short', q: 'Tên viết tắt của Liên hợp quốc bằng tiếng Việt là … (ba chữ cái).', answer: ['LHQ', 'lhq'], answerText: 'LHQ', explain: 'Tiếng Anh: UN.' },
    { type: 'mcq', q: 'Cấu trúc “không chỉ… mà còn…” biểu thị quan hệ:', options: ['tăng tiến', 'nguyên nhân', 'điều kiện', 'nhượng bộ'], answer: 0, explain: 'Như (4b).' }
  ]
});
})();
