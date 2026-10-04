/* Ngữ văn 9 – Bài 8. Đọc hiểu văn bản nghị luận xã hội. Ngữ liệu: bài nghị luận “Hoà bình không phải là điều mặc nhiên” do nhóm biên soạn tự viết (không trích văn bản có bản quyền). */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b8-doc', {
  objectives: [
    'Nhận biết luận đề, luận điểm, lí lẽ, bằng chứng trong văn bản nghị luận xã hội; phân tích mối quan hệ giữa chúng.',
    'Phân biệt thông tin khách quan và ý kiến chủ quan của người viết; nhận biết thái độ, tình cảm của người viết.',
    'Hiểu vấn đề được đặt ra: trách nhiệm gìn giữ hoà bình của mỗi người; liên hệ với bản thân.',
    'Có ý thức trân trọng hoà bình, sống có trách nhiệm với cộng đồng và nhân loại.'
  ],
  intro: 'Chúng ta được đến trường mỗi sáng, được ngủ yên mỗi đêm – những điều tưởng như tự nhiên ấy lại là ước mơ của rất nhiều trẻ em trên thế giới. Văn bản nghị luận xã hội dưới đây là một “tiếng nói của lương tri” về giá trị của hoà bình.',
  text: {
    title: 'Hoà bình không phải là điều mặc nhiên',
    html: `<p>Có những điều ta chỉ thấy quý khi đã mất. Không khí là một, sức khoẻ là hai, và hoà bình có lẽ là điều lớn lao nhất trong số đó.</p>
<p>Với nhiều học sinh hôm nay, chiến tranh chỉ là những trang sử, những bộ phim. Chúng ta sinh ra khi tiếng bom đã im, lớn lên giữa những con phố sáng đèn. Vì thế, rất dễ nghĩ rằng hoà bình là điều hiển nhiên, như mặt trời mọc mỗi sáng. Nhưng đó là một suy nghĩ nguy hiểm.</p>
<p><b>Trước hết, hoà bình hôm nay được đổi bằng một cái giá rất đắt.</b> Mỗi nghĩa trang liệt sĩ ở khắp các làng quê Việt Nam là một lời nhắc: đã có biết bao người không trở về để thế hệ sau được sống yên vui. Quên đi cái giá ấy là vô ơn với quá khứ.</p>
<p><b>Thứ hai, hoà bình chưa bao giờ là điều có sẵn ở mọi nơi.</b> Ngay lúc này, trên thế giới vẫn có những vùng đất đang chìm trong xung đột. Ở đó, trẻ em phải rời bỏ nhà cửa, trường học bị phá huỷ, những điều giản dị như một bữa cơm đủ đầy hay một đêm ngủ yên trở nên xa xỉ. Các tổ chức nhân đạo quốc tế nhiều lần lên tiếng về số trẻ em buộc phải bỏ học vì chiến tranh. Hoà bình của chúng ta không phải là trạng thái chung của nhân loại.</p>
<p><b>Thứ ba, hoà bình cần được vun đắp mỗi ngày, bắt đầu từ những điều nhỏ nhất.</b> Có người sẽ hỏi: một học sinh thì làm được gì cho hoà bình thế giới? Câu trả lời là: rất nhiều. Hoà bình lớn được xây từ những hoà bình nhỏ – trong một lớp học không có bạo lực, trong một nhóm bạn biết lắng nghe, trên một mạng xã hội không có lời lẽ thù hằn. Mỗi lần ta chọn đối thoại thay cho nắm đấm, chọn thấu hiểu thay cho định kiến, ta đã góp một viên gạch cho ngôi nhà hoà bình.</p>
<p>Hoà bình giống như sức khoẻ: không ai cảm thấy nó cho đến khi nó bị đe doạ. Vì vậy, đừng đợi mất rồi mới biết quý. Hãy biết ơn, hãy lên tiếng, và hãy sống hoà bình từ hôm nay.</p>`,
    source: 'Bài nghị luận do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Đặc điểm văn bản nghị luận xã hội', html: `<ul><li>Bàn về một <b>vấn đề của đời sống xã hội</b> (hiện tượng, tư tưởng, đạo lí).</li>
      <li>Có <b>luận đề</b> (vấn đề chính), các <b>luận điểm</b> (ý kiến triển khai), <b>lí lẽ</b> và <b>bằng chứng</b>.</li>
      <li>Thể hiện rõ <b>quan điểm, thái độ</b> của người viết; nhằm thuyết phục người đọc.</li></ul>`,
      svg: S.mindmap({ center: 'Hoà bình không mặc nhiên', branches: [{ title: 'Luận điểm 1', items: ['Cái giá rất đắt', 'Nghĩa trang liệt sĩ'] }, { title: 'Luận điểm 2', items: ['Chưa có ở mọi nơi', 'Trẻ em bỏ học'] }, { title: 'Luận điểm 3', items: ['Vun đắp mỗi ngày', 'Lớp học, mạng xã hội'] }, { title: 'Kết luận', items: ['Biết ơn, lên tiếng', 'Sống hoà bình'] }] }),
      caption: 'Hệ thống luận điểm của văn bản.' },
    { title: 'Mối quan hệ luận đề – luận điểm – lí lẽ – bằng chứng', html: `<p>Các yếu tố gắn kết theo tầng bậc:</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Luận đề', text: 'Hoà bình không mặc nhiên' }, { title: 'Luận điểm', text: '3 ý triển khai' }, { title: 'Lí lẽ', text: 'Giải thích, lập luận' }, { title: 'Bằng chứng', text: 'Nghĩa trang, trẻ em…' }] }),
      caption: 'Luận đề được làm sáng tỏ bởi luận điểm, lí lẽ và bằng chứng.' },
    { title: 'Nghệ thuật lập luận', html: `<ul><li><b>Mở bài bằng so sánh</b>: hoà bình như không khí, sức khoẻ – chỉ thấy quý khi mất.</li>
      <li><b>Nêu ý kiến trái chiều rồi bác bỏ</b>: “rất dễ nghĩ rằng hoà bình là điều hiển nhiên… Nhưng đó là một suy nghĩ nguy hiểm.”</li>
      <li><b>Đặt câu hỏi giả định</b>: “một học sinh thì làm được gì?” rồi tự trả lời.</li>
      <li><b>Ẩn dụ</b>: “góp một viên gạch cho ngôi nhà hoà bình”.</li>
      <li><b>Kết bài bằng lời kêu gọi</b> với điệp cấu trúc “hãy…”.</li></ul>` },
    { title: 'Thông tin khách quan và ý kiến chủ quan', html: `<table class="tbl"><tr><th>Thông tin khách quan</th><th>Ý kiến chủ quan</th></tr>
      <tr><td>Có nhiều nghĩa trang liệt sĩ ở các làng quê Việt Nam</td><td>“Quên đi cái giá ấy là vô ơn với quá khứ.”</td></tr>
      <tr><td>Có những vùng trên thế giới đang có xung đột</td><td>“Hoà bình lớn được xây từ những hoà bình nhỏ.”</td></tr></table>
      <div class="box key">Thái độ người viết: trân trọng, biết ơn quá khứ; xót xa với trẻ em vùng chiến sự; tha thiết kêu gọi hành động.</div>` }
  ],
  summary: 'Văn bản nghị luận xã hội bàn về một vấn đề đời sống, gồm luận đề, luận điểm, lí lẽ, bằng chứng gắn kết chặt chẽ và thể hiện quan điểm, thái độ người viết. “Hoà bình không phải là điều mặc nhiên” có ba luận điểm: hoà bình được đổi bằng cái giá rất đắt; chưa có ở mọi nơi; cần vun đắp từ những điều nhỏ nhất. Nghệ thuật: so sánh, bác bỏ ý kiến trái chiều, câu hỏi giả định, ẩn dụ, lời kêu gọi.',
  examples: [
    { title: 'Xác định luận đề', problem: 'Luận đề của văn bản là gì? Nó được thể hiện ở đâu?', solution: 'Luận đề: hoà bình không phải điều hiển nhiên, mỗi người cần trân trọng và vun đắp hoà bình. Luận đề thể hiện ngay ở nhan đề và được nêu rõ ở đoạn hai (“rất dễ nghĩ rằng hoà bình là điều hiển nhiên… Nhưng đó là một suy nghĩ nguy hiểm”), rồi được khẳng định lại ở kết bài.' },
    { title: 'Thao tác bác bỏ', problem: 'Người viết bác bỏ ý kiến nào? Tác dụng?', solution: 'Bác bỏ suy nghĩ “hoà bình là điều hiển nhiên” mà nhiều học sinh có thể mắc phải. Nêu ý kiến trái chiều trước rồi bác bỏ giúp bài viết gần gũi với người đọc (nói đúng điều họ nghĩ) và làm nổi bật luận đề.' },
    { title: 'Lí lẽ và bằng chứng', problem: 'Chỉ ra lí lẽ và bằng chứng của luận điểm thứ nhất.', solution: 'Lí lẽ: hoà bình hôm nay được đổi bằng sự hi sinh của thế hệ trước; quên đi là vô ơn. Bằng chứng: những nghĩa trang liệt sĩ ở khắp các làng quê Việt Nam – bằng chứng cụ thể, quen thuộc, giàu sức gợi.' }
  ],
  exercises: [
    { question: 'Vì sao người viết cho rằng “một học sinh” cũng có thể góp phần gìn giữ hoà bình?', hints: ['Đọc luận điểm thứ ba.', '“Hoà bình lớn” và “hoà bình nhỏ”.'], solution: 'Vì hoà bình lớn được xây từ những hoà bình nhỏ: lớp học không bạo lực, nhóm bạn biết lắng nghe, mạng xã hội không lời lẽ thù hằn. Mỗi khi học sinh chọn đối thoại thay nắm đấm, thấu hiểu thay định kiến, các em đã góp “một viên gạch” cho ngôi nhà hoà bình.' },
    { question: 'Tìm một câu thể hiện rõ thái độ, tình cảm của người viết và phân tích.', hints: ['Chú ý đoạn nói về trẻ em vùng xung đột hoặc lời kêu gọi cuối bài.', 'Từ ngữ biểu cảm.'], solution: 'Ví dụ: “Ở đó, trẻ em phải rời bỏ nhà cửa, trường học bị phá huỷ, những điều giản dị như một bữa cơm đủ đầy hay một đêm ngủ yên trở nên xa xỉ.” Từ “xa xỉ” đặt cạnh những điều “giản dị” tạo đối lập, thể hiện niềm xót thương sâu sắc của người viết với trẻ em vùng chiến sự và khiến người đọc thấm thía giá trị của những gì mình đang có.' },
    { question: 'Viết đoạn văn (6 – 8 câu) trình bày suy nghĩ của em về câu: “Hoà bình giống như sức khoẻ: không ai cảm thấy nó cho đến khi nó bị đe doạ.”', hints: ['Giải thích phép so sánh.', 'Liên hệ bản thân: việc làm cụ thể.'], solution: 'Ví dụ: Câu văn so sánh hoà bình với sức khoẻ thật giản dị mà sâu sắc. Khi khoẻ mạnh, ta ít khi nghĩ về sức khoẻ; chỉ khi ốm đau ta mới thấy nó quý giá. Hoà bình cũng vậy: sống giữa bình yên, ta dễ coi đó là điều tự nhiên. Nhưng với trẻ em ở những vùng xung đột, được đến trường đã là một ước mơ. Câu văn nhắc em đừng đợi mất đi mới biết trân trọng. Em có thể bắt đầu từ việc nhỏ: không tham gia bạo lực học đường, không viết lời lẽ thù ghét trên mạng. Biết ơn những người đã hi sinh cũng là một cách giữ gìn hoà bình.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Văn bản “Hoà bình không phải là điều mặc nhiên” thuộc kiểu văn bản:', options: ['nghị luận xã hội', 'nghị luận văn học', 'văn bản thông tin', 'truyện ngắn'], answer: 0, explain: 'Bàn về vấn đề đời sống.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Văn bản có ba luận điểm chính.', answer: true, explain: 'Cái giá; chưa có ở mọi nơi; vun đắp mỗi ngày.' },
    { type: 'short', q: 'Người viết so sánh hoà bình với không khí và sức … (một chữ).', answer: ['khoẻ', 'khỏe', 'khoe'], answerText: 'khoẻ', explain: 'Chỉ thấy quý khi mất.' },
    { type: 'mcq', q: 'Câu nào là ý kiến chủ quan?', options: ['“Quên đi cái giá ấy là vô ơn với quá khứ.”', 'Có nhiều nghĩa trang liệt sĩ ở các làng quê.', 'Có những vùng đất đang có xung đột.', 'Chúng ta sinh ra khi tiếng bom đã im.'], answer: 0, explain: 'Đánh giá của người viết.' },
    { type: 'mcq', q: 'Hình ảnh “góp một viên gạch cho ngôi nhà hoà bình” là biện pháp:', options: ['ẩn dụ', 'liệt kê', 'nói giảm', 'chơi chữ'], answer: 0, explain: 'Việc làm nhỏ góp phần xây hoà bình.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nêu ý kiến trái chiều rồi bác bỏ làm bài nghị luận kém thuyết phục.', answer: false, explain: 'Giúp làm nổi bật luận đề.' },
    { type: 'short', q: 'Yếu tố làm sáng tỏ luận điểm gồm lí lẽ và … chứng (một chữ).', answer: ['bằng', 'bang'], answerText: 'bằng', explain: 'bằng chứng.' },
    { type: 'mcq', q: 'Kết bài của văn bản sử dụng:', options: ['lời kêu gọi với điệp cấu trúc “hãy…”', 'một câu chuyện dài', 'bảng số liệu', 'lời thoại kịch'], answer: 0, explain: '“Hãy biết ơn, hãy lên tiếng…”' }
  ]
});
})();
