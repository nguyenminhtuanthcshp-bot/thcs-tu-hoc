/* Tin học 9 – Bài 1. Thế giới kĩ thuật số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-1', {
  objectives: [
    'Nhận biết được sự có mặt của các thiết bị có gắn bộ xử lí thông tin trong đời sống.',
    'Nêu được ví dụ về tác động tích cực của máy tính, thiết bị số tới các lĩnh vực.',
    'Nêu được một số ảnh hưởng tiêu cực và cách sử dụng thiết bị số cân bằng, an toàn.'
  ],
  intro: 'Máy giặt tự chọn lượng nước, đồng hồ đếm bước chân, đèn giao thông đổi màu theo lưu lượng xe – xung quanh em có rất nhiều “máy tính nhỏ” đang làm việc. Đó là <b>thế giới kĩ thuật số</b>.',
  steps: [
    { title: 'Thiết bị có gắn bộ xử lí', html: `<p>Nhiều thiết bị hằng ngày có gắn <b>bộ xử lí thông tin</b> (vi xử lí, bộ vi điều khiển): điện thoại thông minh, máy giặt, điều hoà, ti vi thông minh, đồng hồ thông minh, ô tô, máy ATM, camera an ninh… Chúng cũng hoạt động theo mô hình <b>thu nhận – xử lí – lưu trữ – đưa ra</b> thông tin.</p>`,
      svg: S.ipo({ title: 'Máy giặt tự động xử lí thông tin', input: 'Cảm biến mực nước', process: 'Chọn chế độ giặt', output: 'Chạy động cơ, van' }), caption: 'Một thiết bị gia dụng cũng xử lí thông tin.' },
    { title: 'Tác động tích cực', html: `<p>Máy tính và thiết bị số giúp: học tập trực tuyến, tra cứu nhanh; chẩn đoán y tế bằng hình ảnh; thanh toán điện tử; dịch vụ công trực tuyến; điều khiển sản xuất tự động; dự báo thời tiết…</p>`,
      svg: S.mindmap({ center: 'Thiết bị số trong đời sống', branches: [{ title: 'Giáo dục', items: ['Học trực tuyến', 'Học liệu số'] }, { title: 'Y tế', items: ['Bệnh án điện tử', 'Khám từ xa'] }, { title: 'Kinh tế', items: ['Thanh toán điện tử', 'Thương mại điện tử'] }, { title: 'Đời sống', items: ['Nhà thông minh', 'Bản đồ số'] }], w: 640, size: 13 }), caption: 'Thiết bị số có mặt ở mọi lĩnh vực.' },
    { title: 'Ảnh hưởng tiêu cực', html: `<ul><li>Sức khoẻ: mỏi mắt, sai tư thế, thiếu vận động, mất ngủ.</li><li>Phụ thuộc, nghiện thiết bị, trò chơi.</li><li>Lộ thông tin cá nhân, lừa đảo trực tuyến.</li><li>Rác thải điện tử nếu không thu gom, xử lí đúng.</li></ul>` },
    { title: 'Sử dụng cân bằng', html: `<p>Đặt giới hạn thời gian; nghỉ mắt định kì (ví dụ quy tắc 20–20–20: cứ khoảng 20 phút nhìn xa khoảng 6 m trong 20 giây); vận động ngoài trời; bảo vệ thông tin cá nhân; thu gom thiết bị hỏng đúng nơi quy định.</p>
      <div class="box key">Thiết bị số là công cụ mạnh – hãy làm chủ nó.</div>` }
  ],
  summary: 'Nhiều thiết bị đời sống có gắn bộ xử lí thông tin và hoạt động theo mô hình thu nhận – xử lí – lưu trữ – đưa ra. Thiết bị số tác động tích cực tới giáo dục, y tế, kinh tế, đời sống; nhưng có thể gây hại sức khoẻ, gây nghiện, lộ thông tin, rác thải điện tử. Cần sử dụng cân bằng, an toàn.',
  examples: [
    { title: 'Nhận biết', problem: 'Đồng hồ thông minh thu nhận thông tin gì và đưa ra gì?', solution: 'Thu nhận: nhịp tim, số bước chân (cảm biến). Đưa ra: hiển thị số liệu, rung nhắc nhở.' },
    { title: 'Tích cực', problem: 'Nêu một lợi ích của dịch vụ công trực tuyến.', solution: 'Người dân nộp hồ sơ tại nhà, tiết kiệm thời gian, đi lại.' },
    { title: 'Tính thời gian', problem: 'Bạn An dùng điện thoại 4 giờ/ngày, quyết định giảm 25%. Mỗi ngày còn bao nhiêu phút?', solution: '240 × 0,75 = 180 phút.' }
  ],
  exercises: [
    { question: 'Kể ba thiết bị trong gia đình em có gắn bộ xử lí thông tin.', hints: ['Thiết bị nào có màn hình, nút cài đặt?', 'Thiết bị nào tự điều chỉnh?'], solution: 'Ví dụ: điện thoại, máy giặt, điều hoà, ti vi thông minh, nồi cơm điện tử.' },
    { question: 'Đề xuất ba cách giảm ảnh hưởng xấu của thiết bị số tới sức khoẻ.', hints: ['Về mắt và tư thế.', 'Về thời gian và vận động.'], solution: 'Nghỉ mắt định kì; ngồi đúng tư thế; giới hạn thời gian, tăng vận động ngoài trời.' },
    { question: 'Theo quy tắc 20–20–20, trong 2 giờ học trên máy tính em nên nghỉ mắt khoảng bao nhiêu lần?', hints: ['Cứ 20 phút nghỉ một lần.', '120 : 20.'], solution: '6 lần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Máy giặt tự động có gắn bộ xử lí thông tin.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Thiết bị nào KHÔNG có bộ xử lí thông tin?', options: ['Điện thoại thông minh', 'Máy ATM', 'Cái kéo', 'Đồng hồ thông minh'], answer: 2, explain: 'Cái kéo là dụng cụ cơ học.' },
    { type: 'mcq', q: 'Ảnh hưởng tiêu cực của việc lạm dụng thiết bị số là:', options: ['Học trực tuyến', 'Mỏi mắt, thiếu vận động', 'Thanh toán nhanh', 'Tra cứu dễ'], answer: 1, explain: 'Hại sức khoẻ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể vứt điện thoại hỏng chung với rác sinh hoạt mà không ảnh hưởng môi trường.', answer: false, explain: 'Rác thải điện tử cần thu gom riêng.' },
    { type: 'short', q: 'Dùng điện thoại 3 giờ/ngày, giảm 20%. Mỗi ngày còn bao nhiêu phút?', answer: '144', unit: 'phút', calc: '180*0.8', explain: '180 × 0,8.' },
    { type: 'short', q: 'Theo quy tắc 20–20–20, học 100 phút trên máy tính nên nghỉ mắt bao nhiêu lần?', answer: '5', unit: 'lần', calc: '100/20', explain: '100 : 20.' },
    { type: 'mcq', q: 'Cảm biến nhịp tim của đồng hồ thông minh thuộc khâu:', options: ['thu nhận', 'xử lí', 'lưu trữ', 'đưa ra'], answer: 0, explain: 'Thu nhận thông tin.' },
    { type: 'mcq', q: 'Ví dụ về tác động tích cực của thiết bị số trong y tế:', options: ['Bệnh án điện tử', 'Nghiện trò chơi', 'Lộ mật khẩu', 'Mất ngủ'], answer: 0, explain: 'Bệnh án điện tử.' }
  ]
});
})();
