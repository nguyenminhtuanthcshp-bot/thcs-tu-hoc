/* Ngữ văn 7 – Bài 2. Đọc hiểu: Thơ bốn chữ, thơ năm chữ. Văn bản đọc: đồng dao “Dung dăng dung dẻ” (văn học dân gian, phạm vi công cộng) và bài thơ năm chữ “Mùa gặt của mẹ” do nhóm biên soạn tự sáng tác. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b2-doc', {
  objectives: [
    'Nhận biết được đặc điểm hình thức của thơ bốn chữ, thơ năm chữ: số tiếng, nhịp, vần, khổ thơ.',
    'Phân biệt vần chân – vần lưng, vần liền – vần cách.',
    'Chỉ ra và nêu tác dụng của hình ảnh, biện pháp tu từ trong bài thơ.',
    'Cảm nhận được tình cảm, cảm xúc của người viết thể hiện qua ngôn ngữ thơ.'
  ],
  intro: 'Từ thuở bé, em đã quen với những câu đồng dao bốn chữ vừa hát vừa chơi. Lớn hơn một chút, em gặp những bài thơ năm chữ nhẹ nhàng như lời ru. Bài học này giúp em “nghe” ra nhịp, vần và cảm xúc ẩn trong những dòng thơ ngắn ấy.',
  text: {
    title: 'Hai bài thơ ngắn: “Dung dăng dung dẻ” (đồng dao) và “Mùa gặt của mẹ”',
    html: `<p><b>1. Dung dăng dung dẻ</b> (đồng dao)</p>
<div class="poem">Dung dăng dung dẻ<br>Dắt trẻ đi chơi<br>Đến ngõ nhà trời<br>Lạy cậu lạy mợ<br>Cho cháu về quê<br>Cho dê đi học<br>Cho cóc ở nhà<br>Cho gà bới bếp<br>Ngồi xệp xuống đây.</div>
<p><b>2. Mùa gặt của mẹ</b></p>
<div class="poem">Sáng nay mẹ ra đồng<br>Nón nghiêng che nắng hồng<br>Lúa vàng ôm lấy mẹ<br>Thơm cả một dòng sông.<br><br>Chiều về trên đường làng<br>Gánh lúa oằn vai mang<br>Mồ hôi rơi thấm đất<br>Cho hạt lúa thêm vàng.<br><br>Đêm con nằm bên mẹ<br>Nghe tiếng quạt thật khẽ<br>Mẹ thức cho con ngủ<br>Mát rượi cả giấc hè.</div>`,
    source: 'Bài 1: đồng dao dân gian Việt Nam (phạm vi công cộng; có nhiều dị bản). Bài 2: thơ do nhóm biên soạn tự sáng tác để minh hoạ thể thơ năm chữ.'
  },
  steps: [
    { title: 'Nhận diện thơ bốn chữ và thơ năm chữ', html: `<table class="tbl"><tr><th></th><th>Thơ bốn chữ</th><th>Thơ năm chữ</th></tr>
      <tr><td>Số tiếng mỗi dòng</td><td>4 tiếng</td><td>5 tiếng</td></tr>
      <tr><td>Nhịp thường gặp</td><td>2/2 (có khi 1/3, 3/1)</td><td>2/3 hoặc 3/2</td></tr>
      <tr><td>Vần</td><td>Vần chân, vần lưng; vần liền hoặc vần cách</td><td>Chủ yếu vần chân; vần liền hoặc vần cách</td></tr>
      <tr><td>Số dòng, khổ</td><td>Không giới hạn; thường gặp trong đồng dao, vè</td><td>Không giới hạn; thường chia khổ 4 dòng</td></tr></table>
      <p>Đếm thử: “Dắt / trẻ / đi / chơi” – 4 tiếng; “Sáng / nay / mẹ / ra / đồng” – 5 tiếng.</p>` },
    { title: 'Vần chân, vần lưng; vần liền, vần cách', html: `<ul><li><b>Vần chân</b>: vần gieo ở <b>cuối</b> dòng thơ. Ví dụ: “Dắt trẻ đi <b>chơi</b> / Đến ngõ nhà <b>trời</b>” (ơi – ơi).</li>
      <li><b>Vần lưng</b>: vần gieo ở <b>giữa</b> dòng thơ, tiếng cuối dòng trên vần với một tiếng giữa dòng dưới. Ví dụ: “Cho cháu về <b>quê</b> / Cho <b>dê</b> đi học”; “Cho cóc ở <b>nhà</b> / Cho <b>gà</b> bới bếp”.</li>
      <li><b>Vần liền</b>: các dòng liên tiếp vần với nhau. <b>Vần cách</b>: vần cách một hoặc vài dòng.</li></ul>
      <p>Trong “Mùa gặt của mẹ”, khổ 1 và khổ 2 gieo vần chân ở dòng 1, 2, 4 (<i>đồng – hồng – sông; làng – mang – vàng</i>).</p>
      <div class="box tip">Vần giúp bài thơ dễ thuộc, dễ nhớ và tạo tiếng vang, nhạc điệu khi đọc.</div>` },
    { title: 'Nhịp thơ và hình ảnh', html: `<p>Ngắt nhịp: “Dung dăng / dung dẻ // Dắt trẻ / đi chơi” (2/2) – nhịp chẵn, đều như bước chân nhún nhảy của trẻ khi chơi. “Sáng nay / mẹ ra đồng” (2/3) – nhịp kể chậm rãi, nhẹ nhàng.</p>
      <p>Hình ảnh trong bài thơ năm chữ đi theo thời gian một ngày: <b>sáng</b> ra đồng → <b>chiều</b> gánh lúa về → <b>đêm</b> thức quạt cho con. Hình ảnh người mẹ hiện lên qua những việc làm cụ thể, bình dị.</p>` },
    { title: 'Biện pháp tu từ và cảm xúc', html: `<table class="tbl"><tr><th>Dòng thơ</th><th>Biện pháp</th><th>Tác dụng</th></tr>
      <tr><td>“Lúa vàng ôm lấy mẹ”</td><td>Nhân hoá</td><td>Cánh đồng như có tình cảm, gắn bó, che chở người mẹ.</td></tr>
      <tr><td>“Thơm cả một dòng sông”</td><td>Nói quá</td><td>Nhấn mạnh hương lúa lan toả, niềm vui được mùa.</td></tr>
      <tr><td>“Cho cháu… / Cho dê… / Cho cóc… / Cho gà…”</td><td>Điệp ngữ, liệt kê</td><td>Tạo nhịp vui, dồn dập; gợi thế giới trò chơi ngộ nghĩnh của trẻ.</td></tr></table>
      <p>Qua hình ảnh và biện pháp tu từ, người đọc cảm nhận được <b>tình yêu thương, lòng biết ơn</b> của người con với sự vất vả, hi sinh thầm lặng của mẹ.</p>` },
    { title: 'Cách đọc một bài thơ bốn chữ, năm chữ', html: `<p>Có thể đi theo trình tự sau:</p>`,
      svg: S.flow({ items: [{ title: 'Đọc to', text: 'Đếm tiếng, ngắt nhịp' }, { title: 'Tìm vần', text: 'Vần chân, vần lưng' }, { title: 'Hình ảnh', text: 'Sự vật, con người, cảnh' }, { title: 'Biện pháp tu từ', text: 'Gọi tên, tác dụng' }, { title: 'Cảm xúc', text: 'Người viết muốn nói gì?' }], size: 14 }),
      caption: 'Năm bước đọc hiểu bài thơ bốn chữ, năm chữ.' }
  ],
  summary: 'Thơ bốn chữ có 4 tiếng mỗi dòng, nhịp 2/2; thơ năm chữ có 5 tiếng mỗi dòng, nhịp 2/3 hoặc 3/2. Cả hai thể không giới hạn số dòng, có thể gieo vần chân hoặc vần lưng, vần liền hoặc vần cách. Khi đọc cần chú ý nhịp, vần, hình ảnh, biện pháp tu từ để cảm nhận tình cảm, cảm xúc của người viết.',
  examples: [
    { title: 'Xác định thể thơ', problem: 'Dòng thơ “Mồ hôi rơi thấm đất” thuộc thể thơ nào? Ngắt nhịp dòng thơ ấy.', solution: 'Dòng thơ có 5 tiếng (Mồ / hôi / rơi / thấm / đất) nên thuộc thể thơ năm chữ. Ngắt nhịp 2/3: “Mồ hôi / rơi thấm đất”.' },
    { title: 'Nhận diện vần lưng', problem: 'Chỉ ra cách gieo vần trong hai dòng đồng dao: “Cho gà bới bếp / Ngồi xệp xuống đây.”', solution: 'Tiếng cuối dòng trên “bếp” vần với tiếng thứ hai của dòng dưới “xệp” (vần “ếp”, “ệp”) – đây là <b>vần lưng</b>.' },
    { title: 'Phân tích hình ảnh', problem: 'Hình ảnh “Mẹ thức cho con ngủ” gợi cho em suy nghĩ gì về người mẹ?', solution: 'Hình ảnh đối lập “thức – ngủ” cho thấy mẹ chịu vất vả, hi sinh giấc ngủ của mình để con được ngon giấc. Sau một ngày gặt mệt nhọc, mẹ vẫn lặng lẽ quạt cho con: tình thương của mẹ bền bỉ, thầm lặng. Hình ảnh gợi lòng biết ơn và mong muốn đền đáp của người con.' }
  ],
  exercises: [
    { question: 'Tìm các tiếng gieo vần ở khổ 2 bài “Mùa gặt của mẹ” và cho biết đó là vần chân hay vần lưng.', hints: ['Nhìn tiếng cuối các dòng 1, 2, 4.', 'Vần ở cuối dòng gọi là gì?'], solution: 'Các tiếng “làng – mang – vàng” (vần “ang”) ở cuối dòng 1, 2, 4 – là vần chân.' },
    { question: 'Chỉ ra biện pháp tu từ trong dòng “Lúa vàng ôm lấy mẹ” và nêu tác dụng.', hints: ['“Ôm” là hành động của ai?', 'Cánh đồng được miêu tả như một con người.'], solution: 'Biện pháp nhân hoá: “lúa vàng” được gán hành động “ôm” của con người. Tác dụng: làm hình ảnh cánh đồng sinh động, gần gũi; gợi sự gắn bó giữa người mẹ và ruộng lúa, niềm vui mùa gặt.' },
    { question: 'Viết đoạn văn (4 – 5 câu) nêu cảm nghĩ của em về khổ thơ thứ ba.', hints: ['Khổ thơ tả cảnh gì, lúc nào?', 'Em có kỉ niệm nào tương tự với mẹ hoặc bà?'], solution: 'Ví dụ: Khổ thơ thứ ba khép lại một ngày dài bằng cảnh đêm hè yên ả. Chỉ với hình ảnh “tiếng quạt thật khẽ”, người con đã cảm nhận được bàn tay mẹ vẫn đưa đều dù mẹ đã mệt nhoài. Dòng thơ “Mẹ thức cho con ngủ” làm em nhớ những trưa hè bà ngồi quạt cho em ngủ. Từ “mát rượi” không chỉ nói cái mát của gió mà còn là cái mát lành của tình thương. Em thấy mình cần biết ơn và quan tâm đến mẹ nhiều hơn.' }
  ],
  quiz: [
    { type: 'short', q: 'Mỗi dòng của thơ năm chữ có bao nhiêu tiếng?', answer: ['5', 'năm'], answerText: '5 tiếng', explain: 'Thơ năm chữ: mỗi dòng 5 tiếng.' },
    { type: 'mcq', q: 'Nhịp thường gặp của thơ bốn chữ là:', options: ['2/2', '3/4', '4/3', '2/2/2/2'], answer: 0, explain: 'Thơ bốn chữ thường ngắt nhịp 2/2.' },
    { type: 'mcq', q: 'Vần gieo ở cuối dòng thơ gọi là:', options: ['Vần chân', 'Vần lưng', 'Vần đầu', 'Vần giữa'], answer: 0, explain: 'Vần chân gieo ở cuối dòng.' },
    { type: 'mcq', q: 'Trong hai dòng “Cho cháu về quê / Cho dê đi học”, tiếng nào vần với “quê”?', options: ['dê', 'cho', 'học', 'đi'], answer: 0, explain: '“quê – dê” (vần ê), gieo ở giữa dòng dưới: vần lưng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thơ năm chữ bắt buộc chỉ có đúng bốn dòng.', answer: false, explain: 'Thơ năm chữ không giới hạn số dòng; thường chia khổ 4 dòng.' },
    { type: 'mcq', q: 'Dòng “Thơm cả một dòng sông” sử dụng biện pháp tu từ:', options: ['Nói quá', 'Nói giảm nói tránh', 'So sánh', 'Hoán dụ'], answer: 0, explain: 'Phóng đại mức độ lan toả của hương lúa để nhấn mạnh niềm vui.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình ảnh trong bài “Mùa gặt của mẹ” được sắp xếp theo thời gian sáng – chiều – đêm.', answer: true, explain: 'Khổ 1: sáng; khổ 2: chiều; khổ 3: đêm.' },
    { type: 'mcq', q: 'Tình cảm chủ đạo của bài “Mùa gặt của mẹ” là:', options: ['Yêu thương, biết ơn mẹ', 'Giận dỗi mẹ', 'Sợ hãi mùa gặt', 'Chán ghét làng quê'], answer: 0, explain: 'Người con trân trọng sự vất vả, hi sinh của mẹ.' }
  ]
});
})();
