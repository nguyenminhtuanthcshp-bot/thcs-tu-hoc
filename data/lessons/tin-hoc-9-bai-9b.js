/* Tin học 9 – Bài 9b. Các chức năng chính của phần mềm làm video. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-9b', {
  objectives: [
    'Nêu được các chức năng chính của phần mềm làm video: nhập tư liệu, dựng trên dòng thời gian, thêm chữ, âm thanh, hiệu ứng, xuất video.',
    'Nhận biết được giao diện: thư viện tư liệu, màn hình xem trước, dòng thời gian (timeline) với các rãnh.',
    'Hiểu được một số thông số video: độ phân giải, số khung hình mỗi giây, định dạng tệp.'
  ],
  intro: 'Từ vài đoạn phim quay bằng điện thoại, vài tấm ảnh và một bản nhạc, em có thể làm ra một video giới thiệu trường thật ấn tượng nhờ <b>phần mềm làm video</b>.',
  steps: [
    { title: 'Phần mềm làm video', html: `<p>Phần mềm làm video (ví dụ các phần mềm miễn phí như Shotcut, OpenShot hoặc ứng dụng có sẵn trên máy tính, điện thoại) cho phép ghép ảnh, đoạn phim, âm thanh, chữ thành một video hoàn chỉnh.</p>` },
    { title: 'Giao diện và dòng thời gian', html: `<p>Giao diện thường có: <b>thư viện tư liệu</b> (ảnh, video, âm thanh đã nhập), <b>màn hình xem trước</b>, <b>dòng thời gian</b> gồm nhiều <b>rãnh</b> (video, chữ, âm thanh) xếp theo thời gian; <b>đầu phát</b> (playhead) chỉ thời điểm đang xem.</p>`,
      svg: S.videoTrack({ title: 'Dòng thời gian của một video 40 giây', total: 40, head: 12, tracks: [{ name: 'Chữ', items: [{ s: 0, e: 6, t: 'Tiêu đề' }, { s: 34, e: 40, t: 'Lời cảm ơn' }] }, { name: 'Video/Ảnh', items: [{ s: 0, e: 10, t: 'Cổng trường' }, { s: 10, e: 24, t: 'Giờ học' }, { s: 24, e: 40, t: 'Sân chơi' }] }, { name: 'Âm thanh', items: [{ s: 0, e: 40, t: 'Nhạc nền' }] }], note: 'Vạch đỏ: đầu phát đang ở giây thứ 12' }), caption: 'Các rãnh xếp chồng: chữ ở trên, hình ở giữa, âm thanh ở dưới.' },
    { title: 'Chức năng chính', html: `<ul><li>Nhập tư liệu; cắt, tách, ghép đoạn phim.</li><li>Thêm chữ (tiêu đề, phụ đề); thêm nhạc nền, lời thuyết minh.</li><li>Hiệu ứng chuyển cảnh, hiệu ứng hình ảnh, chỉnh tốc độ.</li><li>Xuất video ra tệp (thường là MP4).</li></ul>` },
    { title: 'Thông số video', html: `<p>Mỗi giây video gồm nhiều <b>khung hình</b>; thường 24, 25 hoặc 30 khung hình/giây (fps). <b>Độ phân giải</b> Full HD là 1 920 × 1 080 điểm ảnh. Video độ phân giải càng cao, dài càng lâu thì tệp càng lớn.</p>`,
      svg: S.table({ title: 'Một số độ phân giải thường gặp', head: ['Tên gọi', 'Độ phân giải (điểm ảnh)'], rows: [['HD', '1 280 × 720'], ['Full HD', '1 920 × 1 080'], ['4K (UHD)', '3 840 × 2 160']], colW: 220 }), caption: 'Độ phân giải càng cao, hình càng chi tiết.' }
  ],
  summary: 'Phần mềm làm video ghép ảnh, phim, âm thanh, chữ thành video. Giao diện: thư viện tư liệu, màn hình xem trước, dòng thời gian nhiều rãnh, đầu phát. Chức năng: cắt ghép, thêm chữ, âm thanh, hiệu ứng, xuất video (MP4). Thông số: số khung hình/giây (24, 25, 30), độ phân giải (HD, Full HD 1 920 × 1 080, 4K).',
  examples: [
    { title: 'Đọc dòng thời gian', problem: 'Ở hình bước 2, cảnh “Giờ học” kéo dài bao lâu?', solution: 'Từ giây 10 đến giây 24: 14 giây.' },
    { title: 'Khung hình', problem: 'Video 30 fps dài 10 giây có bao nhiêu khung hình?', solution: '300 khung hình.' },
    { title: 'Điểm ảnh', problem: 'Một khung hình Full HD có bao nhiêu điểm ảnh?', solution: '1 920 × 1 080 = 2 073 600 điểm ảnh.' }
  ],
  exercises: [
    { question: 'Kể các rãnh thường có trên dòng thời gian và nội dung đặt trên mỗi rãnh.', hints: ['Hình ảnh đặt ở đâu?', 'Chữ, nhạc đặt ở đâu?'], solution: 'Rãnh video/ảnh (hình), rãnh chữ (tiêu đề, phụ đề), rãnh âm thanh (nhạc nền, thuyết minh).' },
    { question: 'Video 25 fps dài 2 phút có bao nhiêu khung hình?', hints: ['Đổi 2 phút ra giây.', 'Nhân 25.'], solution: '120 × 25 = 3 000 khung hình.' },
    { question: 'Vì sao video 4K thường có dung lượng lớn hơn Full HD cùng thời lượng?', hints: ['So sánh số điểm ảnh mỗi khung.', '3 840 × 2 160 so với 1 920 × 1 080.'], solution: 'Mỗi khung 4K có số điểm ảnh gấp 4 lần Full HD nên cần nhiều dữ liệu hơn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dòng thời gian (timeline) dùng để sắp xếp tư liệu theo thời gian.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Độ phân giải Full HD là:', options: ['1 280 × 720', '1 920 × 1 080', '3 840 × 2 160', '640 × 480'], answer: 1, explain: '1 920 × 1 080.' },
    { type: 'short', q: 'Video 24 fps dài 5 giây có bao nhiêu khung hình?', answer: '120', unit: 'khung hình', calc: '24*5', explain: '120.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhạc nền thường đặt trên rãnh video.', answer: false, explain: 'Đặt trên rãnh âm thanh.' },
    { type: 'mcq', q: 'Định dạng tệp video phổ biến khi xuất:', options: ['MP4', 'DOCX', 'XLSX', 'TXT'], answer: 0, explain: 'MP4.' },
    { type: 'short', q: 'Số điểm ảnh của 4K (3 840 × 2 160) gấp bao nhiêu lần Full HD?', answer: '4', unit: 'lần', calc: '(3840*2160)/(1920*1080)', explain: '4 lần.' },
    { type: 'short', q: 'Cảnh từ giây 18 đến giây 33 dài bao nhiêu giây?', answer: '15', unit: 'giây', calc: '33-18', explain: '15.' },
    { type: 'mcq', q: 'Vạch chỉ thời điểm đang xem trên dòng thời gian gọi là:', options: ['đầu phát (playhead)', 'thư viện', 'phụ đề', 'độ phân giải'], answer: 0, explain: 'Playhead.' }
  ]
});
})();
