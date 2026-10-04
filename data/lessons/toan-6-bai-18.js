/* Toán 6 – Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-18', {
  objectives: [
    'Nhận dạng được tam giác đều, hình vuông, lục giác đều trong thực tế.',
    'Mô tả được các yếu tố cơ bản: cạnh, góc, đường chéo của các hình đó.',
    'Vẽ được tam giác đều, hình vuông bằng thước thẳng, ê ke, compa; tạo lục giác đều từ 6 tam giác đều.'
  ],
  intro: 'Biển báo “đường ưu tiên” hình tam giác, viên gạch lát hình vuông, tổ ong hình lục giác… Các hình “đều” xuất hiện khắp nơi vì chúng cân đối và ghép khít với nhau rất tốt.',
  steps: [
    { title: 'Tam giác đều', html: `<p>Tam giác đều ABC có:</p><ul><li>Ba cạnh bằng nhau: AB = BC = CA (các gạch nhỏ cùng số chỉ các cạnh bằng nhau).</li><li>Ba góc bằng nhau, mỗi góc bằng <b>60°</b>.</li></ul>`,
      svg: S.shape('tamgiacdeu', { angleLabel: '60°' }), caption: 'Tam giác đều ABC.' },
    { title: 'Hình vuông', html: `<p>Hình vuông ABCD có:</p><ul><li>Bốn cạnh bằng nhau: AB = BC = CD = DA.</li><li>Bốn góc bằng nhau và đều là <b>góc vuông</b>.</li><li>Hai cạnh đối song song: AB ∥ CD, AD ∥ BC.</li><li>Hai đường chéo AC và BD <b>bằng nhau</b>, vuông góc và cắt nhau tại trung điểm mỗi đường.</li></ul>`,
      svg: S.shape('hinhvuong', { diag: true }), caption: 'Hình vuông ABCD với hai đường chéo AC, BD.' },
    { title: 'Lục giác đều', html: `<p>Lục giác đều ABCDEF có:</p><ul><li>Sáu cạnh bằng nhau.</li><li>Sáu góc bằng nhau (mỗi góc 120°).</li><li>Ba đường chéo chính AD, BE, CF bằng nhau và cắt nhau tại tâm O.</li></ul><p>Các đường chéo chính chia lục giác đều thành <b>6 tam giác đều</b> bằng nhau, nên đường chéo chính dài gấp đôi cạnh.</p>`,
      svg: S.shape('lucgiacdeu', { diag: true, center: 'O' }), caption: 'Lục giác đều ABCDEF, tâm O.' },
    { title: 'Vẽ tam giác đều cạnh 3 cm', html: `<ol><li>Dùng thước vẽ đoạn thẳng AB = 3 cm.</li><li>Dùng compa vẽ cung tròn tâm A bán kính 3 cm, rồi cung tròn tâm B bán kính 3 cm; hai cung cắt nhau tại C.</li><li>Nối C với A và B. Ta được tam giác đều ABC.</li></ol><p>(Cũng có thể dùng thước đo góc: vẽ góc 60° tại A và tại B.)</p>` },
    { title: 'Vẽ hình vuông cạnh 4 cm', html: `<ol><li>Vẽ đoạn AB = 4 cm.</li><li>Đặt ê ke sao cho đỉnh góc vuông trùng A, vẽ đoạn AD = 4 cm vuông góc với AB.</li><li>Làm tương tự tại B, vẽ BC = 4 cm vuông góc với AB (cùng phía với D).</li><li>Nối C với D, được hình vuông ABCD.</li></ol>` }
  ],
  summary: 'Tam giác đều: 3 cạnh bằng nhau, 3 góc bằng 60°. Hình vuông: 4 cạnh bằng nhau, 4 góc vuông, 2 đường chéo bằng nhau. Lục giác đều: 6 cạnh bằng nhau, 6 góc bằng nhau, 3 đường chéo chính bằng nhau và chia hình thành 6 tam giác đều.',
  examples: [
    { title: 'Nhận dạng', problem: 'Trong các đồ vật: mặt bàn cờ vua, biển báo “Giao nhau với đường ưu tiên”, ô trong tổ ong, mặt đồng hồ tròn — đồ vật nào có dạng hình vuông, tam giác đều, lục giác đều?', solution: 'Mặt bàn cờ vua: <b>hình vuông</b>. Biển báo: <b>tam giác đều</b>. Ô tổ ong: <b>lục giác đều</b>. Mặt đồng hồ tròn không thuộc các hình trên.' },
    { title: 'Tính độ dài', problem: 'Lục giác đều ABCDEF có cạnh 5 cm. Tính độ dài đường chéo chính AD.', solution: 'Đường chéo chính gồm hai cạnh của hai tam giác đều ghép lại: AD = 2 · 5 = <b>10 cm</b>.' },
    { title: 'Ghép hình', problem: 'Cần bao nhiêu tam giác đều cạnh 2 cm để ghép thành một lục giác đều cạnh 2 cm? Tính tổng độ dài các cạnh của lục giác đó.', solution: 'Cần <b>6 tam giác đều</b>. Lục giác có 6 cạnh, mỗi cạnh 2 cm: tổng 6 · 2 = <b>12 cm</b>.' }
  ],
  exercises: [
    { question: 'Hình vuông ABCD có AC = 6 cm. Tính BD.', hints: ['Nhớ lại tính chất hai đường chéo của hình vuông.', 'Hai đường chéo bằng nhau.'], solution: 'BD = AC = <b>6 cm</b>.' },
    { question: 'Một khung tranh hình tam giác đều có cạnh 45 cm. Cần bao nhiêu xăng-ti-mét nẹp gỗ để làm viền khung?', hints: ['Viền khung gồm 3 cạnh.', '3 cạnh bằng nhau.'], solution: '3 · 45 = <b>135 cm</b>.' },
    { question: 'Lục giác đều có đường chéo chính dài 14 cm. Tính độ dài mỗi cạnh.', hints: ['Đường chéo chính gấp đôi cạnh.', 'Cạnh = 14 : 2.'], solution: '<b>7 cm</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Mỗi góc của tam giác đều bằng bao nhiêu độ?', answer: '60', unit: '°', calc: '180/3', explain: 'Ba góc bằng nhau, mỗi góc 60°.' },
    { type: 'mcq', q: 'Hình vuông có mấy góc vuông?', options: ['2', '3', '4', '1'], answer: 2, calc: '4', explain: 'Cả bốn góc của hình vuông đều vuông.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường chéo của hình vuông bằng nhau.', answer: true, explain: 'Đây là tính chất của hình vuông.' },
    { type: 'short', q: 'Lục giác đều được chia thành bao nhiêu tam giác đều bởi ba đường chéo chính?', answer: '6', explain: 'Ba đường chéo chính chia lục giác đều thành 6 tam giác đều.' },
    { type: 'short', q: 'Lục giác đều cạnh 4 cm có đường chéo chính dài bao nhiêu xăng-ti-mét?', answer: '8', unit: 'cm', calc: '2*4', explain: '2 · 4 = 8 cm.' },
    { type: 'mcq', q: 'Hình nào có tất cả các cạnh bằng nhau và các góc đều bằng 120°?', options: ['Tam giác đều', 'Hình vuông', 'Lục giác đều', 'Hình chữ nhật'], answer: 2, explain: 'Mỗi góc của lục giác đều bằng 120°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể vẽ tam giác đều chỉ bằng thước thẳng và compa.', answer: true, explain: 'Vẽ cạnh AB rồi hai cung tròn bán kính AB tâm A, tâm B.' },
    { type: 'short', q: 'Tổng độ dài các cạnh của hình vuông cạnh 9 cm là bao nhiêu xăng-ti-mét?', answer: '36', unit: 'cm', calc: '4*9', explain: '4 · 9 = 36 cm.' }
  ]
});
})();
