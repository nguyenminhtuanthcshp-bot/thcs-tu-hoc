/* KHTN 8 – Bài 45. Sinh quyển. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-45', {
  objectives: [
    'Nêu được khái niệm sinh quyển.',
    'Nêu được đặc điểm chủ yếu của các khu sinh học (biome) trên cạn và dưới nước.',
    'Liên hệ được các khu sinh học với điều kiện khí hậu và sinh vật đặc trưng.'
  ],
  intro: 'Từ đỉnh núi cao phủ tuyết đến đáy đại dương sâu thẳm, ở đâu có sự sống? Toàn bộ những nơi có sinh vật trên Trái Đất hợp thành một hệ sinh thái khổng lồ gọi là sinh quyển.',
  steps: [
    { title: 'Khái niệm sinh quyển', html: `<p><b>Sinh quyển</b> gồm toàn bộ sinh vật và môi trường sống của chúng trên Trái Đất, bao gồm các lớp đất đá (thạch quyển), lớp nước (thuỷ quyển) và lớp không khí (khí quyển) có sinh vật sinh sống. Sinh quyển là hệ sinh thái lớn nhất.</p>`,
      svg: S.biosphere() },
    { title: 'Các khu sinh học trên cạn', html: `<table class="tbl"><tr><th>Khu sinh học</th><th>Khí hậu</th><th>Sinh vật đặc trưng</th></tr><tr><td>Đồng rêu hàn đới</td><td>rất lạnh, đất băng giá</td><td>rêu, địa y; tuần lộc, cáo bắc cực</td></tr><tr><td>Rừng lá kim</td><td>lạnh, mùa đông dài</td><td>thông, vân sam; gấu, sóc</td></tr><tr><td>Rừng ôn đới</td><td>bốn mùa rõ rệt</td><td>cây rụng lá mùa đông; hươu, nai</td></tr><tr><td>Rừng mưa nhiệt đới</td><td>nóng ẩm, mưa nhiều</td><td>rất đa dạng: cây gỗ nhiều tầng, dây leo; khỉ, vượn</td></tr><tr><td>Hoang mạc</td><td>rất khô, nóng</td><td>xương rồng; lạc đà, bò sát</td></tr><tr><td>Savan (thảo nguyên)</td><td>nóng, khô theo mùa</td><td>cỏ, cây bụi; ngựa vằn, sư tử</td></tr></table>` },
    { title: 'Các khu sinh học dưới nước', html: `<ul><li><b>Khu nước ngọt</b>: sông, suối, ao, hồ – cá chép, tôm, rong, bèo…</li><li><b>Khu nước mặn</b>: biển và đại dương (chiếm khoảng 71 % bề mặt Trái Đất) – vùng ven bờ (rừng ngập mặn, rạn san hô), vùng khơi; cá, tảo biển, san hô…</li></ul>`,
      svg: S.pieChart({ title: 'Tỉ lệ bề mặt Trái Đất (giá trị làm tròn)', parts: [{ label: 'Đại dương, biển', v: 71, color: '#2563eb' }, { label: 'Lục địa', v: 29, color: '#a16207' }] }) },
    { title: 'Vì sao các khu sinh học khác nhau?', html: `<p>Các khu sinh học phân bố theo vĩ độ và độ cao, phụ thuộc chủ yếu vào <b>nhiệt độ</b> và <b>lượng mưa</b>. Càng gần xích đạo, khí hậu càng nóng ẩm và đa dạng sinh học càng cao.</p>
      <div class="box tip">Việt Nam nằm trong vùng nhiệt đới gió mùa, có rừng mưa nhiệt đới, rừng ngập mặn ven biển, rạn san hô… với độ đa dạng sinh học cao.</div>` }
  ],
  summary: 'Sinh quyển là toàn bộ sinh vật và môi trường sống của chúng trên Trái Đất (phần thạch quyển, thuỷ quyển, khí quyển có sự sống). Các khu sinh học trên cạn: đồng rêu, rừng lá kim, rừng ôn đới, rừng mưa nhiệt đới, hoang mạc, savan; dưới nước: nước ngọt, nước mặn. Phân bố phụ thuộc nhiệt độ và lượng mưa.',
  examples: [
    { title: 'Nhận biết khu sinh học', problem: 'Một vùng có khí hậu rất khô, cây xương rồng, lạc đà sinh sống. Đó là khu sinh học nào?', solution: 'Hoang mạc.' },
    { title: 'Tính diện tích', problem: 'Diện tích bề mặt Trái Đất khoảng 510 triệu km², đại dương chiếm khoảng 71 %. Tính diện tích đại dương.', solution: '510 · 71 : 100 ≈ 362 triệu km².' },
    { title: 'Đa dạng nhất', problem: 'Khu sinh học trên cạn nào có đa dạng sinh học cao nhất? Vì sao?', solution: 'Rừng mưa nhiệt đới, vì khí hậu nóng ẩm, mưa nhiều quanh năm thuận lợi cho nhiều loài.' }
  ],
  exercises: [
    { question: 'Sinh quyển gồm những phần nào của Trái Đất?', hints: ['Có ba “quyển”.', 'Chỉ tính phần có sinh vật.'], solution: 'Phần thạch quyển, thuỷ quyển, khí quyển có sinh vật sinh sống.' },
    { question: 'Kể tên hai khu sinh học trên cạn có khí hậu lạnh và sinh vật đặc trưng.', hints: ['Gần cực.', 'Rừng cây lá hình kim.'], solution: 'Đồng rêu hàn đới (rêu, địa y, tuần lộc); rừng lá kim (thông, vân sam, gấu).' },
    { question: 'Lục địa chiếm khoảng 29 % bề mặt Trái Đất (khoảng 510 triệu km²). Tính diện tích lục địa (làm tròn đến hàng đơn vị).', hints: ['Nhân 510 với 29 %.', '510 · 0,29.'], solution: '510 · 0,29 ≈ 148 triệu km².' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sinh quyển là hệ sinh thái lớn nhất trên Trái Đất.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Khu sinh học có rêu, địa y, tuần lộc là:', options: ['hoang mạc', 'đồng rêu hàn đới', 'rừng mưa nhiệt đới', 'savan'], answer: 1, explain: 'Vùng rất lạnh gần cực.' },
    { type: 'short', q: 'Đại dương chiếm khoảng 71 % bề mặt Trái Đất. Lục địa chiếm khoảng bao nhiêu %?', answer: '29', unit: '%', calc: '100-71', explain: '100 − 71 = 29 %.' },
    { type: 'mcq', q: 'Khu sinh học có độ đa dạng sinh học cao nhất là:', options: ['hoang mạc', 'rừng lá kim', 'rừng mưa nhiệt đới', 'đồng rêu'], answer: 2, explain: 'Khí hậu nóng ẩm, mưa nhiều.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rạn san hô thuộc khu sinh học nước ngọt.', answer: false, explain: 'Rạn san hô thuộc khu nước mặn (biển).' },
    { type: 'short', q: 'Diện tích bề mặt Trái Đất khoảng 510 triệu km², đại dương chiếm 71 %. Diện tích đại dương khoảng bao nhiêu triệu km² (làm tròn đến hàng đơn vị)?', answer: '362', unit: 'triệu km²', calc: 'round(510*71/100)', explain: '510 · 0,71 = 362,1 ≈ 362 triệu km².' },
    { type: 'mcq', q: 'Nhân tố chủ yếu quyết định sự phân bố các khu sinh học trên cạn là:', options: ['nhiệt độ và lượng mưa', 'gió', 'đất đá', 'con người'], answer: 0, explain: 'Khí hậu là yếu tố quyết định.' },
    { type: 'short', q: 'Lục địa chiếm 29 % của 510 triệu km². Diện tích lục địa khoảng bao nhiêu triệu km² (làm tròn đến hàng đơn vị)?', answer: '148', unit: 'triệu km²', calc: 'round(510*29/100)', explain: '510 · 0,29 = 147,9 ≈ 148 triệu km².' }
  ]
});
})();
