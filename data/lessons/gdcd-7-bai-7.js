/* GDCD 7 – Bài 7. Phòng, chống bạo lực học đường. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-7', {
  objectives: [
    'Nêu được các biểu hiện, nguyên nhân và tác hại của bạo lực học đường.',
    'Nêu được một số quy định cơ bản của pháp luật liên quan tới phòng, chống bạo lực học đường.',
    'Biết cách ứng phó trước, trong và sau khi bị bạo lực học đường; tham gia phòng, chống bạo lực học đường.'
  ],
  intro: 'Một bạn lớp bên liên tục bị nhóm khác chặn đường, giật đồ, nhắn tin đe doạ. Bạn sợ hãi, không dám đến trường. Đó là <b>bạo lực học đường</b> – điều cần được ngăn chặn.',
  steps: [
    { title: 'Bạo lực học đường là gì?', html: `<p>Theo <b>Nghị định số 80/2017/NĐ-CP</b> (có hiệu lực từ 5/9/2017) về môi trường giáo dục an toàn, lành mạnh, thân thiện, phòng, chống bạo lực học đường, <b>bạo lực học đường</b> là hành vi hành hạ, ngược đãi, đánh đập; xâm hại thân thể, sức khoẻ; lăng mạ, xúc phạm danh dự, nhân phẩm; cô lập, xua đuổi và các hành vi cố ý khác gây tổn hại về thể chất, tinh thần của người học xảy ra trong cơ sở giáo dục hoặc lớp độc lập.</p>` },
    { title: 'Biểu hiện, nguyên nhân, tác hại', html: `<p>Bạo lực có thể diễn ra trực tiếp hoặc trên mạng:</p>`,
      svg: S.table({ title: 'Bạo lực học đường', head: ['Mặt', 'Ví dụ'], rows: [['Thể chất', 'Đánh, xô đẩy, giật đồ'], ['Tinh thần', 'Chế giễu, đe doạ, cô lập'], ['Trên mạng', 'Ảnh chế, nhắn tin doạ'], ['Nguyên nhân', 'Thiếu kiềm chế, phim bạo lực…'], ['Tác hại', 'Tổn thương, học sút, bỏ học']], colW: 240 }), caption: 'Bạo lực tinh thần và trên mạng cũng là bạo lực.' },
    { title: 'Ứng phó khi bị bạo lực', html: `<p>Bình tĩnh và tìm sự trợ giúp:</p>`,
      svg: S.flowchart({ title: 'Khi bị đe doạ, bắt nạt', steps: [{ t: 'start', s: 'Bị đe doạ, bắt nạt' }, { t: 'if', s: 'Nguy hiểm ngay?', yes: 'Kêu cứu, chạy đi', no: 'Từ chối, tránh xa' }, { t: 'proc', s: 'Báo thầy cô, bố mẹ; lưu bằng chứng' }, { t: 'end', s: 'Gọi 111 nếu cần' }] }), caption: 'Không đánh trả, không giữ im lặng.' },
    { title: 'Phòng, chống bạo lực học đường', html: `<ul><li>Sống thân thiện, tôn trọng sự khác biệt; giải quyết mâu thuẫn bằng trao đổi.</li><li>Không cổ vũ, quay video đánh nhau; báo ngay khi thấy bạo lực.</li><li>Tham gia xây dựng trường học an toàn, lành mạnh, thân thiện.</li></ul>
      <div class="box key">Không im lặng – không cổ vũ – báo người có trách nhiệm – Tổng đài 111.</div>` }
  ],
  summary: 'Bạo lực học đường (Nghị định 80/2017/NĐ-CP) là hành vi hành hạ, đánh đập, xâm hại thân thể, lăng mạ, xúc phạm, cô lập… gây tổn hại thể chất, tinh thần người học. Có bạo lực thể chất, tinh thần, trên mạng; gây tổn thương, học sút, bỏ học. Ứng phó: bình tĩnh, tránh xa, kêu cứu, báo thầy cô, bố mẹ, lưu bằng chứng, gọi 111. Phòng chống: sống thân thiện, không cổ vũ bạo lực.',
  examples: [
    { title: 'Nhận diện', problem: 'Một nhóm bạn lập nhóm chat riêng để chế giễu ngoại hình của Lam. Đây có phải bạo lực học đường không?', solution: 'Có – bạo lực tinh thần trên mạng (xúc phạm, cô lập).' },
    { title: 'Người chứng kiến', problem: 'Em thấy hai bạn đánh nhau, nhiều người đứng quay video. Em làm gì?', solution: 'Không quay, không cổ vũ; báo ngay thầy cô, bảo vệ; nếu an toàn thì can ngăn bằng lời.' },
    { title: 'Khảo sát', problem: 'Khảo sát 200 học sinh (minh hoạ), 30 bạn từng bị chế giễu. Tỉ lệ?', solution: '15%.' }
  ],
  exercises: [
    { question: 'Nêu ba biểu hiện của bạo lực học đường.', hints: ['Thể chất.', 'Tinh thần, trên mạng.'], solution: 'Đánh, xô đẩy; chế giễu, đe doạ; tung ảnh chế, tin xấu lên mạng.' },
    { question: 'Vì sao không nên đánh trả khi bị bắt nạt?', hints: ['Mâu thuẫn có leo thang không?', 'Em có thể bị xử lí không?'], solution: 'Đánh trả dễ làm mâu thuẫn leo thang, nguy hiểm hơn, em cũng có thể vi phạm nội quy, pháp luật; nên tìm sự giúp đỡ của người có trách nhiệm.' },
    { question: 'Nghị định nào quy định về phòng, chống bạo lực học đường? Có hiệu lực từ khi nào?', hints: ['Nghị định số 80.', 'Năm 2017.'], solution: 'Nghị định số 80/2017/NĐ-CP, có hiệu lực từ ngày 5/9/2017.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chế giễu, cô lập bạn cũng là bạo lực học đường.', answer: true, explain: 'Bạo lực tinh thần.' },
    { type: 'mcq', q: 'Văn bản quy định về phòng, chống bạo lực học đường:', options: ['Nghị định 80/2017/NĐ-CP', 'Luật Đất đai', 'Luật Giao thông', 'Luật Thuế'], answer: 0, explain: 'NĐ 80/2017.' },
    { type: 'mcq', q: 'Khi chứng kiến bạn bị đánh, em nên:', options: ['báo ngay thầy cô, bảo vệ', 'quay video đăng mạng', 'cổ vũ', 'bỏ đi coi như không biết'], answer: 0, explain: 'Báo người có trách nhiệm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bị bắt nạt nên im lặng để tránh rắc rối.', answer: false, explain: 'Cần báo.' },
    { type: 'short', q: 'Khảo sát 250 học sinh (minh hoạ), 20 bạn từng bị đe doạ. Tỉ lệ (%)?', answer: '8', unit: '%', calc: '20/250*100', explain: '8%.' },
    { type: 'short', q: 'Nghị định 80/2017/NĐ-CP có hiệu lực năm 2017. Đến năm 2026 là bao nhiêu năm?', answer: '9', unit: 'năm', calc: '2026-2017', explain: '9.' },
    { type: 'mcq', q: 'Hành vi góp phần phòng chống bạo lực học đường:', options: ['Giải quyết mâu thuẫn bằng trao đổi', 'Hẹn nhau “giải quyết” sau giờ học', 'Lập nhóm chat chế giễu bạn', 'Tung ảnh chế'], answer: 0, explain: 'Trao đổi.' },
    { type: 'short', q: 'Số điện thoại Tổng đài quốc gia bảo vệ trẻ em?', answer: '111', calc: '111', explain: '111.' }
  ]
});
})();
