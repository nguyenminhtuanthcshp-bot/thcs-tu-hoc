/* LS&ĐL 6 – Địa lí, Bài 14. Thực hành: Đọc lược đồ địa hình tỉ lệ lớn và lát cắt địa hình đơn giản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-14', {
  objectives: [
    'Hiểu được đường đồng mức và cách biểu hiện địa hình bằng đường đồng mức.',
    'Đọc được lược đồ địa hình tỉ lệ lớn: xác định độ cao, sườn dốc, sườn thoải.',
    'Đọc được lát cắt địa hình đơn giản.',
    'Tính được độ chênh cao và khoảng cách trên lát cắt.'
  ],
  intro: 'Nhìn từ trên cao xuống, một quả núi giống như nhiều vòng tròn lồng vào nhau, mỗi vòng là một độ cao. Đó là cách người vẽ bản đồ thể hiện núi đồi bằng <b>đường đồng mức</b>.',
  steps: [
    { title: 'Đường đồng mức', html: `<ul><li>Là đường nối các điểm có cùng độ cao trên bản đồ.</li><li>Các đường càng <b>gần nhau</b> → sườn càng <b>dốc</b>; càng <b>xa nhau</b> → sườn càng <b>thoải</b>.</li><li>Khoảng cao đều: hiệu độ cao giữa hai đường liền nhau (ví dụ 100 m).</li></ul>` },
    { title: 'Lát cắt địa hình', html: `<p>Lát cắt cho thấy hình dáng địa hình theo một đường thẳng (minh hoạ):</p>`,
      svg: S.profile({ title: 'Lát cắt địa hình từ A đến B (minh hoạ)', pts: [[0, 50], [2, 150], [4, 600], [5, 850], [6, 700], [8, 300], [10, 100]], labels: [{ k: 0, t: 'A' }, { k: 5, t: 'Đỉnh 850 m' }, { k: 10, t: 'B' }], hMax: 1000, kStep: 2, note: 'Số liệu minh hoạ; trục ngang: km, trục đứng: m.' }), caption: 'Sườn phía A dốc hơn sườn phía B.' },
    { title: 'Cách đọc lát cắt', html: `<p>Các bước:</p>`,
      svg: S.flowchart({ title: 'Đọc lát cắt', steps: [{ t: 'start', s: 'Xác định A, B' }, { t: 'proc', s: 'Đọc độ cao cao nhất' }, { t: 'proc', s: 'So sánh độ dốc' }, { t: 'end', s: 'Tính khoảng cách' }] }), caption: 'Dùng tỉ lệ ngang để tính khoảng cách.' },
    { title: 'Tính toán', html: `<div class="box key">Độ chênh = cao − thấp. Khoảng cách thực = khoảng cách trên lát cắt × mẫu số tỉ lệ.</div>` }
  ],
  summary: 'Đường đồng mức nối các điểm cùng độ cao; các đường gần nhau thì sườn dốc, xa nhau thì sườn thoải. Lát cắt địa hình thể hiện độ cao theo một tuyến; khi đọc cần xác định điểm đầu, cuối, độ cao lớn nhất, độ dốc các sườn và tính khoảng cách theo tỉ lệ.',
  examples: [
    { title: 'Độ chênh', problem: 'Trên lát cắt, A cao 50 m, đỉnh 850 m. Chênh lệch?', solution: '850 − 50 = 800 m.' },
    { title: 'So sánh sườn', problem: 'Từ A đến đỉnh dài 5 km, từ đỉnh đến B dài 5 km; B cao 100 m. Sườn nào dốc hơn?', solution: 'Sườn A tăng 800 m, sườn B giảm 750 m trên cùng 5 km → sườn A dốc hơn một chút; nhìn đồ thị thấy đoạn 2–5 km dốc nhất.' },
    { title: 'Đếm đường đồng mức', problem: 'Từ 0 m đến 800 m, khoảng cao đều 100 m. Có bao nhiêu đường đồng mức (kể cả 0 m)?', solution: '800 : 100 + 1 = 9 đường.' }
  ],
  exercises: [
    { question: 'Đường đồng mức dày đặc ở sườn Đông, thưa ở sườn Tây. Sườn nào dốc hơn?', hints: ['Gần nhau → ?', 'Dày đặc là gần nhau.'], solution: 'Sườn Đông dốc hơn.' },
    { question: 'Lát cắt tỉ lệ ngang 1 : 50 000, đoạn AB dài 20 cm. Thực tế bao nhiêu km?', hints: ['20 × 50 000 cm.', 'Đổi ra km.'], solution: '10 km.' },
    { question: 'Đỉnh 850 m, B 100 m. Độ chênh?', hints: ['Lấy cao trừ thấp.', '850 − 100.'], solution: '750 m.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các đường đồng mức càng gần nhau thì sườn càng dốc.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'A cao 50 m, đỉnh 850 m. Chênh lệch (m)?', answer: '800', unit: 'm', calc: '850-50', explain: '800.' },
    { type: 'mcq', q: 'Đường đồng mức là đường nối các điểm có cùng:', options: ['Độ cao', 'Nhiệt độ', 'Lượng mưa', 'Dân số'], answer: 0, explain: 'Độ cao.' },
    { type: 'short', q: 'Từ 0 m đến 800 m, khoảng cao đều 100 m. Số đường đồng mức (kể cả 0 m)?', answer: '9', unit: 'đường', calc: '800/100+1', explain: '9.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đường đồng mức thưa thể hiện sườn dốc đứng.', answer: false, explain: 'Sườn thoải.' },
    { type: 'short', q: 'Tỉ lệ 1 : 50 000, đoạn 20 cm. Thực tế bao nhiêu km?', answer: '10', unit: 'km', calc: '20*50000/100000', explain: '10.' },
    { type: 'mcq', q: 'Lát cắt địa hình cho biết:', options: ['Hình dáng, độ cao địa hình theo một tuyến', 'Dân số các vùng', 'Lượng mưa', 'Ranh giới hành chính'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Đỉnh 850 m, B 100 m. Độ chênh (m)?', answer: '750', unit: 'm', calc: '850-100', explain: '750.' }
  ]
});
})();
