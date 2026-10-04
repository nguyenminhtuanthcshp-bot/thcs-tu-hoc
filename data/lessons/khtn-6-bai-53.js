/* KHTN 6 – Bài 53. Mặt Trăng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-53', {
  objectives: [
    'Nêu được Mặt Trăng là vệ tinh tự nhiên của Trái Đất, không tự phát sáng mà phản chiếu ánh sáng Mặt Trời.',
    'Giải thích được vì sao ta thấy Mặt Trăng có các hình dạng (pha) khác nhau.',
    'Kể được tên và thứ tự các pha Mặt Trăng trong một tháng âm lịch (khoảng 29,5 ngày).'
  ],
  intro: 'Đầu tháng âm lịch, trăng là một vệt cong mảnh như lưỡi liềm; giữa tháng (Rằm) trăng tròn vành vạnh. Vì sao hình dạng Mặt Trăng thay đổi như vậy?',
  steps: [
    { title: 'Mặt Trăng', html: `<ul><li>Mặt Trăng là <b>vệ tinh tự nhiên</b> duy nhất của Trái Đất, quay quanh Trái Đất.</li>
      <li>Mặt Trăng <b>không tự phát sáng</b>; ta nhìn thấy nó vì nó <b>phản chiếu ánh sáng Mặt Trời</b>. Luôn có một nửa Mặt Trăng được chiếu sáng.</li>
      <li>Mặt Trăng cách Trái Đất khoảng 384 000 km; không có không khí, không có nước ở dạng lỏng, bề mặt có nhiều hố va chạm.</li></ul>` },
    { title: 'Vì sao có các pha Mặt Trăng?', html: `<p>Khi Mặt Trăng quay quanh Trái Đất, vị trí tương đối của Mặt Trời – Trái Đất – Mặt Trăng thay đổi. Từ Trái Đất, ta chỉ thấy <b>một phần</b> nửa được chiếu sáng của Mặt Trăng, phần này lúc nhiều lúc ít → Mặt Trăng có nhiều hình dạng gọi là các <b>pha</b>.</p>`,
      svg: S.moonOrbit(), caption: 'Tám vị trí của Mặt Trăng trên quỹ đạo; nửa quay về phía Mặt Trời luôn được chiếu sáng.' },
    { title: 'Các pha trong một tháng âm lịch', html: `<p>Chu kì các pha lặp lại khoảng <b>29,5 ngày</b> (một tháng âm lịch):</p>`,
      svg: S.moonStrip({ cols: 4 }), caption: 'Hình dạng Mặt Trăng nhìn từ Việt Nam, theo thứ tự các vị trí 1 → 8 ở hình trên.' },
    { title: 'Ghi nhớ', html: `<ul><li><b>Không trăng</b> (trăng mới, đầu tháng – mùng 1): Mặt Trăng nằm giữa Trái Đất và Mặt Trời, phần được chiếu sáng quay hết ra phía sau.</li>
      <li><b>Trăng tròn</b> (khoảng ngày 15, 16 âm lịch – Rằm): Trái Đất nằm giữa, ta thấy toàn bộ nửa được chiếu sáng.</li>
      <li>Nửa đầu tháng phần sáng <b>tăng dần</b> (sáng ở phía bên phải khi nhìn từ Việt Nam); nửa cuối tháng phần sáng <b>giảm dần</b> (sáng ở phía bên trái).</li></ul>` }
  ],
  summary: 'Mặt Trăng là vệ tinh tự nhiên của Trái Đất, không tự phát sáng mà phản chiếu ánh sáng Mặt Trời. Do vị trí Mặt Trời – Trái Đất – Mặt Trăng thay đổi, ta thấy phần sáng của Mặt Trăng khác nhau: không trăng, lưỡi liềm, bán nguyệt, khuyết, trăng tròn… Chu kì các pha khoảng 29,5 ngày.',
  examples: [
    { title: 'Nhận biết pha', problem: 'Đêm Rằm tháng Tám (15 âm lịch), ta thấy Mặt Trăng có hình dạng gì?', solution: '<b>Trăng tròn</b> (hoặc gần tròn).' },
    { title: 'Vì sao thấy được Mặt Trăng', problem: 'Mặt Trăng không tự phát sáng. Vì sao ban đêm ta vẫn thấy nó sáng?', solution: 'Vì Mặt Trăng <b>phản chiếu ánh sáng Mặt Trời</b> tới mắt ta.' },
    { title: 'Tính ngày', problem: 'Hôm nay là ngày trăng tròn. Khoảng bao nhiêu ngày nữa lại có trăng tròn?', solution: 'Khoảng <b>29,5 ngày</b> (một tháng âm lịch).' }
  ],
  exercises: [
    { question: 'Vì sao vào ngày không trăng (mùng 1 âm lịch) ta không nhìn thấy Mặt Trăng?', hints: ['Lúc đó Mặt Trăng nằm ở đâu so với Trái Đất và Mặt Trời?', 'Nửa được chiếu sáng quay về phía nào?'], solution: 'Lúc đó Mặt Trăng nằm <b>giữa</b> Trái Đất và Mặt Trời; nửa được chiếu sáng quay về phía Mặt Trời, còn nửa hướng về Trái Đất là nửa tối nên ta không thấy.' },
    { question: 'Sắp xếp các pha sau theo thứ tự từ đầu tháng: trăng tròn, trăng lưỡi liềm đầu tháng, không trăng, trăng bán nguyệt đầu tháng.', hints: ['Bắt đầu từ lúc không thấy trăng.', 'Phần sáng tăng dần.'], solution: 'Không trăng → trăng lưỡi liềm đầu tháng → trăng bán nguyệt đầu tháng → trăng tròn.' },
    { question: 'Trong khoảng 1 năm có bao nhiêu lần trăng tròn? (1 năm ≈ 365 ngày, chu kì pha ≈ 29,5 ngày)', hints: ['Chia 365 cho 29,5.', 'Kết quả khoảng 12,4.'], solution: '365 : 29,5 ≈ 12,4 → khoảng <b>12</b> (có năm <b>13</b>) lần trăng tròn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mặt Trăng tự phát ra ánh sáng.', answer: false, explain: 'Mặt Trăng phản chiếu ánh sáng Mặt Trời.' },
    { type: 'mcq', q: 'Mặt Trăng là:', options: ['Vệ tinh tự nhiên của Trái Đất', 'Một ngôi sao', 'Một hành tinh', 'Vệ tinh nhân tạo'], answer: 0, explain: 'Mặt Trăng quay quanh Trái Đất.' },
    { type: 'mcq', q: 'Trăng tròn thường xuất hiện vào khoảng ngày nào âm lịch?', options: ['Ngày 15', 'Ngày 1', 'Ngày 7', 'Ngày 23'], answer: 0, explain: 'Rằm (ngày 15, 16).' },
    { type: 'short', q: 'Chu kì các pha của Mặt Trăng khoảng bao nhiêu ngày? (dùng dấu phẩy)', answer: '29,5', unit: 'ngày', explain: 'Khoảng 29,5 ngày.' },
    { type: 'mcq', q: 'Hình dạng Mặt Trăng trong hình là pha nào?', svg: S.moonFace(0.5, 40), options: ['Trăng tròn', 'Không trăng', 'Trăng lưỡi liềm', 'Trăng bán nguyệt'], answer: 0, explain: 'Toàn bộ mặt hướng về Trái Đất được chiếu sáng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ta thấy các pha Mặt Trăng vì vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng thay đổi.', answer: true, explain: 'Phần sáng ta nhìn thấy thay đổi theo vị trí.' },
    { type: 'mcq', q: 'Ngày không trăng, Mặt Trăng nằm ở vị trí:', options: ['Giữa Trái Đất và Mặt Trời', 'Sau Trái Đất (Trái Đất ở giữa)', 'Xa nhất khỏi Mặt Trời', 'Bên trong Trái Đất'], answer: 0, explain: 'Nửa sáng quay về phía Mặt Trời.' },
    { type: 'mcq', q: 'Hình dạng Mặt Trăng trong hình là pha nào?', svg: S.moonFace(0.25, 40), options: ['Trăng bán nguyệt đầu tháng', 'Trăng tròn', 'Không trăng', 'Trăng bán nguyệt cuối tháng'], answer: 0, explain: 'Sáng nửa bên phải – bán nguyệt đầu tháng (thượng huyền).' }
  ]
});
})();
