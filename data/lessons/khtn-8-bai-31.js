/* KHTN 8 – Bài 31. Hệ vận động ở người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-31', {
  objectives: [
    'Nêu được cấu tạo và chức năng của hệ vận động: bộ xương, khớp, hệ cơ.',
    'Trình bày được cấu tạo của xương dài, thành phần hoá học của xương và sự phối hợp của cơ và xương khi vận động.',
    'Nêu được một số bệnh, tật liên quan đến hệ vận động và biện pháp phòng tránh.',
    'Vận dụng hiểu biết về đòn bẩy để giải thích hoạt động của cơ và xương.'
  ],
  intro: 'Mỗi bước chạy, mỗi cú nhảy đều cần sự phối hợp của hàng trăm cơ và xương. Người trưởng thành có khoảng 206 chiếc xương và hơn 600 cơ. Chúng được sắp xếp và hoạt động như thế nào?',
  steps: [
    { title: 'Bộ xương và khớp', html: `<p>Bộ xương người trưởng thành có khoảng <b>206 xương</b>, chia thành ba phần: <b>xương đầu</b> (hộp sọ, xương mặt), <b>xương thân</b> (cột sống, xương sườn, xương ức) và <b>xương chi</b> (xương tay, xương chân).</p>
      <p>Chức năng: tạo khung nâng đỡ, bảo vệ nội quan (hộp sọ bảo vệ não, lồng ngực bảo vệ tim, phổi), là chỗ bám của cơ giúp cơ thể vận động.</p>
      <p>Các xương liên kết với nhau bằng <b>khớp</b>: khớp động (khớp gối, khớp khuỷu), khớp bán động (giữa các đốt sống), khớp bất động (các xương hộp sọ).</p>` },
    { title: 'Cấu tạo và thành phần của xương', html: `<p>Xương dài gồm: đầu xương (sụn đầu xương, mô xương xốp chứa tuỷ đỏ) và thân xương (màng xương, mô xương cứng, khoang xương chứa tuỷ).</p>
      <p>Xương gồm <b>chất hữu cơ</b> (cốt giao – giúp xương mềm dẻo) và <b>chất khoáng</b> (chủ yếu là muối calcium – giúp xương rắn chắc). Trẻ em có tỉ lệ chất hữu cơ cao hơn nên xương dẻo; người già tỉ lệ chất khoáng cao, xương giòn, dễ gãy.</p>`,
      svg: S.boneLong(), caption: 'Cấu tạo của xương dài (sơ đồ).' },
    { title: 'Hệ cơ và sự co cơ', html: `<p>Mỗi bắp cơ gồm nhiều bó cơ, mỗi bó gồm nhiều sợi cơ. Cơ bám vào xương qua gân.</p>
      <p>Khi <b>co</b>, cơ ngắn lại và phình to, kéo xương cử động. Cơ và xương phối hợp như một đòn bẩy: khớp là điểm tựa. Ví dụ: co cẳng tay – cơ hai đầu co, cơ ba đầu dãn; duỗi cẳng tay thì ngược lại.</p>`,
      svg: S.armMuscle(), caption: 'Khi co cẳng tay: cơ hai đầu co, cơ ba đầu dãn, khớp khuỷu là điểm tựa.' },
    { title: 'Bệnh, tật và bảo vệ hệ vận động', html: `<ul><li><b>Cong vẹo cột sống</b>: do ngồi sai tư thế, mang vác nặng một bên.</li><li><b>Loãng xương</b>: thiếu calcium, vitamin D, ít vận động; hay gặp ở người cao tuổi.</li><li><b>Gãy xương, bong gân</b>: do tai nạn; cần sơ cứu đúng cách (cố định chỗ xương gãy bằng nẹp) rồi đưa đến cơ sở y tế.</li></ul>
      <div class="box tip">Bảo vệ: ăn đủ chất (calcium, protein, vitamin D), tắm nắng sớm, tập thể dục đều đặn, ngồi học đúng tư thế, mang cặp hai quai.</div>` }
  ],
  summary: 'Hệ vận động gồm bộ xương (khoảng 206 xương: đầu, thân, chi), khớp và hệ cơ. Xương gồm chất hữu cơ (dẻo) và chất khoáng calcium (rắn chắc). Cơ co kéo xương cử động quanh khớp như đòn bẩy. Phòng bệnh: dinh dưỡng đủ, vận động hợp lí, đúng tư thế.',
  examples: [
    { title: 'Phân loại khớp', problem: 'Khớp giữa các xương hộp sọ, khớp gối, khớp giữa các đốt sống thuộc loại khớp nào?', solution: 'Hộp sọ: khớp bất động; khớp gối: khớp động; giữa các đốt sống: khớp bán động.' },
    { title: 'Xương trẻ em và người già', problem: 'Vì sao người già dễ bị gãy xương hơn trẻ em?', solution: 'Xương người già có tỉ lệ chất hữu cơ giảm, chất khoáng tương đối nhiều hơn nên giòn, kém đàn hồi, dễ gãy.' },
    { title: 'Cơ và đòn bẩy', problem: 'Khi co cẳng tay, điểm tựa, lực tác dụng và vật (quả tạ trong tay) nằm ở đâu?', solution: 'Điểm tựa: khớp khuỷu; lực: cơ hai đầu kéo cẳng tay ở gần khuỷu; vật: quả tạ ở bàn tay xa khuỷu.' }
  ],
  exercises: [
    { question: 'Nêu ba chức năng của bộ xương.', hints: ['Nghĩ đến hình dáng cơ thể.', 'Nghĩ đến hộp sọ, lồng ngực và chỗ bám của cơ.'], solution: 'Nâng đỡ cơ thể (tạo khung); bảo vệ nội quan; làm chỗ bám cho cơ giúp cơ thể vận động (tuỷ đỏ còn tạo tế bào máu).' },
    { question: 'Vì sao học sinh cần ngồi học đúng tư thế và mang cặp hai quai?', hints: ['Cột sống ở tuổi học sinh đang phát triển.', 'Mang lệch một bên thì sao?'], solution: 'Để tránh cong vẹo cột sống: ngồi sai hoặc mang nặng một bên làm cột sống lệch dần.' },
    { question: 'Kể hai việc em làm được để xương chắc khoẻ.', hints: ['Về ăn uống.', 'Về vận động, ánh nắng.'], solution: 'Ví dụ: uống sữa, ăn tôm cá (giàu calcium); tắm nắng sáng sớm (tạo vitamin D); tập thể dục, chơi thể thao vừa sức.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bộ xương người trưởng thành có khoảng 206 xương.', answer: true, explain: 'Khoảng 206 xương.' },
    { type: 'mcq', q: 'Thành phần giúp xương rắn chắc là:', options: ['chất hữu cơ (cốt giao)', 'muối calcium (chất khoáng)', 'nước', 'tuỷ đỏ'], answer: 1, explain: 'Chất khoáng giúp xương rắn chắc.' },
    { type: 'mcq', q: 'Khớp giữa các đốt sống là:', options: ['khớp động', 'khớp bán động', 'khớp bất động', 'không phải khớp'], answer: 1, explain: 'Cử động hạn chế nên là khớp bán động.' },
    { type: 'short', q: 'Bộ xương có khoảng 206 xương, trong đó xương đầu khoảng 29 xương (kể cả xương tai giữa và xương móng), xương thân khoảng 51 xương. Xương chi có khoảng bao nhiêu chiếc?', answer: '126', unit: 'xương', calc: '206-29-51', explain: '206 − 29 − 51 = 126 xương.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi cơ co, cơ dài ra và mỏng đi.', answer: false, explain: 'Cơ co thì ngắn lại, phình to.' },
    { type: 'mcq', q: 'Bệnh loãng xương thường do:', options: ['thừa calcium', 'thiếu calcium, vitamin D, ít vận động', 'uống nhiều nước', 'ngủ nhiều'], answer: 1, explain: 'Thiếu calcium, vitamin D, ít vận động.' },
    { type: 'short', q: 'Cơ hai đầu kéo cẳng tay cách khớp khuỷu 4 cm, quả tạ nặng 20 N cách khuỷu 32 cm. Lực cơ tối thiểu để giữ cẳng tay nằm ngang là bao nhiêu N? (bỏ qua trọng lượng cẳng tay)', answer: '160', unit: 'N', calc: '20*32/4', explain: 'F · 4 = 20 · 32 ⇒ F = 160 N: cơ cần lực lớn hơn nhiều trọng lượng quả tạ.' },
    { type: 'short', q: 'Học sinh nên mang cặp không quá 10 % khối lượng cơ thể (khuyến nghị tham khảo). Bạn nặng 40 kg nên mang cặp tối đa bao nhiêu kg?', answer: '4', unit: 'kg', calc: '40*10/100', explain: '40 · 10 : 100 = 4 kg.' }
  ]
});
})();
