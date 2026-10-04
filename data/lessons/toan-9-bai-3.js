/* Toán 9 – Bài 3. Giải bài toán bằng cách lập hệ phương trình. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-9/bai-3', {
  objectives: [
    'Nắm được các bước giải bài toán bằng cách lập hệ phương trình.',
    'Chọn ẩn, đặt điều kiện cho ẩn và lập được hệ phương trình từ dữ kiện bài toán.',
    'Giải được một số bài toán thực tế (mua bán, tìm số, chuyển động, năng suất…) bằng cách lập hệ.'
  ],
  intro: 'Bài toán “Vừa gà vừa chó, bó lại cho tròn, ba mươi sáu con, một trăm chân chẵn” đã có từ rất lâu. Hôm nay em sẽ giải nó thật gọn gàng bằng <b>hệ phương trình</b>.',
  steps: [
    { title: 'Ba bước giải', html: `<ol><li><b>Lập hệ phương trình:</b> chọn hai ẩn, đặt đơn vị và điều kiện cho ẩn; biểu diễn các đại lượng chưa biết theo ẩn; lập hai phương trình từ hai dữ kiện.</li>
      <li><b>Giải hệ phương trình</b> vừa lập.</li><li><b>Trả lời:</b> kiểm tra nghiệm có thoả mãn điều kiện không, rồi kết luận.</li></ol>` },
    { title: 'Chọn ẩn và điều kiện', html: `<p>Thường chọn ẩn là chính các đại lượng bài toán hỏi.</p>
      <ul><li>Số con vật, số người, số sản phẩm: số tự nhiên (thường khác 0).</li><li>Giá tiền, vận tốc, thời gian, độ dài: số dương.</li><li>Chữ số: số tự nhiên từ 0 đến 9 (chữ số hàng chục khác 0).</li></ul>` },
    { title: 'Ví dụ: gà và chó', html: `<p>36 con vừa gà vừa chó, tổng cộng 100 chân. Gọi x là số gà, y là số chó (x, y ∈ ℕ).</p>
      <p><span class="sys"><span>x + y = 36</span><span>2x + 4y = 100</span></span></p>
      <p>Nhân phương trình thứ nhất với 2: 2x + 2y = 72. Trừ từng vế: 2y = 28 ⇒ y = 14 ⇒ x = 22.</p>
      <p>Kiểm tra: 22 + 14 = 36 con; 44 + 56 = 100 chân ✔. Vậy có <b>22 con gà và 14 con chó</b>.</p>` },
    { title: 'Ví dụ: số có hai chữ số', html: `<p>Số có dạng <span class="ol">ab</span> = 10a + b (a là chữ số hàng chục, b là chữ số hàng đơn vị). Đổi chỗ hai chữ số được <span class="ol">ba</span> = 10b + a.</p>
      <p>Bài toán: tổng hai chữ số là 9; đổi chỗ hai chữ số thì được số mới nhỏ hơn số ban đầu 27.</p>
      <p><span class="sys"><span>a + b = 9</span><span>(10a + b) − (10b + a) = 27</span></span> ⇔ <span class="sys"><span>a + b = 9</span><span>a − b = 3</span></span> ⇒ a = 6, b = 3. Số cần tìm là <b>63</b>.</p>` }
  ],
  summary: 'Chọn ẩn + điều kiện → lập hai phương trình từ hai dữ kiện → giải hệ → đối chiếu điều kiện rồi trả lời.',
  examples: [
    { title: 'Bài toán mua hàng', problem: 'Mua 3 quyển vở và 2 cây bút hết 36 000 đồng; mua 2 quyển vở và 3 cây bút hết 34 000 đồng. Tính giá mỗi quyển vở và mỗi cây bút.', solution: 'Gọi giá một quyển vở là x, một cây bút là y (đồng; x, y &gt; 0).<br><span class="sys"><span>3x + 2y = 36 000</span><span>2x + 3y = 34 000</span></span><br>Cộng từng vế: 5x + 5y = 70 000 ⇒ x + y = 14 000.<br>Trừ từng vế: x − y = 2 000.<br>Suy ra x = 8 000, y = 6 000.<br>Vậy một quyển vở giá <b>8 000 đồng</b>, một cây bút giá <b>6 000 đồng</b>.' },
    { title: 'Bài toán tìm hai số', problem: 'Tìm hai số biết tổng của chúng là 50 và số lớn hơn số bé 12.', solution: 'Gọi số lớn là x, số bé là y.<br><span class="sys"><span>x + y = 50</span><span>x − y = 12</span></span> ⇒ 2x = 62 ⇒ x = 31, y = 19.<br>Vậy hai số là 31 và 19.' },
    { title: 'Bài toán năng suất', problem: 'Hai tổ sản xuất được 90 sản phẩm. Tổ I làm được gấp đôi tổ II. Mỗi tổ làm được bao nhiêu sản phẩm?', solution: 'Gọi x, y lần lượt là số sản phẩm của tổ I, tổ II (x, y ∈ ℕ*).<br><span class="sys"><span>x + y = 90</span><span>x = 2y</span></span> ⇒ 3y = 90 ⇒ y = 30, x = 60.<br>Vậy tổ I làm 60 sản phẩm, tổ II làm 30 sản phẩm.' }
  ],
  exercises: [
    { question: 'Một lớp có 40 học sinh. Số học sinh nữ nhiều hơn số học sinh nam 4 bạn. Tính số học sinh nam và nữ.', hints: ['Gọi số nam là x, số nữ là y: x + y = 40.', 'Nữ nhiều hơn nam 4 bạn: y − x = 4.'], solution: 'Cộng từng vế: 2y = 44 ⇒ y = 22, x = 18. Lớp có 18 bạn nam và 22 bạn nữ.' },
    { question: 'Vé vào khu vui chơi: người lớn 50 000 đồng, trẻ em 30 000 đồng. Một đoàn 10 người trả tổng cộng 380 000 đồng. Có bao nhiêu người lớn, bao nhiêu trẻ em?', hints: ['Gọi x là số người lớn, y là số trẻ em: x + y = 10.', 'Số tiền: 50 000x + 30 000y = 380 000, chia hai vế cho 10 000: 5x + 3y = 38.'], solution: 'Từ x + y = 10 ⇒ 3x + 3y = 30. Trừ: 2x = 8 ⇒ x = 4, y = 6. Có 4 người lớn và 6 trẻ em.' },
    { question: 'Tìm số tự nhiên có hai chữ số, biết chữ số hàng chục lớn hơn chữ số hàng đơn vị là 2 và tổng hai chữ số bằng 10.', hints: ['Gọi chữ số hàng chục là a, hàng đơn vị là b: a − b = 2; a + b = 10.', 'Cộng từng vế: 2a = 12.'], solution: 'a = 6, b = 4. Số cần tìm là 64.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bước đầu tiên khi giải bài toán bằng cách lập hệ phương trình là:', options: ['Giải hệ phương trình', 'Chọn ẩn và đặt điều kiện cho ẩn', 'Trả lời bài toán', 'Vẽ đồ thị'], answer: 1, explain: 'Bước 1 (lập hệ) bắt đầu bằng việc chọn ẩn và đặt điều kiện cho ẩn.' },
    { type: 'short', calc: '(30 + 8) / 2', q: 'Tổng hai số là 30, hiệu của chúng (số lớn trừ số bé) là 8. Số lớn là bao nhiêu?', answer: '19', explain: '2x = 38 ⇒ x = 19 (số bé là 11).' },
    { type: 'mcq', q: 'Một số có hai chữ số, chữ số hàng chục là a, chữ số hàng đơn vị là b. Số đó được viết là:', options: ['a + b', '10a + b', '10b + a', 'ab (tích a · b)'], answer: 1, explain: '<span class="ol">ab</span> = 10a + b.' },
    { type: 'short', calc: '(56 - 2 * 20) / 2', q: 'Có 20 con vừa gà vừa thỏ, tổng số chân là 56. Có bao nhiêu con thỏ?', answer: '8', explain: 'x + y = 20; 2x + 4y = 56 ⇒ 2y = 16 ⇒ y = 8 thỏ (12 gà).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu ẩn x là số học sinh mà giải ra x = 12,5 thì vẫn nhận kết quả này.', answer: false, explain: 'Số học sinh phải là số tự nhiên; x = 12,5 không thoả mãn điều kiện, cần kiểm tra lại đề hoặc cách lập.' },
    { type: 'short', calc: '110 - 70', q: '2 kg táo và 1 kg cam giá 110 nghìn đồng; 1 kg táo và 1 kg cam giá 70 nghìn đồng. Giá 1 kg táo là bao nhiêu nghìn đồng?', answer: '40', unit: 'nghìn đồng', explain: 'Trừ từng vế: x = 110 − 70 = 40 (nghìn đồng); cam 30 nghìn đồng.' },
    { type: 'mcq', q: 'Hai tổ trồng được 100 cây, tổ I trồng nhiều hơn tổ II 20 cây. Hệ phương trình đúng (x: tổ I, y: tổ II) là:', options: ['x + y = 100; x − y = 20', 'x + y = 20; x − y = 100', 'x − y = 100; x + y = 20', 'x + y = 100; y − x = 20'], answer: 0, explain: 'Tổng 100 cây và tổ I hơn tổ II 20 cây: x + y = 100; x − y = 20.' },
    { type: 'short', calc: '10 * (11 - 3) / 2 + (11 + 3) / 2', q: 'Tìm số có hai chữ số biết tổng hai chữ số là 11 và chữ số hàng đơn vị hơn chữ số hàng chục 3.', answer: '47', explain: 'a + b = 11; b − a = 3 ⇒ b = 7, a = 4. Số cần tìm là 47.' }
  ]
});
