/* Tin học 8 – Bài 4. Đạo đức và văn hoá trong sử dụng công nghệ kĩ thuật số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-4', {
  objectives: [
    'Nhận biết được một số biểu hiện vi phạm đạo đức, pháp luật, thiếu văn hoá khi sử dụng công nghệ kĩ thuật số.',
    'Hiểu được quyền tác giả, bản quyền đối với sản phẩm số; biết cách sử dụng hợp pháp.',
    'Có ý thức sử dụng công nghệ kĩ thuật số đúng đạo đức, văn hoá và pháp luật.'
  ],
  intro: 'Tải một bài hát lậu, dùng ảnh của người khác không xin phép, quay lén bạn rồi đăng lên mạng – những việc tưởng “nhỏ” này đều có thể vi phạm đạo đức, thậm chí vi phạm pháp luật.',
  steps: [
    { title: 'Biểu hiện vi phạm', html: `<ul><li><b>Vi phạm bản quyền</b>: sao chép, phát tán phần mềm, phim, nhạc, sách khi không được phép.</li><li><b>Xâm phạm đời tư</b>: quay, chụp, đăng ảnh người khác khi chưa đồng ý; đọc trộm tin nhắn.</li><li><b>Gian lận</b>: dùng thiết bị số để quay cóp, nhờ người khác làm bài.</li><li><b>Thiếu văn hoá</b>: bình luận xúc phạm, lan truyền tin giả.</li></ul>` },
    { title: 'Quyền tác giả và bản quyền', html: `<p>Tác phẩm (bài viết, ảnh, nhạc, phần mềm…) được pháp luật bảo hộ quyền tác giả ngay khi được tạo ra. Ở Việt Nam, Luật Sở hữu trí tuệ quy định về quyền tác giả. Muốn sử dụng, cần được tác giả cho phép, trả phí hoặc dùng theo giấy phép cho phép.</p>`,
      svg: S.flowchart({ title: 'Có được dùng ảnh này không?', steps: [{ t: 'start', s: 'Muốn dùng một ảnh' }, { t: 'if', s: 'Được phép dùng?', yes: 'Dùng và ghi nguồn', no: 'Không dùng / xin phép' }, { t: 'end', s: 'Kết thúc' }] }), caption: 'Chỉ dùng tác phẩm khi được phép, và luôn ghi nguồn.' },
    { title: 'Sử dụng hợp pháp', html: `<p>Có thể dùng: sản phẩm tự tạo; tác phẩm có giấy phép mở (ví dụ một số giấy phép Creative Commons, cần làm đúng điều kiện như ghi tên tác giả); phần mềm miễn phí, mã nguồn mở; trích dẫn ngắn phục vụ học tập kèm ghi nguồn.</p>`,
      svg: S.table({ title: 'Nên và không nên', head: ['Nên', 'Không nên'], rows: [['Dùng phần mềm hợp pháp', 'Bẻ khoá phần mềm'], ['Ghi nguồn khi trích dẫn', 'Nhận bài người khác là của mình'], ['Xin phép trước khi đăng ảnh bạn', 'Quay lén, đăng ảnh chế giễu']], colW: 300 }), caption: 'Một số hành vi nên và không nên.' },
    { title: 'Văn hoá số', html: `<p>Tôn trọng người khác, giữ gìn hình ảnh bản thân trên mạng, dùng thiết bị đúng lúc đúng chỗ (không dùng điện thoại khi đang học, đang nói chuyện với người khác).</p>
      <div class="box key">Tôn trọng tác giả, tôn trọng người khác, tôn trọng pháp luật.</div>` }
  ],
  summary: 'Vi phạm khi dùng công nghệ số: vi phạm bản quyền, xâm phạm đời tư, gian lận, thiếu văn hoá. Tác phẩm được bảo hộ quyền tác giả (Luật Sở hữu trí tuệ); chỉ dùng khi được phép, có giấy phép hoặc trích dẫn hợp lí kèm ghi nguồn. Ứng xử văn hoá, đúng lúc đúng chỗ.',
  examples: [
    { title: 'Nhận diện vi phạm', problem: 'Bạn H tải phim lậu rồi chia sẻ cho cả lớp. Hành vi này vi phạm gì?', solution: 'Vi phạm bản quyền (sao chép, phát tán tác phẩm khi không được phép).' },
    { title: 'Dùng ảnh trong bài trình chiếu', problem: 'Em muốn dùng ảnh trên mạng cho bài trình chiếu. Làm thế nào cho đúng?', solution: 'Chọn ảnh có giấy phép cho phép sử dụng hoặc tự chụp; làm đúng điều kiện giấy phép và ghi nguồn.' },
    { title: 'Đời tư', problem: 'Bạn chụp ảnh em lúc đang ngủ gật và định đăng lên nhóm lớp. Em nên nói gì?', solution: 'Đề nghị bạn không đăng vì chưa được đồng ý; nếu đã đăng, đề nghị gỡ và báo thầy cô nếu cần.' }
  ],
  exercises: [
    { question: 'Kể ba hành vi vi phạm đạo đức hoặc pháp luật khi sử dụng công nghệ số.', hints: ['Về bản quyền.', 'Về đời tư và gian lận.'], solution: 'Dùng phần mềm bẻ khoá; đăng ảnh người khác khi chưa đồng ý; dùng điện thoại quay cóp.' },
    { question: 'Vì sao phần mềm bẻ khoá vừa vi phạm pháp luật vừa không an toàn?', hints: ['Ai bị thiệt hại?', 'Phần mềm bẻ khoá có thể chứa gì?'], solution: 'Xâm phạm quyền của tác giả, nhà sản xuất; thường kèm phần mềm độc hại gây mất dữ liệu.' },
    { question: 'Một phần mềm có giá 450 000 đồng. Lớp 36 bạn góp đều để mua một bản dùng chung hợp pháp cho lớp. Mỗi bạn góp bao nhiêu đồng?', hints: ['Chia giá cho số bạn.', '450 000 : 36.'], solution: '12 500 đồng.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sao chép, phát tán phim khi không được phép là vi phạm bản quyền.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hành vi nào tôn trọng quyền tác giả?', options: ['Dùng ảnh và xoá tên tác giả', 'Trích dẫn ngắn và ghi nguồn', 'Bẻ khoá phần mềm', 'Đăng lại sách điện tử miễn phí khi chưa được phép'], answer: 1, explain: 'Ghi nguồn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ảnh tìm thấy trên Internet thì ai cũng được tự do sử dụng.', answer: false, explain: 'Ảnh vẫn có quyền tác giả.' },
    { type: 'mcq', q: 'Ở Việt Nam, quyền tác giả được quy định trong:', options: ['Luật Giao thông đường bộ', 'Luật Sở hữu trí tuệ', 'Luật Đất đai', 'Luật Thuế'], answer: 1, explain: 'Luật Sở hữu trí tuệ.' },
    { type: 'mcq', q: 'Hành vi nào là xâm phạm đời tư?', options: ['Đăng ảnh bạn khi chưa được đồng ý', 'Tự chụp ảnh phong cảnh', 'Gửi bài cho thầy cô', 'Đọc báo trực tuyến'], answer: 0, explain: 'Cần sự đồng ý.' },
    { type: 'short', q: 'Phần mềm giá 300 000 đồng, 25 bạn góp đều. Mỗi bạn góp bao nhiêu đồng?', answer: '12000', answerText: '12 000', unit: 'đồng', calc: '300000/25', explain: '300 000 : 25.' },
    { type: 'short', q: 'Một bài trình chiếu dùng 8 ảnh, trong đó 5 ảnh tự chụp. Cần ghi nguồn cho bao nhiêu ảnh còn lại?', answer: '3', unit: 'ảnh', calc: '8-5', explain: '3 ảnh.' },
    { type: 'mcq', q: 'Dùng điện thoại đúng văn hoá là:', options: ['nhắn tin khi đang kiểm tra', 'tắt chuông khi vào lớp', 'gọi to nơi công cộng', 'quay phim người lạ'], answer: 1, explain: 'Đúng lúc đúng chỗ.' }
  ]
});
})();
