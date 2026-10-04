/* Toán 6 – Bài 1. Tập hợp. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('toan-6/bai-1', {
  objectives: [
    'Nhận biết được một tập hợp và các phần tử của nó.',
    'Sử dụng đúng kí hiệu ∈ (thuộc) và ∉ (không thuộc).',
    'Mô tả một tập hợp theo hai cách: liệt kê các phần tử và chỉ ra tính chất đặc trưng.',
    'Nhận biết tập hợp số tự nhiên ℕ và ℕ*.'
  ],
  intro: 'Khởi động: Trong cặp sách của em có sách, vở, bút, thước… Tất cả những đồ vật ấy tạo thành “tập hợp các đồ dùng trong cặp”. Toán học dùng từ <b>tập hợp</b> để nói về những nhóm đối tượng như vậy.',
  steps: [
    { title: 'Tập hợp là gì?', html: `<p>Khi gom một số đối tượng có chung một đặc điểm lại với nhau, ta được một <b>tập hợp</b>. Ví dụ:</p>
      <ul><li>Tập hợp các bạn trong tổ 1 của lớp em.</li><li>Tập hợp các số tự nhiên nhỏ hơn 5.</li><li>Tập hợp các ngày trong một tuần.</li></ul>
      <p>Người ta thường đặt tên tập hợp bằng <b>chữ cái in hoa</b>: A, B, C, M…</p>` },
    { title: 'Phần tử và kí hiệu ∈, ∉', html: `<p>Mỗi đối tượng trong tập hợp gọi là một <b>phần tử</b> của tập hợp đó.</p>
      <p>Ví dụ: A = {1; 3; 5}. Số 3 là phần tử của A, ta viết <span class="math">3 ∈ A</span> (đọc: “3 thuộc A”). Số 2 không phải phần tử của A, ta viết <span class="math">2 ∉ A</span> (đọc: “2 không thuộc A”).</p>
      <div class="box tip">Mẹo nhớ: kí hiệu ∈ giống chữ “e” trong “element” (phần tử); thêm gạch chéo thành ∉ nghĩa là “không thuộc”.</div>` },
    { title: 'Cách 1: Liệt kê các phần tử', html: `<p>Viết các phần tử trong dấu ngoặc nhọn { }, ngăn cách nhau bởi dấu chấm phẩy “;”.</p>
      <p>Ví dụ: Tập hợp B các số tự nhiên nhỏ hơn 4 là <span class="math">B = {0; 1; 2; 3}</span>.</p>
      <div class="box note"><b>Lưu ý:</b><br>• Mỗi phần tử chỉ được viết <b>một lần</b>.<br>• Thứ tự viết các phần tử <b>không quan trọng</b>: {0; 1; 2; 3} và {3; 1; 0; 2} là cùng một tập hợp.<br>• Dùng dấu “;” thay vì dấu “,” để không nhầm với dấu phẩy của số thập phân.</div>` },
    { title: 'Cách 2: Chỉ ra tính chất đặc trưng', html: `<p>Thay vì kể hết, ta nêu đặc điểm chung để nhận biết các phần tử.</p>
      <p>Ví dụ: Tập hợp B ở trên có thể viết <span class="math">B = {x | x là số tự nhiên, x &lt; 4}</span>.</p>
      <p>Đọc là: “B là tập hợp các x sao cho x là số tự nhiên và x nhỏ hơn 4”.</p>
      <div class="box tip">Cách 2 rất tiện khi tập hợp có nhiều phần tử, ví dụ tập hợp các số tự nhiên nhỏ hơn 1 000.</div>` },
    { title: 'Tập hợp số tự nhiên ℕ và ℕ*', html: `<p>Tập hợp các số tự nhiên kí hiệu là <b>ℕ</b>: <span class="math">ℕ = {0; 1; 2; 3; …}</span>.</p>
      <p>Tập hợp các số tự nhiên <b>khác 0</b> kí hiệu là <b>ℕ*</b>: <span class="math">ℕ* = {1; 2; 3; …}</span>.</p>
      <p>Nhờ kí hiệu này, ta viết gọn: <span class="math">B = {x ∈ ℕ | x &lt; 4}</span>.</p>
      <div class="box key">Nhớ: 0 ∈ ℕ nhưng 0 ∉ ℕ*.</div>` }
  ],
  summary: 'Tập hợp được viết trong dấu { }, các phần tử cách nhau bởi dấu “;”, mỗi phần tử viết một lần. Có hai cách mô tả tập hợp: liệt kê hoặc chỉ ra tính chất đặc trưng. ℕ = {0; 1; 2; …}, ℕ* = {1; 2; 3; …}.',
  examples: [
    { title: 'Tập hợp các chữ cái', problem: 'Viết tập hợp M các chữ cái có trong cụm từ “NHA TRANG”.', solution: 'Các chữ cái xuất hiện là N, H, A, T, R, G (chữ A và N xuất hiện hai lần nhưng chỉ viết một lần).<br>Vậy <span class="math">M = {N; H; A; T; R; G}</span>. Tập hợp M có 6 phần tử.' },
    { title: 'Từ tính chất đặc trưng sang liệt kê', problem: 'Cho A = {x ∈ ℕ | 3 ≤ x &lt; 8}. Hãy liệt kê các phần tử của A rồi điền kí hiệu ∈ hoặc ∉ vào chỗ trống: 8 … A; 5 … A.', solution: 'Các số tự nhiên lớn hơn hoặc bằng 3 và nhỏ hơn 8 là 3, 4, 5, 6, 7.<br>Vậy <span class="math">A = {3; 4; 5; 6; 7}</span>.<br>Số 8 không nhỏ hơn 8 nên <span class="math">8 ∉ A</span>; còn <span class="math">5 ∈ A</span>.' },
    { title: 'Từ liệt kê sang tính chất đặc trưng', problem: 'Viết tập hợp C = {0; 2; 4; 6; 8} bằng cách chỉ ra tính chất đặc trưng.', solution: 'Các phần tử đều là số tự nhiên chẵn và nhỏ hơn 10.<br>Vậy <span class="math">C = {x ∈ ℕ | x là số chẵn, x &lt; 10}</span>.' }
  ],
  exercises: [
    { question: 'Viết tập hợp T các tháng (dương lịch) có 30 ngày.', hints: ['Nhớ lại: tháng nào có 31 ngày, tháng nào có 30 ngày, tháng 2 có bao nhiêu ngày?', 'Có thể đếm trên các khớp nắm tay: khớp lồi là tháng 31 ngày, chỗ lõm là tháng 30 ngày (trừ tháng 2).'], solution: 'Các tháng có 30 ngày là tháng 4, tháng 6, tháng 9, tháng 11.<br>T = {tháng 4; tháng 6; tháng 9; tháng 11}.' },
    { question: 'Cho D = {x ∈ ℕ* | x ≤ 5}. Liệt kê các phần tử của D. Số 0 có thuộc D không?', hints: ['ℕ* là tập hợp các số tự nhiên khác 0.', 'Tìm các số tự nhiên khác 0 và nhỏ hơn hoặc bằng 5.'], solution: 'D = {1; 2; 3; 4; 5}. Vì 0 ∉ ℕ* nên <b>0 ∉ D</b>.' },
    { question: 'Viết tập hợp E các số tự nhiên có hai chữ số mà tổng hai chữ số bằng 4. Tập hợp E có bao nhiêu phần tử?', hints: ['Chữ số hàng chục phải khác 0, có thể là 1, 2, 3 hoặc 4.', 'Với mỗi chữ số hàng chục a, chữ số hàng đơn vị là 4 − a.'], solution: 'Hàng chục 1 → 13; hàng chục 2 → 22; hàng chục 3 → 31; hàng chục 4 → 40.<br>E = {13; 22; 31; 40}, có <b>4 phần tử</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Cách viết nào dưới đây đúng để chỉ tập hợp gồm các số 1, 2, 3?', options: ['(1; 2; 3)', '{1; 2; 3}', '[1; 2; 3]', '{1; 2; 2; 3}'], answer: 1, explain: 'Tập hợp viết trong dấu ngoặc nhọn { }, mỗi phần tử chỉ viết một lần.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cho B = {a; b; c}, ta có d ∈ B.', answer: false, explain: 'd không có trong B nên phải viết d ∉ B.' },
    { type: 'short', q: 'Tập hợp {x ∈ ℕ | x ≤ 7} có bao nhiêu phần tử?', answer: '8', explain: 'Các phần tử là 0, 1, 2, 3, 4, 5, 6, 7 – tổng cộng 8 phần tử (nhớ tính cả số 0).' },
    { type: 'mcq', q: 'Tập hợp ℕ* là:', options: ['{0; 1; 2; 3; …}', '{1; 2; 3; …}', '{0}', '{1; 2; 3; 4; 5}'], answer: 1, explain: 'ℕ* là tập hợp các số tự nhiên khác 0.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 0 ∈ ℕ*.', answer: false, explain: '0 là số tự nhiên nhưng ℕ* không chứa số 0, nên 0 ∉ ℕ*.' },
    { type: 'short', q: 'Cho E = {x ∈ ℕ | 10 &lt; x &lt; 15}. Tính tổng tất cả các phần tử của E.', answer: '50', explain: 'E = {11; 12; 13; 14}. Tổng: 11 + 12 + 13 + 14 = 50.' },
    { type: 'mcq', q: 'Tập hợp các chữ cái trong từ “CANADA” có bao nhiêu phần tử?', options: ['6', '5', '4', '3'], answer: 2, explain: 'Các chữ cái khác nhau là C, A, N, D. Chữ A lặp lại nhưng chỉ tính một lần: 4 phần tử.' },
    { type: 'mcq', q: 'Tập hợp B = {5; 6; 7; 8} được viết bằng cách chỉ ra tính chất đặc trưng là:', options: ['{x ∈ ℕ | 4 &lt; x &lt; 9}', '{x ∈ ℕ | 5 &lt; x &lt; 8}', '{x ∈ ℕ | 4 ≤ x ≤ 8}', '{x ∈ ℕ | 5 &lt; x ≤ 9}'], answer: 0, explain: 'Các số tự nhiên lớn hơn 4 và nhỏ hơn 9 là 5, 6, 7, 8. Các phương án khác thiếu hoặc thừa phần tử.' }
  ]
});
