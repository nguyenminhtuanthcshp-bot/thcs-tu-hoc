/* LS&ĐL 6 – Lịch sử, Bài 2. Dựa vào đâu để biết và phục dựng lại lịch sử? Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/ls-bai-2', {
  objectives: [
    'Phân biệt được các nguồn sử liệu: tư liệu hiện vật, tư liệu chữ viết, tư liệu truyền miệng, tư liệu gốc.',
    'Nêu được ví dụ cụ thể cho từng loại tư liệu.',
    'Hiểu được giá trị và hạn chế của mỗi loại tư liệu.',
    'Biết cách khai thác tư liệu để tìm hiểu quá khứ.'
  ],
  intro: 'Khi đào ao, người dân ở một làng ven sông Mã phát hiện chiếc trống bằng đồng có hoa văn hình chim bay. Các nhà khảo cổ đến nghiên cứu và cho biết đó là trống đồng thời Văn Lang. Chỉ một hiện vật đã “kể” cho ta nghe về cuộc sống cách đây hàng nghìn năm. Đó là sức mạnh của <b>tư liệu lịch sử</b>.',
  steps: [
    { title: 'Tư liệu lịch sử là gì?', html: `<p><b>Tư liệu lịch sử</b> là những dấu vết của quá khứ còn lưu lại, giúp con người biết và phục dựng lại lịch sử.</p>` },
    { title: 'Các loại tư liệu', html: `<p>Bốn loại tư liệu chính:</p>`,
      svg: S.table({ title: 'Các loại tư liệu lịch sử', head: ['Loại', 'Ví dụ'], rows: [['Hiện vật', 'Trống đồng, rìu đá, đền tháp'], ['Chữ viết', 'Bia đá, sách sử, văn bản cổ'], ['Truyền miệng', 'Truyền thuyết, ca dao, sử thi'], ['Tư liệu gốc', 'Bản gốc ra đời cùng sự kiện']], colW: 250 }), caption: 'Tư liệu gốc có giá trị đáng tin cậy nhất.' },
    { title: 'Giá trị và hạn chế', html: `<ul><li><b>Hiện vật</b>: cho biết đời sống vật chất, kĩ thuật; nhưng “không biết nói”, cần nghiên cứu.</li><li><b>Chữ viết</b>: ghi lại sự kiện cụ thể; có thể mang quan điểm người viết.</li><li><b>Truyền miệng</b>: phản ánh tâm tư, ước mơ của nhân dân; thường được thêm thắt, cần đối chiếu.</li><li><b>Tư liệu gốc</b>: ra đời cùng thời sự kiện, đáng tin cậy nhất.</li></ul>`,
      svg: S.table({ title: 'Ví dụ phân loại tư liệu', head: ['Tư liệu', 'Loại'], rows: [['Trống đồng Ngọc Lũ', 'Hiện vật'], ['Bia Tiến sĩ ở Văn Miếu', 'Hiện vật, chữ viết'], ['Sách “Đại Việt sử kí toàn thư”', 'Chữ viết'], ['Truyền thuyết Thánh Gióng', 'Truyền miệng']], colW: 250 }), caption: 'Truyền thuyết có giá trị nhưng cần đối chiếu với nguồn khác.' },
    { title: 'Khai thác tư liệu', html: `<ul><li>Xác định loại tư liệu, thời gian, nơi phát hiện.</li><li>Đặt câu hỏi: Ai làm ra? Để làm gì? Cho biết điều gì về quá khứ?</li><li>Đối chiếu nhiều nguồn để có kết luận chính xác.</li></ul>
      <div class="box key">Phải giữ gìn, bảo vệ các hiện vật, di tích – chúng là “nhân chứng” của lịch sử.</div>` }
  ],
  summary: 'Tư liệu lịch sử là dấu vết quá khứ giúp phục dựng lịch sử. Có tư liệu hiện vật (đồ vật, công trình), tư liệu chữ viết (bia, sách), tư liệu truyền miệng (truyền thuyết, ca dao) và tư liệu gốc (ra đời cùng sự kiện, đáng tin cậy nhất). Cần khai thác, đối chiếu nhiều nguồn và bảo vệ tư liệu.',
  examples: [
    { title: 'Phân loại', problem: 'Bia đá ở Văn Miếu – Quốc Tử Giám là loại tư liệu gì?', solution: 'Vừa là hiện vật vừa là tư liệu chữ viết (khắc tên các tiến sĩ).' },
    { title: 'Truyền miệng', problem: 'Truyền thuyết Thánh Gióng cho biết điều gì?', solution: 'Phản ánh tinh thần chống giặc ngoại xâm và ước mơ có người anh hùng của nhân dân thời Văn Lang.' },
    { title: 'Tính số năm', problem: 'Bia Tiến sĩ đầu tiên ở Văn Miếu được dựng năm 1484. Đến năm 2026 là bao nhiêu năm?', solution: '2026 − 1484 = 542 năm.' }
  ],
  exercises: [
    { question: 'Kể tên một hiện vật lịch sử ở địa phương em và cho biết nó thuộc loại tư liệu nào.', hints: ['Đình, chùa, bia, tượng.', 'Có chữ khắc không?'], solution: 'Ví dụ: tấm bia ở đình làng – tư liệu hiện vật và chữ viết.' },
    { question: 'Một chiếc rìu đá có niên đại 10 000 năm. Hiện vật này đã tồn tại bao nhiêu thế kỉ?', hints: ['1 thế kỉ = 100 năm.', '10 000 : 100.'], solution: '100 thế kỉ.' },
    { question: 'Vì sao cần đối chiếu nhiều nguồn tư liệu?', hints: ['Mỗi nguồn có hạn chế.', 'Độ chính xác.'], solution: 'Vì mỗi nguồn có thể thiếu, sai lệch hoặc mang quan điểm riêng; đối chiếu giúp kết luận chính xác hơn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tư liệu gốc là tư liệu ra đời cùng thời với sự kiện, đáng tin cậy nhất.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Trống đồng là tư liệu:', options: ['hiện vật', 'truyền miệng', 'chữ viết', 'không phải tư liệu'], answer: 0, explain: 'Hiện vật.' },
    { type: 'mcq', q: 'Truyền thuyết Sơn Tinh – Thủy Tinh là tư liệu:', options: ['truyền miệng', 'hiện vật', 'chữ viết', 'gốc'], answer: 0, explain: 'Truyền miệng.' },
    { type: 'short', q: 'Rìu đá có niên đại 10 000 năm, tức bao nhiêu thế kỉ?', answer: '100', unit: 'thế kỉ', calc: '10000/100', explain: '100.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tư liệu truyền miệng luôn chính xác tuyệt đối.', answer: false, explain: 'Cần đối chiếu.' },
    { type: 'short', q: 'Bia dựng năm 1484. Đến năm 2026 là bao nhiêu năm?', answer: '542', unit: 'năm', calc: '2026-1484', explain: '542.' },
    { type: 'mcq', q: 'Sách sử là tư liệu:', options: ['chữ viết', 'hiện vật', 'truyền miệng', 'âm thanh'], answer: 0, explain: 'Chữ viết.' },
    { type: 'mcq', q: 'Việc nên làm với di tích lịch sử:', options: ['Giữ gìn, bảo vệ', 'Khắc tên lên', 'Lấy gạch về nhà', 'Bỏ mặc'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
