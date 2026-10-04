/* Toán 8 – Bài 30. Kết quả có thể và kết quả thuận lợi. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  function spinner(labels, cols) {
    var n = labels.length, cx = 130, cy = 120, r = 95, it = [];
    for (var i = 0; i < n; i++) {
      var a0 = -Math.PI / 2 + i * 2 * Math.PI / n, a1 = a0 + 2 * Math.PI / n, pts = [[cx, cy]];
      for (var k = 0; k <= 20; k++) { var a = a0 + (a1 - a0) * k / 20; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
      it.push({ poly: pts, fill: cols[i % cols.length], color: '#fff', width: 2 });
      var am = (a0 + a1) / 2; it.push({ text: [cx + r * 0.62 * Math.cos(am), cy + r * 0.62 * Math.sin(am) + 6, labels[i]], bold: true, size: 18 });
    }
    it.push({ circle: [cx, cy, 8], fill: C.ink, color: C.ink });
    it.push({ poly: [[cx - 9, 6], [cx + 9, 6], [cx, 30]], fill: C.red, color: C.red });
    return S.draw({ w: 260, h: 230, items: it, aria: 'Vòng quay chia ' + n + ' phần bằng nhau' });
  }
  function bag(cols) {
    var it = [{ poly: [[40, 50], [220, 50], [240, 190], [20, 190]], fill: '#fef3c7', color: '#a16207', width: 2 }];
    cols.forEach(function (c, i) { var col = i % 5, row = Math.floor(i / 5); it.push({ circle: [60 + col * 36, 90 + row * 44, 15], fill: c, color: C.ink, width: 1.2 }); });
    return S.draw({ w: 260, h: 210, items: it, aria: 'Túi đựng các quả bóng màu' });
  }
  THCS.registerLesson('toan-8/bai-30', {
    objectives: [
      'Nhận biết được các kết quả có thể của một phép thử (hành động, thực nghiệm).',
      'Nhận biết được tính đồng khả năng của các kết quả có thể.',
      'Xác định được các kết quả thuận lợi cho một biến cố.'
    ],
    intro: 'Gieo xúc xắc, quay vòng quay may mắn, rút thăm… đều là những phép thử mà ta không biết trước kết quả. Nhưng ta biết được “những gì có thể xảy ra”.',
    steps: [
      { title: 'Kết quả có thể', html: `<p>Khi thực hiện một phép thử (gieo, quay, rút…), tất cả những kết quả có thể xảy ra gọi là <b>các kết quả có thể</b>.</p>
        <p>Ví dụ: quay vòng quay chia 8 phần bằng nhau đánh số 1 đến 8: có 8 kết quả có thể.</p>`, svg: spinner(['1', '2', '3', '4', '5', '6', '7', '8'], [C.blueL, C.orangeL, C.greenL, C.purpleL]), caption: 'Vòng quay 8 phần bằng nhau; mũi tên chỉ kết quả.' },
      { title: 'Các kết quả đồng khả năng', html: `<p>Các kết quả có thể gọi là <b>đồng khả năng</b> nếu chúng có khả năng xảy ra như nhau. Ví dụ: đồng xu cân đối, xúc xắc cân đối, các phần của vòng quay bằng nhau, các quả bóng giống hệt nhau về kích thước.</p>
        <div class="box warn">Nếu vòng quay chia thành các phần không bằng nhau thì các kết quả <b>không</b> đồng khả năng.</div>` },
      { title: 'Kết quả thuận lợi cho biến cố', html: `<p>Một <b>biến cố</b> gắn với phép thử là một sự kiện có thể xảy ra hoặc không, tuỳ theo kết quả. Kết quả làm cho biến cố xảy ra gọi là <b>kết quả thuận lợi</b> cho biến cố đó.</p>
        <p>Với vòng quay trên, biến cố A: “Mũi tên chỉ vào ô ghi số chẵn” có 4 kết quả thuận lợi: 2, 4, 6, 8.</p>` },
      { title: 'Ví dụ với túi bóng', html: `<p>Túi có 3 bóng đỏ, 5 bóng xanh, 2 bóng vàng (cùng kích thước). Lấy ngẫu nhiên 1 bóng: có 10 kết quả có thể, đồng khả năng. Biến cố “Lấy được bóng xanh” có 5 kết quả thuận lợi.</p>`,
        svg: bag([C.red, C.red, C.red, C.blue, C.blue, C.blue, C.blue, C.blue, '#facc15', '#facc15']), caption: '3 đỏ, 5 xanh, 2 vàng.' }
    ],
    summary: 'Kết quả có thể: mọi kết quả có thể xảy ra. Đồng khả năng: khả năng như nhau. Kết quả thuận lợi: kết quả làm biến cố xảy ra.',
    examples: [
      { title: 'Gieo xúc xắc', problem: 'Gieo một xúc xắc cân đối. Liệt kê các kết quả có thể và các kết quả thuận lợi cho biến cố “Số chấm là số nguyên tố”.', solution: 'Kết quả có thể: 1, 2, 3, 4, 5, 6. Thuận lợi: 2, 3, 5 (3 kết quả).' },
      { title: 'Rút thẻ', problem: 'Hộp có 20 thẻ đánh số 1 đến 20. Rút ngẫu nhiên 1 thẻ. Có bao nhiêu kết quả thuận lợi cho biến cố “Số trên thẻ chia hết cho 3”?', solution: 'Các số 3, 6, 9, 12, 15, 18: 6 kết quả thuận lợi.' },
      { title: 'Chọn học sinh', problem: 'Tổ có 4 bạn nam (An, Bình, Cường, Dũng) và 3 bạn nữ (Hoa, Lan, Mai). Chọn ngẫu nhiên 1 bạn làm tổ trưởng. Nêu các kết quả thuận lợi cho biến cố “Chọn được bạn nữ”.', solution: 'Hoa, Lan, Mai (3 kết quả thuận lợi trong 7 kết quả có thể).' }
    ],
    exercises: [
      { question: 'Tung một đồng xu hai lần. Liệt kê các kết quả có thể.', hints: ['Mỗi lần có hai khả năng: S (sấp), N (ngửa).', 'Ghi theo thứ tự lần 1 – lần 2.'], solution: 'SS, SN, NS, NN (4 kết quả).' },
      { question: 'Gieo xúc xắc. Tìm các kết quả thuận lợi cho biến cố “Số chấm lớn hơn 4”.', hints: ['Các số chấm có thể từ 1 đến 6.', 'Lớn hơn 4 là 5 và 6.'], solution: '5 và 6.' },
      { question: 'Túi có 3 bóng đỏ, 5 bóng xanh, 2 bóng vàng. Biến cố “Không lấy được bóng xanh” có bao nhiêu kết quả thuận lợi?', hints: ['Không xanh nghĩa là đỏ hoặc vàng.', '3 + 2.'], solution: '5 kết quả.' }
    ],
    quiz: [
      { type: 'short', calc: '6', q: 'Gieo một xúc xắc cân đối. Có bao nhiêu kết quả có thể?', answer: '6', explain: '1, 2, 3, 4, 5, 6.' },
      { type: 'short', calc: '3', q: 'Gieo xúc xắc, biến cố “Số chấm là số nguyên tố” có bao nhiêu kết quả thuận lợi?', answer: '3', explain: '2, 3, 5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu vòng quay chia thành các phần không bằng nhau thì các kết quả vẫn đồng khả năng.', answer: false, explain: 'Phần lớn hơn có khả năng xảy ra cao hơn.' },
      { type: 'short', calc: '4', q: 'Tung một đồng xu hai lần. Có bao nhiêu kết quả có thể?', answer: '4', explain: 'SS, SN, NS, NN.' },
      { type: 'mcq', q: 'Vòng quay 8 ô số 1–8. Kết quả thuận lợi cho “Số chẵn” là:', options: ['1, 3, 5, 7', '2, 4, 6, 8', '2, 4, 6', '4, 8'], answer: 1, explain: 'Các số chẵn từ 1 đến 8.' },
      { type: 'short', calc: '6', q: 'Rút 1 thẻ từ 20 thẻ số 1–20. Có bao nhiêu kết quả thuận lợi cho “Số chia hết cho 3”?', answer: '6', explain: '3, 6, 9, 12, 15, 18.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Túi 3 đỏ, 5 xanh, 2 vàng; biến cố “Lấy được bóng xanh” có 5 kết quả thuận lợi.', answer: true, explain: 'Mỗi quả bóng xanh là một kết quả thuận lợi.' },
      { type: 'mcq', q: 'Trường hợp nào các kết quả có thể là đồng khả năng?', options: ['Gieo xúc xắc bị mài lệch một mặt', 'Rút 1 bóng từ túi các bóng cùng kích thước', 'Quay vòng quay có ô to ô nhỏ', 'Tung đồng xu cong vênh'], answer: 1, explain: 'Các bóng giống nhau về kích thước nên khả năng như nhau.' }
    ]
  });
})();
