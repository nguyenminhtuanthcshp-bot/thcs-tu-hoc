/* Toán 7 – Bài 14. Trường hợp bằng nhau thứ hai và thứ ba của tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var T = { A: [70, 30], B: [30, 150], C: [180, 150], D: [275, 30], E: [235, 150], F: [385, 150] };
function two(o) { o.w = 410; o.h = 180; o.P = T; o.seg = ['AB', 'BC', 'CA', 'DE', 'EF', 'FD']; return S.geo(o); }
THCS.registerLesson('toan-7/bai-14', {
  objectives: [
    'Nắm trường hợp bằng nhau cạnh – góc – cạnh (c.g.c) và góc – cạnh – góc (g.c.g).',
    'Xác định đúng “góc xen giữa hai cạnh” và “cạnh xen giữa hai góc”.',
    'Chọn đúng trường hợp để chứng minh hai tam giác bằng nhau và suy ra yếu tố tương ứng.'
  ],
  intro: 'Ở Bài 13, ta cần ba cặp cạnh. Nhưng nhiều khi đo góc dễ hơn đo cạnh. Bài này cho thêm hai “chìa khoá”: c.g.c và g.c.g.',
  steps: [
    { title: 'Trường hợp cạnh – góc – cạnh (c.g.c)', html: `<div class="box note">Nếu hai cạnh và <b>góc xen giữa</b> của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác bằng nhau.</div>
      <p class="math">AB = DE, ∠B = ∠E, BC = EF ⇒ ΔABC = ΔDEF (c.g.c)</p>
      <p>Góc xen giữa hai cạnh AB và BC là góc B (đỉnh chung của hai cạnh).</p>`,
      svg: two({ ticks: [['AB', 1], ['DE', 1], ['BC', 2], ['EF', 2]], arcs: [['ABC', 1, '', C.orange, 22], ['DEF', 1, '', C.orange, 22]] }),
      caption: 'c.g.c: hai cạnh và góc xen giữa (góc B và góc E).' },
    { title: 'Trường hợp góc – cạnh – góc (g.c.g)', html: `<div class="box note">Nếu một cạnh và <b>hai góc kề</b> cạnh ấy của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác bằng nhau.</div>
      <p class="math">∠B = ∠E, BC = EF, ∠C = ∠F ⇒ ΔABC = ΔDEF (g.c.g)</p>`,
      svg: two({ ticks: [['BC', 2], ['EF', 2]], arcs: [['ABC', 1, '', C.orange, 22], ['DEF', 1, '', C.orange, 22], ['BCA', 2, '', C.blue, 20], ['EFD', 2, '', C.blue, 20]] }),
      caption: 'g.c.g: cạnh BC và hai góc kề B, C.' },
    { title: 'Chú ý góc “xen giữa”', html: `<p>Hai cạnh và một góc <b>không xen giữa</b> thì chưa đủ để kết luận hai tam giác bằng nhau.</p>
      <p>Tương tự, với g.c.g, hai góc phải là hai góc <b>kề</b> với cạnh đó. (Nếu biết hai góc bất kì thì tính được góc thứ ba nhờ tổng 180°, rồi mới dùng g.c.g.)</p>` },
    { title: 'Chọn trường hợp nào?', html: `<table class="tbl"><tr><th>Đã biết</th><th>Dùng</th></tr><tr><td>3 cặp cạnh</td><td>c.c.c</td></tr><tr><td>2 cặp cạnh + góc xen giữa</td><td>c.g.c</td></tr><tr><td>1 cặp cạnh + 2 góc kề</td><td>g.c.g</td></tr></table>
      <p>Cặp góc đối đỉnh, cạnh chung, trung điểm… là những nguồn “bằng nhau” thường gặp.</p>` }
  ],
  summary: 'c.g.c: hai cạnh và góc xen giữa. g.c.g: một cạnh và hai góc kề. Phải đúng vị trí “xen giữa”/“kề”; hai tam giác bằng nhau ⇒ các cạnh, góc còn lại tương ứng bằng nhau.',
  examples: [
    { title: 'Dùng c.g.c với góc đối đỉnh', problem: 'Hai đoạn thẳng AB và CD cắt nhau tại trung điểm O của mỗi đoạn. Chứng minh AC = BD.', solution: 'Xét ΔOAC và ΔOBD: OA = OB, ∠AOC = ∠BOD (đối đỉnh), OC = OD ⇒ ΔOAC = ΔOBD (c.g.c) ⇒ AC = BD.' },
    { title: 'Dùng g.c.g', problem: 'Cho ∠xOy, Ot là tia phân giác. Trên Ot lấy M; qua M kẻ đường thẳng vuông góc với Ot cắt Ox, Oy tại A, B. Chứng minh OA = OB.', solution: 'Xét ΔOMA và ΔOMB: ∠AOM = ∠BOM (phân giác), OM chung, ∠OMA = ∠OMB = 90° ⇒ ΔOMA = ΔOMB (g.c.g) ⇒ OA = OB.' },
    { title: 'Nhận dạng', problem: 'ΔABC và ΔMNP có AB = MN, AC = MP, ∠A = ∠M. Hai tam giác có bằng nhau không?', solution: '∠A xen giữa AB, AC; ∠M xen giữa MN, MP ⇒ ΔABC = ΔMNP (c.g.c).' }
  ],
  exercises: [
    { question: 'Cho ΔABC, M là trung điểm BC. Trên tia đối của tia MA lấy D sao cho MD = MA. Chứng minh AB = DC.', hints: ['Xét ΔMAB và ΔMDC.', 'MA = MD, MB = MC, góc tại M đối đỉnh.'], solution: 'ΔMAB = ΔMDC (c.g.c) ⇒ AB = DC.' },
    { question: 'ΔABC = ΔDEF (g.c.g) với ∠B = 60°, ∠C = 50°. Tính ∠D.', hints: ['∠A = 180° − 60° − 50°.', '∠D = ∠A.'], solution: '∠D = ∠A = 70°.' },
    { question: 'Hai tam giác có hai cạnh bằng nhau từng đôi (3 cm, 4 cm) và một góc 30° không xen giữa. Có chắc chúng bằng nhau không?', hints: ['Góc không xen giữa.', 'Thử vẽ: có thể có hai tam giác khác nhau.'], solution: 'Không chắc. Trường hợp c.g.c đòi hỏi góc xen giữa hai cạnh.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Góc xen giữa hai cạnh MN và NP là:', options: ['∠M', '∠N', '∠P', '∠MNP hoặc ∠P'], answer: 1, explain: 'Đỉnh chung của MN và NP là N.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: AB = DE, BC = EF, ∠A = ∠D thì ΔABC = ΔDEF theo c.g.c.', answer: false, explain: '∠A không xen giữa AB và BC.' },
    { type: 'short', calc: '180 - 60 - 50', q: 'ΔABC = ΔDEF, ∠B = 60°, ∠C = 50°. Tính ∠D (độ).', unit: 'độ', answer: '70', explain: '∠D = ∠A = 70°.' },
    { type: 'mcq', q: 'ΔABC và ΔDEF có ∠B = ∠E, BC = EF, ∠C = ∠F. Chúng bằng nhau theo trường hợp:', options: ['c.c.c', 'c.g.c', 'g.c.g', 'không bằng nhau'], answer: 2, explain: 'Một cạnh và hai góc kề.' },
    { type: 'short', calc: '7', q: 'AB cắt CD tại trung điểm O của mỗi đoạn, AC = 7 cm. Tính BD (cm).', unit: 'cm', answer: '7', explain: 'ΔOAC = ΔOBD (c.g.c) ⇒ BD = AC.' },
    { type: 'short', calc: '5', q: 'Ot là phân giác của ∠xOy, AB ⊥ Ot tại M (A ∈ Ox, B ∈ Oy), OA = 5 cm. Tính OB (cm).', unit: 'cm', answer: '5', explain: 'ΔOMA = ΔOMB (g.c.g) ⇒ OB = OA.' },
    { type: 'mcq', q: 'Trường hợp nào KHÔNG đủ để kết luận hai tam giác bằng nhau?', options: ['c.c.c', 'c.g.c', 'g.c.g', 'ba góc bằng nhau'], answer: 3, explain: 'Ba góc bằng nhau chỉ cho hai tam giác “cùng hình dạng”.' },
    { type: 'short', calc: '180 - 45 - 65', q: 'ΔMNP = ΔHIK, ∠M = 45°, ∠I = 65°. Tính ∠P (độ).', unit: 'độ', answer: '70', explain: '∠N = ∠I = 65°; ∠P = 180° − 45° − 65° = 70°.' }
  ]
});
})();
