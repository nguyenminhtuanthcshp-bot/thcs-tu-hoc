/* Tin học 9 – Bài 7. Trình bày thông tin trong trao đổi và hợp tác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-7', {
  objectives: [
    'Nêu được vai trò của việc trình bày thông tin trực quan trong trao đổi, hợp tác.',
    'Lựa chọn được hình thức trình bày phù hợp: bảng, biểu đồ, sơ đồ tư duy, sơ đồ khối, đồ hoạ thông tin (infographic).',
    'Biết các nguyên tắc trình bày rõ ràng, chính xác, có ghi nguồn.'
  ],
  intro: 'Khi làm việc nhóm, một sơ đồ rõ ràng giúp mọi người hiểu nhau nhanh hơn cả trang giấy dài. Chọn đúng cách <b>trình bày thông tin</b> là kĩ năng quan trọng khi trao đổi và hợp tác.',
  steps: [
    { title: 'Vì sao cần trình bày trực quan?', html: `<p>Hình thức trực quan giúp người nhận hiểu nhanh, nhớ lâu, thấy được mối quan hệ, so sánh, xu hướng; giúp nhóm thống nhất ý kiến và phân công công việc rõ ràng.</p>` },
    { title: 'Chọn hình thức phù hợp', html: `<p>Mỗi loại thông tin hợp với một hình thức:</p>`,
      svg: S.table({ title: 'Chọn hình thức trình bày', head: ['Mục đích', 'Hình thức phù hợp'], rows: [['So sánh số liệu', 'Biểu đồ cột'], ['Xu hướng theo thời gian', 'Biểu đồ đoạn thẳng'], ['Tỉ lệ các phần', 'Biểu đồ hình tròn'], ['Ý chính – ý phụ', 'Sơ đồ tư duy'], ['Các bước, quy trình', 'Sơ đồ khối'], ['Tổng hợp ngắn gọn, hấp dẫn', 'Đồ hoạ thông tin']], colW: 240 }), caption: 'Hình thức phải phục vụ nội dung.' },
    { title: 'Ví dụ: phân công dự án nhóm', html: `<p>Sơ đồ tư duy giúp cả nhóm thấy các phần việc và người phụ trách.</p>`,
      svg: S.mindmap({ center: 'Dự án “Trường xanh”', branches: [{ title: 'Khảo sát (An)', items: ['Phiếu hỏi', 'Tổng hợp số liệu'] }, { title: 'Đề xuất (Bình)', items: ['Trồng cây', 'Phân loại rác'] }, { title: 'Trình bày (Chi)', items: ['Đồ hoạ thông tin', 'Trang chiếu'] }, { title: 'Truyền thông (Dũng)', items: ['Bản tin', 'Áp phích'] }], w: 640, size: 13 }), caption: 'Mỗi nhánh một phần việc và người phụ trách.' },
    { title: 'Nguyên tắc trình bày', html: `<ul><li>Chính xác: số liệu đúng, đơn vị rõ.</li><li>Ngắn gọn: ít chữ, từ khoá, biểu tượng.</li><li>Rõ ràng: bố cục, màu sắc nhất quán, chữ đủ lớn.</li><li>Trung thực, ghi nguồn số liệu, hình ảnh.</li></ul>
      <div class="box key">Chọn hình thức theo mục đích; chính xác – ngắn gọn – rõ ràng – có nguồn.</div>` }
  ],
  summary: 'Trình bày trực quan giúp trao đổi, hợp tác hiệu quả. Chọn hình thức theo mục đích: biểu đồ cột (so sánh), đoạn thẳng (xu hướng), hình tròn (tỉ lệ), sơ đồ tư duy (ý chính – ý phụ), sơ đồ khối (quy trình), đồ hoạ thông tin (tổng hợp hấp dẫn). Trình bày chính xác, ngắn gọn, rõ ràng, có nguồn.',
  examples: [
    { title: 'Chọn hình thức', problem: 'Cần trình bày các bước đăng kí tham gia câu lạc bộ. Hình thức nào phù hợp?', solution: 'Sơ đồ khối (quy trình).' },
    { title: 'Chọn biểu đồ', problem: 'Kết quả khảo sát: 60% bạn đi xe đạp, 25% đi bộ, 15% được đưa đón. Chọn biểu đồ nào?', solution: 'Biểu đồ hình tròn.' },
    { title: 'Kiểm tra tỉ lệ', problem: 'Một bản đồ hoạ thông tin ghi ba phần 50%, 35%, 20%. Có gì sai?', solution: 'Tổng 105% > 100%: số liệu sai, cần kiểm tra lại.' }
  ],
  exercises: [
    { question: 'Nêu hình thức trình bày phù hợp cho: (a) điểm trung bình các môn của em; (b) số giờ đọc sách từng tháng trong năm.', hints: ['(a) so sánh giữa các môn.', '(b) thay đổi theo thời gian.'], solution: '(a) biểu đồ cột; (b) biểu đồ đoạn thẳng.' },
    { question: 'Nêu bốn nguyên tắc trình bày thông tin.', hints: ['Về độ đúng và độ dài.', 'Về bố cục và nguồn.'], solution: 'Chính xác; ngắn gọn; rõ ràng; trung thực, ghi nguồn.' },
    { question: 'Khảo sát 80 bạn: 48 bạn thích thể thao. Trên biểu đồ hình tròn, phần “thích thể thao” chiếm bao nhiêu phần trăm?', hints: ['48 : 80.', 'Nhân 100%.'], solution: '60%.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sơ đồ khối phù hợp để trình bày các bước của một quy trình.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hình thức phù hợp thể hiện ý chính – ý phụ:', options: ['Sơ đồ tư duy', 'Biểu đồ đoạn thẳng', 'Bảng số', 'Biểu đồ cột'], answer: 0, explain: 'Sơ đồ tư duy.' },
    { type: 'mcq', q: 'So sánh số học sinh các lớp nên dùng:', options: ['Biểu đồ cột', 'Biểu đồ hình tròn', 'Sơ đồ khối', 'Văn bản dài'], answer: 0, explain: 'Biểu đồ cột.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đồ hoạ thông tin càng nhiều chữ càng tốt.', answer: false, explain: 'Cần ngắn gọn.' },
    { type: 'short', q: 'Khảo sát 50 bạn, 20 bạn chọn bóng đá. Tỉ lệ phần trăm?', answer: '40', unit: '%', calc: '20/50*100', explain: '40%.' },
    { type: 'short', q: 'Biểu đồ hình tròn có các phần 45%, 30%, 15% và phần còn lại. Phần còn lại?', answer: '10', unit: '%', calc: '100-45-30-15', explain: '10%.' },
    { type: 'mcq', q: 'Trình bày số liệu cần:', options: ['ghi đơn vị và nguồn', 'bỏ đơn vị cho gọn', 'làm tròn tuỳ ý', 'giấu nguồn'], answer: 0, explain: 'Chính xác, có nguồn.' },
    { type: 'mcq', q: 'Đồ hoạ thông tin (infographic) là:', options: ['hình ảnh tổng hợp thông tin ngắn gọn, trực quan', 'bảng tính', 'phần mềm diệt virus', 'thư điện tử'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
