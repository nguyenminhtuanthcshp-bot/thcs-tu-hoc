/* KHTN 9 – Bài 42. Nhiễm sắc thể và bộ nhiễm sắc thể. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-42', {
  objectives: [
    'Nêu được khái niệm nhiễm sắc thể (NST); mô tả được cấu trúc NST ở kì giữa (chromatid, tâm động).',
    'Nêu được khái niệm bộ NST lưỡng bội (2n), đơn bội (n), cặp NST tương đồng; NST thường và NST giới tính.',
    'Nêu được tính đặc trưng của bộ NST mỗi loài và chức năng của NST.'
  ],
  intro: 'Nếu kéo thẳng toàn bộ DNA trong nhân một tế bào người, ta được sợi dài khoảng 2 m (tham khảo). Vậy mà nó vẫn nằm gọn trong nhân tế bào có đường kính vài micromét – nhờ được cuộn xoắn chặt chẽ thành các <b>nhiễm sắc thể</b>.',
  steps: [
    { title: 'Nhiễm sắc thể là gì?', html: `<p><b>Nhiễm sắc thể (NST)</b> là cấu trúc nằm trong nhân tế bào, dễ bắt màu khi nhuộm bằng thuốc nhuộm kiềm tính, được cấu tạo từ <b>DNA và protein histone</b>. NST là vật chất di truyền ở cấp độ tế bào.</p>
      <p>NST có hình dạng đặc trưng rõ nhất ở <b>kì giữa</b> của phân bào: mỗi NST kép gồm <b>hai chromatid</b> giống hệt nhau, đính với nhau ở <b>tâm động</b>.</p>`,
      svg: S.chromosome(), caption: 'NST kép ở kì giữa: hai chromatid dính nhau ở tâm động.' },
    { title: 'Bộ NST lưỡng bội và đơn bội', html: `<ul><li>Trong tế bào sinh dưỡng (tế bào xôma), NST tồn tại thành từng <b>cặp tương đồng</b> (giống nhau về hình dạng, kích thước; một chiếc từ bố, một chiếc từ mẹ) ⇒ bộ NST <b>lưỡng bội 2n</b>.</li><li>Trong giao tử (tinh trùng, trứng), mỗi cặp chỉ còn một chiếc ⇒ bộ NST <b>đơn bội n</b>.</li></ul>
      <table><tr><th>Loài</th><th>2n</th><th>n</th></tr><tr><td>Người</td><td>46</td><td>23</td></tr><tr><td>Ruồi giấm</td><td>8</td><td>4</td></tr><tr><td>Đậu Hà Lan</td><td>14</td><td>7</td></tr><tr><td>Lúa nước</td><td>24</td><td>12</td></tr></table>` },
    { title: 'NST thường và NST giới tính', html: `<p>Bộ NST người gồm 22 cặp <b>NST thường</b> (giống nhau ở nam và nữ) và 1 cặp <b>NST giới tính</b>: nữ XX, nam XY.</p>
      <p>Mỗi loài có bộ NST đặc trưng về <b>số lượng, hình dạng, cấu trúc</b>. Số lượng NST không phản ánh mức độ tiến hoá (ví dụ tôm có nhiều NST hơn người).</p>`,
      svg: S.karyotype({ sex: 'XY' }), caption: 'Sơ đồ bộ NST của nam giới: 22 cặp NST thường và cặp NST giới tính XY.' },
    { title: 'Chức năng của NST', html: `<ul><li>Mang gene: mỗi NST chứa một phân tử DNA với nhiều gene sắp xếp theo hàng dọc.</li><li>Lưu giữ, bảo quản thông tin di truyền.</li><li>Truyền đạt thông tin di truyền qua các thế hệ tế bào (nguyên phân) và thế hệ cơ thể (giảm phân, thụ tinh).</li></ul>` }
  ],
  summary: 'NST gồm DNA và protein histone, nằm trong nhân; ở kì giữa mỗi NST kép gồm hai chromatid dính ở tâm động. Tế bào sinh dưỡng có bộ 2n (các cặp tương đồng), giao tử có bộ n. Người 2n = 46 (22 cặp NST thường + XX hoặc XY). Bộ NST đặc trưng cho loài; NST mang gene, lưu giữ và truyền đạt thông tin di truyền.',
  examples: [
    { title: 'Số NST', problem: 'Lúa nước có 2n = 24. Tính số NST trong tế bào lá và trong hạt phấn (giao tử).', solution: 'Tế bào lá: 2n = 24; giao tử: n = 12.' },
    { title: 'Số chromatid', problem: 'Ở kì giữa, một tế bào ruồi giấm (2n = 8) có bao nhiêu chromatid?', solution: '8 NST kép · 2 = 16 chromatid.' },
    { title: 'NST thường', problem: 'Trong tế bào sinh dưỡng của người có bao nhiêu NST thường?', solution: '22 cặp = 44 NST thường (cộng 2 NST giới tính).' }
  ],
  exercises: [
    { question: 'Đậu Hà Lan có 2n = 14. Xác định số NST trong tế bào sinh dưỡng, giao tử và số cặp tương đồng.', hints: ['Giao tử có n.', 'Số cặp = n.'], solution: 'Sinh dưỡng: 14; giao tử: 7; số cặp tương đồng: 7.' },
    { question: 'Phân biệt bộ NST lưỡng bội và đơn bội.', hints: ['NST tồn tại thành cặp hay chiếc lẻ?', 'Có ở loại tế bào nào?'], solution: 'Lưỡng bội (2n): NST thành từng cặp tương đồng, có ở tế bào sinh dưỡng. Đơn bội (n): mỗi cặp chỉ một chiếc, có ở giao tử.' },
    { question: 'Vì sao nói số lượng NST không phản ánh mức độ tiến hoá của loài?', hints: ['So sánh vài loài với người.', 'Điều gì mới đặc trưng?'], solution: 'Vì nhiều loài ít tiến hoá hơn lại có nhiều NST hơn người (ví dụ một số loài tôm, cây dương xỉ). Điều đặc trưng là số lượng, hình dạng, cấu trúc của bộ NST.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bộ NST lưỡng bội của người là 2n = 46.', answer: true, explain: '23 cặp NST.' },
    { type: 'mcq', q: 'NST được cấu tạo từ:', options: ['DNA và protein histone', 'RNA và lipid', 'chỉ protein', 'chỉ carbohydrate'], answer: 0, explain: 'DNA quấn quanh protein histone.' },
    { type: 'short', q: 'Ruồi giấm có 2n = 8. Giao tử của ruồi giấm có bao nhiêu NST?', answer: '4', unit: 'NST', calc: '8/2', explain: 'n = 4.' },
    { type: 'mcq', q: 'Cặp NST giới tính của nam giới là:', options: ['XX', 'XY', 'YY', 'XO'], answer: 1, explain: 'Nam XY, nữ XX.' },
    { type: 'short', q: 'Ở kì giữa, tế bào người (2n = 46) có bao nhiêu chromatid?', answer: '92', unit: 'chromatid', calc: '46*2', explain: 'Mỗi NST kép có 2 chromatid.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Loài có nhiều NST hơn thì luôn tiến hoá hơn.', answer: false, explain: 'Số lượng NST không phản ánh mức tiến hoá.' },
    { type: 'mcq', q: 'Hai chromatid của NST kép đính với nhau tại:', options: ['tâm động', 'đầu mút', 'ribosome', 'màng nhân'], answer: 0, explain: 'Tâm động.' },
    { type: 'short', q: 'Tế bào sinh dưỡng của người có bao nhiêu NST thường?', answer: '44', unit: 'NST', calc: '46-2', explain: '46 − 2 NST giới tính.' }
  ]
});
})();
