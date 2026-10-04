/* KHTN 9 – Bài 41. Đột biến gene. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-41', {
  objectives: [
    'Nêu được khái niệm đột biến gene và các dạng đột biến điểm: mất, thêm, thay thế một cặp nucleotide.',
    'Nêu được nguyên nhân gây đột biến gene.',
    'Trình bày được tính có hại, có lợi, trung tính của đột biến gene và vai trò của đột biến với tiến hoá, chọn giống.'
  ],
  intro: 'Chỉ một cặp nucleotide bị thay đổi trong gene mã hoá hemoglobin có thể làm hồng cầu biến dạng hình lưỡi liềm, gây bệnh thiếu máu. Đó là một ví dụ về <b>đột biến gene</b>.',
  steps: [
    { title: 'Khái niệm đột biến gene', html: `<p><b>Đột biến gene</b> là những biến đổi trong cấu trúc của gene, thường liên quan tới một hoặc một số cặp nucleotide. Những biến đổi liên quan tới <b>một cặp nucleotide</b> gọi là <b>đột biến điểm</b>.</p>
      <p>Các dạng đột biến điểm: <b>mất</b> một cặp, <b>thêm</b> một cặp, <b>thay thế</b> một cặp nucleotide này bằng một cặp khác.</p>`,
      svg: S.strandPair({ s1: 'ATGCTAGGC', n1: 'Gene ban đầu', n2: 'Mạch bổ sung', codon: true, title: 'Gene bình thường' }), caption: 'Đoạn gene bình thường (chia theo bộ ba).' },
    { title: 'Các dạng đột biến điểm', html: `<table><tr><th>Dạng</th><th>Ví dụ (mạch 1)</th><th>Hậu quả thường gặp</th></tr><tr><td>Thay thế</td><td>ATG CTA GGC → ATG C<b>C</b>A GGC</td><td>thay đổi một bộ ba (có thể đổi 1 amino acid)</td></tr><tr><td>Mất</td><td>ATG CTA GGC → ATG CAG GC… (mất T ở vị trí 5)</td><td>dịch khung đọc, thay đổi nhiều bộ ba phía sau</td></tr><tr><td>Thêm</td><td>ATG CTA GGC → ATG C<b>G</b>T AGG C… (thêm G sau vị trí 4)</td><td>dịch khung đọc</td></tr></table>`,
      svg: S.strandPair({ s1: 'ATGCCAGGC', n1: 'Gene đột biến', n2: 'Mạch bổ sung', hl: [4], codon: true, title: 'Thay thế cặp T – A bằng cặp C – G (vị trí được đánh dấu)' }), caption: 'Đột biến thay thế một cặp nucleotide làm thay đổi bộ ba thứ hai.' },
    { title: 'Nguyên nhân', html: `<ul><li><b>Bên ngoài:</b> tác nhân vật lí (tia UV, tia X, phóng xạ), hoá học (một số hoá chất, thuốc trừ sâu, dioxin), sinh học (một số virus).</li><li><b>Bên trong:</b> rối loạn quá trình sinh lí, sai sót ngẫu nhiên khi tái bản DNA.</li></ul>
      <div class="box tip">Hạn chế tiếp xúc với tia UV mạnh, hoá chất độc hại, khói thuốc lá… để giảm nguy cơ đột biến.</div>` },
    { title: 'Vai trò của đột biến gene', html: `<ul><li>Phần lớn đột biến gene <b>có hại</b> (làm rối loạn tổng hợp protein), ví dụ bệnh hồng cầu hình liềm, bạch tạng.</li><li>Một số <b>trung tính</b> hoặc <b>có lợi</b> (ví dụ giống lúa chịu hạn, chịu mặn).</li><li>Đột biến tạo ra alen mới – <b>nguồn nguyên liệu</b> cho tiến hoá và chọn giống.</li></ul>
      <p>Bệnh hồng cầu hình liềm: thay thế một cặp nucleotide trong gene β-globin làm amino acid glutamic acid bị thay bằng valine.</p>` }
  ],
  summary: 'Đột biến gene là biến đổi trong cấu trúc gene; đột biến điểm gồm mất, thêm, thay thế một cặp nucleotide. Nguyên nhân: tác nhân vật lí, hoá học, sinh học và sai sót khi tái bản DNA. Đa số có hại, một số trung tính hoặc có lợi; đột biến là nguồn nguyên liệu cho tiến hoá và chọn giống.',
  examples: [
    { title: 'Xác định dạng đột biến', problem: 'Gene ban đầu: A T G C A T. Gene đột biến: A T G A T. Đây là dạng đột biến gì?', solution: 'Mất một cặp nucleotide (cặp C – G ở vị trí thứ 4).' },
    { title: 'Số nucleotide', problem: 'Gene có 3 000 nucleotide bị đột biến mất một cặp nucleotide. Gene đột biến có bao nhiêu nucleotide?', solution: '3 000 − 2 = 2 998 nucleotide.' },
    { title: 'Thay thế', problem: 'Đột biến thay thế một cặp A – T bằng một cặp G – C. Số nucleotide của gene thay đổi thế nào?', solution: 'Không đổi tổng số nucleotide; số A, T giảm 1, số G, C tăng 1.' }
  ],
  exercises: [
    { question: 'Gene bình thường: ATG GGC TTA. Gene đột biến: ATG GGC TAA. Xác định dạng đột biến.', hints: ['So sánh từng vị trí.', 'Số nucleotide có thay đổi không?'], solution: 'Thay thế một cặp nucleotide: cặp T – A ở vị trí thứ 8 thay bằng cặp A – T.' },
    { question: 'Vì sao đột biến mất một cặp nucleotide thường gây hậu quả nặng hơn đột biến thay thế?', hints: ['Khung đọc mã bộ ba.', 'Các bộ ba phía sau vị trí mất.'], solution: 'Mất một cặp làm dịch khung đọc, thay đổi toàn bộ các bộ ba từ vị trí đột biến trở đi, nên protein thay đổi nhiều amino acid.' },
    { question: 'Gene có 2 400 nucleotide bị đột biến thêm một cặp nucleotide. Tính số nucleotide của gene đột biến.', hints: ['Thêm một cặp = thêm 2 nucleotide.', '2 400 + 2.'], solution: '2 402 nucleotide.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đột biến gene là nguồn nguyên liệu cho tiến hoá và chọn giống.', answer: true, explain: 'Đột biến tạo alen mới.' },
    { type: 'mcq', q: 'Dạng nào KHÔNG phải đột biến điểm?', options: ['Mất một cặp nucleotide', 'Thêm một cặp nucleotide', 'Thay thế một cặp nucleotide', 'Mất một đoạn nhiễm sắc thể'], answer: 3, explain: 'Mất đoạn NST là đột biến cấu trúc NST.' },
    { type: 'short', q: 'Gene có 1 800 nucleotide bị mất một cặp nucleotide. Gene đột biến có bao nhiêu nucleotide?', answer: '1798', answerText: '1 798', calc: '1800-2', explain: 'Mất một cặp = 2 nucleotide.' },
    { type: 'mcq', q: 'Tác nhân nào có thể gây đột biến gene?', options: ['Tia UV', 'Nước sạch', 'Ánh sáng đèn LED yếu', 'Không khí trong lành'], answer: 0, explain: 'Tia UV là tác nhân vật lí gây đột biến.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi đột biến gene đều có hại cho sinh vật.', answer: false, explain: 'Một số đột biến trung tính hoặc có lợi.' },
    { type: 'short', q: 'Gene có 600 A và 900 G bị đột biến thay thế một cặp A – T bằng một cặp G – C. Số G của gene đột biến là bao nhiêu?', answer: '901', calc: '900+1', explain: 'G tăng thêm 1.' },
    { type: 'mcq', q: 'Bệnh hồng cầu hình liềm do dạng đột biến nào gây ra?', options: ['Thay thế một cặp nucleotide', 'Mất đoạn NST', 'Thể ba NST 21', 'Đa bội'], answer: 0, explain: 'Thay thế một cặp nucleotide trong gene β-globin.' },
    { type: 'mcq', q: 'Đột biến thêm một cặp nucleotide thường làm:', options: ['không thay đổi gì', 'dịch khung đọc mã di truyền', 'tăng số NST', 'mất một NST'], answer: 1, explain: 'Các bộ ba sau vị trí thêm bị thay đổi.' }
  ]
});
})();
