/* LS&ĐL 6 – Địa lí, Bài 19. Thuỷ quyển và vòng tuần hoàn lớn của nước. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-19', {
  objectives: [
    'Kể được tên các thành phần chủ yếu của thuỷ quyển.',
    'Mô tả được vòng tuần hoàn lớn của nước.',
    'Nêu được tỉ lệ nước mặn, nước ngọt trên Trái Đất.',
    'Có ý thức sử dụng tiết kiệm nước ngọt.'
  ],
  intro: 'Nhìn từ vũ trụ, Trái Đất là một “hành tinh xanh” vì nước bao phủ phần lớn bề mặt. Thế nhưng, nước ngọt con người dùng được lại rất ít. Nước ở đâu, và nó di chuyển thế nào? Đó là câu chuyện của <b>thuỷ quyển</b>.',
  steps: [
    { title: 'Thuỷ quyển', html: `<p>Thuỷ quyển là lớp nước bao quanh Trái Đất, gồm nước ở biển, đại dương, sông, hồ, băng, nước ngầm, hơi nước trong khí quyển.</p>`,
      svg: S.pieChart({ title: 'Nước trên Trái Đất', parts: [{ v: 97.5, label: 'Nước mặn: 97,5%' }, { v: 2.5, label: 'Nước ngọt: 2,5%' }] }), caption: 'Trong nước ngọt: khoảng 69% là băng, 30% nước ngầm, chỉ khoảng 1% là nước mặt và nước khác (số liệu làm tròn, theo USGS).' },
    { title: 'Vòng tuần hoàn lớn của nước', html: `<p>Nước luôn di chuyển:</p>`,
      svg: S.flowchart({ title: 'Vòng tuần hoàn lớn', steps: [{ t: 'start', s: 'Nước biển bốc hơi' }, { t: 'proc', s: 'Mây, gió đưa vào lục địa' }, { t: 'proc', s: 'Mưa xuống đất liền' }, { t: 'proc', s: 'Sông, nước ngầm' }, { t: 'end', s: 'Chảy về biển' }] }), caption: 'Vòng tuần hoàn nhỏ: bốc hơi rồi mưa ngay trên biển.' },
    { title: 'Vai trò', html: `<ul><li>Nước cần cho sự sống, sản xuất, sinh hoạt.</li><li>Vòng tuần hoàn điều hoà nhiệt độ, cung cấp nước ngọt cho lục địa.</li></ul>` },
    { title: 'Ghi nhớ', html: `<div class="box key">Nước ngọt chỉ 2,5%, phần lớn là băng → phải tiết kiệm nước.</div>` }
  ],
  summary: 'Thuỷ quyển gồm nước mặn (khoảng 97,5%) và nước ngọt (khoảng 2,5%), trong đó phần lớn nước ngọt là băng và nước ngầm. Vòng tuần hoàn lớn của nước: nước biển bốc hơi, gió đưa mây vào lục địa, mưa xuống, theo sông và nước ngầm chảy về biển. Vòng tuần hoàn giúp cung cấp nước ngọt và điều hoà khí hậu.',
  examples: [
    { title: 'Phần trăm', problem: 'Nếu toàn bộ nước Trái Đất là 1 000 lít, nước ngọt bao nhiêu lít?', solution: '1 000 × 2,5% = 25 lít.' },
    { title: 'Nước mặt', problem: 'Trong 25 lít nước ngọt đó, nước mặt (khoảng 1%) bao nhiêu lít?', solution: '0,25 lít – rất ít.' },
    { title: 'Giải thích', problem: 'Vì sao nước mưa là nước ngọt dù bốc hơi từ biển?', solution: 'Khi bốc hơi, muối ở lại, chỉ hơi nước bay lên.' }
  ],
  exercises: [
    { question: 'Kể ba thành phần của thuỷ quyển.', hints: ['Mặn.', 'Ngọt, rắn, khí.'], solution: 'Biển và đại dương, sông hồ, băng, nước ngầm, hơi nước.' },
    { question: '2 000 lít nước Trái Đất có bao nhiêu lít nước mặn?', hints: ['97,5%.', '2 000 × 0,975.'], solution: '1 950 lít.' },
    { question: 'Nêu thứ tự vòng tuần hoàn lớn.', hints: ['Bắt đầu: bốc hơi từ biển.', 'Kết thúc: về biển.'], solution: 'Bốc hơi → mây, gió → mưa → sông, nước ngầm → biển.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nước mặn chiếm phần lớn khối lượng nước trên Trái Đất.', answer: true, explain: 'Khoảng 97,5%.' },
    { type: 'short', q: '1 000 lít nước Trái Đất có bao nhiêu lít nước ngọt (2,5%)?', answer: '25', unit: 'lít', calc: '1000*2.5/100', explain: '25.' },
    { type: 'mcq', q: 'Phần lớn nước ngọt tồn tại ở dạng:', options: ['Băng', 'Sông', 'Hồ', 'Hơi nước'], answer: 0, explain: 'Băng.' },
    { type: 'short', q: '2 000 lít nước có bao nhiêu lít nước mặn (97,5%)?', answer: '1950', answerText: '1 950', unit: 'lít', calc: '2000*97.5/100', explain: '1 950.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nước mưa có độ mặn như nước biển.', answer: false, explain: 'Nước mưa là nước ngọt.' },
    { type: 'mcq', q: 'Khâu đầu tiên của vòng tuần hoàn lớn:', options: ['Nước biển bốc hơi', 'Mưa', 'Sông chảy', 'Băng tan'], answer: 0, explain: 'Bốc hơi.' },
    { type: 'short', q: '25 lít nước ngọt, nước mặt chiếm 1%. Bao nhiêu lít?', answer: '0.25', answerText: '0,25', unit: 'lít', calc: '25*1/100', explain: '0,25.' },
    { type: 'mcq', q: 'Nước ngầm thuộc loại:', options: ['Nước ngọt', 'Nước mặn', 'Nước lợ biển', 'Hơi nước'], answer: 0, explain: 'Chủ yếu nước ngọt.' }
  ]
});
})();
