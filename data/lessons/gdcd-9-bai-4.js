/* GDCD 9 – Bài 4. Khách quan và công bằng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-4', {
  objectives: [
    'Nêu được khái niệm và biểu hiện của khách quan, công bằng.',
    'Giải thích được ý nghĩa của khách quan, công bằng.',
    'Thể hiện được sự khách quan, công bằng trong cuộc sống hằng ngày.',
    'Phê phán biểu hiện thiếu khách quan, thiên vị, bất công.'
  ],
  intro: 'Lớp 9C bình chọn bạn tiêu biểu của học kì. Lan, lớp trưởng, phụ trách tổng hợp phiếu. Bạn thân của Lan kém một phiếu so với Khánh. Một số bạn gợi ý Lan “sửa nhẹ” kết quả. Lan cần giữ sự <b>khách quan và công bằng</b>.',
  steps: [
    { title: 'Khái niệm', html: `<ul><li><b>Khách quan</b>: nhìn nhận, đánh giá sự việc đúng như nó vốn có, không bị chi phối bởi tình cảm, định kiến cá nhân.</li><li><b>Công bằng</b>: đối xử, đánh giá đúng mức, hợp lí với mọi người, không thiên vị.</li></ul>` },
    { title: 'Biểu hiện', html: `<p>So sánh:</p>`,
      svg: S.compare({ title: 'Khách quan, công bằng và trái ngược', left: { h: 'Khách quan, công bằng', items: ['Đánh giá dựa trên bằng chứng', 'Chấm điểm theo tiêu chí chung', 'Lắng nghe cả hai phía', 'Không vì quen biết mà ưu ái'] }, right: { h: 'Thiếu khách quan, thiên vị', items: ['Kết luận theo cảm tính', 'Ưu ái bạn thân', 'Chỉ nghe một phía', 'Định kiến với người khác'] } }), caption: 'Khách quan là điều kiện để công bằng.' },
    { title: 'Ý nghĩa', html: `<ul><li>Giúp đánh giá đúng con người, sự việc; giải quyết vấn đề hợp lí.</li><li>Tạo niềm tin, sự đoàn kết trong tập thể.</li><li>Góp phần xây dựng xã hội dân chủ, văn minh.</li></ul>` },
    { title: 'Tổng hợp phiếu khách quan', html: `<p>Kết quả bình chọn được công khai như sau:</p>`,
      svg: S.table({ title: 'Kết quả bình chọn lớp 9C (minh hoạ)', head: ['Ứng viên', 'Số phiếu'], rows: [['Khánh', '16'], ['Minh (bạn thân của Lan)', '15'], ['Ngọc', '9'], ['Tổng', '40']], colW: 250 }), caption: 'Số liệu minh hoạ. Công bố đúng kết quả, có người cùng kiểm phiếu.' }
  ],
  summary: 'Khách quan là nhìn nhận đúng như sự việc vốn có, không bị tình cảm, định kiến chi phối; công bằng là đối xử, đánh giá đúng mức, không thiên vị. Khách quan, công bằng giúp đánh giá đúng, tạo niềm tin, đoàn kết và xã hội văn minh. Cần phê phán thiên vị, định kiến, bất công.',
  examples: [
    { title: 'Tình huống của Lan', problem: 'Lan nên làm gì?', solution: 'Từ chối sửa phiếu; công bố đúng kết quả (Khánh 16 phiếu), mời thêm bạn cùng kiểm phiếu để minh bạch.' },
    { title: 'Tính tỉ lệ', problem: 'Khánh được 16/40 phiếu. Tỉ lệ bao nhiêu phần trăm?', solution: '16 : 40 × 100% = 40%.' },
    { title: 'Nhận diện', problem: 'Trọng tài chỉ thổi phạt đội khách dù hai đội phạm lỗi như nhau. Nhận xét?', solution: 'Thiếu công bằng, thiên vị.' }
  ],
  exercises: [
    { question: 'Hai bạn cãi nhau, em là tổ trưởng được nhờ phân xử. Em làm gì để khách quan?', hints: ['Nghe ai?', 'Dựa vào gì để kết luận?'], solution: 'Nghe cả hai bạn trình bày, hỏi thêm người chứng kiến, dựa vào sự thật để kết luận, không thiên vị bạn thân.' },
    { question: 'Ngọc được 9/40 phiếu. Tỉ lệ bao nhiêu phần trăm?', hints: ['9 : 40.', 'Nhân 100%.'], solution: '22,5%.' },
    { question: 'Vì sao giáo viên cần chấm bài theo đáp án và thang điểm chung?', hints: ['Tiêu chí.', 'Niềm tin của học sinh.'], solution: 'Để đánh giá khách quan, công bằng mọi học sinh, tạo niềm tin và động lực học tập.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công bằng là đối xử, đánh giá đúng mức, không thiên vị.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện thiếu khách quan:', options: ['Kết luận chỉ nghe một phía', 'Dựa vào bằng chứng', 'Chấm theo tiêu chí chung', 'Lắng nghe hai phía'], answer: 0, explain: 'Một phía.' },
    { type: 'short', q: '16 trong 40 phiếu chiếm bao nhiêu %?', answer: '40', unit: '%', calc: '16/40*100', explain: '40%.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ưu ái bạn thân khi chấm thi đua là công bằng.', answer: false, explain: 'Thiên vị.' },
    { type: 'short', q: '9 trong 40 phiếu chiếm bao nhiêu %?', answer: '22,5', unit: '%', calc: '9/40*100', explain: '22,5%.' },
    { type: 'mcq', q: 'Ý nghĩa của khách quan, công bằng:', options: ['Tạo niềm tin, đoàn kết', 'Gây mất đoàn kết', 'Làm người khác thiệt', 'Không cần thiết'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Việc làm thể hiện công bằng:', options: ['Phân công việc theo khả năng, đều cho mọi người', 'Giao việc nặng cho bạn mình ghét', 'Chỉ khen bạn thân', 'Phạt theo cảm tính'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Khánh 16, Minh 15, Ngọc 9 phiếu. Tổng bao nhiêu phiếu?', answer: '40', unit: 'phiếu', calc: '16+15+9', explain: '40.' }
  ]
});
})();
