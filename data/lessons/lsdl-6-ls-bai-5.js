/* LS&ĐL 6 – Lịch sử, Bài 5. Xã hội nguyên thuỷ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-5', {
  objectives: [
    'Mô tả được sơ lược các giai đoạn tiến triển của xã hội người nguyên thuỷ.',
    'Trình bày được đặc điểm đời sống vật chất, tinh thần và tổ chức xã hội của người nguyên thuỷ.',
    'Nêu được vai trò của lao động đối với sự phát triển của xã hội nguyên thuỷ.',
    'Nhận biết được dấu tích xã hội nguyên thuỷ ở Việt Nam.'
  ],
  intro: 'Trong hang Con Moong (Thanh Hoá), các lớp đất chồng lên nhau chứa công cụ đá, xương thú, bếp lửa của nhiều thế hệ người nguyên thuỷ suốt hàng vạn năm. Những dấu tích ấy cho ta biết người xưa đã <b>sống và lao động như thế nào</b>.',
  steps: [
    { title: 'Các giai đoạn của xã hội nguyên thuỷ', html: `<p>Xã hội nguyên thuỷ trải qua hai giai đoạn:</p>`,
      svg: S.table({ title: 'Tổ chức xã hội nguyên thuỷ', head: ['Giai đoạn', 'Đặc điểm'], rows: [['Bầy người nguyên thuỷ', 'Vài chục người, có người đứng đầu'], ['Thị tộc', 'Vài chục gia đình cùng huyết thống'], ['Bộ lạc', 'Nhiều thị tộc sống cạnh nhau']], colW: 250 }), caption: 'Mọi người cùng làm, cùng hưởng.' },
    { title: 'Đời sống vật chất', html: `<ul><li>Công cụ: từ đá ghè đẽo thô sơ đến đá mài, cung tên.</li><li>Kiếm sống: săn bắt, hái lượm; về sau biết trồng trọt, chăn nuôi.</li><li>Biết dùng lửa để sưởi ấm, nướng thức ăn, xua thú dữ.</li><li>Ở trong hang động, mái đá; về sau dựng lều.</li></ul>` },
    { title: 'Đời sống tinh thần', html: `<ul><li>Biết làm đồ trang sức bằng vỏ ốc, xương.</li><li>Vẽ tranh trên vách hang, có tục chôn người chết.</li><li>Có tín ngưỡng sơ khai.</li></ul>`,
      svg: S.table({ title: 'Đời sống người nguyên thuỷ', head: ['Vật chất', 'Tinh thần'], rows: [['Công cụ đá, cung tên', 'Đồ trang sức'], ['Săn bắt, hái lượm', 'Vẽ tranh hang động'], ['Trồng trọt, chăn nuôi', 'Chôn người chết'], ['Dùng lửa, ở hang', 'Tín ngưỡng sơ khai']], colW: 250 }), caption: 'Đời sống ngày càng phong phú.' },
    { title: 'Ở Việt Nam', html: `<p>Dấu tích người nguyên thuỷ được tìm thấy ở nhiều nơi: hang Con Moong (Thanh Hoá), văn hoá Hoà Bình, văn hoá Bắc Sơn (Lạng Sơn)…</p>
      <div class="box key">Lao động giúp con người cải tiến công cụ, làm ra thức ăn, gắn kết cộng đồng.</div>` }
  ],
  summary: 'Xã hội nguyên thuỷ trải qua giai đoạn bầy người nguyên thuỷ và công xã thị tộc (thị tộc, bộ lạc). Người nguyên thuỷ dùng công cụ đá, săn bắt, hái lượm, sau biết trồng trọt, chăn nuôi, dùng lửa; có đồ trang sức, tranh vẽ, tục chôn người chết. Mọi người cùng làm, cùng hưởng. Việt Nam có nhiều dấu tích như hang Con Moong, văn hoá Hoà Bình, Bắc Sơn.',
  examples: [
    { title: 'Phân biệt', problem: 'Thị tộc khác bầy người nguyên thuỷ ở điểm nào?', solution: 'Thị tộc gồm các gia đình cùng huyết thống, tổ chức chặt chẽ hơn; bầy người chỉ là nhóm vài chục người.' },
    { title: 'Ý nghĩa của lửa', problem: 'Việc dùng lửa có ý nghĩa gì?', solution: 'Sưởi ấm, nướng chín thức ăn (khoẻ hơn), xua đuổi thú dữ, mở rộng nơi ở.' },
    { title: 'Tính toán', problem: 'Một thị tộc có 25 gia đình, mỗi gia đình 6 người. Thị tộc có bao nhiêu người?', solution: '25 × 6 = 150 người.' }
  ],
  exercises: [
    { question: 'Nêu ba công cụ lao động của người nguyên thuỷ.', hints: ['Bằng đá.', 'Dùng để săn.'], solution: 'Rìu đá, dao đá, cung tên.' },
    { question: 'Một bộ lạc gồm 4 thị tộc, mỗi thị tộc 120 người. Bộ lạc có bao nhiêu người?', hints: ['Nhân.', '4 × 120.'], solution: '480 người.' },
    { question: 'Vì sao người nguyên thuỷ “cùng làm, cùng hưởng”?', hints: ['Công cụ thô sơ.', 'Sản phẩm ít.'], solution: 'Vì công cụ thô sơ, phải hợp sức mới kiếm đủ thức ăn; sản phẩm ít nên chia đều.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thị tộc gồm những gia đình có cùng huyết thống.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hoạt động kiếm sống chủ yếu lúc đầu của người nguyên thuỷ:', options: ['Săn bắt, hái lượm', 'Buôn bán', 'Làm công nghiệp', 'Đánh cá bằng tàu'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: '25 gia đình, mỗi gia đình 6 người. Tổng bao nhiêu người?', answer: '150', unit: 'người', calc: '25*6', explain: '150.' },
    { type: 'mcq', q: 'Hang Con Moong thuộc tỉnh:', options: ['Thanh Hoá', 'Hà Giang', 'Cà Mau', 'Huế'], answer: 0, explain: 'Thanh Hoá.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người nguyên thuỷ chưa có đời sống tinh thần.', answer: false, explain: 'Có trang sức, tranh vẽ, tín ngưỡng.' },
    { type: 'short', q: '4 thị tộc, mỗi thị tộc 120 người. Bộ lạc có bao nhiêu người?', answer: '480', unit: 'người', calc: '4*120', explain: '480.' },
    { type: 'mcq', q: 'Nhiều thị tộc sống cạnh nhau hợp thành:', options: ['bộ lạc', 'quốc gia', 'thành phố', 'tỉnh'], answer: 0, explain: 'Bộ lạc.' },
    { type: 'mcq', q: 'Nguyên tắc phân chia sản phẩm trong thị tộc:', options: ['Cùng làm, cùng hưởng', 'Ai mạnh lấy nhiều', 'Người đứng đầu lấy hết', 'Bán cho người khác'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
