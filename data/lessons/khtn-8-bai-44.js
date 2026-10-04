/* KHTN 8 – Bài 44. Hệ sinh thái. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-44', {
  objectives: [
    'Phát biểu được khái niệm hệ sinh thái; nêu được các thành phần của hệ sinh thái.',
    'Nêu được khái niệm chuỗi thức ăn, lưới thức ăn; xác định được sinh vật sản xuất, sinh vật tiêu thụ, sinh vật phân giải.',
    'Kể được các kiểu hệ sinh thái chủ yếu (tự nhiên, nhân tạo).',
    'Đọc được tháp sinh thái đơn giản.'
  ],
  intro: 'Cỏ là thức ăn của thỏ, thỏ là thức ăn của cáo, xác sinh vật được vi khuẩn phân giải trả lại chất khoáng cho đất… Tất cả sinh vật và môi trường gắn bó thành một hệ thống. Hệ thống đó hoạt động như thế nào?',
  steps: [
    { title: 'Khái niệm và thành phần của hệ sinh thái', html: `<p><b>Hệ sinh thái</b> gồm quần xã sinh vật và môi trường sống của quần xã (sinh cảnh), trong đó các sinh vật luôn tác động lẫn nhau và tác động qua lại với môi trường.</p>
      <ul><li><b>Thành phần vô sinh</b>: đất, nước, không khí, ánh sáng, nhiệt độ, xác sinh vật…</li><li><b>Sinh vật sản xuất</b>: thực vật, tảo – tự tổng hợp chất hữu cơ.</li><li><b>Sinh vật tiêu thụ</b>: động vật (tiêu thụ bậc 1, 2, 3…).</li><li><b>Sinh vật phân giải</b>: vi khuẩn, nấm – phân giải xác và chất thải thành chất vô cơ.</li></ul>` },
    { title: 'Chuỗi thức ăn', html: `<p><b>Chuỗi thức ăn</b> là một dãy các loài sinh vật có mối quan hệ dinh dưỡng với nhau; mỗi loài là một <b>mắt xích</b>, vừa là sinh vật tiêu thụ mắt xích phía trước, vừa bị mắt xích phía sau tiêu thụ.</p>`,
      svg: S.foodChain({ items: ['Cỏ', 'Châu chấu', 'Ếch', 'Rắn', 'Đại bàng'], label: 'Chuỗi thức ăn: cỏ → châu chấu → ếch → rắn → đại bàng' }), caption: 'Mũi tên chỉ chiều: sinh vật bị ăn → sinh vật ăn.' },
    { title: 'Lưới thức ăn', html: `<p><b>Lưới thức ăn</b> gồm nhiều chuỗi thức ăn có chung nhiều mắt xích. Một loài có thể ăn nhiều loài và làm thức ăn cho nhiều loài khác.</p>`,
      svg: S.foodWeb({ w: 600, h: 330, nodes: [{ id: 'co', label: 'Cỏ', x: 140, y: 270, level: 0 }, { id: 'lua', label: 'Lúa', x: 400, y: 270, level: 0 }, { id: 'tho', label: 'Thỏ', x: 80, y: 185, level: 1 }, { id: 'cc', label: 'Châu chấu', x: 250, y: 180, level: 1 }, { id: 'chuot', label: 'Chuột', x: 440, y: 180, level: 1 }, { id: 'ech', label: 'Ếch', x: 250, y: 100, level: 2 }, { id: 'cao', label: 'Cáo', x: 80, y: 80, level: 2 }, { id: 'ran', label: 'Rắn', x: 380, y: 40, level: 3 }, { id: 'vk', label: 'Vi khuẩn, nấm', x: 540, y: 100, level: 'd' }], links: [['co', 'tho'], ['co', 'cc'], ['lua', 'cc'], ['lua', 'chuot'], ['tho', 'cao'], ['cc', 'ech'], ['chuot', 'ran'], ['chuot', 'cao'], ['ech', 'ran'], ['ran', 'vk']], label: 'Một lưới thức ăn đơn giản (sơ đồ)' }), caption: 'Sinh vật phân giải phân giải xác của mọi mắt xích (chỉ vẽ một mũi tên làm ví dụ).' },
    { title: 'Tháp sinh thái và các kiểu hệ sinh thái', html: `<p><b>Tháp sinh thái</b> biểu diễn số lượng (hoặc sinh khối, năng lượng) của các bậc dinh dưỡng; bậc càng cao thì năng lượng càng giảm vì phần lớn năng lượng bị mất qua hô hấp, chất thải.</p>
      <ul><li><b>Hệ sinh thái tự nhiên</b>: trên cạn (rừng, đồng cỏ, hoang mạc…), dưới nước (nước mặn: biển, rạn san hô; nước ngọt: ao, hồ, sông, suối).</li><li><b>Hệ sinh thái nhân tạo</b>: đồng ruộng, rừng trồng, ao nuôi cá, thành phố…</li></ul>`,
      svg: S.ecoPyramid({ levels: [{ label: 'Sinh vật sản xuất', value: 10000 }, { label: 'Tiêu thụ bậc 1', value: 1000 }, { label: 'Tiêu thụ bậc 2', value: 100 }, { label: 'Tiêu thụ bậc 3', value: 10 }], unit: 'kJ', equal: true, title: 'Tháp năng lượng (số liệu minh hoạ, mỗi bậc giữ lại khoảng 10 %)' }) }
  ],
  summary: 'Hệ sinh thái gồm quần xã và sinh cảnh; thành phần: vô sinh, sinh vật sản xuất, tiêu thụ, phân giải. Chuỗi thức ăn là dãy loài có quan hệ dinh dưỡng; lưới thức ăn gồm nhiều chuỗi có chung mắt xích. Năng lượng giảm dần qua các bậc dinh dưỡng. Hệ sinh thái gồm tự nhiên (trên cạn, nước mặn, nước ngọt) và nhân tạo.',
  examples: [
    { title: 'Xác định bậc dinh dưỡng', problem: 'Trong chuỗi cỏ → châu chấu → ếch → rắn → đại bàng, ếch là sinh vật tiêu thụ bậc mấy?', solution: 'Châu chấu là bậc 1, ếch là tiêu thụ bậc 2.' },
    { title: 'Năng lượng qua các bậc', problem: 'Sinh vật sản xuất tích luỹ 10 000 kJ; mỗi bậc giữ lại khoảng 10 %. Tiêu thụ bậc 2 nhận được khoảng bao nhiêu kJ?', solution: 'Bậc 1: 10 000 · 10 % = 1 000 kJ; bậc 2: 1 000 · 10 % = 100 kJ.' },
    { title: 'Viết chuỗi từ lưới', problem: 'Từ lưới thức ăn trong bài, viết hai chuỗi thức ăn có chuột.', solution: 'Lúa → chuột → rắn → vi khuẩn, nấm; lúa → chuột → cáo.' }
  ],
  exercises: [
    { question: 'Kể tên các thành phần của hệ sinh thái.', hints: ['Có thành phần vô sinh.', 'Có ba nhóm sinh vật.'], solution: 'Thành phần vô sinh; sinh vật sản xuất; sinh vật tiêu thụ; sinh vật phân giải.' },
    { question: 'Trong lưới thức ăn của bài, loài nào vừa là tiêu thụ bậc 2 vừa là tiêu thụ bậc 3?', hints: ['Xét rắn trong chuỗi lúa → chuột → rắn.', 'Xét rắn trong chuỗi có ếch.'], solution: 'Rắn: bậc 2 (lúa → chuột → rắn) và bậc 3 (cỏ → châu chấu → ếch → rắn).' },
    { question: 'Sinh vật sản xuất tích luỹ 50 000 kJ; mỗi bậc giữ lại 10 %. Tính năng lượng ở tiêu thụ bậc 3.', hints: ['Nhân 0,1 ba lần.', '50 000 · 0,1 · 0,1 · 0,1.'], solution: '50 000 · 0,001 = 50 kJ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vi khuẩn và nấm là sinh vật phân giải trong hệ sinh thái.', answer: true, explain: 'Chúng phân giải xác và chất thải.' },
    { type: 'mcq', q: 'Trong chuỗi thức ăn cỏ → thỏ → cáo, sinh vật sản xuất là:', options: ['cỏ', 'thỏ', 'cáo', 'vi khuẩn'], answer: 0, explain: 'Cỏ tự tổng hợp chất hữu cơ.' },
    { type: 'short', q: 'Sinh vật sản xuất tích luỹ 20 000 kJ; mỗi bậc giữ lại 10 %. Tiêu thụ bậc 1 nhận được bao nhiêu kJ?', answer: '2000', answerText: '2 000', unit: 'kJ', calc: '20000*10/100', explain: '20 000 · 10 % = 2 000 kJ.' },
    { type: 'mcq', q: 'Hệ sinh thái nào là hệ sinh thái nhân tạo?', options: ['Rạn san hô', 'Rừng mưa nhiệt đới', 'Đồng ruộng', 'Hoang mạc'], answer: 2, explain: 'Do con người tạo ra.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năng lượng tăng dần qua các bậc dinh dưỡng.', answer: false, explain: 'Năng lượng giảm dần.' },
    { type: 'short', q: 'Chuỗi cỏ → châu chấu → ếch → rắn → đại bàng có bao nhiêu mắt xích?', answer: '5', unit: 'mắt xích', calc: '5', explain: 'Có 5 loài ⇒ 5 mắt xích.' },
    { type: 'short', q: 'Sinh vật sản xuất tích luỹ 10 000 kJ; mỗi bậc giữ lại 10 %. Tiêu thụ bậc 2 nhận được bao nhiêu kJ?', answer: '100', unit: 'kJ', calc: '10000*0.1*0.1', explain: '10 000 · 0,1 · 0,1 = 100 kJ.' },
    { type: 'mcq', q: 'Trong chuỗi cỏ → châu chấu → ếch → rắn, ếch là:', options: ['sinh vật sản xuất', 'tiêu thụ bậc 1', 'tiêu thụ bậc 2', 'tiêu thụ bậc 3'], answer: 2, explain: 'Châu chấu bậc 1, ếch bậc 2.' }
  ]
});
})();
