/* KHTN 9 – Bài 49. Khái niệm tiến hoá và các hình thức chọn lọc. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-49', {
  objectives: [
    'Nêu được khái niệm tiến hoá.',
    'Trình bày được khái niệm, nội dung và kết quả của chọn lọc nhân tạo; lấy được ví dụ.',
    'Trình bày được khái niệm, nội dung và kết quả của chọn lọc tự nhiên; giải thích được một số ví dụ thực tế.'
  ],
  intro: 'Từ loài cải dại ban đầu, con người đã tạo ra bắp cải, súp lơ, su hào, cải Brussels… trông rất khác nhau. Còn ngoài tự nhiên, quần thể bướm ở vùng công nghiệp nước Anh dần chuyển từ màu trắng sang màu đen. Cả hai đều là kết quả của <b>chọn lọc</b>.',
  steps: [
    { title: 'Khái niệm tiến hoá', html: `<p><b>Tiến hoá</b> là quá trình biến đổi các đặc điểm di truyền của quần thể sinh vật qua các thế hệ, dẫn đến hình thành các đặc điểm thích nghi và hình thành loài mới.</p>
      <p>Darwin (1809 – 1882) cho rằng nhân tố chính của tiến hoá là <b>chọn lọc</b> tác động lên các <b>biến dị cá thể</b> di truyền được.</p>` },
    { title: 'Chọn lọc nhân tạo', html: `<p><b>Chọn lọc nhân tạo</b> là quá trình con người giữ lại những biến dị có lợi cho mình, loại bỏ biến dị không mong muốn ở vật nuôi, cây trồng qua nhiều thế hệ.</p>
      <ul><li><b>Động lực:</b> nhu cầu, thị hiếu của con người.</li><li><b>Kết quả:</b> tạo ra nhiều giống vật nuôi, cây trồng thích nghi với nhu cầu con người, từ một vài dạng tổ tiên hoang dại.</li></ul>`,
      svg: S.evoTree({ root: 'Cải dại', tree: ['Bắp cải (chồi đỉnh)', 'Cải Brussels (chồi bên)', 'Cải xoăn (lá)', 'Súp lơ (hoa)', 'Su hào (thân)'], title: 'Chọn lọc nhân tạo tạo các giống cải từ cải dại' }), caption: 'Từ cải dại, con người chọn lọc theo các bộ phận khác nhau (trong ngoặc là bộ phận được chọn lọc), tạo ra nhiều giống cải.' },
    { title: 'Chọn lọc tự nhiên', html: `<p><b>Chọn lọc tự nhiên</b> là quá trình giữ lại những cá thể mang biến dị có lợi, đào thải những cá thể mang biến dị có hại trong điều kiện sống tự nhiên.</p>
      <ul><li><b>Động lực:</b> đấu tranh sinh tồn của sinh vật.</li><li><b>Kết quả:</b> sinh vật mang đặc điểm thích nghi với môi trường sống; hình thành loài mới.</li></ul>`,
      svg: S.flow({ items: ['Quần thể có nhiều biến dị', 'Môi trường thay đổi', 'Cá thể thích nghi sống sót, sinh sản nhiều', 'Đặc điểm có lợi tăng dần qua thế hệ', 'Quần thể thích nghi'], size: 13, label: 'Cơ chế của chọn lọc tự nhiên' }), caption: 'Chọn lọc tự nhiên giữ lại các biến dị có lợi qua nhiều thế hệ.' },
    { title: 'Ví dụ: bướm sâu đo bạch dương', html: `<p>Ở Anh, trước Cách mạng công nghiệp, thân cây bạch dương phủ địa y màu sáng: bướm màu trắng khó bị chim phát hiện. Khi khói than làm thân cây đen lại, bướm đen ngụy trang tốt hơn nên sống sót nhiều hơn ⇒ tỉ lệ bướm đen tăng nhanh.</p>`,
      svg: S.bar({ title: 'Tỉ lệ bướm đen ở vùng công nghiệp (số liệu minh hoạ)', cats: ['Trước', 'Sau 20 năm', 'Sau 50 năm'], series: [{ name: 'Bướm đen (%)', values: [2, 40, 90], color: '#334155' }], yMax: 100, yStep: 20, width: 500, height: 270 }), caption: 'Khi môi trường bị ô nhiễm khói than, tỉ lệ bướm đen tăng dần (số liệu minh hoạ).' }
  ],
  summary: 'Tiến hoá là sự biến đổi đặc điểm di truyền của quần thể qua các thế hệ. Chọn lọc nhân tạo: con người giữ biến dị có lợi cho mình, tạo giống vật nuôi, cây trồng. Chọn lọc tự nhiên: giữ biến dị có lợi cho sinh vật trong đấu tranh sinh tồn, tạo đặc điểm thích nghi và loài mới.',
  examples: [
    { title: 'Phân biệt', problem: 'Người nông dân chọn những bông lúa to, hạt chắc để làm giống cho vụ sau. Đây là hình thức chọn lọc nào?', solution: 'Chọn lọc nhân tạo (theo nhu cầu của con người).' },
    { title: 'Giải thích', problem: 'Vì sao côn trùng ngày càng kháng thuốc trừ sâu?', solution: 'Trong quần thể có sẵn một số cá thể mang biến dị kháng thuốc; khi phun thuốc, cá thể không kháng bị chết, cá thể kháng sống sót và sinh sản ⇒ tỉ lệ cá thể kháng thuốc tăng qua các thế hệ (chọn lọc tự nhiên).' },
    { title: 'Tính tỉ lệ', problem: 'Một quần thể bướm có 1 000 con, trong đó 900 con màu đen. Tính tỉ lệ bướm đen.', solution: '900 / 1 000 = 90 %.' }
  ],
  exercises: [
    { question: 'So sánh động lực và kết quả của chọn lọc nhân tạo và chọn lọc tự nhiên.', hints: ['Ai “chọn”?', 'Thích nghi với ai: con người hay môi trường?'], solution: 'Chọn lọc nhân tạo: động lực là nhu cầu con người; kết quả tạo giống phù hợp nhu cầu con người. Chọn lọc tự nhiên: động lực là đấu tranh sinh tồn; kết quả là sinh vật thích nghi với môi trường, hình thành loài mới.' },
    { question: 'Lấy hai ví dụ về kết quả của chọn lọc nhân tạo.', hints: ['Giống gà, giống chó, giống lúa…', 'Các giống cải từ cải dại.'], solution: 'Ví dụ: các giống chó khác nhau từ sói; các giống cải (bắp cải, súp lơ, su hào) từ cải dại; giống gà đẻ trứng nhiều.' },
    { question: 'Quần thể có 500 cá thể, 125 cá thể mang đặc điểm thích nghi. Sau vài thế hệ, số này tăng lên 400 trong tổng 500. Tỉ lệ cá thể thích nghi tăng từ bao nhiêu % lên bao nhiêu %?', hints: ['125 / 500.', '400 / 500.'], solution: 'Từ 25 % lên 80 %.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Động lực của chọn lọc nhân tạo là nhu cầu, thị hiếu của con người.', answer: true, explain: 'Con người chủ động chọn lọc.' },
    { type: 'mcq', q: 'Kết quả của chọn lọc tự nhiên là:', options: ['tạo giống vật nuôi mới', 'sinh vật có đặc điểm thích nghi với môi trường', 'tạo giống cây trồng năng suất cao', 'làm sinh vật giống nhau hoàn toàn'], answer: 1, explain: 'Chọn lọc tự nhiên tạo đặc điểm thích nghi.' },
    { type: 'mcq', q: 'Ví dụ nào là kết quả của chọn lọc nhân tạo?', options: ['Bướm đen tăng ở vùng công nghiệp', 'Các giống chó khác nhau', 'Vi khuẩn kháng thuốc kháng sinh', 'Côn trùng kháng thuốc trừ sâu'], answer: 1, explain: 'Con người tạo ra các giống chó.' },
    { type: 'short', q: 'Quần thể 800 con bướm có 200 con màu đen. Tỉ lệ bướm đen là bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '200/800*100', explain: '200 / 800 = 25 %.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chọn lọc tự nhiên tạo ra các biến dị mới ở sinh vật.', answer: false, explain: 'Chọn lọc giữ lại hoặc đào thải biến dị có sẵn, không tạo ra biến dị.' },
    { type: 'mcq', q: 'Theo Darwin, chọn lọc tác động lên:', options: ['biến dị cá thể di truyền được', 'chỉ môi trường', 'thức ăn', 'khí hậu'], answer: 0, explain: 'Biến dị cá thể là nguyên liệu của chọn lọc.' },
    { type: 'short', q: 'Tỉ lệ cá thể kháng thuốc tăng từ 5 % lên 60 %. Tỉ lệ tăng thêm bao nhiêu điểm phần trăm?', answer: '55', unit: '%', calc: '60-5', explain: '60 − 5 = 55.' },
    { type: 'mcq', q: 'Động lực của chọn lọc tự nhiên là:', options: ['nhu cầu con người', 'đấu tranh sinh tồn', 'thuốc trừ sâu', 'nhân giống'], answer: 1, explain: 'Đấu tranh sinh tồn của sinh vật.' }
  ]
});
})();
