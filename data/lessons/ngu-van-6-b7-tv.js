/* Ngữ văn 6 – Bài 7. Tiếng Việt: Nghĩa của từ ngữ (yếu tố Hán Việt, thành ngữ); tác dụng của điệp ngữ. Ví dụ do nhóm biên soạn tự viết hoặc lấy từ văn học dân gian. */
THCS.registerLesson('ngu-van-6/b7-tv', {
  objectives: [
    'Giải thích được nghĩa của từ ngữ bằng nhiều cách: nêu khái niệm, dùng từ đồng nghĩa/trái nghĩa, dựa vào yếu tố Hán Việt.',
    'Hiểu nghĩa và dùng đúng một số thành ngữ gắn với truyện cổ tích.',
    'Phân tích được tác dụng của điệp ngữ trong truyện kể.'
  ],
  intro: 'Người xưa bảo “ở hiền gặp lành”, “ác giả ác báo”. Những thành ngữ ấy tóm gọn cả bài học của biết bao truyện cổ tích. Muốn hiểu văn, trước hết phải hiểu nghĩa của từ ngữ.',
  steps: [
    { title: 'Các cách giải thích nghĩa của từ', html: `<table class="tbl"><tr><th>Cách</th><th>Ví dụ</th></tr><tr><td>Nêu khái niệm mà từ biểu thị</td><td><i>Phú ông</i>: người đàn ông giàu có ở nông thôn thời xưa.</td></tr><tr><td>Dùng từ đồng nghĩa</td><td><i>Lật lọng</i>: tráo trở, nuốt lời.</td></tr><tr><td>Dùng từ trái nghĩa</td><td><i>Thật thà</i>: trái với gian dối.</td></tr><tr><td>Dựa vào nghĩa của yếu tố Hán Việt</td><td><i>Gia cảnh</i>: gia (nhà) + cảnh (tình cảnh) = hoàn cảnh gia đình.</td></tr></table>` },
    { title: 'Yếu tố Hán Việt “gia” và các nghĩa khác nhau', html: `<p>Yếu tố “gia” có nhiều nghĩa:</p><ul><li><b>gia</b> = nhà: gia đình, gia cảnh, gia sản, gia tài.</li><li><b>gia</b> = thêm: gia tăng, gia vị, gia hạn.</li></ul><p>Muốn hiểu đúng, hãy đặt từ vào ngữ cảnh và so sánh với những từ cùng yếu tố.</p>` },
    { title: 'Thành ngữ', html: `<p><b>Thành ngữ</b> là cụm từ cố định, có nghĩa hoàn chỉnh, thường có tính hình tượng. Nghĩa của thành ngữ thường là nghĩa <b>hàm ẩn</b>, không chỉ là cộng nghĩa từng tiếng.</p>
      <table class="tbl"><tr><th>Thành ngữ</th><th>Nghĩa</th></tr><tr><td>Ở hiền gặp lành</td><td>Sống tốt sẽ được điều tốt</td></tr><tr><td>Ác giả ác báo</td><td>Làm điều ác sẽ bị trả giá</td></tr><tr><td>Mẹ goá con côi</td><td>Hoàn cảnh cô đơn, thiếu thốn</td></tr><tr><td>Mồm miệng đỡ chân tay</td><td>Chỉ giỏi nói, lười làm</td></tr><tr><td>Tham thì thâm</td><td>Tham lam sẽ bị thiệt</td></tr></table>` },
    { title: 'Điệp ngữ trong truyện cổ tích', html: `<p>Truyện cổ tích hay dùng sự <b>lặp lại</b>: lặp câu thần chú (“Khắc nhập, khắc nhập!”), lặp sự việc ba lần (thử thách ba lần), lặp câu hát. Tác dụng:</p><ul><li>Nhấn mạnh chi tiết quan trọng, tạo ấn tượng.</li><li>Tạo nhịp điệu, dễ nhớ, dễ kể (truyện truyền miệng).</li><li>Tăng kịch tính hoặc tiếng cười (lão nhà giàu dính, rồi thông gia dính theo).</li></ul>` },
    { title: 'Mẹo ghi nhớ', html: `<div class="box tip">Gặp từ lạ: (1) tách yếu tố, (2) tìm từ quen cùng yếu tố, (3) đặt vào câu để kiểm tra. Gặp thành ngữ: tìm <b>nghĩa bóng</b> và tình huống dùng.</div>` }
  ],
  summary: 'Giải thích nghĩa của từ: nêu khái niệm, dùng từ đồng nghĩa/trái nghĩa, dựa vào yếu tố Hán Việt (gia – nhà / gia – thêm). Thành ngữ là cụm từ cố định, nghĩa hàm ẩn, hình tượng. Điệp ngữ trong truyện cổ tích nhấn mạnh, tạo nhịp, dễ nhớ.',
  examples: [
    { title: 'Giải thích bằng yếu tố Hán Việt', problem: 'Giải thích nghĩa từ “gia sản”.', solution: 'gia (nhà) + sản (tài sản) = tài sản của gia đình.' },
    { title: 'Dùng thành ngữ', problem: 'Chọn thành ngữ phù hợp để nhận xét kết cục của lão nhà giàu trong “Cây tre trăm đốt”.', solution: '“Tham thì thâm” hoặc “Ác giả ác báo”: lão tham lam, lật lọng nên bị bẽ mặt.' },
    { title: 'Tác dụng lặp lại', problem: 'Vì sao câu “Khắc nhập, khắc nhập!” được lặp lại nhiều lần trong truyện?', solution: 'Nhấn mạnh phép lạ, tạo nhịp điệu và tiếng cười, giúp người nghe dễ nhớ, dễ kể lại.' }
  ],
  exercises: [
    { question: 'Xếp các từ sau vào hai nhóm theo nghĩa của “gia”: gia đình, gia vị, gia tài, gia tăng, gia chủ, gia hạn.', hints: ['Gia = nhà.', 'Gia = thêm.'], solution: 'gia = nhà: gia đình, gia tài, gia chủ. gia = thêm: gia vị, gia tăng, gia hạn.' },
    { question: 'Giải thích nghĩa thành ngữ “Ở hiền gặp lành” và đặt một câu.', hints: ['Nghĩa bóng về cách sống.', 'Đặt câu nhận xét một nhân vật cổ tích.'], solution: 'Nghĩa: người sống tốt sẽ được đền đáp điều tốt. Câu: “Cô Tấm hiền lành cuối cùng được hạnh phúc, đúng là ở hiền gặp lành.”' },
    { question: 'Giải thích nghĩa của từ “thật thà” bằng cách dùng từ đồng nghĩa hoặc trái nghĩa.', hints: ['Đồng nghĩa: trung thực.', 'Trái nghĩa: gian dối.'], solution: '“Thật thà”: trung thực, ngay thẳng, không gian dối.' }
  ],
  quiz: [
    { type: 'mcq', q: '“Gia” trong “gia vị” có nghĩa là:', options: ['Thêm', 'Nhà', 'Người', 'Đẹp'], answer: 0, explain: 'Gia vị: thứ thêm vào món ăn.' },
    { type: 'mcq', q: '“Gia” trong “gia đình” có nghĩa là:', options: ['Nhà', 'Thêm', 'Già', 'Giá'], answer: 0, explain: 'Gia = nhà.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thành ngữ là cụm từ cố định, thường có nghĩa hàm ẩn.', answer: true, explain: 'Định nghĩa thành ngữ.' },
    { type: 'mcq', q: 'Thành ngữ nào phù hợp với kết thúc có hậu của cổ tích?', options: ['Ở hiền gặp lành', 'Nước chảy bèo trôi', 'Đầu voi đuôi chuột', 'Ếch ngồi đáy giếng'], answer: 0, explain: 'Người tốt được đền đáp.' },
    { type: 'mcq', q: 'Giải thích “lật lọng” là “tráo trở, nuốt lời” là cách:', options: ['Dùng từ đồng nghĩa', 'Dùng từ trái nghĩa', 'Dựa vào yếu tố Hán Việt', 'Vẽ tranh'], answer: 0, explain: 'Đồng nghĩa.' },
    { type: 'mcq', q: '“Tham thì thâm” nghĩa là:', options: ['Tham lam sẽ bị thiệt', 'Tham gia sẽ vui', 'Chăm chỉ sẽ giàu', 'Nói nhiều sẽ mệt'], answer: 0, explain: 'Bài học về lòng tham.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sự lặp lại trong truyện cổ tích giúp người nghe dễ nhớ, dễ kể.', answer: true, explain: 'Truyện truyền miệng.' },
    { type: 'mcq', q: 'Từ nào có “gia” nghĩa là “thêm”?', options: ['gia hạn', 'gia chủ', 'gia cảnh', 'gia tài'], answer: 0, explain: 'Gia hạn: thêm thời hạn.' }
  ]
});
