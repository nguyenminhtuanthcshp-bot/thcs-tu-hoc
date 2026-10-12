/* Tin học 9 – Bài 11a. Sử dụng hàm SUMIF. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-11a', {
  objectives: [
    'Nêu được cú pháp và ý nghĩa của hàm SUMIF.',
    'Phân biệt được vùng kiểm tra điều kiện và vùng tính tổng.',
    'Sử dụng được SUMIF để tính tổng có điều kiện trong bài toán thu chi, bán hàng.'
  ],
  intro: 'Sổ thu chi của gia đình có hàng trăm dòng. Tháng này chi cho <b>ăn uống</b> hết bao nhiêu? Hàm <b>SUMIF</b> cộng đúng những khoản thoả mãn điều kiện.',
  steps: [
    { title: 'Cú pháp', html: `<p><code>=SUMIF(vùng_điều_kiện, điều_kiện, [vùng_tính_tổng])</code></p><ul><li><b>vùng_điều_kiện</b>: nơi kiểm tra điều kiện.</li><li><b>điều_kiện</b>: giống như COUNTIF.</li><li><b>vùng_tính_tổng</b>: các ô được cộng (cùng hàng với ô thoả mãn). Nếu bỏ qua, cộng ngay trên vùng điều kiện.</li></ul>` },
    { title: 'Ví dụ: tổng chi theo khoản mục', html: `<p>Sổ chi tiêu (đơn vị: nghìn đồng, số liệu minh hoạ):</p>`,
      svg: S.sheet({ title: 'Tổng chi cho “Ăn uống”', cols: ['A', 'B', 'C', 'D', 'E'], rows: [['Ngày', 'Khoản mục', 'Số tiền', 'Khoản', 'Tổng'], ['01/10', 'Ăn uống', 350, 'Ăn uống', 870], ['03/10', 'Đi lại', 120, 'Đi lại', 200], ['05/10', 'Ăn uống', 280, 'Học tập', 150], ['08/10', 'Học tập', 150, '', ''], ['10/10', 'Đi lại', 80, '', ''], ['12/10', 'Ăn uống', 240, '', '']], active: 'E2', formula: '=SUMIF($B$2:$B$7,D2,$C$2:$C$7)', colW: 100 }), caption: 'Cộng 350 + 280 + 240 = 870.' },
    { title: 'Điều kiện so sánh', html: `<p>Tổng các khoản chi lớn từ 200 nghìn trở lên: <code>=SUMIF(C2:C7,"&gt;=200")</code> = 350 + 280 + 240 = 870 (vùng điều kiện cũng là vùng tính tổng).</p>`,
      svg: S.bar({ title: 'Chi tiêu theo khoản mục (nghìn đồng, minh hoạ)', cats: ['Ăn uống', 'Đi lại', 'Học tập'], series: [{ name: 'nghìn đồng', values: [870, 200, 150], color: '#0e7490' }], width: 460, height: 260 }), caption: 'Biểu đồ từ kết quả SUMIF.' },
    { title: 'Lưu ý', html: `<ul><li>Vùng điều kiện và vùng tính tổng phải cùng kích thước.</li><li>Dùng địa chỉ tuyệt đối cho hai vùng khi sao chép công thức xuống các khoản mục khác.</li></ul>
      <div class="box key">SUMIF = COUNTIF + cộng giá trị tương ứng.</div>` }
  ],
  summary: 'Hàm =SUMIF(vùng_điều_kiện, điều_kiện, vùng_tính_tổng) cộng các ô trong vùng tính tổng có ô tương ứng ở vùng điều kiện thoả mãn điều kiện; bỏ vùng tính tổng thì cộng ngay trên vùng điều kiện. Hai vùng cùng kích thước; dùng địa chỉ tuyệt đối khi sao chép.',
  examples: [
    { title: 'Tính tổng', problem: 'Theo bảng bước 2, =SUMIF(B2:B7,"Đi lại",C2:C7)?', solution: '120 + 80 = 200.' },
    { title: 'Bỏ vùng tính tổng', problem: '=SUMIF(C2:C7,"<200") = ?', solution: '120 + 150 + 80 = 350.' },
    { title: 'Tỉ lệ', problem: 'Chi ăn uống chiếm bao nhiêu phần trăm tổng chi (1 220)?', solution: '870 : 1 220 ≈ 71,3%.' }
  ],
  exercises: [
    { question: 'Viết công thức tính tổng tiền bán được của mặt hàng “Vở” (tên hàng ở A2:A50, thành tiền ở D2:D50).', hints: ['Vùng điều kiện là cột tên hàng.', 'Vùng tính tổng là cột thành tiền.'], solution: '=SUMIF(A2:A50,"Vở",D2:D50).' },
    { question: 'Vì sao công thức ở E2 (bước 2) dùng $B$2:$B$7 và $C$2:$C$7?', hints: ['Công thức sẽ được sao chép xuống E3, E4.', 'Điều gì xảy ra với địa chỉ tương đối?'], solution: 'Để hai vùng không bị trượt khi sao chép; chỉ D2 thay đổi thành D3, D4.' },
    { question: 'Các khoản chi: 150, 420, 90, 310, 60 (nghìn đồng). Tính =SUMIF(vùng,">=100").', hints: ['Chọn các số ≥ 100.', 'Cộng lại.'], solution: '150 + 420 + 310 = 880.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hàm SUMIF tính tổng các giá trị thoả mãn điều kiện.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Khoản mục: Ăn, Đi, Ăn, Học; số tiền: 100, 50, 200, 80. =SUMIF(khoản mục,"Ăn",số tiền)?', answer: '300', calc: '100+200', explain: '100 + 200.' },
    { type: 'short', q: 'Vùng chứa 120, 40, 300, 75. Kết quả =SUMIF(vùng,">100")?', answer: '420', calc: '120+300', explain: '120 + 300.' },
    { type: 'mcq', q: 'Trong =SUMIF(B2:B9,"Vở",D2:D9), vùng tính tổng là:', options: ['B2:B9', '"Vở"', 'D2:D9', 'B2:D9'], answer: 2, explain: 'D2:D9.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vùng điều kiện và vùng tính tổng có thể khác kích thước tuỳ ý.', answer: false, explain: 'Phải cùng kích thước.' },
    { type: 'short', q: 'Tổng chi 2 000 nghìn, chi ăn uống 900 nghìn. Ăn uống chiếm bao nhiêu phần trăm?', answer: '45', unit: '%', calc: '900/2000*100', explain: '45%.' },
    { type: 'mcq', q: 'Khi bỏ đối số thứ ba, SUMIF cộng:', options: ['trên chính vùng điều kiện', 'không cộng gì', 'cả trang tính', 'vùng bên phải'], answer: 0, explain: 'Cộng trên vùng điều kiện.' },
    { type: 'short', q: 'Vùng chứa 60, 250, 90, 400. Kết quả =SUMIF(vùng,"<100")?', answer: '150', calc: '60+90', explain: '150.' }
  ]
});
})();
