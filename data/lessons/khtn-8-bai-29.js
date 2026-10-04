/* KHTN 8 – Bài 29. Sự nở vì nhiệt. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-29', {
  objectives: [
    'Nêu được các chất rắn, lỏng, khí nở ra khi nóng lên, co lại khi lạnh đi.',
    'So sánh được mức độ nở vì nhiệt của chất rắn, chất lỏng, chất khí.',
    'Giải thích được sự nở vì nhiệt dựa vào chuyển động và khoảng cách giữa các phân tử.',
    'Nêu được một số ứng dụng và tác hại của sự nở vì nhiệt (nhiệt kế, băng kép, khe hở đường ray).'
  ],
  intro: 'Đường ray xe lửa có những khe hở nhỏ giữa các thanh ray. Quả bóng bàn bị bẹp nhúng vào nước nóng thì phồng lên. Nhiệt kế thuỷ ngân chỉ nhiệt độ nhờ cột chất lỏng dâng lên. Tất cả đều do <b>sự nở vì nhiệt</b>.',
  steps: [
    { title: 'Sự nở vì nhiệt của chất rắn', html: `<p>Quả cầu kim loại vừa lọt qua vòng kim loại. Hơ nóng quả cầu thì nó <b>không lọt</b> qua vòng nữa; nhúng quả cầu vào nước lạnh thì lại lọt qua ⇒ chất rắn nở ra khi nóng lên, co lại khi lạnh đi.</p>
      <p>Các chất rắn khác nhau nở vì nhiệt khác nhau. Ví dụ (số liệu tham khảo): thanh thép dài 1 m nóng thêm 1 °C thì dài thêm khoảng 0,012 mm; thanh nhôm dài thêm khoảng 0,023 mm.</p>`,
      svg: S.expansion('ring') },
    { title: 'Sự nở vì nhiệt của chất lỏng và chất khí', html: `<ul><li><b>Chất lỏng</b>: bình cầu đựng nước màu có ống thuỷ tinh cắm qua nút; nhúng vào nước nóng, mực nước trong ống dâng lên.</li><li><b>Chất khí</b>: bình cầu chứa không khí, miệng bình bịt bằng một quả bóng cao su; nhúng bình vào nước nóng, quả bóng phồng lên vì không khí trong bình nở ra (có thể thay quả bóng bằng ống thuỷ tinh có giọt nước màu: giọt nước màu bị đẩy lên).</li></ul>
      <div class="box key">Chất khí nở vì nhiệt nhiều hơn chất lỏng, chất lỏng nở vì nhiệt nhiều hơn chất rắn.</div>`,
      svg: [S.expansion('liquid'), S.expansion('gas')] },
    { title: 'Giải thích', html: `<p>Khi nhiệt độ tăng, các phân tử chuyển động nhanh hơn và <b>khoảng cách giữa chúng tăng lên</b> nên thể tích của vật tăng (vật nở ra). Khi nhiệt độ giảm thì ngược lại.</p>
      <p>Khối lượng của vật <b>không đổi</b> khi nở ra; do thể tích tăng nên khối lượng riêng của vật giảm.</p>` },
    { title: 'Ứng dụng: nhiệt kế và băng kép', html: `<ul><li><b>Nhiệt kế chất lỏng</b> (thuỷ ngân, rượu) hoạt động dựa trên sự nở vì nhiệt của chất lỏng.</li><li><b>Băng kép</b> gồm hai thanh kim loại khác nhau (ví dụ đồng và thép) tán chặt vào nhau. Khi nóng lên, đồng nở nhiều hơn thép nên băng kép cong về phía thanh thép. Băng kép dùng để tự động đóng ngắt mạch điện (bàn là, nồi cơm điện).</li></ul>`,
      svg: S.expansion('bimetal') },
    { title: 'Tác hại và cách khắc phục', html: `<ul><li>Chỗ nối hai thanh ray để khe hở cho ray nở ra khi nóng.</li><li>Cầu thép có một đầu gối trên con lăn để cầu dài ra, co lại tự do.</li><li>Đường ống dẫn hơi nóng có đoạn uốn cong; dây điện mắc hơi chùng vào mùa hè.</li><li>Không đổ đầy nước vào chai thuỷ tinh rồi đặt lên bếp; không để chai nước ngọt ngoài nắng gắt.</li></ul>`,
      svg: S.expansion('rail') }
  ],
  summary: 'Chất rắn, lỏng, khí đều nở ra khi nóng lên, co lại khi lạnh đi; khí nở nhiều nhất, rắn nở ít nhất. Nguyên nhân: khoảng cách giữa các phân tử tăng khi nhiệt độ tăng. Ứng dụng: nhiệt kế, băng kép; khắc phục tác hại: khe hở đường ray, con lăn ở đầu cầu.',
  examples: [
    { title: 'Tính độ dài thêm', problem: 'Thanh thép dài 1 m, nóng thêm 1 °C thì dài thêm khoảng 0,012 mm. Thanh dài 10 m nóng thêm 30 °C thì dài thêm bao nhiêu? (số liệu tham khảo)', solution: '0,012 · 10 · 30 = 3,6 (mm).' },
    { title: 'Giải thích', problem: 'Vì sao quả bóng bàn bị bẹp (không thủng) nhúng vào nước nóng lại phồng lên?', solution: 'Không khí trong quả bóng nóng lên, nở ra đẩy vỏ bóng phồng trở lại.' },
    { title: 'Băng kép', problem: 'Băng kép đồng – thép khi được làm lạnh sẽ cong về phía nào?', solution: 'Khi lạnh, đồng co lại nhiều hơn thép nên băng kép cong về phía thanh đồng.' }
  ],
  exercises: [
    { question: 'Vì sao khi rót nước nóng vào cốc thuỷ tinh dày thì cốc dễ vỡ hơn cốc mỏng?', hints: ['Mặt trong và mặt ngoài cốc nóng lên như nhau không?', 'Thuỷ tinh dẫn nhiệt kém.'], solution: 'Mặt trong nóng lên nở ra trước, mặt ngoài chưa kịp nóng nên chưa nở; cốc dày thì chênh lệch lớn, lớp thuỷ tinh bị nứt vỡ.' },
    { question: 'Thanh nhôm dài 2 m nóng thêm 1 °C thì dài thêm khoảng bao nhiêu? (1 m nhôm dài thêm 0,023 mm khi nóng thêm 1 °C)', hints: ['Độ dài thêm tỉ lệ với chiều dài thanh.', '0,023 · 2.'], solution: '0,023 · 2 = 0,046 (mm).' },
    { question: 'Vì sao không nên bơm bánh xe đạp thật căng rồi để ngoài nắng gắt?', hints: ['Không khí trong săm nóng lên thì sao?', 'Chất khí nở vì nhiệt nhiều.'], solution: 'Không khí trong săm nóng lên nở ra mạnh, áp suất tăng có thể làm nổ săm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất khí nở vì nhiệt nhiều hơn chất rắn.', answer: true, explain: 'Khí nở nhiều nhất, rắn nở ít nhất.' },
    { type: 'mcq', q: 'Khi một vật rắn nóng lên thì:', options: ['khối lượng tăng', 'khối lượng giảm', 'thể tích tăng, khối lượng không đổi', 'thể tích giảm'], answer: 2, explain: 'Vật nở ra, khối lượng không đổi.' },
    { type: 'short', q: 'Thanh thép dài 1 m nóng thêm 1 °C thì dài thêm 0,012 mm. Thanh dài 1 m nóng thêm 50 °C dài thêm bao nhiêu mm?', answer: '0,6', unit: 'mm', calc: '0.012*50', explain: '0,012 · 50 = 0,6 mm.' },
    { type: 'mcq', q: 'Nhiệt kế thuỷ ngân hoạt động dựa trên:', options: ['sự nở vì nhiệt của chất khí', 'sự nở vì nhiệt của chất lỏng', 'sự nở vì nhiệt của chất rắn', 'sự bay hơi'], answer: 1, explain: 'Thuỷ ngân là chất lỏng nở ra khi nóng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chỗ nối hai thanh ray xe lửa để khe hở là để tiết kiệm thép.', answer: false, explain: 'Khe hở để ray nở ra khi nóng mà không bị cong vênh.' },
    { type: 'short', q: 'Thanh ray thép dài 12 m, nóng thêm 1 °C thì mỗi mét dài thêm 0,012 mm. Thanh ray nóng thêm 40 °C dài thêm bao nhiêu mm?', answer: '5,76', unit: 'mm', calc: '0.012*12*40', explain: '0,012 · 12 · 40 = 5,76 mm.' },
    { type: 'mcq', q: 'Băng kép đồng – thép khi nóng lên sẽ cong về phía:', options: ['thanh đồng', 'thanh thép', 'không cong', 'lúc cong bên này lúc bên kia'], answer: 1, explain: 'Đồng nở nhiều hơn nên nằm ở phía ngoài vòng cong.' },
    { type: 'short', q: 'Thanh nhôm dài 1 m nóng thêm 1 °C dài thêm 0,023 mm. Thanh nhôm dài 3 m nóng thêm 1 °C dài thêm bao nhiêu mm?', answer: '0,069', unit: 'mm', calc: '0.023*3', explain: '0,023 · 3 = 0,069 mm.' }
  ]
});
})();
