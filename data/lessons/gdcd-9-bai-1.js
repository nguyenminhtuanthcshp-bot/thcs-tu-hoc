/* GDCD 9 – Bài 1. Sống có lí tưởng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-1', {
  objectives: [
    'Nêu được khái niệm sống có lí tưởng.',
    'Giải thích được ý nghĩa của việc sống có lí tưởng.',
    'Nhận biết được lí tưởng sống của thanh niên Việt Nam hiện nay.',
    'Xác định được lí tưởng sống của bản thân và rèn luyện để thực hiện.'
  ],
  intro: 'Sau khi tham gia đội tình nguyện dạy học cho trẻ em vùng cao, Hằng (lớp 9) quyết tâm thi vào trường sư phạm để sau này trở về quê dạy học. Từ đó, Hằng học tập chăm chỉ hơn, sắp xếp thời gian khoa học hơn. Hằng đang <b>sống có lí tưởng</b>.',
  steps: [
    { title: 'Thế nào là sống có lí tưởng?', html: `<p><b>Lí tưởng sống</b> là mục đích cao đẹp mà mỗi người hướng tới, phấn đấu đạt được trong cuộc đời. <b>Sống có lí tưởng</b> là xác định được mục đích cao đẹp đó và nỗ lực hành động để thực hiện, vì bản thân và vì lợi ích của cộng đồng, đất nước.</p>` },
    { title: 'Ý nghĩa', html: `<p>Lí tưởng như “kim chỉ nam” định hướng mọi hành động:</p>`,
      svg: S.mindmap({ center: 'Sống có lí tưởng', branches: [{ title: 'Định hướng', items: ['Biết mình cần làm gì', 'Có kế hoạch rõ'] }, { title: 'Động lực', items: ['Vượt khó khăn', 'Kiên trì phấn đấu'] }, { title: 'Cống hiến', items: ['Có ích cho xã hội', 'Được tôn trọng'] }, { title: 'Hoàn thiện', items: ['Rèn đức, luyện tài', 'Sống tích cực'] }], w: 640, size: 13 }), caption: 'Lí tưởng giúp cuộc sống có ý nghĩa.' },
    { title: 'Lí tưởng của thanh niên Việt Nam hiện nay', html: `<p>Phấn đấu vì mục tiêu “dân giàu, nước mạnh, dân chủ, công bằng, văn minh”; học tập, rèn luyện để lập thân, lập nghiệp, góp phần xây dựng và bảo vệ Tổ quốc.</p>`,
      svg: S.compare({ title: 'Sống có lí tưởng và sống thiếu lí tưởng', left: { h: 'Có lí tưởng', items: ['Có mục tiêu học tập rõ ràng', 'Tình nguyện vì cộng đồng', 'Rèn luyện kĩ năng, sức khoẻ', 'Kiên trì khi gặp khó'] }, right: { h: 'Thiếu lí tưởng', items: ['Sống buông thả, không mục đích', 'Chỉ lo hưởng thụ', 'Thờ ơ với xã hội', 'Dễ sa vào tệ nạn'] } }), caption: 'Lí tưởng cần phù hợp lợi ích chung.' },
    { title: 'Rèn luyện', html: `<ul><li>Xác định ước mơ, nghề nghiệp phù hợp năng lực và nhu cầu xã hội.</li><li>Lập kế hoạch học tập, rèn luyện từng giai đoạn.</li><li>Tham gia hoạt động Đoàn, tình nguyện; học tập tấm gương tiêu biểu.</li></ul>
      <div class="box key">Lí tưởng lớn bắt đầu từ việc nhỏ mỗi ngày.</div>` }
  ],
  summary: 'Lí tưởng sống là mục đích cao đẹp mỗi người hướng tới. Sống có lí tưởng là xác định mục đích đó và nỗ lực thực hiện vì bản thân và cộng đồng. Lí tưởng giúp định hướng, tạo động lực, giúp con người cống hiến và hoàn thiện. Thanh niên hôm nay phấn đấu học tập, rèn luyện để lập thân, lập nghiệp, xây dựng đất nước.',
  examples: [
    { title: 'Nhận diện', problem: 'Nam nói: “Sống cho sướng là được, cần gì mục tiêu”. Nhận xét?', solution: 'Nam đang sống thiếu lí tưởng, dễ buông thả; cần xác định mục tiêu rõ ràng.' },
    { title: 'Kế hoạch', problem: 'Hằng cần đạt 24 điểm ba môn thi vào trường sư phạm. Trung bình mỗi môn cần bao nhiêu điểm?', solution: '24 : 3 = 8 điểm.' },
    { title: 'Tấm gương', problem: 'Kể một tấm gương thanh niên sống có lí tưởng.', solution: 'Ví dụ: các chiến sĩ trẻ canh giữ biển đảo, bác sĩ trẻ tình nguyện về vùng sâu, vùng xa.' }
  ],
  exercises: [
    { question: 'Viết lí tưởng sống của em và ba việc làm để thực hiện.', hints: ['Gắn với nghề nghiệp mơ ước.', 'Việc làm cụ thể, ngay bây giờ.'], solution: 'Ví dụ: trở thành kĩ sư nông nghiệp giúp quê hương; học tốt Sinh, Hoá; tham gia CLB khoa học; tìm hiểu mô hình nông nghiệp sạch.' },
    { question: 'Mỗi ngày dành 45 phút học thêm môn yêu thích. Sau 20 ngày là bao nhiêu giờ?', hints: ['45 × 20 = 900 phút.', 'Đổi ra giờ.'], solution: '15 giờ.' },
    { question: 'Vì sao lí tưởng cá nhân cần gắn với lợi ích cộng đồng?', hints: ['Nghĩ đến người khác.', 'Lí tưởng ích kỉ thì sao?'], solution: 'Vì khi đó lí tưởng mới cao đẹp, được xã hội ủng hộ và mang lại ý nghĩa bền vững.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lí tưởng sống là mục đích cao đẹp mà mỗi người hướng tới, phấn đấu đạt được.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện của sống có lí tưởng:', options: ['Có mục tiêu và kiên trì thực hiện', 'Sống buông thả', 'Chỉ lo hưởng thụ', 'Thờ ơ với xã hội'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Cần 24 điểm cho 3 môn. Trung bình mỗi môn bao nhiêu điểm?', answer: '8', unit: 'điểm', calc: '24/3', explain: '8.' },
    { type: 'mcq', q: 'Ý nghĩa của sống có lí tưởng:', options: ['Định hướng, tạo động lực', 'Gây áp lực vô ích', 'Làm mất tự do', 'Không có ý nghĩa'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lí tưởng chỉ cần nghĩ đến, không cần hành động.', answer: false, explain: 'Phải nỗ lực thực hiện.' },
    { type: 'short', q: '45 phút mỗi ngày trong 20 ngày là bao nhiêu giờ?', answer: '15', unit: 'giờ', calc: '45*20/60', explain: '15.' },
    { type: 'mcq', q: 'Việc làm phù hợp lí tưởng của thanh niên hiện nay:', options: ['Học tập, tình nguyện vì cộng đồng', 'Bỏ học đi chơi', 'Sa vào game', 'Sống dựa dẫm'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Mỗi tuần tình nguyện 3 giờ. Sau 12 tuần được bao nhiêu giờ?', answer: '36', unit: 'giờ', calc: '3*12', explain: '36.' }
  ]
});
})();
