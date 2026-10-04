/* KHTN 6 – Bài 31. Thực hành: Quan sát nguyên sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-31', {
  objectives: [
    'Lấy được mẫu nước ao, hồ và làm được tiêu bản giọt nước để quan sát nguyên sinh vật.',
    'Quan sát, nhận biết được trùng roi, trùng giày (và các nguyên sinh vật khác nếu có) dưới kính hiển vi.',
    'Vẽ được hình và mô tả được đặc điểm di chuyển của nguyên sinh vật quan sát được.'
  ],
  intro: 'Bài thực hành giúp em "gặp tận mắt" những nguyên sinh vật đã học ở bài trước, và rèn kĩ năng dùng kính hiển vi.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Kính hiển vi, lam kính, lamen, ống nhỏ giọt, giấy thấm, bông, khăn lau.</li><li>Mẫu nước: nước ao, hồ, vũng nước đọng có váng xanh; hoặc nước ngâm rơm đã chuẩn bị 5–7 ngày trước.</li></ul>
      <div class="box warn">Đeo găng tay khi lấy mẫu nước ao. Không để nước ao dính vào mắt, miệng; rửa tay bằng xà phòng sau buổi thực hành.</div>` },
    { title: 'Làm tiêu bản', html: `<ol><li>Lắc nhẹ lọ mẫu; dùng ống nhỏ giọt lấy nước ở lớp váng hoặc sát thành lọ, nơi có màu xanh.</li><li>Nhỏ 1 giọt lên lam kính; đặt vài sợi bông mảnh để hạn chế sinh vật bơi nhanh.</li>
      <li>Đậy lamen nghiêng từ một cạnh, thấm bớt nước thừa.</li></ol>` },
    { title: 'Quan sát', html: `<ol><li>Quan sát ở vật kính 10x để tìm vùng có sinh vật, sau đó chuyển sang 40x.</li><li>Nhận biết theo đặc điểm:</li></ol>
      <ul><li><b>Trùng roi xanh</b>: hình thoi, màu xanh lục, có một roi dài phía trước, có chấm đỏ (điểm mắt).</li><li><b>Trùng giày</b>: hình đế giày, không màu, bơi nhanh và xoay tròn.</li>
      <li><b>Trùng biến hình</b>: như một giọt keo, hình dạng thay đổi liên tục, bò chậm.</li><li><b>Tảo</b>: nhiều hình dạng (sợi, hạt tròn), màu xanh.</li></ul>` },
    { title: 'Báo cáo thực hành', html: `<p>Hoàn thành bảng và vẽ hình:</p><table class="tbl"><tr><th>Tên sinh vật</th><th>Hình dạng</th><th>Màu sắc</th><th>Cách di chuyển</th></tr>
      <tr><td>Trùng roi xanh</td><td>Hình thoi</td><td>Xanh lục</td><td>Roi – vừa tiến vừa xoay</td></tr><tr><td>Trùng giày</td><td>Đế giày</td><td>Không màu</td><td>Lông bơi</td></tr><tr><td>…</td><td>…</td><td>…</td><td>…</td></tr></table>
      <p>Cuối buổi: rửa sạch lam kính, lamen; tắt đèn, hạ bàn kính, lau và cất kính hiển vi.</p>` }
  ],
  summary: 'Lấy giọt nước ở lớp váng của mẫu nước ao hoặc nước ngâm rơm, đặt vài sợi bông, đậy lamen, quan sát từ vật kính 10x đến 40x. Nhận biết trùng roi (hình thoi, xanh, có roi), trùng giày (hình đế giày, lông bơi), trùng biến hình (chân giả), tảo (màu xanh). Vệ sinh tay và dụng cụ sau buổi thực hành.',
  examples: [
    { title: 'Vì sao dùng vật kính 10x trước', problem: 'Vì sao nên tìm mẫu ở vật kính 10x rồi mới chuyển sang 40x?', solution: 'Vật kính nhỏ cho <b>trường nhìn rộng</b>, dễ tìm vị trí có sinh vật; sau đó mới phóng to để xem chi tiết.' },
    { title: 'Nhận biết', problem: 'Em thấy một sinh vật màu xanh, hình thoi, phía trước có sợi dài quẫy liên tục. Đó là gì?', solution: '<b>Trùng roi xanh</b>.' },
    { title: 'Độ phóng đại', problem: 'Thị kính 15x, vật kính 40x. Độ phóng đại là bao nhiêu?', solution: '15 × 40 = <b>600</b> lần.' }
  ],
  exercises: [
    { question: 'Vì sao nên lấy mẫu nước ở lớp váng hoặc nơi có màu xanh?', hints: ['Nguyên sinh vật có lục lạp tập trung ở đâu?', 'Nơi có nhiều ánh sáng, oxygen.'], solution: 'Lớp váng và chỗ nước có màu xanh là nơi tập trung nhiều tảo, trùng roi (cần ánh sáng) và các nguyên sinh vật ăn chúng, nên dễ quan sát thấy hơn.' },
    { question: 'Vì sao phải rửa tay bằng xà phòng sau khi làm việc với nước ao?', hints: ['Nước ao có thể chứa gì ngoài nguyên sinh vật có ích?', 'Nghĩ về bệnh lây qua đường tiêu hoá.'], solution: 'Nước ao có thể chứa vi khuẩn, trứng giun, trùng gây bệnh (như trùng kiết lị). Rửa tay giúp tránh đưa mầm bệnh vào miệng.' },
    { question: 'Thị kính 10x. Muốn độ phóng đại 400 lần thì chọn vật kính nào?', hints: ['Độ phóng đại = thị kính × vật kính.', '400 : 10.'], solution: 'Vật kính <b>40x</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Để hạn chế nguyên sinh vật bơi quá nhanh khi quan sát, ta nên:', options: ['Đặt vài sợi bông mảnh vào giọt nước', 'Đun nóng lam kính', 'Nhỏ thêm nhiều nước', 'Tắt đèn kính hiển vi'], answer: 0, explain: 'Sợi bông cản đường bơi.' },
    { type: 'mcq', q: 'Sinh vật hình thoi, màu xanh lục, có roi là:', options: ['Trùng roi xanh', 'Trùng giày', 'Trùng biến hình', 'Vi khuẩn'], answer: 0, explain: 'Đặc điểm của trùng roi xanh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên quan sát ở vật kính 40x ngay từ đầu để thấy rõ nhất.', answer: false, explain: 'Nên tìm mẫu ở vật kính nhỏ trước.' },
    { type: 'short', q: 'Thị kính 10x, vật kính 40x: độ phóng đại bao nhiêu lần?', answer: '400', unit: 'lần', calc: '10*40', explain: '10 × 40 = 400.' },
    { type: 'mcq', q: 'Trùng giày có màu:', options: ['Không màu (trong suốt)', 'Đỏ', 'Xanh đậm', 'Đen'], answer: 0, explain: 'Trùng giày không có lục lạp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sau buổi thực hành cần rửa tay bằng xà phòng.', answer: true, explain: 'Tránh mầm bệnh trong nước ao.' },
    { type: 'mcq', q: 'Chấm đỏ ở đầu trùng roi xanh là:', options: ['Điểm mắt', 'Nhân', 'Lục lạp', 'Không bào'], answer: 0, explain: 'Điểm mắt giúp cảm nhận ánh sáng.' },
    { type: 'mcq', q: 'Mẫu nào thích hợp để quan sát nguyên sinh vật?', options: ['Nước ao có váng xanh', 'Nước cất', 'Nước muối đặc', 'Nước sôi để nguội'], answer: 0, explain: 'Nước ao chứa nhiều nguyên sinh vật.' }
  ]
});
})();
