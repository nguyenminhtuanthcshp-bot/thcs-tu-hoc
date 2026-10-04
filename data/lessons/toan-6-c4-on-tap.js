/* Toán 6 – Bài tập cuối chương IV. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/c4-on-tap', {
  objectives: [
    'Hệ thống hoá đặc điểm các hình phẳng: tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân.',
    'Vận dụng công thức chu vi, diện tích vào bài toán thực tế.',
    'Tự đánh giá mức độ nắm vững chương IV.'
  ],
  intro: 'Ôn tập chương IV – Một số hình phẳng trong thực tiễn. Hãy tự vẽ lại từng hình và ghi đặc điểm bên cạnh.',
  steps: [
    { title: 'Các hình đều', html: `<p>Tam giác đều (3 cạnh bằng nhau, góc 60°), hình vuông (4 cạnh bằng nhau, 4 góc vuông), lục giác đều (6 cạnh, 6 góc bằng nhau, 3 đường chéo chính bằng nhau).</p>`,
      svg: S.row([{ svg: S.shape('tamgiacdeu', { names: false }), caption: 'Tam giác đều' }, { svg: S.shape('hinhvuong', { names: false }), caption: 'Hình vuông' }, { svg: S.shape('lucgiacdeu', { names: false, diag: true }), caption: 'Lục giác đều' }]) },
    { title: 'Các tứ giác đặc biệt', html: `<p>Chữ nhật (4 góc vuông, chéo bằng nhau), thoi (4 cạnh bằng nhau, chéo vuông góc), bình hành (cạnh đối song song và bằng nhau), thang cân (2 đáy song song, 2 cạnh bên bằng nhau, chéo bằng nhau).</p>`,
      svg: S.row([{ svg: S.shape('hcn', { names: false }), caption: 'Hình chữ nhật' }, { svg: S.shape('thoi', { names: false }), caption: 'Hình thoi' }, { svg: S.shape('binhhanh', { names: false }), caption: 'Hình bình hành' }, { svg: S.shape('thangcan', { names: false }), caption: 'Hình thang cân' }]) },
    { title: 'Công thức', html: `<p>Vuông: C = 4a, S = a². Chữ nhật: C = 2(a + b), S = ab. Thoi: S = mn : 2. Bình hành: S = ah. Thang: S = (a + b)h : 2.</p>` },
    { title: 'Chiến lược giải toán', html: `<p>Vẽ hình, ghi số liệu lên hình, đổi cùng đơn vị, chọn công thức, kiểm tra đơn vị kết quả.</p>` }
  ],
  summary: 'Chương IV: nhận dạng, vẽ và tính chu vi, diện tích các hình phẳng quen thuộc.',
  examples: [
    { title: 'Sơn tường', problem: 'Một bức tường hình chữ nhật dài 5 m, cao 3 m, có một cửa sổ 1,5 m × 1 m (1,5 m² ). Sơn mỗi mét vuông hết 20 000 đồng. Tính tiền sơn.', solution: 'Diện tích cần sơn: 15 − 1,5 = 13,5 m². Tiền sơn: 13,5 · 20 000 = <b>270 000 đồng</b>.' },
    { title: 'Tìm đáy', problem: 'Hình thang có diện tích 60 cm², chiều cao 6 cm, đáy lớn 12 cm. Tính đáy nhỏ.', solution: 'a + b = 60 · 2 : 6 = 20 cm ⇒ đáy nhỏ = 20 − 12 = <b>8 cm</b>.' },
    { title: 'So sánh diện tích', problem: 'Hình vuông cạnh 6 cm và hình chữ nhật 9 cm × 4 cm, hình nào có diện tích lớn hơn? Chu vi lớn hơn?', solution: 'Diện tích bằng nhau (36 cm²). Chu vi: vuông 24 cm, chữ nhật 26 cm ⇒ <b>hình chữ nhật có chu vi lớn hơn</b>.' }
  ],
  exercises: [
    { question: 'Hình chữ nhật có chiều dài gấp 3 chiều rộng, chu vi 48 cm. Tính diện tích.', hints: ['Nửa chu vi 24 cm = chiều dài + chiều rộng = 4 phần.', 'Chiều rộng = 24 : 4 = 6 cm.'], solution: 'Rộng 6 cm, dài 18 cm ⇒ S = <b>108 cm²</b>.' },
    { question: 'Một mảnh đất hình bình hành đáy 40 m, chiều cao 25 m. Trồng rau trên cả mảnh, mỗi m² thu 3 kg. Thu được bao nhiêu ki-lô-gam rau?', hints: ['S = 40 · 25.', 'Nhân với 3.'], solution: '1 000 m² · 3 = <b>3 000 kg</b>.' },
    { question: 'Lục giác đều ABCDEF có cạnh 6 cm. Tính chu vi lục giác và độ dài đường chéo AD.', hints: ['6 cạnh bằng nhau.', 'Đường chéo chính gấp đôi cạnh.'], solution: 'Chu vi 36 cm; AD = <b>12 cm</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hình nào có ba đường chéo chính bằng nhau?', options: ['Hình vuông', 'Lục giác đều', 'Hình thoi', 'Tam giác đều'], answer: 1, explain: 'Lục giác đều có ba đường chéo chính AD, BE, CF bằng nhau.' },
    { type: 'short', q: 'Hình vuông có diện tích 64 cm². Chu vi là bao nhiêu cm?', answer: '32', unit: 'cm', calc: '4*Math.sqrt(64)', explain: 'Cạnh 8 cm; chu vi 32 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình thang cân có hai đường chéo bằng nhau.', answer: true, explain: 'Tính chất của hình thang cân.' },
    { type: 'short', q: 'Hình thoi có hai đường chéo 14 cm và 10 cm. Diện tích (cm²)?', answer: '70', unit: 'cm²', calc: '14*10/2', explain: '140 : 2 = 70.' },
    { type: 'short', q: 'Mảnh vườn hình thang có hai đáy 25 m và 15 m, cao 10 m. Diện tích (m²)?', answer: '200', unit: 'm²', calc: '(25+15)*10/2', explain: '40 · 10 : 2 = 200.' },
    { type: 'mcq', q: 'Hình chữ nhật dài 1,2 m, rộng 80 cm có diện tích:', options: ['96 cm²', '9 600 cm²', '0,96 cm²', '960 cm²'], answer: 1, calc: '120*80', explain: 'Đổi 1,2 m = 120 cm; 120 · 80 = 9 600 cm².' },
    { type: 'short', q: 'Hình bình hành có diện tích 45 cm², chiều cao 5 cm. Đáy tương ứng dài bao nhiêu cm?', answer: '9', unit: 'cm', calc: '45/5', explain: '45 : 5 = 9 cm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi góc của lục giác đều bằng 60°.', answer: false, explain: 'Mỗi góc của lục giác đều bằng 120°; 60° là góc của tam giác đều.' }
  ]
});
})();
