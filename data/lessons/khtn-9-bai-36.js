/* KHTN 9 – Bài 36. Khái quát về di truyền học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-36', {
  objectives: [
    'Nêu được khái niệm di truyền, biến dị và đối tượng, nội dung của di truyền học.',
    'Nêu được ý tưởng của Mendel: tính trạng do các nhân tố di truyền (gene) quy định.',
    'Nêu được các thuật ngữ cơ bản: tính trạng, cặp tính trạng tương phản, gene, kiểu gene, kiểu hình, dòng thuần, alen trội – lặn.'
  ],
  intro: 'Vì sao con thường giống bố mẹ nhưng anh chị em ruột lại không giống nhau hoàn toàn? Câu hỏi này được trả lời một cách khoa học lần đầu tiên nhờ những thí nghiệm trên cây đậu Hà Lan của Gregor Mendel (1822 – 1884).',
  steps: [
    { title: 'Di truyền và biến dị', html: `<ul><li><b>Di truyền</b> là hiện tượng truyền đạt các tính trạng của bố mẹ, tổ tiên cho các thế hệ con cháu.</li><li><b>Biến dị</b> là hiện tượng con sinh ra khác bố mẹ và khác nhau ở nhiều chi tiết.</li></ul>
      <p>Di truyền và biến dị là hai hiện tượng song song, gắn liền với quá trình sinh sản. <b>Di truyền học</b> nghiên cứu cơ sở vật chất, cơ chế và quy luật của hiện tượng di truyền, biến dị.</p>` },
    { title: 'Mendel và phương pháp phân tích cơ thể lai', html: `<p>Mendel chọn <b>đậu Hà Lan</b> vì cây tự thụ phấn nghiêm ngặt, có nhiều cặp tính trạng tương phản dễ quan sát, vòng đời ngắn.</p>
      <ol><li>Tạo các <b>dòng thuần chủng</b> khác nhau về một hoặc vài cặp tính trạng.</li><li>Lai các dòng thuần, theo dõi sự di truyền của từng cặp tính trạng qua các thế hệ.</li><li>Dùng <b>thống kê</b> để phân tích số liệu, rút ra quy luật.</li></ol>
      <p>Mendel cho rằng mỗi tính trạng do một cặp <b>nhân tố di truyền</b> (ngày nay gọi là <b>gene</b>) quy định.</p>`,
      svg: S.crossScheme({ title: 'Một phép lai của Mendel (một cặp tính trạng)', rows: [['P', 'Hoa tím (thuần chủng)', '×', 'Hoa trắng (thuần chủng)'], ['F₁', '100 % hoa tím'], ['F₂', '≈ 3 hoa tím : 1 hoa trắng']] }), caption: 'F₁ chỉ biểu hiện một tính trạng (trội); F₂ xuất hiện lại tính trạng lặn.' },
    { title: 'Một số thuật ngữ', html: `<table><tr><th>Thuật ngữ</th><th>Ý nghĩa</th></tr><tr><td>Tính trạng</td><td>đặc điểm về hình thái, cấu tạo, sinh lí (màu hoa, chiều cao…)</td></tr><tr><td>Cặp tính trạng tương phản</td><td>hai trạng thái biểu hiện trái ngược của một tính trạng (hoa tím – hoa trắng)</td></tr><tr><td>Gene (nhân tố di truyền)</td><td>quy định tính trạng; alen trội viết hoa (A), alen lặn viết thường (a)</td></tr><tr><td>Kiểu gene</td><td>tổ hợp gene của cơ thể (AA, Aa, aa)</td></tr><tr><td>Kiểu hình</td><td>tổ hợp tính trạng biểu hiện ra ngoài</td></tr><tr><td>Dòng thuần chủng</td><td>có kiểu gene đồng hợp, đời con giống bố mẹ</td></tr></table>` },
    { title: 'Kiểu gene và kiểu hình', html: `<p>Khi A (hoa tím) trội hoàn toàn so với a (hoa trắng):</p>
      <ul><li>AA (đồng hợp trội) → hoa tím.</li><li>Aa (dị hợp) → hoa tím.</li><li>aa (đồng hợp lặn) → hoa trắng.</li></ul>
      <p>Cùng kiểu hình chưa chắc cùng kiểu gene (AA và Aa đều hoa tím).</p>` }
  ],
  summary: 'Di truyền: truyền đạt tính trạng cho thế hệ sau; biến dị: con khác bố mẹ. Mendel dùng phương pháp phân tích cơ thể lai trên đậu Hà Lan: tạo dòng thuần, lai, thống kê. Thuật ngữ: tính trạng, cặp tính trạng tương phản, gene (alen trội A, lặn a), kiểu gene (AA, Aa, aa), kiểu hình, dòng thuần chủng.',
  examples: [
    { title: 'Nhận biết hiện tượng', problem: 'Hai chị em ruột: chị tóc xoăn, em tóc thẳng, trong khi bố mẹ đều tóc xoăn. Đây là hiện tượng gì?', solution: 'Biến dị (con khác bố mẹ và khác nhau).' },
    { title: 'Kiểu gene', problem: 'Gene A quy định thân cao trội hoàn toàn so với a (thân thấp). Viết các kiểu gene của cây thân cao.', solution: 'AA (thuần chủng) và Aa (không thuần chủng).' },
    { title: 'Tỉ lệ', problem: 'F<sub>2</sub> của Mendel có 705 cây hoa tím và 224 cây hoa trắng. Tính tỉ lệ (làm tròn).', solution: '705 / 224 ≈ 3,15 ⇒ xấp xỉ 3 : 1.' }
  ],
  exercises: [
    { question: 'Nêu ba lí do Mendel chọn đậu Hà Lan làm đối tượng nghiên cứu.', hints: ['Cách thụ phấn của đậu.', 'Tính trạng và vòng đời.'], solution: 'Tự thụ phấn nghiêm ngặt (dễ tạo dòng thuần); có nhiều cặp tính trạng tương phản rõ; vòng đời ngắn, dễ trồng.' },
    { question: 'Phân biệt kiểu gene đồng hợp và dị hợp, cho ví dụ.', hints: ['Hai alen giống hay khác nhau?', 'AA, aa và Aa.'], solution: 'Đồng hợp: hai alen giống nhau (AA, aa). Dị hợp: hai alen khác nhau (Aa).' },
    { question: 'Một phép lai cho 3 150 cây đời con, trong đó 787 cây mang tính trạng lặn. Tính tỉ lệ cây mang tính trạng trội : cây mang tính trạng lặn (làm tròn đến hàng phần mười).', hints: ['Số cây trội = 3 150 − 787.', 'Chia cho 787.'], solution: 'Cây trội = 2 363; 2 363 / 787 ≈ 3,0 ⇒ tỉ lệ ≈ 3 : 1.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biến dị là hiện tượng con sinh ra khác bố mẹ và khác nhau ở nhiều chi tiết.', answer: true, explain: 'Đó là định nghĩa biến dị.' },
    { type: 'mcq', q: 'Đối tượng nghiên cứu chủ yếu của Mendel là:', options: ['ruồi giấm', 'đậu Hà Lan', 'lúa nước', 'chuột bạch'], answer: 1, explain: 'Mendel nghiên cứu trên đậu Hà Lan.' },
    { type: 'mcq', q: 'Kiểu gene nào là đồng hợp lặn?', options: ['AA', 'Aa', 'aa', 'AaBb'], answer: 2, explain: 'Hai alen lặn giống nhau.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai cây có cùng kiểu hình thì luôn có cùng kiểu gene.', answer: false, explain: 'AA và Aa có cùng kiểu hình trội.' },
    { type: 'short', q: 'F₂ có 600 cây, tỉ lệ 3 trội : 1 lặn. Số cây mang tính trạng lặn là bao nhiêu?', answer: '150', unit: 'cây', calc: '600/4', explain: '600 · 1/4 = 150.' },
    { type: 'mcq', q: 'Cặp tính trạng tương phản là:', options: ['hoa tím và thân cao', 'hạt vàng và hạt xanh', 'hạt trơn và hoa trắng', 'thân thấp và quả lục'], answer: 1, explain: 'Hai trạng thái trái ngược của cùng tính trạng màu hạt.' },
    { type: 'short', q: 'Mendel thu được 6 022 hạt vàng và 2 001 hạt xanh. Tỉ số hạt vàng / hạt xanh (làm tròn đến hàng đơn vị) là bao nhiêu?', answer: '3', calc: 'round(6022/2001)', explain: '6 022 / 2 001 ≈ 3,01 ≈ 3.' },
    { type: 'mcq', q: 'Theo Mendel, tính trạng do yếu tố nào quy định?', options: ['môi trường', 'nhân tố di truyền (gene)', 'thức ăn', 'ngẫu nhiên'], answer: 1, explain: 'Ngày nay gọi là gene.' }
  ]
});
})();
