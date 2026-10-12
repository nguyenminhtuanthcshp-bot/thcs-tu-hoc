/* LS&ĐL 6 – Địa lí, Bài 5. Lược đồ trí nhớ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-5', {
  objectives: [
    'Nêu được khái niệm lược đồ trí nhớ.',
    'Vẽ được lược đồ trí nhớ thể hiện đường đi từ nhà đến trường.',
    'Mô tả được tuyến đường bằng lời có phương hướng, khoảng cách.',
    'Biết ứng dụng lược đồ trí nhớ trong đời sống.'
  ],
  intro: 'Một bạn mới chuyển đến hỏi em đường đến thư viện. Em không có bản đồ, nhưng em có thể nhắm mắt hình dung con đường và vẽ ra giấy. Hình vẽ đó gọi là <b>lược đồ trí nhớ</b>.',
  steps: [
    { title: 'Lược đồ trí nhớ là gì?', html: `<p>Là hình ảnh về một khu vực, con đường được lưu giữ trong trí nhớ của mỗi người, vẽ lại một cách đơn giản. Lược đồ trí nhớ không cần chính xác về tỉ lệ nhưng cần đúng thứ tự, phương hướng và các điểm mốc.</p>` },
    { title: 'Ví dụ lược đồ', html: `<p>Đường từ nhà đến trường (minh hoạ):</p>`,
      svg: S.sketchMap({ title: 'Đường từ nhà đến trường (minh hoạ)', sea: false, lines: [{ pts: [[60, 240], [260, 240], [260, 100], [520, 100]], label: 'Đường đi', color: '#dc2626', w: 3, lp: [270, 180] }], points: [{ x: 60, y: 240, label: 'Nhà em' }, { x: 160, y: 240, label: 'Chợ', c: '#f59e0b' }, { x: 260, y: 160, label: 'Ngã tư' }, { x: 370, y: 100, label: 'Công viên', c: '#16a34a' }, { x: 520, y: 100, label: 'Trường' }], note: 'Lược đồ trí nhớ minh hoạ, không theo tỉ lệ.' }), caption: 'Ghi rõ điểm mốc: chợ, ngã tư, công viên.' },
    { title: 'Cách vẽ', html: `<p>Các bước:</p>`,
      svg: S.flowchart({ title: 'Vẽ lược đồ trí nhớ', steps: [{ t: 'start', s: 'Nhớ điểm đi, đến' }, { t: 'proc', s: 'Vẽ đường chính' }, { t: 'proc', s: 'Thêm điểm mốc' }, { t: 'end', s: 'Ghi hướng, cự li' }] }), caption: 'Nên có mũi tên chỉ hướng Bắc.' },
    { title: 'Mô tả bằng lời', html: `<div class="box key">Ví dụ: “Đi thẳng hướng Đông 300 m qua chợ, rẽ trái (hướng Bắc) ở ngã tư, đi 200 m, rẽ phải theo hướng Đông thêm 400 m là đến trường.”</div>` }
  ],
  summary: 'Lược đồ trí nhớ là hình ảnh về một khu vực, tuyến đường lưu trong trí nhớ, vẽ lại đơn giản. Khi vẽ cần đúng thứ tự, phương hướng, các điểm mốc; có thể ghi khoảng cách ước lượng. Lược đồ trí nhớ giúp chỉ đường, ghi nhớ không gian sống.',
  examples: [
    { title: 'Tổng quãng đường', problem: 'Đi 300 m, rẽ đi 200 m, rẽ đi 400 m. Tổng quãng đường?', solution: '300 + 200 + 400 = 900 m.' },
    { title: 'Thời gian', problem: 'Đi bộ 900 m với tốc độ 60 m/phút. Mất bao lâu?', solution: '900 : 60 = 15 phút.' },
    { title: 'Điểm mốc', problem: 'Vì sao cần điểm mốc?', solution: 'Giúp người đọc dễ nhận ra vị trí và không bị lạc.' }
  ],
  exercises: [
    { question: 'Lược đồ trí nhớ có cần đúng tỉ lệ không?', hints: ['Vẽ theo trí nhớ.', 'Cần đúng thứ tự, hướng.'], solution: 'Không cần chính xác tỉ lệ, nhưng cần đúng thứ tự, hướng và điểm mốc.' },
    { question: 'Đi bộ 1 200 m với 80 m/phút. Mất bao nhiêu phút?', hints: ['Chia quãng đường cho tốc độ.', '1 200 : 80.'], solution: '15 phút.' },
    { question: 'Kể ba điểm mốc thường dùng.', hints: ['Nơi mua bán.', 'Giao lộ, cây xăng.'], solution: 'Chợ, ngã tư, cây xăng, trường học, cầu…' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lược đồ trí nhớ được vẽ dựa vào hình ảnh lưu trong trí nhớ.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Yếu tố quan trọng nhất của lược đồ trí nhớ:', options: ['Đúng thứ tự, hướng, điểm mốc', 'Đúng tỉ lệ tuyệt đối', 'Nhiều màu sắc', 'Vẽ bằng máy tính'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Đi 300 m, 200 m rồi 400 m. Tổng quãng đường (m)?', answer: '900', unit: 'm', calc: '300+200+400', explain: '900.' },
    { type: 'short', q: 'Đi bộ 900 m, 60 m/phút. Mất bao nhiêu phút?', answer: '15', unit: 'phút', calc: '900/60', explain: '15.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lược đồ trí nhớ phải đo đạc chính xác bằng máy.', answer: false, explain: 'Vẽ theo trí nhớ.' },
    { type: 'mcq', q: 'Đang đi hướng Đông, rẽ trái thì đi hướng:', options: ['Bắc', 'Nam', 'Tây', 'Đông'], answer: 0, explain: 'Bắc.' },
    { type: 'short', q: 'Đi 1 200 m với 80 m/phút. Mất bao nhiêu phút?', answer: '15', unit: 'phút', calc: '1200/80', explain: '15.' },
    { type: 'mcq', q: 'Điểm mốc tốt khi chỉ đường:', options: ['Cây xăng, ngã tư', 'Đám mây', 'Con mèo', 'Chiếc ô tô đang chạy'], answer: 0, explain: 'Cố định.' }
  ]
});
})();
