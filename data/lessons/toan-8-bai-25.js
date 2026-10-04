/* Toán 8 – Bài 25. Phương trình bậc nhất một ẩn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-25', {
    objectives: [
      'Nhận biết được phương trình một ẩn, nghiệm của phương trình, phương trình bậc nhất một ẩn.',
      'Hiểu và vận dụng được quy tắc chuyển vế và quy tắc nhân (chia) để biến đổi phương trình.',
      'Giải được phương trình bậc nhất một ẩn và phương trình đưa được về dạng ax + b = 0.'
    ],
    intro: 'Một chiếc cân thăng bằng: nếu thêm hoặc bớt ở hai đĩa cùng một lượng như nhau thì cân vẫn thăng bằng. Giải phương trình cũng dựa trên ý tưởng giản dị ấy.',
    steps: [
      { title: 'Phương trình một ẩn', html: `<p>Phương trình ẩn x có dạng A(x) = B(x), trong đó A(x), B(x) là hai biểu thức của biến x (vế trái, vế phải).</p>
        <p>Số x<sub>0</sub> là <b>nghiệm</b> nếu giá trị hai vế tại x<sub>0</sub> bằng nhau. <b>Giải phương trình</b> là tìm tập nghiệm của nó.</p>
        <p>Ví dụ: x = 3 là nghiệm của 2x − 1 = x + 2 vì 2 · 3 − 1 = 5 = 3 + 2.</p>` },
      { title: 'Phương trình bậc nhất một ẩn', html: `<div class="box key">Phương trình dạng ax + b = 0 (a ≠ 0) gọi là phương trình bậc nhất một ẩn. Nghiệm duy nhất: x = −{{b|a}}.</div>
        <p>Ví dụ: 3x − 6 = 0; −x + 4 = 0; {{1|2}}x + 1 = 0. Còn 0x + 5 = 0 hay x<sup>2</sup> − 1 = 0 không phải phương trình bậc nhất.</p>` },
      { title: 'Hai quy tắc biến đổi', html: `<ul><li><b>Chuyển vế:</b> chuyển một hạng tử từ vế này sang vế kia và <b>đổi dấu</b> hạng tử đó.</li><li><b>Nhân (chia):</b> nhân (hoặc chia) cả hai vế với cùng một số <b>khác 0</b>.</li></ul>`,
        svg: S.flow({ items: [{ title: '3x − 6 = 0', text: 'phương trình' }, { title: '3x = 6', text: 'chuyển −6 sang vế phải' }, { title: 'x = 2', text: 'chia hai vế cho 3' }], w: 560, size: 14 }), caption: 'Giải 3x − 6 = 0 bằng hai quy tắc.' },
      { title: 'Phương trình đưa về ax + b = 0', html: `<ol><li>Bỏ ngoặc; quy đồng và khử mẫu (nếu có).</li><li>Chuyển các hạng tử chứa ẩn sang một vế, hằng số sang vế kia.</li><li>Thu gọn rồi giải.</li></ol>
        <p class="math">{{x − 1|2}} + {{x|3}} = 2 ⇔ 3(x − 1) + 2x = 12 ⇔ 5x = 15 ⇔ x = 3</p>` },
      { title: 'Trường hợp đặc biệt', html: `<p>Khi thu gọn được 0x = c:</p><ul><li>c ≠ 0: phương trình <b>vô nghiệm</b>.</li><li>c = 0: phương trình <b>nghiệm đúng với mọi x</b>.</li></ul>` }
    ],
    summary: 'ax + b = 0 (a ≠ 0) có nghiệm x = −b/a. Chuyển vế thì đổi dấu; nhân/chia hai vế với số khác 0.',
    examples: [
      { title: 'Giải phương trình', problem: 'Giải: 5x + 7 = 2x − 8.', solution: '5x − 2x = −8 − 7 ⇔ 3x = −15 ⇔ x = −5.' },
      { title: 'Có dấu ngoặc', problem: 'Giải: 3(x − 2) − 2(x + 1) = 4.', solution: '3x − 6 − 2x − 2 = 4 ⇔ x − 8 = 4 ⇔ x = 12.' },
      { title: 'Có mẫu số', problem: 'Giải: {{2x + 1|3}} − {{x − 1|2}} = 1.', solution: 'Nhân hai vế với 6: 2(2x + 1) − 3(x − 1) = 6 ⇔ 4x + 2 − 3x + 3 = 6 ⇔ x = 1.' }
    ],
    exercises: [
      { question: 'Giải phương trình 7 − 2x = 3x − 8.', hints: ['Chuyển vế: −2x − 3x = −8 − 7.', '−5x = −15.'], solution: 'x = 3.' },
      { question: 'Giải phương trình {{x|2}} + {{x|4}} = 6.', hints: ['Nhân hai vế với 4.', '2x + x = 24.'], solution: 'x = 8.' },
      { question: 'Phương trình 2(x + 3) = 2x + 5 có nghiệm không?', hints: ['Bỏ ngoặc: 2x + 6 = 2x + 5.', 'Thu gọn: 0x = −1.'], solution: 'Vô nghiệm.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Phương trình nào là phương trình bậc nhất một ẩn?', options: ['x<sup>2</sup> − 4 = 0', '0x + 3 = 0', '2x − 5 = 0', '{{1|x}} + 1 = 0'], answer: 2, explain: 'Dạng ax + b = 0 với a = 2 ≠ 0.' },
      { type: 'short', calc: '-15 / 3', q: 'Giải phương trình 5x + 7 = 2x − 8. Nghiệm x = ?', answer: '-5', answerText: '−5', explain: '3x = −15.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: x = 3 là nghiệm của phương trình 2x − 1 = x + 2.', answer: true, explain: '5 = 5.' },
      { type: 'short', calc: '12', q: 'Giải phương trình 3(x − 2) − 2(x + 1) = 4.', answer: '12', explain: 'x − 8 = 4.' },
      { type: 'short', calc: '1', q: 'Giải phương trình {{2x + 1|3}} − {{x − 1|2}} = 1.', answer: '1', explain: 'x = 1.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phương trình 2(x + 3) = 2x + 5 vô nghiệm.', answer: true, explain: '0x = −1.' },
      { type: 'mcq', q: 'Khi chuyển hạng tử −6 từ vế trái sang vế phải, ta được:', options: ['−6', '+6', '0', '6x'], answer: 1, explain: 'Chuyển vế phải đổi dấu.' },
      { type: 'short', requireSimplest: true, calc: '-3 / 4', q: 'Nghiệm của phương trình 4x + 3 = 0 là bao nhiêu? (Dạng a/b tối giản.)', answer: ['-3/4'], answerText: '−3/4', explain: 'x = −{{3|4}}.' }
    ]
  });
})();
