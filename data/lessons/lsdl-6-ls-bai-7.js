/* LS&ĐL 6 – Lịch sử, Bài 7. Ai Cập và Lưỡng Hà cổ đại. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-7', {
  objectives: [
    'Nêu được tác động của điều kiện tự nhiên (sông ngòi) đối với sự hình thành nền văn minh Ai Cập và Lưỡng Hà.',
    'Trình bày được quá trình thành lập nhà nước của người Ai Cập và Lưỡng Hà.',
    'Nêu được những thành tựu chủ yếu về văn hoá ở Ai Cập và Lưỡng Hà.',
    'Trân trọng di sản văn hoá của nhân loại.'
  ],
  intro: 'Mỗi năm, sông Nin dâng nước, phủ lên hai bờ một lớp phù sa màu mỡ. Người Ai Cập cổ nói: “Ai Cập là tặng phẩm của sông Nin”. Cũng như vậy, vùng đất giữa hai con sông Ti-grơ và Ơ-phrát đã nuôi dưỡng nền <b>văn minh Lưỡng Hà</b>.',
  steps: [
    { title: 'Điều kiện tự nhiên', html: `<p>Cả hai nền văn minh đều hình thành bên những dòng sông lớn:</p>`,
      svg: S.sketchMap({ title: 'Ai Cập và Lưỡng Hà cổ đại', areas: [{ pts: [[60, 120], [250, 120], [260, 290], [50, 290]], fill: '#fde68a', label: 'AI CẬP', lx: 120, ly: 250 }, { pts: [[330, 40], [560, 50], [560, 200], [420, 230], [340, 150]], fill: '#bbf7d0', label: 'LƯỠNG HÀ', lx: 470, ly: 150 }, { pts: [[40, 40], [300, 30], [290, 110], [40, 110]], fill: '#bae6fd', label: 'Địa Trung Hải', lx: 160, ly: 70 }], lines: [{ pts: [[170, 290], [175, 230], [160, 170], [168, 120]], label: 'S. Nin', lp: [172, 200] }, { pts: [[380, 60], [420, 120], [470, 190], [520, 215]], label: 'S. Ơ-phrát', lp: [395, 100] }, { pts: [[450, 55], [490, 110], [520, 170], [530, 210]], label: 'S. Ti-grơ', lp: [495, 85] }], note: 'Lược đồ giản lược, không theo tỉ lệ.' }), caption: 'Đất phù sa màu mỡ, mềm, dễ canh tác bằng công cụ thô sơ.' },
    { title: 'Sự hình thành nhà nước', html: `<ul><li><b>Ai Cập</b>: các công xã liên kết thành các tiểu quốc; khoảng <b>năm 3200 TCN</b>, vua Mê-nét thống nhất Ai Cập. Đứng đầu là <b>Pha-ra-ông</b> có quyền lực tối cao.</li><li><b>Lưỡng Hà</b>: khoảng cuối thiên niên kỉ IV TCN, người Xu-me lập nhiều nhà nước thành bang; đứng đầu là En-xi. Sau đó vương quốc Ba-bi-lon phát triển mạnh, nổi tiếng với vua Ham-mu-ra-bi.</li></ul>` },
    { title: 'Thành tựu văn hoá', html: `<p>So sánh:</p>`,
      svg: S.table({ title: 'Thành tựu tiêu biểu', head: ['Ai Cập', 'Lưỡng Hà'], rows: [['Chữ tượng hình, giấy pa-pi-rút', 'Chữ hình nêm trên đất sét'], ['Hệ đếm thập phân', 'Hệ đếm 60'], ['Kim tự tháp, tượng Nhân sư', 'Thành Ba-bi-lon, vườn treo'], ['Kĩ thuật ướp xác', 'Bộ luật Ham-mu-ra-bi']], colW: 250 }), caption: 'Nhiều thành tựu vẫn ảnh hưởng đến ngày nay (chia giờ thành 60 phút…).' },
    { title: 'Ý nghĩa', html: `<p>Ai Cập và Lưỡng Hà là những nền văn minh sớm nhất của loài người; để lại di sản to lớn về chữ viết, toán học, kiến trúc, luật pháp.</p>
      <div class="box key">Sông lớn → đất phù sa → nông nghiệp phát triển → nhà nước sớm ra đời.</div>` }
  ],
  summary: 'Ai Cập (bên sông Nin) và Lưỡng Hà (giữa sông Ti-grơ và Ơ-phrát) có đất phù sa màu mỡ, nông nghiệp phát triển sớm. Khoảng năm 3200 TCN, Mê-nét thống nhất Ai Cập, đứng đầu là Pha-ra-ông; ở Lưỡng Hà, người Xu-me lập các thành bang từ cuối thiên niên kỉ IV TCN. Thành tựu: chữ tượng hình, chữ hình nêm, hệ đếm 10 và 60, kim tự tháp, vườn treo Ba-bi-lon, bộ luật Ham-mu-ra-bi.',
  examples: [
    { title: 'Giải thích', problem: 'Vì sao nói “Ai Cập là tặng phẩm của sông Nin”?', solution: 'Sông Nin bồi đắp phù sa, cung cấp nước, tạo điều kiện cho nông nghiệp và nền văn minh phát triển.' },
    { title: 'Hệ đếm 60', problem: 'Ảnh hưởng của hệ đếm 60 còn thấy ở đâu ngày nay?', solution: '1 giờ = 60 phút, 1 phút = 60 giây; đường tròn 360°.' },
    { title: 'Tính thời gian', problem: 'Ai Cập được thống nhất khoảng năm 3200 TCN. Đến năm 1 CN là khoảng bao nhiêu thế kỉ?', solution: 'Khoảng 3 200 năm = 32 thế kỉ.' }
  ],
  exercises: [
    { question: 'Nêu hai điểm giống nhau về điều kiện hình thành của Ai Cập và Lưỡng Hà.', hints: ['Sông.', 'Đất.'], solution: 'Đều hình thành bên lưu vực sông lớn; đất phù sa màu mỡ, mềm, dễ canh tác.' },
    { question: '3 giờ bằng bao nhiêu phút? (áp dụng hệ đếm 60)', hints: ['1 giờ = 60 phút.', '3 × 60.'], solution: '180 phút.' },
    { question: 'Vì sao người Ai Cập giỏi hình học?', hints: ['Lũ sông Nin xoá ranh giới ruộng.', 'Xây kim tự tháp.'], solution: 'Phải đo đạc lại ruộng đất sau mỗi mùa lũ và tính toán khi xây kim tự tháp.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ai Cập cổ đại hình thành bên lưu vực sông Nin.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Người thống nhất Ai Cập khoảng năm 3200 TCN:', options: ['Mê-nét', 'Ham-mu-ra-bi', 'Tần Thuỷ Hoàng', 'A-sô-ka'], answer: 0, explain: 'Mê-nét.' },
    { type: 'mcq', q: 'Chữ viết của người Lưỡng Hà:', options: ['Chữ hình nêm', 'Chữ tượng hình trên giấy pa-pi-rút', 'Chữ Phạn', 'Chữ La-tinh'], answer: 0, explain: 'Hình nêm.' },
    { type: 'short', q: '3 giờ bằng bao nhiêu phút?', answer: '180', unit: 'phút', calc: '3*60', explain: '180.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kim tự tháp là công trình của người Lưỡng Hà.', answer: false, explain: 'Của người Ai Cập.' },
    { type: 'short', q: 'Khoảng 3 200 năm bằng bao nhiêu thế kỉ?', answer: '32', unit: 'thế kỉ', calc: '3200/100', explain: '32.' },
    { type: 'mcq', q: 'Bộ luật nổi tiếng của Lưỡng Hà:', options: ['Ham-mu-ra-bi', 'Hồng Đức', 'Gia Long', 'La Mã'], answer: 0, explain: 'Ham-mu-ra-bi.' },
    { type: 'mcq', q: 'Lưỡng Hà nằm giữa hai sông:', options: ['Ti-grơ và Ơ-phrát', 'Nin và Hằng', 'Hoàng Hà và Trường Giang', 'Ấn và Hằng'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
