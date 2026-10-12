/* GDCD 6 – Bài 1. Tự hào về truyền thống gia đình, dòng họ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-1', {
  objectives: [
    'Nêu được một số truyền thống của gia đình, dòng họ (truyền thống nghề, hiếu học, yêu nước, đạo đức…).',
    'Giải thích được một cách đơn giản ý nghĩa của truyền thống gia đình, dòng họ.',
    'Biết trân trọng, tự hào và có việc làm cụ thể để giữ gìn, phát huy truyền thống.'
  ],
  intro: 'Ông nội của Minh là thợ mộc, bố Minh cũng làm nghề mộc. Mỗi dịp Tết, cả họ lại quây quần nghe ông kể chuyện ngày xưa. Những điều tốt đẹp được truyền từ đời này sang đời khác ấy gọi là <b>truyền thống gia đình, dòng họ</b>.',
  steps: [
    { title: 'Truyền thống gia đình, dòng họ là gì?', html: `<p><b>Truyền thống gia đình, dòng họ</b> là những giá trị tốt đẹp được các thế hệ trong gia đình, dòng họ tạo ra, giữ gìn và truyền lại cho con cháu.</p>
      <p>Ca dao, tục ngữ có câu: <i>“Uống nước nhớ nguồn”</i>, <i>“Con người có tổ có tông / Như cây có cội, như sông có nguồn”</i>.</p>` },
    { title: 'Một số truyền thống tiêu biểu', html: `<p>Mỗi gia đình, dòng họ có thể có một hoặc nhiều truyền thống:</p>`,
      svg: S.mindmap({ center: 'Truyền thống gia đình, dòng họ', branches: [{ title: 'Nghề truyền thống', items: ['Làm gốm, dệt lụa', 'Nghề mộc, đúc đồng'] }, { title: 'Hiếu học', items: ['Chăm học, đỗ đạt', 'Khuyến học trong họ'] }, { title: 'Yêu nước', items: ['Tham gia bảo vệ Tổ quốc'] }, { title: 'Đạo đức, lối sống', items: ['Hiếu thảo', 'Cần cù, trung thực'] }], w: 640, size: 13 }), caption: 'Truyền thống có thể về nghề, học tập, yêu nước, đạo đức.' },
    { title: 'Ý nghĩa', html: `<ul><li>Giúp mỗi người thêm tự hào, có thêm động lực để cố gắng.</li><li>Gắn kết các thành viên trong gia đình, dòng họ.</li><li>Góp phần làm phong phú truyền thống của dân tộc.</li></ul>` },
    { title: 'Giữ gìn và phát huy', html: `<p>Học sinh có thể: tìm hiểu lịch sử gia đình, dòng họ; chăm ngoan, học tốt; tham gia giỗ tổ, họp họ; học hỏi nghề truyền thống; không làm điều gì khiến gia đình, dòng họ phải xấu hổ.</p>`,
      svg: S.compare({ title: 'Thái độ với truyền thống', left: { h: 'Nên', items: ['Tìm hiểu, ghi chép truyền thống', 'Cố gắng học tập, rèn luyện', 'Giới thiệu nghề truyền thống'] }, right: { h: 'Không nên', items: ['Chê nghề của gia đình là “quê”', 'Khoe khoang, coi thường người khác', 'Thờ ơ với họ hàng'] } }), caption: 'Tự hào nhưng không khoe khoang.' }
  ],
  summary: 'Truyền thống gia đình, dòng họ là những giá trị tốt đẹp được các thế hệ tạo ra, giữ gìn và truyền lại (nghề truyền thống, hiếu học, yêu nước, đạo đức…). Truyền thống giúp mỗi người tự hào, có động lực, gắn kết gia đình và làm giàu truyền thống dân tộc. Học sinh cần tìm hiểu, trân trọng và có việc làm cụ thể để phát huy.',
  examples: [
    { title: 'Nhận diện truyền thống', problem: 'Dòng họ của Lan có nhiều người làm giáo viên, mỗi năm họ đều trao thưởng cho con cháu học giỏi. Đó là truyền thống gì?', solution: 'Truyền thống hiếu học (khuyến học).' },
    { title: 'Nhận xét thái độ', problem: 'Hùng ngại nói với bạn rằng bố mẹ làm nghề đan lát vì sợ bị chê. Em khuyên Hùng thế nào?', solution: 'Mọi nghề chân chính đều đáng quý; nghề đan lát là nghề truyền thống khéo léo. Hùng nên tự hào và có thể giới thiệu nghề với các bạn.' },
    { title: 'Tính số thế hệ', problem: 'Làng gốm của gia đình Mai có từ khoảng năm 1426. Đến năm 2026 là bao nhiêu năm? Nếu mỗi thế hệ khoảng 25 năm thì khoảng bao nhiêu thế hệ?', solution: '600 năm; khoảng 600 : 25 = 24 thế hệ.' }
  ],
  exercises: [
    { question: 'Kể một truyền thống của gia đình hoặc dòng họ em và việc em đã làm để phát huy truyền thống đó.', hints: ['Nghĩ về nghề, học tập, cách sống của ông bà, bố mẹ.', 'Việc làm cụ thể, phù hợp lứa tuổi.'], solution: 'Ví dụ: gia đình có truyền thống hiếu học → em chăm chỉ học tập, giúp em nhỏ học bài.' },
    { question: 'Câu “Uống nước nhớ nguồn” nói lên điều gì về truyền thống gia đình, dòng họ?', hints: ['“Nguồn” chỉ ai?', 'Ta cần có thái độ gì với họ?'], solution: 'Nhắc con cháu biết ơn, ghi nhớ công lao của tổ tiên, ông bà và giữ gìn những điều tốt đẹp họ để lại.' },
    { question: 'Có ý kiến: “Chỉ những gia đình giàu có, nổi tiếng mới có truyền thống.” Em đồng ý không? Vì sao?', hints: ['Truyền thống gồm những loại nào?', 'Gia đình bình thường có những giá trị tốt đẹp không?'], solution: 'Không đồng ý. Gia đình nào cũng có thể có truyền thống tốt đẹp như cần cù, hiếu thảo, trung thực.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyền thống gia đình, dòng họ là những giá trị tốt đẹp được truyền từ đời này sang đời khác.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Việc làm nào thể hiện giữ gìn truyền thống gia đình?', options: ['Chê nghề truyền thống của gia đình', 'Tìm hiểu và giới thiệu nghề truyền thống', 'Khoe khoang dòng họ để coi thường bạn', 'Không quan tâm tới họ hàng'], answer: 1, explain: 'Tìm hiểu, giới thiệu.' },
    { type: 'mcq', q: 'Câu tục ngữ nói về lòng biết ơn tổ tiên:', options: ['Uống nước nhớ nguồn', 'Có công mài sắt có ngày nên kim', 'Tốt gỗ hơn tốt nước sơn', 'Ăn chắc mặc bền'], answer: 0, explain: 'Uống nước nhớ nguồn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ gia đình giàu có mới có truyền thống tốt đẹp.', answer: false, explain: 'Gia đình nào cũng có thể có.' },
    { type: 'short', q: 'Làng nghề có từ năm 1526. Đến năm 2026 là bao nhiêu năm?', answer: '500', unit: 'năm', calc: '2026-1526', explain: '500 năm.' },
    { type: 'mcq', q: 'Dòng họ trao thưởng cho con cháu học giỏi thể hiện truyền thống:', options: ['hiếu học', 'nghề mộc', 'buôn bán', 'thể thao'], answer: 0, explain: 'Hiếu học.' },
    { type: 'short', q: 'Mỗi thế hệ khoảng 25 năm. 200 năm có khoảng bao nhiêu thế hệ?', answer: '8', unit: 'thế hệ', calc: '200/25', explain: '8.' },
    { type: 'mcq', q: 'Ý nghĩa của truyền thống gia đình là:', options: ['giúp mỗi người tự hào, có động lực', 'để khoe với người khác', 'không có ý nghĩa gì', 'chỉ để ghi trong gia phả'], answer: 0, explain: 'Tự hào, động lực.' }
  ]
});
})();
