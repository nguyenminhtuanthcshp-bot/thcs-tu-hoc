/* LS&ĐL 6 – Lịch sử, Bài 13. Giao lưu văn hoá ở Đông Nam Á từ đầu Công nguyên đến thế kỉ X. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-13', {
  objectives: [
    'Phân tích được những tác động chính của quá trình giao lưu văn hoá ở Đông Nam Á từ đầu Công nguyên đến thế kỉ X.',
    'Nêu được ảnh hưởng của văn hoá Ấn Độ và Trung Quốc tới Đông Nam Á.',
    'Kể tên một số công trình kiến trúc tiêu biểu.',
    'Hiểu cư dân Đông Nam Á tiếp thu có chọn lọc, sáng tạo.'
  ],
  intro: 'Đền Bô-rô-bu-đua (In-đô-nê-xi-a) và khu đền tháp Mỹ Sơn (Quảng Nam) đều mang dáng dấp kiến trúc Ấn Độ nhưng lại có nét riêng không lẫn được. Đó là kết quả của quá trình <b>giao lưu văn hoá</b> kéo dài nhiều thế kỉ.',
  steps: [
    { title: 'Con đường giao lưu', html: `<p>Thương nhân, tăng lữ Ấn Độ và Trung Quốc theo đường biển đến Đông Nam Á, mang theo tôn giáo, chữ viết, nghệ thuật.</p>` },
    { title: 'Tác động của văn hoá Ấn Độ', html: `<p>Ảnh hưởng nổi bật:</p>`,
      svg: S.table({ title: 'Ảnh hưởng văn hoá Ấn Độ', head: ['Lĩnh vực', 'Biểu hiện ở Đông Nam Á'], rows: [['Tôn giáo', 'Hin-đu giáo, Phật giáo'], ['Chữ viết', 'Chữ Chăm cổ, Khơ-me cổ từ chữ Phạn'], ['Văn học', 'Phỏng theo Ra-ma-ya-na'], ['Kiến trúc', 'Bô-rô-bu-đua, Mỹ Sơn']], colW: 250 }), caption: 'Cư dân tạo chữ viết riêng từ chữ Phạn.' },
    { title: 'Tác động của văn hoá Trung Quốc', html: `<ul><li>Ảnh hưởng rõ ở Việt Nam (vùng Bắc Bộ, Bắc Trung Bộ): chữ Hán, Nho giáo, Đạo giáo, Phật giáo Bắc tông.</li><li>Kĩ thuật canh tác, làm giấy, đồ gốm…</li></ul>` },
    { title: 'Tiếp thu có chọn lọc', html: `<p>Cư dân Đông Nam Á không tiếp nhận nguyên xi mà kết hợp với văn hoá bản địa (thờ thần núi, thần sông, tín ngưỡng nông nghiệp) tạo nên bản sắc riêng.</p>
      <div class="box key">Giao lưu → làm phong phú văn hoá; bản sắc riêng vẫn được giữ gìn.</div>` }
  ],
  summary: 'Từ đầu Công nguyên đến thế kỉ X, văn hoá Ấn Độ (Hin-đu giáo, Phật giáo, chữ Phạn, sử thi, kiến trúc đền tháp) và Trung Quốc (chữ Hán, Nho giáo, Đạo giáo) lan toả đến Đông Nam Á qua thương nhân, tăng lữ. Cư dân tiếp thu có chọn lọc, sáng tạo chữ viết riêng, xây dựng Bô-rô-bu-đua, Mỹ Sơn…',
  examples: [
    { title: 'Chữ viết', problem: 'Chữ Chăm cổ bắt nguồn từ đâu?', solution: 'Từ chữ Phạn của Ấn Độ.' },
    { title: 'Tính thời gian', problem: 'Đền Bô-rô-bu-đua xây khoảng thế kỉ VIII – IX. Đến năm 2026, công trình có khoảng bao nhiêu thế kỉ tuổi (tính từ năm 800)?', solution: '2026 − 800 = 1 226 năm ≈ 12 thế kỉ.' },
    { title: 'Phân tích', problem: 'Vì sao nói giao lưu văn hoá có chọn lọc?', solution: 'Cư dân kết hợp yếu tố ngoại lai với tín ngưỡng bản địa, tạo ra phong cách riêng.' }
  ],
  exercises: [
    { question: 'Kể tên hai tôn giáo từ Ấn Độ truyền vào Đông Nam Á.', hints: ['Thờ thần Si-va…', 'Đức Phật.'], solution: 'Hin-đu giáo, Phật giáo.' },
    { question: 'Từ năm 800 đến năm 2026 là bao nhiêu năm?', hints: ['Lấy năm sau trừ năm trước.', '2026 − 800.'], solution: '1 226 năm.' },
    { question: 'Khu đền tháp Mỹ Sơn thuộc tỉnh/thành nào?', hints: ['Miền Trung.', 'Gần Hội An.'], solution: 'Quảng Nam (nay thuộc thành phố Đà Nẵng sau sắp xếp năm 2025).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phật giáo được truyền từ Ấn Độ vào Đông Nam Á.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Công trình Phật giáo nổi tiếng ở In-đô-nê-xi-a:', options: ['Bô-rô-bu-đua', 'Ăng-co Vát', 'Mỹ Sơn', 'Văn Miếu'], answer: 0, explain: 'Bô-rô-bu-đua.' },
    { type: 'short', q: 'Từ năm 800 đến năm 2026 là bao nhiêu năm?', answer: '1226', answerText: '1 226', unit: 'năm', calc: '2026-800', explain: '1 226.' },
    { type: 'mcq', q: 'Chữ Chăm cổ được sáng tạo trên cơ sở:', options: ['Chữ Phạn', 'Chữ Hán', 'Chữ La-tinh', 'Chữ hình nêm'], answer: 0, explain: 'Chữ Phạn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cư dân Đông Nam Á tiếp nhận nguyên xi văn hoá bên ngoài.', answer: false, explain: 'Có chọn lọc, sáng tạo.' },
    { type: 'short', q: 'Một công trình xây xong năm 825. Đến năm 2025 là bao nhiêu năm?', answer: '1200', answerText: '1 200', unit: 'năm', calc: '2025-825', explain: '1 200.' },
    { type: 'mcq', q: 'Văn hoá Trung Quốc ảnh hưởng rõ nhất tới:', options: ['Việt Nam', 'In-đô-nê-xi-a', 'Mi-an-ma', 'Thái Lan'], answer: 0, explain: 'Việt Nam.' },
    { type: 'mcq', q: 'Con đường chủ yếu đưa văn hoá Ấn Độ đến Đông Nam Á:', options: ['Thương mại đường biển', 'Chiến tranh xâm lược', 'Di cư đường bộ qua sa mạc', 'Hàng không'], answer: 0, explain: 'Thương mại.' }
  ]
});
})();
