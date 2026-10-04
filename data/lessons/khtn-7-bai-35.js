/* KHTN 7 – Bài 35. Thực hành: Cảm ứng ở sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var growth = S.bar({ title: 'Số rễ mọc về mỗi phía sau 7 ngày (số liệu mẫu)', cats: ['Phía có cốc nước', 'Phía đất khô'], series: [{ name: 'Số rễ', values: [14, 4], color: '#a16207' }], yMax: 16, yStep: 4, width: 460, height: 280 });
THCS.registerLesson('khtn-7/bai-35', {
  objectives: [
    'Thực hành được thí nghiệm chứng minh tính hướng sáng, hướng nước, hướng tiếp xúc (hoặc hướng trọng lực) ở thực vật.',
    'Quan sát, ghi chép và mô tả được một số tập tính của động vật.',
    'Rèn kĩ năng bố trí thí nghiệm có đối chứng và trình bày báo cáo.'
  ],
  intro: 'Cây không nói được, nhưng cách chúng mọc cho ta biết chúng đang “tìm” ánh sáng hay nước. Trong bài thực hành này, em sẽ tự tạo điều kiện để cây bộc lộ các tính hướng.',
  steps: [
    { title: 'Thí nghiệm 1: Tính hướng sáng', html: `<ol><li>Gieo hạt đậu vào 2 cốc đất ẩm. Khi cây cao khoảng 3 – 4 cm, đặt cốc A vào hộp giấy kín có khoét một lỗ ở thành bên; cốc B để nơi có ánh sáng chiếu đều mọi phía.</li><li>Sau 5 – 7 ngày quan sát hướng mọc của thân.</li></ol>
      <p><b>Kết quả</b>: thân cây ở cốc A cong về phía lỗ sáng; cây ở cốc B mọc thẳng. <b>Kết luận</b>: thân cây có tính hướng sáng.</p>` },
    { title: 'Thí nghiệm 2: Tính hướng nước và hướng trọng lực', html: `<ol><li>Gieo hạt vào khay đất khô, đặt một cốc nhỏ có lỗ chứa nước vùi ở một góc khay (nước thấm dần ra đất xung quanh).</li><li>Sau 7 ngày nhẹ nhàng nhấc cây, quan sát hướng mọc của rễ.</li><li>Hướng trọng lực: đặt hạt đậu đã nảy mầm nằm ngang trên bông ẩm; sau 1 – 2 ngày quan sát rễ và thân.</li></ol>
      <p><b>Kết quả</b>: rễ mọc lan về phía cốc nước; rễ uốn cong xuống dưới, thân uốn cong lên trên.</p>`,
      svg: S.row([{ svg: S.tropism('water'), caption: 'Rễ hướng về nguồn nước' }, { svg: S.tropism('gravity'), caption: 'Rễ hướng xuống, thân hướng lên' }]) },
    { title: 'Thí nghiệm 3: Tính hướng tiếp xúc', html: `<p>Trồng cây đậu leo (hoặc mướp) trong chậu, cắm một cọc tre cạnh cây, một chậu không cắm cọc. Sau khoảng 1 – 2 tuần, quan sát: tua cuốn/thân cây quấn quanh cọc; cây không có cọc bò lan hoặc ngả xuống.</p>`,
      svg: growth, caption: 'Số liệu mẫu ghi từ thí nghiệm hướng nước: phần lớn rễ mọc về phía có nước.' },
    { title: 'Quan sát tập tính ở động vật và báo cáo', html: `<p>Quan sát (trực tiếp hoặc qua video) và ghi lại một số tập tính: kiến tha mồi về tổ, gà mẹ xù lông bảo vệ con, chó vẫy đuôi khi gặp chủ, chim làm tổ… Xếp chúng vào tập tính bẩm sinh hoặc học được, nêu ý nghĩa.</p>
      <p>Báo cáo gồm: mục đích, chuẩn bị, cách tiến hành, kết quả (bảng, hình vẽ), giải thích, kết luận.</p>` }
  ],
  summary: 'Thân cây cong về phía nguồn sáng (hướng sáng); rễ mọc về phía có nước (hướng nước); rễ uốn xuống, thân uốn lên (hướng trọng lực); tua cuốn, thân leo quấn quanh cọc (hướng tiếp xúc). Mỗi thí nghiệm cần có mẫu đối chứng. Quan sát tập tính và phân loại bẩm sinh/học được.',
  examples: [
    { title: 'Mẫu đối chứng', problem: 'Trong thí nghiệm 1, cốc B có vai trò gì?', solution: 'Cốc B là đối chứng: cây nhận ánh sáng đều mọi phía nên mọc thẳng. So sánh với cốc A cho thấy thân cong là do ánh sáng chiếu từ một phía.' },
    { title: 'Tính tỉ lệ rễ', problem: 'Theo biểu đồ, có 14 rễ mọc về phía có nước và 4 rễ mọc về phía đất khô. Tỉ lệ phần trăm số rễ mọc về phía có nước là bao nhiêu (làm tròn đến hàng đơn vị)?', solution: '14 : (14 + 4) · 100% = 14 : 18 · 100% ≈ 78%.' },
    { title: 'Dự đoán kết quả', problem: 'Nếu đặt cốc cây trên đĩa quay chậm đều dưới đèn chiếu từ một phía, thân cây sẽ mọc thế nào?', solution: 'Cây quay đều nên các phía nhận ánh sáng như nhau, thân cây mọc thẳng.' }
  ],
  exercises: [
    { question: 'Vì sao trong thí nghiệm hướng nước phải dùng khay đất khô?', hints: ['Nếu cả khay đều ẩm thì sao?', 'Nước phải phân bố thế nào để thấy rõ hướng mọc?'], solution: 'Đất khô giúp nước chỉ có ở một phía (quanh cốc), nhờ đó thấy rõ rễ mọc về phía có nước. Nếu đất ẩm đều, rễ mọc mọi hướng, không thấy tính hướng nước.' },
    { question: 'Cây trong hộp ở thí nghiệm 1 cao 4 cm, sau 6 ngày cao 13 cm. Trung bình mỗi ngày cây cao thêm bao nhiêu cm?', hints: ['Chiều cao tăng = 13 − 4.', 'Chia cho 6 ngày.'], solution: '(13 − 4) : 6 = 1,5 cm mỗi ngày.' },
    { question: 'Kể 2 tập tính bẩm sinh và 2 tập tính học được mà em quan sát được ở vật nuôi trong nhà.', hints: ['Tập tính bẩm sinh có ngay từ khi sinh ra.', 'Tập tính học được nhờ huấn luyện hoặc kinh nghiệm.'], solution: 'Ví dụ bẩm sinh: mèo con bú mẹ, gà mẹ ấp trứng. Học được: chó chạy ra cổng khi nghe tiếng xe chủ, mèo đi vệ sinh đúng chỗ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cây đặt trong hộp kín có một lỗ sáng sẽ mọc cong về phía lỗ.', answer: true, explain: 'Tính hướng sáng của thân.' },
    { type: 'mcq', q: 'Hạt đậu nảy mầm đặt nằm ngang, sau 2 ngày rễ:', options: ['uốn cong lên trên', 'uốn cong xuống dưới', 'mọc thẳng ngang', 'ngừng mọc'], answer: 1, explain: 'Rễ hướng trọng lực.' },
    { type: 'mcq', q: 'Cây đậu leo quấn quanh cọc tre thể hiện tính:', options: ['hướng sáng', 'hướng tiếp xúc', 'hướng nước', 'hướng hoá'], answer: 1, explain: 'Thân, tua cuốn phản ứng khi tiếp xúc giá thể.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thí nghiệm không cần mẫu đối chứng vẫn kết luận chắc chắn được.', answer: false, explain: 'Cần đối chứng để so sánh.' },
    { type: 'short', q: 'Có 14 rễ mọc về phía có nước, 4 rễ về phía đất khô. Tổng số rễ quan sát được là bao nhiêu?', answer: '18', unit: 'rễ', calc: '14+4', explain: '14 + 4 = 18.' },
    { type: 'short', q: 'Cây cao 4 cm, sau 6 ngày cao 13 cm. Trung bình mỗi ngày cao thêm bao nhiêu cm?', answer: '1,5', unit: 'cm', calc: '(13-4)/6', explain: '9 : 6 = 1,5 cm.' },
    { type: 'mcq', q: 'Tập tính nào là tập tính học được?', options: ['Kiến tha mồi về tổ', 'Chó chạy ra cổng khi nghe tiếng xe của chủ', 'Gà mẹ ấp trứng', 'Nhện giăng tơ'], answer: 1, explain: 'Hình thành qua kinh nghiệm.' },
    { type: 'short', q: 'Rễ mọc về phía có nước 14 rễ, phía đất khô 4 rễ. Số rễ về phía có nước gấp bao nhiêu lần phía đất khô?', answer: '3,5', unit: 'lần', calc: '14/4', explain: '14 : 4 = 3,5.' }
  ]
});
})();
