/* KHTN 7 – Bài 20. Chế tạo nam châm điện đơn giản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-20', {
  objectives: [
    'Chế tạo được nam châm điện đơn giản và làm thay đổi được từ trường của nó bằng thay đổi dòng điện.',
    'Nêu được ống dây có dòng điện chạy qua có từ trường giống nam châm thẳng.',
    'Nêu được các cách làm tăng lực từ của nam châm điện và một số ứng dụng của nam châm điện.'
  ],
  intro: 'Ở bãi phế liệu, chiếc cần cẩu hạ một “đĩa” lớn xuống đống sắt vụn, bật điện – cả đống sắt bị nhấc bổng lên; ngắt điện – sắt rơi xuống. Chiếc đĩa ấy là một <b>nam châm điện</b>.',
  steps: [
    { title: 'Từ trường của ống dây có dòng điện', html: `<p>Quấn dây dẫn thành nhiều vòng tạo thành <b>ống dây</b>. Khi cho dòng điện chạy qua, xung quanh ống dây có từ trường giống từ trường của <b>nam châm thẳng</b>: một đầu là cực Bắc, đầu kia là cực Nam.</p>
      <p>Đổi chiều dòng điện thì hai cực của ống dây cũng đổi chỗ cho nhau. Ngắt dòng điện thì từ trường mất đi.</p>` },
    { title: 'Nam châm điện', html: `<p><b>Nam châm điện</b> gồm một ống dây dẫn có <b>lõi sắt non</b> (sắt dễ nhiễm từ và dễ mất từ). Khi có dòng điện chạy qua, lõi sắt bị nhiễm từ làm từ trường mạnh lên nhiều lần.</p>
      <p>Chế tạo đơn giản: quấn dây đồng có vỏ cách điện khoảng 50 – 100 vòng quanh một chiếc đinh sắt; nối hai đầu dây với pin qua công tắc; đóng công tắc rồi đưa đầu đinh lại gần ghim giấy.</p>`,
      svg: S.electromagnet(), caption: 'Nam châm điện đơn giản: cuộn dây quấn quanh đinh sắt, nối với pin qua công tắc.' },
    { title: 'Làm tăng lực từ của nam châm điện', html: `<ul><li><b>Tăng số vòng dây</b> của ống dây.</li><li><b>Tăng cường độ dòng điện</b> chạy qua ống dây (ví dụ dùng hai pin thay cho một pin).</li><li>Dùng lõi sắt non phù hợp.</li></ul>
      <table class="tbl"><tr><th>Số vòng dây</th><th>Số pin</th><th>Số ghim bị hút (ví dụ)</th></tr><tr><td>50</td><td>1</td><td>4</td></tr><tr><td>100</td><td>1</td><td>8</td></tr><tr><td>100</td><td>2</td><td>14</td></tr></table>` },
    { title: 'Ứng dụng của nam châm điện', html: `<ul><li><b>Cần cẩu điện</b> nâng sắt thép; ngắt điện để thả vật.</li><li><b>Chuông điện</b>, <b>rơ-le điện từ</b> (tự động đóng, ngắt mạch điện), khoá cửa điện từ.</li><li>Loa điện, động cơ điện, tàu đệm từ.</li></ul>
      <div class="box key">Ưu điểm của nam châm điện: có thể bật, tắt từ tính và điều chỉnh độ mạnh của từ trường bằng dòng điện.</div>` }
  ],
  summary: 'Ống dây có dòng điện có từ trường giống nam châm thẳng; đổi chiều dòng điện thì đổi cực. Nam châm điện = ống dây + lõi sắt non; chỉ có từ tính khi có dòng điện. Tăng lực từ: tăng số vòng dây, tăng cường độ dòng điện. Ứng dụng: cần cẩu điện, chuông điện, rơ-le, loa.',
  examples: [
    { title: 'Đọc bảng số liệu', problem: 'Theo bảng ở bước 3, khi giữ 100 vòng dây và tăng từ 1 pin lên 2 pin thì số ghim bị hút tăng thêm bao nhiêu? Rút ra kết luận.', solution: 'Tăng thêm 14 − 8 = 6 ghim ⇒ tăng cường độ dòng điện thì lực từ của nam châm điện tăng.' },
    { title: 'Vì sao dùng sắt non', problem: 'Vì sao lõi của nam châm điện dùng sắt non chứ không dùng thép?', solution: 'Sắt non nhiễm từ mạnh và mất từ tính ngay khi ngắt điện, nên nam châm điện bật, tắt được. Thép giữ từ tính lâu, khi ngắt điện vẫn hút vật.' },
    { title: 'Cần cẩu điện', problem: 'Giải thích hoạt động của cần cẩu điện ở bãi phế liệu.', solution: 'Đóng mạch: dòng điện chạy qua cuộn dây, lõi sắt thành nam châm mạnh hút sắt thép. Di chuyển đến nơi cần thả rồi ngắt mạch: nam châm mất từ tính, sắt thép rơi xuống.' }
  ],
  exercises: [
    { question: 'Nêu hai cách làm cho nam châm điện em chế tạo hút được nhiều ghim giấy hơn.', hints: ['Liên quan đến cuộn dây.', 'Liên quan đến nguồn điện.'], solution: 'Quấn thêm nhiều vòng dây quanh đinh; dùng thêm pin (mắc nối tiếp) để tăng cường độ dòng điện.' },
    { question: 'Một cuộn dây gồm 4 lớp, mỗi lớp 25 vòng. Cuộn dây có bao nhiêu vòng? Nếu quấn thêm 2 lớp như thế thì có bao nhiêu vòng?', hints: ['Số vòng = số lớp · số vòng mỗi lớp.', 'Sau khi quấn thêm có 6 lớp.'], solution: '4 · 25 = 100 vòng; thêm 2 lớp: 6 · 25 = 150 vòng.' },
    { question: 'Làm thế nào để biết đầu nào của nam châm điện là cực Bắc?', hints: ['Dùng một dụng cụ đã biết cực.', 'Cực Bắc của kim nam châm bị hút hay đẩy?'], solution: 'Đưa kim nam châm (la bàn) lại gần một đầu: nếu cực Bắc của kim bị đẩy thì đầu đó là cực Bắc; nếu bị hút thì đầu đó là cực Nam.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ống dây có dòng điện chạy qua có từ trường giống nam châm thẳng.', answer: true, explain: 'Hai đầu ống dây là hai cực từ.' },
    { type: 'mcq', q: 'Lõi của nam châm điện thường làm bằng:', options: ['nhôm', 'đồng', 'sắt non', 'nhựa'], answer: 2, explain: 'Sắt non nhiễm từ mạnh và mất từ nhanh.' },
    { type: 'mcq', q: 'Cách nào làm TĂNG lực từ của nam châm điện?', options: ['Giảm số vòng dây', 'Tăng cường độ dòng điện', 'Thay lõi sắt bằng lõi gỗ', 'Ngắt công tắc'], answer: 1, explain: 'Tăng cường độ dòng điện hoặc tăng số vòng dây.' },
    { type: 'short', q: 'Với 50 vòng dây, nam châm hút được 4 ghim; với 100 vòng dây hút được 8 ghim. Số ghim tăng thêm là bao nhiêu?', answer: '4', unit: 'ghim', calc: '8-4', explain: '8 − 4 = 4 ghim.' },
    { type: 'short', q: 'Mắc nối tiếp 2 pin, mỗi pin 1,5 V. Hiệu điện thế của bộ pin là bao nhiêu V?', answer: '3', unit: 'V', calc: '2*1.5', explain: '1,5 + 1,5 = 3 V.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nam châm điện vẫn hút mạnh ghim giấy sau khi đã ngắt dòng điện.', answer: false, explain: 'Lõi sắt non mất từ tính khi ngắt điện.' },
    { type: 'short', q: 'Một cuộn dây có 4 lớp, mỗi lớp 25 vòng. Cuộn dây có bao nhiêu vòng?', answer: '100', unit: 'vòng', calc: '4*25', explain: '4 · 25 = 100 vòng.' },
    { type: 'mcq', q: 'Thiết bị nào KHÔNG dùng nam châm điện?', options: ['Chuông điện', 'Rơ-le điện từ', 'Cần cẩu điện', 'Nhiệt kế thuỷ ngân'], answer: 3, explain: 'Nhiệt kế thuỷ ngân hoạt động dựa trên sự nở vì nhiệt.' }
  ]
});
})();
