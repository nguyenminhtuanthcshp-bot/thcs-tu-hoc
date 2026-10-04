/* Ngữ văn 6 – Bài 2. Tiếng Việt: Biện pháp tu từ ẩn dụ và điệp ngữ. Ví dụ là ca dao, tục ngữ (văn học dân gian) và câu do nhóm biên soạn tự viết. */
THCS.registerLesson('ngu-van-6/b2-tv', {
  objectives: [
    'Nhận biết được biện pháp tu từ ẩn dụ và phân biệt ẩn dụ với so sánh.',
    'Nhận biết được biện pháp tu từ điệp ngữ.',
    'Phân tích được tác dụng của ẩn dụ, điệp ngữ trong câu văn, câu thơ.',
    'Vận dụng được ẩn dụ, điệp ngữ khi viết câu, đoạn văn.'
  ],
  intro: 'Ông bà ta dặn “Uống nước nhớ nguồn” – nhưng đâu chỉ nói chuyện uống nước! Cách nói kín đáo mà sâu sắc ấy là <b>ẩn dụ</b>. Còn khi muốn nhấn mạnh, người ta hay nhắc đi nhắc lại một từ: đó là <b>điệp ngữ</b>.',
  steps: [
    { title: 'Ẩn dụ là gì?', html: `<p><b>Ẩn dụ</b> là gọi tên sự vật, hiện tượng này bằng tên sự vật, hiện tượng khác có <b>nét tương đồng</b> với nó, nhằm tăng sức gợi hình, gợi cảm.</p>
      <p>Ví dụ (tục ngữ): <i>“Uống nước nhớ nguồn.”</i> – “nguồn” chỉ người đã tạo ra thành quả cho ta hưởng (tương đồng: nguồn sinh ra dòng nước).</p>` },
    { title: 'Phân biệt ẩn dụ và so sánh', html: `<table class="tbl"><tr><th></th><th>So sánh</th><th>Ẩn dụ</th></tr><tr><td>Hình thức</td><td>Có cả vế được so sánh (A), vế dùng để so sánh (B), thường có từ “như, là, tựa…”</td><td>Chỉ còn vế B, vế A bị ẩn đi</td></tr><tr><td>Ví dụ</td><td>“Mẹ <b>như</b> chiếc ô che mưa cho con.”</td><td>“Chiếc ô ấy che con suốt cả cuộc đời.” (chiếc ô = tình mẹ)</td></tr></table>
      <p>Có thể coi ẩn dụ là <b>so sánh ngầm</b>.</p>` },
    { title: 'Tác dụng của ẩn dụ', html: `<p>Ca dao: <i>“Thuyền về có nhớ bến chăng / Bến thì một dạ khăng khăng đợi thuyền.”</i></p>
      <p>“Thuyền” gợi người đi xa (hay di chuyển), “bến” gợi người ở lại (cố định, chờ đợi). Cách nói ẩn dụ giúp lời bày tỏ tình cảm <b>kín đáo, tế nhị</b> mà vẫn sâu sắc, giàu hình ảnh.</p>` },
    { title: 'Điệp ngữ là gì?', html: `<p><b>Điệp ngữ</b> là biện pháp <b>lặp lại một từ ngữ</b> (hoặc cả câu) để nhấn mạnh ý, tạo nhịp điệu, gây ấn tượng.</p>
      <p>Ca dao: <i>“Anh đi anh nhớ quê nhà / Nhớ canh rau muống, nhớ cà dầm tương / Nhớ ai dãi nắng dầm sương / Nhớ ai tát nước bên đường hôm nao.”</i> – từ “nhớ” lặp lại nhiều lần, nhấn mạnh nỗi nhớ da diết, trải rộng từ món ăn quê đến con người quê.</p>` },
    { title: 'Cách phân tích một biện pháp tu từ', html: `<ol><li><b>Gọi tên</b> biện pháp tu từ.</li><li><b>Chỉ ra</b> từ ngữ thể hiện (với ẩn dụ: nêu vế B và sự vật A được ngầm chỉ; với điệp ngữ: nêu từ ngữ được lặp).</li><li><b>Nêu tác dụng</b>: về hình thức (gợi hình, tạo nhịp…) và về nội dung (nhấn mạnh điều gì, thể hiện tình cảm gì).</li></ol>` }
  ],
  summary: 'Ẩn dụ gọi tên sự vật này bằng tên sự vật khác có nét tương đồng (so sánh ngầm), giúp lời văn hàm súc, gợi hình, gợi cảm. Điệp ngữ lặp lại từ ngữ để nhấn mạnh, tạo nhịp điệu. Phân tích: gọi tên – chỉ ra – nêu tác dụng.',
  examples: [
    { title: 'Nhận diện ẩn dụ', problem: 'Chỉ ra ẩn dụ trong câu tục ngữ “Ăn quả nhớ kẻ trồng cây.”', solution: '“Quả” ẩn dụ cho thành quả được hưởng; “kẻ trồng cây” ẩn dụ cho người làm ra thành quả. Câu tục ngữ khuyên ta biết ơn người đi trước.' },
    { title: 'So sánh hay ẩn dụ?', problem: 'Câu nào dùng ẩn dụ? a) “Bà như quả ngọt chín rồi.” b) “Nhà em có một mặt trời bé con.” (nói về em bé mới sinh)', solution: 'a) là <b>so sánh</b> (có từ “như”, có cả hai vế). b) là <b>ẩn dụ</b>: “mặt trời bé con” chỉ em bé, tương đồng ở sự ấm áp, đem lại niềm vui cho cả nhà.' },
    { title: 'Tác dụng của điệp ngữ', problem: 'Nêu tác dụng của điệp ngữ trong câu: “Em yêu trường em, yêu thầy cô, yêu cả tiếng trống giục giã mỗi sớm mai.”', solution: 'Từ “yêu” lặp lại ba lần, nhấn mạnh tình cảm gắn bó tha thiết của em với mái trường; tạo nhịp điệu dồn dập, liệt kê những điều thân thương.' }
  ],
  exercises: [
    { question: 'Chỉ ra ẩn dụ và nêu ý nghĩa của câu tục ngữ “Gần mực thì đen, gần đèn thì sáng.”', hints: ['“Mực” và “đèn” có đặc điểm gì?', '“Đen”, “sáng” gợi phẩm chất tốt hay xấu?'], solution: '“Mực” ẩn dụ cho người xấu, môi trường xấu; “đèn” ẩn dụ cho người tốt, môi trường tốt. Câu tục ngữ nói môi trường sống, bạn bè ảnh hưởng lớn đến tính cách con người.' },
    { question: 'Tìm điệp ngữ trong đoạn: “Mưa trên mái nhà, mưa trên hàng cây, mưa trên con đường em đi học.” và nêu tác dụng.', hints: ['Từ nào được lặp lại?', 'Lặp như vậy gợi cơn mưa thế nào?'], solution: 'Điệp ngữ “mưa trên”. Tác dụng: nhấn mạnh cơn mưa bao trùm khắp nơi, tạo nhịp điệu đều đều như tiếng mưa rơi.' },
    { question: 'Viết một câu có dùng ẩn dụ để nói về thầy cô giáo.', hints: ['Nghĩ đến một sự vật có nét giống công việc của thầy cô (dẫn đường, chở che, soi sáng…).', 'Không dùng từ “như” (nếu dùng sẽ thành so sánh).'], solution: 'Ví dụ: “Người lái đò thầm lặng ấy đã đưa bao lớp học trò cập bến tương lai.” (“người lái đò” chỉ thầy cô).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Ẩn dụ là:', options: ['Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng', 'Lặp lại một từ nhiều lần', 'Gọi con vật bằng từ ngữ chỉ người', 'Phóng đại quy mô sự vật'], answer: 0, explain: 'Đó là định nghĩa ẩn dụ.' },
    { type: 'mcq', q: 'Câu nào có dùng so sánh (không phải ẩn dụ)?', options: ['“Uống nước nhớ nguồn.”', '“Mẹ như chiếc ô che mưa cho con.”', '“Thuyền về có nhớ bến chăng.”', '“Ăn quả nhớ kẻ trồng cây.”'], answer: 1, explain: 'Có từ “như” và đủ hai vế.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể coi ẩn dụ là một kiểu so sánh ngầm.', answer: true, explain: 'Vế được so sánh bị ẩn đi.' },
    { type: 'mcq', q: 'Trong ca dao “Thuyền về có nhớ bến chăng…”, “bến” ẩn dụ cho:', options: ['Người đi xa', 'Người ở lại chờ đợi', 'Con sông', 'Chiếc thuyền'], answer: 1, explain: 'Bến cố định, gợi người ở lại thủy chung.' },
    { type: 'mcq', q: 'Điệp ngữ là biện pháp:', options: ['Lặp lại từ ngữ để nhấn mạnh, tạo nhịp điệu', 'Dùng từ trái nghĩa', 'Nói giảm nói tránh', 'Gọi tên sự vật bằng tên khác'], answer: 0, explain: 'Định nghĩa điệp ngữ.' },
    { type: 'short', q: 'Trong ca dao “Nhớ canh rau muống, nhớ cà dầm tương”, từ nào được lặp lại?', answer: 'nhớ', explain: 'Từ “nhớ” được điệp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi phân tích biện pháp tu từ, chỉ cần gọi tên là đủ.', answer: false, explain: 'Cần gọi tên, chỉ ra từ ngữ và nêu tác dụng.' },
    { type: 'mcq', q: 'Trong câu “Nhà em có một mặt trời bé con” (nói về em bé), biện pháp tu từ là:', options: ['So sánh', 'Điệp ngữ', 'Ẩn dụ', 'Không có'], answer: 2, explain: '“Mặt trời bé con” ngầm chỉ em bé.' }
  ]
});
