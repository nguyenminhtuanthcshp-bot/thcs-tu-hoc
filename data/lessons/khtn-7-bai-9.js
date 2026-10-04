/* KHTN 7 – Bài 9. Đo tốc độ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-9', {
  objectives: [
    'Mô tả được cách đo tốc độ bằng đồng hồ bấm giây và thước đo độ dài.',
    'Mô tả được cách đo tốc độ bằng đồng hồ đo thời gian hiện số và cổng quang điện.',
    'Mô tả sơ lược cách đo tốc độ bằng thiết bị “bắn tốc độ” trong kiểm tra tốc độ các phương tiện giao thông.'
  ],
  intro: 'Muốn biết một viên bi lăn nhanh đến đâu, ta không thể “nhìn” ra tốc độ. Nhưng ta đo được quãng đường và thời gian – rồi tính tốc độ bằng công thức v = s : t.',
  steps: [
    { title: 'Nguyên tắc chung', html: `<p>Để đo tốc độ của một vật, ta:</p><ol><li>Đo <b>quãng đường</b> s vật đi được (bằng thước).</li><li>Đo <b>thời gian</b> t vật đi hết quãng đường đó (bằng đồng hồ).</li><li>Tính tốc độ: v = {{s|t}}.</li></ol>
      <div class="box tip">Nên đo nhiều lần (ví dụ 3 lần) rồi lấy giá trị trung bình để kết quả tin cậy hơn.</div>` },
    { title: 'Dùng đồng hồ bấm giây', html: `<p>Ví dụ đo tốc độ chạy của một bạn trên đoạn đường 50 m:</p>
      <ol><li>Dùng thước cuộn đo và đánh dấu vạch xuất phát, vạch đích cách nhau 50 m.</li><li>Một bạn bấm đồng hồ khi người chạy bắt đầu xuất phát và bấm dừng khi người chạy qua vạch đích.</li><li>Ghi thời gian, tính v = s : t.</li></ol>
      <div class="box warn">Người bấm đồng hồ luôn phản ứng chậm một chút, nên cách đo này có sai số lớn khi thời gian rất ngắn.</div>` },
    { title: 'Dùng đồng hồ hiện số và cổng quang điện', html: `<p>Khi vật chuyển động nhanh trên quãng đường ngắn, ta dùng <b>đồng hồ đo thời gian hiện số</b> nối với hai <b>cổng quang điện</b>:</p>
      <ul><li>Khi vật chắn tia sáng ở cổng 1, đồng hồ <b>bắt đầu</b> đếm; khi vật chắn tia sáng ở cổng 2, đồng hồ <b>dừng</b> (chế độ A ↔ B).</li><li>Đo khoảng cách s giữa hai cổng bằng thước.</li></ul>
      <p>Cách này đo được thời gian chính xác đến phần nghìn giây.</p>`,
      svg: S.photoGate({ s: '0,50 m', t: '0,250 s' }), caption: 'Xe đi từ cổng 1 đến cổng 2 (cách nhau 0,50 m) hết 0,250 s ⇒ v = 0,50 : 0,250 = 2 m/s.' },
    { title: 'Thiết bị “bắn tốc độ”', html: `<p>Cảnh sát giao thông dùng <b>thiết bị bắn tốc độ</b> (camera, súng bắn tốc độ) để kiểm tra các phương tiện. Thiết bị phát sóng (hoặc chụp ảnh) liên tiếp, đo quãng đường xe đi được trong một khoảng thời gian rất ngắn rồi tự tính và hiển thị tốc độ.</p>
      <p>Một số camera ghi lại thời điểm xe đi qua hai vị trí cách nhau một khoảng đã biết, rồi tính tốc độ trung bình trên đoạn đường đó.</p>`,
      svg: S.speedCamera({ v: '72 km/h' }), caption: 'Camera đo tốc độ hiển thị ngay kết quả: 72 km/h (tức 20 m/s).' }
  ],
  summary: 'Đo tốc độ = đo quãng đường s (thước) + đo thời gian t (đồng hồ) rồi tính v = s : t. Đồng hồ bấm giây có sai số do phản ứng của người bấm; đồng hồ hiện số và cổng quang điện đo thời gian rất chính xác; thiết bị bắn tốc độ tự tính và hiển thị tốc độ của xe.',
  examples: [
    { title: 'Xử lí số liệu', problem: 'Đo thời gian viên bi lăn hết máng dài 1 m ba lần được 2,1 s; 2,0 s; 1,9 s. Tính tốc độ trung bình của viên bi.', solution: 'Thời gian trung bình: (2,1 + 2,0 + 1,9) : 3 = 2,0 s. v = 1 : 2,0 = 0,5 m/s.' },
    { title: 'Cổng quang điện', problem: 'Hai cổng quang điện đặt cách nhau 40 cm. Đồng hồ hiện số chỉ 0,200 s. Tính tốc độ của xe.', solution: 'Đổi 40 cm = 0,4 m. v = 0,4 : 0,2 = 2 (m/s).' },
    { title: 'Kiểm tra tốc độ', problem: 'Camera ghi được một ô tô đi 100 m trong 4 s ở đoạn đường giới hạn tốc độ 80 km/h. Xe có vượt quá tốc độ không?', solution: 'v = 100 : 4 = 25 m/s = 25 · 3,6 = 90 km/h > 80 km/h ⇒ xe đã chạy quá tốc độ cho phép.' }
  ],
  exercises: [
    { question: 'Một bạn chạy 60 m, đồng hồ bấm giây chỉ 12 s. Tính tốc độ của bạn theo m/s và km/h.', hints: ['v = s : t.', 'Nhân với 3,6 để đổi sang km/h.'], solution: 'v = 60 : 12 = 5 m/s = 18 km/h.' },
    { question: 'Vì sao khi đo thời gian vật đi qua quãng đường rất ngắn (dưới 1 m) người ta không nên dùng đồng hồ bấm giây?', hints: ['Thời gian cần đo khi đó rất nhỏ, chỉ vài phần mười giây.', 'Thời gian phản ứng khi bấm đồng hồ của người khoảng bao nhiêu?'], solution: 'Thời gian cần đo rất ngắn, trong khi thời gian phản ứng của người bấm (khoảng 0,1 – 0,3 s) có thể xấp xỉ chính thời gian đó, gây sai số rất lớn. Nên dùng đồng hồ hiện số và cổng quang điện.' },
    { question: 'Kể tên các dụng cụ cần dùng và nêu các bước đo tốc độ đi bộ của em trên sân trường.', hints: ['Cần một dụng cụ đo độ dài và một dụng cụ đo thời gian.', 'Nhớ đo nhiều lần.'], solution: 'Dụng cụ: thước cuộn, đồng hồ bấm giây, phấn đánh dấu. Các bước: đánh dấu đoạn đường (ví dụ 20 m); một bạn bấm giờ khi em bắt đầu đi và khi em qua vạch đích; lặp lại 3 lần, lấy thời gian trung bình; tính v = s : t.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Để đo tốc độ của một vật, ta cần đo hai đại lượng nào?', options: ['Khối lượng và thời gian', 'Quãng đường và thời gian', 'Quãng đường và khối lượng', 'Nhiệt độ và thời gian'], answer: 1, explain: 'v = s : t nên cần đo s và t.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đồng hồ đo thời gian hiện số kết hợp cổng quang điện đo thời gian chính xác hơn đồng hồ bấm tay.', answer: true, explain: 'Không phụ thuộc thời gian phản ứng của người bấm.' },
    { type: 'short', q: 'Hai cổng quang điện cách nhau 0,5 m; đồng hồ chỉ 0,25 s. Tốc độ của xe là bao nhiêu m/s?', answer: '2', unit: 'm/s', calc: '0.5/0.25', explain: 'v = 0,5 : 0,25 = 2 m/s.' },
    { type: 'short', q: 'Một vận động viên chạy 100 m hết 12,5 s. Tốc độ trung bình là bao nhiêu m/s?', answer: '8', unit: 'm/s', calc: '100/12.5', explain: 'v = 100 : 12,5 = 8 m/s.' },
    { type: 'short', q: 'Ba lần đo thời gian được 2,1 s; 2,0 s; 1,9 s. Thời gian trung bình là bao nhiêu giây?', answer: '2', unit: 's', calc: '(2.1+2.0+1.9)/3', explain: '(2,1 + 2,0 + 1,9) : 3 = 2,0 s.' },
    { type: 'mcq', q: 'Khi dùng cổng quang điện ở chế độ A ↔ B, đồng hồ bắt đầu đếm khi:', options: ['bật công tắc nguồn', 'vật chắn tia sáng ở cổng thứ nhất', 'vật chắn tia sáng ở cổng thứ hai', 'vật dừng lại'], answer: 1, explain: 'Chắn cổng 1: bắt đầu đếm; chắn cổng 2: dừng.' },
    { type: 'short', q: 'Thiết bị bắn tốc độ hiển thị 72 km/h. Tốc độ đó bằng bao nhiêu m/s?', answer: '20', unit: 'm/s', calc: '72/3.6', explain: '72 : 3,6 = 20 m/s.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần đo một lần là có kết quả tốc độ tin cậy nhất.', answer: false, explain: 'Nên đo nhiều lần và lấy giá trị trung bình.' }
  ]
});
})();
