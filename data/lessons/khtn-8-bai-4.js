/* KHTN 8 – Bài 4. Dung dịch và nồng độ. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-4', {
  objectives: [
    'Nêu được dung dịch là hỗn hợp lỏng đồng nhất của các chất đã tan trong nhau; chỉ ra được chất tan, dung môi.',
    'Phân biệt được dung dịch chưa bão hoà và dung dịch bão hoà; nêu được định nghĩa độ tan của một chất trong nước.',
    'Tính được độ tan, nồng độ phần trăm và nồng độ mol của dung dịch.',
    'Trình bày được cách pha chế một dung dịch có nồng độ cho trước.'
  ],
  intro: 'Cùng là nước muối nhưng nước muối sinh lí dùng súc miệng chỉ có 0,9 % muối, còn nước biển có khoảng 3,5 % muối. Con số “phần trăm” ấy chính là <b>nồng độ</b> – đại lượng cho biết dung dịch đậm hay loãng.',
  steps: [
    { title: 'Dung dịch, chất tan và dung môi', html: `<p><b>Dung dịch</b> là hỗn hợp lỏng đồng nhất của các chất đã tan trong nhau.</p>
      <ul><li><b>Chất tan</b>: chất bị hoà tan (có thể là chất rắn, lỏng hoặc khí). Ví dụ: muối ăn, đường, khí carbon dioxide.</li><li><b>Dung môi</b>: chất dùng để hoà tan chất tan, thường là nước.</li></ul>
      <p class="math">m<sub>dd</sub> = m<sub>chất tan</sub> + m<sub>dung môi</sub></p>`,
      svg: S.solutionScheme(), caption: 'Muối ăn (chất tan) hoà tan trong nước (dung môi) tạo thành dung dịch muối ăn.' },
    { title: 'Dung dịch bão hoà và độ tan', html: `<ul><li><b>Dung dịch chưa bão hoà</b>: vẫn hoà tan thêm được chất tan (ở nhiệt độ xác định).</li><li><b>Dung dịch bão hoà</b>: không thể hoà tan thêm chất tan đó nữa.</li></ul>
      <p><b>Độ tan</b> (S) của một chất trong nước là số gam chất đó hoà tan tối đa trong <b>100 g nước</b> để tạo thành dung dịch bão hoà ở nhiệt độ, áp suất xác định.</p>
      <p class="math">S = {{m<sub>chất tan</sub>|m<sub>nước</sub>}} · 100 &nbsp;(g/100 g nước)</p>
      <p>Độ tan của hầu hết chất rắn <b>tăng</b> khi nhiệt độ tăng; độ tan của chất khí <b>giảm</b> khi nhiệt độ tăng.</p>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 13.3], [20, 31.6], [40, 63.9], [60, 110], [80, 169]], label: 'KNO₃', color: '#dc2626', dots: true }, { pts: [[0, 35.7], [20, 35.9], [40, 36.4], [60, 37.1], [80, 38]], label: 'NaCl', color: '#2563eb', dots: true }], xmax: 90, ymax: 180, xstep: 20, ystep: 20, xlabel: 't (°C)', ylabel: 'S (g/100 g nước)', label: 'Độ tan theo nhiệt độ (số liệu tham khảo, làm tròn)' }),
      caption: 'Độ tan của KNO₃ tăng mạnh theo nhiệt độ, độ tan của NaCl gần như không đổi (số liệu tham khảo, làm tròn).' },
    { title: 'Nồng độ phần trăm', html: `<p><b>Nồng độ phần trăm</b> (C%) cho biết số gam chất tan có trong 100 g dung dịch:</p>
      <div class="box key">C% = {{m<sub>ct</sub>|m<sub>dd</sub>}} · 100 %</div>
      <p>Ví dụ: hoà tan 10 g đường vào 40 g nước ⇒ m<sub>dd</sub> = 50 g; C% = {{10|50}} · 100 % = 20 %.</p>` },
    { title: 'Nồng độ mol', html: `<p><b>Nồng độ mol</b> (C<sub>M</sub>) cho biết số mol chất tan có trong 1 lít dung dịch:</p>
      <div class="box key">C<sub>M</sub> = {{n|V}} &nbsp;(mol/L, kí hiệu M); &nbsp;V tính bằng lít</div>
      <p>Ví dụ: hoà tan 0,2 mol NaOH thành 500 mL dung dịch ⇒ V = 0,5 L; C<sub>M</sub> = {{0,2|0,5}} = 0,4 M.</p>
      <div class="box tip">Nhớ đổi mL sang L: 1 L = 1 000 mL.</div>` },
    { title: 'Pha chế dung dịch', html: `<p>Pha 100 g dung dịch NaCl 5 %:</p><ol><li>Tính: m<sub>NaCl</sub> = 5 · 100 : 100 = 5 g; m<sub>nước</sub> = 100 − 5 = 95 g.</li><li>Cân 5 g NaCl cho vào cốc.</li><li>Đong 95 g (95 mL) nước cất, đổ vào cốc, khuấy đều cho tan hết.</li></ol>`,
      svg: S.flow({ items: ['Tính khối lượng chất tan và dung môi', 'Cân chất tan cho vào cốc', 'Đong dung môi, đổ vào cốc', 'Khuấy đều đến khi tan hết'], size: 14, label: 'Các bước pha chế dung dịch' }) }
  ],
  summary: 'Dung dịch = chất tan + dung môi (đồng nhất). Độ tan S: số gam chất tan tối đa trong 100 g nước. C% = m<sub>ct</sub> : m<sub>dd</sub> · 100 %; C<sub>M</sub> = n : V (V tính bằng L). Pha chế: tính – cân – đong – khuấy.',
  examples: [
    { title: 'Tính độ tan', problem: 'Ở 25 °C, hoà tan tối đa 7,2 g NaCl vào 20 g nước thì được dung dịch bão hoà. Tính độ tan của NaCl ở 25 °C.', solution: 'S = {{7,2|20}} · 100 = 36 (g/100 g nước).' },
    { title: 'Tính nồng độ phần trăm', problem: 'Hoà tan 15 g đường vào 135 g nước. Tính C% của dung dịch.', solution: 'm<sub>dd</sub> = 15 + 135 = 150 g. C% = {{15|150}} · 100 % = 10 %.' },
    { title: 'Tính nồng độ mol', problem: 'Hoà tan 5,85 g NaCl (M = 58,5 g/mol) vào nước thành 200 mL dung dịch. Tính C<sub>M</sub>.', solution: 'n = 5,85 : 58,5 = 0,1 mol; V = 0,2 L. C<sub>M</sub> = 0,1 : 0,2 = 0,5 M.' }
  ],
  exercises: [
    { question: 'Cần bao nhiêu gam muối và bao nhiêu gam nước để pha 200 g dung dịch muối 3 %?', hints: ['m<sub>ct</sub> = C% · m<sub>dd</sub> : 100.', 'm<sub>nước</sub> = m<sub>dd</sub> − m<sub>ct</sub>.'], solution: 'm<sub>muối</sub> = 3 · 200 : 100 = 6 g; m<sub>nước</sub> = 200 − 6 = 194 g.' },
    { question: 'Tính số mol NaOH có trong 250 mL dung dịch NaOH 2 M.', hints: ['Đổi 250 mL = 0,25 L.', 'n = C<sub>M</sub> · V.'], solution: 'n = 2 · 0,25 = 0,5 mol.' },
    { question: 'Vì sao khi mở chai nước ngọt có ga để ở chỗ nóng thì ga thoát ra mạnh hơn chai để trong tủ lạnh?', hints: ['Ga là khí carbon dioxide hoà tan trong nước.', 'Độ tan của chất khí thay đổi thế nào khi nhiệt độ tăng?'], solution: 'Độ tan của khí carbon dioxide giảm khi nhiệt độ tăng, nên chai để chỗ nóng có nhiều khí thoát ra khỏi dung dịch hơn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dung dịch là hỗn hợp lỏng đồng nhất của các chất đã tan trong nhau.', answer: true, explain: 'Đó là định nghĩa dung dịch.' },
    { type: 'mcq', q: 'Trong dung dịch nước đường, dung môi là:', options: ['đường', 'nước', 'cả đường và nước', 'không khí'], answer: 1, explain: 'Nước hoà tan đường nên nước là dung môi.' },
    { type: 'short', q: 'Hoà tan 20 g muối vào 180 g nước. Nồng độ phần trăm của dung dịch là bao nhiêu %?', answer: '10', unit: '%', calc: '20/(20+180)*100', explain: 'm<sub>dd</sub> = 200 g; C% = 20 : 200 · 100 % = 10 %.' },
    { type: 'short', q: 'Hoà tan 0,3 mol KCl thành 600 mL dung dịch. Nồng độ mol của dung dịch là bao nhiêu M?', answer: '0,5', unit: 'M', calc: '0.3/0.6', explain: 'V = 0,6 L; C<sub>M</sub> = 0,3 : 0,6 = 0,5 M.' },
    { type: 'mcq', q: 'Độ tan của một chất rắn trong nước là số gam chất đó tan tối đa trong:', options: ['100 g dung dịch', '100 g nước', '1 L nước', '1 L dung dịch'], answer: 1, explain: 'Độ tan tính theo 100 g nước (dung môi).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Độ tan của chất khí trong nước tăng khi nhiệt độ tăng.', answer: false, explain: 'Độ tan của chất khí giảm khi nhiệt độ tăng.' },
    { type: 'short', q: 'Ở 20 °C, 50 g nước hoà tan tối đa 17,95 g NaCl. Độ tan của NaCl ở 20 °C là bao nhiêu g/100 g nước?', answer: '35,9', unit: 'g/100 g nước', calc: '17.95/50*100', explain: 'S = 17,95 : 50 · 100 = 35,9 g/100 g nước.' },
    { type: 'short', q: 'Cần bao nhiêu gam đường để pha 300 g dung dịch đường 5 %?', answer: '15', unit: 'g', calc: '5*300/100', explain: 'm<sub>ct</sub> = 5 · 300 : 100 = 15 g.' }
  ]
});
})();
