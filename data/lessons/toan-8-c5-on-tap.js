/* Toán 8 – Bài tập cuối chương V. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c5-on-tap', {
    objectives: [
      'Hệ thống hoá các phương pháp thu thập, phân loại dữ liệu và các dạng biểu diễn dữ liệu.',
      'Lựa chọn biểu đồ phù hợp, chuyển đổi giữa các dạng biểu diễn.',
      'Phân tích số liệu, phát hiện vấn đề và đưa ra kết luận hợp lí.'
    ],
    intro: 'Tổng kết chương “Dữ liệu và biểu đồ” với sơ đồ tư duy và các bài tập tổng hợp.',
    steps: [
      { title: 'Sơ đồ chương V', html: `<p>Ba khâu của thống kê:</p>`, svg: S.mindmap({ center: 'Dữ liệu và biểu đồ', branches: [
        { title: 'Thu thập', items: ['Quan sát, phỏng vấn', 'Phiếu hỏi, thí nghiệm', 'Nguồn có sẵn'] },
        { title: 'Phân loại', items: ['Định tính', 'Định lượng: rời rạc / liên tục'] },
        { title: 'Biểu diễn', items: ['Bảng, tranh, cột', 'Quạt tròn, đoạn thẳng'] },
        { title: 'Phân tích', items: ['Xu hướng, so sánh', 'Biểu đồ gây hiểu lầm'] } ] }), caption: 'Sơ đồ tư duy chương V.' },
      { title: 'Biểu đồ cột kép – so sánh hai nhóm', html: `<p>Số giờ đọc sách mỗi tuần của nam và nữ lớp 8A theo từng nhóm:</p>`,
        svg: S.bar({ title: 'Số bạn theo thời gian đọc sách mỗi tuần', cats: ['Dưới 1 giờ', '1–3 giờ', '3–5 giờ', 'Trên 5 giờ'], series: [{ name: 'Nam', values: [6, 8, 4, 2] }, { name: 'Nữ', values: [3, 7, 6, 4] }], yMax: 10, yStep: 2, yLabel: 'Số bạn', width: 540, height: 300 }), caption: 'Nữ có nhiều bạn đọc trên 3 giờ hơn nam.' },
      { title: 'Chuyển đổi dạng biểu diễn', html: `<p>Bảng ⇄ biểu đồ cột ⇄ biểu đồ quạt (qua phần trăm). Khi chuyển sang quạt tròn cần tính tổng và tỉ lệ; khi chuyển ngược lại cần biết tổng số.</p>` },
      { title: 'Tư duy phản biện', html: `<ul><li>Nguồn dữ liệu có đáng tin?</li><li>Mẫu có đại diện?</li><li>Biểu đồ có vẽ đúng tỉ lệ?</li><li>Kết luận có vượt quá dữ liệu?</li></ul>` }
    ],
    summary: 'Thu thập đúng cách – phân loại đúng loại – biểu diễn đúng mục đích – phân tích có phản biện.',
    examples: [
      { title: 'Đọc cột kép', problem: 'Từ biểu đồ cột kép về thời gian đọc sách, lớp 8A có bao nhiêu học sinh? Bao nhiêu phần trăm đọc trên 5 giờ mỗi tuần?', solution: 'Nam: 6 + 8 + 4 + 2 = 20; nữ: 3 + 7 + 6 + 4 = 20; tổng 40 bạn. Đọc trên 5 giờ: 2 + 4 = 6 bạn, chiếm {{6|40}} = 15%.' },
      { title: 'Chọn biểu đồ', problem: 'Chọn biểu đồ phù hợp: a) Cơ cấu chi tiêu của một gia đình; b) Giá xăng qua 12 tháng; c) Số huy chương của 5 đoàn thể thao.', solution: 'a) Quạt tròn; b) Đoạn thẳng; c) Cột.' },
      { title: 'Từ quạt về số lượng', problem: 'Gia đình chi 15 triệu đồng mỗi tháng, trong đó ăn uống chiếm 40%, học tập 20%. Tính số tiền mỗi khoản.', solution: 'Ăn uống: 15 · 0,4 = 6 triệu; học tập: 15 · 0,2 = 3 triệu đồng.' }
    ],
    exercises: [
      { question: 'Tỉ lệ phần trăm các bạn nữ đọc 3–5 giờ mỗi tuần so với số bạn nữ là bao nhiêu?', hints: ['Số bạn nữ đọc 3–5 giờ: 6; tổng nữ: 20.', '{{6|20}}.'], solution: '30%.' },
      { question: 'Một biểu đồ cột về số khách tham quan (năm 2024: 980 nghìn, 2025: 1 020 nghìn) vẽ trục tung từ 950. Nhận xét.', hints: ['Chênh lệch thực tế là bao nhiêu phần trăm?', '40 : 980 ≈ 4%.'], solution: 'Tăng khoảng 4% nhưng biểu đồ làm cột 2025 trông cao gấp khoảng 2,3 lần – gây hiểu lầm.' },
      { question: 'Dữ liệu “nhóm máu (A, B, AB, O)” thuộc loại gì? Biểu diễn tỉ lệ các nhóm máu trong lớp bằng biểu đồ nào?', hints: ['Nhóm máu có phải số?', 'Cần tỉ lệ trong tổng thể.'], solution: 'Định tính không thứ tự; biểu đồ quạt tròn.' }
    ],
    quiz: [
      { type: 'short', calc: '6 / 40 * 100', q: 'Lớp 40 bạn, 6 bạn đọc sách trên 5 giờ mỗi tuần. Chiếm bao nhiêu phần trăm?', unit: '%', answer: '15', explain: '{{6|40}} = 15%.' },
      { type: 'mcq', q: 'Cơ cấu chi tiêu của gia đình nên biểu diễn bằng:', options: ['Biểu đồ quạt tròn', 'Biểu đồ đoạn thẳng', 'Biểu đồ tranh', 'Bảng hai cột không tiêu đề'], answer: 0, explain: 'Thể hiện tỉ lệ các khoản trong tổng.' },
      { type: 'short', calc: '15 * 0.4', q: 'Gia đình chi 15 triệu đồng/tháng, ăn uống chiếm 40%. Tiền ăn uống là bao nhiêu triệu đồng?', unit: 'triệu đồng', answer: '6', explain: '15 · 0,4.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhóm máu là dữ liệu định lượng.', answer: false, explain: 'Là dữ liệu định tính.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Giá xăng qua 12 tháng nên biểu diễn bằng biểu đồ đoạn thẳng.', answer: true, explain: 'Thể hiện thay đổi theo thời gian.' },
      { type: 'short', calc: '6 / 20 * 100', q: '6 trong 20 bạn nữ đọc 3–5 giờ mỗi tuần. Tỉ lệ là bao nhiêu phần trăm?', unit: '%', answer: '30', explain: '{{6|20}} = 30%.' },
      { type: 'mcq', q: 'Phương pháp thu thập phù hợp để biết số lần mặt 6 xuất hiện khi gieo xúc xắc 60 lần:', options: ['Phỏng vấn', 'Làm thí nghiệm', 'Tra cứu niên giám', 'Đọc báo'], answer: 1, explain: 'Gieo và ghi lại kết quả.' },
      { type: 'short', calc: '6 + 8 + 4 + 2 + 3 + 7 + 6 + 4', q: 'Biểu đồ cột kép: nam 6, 8, 4, 2; nữ 3, 7, 6, 4. Lớp có tổng cộng bao nhiêu bạn?', answer: '40', explain: '20 + 20.' }
    ]
  });
})();
