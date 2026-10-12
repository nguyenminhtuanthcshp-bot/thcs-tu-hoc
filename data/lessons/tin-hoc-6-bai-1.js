/* Tin học 6 – Bài 1. Thông tin và dữ liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-1', {
  objectives: [
    'Phân biệt được thông tin và dữ liệu; nêu được ví dụ minh hoạ.',
    'Nêu được ví dụ về vật mang tin.',
    'Giải thích được vai trò của thông tin trong việc ra quyết định.'
  ],
  intro: 'Mỗi sáng, em nghe bản tin thời tiết rồi quyết định có mang áo mưa hay không. Những con số nhiệt độ, độ ẩm em nghe được là gì, và chúng giúp em quyết định ra sao? Bài học này giúp em hiểu hai khái niệm nền tảng của Tin học: <b>dữ liệu</b> và <b>thông tin</b>.',
  steps: [
    { title: 'Thông tin là gì?', html: `<p><b>Thông tin</b> là những gì đem lại hiểu biết cho con người về thế giới xung quanh và về chính bản thân mình.</p>
      <p>Ví dụ: nghe tiếng trống trường, em biết đã hết giờ ra chơi; nhìn đèn tín hiệu chuyển đỏ, em biết phải dừng lại.</p>
      <div class="box key">Thông tin giúp con người hiểu biết thêm và là căn cứ để <b>ra quyết định</b>.</div>` },
    { title: 'Dữ liệu là gì?', html: `<p><b>Dữ liệu</b> là những gì được ghi lại hoặc thu nhận được: con số, chữ viết, hình ảnh, âm thanh, kí hiệu…</p>
      <p>Dữ liệu được xử lí (đọc, so sánh, tính toán, suy luận…) để trở thành thông tin có ích. Cùng một dữ liệu, người có hiểu biết khác nhau có thể rút ra thông tin khác nhau.</p>`,
      svg: S.dataInfo(), caption: 'Từ dữ liệu (số đo, chữ, ảnh vệ tinh) đến thông tin “chiều nay có mưa rào”.' },
    { title: 'Vật mang tin', html: `<p><b>Vật mang tin</b> là phương tiện dùng để lưu trữ và truyền dữ liệu.</p>
      <ul><li>Vật mang tin truyền thống: giấy, sách vở, tấm bia đá, băng cát-xét…</li><li>Vật mang tin hiện đại: thẻ nhớ, ổ đĩa USB, đĩa cứng, đĩa quang…</li></ul>`,
      svg: S.mindmap({ center: 'Vật mang tin', branches: [{ title: 'Giấy, sách, vở', items: [] }, { title: 'Thẻ nhớ, USB', items: [] }, { title: 'Bia đá, bảng tin', items: [] }, { title: 'Đĩa cứng, đĩa quang', items: [] }], w: 600, size: 14 }), caption: 'Một số vật mang tin truyền thống và hiện đại.' },
    { title: 'Tầm quan trọng của thông tin', html: `<p>Thông tin đem lại hiểu biết, giúp con người <b>ra quyết định đúng đắn</b> và có những lựa chọn tốt. Ví dụ: xem bảng điểm, em biết môn nào cần ôn thêm; đọc biển báo, người lái xe biết đường cấm.</p>
      <p>Thông tin chỉ có ích khi đúng, đầy đủ và kịp thời. Thông tin sai có thể dẫn tới quyết định sai.</p>` }
  ],
  summary: 'Thông tin đem lại hiểu biết cho con người. Dữ liệu là những gì được ghi lại (số, chữ, hình ảnh, âm thanh…) và được xử lí để có thông tin. Vật mang tin là phương tiện lưu trữ, truyền dữ liệu. Thông tin giúp con người ra quyết định.',
  examples: [
    { title: 'Phân biệt', problem: 'Trên bảng tin có dòng chữ “Thứ Hai: chào cờ lúc 7 giờ”. Đâu là dữ liệu, đâu là thông tin?', solution: 'Dòng chữ viết trên bảng là dữ liệu. Hiểu biết em có được – “thứ Hai cần có mặt trước 7 giờ để chào cờ” – là thông tin.' },
    { title: 'Ra quyết định', problem: 'Bạn Hà thấy trời nhiều mây đen và nghe dự báo có mưa. Hà quyết định mang áo mưa. Hãy chỉ ra thông tin và quyết định.', solution: 'Thông tin: trời sắp mưa. Quyết định: mang áo mưa khi đi học.' },
    { title: 'Vật mang tin', problem: 'Kể tên vật mang tin trong các trường hợp: (a) ghi chép bài học; (b) lưu ảnh chụp bằng điện thoại.', solution: '(a) Quyển vở; (b) thẻ nhớ hoặc bộ nhớ trong của điện thoại.' }
  ],
  exercises: [
    { question: 'Cho ví dụ về một tình huống trong đó thông tin giúp em ra quyết định.', hints: ['Nghĩ về một việc hằng ngày như đi học, ăn uống, chơi thể thao.', 'Chỉ rõ: em nhận được thông tin gì và quyết định làm gì.'], solution: 'Ví dụ: nhìn đồng hồ thấy đã 6 giờ 30 (thông tin: sắp muộn học) nên em quyết định đi ngay. Học sinh có thể nêu ví dụ khác hợp lí.' },
    { question: 'Vì sao cùng một dữ liệu, hai người có thể rút ra thông tin khác nhau?', hints: ['Thông tin phụ thuộc vào cách hiểu của người nhận.', 'So sánh một người biết tiếng Anh và một người không biết khi đọc một biển báo tiếng Anh.'], solution: 'Vì thông tin là hiểu biết mà mỗi người rút ra khi xử lí dữ liệu; hiểu biết, kinh nghiệm khác nhau thì thông tin thu được có thể khác nhau.' },
    { question: 'Lớp có 40 học sinh, 28 bạn chọn đi tham quan bảo tàng. Lớp trưởng nói: “Đa số chọn bảo tàng”. Đâu là dữ liệu, đâu là thông tin? Tỉ lệ chọn bảo tàng là bao nhiêu phần trăm?', hints: ['Các con số 40 và 28 là dữ liệu.', 'Tỉ lệ = 28 : 40 × 100%.'], solution: 'Dữ liệu: các con số 40 và 28. Thông tin: đa số bạn chọn bảo tàng. Tỉ lệ: 28 : 40 = 70%.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thông tin đem lại hiểu biết cho con người.', answer: true, explain: 'Đó chính là khái niệm thông tin.' },
    { type: 'mcq', q: 'Đâu là vật mang tin?', options: ['Âm thanh tiếng trống', 'Thẻ nhớ', 'Ý nghĩ trong đầu', 'Quyết định đi học'], answer: 1, explain: 'Thẻ nhớ là phương tiện lưu trữ dữ liệu.' },
    { type: 'mcq', q: 'Trong bản tin “Nhiệt độ Hà Nội hôm nay 35 °C”, con số 35 là:', options: ['dữ liệu', 'quyết định', 'vật mang tin', 'thiết bị'], answer: 0, explain: 'Con số được ghi lại là dữ liệu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi thông tin đều có ích, kể cả thông tin sai.', answer: false, explain: 'Thông tin sai có thể dẫn tới quyết định sai.' },
    { type: 'short', q: 'Một quyển sổ có 50 trang, em đã viết 15 trang. Còn bao nhiêu trang trống?', answer: '35', unit: 'trang', calc: '50-15', explain: '50 − 15 = 35.' },
    { type: 'mcq', q: 'Thông tin giúp con người:', options: ['chỉ để giải trí', 'ra quyết định', 'không cần suy nghĩ', 'thay thế dữ liệu'], answer: 1, explain: 'Thông tin là căn cứ để ra quyết định.' },
    { type: 'short', q: 'Lớp có 40 học sinh, 30 bạn biết bơi. Tỉ lệ học sinh biết bơi là bao nhiêu phần trăm?', answer: '75', unit: '%', calc: '30/40*100', explain: '30 : 40 = 75%.' },
    { type: 'mcq', q: 'Ví dụ nào là vật mang tin truyền thống?', options: ['Ổ đĩa USB', 'Đĩa cứng', 'Tấm bia đá', 'Thẻ nhớ'], answer: 2, explain: 'Bia đá khắc chữ là vật mang tin truyền thống.' }
  ]
});
})();
