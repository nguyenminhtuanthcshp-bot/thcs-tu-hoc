/* KHTN 9 – Bài 47. Di truyền học với con người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-47', {
  objectives: [
    'Nêu được một số bệnh và tật di truyền ở người (Down, Turner, bạch tạng, máu khó đông…) và nguyên nhân.',
    'Đọc được sơ đồ phả hệ đơn giản; nêu được vai trò của di truyền y học tư vấn.',
    'Giải thích được cơ sở di truyền học của việc cấm kết hôn gần huyết thống và các biện pháp hạn chế bệnh tật di truyền.'
  ],
  intro: 'Vì sao luật pháp cấm những người có họ hàng gần kết hôn với nhau? Vì sao các bác sĩ khuyên phụ nữ nên sinh con ở độ tuổi phù hợp? Câu trả lời đến từ di truyền học người.',
  steps: [
    { title: 'Bệnh và tật di truyền', html: `<table><tr><th>Loại</th><th>Ví dụ</th><th>Nguyên nhân</th></tr><tr><td>Bệnh do đột biến gene</td><td>bạch tạng, máu khó đông, hồng cầu hình liềm, mù màu</td><td>đột biến gene (thường gene lặn)</td></tr><tr><td>Bệnh, hội chứng do đột biến NST</td><td>Down, Turner, Klinefelter</td><td>đột biến số lượng NST</td></tr><tr><td>Tật di truyền</td><td>dính ngón, thừa ngón, sứt môi…</td><td>đột biến gene hoặc NST</td></tr></table>
      <p>Tác nhân gây đột biến: hoá chất độc hại (thuốc trừ sâu, chất độc da cam/dioxin), phóng xạ, ô nhiễm môi trường…</p>` },
    { title: 'Sơ đồ phả hệ', html: `<p><b>Sơ đồ phả hệ</b> ghi lại sự di truyền của một tính trạng qua các thế hệ của một gia đình. Kí hiệu: □ nam, ○ nữ, tô đen: người mang tính trạng (bệnh).</p>
      <p>Ví dụ: bố mẹ (I.1, I.2) bình thường sinh con gái II.4 bị bạch tạng ⇒ bệnh do gene <b>lặn</b> quy định; bố mẹ đều dị hợp Aa.</p>`,
      svg: S.pedigree({ people: [{ id: 1, x: 200, g: 1, sex: 'm' }, { id: 2, x: 360, g: 1, sex: 'f' }, { id: 3, x: 160, g: 2, sex: 'm' }, { id: 4, x: 280, g: 2, sex: 'f', aff: true }, { id: 5, x: 400, g: 2, sex: 'm' }], couples: [[1, 2]], kids: [[1, 2, [3, 4, 5]]], title: 'Phả hệ một gia đình có người bị bạch tạng' }), caption: 'Bố mẹ bình thường sinh con bị bạch tạng ⇒ bệnh do gene lặn trên NST thường (Aa × Aa).' },
    { title: 'Di truyền y học tư vấn', html: `<p><b>Di truyền y học tư vấn</b> dựa trên phả hệ, xét nghiệm để chẩn đoán, dự đoán khả năng mắc bệnh di truyền ở đời con và cho lời khuyên về kết hôn, sinh con.</p>
      <p>Với cặp vợ chồng Aa × Aa: xác suất sinh con bị bệnh (aa) là 1/4 = 25 %.</p>`,
      svg: S.bar({ title: 'Nguy cơ sinh con mắc hội chứng Down theo tuổi mẹ (tham khảo)', cats: ['25 tuổi', '30 tuổi', '35 tuổi', '40 tuổi', '45 tuổi'], series: [{ name: 'Số ca / 1 000 ca sinh', values: [0.8, 1.1, 2.9, 10, 33], color: '#be185d' }], yMax: 40, yStep: 10, width: 580, height: 280 }), caption: 'Nguy cơ hội chứng Down tăng nhanh khi tuổi mẹ trên 35 (số ca trên 1 000 ca sinh, giá trị tham khảo, làm tròn).' },
    { title: 'Hôn nhân và bảo vệ di truyền', html: `<ul><li>Kết hôn gần huyết thống làm tăng khả năng các gene lặn có hại gặp nhau ở thể đồng hợp ⇒ con dễ mắc bệnh di truyền. Luật Hôn nhân và gia đình cấm kết hôn giữa những người cùng dòng máu trực hệ và có họ trong phạm vi ba đời.</li><li>Nên sinh con trong độ tuổi phù hợp; khám sức khoẻ tiền hôn nhân, sàng lọc trước sinh.</li><li>Bảo vệ môi trường, hạn chế tiếp xúc với tác nhân gây đột biến.</li></ul>` }
  ],
  summary: 'Bệnh, tật di truyền do đột biến gene (bạch tạng, máu khó đông…) hoặc đột biến NST (Down, Turner). Sơ đồ phả hệ giúp xác định quy luật di truyền trong gia đình. Di truyền y học tư vấn dự đoán nguy cơ, cho lời khuyên. Cấm kết hôn gần huyết thống (trong phạm vi ba đời), sinh con ở tuổi phù hợp, bảo vệ môi trường để hạn chế bệnh di truyền.',
  examples: [
    { title: 'Xác suất', problem: 'Bố mẹ đều dị hợp về gene bạch tạng (Aa × Aa). Tính xác suất sinh con bình thường.', solution: 'Con bình thường (AA, Aa) chiếm 3/4 = 75 %.' },
    { title: 'Đọc phả hệ', problem: 'Trong phả hệ trên, con trai II.3 bình thường. Xác suất II.3 mang gene bệnh (Aa) là bao nhiêu?', solution: 'Trong số con bình thường của Aa × Aa: 1 AA : 2 Aa ⇒ xác suất Aa = 2/3.' },
    { title: 'Hôn nhân cận huyết', problem: 'Vì sao hôn nhân cận huyết làm tăng tỉ lệ trẻ mắc bệnh di truyền?', solution: 'Người có họ gần dễ cùng mang một gene lặn có hại từ tổ tiên chung, nên con dễ nhận hai gene lặn (đồng hợp lặn) và biểu hiện bệnh.' }
  ],
  exercises: [
    { question: 'Kể tên hai bệnh di truyền do đột biến gene và hai hội chứng do đột biến NST ở người.', hints: ['Bạch tạng, máu khó đông…', 'Down, Turner…'], solution: 'Đột biến gene: bạch tạng, máu khó đông (hoặc hồng cầu hình liềm). Đột biến NST: Down, Turner.' },
    { question: 'Một cặp vợ chồng bình thường sinh con đầu lòng bị bạch tạng. Xác suất đứa con thứ hai bị bạch tạng là bao nhiêu?', hints: ['Suy ra kiểu gene của bố mẹ.', 'Mỗi lần sinh độc lập.'], solution: 'Bố mẹ đều Aa ⇒ xác suất 1/4 = 25 %.' },
    { question: 'Nêu ba biện pháp hạn chế phát sinh bệnh, tật di truyền.', hints: ['Môi trường, hôn nhân.', 'Y tế: tư vấn, sàng lọc.'], solution: 'Bảo vệ môi trường, hạn chế tiếp xúc hoá chất độc, phóng xạ; không kết hôn gần huyết thống; khám tiền hôn nhân, tư vấn di truyền, sàng lọc trước sinh.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hôn nhân gần huyết thống làm tăng khả năng con mắc bệnh di truyền do gene lặn.', answer: true, explain: 'Gene lặn có hại dễ gặp nhau ở thể đồng hợp.' },
    { type: 'mcq', q: 'Bệnh nào do đột biến gene gây ra?', options: ['Hội chứng Down', 'Bạch tạng', 'Hội chứng Turner', 'Hội chứng Klinefelter'], answer: 1, explain: 'Bạch tạng do gene lặn đột biến.' },
    { type: 'short', q: 'Bố mẹ đều có kiểu gene Aa (a gây bệnh). Xác suất sinh con mắc bệnh là bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '1/4*100', explain: 'aa = 1/4.' },
    { type: 'mcq', q: 'Trong sơ đồ phả hệ, kí hiệu hình vuông chỉ:', options: ['nữ', 'nam', 'người bệnh', 'cặp vợ chồng'], answer: 1, explain: 'Hình vuông: nam; hình tròn: nữ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nguy cơ sinh con mắc hội chứng Down không phụ thuộc vào tuổi của mẹ.', answer: false, explain: 'Nguy cơ tăng rõ khi mẹ lớn tuổi.' },
    { type: 'short', q: 'Bố mẹ Aa × Aa. Xác suất sinh con không mắc bệnh là bao nhiêu phần trăm?', answer: '75', unit: '%', calc: '3/4*100', explain: '3/4 = 75 %.' },
    { type: 'mcq', q: 'Luật Hôn nhân và gia đình Việt Nam cấm kết hôn giữa những người có họ trong phạm vi:', options: ['một đời', 'hai đời', 'ba đời', 'năm đời'], answer: 2, explain: 'Phạm vi ba đời.' },
    { type: 'short', q: 'Theo số liệu tham khảo, nguy cơ Down ở mẹ 40 tuổi là 10 ca / 1 000 ca sinh, ở mẹ 25 tuổi là 0,8 ca. Nguy cơ ở mẹ 40 tuổi gấp bao nhiêu lần (làm tròn đến hàng đơn vị)?', answer: '13', unit: 'lần', calc: 'round(10/0.8)', explain: '10 / 0,8 = 12,5 ≈ 13 lần.' }
  ]
});
})();
