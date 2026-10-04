/* KHTN 6 – Bài 12. Một số vật liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-12', {
  objectives: [
    'Kể tên được một số vật liệu thông dụng: kim loại, nhựa, thuỷ tinh, gốm sứ, cao su, gỗ.',
    'Nêu được tính chất và ứng dụng của một số vật liệu.',
    'Đề xuất được cách sử dụng vật liệu an toàn, hiệu quả và bảo đảm sự phát triển bền vững.'
  ],
  intro: 'Nhìn quanh lớp học: bàn gỗ, khung cửa sắt, cửa kính, bình hoa sứ, bút nhựa, tẩy cao su… Mỗi đồ vật được làm từ một <b>vật liệu</b> được chọn cho phù hợp với công dụng của nó.',
  steps: [
    { title: 'Vật liệu là gì?', html: `<p><b>Vật liệu</b> là một chất hoặc hỗn hợp một số chất được con người sử dụng như là nguyên liệu đầu vào trong quá trình sản xuất hoặc chế tạo để làm ra những sản phẩm phục vụ cuộc sống.</p>
      <p>Ví dụ: kim loại, nhựa, thuỷ tinh, gốm sứ, cao su, gỗ, vải, xi măng…</p>` },
    { title: 'Tính chất và ứng dụng', html: `<table class="tbl"><tr><th>Vật liệu</th><th>Tính chất nổi bật</th><th>Ứng dụng</th></tr>
      <tr><td>Kim loại (sắt, nhôm, đồng…)</td><td>Dẫn điện, dẫn nhiệt tốt; bền, cứng; sắt dễ bị gỉ</td><td>Nồi, dây điện, khung nhà, máy móc</td></tr>
      <tr><td>Nhựa</td><td>Nhẹ, bền, cách điện, dễ tạo hình; khó phân huỷ</td><td>Vỏ dây điện, đồ gia dụng, bao bì</td></tr>
      <tr><td>Thuỷ tinh</td><td>Trong suốt, không gỉ, dễ vỡ</td><td>Cửa kính, chai lọ, dụng cụ thí nghiệm</td></tr>
      <tr><td>Gốm sứ</td><td>Cứng, chịu nhiệt, cách điện; giòn, dễ vỡ</td><td>Bát đĩa, gạch ngói, sứ cách điện</td></tr>
      <tr><td>Cao su</td><td>Đàn hồi, không thấm nước, cách điện</td><td>Lốp xe, găng tay, ủng</td></tr>
      <tr><td>Gỗ</td><td>Dễ gia công, cách nhiệt; dễ cháy, mối mọt</td><td>Bàn ghế, nhà cửa, đồ mĩ nghệ</td></tr></table>` },
    { title: 'Chọn vật liệu phù hợp', html: `<p>Khi chọn vật liệu, cần dựa vào <b>tính chất</b> của vật liệu và <b>công dụng</b> của sản phẩm.</p>
      <ul><li>Lõi dây điện cần dẫn điện tốt → dùng <b>đồng</b>; vỏ dây cần cách điện → dùng <b>nhựa</b>.</li>
      <li>Tay cầm nồi cần cách nhiệt → dùng nhựa chịu nhiệt hoặc gỗ.</li>
      <li>Kính cửa sổ cần trong suốt → dùng thuỷ tinh.</li></ul>`,
      svg: S.flow({ items: [{ title: 'Công dụng', text: 'sản phẩm cần làm gì?' }, { title: 'Tính chất cần có', text: 'dẫn điện? cách nhiệt? trong suốt?' }, { title: 'Chọn vật liệu', text: 'phù hợp, an toàn, tiết kiệm' }], w: 640, size: 14 }),
      caption: 'Các bước suy nghĩ khi chọn vật liệu.' },
    { title: 'Sử dụng vật liệu an toàn, bền vững', html: `<ul><li><b>An toàn</b>: không dùng đồ nhựa không chịu nhiệt để đựng thức ăn nóng hoặc cho vào lò vi sóng; cẩn thận khi dùng đồ thuỷ tinh, gốm sứ dễ vỡ.</li>
      <li><b>Hiệu quả, bền vững</b>: sơn, bôi dầu mỡ chống gỉ cho đồ sắt; <b>giảm – tái sử dụng – tái chế</b> (hạn chế túi nilon, chai nhựa dùng một lần; phân loại rác để tái chế kim loại, giấy, nhựa, thuỷ tinh).</li></ul>
      <div class="box tip">Túi nilon có thể mất hàng trăm năm mới phân huỷ, gây ô nhiễm đất, nước và nguy hiểm cho động vật.</div>` }
  ],
  summary: 'Vật liệu là chất hoặc hỗn hợp chất dùng để làm ra sản phẩm: kim loại, nhựa, thuỷ tinh, gốm sứ, cao su, gỗ… Chọn vật liệu theo tính chất phù hợp với công dụng. Sử dụng an toàn, tiết kiệm; giảm thiểu, tái sử dụng và tái chế để phát triển bền vững.',
  examples: [
    { title: 'Giải thích lựa chọn', problem: 'Vì sao nồi nấu ăn thường làm bằng kim loại, còn tay cầm làm bằng nhựa hoặc gỗ?', solution: 'Kim loại <b>dẫn nhiệt tốt</b> giúp thức ăn nhanh chín; nhựa, gỗ <b>dẫn nhiệt kém</b> (cách nhiệt) nên cầm vào không bị bỏng.' },
    { title: 'Nhận biết vật liệu', problem: 'Kể tên vật liệu chính làm nên: a) lốp xe đạp; b) chén uống trà; c) cửa sổ trong suốt.', solution: 'a) <b>Cao su</b>. b) <b>Gốm sứ</b>. c) <b>Thuỷ tinh</b>.' },
    { title: 'Bảo vệ đồ dùng', problem: 'Nêu hai cách giúp cánh cổng sắt lâu bị gỉ.', solution: 'Sơn phủ bề mặt; giữ cho bề mặt khô ráo, lau sạch sau mưa; bôi dầu mỡ ở bản lề. Các cách này ngăn sắt tiếp xúc với nước và không khí ẩm.' }
  ],
  exercises: [
    { question: 'Vì sao dụng cụ thí nghiệm như ống nghiệm, cốc đong thường làm bằng thuỷ tinh?', hints: ['Khi làm thí nghiệm, ta cần nhìn thấy các chất bên trong.', 'Thuỷ tinh có bị các hoá chất thông thường làm gỉ, ăn mòn không?'], solution: 'Vì thuỷ tinh <b>trong suốt</b> (dễ quan sát hiện tượng), <b>không gỉ</b>, ít bị hoá chất ăn mòn, loại thuỷ tinh chịu nhiệt có thể đun nóng được.' },
    { question: 'Em hãy đề xuất ba việc làm cụ thể để giảm rác thải nhựa ở trường.', hints: ['Nghĩ đến chai nước, túi nilon, ống hút.', 'Nghĩ đến việc phân loại rác.'], solution: 'Ví dụ: mang bình nước cá nhân thay chai nhựa dùng một lần; dùng túi vải thay túi nilon; không dùng ống hút nhựa; đặt thùng phân loại rác, thu gom chai nhựa để tái chế.' },
    { question: 'Vì sao vỏ dây điện làm bằng nhựa còn lõi làm bằng đồng? Điều gì xảy ra nếu vỏ dây bị bong tróc?', hints: ['So sánh khả năng dẫn điện của đồng và nhựa.', 'Lõi đồng lộ ra ngoài thì chạm vào có an toàn không?'], solution: 'Đồng dẫn điện tốt nên làm lõi; nhựa cách điện nên làm vỏ để bảo vệ người dùng. Nếu vỏ bị bong, lõi đồng lộ ra có thể gây <b>điện giật, chập cháy</b>, cần quấn băng dính cách điện hoặc thay dây mới.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vật liệu nào dẫn điện tốt, thường dùng làm lõi dây điện?', options: ['Nhựa', 'Cao su', 'Đồng', 'Gỗ'], answer: 2, explain: 'Đồng là kim loại dẫn điện tốt.' },
    { type: 'mcq', q: 'Tính chất nổi bật của cao su là:', options: ['Trong suốt', 'Đàn hồi, không thấm nước', 'Dẫn điện tốt', 'Dễ bị gỉ'], answer: 1, explain: 'Cao su đàn hồi, không thấm nước, cách điện – dùng làm lốp xe, ủng, găng tay.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thuỷ tinh trong suốt nhưng dễ vỡ.', answer: true, explain: 'Thuỷ tinh trong suốt, không gỉ nhưng giòn, dễ vỡ.' },
    { type: 'mcq', q: 'Vật liệu nào dễ bị gỉ khi để ở nơi ẩm ướt?', options: ['Sắt', 'Thuỷ tinh', 'Nhựa', 'Gốm'], answer: 0, explain: 'Sắt bị gỉ trong không khí ẩm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng hộp nhựa bất kì để hâm nóng thức ăn trong lò vi sóng.', answer: false, explain: 'Chỉ dùng hộp nhựa có ghi chịu nhiệt, dùng được cho lò vi sóng; nhựa thường có thể biến dạng, thôi chất độc.' },
    { type: 'mcq', q: 'Việc làm nào góp phần sử dụng vật liệu bền vững?', options: ['Dùng túi nilon một lần rồi vứt', 'Phân loại rác để tái chế giấy, nhựa, kim loại', 'Vứt vỏ lon nhôm xuống sông', 'Thay đồ dùng mới dù đồ cũ còn tốt'], answer: 1, explain: 'Tái chế giúp tiết kiệm tài nguyên và giảm rác thải.' },
    { type: 'short', q: 'Bát đĩa, gạch ngói, lọ hoa được làm từ vật liệu gì? (điền 2 tiếng)', answer: ['gốm sứ', 'gom su', 'đồ gốm', 'gốm'], answerText: 'gốm sứ', explain: 'Gốm sứ cứng, chịu nhiệt, dùng làm bát đĩa, gạch ngói.' },
    { type: 'mcq', q: 'Tay cầm của xoong, chảo thường làm bằng nhựa chịu nhiệt vì:', options: ['Nhựa dẫn nhiệt kém', 'Nhựa dẫn điện tốt', 'Nhựa rất nặng', 'Nhựa có màu đẹp'], answer: 0, explain: 'Nhựa dẫn nhiệt kém nên cầm không bị nóng tay.' }
  ]
});
})();
