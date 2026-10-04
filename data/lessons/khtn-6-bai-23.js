/* KHTN 6 – Bài 23. Tổ chức cơ thể đa bào. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-23', {
  objectives: [
    'Nêu được các cấp độ tổ chức của cơ thể đa bào: tế bào → mô → cơ quan → hệ cơ quan → cơ thể.',
    'Nêu được khái niệm mô, cơ quan, hệ cơ quan và lấy ví dụ ở thực vật, động vật.',
    'Nhận biết được hệ chồi, hệ rễ ở thực vật và một số hệ cơ quan ở người.'
  ],
  intro: 'Một ngôi trường có học sinh, lớp học, khối lớp, cả trường. Cơ thể đa bào cũng được tổ chức theo nhiều cấp, cấp nhỏ hợp thành cấp lớn.',
  steps: [
    { title: 'Các cấp độ tổ chức', html: `<p>Ở cơ thể đa bào, các cấp tổ chức từ nhỏ đến lớn:</p>`,
      svg: S.flow({ items: ['Tế bào', 'Mô', 'Cơ quan', 'Hệ cơ quan', 'Cơ thể'], w: 640, size: 14 }).replace('Sơ đồ các bước', 'Các cấp độ tổ chức cơ thể đa bào'),
      caption: 'Cấp nhỏ hợp thành cấp lớn hơn.' },
    { title: 'Mô', html: `<p><b>Mô</b> là tập hợp các tế bào <b>giống nhau</b> (về hình dạng, cấu tạo) cùng thực hiện <b>một chức năng</b>.</p>
      <ul><li>Ở người/động vật: mô cơ, mô thần kinh, mô biểu bì, mô liên kết (xương, máu…).</li><li>Ở thực vật: mô phân sinh (giúp cây lớn), mô biểu bì, mô dẫn (mạch gỗ, mạch rây), mô mềm.</li></ul>` },
    { title: 'Cơ quan', html: `<p><b>Cơ quan</b> được tạo thành từ <b>nhiều mô</b> khác nhau cùng thực hiện một chức năng nhất định.</p>
      <ul><li>Ở người: tim, dạ dày, phổi, não, da…</li><li>Ở thực vật: rễ, thân, lá, hoa, quả.</li></ul>
      <p>Ví dụ: dạ dày gồm mô cơ (co bóp), mô biểu bì (tiết dịch), mô thần kinh, mô liên kết…</p>` },
    { title: 'Hệ cơ quan', html: `<p><b>Hệ cơ quan</b> gồm <b>nhiều cơ quan</b> cùng phối hợp thực hiện một chức năng chung.</p>
      <table class="tbl"><tr><th>Hệ cơ quan ở người</th><th>Một số cơ quan</th><th>Chức năng</th></tr>
      <tr><td>Tiêu hoá</td><td>Miệng, thực quản, dạ dày, ruột</td><td>Biến đổi, hấp thụ thức ăn</td></tr><tr><td>Tuần hoàn</td><td>Tim, mạch máu</td><td>Vận chuyển chất</td></tr>
      <tr><td>Hô hấp</td><td>Mũi, khí quản, phổi</td><td>Trao đổi khí</td></tr><tr><td>Bài tiết</td><td>Thận, bóng đái</td><td>Lọc máu, thải nước tiểu</td></tr><tr><td>Vận động</td><td>Xương, cơ</td><td>Nâng đỡ, cử động</td></tr></table>
      <p>Cây có hoa có hai hệ cơ quan: <b>hệ chồi</b> (thân, lá, hoa, quả, hạt – trên mặt đất) và <b>hệ rễ</b> (dưới mặt đất).</p>` },
    { title: 'Cơ thể là một thể thống nhất', html: `<p>Các hệ cơ quan phối hợp nhịp nhàng tạo nên <b>cơ thể</b> hoàn chỉnh. Ví dụ khi chạy: hệ vận động hoạt động mạnh, hệ hô hấp thở nhanh hơn để lấy nhiều oxygen, hệ tuần hoàn tim đập nhanh để đưa máu đi, hệ thần kinh điều khiển tất cả.</p>` }
  ],
  summary: 'Cơ thể đa bào tổ chức theo các cấp: tế bào → mô → cơ quan → hệ cơ quan → cơ thể. Mô gồm các tế bào giống nhau cùng chức năng; cơ quan gồm nhiều mô; hệ cơ quan gồm nhiều cơ quan phối hợp. Cây có hoa có hệ chồi và hệ rễ.',
  examples: [
    { title: 'Xác định cấp độ', problem: 'Tim, tế bào cơ tim, hệ tuần hoàn, mô cơ tim thuộc cấp độ tổ chức nào? Sắp xếp từ nhỏ đến lớn.', solution: 'Tế bào cơ tim (tế bào) → mô cơ tim (mô) → tim (cơ quan) → hệ tuần hoàn (hệ cơ quan).' },
    { title: 'Hệ chồi, hệ rễ', problem: 'Hoa, rễ cọc, lá, quả thuộc hệ cơ quan nào ở cây?', solution: 'Hệ chồi: <b>hoa, lá, quả</b>. Hệ rễ: <b>rễ cọc</b>.' },
    { title: 'Phối hợp', problem: 'Khi ăn cơm, những hệ cơ quan nào tham gia?', solution: 'Hệ vận động (nhai, cầm đũa), hệ tiêu hoá (biến đổi thức ăn), hệ tuần hoàn (vận chuyển chất dinh dưỡng), hệ thần kinh (điều khiển)… Các hệ phối hợp với nhau.' }
  ],
  exercises: [
    { question: 'Vì sao lá cây được gọi là một cơ quan, còn biểu bì lá chỉ là một mô?', hints: ['Biểu bì gồm loại tế bào nào?', 'Lá gồm những mô nào?'], solution: 'Biểu bì lá gồm các tế bào giống nhau cùng làm nhiệm vụ che chở → là <b>mô</b>. Lá được tạo thành từ nhiều mô (biểu bì, mô mềm chứa lục lạp, mô dẫn…) cùng thực hiện chức năng quang hợp → là <b>cơ quan</b>.' },
    { question: 'Kể tên hệ cơ quan có chức năng trao đổi khí ở người và hai cơ quan của nó.', hints: ['Trao đổi khí là hít oxygen, thải carbon dioxide.', 'Không khí đi qua mũi, xuống phổi.'], solution: '<b>Hệ hô hấp</b>: mũi, khí quản, phổi.' },
    { question: 'Sắp xếp: cơ thể, mô, hệ cơ quan, tế bào, cơ quan theo thứ tự từ lớn đến nhỏ.', hints: ['Lớn nhất là cơ thể.', 'Nhỏ nhất là tế bào.'], solution: 'Cơ thể → hệ cơ quan → cơ quan → mô → tế bào.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Thứ tự các cấp tổ chức của cơ thể đa bào từ nhỏ đến lớn là:', keepOrder: true, options: ['Tế bào → mô → cơ quan → hệ cơ quan → cơ thể', 'Mô → tế bào → cơ quan → hệ cơ quan → cơ thể', 'Tế bào → cơ quan → mô → hệ cơ quan → cơ thể', 'Cơ thể → hệ cơ quan → cơ quan → mô → tế bào'], answer: 0, explain: 'Tế bào hợp thành mô, mô hợp thành cơ quan…' },
    { type: 'mcq', q: 'Mô là:', options: ['Tập hợp các tế bào giống nhau cùng thực hiện một chức năng', 'Tập hợp nhiều cơ quan', 'Một tế bào lớn', 'Toàn bộ cơ thể'], answer: 0, explain: 'Định nghĩa mô.' },
    { type: 'mcq', q: 'Cơ quan nào thuộc hệ tiêu hoá?', options: ['Tim', 'Phổi', 'Dạ dày', 'Thận'], answer: 2, explain: 'Dạ dày biến đổi thức ăn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hệ chồi của cây gồm rễ, thân và lá.', answer: false, explain: 'Rễ thuộc hệ rễ; hệ chồi gồm thân, lá, hoa, quả, hạt.' },
    { type: 'mcq', q: 'Tim và mạch máu thuộc hệ cơ quan:', options: ['Hô hấp', 'Tuần hoàn', 'Bài tiết', 'Thần kinh'], answer: 1, explain: 'Hệ tuần hoàn vận chuyển máu.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một cơ quan được cấu tạo từ nhiều loại mô khác nhau.', answer: true, explain: 'Ví dụ dạ dày có mô cơ, mô biểu bì, mô thần kinh…' },
    { type: 'mcq', q: 'Thận thuộc hệ cơ quan nào?', options: ['Bài tiết', 'Tiêu hoá', 'Vận động', 'Hô hấp'], answer: 0, explain: 'Thận lọc máu, tạo nước tiểu.' },
    { type: 'short', q: 'Tập hợp nhiều cơ quan cùng phối hợp thực hiện một chức năng chung gọi là gì? (điền 3 tiếng)', answer: ['hệ cơ quan', 'he co quan'], answerText: 'hệ cơ quan', explain: 'Ví dụ hệ tiêu hoá, hệ tuần hoàn.' }
  ]
});
})();
