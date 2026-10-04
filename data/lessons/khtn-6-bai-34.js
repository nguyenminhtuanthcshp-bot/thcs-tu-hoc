/* KHTN 6 – Bài 34. Thực vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-34', {
  objectives: [
    'Phân biệt được bốn nhóm thực vật: Rêu, Dương xỉ, Hạt trần, Hạt kín dựa vào đặc điểm mạch dẫn, hạt, hoa và quả.',
    'Lấy được ví dụ đại diện cho mỗi nhóm.',
    'Nêu được vai trò của thực vật đối với môi trường, động vật và con người.'
  ],
  intro: 'Từ lớp rêu xanh trên bờ tường, cây dương xỉ dưới tán rừng, rừng thông Đà Lạt đến cây lúa, cây xoài – thực vật vô cùng đa dạng. Làm sao xếp chúng thành nhóm?',
  steps: [
    { title: 'Đặc điểm chung của thực vật', html: `<ul><li>Đa bào, nhân thực; tế bào có <b>thành cellulose</b> và <b>lục lạp</b>.</li><li>Sống <b>tự dưỡng</b>: tự tổng hợp chất hữu cơ nhờ quang hợp.</li><li>Phần lớn sống cố định, không di chuyển.</li></ul>` },
    { title: 'Bốn nhóm thực vật', html: `<table class="tbl"><tr><th>Nhóm</th><th>Mạch dẫn</th><th>Sinh sản</th><th>Đại diện</th></tr>
      <tr><td><b>Rêu</b></td><td>Chưa có</td><td>Bào tử</td><td>Rêu tường</td></tr><tr><td><b>Dương xỉ</b></td><td>Có</td><td>Bào tử (ổ túi bào tử ở mặt dưới lá)</td><td>Dương xỉ, rau bợ, lông cu li</td></tr>
      <tr><td><b>Hạt trần</b></td><td>Có</td><td>Hạt nằm lộ trên lá noãn, chưa có hoa và quả</td><td>Thông, vạn tuế, kim giao</td></tr><tr><td><b>Hạt kín</b></td><td>Có</td><td>Có hoa, quả; hạt nằm trong quả</td><td>Lúa, xoài, bưởi, hoa hồng</td></tr></table>
      <p>Rêu là nhóm đơn giản nhất: cây nhỏ, có rễ giả, chưa có mạch dẫn, sống nơi ẩm. Hạt kín là nhóm tiến hoá nhất, đa dạng nhất.</p>` },
    { title: 'Khoá lưỡng phân các nhóm thực vật', html: `<p>Ta có thể dùng ba câu hỏi để xác định nhóm thực vật:</p>`,
      svg: S.keyTree({ q: 'Có mạch dẫn?', yes: { q: 'Có hạt?', yes: { q: 'Có hoa, quả (hạt nằm trong quả)?', yes: 'Hạt kín', no: 'Hạt trần' }, no: 'Dương xỉ' }, no: 'Rêu' }, { w: 620 }),
      caption: 'Khoá lưỡng phân bốn nhóm thực vật.' },
    { title: 'Vai trò của thực vật', html: `<ul><li><b>Với môi trường</b>: quang hợp tạo oxygen, hấp thụ carbon dioxide, điều hoà khí hậu; rễ cây giữ đất, chống xói mòn, sạt lở; rừng hạn chế lũ lụt.</li>
      <li><b>Với động vật</b>: cung cấp thức ăn, nơi ở, nơi sinh sản.</li><li><b>Với con người</b>: lương thực (lúa, ngô), thực phẩm (rau, quả), gỗ, thuốc (tía tô, gừng), cây cảnh, nguyên liệu công nghiệp (bông, cao su).</li>
      <li>Một số cây có hại: cây thuốc phiện, cần sa (gây nghiện), cây trúc đào, lá ngón (có độc).</li></ul>` }
  ],
  summary: 'Thực vật đa bào, nhân thực, có lục lạp, tự dưỡng. Bốn nhóm: Rêu (chưa có mạch dẫn), Dương xỉ (có mạch dẫn, sinh sản bằng bào tử), Hạt trần (có hạt nhưng chưa có hoa, quả), Hạt kín (có hoa, quả, hạt nằm trong quả). Thực vật tạo oxygen, điều hoà khí hậu, giữ đất, cung cấp thức ăn và nhiều sản phẩm cho con người.',
  examples: [
    { title: 'Xếp nhóm', problem: 'Xếp các cây vào nhóm: cây thông, cây rêu, cây lúa, cây dương xỉ.', solution: 'Rêu: <b>cây rêu</b>. Dương xỉ: <b>cây dương xỉ</b>. Hạt trần: <b>cây thông</b>. Hạt kín: <b>cây lúa</b>.' },
    { title: 'Dùng khoá', problem: 'Một cây có mạch dẫn, có hạt, hạt nằm trong quả. Cây thuộc nhóm nào?', solution: 'Nhóm <b>Hạt kín</b>.' },
    { title: 'Chống sạt lở', problem: 'Vì sao trồng rừng đầu nguồn giúp giảm lũ quét, sạt lở đất?', solution: 'Rễ cây <b>giữ đất</b>; tán lá và thảm mục làm nước mưa chảy chậm, thấm vào đất nhiều hơn, giảm dòng chảy mạnh cuốn đất đá.' }
  ],
  exercises: [
    { question: 'Vì sao rêu thường chỉ sống được ở nơi ẩm ướt và có kích thước nhỏ?', hints: ['Rêu có mạch dẫn không?', 'Không có mạch dẫn thì vận chuyển nước lên cao được không?'], solution: 'Rêu <b>chưa có mạch dẫn</b>, rễ chỉ là rễ giả nên không vận chuyển nước lên cao được; cây phải nhỏ và sống nơi ẩm để hút nước trực tiếp qua bề mặt.' },
    { question: 'Nêu điểm khác nhau cơ bản giữa cây thông (Hạt trần) và cây bưởi (Hạt kín).', hints: ['Cả hai đều có hạt.', 'Hạt nằm ở đâu? Có hoa, quả không?'], solution: 'Cây thông chưa có hoa và quả thật sự, hạt nằm lộ trên các lá noãn (vảy nón). Cây bưởi có hoa, quả; hạt nằm kín trong quả.' },
    { question: 'Kể tên 3 vai trò của thực vật đối với con người, mỗi vai trò một ví dụ.', hints: ['Ăn, uống, làm nhà…', 'Làm thuốc, làm đẹp.'], solution: 'Lương thực: lúa, ngô. Lấy gỗ: lim, xoan. Làm thuốc: gừng, tía tô. (Hoặc: cây cảnh – mai, đào; lấy sợi – bông.)' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nhóm thực vật chưa có mạch dẫn là:', options: ['Rêu', 'Dương xỉ', 'Hạt trần', 'Hạt kín'], answer: 0, explain: 'Rêu chưa có mạch dẫn.' },
    { type: 'mcq', q: 'Cây thông thuộc nhóm:', options: ['Rêu', 'Dương xỉ', 'Hạt trần', 'Hạt kín'], answer: 2, explain: 'Thông có hạt nằm lộ trên lá noãn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dương xỉ sinh sản bằng hạt.', answer: false, explain: 'Dương xỉ sinh sản bằng bào tử.' },
    { type: 'mcq', q: 'Đặc điểm chỉ có ở nhóm Hạt kín:', options: ['Có hoa và quả', 'Có mạch dẫn', 'Có lục lạp', 'Sinh sản bằng bào tử'], answer: 0, explain: 'Chỉ Hạt kín có hoa, quả thật sự.' },
    { type: 'mcq', q: 'Theo khoá dưới đây, cây có mạch dẫn nhưng không có hạt thuộc nhóm:', svg: S.keyTree({ q: 'Có mạch dẫn?', yes: { q: 'Có hạt?', yes: { q: 'Có hoa, quả (hạt nằm trong quả)?', yes: 'Hạt kín', no: 'Hạt trần' }, no: 'Dương xỉ' }, no: 'Rêu' }, { w: 620 }), options: ['Rêu', 'Dương xỉ', 'Hạt trần', 'Hạt kín'], answer: 1, explain: 'Dương xỉ có mạch dẫn, sinh sản bằng bào tử.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rừng giúp hạn chế xói mòn đất và lũ lụt.', answer: true, explain: 'Rễ giữ đất, tán cây làm chậm dòng nước.' },
    { type: 'mcq', q: 'Thực vật tạo ra khí oxygen nhờ quá trình:', options: ['Quang hợp', 'Hô hấp', 'Bài tiết', 'Sinh sản'], answer: 0, explain: 'Quang hợp thải ra oxygen.' },
    { type: 'short', q: 'Nhóm thực vật có hoa, quả, hạt nằm trong quả gọi là nhóm gì? (điền 2 tiếng)', answer: ['hạt kín', 'hat kin'], answerText: 'Hạt kín', explain: 'Hạt kín là nhóm đa dạng nhất.' }
  ]
});
})();
