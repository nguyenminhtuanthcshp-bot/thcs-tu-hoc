/* KHTN 9 – Bài 9. Thực hành đo tiêu cự của thấu kính hội tụ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-9', {
  objectives: [
    'Nêu được nguyên tắc đo tiêu cự thấu kính hội tụ bằng cách tạo ảnh thật bằng vật.',
    'Bố trí và tiến hành được thí nghiệm đo tiêu cự trên giá quang học.',
    'Xử lí được số liệu: tính giá trị trung bình và nhận xét sai số.'
  ],
  intro: 'Nhà sản xuất in tiêu cự lên vỏ ống kính máy ảnh. Với một thấu kính không ghi thông số, làm sao biết tiêu cự của nó? Ta có thể đo bằng một bộ dụng cụ đơn giản: nguồn sáng, thấu kính, màn chắn và thước.',
  steps: [
    { title: 'Nguyên tắc', html: `<p>Vật đặt cách thấu kính hội tụ d = 2f thì cho ảnh thật, ngược chiều, <b>bằng vật</b>, cách thấu kính d′ = 2f.</p>
      <p>Khi đó khoảng cách vật – màn: L = d + d′ = 4f, suy ra:</p>
      <p class="math">f = L / 4 = (d + d′) / 4</p>` },
    { title: 'Dụng cụ và bố trí', html: `<ul><li>Giá quang học có thước chia đến mm.</li><li>Nguồn sáng có vật sáng hình chữ F (hoặc chữ L).</li><li>Thấu kính hội tụ cần đo, màn ảnh.</li></ul>
      <p>Đặt vật, thấu kính, màn trên giá; điều chỉnh để tâm vật, quang tâm và tâm màn nằm trên cùng một đường thẳng song song với giá.</p>`,
      svg: S.opticalBench({ title: 'Bố trí thí nghiệm đo tiêu cự' }), caption: 'Vật sáng, thấu kính hội tụ và màn ảnh đặt trên giá quang học.' },
    { title: 'Tiến hành', html: `<ol><li>Đặt thấu kính ở giữa giá; đặt vật và màn sát thấu kính, cách đều thấu kính.</li><li>Dịch đồng thời vật và màn ra xa thấu kính những khoảng <b>bằng nhau</b> cho đến khi thu được ảnh rõ nét.</li><li>Kiểm tra ảnh có chiều cao bằng vật (h′ = h) không.</li><li>Đo d, d′, ghi vào bảng; lặp lại 3 lần.</li></ol>
      <div class="box tip">Không nhìn thẳng vào nguồn sáng mạnh; cầm thấu kính ở phần rìa, tránh để vân tay lên mặt kính.</div>` },
    { title: 'Xử lí số liệu', html: `<table><tr><th>Lần</th><th>d (cm)</th><th>d′ (cm)</th><th>f (cm)</th></tr><tr><td>1</td><td>30,0</td><td>30,2</td><td>15,05</td></tr><tr><td>2</td><td>29,8</td><td>30,0</td><td>14,95</td></tr><tr><td>3</td><td>30,1</td><td>30,3</td><td>15,10</td></tr></table>
      <p><i>(Số liệu minh hoạ.)</i> Giá trị trung bình: f ≈ (15,05 + 14,95 + 15,10) / 3 ≈ 15,03 cm ≈ 15 cm.</p>`,
      svg: S.bar({ title: 'Tiêu cự đo được qua 3 lần (số liệu minh hoạ)', cats: ['Lần 1', 'Lần 2', 'Lần 3'], series: [{ name: 'f (cm)', values: [15.05, 14.95, 15.1], color: '#16a34a' }], yMax: 20, yStep: 5, width: 460, height: 260 }), caption: 'Các lần đo cho kết quả gần nhau, f trung bình khoảng 15 cm (số liệu minh hoạ).' }
  ],
  summary: 'Đo tiêu cự thấu kính hội tụ: dịch vật và màn ra xa thấu kính những khoảng bằng nhau đến khi thu được ảnh rõ nét, bằng vật. Khi đó d = d′ = 2f nên f = (d + d′) / 4. Đo nhiều lần và lấy trung bình.',
  examples: [
    { title: 'Tính tiêu cự', problem: 'Khi ảnh rõ nét và bằng vật, đo được d = 24 cm, d′ = 24 cm. Tính f.', solution: 'f = (24 + 24) / 4 = 12 (cm).' },
    { title: 'Khoảng cách vật – màn', problem: 'Thấu kính có f = 20 cm. Khi thu được ảnh bằng vật, vật và màn cách nhau bao nhiêu?', solution: 'L = 4f = 80 cm.' },
    { title: 'Giá trị trung bình', problem: 'Ba lần đo được f = 9,8 cm; 10,1 cm; 10,1 cm. Tính f trung bình.', solution: 'f = (9,8 + 10,1 + 10,1) / 3 = 30 / 3 = 10 (cm).' }
  ],
  exercises: [
    { question: 'Đo được d = 40,4 cm và d′ = 39,6 cm. Tính tiêu cự thấu kính.', hints: ['f = (d + d′) / 4.', 'd + d′ = 80 cm.'], solution: 'f = 80 / 4 = 20 cm.' },
    { question: 'Vì sao phải dịch vật và màn ra xa thấu kính những khoảng bằng nhau?', hints: ['Ảnh bằng vật khi nào?', 'Khi đó d và d′ có quan hệ gì?'], solution: 'Để giữ d = d′. Khi ảnh rõ nét thì d = d′ = 2f, ảnh bằng vật, nên dễ suy ra f.' },
    { question: 'Nêu hai nguyên nhân gây sai số trong thí nghiệm này.', hints: ['Việc xác định ảnh rõ nét có chính xác tuyệt đối không?', 'Đọc vạch chia trên thước.'], solution: 'Ví dụ: khó xác định chính xác vị trí ảnh rõ nét nhất; đọc thước chưa chính xác; vật, thấu kính, màn chưa đồng trục.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi thu được ảnh thật bằng vật qua thấu kính hội tụ thì vật cách thấu kính một khoảng bằng 2f.', answer: true, explain: 'd = d′ = 2f.' },
    { type: 'short', q: 'Ảnh rõ nét và bằng vật khi vật và màn cách nhau 60 cm. Tiêu cự thấu kính là bao nhiêu cm?', answer: '15', unit: 'cm', calc: '60/4', explain: 'f = L / 4 = 15 cm.' },
    { type: 'mcq', q: 'Dụng cụ nào KHÔNG cần trong thí nghiệm đo tiêu cự?', options: ['Giá quang học', 'Màn ảnh', 'Vôn kế', 'Thấu kính hội tụ'], answer: 2, explain: 'Thí nghiệm quang học không dùng vôn kế.' },
    { type: 'short', q: 'Đo được d = 15 cm, d′ = 15 cm khi ảnh bằng vật. Tiêu cự bằng bao nhiêu cm?', answer: '7,5', unit: 'cm', calc: '(15+15)/4', explain: 'f = 30 / 4 = 7,5 cm.' },
    { type: 'mcq', q: 'Công thức tính tiêu cự trong thí nghiệm này là:', options: ['f = d + d′', 'f = (d + d′) / 2', 'f = (d + d′) / 4', 'f = d · d′'], answer: 2, explain: 'd + d′ = 4f.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ảnh thu được trên màn trong thí nghiệm là ảnh ảo.', answer: false, explain: 'Ảnh hứng được trên màn là ảnh thật.' },
    { type: 'short', q: 'Ba lần đo được f = 11,9 cm; 12,0 cm; 12,1 cm. Giá trị trung bình là bao nhiêu cm?', answer: '12', unit: 'cm', calc: '(11.9+12+12.1)/3', explain: '36 / 3 = 12 cm.' },
    { type: 'mcq', q: 'Ảnh thu được khi d = 2f có đặc điểm:', options: ['thật, ngược chiều, bằng vật', 'ảo, cùng chiều, bằng vật', 'thật, cùng chiều, lớn hơn vật', 'ảo, nhỏ hơn vật'], answer: 0, explain: 'Ảnh thật, ngược chiều, cao bằng vật.' }
  ]
});
})();
