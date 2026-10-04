/* Ngữ văn 9 – Bài 6. Thực hành tiếng Việt: Câu đơn và câu ghép; các kiểu câu ghép và phương tiện nối các vế câu ghép. Ngữ liệu: câu văn do nhóm biên soạn tự viết (dựa trên truyện kể lại “Ba chàng sinh viên”), ca dao, tục ngữ (văn học dân gian). */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b6-tv', {
  objectives: [
    'Phân biệt câu đơn và câu ghép dựa vào số cụm chủ – vị nòng cốt.',
    'Nhận biết hai kiểu câu ghép: câu ghép đẳng lập và câu ghép chính phụ; xác định quan hệ ý nghĩa giữa các vế.',
    'Nhận biết và sử dụng các phương tiện nối vế câu ghép: kết từ, cặp kết từ, cặp từ hô ứng, dấu câu.'
  ],
  intro: 'Lời giải của thám tử thường là những câu ghép chặt chẽ: “Vì có đất sét trên bàn nên kẻ xem trộm là người vừa ở hố nhảy về.” Nắm vững câu ghép giúp em trình bày suy luận mạch lạc, logic.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<p>(1) Holmes nhặt mẩu ruột chì gãy.</p>
<p>(2) Watson ghi chép, còn Holmes xem xét căn phòng.</p>
<p>(3) Vì chìa khoá bị bỏ quên ở cửa nên kẻ lạ vào được phòng.</p>
<p>(4) Nếu Gin-crít không nhận lỗi thì kì thi sẽ không còn công bằng.</p>
<p>(5) Holmes đi đến đâu, Watson theo đến đấy.</p>
<p>(6) Trời đã tối; ông Xôm vẫn chưa về.</p>
<p>(7) Tuy nhà nghèo nhưng Gin-crít học rất giỏi.</p>
<p>(8) <i>Trời mưa, đất thịt trơn như mỡ, dò đến hàng nem chả muốn ăn.</i> (Ca dao)</p>`,
    source: 'Câu (1) – (7) do nhóm biên soạn tự viết dựa trên truyện kể lại “Ba chàng sinh viên” (A. Conan Doyle – phạm vi công cộng); câu (8) là ca dao (văn học dân gian).'
  },
  steps: [
    { title: 'Câu đơn và câu ghép', html: `<ul><li><b>Câu đơn</b>: có <b>một</b> cụm chủ – vị nòng cốt. Ví dụ (1): <u>Holmes</u> / <u>nhặt mẩu ruột chì gãy</u>.</li>
      <li><b>Câu ghép</b>: có <b>từ hai</b> cụm chủ – vị nòng cốt trở lên, mỗi cụm là một <b>vế</b>, không vế nào bao chứa vế nào. Ví dụ (2): <u>Watson</u> / <u>ghi chép</u>, còn <u>Holmes</u> / <u>xem xét căn phòng</u>.</li></ul>
      <div class="box key">Cách nhận biết: tìm tất cả các cụm C – V; nếu có từ hai cụm C – V ngang hàng, làm nòng cốt → câu ghép.</div>` },
    { title: 'Hai kiểu câu ghép', html: `<p>Căn cứ quan hệ giữa các vế:</p>`,
      svg: S.mindmap({ center: 'Câu ghép', branches: [{ title: 'Đẳng lập', items: ['Vế ngang hàng', 'Liệt kê, đối lập, lựa chọn'] }, { title: 'Chính phụ', items: ['Vế phụ – vế chính', 'Nguyên nhân, điều kiện, nhượng bộ'] }, { title: 'Kết từ', items: ['và, còn, nhưng, hay', 'vì, nếu, tuy'] }, { title: 'Không dùng kết từ', items: ['Dấu phẩy, chấm phẩy', 'Hai chấm'] }] }),
      caption: 'Các kiểu câu ghép và phương tiện nối.' },
    { title: 'Câu ghép đẳng lập', html: `<ul><li>Các vế bình đẳng về ngữ pháp; thường nối bằng <b>kết từ</b> (và, còn, nhưng, hay, hoặc…) hoặc <b>dấu câu</b> (phẩy, chấm phẩy, hai chấm).</li>
      <li>(2) “còn” – quan hệ đối chiếu; (6) dấu chấm phẩy – quan hệ tương phản ngầm.</li>
      <li>Ngoài ra, các vế câu ghép còn có thể nối bằng <b>cặp từ hô ứng</b> (đâu… đấy, bao nhiêu… bấy nhiêu, vừa… đã…), như câu (5): “đến đâu… đến đấy”.</li></ul>` },
    { title: 'Câu ghép chính phụ', html: `<p>Thường nối bằng <b>cặp kết từ</b>; vế phụ đứng trước hoặc sau vế chính.</p>
      <table class="tbl"><tr><th>Quan hệ</th><th>Cặp kết từ</th><th>Ví dụ</th></tr>
      <tr><td>Nguyên nhân – kết quả</td><td>vì/do/bởi… nên/cho nên</td><td>(3)</td></tr>
      <tr><td>Điều kiện/giả thiết – kết quả</td><td>nếu/giá… thì</td><td>(4)</td></tr>
      <tr><td>Nhượng bộ – tương phản</td><td>tuy/mặc dù… nhưng</td><td>(7)</td></tr>
      <tr><td>Mục đích</td><td>để, nhằm…</td><td>Em học chăm để bố mẹ vui lòng.</td></tr></table>`,
      svg: S.flow({ w: 620, items: [{ title: 'Tìm C – V', text: 'Đếm cụm nòng cốt' }, { title: '≥ 2 cụm?', text: 'Câu ghép' }, { title: 'Xét từ nối', text: 'và, còn / vì… nên' }, { title: 'Kết luận', text: 'Đẳng lập / chính phụ' }] }),
      caption: 'Quy trình phân tích câu ghép.' }
  ],
  summary: 'Câu đơn có một cụm C – V nòng cốt; câu ghép có từ hai cụm C – V nòng cốt trở lên. Câu ghép đẳng lập: các vế ngang hàng, thường nối bằng kết từ (và, còn, nhưng, hay…) hoặc dấu câu. Câu ghép chính phụ: vế phụ – vế chính, thường nối bằng cặp kết từ chỉ nguyên nhân (vì… nên), điều kiện (nếu… thì), nhượng bộ (tuy… nhưng), mục đích (để). Các vế còn có thể nối bằng cặp từ hô ứng (đâu… đấy, bao nhiêu… bấy nhiêu).',
  examples: [
    { title: 'Phân tích câu ghép chính phụ', problem: 'Phân tích cấu trúc câu (3) và nêu quan hệ giữa các vế.', solution: 'Vế 1 (phụ): Vì <u>chìa khoá</u> / <u>bị bỏ quên ở cửa</u>; vế 2 (chính): nên <u>kẻ lạ</u> / <u>vào được phòng</u>. Cặp kết từ “vì… nên” biểu thị quan hệ nguyên nhân – kết quả. Đây là câu ghép chính phụ.' },
    { title: 'Câu ghép dùng cặp từ hô ứng', problem: 'Câu (5) nối các vế bằng phương tiện gì?', solution: 'Câu (5) có hai vế: “Holmes đi đến đâu” và “Watson theo đến đấy”, nối bằng cặp từ hô ứng “đâu… đấy”. Hai vế phụ thuộc chặt chẽ về nghĩa: Watson luôn đi theo Holmes. Cặp từ hô ứng là một phương tiện nối vế câu ghép thường gặp, giúp hai vế gắn bó, tương ứng với nhau.' },
    { title: 'Câu ghép không dùng kết từ', problem: 'Câu ca dao (8) có mấy vế? Nối bằng gì?', solution: 'Có ba vế: “Trời mưa”, “đất thịt trơn như mỡ”, “dò đến hàng nem chả muốn ăn”, nối bằng dấu phẩy, không dùng kết từ. Quan hệ ý nghĩa ngầm: trời mưa (nguyên nhân) → đất trơn → đi chợ vất vả, chẳng còn thiết ăn. Câu ghép không dùng kết từ khiến lời ca dao gọn, tự nhiên.' }
  ],
  exercises: [
    { question: 'Xác định câu đơn, câu ghép: (a) Ông Xôm hốt hoảng tìm đến. (b) Ông ra ngoài hơn một tiếng, khi về, cửa phòng vẫn mở. (c) Holmes mỉm cười và đưa ra ba cục đất sét.', hints: ['Đếm cụm C – V nòng cốt.', 'Câu (c) có một chủ ngữ với hai vị ngữ.'], solution: '(a) Câu đơn: C “Ông Xôm” – V “hốt hoảng tìm đến”. (b) Câu ghép: vế 1 “Ông / ra ngoài hơn một tiếng”, vế 2 “cửa phòng / vẫn mở” (“khi về” là trạng ngữ). (c) Câu đơn có vị ngữ ghép: một chủ ngữ “Holmes” với hai vị ngữ “mỉm cười” và “đưa ra ba cục đất sét”.' },
    { question: 'Viết câu ghép theo yêu cầu: (a) quan hệ điều kiện – kết quả; (b) quan hệ nhượng bộ; (c) dùng cặp từ hô ứng “bao nhiêu… bấy nhiêu”.', hints: ['nếu… thì; tuy… nhưng.', 'Hai vế đều có C – V.'], solution: '(a) Nếu chúng ta quan sát kĩ thì chúng ta sẽ tìm ra manh mối. (b) Tuy đề thi rất khó nhưng các bạn đều làm bài nghiêm túc. (c) Holmes suy nghĩ bao nhiêu, vụ án sáng tỏ bấy nhiêu.' },
    { question: 'Viết đoạn văn (5 – 7 câu) trình bày lập luận của Holmes, có ít nhất hai câu ghép chính phụ; gạch chân cặp kết từ.', hints: ['Nguyên nhân – kết quả, điều kiện – kết quả.', 'Dựa vào manh mối đất sét, vết rạch.'], solution: 'Ví dụ: Holmes bắt đầu từ cục đất sét đen trên bàn. <u>Vì</u> đất lẫn mùn cưa giống hệt đất ở hố nhảy xa <u>nên</u> kẻ xem trộm hẳn vừa đi tập về. <u>Nếu</u> anh ta cầm theo đôi giày đinh <u>thì</u> vết rạch trên mặt da cũng được giải thích. Người ấy lại phải đủ cao để nhìn thấy đề thi qua cửa sổ. <u>Tuy</u> ba sinh viên đều có thể gây án <u>nhưng</u> chỉ Gin-crít hội đủ mọi dấu hiệu.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Câu ghép là câu:', options: ['có từ hai cụm chủ – vị nòng cốt trở lên', 'chỉ có một cụm chủ – vị', 'không có chủ ngữ', 'không có cấu tạo chủ – vị'], answer: 0, explain: 'Mỗi cụm là một vế.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Vì chìa khoá bị bỏ quên ở cửa nên kẻ lạ vào được phòng.” là câu ghép chính phụ.', answer: true, explain: 'Cặp kết từ vì… nên.' },
    { type: 'mcq', q: 'Cặp kết từ “tuy… nhưng” biểu thị quan hệ:', options: ['nhượng bộ – tương phản', 'nguyên nhân – kết quả', 'điều kiện – kết quả', 'mục đích'], answer: 0, explain: 'Tuy nhà nghèo nhưng học giỏi.' },
    { type: 'short', q: 'Điền kết từ còn thiếu: “Nếu Gin-crít không nhận lỗi … kì thi sẽ không còn công bằng.” (một chữ).', answer: ['thì', 'thi'], answerText: 'thì', explain: 'Cặp nếu… thì.' },
    { type: 'mcq', q: '“Holmes đi đến đâu, Watson theo đến đấy.” nối các vế bằng:', options: ['cặp từ hô ứng', 'dấu hai chấm', 'kết từ “và”', 'không có phương tiện nối'], answer: 0, explain: 'đâu… đấy.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Holmes mỉm cười và đưa ra ba cục đất sét.” là câu ghép.', answer: false, explain: 'Một chủ ngữ, hai vị ngữ – câu đơn.' },
    { type: 'short', q: 'Câu ghép có các vế ngang hàng về ngữ pháp gọi là câu ghép … … (hai chữ).', answer: ['đẳng lập', 'dang lap'], answerText: 'đẳng lập', explain: 'Khác câu ghép chính phụ.' },
    { type: 'mcq', q: 'Câu nào là câu ghép?', options: ['Trời đã tối; ông Xôm vẫn chưa về.', 'Holmes nhặt mẩu ruột chì.', 'Ông Xôm hốt hoảng tìm đến.', 'Gin-crít cúi đầu nhận lỗi.'], answer: 0, explain: 'Hai cụm C – V nối bằng dấu chấm phẩy.' }
  ]
});
})();
