/* KHTN 6 – Bài 28. Thực hành: Làm sữa chua và quan sát vi khuẩn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-28', {
  objectives: [
    'Thực hiện được quy trình làm sữa chua tại nhà hoặc tại lớp.',
    'Giải thích được vai trò của vi khuẩn lactic và điều kiện nhiệt độ trong quá trình lên men.',
    'Quan sát được vi khuẩn trong sữa chua hoặc vi khuẩn ở nốt sần rễ cây họ Đậu bằng kính hiển vi (nếu có).'
  ],
  intro: 'Sữa chua là món ăn quen thuộc được tạo ra nhờ những "người thợ" tí hon: <b>vi khuẩn lactic</b>. Trong bài này em sẽ tự làm sữa chua và quan sát chúng.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>1 hộp sữa đặc (khoảng 380 g), khoảng 1 lít nước (gồm nước sôi và nước ấm), 1 hộp sữa chua không đường làm "men cái".</li>
      <li>Nồi, thìa, hũ thuỷ tinh có nắp (đã tráng nước sôi), thùng xốp hoặc nồi ủ, nhiệt kế (nếu có).</li></ul>
      <div class="box warn">Cẩn thận khi dùng nước sôi. Mọi dụng cụ phải sạch để tránh vi khuẩn lạ làm hỏng sữa chua.</div>` },
    { title: 'Các bước làm sữa chua', html: `<p>Pha sữa đặc với nước sôi cho tan, thêm nước để hỗn hợp nguội còn ấm khoảng <b>40 °C</b> (sờ thấy âm ấm). Cho sữa chua cái vào khuấy đều, rót vào hũ, đậy nắp và <b>ủ ấm</b> khoảng <b>6–8 giờ</b>. Khi sữa đông lại, chuyển vào ngăn mát tủ lạnh.</p>`,
      svg: S.flow({ items: ['Pha sữa, để nguội còn khoảng 40 °C', 'Thêm sữa chua cái, khuấy đều', 'Rót vào hũ sạch, đậy nắp', 'Ủ ấm 6–8 giờ', 'Cất ngăn mát tủ lạnh'], w: 640, size: 13 }),
      caption: 'Quy trình làm sữa chua.' },
    { title: 'Giải thích', html: `<ul><li>Sữa chua cái chứa <b>vi khuẩn lactic</b> còn sống. Chúng lên men đường trong sữa thành <b>acid lactic</b>, làm sữa có vị chua và đông đặc lại.</li>
      <li>Nhiệt độ khoảng 40 °C thuận lợi cho vi khuẩn lactic phát triển. Nếu sữa còn quá nóng (gần sôi), vi khuẩn bị chết; nếu quá nguội, vi khuẩn hoạt động chậm, sữa lâu đông.</li>
      <li>Cất tủ lạnh để làm chậm hoạt động của vi khuẩn, sữa chua không bị chua quá.</li></ul>` },
    { title: 'Quan sát vi khuẩn (nếu có kính hiển vi)', html: `<ol><li>Lấy một ít sữa chua (hoặc nốt sần ở rễ cây lạc, cây đậu đã rửa sạch, bóp dập) phết mỏng lên lam kính, nhỏ một giọt nước.</li>
      <li>Có thể nhuộm bằng xanh methylene, để khô, rửa nhẹ.</li><li>Quan sát ở vật kính 40x hoặc lớn hơn: thấy các vi khuẩn rất nhỏ, hình que hoặc hình cầu.</li></ol>
      <p>Báo cáo: mô tả sữa chua thu được (màu, độ đông, vị), vẽ hình vi khuẩn quan sát được.</p>` }
  ],
  summary: 'Làm sữa chua: pha sữa, để nguội khoảng 40 °C, thêm sữa chua cái, rót vào hũ, ủ ấm 6–8 giờ, rồi cất tủ lạnh. Vi khuẩn lactic biến đường trong sữa thành acid lactic làm sữa chua và đông lại. Nhiệt độ quá cao làm chết vi khuẩn.',
  examples: [
    { title: 'Vai trò của sữa chua cái', problem: 'Vì sao phải thêm một ít sữa chua có sẵn vào sữa?', solution: 'Sữa chua có sẵn chứa <b>vi khuẩn lactic</b> sống – là "giống" để lên men sữa mới.' },
    { title: 'Sữa quá nóng', problem: 'Bạn Minh cho sữa chua cái vào lúc sữa vừa pha bằng nước sôi. Sau 8 giờ sữa vẫn lỏng. Vì sao?', solution: 'Sữa còn quá nóng đã <b>làm chết vi khuẩn lactic</b>, nên không xảy ra lên men.' },
    { title: 'Thời gian ủ', problem: 'Bắt đầu ủ lúc 20 giờ, ủ 7 giờ thì mấy giờ lấy ra?', solution: '20 + 7 = 27, tức <b>3 giờ sáng</b> hôm sau.' }
  ],
  exercises: [
    { question: 'Vì sao sữa chua có vị chua và đặc hơn sữa ban đầu?', hints: ['Vi khuẩn lactic biến đường thành chất gì?', 'Acid làm chất đạm trong sữa ra sao?'], solution: 'Vi khuẩn lactic lên men đường trong sữa tạo <b>acid lactic</b> gây vị chua; acid làm chất đạm trong sữa đông tụ lại nên sữa đặc hơn.' },
    { question: 'Nếu dụng cụ làm sữa chua không sạch thì có thể xảy ra điều gì?', hints: ['Trên dụng cụ bẩn có nhiều vi sinh vật lạ.', 'Chúng cũng phát triển trong sữa ấm.'], solution: 'Vi khuẩn, nấm mốc lạ phát triển cùng, làm sữa chua có mùi lạ, bị hỏng, có thể gây đau bụng khi ăn.' },
    { question: 'Vì sao sau khi sữa đã đông, cần cất vào tủ lạnh?', hints: ['Nếu để ngoài, vi khuẩn tiếp tục làm gì?', 'Nhiệt độ thấp ảnh hưởng thế nào tới vi khuẩn?'], solution: 'Để <b>làm chậm</b> hoạt động của vi khuẩn lactic, giữ sữa chua không bị chua quá và bảo quản được lâu hơn.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vi khuẩn chủ yếu làm sữa chua là:', options: ['Vi khuẩn lactic', 'Vi khuẩn lao', 'Vi khuẩn tả', 'Nấm mốc'], answer: 0, explain: 'Vi khuẩn lactic lên men đường sữa.' },
    { type: 'short', q: 'Nhiệt độ sữa thích hợp khi cho men (sữa chua cái) vào là khoảng bao nhiêu °C?', answer: '40', unit: '°C', explain: 'Khoảng 40 °C, âm ấm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên cho sữa chua cái vào sữa đang sôi để vi khuẩn hoạt động nhanh.', answer: false, explain: 'Nhiệt độ quá cao làm chết vi khuẩn.' },
    { type: 'mcq', q: 'Chất tạo vị chua trong sữa chua là:', options: ['Acid lactic', 'Muối ăn', 'Đường', 'Nước'], answer: 0, explain: 'Vi khuẩn tạo acid lactic.' },
    { type: 'mcq', q: 'Thời gian ủ sữa chua thường khoảng:', options: ['10 phút', '6–8 giờ', '3 ngày', '1 tuần'], answer: 1, explain: 'Khoảng 6–8 giờ ở nơi ấm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cất sữa chua trong tủ lạnh làm chậm hoạt động của vi khuẩn.', answer: true, explain: 'Nhiệt độ thấp làm vi khuẩn hoạt động chậm.' },
    { type: 'mcq', q: 'Ngoài sữa chua, có thể quan sát vi khuẩn có ích ở:', options: ['Nốt sần rễ cây họ Đậu', 'Lá cây thông', 'Hạt muối', 'Hòn sỏi'], answer: 0, explain: 'Nốt sần chứa vi khuẩn cố định đạm.' },
    { type: 'short', q: 'Ủ sữa chua từ 21 giờ, ủ 8 giờ. Lấy ra lúc mấy giờ sáng hôm sau?', answer: '5', unit: 'giờ', calc: '21+8-24', explain: '21 + 8 = 29 → 29 − 24 = 5 giờ sáng.' }
  ]
});
})();
