/* KHTN 7 – Bài 2. Nguyên tử. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-2', {
  objectives: [
    'Trình bày được mô hình nguyên tử của Rutherford – Bohr.',
    'Nêu được thành phần cấu tạo nguyên tử: hạt nhân (proton, neutron) và vỏ nguyên tử (electron).',
    'Nêu được điện tích và khối lượng gần đúng của các hạt; biết khối lượng nguyên tử tính theo amu.',
    'Mô tả được sự sắp xếp electron vào các lớp của một số nguyên tử đơn giản.'
  ],
  intro: 'Mọi vật quanh ta – cuốn vở, cốc nước, không khí, cả cơ thể em – đều được tạo nên từ những hạt vô cùng nhỏ gọi là <b>nguyên tử</b>. Nhỏ đến mức nào? Hàng triệu nguyên tử xếp thẳng hàng cũng chưa dài bằng bề dày một sợi tóc!',
  steps: [
    { title: 'Nguyên tử là gì?', html: `<p><b>Nguyên tử</b> là hạt vô cùng nhỏ, <b>trung hoà về điện</b>, tạo nên các chất.</p>
      <p>Nguyên tử gồm hai phần:</p><ul><li><b>Hạt nhân</b> ở tâm, mang điện tích dương.</li><li><b>Vỏ nguyên tử</b> gồm các <b>electron</b> mang điện tích âm, chuyển động xung quanh hạt nhân.</li></ul>`,
      svg: S.atomModel({ name: 'Nguyên tử carbon', p: 6, n: 6, shells: [2, 4] }), caption: 'Mô hình nguyên tử carbon: hạt nhân (+6) ở tâm, 6 electron xếp thành 2 lớp (không theo tỉ lệ).' },
    { title: 'Các loại hạt', html: `<table class="tbl"><tr><th>Hạt</th><th>Vị trí</th><th>Điện tích</th><th>Khối lượng gần đúng</th></tr>
      <tr><td>Proton (p)</td><td>Hạt nhân</td><td>+1</td><td>1 amu</td></tr>
      <tr><td>Neutron (n)</td><td>Hạt nhân</td><td>0 (không mang điện)</td><td>1 amu</td></tr>
      <tr><td>Electron (e)</td><td>Vỏ nguyên tử</td><td>−1</td><td>≈ 0,00055 amu (rất nhỏ)</td></tr></table>
      <div class="box key">Vì nguyên tử trung hoà về điện: <b>số proton = số electron</b>.</div>` },
    { title: 'Mô hình Rutherford – Bohr', html: `<p>Trong mô hình này, electron chuyển động quanh hạt nhân theo những quỹ đạo xác định, xếp thành từng <b>lớp</b>:</p>
      <ul><li>Lớp thứ nhất (gần hạt nhân nhất): tối đa <b>2</b> electron.</li><li>Lớp thứ hai: tối đa <b>8</b> electron.</li><li>Với 20 nguyên tố đầu tiên, lớp thứ ba chứa tối đa <b>8</b> electron.</li></ul>
      <p>Electron được xếp vào lớp trong trước, đầy rồi mới sang lớp ngoài.</p>
      <p>Ví dụ: carbon (6e): 2, 4 &nbsp;|&nbsp; oxygen (8e): 2, 6 &nbsp;|&nbsp; sodium (11e): 2, 8, 1.</p>`,
      svg: S.row([{ svg: S.atomModel({ name: 'Oxygen (O)', p: 8, n: 8, shells: [2, 6] }) }, { svg: S.atomModel({ name: 'Sodium (Na)', p: 11, n: 12, shells: [2, 8, 1] }) }]), caption: 'Sự sắp xếp electron theo lớp trong nguyên tử oxygen và sodium.' },
    { title: 'Khối lượng nguyên tử', html: `<p>Khối lượng nguyên tử rất nhỏ, nên người ta dùng đơn vị <b>amu</b> (atomic mass unit): 1 amu ≈ 1,6605 × 10<sup>−24</sup> g.</p>
      <p>Electron rất nhẹ nên khối lượng nguyên tử <b>tập trung chủ yếu ở hạt nhân</b>:</p>
      <p class="math">Khối lượng nguyên tử ≈ số p + số n (amu)</p>
      <p>Ví dụ: nguyên tử aluminium có 13 p và 14 n ⇒ khối lượng ≈ 27 amu.</p>` }
  ],
  summary: 'Nguyên tử = hạt nhân (proton +1, neutron 0) + vỏ (electron −1). Số p = số e. Lớp 1 tối đa 2e, lớp 2 tối đa 8e. Khối lượng nguyên tử ≈ p + n (amu).',
  examples: [
    { title: 'Tìm số electron', problem: 'Nguyên tử oxygen có 8 proton. Nguyên tử này có bao nhiêu electron? Vẽ sự phân bố electron theo lớp.', solution: 'Số e = số p = 8. Lớp 1: 2e; lớp 2: 6e (viết gọn: 2, 6). Lớp ngoài cùng có 6 electron.' },
    { title: 'Tính khối lượng nguyên tử', problem: 'Nguyên tử sodium có 11 proton và 12 neutron. Tính khối lượng nguyên tử theo amu.', solution: 'Khối lượng ≈ 11 + 12 = 23 (amu).' },
    { title: 'Phân bố electron', problem: 'Nguyên tử chlorine có 17 electron. Hãy cho biết số lớp electron và số electron lớp ngoài cùng.', solution: 'Phân bố: 2, 8, 7. Nguyên tử có 3 lớp electron, lớp ngoài cùng có 7 electron.' }
  ],
  exercises: [
    { question: 'Nguyên tử magnesium có 12 proton, 12 neutron. Tính số electron và khối lượng nguyên tử.', hints: ['Số e = số p.', 'Khối lượng nguyên tử ≈ số p + số n.'], solution: 'Số e = 12. Khối lượng ≈ 12 + 12 = 24 amu.' },
    { question: 'Viết sự phân bố electron theo lớp của nguyên tử nitrogen (7 electron).', hints: ['Lớp thứ nhất chứa tối đa 2 electron.', 'Số electron còn lại: 7 − 2 = 5, xếp vào lớp thứ hai.'], solution: '2, 5 – nitrogen có 2 lớp electron, lớp ngoài cùng có 5 electron.' },
    { question: 'Vì sao nói khối lượng nguyên tử tập trung chủ yếu ở hạt nhân?', hints: ['So sánh khối lượng electron với proton, neutron.', 'Electron chỉ nặng khoảng 0,00055 amu.'], solution: 'Vì proton và neutron (ở hạt nhân) đều nặng khoảng 1 amu, còn electron nhẹ hơn khoảng 1 800 lần, nên có thể bỏ qua khối lượng electron.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hạt nào mang điện tích âm?', options: ['Proton', 'Neutron', 'Electron', 'Hạt nhân'], answer: 2, explain: 'Electron mang điện tích −1.' },
    { type: 'mcq', q: 'Hạt nhân nguyên tử được tạo bởi:', options: ['Proton và electron', 'Proton và neutron', 'Neutron và electron', 'Chỉ electron'], answer: 1, explain: 'Hạt nhân gồm proton (+) và neutron (không mang điện).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong nguyên tử, số proton bằng số electron.', answer: true, explain: 'Nguyên tử trung hoà về điện nên số p = số e.' },
    { type: 'short', q: 'Nguyên tử carbon có 6 proton và 6 neutron. Khối lượng nguyên tử carbon là bao nhiêu amu?', answer: '12', unit: 'amu', calc: '6+6', explain: '6 + 6 = 12 amu.' },
    { type: 'short', q: 'Nguyên tử neon có 10 electron, xếp thành 2 lớp. Lớp thứ hai có bao nhiêu electron?', answer: '8', calc: '10-2', explain: 'Lớp 1 chứa 2 electron, lớp 2 chứa 10 − 2 = 8 electron (đã đủ tối đa).' },
    { type: 'mcq', q: 'Nguyên tử sodium (11 electron) có số electron ở lớp ngoài cùng là:', options: ['1', '2', '8', '3'], answer: 0, explain: 'Phân bố: 2, 8, 1. Lớp ngoài cùng có 1 electron.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Neutron mang điện tích dương.', answer: false, explain: 'Neutron không mang điện; proton mới mang điện tích dương.' },
    { type: 'short', q: 'Nguyên tử aluminium có 13 proton. Lớp ngoài cùng của nó có bao nhiêu electron?', answer: '3', calc: '13-2-8', explain: '13 electron phân bố: 2, 8, 3. Lớp ngoài cùng có 13 − 2 − 8 = 3 electron.' }
  ]
});
})();
