/* LS&ĐL 6 – Địa lí, Bài 28. Mối quan hệ giữa con người và thiên nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-28', {
  objectives: [
    'Nêu được các tác động của thiên nhiên lên hoạt động sản xuất và sinh hoạt của con người.',
    'Trình bày được những tác động chủ yếu của loài người lên thiên nhiên.',
    'Phân biệt tác động tích cực và tiêu cực.',
    'Có ý thức sống hài hoà với thiên nhiên.'
  ],
  intro: 'Người dân đồng bằng sông Cửu Long dựng nhà sàn, đi lại bằng xuồng để “sống chung với lũ”. Ngược lại, con người cũng đắp đê, xây đập, phá rừng, làm thay đổi thiên nhiên. Đó là <b>mối quan hệ hai chiều</b> giữa con người và thiên nhiên.',
  steps: [
    { title: 'Thiên nhiên tác động đến con người', html: `<ul><li>Sinh hoạt: nhà ở, trang phục, ăn uống thích nghi với khí hậu (nhà sàn vùng lũ, áo ấm vùng lạnh).</li><li>Sản xuất: đồng bằng màu mỡ trồng lúa; vùng núi trồng cây công nghiệp, chăn nuôi; ven biển đánh bắt hải sản.</li><li>Thiên tai: bão, lũ, hạn hán gây thiệt hại.</li></ul>` },
    { title: 'Con người tác động đến thiên nhiên', html: `<p>Hai chiều tác động:</p>`,
      svg: S.table({ title: 'Tác động của con người', head: ['Tích cực', 'Tiêu cực'], rows: [['Trồng rừng, phủ xanh đồi trọc', 'Chặt phá rừng'], ['Xây hồ chứa, thuỷ lợi', 'Xả thải gây ô nhiễm'], ['Lập khu bảo tồn', 'Săn bắt động vật hoang dã'], ['Cải tạo đất', 'Khai thác khoáng sản bừa bãi']], colW: 250 }), caption: 'Tác động tiêu cực quay lại gây hại cho chính con người.' },
    { title: 'Chuỗi hệ quả', html: `<p>Ví dụ:</p>`,
      svg: S.flowchart({ title: 'Phá rừng đầu nguồn', steps: [{ t: 'start', s: 'Chặt phá rừng' }, { t: 'proc', s: 'Đất bị xói mòn' }, { t: 'proc', s: 'Lũ quét, sạt lở' }, { t: 'end', s: 'Thiệt hại người, của' }] }), caption: 'Bảo vệ rừng đầu nguồn là bảo vệ chính mình.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Con người là một phần của thiên nhiên – cần sống hài hoà, khai thác hợp lí.</div>` }
  ],
  summary: 'Thiên nhiên ảnh hưởng đến sinh hoạt (nhà ở, trang phục), sản xuất (nông nghiệp, đánh bắt) và gây thiên tai. Con người tác động lên thiên nhiên theo hai chiều: tích cực (trồng rừng, thuỷ lợi, bảo tồn) và tiêu cực (phá rừng, ô nhiễm, săn bắt, khai thác bừa bãi). Tác động tiêu cực quay lại gây hại cho con người; cần sống hài hoà với thiên nhiên.',
  examples: [
    { title: 'Thích nghi', problem: 'Vì sao người vùng lũ làm nhà sàn?', solution: 'Để tránh ngập nước khi lũ lên.' },
    { title: 'Tính diện tích', problem: 'Một xã phủ xanh 30 ha đồi trọc mỗi năm. Sau 5 năm?', solution: '150 ha.' },
    { title: 'Phân loại', problem: '“Xả nước thải chưa xử lí ra sông” là tác động gì?', solution: 'Tiêu cực.' }
  ],
  exercises: [
    { question: 'Nêu hai tác động tích cực của con người đến thiên nhiên.', hints: ['Cây xanh.', 'Bảo tồn.'], solution: 'Trồng rừng; lập vườn quốc gia, khu bảo tồn.' },
    { question: 'Rừng 800 ha bị chặt 25%. Còn bao nhiêu ha?', hints: ['800 × 25% = 200.', '800 − 200.'], solution: '600 ha.' },
    { question: 'Vì sao phá rừng đầu nguồn gây lũ quét?', hints: ['Rễ cây giữ đất, nước.', 'Mất rừng thì sao?'], solution: 'Mất rừng, đất không giữ được nước, mưa lớn chảy mạnh cuốn theo đất đá gây lũ quét.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Con người và thiên nhiên có mối quan hệ tác động qua lại.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Tác động tích cực:', options: ['Trồng rừng', 'Phá rừng', 'Xả rác ra biển', 'Săn bắt thú quý'], answer: 0, explain: 'Trồng rừng.' },
    { type: 'short', q: 'Phủ xanh 30 ha/năm. Sau 5 năm bao nhiêu ha?', answer: '150', unit: 'ha', calc: '30*5', explain: '150.' },
    { type: 'mcq', q: 'Hậu quả của phá rừng đầu nguồn:', options: ['Lũ quét, sạt lở', 'Không khí trong lành hơn', 'Đất màu mỡ hơn', 'Thêm nước ngầm'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thiên nhiên không ảnh hưởng đến trang phục của con người.', answer: false, explain: 'Có ảnh hưởng.' },
    { type: 'short', q: 'Rừng 800 ha bị chặt 25%. Còn bao nhiêu ha?', answer: '600', unit: 'ha', calc: '800*(100-25)/100', explain: '600.' },
    { type: 'mcq', q: 'Nhà sàn ở vùng lũ là ví dụ về:', options: ['Con người thích nghi với thiên nhiên', 'Phá hoại thiên nhiên', 'Ô nhiễm môi trường', 'Khai thác khoáng sản'], answer: 0, explain: 'Thích nghi.' },
    { type: 'short', q: 'Một hồ chứa 2 000 000 m³, xả 10%. Còn bao nhiêu m³?', answer: '1800000', answerText: '1 800 000', unit: 'm³', calc: '2000000*0.9', explain: '1 800 000.' }
  ]
});
})();
