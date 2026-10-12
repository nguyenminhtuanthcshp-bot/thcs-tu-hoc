/* GDCD 8 – Bài 2. Tôn trọng sự đa dạng của các dân tộc. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-8/bai-2', {
  objectives: [
    'Nêu được một số biểu hiện của sự đa dạng của các dân tộc và các nền văn hoá trên thế giới.',
    'Hiểu được ý nghĩa của việc tôn trọng sự đa dạng của các dân tộc.',
    'Thể hiện được bằng lời nói và việc làm thái độ tôn trọng sự đa dạng.',
    'Phê phán hành vi kì thị, phân biệt đối xử vì khác biệt dân tộc, văn hoá.'
  ],
  intro: 'Lớp 8B có bạn Y Nhi người Ê Đê từ Đắk Lắk chuyển đến. Trong giờ ra chơi, Nhi kể về lễ mừng lúa mới và tiếng cồng chiêng quê mình. Vài bạn tò mò, nhưng cũng có bạn trêu giọng nói của Nhi. Ứng xử thế nào mới là <b>tôn trọng sự đa dạng</b>?',
  steps: [
    { title: 'Sự đa dạng của các dân tộc', html: `<p>Việt Nam có <b>54 dân tộc</b> anh em; thế giới có hàng nghìn dân tộc. Sự đa dạng thể hiện ở: ngôn ngữ, trang phục, ẩm thực, kiến trúc nhà ở, lễ hội, phong tục, tín ngưỡng, nghệ thuật.</p>`,
      svg: S.pieChart({ title: 'Cơ cấu dân số theo dân tộc (Tổng điều tra 2019)', parts: [{ v: 85.3, label: 'Dân tộc Kinh: 85,3%' }, { v: 14.7, label: '53 dân tộc khác: 14,7%' }] }), caption: 'Nguồn: Tổng điều tra dân số và nhà ở năm 2019 (số liệu làm tròn).' },
    { title: 'Bình đẳng giữa các dân tộc', html: `<p><b>Hiến pháp năm 2013, Điều 5</b> khẳng định: các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển; nghiêm cấm mọi hành vi kì thị, chia rẽ dân tộc.</p>` },
    { title: 'Ý nghĩa của tôn trọng sự đa dạng', html: `<ul><li>Tạo sự đoàn kết, hiểu biết, hợp tác giữa các dân tộc, các quốc gia.</li><li>Làm phong phú đời sống văn hoá; học hỏi lẫn nhau.</li><li>Góp phần giữ gìn hoà bình.</li></ul>` },
    { title: 'Biểu hiện tôn trọng và hành vi cần phê phán', html: `<p>Tôn trọng là tìm hiểu, học hỏi, không chế giễu sự khác biệt.</p>`,
      svg: S.compare({ title: 'Tôn trọng và kì thị', left: { h: 'Tôn trọng', items: ['Tìm hiểu phong tục bạn khác', 'Lắng nghe, học hỏi', 'Mời bạn cùng tham gia', 'Giới thiệu văn hoá các dân tộc'] }, right: { h: 'Kì thị', items: ['Chế giễu giọng nói, trang phục', 'Cho văn hoá mình là nhất', 'Xa lánh bạn khác dân tộc', 'Gán ghép định kiến'] } }), caption: 'Khác biệt không phải là hơn – kém.' }
  ],
  summary: 'Các dân tộc và nền văn hoá đa dạng về ngôn ngữ, trang phục, ẩm thực, lễ hội, phong tục… Việt Nam có 54 dân tộc bình đẳng (Hiến pháp 2013, Điều 5). Tôn trọng sự đa dạng giúp đoàn kết, học hỏi, giữ gìn hoà bình. Cần tìm hiểu, học hỏi và phê phán kì thị, chế giễu sự khác biệt.',
  examples: [
    { title: 'Xử lí tình huống', problem: 'Bạn bị trêu giọng nói như Y Nhi. Em làm gì?', solution: 'Ngăn các bạn trêu, động viên Nhi, rủ cả lớp tìm hiểu văn hoá Ê Đê.' },
    { title: 'Tính số dân tộc thiểu số', problem: 'Việt Nam có 54 dân tộc, trong đó dân tộc Kinh là dân tộc đa số. Có bao nhiêu dân tộc thiểu số?', solution: '54 − 1 = 53 dân tộc.' },
    { title: 'Nhận diện đa dạng', problem: 'Kể tên một nét văn hoá của một dân tộc khác mà em biết.', solution: 'Ví dụ: nhà rông của người Ba Na, Xơ Đăng; lễ hội Gầu Tào của người Mông; áo dài khăn đóng của người Kinh.' }
  ],
  exercises: [
    { question: 'Vì sao không được chế giễu phong tục của dân tộc khác?', hints: ['Nghĩ đến quyền bình đẳng.', 'Nghĩ đến cảm xúc của người bị chế giễu.'], solution: 'Vì các dân tộc bình đẳng, mọi nền văn hoá đều có giá trị riêng; chế giễu gây tổn thương, chia rẽ và bị pháp luật nghiêm cấm khi là kì thị dân tộc.' },
    { question: 'Theo số liệu năm 2019, dân tộc Kinh chiếm 85,3% dân số. Các dân tộc còn lại chiếm bao nhiêu phần trăm?', hints: ['Tổng là 100%.', '100 − 85,3.'], solution: '14,7%.' },
    { question: 'Đề xuất một hoạt động giúp lớp em tìm hiểu văn hoá các dân tộc.', hints: ['Hoạt động nhóm.', 'Có sản phẩm trưng bày.'], solution: 'Tổ chức “Ngày hội văn hoá các dân tộc”: mỗi tổ tìm hiểu một dân tộc, trình bày trang phục, món ăn, lễ hội.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các dân tộc ở Việt Nam đều bình đẳng.', answer: true, explain: 'Hiến pháp 2013, Điều 5.' },
    { type: 'short', q: 'Việt Nam có bao nhiêu dân tộc?', answer: '54', unit: 'dân tộc', calc: '54', explain: '54.' },
    { type: 'mcq', q: 'Hành vi thể hiện tôn trọng sự đa dạng:', options: ['Tìm hiểu lễ hội của dân tộc khác', 'Chế giễu trang phục lạ', 'Cho rằng văn hoá mình hơn hết', 'Xa lánh bạn người nước ngoài'], answer: 0, explain: 'Học hỏi.' },
    { type: 'short', q: 'Có bao nhiêu dân tộc thiểu số ở Việt Nam?', answer: '53', unit: 'dân tộc', calc: '54-1', explain: '53.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khác biệt về văn hoá nghĩa là có dân tộc hơn, dân tộc kém.', answer: false, explain: 'Khác biệt không phải hơn – kém.' },
    { type: 'mcq', q: 'Văn bản quy định các dân tộc bình đẳng, nghiêm cấm kì thị, chia rẽ dân tộc:', options: ['Hiến pháp năm 2013', 'Luật Giao thông', 'Luật Lao động', 'Luật Thuế'], answer: 0, explain: 'Điều 5.' },
    { type: 'short', q: 'Dân tộc Kinh chiếm 85,3% dân số. Phần còn lại chiếm bao nhiêu %?', answer: '14,7', unit: '%', calc: '100-85.3', explain: '14,7%.' },
    { type: 'mcq', q: 'Ý nghĩa của tôn trọng sự đa dạng:', options: ['Tăng đoàn kết, học hỏi lẫn nhau', 'Gây chia rẽ', 'Làm mất bản sắc', 'Không có ý nghĩa'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
