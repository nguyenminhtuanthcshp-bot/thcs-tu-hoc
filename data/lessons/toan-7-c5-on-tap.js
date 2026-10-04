/* Toán 7 – Bài tập cuối chương V. Thu thập và biểu diễn dữ liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/c5-on-tap', {
  objectives: [
    'Hệ thống kiến thức chương V: thu thập, phân loại dữ liệu, tính đại diện; biểu đồ hình quạt tròn, biểu đồ đoạn thẳng.',
    'Chuyển đổi giữa bảng số liệu và biểu đồ; tính tỉ lệ phần trăm, số lượng, mức thay đổi.',
    'Phân tích, phát hiện điểm bất hợp lí và rút ra kết luận từ dữ liệu.'
  ],
  intro: 'Ôn tập chương V. Thống kê giúp ta ra quyết định dựa trên bằng chứng – nhưng chỉ khi dữ liệu đại diện, hợp lí và được biểu diễn đúng cách.',
  steps: [
    { title: 'Quy trình thống kê', html: `<p>Đặt câu hỏi → thu thập dữ liệu → phân loại, sắp xếp → biểu diễn (bảng, biểu đồ) → phân tích, kết luận.</p>`,
      svg: S.flow({ items: ['Đặt câu hỏi', 'Thu thập', 'Phân loại', 'Biểu diễn', 'Phân tích'] }) },
    { title: 'Bảng số liệu → biểu đồ hình quạt', html: `<p>Thời gian sử dụng mạng mỗi ngày của 40 học sinh: dưới 1 giờ: 10 bạn; 1–2 giờ: 18 bạn; 2–3 giờ: 8 bạn; trên 3 giờ: 4 bạn. Đổi ra tỉ lệ: 25%, 45%, 20%, 10%.</p>`,
      svg: S.sectorChart({ title: 'Thời gian dùng mạng mỗi ngày (40 học sinh)', parts: [{ label: 'Dưới 1 giờ', value: 25 }, { label: '1 – 2 giờ', value: 45 }, { label: '2 – 3 giờ', value: 20 }, { label: 'Trên 3 giờ', value: 10 }], unit: '%' }) },
    { title: 'Bảng số liệu → biểu đồ đoạn thẳng', html: `<p>Dân số một xã (nghìn người) qua các năm:</p>`,
      svg: S.lineChart({ title: 'Dân số xã A (nghìn người)', cats: ['2018', '2019', '2020', '2021', '2022', '2023'], values: [8.2, 8.5, 8.9, 9.1, 9.6, 10], yMin: 7, yMax: 10.5, yStep: 0.5, yLabel: 'nghìn người' }),
      caption: 'Dân số tăng đều qua các năm.' },
    { title: 'Những lỗi cần tránh', html: `<ul><li>Mẫu không đại diện (chỉ hỏi một nhóm nhỏ, đặc biệt).</li><li>Tổng tỉ lệ khác 100% trong biểu đồ hình quạt.</li><li>Trục đứng chia không đều, không bắt đầu rõ ràng làm “phóng đại” sự thay đổi.</li><li>Kết luận vượt quá dữ liệu.</li></ul>` }
  ],
  summary: 'Quy trình: hỏi – thu thập – phân loại – biểu diễn – phân tích. Hình quạt: tỉ lệ = số lượng : tổng. Đoạn thẳng: xu hướng theo thời gian. Luôn kiểm tra tính đại diện, hợp lí.',
  examples: [
    { title: 'Tỉ lệ', problem: 'Theo bước 2, có bao nhiêu phần trăm học sinh dùng mạng từ 2 giờ trở lên?', solution: '20% + 10% = 30%.' },
    { title: 'Mức tăng', problem: 'Theo bước 3, dân số từ 2018 đến 2023 tăng bao nhiêu người?', solution: '10 − 8,2 = 1,8 (nghìn người) = 1 800 người.' },
    { title: 'Đánh giá kết luận', problem: 'Từ bước 2, bạn An kết luận “Học sinh cả nước dùng mạng 1–2 giờ mỗi ngày là phổ biến nhất.” Có hợp lí không?', solution: 'Chưa hợp lí: mẫu chỉ có 40 học sinh của một trường, không đại diện cho cả nước.' }
  ],
  exercises: [
    { question: 'Kiểm tra: 18 bạn trên 40 bạn là bao nhiêu phần trăm?', hints: ['18 : 40.', 'Nhân 100%.'], solution: '45%.' },
    { question: 'Năm nào dân số xã A tăng nhiều nhất so với năm trước?', hints: ['Tính hiệu từng cặp năm liên tiếp.', '2021 → 2022: 0,5.'], solution: 'Năm 2022 (tăng 0,5 nghìn người).' },
    { question: 'Góc ở tâm của hình quạt “1 – 2 giờ” là bao nhiêu độ?', hints: ['45% của 360°.', '360 · 0,45.'], solution: '162°.' }
  ],
  quiz: [
    { type: 'short', calc: '18 / 40 * 100', q: '18 trên 40 học sinh chiếm bao nhiêu phần trăm?', unit: '%', answer: '45', explain: '18 : 40 = 0,45.' },
    { type: 'short', calc: '20 + 10', q: 'Bước 2: tỉ lệ học sinh dùng mạng từ 2 giờ trở lên (%)?', unit: '%', answer: '30', explain: '20% + 10%.' },
    { type: 'short', calc: '(10 - 8.2) * 1000', q: 'Bước 3: dân số từ 2018 đến 2023 tăng bao nhiêu người?', unit: 'người', answer: '1800', answerText: '1 800', explain: '1,8 nghìn = 1 800 người.' },
    { type: 'short', calc: '360 * 45 / 100', q: 'Góc ở tâm của hình quạt chiếm 45% bằng bao nhiêu độ?', unit: 'độ', answer: '162', explain: '360° · 0,45.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kết quả khảo sát 40 học sinh một trường đủ để kết luận cho học sinh cả nước.', answer: false, explain: 'Mẫu không đại diện.' },
    { type: 'mcq', q: 'Bước đầu tiên của quy trình thống kê là:', options: ['vẽ biểu đồ', 'đặt câu hỏi', 'tính phần trăm', 'kết luận'], answer: 1, explain: 'Phải biết mình cần tìm hiểu điều gì.' },
    { type: 'short', calc: '40 * 25 / 100', q: 'Bước 2: có bao nhiêu học sinh dùng mạng dưới 1 giờ (25% của 40)?', answer: '10', explain: '40 · 0,25 = 10.' },
    { type: 'mcq', q: 'Bước 3: năm nào dân số tăng nhiều nhất so với năm trước?', options: ['2019', '2020', '2022', '2023'], answer: 2, explain: '2021 → 2022 tăng 0,5 nghìn người.' }
  ]
});
})();
