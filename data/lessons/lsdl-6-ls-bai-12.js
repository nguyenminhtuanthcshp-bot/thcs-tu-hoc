/* LS&ĐL 6 – Lịch sử, Bài 12. Sự hình thành và bước đầu phát triển của các vương quốc phong kiến ở Đông Nam Á (TK VII – TK X). Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-12', {
  objectives: [
    'Trình bày được quá trình xuất hiện các vương quốc phong kiến ở Đông Nam Á từ thế kỉ VII đến thế kỉ X.',
    'Kể tên được một số vương quốc tiêu biểu.',
    'Phân tích được tác động của quá trình giao lưu thương mại ở các vương quốc phong kiến Đông Nam Á.',
    'Nêu được vai trò của biển đối với các vương quốc.'
  ],
  intro: 'Ở eo biển Ma-lắc-ca, hằng năm hàng nghìn chiếc thuyền buôn phải đi qua. Vương quốc nào kiểm soát được eo biển này sẽ trở nên giàu mạnh. Đó chính là câu chuyện của <b>Sri Vi-giay-a</b> và nhiều vương quốc phong kiến Đông Nam Á từ thế kỉ VII.',
  steps: [
    { title: 'Sự hình thành các vương quốc', html: `<p>Từ thế kỉ VII, các quốc gia sơ kì phát triển, sáp nhập thành những vương quốc lớn hơn:</p>`,
      svg: S.table({ title: 'Một số vương quốc phong kiến (TK VII – X)', head: ['Vương quốc', 'Khu vực ngày nay'], rows: [['Chân Lạp', 'Cam-pu-chia'], ['Chăm-pa', 'Trung Bộ Việt Nam'], ['Sri Vi-giay-a', 'Xu-ma-tơ-ra (In-đô-nê-xi-a)'], ['Ma-ta-ram', 'Gia-va (In-đô-nê-xi-a)'], ['Đva-ra-va-ti', 'Thái Lan']], colW: 250 }), caption: 'TK: thế kỉ.' },
    { title: 'Bước đầu phát triển', html: `<ul><li>Vương quyền được củng cố, gắn với tôn giáo (Hin-đu giáo, Phật giáo).</li><li>Nông nghiệp lúa nước là nền tảng ở vùng lục địa.</li><li>Ở hải đảo, thương mại biển giữ vai trò chủ đạo.</li></ul>` },
    { title: 'Giao lưu thương mại', html: `<p>Thương mại biển mang lại:</p>`,
      svg: S.mindmap({ center: 'Thương mại biển', branches: [{ title: 'Kinh tế', items: ['Thương cảng sầm uất', 'Nguồn thu lớn'] }, { title: 'Văn hoá', items: ['Tôn giáo lan toả', 'Chữ viết, kiến trúc'] }, { title: 'Chính trị', items: ['Vương quốc giàu mạnh', 'Kiểm soát eo biển'] }, { title: 'Hàng hoá', items: ['Gia vị, trầm hương', 'Vàng, ngà voi'] }], w: 640, size: 13 }), caption: 'Sri Vi-giay-a kiểm soát eo biển Ma-lắc-ca.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Thế kỉ VII – X: các vương quốc phong kiến hình thành; biển là “cửa ngõ” làm giàu và tiếp nhận văn hoá.</div>` }
  ],
  summary: 'Từ thế kỉ VII đến thế kỉ X, ở Đông Nam Á hình thành các vương quốc phong kiến như Chân Lạp, Chăm-pa, Sri Vi-giay-a, Ma-ta-ram, Đva-ra-va-ti. Vương quyền gắn với tôn giáo; nông nghiệp lúa nước và thương mại biển phát triển. Giao lưu thương mại làm các vương quốc giàu mạnh và thúc đẩy giao lưu văn hoá.',
  examples: [
    { title: 'Nhận diện', problem: 'Vương quốc nào kiểm soát eo biển Ma-lắc-ca?', solution: 'Sri Vi-giay-a.' },
    { title: 'Tính thời gian', problem: 'Từ thế kỉ VII đến hết thế kỉ X là bao nhiêu năm?', solution: '4 thế kỉ = 400 năm.' },
    { title: 'Phân tích', problem: 'Thương mại biển tác động đến văn hoá thế nào?', solution: 'Thương nhân mang theo tôn giáo, chữ viết, kiến trúc từ Ấn Độ, Trung Quốc.' }
  ],
  exercises: [
    { question: 'Kể tên vương quốc phong kiến trên lãnh thổ Cam-pu-chia ngày nay (TK VII).', hints: ['Tên bắt đầu “Chân…”.', 'Kế tục Phù Nam.'], solution: 'Chân Lạp.' },
    { question: 'Từ đầu thế kỉ VII đến hết thế kỉ X là bao nhiêu năm?', hints: ['Mấy thế kỉ?', '4 × 100.'], solution: '400 năm.' },
    { question: 'Nêu hai mặt hàng xuất khẩu của Đông Nam Á thời này.', hints: ['Hương liệu.', 'Quý kim.'], solution: 'Gia vị, trầm hương, vàng, ngà voi…' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sri Vi-giay-a là vương quốc hùng mạnh trên đảo Xu-ma-tơ-ra.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Vương quốc phong kiến ở Trung Bộ Việt Nam:', options: ['Chăm-pa', 'Chân Lạp', 'Ma-ta-ram', 'Đva-ra-va-ti'], answer: 0, explain: 'Chăm-pa.' },
    { type: 'short', q: 'Từ đầu thế kỉ VII đến hết thế kỉ X là bao nhiêu năm?', answer: '400', unit: 'năm', calc: '(10-7+1)*100', explain: '400.' },
    { type: 'mcq', q: 'Eo biển quan trọng nhất Đông Nam Á:', options: ['Ma-lắc-ca', 'Gi-bran-ta', 'Bê-rinh', 'Hoóc-mút'], answer: 0, explain: 'Ma-lắc-ca.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các vương quốc phong kiến Đông Nam Á không có quan hệ buôn bán với bên ngoài.', answer: false, explain: 'Buôn bán rất phát triển.' },
    { type: 'short', q: 'Một thuyền buôn chở 120 tấn hàng, bán được 3/4. Còn lại bao nhiêu tấn?', answer: '30', unit: 'tấn', calc: '120-120*3/4', explain: '30.' },
    { type: 'mcq', q: 'Vương quốc trên lãnh thổ Thái Lan ngày nay:', options: ['Đva-ra-va-ti', 'Chăm-pa', 'Sri Vi-giay-a', 'Phù Nam'], answer: 0, explain: 'Đva-ra-va-ti.' },
    { type: 'mcq', q: 'Tôn giáo gắn với vương quyền ở các vương quốc:', options: ['Hin-đu giáo, Phật giáo', 'Hồi giáo', 'Thiên Chúa giáo', 'Đạo giáo'], answer: 0, explain: 'Hin-đu, Phật.' }
  ]
});
})();
