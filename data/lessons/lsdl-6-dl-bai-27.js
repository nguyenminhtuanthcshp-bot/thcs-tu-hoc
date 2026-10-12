/* LS&ĐL 6 – Địa lí, Bài 27. Dân số và sự phân bố dân cư trên thế giới. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-27', {
  objectives: [
    'Đọc được biểu đồ quy mô dân số thế giới.',
    'Trình bày và giải thích được đặc điểm phân bố dân cư trên thế giới.',
    'Tính được mật độ dân số.',
    'Kể được tên một số thành phố đông dân trên thế giới.'
  ],
  intro: 'Theo Liên hợp quốc, ngày 15/11/2022 dân số thế giới chạm mốc <b>8 tỉ người</b>. Con người sống ở đâu, và vì sao có nơi chen chúc, có nơi gần như không một bóng người?',
  steps: [
    { title: 'Quy mô dân số', html: `<p>Dân số thế giới tăng nhanh trong khoảng 200 năm gần đây:</p>`,
      svg: S.table({ title: 'Các mốc dân số thế giới (ước tính của Liên hợp quốc)', head: ['Dân số đạt', 'Năm (khoảng)'], rows: [['1 tỉ', '1804'], ['2 tỉ', '1927'], ['3 tỉ', '1960'], ['4 tỉ', '1974'], ['5 tỉ', '1987'], ['6 tỉ', '1999'], ['7 tỉ', '2011'], ['8 tỉ', '2022 (ngày 15/11)']], colW: 250 }), caption: 'Mỗi tỉ người sau tăng nhanh hơn trước.' },
    { title: 'Phân bố dân cư', html: `<ul><li>Dân cư phân bố <b>không đều</b>: đông ở đồng bằng, ven biển, khí hậu ôn hoà (Đông Á, Nam Á, Tây Âu); thưa ở hoang mạc, vùng cực, núi cao, rừng rậm.</li><li>Nguyên nhân: điều kiện tự nhiên (khí hậu, đất, nước) và kinh tế – xã hội (lịch sử khai thác, trình độ phát triển).</li></ul>` },
    { title: 'Mật độ dân số', html: `<p><b>Mật độ dân số</b> = Số dân : Diện tích (người/km²).</p>`,
      svg: S.table({ title: 'Ví dụ tính mật độ (số liệu minh hoạ)', head: ['Vùng (minh hoạ)', 'Dân số / Diện tích → Mật độ'], rows: [['Vùng A', '2 000 000 người / 1 000 km² → 2 000'], ['Vùng B', '500 000 người / 5 000 km² → 100'], ['Vùng C', '30 000 người / 10 000 km² → 3']], colW: 250 }), caption: 'Việt Nam đạt mốc 100 triệu dân năm 2023.' },
    { title: 'Thành phố đông dân', html: `<p>Nhiều siêu đô thị trên 10 triệu dân như Tô-ky-ô, Gia-các-ta, Thượng Hải, Niu Đê-li, Xao Pao-lô… Ở Việt Nam: Hà Nội, TP Hồ Chí Minh.</p>
      <div class="box key">Mật độ = Dân số : Diện tích.</div>` }
  ],
  summary: 'Dân số thế giới tăng nhanh, đạt 8 tỉ người ngày 15/11/2022 (Liên hợp quốc). Dân cư phân bố không đều: đông ở đồng bằng, ven biển, nơi khí hậu thuận lợi; thưa ở hoang mạc, vùng cực, núi cao. Mật độ dân số = số dân : diện tích (người/km²). Trên thế giới có nhiều siêu đô thị trên 10 triệu dân.',
  examples: [
    { title: 'Mật độ', problem: 'Vùng có 2 000 000 người, diện tích 1 000 km². Mật độ?', solution: '2 000 người/km².' },
    { title: 'Thời gian', problem: 'Từ mốc 7 tỉ (2011) đến 8 tỉ (2022) mất bao nhiêu năm?', solution: '11 năm.' },
    { title: 'So sánh', problem: 'Từ 1 tỉ (1804) đến 2 tỉ (1927) mất bao nhiêu năm?', solution: '123 năm – lâu hơn nhiều.' }
  ],
  exercises: [
    { question: 'Tỉnh có 1 500 000 người, diện tích 3 000 km². Mật độ?', hints: ['Chia dân số cho diện tích.', '1 500 000 : 3 000.'], solution: '500 người/km².' },
    { question: 'Từ 3 tỉ (1960) đến 6 tỉ (1999) mất bao nhiêu năm?', hints: ['1999 − 1960.', 'Gần 40.'], solution: '39 năm.' },
    { question: 'Vì sao hoang mạc dân cư thưa thớt?', hints: ['Nước.', 'Khí hậu.'], solution: 'Khô hạn, thiếu nước, khí hậu khắc nghiệt, khó sản xuất.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dân cư thế giới phân bố không đều.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: '2 000 000 người, 1 000 km². Mật độ (người/km²)?', answer: '2000', answerText: '2 000', unit: 'người/km²', calc: '2000000/1000', explain: '2 000.' },
    { type: 'mcq', q: 'Dân số thế giới đạt 8 tỉ vào năm:', options: ['2022', '2011', '1999', '2030'], answer: 0, explain: '15/11/2022.' },
    { type: 'short', q: 'Từ 2011 đến 2022 là bao nhiêu năm?', answer: '11', unit: 'năm', calc: '2022-2011', explain: '11.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vùng cực là nơi dân cư đông đúc nhất.', answer: false, explain: 'Rất thưa.' },
    { type: 'short', q: '1 500 000 người, 3 000 km². Mật độ?', answer: '500', unit: 'người/km²', calc: '1500000/3000', explain: '500.' },
    { type: 'mcq', q: 'Khu vực đông dân:', options: ['Đông Á, Nam Á', 'Hoang mạc Xa-ha-ra', 'Châu Nam Cực', 'Bắc Cực'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Từ 1804 đến 1927 là bao nhiêu năm?', answer: '123', unit: 'năm', calc: '1927-1804', explain: '123.' }
  ]
});
})();
