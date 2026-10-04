/* Ngữ văn 7 – Bài 8. Viết: Bài văn nghị luận về một vấn đề trong đời sống (trình bày ý kiến phản đối). Bài văn mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b8-viet', {
  objectives: [
    'Viết được bài văn nghị luận trình bày ý kiến phản đối một quan niệm, cách hiểu khác về vấn đề đời sống.',
    'Nêu được lí lẽ, bằng chứng thuyết phục để chỉ ra chỗ chưa đúng của ý kiến bị phản đối và khẳng định ý kiến của mình.',
    'Thể hiện thái độ tôn trọng người có ý kiến khác.'
  ],
  intro: '“Đã có Internet thì cần gì đọc sách!” – em đã bao giờ nghe câu này chưa? Nếu không đồng tình, em cần làm nhiều hơn là nói “Không đúng!”: em phải chỉ ra vì sao không đúng.',
  steps: [
    { title: 'Yêu cầu của kiểu bài', html: `<ul><li>Nêu rõ <b>ý kiến bị phản đối</b> và thể hiện thái độ <b>phản đối</b> của người viết.</li><li>Chỉ ra những <b>điểm chưa hợp lí</b> của ý kiến đó bằng lí lẽ và bằng chứng.</li><li>Nêu <b>quan điểm đúng</b> mà người viết đề xuất.</li><li>Ngôn ngữ khách quan, <b>tôn trọng</b> người có ý kiến khác; phản đối ý kiến, không công kích con người.</li></ul>` },
    { title: 'So sánh bài tán thành và phản đối', html: `<table class="tbl"><tr><th></th><th>Tán thành (Bài 6)</th><th>Phản đối (Bài 8)</th></tr>
      <tr><td>Thái độ</td><td>Đồng tình với ý kiến</td><td>Không đồng tình với ý kiến</td></tr>
      <tr><td>Lí lẽ</td><td>Chứng minh ý kiến đúng</td><td>Chỉ ra ý kiến sai, thiếu sót ở đâu</td></tr>
      <tr><td>Kết quả</td><td>Khẳng định ý kiến</td><td>Bác bỏ ý kiến, đề xuất cách nhìn đúng</td></tr></table>` },
    { title: 'Lập dàn ý', html: `<p>Đề: <i>Có ý kiến cho rằng: “Thời đại Internet, học sinh không cần đọc sách nữa.” Hãy viết bài văn trình bày ý kiến phản đối.</i></p>`,
      svg: S.flow({ items: [{ title: 'Mở bài', text: 'Nêu ý kiến, bày tỏ phản đối' }, { title: 'Thân bài 1', text: 'Lí do có ý kiến đó (thừa nhận phần hợp lí)' }, { title: 'Thân bài 2', text: '2–3 lí lẽ phản bác + bằng chứng' }, { title: 'Kết bài', text: 'Khẳng định quan điểm đúng, lời khuyên' }] }),
      caption: 'Dàn ý bài văn trình bày ý kiến phản đối.' },
    { title: 'Tìm lí lẽ phản bác', html: `<table class="tbl"><tr><th>Lí lẽ</th><th>Bằng chứng</th></tr>
      <tr><td>Thông tin trên mạng nhiều nhưng không phải lúc nào cũng chính xác; sách được biên tập, kiểm duyệt kĩ</td><td>Tin giả lan truyền trên mạng xã hội; sách giáo khoa, từ điển được hội đồng chuyên môn thẩm định</td></tr>
      <tr><td>Đọc sách giúp rèn sự tập trung và tư duy sâu; lướt mạng dễ làm phân tán</td><td>Đọc hết một cuốn tiểu thuyết cần nhiều giờ tập trung liên tục; lướt mạng thường chỉ xem mỗi bài vài giây</td></tr>
      <tr><td>Sách văn học bồi dưỡng tâm hồn, trí tưởng tượng</td><td>Đọc “Không gia đình”, em hiểu hơn về lòng nhân hậu, nghị lực</td></tr></table>
      <div class="box note">Thừa nhận phần hợp lí của ý kiến khác (Internet tra cứu nhanh, tiện lợi) giúp bài viết khách quan, thuyết phục hơn.</div>` },
    { title: 'Bài viết tham khảo (rút gọn)', html: `<div class="box text"><p>Gần đây, em nghe một số bạn nói: “Thời đại Internet, học sinh không cần đọc sách nữa.” Em không đồng tình với ý kiến này.</p>
      <p>Phải thừa nhận, Internet rất tiện lợi: chỉ vài giây, ta có thể tìm được thông tin mình cần. Có lẽ vì thế mà một số bạn nghĩ sách đã trở nên thừa.</p>
      <p>Tuy nhiên, thông tin trên mạng không phải lúc nào cũng chính xác. Những tin giả vẫn được chia sẻ hằng ngày trên mạng xã hội. Trong khi đó, sách – nhất là sách giáo khoa, từ điển, sách khoa học – được biên soạn và kiểm duyệt cẩn thận.</p>
      <p>Hơn nữa, đọc sách rèn cho ta khả năng tập trung và suy nghĩ sâu. Lướt mạng, ta chỉ đọc lướt từng mẩu tin ngắn; đọc một cuốn sách, ta phải theo dõi mạch ý từ đầu đến cuối, tự đặt câu hỏi và suy ngẫm.</p>
      <p>Không chỉ vậy, sách văn học còn nuôi dưỡng tâm hồn. Theo chân cậu bé Rémi trong “Không gia đình”, em học được lòng biết ơn và nghị lực vượt khó – điều mà những dòng tin vắn khó mang lại.</p>
      <p>Tóm lại, Internet là công cụ hữu ích nhưng không thể thay thế sách. Học sinh chúng ta nên kết hợp cả hai: dùng Internet để tra cứu nhanh, và dành thời gian mỗi ngày để đọc sách.</p></div>
      <p class="muted">Bài viết do nhóm biên soạn tự viết để minh hoạ.</p>` }
  ],
  summary: 'Bài nghị luận phản đối: mở bài nêu ý kiến bị phản đối và thái độ không đồng tình; thân bài có thể thừa nhận phần hợp lí, rồi đưa 2–3 lí lẽ kèm bằng chứng chỉ ra chỗ chưa đúng; kết bài khẳng định quan điểm đúng và lời khuyên. Luôn phản đối ý kiến chứ không công kích người nêu ý kiến.',
  examples: [
    { title: 'Mở bài phản đối', problem: 'Viết mở bài cho đề: phản đối ý kiến “Học sinh không cần làm việc nhà, chỉ cần học”.', solution: '“Có người cho rằng học sinh chỉ cần tập trung học, không cần làm việc nhà. Em không đồng tình với ý kiến này, bởi làm việc nhà cũng là một cách học quan trọng để trưởng thành.”' },
    { title: 'Thừa nhận phần hợp lí', problem: 'Với ý kiến “Chơi game là hoàn toàn có hại”, hãy viết một câu thừa nhận phần hợp lí trước khi phản bác.', solution: '“Đúng là nếu chơi game quá nhiều, học sinh có thể bỏ bê học tập và ảnh hưởng sức khoẻ. Tuy nhiên, nói game hoàn toàn có hại là chưa chính xác, vì một số trò chơi giúp rèn tư duy logic, khả năng phối hợp nhóm.”' },
    { title: 'Tránh công kích cá nhân', problem: 'Sửa câu: “Người nói câu đó thật lười biếng và thiếu hiểu biết.”', solution: '“Ý kiến ấy có lẽ chưa xem xét hết những lợi ích lâu dài của việc đọc sách.” – nhận xét vào ý kiến, không xúc phạm người nêu ý kiến.' }
  ],
  exercises: [
    { question: 'Lập dàn ý phản đối ý kiến: “Thất bại là điều đáng xấu hổ”.', hints: ['Thất bại có giá trị gì?', 'Bằng chứng: câu chuyện vượt qua thất bại.'], solution: 'MB: nêu ý kiến, phản đối. TB: thừa nhận thất bại gây buồn, tiếc; lí lẽ 1 – thất bại cho ta bài học, biết mình sai ở đâu (bằng chứng: lần thi không tốt giúp em đổi cách ôn tập); lí lẽ 2 – ai cũng từng thất bại, xấu hổ chỉ khi không chịu cố gắng (bằng chứng: nhà phát minh thử nhiều lần mới thành công); lí lẽ 3 – sợ thất bại khiến ta không dám thử. KB: thất bại không đáng xấu hổ, quan trọng là đứng dậy.' },
    { question: 'Chỉ ra lỗi trong đoạn phản đối: “Ý kiến đó sai hoàn toàn. Ai nói vậy là không biết gì. Tôi phản đối.”', hints: ['Có lí lẽ, bằng chứng không?', 'Thái độ có tôn trọng không?'], solution: 'Lỗi: chỉ khẳng định “sai” mà không có lí lẽ, bằng chứng; câu 2 công kích người nêu ý kiến, thiếu tôn trọng. Cần sửa: nêu cụ thể điểm chưa hợp lí, đưa lí lẽ và bằng chứng, dùng lời lẽ ôn hoà.' },
    { question: 'Viết đoạn văn (4–5 câu) phản đối ý kiến: “Chỉ những người giỏi mới cần đọc sách”.', hints: ['Sách hữu ích với mọi người như thế nào?', 'Dùng từ ngữ liên kết.'], solution: 'Ví dụ: “Em không đồng tình với ý kiến chỉ người giỏi mới cần đọc sách. Thực ra, sách là người bạn của tất cả mọi người, bất kể giỏi hay chưa giỏi. Người chưa giỏi càng cần đọc để bổ sung kiến thức còn thiếu. Chẳng hạn, bạn Nam lớp em từng học yếu môn Văn, nhờ đọc truyện mỗi tối mà cách diễn đạt tiến bộ rõ rệt. Vì vậy, ai cũng nên đọc sách.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Trong bài phản đối, mở bài cần:', options: ['Nêu ý kiến bị phản đối và thái độ không đồng tình', 'Kể một câu chuyện cổ tích', 'Chỉ giới thiệu bản thân', 'Không nêu ý kiến'], answer: 0, explain: 'Nêu vấn đề và thái độ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể thừa nhận phần hợp lí của ý kiến khác trước khi phản bác.', answer: true, explain: 'Giúp bài viết khách quan.' },
    { type: 'mcq', q: 'Cách phản đối nào phù hợp?', options: ['Chỉ ra chỗ chưa hợp lí bằng lí lẽ, bằng chứng', 'Chê bai người nêu ý kiến', 'Nói to hơn người khác', 'Chỉ nói “sai rồi”'], answer: 0, explain: 'Phản đối có căn cứ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài phản đối không cần đề xuất quan điểm đúng.', answer: false, explain: 'Cần nêu cách nhìn đúng thay thế.' },
    { type: 'mcq', q: 'Từ ngữ nào hay dùng để chuyển từ phần thừa nhận sang phần phản bác?', options: ['Tuy nhiên', 'Ngày xửa ngày xưa', 'Thế là', 'Bỗng nhiên'], answer: 0, explain: '“Tuy nhiên” – quan hệ tương phản.' },
    { type: 'short', q: 'Kiểu bài nghị luận ở Bài 8 trình bày ý kiến gì? (ghi hai tiếng: tán thành hay phản đối)', answer: ['phản đối'], answerText: 'phản đối', explain: 'Bài 6 tán thành, Bài 8 phản đối.' },
    { type: 'mcq', q: 'Lí lẽ nào phản bác ý kiến “Không cần đọc sách vì đã có Internet” thuyết phục nhất?', options: ['Thông tin trên mạng không phải lúc nào cũng chính xác, sách được kiểm duyệt kĩ', 'Sách có màu đẹp', 'Vì mẹ bảo thế', 'Vì sách rẻ hơn điện thoại'], answer: 0, explain: 'Lí lẽ có căn cứ, liên quan trực tiếp.' },
    { type: 'mcq', q: 'Thái độ cần có khi viết bài phản đối:', options: ['Khách quan, tôn trọng', 'Gay gắt, mỉa mai', 'Thờ ơ', 'Chế giễu'], answer: 0, explain: 'Tôn trọng người có ý kiến khác.' }
  ]
});
})();
