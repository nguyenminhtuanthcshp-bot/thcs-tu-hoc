/* Toán 6 – Bài 4. Phép cộng và phép trừ số tự nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-4', {
  objectives: [
    'Thực hiện được phép cộng, phép trừ số tự nhiên.',
    'Vận dụng tính chất giao hoán, kết hợp của phép cộng để tính nhẩm, tính nhanh.',
    'Hiểu điều kiện để thực hiện được phép trừ trong tập hợp số tự nhiên.',
    'Tìm được số chưa biết trong một tổng hoặc một hiệu.'
  ],
  intro: 'Mua đồ dùng học tập, tính quãng đường đi học, đếm số bạn còn lại trong lớp… đều cần cộng và trừ. Bài này giúp em cộng, trừ nhanh và chính xác hơn nhờ các tính chất.',
  steps: [
    { title: 'Phép cộng', html: `<p>Trong phép cộng <span class="math">a + b = c</span>: a và b là các <b>số hạng</b>, c là <b>tổng</b>.</p>
      <p>Trên tia số, cộng thêm b nghĩa là từ điểm a đi tiếp b đơn vị sang phải. Hình dưới minh hoạ 3 + 4 = 7.</p>`,
      svg: S.numberLine({ min: 0, max: 9, ray: true, jumps: [{ from: 0, to: 3, label: '+3' }, { from: 3, to: 7, label: '+4' }], marks: [{ v: 7, label: '7', color: S.C.green }] }),
      caption: 'Đi 3 bước rồi đi tiếp 4 bước: dừng ở 7.' },
    { title: 'Tính chất của phép cộng', html: `<ul><li><b>Giao hoán:</b> a + b = b + a.</li>
      <li><b>Kết hợp:</b> (a + b) + c = a + (b + c).</li>
      <li><b>Cộng với 0:</b> a + 0 = 0 + a = a.</li></ul>
      <p>Mẹo tính nhanh: nhóm các số có tổng tròn chục, tròn trăm. Ví dụ 37 + 48 + 63 = (37 + 63) + 48 = 100 + 48 = 148.</p>` },
    { title: 'Phép trừ', html: `<p>Nếu có số tự nhiên c sao cho <span class="math">b + c = a</span> thì ta viết <span class="math">a − b = c</span>: a là <b>số bị trừ</b>, b là <b>số trừ</b>, c là <b>hiệu</b>.</p>
      <p>Trong tập hợp số tự nhiên, phép trừ a − b chỉ thực hiện được khi <b>a ≥ b</b>. Ví dụ 5 − 8 không có kết quả là số tự nhiên.</p>` },
    { title: 'Tìm số chưa biết', html: `<ul><li>Số hạng chưa biết = Tổng − số hạng đã biết: x + 25 = 60 ⇒ x = 60 − 25 = 35.</li>
      <li>Số bị trừ = Hiệu + số trừ: x − 17 = 30 ⇒ x = 30 + 17 = 47.</li>
      <li>Số trừ = Số bị trừ − hiệu: 90 − x = 54 ⇒ x = 90 − 54 = 36.</li></ul>
      <p>Luôn thử lại bằng cách thay x vào đề bài.</p>` },
    { title: 'Tính nhẩm với phép trừ', html: `<p>Khi thêm (hoặc bớt) cùng một số vào cả số bị trừ và số trừ, hiệu không đổi:</p>
      <p class="math">325 − 98 = (325 + 2) − (98 + 2) = 327 − 100 = 227</p>
      <p>Cách khác: 325 − 98 = 325 − 100 + 2 = 227 (trừ bớt 100 thì phải cộng trả lại 2).</p>` }
  ],
  summary: 'Phép cộng có tính chất giao hoán, kết hợp, cộng với 0. Phép trừ a − b thực hiện được trong ℕ khi a ≥ b. Tìm số hạng: lấy tổng trừ số hạng kia; tìm số bị trừ: lấy hiệu cộng số trừ; tìm số trừ: lấy số bị trừ trừ hiệu.',
  examples: [
    { title: 'Tính nhanh', problem: 'Tính nhanh: 135 + 360 + 65 + 40.', solution: '= (135 + 65) + (360 + 40) = 200 + 400 = <b>600</b>.' },
    { title: 'Tìm x', problem: 'Tìm số tự nhiên x biết (x − 15) + 27 = 80.', solution: 'x − 15 = 80 − 27 = 53, suy ra x = 53 + 15 = <b>68</b>. Thử lại: (68 − 15) + 27 = 53 + 27 = 80 ✔.' },
    { title: 'Bài toán thực tế', problem: 'Bạn Nam có 150 000 đồng. Nam mua một quyển sách giá 68 000 đồng và một hộp bút giá 45 000 đồng. Nam còn lại bao nhiêu tiền?', solution: 'Số tiền đã tiêu: 68 000 + 45 000 = 113 000 (đồng).<br>Số tiền còn lại: 150 000 − 113 000 = <b>37 000 đồng</b>.' }
  ],
  exercises: [
    { question: 'Tính nhanh: 46 + 17 + 54 + 83.', hints: ['Tìm các cặp số có chữ số hàng đơn vị cộng lại bằng 10.', '46 + 54 = 100 và 17 + 83 = 100.'], solution: '(46 + 54) + (17 + 83) = 100 + 100 = <b>200</b>.' },
    { question: 'Tìm x ∈ ℕ biết 124 − x = 59.', hints: ['x là số trừ.', 'Số trừ = số bị trừ − hiệu.'], solution: 'x = 124 − 59 = <b>65</b>.' },
    { question: 'Một cửa hàng buổi sáng bán được 235 kg gạo, buổi chiều bán ít hơn buổi sáng 48 kg. Cả ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?', hints: ['Trước hết tính số gạo bán buổi chiều: 235 − 48.', 'Sau đó cộng số gạo hai buổi.'], solution: 'Buổi chiều: 235 − 48 = 187 (kg). Cả ngày: 235 + 187 = <b>422 kg</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính nhanh: 28 + 64 + 72.', answer: '164', calc: '28+64+72', explain: '(28 + 72) + 64 = 100 + 64 = 164.' },
    { type: 'mcq', q: 'Tính chất nào được dùng trong đẳng thức 15 + 9 = 9 + 15?', options: ['Kết hợp', 'Giao hoán', 'Cộng với 0', 'Phân phối'], answer: 1, explain: 'Đổi chỗ các số hạng, tổng không đổi: tính chất giao hoán.' },
    { type: 'short', q: 'Tìm x biết x + 38 = 105.', answer: '67', calc: '105-38', explain: 'x = 105 − 38 = 67.' },
    { type: 'short', q: 'Tìm x biết x − 26 = 74.', answer: '100', calc: '74+26', explain: 'Số bị trừ = hiệu + số trừ = 74 + 26 = 100.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phép trừ 12 − 20 thực hiện được trong tập hợp số tự nhiên.', answer: false, explain: 'Cần số bị trừ ≥ số trừ; 12 &lt; 20 nên không thực hiện được trong ℕ.' },
    { type: 'mcq', q: 'Kết quả của 1 000 − 199 là:', options: ['801', '811', '899', '791'], answer: 0, calc: '1000-199', explain: '1 000 − 199 = 1 000 − 200 + 1 = 801.' },
    { type: 'short', q: 'Tìm x biết 250 − x = 175.', answer: '75', calc: '250-175', explain: 'Số trừ = 250 − 175 = 75.' },
    { type: 'mcq', q: 'Lớp 6A có 22 bạn nữ, số bạn nam nhiều hơn số bạn nữ 3 bạn. Lớp 6A có bao nhiêu học sinh?', options: ['25', '41', '47', '44'], answer: 2, calc: '22+(22+3)', explain: 'Số bạn nam: 22 + 3 = 25. Cả lớp: 22 + 25 = 47 bạn.' }
  ]
});
})();
