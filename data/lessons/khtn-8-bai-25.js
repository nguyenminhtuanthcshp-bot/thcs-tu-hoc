/* KHTN 8 – Bài 25. Thực hành đo cường độ dòng điện và hiệu điện thế. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-25', {
  objectives: [
    'Mắc được mạch điện đơn giản theo sơ đồ, có ampe kế và vôn kế.',
    'Đo được cường độ dòng điện qua bóng đèn và hiệu điện thế giữa hai đầu bóng đèn.',
    'Rút ra được nhận xét: hiệu điện thế giữa hai đầu đèn càng lớn thì cường độ dòng điện qua đèn càng lớn.',
    'Thực hiện đúng các quy tắc an toàn khi làm thực hành điện.'
  ],
  intro: 'Ở bài trước em đã biết ampe kế, vôn kế là gì. Hôm nay, em sẽ tự lắp mạch, đọc số chỉ và tìm ra mối liên hệ giữa hiệu điện thế và cường độ dòng điện qua một bóng đèn.',
  steps: [
    { title: 'Chuẩn bị', html: `<p>Dụng cụ: nguồn điện (2 – 4 pin 1,5 V hoặc biến áp nguồn), bóng đèn 6 V, công tắc, ampe kế (GHĐ 1 A), vôn kế (GHĐ 6 V), dây nối.</p>
      <div class="box tip">Chỉ đóng công tắc khi đã kiểm tra lại mạch; ngắt công tắc ngay sau khi đọc xong số chỉ để tiết kiệm pin.</div>` },
    { title: 'Mắc mạch theo sơ đồ', html: `<ol><li>Mắc nối tiếp: nguồn điện – công tắc – ampe kế – bóng đèn.</li><li>Mắc vôn kế song song với hai đầu bóng đèn.</li><li>Kiểm tra các chốt (+) của ampe kế, vôn kế nối về phía cực dương của nguồn.</li></ol>`,
      svg: S.circuit({ items: ['battery', 'switch', 'ammeter', 'lamp'], voltmeter: 3, closed: true, arrows: true, labels: true, label: 'Sơ đồ mạch điện thực hành' }) },
    { title: 'Tiến hành đo', html: `<ol><li>Dùng 1 pin: đóng công tắc, đọc số chỉ ampe kế (I) và vôn kế (U), ghi vào bảng. Ngắt công tắc.</li><li>Lặp lại với 2 pin, 3 pin, 4 pin (ghép nối tiếp).</li><li>Quan sát độ sáng của đèn trong mỗi lần đo.</li></ol>`,
      svg: S.row([{ svg: S.meter({ kind: 'A', max: 1, step: 0.2, minor: 2, value: 0.3 }), caption: 'Ví dụ số chỉ ampe kế: 0,3 A' }, { svg: S.meter({ kind: 'V', max: 6, step: 1, minor: 2, value: 3 }), caption: 'Ví dụ số chỉ vôn kế: 3 V' }]) },
    { title: 'Kết quả và nhận xét', html: `<p>Bảng kết quả (số liệu minh hoạ):</p>
      <table class="tbl"><tr><th>Số pin</th><th>U (V)</th><th>I (A)</th></tr><tr><td>1</td><td>1,5</td><td>0,18</td></tr><tr><td>2</td><td>3,0</td><td>0,30</td></tr><tr><td>3</td><td>4,5</td><td>0,39</td></tr><tr><td>4</td><td>6,0</td><td>0,47</td></tr></table>
      <p>Nhận xét: hiệu điện thế giữa hai đầu đèn càng lớn thì cường độ dòng điện qua đèn càng lớn, đèn càng sáng.</p>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 0], [1.5, 0.18], [3, 0.3], [4.5, 0.39], [6, 0.47]], dots: true, color: '#2563eb' }], xmax: 6.5, ymax: 0.6, xstep: 1, ystep: 0.1, xlabel: 'U (V)', ylabel: 'I (A)', label: 'Cường độ dòng điện qua đèn theo hiệu điện thế (số liệu minh hoạ)' }) },
    { title: 'Nguồn sai số và an toàn', html: `<ul><li>Pin yếu dần khi dùng lâu làm số chỉ giảm.</li><li>Tiếp xúc ở chốt nối kém làm số chỉ không ổn định.</li><li>Đọc số chỉ khi kim chưa đứng yên hoặc nhìn chếch.</li></ul>
      <p>An toàn: không nối trực tiếp ampe kế vào hai cực nguồn (dòng điện rất lớn làm hỏng ampe kế); không dùng nguồn vượt hiệu điện thế định mức của đèn.</p>` }
  ],
  summary: 'Mạch thực hành: nguồn – công tắc – ampe kế – đèn mắc nối tiếp; vôn kế song song với đèn; chốt (+) về phía cực dương. Tăng số pin (tăng U) thì I qua đèn tăng, đèn sáng hơn.',
  examples: [
    { title: 'Tính hiệu điện thế nguồn', problem: 'Dùng 3 pin 1,5 V ghép nối tiếp. Hiệu điện thế của nguồn bằng bao nhiêu (bỏ qua hao hụt)?', solution: '3 · 1,5 = 4,5 (V).' },
    { title: 'Đọc bảng', problem: 'Theo bảng số liệu minh hoạ, khi U tăng từ 3 V lên 6 V thì I tăng thêm bao nhiêu?', solution: '0,47 − 0,30 = 0,17 (A).' },
    { title: 'Phát hiện lỗi', problem: 'Khi đóng công tắc, kim ampe kế quay ngược chiều. Nguyên nhân là gì?', solution: 'Mắc ngược chốt: chốt (+) của ampe kế đã nối về phía cực âm của nguồn. Cần đổi lại hai dây nối ở ampe kế.' }
  ],
  exercises: [
    { question: 'Vì sao phải ngắt công tắc ngay sau mỗi lần đọc số chỉ?', hints: ['Pin có dùng mãi được không?', 'Dòng điện chạy lâu làm dây và đèn thế nào?'], solution: 'Để tiết kiệm pin (pin không bị yếu nhanh làm sai kết quả) và tránh dây nối, bóng đèn nóng lâu.' },
    { question: 'Ampe kế có GHĐ 1 A và ĐCNN 0,02 A. Kim chỉ vạch thứ 15. Số chỉ là bao nhiêu?', hints: ['Số chỉ = số vạch · ĐCNN.', '15 · 0,02.'], solution: '15 · 0,02 = 0,3 (A).' },
    { question: 'Nếu mắc nhầm vôn kế nối tiếp với bóng đèn thì đèn sẽ thế nào? (Biết vôn kế có điện trở rất lớn.)', hints: ['Vôn kế cản trở dòng điện mạnh.', 'Dòng điện qua đèn khi đó rất nhỏ.'], solution: 'Dòng điện trong mạch rất nhỏ nên đèn gần như không sáng; vôn kế chỉ gần bằng hiệu điện thế của nguồn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong mạch thực hành, vôn kế được mắc song song với bóng đèn.', answer: true, explain: 'Vôn kế đo hiệu điện thế giữa hai đầu đèn.' },
    { type: 'short', q: 'Ghép nối tiếp 4 pin 1,5 V. Hiệu điện thế của nguồn là bao nhiêu V?', answer: '6', unit: 'V', calc: '4*1.5', explain: '4 · 1,5 = 6 V.' },
    { type: 'mcq', q: 'Khi tăng hiệu điện thế giữa hai đầu bóng đèn thì cường độ dòng điện qua đèn:', options: ['giảm', 'không đổi', 'tăng', 'bằng 0'], answer: 2, explain: 'U càng lớn thì I càng lớn.' },
    { type: 'short', q: 'Theo bảng minh hoạ, cường độ dòng điện khi dùng 2 pin là 0,30 A, khi dùng 1 pin là 0,18 A. Chênh lệch là bao nhiêu A?', answer: '0,12', unit: 'A', calc: '0.30-0.18', explain: '0,30 − 0,18 = 0,12 A.' },
    { type: 'mcq', q: 'Kim ampe kế quay ngược chiều khi đóng mạch là do:', options: ['pin hết điện', 'mắc ngược chốt (+), (−) của ampe kế', 'đèn bị cháy', 'dây nối quá dài'], answer: 1, explain: 'Chốt (+) phải nối về phía cực dương của nguồn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể nối trực tiếp hai chốt ampe kế vào hai cực của nguồn điện để đo.', answer: false, explain: 'Dòng điện rất lớn sẽ làm hỏng ampe kế.' },
    { type: 'short', q: 'Ampe kế có ĐCNN 0,02 A, kim chỉ vạch thứ 20. Số chỉ là bao nhiêu A?', answer: '0,4', unit: 'A', calc: '20*0.02', explain: '20 · 0,02 = 0,4 A.' },
    { type: 'short', q: 'Vôn kế có ĐCNN 0,5 V, kim chỉ vạch thứ 9. Số chỉ là bao nhiêu V?', answer: '4,5', unit: 'V', calc: '9*0.5', explain: '9 · 0,5 = 4,5 V.' }
  ]
});
})();
