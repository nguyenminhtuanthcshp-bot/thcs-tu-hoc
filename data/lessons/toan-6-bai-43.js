/* Toán 6 – Bài 43. Xác suất thực nghiệm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var dice = S.bar({ title: 'Kết quả gieo xúc xắc 50 lần', cats: ['1 chấm', '2 chấm', '3 chấm', '4 chấm', '5 chấm', '6 chấm'], series: [{ name: 'Số lần', values: [7, 9, 8, 10, 6, 10] }], yMax: 12, yStep: 2, yLabel: 'Số lần' });
THCS.registerLesson('toan-6/bai-43', {
  objectives: [
    'Hiểu xác suất thực nghiệm của một sự kiện sau nhiều lần lặp lại trò chơi, thí nghiệm.',
    'Tính được xác suất thực nghiệm bằng tỉ số giữa số lần sự kiện xảy ra và tổng số lần thực hiện.',
    'Dùng bảng, biểu đồ kết quả để tính xác suất thực nghiệm và nêu nhận xét.'
  ],
  intro: 'Nếu tung một đồng xu 100 lần, liệu có đúng 50 lần ngửa không? Hãy cùng ghi chép kết quả và dùng một phân số để đo “mức độ thường xuyên” của sự kiện.',
  steps: [
    { title: 'Lặp lại và ghi chép', html: `<p>Thực hiện trò chơi, thí nghiệm nhiều lần; mỗi lần ghi lại sự kiện có xảy ra hay không (có thể dùng vạch kiểm đếm).</p>` },
    { title: 'Công thức', html: `<p>Thực hiện <b>n</b> lần, sự kiện A xảy ra <b>k</b> lần. Khi đó</p>
      <p class="formula">Xác suất thực nghiệm của A = {{k|n}} = (số lần A xảy ra) : (tổng số lần thực hiện)</p>
      <p>Kết quả là một phân số từ 0 đến 1; có thể viết dạng số thập phân hoặc phần trăm.</p>` },
    { title: 'Đọc từ biểu đồ', html: `<p>Bạn Nam gieo xúc xắc 50 lần và vẽ biểu đồ dưới đây. Xác suất thực nghiệm gieo được mặt 4 chấm là {{10|50}} = {{1|5}}.</p>`,
      svg: dice, caption: 'Số lần xuất hiện mỗi mặt sau 50 lần gieo.' },
    { title: 'Sự kiện gồm nhiều kết quả', html: `<p>Sự kiện “số chấm chẵn” xảy ra khi ra mặt 2, 4 hoặc 6: k = 9 + 10 + 10 = 29, nên xác suất thực nghiệm là {{29|50}} = 0,58.</p>` },
    { title: 'Nhận xét', html: `<p>Xác suất thực nghiệm phụ thuộc vào lần thử cụ thể; làm lại có thể ra số khác. Số lần thử càng nhiều, xác suất thực nghiệm càng ổn định, giúp ta dự đoán tốt hơn.</p>` }
  ],
  summary: 'Xác suất thực nghiệm = số lần sự kiện xảy ra : tổng số lần thực hiện. Dùng nó để ước lượng khả năng xảy ra của sự kiện.',
  examples: [
    { title: 'Tung đồng xu', problem: 'Tung đồng xu 40 lần, có 18 lần ngửa. Tính xác suất thực nghiệm xuất hiện mặt ngửa và mặt sấp.', solution: 'Ngửa: {{18|40}} = {{9|20}} = <b>0,45</b>. Sấp: 40 − 18 = 22 lần ⇒ {{22|40}} = <b>0,55</b>.' },
    { title: 'Theo biểu đồ', problem: 'Theo biểu đồ ở bước 3, tính xác suất thực nghiệm gieo được mặt có số chấm lớn hơn 4.', solution: 'Mặt 5 và 6: 6 + 10 = 16 lần ⇒ {{16|50}} = <b>0,32</b>.' },
    { title: 'Dự đoán', problem: 'Một cửa hàng ghi nhận trong 200 khách có 50 khách mua kèm nước. Ước lượng số khách mua kèm nước trong 1 000 khách.', solution: 'Xác suất thực nghiệm {{50|200}} = {{1|4}}. Ước lượng: 1 000 · {{1|4}} = <b>250 khách</b>.' }
  ],
  exercises: [
    { question: 'Lấy bóng có hoàn lại 30 lần từ hộp có bóng đỏ và bóng xanh, được 12 lần bóng đỏ. Tính xác suất thực nghiệm lấy được bóng xanh.', hints: ['Số lần bóng xanh = 30 − 12.', 'Lập tỉ số với 30 rồi rút gọn.'], solution: '{{18|30}} = <b>{{3|5}}</b>.' },
    { question: 'Theo biểu đồ ở bước 3, tính xác suất thực nghiệm gieo được mặt 1 chấm.', hints: ['Đọc số lần của mặt 1 chấm.', 'Chia cho 50.'], solution: '{{7|50}} = <b>0,14</b>.' },
    { question: 'Một xạ thủ bắn 25 phát, trúng 20 phát. Tính xác suất thực nghiệm bắn trúng dưới dạng phần trăm.', hints: ['Lập tỉ số {{20|25}}.', 'Đổi ra phần trăm: nhân 100%.'], solution: '{{20|25}} = <b>80%</b>.' }
  ],
  quiz: [
    { type: 'short', q: 'Tung đồng xu 20 lần, có 11 lần sấp. Xác suất thực nghiệm xuất hiện mặt sấp là (viết số thập phân)?', answer: '0,55', calc: '11/20', explain: '{{11|20}} = 0,55.' },
    { type: 'short', requireSimplest: true, q: 'Tung đồng xu 20 lần, có 11 lần sấp. Xác suất thực nghiệm xuất hiện mặt ngửa là (phân số tối giản)?', answer: '9/20', calc: '(20-11)/20', explain: '20 − 11 = 9 ⇒ {{9|20}}.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 3, xác suất thực nghiệm gieo được mặt 2 chấm là (số thập phân)?', answer: '0,18', calc: '9/50', explain: '{{9|50}} = 0,18.' },
    { type: 'short', q: 'Theo biểu đồ ở bước 3, xác suất thực nghiệm gieo được mặt có số chấm lẻ là (số thập phân)?', answer: '0,42', calc: '(7+8+6)/50', explain: '7 + 8 + 6 = 21 ⇒ {{21|50}} = 0,42.' },
    { type: 'mcq', q: 'Gieo xúc xắc 60 lần, mặt 6 chấm xuất hiện 12 lần. Xác suất thực nghiệm xuất hiện mặt 6 chấm là:', options: ['{{1|6}}', '{{1|5}}', '{{1|12}}', '{{6|60}}'], answer: 1, calc: '12/60', explain: '{{12|60}} = {{1|5}}.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xác suất thực nghiệm luôn không lớn hơn 1.', answer: true, explain: 'Số lần xảy ra không vượt quá tổng số lần thực hiện.' },
    { type: 'short', q: 'Một bạn ném bóng rổ 40 lần, vào rổ 14 lần. Xác suất thực nghiệm ném vào rổ là bao nhiêu phần trăm?', answer: '35', unit: '%', calc: '14/40*100', explain: '{{14|40}} = 0,35 = 35%.' },
    { type: 'short', q: 'Kiểm tra 500 sản phẩm thấy 10 sản phẩm lỗi. Ước lượng số sản phẩm lỗi trong 3 000 sản phẩm.', answer: '60', calc: '3000*10/500', explain: '3 000 · {{10|500}} = 60.' }
  ]
});
})();
