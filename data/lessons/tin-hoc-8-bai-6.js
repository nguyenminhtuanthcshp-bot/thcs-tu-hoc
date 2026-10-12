/* Tin học 8 – Bài 6. Sắp xếp và lọc dữ liệu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-6', {
  objectives: [
    'Thực hiện được sắp xếp dữ liệu tăng dần, giảm dần theo một cột (và theo nhiều cột).',
    'Sử dụng được bộ lọc để hiển thị các hàng thoả mãn điều kiện.',
    'Giải thích được ý nghĩa của sắp xếp, lọc trong việc khai thác dữ liệu.'
  ],
  intro: 'Bảng điểm 40 bạn: ai cao điểm nhất? Những bạn nào đạt từ 8 trở lên? Thay vì dò từng dòng, bảng tính có công cụ <b>sắp xếp</b> và <b>lọc</b> làm việc đó trong vài giây.',
  steps: [
    { title: 'Sắp xếp dữ liệu', html: `<p>Chọn một ô trong cột cần sắp xếp → <b>Data → Sort</b> (hoặc nút A→Z, Z→A). Sắp xếp làm thay đổi <b>thứ tự các hàng</b>, các ô cùng hàng luôn đi cùng nhau.</p>`,
      svg: S.sheet({ title: 'Sắp xếp giảm dần theo cột Điểm (số liệu minh hoạ)', cols: ['A', 'B', 'C'], rows: [['Họ tên', 'Tổ', 'Điểm'], ['Chi', 2, '9,5'], ['An', 1, 9], ['Dũng', 1, 8], ['Bình', 2, 7], ['Hà', 1, '6,5']], colW: 120, note: 'Cả hàng di chuyển cùng nhau, không chỉ riêng cột Điểm' }), caption: 'Sau khi sắp xếp giảm dần theo Điểm.' },
    { title: 'Sắp xếp theo nhiều cột', html: `<p>Có thể sắp xếp theo cột thứ nhất (ví dụ Tổ tăng dần), các hàng cùng tổ lại sắp xếp theo cột thứ hai (Điểm giảm dần). Dùng hộp thoại Sort → <b>Add Level</b>.</p>` },
    { title: 'Lọc dữ liệu', html: `<p><b>Data → Filter</b>: tiêu đề cột xuất hiện nút ▼. Chọn giá trị hoặc đặt điều kiện (ví dụ Điểm ≥ 8). Các hàng không thoả mãn bị <b>ẩn tạm thời</b>, không bị xoá. Bỏ lọc để hiện lại toàn bộ.</p>`,
      svg: S.sheet({ title: 'Lọc: Điểm ≥ 8', cols: ['A', 'B', 'C'], rows: [['Họ tên ▼', 'Tổ ▼', 'Điểm ▼'], ['Chi', 2, '9,5'], ['An', 1, 9], ['Dũng', 1, 8]], colW: 120, note: 'Hai hàng không thoả mãn (Bình, Hà) đang bị ẩn' }), caption: 'Chỉ còn hiển thị 3 bạn đạt từ 8 điểm.' },
    { title: 'Lưu ý khi sắp xếp, lọc', html: `<ul><li>Chọn đủ vùng dữ liệu (có hàng tiêu đề) để các cột không bị lệch.</li><li>Không để hàng, cột trống chen giữa bảng.</li><li>Lọc không làm mất dữ liệu; sắp xếp thay đổi thứ tự thật.</li></ul>
      <div class="box key">Sắp xếp: đổi thứ tự hàng. Lọc: ẩn hàng không thoả mãn điều kiện.</div>` }
  ],
  summary: 'Sắp xếp (Data → Sort) đổi thứ tự các hàng theo một hoặc nhiều cột, tăng hoặc giảm dần; cả hàng di chuyển cùng nhau. Lọc (Data → Filter) chỉ hiển thị các hàng thoả mãn điều kiện, các hàng khác bị ẩn tạm thời. Cần chọn đủ vùng dữ liệu có tiêu đề.',
  examples: [
    { title: 'Kết quả sắp xếp', problem: 'Sắp xếp tăng dần theo Điểm cho bảng ở bước 1. Ai đứng đầu?', solution: 'Hà (6,5 điểm).' },
    { title: 'Kết quả lọc', problem: 'Lọc Tổ = 1 ở bảng bước 1. Có bao nhiêu hàng hiển thị và điểm trung bình của tổ 1?', solution: '3 hàng (An, Dũng, Hà); trung bình (9 + 8 + 6,5) : 3 = 7,83… ≈ 7,8.' },
    { title: 'Sai lầm thường gặp', problem: 'Bạn chỉ chọn riêng cột Điểm rồi sắp xếp. Chuyện gì xảy ra?', solution: 'Điểm bị đảo thứ tự nhưng tên không đổi theo → điểm không còn khớp với người; cần chọn cả bảng.' }
  ],
  exercises: [
    { question: 'Bảng có cột Tên, Lớp, Điểm. Muốn xếp theo Lớp tăng dần, trong mỗi lớp điểm cao lên trước thì làm thế nào?', hints: ['Mức thứ nhất là cột nào?', 'Add Level cho mức thứ hai.'], solution: 'Sort: mức 1 Lớp – tăng dần; Add Level, mức 2 Điểm – giảm dần.' },
    { question: 'Lọc dữ liệu có làm mất các hàng bị ẩn không? Giải thích.', hints: ['Lọc ẩn hay xoá?', 'Bỏ lọc thì sao?'], solution: 'Không; các hàng chỉ bị ẩn tạm thời và hiện lại khi bỏ lọc.' },
    { question: 'Danh sách 40 bạn, lọc điểm ≥ 8 còn 15 bạn. Tỉ lệ bạn đạt từ 8 trở lên là bao nhiêu phần trăm?', hints: ['15 : 40.', 'Nhân 100%.'], solution: '15 : 40 = 37,5%.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lọc dữ liệu chỉ ẩn tạm thời các hàng không thoả mãn điều kiện.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Lệnh lọc dữ liệu là:', options: ['Data → Sort', 'Data → Filter', 'Insert → Chart', 'File → Print'], answer: 1, explain: 'Filter.' },
    { type: 'mcq', q: 'Sắp xếp dãy điểm 7; 9; 6,5; 8 giảm dần, điểm đứng thứ hai là:', options: ['9', '8', '7', '6,5'], answer: 1, explain: '9; 8; 7; 6,5.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi sắp xếp, chỉ nên chọn riêng cột cần sắp xếp.', answer: false, explain: 'Phải chọn cả bảng.' },
    { type: 'short', q: 'Lọc 40 bạn còn 10 bạn. Số bạn bị ẩn?', answer: '30', unit: 'bạn', calc: '40-10', explain: '30.' },
    { type: 'short', q: 'Lọc Tổ = 1 được các điểm 9; 8; 7. Điểm trung bình?', answer: '8', calc: '(9+8+7)/3', explain: '24 : 3.' },
    { type: 'mcq', q: 'Muốn sắp xếp theo hai cột, trong hộp thoại Sort dùng:', options: ['Add Level', 'Delete', 'Merge', 'Freeze'], answer: 0, explain: 'Add Level.' },
    { type: 'short', q: '32 bạn, lọc được 8 bạn đạt giỏi. Tỉ lệ phần trăm?', answer: '25', unit: '%', calc: '8/32*100', explain: '25%.' }
  ]
});
})();
