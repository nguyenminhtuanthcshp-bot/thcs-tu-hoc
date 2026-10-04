/* Toán 7 – Bài 1. Tập hợp các số hữu tỉ. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-7/bai-1', {
  objectives: [
    'Nhận biết được số hữu tỉ và tập hợp các số hữu tỉ ℚ.',
    'Biểu diễn được số hữu tỉ trên trục số.',
    'Tìm được số đối của một số hữu tỉ.',
    'So sánh được hai số hữu tỉ.'
  ],
  intro: 'Nhiệt độ −2,5 °C, nửa chiếc bánh ({{1|2}}), một phần tư giờ… Những số như vậy không phải số nguyên. Chúng thuộc một tập hợp lớn hơn: <b>số hữu tỉ</b>.',
  steps: [
    { title: 'Số hữu tỉ là gì?', html: `<p><b>Số hữu tỉ</b> là số viết được dưới dạng phân số {{a|b}} với a, b ∈ ℤ, b ≠ 0.</p>
      <p>Ví dụ: 0,5 = {{1|2}}; −3 = {{−3|1}}; 1{{1|4}} = {{5|4}}; −0,75 = {{−3|4}} đều là số hữu tỉ.</p>
      <p>Tập hợp các số hữu tỉ kí hiệu là <b>ℚ</b>. Mọi số nguyên đều là số hữu tỉ.</p>` },
    { title: 'Một số hữu tỉ có nhiều cách viết', html: `<p>Các phân số bằng nhau biểu diễn cùng một số hữu tỉ: {{1|2}} = {{2|4}} = {{−3|−6}} = 0,5.</p>
      <p>Ta thường dùng <b>phân số tối giản có mẫu dương</b> để viết số hữu tỉ. Ví dụ: {{6|−8}} = {{−3|4}}.</p>` },
    { title: 'Biểu diễn trên trục số', html: `<p>Để biểu diễn {{a|b}} (b &gt; 0) trên trục số: chia đoạn thẳng đơn vị thành <b>b phần bằng nhau</b>, rồi đếm a phần từ điểm 0 (sang phải nếu a &gt; 0, sang trái nếu a &lt; 0).</p>
      <p>Ví dụ: điểm biểu diễn {{3|4}} nằm giữa 0 và 1; điểm biểu diễn −{{1|2}} nằm giữa −1 và 0.</p>
      <p>Trên hình: chấm cam là −{{1|2}}, chấm xanh là {{3|4}}.</p>`,
      svg: THCS.svg.numberLine({ min: -1, max: 1, div: 4, width: 520, fracLabels: true, marks: [{ v: -0.5, label: '−1/2', color: THCS.svg.C.orange }, { v: 0.75, label: '3/4', color: THCS.svg.C.blue }] }),
      caption: 'Đoạn đơn vị được chia thành 4 phần bằng nhau.' },
    { title: 'Số đối', html: `<p>Hai điểm biểu diễn hai số đối nhau nằm về hai phía điểm 0 và cách đều điểm 0. Số đối của x kí hiệu là −x.</p>
      <p>Ví dụ: số đối của 0,7 là −0,7; số đối của −{{2|5}} là {{2|5}}; số đối của 0 là 0.</p>
      <div class="box key">−(−x) = x. Tổng của hai số đối luôn bằng 0.</div>` },
    { title: 'So sánh hai số hữu tỉ', html: `<ul><li>Cách 1: viết hai số dưới dạng phân số <b>cùng mẫu dương</b> rồi so sánh tử số.</li>
      <li>Cách 2: viết hai số dưới dạng số thập phân rồi so sánh.</li>
      <li>Số hữu tỉ dương &gt; 0 &gt; số hữu tỉ âm.</li></ul>
      <p>Trên trục số nằm ngang, số nhỏ hơn nằm bên trái số lớn hơn.</p>` }
  ],
  summary: 'Số hữu tỉ là số viết được dưới dạng {{a|b}} (a, b ∈ ℤ, b ≠ 0). Muốn so sánh, đưa về cùng mẫu dương hoặc cùng dạng số thập phân. Số đối của x là −x.',
  examples: [
    { title: 'Nhận biết số hữu tỉ', problem: 'Giải thích vì sao các số 0,25; −2; 1{{2|3}} là số hữu tỉ.', solution: '0,25 = {{1|4}}; −2 = {{−2|1}}; 1{{2|3}} = {{5|3}}. Mỗi số đều viết được dưới dạng phân số nên là số hữu tỉ.' },
    { title: 'So sánh hai số âm', problem: 'So sánh −{{3|4}} và −{{5|6}}.', solution: 'Quy đồng với mẫu chung 12: −{{3|4}} = {{−9|12}}; −{{5|6}} = {{−10|12}}.<br>Vì −9 &gt; −10 nên −{{3|4}} &gt; −{{5|6}}.' },
    { title: 'Sắp xếp', problem: 'Sắp xếp theo thứ tự tăng dần: 0,3; −{{1|2}}; {{2|5}}; −0,6.', solution: 'Đổi ra số thập phân: −{{1|2}} = −0,5; {{2|5}} = 0,4.<br>Ta có −0,6 &lt; −0,5 &lt; 0,3 &lt; 0,4, tức là: −0,6; −{{1|2}}; 0,3; {{2|5}}.' }
  ],
  exercises: [
    { question: 'Tìm số đối của các số: −{{7|9}}; 1,5; 0.', hints: ['Số đối của x là −x.', 'Số đối của một số âm là một số dương.'], solution: 'Số đối của −{{7|9}} là {{7|9}}; của 1,5 là −1,5; của 0 là 0.' },
    { question: 'So sánh {{2|3}} và 0,6.', hints: ['Viết 0,6 dưới dạng phân số: 0,6 = {{3|5}}.', 'Quy đồng {{2|3}} và {{3|5}} với mẫu chung 15.'], solution: '{{2|3}} = {{10|15}}; 0,6 = {{3|5}} = {{9|15}}. Vì 10 &gt; 9 nên {{2|3}} &gt; 0,6.' },
    { question: 'Tìm các số nguyên x sao cho −{{3|2}} &lt; x &lt; {{5|2}}.', hints: ['Đổi ra số thập phân: −{{3|2}} = −1,5 và {{5|2}} = 2,5.', 'Tìm các số nguyên nằm giữa −1,5 và 2,5 trên trục số.'], solution: 'x ∈ {−1; 0; 1; 2}.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Phân số nào biểu diễn số hữu tỉ −0,75?', options: ['{{−3|4}}', '{{3|4}}', '{{−4|3}}', '{{−7|5}}'], answer: 0, explain: '−0,75 = {{−75|100}} = {{−3|4}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi số nguyên đều là số hữu tỉ.', answer: true, explain: 'Số nguyên a viết được dưới dạng {{a|1}} nên là số hữu tỉ.' },
    { type: 'short', calc: '-(-2.5)', q: 'Số đối của −2,5 là số nào?', answer: ['2.5', '5/2'], answerText: '2,5', explain: '−(−2,5) = 2,5.' },
    { type: 'mcq', q: 'Khẳng định nào đúng?', options: ['−{{1|3}} &lt; −{{1|2}}', '−{{1|3}} &gt; −{{1|2}}', '−{{1|3}} = −{{1|2}}', 'Không so sánh được'], answer: 1, explain: '−{{1|3}} = {{−2|6}}; −{{1|2}} = {{−3|6}}; vì −2 &gt; −3 nên −{{1|3}} &gt; −{{1|2}}.' },
    { type: 'mcq', q: 'Trên trục số, điểm biểu diễn số −{{3|4}} nằm:', options: ['giữa 0 và 1', 'giữa −1 và 0', 'bên trái −1', 'bên phải 1'], answer: 1, explain: '−{{3|4}} = −0,75, nằm giữa −1 và 0.' },
    { type: 'short', requireSimplest: true, calc: '6 / -8', q: 'Viết số hữu tỉ {{6|−8}} dưới dạng phân số tối giản có mẫu dương (dạng a/b).', answer: ['-3/4'], answerText: '−3/4', explain: '{{6|−8}} = {{−6|8}} = {{−3|4}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: −(−{{5|7}}) = −{{5|7}}.', answer: false, explain: '−(−x) = x, nên −(−{{5|7}}) = {{5|7}}.' },
    { type: 'mcq', q: 'Số lớn nhất trong các số 0,5; −2; {{3|4}}; {{2|3}} là:', options: ['0,5', '−2', '{{3|4}}', '{{2|3}}'], answer: 2, explain: '{{3|4}} = 0,75; {{2|3}} ≈ 0,67. Số lớn nhất là {{3|4}}.' }
  ]
});
