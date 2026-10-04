/* KHTN 7 – Bài 18. Nam châm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-18', {
  objectives: [
    'Nhận biết được vật liệu có từ tính (sắt, thép, nickel, cobalt) và vật liệu không có từ tính.',
    'Nêu được mỗi nam châm có hai cực Bắc (N), Nam (S); mô tả được tương tác giữa hai nam châm.',
    'Mô tả được cấu tạo và sử dụng được la bàn để tìm hướng địa lí.'
  ],
  intro: 'Từ hơn hai nghìn năm trước, người ta đã biết đến những viên đá lạ có thể hút sắt. Ngày nay nam châm có mặt khắp nơi: cánh cửa tủ lạnh, loa điện thoại, động cơ điện, la bàn…',
  steps: [
    { title: 'Nam châm và vật liệu có từ tính', html: `<p><b>Nam châm</b> là vật có khả năng hút các vật bằng sắt, thép, nickel, cobalt… Những vật liệu bị nam châm hút gọi là <b>vật liệu có từ tính</b> (vật liệu từ).</p>
      <p>Nam châm <b>không hút</b> nhôm, đồng, nhựa, gỗ, giấy, thuỷ tinh.</p>
      <p>Có nam châm tự nhiên (quặng magnetite) và nam châm nhân tạo: nam châm thẳng, nam châm chữ U, nam châm tròn, kim nam châm.</p>` },
    { title: 'Hai cực của nam châm', html: `<ul><li>Mỗi nam châm có <b>hai cực</b>: cực Bắc (kí hiệu <b>N</b>, thường sơn đỏ) và cực Nam (kí hiệu <b>S</b>, thường sơn xanh). Hai cực là chỗ hút sắt mạnh nhất.</li><li>Một nam châm được treo tự do, khi đứng cân bằng luôn chỉ hướng <b>Bắc – Nam</b> địa lí: cực luôn chỉ về phía Bắc gọi là cực Bắc.</li><li>Bẻ đôi nam châm, mỗi mẩu lại là một nam châm có đủ hai cực.</li></ul>` },
    { title: 'Tương tác giữa hai nam châm', html: `<div class="box key">Các cực <b>cùng tên</b> thì <b>đẩy</b> nhau; các cực <b>khác tên</b> thì <b>hút</b> nhau.</div>
      <p>Có thể dùng tương tác này để xác định tên cực của một nam châm chưa đánh dấu bằng một nam châm đã biết tên cực.</p>`,
      svg: S.magnetPoles(), caption: 'Cực N của nam châm này hút cực S và đẩy cực N của nam châm kia.' },
    { title: 'La bàn', html: `<p><b>La bàn</b> gồm một <b>kim nam châm</b> đặt trên trục quay, nằm trong hộp có <b>mặt chia độ</b> ghi các hướng Bắc (B), Nam (N), Đông (Đ), Tây (T).</p>
      <p>Cách tìm hướng: đặt la bàn nằm ngang, xa các vật bằng sắt và nam châm khác; chờ kim đứng yên rồi xoay hộp để vạch chữ B trùng với đầu cực Bắc của kim. Khi đó các vạch trên mặt la bàn chỉ đúng các hướng địa lí.</p>`,
      svg: S.compassRose(), caption: 'La bàn: cực Bắc của kim (màu đỏ) chỉ hướng bắc địa lí.' }
  ],
  summary: 'Nam châm hút sắt, thép, nickel, cobalt; không hút nhôm, đồng, nhựa. Mỗi nam châm có hai cực N và S; nam châm tự do chỉ hướng Bắc – Nam. Cùng tên đẩy nhau, khác tên hút nhau. La bàn dùng kim nam châm để xác định hướng địa lí.',
  examples: [
    { title: 'Phân loại vật liệu', problem: 'Nam châm hút được những vật nào: đinh sắt, thìa nhôm, kéo thép, đồng xu bằng đồng, ghim giấy bằng thép?', solution: 'Hút: đinh sắt, kéo thép, ghim giấy bằng thép. Không hút: thìa nhôm, đồng xu bằng đồng.' },
    { title: 'Xác định tên cực', problem: 'Đưa cực N của nam châm A lại gần một đầu X của nam châm B thì thấy chúng đẩy nhau. X là cực gì?', solution: 'Cùng tên thì đẩy nhau ⇒ X là cực Bắc (N).' },
    { title: 'Tách sắt khỏi hỗn hợp', problem: 'Làm thế nào để tách nhanh mạt sắt lẫn trong cát?', solution: 'Bọc nam châm trong túi ni lông rồi rê qua hỗn hợp: mạt sắt bị hút vào, cát ở lại. Lật túi ra để thu mạt sắt.' }
  ],
  exercises: [
    { question: 'Có hai thanh kim loại giống hệt nhau, một thanh là nam châm, một thanh là sắt thường. Không dùng dụng cụ khác, làm sao phân biệt?', hints: ['Nam châm hút mạnh nhất ở đâu? Yếu nhất ở đâu?', 'Thử đưa đầu thanh này chạm vào giữa thanh kia.'], solution: 'Đưa một đầu thanh A chạm vào giữa thanh B. Nếu hút mạnh thì A là nam châm (vì hai cực hút mạnh nhất, còn giữa nam châm hút rất yếu). Nếu không hút (hoặc rất yếu) thì A là sắt, B là nam châm.' },
    { question: 'Bẻ một thanh nam châm thẳng thành 3 mẩu. Có tất cả bao nhiêu cực từ? Mỗi mẩu có tính chất gì?', hints: ['Mỗi mẩu có còn là nam châm không?', 'Một nam châm có mấy cực?'], solution: 'Mỗi mẩu là một nam châm có đủ 2 cực ⇒ tổng cộng 3 · 2 = 6 cực.' },
    { question: 'Vì sao khi dùng la bàn cần để xa các vật bằng sắt, thép và các thiết bị điện?', hints: ['Kim la bàn là gì?', 'Sắt, thép, nam châm khác tác dụng lên kim thế nào?'], solution: 'Kim la bàn là một nam châm; vật bằng sắt, thép hay nam châm, dòng điện gần đó sẽ hút hoặc đẩy kim, làm kim chỉ sai hướng.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nam châm KHÔNG hút vật nào?', options: ['Đinh sắt', 'Ghim thép', 'Thìa nhôm', 'Vòng nickel'], answer: 2, explain: 'Nhôm không phải vật liệu từ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai cực cùng tên của hai nam châm đặt gần nhau thì hút nhau.', answer: false, explain: 'Cùng tên đẩy nhau, khác tên hút nhau.' },
    { type: 'mcq', q: 'Nam châm được treo tự do, khi cân bằng cực Bắc của nó chỉ về hướng:', options: ['Đông', 'Tây', 'Bắc địa lí', 'Nam địa lí'], answer: 2, explain: 'Cực Bắc của nam châm chỉ hướng bắc địa lí.' },
    { type: 'short', q: 'Bẻ một thanh nam châm thành 3 mẩu. Tổng số cực từ của các mẩu là bao nhiêu?', answer: '6', unit: 'cực', calc: '3*2', explain: 'Mỗi mẩu có 2 cực: 3 · 2 = 6.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỗ hút sắt mạnh nhất của nam châm thẳng là hai đầu (hai cực).', answer: true, explain: 'Hai cực hút mạnh nhất, khoảng giữa hút yếu nhất.' },
    { type: 'short', q: 'Trên mặt la bàn, góc giữa hướng Bắc và hướng Đông là bao nhiêu độ?', answer: '90', unit: 'độ', calc: '360/4', explain: 'Bốn hướng chính chia đều 360°: 360 : 4 = 90°.' },
    { type: 'mcq', q: 'Đưa cực S của nam châm A lại gần đầu X của nam châm B thì thấy hút nhau. X là:', options: ['cực Nam', 'cực Bắc', 'không xác định được', 'không phải cực'], answer: 1, explain: 'Khác tên hút nhau ⇒ X là cực Bắc.' },
    { type: 'short', q: 'Hướng Đông Nam nằm chính giữa hướng Đông và hướng Nam. Tính từ hướng Bắc theo chiều kim đồng hồ, hướng Đông Nam ứng với bao nhiêu độ?', answer: '135', unit: 'độ', calc: '90+45', explain: 'Bắc → Đông: 90°; Đông → Đông Nam: 45° ⇒ 135°.' }
  ]
});
})();
