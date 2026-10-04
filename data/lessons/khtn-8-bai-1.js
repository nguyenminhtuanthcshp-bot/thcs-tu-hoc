/* KHTN 8 – Bài 1. Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-1', {
  objectives: [
    'Nhận biết được một số dụng cụ và hoá chất thường dùng trong phòng thí nghiệm.',
    'Trình bày được cách lấy, sử dụng hoá chất an toàn.',
    'Sử dụng đúng cách đèn cồn, ống nghiệm, kẹp ống nghiệm khi đun nóng.',
    'Biết cách sử dụng an toàn một số thiết bị điện trong phòng thí nghiệm.'
  ],
  intro: 'Năm lớp 8, em sẽ làm nhiều thí nghiệm hoá học hơn: đun nóng, pha dung dịch, cho các chất phản ứng với nhau… Biết dùng đúng dụng cụ và hoá chất giúp thí nghiệm <b>thành công</b> và <b>an toàn</b>.',
  steps: [
    { title: 'Một số dụng cụ thường dùng', html: `<ul><li><b>Ống nghiệm, giá để ống nghiệm, kẹp ống nghiệm</b>: đựng và đun lượng nhỏ hoá chất.</li><li><b>Cốc thuỷ tinh, bình tam giác</b>: đựng, pha chế dung dịch.</li><li><b>Ống đong</b>: đo thể tích chất lỏng.</li><li><b>Ống hút nhỏ giọt, thìa lấy hoá chất, panh (kẹp)</b>: lấy hoá chất.</li><li><b>Đèn cồn, lưới tản nhiệt (lưới thép)</b>: đun nóng.</li></ul>`,
      svg: S.apparatus({ items: ['ong-nghiem', 'coc', 'binh-tam-giac', 'ong-dong', 'den-con', 'ong-hut', 'thia', 'gia'] }), caption: 'Một số dụng cụ thường dùng trong phòng thí nghiệm.' },
    { title: 'Hoá chất và cách lấy hoá chất', html: `<p>Hoá chất thường được đựng trong lọ có nhãn ghi tên, công thức, nồng độ và kí hiệu cảnh báo. Hoá chất rắn thường để trong lọ miệng rộng, hoá chất lỏng trong lọ miệng hẹp.</p>
      <ul><li>Lấy hoá chất rắn dạng bột bằng <b>thìa</b>; dạng viên, miếng bằng <b>panh</b>.</li><li>Lấy lượng nhỏ hoá chất lỏng bằng <b>ống hút nhỏ giọt</b>; lượng lớn thì rót nhẹ, nhãn lọ hướng vào lòng bàn tay.</li><li>Lấy xong phải <b>đậy nắp ngay</b>; hoá chất thừa không đổ trở lại lọ.</li></ul>
      <div class="box tip">Không cầm hoá chất bằng tay, không nếm, không ngửi trực tiếp.</div>` },
    { title: 'Sử dụng đèn cồn', html: `<ul><li>Cồn trong đèn <b>không quá 2/3</b> thể tích bình chứa.</li><li>Châm đèn bằng que diêm hoặc bật lửa; <b>không</b> châm từ một đèn cồn khác đang cháy.</li><li>Muốn tắt đèn: <b>đậy nắp</b> lại, <b>không thổi</b>.</li><li>Đun bằng phần <b>ngọn lửa bên ngoài</b> (nóng nhất).</li></ul>`,
      svg: S.burnerFlame(), caption: 'Đèn cồn: cồn không quá 2/3 bình; phần ngoài của ngọn lửa nóng nhất.' },
    { title: 'Đun chất lỏng trong ống nghiệm', html: `<ul><li>Chất lỏng chiếm <b>không quá 1/3</b> ống nghiệm.</li><li>Kẹp ống nghiệm ở khoảng <b>1/3 ống tính từ miệng</b> xuống.</li><li>Hơ nóng đều ống, sau đó đun tập trung ở đáy; nghiêng ống khoảng 45°.</li><li><b>Hướng miệng ống</b> về phía không có người.</li></ul>`,
      svg: S.heatTube(), caption: 'Đun chất lỏng trong ống nghiệm đúng cách.' },
    { title: 'Thiết bị điện', html: `<p>Một số thiết bị: <b>biến áp nguồn</b> (cung cấp điện áp thấp, an toàn), <b>ampe kế</b> (đo cường độ dòng điện), <b>vôn kế</b> (đo hiệu điện thế), dây nối, công tắc, bóng đèn…</p>
      <ul><li>Kiểm tra dây dẫn, thiết bị trước khi dùng; không chạm vào thiết bị khi tay ướt.</li><li>Chọn đúng thang đo, lắp đúng cực (+) và (−).</li><li>Chỉ bật nguồn khi thầy cô đã kiểm tra mạch điện; tắt nguồn trước khi tháo mạch.</li></ul>`,
      svg: S.circuitSymbols({ items: ['cell', 'switch', 'lamp', 'ammeter', 'voltmeter', 'resistor', 'fuse', 'wire'] }), caption: 'Kí hiệu một số bộ phận, thiết bị điện (học kĩ hơn ở chương Điện).' }
  ],
  summary: 'Lấy hoá chất bằng thìa, panh, ống hút; không dùng tay. Đèn cồn: cồn ≤ 2/3 bình, tắt bằng nắp. Đun ống nghiệm: chất lỏng ≤ 1/3 ống, kẹp ở 1/3 từ miệng, miệng ống hướng ra chỗ không có người.',
  examples: [
    { title: 'Tắt đèn cồn', problem: 'Vì sao không được thổi tắt đèn cồn?', solution: 'Thổi có thể làm ngọn lửa bùng vào trong bình, gây cháy nổ. Cách đúng là đậy nắp để ngăn không khí, ngọn lửa tự tắt.' },
    { title: 'Chọn dụng cụ', problem: 'Để lấy khoảng 5 giọt dung dịch, em dùng dụng cụ nào? Để lấy một viên kẽm thì dùng gì?', solution: '5 giọt dung dịch: ống hút nhỏ giọt. Viên kẽm: panh (kẹp).' },
    { title: 'Nhận xét cách đun', problem: 'Bạn Hùng đổ đầy nửa ống nghiệm nước và hướng miệng ống về phía bạn Lan khi đun. Chỉ ra hai điểm sai.', solution: '1) Chất lỏng không được quá 1/3 ống nghiệm (nửa ống là quá nhiều, dễ trào khi sôi). 2) Không được hướng miệng ống vào người khác vì chất lỏng sôi có thể bắn ra gây bỏng.' }
  ],
  exercises: [
    { question: 'Kể tên ba dụng cụ dùng để lấy hoá chất.', hints: ['Có dụng cụ cho chất rắn dạng bột, dạng viên.', 'Có dụng cụ cho chất lỏng lượng nhỏ.'], solution: 'Thìa lấy hoá chất, panh (kẹp), ống hút nhỏ giọt.' },
    { question: 'Khi đun, nên dùng phần nào của ngọn lửa đèn cồn? Vì sao?', hints: ['Ngọn lửa đèn cồn có nhiều phần nóng khác nhau.', 'Phần ngoài tiếp xúc nhiều với oxygen của không khí.'], solution: 'Dùng phần ngọn lửa bên ngoài vì cồn cháy hoàn toàn ở đó nên nóng nhất.' },
    { question: 'Nêu hai lưu ý an toàn khi dùng biến áp nguồn và các thiết bị điện.', hints: ['Nghĩ đến tay ướt và nước.', 'Nghĩ đến thời điểm bật, tắt nguồn.'], solution: 'Ví dụ: không chạm vào thiết bị điện khi tay ướt; chỉ bật nguồn khi thầy cô đã kiểm tra mạch và tắt nguồn trước khi tháo mạch.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Lượng cồn trong đèn cồn không nên vượt quá:', options: ['1/3 bình', '1/2 bình', '2/3 bình', 'đầy bình'], answer: 2, explain: 'Cồn không quá 2/3 thể tích bình chứa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể châm đèn cồn bằng một đèn cồn khác đang cháy.', answer: false, explain: 'Làm vậy dễ làm cồn đổ ra gây cháy; phải dùng que diêm hoặc bật lửa.' },
    { type: 'mcq', q: 'Dụng cụ dùng để đo thể tích chất lỏng là:', options: ['Ống nghiệm', 'Ống đong', 'Đèn cồn', 'Panh'], answer: 1, explain: 'Ống đong có vạch chia để đo thể tích chất lỏng.' },
    { type: 'short', q: 'Một ống nghiệm chứa được 18 mL. Khi đun, lượng chất lỏng trong ống nhiều nhất là bao nhiêu mL?', answer: '6', unit: 'mL', calc: '18/3', explain: 'Không quá 1/3 ống: 18 : 3 = 6 mL.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hoá chất lấy thừa nên đổ trở lại lọ để tiết kiệm.', answer: false, explain: 'Không đổ hoá chất thừa trở lại lọ vì có thể làm bẩn cả lọ hoá chất.' },
    { type: 'short', q: 'Bình chứa của một đèn cồn có dung tích 150 mL. Lượng cồn nhiều nhất nên đổ vào đèn là bao nhiêu mL?', answer: '100', unit: 'mL', calc: '150*2/3', explain: 'Không quá 2/3 bình: 150 · 2/3 = 100 mL.' },
    { type: 'mcq', q: 'Thiết bị dùng để đo cường độ dòng điện là:', options: ['Vôn kế', 'Ampe kế', 'Biến áp nguồn', 'Nhiệt kế'], answer: 1, explain: 'Ampe kế đo cường độ dòng điện; vôn kế đo hiệu điện thế.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi đun, cần hướng miệng ống nghiệm về phía không có người.', answer: true, explain: 'Để tránh chất lỏng sôi bắn vào người khác.' }
  ]
});
})();
