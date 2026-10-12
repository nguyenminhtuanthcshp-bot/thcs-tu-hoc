/* LS&ĐL 6 – Địa lí, Bài 2. Bản đồ. Một số lưới kinh, vĩ tuyến. Phương hướng trên bản đồ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-2', {
  objectives: [
    'Nêu được khái niệm bản đồ.',
    'Nhận biết được một số lưới kinh, vĩ tuyến của bản đồ thế giới.',
    'Xác định được phương hướng trên bản đồ.',
    'Hiểu vì sao bản đồ luôn có sai số.'
  ],
  intro: 'Thử bóc vỏ một quả cam rồi trải phẳng ra bàn: vỏ sẽ bị rách hoặc co giãn. Vẽ bề mặt cong của Trái Đất lên mặt giấy phẳng cũng gặp khó khăn như vậy. Đó là lí do có nhiều loại <b>lưới kinh, vĩ tuyến</b> khác nhau.',
  steps: [
    { title: 'Bản đồ là gì?', html: `<p><b>Bản đồ</b> là hình ảnh thu nhỏ, tương đối chính xác của một khu vực hay toàn bộ bề mặt Trái Đất lên mặt phẳng. So với quả Địa Cầu, bản đồ dễ mang theo, thể hiện được chi tiết nhưng luôn có sai số, càng xa trung tâm chiếu đồ sai số càng lớn.</p>` },
    { title: 'Một số lưới kinh, vĩ tuyến', html: `<p>Mỗi phép chiếu tạo ra một kiểu lưới:</p>`,
      svg: S.table({ title: 'Một số kiểu lưới kinh, vĩ tuyến', head: ['Kiểu lưới', 'Đặc điểm'], rows: [['Hình chữ nhật (Mec-ca-to)', 'Kinh, vĩ tuyến thẳng, vuông góc'], ['Hình nón', 'Vĩ tuyến cung tròn, kinh tuyến toả'], ['Phương vị (cực)', 'Vĩ tuyến là vòng tròn đồng tâm'], ['Đồ thị chung', 'Mỗi lưới phù hợp một khu vực']], colW: 250 }), caption: 'Bản đồ Mec-ca-to làm vùng gần cực to hơn thực tế.' },
    { title: 'Phương hướng trên bản đồ', html: `<p>Với bản đồ có lưới kinh, vĩ tuyến: đầu trên kinh tuyến là hướng <b>Bắc</b>, đầu dưới là <b>Nam</b>; đầu phải vĩ tuyến là <b>Đông</b>, đầu trái là <b>Tây</b>. Bản đồ không có lưới thì dựa vào mũi tên chỉ hướng Bắc.</p>`,
      svg: S.compass({ title: 'Tám hướng chính', note: 'Hướng Bắc thường ở phía trên bản đồ.' }), caption: 'Bốn hướng chính và bốn hướng phụ.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Trên – Bắc, dưới – Nam, phải – Đông, trái – Tây.</div>` }
  ],
  summary: 'Bản đồ là hình ảnh thu nhỏ, tương đối chính xác bề mặt Trái Đất lên mặt phẳng, luôn có sai số. Có nhiều lưới kinh, vĩ tuyến: hình chữ nhật (Mec-ca-to), hình nón, phương vị. Trên bản đồ có lưới, đầu trên kinh tuyến chỉ hướng Bắc, đầu phải vĩ tuyến chỉ hướng Đông; ngoài bốn hướng chính còn có bốn hướng phụ.',
  examples: [
    { title: 'Phương hướng', problem: 'Từ Hà Nội đi TP Hồ Chí Minh là hướng nào (gần đúng)?', solution: 'Hướng Nam (lệch Đông Nam).' },
    { title: 'Sai số', problem: 'Vì sao đảo Grơn-len trên bản đồ Mec-ca-to trông rất lớn?', solution: 'Lưới hình chữ nhật làm diện tích vùng gần cực bị phóng đại.' },
    { title: 'Tính góc', problem: 'Hướng Bắc là 0°, Đông là 90°. Hướng Nam là bao nhiêu độ?', solution: '180°.' }
  ],
  exercises: [
    { question: 'Nêu hướng ngược với hướng Đông Bắc.', hints: ['Đông ↔ Tây.', 'Bắc ↔ Nam.'], solution: 'Tây Nam.' },
    { question: 'Mỗi hướng (8 hướng) cách nhau bao nhiêu độ?', hints: ['Vòng tròn 360°.', '360 : 8.'], solution: '45°.' },
    { question: 'Vì sao bản đồ luôn có sai số?', hints: ['Trái Đất hình gì?', 'Giấy hình gì?'], solution: 'Vì phải chuyển bề mặt cong của Trái Đất lên mặt phẳng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trên bản đồ có lưới kinh, vĩ tuyến, đầu trên kinh tuyến chỉ hướng Bắc.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Đầu bên trái vĩ tuyến chỉ hướng:', options: ['Tây', 'Đông', 'Bắc', 'Nam'], answer: 0, explain: 'Tây.' },
    { type: 'short', q: '8 hướng cách đều nhau. Mỗi hướng cách nhau bao nhiêu độ?', answer: '45', unit: '°', calc: '360/8', explain: '45.' },
    { type: 'mcq', q: 'Lưới kinh vĩ tuyến là các đường thẳng vuông góc:', options: ['Mec-ca-to (hình chữ nhật)', 'Hình nón', 'Phương vị', 'Không có'], answer: 0, explain: 'Mec-ca-to.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bản đồ thể hiện chính xác tuyệt đối bề mặt Trái Đất.', answer: false, explain: 'Luôn có sai số.' },
    { type: 'short', q: 'Hướng Bắc 0°, Đông 90°. Hướng Tây bao nhiêu độ?', answer: '270', unit: '°', calc: '90*3', explain: '270.' },
    { type: 'mcq', q: 'Hướng ngược với Tây Bắc:', options: ['Đông Nam', 'Đông Bắc', 'Tây Nam', 'Nam'], answer: 0, explain: 'Đông Nam.' },
    { type: 'mcq', q: 'Bản đồ không có lưới kinh vĩ tuyến thì xác định hướng dựa vào:', options: ['Mũi tên chỉ hướng Bắc', 'Màu sắc', 'Tên bản đồ', 'Tỉ lệ'], answer: 0, explain: 'Mũi tên Bắc.' }
  ]
});
})();
