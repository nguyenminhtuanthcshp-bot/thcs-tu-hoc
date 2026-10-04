/* KHTN 9 – Bài 10. Kính lúp. Bài tập thấu kính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-10', {
  objectives: [
    'Nêu được cấu tạo, công dụng của kính lúp và cách sử dụng kính lúp.',
    'Nêu được ý nghĩa số bội giác và vận dụng công thức G = 25 / f (f tính bằng cm).',
    'Vận dụng được tam giác đồng dạng (công thức thấu kính) để tính vị trí, độ lớn của ảnh.'
  ],
  intro: 'Thợ sửa đồng hồ, người kiểm tra tem, học sinh quan sát gân lá… đều dùng <b>kính lúp</b>. Kính lúp thực chất là một thấu kính hội tụ có tiêu cự ngắn.',
  steps: [
    { title: 'Kính lúp', html: `<p><b>Kính lúp</b> là thấu kính hội tụ có tiêu cự ngắn, dùng để quan sát các vật nhỏ.</p>
      <p>Cách dùng: đặt vật <b>trong khoảng tiêu cự</b> của kính, mắt nhìn qua kính thấy ảnh <b>ảo, cùng chiều, lớn hơn vật</b>.</p>`,
      svg: S.lensRay({ kind: 'ht', f: 3, d: 2, h: 1.2, note: 'Kính lúp: ảnh ảo, cùng chiều, lớn hơn vật' }), caption: 'Vật đặt trong khoảng tiêu cự của kính lúp cho ảnh ảo lớn hơn vật.' },
    { title: 'Số bội giác', html: `<p>Mỗi kính lúp có ghi <b>số bội giác</b> G (ví dụ 2x, 3x, 5x). Số bội giác càng lớn thì ảnh quan sát được càng lớn.</p>
      <p class="math">G = 25 / f</p><p>(f là tiêu cự tính bằng xentimét).</p>
      <p>Ví dụ: kính lúp 5x có f = 25 / 5 = 5 cm.</p>` },
    { title: 'Công thức thấu kính (từ tam giác đồng dạng)', html: `<p>Với thấu kính hội tụ, ảnh thật (d > f): từ các cặp tam giác đồng dạng ta suy ra</p>
      <p class="math">{{1|f}} = {{1|d}} + {{1|d′}};  {{h′|h}} = {{d′|d}}</p>
      <p>Ảnh ảo qua thấu kính hội tụ (d < f): {{1|f}} = {{1|d}} − {{1|d′}}. Ảnh ảo qua thấu kính phân kì: {{1|f}} = {{1|d′}} − {{1|d}}.</p>
      <div class="box tip">Trong bài tập, nên vẽ hình, chỉ ra các cặp tam giác đồng dạng rồi lập tỉ số; công thức trên là kết quả rút gọn.</div>`,
      svg: S.lensRay({ kind: 'ht', f: 2, d: 3, h: 1.5, twoF: true }), caption: 'Vật cách thấu kính 1,5f: ảnh thật, ngược chiều, lớn gấp 2 lần vật (d′ = 3f).' },
    { title: 'Bài tập mẫu', html: `<p>Vật AB cao 2 cm đặt cách thấu kính hội tụ (f = 10 cm) một khoảng 15 cm.</p>
      <p>{{1|d′}} = {{1|10}} − {{1|15}} = {{1|30}} ⇒ d′ = 30 cm.</p>
      <p>h′ = h · d′ / d = 2 · 30 / 15 = 4 cm. Ảnh thật, ngược chiều, cao 4 cm.</p>` }
  ],
  summary: 'Kính lúp là thấu kính hội tụ tiêu cự ngắn; đặt vật trong khoảng tiêu cự để thấy ảnh ảo, cùng chiều, lớn hơn vật. G = 25 / f (f theo cm). Với thấu kính hội tụ, ảnh thật: 1/f = 1/d + 1/d′, h′/h = d′/d.',
  examples: [
    { title: 'Số bội giác', problem: 'Kính lúp có tiêu cự 10 cm. Tính số bội giác.', solution: 'G = 25 / 10 = 2,5. Kính ghi 2,5x.' },
    { title: 'Tiêu cự kính lúp', problem: 'Kính lúp ghi 4x có tiêu cự bao nhiêu?', solution: 'f = 25 / G = 25 / 4 = 6,25 cm.' },
    { title: 'Vị trí ảnh thật', problem: 'Vật đặt cách thấu kính hội tụ 30 cm, f = 20 cm. Tính d′.', solution: '1/d′ = 1/20 − 1/30 = 1/60 ⇒ d′ = 60 cm. Ảnh thật, lớn gấp 2 lần vật.' }
  ],
  exercises: [
    { question: 'Kính lúp có số bội giác 5x. Tính tiêu cự. Phải đặt vật cách kính trong khoảng nào?', hints: ['f = 25 / G.', 'Vật phải đặt trong khoảng tiêu cự.'], solution: 'f = 25 / 5 = 5 cm. Đặt vật cách kính nhỏ hơn 5 cm.' },
    { question: 'Vật cao 3 cm đặt cách thấu kính hội tụ 24 cm, tiêu cự 12 cm. Tính d′ và chiều cao ảnh.', hints: ['d = 2f.', 'h′ = h · d′ / d.'], solution: '1/d′ = 1/12 − 1/24 = 1/24 ⇒ d′ = 24 cm; h′ = 3 · 24 / 24 = 3 cm.' },
    { question: 'Vật đặt cách thấu kính phân kì 20 cm, tiêu cự 20 cm. Tính khoảng cách từ ảnh đến thấu kính.', hints: ['Ảnh ảo qua thấu kính phân kì: 1/f = 1/d′ − 1/d.', '1/d′ = 1/20 + 1/20.'], solution: '1/d′ = 1/20 + 1/20 = 1/10 ⇒ d′ = 10 cm. Ảnh ảo, cùng chiều, cao bằng nửa vật.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kính lúp là thấu kính phân kì có tiêu cự ngắn.', answer: false, explain: 'Kính lúp là thấu kính hội tụ có tiêu cự ngắn.' },
    { type: 'short', q: 'Kính lúp có tiêu cự 5 cm. Số bội giác bằng bao nhiêu?', answer: '5', calc: '25/5', explain: 'G = 25 / 5 = 5.' },
    { type: 'mcq', q: 'Khi dùng kính lúp, phải đặt vật:', options: ['ngoài khoảng 2f', 'tại tiêu điểm', 'trong khoảng tiêu cự của kính', 'cách kính đúng 2f'], answer: 2, explain: 'Để có ảnh ảo, lớn hơn vật.' },
    { type: 'short', q: 'Kính lúp ghi 2,5x có tiêu cự bao nhiêu cm?', answer: '10', unit: 'cm', calc: '25/2.5', explain: 'f = 25 / 2,5 = 10 cm.' },
    { type: 'short', q: 'Vật đặt cách thấu kính hội tụ 20 cm, tiêu cự 10 cm. Ảnh cách thấu kính bao nhiêu cm?', answer: '20', unit: 'cm', calc: '1/(1/10-1/20)', explain: '1/d′ = 1/10 − 1/20 = 1/20 ⇒ d′ = 20 cm.' },
    { type: 'mcq', q: 'Ảnh quan sát qua kính lúp là:', options: ['ảnh thật, ngược chiều', 'ảnh ảo, cùng chiều, lớn hơn vật', 'ảnh ảo, nhỏ hơn vật', 'ảnh thật, bằng vật'], answer: 1, explain: 'Vật trong khoảng tiêu cự của thấu kính hội tụ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kính lúp có số bội giác càng lớn thì tiêu cự càng ngắn.', answer: true, explain: 'G = 25 / f.' },
    { type: 'short', q: 'Vật cao 1 cm, ảnh thật cách thấu kính 30 cm, vật cách thấu kính 15 cm. Ảnh cao bao nhiêu cm?', answer: '2', unit: 'cm', calc: '1*30/15', explain: 'h′ = 1 · 30 / 15 = 2 cm.' }
  ]
});
})();
