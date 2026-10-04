/* KHTN 6 – Bài 1. Giới thiệu về Khoa học tự nhiên. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('khtn-6/bai-1', {
  objectives: [
    'Nêu được khái niệm Khoa học tự nhiên.',
    'Trình bày được vai trò của Khoa học tự nhiên trong cuộc sống.',
    'Phân biệt được các lĩnh vực chủ yếu của Khoa học tự nhiên.',
    'Phân biệt được vật sống và vật không sống dựa vào các đặc điểm đặc trưng.'
  ],
  intro: 'Vì sao trời mưa? Vì sao cây xanh hướng về phía có ánh sáng? Vì sao sắt để lâu ngoài trời bị gỉ? Những câu hỏi “vì sao” như vậy chính là điểm khởi đầu của <b>Khoa học tự nhiên</b>.',
  steps: [
    { title: 'Khoa học tự nhiên là gì?', html: `<p><b>Khoa học tự nhiên</b> là một nhánh của khoa học, nghiên cứu các sự vật, hiện tượng, quy luật của tự nhiên, những ảnh hưởng của chúng đến cuộc sống con người và môi trường.</p>
      <p>Các nhà khoa học tìm hiểu tự nhiên bằng cách <b>quan sát, đặt câu hỏi, làm thí nghiệm, đo đạc và suy luận</b>.</p>` },
    { title: 'Vai trò trong cuộc sống', html: `<ul><li><b>Nâng cao hiểu biết</b> của con người về thế giới xung quanh.</li><li><b>Ứng dụng công nghệ</b> vào sản xuất, đời sống (điện, máy móc, điện thoại…).</li><li><b>Chăm sóc sức khoẻ</b> con người (thuốc, vắc xin, thiết bị y tế).</li><li><b>Bảo vệ môi trường</b> và phát triển bền vững.</li></ul>
      <div class="box note">Ví dụ: hiểu về vi khuẩn giúp con người tìm ra cách bảo quản thực phẩm và phòng bệnh.</div>` },
    { title: 'Các lĩnh vực chủ yếu', html: `<table class="tbl"><tr><th>Lĩnh vực</th><th>Nghiên cứu về</th></tr>
      <tr><td>Vật lí học</td><td>Vật chất, năng lượng, chuyển động, lực, ánh sáng, âm thanh…</td></tr>
      <tr><td>Hoá học</td><td>Chất và sự biến đổi của chất</td></tr>
      <tr><td>Sinh học</td><td>Các vật sống, mối quan hệ giữa chúng với nhau và với môi trường</td></tr>
      <tr><td>Khoa học Trái Đất</td><td>Trái Đất: đất đá, khí quyển, thời tiết, núi lửa, động đất…</td></tr>
      <tr><td>Thiên văn học</td><td>Các thiên thể: Mặt Trời, Mặt Trăng, các hành tinh, ngôi sao…</td></tr></table>` },
    { title: 'Vật sống và vật không sống', html: `<p><b>Vật sống</b> có các biểu hiện sống: <b>trao đổi chất</b> với môi trường, <b>lớn lên</b>, <b>sinh sản</b>, <b>cảm ứng</b> (phản ứng với kích thích), <b>vận động</b>… Ví dụ: con mèo, cây lúa, vi khuẩn.</p>
      <p><b>Vật không sống</b> không có các biểu hiện đó. Ví dụ: hòn đá, cái bàn, chiếc xe đạp.</p>
      <div class="box tip">Cẩn thận: một chiếc ô tô cũng “chuyển động” và “tiêu thụ nhiên liệu”, nhưng nó không lớn lên, không sinh sản, nên là vật không sống.</div>` }
  ],
  summary: 'Khoa học tự nhiên nghiên cứu sự vật, hiện tượng, quy luật tự nhiên. Các lĩnh vực chính: Vật lí, Hoá học, Sinh học, Khoa học Trái Đất, Thiên văn học. Vật sống có trao đổi chất, lớn lên, sinh sản, cảm ứng.',
  examples: [
    { title: 'Xếp hiện tượng vào lĩnh vực', problem: 'Mỗi hiện tượng sau thuộc lĩnh vực nào: a) cầu vồng xuất hiện sau mưa; b) đinh sắt bị gỉ; c) hạt đậu nảy mầm; d) nhật thực.', solution: 'a) Vật lí học (ánh sáng). b) Hoá học (sự biến đổi chất). c) Sinh học (vật sống). d) Thiên văn học (Mặt Trời, Mặt Trăng, Trái Đất).' },
    { title: 'Phân biệt vật sống', problem: 'Trong các vật sau, vật nào là vật sống: cây bàng, viên gạch, con cá, đám mây, cây nấm?', solution: 'Vật sống: cây bàng, con cá, cây nấm (đều trao đổi chất, lớn lên, sinh sản). Viên gạch và đám mây là vật không sống.' },
    { title: 'Vai trò của KHTN', problem: 'Việc sản xuất vắc xin phòng bệnh thể hiện vai trò nào của Khoa học tự nhiên?', solution: 'Vai trò chăm sóc sức khoẻ con người (và cũng là ứng dụng công nghệ vào đời sống).' }
  ],
  exercises: [
    { question: 'Hoạt động nào sau đây là hoạt động nghiên cứu khoa học: a) Bạn Hà đo nhiệt độ nước mỗi giờ để tìm hiểu nước nguội đi như thế nào; b) Bạn Nam đá bóng?', hints: ['Nghiên cứu khoa học thường gồm quan sát, đo đạc, ghi chép để tìm hiểu một điều gì đó.', 'Hoạt động nào có đo đạc và mục đích tìm hiểu?'], solution: 'Hoạt động a) là nghiên cứu khoa học vì có đo đạc, ghi chép nhằm tìm ra quy luật.' },
    { question: 'Nêu hai dấu hiệu giúp em khẳng định cây xoài là vật sống.', hints: ['Nhớ lại các biểu hiện sống: trao đổi chất, lớn lên, sinh sản, cảm ứng.', 'Cây xoài có ra hoa, kết quả không? Có cao lớn dần không?'], solution: 'Ví dụ: cây xoài lớn lên (cao dần, thêm cành lá) và sinh sản (ra hoa, kết quả, hạt nảy mầm thành cây mới). Cây còn trao đổi chất: hút nước, lấy khí carbon dioxide và thải khí oxygen.' },
    { question: 'Kể tên một đồ vật trong nhà em là thành tựu của Vật lí học và giải thích ngắn gọn.', hints: ['Vật lí nghiên cứu năng lượng, điện, ánh sáng, chuyển động…', 'Hãy nghĩ tới các thiết bị dùng điện.'], solution: 'Ví dụ: bóng đèn điện – biến điện năng thành quang năng, là ứng dụng của nghiên cứu về điện và ánh sáng. (Có thể kể quạt điện, tủ lạnh…)' }
  ],
  quiz: [
    { type: 'mcq', q: 'Lĩnh vực nào nghiên cứu về chất và sự biến đổi của chất?', options: ['Vật lí học', 'Hoá học', 'Sinh học', 'Thiên văn học'], answer: 1, explain: 'Hoá học nghiên cứu về chất và sự biến đổi của chất.' },
    { type: 'mcq', q: 'Vật nào sau đây là vật sống?', options: ['Hòn đá', 'Con giun đất', 'Chiếc xe máy', 'Ngọn nến'], answer: 1, explain: 'Con giun đất có trao đổi chất, lớn lên, sinh sản, cảm ứng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chiếc ô tô chuyển động được nên là vật sống.', answer: false, explain: 'Ô tô không lớn lên, không sinh sản; nó là vật không sống.' },
    { type: 'mcq', q: 'Hiện tượng Mặt Trăng che khuất Mặt Trời (nhật thực) thuộc lĩnh vực:', options: ['Sinh học', 'Hoá học', 'Thiên văn học', 'Khoa học Trái Đất'], answer: 2, explain: 'Thiên văn học nghiên cứu các thiên thể và hiện tượng liên quan.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khoa học tự nhiên góp phần bảo vệ môi trường.', answer: true, explain: 'Bảo vệ môi trường và phát triển bền vững là một vai trò quan trọng của KHTN.' },
    { type: 'mcq', q: 'Dấu hiệu nào sau đây chỉ có ở vật sống?', options: ['Có màu sắc', 'Có khối lượng', 'Sinh sản', 'Chiếm chỗ trong không gian'], answer: 2, explain: 'Mọi vật đều có khối lượng, chiếm chỗ; chỉ vật sống mới sinh sản.' },
    { type: 'short', q: 'Lĩnh vực khoa học tự nhiên nghiên cứu về sinh vật và sự sống gọi là gì? (điền 2 tiếng)', answer: ['sinh học', 'sinh hoc'], answerText: 'sinh học', explain: 'Sinh học nghiên cứu về sinh vật và sự sống; vật lí học nghiên cứu về vật chất, năng lượng và chuyển động; hoá học nghiên cứu về chất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Làm thí nghiệm là một cách tìm hiểu tự nhiên của các nhà khoa học.', answer: true, explain: 'Quan sát, thí nghiệm, đo đạc, suy luận là những cách tìm hiểu tự nhiên.' }
  ]
});
