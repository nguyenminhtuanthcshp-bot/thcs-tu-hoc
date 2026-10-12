/* Tin học 9 – Bài 13a. Hoàn thiện bảng tính quản lí tài chính gia đình. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-13a', {
  objectives: [
    'Thiết kế được bảng tính quản lí thu chi gia đình gồm các trang: Thu, Chi, Tổng hợp.',
    'Vận dụng tổng hợp xác thực dữ liệu, SUM, SUMIF, COUNTIF, IF, địa chỉ tuyệt đối, biểu đồ.',
    'Phân tích được kết quả, đề xuất được kế hoạch chi tiêu hợp lí.'
  ],
  intro: 'Tiền vào bao nhiêu, ra bao nhiêu, còn dư hay thiếu? Một bảng tính tài chính gia đình được thiết kế tốt sẽ trả lời ngay, và còn cảnh báo khi chi vượt kế hoạch.',
  steps: [
    { title: 'Thiết kế bảng tính', html: `<ul><li>Trang <b>Chi</b>: Ngày, Khoản mục (danh sách chọn bằng Data Validation), Nội dung, Số tiền (số ≥ 0).</li><li>Trang <b>Thu</b>: Ngày, Nguồn thu, Số tiền.</li><li>Trang <b>Tổng hợp</b>: tổng thu, tổng chi theo khoản mục (SUMIF), số dư, so sánh với kế hoạch (IF).</li></ul>`,
      svg: S.flow({ items: ['Trang Thu', 'Trang Chi', 'Trang Tổng hợp', 'Biểu đồ, nhận xét'], size: 13, label: 'Cấu trúc sổ tính tài chính gia đình' }), caption: 'Dữ liệu chi tiết ở trang Thu, Chi; kết quả ở trang Tổng hợp.' },
    { title: 'Trang Tổng hợp', html: `<p>Số liệu tháng 10 (nghìn đồng, minh hoạ):</p>`,
      svg: S.sheet({ title: 'Tổng hợp chi so với kế hoạch', cols: ['A', 'B', 'C', 'D'], rows: [['Khoản mục', 'Kế hoạch', 'Thực chi', 'Đánh giá'], ['Ăn uống', 6000, 6400, 'Vượt'], ['Học tập', 1500, 1200, 'Trong mức'], ['Đi lại', 1000, 900, 'Trong mức'], ['Tổng', 8500, 8500, '']], active: 'D2', formula: '=IF(C2>B2,"Vượt","Trong mức")', colW: 120, note: 'C2 = SUMIF(Chi!$B:$B, A2, Chi!$D:$D)' }), caption: 'IF đánh giá từng khoản so với kế hoạch.' },
    { title: 'Số dư và biểu đồ', html: `<p>Tổng thu 10 000, tổng chi 8 500 → số dư <code>=Thu_tổng − Chi_tổng</code> = 1 500 nghìn đồng. Tỉ lệ tiết kiệm = 1 500 : 10 000 = 15%.</p>`,
      svg: S.pieChart({ title: 'Cơ cấu chi tháng 10 (minh hoạ)', parts: [{ v: 6400, label: 'Ăn uống 6 400' }, { v: 1200, label: 'Học tập 1 200' }, { v: 900, label: 'Đi lại 900' }] }), caption: 'Ăn uống chiếm phần lớn chi tiêu.' },
    { title: 'Phân tích và kế hoạch', html: `<p>Nhận xét: khoản ăn uống vượt kế hoạch 400 nghìn; các khoản khác trong mức. Đề xuất: lập thực đơn tuần, hạn chế ăn ngoài; chuyển phần dư vào tiết kiệm.</p>
      <div class="box key">Nhập liệu đúng (xác thực) → tổng hợp (SUMIF) → đánh giá (IF) → trực quan (biểu đồ).</div>` }
  ],
  summary: 'Bảng tính tài chính gia đình gồm trang Thu, Chi, Tổng hợp: dùng Data Validation cho khoản mục và số tiền, SUMIF tổng hợp theo khoản mục, IF so sánh với kế hoạch, công thức số dư, tỉ lệ tiết kiệm, biểu đồ cơ cấu chi; từ đó phân tích và đề xuất kế hoạch chi tiêu.',
  examples: [
    { title: 'Số dư', problem: 'Tổng thu 12 000, tổng chi 10 200 (nghìn đồng). Số dư và tỉ lệ tiết kiệm?', solution: '1 800 nghìn; 1 800 : 12 000 = 15%.' },
    { title: 'Đánh giá', problem: 'Kế hoạch học tập 1 500, thực chi 1 650. Công thức ở D3 trả về gì?', solution: '1 650 > 1 500 → “Vượt”.' },
    { title: 'Tỉ trọng', problem: 'Ăn uống 6 400 trong tổng chi 8 500 chiếm bao nhiêu phần trăm?', solution: '6 400 : 8 500 ≈ 75,3%.' }
  ],
  exercises: [
    { question: 'Viết công thức đếm số lần chi cho “Đi lại” trên trang Chi (khoản mục ở cột B).', hints: ['Đếm có điều kiện.', 'Tham chiếu trang khác bằng Chi!.'], solution: '=COUNTIF(Chi!B:B,"Đi lại").' },
    { question: 'Đề xuất điều kiện xác thực cho cột Số tiền trên trang Chi.', hints: ['Số tiền có âm không?', 'Kiểu số nào?'], solution: 'Allow: Decimal (hoặc Whole number), greater than or equal to 0.' },
    { question: 'Thu 9 000, chi: ăn uống 5 200, học tập 1 300, đi lại 800, khác 700 (nghìn đồng). Số dư?', hints: ['Tổng chi = 5 200 + 1 300 + 800 + 700.', 'Lấy thu trừ chi.'], solution: 'Tổng chi 8 000; số dư 1 000 nghìn đồng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: SUMIF phù hợp để tính tổng chi theo từng khoản mục.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Thu 10 000, chi 8 800 (nghìn đồng). Số dư?', answer: '1200', answerText: '1 200', unit: 'nghìn đồng', calc: '10000-8800', explain: '1 200.' },
    { type: 'short', q: 'Thu 8 000, tiết kiệm 1 200 (nghìn đồng). Tỉ lệ tiết kiệm (%)?', answer: '15', unit: '%', calc: '1200/8000*100', explain: '15%.' },
    { type: 'mcq', q: 'Công thức đánh giá chi vượt kế hoạch (B: kế hoạch, C: thực chi):', options: ['=IF(C2>B2,"Vượt","Trong mức")', '=SUM(B2:C2)', '=COUNTIF(C2,B2)', '=IF(B2>C2,"Vượt")'], answer: 0, explain: 'Thực chi > kế hoạch thì vượt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cột số tiền chi nên cho phép nhập số âm tuỳ ý.', answer: false, explain: 'Nên ≥ 0.' },
    { type: 'mcq', q: 'Biểu đồ phù hợp thể hiện cơ cấu chi tiêu:', options: ['hình tròn', 'đoạn thẳng', 'không cần', 'sơ đồ khối'], answer: 0, explain: 'Tỉ lệ các phần.' },
    { type: 'short', q: 'Kế hoạch ăn uống 6 000, thực chi 6 450. Vượt bao nhiêu nghìn đồng?', answer: '450', unit: 'nghìn đồng', calc: '6450-6000', explain: '450.' },
    { type: 'mcq', q: 'Để chọn khoản mục từ danh sách có sẵn, dùng:', options: ['Data Validation – List', 'Merge & Center', 'Sort', 'Freeze Panes'], answer: 0, explain: 'List.' }
  ]
});
})();
