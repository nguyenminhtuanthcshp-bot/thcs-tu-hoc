/* Toán 6 – Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-19', {
  objectives: [
    'Nhận dạng được hình chữ nhật, hình thoi, hình bình hành, hình thang cân.',
    'Mô tả được đặc điểm về cạnh, góc, đường chéo của mỗi hình.',
    'Vẽ được hình chữ nhật, hình thoi, hình bình hành bằng dụng cụ học tập.'
  ],
  intro: 'Trang vở, khung cửa sổ, viên gạch hoa, chiếc thang gấp… Nhiều đồ vật quanh ta có dạng các tứ giác đặc biệt. Mỗi hình có những “dấu hiệu nhận diện” riêng về cạnh, góc và đường chéo.',
  steps: [
    { title: 'Hình chữ nhật', html: `<ul><li>Bốn góc vuông.</li><li>Các cạnh đối bằng nhau: AB = CD, AD = BC; các cạnh đối song song.</li><li>Hai đường chéo <b>bằng nhau</b> và cắt nhau tại trung điểm mỗi đường.</li></ul>`,
      svg: S.shape('hcn', { diag: true }), caption: 'Hình chữ nhật ABCD.' },
    { title: 'Hình thoi', html: `<ul><li>Bốn cạnh bằng nhau.</li><li>Các cạnh đối song song; các góc đối bằng nhau.</li><li>Hai đường chéo <b>vuông góc</b> với nhau, cắt nhau tại trung điểm mỗi đường.</li></ul>`,
      svg: S.shape('thoi', { diag: true }), caption: 'Hình thoi ABCD: hai đường chéo AC ⟂ BD.' },
    { title: 'Hình bình hành', html: `<ul><li>Các cạnh đối song song và bằng nhau: AB ∥ CD, AB = CD; AD ∥ BC, AD = BC.</li><li>Các góc đối bằng nhau.</li><li>Hai đường chéo cắt nhau tại trung điểm mỗi đường.</li></ul>`,
      svg: S.shape('binhhanh', { diag: true }), caption: 'Hình bình hành ABCD.' },
    { title: 'Hình thang cân', html: `<ul><li>Có hai cạnh đáy song song: AB ∥ CD.</li><li>Hai cạnh bên bằng nhau: AD = BC.</li><li>Hai góc kề một đáy bằng nhau; hai đường chéo bằng nhau: AC = BD.</li></ul>`,
      svg: S.shape('thangcan', { diag: true }), caption: 'Hình thang cân ABCD (đáy AB, CD).' },
    { title: 'Bảng so sánh', html: `<table class="tbl"><tr><th>Hình</th><th>Cạnh</th><th>Góc</th><th>Đường chéo</th></tr>
      <tr><td>Chữ nhật</td><td>Cạnh đối bằng nhau, song song</td><td>4 góc vuông</td><td>Bằng nhau</td></tr>
      <tr><td>Thoi</td><td>4 cạnh bằng nhau</td><td>Góc đối bằng nhau</td><td>Vuông góc</td></tr>
      <tr><td>Bình hành</td><td>Cạnh đối bằng nhau, song song</td><td>Góc đối bằng nhau</td><td>Cắt nhau tại trung điểm</td></tr>
      <tr><td>Thang cân</td><td>2 đáy song song, 2 cạnh bên bằng nhau</td><td>2 góc kề một đáy bằng nhau</td><td>Bằng nhau</td></tr></table>
      <p>Hình vuông vừa là hình chữ nhật, vừa là hình thoi đặc biệt.</p>` }
  ],
  summary: 'Chữ nhật: 4 góc vuông, đường chéo bằng nhau. Thoi: 4 cạnh bằng nhau, đường chéo vuông góc. Bình hành: cạnh đối song song và bằng nhau. Thang cân: 2 đáy song song, 2 cạnh bên bằng nhau, 2 đường chéo bằng nhau.',
  examples: [
    { title: 'Nhận dạng qua đường chéo', problem: 'Một tứ giác có bốn cạnh bằng nhau và hai đường chéo dài 6 cm, 8 cm. Đó là hình gì?', solution: 'Bốn cạnh bằng nhau nhưng hai đường chéo không bằng nhau nên đó là <b>hình thoi</b> (không phải hình vuông).' },
    { title: 'Tính độ dài', problem: 'Hình chữ nhật ABCD có AB = 8 cm, BC = 5 cm, AC = 9,4 cm (làm tròn). Tính CD, AD, BD.', solution: 'CD = AB = <b>8 cm</b>; AD = BC = <b>5 cm</b>; BD = AC ≈ <b>9,4 cm</b>.' },
    { title: 'Vẽ hình bình hành', problem: 'Nêu cách vẽ hình bình hành ABCD có AB = 5 cm, AD = 3 cm.', solution: 'Vẽ AB = 5 cm. Vẽ AD = 3 cm tạo với AB một góc tuỳ ý (không vuông). Qua D vẽ đường thẳng song song với AB, qua B vẽ đường thẳng song song với AD; hai đường cắt nhau tại C.' }
  ],
  exercises: [
    { question: 'Hình thang cân ABCD có đáy AB, CD. Biết AD = 4 cm, AC = 7 cm. Tính BC và BD.', hints: ['Hai cạnh bên của hình thang cân bằng nhau.', 'Hai đường chéo bằng nhau.'], solution: 'BC = AD = <b>4 cm</b>; BD = AC = <b>7 cm</b>.' },
    { question: 'Hình thoi có một cạnh 6 cm. Tính tổng độ dài bốn cạnh.', hints: ['Bốn cạnh hình thoi bằng nhau.', '4 · 6.'], solution: '<b>24 cm</b>.' },
    { question: 'Hình chữ nhật có hai đường chéo cắt nhau tại O, biết OA = 5 cm. Tính độ dài mỗi đường chéo.', hints: ['O là trung điểm mỗi đường chéo.', 'Hai đường chéo bằng nhau.'], solution: 'AC = BD = 2 · 5 = <b>10 cm</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hình nào có hai đường chéo vuông góc với nhau?', options: ['Hình chữ nhật (không vuông)', 'Hình thoi', 'Hình bình hành bất kì', 'Hình thang cân'], answer: 1, explain: 'Hai đường chéo của hình thoi vuông góc.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình chữ nhật có bốn góc vuông.', answer: true, explain: 'Đúng theo đặc điểm của hình chữ nhật.' },
    { type: 'mcq', q: 'Hình thang cân có đặc điểm nào?', options: ['Bốn cạnh bằng nhau', 'Hai cạnh bên bằng nhau, hai đáy song song', 'Bốn góc vuông', 'Hai đường chéo vuông góc'], answer: 1, explain: 'Đặc điểm của hình thang cân.' },
    { type: 'short', q: 'Hình bình hành ABCD có AB = 7 cm, BC = 4 cm. Tính CD (cm).', answer: '7', unit: 'cm', calc: '7', explain: 'Cạnh đối bằng nhau: CD = AB = 7 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi hình thoi đều có hai đường chéo bằng nhau.', answer: false, explain: 'Chỉ hình thoi đặc biệt (hình vuông) mới có hai đường chéo bằng nhau.' },
    { type: 'short', q: 'Hình thoi có chu vi 20 cm. Mỗi cạnh dài bao nhiêu xăng-ti-mét?', answer: '5', unit: 'cm', calc: '20/4', explain: '20 : 4 = 5 cm.' },
    { type: 'mcq', q: 'Tứ giác có các cạnh đối song song và bằng nhau, không có góc vuông, các cạnh kề không bằng nhau là:', options: ['Hình bình hành', 'Hình chữ nhật', 'Hình thoi', 'Hình vuông'], answer: 0, explain: 'Đó là hình bình hành.' },
    { type: 'short', q: 'Hai đường chéo hình chữ nhật cắt nhau tại O, OB = 3,5 cm. Tính AC (cm).', answer: '7', unit: 'cm', calc: '2*3.5', explain: 'AC = BD = 2 · 3,5 = 7 cm.' }
  ]
});
})();
