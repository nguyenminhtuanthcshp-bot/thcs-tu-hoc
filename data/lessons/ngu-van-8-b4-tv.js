/* Ngữ văn 8 – Bài 4. Thực hành tiếng Việt: Nghĩa của một số yếu tố Hán Việt; sắc thái nghĩa của từ ngữ và việc lựa chọn từ ngữ. Ngữ liệu: thơ Nôm cổ của Nguyễn Khuyến (phạm vi công cộng) và câu văn do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-8/b4-tv', {
  objectives: [
    'Hiểu nghĩa của một số yếu tố Hán Việt thông dụng và nghĩa của các từ có yếu tố đó; phân biệt yếu tố Hán Việt đồng âm.',
    'Nhận biết được sắc thái nghĩa của từ ngữ (trang trọng – thân mật, tốt – xấu, mỉa mai…).',
    'Lựa chọn được từ ngữ phù hợp với mục đích, đối tượng và hoàn cảnh giao tiếp.'
  ],
  intro: '“Tiến sĩ”, “giáp bảng”, “văn khôi” – trong bài thơ của Nguyễn Khuyến có rất nhiều từ Hán Việt. Hiểu nghĩa từng yếu tố giúp em hiểu nhanh cả những từ mới. Còn khi Nguyễn Khuyến chọn từ “bảnh choẹ” thay vì “đường hoàng”, tiếng cười mỉa mai đã bật ra. Bài học này giúp em dùng từ tinh tế hơn.',
  text: {
    title: 'Ngữ liệu thực hành',
    html: `<div class="poem">(1) Mảnh giấy làm nên thân giáp bảng,<br>Nét son điểm rõ mặt văn khôi.<br>…<br>Ghế chéo lọng xanh ngồi bảnh choẹ.<br><i>(Nguyễn Khuyến, “Tiến sĩ giấy”)</i></div>
<p>(2) Cụ Tư đã <b>qua đời</b> sáng nay. / Người chiến sĩ đã <b>hi sinh</b> anh dũng. / Con kiến <b>chết</b> trong cốc nước.<br>(3) Mời bác <b>xơi</b> nước ạ. / Các con vào <b>ăn</b> cơm đi.<br><i>(Câu văn do nhóm biên soạn viết)</i></p>`,
    source: '(1) Trích “Tiến sĩ giấy” – Nguyễn Khuyến (1835 – 1909), phạm vi công cộng. (2), (3) Câu văn do nhóm biên soạn tự viết.'
  },
  steps: [
    { title: 'Nghĩa của yếu tố Hán Việt', html: `<p>Từ Hán Việt thường gồm các yếu tố (tiếng) có nghĩa. Nắm nghĩa từng yếu tố giúp suy ra nghĩa của từ:</p>
      <table class="tbl"><tr><th>Yếu tố</th><th>Nghĩa</th><th>Ví dụ</th></tr>
      <tr><td>khoa</td><td>kì thi; môn học</td><td>khoa cử, khoa bảng; khoa học</td></tr>
      <tr><td>bảng</td><td>tấm bảng yết tên người đỗ</td><td>giáp bảng, bảng vàng</td></tr>
      <tr><td>khôi</td><td>đứng đầu</td><td>văn khôi, khôi nguyên, khôi ngô</td></tr>
      <tr><td>sĩ</td><td>người có học; người làm một nghề</td><td>tiến sĩ, nho sĩ; nghệ sĩ, bác sĩ</td></tr>
      <tr><td>hữu / vô</td><td>có / không</td><td>hữu ích, hữu danh vô thực; vô ích, vô danh</td></tr></table>` },
    { title: 'Yếu tố Hán Việt đồng âm', html: `<p>Có những yếu tố cùng âm nhưng khác nghĩa – cần dựa vào từ và ngữ cảnh để xác định:</p>`,
      svg: S.mindmap({ center: 'thiên', branches: [{ title: 'trời', items: ['thiên nhiên', 'thiên thư'] }, { title: 'nghìn', items: ['thiên niên kỉ', 'thiên lí mã'] }, { title: 'dời, đổi', items: ['thiên đô', 'biến thiên'] }, { title: 'lệch về một phía', items: ['thiên vị', 'thiên kiến'] }] }),
      caption: 'Bốn nghĩa khác nhau của yếu tố Hán Việt đồng âm “thiên”.' },
    { title: 'Sắc thái nghĩa của từ ngữ', html: `<p>Ngoài nghĩa chung, từ ngữ còn mang <b>sắc thái</b> riêng: trang trọng hay thân mật, tôn kính hay suồng sã, khen hay chê, mỉa mai…</p>
      <table class="tbl"><tr><th>Nghĩa chung</th><th>Trang trọng/tôn kính</th><th>Trung tính</th><th>Suồng sã/coi thường</th></tr>
      <tr><td>mất sự sống</td><td>từ trần, qua đời, hi sinh</td><td>chết</td><td>toi, ngoẻo</td></tr>
      <tr><td>ăn</td><td>xơi, dùng</td><td>ăn</td><td>đớp, tọng</td></tr>
      <tr><td>vợ</td><td>phu nhân</td><td>vợ</td><td>(tránh dùng từ thô)</td></tr></table>
      <p>Trong “Tiến sĩ giấy”, “bảnh choẹ” mang sắc thái mỉa mai (so với “đường hoàng”, “oai nghiêm”), “hời” (rẻ) mang sắc thái khẩu ngữ, làm bật lên sự rẻ rúng của khoa danh.</p>` },
    { title: 'Lựa chọn từ ngữ phù hợp', html: `<ul><li>Phù hợp <b>đối tượng</b>: với người lớn tuổi dùng “xơi, mời”; với bạn bè có thể dùng từ thân mật.</li>
      <li>Phù hợp <b>hoàn cảnh</b>: văn bản hành chính, lễ nghi cần từ trang trọng; trò chuyện hằng ngày dùng từ giản dị.</li>
      <li>Phù hợp <b>mục đích</b>: muốn châm biếm thì chọn từ có sắc thái mỉa mai; muốn bày tỏ kính trọng thì chọn từ tôn kính.</li>
      <li>Tránh lạm dụng từ Hán Việt khi đã có từ thuần Việt tương đương, rõ nghĩa (không nói “phụ mẫu tôi” trong trò chuyện thường ngày).</li></ul>` },
    { title: 'Phân tích ngữ liệu (2), (3)', html: `<p>(2) Ba từ <i>qua đời – hi sinh – chết</i> cùng chỉ sự mất đi sự sống. “Qua đời” trang trọng, nói giảm, dùng cho người; “hi sinh” thể hiện sự kính trọng, dùng cho người chết vì nghĩa lớn; “chết” trung tính, dùng cho con vật là phù hợp.</p>
      <p>(3) “Xơi” mang sắc thái kính trọng, dùng khi mời người trên; “ăn” trung tính, dùng khi cha mẹ nói với con.</p>
      <div class="box key">Dùng sai sắc thái có thể gây phản cảm hoặc gây cười ngoài ý muốn: “Mời bà <b>đớp</b> cơm” là thiếu lễ độ.</div>` }
  ],
  summary: 'Từ Hán Việt gồm những yếu tố có nghĩa; hiểu nghĩa yếu tố (khoa, bảng, khôi, sĩ, hữu, vô…) giúp hiểu nghĩa từ; cần phân biệt yếu tố đồng âm như “thiên” (trời, nghìn, dời, lệch). Từ ngữ còn mang sắc thái nghĩa (trang trọng – thân mật, kính trọng – suồng sã, khen – chê, mỉa mai). Cần chọn từ phù hợp đối tượng, hoàn cảnh và mục đích giao tiếp.',
  examples: [
    { title: 'Giải nghĩa từ nhờ yếu tố Hán Việt', problem: 'Giải thích nghĩa của thành ngữ “hữu danh vô thực” dựa vào nghĩa các yếu tố.', solution: '“Hữu” là có, “danh” là tên, danh tiếng; “vô” là không, “thực” là thật, thực chất. “Hữu danh vô thực” nghĩa là có tiếng mà không có thực chất – đúng như những “ông nghè” mà Nguyễn Khuyến châm biếm.' },
    { title: 'Phân biệt yếu tố đồng âm', problem: 'Yếu tố “gia” trong các từ “gia đình, gia tăng, gia vị, gia sản” có nghĩa gì? Xếp nhóm.', solution: '“Gia” nghĩa là nhà: gia đình, gia sản (tài sản của nhà). “Gia” nghĩa là thêm: gia tăng (tăng thêm), gia vị (thứ thêm vào để tăng mùi vị).' },
    { title: 'Chọn từ theo sắc thái', problem: 'Chọn từ phù hợp: “Bác Hồ đã … (chết / qua đời / từ trần) ngày 2 tháng 9 năm 1969.” Giải thích.', solution: 'Chọn “qua đời” hoặc “từ trần” vì đây là những từ mang sắc thái trang trọng, thể hiện sự kính trọng với vị lãnh tụ. Dùng “chết” là không phù hợp với sắc thái tôn kính.' }
  ],
  exercises: [
    { question: 'Tìm hai từ có yếu tố “hải” (biển) và hai từ có yếu tố “sơn” (núi); giải thích nghĩa một từ trong mỗi nhóm.', hints: ['“Hải” có trong tên các loài vật, nghề nghiệp gắn với biển.', '“Sơn” có trong các từ chỉ cảnh vật, địa danh.'], solution: 'Hải: hải cảng (cảng biển), hải quân, hải sản (sản vật của biển). Sơn: sơn hà (núi sông, chỉ đất nước), sơn cước, giang sơn. Ví dụ giải nghĩa: “hải sản” là các sản vật đánh bắt từ biển; “sơn hà” là núi sông, chỉ đất nước.' },
    { question: 'Thay từ in đậm bằng từ có sắc thái phù hợp hơn: (a) “Thưa cô, bố em nhờ em <b>bảo</b> cô…”; (b) “Ông cụ hàng xóm vừa <b>ngoẻo</b>.”', hints: ['Với cô giáo cần từ lễ phép.', 'Nói về người lớn tuổi đã mất cần từ trang trọng, nói giảm.'], solution: '(a) Thay “bảo” bằng “thưa” hoặc “gửi lời”: “Thưa cô, bố em nhờ em thưa với cô…”. (b) Thay “ngoẻo” (suồng sã, thiếu tôn trọng) bằng “qua đời” hoặc “mất”.' },
    { question: 'Nếu thay “bảnh choẹ” bằng “đường hoàng” trong câu “Ghế chéo lọng xanh ngồi bảnh choẹ”, ý nghĩa câu thơ thay đổi thế nào?', hints: ['So sánh sắc thái của hai từ.', 'Tiếng cười trào phúng có còn không?'], solution: '“Đường hoàng” mang sắc thái tích cực, chỉ dáng vẻ oai nghiêm đáng trọng; “bảnh choẹ” lại gợi vẻ chải chuốt, ra vẻ oai một cách lố bịch. Nếu thay bằng “đường hoàng”, câu thơ trở thành lời khen, mất đi sắc thái mỉa mai và tiếng cười trào phúng.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Yếu tố “thiên” trong từ “thiên nhiên” có nghĩa là:', options: ['trời', 'nghìn', 'dời đi', 'lệch'], answer: 0, explain: '“Thiên nhiên” – tự nhiên do trời sinh.' },
    { type: 'mcq', q: 'Yếu tố “thiên” trong “thiên vị” có nghĩa là:', options: ['lệch về một phía', 'trời', 'nghìn', 'dời đổi'], answer: 0, explain: 'Thiên vị: lệch về một bên, không công bằng.' },
    { type: 'short', q: 'Yếu tố Hán Việt “hữu” có nghĩa là gì?', answer: ['có'], answerText: 'có', explain: 'Hữu ích, hữu danh, hữu hạn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Hi sinh” và “chết” có nghĩa chung giống nhau nhưng khác nhau về sắc thái.', answer: true, explain: '“Hi sinh” thể hiện sự kính trọng.' },
    { type: 'mcq', q: 'Từ nào mang sắc thái kính trọng khi mời người lớn tuổi ăn?', options: ['xơi', 'đớp', 'tọng', 'hốc'], answer: 0, explain: '“Xơi” lịch sự, kính trọng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng thật nhiều từ Hán Việt trong mọi trường hợp để câu văn hay hơn.', answer: false, explain: 'Lạm dụng từ Hán Việt làm câu văn nặng nề, thiếu tự nhiên.' },
    { type: 'short', q: 'Yếu tố “khôi” trong “văn khôi”, “khôi nguyên” có nghĩa là gì (hai chữ)?', answer: ['đứng đầu', 'dung dau'], answerText: 'đứng đầu', explain: 'Văn khôi: người đứng đầu về văn chương.' },
    { type: 'mcq', q: 'Từ “gia” trong nhóm nào có nghĩa là “thêm”?', options: ['gia tăng, gia vị', 'gia đình, gia sản', 'gia phả, gia tộc', 'quốc gia, gia chủ'], answer: 0, explain: 'Gia tăng: tăng thêm; gia vị: thứ thêm vào món ăn.' }
  ]
});
})();
