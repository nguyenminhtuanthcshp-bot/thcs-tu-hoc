/* LS&ĐL 6 – Lịch sử, Bài 6. Sự chuyển biến và phân hoá của xã hội nguyên thuỷ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-6', {
  objectives: [
    'Trình bày được quá trình phát hiện ra kim loại và vai trò của kim loại đối với sự chuyển biến của xã hội nguyên thuỷ.',
    'Mô tả được sự hình thành xã hội có giai cấp.',
    'Giải thích được vì sao xã hội nguyên thuỷ tan rã.',
    'Nêu được một số nét cơ bản của xã hội nguyên thuỷ Việt Nam trong quá trình tan rã.'
  ],
  intro: 'Một nhóm người nguyên thuỷ đốt lửa trên nền đất có quặng. Khi lửa tắt, họ thấy những giọt kim loại óng ánh đông cứng lại. Từ những phát hiện tình cờ như thế, con người bước vào <b>thời đại kim khí</b>, và xã hội bắt đầu thay đổi sâu sắc.',
  steps: [
    { title: 'Sự xuất hiện của kim loại', html: `<p>Con người lần lượt biết dùng các kim loại:</p>`,
      svg: S.timeline({ title: 'Con người phát hiện kim loại (khoảng)', items: [{ y: 'TNK IV TCN', s: 'Đồng đỏ', sub: 'Tây Á, Ai Cập' }, { y: 'TNK III TCN', s: 'Đồng thau', sub: 'đồng pha thiếc' }, { y: 'Cuối TNK II TCN', s: 'Sắt', sub: 'cứng, rẻ hơn' }], note: 'TNK: thiên niên kỉ. Niên đại xấp xỉ.' }), caption: 'Kim loại thay thế dần công cụ đá.' },
    { title: 'Chuyển biến trong sản xuất', html: `<ul><li>Công cụ kim loại sắc bén, bền: khai hoang, mở rộng diện tích trồng trọt, làm thuỷ lợi.</li><li>Năng suất tăng, xuất hiện <b>sản phẩm dư thừa</b>.</li><li>Nghề thủ công (luyện kim, làm gốm, dệt) tách khỏi nông nghiệp.</li></ul>` },
    { title: 'Xã hội phân hoá', html: `<p>Sản phẩm dư thừa bị một số người chiếm làm của riêng:</p>`,
      svg: S.flowchart({ title: 'Từ công cụ kim loại đến xã hội có giai cấp', steps: [{ t: 'start', s: 'Công cụ kim loại' }, { t: 'proc', s: 'Năng suất tăng, dư thừa' }, { t: 'proc', s: 'Người có quyền chiếm phần dư' }, { t: 'proc', s: 'Phân hoá giàu – nghèo' }, { t: 'end', s: 'Xã hội có giai cấp' }] }), caption: 'Gia đình phụ hệ thay thế thị tộc mẫu hệ; công xã nông thôn ra đời.' },
    { title: 'Ở Việt Nam', html: `<p>Cư dân trên đất Việt Nam biết dùng đồng qua các nền văn hoá <b>Phùng Nguyên – Đồng Đậu – Gò Mun</b>, đến <b>văn hoá Đông Sơn</b> (công cụ đồng, sắt phổ biến). Xã hội phân hoá giàu nghèo, tạo tiền đề cho nhà nước Văn Lang ra đời.</p>
      <div class="box key">Kim loại → dư thừa → tư hữu → giai cấp → xã hội nguyên thuỷ tan rã.</div>` }
  ],
  summary: 'Khoảng thiên niên kỉ IV TCN con người biết dùng đồng đỏ, sau đó đồng thau và cuối thiên niên kỉ II TCN là sắt. Công cụ kim loại làm năng suất tăng, xuất hiện sản phẩm dư thừa, tư hữu, phân hoá giàu nghèo, xã hội có giai cấp; xã hội nguyên thuỷ tan rã. Ở Việt Nam, quá trình này gắn với các văn hoá Phùng Nguyên, Đồng Đậu, Gò Mun, Đông Sơn.',
  examples: [
    { title: 'Giải thích', problem: 'Vì sao công cụ sắt dần thay thế công cụ đồng?', solution: 'Sắt cứng, sắc bén hơn, quặng sắt phổ biến hơn nên rẻ hơn.' },
    { title: 'Chuỗi nguyên nhân', problem: 'Vì sao xuất hiện người giàu, người nghèo?', solution: 'Năng suất tăng tạo ra dư thừa; người có quyền chiếm phần dư thừa làm của riêng.' },
    { title: 'Tính thời gian', problem: 'Một chiếc rìu đồng có tuổi khoảng 3 500 năm. Đó là bao nhiêu thế kỉ?', solution: '3 500 : 100 = 35 thế kỉ.' }
  ],
  exercises: [
    { question: 'Sắp xếp theo thứ tự xuất hiện: sắt, đồng đỏ, đồng thau.', hints: ['Kim loại mềm, dễ luyện nhất?', 'Sắt khó luyện nhất.'], solution: 'Đồng đỏ → đồng thau → sắt.' },
    { question: 'Dùng cày sắt, một gia đình thu 900 kg thóc, gấp 3 lần trước. Trước đây thu bao nhiêu kg?', hints: ['Chia cho 3.', '900 : 3.'], solution: '300 kg.' },
    { question: 'Kể tên các văn hoá thời kim khí ở Việt Nam theo thứ tự.', hints: ['Bắt đầu từ Phùng Nguyên.', 'Kết thúc ở Đông Sơn.'], solution: 'Phùng Nguyên → Đồng Đậu → Gò Mun → Đông Sơn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công cụ kim loại giúp năng suất lao động tăng, xuất hiện sản phẩm dư thừa.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Kim loại được con người sử dụng sớm nhất:', options: ['Đồng đỏ', 'Sắt', 'Nhôm', 'Thép'], answer: 0, explain: 'Đồng đỏ.' },
    { type: 'short', q: '3 500 năm là bao nhiêu thế kỉ?', answer: '35', unit: 'thế kỉ', calc: '3500/100', explain: '35.' },
    { type: 'mcq', q: 'Nguyên nhân sâu xa dẫn đến phân hoá giàu nghèo:', options: ['Xuất hiện sản phẩm dư thừa', 'Thiên tai', 'Chiến tranh', 'Dân số giảm'], answer: 0, explain: 'Dư thừa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Văn hoá Đông Sơn có trước văn hoá Phùng Nguyên.', answer: false, explain: 'Phùng Nguyên sớm hơn.' },
    { type: 'short', q: 'Thu 900 kg, gấp 3 lần trước. Trước đây thu bao nhiêu kg?', answer: '300', unit: 'kg', calc: '900/3', explain: '300.' },
    { type: 'mcq', q: 'Văn hoá thời kim khí tiêu biểu ở Việt Nam:', options: ['Đông Sơn', 'Hoà Bình', 'Bắc Sơn', 'Núi Đọ'], answer: 0, explain: 'Đông Sơn.' },
    { type: 'mcq', q: 'Đồng thau là hợp kim của đồng với:', options: ['thiếc', 'sắt', 'vàng', 'bạc'], answer: 0, explain: 'Thiếc.' }
  ]
});
})();
