/* LS&ĐL 6 – Địa lí, Bài 22. Lớp đất trên Trái Đất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-22', {
  objectives: [
    'Nêu được các tầng đất và các thành phần chính của đất.',
    'Trình bày được một số nhân tố hình thành đất.',
    'Kể được tên và xác định được một số nhóm đất điển hình.',
    'Có ý thức bảo vệ đất.'
  ],
  intro: 'Để hình thành một lớp đất dày chỉ khoảng 1 cm, thiên nhiên có thể cần tới hàng trăm năm. Lớp đất mỏng ấy lại nuôi sống gần như toàn bộ cây trồng của loài người. Vậy <b>đất</b> gồm những gì và hình thành ra sao?',
  steps: [
    { title: 'Các tầng đất', html: `<p>Từ trên xuống: tầng chứa mùn (hữu cơ) → tầng tích tụ → tầng đá mẹ (đá gốc bị phong hoá).</p>` },
    { title: 'Thành phần của đất', html: `<p>Một mẫu đất tốt có tỉ lệ gần đúng:</p>`,
      svg: S.pieChart({ title: 'Thành phần của đất (gần đúng)', parts: [{ v: 45, label: 'Khoáng: 45%' }, { v: 5, label: 'Hữu cơ: 5%' }, { v: 25, label: 'Nước: 25%' }, { v: 25, label: 'Không khí: 25%' }] }), caption: 'Chất hữu cơ tuy ít nhưng quyết định độ phì.' },
    { title: 'Nhân tố hình thành đất', html: `<p>Năm nhân tố:</p>`,
      svg: S.table({ title: 'Nhân tố hình thành đất', head: ['Nhân tố', 'Vai trò'], rows: [['Đá mẹ', 'Cung cấp khoáng, quyết định màu đất'], ['Khí hậu', 'Nhiệt, ẩm làm đá phong hoá'], ['Sinh vật', 'Tạo chất hữu cơ (mùn)'], ['Địa hình, thời gian', 'Ảnh hưởng độ dày, tuổi đất']], colW: 250 }), caption: 'Đất nhiệt đới thường có màu đỏ vàng do nhiều sắt, nhôm.' },
    { title: 'Nhóm đất điển hình', html: `<ul><li>Đất đỏ vàng nhiệt đới (vùng nhiệt đới, như ở Việt Nam).</li><li>Đất đen thảo nguyên ôn đới – rất màu mỡ.</li><li>Đất pốt-dôn (vùng rừng lá kim ôn đới lạnh).</li></ul>
      <div class="box key">Bảo vệ đất: chống xói mòn, bón phân hợp lí, không lạm dụng hoá chất.</div>` }
  ],
  summary: 'Đất gồm các tầng: tầng chứa mùn, tầng tích tụ, tầng đá mẹ. Thành phần chính: khoáng (khoảng 45%), hữu cơ (khoảng 5%), nước và không khí (mỗi loại khoảng 25%). Nhân tố hình thành đất: đá mẹ, khí hậu, sinh vật, địa hình, thời gian. Nhóm đất điển hình: đỏ vàng nhiệt đới, đen thảo nguyên ôn đới, pốt-dôn. Cần bảo vệ đất khỏi xói mòn, ô nhiễm.',
  examples: [
    { title: 'Tỉ lệ', problem: '2 kg đất có khoảng bao nhiêu gam chất hữu cơ (5%)?', solution: '2 000 × 5% = 100 g.' },
    { title: 'Nhân tố', problem: 'Nhân tố nào tạo ra chất hữu cơ trong đất?', solution: 'Sinh vật.' },
    { title: 'Tốc độ hình thành', problem: 'Nếu 1 cm đất cần 200 năm, lớp đất 5 cm cần bao lâu?', solution: '1 000 năm.' }
  ],
  exercises: [
    { question: '4 kg đất có bao nhiêu kg khoáng (45%)?', hints: ['4 × 45%.', '4 × 0,45.'], solution: '1,8 kg.' },
    { question: 'Vì sao đất ở Việt Nam phổ biến màu đỏ vàng?', hints: ['Khí hậu nóng ẩm.', 'Sắt, nhôm.'], solution: 'Khí hậu nhiệt đới ẩm làm tích tụ ô-xít sắt, nhôm tạo màu đỏ vàng.' },
    { question: 'Nêu hai biện pháp chống xói mòn đất đồi núi.', hints: ['Trồng cây.', 'Ruộng bậc thang.'], solution: 'Trồng rừng, làm ruộng bậc thang, canh tác theo đường đồng mức.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất khoáng chiếm tỉ lệ lớn nhất trong đất.', answer: true, explain: 'Khoảng 45%.' },
    { type: 'short', q: '2 kg đất có bao nhiêu gam chất hữu cơ (5%)?', answer: '100', unit: 'g', calc: '2000*5/100', explain: '100.' },
    { type: 'mcq', q: 'Nhân tố cung cấp chất khoáng cho đất:', options: ['Đá mẹ', 'Sinh vật', 'Không khí', 'Mặt Trăng'], answer: 0, explain: 'Đá mẹ.' },
    { type: 'short', q: '4 kg đất có bao nhiêu kg khoáng (45%)?', answer: '1.8', answerText: '1,8', unit: 'kg', calc: '4*45/100', explain: '1,8.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đất hình thành rất nhanh, chỉ trong vài tháng.', answer: false, explain: 'Rất chậm.' },
    { type: 'mcq', q: 'Nhóm đất màu mỡ nhất ở vùng thảo nguyên ôn đới:', options: ['Đất đen', 'Đất pốt-dôn', 'Đất cát', 'Đất phèn'], answer: 0, explain: 'Đất đen.' },
    { type: 'short', q: '1 cm đất cần 200 năm. Lớp 5 cm cần bao nhiêu năm?', answer: '1000', answerText: '1 000', unit: 'năm', calc: '200*5', explain: '1 000.' },
    { type: 'mcq', q: 'Tầng đất trên cùng:', options: ['Tầng chứa mùn', 'Tầng đá mẹ', 'Tầng tích tụ', 'Nhân Trái Đất'], answer: 0, explain: 'Tầng mùn.' }
  ]
});
})();
