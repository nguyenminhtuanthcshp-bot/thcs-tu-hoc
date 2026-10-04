/* Toán 7 – Bài 21. Tính chất của dãy tỉ số bằng nhau. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-21', {
  objectives: [
    'Nắm tính chất của dãy tỉ số bằng nhau.',
    'Vận dụng tính chất để tìm các số khi biết tổng (hiệu) và tỉ số của chúng.',
    'Giải bài toán chia một đại lượng thành các phần tỉ lệ với các số cho trước.'
  ],
  intro: 'Ba bạn góp tiền mua chung một món quà theo tỉ lệ 2 : 3 : 5. Nếu món quà giá 200 000 đồng thì mỗi bạn góp bao nhiêu? Công cụ giải nhanh chính là dãy tỉ số bằng nhau.',
  steps: [
    { title: 'Tính chất', html: `<div class="box note">Từ {{a|b}} = {{c|d}} suy ra {{a|b}} = {{c|d}} = {{a + c|b + d}} = {{a − c|b − d}} (với b ≠ ±d).</div>
      <p>Mở rộng cho dãy: <span class="math">{{a|b}} = {{c|d}} = {{e|f}} = {{a + c + e|b + d + f}} = {{a − c + e|b − d + f}}</span> (các mẫu khác 0).</p>
      <p>Ví dụ: {{1|2}} = {{3|6}} = {{1 + 3|2 + 6}} = {{4|8}} ✓.</p>` },
    { title: 'Cách viết “tỉ lệ với”', html: `<p>Nói các số x, y, z <b>tỉ lệ với</b> các số a, b, c nghĩa là <span class="math">{{x|a}} = {{y|b}} = {{z|c}}</span>, còn viết x : y : z = a : b : c.</p>` },
    { title: 'Tìm hai số biết tổng và tỉ số', html: `<p>Tìm x, y biết {{x|3}} = {{y|5}} và x + y = 32.</p>
      <p class="math">{{x|3}} = {{y|5}} = {{x + y|3 + 5}} = {{32|8}} = 4 ⇒ x = 12, y = 20</p>`,
      svg: S.fracBars({ bars: [{ parts: 8, shaded: 3, label: 'x: 3 phần' }, { parts: 8, shaded: 5, label: 'y: 5 phần' }] }),
      caption: 'Tổng 32 chia thành 8 phần bằng nhau, mỗi phần 4.' },
    { title: 'Chia theo tỉ lệ', html: `<p>Chia 200 000 đồng theo tỉ lệ 2 : 3 : 5:</p>
      <p class="math">{{x|2}} = {{y|3}} = {{z|5}} = {{x + y + z|10}} = {{200 000|10}} = 20 000</p>
      <p>⇒ x = 40 000, y = 60 000, z = 100 000 (đồng). Kiểm tra: tổng đúng 200 000.</p>` }
  ],
  summary: 'Dãy tỉ số bằng nhau: cộng (trừ) tử với tử, mẫu với mẫu vẫn được tỉ số bằng các tỉ số đã cho. Chia theo tỉ lệ a : b : c: tìm “giá trị một phần” = tổng : (a + b + c).',
  examples: [
    { title: 'Biết hiệu', problem: 'Tìm x, y biết {{x|7}} = {{y|4}} và x − y = 18.', solution: '{{x − y|7 − 4}} = {{18|3}} = 6 ⇒ x = 42, y = 24.' },
    { title: 'Ba số', problem: 'Số học sinh ba lớp 7A, 7B, 7C tỉ lệ với 10; 9; 8 và tổng là 108. Tính số học sinh mỗi lớp.', solution: '{{108|27}} = 4 ⇒ 7A: 40, 7B: 36, 7C: 32.' },
    { title: 'Dạng x : y', problem: 'Tìm x, y biết x : y = 2 : 5 và y − x = 12.', solution: '{{x|2}} = {{y|5}} = {{y − x|3}} = 4 ⇒ x = 8, y = 20.' }
  ],
  exercises: [
    { question: 'Tìm x, y biết {{x|2}} = {{y|3}} và x + y = −15.', hints: ['{{x + y|5}}.', '−15 : 5 = −3.'], solution: 'x = −6, y = −9.' },
    { question: 'Ba đội trồng được 180 cây, số cây tỉ lệ với 3; 4; 5. Mỗi đội trồng bao nhiêu cây?', hints: ['Tổng số phần 12.', '180 : 12 = 15.'], solution: '45; 60; 75 cây.' },
    { question: 'Chu vi hình chữ nhật 56 cm, hai cạnh tỉ lệ với 3 và 4. Tính diện tích.', hints: ['Nửa chu vi = 28 = a + b.', '{{a|3}} = {{b|4}} = 4.'], solution: 'a = 12, b = 16 ⇒ S = 192 cm².' }
  ],
  quiz: [
    { type: 'short', calc: '32 / 8 * 3', q: 'Tìm x biết {{x|3}} = {{y|5}} và x + y = 32.', answer: '12', explain: 'Mỗi phần 4 ⇒ x = 12.' },
    { type: 'short', calc: '18 / 3 * 7', q: 'Tìm x biết {{x|7}} = {{y|4}} và x − y = 18.', answer: '42', explain: '18 : 3 = 6 ⇒ x = 42.' },
    { type: 'short', calc: '108 / 27 * 10', q: 'Ba lớp có 108 học sinh, tỉ lệ 10 : 9 : 8. Lớp đông nhất có bao nhiêu học sinh?', answer: '40', explain: '108 : 27 = 4 ⇒ 40.' },
    { type: 'mcq', q: 'Nếu {{a|b}} = {{c|d}} thì tỉ số nào bằng chúng?', options: ['{{a + c|b + d}}', '{{a + d|b + c}}', '{{a · c|b + d}}', '{{a|b + d}}'], answer: 0, explain: 'Tính chất dãy tỉ số bằng nhau.' },
    { type: 'short', calc: '200000 / 10 * 5', q: 'Chia 200 000 đồng theo tỉ lệ 2 : 3 : 5. Phần lớn nhất là bao nhiêu đồng?', unit: 'đồng', answer: '100000', answerText: '100 000', explain: '20 000 · 5.' },
    { type: 'short', calc: '-15 / 5 * 3', q: 'Tìm y biết {{x|2}} = {{y|3}} và x + y = −15.', answer: '-9', answerText: '−9', explain: '−15 : 5 = −3 ⇒ y = −9.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “x, y tỉ lệ với 2 và 5” nghĩa là {{x|2}} = {{y|5}}.', answer: true, explain: 'Đúng định nghĩa.' },
    { type: 'short', calc: '(56 / 2 / 7 * 3) * (56 / 2 / 7 * 4)', q: 'Hình chữ nhật chu vi 56 cm, hai cạnh tỉ lệ 3 : 4. Diện tích bằng bao nhiêu cm²?', unit: 'cm²', answer: '192', explain: '12 · 16 = 192.' }
  ]
});
})();
