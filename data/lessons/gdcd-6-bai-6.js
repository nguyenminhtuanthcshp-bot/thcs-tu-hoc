/* GDCD 6 – Bài 6. Tự nhận thức bản thân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-6', {
  objectives: [
    'Nêu được thế nào là tự nhận thức bản thân và ý nghĩa của nó.',
    'Tự nhận thức được điểm mạnh, điểm yếu, giá trị, sở thích của bản thân.',
    'Lập được kế hoạch phát huy điểm mạnh, khắc phục điểm yếu; biết tôn trọng sự khác biệt.'
  ],
  intro: 'Thảo vẽ rất đẹp nhưng lại ngại phát biểu trước lớp. Khi hiểu rõ mình giỏi gì và cần cố gắng ở đâu, Thảo đã tham gia câu lạc bộ mĩ thuật và tập nói trước nhóm nhỏ. Đó là <b>tự nhận thức bản thân</b>.',
  steps: [
    { title: 'Tự nhận thức bản thân là gì?', html: `<p><b>Tự nhận thức bản thân</b> là biết nhìn nhận, đánh giá đúng về bản thân mình: khả năng, hiểu biết, tính cách, sở thích, thói quen, điểm mạnh, điểm yếu…</p>` },
    { title: 'Cách tự nhận thức', html: `<ul><li>Tự quan sát, suy ngẫm về hành động, kết quả của mình.</li><li>Lắng nghe nhận xét của bố mẹ, thầy cô, bạn bè.</li><li>Thử sức ở nhiều hoạt động khác nhau.</li><li>Viết nhật kí, so sánh mình với chính mình trước đây.</li></ul>`,
      svg: S.table({ title: 'Bảng tự nhận thức (ví dụ của Thảo)', head: ['Điểm mạnh', 'Điểm cần cố gắng'], rows: [['Vẽ đẹp, có óc thẩm mĩ', 'Ngại nói trước đông người'], ['Cẩn thận, chu đáo', 'Đôi khi làm bài chậm'], ['Biết lắng nghe', 'Chưa mạnh dạn hỏi khi chưa hiểu']], colW: 260 }), caption: 'Ai cũng có điểm mạnh và điểm cần cố gắng.' },
    { title: 'Ý nghĩa', html: `<p>Tự nhận thức đúng giúp ta tự tin, biết phát huy điểm mạnh, khắc phục điểm yếu, chọn mục tiêu phù hợp, ứng xử tốt với người khác; tránh tự ti hoặc tự cao.</p>`,
      svg: S.compare({ title: 'Đánh giá bản thân', left: { h: 'Đúng mức', items: ['Biết mình giỏi gì, yếu gì', 'Đặt mục tiêu vừa sức', 'Đón nhận góp ý'] }, right: { h: 'Sai lệch', items: ['Tự ti: “Mình chẳng làm được gì”', 'Tự cao: “Mình giỏi nhất”', 'Phản ứng gay gắt khi bị góp ý'] } }), caption: 'Tránh cả tự ti và tự cao.' },
    { title: 'Kế hoạch rèn luyện', html: `<p>Chọn 1 điểm mạnh để phát huy, 1 điểm yếu để khắc phục; đặt mục tiêu cụ thể, đo được (ví dụ: “mỗi tuần phát biểu ít nhất 3 lần”); tự đánh giá sau mỗi tuần.</p>
      <div class="box key">Hiểu mình để tự tin và tiến bộ.</div>` }
  ],
  summary: 'Tự nhận thức bản thân là nhìn nhận, đánh giá đúng khả năng, tính cách, sở thích, điểm mạnh, điểm yếu của mình. Có thể tự quan sát, suy ngẫm, lắng nghe góp ý, thử sức nhiều hoạt động. Tự nhận thức đúng giúp tự tin, phát huy điểm mạnh, khắc phục điểm yếu, tránh tự ti và tự cao.',
  examples: [
    { title: 'Nhận xét', problem: 'Bị điểm kém một bài, Long nói: “Mình dốt, học không bao giờ giỏi được.” Long đánh giá bản thân đúng chưa?', solution: 'Chưa; Long đang tự ti. Một bài kém chưa nói lên tất cả; Long nên tìm nguyên nhân và cách cải thiện.' },
    { title: 'Lắng nghe góp ý', problem: 'Bạn góp ý Hằng hay ngắt lời người khác. Hằng nên làm gì?', solution: 'Bình tĩnh lắng nghe, tự xem lại, cảm ơn bạn và tập chờ người khác nói xong.' },
    { title: 'Mục tiêu đo được', problem: 'Thảo đặt mục tiêu phát biểu 3 lần mỗi tuần. Sau 4 tuần ít nhất bao nhiêu lần?', solution: '12 lần.' }
  ],
  exercises: [
    { question: 'Lập bảng ba điểm mạnh và ba điểm cần cố gắng của em.', hints: ['Về học tập, tính cách, kĩ năng.', 'Có thể hỏi ý kiến người thân.'], solution: 'Học sinh tự lập bảng; ví dụ: mạnh – ham đọc sách, vui vẻ, chăm chỉ; cần cố gắng – hay quên đồ, ngủ muộn, nóng tính.' },
    { question: 'Vì sao cần lắng nghe nhận xét của người khác để tự nhận thức?', hints: ['Ta có tự thấy hết mọi điều về mình không?', 'Người khác nhìn từ góc độ nào?'], solution: 'Vì có những điều ta khó tự thấy; người khác giúp ta nhìn nhận khách quan hơn.' },
    { question: 'Viết một mục tiêu cụ thể, đo được để khắc phục một điểm yếu.', hints: ['Có con số, thời gian.', 'Vừa sức.'], solution: 'Ví dụ: “Trong 4 tuần, mỗi tối đi ngủ trước 22 giờ ít nhất 6 ngày/tuần.”' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tự nhận thức bản thân là đánh giá đúng điểm mạnh, điểm yếu của mình.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Câu nói thể hiện sự tự ti:', options: ['“Mình chẳng làm được gì cả”', '“Mình sẽ cố gắng hơn”', '“Mình cần luyện thêm phần này”', '“Mình làm tốt phần vẽ”'], answer: 0, explain: 'Tự ti.' },
    { type: 'mcq', q: 'Cách giúp tự nhận thức bản thân:', options: ['Lắng nghe góp ý của người khác', 'Chỉ nghe lời khen', 'Không bao giờ thử điều mới', 'So bì với bạn'], answer: 0, explain: 'Lắng nghe.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người tự nhận thức tốt là người không có điểm yếu.', answer: false, explain: 'Ai cũng có điểm yếu.' },
    { type: 'short', q: 'Mục tiêu đọc 2 cuốn sách mỗi tháng. Trong 6 tháng đọc bao nhiêu cuốn?', answer: '12', unit: 'cuốn', calc: '2*6', explain: '12.' },
    { type: 'mcq', q: 'Mục tiêu nào cụ thể, đo được?', options: ['Phát biểu 3 lần mỗi tuần', 'Cố gắng hơn', 'Trở nên tốt hơn', 'Học giỏi'], answer: 0, explain: 'Có con số.' },
    { type: 'short', q: 'Kế hoạch phát biểu 3 lần/tuần, sau 5 tuần đã phát biểu 12 lần. Đạt bao nhiêu phần trăm kế hoạch?', answer: '80', unit: '%', calc: '12/15*100', explain: '12 : 15.' },
    { type: 'mcq', q: 'Ý nghĩa của tự nhận thức:', options: ['tự tin, phát huy điểm mạnh', 'luôn tự cao', 'không cần học hỏi', 'tránh xa bạn bè'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
