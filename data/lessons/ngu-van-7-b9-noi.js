/* Ngữ văn 7 – Bài 9. Nói và nghe: Giải thích quy tắc hoặc luật lệ trong một hoạt động hay trò chơi. Ví dụ: trò chơi dân gian “Rồng rắn lên mây” (bài đồng dao dân gian, có nhiều dị bản); lời trình bày mẫu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b9-noi', {
  objectives: [
    'Giải thích được quy tắc, luật lệ của một hoạt động hoặc trò chơi một cách rõ ràng, mạch lạc.',
    'Sử dụng phương tiện hỗ trợ (sơ đồ, làm mẫu động tác) để người nghe dễ hiểu.',
    'Biết lắng nghe, đặt câu hỏi làm rõ và nhận xét phần trình bày.'
  ],
  intro: 'Có thể em đã từng chơi “Rồng rắn lên mây” mà chưa bao giờ phải giải thích luật cho người khác. Hôm nay, em sẽ đóng vai người hướng dẫn: nói sao cho một bạn chưa từng chơi nghe xong là chơi được ngay!',
  steps: [
    { title: 'Yêu cầu của bài nói', html: `<ul><li>Giới thiệu tên trò chơi, hoạt động; mục đích, ý nghĩa.</li><li>Giải thích lần lượt: người chơi, dụng cụ, cách chơi, luật thắng thua, điều cần tránh.</li><li>Trình bày theo trình tự; dùng từ ngữ chỉ thứ tự (<i>đầu tiên, tiếp theo, sau đó, cuối cùng</i>).</li><li>Kết hợp làm mẫu, sơ đồ, tranh ảnh; kiểm tra người nghe đã hiểu chưa.</li></ul>` },
    { title: 'Quy trình', html: `<p>Chuẩn bị và trình bày theo bốn bước:</p>`,
      svg: S.flow({ items: [{ title: 'Chọn trò chơi', text: 'Em nắm chắc luật' }, { title: 'Ghi dàn ý', text: 'Từ khoá theo thứ tự' }, { title: 'Chuẩn bị hỗ trợ', text: 'Sơ đồ, bạn làm mẫu' }, { title: 'Trình bày, hỏi đáp', text: 'Mời bạn chơi thử' }] }),
      caption: 'Quy trình giải thích luật chơi.' },
    { title: 'Tư liệu: Rồng rắn lên mây', html: `<div class="box text"><div class="t-title">Đồng dao (một dị bản)</div>
      <p class="poem">Rồng rắn lên mây<br>Có cây lúc lắc<br>Có nhà điểm binh<br>Hỏi thăm thầy thuốc có nhà hay không?</p>
      <div class="t-source">Đồng dao dân gian, có nhiều dị bản.</div></div>
      <table class="tbl"><tr><th>Mục</th><th>Luật chơi (phổ biến)</th></tr>
      <tr><td>Người chơi</td><td>Khoảng 6–10 bạn; một bạn làm “thầy thuốc”, các bạn còn lại nối đuôi nhau, tay nắm vạt áo hoặc ôm eo bạn phía trước thành “rồng rắn”. Bạn đứng đầu là “đầu rắn”, bạn cuối là “khúc đuôi”.</td></tr>
      <tr><td>Cách chơi</td><td>Rồng rắn vừa đi vòng vèo vừa hát đồng dao, đến trước mặt thầy thuốc. Thầy thuốc và đầu rắn đối đáp (xin thuốc, hỏi thăm…). Cuối cùng thầy thuốc đòi “khúc đuôi”.</td></tr>
      <tr><td>Bắt đuôi</td><td>Thầy thuốc chạy tìm cách chạm vào khúc đuôi; đầu rắn dang tay ngăn cản, cả đoàn uốn lượn để bảo vệ đuôi, không được đứt đoàn.</td></tr>
      <tr><td>Thắng thua</td><td>Nếu thầy thuốc bắt được khúc đuôi, bạn đó bị loại hoặc đổi vai làm thầy thuốc (tuỳ nơi). Nếu đoàn bị đứt, lượt đó cũng bị tính thua.</td></tr></table>` },
    { title: 'Bài nói mẫu (rút gọn)', html: `<div class="box text"><p>“Chào các bạn! Hôm nay mình sẽ hướng dẫn trò chơi dân gian “Rồng rắn lên mây”. <b>Đầu tiên</b>, chúng ta cần một bạn làm thầy thuốc, các bạn còn lại xếp hàng, tay nắm vạt áo bạn phía trước. <b>Tiếp theo</b>, cả đoàn vừa đi vừa hát bài đồng dao – mình sẽ hát mẫu một lần nhé. <b>Sau đó</b>, bạn đầu rắn và thầy thuốc đối đáp. <b>Cuối cùng</b>, thầy thuốc đòi khúc đuôi và chạy bắt; đầu rắn dang tay che chắn. Nhớ nhé: đoàn không được đứt, và không ai được xô ngã bạn. Bạn nào còn chưa rõ phần nào không?”</p></div>
      <p class="muted">Lời trình bày do nhóm biên soạn viết để minh hoạ.</p>` },
    { title: 'Nghe, hỏi và nhận xét', html: `<p>Người nghe cũng góp phần làm buổi trình bày thành công:</p>`,
      svg: S.mindmap({ center: 'Người nghe', branches: [{ title: 'Ghi chép', items: ['Các bước chơi', 'Luật thắng thua'] }, { title: 'Hỏi làm rõ', items: ['Nếu đứt đoàn thì sao?', 'Bao nhiêu người là vừa?'] }, { title: 'Nhận xét', items: ['Rõ ràng, đúng trình tự?', 'Có làm mẫu, sơ đồ?'] }] }),
      caption: 'Vai trò của người nghe.' }
  ],
  summary: 'Giải thích quy tắc, luật lệ trò chơi: giới thiệu trò chơi và ý nghĩa; lần lượt nêu người chơi, dụng cụ, cách chơi, luật thắng thua, điều cần tránh; dùng từ ngữ chỉ trình tự (đầu tiên, tiếp theo, sau đó, cuối cùng); kết hợp làm mẫu, sơ đồ; kiểm tra người nghe đã hiểu. Người nghe ghi chép, hỏi làm rõ, nhận xét.',
  examples: [
    { title: 'Mở đầu bài nói', problem: 'Viết lời mở đầu khi giải thích luật trò chơi “Bịt mắt bắt dê”.', solution: '“Chào các bạn! Có ai từng thử bắt một chú “dê” khi mắt bị bịt kín chưa? Hôm nay mình sẽ giải thích luật chơi “Bịt mắt bắt dê” – một trò chơi dân gian vui nhộn, rèn khả năng nghe và phán đoán.”' },
    { title: 'Dùng từ chỉ trình tự', problem: 'Sắp xếp các bước và thêm từ chỉ trình tự: (a) người bịt mắt đi tìm “dê”; (b) chọn một bạn bịt mắt; (c) các bạn khác vừa tránh vừa kêu “be be”; (d) bắt được và đoán đúng tên thì đổi vai.', solution: '“Đầu tiên, chọn một bạn bịt mắt (b). Tiếp theo, bạn đó đi tìm “dê” (a), trong khi các bạn khác vừa tránh vừa kêu “be be” (c). Cuối cùng, nếu bắt được và đoán đúng tên bạn bị bắt thì hai bạn đổi vai (d).”' },
    { title: 'Trả lời câu hỏi', problem: 'Người nghe hỏi: “Nếu thầy thuốc chạm vào bạn ở giữa đoàn thì có tính không?” Em trả lời thế nào?', solution: '“Theo luật phổ biến thì không tính, thầy thuốc chỉ được bắt khúc đuôi. Nhưng trước khi chơi, cả nhóm có thể thống nhất lại luật cho phù hợp.”' }
  ],
  exercises: [
    { question: 'Lập dàn ý bài nói giải thích luật trò chơi “Ô ăn quan” (hoặc một trò chơi em biết).', hints: ['Người chơi, dụng cụ, bàn chơi.', 'Cách rải quân, ăn quân, kết thúc ván.'], solution: 'Gợi ý (Ô ăn quan): Mở đầu – giới thiệu. Người chơi: 2 người. Dụng cụ: bàn kẻ 10 ô dân và 2 ô quan, sỏi làm quân. Cách chơi: lần lượt bốc quân ở một ô của mình rải đều theo một chiều; gặp ô trống rồi đến ô có quân thì được ăn quân ô đó. Kết thúc: khi hết quân ở hai ô quan; ai nhiều quân hơn thắng. Lưu ý: luật chi tiết mỗi nơi có thể khác. Kết thúc – mời bạn chơi thử.' },
    { question: 'Chỉ ra điểm chưa tốt và sửa: “Trò này dễ lắm, cứ chạy thôi, ai bắt được thì thắng.”', hints: ['Người nghe có biết ai bắt ai, bắt thế nào không?', 'Thiếu trình tự và luật cụ thể.'], solution: 'Lời giải thích quá chung chung: không nêu người chơi, vai trò, cách bắt, điều kiện thắng. Sửa: “Trò chơi có một người đuổi và nhiều người chạy trong phạm vi sân đã kẻ. Người đuổi chạm tay vào ai thì người đó thành người đuổi. Ai chạy ra ngoài vạch cũng bị tính là bị bắt.”' },
    { question: 'Viết 3 câu hỏi người nghe có thể đặt ra sau khi nghe giải thích luật “Rồng rắn lên mây”.', hints: ['Hỏi về số người, luật đứt đoàn, đổi vai.', 'Câu hỏi ngắn, cụ thể.'], solution: 'Ví dụ: 1) Nếu đoàn bị đứt thì xử lí thế nào? 2) Thầy thuốc bắt được khúc đuôi thì bạn đó bị loại hay đổi vai? 3) Có giới hạn phạm vi chạy không?' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi giải thích luật chơi, nên dùng các từ ngữ nào để thể hiện trình tự?', options: ['Đầu tiên, tiếp theo, sau đó, cuối cùng', 'Tuy nhiên, ngược lại', 'Ôi, chao ôi', 'Rất, quá, lắm'], answer: 0, explain: 'Từ ngữ chỉ trình tự.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Làm mẫu động tác giúp người nghe hiểu luật chơi nhanh hơn.', answer: true, explain: 'Phương tiện hỗ trợ trực quan.' },
    { type: 'mcq', q: 'Trong “Rồng rắn lên mây”, thầy thuốc tìm cách bắt:', options: ['Khúc đuôi', 'Đầu rắn', 'Bất kì ai', 'Người hát to nhất'], answer: 0, explain: 'Thầy thuốc đòi khúc đuôi.' },
    { type: 'mcq', q: 'Vai trò của đầu rắn khi thầy thuốc bắt đuôi là:', options: ['Dang tay ngăn cản, bảo vệ đuôi', 'Đứng yên', 'Giúp thầy thuốc bắt', 'Rời khỏi đoàn'], answer: 0, explain: 'Đầu rắn che chắn cho đoàn.' },
    { type: 'short', q: 'Điền tiếng còn thiếu vào câu đồng dao: “Rồng rắn lên …”', answer: ['mây'], answerText: 'mây', explain: '“Rồng rắn lên mây”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người trình bày không cần kiểm tra người nghe đã hiểu hay chưa.', answer: false, explain: 'Nên hỏi lại, mời chơi thử.' },
    { type: 'mcq', q: 'Câu hỏi nào của người nghe giúp làm rõ luật chơi?', options: ['Nếu đoàn bị đứt thì tính thế nào?', 'Bạn thích màu gì?', 'Hôm nay ăn gì?', 'Mấy giờ rồi?'], answer: 0, explain: 'Câu hỏi liên quan trực tiếp luật chơi.' },
    { type: 'mcq', q: 'Vì sao nên nói “luật có thể khác nhau tuỳ nơi” khi giới thiệu trò chơi dân gian?', options: ['Vì trò chơi dân gian thường có nhiều dị bản', 'Để người nghe bối rối', 'Vì không ai biết luật', 'Để khỏi phải giải thích'], answer: 0, explain: 'Trò chơi dân gian truyền miệng nên có dị bản.' }
  ]
});
})();
