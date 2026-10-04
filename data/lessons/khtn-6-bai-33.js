/* KHTN 6 – Bài 33. Thực hành: Quan sát các loại nấm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-33', {
  objectives: [
    'Quan sát và vẽ được cấu tạo của nấm mũ (mũ, phiến, cuống, gốc nấm).',
    'Quan sát được mốc trên bánh mì (hoặc cơm, cam) bằng kính lúp và kính hiển vi.',
    'Rèn kĩ năng quan sát, ghi chép và giữ an toàn khi làm việc với nấm mốc.'
  ],
  intro: 'Em sẽ quan sát kĩ một cây nấm ăn quen thuộc và "nuôi" mốc trên bánh mì để thấy những sợi nấm rất nhỏ.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Mẫu vật: nấm rơm (hoặc nấm sò, nấm kim châm, nấm đùi gà) mua ở chợ; bánh mì hoặc cơm nguội để 3–5 ngày trong túi kín nơi ẩm cho lên mốc.</li>
      <li>Dụng cụ: kính lúp, kính hiển vi, lam kính, lamen, kim mũi mác, dao nhỏ, đĩa, găng tay, khẩu trang.</li></ul>
      <div class="box warn">Đeo khẩu trang, găng tay khi làm việc với mốc; không ngửi trực tiếp; không ăn mẫu vật; gói kín và bỏ mẫu mốc vào thùng rác sau buổi học, rửa tay sạch.</div>` },
    { title: 'Quan sát nấm mũ', html: `<ol><li>Quan sát bằng mắt thường: chỉ ra mũ nấm, cuống nấm (có thể có vòng cuống, bao gốc).</li><li>Dùng dao cắt dọc cây nấm; dùng kính lúp quan sát mặt dưới mũ nấm: có nhiều <b>phiến mỏng</b> xếp toả tròn.</li>
      <li>(Nâng cao) Đặt úp mũ nấm già lên tờ giấy trắng qua đêm: sáng hôm sau thấy bột bào tử in thành hình các phiến nấm.</li></ol>` },
    { title: 'Quan sát mốc', html: `<ol><li>Quan sát lớp mốc trên bánh mì bằng mắt thường, rồi bằng kính lúp: thấy các sợi mảnh như bông và các chấm nhỏ (túi bào tử) màu đen, xanh…</li>
      <li>Dùng kim mũi mác lấy một ít mốc, đặt vào giọt nước trên lam kính, đậy lamen, quan sát ở vật kính 10x: thấy các <b>sợi nấm</b> phân nhánh và đầu sợi mang <b>túi bào tử</b> hoặc chuỗi bào tử.</li></ol>`,
      svg: S.labelled({ w: 570, h: 230, body: '<path d="M60,200 C120,190 180,205 240,195 C300,188 360,200 420,196" stroke="#a16207" stroke-width="3" fill="none"/><g stroke="#64748b" stroke-width="2" fill="none"><path d="M120,195 L120,90"/><path d="M200,197 L205,70"/><path d="M290,192 L285,100"/><path d="M360,197 L365,80"/><path d="M160,200 C170,180 180,170 200,165"/><path d="M250,196 C260,170 275,160 290,150"/></g><g fill="#1f2937"><circle cx="120" cy="80" r="12"/><circle cx="205" cy="60" r="12"/><circle cx="285" cy="90" r="12"/><circle cx="365" cy="70" r="12"/></g>', labels: [[205, 60, 300, 25, 'Túi bào tử'], [202, 130, 132, 40, 'Sợi nấm (cuống)'], [300, 194, 400, 220, 'Sợi nấm lan trên bánh']] }),
      caption: 'Mốc trắng trên bánh mì dưới kính lúp/kính hiển vi (hình vẽ đơn giản).' },
    { title: 'Báo cáo', html: `<ul><li>Vẽ và chú thích cấu tạo nấm mũ, sợi mốc.</li><li>Trả lời: nấm mũ và mốc có điểm gì giống nhau? (đều cấu tạo từ sợi nấm, sinh sản bằng bào tử, sống dị dưỡng).</li>
      <li>Ghi lại điều kiện khiến bánh mì mốc nhanh (ẩm, ấm, kín).</li></ul>` }
  ],
  summary: 'Nấm mũ gồm mũ (mặt dưới có phiến chứa bào tử), cuống và sợi nấm. Mốc gồm các sợi nấm phân nhánh, đầu sợi mang túi bào tử. Cần đeo khẩu trang, găng tay, không ngửi, không ăn mẫu và rửa tay sau khi làm việc với mốc.',
  examples: [
    { title: 'In bào tử', problem: 'Úp mũ nấm lên giấy trắng qua đêm, sáng hôm sau thấy các vệt bột xếp toả tròn. Đó là gì?', solution: '<b>Bào tử nấm</b> rơi ra từ các phiến nấm, in thành hình các phiến.' },
    { title: 'Nuôi mốc nhanh', problem: 'Hai miếng bánh mì: A để trong túi kín có vài giọt nước, B phơi khô trong hộp thoáng. Miếng nào mốc nhanh hơn?', solution: 'Miếng <b>A</b>, vì ẩm là điều kiện thuận lợi cho mốc phát triển.' },
    { title: 'Giống nhau', problem: 'Nêu một điểm giống nhau giữa nấm rơm và mốc bánh mì.', solution: 'Đều <b>sinh sản bằng bào tử</b> (hoặc đều cấu tạo từ sợi nấm, đều sống dị dưỡng).' }
  ],
  exercises: [
    { question: 'Vì sao phải đeo khẩu trang và không ngửi trực tiếp mẫu mốc?', hints: ['Mốc tạo ra rất nhiều hạt nhỏ bay trong không khí.', 'Hít vào có hại không?'], solution: 'Mốc giải phóng rất nhiều <b>bào tử</b> nhỏ bay trong không khí; hít phải có thể gây dị ứng, ảnh hưởng đường hô hấp.' },
    { question: 'Thiết kế thí nghiệm đơn giản chứng tỏ độ ẩm ảnh hưởng tới sự phát triển của mốc.', hints: ['Chuẩn bị hai mẫu giống nhau, chỉ khác một điều kiện.', 'Điều kiện đó là độ ẩm.'], solution: 'Lấy hai lát bánh mì giống nhau, cho vào hai túi. Túi 1 nhỏ vài giọt nước, túi 2 để bánh khô; buộc kín, đặt cùng chỗ. Sau 3–5 ngày so sánh: túi ẩm mốc nhiều hơn → độ ẩm giúp mốc phát triển.' },
    { question: 'Phiến nấm có chức năng gì?', hints: ['Phiến nằm ở mặt dưới mũ nấm.', 'Bột in trên giấy đến từ phiến.'], solution: 'Phiến nấm là nơi <b>tạo ra và chứa bào tử</b> – giúp nấm sinh sản.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Mặt dưới mũ nấm rơm có:', options: ['Các phiến mỏng chứa bào tử', 'Lá xanh', 'Hoa nhỏ', 'Rễ'], answer: 0, explain: 'Phiến nấm chứa bào tử.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể ngửi trực tiếp mẫu mốc để nhận biết mùi.', answer: false, explain: 'Hít bào tử mốc có thể gây dị ứng.' },
    { type: 'mcq', q: 'Chấm đen nhỏ ở đầu sợi mốc trắng là:', options: ['Túi bào tử', 'Hạt', 'Nhân', 'Trứng côn trùng'], answer: 0, explain: 'Túi bào tử chứa nhiều bào tử.' },
    { type: 'mcq', q: 'Điều kiện nào giúp bánh mì mốc nhanh nhất?', options: ['Ẩm, ấm, kín', 'Khô, lạnh', 'Phơi nắng', 'Để trong tủ đá'], answer: 0, explain: 'Mốc ưa ẩm, ấm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mốc cấu tạo từ các sợi nấm.', answer: true, explain: 'Mốc là nấm dạng sợi.' },
    { type: 'mcq', q: 'Sau buổi thực hành, mẫu mốc nên:', options: ['Gói kín, bỏ vào thùng rác, rửa tay sạch', 'Mang về ăn', 'Để lại trên bàn', 'Đổ vào bồn rửa mặt'], answer: 0, explain: 'Xử lí để tránh phát tán bào tử.' },
    { type: 'mcq', q: 'Dụng cụ phù hợp để quan sát các phiến nấm là:', options: ['Kính lúp', 'Kính thiên văn', 'Nhiệt kế', 'Lực kế'], answer: 0, explain: 'Phiến nấm nhìn rõ bằng kính lúp.' },
    { type: 'short', q: 'Thị kính 10x, vật kính 10x khi quan sát sợi mốc: độ phóng đại bao nhiêu lần?', answer: '100', unit: 'lần', calc: '10*10', explain: '10 × 10 = 100.' }
  ]
});
})();
