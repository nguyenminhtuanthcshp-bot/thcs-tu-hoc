/* LS&ĐL 6 – Địa lí, Bài 23. Sự sống trên Trái Đất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-23', {
  objectives: [
    'Nêu được ví dụ về sự đa dạng của thế giới sinh vật ở lục địa và đại dương.',
    'Giải thích vì sao sinh vật phân bố khác nhau.',
    'Nêu được vai trò của sinh vật đối với con người và tự nhiên.',
    'Có ý thức bảo vệ đa dạng sinh học.'
  ],
  intro: 'Từ đỉnh núi băng giá đến đáy đại dương tối tăm, từ sa mạc khô cằn đến rừng rậm ẩm ướt, đâu đâu cũng có sự sống. Thế giới <b>sinh vật</b> trên Trái Đất đa dạng đến kinh ngạc.',
  steps: [
    { title: 'Sinh vật ở đại dương', html: `<p>Đại dương có sự sống ở mọi độ sâu: từ sinh vật phù du, rong tảo đến cá voi xanh – động vật lớn nhất hành tinh. Rạn san hô là nơi cực kì đa dạng.</p>` },
    { title: 'Sinh vật ở lục địa', html: `<p>Thực vật, động vật thay đổi theo khí hậu:</p>`,
      svg: S.table({ title: 'Sinh vật thay đổi theo vùng khí hậu', head: ['Vùng', 'Sinh vật tiêu biểu'], rows: [['Xích đạo, nhiệt đới ẩm', 'Rừng rậm nhiều tầng; khỉ, vẹt, báo'], ['Hoang mạc', 'Xương rồng; lạc đà, bò sát'], ['Ôn đới', 'Rừng lá rộng, lá kim; hươu, gấu'], ['Vùng cực', 'Rêu, địa y; gấu trắng, chim cánh cụt']], colW: 250 }), caption: 'Gấu trắng ở Bắc Cực, chim cánh cụt chủ yếu ở Nam Cực.' },
    { title: 'Vai trò', html: `<p>Sinh vật cung cấp thức ăn, gỗ, thuốc; điều hoà khí hậu; giữ đất, nước.</p>`,
      svg: S.flowchart({ title: 'Nhân tố ảnh hưởng phân bố sinh vật', steps: [{ t: 'start', s: 'Khí hậu (nhiệt, ẩm)' }, { t: 'proc', s: 'Đất, nước' }, { t: 'proc', s: 'Con người' }, { t: 'end', s: 'Sinh vật phân bố' }] }), caption: 'Con người có thể làm tăng hoặc giảm đa dạng sinh vật.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Khí hậu càng nóng ẩm, sinh vật càng phong phú.</div>` }
  ],
  summary: 'Sự sống có mặt khắp nơi trên Trái Đất. Ở đại dương có từ sinh vật phù du đến cá voi xanh; rạn san hô rất đa dạng. Ở lục địa, sinh vật thay đổi theo khí hậu: rừng rậm ở vùng nhiệt đới ẩm, xương rồng ở hoang mạc, rêu và địa y ở vùng cực. Khí hậu, đất, nước và con người ảnh hưởng đến phân bố sinh vật.',
  examples: [
    { title: 'Thích nghi', problem: 'Lạc đà thích nghi với hoang mạc thế nào?', solution: 'Bướu dự trữ mỡ, chịu khát lâu, chân to đi trên cát.' },
    { title: 'So sánh', problem: 'Nơi nào nhiều loài hơn: rừng nhiệt đới hay vùng cực?', solution: 'Rừng nhiệt đới.' },
    { title: 'Tính toán', problem: 'Một khu rừng có 1 200 loài thực vật, mất 15% do chặt phá. Còn bao nhiêu loài?', solution: '1 200 × 85% = 1 020 loài.' }
  ],
  exercises: [
    { question: 'Kể hai loài động vật vùng cực.', hints: ['Bắc Cực.', 'Nam Cực.'], solution: 'Gấu trắng, chim cánh cụt (hải cẩu…).' },
    { question: 'Khu bảo tồn có 400 loài chim, tăng 10%. Có bao nhiêu loài?', hints: ['400 × 10% = 40.', 'Cộng thêm.'], solution: '440 loài.' },
    { question: 'Vì sao hoang mạc ít sinh vật?', hints: ['Nước.', 'Nhiệt độ.'], solution: 'Rất khô hạn, nhiệt độ chênh lệch lớn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rừng nhiệt đới ẩm có thành phần loài rất phong phú.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Động vật lớn nhất hành tinh:', options: ['Cá voi xanh', 'Voi châu Phi', 'Hươu cao cổ', 'Cá mập trắng'], answer: 0, explain: 'Cá voi xanh.' },
    { type: 'short', q: '1 200 loài, mất 15%. Còn bao nhiêu loài?', answer: '1020', answerText: '1 020', unit: 'loài', calc: '1200*(100-15)/100', explain: '1 020.' },
    { type: 'mcq', q: 'Thực vật tiêu biểu của hoang mạc:', options: ['Xương rồng', 'Lúa nước', 'Cây thông', 'Rêu'], answer: 0, explain: 'Xương rồng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở đáy đại dương sâu không có bất kì sinh vật nào.', answer: false, explain: 'Vẫn có sinh vật.' },
    { type: 'short', q: '400 loài chim, tăng 10%. Có bao nhiêu loài?', answer: '440', unit: 'loài', calc: '400*1.1', explain: '440.' },
    { type: 'mcq', q: 'Nhân tố ảnh hưởng lớn nhất đến phân bố thực vật:', options: ['Khí hậu', 'Màu sắc đá', 'Ánh trăng', 'Gió mặt trời'], answer: 0, explain: 'Khí hậu.' },
    { type: 'mcq', q: 'Động vật sống chủ yếu ở Nam Cực:', options: ['Chim cánh cụt', 'Gấu trắng', 'Lạc đà', 'Khỉ'], answer: 0, explain: 'Chim cánh cụt.' }
  ]
});
})();
