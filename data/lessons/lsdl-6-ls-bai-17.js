/* LS&ĐL 6 – Lịch sử, Bài 17. Cuộc đấu tranh bảo tồn và phát triển văn hoá dân tộc của người Việt. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-17', {
  objectives: [
    'Giải thích được nguyên nhân vì sao người Việt vẫn giữ được văn hoá dân tộc dù bị đô hộ lâu dài.',
    'Nêu được những nét văn hoá truyền thống được bảo tồn.',
    'Trình bày được sự tiếp thu có chọn lọc văn hoá Trung Hoa.',
    'Có ý thức giữ gìn bản sắc văn hoá dân tộc.'
  ],
  intro: 'Sau hơn một nghìn năm Bắc thuộc, người Việt vẫn nói tiếng Việt, vẫn ăn trầu, vẫn thờ cúng tổ tiên. Đó là kết quả của một cuộc <b>đấu tranh văn hoá</b> bền bỉ, thầm lặng.',
  steps: [
    { title: 'Những giá trị được giữ gìn', html: `<p>Người Việt kiên trì bảo tồn:</p>`,
      svg: S.mindmap({ center: 'Bản sắc Việt', branches: [{ title: 'Tiếng nói', items: ['Tiếng Việt', 'Dù học chữ Hán'] }, { title: 'Tín ngưỡng', items: ['Thờ cúng tổ tiên', 'Thờ Hùng Vương, Thánh Gióng'] }, { title: 'Phong tục', items: ['Ăn trầu, nhuộm răng', 'Làm bánh chưng'] }, { title: 'Làng xã', items: ['Nền tảng cộng đồng', 'Lễ hội, hương ước'] }], w: 640, size: 13 }), caption: 'Làng xã là “pháo đài” giữ gìn văn hoá.' },
    { title: 'Tiếp thu có chọn lọc', html: `<ul><li>Tiếp nhận chữ Hán nhưng đọc theo cách Việt (âm Hán – Việt).</li><li>Tiếp thu kĩ thuật làm giấy, đồ gốm; Phật giáo, Nho giáo nhưng hoà với tín ngưỡng bản địa.</li></ul>` },
    { title: 'Vì sao giữ được?', html: `<p>Chuỗi lí do:</p>`,
      svg: S.flowchart({ title: 'Nguyên nhân giữ được bản sắc', steps: [{ t: 'start', s: 'Văn hoá gốc vững' }, { t: 'proc', s: 'Làng xã gắn kết' }, { t: 'proc', s: 'Ý chí độc lập' }, { t: 'end', s: 'Đồng hoá thất bại' }] }), caption: 'Nền văn hoá đã định hình từ thời Văn Lang – Âu Lạc.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Giữ được tiếng nói là giữ được hồn dân tộc.</div>` }
  ],
  summary: 'Thời Bắc thuộc, người Việt giữ gìn tiếng nói, tín ngưỡng thờ cúng tổ tiên, phong tục ăn trầu, nhuộm răng, làm bánh chưng… Làng xã là nơi bảo tồn văn hoá. Người Việt tiếp thu có chọn lọc chữ Hán (đọc theo âm Hán – Việt), kĩ thuật, tôn giáo; nhờ nền văn hoá bền vững và ý chí độc lập, chính sách đồng hoá thất bại.',
  examples: [
    { title: 'Âm Hán – Việt', problem: 'Cho ví dụ từ Hán – Việt.', solution: '“Quốc gia”, “học sinh”, “giang sơn”.' },
    { title: 'Vai trò làng xã', problem: 'Vì sao làng xã giúp giữ văn hoá?', solution: 'Cộng đồng gắn bó, duy trì lễ hội, phong tục, tiếng nói, ít chịu tác động trực tiếp của chính quyền đô hộ.' },
    { title: 'Tính thời gian', problem: 'Từ khởi nghĩa Hai Bà Trưng (năm 40) đến chiến thắng Bạch Đằng (938) là bao nhiêu năm?', solution: '938 − 40 = 898 năm – gần 9 thế kỉ người Việt bền bỉ giữ gìn bản sắc và đấu tranh.' }
  ],
  exercises: [
    { question: 'Kể ba phong tục người Việt giữ được thời Bắc thuộc.', hints: ['Liên quan miệng, răng.', 'Ngày Tết.'], solution: 'Ăn trầu, nhuộm răng, làm bánh chưng (thờ cúng tổ tiên).' },
    { question: 'Vì sao người Việt học chữ Hán nhưng vẫn nói tiếng Việt?', hints: ['Chữ khác tiếng nói.', 'Đọc theo cách Việt.'], solution: 'Chữ Hán chỉ là chữ viết, được đọc theo âm Hán – Việt; tiếng nói hằng ngày vẫn là tiếng Việt.' },
    { question: 'Một làng có 240 người, 3/4 tham gia lễ hội. Bao nhiêu người tham gia?', hints: ['240 × 3/4.', '240 : 4 × 3.'], solution: '180 người.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thời Bắc thuộc, người Việt vẫn giữ được tiếng nói của mình.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Đơn vị cơ sở bảo tồn văn hoá Việt:', options: ['Làng xã', 'Quận huyện', 'Thành thị', 'Châu'], answer: 0, explain: 'Làng xã.' },
    { type: 'short', q: '240 người, 3/4 tham gia lễ hội. Số người tham gia?', answer: '180', unit: 'người', calc: '240*3/4', explain: '180.' },
    { type: 'mcq', q: 'Người Việt đọc chữ Hán theo:', options: ['Âm Hán – Việt', 'Âm Bắc Kinh', 'Âm Phạn', 'Âm La-tinh'], answer: 0, explain: 'Hán – Việt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người Việt từ bỏ tục thờ cúng tổ tiên thời Bắc thuộc.', answer: false, explain: 'Vẫn giữ.' },
    { type: 'short', q: 'Từ năm 40 đến năm 938 là bao nhiêu năm?', answer: '898', unit: 'năm', calc: '938-40', explain: '898.' },
    { type: 'mcq', q: 'Phong tục được giữ gìn:', options: ['Ăn trầu', 'Bó chân', 'Đội mũ quan', 'Để tóc đuôi sam'], answer: 0, explain: 'Ăn trầu.' },
    { type: 'mcq', q: 'Kĩ thuật tiếp thu từ phương Bắc:', options: ['Làm giấy', 'Đúc trống đồng', 'Trồng lúa nước', 'Làm nhà sàn'], answer: 0, explain: 'Làm giấy.' }
  ]
});
})();
