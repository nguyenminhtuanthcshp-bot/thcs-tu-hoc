/* Toán 8 – Bài 12. Hình bình hành. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [60, 180], B = [250, 180], Cc = [320, 60], D = [130, 60], O = G.mid(A, Cc);
  THCS.registerLesson('toan-8/bai-12', {
    objectives: [
      'Nhận biết được hình bình hành.',
      'Giải thích được các tính chất về cạnh, góc, đường chéo của hình bình hành.',
      'Nhận biết được các dấu hiệu để một tứ giác là hình bình hành.',
      'Vận dụng tính chất và dấu hiệu nhận biết để chứng minh, tính toán.'
    ],
    intro: 'Hàng rào xếp, cầu thang cuốn nhìn nghiêng, mắt lưới… có dạng hình bình hành. Hình bình hành có những tính chất đối xứng rất đẹp.',
    steps: [
      { title: 'Định nghĩa', html: `<p><b>Hình bình hành</b> là tứ giác có các cạnh đối song song: AB // CD và AD // BC.</p><p>Hình bình hành là một hình thang đặc biệt (hình thang có hai cạnh bên song song).</p>`,
        svg: S.geo({ w: 380, h: 220, P: { A: A, B: B, C: Cc, D: D }, seg: ['AB', 'BC', 'CD', 'DA'], fill: [['ABCD', C.blueL]], parallel: [['AB', 1], ['DC', 1], ['AD', 2], ['BC', 2]] }), caption: 'Hình bình hành ABCD: AB // CD, AD // BC.' },
      { title: 'Tính chất', html: `<p>Trong hình bình hành:</p><ol><li>Các cạnh đối <b>bằng nhau</b>.</li><li>Các góc đối <b>bằng nhau</b>.</li><li>Hai đường chéo <b>cắt nhau tại trung điểm</b> của mỗi đường.</li></ol>
        <p>Chứng minh (1), (2): đường chéo AC chia hình bình hành thành ΔABC và ΔCDA bằng nhau (g.c.g: ∠BAC = ∠DCA, AC chung, ∠BCA = ∠DAC).</p>`,
        svg: S.geo({ w: 380, h: 220, P: { A: A, B: B, C: Cc, D: D, O: O }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'AC', color: C.red }, { s: 'BD', color: C.blue }], ticks: [['AO', 1, C.red], ['OC', 1, C.red], ['BO', 2, C.blue], ['OD', 2, C.blue]], off: { O: [0, -12] } }), caption: 'O là trung điểm của AC và của BD.' },
      { title: 'Dấu hiệu nhận biết', html: `<p>Một tứ giác là hình bình hành nếu có một trong các điều kiện:</p><ol><li>Các cạnh đối song song (định nghĩa).</li><li>Các cạnh đối bằng nhau.</li><li><b>Hai cạnh đối song song và bằng nhau.</b></li><li>Các góc đối bằng nhau.</li><li>Hai đường chéo cắt nhau tại trung điểm của mỗi đường.</li></ol>` },
      { title: 'Tâm đối xứng', html: `<p>Giao điểm O của hai đường chéo là <b>tâm đối xứng</b> của hình bình hành: mỗi điểm của hình có điểm đối xứng qua O cũng thuộc hình.</p>
        <div class="box tip">Hai góc kề một cạnh của hình bình hành luôn bù nhau (vì là hai góc trong cùng phía).</div>` },
      { title: 'Chiến lược chứng minh', html: `<p>Khi đề bài cho <b>trung điểm</b>, nghĩ đến dấu hiệu 5 (đường chéo); khi cho <b>song song và bằng nhau</b>, dùng dấu hiệu 3 – thường ngắn gọn nhất.</p>` }
    ],
    summary: 'Hình bình hành: cạnh đối song song. Tính chất: cạnh đối bằng nhau, góc đối bằng nhau, đường chéo cắt nhau tại trung điểm mỗi đường. Có 5 dấu hiệu nhận biết.',
    examples: [
      { title: 'Tính góc và cạnh', problem: 'Hình bình hành ABCD có AB = 7 cm, BC = 4 cm, ∠A = 55°. Tính CD, AD và các góc.', solution: 'CD = AB = 7 cm, AD = BC = 4 cm. ∠C = ∠A = 55°; ∠B = ∠D = 180° − 55° = 125°.' },
      { title: 'Chứng minh bằng đường chéo', problem: 'Cho tam giác ABC, M là trung điểm BC. Trên tia đối của tia MA lấy D sao cho MD = MA. Chứng minh ABDC là hình bình hành.', solution: 'Tứ giác ABDC có hai đường chéo AD và BC cắt nhau tại M, mà M là trung điểm của mỗi đường nên ABDC là hình bình hành.' },
      { title: 'Chứng minh bằng song song và bằng nhau', problem: 'Hình bình hành ABCD; E, F lần lượt là trung điểm AB, CD. Chứng minh AECF là hình bình hành.', solution: 'AE // CF (vì AB // CD) và AE = {{1|2}}AB = {{1|2}}CD = CF. Tứ giác có hai cạnh đối song song và bằng nhau nên là hình bình hành.' }
    ],
    exercises: [
      { question: 'Hình bình hành MNPQ có ∠M − ∠N = 40°. Tính các góc.', hints: ['∠M + ∠N = 180° (hai góc kề).', 'Giải hệ tổng – hiệu: ∠M = (180° + 40°) : 2.'], solution: '∠M = ∠P = 110°, ∠N = ∠Q = 70°.' },
      { question: 'Hình bình hành ABCD có hai đường chéo cắt nhau tại O, AC = 10 cm, BD = 6 cm. Tính OA, OB.', hints: ['O là trung điểm của mỗi đường chéo.', 'OA = AC : 2, OB = BD : 2.'], solution: 'OA = 5 cm, OB = 3 cm.' },
      { question: 'Hình bình hành có chu vi 30 cm, một cạnh dài hơn cạnh kề 3 cm. Tính độ dài các cạnh.', hints: ['Nửa chu vi là tổng hai cạnh kề: 15 cm.', 'Cạnh dài = (15 + 3) : 2.'], solution: 'Hai cạnh kề dài 9 cm và 6 cm.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Hình bình hành là tứ giác có:', options: ['Hai cạnh đối song song', 'Các cạnh đối song song', 'Hai đường chéo bằng nhau', 'Bốn cạnh bằng nhau'], answer: 1, explain: 'Cả hai cặp cạnh đối đều song song.' },
      { type: 'short', calc: '180 - 55', q: 'Hình bình hành ABCD có ∠A = 55°. Tính ∠B (độ).', unit: 'độ', answer: '125', explain: 'Hai góc kề bù nhau.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường chéo của hình bình hành luôn bằng nhau.', answer: false, explain: 'Chúng cắt nhau tại trung điểm mỗi đường nhưng nói chung không bằng nhau.' },
      { type: 'short', calc: '10 / 2', q: 'Hình bình hành ABCD có đường chéo AC = 10 cm, cắt BD tại O. Tính OA (cm).', unit: 'cm', answer: '5', explain: 'O là trung điểm AC.' },
      { type: 'mcq', q: 'Tứ giác nào chắc chắn là hình bình hành?', options: ['Tứ giác có hai cạnh đối bằng nhau', 'Tứ giác có hai cạnh đối song song và bằng nhau', 'Tứ giác có hai góc kề bằng nhau', 'Tứ giác có hai đường chéo vuông góc'], answer: 1, explain: 'Dấu hiệu 3.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giao điểm hai đường chéo là tâm đối xứng của hình bình hành.', answer: true, explain: 'Tính chất đối xứng tâm.' },
      { type: 'short', calc: '(15 + 3) / 2', q: 'Hình bình hành có chu vi 30 cm, một cạnh dài hơn cạnh kề 3 cm. Cạnh dài hơn bằng bao nhiêu cm?', unit: 'cm', answer: '9', explain: 'Hai cạnh kề có tổng 15 cm, hiệu 3 cm.' },
      { type: 'mcq', q: 'Tam giác ABC, M là trung điểm BC, D đối xứng với A qua M. Tứ giác ABDC là:', options: ['Hình thang cân', 'Hình bình hành', 'Tứ giác bất kì', 'Hình thang vuông'], answer: 1, explain: 'Hai đường chéo AD, BC cắt nhau tại trung điểm M của mỗi đường.' }
    ]
  });
})();
