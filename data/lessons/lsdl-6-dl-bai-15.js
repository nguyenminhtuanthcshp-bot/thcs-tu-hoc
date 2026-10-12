/* LS&ĐL 6 – Địa lí, Bài 15. Lớp vỏ khí của Trái Đất. Khí áp và gió. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-15', {
  objectives: [
    'Mô tả được các tầng khí quyển, đặc điểm chính của tầng đối lưu và bình lưu.',
    'Kể được tên và nêu được đặc điểm về nhiệt độ, độ ẩm của một số khối khí.',
    'Trình bày được sự phân bố các đai khí áp và các loại gió thổi thường xuyên trên Trái Đất.',
    'Biết thành phần không khí và vai trò của lớp ô-dôn.'
  ],
  intro: 'Chúng ta sống dưới “đáy” của một đại dương không khí dày hàng trăm ki-lô-mét. Không khí ấy che chở chúng ta khỏi tia cực tím, giữ ấm Trái Đất và tạo nên gió, mưa. Đó là <b>khí quyển</b>.',
  steps: [
    { title: 'Thành phần không khí', html: `<p>Không khí gồm chủ yếu:</p>`,
      svg: S.pieChart({ title: 'Thành phần không khí (theo thể tích)', parts: [{ v: 78, label: 'Ni-tơ: 78%' }, { v: 21, label: 'Ô-xy: 21%' }, { v: 1, label: 'Khí khác: 1%' }] }), caption: 'Hơi nước và CO₂ tuy ít nhưng rất quan trọng với thời tiết.' },
    { title: 'Các tầng khí quyển', html: `<ul><li><b>Tầng đối lưu</b> (từ mặt đất đến khoảng 8 – 16 km): chứa phần lớn khối lượng không khí và hầu hết hơi nước; nơi sinh ra mây, mưa, sấm chớp; lên cao 100 m nhiệt độ giảm khoảng <b>0,6 °C</b>.</li><li><b>Tầng bình lưu</b> (đến khoảng 50 km): có lớp <b>ô-dôn</b> hấp thụ tia cực tím.</li><li>Các tầng cao hơn: không khí rất loãng.</li></ul>` },
    { title: 'Khối khí, khí áp và gió', html: `<p>Khối khí: nóng (vĩ độ thấp), lạnh (vĩ độ cao), đại dương (ẩm), lục địa (khô). Khí áp là sức ép của không khí lên bề mặt Trái Đất, trung bình khoảng 760 mm thuỷ ngân (1 013 hPa). <b>Gió</b> thổi từ nơi khí áp cao về nơi khí áp thấp.</p>`,
      svg: S.table({ title: 'Các loại gió thổi thường xuyên', head: ['Gió', 'Phạm vi (mỗi nửa cầu)'], rows: [['Tín phong (Mậu dịch)', 'Từ khoảng 30° về Xích đạo'], ['Gió Tây ôn đới', 'Từ khoảng 30° lên khoảng 60°'], ['Gió Đông cực', 'Từ cực về khoảng 60°']], colW: 250 }), caption: 'Hướng gió bị lệch do Trái Đất tự quay.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Lên cao 100 m giảm 0,6 °C. Gió: áp cao → áp thấp.</div>` }
  ],
  summary: 'Không khí gồm ni-tơ (78%), ô-xy (21%), khí khác (1%). Khí quyển có tầng đối lưu (mây, mưa; lên cao 100 m giảm khoảng 0,6 °C), tầng bình lưu (có lớp ô-dôn) và các tầng cao. Có các khối khí nóng, lạnh, đại dương, lục địa. Gió thổi từ áp cao về áp thấp; các gió thường xuyên: Tín phong, Tây ôn đới, Đông cực.',
  examples: [
    { title: 'Nhiệt độ theo độ cao', problem: 'Chân núi 25 °C. Ở độ cao 2 000 m (so với chân) nhiệt độ khoảng bao nhiêu?', solution: '25 − 0,6 × 20 = 13 °C.' },
    { title: 'Phần trăm', problem: 'Trong 100 lít không khí có khoảng bao nhiêu lít ô-xy?', solution: '21 lít.' },
    { title: 'Gió', problem: 'Vùng A khí áp 1 020 hPa, vùng B 1 005 hPa. Gió thổi theo chiều nào?', solution: 'Từ A sang B (áp cao → áp thấp).' }
  ],
  exercises: [
    { question: 'Chân núi 30 °C, đỉnh cao 1 500 m (so với chân). Nhiệt độ đỉnh?', hints: ['1 500 : 100 = 15.', '30 − 0,6 × 15.'], solution: '21 °C.' },
    { question: 'Trong 500 lít không khí có khoảng bao nhiêu lít ni-tơ?', hints: ['78%.', '500 × 0,78.'], solution: '390 lít.' },
    { question: 'Lớp ô-dôn nằm ở tầng nào, có vai trò gì?', hints: ['Trên tầng đối lưu.', 'Tia cực tím.'], solution: 'Tầng bình lưu; hấp thụ tia cực tím, bảo vệ sự sống.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mây, mưa chủ yếu hình thành ở tầng đối lưu.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Khí chiếm tỉ lệ lớn nhất trong không khí:', options: ['Ni-tơ', 'Ô-xy', 'CO₂', 'Hơi nước'], answer: 0, explain: '78%.' },
    { type: 'short', q: 'Chân núi 25 °C. Lên cao 2 000 m, nhiệt độ khoảng bao nhiêu °C?', answer: '13', unit: '°C', calc: '25-0.6*2000/100', explain: '13.' },
    { type: 'mcq', q: 'Lớp ô-dôn nằm ở:', options: ['Tầng bình lưu', 'Tầng đối lưu', 'Mặt đất', 'Nhân Trái Đất'], answer: 0, explain: 'Bình lưu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Gió thổi từ nơi khí áp thấp về nơi khí áp cao.', answer: false, explain: 'Cao → thấp.' },
    { type: 'short', q: 'Chân núi 30 °C, lên 1 500 m. Nhiệt độ đỉnh (°C)?', answer: '21', unit: '°C', calc: '30-0.6*1500/100', explain: '21.' },
    { type: 'short', q: '500 lít không khí có bao nhiêu lít ni-tơ (78%)?', answer: '390', unit: 'lít', calc: '500*78/100', explain: '390.' },
    { type: 'mcq', q: 'Gió thổi từ khoảng 30° về Xích đạo:', options: ['Tín phong', 'Tây ôn đới', 'Đông cực', 'Gió mùa'], answer: 0, explain: 'Tín phong.' }
  ]
});
})();
