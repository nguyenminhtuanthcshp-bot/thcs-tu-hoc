/* Toán 7 – Bài 5. Làm quen với số thập phân vô hạn tuần hoàn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-7/bai-5', {
  objectives: [
    'Nhận biết số thập phân hữu hạn và số thập phân vô hạn tuần hoàn; xác định được chu kì.',
    'Viết được phân số dưới dạng số thập phân hữu hạn hoặc vô hạn tuần hoàn bằng phép chia.',
    'Biết làm tròn số thập phân đến một hàng cho trước.'
  ],
  intro: 'Chia 1 cho 3 trên máy tính em sẽ thấy 0,3333333… – các chữ số 3 cứ lặp mãi không dừng. Những số như vậy có tên riêng: số thập phân vô hạn tuần hoàn.',
  steps: [
    { title: 'Thập phân hữu hạn và vô hạn tuần hoàn', html: `<p>Chia tử cho mẫu của một phân số:</p><ul><li>Nếu phép chia <b>dừng lại</b> → số thập phân <b>hữu hạn</b>: {{3|8}} = 0,375.</li><li>Nếu phép chia <b>không bao giờ dừng</b> và có một nhóm chữ số lặp lại mãi → số thập phân <b>vô hạn tuần hoàn</b>: {{5|11}} = 0,454545…</li></ul>` },
    { title: 'Chu kì và cách viết gọn', html: `<p>Nhóm chữ số lặp lại gọi là <b>chu kì</b>. Ta viết chu kì trong dấu ngoặc tròn:</p>
      <p class="math">{{1|3}} = 0,333… = 0,(3); &nbsp; {{5|11}} = 0,4545… = 0,(45); &nbsp; {{1|6}} = 0,1666… = 0,1(6)</p>
      <p>Ở 0,1(6), chữ số 1 đứng trước chu kì, chu kì là 6.</p>`,
      svg: S.draw({ w: 420, h: 110, items: [{ text: [20, 50, '0,1666666…'], anchor: 'start', size: 26, bold: true }, { poly: [[58, 58], [74, 58], [74, 62], [58, 62]], fill: S.C.blue, color: 'none' }, { poly: [[78, 58], [178, 58], [178, 62], [78, 62]], fill: S.C.orange, color: 'none' }, { text: [66, 84, 'trước chu kì'], color: S.C.blue, size: 12, bold: true }, { text: [150, 84, 'chu kì 6 lặp mãi'], color: S.C.orange, size: 12, bold: true }, { text: [320, 50, '= 0,1(6)'], size: 24, bold: true, color: S.C.green }] }),
      caption: 'Viết gọn: đặt chu kì trong ngoặc tròn.' },
    { title: 'Nhận biết không cần chia', html: `<p>Với phân số <b>tối giản</b>, mẫu dương:</p><ul><li>Mẫu chỉ có ước nguyên tố 2 và 5 → thập phân hữu hạn. Ví dụ {{7|20}} (20 = 2<sup>2</sup> · 5) = 0,35.</li><li>Mẫu có ước nguyên tố khác 2 và 5 → vô hạn tuần hoàn. Ví dụ {{2|15}} (15 = 3 · 5) = 0,1(3).</li></ul>
      <div class="box note">Mọi số hữu tỉ đều viết được dưới dạng số thập phân hữu hạn hoặc vô hạn tuần hoàn.</div>` },
    { title: 'Làm tròn số thập phân', html: `<p>Làm tròn đến một hàng: nhìn chữ số <b>ngay bên phải</b> hàng đó.</p><ul><li>Nhỏ hơn 5: giữ nguyên chữ số hàng làm tròn, bỏ các chữ số sau.</li><li>Lớn hơn hoặc bằng 5: cộng thêm 1 vào chữ số hàng làm tròn, bỏ các chữ số sau.</li></ul>
      <p>Ví dụ: 0,(45) = 0,4545… ≈ 0,45 (hàng phần trăm); {{2|3}} = 0,666… ≈ 0,67.</p>` }
  ],
  summary: 'Chia tử cho mẫu: dừng → thập phân hữu hạn; không dừng, lặp mãi → vô hạn tuần hoàn, viết chu kì trong ngoặc: 0,(3). Phân số tối giản có mẫu chỉ chứa 2 và 5 thì hữu hạn.',
  examples: [
    { title: 'Viết dạng thập phân', problem: 'Viết {{7|12}} dưới dạng số thập phân và chỉ ra chu kì.', solution: '7 : 12 = 0,58333… = 0,58(3). Chu kì là 3.' },
    { title: 'Nhận biết trước khi chia', problem: 'Phân số nào viết được dạng thập phân hữu hạn: {{9|40}}; {{5|12}}; {{21|35}}?', solution: '{{9|40}}: 40 = 2<sup>3</sup> · 5 → hữu hạn (0,225).<br>{{5|12}}: 12 = 2<sup>2</sup> · 3 → vô hạn tuần hoàn.<br>{{21|35}} = {{3|5}} (phải rút gọn trước!) → hữu hạn (0,6).' },
    { title: 'Làm tròn', problem: 'Làm tròn 1,(27) đến hàng phần trăm.', solution: '1,(27) = 1,272727…; chữ số hàng phần nghìn là 2 &lt; 5 nên 1,(27) ≈ 1,27.' }
  ],
  exercises: [
    { question: 'Viết {{4|9}} và {{3|11}} dưới dạng số thập phân vô hạn tuần hoàn (viết gọn).', hints: ['Thực hiện 4 : 9 và 3 : 11.', 'Tìm nhóm chữ số lặp lại.'], solution: '{{4|9}} = 0,444… = 0,(4); {{3|11}} = 0,2727… = 0,(27).' },
    { question: 'Trong các phân số {{3|16}}, {{7|30}}, {{11|25}}, phân số nào viết được dưới dạng thập phân vô hạn tuần hoàn?', hints: ['Phân tích mẫu ra thừa số nguyên tố (các phân số đã tối giản).', '30 = 2 · 3 · 5.'], solution: 'Chỉ {{7|30}} (mẫu có ước nguyên tố 3). {{7|30}} = 0,2(3).' },
    { question: 'Làm tròn số {{5|7}} = 0,714285714… đến hàng phần nghìn.', hints: ['Hàng phần nghìn là chữ số thứ ba sau dấu phẩy (4).', 'Chữ số ngay sau là 2.'], solution: '2 &lt; 5 nên {{5|7}} ≈ 0,714.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Phân số nào viết được dưới dạng số thập phân hữu hạn?', options: ['{{1|3}}', '{{5|6}}', '{{7|8}}', '{{2|9}}'], answer: 2, explain: '8 = 2<sup>3</sup> chỉ có ước nguyên tố 2 nên {{7|8}} = 0,875.' },
    { type: 'short', calc: '(Math.floor(5 / 11 * 100) % 100)', q: 'Số {{5|11}} = 0,(45). Chu kì của nó là số nào?', answer: '45', explain: '5 : 11 = 0,454545…, nhóm 45 lặp lại.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: {{21|35}} viết được dưới dạng số thập phân hữu hạn.', answer: true, explain: 'Rút gọn {{21|35}} = {{3|5}} = 0,6.' },
    { type: 'short', calc: 'round(7 / 12, 2)', q: 'Làm tròn {{7|12}} = 0,58(3) đến hàng phần trăm.', answer: '0.58', answerText: '0,58', explain: '0,5833…: chữ số hàng phần nghìn là 3 &lt; 5 nên ≈ 0,58.' },
    { type: 'mcq', q: 'Cách viết gọn của 0,1666… là:', options: ['0,(16)', '0,1(6)', '0,(166)', '0,16'], answer: 1, explain: 'Chỉ chữ số 6 lặp lại, 1 đứng trước chu kì: 0,1(6).' },
    { type: 'short', calc: 'round(2 / 3, 2)', q: 'Làm tròn {{2|3}} đến hàng phần trăm.', answer: '0.67', answerText: '0,67', explain: '0,666…; chữ số hàng phần nghìn là 6 ≥ 5 nên ≈ 0,67.' },
    { type: 'short', calc: '9 / 40', q: 'Viết {{9|40}} dưới dạng số thập phân.', answer: '0.225', answerText: '0,225', explain: '9 : 40 = 0,225 (dừng lại, hữu hạn).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có số hữu tỉ không viết được dưới dạng số thập phân hữu hạn hay vô hạn tuần hoàn.', answer: false, explain: 'Mọi số hữu tỉ đều viết được dưới dạng thập phân hữu hạn hoặc vô hạn tuần hoàn.' }
  ]
});
})();
