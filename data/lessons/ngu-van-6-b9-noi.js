/* Ngữ văn 6 – Bài 9. Nói và nghe: Thảo luận về giải pháp khắc phục nạn ô nhiễm môi trường. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b9-noi', {
  objectives: [
    'Tham gia thảo luận nhóm về giải pháp khắc phục ô nhiễm môi trường, nêu ý kiến có lí lẽ.',
    'Biết phân vai trong nhóm (điều hành, thư kí, thành viên) và tuân thủ quy tắc thảo luận.',
    'Biết lắng nghe, tôn trọng ý kiến khác, tổng hợp và trình bày kết quả thảo luận.'
  ],
  intro: 'Rác thải nhựa, khói bụi, nước thải… Ô nhiễm môi trường là vấn đề lớn, nhưng giải pháp có thể bắt đầu từ lớp học. Hãy cùng nhóm thảo luận để tìm những việc làm thiết thực nhất.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Xác định vấn đề cụ thể: ô nhiễm rác thải nhựa / không khí / nguồn nước ở địa phương, trường học.</li><li>Tìm hiểu thông tin: quan sát thực tế, đọc văn bản thông tin, hỏi người lớn.</li><li>Phân vai: <b>người điều hành</b> (dẫn dắt, giữ giờ), <b>thư kí</b> (ghi biên bản), <b>thành viên</b> (nêu ý kiến).</li></ul>` },
    { title: 'Tiến trình thảo luận', html: `<p>Nhóm thảo luận theo các bước:</p>`,
      svg: S.flow({ items: [{ title: 'Nêu vấn đề', text: 'Điều hành giới thiệu, thống nhất mục tiêu' }, { title: 'Nêu ý kiến', text: 'Mỗi người đề xuất giải pháp + lí do' }, { title: 'Trao đổi', text: 'Hỏi, phản biện, bổ sung' }, { title: 'Thống nhất', text: 'Chọn giải pháp khả thi; thư kí ghi' }] }),
      caption: 'Tiến trình một cuộc thảo luận nhóm.' },
    { title: 'Phiếu tổng hợp giải pháp', html: `<table class="tbl"><tr><th>Giải pháp</th><th>Lí do / hiệu quả</th><th>Khả thi?</th></tr><tr><td>Dùng bình nước cá nhân, hạn chế chai nhựa</td><td>Giảm rác nhựa dùng một lần</td><td>Cao</td></tr><tr><td>Đặt thùng phân loại rác ở lớp</td><td>Tái chế được giấy, nhựa</td><td>Cao</td></tr><tr><td>Trồng cây xanh ở sân trường</td><td>Lọc không khí, tạo bóng mát</td><td>Trung bình</td></tr><tr><td>Tuyên truyền qua báo tường</td><td>Nâng cao ý thức</td><td>Cao</td></tr></table>` },
    { title: 'Quy tắc thảo luận', html: `<ul><li>Nói khi đến lượt; không ngắt lời.</li><li>Nêu ý kiến kèm lí do: “Mình đề xuất… vì…”.</li><li>Phản biện lịch sự: “Ý của bạn hay, nhưng mình băn khoăn…”.</li><li>Tập trung vào vấn đề, không chê bai cá nhân.</li><li>Tôn trọng kết luận chung.</li></ul>` },
    { title: 'Bảng kiểm', html: `<table class="tbl"><tr><th>Tiêu chí</th><th>Đạt / Chưa đạt</th></tr><tr><td>Hiểu rõ vấn đề, có thông tin</td><td></td></tr><tr><td>Đề xuất giải pháp cụ thể, có lí do</td><td></td></tr><tr><td>Lắng nghe, không ngắt lời</td><td></td></tr><tr><td>Phản biện lịch sự, có căn cứ</td><td></td></tr><tr><td>Nhóm thống nhất được giải pháp khả thi</td><td></td></tr><tr><td>Đại diện trình bày kết quả rõ ràng</td><td></td></tr></table>` }
  ],
  summary: 'Thảo luận nhóm về giải pháp khắc phục ô nhiễm: chuẩn bị thông tin, phân vai; tiến trình nêu vấn đề – nêu ý kiến – trao đổi – thống nhất; tuân thủ quy tắc (đúng lượt, có lí do, phản biện lịch sự); thư kí ghi biên bản; đại diện trình bày kết quả.',
  examples: [
    { title: 'Nêu ý kiến có lí do', problem: 'Viết câu đề xuất một giải pháp giảm rác nhựa.', solution: '“Mình đề xuất mỗi bạn mang bình nước riêng đến trường, vì mỗi ngày lớp mình thải ra khoảng hai mươi chai nhựa dùng một lần.”' },
    { title: 'Phản biện lịch sự', problem: 'Bạn đề xuất “cấm hoàn toàn đồ nhựa trong trường”. Hãy phản biện.', solution: '“Ý tưởng của bạn rất quyết tâm, nhưng mình băn khoăn là cấm hoàn toàn ngay có thể khó thực hiện. Hay mình bắt đầu từ việc bỏ chai nhựa và ống hút trước?”' },
    { title: 'Lời người điều hành', problem: 'Viết lời người điều hành kết thúc thảo luận.', solution: '“Như vậy nhóm mình thống nhất hai giải pháp: dùng bình nước cá nhân và đặt thùng phân loại rác. Thư kí đã ghi lại, bạn Hà sẽ đại diện trình bày. Cảm ơn mọi người!”' }
  ],
  exercises: [
    { question: 'Nêu ba vai trò trong nhóm thảo luận và nhiệm vụ của mỗi vai.', hints: ['Người dẫn dắt.', 'Người ghi chép; người góp ý.'], solution: 'Điều hành: dẫn dắt, phân lượt, giữ giờ, tổng kết. Thư kí: ghi lại ý kiến, kết luận (biên bản). Thành viên: đề xuất, trao đổi, phản biện.' },
    { question: 'Đề xuất hai giải pháp giảm ô nhiễm không khí ở khu em sống, kèm lí do.', hints: ['Nghĩ về phương tiện đi lại.', 'Nghĩ về cây xanh, đốt rác.'], solution: 'Ví dụ: đi bộ, xe đạp khi đi gần – giảm khói xe; không đốt rác, rơm rạ – giảm khói bụi; trồng thêm cây xanh – lọc không khí.' },
    { question: 'Sửa câu phản biện sau cho lịch sự: “Ý kiến của cậu vớ vẩn quá!”', hints: ['Ghi nhận trước.', 'Nêu băn khoăn và đề nghị.'], solution: 'Ví dụ: “Mình hiểu ý bạn, nhưng mình nghĩ giải pháp này khó thực hiện vì tốn kém. Bạn thấy nếu mình thử cách … thì sao?”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Người ghi lại ý kiến và kết luận trong thảo luận là:', options: ['Thư kí', 'Điều hành', 'Khán giả', 'Giáo viên'], answer: 0, explain: 'Thư kí ghi biên bản.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi thảo luận, có thể ngắt lời bạn nếu mình có ý hay hơn.', answer: false, explain: 'Chờ đến lượt.' },
    { type: 'mcq', q: 'Đề xuất giải pháp nên kèm:', options: ['Lí do, hiệu quả', 'Lời chê bạn', 'Câu chuyện cười', 'Không cần gì'], answer: 0, explain: 'Tăng thuyết phục.' },
    { type: 'mcq', q: 'Giải pháp nào khả thi nhất với học sinh lớp 6?', options: ['Dùng bình nước cá nhân', 'Xây nhà máy xử lí rác', 'Ban hành luật mới', 'Đóng cửa các nhà máy'], answer: 0, explain: 'Phù hợp khả năng.' },
    { type: 'mcq', q: 'Bước cuối của thảo luận:', options: ['Thống nhất giải pháp và ghi lại', 'Nêu vấn đề', 'Phân vai', 'Tìm thông tin'], answer: 0, explain: 'Chốt kết quả.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phản biện cần tập trung vào vấn đề, không chê bai cá nhân.', answer: true, explain: 'Quy tắc thảo luận.' },
    { type: 'mcq', q: 'Người điều hành có nhiệm vụ:', options: ['Dẫn dắt, phân lượt, giữ giờ, tổng kết', 'Chỉ ghi chép', 'Chỉ nghe', 'Chấm điểm'], answer: 0, explain: 'Vai trò điều hành.' },
    { type: 'mcq', q: 'Trước khi thảo luận, nhóm nên:', options: ['Tìm hiểu thông tin về vấn đề', 'Chơi trò chơi', 'Chọn người thắng', 'Không cần chuẩn bị'], answer: 0, explain: 'Có căn cứ.' }
  ]
});
})();
