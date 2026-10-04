/* Toán 8 – Bài 22. Tính chất cơ bản của phân thức đại số. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-8/bai-22', {
  objectives: [
    'Mô tả được những tính chất cơ bản của phân thức đại số.',
    'Rút gọn được phân thức bằng cách phân tích tử và mẫu thành nhân tử rồi chia cho nhân tử chung.',
    'Quy đồng mẫu thức được nhiều phân thức.'
  ],
  intro: 'Giống như phân số: {{2|4}} = {{1|2}}, ta có thể nhân hoặc chia cả tử và mẫu của phân thức với cùng một đa thức khác 0 mà không làm thay đổi phân thức.',
  steps: [
    { title: 'Tính chất cơ bản', html: `<div class="box key">{{A|B}} = {{A · M|B · M}} (M là đa thức khác 0); &nbsp; {{A|B}} = {{A : N|B : N}} (N là nhân tử chung khác 0).</div>
      <p><b>Quy tắc đổi dấu:</b> {{A|B}} = {{−A|−B}}. Ví dụ: {{x − 2|3 − x}} = {{2 − x|x − 3}}.</p>` },
    { title: 'Rút gọn phân thức', html: `<ol><li>Phân tích tử và mẫu thành nhân tử (nếu cần).</li><li>Tìm nhân tử chung.</li><li>Chia cả tử và mẫu cho nhân tử chung.</li></ol>
      <p class="math">{{x<sup>2</sup> − 4|x<sup>2</sup> + 2x}} = {{(x − 2)(x + 2)|x(x + 2)}} = {{x − 2|x}}</p>
      <div class="box warn">Chỉ được chia cho <b>nhân tử</b> (thừa số) chung, không được “gạch” các hạng tử: {{x + 2|x + 5}} không rút gọn được thành {{2|5}}!</div>` },
    { title: 'Quy đồng mẫu thức', html: `<ol><li>Phân tích các mẫu thành nhân tử, tìm <b>mẫu thức chung</b> (MTC): tích các nhân tử với số mũ lớn nhất.</li><li>Tìm nhân tử phụ của mỗi mẫu (MTC : mẫu).</li><li>Nhân cả tử và mẫu của mỗi phân thức với nhân tử phụ tương ứng.</li></ol>` },
    { title: 'Ví dụ quy đồng', html: `<p>Quy đồng {{1|x<sup>2</sup> − x}} và {{3|x<sup>2</sup> − 1}}.</p>
      <p>x<sup>2</sup> − x = x(x − 1); x<sup>2</sup> − 1 = (x − 1)(x + 1). MTC = x(x − 1)(x + 1).</p>
      <p class="math">{{1|x(x − 1)}} = {{x + 1|x(x − 1)(x + 1)}}; &nbsp; {{3|(x − 1)(x + 1)}} = {{3x|x(x − 1)(x + 1)}}</p>` }
  ],
  summary: 'Nhân/chia cả tử và mẫu với cùng một đa thức khác 0 thì phân thức không đổi. Rút gọn: phân tích thành nhân tử rồi chia cho nhân tử chung. Quy đồng: tìm MTC, nhân tử phụ.',
  examples: [
    { title: 'Rút gọn', problem: 'Rút gọn {{6x<sup>2</sup>y|9xy<sup>3</sup>}}.', solution: 'Nhân tử chung 3xy: {{2x|3y<sup>2</sup>}}.' },
    { title: 'Rút gọn có đổi dấu', problem: 'Rút gọn {{3x − 6|4 − 2x}}.', solution: '{{3(x − 2)|−2(x − 2)}} = −{{3|2}}.' },
    { title: 'Quy đồng', problem: 'Quy đồng {{5|2x + 4}} và {{x|x<sup>2</sup> − 4}}.', solution: '2x + 4 = 2(x + 2); x<sup>2</sup> − 4 = (x − 2)(x + 2). MTC = 2(x − 2)(x + 2).<br>{{5(x − 2)|2(x − 2)(x + 2)}} và {{2x|2(x − 2)(x + 2)}}.' }
  ],
  exercises: [
    { question: 'Rút gọn {{x<sup>2</sup> + 3x|x<sup>2</sup> − 9}}.', hints: ['Tử: x(x + 3); mẫu: (x − 3)(x + 3).', 'Chia cho x + 3.'], solution: '{{x|x − 3}}.' },
    { question: 'Rút gọn {{x<sup>2</sup> − 2x + 1|x<sup>2</sup> − 1}}.', hints: ['Tử: (x − 1)<sup>2</sup>.', 'Mẫu: (x − 1)(x + 1).'], solution: '{{x − 1|x + 1}}.' },
    { question: 'Tìm mẫu thức chung của {{1|x + 2}}, {{2|x − 2}}, {{3|x<sup>2</sup> − 4}}.', hints: ['x<sup>2</sup> − 4 = (x − 2)(x + 2).', 'MTC chứa mỗi nhân tử một lần.'], solution: 'MTC = (x − 2)(x + 2) = x<sup>2</sup> − 4.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Rút gọn {{x<sup>2</sup> − 4|x<sup>2</sup> + 2x}} được:', options: ['{{x − 2|x}}', '{{−4|2x}}', '{{x + 2|x}}', '{{x − 2|2}}'], answer: 0, explain: '{{(x − 2)(x + 2)|x(x + 2)}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{x + 2|x + 5}} = {{2|5}}.', answer: false, explain: 'Không được gạch hạng tử x.' },
    { type: 'short', requireSimplest: true, calc: '3 / -2', q: 'Rút gọn {{3x − 6|4 − 2x}} (x ≠ 2). Kết quả là một số; viết dạng a/b tối giản.', answer: ['-3/2'], answerText: '−3/2', explain: '{{3(x − 2)|−2(x − 2)}} = −{{3|2}}.' },
    { type: 'mcq', q: 'Theo quy tắc đổi dấu, {{x − 1|2 − x}} bằng:', options: ['{{1 − x|x − 2}}', '{{x − 1|x − 2}}', '{{1 − x|2 − x}}', '{{x + 1|x − 2}}'], answer: 0, explain: 'Đổi dấu cả tử và mẫu.' },
    { type: 'short', calc: '5 / (5 - 3)', q: 'Rút gọn {{x<sup>2</sup> + 3x|x<sup>2</sup> − 9}} rồi tính giá trị tại x = 5. (Dùng dấu phẩy hoặc chấm.)', answer: '2.5', answerText: '2,5', explain: '{{x|x − 3}} = {{5|2}} = 2,5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mẫu thức chung của {{1|x}} và {{1|x + 1}} có thể chọn là x(x + 1).', answer: true, explain: 'Tích hai mẫu không có nhân tử chung.' },
    { type: 'mcq', q: '{{6x<sup>2</sup>y|9xy<sup>3</sup>}} rút gọn bằng:', options: ['{{2x|3y<sup>2</sup>}}', '{{2x<sup>2</sup>|3y<sup>2</sup>}}', '{{3x|2y<sup>2</sup>}}', '{{2|3y}}'], answer: 0, explain: 'Chia cả tử và mẫu cho 3xy.' },
    { type: 'short', calc: '(3 - 1) / (3 + 1)', requireSimplest: true, q: 'Rút gọn {{x<sup>2</sup> − 2x + 1|x<sup>2</sup> − 1}} rồi tính giá trị tại x = 3 (dạng a/b tối giản).', answer: ['1/2'], answerText: '1/2', explain: '{{x − 1|x + 1}} = {{2|4}} = {{1|2}}.' }
  ]
});
