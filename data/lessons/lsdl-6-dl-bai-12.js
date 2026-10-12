/* LS&ĐL 6 – Địa lí, Bài 12. Núi lửa và động đất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-12', {
  objectives: [
    'Trình bày được hiện tượng núi lửa, động đất và nguyên nhân.',
    'Nêu được tác hại và lợi ích của núi lửa.',
    'Biết cách ứng phó khi có động đất.',
    'Xác định khu vực hay xảy ra động đất, núi lửa trên thế giới.'
  ],
  intro: 'Ngày 26/12/2004, một trận động đất rất mạnh dưới đáy Ấn Độ Dương gần đảo Xu-ma-tơ-ra gây sóng thần, cướp đi hơn 200 000 sinh mạng ở nhiều nước. Vì sao <b>động đất</b> và <b>núi lửa</b> xảy ra, và ta phải làm gì để an toàn?',
  steps: [
    { title: 'Núi lửa', html: `<ul><li>Là hiện tượng <b>mác-ma</b> từ dưới sâu phun trào lên bề mặt.</li><li>Cấu tạo: lò mác-ma, ống phun, miệng núi lửa.</li><li>Tác hại: phá huỷ nhà cửa, đồng ruộng, gây ô nhiễm không khí. Lợi ích: đất đỏ ba-dan màu mỡ, khoáng sản, nước nóng, du lịch.</li></ul>` },
    { title: 'Động đất', html: `<p>Là hiện tượng rung chuyển đột ngột của vỏ Trái Đất, chủ yếu do các mảng kiến tạo dịch chuyển. Độ mạnh đo bằng <b>thang độ lớn</b> (Rích-te): mỗi bậc tăng, năng lượng giải phóng tăng khoảng 32 lần.</p>` },
    { title: 'Nơi hay xảy ra', html: `<p>Ranh giới các mảng kiến tạo, đặc biệt là <b>“Vành đai lửa Thái Bình Dương”</b>:</p>`,
      svg: S.table({ title: 'Một số trận động đất lớn (tư liệu)', head: ['Thời gian, nơi', 'Độ lớn (khoảng)'], rows: [['26/12/2004 – Ấn Độ Dương', '9,1 – 9,3, gây sóng thần'], ['11/3/2011 – Đông Bắc Nhật Bản', '9,0 – 9,1, gây sóng thần'], ['6/2/2023 – Thổ Nhĩ Kỳ', '7,8']], colW: 250 }), caption: 'Độ lớn theo các cơ quan địa chấn quốc tế, làm tròn.' },
    { title: 'Ứng phó khi có động đất', html: `<p>Ghi nhớ ba bước:</p>`,
      svg: S.flowchart({ title: 'Khi có động đất', steps: [{ t: 'start', s: 'Cúi xuống' }, { t: 'proc', s: 'Chui dưới bàn chắc' }, { t: 'proc', s: 'Bám chặt, che đầu' }, { t: 'end', s: 'Ra chỗ trống' }] }), caption: 'Không dùng thang máy; tránh xa cửa kính, tường yếu.' }
  ],
  summary: 'Núi lửa là hiện tượng mác-ma phun trào lên mặt đất; gây thiệt hại nhưng cũng tạo đất ba-dan màu mỡ, khoáng sản. Động đất là rung chuyển đột ngột của vỏ Trái Đất, chủ yếu do mảng kiến tạo dịch chuyển, đo bằng thang độ lớn. Chúng thường xảy ra ở ranh giới các mảng, nhất là Vành đai lửa Thái Bình Dương. Khi có động đất: cúi xuống – chui dưới bàn – bám chặt.',
  examples: [
    { title: 'Năng lượng', problem: 'Động đất 7 độ giải phóng năng lượng gấp khoảng bao nhiêu lần động đất 6 độ?', solution: 'Khoảng 32 lần.' },
    { title: 'Năng lượng', problem: 'Động đất 8 độ so với 6 độ gấp khoảng bao nhiêu lần?', solution: '32 × 32 = 1 024 ≈ 1 000 lần.' },
    { title: 'Lợi ích', problem: 'Vùng Tây Nguyên có đất ba-dan nhờ đâu?', solution: 'Do dung nham núi lửa thời xa xưa phong hoá thành.' }
  ],
  exercises: [
    { question: 'Kể ba bước ứng phó khi có động đất.', hints: ['Hạ thấp người.', 'Tìm chỗ che chắn.'], solution: 'Cúi xuống, chui dưới bàn chắc chắn, bám chặt và che đầu.' },
    { question: 'Từ động đất 2004 đến 2011 cách nhau bao nhiêu năm?', hints: ['2011 − 2004.', 'Số nhỏ hơn 10.'], solution: '7 năm.' },
    { question: 'Nêu hai lợi ích của núi lửa.', hints: ['Đất.', 'Năng lượng, du lịch.'], solution: 'Đất ba-dan màu mỡ; khoáng sản, suối nước nóng, du lịch.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Động đất thường xảy ra ở ranh giới các mảng kiến tạo.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Vật chất phun ra từ núi lửa là:', options: ['Mác-ma (dung nham)', 'Nước biển', 'Băng tuyết', 'Cát sa mạc'], answer: 0, explain: 'Mác-ma.' },
    { type: 'short', q: 'Mỗi bậc độ lớn năng lượng tăng khoảng 32 lần. Từ 6 lên 8 tăng khoảng bao nhiêu lần?', answer: '1024', answerText: '1 024', unit: 'lần', calc: '32*32', explain: '≈ 1 000.' },
    { type: 'mcq', q: 'Khu vực nhiều động đất, núi lửa nhất thế giới:', options: ['Vành đai lửa Thái Bình Dương', 'Hoang mạc Xa-ha-ra', 'Đồng bằng Tây Xi-bia', 'Châu Nam Cực'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi có động đất nên dùng thang máy để thoát nhanh.', answer: false, explain: 'Không dùng thang máy.' },
    { type: 'short', q: 'Từ năm 2004 đến năm 2011 là bao nhiêu năm?', answer: '7', unit: 'năm', calc: '2011-2004', explain: '7.' },
    { type: 'mcq', q: 'Đất hình thành từ dung nham núi lửa:', options: ['Đất ba-dan', 'Đất phù sa', 'Đất cát', 'Đất phèn'], answer: 0, explain: 'Ba-dan.' },
    { type: 'mcq', q: 'Thảm hoạ thường đi kèm động đất dưới đáy biển:', options: ['Sóng thần', 'Hạn hán', 'Mưa đá', 'Cháy rừng'], answer: 0, explain: 'Sóng thần.' }
  ]
});
})();
