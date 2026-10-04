/* KHTN 8 – Bài 46. Cân bằng tự nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-46', {
  objectives: [
    'Phát biểu được khái niệm cân bằng tự nhiên.',
    'Nêu được nguyên nhân làm mất cân bằng tự nhiên.',
    'Trình bày được các biện pháp bảo vệ, duy trì cân bằng tự nhiên.'
  ],
  intro: 'Khi số lượng sâu hại tăng lên, số chim ăn sâu cũng tăng theo; khi sâu giảm, chim cũng giảm. Nhờ những mối quan hệ như vậy, tự nhiên luôn có xu hướng tự điều chỉnh. Điều gì xảy ra khi sự điều chỉnh đó bị phá vỡ?',
  steps: [
    { title: 'Khái niệm cân bằng tự nhiên', html: `<p><b>Cân bằng tự nhiên</b> là trạng thái ổn định tự nhiên của các quần thể sinh vật trong quần xã, hệ sinh thái: số lượng cá thể mỗi quần thể dao động quanh một mức nhất định, phù hợp với khả năng cung cấp nguồn sống của môi trường.</p>
      <p>Cơ chế: <b>khống chế sinh học</b> – số lượng cá thể của quần thể này bị số lượng cá thể của quần thể khác kìm hãm (ví dụ: chim sâu – sâu hại; mèo – chuột).</p>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 60], [1, 90], [2, 110], [3, 80], [4, 55], [5, 75], [6, 105], [7, 95], [8, 60]], color: '#16a34a', dots: true }, { pts: [[0, 20], [1, 25], [2, 38], [3, 42], [4, 30], [5, 22], [6, 30], [7, 40], [8, 36]], color: '#dc2626', dots: true }], xmax: 9.5, ymax: 120, xstep: 1, ystep: 20, xlabel: 'Năm', ylabel: 'Số cá thể', label: 'Số lượng sâu (xanh) và chim sâu (đỏ) dao động quanh mức cân bằng (số liệu minh hoạ)' }), caption: 'Đường xanh: quần thể sâu; đường đỏ: quần thể chim ăn sâu (số liệu minh hoạ).' },
    { title: 'Ý nghĩa của cân bằng tự nhiên', html: `<ul><li>Giúp các quần thể, quần xã tồn tại và phát triển ổn định; duy trì đa dạng sinh học.</li><li>Đảm bảo chu trình vật chất và dòng năng lượng trong hệ sinh thái diễn ra bình thường.</li><li>Mang lại lợi ích cho con người: hạn chế dịch hại, giữ nguồn tài nguyên (gỗ, thuỷ sản…), điều hoà khí hậu.</li></ul>
      <div class="box tip">Ví dụ: ở ruộng lúa có nhiều ếch, nhện, chim sâu thì sâu rầy ít khi bùng phát thành dịch.</div>` },
    { title: 'Nguyên nhân mất cân bằng tự nhiên', html: `<ul><li><b>Tự nhiên</b>: thiên tai (bão, lũ, cháy rừng, hạn hán), dịch bệnh.</li><li><b>Con người</b>: phá rừng, săn bắt động vật hoang dã, khai thác quá mức, gây ô nhiễm môi trường, du nhập loài ngoại lai (ví dụ: ốc bươu vàng, cây mai dương gây hại)…</li></ul>`,
      svg: S.flow({ items: ['Săn bắt quá mức chim ăn sâu', 'Chim giảm mạnh', 'Sâu hại tăng nhanh', 'Mùa màng bị phá hoại'], size: 13, label: 'Ví dụ mất cân bằng tự nhiên do con người' }) },
    { title: 'Bảo vệ cân bằng tự nhiên', html: `<ul><li>Bảo vệ và trồng rừng; chống săn bắt, buôn bán động vật hoang dã.</li><li>Xây dựng khu bảo tồn, vườn quốc gia.</li><li>Khai thác tài nguyên hợp lí; hạn chế thuốc trừ sâu hoá học, ưu tiên biện pháp sinh học (dùng thiên địch).</li><li>Kiểm soát loài ngoại lai; giảm ô nhiễm; tuyên truyền, giáo dục.</li></ul>` }
  ],
  summary: 'Cân bằng tự nhiên là trạng thái ổn định của các quần thể trong quần xã, số lượng cá thể dao động quanh một mức phù hợp nguồn sống, nhờ khống chế sinh học. Nguyên nhân mất cân bằng: thiên tai, dịch bệnh và nhất là hoạt động của con người. Cần bảo vệ rừng, chống săn bắt, khai thác hợp lí, dùng thiên địch.',
  examples: [
    { title: 'Khống chế sinh học', problem: 'Giải thích vì sao khi sâu tăng thì chim sâu cũng tăng và sau đó sâu lại giảm.', solution: 'Sâu tăng ⇒ chim có nhiều thức ăn nên tăng số lượng ⇒ chim ăn nhiều sâu ⇒ sâu giảm ⇒ chim thiếu thức ăn giảm theo… Hai quần thể dao động quanh mức cân bằng.' },
    { title: 'Đọc đồ thị', problem: 'Theo đồ thị minh hoạ, số sâu lớn nhất và nhỏ nhất là bao nhiêu? Chênh lệch bao nhiêu?', solution: 'Lớn nhất 110, nhỏ nhất 55; chênh lệch 110 − 55 = 55 cá thể.' },
    { title: 'Thiên địch', problem: 'Vì sao dùng ong mắt đỏ diệt sâu đục thân lúa tốt hơn phun thuốc hoá học?', solution: 'Ong mắt đỏ chỉ tiêu diệt sâu hại, không gây ô nhiễm môi trường, không diệt các sinh vật có ích, giữ được cân bằng tự nhiên.' }
  ],
  exercises: [
    { question: 'Kể ba hoạt động của con người làm mất cân bằng tự nhiên.', hints: ['Liên quan đến rừng.', 'Liên quan đến động vật.'], solution: 'Phá rừng; săn bắt động vật hoang dã; du nhập loài ngoại lai; gây ô nhiễm…' },
    { question: 'Một cánh đồng có 400 con chuột. Sau khi thả mèo, số chuột giảm 35 % (số liệu minh hoạ). Tính số chuột còn lại.', hints: ['Tính 35 % của 400.', 'Lấy 400 trừ đi.'], solution: '400 · 35 % = 140; còn 400 − 140 = 260 con.' },
    { question: 'Nêu ba biện pháp bảo vệ cân bằng tự nhiên.', hints: ['Bảo vệ nơi sống.', 'Biện pháp sinh học.'], solution: 'Bảo vệ, trồng rừng; xây dựng khu bảo tồn; dùng thiên địch thay thuốc hoá học; khai thác hợp lí.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở trạng thái cân bằng tự nhiên, số lượng cá thể mỗi quần thể dao động quanh một mức ổn định.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hiện tượng số lượng cá thể của quần thể này bị số lượng cá thể của quần thể khác kìm hãm gọi là:', options: ['cạnh tranh', 'khống chế sinh học', 'kí sinh', 'cộng sinh'], answer: 1, explain: 'Khống chế sinh học.' },
    { type: 'short', q: 'Theo đồ thị minh hoạ, số sâu lớn nhất là 110 và nhỏ nhất là 55. Chênh lệch là bao nhiêu cá thể?', answer: '55', unit: 'cá thể', calc: '110-55', explain: '110 − 55 = 55.' },
    { type: 'mcq', q: 'Hoạt động nào giúp duy trì cân bằng tự nhiên?', options: ['Săn bắt chim sâu', 'Dùng thiên địch diệt sâu hại', 'Phá rừng làm nương', 'Thả ốc bươu vàng'], answer: 1, explain: 'Biện pháp sinh học.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỉ có thiên tai mới làm mất cân bằng tự nhiên.', answer: false, explain: 'Con người là nguyên nhân quan trọng.' },
    { type: 'short', q: 'Có 400 con chuột; sau khi thả mèo, số chuột giảm 35 %. Còn lại bao nhiêu con?', answer: '260', unit: 'con', calc: '400-400*35/100', explain: '400 − 140 = 260 con.' },
    { type: 'short', q: 'Một quần thể chim sâu tăng từ 20 lên 38 con. Tăng bao nhiêu phần trăm?', answer: '90', unit: '%', calc: '(38-20)/20*100', explain: '(38 − 20) : 20 · 100 = 90 %.' },
    { type: 'mcq', q: 'Loài nào là loài ngoại lai gây hại ở Việt Nam?', options: ['Ốc bươu vàng', 'Cá chép', 'Trâu', 'Lúa'], answer: 0, explain: 'Ốc bươu vàng phá hoại lúa.' }
  ]
});
})();
