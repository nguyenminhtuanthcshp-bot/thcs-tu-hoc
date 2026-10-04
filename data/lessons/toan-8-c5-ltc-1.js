/* Toán 8 – Luyện tập chung (sau Bài 20). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c5-ltc-1', {
    objectives: [
      'Phân loại dữ liệu và lựa chọn phương pháp thu thập phù hợp.',
      'Chuyển dữ liệu từ bảng sang biểu đồ phù hợp và ngược lại.',
      'Phân tích số liệu trên biểu đồ để rút ra kết luận, phát hiện biểu đồ chưa hợp lí.'
    ],
    intro: 'Buổi luyện tập này đi trọn một vòng thống kê: thu thập → biểu diễn → phân tích.',
    steps: [
      { title: 'Vòng tròn thống kê', html: `<p>Một cuộc điều tra hoàn chỉnh gồm các bước:</p>`,
        svg: S.flow({ items: [{ title: 'Câu hỏi', text: 'muốn biết gì?' }, { title: 'Thu thập', text: 'phiếu hỏi, nguồn có sẵn' }, { title: 'Biểu diễn', text: 'bảng, biểu đồ' }, { title: 'Phân tích', text: 'so sánh, xu hướng' }, { title: 'Kết luận', text: 'trả lời câu hỏi' }], w: 680, size: 14 }), caption: 'Các bước của một cuộc điều tra thống kê.' },
      { title: 'Từ bảng sang biểu đồ quạt', html: `<p>Bước 1: tính tổng. Bước 2: tính tỉ lệ phần trăm từng phần. Bước 3: (nếu vẽ tay) góc ở tâm = phần trăm × 3,6°.</p>
        <table class="tbl"><tr><th>Thể loại sách</th><th>Truyện</th><th>Khoa học</th><th>Lịch sử</th><th>Khác</th></tr><tr><td>Số bạn</td><td>16</td><td>10</td><td>8</td><td>6</td></tr><tr><td>Tỉ lệ</td><td>40%</td><td>25%</td><td>20%</td><td>15%</td></tr></table>`,
        svg: S.sectorChart({ title: 'Thể loại sách yêu thích – lớp 8C', parts: [{ label: 'Truyện', value: 40 }, { label: 'Khoa học', value: 25 }, { label: 'Lịch sử', value: 20 }, { label: 'Khác', value: 15 }], unit: '%' }), caption: 'Tổng 40 bạn.' },
      { title: 'Kiểm tra tính hợp lí', html: `<ul><li>Tổng các tỉ lệ bằng 100%?</li><li>Tổng số liệu từng phần bằng tổng chung?</li><li>Giá trị có nằm trong phạm vi thực tế?</li></ul>` },
      { title: 'Rút ra kết luận', html: `<p>Kết luận phải dựa trên số liệu, nêu rõ phạm vi: “Trong lớp 8C, thể loại truyện được yêu thích nhất (40%)” – không suy rộng ra “mọi học sinh Việt Nam”.</p>` }
    ],
    summary: 'Thu thập đúng, biểu diễn phù hợp, phân tích cẩn thận, kết luận trong phạm vi dữ liệu.',
    examples: [
      { title: 'Góc ở tâm', problem: 'Trong biểu đồ quạt “Thể loại sách yêu thích”, phần Truyện ứng với góc ở tâm bao nhiêu độ?', solution: '40% · 360° = 144°.' },
      { title: 'Từ phần trăm ra số lượng', problem: 'Một trường có 800 học sinh, biểu đồ quạt cho biết 35% học sinh đi xe buýt. Có bao nhiêu học sinh đi xe buýt?', solution: '800 · 35% = 280 học sinh.' },
      { title: 'Nhận xét kết luận', problem: 'Từ khảo sát 40 bạn lớp 8C, bạn Nam kết luận: “Học sinh cả nước thích truyện nhất”. Kết luận có hợp lí không?', solution: 'Không hợp lí vì mẫu chỉ là một lớp, không đại diện cho học sinh cả nước.' }
    ],
    exercises: [
      { question: 'Điểm kiểm tra Toán của 10 bạn: 7, 8, 6, 9, 8, 10, 7, 8, 5, 9. Lập bảng tần số (mỗi điểm xuất hiện bao nhiêu lần) và cho biết điểm nào nhiều bạn đạt nhất.', hints: ['Đếm từng giá trị 5, 6, 7, 8, 9, 10.', 'Điểm 8 xuất hiện 3 lần.'], solution: '5: 1; 6: 1; 7: 2; 8: 3; 9: 2; 10: 1. Điểm 8 nhiều nhất.' },
      { question: 'Phần “Khác” chiếm 15% trên biểu đồ quạt của lớp 40 bạn. Có bao nhiêu bạn?', hints: ['40 · 15%.', '40 · 0,15.'], solution: '6 bạn.' },
      { question: 'Dữ liệu “thời gian tự học mỗi ngày (phút)” là loại dữ liệu gì? Nên biểu diễn sự thay đổi thời gian tự học của một bạn trong 7 ngày bằng biểu đồ gì?', hints: ['Thời gian đo được.', 'Thay đổi theo ngày.'], solution: 'Định lượng liên tục; dùng biểu đồ đoạn thẳng.' }
    ],
    quiz: [
      { type: 'short', calc: '0.4 * 360', q: 'Một phần chiếm 40% trên biểu đồ quạt tròn. Góc ở tâm bằng bao nhiêu độ?', unit: 'độ', answer: '144', explain: '0,4 · 360°.' },
      { type: 'short', calc: '800 * 0.35', q: 'Trường có 800 học sinh, 35% đi xe buýt. Số học sinh đi xe buýt là bao nhiêu?', answer: '280', explain: '800 · 0,35.' },
      { type: 'mcq', q: 'Để thể hiện thời gian tự học của một bạn trong 7 ngày, nên dùng:', options: ['Biểu đồ quạt tròn', 'Biểu đồ đoạn thẳng', 'Biểu đồ tranh', 'Không cần biểu đồ'], answer: 1, explain: 'Biểu đồ đoạn thẳng thể hiện thay đổi theo thời gian.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kết luận rút ra từ một lớp có thể áp dụng ngay cho học sinh cả nước.', answer: false, explain: 'Mẫu không đại diện.' },
      { type: 'short', calc: '16 / 40 * 100', q: '16 trong 40 bạn thích truyện. Tỉ lệ phần trăm là bao nhiêu (%)?', unit: '%', answer: '40', explain: '{{16|40}} = 40%.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc ở tâm (độ) của một hình quạt bằng tỉ lệ phần trăm của nó nhân với 3,6.', answer: true, explain: '1% ứng với 3,6°.' },
      { type: 'short', calc: '3', q: 'Điểm: 7, 8, 6, 9, 8, 10, 7, 8, 5, 9. Điểm 8 xuất hiện bao nhiêu lần?', answer: '3', explain: 'Đếm được 3 lần.' },
      { type: 'mcq', q: 'Thứ tự đúng của một cuộc điều tra thống kê là:', options: ['Biểu diễn → Thu thập → Phân tích', 'Thu thập → Biểu diễn → Phân tích', 'Phân tích → Thu thập → Biểu diễn', 'Kết luận → Thu thập → Biểu diễn'], answer: 1, explain: 'Thu thập trước, biểu diễn rồi phân tích.' }
    ]
  });
})();
