/* GDCD 6 – Bài 11. Quyền cơ bản của trẻ em. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-11', {
  objectives: [
    'Nêu được các quyền cơ bản của trẻ em theo Luật Trẻ em năm 2016.',
    'Phân loại được các nhóm quyền: sống còn, bảo vệ, phát triển, tham gia.',
    'Nêu được ý nghĩa của quyền trẻ em; nhận biết hành vi vi phạm quyền trẻ em.'
  ],
  intro: 'Theo pháp luật Việt Nam, em là <b>trẻ em</b> – và em có những quyền được pháp luật bảo vệ: được khai sinh, được học, được chơi, được nói lên ý kiến của mình…',
  steps: [
    { title: 'Trẻ em và Luật Trẻ em', html: `<p>Theo <b>Luật Trẻ em năm 2016</b> (có hiệu lực từ ngày 1/6/2017), <b>trẻ em là người dưới 16 tuổi</b>. Luật quy định 25 quyền của trẻ em (từ Điều 12 đến Điều 36).</p>
      <p>Hiến pháp năm 2013 (Điều 37) khẳng định trẻ em được Nhà nước, gia đình và xã hội bảo vệ, chăm sóc và giáo dục. Việt Nam phê chuẩn Công ước của Liên hợp quốc về quyền trẻ em năm 1990.</p>` },
    { title: 'Bốn nhóm quyền', html: `<p>Các quyền trẻ em thường được chia thành bốn nhóm:</p>`,
      svg: S.mindmap({ center: 'Quyền trẻ em', branches: [{ title: 'Sống còn', items: ['Quyền sống', 'Được chăm sóc sức khoẻ', 'Khai sinh, có quốc tịch'] }, { title: 'Bảo vệ', items: ['Không bị bạo lực', 'Không bị xâm hại, bóc lột'] }, { title: 'Phát triển', items: ['Học tập', 'Vui chơi, giải trí'] }, { title: 'Tham gia', items: ['Bày tỏ ý kiến', 'Tiếp cận thông tin'] }], w: 640, size: 13 }), caption: 'Bốn nhóm quyền cơ bản.' },
    { title: 'Một số quyền cụ thể', html: `<p>Ví dụ theo Luật Trẻ em năm 2016:</p>`,
      svg: S.table({ title: 'Một số quyền trong Luật Trẻ em 2016', head: ['Quyền', 'Ví dụ thực hiện'], rows: [['Quyền sống (Điều 12)', 'Được nuôi dưỡng, bảo vệ tính mạng'], ['Khai sinh, quốc tịch (Điều 13)', 'Được làm giấy khai sinh'], ['Học tập (Điều 16)', 'Được đến trường'], ['Vui chơi, giải trí (Điều 17)', 'Có thời gian chơi, thể thao'], ['Bày tỏ ý kiến (Điều 34)', 'Được góp ý về việc liên quan']], colW: 260 }), caption: 'Tóm tắt, diễn đạt lại.' },
    { title: 'Ý nghĩa', html: `<p>Quyền trẻ em là điều kiện để trẻ được phát triển đầy đủ về thể chất, trí tuệ, tinh thần, đạo đức; là cơ sở để gia đình, nhà trường, xã hội có trách nhiệm chăm sóc, bảo vệ trẻ em.</p>
      <div class="box key">Trẻ em: người dưới 16 tuổi; 25 quyền; 4 nhóm: sống còn – bảo vệ – phát triển – tham gia.</div>` }
  ],
  summary: 'Theo Luật Trẻ em năm 2016 (hiệu lực từ 1/6/2017), trẻ em là người dưới 16 tuổi, có 25 quyền (Điều 12–36), chia thành bốn nhóm: sống còn, bảo vệ, phát triển, tham gia. Hiến pháp năm 2013 (Điều 37) quy định trẻ em được Nhà nước, gia đình, xã hội bảo vệ, chăm sóc, giáo dục. Quyền trẻ em giúp trẻ phát triển toàn diện.',
  examples: [
    { title: 'Phân nhóm', problem: 'Quyền được vui chơi, giải trí thuộc nhóm nào?', solution: 'Nhóm quyền phát triển.' },
    { title: 'Vi phạm', problem: 'Bố mẹ bắt Hà nghỉ học để bán hàng cả ngày. Quyền nào của Hà bị vi phạm?', solution: 'Quyền học tập (và quyền được bảo vệ khỏi bị bóc lột sức lao động).' },
    { title: 'Tính tuổi', problem: 'Nam sinh năm 2014. Đến hết năm nào Nam không còn là trẻ em theo Luật Trẻ em?', solution: 'Nam đủ 16 tuổi vào năm 2030; từ khi đủ 16 tuổi, Nam không còn là trẻ em theo luật.' }
  ],
  exercises: [
    { question: 'Kể tên bốn nhóm quyền trẻ em và mỗi nhóm một ví dụ.', hints: ['Sống còn, bảo vệ, phát triển, tham gia.', 'Xem sơ đồ ở bước 2.'], solution: 'Sống còn: được chăm sóc sức khoẻ; bảo vệ: không bị bạo lực; phát triển: học tập; tham gia: bày tỏ ý kiến.' },
    { question: 'Hành vi nào vi phạm quyền trẻ em: (a) đánh đập trẻ; (b) cho trẻ tham gia câu lạc bộ; (c) đọc trộm nhật kí của trẻ; (d) không làm giấy khai sinh cho trẻ.', hints: ['Hành vi nào gây hại hoặc tước quyền?', 'Có ba đáp án.'], solution: '(a), (c), (d).' },
    { question: 'Luật Trẻ em có hiệu lực từ 1/6/2017. Đến 1/6/2026 là bao nhiêu năm?', hints: ['2026 − 2017.', 'Cùng ngày tháng.'], solution: '9 năm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo Luật Trẻ em năm 2016, trẻ em là người dưới 16 tuổi.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Luật Trẻ em năm 2016 quy định bao nhiêu quyền của trẻ em?', answer: '25', unit: 'quyền', calc: '36-12+1', explain: 'Điều 12 đến 36: 25 quyền.' },
    { type: 'mcq', q: 'Quyền học tập thuộc nhóm:', options: ['phát triển', 'sống còn', 'bảo vệ', 'tham gia'], answer: 0, explain: 'Phát triển.' },
    { type: 'mcq', q: 'Quyền bày tỏ ý kiến thuộc nhóm:', options: ['tham gia', 'bảo vệ', 'sống còn', 'phát triển'], answer: 0, explain: 'Tham gia.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bắt trẻ em nghỉ học để lao động kiếm tiền là thực hiện đúng quyền trẻ em.', answer: false, explain: 'Vi phạm.' },
    { type: 'short', q: 'Một bạn sinh năm 2013. Bạn đủ 16 tuổi vào năm nào?', answer: '2029', calc: '2013+16', explain: '2029.' },
    { type: 'mcq', q: 'Luật Trẻ em năm 2016 có hiệu lực từ:', options: ['1/6/2017', '1/1/2016', '2/9/2016', '1/6/2016'], answer: 0, explain: '1/6/2017.' },
    { type: 'mcq', q: 'Hành vi vi phạm quyền được bảo vệ của trẻ em:', options: ['Đánh đập, bạo lực', 'Cho trẻ đi học', 'Đưa trẻ đi tiêm phòng', 'Lắng nghe ý kiến trẻ'], answer: 0, explain: 'Bạo lực.' }
  ]
});
})();
