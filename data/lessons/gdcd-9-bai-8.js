/* GDCD 9 – Bài 8. Tiêu dùng thông minh. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-8', {
  objectives: [
    'Nêu được khái niệm và biểu hiện của tiêu dùng thông minh.',
    'Giải thích được lợi ích của tiêu dùng thông minh.',
    'Biết một số quyền của người tiêu dùng theo pháp luật và cách nhận biết lừa đảo khi mua hàng.',
    'Vận dụng được cách tiêu dùng thông minh trong cuộc sống.'
  ],
  intro: 'Trên mạng xã hội, Khôi thấy quảng cáo tai nghe “hàng hiệu” giảm giá 80%, chỉ còn 299 000 đồng, “chỉ còn 2 suất”. Khôi định chuyển khoản ngay, nhưng chị gái nhắc: kiểm tra người bán, đọc đánh giá, so sánh giá. Hoá ra đó là hàng giả. Khôi vừa học được bài học về <b>tiêu dùng thông minh</b>.',
  steps: [
    { title: 'Tiêu dùng thông minh là gì?', html: `<p><b>Tiêu dùng thông minh</b> là biết lập kế hoạch, lựa chọn mua sắm hàng hoá, dịch vụ phù hợp nhu cầu, khả năng tài chính; đảm bảo chất lượng, an toàn; tiết kiệm và thân thiện với môi trường.</p>` },
    { title: 'Các bước mua sắm thông minh', html: `<p>Trước khi mua:</p>`,
      svg: S.flowchart({ title: 'Quyết định mua hàng', steps: [{ t: 'start', s: 'Muốn mua một món' }, { t: 'if', s: 'Thật sự cần?', yes: 'Tìm hiểu, so sánh', no: 'Không mua' }, { t: 'proc', s: 'Kiểm tra nguồn gốc, đánh giá' }, { t: 'proc', s: 'Mua, giữ hoá đơn' }, { t: 'end', s: 'Dùng hợp lí' }] }), caption: 'Cảnh giác với chiêu “giảm sốc”, “sắp hết hàng”.' },
    { title: 'Quyền của người tiêu dùng', html: `<p><b>Luật Bảo vệ quyền lợi người tiêu dùng năm 2023</b> (Luật số 19/2023/QH15, hiệu lực từ 1/7/2024), <b>Điều 4</b> quy định người tiêu dùng có các quyền, trong đó có:</p>`,
      svg: S.table({ title: 'Một số quyền của người tiêu dùng (Điều 4)', head: ['Quyền', 'Ví dụ'], rows: [['Được bảo đảm an toàn', 'Thực phẩm không độc hại'], ['Được cung cấp thông tin, hoá đơn', 'Biết xuất xứ, giá'], ['Lựa chọn, quyết định giao dịch', 'Không bị ép mua'], ['Khiếu nại, yêu cầu bồi thường', 'Đổi hàng lỗi']], colW: 250 }), caption: 'Tóm tắt, diễn đạt lại.' },
    { title: 'Lợi ích', html: `<ul><li>Bảo vệ sức khoẻ, tiền bạc; tránh hàng giả, lừa đảo.</li><li>Chi tiêu hợp lí, tiết kiệm.</li><li>Góp phần bảo vệ môi trường, thúc đẩy sản xuất hàng chất lượng.</li></ul>
      <div class="box key">Phê phán: mua sắm theo cảm hứng, chạy theo trào lưu, “sống ảo”.</div>` }
  ],
  summary: 'Tiêu dùng thông minh là mua sắm có kế hoạch, phù hợp nhu cầu và tài chính, bảo đảm chất lượng, an toàn, tiết kiệm, thân thiện môi trường. Cần xác định nhu cầu, tìm hiểu, so sánh, kiểm tra nguồn gốc, giữ hoá đơn. Luật Bảo vệ quyền lợi người tiêu dùng 2023 (Điều 4) bảo đảm quyền được an toàn, được thông tin, lựa chọn, khiếu nại, bồi thường.',
  examples: [
    { title: 'Tình huống của Khôi', problem: 'Dấu hiệu nào cho thấy quảng cáo đáng ngờ?', solution: 'Giảm giá quá sâu (80%), tạo áp lực “chỉ còn 2 suất”, yêu cầu chuyển khoản trước, người bán không rõ ràng.' },
    { title: 'So sánh giá', problem: 'Gói 500 g giá 40 000 đồng; gói 1 kg giá 72 000 đồng. Gói nào rẻ hơn tính theo kg?', solution: 'Gói 500 g: 80 000 đồng/kg; gói 1 kg: 72 000 đồng/kg. Gói 1 kg rẻ hơn (nếu dùng hết).' },
    { title: 'Tính giảm giá', problem: 'Áo giá 250 000 đồng, giảm 20%. Giá sau giảm?', solution: '250 000 × 80% = 200 000 đồng.' }
  ],
  exercises: [
    { question: 'Mua phải sữa hết hạn ở cửa hàng, em làm gì?', hints: ['Quyền của người tiêu dùng.', 'Giữ bằng chứng.'], solution: 'Giữ hoá đơn, sản phẩm; yêu cầu cửa hàng đổi, hoàn tiền; nếu không giải quyết, phản ánh đến cơ quan bảo vệ người tiêu dùng.' },
    { question: 'Giày giá 600 000 đồng, giảm 15%. Phải trả bao nhiêu?', hints: ['Giảm 600 000 × 15% = 90 000.', 'Trừ đi.'], solution: '510 000 đồng.' },
    { question: 'Nêu hai cách tiêu dùng thân thiện với môi trường.', hints: ['Bao bì.', 'Đồ dùng lâu bền.'], solution: 'Dùng túi vải, bình nước cá nhân; ưu tiên sản phẩm bền, tái chế được, ít bao bì nhựa.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người tiêu dùng có quyền được cung cấp hoá đơn, thông tin chính xác về hàng hoá.', answer: true, explain: 'Luật BVQLNTD 2023, Điều 4.' },
    { type: 'mcq', q: 'Luật Bảo vệ quyền lợi người tiêu dùng hiện hành có hiệu lực từ:', options: ['1/7/2024', '1/7/2011', '1/1/2020', '1/1/2016'], answer: 0, explain: 'Luật số 19/2023/QH15.' },
    { type: 'short', q: 'Áo 250 000 đồng giảm 20%. Giá sau giảm bao nhiêu đồng?', answer: '200000', answerText: '200 000', unit: 'đồng', calc: '250000*0.8', explain: '200 000.' },
    { type: 'mcq', q: 'Dấu hiệu quảng cáo lừa đảo:', options: ['Giảm sốc, ép chuyển khoản ngay', 'Có địa chỉ rõ ràng', 'Có hoá đơn', 'Cho kiểm tra hàng'], answer: 0, explain: 'Đáng ngờ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hàng càng đắt thì luôn càng tốt, không cần tìm hiểu.', answer: false, explain: 'Cần tìm hiểu, so sánh.' },
    { type: 'short', q: 'Giày 600 000 đồng giảm 15%. Phải trả bao nhiêu đồng?', answer: '510000', answerText: '510 000', unit: 'đồng', calc: '600000*0.85', explain: '510 000.' },
    { type: 'short', q: 'Gói 500 g giá 40 000 đồng. Tính ra 1 kg là bao nhiêu đồng?', answer: '80000', answerText: '80 000', unit: 'đồng', calc: '40000*2', explain: '80 000.' },
    { type: 'mcq', q: 'Biểu hiện tiêu dùng thông minh:', options: ['Mua theo nhu cầu, so sánh giá', 'Mua theo trào lưu', 'Mua vì quảng cáo', 'Mua bất kể giá'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
