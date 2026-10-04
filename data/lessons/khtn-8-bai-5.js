/* KHTN 8 – Bài 5. Định luật bảo toàn khối lượng và phương trình hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-5', {
  objectives: [
    'Phát biểu được định luật bảo toàn khối lượng và giải thích được định luật theo sự bảo toàn số nguyên tử.',
    'Vận dụng được định luật để tính khối lượng một chất trong phản ứng.',
    'Nêu được khái niệm phương trình hoá học và các bước lập phương trình hoá học.',
    'Trình bày được ý nghĩa của phương trình hoá học (tỉ lệ số nguyên tử, phân tử).'
  ],
  intro: 'Đốt một khúc gỗ, tro còn lại nhẹ hơn khúc gỗ rất nhiều. Vậy khối lượng có “biến mất” trong phản ứng hoá học không? Nhà khoa học Lomonosov (Nga) và Lavoisier (Pháp) đã làm thí nghiệm trong bình kín để trả lời câu hỏi này.',
  steps: [
    { title: 'Định luật bảo toàn khối lượng', html: `<p>Cho dung dịch barium chloride vào dung dịch sodium sulfate đặt trên cân: xuất hiện kết tủa trắng barium sulfate nhưng số chỉ của cân <b>không đổi</b>.</p>
      <div class="box key">Trong một phản ứng hoá học, tổng khối lượng của các sản phẩm bằng tổng khối lượng của các chất phản ứng.</div>
      <p>Với phản ứng A + B → C + D: &nbsp;<span class="math">m<sub>A</sub> + m<sub>B</sub> = m<sub>C</sub> + m<sub>D</sub></span></p>
      <p>Khúc gỗ cháy nhẹ đi vì các sản phẩm khí (carbon dioxide, hơi nước) bay vào không khí, không nằm lại trong tro.</p>`,
      svg: S.massBalance({ m: '152,40 g' }), caption: 'BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl: tổng khối lượng không đổi (số chỉ cân là ví dụ minh hoạ).' },
    { title: 'Giải thích định luật', html: `<p>Trong phản ứng hoá học chỉ có <b>liên kết giữa các nguyên tử thay đổi</b>; số nguyên tử của mỗi nguyên tố được giữ nguyên và khối lượng mỗi nguyên tử không đổi. Vì vậy tổng khối lượng các chất được bảo toàn.</p>`,
      svg: S.reactionParticles({ left: [['C'], ['O', 'O']], right: [['O', 'C', 'O']], leftLabel: '1 nguyên tử C + 1 phân tử O₂', rightLabel: '1 phân tử CO₂' }), caption: 'Carbon cháy: 1 nguyên tử C và 2 nguyên tử O trước và sau phản ứng.' },
    { title: 'Phương trình hoá học', html: `<p><b>Phương trình hoá học</b> biểu diễn ngắn gọn phản ứng hoá học bằng công thức hoá học của các chất, có hệ số sao cho số nguyên tử mỗi nguyên tố ở hai vế bằng nhau.</p>
      <p>Ví dụ: hydrogen tác dụng với oxygen tạo thành nước: &nbsp;<span class="math">2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</span></p>` },
    { title: 'Các bước lập phương trình hoá học', html: `<ol><li>Viết sơ đồ phản ứng gồm công thức hoá học của chất phản ứng và sản phẩm: Al + O<sub>2</sub> ⟶ Al<sub>2</sub>O<sub>3</sub>.</li><li>So sánh số nguyên tử mỗi nguyên tố ở hai vế, tìm hệ số thích hợp: vế phải có 3 O, vế trái có 2 O ⇒ bội chung nhỏ nhất là 6: 3O<sub>2</sub> và 2Al<sub>2</sub>O<sub>3</sub>; khi đó cần 4Al.</li><li>Viết phương trình hoá học: <span class="math">4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub></span></li></ol>
      <div class="box tip">Chỉ thêm hệ số đứng trước công thức; <b>không</b> được thay đổi chỉ số trong công thức hoá học.</div>`,
      svg: S.flow({ items: ['Viết sơ đồ phản ứng', 'Cân bằng số nguyên tử mỗi nguyên tố (thêm hệ số)', 'Viết phương trình hoá học'], size: 14, label: 'Ba bước lập phương trình hoá học' }) },
    { title: 'Ý nghĩa của phương trình hoá học', html: `<p>Phương trình hoá học cho biết <b>tỉ lệ số nguyên tử, số phân tử</b> giữa các chất trong phản ứng (bằng tỉ lệ các hệ số).</p>
      <p>Ví dụ: 4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub>: số nguyên tử Al : số phân tử O<sub>2</sub> : số phân tử Al<sub>2</sub>O<sub>3</sub> = 4 : 3 : 2.</p>
      <p>Tỉ lệ này cũng là tỉ lệ <b>số mol</b> các chất, dùng để tính toán ở bài sau.</p>` }
  ],
  summary: 'Định luật bảo toàn khối lượng: tổng khối lượng sản phẩm = tổng khối lượng chất phản ứng (vì số nguyên tử mỗi nguyên tố giữ nguyên). Lập PTHH: viết sơ đồ – cân bằng bằng hệ số – viết phương trình. Hệ số cho biết tỉ lệ số nguyên tử, phân tử (và số mol).',
  examples: [
    { title: 'Áp dụng định luật', problem: 'Nung 100 g đá vôi (CaCO<sub>3</sub>) thu được 56 g vôi sống (CaO) và khí carbon dioxide. Tính khối lượng khí carbon dioxide.', solution: 'CaCO<sub>3</sub> → CaO + CO<sub>2</sub>. Theo định luật: m<sub>CO₂</sub> = 100 − 56 = 44 (g).' },
    { title: 'Lập phương trình', problem: 'Lập phương trình hoá học: Fe + Cl<sub>2</sub> ⟶ FeCl<sub>3</sub>.', solution: 'Cân bằng Cl: 3Cl<sub>2</sub> và 2FeCl<sub>3</sub> (6 nguyên tử Cl mỗi vế); cần 2Fe.<br>2Fe + 3Cl<sub>2</sub> → 2FeCl<sub>3</sub>.' },
    { title: 'Tỉ lệ các chất', problem: 'Cho phương trình 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O. Nêu tỉ lệ số phân tử các chất.', solution: 'Số phân tử H<sub>2</sub> : O<sub>2</sub> : H<sub>2</sub>O = 2 : 1 : 2.' }
  ],
  exercises: [
    { question: 'Đốt cháy hoàn toàn 3,2 g sulfur cần 3,2 g oxygen, thu được khí sulfur dioxide. Tính khối lượng sulfur dioxide.', hints: ['S + O<sub>2</sub> → SO<sub>2</sub>.', 'm<sub>SO₂</sub> = m<sub>S</sub> + m<sub>O₂</sub>.'], solution: 'm<sub>SO₂</sub> = 3,2 + 3,2 = 6,4 (g).' },
    { question: 'Lập phương trình hoá học: P + O<sub>2</sub> ⟶ P<sub>2</sub>O<sub>5</sub>.', hints: ['Bội chung nhỏ nhất của 2 và 5 là 10.', 'Có 5O<sub>2</sub> và 2P<sub>2</sub>O<sub>5</sub>; đếm số P.'], solution: '4P + 5O<sub>2</sub> → 2P<sub>2</sub>O<sub>5</sub>.' },
    { question: 'Lập phương trình hoá học: Na + H<sub>2</sub>O ⟶ NaOH + H<sub>2</sub>.', hints: ['Vế phải có 3 nguyên tử H, vế trái có 2.', 'Thử đặt hệ số 2 cho H<sub>2</sub>O và NaOH.'], solution: '2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong phản ứng hoá học, tổng khối lượng các sản phẩm bằng tổng khối lượng các chất phản ứng.', answer: true, explain: 'Đó là nội dung định luật bảo toàn khối lượng.' },
    { type: 'short', q: 'Cho 4,8 g magnesium tác dụng vừa đủ với 3,2 g oxygen tạo thành magnesium oxide. Khối lượng magnesium oxide thu được là bao nhiêu gam?', answer: '8', unit: 'g', calc: '4.8+3.2', explain: 'm<sub>MgO</sub> = 4,8 + 3,2 = 8 (g).' },
    { type: 'mcq', q: 'Hệ số thích hợp của O<sub>2</sub> trong phương trình 4Al + ?O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub> là:', options: ['2', '3', '4', '6'], answer: 1, calc: '2*3/2', explain: 'Vế phải có 2 · 3 = 6 nguyên tử O ⇒ cần 3O<sub>2</sub>.' },
    { type: 'mcq', q: 'Phương trình hoá học nào được lập đúng?', options: ['H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O', '2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O', 'H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O<sub>2</sub>O', 'H<sub>2</sub> + O → H<sub>2</sub>O<sub>2</sub>'], answer: 1, explain: 'Hai vế đều có 4 nguyên tử H và 2 nguyên tử O.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi cân bằng phương trình hoá học, có thể thay đổi chỉ số trong công thức hoá học.', answer: false, explain: 'Chỉ được thêm hệ số đứng trước công thức.' },
    { type: 'short', q: 'Nung 50 g CaCO<sub>3</sub> thu được 28 g CaO và khí CO<sub>2</sub>. Khối lượng khí CO<sub>2</sub> là bao nhiêu gam?', answer: '22', unit: 'g', calc: '50-28', explain: 'm<sub>CO₂</sub> = 50 − 28 = 22 (g).' },
    { type: 'mcq', q: 'Trong phương trình 2Fe + 3Cl<sub>2</sub> → 2FeCl<sub>3</sub>, tỉ lệ số nguyên tử Fe : số phân tử Cl<sub>2</sub> là:', options: ['1 : 1', '2 : 3', '3 : 2', '2 : 2'], answer: 1, explain: 'Bằng tỉ lệ hệ số 2 : 3.' },
    { type: 'short', q: 'Trong phương trình 4P + 5O<sub>2</sub> → 2P<sub>2</sub>O<sub>5</sub>, tổng số nguyên tử oxygen ở vế phải là bao nhiêu?', answer: '10', unit: 'nguyên tử', calc: '2*5', explain: '2 · 5 = 10 nguyên tử O (bằng 5 · 2 ở vế trái).' }
  ]
});
})();
