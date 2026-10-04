/* KHTN 7 – Bài 38. Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var DATA = [[0,0],[2,1],[4,3],[6,6],[8,10],[10,14],[12,17],[14,19]];
var g = S.xyGraph({ series: [{ pts: DATA, color: '#16a34a', dots: true }], xmax: 14, ymax: 20, xstep: 2, ystep: 4, xlabel: 'Ngày', ylabel: 'Chiều cao cây đậu (cm)', proj: [[8, 10]], label: 'Đồ thị chiều cao cây đậu theo thời gian' });
THCS.registerLesson('khtn-7/bai-38', {
  objectives: [
    'Quan sát, mô tả được sự sinh trưởng và phát triển của một số thực vật và động vật.',
    'Đo, ghi chép số liệu và vẽ được đồ thị sinh trưởng của cây.',
    'Trình bày được các giai đoạn phát triển trong vòng đời của một số sinh vật qua quan sát.'
  ],
  intro: 'Mỗi ngày cây đậu cao thêm bao nhiêu? Cây lớn đều hay có lúc nhanh, lúc chậm? Hãy trở thành nhà khoa học nhỏ: gieo hạt, đo đạc và vẽ đồ thị.',
  steps: [
    { title: 'Chuẩn bị và tiến hành', html: `<ul><li>Hạt đậu xanh (hoặc đậu đen, ngô), cốc nhựa hoặc chậu nhỏ có đất ẩm, thước kẻ, sổ ghi chép.</li><li>Ngâm hạt trong nước ấm 3 – 4 giờ, gieo 3 – 5 hạt vào mỗi cốc, tưới nước hằng ngày, đặt nơi có ánh sáng.</li><li>Cứ 2 ngày đo chiều cao cây một lần (từ mặt đất đến đỉnh ngọn), ghi vào bảng; ghi lại khi nào xuất hiện lá mầm, lá thật đầu tiên.</li></ul>` },
    { title: 'Bảng số liệu mẫu và đồ thị', html: `<table class="tbl"><tr><th>Ngày thứ</th><th>Chiều cao trung bình (cm)</th></tr>
      <tr><td>0</td><td>0</td></tr>
      <tr><td>2</td><td>1</td></tr>
      <tr><td>4</td><td>3</td></tr>
      <tr><td>6</td><td>6</td></tr>
      <tr><td>8</td><td>10</td></tr>
      <tr><td>10</td><td>14</td></tr>
      <tr><td>12</td><td>17</td></tr>
      <tr><td>14</td><td>19</td></tr></table>
      <p>Nhận xét: giai đoạn đầu cây mọc chậm, sau đó nhanh dần (ngày 6 – 10 mỗi 2 ngày tăng 4 cm), cuối cùng chậm lại.</p>`,
      svg: g, caption: 'Đồ thị vẽ từ bảng số liệu mẫu: chiều cao cây đậu tăng nhanh ở giữa giai đoạn quan sát.' },
    { title: 'Quan sát sự phát triển ở cây', html: `<p>Ghi lại các biến đổi: hạt nứt vỏ, rễ mầm nhú ra → thân mầm mang hai lá mầm vươn lên khỏi mặt đất → lá thật đầu tiên xuất hiện → cây phân cành, (sau vài tuần) ra hoa, tạo quả.</p>`,
      svg: S.lifeCycle({ stages: ['Hạt', 'Cây mầm', 'Cây trưởng thành', 'Ra hoa, tạo\nquả và hạt'], title: 'Cây đậu', bw: 160, h: 320 }), caption: 'Vòng đời của cây đậu.' },
    { title: 'Quan sát sinh trưởng, phát triển ở động vật và báo cáo', html: `<p>Quan sát qua tranh ảnh, video hoặc thực tế: vòng đời của gà (trứng → gà con → gà trưởng thành), của ếch, của bướm, của muỗi. Mô tả sự thay đổi kích thước và hình thái ở mỗi giai đoạn.</p>
      <p>Báo cáo gồm: bảng số liệu, đồ thị, hình vẽ các giai đoạn, nhận xét và kết luận.</p>` }
  ],
  summary: 'Gieo hạt, đo chiều cao định kì, ghi bảng và vẽ đồ thị để mô tả sự sinh trưởng: cây mọc chậm lúc đầu, nhanh dần rồi chậm lại. Quan sát sự phát triển: hạt → cây mầm → cây trưởng thành → ra hoa, tạo quả và hạt; ở động vật: các giai đoạn trong vòng đời.',
  examples: [
    { title: 'Đọc đồ thị', problem: 'Theo đồ thị, ở ngày thứ 8 cây cao bao nhiêu? Từ ngày 8 đến ngày 14 cây cao thêm bao nhiêu?', solution: 'Ngày 8 cây cao 10 cm; đến ngày 14 cao 19 cm; cao thêm 19 − 10 = 9 cm.' },
    { title: 'Tính tốc độ trung bình', problem: 'Tính tốc độ tăng chiều cao trung bình của cây trong 14 ngày.', solution: '19 : 14 ≈ 1,36 cm/ngày (khoảng 1,4 cm mỗi ngày).' },
    { title: 'Giai đoạn tăng nhanh nhất', problem: 'Trong khoảng 2 ngày nào cây tăng chiều cao nhiều nhất?', solution: 'Ngày 6 → 8 (6 → 10 cm) và ngày 8 → 10 (10 → 14 cm): mỗi khoảng tăng 4 cm, nhiều nhất.' }
  ],
  exercises: [
    { question: 'Vì sao nên gieo nhiều hạt và tính chiều cao trung bình thay vì đo một cây?', hints: ['Các cây có mọc giống hệt nhau không?', 'Kết quả của một cây có thể do ngẫu nhiên.'], solution: 'Mỗi cây sinh trưởng hơi khác nhau; tính trung bình nhiều cây giúp kết quả khách quan, giảm sai số do ngẫu nhiên.' },
    { question: 'Chiều cao ba cây ở ngày thứ 10 là 13 cm, 14 cm, 15 cm. Tính chiều cao trung bình.', hints: ['Cộng ba giá trị.', 'Chia cho 3.'], solution: '(13 + 14 + 15) : 3 = 14 cm.' },
    { question: 'Dự đoán: nếu đặt một cốc cây trong bóng tối từ đầu thì cây sẽ sinh trưởng thế nào sau 1 tuần?', hints: ['Cây có quang hợp được không?', 'Thân cây trong tối thường thế nào?'], solution: 'Cây mọc vống cao, thân mảnh, lá vàng nhạt (thiếu diệp lục) nhờ chất dự trữ trong hạt; khi hết chất dự trữ cây yếu dần và có thể chết vì không quang hợp được.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng đồ thị để mô tả sự sinh trưởng về chiều cao của cây theo thời gian.', answer: true, explain: 'Trục ngang là thời gian, trục đứng là chiều cao.' },
    { type: 'short', q: 'Theo bảng mẫu, từ ngày 8 (10 cm) đến ngày 14 (19 cm) cây cao thêm bao nhiêu cm?', answer: '9', unit: 'cm', calc: '19-10', explain: '19 − 10 = 9 cm.' },
    { type: 'mcq', q: 'Thứ tự đúng trong vòng đời của cây đậu là:', options: ['Hạt → cây mầm → cây trưởng thành → ra hoa, tạo quả', 'Cây mầm → hạt → ra hoa → cây trưởng thành', 'Hạt → ra hoa → cây mầm → quả', 'Quả → cây mầm → hạt → hoa'], answer: 0, explain: 'Hạt nảy mầm thành cây mầm rồi lớn lên, ra hoa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo bảng mẫu, cây đậu tăng chiều cao đều nhau trong mọi khoảng 2 ngày.', answer: false, explain: 'Lúc đầu chậm, giữa nhanh, cuối chậm lại.' },
    { type: 'short', q: 'Ba cây cao 13 cm, 14 cm, 15 cm. Chiều cao trung bình là bao nhiêu cm?', answer: '14', unit: 'cm', calc: '(13+14+15)/3', explain: '42 : 3 = 14 cm.' },
    { type: 'mcq', q: 'Theo bảng mẫu, cây tăng chiều cao nhiều nhất trong khoảng:', options: ['ngày 0 → 2', 'ngày 2 → 4', 'ngày 8 → 10', 'ngày 12 → 14'], answer: 2, explain: 'Tăng 4 cm (10 → 14 cm).' },
    { type: 'short', q: 'Theo bảng mẫu, từ ngày 6 (6 cm) đến ngày 10 (14 cm), trung bình mỗi ngày cây cao thêm bao nhiêu cm?', answer: '2', unit: 'cm', calc: '(14-6)/(10-6)', explain: '8 : 4 = 2 cm/ngày.' },
    { type: 'short', q: 'Gieo 5 hạt mỗi cốc, dùng 6 cốc. Tổng số hạt đã gieo là bao nhiêu?', answer: '30', unit: 'hạt', calc: '5*6', explain: '5 · 6 = 30 hạt.' }
  ]
});
})();
