/* Ngữ văn 9 – Bài 4. Thực hành tiếng Việt: Cách dẫn trực tiếp, cách dẫn gián tiếp; cách sử dụng tài liệu tham khảo và trích dẫn tài liệu. Ngữ liệu: câu thơ Nguyễn Du, Nguyễn Đình Chiểu (phạm vi công cộng), đoạn văn và danh mục tài liệu mẫu do nhóm biên soạn tự viết (tài liệu trong danh mục là ví dụ giả định để minh hoạ cách trình bày). */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b4-tv', {
  objectives: [
    'Phân biệt được cách dẫn trực tiếp và cách dẫn gián tiếp; chuyển đổi được giữa hai cách dẫn.',
    'Biết cách trích dẫn tài liệu tham khảo chính xác, đúng quy cách (ngoặc kép, ghi nguồn).',
    'Biết lập danh mục tài liệu tham khảo cho bài viết; tránh đạo văn.',
    'Có ý thức trung thực, tôn trọng quyền tác giả khi sử dụng tài liệu.'
  ],
  intro: 'Viết bài nghị luận văn học, em thường phải dẫn lời tác giả, dẫn câu thơ, dẫn ý kiến của nhà nghiên cứu. Dẫn sao cho đúng, cho trung thực, và ghi nguồn thế nào để người đọc kiểm chứng được? Đó là nội dung của bài học này.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) Mở đầu “Truyện Kiều”, Nguyễn Du viết: “Trăm năm trong cõi người ta, / Chữ tài chữ mệnh khéo là ghét nhau.”</p>
<p>(2) Mở đầu “Truyện Kiều”, Nguyễn Du cho rằng tài năng và số phận của con người thường trái ngược nhau.</p>
<p>(3) Lục Vân Tiên thét lên với bọn cướp: “Bớ đảng hung đồ, / Chớ quen làm thói hồ đồ hại dân.”</p>
<p>(4) Lục Vân Tiên quát bọn cướp rằng chúng chớ quen thói làm hại dân lành.</p>
<p>(5) <b>Danh mục tài liệu tham khảo (mẫu, tài liệu giả định):</b><br>
1. Nguyễn Văn A (2020), <i>Tìm hiểu thơ Đường</i>, Nhà xuất bản X, Hà Nội.<br>
2. Trần Thị B (2022), “Hình ảnh cánh buồm trong thơ tiễn biệt”, <i>Tạp chí Y</i>, số 5, tr. 10 – 15.<br>
3. Trang thông tin Z (truy cập ngày 20/9/2026), “Lầu Hoàng Hạc”, địa chỉ trang web.</p>`,
    source: '(1), (3): thơ Nguyễn Du, Nguyễn Đình Chiểu – phạm vi công cộng. (2), (4) và danh mục (5) do nhóm biên soạn tự viết; tên tác giả, tài liệu trong danh mục là giả định, chỉ để minh hoạ cách trình bày.'
  },
  steps: [
    { title: 'Cách dẫn trực tiếp', html: `<ul><li><b>Dẫn trực tiếp</b> là nhắc lại <b>nguyên văn</b> lời nói, ý nghĩ, câu văn, câu thơ của người khác.</li>
      <li>Phần được dẫn đặt trong <b>dấu ngoặc kép</b>, thường sau dấu hai chấm.</li>
      <li>VD: câu (1), câu (3).</li>
      <li>Ưu điểm: chính xác, khách quan, giữ được sắc thái lời gốc.</li></ul>` },
    { title: 'Cách dẫn gián tiếp', html: `<ul><li><b>Dẫn gián tiếp</b> là thuật lại lời nói, ý nghĩ của người khác có <b>điều chỉnh</b> cho phù hợp, không giữ nguyên văn.</li>
      <li>Không dùng dấu ngoặc kép; có thể dùng từ “rằng”, “là” trước phần dẫn.</li>
      <li>VD: câu (2), câu (4).</li>
      <li>Ưu điểm: linh hoạt, gọn, hoà vào lời văn của người viết.</li></ul>`,
      svg: S.mindmap({ center: 'Hai cách dẫn', branches: [{ title: 'Trực tiếp', items: ['Nguyên văn', 'Dấu hai chấm, ngoặc kép'] }, { title: 'Gián tiếp', items: ['Thuật lại, điều chỉnh', 'Có thể thêm “rằng”, “là”'] }, { title: 'Khi dùng', items: ['Thơ, lời nói đặc sắc', 'Ý chính, ngắn gọn'] }, { title: 'Chuyển đổi', items: ['Bỏ ngoặc kép', 'Đổi ngôi, từ xưng hô'] }] }),
      caption: 'So sánh cách dẫn trực tiếp và gián tiếp.' },
    { title: 'Chuyển đổi giữa hai cách dẫn', html: `<p>Khi chuyển từ trực tiếp sang gián tiếp:</p>
      <ul><li>Bỏ dấu hai chấm và ngoặc kép; có thể thêm “rằng”, “là”.</li>
      <li>Đổi từ xưng hô, ngôi kể, từ chỉ thời gian, địa điểm cho phù hợp.</li></ul>
      <p>VD: Lan nói: “<b>Tớ</b> sẽ đọc Truyện Kiều <b>vào tuần này</b>.” → Lan nói rằng <b>bạn ấy</b> sẽ đọc Truyện Kiều <b>vào tuần đó</b>.</p>` },
    { title: 'Sử dụng và trích dẫn tài liệu tham khảo', html: `<ul><li>Chọn tài liệu <b>đáng tin cậy</b>: sách, tạp chí chuyên ngành, trang của cơ quan, trường học, thư viện.</li>
      <li>Trích dẫn nguyên văn: đặt trong ngoặc kép, ghi rõ tác giả, tài liệu (có thể ghi số trang).</li>
      <li>Dẫn ý (tóm lược bằng lời mình): vẫn phải ghi nguồn.</li>
      <li>Cuối bài lập <b>danh mục tài liệu tham khảo</b>: tên tác giả (năm), tên tài liệu, nơi xuất bản/nguồn; với trang web ghi thêm ngày truy cập.</li></ul>`,
      svg: S.flow({ w: 620, items: [{ title: 'Tìm', text: 'Tài liệu tin cậy' }, { title: 'Đọc, ghi', text: 'Chép ý, ghi nguồn' }, { title: 'Trích dẫn', text: 'Ngoặc kép, tác giả' }, { title: 'Danh mục', text: 'Cuối bài viết' }] }),
      caption: 'Quy trình sử dụng tài liệu tham khảo.' },
    { title: 'Tránh đạo văn', html: `<div class="box warn"><b>Đạo văn</b> là lấy ý tưởng, câu chữ của người khác làm của mình mà không ghi nguồn. Đây là hành vi thiếu trung thực, vi phạm quyền tác giả.</div>
      <ul><li>Luôn ghi nguồn khi dẫn nguyên văn hoặc dẫn ý.</li>
      <li>Không chép cả đoạn bài văn mẫu trên mạng rồi nộp.</li>
      <li>Trích dẫn ngắn, đúng chỗ; phần lớn bài viết phải là suy nghĩ của mình.</li></ul>` }
  ],
  summary: 'Dẫn trực tiếp: nhắc nguyên văn, đặt trong ngoặc kép (thường sau dấu hai chấm). Dẫn gián tiếp: thuật lại có điều chỉnh, không dùng ngoặc kép, có thể thêm “rằng/là”. Khi chuyển sang gián tiếp cần đổi xưng hô, từ chỉ thời gian, địa điểm. Dùng tài liệu tham khảo tin cậy, trích dẫn có ghi nguồn, lập danh mục tài liệu cuối bài; tránh đạo văn.',
  examples: [
    { title: 'Nhận diện cách dẫn', problem: 'Xác định cách dẫn ở các câu (1) – (4).', solution: '(1) Dẫn trực tiếp – nguyên văn hai câu thơ, sau dấu hai chấm, trong ngoặc kép. (2) Dẫn gián tiếp – thuật lại ý của hai câu thơ, không dùng ngoặc kép. (3) Dẫn trực tiếp – nguyên văn lời Lục Vân Tiên. (4) Dẫn gián tiếp – có từ “rằng”, lời được điều chỉnh.' },
    { title: 'Chuyển đổi cách dẫn', problem: 'Chuyển sang dẫn gián tiếp: Cô giáo dặn: “Các em hãy đọc trước đoạn Kiều ở lầu Ngưng Bích.”', solution: 'Cô giáo dặn chúng em (hãy) đọc trước đoạn Kiều ở lầu Ngưng Bích. (Bỏ dấu hai chấm, ngoặc kép; đổi “các em” thành “chúng em”.)' },
    { title: 'Nhận xét danh mục tài liệu', problem: 'Danh mục (5) trình bày những thông tin nào cho mỗi loại tài liệu?', solution: 'Sách: tác giả (năm), tên sách (in nghiêng), nhà xuất bản, nơi xuất bản. Bài tạp chí: tác giả (năm), tên bài (trong ngoặc kép), tên tạp chí (in nghiêng), số, trang. Trang web: tên trang (ngày truy cập), tên bài, địa chỉ trang. Nhờ đủ thông tin, người đọc có thể tìm lại tài liệu để kiểm chứng.' }
  ],
  exercises: [
    { question: 'Chuyển câu sau sang dẫn trực tiếp: “Mẹ bảo rằng mẹ sẽ mua cho tôi cuốn Truyện Kiều vào ngày mai.”', hints: ['Thêm dấu hai chấm, ngoặc kép.', 'Đổi xưng hô: mẹ – con; “ngày mai”.'], solution: 'Mẹ bảo: “Mẹ sẽ mua cho con cuốn Truyện Kiều vào ngày mai.”' },
    { question: 'Viết một câu có dẫn trực tiếp hai câu thơ trong đoạn “Kiều ở lầu Ngưng Bích” và một câu dẫn gián tiếp ý của hai câu đó.', hints: ['Chọn hai câu thơ em nhớ chính xác.', 'Câu gián tiếp nêu ý, không ngoặc kép.'], solution: 'Trực tiếp: Nguyễn Du tả tâm trạng Kiều: “Buồn trông ngọn nước mới sa, / Hoa trôi man mác biết là về đâu?” Gián tiếp: Nguyễn Du cho thấy Kiều nhìn cánh hoa trôi trên dòng nước mà lo cho thân phận trôi nổi, không biết về đâu của mình.' },
    { question: 'Em đọc được một nhận xét hay trên một trang web về bài thơ của Lý Bạch. Hãy nêu cách sử dụng nhận xét ấy trong bài viết sao cho trung thực.', hints: ['Kiểm tra độ tin cậy của trang.', 'Trích dẫn thế nào, ghi nguồn ra sao?'], solution: 'Trước hết kiểm tra trang web có đáng tin không (trang của trường học, thư viện, tạp chí chuyên ngành, tác giả rõ ràng). Khi dùng, nếu giữ nguyên văn thì đặt trong ngoặc kép và ghi tên tác giả/trang; nếu tóm lược thì diễn đạt bằng lời mình và vẫn ghi “theo…”. Cuối bài, đưa trang web vào danh mục tài liệu tham khảo, ghi tên bài, địa chỉ và ngày truy cập. Không chép cả đoạn làm như ý mình.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Dẫn trực tiếp là:', options: ['nhắc lại nguyên văn lời người khác, đặt trong ngoặc kép', 'thuật lại có điều chỉnh', 'tự nghĩ ra lời', 'bỏ qua lời người khác'], answer: 0, explain: 'Giữ nguyên văn.' },
    { type: 'mcq', q: 'Câu nào dùng cách dẫn gián tiếp?', options: ['Lục Vân Tiên quát bọn cướp rằng chúng chớ quen thói làm hại dân lành.', 'Lục Vân Tiên quát: “Bớ đảng hung đồ…”', 'Nguyễn Du viết: “Trăm năm trong cõi người ta…”', 'Mẹ bảo: “Con học bài đi.”'], answer: 0, explain: 'Có “rằng”, không ngoặc kép.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi dẫn ý (tóm lược bằng lời mình) thì không cần ghi nguồn.', answer: false, explain: 'Dẫn ý vẫn phải ghi nguồn.' },
    { type: 'short', q: 'Hành vi lấy câu chữ, ý tưởng của người khác làm của mình mà không ghi nguồn gọi là gì (“đạo …”)?', answer: ['đạo văn', 'dao van'], answerText: 'đạo văn', explain: 'Vi phạm quyền tác giả.' },
    { type: 'mcq', q: 'Khi chuyển lời dẫn trực tiếp sang gián tiếp, cần:', options: ['bỏ ngoặc kép, đổi xưng hô, từ chỉ thời gian cho phù hợp', 'giữ nguyên mọi thứ', 'thêm dấu ngoặc kép', 'bỏ luôn nội dung lời dẫn'], answer: 0, explain: 'Điều chỉnh cho phù hợp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Với tài liệu trên trang web, nên ghi thêm ngày truy cập trong danh mục tài liệu tham khảo.', answer: true, explain: 'Trang web có thể thay đổi nội dung.' },
    { type: 'short', q: 'Phần được dẫn trực tiếp thường được đặt trong dấu gì (“dấu ngoặc …”)?', answer: ['ngoặc kép', 'kép', 'ngoac kep', 'dấu ngoặc kép'], answerText: 'dấu ngoặc kép', explain: 'Thường đứng sau dấu hai chấm.' },
    { type: 'mcq', q: 'Danh mục tài liệu tham khảo thường đặt ở:', options: ['cuối bài viết', 'đầu nhan đề', 'giữa mỗi đoạn', 'không cần có'], answer: 0, explain: 'Giúp người đọc kiểm chứng.' }
  ]
});
})();
