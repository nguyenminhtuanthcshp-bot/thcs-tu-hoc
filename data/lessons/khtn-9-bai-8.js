/* KHTN 9 – Bài 8. Thấu kính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-8', {
  objectives: [
    'Nhận biết được thấu kính hội tụ, thấu kính phân kì; nêu được trục chính, quang tâm, tiêu điểm, tiêu cự.',
    'Vẽ được đường truyền của các tia sáng đặc biệt qua thấu kính.',
    'Dựng được ảnh của vật sáng qua thấu kính và nêu được đặc điểm của ảnh.'
  ],
  intro: 'Kính lúp, kính cận, máy ảnh, điện thoại, kính hiển vi… đều có <b>thấu kính</b>. Chỉ một miếng thuỷ tinh có mặt cong nhưng có thể tạo ảnh to hơn, nhỏ hơn, cùng chiều hay ngược chiều với vật.',
  steps: [
    { title: 'Hai loại thấu kính', html: `<p><b>Thấu kính</b> là khối chất trong suốt giới hạn bởi hai mặt cong (hoặc một mặt cong và một mặt phẳng).</p>
      <ul><li><b>Thấu kính hội tụ</b> (rìa mỏng): chùm tia tới song song cho chùm tia ló <b>hội tụ</b> tại một điểm.</li><li><b>Thấu kính phân kì</b> (rìa dày): chùm tia tới song song cho chùm tia ló <b>loe rộng</b> ra.</li></ul>`,
      svg: S.lensShapes(), caption: 'Thấu kính hội tụ có phần rìa mỏng hơn phần giữa; thấu kính phân kì có phần rìa dày hơn.' },
    { title: 'Các khái niệm', html: `<ul><li><b>Trục chính</b> Δ: đường thẳng đi qua tâm thấu kính, vuông góc với mặt thấu kính.</li><li><b>Quang tâm</b> O: điểm chính giữa thấu kính; tia qua O truyền thẳng.</li><li><b>Tiêu điểm</b> F và F′: hai điểm nằm trên trục chính, đối xứng qua O.</li><li><b>Tiêu cự</b> f = OF = OF′.</li></ul>
      <div class="box key">Ba tia đặc biệt qua thấu kính hội tụ:<br>① Tia qua quang tâm O truyền thẳng.<br>② Tia song song trục chính cho tia ló đi qua tiêu điểm F′.<br>③ Tia đi qua tiêu điểm F cho tia ló song song trục chính.</div>
      <p>Với thấu kính phân kì: tia song song trục chính cho tia ló có <b>đường kéo dài</b> đi qua tiêu điểm F (cùng phía với tia tới); tia qua O truyền thẳng.</p>` },
    { title: 'Dựng ảnh qua thấu kính hội tụ', html: `<p>Vật AB đặt vuông góc trục chính, A nằm trên trục. Từ B vẽ hai trong ba tia đặc biệt; giao điểm của hai tia ló là ảnh B′; hạ vuông góc xuống trục được A′.</p>
      <table><tr><th>Vị trí vật</th><th>Đặc điểm ảnh</th></tr><tr><td>d > 2f</td><td>thật, ngược chiều, nhỏ hơn vật</td></tr><tr><td>d = 2f</td><td>thật, ngược chiều, bằng vật</td></tr><tr><td>f < d < 2f</td><td>thật, ngược chiều, lớn hơn vật</td></tr><tr><td>d < f</td><td>ảo, cùng chiều, lớn hơn vật</td></tr></table>`,
      svg: S.lensRay({ kind: 'ht', f: 3, d: 5, h: 2, twoF: true }), caption: 'Vật đặt trong khoảng f < d < 2f: ảnh thật, ngược chiều, lớn hơn vật.' },
    { title: 'Ảnh ảo qua thấu kính hội tụ', html: `<p>Khi vật đặt trong khoảng tiêu cự (d < f), hai tia ló <b>loe ra</b>, không cắt nhau. Đường kéo dài của chúng (nét đứt) cắt nhau tại B′: ảnh <b>ảo</b>, cùng chiều, lớn hơn vật, nằm cùng phía với vật. Ảnh ảo không hứng được trên màn.</p>`,
      svg: S.lensRay({ kind: 'ht', f: 3, d: 2, h: 1.5 }), caption: 'Vật trong khoảng tiêu cự của thấu kính hội tụ cho ảnh ảo, cùng chiều, lớn hơn vật.' },
    { title: 'Ảnh qua thấu kính phân kì', html: `<p>Với thấu kính phân kì, mọi vị trí của vật đều cho ảnh <b>ảo, cùng chiều, nhỏ hơn vật</b> và nằm trong khoảng tiêu cự (giữa F và O).</p>`,
      svg: S.lensRay({ kind: 'pk', f: 3, d: 5, h: 2 }), caption: 'Thấu kính phân kì luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật.' }
  ],
  summary: 'Thấu kính hội tụ rìa mỏng, thấu kính phân kì rìa dày. Trục chính, quang tâm O, tiêu điểm F, F′, tiêu cự f = OF. Tia qua O truyền thẳng; tia song song trục chính ló qua F′ (hội tụ) hoặc có đường kéo dài qua F (phân kì). Thấu kính hội tụ: d > f cho ảnh thật ngược chiều, d < f cho ảnh ảo lớn hơn vật. Thấu kính phân kì luôn cho ảnh ảo, nhỏ hơn vật.',
  examples: [
    { title: 'Nhận biết thấu kính', problem: 'Đưa một thấu kính lại gần dòng chữ thấy chữ to hơn. Đó là thấu kính gì?', solution: 'Thấu kính hội tụ (chữ nằm trong khoảng tiêu cự cho ảnh ảo, lớn hơn vật).' },
    { title: 'Đặc điểm ảnh', problem: 'Vật cách thấu kính hội tụ 30 cm, tiêu cự 10 cm. Nêu đặc điểm ảnh.', solution: 'd = 30 cm > 2f = 20 cm nên ảnh thật, ngược chiều, nhỏ hơn vật.' },
    { title: 'Dựng ảnh', problem: 'Nêu cách dựng ảnh B′ của điểm B qua thấu kính hội tụ.', solution: 'Từ B vẽ tia song song trục chính (ló qua F′) và tia qua quang tâm O (truyền thẳng). Giao điểm hai tia ló (hoặc đường kéo dài) là B′.' }
  ],
  exercises: [
    { question: 'Vật đặt cách thấu kính hội tụ (f = 12 cm) một khoảng 8 cm. Ảnh có đặc điểm gì?', hints: ['So sánh d với f.', 'd < f thì ảnh thật hay ảo?'], solution: 'd = 8 cm < f = 12 cm nên ảnh ảo, cùng chiều, lớn hơn vật.' },
    { question: 'Tiêu điểm F và F′ của một thấu kính cách nhau 30 cm. Tiêu cự bằng bao nhiêu?', hints: ['F và F′ đối xứng qua O.', 'f = OF.'], solution: 'f = 30 / 2 = 15 cm.' },
    { question: 'Có thể dùng thấu kính phân kì để thu ảnh của ngọn nến lên màn không? Vì sao?', hints: ['Ảnh qua thấu kính phân kì là ảnh gì?', 'Ảnh ảo có hứng được trên màn không?'], solution: 'Không. Thấu kính phân kì luôn cho ảnh ảo, mà ảnh ảo không hứng được trên màn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thấu kính hội tụ có phần rìa mỏng hơn phần giữa.', answer: true, explain: 'Đó là dấu hiệu nhận biết thấu kính hội tụ.' },
    { type: 'mcq', q: 'Tia sáng qua quang tâm của thấu kính:', options: ['bị lệch về phía trục chính', 'truyền thẳng', 'song song trục chính', 'đi qua tiêu điểm'], answer: 1, explain: 'Tia qua quang tâm truyền thẳng.' },
    { type: 'mcq', q: 'Tia tới song song với trục chính của thấu kính hội tụ cho tia ló:', options: ['đi qua tiêu điểm F′', 'truyền thẳng', 'song song trục chính', 'có đường kéo dài qua F'], answer: 0, explain: 'Tia ló đi qua tiêu điểm F′.' },
    { type: 'short', q: 'Khoảng cách giữa hai tiêu điểm F và F′ của thấu kính là 40 cm. Tiêu cự bằng bao nhiêu cm?', answer: '20', unit: 'cm', calc: '40/2', explain: 'f = 40 / 2 = 20 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thấu kính phân kì có thể cho ảnh thật.', answer: false, explain: 'Thấu kính phân kì luôn cho ảnh ảo với vật thật.' },
    { type: 'mcq', q: 'Vật đặt cách thấu kính hội tụ một khoảng d = 2f. Ảnh:', options: ['ảo, lớn hơn vật', 'thật, ngược chiều, bằng vật', 'thật, nhỏ hơn vật', 'không có ảnh'], answer: 1, explain: 'd = 2f cho ảnh thật, ngược chiều, bằng vật.' },
    { type: 'short', q: 'Thấu kính hội tụ có tiêu cự 10 cm. Để thu được ảnh thật bằng vật thì phải đặt vật cách thấu kính bao nhiêu cm?', answer: '20', unit: 'cm', calc: '2*10', explain: 'd = 2f = 20 cm.' },
    { type: 'mcq', q: 'Ảnh của vật qua thấu kính phân kì luôn:', options: ['thật, ngược chiều', 'ảo, cùng chiều, nhỏ hơn vật', 'ảo, lớn hơn vật', 'thật, bằng vật'], answer: 1, explain: 'Ảnh ảo, cùng chiều, nhỏ hơn vật.' }
  ]
});
})();
