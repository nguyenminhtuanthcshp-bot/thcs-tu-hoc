/* KHTN 6 – Bài 2. An toàn trong phòng thực hành. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-2', {
  objectives: [
    'Trình bày được cách sử dụng một số dụng cụ, hoá chất trong phòng thực hành an toàn.',
    'Nêu được các quy định an toàn khi học trong phòng thực hành.',
    'Nhận biết được ý nghĩa của các kí hiệu, biển báo cảnh báo trong phòng thực hành.',
    'Biết cách xử lí khi xảy ra sự cố.'
  ],
  intro: 'Phòng thực hành là nơi em được tự tay làm thí nghiệm – rất thú vị! Nhưng ở đó cũng có hoá chất, lửa, đồ thuỷ tinh, điện… Vì vậy, <b>an toàn luôn là điều đầu tiên</b>.',
  steps: [
    { title: 'Trước khi làm thí nghiệm', html: `<ul><li>Chỉ vào phòng thực hành khi có sự đồng ý của thầy cô.</li><li>Mặc trang phục gọn gàng; buộc tóc gọn; đeo kính bảo hộ, găng tay, khẩu trang khi cần.</li><li>Đọc kĩ hướng dẫn, nhãn hoá chất; hỏi thầy cô khi chưa rõ.</li></ul>` },
    { title: 'Trong khi làm thí nghiệm', html: `<ul><li><b>Không</b> ăn uống, đùa nghịch, chạy nhảy trong phòng thực hành.</li><li><b>Không</b> tự ý nếm, ngửi trực tiếp hoá chất; không tự ý trộn các hoá chất với nhau.</li><li>Làm đúng các bước theo hướng dẫn của thầy cô.</li><li>Cẩn thận với lửa, điện, đồ thuỷ tinh và vật sắc nhọn.</li></ul>
      <div class="box tip">Khi xảy ra sự cố (đổ vỡ, bỏng, hoá chất bắn vào người…) phải <b>báo ngay cho thầy cô</b>.</div>` },
    { title: 'Sau khi làm thí nghiệm', html: `<ul><li>Thu gom chất thải đúng nơi quy định, không đổ hoá chất ra bồn rửa tuỳ tiện.</li><li>Lau dọn chỗ làm, rửa sạch dụng cụ, xếp lại đúng chỗ.</li><li><b>Rửa tay sạch</b> bằng xà phòng.</li></ul>` },
    { title: 'Biển báo trong phòng thực hành', html: `<table class="tbl"><tr><th>Loại biển</th><th>Hình dạng, màu sắc</th><th>Ví dụ</th></tr>
      <tr><td>Biển báo <b>cấm</b></td><td>Hình tròn, viền đỏ, nền trắng, hình vẽ màu đen (thường có gạch chéo đỏ)</td><td>Cấm lửa, cấm ăn uống</td></tr>
      <tr><td>Biển <b>cảnh báo nguy hiểm</b></td><td>Hình tam giác đều, nền vàng, viền đen hoặc đỏ</td><td>Chất dễ cháy, chất ăn mòn, điện cao thế</td></tr>
      <tr><td>Biển <b>chỉ dẫn</b></td><td>Hình vuông hoặc chữ nhật, nền xanh hoặc đỏ</td><td>Lối thoát hiểm, vị trí bình chữa cháy</td></tr></table>`,
      svg: S.signs([{ kind: 'cam', glyph: 'lua', label: 'Cấm lửa' }, { kind: 'cam', glyph: 'ly', label: 'Cấm ăn uống' }, { kind: 'canh-bao', glyph: 'lua', label: 'Chất dễ cháy' }, { kind: 'canh-bao', glyph: 'doc', label: 'Chất độc' },
        { kind: 'canh-bao', glyph: 'an-mon', label: 'Chất ăn mòn' }, { kind: 'canh-bao', glyph: 'dien', label: 'Nguy hiểm về điện' }, { kind: 'chi-dan', glyph: 'thoat', label: 'Lối thoát hiểm' }, { kind: 'chi-dan', glyph: 'binh', red: true, label: 'Bình chữa cháy' }]),
      caption: 'Hình vẽ minh hoạ một số biển báo thường gặp (mẫu đơn giản hoá).' }
  ],
  summary: 'Nghe theo hướng dẫn của thầy cô, không ăn uống, đùa nghịch, không tự ý nếm, ngửi hoá chất; có sự cố báo ngay. Biển cấm: tròn, viền đỏ; cảnh báo: tam giác vàng; chỉ dẫn: vuông/chữ nhật nền xanh hoặc đỏ.',
  examples: [
    { title: 'Nhận xét hành động', problem: 'Bạn Tùng vừa làm thí nghiệm vừa ăn bánh. Hành động này đúng hay sai? Vì sao?', solution: 'Sai. Ăn uống trong phòng thực hành có thể khiến hoá chất dính vào thức ăn và đi vào cơ thể, gây ngộ độc.' },
    { title: 'Xử lí sự cố', problem: 'Khi làm vỡ ống nghiệm thuỷ tinh, em nên làm gì?', solution: 'Không dùng tay không nhặt mảnh vỡ; báo ngay cho thầy cô để được hướng dẫn thu gom bằng dụng cụ phù hợp (chổi, hót rác) và bỏ vào nơi quy định.' },
    { title: 'Đọc biển báo', problem: 'Một biển báo hình tam giác đều, nền vàng, viền đen, có hình ngọn lửa. Biển này có ý nghĩa gì?', solution: 'Đây là biển cảnh báo nguy hiểm: “Chất dễ cháy”. Cần để xa nguồn lửa.' }
  ],
  exercises: [
    { question: 'Kể ba việc em cần làm sau khi kết thúc buổi thực hành.', hints: ['Nghĩ tới chất thải, dụng cụ và bản thân em.', 'Dụng cụ cần được làm sạch và cất đúng chỗ.'], solution: 'Thu gom chất thải đúng nơi quy định; rửa sạch dụng cụ và sắp xếp lại; lau dọn chỗ làm và rửa tay bằng xà phòng.' },
    { question: 'Vì sao không được ngửi trực tiếp hoá chất bằng cách đưa sát mũi vào miệng lọ?', hints: ['Nhiều hoá chất bay hơi có mùi rất mạnh hoặc độc.', 'Hít phải một lượng lớn có thể gây hại cho đường hô hấp.'], solution: 'Vì hơi của một số hoá chất có thể độc, gây bỏng hoặc tổn thương mũi, họng, phổi. Chỉ ngửi khi thầy cô hướng dẫn, bằng cách dùng tay phẩy nhẹ hơi về phía mũi.' },
    { question: 'Biển báo hình tròn, viền đỏ, nền trắng, có hình điếu thuốc bị gạch chéo thuộc loại biển nào và có ý nghĩa gì?', hints: ['Nhớ lại: hình tròn, viền đỏ là đặc điểm của loại biển nào?', 'Gạch chéo có nghĩa là không được làm việc đó.'], solution: 'Đó là biển báo cấm, có nghĩa “Cấm hút thuốc”.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Biển báo có hình tam giác đều, nền vàng, viền đen là loại biển:', options: ['Biển cấm', 'Biển cảnh báo nguy hiểm', 'Biển chỉ dẫn', 'Biển thông tin'], answer: 1, explain: 'Hình tam giác đều nền vàng là biển cảnh báo nguy hiểm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Được phép nếm thử hoá chất nếu thấy nó giống đường.', answer: false, explain: 'Tuyệt đối không nếm hoá chất trong phòng thực hành.' },
    { type: 'mcq', q: 'Khi bị hoá chất bắn vào tay, việc đầu tiên nên làm là:', options: ['Lau vào quần áo', 'Báo ngay cho thầy cô và làm theo hướng dẫn', 'Giấu đi để không bị nhắc nhở', 'Tiếp tục làm thí nghiệm'], answer: 1, explain: 'Khi có sự cố phải báo ngay cho thầy cô để được xử lí kịp thời (thường là rửa ngay dưới vòi nước sạch).' },
    { type: 'mcq', q: 'Biển báo ở hình bên thuộc loại nào?', svg: S.sign({ kind: 'cam', glyph: 'thuoc', label: 'Biển báo' }), options: ['Biển chỉ dẫn', 'Biển cấm', 'Biển cảnh báo nguy hiểm', 'Biển khuyến khích'], answer: 1, explain: 'Hình tròn, viền đỏ, có gạch chéo: biển cấm (ở đây là “Cấm hút thuốc”).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sau buổi thực hành cần rửa tay sạch bằng xà phòng.', answer: true, explain: 'Rửa tay giúp loại bỏ hoá chất, vi khuẩn có thể dính vào tay.' },
    { type: 'mcq', q: 'Hành động nào là đúng trong phòng thực hành?', options: ['Chạy nhảy, đùa nghịch', 'Tự ý trộn các hoá chất', 'Buộc tóc gọn, đeo kính bảo hộ khi cần', 'Đổ hoá chất thừa vào bồn rửa'], answer: 2, explain: 'Trang phục gọn gàng và đồ bảo hộ giúp giữ an toàn.' },
    { type: 'short', q: 'Biển chỉ dẫn lối thoát hiểm (hình chữ nhật, vẽ người chạy và mũi tên) có nền màu gì? (điền 1 tiếng)', answer: ['xanh', 'xanh lá', 'xanh lục', 'xanh lá cây'], answerText: 'xanh (xanh lá)', explain: 'Biển chỉ dẫn, thông tin an toàn như lối thoát hiểm thường có nền xanh lá, hình vẽ màu trắng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng tay không để nhặt mảnh thuỷ tinh vỡ cho nhanh.', answer: false, explain: 'Mảnh thuỷ tinh rất sắc; cần báo thầy cô và dùng dụng cụ thu gom.' }
  ]
});
})();
