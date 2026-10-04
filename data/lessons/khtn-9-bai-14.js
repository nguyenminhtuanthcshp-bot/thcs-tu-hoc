/* KHTN 9 – Bài 14. Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-14', {
  objectives: [
    'Thực hiện được thí nghiệm tạo ra dòng điện cảm ứng bằng nam châm và cuộn dây.',
    'Nêu được điều kiện xuất hiện dòng điện cảm ứng: số đường sức từ xuyên qua tiết diện cuộn dây biến thiên.',
    'Giải thích được nguyên tắc tạo ra dòng điện xoay chiều và cấu tạo, hoạt động của máy phát điện xoay chiều.'
  ],
  intro: 'Năm 1831, Faraday phát hiện ra rằng chỉ cần đưa một thanh nam châm lại gần cuộn dây là trong cuộn dây xuất hiện dòng điện, không cần pin hay acquy. Phát hiện này là nền tảng của mọi nhà máy điện ngày nay.',
  steps: [
    { title: 'Thí nghiệm cảm ứng điện từ', html: `<p>Nối hai đầu cuộn dây với điện kế (hoặc đèn LED). Thực hiện:</p>
      <ul><li>Đưa cực nam châm <b>lại gần</b> cuộn dây: kim điện kế lệch.</li><li>Để nam châm <b>đứng yên</b> trong cuộn dây: kim không lệch.</li><li>Kéo nam châm <b>ra xa</b>: kim lệch theo chiều ngược lại.</li></ul>
      <p>Dòng điện xuất hiện như vậy gọi là <b>dòng điện cảm ứng</b>; hiện tượng gọi là <b>cảm ứng điện từ</b>.</p>`,
      svg: S.induction({ mode: 'dua-vao' }), caption: 'Đưa nam châm lại gần: số đường sức từ qua cuộn dây tăng, kim điện kế lệch.' },
    { title: 'Điều kiện xuất hiện dòng điện cảm ứng', html: `<div class="box key">Trong cuộn dây dẫn kín xuất hiện dòng điện cảm ứng khi <b>số đường sức từ xuyên qua tiết diện</b> của cuộn dây <b>biến thiên</b> (tăng hoặc giảm).</div>
      <p>Có thể làm số đường sức từ biến thiên bằng cách: di chuyển nam châm hoặc cuộn dây; quay nam châm trước cuộn dây; đóng, ngắt hoặc thay đổi dòng điện trong nam châm điện đặt gần cuộn dây.</p>`,
      svg: S.induction({ mode: 'dung-yen' }), caption: 'Nam châm đứng yên trong cuộn dây: số đường sức không đổi, không có dòng điện cảm ứng.' },
    { title: 'Dòng điện xoay chiều', html: `<p>Khi số đường sức từ qua cuộn dây <b>tăng</b> rồi <b>giảm</b> luân phiên (ví dụ cho nam châm quay liên tục), dòng điện cảm ứng luân phiên <b>đổi chiều</b>. Dòng điện như vậy gọi là <b>dòng điện xoay chiều</b>.</p>
      <p>Lưới điện ở Việt Nam là dòng điện xoay chiều tần số 50 Hz: mỗi giây dòng điện đổi chiều 100 lần.</p>`,
      svg: S.induction({ mode: 'rut-ra' }), caption: 'Rút nam châm ra: số đường sức giảm, dòng điện cảm ứng đổi chiều so với lúc đưa vào.' },
    { title: 'Máy phát điện xoay chiều', html: `<p>Hai bộ phận chính: <b>nam châm</b> và <b>cuộn dây</b>. Một bộ phận đứng yên (stato), bộ phận còn lại quay (rôto).</p>
      <ul><li>Loại có cuộn dây quay: cần thêm bộ góp điện (vành khuyên, chổi quét) để lấy điện ra.</li><li>Loại có nam châm quay (máy phát lớn trong nhà máy): cuộn dây đứng yên.</li></ul>
      <p>Năng lượng chuyển hoá: <b>cơ năng → năng lượng điện</b>. Rôto được làm quay nhờ tuabin nước, hơi nước, gió…</p>`,
      svg: S.generator(), caption: 'Sơ đồ máy phát điện xoay chiều: cuộn dây quay trong từ trường của nam châm.' }
  ],
  summary: 'Cảm ứng điện từ: dòng điện cảm ứng xuất hiện trong cuộn dây kín khi số đường sức từ xuyên qua tiết diện cuộn dây biến thiên. Số đường sức tăng, giảm luân phiên tạo dòng điện xoay chiều. Máy phát điện xoay chiều gồm nam châm và cuộn dây, chuyển cơ năng thành năng lượng điện.',
  examples: [
    { title: 'Có dòng điện cảm ứng không?', problem: 'Nam châm và cuộn dây cùng chuyển động với cùng vận tốc (đứng yên so với nhau). Có dòng điện cảm ứng không?', solution: 'Không, vì số đường sức từ xuyên qua cuộn dây không đổi.' },
    { title: 'Tần số', problem: 'Dòng điện xoay chiều 50 Hz đổi chiều bao nhiêu lần trong 1 giây?', solution: 'Mỗi chu kì đổi chiều 2 lần, 50 chu kì ⇒ 100 lần.' },
    { title: 'Chuyển hoá năng lượng', problem: 'Ở nhà máy thuỷ điện, năng lượng chuyển hoá thế nào?', solution: 'Thế năng của nước → động năng của nước và tuabin → năng lượng điện (qua máy phát).' }
  ],
  exercises: [
    { question: 'Nêu ba cách làm xuất hiện dòng điện cảm ứng trong một cuộn dây kín.', hints: ['Làm số đường sức qua cuộn dây thay đổi.', 'Có thể dùng nam châm vĩnh cửu hoặc nam châm điện.'], solution: 'Đưa nam châm lại gần/ra xa cuộn dây; quay nam châm trước cuộn dây; đóng ngắt mạch nam châm điện đặt gần cuộn dây.' },
    { question: 'Vì sao máy phát điện lớn thường cho nam châm quay, cuộn dây đứng yên?', hints: ['Cuộn dây quay cần bộ phận gì để lấy điện ra?', 'Dòng điện lớn qua chổi quét gây ra vấn đề gì?'], solution: 'Để lấy dòng điện lớn ra trực tiếp từ cuộn dây đứng yên, không cần vành khuyên và chổi quét (dễ mòn, đánh lửa).' },
    { question: 'Dòng điện có tần số 60 Hz đổi chiều bao nhiêu lần trong 1 giây?', hints: ['Mỗi chu kì đổi chiều 2 lần.', '60 · 2 = ?'], solution: '120 lần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Để nam châm đứng yên trong lòng cuộn dây kín thì trong cuộn dây có dòng điện cảm ứng.', answer: false, explain: 'Số đường sức từ không biến thiên nên không có dòng điện cảm ứng.' },
    { type: 'mcq', q: 'Điều kiện xuất hiện dòng điện cảm ứng trong cuộn dây kín là:', options: ['đặt nam châm gần cuộn dây', 'số đường sức từ xuyên qua tiết diện cuộn dây biến thiên', 'cuộn dây có nhiều vòng', 'nối cuộn dây với pin'], answer: 1, explain: 'Cần sự biến thiên số đường sức từ.' },
    { type: 'mcq', q: 'Máy phát điện xoay chiều chuyển hoá:', options: ['năng lượng điện thành cơ năng', 'cơ năng thành năng lượng điện', 'nhiệt năng thành quang năng', 'hoá năng thành năng lượng điện'], answer: 1, explain: 'Rôto quay (cơ năng) tạo ra dòng điện.' },
    { type: 'short', q: 'Dòng điện xoay chiều 50 Hz đổi chiều bao nhiêu lần trong 1 giây?', answer: '100', unit: 'lần', calc: '2*50', explain: 'Mỗi chu kì đổi chiều 2 lần.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai bộ phận chính của máy phát điện xoay chiều là nam châm và cuộn dây.', answer: true, explain: 'Một bộ phận quay, một bộ phận đứng yên.' },
    { type: 'mcq', q: 'Khi kéo nam châm ra xa cuộn dây, so với lúc đưa vào thì dòng điện cảm ứng:', options: ['không xuất hiện', 'cùng chiều', 'ngược chiều', 'mạnh gấp đôi'], answer: 2, explain: 'Số đường sức giảm thay vì tăng nên dòng điện đổi chiều.' },
    { type: 'short', q: 'Dòng điện đổi chiều 120 lần trong 1 giây. Tần số của dòng điện là bao nhiêu héc?', answer: '60', unit: 'Hz', calc: '120/2', explain: 'f = 120 / 2 = 60 Hz.' },
    { type: 'mcq', q: 'Nhà khoa học phát hiện ra hiện tượng cảm ứng điện từ năm 1831 là:', options: ['Newton', 'Faraday', 'Ohm', 'Mendel'], answer: 1, explain: 'Michael Faraday.' }
  ]
});
})();
