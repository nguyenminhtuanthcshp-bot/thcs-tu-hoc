/* Ngữ văn 7 – Bài 4. Đọc hiểu: Thơ – tình cảm, cảm xúc của người viết. Văn bản đọc: bài thơ lục bát “Quê mình” do nhóm biên soạn tự sáng tác và hai câu ca dao (văn học dân gian, phạm vi công cộng). */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b4-doc', {
  objectives: [
    'Nhận biết được tình cảm, cảm xúc của người viết thể hiện qua ngôn ngữ thơ.',
    'Nhận biết và phân tích được tác dụng của hình ảnh, vần, nhịp, biện pháp tu từ (điệp ngữ, liệt kê, so sánh).',
    'Theo dõi được mạch cảm xúc của bài thơ.',
    'Bồi đắp tình yêu quê hương, đất nước.'
  ],
  intro: 'Mỗi người có một cách riêng để nói “tôi yêu đất nước”: người nhạc sĩ viết một bài hát, người họa sĩ vẽ một bức tranh, còn nhà thơ gửi tình cảm vào từng con chữ. Hãy đọc bài thơ lục bát và hai câu ca dao dưới đây để “nghe” giai điệu đất nước.',
  text: {
    title: 'Quê mình (thơ lục bát) và hai câu ca dao về đất nước',
    html: `<p><b>Quê mình</b></p>
<div class="poem">Quê mình có dải sông xanh<br>Có con đò nhỏ, có cành tre nghiêng<br>Có đầm sen ngát hương riêng<br>Có lời ru mẹ, tiếng chiêng Tây Nguyên.<br>Mai sau con bước muôn miền<br>Trong tim vẫn giữ bình yên quê nhà.<br>Yêu sao đất nước hiền hoà<br>Bao đời vun đắp đậm đà nghĩa nhân.</div>
<p><b>Ca dao</b></p>
<div class="poem">(1) Đường vô xứ Nghệ quanh quanh<br>Non xanh nước biếc như tranh hoạ đồ.<br><br>(2) Nhiễu điều phủ lấy giá gương<br>Người trong một nước phải thương nhau cùng.</div>`,
    source: 'Bài “Quê mình”: nhóm biên soạn tự sáng tác để minh hoạ. Hai câu ca dao: văn học dân gian Việt Nam (phạm vi công cộng).'
  },
  steps: [
    { title: 'Tình cảm, cảm xúc trong thơ', html: `<p>Thơ là thể loại <b>bộc lộ trực tiếp</b> tình cảm, cảm xúc. Người đọc nhận ra cảm xúc của người viết qua:</p>
      <ul><li><b>từ ngữ</b> trực tiếp nói tình cảm (<i>yêu sao, thương, nhớ</i>);</li><li><b>hình ảnh</b> được chọn lọc (<i>dải sông xanh, cành tre nghiêng, đầm sen</i>);</li><li><b>giọng điệu, nhịp, vần</b> (tha thiết, tự hào, bồi hồi…);</li><li><b>biện pháp tu từ</b> (điệp ngữ, liệt kê, so sánh…).</li></ul>
      <p>Trong “Quê mình”, người viết (xưng “con”) bộc lộ tình yêu, niềm tự hào và sự gắn bó với quê hương, đất nước.</p>` },
    { title: 'Thể thơ, vần và nhịp', html: `<p>“Quê mình” viết theo thể <b>lục bát</b>: cặp dòng 6 tiếng – 8 tiếng; tiếng thứ 6 dòng lục vần với tiếng thứ 6 dòng bát (<i>xanh – cành, riêng – chiêng, miền – yên, hoà – đà</i>); tiếng thứ 8 dòng bát vần với tiếng thứ 6 dòng lục tiếp theo (<i>nghiêng – riêng, Nguyên – miền, nhà – hoà</i>).</p>
      <p>Nhịp chẵn 2/2/2, 4/4 (<i>Có con đò nhỏ / có cành tre nghiêng</i>) êm đềm như lời ru, phù hợp cảm xúc tha thiết.</p>` },
    { title: 'Hình ảnh và biện pháp tu từ', html: `<table class="tbl"><tr><th>Biện pháp</th><th>Dẫn chứng</th><th>Tác dụng</th></tr>
      <tr><td>Điệp ngữ</td><td>“có… Có… có… Có… Có…” (lặp 5 lần trong bốn dòng đầu)</td><td>Nhấn mạnh sự giàu đẹp của quê hương; tạo nhịp điệu như đang đếm từng niềm tự hào</td></tr>
      <tr><td>Liệt kê</td><td>sông xanh, con đò, cành tre, đầm sen, lời ru, tiếng chiêng</td><td>Gợi bức tranh quê hương trải dài từ đồng bằng đến núi rừng (Tây Nguyên)</td></tr>
      <tr><td>So sánh (ca dao 1)</td><td>“Non xanh nước biếc như tranh hoạ đồ”</td><td>Ca ngợi cảnh đẹp xứ Nghệ đẹp như một bức tranh</td></tr>
      <tr><td>Ẩn dụ (ca dao 2)</td><td>“Nhiễu điều – giá gương”</td><td>Tấm nhiễu đỏ che phủ giá gương như người một nước phải yêu thương, đùm bọc nhau</td></tr></table>` },
    { title: 'Mạch cảm xúc của bài thơ', html: `<p>Cảm xúc vận động từ cảnh vật cụ thể đến tình cảm khái quát:</p>`,
      svg: S.flow({ items: [{ title: 'Nhìn', text: 'Sông, đò, tre, sen' }, { title: 'Nghe', text: 'Lời ru, tiếng chiêng' }, { title: 'Hướng tới', text: 'Mai sau đi muôn miền' }, { title: 'Khẳng định', text: 'Yêu đất nước hiền hoà, nghĩa nhân' }] }),
      caption: 'Mạch cảm xúc trong bài thơ “Quê mình”.' },
    { title: 'Chủ đề và thông điệp', html: `<div class="box key">Chủ đề: tình yêu, niềm tự hào về quê hương, đất nước; mong ước giữ mãi “bình yên quê nhà” trong tim dù đi bất cứ đâu.</div>
      <p>Hai câu ca dao bổ sung hai nét đẹp: cảnh sắc tươi đẹp (xứ Nghệ) và truyền thống đoàn kết, yêu thương (“Người trong một nước phải thương nhau cùng”). Từ đó, người đọc thêm trân trọng, có ý thức giữ gìn và góp sức xây dựng quê hương.</p>` }
  ],
  summary: 'Thơ bộc lộ trực tiếp tình cảm, cảm xúc của người viết qua từ ngữ, hình ảnh, giọng điệu, vần, nhịp và biện pháp tu từ. Bài lục bát “Quê mình” dùng điệp ngữ “có”, liệt kê hình ảnh quê hương, nhịp chẵn êm đềm để thể hiện tình yêu, niềm tự hào về đất nước; mạch cảm xúc đi từ cảnh vật cụ thể đến tình cảm khái quát.',
  examples: [
    { title: 'Kiểm tra luật lục bát', problem: 'Chỉ ra vần trong hai dòng “Mai sau con bước muôn miền / Trong tim vẫn giữ bình yên quê nhà”.', solution: 'Tiếng thứ 6 dòng lục “miền” vần với tiếng thứ 6 dòng bát “yên” (vần “iên”). Tiếng 2, 4, 6 dòng lục: “sau” (B) – “bước” (T) – “miền” (B), đúng luật bằng – trắc – bằng.' },
    { title: 'Tác dụng của điệp ngữ', problem: 'Nêu tác dụng của điệp ngữ “có” trong bốn dòng đầu bài thơ.', solution: 'Từ “có” lặp lại liên tiếp như lời đếm, lời khoe đầy tự hào về những gì quê hương sở hữu: sông, đò, tre, sen, lời ru, tiếng chiêng. Điệp ngữ tạo nhịp điệu dồn dập mà êm ái, nhấn mạnh quê hương giàu đẹp và tình cảm gắn bó của người viết.' },
    { title: 'Hiểu câu ca dao', problem: 'Giải thích ý nghĩa câu ca dao “Nhiễu điều phủ lấy giá gương / Người trong một nước phải thương nhau cùng.”', solution: '“Nhiễu điều” là tấm vải lụa màu đỏ, “giá gương” là khung gương. Tấm nhiễu phủ lên giá gương để che bụi, giữ gương sáng – hình ảnh ẩn dụ cho sự che chở, bảo vệ lẫn nhau. Câu ca dao khuyên người cùng một nước phải yêu thương, đoàn kết, đùm bọc nhau.' }
  ],
  exercises: [
    { question: 'Tìm những hình ảnh gắn với các vùng miền khác nhau của đất nước trong bài “Quê mình”.', hints: ['Hình ảnh đồng bằng, sông nước.', 'Hình ảnh núi rừng, được nêu tên cụ thể.'], solution: 'Đồng bằng, sông nước: dải sông xanh, con đò nhỏ, cành tre, đầm sen. Núi rừng: “tiếng chiêng Tây Nguyên”. Các hình ảnh cho thấy “quê mình” không chỉ là một làng quê mà là cả đất nước.' },
    { question: 'Dòng thơ nào thể hiện trực tiếp tình cảm của người viết? Đó là tình cảm gì?', hints: ['Tìm từ ngữ bộc lộ cảm xúc (yêu, thương…).', 'Dòng thơ thứ 7.'], solution: 'Dòng “Yêu sao đất nước hiền hoà” – từ “yêu sao” bộc lộ trực tiếp tình yêu tha thiết, niềm tự hào về đất nước hiền hoà, nghĩa tình.' },
    { question: 'Viết đoạn văn (5 – 6 câu) nêu cảm nhận về hai dòng thơ “Mai sau con bước muôn miền / Trong tim vẫn giữ bình yên quê nhà”.', hints: ['“Muôn miền” gợi điều gì? “Bình yên quê nhà” là gì?', 'Liên hệ bản thân: em mang theo điều gì của quê hương?'], solution: 'Ví dụ: Hai dòng thơ là lời hứa giản dị mà sâu sắc của người con. “Muôn miền” gợi những chân trời xa, những hành trình lớn của tương lai. Nhưng dù đi đâu, người con vẫn giữ trong tim “bình yên quê nhà” – đó là lời ru của mẹ, dòng sông, cành tre đã nuôi lớn tâm hồn mình. Cách nói “trong tim vẫn giữ” cho thấy quê hương đã trở thành một phần máu thịt. Đọc hai dòng thơ, em nghĩ rằng dù sau này học tập, làm việc ở đâu, em cũng sẽ luôn nhớ về quê hương và cố gắng làm điều tốt đẹp cho nơi mình sinh ra.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bài thơ “Quê mình” viết theo thể thơ nào?', options: ['Lục bát', 'Bốn chữ', 'Năm chữ', 'Tự do'], answer: 0, explain: 'Các cặp dòng 6 – 8 tiếng.' },
    { type: 'short', q: 'Trong bốn dòng đầu bài thơ, từ nào được điệp lại nhiều lần?', answer: ['có'], answerText: 'có', explain: 'Từ “có” lặp lại 5 lần.' },
    { type: 'mcq', q: 'Hình ảnh nào gợi vùng núi rừng?', options: ['Tiếng chiêng Tây Nguyên', 'Dải sông xanh', 'Con đò nhỏ', 'Đầm sen'], answer: 0, explain: 'Tây Nguyên là vùng cao nguyên, núi rừng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thơ là thể loại bộc lộ trực tiếp tình cảm, cảm xúc của người viết.', answer: true, explain: 'Đặc trưng của thơ trữ tình.' },
    { type: 'mcq', q: 'Câu “Non xanh nước biếc như tranh hoạ đồ” dùng biện pháp:', options: ['So sánh', 'Nói giảm nói tránh', 'Điệp ngữ', 'Nói quá'], answer: 0, explain: 'Có từ “như”, so sánh cảnh với bức tranh.' },
    { type: 'mcq', q: 'Tình cảm chủ đạo của bài “Quê mình” là:', options: ['Yêu và tự hào về quê hương, đất nước', 'Buồn chán', 'Sợ hãi', 'Giận dữ'], answer: 0, explain: '“Yêu sao đất nước hiền hoà”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu ca dao “Nhiễu điều phủ lấy giá gương…” khuyên người trong một nước đoàn kết, yêu thương nhau.', answer: true, explain: 'Hình ảnh ẩn dụ về sự che chở lẫn nhau.' },
    { type: 'mcq', q: 'Nhịp phổ biến của thơ lục bát là:', options: ['Nhịp chẵn (2/2/2, 4/4)', 'Nhịp 3/4', 'Nhịp 1/4', 'Không có nhịp'], answer: 0, explain: 'Lục bát thường ngắt nhịp chẵn.' }
  ]
});
})();
