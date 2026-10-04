/* Toán 6 – Chương V. Luyện tập chung (sau Bài 22). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
function letter(ch, axes, c) { var it = [{ text: [60, 92, ch], size: 96, bold: true, color: C.blue }]; axes.forEach(function (a) { it.push({ axis: a === 'v' ? [60, 8, 60, 112] : [8, 58, 112, 58] }); }); if (c) it.push({ pt: [60, 58, ''], color: C.red, r: 5 }); return S.draw({ w: 120, h: 120, items: it }); }
var rot = S.draw({ w: 260, h: 200, items: [{ grid: [10, 10, 8, 6, 30] },
  { poly: [[130, 100], [70, 100], [70, 40], [100, 40]], fill: C.blueL, color: C.blue },
  { poly: [[130, 100], [190, 100], [190, 160], [160, 160]], fill: C.orangeL, color: C.orange, dash: true },
  { pt: [130, 100, 'O', 10, -8], color: C.red, r: 5 }] });
THCS.registerLesson('toan-6/c5-ltc-1', {
  objectives: [
    'Củng cố nhận biết trục đối xứng và tâm đối xứng của hình phẳng, chữ cái, hình trong thực tế.',
    'Đếm được số trục đối xứng của các hình đã học; xác định được tâm đối xứng.',
    'Vẽ phần còn lại của hình để hình nhận một đường thẳng làm trục hoặc một điểm làm tâm đối xứng.'
  ],
  intro: 'Luyện tập Bài 21 và Bài 22: “gấp giấy” để kiểm tra trục đối xứng, “quay nửa vòng” để kiểm tra tâm đối xứng.',
  steps: [
    { title: 'Hai phép kiểm tra', html: `<ul><li><b>Trục đối xứng d</b>: gấp theo d, hai nửa chồng khít.</li><li><b>Tâm đối xứng O</b>: quay 180° quanh O, hình trùng với chính nó.</li></ul>` },
    { title: 'Chữ cái', html: `<p>Có chữ chỉ có trục (A, T), chỉ có tâm (N, S, Z), có cả hai (H, I, O, X), hoặc không có gì (F, G, R).</p>`,
      svg: S.row([{ svg: letter('T', ['v'], false), caption: 'T: 1 trục' }, { svg: letter('Z', [], true), caption: 'Z: có tâm' }, { svg: letter('H', ['v', 'h'], true), caption: 'H: 2 trục, có tâm' }, { svg: letter('F', [], false), caption: 'F: không có' }]),
      caption: 'Đường nét đứt đỏ là trục đối xứng; chấm đỏ là tâm đối xứng.' },
    { title: 'Bảng ghi nhớ', html: `<table class="tbl"><tr><th>Hình</th><th>Số trục</th><th>Tâm đối xứng</th></tr><tr><td>Tam giác đều</td><td>3</td><td>Không</td></tr><tr><td>Hình vuông</td><td>4</td><td>Có</td></tr><tr><td>Chữ nhật, thoi</td><td>2</td><td>Có</td></tr><tr><td>Bình hành</td><td>0</td><td>Có</td></tr><tr><td>Thang cân</td><td>1</td><td>Không</td></tr><tr><td>Lục giác đều</td><td>6</td><td>Có</td></tr><tr><td>Đường tròn</td><td>vô số</td><td>Có (tâm)</td></tr></table>` },
    { title: 'Vẽ hình đối xứng qua tâm', html: `<p>Với mỗi đỉnh M của phần đã có, lấy M' sao cho O là trung điểm MM' (trên lưới ô vuông: đếm số ô sang trái/phải, lên/xuống rồi đi ngược lại đúng bấy nhiêu ô). Nối các điểm M' theo thứ tự.</p>`,
      svg: rot, caption: 'Phần xanh quay 180° quanh O được phần cam (nét đứt).' }
  ],
  summary: 'Kiểm tra trục bằng gấp, kiểm tra tâm bằng quay 180°. Nhớ số trục đối xứng của từng hình và các hình có tâm đối xứng.',
  examples: [
    { title: 'Đếm trục', problem: 'Tổng số trục đối xứng của một hình vuông và một tam giác đều là bao nhiêu?', solution: '4 + 3 = <b>7</b>.' },
    { title: 'Vẽ trên lưới', problem: 'Trên lưới ở bước 4, đỉnh ở góc trên bên trái của phần xanh ứng với đỉnh nào của phần cam?', solution: 'Từ O đến đỉnh đó: sang trái 2 ô, lên trên 2 ô. Đi ngược lại từ O: sang phải 2 ô, xuống dưới 2 ô ⇒ đó là <b>đỉnh ở góc dưới bên phải</b> của phần cam.' },
    { title: 'Chữ số', problem: 'Trong các chữ số 0, 1, 3, 8 (viết kiểu điện tử), chữ số nào có cả trục ngang và trục dọc?', solution: '<b>0, 1 và 8</b>; chữ số 3 chỉ có trục ngang.' }
  ],
  exercises: [
    { question: 'Hình lục giác đều và hình chữ nhật có tổng cộng bao nhiêu trục đối xứng?', hints: ['Lục giác đều có 6 trục.', 'Hình chữ nhật có 2 trục.'], solution: '<b>8</b> trục.' },
    { question: 'Chữ nào trong từ “HOA” vừa có trục đối xứng vừa có tâm đối xứng?', hints: ['Xét từng chữ H, O, A.', 'Chữ A chỉ có trục dọc.'], solution: '<b>H và O</b>.' },
    { question: 'Hình thoi ABCD có tâm O, AC = 10 cm, BD = 6 cm. Tính OA + OB.', hints: ['O là trung điểm của AC và BD.', 'OA = 5 cm, OB = 3 cm.'], solution: 'OA + OB = <b>8 cm</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Hình vuông có bao nhiêu trục đối xứng?', answer: '4', explain: '2 đường chéo và 2 đường nối trung điểm cạnh đối.' },
    { type: 'mcq', q: 'Chữ cái nào có tâm đối xứng nhưng không có trục đối xứng?', options: ['H', 'N', 'A', 'O'], answer: 1, explain: 'N quay 180° vẫn là N nhưng không gấp khít được.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thang cân có một trục đối xứng và không có tâm đối xứng.', answer: true, explain: 'Trục là đường nối trung điểm hai đáy.' },
    { type: 'mcq', q: 'Hình nào có nhiều trục đối xứng nhất?', options: ['Tam giác đều', 'Hình vuông', 'Lục giác đều', 'Hình chữ nhật'], answer: 2, explain: 'Lục giác đều có 6 trục.' },
    { type: 'short', q: 'Hình chữ nhật có tâm O, AC = 14 cm. OA bằng bao nhiêu cm?', answer: '7', unit: 'cm', calc: '14/2', explain: 'O là trung điểm AC.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi hình có trục đối xứng đều có tâm đối xứng.', answer: false, explain: 'Tam giác đều có trục nhưng không có tâm.' },
    { type: 'short', q: 'Tổng số trục đối xứng của hình thoi và hình thang cân là bao nhiêu?', answer: '3', calc: '2+1', explain: '2 + 1 = 3.' },
    { type: 'mcq', q: 'Hai điểm M, M\' đối xứng qua O khi:', options: ['OM = 2OM\'', 'O là trung điểm MM\'', 'MM\' vuông góc với trục', 'O nằm ngoài đoạn MM\''], answer: 1, explain: 'Định nghĩa đối xứng qua tâm.' }
  ]
});
})();
