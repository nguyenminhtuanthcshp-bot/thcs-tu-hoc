/* Tin học 8 – Bài 12. Từ thuật toán đến chương trình. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-12', {
  objectives: [
    'Nêu được khái niệm chương trình máy tính và ngôn ngữ lập trình.',
    'Mô tả được thuật toán bằng sơ đồ khối và chuyển được thành chương trình Scratch đơn giản.',
    'Chạy thử, kiểm tra được chương trình với dữ liệu cụ thể.'
  ],
  intro: 'Em đã biết mô tả thuật toán bằng lời và sơ đồ khối. Nhưng máy tính không hiểu tiếng Việt – nó cần <b>chương trình</b> viết bằng <b>ngôn ngữ lập trình</b>.',
  steps: [
    { title: 'Chương trình và ngôn ngữ lập trình', html: `<p><b>Chương trình máy tính</b> là dãy lệnh mà máy tính có thể hiểu và thực hiện, mô tả một thuật toán. <b>Ngôn ngữ lập trình</b> là ngôn ngữ dùng để viết chương trình: Scratch (kéo thả khối lệnh), Python, C++…</p>` },
    { title: 'Bài toán: tính diện tích hình chữ nhật', html: `<p>Đầu vào: chiều dài, chiều rộng. Đầu ra: diện tích = dài × rộng. Sơ đồ khối:</p>`,
      svg: S.flowchart({ title: 'Thuật toán tính diện tích', steps: [{ t: 'start', s: 'Bắt đầu' }, { t: 'io', s: 'Nhập dài, rộng' }, { t: 'proc', s: 'Diện tích ← dài × rộng' }, { t: 'io', s: 'Thông báo diện tích' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Mô tả thuật toán bằng sơ đồ khối.' },
    { title: 'Chuyển thành chương trình Scratch', html: `<p>Mỗi bước của sơ đồ tương ứng với một hoặc vài khối lệnh: nhập dữ liệu dùng khối <b>hỏi … và đợi</b> (nhóm Cảm biến), lưu vào <b>biến</b>; tính toán dùng khối nhóm Các phép toán; đưa kết quả bằng khối <b>nói</b>.</p>`,
      svg: S.blocks({ title: 'Chương trình Scratch tính diện tích', stack: [{ k: 'event', s: 'khi bấm vào lá cờ xanh' }, { k: 'sensing', s: 'hỏi Chiều dài? và đợi' }, { k: 'variables', s: 'đặt dài thành (trả lời)' }, { k: 'sensing', s: 'hỏi Chiều rộng? và đợi' }, { k: 'variables', s: 'đặt rộng thành (trả lời)' }, { k: 'looks', s: 'nói (dài × rộng) trong 2 giây' }] }), caption: 'Mỗi bước của thuật toán thành khối lệnh.' },
    { title: 'Chạy thử và kiểm tra', html: `<p>Chạy chương trình với dữ liệu đã biết kết quả: dài 8, rộng 5 → phải nói 40. Nếu sai, xem lại từng khối lệnh.</p>
      <div class="box key">Bài toán → thuật toán → chương trình → chạy thử.</div>` }
  ],
  summary: 'Chương trình máy tính là dãy lệnh máy tính thực hiện được, mô tả thuật toán, được viết bằng ngôn ngữ lập trình (Scratch, Python…). Quy trình: xác định bài toán (đầu vào, đầu ra) → thuật toán (sơ đồ khối) → chương trình → chạy thử với dữ liệu đã biết kết quả.',
  examples: [
    { title: 'Đầu vào, đầu ra', problem: 'Bài toán tính chu vi hình vuông: xác định đầu vào và đầu ra.', solution: 'Đầu vào: độ dài cạnh a. Đầu ra: chu vi = 4 × a.' },
    { title: 'Kiểm tra chương trình', problem: 'Chạy chương trình diện tích với dài 12, rộng 7. Kết quả đúng là bao nhiêu?', solution: '84.' },
    { title: 'Tương ứng khối lệnh', problem: 'Bước “Nhập dài” tương ứng với khối lệnh nào trong Scratch?', solution: 'Khối “hỏi … và đợi” rồi “đặt dài thành (trả lời)”.' }
  ],
  exercises: [
    { question: 'Vẽ sơ đồ khối (mô tả bằng lời các khối) cho bài toán đổi phút ra giây.', hints: ['Đầu vào: số phút.', 'Giây = phút × 60.'], solution: 'Bắt đầu → Nhập phút → giây ← phút × 60 → Thông báo giây → Kết thúc.' },
    { question: 'Liệt kê các khối Scratch cho chương trình tính chu vi hình vuông.', hints: ['Khối sự kiện, khối hỏi.', 'Khối nói kết quả.'], solution: 'khi bấm lá cờ xanh; hỏi Cạnh? và đợi; đặt a thành (trả lời); nói (4 × a).' },
    { question: 'Chạy chương trình đổi phút ra giây với 7,5 phút. Kết quả đúng?', hints: ['Nhân với 60.', '7,5 × 60.'], solution: '450 giây.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chương trình máy tính là dãy lệnh mô tả thuật toán mà máy tính thực hiện được.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Scratch là:', options: ['một ngôn ngữ lập trình kéo thả khối lệnh', 'một hệ điều hành', 'một trình duyệt', 'một phần mềm bảng tính'], answer: 0, explain: 'Ngôn ngữ lập trình trực quan.' },
    { type: 'mcq', q: 'Khối lệnh dùng để nhập dữ liệu từ bàn phím trong Scratch:', options: ['nói … trong 2 giây', 'hỏi … và đợi', 'di chuyển 10 bước', 'phát âm thanh'], answer: 1, explain: 'hỏi … và đợi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Viết xong chương trình thì không cần chạy thử.', answer: false, explain: 'Cần chạy thử, kiểm tra.' },
    { type: 'short', q: 'Chương trình diện tích chạy với dài 9, rộng 6 phải cho kết quả bao nhiêu?', answer: '54', calc: '9*6', explain: '54.' },
    { type: 'short', q: 'Chương trình đổi phút ra giây chạy với 12 phút cho kết quả bao nhiêu giây?', answer: '720', unit: 'giây', calc: '12*60', explain: '720.' },
    { type: 'mcq', q: 'Trong sơ đồ khối, hình bình hành biểu diễn:', options: ['bắt đầu/kết thúc', 'nhập/xuất dữ liệu', 'điều kiện', 'xử lí'], answer: 1, explain: 'Nhập/xuất.' },
    { type: 'short', q: 'Chương trình tính chu vi hình vuông chạy với cạnh 13 cho kết quả bao nhiêu?', answer: '52', calc: '4*13', explain: '52.' }
  ]
});
})();
