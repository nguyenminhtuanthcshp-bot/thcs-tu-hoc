/* Ngữ văn 8 – Bài 4. Viết: Phân tích một tác phẩm văn học (thơ trào phúng). Ngữ liệu: bài lục bát trào phúng “Anh Tư ‘biết tuốt’” do nhóm biên soạn tự sáng tác; dàn ý và đoạn văn mẫu do nhóm biên soạn viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b4-viet', {
  objectives: [
    'Nắm được yêu cầu của bài văn phân tích một bài thơ trào phúng.',
    'Chỉ ra được đối tượng, mâu thuẫn trào phúng, thủ pháp gây cười và thái độ của tác giả; lập được dàn ý.',
    'Viết được bài văn phân tích có luận điểm rõ, dẫn chứng chính xác, lời văn mạch lạc.',
    'Biết tự đánh giá, chỉnh sửa bài viết.'
  ],
  intro: 'Phân tích thơ trào phúng giống như “giải mã” một câu chuyện cười: em phải chỉ ra được vì sao người đọc bật cười, tiếng cười ấy nhắm vào ai, và sau tiếng cười là thông điệp gì. Hãy thực hành với bài lục bát trào phúng dưới đây.',
  text: {
    title: 'Anh Tư “biết tuốt” (thơ lục bát)',
    html: `<div class="poem">Anh Tư hiểu biết hơn người,<br>Chuyện gì anh cũng nói cười như không.<br>Hỏi sao trời có cầu vồng,<br>Anh rằng: “Thợ vẽ sơn chồng bảy phen!”<br>Hỏi sao đom đóm sáng đèn,<br>Anh rằng: “Đuôi nó cắm ven đường dây!”<br>Cả làng nghe mãi cũng hay,<br>Hỏi anh đi học mấy ngày… anh lơ!</div>
<p><i>Chú thích:</i> <i>biết tuốt</i>: cái gì cũng (tự cho là) biết; <i>lơ</i>: làm như không nghe thấy.</p>`,
    source: 'Bài lục bát trào phúng do nhóm biên soạn tự sáng tác để minh hoạ.'
  },
  steps: [
    { title: 'Yêu cầu của bài văn phân tích thơ trào phúng', html: `<ul><li>Giới thiệu tác giả (nếu có), bài thơ; nêu khái quát đối tượng và thái độ trào phúng.</li>
      <li>Chỉ ra <b>đối tượng</b> bị châm biếm và <b>mâu thuẫn trào phúng</b> (danh – thực, lời nói – việc làm, vẻ ngoài – bản chất).</li>
      <li>Phân tích <b>thủ pháp gây cười</b>: tương phản, phóng đại, điệp, chơi chữ, kết thúc bất ngờ, từ ngữ mỉa mai… kèm dẫn chứng.</li>
      <li>Nêu <b>thái độ</b> của tác giả và <b>thông điệp</b>; đánh giá giá trị bài thơ.</li></ul>` },
    { title: 'Tìm ý: “giải mã” tiếng cười', html: `<table class="tbl"><tr><th>Câu hỏi</th><th>Trả lời (bài “Anh Tư ‘biết tuốt’”)</th></tr>
      <tr><td>Cười ai?</td><td>Kiểu người không hiểu biết mà thích khoe khoang, “cái gì cũng biết”</td></tr>
      <tr><td>Mâu thuẫn ở đâu?</td><td>Tự cho là “hiểu biết hơn người” nhưng trả lời toàn điều vô lí; rất ít học</td></tr>
      <tr><td>Cười bằng cách nào?</td><td>Điệp cấu trúc hỏi – đáp; phóng đại, vô lí; kết thúc bất ngờ “anh lơ”</td></tr>
      <tr><td>Thái độ, thông điệp?</td><td>Châm biếm nhẹ nhàng; khuyên khiêm tốn, học hỏi thật sự</td></tr></table>` },
    { title: 'Lập dàn ý', html: `<p>Dàn ý theo các luận điểm:</p>`,
      svg: S.flow({ vertical: true, w: 580, items: [{ title: 'Mở bài', text: 'Giới thiệu bài thơ, đối tượng châm biếm: thói “biết tuốt”' }, { title: 'Luận điểm 1', text: 'Chân dung tự phụ: “hiểu biết hơn người”, “nói cười như không”' }, { title: 'Luận điểm 2', text: 'Hai lần hỏi – đáp: câu trả lời vô lí làm lộ bản chất' }, { title: 'Luận điểm 3', text: 'Kết thúc bất ngờ “anh lơ” và thông điệp' }, { title: 'Kết bài', text: 'Đánh giá nghệ thuật (lục bát, giọng hóm hỉnh); bài học' }] }),
      caption: 'Dàn ý bài văn phân tích bài thơ trào phúng “Anh Tư ‘biết tuốt’”.' },
    { title: 'Đoạn văn mẫu (luận điểm 2)', html: `<p>Bộ mặt thật của anh Tư lộ ra qua hai lần hỏi – đáp. Người làng hỏi những câu rất bình thường: vì sao có cầu vồng, vì sao đom đóm phát sáng. Anh Tư trả lời không chút ngập ngừng: cầu vồng là do “thợ vẽ sơn chồng bảy phen”, đom đóm sáng vì “đuôi nó cắm ven đường dây”. Cấu trúc “Hỏi sao… / Anh rằng…” lặp lại tạo nhịp điệu như một trò chơi đố vui, còn câu trả lời càng tự tin bao nhiêu thì càng vô lí bấy nhiêu. Tiếng cười bật ra từ mâu thuẫn giữa vẻ “hiểu biết hơn người” và những lời giải thích ngô nghê, phản khoa học.</p>` },
    { title: 'Kiểm tra và chỉnh sửa', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Có / Chưa</th></tr>
      <tr><td>Xác định đúng đối tượng và mâu thuẫn trào phúng</td><td>☐</td></tr><tr><td>Phân tích ít nhất hai thủ pháp gây cười, có dẫn chứng</td><td>☐</td></tr>
      <tr><td>Nêu thái độ tác giả, thông điệp</td><td>☐</td></tr><tr><td>Đánh giá nét đặc sắc nghệ thuật (thể thơ, giọng điệu)</td><td>☐</td></tr>
      <tr><td>Bố cục rõ, diễn đạt mạch lạc, không lỗi chính tả</td><td>☐</td></tr></table>
      <div class="box key">Lỗi hay gặp: chỉ kể lại nội dung mà không giải thích vì sao buồn cười; quên nêu thái độ, thông điệp của tác giả.</div>` }
  ],
  summary: 'Bài văn phân tích thơ trào phúng cần: giới thiệu bài thơ; chỉ ra đối tượng và mâu thuẫn trào phúng; phân tích thủ pháp gây cười (tương phản, phóng đại, điệp, chơi chữ, kết thúc bất ngờ…) có dẫn chứng; nêu thái độ tác giả, thông điệp và đánh giá nghệ thuật. Tránh kể lại nội dung mà không lí giải tiếng cười.',
  examples: [
    { title: 'Viết mở bài', problem: 'Viết mở bài trực tiếp cho bài văn phân tích bài thơ “Anh Tư ‘biết tuốt’”.', solution: 'Trong cuộc sống, ta dễ gặp những người chẳng biết bao nhiêu mà lúc nào cũng ra vẻ “biết tuốt”. Bài thơ lục bát trào phúng “Anh Tư ‘biết tuốt’” đã khắc hoạ kiểu người ấy bằng một tiếng cười hóm hỉnh mà thấm thía, qua đó nhắc nhở mỗi người về đức tính khiêm tốn và tinh thần học hỏi.' },
    { title: 'Phân tích kết thúc bất ngờ', problem: 'Phân tích câu kết “Hỏi anh đi học mấy ngày… anh lơ!”.', solution: 'Câu kết đảo chiều bất ngờ: người làng không hỏi chuyện trời đất nữa mà hỏi chính anh Tư đi học được bao lâu. Dấu chấm lửng tạo khoảng lặng chờ đợi, rồi từ “lơ” khép lại – anh làm như không nghe. Chỉ một từ đã “lật tẩy” anh Tư: người tự nhận hiểu biết hơn người thực ra ít học. Tiếng cười bật ra vừa vui vừa thâm thuý.' },
    { title: 'Nhận xét thái độ của tác giả', problem: 'Thái độ của tác giả trong bài thơ là đả kích gay gắt hay châm biếm nhẹ nhàng? Giải thích.', solution: 'Đó là châm biếm nhẹ nhàng, hóm hỉnh. Đối tượng là một thói xấu thường gặp chứ không phải kẻ gây hại lớn; giọng thơ lục bát êm ái, cách kể như chuyện làng; câu “Cả làng nghe mãi cũng hay” còn có chút bao dung. Tiếng cười nhằm nhắc nhở, giúp người ta sửa mình hơn là lên án.' }
  ],
  exercises: [
    { question: 'Chỉ ra mâu thuẫn trào phúng trong bài “Anh Tư ‘biết tuốt’” bằng một câu văn.', hints: ['Anh Tư tự cho mình thế nào?', 'Thực tế câu trả lời và việc học của anh ra sao?'], solution: 'Mâu thuẫn giữa việc anh Tư tự cho mình “hiểu biết hơn người” với những câu trả lời vô lí, ngô nghê và việc anh thực ra rất ít học.' },
    { question: 'Viết đoạn văn (5 – 7 câu) phân tích luận điểm 1: chân dung tự phụ của anh Tư qua hai câu thơ đầu.', hints: ['Chú ý cụm “hiểu biết hơn người”, “nói cười như không”.', 'Giọng điệu của người kể: khen thật hay mỉa mai?'], solution: 'Ví dụ: Ngay hai câu mở đầu, anh Tư hiện lên với vẻ tự tin hiếm có: “Anh Tư hiểu biết hơn người, / Chuyện gì anh cũng nói cười như không.” Cụm từ “hơn người” đặt anh cao hơn mọi người xung quanh; “chuyện gì … cũng” khẳng định không có gì anh không biết. Thành ngữ “nói cười như không” gợi dáng vẻ ung dung, coi mọi chuyện là dễ dàng. Thoạt nghe như lời khen, nhưng giọng kể có phần phóng đại khiến người đọc nghi ngờ. Chính lời “khen” này đã chuẩn bị cho tiếng cười bật ra ở những câu sau, khi sự “hiểu biết” ấy được đem ra thử thách.' },
    { question: 'Viết kết bài cho bài văn phân tích, có nêu bài học cho bản thân.', hints: ['Khẳng định thành công về nghệ thuật: thể lục bát, cấu trúc hỏi – đáp, kết thúc bất ngờ.', 'Bài học: khiêm tốn, không biết thì hỏi, học thật.'], solution: 'Ví dụ: Chỉ với tám câu lục bát, cấu trúc hỏi – đáp lặp lại và một kết thúc bất ngờ, bài thơ đã vẽ nên chân dung đáng cười của kiểu người “biết tuốt”. Tiếng cười nhẹ nhàng mà thấm thía nhắc em rằng hiểu biết thật sự đến từ việc học, không phải từ sự khoe khoang. Không biết thì hỏi, biết ít thì học thêm – đó là bài học em muốn giữ cho mình.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đối tượng bị châm biếm trong bài “Anh Tư ‘biết tuốt’” là:', options: ['thói không hiểu biết mà khoe khoang', 'thói lười lao động', 'thói tham ăn', 'thói keo kiệt'], answer: 0, explain: 'Anh Tư tự cho mình biết tuốt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phân tích thơ trào phúng chỉ cần kể lại nội dung bài thơ.', answer: false, explain: 'Cần lí giải tiếng cười, thủ pháp, thái độ.' },
    { type: 'short', q: 'Trong câu kết, từ nào cho thấy anh Tư làm như không nghe thấy câu hỏi?', answer: ['lơ', 'lo'], answerText: 'lơ', explain: '“… anh lơ!”' },
    { type: 'mcq', q: 'Cấu trúc được lặp lại trong bài để tạo tiếng cười là:', options: ['“Hỏi sao… / Anh rằng…”', '“Ngày xưa… / Bây giờ…”', '“Nếu… thì…”', '“Vì… nên…”'], answer: 0, explain: 'Cấu trúc hỏi – đáp lặp lại hai lần.' },
    { type: 'mcq', q: 'Câu trả lời “Thợ vẽ sơn chồng bảy phen” gây cười vì:', options: ['tự tin nhưng vô lí, phản khoa học', 'rất chính xác', 'giàu hình ảnh thiên nhiên', 'dùng từ Hán Việt'], answer: 0, explain: 'Mâu thuẫn giữa vẻ tự tin và sự vô lí.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giọng điệu của bài thơ là châm biếm nhẹ nhàng, hóm hỉnh.', answer: true, explain: 'Tiếng cười nhắc nhở, không đả kích gay gắt.' },
    { type: 'short', q: 'Bài “Anh Tư ‘biết tuốt’” có bao nhiêu dòng thơ?', answer: ['8', 'tám'], answerText: '8', explain: 'Bốn cặp lục bát.' },
    { type: 'mcq', q: 'Mâu thuẫn trào phúng thường nảy sinh giữa:', options: ['vẻ ngoài và bản chất, lời nói và việc làm', 'hai mùa trong năm', 'hai nhân vật cùng tốt', 'tác giả và người đọc'], answer: 0, explain: 'Sự vênh lệch tạo tiếng cười.' }
  ]
});
})();
