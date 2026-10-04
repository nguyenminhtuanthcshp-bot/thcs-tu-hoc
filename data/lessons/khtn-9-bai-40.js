/* KHTN 9 – Bài 40. Dịch mã và mối quan hệ từ gene đến tính trạng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-40', {
  objectives: [
    'Nêu được khái niệm mã di truyền: mã bộ ba (codon), mã mở đầu, mã kết thúc.',
    'Mô tả được sơ lược quá trình dịch mã tổng hợp chuỗi polypeptide tại ribosome.',
    'Trình bày được mối quan hệ gene → mRNA → protein → tính trạng.'
  ],
  intro: 'DNA chỉ có 4 loại “chữ cái” A, T, G, C, nhưng protein lại được xây dựng từ 20 loại amino acid. Làm thế nào 4 chữ cái “viết” được 20 từ? Câu trả lời là <b>mã bộ ba</b>.',
  steps: [
    { title: 'Mã di truyền', html: `<p><b>Mã di truyền</b> là trình tự nucleotide trên mRNA quy định trình tự amino acid trong chuỗi polypeptide. Cứ <b>3 nucleotide liền nhau</b> trên mRNA tạo thành một <b>bộ ba (codon)</b> mã hoá cho một amino acid.</p>
      <ul><li>Có 4<sup>3</sup> = <b>64</b> bộ ba; 61 bộ ba mã hoá amino acid.</li><li><b>AUG</b>: bộ ba mở đầu (mã hoá methionine – Met).</li><li><b>UAA, UAG, UGA</b>: bộ ba kết thúc, không mã hoá amino acid.</li></ul>` },
    { title: 'Quá trình dịch mã', html: `<p><b>Dịch mã</b> diễn ra ở tế bào chất, tại <b>ribosome</b>:</p>
      <ol><li>Ribosome gắn vào mRNA tại bộ ba mở đầu AUG.</li><li>tRNA mang amino acid tương ứng tới; anticodon của tRNA bắt cặp bổ sung với codon trên mRNA.</li><li>Ribosome dịch chuyển từng bộ ba; các amino acid liên kết với nhau thành chuỗi polypeptide.</li><li>Gặp bộ ba kết thúc, ribosome tách khỏi mRNA, chuỗi polypeptide được giải phóng.</li></ol>`,
      svg: S.translation({ codons: ['AUG', 'GGC', 'UUA', 'AAA', 'UAA'], aas: ['Met', 'Gly', 'Leu', 'Lys', 'Kết thúc'] }), caption: 'mRNA AUG GGC UUA AAA UAA được dịch thành chuỗi Met – Gly – Leu – Lys.' },
    { title: 'Tính số amino acid', html: `<p>mRNA có rN ribonucleotide (tính từ bộ ba mở đầu đến hết bộ ba kết thúc) ⇒ số bộ ba = rN / 3.</p>
      <p class="math">Số amino acid trong chuỗi polypeptide = rN / 3 − 1</p>
      <p>(trừ bộ ba kết thúc). Ví dụ: mRNA có 300 ribonucleotide ⇒ 100 bộ ba ⇒ chuỗi polypeptide 99 amino acid.</p>` },
    { title: 'Từ gene đến tính trạng', html: `<p class="math">Gene (DNA) → mRNA → protein → tính trạng</p>
      <ul><li>Trình tự nucleotide trên gene quy định trình tự nucleotide trên mRNA (phiên mã).</li><li>Trình tự nucleotide trên mRNA quy định trình tự amino acid của protein (dịch mã).</li><li>Protein tham gia cấu trúc và hoạt động sinh lí của tế bào, biểu hiện thành tính trạng.</li></ul>`,
      svg: S.flow({ items: ['Gene (DNA)', 'Phiên mã', 'mRNA', 'Dịch mã', 'Protein → tính trạng'], size: 13, label: 'Mối quan hệ từ gene đến tính trạng' }), caption: 'Thông tin di truyền truyền từ gene đến tính trạng qua phiên mã và dịch mã.' }
  ],
  summary: 'Mã di truyền là mã bộ ba trên mRNA; có 64 bộ ba, AUG mở đầu (Met), UAA, UAG, UGA kết thúc. Dịch mã tại ribosome: tRNA mang amino acid, anticodon bắt cặp bổ sung với codon, tạo chuỗi polypeptide. Số amino acid = rN/3 − 1. Gene → mRNA → protein → tính trạng.',
  examples: [
    { title: 'Đọc mã', problem: 'mRNA: AUG – UUA – GGC – UAG. Chuỗi polypeptide có bao nhiêu amino acid?', solution: '4 bộ ba, UAG là bộ ba kết thúc ⇒ 3 amino acid (Met – Leu – Gly).' },
    { title: 'Tính số amino acid', problem: 'mRNA có 1 500 ribonucleotide (từ mã mở đầu đến mã kết thúc). Tính số amino acid của chuỗi polypeptide.', solution: '1 500 / 3 − 1 = 499 amino acid.' },
    { title: 'Ngược lại', problem: 'Chuỗi polypeptide có 199 amino acid. mRNA tương ứng (tính đến hết bộ ba kết thúc) có bao nhiêu ribonucleotide?', solution: '(199 + 1) · 3 = 600 ribonucleotide.' }
  ],
  exercises: [
    { question: 'Vì sao mã di truyền là mã bộ ba mà không phải mã bộ hai?', hints: ['Với 4 loại nucleotide, mã bộ hai có bao nhiêu tổ hợp?', 'Cần mã hoá 20 loại amino acid.'], solution: 'Mã bộ hai chỉ có 4<sup>2</sup> = 16 tổ hợp, không đủ cho 20 amino acid; mã bộ ba có 64 tổ hợp, đủ và dư.' },
    { question: 'Một gene có 1 800 nucleotide. Chuỗi polypeptide do gene quy định có bao nhiêu amino acid? (Giả sử toàn bộ mạch khuôn được phiên mã và dịch mã, có mã kết thúc ở cuối.)', hints: ['rN = 1 800 / 2 = 900.', 'Số aa = 900 / 3 − 1.'], solution: '299 amino acid.' },
    { question: 'Trình bày mối quan hệ giữa gene và tính trạng.', hints: ['Hai quá trình phiên mã và dịch mã.', 'Protein biểu hiện thành tính trạng.'], solution: 'Gene quy định trình tự nucleotide trên mRNA (phiên mã); mRNA quy định trình tự amino acid trên protein (dịch mã); protein biểu hiện thành tính trạng của cơ thể.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bộ ba AUG trên mRNA là bộ ba mở đầu.', answer: true, explain: 'AUG mở đầu, mã hoá methionine.' },
    { type: 'mcq', q: 'Bộ ba nào là bộ ba kết thúc?', options: ['AUG', 'UAA', 'GGC', 'AAA'], answer: 1, explain: 'UAA, UAG, UGA là bộ ba kết thúc.' },
    { type: 'short', q: 'Với 4 loại nucleotide, có tất cả bao nhiêu bộ ba mã di truyền?', answer: '64', unit: 'bộ ba', calc: 'Math.pow(4,3)', explain: '4<sup>3</sup> = 64.' },
    { type: 'short', q: 'mRNA có 900 ribonucleotide (từ mã mở đầu đến hết mã kết thúc). Chuỗi polypeptide có bao nhiêu amino acid?', answer: '299', calc: '900/3-1', explain: '300 bộ ba, trừ 1 bộ ba kết thúc.' },
    { type: 'mcq', q: 'Dịch mã diễn ra ở:', options: ['nhân tế bào', 'ribosome trong tế bào chất', 'màng tế bào', 'nhiễm sắc thể'], answer: 1, explain: 'Dịch mã xảy ra tại ribosome.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bộ ba kết thúc mã hoá cho một amino acid đặc biệt.', answer: false, explain: 'Bộ ba kết thúc không mã hoá amino acid.' },
    { type: 'mcq', q: 'Loại RNA mang amino acid tới ribosome là:', options: ['mRNA', 'tRNA', 'rRNA', 'DNA'], answer: 1, explain: 'RNA vận chuyển (tRNA).' },
    { type: 'short', q: 'Chuỗi polypeptide có 149 amino acid. mRNA tương ứng (tính đến hết mã kết thúc) có bao nhiêu ribonucleotide?', answer: '450', calc: '(149+1)*3', explain: '150 bộ ba · 3 = 450.' }
  ]
});
})();
