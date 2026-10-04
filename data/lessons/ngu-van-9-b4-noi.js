/* Ngữ văn 9 – Bài 4. Nói và nghe: Thảo luận về một vấn đề đáng quan tâm phù hợp với lứa tuổi – “Làm thế nào để học tốt môn Ngữ văn?”. Kịch bản thảo luận mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b4-noi', {
  objectives: [
    'Tham gia thảo luận nhóm về vấn đề “Làm thế nào để học tốt môn Ngữ văn?”: nêu kinh nghiệm, lí lẽ, bằng chứng cụ thể.',
    'Biết lắng nghe, ghi nhận, chất vấn và tổng hợp các ý kiến thành giải pháp chung.',
    'Tự đánh giá được cách học Ngữ văn của bản thân và lập kế hoạch cải thiện.',
    'Có thái độ cầu thị, cởi mở, tôn trọng những cách học khác nhau.'
  ],
  intro: 'Có bạn nói “Văn là năng khiếu, không học được”; có bạn lại học thuộc lòng văn mẫu trước mỗi bài kiểm tra. Học Ngữ văn thế nào mới đúng và hiệu quả? Đây là vấn đề rất thiết thực với học sinh lớp 9.',
  text: {
    title: 'Kịch bản thảo luận mẫu: “Học tốt Ngữ văn – bắt đầu từ đâu?”',
    html: `<p><b>Nhóm trưởng (Hạnh):</b> Hôm nay nhóm mình bàn: Làm thế nào để học tốt môn Ngữ văn? Mỗi bạn chia sẻ một cách học và lí do nhé.</p>
<p><b>Khoa:</b> Theo mình, quan trọng nhất là <b>đọc nhiều</b>. Từ khi mình đặt mục tiêu mỗi tuần đọc một truyện ngắn, vốn từ của mình tăng lên, viết cũng trôi chảy hơn.</p>
<p><b>Mai:</b> Mình đồng ý, nhưng đọc thôi chưa đủ. Mình hay <b>ghi chép</b>: chép câu văn hay, ghi cảm nghĩ sau khi đọc. Khi viết bài, mình có sẵn “kho” ý tưởng.</p>
<p><b>Phúc:</b> Mình thì hay học thuộc văn mẫu cho chắc điểm.</p>
<p><b>Hạnh:</b> Mọi người nghĩ sao về cách của Phúc?</p>
<p><b>Mai:</b> Mình nghĩ văn mẫu có thể tham khảo cách lập dàn ý, nhưng học thuộc thì khi gặp đề lạ sẽ lúng túng. Với lại, bài văn chép thuộc thì không có cảm nhận của mình.</p>
<p><b>Phúc:</b> Ừ, lần trước đề hỏi khác một chút là mình không biết viết gì thật. Vậy mình nên tham khảo văn mẫu thế nào?</p>
<p><b>Khoa:</b> Đọc để học cách triển khai ý, rồi gấp lại và <b>tự viết</b> bằng lời mình. Viết xong nhờ bạn hoặc cô góp ý.</p>
<p><b>Hạnh:</b> Nhóm mình tổng hợp: (1) Đọc rộng, đọc đều; (2) Ghi chép từ ngữ, câu văn hay và cảm nghĩ; (3) Luyện viết thường xuyên, tự viết bằng lời mình; (4) Tham khảo bài mẫu để học cách lập ý, không học thuộc; (5) Nhờ góp ý và sửa bài. Mỗi bạn chọn một việc để thực hiện trong tháng này.</p>`,
    source: 'Kịch bản do nhóm biên soạn tự viết; tên nhân vật là giả định.'
  },
  steps: [
    { title: 'Chuẩn bị thảo luận', html: `<ul><li>Tự đánh giá: em mạnh, yếu ở kĩ năng nào (đọc hiểu, viết, nói và nghe, tiếng Việt)?</li>
      <li>Chuẩn bị 1 – 2 kinh nghiệm học tập cụ thể, kèm bằng chứng (kết quả, trải nghiệm).</li>
      <li>Tìm hiểu ý kiến của thầy cô, các bạn học tốt; nguồn sách hướng dẫn kĩ năng học.</li></ul>` },
    { title: 'Các hướng thảo luận', html: `<p>Vấn đề có thể chia thành các mặt:</p>`,
      svg: S.mindmap({ center: 'Học tốt Ngữ văn', branches: [{ title: 'Đọc', items: ['Đọc rộng, đọc đều', 'Nhật kí đọc'] }, { title: 'Viết', items: ['Luyện viết thường xuyên', 'Tự viết bằng lời mình'] }, { title: 'Nói và nghe', items: ['Tham gia thảo luận', 'Thuyết trình'] }, { title: 'Tiếng Việt', items: ['Vốn từ, ngữ pháp', 'Chính tả'] }] }),
      caption: 'Các mặt của việc học tốt Ngữ văn.' },
    { title: 'Nêu ý kiến và chất vấn', html: `<ul><li>Nêu kinh nghiệm ngắn gọn, có ví dụ (như Khoa: “mỗi tuần đọc một truyện ngắn”).</li>
      <li>Khi không đồng ý, nêu lí do và đề xuất cách khác (như Mai về văn mẫu).</li>
      <li>Nhóm trưởng mời bạn nói ít, đặt câu hỏi “Mọi người nghĩ sao…?” để mở rộng thảo luận.</li></ul>
      <div class="box key">Phúc đã tiếp thu và hỏi lại “Vậy mình nên tham khảo văn mẫu thế nào?” – đó là thái độ cầu thị đáng học tập.</div>` },
    { title: 'Tổng hợp thành kế hoạch hành động', html: `<p>Kết quả thảo luận nên biến thành việc làm cụ thể:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Đọc', text: 'Mỗi tuần một tác phẩm' }, { title: 'Ghi', text: 'Sổ tay văn học' }, { title: 'Viết', text: 'Tự viết bằng lời mình' }, { title: 'Sửa', text: 'Nhờ góp ý, viết lại' }] }),
      caption: 'Vòng học tập Ngữ văn hiệu quả.' },
    { title: 'Đánh giá buổi thảo luận', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Mức độ</th></tr>
      <tr><td>Mọi thành viên đều được phát biểu</td><td>☐ Tốt ☐ Chưa</td></tr>
      <tr><td>Ý kiến có ví dụ, bằng chứng cụ thể</td><td>☐ Tốt ☐ Chưa</td></tr>
      <tr><td>Phản biện tôn trọng, có tiếp thu</td><td>☐ Tốt ☐ Chưa</td></tr>
      <tr><td>Có kết luận và kế hoạch hành động</td><td>☐ Tốt ☐ Chưa</td></tr></table>` }
  ],
  summary: 'Thảo luận “Làm thế nào để học tốt Ngữ văn?”: tự đánh giá, chuẩn bị kinh nghiệm có bằng chứng; thảo luận theo các mặt đọc – viết – nói nghe – tiếng Việt; phản biện tôn trọng, cầu thị; tổng hợp thành kế hoạch hành động: đọc rộng, ghi chép, tự viết bằng lời mình, tham khảo bài mẫu để học cách lập ý (không học thuộc), nhờ góp ý và sửa bài.',
  examples: [
    { title: 'Nhận xét một ý kiến', problem: 'Ý kiến “học thuộc văn mẫu cho chắc điểm” của Phúc có điểm gì chưa hợp lí? Nhóm đã giúp Phúc thế nào?', solution: 'Học thuộc văn mẫu khiến học sinh lúng túng khi gặp đề lạ và bài viết thiếu cảm nhận riêng; chính Phúc cũng thừa nhận từng không viết được khi đề thay đổi. Nhóm không chê bai mà chỉ ra hạn chế và gợi ý cách dùng văn mẫu đúng: đọc để học cách triển khai ý, rồi gấp lại tự viết, nhờ góp ý.' },
    { title: 'Bằng chứng từ trải nghiệm', problem: 'Khoa dùng bằng chứng nào cho ý kiến “đọc nhiều”?', solution: 'Khoa dùng trải nghiệm cá nhân: từ khi đặt mục tiêu mỗi tuần đọc một truyện ngắn, vốn từ tăng lên và viết trôi chảy hơn. Bằng chứng cụ thể, có thật, dễ thuyết phục các bạn cùng lứa tuổi.' },
    { title: 'Tổng hợp ý kiến', problem: 'Lời tổng hợp của Hạnh gồm những ý nào? Vì sao hiệu quả?', solution: 'Năm ý: đọc rộng; ghi chép; luyện viết bằng lời mình; tham khảo bài mẫu để học cách lập ý; nhờ góp ý và sửa bài. Hiệu quả vì Hạnh gom được ý của mọi người (kể cả ý đã được điều chỉnh của Phúc) và kết thúc bằng một việc làm cụ thể: mỗi bạn chọn một việc để thực hiện trong tháng.' }
  ],
  exercises: [
    { question: 'Tự đánh giá: kĩ năng nào trong môn Ngữ văn em làm tốt nhất, kĩ năng nào cần cải thiện? Vì sao?', hints: ['Bốn kĩ năng: đọc, viết, nói và nghe, tiếng Việt.', 'Dựa vào kết quả bài kiểm tra, nhận xét của thầy cô.'], solution: 'Ví dụ: Em làm tốt phần đọc hiểu vì thích đọc truyện và thường trả lời đúng các câu hỏi về nhân vật, chi tiết. Em cần cải thiện kĩ năng viết bài nghị luận: bài thường thiếu bằng chứng, diễn đạt lủng củng, hay bị nhận xét “kể lại nhiều, phân tích ít”.' },
    { question: 'Lập kế hoạch một tháng để cải thiện kĩ năng em còn yếu.', hints: ['Mục tiêu cụ thể, đo được.', 'Việc làm theo tuần.'], solution: 'Ví dụ (kĩ năng viết nghị luận): Tuần 1 – đọc hai bài nghị luận văn học, gạch chân luận đề, luận điểm. Tuần 2 – mỗi ngày viết một đoạn phân tích theo trình tự nêu – dẫn – phân tích – đánh giá. Tuần 3 – viết một bài hoàn chỉnh, nhờ cô góp ý. Tuần 4 – viết lại bài theo góp ý, so sánh với bài cũ để thấy tiến bộ.' },
    { question: 'Viết 3 câu em sẽ nói khi muốn góp ý cho cách học của một bạn trong nhóm mà không làm bạn phật ý.', hints: ['Ghi nhận điểm tốt trước.', 'Gợi ý bằng câu hỏi hoặc kinh nghiệm của mình.'], solution: '(1) “Mình thấy bạn rất chăm, lúc nào cũng học thuộc bài kĩ.” (2) “Có lần mình cũng học thuộc văn mẫu, nhưng gặp đề lạ thì bí, nên mình chuyển sang tự lập dàn ý rồi viết.” (3) “Hay tuần này bạn thử viết một đoạn bằng lời mình rồi hai đứa đổi bài góp ý cho nhau nhé?”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Cách dùng văn mẫu hợp lí là:', options: ['đọc để học cách triển khai ý, rồi tự viết bằng lời mình', 'học thuộc lòng để chép lại', 'không bao giờ đọc', 'nộp nguyên văn bài mẫu'], answer: 0, explain: 'Tham khảo có chọn lọc.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Học Ngữ văn chỉ phụ thuộc vào năng khiếu, không thể rèn luyện.', answer: false, explain: 'Đọc, ghi chép, luyện viết đều giúp tiến bộ.' },
    { type: 'short', q: 'Theo Khoa, thói quen quan trọng nhất để học tốt Ngữ văn là đọc … (một chữ).', answer: ['nhiều', 'nhieu'], answerText: 'nhiều', explain: '“đọc nhiều”.' },
    { type: 'mcq', q: 'Câu nào thể hiện thái độ cầu thị trong thảo luận?', options: ['“Vậy mình nên tham khảo văn mẫu thế nào?”', '“Cách của mình là đúng nhất.”', '“Các bạn không hiểu gì.”', '“Mình không muốn nghe.”'], answer: 0, explain: 'Tiếp thu và hỏi thêm.' },
    { type: 'mcq', q: 'Kết quả tốt nhất của buổi thảo luận là:', options: ['kế hoạch hành động cụ thể cho từng thành viên', 'một bạn thắng tranh luận', 'danh sách lỗi của các bạn', 'không có kết luận'], answer: 0, explain: 'Thảo luận hướng tới hành động.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ghi chép câu văn hay và cảm nghĩ sau khi đọc giúp có sẵn ý tưởng khi viết.', answer: true, explain: 'Như kinh nghiệm của Mai.' },
    { type: 'short', q: 'Theo lời tổng hợp, sau khi viết bài cần nhờ góp ý rồi … bài (một chữ).', answer: ['sửa', 'sua'], answerText: 'sửa', explain: '“Nhờ góp ý và sửa bài.”' },
    { type: 'mcq', q: 'Nhóm trưởng nói “Mọi người nghĩ sao về cách của Phúc?” nhằm:', options: ['mở rộng thảo luận, mời các bạn góp ý', 'chê bai Phúc', 'kết thúc thảo luận', 'chuyển sang chủ đề khác'], answer: 0, explain: 'Câu hỏi gợi mở.' }
  ]
});
})();
