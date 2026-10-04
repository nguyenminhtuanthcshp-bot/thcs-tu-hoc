/* Toán 7 – Bài 15. Các trường hợp bằng nhau của tam giác vuông. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var T = { A: [40, 30], B: [40, 150], C: [180, 150], D: [245, 30], E: [245, 150], F: [385, 150] };
function two(o) { o.w = 410; o.h = 180; o.P = T; o.seg = ['AB', 'BC', 'CA', 'DE', 'EF', 'FD']; o.right = ['ABC', 'DEF']; return S.geo(o); }
THCS.registerLesson('toan-7/bai-15', {
  objectives: [
    'Nắm các trường hợp bằng nhau của tam giác vuông suy ra từ c.g.c, g.c.g.',
    'Nắm trường hợp đặc biệt: cạnh huyền – cạnh góc vuông.',
    'Vận dụng để chứng minh hai tam giác vuông bằng nhau, từ đó chứng minh đoạn thẳng, góc bằng nhau.'
  ],
  intro: 'Tam giác vuông đã có sẵn một cặp góc bằng nhau (90°), nên ta chỉ cần ít dữ kiện hơn để kết luận hai tam giác vuông bằng nhau.',
  steps: [
    { title: 'Hai cạnh góc vuông', html: `<p>Nếu hai cạnh góc vuông của tam giác vuông này bằng hai cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau (suy ra từ c.g.c, góc xen giữa là góc vuông).</p>`,
      svg: two({ ticks: [['AB', 1], ['DE', 1], ['BC', 2], ['EF', 2]] }),
      caption: 'AB = DE, BC = EF ⇒ ΔABC = ΔDEF (hai cạnh góc vuông).' },
    { title: 'Cạnh góc vuông và góc nhọn kề', html: `<p>Nếu một cạnh góc vuông và một góc nhọn kề cạnh ấy của tam giác vuông này bằng một cạnh góc vuông và góc nhọn kề cạnh ấy của tam giác vuông kia thì hai tam giác vuông bằng nhau (suy ra từ g.c.g).</p>`,
      svg: two({ ticks: [['BC', 2], ['EF', 2]], arcs: [['BCA', 1, '', C.orange, 24], ['EFD', 1, '', C.orange, 24]] }),
      caption: 'BC = EF, ∠C = ∠F ⇒ ΔABC = ΔDEF.' },
    { title: 'Cạnh huyền và góc nhọn', html: `<p>Nếu cạnh huyền và một góc nhọn của tam giác vuông này bằng cạnh huyền và một góc nhọn của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.</p>
      <p>(Vì góc nhọn còn lại cũng bằng nhau, do cùng bằng 90° trừ góc nhọn đã biết ⇒ dùng g.c.g.)</p>`,
      svg: two({ ticks: [['AC', 3], ['DF', 3]], arcs: [['BCA', 1, '', C.orange, 24], ['EFD', 1, '', C.orange, 24]] }),
      caption: 'AC = DF (cạnh huyền), ∠C = ∠F ⇒ ΔABC = ΔDEF.' },
    { title: 'Cạnh huyền – cạnh góc vuông', html: `<div class="box note">Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này bằng cạnh huyền và một cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.</div>
      <p>Đây là trường hợp riêng của tam giác vuông: với tam giác thường, “hai cạnh và một góc không xen giữa” chưa đủ, nhưng khi góc đó là góc vuông thì đủ.</p>`,
      svg: two({ ticks: [['AC', 3], ['DF', 3], ['AB', 1], ['DE', 1]] }),
      caption: 'AC = DF, AB = DE ⇒ ΔABC = ΔDEF (cạnh huyền – cạnh góc vuông).' }
  ],
  summary: 'Hai tam giác vuông bằng nhau nếu có: hai cạnh góc vuông; cạnh góc vuông + góc nhọn kề; cạnh huyền + góc nhọn; hoặc cạnh huyền + cạnh góc vuông bằng nhau từng đôi.',
  examples: [
    { title: 'Đường vuông góc hạ từ đỉnh', problem: 'Cho ΔABC có AB = AC. Kẻ AH ⊥ BC (H ∈ BC). Chứng minh HB = HC.', solution: 'ΔAHB và ΔAHC vuông tại H có AB = AC (cạnh huyền), AH chung (cạnh góc vuông) ⇒ ΔAHB = ΔAHC (cạnh huyền – cạnh góc vuông) ⇒ HB = HC.' },
    { title: 'Điểm trên tia phân giác', problem: 'M thuộc tia phân giác Ot của ∠xOy; MA ⊥ Ox, MB ⊥ Oy (A ∈ Ox, B ∈ Oy). Chứng minh MA = MB.', solution: 'ΔOAM và ΔOBM vuông tại A, B có OM chung (cạnh huyền), ∠AOM = ∠BOM ⇒ bằng nhau (cạnh huyền – góc nhọn) ⇒ MA = MB.' },
    { title: 'Tính độ dài', problem: 'Theo ví dụ 1, BC = 10 cm. Tính HB.', solution: 'HB = HC = 10 : 2 = 5 (cm).' }
  ],
  exercises: [
    { question: 'Cho ΔABC vuông tại A và ΔDEF vuông tại D có AB = DE, ∠B = ∠E = 40°. Hai tam giác có bằng nhau không? Tính ∠F.', hints: ['AB kề góc B, DE kề góc E.', '∠F = 90° − ∠E.'], solution: 'Bằng nhau (cạnh góc vuông – góc nhọn kề). ∠F = ∠C = 50°.' },
    { question: 'Cho ΔABC có AB = AC, BD ⊥ AC (D ∈ AC), CE ⊥ AB (E ∈ AB). Chứng minh BD = CE.', hints: ['Xét ΔABD và ΔACE vuông tại D, E.', 'Cạnh huyền AB = AC, góc A chung.'], solution: 'ΔABD = ΔACE (cạnh huyền – góc nhọn) ⇒ BD = CE.' },
    { question: 'Vì sao “hai tam giác vuông có hai góc nhọn bằng nhau từng đôi” chưa chắc bằng nhau?', hints: ['Không có cạnh nào bằng nhau.', 'Nghĩ đến một tam giác phóng to.'], solution: 'Cần ít nhất một cặp cạnh bằng nhau; hai tam giác cùng góc nhưng khác kích thước thì không bằng nhau.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hai tam giác vuông có cạnh huyền và một cạnh góc vuông bằng nhau từng đôi thì:', options: ['chưa chắc bằng nhau', 'bằng nhau', 'chỉ bằng nhau khi cân', 'có diện tích khác nhau'], answer: 1, explain: 'Trường hợp cạnh huyền – cạnh góc vuông.' },
    { type: 'short', calc: '10 / 2', q: 'ΔABC có AB = AC, AH ⊥ BC, BC = 10 cm. Tính HB (cm).', unit: 'cm', answer: '5', explain: 'HB = HC = BC : 2.' },
    { type: 'short', calc: '90 - 40', q: 'ΔABC vuông tại A = ΔDEF vuông tại D, ∠E = 40°. Tính ∠C (độ).', unit: 'độ', answer: '50', explain: '∠C = ∠F = 90° − 40° = 50°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tam giác vuông có hai góc nhọn bằng nhau từng đôi thì bằng nhau.', answer: false, explain: 'Cần thêm một cặp cạnh bằng nhau.' },
    { type: 'mcq', q: 'Điểm M trên tia phân giác của ∠xOy, MA ⊥ Ox, MB ⊥ Oy. Khi đó:', options: ['MA &gt; MB', 'MA = MB', 'MA &lt; MB', 'MA = OM'], answer: 1, explain: 'ΔOAM = ΔOBM (cạnh huyền – góc nhọn).' },
    { type: 'short', calc: '6', q: 'ΔABC có AB = AC, BD ⊥ AC, CE ⊥ AB, BD = 6 cm. Tính CE (cm).', unit: 'cm', answer: '6', explain: 'ΔABD = ΔACE ⇒ CE = BD.' },
    { type: 'mcq', q: 'Trường hợp “hai cạnh góc vuông” được suy ra từ trường hợp nào?', options: ['c.c.c', 'c.g.c', 'g.c.g', 'cạnh huyền – góc nhọn'], answer: 1, explain: 'Góc vuông xen giữa hai cạnh góc vuông.' },
    { type: 'short', calc: '2 * 3', q: 'AH ⊥ BC trong ΔABC cân (AB = AC), HB = 3 cm. Tính BC (cm).', unit: 'cm', answer: '6', explain: 'HB = HC = 3 ⇒ BC = 6.' }
  ]
});
})();
