/* KHTN 6 – Bài 10. Các thể của chất và sự chuyển thể. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-10', {
  objectives: [
    'Nêu được đặc điểm cơ bản của ba thể rắn, lỏng, khí (hình dạng, thể tích, khả năng bị nén).',
    'Trình bày được các quá trình chuyển thể: nóng chảy, đông đặc, bay hơi, sôi, ngưng tụ.',
    'Giải thích được một số hiện tượng thực tế liên quan đến sự chuyển thể.'
  ],
  intro: 'Viên nước đá để trên bàn một lúc thì tan thành nước. Nước trong ấm đun lâu thì cạn dần. Buổi sáng, trên lá cây có những giọt sương long lanh. Đó đều là những lần nước <b>chuyển thể</b>.',
  steps: [
    { title: 'Ba thể của chất', html: `<p>Chất có thể tồn tại ở ba thể chính: <b>rắn, lỏng, khí</b>. Sự khác nhau do cách sắp xếp và chuyển động của các hạt tạo nên chất.</p>
      <table class="tbl"><tr><th></th><th>Rắn</th><th>Lỏng</th><th>Khí</th></tr>
      <tr><td>Hình dạng</td><td>Xác định</td><td>Theo hình dạng vật chứa</td><td>Không xác định, chiếm đầy vật chứa</td></tr>
      <tr><td>Thể tích</td><td>Xác định</td><td>Xác định</td><td>Không xác định</td></tr>
      <tr><td>Bị nén</td><td>Rất khó</td><td>Rất khó</td><td>Dễ</td></tr>
      <tr><td>Các hạt</td><td>Xếp sát, trật tự, chỉ dao động tại chỗ</td><td>Gần nhau, trượt lên nhau</td><td>Rất xa nhau, chuyển động hỗn loạn</td></tr></table>`,
      svg: S.row([{ svg: S.particles('ran') }, { svg: S.particles('long') }, { svg: S.particles('khi') }]), caption: 'Mô hình sắp xếp các hạt ở ba thể.' },
    { title: 'Nóng chảy và đông đặc', html: `<ul><li><b>Sự nóng chảy</b>: chất chuyển từ thể rắn sang thể lỏng (nước đá tan, sáp nến chảy).</li>
      <li><b>Sự đông đặc</b>: chất chuyển từ thể lỏng sang thể rắn (nước trong ngăn đá thành đá).</li></ul>
      <p>Nước đá nóng chảy ở <b>0 °C</b> và nước đông đặc cũng ở <b>0 °C</b>. Trong suốt thời gian nước đá đang tan, nhiệt độ <b>không thay đổi</b>.</p>` },
    { title: 'Bay hơi và sôi', html: `<ul><li><b>Sự bay hơi</b>: chất chuyển từ thể lỏng sang thể hơi, xảy ra <b>ở bề mặt</b> chất lỏng và ở <b>mọi nhiệt độ</b> (quần áo phơi khô, vũng nước cạn dần).</li>
      <li><b>Sự sôi</b>: sự bay hơi xảy ra <b>cả trong lòng và trên mặt</b> chất lỏng, chỉ ở một nhiệt độ xác định gọi là nhiệt độ sôi (nước sôi ở 100 °C). Khi sôi, nhiệt độ không đổi dù vẫn tiếp tục đun.</li></ul>
      <div class="box note">Bay hơi nhanh hơn khi: nhiệt độ cao, có gió, diện tích mặt thoáng lớn. Vì thế phơi quần áo nơi có nắng, gió và trải rộng thì mau khô.</div>` },
    { title: 'Ngưng tụ', html: `<p><b>Sự ngưng tụ</b>: chất chuyển từ thể hơi (khí) sang thể lỏng. Ví dụ: hơi nước gặp lạnh tạo thành những giọt nước bám ngoài cốc nước đá, sương đọng trên lá cây vào sáng sớm, hơi nước bám vào vung nồi.</p>`,
      svg: S.stateChange(), caption: 'Sơ đồ các quá trình chuyển thể của chất.' }
  ],
  summary: 'Thể rắn có hình dạng và thể tích xác định; thể lỏng có thể tích xác định nhưng hình dạng theo vật chứa; thể khí không có hình dạng, thể tích xác định và dễ bị nén. Rắn → lỏng: nóng chảy; lỏng → rắn: đông đặc; lỏng → hơi: bay hơi (sôi là bay hơi cả trong lòng chất lỏng ở nhiệt độ sôi); hơi → lỏng: ngưng tụ.',
  examples: [
    { title: 'Gọi tên quá trình', problem: 'Gọi tên sự chuyển thể: a) đúc đồng: đồng lỏng rót vào khuôn thành tượng; b) mặt đường ướt khô dần sau mưa; c) kính xe ô tô bị mờ hơi nước vào sáng sớm.', solution: 'a) <b>Đông đặc</b> (lỏng → rắn). b) <b>Bay hơi</b> (lỏng → hơi). c) <b>Ngưng tụ</b> (hơi → lỏng).' },
    { title: 'Thể của chất', problem: 'Vì sao có thể bơm rất nhiều không khí vào một quả bóng, nhưng không thể “bơm thêm” nước vào một chai đã đầy nước?', solution: 'Vì chất khí có các hạt ở xa nhau nên <b>dễ bị nén</b>; còn chất lỏng có các hạt ở gần nhau nên <b>rất khó bị nén</b>.' },
    { title: 'Bay hơi và sôi', problem: 'Nêu hai điểm khác nhau giữa sự bay hơi và sự sôi của nước.', solution: 'Bay hơi xảy ra ở mọi nhiệt độ, chỉ ở mặt thoáng. Sôi xảy ra ở nhiệt độ sôi (100 °C với nước), xảy ra cả trong lòng chất lỏng (có bọt khí to nổi lên).' }
  ],
  exercises: [
    { question: 'Giải thích vì sao ngoài thành cốc nước đá thường có những giọt nước nhỏ bám vào.', hints: ['Không khí quanh cốc có chứa hơi nước.', 'Hơi nước gặp thành cốc lạnh thì sao?'], solution: 'Hơi nước trong không khí gặp thành cốc lạnh bị <b>ngưng tụ</b> thành những giọt nước nhỏ bám bên ngoài cốc (nước không thấm từ trong ra).' },
    { question: 'Muốn phơi quần áo nhanh khô, em nên làm thế nào? Giải thích.', hints: ['Tốc độ bay hơi phụ thuộc vào những yếu tố nào?', 'Nhiệt độ, gió, diện tích mặt thoáng.'], solution: 'Phơi ở nơi có nắng (nhiệt độ cao), thoáng gió và giũ phẳng, trải rộng quần áo (tăng diện tích mặt thoáng). Các yếu tố này làm nước bay hơi nhanh hơn.' },
    { question: 'Khi đun nước, nhiệt kế chỉ 100 °C và nước đã sôi. Nếu tiếp tục đun thêm 5 phút thì nhiệt độ của nước có tăng không?', hints: ['Nhớ lại đặc điểm của nhiệt độ trong khi sôi.', 'Nhiệt được cung cấp thêm dùng vào việc gì?'], solution: '<b>Không tăng</b>. Trong khi sôi, nhiệt độ của nước giữ nguyên 100 °C (ở áp suất khí quyển bình thường); nhiệt cung cấp thêm được dùng để nước chuyển thành hơi.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Thể nào có hình dạng và thể tích xác định?', options: ['Thể rắn', 'Thể lỏng', 'Thể khí', 'Cả lỏng và khí'], answer: 0, keepOrder: true, explain: 'Chất rắn có hình dạng và thể tích xác định.' },
    { type: 'mcq', q: 'Quá trình chất chuyển từ thể rắn sang thể lỏng gọi là:', options: ['Sự đông đặc', 'Sự nóng chảy', 'Sự ngưng tụ', 'Sự bay hơi'], answer: 1, explain: 'Rắn → lỏng là sự nóng chảy.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất khí dễ bị nén.', answer: true, explain: 'Các hạt khí ở rất xa nhau nên chất khí dễ bị nén.' },
    { type: 'mcq', q: 'Sương đọng trên lá cây vào sáng sớm là kết quả của:', options: ['Sự bay hơi', 'Sự nóng chảy', 'Sự ngưng tụ', 'Sự đông đặc'], answer: 2, explain: 'Hơi nước gặp lạnh ngưng tụ thành giọt sương.' },
    { type: 'short', q: 'Nước nguyên chất đông đặc thành nước đá ở nhiệt độ bao nhiêu độ C (áp suất khí quyển bình thường)?', answer: '0', unit: '°C', explain: 'Nước đông đặc (và nước đá nóng chảy) ở 0 °C.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sự bay hơi chỉ xảy ra khi nước đạt 100 °C.', answer: false, explain: 'Bay hơi xảy ra ở mọi nhiệt độ; ở 100 °C nước sôi.' },
    { type: 'mcq', q: 'Chất lỏng có đặc điểm nào?', options: ['Có hình dạng xác định', 'Không có thể tích xác định', 'Có hình dạng của phần vật chứa nó và có thể tích xác định', 'Dễ bị nén'], answer: 2, explain: 'Chất lỏng chảy theo hình dạng vật chứa nhưng thể tích không đổi, rất khó nén.' },
    { type: 'short', q: 'Quá trình chuyển từ thể lỏng sang thể rắn gọi là sự … (điền 2 tiếng)', answer: ['đông đặc', 'dong dac'], answerText: 'đông đặc', explain: 'Lỏng → rắn: sự đông đặc.' }
  ]
});
})();
