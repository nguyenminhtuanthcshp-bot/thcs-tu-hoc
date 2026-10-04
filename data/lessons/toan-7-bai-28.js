/* Toán 7 – Bài 28. Phép chia đa thức một biến. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-28', {
  objectives: [
    'Chia được đơn thức cho đơn thức, đa thức cho đơn thức (trường hợp chia hết).',
    'Thực hiện phép chia đa thức một biến cho đa thức bằng cách đặt tính.',
    'Nhận biết phép chia hết và phép chia có dư: A = B · Q + R.'
  ],
  intro: 'Phép chia đa thức được đặt tính giống hệt phép chia số tự nhiên em đã quen: chia – nhân – trừ – hạ.',
  steps: [
    { title: 'Chia đơn thức cho đơn thức', html: `<p>a x<sup>m</sup> : b x<sup>n</sup> = {{a|b}} x<sup>m − n</sup> (b ≠ 0, m ≥ n).</p>
      <p>Ví dụ: 12x<sup>5</sup> : 4x<sup>2</sup> = 3x<sup>3</sup>; −6x<sup>3</sup> : 2x<sup>3</sup> = −3.</p>` },
    { title: 'Chia đa thức cho đơn thức', html: `<p>Chia từng hạng tử của đa thức cho đơn thức (khi mọi hạng tử đều chia hết) rồi cộng các kết quả:</p>
      <p class="math">(6x<sup>4</sup> − 9x<sup>3</sup> + 3x<sup>2</sup>) : 3x<sup>2</sup> = 2x<sup>2</sup> − 3x + 1</p>` },
    { title: 'Đặt tính chia đa thức', html: `<p>Chia (x<sup>2</sup> + 5x + 6) cho (x + 2):</p><ol><li>Chia hạng tử bậc cao nhất: x<sup>2</sup> : x = x.</li><li>Nhân x với (x + 2) được x<sup>2</sup> + 2x; trừ: dư 3x + 6.</li><li>Tiếp tục: 3x : x = 3; 3(x + 2) = 3x + 6; trừ: dư 0.</li></ol><p>Kết quả: thương x + 3, phép chia hết.</p>`,
      svg: S.draw({ w: 380, h: 200, items: [{ text: [30, 40, 'x² + 5x + 6'], anchor: 'start', size: 17, bold: true }, { seg: [180, 20, 180, 190], width: 2 }, { seg: [180, 50, 340, 50], width: 2 }, { text: [195, 40, 'x + 2'], anchor: 'start', size: 17, bold: true }, { text: [195, 76, 'x + 3'], anchor: 'start', size: 17, bold: true, color: C.green }, { text: [30, 72, 'x² + 2x'], anchor: 'start', size: 16, color: C.muted }, { text: [16, 72, '−'], anchor: 'start', size: 16, color: C.muted }, { seg: [30, 82, 160, 82], color: C.muted }, { text: [70, 106, '3x + 6'], anchor: 'start', size: 16 }, { text: [70, 136, '3x + 6'], anchor: 'start', size: 16, color: C.muted }, { text: [56, 136, '−'], anchor: 'start', size: 16, color: C.muted }, { seg: [70, 146, 160, 146], color: C.muted }, { text: [130, 172, '0'], anchor: 'start', size: 17, bold: true, color: C.orange }] }),
      caption: 'Chia – nhân – trừ – hạ; dư 0 nên (x² + 5x + 6) chia hết cho (x + 2).' },
    { title: 'Phép chia có dư', html: `<p>Với hai đa thức A, B (B ≠ 0), luôn tìm được duy nhất Q, R sao cho <b>A = B · Q + R</b>, trong đó R = 0 hoặc bậc của R nhỏ hơn bậc của B.</p>
      <p>Ví dụ: (x<sup>2</sup> + 5x + 7) : (x + 2) được thương x + 3, dư 1: x<sup>2</sup> + 5x + 7 = (x + 2)(x + 3) + 1.</p>` }
  ],
  summary: 'Đơn thức : đơn thức: chia hệ số, trừ số mũ. Đa thức : đơn thức: chia từng hạng tử. Đa thức : đa thức: đặt tính (chia – nhân – trừ – hạ); A = B · Q + R với R = 0 hoặc bậc R &lt; bậc B.',
  examples: [
    { title: 'Chia cho đơn thức', problem: 'Tính (10x<sup>3</sup> − 5x<sup>2</sup>) : 5x.', solution: '2x<sup>2</sup> − x.' },
    { title: 'Đặt tính', problem: 'Chia (2x<sup>2</sup> − x − 3) cho (x + 1).', solution: '2x<sup>2</sup> : x = 2x; trừ 2x<sup>2</sup> + 2x được −3x − 3; −3x : x = −3; trừ được 0. Thương 2x − 3.' },
    { title: 'Có dư', problem: 'Tìm thương và dư của (x<sup>2</sup> − 3x + 5) : (x − 1).', solution: 'Thương x − 2, dư 3: x<sup>2</sup> − 3x + 5 = (x − 1)(x − 2) + 3.' }
  ],
  exercises: [
    { question: 'Tính (x<sup>3</sup> − 1) : (x − 1).', hints: ['Viết x<sup>3</sup> + 0x<sup>2</sup> + 0x − 1 để đặt tính.', 'Lần lượt được x<sup>2</sup>, x, 1.'], solution: 'Thương x<sup>2</sup> + x + 1, dư 0.' },
    { question: 'Tìm dư khi chia x<sup>2</sup> + 4x + 1 cho x + 2.', hints: ['Thương x + 2.', '(x + 2)(x + 2) = x<sup>2</sup> + 4x + 4.'], solution: 'Dư 1 − 4 = −3.' },
    { question: 'Tìm a để x<sup>2</sup> + 3x + a chia hết cho x + 1.', hints: ['Thương x + 2, dư a − 2.', 'Cho dư bằng 0.'], solution: 'a = 2.' }
  ],
  quiz: [
    { type: 'mcq', q: '12x<sup>5</sup> : 4x<sup>2</sup> bằng:', options: ['3x<sup>3</sup>', '8x<sup>3</sup>', '3x<sup>7</sup>', '3x<sup>2,5</sup>'], answer: 0, explain: '12 : 4 = 3; 5 − 2 = 3.' },
    { type: 'short', calc: 'poly([5, -3, 1], 1)', q: 'Dư của phép chia (x<sup>2</sup> − 3x + 5) cho (x − 1) bằng bao nhiêu?', answer: '3', explain: 'Đặt tính: thương x − 2; (x − 1)(x − 2) = x<sup>2</sup> − 3x + 2 nên dư 5 − 2 = 3.' },
    { type: 'short', calc: 'poly([1, 4, 1], -2)', q: 'Dư của phép chia (x<sup>2</sup> + 4x + 1) cho (x + 2) bằng bao nhiêu?', answer: '-3', answerText: '−3', explain: 'Thương x + 2; (x + 2)(x + 2) = x<sup>2</sup> + 4x + 4 nên dư 1 − 4 = −3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: (x<sup>2</sup> + 5x + 6) chia hết cho (x + 2).', answer: true, explain: 'Thương x + 3, dư 0.' },
    { type: 'short', calc: '-(1 - 3)', q: 'Tìm a để x<sup>2</sup> + 3x + a chia hết cho x + 1.', answer: '2', explain: 'Dư a − 2 = 0.' },
    { type: 'mcq', q: '(6x<sup>4</sup> − 9x<sup>3</sup> + 3x<sup>2</sup>) : 3x<sup>2</sup> bằng:', options: ['2x<sup>2</sup> − 3x + 1', '2x<sup>2</sup> − 3x', '2x<sup>2</sup> + 3x + 1', '3x<sup>2</sup> − 3x + 1'], answer: 0, explain: 'Chia từng hạng tử.' },
    { type: 'short', calc: '-6 / 2', q: 'Tính −6x<sup>3</sup> : 2x<sup>3</sup>.', answer: '-3', answerText: '−3', explain: 'x<sup>0</sup> = 1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong phép chia A cho B, đa thức dư R có thể có bậc bằng bậc của B.', answer: false, explain: 'R = 0 hoặc bậc R nhỏ hơn bậc B.' }
  ]
});
})();
