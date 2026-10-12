/* Tin học 9 – Bài 10b. Chuẩn bị dữ liệu và dựng video. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-10b', {
  objectives: [
    'Xây dựng được kịch bản (kịch bản phân cảnh) cho một video ngắn.',
    'Chuẩn bị, tổ chức được tư liệu (ảnh, phim, âm thanh) hợp pháp theo thư mục.',
    'Nhập tư liệu, đặt lên dòng thời gian và điều chỉnh thời lượng các cảnh theo kịch bản.'
  ],
  intro: 'Một video hay bắt đầu từ trước khi bật phần mềm: nghĩ xem kể câu chuyện gì, gồm những cảnh nào, mỗi cảnh bao lâu. Đó là <b>kịch bản</b>.',
  steps: [
    { title: 'Kịch bản phân cảnh', html: `<p>Kịch bản liệt kê các cảnh theo thứ tự: nội dung hình ảnh, chữ, âm thanh, thời lượng.</p>`,
      svg: S.table({ title: 'Kịch bản video “Một ngày ở trường” (60 giây)', head: ['Cảnh', 'Hình ảnh', 'Chữ / âm thanh', 'Thời lượng'], rows: [['1', 'Cổng trường buổi sáng', 'Tiêu đề, nhạc nền', '8 s'], ['2', 'Chào cờ', 'Thuyết minh', '12 s'], ['3', 'Giờ học Tin', 'Phụ đề', '20 s'], ['4', 'Giờ ra chơi', 'Nhạc vui', '14 s'], ['5', 'Tan trường', 'Lời cảm ơn', '6 s']], colW: 150 }), caption: 'Tổng thời lượng: 8 + 12 + 20 + 14 + 6 = 60 giây.' },
    { title: 'Chuẩn bị tư liệu', html: `<ul><li>Quay, chụp theo kịch bản; ghi âm lời thuyết minh.</li><li>Nhạc nền: dùng nhạc tự sáng tác hoặc nhạc được phép sử dụng (thư viện nhạc miễn phí bản quyền), ghi nguồn.</li><li>Tổ chức thư mục: <code>Video_Truong/Anh</code>, <code>/Phim</code>, <code>/AmThanh</code>; đặt tên tệp theo số cảnh.</li></ul>`,
      svg: S.folderTree({ title: 'Tổ chức tư liệu', root: { name: 'Video_Truong', children: [{ name: 'Phim', children: ['canh1-cong.mp4', 'canh3-gio-tin.mp4'] }, { name: 'Anh', children: ['canh2-chao-co.jpg'] }, { name: 'AmThanh', children: ['nhac-nen.mp3', 'thuyet-minh.mp3'] }] } }), caption: 'Đặt tên tệp theo số cảnh để dễ dựng.' },
    { title: 'Dựng video', html: `<p>Nhập tư liệu vào thư viện → kéo lên dòng thời gian theo thứ tự cảnh → cắt bớt (trim) đầu, cuối đoạn phim cho đúng thời lượng → đặt thời lượng hiển thị cho ảnh.</p>` },
    { title: 'Kiểm tra theo kịch bản', html: `<p>Xem lại toàn bộ, đối chiếu thứ tự và thời lượng với kịch bản; điều chỉnh nếu tổng thời lượng vượt yêu cầu.</p>
      <div class="box key">Kịch bản trước – tư liệu hợp pháp – dựng theo kịch bản.</div>` }
  ],
  summary: 'Làm video bắt đầu từ kịch bản phân cảnh (hình ảnh, chữ, âm thanh, thời lượng). Chuẩn bị tư liệu hợp pháp, tổ chức thư mục, đặt tên theo cảnh. Dựng: nhập tư liệu, kéo lên dòng thời gian, cắt đầu cuối, đặt thời lượng ảnh; kiểm tra đối chiếu kịch bản.',
  examples: [
    { title: 'Tính thời lượng', problem: 'Kịch bản có 6 cảnh: 5, 10, 15, 10, 12, 8 giây. Tổng thời lượng?', solution: '60 giây.' },
    { title: 'Cắt đoạn phim', problem: 'Đoạn phim gốc dài 32 giây, cảnh chỉ cần 20 giây. Phải cắt bớt bao nhiêu?', solution: '12 giây (cắt ở đầu và/hoặc cuối).' },
    { title: 'Nhạc nền', problem: 'Có nên lấy một bài hát nổi tiếng trên mạng làm nhạc nền rồi đăng công khai?', solution: 'Không nên nếu chưa được phép; hãy dùng nhạc miễn phí bản quyền và ghi nguồn.' }
  ],
  exercises: [
    { question: 'Lập kịch bản 4 cảnh cho video 40 giây giới thiệu một món ăn quê em.', hints: ['Mở đầu – nguyên liệu – cách làm – thành phẩm.', 'Tổng thời lượng 40 giây.'], solution: 'Ví dụ: tiêu đề 5 s; nguyên liệu 10 s; cách làm 17 s; thành phẩm + cảm ơn 8 s.' },
    { question: 'Ảnh được đặt hiển thị 4 giây mỗi ảnh. Muốn đoạn trình chiếu ảnh dài 36 giây cần bao nhiêu ảnh?', hints: ['Chia tổng thời gian cho thời gian mỗi ảnh.', '36 : 4.'], solution: '9 ảnh.' },
    { question: 'Vì sao nên đặt tên tệp theo số cảnh?', hints: ['Khi dựng cần tìm tệp nhanh.', 'Thứ tự sắp xếp.'], solution: 'Dễ tìm, dễ sắp xếp đúng thứ tự cảnh, tránh nhầm lẫn khi làm nhóm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên xây dựng kịch bản trước khi dựng video.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Các cảnh dài 8, 12, 20, 14, 6 giây. Tổng thời lượng?', answer: '60', unit: 'giây', calc: '8+12+20+14+6', explain: '60.' },
    { type: 'short', q: 'Đoạn phim 45 giây, cần giữ 28 giây. Cắt bớt bao nhiêu giây?', answer: '17', unit: 'giây', calc: '45-28', explain: '17.' },
    { type: 'mcq', q: 'Thao tác cắt bớt phần đầu, cuối của đoạn phim gọi là:', options: ['trim (cắt tỉa)', 'export', 'zoom', 'render'], answer: 0, explain: 'Trim.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng mọi bài hát trên mạng làm nhạc nền cho video đăng công khai.', answer: false, explain: 'Cần được phép.' },
    { type: 'short', q: 'Mỗi ảnh hiển thị 5 giây, có 8 ảnh. Đoạn ảnh dài bao nhiêu giây?', answer: '40', unit: 'giây', calc: '5*8', explain: '40.' },
    { type: 'mcq', q: 'Kịch bản phân cảnh thường ghi:', options: ['hình ảnh, chữ/âm thanh, thời lượng mỗi cảnh', 'mật khẩu', 'giá máy quay', 'tên phần mềm diệt virus'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Tổ chức tư liệu hợp lí là:', options: ['chia thư mục Ảnh, Phim, Âm thanh', 'để tất cả trên màn hình nền', 'đặt tên tệp ngẫu nhiên', 'không cần lưu'], answer: 0, explain: 'Chia thư mục.' }
  ]
});
})();
