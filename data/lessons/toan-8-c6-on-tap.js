/* Toán 8 – Bài tập cuối chương VI. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c6-on-tap', {
    objectives: [
      'Hệ thống hoá khái niệm phân thức, điều kiện xác định, tính chất cơ bản và bốn phép tính với phân thức.',
      'Rút gọn biểu thức phân thức, tính giá trị và tìm giá trị nguyên.',
      'Vận dụng phân thức để giải bài toán thực tế.'
    ],
    intro: 'Ôn tập chương VI – chương “phân số của đại số”.',
    steps: [
      { title: 'Sơ đồ chương VI', html: `<p>Mọi phép tính với phân thức đều dựa trên tính chất cơ bản và phân tích thành nhân tử.</p>`, svg: S.mindmap({ center: 'Phân thức đại số', branches: [
        { title: 'Khái niệm', items: ['A/B, B ≠ 0', 'ĐKXĐ: mẫu ≠ 0', 'A/B = C/D ⇔ AD = BC'] },
        { title: 'Tính chất', items: ['Nhân/chia tử, mẫu', 'Rút gọn', 'Quy đồng'] },
        { title: 'Cộng, trừ', items: ['Cùng mẫu: cộng tử', 'Khác mẫu: quy đồng'] },
        { title: 'Nhân, chia', items: ['Tử × tử, mẫu × mẫu', 'Chia: nhân nghịch đảo'] } ] }), caption: 'Sơ đồ tư duy chương VI.' },
      { title: 'So sánh với phân số', html: `<table class="tbl"><tr><th>Phân số</th><th>Phân thức</th></tr><tr><td>Tử, mẫu là số nguyên</td><td>Tử, mẫu là đa thức</td></tr><tr><td>Mẫu ≠ 0</td><td>Mẫu khác đa thức 0; ĐKXĐ: giá trị mẫu ≠ 0</td></tr><tr><td>Rút gọn: chia cho ƯC</td><td>Rút gọn: chia cho nhân tử chung</td></tr><tr><td>Quy đồng: BCNN</td><td>Quy đồng: MTC</td></tr></table>` },
      { title: 'Các lỗi hay gặp', html: `<ul><li>“Gạch” hạng tử thay vì nhân tử.</li><li>Quên đặt ngoặc khi trừ.</li><li>Quên ĐKXĐ, thay giá trị làm mẫu bằng 0.</li><li>Chia mà không lấy nghịch đảo.</li></ul>` },
      { title: 'Bài toán “chứng minh không phụ thuộc biến”', html: `<p>Rút gọn biểu thức; nếu kết quả là một hằng số thì giá trị biểu thức không phụ thuộc vào biến (trong ĐKXĐ).</p>` }
    ],
    summary: 'ĐKXĐ – phân tích thành nhân tử – rút gọn – quy đồng – bốn phép tính – đối chiếu ĐKXĐ.',
    examples: [
      { title: 'Không phụ thuộc biến', problem: 'Chứng minh giá trị của P = {{x|x − 1}} + {{x|x + 1}} − {{2x<sup>2</sup>|x<sup>2</sup> − 1}} không phụ thuộc vào x.', solution: 'MTC (x − 1)(x + 1). Tử: x(x + 1) + x(x − 1) − 2x<sup>2</sup> = 0. P = 0 với mọi x ≠ ±1.' },
      { title: 'Rút gọn tổng hợp', problem: 'Rút gọn Q = ({{x + 1|x − 1}} − {{x − 1|x + 1}}) : {{4x|x<sup>2</sup> − 1}}.', solution: 'Trong ngoặc: {{(x + 1)<sup>2</sup> − (x − 1)<sup>2</sup>|x<sup>2</sup> − 1}} = {{4x|x<sup>2</sup> − 1}}. Q = 1 (x ≠ 0, x ≠ ±1).' },
      { title: 'Thực tế', problem: 'Hai vòi cùng chảy vào bể: vòi I chảy đầy bể trong x giờ, vòi II trong (x + 2) giờ. Viết biểu thức biểu thị phần bể hai vòi chảy được trong 1 giờ; tính khi x = 4.', solution: '{{1|x}} + {{1|x + 2}} = {{2x + 2|x(x + 2)}}. Khi x = 4: {{10|24}} = {{5|12}} bể.' }
    ],
    exercises: [
      { question: 'Rút gọn {{x<sup>3</sup> − 1|x<sup>2</sup> + x + 1}}.', hints: ['x<sup>3</sup> − 1 = (x − 1)(x<sup>2</sup> + x + 1).', 'x<sup>2</sup> + x + 1 &gt; 0 với mọi x.'], solution: 'x − 1.' },
      { question: 'Tính {{x<sup>2</sup> + 2x + 1|x − 2}} · {{x<sup>2</sup> − 4|x + 1}}.', hints: ['Tử thứ nhất: (x + 1)<sup>2</sup>.', 'Rút gọn (x + 1)(x − 2).'], solution: '(x + 1)(x + 2) = x<sup>2</sup> + 3x + 2.' },
      { question: 'Tìm x nguyên để {{2x + 5|x + 1}} nguyên.', hints: ['{{2x + 5|x + 1}} = 2 + {{3|x + 1}}.', 'x + 1 ∈ {±1; ±3}.'], solution: 'x ∈ {0; −2; 2; −4}.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Điều kiện xác định của {{x + 1|x<sup>2</sup> − x}} là:', options: ['x ≠ 0', 'x ≠ 1', 'x ≠ 0 và x ≠ 1', 'x ≠ −1'], answer: 2, explain: 'x(x − 1) ≠ 0.' },
      { type: 'short', calc: '0', q: 'Tính P = {{x|x − 1}} + {{x|x + 1}} − {{2x<sup>2</sup>|x<sup>2</sup> − 1}} (x ≠ ±1).', answer: '0', explain: 'Tử bằng 0.' },
      { type: 'short', calc: '1', q: 'Rút gọn Q = ({{x + 1|x − 1}} − {{x − 1|x + 1}}) : {{4x|x<sup>2</sup> − 1}}. Q bằng số nào?', answer: '1', explain: 'Q = 1.' },
      { type: 'short', requireSimplest: true, calc: '1/4 + 1/6', q: 'Vòi I chảy đầy bể trong 4 giờ, vòi II trong 6 giờ. Trong 1 giờ cả hai vòi chảy được bao nhiêu phần bể? (Dạng a/b tối giản.)', answer: ['5/12'], answerText: '5/12', explain: '{{1|4}} + {{1|6}} = {{5|12}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{x<sup>3</sup> − 1|x<sup>2</sup> + x + 1}} = x − 1 với mọi x.', answer: true, explain: 'Mẫu luôn dương nên đẳng thức đúng với mọi x.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{A|B}} : {{C|D}} = {{A|B}} · {{C|D}}.', answer: false, explain: 'Phải nhân với nghịch đảo {{D|C}}.' },
      { type: 'short', calc: '4', q: 'Có bao nhiêu số nguyên x để {{2x + 5|x + 1}} nguyên?', answer: '4', explain: 'x + 1 ∈ {±1; ±3}.' },
      { type: 'mcq', q: 'Kết quả của {{x<sup>2</sup> + 2x + 1|x − 2}} · {{x<sup>2</sup> − 4|x + 1}} là:', options: ['(x + 1)(x + 2)', '(x + 1)(x − 2)', '{{x + 1|x + 2}}', 'x + 2'], answer: 0, explain: 'Rút gọn (x + 1)(x − 2).' }
    ]
  });
})();
