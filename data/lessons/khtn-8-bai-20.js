/* KHTN 8 – Bài 20. Hiện tượng nhiễm điện do cọ xát. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-20', {
  objectives: [
    'Mô tả được cách làm một vật bị nhiễm điện do cọ xát.',
    'Nêu được có hai loại điện tích (dương, âm); các vật nhiễm điện cùng loại thì đẩy nhau, khác loại thì hút nhau.',
    'Giải thích được sự nhiễm điện do cọ xát dựa vào sự dịch chuyển electron.',
    'Giải thích được một số hiện tượng nhiễm điện trong thực tế.'
  ],
  intro: 'Mùa hanh khô, cởi áo len ra đôi khi nghe tiếng lách tách, thậm chí thấy chớp sáng nhỏ trong bóng tối. Chải tóc khô bằng lược nhựa thì tóc dựng lên bám theo lược. Đó là những biểu hiện của <b>hiện tượng nhiễm điện</b>.',
  steps: [
    { title: 'Nhiễm điện do cọ xát', html: `<p>Cọ xát thước nhựa vào mảnh vải khô (hoặc tóc khô) rồi đưa lại gần các mẩu giấy vụn: thước nhựa <b>hút</b> các mẩu giấy. Ta nói thước nhựa đã bị <b>nhiễm điện</b> (mang điện tích).</p>
      <p>Nhiều vật khác như thanh thuỷ tinh, mảnh nylon, quả bóng bay… cũng bị nhiễm điện khi cọ xát.</p>`,
      svg: S.chargeScene('comb'), caption: 'Lược nhựa cọ xát vào tóc khô bị nhiễm điện, hút được giấy vụn.' },
    { title: 'Hai loại điện tích', html: `<p>Có hai loại điện tích: <b>điện tích dương (+)</b> và <b>điện tích âm (−)</b>. Quy ước: thanh thuỷ tinh cọ xát vào lụa mang điện tích dương; thanh nhựa cọ xát vào vải khô mang điện tích âm.</p>
      <div class="box key">Các vật nhiễm điện cùng loại thì <b>đẩy</b> nhau; khác loại thì <b>hút</b> nhau.</div>`,
      svg: S.row([{ svg: S.chargeScene('repel'), caption: 'Cùng loại: đẩy nhau' }, { svg: S.chargeScene('attract'), caption: 'Khác loại: hút nhau' }]) },
    { title: 'Giải thích sự nhiễm điện', html: `<p>Nguyên tử gồm hạt nhân mang điện dương và các electron mang điện âm; bình thường nguyên tử trung hoà về điện (số proton = số electron).</p>
      <ul><li>Khi cọ xát, một số <b>electron</b> dịch chuyển từ vật này sang vật kia.</li><li>Vật <b>nhận thêm electron</b> ⇒ nhiễm điện <b>âm</b>.</li><li>Vật <b>mất bớt electron</b> ⇒ nhiễm điện <b>dương</b>.</li></ul>
      <p>Ví dụ: thước nhựa cọ vào vải khô, electron chuyển từ vải sang thước ⇒ thước nhiễm điện âm, vải nhiễm điện dương.</p>` },
    { title: 'Nhiễm điện trong thực tế', html: `<ul><li>Màn hình ti vi, cánh quạt hay bám bụi vì bị nhiễm điện khi cọ xát với không khí.</li><li>Xe chở xăng có dây xích thả chạm đất để truyền điện tích xuống đất, tránh phát sinh tia lửa điện gây cháy nổ.</li><li>Sét là hiện tượng phóng điện giữa các đám mây tích điện hoặc giữa mây và mặt đất; nhà cao tầng cần có cột chống sét.</li><li>Ứng dụng: sơn tĩnh điện, lọc bụi tĩnh điện, máy photocopy.</li></ul>` }
  ],
  summary: 'Nhiều vật bị nhiễm điện khi cọ xát, có thể hút vật nhẹ. Có hai loại điện tích: dương và âm; cùng loại đẩy nhau, khác loại hút nhau. Vật nhận thêm electron nhiễm điện âm, mất electron nhiễm điện dương.',
  examples: [
    { title: 'Xác định loại điện tích', problem: 'Thanh A nhiễm điện dương hút thanh B. Thanh B đẩy thanh C. Thanh C nhiễm điện loại gì?', solution: 'A (+) hút B ⇒ B mang điện âm. B đẩy C ⇒ C cùng loại với B ⇒ C mang điện âm.' },
    { title: 'Giải thích', problem: 'Cọ xát thanh thuỷ tinh vào lụa, thanh thuỷ tinh nhiễm điện dương. Electron đã dịch chuyển như thế nào?', solution: 'Electron chuyển từ thanh thuỷ tinh sang mảnh lụa; thuỷ tinh mất electron nên nhiễm điện dương, lụa nhận electron nên nhiễm điện âm.' },
    { title: 'Đếm electron', problem: 'Một vật trung hoà có 20 electron, sau khi cọ xát mất đi 4 electron. Vật còn bao nhiêu electron và nhiễm điện loại gì?', solution: 'Còn 20 − 4 = 16 electron; vật mất electron nên nhiễm điện dương.' }
  ],
  exercises: [
    { question: 'Vì sao lau kính bằng khăn khô thì kính lại càng dễ bám bụi?', hints: ['Lau là cọ xát.', 'Vật nhiễm điện hút vật nhẹ.'], solution: 'Khi lau, kính bị nhiễm điện do cọ xát nên hút các hạt bụi nhỏ.' },
    { question: 'Có ba quả cầu nhẹ treo bằng sợi chỉ: A đẩy B, B hút C. Biết C nhiễm điện dương. Xác định điện tích của A và B.', hints: ['B hút C (+) ⇒ B mang điện gì?', 'A đẩy B ⇒ A cùng loại với B.'], solution: 'B mang điện âm; A cũng mang điện âm.' },
    { question: 'Vì sao xe chở xăng thường có một sợi xích sắt kéo lê trên mặt đường?', hints: ['Khi xe chạy, thùng xe cọ xát với không khí.', 'Xích sắt dẫn điện xuống đất.'], solution: 'Thùng xe nhiễm điện do cọ xát; xích sắt truyền điện tích xuống đất, tránh tia lửa điện làm cháy xăng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai vật nhiễm điện cùng loại thì hút nhau.', answer: false, explain: 'Cùng loại thì đẩy nhau.' },
    { type: 'mcq', q: 'Vật nhiễm điện âm là do:', options: ['mất bớt electron', 'nhận thêm electron', 'mất bớt proton', 'nhận thêm proton'], answer: 1, explain: 'Nhận thêm electron thì nhiễm điện âm.' },
    { type: 'short', q: 'Một nguyên tử trung hoà có 8 proton. Nếu nhận thêm 2 electron thì nó có tổng cộng bao nhiêu electron?', answer: '10', unit: 'electron', calc: '8+2', explain: 'Trung hoà có 8 electron; thêm 2 thành 10 electron.' },
    { type: 'mcq', q: 'Thanh thuỷ tinh cọ xát vào lụa thì thanh thuỷ tinh:', options: ['nhiễm điện âm', 'nhiễm điện dương', 'không nhiễm điện', 'vừa âm vừa dương'], answer: 1, explain: 'Theo quy ước, thanh thuỷ tinh cọ vào lụa mang điện dương.' },
    { type: 'short', q: 'Khi cọ xát, thước nhựa nhận thêm 6 electron từ mảnh vải khô (lúc đầu cả hai trung hoà). Mảnh vải mất đi bao nhiêu electron?', answer: '6', unit: 'electron', calc: '6', explain: 'Electron chuyển từ vải sang thước nên vải mất đúng 6 electron.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vật nhiễm điện có thể hút các vật nhẹ như mẩu giấy vụn.', answer: true, explain: 'Đó là dấu hiệu nhận biết vật nhiễm điện.' },
    { type: 'mcq', q: 'A đẩy B, B hút C, C nhiễm điện âm. A nhiễm điện:', options: ['âm', 'dương', 'không nhiễm điện', 'không xác định được'], answer: 1, explain: 'B hút C (−) ⇒ B dương; A đẩy B ⇒ A dương.' },
    { type: 'short', q: 'Một vật trung hoà có 30 electron, sau khi cọ xát mất 5 electron. Vật còn bao nhiêu electron?', answer: '25', unit: 'electron', calc: '30-5', explain: '30 − 5 = 25 electron (vật nhiễm điện dương).' }
  ]
});
})();
