/* Ngữ văn 8 – Bài 1. Thực hành tiếng Việt: Biệt ngữ xã hội và từ ngữ địa phương. Nội dung do nhóm biên soạn tự viết. */
THCS.registerLesson('ngu-van-8/b1-tv', {
  objectives: [
    'Nhận biết được biệt ngữ xã hội và từ ngữ địa phương.',
    'Hiểu được tác dụng của biệt ngữ xã hội, từ ngữ địa phương trong tác phẩm văn học.',
    'Biết sử dụng biệt ngữ xã hội, từ ngữ địa phương phù hợp với tình huống giao tiếp.'
  ],
  intro: 'Bạn ở Huế nói “Răng rứa?”, bạn ở Hà Nội hiểu là “Sao thế?”. Trong truyện lịch sử, nhà vua xưng “trẫm”. Tiếng Việt thật phong phú – và mỗi cách nói đều có “chỗ đứng” riêng của nó.',
  steps: [
    { title: 'Từ ngữ toàn dân', html: `<p><b>Từ ngữ toàn dân</b> là từ ngữ được mọi người dân trong cả nước hiểu và sử dụng, ví dụ: <i>mẹ, lợn, ngô, đâu, thế, kia, quả</i>.</p>
      <p>Bên cạnh đó còn có những lớp từ chỉ được dùng trong một phạm vi hẹp hơn: <b>từ ngữ địa phương</b> và <b>biệt ngữ xã hội</b>.</p>` },
    { title: 'Từ ngữ địa phương', html: `<p><b>Từ ngữ địa phương</b> là từ ngữ chỉ được dùng ở một (hoặc một số) địa phương nhất định.</p>
      <table class="tbl"><tr><th>Từ địa phương</th><th>Từ toàn dân</th></tr>
      <tr><td>má, u, bầm</td><td>mẹ</td></tr><tr><td>heo</td><td>lợn</td></tr><tr><td>bắp</td><td>ngô</td></tr>
      <tr><td>trái</td><td>quả</td></tr><tr><td>mô, răng, rứa, tê</td><td>đâu, sao, thế, kia</td></tr><tr><td>chén (Nam Bộ)</td><td>bát</td></tr></table>` },
    { title: 'Biệt ngữ xã hội', html: `<p><b>Biệt ngữ xã hội</b> là từ ngữ chỉ được dùng trong một tầng lớp, một nhóm xã hội nhất định.</p>
      <ul><li>Trong triều đình phong kiến: <i>trẫm</i> (vua tự xưng), <i>khanh</i> (vua gọi quan), <i>ngự</i> (dùng cho vua: ngự giá, ngự bút), <i>băng hà</i> (vua mất), <i>long bào</i> (áo vua).</li>
      <li>Trong một số nhóm học sinh, người trẻ: những cách nói riêng chỉ nhóm ấy hiểu, ví dụ gọi điểm kém là “ăn trứng” (điểm 0).</li></ul>`,
      svg: THCS.svg.mindmap({ center: 'Lớp từ theo phạm vi', branches: [{ title: 'Từ toàn dân', items: ['Cả nước dùng', 'mẹ, đâu, thế'] }, { title: 'Từ địa phương', items: ['Một vùng miền', 'mạ, mô, rứa'] }, { title: 'Biệt ngữ xã hội', items: ['Một nhóm xã hội', 'trẫm, khanh'] }, { title: 'Dùng phù hợp', items: ['Theo tình huống', 'Trang trọng: toàn dân'] }] }),
      caption: 'Sơ đồ các lớp từ xét theo phạm vi sử dụng.' },
    { title: 'Tác dụng trong văn học', html: `<p>Trong tác phẩm văn học, nhà văn dùng từ địa phương và biệt ngữ xã hội để:</p><ul><li><b>Tô đậm màu sắc địa phương</b>, màu sắc thời đại, tầng lớp xã hội của nhân vật.</li><li>Làm lời nói nhân vật <b>chân thực, sinh động</b>.</li></ul>
      <p>Ví dụ, trong truyện lịch sử, lời vua xưng “trẫm”, gọi quan là “khanh” giúp tái hiện không khí triều đình xưa.</p>` },
    { title: 'Sử dụng cho phù hợp', html: `<div class="box key">Cần cân nhắc <b>tình huống giao tiếp</b>: nói với ai, ở đâu, nhằm mục đích gì. Trong văn bản trang trọng, văn bản hành chính, bài làm văn nghị luận… nên dùng từ ngữ toàn dân.</div>
      <div class="box tip">Không lạm dụng từ địa phương, biệt ngữ khiến người nghe, người đọc khó hiểu.</div>` }
  ],
  summary: 'Từ ngữ địa phương dùng ở một vùng (má, heo, bắp, mô, rứa…). Biệt ngữ xã hội dùng trong một tầng lớp, nhóm xã hội (trẫm, khanh, băng hà…). Dùng phù hợp tình huống giao tiếp, không lạm dụng.',
  examples: [
    { title: 'Tìm từ địa phương', problem: 'Tìm từ địa phương và từ toàn dân tương ứng trong câu: “Mạ ơi, con đi mô rứa?”', solution: '“mạ” = mẹ; “mô” = đâu; “rứa” = thế. Câu toàn dân: “Mẹ ơi, con đi đâu thế?”' },
    { title: 'Nhận biết biệt ngữ xã hội', problem: 'Trong câu “Trẫm giao cho khanh việc trông coi kinh thành”, từ nào là biệt ngữ xã hội? Của tầng lớp nào?', solution: '“trẫm” (vua tự xưng), “khanh” (vua gọi bề tôi) – biệt ngữ của tầng lớp vua quan trong triều đình phong kiến.' },
    { title: 'Chọn từ phù hợp', problem: 'Trong buổi chào cờ toàn trường, bạn Nam phát biểu: “Tuần ni lớp tui trực nhật, các bạn đừng xả rác ở mô hết nghe!” Em góp ý gì cho Nam?', solution: 'Phát biểu trước toàn trường là tình huống trang trọng, người nghe đến từ nhiều nơi, nên dùng từ ngữ toàn dân: “Tuần này lớp em trực nhật, mong các bạn không xả rác bừa bãi.” Khi trò chuyện thân mật với bạn cùng quê, Nam vẫn có thể dùng “ni”, “mô”, “tui” rất tự nhiên.' }
  ],
  exercises: [
    { question: 'Tìm từ toàn dân tương ứng với các từ địa phương: heo, bắp, tê, răng (nghĩa “sao”).', hints: ['“heo”, “bắp” là từ thường dùng ở miền Nam, miền Trung.', '“tê”, “răng” thường dùng ở miền Trung.'], solution: 'heo – lợn; bắp – ngô; tê – kia; răng – sao.' },
    { question: 'Vì sao trong truyện lịch sử, nhà văn để nhà vua xưng “trẫm”?', hints: ['“trẫm” là biệt ngữ của tầng lớp nào?', 'Nó giúp tái hiện điều gì của thời xưa?'], solution: 'Vì “trẫm” là cách xưng hô riêng của vua trong triều đình phong kiến; dùng từ này giúp tái hiện chân thực không khí, màu sắc thời đại của câu chuyện.' },
    { question: 'Viết lại câu sau bằng từ ngữ toàn dân: “Bầm ơi, con đi học về rồi, nhà mình có bắp luộc không?”', hints: ['“bầm” là cách gọi mẹ ở một số vùng Bắc Bộ, Bắc Trung Bộ.', '“bắp” là từ địa phương chỉ loại cây lương thực nào?'], solution: '“Mẹ ơi, con đi học về rồi, nhà mình có ngô luộc không?”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Từ nào là từ ngữ địa phương?', options: ['mẹ', 'lợn', 'heo', 'ngô'], answer: 2, explain: '“heo” là từ địa phương, từ toàn dân là “lợn”.' },
    { type: 'mcq', q: '“Băng hà” là biệt ngữ của tầng lớp nào?', options: ['Nông dân', 'Vua quan phong kiến', 'Học sinh', 'Thương nhân'], answer: 1, explain: '“băng hà” dùng để chỉ vua mất.' },
    { type: 'short', q: 'Từ toàn dân tương ứng với từ địa phương “bắp” là gì?', answer: 'ngô', explain: '“bắp” = “ngô”.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng thật nhiều từ địa phương trong đơn xin phép gửi nhà trường.', answer: false, explain: 'Văn bản hành chính nên dùng từ ngữ toàn dân.' },
    { type: 'mcq', q: 'Câu “Răng mi không đi học?” có nghĩa là:', options: ['Sao mày không đi học?', 'Răng của mày đau à?', 'Mày đi học ở đâu?', 'Khi nào mày đi học?'], answer: 0, explain: '“răng” = sao; “mi” = mày.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ ngữ địa phương giúp tô đậm màu sắc vùng miền cho nhân vật trong tác phẩm văn học.', answer: true, explain: 'Đó là tác dụng chính của từ địa phương trong văn học.' },
    { type: 'mcq', q: 'Từ nào KHÔNG phải biệt ngữ của triều đình phong kiến?', options: ['trẫm', 'khanh', 'long bào', 'bắp'], answer: 3, explain: '“bắp” là từ địa phương, không phải biệt ngữ triều đình.' },
    { type: 'mcq', q: 'Khi nào dùng từ ngữ địa phương là phù hợp nhất?', options: ['Khi viết báo cáo khoa học', 'Khi trò chuyện thân mật với người cùng quê', 'Khi phát biểu trong lễ khai giảng toàn trường', 'Khi viết văn bản hành chính'], answer: 1, explain: 'Trong giao tiếp thân mật với người cùng vùng, từ địa phương tạo sự gần gũi.' }
  ]
});
