/* Toán 6 – Bài 35. Trung điểm của đoạn thẳng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var midFig = S.draw({ w: 420, h: 110, items: [{ seg: [60, 55, 360, 55], width: 2.6 }, { pt: [60, 55, 'A', 0, 26] }, { pt: [210, 55, 'M', 0, 26], color: C.red }, { pt: [360, 55, 'B', 0, 26] }, { tick: [60, 55, 210, 55], n: 1 }, { tick: [210, 55, 360, 55], n: 1 }, { text: [135, 38, '4 cm'], color: C.blue, bold: true, size: 13 }, { text: [285, 38, '4 cm'], color: C.blue, bold: true, size: 13 }], aria: 'M là trung điểm của AB' });
var fold = S.draw({ w: 420, h: 150, items: [{ poly: [[60, 40], [360, 40], [360, 110], [60, 110]], fill: C.yellowL, color: C.muted, width: 1.4 }, { seg: [60, 75, 360, 75], width: 2.4, color: C.blue }, { axis: [210, 25, 210, 125] }, { pt: [60, 75, 'A', -14, 5] }, { pt: [360, 75, 'B', 14, 5] }, { pt: [210, 75, 'M', 12, -8], color: C.red }, { text: [210, 145, 'nếp gấp'], color: C.red, size: 13 }], aria: 'Gấp giấy để tìm trung điểm' });
THCS.registerLesson('toan-6/bai-35', {
  objectives: [
    'Nhận biết trung điểm của đoạn thẳng.',
    'Vận dụng: M là trung điểm của AB thì MA = MB = {{AB|2}} để tính độ dài.',
    'Tìm được trung điểm bằng thước có vạch chia, bằng gấp giấy hoặc bằng sợi dây.'
  ],
  intro: 'Để treo bức tranh cân đối, ta cần đóng đinh ngay chính giữa mép khung. Điểm “chính giữa” của một đoạn thẳng gọi là trung điểm.',
  steps: [
    { title: 'Trung điểm là gì?', html: `<p>Trung điểm M của đoạn thẳng AB là điểm <b>nằm giữa</b> A, B và <b>cách đều</b> A, B: <span class="math">MA = MB</span>. Trung điểm còn gọi là điểm chính giữa.</p>`,
      svg: midFig, caption: 'M là trung điểm của AB: MA = MB = 4 cm.' },
    { title: 'Tính chất', html: `<p>Nếu M là trung điểm của AB thì <span class="math">MA = MB = {{AB|2}}</span> và AB = 2 · MA.</p><p>Chú ý: chỉ “MA = MB” mà M không nằm giữa A, B (M không thuộc đoạn AB) thì M <b>không</b> phải trung điểm.</p>` },
    { title: 'Cách tìm trung điểm', html: `<ul><li><b>Dùng thước:</b> đo AB, tính {{AB|2}}, đặt vạch 0 tại A và đánh dấu điểm ứng với {{AB|2}}.</li><li><b>Gấp giấy:</b> vẽ AB lên giấy can, gấp sao cho A trùng B; nếp gấp cắt AB tại trung điểm.</li><li><b>Dùng sợi dây:</b> lấy sợi dây dài bằng AB, gập đôi để đánh dấu.</li></ul>`,
      svg: fold, caption: 'Gấp cho A trùng B, nếp gấp đi qua trung điểm M.' },
    { title: 'Ứng dụng', html: `<p>Trung điểm dùng để chia đôi thanh gỗ, xác định tâm của đoạn thẳng, điểm giữa đường đi… Ví dụ: hai nhà cách nhau 800 m, điểm hẹn “ở chính giữa” cách mỗi nhà 400 m.</p>` }
  ],
  summary: 'M là trung điểm của AB khi M nằm giữa A, B và MA = MB. Khi đó MA = MB = AB : 2. Tìm trung điểm bằng thước, gấp giấy hoặc dây.',
  examples: [
    { title: 'Tính độ dài', problem: 'M là trung điểm của AB, AB = 12 cm. Tính MA.', solution: 'MA = 12 : 2 = <b>6 cm</b>.' },
    { title: 'Tính ngược', problem: 'I là trung điểm của CD, CI = 3,5 cm. Tính CD.', solution: 'CD = 2 · 3,5 = <b>7 cm</b>.' },
    { title: 'Kiểm tra trung điểm', problem: 'Trên tia Ox lấy A, B với OA = 3 cm, OB = 6 cm. A có phải trung điểm của OB không?', solution: 'A nằm giữa O và B (vì 3 &lt; 6), AB = 6 − 3 = 3 cm = OA. Vậy A <b>là trung điểm</b> của OB.' }
  ],
  exercises: [
    { question: 'Trên tia Ox lấy M, N sao cho OM = 2 cm, ON = 8 cm. Gọi I là trung điểm của MN. Tính OI.', hints: ['MN = 8 − 2 = 6 cm, MI = 3 cm.', 'OI = OM + MI.'], solution: 'OI = 2 + 3 = <b>5 cm</b>.' },
    { question: 'Một thanh gỗ dài 1,6 m được cưa ở trung điểm. Mỗi đoạn dài bao nhiêu xăng-ti-mét?', hints: ['Mỗi đoạn bằng nửa thanh gỗ.', 'Đổi 1,6 m = 160 cm.'], solution: '<b>80 cm</b>.' },
    { question: 'Cho AB = 10 cm, M là trung điểm AB, N là trung điểm AM. Tính NB.', hints: ['AM = 5 cm, AN = NM = 2,5 cm.', 'NB = NM + MB.'], solution: 'NB = 2,5 + 5 = <b>7,5 cm</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'M là trung điểm của AB, AB = 14 cm. MA bằng bao nhiêu cm?', answer: '7', unit: 'cm', calc: '14/2', explain: '14 : 2 = 7.' },
    { type: 'short', q: 'I là trung điểm của PQ, IP = 4,5 cm. PQ bằng bao nhiêu cm?', answer: '9', unit: 'cm', calc: '2*4.5', explain: '2 · 4,5 = 9.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu MA = MB thì M là trung điểm của AB.', answer: false, explain: 'Cần thêm điều kiện M nằm giữa A và B.' },
    { type: 'mcq', q: 'Trung điểm của đoạn thẳng AB là điểm:', options: ['Nằm giữa A, B và cách đều A, B', 'Cách đều A và B', 'Nằm giữa A và B', 'Trùng với A'], answer: 0, explain: 'Cần đủ hai điều kiện.' },
    { type: 'short', q: 'Trên tia Ox: OA = 4 cm, OB = 10 cm. M là trung điểm AB. Tính OM (cm).', answer: '7', unit: 'cm', calc: '4+(10-4)/2', explain: 'AB = 6, AM = 3, OM = 4 + 3 = 7.' },
    { type: 'mcq', q: 'Mỗi đoạn thẳng có bao nhiêu trung điểm?', options: ['0', '1', '2', 'Vô số'], answer: 1, calc: '1', explain: 'Đúng một trung điểm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể tìm trung điểm bằng cách gấp giấy cho hai đầu mút trùng nhau.', answer: true, explain: 'Nếp gấp đi qua trung điểm.' },
    { type: 'short', q: 'AB = 20 cm, M là trung điểm AB, N là trung điểm MB. Tính AN (cm).', answer: '15', unit: 'cm', calc: '10+5', explain: 'AM = 10, MN = 5 ⇒ AN = 15.' }
  ]
});
})();
