/* Tin học 8 – Bài 8a. Làm việc với danh sách dạng liệt kê và hình ảnh trong văn bản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-8a', {
  objectives: [
    'Tạo được danh sách dạng liệt kê kí hiệu (bullets) và liệt kê số thứ tự (numbering), danh sách nhiều mức.',
    'Chèn được hình ảnh vào văn bản; thay đổi kích thước, vị trí và cách bố trí chữ quanh hình.',
    'Lựa chọn được cách trình bày danh sách, hình ảnh hợp lí cho văn bản.'
  ],
  intro: 'Một hướng dẫn nấu ăn có các bước 1, 2, 3 rõ ràng và hình minh hoạ đặt khéo léo sẽ dễ làm theo hơn nhiều so với một khối chữ dày đặc.',
  steps: [
    { title: 'Danh sách liệt kê', html: `<ul><li><b>Liệt kê kí hiệu</b> (Bullets ●, ■, ✓): các ý ngang hàng, không cần thứ tự.</li><li><b>Liệt kê số thứ tự</b> (Numbering 1, 2, 3 hoặc a, b, c): các bước có trình tự.</li></ul><p>Chọn các đoạn → Home → nút Bullets hoặc Numbering. Nhấn <b>Tab</b> để hạ xuống mức con, <b>Shift+Tab</b> để nâng mức.</p>`,
      svg: S.docPage({ title: 'Văn bản có danh sách liệt kê', lines: ['Cách gieo hạt đậu', '1. Ngâm hạt trong nước ấm', '2. Ủ hạt trong khăn ẩm', '\u00a0\u00a0\u00a0\u00a0\u00a0a. Giữ khăn luôn ẩm', '3. Gieo hạt vào chậu đất', 'Dụng cụ: ● chậu ● đất ● bình tưới'] }), caption: 'Danh sách số thứ tự có mức con a, b.' },
    { title: 'Chèn hình ảnh', html: `<p><b>Insert → Pictures</b> để chèn ảnh từ máy tính. Kéo nút ở góc để thay đổi kích thước giữ tỉ lệ; dùng Crop để cắt bớt phần thừa.</p>` },
    { title: 'Bố trí hình ảnh và chữ', html: `<p>Chọn ảnh → <b>Wrap Text</b> (Ngắt dòng văn bản):</p>`,
      svg: S.table({ title: 'Một số cách bố trí ảnh với văn bản', head: ['Kiểu', 'Cách hiển thị'], rows: [['In Line with Text', 'Ảnh nằm trên dòng như một kí tự'], ['Square', 'Chữ bao quanh ảnh theo khung vuông'], ['Tight', 'Chữ bao sát đường viền ảnh'], ['Top and Bottom', 'Chữ ở trên và dưới, hai bên trống'], ['Behind / In Front of Text', 'Ảnh nằm sau / trước chữ']], colW: 250 }), caption: 'Chọn kiểu phù hợp với bố cục trang.' },
    { title: 'Trình bày hợp lí', html: `<ul><li>Dùng một kiểu kí hiệu thống nhất trong cả văn bản.</li><li>Ảnh rõ, đúng nội dung, có chú thích và nguồn.</li><li>Không để ảnh che chữ hoặc làm vỡ bố cục.</li></ul>
      <div class="box key">Có thứ tự → Numbering; ngang hàng → Bullets; ảnh → Wrap Text.</div>` }
  ],
  summary: 'Danh sách liệt kê kí hiệu (Bullets) cho các ý ngang hàng; liệt kê số thứ tự (Numbering) cho các bước có trình tự; Tab/Shift+Tab để đổi mức. Chèn ảnh bằng Insert → Pictures, chỉnh kích thước, cắt ảnh; chọn kiểu bố trí chữ quanh ảnh bằng Wrap Text (In Line, Square, Tight, Top and Bottom, Behind/In Front).',
  examples: [
    { title: 'Chọn kiểu danh sách', problem: 'Liệt kê “các bước rửa tay” và “các loại trái cây em thích”. Dùng kiểu nào cho mỗi danh sách?', solution: 'Các bước rửa tay: Numbering; trái cây: Bullets.' },
    { title: 'Chữ bao quanh ảnh', problem: 'Muốn ảnh nằm bên phải, chữ chạy bao quanh bên trái, chọn kiểu nào?', solution: 'Square (hoặc Tight).' },
    { title: 'Giữ tỉ lệ', problem: 'Ảnh rộng 12 cm, cao 9 cm; thu nhỏ giữ tỉ lệ còn rộng 8 cm. Chiều cao mới?', solution: '9 × 8 : 12 = 6 cm.' }
  ],
  exercises: [
    { question: 'Danh sách 3 bước, bước 2 có 2 ý con. Mô tả cách tạo.', hints: ['Tạo Numbering cho 3 bước.', 'Đặt con trỏ ở ý con rồi nhấn phím nào?'], solution: 'Gõ các dòng, chọn → Numbering; ở 2 ý con nhấn Tab để hạ mức (hiện a, b).' },
    { question: 'Vì sao ảnh kiểu “In Front of Text” dễ gây lỗi trình bày?', hints: ['Ảnh nằm ở đâu so với chữ?', 'Người đọc nhìn thấy gì?'], solution: 'Ảnh nằm đè lên chữ, có thể che mất nội dung.' },
    { question: 'Ảnh 15 cm × 10 cm, phóng to giữ tỉ lệ để rộng 18 cm. Chiều cao mới?', hints: ['Tỉ lệ 18 : 15 = 1,2.', '10 × 1,2.'], solution: '12 cm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các bước có trình tự nên dùng danh sách số thứ tự.', answer: true, explain: 'Numbering.' },
    { type: 'mcq', q: 'Phím hạ một mục danh sách xuống mức con:', options: ['Enter', 'Tab', 'Esc', 'Ctrl'], answer: 1, explain: 'Tab.' },
    { type: 'mcq', q: 'Kiểu bố trí ảnh nằm trên dòng như một kí tự là:', options: ['Square', 'Tight', 'In Line with Text', 'Behind Text'], answer: 2, explain: 'In Line.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Kéo nút ở cạnh giữa của ảnh luôn giữ nguyên tỉ lệ ảnh.', answer: false, explain: 'Kéo nút góc mới giữ tỉ lệ.' },
    { type: 'short', q: 'Ảnh 10 cm × 8 cm, thu nhỏ giữ tỉ lệ còn rộng 5 cm. Chiều cao mới (cm)?', answer: '4', unit: 'cm', calc: '8*5/10', explain: '4 cm.' },
    { type: 'mcq', q: 'Lệnh chèn ảnh vào văn bản:', options: ['Insert → Pictures', 'Home → Bullets', 'Layout → Margins', 'Review → Spelling'], answer: 0, explain: 'Insert → Pictures.' },
    { type: 'short', q: 'Danh sách có 3 bước, mỗi bước có 2 ý con. Tổng số dòng của danh sách?', answer: '9', unit: 'dòng', calc: '3+3*2', explain: '3 + 6.' },
    { type: 'mcq', q: 'Muốn chữ ở trên và dưới ảnh, hai bên ảnh để trống:', options: ['Top and Bottom', 'Square', 'Tight', 'In Front of Text'], answer: 0, explain: 'Top and Bottom.' }
  ]
});
})();
