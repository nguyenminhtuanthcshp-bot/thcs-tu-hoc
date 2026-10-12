/* GDCD 8 – Bài 9. Phòng ngừa tai nạn vũ khí, cháy, nổ và các chất độc hại. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-9', {
  objectives: [
    'Nêu được một số quy định của pháp luật về phòng ngừa tai nạn vũ khí, cháy, nổ và chất độc hại.',
    'Nhận biết được nguy cơ và hậu quả của tai nạn vũ khí, cháy, nổ, chất độc hại.',
    'Thực hiện được việc phòng ngừa và ứng phó an toàn phù hợp lứa tuổi.',
    'Nhắc nhở, tuyên truyền người thân thực hiện; phê phán hành vi vi phạm.'
  ],
  intro: 'Gần Tết, vài bạn lớp 8 rủ nhau mua thuốc pháo trên mạng về tự chế pháo. Bạn Hưng từ chối và kể lại vụ một học sinh ở tỉnh khác bị thương nặng ở tay vì pháo tự chế phát nổ. <b>Tai nạn vũ khí, cháy, nổ</b> có thể để lại hậu quả suốt đời.',
  steps: [
    { title: 'Nguy cơ và hậu quả', html: `<ul><li><b>Vũ khí, vật liệu nổ</b>: súng tự chế, pháo nổ, bom mìn còn sót lại sau chiến tranh.</li><li><b>Cháy</b>: chập điện, đun nấu, thắp hương, sạc pin qua đêm, hút thuốc.</li><li><b>Chất độc hại</b>: thuốc trừ sâu, hoá chất tẩy rửa, khí ga, thực phẩm nhiễm độc.</li></ul><p>Hậu quả: thương tích, tử vong, mất tài sản, ô nhiễm môi trường.</p>` },
    { title: 'Quy định của pháp luật', html: `<p>Một số văn bản hiện hành:</p>`,
      svg: S.table({ title: 'Một số luật liên quan', head: ['Luật', 'Hiệu lực'], rows: [['Vũ khí, vật liệu nổ… (42/2024/QH15)', '1/1/2025'], ['PCCC và CNCH (55/2024/QH15)', '1/7/2025'], ['Luật Hoá chất (69/2025/QH15)', '1/1/2026']], colW: 250 }), caption: 'PCCC và CNCH: Phòng cháy, chữa cháy và cứu nạn, cứu hộ.' },
    { title: 'Những điều cấm và cần làm', html: `<ul><li><b>Cấm</b>: chế tạo, tàng trữ, mua bán, sử dụng trái phép vũ khí, vật liệu nổ, pháo nổ; sử dụng trái phép chất độc hại; cố ý gây cháy, nổ.</li><li><b>Cần làm</b>: thấy vật lạ nghi bom mìn thì không chạm vào, báo công an; ngắt điện khi ra khỏi nhà; cất hoá chất xa tầm tay trẻ nhỏ, có nhãn rõ ràng.</li></ul>` },
    { title: 'Ứng phó khi có cháy', html: `<p>Bình tĩnh, ưu tiên thoát nạn:</p>`,
      svg: S.flowchart({ title: 'Khi phát hiện cháy', steps: [{ t: 'start', s: 'Phát hiện cháy' }, { t: 'proc', s: 'Hô hoán, gọi 114' }, { t: 'if', s: 'Đám cháy nhỏ?', yes: 'Ngắt điện, dập lửa', no: 'Cúi thấp, thoát ra' }, { t: 'end', s: 'Ra nơi an toàn' }] }), caption: 'Đám cháy nhỏ: ngắt điện, dùng bình chữa cháy; khói nhiều: che mũi bằng khăn ướt. Không dùng thang máy; không quay lại lấy đồ.' }
  ],
  summary: 'Vũ khí, vật liệu nổ, cháy và chất độc hại gây thương tích, tử vong, thiệt hại tài sản. Pháp luật (Luật Quản lý, sử dụng vũ khí, vật liệu nổ và công cụ hỗ trợ 2024; Luật Phòng cháy, chữa cháy và cứu nạn, cứu hộ 2024; Luật Hoá chất 2025) nghiêm cấm chế tạo, tàng trữ, sử dụng trái phép. Học sinh không chơi pháo, không chạm vật lạ, dùng điện an toàn; khi cháy gọi 114 và thoát nạn đúng cách.',
  examples: [
    { title: 'Tình huống của Hưng', problem: 'Các bạn rủ Hưng tự chế pháo. Hưng nên làm gì?', solution: 'Từ chối, giải thích nguy hiểm và vi phạm pháp luật; báo thầy cô, bố mẹ để ngăn các bạn.' },
    { title: 'Số khẩn cấp', problem: 'Gọi số nào khi có cháy?', solution: '114.' },
    { title: 'Tính thời gian', problem: 'Một khu nhà cần 3 phút để thoát nạn. Nếu chậm 2 phút do tìm đồ đạc, tổng thời gian là bao nhiêu?', solution: '5 phút; vì vậy không quay lại lấy đồ.' }
  ],
  exercises: [
    { question: 'Phát hiện một vật bằng kim loại hình quả dứa khi đào đất ở vườn. Em làm gì?', hints: ['Có thể là bom mìn.', 'Ai có trách nhiệm xử lí?'], solution: 'Không chạm, không di chuyển; đánh dấu, tránh xa, báo người lớn và công an xã.' },
    { question: 'Bình chữa cháy được kiểm tra 6 tháng/lần. Trong 3 năm cần kiểm tra mấy lần?', hints: ['3 năm = 36 tháng.', '36 : 6.'], solution: '6 lần.' },
    { question: 'Kể ba việc phòng cháy trong gia đình.', hints: ['Điện.', 'Bếp, hương.'], solution: 'Không sạc điện thoại qua đêm cạnh vật dễ cháy; tắt bếp ga, khoá van khi nấu xong; thắp hương xa rèm, vật dễ cháy.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Học sinh không được tàng trữ, sử dụng pháo nổ.', answer: true, explain: 'Bị pháp luật nghiêm cấm.' },
    { type: 'short', q: 'Số điện thoại báo cháy, cứu nạn cứu hộ là số mấy?', answer: '114', calc: '114', explain: '114.' },
    { type: 'mcq', q: 'Khi thấy vật lạ nghi là bom mìn, em nên:', options: ['Tránh xa, báo công an', 'Mang về chơi', 'Đập thử', 'Bán phế liệu'], answer: 0, explain: 'An toàn.' },
    { type: 'mcq', q: 'Luật Phòng cháy, chữa cháy và cứu nạn, cứu hộ hiện hành có hiệu lực từ:', options: ['1/7/2025', '1/1/2001', '1/7/2014', '1/1/2020'], answer: 0, explain: 'Luật số 55/2024/QH15.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi cháy nhà cao tầng nên đi thang máy cho nhanh.', answer: false, explain: 'Dùng thang bộ.' },
    { type: 'short', q: 'Kiểm tra bình chữa cháy 6 tháng/lần. Trong 3 năm bao nhiêu lần?', answer: '6', unit: 'lần', calc: '36/6', explain: '6.' },
    { type: 'mcq', q: 'Cách thoát khỏi đám cháy có nhiều khói:', options: ['Che mũi bằng khăn ướt, cúi thấp', 'Đứng thẳng chạy', 'Trốn vào tủ', 'Mở toang cửa phòng đang cháy'], answer: 0, explain: 'Khói bốc lên cao.' },
    { type: 'mcq', q: 'Cách cất giữ hoá chất an toàn:', options: ['Để xa tầm tay trẻ, có nhãn rõ', 'Đổ vào chai nước uống', 'Để cạnh thực phẩm', 'Để gần bếp'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
