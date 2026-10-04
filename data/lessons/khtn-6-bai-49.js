/* KHTN 6 – Bài 49. Năng lượng hao phí. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-49', {
  objectives: [
    'Nêu được năng lượng có ích và năng lượng hao phí trong quá trình sử dụng thiết bị.',
    'Nêu được năng lượng hao phí luôn xuất hiện khi năng lượng được chuyển hoá hoặc truyền đi.',
    'Tính được năng lượng hao phí dựa vào định luật bảo toàn năng lượng; nêu được cách giảm hao phí.'
  ],
  intro: 'Bóng đèn sợi đốt sáng lâu thì rất nóng; động cơ xe máy nóng ran sau khi chạy. Phần nhiệt đó không phục vụ mục đích ta cần – đó là <b>năng lượng hao phí</b>.',
  steps: [
    { title: 'Năng lượng có ích và hao phí', html: `<p>Khi dùng một thiết bị, năng lượng đầu vào được chuyển hoá thành:</p>
      <ul><li><b>Năng lượng có ích</b>: phần phục vụ đúng mục đích sử dụng.</li><li><b>Năng lượng hao phí</b>: phần không mong muốn (thường là nhiệt, âm thanh), không phục vụ mục đích.</li></ul>
      <div class="box key">Năng lượng đầu vào = Năng lượng có ích + Năng lượng hao phí</div>` },
    { title: 'Ví dụ ở một số thiết bị', html: `<table class="tbl"><tr><th>Thiết bị</th><th>Có ích</th><th>Hao phí</th></tr>
      <tr><td>Bóng đèn</td><td>Ánh sáng</td><td>Nhiệt</td></tr><tr><td>Quạt điện</td><td>Động năng cánh quạt (tạo gió)</td><td>Nhiệt ở động cơ, âm thanh</td></tr>
      <tr><td>Ô tô, xe máy</td><td>Động năng của xe</td><td>Nhiệt, âm thanh (tiếng máy, khói nóng)</td></tr><tr><td>Tivi</td><td>Ánh sáng, âm thanh</td><td>Nhiệt</td></tr>
      <tr><td>Nồi cơm điện</td><td>Nhiệt làm chín cơm</td><td>Nhiệt toả ra không khí xung quanh</td></tr></table>
      <p>Lưu ý: cùng là nhiệt, nhưng ở nồi cơm điện nhiệt là có ích, còn ở bóng đèn nhiệt là hao phí – tuỳ mục đích sử dụng.</p>` },
    { title: 'So sánh hai loại bóng đèn', html: `<p>Để có cùng độ sáng, đèn LED hao phí ít hơn nhiều so với đèn sợi đốt.</p>`,
      svg: S.bar({ cats: ['Đèn sợi đốt', 'Đèn LED'], series: [{ name: 'Ánh sáng (có ích)', values: [10, 40], color: '#16a34a' }, { name: 'Nhiệt (hao phí)', values: [90, 60], color: '#ef4444' }], width: 520, height: 300, yMax: 100, yStep: 20, yLabel: 'J', title: 'Mỗi bóng đèn nhận 100 J điện năng' }),
      caption: 'Số liệu minh hoạ: với 100 J điện năng, đèn LED cho nhiều ánh sáng hơn và toả ít nhiệt hơn.' },
    { title: 'Giảm năng lượng hao phí', html: `<ul><li>Dùng thiết bị hiệu quả cao: đèn LED thay đèn sợi đốt, thiết bị có nhãn tiết kiệm năng lượng.</li><li>Bảo dưỡng máy móc, tra dầu mỡ để giảm ma sát.</li>
      <li>Đậy nắp nồi khi nấu; dùng nồi có đáy vừa với bếp; cách nhiệt tủ lạnh, bình nước nóng.</li><li>Tắt thiết bị khi không sử dụng.</li></ul>` }
  ],
  summary: 'Năng lượng đầu vào của thiết bị gồm phần có ích (phục vụ mục đích) và phần hao phí (không mong muốn, thường là nhiệt, âm thanh). Năng lượng đầu vào = có ích + hao phí. Giảm hao phí bằng cách dùng thiết bị hiệu quả, bảo dưỡng máy, giảm ma sát, cách nhiệt, tắt thiết bị khi không dùng.',
  examples: [
    { title: 'Tính hao phí', problem: 'Một động cơ nhận 1 000 J năng lượng, tạo ra 700 J động năng có ích. Tính năng lượng hao phí.', solution: '1 000 − 700 = <b>300 J</b>.' },
    { title: 'Xác định có ích và hao phí', problem: 'Với máy khoan điện, đâu là năng lượng có ích, đâu là hao phí?', solution: 'Có ích: <b>động năng</b> của mũi khoan. Hao phí: <b>nhiệt</b> (máy nóng lên) và <b>âm thanh</b> (tiếng ồn).' },
    { title: 'So sánh', problem: 'Hai bóng đèn cùng nhận 100 J điện năng: đèn A phát 10 J ánh sáng, đèn B phát 40 J ánh sáng. Đèn nào hao phí ít hơn?', solution: 'Đèn A hao phí 90 J, đèn B hao phí 60 J → <b>đèn B</b> hao phí ít hơn.' }
  ],
  exercises: [
    { question: 'Một chiếc quạt nhận 600 J điện năng; năng lượng hao phí là 120 J. Tính năng lượng có ích.', hints: ['Đầu vào = có ích + hao phí.', 'Có ích = 600 − 120.'], solution: '600 − 120 = <b>480 J</b>.' },
    { question: 'Vì sao khi nấu ăn nên đậy nắp nồi?', hints: ['Khi mở nắp, nhiệt đi đâu?', 'Đậy nắp giảm năng lượng hao phí như thế nào?'], solution: 'Đậy nắp giữ hơi nóng trong nồi, giảm lượng nhiệt thoát ra không khí (giảm <b>hao phí</b>), thức ăn chín nhanh hơn, tiết kiệm gas/điện.' },
    { question: 'Bạn An nói: "Có thể chế tạo máy không có năng lượng hao phí." Em có đồng ý không? Vì sao?', hints: ['Khi máy hoạt động luôn có gì xảy ra ở các bộ phận chuyển động?', 'Ma sát sinh ra nhiệt.'], solution: '<b>Không đồng ý</b>. Khi năng lượng được chuyển hoá hoặc truyền đi luôn có một phần chuyển thành nhiệt (do ma sát, do dòng điện…) và âm thanh – đó là hao phí. Ta chỉ có thể <b>giảm</b> chứ không thể loại bỏ hoàn toàn.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Với bóng đèn điện, năng lượng hao phí chủ yếu là:', options: ['Nhiệt', 'Ánh sáng', 'Điện', 'Hoá học'], answer: 0, explain: 'Mục đích của đèn là ánh sáng; nhiệt là hao phí.' },
    { type: 'short', q: 'Một máy nhận 800 J, năng lượng có ích là 600 J. Năng lượng hao phí là bao nhiêu J?', answer: '200', unit: 'J', calc: '800-600', explain: '800 − 600 = 200 J.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năng lượng đầu vào bằng tổng năng lượng có ích và năng lượng hao phí.', answer: true, explain: 'Theo định luật bảo toàn năng lượng.' },
    { type: 'mcq', q: 'Với nồi cơm điện, năng lượng nhiệt làm chín cơm là năng lượng:', options: ['Có ích', 'Hao phí', 'Âm thanh', 'Ánh sáng'], answer: 0, explain: 'Đúng mục đích nấu chín cơm.' },
    { type: 'mcq', q: 'Cách nào giúp giảm năng lượng hao phí ở xe đạp?', options: ['Tra dầu vào xích, ổ trục', 'Bơm lốp thật non', 'Để xe ngoài mưa', 'Chở thật nặng'], answer: 0, explain: 'Giảm ma sát, giảm hao phí.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể chế tạo máy không có năng lượng hao phí.', answer: false, explain: 'Luôn có hao phí; chỉ có thể giảm.' },
    { type: 'short', q: 'Một quạt nhận 500 J, hao phí 75 J. Năng lượng có ích là bao nhiêu J?', answer: '425', unit: 'J', calc: '500-75', explain: '500 − 75 = 425 J.' },
    { type: 'mcq', q: 'Để có cùng độ sáng, loại đèn nào ít hao phí hơn?', options: ['Đèn LED', 'Đèn sợi đốt', 'Như nhau', 'Không so sánh được'], answer: 0, explain: 'Đèn LED toả ít nhiệt hơn.' }
  ]
});
})();
