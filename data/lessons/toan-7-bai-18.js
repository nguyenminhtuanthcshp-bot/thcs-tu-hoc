/* Toán 7 – Bài 18. Biểu đồ hình quạt tròn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-18', {
  objectives: [
    'Đọc và mô tả được dữ liệu biểu diễn trên biểu đồ hình quạt tròn.',
    'Tính được tỉ lệ phần trăm, số lượng từ biểu đồ hình quạt; hoàn thiện biểu đồ khi biết dữ liệu.',
    'Phát hiện vấn đề, rút ra nhận xét từ biểu đồ hình quạt tròn.'
  ],
  intro: 'Muốn thấy ngay “phần nào chiếm nhiều nhất trong tổng thể”, người ta dùng biểu đồ hình quạt tròn – giống như chia một chiếc bánh pizza.',
  steps: [
    { title: 'Biểu đồ hình quạt tròn là gì?', html: `<p>Hình tròn biểu diễn <b>toàn bộ</b> (100%); mỗi hình quạt biểu diễn <b>một phần</b>, tỉ lệ phần trăm ghi trên hình quạt. Tổng các tỉ lệ phần trăm bằng 100%.</p>`,
      svg: S.sectorChart({ title: 'Phương tiện đến trường của học sinh lớp 7B', parts: [{ label: 'Xe đạp', value: 40 }, { label: 'Đi bộ', value: 25 }, { label: 'Xe buýt', value: 20 }, { label: 'Bố mẹ đưa', value: 15 }], unit: '%' }),
      caption: 'Hình quạt lớn nhất ứng với xe đạp (40%).' },
    { title: 'Đọc biểu đồ', html: `<ol><li>Đọc tiêu đề: biểu đồ nói về điều gì, đối tượng nào.</li><li>Đọc chú giải: mỗi màu ứng với thành phần nào.</li><li>Đọc tỉ lệ phần trăm từng phần, so sánh các phần.</li></ol>
      <p>Nếu biết tổng số N, số lượng của một phần chiếm p% là <span class="math">N · {{p|100}}</span>.</p>` },
    { title: 'Từ tỉ lệ đến số lượng', html: `<p>Lớp 7B có 40 học sinh. Số bạn đi xe đạp: 40 · 40% = 16; đi bộ: 40 · 25% = 10; xe buýt: 40 · 20% = 8; bố mẹ đưa: 40 · 15% = 6.</p>
      <p>Kiểm tra: 16 + 10 + 8 + 6 = 40 ✓.</p>` },
    { title: 'Từ số lượng đến tỉ lệ', html: `<p>Tỉ lệ phần trăm của một phần có a đối tượng trong tổng N: <span class="math">{{a|N}} · 100%</span>.</p>
      <p>Hình quạt chiếm p% thì có góc ở tâm bằng <span class="math">360° · {{p|100}}</span>. Ví dụ 25% ứng với góc 90° – một phần tư hình tròn.</p>` }
  ],
  summary: 'Biểu đồ hình quạt: cả hình tròn = 100%, mỗi hình quạt là một phần. Số lượng = tổng × p%; tỉ lệ = số lượng : tổng × 100%. Tổng các phần bằng 100%.',
  examples: [
    { title: 'Đọc số lượng', problem: 'Trường có 800 học sinh; biểu đồ cho thấy 35% thích bóng đá. Có bao nhiêu học sinh thích bóng đá?', solution: '800 · 35% = 280 (học sinh).' },
    { title: 'Tìm phần còn thiếu', problem: 'Biểu đồ có 4 phần: 30%, 25%, 20% và phần còn lại. Tính phần còn lại.', solution: '100% − 30% − 25% − 20% = 25%.' },
    { title: 'Lập tỉ lệ', problem: 'Khảo sát 50 bạn: 20 bạn thích Toán, 15 bạn thích Văn, 10 bạn thích Anh, 5 bạn thích môn khác. Tính tỉ lệ phần trăm từng nhóm.', solution: 'Toán 40%, Văn 30%, Anh 20%, khác 10%.' }
  ],
  exercises: [
    { question: 'Theo biểu đồ ở bước 1, lớp 7B có 40 bạn. Số bạn đi xe buýt nhiều hơn số bạn được bố mẹ đưa bao nhiêu bạn?', hints: ['Xe buýt 20%, bố mẹ đưa 15%.', 'Hiệu 5% của 40.'], solution: '40 · 5% = 2 (bạn).' },
    { question: 'Chi tiêu một tháng của gia đình: ăn uống 45%, học tập 20%, điện nước 10%, còn lại tiết kiệm. Nếu tổng thu nhập 20 triệu đồng, gia đình tiết kiệm bao nhiêu?', hints: ['Tiết kiệm = 100% − 45% − 20% − 10%.', 'Nhân với 20 triệu.'], solution: 'Tiết kiệm 25% ⇒ 5 triệu đồng.' },
    { question: 'Tính góc ở tâm của hình quạt chiếm 15%.', hints: ['Cả hình tròn 360°.', '360° · 15%.'], solution: '54°.' }
  ],
  quiz: [
    { type: 'short', calc: '800 * 35 / 100', q: 'Trường có 800 học sinh, 35% thích bóng đá. Có bao nhiêu học sinh thích bóng đá?', answer: '280', explain: '800 · 0,35 = 280.' },
    { type: 'short', calc: '100 - 30 - 25 - 20', q: 'Biểu đồ có các phần 30%, 25%, 20% và một phần còn lại. Phần còn lại chiếm bao nhiêu phần trăm?', unit: '%', answer: '25', explain: '100% − 75% = 25%.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tổng tỉ lệ các hình quạt trong một biểu đồ hình quạt tròn bằng 100%.', answer: true, explain: 'Cả hình tròn biểu diễn toàn bộ.' },
    { type: 'short', calc: '40 * 40 / 100', q: 'Lớp 7B có 40 bạn, 40% đi xe đạp. Có bao nhiêu bạn đi xe đạp?', answer: '16', explain: '40 · 0,4 = 16.' },
    { type: 'short', calc: '20 / 50 * 100', q: 'Khảo sát 50 bạn, 20 bạn thích Toán. Tỉ lệ bạn thích Toán là bao nhiêu phần trăm?', unit: '%', answer: '40', explain: '20 : 50 = 40%.' },
    { type: 'short', calc: '360 * 15 / 100', q: 'Góc ở tâm của hình quạt chiếm 15% bằng bao nhiêu độ?', unit: 'độ', answer: '54', explain: '360° · 0,15 = 54°.' },
    { type: 'mcq', q: 'Biểu đồ hình quạt tròn thích hợp nhất để:', options: ['biểu diễn sự thay đổi theo thời gian', 'so sánh các phần với tổng thể', 'biểu diễn một số duy nhất', 'vẽ đồ thị hàm số'], answer: 1, explain: 'Mỗi hình quạt là một phần của toàn bộ.' },
    { type: 'short', calc: '20 * (100 - 45 - 20 - 10) / 100', q: 'Thu nhập 20 triệu: ăn uống 45%, học tập 20%, điện nước 10%, còn lại tiết kiệm. Tiết kiệm bao nhiêu triệu đồng?', unit: 'triệu đồng', answer: '5', explain: '25% của 20 triệu = 5 triệu.' }
  ]
});
})();
