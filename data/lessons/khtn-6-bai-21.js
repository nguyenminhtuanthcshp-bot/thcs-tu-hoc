/* KHTN 6 – Bài 21. Thực hành: Quan sát và phân biệt một số loại tế bào. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-21', {
  objectives: [
    'Làm được tiêu bản tế bào biểu bì vảy hành và quan sát bằng kính hiển vi.',
    'Quan sát được tế bào trứng cá bằng mắt thường hoặc kính lúp.',
    'Vẽ và phân biệt được các thành phần chính của tế bào quan sát được.'
  ],
  intro: 'Bài thực hành giúp em tự tay chuẩn bị mẫu và "nhìn tận mắt" những tế bào thật, kiểm chứng những gì đã học về cấu tạo tế bào.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Dụng cụ: kính hiển vi, kính lúp, lam kính, lamen, kim mũi mác, panh (kẹp), ống nhỏ giọt, giấy thấm, đĩa đồng hồ.</li>
      <li>Mẫu vật: củ hành tây, trứng cá (cá chép hoặc trứng cá mua ở chợ), nước cất, dung dịch xanh methylene loãng (nếu có).</li></ul>
      <div class="box warn">Kim mũi mác và lam kính dễ gây đứt tay; cầm kính hiển vi bằng hai tay (một tay cầm thân, một tay đỡ đế).</div>` },
    { title: 'Làm tiêu bản tế bào vảy hành', html: `<ol><li>Nhỏ một giọt nước cất lên giữa lam kính.</li><li>Bóc một vảy hành, dùng panh lột lớp biểu bì mỏng trong suốt ở mặt trong.</li>
      <li>Đặt mảnh biểu bì vào giọt nước, dàn phẳng, không để gấp nếp.</li><li>Đậy lamen nghiêng từ một cạnh xuống để tránh bọt khí; thấm bớt nước thừa bằng giấy thấm.</li>
      <li>(Có thể nhỏ một giọt xanh methylene ở mép lamen để nhân bắt màu rõ hơn.)</li></ol>` },
    { title: 'Quan sát dưới kính hiển vi', html: `<ol><li>Đặt tiêu bản lên bàn kính, quan sát ở vật kính nhỏ (10x) trước, chỉnh ốc to rồi ốc nhỏ để thấy rõ.</li>
      <li>Chuyển sang vật kính lớn hơn (40x) để thấy chi tiết.</li></ol>
      <p>Em sẽ thấy các tế bào hình <b>đa giác dài</b>, xếp sát nhau như những viên gạch; mỗi tế bào có <b>thành tế bào</b> rõ nét, tế bào chất và một <b>nhân</b> hình tròn sẫm màu. Tế bào vảy hành <b>không có lục lạp</b> (vảy hành nằm trong củ, không nhận ánh sáng).</p>`,
      svg: S.labelled({ w: 520, h: 230, body: '<g fill="#fef9c3" stroke="#a16207" stroke-width="3"><rect x="40" y="40" width="130" height="60"/><rect x="170" y="40" width="130" height="60"/><rect x="300" y="40" width="130" height="60"/><rect x="100" y="100" width="130" height="60"/><rect x="230" y="100" width="130" height="60"/><rect x="360" y="100" width="70" height="60"/><rect x="40" y="100" width="60" height="60"/></g><g fill="#a16207"><circle cx="90" cy="70" r="8"/><circle cx="240" cy="62" r="8"/><circle cx="360" cy="75" r="8"/><circle cx="150" cy="130" r="8"/><circle cx="300" cy="135" r="8"/></g>', labels: [[240, 62, 250, 200, 'Nhân'], [170, 70, 90, 200, 'Thành tế bào'], [330, 115, 420, 200, 'Tế bào chất']] }),
      caption: 'Hình vẽ mô phỏng tế bào biểu bì vảy hành dưới kính hiển vi.' },
    { title: 'Quan sát tế bào trứng cá', html: `<ol><li>Cho trứng cá vào đĩa đồng hồ có ít nước, dùng kim mũi mác tách rời các trứng.</li><li>Quan sát bằng mắt thường hoặc kính lúp.</li></ol>
      <p>Mỗi trứng cá là <b>một tế bào</b> hình cầu, khá lớn (khoảng 1 mm), có màng bao ngoài, bên trong là tế bào chất và một chấm nhỏ là nhân.</p>` },
    { title: 'Báo cáo thực hành', html: `<ul><li>Vẽ hình tế bào quan sát được, chú thích: thành tế bào (vảy hành), màng tế bào, tế bào chất, nhân.</li>
      <li>So sánh: tế bào vảy hành (thực vật) có thành tế bào, hình đa giác; tế bào trứng cá (động vật) không có thành tế bào, hình cầu.</li><li>Rửa sạch, lau khô dụng cụ; cất kính hiển vi đúng quy định.</li></ul>` }
  ],
  summary: 'Làm tiêu bản vảy hành: nhỏ nước, đặt lớp biểu bì mỏng, đậy lamen tránh bọt khí, quan sát từ vật kính nhỏ đến lớn. Tế bào vảy hành hình đa giác, có thành tế bào, nhân, không có lục lạp. Trứng cá là tế bào lớn, hình cầu, quan sát được bằng kính lúp.',
  examples: [
    { title: 'Tránh bọt khí', problem: 'Vì sao phải đặt lamen nghiêng từ một cạnh xuống?', solution: 'Để nước đẩy dần không khí ra, <b>tránh tạo bọt khí</b> che mất tế bào.' },
    { title: 'Vì sao dùng lớp biểu bì mỏng', problem: 'Vì sao phải lấy lớp biểu bì thật mỏng?', solution: 'Kính hiển vi quan sát nhờ ánh sáng <b>xuyên qua</b> mẫu; lớp dày nhiều tầng tế bào chồng lên nhau sẽ tối và khó nhìn.' },
    { title: 'Độ phóng đại', problem: 'Quan sát với thị kính 10x và vật kính 40x thì ảnh được phóng to bao nhiêu lần?', solution: '10 × 40 = <b>400</b> lần.' }
  ],
  exercises: [
    { question: 'Tế bào vảy hành có lục lạp không? Vì sao?', hints: ['Lục lạp phát triển ở phần cây nhận ánh sáng.', 'Vảy hành nằm ở đâu?'], solution: '<b>Không</b>. Vảy hành là phần lá biến đổi nằm trong củ, không nhận được ánh sáng nên không có lục lạp.' },
    { question: 'Nêu hai điểm khác nhau giữa tế bào vảy hành và tế bào trứng cá quan sát được.', hints: ['Hình dạng?', 'Thành tế bào? Kích thước?'], solution: 'Vảy hành: hình đa giác, có thành tế bào, rất nhỏ (phải dùng kính hiển vi). Trứng cá: hình cầu, không có thành tế bào, khá lớn (thấy bằng mắt thường/kính lúp).' },
    { question: 'Với thị kính 10x, muốn phóng to 100 lần thì dùng vật kính nào?', hints: ['Độ phóng đại = thị kính × vật kính.', '100 : 10 = ?'], solution: 'Vật kính <b>10x</b> (10 × 10 = 100).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Khi đậy lamen, cần đặt nghiêng từ một cạnh xuống để:', options: ['Tránh bọt khí', 'Làm tế bào to ra', 'Tế bào bắt màu', 'Làm khô mẫu'], answer: 0, explain: 'Đặt nghiêng giúp đẩy không khí ra ngoài.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tế bào vảy hành có nhiều lục lạp màu xanh.', answer: false, explain: 'Vảy hành không nhận ánh sáng nên không có lục lạp.' },
    { type: 'mcq', q: 'Tế bào biểu bì vảy hành có hình dạng:', options: ['Hình cầu', 'Đa giác, xếp sát nhau', 'Hình sao', 'Hình sợi dài có nhánh'], answer: 1, explain: 'Chúng hình đa giác dài, xếp sát nhau.' },
    { type: 'mcq', q: 'Mỗi trứng cá là:', options: ['Một tế bào', 'Một mô', 'Một cơ quan', 'Nhiều tế bào'], answer: 0, explain: 'Trứng cá là một tế bào lớn.' },
    { type: 'short', q: 'Thị kính 10x, vật kính 40x. Ảnh được phóng to bao nhiêu lần?', answer: '400', unit: 'lần', calc: '10*40', explain: '10 × 40 = 400.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi quan sát, nên bắt đầu với vật kính có độ phóng đại nhỏ.', answer: true, explain: 'Vật kính nhỏ có trường nhìn rộng, dễ tìm mẫu.' },
    { type: 'mcq', q: 'Dung dịch xanh methylene được dùng để:', options: ['Làm nhân tế bào bắt màu, dễ quan sát', 'Giết vi khuẩn', 'Làm lamen dính', 'Làm tế bào to ra'], answer: 0, explain: 'Chất nhuộm giúp nhân hiện rõ hơn.' },
    { type: 'mcq', q: 'Thành phần nào có ở tế bào vảy hành nhưng không có ở tế bào trứng cá?', options: ['Nhân', 'Tế bào chất', 'Thành tế bào', 'Màng tế bào'], answer: 2, explain: 'Tế bào thực vật có thành tế bào.' }
  ]
});
})();
