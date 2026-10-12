/* Tin học 9 – Bài 14. Giải quyết vấn đề. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-14', {
  objectives: [
    'Nêu được quy trình giải quyết vấn đề: xác định vấn đề, thu thập thông tin, đề xuất và lựa chọn giải pháp, thực hiện, đánh giá.',
    'Vận dụng được tư duy máy tính: chia nhỏ vấn đề, nhận ra quy luật, trừu tượng hoá, xây dựng thuật toán.',
    'Biết rằng máy tính hỗ trợ giải quyết vấn đề khi vấn đề được mô tả bằng thuật toán.'
  ],
  intro: 'Thư viện trường hay bị trả sách muộn. Làm sao giải quyết? Một quy trình rõ ràng cùng cách suy nghĩ như nhà tin học sẽ giúp tìm ra giải pháp tốt – và có thể nhờ máy tính hỗ trợ.',
  steps: [
    { title: 'Quy trình giải quyết vấn đề', html: `<p>Giải quyết vấn đề thường theo các bước:</p>`,
      svg: S.flow({ items: ['Xác định vấn đề', 'Thu thập, phân tích thông tin', 'Đề xuất, chọn giải pháp', 'Thực hiện', 'Đánh giá, điều chỉnh'], size: 12, label: 'Quy trình 5 bước (có thể lặp lại)' }), caption: 'Sau khi đánh giá có thể quay lại điều chỉnh.' },
    { title: 'Tư duy máy tính', html: `<ul><li><b>Chia nhỏ</b>: tách vấn đề lớn thành các vấn đề nhỏ dễ giải.</li><li><b>Nhận ra quy luật</b>: tìm điểm giống nhau để dùng lại cách giải.</li><li><b>Trừu tượng hoá</b>: giữ thông tin quan trọng, bỏ chi tiết không cần.</li><li><b>Thuật toán</b>: viết các bước rõ ràng để người hoặc máy thực hiện.</li></ul>`,
      svg: S.mindmap({ center: 'Sách trả muộn', branches: [{ title: 'Nguyên nhân', items: ['Quên hạn trả', 'Hạn mượn ngắn'] }, { title: 'Thông tin', items: ['Số lượt mượn', 'Số lượt trả muộn'] }, { title: 'Giải pháp', items: ['Nhắc hạn tự động', 'Gia hạn trực tuyến'] }, { title: 'Đánh giá', items: ['Tỉ lệ trả muộn giảm?'] }], w: 640, size: 13 }), caption: 'Chia nhỏ vấn đề thư viện.' },
    { title: 'Máy tính hỗ trợ', html: `<p>Giải pháp “nhắc hạn tự động” có thể mô tả bằng thuật toán: mỗi ngày, với mỗi lượt mượn, nếu còn 2 ngày đến hạn thì gửi tin nhắc. Khi đã có thuật toán, máy tính thực hiện nhanh, chính xác, không mệt mỏi.</p>`,
      svg: S.flowchart({ title: 'Thuật toán nhắc hạn trả sách', steps: [{ t: 'start', s: 'Mỗi ngày' }, { t: 'loop', s: 'Còn lượt mượn chưa xét?', body: ['Tính số ngày đến hạn', 'Nếu = 2 thì gửi tin nhắc'] }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Lặp qua các lượt mượn, rẽ nhánh để gửi tin nhắc.' },
    { title: 'Đánh giá giải pháp', html: `<p>Đo kết quả bằng số liệu: tỉ lệ trả muộn trước và sau khi áp dụng. Ví dụ từ 30% xuống 12% (số liệu minh hoạ) → giải pháp hiệu quả; nếu chưa đạt, quay lại điều chỉnh.</p>
      <div class="box key">Chia nhỏ – tìm quy luật – trừu tượng hoá – thuật toán – đánh giá bằng số liệu.</div>` }
  ],
  summary: 'Quy trình giải quyết vấn đề: xác định vấn đề, thu thập thông tin, đề xuất và chọn giải pháp, thực hiện, đánh giá (có thể lặp lại). Tư duy máy tính gồm chia nhỏ, nhận ra quy luật, trừu tượng hoá, xây dựng thuật toán. Khi giải pháp được mô tả bằng thuật toán, máy tính có thể hỗ trợ thực hiện.',
  examples: [
    { title: 'Chia nhỏ', problem: 'Chia nhỏ vấn đề “tổ chức hội chợ sách của lớp”.', solution: 'Chọn địa điểm, thời gian; thu gom sách; định giá; quảng bá; phân công bán hàng; tổng kết.' },
    { title: 'Trừu tượng hoá', problem: 'Khi lập bản đồ đường đến trường, những thông tin nào được giữ lại?', solution: 'Các con đường, ngã rẽ, mốc chính; bỏ màu nhà, cây cối không cần thiết.' },
    { title: 'Đánh giá bằng số liệu', problem: 'Trước: 45 lượt trả muộn/150 lượt mượn; sau: 18/150. Tỉ lệ giảm từ bao nhiêu xuống bao nhiêu?', solution: 'Từ 30% xuống 12%.' }
  ],
  exercises: [
    { question: 'Áp dụng quy trình 5 bước cho vấn đề “lớp hay quên mang đồ dùng học tập”.', hints: ['Thu thập: ai quên, quên gì, khi nào?', 'Giải pháp và cách đánh giá.'], solution: 'Ví dụ: xác định vấn đề; khảo sát; giải pháp danh sách kiểm tra buổi tối, nhắc qua nhóm lớp; thực hiện 2 tuần; đánh giá số lượt quên trước – sau.' },
    { question: 'Nêu bốn thành phần của tư duy máy tính.', hints: ['Liên quan chia, quy luật.', 'Liên quan bỏ chi tiết, các bước.'], solution: 'Chia nhỏ; nhận ra quy luật; trừu tượng hoá; thuật toán.' },
    { question: 'Tỉ lệ trả muộn giảm từ 30% xuống 12%. Giảm bao nhiêu điểm phần trăm và giảm bao nhiêu phần trăm so với ban đầu?', hints: ['30 − 12.', '18 : 30.'], solution: 'Giảm 18 điểm phần trăm, tức giảm 60% so với ban đầu.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chia nhỏ vấn đề là một thành phần của tư duy máy tính.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Bước đầu tiên của quy trình giải quyết vấn đề:', options: ['Xác định vấn đề', 'Thực hiện', 'Đánh giá', 'Lập trình'], answer: 0, explain: 'Xác định vấn đề.' },
    { type: 'mcq', q: 'Giữ thông tin quan trọng, bỏ chi tiết không cần gọi là:', options: ['trừu tượng hoá', 'chia nhỏ', 'gỡ lỗi', 'sắp xếp'], answer: 0, explain: 'Trừu tượng hoá.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Máy tính có thể tự giải quyết mọi vấn đề mà không cần thuật toán.', answer: false, explain: 'Cần thuật toán.' },
    { type: 'short', q: 'Trước có 40/160 lượt trả muộn. Tỉ lệ trả muộn (%)?', answer: '25', unit: '%', calc: '40/160*100', explain: '25%.' },
    { type: 'short', q: 'Tỉ lệ lỗi giảm từ 25% xuống 10%. Giảm bao nhiêu phần trăm so với ban đầu?', answer: '60', unit: '%', calc: '(25-10)/25*100', explain: '15 : 25 = 60%.' },
    { type: 'mcq', q: 'Sau khi đánh giá thấy giải pháp chưa hiệu quả, nên:', options: ['quay lại điều chỉnh', 'bỏ qua', 'giấu kết quả', 'dừng hẳn'], answer: 0, explain: 'Điều chỉnh.' },
    { type: 'short', q: 'Vấn đề được chia thành 4 phần, mỗi phần chia tiếp 3 việc nhỏ. Có tất cả bao nhiêu việc nhỏ?', answer: '12', calc: '4*3', explain: '12.' }
  ]
});
})();
