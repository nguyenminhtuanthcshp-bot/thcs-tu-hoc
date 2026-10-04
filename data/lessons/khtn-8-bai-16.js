/* KHTN 8 – Bài 16. Áp suất chất lỏng. Áp suất khí quyển. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-16', {
  objectives: [
    'Nêu được chất lỏng gây áp suất theo mọi phương lên đáy bình, thành bình và các vật trong lòng nó; áp suất tăng theo độ sâu.',
    'Tính được áp suất chất lỏng theo công thức p = d · h.',
    'Nêu được nguyên lí bình thông nhau và một số ứng dụng.',
    'Nêu được sự tồn tại của áp suất khí quyển và mô tả được thí nghiệm Torricelli.'
  ],
  intro: 'Thợ lặn xuống càng sâu càng thấy tai bị ép mạnh. Hộp sữa giấy uống cạn rồi hút tiếp thì bị bẹp lại. Cả hai hiện tượng đều liên quan đến áp suất – của chất lỏng và của không khí.',
  steps: [
    { title: 'Áp suất chất lỏng', html: `<p>Chất lỏng gây áp suất <b>theo mọi phương</b> lên đáy bình, thành bình và các vật ở trong lòng nó.</p>
      <p>Chọc các lỗ ở những độ sâu khác nhau trên thành bình nước: lỗ càng sâu, tia nước phun ra càng mạnh ⇒ áp suất chất lỏng <b>tăng theo độ sâu</b>.</p>`,
      svg: S.liquidPressure(), caption: 'Lỗ càng sâu, áp suất càng lớn, tia nước phun càng xa.' },
    { title: 'Công thức tính áp suất chất lỏng', html: `<div class="box key">p = d · h</div>
      <ul><li>p: áp suất tại điểm cần tính (Pa).</li><li>d: trọng lượng riêng của chất lỏng (N/m³), d = 10 · D; nước có d = 10 000 N/m³.</li><li>h: độ sâu tính từ mặt thoáng chất lỏng đến điểm cần tính (m).</li></ul>
      <p>Ví dụ: ở độ sâu 2 m trong nước: p = 10 000 · 2 = 20 000 Pa.</p>
      <p>Các điểm ở cùng độ sâu trong cùng một chất lỏng đứng yên thì có áp suất như nhau.</p>` },
    { title: 'Bình thông nhau', html: `<p>Bình thông nhau gồm hai hay nhiều nhánh có đáy thông với nhau. Khi chứa cùng một chất lỏng đứng yên, <b>mực chất lỏng ở các nhánh luôn ở cùng một độ cao</b>, không phụ thuộc hình dạng nhánh.</p>
      <p>Ứng dụng: ấm nước và vòi ấm, ống đo mực chất lỏng trong bình kín, hệ thống cấp nước từ tháp nước.</p>`,
      svg: S.communicatingVessels() },
    { title: 'Áp suất khí quyển', html: `<p>Trái Đất được bao bọc bởi lớp không khí dày hàng nghìn kilômét. Trọng lượng của lớp không khí gây ra <b>áp suất khí quyển</b> tác dụng lên mọi vật trên Trái Đất theo mọi phương.</p>
      <p>Ví dụ: hút bớt không khí trong hộp sữa giấy, áp suất khí quyển bên ngoài lớn hơn bên trong làm hộp bị bẹp; cốc nước đầy đậy tờ giấy rồi lộn ngược, nước không chảy ra.</p>` },
    { title: 'Thí nghiệm Torricelli', html: `<p>Nhà bác học Torricelli (Ý) đổ đầy thuỷ ngân vào ống thuỷ tinh dài khoảng 1 m, bịt miệng rồi úp ngược vào chậu thuỷ ngân. Cột thuỷ ngân tụt xuống và dừng ở độ cao khoảng <b>76 cm</b> (ở mặt nước biển).</p>
      <p>Áp suất khí quyển bằng áp suất của cột thuỷ ngân cao 76 cm: 760 mmHg ≈ 101 300 Pa. Người ta còn dùng mmHg làm đơn vị đo áp suất khí quyển. Càng lên cao, lớp không khí phía trên càng mỏng nên áp suất khí quyển càng giảm.</p>`,
      svg: S.torricelli(), caption: 'Ở mặt nước biển, áp suất khí quyển bằng áp suất cột thuỷ ngân cao khoảng 76 cm (≈ 101 300 Pa).' }
  ],
  summary: 'Chất lỏng gây áp suất theo mọi phương, tăng theo độ sâu: p = d · h (nước: d = 10 000 N/m³). Bình thông nhau: mực chất lỏng các nhánh ngang nhau. Áp suất khí quyển tác dụng theo mọi phương; ở mặt biển bằng áp suất cột thuỷ ngân cao khoảng 76 cm (≈ 101 300 Pa).',
  examples: [
    { title: 'Áp suất ở đáy bể', problem: 'Bể nước sâu 1,5 m. Tính áp suất của nước lên đáy bể.', solution: 'p = d · h = 10 000 · 1,5 = 15 000 (Pa).' },
    { title: 'Tìm độ sâu', problem: 'Một thợ lặn chịu áp suất nước 50 000 Pa. Người đó đang ở độ sâu bao nhiêu?', solution: 'h = p : d = 50 000 : 10 000 = 5 (m).' },
    { title: 'Giải thích', problem: 'Vì sao nắp ấm pha trà thường có một lỗ nhỏ?', solution: 'Lỗ nhỏ để không khí trong ấm thông với khí quyển, áp suất trong ấm cân bằng với bên ngoài nên nước rót ra dễ dàng.' }
  ],
  exercises: [
    { question: 'Tính áp suất của nước biển ở độ sâu 20 m, biết trọng lượng riêng của nước biển là 10 300 N/m³.', hints: ['p = d · h.', 'd = 10 300 N/m³; h = 20 m.'], solution: 'p = 10 300 · 20 = 206 000 (Pa).' },
    { question: 'Hai điểm A, B trong một bình nước: A ở độ sâu 0,4 m, B ở độ sâu 1 m. Tính hiệu áp suất giữa B và A.', hints: ['p<sub>B</sub> − p<sub>A</sub> = d · (h<sub>B</sub> − h<sub>A</sub>).', 'd = 10 000 N/m³.'], solution: 'Δp = 10 000 · 0,6 = 6 000 (Pa).' },
    { question: 'Vì sao đập thuỷ điện được xây phần chân đập dày hơn phần trên?', hints: ['Áp suất nước thay đổi theo độ sâu thế nào?', 'Phần dưới chịu áp suất lớn hơn.'], solution: 'Áp suất nước tăng theo độ sâu nên chân đập chịu áp suất lớn nhất, cần xây dày hơn để chịu lực.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất lỏng chỉ gây áp suất lên đáy bình.', answer: false, explain: 'Chất lỏng gây áp suất theo mọi phương.' },
    { type: 'short', q: 'Áp suất của nước ở độ sâu 3 m là bao nhiêu Pa? (d = 10 000 N/m³)', answer: '30000', answerText: '30 000', unit: 'Pa', calc: '10000*3', explain: 'p = 10 000 · 3 = 30 000 Pa.' },
    { type: 'mcq', q: 'Trong công thức p = d · h, h là:', options: ['chiều cao của bình', 'độ sâu tính từ mặt thoáng chất lỏng', 'khoảng cách từ đáy bình lên', 'chiều cao cột không khí'], answer: 1, explain: 'h là độ sâu từ mặt thoáng đến điểm tính áp suất.' },
    { type: 'short', q: 'Áp suất nước tại một điểm là 12 000 Pa. Điểm đó ở độ sâu bao nhiêu mét? (d = 10 000 N/m³)', answer: '1,2', unit: 'm', calc: '12000/10000', explain: 'h = 12 000 : 10 000 = 1,2 m.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong bình thông nhau chứa cùng một chất lỏng đứng yên, mực chất lỏng ở các nhánh ngang nhau.', answer: true, explain: 'Đó là nguyên lí bình thông nhau.' },
    { type: 'mcq', q: 'Trong thí nghiệm Torricelli ở mặt nước biển, cột thuỷ ngân cao khoảng:', options: ['10 cm', '76 cm', '1 m', '10 m'], answer: 1, explain: 'Khoảng 76 cm (760 mmHg).' },
    { type: 'short', q: 'Hiệu áp suất giữa hai điểm trong nước ở độ sâu 2,5 m và 0,5 m là bao nhiêu Pa? (d = 10 000 N/m³)', answer: '20000', answerText: '20 000', unit: 'Pa', calc: '10000*(2.5-0.5)', explain: 'Δp = 10 000 · 2 = 20 000 Pa.' },
    { type: 'mcq', q: 'Hiện tượng nào do áp suất khí quyển gây ra?', options: ['Quả bóng bàn bẹp nhúng vào nước nóng phồng lên', 'Hút bớt khí trong hộp sữa giấy, hộp bị bẹp', 'Săm xe đạp bơm căng để ngoài nắng bị nổ', 'Nước chảy từ trên cao xuống'], answer: 1, explain: 'Áp suất khí quyển bên ngoài lớn hơn bên trong hộp.' }
  ]
});
})();
