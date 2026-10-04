/* KHTN 6 – Bài 13. Một số nguyên liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-13', {
  objectives: [
    'Nêu được nguyên liệu là gì; kể tên được một số nguyên liệu thông dụng (quặng, đá vôi, cát, dầu mỏ…).',
    'Trình bày được tính chất và ứng dụng của một số nguyên liệu như đá vôi, quặng.',
    'Nêu được cách khai thác, sử dụng nguyên liệu an toàn, hiệu quả và bền vững.'
  ],
  intro: 'Viên gạch, bao xi măng, chiếc lon nhôm không có sẵn trong tự nhiên. Chúng được làm ra từ đất sét, đá vôi, quặng… lấy từ lòng đất. Những thứ ban đầu đó gọi là <b>nguyên liệu</b>.',
  steps: [
    { title: 'Nguyên liệu là gì?', html: `<p><b>Nguyên liệu</b> là vật liệu tự nhiên (vật liệu thô) chưa qua xử lí, được dùng để sản xuất, chế biến ra sản phẩm.</p>
      <table class="tbl"><tr><th>Nguyên liệu</th><th>Sản phẩm chế biến được</th></tr>
      <tr><td>Quặng sắt</td><td>Gang, thép</td></tr><tr><td>Quặng bauxite</td><td>Nhôm</td></tr>
      <tr><td>Đá vôi</td><td>Vôi sống, xi măng</td></tr><tr><td>Cát trắng (cát thạch anh)</td><td>Thuỷ tinh</td></tr>
      <tr><td>Đất sét</td><td>Gạch, ngói, đồ gốm</td></tr><tr><td>Dầu mỏ</td><td>Xăng, dầu, nhựa, sợi tổng hợp</td></tr></table>`,
      svg: S.flow({ items: [{ title: 'Nguyên liệu', text: 'quặng bauxite' }, { title: 'Chế biến', text: 'tách, tinh chế' }, { title: 'Vật liệu', text: 'nhôm' }, { title: 'Sản phẩm', text: 'nồi, lon, khung cửa' }], w: 660, size: 13 }),
      caption: 'Từ nguyên liệu đến sản phẩm (ví dụ nhôm).' },
    { title: 'Đá vôi', html: `<p>Thành phần chính của đá vôi là <b>calcium carbonate</b>. Một số tính chất:</p>
      <ul><li>Là chất rắn, màu trắng hoặc xám, <b>không tan</b> trong nước.</li>
      <li>Khi nung nóng ở nhiệt độ cao, đá vôi bị <b>phân huỷ</b> thành vôi sống và khí carbon dioxide.</li>
      <li>Khi nhỏ giấm (hoặc acid) lên đá vôi, có hiện tượng <b>sủi bọt khí</b>.</li></ul>
      <p>Ứng dụng: sản xuất vôi, xi măng, làm đá xây dựng, sản xuất thuỷ tinh…</p>` },
    { title: 'Quặng', html: `<p><b>Quặng</b> là đất đá có chứa khoáng vật (thường là hợp chất của kim loại) với hàm lượng đủ lớn để khai thác và chế biến có lợi.</p>
      <ul><li>Quặng sắt (như hematite, magnetite) → luyện gang, thép.</li><li>Quặng bauxite → sản xuất nhôm. Nước ta có trữ lượng bauxite lớn ở Tây Nguyên.</li><li>Quặng apatite → sản xuất phân lân.</li></ul>` },
    { title: 'Khai thác và sử dụng bền vững', html: `<p>Nguyên liệu khoáng sản là <b>tài nguyên không tái tạo</b> (khai thác hết sẽ không còn). Khai thác bừa bãi gây sạt lở, ô nhiễm đất, nước, không khí và phá rừng.</p>
      <ul><li>Khai thác <b>có kế hoạch, đúng quy định</b>, phục hồi môi trường sau khai thác.</li><li>Sử dụng tiết kiệm; <b>tái chế</b> kim loại, thuỷ tinh để giảm khai thác mới.</li><li>Tìm nguyên liệu thay thế thân thiện với môi trường.</li></ul>` }
  ],
  summary: 'Nguyên liệu là vật liệu tự nhiên chưa qua xử lí, dùng để sản xuất sản phẩm (quặng, đá vôi, cát, đất sét, dầu mỏ…). Đá vôi rắn, không tan trong nước, bị phân huỷ khi nung, sủi bọt với giấm; dùng làm vôi, xi măng. Khoáng sản không tái tạo nên cần khai thác hợp lí, tiết kiệm và tái chế.',
  examples: [
    { title: 'Nguyên liệu hay vật liệu?', problem: 'Trong các chất sau, đâu là nguyên liệu, đâu là vật liệu: quặng sắt, thép, cát, thuỷ tinh?', solution: 'Nguyên liệu (chưa qua xử lí): <b>quặng sắt, cát</b>. Vật liệu (đã qua chế biến): <b>thép, thuỷ tinh</b>.' },
    { title: 'Nhận biết đá vôi', problem: 'Có hai mẩu đá màu trắng, một mẩu là đá vôi. Em làm thế nào để nhận ra?', solution: 'Nhỏ vài giọt giấm lên mỗi mẩu: mẩu nào <b>sủi bọt khí</b> là đá vôi.' },
    { title: 'Tác hại của khai thác bừa bãi', problem: 'Nêu hai tác hại của việc khai thác cát trái phép ở lòng sông.', solution: 'Gây <b>sạt lở bờ sông</b>, mất đất, nhà cửa; làm thay đổi dòng chảy, ảnh hưởng đến sinh vật và giao thông đường thuỷ.' }
  ],
  exercises: [
    { question: 'Kể tên nguyên liệu dùng để sản xuất: a) xi măng; b) gạch nung; c) nhôm.', hints: ['Xi măng và vôi có chung một nguyên liệu chính.', 'Gạch nung được làm từ loại đất nào?'], solution: 'a) <b>Đá vôi</b> (cùng đất sét…). b) <b>Đất sét</b>. c) <b>Quặng bauxite</b>.' },
    { question: 'Vì sao nói khoáng sản là tài nguyên không tái tạo? Em cần làm gì để góp phần sử dụng hợp lí?', hints: ['Khoáng sản hình thành trong bao lâu?', 'Tái chế lon nhôm có giúp giảm khai thác quặng không?'], solution: 'Khoáng sản hình thành trong hàng triệu năm; khai thác hết thì không thể phục hồi trong thời gian ngắn. Em có thể phân loại rác, thu gom lon nhôm, sắt vụn, chai thuỷ tinh để tái chế, dùng đồ dùng tiết kiệm, bền lâu.' },
    { question: 'Người ta nung đá vôi để sản xuất vôi sống. Vì sao lò nung vôi cần đặt xa khu dân cư?', hints: ['Khi nung đá vôi, ngoài vôi sống còn sinh ra khí gì?', 'Lò nung còn tạo ra nhiều khói, bụi.'], solution: 'Quá trình nung sinh ra nhiều <b>khí carbon dioxide, khói và bụi</b>, gây ô nhiễm không khí, ảnh hưởng đến sức khoẻ người dân nên cần đặt xa khu dân cư.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nguyên liệu là:', options: ['Sản phẩm đã hoàn thiện', 'Vật liệu tự nhiên chưa qua xử lí, dùng để sản xuất sản phẩm', 'Chất cháy được', 'Thức ăn của con người'], answer: 1, explain: 'Nguyên liệu là vật liệu thô, chưa qua xử lí.' },
    { type: 'mcq', q: 'Nguyên liệu chính để sản xuất nhôm là:', options: ['Quặng sắt', 'Đá vôi', 'Quặng bauxite', 'Cát'], answer: 2, explain: 'Nhôm được sản xuất từ quặng bauxite.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đá vôi tan tốt trong nước.', answer: false, explain: 'Đá vôi không tan trong nước.' },
    { type: 'mcq', q: 'Hiện tượng khi nhỏ giấm lên đá vôi là:', options: ['Đá vôi chuyển màu đỏ', 'Có sủi bọt khí', 'Không có hiện tượng gì', 'Đá vôi bốc cháy'], answer: 1, explain: 'Giấm phản ứng với đá vôi sinh ra khí carbon dioxide nên sủi bọt.' },
    { type: 'short', q: 'Thuỷ tinh được sản xuất chủ yếu từ nguyên liệu nào? (1 tiếng)', answer: ['cát', 'cat'], answerText: 'cát', explain: 'Cát trắng (cát thạch anh) là nguyên liệu chính để sản xuất thuỷ tinh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tái chế lon nhôm giúp giảm việc khai thác quặng bauxite.', answer: true, explain: 'Tái chế tận dụng kim loại cũ, giảm nhu cầu khai thác mới.' },
    { type: 'mcq', q: 'Khi nung ở nhiệt độ cao, đá vôi bị phân huỷ tạo thành:', options: ['Vôi sống và khí carbon dioxide', 'Sắt và oxygen', 'Nước và muối', 'Cát và đất sét'], answer: 0, explain: 'Đá vôi (calcium carbonate) bị nhiệt phân thành vôi sống và carbon dioxide.' },
    { type: 'mcq', q: 'Việc làm nào gây hại cho môi trường khi khai thác nguyên liệu?', options: ['Trồng lại rừng sau khai thác', 'Khai thác theo quy hoạch', 'Khai thác cát trái phép ở lòng sông', 'Xử lí nước thải mỏ trước khi thải ra'], answer: 2, explain: 'Khai thác cát trái phép gây sạt lở, ô nhiễm.' }
  ]
});
})();
