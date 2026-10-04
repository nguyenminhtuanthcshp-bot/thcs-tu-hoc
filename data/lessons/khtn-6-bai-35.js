/* KHTN 6 – Bài 35. Thực hành: Quan sát và phân biệt một số nhóm thực vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-35', {
  objectives: [
    'Quan sát được đặc điểm của các đại diện rêu, dương xỉ, hạt trần, hạt kín (mẫu thật hoặc tranh ảnh).',
    'Phân loại được mẫu thực vật vào đúng nhóm bằng khoá lưỡng phân.',
    'Ghi chép, vẽ hình và trình bày được kết quả quan sát.'
  ],
  intro: 'Sau khi học lí thuyết, em hãy tự tay quan sát mẫu cây thật quanh trường, quanh nhà và xếp chúng vào đúng nhóm.',
  steps: [
    { title: 'Chuẩn bị', html: `<ul><li>Mẫu vật (hoặc tranh ảnh): cây rêu (trên tường ẩm, gốc cây), cây dương xỉ (lá có ổ bào tử), cành thông có nón (hoặc vạn tuế), cây có hoa, quả (cây cải, cây ớt, cây bưởi…).</li>
      <li>Kính lúp, panh, kim mũi mác, giấy A4, bút chì.</li></ul>
      <div class="box warn">Chỉ lấy một ít mẫu, không nhổ cả khóm, không bẻ cây nơi công cộng. Không đưa tay dính nhựa cây lạ lên mắt, miệng; rửa tay sau khi quan sát.</div>` },
    { title: 'Quan sát rêu và dương xỉ', html: `<ul><li><b>Rêu</b>: dùng kính lúp quan sát cây rêu nhỏ, có thân ngắn, lá nhỏ mỏng, rễ giả dạng sợi; có thể thấy túi bào tử trên đầu cuống mảnh.</li>
      <li><b>Dương xỉ</b>: lá non cuộn tròn ở đầu; lật mặt dưới lá già thấy các chấm nâu – <b>ổ túi bào tử</b>. Cây có rễ thật, thân ngầm.</li></ul>` },
    { title: 'Quan sát hạt trần và hạt kín', html: `<ul><li><b>Cây thông</b>: lá hình kim; nón (nón đực nhỏ mọc thành cụm, nón cái to hơn, gồm nhiều vảy). Hạt nằm trên vảy nón, <b>không có quả bao bọc</b>.</li>
      <li><b>Cây hạt kín</b> (ví dụ cây ớt): có rễ, thân, lá, hoa, quả; bổ quả thấy hạt nằm bên trong quả.</li></ul>` },
    { title: 'Phân loại và báo cáo', html: `<p>Dùng khoá lưỡng phân ở Bài 34 để xếp các mẫu. Ghi kết quả vào bảng:</p>
      <table class="tbl"><tr><th>Mẫu</th><th>Đặc điểm quan sát được</th><th>Nhóm</th></tr><tr><td>Cây rêu</td><td>Chưa có mạch dẫn, rễ giả</td><td>Rêu</td></tr><tr><td>Cây dương xỉ</td><td>Có mạch dẫn, không có hạt (ổ bào tử)</td><td>Dương xỉ</td></tr><tr><td>Cành thông</td><td>Có mạch dẫn, có hạt, không có hoa, quả</td><td>Hạt trần</td></tr><tr><td>Cây ớt</td><td>Có mạch dẫn, có hoa, quả, hạt trong quả</td><td>Hạt kín</td></tr></table>`,
      svg: S.keyTree({ q: 'Có mạch dẫn?', yes: { q: 'Có hạt?', yes: { q: 'Có hoa, quả?', yes: 'Hạt kín (ớt)', no: 'Hạt trần (thông)' }, no: 'Dương xỉ' }, no: 'Rêu' }, { w: 620 }),
      caption: 'Dùng khoá lưỡng phân để xếp các mẫu vào nhóm.' }
  ],
  summary: 'Rêu: nhỏ, rễ giả, chưa có mạch dẫn. Dương xỉ: lá non cuộn tròn, mặt dưới lá có ổ túi bào tử. Thông (Hạt trần): lá kim, có nón, hạt nằm lộ trên vảy nón. Cây Hạt kín: có hoa, quả, hạt trong quả. Dùng khoá lưỡng phân để phân loại mẫu.',
  examples: [
    { title: 'Nhận biết dương xỉ', problem: 'Dấu hiệu nào giúp em nhận ra nhanh cây dương xỉ?', solution: 'Lá non <b>cuộn tròn</b> ở đầu; mặt dưới lá già có các <b>chấm nâu</b> (ổ túi bào tử).' },
    { title: 'Phân loại', problem: 'Cây vạn tuế có hạt nhưng không có hoa, quả. Nó thuộc nhóm nào?', solution: 'Nhóm <b>Hạt trần</b>.' },
    { title: 'Chấm nâu có phải bệnh không', problem: 'Bạn Hoa thấy mặt dưới lá dương xỉ có nhiều chấm nâu, nghĩ cây bị bệnh. Em giải thích thế nào?', solution: 'Đó là <b>ổ túi bào tử</b> – cơ quan sinh sản bình thường của dương xỉ, không phải bệnh.' }
  ],
  exercises: [
    { question: 'Lập bảng so sánh rêu và dương xỉ về: rễ, mạch dẫn, kích thước, cách sinh sản.', hints: ['Rêu có rễ giả; dương xỉ có rễ thật.', 'Cả hai đều sinh sản bằng bào tử.'], solution: 'Rêu: rễ giả, chưa có mạch dẫn, cây rất nhỏ, sinh sản bằng bào tử. Dương xỉ: rễ thật, có mạch dẫn, cây lớn hơn, sinh sản bằng bào tử (ổ túi bào tử ở mặt dưới lá).' },
    { question: 'Vì sao nói hạt thông là "hạt trần"?', hints: ['Hạt thông nằm ở đâu?', 'Có quả bao bọc không?'], solution: 'Vì hạt thông nằm <b>lộ</b> trên vảy của nón cái, <b>không có quả bao bọc</b>.' },
    { question: 'Em tìm thấy một cây nhỏ mọc trên tường ẩm, không có hoa, dùng kính lúp thấy rễ chỉ là những sợi mảnh. Cây này có thể thuộc nhóm nào?', hints: ['Rễ dạng sợi mảnh là rễ giả.', 'Nơi sống ẩm, cây nhỏ.'], solution: 'Có thể thuộc nhóm <b>Rêu</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Ổ túi bào tử của dương xỉ nằm ở:', options: ['Mặt dưới lá già', 'Trên ngọn cây', 'Trong quả', 'Trong hạt'], answer: 0, explain: 'Các chấm nâu ở mặt dưới lá.' },
    { type: 'mcq', q: 'Cây có lá hình kim, có nón là:', options: ['Cây thông', 'Cây rêu', 'Cây ớt', 'Cây dương xỉ'], answer: 0, explain: 'Thông là cây hạt trần có lá kim.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rêu có rễ thật và mạch dẫn.', answer: false, explain: 'Rêu có rễ giả, chưa có mạch dẫn.' },
    { type: 'mcq', q: 'Khi bổ quả ớt, thấy hạt nằm bên trong quả. Cây ớt thuộc nhóm:', options: ['Hạt kín', 'Hạt trần', 'Dương xỉ', 'Rêu'], answer: 0, explain: 'Hạt nằm trong quả – Hạt kín.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lá non của dương xỉ thường cuộn tròn ở đầu.', answer: true, explain: 'Đặc điểm dễ nhận biết của dương xỉ.' },
    { type: 'mcq', q: 'Dụng cụ phù hợp để quan sát cây rêu là:', options: ['Kính lúp', 'Kính thiên văn', 'Cân', 'Nhiệt kế'], answer: 0, explain: 'Rêu nhỏ, quan sát bằng kính lúp.' },
    { type: 'mcq', q: 'Hành động nào đúng khi lấy mẫu thực vật?', options: ['Chỉ lấy một ít mẫu cần thiết', 'Nhổ cả khóm cây', 'Bẻ cành cây nơi công cộng', 'Nếm thử nhựa cây lạ'], answer: 0, explain: 'Bảo vệ cây và an toàn cho bản thân.' },
    { type: 'short', q: 'Khoá lưỡng phân phân loại 4 nhóm thực vật cần bao nhiêu câu hỏi?', answer: '3', unit: 'câu hỏi', calc: '4-1', explain: 'n − 1 = 3.' }
  ]
});
})();
