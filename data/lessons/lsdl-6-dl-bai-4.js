/* LS&ĐL 6 – Địa lí, Bài 4. Kí hiệu và bảng chú giải bản đồ. Tìm đường đi trên bản đồ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-4', {
  objectives: [
    'Đọc được các kí hiệu bản đồ và chú giải bản đồ hành chính, bản đồ địa hình.',
    'Phân biệt các loại và dạng kí hiệu bản đồ.',
    'Biết tìm đường đi trên bản đồ.',
    'Tính được quãng đường dựa vào tỉ lệ khi tìm đường.'
  ],
  intro: 'Một ngôi sao đỏ, một đường kẻ xanh lượn quanh, một vùng tô màu nâu… Mỗi hình vẽ nhỏ trên bản đồ đều có ý nghĩa. Muốn hiểu, em phải đọc <b>bảng chú giải</b>.',
  steps: [
    { title: 'Các loại kí hiệu', html: `<p>Có ba loại kí hiệu:</p>`,
      svg: S.table({ title: 'Ba loại kí hiệu bản đồ', head: ['Loại kí hiệu', 'Ví dụ thể hiện'], rows: [['Kí hiệu điểm', 'Thủ đô, sân bay, mỏ khoáng sản'], ['Kí hiệu đường', 'Sông, đường giao thông, ranh giới'], ['Kí hiệu diện tích', 'Vùng trồng lúa, rừng, hồ']], colW: 250 }), caption: 'Dạng kí hiệu: hình học, chữ, tượng hình.' },
    { title: 'Bảng chú giải', html: `<p>Bảng chú giải giải thích ý nghĩa các kí hiệu; thường đặt ở góc bản đồ. Trên bản đồ địa hình, độ cao thể hiện bằng <b>thang màu</b> (xanh lá – đồng bằng, vàng, nâu – núi cao) hoặc <b>đường đồng mức</b>.</p>` },
    { title: 'Tìm đường đi', html: `<p>Các bước:</p>`,
      svg: S.flowchart({ title: 'Tìm đường trên bản đồ', steps: [{ t: 'start', s: 'Điểm đi và đến' }, { t: 'proc', s: 'Xác định hướng' }, { t: 'proc', s: 'Chọn đường phù hợp' }, { t: 'end', s: 'Tính quãng đường' }] }), caption: 'Dựa vào tỉ lệ để tính quãng đường.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Đọc chú giải trước – đọc bản đồ sau.</div>` }
  ],
  summary: 'Kí hiệu bản đồ gồm kí hiệu điểm, đường, diện tích; dạng kí hiệu: hình học, chữ, tượng hình. Bảng chú giải giải thích các kí hiệu. Độ cao thể hiện bằng thang màu hoặc đường đồng mức. Tìm đường: xác định điểm đi, đến, hướng, chọn đường và tính quãng đường theo tỉ lệ.',
  examples: [
    { title: 'Phân loại', problem: 'Con sông được thể hiện bằng loại kí hiệu nào?', solution: 'Kí hiệu đường.' },
    { title: 'Quãng đường', problem: 'Bản đồ 1 : 50 000, đường đi gồm hai đoạn 3 cm và 5 cm. Quãng đường thực tế?', solution: '(3 + 5) × 50 000 = 400 000 cm = 4 km.' },
    { title: 'Thời gian', problem: 'Quãng đường 4 km, đi xe đạp 12 km/giờ. Mất bao nhiêu phút?', solution: '4 : 12 = 1/3 giờ = 20 phút.' }
  ],
  exercises: [
    { question: 'Vùng trồng lúa thể hiện bằng loại kí hiệu nào?', hints: ['Chiếm cả một vùng.', 'Diện…'], solution: 'Kí hiệu diện tích.' },
    { question: 'Bản đồ 1 : 100 000, đường đi 2 cm + 3,5 cm. Thực tế bao nhiêu km?', hints: ['Cộng: 5,5 cm.', '1 cm = 1 km.'], solution: '5,5 km.' },
    { question: 'Đi 6 km với vận tốc 12 km/giờ. Mất bao nhiêu phút?', hints: ['6 : 12 giờ.', 'Đổi ra phút.'], solution: '30 phút.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảng chú giải giúp hiểu ý nghĩa các kí hiệu bản đồ.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Sân bay thường thể hiện bằng kí hiệu:', options: ['Điểm', 'Đường', 'Diện tích', 'Không thể hiện'], answer: 0, explain: 'Điểm.' },
    { type: 'short', q: 'Bản đồ 1 : 50 000, đường 3 cm + 5 cm. Thực tế bao nhiêu km?', answer: '4', unit: 'km', calc: '(3+5)*50000/100000', explain: '4.' },
    { type: 'mcq', q: 'Ranh giới tỉnh là kí hiệu:', options: ['Đường', 'Điểm', 'Diện tích', 'Chữ'], answer: 0, explain: 'Đường.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trên bản đồ địa hình, màu nâu thường thể hiện đồng bằng thấp.', answer: false, explain: 'Nâu: núi cao.' },
    { type: 'short', q: 'Đi 4 km với vận tốc 12 km/giờ mất bao nhiêu phút?', answer: '20', unit: 'phút', calc: '4/12*60', explain: '20.' },
    { type: 'short', q: 'Bản đồ 1 : 100 000, đường 2 cm + 3,5 cm. Thực tế bao nhiêu km?', answer: '5.5', answerText: '5,5', unit: 'km', calc: '(2+3.5)*100000/100000', explain: '5,5.' },
    { type: 'mcq', q: 'Dạng kí hiệu vẽ hình chiếc máy bay là:', options: ['Tượng hình', 'Hình học', 'Chữ', 'Đường'], answer: 0, explain: 'Tượng hình.' }
  ]
});
})();
