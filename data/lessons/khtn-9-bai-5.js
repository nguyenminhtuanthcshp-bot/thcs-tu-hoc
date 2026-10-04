/* KHTN 9 – Bài 5. Khúc xạ ánh sáng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-5', {
  objectives: [
    'Mô tả được hiện tượng khúc xạ ánh sáng và chỉ ra được tia tới, tia khúc xạ, góc tới, góc khúc xạ.',
    'Nêu được khái niệm chiết suất n = c / v và phát biểu được định luật khúc xạ ánh sáng.',
    'Vận dụng được định luật khúc xạ để giải thích một số hiện tượng thực tế.'
  ],
  intro: 'Đặt chiếc thìa vào cốc nước, nhìn từ bên cạnh ta thấy thìa như bị “gãy” tại mặt nước. Nhìn xuống bể bơi, đáy bể có vẻ nông hơn thực tế. Nguyên nhân là ánh sáng bị đổi hướng khi đi từ nước sang không khí.',
  steps: [
    { title: 'Hiện tượng khúc xạ ánh sáng', html: `<p><b>Khúc xạ ánh sáng</b> là hiện tượng tia sáng bị <b>gãy khúc</b> (đổi hướng) tại mặt phân cách khi truyền xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác.</p>
      <ul><li>SI: tia tới; IR: tia khúc xạ; NN′: pháp tuyến tại điểm tới I.</li><li>Góc tới i = góc SIN; góc khúc xạ r = góc giữa IR và pháp tuyến.</li></ul>
      <div class="box key">Tia sáng chiếu <b>vuông góc</b> với mặt phân cách (i = 0) thì truyền thẳng, không bị gãy khúc.</div>`,
      svg: S.refraction({ i: 50, n1: 1, n2: 1.33, top: 'Không khí', bottom: 'Nước', values: true }), caption: 'Ánh sáng đi từ không khí vào nước: góc khúc xạ nhỏ hơn góc tới (i = 50°, r ≈ 35°).' },
    { title: 'Chiết suất của môi trường', html: `<p>Ánh sáng truyền trong chân không với tốc độ c ≈ 3 · 10<sup>8</sup> m/s; trong các môi trường khác tốc độ v nhỏ hơn. <b>Chiết suất</b> của môi trường:</p>
      <p class="math">n = c / v</p>
      <table><tr><th>Môi trường</th><th>Chiết suất n (tham khảo)</th></tr><tr><td>Không khí</td><td>≈ 1,00</td></tr><tr><td>Nước</td><td>≈ 1,33</td></tr><tr><td>Thuỷ tinh</td><td>≈ 1,5</td></tr><tr><td>Kim cương</td><td>≈ 2,42</td></tr></table>
      <p>Môi trường có chiết suất lớn hơn gọi là môi trường <b>chiết quang hơn</b>; ánh sáng truyền trong đó chậm hơn.</p>` },
    { title: 'Định luật khúc xạ ánh sáng', html: `<ul><li>Tia khúc xạ nằm trong <b>mặt phẳng tới</b> và ở <b>phía bên kia</b> pháp tuyến so với tia tới.</li><li>Với hai môi trường trong suốt nhất định, tỉ số giữa sin góc tới và sin góc khúc xạ là một hằng số:</li></ul>
      <p class="math">n<sub>1</sub> · sin i = n<sub>2</sub> · sin r</p>
      <p>Khi ánh sáng đi vào môi trường chiết quang hơn (n<sub>2</sub> > n<sub>1</sub>) thì r < i: tia khúc xạ lệch <b>gần</b> pháp tuyến hơn. Ngược lại, đi từ nước ra không khí thì r > i.</p>`,
      svg: S.refraction({ i: 30, n1: 1.33, n2: 1, top: 'Nước', bottom: 'Không khí', values: true }), caption: 'Ánh sáng đi từ nước ra không khí: góc khúc xạ lớn hơn góc tới (i = 30°, r ≈ 42°).' },
    { title: 'Giải thích hiện tượng thực tế', html: `<p>Ánh sáng từ đáy bể đi lên, ra không khí bị lệch xa pháp tuyến. Mắt nhìn theo đường kéo dài của tia khúc xạ nên thấy ảnh của đáy bể <b>nâng cao</b> hơn vị trí thật: bể trông nông hơn thực tế. Chiếc thìa trông như gãy cũng vì vậy.</p>
      <div class="box tip">Khi tập bơi, không nên ước lượng độ sâu của bể bằng mắt.</div>` }
  ],
  summary: 'Khúc xạ: tia sáng gãy khúc tại mặt phân cách hai môi trường. Chiết suất n = c / v. Định luật: tia khúc xạ nằm trong mặt phẳng tới, bên kia pháp tuyến; n₁ sin i = n₂ sin r. Vào môi trường chiết quang hơn thì r < i; i = 0 thì r = 0.',
  examples: [
    { title: 'Tính chiết suất', problem: 'Tốc độ ánh sáng trong một loại thuỷ tinh là 2 · 10<sup>8</sup> m/s. Tính chiết suất của thuỷ tinh (c = 3 · 10<sup>8</sup> m/s).', solution: 'n = c / v = 3 · 10<sup>8</sup> / (2 · 10<sup>8</sup>) = 1,5.' },
    { title: 'Tính tốc độ ánh sáng', problem: 'Nước có chiết suất 1,33. Tính tốc độ ánh sáng trong nước (làm tròn đến hai chữ số thập phân, theo đơn vị 10<sup>8</sup> m/s).', solution: 'v = c / n = 3 / 1,33 ≈ 2,26 (· 10<sup>8</sup> m/s).' },
    { title: 'Vận dụng định luật', problem: 'Tia sáng đi từ không khí (n ≈ 1) vào thuỷ tinh (n = 1,5) với góc tới 30°. Tính sin r.', solution: '1 · sin 30° = 1,5 · sin r ⇒ sin r = 0,5 / 1,5 ≈ 0,33 ⇒ r ≈ 19,5°.' }
  ],
  exercises: [
    { question: 'Chiếu một tia sáng vuông góc với mặt nước. Tia sáng có bị gãy khúc không? Góc khúc xạ bằng bao nhiêu?', hints: ['Góc tới i bằng bao nhiêu khi tia vuông góc với mặt phân cách?', 'sin 0° = 0.'], solution: 'Không bị gãy khúc; i = 0 nên r = 0, tia sáng truyền thẳng vào nước.' },
    { question: 'Tốc độ ánh sáng trong kim cương khoảng 1,24 · 10<sup>8</sup> m/s. Tính chiết suất của kim cương (làm tròn hai chữ số thập phân).', hints: ['n = c / v.', 'c = 3 · 10<sup>8</sup> m/s.'], solution: 'n = 3 / 1,24 ≈ 2,42.' },
    { question: 'Vì sao khi đứng trên bờ nhìn xuống, ta thấy cá trong hồ ở gần mặt nước hơn vị trí thật?', hints: ['Ánh sáng đi từ nước ra không khí lệch gần hay xa pháp tuyến?', 'Mắt nhìn theo đường kéo dài của tia sáng đi vào mắt.'], solution: 'Ánh sáng từ cá đi ra không khí bị khúc xạ, lệch xa pháp tuyến. Mắt nhìn theo đường kéo dài của tia khúc xạ nên thấy ảnh của cá nằm cao hơn vị trí thật.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi ánh sáng đi từ không khí vào nước với góc tới khác 0 thì góc khúc xạ nhỏ hơn góc tới.', answer: true, explain: 'Nước chiết quang hơn không khí nên r < i.' },
    { type: 'mcq', q: 'Hiện tượng khúc xạ ánh sáng là hiện tượng:', options: ['tia sáng bị hắt trở lại môi trường cũ', 'tia sáng bị gãy khúc khi truyền xiên góc qua mặt phân cách hai môi trường trong suốt', 'tia sáng truyền thẳng trong môi trường đồng tính', 'ánh sáng bị vật hấp thụ'], answer: 1, explain: 'Đó là định nghĩa khúc xạ ánh sáng.' },
    { type: 'short', q: 'Tốc độ ánh sáng trong một chất lỏng là 2,5 · 10<sup>8</sup> m/s. Chiết suất của chất lỏng là bao nhiêu? (c = 3 · 10<sup>8</sup> m/s)', answer: '1,2', calc: '3/2.5', explain: 'n = 3 / 2,5 = 1,2.' },
    { type: 'mcq', q: 'Khi góc tới bằng 0 thì góc khúc xạ:', options: ['bằng 0', 'bằng 90°', 'bằng 45°', 'lớn hơn góc tới'], answer: 0, explain: 'Tia sáng vuông góc mặt phân cách truyền thẳng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tia khúc xạ và tia tới nằm cùng một phía so với pháp tuyến.', answer: false, explain: 'Tia khúc xạ nằm ở phía bên kia pháp tuyến so với tia tới.' },
    { type: 'short', q: 'Chiết suất của thuỷ tinh là 1,5. Tốc độ ánh sáng trong thuỷ tinh bằng bao nhiêu lần 10<sup>8</sup> m/s?', answer: '2', calc: '3/1.5', explain: 'v = 3 / 1,5 = 2 (· 10<sup>8</sup> m/s).' },
    { type: 'mcq', q: 'Hiện tượng nào sau đây do khúc xạ ánh sáng gây ra?', options: ['Ảnh của cây trên mặt hồ phẳng lặng', 'Đáy bể bơi trông nông hơn thực tế', 'Bóng đen sau vật cản', 'Ảnh trong gương phẳng'], answer: 1, explain: 'Ánh sáng từ đáy bể khúc xạ khi ra khỏi mặt nước.' },
    { type: 'mcq', q: 'Môi trường nào có chiết suất lớn nhất trong các môi trường sau?', options: ['Không khí', 'Nước', 'Thuỷ tinh', 'Kim cương'], answer: 3, explain: 'Kim cương n ≈ 2,42.' }
  ]
});
})();
