/* KHTN 6 – Bài 11. Oxygen. Không khí. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-11', {
  objectives: [
    'Nêu được một số tính chất vật lí của oxygen và tầm quan trọng của oxygen đối với sự sống, sự cháy.',
    'Nêu được thành phần của không khí và vai trò của không khí.',
    'Trình bày được nguyên nhân, tác hại của ô nhiễm không khí và biện pháp bảo vệ môi trường không khí.'
  ],
  intro: 'Em có thể nhịn ăn vài ngày, nhịn uống một thời gian ngắn, nhưng không thể ngừng thở quá vài phút. Chất khí giúp ta duy trì sự sống trong từng hơi thở chính là <b>oxygen</b> có trong <b>không khí</b>.',
  steps: [
    { title: 'Tính chất vật lí của oxygen', html: `<ul><li>Ở điều kiện thường, oxygen là <b>chất khí, không màu, không mùi, không vị</b>.</li>
      <li><b>Ít tan</b> trong nước (nhưng đủ cho cá và các sinh vật dưới nước hô hấp).</li>
      <li>Nặng hơn không khí một chút.</li><li>Khi làm lạnh đến khoảng −183 °C, oxygen hoá lỏng thành chất lỏng màu xanh nhạt.</li></ul>` },
    { title: 'Oxygen với sự sống và sự cháy', html: `<ul><li><b>Duy trì sự sống</b>: người, động vật và thực vật đều cần oxygen để hô hấp. Bệnh nhân khó thở được thở bằng bình oxygen; thợ lặn mang theo bình khí.</li>
      <li><b>Duy trì sự cháy</b>: nhiên liệu cháy cần oxygen. Oxygen càng nhiều, sự cháy càng mạnh; thiếu oxygen thì lửa tắt.</li></ul>
      <div class="box note">Thí nghiệm: úp một cốc thuỷ tinh lên cây nến đang cháy. Sau một lúc nến tắt vì lượng oxygen trong cốc đã bị dùng hết.</div>` },
    { title: 'Thành phần của không khí', html: `<p>Không khí là một hỗn hợp nhiều chất khí. Theo thể tích, không khí khô gồm khoảng:</p>
      <ul><li><b>78% nitrogen</b>;</li><li><b>21% oxygen</b>;</li><li><b>1%</b> các khí khác (argon, carbon dioxide…). Ngoài ra còn có hơi nước, bụi…</li></ul>`,
      svg: S.pieChart({ parts: [{ v: 78, label: 'Nitrogen ≈ 78%', color: '#2563eb' }, { v: 21, label: 'Oxygen ≈ 21%', color: '#16a34a' }, { v: 1, label: 'Khí khác ≈ 1%', color: '#ea580c' }], title: 'Thành phần không khí (theo thể tích)' }),
      caption: 'Nitrogen chiếm gần 4/5, oxygen chiếm khoảng 1/5 thể tích không khí.' },
    { title: 'Vai trò của không khí', html: `<ul><li>Cung cấp oxygen cho hô hấp và sự cháy.</li><li>Cung cấp carbon dioxide cho cây xanh quang hợp.</li>
      <li>Nitrogen trong không khí được một số vi khuẩn chuyển thành chất dinh dưỡng cho cây.</li><li>Lớp không khí bao quanh Trái Đất giữ ấm, che chắn bớt tia có hại từ Mặt Trời, tạo ra gió, mây, mưa.</li></ul>` },
    { title: 'Ô nhiễm không khí và cách bảo vệ', html: `<p><b>Ô nhiễm không khí</b> là khi không khí có thêm các chất có hại (khói, bụi, khí độc…) vượt mức cho phép.</p>
      <ul><li><b>Nguyên nhân</b>: khí thải xe cộ, nhà máy; đốt rác, đốt rơm rạ; cháy rừng; núi lửa; bụi từ công trình xây dựng…</li>
      <li><b>Tác hại</b>: gây bệnh về đường hô hấp, tim mạch; gây mưa acid; làm Trái Đất nóng lên; ảnh hưởng đến cây trồng, vật nuôi.</li>
      <li><b>Biện pháp</b>: trồng nhiều cây xanh; đi xe đạp, phương tiện công cộng; không đốt rác, rơm rạ bừa bãi; xử lí khí thải nhà máy; sử dụng năng lượng sạch.</li></ul>` }
  ],
  summary: 'Oxygen là khí không màu, không mùi, không vị, ít tan trong nước; cần cho sự hô hấp và sự cháy. Không khí gồm khoảng 78% nitrogen, 21% oxygen và 1% khí khác. Ô nhiễm không khí do khí thải, khói bụi…; cần trồng cây, hạn chế khí thải, không đốt rác bừa bãi.',
  examples: [
    { title: 'Tính lượng oxygen', problem: 'Một phòng học chứa khoảng 200 m³ không khí. Trong đó có khoảng bao nhiêu mét khối oxygen?', solution: 'Oxygen chiếm khoảng 21%: 200 × 21 : 100 = <b>42 m³</b>.' },
    { title: 'Dập tắt đám cháy nhỏ', problem: 'Vì sao khi chảo dầu bốc cháy, người ta đậy kín vung (hoặc trùm khăn ướt) lên chảo?', solution: 'Đậy kín làm <b>ngăn oxygen</b> tiếp xúc với dầu đang cháy; thiếu oxygen, ngọn lửa tắt. (Tuyệt đối không đổ nước vào chảo dầu đang cháy vì dầu sẽ bắn tung toé.)' },
    { title: 'Nguồn ô nhiễm', problem: 'Hãy nêu hai nguồn gây ô nhiễm không khí ở nơi em sống và một việc em có thể làm để giảm ô nhiễm.', solution: 'Ví dụ: khói xe máy trên đường, khói đốt rơm rạ sau mùa gặt. Việc có thể làm: đi bộ hoặc đi xe đạp tới trường, trồng và chăm sóc cây xanh, không đốt rác.' }
  ],
  exercises: [
    { question: 'Vì sao trong bể nuôi cá cảnh người ta thường lắp máy sục khí?', hints: ['Cá hô hấp bằng khí gì hoà tan trong nước?', 'Oxygen tan nhiều hay ít trong nước?'], solution: 'Vì oxygen <b>ít tan</b> trong nước, cá lại cần oxygen để hô hấp. Máy sục khí đẩy không khí vào nước, giúp hoà tan thêm oxygen cho cá.' },
    { question: 'Trong 50 lít không khí có khoảng bao nhiêu lít nitrogen và bao nhiêu lít oxygen?', hints: ['Nitrogen ≈ 78%, oxygen ≈ 21%.', 'Tính 78% của 50 và 21% của 50.'], solution: 'Nitrogen ≈ 50 × 78 : 100 = <b>39 lít</b>; oxygen ≈ 50 × 21 : 100 = <b>10,5 lít</b>.' },
    { question: 'Vì sao không nên đốt than tổ ong để sưởi ấm trong phòng đóng kín cửa?', hints: ['Than cháy tiêu thụ khí gì trong phòng?', 'Khi thiếu oxygen, than cháy không hết tạo ra khí độc carbon monoxide.'], solution: 'Than cháy làm <b>giảm oxygen</b> trong phòng, đồng thời khi thiếu oxygen sẽ sinh ra khí <b>carbon monoxide (CO) rất độc</b>, không màu, không mùi, có thể gây ngạt thở, tử vong.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Ở điều kiện thường, oxygen là:', options: ['Chất lỏng màu xanh', 'Chất khí không màu, không mùi, không vị', 'Chất khí màu vàng, mùi hắc', 'Chất rắn màu trắng'], answer: 1, explain: 'Oxygen là chất khí không màu, không mùi, không vị.' },
    { type: 'short', q: 'Oxygen chiếm khoảng bao nhiêu phần trăm thể tích không khí? (chỉ nhập số)', answer: '21', unit: '%', explain: 'Không khí gồm khoảng 78% nitrogen, 21% oxygen, 1% khí khác.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Oxygen tan rất nhiều trong nước.', answer: false, explain: 'Oxygen ít tan trong nước.' },
    { type: 'mcq', q: 'Chất khí chiếm tỉ lệ thể tích lớn nhất trong không khí là:', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hơi nước'], answer: 2, explain: 'Nitrogen chiếm khoảng 78%.' },
    { type: 'short', q: 'Một bình chứa 300 lít không khí. Có khoảng bao nhiêu lít oxygen trong bình?', answer: '63', unit: 'lít', calc: '300*21/100', explain: '300 × 21 : 100 = 63 lít.' },
    { type: 'mcq', q: 'Hoạt động nào sau đây gây ô nhiễm không khí?', options: ['Trồng cây xanh', 'Đi xe đạp', 'Đốt rơm rạ sau mùa gặt', 'Dùng điện mặt trời'], answer: 2, explain: 'Đốt rơm rạ tạo nhiều khói, bụi gây ô nhiễm không khí.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nến đang cháy trong cốc úp kín sẽ tắt khi hết oxygen.', answer: true, explain: 'Oxygen duy trì sự cháy; hết oxygen thì nến tắt.' },
    { type: 'mcq', q: 'Vai trò nào dưới đây KHÔNG phải của oxygen?', options: ['Duy trì sự hô hấp', 'Duy trì sự cháy', 'Là nguyên liệu để cây xanh quang hợp tạo tinh bột', 'Được dùng trong bình thở của thợ lặn'], answer: 2, explain: 'Cây xanh dùng carbon dioxide (và nước) để quang hợp; oxygen là sản phẩm thải ra.' }
  ]
});
})();
