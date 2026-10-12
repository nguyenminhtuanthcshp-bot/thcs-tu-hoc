/* Tin học 7 – Bài 15. Thuật toán tìm kiếm nhị phân. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-15', {
  objectives: [
    'Giải thích được ý tưởng tìm kiếm nhị phân và điều kiện dãy phải được sắp xếp.',
    'Mô phỏng được từng bước tìm kiếm nhị phân; xác định đúng phần tử giữa ở mỗi bước.',
    'So sánh được số lần so sánh của tìm kiếm nhị phân và tìm kiếm tuần tự.'
  ],
  intro: 'Trò chơi “đoán số từ 1 đến 100”: nếu mỗi lần đoán đều được gợi ý “lớn hơn” hay “nhỏ hơn”, cách thông minh nhất là đoán số ở giữa. Đó là ý tưởng của <b>tìm kiếm nhị phân</b>.',
  steps: [
    { title: 'Điều kiện và ý tưởng', html: `<p>Tìm kiếm nhị phân chỉ dùng cho <b>dãy đã sắp xếp</b>. Mỗi bước: so sánh giá trị cần tìm với <b>phần tử ở giữa</b> vùng đang xét:</p><ul><li>Bằng → tìm thấy.</li><li>Nhỏ hơn → chỉ tìm tiếp ở <b>nửa trước</b>.</li><li>Lớn hơn → chỉ tìm tiếp ở <b>nửa sau</b>.</li></ul><p>Vùng tìm kiếm thu hẹp một nửa sau mỗi bước, đến khi tìm thấy hoặc vùng rỗng.</p>
      <p>Vị trí giữa = phần nguyên của (đầu + cuối) : 2.</p>` },
    { title: 'Mô phỏng: tìm 23', html: `<p>Dãy đã sắp xếp tăng dần (10 phần tử): 2, 5, 8, 12, 16, 23, 38, 45, 56, 72.</p>`,
      svg: S.arraySteps({ title: 'Tìm 23 bằng tìm kiếm nhị phân', steps: [{ vals: [2, 5, 8, 12, 16, 23, 38, 45, 56, 72], hl: [4], note: 'Giữa (1+10):2 → vị trí 5: 16 < 23' }, { vals: [2, 5, 8, 12, 16, 23, 38, 45, 56, 72], hl: [7], dim: [0, 1, 2, 3, 4], note: 'Giữa (6+10):2 = 8: 45 > 23' }, { vals: [2, 5, 8, 12, 16, 23, 38, 45, 56, 72], ok: [5], dim: [0, 1, 2, 3, 4, 7, 8, 9], note: 'Giữa (6+7):2 → 6: 23 = 23, tìm thấy' }], legend: 'Ô xám: đã loại; ô vàng: phần tử giữa; ô xanh: tìm thấy' }), caption: 'Chỉ 3 lần so sánh (tìm kiếm tuần tự cần 6 lần).' },
    { title: 'Sơ đồ khối', html: `<p>Lặp: tính vị trí giữa, so sánh, thu hẹp vùng.</p>`,
      svg: S.flowchart({ title: 'Tìm kiếm nhị phân (rút gọn)', steps: [{ t: 'start', s: 'Bắt đầu' }, { t: 'proc', s: 'Vùng xét: cả dãy' }, { t: 'loop', s: 'Chưa thấy, còn vùng xét?', body: ['So sánh với phần tử giữa', 'Bỏ nửa không chứa giá trị'] }, { t: 'io', s: 'Thông báo kết quả' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Mỗi vòng lặp bỏ đi một nửa vùng tìm kiếm.' },
    { title: 'Nhanh đến mức nào?', html: `<p>Mỗi bước loại khoảng một nửa. Với dãy 16 phần tử, vùng giảm 16 → 8 → 4 → 2 → 1: nhiều nhất <b>5</b> lần so sánh. Với 1 000 phần tử chỉ cần nhiều nhất <b>10</b> lần (vì 2<sup>10</sup> = 1 024), trong khi tuần tự có thể cần 1 000 lần.</p>`,
      svg: S.bar({ title: 'Số lần so sánh nhiều nhất', cats: ['16 phần tử', '100', '1 000'], series: [{ name: 'Tuần tự', values: [16, 100, 1000] }, { name: 'Nhị phân', values: [5, 7, 10] }], width: 520, height: 280 }), caption: 'Dãy càng dài, tìm kiếm nhị phân càng có lợi.' }
  ],
  summary: 'Tìm kiếm nhị phân dùng cho dãy đã sắp xếp: so sánh với phần tử giữa (vị trí = phần nguyên (đầu + cuối) : 2), bằng thì dừng, nhỏ hơn tìm nửa trước, lớn hơn tìm nửa sau. Mỗi bước loại một nửa, nên nhanh hơn nhiều so với tìm kiếm tuần tự (1 000 phần tử chỉ cần tối đa 10 lần).',
  examples: [
    { title: 'Mô phỏng', problem: 'Tìm 56 trong dãy ở bước 2.', solution: 'Giữa vị trí 5 (16) < 56 → xét 6–10; giữa 8 (45) < 56 → xét 9–10; giữa 9 (56) = 56 → tìm thấy sau 3 lần.' },
    { title: 'Không tìm thấy', problem: 'Tìm 10 trong dãy 2, 5, 8, 12, 16.', solution: 'Giữa 3 (8) < 10 → xét 4–5; giữa 4 (12) > 10 → xét 4–3: vùng rỗng → không tìm thấy (2 lần so sánh).' },
    { title: 'Điều kiện', problem: 'Có dùng tìm kiếm nhị phân cho dãy 9, 2, 7, 4 được không?', solution: 'Không, vì dãy chưa sắp xếp. Phải sắp xếp trước hoặc dùng tìm kiếm tuần tự.' }
  ],
  exercises: [
    { question: 'Dãy 3, 6, 9, 14, 20, 25, 31. Mô phỏng tìm 25.', hints: ['Giữa của 1–7 là vị trí 4.', '14 < 25 → xét 5–7, giữa là 6.'], solution: 'Vị trí 4 (14) < 25 → xét 5–7; vị trí 6 (25) = 25 → tìm thấy sau 2 lần so sánh.' },
    { question: 'Với dãy 64 phần tử, tìm kiếm nhị phân cần nhiều nhất bao nhiêu lần so sánh?', hints: ['64 → 32 → 16 → … → 1.', 'Đếm số vùng đến khi còn 1.'], solution: '64, 32, 16, 8, 4, 2, 1: tối đa 7 lần.' },
    { question: 'Vì sao từ điển giấy được sắp xếp theo vần chữ cái giúp tra từ nhanh?', hints: ['Mở ở giữa rồi làm gì?', 'Liên hệ tìm kiếm nhị phân.'], solution: 'Nhờ đã sắp xếp, ta mở khoảng giữa, so sánh chữ cái rồi bỏ đi một nửa, giống tìm kiếm nhị phân.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tìm kiếm nhị phân chỉ áp dụng cho dãy đã sắp xếp.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Ở mỗi bước, tìm kiếm nhị phân so sánh với:', options: ['phần tử đầu', 'phần tử cuối', 'phần tử ở giữa vùng đang xét', 'phần tử lớn nhất'], answer: 2, explain: 'Phần tử giữa.' },
    { type: 'short', q: 'Vùng xét từ vị trí 1 đến 9. Vị trí giữa là bao nhiêu?', answer: '5', calc: 'Math.floor((1+9)/2)', explain: '(1 + 9) : 2 = 5.' },
    { type: 'short', q: 'Vùng xét từ vị trí 6 đến 9. Vị trí giữa (lấy phần nguyên) là bao nhiêu?', answer: '7', calc: 'Math.floor((6+9)/2)', explain: '15 : 2 = 7,5 → 7.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu giá trị cần tìm lớn hơn phần tử giữa (dãy tăng dần) thì tìm tiếp ở nửa trước.', answer: false, explain: 'Tìm ở nửa sau.' },
    { type: 'short', q: 'Dãy 32 phần tử: tìm kiếm nhị phân cần nhiều nhất bao nhiêu lần so sánh?', answer: '6', unit: 'lần', calc: 'Math.floor(Math.log2(32))+1', explain: '32→16→8→4→2→1: 6 lần.' },
    { type: 'mcq', q: 'Dãy 1, 4, 7, 10, 13. Tìm 7: số lần so sánh là:', options: ['1', '2', '3', '5'], answer: 0, explain: 'Giữa là vị trí 3 = 7.' },
    { type: 'mcq', q: 'Với dãy rất dài đã sắp xếp, thuật toán nào thường nhanh hơn?', options: ['Tuần tự', 'Nhị phân', 'Như nhau', 'Không xác định'], answer: 1, explain: 'Nhị phân.' }
  ]
});
})();
