/* Tin học 9 – Bài 12b. Hoàn thành việc dựng video. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-12b', {
  objectives: [
    'Thêm được chữ: tiêu đề, phụ đề, lời kết với thời điểm xuất hiện phù hợp.',
    'Thêm và điều chỉnh được âm thanh: nhạc nền, lời thuyết minh, âm lượng, hiệu ứng tăng/giảm dần.',
    'Đồng bộ được hình ảnh, chữ, âm thanh theo kịch bản.'
  ],
  intro: 'Hình ảnh đã xếp xong, nhưng video vẫn “câm” và thiếu lời giới thiệu. Thêm <b>chữ</b> và <b>âm thanh</b> sẽ làm video trọn vẹn.',
  steps: [
    { title: 'Thêm chữ', html: `<p>Chọn công cụ Text/Title → gõ nội dung → đặt lên rãnh chữ, kéo dài đúng khoảng thời gian cần hiện. Chữ ngắn gọn, cỡ đủ lớn, màu tương phản; phụ đề hiện đủ lâu để đọc (khoảng 2–3 giây cho một dòng ngắn).</p>` },
    { title: 'Thêm âm thanh', html: `<p>Nhạc nền đặt ở một rãnh âm thanh, lời thuyết minh ở rãnh khác. Khi có thuyết minh, giảm âm lượng nhạc nền để nghe rõ lời. Dùng <b>Fade in</b> (tăng dần) ở đầu và <b>Fade out</b> (giảm dần) ở cuối.</p>`,
      svg: S.videoTrack({ title: 'Đồng bộ chữ, hình và âm thanh (60 giây)', total: 60, tracks: [{ name: 'Chữ', items: [{ s: 0, e: 8, t: 'Tiêu đề' }, { s: 20, e: 40, t: 'Phụ đề' }, { s: 54, e: 60, t: 'Cảm ơn' }] }, { name: 'Video', items: [{ s: 0, e: 8, t: 'C1' }, { s: 8, e: 20, t: 'C2' }, { s: 20, e: 40, t: 'C3' }, { s: 40, e: 54, t: 'C4' }, { s: 54, e: 60, t: 'C5' }] }, { name: 'Thuyết minh', items: [{ s: 8, e: 40, t: 'Lời giới thiệu' }] }, { name: 'Nhạc nền', items: [{ s: 0, e: 60, t: 'Nhạc (giảm âm khi thuyết minh)' }] }] }), caption: 'Các rãnh cùng khớp theo kịch bản.' },
    { title: 'Đồng bộ', html: `<p>Đảm bảo lời thuyết minh nói đúng lúc cảnh tương ứng xuất hiện; phụ đề khớp lời nói; nhạc kết thúc cùng video (cắt hoặc fade out).</p>`,
      svg: S.table({ title: 'Kiểm tra đồng bộ', head: ['Mục kiểm tra', 'Đạt?'], rows: [['Tiêu đề hiện ngay từ đầu', '✓'], ['Thuyết minh khớp cảnh 2–3', '✓'], ['Nhạc nền không át lời', '✓'], ['Nhạc kết thúc cùng video', '✓']], colW: 240 }), caption: 'Danh sách kiểm tra trước khi xuất.' },
    { title: 'Lưu dự án', html: `<p>Lưu tệp dự án của phần mềm (để sửa tiếp); tệp dự án chỉ chứa “cách dựng”, cần giữ nguyên thư mục tư liệu đi kèm.</p>
      <div class="box key">Chữ ngắn gọn – thuyết minh rõ – nhạc nền nhỏ hơn lời – mọi rãnh đồng bộ.</div>` }
  ],
  summary: 'Thêm chữ (tiêu đề, phụ đề, lời kết) trên rãnh chữ với thời gian hiện phù hợp; thêm nhạc nền và thuyết minh trên các rãnh âm thanh, giảm âm lượng nhạc khi có lời, dùng fade in/out. Đồng bộ chữ, hình, âm thanh theo kịch bản; lưu tệp dự án cùng thư mục tư liệu.',
  examples: [
    { title: 'Thời gian phụ đề', problem: 'Lời thuyết minh 24 giây chia thành các dòng phụ đề, mỗi dòng hiện 3 giây. Cần bao nhiêu dòng?', solution: '8 dòng.' },
    { title: 'Nhạc dài hơn video', problem: 'Bản nhạc dài 2 phút 30 giây, video dài 1 phút 45 giây. Xử lí thế nào?', solution: 'Cắt nhạc tại 1 phút 45 giây và đặt fade out vài giây cuối (cắt bỏ 45 giây).' },
    { title: 'Âm lượng', problem: 'Vì sao giảm âm lượng nhạc nền khi có thuyết minh?', solution: 'Để người xem nghe rõ lời thuyết minh.' }
  ],
  exercises: [
    { question: 'Nêu ba yêu cầu đối với chữ trong video.', hints: ['Độ dài và cỡ chữ.', 'Màu và thời gian hiện.'], solution: 'Ngắn gọn; cỡ đủ lớn, màu tương phản; hiện đủ lâu để đọc.' },
    { question: 'Video 75 giây, nhạc nền dài 120 giây. Phải cắt bỏ bao nhiêu giây nhạc?', hints: ['Lấy độ dài nhạc trừ độ dài video.', '120 − 75.'], solution: '45 giây.' },
    { question: 'Vì sao khi chép dự án sang máy khác phải chép cả thư mục tư liệu?', hints: ['Tệp dự án chứa gì?', 'Phần mềm tìm tư liệu ở đâu?'], solution: 'Tệp dự án chỉ lưu cách dựng và đường dẫn tới tư liệu; thiếu tư liệu thì không mở, không xuất được video đúng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên giảm âm lượng nhạc nền khi có lời thuyết minh.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hiệu ứng âm thanh giảm dần ở cuối video:', options: ['Fade out', 'Fade in', 'Split', 'Trim'], answer: 0, explain: 'Fade out.' },
    { type: 'short', q: 'Thuyết minh 30 giây, mỗi dòng phụ đề hiện 2,5 giây. Cần bao nhiêu dòng?', answer: '12', unit: 'dòng', calc: '30/2.5', explain: '12.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phụ đề hiện càng nhanh càng tốt, chỉ cần nửa giây.', answer: false, explain: 'Phải đủ lâu để đọc.' },
    { type: 'short', q: 'Video 90 giây, nhạc 150 giây. Cắt bỏ bao nhiêu giây nhạc?', answer: '60', unit: 'giây', calc: '150-90', explain: '60.' },
    { type: 'mcq', q: 'Tệp dự án video lưu:', options: ['cách dựng và đường dẫn tư liệu', 'video hoàn chỉnh MP4', 'chỉ âm thanh', 'mật khẩu'], answer: 0, explain: 'Cách dựng.' },
    { type: 'short', q: 'Tiêu đề hiện từ giây 0 đến giây 6, lời kết từ giây 52 đến 60. Tổng thời gian có chữ (giây)?', answer: '14', unit: 'giây', calc: '6+8', explain: '6 + 8.' },
    { type: 'mcq', q: 'Lời thuyết minh nên đặt ở:', options: ['rãnh âm thanh riêng', 'rãnh chữ', 'thư viện', 'màn hình xem trước'], answer: 0, explain: 'Rãnh âm thanh.' }
  ]
});
})();
