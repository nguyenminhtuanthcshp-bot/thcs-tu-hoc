/* Toán 6 – Bài 14. Phép cộng và phép trừ số nguyên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-14', {
  objectives: [
    'Cộng được hai số nguyên cùng dấu, khác dấu.',
    'Vận dụng tính chất giao hoán, kết hợp, cộng với số đối để tính nhanh.',
    'Hiểu phép trừ số nguyên là cộng với số đối: a − b = a + (−b).',
    'Giải bài toán thực tế về nhiệt độ, độ cao, lãi – lỗ.'
  ],
  intro: 'Nhiệt độ buổi sáng là −3 °C, đến trưa tăng thêm 7 °C. Nhiệt độ buổi trưa là bao nhiêu? Ta cần biết cộng số nguyên.',
  steps: [
    { title: 'Cộng trên trục số', html: `<p>Cộng với số dương: di chuyển sang <b>phải</b>; cộng với số âm: di chuyển sang <b>trái</b>. Hình minh hoạ (−3) + 7 = 4.</p>`,
      svg: S.numberLine({ min: -5, max: 6, jumps: [{ from: -3, to: 4, label: '+7' }], marks: [{ v: -3, label: '−3', color: S.C.blue }, { v: 4, label: '4', color: S.C.green }] }),
      caption: 'Xuất phát từ −3, đi sang phải 7 đơn vị, đến 4.' },
    { title: 'Cộng hai số nguyên cùng dấu', html: `<ul><li>Hai số dương: cộng như số tự nhiên.</li><li>Hai số âm: cộng hai phần số rồi đặt dấu “−” trước kết quả. Ví dụ (−6) + (−9) = −15.</li></ul>` },
    { title: 'Cộng hai số nguyên khác dấu', html: `<ul><li>Hai số đối nhau có tổng bằng 0: (−8) + 8 = 0.</li><li>Không đối nhau: lấy phần số lớn trừ phần số nhỏ, đặt dấu của số có phần số lớn hơn.</li></ul>
      <p>Ví dụ: (−12) + 5 = −(12 − 5) = −7; 15 + (−4) = 15 − 4 = 11.</p>`,
      svg: S.numberLine({ min: -8, max: 3, jumps: [{ from: 2, to: -5, label: '+(−7)' }], marks: [{ v: 2, label: '2', color: S.C.blue }, { v: -5, label: '−5', color: S.C.green }] }),
      caption: 'Minh hoạ 2 + (−7) = −5: đi sang trái 7 đơn vị.' },
    { title: 'Tính chất của phép cộng', html: `<ul><li>Giao hoán: a + b = b + a. Kết hợp: (a + b) + c = a + (b + c).</li><li>Cộng với 0: a + 0 = a. Cộng với số đối: a + (−a) = 0.</li></ul>
      <p>Mẹo: gom các số dương với nhau, các số âm với nhau, hoặc gom các cặp số đối.</p>` },
    { title: 'Phép trừ số nguyên', html: `<p>Muốn trừ số nguyên a cho số nguyên b, ta cộng a với số đối của b:</p>
      <p class="math">a − b = a + (−b)</p>
      <p>Ví dụ: 3 − 8 = 3 + (−8) = −5; (−4) − (−10) = (−4) + 10 = 6. Trong ℤ, phép trừ luôn thực hiện được.</p>` }
  ],
  summary: 'Cùng dấu: cộng phần số, giữ dấu chung. Khác dấu: lấy phần số lớn trừ phần số nhỏ, lấy dấu của số có phần số lớn hơn. Hai số đối có tổng 0. a − b = a + (−b).',
  examples: [
    { title: 'Nhiệt độ', problem: 'Buổi sáng −3 °C, buổi trưa tăng thêm 7 °C, buổi tối giảm 6 °C so với buổi trưa. Tính nhiệt độ buổi trưa và buổi tối.', solution: 'Trưa: (−3) + 7 = <b>4 °C</b>. Tối: 4 − 6 = 4 + (−6) = <b>−2 °C</b>.' },
    { title: 'Tính nhanh', problem: 'Tính: (−25) + 37 + (−75) + 63.', solution: '= [(−25) + (−75)] + (37 + 63) = (−100) + 100 = <b>0</b>.' },
    { title: 'Phép trừ', problem: 'Tính: a) (−7) − 5; b) 12 − (−9); c) (−15) − (−15).', solution: 'a) (−7) + (−5) = <b>−12</b>; b) 12 + 9 = <b>21</b>; c) (−15) + 15 = <b>0</b>.' }
  ],
  exercises: [
    { question: 'Tính: (−18) + (−27).', hints: ['Hai số cùng dấu âm.', 'Cộng phần số 18 + 27 rồi đặt dấu “−”.'], solution: '<b>−45</b>.' },
    { question: 'Một chiếc tàu ngầm đang ở độ sâu −50 m, sau đó nổi lên 18 m. Tàu đang ở độ cao bao nhiêu?', hints: ['Nổi lên nghĩa là cộng thêm 18.', '(−50) + 18.'], solution: '(−50) + 18 = <b>−32 m</b> (32 m dưới mực nước biển).' },
    { question: 'Tìm x ∈ ℤ biết x + 15 = 4.', hints: ['x = 4 − 15.', '4 − 15 = 4 + (−15).'], solution: 'x = <b>−11</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tính: (−9) + (−6).', answer: '-15', answerText: '−15', calc: '(-9)+(-6)', explain: 'Cùng dấu âm: −(9 + 6) = −15.' },
    { type: 'short', q: 'Tính: (−14) + 20.', answer: '6', calc: '(-14)+20', explain: 'Khác dấu: 20 − 14 = 6, lấy dấu của 20.' },
    { type: 'short', q: 'Tính: 8 − 13.', answer: '-5', answerText: '−5', calc: '8-13', explain: '8 + (−13) = −5.' },
    { type: 'short', q: 'Tính: (−6) − (−11).', answer: '5', calc: '(-6)-(-11)', explain: '(−6) + 11 = 5.' },
    { type: 'mcq', q: 'Tổng của một số nguyên và số đối của nó bằng:', options: ['Chính số đó', '0', 'Hai lần số đó', '1'], answer: 1, explain: 'a + (−a) = 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tổng của hai số nguyên âm là một số nguyên âm.', answer: true, explain: 'Cùng dấu âm thì tổng mang dấu âm.' },
    { type: 'mcq', q: 'Nhiệt độ ở Moscow lúc 7 giờ là −5 °C, đến 12 giờ tăng thêm 3 °C. Nhiệt độ lúc 12 giờ là:', options: ['−8 °C', '8 °C', '−2 °C', '2 °C'], answer: 2, calc: '-5+3', explain: '(−5) + 3 = −2.' },
    { type: 'short', q: 'Tính nhanh: 47 + (−30) + (−47) + 30.', answer: '0', calc: '47+(-30)+(-47)+30', explain: 'Gom các cặp số đối: [47 + (−47)] + [(−30) + 30] = 0.' }
  ]
});
})();
