/* LS&ĐL 6 – Địa lí, Bài 17. Thời tiết và khí hậu. Biến đổi khí hậu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-17', {
  objectives: [
    'Phân biệt được thời tiết và khí hậu.',
    'Trình bày được sự phân chia các đới khí hậu trên Trái Đất.',
    'Nêu được một số biểu hiện của biến đổi khí hậu.',
    'Trình bày được một số biện pháp phòng tránh thiên tai và ứng phó với biến đổi khí hậu.'
  ],
  intro: '“Hôm nay trời mưa” là nói về thời tiết; “Hà Nội có mùa đông lạnh” là nói về khí hậu. Và khi những đợt nắng nóng kỉ lục ngày càng nhiều, người ta nói đến <b>biến đổi khí hậu</b>.',
  steps: [
    { title: 'Thời tiết và khí hậu', html: `<ul><li><b>Thời tiết</b>: trạng thái khí quyển ở một nơi trong thời gian ngắn, luôn thay đổi.</li><li><b>Khí hậu</b>: sự lặp đi lặp lại của thời tiết trong thời gian dài (nhiều năm), có tính quy luật.</li></ul>` },
    { title: 'Các đới khí hậu', html: `<p>Năm đới khí hậu theo vĩ độ:</p>`,
      svg: S.table({ title: 'Các đới khí hậu trên Trái Đất', head: ['Đới (số lượng)', 'Phạm vi, đặc điểm'], rows: [['Nhiệt đới (1)', 'Giữa hai chí tuyến; nóng quanh năm'], ['Ôn đới (2)', 'Từ chí tuyến đến vòng cực; bốn mùa rõ'], ['Hàn đới (2)', 'Từ vòng cực đến cực; lạnh quanh năm']], colW: 250 }), caption: 'Chí tuyến 23°27′, vòng cực 66°33′. Việt Nam thuộc đới nóng (nhiệt đới).' },
    { title: 'Biến đổi khí hậu', html: `<p>Biểu hiện: nhiệt độ trung bình toàn cầu tăng (khoảng 1,1 °C thập kỉ 2011 – 2020 so với thời kì tiền công nghiệp, theo IPCC), băng tan, mực nước biển dâng, thiên tai cực đoan gia tăng. Nguyên nhân chính: khí nhà kính từ hoạt động con người.</p>`,
      svg: S.mindmap({ center: 'Ứng phó BĐKH', branches: [{ title: 'Giảm nhẹ', items: ['Tiết kiệm điện', 'Trồng cây xanh'] }, { title: 'Thích ứng', items: ['Giống cây chịu hạn, mặn', 'Nhà chống bão lũ'] }, { title: 'Phòng tránh thiên tai', items: ['Theo dõi dự báo', 'Sơ tán khi cần'] }, { title: 'Học sinh', items: ['Đi xe đạp, đi bộ', 'Giảm rác nhựa'] }], w: 640, size: 13 }), caption: 'BĐKH: biến đổi khí hậu.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Thời tiết: ngắn, hay đổi. Khí hậu: dài, có quy luật.</div>` }
  ],
  summary: 'Thời tiết là trạng thái khí quyển trong thời gian ngắn; khí hậu là quy luật thời tiết trong nhiều năm. Trái Đất có 5 đới khí hậu: 1 nhiệt đới, 2 ôn đới, 2 hàn đới (ranh giới: chí tuyến 23°27′, vòng cực 66°33′). Biến đổi khí hậu biểu hiện qua nhiệt độ tăng, băng tan, nước biển dâng, thiên tai cực đoan; cần giảm nhẹ và thích ứng.',
  examples: [
    { title: 'Phân biệt', problem: '“Chiều nay có giông” là thời tiết hay khí hậu?', solution: 'Thời tiết.' },
    { title: 'Đếm đới', problem: 'Tổng số đới khí hậu?', solution: '1 + 2 + 2 = 5 đới.' },
    { title: 'Tính độ', problem: 'Vòng cực 66°33′, chí tuyến 23°27′. Đới ôn đới rộng bao nhiêu độ vĩ?', solution: '66°33′ − 23°27′ = 43°06′.' }
  ],
  exercises: [
    { question: 'Việt Nam nằm trong đới khí hậu nào?', hints: ['Giữa hai chí tuyến?', 'Việt Nam từ khoảng 8°B đến 23°B.'], solution: 'Đới nóng (nhiệt đới).' },
    { question: 'Từ chí tuyến (23°27′) đến cực (90°) bao nhiêu độ? Đổi ra phút góc tổng cộng.', hints: ['90° − 23°27′ = 66°33′.', '66 × 60 + 33.'], solution: '66°33′ = 3 993′.' },
    { question: 'Nêu ba việc học sinh làm để giảm biến đổi khí hậu.', hints: ['Điện.', 'Đi lại, rác.'], solution: 'Tắt điện khi không dùng; đi bộ, xe đạp; giảm rác nhựa; trồng cây.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khí hậu là sự lặp đi lặp lại của thời tiết trong nhiều năm.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Trái Đất có bao nhiêu đới khí hậu?', answer: '5', unit: 'đới', calc: '1+2+2', explain: '5.' },
    { type: 'mcq', q: 'Việt Nam thuộc đới:', options: ['Nhiệt đới', 'Ôn đới', 'Hàn đới', 'Cận cực'], answer: 0, explain: 'Nhiệt đới.' },
    { type: 'mcq', q: 'Biểu hiện của biến đổi khí hậu:', options: ['Mực nước biển dâng', 'Trái Đất ngừng quay', 'Mặt Trời tắt', 'Không còn ngày đêm'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Ngày mai trời nắng” là nói về khí hậu.', answer: false, explain: 'Thời tiết.' },
    { type: 'short', q: '66°33′ bằng bao nhiêu phút góc?', answer: '3993', answerText: '3 993', unit: '′', calc: '66*60+33', explain: '3 993.' },
    { type: 'mcq', q: 'Ranh giới giữa đới nóng và đới ôn hoà:', options: ['Chí tuyến', 'Vòng cực', 'Xích đạo', 'Kinh tuyến gốc'], answer: 0, explain: 'Chí tuyến.' },
    { type: 'mcq', q: 'Nguyên nhân chính của biến đổi khí hậu hiện nay:', options: ['Khí nhà kính từ hoạt động con người', 'Động đất', 'Thuỷ triều', 'Sao băng'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
