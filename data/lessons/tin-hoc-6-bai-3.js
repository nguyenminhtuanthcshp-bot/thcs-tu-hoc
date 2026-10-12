/* Tin học 6 – Bài 3. Thông tin trong máy tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-3', {
  objectives: [
    'Giải thích được thông tin trong máy tính được biểu diễn bằng dãy bit (0 và 1).',
    'Nêu được các đơn vị đo dung lượng thông tin: bit, byte, KB, MB, GB, TB.',
    'Ước lượng được khả năng lưu trữ của thiết bị nhớ thông dụng và đổi được giữa các đơn vị.'
  ],
  intro: 'Một bức ảnh, một bài hát, một trang văn bản – trong máy tính, tất cả đều được lưu bằng những con số 0 và 1. Vì sao chỉ cần hai kí hiệu mà máy tính lưu được mọi loại thông tin?',
  steps: [
    { title: 'Biểu diễn thông tin bằng dãy bit', html: `<p>Máy tính dùng các mạch điện có hai trạng thái (có điện – không có điện), tương ứng với hai kí hiệu <b>1</b> và <b>0</b>. Mỗi kí hiệu như vậy gọi là một <b>bit</b> (chữ số nhị phân).</p>
      <p>Để lưu trữ và xử lí, chữ, số, hình ảnh, âm thanh đều được biến đổi thành <b>dãy bit</b>. Quá trình này gọi là <b>số hoá</b>.</p>`,
      svg: S.bits({ bits: '01000001', title: 'Mã của chữ cái A trong máy tính', label: 'Chữ A được mã hoá thành dãy 8 bit 01000001', note: 'Mỗi ô là 1 bit; 8 bit tạo thành 1 byte' }), caption: 'Chữ A được biểu diễn bằng dãy 8 bit (theo bảng mã ASCII).' },
    { title: 'Bit và byte', html: `<p><b>Bit</b> là đơn vị nhỏ nhất để đo lượng thông tin. Một nhóm 8 bit gọi là một <b>byte</b> (B): 1 byte = 8 bit.</p>
      <p>Mỗi kí tự tiếng Anh thông thường cần khoảng 1 byte để lưu trữ.</p>` },
    { title: 'Các đơn vị đo dung lượng', html: `<p>Dung lượng lớn được đo bằng các bội số của byte, mỗi đơn vị gấp <b>1 024</b> lần đơn vị liền trước:</p>
      <table><tr><th>Đơn vị</th><th>Quan hệ</th></tr><tr><td>Kilobyte (KB)</td><td>1 KB = 1 024 B</td></tr><tr><td>Megabyte (MB)</td><td>1 MB = 1 024 KB</td></tr><tr><td>Gigabyte (GB)</td><td>1 GB = 1 024 MB</td></tr><tr><td>Terabyte (TB)</td><td>1 TB = 1 024 GB</td></tr></table>`,
      svg: S.unitLadder(), caption: 'Các đơn vị đo dung lượng thông tin, mỗi bậc gấp 1 024 lần bậc trước.' },
    { title: 'Khả năng lưu trữ của thiết bị nhớ', html: `<p>Thiết bị nhớ thông dụng: thẻ nhớ, ổ USB (vài chục đến vài trăm GB), ổ đĩa cứng (hàng trăm GB đến vài TB).</p>
      <p>Để ước lượng số tệp lưu được, lấy dung lượng thiết bị chia cho dung lượng một tệp (đổi về cùng đơn vị).</p>`,
      svg: S.bar({ title: 'Dung lượng một số loại tệp (số liệu minh hoạ)', cats: ['Trang văn bản', 'Ảnh', 'Bài hát', 'Phim ngắn'], series: [{ name: 'MB', values: [0.05, 3, 5, 500], color: '#0e7490' }], width: 560, height: 280 }), caption: 'Dung lượng tệp có thể rất khác nhau (số liệu minh hoạ, đơn vị MB).' }
  ],
  summary: 'Máy tính biểu diễn thông tin bằng dãy bit (0 và 1). Bit là đơn vị nhỏ nhất; 1 byte = 8 bit; 1 KB = 1 024 B; 1 MB = 1 024 KB; 1 GB = 1 024 MB; 1 TB = 1 024 GB. Số tệp lưu được ≈ dung lượng thiết bị : dung lượng mỗi tệp.',
  examples: [
    { title: 'Đổi đơn vị', problem: 'Đổi 3 KB ra byte.', solution: '3 × 1 024 = 3 072 byte.' },
    { title: 'Đổi bit ra byte', problem: 'Một dãy có 64 bit tương ứng bao nhiêu byte?', solution: '64 : 8 = 8 byte.' },
    { title: 'Ước lượng', problem: 'Một thẻ nhớ 2 GB chứa được khoảng bao nhiêu ảnh, nếu mỗi ảnh 4 MB?', solution: '2 GB = 2 048 MB; 2 048 : 4 = 512 ảnh.' }
  ],
  exercises: [
    { question: 'Vì sao máy tính dùng hai kí hiệu 0 và 1 để biểu diễn thông tin?', hints: ['Mạch điện trong máy tính có mấy trạng thái cơ bản?', 'Mỗi trạng thái ứng với một kí hiệu.'], solution: 'Vì các mạch điện tử có hai trạng thái dễ phân biệt (có điện – không có điện), tương ứng với 1 và 0.' },
    { question: 'Đổi 5 MB ra KB.', hints: ['1 MB = 1 024 KB.', 'Nhân 5 với 1 024.'], solution: '5 × 1 024 = 5 120 KB.' },
    { question: 'Một ổ USB 16 GB. Mỗi bài hát khoảng 4 MB. Ổ USB chứa được khoảng bao nhiêu bài hát?', hints: ['Đổi 16 GB ra MB: 16 × 1 024.', 'Chia cho 4.'], solution: '16 × 1 024 = 16 384 MB; 16 384 : 4 = 4 096 bài hát.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bit là đơn vị nhỏ nhất để đo lượng thông tin.', answer: true, explain: 'Bit chỉ nhận một trong hai giá trị 0 hoặc 1.' },
    { type: 'mcq', q: '1 byte bằng bao nhiêu bit?', options: ['2', '8', '10', '1 024'], answer: 1, explain: '1 byte = 8 bit.' },
    { type: 'short', q: 'Đổi 2 KB ra byte.', answer: '2048', answerText: '2 048', unit: 'byte', calc: '2*1024', explain: '2 × 1 024 = 2 048.' },
    { type: 'mcq', q: 'Đơn vị nào lớn nhất?', options: ['MB', 'KB', 'TB', 'GB'], answer: 2, explain: 'TB > GB > MB > KB.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong máy tính, hình ảnh và âm thanh không thể biểu diễn bằng dãy bit.', answer: false, explain: 'Mọi loại thông tin đều được số hoá thành dãy bit.' },
    { type: 'short', q: 'Một dãy gồm 40 bit tương ứng bao nhiêu byte?', answer: '5', unit: 'byte', calc: '40/8', explain: '40 : 8 = 5.' },
    { type: 'short', q: 'Thẻ nhớ 1 GB chứa được bao nhiêu ảnh, nếu mỗi ảnh 2 MB?', answer: '512', unit: 'ảnh', calc: '1024/2', explain: '1 GB = 1 024 MB; 1 024 : 2 = 512.' },
    { type: 'mcq', q: 'Quá trình biến đổi thông tin thành dãy bit gọi là:', options: ['in ấn', 'số hoá', 'truyền tin', 'tìm kiếm'], answer: 1, explain: 'Đó là số hoá.' }
  ]
});
})();
