/* Tin học 6 – Bài 17. Chương trình máy tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-17', {
  objectives: [
    'Nêu được chương trình máy tính là gì; phân biệt thuật toán và chương trình.',
    'Nhận biết được các khối lệnh cơ bản trong môi trường lập trình trực quan (Scratch).',
    'Đọc hiểu và tạo được chương trình đơn giản có cấu trúc tuần tự, lặp, rẽ nhánh.'
  ],
  intro: 'Thuật toán là cách giải quyết vấn đề; nhưng máy tính chỉ hiểu được khi thuật toán được viết bằng một <b>ngôn ngữ lập trình</b>. Với Scratch, em có thể tạo chương trình bằng cách ghép các khối lệnh như ghép hình.',
  steps: [
    { title: 'Chương trình máy tính', html: `<p><b>Chương trình máy tính</b> là dãy các lệnh mà máy tính có thể hiểu và thực hiện được. Chương trình là bản mô tả thuật toán bằng một <b>ngôn ngữ lập trình</b>.</p>
      <p>Thuật toán → (viết bằng ngôn ngữ lập trình) → Chương trình → (máy tính thực hiện) → Kết quả.</p>` },
    { title: 'Môi trường lập trình Scratch', html: `<p><b>Scratch</b> là môi trường lập trình trực quan: chương trình được tạo bằng cách kéo thả, ghép các <b>khối lệnh</b> để điều khiển <b>nhân vật</b> trên <b>sân khấu</b>. Các khối được chia nhóm theo màu: Sự kiện, Chuyển động, Hiển thị, Âm thanh, Điều khiển, Bút vẽ…</p>`,
      svg: S.blocks({ title: 'Chương trình tuần tự: nhân vật chào', stack: [{ k: 'event', s: 'khi bấm vào lá cờ xanh' }, { k: 'looks', s: 'nói Xin chào! trong 2 giây' }, { k: 'motion', s: 'di chuyển 50 bước' }, { k: 'sound', s: 'phát âm thanh Meo' }] }), caption: 'Các khối lệnh được thực hiện lần lượt từ trên xuống (khối vẽ minh hoạ).' },
    { title: 'Lặp trong chương trình', html: `<p>Khối <b>“lặp lại … lần”</b> (nhóm Điều khiển) thể hiện cấu trúc lặp. Chương trình dưới đây vẽ một hình vuông có cạnh 100 bước.</p>`,
      svg: S.blocks({ title: 'Chương trình vẽ hình vuông', stack: [{ k: 'event', s: 'khi bấm vào lá cờ xanh' }, { k: 'pen', s: 'đặt bút' }, { k: 'control', s: 'lặp lại 4 lần', inner: [{ k: 'motion', s: 'di chuyển 100 bước' }, { k: 'motion', s: 'xoay ↻ 90 độ' }] }, { k: 'pen', s: 'nhấc bút' }] }), caption: 'Cấu trúc lặp trong Scratch: lặp lại 4 lần “di chuyển 100 bước, xoay 90 độ”.' },
    { title: 'Kết quả và rẽ nhánh', html: `<p>Mỗi lần lặp, nhân vật đi một cạnh rồi quay 90°; sau 4 lần quay đủ 360° và trở về chỗ cũ, tạo thành hình vuông.</p>
      <p>Khối <b>“nếu … thì …”</b> thể hiện rẽ nhánh, ví dụ: nếu chạm cạnh sân khấu thì bật lại.</p>`,
      svg: S.turtle({ n: 4 }), caption: 'Hình vuông do nhân vật vẽ ra; tổng các góc quay là 4 × 90° = 360°.' }
  ],
  summary: 'Chương trình máy tính là dãy lệnh máy tính hiểu và thực hiện được; là mô tả thuật toán bằng ngôn ngữ lập trình. Scratch là môi trường lập trình trực quan, ghép khối lệnh để điều khiển nhân vật. Khối “lặp lại” thể hiện cấu trúc lặp, khối “nếu… thì” thể hiện rẽ nhánh.',
  examples: [
    { title: 'Đọc chương trình', problem: 'Chương trình: lặp lại 3 lần {di chuyển 10 bước}. Nhân vật đi tất cả bao nhiêu bước?', solution: '3 × 10 = 30 bước.' },
    { title: 'Vẽ đa giác', problem: 'Muốn vẽ lục giác đều, cần lặp bao nhiêu lần và mỗi lần xoay bao nhiêu độ?', solution: 'Lặp 6 lần, mỗi lần xoay 360° : 6 = 60°.' },
    { title: 'Phân biệt', problem: 'Bản hướng dẫn bằng lời “đi 100 bước rồi quay phải, làm 4 lần” và các khối lệnh Scratch tương ứng – đâu là thuật toán, đâu là chương trình?', solution: 'Bản hướng dẫn bằng lời là thuật toán; các khối lệnh Scratch máy tính thực hiện được là chương trình.' }
  ],
  exercises: [
    { question: 'Sửa chương trình vẽ hình vuông (bước 3) để vẽ tam giác đều cạnh 100 bước.', hints: ['Tam giác có mấy cạnh?', 'Góc xoay = 360° : số cạnh.'], solution: 'Lặp lại 3 lần {di chuyển 100 bước; xoay ↻ 120 độ}.' },
    { question: 'Viết (bằng lời) chương trình Scratch: khi bấm lá cờ xanh, nhân vật nói “Chào bạn” rồi lặp lại 5 lần {di chuyển 20 bước, phát âm thanh}.', hints: ['Khối sự kiện đặt trên cùng.', 'Khối lặp bao quanh hai khối bên trong.'], solution: 'khi bấm vào lá cờ xanh → nói “Chào bạn” → lặp lại 5 lần {di chuyển 20 bước; phát âm thanh}.' },
    { question: 'Lặp lại 8 lần {di chuyển 25 bước; xoay ↻ 45 độ}. Nhân vật vẽ hình gì và tổng quãng đường bao nhiêu bước?', hints: ['8 × 45° = 360°.', 'Quãng đường = 8 × 25.'], solution: 'Hình bát giác đều; quãng đường 8 × 25 = 200 bước.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chương trình máy tính là dãy các lệnh mà máy tính hiểu và thực hiện được.', answer: true, explain: 'Đúng khái niệm.' },
    { type: 'mcq', q: 'Scratch là:', options: ['một trình duyệt web', 'môi trường lập trình trực quan', 'phần mềm soạn thảo văn bản', 'máy tìm kiếm'], answer: 1, explain: 'Scratch dùng khối lệnh trực quan.' },
    { type: 'mcq', q: 'Khối “lặp lại 4 lần” thể hiện cấu trúc:', options: ['tuần tự', 'rẽ nhánh', 'lặp', 'sự kiện'], answer: 2, explain: 'Khối lặp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thuật toán và chương trình là hoàn toàn giống nhau.', answer: false, explain: 'Chương trình là mô tả thuật toán bằng ngôn ngữ lập trình.' },
    { type: 'short', q: 'Lặp lại 5 lần {di chuyển 30 bước}. Nhân vật đi tất cả bao nhiêu bước?', answer: '150', unit: 'bước', calc: '5*30', explain: '5 × 30 = 150.' },
    { type: 'short', q: 'Để vẽ ngũ giác đều, mỗi lần nhân vật xoay bao nhiêu độ?', answer: '72', unit: 'độ', calc: '360/5', explain: '360 : 5 = 72.' },
    { type: 'mcq', q: 'Khối “nếu … thì …” thể hiện cấu trúc:', options: ['rẽ nhánh', 'lặp', 'tuần tự', 'nhập dữ liệu'], answer: 0, explain: 'Rẽ nhánh.' },
    { type: 'mcq', q: 'Nhóm khối lệnh “di chuyển, xoay” trong Scratch là nhóm:', options: ['Chuyển động', 'Âm thanh', 'Hiển thị', 'Bút vẽ'], answer: 0, explain: 'Nhóm Chuyển động (Motion).' }
  ]
});
})();
