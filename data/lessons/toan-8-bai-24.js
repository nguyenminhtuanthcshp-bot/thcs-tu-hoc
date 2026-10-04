/* Toán 8 – Bài 24. Phép nhân và phép chia phân thức đại số. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-24', {
  objectives: [
    'Thực hiện được phép nhân hai phân thức đại số.',
    'Thực hiện được phép chia hai phân thức đại số (nhân với phân thức nghịch đảo).',
    'Vận dụng tính chất của phép nhân và phối hợp các phép tính để rút gọn biểu thức phân thức.'
  ],
  intro: 'Nhân phân thức còn dễ hơn cộng: không cần quy đồng! Chỉ cần nhân tử với tử, mẫu với mẫu – và nhớ rút gọn.',
  steps: [
    { title: 'Phép nhân', html: `<div class="box key">{{A|B}} · {{C|D}} = {{A · C|B · D}}</div>
      <p class="math">{{x − 1|x}} · {{x<sup>2</sup>|x<sup>2</sup> − 1}} = {{(x − 1) · x<sup>2</sup>|x · (x − 1)(x + 1)}} = {{x|x + 1}}</p>
      <div class="box tip">Nên phân tích thành nhân tử <b>trước khi nhân</b> để rút gọn dễ dàng.</div>` },
    { title: 'Phân thức nghịch đảo', html: `<p>Hai phân thức gọi là nghịch đảo của nhau nếu tích của chúng bằng 1. Nghịch đảo của {{A|B}} (A ≠ 0) là {{B|A}}.</p><p>Ví dụ: nghịch đảo của {{x + 2|3x}} là {{3x|x + 2}}; nghịch đảo của x − 1 là {{1|x − 1}}.</p>` },
    { title: 'Phép chia', html: `<div class="box key">{{A|B}} : {{C|D}} = {{A|B}} · {{D|C}} (với {{C|D}} ≠ 0)</div>
      <p class="math">{{4x|x + 3}} : {{2x<sup>2</sup>|x<sup>2</sup> − 9}} = {{4x|x + 3}} · {{(x − 3)(x + 3)|2x<sup>2</sup>}} = {{2(x − 3)|x}}</p>` },
    { title: 'Tính chất và biểu thức phối hợp', html: `<p>Phép nhân phân thức có tính giao hoán, kết hợp, phân phối đối với phép cộng. Thứ tự: ngoặc → nhân, chia (từ trái sang phải) → cộng, trừ.</p>
      <p class="math">({{1|x}} + {{1|y}}) · {{xy|x + y}} = {{x + y|xy}} · {{xy|x + y}} = 1</p>` }
  ],
  summary: 'Nhân: tử × tử, mẫu × mẫu rồi rút gọn. Chia: nhân với nghịch đảo của phân thức chia.',
  examples: [
    { title: 'Nhân', problem: 'Tính {{3x<sup>2</sup>|2y}} · {{4y<sup>3</sup>|9x}}.', solution: '{{12x<sup>2</sup>y<sup>3</sup>|18xy}} = {{2xy<sup>2</sup>|3}}.' },
    { title: 'Chia', problem: 'Tính {{x<sup>2</sup> − 4|x + 1}} : {{x − 2|2x + 2}}.', solution: '{{(x − 2)(x + 2)|x + 1}} · {{2(x + 1)|x − 2}} = 2(x + 2) = 2x + 4.' },
    { title: 'Phối hợp', problem: 'Rút gọn P = ({{x|x − 1}} − 1) : {{1|x<sup>2</sup> − 1}}.', solution: '{{x|x − 1}} − 1 = {{1|x − 1}}. P = {{1|x − 1}} · (x − 1)(x + 1) = x + 1.' }
  ],
  exercises: [
    { question: 'Tính {{5x − 5|x + 2}} · {{x<sup>2</sup> − 4|x − 1}}.', hints: ['5x − 5 = 5(x − 1); x<sup>2</sup> − 4 = (x − 2)(x + 2).', 'Chia cho (x − 1)(x + 2).'], solution: '5(x − 2) = 5x − 10.' },
    { question: 'Tính {{x + 3|x}} : {{x<sup>2</sup> + 3x|2}}.', hints: ['Nhân với nghịch đảo {{2|x(x + 3)}}.', 'Rút gọn x + 3.'], solution: '{{2|x<sup>2</sup>}}.' },
    { question: 'Rút gọn Q = (1 − {{1|x}}) · {{x<sup>2</sup>|x − 1}}.', hints: ['1 − {{1|x}} = {{x − 1|x}}.', 'Nhân rồi rút gọn.'], solution: 'Q = x.' }
  ],
  quiz: [
    { type: 'mcq', q: '{{x|3}} · {{6|x<sup>2</sup>}} bằng:', options: ['{{2|x}}', '{{6x|3x<sup>2</sup>}} (chưa rút gọn được)', '2x', '{{x|2}}'], answer: 0, explain: '{{6x|3x<sup>2</sup>}} = {{2|x}}.' },
    { type: 'mcq', q: 'Nghịch đảo của {{x + 2|3x}} là:', options: ['{{3x|x + 2}}', '−{{x + 2|3x}}', '{{x − 2|3x}}', '{{−3x|x + 2}}'], answer: 0, explain: 'Đổi chỗ tử và mẫu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{A|B}} : {{C|D}} = {{A · C|B · D}}.', answer: false, explain: 'Phải nhân với nghịch đảo: {{A · D|B · C}}.' },
    { type: 'short', calc: '2 * 3 + 4', q: 'Tính {{x<sup>2</sup> − 4|x + 1}} : {{x − 2|2x + 2}} rồi tìm giá trị tại x = 3.', answer: '10', explain: 'Kết quả 2x + 4 = 10.' },
    { type: 'short', calc: '5 * (4 - 2)', q: 'Tính {{5x − 5|x + 2}} · {{x<sup>2</sup> − 4|x − 1}} tại x = 4.', answer: '10', explain: '5(x − 2) = 10.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: ({{1|x}} + {{1|y}}) · {{xy|x + y}} = 1 (với x, y ≠ 0, x + y ≠ 0).', answer: true, explain: '{{x + y|xy}} · {{xy|x + y}} = 1.' },
    { type: 'short', requireSimplest: true, calc: '2 / (3 * 3)', q: 'Tính {{x + 3|x}} : {{x<sup>2</sup> + 3x|2}} rồi tìm giá trị tại x = 3 (dạng a/b tối giản).', answer: ['2/9'], answerText: '2/9', explain: '{{2|x<sup>2</sup>}} = {{2|9}}.' },
    { type: 'short', calc: '5 + 1', q: 'Rút gọn P = ({{x|x − 1}} − 1) : {{1|x<sup>2</sup> − 1}} rồi tính P tại x = 5.', answer: '6', explain: 'P = x + 1 = 6.' }
  ]
});
