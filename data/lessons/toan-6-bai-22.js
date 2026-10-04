/* Toán 6 – Bài 22. Hình có tâm đối xứng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var P = S.shapePts('binhhanh').pts, O = [135, 85];
function letter(ch, c) { var it = [{ text: [60, 92, ch], size: 96, bold: true, color: S.C.blue }]; if (c) it.push({ pt: [60, 58, ''], color: S.C.red, r: 5 }); return S.draw({ w: 120, h: 120, items: it }); }
THCS.registerLesson('toan-6/bai-22', {
  objectives: [
    'Nhận biết hình có tâm đối xứng và tâm đối xứng của hình.',
    'Chỉ ra tâm đối xứng của hình bình hành, hình chữ nhật, hình thoi, hình vuông, lục giác đều, đường tròn.',
    'Phân biệt hình có trục đối xứng và hình có tâm đối xứng; nhận biết tính đối xứng tâm trong thực tế.'
  ],
  intro: 'Quay một cánh quạt ba lá nửa vòng thì nó không trùng hình cũ, nhưng quay chữ S nửa vòng thì vẫn thấy chữ S! Những hình như chữ S có một “tâm” đặc biệt.',
  steps: [
    { title: 'Tâm đối xứng là gì?', html: `<p>Nếu quay hình <b>nửa vòng (180°)</b> quanh điểm O mà hình trùng khít với chính nó ở vị trí ban đầu thì O là <b>tâm đối xứng</b> của hình.</p><p>Các chữ S, N, Z, H, O có tâm đối xứng (chấm đỏ); chữ A, T không có.</p>`,
      svg: S.row([{ svg: letter('S', true), caption: 'Chữ S' }, { svg: letter('N', true), caption: 'Chữ N' }, { svg: letter('Z', true), caption: 'Chữ Z' }, { svg: letter('A', false), caption: 'Chữ A: không có' }]) },
    { title: 'Điểm đối xứng qua tâm', html: `<p>Hai điểm M và M' đối xứng qua O khi O là <b>trung điểm</b> của đoạn MM'. Với hình bình hành ABCD, giao điểm O của hai đường chéo là tâm đối xứng: A đối xứng với C, B đối xứng với D qua O.</p>`,
      svg: S.shape('binhhanh', { diag: true, center: 'O', extra: [{ seg: [100, 55, 170, 115], color: S.C.orange, dash: true, width: 1.6 }, { pt: [100, 55, 'M', -4, -8], color: S.C.orange }, { pt: [170, 115, "M'", 8, 16], color: S.C.orange }] }),
      caption: 'Hình bình hành ABCD có tâm đối xứng O; M và M\' đối xứng qua O.' },
    { title: 'Các hình có tâm đối xứng', html: `<ul><li>Hình bình hành, hình chữ nhật, hình thoi, hình vuông: tâm là <b>giao điểm hai đường chéo</b>.</li><li>Lục giác đều: tâm là giao điểm ba đường chéo chính.</li><li>Đường tròn: tâm đối xứng chính là tâm đường tròn.</li><li><b>Không có</b> tâm đối xứng: tam giác đều, hình thang cân (không phải hình bình hành).</li></ul>`,
      svg: S.row([{ svg: S.shape('hcn', { names: false, angles: false, diag: true, center: 'O' }), caption: 'Hình chữ nhật' }, { svg: S.shape('thoi', { names: false, diag: true, center: 'O' }), caption: 'Hình thoi' }, { svg: S.shape('lucgiacdeu', { names: false, diag: true, center: 'O' }), caption: 'Lục giác đều' }]) },
    { title: 'So sánh hai loại đối xứng', html: `<table class="tbl"><tr><th>Hình</th><th>Số trục đối xứng</th><th>Có tâm đối xứng?</th></tr><tr><td>Tam giác đều</td><td>3</td><td>Không</td></tr><tr><td>Hình vuông</td><td>4</td><td>Có</td></tr><tr><td>Chữ nhật</td><td>2</td><td>Có</td></tr><tr><td>Thoi</td><td>2</td><td>Có</td></tr><tr><td>Bình hành</td><td>0</td><td>Có</td></tr><tr><td>Thang cân</td><td>1</td><td>Không</td></tr><tr><td>Lục giác đều</td><td>6</td><td>Có</td></tr></table>` }
  ],
  summary: 'O là tâm đối xứng của hình nếu quay hình 180° quanh O thì hình trùng với chính nó. Bình hành, chữ nhật, thoi, vuông có tâm đối xứng là giao điểm hai đường chéo; lục giác đều, đường tròn có tâm đối xứng; tam giác đều, thang cân không có.',
  examples: [
    { title: 'Chữ cái', problem: 'Trong các chữ cái I, K, X, E, chữ nào có tâm đối xứng?', solution: '<b>I và X</b> có tâm đối xứng (quay 180° vẫn như cũ). K và E không có.' },
    { title: 'Tìm điểm đối xứng', problem: 'Hình chữ nhật ABCD có tâm đối xứng O. Điểm đối xứng với B qua O là điểm nào? Vì sao?', solution: 'O là trung điểm đường chéo BD nên điểm đối xứng với B qua O là <b>D</b>.' },
    { title: 'Phân biệt', problem: 'Hình bình hành có trục đối xứng không? Có tâm đối xứng không?', solution: 'Hình bình hành (không phải chữ nhật hay thoi) <b>không có trục đối xứng</b> nhưng <b>có tâm đối xứng</b> là giao điểm hai đường chéo.' }
  ],
  exercises: [
    { question: 'Trong các số 69, 88, 96, 101, số nào khi quay 180° vẫn giữ nguyên (xem như có tâm đối xứng, viết kiểu chữ số điện tử)?', hints: ['Quay 180°: 6 thành 9, 9 thành 6, 8 vẫn là 8, 1 vẫn là 1, 0 vẫn là 0.', 'Thứ tự chữ số cũng bị đảo ngược.'], solution: '<b>69, 88, 96, 101</b> đều giữ nguyên: 69 → 69; 88 → 88; 96 → 96; 101 → 101.' },
    { question: 'Hình vuông ABCD có tâm O, OA = 4 cm. Tính AC.', hints: ['O là tâm đối xứng nên O là trung điểm AC.', 'AC = 2 · OA.'], solution: 'AC = <b>8 cm</b>.' },
    { question: 'Hình nào vừa có trục đối xứng vừa có tâm đối xứng: tam giác đều, hình thang cân, hình thoi?', hints: ['Tam giác đều và thang cân có trục nhưng không có tâm.', 'Hình thoi có 2 trục và có tâm.'], solution: '<b>Hình thoi</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Tâm đối xứng của hình bình hành là:', options: ['Một đỉnh', 'Giao điểm hai đường chéo', 'Trung điểm một cạnh', 'Không có'], answer: 1, explain: 'Giao điểm hai đường chéo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tam giác đều có tâm đối xứng.', answer: false, explain: 'Quay tam giác đều 180° thì đỉnh chĩa xuống, không trùng hình cũ.' },
    { type: 'mcq', q: 'Chữ cái nào có tâm đối xứng?', options: ['A', 'Z', 'T', 'V'], answer: 1, explain: 'Chữ Z quay 180° vẫn là Z.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thang cân có tâm đối xứng.', answer: false, explain: 'Hình thang cân chỉ có trục đối xứng.' },
    { type: 'short', q: 'Hình chữ nhật có tâm O, OB = 6 cm. Độ dài đường chéo BD là bao nhiêu cm?', answer: '12', unit: 'cm', calc: '2*6', explain: 'O là trung điểm BD: BD = 12 cm.' },
    { type: 'mcq', q: 'Hình nào có tâm đối xứng nhưng không có trục đối xứng?', options: ['Hình vuông', 'Hình bình hành (không phải chữ nhật, thoi)', 'Hình thang cân', 'Tam giác đều'], answer: 1, explain: 'Hình bình hành thông thường.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu M và M\' đối xứng nhau qua O thì O là trung điểm của MM\'.', answer: true, explain: 'Đó là định nghĩa hai điểm đối xứng qua một điểm.' },
    { type: 'mcq', q: 'Quay hình quanh tâm đối xứng một góc bao nhiêu độ thì hình trùng với chính nó?', options: ['90°', '180°', '60°', '45°'], answer: 1, calc: '180', explain: 'Nửa vòng quay: 180°.' }
  ]
});
})();
