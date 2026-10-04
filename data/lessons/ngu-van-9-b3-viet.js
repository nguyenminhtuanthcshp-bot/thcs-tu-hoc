/* Ngữ văn 9 – Bài 3. Viết: Nghị luận về một vấn đề cần giải quyết (trong đời sống của học sinh hiện nay). Bài văn mẫu “Áp lực học tập của học sinh lớp 9 – làm gì để vượt qua?” do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b3-viet', {
  objectives: [
    'Viết được bài văn nghị luận về một vấn đề cần giải quyết trong đời sống học sinh: nêu vấn đề, thực trạng, nguyên nhân, tác hại và đề xuất giải pháp khả thi.',
    'Sử dụng lí lẽ chặt chẽ, bằng chứng xác thực từ đời sống học đường; biết phản biện ý kiến trái chiều.',
    'Biết phân tích mối quan hệ nguyên nhân – giải pháp để giải pháp đúng trọng tâm.',
    'Có thái độ tích cực, chủ động giải quyết vấn đề của bản thân và tập thể.'
  ],
  intro: 'Học sinh lớp 9 đứng trước nhiều vấn đề: áp lực thi vào lớp 10, nghiện điện thoại, bạo lực học đường, thiếu kĩ năng sống… Bài văn nghị luận về một vấn đề cần giải quyết giúp em không chỉ “than thở” mà còn tìm ra cách làm cụ thể.',
  text: {
    title: 'Bài văn mẫu: “Áp lực học tập của học sinh lớp 9 – làm gì để vượt qua?”',
    html: `<p><i>Mở bài.</i> Năm lớp 9 là năm “bản lề”: học sinh vừa hoàn thành chương trình trung học cơ sở, vừa chuẩn bị cho kì thi vào lớp 10. Đi kèm với đó là áp lực học tập ngày càng lớn. Làm thế nào để áp lực không trở thành gánh nặng mà thành động lực? Đó là vấn đề cần được giải quyết.</p>
<p><i>Thực trạng.</i> Không khó để bắt gặp những học sinh lớp 9 học từ sáng đến tối: học chính khoá, học thêm, rồi thức khuya ôn bài. Nhiều bạn chia sẻ thường xuyên mệt mỏi, mất ngủ, lo lắng mỗi khi nghe đến điểm số; một số bạn trở nên cáu gắt, thu mình.</p>
<p><i>Nguyên nhân.</i> Có nhiều nguyên nhân. Về khách quan, kì thi vào lớp 10 ở nhiều nơi có tính cạnh tranh; kì vọng của gia đình đôi khi quá cao. Về chủ quan, nhiều bạn chưa biết lập kế hoạch học tập, học dồn trước kì thi, so sánh mình với người khác, và ngại chia sẻ khó khăn.</p>
<p><i>Tác hại.</i> Áp lực kéo dài ảnh hưởng sức khoẻ thể chất và tinh thần, làm giảm hiệu quả học tập – học nhiều mà nhớ ít. Nghiêm trọng hơn, nó có thể khiến các bạn mất niềm vui học tập, rạn nứt quan hệ với gia đình.</p>
<p><i>Giải pháp.</i> Thứ nhất, mỗi học sinh cần lập kế hoạch ôn tập theo tuần, chia nhỏ mục tiêu, xen kẽ nghỉ ngơi, ngủ đủ giấc. Thứ hai, hãy chủ động chia sẻ với cha mẹ, thầy cô về năng lực và mong muốn của mình để cùng đặt mục tiêu phù hợp. Thứ ba, nhà trường có thể tổ chức các buổi tư vấn chọn trường, chọn hướng đi sau lớp 9 để học sinh thấy thi cử không phải con đường duy nhất. Cuối cùng, dành thời gian cho thể thao, sở thích để “nạp lại năng lượng”.</p>
<p><i>Phản biện.</i> Có ý kiến cho rằng: “Không áp lực thì không thành công.” Đúng là một chút áp lực giúp ta cố gắng; nhưng áp lực quá mức lại làm ta kiệt sức. Điều cần thiết không phải xoá bỏ áp lực mà là biết điều chỉnh để nó vừa sức.</p>
<p><i>Kết bài.</i> Áp lực học tập là có thật, nhưng hoàn toàn có thể kiểm soát nếu mỗi người – học sinh, gia đình, nhà trường – cùng hành động. Hãy biến năm lớp 9 thành một năm cố gắng hết mình mà vẫn khoẻ mạnh và vui vẻ.</p>`,
    source: 'Bài văn mẫu do nhóm biên soạn tự viết; các nhận định về thực trạng mang tính khái quát, không trích dẫn khảo sát cụ thể.'
  },
  steps: [
    { title: 'Yêu cầu của kiểu bài', html: `<ul><li>Nêu rõ <b>vấn đề cần giải quyết</b> trong đời sống học sinh.</li>
      <li>Trình bày <b>thực trạng</b> (biểu hiện, bằng chứng), phân tích <b>nguyên nhân</b> (khách quan – chủ quan) và <b>tác hại</b>.</li>
      <li>Đề xuất <b>giải pháp</b> cụ thể, khả thi, phù hợp với từng đối tượng; giải pháp phải tác động vào nguyên nhân.</li>
      <li>Có thể nêu và phản bác ý kiến trái chiều; kết bài khẳng định, kêu gọi hành động.</li></ul>` },
    { title: 'Từ nguyên nhân đến giải pháp', html: `<p>Mỗi nguyên nhân nên có ít nhất một giải pháp tương ứng:</p>`,
      svg: S.flow({ vertical: true, w: 580, items: [{ title: 'Học dồn, thiếu kế hoạch', text: '→ Lập kế hoạch tuần, chia nhỏ mục tiêu, ngủ đủ' }, { title: 'Kì vọng quá cao', text: '→ Chia sẻ với cha mẹ, thầy cô; đặt mục tiêu vừa sức' }, { title: 'Nghĩ thi cử là lối duy nhất', text: '→ Nhà trường tư vấn hướng đi sau lớp 9' }, { title: 'Thiếu nghỉ ngơi, giải trí', text: '→ Thể thao, sở thích để nạp năng lượng' }] }),
      caption: 'Mối quan hệ nguyên nhân – giải pháp trong bài văn mẫu.' },
    { title: 'Dàn ý chung', html: `<table class="tbl"><tr><th>Phần</th><th>Nội dung</th></tr>
      <tr><td>Mở bài</td><td>Giới thiệu vấn đề, nêu sự cần thiết phải giải quyết</td></tr>
      <tr><td>Thân bài</td><td>(1) Thực trạng; (2) Nguyên nhân; (3) Tác hại; (4) Giải pháp; (5) Phản biện ý kiến trái chiều</td></tr>
      <tr><td>Kết bài</td><td>Khẳng định ý nghĩa của việc giải quyết vấn đề; lời kêu gọi, liên hệ bản thân</td></tr></table>`,
      svg: S.mindmap({ center: 'Vấn đề học đường', branches: [{ title: 'Thực trạng', items: ['Biểu hiện cụ thể', 'Bằng chứng'] }, { title: 'Nguyên nhân', items: ['Khách quan', 'Chủ quan'] }, { title: 'Tác hại', items: ['Sức khoẻ, học tập', 'Quan hệ'] }, { title: 'Giải pháp', items: ['Cụ thể, khả thi', 'Đúng nguyên nhân'] }] }),
      caption: 'Sơ đồ các ý chính cần có.' },
    { title: 'Bằng chứng và lí lẽ', html: `<ul><li>Bằng chứng: quan sát ở lớp, trường; trải nghiệm bản thân; thông tin từ nguồn tin cậy (báo chí chính thống, chuyên gia tâm lí, giáo dục).</li>
      <li>Không bịa số liệu; nếu không có khảo sát, hãy nói khái quát (“nhiều bạn”, “không ít học sinh”).</li>
      <li>Lí lẽ phải giải thích được vì sao nguyên nhân dẫn đến thực trạng, vì sao giải pháp có hiệu quả.</li></ul>` },
    { title: 'Kiểm tra và chỉnh sửa', html: `<ul><li>Vấn đề có được nêu rõ ở mở bài?</li>
      <li>Giải pháp có cụ thể (ai làm, làm gì, làm thế nào) và khả thi?</li>
      <li>Có giải pháp cho các nguyên nhân chủ quan – thứ học sinh tự thay đổi được?</li>
      <li>Lời văn khách quan, lịch sự; không đổ lỗi hoàn toàn cho người khác.</li></ul>
      <div class="box warn">Giải pháp chung chung như “cần nâng cao ý thức” là chưa đạt – hãy chỉ ra việc làm cụ thể.</div>` }
  ],
  summary: 'Bài nghị luận về vấn đề cần giải quyết trong đời sống học sinh: nêu vấn đề; phân tích thực trạng, nguyên nhân (khách quan, chủ quan), tác hại; đề xuất giải pháp cụ thể, khả thi, tương ứng với nguyên nhân; phản biện ý kiến trái chiều; kết bài khẳng định và kêu gọi hành động. Bằng chứng phải xác thực, không bịa số liệu.',
  examples: [
    { title: 'Phân loại nguyên nhân', problem: 'Trong bài mẫu, nguyên nhân nào là khách quan, nguyên nhân nào là chủ quan?', solution: 'Khách quan (bên ngoài học sinh): kì thi vào lớp 10 có tính cạnh tranh; kì vọng quá cao của gia đình. Chủ quan (từ bản thân học sinh): chưa biết lập kế hoạch học tập, học dồn, so sánh mình với người khác, ngại chia sẻ khó khăn.' },
    { title: 'Nhận xét giải pháp', problem: 'Vì sao giải pháp “lập kế hoạch ôn tập theo tuần, chia nhỏ mục tiêu, xen kẽ nghỉ ngơi” là giải pháp tốt?', solution: 'Giải pháp tác động trực tiếp vào nguyên nhân chủ quan “học dồn, thiếu kế hoạch”; cụ thể (lập kế hoạch theo tuần, chia nhỏ mục tiêu), khả thi (học sinh tự làm được ngay) và có hiệu quả rõ ràng (giảm quá tải, nhớ lâu hơn).' },
    { title: 'Viết đoạn phản biện', problem: 'Viết đoạn phản biện ý kiến: “Học sinh thì chỉ cần học, không cần chơi thể thao.”', solution: 'Có ý kiến cho rằng học sinh chỉ cần tập trung học, chơi thể thao là lãng phí thời gian. Ý kiến này chưa thấu đáo. Cơ thể khoẻ mạnh và tinh thần thoải mái mới giúp não bộ tiếp thu tốt; nhiều bạn sau một buổi đá bóng hay đạp xe lại học tập hiệu quả hơn. Vì vậy, dành 30 – 45 phút vận động mỗi ngày không làm mất thời gian học mà còn giúp việc học bền bỉ hơn.' }
  ],
  exercises: [
    { question: 'Chọn một vấn đề cần giải quyết trong đời sống học sinh hiện nay và nêu ba biểu hiện của thực trạng.', hints: ['Gợi ý: nghiện điện thoại, bạo lực học đường, lười đọc sách, sử dụng tiếng Việt thiếu chuẩn mực.', 'Biểu hiện phải cụ thể, quan sát được.'], solution: 'Ví dụ vấn đề: học sinh dùng điện thoại quá nhiều. Biểu hiện: (1) Giờ ra chơi nhiều bạn cúi mặt vào điện thoại thay vì trò chuyện, vận động; (2) Thức khuya lướt mạng xã hội, sáng vào lớp buồn ngủ; (3) Làm bài tập thì liên tục bị gián đoạn bởi thông báo tin nhắn, trò chơi.' },
    { question: 'Với vấn đề vừa chọn, lập bảng “nguyên nhân – giải pháp” (ít nhất 3 cặp).', hints: ['Nguyên nhân chủ quan và khách quan.', 'Giải pháp phải cụ thể, khả thi.'], solution: '(1) Thiếu kĩ năng quản lí thời gian → đặt giới hạn thời gian dùng máy, bật chế độ tập trung khi học. (2) Ứng dụng được thiết kế gây nghiện, thông báo liên tục → tắt thông báo không cần thiết, gỡ bớt ứng dụng. (3) Thiếu hoạt động thay thế hấp dẫn → tham gia câu lạc bộ thể thao, đọc sách, nghệ thuật. (4) Gia đình chưa có quy ước → cả nhà thống nhất “giờ không điện thoại” trong bữa ăn.' },
    { question: 'Viết đoạn văn (7 – 9 câu) trình bày phần giải pháp cho vấn đề em chọn.', hints: ['Sắp xếp giải pháp theo đối tượng: bản thân – gia đình – nhà trường.', 'Dùng từ nối: Thứ nhất, Bên cạnh đó, Cuối cùng.'], solution: 'Ví dụ: Để hạn chế việc dùng điện thoại quá mức, trước hết mỗi học sinh cần tự đặt giới hạn thời gian sử dụng, chẳng hạn không quá một giờ giải trí mỗi ngày và không mang máy vào phòng ngủ sau 22 giờ. Khi học bài, hãy bật chế độ tập trung hoặc để máy ở phòng khác. Bên cạnh đó, gia đình có thể cùng con thống nhất những “giờ không điện thoại” như bữa cơm tối, để cả nhà trò chuyện nhiều hơn. Nhà trường có thể tổ chức các câu lạc bộ thể thao, đọc sách, nghệ thuật để học sinh có niềm vui thay thế. Các bạn cũng có thể nhắc nhau, cùng thử thách “một ngày không mạng xã hội”. Những giải pháp ấy đều nhỏ, dễ làm, nhưng nếu kiên trì, chúng ta sẽ lấy lại được thời gian cho bản thân.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Giải pháp trong bài nghị luận về vấn đề cần giải quyết phải:', options: ['cụ thể, khả thi, tác động vào nguyên nhân', 'càng chung chung càng tốt', 'chỉ dành cho người lớn', 'không cần liên quan đến nguyên nhân'], answer: 0, explain: 'Giải pháp đúng nguyên nhân mới hiệu quả.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu không có khảo sát, người viết có thể tự nghĩ ra số liệu cho thuyết phục.', answer: false, explain: 'Không bịa số liệu; nói khái quát nếu không có nguồn.' },
    { type: 'short', q: 'Nguyên nhân xuất phát từ bên ngoài học sinh (như kì vọng của gia đình) gọi là nguyên nhân gì (“khách …”)?', answer: ['khách quan', 'khach quan'], answerText: 'khách quan', explain: 'Nguyên nhân từ bản thân gọi là chủ quan.' },
    { type: 'mcq', q: 'Trình tự hợp lí trong thân bài là:', options: ['Thực trạng → nguyên nhân → tác hại → giải pháp', 'Giải pháp → mở bài → thực trạng', 'Kết bài → nguyên nhân → tác hại', 'Tác hại → kết luận → thực trạng'], answer: 0, explain: 'Đi từ hiện tượng đến cách giải quyết.' },
    { type: 'mcq', q: 'Giải pháp nào cụ thể nhất cho vấn đề học dồn trước kì thi?', options: ['Lập kế hoạch ôn tập theo tuần, chia nhỏ mục tiêu', 'Cần cố gắng hơn', 'Phải có ý thức', 'Học thật nhiều vào đêm trước'], answer: 0, explain: 'Nói rõ làm gì, làm thế nào.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phản biện ý kiến trái chiều giúp bài viết toàn diện và thuyết phục hơn.', answer: true, explain: 'Thể hiện sự cân nhắc nhiều phía.' },
    { type: 'short', q: 'Theo bài mẫu, điều cần thiết không phải là xoá bỏ áp lực mà là biết điều chỉnh để nó vừa … (một chữ).', answer: ['sức', 'suc'], answerText: 'sức', explain: '“vừa sức”.' },
    { type: 'mcq', q: 'Kết bài của kiểu bài này thường:', options: ['khẳng định ý nghĩa của việc giải quyết vấn đề, kêu gọi hành động', 'nêu một vấn đề mới', 'kể lại toàn bộ thân bài', 'bỏ trống'], answer: 0, explain: 'Khép lại và hướng tới hành động.' }
  ]
});
})();
