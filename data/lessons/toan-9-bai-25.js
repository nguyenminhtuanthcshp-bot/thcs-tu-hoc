/* Toán 9 – Bài 25. Phép thử ngẫu nhiên và không gian mẫu. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-9/bai-25', {
    objectives: [
      'Nhận biết được phép thử ngẫu nhiên và kết quả có thể của phép thử.',
      'Mô tả được không gian mẫu Ω và đếm số phần tử của nó.',
      'Liệt kê không gian mẫu của phép thử hai bước bằng sơ đồ cây hoặc bảng.'
    ],
    intro: 'Gieo một đồng xu, rút một lá thăm, quay một vòng quay may mắn… Ta biết trước các kết quả có thể xảy ra nhưng không biết kết quả nào sẽ xảy ra. Đó là các phép thử ngẫu nhiên.',
    steps: [
      { title: 'Phép thử ngẫu nhiên', html: `<p><b>Phép thử ngẫu nhiên</b> (gọi tắt là phép thử) là một hoạt động mà ta không biết trước kết quả của nó, nhưng biết được tập hợp tất cả các kết quả có thể xảy ra.</p><p>Ví dụ: gieo một con xúc xắc; lấy ngẫu nhiên một viên bi trong hộp; chọn ngẫu nhiên một bạn trong lớp.</p>` },
      { title: 'Không gian mẫu', html: `<p>Tập hợp tất cả các kết quả có thể xảy ra của phép thử gọi là <b>không gian mẫu</b>, kí hiệu <b>Ω</b>.</p><ul><li>Gieo một đồng xu: Ω = {S; N} (S: sấp, N: ngửa), có 2 phần tử.</li><li>Gieo một xúc xắc: Ω = {1; 2; 3; 4; 5; 6}, có 6 phần tử.</li></ul>` },
      { title: 'Sơ đồ cây', html: `<p>Với phép thử gồm nhiều bước, vẽ <b>sơ đồ cây</b>: mỗi tầng ứng với một bước, mỗi nhánh là một kết quả của bước đó. Gieo đồng xu hai lần:</p>`,
        svg: S.probTree({ levels: [['S', 'N'], ['S', 'N']], names: ['Lần 1', 'Lần 2'] }), caption: 'Ω = {SS; SN; NS; NN} gồm 4 kết quả.' },
      { title: 'Bảng kết quả', html: `<p>Gieo hai con xúc xắc (một xanh, một đỏ): mỗi kết quả là cặp (i, j). Lập bảng 6 × 6 ta có 36 kết quả.</p>`,
        svg: S.outcomeGrid({ rows: [1, 2, 3, 4, 5, 6], cols: [1, 2, 3, 4, 5, 6], rowName: 'Xanh', colName: 'Xúc xắc đỏ', cell: function (r, c) { return '(' + r + ',' + c + ')'; } }), caption: 'Không gian mẫu khi gieo hai xúc xắc có 36 phần tử.' },
      { title: 'Lưu ý khi mô tả Ω', html: `<ul><li>Phải xác định rõ thứ tự (lần 1, lần 2) hay không, lấy có hoàn lại hay không.</li><li>Lấy lần lượt 2 viên bi <b>không hoàn lại</b> từ hộp có 3 bi A, B, C: Ω = {AB; AC; BA; BC; CA; CB} có 6 phần tử.</li><li>Lấy <b>đồng thời</b> 2 viên: Ω = {AB; AC; BC} có 3 phần tử.</li></ul>` }
    ],
    summary: 'Phép thử ngẫu nhiên: biết tập kết quả có thể, không biết trước kết quả. Không gian mẫu Ω là tập mọi kết quả có thể. Dùng sơ đồ cây hoặc bảng để liệt kê Ω của phép thử nhiều bước.',
    examples: [
      { title: 'Viết không gian mẫu', problem: 'Một hộp có 4 tấm thẻ ghi số 2, 4, 6, 8. Rút ngẫu nhiên một thẻ. Mô tả Ω.', solution: 'Ω = {2; 4; 6; 8}, có 4 phần tử.' },
      { title: 'Hai bước', problem: 'Gieo một đồng xu rồi gieo một xúc xắc. Không gian mẫu có bao nhiêu phần tử?', solution: 'Mỗi mặt đồng xu đi với 6 mặt xúc xắc: 2 · 6 = 12 phần tử (S1, …, S6, N1, …, N6).' },
      { title: 'Chọn người', problem: 'Chọn ngẫu nhiên 1 bạn nam và 1 bạn nữ từ nhóm gồm 3 nam (An, Bình, Cường) và 2 nữ (Dung, Hà). Liệt kê Ω.', solution: 'Ω = {(An, Dung); (An, Hà); (Bình, Dung); (Bình, Hà); (Cường, Dung); (Cường, Hà)} gồm 6 kết quả.' }
    ],
    exercises: [
      { question: 'Gieo một đồng xu ba lần liên tiếp. Không gian mẫu có bao nhiêu phần tử? Liệt kê.', hints: ['Mỗi lần có 2 kết quả.', 'Vẽ sơ đồ cây 3 tầng.'], solution: '8 phần tử: SSS, SSN, SNS, SNN, NSS, NSN, NNS, NNN.' },
      { question: 'Lấy lần lượt 2 viên bi không hoàn lại từ hộp có 4 bi đánh số 1, 2, 3, 4. Ω có bao nhiêu phần tử?', hints: ['Lần 1 có 4 cách, lần 2 còn 3 cách.', '4 · 3.'], solution: '12 phần tử.' },
      { question: 'Vòng quay chia 5 ô bằng nhau ghi các số 1 đến 5. Quay hai lần. Ω có bao nhiêu phần tử?', hints: ['Mỗi lần có 5 kết quả.', 'Có thứ tự.'], solution: '25 phần tử.' }
    ],
    quiz: [
      { type: 'short', calc: '2 * 6', q: 'Gieo một đồng xu rồi gieo một xúc xắc. Số phần tử của Ω?', answer: '12', explain: '2 · 6.' },
      { type: 'short', calc: '6 * 6', q: 'Gieo hai con xúc xắc. Số phần tử của không gian mẫu?', answer: '36', explain: '6 · 6.' },
      { type: 'short', calc: '2 ** 3', q: 'Gieo một đồng xu ba lần. Số phần tử của Ω?', answer: '8', explain: '2 · 2 · 2.' },
      { type: 'short', calc: '4 * 3', q: 'Lấy lần lượt 2 bi không hoàn lại từ hộp 4 bi đánh số. Số phần tử của Ω?', answer: '12', explain: '4 · 3.' },
      { type: 'short', calc: '3 * 2 / 2', q: 'Lấy đồng thời 2 viên từ hộp có 3 bi A, B, C. Số phần tử của Ω?', answer: '3', explain: 'AB, AC, BC.' },
      { type: 'mcq', q: 'Hoạt động nào là phép thử ngẫu nhiên?', options: ['Đếm số ngày trong tuần', 'Gieo một con xúc xắc', 'Đo chiều dài quyển sách', 'Tính 2 + 3'], answer: 1, explain: 'Không biết trước mặt nào xuất hiện.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi gieo đồng xu hai lần, SN và NS là hai kết quả khác nhau.', answer: true, explain: 'Thứ tự các lần gieo khác nhau.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rút một thẻ từ hộp có 4 thẻ ghi 2, 4, 6, 8 thì không gian mẫu có 8 phần tử.', answer: false, explain: 'Ω = {2; 4; 6; 8} có 4 phần tử.' }
    ]
  });
})();
