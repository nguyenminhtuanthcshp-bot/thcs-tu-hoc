/* KHTN 6 – Bài 52. Chuyển động nhìn thấy của Mặt Trời. Thiên thể. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-52', {
  objectives: [
    'Mô tả được chuyển động nhìn thấy hằng ngày của Mặt Trời: mọc ở phía Đông, lặn ở phía Tây.',
    'Giải thích được hiện tượng ngày, đêm và chuyển động nhìn thấy của Mặt Trời là do Trái Đất tự quay quanh trục từ Tây sang Đông.',
    'Nêu được khái niệm thiên thể và kể được một số loại thiên thể.'
  ],
  intro: 'Sáng nào Mặt Trời cũng mọc ở phía Đông, trưa lên cao, chiều lặn ở phía Tây. Có phải Mặt Trời thật sự "đi" quanh Trái Đất?',
  steps: [
    { title: 'Chuyển động nhìn thấy của Mặt Trời', html: `<p>Người quan sát trên mặt đất thấy Mặt Trời <b>mọc ở phía Đông</b>, lên cao dần, đến trưa ở vị trí cao nhất, rồi thấp dần và <b>lặn ở phía Tây</b>.</p>`,
      svg: S.sunPath(), caption: 'Đường đi nhìn thấy của Mặt Trời trên bầu trời trong một ngày.' },
    { title: 'Vì sao có ngày và đêm?', html: `<p>Trái Đất có dạng gần như hình cầu, luôn được Mặt Trời chiếu sáng <b>một nửa</b>: nửa được chiếu sáng là <b>ngày</b>, nửa không được chiếu sáng là <b>đêm</b>.</p>
      <p>Trái Đất <b>tự quay quanh trục</b> theo hướng <b>từ Tây sang Đông</b>, mỗi vòng khoảng <b>24 giờ</b>, nên mọi nơi trên Trái Đất lần lượt có ngày và đêm.</p>`,
      svg: S.sunEarth(), caption: 'Nửa Trái Đất hướng về Mặt Trời là ban ngày, nửa kia là ban đêm.' },
    { title: 'Mặt Trời "chuyển động" chỉ là nhìn thấy', html: `<p>Thực ra Mặt Trời không quay quanh Trái Đất. Vì Trái Đất quay từ Tây sang Đông nên ta thấy Mặt Trời (và các sao) dường như chuyển động ngược lại: <b>từ Đông sang Tây</b>.</p>
      <p>Giống như khi ngồi trên ô tô chạy, ta thấy cây bên đường như chạy lùi về phía sau.</p>
      <div class="box key">Trái Đất quay một vòng (360°) trong khoảng 24 giờ → mỗi giờ quay khoảng 360 : 24 = 15°.</div>` },
    { title: 'Thiên thể', html: `<p><b>Thiên thể</b> là các vật thể tự nhiên tồn tại trong không gian vũ trụ.</p>
      <ul><li><b>Sao</b>: thiên thể tự phát sáng (Mặt Trời là một ngôi sao).</li><li><b>Hành tinh</b>: quay quanh sao, không tự phát sáng (Trái Đất, Sao Hoả…).</li>
      <li><b>Vệ tinh tự nhiên</b>: quay quanh hành tinh (Mặt Trăng là vệ tinh của Trái Đất).</li><li><b>Sao chổi</b>, <b>tiểu hành tinh</b>, <b>thiên thạch</b>…</li></ul>
      <p>Vệ tinh nhân tạo, trạm vũ trụ do con người chế tạo nên <b>không phải</b> thiên thể.</p>` }
  ],
  summary: 'Hằng ngày ta thấy Mặt Trời mọc ở phía Đông, lặn ở phía Tây. Đó là chuyển động nhìn thấy, do Trái Đất tự quay quanh trục từ Tây sang Đông (khoảng 24 giờ một vòng, 15° mỗi giờ). Trái Đất luôn được chiếu sáng một nửa nên có ngày và đêm. Thiên thể là vật thể tự nhiên trong vũ trụ: sao, hành tinh, vệ tinh, sao chổi…',
  examples: [
    { title: 'Xác định hướng', problem: 'Buổi sáng em đứng quay mặt về phía Mặt Trời mọc. Phía sau lưng em là hướng nào?', solution: 'Mặt hướng về phía <b>Đông</b> nên sau lưng là hướng <b>Tây</b> (tay trái chỉ hướng Bắc, tay phải chỉ hướng Nam).' },
    { title: 'Tính góc quay', problem: 'Trong 6 giờ, Trái Đất quay được bao nhiêu độ?', solution: 'Mỗi giờ 15° → 6 × 15 = <b>90°</b>.' },
    { title: 'Thiên thể', problem: 'Mặt Trăng, vệ tinh Vinasat-1, Sao Kim: vật nào không phải thiên thể?', solution: '<b>Vệ tinh Vinasat-1</b> – do con người chế tạo.' }
  ],
  exercises: [
    { question: 'Nếu Trái Đất không tự quay quanh trục thì hiện tượng ngày, đêm sẽ ra sao?', hints: ['Nửa nào luôn được chiếu sáng?', 'Một nơi sẽ ở mãi nửa sáng hoặc nửa tối?'], solution: 'Một nửa Trái Đất sẽ luôn là ngày (rất nóng), nửa kia luôn là đêm (rất lạnh) – không còn sự luân phiên ngày đêm như hiện nay (chỉ thay đổi rất chậm khi Trái Đất quay quanh Mặt Trời).' },
    { question: 'Trái Đất quay 1 vòng 360° mất 24 giờ. Mất bao lâu để quay được 45°?', hints: ['Mỗi giờ quay 15°.', '45 : 15.'], solution: '45 : 15 = <b>3 giờ</b>.' },
    { question: 'Vì sao buổi trưa bóng của cây cột ngắn nhất?', hints: ['Buổi trưa Mặt Trời ở vị trí nào trên bầu trời?', 'Mặt Trời càng cao, bóng càng thế nào?'], solution: 'Buổi trưa Mặt Trời ở vị trí <b>cao nhất</b> trên bầu trời, tia sáng chiếu gần thẳng đứng nên bóng cột <b>ngắn nhất</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hằng ngày, ta thấy Mặt Trời mọc ở phía:', options: ['Đông', 'Tây', 'Nam', 'Bắc'], answer: 0, explain: 'Mặt Trời mọc ở phía Đông, lặn ở phía Tây.' },
    { type: 'mcq', q: 'Trái Đất tự quay quanh trục theo hướng:', options: ['Từ Tây sang Đông', 'Từ Đông sang Tây', 'Từ Bắc xuống Nam', 'Từ Nam lên Bắc'], answer: 0, explain: 'Vì vậy ta thấy Mặt Trời đi từ Đông sang Tây.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mặt Trời mọc và lặn vì Mặt Trời quay quanh Trái Đất mỗi ngày.', answer: false, explain: 'Đó là chuyển động nhìn thấy do Trái Đất tự quay.' },
    { type: 'short', q: 'Mỗi giờ Trái Đất quay được bao nhiêu độ?', answer: '15', unit: '°', calc: '360/24', explain: '360 : 24 = 15°.' },
    { type: 'mcq', q: 'Vật nào sau đây KHÔNG phải thiên thể?', options: ['Trạm vũ trụ quốc tế', 'Mặt Trăng', 'Sao Hoả', 'Sao chổi'], answer: 0, explain: 'Trạm vũ trụ do con người chế tạo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mặt Trời là một ngôi sao.', answer: true, explain: 'Mặt Trời tự phát sáng – là một ngôi sao.' },
    { type: 'short', q: 'Trái Đất quay được 120° mất bao nhiêu giờ?', answer: '8', unit: 'giờ', calc: '120/15', explain: '120 : 15 = 8 giờ.' },
    { type: 'mcq', q: 'Trong hình, nửa Trái Đất bên phải (không hướng về Mặt Trời) đang là:', svg: S.sunEarth(), options: ['Ban đêm', 'Ban ngày', 'Buổi trưa', 'Không xác định được'], answer: 0, explain: 'Nửa không được chiếu sáng là ban đêm.' }
  ]
});
})();
