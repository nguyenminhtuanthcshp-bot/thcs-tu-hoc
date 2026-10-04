/* KHTN 9 – Bài 6. Phản xạ toàn phần. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-6', {
  objectives: [
    'Mô tả được hiện tượng phản xạ toàn phần và nêu được điều kiện xảy ra phản xạ toàn phần.',
    'Tính được góc tới hạn theo công thức sin i<sub>th</sub> = n<sub>2</sub> / n<sub>1</sub>.',
    'Nêu được một số ứng dụng của phản xạ toàn phần, đặc biệt là sợi quang.'
  ],
  intro: 'Internet tốc độ cao truyền tín hiệu qua những sợi thuỷ tinh mảnh như sợi tóc, dài hàng nghìn kilômét dưới đáy biển. Ánh sáng không “thoát” ra ngoài sợi nhờ một hiện tượng đặc biệt: <b>phản xạ toàn phần</b>.',
  steps: [
    { title: 'Thí nghiệm: tăng dần góc tới', html: `<p>Chiếu tia sáng từ nước ra không khí và tăng dần góc tới i:</p>
      <ul><li>i nhỏ: có tia khúc xạ ra không khí (r > i) và một tia phản xạ yếu.</li><li>i tăng: r tăng nhanh hơn; đến khi r = 90° thì i đạt <b>góc tới hạn i<sub>th</sub></b>.</li><li>i > i<sub>th</sub>: không còn tia khúc xạ, toàn bộ ánh sáng bị <b>phản xạ</b> trở lại nước.</li></ul>`,
      svg: S.refraction({ i: 35, n1: 1.33, n2: 1, top: 'Nước', bottom: 'Không khí', reflect: true, values: true }), caption: 'i = 35° nhỏ hơn góc tới hạn (≈ 48,8°): có tia khúc xạ và tia phản xạ yếu.' },
    { title: 'Điều kiện phản xạ toàn phần', html: `<div class="box key"><ol><li>Ánh sáng truyền từ môi trường <b>chiết quang hơn</b> sang môi trường <b>chiết quang kém</b> (n<sub>1</sub> > n<sub>2</sub>).</li><li>Góc tới <b>lớn hơn hoặc bằng</b> góc tới hạn: i ≥ i<sub>th</sub>.</li></ol></div>
      <p>Góc tới hạn: <span class="math">sin i<sub>th</sub> = n<sub>2</sub> / n<sub>1</sub></span></p>
      <p>Ví dụ: thuỷ tinh (1,5) → không khí (1): sin i<sub>th</sub> = 1/1,5 ≈ 0,67 ⇒ i<sub>th</sub> ≈ 41,8°.</p>
      <p>Ánh sáng đi từ không khí vào nước thì <b>không bao giờ</b> xảy ra phản xạ toàn phần.</p>`,
      svg: S.refraction({ i: 60, n1: 1.33, n2: 1, top: 'Nước', bottom: 'Không khí', reflect: true, values: true }), caption: 'i = 60° lớn hơn góc tới hạn: không còn tia khúc xạ, ánh sáng phản xạ toàn phần.' },
    { title: 'Sợi quang (cáp quang)', html: `<p>Sợi quang gồm <b>lõi</b> thuỷ tinh (hoặc nhựa) chiết suất lớn, bọc bởi <b>vỏ</b> có chiết suất nhỏ hơn. Ánh sáng đi vào lõi gặp mặt phân cách lõi – vỏ với góc tới lớn hơn góc tới hạn nên phản xạ toàn phần liên tiếp và truyền theo sợi, kể cả khi sợi bị uốn cong.</p>
      <p>Ứng dụng: truyền dữ liệu Internet, điện thoại; ống nội soi trong y học.</p>`,
      svg: S.opticalFiber(), caption: 'Ánh sáng phản xạ toàn phần nhiều lần trong lõi sợi quang.' },
    { title: 'Một số hiện tượng khác', html: `<ul><li>Kim cương có chiết suất rất lớn (≈ 2,42), góc tới hạn nhỏ (≈ 24°) nên ánh sáng phản xạ toàn phần nhiều lần bên trong, làm kim cương lấp lánh.</li><li>Lăng kính phản xạ toàn phần dùng trong ống nhòm, kính tiềm vọng.</li></ul>` }
  ],
  summary: 'Phản xạ toàn phần: toàn bộ ánh sáng bị phản xạ tại mặt phân cách, không có tia khúc xạ. Điều kiện: n₁ > n₂ và i ≥ i<sub>th</sub>, với sin i<sub>th</sub> = n₂ / n₁. Ứng dụng: sợi quang, nội soi, lăng kính phản xạ toàn phần.',
  examples: [
    { title: 'Kiểm tra điều kiện', problem: 'Chiếu tia sáng từ không khí vào thuỷ tinh với góc tới 70°. Có xảy ra phản xạ toàn phần không?', solution: 'Không, vì ánh sáng đi từ môi trường chiết quang kém (không khí) sang môi trường chiết quang hơn (thuỷ tinh).' },
    { title: 'Tính góc tới hạn', problem: 'Tính sin của góc tới hạn khi ánh sáng đi từ một chất lỏng có n = 1,25 ra không khí.', solution: 'sin i<sub>th</sub> = 1 / 1,25 = 0,8 ⇒ i<sub>th</sub> ≈ 53,1°.' },
    { title: 'So sánh', problem: 'Ánh sáng đi từ thuỷ tinh (n = 1,5) ra không khí với góc tới 45°. Có phản xạ toàn phần không?', solution: 'i<sub>th</sub> ≈ 41,8°. Vì 45° > 41,8° nên xảy ra phản xạ toàn phần.' }
  ],
  exercises: [
    { question: 'Nêu hai điều kiện để xảy ra phản xạ toàn phần.', hints: ['Điều kiện về chiết suất hai môi trường.', 'Điều kiện về góc tới.'], solution: 'Ánh sáng đi từ môi trường có chiết suất lớn sang môi trường có chiết suất nhỏ hơn và góc tới lớn hơn hoặc bằng góc tới hạn.' },
    { question: 'Tính sin góc tới hạn khi ánh sáng đi từ thuỷ tinh (n<sub>1</sub> = 1,6) sang nước (n<sub>2</sub> = 1,2).', hints: ['sin i<sub>th</sub> = n<sub>2</sub> / n<sub>1</sub>.', '1,2 / 1,6 = ?'], solution: 'sin i<sub>th</sub> = 1,2 / 1,6 = 0,75 ⇒ i<sub>th</sub> ≈ 48,6°.' },
    { question: 'Vì sao lõi sợi quang phải có chiết suất lớn hơn vỏ?', hints: ['Phản xạ toàn phần chỉ xảy ra theo chiều nào?', 'Ánh sáng cần bị giữ lại trong lõi.'], solution: 'Để ánh sáng đi từ lõi (chiết quang hơn) tới vỏ (chiết quang kém) có thể phản xạ toàn phần, giữ ánh sáng truyền trong lõi.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phản xạ toàn phần có thể xảy ra khi ánh sáng đi từ không khí vào nước.', answer: false, explain: 'Phải đi từ môi trường chiết quang hơn sang chiết quang kém.' },
    { type: 'mcq', q: 'Khi xảy ra phản xạ toàn phần thì:', options: ['chỉ có tia khúc xạ', 'không còn tia khúc xạ, toàn bộ ánh sáng bị phản xạ', 'tia khúc xạ và tia phản xạ sáng như nhau', 'ánh sáng bị hấp thụ hết'], answer: 1, explain: 'Toàn bộ ánh sáng bị phản xạ lại môi trường cũ.' },
    { type: 'short', q: 'Ánh sáng đi từ một chất có chiết suất 2 ra không khí (n = 1). Sin góc tới hạn bằng bao nhiêu?', answer: '0,5', calc: '1/2', explain: 'sin i<sub>th</sub> = 1/2 = 0,5 (i<sub>th</sub> = 30°).' },
    { type: 'mcq', q: 'Ứng dụng nào dưới đây dựa trên phản xạ toàn phần?', options: ['Kính lúp', 'Sợi quang trong cáp Internet', 'Gương cầu lồi ở đường đèo', 'Pin mặt trời'], answer: 1, explain: 'Ánh sáng truyền trong sợi quang nhờ phản xạ toàn phần liên tiếp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lõi sợi quang có chiết suất lớn hơn lớp vỏ bọc.', answer: true, explain: 'Điều kiện để phản xạ toàn phần tại mặt lõi – vỏ.' },
    { type: 'short', q: 'Ánh sáng đi từ chất lỏng có n<sub>1</sub> = 1,5 sang chất có n<sub>2</sub> = 1,2. Sin góc tới hạn bằng bao nhiêu?', answer: '0,8', calc: '1.2/1.5', explain: '1,2 / 1,5 = 0,8.' },
    { type: 'mcq', q: 'Ánh sáng đi từ thuỷ tinh (i<sub>th</sub> ≈ 42°) ra không khí. Góc tới nào gây phản xạ toàn phần?', options: ['20°', '30°', '40°', '50°'], answer: 3, explain: 'Cần i ≥ 42°, chỉ 50° thoả mãn.' },
    { type: 'mcq', q: 'Kim cương lấp lánh chủ yếu vì:', options: ['kim cương tự phát sáng', 'chiết suất lớn, góc tới hạn nhỏ nên ánh sáng phản xạ toàn phần nhiều lần bên trong', 'kim cương hấp thụ hết ánh sáng', 'kim cương có màu trắng'], answer: 1, explain: 'n ≈ 2,42, i<sub>th</sub> ≈ 24°.' }
  ]
});
})();
