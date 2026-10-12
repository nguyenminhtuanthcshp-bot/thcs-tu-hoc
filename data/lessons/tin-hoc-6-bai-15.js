/* Tin học 6 – Bài 15. Thuật toán. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-15', {
  objectives: [
    'Nêu được khái niệm thuật toán; chỉ ra được đầu vào (input) và đầu ra (output) của thuật toán.',
    'Mô tả được thuật toán đơn giản bằng ngôn ngữ tự nhiên (liệt kê các bước).',
    'Mô tả được thuật toán đơn giản bằng sơ đồ khối.'
  ],
  intro: 'Công thức nấu một món ăn gồm nguyên liệu, các bước làm theo thứ tự và món ăn hoàn thành. Máy tính cũng cần những “công thức” rõ ràng như vậy để giải quyết công việc – đó chính là <b>thuật toán</b>.',
  steps: [
    { title: 'Thuật toán là gì?', html: `<p><b>Thuật toán</b> là một dãy các chỉ dẫn rõ ràng, có trình tự sao cho khi thực hiện những chỉ dẫn này người ta giải quyết được vấn đề hoặc nhiệm vụ đã cho.</p>
      <p>Mỗi thuật toán có <b>đầu vào</b> (input: dữ liệu ban đầu) và <b>đầu ra</b> (output: kết quả).</p>`,
      svg: S.ipo({ title: 'Đầu vào – thuật toán – đầu ra', input: 'Hai số a, b', process: 'Tính a + b', output: 'Tổng của a và b', storage: false }), caption: 'Thuật toán biến đổi đầu vào thành đầu ra.' },
    { title: 'Mô tả thuật toán bằng ngôn ngữ tự nhiên', html: `<p>Liệt kê các bước bằng lời. Ví dụ thuật toán pha nước chanh:</p>
      <ol><li>Rót nước vào cốc.</li><li>Vắt chanh vào cốc.</li><li>Cho đường vào.</li><li>Khuấy đều; nếm thử, nếu chưa đủ ngọt thì thêm đường.</li></ol>
      <p>Input: nước, chanh, đường. Output: cốc nước chanh.</p>` },
    { title: 'Mô tả thuật toán bằng sơ đồ khối', html: `<p>Sơ đồ khối dùng các hình quy ước:</p>
      <ul><li>Hình chữ nhật bo tròn (hình ô van): <b>bắt đầu / kết thúc</b>;</li><li>Hình bình hành: <b>nhập / xuất</b> dữ liệu;</li><li>Hình chữ nhật: <b>xử lí</b>;</li><li>Hình thoi: <b>điều kiện</b> (rẽ nhánh);</li><li>Mũi tên: thứ tự thực hiện.</li></ul>`,
      svg: S.flowchart({ title: 'Sơ đồ khối: tính diện tích hình chữ nhật', steps: [{ t: 'start', s: 'Bắt đầu' }, { t: 'io', s: 'Nhập chiều dài a, chiều rộng b' }, { t: 'proc', s: 'S ← a × b' }, { t: 'io', s: 'Ghi ra S' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Sơ đồ khối của thuật toán tính diện tích hình chữ nhật.' },
    { title: 'Đặc điểm của thuật toán tốt', html: `<p>Các bước phải <b>rõ ràng</b> (không gây hiểu nhầm), <b>có thứ tự</b>, và <b>kết thúc</b> sau một số bước, cho ra kết quả đúng.</p>
      <div class="box key">Thuật toán = dãy chỉ dẫn rõ ràng, có trình tự; có đầu vào và đầu ra.</div>` }
  ],
  summary: 'Thuật toán là dãy chỉ dẫn rõ ràng, có trình tự để giải quyết một nhiệm vụ; có đầu vào và đầu ra. Có thể mô tả thuật toán bằng ngôn ngữ tự nhiên (liệt kê bước) hoặc sơ đồ khối (ô van: bắt đầu/kết thúc; bình hành: nhập/xuất; chữ nhật: xử lí; hình thoi: điều kiện; mũi tên: thứ tự).',
  examples: [
    { title: 'Xác định input, output', problem: 'Thuật toán tính chu vi hình vuông khi biết cạnh. Input và output là gì?', solution: 'Input: độ dài cạnh a. Output: chu vi P = 4 × a.' },
    { title: 'Thực hiện thuật toán', problem: 'Thực hiện thuật toán diện tích hình chữ nhật (bước 3) với a = 8, b = 5. Kết quả là gì?', solution: 'S = 8 × 5 = 40.' },
    { title: 'Sắp xếp các bước', problem: 'Sắp xếp các bước gửi thư điện tử: (1) nhấn Gửi; (2) đăng nhập; (3) soạn nội dung; (4) nhập địa chỉ người nhận.', solution: 'Thứ tự đúng: (2) → (4) → (3) → (1).' }
  ],
  exercises: [
    { question: 'Viết thuật toán (liệt kê bước) để đánh răng buổi sáng.', hints: ['Bắt đầu từ việc chuẩn bị bàn chải, kem.', 'Kết thúc bằng việc súc miệng, cất dụng cụ.'], solution: 'Ví dụ: 1) lấy bàn chải, kem; 2) bóp kem lên bàn chải; 3) chải răng khoảng 2 phút; 4) súc miệng; 5) rửa sạch, cất bàn chải.' },
    { question: 'Vẽ (mô tả) sơ đồ khối của thuật toán tính chu vi hình vuông.', hints: ['Dùng các khối: bắt đầu, nhập, xử lí, xuất, kết thúc.', 'Khối xử lí: P ← 4 × a.'], solution: 'Bắt đầu → Nhập a → P ← 4 × a → Ghi ra P → Kết thúc.' },
    { question: 'Thực hiện thuật toán: “Nhập x; y ← 2 × x + 3; ghi ra y” với x = 7. Kết quả là bao nhiêu?', hints: ['Thay x = 7 vào biểu thức.', '2 × 7 + 3.'], solution: 'y = 2 × 7 + 3 = 17.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thuật toán là một dãy các chỉ dẫn rõ ràng, có trình tự để giải quyết một nhiệm vụ.', answer: true, explain: 'Đúng khái niệm thuật toán.' },
    { type: 'mcq', q: 'Trong sơ đồ khối, hình thoi biểu diễn:', options: ['bắt đầu', 'điều kiện', 'nhập dữ liệu', 'xử lí'], answer: 1, explain: 'Hình thoi: điều kiện.' },
    { type: 'mcq', q: 'Hình bình hành trong sơ đồ khối dùng để:', options: ['nhập/xuất dữ liệu', 'kết thúc', 'kiểm tra điều kiện', 'nối các khối'], answer: 0, explain: 'Bình hành: nhập/xuất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một thuật toán có thể thực hiện mãi mãi không bao giờ kết thúc.', answer: false, explain: 'Thuật toán phải kết thúc sau hữu hạn bước.' },
    { type: 'short', q: 'Thuật toán tính chu vi hình vuông P = 4 × a. Với a = 9, P bằng bao nhiêu?', answer: '36', calc: '4*9', explain: '4 × 9 = 36.' },
    { type: 'short', q: 'Thực hiện: y ← 3 × x − 4 với x = 6. y bằng bao nhiêu?', answer: '14', calc: '3*6-4', explain: '18 − 4 = 14.' },
    { type: 'mcq', q: 'Output của thuật toán tính diện tích hình chữ nhật là:', options: ['chiều dài', 'chiều rộng', 'diện tích', 'bút và thước'], answer: 2, explain: 'Kết quả là diện tích.' },
    { type: 'mcq', q: 'Cách mô tả thuật toán nào dùng các hình và mũi tên?', options: ['Ngôn ngữ tự nhiên', 'Sơ đồ khối', 'Bảng tính', 'Thư điện tử'], answer: 1, explain: 'Sơ đồ khối.' }
  ]
});
})();
