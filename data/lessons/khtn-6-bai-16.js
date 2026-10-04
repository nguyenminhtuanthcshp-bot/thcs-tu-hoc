/* KHTN 6 – Bài 16. Hỗn hợp các chất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-16', {
  objectives: [
    'Phân biệt được chất tinh khiết và hỗn hợp.',
    'Phân biệt được hỗn hợp đồng nhất và hỗn hợp không đồng nhất; nhận biết dung dịch, huyền phù, nhũ tương.',
    'Nêu được khái niệm dung môi, chất tan và các yếu tố ảnh hưởng đến lượng chất tan, tốc độ hoà tan.'
  ],
  intro: 'Nước chanh em uống gồm nước, đường, nước cốt chanh. Không khí gồm nhiều chất khí. Nước biển có muối và nhiều chất khác. Trong tự nhiên và đời sống, phần lớn các chất đều tồn tại ở dạng <b>hỗn hợp</b>.',
  steps: [
    { title: 'Chất tinh khiết và hỗn hợp', html: `<ul><li><b>Chất tinh khiết</b> (chất nguyên chất): chỉ gồm <b>một chất</b>, có tính chất xác định. Ví dụ: nước cất, đường kính trắng, khí oxygen trong bình.</li>
      <li><b>Hỗn hợp</b>: gồm <b>hai hay nhiều chất</b> trộn lẫn với nhau. Ví dụ: nước muối, không khí, sữa, nước bùn.</li></ul>
      <div class="box key">Nước cất sôi ở đúng 100 °C (áp suất bình thường); nước muối sôi ở nhiệt độ cao hơn 100 °C. Chất tinh khiết có nhiệt độ sôi, nóng chảy xác định; hỗn hợp thì không.</div>` },
    { title: 'Hỗn hợp đồng nhất và không đồng nhất', html: `<table class="tbl"><tr><th>Loại</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
      <tr><td><b>Hỗn hợp đồng nhất</b></td><td>Thành phần giống nhau ở mọi nơi, không phân biệt được các chất bằng mắt thường</td><td>Nước muối, nước đường, không khí</td></tr>
      <tr><td><b>Hỗn hợp không đồng nhất</b></td><td>Thành phần không giống nhau, nhìn thấy các phần khác nhau</td><td>Nước lẫn cát, dầu ăn và nước, cháo đậu</td></tr></table>` },
    { title: 'Dung dịch, huyền phù, nhũ tương', html: `<ul><li><b>Dung dịch</b>: hỗn hợp <b>đồng nhất</b> của chất tan và dung môi. Ví dụ nước muối: muối là <b>chất tan</b>, nước là <b>dung môi</b>.</li>
      <li><b>Huyền phù</b>: hỗn hợp không đồng nhất gồm các hạt <b>chất rắn</b> lơ lửng trong chất lỏng (nước phù sa, bột sắn khuấy trong nước). Để lâu chất rắn lắng xuống.</li>
      <li><b>Nhũ tương</b>: hỗn hợp không đồng nhất gồm các giọt <b>chất lỏng</b> phân tán trong một chất lỏng khác (dầu ăn lắc mạnh với nước, sữa tươi). Để lâu có thể tách lớp.</li></ul>`,
      svg: S.draw({ w: 600, h: 190, aria: 'Dung dịch, huyền phù, nhũ tương', items: [
        { poly: [[40, 40], [40, 150], [160, 150], [160, 40]], fill: '#dbeafe', color: '#1d4ed8' }, { text: [100, 178, 'Dung dịch (trong suốt)'], bold: true, size: 13 },
        { poly: [[240, 40], [240, 150], [360, 150], [360, 40]], fill: '#fef3c7', color: '#92400e' },
        { circle: [260, 70, 3], fill: '#92400e', color: '#92400e' }, { circle: [300, 95, 3], fill: '#92400e', color: '#92400e' }, { circle: [335, 60, 3], fill: '#92400e', color: '#92400e' }, { circle: [280, 125, 3], fill: '#92400e', color: '#92400e' }, { circle: [320, 135, 3], fill: '#92400e', color: '#92400e' }, { circle: [345, 110, 3], fill: '#92400e', color: '#92400e' }, { circle: [258, 140, 3], fill: '#92400e', color: '#92400e' },
        { text: [300, 178, 'Huyền phù (hạt rắn lơ lửng)'], bold: true, size: 13 },
        { poly: [[440, 40], [440, 150], [560, 150], [560, 40]], fill: '#e0f2fe', color: '#0369a1' },
        { circle: [465, 70, 7], fill: '#fde047', color: '#ca8a04' }, { circle: [510, 95, 9], fill: '#fde047', color: '#ca8a04' }, { circle: [540, 60, 6], fill: '#fde047', color: '#ca8a04' }, { circle: [480, 125, 8], fill: '#fde047', color: '#ca8a04' }, { circle: [535, 128, 7], fill: '#fde047', color: '#ca8a04' },
        { text: [500, 178, 'Nhũ tương (giọt dầu)'], bold: true, size: 13 }] }),
      caption: 'Mô phỏng ba loại hỗn hợp chứa chất lỏng.' },
    { title: 'Sự hoà tan', html: `<ul><li>Chất <b>tan</b> được trong nước: đường, muối ăn, giấm… Chất <b>không tan</b>: cát, dầu ăn, phấn…</li>
      <li>Ở một nhiệt độ nhất định, một lượng nước chỉ hoà tan được một lượng chất tan có hạn. Với nhiều chất rắn như đường, muối: nước càng nóng thì hoà tan được càng nhiều.</li>
      <li>Muốn chất rắn tan <b>nhanh hơn</b>: <b>khuấy</b> dung dịch, <b>đun nóng</b>, <b>nghiền nhỏ</b> chất rắn.</li></ul>` }
  ],
  summary: 'Chất tinh khiết chỉ gồm một chất; hỗn hợp gồm hai hay nhiều chất. Hỗn hợp đồng nhất (dung dịch) có thành phần giống nhau ở mọi nơi; hỗn hợp không đồng nhất gồm huyền phù (rắn lơ lửng trong lỏng) và nhũ tương (lỏng phân tán trong lỏng). Dung dịch gồm chất tan và dung môi. Khuấy, đun nóng, nghiền nhỏ giúp chất rắn tan nhanh hơn.',
  examples: [
    { title: 'Phân loại', problem: 'Chất nào là chất tinh khiết, chất nào là hỗn hợp: nước cất, nước biển, khí oxygen trong bình, sữa đậu nành?', solution: 'Chất tinh khiết: <b>nước cất, khí oxygen trong bình</b>. Hỗn hợp: <b>nước biển, sữa đậu nành</b>.' },
    { title: 'Gọi tên hỗn hợp', problem: 'Gọi tên loại hỗn hợp: a) nước đường; b) nước sông có nhiều phù sa; c) dầu giấm lắc đều để trộn salad.', solution: 'a) <b>Dung dịch</b> (đồng nhất). b) <b>Huyền phù</b>. c) <b>Nhũ tương</b>.' },
    { title: 'Pha nước chanh', problem: 'Khi pha nước chanh, làm thế nào để đường tan nhanh?', solution: 'Dùng đường hạt nhỏ, <b>khuấy đều</b>; có thể hoà đường với một ít nước ấm trước rồi mới cho đá.' }
  ],
  exercises: [
    { question: 'Trong dung dịch nước muối, chất nào là chất tan, chất nào là dung môi?', hints: ['Chất tan là chất bị hoà tan.', 'Dung môi là chất dùng để hoà tan (thường có lượng nhiều hơn).'], solution: 'Chất tan: <b>muối ăn</b>. Dung môi: <b>nước</b>.' },
    { question: 'Có hai cốc đựng chất lỏng trong suốt, không màu: một cốc nước cất, một cốc nước muối loãng. Không được nếm, em phân biệt bằng cách nào?', hints: ['Nước muối có chất tan là muối.', 'Nếu làm bay hơi hết nước thì sao?'], solution: 'Nhỏ vài giọt mỗi loại lên hai tấm kính (hoặc đun trong thìa kim loại) cho nước bay hơi hết: tấm kính nào còn lại chất rắn màu trắng (muối) là nước muối; tấm kính không còn gì là nước cất.' },
    { question: 'Lắc mạnh chai chứa dầu ăn và nước rồi để yên. Em thấy gì ngay sau khi lắc và sau 10 phút? Hỗn hợp đó gọi là gì?', hints: ['Dầu có tan trong nước không?', 'Dầu nhẹ hơn nước.'], solution: 'Ngay sau khi lắc: dầu tạo thành nhiều giọt nhỏ phân tán trong nước, hỗn hợp đục – đó là <b>nhũ tương</b>. Sau 10 phút: dầu nổi lên trên, nước ở dưới, tách thành hai lớp.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Chất nào sau đây là chất tinh khiết?', options: ['Nước biển', 'Nước cất', 'Không khí', 'Sữa'], answer: 1, explain: 'Nước cất chỉ gồm một chất là nước.' },
    { type: 'mcq', q: 'Nước phù sa (các hạt đất nhỏ lơ lửng trong nước) là:', options: ['Dung dịch', 'Huyền phù', 'Nhũ tương', 'Chất tinh khiết'], answer: 1, explain: 'Chất rắn lơ lửng trong chất lỏng tạo thành huyền phù.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dung dịch là hỗn hợp đồng nhất.', answer: true, explain: 'Dung dịch có thành phần giống nhau ở mọi nơi.' },
    { type: 'mcq', q: 'Trong nước đường, đường đóng vai trò là:', options: ['Dung môi', 'Chất tan', 'Huyền phù', 'Nhũ tương'], answer: 1, explain: 'Đường bị hoà tan trong nước nên là chất tan.' },
    { type: 'mcq', q: 'Chất nào KHÔNG tan trong nước?', options: ['Muối ăn', 'Đường', 'Cát', 'Giấm'], answer: 2, explain: 'Cát không tan trong nước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khuấy đều giúp đường tan nhanh hơn.', answer: true, explain: 'Khuấy, đun nóng, nghiền nhỏ giúp chất rắn tan nhanh.' },
    { type: 'short', q: 'Hỗn hợp gồm các giọt chất lỏng phân tán trong một chất lỏng khác gọi là gì? (điền 2 tiếng)', answer: ['nhũ tương', 'nhu tuong'], answerText: 'nhũ tương', explain: 'Ví dụ: dầu ăn lắc với nước, sữa.' },
    { type: 'mcq', q: 'Không khí là:', options: ['Chất tinh khiết', 'Hỗn hợp đồng nhất', 'Huyền phù', 'Nhũ tương'], answer: 1, explain: 'Không khí gồm nhiều khí trộn đều, là hỗn hợp đồng nhất.' }
  ]
});
})();
