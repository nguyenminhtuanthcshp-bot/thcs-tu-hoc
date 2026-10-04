/* KHTN 9 – Bài 15. Tác dụng của dòng điện xoay chiều. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-15', {
  objectives: [
    'Nêu được các tác dụng của dòng điện xoay chiều: nhiệt, quang, từ, sinh lí.',
    'Phân biệt được dòng điện xoay chiều và dòng điện một chiều qua đồ thị và qua tác dụng từ.',
    'Nêu được các quy tắc an toàn khi sử dụng điện xoay chiều trong gia đình.'
  ],
  intro: 'Điện lưới 220 V trong nhà làm nóng ấm nước, thắp sáng đèn, quay quạt – và cũng có thể gây điện giật chết người. Dòng điện xoay chiều có những tác dụng gì và dùng thế nào cho an toàn?',
  steps: [
    { title: 'Dòng điện một chiều và xoay chiều', html: `<ul><li><b>Dòng điện một chiều</b> (pin, acquy): chiều không đổi.</li><li><b>Dòng điện xoay chiều</b> (điện lưới): chiều và độ lớn biến đổi tuần hoàn.</li></ul>
      <p>Điện lưới Việt Nam: 220 V, tần số 50 Hz.</p>`,
      svg: S.acWave({ kind: 'ac', cycles: 2, label: 'Dòng điện xoay chiều' }), caption: 'Dòng điện xoay chiều: chiều và độ lớn biến đổi tuần hoàn theo thời gian.' },
    { title: 'Các tác dụng của dòng điện xoay chiều', html: `<table><tr><th>Tác dụng</th><th>Ví dụ</th></tr><tr><td>Nhiệt</td><td>bàn là, ấm điện, bếp điện</td></tr><tr><td>Quang (phát sáng)</td><td>đèn LED, đèn ống</td></tr><tr><td>Từ</td><td>nam châm điện, động cơ, chuông điện</td></tr><tr><td>Sinh lí</td><td>điện giật; máy kích tim (dùng đúng cách)</td></tr></table>
      <div class="box key">Tác dụng từ: khi dòng điện xoay chiều qua nam châm điện, các cực từ luân phiên đổi chỗ, nên kim nam châm đặt gần sẽ bị hút, đẩy liên tục (rung).</div>` },
    { title: 'Đo dòng điện và hiệu điện thế xoay chiều', html: `<p>Dùng ampe kế và vôn kế xoay chiều (có kí hiệu AC hoặc ~). Không cần phân biệt chốt (+) và (−) khi mắc. Số chỉ là <b>giá trị hiệu dụng</b>; ví dụ “220 V” là hiệu điện thế hiệu dụng của điện lưới.</p>`,
      svg: S.acWave({ kind: 'dc', label: 'Dòng điện một chiều' }), caption: 'So sánh: dòng điện một chiều (pin, acquy) có chiều không đổi, nên dụng cụ đo một chiều phải mắc đúng cực.' },
    { title: 'An toàn khi sử dụng điện', html: `<ul><li>Không chạm tay vào ổ điện, dây trần; không dùng tay ướt cắm phích.</li><li>Lắp cầu chì, aptomat (CB) để ngắt mạch khi có sự cố; dây dẫn phải có vỏ cách điện tốt.</li><li>Nối đất cho vỏ kim loại của máy giặt, tủ lạnh.</li><li>Khi có người bị điện giật: ngắt nguồn điện trước, dùng vật cách điện tách người ra, rồi gọi cấp cứu (115).</li></ul>` }
  ],
  summary: 'Dòng điện xoay chiều có tác dụng nhiệt, quang, từ, sinh lí. Ampe kế, vôn kế xoay chiều đo giá trị hiệu dụng, không phân biệt cực. Điện lưới 220 V – 50 Hz rất nguy hiểm: phải dùng thiết bị bảo vệ và tuân thủ quy tắc an toàn.',
  examples: [
    { title: 'Nhận biết tác dụng', problem: 'Quạt điện quay hoạt động chủ yếu dựa vào tác dụng nào của dòng điện?', solution: 'Tác dụng từ (động cơ điện có nam châm và cuộn dây).' },
    { title: 'Phân biệt dòng điện', problem: 'Đặt kim nam châm gần nam châm điện. Nối nam châm điện với pin thì kim lệch rồi đứng yên; nối với nguồn xoay chiều thì kim rung. Giải thích.', solution: 'Dòng điện một chiều tạo cực từ cố định; dòng điện xoay chiều làm cực từ đổi liên tục nên kim bị hút, đẩy luân phiên.' },
    { title: 'Xử lí sự cố', problem: 'Thấy bạn bị điện giật do chạm dây điện hở, em làm gì đầu tiên?', solution: 'Ngắt nguồn điện (rút phích, ngắt aptomat). Nếu không ngắt được, dùng vật khô cách điện (gậy gỗ, nhựa) gạt dây điện ra; không dùng tay không chạm vào người bị giật.' }
  ],
  exercises: [
    { question: 'Kể tên hai dụng cụ hoạt động dựa vào tác dụng nhiệt của dòng điện xoay chiều.', hints: ['Dụng cụ làm nóng.', 'Dùng trong bếp hoặc là quần áo.'], solution: 'Ví dụ: bàn là, ấm siêu tốc, bếp điện, máy sấy tóc.' },
    { question: 'Vì sao cần lắp aptomat (CB) cho mạng điện gia đình?', hints: ['Khi đoản mạch hoặc quá tải, dòng điện thế nào?', 'Aptomat làm gì khi dòng điện quá lớn?'], solution: 'Khi dòng điện quá lớn (đoản mạch, quá tải), aptomat tự ngắt mạch, tránh cháy dây và hư hỏng thiết bị.' },
    { question: 'Dòng điện xoay chiều có tần số 50 Hz thực hiện bao nhiêu chu kì trong 2 giây?', hints: ['50 Hz: 50 chu kì mỗi giây.', 'Nhân với 2.'], solution: '100 chu kì.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dòng điện xoay chiều có tác dụng từ.', answer: true, explain: 'Ví dụ nam châm điện, động cơ điện.' },
    { type: 'mcq', q: 'Đèn LED sáng là do tác dụng nào của dòng điện?', options: ['Tác dụng từ', 'Tác dụng quang', 'Tác dụng sinh lí', 'Tác dụng hoá học'], answer: 1, explain: 'Tác dụng phát sáng (quang).' },
    { type: 'mcq', q: 'Điện lưới gia đình ở Việt Nam có hiệu điện thế và tần số:', options: ['110 V – 60 Hz', '220 V – 50 Hz', '12 V – 50 Hz', '380 V – 100 Hz'], answer: 1, explain: '220 V – 50 Hz.' },
    { type: 'short', q: 'Dòng điện xoay chiều 50 Hz thực hiện bao nhiêu chu kì trong 3 giây?', answer: '150', unit: 'chu kì', calc: '50*3', explain: '50 · 3 = 150.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi mắc vôn kế xoay chiều cần phân biệt chốt (+) và chốt (−).', answer: false, explain: 'Dụng cụ đo xoay chiều không cần phân biệt cực.' },
    { type: 'mcq', q: 'Việc làm đầu tiên khi thấy người bị điện giật là:', options: ['kéo tay người đó ra', 'ngắt nguồn điện', 'dội nước vào người đó', 'chạy đi chỗ khác'], answer: 1, explain: 'Phải ngắt nguồn điện trước.' },
    { type: 'mcq', q: 'Dụng cụ nào hoạt động chủ yếu dựa vào tác dụng nhiệt?', options: ['Quạt điện', 'Ấm siêu tốc', 'Chuông điện', 'Loa'], answer: 1, explain: 'Ấm siêu tốc biến năng lượng điện thành nhiệt.' },
    { type: 'short', q: 'Số điện thoại cấp cứu y tế ở Việt Nam là số nào?', answer: '115', calc: '115', explain: 'Gọi 115 để cấp cứu.' }
  ]
});
})();
