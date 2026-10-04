/* KHTN 9 – Bài 22. Giới thiệu về hợp chất hữu cơ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-22', {
  objectives: [
    'Nêu được khái niệm hợp chất hữu cơ, hoá học hữu cơ và đặc điểm chung của hợp chất hữu cơ.',
    'Phân loại được hợp chất hữu cơ thành hydrocarbon và dẫn xuất của hydrocarbon.',
    'Nêu được khái niệm công thức phân tử, công thức cấu tạo; hoá trị của C (IV), H (I), O (II) trong hợp chất hữu cơ.'
  ],
  intro: 'Gạo, đường, dầu ăn, xăng, nhựa, thuốc chữa bệnh… tuy rất khác nhau nhưng đều chứa nguyên tố <b>carbon</b>. Đó là thế giới của các <b>hợp chất hữu cơ</b> – hiện đã biết tới hàng chục triệu chất.',
  steps: [
    { title: 'Hợp chất hữu cơ là gì?', html: `<p><b>Hợp chất hữu cơ</b> là hợp chất của carbon (trừ một số hợp chất như CO, CO<sub>2</sub>, H<sub>2</sub>CO<sub>3</sub>, muối carbonate, carbide…). <b>Hoá học hữu cơ</b> là ngành hoá học nghiên cứu các hợp chất hữu cơ.</p>
      <p>Đặc điểm chung: thành phần nhất thiết có C, thường có H, O, N…; liên kết chủ yếu là <b>liên kết cộng hoá trị</b>; thường dễ cháy, kém bền với nhiệt; phản ứng thường xảy ra chậm.</p>` },
    { title: 'Phân loại', html: `<ul><li><b>Hydrocarbon:</b> chỉ chứa C và H. Ví dụ: CH<sub>4</sub>, C<sub>2</sub>H<sub>4</sub>, C<sub>6</sub>H<sub>6</sub>.</li><li><b>Dẫn xuất của hydrocarbon:</b> ngoài C, H còn có nguyên tố khác (O, N, Cl…). Ví dụ: C<sub>2</sub>H<sub>5</sub>OH, CH<sub>3</sub>COOH, CH<sub>3</sub>Cl.</li></ul>`,
      svg: S.mindmap({ center: 'Hợp chất hữu cơ', branches: [{ title: 'Hydrocarbon', items: ['CH₄ (methane)', 'C₂H₄ (ethylene)', 'C₃H₈ (propane)'] }, { title: 'Dẫn xuất hydrocarbon', items: ['C₂H₅OH (ethylic alcohol)', 'CH₃COOH (acetic acid)', 'CH₃Cl'] }], size: 13, label: 'Phân loại hợp chất hữu cơ' }), caption: 'Hai nhóm chính: hydrocarbon và dẫn xuất của hydrocarbon.' },
    { title: 'Công thức phân tử và công thức cấu tạo', html: `<p><b>Công thức phân tử</b> cho biết số nguyên tử mỗi nguyên tố trong phân tử, ví dụ C<sub>2</sub>H<sub>6</sub>O.</p>
      <p><b>Công thức cấu tạo</b> biểu diễn thứ tự và cách liên kết giữa các nguyên tử. Trong hợp chất hữu cơ: C luôn có hoá trị <b>IV</b>, H hoá trị I, O hoá trị II. Các nguyên tử C có thể liên kết trực tiếp với nhau tạo mạch carbon (thẳng, nhánh, vòng).</p>`,
      svg: S.structFormula({ mol: ['CH4', 'C2H5OH'], title: 'Công thức cấu tạo của methane và ethylic alcohol' }), caption: 'Mỗi nét gạch là một liên kết; C có 4 liên kết, O có 2, H có 1.' },
    { title: 'Thành phần phần trăm nguyên tố', html: `<p>Ví dụ: CH<sub>4</sub> (M = 16): %C = 12 / 16 · 100 % = 75 %; %H = 25 %.</p>
      <p>Cùng công thức phân tử C<sub>2</sub>H<sub>6</sub>O nhưng có hai chất khác nhau: ethylic alcohol CH<sub>3</sub>–CH<sub>2</sub>–OH (chất lỏng) và dimethyl ether CH<sub>3</sub>–O–CH<sub>3</sub> (chất khí). Vì vậy công thức cấu tạo rất quan trọng.</p>` }
  ],
  summary: 'Hợp chất hữu cơ là hợp chất của carbon (trừ CO, CO₂, H₂CO₃, muối carbonate…). Gồm hydrocarbon (chỉ C, H) và dẫn xuất hydrocarbon. Liên kết chủ yếu là cộng hoá trị; C hoá trị IV. Công thức cấu tạo cho biết thứ tự liên kết giữa các nguyên tử.',
  examples: [
    { title: 'Phân loại', problem: 'Cho các chất: CH<sub>4</sub>, CO<sub>2</sub>, C<sub>2</sub>H<sub>5</sub>OH, CaCO<sub>3</sub>, C<sub>2</sub>H<sub>4</sub>. Chất nào là hợp chất hữu cơ? Hydrocarbon?', solution: 'Hữu cơ: CH<sub>4</sub>, C<sub>2</sub>H<sub>5</sub>OH, C<sub>2</sub>H<sub>4</sub>. Hydrocarbon: CH<sub>4</sub>, C<sub>2</sub>H<sub>4</sub>. CO<sub>2</sub>, CaCO<sub>3</sub> là hợp chất vô cơ.' },
    { title: 'Phần trăm khối lượng', problem: 'Tính %C trong C<sub>2</sub>H<sub>6</sub> (M = 30).', solution: '%C = 24 / 30 · 100 % = 80 %.' },
    { title: 'Viết công thức cấu tạo', problem: 'Viết công thức cấu tạo thu gọn của C<sub>2</sub>H<sub>6</sub>.', solution: 'CH<sub>3</sub>–CH<sub>3</sub> (mỗi C có 3 liên kết với H và 1 liên kết với C).' }
  ],
  exercises: [
    { question: 'Tính %C trong ethylic alcohol C<sub>2</sub>H<sub>6</sub>O (M = 46), làm tròn đến một chữ số thập phân.', hints: ['Khối lượng C trong 1 mol: 24 g.', '%C = 24 / 46 · 100 %.'], solution: '%C ≈ 52,2 %.' },
    { question: 'Vì sao CO<sub>2</sub> chứa carbon nhưng không là hợp chất hữu cơ?', hints: ['Xem lại định nghĩa hợp chất hữu cơ.', 'Tính chất của CO<sub>2</sub> giống chất vô cơ.'], solution: 'CO<sub>2</sub> là trường hợp ngoại lệ, có tính chất của oxide acid vô cơ nên được xếp vào hợp chất vô cơ.' },
    { question: 'Một hydrocarbon có 80 % C về khối lượng và M = 30. Tìm công thức phân tử.', hints: ['m<sub>C</sub> = 0,8 · 30 = 24 ⇒ số C.', 'm<sub>H</sub> = 6 ⇒ số H.'], solution: 'Số C = 24 / 12 = 2; số H = 6. Công thức C<sub>2</sub>H<sub>6</sub>.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi hợp chất chứa carbon đều là hợp chất hữu cơ.', answer: false, explain: 'CO, CO<sub>2</sub>, muối carbonate… là hợp chất vô cơ.' },
    { type: 'mcq', q: 'Chất nào là hydrocarbon?', options: ['C<sub>2</sub>H<sub>5</sub>OH', 'CH<sub>3</sub>Cl', 'C<sub>3</sub>H<sub>8</sub>', 'CH<sub>3</sub>COOH'], answer: 2, explain: 'Chỉ chứa C và H.' },
    { type: 'mcq', q: 'Trong hợp chất hữu cơ, carbon có hoá trị:', options: ['I', 'II', 'III', 'IV'], answer: 3, explain: 'C luôn có hoá trị IV.' },
    { type: 'short', q: 'Phần trăm khối lượng C trong CH<sub>4</sub> là bao nhiêu %?', answer: '75', unit: '%', calc: '12/16*100', explain: '12 / 16 = 75 %.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Liên kết trong phân tử hợp chất hữu cơ chủ yếu là liên kết cộng hoá trị.', answer: true, explain: 'Đặc điểm chung của hợp chất hữu cơ.' },
    { type: 'short', q: 'Phân tử khối của C<sub>3</sub>H<sub>8</sub> là bao nhiêu?', answer: '44', calc: '3*12+8', explain: '36 + 8 = 44.' },
    { type: 'mcq', q: 'Công thức cấu tạo cho biết:', options: ['chỉ số nguyên tử mỗi nguyên tố', 'thứ tự và cách liên kết giữa các nguyên tử trong phân tử', 'khối lượng mol', 'trạng thái của chất'], answer: 1, explain: 'Đó là ý nghĩa của công thức cấu tạo.' },
    { type: 'short', q: 'Hydrocarbon có M = 28, chứa 2 nguyên tử C. Phân tử có bao nhiêu nguyên tử H?', answer: '4', calc: '28-2*12', explain: '28 − 24 = 4 ⇒ C<sub>2</sub>H<sub>4</sub>.' }
  ]
});
})();
