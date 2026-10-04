/* Toán 7 – Bài 11. Định lí và chứng minh định lí. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, G = S.geom, C = S.C, O = [190, 170];
THCS.registerLesson('toan-7/bai-11', {
  objectives: [
    'Nhận biết định lí, giả thiết và kết luận của một định lí.',
    'Viết được giả thiết, kết luận bằng kí hiệu và vẽ hình minh hoạ.',
    'Hiểu thế nào là chứng minh định lí và trình bày được chứng minh đơn giản.'
  ],
  intro: '“Hai góc đối đỉnh thì bằng nhau” – vì sao ta tin điều đó luôn đúng? Không phải vì đo vài hình thấy bằng, mà vì có thể suy luận ra nó. Đó là chứng minh định lí.',
  steps: [
    { title: 'Định lí', html: `<p><b>Định lí</b> là một khẳng định được suy ra từ những khẳng định đúng đã biết.</p>
      <p>Định lí thường phát biểu dạng: <b>“Nếu … thì …”</b>. Phần sau “nếu” là <b>giả thiết</b> (GT – điều đã cho), phần sau “thì” là <b>kết luận</b> (KL – điều cần suy ra).</p>
      <p>Ví dụ: “Nếu hai góc đối đỉnh thì hai góc đó bằng nhau.” GT: ∠O₁ và ∠O₃ đối đỉnh; KL: ∠O₁ = ∠O₃.</p>` },
    { title: 'Viết GT – KL', html: `<p>Vẽ hình, đặt tên các điểm rồi ghi bằng kí hiệu:</p>
      <table class="tbl"><tr><th>GT</th><td>∠xOz và ∠zOy kề bù; Om là tia phân giác của ∠xOz; On là tia phân giác của ∠zOy</td></tr><tr><th>KL</th><td>∠mOn = 90°</td></tr></table>`,
      svg: S.geo({ w: 380, h: 200, P: { x: [30, 170], O: O, y: [350, 170], z: G.polar(O, 70, 140), m: G.polar(O, 125, 140), n: G.polar(O, 35, 150) }, seg: ['xy'], ray: ['Oz', { s: 'Om', color: C.green }, { s: 'On', color: C.purple }], ext: 0, arcs: [['z-O-m', 1, '', C.green, 34], ['m-O-x', 1, '', C.green, 34], ['y-O-n', 2, '', C.purple, 22], ['n-O-z', 2, '', C.purple, 22]], off: { O: [0, 22], x: [0, -12], y: [0, -12] } }),
      caption: 'Hai tia phân giác của hai góc kề bù vuông góc với nhau.' },
    { title: 'Chứng minh định lí', html: `<p><b>Chứng minh</b> định lí là dùng lập luận để từ giả thiết suy ra kết luận; mỗi bước phải có căn cứ (định nghĩa, tính chất, định lí đã biết).</p>
      <p><b>Chứng minh</b> định lí ở bước 2:</p>
      <p>Om là phân giác của ∠xOz nên ∠mOz = {{1|2}}∠xOz. On là phân giác của ∠zOy nên ∠zOn = {{1|2}}∠zOy.</p>
      <p>Tia Oz nằm giữa Om và On nên ∠mOn = ∠mOz + ∠zOn = {{1|2}}(∠xOz + ∠zOy) = {{1|2}} · 180° = 90°.</p>` },
    { title: 'Định lí và mệnh đề sai', html: `<p>Không phải khẳng định nào cũng là định lí. Để chỉ ra một khẳng định <b>sai</b>, chỉ cần một <b>phản ví dụ</b>.</p>
      <p>Ví dụ: “Hai góc bằng nhau thì đối đỉnh” là sai – hai góc 30° ở hai chỗ khác nhau bằng nhau nhưng không đối đỉnh.</p>
      <div class="box note">Đo đạc trên vài hình chỉ giúp dự đoán; muốn khẳng định đúng cho mọi trường hợp phải chứng minh.</div>` }
  ],
  summary: 'Định lí: “Nếu GT thì KL”. Vẽ hình, ghi GT – KL bằng kí hiệu; chứng minh = chuỗi suy luận có căn cứ từ GT đến KL. Một phản ví dụ đủ để bác bỏ khẳng định sai.',
  examples: [
    { title: 'Tìm GT – KL', problem: 'Viết GT, KL của định lí: “Nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó vuông góc với đường thẳng kia.”', solution: 'GT: a // b, c ⊥ a. KL: c ⊥ b.' },
    { title: 'Chứng minh định lí đối đỉnh', problem: 'Chứng minh: hai góc đối đỉnh thì bằng nhau.', solution: 'Gọi ∠O₁, ∠O₃ đối đỉnh, ∠O₂ kề bù với cả hai. Ta có ∠O₁ + ∠O₂ = 180° và ∠O₃ + ∠O₂ = 180°, suy ra ∠O₁ = ∠O₃.' },
    { title: 'Phản ví dụ', problem: 'Khẳng định “Hai góc bù nhau thì kề bù” đúng hay sai?', solution: 'Sai. Ví dụ hai góc 100° và 80° vẽ ở hai nơi khác nhau: chúng bù nhau nhưng không chung đỉnh nên không kề bù.' }
  ],
  exercises: [
    { question: 'Viết GT, KL: “Nếu hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau.”', hints: ['Đặt tên: a, b và c.', 'GT gồm hai quan hệ vuông góc.'], solution: 'GT: a ⊥ c, b ⊥ c (a, b phân biệt). KL: a // b.' },
    { question: 'Tìm phản ví dụ cho khẳng định: “Nếu a // b và b cắt c thì a // c.”', hints: ['Vẽ c cắt b.', 'Thử xem c có cắt a không.'], solution: 'Lấy a // b và c là một cát tuyến cắt cả a và b: khi đó c cắt a, không song song. Khẳng định sai.' },
    { question: 'Cho ∠xOy = 120°. Ot là tia phân giác của ∠xOy, Om là tia phân giác của ∠xOt. Tính ∠mOy.', hints: ['∠xOt = 60°, ∠xOm = 30°.', '∠mOy = ∠xOy − ∠xOm.'], solution: '∠mOy = 120° − 30° = 90°.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Trong định lí “Nếu a // b và c ⊥ a thì c ⊥ b”, giả thiết là:', options: ['c ⊥ b', 'a // b và c ⊥ a', 'a // b và c ⊥ b', 'c ⊥ a và c ⊥ b'], answer: 1, explain: 'Giả thiết là phần sau chữ “nếu”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ cần đo vài hình thấy đúng là đã chứng minh được định lí.', answer: false, explain: 'Đo đạc chỉ giúp dự đoán; chứng minh phải dùng suy luận.' },
    { type: 'short', calc: '180 / 2', q: 'Góc tạo bởi hai tia phân giác của hai góc kề bù bằng bao nhiêu độ?', unit: 'độ', answer: '90', explain: '{{1|2}} · 180° = 90°.' },
    { type: 'mcq', q: 'Để chứng tỏ một khẳng định là sai, ta cần:', options: ['một ví dụ đúng', 'một phản ví dụ', 'đo nhiều hình', 'vẽ hình thật đẹp'], answer: 1, explain: 'Một phản ví dụ là đủ để bác bỏ.' },
    { type: 'short', calc: '120 - 120 / 4', q: '∠xOy = 120°, Ot là phân giác của ∠xOy, Om là phân giác của ∠xOt. Tính ∠mOy (độ).', unit: 'độ', answer: '90', explain: '∠xOm = 30°; 120° − 30° = 90°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Hai góc bằng nhau thì đối đỉnh” là một định lí.', answer: false, explain: 'Khẳng định này sai, không phải định lí.' },
    { type: 'mcq', q: 'Kết luận của định lí “Hai góc đối đỉnh thì bằng nhau” là:', options: ['hai góc đối đỉnh', 'hai góc bằng nhau', 'hai góc kề bù', 'hai góc bù nhau'], answer: 1, explain: 'Phần sau “thì”: hai góc đó bằng nhau.' },
    { type: 'short', calc: '(180 - 40) / 2 + 40 / 2', q: '∠xOz = 140°, ∠zOy = 40° kề bù. Om, On lần lượt là phân giác của ∠xOz, ∠zOy. Tính ∠mOn (độ).', unit: 'độ', answer: '90', explain: '70° + 20° = 90°.' }
  ]
});
})();
