/* KHTN 8 – Bài 17. Lực đẩy Archimedes. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-17', {
  objectives: [
    'Nêu được chất lỏng tác dụng lên vật nhúng trong nó một lực đẩy hướng thẳng đứng từ dưới lên (lực đẩy Archimedes).',
    'Viết được công thức F<sub>A</sub> = d · V và giải thích các đại lượng.',
    'Nêu được điều kiện vật nổi, vật lơ lửng, vật chìm.',
    'Vận dụng giải thích một số hiện tượng thực tế (tàu thuyền nổi, khinh khí cầu…).'
  ],
  intro: 'Nâng một hòn đá dưới nước thấy nhẹ hơn khi nhấc nó lên khỏi mặt nước. Con tàu bằng thép nặng hàng nghìn tấn vẫn nổi trên biển. Tất cả là nhờ <b>lực đẩy Archimedes</b>.',
  steps: [
    { title: 'Lực đẩy của chất lỏng', html: `<p>Treo vật vào lực kế: trong không khí lực kế chỉ P = 3 N; nhúng chìm vật trong nước, lực kế chỉ 2 N. Số chỉ giảm chứng tỏ nước đã tác dụng lên vật một lực đẩy hướng từ dưới lên:</p>
      <p class="math">F<sub>A</sub> = 3 − 2 = 1 (N)</p>
      <div class="box key">Mọi vật nhúng trong chất lỏng (hoặc chất khí) đều bị chất lỏng đẩy thẳng đứng từ dưới lên với một lực gọi là lực đẩy Archimedes.</div>`,
      svg: S.archimedesExp({ air: 3, water: 2 }), caption: 'Số chỉ lực kế giảm khi nhúng vật vào nước (số liệu minh hoạ).' },
    { title: 'Độ lớn lực đẩy Archimedes', html: `<p>Độ lớn lực đẩy Archimedes bằng <b>trọng lượng của phần chất lỏng bị vật chiếm chỗ</b>:</p>
      <div class="box key">F<sub>A</sub> = d · V</div>
      <ul><li>d: trọng lượng riêng của chất lỏng (N/m³); nước: 10 000 N/m³.</li><li>V: thể tích phần chất lỏng bị vật chiếm chỗ (m³) – bằng thể tích phần vật chìm trong chất lỏng.</li></ul>
      <p>Ví dụ: vật có thể tích 0,0001 m³ nhúng chìm trong nước: F<sub>A</sub> = 10 000 · 0,0001 = 1 N.</p>` },
    { title: 'Điều kiện vật nổi, lơ lửng, chìm', html: `<p>Vật nhúng chìm trong chất lỏng chịu hai lực: trọng lượng P (hướng xuống) và lực đẩy F<sub>A</sub> (hướng lên).</p>
      <ul><li>F<sub>A</sub> &lt; P: vật <b>chìm</b> xuống.</li><li>F<sub>A</sub> = P: vật <b>lơ lửng</b> trong chất lỏng.</li><li>F<sub>A</sub> &gt; P: vật <b>nổi</b> lên; khi nổi trên mặt thoáng thì F<sub>A</sub> = P.</li></ul>
      <p>Tương đương: vật đặc có D<sub>vật</sub> &gt; D<sub>lỏng</sub> thì chìm, bằng nhau thì lơ lửng, nhỏ hơn thì nổi.</p>`,
      svg: S.row([{ svg: S.buoyancy({ state: 'chim' }), caption: 'Vật chìm' }, { svg: S.buoyancy({ state: 'lo-lung' }), caption: 'Vật lơ lửng' }, { svg: S.buoyancy({ state: 'noi' }), caption: 'Vật nổi' }]) },
    { title: 'Ứng dụng', html: `<ul><li><b>Tàu thuyền</b>: làm rỗng lòng để thể tích phần chiếm chỗ nước lớn, lực đẩy Archimedes đủ lớn cân bằng trọng lượng tàu.</li><li><b>Tàu ngầm</b>: bơm nước vào hoặc ra khỏi khoang để thay đổi trọng lượng, giúp lặn xuống hoặc nổi lên.</li><li><b>Khinh khí cầu, bóng bay</b>: chứa khí nhẹ hoặc khí nóng, lực đẩy của không khí lớn hơn trọng lượng nên bay lên.</li><li>Phao cứu sinh, áo phao giúp người nổi trên mặt nước.</li></ul>` }
  ],
  summary: 'Vật nhúng trong chất lỏng bị đẩy từ dưới lên với lực F<sub>A</sub> = d · V (V: thể tích phần chất lỏng bị chiếm chỗ). F<sub>A</sub> &lt; P: chìm; F<sub>A</sub> = P: lơ lửng; F<sub>A</sub> &gt; P: nổi (khi nổi trên mặt thoáng F<sub>A</sub> = P).',
  examples: [
    { title: 'Tính lực đẩy', problem: 'Một vật thể tích 200 cm³ nhúng chìm hoàn toàn trong nước. Tính lực đẩy Archimedes.', solution: 'V = 200 cm³ = 0,0002 m³. F<sub>A</sub> = 10 000 · 0,0002 = 2 (N).' },
    { title: 'Từ số chỉ lực kế', problem: 'Lực kế chỉ 5 N khi vật ở ngoài không khí và 3,2 N khi nhúng chìm vật trong nước. Tính F<sub>A</sub> và thể tích vật.', solution: 'F<sub>A</sub> = 5 − 3,2 = 1,8 N. V = F<sub>A</sub> : d = 1,8 : 10 000 = 0,00018 m³ = 180 cm³.' },
    { title: 'Vật nổi hay chìm', problem: 'Thả một hòn bi sắt (D = 7 800 kg/m³) vào thuỷ ngân (D = 13 600 kg/m³). Bi nổi hay chìm?', solution: 'D<sub>sắt</sub> &lt; D<sub>thuỷ ngân</sub> nên bi sắt nổi trên thuỷ ngân.' }
  ],
  exercises: [
    { question: 'Một khối gỗ nổi trên mặt nước, phần chìm có thể tích 300 cm³. Tính lực đẩy Archimedes và trọng lượng khối gỗ.', hints: ['F<sub>A</sub> = d · V<sub>chìm</sub>.', 'Vật nổi cân bằng: P = F<sub>A</sub>.'], solution: 'F<sub>A</sub> = 10 000 · 0,0003 = 3 N; P = F<sub>A</sub> = 3 N.' },
    { question: 'Cùng một vật nhúng chìm trong nước và trong dầu (d = 8 000 N/m³), lực đẩy trong chất lỏng nào lớn hơn? Vì sao?', hints: ['F<sub>A</sub> = d · V, cùng V.', 'So sánh d của nước và dầu.'], solution: 'Trong nước lớn hơn vì d<sub>nước</sub> = 10 000 N/m³ &gt; d<sub>dầu</sub> = 8 000 N/m³.' },
    { question: 'Vì sao một miếng thép đặc chìm trong nước nhưng con tàu bằng thép lại nổi?', hints: ['So sánh thể tích nước bị chiếm chỗ.', 'Tàu có khoang rỗng chứa không khí.'], solution: 'Tàu có lòng rỗng nên chiếm chỗ một thể tích nước rất lớn, lực đẩy Archimedes đủ cân bằng trọng lượng tàu; miếng thép đặc chiếm chỗ ít nước, F<sub>A</sub> &lt; P nên chìm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lực đẩy Archimedes có hướng thẳng đứng từ dưới lên.', answer: true, explain: 'Chất lỏng đẩy vật từ dưới lên.' },
    { type: 'short', q: 'Một vật có thể tích 0,003 m³ nhúng chìm hoàn toàn trong nước (d = 10 000 N/m³). Lực đẩy Archimedes là bao nhiêu N?', answer: '30', unit: 'N', calc: '10000*0.003', explain: 'F<sub>A</sub> = 10 000 · 0,003 = 30 N.' },
    { type: 'short', q: 'Lực kế chỉ 4 N khi treo vật ngoài không khí và 2,5 N khi nhúng chìm vật trong nước. Lực đẩy Archimedes là bao nhiêu N?', answer: '1,5', unit: 'N', calc: '4-2.5', explain: 'F<sub>A</sub> = 4 − 2,5 = 1,5 N.' },
    { type: 'mcq', q: 'Vật nhúng chìm trong chất lỏng sẽ nổi lên khi:', options: ['F<sub>A</sub> &lt; P', 'F<sub>A</sub> = P', 'F<sub>A</sub> &gt; P', 'F<sub>A</sub> = 0'], answer: 2, explain: 'Lực đẩy lớn hơn trọng lượng thì vật nổi lên.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lực đẩy Archimedes phụ thuộc vào khối lượng riêng của chất làm vật.', answer: false, explain: 'F<sub>A</sub> chỉ phụ thuộc d của chất lỏng và thể tích phần chất lỏng bị chiếm chỗ.' },
    { type: 'mcq', q: 'Vật đặc nào nổi trên mặt nước (D<sub>nước</sub> = 1 000 kg/m³)?', options: ['Sắt (7 800 kg/m³)', 'Nhôm (2 700 kg/m³)', 'Gỗ khô (600 kg/m³)', 'Đồng (8 900 kg/m³)'], answer: 2, explain: 'D<sub>gỗ</sub> &lt; D<sub>nước</sub>.' },
    { type: 'short', q: 'Một khúc gỗ nổi trên nước có trọng lượng 6 N. Thể tích phần gỗ chìm trong nước là bao nhiêu cm³? (d = 10 000 N/m³)', answer: '600', unit: 'cm³', calc: '6/10000*1e6', explain: 'F<sub>A</sub> = P = 6 N ⇒ V = 6 : 10 000 = 0,0006 m³ = 600 cm³.' },
    { type: 'short', q: 'Vật có thể tích 500 cm³ nhúng chìm trong dầu có d = 8 000 N/m³. Lực đẩy Archimedes là bao nhiêu N?', answer: '4', unit: 'N', calc: '8000*500e-6', explain: 'V = 0,0005 m³; F<sub>A</sub> = 8 000 · 0,0005 = 4 N.' }
  ]
});
})();
