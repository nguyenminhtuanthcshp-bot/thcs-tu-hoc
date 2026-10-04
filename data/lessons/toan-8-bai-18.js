/* Toán 8 – Bài 18. Thu thập và phân loại dữ liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/bai-18', {
    objectives: [
      'Thực hiện và lí giải được việc thu thập dữ liệu bằng các phương pháp: quan sát, phỏng vấn, lập phiếu hỏi, làm thí nghiệm, thu thập từ nguồn có sẵn.',
      'Phân loại được dữ liệu: dữ liệu định tính (không phải số) và dữ liệu định lượng (số); dữ liệu rời rạc và liên tục.',
      'Nhận biết được tính hợp lí, tính đại diện của dữ liệu thu thập được.'
    ],
    intro: 'Muốn biết các bạn trong trường thích môn thể thao nào, em làm thế nào? Hỏi cả trường, hay chỉ hỏi một lớp? Bài học này giúp em thu thập và phân loại dữ liệu một cách khoa học.',
    steps: [
      { title: 'Các phương pháp thu thập dữ liệu', html: `<ul><li><b>Trực tiếp:</b> quan sát, làm thí nghiệm, phỏng vấn, lập phiếu hỏi (phiếu khảo sát).</li><li><b>Gián tiếp:</b> thu thập từ nguồn có sẵn như sách báo, trang web chính thống, niên giám thống kê.</li></ul>`,
        svg: S.flow({ items: [{ title: 'Xác định câu hỏi', text: 'cần biết điều gì?' }, { title: 'Chọn phương pháp', text: 'quan sát, phiếu hỏi…' }, { title: 'Thu thập', text: 'ghi chép cẩn thận' }, { title: 'Phân loại', text: 'định tính / định lượng' }], w: 660, size: 14 }), caption: 'Các bước của một cuộc điều tra nhỏ.' },
      { title: 'Dữ liệu định tính và định lượng', html: `<table class="tbl"><tr><th>Loại</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
        <tr><td>Định lượng</td><td>Là số</td><td>Chiều cao, số anh chị em, điểm kiểm tra</td></tr>
        <tr><td>Định tính</td><td>Không phải số (từ, chữ, mức độ)</td><td>Màu yêu thích, môn học, mức độ hài lòng</td></tr></table>` },
      { title: 'Rời rạc và liên tục', html: `<p>Dữ liệu định lượng chia thành:</p><ul><li><b>Rời rạc:</b> đếm được, thường là số tự nhiên – số học sinh, số lần đi thư viện.</li><li><b>Liên tục:</b> đo được, có thể nhận mọi giá trị trong một khoảng – chiều cao, cân nặng, thời gian.</li></ul>
        <p>Dữ liệu định tính có thể có thứ tự (tốt – khá – trung bình) hoặc không có thứ tự (màu sắc).</p>` },
      { title: 'Tính hợp lí và đại diện', html: `<p>Dữ liệu cần <b>hợp lí</b>: không có giá trị vô lí (ví dụ tuổi học sinh lớp 8 là 3 tuổi).</p>
        <p>Mẫu khảo sát cần <b>đại diện</b>: muốn biết ý kiến cả trường thì không chỉ hỏi riêng câu lạc bộ bóng đá.</p>
        <div class="box warn">Chọn mẫu không đại diện dẫn đến kết luận sai lệch dù tính toán hoàn toàn đúng.</div>` }
    ],
    summary: 'Thu thập: trực tiếp (quan sát, phỏng vấn, phiếu hỏi, thí nghiệm) hoặc gián tiếp (nguồn có sẵn). Phân loại: định tính / định lượng (rời rạc, liên tục). Kiểm tra tính hợp lí, tính đại diện.',
    examples: [
      { title: 'Phân loại dữ liệu', problem: 'Phân loại các dữ liệu: a) Nhiệt độ lúc 7 giờ sáng các ngày; b) Loại trái cây yêu thích; c) Số bạn đi xe đạp đến trường của mỗi lớp.', solution: 'a) Định lượng, liên tục. b) Định tính. c) Định lượng, rời rạc.' },
      { title: 'Chọn phương pháp', problem: 'Nên dùng phương pháp nào để thu thập: a) Dân số Việt Nam năm 2025; b) Số lần một đồng xu ra mặt ngửa trong 50 lần tung?', solution: 'a) Thu thập từ nguồn có sẵn (Tổng cục Thống kê). b) Làm thí nghiệm (tung đồng xu và ghi lại).' },
      { title: 'Phát hiện dữ liệu không hợp lí', problem: 'Bảng chiều cao (cm) của 6 bạn lớp 8A: 152; 158; 16; 149; 161; 155. Dữ liệu nào không hợp lí?', solution: 'Giá trị 16 cm không hợp lí với chiều cao học sinh lớp 8 (có lẽ ghi thiếu, đúng ra là 160 hoặc 165…).' }
    ],
    exercises: [
      { question: 'Dữ liệu “mức độ yêu thích môn Toán: rất thích, thích, bình thường, không thích” thuộc loại nào?', hints: ['Các giá trị có phải là số không?', 'Các mức có thể sắp theo thứ tự.'], solution: 'Dữ liệu định tính có thứ tự.' },
      { question: 'Bạn Lan muốn biết thời gian ngủ trung bình của học sinh trường mình và chỉ hỏi các bạn trong đội tuyển thi học sinh giỏi. Mẫu này có đại diện không?', hints: ['Đội tuyển có thể có thói quen học khuya khác số đông.', 'Mẫu đại diện cần gồm nhiều khối, nhiều lớp.'], solution: 'Không đại diện; nên chọn ngẫu nhiên học sinh ở các khối lớp khác nhau.' },
      { question: 'Trong các dữ liệu: cân nặng, số chiếc điện thoại di động trong gia đình, quê quán, thời gian chạy 100 m – dữ liệu nào là định lượng liên tục?', hints: ['Liên tục là dữ liệu đo được.', 'Số chiếc điện thoại là đếm được (rời rạc).'], solution: 'Cân nặng và thời gian chạy 100 m.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Dữ liệu nào là dữ liệu định tính?', options: ['Chiều cao', 'Số anh chị em', 'Môn học yêu thích', 'Điểm kiểm tra'], answer: 2, explain: 'Môn học yêu thích không phải là số.' },
      { type: 'mcq', q: 'Để biết lượng mưa trung bình các tháng ở Hà Nội năm trước, nên:', options: ['Làm thí nghiệm', 'Thu thập từ nguồn có sẵn', 'Phỏng vấn bạn bè', 'Quan sát một ngày'], answer: 1, explain: 'Số liệu khí tượng có sẵn từ cơ quan thống kê, khí tượng.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Số học sinh vắng mặt mỗi ngày là dữ liệu định lượng rời rạc.', answer: true, explain: 'Đếm được.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cân nặng là dữ liệu rời rạc.', answer: false, explain: 'Cân nặng đo được, là dữ liệu liên tục.' },
      { type: 'short', calc: '2', q: 'Trong các dữ liệu: màu áo, số bàn thắng, nhiệt độ, quê quán – có bao nhiêu dữ liệu định lượng?', answer: '2', explain: 'Số bàn thắng và nhiệt độ.' },
      { type: 'mcq', q: 'Khảo sát “môn thể thao yêu thích của học sinh cả trường” chỉ bằng cách hỏi các bạn trong CLB cầu lông. Mẫu này:', options: ['Đại diện tốt', 'Không đại diện', 'Không hợp lí vì có số âm', 'Là dữ liệu liên tục'], answer: 1, explain: 'Các bạn CLB cầu lông chắc chắn thích cầu lông.' },
      { type: 'short', calc: '16', q: 'Dãy chiều cao (cm): 152; 158; 16; 149; 161. Giá trị nào không hợp lí? (Nhập số.)', answer: '16', explain: '16 cm không thể là chiều cao học sinh lớp 8.' },
      { type: 'mcq', q: 'Xếp loại học lực “Tốt, Khá, Đạt, Chưa đạt” là:', options: ['Định lượng liên tục', 'Định lượng rời rạc', 'Định tính có thứ tự', 'Định tính không thứ tự'], answer: 2, explain: 'Không phải số và có thứ tự.' }
    ]
  });
})();
