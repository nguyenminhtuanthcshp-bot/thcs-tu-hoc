/* KHTN 9 – Bài 38. Nucleic acid và gene. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-38', {
  objectives: [
    'Nêu được khái niệm nucleic acid; kể tên hai loại: DNA và RNA.',
    'Mô tả được cấu trúc DNA: chuỗi xoắn kép, các nucleotide A, T, G, C liên kết theo nguyên tắc bổ sung; chức năng của DNA.',
    'Nêu được cấu trúc, chức năng của RNA (mRNA, tRNA, rRNA) và khái niệm gene.'
  ],
  intro: 'Năm 1953, Watson và Crick công bố mô hình chuỗi xoắn kép của DNA – một trong những khám phá vĩ đại nhất thế kỉ XX. Phân tử nhỏ bé này chứa “bản thiết kế” của mọi sinh vật.',
  steps: [
    { title: 'Nucleic acid', html: `<p><b>Nucleic acid</b> là đại phân tử sinh học được cấu tạo theo nguyên tắc <b>đa phân</b>, đơn phân là các <b>nucleotide</b>. Có hai loại: <b>DNA</b> (deoxyribonucleic acid) và <b>RNA</b> (ribonucleic acid).</p>
      <p>Mỗi nucleotide gồm: một phân tử đường, một nhóm phosphate và một <b>base nitrogen</b>. DNA có 4 loại base: A (adenine), T (thymine), G (guanine), C (cytosine).</p>` },
    { title: 'Cấu trúc DNA', html: `<ul><li>DNA gồm <b>hai mạch</b> polynucleotide xoắn song song quanh một trục (chuỗi xoắn kép).</li><li>Các nucleotide giữa hai mạch liên kết theo <b>nguyên tắc bổ sung</b>: A liên kết với T, G liên kết với C.</li><li>Mỗi chu kì xoắn dài 3,4 nm, gồm 10 cặp nucleotide; mỗi cặp dài 0,34 nm.</li></ul>
      <div class="box key">Hệ quả: A = T, G = C ⇒ A + G = T + C = N/2 (N là tổng số nucleotide).</div>`,
      svg: S.dnaHelix({ seq: 'ATGCGTACGTTAGC' }), caption: 'Mô hình chuỗi xoắn kép DNA: hai mạch liên kết theo nguyên tắc bổ sung A – T, G – C.' },
    { title: 'Nguyên tắc bổ sung', html: `<p>Biết trình tự một mạch, suy ra trình tự mạch còn lại.</p>
      <p>Ví dụ: mạch 1: A T G C T A ⇒ mạch 2: T A C G A T.</p>
      <p>DNA có tính <b>đa dạng và đặc thù</b> do số lượng, thành phần, trình tự sắp xếp các nucleotide. <b>Chức năng:</b> lưu giữ, bảo quản và truyền đạt thông tin di truyền.</p>`,
      svg: S.strandPair({ s1: 'ATGCTA', n1: 'Mạch 1', n2: 'Mạch 2' }), caption: 'Mạch 2 được xác định từ mạch 1 theo nguyên tắc A – T, G – C.' },
    { title: 'RNA và gene', html: `<p><b>RNA</b> thường gồm <b>một mạch</b>, có 4 loại base A, <b>U</b> (uracil), G, C (U thay cho T).</p>
      <table><tr><th>Loại RNA</th><th>Chức năng</th></tr><tr><td>mRNA (RNA thông tin)</td><td>truyền thông tin từ DNA tới ribosome</td></tr><tr><td>tRNA (RNA vận chuyển)</td><td>vận chuyển amino acid tới ribosome</td></tr><tr><td>rRNA (RNA ribosome)</td><td>thành phần cấu tạo ribosome</td></tr></table>
      <p><b>Gene</b> là một đoạn DNA mang thông tin quy định một sản phẩm nhất định (chuỗi polypeptide hoặc RNA).</p>` }
  ],
  summary: 'Nucleic acid (DNA, RNA) là đại phân tử đa phân, đơn phân là nucleotide. DNA: hai mạch xoắn kép, A – T, G – C (A = T, G = C); mỗi cặp nucleotide dài 0,34 nm; lưu giữ và truyền đạt thông tin di truyền. RNA: một mạch, có U thay T; gồm mRNA, tRNA, rRNA. Gene là đoạn DNA mang thông tin quy định một sản phẩm.',
  examples: [
    { title: 'Mạch bổ sung', problem: 'Mạch 1 của một đoạn DNA: A G C T T A G C. Viết mạch 2.', solution: 'T C G A A T C G.' },
    { title: 'Số nucleotide', problem: 'Một gene có 3 000 nucleotide, trong đó A = 600. Tính số nucleotide mỗi loại.', solution: 'T = A = 600; G = C = (3 000 − 2 · 600) / 2 = 900.' },
    { title: 'Chiều dài', problem: 'Tính chiều dài của gene có 3 000 nucleotide.', solution: 'Số cặp = 1 500; L = 1 500 · 0,34 = 510 nm.' }
  ],
  exercises: [
    { question: 'Một đoạn DNA có 20 % A. Tính tỉ lệ phần trăm các loại nucleotide còn lại.', hints: ['A = T.', 'A + G = 50 %.'], solution: 'T = 20 %; G = C = 30 %.' },
    { question: 'Một gene dài 408 nm. Tính tổng số nucleotide của gene.', hints: ['Số cặp = L / 0,34.', 'N = 2 · số cặp.'], solution: 'Số cặp = 1 200 ⇒ N = 2 400 nucleotide.' },
    { question: 'Nêu ba điểm khác nhau giữa DNA và RNA.', hints: ['Số mạch.', 'Loại base và loại đường.'], solution: 'DNA có hai mạch, RNA thường một mạch; DNA có T, RNA có U; đường của DNA là deoxyribose, của RNA là ribose. (Ngoài ra DNA thường lớn hơn nhiều.)' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong phân tử DNA, A liên kết với T và G liên kết với C.', answer: true, explain: 'Nguyên tắc bổ sung.' },
    { type: 'mcq', q: 'Base nitrogen có trong RNA mà không có trong DNA là:', options: ['A', 'T', 'U', 'G'], answer: 2, explain: 'Uracil thay thymine.' },
    { type: 'short', q: 'Một gene có 2 400 nucleotide, A = 480. Số nucleotide loại G là bao nhiêu?', answer: '720', calc: '(2400-2*480)/2', explain: 'G = (2 400 − 960) / 2 = 720.' },
    { type: 'mcq', q: 'Mạch 1 có trình tự A T G C. Mạch bổ sung là:', options: ['A T G C', 'T A C G', 'U A C G', 'G C A T'], answer: 1, explain: 'A – T, T – A, G – C, C – G.' },
    { type: 'short', q: 'Gene có 1 500 cặp nucleotide. Chiều dài gene bằng bao nhiêu nm?', answer: '510', unit: 'nm', calc: '1500*0.34', explain: '1 500 · 0,34 = 510 nm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: tRNA có chức năng truyền thông tin di truyền từ DNA tới ribosome.', answer: false, explain: 'Đó là chức năng của mRNA; tRNA vận chuyển amino acid.' },
    { type: 'short', q: 'Một đoạn DNA có 30 % G. Tỉ lệ phần trăm A là bao nhiêu?', answer: '20', unit: '%', calc: '50-30', explain: 'A + G = 50 % ⇒ A = 20 %.' },
    { type: 'mcq', q: 'Chức năng chính của DNA là:', options: ['xúc tác phản ứng', 'lưu giữ và truyền đạt thông tin di truyền', 'cung cấp năng lượng', 'vận chuyển oxygen'], answer: 1, explain: 'DNA là vật chất di truyền.' }
  ]
});
})();
