/* KHTN 8 – Bài 24. Cường độ dòng điện và hiệu điện thế. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-24', {
  objectives: [
    'Nêu được cường độ dòng điện cho biết độ mạnh yếu của dòng điện; đơn vị ampe (A), miliampe (mA).',
    'Nêu được hiệu điện thế giữa hai cực của nguồn điện; đơn vị vôn (V), milivôn (mV), kilôvôn (kV).',
    'Mắc được ampe kế nối tiếp và vôn kế song song với thiết bị cần đo; đọc được số chỉ.',
    'Đổi được đơn vị cường độ dòng điện và hiệu điện thế.'
  ],
  intro: 'Dùng 1 pin thì đèn sáng yếu, dùng 2 pin thì đèn sáng mạnh hơn. Làm sao đo được dòng điện “mạnh” hay “yếu” và nguồn điện “khoẻ” đến đâu? Ta dùng <b>ampe kế</b> và <b>vôn kế</b>.',
  steps: [
    { title: 'Cường độ dòng điện', html: `<p><b>Cường độ dòng điện</b> (kí hiệu I) cho biết mức độ mạnh, yếu của dòng điện. Dòng điện càng mạnh thì cường độ dòng điện càng lớn.</p>
      <p>Đơn vị: <b>ampe (A)</b>; miliampe (mA): 1 A = 1 000 mA.</p>
      <p>Đo bằng <b>ampe kế</b>, mắc <b>nối tiếp</b> với thiết bị cần đo, chốt (+) của ampe kế nối về phía cực dương của nguồn.</p>` },
    { title: 'Hiệu điện thế', html: `<p>Giữa hai cực của nguồn điện có một <b>hiệu điện thế</b> (kí hiệu U). Số vôn ghi trên nguồn là hiệu điện thế giữa hai cực khi chưa mắc vào mạch.</p>
      <p>Đơn vị: <b>vôn (V)</b>; milivôn (mV), kilôvôn (kV): 1 V = 1 000 mV; 1 kV = 1 000 V.</p>
      <p>Đo bằng <b>vôn kế</b>, mắc <b>song song</b> với thiết bị (hoặc nối vào hai cực nguồn), chốt (+) nối về phía cực dương.</p>
      <p>Ví dụ: pin tiểu 1,5 V; acquy ô tô 12 V; điện lưới gia đình 220 V.</p>` },
    { title: 'Mắc ampe kế và vôn kế trong mạch', html: `<p>Sơ đồ mạch đo cường độ dòng điện qua đèn và hiệu điện thế giữa hai đầu đèn:</p>`,
      svg: S.circuit({ items: ['battery', 'switch', 'ammeter', 'lamp'], voltmeter: 3, closed: true, arrows: true, labels: true, label: 'Ampe kế mắc nối tiếp, vôn kế mắc song song với bóng đèn' }) },
    { title: 'Đọc số chỉ của dụng cụ đo', html: `<ul><li>Xác định <b>giới hạn đo</b> (số lớn nhất trên mặt) và <b>độ chia nhỏ nhất</b> (giá trị giữa hai vạch liên tiếp).</li><li>Chọn dụng cụ có giới hạn đo lớn hơn giá trị cần đo.</li><li>Đọc số chỉ khi kim đứng yên, mắt nhìn vuông góc với mặt đồng hồ.</li></ul>`,
      svg: S.row([{ svg: S.meter({ kind: 'A', max: 1, step: 0.2, minor: 2, value: 0.6 }), caption: 'Ampe kế: GHĐ 1 A, ĐCNN 0,1 A, chỉ 0,6 A' }, { svg: S.meter({ kind: 'V', max: 6, step: 1, minor: 2, value: 4.5 }), caption: 'Vôn kế: GHĐ 6 V, ĐCNN 0,5 V, chỉ 4,5 V' }]) },
    { title: 'Mối liên hệ', html: `<p>Với cùng một bóng đèn, hiệu điện thế giữa hai đầu đèn càng lớn thì cường độ dòng điện qua đèn càng lớn và đèn càng sáng.</p>
      <div class="box tip">Mỗi thiết bị có ghi hiệu điện thế định mức (ví dụ đèn 6 V). Dùng đúng hiệu điện thế định mức để thiết bị hoạt động bình thường; quá hiệu điện thế định mức có thể làm hỏng thiết bị.</div>` }
  ],
  summary: 'Cường độ dòng điện I (A, mA; 1 A = 1 000 mA), đo bằng ampe kế mắc nối tiếp. Hiệu điện thế U (V, mV, kV; 1 kV = 1 000 V), đo bằng vôn kế mắc song song. Chốt (+) của dụng cụ đo nối về phía cực dương của nguồn.',
  examples: [
    { title: 'Đổi đơn vị', problem: 'Đổi: 0,35 A = ? mA; 2 500 mV = ? V.', solution: '0,35 A = 350 mA; 2 500 mV = 2,5 V.' },
    { title: 'Đọc số chỉ', problem: 'Ampe kế có giới hạn đo 1 A, giữa hai số 0 và 0,2 có 2 khoảng chia. Kim chỉ vạch thứ 6 kể từ 0. Số chỉ là bao nhiêu?', solution: 'ĐCNN = 0,2 : 2 = 0,1 A; số chỉ = 6 · 0,1 = 0,6 A.' },
    { title: 'Chọn dụng cụ', problem: 'Cần đo dòng điện khoảng 0,15 A. Nên chọn ampe kế có GHĐ 100 mA hay 0,5 A?', solution: '0,15 A = 150 mA &gt; 100 mA ⇒ chọn ampe kế GHĐ 0,5 A.' }
  ],
  exercises: [
    { question: 'Đổi: 1,2 kV = ? V; 45 mA = ? A.', hints: ['1 kV = 1 000 V.', '1 mA = 0,001 A.'], solution: '1,2 kV = 1 200 V; 45 mA = 0,045 A.' },
    { question: 'Nêu cách mắc ampe kế và vôn kế để đo I qua bóng đèn và U giữa hai đầu bóng đèn.', hints: ['Ampe kế nối tiếp.', 'Vôn kế song song.'], solution: 'Ampe kế mắc nối tiếp với đèn, vôn kế mắc song song với hai đầu đèn; chốt (+) của cả hai dụng cụ nối về phía cực dương của nguồn.' },
    { question: 'Một bóng đèn ghi 6 V. Mắc đèn vào nguồn 3 V và nguồn 6 V, trường hợp nào đèn sáng bình thường?', hints: ['6 V là hiệu điện thế định mức.', 'Dùng nguồn 3 V thì đèn thế nào?'], solution: 'Nguồn 6 V đèn sáng bình thường; nguồn 3 V đèn sáng yếu hơn bình thường.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ampe kế được mắc song song với thiết bị cần đo cường độ dòng điện.', answer: false, explain: 'Ampe kế mắc nối tiếp; vôn kế mắc song song.' },
    { type: 'short', q: '0,25 A bằng bao nhiêu mA?', answer: '250', unit: 'mA', calc: '0.25*1000', explain: '0,25 · 1 000 = 250 mA.' },
    { type: 'mcq', q: 'Đơn vị của hiệu điện thế là:', options: ['ampe (A)', 'vôn (V)', 'oát (W)', 'jun (J)'], answer: 1, explain: 'Hiệu điện thế đo bằng vôn.' },
    { type: 'short', q: '3 500 mV bằng bao nhiêu V?', answer: '3,5', unit: 'V', calc: '3500/1000', explain: '3 500 : 1 000 = 3,5 V.' },
    { type: 'mcq', q: 'Vôn kế được mắc như thế nào để đo hiệu điện thế giữa hai đầu bóng đèn?', options: ['Nối tiếp với đèn', 'Song song với đèn', 'Mắc ở bất kì đâu', 'Thay cho công tắc'], answer: 1, explain: 'Vôn kế mắc song song với thiết bị cần đo.' },
    { type: 'short', q: 'Ampe kế có ĐCNN 0,1 A, kim chỉ vạch thứ 6 tính từ vạch 0. Số chỉ là bao nhiêu A?', answer: '0,6', unit: 'A', calc: '6*0.1', explain: '6 · 0,1 = 0,6 A.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chốt (+) của ampe kế phải nối về phía cực dương của nguồn điện.', answer: true, explain: 'Mắc đúng cực để kim quay đúng chiều.' },
    { type: 'short', q: 'Hiệu điện thế 0,22 kV bằng bao nhiêu V?', answer: '220', unit: 'V', calc: '0.22*1000', explain: '0,22 · 1 000 = 220 V (điện lưới gia đình).' }
  ]
});
})();
