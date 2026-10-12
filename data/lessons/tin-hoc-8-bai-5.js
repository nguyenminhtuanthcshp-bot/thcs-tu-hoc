/* Tin học 8 – Bài 5. Sử dụng bảng tính giải quyết bài toán thực tế. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-5', {
  objectives: [
    'Phân biệt được địa chỉ tương đối, địa chỉ tuyệt đối ($A$1) và địa chỉ hỗn hợp.',
    'Giải thích được sự thay đổi của địa chỉ khi sao chép công thức.',
    'Sử dụng được bảng tính để giải quyết bài toán thực tế (tiền điện, chi tiêu, quy đổi).'
  ],
  intro: 'Cửa hàng giảm giá 10% cho mọi mặt hàng. Tỉ lệ giảm ghi ở một ô duy nhất. Khi sao chép công thức xuống, làm sao để ô tỉ lệ ấy <b>không bị “trượt”</b>? Đó là lúc cần <b>địa chỉ tuyệt đối</b>.',
  steps: [
    { title: 'Nhắc lại địa chỉ tương đối', html: `<p>Địa chỉ như <code>B2</code> là <b>địa chỉ tương đối</b>: khi sao chép công thức, nó thay đổi theo vị trí mới (xuống 1 hàng → B3).</p>` },
    { title: 'Địa chỉ tuyệt đối', html: `<p>Thêm dấu <b>$</b> trước tên cột và tên hàng: <code>$E$1</code>. Khi sao chép, địa chỉ tuyệt đối <b>giữ nguyên</b>. Phím <b>F4</b> giúp chuyển nhanh giữa các dạng địa chỉ.</p>`,
      svg: S.sheet({ title: 'Giá sau giảm (tỉ lệ giảm ở E1)', cols: ['A', 'B', 'C', 'D', 'E'], rows: [['Mặt hàng', 'Giá', 'Sau giảm', 'Tỉ lệ giảm:', '10%'], ['Vở', 10000, 9000, '', ''], ['Bút', 6000, 5400, '', ''], ['Thước', 4000, 3600, '', '']], active: 'C2', formula: '=B2*(1-$E$1)', colW: 96, note: 'Sao chép C2 xuống: B2 → B3, B4 nhưng $E$1 giữ nguyên' }), caption: 'Ô tỉ lệ cố định nhờ địa chỉ tuyệt đối.' },
    { title: 'Địa chỉ hỗn hợp', html: `<p><code>$A1</code>: cố định cột A, hàng thay đổi. <code>A$1</code>: cố định hàng 1, cột thay đổi.</p>`,
      svg: S.table({ title: 'Sao chép công thức từ C2 sang D3 (sang phải 1 cột, xuống 1 hàng)', head: ['Trong C2', 'Sau khi sao chép sang D3'], rows: [['=A1', '=B2'], ['=$A$1', '=$A$1'], ['=$A1', '=$A2'], ['=A$1', '=B$1']], colW: 230 }), caption: 'Phần có dấu $ không đổi.' },
    { title: 'Giải bài toán thực tế', html: `<p>Ví dụ tính tiền điện theo bậc, quản lí chi tiêu gia đình, quy đổi tiền tệ (tỉ giá ở một ô tuyệt đối). Các bước: xác định dữ liệu vào – kết quả cần tính – công thức – kiểm tra với vài trường hợp tính tay.</p>
      <div class="box key">$ đứng trước phần nào thì phần đó cố định khi sao chép.</div>` }
  ],
  summary: 'Địa chỉ tương đối (B2) thay đổi khi sao chép; địa chỉ tuyệt đối ($E$1) giữ nguyên; địa chỉ hỗn hợp ($A1, A$1) cố định cột hoặc hàng. Dùng F4 để chuyển dạng. Bảng tính giúp giải bài toán thực tế: giảm giá, chi tiêu, quy đổi, tiền điện…',
  examples: [
    { title: 'Tính giá sau giảm', problem: 'Ở bảng bước 2, giá Bút 6 000 đồng, giảm 10%. Giá sau giảm?', solution: '6 000 × (1 − 0,1) = 5 400 đồng.' },
    { title: 'Sao chép', problem: 'D2 chứa =C2*$G$1. Sao chép xuống D5 được công thức gì?', solution: '=C5*$G$1.' },
    { title: 'Quy đổi tiền tệ', problem: 'B1 chứa tỉ giá 25 000 (đồng/1 đô la, giả định). A3 chứa 12 (đô la). Viết công thức tính ra đồng ở B3 và kết quả.', solution: '=A3*$B$1 → 300 000 đồng.' }
  ],
  exercises: [
    { question: 'C2 chứa =B2*$F$1. Sao chép sang C9. Viết công thức ở C9.', hints: ['B2 là tương đối, hàng tăng 7.', '$F$1 không đổi.'], solution: '=B9*$F$1.' },
    { question: 'Tiền điện (giả định đơn giản): 50 kWh đầu giá 1 800 đ/kWh, phần vượt giá 2 000 đ/kWh. Dùng 80 kWh hết bao nhiêu tiền?', hints: ['50 × 1 800.', 'Phần vượt 30 kWh × 2 000.'], solution: '90 000 + 60 000 = 150 000 đồng.' },
    { question: 'Sao chép =A$1+$B2 từ C3 sang E5. Công thức mới là gì?', hints: ['Sang phải 2 cột, xuống 2 hàng.', 'A$1: cột đổi, hàng cố định; $B2: cột cố định, hàng đổi.'], solution: '=C$1+$B4.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Địa chỉ $A$1 không thay đổi khi sao chép công thức.', answer: true, explain: 'Địa chỉ tuyệt đối.' },
    { type: 'mcq', q: 'D2 chứa =B2*$E$1, sao chép xuống D4 được:', options: ['=B4*$E$3', '=B4*$E$1', '=B2*$E$1', '=D4*$E$1'], answer: 1, explain: 'Chỉ B2 thay đổi.' },
    { type: 'mcq', q: 'Địa chỉ cố định cột, hàng thay đổi là:', options: ['A1', '$A$1', '$A1', 'A$1'], answer: 2, explain: '$A1.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Địa chỉ tương đối giữ nguyên khi sao chép.', answer: false, explain: 'Nó thay đổi.' },
    { type: 'short', q: 'Giá 20 000 đồng, giảm 15%. Giá sau giảm (đồng)?', answer: '17000', answerText: '17 000', unit: 'đồng', calc: '20000*(1-0.15)', explain: '20 000 × 0,85.' },
    { type: 'short', q: 'Tỉ giá giả định 25 000 đồng/đô la. 40 đô la đổi được bao nhiêu đồng?', answer: '1000000', answerText: '1 000 000', unit: 'đồng', calc: '40*25000', explain: '40 × 25 000.' },
    { type: 'mcq', q: 'Phím chuyển nhanh giữa các dạng địa chỉ là:', options: ['F1', 'F2', 'F4', 'F5'], answer: 2, explain: 'F4.' },
    { type: 'short', q: 'Giá điện giả định: 50 kWh đầu 1 800 đ, phần vượt 2 000 đ. Dùng 60 kWh hết bao nhiêu đồng?', answer: '110000', answerText: '110 000', unit: 'đồng', calc: '50*1800+10*2000', explain: '90 000 + 20 000.' }
  ]
});
})();
