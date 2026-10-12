/* GDCD 8 – Bài 7. Phòng, chống bạo lực gia đình. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-7', {
  objectives: [
    'Kể được các hình thức bạo lực gia đình.',
    'Phân tích được tác hại của bạo lực gia đình đối với cá nhân, gia đình và xã hội.',
    'Nêu được một số quy định của pháp luật về phòng, chống bạo lực gia đình.',
    'Biết cách phòng, chống và ứng phó với bạo lực gia đình phù hợp lứa tuổi.'
  ],
  intro: 'Gần đây Quân hay đi học muộn, ít nói, trên tay có vết bầm. Khi cô giáo hỏi, Quân chỉ cúi đầu: “Bố em uống rượu xong hay đánh mẹ con em”. Quân không biết phải làm gì. Đây là <b>bạo lực gia đình</b>, và pháp luật nghiêm cấm.',
  steps: [
    { title: 'Bạo lực gia đình là gì?', html: `<p><b>Bạo lực gia đình</b> là hành vi cố ý của thành viên gia đình gây tổn hại hoặc có khả năng gây tổn hại về thể chất, tinh thần, tình dục, kinh tế đối với thành viên khác trong gia đình.</p>`,
      svg: S.table({ title: 'Các hình thức bạo lực gia đình', head: ['Hình thức', 'Ví dụ'], rows: [['Thể chất', 'Đánh đập, hành hạ'], ['Tinh thần', 'Lăng mạ, cô lập, đe doạ'], ['Kinh tế', 'Chiếm đoạt, kiểm soát tiền'], ['Bỏ mặc', 'Không chăm sóc con, cha mẹ'], ['Tình dục', 'Cưỡng ép quan hệ']], colW: 250 }), caption: 'Tóm tắt theo Luật Phòng, chống bạo lực gia đình 2022, Điều 3.' },
    { title: 'Tác hại', html: `<ul><li><b>Cá nhân</b>: tổn thương thân thể, tâm lí; trẻ em sợ hãi, học sút, dễ bỏ nhà.</li><li><b>Gia đình</b>: mất hạnh phúc, đổ vỡ.</li><li><b>Xã hội</b>: gia tăng tệ nạn, tội phạm; ảnh hưởng trật tự.</li></ul>` },
    { title: 'Quy định của pháp luật', html: `<ul><li><b>Luật Phòng, chống bạo lực gia đình năm 2022</b> (Luật số 13/2022/QH15, hiệu lực từ 1/7/2023): <b>Điều 3</b> nêu các hành vi bạo lực gia đình; <b>Điều 5</b> nghiêm cấm hành vi bạo lực gia đình, kích động, xúi giục bạo lực, trả thù người báo tin, tố giác, bao che hành vi bạo lực.</li><li>Người bị bạo lực có quyền yêu cầu được bảo vệ, chăm sóc y tế, trợ giúp pháp lí.</li></ul>` },
    { title: 'Ứng phó khi gặp bạo lực gia đình', html: `<p>Học sinh cần giữ an toàn và tìm sự giúp đỡ:</p>`,
      svg: S.flowchart({ title: 'Khi chứng kiến hoặc bị bạo lực gia đình', steps: [{ t: 'start', s: 'Xảy ra bạo lực' }, { t: 'if', s: 'Nguy hiểm ngay?', yes: 'Chạy đi, gọi 113', no: 'Tâm sự người tin cậy' }, { t: 'proc', s: 'Báo thầy cô, tổ dân phố, gọi 111' }, { t: 'end', s: 'Được hỗ trợ, bảo vệ' }] }), caption: 'Nguy hiểm: chạy tới nơi an toàn, gọi 113. 111: Tổng đài quốc gia bảo vệ trẻ em (miễn phí).' }
  ],
  summary: 'Bạo lực gia đình là hành vi cố ý của thành viên gia đình gây tổn hại về thể chất, tinh thần, tình dục, kinh tế cho thành viên khác. Tác hại nặng nề với cá nhân, gia đình, xã hội. Luật Phòng, chống bạo lực gia đình 2022 (Điều 3, Điều 5) nghiêm cấm các hành vi này. Khi gặp bạo lực: giữ an toàn, tìm người tin cậy, gọi 113 hoặc 111.',
  examples: [
    { title: 'Tình huống của Quân', problem: 'Quân nên làm gì?', solution: 'Kể với cô giáo, người thân tin cậy; khi nguy hiểm thì chạy sang nhà hàng xóm, gọi 113; có thể gọi 111 để được tư vấn.' },
    { title: 'Nhận diện', problem: 'Bố cấm mẹ đi làm, giữ hết tiền, không cho mẹ chi tiêu. Đây là hình thức nào?', solution: 'Bạo lực kinh tế.' },
    { title: 'Hiệu lực luật', problem: 'Luật Phòng, chống bạo lực gia đình 2022 có hiệu lực từ 1/7/2023. Tính đến 1/7/2026 đã được bao nhiêu năm?', solution: '3 năm.' }
  ],
  exercises: [
    { question: 'Vì sao lăng mạ, chì chiết người thân cũng là bạo lực gia đình?', hints: ['Không chỉ đánh mới gây tổn hại.', 'Nghĩ đến tâm lí.'], solution: 'Vì gây tổn hại tinh thần, danh dự; luật quy định bạo lực tinh thần cũng là bạo lực gia đình.' },
    { question: 'Kể ba việc học sinh có thể làm để góp phần phòng, chống bạo lực gia đình.', hints: ['Trong chính gia đình mình.', 'Khi biết bạn gặp bạo lực.'], solution: 'Cư xử lễ phép, biết chia sẻ; nhắc người thân giải quyết mâu thuẫn bằng trao đổi; động viên bạn và báo người lớn khi bạn bị bạo lực.' },
    { question: 'Hàng xóm nghe tiếng đánh mắng nhưng nói “chuyện nhà người ta”. Thái độ đó đúng không?', hints: ['Luật cấm bao che, dung túng.', 'Ai cũng có thể báo tin.'], solution: 'Không đúng. Mọi người có trách nhiệm báo tin, ngăn chặn bạo lực gia đình (báo công an, chính quyền).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lăng mạ, đe doạ người thân cũng là bạo lực gia đình.', answer: true, explain: 'Bạo lực tinh thần.' },
    { type: 'mcq', q: 'Luật Phòng, chống bạo lực gia đình hiện hành được ban hành năm:', options: ['2022', '2007', '2014', '2016'], answer: 0, explain: 'Luật số 13/2022/QH15.' },
    { type: 'short', q: 'Số Tổng đài quốc gia bảo vệ trẻ em là số mấy?', answer: '111', calc: '111', explain: '111.' },
    { type: 'mcq', q: 'Giữ hết tiền, không cho người thân chi tiêu thiết yếu là bạo lực:', options: ['kinh tế', 'thể chất', 'tình dục', 'không phải bạo lực'], answer: 0, explain: 'Kinh tế.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bạo lực gia đình là chuyện riêng, người ngoài không nên can thiệp.', answer: false, explain: 'Luật cấm bao che, dung túng.' },
    { type: 'short', q: 'Số điện thoại công an khi khẩn cấp là số mấy?', answer: '113', calc: '113', explain: '113.' },
    { type: 'mcq', q: 'Khi bị bạo lực và đang nguy hiểm, em nên:', options: ['Chạy tới nơi an toàn, gọi 113', 'Đánh trả', 'Giấu kín mãi', 'Tự làm đau mình'], answer: 0, explain: 'An toàn trước.' },
    { type: 'short', q: 'Luật có hiệu lực 1/7/2023. Đến 1/7/2026 là mấy năm?', answer: '3', unit: 'năm', calc: '2026-2023', explain: '3.' }
  ]
});
})();
