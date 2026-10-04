/* KHTN 6 – Bài 54. Hệ Mặt Trời. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-54', {
  objectives: [
    'Mô tả được sơ lược cấu trúc hệ Mặt Trời: Mặt Trời ở trung tâm, tám hành tinh quay quanh.',
    'Kể được tên và thứ tự tám hành tinh; phân biệt nhóm hành tinh gần Mặt Trời và nhóm xa Mặt Trời.',
    'Nêu được đơn vị thiên văn (au) và dùng để so sánh khoảng cách từ các hành tinh đến Mặt Trời.'
  ],
  intro: 'Trái Đất của chúng ta chỉ là một trong tám hành tinh quay quanh Mặt Trời. Cùng với các vệ tinh, tiểu hành tinh, sao chổi… chúng tạo thành <b>hệ Mặt Trời</b>.',
  steps: [
    { title: 'Cấu trúc hệ Mặt Trời', html: `<ul><li><b>Mặt Trời</b> ở trung tâm – một ngôi sao, tự phát sáng, chiếm hơn 99% khối lượng của cả hệ.</li>
      <li><b>Tám hành tinh</b> quay quanh Mặt Trời theo quỹ đạo gần tròn; các hành tinh không tự phát sáng.</li><li>Ngoài ra có các vệ tinh, tiểu hành tinh, sao chổi, bụi và khí.</li></ul>` },
    { title: 'Tám hành tinh', html: `<p>Theo thứ tự từ gần đến xa Mặt Trời: <b>Sao Thuỷ, Sao Kim, Trái Đất, Sao Hoả, Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương</b>.</p>`,
      svg: S.solarSystem(), caption: 'Tám hành tinh của hệ Mặt Trời (không theo tỉ lệ).' },
    { title: 'Hai nhóm hành tinh', html: `<table class="tbl"><tr><th></th><th>Nhóm gần Mặt Trời</th><th>Nhóm xa Mặt Trời</th></tr>
      <tr><td>Gồm</td><td>Thuỷ, Kim, Trái Đất, Hoả</td><td>Mộc, Thổ, Thiên Vương, Hải Vương</td></tr>
      <tr><td>Đặc điểm</td><td>Nhỏ, cấu tạo chủ yếu từ đá, ít hoặc không có vệ tinh</td><td>Rất lớn, cấu tạo chủ yếu từ khí (và băng), có vành đai, nhiều vệ tinh</td></tr></table>
      <p>Sao Mộc là hành tinh lớn nhất; Sao Thuỷ nhỏ nhất và gần Mặt Trời nhất; Sao Kim nóng nhất; Sao Thổ có vành đai đẹp nhất. Trái Đất là hành tinh duy nhất đã biết có sự sống.</p>` },
    { title: 'Đơn vị thiên văn', html: `<p>Khoảng cách trong hệ Mặt Trời rất lớn. Người ta dùng <b>đơn vị thiên văn</b>, kí hiệu <b>au</b>: 1 au bằng khoảng cách trung bình từ Trái Đất đến Mặt Trời, khoảng <b>150 triệu km</b>.</p>
      <table class="tbl"><tr><th>Hành tinh</th><th>Khoảng cách trung bình đến Mặt Trời (au, gần đúng)</th></tr><tr><td>Sao Thuỷ</td><td>0,4</td></tr><tr><td>Sao Kim</td><td>0,7</td></tr><tr><td>Trái Đất</td><td>1</td></tr><tr><td>Sao Hoả</td><td>1,5</td></tr><tr><td>Sao Mộc</td><td>5,2</td></tr><tr><td>Sao Thổ</td><td>9,5</td></tr><tr><td>Sao Thiên Vương</td><td>19,2</td></tr><tr><td>Sao Hải Vương</td><td>30,1</td></tr></table>
      <p>Ánh sáng đi khoảng 300 000 km mỗi giây, nên ánh sáng Mặt Trời mất khoảng 150 000 000 : 300 000 = 500 giây (khoảng 8 phút 20 giây) để đến Trái Đất.</p>` }
  ],
  summary: 'Hệ Mặt Trời gồm Mặt Trời ở trung tâm và tám hành tinh quay quanh: Thuỷ, Kim, Trái Đất, Hoả (nhóm gần, nhỏ, bằng đá) và Mộc, Thổ, Thiên Vương, Hải Vương (nhóm xa, lớn, chủ yếu là khí), cùng vệ tinh, tiểu hành tinh, sao chổi. 1 au ≈ 150 triệu km là khoảng cách trung bình từ Trái Đất đến Mặt Trời.',
  examples: [
    { title: 'Đổi au ra km', problem: 'Sao Mộc cách Mặt Trời khoảng 5,2 au. Đổi ra km.', solution: '5,2 × 150 triệu km = <b>780 triệu km</b>.' },
    { title: 'So sánh', problem: 'Sao Hải Vương (30 au) xa Mặt Trời gấp bao nhiêu lần Trái Đất?', solution: '30 : 1 = <b>30 lần</b>.' },
    { title: 'Thời gian ánh sáng', problem: 'Ánh sáng Mặt Trời mất khoảng 500 giây để tới Trái Đất. Đổi ra phút và giây.', solution: '500 giây = 8 × 60 + 20 → <b>8 phút 20 giây</b>.' }
  ],
  exercises: [
    { question: 'Sao Hoả cách Mặt Trời khoảng 1,5 au. Khoảng cách này bằng bao nhiêu triệu km?', hints: ['1 au ≈ 150 triệu km.', '1,5 × 150.'], solution: '1,5 × 150 = <b>225 triệu km</b>.' },
    { question: 'Kể tên các hành tinh thuộc nhóm xa Mặt Trời và nêu hai đặc điểm chung của chúng.', hints: ['Bắt đầu từ Sao Mộc.', 'Kích thước? Thành phần? Vệ tinh?'], solution: 'Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương. Đặc điểm: kích thước rất lớn, cấu tạo chủ yếu từ khí; có vành đai và nhiều vệ tinh.' },
    { question: 'Ánh sáng đi 300 000 km mỗi giây. Ánh sáng Mặt Trời mất bao lâu để tới Sao Hoả (cách Mặt Trời khoảng 225 triệu km)?', hints: ['Thời gian = quãng đường : tốc độ.', '225 000 000 : 300 000.'], solution: '225 000 000 : 300 000 = <b>750 giây</b> = 12 phút 30 giây.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hành tinh gần Mặt Trời nhất là:', options: ['Sao Thuỷ', 'Sao Kim', 'Trái Đất', 'Sao Hải Vương'], answer: 0, explain: 'Thứ tự bắt đầu từ Sao Thuỷ.' },
    { type: 'mcq', q: 'Hành tinh lớn nhất trong hệ Mặt Trời là:', options: ['Sao Mộc', 'Sao Thổ', 'Trái Đất', 'Sao Hoả'], answer: 0, explain: 'Sao Mộc lớn nhất.' },
    { type: 'short', q: 'Trái Đất là hành tinh thứ mấy tính từ Mặt Trời?', answer: '3', explain: 'Thuỷ, Kim, Trái Đất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các hành tinh tự phát ra ánh sáng như Mặt Trời.', answer: false, explain: 'Hành tinh không tự phát sáng.' },
    { type: 'short', q: 'Hệ Mặt Trời có bao nhiêu hành tinh?', answer: '8', unit: 'hành tinh', explain: 'Tám hành tinh.' },
    { type: 'short', q: 'Sao Thổ cách Mặt Trời khoảng 9,5 au. Khoảng cách đó bằng bao nhiêu triệu km? (1 au ≈ 150 triệu km)', answer: '1425', unit: 'triệu km', calc: '9.5*150', explain: '9,5 × 150 = 1 425 triệu km.' },
    { type: 'mcq', q: 'Nhóm hành tinh gần Mặt Trời gồm:', options: ['Thuỷ, Kim, Trái Đất, Hoả', 'Mộc, Thổ, Thiên Vương, Hải Vương', 'Kim, Mộc, Thổ, Hoả', 'Thuỷ, Mộc, Trái Đất, Hải Vương'], answer: 0, explain: 'Bốn hành tinh đá gần Mặt Trời.' },
    { type: 'mcq', q: 'Trong hình, hành tinh số 5 là:', svg: S.solarSystem(), options: ['Sao Mộc', 'Sao Hoả', 'Sao Thổ', 'Trái Đất'], answer: 0, explain: 'Thứ tự: 1 Thuỷ, 2 Kim, 3 Trái Đất, 4 Hoả, 5 Mộc.' }
  ]
});
})();
