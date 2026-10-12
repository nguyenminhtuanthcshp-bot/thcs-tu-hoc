/* Tin học 9 – Bài 13b. Biên tập và xuất video. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-13b', {
  objectives: [
    'Biên tập được video: xem lại, sửa lỗi, chỉnh màu, tốc độ, cân bằng âm thanh.',
    'Xuất được video với định dạng, độ phân giải, số khung hình phù hợp mục đích.',
    'Ước lượng được dung lượng tệp video; chia sẻ video có trách nhiệm.'
  ],
  intro: 'Bước cuối cùng: rà soát từng giây, sửa những lỗi nhỏ, rồi “đóng gói” thành tệp video để chia sẻ với mọi người.',
  steps: [
    { title: 'Biên tập lần cuối', html: `<ul><li>Xem lại toàn bộ: chính tả chữ, khoảng đen, cảnh thừa.</li><li>Chỉnh màu, độ sáng cho đồng đều giữa các cảnh.</li><li>Chỉnh tốc độ (tua nhanh cảnh dài, quay chậm khoảnh khắc đẹp).</li><li>Cân bằng âm lượng giữa các đoạn.</li></ul>` },
    { title: 'Thiết lập xuất video', html: `<p>Lệnh <b>Export</b>: chọn định dạng (MP4 phổ biến), độ phân giải (thường giữ như tư liệu gốc, ví dụ 1 920 × 1 080), số khung hình (25 hoặc 30 fps), chất lượng (tốc độ bit).</p>`,
      svg: S.table({ title: 'Chọn thông số xuất theo mục đích', head: ['Mục đích', 'Gợi ý thiết lập'], rows: [['Chiếu trên máy chiếu lớp học', 'MP4, Full HD 1 920 × 1 080'], ['Gửi qua tin nhắn', 'MP4, HD 1 280 × 720 cho nhẹ'], ['Lưu trữ chất lượng cao', 'Giữ độ phân giải gốc, chất lượng cao']], colW: 260 }), caption: 'Cân bằng giữa chất lượng và dung lượng.' },
    { title: 'Ước lượng dung lượng', html: `<p>Dung lượng ≈ tốc độ bit × thời lượng. Ví dụ tốc độ 8 Mbps (megabit/giây), video 60 giây: 8 × 60 = 480 Mb = 480 : 8 = <b>60 MB</b>.</p>`,
      svg: S.bar({ title: 'Dung lượng ước tính video 60 giây (minh hoạ)', cats: ['HD (4 Mbps)', 'Full HD (8 Mbps)', '4K (40 Mbps)'], series: [{ name: 'MB', values: [30, 60, 300], color: '#0e7490' }], width: 500, height: 270 }), caption: 'Độ phân giải, tốc độ bit càng cao, tệp càng lớn.' },
    { title: 'Chia sẻ có trách nhiệm', html: `<p>Xin phép người xuất hiện trong video trước khi đăng; ghi nguồn nhạc, tư liệu; chọn chế độ chia sẻ phù hợp (công khai, trong lớp); không đăng nội dung gây hại.</p>
      <div class="box key">Biên tập kĩ – xuất đúng mục đích – chia sẻ có trách nhiệm.</div>` }
  ],
  summary: 'Biên tập: rà soát lỗi, chỉnh màu, tốc độ, cân bằng âm thanh. Xuất video (Export): chọn định dạng MP4, độ phân giải, số khung hình, chất lượng theo mục đích. Dung lượng ≈ tốc độ bit × thời lượng (8 bit = 1 byte). Chia sẻ có trách nhiệm: xin phép, ghi nguồn, chọn chế độ phù hợp.',
  examples: [
    { title: 'Ước lượng dung lượng', problem: 'Video 2 phút, tốc độ bit 4 Mbps. Dung lượng khoảng bao nhiêu MB?', solution: '4 × 120 = 480 Mb = 60 MB.' },
    { title: 'Chọn thiết lập', problem: 'Gửi video cho ông bà qua ứng dụng nhắn tin có giới hạn dung lượng. Nên xuất thế nào?', solution: 'MP4, độ phân giải HD 1 280 × 720, chất lượng vừa phải.' },
    { title: 'Tua nhanh', problem: 'Cảnh 40 giây được tua nhanh gấp 4 lần. Còn bao nhiêu giây?', solution: '10 giây.' }
  ],
  exercises: [
    { question: 'Nêu bốn việc cần làm khi biên tập lần cuối.', hints: ['Về chữ, cảnh thừa.', 'Về màu, tốc độ, âm thanh.'], solution: 'Kiểm tra chính tả, cắt cảnh thừa; chỉnh màu đồng đều; chỉnh tốc độ; cân bằng âm lượng.' },
    { question: 'Video 90 giây, tốc độ bit 8 Mbps. Dung lượng khoảng bao nhiêu MB?', hints: ['Tính megabit: 8 × 90.', 'Chia 8 để ra MB.'], solution: '720 Mb = 90 MB.' },
    { question: 'Vì sao phải xin phép trước khi đăng video có hình ảnh bạn bè?', hints: ['Quyền đối với hình ảnh cá nhân.', 'Bạn có muốn xuất hiện công khai không?'], solution: 'Hình ảnh cá nhân là quyền của mỗi người; đăng khi chưa được đồng ý có thể xâm phạm quyền riêng tư và vi phạm pháp luật.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Độ phân giải càng cao thì tệp video thường càng lớn.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Video 60 giây, tốc độ bit 4 Mbps. Dung lượng khoảng bao nhiêu MB?', answer: '30', unit: 'MB', calc: '4*60/8', explain: '240 Mb = 30 MB.' },
    { type: 'mcq', q: 'Lệnh xuất video thành tệp:', options: ['Export', 'Import', 'Split', 'Undo'], answer: 0, explain: 'Export.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể đăng công khai video có hình người khác mà không cần xin phép.', answer: false, explain: 'Cần xin phép.' },
    { type: 'short', q: 'Cảnh 36 giây tua nhanh gấp 3 lần. Còn bao nhiêu giây?', answer: '12', unit: 'giây', calc: '36/3', explain: '12.' },
    { type: 'short', q: 'Video 2 phút, tốc độ bit 10 Mbps. Dung lượng khoảng bao nhiêu MB?', answer: '150', unit: 'MB', calc: '10*120/8', explain: '1 200 Mb = 150 MB.' },
    { type: 'mcq', q: 'Để gửi video nhẹ qua tin nhắn, nên chọn:', options: ['HD 1 280 × 720', '4K 3 840 × 2 160', 'không nén', 'độ phân giải cao nhất'], answer: 0, explain: 'HD nhẹ hơn.' },
    { type: 'mcq', q: '1 byte bằng:', options: ['8 bit', '10 bit', '1 024 bit', '2 bit'], answer: 0, explain: '8 bit.' }
  ]
});
})();
