/* GDCD 8 – Bài 4. Bảo vệ lẽ phải. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-4', {
  objectives: [
    'Giải thích được thế nào là lẽ phải và bảo vệ lẽ phải.',
    'Nêu được biểu hiện và ý nghĩa của việc bảo vệ lẽ phải.',
    'Thực hiện được việc bảo vệ lẽ phải bằng lời nói, việc làm phù hợp, an toàn.',
    'Phê phán thái độ thờ ơ, né tránh, bao che cho cái sai.'
  ],
  intro: 'Trong giờ kiểm tra, Tùng thấy một nhóm bạn chuyền đáp án. Sau đó, lớp bị nghi ngờ và cả lớp phải làm lại bài. Có bạn bảo Tùng: “Đừng nói gì, kệ đi”. Tùng nên chọn im lặng hay <b>bảo vệ lẽ phải</b>?',
  steps: [
    { title: 'Lẽ phải và bảo vệ lẽ phải', html: `<ul><li><b>Lẽ phải</b>: những điều đúng đắn, phù hợp với đạo lí và lợi ích chung của xã hội.</li><li><b>Bảo vệ lẽ phải</b>: công nhận, ủng hộ, tuân theo điều đúng; biết điều chỉnh suy nghĩ, hành vi theo hướng tích cực; đấu tranh với việc làm sai trái.</li></ul>` },
    { title: 'Biểu hiện', html: `<p>So sánh hai cách ứng xử:</p>`,
      svg: S.compare({ title: 'Bảo vệ lẽ phải và không bảo vệ lẽ phải', left: { h: 'Bảo vệ lẽ phải', items: ['Lên tiếng khi bạn bị đổ oan', 'Nhận lỗi khi mình sai', 'Góp ý thẳng thắn, tôn trọng', 'Báo người có trách nhiệm'] }, right: { h: 'Không bảo vệ lẽ phải', items: ['Gió chiều nào che chiều ấy', 'Bao che cho bạn thân làm sai', 'Thờ ơ: “Việc ai nấy lo”', 'Nói dối để có lợi'] } }), caption: 'Bảo vệ lẽ phải không có nghĩa là gây gổ.' },
    { title: 'Bảo vệ lẽ phải an toàn, khéo léo', html: `<p>Cần chọn cách phù hợp lứa tuổi:</p>`,
      svg: S.flowchart({ title: 'Khi chứng kiến việc sai trái', steps: [{ t: 'start', s: 'Thấy việc sai trái' }, { t: 'if', s: 'Có nguy hiểm không?', yes: 'Báo người lớn, công an', no: 'Góp ý trực tiếp' }, { t: 'proc', s: 'Nêu sự thật, có bằng chứng' }, { t: 'end', s: 'Lẽ phải được bảo vệ' }] }), caption: 'Ưu tiên an toàn của bản thân.' },
    { title: 'Ý nghĩa', html: `<ul><li>Giúp mọi người có cách ứng xử đúng đắn, phù hợp.</li><li>Góp phần đẩy lùi cái sai, làm lành mạnh các mối quan hệ xã hội.</li><li>Được mọi người tin tưởng, tôn trọng.</li></ul>
      <div class="box key">Dũng cảm, trung thực, khéo léo và an toàn.</div>` }
  ],
  summary: 'Lẽ phải là điều đúng đắn, phù hợp đạo lí và lợi ích chung. Bảo vệ lẽ phải là công nhận, ủng hộ, tuân theo điều đúng và đấu tranh với cái sai. Điều này giúp xã hội lành mạnh, mỗi người được tin tưởng. Cần bảo vệ lẽ phải khéo léo, an toàn và phê phán thái độ thờ ơ, bao che.',
  examples: [
    { title: 'Tình huống của Tùng', problem: 'Tùng nên làm gì?', solution: 'Gặp riêng các bạn góp ý; nếu các bạn không nhận lỗi, trung thực trình bày với giáo viên để lớp không bị oan chung.' },
    { title: 'Nhận diện', problem: '“Gió chiều nào che chiều ấy” là biểu hiện gì?', solution: 'Thiếu lập trường, không bảo vệ lẽ phải.' },
    { title: 'Khảo sát (minh hoạ)', problem: 'Trong 40 bạn, 28 bạn chọn “lên tiếng khi thấy sai”. Chiếm bao nhiêu phần trăm?', solution: '28 : 40 × 100% = 70%.' }
  ],
  exercises: [
    { question: 'Bạn thân của em lấy đồ của bạn khác. Em làm gì?', hints: ['Tình bạn không phải là bao che.', 'Góp ý trước, báo sau.'], solution: 'Khuyên bạn trả lại và xin lỗi; nếu bạn không nghe, báo giáo viên chủ nhiệm.' },
    { question: 'Lớp có 36 bạn, 9 bạn chọn “im lặng cho yên chuyện”. Tỉ lệ này là bao nhiêu phần trăm?', hints: ['9 : 36.', 'Nhân 100%.'], solution: '25%.' },
    { question: 'Vì sao bảo vệ lẽ phải cần khéo léo và an toàn?', hints: ['Nghĩ đến tình huống nguy hiểm.', 'Nghĩ đến cảm xúc người được góp ý.'], solution: 'Để tránh nguy hiểm cho bản thân và giúp người sai dễ tiếp thu, sửa chữa.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảo vệ lẽ phải là ủng hộ điều đúng và đấu tranh với điều sai.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hành vi KHÔNG bảo vệ lẽ phải:', options: ['Bao che cho bạn quay cóp', 'Bênh vực bạn bị đổ oan', 'Nhận lỗi khi sai', 'Góp ý thẳng thắn'], answer: 0, explain: 'Bao che.' },
    { type: 'short', q: '28 trong 40 bạn chọn lên tiếng khi thấy sai. Tỉ lệ bao nhiêu %?', answer: '70', unit: '%', calc: '28/40*100', explain: '70%.' },
    { type: 'mcq', q: 'Khi thấy kẻ gian cầm hung khí trộm đồ, học sinh nên:', options: ['Giữ an toàn, báo người lớn hoặc gọi 113', 'Lao vào giằng co', 'Quay video đăng mạng', 'Làm ngơ'], answer: 0, explain: 'An toàn trước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảo vệ lẽ phải nghĩa là phải cãi nhau thật to.', answer: false, explain: 'Cần ôn hoà, khéo léo.' },
    { type: 'short', q: '9 trong 36 bạn chọn im lặng. Tỉ lệ bao nhiêu %?', answer: '25', unit: '%', calc: '9/36*100', explain: '25%.' },
    { type: 'mcq', q: 'Câu thành ngữ chỉ người thiếu lập trường:', options: ['Gió chiều nào che chiều ấy', 'Uống nước nhớ nguồn', 'Có chí thì nên', 'Tôn sư trọng đạo'], answer: 0, explain: 'Thiếu lập trường.' },
    { type: 'mcq', q: 'Ý nghĩa của bảo vệ lẽ phải:', options: ['Xã hội lành mạnh, được tin tưởng', 'Bị mọi người xa lánh', 'Gây mất đoàn kết', 'Không có ý nghĩa'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
