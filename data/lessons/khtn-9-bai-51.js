/* KHTN 9 – Bài 51. Sự phát sinh và phát triển sự sống trên Trái Đất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-51', {
  objectives: [
    'Trình bày được sơ lược các giai đoạn phát sinh sự sống: tiến hoá hoá học, tiến hoá tiền sinh học, tiến hoá sinh học.',
    'Nêu được các đại địa chất và những sự kiện chính trong sự phát triển của sinh giới.',
    'Đọc được cây phát sinh chủng loại đơn giản; nêu được sơ lược về sự phát sinh loài người.'
  ],
  intro: 'Trái Đất hình thành cách đây khoảng 4,6 tỉ năm. Những dạng sống đầu tiên – vi khuẩn đơn bào – xuất hiện khoảng 3,5 tỉ năm trước (tham khảo). Từ đó, sự sống phát triển thành hàng triệu loài như ngày nay.',
  steps: [
    { title: 'Các giai đoạn phát sinh sự sống', html: `<ol><li><b>Tiến hoá hoá học:</b> từ các chất vô cơ đơn giản trong khí quyển nguyên thuỷ (CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub>O, H<sub>2</sub>…), nhờ năng lượng tự nhiên (sét, tia tử ngoại, núi lửa) hình thành các chất hữu cơ đơn giản rồi đại phân tử (protein, nucleic acid).</li><li><b>Tiến hoá tiền sinh học:</b> các đại phân tử tập hợp, được bao bởi màng ⇒ tế bào nguyên thuỷ.</li><li><b>Tiến hoá sinh học:</b> từ tế bào nguyên thuỷ hình thành sinh vật nhân sơ, nhân thực, đa bào… dưới tác động của các nhân tố tiến hoá.</li></ol>`,
      svg: S.flow({ items: ['Chất vô cơ', 'Chất hữu cơ đơn giản', 'Đại phân tử (protein, nucleic acid)', 'Tế bào nguyên thuỷ', 'Sinh vật nhân sơ → nhân thực'], size: 13, label: 'Các giai đoạn phát sinh sự sống' }), caption: 'Tiến hoá hoá học → tiền sinh học → sinh học.' },
    { title: 'Các đại địa chất', html: `<p>Lịch sử Trái Đất được chia thành các <b>đại</b>: Thái cổ, Nguyên sinh, Cổ sinh, Trung sinh, Tân sinh. Ranh giới giữa các đại thường gắn với những biến đổi lớn của địa chất, khí hậu và sinh giới (ví dụ sự tuyệt chủng của khủng long cuối đại Trung sinh).</p>`,
      svg: S.geoTimeline(), caption: 'Các đại địa chất và sự kiện chính của sinh giới (mốc thời gian gần đúng, tham khảo).' },
    { title: 'Cây phát sinh chủng loại', html: `<p><b>Cây phát sinh chủng loại</b> biểu diễn quan hệ họ hàng giữa các nhóm sinh vật: các nhóm có chung nhánh gần nhau thì có tổ tiên chung gần đây hơn.</p>
      <p>Ví dụ ở động vật có xương sống: cá xuất hiện sớm nhất, rồi đến lưỡng cư, sau đó tách thành nhánh thú và nhánh bò sát – chim.</p>`,
      svg: S.evoTree({ tree: ['Cá xương', ['Lưỡng cư', ['Thú', ['Bò sát', 'Chim']]]], title: 'Cây phát sinh đơn giản của động vật có xương sống' }), caption: 'Chim có quan hệ họ hàng gần với bò sát hơn so với thú.' },
    { title: 'Sự phát sinh loài người', html: `<p>Loài người hiện đại (<b>Homo sapiens</b>) thuộc bộ Linh trưởng, có chung tổ tiên với các loài vượn người (tinh tinh, gorilla…). Quá trình phát sinh loài người trải qua nhiều dạng trung gian, với sự phát triển của dáng đứng thẳng, bộ não lớn, sử dụng công cụ, tiếng nói và ý thức.</p>
      <div class="box key">Loài người <b>không</b> tiến hoá từ tinh tinh ngày nay; người và tinh tinh có chung một tổ tiên đã tuyệt chủng.</div>` }
  ],
  summary: 'Sự sống phát sinh qua tiến hoá hoá học (chất vô cơ → hữu cơ → đại phân tử), tiến hoá tiền sinh học (tế bào nguyên thuỷ) và tiến hoá sinh học. Lịch sử Trái Đất gồm các đại: Thái cổ, Nguyên sinh, Cổ sinh, Trung sinh, Tân sinh. Cây phát sinh chủng loại thể hiện quan hệ họ hàng. Homo sapiens có chung tổ tiên với vượn người.',
  examples: [
    { title: 'Tính thời gian', problem: 'Trái Đất hình thành khoảng 4,6 tỉ năm trước; sự sống đầu tiên xuất hiện khoảng 3,5 tỉ năm trước. Khoảng thời gian từ khi Trái Đất hình thành đến khi có sự sống là bao lâu?', solution: '4,6 − 3,5 = 1,1 tỉ năm (giá trị tham khảo).' },
    { title: 'Đọc cây phát sinh', problem: 'Theo cây phát sinh ở bước 3, nhóm nào có quan hệ họ hàng gần nhất với chim?', solution: 'Bò sát.' },
    { title: 'Đại địa chất', problem: 'Khủng long phát triển mạnh và tuyệt chủng vào đại nào?', solution: 'Đại Trung sinh (tuyệt chủng vào cuối đại, khoảng 66 triệu năm trước – tham khảo).' }
  ],
  exercises: [
    { question: 'Sắp xếp các đại địa chất theo thứ tự từ cổ nhất đến gần nhất.', hints: ['Thái cổ là cổ nhất.', 'Tân sinh là hiện nay.'], solution: 'Thái cổ → Nguyên sinh → Cổ sinh → Trung sinh → Tân sinh.' },
    { question: 'Đại Trung sinh kéo dài từ khoảng 252 đến 66 triệu năm trước (tham khảo). Đại này kéo dài bao lâu?', hints: ['Lấy mốc đầu trừ mốc cuối.', '252 − 66.'], solution: '186 triệu năm.' },
    { question: 'Vì sao nói “người tiến hoá từ khỉ” là cách hiểu chưa đúng?', hints: ['Người và vượn người hiện đại có quan hệ gì?', 'Tổ tiên chung.'], solution: 'Người và các loài vượn người hiện đại là các nhánh tiến hoá khác nhau, có chung một tổ tiên đã tuyệt chủng; người không tiến hoá từ các loài khỉ, vượn đang sống.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tiến hoá hoá học là giai đoạn hình thành các hợp chất hữu cơ từ chất vô cơ.', answer: true, explain: 'Giai đoạn đầu của phát sinh sự sống.' },
    { type: 'mcq', q: 'Đại địa chất hiện nay là:', options: ['Cổ sinh', 'Trung sinh', 'Tân sinh', 'Nguyên sinh'], answer: 2, explain: 'Đại Tân sinh (từ khoảng 66 triệu năm trước).' },
    { type: 'short', q: 'Trái Đất hình thành khoảng 4,6 tỉ năm trước, sự sống đầu tiên khoảng 3,5 tỉ năm trước (tham khảo). Khoảng cách giữa hai mốc là bao nhiêu tỉ năm?', answer: '1,1', unit: 'tỉ năm', calc: '4.6-3.5', explain: '4,6 − 3,5 = 1,1.' },
    { type: 'mcq', q: 'Sinh vật đầu tiên xuất hiện trên Trái Đất là:', options: ['thực vật có hoa', 'sinh vật nhân sơ đơn bào', 'cá', 'khủng long'], answer: 1, explain: 'Sinh vật nhân sơ (vi khuẩn) nguyên thuỷ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Loài người tiến hoá trực tiếp từ tinh tinh ngày nay.', answer: false, explain: 'Người và tinh tinh có chung tổ tiên đã tuyệt chủng.' },
    { type: 'short', q: 'Đại Cổ sinh kéo dài từ khoảng 541 đến 252 triệu năm trước (tham khảo). Đại này kéo dài bao nhiêu triệu năm?', answer: '289', unit: 'triệu năm', calc: '541-252', explain: '541 − 252 = 289.' },
    { type: 'mcq', q: 'Theo cây phát sinh của động vật có xương sống, nhóm xuất hiện sớm nhất là:', options: ['Thú', 'Chim', 'Cá', 'Bò sát'], answer: 2, explain: 'Cá xuất hiện sớm nhất.' },
    { type: 'mcq', q: 'Tên khoa học của loài người hiện đại là:', options: ['Homo sapiens', 'Pan troglodytes', 'Drosophila melanogaster', 'Escherichia coli'], answer: 0, explain: 'Homo sapiens.' }
  ]
});
})();
