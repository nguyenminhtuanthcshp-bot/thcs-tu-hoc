/* Ngữ văn 9 – Bài 2. Đọc hiểu thơ song thất lục bát. Ngữ liệu: ba khổ trích “Chinh phụ ngâm” (nguyên tác chữ Hán của Đặng Trần Côn, thế kỉ XVIII; bản diễn Nôm tương truyền của Đoàn Thị Điểm – cả hai thuộc phạm vi công cộng) và một khổ song thất lục bát do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b2-doc', {
  objectives: [
    'Nhận biết được đặc điểm của thể thơ song thất lục bát: số tiếng, số dòng trong khổ, cách gieo vần, luật bằng trắc, nhịp.',
    'Phân tích được tâm trạng của nhân vật trữ tình và tác dụng của các biện pháp nghệ thuật (điệp ngữ, câu hỏi tu từ, hình ảnh ước lệ).',
    'Hiểu được giá trị nội dung của đoạn trích “Chinh phụ ngâm”: nỗi sầu chia li, tố cáo chiến tranh phong kiến, khát vọng hạnh phúc lứa đôi.',
    'Trân trọng một thể thơ dân tộc độc đáo và đồng cảm với những số phận phải chịu chia li.'
  ],
  intro: 'Giữa những thể thơ vay mượn từ Trung Hoa, người Việt đã sáng tạo nên một thể thơ riêng: song thất lục bát – hai câu bảy chữ nối với một cặp lục bát, âm điệu trầm bổng như lời than, lời ru. Kiệt tác tiêu biểu của thể thơ này là “Chinh phụ ngâm”.',
  text: {
    title: 'Trích “Chinh phụ ngâm” (bản diễn Nôm)',
    html: `<p><i>Hoàn cảnh:</i> Chinh phụ ngâm viết về người vợ có chồng ra trận. Sau buổi tiễn đưa, nàng ở nhà một mình, ngày đêm trông ngóng, nhớ thương.</p>
<div class="poem">Thuở trời đất nổi cơn gió bụi,<br>Khách má hồng nhiều nỗi truân chuyên.<br>Xanh kia thăm thẳm tầng trên,<br>Vì ai gây dựng cho nên nỗi này?<br><br>
Chàng thì đi cõi xa mưa gió,<br>Thiếp thì về buồng cũ gối chăn.<br>Đoái trông theo đã cách ngăn,<br>Tuôn màu mây biếc, trải ngần núi xanh.<br><br>
Cùng trông lại mà cùng chẳng thấy,<br>Thấy xanh xanh những mấy ngàn dâu.<br>Ngàn dâu xanh ngắt một màu,<br>Lòng chàng ý thiếp ai sầu hơn ai?</div>
<p><i>Chú thích:</i> <b>gió bụi</b>: chỉ chiến tranh loạn lạc; <b>khách má hồng</b>: người phụ nữ; <b>truân chuyên</b>: gian truân, vất vả; <b>xanh kia</b>: trời xanh (ông trời); <b>đoái trông</b>: ngoảnh lại nhìn; <b>ngàn dâu</b>: rừng dâu, bãi dâu mênh mông.</p>`,
    source: '“Chinh phụ ngâm” – nguyên tác chữ Hán của Đặng Trần Côn (thế kỉ XVIII), bản diễn Nôm tương truyền của Đoàn Thị Điểm (có ý kiến cho là của Phan Huy Ích); trích ba khổ theo bản phổ biến, thuộc phạm vi công cộng. Hoàn cảnh và chú thích do nhóm biên soạn viết.'
  },
  steps: [
    { title: 'Đặc điểm thể thơ song thất lục bát', html: `<ul><li><b>Khổ thơ:</b> mỗi khổ 4 dòng: hai dòng 7 tiếng (song thất) + một dòng 6 tiếng + một dòng 8 tiếng (lục bát). Bài thơ có thể dài không hạn định.</li>
      <li><b>Nhịp:</b> dòng bảy tiếng thường ngắt 3/4 (“Thuở trời đất / nổi cơn gió bụi”); cặp lục bát thường ngắt nhịp chẵn 2/2/2.</li>
      <li><b>Bằng trắc:</b> dòng thất đầu thường có tiếng 3 trắc, 5 bằng, 7 trắc; dòng thất sau thường có tiếng 3 bằng, 5 trắc, 7 bằng (tiếng 3 đôi khi linh hoạt) (VD: đất – cơn – bụi; hồng – nỗi – chuyên).</li>
      <li><b>Vần:</b> vừa có vần lưng vừa có vần chân, liền mạch giữa các khổ.</li></ul>` },
    { title: 'Sơ đồ gieo vần (khổ thứ ba)', html: `<p>Các tiếng in đậm hiệp vần với nhau, nối dòng này với dòng sau:</p>
      <div class="poem">Cùng trông lại mà cùng chẳng <b>thấy</b>,<br>Thấy xanh xanh những <b>mấy</b> ngàn <b>dâu</b>.<br>Ngàn dâu xanh ngắt một <b>màu</b>,<br>Lòng chàng ý thiếp ai <b>sầu</b> hơn <b>ai</b>?</div>`,
      svg: S.flow({ w: 620, items: [{ title: 'Thất 1', text: 'tiếng 7: “thấy”' }, { title: 'Thất 2', text: 'tiếng 5 “mấy”; tiếng 7 “dâu”' }, { title: 'Lục', text: 'tiếng 6: “màu”' }, { title: 'Bát', text: 'tiếng 6 “sầu”; tiếng 8 “ai”' }] }),
      caption: 'Vần nối: thấy – mấy (trắc); dâu – màu – sầu (bằng); “ai” nối sang khổ sau.' },
    { title: 'Tâm trạng người chinh phụ', html: `<ul><li><b>Khổ 1:</b> câu hỏi tu từ “Xanh kia… Vì ai gây dựng cho nên nỗi này?” – lời oán trách ông trời, gián tiếp lên án chiến tranh gây nên cảnh chia lìa.</li>
      <li><b>Khổ 2:</b> cấu trúc đối “Chàng thì… / Thiếp thì…” diễn tả khoảng cách ngày càng xa; hình ảnh “mây biếc”, “núi xanh” ngăn cách tầm nhìn.</li>
      <li><b>Khổ 3:</b> điệp ngữ vòng “thấy – thấy”, “ngàn dâu – ngàn dâu” cùng màu “xanh xanh”, “xanh ngắt” gợi không gian mênh mông, nỗi sầu dằng dặc; câu hỏi “ai sầu hơn ai?” cho thấy nỗi buồn của cả hai người không thể đo đếm.</li></ul>` },
    { title: 'Giá trị nội dung và nghệ thuật', html: `<table class="tbl"><tr><th>Nội dung</th><th>Nghệ thuật</th></tr>
      <tr><td>Nỗi sầu chia li của người vợ có chồng ra trận</td><td>Thể song thất lục bát, âm điệu buồn thương, triền miên</td></tr>
      <tr><td>Tố cáo chiến tranh phong kiến phi nghĩa</td><td>Câu hỏi tu từ, điệp ngữ, cấu trúc đối</td></tr>
      <tr><td>Khát vọng hạnh phúc lứa đôi, đề cao tình cảm con người</td><td>Hình ảnh ước lệ (má hồng, mây biếc, ngàn dâu), tả cảnh ngụ tình</td></tr></table>` },
    { title: 'Nhận diện thể thơ qua một khổ tự sáng tác', html: `<p>Khổ thơ sau do nhóm biên soạn viết theo đúng luật song thất lục bát:</p>
      <div class="poem">Sân trường cũ lá bàng trở <b>đỏ</b>,<br>Tiếng ve xưa bỏ <b>ngỏ</b> lời <b>chào</b>.<br>Bạn bè giờ ở phương <b>nào</b>,<br>Hàng cây còn đứng xôn <b>xao</b> đợi chờ.</div>
      <div class="box key">Kiểm tra: 7 – 7 – 6 – 8 tiếng; “đỏ – ngỏ” (vần trắc), “chào – nào – xao” (vần bằng); dòng thất ngắt 3/4.</div>` }
  ],
  summary: 'Song thất lục bát là thể thơ dân tộc: mỗi khổ gồm hai dòng bảy tiếng và một cặp lục bát; dòng bảy tiếng ngắt nhịp 3/4; có vần lưng và vần chân nối liền các dòng, các khổ (tiếng 7 dòng thất đầu vần với tiếng 5 dòng thất sau; tiếng 7 dòng thất sau vần với tiếng 6 dòng lục…). Đoạn trích “Chinh phụ ngâm” diễn tả nỗi sầu chia li, oán trách chiến tranh bằng câu hỏi tu từ, điệp ngữ, cấu trúc đối, hình ảnh ước lệ.',
  examples: [
    { title: 'Nhận diện thể thơ', problem: 'Dựa vào khổ thơ thứ nhất, chứng minh đoạn trích viết theo thể song thất lục bát.', solution: 'Khổ gồm 4 dòng: “Thuở trời đất nổi cơn gió bụi” (7 tiếng), “Khách má hồng nhiều nỗi truân chuyên” (7 tiếng), “Xanh kia thăm thẳm tầng trên” (6 tiếng), “Vì ai gây dựng cho nên nỗi này?” (8 tiếng). Vần: “bụi – nỗi” (vần trắc), “chuyên – trên – nên” (vần bằng). Dòng bảy tiếng ngắt nhịp 3/4: “Thuở trời đất / nổi cơn gió bụi”.' },
    { title: 'Phân tích điệp ngữ', problem: 'Nêu tác dụng của điệp ngữ trong khổ thơ thứ ba.', solution: 'Điệp ngữ vòng (liên hoàn): cuối dòng trên “chẳng thấy” – đầu dòng dưới “Thấy xanh xanh”; cuối dòng “ngàn dâu” – đầu dòng sau “Ngàn dâu xanh ngắt”. Cách lặp nối tiếp tạo âm điệu triền miên, gợi tầm nhìn trải mãi mà chỉ gặp một màu xanh vô tận – cũng là nỗi sầu kéo dài, không lối thoát của người chinh phụ.' },
    { title: 'Câu hỏi tu từ', problem: 'Câu “Lòng chàng ý thiếp ai sầu hơn ai?” có ý nghĩa gì?', solution: 'Đây là câu hỏi tu từ, không cần câu trả lời. Nó khẳng định nỗi sầu của cả hai người đều lớn, không thể so sánh; đồng thời thể hiện sự đồng cảm, gắn bó của người vợ với chồng nơi xa. Câu hỏi khép lại đoạn thơ bằng một nỗi buồn mênh mang, lan toả.' }
  ],
  exercises: [
    { question: 'Chỉ ra cấu trúc đối trong khổ thơ thứ hai và nêu tác dụng.', hints: ['So sánh hai dòng bảy tiếng đầu khổ.', '“Chàng” – “Thiếp”; “đi” – “về”; “cõi xa mưa gió” – “buồng cũ gối chăn”.'], solution: 'Hai dòng “Chàng thì đi cõi xa mưa gió, / Thiếp thì về buồng cũ gối chăn” đối nhau từng vế: chàng – thiếp, đi – về, cõi xa mưa gió (gian nan, nguy hiểm) – buồng cũ gối chăn (cô đơn, lạnh lẽo). Phép đối diễn tả hai con người, hai không gian tách biệt, khoảng cách ngày càng xa, làm nổi bật nỗi chia li.' },
    { question: 'Xác định nhịp và luật bằng trắc ở tiếng 3, 5, 7 của hai dòng thất trong khổ thứ nhất.', hints: ['Dòng 1: đất – cơn – bụi.', 'Dòng 2: hồng – nỗi – chuyên.'], solution: 'Dòng 1 “Thuở trời đất / nổi cơn gió bụi” (nhịp 3/4): tiếng 3 “đất” – trắc, tiếng 5 “cơn” – bằng, tiếng 7 “bụi” – trắc. Dòng 2 “Khách má hồng / nhiều nỗi truân chuyên” (nhịp 3/4): tiếng 3 “hồng” – bằng, tiếng 5 “nỗi” – trắc, tiếng 7 “chuyên” – bằng. Đúng luật song thất.' },
    { question: 'Viết đoạn văn (6 – 8 câu) phân tích nỗi nhớ của người chinh phụ trong khổ thơ thứ ba.', hints: ['Chú ý hành động “trông”, màu “xanh”, điệp ngữ vòng.', 'Kết bằng câu hỏi tu từ.'], solution: 'Ví dụ: Khổ thơ thứ ba là đỉnh điểm của nỗi nhớ thương. Người chinh phụ “cùng trông lại” – ngoảnh nhìn theo bóng chồng – nhưng “cùng chẳng thấy”, chỉ thấy “xanh xanh những mấy ngàn dâu”. Điệp ngữ vòng “thấy – thấy”, “ngàn dâu – ngàn dâu” khiến câu thơ như kéo dài mãi, giống tầm nhìn trải ra vô tận. Màu xanh được nhắc lại ba lần, từ “xanh xanh” đến “xanh ngắt”, gợi một không gian mênh mông, đơn điệu, nhuốm màu tâm trạng. Cảnh càng rộng, con người càng nhỏ bé, cô đơn. Câu hỏi tu từ “Lòng chàng ý thiếp ai sầu hơn ai?” khép lại khổ thơ, cho thấy nỗi sầu chia li của cả hai không thể đong đếm. Đó là lời than thấm thía, gián tiếp tố cáo chiến tranh đã chia cắt hạnh phúc lứa đôi.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Mỗi khổ thơ song thất lục bát có số tiếng các dòng lần lượt là:', options: ['7 – 7 – 6 – 8', '6 – 8 – 6 – 8', '7 – 7 – 7 – 7', '5 – 5 – 5 – 5'], answer: 0, explain: 'Hai dòng bảy tiếng và một cặp lục bát.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Dòng bảy tiếng trong thơ song thất lục bát thường ngắt nhịp 3/4.', answer: true, explain: 'VD: “Thuở trời đất / nổi cơn gió bụi”.' },
    { type: 'short', q: 'Tác giả nguyên tác chữ Hán của “Chinh phụ ngâm” là ai?', answer: ['Đặng Trần Côn', 'dang tran con'], answerText: 'Đặng Trần Côn', explain: 'Bản diễn Nôm tương truyền của Đoàn Thị Điểm.' },
    { type: 'mcq', q: 'Hình ảnh “gió bụi” trong câu “Thuở trời đất nổi cơn gió bụi” chỉ:', options: ['chiến tranh loạn lạc', 'thời tiết xấu', 'mùa thu', 'cảnh làng quê'], answer: 0, explain: 'Hình ảnh ước lệ chỉ binh đao.' },
    { type: 'mcq', q: 'Biện pháp nổi bật trong hai dòng “Chàng thì đi cõi xa mưa gió, / Thiếp thì về buồng cũ gối chăn” là:', options: ['phép đối', 'nói quá', 'hoán dụ', 'chơi chữ'], answer: 0, explain: 'Chàng – thiếp, đi – về, cõi xa – buồng cũ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Song thất lục bát là thể thơ vay mượn nguyên vẹn từ thơ Đường.', answer: false, explain: 'Đây là thể thơ dân tộc do người Việt sáng tạo.' },
    { type: 'short', q: 'Trong khổ thứ ba, màu sắc nào được lặp lại để gợi không gian mênh mông?', answer: ['xanh', 'màu xanh', 'xanh xanh'], answerText: 'màu xanh', explain: '“xanh xanh”, “xanh ngắt”.' },
    { type: 'mcq', q: 'Câu “Lòng chàng ý thiếp ai sầu hơn ai?” là:', options: ['câu hỏi tu từ', 'câu cầu khiến', 'câu cảm thán có từ “ôi”', 'câu kể thông báo'], answer: 0, explain: 'Không cần câu trả lời, nhấn mạnh nỗi sầu.' }
  ]
});
})();
