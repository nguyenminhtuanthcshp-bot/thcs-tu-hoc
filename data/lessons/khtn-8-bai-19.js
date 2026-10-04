/* KHTN 8 – Bài 19. Đòn bẩy và ứng dụng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-19', {
  objectives: [
    'Mô tả được cấu tạo của đòn bẩy: điểm tựa O, điểm đặt lực tác dụng, điểm đặt vật và các cánh tay đòn.',
    'Nêu được đòn bẩy có thể làm thay đổi hướng tác dụng của lực và cho lợi về lực khi cánh tay đòn của lực tác dụng lớn hơn.',
    'Phân biệt được các loại đòn bẩy (loại 1, loại 2 và trường hợp riêng loại 3).',
    'Vận dụng tính lực cần dùng và nêu được ứng dụng của đòn bẩy trong đời sống, trong cơ thể người.'
  ],
  intro: '“Hãy cho tôi một điểm tựa, tôi sẽ nâng cả Trái Đất” – câu nói nổi tiếng gắn với Archimedes nói về sức mạnh của <b>đòn bẩy</b>. Cái kéo, xe cút kít, cái bập bênh, chiếc đũa… đều là đòn bẩy.',
  steps: [
    { title: 'Cấu tạo và tác dụng của đòn bẩy', html: `<p>Đòn bẩy là một thanh cứng có thể quay quanh một <b>điểm tựa O</b>. Trên đòn bẩy có điểm đặt của lực tác dụng (F<sub>1</sub>) và điểm đặt của vật cần nâng (trọng lượng F<sub>2</sub>).</p>
      <ul><li>d<sub>1</sub>: cánh tay đòn của lực tác dụng (khoảng cách từ O đến giá của F<sub>1</sub>).</li><li>d<sub>2</sub>: cánh tay đòn của trọng lượng vật.</li></ul>
      <p>Đòn bẩy có thể làm <b>thay đổi hướng</b> tác dụng của lực (ấn xuống để nâng vật lên) và có thể cho <b>lợi về lực</b>.</p>` },
    { title: 'Khi nào được lợi về lực?', html: `<p>Đòn bẩy cân bằng khi moment của hai lực bằng nhau:</p>
      <div class="box key">F<sub>1</sub> · d<sub>1</sub> = F<sub>2</sub> · d<sub>2</sub> &nbsp;⇒&nbsp; {{F<sub>1</sub>|F<sub>2</sub>}} = {{d<sub>2</sub>|d<sub>1</sub>}}</div>
      <p>Khi d<sub>1</sub> &gt; d<sub>2</sub> thì F<sub>1</sub> &lt; F<sub>2</sub>: <b>lợi về lực</b>. Cánh tay đòn của lực tác dụng dài gấp bao nhiêu lần thì lực cần dùng nhỏ đi bấy nhiêu lần.</p>
      <p>Ví dụ: nâng vật nặng 600 N với d<sub>2</sub> = 0,5 m, d<sub>1</sub> = 1,5 m: F<sub>1</sub> = 600 · 0,5 : 1,5 = 200 N.</p>`,
      svg: S.lever({ type: 1, ratio: 3, d1: '1,5 m', d2: '0,5 m', f1: 'F₁ = 200 N', f2: 'F₂ = 600 N', title: 'Đòn bẩy loại 1: F₁ · d₁ = F₂ · d₂ (số liệu minh hoạ)' }) },
    { title: 'Các loại đòn bẩy', html: `<ul><li><b>Đòn bẩy loại 1</b>: điểm tựa O nằm <b>trong khoảng giữa</b> hai điểm đặt lực. Ví dụ: bập bênh, cái kéo, xà beng nhổ đinh, cần bơm nước bằng tay. Có thể lợi hoặc không lợi về lực tuỳ vị trí điểm tựa.</li>
      <li><b>Đòn bẩy loại 2</b>: điểm tựa O nằm <b>ngoài khoảng giữa</b> hai điểm đặt lực, lực tác dụng nằm xa điểm tựa hơn vật. Ví dụ: xe cút kít, cái kẹp hạt óc chó, dụng cụ mở nắp chai. Luôn cho lợi về lực.</li>
      <li><b>Đòn bẩy loại 3</b> (trường hợp riêng của loại 2): lực tác dụng nằm <b>gần điểm tựa hơn</b> vật. Ví dụ: cần câu cá, gắp thức ăn bằng đũa, cái nhíp. Không lợi về lực nhưng lợi về đường đi, thao tác nhanh.</li></ul>`,
      svg: [S.lever({ type: 2 }), S.lever({ type: 3 })] },
    { title: 'Đòn bẩy trong cơ thể người và trong xe đạp', html: `<ul><li><b>Đầu</b>: đòn bẩy loại 1 với điểm tựa là đốt sống cổ trên cùng; cơ gáy giữ cho đầu cân bằng.</li><li><b>Cẳng tay</b>: điểm tựa ở khớp khuỷu tay, cơ hai đầu kéo cẳng tay ở gần khuỷu, vật cầm ở bàn tay xa khuỷu ⇒ không lợi về lực nhưng bàn tay di chuyển được quãng đường dài, nhanh.</li><li><b>Kiễng chân</b>: điểm tựa ở các ngón chân, trọng lượng cơ thể ở giữa, cơ bắp chân kéo gót chân lên.</li><li><b>Xe đạp</b>: bàn đạp và đùi đĩa là đòn bẩy giúp làm quay đĩa xích; tay phanh là đòn bẩy loại 1.</li></ul>` }
  ],
  summary: 'Đòn bẩy gồm điểm tựa O, lực tác dụng F<sub>1</sub> (cánh tay đòn d<sub>1</sub>) và vật F<sub>2</sub> (cánh tay đòn d<sub>2</sub>). Cân bằng: F<sub>1</sub> · d<sub>1</sub> = F<sub>2</sub> · d<sub>2</sub>; d<sub>1</sub> &gt; d<sub>2</sub> thì lợi về lực. Loại 1: O ở giữa; loại 2: vật ở giữa (lợi về lực); loại 3: lực ở giữa (lợi về đường đi).',
  examples: [
    { title: 'Tính lực cần dùng', problem: 'Dùng xà beng dài để bẩy hòn đá nặng 1 200 N. Khoảng cách từ điểm tựa đến hòn đá là 0,2 m, từ điểm tựa đến tay là 1,2 m. Tính lực tối thiểu cần dùng.', solution: 'F<sub>1</sub> = 1 200 · 0,2 : 1,2 = 200 (N).' },
    { title: 'Phân loại', problem: 'Xe cút kít thuộc loại đòn bẩy nào? Chỉ ra điểm tựa, vị trí vật và lực.', solution: 'Loại 2: điểm tựa là trục bánh xe, vật ở thùng xe (giữa), lực tác dụng ở tay cầm (xa trục nhất) ⇒ lợi về lực.' },
    { title: 'Tìm cánh tay đòn', problem: 'Muốn nâng vật 900 N bằng lực 300 N với d<sub>2</sub> = 0,4 m thì d<sub>1</sub> tối thiểu bằng bao nhiêu?', solution: 'd<sub>1</sub> = F<sub>2</sub> · d<sub>2</sub> : F<sub>1</sub> = 900 · 0,4 : 300 = 1,2 (m).' }
  ],
  exercises: [
    { question: 'Kể tên hai dụng cụ là đòn bẩy loại 1 và hai dụng cụ là đòn bẩy loại 3.', hints: ['Loại 1: điểm tựa ở giữa.', 'Loại 3: lực tác dụng ở giữa điểm tựa và vật.'], solution: 'Loại 1: cái kéo, bập bênh. Loại 3: cần câu cá, cái nhíp (gắp bằng đũa).' },
    { question: 'Một người dùng đòn gánh (coi như đòn bẩy, vai là điểm tựa) gánh hai thúng: thúng gạo 300 N và thúng ngô 200 N, đòn gánh dài 1,5 m. Vai phải đặt cách thúng gạo bao xa để đòn gánh cân bằng?', hints: ['Gọi x là khoảng cách từ vai đến thúng gạo.', '300 · x = 200 · (1,5 − x).'], solution: '300x = 300 − 200x ⇒ x = 0,6 m.' },
    { question: 'Vì sao kéo cắt kim loại có tay cầm dài hơn lưỡi kéo rất nhiều, còn kéo cắt giấy có lưỡi dài?', hints: ['Cắt kim loại cần lực lớn.', 'Cắt giấy cần đường cắt dài.'], solution: 'Kéo cắt kim loại: tay cầm dài (d<sub>1</sub> &gt; d<sub>2</sub>) để lợi về lực. Kéo cắt giấy: lưỡi dài để mỗi lần cắt được đường dài (lợi về đường đi), giấy mềm nên không cần lực lớn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đòn bẩy có thể làm thay đổi hướng tác dụng của lực.', answer: true, explain: 'Ví dụ ấn một đầu xuống để nâng đầu kia lên.' },
    { type: 'short', q: 'Nâng vật nặng 800 N bằng đòn bẩy có d<sub>2</sub> = 0,3 m, d<sub>1</sub> = 1,2 m. Lực tối thiểu cần dùng là bao nhiêu N?', answer: '200', unit: 'N', calc: '800*0.3/1.2', explain: 'F<sub>1</sub> = 800 · 0,3 : 1,2 = 200 N.' },
    { type: 'mcq', q: 'Đòn bẩy cho lợi về lực khi:', options: ['d<sub>1</sub> &lt; d<sub>2</sub>', 'd<sub>1</sub> = d<sub>2</sub>', 'd<sub>1</sub> &gt; d<sub>2</sub>', 'không phụ thuộc d'], answer: 2, explain: 'Cánh tay đòn lực tác dụng lớn hơn thì lực nhỏ hơn.' },
    { type: 'mcq', q: 'Dụng cụ nào là đòn bẩy loại 2 (vật nằm giữa điểm tựa và lực)?', options: ['Bập bênh', 'Xe cút kít', 'Cần câu cá', 'Cái nhíp'], answer: 1, explain: 'Xe cút kít: trục bánh là điểm tựa, thùng hàng ở giữa.' },
    { type: 'short', q: 'Muốn nâng vật 1 000 N bằng lực 250 N, với d<sub>2</sub> = 0,5 m thì d<sub>1</sub> tối thiểu là bao nhiêu mét?', answer: '2', unit: 'm', calc: '1000*0.5/250', explain: 'd<sub>1</sub> = 1 000 · 0,5 : 250 = 2 m.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đòn bẩy loại 3 (như cần câu) luôn cho lợi về lực.', answer: false, explain: 'Loại 3 không lợi về lực, chỉ lợi về đường đi.' },
    { type: 'short', q: 'Cánh tay đòn của lực tác dụng dài gấp 4 lần cánh tay đòn của vật nặng 480 N. Lực cần dùng là bao nhiêu N?', answer: '120', unit: 'N', calc: '480/4', explain: 'F<sub>1</sub> = 480 : 4 = 120 N.' },
    { type: 'mcq', q: 'Trong cơ thể người, đầu hoạt động như đòn bẩy loại nào?', options: ['Loại 1', 'Loại 2', 'Loại 3', 'Không phải đòn bẩy'], answer: 0, explain: 'Điểm tựa (đốt sống cổ) nằm giữa trọng lượng đầu và lực kéo của cơ gáy.' }
  ]
});
})();
