/* Ngữ văn 7 – Bài 3. Thực hành tiếng Việt: Số từ, phó từ. Ví dụ là tục ngữ, ca dao (văn học dân gian) và câu do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b3-tv', {
  objectives: [
    'Nhận biết số từ; phân biệt số từ chỉ số lượng (xác định, ước chừng) và số từ chỉ thứ tự.',
    'Phân biệt số từ với danh từ chỉ đơn vị gắn với số lượng (đôi, cặp, chục, tá…).',
    'Nhận biết phó từ đi kèm danh từ và phó từ đi kèm động từ, tính từ; hiểu ý nghĩa mà phó từ bổ sung.',
    'Sử dụng số từ, phó từ chính xác, hiệu quả khi nói và viết.'
  ],
  intro: '“<b>Ba</b> chú mèo <b>đang</b> nằm sưởi nắng.” – Câu này có hai từ nhỏ nhưng rất quan trọng: “ba” cho biết bao nhiêu chú mèo, “đang” cho biết việc nằm sưởi nắng diễn ra lúc nào. Đó là <b>số từ</b> và <b>phó từ</b>.',
  steps: [
    { title: 'Số từ là gì?', html: `<p><b>Số từ</b> là những từ chỉ <b>số lượng</b> hoặc <b>thứ tự</b> của sự vật.</p>
      <table class="tbl"><tr><th>Loại</th><th>Vị trí</th><th>Ví dụ</th></tr>
      <tr><td>Chỉ số lượng xác định</td><td>Đứng trước danh từ</td><td><b>một</b> quyển sách, <b>hai</b> con trâu, <b>mười</b> học sinh</td></tr>
      <tr><td>Chỉ số lượng ước chừng</td><td>Đứng trước danh từ</td><td><b>vài</b> người, <b>dăm</b> hôm, <b>mươi</b> ngày, <b>dăm ba</b> câu, <b>ba bốn</b> cây</td></tr>
      <tr><td>Chỉ thứ tự</td><td>Đứng sau danh từ (thường kèm “thứ, hạng, số”)</td><td>tầng <b>ba</b>, giải <b>nhất</b>, bài số <b>năm</b>, ngày <b>thứ hai</b></td></tr></table>` },
    { title: 'Phân biệt số từ và danh từ chỉ đơn vị', html: `<p>Các từ <i>đôi, cặp, chục, tá, trăm (nghìn) khi làm đơn vị…</i> trong “một <b>đôi</b> giày”, “hai <b>chục</b> trứng”, “một <b>tá</b> bút chì” là <b>danh từ chỉ đơn vị</b>, không phải số từ: chúng đứng sau số từ và có thể có số từ đứng trước (<i>hai đôi, ba chục</i>).</p>
      <div class="box tip">Mẹo: nếu trước từ đó có thể thêm “một, hai, ba…” thì đó thường là danh từ chỉ đơn vị (<i>một đôi, hai tá</i>).</div>
      <p>Lưu ý nghĩa biểu trưng: trong thành ngữ, tục ngữ, số từ có khi chỉ “nhiều” chứ không chỉ con số cụ thể: <i>“Trăm hay không bằng tay quen”, “ba chìm bảy nổi”, “năm lần bảy lượt”</i>.</p>` },
    { title: 'Phó từ là gì?', html: `<p><b>Phó từ</b> là những từ chuyên <b>đi kèm</b> danh từ, động từ, tính từ để bổ sung ý nghĩa cho các từ ấy. Phó từ không dùng để gọi tên sự vật, hoạt động, đặc điểm.</p>`,
      svg: S.mindmap({ center: 'Phó từ', branches: [{ title: 'Đi kèm danh từ', items: ['những, các, mọi, mỗi, từng', '→ ý nghĩa số lượng'] }, { title: 'Đi kèm động từ, tính từ', items: ['đã, đang, sẽ, vẫn, cũng', 'không, chưa, chẳng', 'hãy, đừng, chớ', 'rất, lắm, quá', 'được, mất, ra'] }] }),
      caption: 'Hai nhóm phó từ.' },
    { title: 'Ý nghĩa phó từ bổ sung cho động từ, tính từ', html: `<table class="tbl"><tr><th>Ý nghĩa</th><th>Phó từ</th><th>Ví dụ</th></tr>
      <tr><td>Thời gian</td><td>đã, đang, sẽ, vừa, mới, sắp</td><td>Em <b>đã</b> làm xong bài.</td></tr>
      <tr><td>Tiếp diễn, tương tự</td><td>vẫn, cứ, còn, cũng, đều</td><td>Trời <b>vẫn</b> mưa.</td></tr>
      <tr><td>Phủ định</td><td>không, chưa, chẳng</td><td>Nó <b>chưa</b> về.</td></tr>
      <tr><td>Cầu khiến</td><td>hãy, đừng, chớ</td><td><b>Đừng</b> nói chuyện riêng!</td></tr>
      <tr><td>Mức độ</td><td>rất, hơi, lắm, quá, cực kì</td><td>Hoa <b>rất</b> thơm.</td></tr>
      <tr><td>Kết quả, hướng</td><td>được, mất, ra, đi</td><td>Em tìm <b>được</b> chìa khoá.</td></tr></table>
      <p>Phó từ có thể đứng <b>trước</b> (đã, rất, không…) hoặc <b>sau</b> (lắm, được, mất…) động từ, tính từ.</p>` },
    { title: 'Tác dụng khi dùng số từ, phó từ', html: `<div class="box key">Số từ giúp thông tin <b>chính xác</b> về số lượng, thứ tự. Phó từ giúp diễn đạt <b>tinh tế</b> thời gian, mức độ, thái độ (khẳng định, phủ định, cầu khiến).</div>
      <p>So sánh: “Trời mưa.” – “Trời <b>vẫn</b> mưa.” (mưa kéo dài, có chút sốt ruột) – “Trời <b>sắp</b> mưa.” (dự báo) – “Trời mưa <b>to quá</b>!” (mức độ, cảm xúc).</p>` }
  ],
  summary: 'Số từ chỉ số lượng (xác định: một, hai…; ước chừng: vài, dăm, mươi…) đứng trước danh từ, hoặc chỉ thứ tự (thứ nhất, hạng ba…) đứng sau danh từ; cần phân biệt với danh từ chỉ đơn vị (đôi, chục, tá). Phó từ đi kèm danh từ (những, các, mọi, mỗi, từng) bổ sung ý nghĩa số lượng; đi kèm động từ, tính từ bổ sung ý nghĩa thời gian, tiếp diễn, phủ định, cầu khiến, mức độ, kết quả.',
  examples: [
    { title: 'Tìm và phân loại số từ', problem: 'Tìm số từ và phân loại: “Lớp em có ba mươi lăm bạn; tổ thứ tư có vài bạn chưa nộp bài.”', solution: '“ba mươi lăm” – số từ chỉ số lượng xác định (đứng trước danh từ “bạn”); “tư” trong “tổ thứ tư” – số từ chỉ thứ tự (đứng sau danh từ “tổ”, kèm “thứ”); “vài” – số từ chỉ số lượng ước chừng.' },
    { title: 'Số từ hay danh từ chỉ đơn vị?', problem: 'Trong “Mẹ mua hai chục quả trứng và một đôi dép”, từ nào là số từ, từ nào là danh từ chỉ đơn vị?', solution: 'Số từ: “hai”, “một”. Danh từ chỉ đơn vị: “chục”, “đôi” (chúng đứng sau số từ; có thể nói “ba chục”, “hai đôi”).' },
    { title: 'Ý nghĩa của phó từ', problem: 'Chỉ ra phó từ và ý nghĩa: “Bà vẫn còn nhớ rất rõ những ngày ấy.”', solution: '“vẫn, còn” – bổ sung ý nghĩa tiếp diễn cho động từ “nhớ”; “rất” – bổ sung ý nghĩa mức độ cho tính từ “rõ”; “những” – phó từ đi kèm danh từ “ngày”, chỉ số lượng nhiều.' }
  ],
  exercises: [
    { question: 'Tìm số từ trong câu ca dao “Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao.” và cho biết ý nghĩa của chúng.', hints: ['Số từ đứng trước danh từ “cây”.', 'Hai số lượng ít – nhiều khác nhau tạo nên ý nghĩa gì?'], solution: 'Số từ “một”, “ba” (chỉ số lượng). Đối lập “một cây” (đơn lẻ) với “ba cây chụm lại” (nhiều, cùng nhau) để khẳng định sức mạnh của sự đoàn kết. “Ba” ở đây mang nghĩa biểu trưng cho “nhiều”.' },
    { question: 'Điền phó từ thích hợp và cho biết ý nghĩa: “Em … làm bài tập xong, … em … đi đá bóng.”', hints: ['Việc làm bài tập hoàn thành trước.', 'Việc đá bóng diễn ra sau, trong tương lai.'], solution: 'Ví dụ: “Em <b>vừa</b> làm bài tập xong, <b>bây giờ</b> em <b>sẽ</b> đi đá bóng.” – “vừa”: thời gian (mới xảy ra); “sẽ”: thời gian (tương lai). (“bây giờ” là từ chỉ thời gian, không phải phó từ.)' },
    { question: 'Viết 3 – 4 câu kể về một buổi sáng ở trường, có dùng ít nhất một số từ chỉ thứ tự, một số từ ước chừng và hai phó từ khác ý nghĩa. Gạch chân các từ đó.', hints: ['Số từ thứ tự: tiết thứ nhất, tầng hai…', 'Phó từ: đã, đang, rất, không…'], solution: 'Ví dụ: Tiết <u>thứ nhất</u> sáng nay là giờ Ngữ văn. Cô giáo <u>đang</u> giảng bài thì <u>vài</u> chú chim sẻ đậu trên bậu cửa sổ. Cả lớp <u>rất</u> muốn nhìn nhưng <u>không</u> ai quay ra. (thứ nhất – thứ tự; vài – ước chừng; đang – thời gian; rất – mức độ; không – phủ định)' }
  ],
  quiz: [
    { type: 'short', q: 'Tìm số từ trong câu: “Ba chú mèo con nằm sưởi nắng bên hiên.”', answer: ['ba'], answerText: 'ba', explain: '“Ba” chỉ số lượng, đứng trước danh từ.' },
    { type: 'mcq', q: 'Từ nào là số từ chỉ số lượng ước chừng?', options: ['vài', 'thứ nhất', 'đôi', 'những'], answer: 0, explain: '“vài” là số lượng ước chừng; “đôi” là danh từ chỉ đơn vị; “những” là phó từ.' },
    { type: 'mcq', q: 'Trong “tầng ba”, từ “ba” là:', options: ['Số từ chỉ thứ tự', 'Số từ chỉ số lượng', 'Phó từ', 'Danh từ chỉ đơn vị'], answer: 0, explain: 'Đứng sau danh từ, chỉ thứ tự.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong “một tá bút chì”, “tá” là số từ.', answer: false, explain: '“tá” là danh từ chỉ đơn vị (12 cái).' },
    { type: 'mcq', q: 'Phó từ “đã” trong “Em đã làm xong bài tập.” bổ sung ý nghĩa:', options: ['Thời gian', 'Mức độ', 'Phủ định', 'Cầu khiến'], answer: 0, explain: 'Hành động xảy ra trước, đã hoàn thành.' },
    { type: 'mcq', q: 'Phó từ nào mang ý nghĩa cầu khiến?', options: ['hãy', 'rất', 'đang', 'cũng'], answer: 0, explain: '“hãy, đừng, chớ” là phó từ cầu khiến.' },
    { type: 'mcq', q: 'Phó từ đi kèm danh từ là:', options: ['những, các, mọi, mỗi', 'đã, đang, sẽ', 'rất, lắm, quá', 'không, chưa, chẳng'], answer: 0, explain: 'Nhóm này bổ sung ý nghĩa số lượng cho danh từ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong câu “Hoa hồng thơm lắm.”, “lắm” là phó từ chỉ mức độ đứng sau tính từ.', answer: true, explain: '“lắm” bổ sung mức độ cho “thơm”.' }
  ]
});
})();
