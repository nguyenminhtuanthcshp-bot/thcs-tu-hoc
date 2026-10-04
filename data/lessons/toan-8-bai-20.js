/* Toán 8 – Bài 20. Phân tích số liệu thống kê dựa vào biểu đồ. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-20', {
    objectives: [
      'Đọc, mô tả và phân tích được số liệu thống kê biểu diễn trên các loại biểu đồ.',
      'Phát hiện được vấn đề, quy luật đơn giản (tăng, giảm, lớn nhất, nhỏ nhất) dựa trên phân tích số liệu.',
      'Nhận biết được những biểu đồ biểu diễn chưa chính xác, dễ gây hiểu lầm.',
      'Giải quyết được vấn đề đơn giản liên quan đến số liệu thu được.'
    ],
    intro: 'Vẽ được biểu đồ mới là một nửa; đọc biểu đồ để rút ra kết luận – và phát hiện biểu đồ “đánh lừa” – mới là kĩ năng của người công dân thông thái.',
    steps: [
      { title: 'Đọc biểu đồ cột kép', html: `<p>Biểu đồ dưới đây so sánh số học sinh đạt loại Tốt ở học kì I và học kì II của 4 lớp.</p>`,
        svg: S.bar({ title: 'Số học sinh đạt loại Tốt', cats: ['8A', '8B', '8C', '8D'], series: [{ name: 'Học kì I', values: [12, 9, 15, 10] }, { name: 'Học kì II', values: [16, 12, 14, 15] }], yMax: 18, yStep: 3, yLabel: 'Học sinh', width: 540, height: 300 }), caption: 'Lớp 8D tăng nhiều nhất (+5); lớp 8C giảm 1.' },
      { title: 'Phân tích xu hướng', html: `<p>Với biểu đồ đoạn thẳng, hãy trả lời: đại lượng <b>tăng</b> hay <b>giảm</b> trong từng khoảng? Khoảng nào tăng mạnh nhất? Giá trị lớn nhất, nhỏ nhất ở đâu?</p>`,
        svg: S.lineChart({ title: 'Doanh thu quầy sách theo tháng (triệu đồng)', cats: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'], values: [4, 5, 7, 6, 9, 10], yMin: 0, yMax: 12, yStep: 2, yLabel: 'triệu đồng' }), caption: 'Doanh thu nhìn chung tăng; chỉ giảm ở tháng 4.' },
      { title: 'Biểu đồ gây hiểu lầm', html: `<p>Một số lỗi khiến biểu đồ “nói sai”:</p><ul><li>Trục tung <b>không bắt đầu từ 0</b> làm chênh lệch nhỏ trông rất lớn.</li><li>Khoảng chia trên trục không đều.</li><li>Biểu đồ quạt tròn có tổng khác 100%.</li><li>Dùng hình vẽ phóng to cả chiều dài lẫn chiều rộng.</li></ul>
        <div class="box warn">Luôn đọc kĩ số trên trục trước khi so sánh độ cao các cột.</div>` },
      { title: 'Tính toán từ biểu đồ', html: `<p>Từ biểu đồ ta có thể tính: tổng, hiệu, tỉ số, trung bình, phần trăm tăng giảm.</p>
        <p>Ví dụ: doanh thu tháng 6 so với tháng 1 tăng (10 − 4) : 4 = 150%.</p>` }
    ],
    summary: 'Đọc trục và chú giải → so sánh, tìm lớn nhất / nhỏ nhất, xu hướng → tính toán (tổng, trung bình, phần trăm) → kiểm tra biểu đồ có gây hiểu lầm không.',
    examples: [
      { title: 'Phân tích cột kép', problem: 'Dựa vào biểu đồ “Số học sinh đạt loại Tốt”, tính tổng số học sinh đạt loại Tốt của khối 8 ở mỗi học kì.', solution: 'Học kì I: 12 + 9 + 15 + 10 = 46. Học kì II: 16 + 12 + 14 + 15 = 57. Tăng 11 học sinh.' },
      { title: 'Trung bình', problem: 'Tính doanh thu trung bình mỗi tháng của quầy sách trong 6 tháng.', solution: '(4 + 5 + 7 + 6 + 9 + 10) : 6 = 41 : 6 ≈ 6,83 triệu đồng.' },
      { title: 'Phát hiện biểu đồ sai lệch', problem: 'Một biểu đồ cột về số khách của hai cửa hàng (A: 102 khách, B: 108 khách) có trục tung bắt đầu từ 100. Cột B cao gấp 4 lần cột A. Điều đó có đúng với thực tế không?', solution: 'Không. Số khách của B chỉ nhiều hơn A khoảng 6%; do trục tung bắt đầu từ 100 nên chênh lệch bị phóng đại.' }
    ],
    exercises: [
      { question: 'Từ biểu đồ cột kép, lớp nào có số học sinh đạt loại Tốt giảm từ học kì I sang học kì II?', hints: ['So sánh hai cột của mỗi lớp.', 'Lớp 8C: 15 → 14.'], solution: 'Lớp 8C.' },
      { question: 'Doanh thu quầy sách tháng 5 tăng bao nhiêu phần trăm so với tháng 4?', hints: ['Tháng 4: 6; tháng 5: 9.', '(9 − 6) : 6.'], solution: '50%.' },
      { question: 'Một biểu đồ quạt tròn ghi: 45%, 30%, 35%. Biểu đồ này có hợp lí không?', hints: ['Tính tổng các phần trăm.', '45 + 30 + 35 = 110.'], solution: 'Không hợp lí vì tổng là 110% ≠ 100%.' }
    ],
    quiz: [
      { type: 'short', calc: '16 + 12 + 14 + 15', q: 'Học kì II, các lớp 8A, 8B, 8C, 8D có lần lượt 16, 12, 14, 15 học sinh đạt loại Tốt. Tổng là bao nhiêu?', answer: '57', explain: 'Cộng bốn số.' },
      { type: 'mcq', q: 'Lớp nào tăng số học sinh loại Tốt nhiều nhất (HK I → HK II: 8A 12→16, 8B 9→12, 8C 15→14, 8D 10→15)?', options: ['8A', '8B', '8C', '8D'], answer: 3, explain: '8D tăng 5.' },
      { type: 'short', calc: '(9 - 6) / 6 * 100', q: 'Doanh thu tăng từ 6 triệu lên 9 triệu đồng. Tăng bao nhiêu phần trăm?', unit: '%', answer: '50', explain: '3 : 6 = 50%.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biểu đồ cột có trục tung không bắt đầu từ 0 có thể làm chênh lệch trông lớn hơn thực tế.', answer: true, explain: 'Đây là lỗi gây hiểu lầm phổ biến.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biểu đồ quạt tròn ghi 45%, 30%, 35% là hợp lí.', answer: false, explain: 'Tổng 110%.' },
      { type: 'short', calc: '(10 - 4) / 4 * 100', q: 'Doanh thu tháng 1 là 4 triệu, tháng 6 là 10 triệu. Tăng bao nhiêu phần trăm?', unit: '%', answer: '150', explain: '6 : 4 = 1,5 = 150%.' },
      { type: 'mcq', q: 'Trên biểu đồ đoạn thẳng, đoạn đi xuống cho biết:', options: ['Đại lượng tăng', 'Đại lượng giảm', 'Đại lượng không đổi', 'Không có ý nghĩa'], answer: 1, explain: 'Giá trị sau nhỏ hơn giá trị trước.' },
      { type: 'short', calc: '(12 + 9 + 15 + 10) / 4', q: 'Học kì I, bốn lớp có 12, 9, 15, 10 học sinh loại Tốt. Trung bình mỗi lớp bao nhiêu học sinh? (Dùng dấu phẩy hoặc chấm.)', answer: '11.5', answerText: '11,5', explain: '46 : 4 = 11,5.' }
    ]
  });
})();
