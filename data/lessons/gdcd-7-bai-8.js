/* GDCD 7 – Bài 8. Quản lí tiền. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-8', {
  objectives: [
    'Nêu được ý nghĩa của việc quản lí tiền hiệu quả.',
    'Nhận biết được một số nguyên tắc quản lí tiền: chi tiêu hợp lí, tiết kiệm thường xuyên, tạo nguồn thu.',
    'Bước đầu biết quản lí tiền của bản thân và tạo nguồn thu nhập cá nhân phù hợp lứa tuổi.'
  ],
  intro: 'Mỗi tháng Duy có khoảng 300 000 đồng (tiền tiêu vặt và tiền bán giấy vụn). Lúc đầu, giữa tháng Duy đã hết sạch tiền. Từ khi ghi chép chi tiêu và để dành trước, Duy luôn còn dư. Đó là <b>quản lí tiền</b>.',
  steps: [
    { title: 'Vì sao cần quản lí tiền?', html: `<p>Quản lí tiền hiệu quả giúp: chủ động chi tiêu, cân bằng thu chi; có tiền cho việc cần thiết và tình huống bất ngờ; thực hiện được mục tiêu (mua sách, đồ dùng); hình thành thói quen tiết kiệm, tự lập.</p>` },
    { title: 'Nguyên tắc quản lí tiền', html: `<ul><li><b>Chi tiêu có kế hoạch</b>: phân biệt “cần” và “muốn”, ưu tiên việc cần.</li><li><b>Tiết kiệm thường xuyên</b>: để dành trước khi tiêu (ví dụ 20% mỗi khoản thu).</li><li><b>Tạo nguồn thu phù hợp</b>: bán đồ tái chế, làm đồ thủ công, giúp việc vừa sức (với sự đồng ý của bố mẹ).</li><li><b>Ghi chép thu chi</b> để kiểm soát.</li></ul>`,
      svg: S.pieChart({ title: 'Phân chia 300 000 đồng/tháng của Duy (minh hoạ)', parts: [{ v: 90, label: 'Tiết kiệm: 90 000 (30%)' }, { v: 120, label: 'Chi tiêu cần thiết: 120 000' }, { v: 60, label: 'Chi tiêu cá nhân: 60 000' }, { v: 30, label: 'Giúp đỡ, ủng hộ: 30 000' }] }), caption: 'Số liệu minh hoạ; tỉ lệ có thể điều chỉnh theo hoàn cảnh.' },
    { title: 'Ghi chép thu chi', html: `<p>Sổ thu chi đơn giản giúp em biết tiền đi đâu:</p>`,
      svg: S.sheet({ title: 'Sổ thu chi tháng 10 của Duy (minh hoạ)', cols: ['A', 'B', 'C', 'D'], rows: [['Ngày', 'Nội dung', 'Thu', 'Chi'], ['01/10', 'Tiền tiêu vặt', '250 000', ''], ['05/10', 'Mua vở, bút', '', '45 000'], ['12/10', 'Bán giấy vụn', '50 000', ''], ['20/10', 'Quà sinh nhật bạn', '', '60 000'], ['Tổng', '', '300 000', '105 000']], active: 'D6', formula: '=SUM(D2:D5)', colW: 130, note: 'Còn lại: 300 000 − 105 000 = 195 000 đồng' }), caption: 'Ghi đều đặn mỗi khi thu hoặc chi.' },
    { title: 'Cần hay muốn?', html: `<p>Trước khi mua, tự hỏi: Mình có thật sự cần không? Có thể mượn, dùng lại đồ cũ không? Có vượt kế hoạch không? Đợi vài ngày mình còn muốn mua không?</p>
      <div class="box key">Để dành trước – chi theo kế hoạch – ghi chép – tạo nguồn thu chính đáng.</div>` }
  ],
  summary: 'Quản lí tiền hiệu quả giúp chủ động, cân bằng thu chi, có tiền cho việc cần và tình huống bất ngờ, thực hiện mục tiêu. Nguyên tắc: chi tiêu có kế hoạch (cần trước, muốn sau), tiết kiệm thường xuyên (để dành trước), tạo nguồn thu chính đáng phù hợp lứa tuổi, ghi chép thu chi.',
  examples: [
    { title: 'Tính tiết kiệm', problem: 'Mỗi tháng Duy tiết kiệm 90 000 đồng. Sau 6 tháng có bao nhiêu?', solution: '540 000 đồng.' },
    { title: 'Cần hay muốn', problem: 'Phân loại: vở viết, áo đồng phục bị rách, đồ chơi mới theo trào lưu, thẻ trò chơi.', solution: 'Cần: vở, áo đồng phục. Muốn: đồ chơi trào lưu, thẻ trò chơi.' },
    { title: 'Số dư', problem: 'Theo sổ thu chi ở bước 3, Duy còn lại bao nhiêu? Đã chi bao nhiêu phần trăm số thu?', solution: 'Còn 195 000 đồng; đã chi 105 000 : 300 000 = 35%.' }
  ],
  exercises: [
    { question: 'Lập kế hoạch dùng 200 000 đồng/tháng theo tỉ lệ: tiết kiệm 30%, cần thiết 50%, cá nhân 20%.', hints: ['Nhân 200 000 với từng tỉ lệ.', 'Kiểm tra tổng bằng 200 000.'], solution: 'Tiết kiệm 60 000; cần thiết 100 000; cá nhân 40 000 đồng.' },
    { question: 'Nêu hai cách tạo nguồn thu phù hợp với học sinh lớp 7.', hints: ['Từ đồ tái chế.', 'Từ sản phẩm tự làm.'], solution: 'Thu gom giấy vụn, chai nhựa bán phế liệu; làm thiệp, đồ handmade bán ở hội chợ trường (được bố mẹ đồng ý).' },
    { question: 'Muốn mua bộ sách 360 000 đồng, mỗi tháng để dành 60 000 đồng. Cần bao nhiêu tháng?', hints: ['Chia giá cho số tiền mỗi tháng.', '360 000 : 60 000.'], solution: '6 tháng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên để dành tiền trước rồi mới chi tiêu.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Khoản nào là “cần”:', options: ['Vở viết', 'Thẻ trò chơi', 'Đồ chơi trào lưu', 'Kẹo trang trí'], answer: 0, explain: 'Cần thiết.' },
    { type: 'short', q: 'Thu 250 000 đồng, tiết kiệm 20%. Tiết kiệm bao nhiêu đồng?', answer: '50 000', answerText: '50 000', unit: 'đồng', calc: '250000*0.2', explain: '50 000.' },
    { type: 'short', q: 'Thu 300 000, chi 180 000 đồng. Còn lại bao nhiêu đồng?', answer: '120000', answerText: '120 000', unit: 'đồng', calc: '300000-180000', explain: '120 000.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Học sinh không cần ghi chép thu chi.', answer: false, explain: 'Ghi chép giúp kiểm soát.' },
    { type: 'short', q: 'Mua đồ 240 000 đồng, mỗi tháng để dành 40 000 đồng. Cần bao nhiêu tháng?', answer: '6', unit: 'tháng', calc: '240000/40000', explain: '6.' },
    { type: 'mcq', q: 'Cách tạo nguồn thu phù hợp với học sinh:', options: ['Bán giấy vụn, đồ tái chế', 'Vay nặng lãi', 'Chơi cá cược', 'Lấy tiền của bố mẹ không xin phép'], answer: 0, explain: 'Chính đáng.' },
    { type: 'mcq', q: 'Ý nghĩa của quản lí tiền:', options: ['chủ động, cân bằng thu chi', 'tiêu hết ngay', 'không cần kế hoạch', 'luôn vay mượn'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
