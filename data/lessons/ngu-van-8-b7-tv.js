/* Ngữ văn 8 – Bài 7. Thực hành tiếng Việt: Biện pháp tu từ, nghĩa của từ ngữ (từ đồng nghĩa, từ láy) và lựa chọn cấu trúc câu. Ngữ liệu: bài thơ “Những ô cửa sáng đèn” (nhóm biên soạn sáng tác), ca dao và câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b7-tv', {
  objectives: [
    'Nhận biết và phân tích được tác dụng của các biện pháp tu từ: so sánh, ẩn dụ, hoán dụ, nhân hoá, điệp ngữ.',
    'Hiểu nghĩa của từ ngữ trong ngữ cảnh; phân biệt sắc thái của từ đồng nghĩa; nhận biết từ láy và tác dụng.',
    'Biết lựa chọn cấu trúc câu (trật tự từ, câu ngắn – câu dài) phù hợp với mục đích biểu đạt.'
  ],
  intro: 'Trong thơ, mỗi từ, mỗi cách sắp xếp câu đều được lựa chọn kĩ lưỡng. Vì sao nhà thơ viết “lần lượt sáng đèn” mà không viết “cùng lúc sáng đèn”? Vì sao lại đặt “nhìn thấy” thành một dòng riêng? Bài học này giúp em “đọc chậm” để thấy cái hay của từng lựa chọn.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<div class="poem">(1) từng ô cửa / lần lượt sáng đèn / như những vì sao nhỏ / thắp lên từ mặt đất.<br>(2) Tôi đi giữa muôn ô cửa / nghe mình được sưởi ấm / bởi những ngọn đèn không mang tên tôi.<br><i>(“Những ô cửa sáng đèn”)</i></div>
<p>(3) <i>Thuyền về có nhớ bến chăng / Bến thì một dạ khăng khăng đợi thuyền.</i> <i>(Ca dao)</i></p>
<p>(4) Cả làng ra đồng gặt lúa. Gió hát trên những ngọn tre. <i>(Câu văn do nhóm biên soạn viết)</i></p>`,
    source: '(1), (2) Trích bài thơ tự do do nhóm biên soạn sáng tác. (3) Ca dao (văn học dân gian). (4) Câu văn do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Ôn tập các biện pháp tu từ', html: `<p>Các biện pháp tu từ thường gặp trong thơ:</p>`,
      svg: S.mindmap({ center: 'Biện pháp tu từ', branches: [{ title: 'So sánh', items: ['A như B', 'Ô cửa như vì sao'] }, { title: 'Ẩn dụ', items: ['Gọi A bằng B (giống nhau)', 'thuyền – bến'] }, { title: 'Hoán dụ', items: ['Gọi A bằng B (gần gũi)', '“Cả làng” ra đồng'] }, { title: 'Nhân hoá', items: ['Vật như người', '“Gió hát”'] }, { title: 'Điệp ngữ', items: ['Lặp từ ngữ', '“có…, có…, có…”'] }] }),
      caption: 'Năm biện pháp tu từ thường gặp và ví dụ.' },
    { title: 'Phân tích tác dụng của biện pháp tu từ', html: `<table class="tbl"><tr><th>Ngữ liệu</th><th>Biện pháp</th><th>Tác dụng</th></tr>
      <tr><td>(1) “như những vì sao nhỏ”</td><td>So sánh</td><td>Ánh đèn đời thường trở nên lung linh, thiêng liêng</td></tr>
      <tr><td>(3) “thuyền – bến”</td><td>Ẩn dụ</td><td>Thuyền: người ra đi; bến: người ở lại chung thuỷ, chờ đợi</td></tr>
      <tr><td>(4) “Cả làng”</td><td>Hoán dụ</td><td>Lấy nơi chốn chỉ người sống ở đó – gợi không khí đông vui, tất bật</td></tr>
      <tr><td>(4) “Gió hát”</td><td>Nhân hoá</td><td>Gió như người, vui cùng mùa gặt</td></tr></table>` },
    { title: 'Nghĩa của từ ngữ: từ đồng nghĩa và từ láy', html: `<p><b>Từ đồng nghĩa</b> có nghĩa giống hoặc gần giống nhau nhưng có thể khác sắc thái. So sánh: <i>sưởi ấm – làm ấm – hơ nóng</i>. “Sưởi ấm” vừa có nghĩa thực (đem hơi ấm), vừa gợi sự ấm áp về tình cảm; “hơ nóng” chỉ hành động vật lí, không phù hợp với câu thơ (2).</p>
      <p><b>Từ láy</b> tạo nhạc điệu và gợi hình ảnh, cảm xúc: “lần lượt” (từ láy) gợi các ô cửa sáng lên nối tiếp nhau, chậm rãi, bình yên – khác với “cùng lúc” (đồng loạt, không có nhịp điệu). “Khăng khăng” (ca dao 3) nhấn mạnh sự kiên định, thuỷ chung.</p>` },
    { title: 'Lựa chọn cấu trúc câu', html: `<ul><li><b>Trật tự từ:</b> “Tôi đi giữa muôn ô cửa / nghe mình được sưởi ấm / bởi những ngọn đèn không mang tên tôi” – dùng cấu trúc bị động “được sưởi ấm bởi…” để đặt “những ngọn đèn không mang tên tôi” ở cuối, nhấn mạnh nguồn hơi ấm đến từ người xa lạ.</li>
      <li><b>Câu dài bẻ thành dòng ngắn:</b> tạo nhịp chậm, nhấn mạnh từ ngữ đặt riêng một dòng.</li>
      <li><b>Câu ngắn:</b> tạo nhịp nhanh, dứt khoát, gây ấn tượng (“Mưa. Gió. Bão.”).</li></ul>
      <div class="box key">Hỏi khi phân tích: Nếu đổi cấu trúc câu khác, ý nghĩa và cảm xúc thay đổi thế nào?</div>` }
  ],
  summary: 'Các biện pháp tu từ thường gặp: so sánh, ẩn dụ, hoán dụ, nhân hoá, điệp ngữ – giúp lời văn, lời thơ giàu hình ảnh và cảm xúc. Từ đồng nghĩa có thể khác sắc thái nên cần chọn từ phù hợp ngữ cảnh; từ láy tạo nhạc điệu, gợi hình, gợi cảm. Lựa chọn cấu trúc câu (trật tự từ, câu chủ động – bị động, câu dài – ngắn, ngắt dòng) giúp nhấn mạnh ý và tạo nhịp điệu.',
  examples: [
    { title: 'Phân biệt ẩn dụ và hoán dụ', problem: 'Xác định biện pháp tu từ: (a) “Cả sân vận động reo hò khi đội nhà ghi bàn.” (b) “Uống nước nhớ nguồn.” (tục ngữ)', solution: '(a) Hoán dụ: lấy nơi chốn (sân vận động) để chỉ những người ở đó (khán giả) – quan hệ gần gũi. (b) Ẩn dụ: “nguồn” (nơi dòng nước bắt đầu) chỉ những người đã tạo ra thành quả cho ta hưởng – dựa trên nét tương đồng. Mẹo phân biệt: ẩn dụ dựa trên sự giống nhau; hoán dụ dựa trên quan hệ gần gũi (bộ phận – toàn thể, vật chứa – vật được chứa, dấu hiệu – sự vật…).' },
    { title: 'Chọn từ đồng nghĩa', problem: 'Chọn từ phù hợp nhất: “Mẹ … con vào lòng.” (ôm / ghì / quàng).', solution: 'Chọn “ôm” – thể hiện sự âu yếm, dịu dàng, phù hợp với tình mẹ con. “Ghì” gợi sự siết chặt, mạnh mẽ (thường khi xúc động mạnh); “quàng” chỉ vòng tay qua vai, không diễn tả hết tình cảm.' },
    { title: 'Tác dụng của trật tự từ', problem: 'So sánh: (a) “Những ngọn đèn không mang tên tôi sưởi ấm tôi.” (b) “Nghe mình được sưởi ấm / bởi những ngọn đèn không mang tên tôi.”', solution: 'Câu (a) chủ động, nêu thông tin trực tiếp. Câu (b) bị động, đặt cảm nhận “được sưởi ấm” lên trước, khiến người đọc chú ý đến cảm xúc của “tôi”; đồng thời để “những ngọn đèn không mang tên tôi” ở cuối – vị trí nhấn mạnh – làm nổi bật ý nghĩa: hơi ấm đến từ những người xa lạ.' }
  ],
  exercises: [
    { question: 'Tìm và phân tích biện pháp nhân hoá trong câu: “Những hàng cây đứng nghiêm trang tiễn đoàn quân ra trận.”', hints: ['Từ ngữ nào vốn dùng cho người?', 'Hàng cây được miêu tả như thế nào?'], solution: 'Nhân hoá qua các từ “đứng nghiêm trang”, “tiễn” – vốn dùng cho con người. Hàng cây trở nên có tâm hồn, như những người dân đứng tiễn đoàn quân với lòng kính trọng, tin yêu; câu văn trang trọng, xúc động.' },
    { question: 'Tìm hai từ láy trong ca dao “Thuyền về có nhớ bến chăng / Bến thì một dạ khăng khăng đợi thuyền” và bài thơ “Những ô cửa sáng đèn”; nêu tác dụng.', hints: ['Một từ ở ca dao, một từ ở khổ 1 bài thơ.', 'Từ láy gợi điều gì về tình cảm, nhịp điệu?'], solution: '“Khăng khăng” (ca dao): nhấn mạnh tấm lòng một mực chung thuỷ của “bến”. “Lần lượt” (bài thơ): gợi những ô cửa sáng lên nối tiếp nhau, tạo nhịp điệu chậm rãi, bình yên của buổi chiều thành phố.' },
    { question: 'Viết lại câu “Mưa rơi. Đường vắng. Tôi đứng một mình dưới mái hiên.” thành một câu dài, rồi so sánh hiệu quả biểu đạt.', hints: ['Nối các ý bằng quan hệ từ, dấu phẩy.', 'Câu ngắn và câu dài tạo nhịp điệu, cảm xúc khác nhau thế nào?'], solution: 'Câu dài: “Khi mưa rơi và con đường trở nên vắng vẻ, tôi đứng một mình dưới mái hiên.” Câu dài mạch lạc, trình bày quan hệ thời gian rõ ràng. Còn các câu ngắn tạo nhịp chậm, đứt quãng, mỗi câu như một khung hình, gợi sự cô đơn, trống vắng rõ hơn.' }
  ],
  quiz: [
    { type: 'mcq', q: '“Cả làng ra đồng gặt lúa” sử dụng biện pháp tu từ:', options: ['hoán dụ', 'so sánh', 'nhân hoá', 'nói quá'], answer: 0, explain: '“Làng” chỉ người dân trong làng.' },
    { type: 'mcq', q: 'Trong ca dao “Thuyền về có nhớ bến chăng”, “thuyền” và “bến” là:', options: ['ẩn dụ', 'hoán dụ', 'điệp ngữ', 'liệt kê'], answer: 0, explain: 'Thuyền – người ra đi; bến – người ở lại.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ đồng nghĩa luôn có thể thay thế cho nhau trong mọi ngữ cảnh.', answer: false, explain: 'Từ đồng nghĩa có thể khác sắc thái.' },
    { type: 'short', q: 'Trong câu “Gió hát trên những ngọn tre”, từ nào thể hiện biện pháp nhân hoá?', answer: ['hát'], answerText: 'hát', explain: 'Gió “hát” như người.' },
    { type: 'mcq', q: 'Từ nào là từ láy?', options: ['lần lượt', 'ô cửa', 'mặt đất', 'ngọn đèn'], answer: 0, explain: '“Lần lượt” là từ láy.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chuỗi câu ngắn liên tiếp có thể tạo nhịp điệu dứt khoát hoặc gợi cảm giác đứt quãng, cô đơn.', answer: true, explain: 'Tác dụng của câu ngắn.' },
    { type: 'short', q: 'Biện pháp tu từ gọi tên sự vật này bằng tên sự vật khác có nét tương đồng gọi là gì?', answer: ['ẩn dụ', 'an du'], answerText: 'ẩn dụ', explain: 'Ẩn dụ dựa trên sự giống nhau.' },
    { type: 'mcq', q: 'Từ nào phù hợp nhất để điền: “Những ngọn đèn … lòng người lữ khách.”', options: ['sưởi ấm', 'hơ nóng', 'đun sôi', 'nung chảy'], answer: 0, explain: '“Sưởi ấm” gợi cả tình cảm.' }
  ]
});
})();
