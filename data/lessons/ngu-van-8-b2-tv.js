/* Ngữ văn 8 – Bài 2. Thực hành tiếng Việt: Từ tượng hình, từ tượng thanh; biện pháp tu từ đảo ngữ. Ngữ liệu: thơ Nôm cổ của Nguyễn Khuyến, Bà Huyện Thanh Quan (phạm vi công cộng), ca dao và câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b2-tv', {
  objectives: [
    'Nhận biết được từ tượng hình, từ tượng thanh và phân tích được tác dụng của chúng trong văn bản.',
    'Nhận biết được biện pháp tu từ đảo ngữ và nêu được tác dụng nhấn mạnh, gợi hình, tạo nhịp điệu.',
    'Vận dụng được từ tượng hình, từ tượng thanh, đảo ngữ khi viết đoạn văn miêu tả, biểu cảm.'
  ],
  intro: 'Vì sao đọc câu “Lom khom dưới núi tiều vài chú” ta như thấy ngay dáng người tiều phu cúi mình dưới chân núi? Bí mật nằm ở một từ tượng hình được đặt lên đầu câu. Bài học hôm nay giúp em “giải mã” những bí mật ấy.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<div class="poem">(1) Lom khom dưới núi tiều vài chú,<br>Lác đác bên sông chợ mấy nhà.<br><i>(Bà Huyện Thanh Quan, “Qua Đèo Ngang”)</i><br><br>(2) Ngõ tối đêm sâu đóm lập loè.<br><i>(Nguyễn Khuyến, “Thu ẩm”)</i><br><br>(3) Mưa rơi lộp độp trên mái tôn. Ngoài sân, lũ gà con lích chích gọi mẹ, cái mào đỏ chót của con gà trống lấp ló sau bụi chuối.<br><i>(Câu văn do nhóm biên soạn viết)</i></div>`,
    source: '(1) Hai câu trong “Qua Đèo Ngang” – Bà Huyện Thanh Quan (thế kỉ XIX); (2) một câu trong “Thu ẩm” – Nguyễn Khuyến (1835 – 1909): thơ cổ, phạm vi công cộng. (3) Câu văn do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Từ tượng hình và từ tượng thanh', html: `<table class="tbl"><tr><th></th><th>Từ tượng hình</th><th>Từ tượng thanh</th></tr>
      <tr><td>Khái niệm</td><td>Gợi tả hình ảnh, dáng vẻ, trạng thái của sự vật</td><td>Mô phỏng âm thanh của tự nhiên, con người, sự vật</td></tr>
      <tr><td>Ví dụ</td><td>lom khom, lác đác, lập loè, khấp khểnh, lấp ló, thướt tha</td><td>lộp độp, lích chích, róc rách, ầm ầm, thình thịch, ríu rít</td></tr>
      <tr><td>Tác dụng</td><td colspan="2">Gợi hình ảnh, âm thanh cụ thể, sinh động; có giá trị biểu cảm cao; thường dùng trong văn miêu tả, tự sự, thơ</td></tr></table>
      <p>Phần lớn từ tượng hình, tượng thanh là <b>từ láy</b>, nhưng không phải từ láy nào cũng là từ tượng hình, tượng thanh (ví dụ: <i>xinh xắn, nhỏ nhẹ</i> không mô phỏng hình dáng hay âm thanh cụ thể).</p>` },
    { title: 'Phân tích tác dụng của từ tượng hình, tượng thanh', html: `<p>Trong ngữ liệu (3): <i>lộp độp</i> (tiếng mưa rơi từng hạt to trên mái tôn), <i>lích chích</i> (tiếng gà con kêu) là từ tượng thanh; <i>lấp ló</i> (lúc ẩn lúc hiện) là từ tượng hình. Nhờ chúng, cảnh sân nhà ngày mưa hiện lên có cả âm thanh lẫn hình ảnh.</p>
      <div class="box key">Cách trình bày tác dụng: <b>Từ … gợi tả/mô phỏng …</b> → <b>giúp người đọc hình dung …</b> → <b>thể hiện cảm xúc/thái độ …</b> của người viết.</div>` },
    { title: 'Biện pháp tu từ đảo ngữ', html: `<p><b>Đảo ngữ</b> là biện pháp thay đổi trật tự thông thường của các thành phần câu (thường đưa vị ngữ lên trước chủ ngữ) nhằm <b>nhấn mạnh</b>, gợi hình ảnh, cảm xúc và tạo nhịp điệu cho câu văn, câu thơ.</p>
      <p>Trật tự thông thường: <i>Vài chú tiều <u>lom khom</u> dưới núi. Mấy nhà chợ <u>lác đác</u> bên sông.</i><br>Trật tự đảo: <i><u>Lom khom</u> dưới núi tiều vài chú, / <u>Lác đác</u> bên sông chợ mấy nhà.</i></p>`,
      svg: S.flow({ items: [{ title: 'Câu thường', text: 'Chủ ngữ + Vị ngữ' }, { title: 'Đảo ngữ', text: 'Vị ngữ (từ gợi hình) lên đầu câu' }, { title: 'Hiệu quả', text: 'Nhấn mạnh hình ảnh, cảm xúc, nhịp điệu' }] }),
      caption: 'Cơ chế và hiệu quả của biện pháp đảo ngữ.' },
    { title: 'Kết hợp đảo ngữ với từ tượng hình', html: `<p>Trong “Qua Đèo Ngang”, hai từ tượng hình <i>lom khom, lác đác</i> được đảo lên đầu câu: dáng người nhỏ bé, cúi lom khom và vài mái nhà thưa thớt được nhấn mạnh; cảnh Đèo Ngang càng hoang sơ, vắng vẻ, gợi nỗi buồn cô đơn của người lữ khách.</p>
      <p>Ca dao cũng dùng đảo ngữ: <i>“<u>Mênh mông</u> bát ngát cánh đồng”</i> – đảo trạng thái lên trước để nhấn mạnh sự rộng lớn.</p>` },
    { title: 'Lưu ý khi sử dụng', html: `<ul><li>Chọn từ tượng hình, tượng thanh <b>phù hợp đối tượng</b>: tiếng suối “róc rách”, không nói tiếng suối “ầm ầm” (trừ khi thác lớn).</li><li>Không lạm dụng: quá nhiều từ láy dồn dập khiến câu văn rườm rà.</li><li>Đảo ngữ phải giữ được nghĩa rõ ràng; không đảo tuỳ tiện gây khó hiểu.</li></ul>` }
  ],
  summary: 'Từ tượng hình gợi tả hình ảnh, dáng vẻ, trạng thái; từ tượng thanh mô phỏng âm thanh. Chúng giúp câu văn cụ thể, sinh động, giàu biểu cảm. Đảo ngữ thay đổi trật tự thông thường của câu (thường đưa vị ngữ lên trước) để nhấn mạnh hình ảnh, cảm xúc và tạo nhịp điệu, như “Lom khom dưới núi tiều vài chú”.',
  examples: [
    { title: 'Phân loại từ', problem: 'Xếp các từ sau vào hai nhóm từ tượng hình và từ tượng thanh: “lênh khênh, thình thịch, lạch bạch, khúc khuỷu, xào xạc, lừ đừ”.', solution: 'Tượng hình: lênh khênh (cao mà không vững), khúc khuỷu (quanh co, gấp khúc), lừ đừ (chậm chạp, uể oải). Tượng thanh: thình thịch (tiếng tim đập, bước chân nặng), xào xạc (tiếng lá cây). Riêng “lạch bạch” vừa mô phỏng tiếng bước chân vừa gợi dáng đi nặng nề – có thể xếp vào cả hai nhóm tuỳ ngữ cảnh.' },
    { title: 'Khôi phục trật tự và nêu tác dụng đảo ngữ', problem: 'Viết lại câu “Lác đác bên sông chợ mấy nhà” theo trật tự thông thường và cho biết tác dụng của đảo ngữ.', solution: 'Trật tự thường: “Mấy nhà chợ lác đác bên sông.” Khi đảo “lác đác” lên đầu, sự thưa thớt, ít ỏi được nhấn mạnh ngay từ đầu câu, gợi cảnh vắng vẻ, hiu hắt; đồng thời tạo nhịp thơ 2/2/3 cân đối và tạo thế đối với câu “Lom khom dưới núi tiều vài chú”.' },
    { title: 'Dùng từ tượng thanh cho chính xác', problem: 'Chọn từ thích hợp điền vào chỗ trống: “Tiếng suối chảy … qua khe đá” (ầm ầm / róc rách / oang oang).', solution: 'Chọn “róc rách” vì mô phỏng tiếng nước chảy nhẹ qua khe đá. “Ầm ầm” hợp với tiếng thác, sóng lớn; “oang oang” dùng cho tiếng nói to của người.' }
  ],
  exercises: [
    { question: 'Tìm từ tượng hình, từ tượng thanh trong câu: “Trên con đường khấp khểnh, chiếc xe đạp cũ kêu lọc cọc, bóng hai bà cháu nhấp nhô dưới nắng chiều.”', hints: ['Từ nào gợi hình dáng con đường, bóng người?', 'Từ nào mô phỏng âm thanh chiếc xe?'], solution: 'Tượng hình: “khấp khểnh” (đường lồi lõm, không bằng phẳng), “nhấp nhô” (lúc lên lúc xuống). Tượng thanh: “lọc cọc” (tiếng xe cũ kêu khi chạy). Các từ giúp người đọc vừa thấy vừa nghe cảnh hai bà cháu trên đường.' },
    { question: 'Xác định biện pháp đảo ngữ trong câu “Xanh ngắt một màu những cánh đồng lúa thì con gái” và nêu tác dụng.', hints: ['Tìm cụm chỉ đặc điểm được đưa lên đầu câu.', 'Trật tự thông thường: chủ ngữ “những cánh đồng lúa…” đứng trước.'], solution: 'Cụm vị ngữ “xanh ngắt một màu” được đảo lên trước chủ ngữ “những cánh đồng lúa thì con gái”. Tác dụng: nhấn mạnh màu xanh tươi, trải dài của đồng lúa, thể hiện cảm xúc thích thú, tự hào của người viết.' },
    { question: 'Viết đoạn văn (5 – 6 câu) tả một buổi sáng ở trường, có dùng ít nhất hai từ tượng hình, hai từ tượng thanh và một câu đảo ngữ. Gạch chân các từ ngữ đó.', hints: ['Nghĩ đến âm thanh: tiếng trống, tiếng chim, tiếng cười.', 'Có thể đảo ngữ kiểu “Rộn ràng tiếng cười…”.'], solution: 'Ví dụ: “Tùng! Tùng! Tùng!” – tiếng trống trường vang lên giục giã. Trên những cành phượng, bầy chim sẻ ríu rít chuyền cành. Các bạn nhỏ lớp sáu lon ton chạy vào hàng, tà áo trắng thấp thoáng sau hàng cây. Rộn ràng tiếng cười nói khắp sân trường. Em thấy lòng mình cũng tươi vui như nắng sớm. (Tượng thanh: tùng, ríu rít; tượng hình: lon ton, thấp thoáng; đảo ngữ: “Rộn ràng tiếng cười nói khắp sân trường”.)' }
  ],
  quiz: [
    { type: 'mcq', q: 'Từ nào là từ tượng thanh?', options: ['róc rách', 'lom khom', 'lác đác', 'khấp khểnh'], answer: 0, explain: '“Róc rách” mô phỏng tiếng nước chảy.' },
    { type: 'mcq', q: 'Từ nào là từ tượng hình?', options: ['thướt tha', 'ầm ầm', 'lộp độp', 'thình thịch'], answer: 0, explain: '“Thướt tha” gợi dáng vẻ mềm mại.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi từ láy đều là từ tượng hình hoặc từ tượng thanh.', answer: false, explain: 'Ví dụ “xinh xắn” là từ láy nhưng không phải tượng hình, tượng thanh.' },
    { type: 'short', q: 'Trong câu “Lom khom dưới núi tiều vài chú”, từ tượng hình nào được đảo lên đầu câu?', answer: ['lom khom'], answerText: 'lom khom', explain: 'Từ “lom khom” được đảo lên trước.' },
    { type: 'mcq', q: 'Tác dụng chính của biện pháp đảo ngữ là:', options: ['nhấn mạnh hình ảnh, cảm xúc, tạo nhịp điệu', 'làm câu văn ngắn hơn', 'thay thế từ ngữ bị lặp', 'giải thích nghĩa của từ'], answer: 0, explain: 'Đảo ngữ nhằm nhấn mạnh và gợi cảm.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Câu “Mênh mông bát ngát cánh đồng” có sử dụng biện pháp đảo ngữ.', answer: true, explain: 'Cụm chỉ đặc điểm đứng trước chủ thể “cánh đồng”.' },
    { type: 'short', q: 'Điền từ tượng thanh phù hợp: “Mưa rơi … trên mái tôn.” (gợi ý: từ có trong ngữ liệu bài học)', answer: ['lộp độp', 'lop dop'], answerText: 'lộp độp', explain: '“Lộp độp” mô phỏng tiếng hạt mưa to rơi trên mái tôn.' },
    { type: 'mcq', q: 'Trong câu “Ngõ tối đêm sâu đóm lập loè”, từ “lập loè” gợi tả:', options: ['ánh sáng lúc loé lên lúc tắt của đom đóm', 'tiếng kêu của đom đóm', 'màu đen của ngõ', 'độ sâu của đêm'], answer: 0, explain: 'Từ tượng hình gợi ánh sáng chập chờn.' }
  ]
});
})();
