/* KHTN 9 – Bài 13. Năng lượng của dòng điện và công suất điện. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-13', {
  objectives: [
    'Nêu được dòng điện có năng lượng; năng lượng điện có thể chuyển hoá thành các dạng năng lượng khác.',
    'Viết được công thức tính năng lượng điện W = U · I · t và công suất điện P = U · I.',
    'Tính được điện năng tiêu thụ theo kW·h và tiền điện trong các trường hợp đơn giản.'
  ],
  intro: 'Mỗi tháng gia đình em nhận hoá đơn tiền điện ghi “số điện” đã dùng. Một “số điện” là gì? Vì sao điều hoà tốn điện hơn quạt? Bài học này giúp em trả lời.',
  steps: [
    { title: 'Năng lượng của dòng điện', html: `<p>Dòng điện có khả năng thực hiện công và làm biến đổi nhiệt năng của vật: dòng điện mang <b>năng lượng</b> (năng lượng điện).</p>
      <ul><li>Bóng đèn: năng lượng điện → quang năng (và nhiệt năng).</li><li>Bàn là, ấm điện: → nhiệt năng.</li><li>Quạt điện, máy bơm: → cơ năng (và nhiệt năng).</li></ul>
      <p>Năng lượng điện tiêu thụ trên một đoạn mạch: <span class="math">W = U · I · t</span> (J), với U (V), I (A), t (s).</p>` },
    { title: 'Công suất điện', html: `<p><b>Công suất điện</b> cho biết năng lượng điện tiêu thụ trong một giây:</p>
      <p class="math">P = U · I</p>
      <p>Đơn vị: oát (W). Suy ra W = P · t. Với điện trở: P = I<sup>2</sup>R = U<sup>2</sup> / R.</p>
      <div class="box key">Số ghi trên dụng cụ điện, ví dụ “220 V – 1 000 W”: khi dùng đúng hiệu điện thế định mức 220 V thì dụng cụ có công suất định mức 1 000 W.</div>`,
      svg: S.bar({ title: 'Công suất định mức một số đồ dùng điện (tham khảo)', cats: ['Đèn LED', 'Quạt', 'Tivi', 'Nồi cơm', 'Điều hoà'], series: [{ name: 'P (W)', values: [9, 50, 100, 700, 1000], color: '#ea580c' }], yMax: 1200, yStep: 200, width: 560, height: 280 }), caption: 'Công suất định mức tham khảo: thiết bị tạo nhiệt hoặc làm lạnh có công suất lớn.' },
    { title: 'Đơn vị kW·h và tiền điện', html: `<p>Công tơ điện đo năng lượng điện tiêu thụ theo <b>kilôoát giờ</b> (kW·h), chính là “số điện”:</p>
      <p class="math">1 kW·h = 1 000 W · 3 600 s = 3 600 000 J</p>
      <p>Ví dụ: ấm điện 1 000 W dùng 30 phút: W = 1 kW · 0,5 h = 0,5 kW·h.</p>
      <p>Tiền điện = số kW·h × giá mỗi kW·h (giá điện thực tế tính theo bậc; trong bài tập dùng giá minh hoạ).</p>` },
    { title: 'Sử dụng điện tiết kiệm', html: `<ul><li>Tắt thiết bị khi không dùng; rút phích sạc khi pin đầy.</li><li>Dùng đèn LED thay đèn sợi đốt (cùng độ sáng, công suất nhỏ hơn nhiều).</li><li>Đặt điều hoà ở 26 – 27 °C, đóng kín cửa phòng.</li></ul>` }
  ],
  summary: 'Dòng điện có năng lượng, chuyển hoá được thành nhiệt, quang, cơ năng. W = UIt = Pt; P = UI (W). 1 kW·h = 3,6 · 10⁶ J = 1 “số điện”. Dụng cụ hoạt động đúng công suất định mức khi dùng đúng hiệu điện thế định mức.',
  examples: [
    { title: 'Tính công suất', problem: 'Bóng đèn mắc vào hiệu điện thế 220 V có dòng điện 0,5 A. Tính công suất của đèn.', solution: 'P = U · I = 220 · 0,5 = 110 (W).' },
    { title: 'Tính điện năng', problem: 'Nồi cơm 700 W dùng mỗi ngày 2 giờ. Tính điện năng tiêu thụ trong 30 ngày.', solution: 'W = 0,7 kW · 2 h · 30 = 42 kW·h.' },
    { title: 'Tính tiền điện', problem: 'Gia đình dùng 150 kW·h, giá minh hoạ 2 000 đồng/kW·h. Tính tiền điện.', solution: '150 · 2 000 = 300 000 đồng.' }
  ],
  exercises: [
    { question: 'Ấm điện ghi 220 V – 1 100 W. Tính cường độ dòng điện qua ấm khi dùng đúng hiệu điện thế định mức.', hints: ['P = U · I ⇒ I = P / U.', '1 100 / 220 = ?'], solution: 'I = 1 100 / 220 = 5 A.' },
    { question: 'Tivi 100 W dùng 5 giờ mỗi ngày. Mỗi ngày tiêu thụ bao nhiêu kW·h?', hints: ['Đổi 100 W = 0,1 kW.', 'W = P · t.'], solution: 'W = 0,1 · 5 = 0,5 kW·h.' },
    { question: 'Đổi 2 kW·h ra jun.', hints: ['1 kW·h = 3 600 000 J.', 'Nhân với 2.'], solution: '2 kW·h = 7 200 000 J = 7,2 · 10<sup>6</sup> J.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 1 kW·h bằng 3 600 000 J.', answer: true, explain: '1 000 W · 3 600 s = 3,6 · 10<sup>6</sup> J.' },
    { type: 'short', q: 'Dụng cụ điện có U = 12 V, I = 2 A. Công suất bằng bao nhiêu oát?', answer: '24', unit: 'W', calc: '12*2', explain: 'P = 12 · 2 = 24 W.' },
    { type: 'mcq', q: 'Công tơ điện trong gia đình dùng để đo:', options: ['cường độ dòng điện', 'hiệu điện thế', 'năng lượng điện tiêu thụ', 'điện trở'], answer: 2, explain: 'Công tơ đo số kW·h.' },
    { type: 'short', q: 'Bàn là 1 200 W dùng trong 30 phút tiêu thụ bao nhiêu kW·h?', answer: '0,6', unit: 'kW·h', calc: '1.2*0.5', explain: '1,2 kW · 0,5 h = 0,6 kW·h.' },
    { type: 'mcq', q: 'Khi bóng đèn sáng, năng lượng điện chủ yếu chuyển hoá thành:', options: ['cơ năng', 'quang năng và nhiệt năng', 'hoá năng', 'năng lượng âm'], answer: 1, explain: 'Đèn phát sáng và nóng lên.' },
    { type: 'short', q: 'Ấm điện ghi 220 V – 880 W. Cường độ dòng điện định mức bằng bao nhiêu ampe?', answer: '4', unit: 'A', calc: '880/220', explain: 'I = 880 / 220 = 4 A.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bóng đèn ghi 220 V – 60 W mắc vào 110 V vẫn có công suất 60 W.', answer: false, explain: 'Chỉ đúng công suất định mức khi dùng đúng 220 V; ở 110 V công suất nhỏ hơn nhiều.' },
    { type: 'short', q: 'Gia đình dùng 120 kW·h, giá minh hoạ 2 500 đồng/kW·h. Tiền điện là bao nhiêu đồng?', answer: '300000', answerText: '300 000', unit: 'đồng', calc: '120*2500', explain: '120 · 2 500 = 300 000 đồng.' }
  ]
});
})();
