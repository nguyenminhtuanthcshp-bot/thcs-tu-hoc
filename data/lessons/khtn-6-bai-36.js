/* KHTN 6 – Bài 36. Động vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-36', {
  objectives: [
    'Phân biệt được động vật không xương sống và động vật có xương sống; kể được các nhóm chính của mỗi loại.',
    'Nhận biết được các lớp động vật có xương sống: Cá, Lưỡng cư, Bò sát, Chim, Thú qua đặc điểm cơ bản.',
    'Nêu được vai trò và tác hại của động vật đối với con người và tự nhiên.'
  ],
  intro: 'Từ con sứa trong suốt, con giun đất, con ốc sên, con ong đến con cá, con chim, con voi – giới Động vật có hơn một triệu loài đã được mô tả. Ta xếp chúng thành hai nhóm lớn dựa vào <b>xương sống</b>.',
  steps: [
    { title: 'Đặc điểm chung của động vật', html: `<ul><li>Đa bào, nhân thực, tế bào <b>không có thành tế bào</b>, không có lục lạp.</li><li>Sống <b>dị dưỡng</b>: lấy chất hữu cơ từ sinh vật khác.</li><li>Phần lớn có khả năng <b>di chuyển</b>, có hệ thần kinh và giác quan.</li></ul>` },
    { title: 'Động vật không xương sống', html: `<table class="tbl"><tr><th>Nhóm</th><th>Đặc điểm nhận biết</th><th>Đại diện</th></tr>
      <tr><td>Ruột khoang</td><td>Cơ thể hình trụ hoặc hình dù, có tua miệng, sống ở nước</td><td>Thuỷ tức, sứa, san hô, hải quỳ</td></tr>
      <tr><td>Giun</td><td>Cơ thể mềm, dài; giun dẹp, giun tròn, giun đốt</td><td>Sán lá gan, giun đũa, giun đất</td></tr>
      <tr><td>Thân mềm</td><td>Cơ thể mềm, thường có vỏ đá vôi</td><td>Ốc, trai, hến, mực, bạch tuộc</td></tr>
      <tr><td>Chân khớp</td><td>Chân phân đốt, khớp động; có bộ xương ngoài bằng chitin</td><td>Tôm, cua, nhện, châu chấu, ong, bướm</td></tr></table>` },
    { title: 'Động vật có xương sống', html: `<table class="tbl"><tr><th>Lớp</th><th>Đặc điểm nhận biết</th><th>Đại diện</th></tr>
      <tr><td>Cá</td><td>Sống dưới nước, thở bằng mang, bơi bằng vây</td><td>Cá chép, cá rô, cá mập</td></tr>
      <tr><td>Lưỡng cư</td><td>Da trần, ẩm; sống vừa ở nước vừa ở cạn; con non (nòng nọc) thở bằng mang</td><td>Ếch, nhái, cóc</td></tr>
      <tr><td>Bò sát</td><td>Da khô, có vảy sừng; đẻ trứng có vỏ dai hoặc vỏ đá vôi</td><td>Thằn lằn, rắn, rùa, cá sấu</td></tr>
      <tr><td>Chim</td><td>Có lông vũ, chi trước biến thành cánh, có mỏ sừng, đẻ trứng</td><td>Gà, bồ câu, đà điểu, chim cánh cụt</td></tr>
      <tr><td>Thú (Có vú)</td><td>Có lông mao, đa số đẻ con và nuôi con bằng sữa</td><td>Chó, mèo, trâu, cá voi, dơi</td></tr></table>`,
      svg: S.keyTree({ q: 'Thở bằng mang suốt đời, có vây?', yes: 'Cá', no: { q: 'Da trần, ẩm?', yes: 'Lưỡng cư', no: { q: 'Có vảy sừng?', yes: 'Bò sát', no: { q: 'Có lông vũ?', yes: 'Chim', no: 'Thú' } } } }, { w: 640, pitch: 84 }),
      caption: 'Khoá lưỡng phân năm lớp động vật có xương sống (đặc điểm điển hình).' },
    { title: 'Vai trò và tác hại', html: `<ul><li><b>Có lợi</b>: cung cấp thực phẩm (thịt, trứng, sữa, cá, tôm), nguyên liệu (da, lông, tơ tằm), làm thuốc (mật ong), sức kéo, làm cảnh, thụ phấn cho cây (ong, bướm), tiêu diệt sâu hại (chim sâu, ếch), làm đất tơi xốp (giun đất).</li>
      <li><b>Có hại</b>: kí sinh gây bệnh (giun đũa, sán), truyền bệnh (muỗi truyền sốt xuất huyết, sốt rét; chuột, ruồi), phá hại mùa màng (châu chấu, chuột, ốc bươu vàng), mối mọt phá đồ gỗ.</li></ul>` }
  ],
  summary: 'Động vật đa bào, nhân thực, dị dưỡng, phần lớn di chuyển được. Động vật không xương sống gồm Ruột khoang, Giun, Thân mềm, Chân khớp. Động vật có xương sống gồm Cá, Lưỡng cư, Bò sát, Chim, Thú. Động vật cung cấp thực phẩm, nguyên liệu, giúp thụ phấn…; một số gây bệnh, truyền bệnh, phá mùa màng.',
  examples: [
    { title: 'Xếp nhóm', problem: 'Xếp vào nhóm có xương sống hoặc không xương sống: con cua, con cá chép, con mực, con rắn.', solution: 'Không xương sống: <b>cua, mực</b>. Có xương sống: <b>cá chép, rắn</b>.' },
    { title: 'Cá voi', problem: 'Cá voi sống dưới nước, có vây. Vì sao cá voi thuộc lớp Thú?', solution: 'Cá voi <b>thở bằng phổi</b>, <b>đẻ con</b> và <b>nuôi con bằng sữa</b> – đặc điểm của lớp Thú.' },
    { title: 'Dơi', problem: 'Dơi biết bay nhưng không phải chim. Vì sao?', solution: 'Dơi không có lông vũ mà có lông mao, <b>đẻ con, nuôi con bằng sữa</b>; cánh là màng da – dơi thuộc lớp Thú.' }
  ],
  exercises: [
    { question: 'Tôm, cua, châu chấu thuộc nhóm nào? Nêu đặc điểm chung giúp nhận ra nhóm này.', hints: ['Quan sát chân của chúng.', 'Chúng có bộ xương ở bên ngoài.'], solution: 'Nhóm <b>Chân khớp</b>: chân phân đốt, có khớp động; có bộ xương ngoài bằng chitin.' },
    { question: 'Ếch sống cả ở nước và trên cạn. Nêu hai đặc điểm giúp xếp ếch vào lớp Lưỡng cư.', hints: ['Da của ếch thế nào?', 'Con non của ếch là gì, thở bằng gì?'], solution: 'Da <b>trần, luôn ẩm</b>; con non là <b>nòng nọc</b> sống dưới nước, thở bằng mang; con trưởng thành sống cả ở nước và cạn.' },
    { question: 'Nêu hai động vật có lợi và hai động vật có hại cho nông nghiệp.', hints: ['Ai giúp thụ phấn, diệt sâu?', 'Ai ăn lúa, phá cây?'], solution: 'Có lợi: ong (thụ phấn), ếch/chim sâu (diệt sâu hại), giun đất (làm tơi đất). Có hại: chuột, châu chấu, ốc bươu vàng (phá lúa, hoa màu).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Động vật nào thuộc nhóm không xương sống?', options: ['Con ốc sên', 'Con cá rô', 'Con thằn lằn', 'Con chim sẻ'], answer: 0, explain: 'Ốc sên thuộc Thân mềm.' },
    { type: 'mcq', q: 'Đặc điểm của lớp Chim là:', options: ['Có lông vũ, chi trước biến thành cánh', 'Da trần, ẩm', 'Thở bằng mang', 'Nuôi con bằng sữa'], answer: 0, explain: 'Lông vũ là đặc điểm riêng của chim.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cá voi thuộc lớp Cá.', answer: false, explain: 'Cá voi thở bằng phổi, đẻ con, nuôi con bằng sữa – lớp Thú.' },
    { type: 'mcq', q: 'Con vật có da khô, có vảy sừng là:', options: ['Rắn', 'Ếch', 'Cá chép', 'Giun đất'], answer: 0, explain: 'Rắn thuộc lớp Bò sát.' },
    { type: 'mcq', q: 'Nhóm Chân khớp gồm:', options: ['Tôm, cua, nhện, châu chấu', 'Giun đất, sán', 'Sứa, san hô', 'Ốc, trai, mực'], answer: 0, explain: 'Chân phân đốt, có khớp động.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Muỗi là động vật trung gian truyền bệnh sốt xuất huyết.', answer: true, explain: 'Muỗi vằn truyền virus sốt xuất huyết.' },
    { type: 'mcq', q: 'Trong khoá dưới đây, con vật không thở bằng mang suốt đời, da không trần, không có vảy sừng, có lông vũ là:', svg: S.keyTree({ q: 'Thở bằng mang suốt đời, có vây?', yes: 'Cá', no: { q: 'Da trần, ẩm?', yes: 'Lưỡng cư', no: { q: 'Có vảy sừng?', yes: 'Bò sát', no: { q: 'Có lông vũ?', yes: 'Chim', no: 'Thú' } } } }, { w: 640, pitch: 84 }), options: ['Cá', 'Lưỡng cư', 'Chim', 'Thú'], answer: 2, explain: 'Đi theo các nhánh: Không → Không → Không → Có lông vũ → Chim.' },
    { type: 'short', q: 'Động vật có xương sống được chia thành bao nhiêu lớp chính (theo bài học)?', answer: '5', unit: 'lớp', explain: 'Cá, Lưỡng cư, Bò sát, Chim, Thú.' }
  ]
});
})();
