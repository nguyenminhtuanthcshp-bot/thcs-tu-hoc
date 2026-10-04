/* KHTN 6 – Bài 9. Sự đa dạng của chất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-9', {
  objectives: [
    'Phân biệt được vật thể tự nhiên và vật thể nhân tạo, vật sống và vật không sống.',
    'Nêu được mọi vật thể đều được tạo nên từ chất.',
    'Nêu được một số tính chất vật lí và tính chất hoá học của chất.',
    'Nhận ra được tính chất vật lí, tính chất hoá học trong các hiện tượng quen thuộc.'
  ],
  intro: 'Chiếc cốc thuỷ tinh, cái thìa inox, hạt muối, giọt nước, không khí em hít thở… Chúng khác nhau về hình dạng, công dụng, nhưng đều có một điểm chung: đều được tạo nên từ <b>chất</b>.',
  steps: [
    { title: 'Vật thể quanh ta', html: `<table class="tbl"><tr><th>Cách phân loại</th><th>Ví dụ</th></tr>
      <tr><td><b>Vật thể tự nhiên</b>: có sẵn trong tự nhiên</td><td>Cây cối, con cá, hòn đá, nước biển, không khí</td></tr>
      <tr><td><b>Vật thể nhân tạo</b>: do con người tạo ra</td><td>Bàn ghế, xe đạp, quyển vở, bóng đèn</td></tr>
      <tr><td><b>Vật sống</b>: có các biểu hiện sống</td><td>Con mèo, cây lúa, cây nấm</td></tr>
      <tr><td><b>Vật không sống</b></td><td>Hòn đá, cái cốc, đám mây</td></tr></table>`,
      svg: S.mindmap({ center: 'Vật thể', branches: [{ title: 'Tự nhiên', items: ['cây xanh', 'hòn đá', 'nước biển'] }, { title: 'Nhân tạo', items: ['cái bàn', 'xe đạp', 'quyển vở'] }, { title: 'Vật sống', items: ['con chó', 'cây lúa'] }, { title: 'Vật không sống', items: ['hòn sỏi', 'cái cốc'] }], w: 640 }),
      caption: 'Hai cách phân loại vật thể.' },
    { title: 'Vật thể được tạo nên từ chất', html: `<p>Mọi vật thể đều được tạo nên từ một hay nhiều <b>chất</b>.</p>
      <ul><li>Dây đồng được tạo nên từ chất <b>đồng</b>.</li><li>Cốc thuỷ tinh được tạo nên từ <b>thuỷ tinh</b>.</li><li>Cơ thể người chứa nước, chất đạm, chất béo, chất khoáng…</li></ul>
      <p>Một chất có thể tạo nên nhiều vật thể khác nhau (nhôm làm nồi, làm dây điện, làm vỏ lon) và một vật thể có thể chứa nhiều chất (chiếc bút có nhựa, kim loại, mực).</p>` },
    { title: 'Tính chất vật lí', html: `<p>Mỗi chất có những tính chất nhất định. <b>Tính chất vật lí</b> là những tính chất mà khi xét, chất <b>không biến thành chất khác</b>:</p>
      <ul><li>thể (rắn, lỏng, khí), màu sắc, mùi, vị;</li><li>tính tan trong nước;</li><li>tính dẫn điện, dẫn nhiệt;</li><li>nhiệt độ nóng chảy, nhiệt độ sôi; khối lượng riêng (nặng hay nhẹ)…</li></ul>
      <p>Ví dụ: đường là chất rắn, màu trắng, vị ngọt, tan được trong nước.</p>` },
    { title: 'Tính chất hoá học', html: `<p><b>Tính chất hoá học</b> là khả năng chất <b>bị biến đổi thành chất khác</b>, ví dụ: khả năng bị cháy, bị phân huỷ, bị gỉ, bị chua…</p>
      <ul><li>Đun nóng đường quá lâu, đường bị cháy đen thành than và hơi nước (có chất mới).</li><li>Đinh sắt để lâu trong không khí ẩm bị gỉ (tạo thành gỉ sắt màu nâu đỏ).</li><li>Cồn cháy tạo thành khí carbon dioxide và hơi nước.</li></ul>
      <div class="box key">Dấu hiệu nhận biết có chất mới: đổi màu, sinh ra chất khí (sủi bọt), toả nhiệt, phát sáng, có mùi lạ, có chất rắn mới xuất hiện…</div>` }
  ],
  summary: 'Vật thể có thể là tự nhiên hoặc nhân tạo, sống hoặc không sống; mọi vật thể đều được tạo nên từ chất. Tính chất vật lí (thể, màu, mùi, vị, tính tan, dẫn điện, dẫn nhiệt, nhiệt độ sôi, nóng chảy…) không làm chất biến đổi; tính chất hoá học là khả năng chất biến thành chất mới (cháy, gỉ, phân huỷ…).',
  examples: [
    { title: 'Phân loại vật thể', problem: 'Xếp các vật thể sau vào nhóm tự nhiên hoặc nhân tạo: quả cam, bút bi, núi đá vôi, ấm đun nước, con trâu.', solution: 'Tự nhiên: <b>quả cam, núi đá vôi, con trâu</b>. Nhân tạo: <b>bút bi, ấm đun nước</b>.' },
    { title: 'Vật thể và chất', problem: 'Chỉ ra vật thể và chất trong câu: “Lõi dây điện làm bằng đồng, vỏ làm bằng nhựa.”', solution: 'Vật thể: <b>dây điện</b> (lõi dây, vỏ dây). Chất: <b>đồng, nhựa</b>.' },
    { title: 'Nhận biết tính chất', problem: 'Hiện tượng nào thể hiện tính chất hoá học: a) nến nóng chảy khi đốt; b) nến cháy tạo khí carbon dioxide và hơi nước?', solution: 'a) Nến nóng chảy chỉ đổi thể (rắn → lỏng), không có chất mới: <b>tính chất vật lí</b>. b) Nến cháy tạo chất mới: <b>tính chất hoá học</b>.' }
  ],
  exercises: [
    { question: 'Nêu ba tính chất vật lí của nước ở nhiệt độ phòng.', hints: ['Nghĩ về thể, màu, mùi, vị của nước.', 'Nước sôi ở bao nhiêu độ, đông đặc ở bao nhiêu độ?'], solution: 'Ví dụ: nước là chất lỏng, không màu, không mùi, không vị; sôi ở 100 °C và đông đặc ở 0 °C (ở áp suất khí quyển bình thường); hoà tan được nhiều chất như đường, muối.' },
    { question: 'Để phân biệt muối ăn và cát, em dựa vào tính chất nào? Mô tả cách làm.', hints: ['Muối và cát có cùng tan trong nước không?', 'Cho mỗi chất vào một cốc nước rồi khuấy.'], solution: 'Dựa vào <b>tính tan trong nước</b> (tính chất vật lí): cho mỗi chất vào cốc nước, khuấy đều; chất tan hết là muối, chất không tan lắng xuống đáy là cát.' },
    { question: 'Trong các quá trình sau, quá trình nào có chất mới tạo thành: a) cơm để lâu bị thiu; b) nước đá tan; c) gỗ cháy thành than; d) cắt giấy thành mảnh nhỏ?', hints: ['Có chất mới khi xuất hiện dấu hiệu: mùi lạ, đổi màu, sinh khí…', 'Tan chảy, cắt nhỏ có làm chất biến thành chất khác không?'], solution: 'Có chất mới: <b>a) cơm thiu</b> (có mùi chua, vị lạ) và <b>c) gỗ cháy</b>. Nước đá tan và cắt giấy chỉ thay đổi thể hoặc hình dạng, không có chất mới.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Vật thể nào sau đây là vật thể nhân tạo?', options: ['Cây tre', 'Con suối', 'Cái chổi', 'Hòn sỏi'], answer: 2, explain: 'Cái chổi do con người làm ra.' },
    { type: 'mcq', q: 'Vật nào sau đây là vật sống?', options: ['Vi khuẩn', 'Nước biển', 'Xe máy', 'Đám mây'], answer: 0, explain: 'Vi khuẩn trao đổi chất, lớn lên, sinh sản: là vật sống.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi vật thể đều được tạo nên từ chất.', answer: true, explain: 'Chất là thành phần tạo nên mọi vật thể.' },
    { type: 'mcq', q: 'Tính chất nào sau đây là tính chất hoá học?', options: ['Sắt có màu trắng xám', 'Sắt dẫn điện tốt', 'Sắt bị gỉ trong không khí ẩm', 'Sắt nóng chảy ở nhiệt độ cao'], answer: 2, explain: 'Sắt bị gỉ tạo thành chất mới (gỉ sắt) – đó là tính chất hoá học.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hoà tan muối vào nước thể hiện tính chất hoá học của muối.', answer: false, explain: 'Tính tan là tính chất vật lí; muối không biến thành chất khác (cô cạn lại thu được muối).' },
    { type: 'short', q: 'Kim loại được dùng làm lõi dây điện phổ biến nhất ở nước ta, có màu đỏ, dẫn điện tốt, là chất gì?', answer: ['đồng', 'dong'], answerText: 'đồng', explain: 'Lõi dây điện thường làm bằng đồng vì đồng dẫn điện rất tốt.' },
    { type: 'mcq', q: 'Dấu hiệu nào cho biết có chất mới được tạo thành?', options: ['Nước đá tan thành nước lỏng', 'Có bọt khí sinh ra khi nhỏ giấm vào vỏ trứng', 'Bẻ đôi chiếc que', 'Muối tan trong nước'], answer: 1, explain: 'Sinh ra chất khí (sủi bọt) là dấu hiệu có chất mới.' },
    { type: 'mcq', q: 'Trong câu “Nồi được làm bằng nhôm”, đâu là chất?', options: ['Nồi', 'Nhôm', 'Cả nồi và nhôm', 'Không có chất'], answer: 1, keepOrder: true, explain: 'Nồi là vật thể; nhôm là chất tạo nên nồi.' }
  ]
});
})();
