/* Toán 9 – Bài 6. Bất phương trình bậc nhất một ẩn. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-6', {
    objectives: [
      'Nhận biết được bất phương trình bậc nhất một ẩn và nghiệm của nó.',
      'Giải được bất phương trình bậc nhất một ẩn bằng quy tắc chuyển vế và quy tắc nhân.',
      'Biểu diễn được tập nghiệm trên trục số.',
      'Vận dụng bất phương trình để giải bài toán thực tế (chọn gói cước, tiết kiệm, điểm số).'
    ],
    intro: 'Một bạn có 200 nghìn đồng, muốn mua một hộp bút giá 50 nghìn và nhiều quyển vở giá 12 nghìn. Có thể mua tối đa bao nhiêu quyển? Bất phương trình giúp trả lời câu hỏi này.',
    steps: [
      { title: 'Khái niệm', html: `<p>Bất phương trình dạng ax + b &gt; 0 (hoặc &lt; 0, ≥ 0, ≤ 0) với a ≠ 0 gọi là <b>bất phương trình bậc nhất một ẩn</b>.</p><p>Số x<sub>0</sub> là <b>nghiệm</b> nếu thay vào được khẳng định đúng. Ví dụ: 3 là nghiệm của 2x − 1 &gt; 4 vì 5 &gt; 4.</p>` },
      { title: 'Quy tắc chuyển vế và quy tắc nhân', html: `<ul><li><b>Chuyển vế</b> một hạng tử: đổi dấu hạng tử đó.</li><li><b>Nhân (chia)</b> hai vế với số dương: giữ chiều; với số âm: <b>đổi chiều</b>.</li></ul>` },
      { title: 'Giải và biểu diễn tập nghiệm', html: `<p>2x − 6 &gt; 0 ⇔ 2x &gt; 6 ⇔ x &gt; 3.</p>`,
        svg: S.numberLine({ min: -1, max: 7, width: 440, range: [3, 7], marks: [{ v: 3, label: 'không lấy 3', color: C.red }] }), caption: 'Tập nghiệm x &gt; 3 (phần tô màu, không lấy điểm 3).' },
      { title: 'Chia cho số âm', html: `<p>5 − 2x ≥ 1 ⇔ −2x ≥ −4 ⇔ x ≤ 2 (chia cho −2, đổi chiều).</p>`,
        svg: S.numberLine({ min: -4, max: 4, width: 440, range: [-4, 2], marks: [{ v: 2, label: 'lấy cả 2', color: C.green }] }), caption: 'Tập nghiệm x ≤ 2 (lấy cả điểm 2).' },
      { title: 'Bài toán thực tế', html: `<p>Mua 1 hộp bút 50 nghìn và x quyển vở 12 nghìn, có 200 nghìn: 50 + 12x ≤ 200 ⇔ x ≤ 12,5. Số vở là số tự nhiên nên mua tối đa 12 quyển.</p>` }
    ],
    summary: 'ax + b &gt; 0 (a ≠ 0). Chuyển vế đổi dấu; nhân/chia số âm đổi chiều. Biểu diễn tập nghiệm trên trục số; bài toán thực tế cần chú ý điều kiện của ẩn.',
    examples: [
      { title: 'Giải bất phương trình', problem: 'Giải 3x + 5 &lt; 2x + 9.', solution: '3x − 2x &lt; 9 − 5 ⇔ x &lt; 4.' },
      { title: 'Có dấu ngoặc', problem: 'Giải 2(x − 3) ≥ 5x + 3.', solution: '2x − 6 ≥ 5x + 3 ⇔ −3x ≥ 9 ⇔ x ≤ −3.' },
      { title: 'Chọn gói cước', problem: 'Gói A: 60 nghìn/tháng, không phụ phí. Gói B: 20 nghìn/tháng cộng 2 nghìn mỗi GB. Dùng bao nhiêu GB thì gói B rẻ hơn gói A?', solution: '20 + 2x &lt; 60 ⇔ x &lt; 20. Dùng dưới 20 GB thì gói B rẻ hơn.' }
    ],
    exercises: [
      { question: 'Giải bất phương trình {{x − 1|2}} &gt; {{x + 2|3}}.', hints: ['Nhân hai vế với 6: 3(x − 1) &gt; 2(x + 2).', '3x − 3 &gt; 2x + 4.'], solution: 'x &gt; 7.' },
      { question: 'Bạn An có điểm kiểm tra 7 và 8; bài thứ ba hệ số 2. Để điểm trung bình (7 + 8 + 2x) : 4 ≥ 8 thì bài thứ ba cần ít nhất bao nhiêu điểm?', hints: ['15 + 2x ≥ 32.', '2x ≥ 17.'], solution: 'x ≥ 8,5: cần ít nhất 8,5 điểm.' },
      { question: 'Tìm số nguyên lớn nhất thoả mãn 4 − 3x &gt; −8.', hints: ['−3x &gt; −12.', 'Chia −3: đổi chiều.'], solution: 'x &lt; 4, số nguyên lớn nhất là 3.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Bất phương trình nào là bất phương trình bậc nhất một ẩn?', options: ['0x + 3 &gt; 0', '2x − 5 ≤ 0', 'x<sup>2</sup> &gt; 1', '{{1|x}} &gt; 2'], answer: 1, explain: 'Dạng ax + b ≤ 0, a = 2 ≠ 0.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: 5 − 2x ≥ 1 ⇔ x ≥ 2.', answer: false, explain: 'Chia −2 đổi chiều: x ≤ 2.' },
      { type: 'short', calc: 'Math.floor((200 - 50) / 12)', q: 'Có 200 nghìn, mua 1 hộp bút 50 nghìn và vở 12 nghìn/quyển. Mua tối đa bao nhiêu quyển vở?', answer: '12', explain: 'x ≤ 12,5.' },
      { type: 'short', calc: '(60 - 20) / 2', q: 'Gói B: 20 nghìn + 2 nghìn/GB; gói A: 60 nghìn. Gói B rẻ hơn khi dùng dưới bao nhiêu GB?', unit: 'GB', answer: '20', explain: '20 + 2x &lt; 60.' },
      { type: 'short', calc: '(32 - 15) / 2', q: 'Điểm 7, 8 và bài thứ ba hệ số 2; cần trung bình ít nhất 8. Bài thứ ba ít nhất bao nhiêu điểm?', answer: '8.5', explain: '15 + 2x ≥ 32.' },
      { type: 'short', calc: 'Math.ceil((4 + 8) / 3) - 1', q: 'Số nguyên lớn nhất thoả mãn 4 − 3x &gt; −8 là?', answer: '3', explain: 'x &lt; 4.' },
      { type: 'mcq', q: 'Tập nghiệm của 2(x − 3) ≥ 5x + 3 là:', options: ['x ≥ −3', 'x ≤ −3', 'x ≤ 3', 'x ≥ 3'], answer: 1, explain: '−3x ≥ 9.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: x = 3 là một nghiệm của bất phương trình 2x − 1 &gt; 4.', answer: true, explain: '5 &gt; 4.' }
    ]
  });
})();
