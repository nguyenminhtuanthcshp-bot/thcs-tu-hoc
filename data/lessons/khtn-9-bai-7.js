/* KHTN 9 – Bài 7. Lăng kính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-7', {
  objectives: [
    'Mô tả được cấu tạo của lăng kính và đường truyền của tia sáng đơn sắc qua lăng kính.',
    'Mô tả được hiện tượng tán sắc ánh sáng trắng qua lăng kính.',
    'Giải thích được màu sắc của vật dựa vào ánh sáng mà vật phản xạ (hoặc cho truyền qua).'
  ],
  intro: 'Năm 1666, Newton chiếu một chùm ánh sáng Mặt Trời qua khối thuỷ tinh hình lăng trụ và thu được một dải màu từ đỏ đến tím trên tường. Ánh sáng trắng thực chất là hỗn hợp của nhiều ánh sáng màu.',
  steps: [
    { title: 'Cấu tạo lăng kính', html: `<p><b>Lăng kính</b> là một khối chất trong suốt (thuỷ tinh, nhựa…) hình lăng trụ, thường có tiết diện thẳng là <b>tam giác</b>.</p>
      <ul><li>Hai mặt bên mà ánh sáng đi vào và đi ra.</li><li>Cạnh của lăng kính là giao tuyến của hai mặt bên; mặt đối diện cạnh là <b>đáy</b>.</li><li>Góc giữa hai mặt bên là <b>góc chiết quang</b> A.</li></ul>` },
    { title: 'Đường truyền tia sáng đơn sắc', html: `<p>Tia sáng đơn sắc chiếu tới mặt bên bị khúc xạ hai lần (khi vào và khi ra khỏi lăng kính). Tia ló bị <b>lệch về phía đáy</b> so với tia tới.</p>
      <p>Góc hợp bởi tia tới và tia ló gọi là <b>góc lệch</b> D.</p>`,
      svg: S.prism(), caption: 'Tia sáng đơn sắc qua lăng kính bị khúc xạ hai lần và lệch về phía đáy.' },
    { title: 'Tán sắc ánh sáng trắng', html: `<p>Chiếu chùm ánh sáng trắng hẹp qua lăng kính, phía sau thu được <b>dải màu</b> liên tục: đỏ, da cam, vàng, lục, lam, chàm, tím.</p>
      <p>Nguyên nhân: chiết suất của thuỷ tinh đối với mỗi ánh sáng màu khác nhau – lớn nhất với ánh sáng tím, nhỏ nhất với ánh sáng đỏ – nên mỗi màu bị lệch một góc khác nhau. Tia <b>tím lệch nhiều nhất</b>, tia <b>đỏ lệch ít nhất</b>.</p>
      <div class="box key">Hiện tượng tán sắc chứng tỏ ánh sáng trắng là hỗn hợp của nhiều ánh sáng màu. Cầu vồng là hiện tượng tán sắc ánh sáng Mặt Trời trong các giọt nước.</div>`,
      svg: S.prism({ mode: 'tan-sac' }), caption: 'Ánh sáng trắng bị tán sắc: tia đỏ lệch ít nhất, tia tím lệch nhiều nhất.' },
    { title: 'Màu sắc của vật', html: `<ul><li>Vật có màu nào thì <b>phản xạ mạnh</b> ánh sáng màu đó và hấp thụ các ánh sáng màu khác. Lá cây màu lục phản xạ mạnh ánh sáng lục.</li><li>Vật màu trắng phản xạ hầu hết các ánh sáng màu; vật màu đen hấp thụ hầu hết ánh sáng.</li><li>Tấm lọc màu đỏ chỉ cho ánh sáng đỏ đi qua.</li></ul>
      <table><tr><th>Vật</th><th>Dưới ánh sáng trắng</th><th>Dưới ánh sáng đỏ</th></tr><tr><td>Áo trắng</td><td>trắng</td><td>đỏ</td></tr><tr><td>Lá cây xanh lục</td><td>lục</td><td>gần như đen</td></tr><tr><td>Bông hoa đỏ</td><td>đỏ</td><td>đỏ</td></tr></table>` }
  ],
  summary: 'Lăng kính là khối trong suốt hình lăng trụ tam giác. Tia đơn sắc qua lăng kính khúc xạ hai lần, lệch về phía đáy. Ánh sáng trắng qua lăng kính bị tán sắc thành dải màu đỏ → tím (tím lệch nhiều nhất). Vật có màu nào thì phản xạ mạnh ánh sáng màu đó.',
  examples: [
    { title: 'Nhận xét đường truyền', problem: 'Tia sáng đỏ chiếu tới mặt bên lăng kính. Sau khi ló ra, tia sáng lệch về phía nào?', solution: 'Tia ló lệch về phía đáy của lăng kính so với tia tới.' },
    { title: 'So sánh độ lệch', problem: 'Trong dải màu thu được sau lăng kính, màu nào ở gần đáy lăng kính nhất?', solution: 'Ánh sáng tím bị lệch nhiều nhất nên nằm gần phía đáy nhất (xa cạnh nhất); ánh sáng đỏ lệch ít nhất.' },
    { title: 'Màu sắc vật', problem: 'Nhìn một tờ giấy trắng qua tấm lọc màu xanh lam, ta thấy giấy màu gì? Vì sao?', solution: 'Màu xanh lam. Giấy trắng phản xạ mọi ánh sáng màu, nhưng tấm lọc chỉ cho ánh sáng lam truyền qua tới mắt.' }
  ],
  exercises: [
    { question: 'Kể tên các màu chính trong dải màu khi ánh sáng trắng bị tán sắc, theo thứ tự từ lệch ít đến lệch nhiều.', hints: ['Đỏ lệch ít nhất.', 'Tím lệch nhiều nhất.'], solution: 'Đỏ, da cam, vàng, lục, lam, chàm, tím.' },
    { question: 'Chiếu ánh sáng đơn sắc màu đỏ qua lăng kính thì có bị tán sắc không?', hints: ['Ánh sáng đơn sắc có gồm nhiều màu không?', 'Tán sắc là gì?'], solution: 'Không. Ánh sáng đơn sắc chỉ bị lệch về phía đáy, không bị phân tách thành nhiều màu.' },
    { question: 'Vì sao vào mùa hè nên mặc áo màu sáng?', hints: ['Vật màu tối hấp thụ ánh sáng thế nào?', 'Ánh sáng bị hấp thụ biến thành dạng năng lượng gì?'], solution: 'Áo màu sáng phản xạ phần lớn ánh sáng nên hấp thụ ít năng lượng, ít nóng hơn áo màu tối.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tia sáng đơn sắc đi qua lăng kính bị lệch về phía đáy lăng kính.', answer: true, explain: 'Tia ló lệch về phía đáy so với tia tới.' },
    { type: 'mcq', q: 'Trong hiện tượng tán sắc qua lăng kính, ánh sáng bị lệch nhiều nhất là:', options: ['đỏ', 'vàng', 'lục', 'tím'], answer: 3, explain: 'Chiết suất với ánh sáng tím lớn nhất.' },
    { type: 'mcq', q: 'Lá cây có màu xanh lục dưới ánh sáng trắng vì lá:', options: ['hấp thụ mạnh ánh sáng lục', 'phản xạ mạnh ánh sáng lục', 'tự phát ra ánh sáng lục', 'phản xạ mọi ánh sáng màu'], answer: 1, explain: 'Vật có màu nào thì phản xạ mạnh ánh sáng màu đó.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ánh sáng trắng là hỗn hợp của nhiều ánh sáng màu.', answer: true, explain: 'Hiện tượng tán sắc chứng tỏ điều này.' },
    { type: 'short', q: 'Dải màu cầu vồng thường được kể gồm bao nhiêu màu chính?', answer: '7', calc: '7', explain: 'Đỏ, da cam, vàng, lục, lam, chàm, tím.' },
    { type: 'mcq', q: 'Chiếu ánh sáng đỏ vào một bông hoa màu trắng, ta thấy hoa màu:', options: ['trắng', 'đỏ', 'đen', 'tím'], answer: 1, explain: 'Hoa trắng phản xạ ánh sáng đỏ chiếu tới.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một chùm ánh sáng đơn sắc qua lăng kính bị tách thành dải nhiều màu.', answer: false, explain: 'Ánh sáng đơn sắc không bị tán sắc.' },
    { type: 'mcq', q: 'Cầu vồng xuất hiện là do:', options: ['ánh sáng Mặt Trời bị tán sắc trong các giọt nước', 'mây tự phát sáng', 'ánh sáng bị phản xạ trên mặt đất', 'không khí có màu'], answer: 0, explain: 'Các giọt nước đóng vai trò như lăng kính.' }
  ]
});
})();
