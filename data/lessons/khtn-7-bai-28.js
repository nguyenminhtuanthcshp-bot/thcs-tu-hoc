/* KHTN 7 – Bài 28. Trao đổi khí ở sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-28', {
  objectives: [
    'Mô tả được quá trình trao đổi khí qua khí khổng của lá.',
    'Nêu được cấu tạo và chức năng của khí khổng.',
    'Dựa vào sơ đồ, mô tả được con đường đi của khí qua các cơ quan của hệ hô hấp ở động vật (ví dụ ở người).'
  ],
  intro: 'Mỗi phút em hít thở khoảng 16 – 20 lần mà không cần nghĩ tới. Còn chiếc lá, dù không có mũi, vẫn “hít thở” qua hàng nghìn lỗ nhỏ li ti trên mỗi xăng-ti-mét vuông bề mặt.',
  steps: [
    { title: 'Trao đổi khí là gì?', html: `<p><b>Trao đổi khí</b> là sự trao đổi các chất khí giữa cơ thể và môi trường: cơ thể lấy vào khí oxygen (cho hô hấp) hoặc carbon dioxide (cho quang hợp) và thải ra khí ngược lại. Khí đi qua bề mặt trao đổi khí theo cơ chế <b>khuếch tán</b>: từ nơi có nồng độ cao đến nơi có nồng độ thấp.</p>` },
    { title: 'Khí khổng và trao đổi khí ở thực vật', html: `<p><b>Khí khổng</b> tập trung nhiều ở lớp biểu bì mặt dưới lá. Mỗi khí khổng gồm <b>hai tế bào hình hạt đậu</b> áp sát nhau, giữa là <b>khe khí khổng</b>. Tế bào hạt đậu no nước thì khe mở; mất nước thì khe đóng.</p>
      <ul><li>Khi quang hợp (ban ngày): carbon dioxide đi vào lá, oxygen đi ra.</li><li>Khi hô hấp: oxygen đi vào, carbon dioxide đi ra.</li><li>Hơi nước cũng thoát ra ngoài qua khí khổng.</li></ul>`,
      svg: S.stomataPair(), caption: 'Khí khổng gồm hai tế bào hình hạt đậu; khe khí khổng mở khi tế bào no nước.' },
    { title: 'Trao đổi khí ở động vật', html: `<table class="tbl"><tr><th>Nhóm động vật</th><th>Cơ quan trao đổi khí</th></tr>
      <tr><td>Giun đất</td><td>Bề mặt da (da luôn ẩm)</td></tr>
      <tr><td>Côn trùng (châu chấu)</td><td>Hệ thống ống khí</td></tr>
      <tr><td>Cá</td><td>Mang</td></tr>
      <tr><td>Ếch</td><td>Phổi và da</td></tr>
      <tr><td>Bò sát, chim, thú, người</td><td>Phổi</td></tr></table>` },
    { title: 'Con đường đi của khí ở người', html: `<p>Không khí đi qua: <b>mũi → họng → thanh quản → khí quản → phế quản → phổi (phế nang)</b>. Ở phế nang, oxygen khuếch tán vào máu trong mao mạch; carbon dioxide khuếch tán từ máu ra phế nang rồi theo đường ngược lại ra ngoài khi thở ra.</p>`,
      svg: [S.flow({ items: ['Mũi', 'Họng', 'Thanh quản', 'Khí quản', 'Phế quản', 'Phế nang'], size: 14, label: 'Đường đi của không khí vào phổi' }), S.alveolus()],
      caption: 'Không khí đi theo đường dẫn khí vào phế nang; tại phế nang diễn ra trao đổi oxygen và carbon dioxide với máu.' }
  ],
  summary: 'Trao đổi khí diễn ra theo cơ chế khuếch tán. Ở thực vật, khí trao đổi chủ yếu qua khí khổng (hai tế bào hạt đậu, khe mở khi no nước). Ở động vật: qua da (giun đất), ống khí (côn trùng), mang (cá), phổi (bò sát, chim, thú, người). Ở người: mũi → họng → thanh quản → khí quản → phế quản → phế nang.',
  examples: [
    { title: 'Chiều khuếch tán ở phế nang', problem: 'Vì sao oxygen đi từ phế nang vào máu còn carbon dioxide đi từ máu ra phế nang?', solution: 'Khí khuếch tán từ nơi nồng độ cao đến nơi nồng độ thấp: trong phế nang oxygen nhiều hơn trong máu, còn carbon dioxide trong máu nhiều hơn trong phế nang.' },
    { title: 'Tính số khí khổng', problem: 'Mặt dưới lá có khoảng 300 khí khổng trên 1 mm². Một mảnh lá 1 cm² có khoảng bao nhiêu khí khổng? (1 cm² = 100 mm²)', solution: '300 · 100 = 30 000 khí khổng.' },
    { title: 'Tính thể tích khí hít vào', problem: 'Một người thở 16 lần mỗi phút, mỗi lần hít vào khoảng 500 mL không khí. Trong 1 phút người đó hít vào bao nhiêu lít không khí?', solution: '16 · 500 = 8 000 mL = 8 L.' }
  ],
  exercises: [
    { question: 'Vì sao khí khổng thường tập trung ở mặt dưới lá?', hints: ['Mặt nào bị ánh nắng chiếu trực tiếp?', 'Khí khổng liên quan đến sự thoát hơi nước.'], solution: 'Mặt dưới ít bị ánh nắng chiếu trực tiếp nên nhiệt độ thấp hơn, giúp hạn chế mất nước quá mức qua khí khổng mà vẫn trao đổi khí được.' },
    { question: 'Vì sao giun đất bò lên mặt đất khi trời mưa to kéo dài?', hints: ['Giun đất trao đổi khí qua đâu?', 'Đất ngập nước thì oxygen thế nào?'], solution: 'Giun đất trao đổi khí qua da. Đất ngập nước thiếu oxygen nên giun phải chui lên mặt đất để lấy oxygen.' },
    { question: 'Một người thở 18 lần/phút, mỗi lần hít vào 500 mL. Trong 1 giờ người đó hít vào bao nhiêu lít không khí?', hints: ['Mỗi phút: 18 · 500 mL.', '1 giờ = 60 phút; đổi mL sang L.'], solution: '18 · 500 · 60 = 540 000 mL = 540 L.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi khí khổng gồm hai tế bào hình hạt đậu.', answer: true, explain: 'Giữa hai tế bào là khe khí khổng.' },
    { type: 'mcq', q: 'Cá trao đổi khí bằng:', options: ['phổi', 'mang', 'da', 'hệ thống ống khí'], answer: 1, explain: 'Mang lấy oxygen hoà tan trong nước.' },
    { type: 'mcq', q: 'Ở người, trao đổi khí giữa không khí và máu diễn ra ở:', options: ['khí quản', 'thanh quản', 'phế nang', 'họng'], answer: 2, explain: 'Phế nang được bao quanh bởi mạng mao mạch.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi tế bào hạt đậu mất nước, khe khí khổng mở rộng.', answer: false, explain: 'Mất nước thì khe khí khổng đóng.' },
    { type: 'short', q: 'Mặt dưới lá có 300 khí khổng/mm². Diện tích 1 cm² (= 100 mm²) có bao nhiêu khí khổng?', answer: '30000', unit: 'khí khổng', calc: '300*100', explain: '300 · 100 = 30 000.' },
    { type: 'short', q: 'Thở 16 lần/phút, mỗi lần hít 500 mL. Một phút hít vào bao nhiêu lít không khí?', answer: '8', unit: 'L', calc: '16*500/1000', explain: '8 000 mL = 8 L.' },
    { type: 'mcq', q: 'Ếch trao đổi khí bằng:', options: ['chỉ mang', 'phổi và da', 'chỉ ống khí', 'chỉ da'], answer: 1, explain: 'Da ếch ẩm hỗ trợ trao đổi khí.' },
    { type: 'short', q: 'Thở 18 lần/phút, mỗi lần 500 mL. Trong 1 giờ hít vào bao nhiêu lít?', answer: '540', unit: 'L', calc: '18*500*60/1000', explain: '540 000 mL = 540 L.' }
  ]
});
})();
