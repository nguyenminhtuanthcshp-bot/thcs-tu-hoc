/* LS&ĐL 6 – Địa lí, Bài 30. Thực hành: Tìm hiểu mối quan hệ giữa con người và thiên nhiên ở địa phương. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-30', {
  objectives: [
    'Xác định được nội dung tìm hiểu về mối quan hệ con người – thiên nhiên ở địa phương.',
    'Thu thập thông tin qua quan sát, phỏng vấn, tài liệu.',
    'Phân tích được tác động tích cực, tiêu cực ở địa phương.',
    'Viết được báo cáo ngắn và đề xuất giải pháp.'
  ],
  intro: 'Con mương sau nhà em ngày xưa trong vắt, nay lại đầy rác? Cánh đồng chuyển sang trồng cây ăn quả cho thu nhập cao hơn? Mỗi thay đổi ở quê em đều kể câu chuyện về <b>con người và thiên nhiên</b>.',
  steps: [
    { title: 'Chọn chủ đề', html: `<ul><li>Con người tận dụng thiên nhiên: làm nông nghiệp, du lịch, khai thác thuỷ sản…</li><li>Con người tác động đến thiên nhiên: trồng rừng, xây dựng, xả thải…</li></ul>` },
    { title: 'Thu thập thông tin', html: `<p>Các cách:</p>`,
      svg: S.table({ title: 'Phương pháp thu thập thông tin', head: ['Phương pháp', 'Ví dụ'], rows: [['Quan sát', 'Chụp ảnh dòng sông, cánh đồng'], ['Phỏng vấn', 'Hỏi ông bà về thay đổi qua các năm'], ['Tài liệu', 'Báo địa phương, trang web xã, phường'], ['Đo đạc, đếm', 'Đếm số túi rác dọc bờ mương']], colW: 250 }), caption: 'Ghi rõ nguồn và thời gian thu thập.' },
    { title: 'Viết báo cáo', html: `<p>Cấu trúc gợi ý:</p>`,
      svg: S.flowchart({ title: 'Cấu trúc báo cáo', steps: [{ t: 'start', s: 'Giới thiệu địa điểm' }, { t: 'proc', s: 'Thực trạng' }, { t: 'proc', s: 'Nguyên nhân, hậu quả' }, { t: 'end', s: 'Đề xuất giải pháp' }] }), caption: 'Minh hoạ bằng ảnh, số liệu, biểu đồ.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Dữ liệu thật + phân tích hai mặt + giải pháp khả thi = báo cáo tốt.</div>` }
  ],
  summary: 'Tìm hiểu mối quan hệ con người – thiên nhiên ở địa phương: chọn chủ đề, thu thập thông tin (quan sát, phỏng vấn, tài liệu, đo đếm), phân tích tác động tích cực và tiêu cực, viết báo cáo gồm giới thiệu, thực trạng, nguyên nhân – hậu quả và đề xuất giải pháp.',
  examples: [
    { title: 'Số liệu', problem: 'Nhóm đếm được 12, 18, 15 túi rác ở 3 đoạn mương. Trung bình mỗi đoạn?', solution: '(12 + 18 + 15) : 3 = 15 túi.' },
    { title: 'Phỏng vấn', problem: 'Đặt một câu hỏi phỏng vấn ông bà.', solution: '“Ngày xưa dòng sông này thế nào so với bây giờ ạ?”' },
    { title: 'Tỉ lệ', problem: 'Phỏng vấn 20 người, 15 người cho rằng môi trường ô nhiễm hơn. Bao nhiêu phần trăm?', solution: '75%.' }
  ],
  exercises: [
    { question: 'Đếm 9, 14, 10 túi rác ở 3 điểm. Trung bình?', hints: ['Cộng: 33.', 'Chia 3.'], solution: '11 túi.' },
    { question: 'Hỏi 40 bạn, 28 bạn có phân loại rác. Bao nhiêu %?', hints: ['28 : 40.', '× 100.'], solution: '70%.' },
    { question: 'Đề xuất hai giải pháp cho con mương ô nhiễm.', hints: ['Thu gom.', 'Tuyên truyền.'], solution: 'Tổ chức dọn rác định kì; đặt thùng rác, tuyên truyền người dân không xả rác.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phỏng vấn người dân là một cách thu thập thông tin.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Đếm 12, 18, 15 túi rác. Trung bình?', answer: '15', unit: 'túi', calc: '(12+18+15)/3', explain: '15.' },
    { type: 'mcq', q: 'Phần cuối của báo cáo nên là:', options: ['Đề xuất giải pháp', 'Giới thiệu', 'Mục lục', 'Lời chào'], answer: 0, explain: 'Giải pháp.' },
    { type: 'short', q: '20 người, 15 người cho là ô nhiễm hơn. Bao nhiêu %?', answer: '75', unit: '%', calc: '15/20*100', explain: '75.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Báo cáo không cần ghi nguồn thông tin.', answer: false, explain: 'Cần ghi nguồn.' },
    { type: 'short', q: 'Hỏi 40 bạn, 28 bạn phân loại rác. Bao nhiêu %?', answer: '70', unit: '%', calc: '28/40*100', explain: '70.' },
    { type: 'mcq', q: 'Tác động tích cực ở địa phương:', options: ['Trồng cây xanh ven đường', 'Đổ rác xuống mương', 'Đốt rơm rạ gây khói', 'Lấn chiếm lòng sông'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Đếm 9, 14, 10 túi rác. Trung bình?', answer: '11', unit: 'túi', calc: '(9+14+10)/3', explain: '11.' }
  ]
});
})();
