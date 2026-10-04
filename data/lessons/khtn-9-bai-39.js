/* KHTN 9 – Bài 39. Tái bản DNA và phiên mã tạo RNA. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-39', {
  objectives: [
    'Mô tả được sơ lược quá trình tái bản DNA theo nguyên tắc bổ sung và nguyên tắc bán bảo toàn.',
    'Nêu được ý nghĩa của tái bản DNA.',
    'Mô tả được quá trình phiên mã tạo RNA từ mạch khuôn của gene; xác định được trình tự mRNA.'
  ],
  intro: 'Mỗi ngày cơ thể em tạo ra hàng tỉ tế bào mới, mỗi tế bào đều cần một bản sao đầy đủ DNA. Bản sao được tạo ra thế nào mà hầu như không sai sót? Và thông tin trong DNA được “đọc” ra bằng cách nào?',
  steps: [
    { title: 'Tái bản DNA', html: `<p><b>Tái bản DNA</b> (nhân đôi DNA) là quá trình tạo ra hai phân tử DNA con giống hệt DNA mẹ, diễn ra trong nhân tế bào trước khi tế bào phân chia.</p>
      <ol><li>Hai mạch DNA mẹ tách nhau ra.</li><li>Mỗi mạch làm <b>khuôn</b>; các nucleotide tự do trong môi trường liên kết với nucleotide trên mạch khuôn theo <b>nguyên tắc bổ sung</b> (A – T, G – C).</li><li>Kết quả: hai DNA con, mỗi DNA gồm <b>một mạch cũ</b> và <b>một mạch mới</b> (nguyên tắc <b>bán bảo toàn</b>).</li></ol>`,
      svg: S.replicationFork(), caption: 'Tái bản DNA: mỗi mạch cũ làm khuôn tổng hợp một mạch mới.' },
    { title: 'Ý nghĩa và tính toán', html: `<p>Tái bản DNA đảm bảo thông tin di truyền được truyền đạt nguyên vẹn qua các thế hệ tế bào và cơ thể.</p>
      <p>Một DNA tái bản k lần tạo ra <span class="math">2<sup>k</sup></span> DNA con. Số nucleotide môi trường cung cấp: <span class="math">N · (2<sup>k</sup> − 1)</span>.</p>
      <p>Ví dụ: DNA có 3 000 nucleotide tái bản 3 lần ⇒ 8 DNA con; cần 3 000 · 7 = 21 000 nucleotide tự do.</p>` },
    { title: 'Phiên mã tạo RNA', html: `<p><b>Phiên mã</b> là quá trình tổng hợp RNA dựa trên một mạch của gene (gọi là <b>mạch khuôn</b>), diễn ra chủ yếu trong nhân tế bào.</p>
      <ul><li>Đoạn DNA của gene tháo xoắn, tách hai mạch.</li><li>Các ribonucleotide tự do liên kết với mạch khuôn theo nguyên tắc bổ sung: A (khuôn) – <b>U</b>, T – A, G – C, C – G.</li><li>mRNA tạo thành rời khỏi nhân ra tế bào chất để tham gia dịch mã.</li></ul>`,
      svg: S.strandPair({ s1: 'TACGGCAAT', rna: true, n1: 'Mạch khuôn', n2: 'mRNA', title: 'Phiên mã: mRNA bổ sung với mạch khuôn của gene' }), caption: 'Mạch khuôn T A C G G C A A T cho mRNA A U G C C G U U A.' },
    { title: 'So sánh tái bản và phiên mã', html: `<table><tr><th></th><th>Tái bản DNA</th><th>Phiên mã</th></tr><tr><td>Khuôn</td><td>cả hai mạch DNA</td><td>một mạch của gene</td></tr><tr><td>Nguyên liệu</td><td>nucleotide A, T, G, C</td><td>ribonucleotide A, U, G, C</td></tr><tr><td>Sản phẩm</td><td>2 DNA con</td><td>RNA (một mạch)</td></tr></table>` }
  ],
  summary: 'Tái bản DNA: hai mạch tách ra, mỗi mạch làm khuôn tổng hợp mạch mới theo nguyên tắc bổ sung và bán bảo toàn; k lần tái bản tạo 2ᵏ DNA con. Phiên mã: tổng hợp RNA từ mạch khuôn của gene theo nguyên tắc bổ sung (A khuôn – U, T – A, G – C, C – G).',
  examples: [
    { title: 'Viết mRNA', problem: 'Mạch khuôn của gene: T A C A A G C T T. Viết trình tự mRNA.', solution: 'mRNA: A U G U U C G A A.' },
    { title: 'Số DNA con', problem: 'Một DNA tái bản liên tiếp 4 lần. Có bao nhiêu DNA con? Bao nhiêu DNA con chứa mạch cũ?', solution: '2<sup>4</sup> = 16 DNA con; chỉ 2 DNA con chứa một mạch cũ của DNA mẹ.' },
    { title: 'Nucleotide môi trường', problem: 'Gene có 1 200 nucleotide tái bản 2 lần. Tính số nucleotide môi trường cung cấp.', solution: '1 200 · (2<sup>2</sup> − 1) = 3 600 nucleotide.' }
  ],
  exercises: [
    { question: 'Mạch khuôn: T A C C G A T T C. Viết mRNA được phiên mã từ mạch này.', hints: ['T → A, A → U.', 'G → C, C → G.'], solution: 'A U G G C U A A G.' },
    { question: 'Vì sao nói tái bản DNA theo nguyên tắc bán bảo toàn?', hints: ['Mỗi DNA con gồm những mạch nào?', 'Bán = một nửa.'], solution: 'Mỗi DNA con giữ lại một mạch của DNA mẹ (một nửa được bảo toàn) và một mạch mới tổng hợp.' },
    { question: 'Một gene có 3 000 nucleotide. Phân tử mRNA phiên mã từ gene này có bao nhiêu ribonucleotide?', hints: ['mRNA chỉ bổ sung với một mạch.', 'Một mạch có N/2 nucleotide.'], solution: '3 000 / 2 = 1 500 ribonucleotide.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi DNA con tạo ra sau tái bản gồm một mạch cũ và một mạch mới.', answer: true, explain: 'Nguyên tắc bán bảo toàn.' },
    { type: 'short', q: 'Một DNA tái bản 3 lần tạo ra bao nhiêu DNA con?', answer: '8', unit: 'DNA', calc: 'Math.pow(2,3)', explain: '2<sup>3</sup> = 8.' },
    { type: 'mcq', q: 'Trong phiên mã, nucleotide A trên mạch khuôn liên kết với:', options: ['T', 'U', 'G', 'C'], answer: 1, explain: 'RNA không có T, A khuôn bắt cặp với U.' },
    { type: 'mcq', q: 'Mạch khuôn T A C G. mRNA tương ứng là:', options: ['A T G C', 'A U G C', 'U A C G', 'T A C G'], answer: 1, explain: 'T → A, A → U, C → G, G → C.' },
    { type: 'short', q: 'Gene có 2 400 nucleotide. mRNA phiên mã từ gene có bao nhiêu ribonucleotide?', answer: '1200', answerText: '1 200', calc: '2400/2', explain: 'Bằng số nucleotide của một mạch.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phiên mã dùng cả hai mạch của gene làm khuôn.', answer: false, explain: 'Chỉ một mạch (mạch khuôn).' },
    { type: 'short', q: 'DNA có 1 000 nucleotide tái bản 2 lần. Số nucleotide môi trường cung cấp là bao nhiêu?', answer: '3000', answerText: '3 000', calc: '1000*(Math.pow(2,2)-1)', explain: '1 000 · 3 = 3 000.' },
    { type: 'mcq', q: 'Sản phẩm của quá trình phiên mã là:', options: ['DNA', 'RNA', 'protein', 'amino acid'], answer: 1, explain: 'Phiên mã tạo RNA.' }
  ]
});
})();
