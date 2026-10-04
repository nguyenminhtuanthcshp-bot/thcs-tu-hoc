/* Ngữ văn 6 – Bài 1. Thực hành tiếng Việt: Từ đơn và từ phức. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('ngu-van-6/b1-tv', {
  objectives: [
    'Nhận biết được tiếng và từ; phân biệt từ đơn và từ phức.',
    'Phân biệt được từ ghép và từ láy.',
    'Hiểu được tác dụng của từ láy trong việc miêu tả, biểu cảm.',
    'Sử dụng được từ ghép, từ láy phù hợp khi nói và viết.'
  ],
  intro: 'Các từ “nhà”, “nhà cửa”, “nho nhỏ” có gì khác nhau? Bài học này giúp em nhìn thấy “cấu tạo bên trong” của từ tiếng Việt.',
  steps: [
    { title: 'Tiếng và từ', html: `<p><b>Tiếng</b> là đơn vị cấu tạo nên từ. Khi viết, mỗi tiếng là một chữ tách rời bằng dấu cách.</p>
      <p><b>Từ</b> là đơn vị nhỏ nhất có nghĩa dùng để đặt câu. Một từ có thể gồm một hoặc nhiều tiếng.</p>
      <p>Ví dụ: câu “Đàn kiến chăm chỉ tha mồi.” có 5 từ: đàn / kiến / chăm chỉ / tha / mồi (6 tiếng).</p>` },
    { title: 'Từ đơn và từ phức', html: `<ul><li><b>Từ đơn</b>: từ chỉ có <b>một tiếng</b>. Ví dụ: nhà, cây, học, xanh, gió.</li>
      <li><b>Từ phức</b>: từ có <b>hai tiếng trở lên</b>. Ví dụ: nhà cửa, học sinh, xanh biếc, lấp lánh, hợp tác xã.</li></ul>` },
    { title: 'Từ ghép', html: `<p><b>Từ ghép</b> là từ phức được tạo ra bằng cách ghép các tiếng <b>có quan hệ với nhau về nghĩa</b>.</p>
      <p>Ví dụ: bàn ghế, sách vở, xe đạp, hoa hồng, nhà cửa, tươi tốt.</p>
      <div class="box note">Thường mỗi tiếng trong từ ghép đều có nghĩa khi đứng riêng (bàn – ghế; xe – đạp).</div>` },
    { title: 'Từ láy', html: `<p><b>Từ láy</b> là từ phức có các tiếng <b>lặp lại âm</b> với nhau: lặp phần đầu (âm đầu), lặp phần vần, hoặc lặp cả tiếng.</p>
      <ul><li>Láy âm đầu: <i>lung linh, nhỏ nhắn, long lanh</i>.</li><li>Láy vần: <i>lom khom, bồi hồi, lao xao</i>.</li><li>Láy toàn bộ: <i>xinh xinh, xa xa, ào ào</i>.</li></ul>
      <p>Từ láy giúp miêu tả âm thanh, hình ảnh, cảm xúc sinh động, gợi cảm hơn.</p>` },
    { title: 'Mẹo phân biệt', html: `<div class="box tip">Có những từ có tiếng lặp âm nhưng <b>các tiếng đều có nghĩa</b> và liên quan nghĩa với nhau, ví dụ <i>tươi tốt</i> (tươi + tốt), <i>tốt đẹp</i>. Đó là <b>từ ghép</b>, không phải từ láy.</div>
      <p>Cách làm: tách từng tiếng, hỏi “tiếng này đứng riêng có nghĩa không, có liên quan về nghĩa với tiếng kia không?”. Nếu các tiếng chủ yếu gắn với nhau vì <b>âm thanh</b> (lấp lánh, bâng khuâng) thì là từ láy.</p>` }
  ],
  summary: 'Từ đơn có 1 tiếng; từ phức có từ 2 tiếng trở lên. Từ phức gồm từ ghép (các tiếng quan hệ về nghĩa) và từ láy (các tiếng lặp lại âm). Từ láy giúp miêu tả, biểu cảm sinh động.',
  examples: [
    { title: 'Phân loại từ', problem: 'Xếp các từ sau vào nhóm từ đơn, từ ghép, từ láy: mưa, lất phất, cây cối, gió, rì rào, học tập.', solution: 'Từ đơn: mưa, gió. Từ ghép: cây cối, học tập. Từ láy: lất phất, rì rào.' },
    { title: 'Đếm từ và tiếng', problem: 'Câu “Bà em trồng rau muống.” có bao nhiêu tiếng, bao nhiêu từ? Chỉ ra từ phức.', solution: 'Câu có 5 tiếng: bà, em, trồng, rau, muống.<br>Tách từ: bà / em / trồng / rau muống → 4 từ. Từ phức là “rau muống” (từ ghép); các từ còn lại là từ đơn.' },
    { title: 'Tác dụng của từ láy', problem: 'So sánh hai câu: (a) “Mưa rơi trên mái tôn.” và (b) “Mưa rơi lộp độp trên mái tôn.” Câu nào hay hơn? Vì sao?', solution: 'Câu (b) hay hơn: từ láy “lộp độp” gợi âm thanh cụ thể của giọt mưa, giúp người đọc như nghe thấy tiếng mưa.' }
  ],
  exercises: [
    { question: 'Tìm 3 từ láy miêu tả tiếng cười.', hints: ['Nghĩ tới những tiếng cười to, nhỏ, trong trẻo…', 'Các từ này thường mô phỏng âm thanh, ví dụ bắt đầu bằng “kh…”, “h…”.'], solution: 'Ví dụ: khanh khách, ha hả, hi hí, khúc khích, rúc rích.' },
    { question: 'Từ “tươi tốt” là từ ghép hay từ láy? Giải thích.', hints: ['Tách hai tiếng: “tươi” và “tốt”. Mỗi tiếng đứng riêng có nghĩa không?', 'Hai tiếng có quan hệ với nhau về nghĩa hay chỉ giống âm?'], solution: 'Là từ ghép: “tươi” và “tốt” đều có nghĩa và cùng nói về trạng thái phát triển tốt của cây cối; sự giống âm đầu chỉ là trùng hợp.' },
    { question: 'Đặt một câu tả cảnh sân trường có dùng ít nhất một từ ghép và một từ láy. Gạch chân chúng.', hints: ['Từ ghép có thể là: sân trường, cây bàng, học sinh…', 'Từ láy có thể là: rộn ràng, xanh xanh, nhộn nhịp…'], solution: 'Ví dụ: “Giờ ra chơi, <u>sân trường</u> (từ ghép) <u>rộn ràng</u> (từ láy) tiếng cười nói.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Từ nào là từ đơn?', options: ['học sinh', 'gió', 'lung linh', 'bàn ghế'], answer: 1, explain: '“gió” chỉ có một tiếng.' },
    { type: 'mcq', q: 'Từ nào là từ láy?', options: ['sách vở', 'xe đạp', 'lấp lánh', 'hoa hồng'], answer: 2, explain: '“lấp lánh” có hai tiếng lặp âm đầu “l”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Bàn ghế” là từ ghép.', answer: true, explain: 'Hai tiếng “bàn”, “ghế” đều có nghĩa và quan hệ với nhau về nghĩa.' },
    { type: 'short', q: 'Từ “hợp tác xã” gồm bao nhiêu tiếng?', answer: '3', explain: 'hợp / tác / xã – ba tiếng.' },
    { type: 'mcq', q: '“Lom khom” là từ láy thuộc kiểu nào?', options: ['Láy âm đầu', 'Láy vần', 'Láy toàn bộ', 'Không phải từ láy'], answer: 1, explain: 'Hai tiếng “lom”, “khom” có phần vần “om” giống nhau.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi từ có các tiếng giống nhau về âm đầu đều là từ láy.', answer: false, explain: 'Ví dụ “tươi tốt” có âm đầu giống nhau nhưng là từ ghép vì các tiếng quan hệ về nghĩa.' },
    { type: 'mcq', q: 'Từ láy “rì rào” trong câu “Rặng tre rì rào trong gió” có tác dụng:', options: ['Gợi âm thanh nhẹ nhàng, liên tiếp của lá tre', 'Chỉ màu sắc của tre', 'Chỉ kích thước của tre', 'Không có tác dụng gì'], answer: 0, explain: '“rì rào” mô phỏng âm thanh lá tre xao động trong gió.' },
    { type: 'mcq', q: 'Nhóm nào gồm toàn từ phức?', options: ['nhà, cửa, sân', 'xinh xinh, cây cối, học tập', 'mưa, nắng, lung linh', 'đi, học, xe đạp'], answer: 1, explain: 'Cả ba từ “xinh xinh, cây cối, học tập” đều có hai tiếng.' }
  ]
});
