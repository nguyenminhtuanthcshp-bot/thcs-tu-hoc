/* KHTN 8 – Bài 21. Dòng điện, nguồn điện. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-21', {
  objectives: [
    'Nêu được dòng điện là dòng chuyển dời có hướng của các hạt mang điện; dòng điện trong kim loại là dòng electron tự do.',
    'Nêu được quy ước chiều dòng điện.',
    'Phân biệt được vật dẫn điện và vật cách điện.',
    'Nêu được nguồn điện có khả năng cung cấp năng lượng điện; kể được một số nguồn điện thường dùng.'
  ],
  intro: 'Bật công tắc, đèn sáng gần như ngay lập tức. Điều gì đã chạy trong dây dẫn? Và vì sao đèn pin chỉ sáng khi có pin?',
  steps: [
    { title: 'Dòng điện', html: `<p><b>Dòng điện</b> là dòng chuyển dời có hướng của các hạt mang điện.</p>
      <p>Trong kim loại có rất nhiều <b>electron tự do</b> (tách khỏi nguyên tử, chuyển động hỗn loạn). Khi nối kim loại với nguồn điện, các electron tự do dịch chuyển có hướng tạo thành dòng điện.</p>
      <p>Dòng điện chạy qua các thiết bị làm chúng hoạt động: đèn sáng, quạt quay, nồi cơm nóng lên.</p>` },
    { title: 'Chiều dòng điện', html: `<div class="box key">Quy ước: chiều dòng điện là chiều từ <b>cực dương</b> qua dây dẫn và các thiết bị điện tới <b>cực âm</b> của nguồn điện.</div>
      <p>Trong dây kim loại, electron (mang điện âm) dịch chuyển <b>ngược chiều</b> với chiều quy ước của dòng điện.</p>`,
      svg: S.currentDir(), caption: 'Chiều quy ước của dòng điện ngược với chiều dịch chuyển của electron tự do trong dây kim loại.' },
    { title: 'Vật dẫn điện và vật cách điện', html: `<ul><li><b>Vật dẫn điện</b>: cho dòng điện chạy qua. Ví dụ: kim loại (đồng, nhôm, sắt), dung dịch muối, acid, base, than chì.</li><li><b>Vật cách điện</b>: không cho dòng điện chạy qua. Ví dụ: nhựa, cao su, sứ, thuỷ tinh, gỗ khô, không khí khô.</li></ul>
      <p>Dây điện có lõi bằng đồng (dẫn điện) và vỏ bằng nhựa (cách điện).</p>` },
    { title: 'Nguồn điện', html: `<p><b>Nguồn điện</b> có khả năng cung cấp năng lượng điện cho các thiết bị, duy trì dòng điện trong mạch. Mỗi nguồn điện có hai cực: cực dương (+) và cực âm (−).</p>
      <ul><li>Pin (pin tiểu, pin cúc áo), acquy, pin mặt trời, máy phát điện.</li><li>Trên pin ghi hiệu điện thế giữa hai cực, ví dụ pin tiểu 1,5 V; acquy xe máy 12 V.</li><li>Ghép nối tiếp các pin (cực dương pin này nối với cực âm pin kia) để có nguồn mạnh hơn: 2 pin 1,5 V ghép nối tiếp tạo nguồn 3 V.</li></ul>`,
      svg: S.circuitSymbols({ items: ['cell', 'battery'] }), caption: 'Kí hiệu nguồn điện: vạch dài là cực dương, vạch ngắn là cực âm.' }
  ],
  summary: 'Dòng điện: dòng chuyển dời có hướng của các hạt mang điện; trong kim loại là dòng electron tự do. Chiều quy ước: từ cực (+) qua mạch ngoài đến cực (−), ngược chiều electron. Vật dẫn điện cho dòng điện chạy qua; vật cách điện thì không. Nguồn điện có hai cực, cung cấp năng lượng điện.',
  examples: [
    { title: 'Phân loại', problem: 'Vật nào dẫn điện: dây đồng, thước nhựa, ruột bút chì (than chì), cốc sứ?', solution: 'Dẫn điện: dây đồng, ruột bút chì. Cách điện: thước nhựa, cốc sứ.' },
    { title: 'Ghép pin', problem: 'Một đèn pin dùng 3 pin tiểu 1,5 V ghép nối tiếp. Nguồn điện của đèn có hiệu điện thế bao nhiêu?', solution: '3 · 1,5 = 4,5 (V).' },
    { title: 'Chiều electron', problem: 'Trong mạch điện, dòng điện chạy trong dây dẫn từ A đến B. Electron tự do dịch chuyển theo chiều nào?', solution: 'Electron dịch chuyển ngược chiều dòng điện: từ B đến A.' }
  ],
  exercises: [
    { question: 'Vì sao dụng cụ sửa điện (kìm, tua vít) có cán bọc nhựa hoặc cao su?', hints: ['Nhựa, cao su là vật gì?', 'An toàn cho người sử dụng.'], solution: 'Nhựa, cao su là vật cách điện, ngăn dòng điện truyền qua người khi sửa điện.' },
    { question: 'Acquy 12 V được ghép từ các ngăn 2 V nối tiếp. Acquy có bao nhiêu ngăn?', hints: ['Hiệu điện thế các ngăn nối tiếp cộng lại.', '12 : 2.'], solution: '12 : 2 = 6 ngăn.' },
    { question: 'Kể tên ba nguồn điện em thường gặp và nêu thiết bị sử dụng chúng.', hints: ['Nghĩ đến đồ chơi, điện thoại, xe máy.', 'Nghĩ đến năng lượng mặt trời.'], solution: 'Ví dụ: pin tiểu – điều khiển ti vi; pin sạc – điện thoại; acquy – xe máy; pin mặt trời – đèn đường năng lượng mặt trời.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chiều quy ước của dòng điện là từ cực dương qua mạch ngoài tới cực âm của nguồn.', answer: true, explain: 'Đó là quy ước chiều dòng điện.' },
    { type: 'mcq', q: 'Dòng điện trong kim loại là dòng chuyển dời có hướng của:', options: ['proton', 'electron tự do', 'nguyên tử', 'ion dương'], answer: 1, explain: 'Kim loại có nhiều electron tự do.' },
    { type: 'short', q: 'Ghép nối tiếp 4 pin, mỗi pin 1,5 V. Hiệu điện thế của bộ pin là bao nhiêu V?', answer: '6', unit: 'V', calc: '4*1.5', explain: '4 · 1,5 = 6 V.' },
    { type: 'mcq', q: 'Vật nào là vật cách điện?', options: ['Dây nhôm', 'Thanh sắt', 'Ống nhựa', 'Dung dịch muối ăn'], answer: 2, explain: 'Nhựa là vật cách điện.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Electron tự do trong dây kim loại dịch chuyển cùng chiều với chiều quy ước của dòng điện.', answer: false, explain: 'Electron dịch chuyển ngược chiều quy ước.' },
    { type: 'short', q: 'Một acquy 12 V gồm các ngăn 2 V ghép nối tiếp. Acquy có bao nhiêu ngăn?', answer: '6', unit: 'ngăn', calc: '12/2', explain: '12 : 2 = 6 ngăn.' },
    { type: 'mcq', q: 'Thiết bị nào KHÔNG phải là nguồn điện?', options: ['Pin mặt trời', 'Acquy', 'Bóng đèn', 'Máy phát điện'], answer: 2, explain: 'Bóng đèn tiêu thụ điện, không cung cấp điện.' },
    { type: 'short', q: 'Đèn pin cần nguồn 4,5 V. Cần ghép nối tiếp bao nhiêu pin 1,5 V?', answer: '3', unit: 'pin', calc: '4.5/1.5', explain: '4,5 : 1,5 = 3 pin.' }
  ]
});
})();
