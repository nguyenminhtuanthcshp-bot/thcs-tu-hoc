/* GDCD 7 – Bài 5. Bảo tồn di sản văn hoá. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-5', {
  objectives: [
    'Nêu được khái niệm di sản văn hoá và một số loại di sản văn hoá của Việt Nam.',
    'Giải thích được ý nghĩa của di sản văn hoá; nêu được quy định cơ bản của pháp luật về quyền, nghĩa vụ của công dân đối với di sản văn hoá.',
    'Thực hiện được việc làm phù hợp để bảo tồn di sản; phê phán hành vi xâm hại di sản.'
  ],
  intro: 'Trong chuyến tham quan Hoàng thành Thăng Long, cô hướng dẫn viên kể rằng nơi đây là di sản thế giới được UNESCO ghi danh năm 2010. Giữ gìn những <b>di sản văn hoá</b> ấy là trách nhiệm của mỗi chúng ta.',
  steps: [
    { title: 'Di sản văn hoá là gì?', html: `<p>Theo <b>Luật Di sản văn hoá năm 2024</b> (Luật số 45/2024/QH15, có hiệu lực từ 1/7/2025), di sản văn hoá gồm <b>di sản văn hoá phi vật thể</b> và <b>di sản văn hoá vật thể</b>, được lưu truyền từ thế hệ này qua thế hệ khác.</p>
      <ul><li><b>Phi vật thể</b>: tri thức, kĩ năng, tập quán, biểu đạt văn hoá được cộng đồng thực hành, trao truyền (lễ hội, nghệ thuật trình diễn, nghề thủ công…).</li><li><b>Vật thể</b>: sản phẩm vật chất có giá trị lịch sử, văn hoá, khoa học, thẩm mĩ (di tích, danh lam thắng cảnh, di vật, cổ vật, bảo vật quốc gia).</li></ul>` },
    { title: 'Một số di sản được UNESCO ghi danh', html: `<p>Việt Nam có nhiều di sản được UNESCO ghi danh:</p>`,
      svg: S.table({ title: 'Một số di sản của Việt Nam được UNESCO ghi danh', head: ['Di sản', 'Loại', 'Năm'], rows: [['Vịnh Hạ Long', 'Thiên nhiên', '1994'], ['Phố cổ Hội An', 'Văn hoá (vật thể)', '1999'], ['Nhã nhạc cung đình Huế', 'Phi vật thể', '2003'], ['Hoàng thành Thăng Long', 'Văn hoá (vật thể)', '2010'], ['Đờn ca tài tử Nam Bộ', 'Phi vật thể', '2013']], colW: 180 }), caption: 'Một số ví dụ, không đầy đủ.' },
    { title: 'Ý nghĩa và quy định pháp luật', html: `<p>Di sản văn hoá là tài sản quý giá của dân tộc, là cầu nối quá khứ – hiện tại, góp phần tạo nên bản sắc văn hoá và phát triển du lịch, kinh tế. Pháp luật nghiêm cấm các hành vi xâm phạm, huỷ hoại di sản; công dân có quyền tham quan, nghiên cứu, hưởng thụ giá trị di sản và có nghĩa vụ tôn trọng, bảo vệ di sản.</p>`,
      svg: S.compare({ title: 'Ứng xử với di sản', left: { h: 'Nên làm', items: ['Tham quan, tìm hiểu di sản', 'Giữ vệ sinh khi đến di tích', 'Báo khi thấy di sản bị xâm hại', 'Học, thực hành dân ca, nghề cổ'] }, right: { h: 'Bị nghiêm cấm', items: ['Viết, vẽ, khắc lên di tích', 'Lấn chiếm đất di tích', 'Mua bán trái phép cổ vật', 'Đào bới trái phép di chỉ'] } }), caption: 'Bảo vệ di sản là trách nhiệm của mọi người.' },
    { title: 'Học sinh làm gì?', html: `<p>Tìm hiểu, giới thiệu di sản quê hương; tham gia hoạt động bảo tồn (câu lạc bộ dân ca, dọn vệ sinh di tích); không xâm hại di sản; tuyên truyền cho người thân, bạn bè.</p>
      <div class="box key">Di sản = vật thể + phi vật thể; giữ gìn để trao lại cho thế hệ sau.</div>` }
  ],
  summary: 'Theo Luật Di sản văn hoá năm 2024 (Luật số 45/2024/QH15, hiệu lực từ 1/7/2025), di sản văn hoá gồm di sản phi vật thể (tri thức, kĩ năng, tập quán, biểu đạt văn hoá được trao truyền) và vật thể (di tích, danh lam thắng cảnh, di vật, cổ vật, bảo vật quốc gia). Di sản là tài sản quý của dân tộc. Pháp luật nghiêm cấm xâm phạm, huỷ hoại di sản; công dân có nghĩa vụ tôn trọng, bảo vệ di sản.',
  examples: [
    { title: 'Phân loại', problem: 'Nhã nhạc cung đình Huế và Phố cổ Hội An thuộc loại di sản nào?', solution: 'Nhã nhạc: phi vật thể. Phố cổ Hội An: vật thể.' },
    { title: 'Ứng xử', problem: 'Thấy một du khách bẻ một mảnh gạch cổ ở di tích làm kỉ niệm, em làm gì?', solution: 'Lịch sự nhắc nhở; báo ban quản lí di tích nếu người đó không dừng lại.' },
    { title: 'Tính năm', problem: 'Vịnh Hạ Long được ghi danh năm 1994. Đến năm 2026 là bao nhiêu năm?', solution: '32 năm.' }
  ],
  exercises: [
    { question: 'Kể tên hai di sản vật thể và hai di sản phi vật thể của Việt Nam.', hints: ['Vật thể: di tích, danh thắng.', 'Phi vật thể: lễ hội, âm nhạc…'], solution: 'Vật thể: Hoàng thành Thăng Long, Phố cổ Hội An. Phi vật thể: Nhã nhạc cung đình Huế, Đờn ca tài tử Nam Bộ.' },
    { question: 'Vì sao phải bảo tồn di sản văn hoá?', hints: ['Giá trị đối với dân tộc.', 'Nếu mất đi thì sao?'], solution: 'Di sản là tài sản quý, thể hiện bản sắc, lịch sử dân tộc, không thể thay thế; mất đi là mất vĩnh viễn.' },
    { question: 'Luật Di sản văn hoá năm 2024 có hiệu lực từ ngày nào? Luật thay thế luật nào?', hints: ['Ngày đầu tháng 7.', 'Luật năm 2001.'], solution: 'Từ 1/7/2025; thay thế Luật Di sản văn hoá năm 2001 (đã sửa đổi, bổ sung năm 2009).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Di sản văn hoá gồm di sản vật thể và di sản phi vật thể.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Di sản văn hoá phi vật thể:', options: ['Đờn ca tài tử Nam Bộ', 'Phố cổ Hội An', 'Hoàng thành Thăng Long', 'Vịnh Hạ Long'], answer: 0, explain: 'Phi vật thể.' },
    { type: 'mcq', q: 'Hành vi bị nghiêm cấm đối với di sản:', options: ['Khắc chữ lên di tích', 'Tham quan di tích', 'Học hát dân ca', 'Giới thiệu di sản'], answer: 0, explain: 'Xâm hại.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Luật Di sản văn hoá năm 2024 có hiệu lực từ ngày 1/7/2025.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Hoàng thành Thăng Long được UNESCO ghi danh năm 2010. Đến năm 2026 là bao nhiêu năm?', answer: '16', unit: 'năm', calc: '2026-2010', explain: '16.' },
    { type: 'mcq', q: 'Vịnh Hạ Long được UNESCO ghi danh lần đầu năm:', options: ['1994', '2010', '1975', '2020'], answer: 0, explain: '1994.' },
    { type: 'short', q: 'Di tích đón 12 000 khách/tháng, mỗi khách mua vé 40 000 đồng. Doanh thu vé mỗi tháng bao nhiêu triệu đồng?', answer: '480', unit: 'triệu đồng', calc: '12000*40000/1000000', explain: '480 triệu.' },
    { type: 'mcq', q: 'Nghĩa vụ của công dân đối với di sản:', options: ['tôn trọng, bảo vệ di sản', 'tự do mua bán cổ vật', 'lấn chiếm đất di tích', 'không liên quan'], answer: 0, explain: 'Bảo vệ.' }
  ]
});
})();
