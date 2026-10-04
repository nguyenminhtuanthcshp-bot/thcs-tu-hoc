/* Ngữ văn 6 – Bài 3. Đọc hiểu truyện: cốt truyện, lời người kể chuyện và lời nhân vật. Truyện đọc do nhóm biên soạn sáng tác. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b3-doc', {
  objectives: [
    'Nhận biết được cốt truyện và các sự việc chính của truyện.',
    'Phân biệt được lời người kể chuyện và lời nhân vật; nhận biết người kể chuyện ngôi thứ ba.',
    'Nhận xét được nhân vật qua hành động, lời nói, suy nghĩ.',
    'Rút ra được thông điệp về lòng yêu thương, sự sẻ chia.'
  ],
  intro: 'Một chiếc khăn len nhỏ có thể sưởi ấm được bao nhiêu người? Hãy đọc truyện ngắn “Chiếc khăn len đỏ” để tìm câu trả lời.',
  text: {
    title: 'Chiếc khăn len đỏ',
    html: `<p>Mùa đông năm ấy đến sớm. Gió bấc thổi rát mặt, hàng bàng trước cổng trường trụi hết lá.</p>
      <p>Sáng nào đi học, Mai cũng đi ngang góc chợ, nơi bà cụ bán rau ngồi co ro trên chiếc ghế nhựa thấp. Bà mặc chiếc áo bông cũ đã sờn vai, cổ để trần, đôi tay nứt nẻ vẫn thoăn thoắt buộc từng bó rau muống.</p>
      <p>Chiều hôm ấy, mẹ đưa cho Mai chiếc khăn len đỏ mới đan xong:</p>
      <p>– Khăn của con đấy. Mẹ đan hai tuần mới xong.</p>
      <p>Mai quàng thử. Chiếc khăn mềm và ấm như một cái ôm. Vậy mà đêm đó cô bé trằn trọc mãi. Cô cứ nghĩ đến cái cổ để trần của bà cụ giữa gió bấc.</p>
      <p>Sáng hôm sau, Mai dừng lại trước sạp rau, lúng túng tháo chiếc khăn:</p>
      <p>– Bà ơi, bà quàng khăn này cho ấm ạ.</p>
      <p>Bà cụ ngước lên, đôi mắt mờ đục bỗng sáng hẳn:</p>
      <p>– Ôi, khăn đẹp thế này, bà không nhận đâu cháu. Cháu cũng lạnh mà.</p>
      <p>– Cháu còn áo ấm, bà ạ. Bà ngồi đây cả ngày cơ mà.</p>
      <p>Bà cụ run run đỡ lấy chiếc khăn, quàng lên cổ. Màu đỏ nổi bật giữa góc chợ xám xịt, như một đốm lửa nhỏ.</p>
      <p>Về nhà, Mai kể lại với mẹ, giọng lí nhí vì sợ mẹ buồn. Mẹ chỉ ôm Mai vào lòng:</p>
      <p>– Mẹ đan khăn để giữ ấm cho con. Con lại dùng nó giữ ấm cho người khác. Mẹ vui lắm.</p>
      <p>Tối ấy, mẹ lấy cuộn len đỏ còn thừa ra. Hai mẹ con ngồi bên ngọn đèn, cùng đan một chiếc khăn mới. Lần này, Mai tự tay đan những mũi len đầu tiên.</p>`,
    source: 'Truyện ngắn do nhóm biên soạn sáng tác để minh hoạ.'
  },
  steps: [
    { title: 'Cốt truyện', html: `<p><b>Cốt truyện</b> là chuỗi các sự việc được sắp xếp theo một trình tự nhất định, thường gồm: mở đầu – phát triển – cao trào – kết thúc.</p>`,
      svg: S.storyArc({ stages: ['Mở đầu', 'Phát triển', 'Cao trào', 'Kết thúc'], peak: 2, notes: ['Mùa đông; bà cụ bán rau co ro', 'Mẹ tặng khăn; Mai trằn trọc', 'Mai tặng khăn cho bà cụ', 'Mẹ ôm Mai; hai mẹ con đan khăn mới'] }),
      caption: 'Sơ đồ cốt truyện “Chiếc khăn len đỏ”.' },
    { title: 'Người kể chuyện ngôi thứ ba', html: `<p>Người kể không xưng “tôi”, gọi nhân vật bằng tên (“Mai”, “bà cụ”, “mẹ”) ⇒ <b>người kể chuyện ngôi thứ ba</b>. Người kể có thể biết cả suy nghĩ của nhân vật: “Cô cứ nghĩ đến cái cổ để trần của bà cụ giữa gió bấc.”</p>` },
    { title: 'Lời người kể chuyện và lời nhân vật', html: `<table class="tbl"><tr><th></th><th>Lời người kể chuyện</th><th>Lời nhân vật</th></tr><tr><td>Là gì?</td><td>Lời kể, tả sự việc, cảnh vật, nhân vật</td><td>Lời nói trực tiếp của nhân vật</td></tr><tr><td>Dấu hiệu</td><td>Không có gạch đầu dòng lời thoại</td><td>Thường đứng sau dấu gạch ngang (–) hoặc trong ngoặc kép</td></tr><tr><td>Ví dụ</td><td>“Gió bấc thổi rát mặt, hàng bàng trước cổng trường trụi hết lá.”</td><td>“– Bà ơi, bà quàng khăn này cho ấm ạ.”</td></tr></table>` },
    { title: 'Nhân vật Mai', html: `<ul><li><b>Hành động</b>: để ý đến bà cụ mỗi sáng; tháo khăn tặng bà; học đan khăn.</li><li><b>Suy nghĩ</b>: trằn trọc vì thương bà cụ bị lạnh.</li><li><b>Lời nói</b>: lễ phép, chân thành: “Cháu còn áo ấm, bà ạ.”</li></ul><p>⇒ Mai là cô bé <b>nhân hậu, biết quan sát và biết sẻ chia</b>. Người mẹ cũng <b>bao dung, thấu hiểu</b>, biết khuyến khích việc tốt của con.</p>` },
    { title: 'Thông điệp', html: `<div class="box key">Yêu thương và sẻ chia làm ấm lòng cả người cho lẫn người nhận. Những việc làm nhỏ xuất phát từ tấm lòng có thể lan toả, như chiếc khăn đỏ – “một đốm lửa nhỏ” giữa mùa đông.</div>` }
  ],
  summary: 'Cốt truyện là chuỗi sự việc theo trình tự mở đầu – phát triển – cao trào – kết thúc. Lời người kể chuyện kể, tả sự việc; lời nhân vật là lời nói trực tiếp, thường sau dấu gạch ngang. Truyện “Chiếc khăn len đỏ” kể ở ngôi thứ ba, ca ngợi lòng nhân hậu, sẻ chia.',
  examples: [
    { title: 'Phân loại lời', problem: 'Câu nào là lời nhân vật? a) “Bà cụ run run đỡ lấy chiếc khăn, quàng lên cổ.” b) “– Mẹ đan khăn để giữ ấm cho con.”', solution: 'b) là <b>lời nhân vật</b> (lời nói trực tiếp của mẹ, sau dấu gạch ngang). a) là lời người kể chuyện.' },
    { title: 'Ý nghĩa chi tiết', problem: 'Hình ảnh chiếc khăn đỏ “như một đốm lửa nhỏ” giữa góc chợ xám xịt có ý nghĩa gì?', solution: 'Phép so sánh làm nổi bật màu đỏ ấm áp giữa khung cảnh lạnh lẽo; “đốm lửa” còn tượng trưng cho tình người, sự ấm áp mà lòng tốt của Mai mang đến.' },
    { title: 'Nhận xét nhân vật', problem: 'Qua lời nói của mẹ ở cuối truyện, em hiểu mẹ là người như thế nào?', solution: 'Mẹ bao dung, thấu hiểu và tự hào về con; mẹ coi trọng tấm lòng hơn đồ vật, lại còn cùng con đan khăn mới – vừa động viên, vừa dạy con.' }
  ],
  exercises: [
    { question: 'Tìm hai chi tiết miêu tả bà cụ bán rau và cho biết chúng gợi lên điều gì.', hints: ['Đọc đoạn thứ hai.', 'Chú ý trang phục, đôi tay, tư thế ngồi.'], solution: '“ngồi co ro”, “áo bông cũ đã sờn vai, cổ để trần”, “đôi tay nứt nẻ”. Các chi tiết gợi cuộc sống vất vả, thiếu thốn, khiến người đọc thương cảm.' },
    { question: 'Vì sao Mai “trằn trọc mãi” trong đêm được mẹ tặng khăn?', hints: ['Mai đang nghĩ về ai?', 'Mai muốn làm gì với chiếc khăn?'], solution: 'Mai thương bà cụ phải chịu lạnh và phân vân giữa việc giữ chiếc khăn mẹ tặng với mong muốn tặng khăn cho bà. Chi tiết cho thấy Mai giàu lòng trắc ẩn.' },
    { question: 'Nếu kể lại truyện bằng ngôi thứ nhất (Mai xưng “tôi”), câu “Mai quàng thử” sẽ đổi thành gì? Cách kể ấy có ưu điểm gì?', hints: ['Thay tên nhân vật bằng “tôi”.', 'Ngôi thứ nhất giúp bộc lộ điều gì trực tiếp hơn?'], solution: '“Tôi quàng thử.” Ngôi thứ nhất giúp bộc lộ trực tiếp cảm xúc, suy nghĩ của Mai, tạo sự gần gũi, chân thực.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Truyện “Chiếc khăn len đỏ” được kể theo ngôi thứ mấy?', options: ['Ngôi thứ nhất', 'Ngôi thứ hai', 'Ngôi thứ ba', 'Không xác định'], answer: 2, explain: 'Người kể gọi tên nhân vật, không xưng “tôi”.' },
    { type: 'mcq', q: 'Cốt truyện là:', options: ['Chuỗi sự việc được sắp xếp theo trình tự', 'Tên của truyện', 'Lời nói của nhân vật', 'Cảnh vật trong truyện'], answer: 0, explain: 'Định nghĩa cốt truyện.' },
    { type: 'mcq', q: 'Sự việc nào là cao trào của truyện?', options: ['Gió bấc thổi', 'Mẹ tặng khăn', 'Mai tặng khăn cho bà cụ', 'Hai mẹ con đan khăn mới'], answer: 2, explain: 'Đó là lúc Mai thực hiện quyết định quan trọng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lời nhân vật thường được đặt sau dấu gạch ngang đầu dòng.', answer: true, explain: 'Đó là dấu hiệu của lời thoại trực tiếp.' },
    { type: 'mcq', q: 'Câu nào là lời người kể chuyện?', options: ['“– Cháu còn áo ấm, bà ạ.”', '“– Khăn của con đấy.”', '“Mùa đông năm ấy đến sớm.”', '“– Mẹ vui lắm.”'], answer: 2, explain: 'Câu kể, tả của người kể.' },
    { type: 'mcq', q: 'Phẩm chất nổi bật của Mai là:', options: ['Nhân hậu, biết sẻ chia', 'Nhút nhát, sợ hãi', 'Ích kỉ', 'Vô tâm'], answer: 0, explain: 'Mai tặng khăn cho bà cụ vì thương bà.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người mẹ trách Mai vì đã cho đi chiếc khăn.', answer: false, explain: 'Mẹ ôm Mai và nói “Mẹ vui lắm”.' },
    { type: 'mcq', q: 'Hình ảnh “một đốm lửa nhỏ” sử dụng biện pháp tu từ:', options: ['So sánh', 'Điệp ngữ', 'Hoán dụ', 'Nói quá'], answer: 0, explain: 'Có từ so sánh “như”.' }
  ]
});
})();
