/* KHTN 7 – Bài 37. Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var tg = S.xyGraph({ series: [{ pts: [[5,0],[10,8],[15,24],[20,48],[25,70],[30,80],[35,62],[40,20],[43,0]], color: '#16a34a' }], xmin: 0, xmax: 45, ymax: 100, xstep: 5, ystep: 20, xlabel: 't (°C)', ylabel: 'Tốc độ sinh trưởng (tương đối)', noYnum: true, proj: [[30, 80]], label: 'Ảnh hưởng của nhiệt độ đến sinh trưởng của một loài cây nhiệt đới' });
THCS.registerLesson('khtn-7/bai-37', {
  objectives: [
    'Nêu được các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển của sinh vật (nhân tố nhiệt độ, ánh sáng, nước, chất dinh dưỡng).',
    'Trình bày được một số ứng dụng sinh trưởng và phát triển (ví dụ: điều hoà sinh trưởng và phát triển ở sinh vật bằng sử dụng chất kích thích hoặc điều khiển yếu tố môi trường).',
    'Vận dụng được những hiểu biết về sinh trưởng và phát triển để giải thích một số hiện tượng thực tiễn (tiêu diệt muỗi ở giai đoạn ấu trùng, phòng trừ sâu bệnh, chăn nuôi).'
  ],
  intro: 'Vì sao người trồng thanh long thắp đèn cả vườn vào ban đêm? Vì sao phải thả cá để diệt bọ gậy trong bể nước? Bí quyết nằm ở hiểu biết về sinh trưởng và phát triển.',
  steps: [
    { title: 'Các nhân tố ảnh hưởng đến sinh trưởng và phát triển', html: `<ul><li><b>Nhiệt độ</b>: mỗi loài sinh trưởng tốt trong một khoảng nhiệt độ thích hợp; quá nóng hoặc quá lạnh làm sinh trưởng chậm lại, có thể ngừng.</li><li><b>Ánh sáng</b>: cần cho quang hợp của cây; ảnh hưởng đến sự ra hoa của nhiều loài cây; giúp động vật non tổng hợp vitamin D, hấp thụ calcium để xương phát triển.</li><li><b>Nước</b>: cần cho mọi hoạt động sống; thiếu nước cây còi cọc, động vật chậm lớn.</li><li><b>Chất dinh dưỡng</b>: nguyên liệu cấu tạo tế bào và cung cấp năng lượng.</li></ul>
      <p>Ngoài ra còn có các nhân tố bên trong như đặc điểm di truyền của loài, <b>hormone</b> (chất điều hoà sinh trưởng).</p>`,
      svg: tg, caption: 'Đồ thị minh hoạ: sinh trưởng nhanh nhất ở khoảng nhiệt độ thích hợp.' },
    { title: 'Ứng dụng trong trồng trọt', html: `<ul><li>Gieo trồng đúng thời vụ; tưới nước, bón phân hợp lí; làm nhà kính, nhà lưới điều chỉnh nhiệt độ, ánh sáng.</li><li>Chiếu sáng bổ sung ban đêm cho thanh long, hoa cúc để điều khiển thời gian ra hoa.</li><li>Dùng <b>chất kích thích sinh trưởng</b> đúng liều lượng: kích thích ra rễ khi giâm, chiết cành; kích thích nảy mầm, ra hoa, tạo quả. Phải đảm bảo thời gian cách li trước khi thu hoạch.</li></ul>` },
    { title: 'Ứng dụng trong chăn nuôi', html: `<ul><li>Cho vật nuôi ăn đủ lượng, đủ chất theo từng giai đoạn; chuồng trại ấm vào mùa đông, thoáng mát vào mùa hè.</li><li>Tắm nắng cho vật nuôi non (lợn con, gà con) vào sáng sớm giúp xương phát triển.</li><li>Chọn giống tốt, tiêm phòng, vệ sinh chuồng trại.</li></ul>` },
    { title: 'Phòng trừ sinh vật gây hại dựa vào vòng đời', html: `<p>Muỗi có vòng đời: trứng → bọ gậy (ấu trùng) → cung quăng (nhộng) → muỗi trưởng thành. Bọ gậy, cung quăng sống trong nước đọng nên cần <b>diệt ở giai đoạn ấu trùng</b>: thả cá ăn bọ gậy, đậy kín dụng cụ chứa nước, loại bỏ nước đọng. Tương tự, diệt sâu hại ở giai đoạn sâu non.</p>`,
      svg: S.lifeCycle({ stages: ['Trứng', 'Bọ gậy\n(ấu trùng)', 'Cung quăng\n(nhộng)', 'Muỗi\ntrưởng thành'], title: 'Muỗi', bw: 150, h: 320 }), caption: 'Vòng đời của muỗi: diệt bọ gậy trong nước đọng giúp phòng bệnh sốt xuất huyết.' }
  ],
  summary: 'Nhiệt độ, ánh sáng, nước, chất dinh dưỡng (cùng đặc điểm di truyền, hormone) ảnh hưởng đến sinh trưởng và phát triển. Ứng dụng: điều khiển thời vụ, tưới, bón, chiếu sáng, dùng chất kích thích sinh trưởng hợp lí; chăm sóc, cho vật nuôi ăn đủ chất, tắm nắng; diệt muỗi ở giai đoạn bọ gậy, diệt sâu non.',
  examples: [
    { title: 'Giải thích thắp đèn cho thanh long', problem: 'Vì sao người trồng thanh long thắp đèn vào ban đêm trong những tháng mùa đông?', solution: 'Thanh long ra hoa khi ngày dài. Mùa đông ngày ngắn, thắp đèn kéo dài thời gian chiếu sáng giúp cây ra hoa trái vụ, tăng năng suất và giá trị.' },
    { title: 'Tính khối lượng thức ăn', problem: 'Một con gà thịt cần trung bình 2,5 kg thức ăn để tăng 1 kg khối lượng. Để gà tăng từ 0,5 kg lên 2,5 kg cần bao nhiêu kg thức ăn?', solution: 'Gà tăng 2,5 − 0,5 = 2 kg ⇒ cần 2 · 2,5 = 5 kg thức ăn.' },
    { title: 'Diệt muỗi', problem: 'Vì sao diệt bọ gậy hiệu quả hơn diệt muỗi trưởng thành?', solution: 'Bọ gậy tập trung ở nơi nước đọng, không bay được, dễ tìm và tiêu diệt; diệt ở giai đoạn này ngăn muỗi trưởng thành xuất hiện, đẻ trứng và truyền bệnh.' }
  ],
  exercises: [
    { question: 'Nêu 3 nhân tố môi trường ảnh hưởng đến sinh trưởng của cây và một biện pháp kĩ thuật tương ứng.', hints: ['Nhân tố: nhiệt độ, ánh sáng, nước, chất dinh dưỡng.', 'Biện pháp tác động vào nhân tố đó.'], solution: 'Nước – tưới tiêu hợp lí; chất dinh dưỡng – bón phân đúng loại, đúng lúc; ánh sáng – trồng mật độ hợp lí, chiếu sáng bổ sung; nhiệt độ – gieo trồng đúng thời vụ, dùng nhà kính.' },
    { question: 'Vì sao nên cho lợn con, gà con tắm nắng vào sáng sớm?', hints: ['Ánh nắng sớm giúp tổng hợp vitamin gì?', 'Vitamin đó liên quan đến xương thế nào?'], solution: 'Ánh nắng sáng sớm (ít gay gắt) giúp cơ thể tổng hợp vitamin D, hỗ trợ hấp thụ calcium, xương phát triển tốt, vật nuôi lớn nhanh, khoẻ mạnh.' },
    { question: 'Một đàn 200 con gà, mỗi con cần 5 kg thức ăn cho cả giai đoạn nuôi. Cần tổng cộng bao nhiêu tấn thức ăn?', hints: ['Tổng = 200 · 5 kg.', '1 tấn = 1 000 kg.'], solution: '200 · 5 = 1 000 kg = 1 tấn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhiệt độ, ánh sáng, nước và chất dinh dưỡng đều ảnh hưởng đến sinh trưởng và phát triển.', answer: true, explain: 'Đó là các nhân tố môi trường chủ yếu.' },
    { type: 'mcq', q: 'Để diệt muỗi hiệu quả nên tập trung tiêu diệt ở giai đoạn:', options: ['trứng trên lá cây', 'bọ gậy trong nước đọng', 'muỗi bay trong nhà vào buổi trưa', 'không cần diệt'], answer: 1, explain: 'Bọ gậy tập trung ở nước đọng.' },
    { type: 'mcq', q: 'Thắp đèn ban đêm cho thanh long nhằm:', options: ['đuổi côn trùng', 'điều khiển cây ra hoa trái vụ', 'làm quả chín nhanh', 'sưởi ấm rễ'], answer: 1, explain: 'Kéo dài thời gian chiếu sáng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng chất kích thích sinh trưởng với liều lượng tuỳ ý mà không ảnh hưởng tới sức khoẻ con người.', answer: false, explain: 'Phải đúng liều lượng và thời gian cách li.' },
    { type: 'short', q: 'Gà cần 2,5 kg thức ăn để tăng 1 kg. Gà tăng từ 0,5 kg lên 2,5 kg cần bao nhiêu kg thức ăn?', answer: '5', unit: 'kg', calc: '(2.5-0.5)*2.5', explain: '2 · 2,5 = 5 kg.' },
    { type: 'short', q: 'Đàn 200 con gà, mỗi con cần 5 kg thức ăn. Tổng cộng cần bao nhiêu tấn?', answer: '1', unit: 'tấn', calc: '200*5/1000', explain: '1 000 kg = 1 tấn.' },
    { type: 'mcq', q: 'Theo đồ thị ở bước 1, loài cây đó sinh trưởng nhanh nhất ở khoảng:', options: ['10 °C', '20 °C', '30 °C', '40 °C'], answer: 2, explain: 'Đỉnh đồ thị ở 30 °C.' },
    { type: 'short', q: 'Theo đồ thị ở bước 1, cây ngừng sinh trưởng ở 5 °C và 43 °C. Khoảng nhiệt độ cây còn sinh trưởng rộng bao nhiêu °C?', answer: '38', unit: '°C', calc: '43-5', explain: '43 − 5 = 38 °C.' }
  ]
});
})();
