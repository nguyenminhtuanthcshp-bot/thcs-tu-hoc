/* KHTN 8 – Bài 3. Mol và tỉ khối chất khí. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-3', {
  objectives: [
    'Nêu được khái niệm mol và số Avogadro.',
    'Nêu được khái niệm khối lượng mol; tính được lượng chất theo công thức n = m : M.',
    'Nêu được thể tích mol của chất khí ở điều kiện chuẩn (25 °C, 1 bar) là 24,79 L.',
    'Tính được tỉ khối của chất khí; so sánh khí nặng hay nhẹ hơn không khí.'
  ],
  intro: 'Người bán trứng tính theo “chục”, người bán giấy tính theo “ram”. Nguyên tử, phân tử thì quá nhỏ để đếm từng hạt, nên các nhà hoá học dùng một “đơn vị đếm” đặc biệt: <b>mol</b>.',
  steps: [
    { title: 'Mol và số Avogadro', html: `<p><b>Mol</b> là lượng chất có chứa <b>N<sub>A</sub></b> hạt (nguyên tử hoặc phân tử) của chất đó.</p>
      <p class="math">N<sub>A</sub> = 6,022 × 10<sup>23</sup> (số Avogadro)</p>
      <p>Ví dụ: 1 mol nguyên tử iron chứa 6,022 × 10<sup>23</sup> nguyên tử Fe; 2 mol phân tử nước chứa 2 × 6,022 × 10<sup>23</sup> = 1,2044 × 10<sup>24</sup> phân tử H<sub>2</sub>O.</p>` },
    { title: 'Khối lượng mol', html: `<p><b>Khối lượng mol</b> (kí hiệu M, đơn vị g/mol) là khối lượng của N<sub>A</sub> hạt chất đó. M có <b>trị số bằng</b> khối lượng nguyên tử hoặc phân tử (tính theo amu).</p>
      <p>Ví dụ: H<sub>2</sub>O có khối lượng phân tử 2 · 1 + 16 = 18 amu ⇒ M = 18 g/mol. CO<sub>2</sub>: 12 + 2 · 16 = 44 ⇒ M = 44 g/mol.</p>
      <div class="box key">n = {{m|M}} &nbsp;⇔&nbsp; m = n · M &nbsp; (n: số mol; m: khối lượng, g; M: g/mol)</div>` },
    { title: 'Thể tích mol của chất khí', html: `<p>Ở cùng nhiệt độ và áp suất, 1 mol của <b>bất kì chất khí nào</b> cũng chiếm thể tích như nhau.</p>
      <p>Ở <b>điều kiện chuẩn</b> (25 °C, 1 bar), thể tích mol của chất khí là <b>24,79 L/mol</b>.</p>
      <p class="math">V = n · 24,79 (L) &nbsp;⇔&nbsp; n = {{V|24,79}}</p>
      <p>Ví dụ: 0,5 mol khí CO<sub>2</sub> ở điều kiện chuẩn chiếm 0,5 · 24,79 = 12,395 L.</p>`,
      svg: S.molMap(), caption: 'Sơ đồ chuyển đổi giữa khối lượng, số mol, thể tích khí (điều kiện chuẩn) và số hạt.' },
    { title: 'Tỉ khối của chất khí', html: `<p>Tỉ khối của khí A so với khí B cho biết khí A nặng hay nhẹ hơn khí B bao nhiêu lần:</p>
      <p class="math">d<sub>A/B</sub> = {{M<sub>A</sub>|M<sub>B</sub>}}</p>
      <p>Không khí là hỗn hợp khí, có khối lượng mol trung bình khoảng <b>29 g/mol</b>, nên: <span class="math">d<sub>A/kk</sub> = {{M<sub>A</sub>|29}}</span></p>
      <ul><li>d &gt; 1: khí A nặng hơn; d &lt; 1: khí A nhẹ hơn.</li><li>CO<sub>2</sub>: {{44|29}} ≈ 1,52 ⇒ nặng hơn không khí. H<sub>2</sub>: {{2|29}} ≈ 0,07 ⇒ nhẹ hơn không khí (vì thế bóng bay bơm hydrogen bay lên).</li></ul>`,
      svg: S.bar({ title: 'Khối lượng mol của một số khí so với không khí (29 g/mol)', cats: ['H₂', 'CH₄', 'Không khí', 'O₂', 'CO₂'], series: [{ name: 'M (g/mol)', values: [2, 16, 29, 32, 44], color: '#0284c7' }], yMax: 50, yStep: 10, width: 520, height: 280 }), caption: 'Khí có M lớn hơn 29 g/mol thì nặng hơn không khí (O₂, CO₂); M nhỏ hơn 29 thì nhẹ hơn (H₂, CH₄).' }
  ],
  summary: '1 mol = 6,022 × 10<sup>23</sup> hạt. n = m : M. Ở điều kiện chuẩn (25 °C, 1 bar): V = n · 24,79 L. d<sub>A/B</sub> = M<sub>A</sub> : M<sub>B</sub>; d<sub>A/kk</sub> = M<sub>A</sub> : 29.',
  examples: [
    { title: 'Tính số mol từ khối lượng', problem: 'Tính số mol có trong 36 g nước (H<sub>2</sub>O).', solution: 'M(H<sub>2</sub>O) = 18 g/mol. n = {{36|18}} = 2 (mol).' },
    { title: 'Tính khối lượng và thể tích khí', problem: 'Tính khối lượng và thể tích (ở điều kiện chuẩn) của 0,5 mol khí CO<sub>2</sub>.', solution: 'm = n · M = 0,5 · 44 = 22 (g).<br>V = n · 24,79 = 0,5 · 24,79 = 12,395 (L).' },
    { title: 'So sánh với không khí', problem: 'Khí methane (CH<sub>4</sub>) nặng hay nhẹ hơn không khí bao nhiêu lần?', solution: 'M(CH<sub>4</sub>) = 12 + 4 · 1 = 16 g/mol. d = {{16|29}} ≈ 0,55 &lt; 1 ⇒ methane nhẹ hơn không khí, bằng khoảng 0,55 lần.' }
  ],
  exercises: [
    { question: 'Tính số mol có trong 11 g khí CO<sub>2</sub>.', hints: ['Khối lượng mol của CO<sub>2</sub> là 44 g/mol.', 'Dùng công thức n = m : M.'], solution: 'n = 11 : 44 = 0,25 (mol).' },
    { question: 'Tính thể tích ở điều kiện chuẩn của 2 mol khí oxygen.', hints: ['Ở điều kiện chuẩn, 1 mol khí chiếm 24,79 L.', 'V = n · 24,79.'], solution: 'V = 2 · 24,79 = 49,58 (L).' },
    { question: 'Tính tỉ khối của khí oxygen (O<sub>2</sub>) so với khí hydrogen (H<sub>2</sub>).', hints: ['M(O<sub>2</sub>) = 2 · 16 = 32 g/mol; M(H<sub>2</sub>) = 2 g/mol.', 'd = M(O<sub>2</sub>) : M(H<sub>2</sub>).'], solution: 'd = 32 : 2 = 16. Khí oxygen nặng gấp 16 lần khí hydrogen.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Số Avogadro có giá trị gần đúng là:', options: ['6,022 × 10<sup>22</sup>', '6,022 × 10<sup>23</sup>', '24,79', '1,6605 × 10<sup>−24</sup>'], answer: 1, explain: 'N<sub>A</sub> = 6,022 × 10<sup>23</sup>.' },
    { type: 'short', q: 'Khối lượng mol của nước (H<sub>2</sub>O) là bao nhiêu g/mol? (H = 1, O = 16)', answer: '18', unit: 'g/mol', calc: '2*1+16', explain: '2 · 1 + 16 = 18 g/mol.' },
    { type: 'short', q: 'Có bao nhiêu mol trong 11,7 g muối ăn NaCl? (M = 58,5 g/mol)', answer: '0,2', unit: 'mol', calc: '11.7/58.5', explain: 'n = 11,7 : 58,5 = 0,2 (mol).' },
    { type: 'mcq', q: 'Ở điều kiện chuẩn (25 °C, 1 bar), 1 mol chất khí bất kì chiếm thể tích:', options: ['22,4 L', '24,79 L', '1 L', '6,022 L'], answer: 1, explain: 'Thể tích mol khí ở điều kiện chuẩn là 24,79 L.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khí carbon dioxide nhẹ hơn không khí.', answer: false, explain: 'd = 44 : 29 ≈ 1,52 &gt; 1 nên CO<sub>2</sub> nặng hơn không khí.' },
    { type: 'short', q: 'Khối lượng của 0,5 mol khí oxygen O<sub>2</sub> (M = 32 g/mol) là bao nhiêu gam?', answer: '16', unit: 'g', calc: '0.5*32', explain: 'm = 0,5 · 32 = 16 (g).' },
    { type: 'mcq', q: 'Tỉ khối của khí SO<sub>2</sub> (M = 64) so với khí O<sub>2</sub> (M = 32) là:', options: ['0,5', '2', '32', '64'], answer: 1, explain: 'd = 64 : 32 = 2.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở cùng điều kiện nhiệt độ, áp suất, 1 mol khí H<sub>2</sub> và 1 mol khí CO<sub>2</sub> chiếm thể tích bằng nhau.', answer: true, explain: 'Ở cùng nhiệt độ và áp suất, 1 mol mọi chất khí chiếm cùng một thể tích.' }
  ]
});
})();
