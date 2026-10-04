/* Ngữ văn 7 – Bài 8. Đọc hiểu: Văn bản nghị luận (nghị luận xã hội). Văn bản đọc “Trải nghiệm – người thầy không đứng trên bục giảng” do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b8-doc', {
  objectives: [
    'Nhận biết được đặc điểm của văn bản nghị luận: luận đề, luận điểm, lí lẽ, bằng chứng và mối quan hệ giữa chúng.',
    'Phân biệt lí lẽ và bằng chứng; đánh giá được tính thuyết phục của bằng chứng.',
    'Hiểu được giá trị của trải nghiệm đối với sự trưởng thành; có thái độ dám thử, dám sai để lớn lên.'
  ],
  intro: 'Không ai học bơi chỉ bằng cách đọc sách về bơi. Có những bài học chỉ có thể học bằng cách “bước xuống nước”. Văn bản nghị luận dưới đây bàn về điều đó – và cũng là mẫu để em học cách lập luận.',
  text: {
    title: 'Trải nghiệm – người thầy không đứng trên bục giảng',
    html: `<p>Trong cuộc đời mỗi người, có một người thầy đặc biệt: người thầy ấy không đứng trên bục giảng, không có giáo án, nhưng dạy ta những bài học không bao giờ quên. Người thầy đó chính là trải nghiệm.</p>
<p>Trước hết, trải nghiệm giúp ta hiểu sâu và nhớ lâu. Em có thể đọc mười trang sách hướng dẫn đi xe đạp mà vẫn chưa biết đi. Nhưng chỉ sau vài lần ngã trầy đầu gối, cơ thể em đã “thuộc” cách giữ thăng bằng, và kĩ năng ấy theo em suốt đời. Kiến thức từ sách là tấm bản đồ; trải nghiệm mới là con đường ta thực sự bước qua.</p>
<p>Không chỉ vậy, trải nghiệm – kể cả những thất bại – rèn cho ta bản lĩnh. Nhà phát minh Thomas Edison đã thử rất nhiều loại vật liệu khác nhau trước khi tìm được dây tóc thích hợp cho bóng đèn điện. Mỗi lần thử không thành, ông lại biết thêm một cách không đúng. Nếu sợ sai, ông đã dừng lại từ những lần đầu tiên.</p>
<p>Hơn nữa, trải nghiệm giúp ta hiểu người khác. Một bạn học sinh chỉ sau một buổi theo mẹ ra chợ bán rau từ ba giờ sáng mới hiểu vì sao mẹ luôn nhắc con đừng bỏ phí thức ăn. Không lời giảng giải nào thấm bằng một lần tự mình thức dậy lúc trời còn tối.</p>
<p>Có người cho rằng trải nghiệm là mạo hiểm, tốt nhất cứ an toàn ở nhà. Thật ra, trải nghiệm không có nghĩa là liều lĩnh. Đó là dám thử những việc mới trong giới hạn an toàn, có sự hướng dẫn của người lớn, và biết rút kinh nghiệm sau mỗi lần làm.</p>
<p>Vì vậy, hãy mạnh dạn bước ra khỏi “vùng an toàn”: tham gia một câu lạc bộ, tự nấu một bữa cơm, thử trình bày trước lớp. Người thầy mang tên trải nghiệm luôn sẵn sàng – chỉ cần em chịu bước vào lớp học của thầy.</p>`,
    source: 'Văn bản do nhóm biên soạn tự viết để minh hoạ (không trích từ SGK hay tác phẩm có bản quyền).'
  },
  steps: [
    { title: 'Văn bản nghị luận là gì?', html: `<p><b>Văn bản nghị luận</b> là loại văn bản chủ yếu dùng để <b>thuyết phục</b> người đọc (người nghe) về một vấn đề. Văn bản nghị luận xã hội bàn về các vấn đề đời sống, đạo đức, lối sống.</p>
      <table class="tbl"><tr><th>Yếu tố</th><th>Khái niệm</th></tr>
      <tr><td>Luận đề</td><td>Vấn đề chính được bàn luận, thường thể hiện ở nhan đề, mở bài</td></tr>
      <tr><td>Luận điểm</td><td>Ý kiến thể hiện quan điểm của người viết, làm rõ cho luận đề</td></tr>
      <tr><td>Lí lẽ</td><td>Những lời giải thích, lập luận có căn cứ</td></tr>
      <tr><td>Bằng chứng</td><td>Sự việc, nhân vật, số liệu, dẫn chứng xác thực minh hoạ cho lí lẽ</td></tr></table>` },
    { title: 'Sơ đồ lập luận của văn bản', html: `<p>Luận đề được chia thành các luận điểm; mỗi luận điểm có lí lẽ và bằng chứng:</p>`,
      svg: S.mindmap({ center: 'Trải nghiệm là người thầy', branches: [{ title: 'LĐ1: Hiểu sâu, nhớ lâu', items: ['Lí lẽ: sách là bản đồ, trải nghiệm là con đường', 'Bằng chứng: học đi xe đạp'] }, { title: 'LĐ2: Rèn bản lĩnh', items: ['Lí lẽ: thất bại cũng là bài học', 'Bằng chứng: Edison thử nhiều vật liệu'] }, { title: 'LĐ3: Hiểu người khác', items: ['Bằng chứng: theo mẹ đi chợ lúc 3 giờ sáng'] }, { title: 'Phản bác', items: ['Trải nghiệm ≠ liều lĩnh', 'Có giới hạn an toàn'] }] }),
      caption: 'Hệ thống luận đề – luận điểm – lí lẽ – bằng chứng.' },
    { title: 'Phân biệt lí lẽ và bằng chứng', html: `<table class="tbl"><tr><th>Lí lẽ</th><th>Bằng chứng</th></tr>
      <tr><td>“Kiến thức từ sách là tấm bản đồ; trải nghiệm mới là con đường ta thực sự bước qua.”</td><td>Đọc mười trang sách vẫn chưa biết đi xe đạp; ngã vài lần thì “thuộc”.</td></tr>
      <tr><td>“Mỗi lần thử không thành, ông lại biết thêm một cách không đúng.”</td><td>Edison thử rất nhiều loại vật liệu cho dây tóc bóng đèn.</td></tr></table>
      <div class="box tip">Mẹo: lí lẽ trả lời câu hỏi “<b>Vì sao?</b>”; bằng chứng trả lời câu hỏi “<b>Ví dụ đâu?</b>”.</div>` },
    { title: 'Bố cục và cách lập luận', html: `<p>Văn bản đi theo trình tự: nêu vấn đề → giải quyết vấn đề (các luận điểm) → phản bác ý kiến trái chiều → kết thúc vấn đề (lời kêu gọi).</p>`,
      svg: S.flow({ items: [{ title: 'Nêu vấn đề', text: 'Trải nghiệm là người thầy' }, { title: '3 luận điểm', text: 'Trước hết – Không chỉ vậy – Hơn nữa' }, { title: 'Phản bác', text: 'Trải nghiệm không phải liều lĩnh' }, { title: 'Kết luận', text: 'Hãy bước ra khỏi vùng an toàn' }] }),
      caption: 'Các từ ngữ liên kết “Trước hết, Không chỉ vậy, Hơn nữa, Vì vậy” đánh dấu mạch lập luận.' },
    { title: 'Đánh giá tính thuyết phục', html: `<ul><li><b>Bằng chứng gần gũi</b> (học đi xe đạp, theo mẹ đi chợ) giúp người đọc lứa tuổi học sinh dễ đồng cảm.</li><li><b>Bằng chứng tiêu biểu</b> (Edison) tăng sức nặng.</li><li><b>Phản bác</b> ý kiến “trải nghiệm là mạo hiểm” làm lập luận chặt chẽ, toàn diện.</li><li><b>Hình ảnh ẩn dụ</b> “người thầy không đứng trên bục giảng”, “tấm bản đồ – con đường” làm văn nghị luận sinh động.</li></ul>` }
  ],
  summary: 'Văn bản nghị luận nhằm thuyết phục người đọc về một vấn đề, gồm luận đề, luận điểm, lí lẽ, bằng chứng. Lí lẽ giải thích “vì sao”, bằng chứng là ví dụ xác thực. Văn bản “Trải nghiệm – người thầy không đứng trên bục giảng” có ba luận điểm (hiểu sâu nhớ lâu; rèn bản lĩnh; hiểu người khác), có phản bác ý kiến trái chiều và lời kêu gọi dám trải nghiệm trong giới hạn an toàn.',
  examples: [
    { title: 'Xác định luận đề', problem: 'Luận đề của văn bản là gì? Được thể hiện ở đâu?', solution: 'Luận đề: trải nghiệm là người thầy dạy ta những bài học quý giá. Thể hiện ở nhan đề và câu cuối đoạn mở đầu “Người thầy đó chính là trải nghiệm.”' },
    { title: 'Tìm luận điểm', problem: 'Chỉ ra các câu nêu luận điểm trong văn bản.', solution: '“Trước hết, trải nghiệm giúp ta hiểu sâu và nhớ lâu.” – “Không chỉ vậy, trải nghiệm – kể cả những thất bại – rèn cho ta bản lĩnh.” – “Hơn nữa, trải nghiệm giúp ta hiểu người khác.” Các câu này đều đứng đầu đoạn (câu chủ đề).' },
    { title: 'Tác dụng của phản bác', problem: 'Đoạn thứ năm có vai trò gì?', solution: 'Đoạn thứ năm nêu ý kiến trái chiều (“trải nghiệm là mạo hiểm”) rồi phản bác: trải nghiệm không phải liều lĩnh mà là dám thử trong giới hạn an toàn. Nhờ đó lập luận toàn diện, người đọc bớt băn khoăn.' }
  ],
  exercises: [
    { question: 'Tìm lí lẽ và bằng chứng của luận điểm 3 (“trải nghiệm giúp ta hiểu người khác”).', hints: ['Bằng chứng là câu chuyện cụ thể nào?', 'Lí lẽ là câu khái quát.'], solution: 'Bằng chứng: một bạn học sinh theo mẹ ra chợ bán rau từ ba giờ sáng mới hiểu vì sao mẹ nhắc không bỏ phí thức ăn. Lí lẽ: “Không lời giảng giải nào thấm bằng một lần tự mình thức dậy lúc trời còn tối.”' },
    { question: 'Hình ảnh “người thầy không đứng trên bục giảng” là biện pháp tu từ gì? Nêu tác dụng.', hints: ['Trải nghiệm được gọi bằng tên một con người.', 'Tác dụng về hình thức và nội dung.'], solution: 'Ẩn dụ (kết hợp nhân hoá): gọi trải nghiệm là “người thầy”. Tác dụng: làm nhan đề hấp dẫn, gợi tò mò; nhấn mạnh trải nghiệm cũng dạy ta như thầy giáo, thậm chí dạy những bài học không có trong sách.' },
    { question: 'Em hãy bổ sung một bằng chứng khác cho luận điểm 1 (hiểu sâu, nhớ lâu).', hints: ['Nghĩ về môn học có thực hành: thí nghiệm, nấu ăn, trồng cây.', 'Bằng chứng phải xác thực, gần gũi.'], solution: 'Ví dụ: đọc về quá trình nảy mầm của hạt đậu em dễ quên, nhưng khi tự gieo đậu, tưới nước và ghi nhật kí mỗi ngày, em nhớ rõ từng giai đoạn: hạt nứt vỏ, nhú rễ, mọc lá mầm.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Mục đích chủ yếu của văn bản nghị luận là:', options: ['Thuyết phục người đọc về một vấn đề', 'Kể một câu chuyện hư cấu', 'Bộc lộ cảm xúc bằng vần điệu', 'Hướng dẫn cách chơi trò chơi'], answer: 0, explain: 'Văn nghị luận nhằm thuyết phục.' },
    { type: 'mcq', q: '“Edison thử rất nhiều loại vật liệu trước khi tìm được dây tóc bóng đèn” là:', options: ['Bằng chứng', 'Luận đề', 'Lí lẽ', 'Kết luận'], answer: 0, explain: 'Sự việc xác thực minh hoạ cho lí lẽ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Luận điểm là những ý kiến làm rõ cho luận đề.', answer: true, explain: 'Đúng khái niệm.' },
    { type: 'mcq', q: 'Văn bản “Trải nghiệm – người thầy…” có bao nhiêu luận điểm chính?', options: ['3', '1', '5', '7'], answer: 0, explain: 'Hiểu sâu nhớ lâu; rèn bản lĩnh; hiểu người khác.' },
    { type: 'short', q: 'Lí lẽ trả lời câu hỏi “Vì sao?”; còn yếu tố nào trả lời câu hỏi “Ví dụ đâu?” (ghi hai tiếng)', answer: ['bằng chứng', 'dẫn chứng'], answerText: 'bằng chứng', explain: 'Bằng chứng minh hoạ cho lí lẽ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Theo văn bản, trải nghiệm có nghĩa là liều lĩnh, bất chấp nguy hiểm.', answer: false, explain: 'Văn bản phản bác: trải nghiệm trong giới hạn an toàn.' },
    { type: 'mcq', q: 'Từ ngữ nào KHÔNG dùng để đánh dấu các luận điểm trong văn bản?', options: ['Ngày xửa ngày xưa', 'Trước hết', 'Không chỉ vậy', 'Hơn nữa'], answer: 0, explain: '“Ngày xửa ngày xưa” là lời mở đầu truyện cổ tích.' },
    { type: 'mcq', q: 'Việc phản bác ý kiến trái chiều giúp văn bản:', options: ['Chặt chẽ, toàn diện hơn', 'Lạc đề', 'Mất tính thuyết phục', 'Trở thành văn bản tự sự'], answer: 0, explain: 'Phản bác làm lập luận vững chắc.' }
  ]
});
})();
