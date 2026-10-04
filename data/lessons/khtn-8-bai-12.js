/* KHTN 8 – Bài 12. Phân bón hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-12', {
  objectives: [
    'Nêu được vai trò của các nguyên tố dinh dưỡng N, P, K và vi lượng đối với cây trồng.',
    'Trình bày được thành phần, tác dụng của phân đạm, phân lân, phân kali, phân NPK.',
    'Đọc được thông tin trên nhãn bao phân bón; tính được hàm lượng nguyên tố dinh dưỡng đơn giản.',
    'Nêu được cách sử dụng phân bón hợp lí và ảnh hưởng của việc lạm dụng phân bón đến môi trường.'
  ],
  intro: 'Cây lúa hấp thụ từ đất các nguyên tố như nitrogen, phosphorus, potassium. Sau mỗi vụ mùa, đất nghèo dần các nguyên tố này. Phân bón hoá học giúp bổ sung chúng – nhưng dùng thế nào cho đúng?',
  steps: [
    { title: 'Vai trò của phân bón', html: `<p><b>Phân bón hoá học</b> là những hoá chất chứa các nguyên tố dinh dưỡng, được bón cho cây nhằm nâng cao năng suất cây trồng.</p>
      <ul><li><b>Nguyên tố đa lượng</b>: N, P, K (cây cần nhiều).</li><li><b>Nguyên tố trung lượng</b>: Ca, Mg, S.</li><li><b>Nguyên tố vi lượng</b>: Zn, Cu, B, Mo, Fe, Mn… (cây cần rất ít).</li></ul>` },
    { title: 'Phân đạm', html: `<p><b>Phân đạm</b> cung cấp nguyên tố nitrogen, giúp cây phát triển thân, lá (lá xanh tốt).</p>
      <table class="tbl"><tr><th>Phân đạm</th><th>Công thức</th><th>%N (tính)</th></tr><tr><td>Urea</td><td>(NH<sub>2</sub>)<sub>2</sub>CO</td><td>≈ 46,7 %</td></tr><tr><td>Ammonium nitrate</td><td>NH<sub>4</sub>NO<sub>3</sub></td><td>35 %</td></tr><tr><td>Ammonium sulfate</td><td>(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub></td><td>≈ 21,2 %</td></tr></table>
      <p>Ví dụ: urea có M = 60 g/mol, chứa 2 nguyên tử N ⇒ %N = {{28|60}} · 100 % ≈ 46,7 %. Phân urea bán trên thị trường thường ghi khoảng 46 % N.</p>` },
    { title: 'Phân lân, phân kali và phân NPK', html: `<ul><li><b>Phân lân</b> cung cấp phosphorus, giúp cây phát triển rễ, ra hoa, kết quả. Hàm lượng lân được tính theo % khối lượng P<sub>2</sub>O<sub>5</sub>. Ví dụ: supephosphate (chứa Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>).</li><li><b>Phân kali</b> cung cấp potassium, giúp cây cứng cáp, tăng khả năng chống chịu, tăng chất lượng quả. Hàm lượng kali tính theo % K<sub>2</sub>O. Ví dụ: KCl, K<sub>2</sub>SO<sub>4</sub>.</li><li><b>Phân hỗn hợp NPK</b> chứa cả ba nguyên tố N, P, K; nhãn ghi ba số, ví dụ NPK 16-16-8.</li></ul>`,
      svg: S.fertilizerBag({ n: 16, p: 16, k: 8 }), caption: 'Bao phân NPK 16-16-8: 16 % N, 16 % P₂O₅, 8 % K₂O theo khối lượng (bao minh hoạ).' },
    { title: 'Tính lượng dinh dưỡng từ nhãn', html: `<p>Bao phân NPK 16-16-8 nặng 50 kg chứa:</p><ul><li>N: 50 · 16 : 100 = 8 kg.</li><li>P<sub>2</sub>O<sub>5</sub>: 50 · 16 : 100 = 8 kg.</li><li>K<sub>2</sub>O: 50 · 8 : 100 = 4 kg.</li></ul>
      <p>Muốn cung cấp 23 kg N bằng urea (46 % N) cần: 23 : 46 · 100 = 50 kg urea.</p>`,
      svg: S.pieChart({ title: 'Thành phần bao NPK 16-16-8 (theo khối lượng)', parts: [{ label: 'N', v: 16, color: '#2563eb' }, { label: 'P₂O₅', v: 16, color: '#d97706' }, { label: 'K₂O', v: 8, color: '#7c3aed' }, { label: 'Thành phần khác', v: 60, color: '#d1d5db' }] }) },
    { title: 'Sử dụng phân bón hợp lí', html: `<ul><li>Bón <b>đúng loại, đúng lượng, đúng lúc, đúng cách</b> (nguyên tắc “4 đúng”).</li><li>Bón thừa phân đạm làm cây yếu, dễ sâu bệnh; phần phân dư bị rửa trôi gây ô nhiễm nguồn nước, làm đất bị chua, chai cứng.</li><li>Kết hợp phân hoá học với phân hữu cơ để cải tạo đất.</li><li>Bảo quản phân nơi khô ráo; đeo găng tay, khẩu trang khi bón.</li></ul>` }
  ],
  summary: 'Phân đạm (N): thân, lá; phân lân (P, tính theo % P<sub>2</sub>O<sub>5</sub>): rễ, hoa, quả; phân kali (K, tính theo % K<sub>2</sub>O): cứng cây, chống chịu. NPK a-b-c: a % N, b % P<sub>2</sub>O<sub>5</sub>, c % K<sub>2</sub>O. Bón “4 đúng” để tránh lãng phí và ô nhiễm môi trường.',
  examples: [
    { title: 'Tính %N', problem: 'Tính phần trăm khối lượng nitrogen trong NH<sub>4</sub>NO<sub>3</sub> (N = 14, H = 1, O = 16).', solution: 'M = 2 · 14 + 4 + 3 · 16 = 80 g/mol. %N = {{28|80}} · 100 % = 35 %.' },
    { title: 'Đọc nhãn', problem: 'Bao phân NPK 20-20-15 nặng 25 kg chứa bao nhiêu kg N?', solution: 'm<sub>N</sub> = 25 · 20 : 100 = 5 (kg).' },
    { title: 'Chọn phân', problem: 'Cây rau ăn lá (rau cải, rau muống) cần bón nhiều loại phân nào? Vì sao?', solution: 'Phân đạm, vì nitrogen giúp cây phát triển thân, lá.' }
  ],
  exercises: [
    { question: 'Tính phần trăm khối lượng N trong (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> (làm tròn một chữ số thập phân).', hints: ['M = 2 · (14 + 4) + 32 + 64 = 132 g/mol.', '%N = 28 : 132 · 100 %.'], solution: '%N ≈ 21,2 %.' },
    { question: 'Cần bao nhiêu kg urea (46 % N) để cung cấp 9,2 kg nitrogen cho ruộng?', hints: ['m<sub>urea</sub> · 46 % = 9,2 kg.', 'm = 9,2 : 46 · 100.'], solution: 'm = 9,2 · 100 : 46 = 20 (kg).' },
    { question: 'Nêu hai tác hại của việc bón quá nhiều phân đạm.', hints: ['Ảnh hưởng đến cây.', 'Ảnh hưởng đến môi trường nước, đất.'], solution: 'Cây phát triển lá quá mức, yếu, dễ đổ, dễ sâu bệnh; phân dư bị rửa trôi gây ô nhiễm nguồn nước, làm đất chua.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phân đạm cung cấp nguyên tố nitrogen cho cây.', answer: true, explain: 'Phân đạm chứa N.' },
    { type: 'mcq', q: 'Hàm lượng dinh dưỡng của phân lân được tính theo % khối lượng của:', options: ['P', 'P<sub>2</sub>O<sub>5</sub>', 'H<sub>3</sub>PO<sub>4</sub>', 'K<sub>2</sub>O'], answer: 1, explain: 'Quy ước tính theo P<sub>2</sub>O<sub>5</sub>.' },
    { type: 'short', q: 'Phần trăm khối lượng N trong urea (NH<sub>2</sub>)<sub>2</sub>CO (M = 60 g/mol) là bao nhiêu %? (làm tròn đến một chữ số thập phân)', answer: '46,7', unit: '%', calc: 'round(28/60*100, 1)', explain: '28 : 60 · 100 % ≈ 46,7 %.' },
    { type: 'short', q: 'Bao phân NPK 16-16-8 nặng 50 kg chứa bao nhiêu kg K<sub>2</sub>O?', answer: '4', unit: 'kg', calc: '50*8/100', explain: '50 · 8 : 100 = 4 kg.' },
    { type: 'mcq', q: 'Loại phân giúp cây ra hoa, kết quả và phát triển rễ là:', options: ['phân đạm', 'phân lân', 'phân kali', 'phân vi lượng'], answer: 1, explain: 'Phosphorus giúp rễ phát triển, cây ra hoa, kết quả.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bón càng nhiều phân hoá học thì năng suất càng cao và không ảnh hưởng đến môi trường.', answer: false, explain: 'Bón thừa gây lãng phí, hại cây và ô nhiễm môi trường.' },
    { type: 'short', q: 'Cần bao nhiêu kg urea (46 % N) để cung cấp 23 kg N?', answer: '50', unit: 'kg', calc: '23/46*100', explain: '23 : 46 · 100 = 50 kg.' },
    { type: 'mcq', q: 'Chất nào là phân kali?', options: ['KCl', 'NH<sub>4</sub>NO<sub>3</sub>', 'Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>', '(NH<sub>2</sub>)<sub>2</sub>CO'], answer: 0, explain: 'KCl cung cấp potassium.' }
  ]
});
})();
