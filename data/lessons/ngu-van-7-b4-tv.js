/* Ngữ văn 7 – Bài 4. Thực hành tiếng Việt: Ngữ cảnh và nghĩa của từ ngữ trong ngữ cảnh; dấu ngoặc đơn, dấu ngoặc kép. Ví dụ là ca dao (văn học dân gian) và câu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b4-tv', {
  objectives: [
    'Hiểu ngữ cảnh là gì; phân biệt bối cảnh ngôn ngữ (văn cảnh) và bối cảnh ngoài ngôn ngữ (tình huống giao tiếp).',
    'Giải thích được nghĩa của từ ngữ trong ngữ cảnh cụ thể.',
    'Nhận biết và sử dụng đúng dấu ngoặc đơn, dấu ngoặc kép.'
  ],
  intro: 'Cùng là câu “Giỏi quá nhỉ!”, khi cô khen bạn đạt điểm cao thì đó là lời khen thật; nhưng khi bạn vừa làm đổ cả lọ mực mà ai đó nói vậy thì lại là lời mỉa. Nghĩa của từ ngữ phụ thuộc rất nhiều vào <b>ngữ cảnh</b>.',
  steps: [
    { title: 'Ngữ cảnh là gì?', html: `<p><b>Ngữ cảnh</b> là bối cảnh trong đó một đơn vị ngôn ngữ (từ, cụm từ, câu) được sử dụng. Ngữ cảnh gồm:</p>
      <ul><li><b>Bối cảnh ngôn ngữ (văn cảnh)</b>: các từ, câu, đoạn đứng trước và sau đơn vị ấy.</li><li><b>Bối cảnh ngoài ngôn ngữ</b>: người nói (viết), người nghe (đọc), thời gian, địa điểm, hoàn cảnh giao tiếp, mục đích nói.</li></ul>
      <div class="box key">Dựa vào ngữ cảnh, ta hiểu đúng nghĩa của từ ngữ, nhất là từ nhiều nghĩa và từ dùng theo nghĩa chuyển.</div>`,
      svg: S.mindmap({ center: 'Ngữ cảnh', branches: [{ title: 'Văn cảnh', items: ['Từ, câu đứng trước', 'Từ, câu đứng sau'] }, { title: 'Người tham gia', items: ['Người nói (viết)', 'Người nghe (đọc)'] }, { title: 'Hoàn cảnh', items: ['Thời gian, địa điểm', 'Mục đích giao tiếp'] }] }),
      caption: 'Các yếu tố của ngữ cảnh.' },
    { title: 'Nghĩa của từ ngữ trong ngữ cảnh', html: `<table class="tbl"><tr><th>Câu</th><th>Nghĩa của “xuân”</th></tr>
      <tr><td>Mùa <b>xuân</b> cây cối đâm chồi.</td><td>Mùa đầu tiên trong năm.</td></tr>
      <tr><td>Bà đã ngoài tám mươi <b>xuân</b>.</td><td>Tuổi (tám mươi năm).</td></tr>
      <tr><td>Tuổi <b>xuân</b> đẹp nhất là khi được cống hiến.</td><td>Tuổi trẻ, thời thanh xuân.</td></tr></table>
      <p>Cách làm: đọc cả câu, cả đoạn → xem từ ấy nói về đối tượng nào → đối chiếu nghĩa gốc → suy ra nghĩa trong ngữ cảnh.</p>` },
    { title: 'Tình huống giao tiếp quyết định nghĩa', html: `<p>Ca dao: <i>“Đêm trăng thanh anh mới hỏi nàng / Tre non đủ lá đan sàng nên chăng?”</i></p>
      <p>Tách khỏi ngữ cảnh, câu hỏi chỉ bàn việc đan sàng (một đồ dùng đan bằng tre). Nhưng trong tình huống “đêm trăng thanh”, chàng trai hỏi cô gái, “tre non đủ lá” ngầm chỉ hai người đã đến tuổi trưởng thành, còn “đan sàng” ngầm chỉ chuyện nên duyên vợ chồng.</p>` },
    { title: 'Dấu ngoặc đơn', html: `<p><b>Dấu ngoặc đơn ( )</b> dùng để đánh dấu phần có chức năng <b>chú thích</b>: giải thích, thuyết minh, bổ sung thông tin.</p>
      <ul><li>Đồng bào Tây Nguyên đánh chiêng (nhạc cụ bằng đồng, hình tròn, có núm hoặc không có núm) trong các lễ hội của buôn làng.</li><li>Nguyễn Du (1765 – 1820) là tác giả “Truyện Kiều”.</li></ul>
      <div class="box tip">Bỏ phần trong ngoặc đơn, câu vẫn đủ ý; phần trong ngoặc chỉ giúp hiểu rõ hơn.</div>` },
    { title: 'Dấu ngoặc kép', html: `<p><b>Dấu ngoặc kép “ ”</b> dùng để:</p>
      <table class="tbl"><tr><th>Công dụng</th><th>Ví dụ</th></tr>
      <tr><td>Đánh dấu lời dẫn trực tiếp</td><td>Mẹ dặn: “Đi học về nhớ đóng cổng.”</td></tr>
      <tr><td>Đánh dấu từ ngữ hiểu theo nghĩa đặc biệt hoặc có hàm ý mỉa mai</td><td>Chú mèo “ca sĩ” kêu suốt đêm khiến cả nhà mất ngủ.</td></tr>
      <tr><td>Đánh dấu tên tác phẩm, tờ báo, tập san…</td><td>Em vừa đọc xong “Dế Mèn phiêu lưu kí”.</td></tr></table>` }
  ],
  summary: 'Ngữ cảnh gồm bối cảnh ngôn ngữ (các từ, câu xung quanh) và bối cảnh ngoài ngôn ngữ (người nói, người nghe, thời gian, địa điểm, mục đích). Muốn hiểu đúng nghĩa của từ ngữ phải đặt nó trong ngữ cảnh. Dấu ngoặc đơn đánh dấu phần chú thích; dấu ngoặc kép đánh dấu lời dẫn trực tiếp, từ ngữ có nghĩa đặc biệt (hoặc mỉa mai), tên tác phẩm, báo chí.',
  examples: [
    { title: 'Giải thích nghĩa trong ngữ cảnh', problem: 'Giải thích nghĩa của từ “ngọt” trong: “Cô giáo nói giọng ngọt ngào, dễ nghe.” và “Con dao này sắc ngọt.”', solution: 'Trong câu 1, “ngọt” (ngọt ngào) chỉ giọng nói êm dịu, dễ chịu. Trong câu 2, “ngọt” chỉ mức độ sắc, cắt dễ dàng, êm tay. Cả hai đều là nghĩa chuyển của “ngọt” (vị như đường), được hiểu nhờ từ ngữ đi kèm (giọng nói, con dao sắc).' },
    { title: 'Công dụng dấu ngoặc đơn', problem: 'Nêu công dụng của dấu ngoặc đơn: “Cồng chiêng (nhạc cụ bằng đồng) vang lên trong đêm hội.”', solution: 'Dấu ngoặc đơn đánh dấu phần chú thích, giải thích cho từ “cồng chiêng” để người đọc hiểu rõ đó là loại nhạc cụ gì.' },
    { title: 'Công dụng dấu ngoặc kép', problem: 'Nêu công dụng của dấu ngoặc kép: Lan được cả lớp gọi là “từ điển sống”.', solution: 'Dấu ngoặc kép đánh dấu từ ngữ được hiểu theo nghĩa đặc biệt: “từ điển sống” không phải là quyển từ điển mà chỉ người hiểu biết rộng, hỏi gì cũng biết.' }
  ],
  exercises: [
    { question: 'Giải thích nghĩa của từ “đầu” trong ba câu: (a) Em đội mũ lên đầu. (b) Nhà em ở đầu làng. (c) Bạn Minh đứng đầu lớp về môn Toán.', hints: ['Nghĩa gốc: bộ phận cơ thể.', '(b) và (c): vị trí, thứ bậc.'], solution: '(a) Nghĩa gốc: bộ phận trên cùng của cơ thể người. (b) Nghĩa chuyển: phần đầu tiên, vị trí đầu của một khoảng không gian (đầu làng). (c) Nghĩa chuyển: vị trí cao nhất, thứ nhất trong một tập thể.' },
    { question: 'Đặt dấu ngoặc đơn hoặc ngoặc kép vào chỗ thích hợp: Bác Hồ nói Không có gì quý hơn độc lập, tự do. ; Chè lam món bánh làm từ bột gạo nếp, mật mía, gừng là đặc sản xứ Nghệ.', hints: ['Câu 1 có lời dẫn trực tiếp.', 'Câu 2 có phần giải thích cho “chè lam”.'], solution: 'Bác Hồ nói: “Không có gì quý hơn độc lập, tự do.” – ngoặc kép đánh dấu lời dẫn trực tiếp. Chè lam (món bánh làm từ bột gạo nếp, mật mía, gừng) là đặc sản xứ Nghệ. – ngoặc đơn đánh dấu phần chú thích.' },
    { question: 'Trong tình huống: bạn đi học muộn 20 phút, cô giáo nói “Em đến sớm quá nhỉ!”. Hãy cho biết nghĩa thật của câu nói và dựa vào đâu em hiểu được.', hints: ['Nghĩa đen của “sớm” trái với sự thật như thế nào?', 'Chú ý bối cảnh ngoài ngôn ngữ: ai nói, nói lúc nào.'], solution: 'Nghĩa thật: cô nhắc nhở (hàm ý mỉa nhẹ) rằng bạn đến muộn. Ta hiểu được nhờ bối cảnh ngoài ngôn ngữ: bạn đến muộn 20 phút, người nói là cô giáo, mục đích là nhắc nhở. Từ “sớm” trong ngữ cảnh này mang nghĩa ngược lại.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Ngữ cảnh gồm:', options: ['Bối cảnh ngôn ngữ và bối cảnh ngoài ngôn ngữ', 'Chỉ các từ đứng trước', 'Chỉ người nói', 'Chỉ thời gian'], answer: 0, explain: 'Gồm văn cảnh và tình huống giao tiếp.' },
    { type: 'mcq', q: 'Trong “Bà đã ngoài tám mươi xuân”, “xuân” có nghĩa là:', options: ['Tuổi, năm', 'Mùa xuân', 'Tuổi trẻ', 'Tết'], answer: 0, explain: '“Tám mươi xuân” = tám mươi tuổi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bỏ phần trong dấu ngoặc đơn, câu thường vẫn đủ ý.', answer: true, explain: 'Phần trong ngoặc đơn là chú thích.' },
    { type: 'mcq', q: 'Dấu ngoặc kép trong “Em đọc truyện ‘Sọ Dừa’” có công dụng:', options: ['Đánh dấu tên tác phẩm', 'Đánh dấu lời dẫn trực tiếp', 'Đánh dấu phần chú thích', 'Kết thúc câu'], answer: 0, explain: 'Tên truyện đặt trong ngoặc kép.' },
    { type: 'short', q: 'Dấu câu nào dùng để đánh dấu phần chú thích (giải thích, bổ sung) trong câu? (gõ: ngoặc đơn hoặc ngoặc kép)', answer: ['ngoặc đơn', 'dấu ngoặc đơn'], answerText: 'dấu ngoặc đơn', explain: 'Dấu ngoặc đơn ( ) đánh dấu phần chú thích.' },
    { type: 'mcq', q: 'Trong câu “Chú mèo ‘ca sĩ’ kêu suốt đêm”, dấu ngoặc kép đánh dấu:', options: ['Từ ngữ hiểu theo nghĩa đặc biệt, có ý hài hước', 'Tên tác phẩm', 'Lời dẫn trực tiếp', 'Phần chú thích'], answer: 0, explain: '“Ca sĩ” không dùng theo nghĩa thông thường.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một từ luôn chỉ có một nghĩa, không phụ thuộc ngữ cảnh.', answer: false, explain: 'Nhiều từ có nhiều nghĩa; ngữ cảnh giúp xác định nghĩa.' },
    { type: 'mcq', q: '“Đầu” trong “Bạn Minh đứng đầu lớp” được dùng theo:', options: ['Nghĩa chuyển', 'Nghĩa gốc', 'Nghĩa đồng âm', 'Không có nghĩa'], answer: 0, explain: 'Chỉ vị trí thứ nhất – nghĩa chuyển.' }
  ]
});
})();
