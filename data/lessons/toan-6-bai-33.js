/* Toán 6 – Bài 33. Điểm nằm giữa hai điểm. Tia. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var between = S.draw({ w: 380, h: 110, items: [{ line: [50, 60, 330, 60], ext: 20 }, { pt: [80, 60, 'A', 0, 24] }, { pt: [190, 60, 'M', 0, 24], color: C.orange }, { pt: [300, 60, 'B', 0, 24] }], aria: 'Điểm M nằm giữa A và B' });
var ray = S.draw({ w: 380, h: 100, items: [{ ray: [60, 55, 320, 55], ext: 20 }, { pt: [60, 55, 'O', 0, 24], color: C.red }, { text: [345, 45, 'x'], bold: true, color: C.blue }], aria: 'Tia Ox' });
var opp = S.draw({ w: 380, h: 100, items: [{ ray: [190, 55, 340, 55], ext: 10, color: C.blue }, { ray: [190, 55, 40, 55], ext: 10, color: C.orange }, { pt: [190, 55, 'O', 0, 24], color: C.red }, { text: [358, 45, 'x'], bold: true, color: C.blue }, { text: [22, 45, 'y'], bold: true, color: C.orange }], aria: 'Hai tia đối nhau Ox và Oy' });
var ab = S.draw({ w: 380, h: 150, items: [{ ray: [60, 45, 200, 45], ext: 150, color: C.blue }, { pt: [60, 45, 'A', 0, -12] }, { pt: [200, 45, 'B', 0, -12] }, { text: [345, 30, 'tia AB'], color: C.blue, bold: true, size: 13 }, { ray: [320, 115, 180, 115], ext: 150, color: C.orange }, { pt: [180, 115, 'A', 0, -12] }, { pt: [320, 115, 'B', 0, -12] }, { text: [40, 100, 'tia BA'], color: C.orange, bold: true, size: 13 }], aria: 'Tia AB và tia BA' });
THCS.registerLesson('toan-6/bai-33', {
  objectives: [
    'Nhận biết điểm nằm giữa hai điểm; hai điểm nằm cùng phía, khác phía đối với một điểm.',
    'Nhận biết tia, gọi tên và vẽ tia; phân biệt tia AB và tia BA.',
    'Nhận biết hai tia đối nhau.'
  ],
  intro: 'Tia nắng mặt trời chiếu ra từ một điểm và kéo dài mãi về một phía. Hình ảnh đó giúp ta hiểu khái niệm “tia” trong hình học.',
  steps: [
    { title: 'Điểm nằm giữa hai điểm', html: `<p>Cho ba điểm thẳng hàng A, M, B như hình. Điểm M <b>nằm giữa</b> hai điểm A và B. Khi đó:</p>
      <ul><li>A và B nằm <b>khác phía</b> đối với M.</li><li>M và B nằm <b>cùng phía</b> đối với A; A và M nằm cùng phía đối với B.</li></ul>
      <p>Trong ba điểm thẳng hàng, có một và chỉ một điểm nằm giữa hai điểm còn lại.</p>`,
      svg: between, caption: 'M nằm giữa A và B.' },
    { title: 'Tia', html: `<p>Điểm O trên đường thẳng xy chia đường thẳng thành hai phần. Mỗi phần cùng với điểm O gọi là một <b>tia gốc O</b>. Tia Ox bị giới hạn ở gốc O, không bị giới hạn ở phía x.</p><p>Khi đọc hoặc viết tên tia, <b>phải đọc (viết) tên gốc trước</b>.</p>`,
      svg: ray, caption: 'Tia Ox (gốc O).' },
    { title: 'Hai tia đối nhau', html: `<p>Hai tia chung gốc Ox và Oy tạo thành đường thẳng xy gọi là <b>hai tia đối nhau</b>. Mỗi điểm trên đường thẳng là gốc chung của hai tia đối nhau.</p>`,
      svg: opp, caption: 'Ox và Oy là hai tia đối nhau.' },
    { title: 'Tia AB và tia BA', html: `<p>Tia AB có gốc A, đi qua B (kéo dài mãi về phía B). Tia BA có gốc B, đi qua A. Hai tia này <b>khác nhau</b>.</p>`,
      svg: ab, caption: 'Tia AB (xanh) và tia BA (cam) có gốc khác nhau.' }
  ],
  summary: 'Trong ba điểm thẳng hàng có đúng một điểm nằm giữa hai điểm kia. Tia gốc O gồm điểm O và một phần đường thẳng về một phía; gọi tên gốc trước. Hai tia chung gốc tạo thành một đường thẳng là hai tia đối nhau.',
  examples: [
    { title: 'Điểm nằm giữa', problem: 'Trên đường thẳng lấy các điểm theo thứ tự A, B, C, D. Điểm nào nằm giữa A và C? Hai điểm nào nằm khác phía đối với C?', solution: '<b>B</b> nằm giữa A và C. Đối với C: A, B nằm một phía, D nằm phía bên kia ⇒ các cặp khác phía với C là (A, D) và (B, D).' },
    { title: 'Tia đối', problem: 'Cho ba điểm thẳng hàng M, N, P, N nằm giữa M và P. Tia nào là tia đối của tia NM?', solution: 'Tia đối của tia NM là tia <b>NP</b> (cùng gốc N, nằm về hai phía).' },
    { title: 'Tia trùng nhau', problem: 'Với A, B, C thẳng hàng, B nằm giữa A và C: tia AB và tia AC có trùng nhau không?', solution: 'Cùng gốc A và cùng hướng về phía B, C nên <b>trùng nhau</b>.' }
  ],
  exercises: [
    { question: 'Vẽ đường thẳng xy, lấy điểm O trên xy. Kể tên hai tia đối nhau gốc O.', hints: ['O chia xy thành hai phần.', 'Tên tia: gốc trước.'], solution: '<b>Ox và Oy</b>.' },
    { question: 'Cho điểm O trên đường thẳng, A và B nằm khác phía đối với O. Điểm nào nằm giữa hai điểm còn lại?', hints: ['A và B ở hai phía của O.', 'Vậy O ở giữa.'], solution: '<b>O</b> nằm giữa A và B.' },
    { question: 'Cho 4 điểm A, B, C, D thẳng hàng theo thứ tự đó. Có bao nhiêu tia gốc B chứa điểm D?', hints: ['Gốc B chia đường thẳng thành hai tia.', 'Tia chứa D là tia BC (cũng là tia BD).'], solution: 'Chỉ có <b>1 tia</b> (tia BC trùng tia BD).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tia AB và tia BA là một.', answer: false, explain: 'Hai tia có gốc khác nhau.' },
    { type: 'mcq', q: 'Trong ba điểm thẳng hàng, có bao nhiêu điểm nằm giữa hai điểm còn lại?', options: ['0', '1', '2', '3'], answer: 1, calc: '1', explain: 'Một và chỉ một điểm.' },
    { type: 'mcq', q: 'Khi gọi tên tia, ta phải viết tên nào trước?', options: ['Điểm bất kì trên tia', 'Gốc của tia', 'Chữ cái thường', 'Chữ in hoa lớn nhất'], answer: 1, explain: 'Gốc được viết trước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai tia đối nhau thì chung gốc.', answer: true, explain: 'Hai tia đối nhau chung gốc và tạo thành một đường thẳng.' },
    { type: 'mcq', q: 'A, M, B thẳng hàng, M nằm giữa A và B. Khẳng định nào sai?', options: ['A và B khác phía đối với M', 'M và B cùng phía đối với A', 'A và M khác phía đối với B', 'Tia MA và MB đối nhau'], answer: 2, explain: 'A và M nằm cùng phía đối với B.' },
    { type: 'short', q: 'Một điểm O trên đường thẳng tạo ra bao nhiêu tia gốc O?', answer: '2', explain: 'Hai tia đối nhau.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tia bị giới hạn ở cả hai phía.', answer: false, explain: 'Tia chỉ bị giới hạn ở gốc.' },
    { type: 'mcq', q: 'Cho 3 điểm thẳng hàng theo thứ tự P, Q, R. Tia QP và tia QR là:', options: ['Hai tia trùng nhau', 'Hai tia đối nhau', 'Không phải tia', 'Hai đoạn thẳng'], answer: 1, explain: 'Chung gốc Q, về hai phía.' }
  ]
});
})();
