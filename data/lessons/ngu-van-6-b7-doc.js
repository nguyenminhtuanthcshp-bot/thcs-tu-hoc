/* Ngữ văn 6 – Bài 7. Đọc hiểu: Truyện cổ tích. Văn bản đọc: truyện cổ tích dân gian “Cây tre trăm đốt” (văn học dân gian, phạm vi công cộng), do nhóm biên soạn kể lại bằng lời của mình. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-6/b7-doc', {
  objectives: [
    'Nhận biết được đặc điểm của truyện cổ tích: nhân vật, cốt truyện, yếu tố kì ảo, kết thúc có hậu.',
    'Tóm tắt được truyện và chỉ ra các kiểu nhân vật (nhân vật thiện – nhân vật ác).',
    'Nêu được ý nghĩa của chi tiết kì ảo và của kết thúc truyện.',
    'Hiểu ước mơ về công bằng, lẽ phải của nhân dân.'
  ],
  intro: '“Khắc nhập, khắc nhập!” – chỉ hai tiếng thần kì mà trăm đốt tre rời rạc liền lại thành một cây tre dài. Truyện cổ tích “Cây tre trăm đốt” kể về chàng trai nghèo thật thà và phép lạ giúp anh đòi lại công bằng.',
  text: {
    title: 'Cây tre trăm đốt (kể lại)',
    html: `<p>Ngày xưa, có anh Khoai hiền lành, chăm chỉ, đi ở cho một lão nhà giàu. Lão hứa: “Mày chịu khó làm lụng cho tao ba năm, tao sẽ gả con gái cho.” Anh Khoai tin lời, làm quần quật suốt ba năm, giúp lão giàu thêm bội phần.</p>
<p>Hết hạn, lão nhà giàu lại muốn gả con cho con trai một phú ông trong làng. Để đuổi khéo anh Khoai, lão bảo: “Mày vào rừng tìm cho tao một cây tre trăm đốt về làm đũa cưới, tao sẽ gả con cho.”</p>
<p>Anh Khoai vào rừng tìm mãi, chẳng có cây tre nào đủ trăm đốt. Anh ngồi khóc. Bụt hiện lên, bảo anh chặt đủ một trăm đốt tre rồi đọc “Khắc nhập, khắc nhập!”. Anh làm theo, lập tức trăm đốt tre dính liền thành một cây tre dài. Bụt dặn thêm câu “Khắc xuất, khắc xuất!” để các đốt rời ra.</p>
<p>Anh Khoai vác bó đốt tre về thì làng đang ăn cỗ cưới. Anh đọc “Khắc nhập”, cây tre liền lại. Lão nhà giàu lại gần xem, anh liền đọc “Khắc nhập”, thế là lão dính chặt vào cây tre. Thông gia chạy tới gỡ cũng bị dính theo. Lão van xin rối rít, hứa gả con gái cho anh. Anh Khoai đọc “Khắc xuất”, mọi người mới được thả ra. Từ đó, anh Khoai cưới được vợ, sống hạnh phúc.</p>`,
    source: 'Truyện cổ tích dân gian Việt Nam (phạm vi công cộng), nhóm biên soạn kể lại bằng lời văn của mình.'
  },
  steps: [
    { title: 'Truyện cổ tích là gì?', html: `<p><b>Truyện cổ tích</b> là loại truyện dân gian kể về <b>số phận, cuộc đời</b> của một số kiểu nhân vật quen thuộc (người mồ côi, người em út, người nghèo khổ, người có tài lạ…), thường có yếu tố <b>kì ảo</b> và <b>kết thúc có hậu</b>, thể hiện ước mơ của nhân dân về công bằng, cái thiện thắng cái ác.</p>` },
    { title: 'Cốt truyện “Cây tre trăm đốt”', html: `<p>Truyện được xây dựng theo mô hình quen thuộc: <b>gặp khó khăn – được giúp đỡ – vượt thử thách – được đền đáp</b>.</p>`,
      svg: S.storyArc({ stages: ['Mở đầu', 'Thử thách', 'Cao trào', 'Kết thúc'], peak: 2, notes: ['Anh Khoai làm thuê, được hứa gả con', 'Lão lật lọng, bắt tìm tre trăm đốt', 'Bụt giúp; “Khắc nhập” trị lão', 'Anh Khoai cưới vợ, hạnh phúc'] }),
      caption: 'Sơ đồ cốt truyện “Cây tre trăm đốt”.' },
    { title: 'Nhân vật', html: `<table class="tbl"><tr><th>Nhân vật</th><th>Đặc điểm</th><th>Kiểu nhân vật</th></tr><tr><td>Anh Khoai</td><td>Hiền lành, chăm chỉ, thật thà</td><td>Người nghèo khổ, bất hạnh – nhân vật thiện</td></tr><tr><td>Lão nhà giàu</td><td>Tham lam, xảo trá, lật lọng</td><td>Nhân vật ác</td></tr><tr><td>Bụt</td><td>Xuất hiện khi người tốt gặp khó</td><td>Nhân vật kì ảo, người giúp đỡ</td></tr></table>` },
    { title: 'Yếu tố kì ảo và ý nghĩa', html: `<ul><li><b>Bụt hiện lên</b>: niềm tin người tốt sẽ được giúp đỡ.</li><li><b>Câu thần chú “Khắc nhập – khắc xuất”</b>: công cụ để người lao động nghèo chiến thắng kẻ gian; sức mạnh của lẽ phải.</li><li>Lão nhà giàu <b>bị dính vào cây tre</b>: sự trừng phạt kẻ gian, gây tiếng cười.</li></ul>` },
    { title: 'Kết thúc có hậu', html: `<div class="box tip">Anh Khoai được cưới vợ, lão nhà giàu bị bẽ mặt: thể hiện <b>ước mơ công bằng</b> – “ở hiền gặp lành”, kẻ gian phải trả giá.</div><p>Khi đọc truyện cổ tích, hãy tìm: <b>nhân vật chính thuộc kiểu nào – gặp thử thách gì – ai giúp – kết thúc ra sao – gửi gắm điều gì</b>.</p>` }
  ],
  summary: 'Truyện cổ tích kể về số phận các kiểu nhân vật quen thuộc, có yếu tố kì ảo và kết thúc có hậu, thể hiện ước mơ công bằng. “Cây tre trăm đốt” ca ngợi người lao động hiền lành, chăm chỉ; phê phán kẻ tham lam, lật lọng; khẳng định “ở hiền gặp lành”.',
  examples: [
    { title: 'Tóm tắt', problem: 'Tóm tắt truyện trong 4 câu.', solution: 'Anh Khoai làm thuê ba năm cho lão nhà giàu vì được hứa gả con gái. Lão lật lọng, bắt anh tìm cây tre trăm đốt để đuổi khéo. Nhờ Bụt chỉ câu thần chú “Khắc nhập, khắc xuất”, anh ghép được cây tre và trị lão nhà giàu dính vào tre. Lão phải giữ lời, anh Khoai cưới được vợ.' },
    { title: 'Ý nghĩa chi tiết kì ảo', problem: 'Chi tiết lão nhà giàu dính vào cây tre có ý nghĩa gì?', solution: 'Là sự trừng phạt thích đáng kẻ lật lọng, đồng thời tạo tiếng cười và thể hiện niềm tin của nhân dân vào lẽ phải.' },
    { title: 'Nhận diện thể loại', problem: 'Vì sao “Cây tre trăm đốt” là truyện cổ tích, không phải truyền thuyết?', solution: 'Truyện kể về số phận một người nghèo khổ bình thường, không gắn với nhân vật, sự kiện lịch sử; có yếu tố kì ảo và kết thúc có hậu, thể hiện ước mơ công bằng.' }
  ],
  exercises: [
    { question: 'Tìm hai lời hứa của lão nhà giàu và cho biết lão đã thực hiện chúng thế nào.', hints: ['Lời hứa lúc đầu với anh Khoai.', 'Lời hứa khi bị dính vào cây tre.'], solution: 'Lời hứa 1: làm ba năm sẽ gả con gái – lão lật lọng. Lời hứa 2: khi bị dính, lão hứa gả con – lần này phải giữ lời. Chi tiết cho thấy lão chỉ giữ lời khi bị buộc phải làm.' },
    { question: 'Kể tên thêm hai truyện cổ tích Việt Nam có nhân vật người nghèo khổ hoặc bất hạnh được giúp đỡ.', hints: ['Nghĩ tới truyện có cô gái mồ côi mẹ.', 'Nghĩ tới người có hình dạng xấu xí.'], solution: 'Ví dụ: Tấm Cám, Sọ Dừa, Thạch Sanh, Cây khế.' },
    { question: 'Viết đoạn văn (4–5 câu) nêu bài học em rút ra từ truyện.', hints: ['Bài học về sự trung thực, giữ lời hứa.', 'Bài học về chăm chỉ, hiền lành.'], solution: 'Ví dụ: Truyện dạy em phải biết giữ lời hứa, bởi lật lọng như lão nhà giàu sẽ bị mọi người chê cười. Truyện cũng cho em niềm tin rằng người hiền lành, chăm chỉ như anh Khoai sẽ được đền đáp. Trong cuộc sống, em sẽ cố gắng trung thực, chăm chỉ học tập. Em cũng sẽ không hứa điều mình không làm được.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Truyện cổ tích thường kết thúc:', options: ['Có hậu', 'Luôn bi thảm', 'Không có kết thúc', 'Bằng một bài thơ'], answer: 0, explain: 'Người tốt được đền đáp.' },
    { type: 'mcq', q: 'Anh Khoai thuộc kiểu nhân vật:', options: ['Người nghèo khổ, hiền lành', 'Người anh hùng lịch sử', 'Vị thần', 'Nhân vật ác'], answer: 0, explain: 'Kiểu nhân vật quen thuộc của cổ tích.' },
    { type: 'mcq', q: 'Câu thần chú để các đốt tre liền lại là:', options: ['Khắc nhập', 'Khắc xuất', 'Vừng ơi mở ra', 'Hô biến'], answer: 0, explain: '“Khắc nhập” – dính lại.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lão nhà giàu là người giữ lời hứa.', answer: false, explain: 'Lão lật lọng.' },
    { type: 'mcq', q: 'Nhân vật kì ảo giúp anh Khoai là:', options: ['Bụt', 'Rùa Vàng', 'Long Quân', 'Thạch Sanh'], answer: 0, explain: 'Bụt hiện lên giúp đỡ.' },
    { type: 'mcq', q: 'Truyện thể hiện ước mơ gì của nhân dân?', options: ['Công bằng, ở hiền gặp lành', 'Chinh phục vũ trụ', 'Giải thích lũ lụt', 'Ngợi ca vua chúa'], answer: 0, explain: 'Ý nghĩa truyện cổ tích.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Truyện cổ tích thường có yếu tố kì ảo.', answer: true, explain: 'Bụt, phép lạ…' },
    { type: 'mcq', q: 'Lão nhà giàu bắt anh Khoai tìm tre trăm đốt nhằm:', options: ['Đuổi khéo, lật lọng lời hứa', 'Làm nhà mới', 'Thử tài anh', 'Tặng quà cưới'], answer: 0, explain: 'Lão muốn gả con cho nhà giàu khác.' }
  ]
});
})();
