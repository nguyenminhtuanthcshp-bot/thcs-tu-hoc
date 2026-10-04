/* Ngữ văn 6 – Ôn tập học kì I (Bài 1 – Bài 5). Ví dụ do nhóm biên soạn tự viết hoặc là ca dao (văn học dân gian). */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/on-tap-hk1', {
  objectives: [
    'Hệ thống hoá được các thể loại đã học ở học kì I: truyện đồng thoại, truyện, thơ có yếu tố tự sự – miêu tả, ca dao – thơ lục bát, kí – du kí.',
    'Hệ thống hoá kiến thức tiếng Việt: từ đơn, từ phức; ẩn dụ, điệp ngữ, so sánh, hoán dụ; cụm từ; từ đồng âm, đa nghĩa; dấu ngoặc kép.',
    'Ôn lại các kiểu bài viết và bài nói; vận dụng làm bài kiểm tra cuối kì.'
  ],
  intro: 'Năm bài học đầu tiên đã đưa em qua nhiều “miền” văn bản. Bài ôn tập giúp em sắp xếp lại kiến thức thành một bức tranh gọn gàng để tự tin bước vào kì kiểm tra.',
  steps: [
    { title: 'Bản đồ học kì I', html: `<p>Mỗi bài gắn với một thể loại đọc và một nhóm kiến thức tiếng Việt:</p>`,
      svg: S.mindmap({ center: 'Ngữ văn 6 – HK I', branches: [{ title: 'Bài 1', items: ['Truyện đồng thoại', 'Từ đơn, từ phức'] }, { title: 'Bài 2', items: ['Thơ tự sự, miêu tả', 'Ẩn dụ, điệp ngữ'] }, { title: 'Bài 3', items: ['Truyện', 'Cụm từ, so sánh'] }, { title: 'Bài 4', items: ['Ca dao, lục bát', 'Đồng âm, đa nghĩa, hoán dụ'] }, { title: 'Bài 5', items: ['Kí, du kí', 'Ngoặc kép; so sánh, ẩn dụ'] }] }),
      caption: 'Sơ đồ tư duy tổng hợp học kì I.' },
    { title: 'So sánh các thể loại đã đọc', html: `<table class="tbl"><tr><th>Thể loại</th><th>Đặc điểm nhận biết</th><th>Ngôi kể / người nói</th></tr><tr><td>Truyện đồng thoại</td><td>Nhân vật là loài vật, đồ vật được nhân hoá; viết cho thiếu nhi</td><td>Ngôi thứ nhất hoặc thứ ba</td></tr><tr><td>Truyện</td><td>Cốt truyện, nhân vật, lời người kể và lời nhân vật</td><td>Ngôi thứ nhất hoặc thứ ba</td></tr><tr><td>Thơ có yếu tố tự sự, miêu tả</td><td>Kể sự việc, tả cảnh/người bằng thơ; vần, nhịp</td><td>Nhân vật trữ tình</td></tr><tr><td>Ca dao, thơ lục bát</td><td>Cặp 6 – 8; vần 6–6, 8–6; thanh B – T – B</td><td>Thường là người dân lao động</td></tr><tr><td>Kí, du kí</td><td>Người thật việc thật; chuyến đi; trình tự hành trình</td><td>Ngôi thứ nhất (tác giả)</td></tr></table>` },
    { title: 'Tổng hợp biện pháp tu từ', html: `<table class="tbl"><tr><th>Biện pháp</th><th>Cơ sở</th><th>Ví dụ</th></tr><tr><td>So sánh</td><td>Tương đồng, có từ so sánh</td><td>Hoa phượng đỏ như lửa.</td></tr><tr><td>Ẩn dụ</td><td>Tương đồng, ẩn vế được so sánh</td><td>Thuyền về có nhớ bến chăng (ca dao)</td></tr><tr><td>Hoán dụ</td><td>Quan hệ gần gũi</td><td>Cả làng ra đồng gặt lúa.</td></tr><tr><td>Điệp ngữ</td><td>Lặp lại từ ngữ để nhấn mạnh</td><td>Nhớ canh rau muống, nhớ cà dầm tương (ca dao)</td></tr></table>` },
    { title: 'Các kiểu bài viết và nói', html: `<table class="tbl"><tr><th>Bài</th><th>Viết</th><th>Nói và nghe</th></tr><tr><td>1, 3</td><td>Bài văn kể lại một trải nghiệm</td><td>Kể lại một trải nghiệm</td></tr><tr><td>2</td><td>Đoạn văn cảm xúc về bài thơ có yếu tố tự sự, miêu tả</td><td>Trình bày ý kiến về vấn đề gia đình</td></tr><tr><td>4</td><td>Tập làm thơ lục bát; đoạn văn cảm xúc về bài thơ lục bát</td><td>Suy nghĩ về tình cảm với quê hương</td></tr><tr><td>5</td><td>Bài văn tả cảnh sinh hoạt</td><td>Chia sẻ trải nghiệm về một nơi chốn</td></tr></table>` },
    { title: 'Chiến lược làm bài kiểm tra', html: `<ul><li><b>Đọc hiểu</b>: xác định thể loại → ngôi kể → nội dung chính → biện pháp tu từ và tác dụng.</li><li><b>Tiếng Việt</b>: gạch chân từ/cụm từ, gọi đúng tên, nêu tác dụng trong ngữ cảnh.</li><li><b>Viết</b>: dành 5 phút lập dàn ý; viết đủ ba phần; 5 phút cuối đọc soát.</li></ul>` }
  ],
  summary: 'Học kì I: đọc truyện đồng thoại, truyện, thơ tự sự – miêu tả, ca dao – lục bát, kí – du kí; tiếng Việt: từ đơn/phức, cụm từ, đồng âm/đa nghĩa, so sánh, ẩn dụ, hoán dụ, điệp ngữ, dấu ngoặc kép; viết và nói: kể trải nghiệm, cảm xúc về bài thơ, thơ lục bát, tả cảnh sinh hoạt.',
  examples: [
    { title: 'Nhận biết thể loại', problem: 'Một văn bản kể ở ngôi thứ nhất, ghi lại chuyến thăm Tràng An với cảnh núi đá, thuyền nan và cảm xúc của người viết. Đó là thể loại gì?', solution: 'Du kí – ghi chép người thật việc thật trong chuyến đi, ngôi thứ nhất, có miêu tả và cảm xúc.' },
    { title: 'Phân biệt biện pháp tu từ', problem: 'Gọi tên biện pháp tu từ: (a) “Áo trắng tung tăng đến trường.” (b) “Mặt trời như quả cầu lửa.”', solution: '(a) Hoán dụ (dấu hiệu – sự vật). (b) So sánh (có từ “như”).' },
    { title: 'Từ và cụm từ', problem: 'Trong câu “Những chú chim nhỏ đang ríu rít hót”, tìm một từ láy và một cụm danh từ.', solution: 'Từ láy: “ríu rít”. Cụm danh từ: “những chú chim nhỏ”.' }
  ],
  exercises: [
    { question: 'Kiểm tra luật lục bát của câu ca dao: “Trên đồng cạn, dưới đồng sâu / Chồng cày, vợ cấy, con trâu đi bừa.”', hints: ['Tiếng 6 dòng lục và tiếng 6 dòng bát.', 'Tiếng 2, 4, 6 theo B – T – B.'], solution: 'Vần: “sâu” – “trâu” (vần “âu”). Dòng lục: tiếng 2 “đồng” (B) – tiếng 4 “dưới” (T) – tiếng 6 “sâu” (B). Dòng bát: “cày” (B) – “cấy” (T) – “trâu” (B) – “bừa” (B). Đúng luật.' },
    { question: 'Phân biệt từ đồng âm và từ đa nghĩa trong: “mắt” (mắt người – mắt na) và “đậu” (hạt đậu – chim đậu).', hints: ['Các nghĩa có liên quan không?', 'Mắt na có hình dáng gợi đến mắt.'], solution: '“Mắt người – mắt na”: đa nghĩa (mắt na là những ô nhỏ trên vỏ quả, giống hình mắt). “Hạt đậu – chim đậu”: đồng âm (không liên quan).' },
    { question: 'Viết đoạn văn (5 câu) tả cảnh sinh hoạt ở bếp nhà em chiều cuối tuần, có dùng một phép so sánh và một dấu ngoặc kép.', hints: ['Có thể dùng ngoặc kép cho lời nói của mẹ.', 'So sánh dùng từ “như”.'], solution: 'Ví dụ: Chiều thứ bảy, căn bếp nhà em rộn ràng hẳn lên. Mẹ đứng bên bếp, tay đảo chảo rau thoăn thoắt. Bố ngồi nhặt rau, thỉnh thoảng lại kể chuyện vui. Mùi cá kho thơm lừng như gọi cả nhà xích lại gần. Mẹ quay sang cười: “Con dọn bát giúp mẹ nhé!”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Truyện đồng thoại có nhân vật thường là:', options: ['Loài vật, đồ vật được nhân hoá', 'Vua chúa', 'Thần tiên', 'Nhà khoa học'], answer: 0, explain: 'Đặc trưng đồng thoại.' },
    { type: 'mcq', q: 'Từ nào là từ láy?', options: ['lung linh', 'bàn ghế', 'sách vở', 'nhà cửa'], answer: 0, explain: 'Lặp âm “l”.' },
    { type: 'mcq', q: 'Du kí thường được kể ở ngôi:', options: ['Thứ nhất', 'Thứ hai', 'Thứ ba', 'Không có'], answer: 0, explain: 'Tác giả xưng tôi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hoán dụ dựa trên quan hệ tương đồng.', answer: false, explain: 'Hoán dụ dựa trên quan hệ gần gũi.' },
    { type: 'short', q: 'Dòng lục trong thơ lục bát có bao nhiêu tiếng?', answer: ['6', 'sáu'], answerText: '6 tiếng', explain: 'Lục = sáu.' },
    { type: 'mcq', q: '“Những chú chim nhỏ” là:', options: ['Cụm danh từ', 'Cụm động từ', 'Cụm tính từ', 'Từ đơn'], answer: 0, explain: 'Trung tâm là danh từ “chim”.' },
    { type: 'mcq', q: 'Dấu ngoặc kép trong “cả một ‘khu phố’ trên sông” có công dụng:', options: ['Đánh dấu từ ngữ có nghĩa đặc biệt', 'Đánh dấu lời nói', 'Đánh dấu tên sách', 'Kết thúc câu'], answer: 0, explain: '“Khu phố” được dùng theo nghĩa đặc biệt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bài văn tả cảnh sinh hoạt cần tả hoạt động của con người.', answer: true, explain: 'Đó là trọng tâm.' }
  ]
});
})();
