/* Ngữ văn 9 – Bài 3. Thực hành tiếng Việt: Chữ Nôm và chữ Quốc ngữ (sơ lược về chữ viết tiếng Việt). Ngữ liệu: hai dòng thơ Nôm của Nguyễn Trãi, hai dòng mở đầu “Truyện Kiều” (Nguyễn Du) – phạm vi công cộng; phần trình bày lịch sử chữ viết do nhóm biên soạn tự viết dựa trên kiến thức phổ thông. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-9/b3-tv', {
  objectives: [
    'Hiểu được sơ lược về chữ Nôm: khái niệm, thời gian xuất hiện, cách cấu tạo cơ bản và vai trò trong lịch sử văn hoá dân tộc.',
    'Hiểu được sơ lược về sự ra đời, phát triển và ưu điểm của chữ Quốc ngữ.',
    'Vận dụng hiểu biết về chữ viết để đọc hiểu văn bản trung đại và viết đúng chính tả tiếng Việt.',
    'Trân trọng, tự hào về các hệ thống chữ viết gắn với lịch sử dân tộc.'
  ],
  intro: 'Người Việt từng nói tiếng Việt nhưng phải viết bằng chữ Hán – thứ chữ của người khác. Rồi cha ông ta sáng tạo ra chữ Nôm, và sau này là chữ Quốc ngữ mà em đang đọc. Mỗi hệ chữ là một chặng đường “giữ hồn nước trong tiếng mẹ cha”.',
  text: {
    title: 'Ngữ liệu: từ chữ Nôm đến chữ Quốc ngữ',
    html: `<p>(1) <i>Rồi hóng mát thuở ngày trường, / Hoè lục đùn đùn tán rợp giương.</i> (Nguyễn Trãi, “Cảnh ngày hè” – trong “Quốc âm thi tập”, viết bằng chữ Nôm)</p>
<p>(2) <i>Trăm năm trong cõi người ta, / Chữ tài chữ mệnh khéo là ghét nhau.</i> (Nguyễn Du, “Truyện Kiều” – nguyên bản chữ Nôm)</p>
<p>(3) <b>Đoạn thông tin:</b> Chữ Nôm là hệ thống chữ viết do người Việt sáng tạo trên cơ sở chữ Hán để ghi lại tiếng Việt. Chữ Quốc ngữ dùng chữ cái La-tinh, được các giáo sĩ phương Tây cùng người Việt xây dựng từ thế kỉ XVII và trở thành chữ viết chính thức, phổ biến của nước ta trong thế kỉ XX. Hai câu thơ (1), (2) ngày nay em đọc được là nhờ đã được <b>phiên âm</b> từ chữ Nôm sang chữ Quốc ngữ.</p>`,
    source: '(1) Nguyễn Trãi (1380 – 1442); (2) Nguyễn Du (1765 – 1820) – thơ Nôm thuộc phạm vi công cộng, dẫn theo bản phiên âm phổ biến. (3) Đoạn thông tin do nhóm biên soạn tự viết dựa trên kiến thức phổ thông.'
  },
  steps: [
    { title: 'Chữ Nôm là gì?', html: `<ul><li><b>Chữ Nôm</b> là chữ viết do người Việt tạo ra dựa trên chữ Hán (mượn nét, bộ, âm đọc) để ghi âm tiếng Việt.</li>
      <li>Chữ Nôm được cho là hình thành từ khoảng thế kỉ X và phát triển mạnh từ thế kỉ XIII (tương truyền Nguyễn Thuyên – Hàn Thuyên – làm thơ Nôm).</li>
      <li>Tác phẩm tiêu biểu: “Quốc âm thi tập” (Nguyễn Trãi), “Hồng Đức quốc âm thi tập”, thơ Hồ Xuân Hương, “Truyện Kiều” (Nguyễn Du), “Truyện Lục Vân Tiên” (Nguyễn Đình Chiểu).</li>
      <li>Ý nghĩa: khẳng định ý thức độc lập, tự chủ về văn hoá; giúp văn học viết bằng tiếng mẹ đẻ phát triển rực rỡ.</li></ul>` },
    { title: 'Một số cách tạo chữ Nôm (sơ lược)', html: `<table class="tbl"><tr><th>Cách tạo</th><th>Giải thích</th><th>Ví dụ (mô tả)</th></tr>
      <tr><td>Mượn nguyên chữ Hán</td><td>Mượn cả chữ, đọc theo âm Hán Việt hoặc đọc chệch, hoặc mượn nghĩa</td><td>Chữ Hán 沒 (một) dùng ghi chữ “một”</td></tr>
      <tr><td>Ghép hai chữ: nghĩa + âm</td><td>Một bộ phận gợi nghĩa, một bộ phận gợi âm</td><td>Chữ “ba” = chữ 巴 (đọc “ba”, gợi âm) + chữ 三 (tam, gợi nghĩa “ba”)</td></tr>
      <tr><td>Ghép hai chữ cùng gợi nghĩa</td><td>Hai bộ phận kết hợp tạo nghĩa mới</td><td>Chữ “trời” = 天 (thiên: trời) + 上 (thượng: trên)</td></tr></table>`,
      svg: S.mindmap({ center: 'Chữ Nôm', branches: [{ title: 'Cơ sở', items: ['Dựa trên chữ Hán', 'Ghi âm tiếng Việt'] }, { title: 'Cách tạo', items: ['Mượn chữ Hán', 'Ghép nghĩa + âm'] }, { title: 'Tác phẩm', items: ['Quốc âm thi tập', 'Truyện Kiều'] }, { title: 'Hạn chế', items: ['Khó học, nhiều nét', 'Chưa thống nhất'] }] }),
      caption: 'Sơ đồ tư duy về chữ Nôm.' },
    { title: 'Chữ Quốc ngữ ra đời và phát triển', html: `<p>Chặng đường của chữ viết tiếng Việt (sơ lược):</p>`,
      svg: S.flow({ w: 620, items: [{ title: 'Chữ Hán', text: 'Dùng lâu dài' }, { title: 'Chữ Nôm', text: 'Từ khoảng thế kỉ X – XIII' }, { title: 'Quốc ngữ', text: 'Thế kỉ XVII' }, { title: 'Phổ biến', text: 'Đầu thế kỉ XX' }, { title: '1945', text: 'Bình dân học vụ' }] }),
      caption: 'Sơ lược các chặng phát triển chữ viết tiếng Việt.' },
    { title: 'Những mốc chính của chữ Quốc ngữ', html: `<ul><li><b>Thế kỉ XVII:</b> các giáo sĩ phương Tây (trong đó có A-lếch-xăng đơ Rốt – Alexandre de Rhodes) cùng những người Việt cộng tác dùng chữ cái La-tinh ghi âm tiếng Việt; năm 1651 cuốn từ điển Việt – Bồ – La được in ở Rô-ma.</li>
      <li><b>Cuối thế kỉ XIX – đầu thế kỉ XX:</b> báo chí, sách vở chữ Quốc ngữ phát triển; phong trào Đông Kinh nghĩa thục (1907) cổ động học chữ Quốc ngữ; Hội Truyền bá Quốc ngữ thành lập năm 1938.</li>
      <li><b>Sau Cách mạng tháng Tám 1945:</b> phong trào Bình dân học vụ xoá nạn mù chữ; chữ Quốc ngữ trở thành chữ viết chính thức trong giáo dục, hành chính.</li>
      <li><b>Ưu điểm:</b> ghi âm, số chữ cái ít, dễ học, dễ phổ cập, thuận lợi cho in ấn và tiếp thu tri thức mới.</li></ul>` },
    { title: 'Vận dụng: phiên âm và chính tả', html: `<ul><li>Văn bản Nôm, Hán ngày nay được <b>phiên âm</b> ra chữ Quốc ngữ; một chữ Nôm có thể có nhiều cách đọc nên các bản phiên âm đôi khi khác nhau – đó là lí do có “dị bản” (VD các bản Truyện Kiều).</li>
      <li>Chữ Quốc ngữ ghi âm nên cần viết đúng <b>phụ âm đầu</b> (ch/tr, s/x, r/d/gi), <b>vần</b>, <b>dấu thanh</b> để tránh sai nghĩa.</li></ul>
      <div class="box key">Giữ gìn sự trong sáng của tiếng Việt bắt đầu từ viết đúng chính tả chữ Quốc ngữ.</div>` }
  ],
  summary: 'Chữ Nôm là chữ viết do người Việt sáng tạo dựa trên chữ Hán để ghi tiếng Việt (hình thành khoảng thế kỉ X – XIII), gắn với các kiệt tác như Quốc âm thi tập, Truyện Kiều, Lục Vân Tiên; nhưng khó học, chưa thống nhất. Chữ Quốc ngữ dùng chữ cái La-tinh, hình thành từ thế kỉ XVII, phổ biến đầu thế kỉ XX và trở thành chữ viết chính thức sau năm 1945; ưu điểm: ghi âm, dễ học, dễ phổ cập. Văn bản Nôm được phiên âm ra chữ Quốc ngữ để ngày nay ta đọc được.',
  examples: [
    { title: 'Nhận xét ý nghĩa của chữ Nôm', problem: 'Vì sao nói sự ra đời của chữ Nôm thể hiện ý thức độc lập, tự chủ về văn hoá?', solution: 'Trước đó, người Việt phải viết bằng chữ Hán – chữ của người phương Bắc – dù nói tiếng Việt. Chữ Nôm cho phép ghi lại chính tiếng nói của dân tộc, giúp ra đời một nền văn học viết bằng tiếng mẹ đẻ với nhiều kiệt tác. Việc tự tạo ra chữ viết riêng cho thấy người Việt muốn khẳng định bản sắc, không lệ thuộc về văn hoá.' },
    { title: 'Cách tạo chữ Nôm', problem: 'Giải thích cấu tạo chữ Nôm “ba” gồm chữ 巴 và chữ 三.', solution: 'Chữ 巴 đọc là “ba”, được dùng để gợi âm; chữ 三 (tam) nghĩa là “ba”, được dùng để gợi nghĩa. Ghép hai bộ phận, người đọc vừa biết cách đọc (ba) vừa biết nghĩa (số ba) – đây là cách ghép một bộ phận chỉ âm với một bộ phận chỉ nghĩa.' },
    { title: 'Ưu điểm của chữ Quốc ngữ', problem: 'Nêu hai ưu điểm của chữ Quốc ngữ so với chữ Nôm.', solution: '(1) Chữ Quốc ngữ ghi âm bằng một số ít chữ cái La-tinh, nhìn chữ là đọc được, nên dễ học hơn nhiều so với chữ Nôm phải nhớ hàng nghìn chữ phức tạp. (2) Chữ Quốc ngữ thống nhất, thuận lợi cho in ấn, báo chí, giáo dục đại chúng – nhờ đó xoá mù chữ nhanh chóng sau năm 1945.' }
  ],
  exercises: [
    { question: 'Kể tên ba tác phẩm văn học viết bằng chữ Nôm và tác giả của chúng.', hints: ['Nhớ lại các bài đã học ở lớp 7, 8, 9.', 'Thơ Nôm Đường luật, truyện thơ Nôm.'], solution: '“Quốc âm thi tập” – Nguyễn Trãi; “Truyện Kiều” – Nguyễn Du; “Truyện Lục Vân Tiên” – Nguyễn Đình Chiểu; (ngoài ra: thơ Hồ Xuân Hương như “Bánh trôi nước”, thơ Nôm Nguyễn Khuyến như “Thu điếu”).' },
    { question: 'Vì sao các bản phiên âm “Truyện Kiều” đôi khi có chữ khác nhau?', hints: ['Một chữ Nôm có thể có mấy cách đọc?', 'Các bản khắc in qua nhiều thời kì.'], solution: 'Vì chữ Nôm chưa được chuẩn hoá: một chữ có thể đọc theo nhiều âm, viết theo nhiều cách; các bản khắc in ở những thời điểm khác nhau cũng có chỗ khác nhau. Khi phiên âm sang chữ Quốc ngữ, các nhà nghiên cứu lựa chọn cách đọc khác nhau, tạo ra dị bản.' },
    { question: 'Viết đoạn văn (5 – 7 câu) nêu suy nghĩ của em về trách nhiệm giữ gìn chữ viết tiếng Việt hôm nay.', hints: ['Liên hệ lịch sử chữ Nôm, chữ Quốc ngữ.', 'Nêu việc làm cụ thể: viết đúng chính tả, hạn chế viết tắt, “teencode”.'], solution: 'Ví dụ: Chữ viết tiếng Việt là thành quả của hàng nghìn năm, từ những chữ Nôm cha ông dày công sáng tạo đến chữ Quốc ngữ được bao thế hệ truyền bá. Nhờ chữ Quốc ngữ, ngày nay ai cũng có thể đọc “Truyện Kiều”, viết thư cho người thân, học tập mọi tri thức. Thế nhưng trên mạng xã hội, không ít bạn trẻ viết tắt tuỳ tiện, dùng kiểu chữ “teencode” khó hiểu, bỏ dấu thanh. Em nghĩ giữ gìn chữ viết không phải việc to tát: chỉ cần viết đúng chính tả, dùng dấu câu hợp lí, hạn chế viết tắt trong học tập và giao tiếp nghiêm túc. Mỗi dòng chữ đúng, đẹp là một cách biết ơn những người đã làm nên chữ viết của dân tộc.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Chữ Nôm được tạo ra trên cơ sở:', options: ['chữ Hán', 'chữ cái La-tinh', 'chữ Phạn', 'chữ tượng hình Ai Cập'], answer: 0, explain: 'Người Việt mượn và cải biến chữ Hán để ghi tiếng Việt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Truyện Kiều” được Nguyễn Du viết bằng chữ Quốc ngữ.', answer: false, explain: 'Truyện Kiều viết bằng chữ Nôm, ngày nay được phiên âm ra chữ Quốc ngữ.' },
    { type: 'short', q: 'Chữ Quốc ngữ sử dụng hệ chữ cái nào (“chữ cái La-…”)?', answer: ['La-tinh', 'latinh', 'la tinh', 'Latin', 'La tinh'], answerText: 'La-tinh', explain: 'Dùng chữ cái La-tinh ghi âm tiếng Việt.' },
    { type: 'mcq', q: 'Chữ Quốc ngữ bắt đầu được xây dựng vào khoảng thế kỉ nào?', options: ['Thế kỉ XVII', 'Thế kỉ X', 'Thế kỉ XIII', 'Thế kỉ XXI'], answer: 0, explain: 'Từ thế kỉ XVII, bởi các giáo sĩ phương Tây cùng người Việt.' },
    { type: 'mcq', q: 'Ưu điểm lớn nhất của chữ Quốc ngữ là:', options: ['ghi âm, dễ học, dễ phổ cập', 'có nhiều nét phức tạp', 'mỗi chữ có nhiều cách đọc', 'chỉ dùng trong cung đình'], answer: 0, explain: 'Nhờ đó xoá mù chữ nhanh chóng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phong trào Bình dân học vụ sau năm 1945 góp phần xoá nạn mù chữ bằng chữ Quốc ngữ.', answer: true, explain: 'Chữ Quốc ngữ trở thành chữ viết chính thức.' },
    { type: 'short', q: 'Việc chuyển văn bản chữ Nôm sang chữ Quốc ngữ theo cách đọc gọi là gì (“phiên …”)?', answer: ['phiên âm', 'phien am'], answerText: 'phiên âm', explain: 'Nhờ phiên âm ta đọc được thơ Nôm ngày nay.' },
    { type: 'mcq', q: 'Tập thơ Nôm nào của Nguyễn Trãi còn lưu lại?', options: ['Quốc âm thi tập', 'Truyền kì mạn lục', 'Chinh phụ ngâm', 'Hoàng Lê nhất thống chí'], answer: 0, explain: '“Cảnh ngày hè” nằm trong Quốc âm thi tập.' }
  ]
});
})();
