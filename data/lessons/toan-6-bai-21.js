/* Toán 6 – Bài 21. Hình có trục đối xứng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
function ax(p, q, e) { var dx = q[0] - p[0], dy = q[1] - p[1], d = Math.sqrt(dx * dx + dy * dy); e = e || 22; return [p[0] - dx / d * e, p[1] - dy / d * e, q[0] + dx / d * e, q[1] + dy / d * e]; }
function mid(a, b) { return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }
var T = S.shapePts('tamgiacdeu').pts, H = S.shapePts('lucgiacdeu').pts, V = S.shapePts('hinhvuong').pts;
var triAxes = [ax(T[0], mid(T[1], T[2])), ax(T[1], mid(T[2], T[0])), ax(T[2], mid(T[0], T[1]))];
var sqAxes = [[110, 25, 110, 185], [30, 105, 190, 105], ax(V[0], V[2], 14), ax(V[1], V[3], 14)];
var hexAxes = [ax(H[0], H[3], 12), ax(H[1], H[4], 12), ax(H[2], H[5], 12), ax(mid(H[0], H[1]), mid(H[3], H[4]), 12), ax(mid(H[1], H[2]), mid(H[4], H[5]), 12), ax(mid(H[2], H[3]), mid(H[5], H[0]), 12)];
function letter(ch, axes) { var it = [{ text: [60, 92, ch], size: 96, bold: true, color: S.C.blue }]; axes.forEach(function (a) { it.push({ axis: a === 'v' ? [60, 8, 60, 112] : [8, 58, 112, 58] }); }); return S.draw({ w: 120, h: 120, items: it }); }
THCS.registerLesson('toan-6/bai-21', {
  objectives: [
    'Nhận biết hình có trục đối xứng và trục đối xứng của hình.',
    'Chỉ ra được trục đối xứng của tam giác đều, hình vuông, hình chữ nhật, hình thoi, hình thang cân, lục giác đều.',
    'Nhận biết tính đối xứng trục trong tự nhiên, nghệ thuật, kiến trúc; vẽ được phần còn lại của hình đối xứng.'
  ],
  intro: 'Gấp đôi một tờ giấy, cắt một nét rồi mở ra: em được một hình mà hai nửa “soi gương” vào nhau. Con bướm, chiếc lá, Khuê Văn Các… đều có tính chất này.',
  steps: [
    { title: 'Trục đối xứng là gì?', html: `<p>Nếu gấp hình theo một đường thẳng d mà hai phần của hình <b>chồng khít</b> lên nhau thì hình đó có <b>trục đối xứng</b> là d.</p><p>Trong hình vẽ, trục đối xứng được biểu diễn bằng đường nét đứt màu đỏ. Các chữ A, M có trục đối xứng thẳng đứng; chữ B, E có trục đối xứng nằm ngang; chữ H có cả hai.</p>`,
      svg: S.row([{ svg: letter('A', ['v']), caption: 'Chữ A' }, { svg: letter('E', ['h']), caption: 'Chữ E' }, { svg: letter('H', ['v', 'h']), caption: 'Chữ H' }, { svg: letter('N', []), caption: 'Chữ N: không có' }]) },
    { title: 'Tam giác đều, hình vuông, lục giác đều', html: `<ul><li>Tam giác đều có <b>3</b> trục đối xứng (đi qua mỗi đỉnh và trung điểm cạnh đối diện).</li><li>Hình vuông có <b>4</b> trục đối xứng (2 đường chéo và 2 đường nối trung điểm các cạnh đối).</li><li>Lục giác đều có <b>6</b> trục đối xứng.</li></ul>`,
      svg: S.row([{ svg: S.shape('tamgiacdeu', { names: false, angles: false, axes: triAxes }), caption: '3 trục' }, { svg: S.shape('hinhvuong', { names: false, angles: false, axes: sqAxes }), caption: '4 trục' }, { svg: S.shape('lucgiacdeu', { names: false, axes: hexAxes }), caption: '6 trục' }]) },
    { title: 'Chữ nhật, thoi, thang cân, bình hành', html: `<ul><li>Hình chữ nhật (không vuông): <b>2</b> trục – hai đường nối trung điểm các cạnh đối.</li><li>Hình thoi (không vuông): <b>2</b> trục – hai đường chéo.</li><li>Hình thang cân: <b>1</b> trục – đường nối trung điểm hai đáy.</li><li>Hình bình hành (không phải chữ nhật, thoi): <b>không có</b> trục đối xứng.</li></ul>`,
      svg: S.row([{ svg: S.shape('hcn', { names: false, angles: false, axes: [[130, 12, 130, 158], [12, 85, 248, 85]] }), caption: 'Chữ nhật: 2 trục' }, { svg: S.shape('thoi', { names: false, axes: [[120, 6, 120, 184], [10, 95, 230, 95]] }), caption: 'Thoi: 2 trục' }, { svg: S.shape('thangcan', { names: false, axes: [[130, 12, 130, 158]] }), caption: 'Thang cân: 1 trục' }]) },
    { title: 'Vẽ hình đối xứng qua trục', html: `<p>Trên giấy kẻ ô vuông: với mỗi điểm của nửa hình đã cho, đếm số ô tới trục rồi đếm <b>đúng bằng ấy ô</b> về phía bên kia trục để được điểm đối xứng. Nối các điểm mới lại.</p>`,
      svg: S.draw({ w: 260, h: 200, items: [{ grid: [10, 10, 8, 6, 30] }, { axis: [130, 2, 130, 198] }, { poly: [[130, 40], [70, 70], [100, 130], [130, 160]], fill: S.C.blueL, color: S.C.blue }, { poly: [[130, 40], [190, 70], [160, 130], [130, 160]], fill: S.C.orangeL, color: S.C.orange, dash: true }] }),
      caption: 'Nửa màu xanh đã cho; nửa màu cam là phần đối xứng qua trục đỏ.' },
    { title: 'Đối xứng trong đời sống', html: `<p>Nhiều công trình kiến trúc (Khuê Văn Các, cổng trường), logo, hoa văn, lá cây, cánh bướm có trục đối xứng. Tính đối xứng tạo cảm giác cân đối, hài hoà.</p>` }
  ],
  summary: 'Hình có trục đối xứng d nếu gấp theo d hai phần chồng khít. Tam giác đều: 3 trục; hình vuông: 4; lục giác đều: 6; chữ nhật, thoi: 2; thang cân: 1; bình hành: không có.',
  examples: [
    { title: 'Chữ cái', problem: 'Trong các chữ cái in hoa T, K, S, O, chữ nào có trục đối xứng? Mỗi chữ có mấy trục?', solution: 'T: 1 trục (thẳng đứng). K: 1 trục (nằm ngang). S: <b>không có</b>. O (vòng tròn/hình bầu dục): 2 trục (thẳng đứng và nằm ngang).' },
    { title: 'Đếm trục', problem: 'Hình nào có nhiều trục đối xứng hơn: hình vuông hay hình chữ nhật (không vuông)?', solution: 'Hình vuông có 4 trục, hình chữ nhật có 2 trục ⇒ <b>hình vuông</b> nhiều hơn.' },
    { title: 'Đường tròn', problem: 'Đường tròn có bao nhiêu trục đối xứng?', solution: 'Mọi đường thẳng đi qua tâm đều là trục đối xứng ⇒ đường tròn có <b>vô số</b> trục đối xứng.' }
  ],
  exercises: [
    { question: 'Kể tên ba chữ số (từ 0 đến 9, viết kiểu chữ in trên màn hình điện tử 7 vạch) có trục đối xứng nằm ngang.', hints: ['Tưởng tượng gấp đôi chữ số theo đường ngang ở giữa.', 'Thử với 0, 1, 3, 8.'], solution: 'Ví dụ: <b>0, 1, 3, 8</b> (có trục ngang). Chữ số 8 và 0 còn có thêm trục dọc.' },
    { question: 'Hình thang cân ABCD (đáy AB, CD) có trục đối xứng d. Điểm A đối xứng với điểm nào qua d?', hints: ['d đi qua trung điểm hai đáy.', 'Gấp theo d, A chồng lên đỉnh nào của đáy AB?'], solution: 'A đối xứng với <b>B</b> (và D đối xứng với C).' },
    { question: 'Một hình vuông được tô một nửa theo đường chéo. Hình tạo bởi phần tô màu (tam giác vuông cân) có mấy trục đối xứng?', hints: ['Tam giác vuông cân có hai cạnh góc vuông bằng nhau.', 'Trục đi qua đỉnh góc vuông và trung điểm cạnh huyền.'], solution: '<b>1</b> trục đối xứng.' }
  ],
  quiz: [
    { type: 'short', q: 'Tam giác đều có bao nhiêu trục đối xứng?', answer: '3', explain: 'Ba trục qua mỗi đỉnh và trung điểm cạnh đối diện.' },
    { type: 'short', q: 'Hình vuông có bao nhiêu trục đối xứng?', answer: '4', explain: '2 đường chéo và 2 đường nối trung điểm cạnh đối.' },
    { type: 'mcq', q: 'Hình nào không có trục đối xứng?', options: ['Hình thang cân', 'Hình bình hành (không phải chữ nhật, thoi)', 'Hình thoi', 'Hình chữ nhật'], answer: 1, explain: 'Gấp theo đường nào hai phần hình bình hành cũng không chồng khít.' },
    { type: 'short', q: 'Lục giác đều có bao nhiêu trục đối xứng?', answer: '6', explain: '3 trục qua các đỉnh đối diện, 3 trục qua trung điểm các cạnh đối diện.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thang cân có đúng một trục đối xứng.', answer: true, explain: 'Trục là đường nối trung điểm hai đáy.' },
    { type: 'mcq', q: 'Chữ cái nào có trục đối xứng thẳng đứng?', options: ['F', 'M', 'N', 'S'], answer: 1, explain: 'Chữ M có trục thẳng đứng ở giữa.' },
    { type: 'mcq', q: 'Trục đối xứng của hình thoi (không vuông) là:', options: ['Hai đường chéo', 'Các cạnh', 'Đường nối trung điểm hai cạnh đối', 'Không có'], answer: 0, explain: 'Hai đường chéo của hình thoi là hai trục đối xứng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường tròn có vô số trục đối xứng.', answer: true, explain: 'Mọi đường kính đều là trục đối xứng.' }
  ]
});
})();
