/* GDCD 7 – Bài 10. Quyền và nghĩa vụ của công dân trong gia đình. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-10', {
  objectives: [
    'Nêu được khái niệm gia đình và vai trò của gia đình.',
    'Nêu được quy định cơ bản của pháp luật về quyền và nghĩa vụ của các thành viên trong gia đình (Luật Hôn nhân và gia đình năm 2014).',
    'Thực hiện được nghĩa vụ của bản thân với ông bà, cha mẹ, anh chị em; phê phán hành vi vi phạm.'
  ],
  intro: 'Bố mẹ đi làm vất vả, ông bà đã già yếu. Mai tự giác trông em, nấu cơm, đỡ đần ông bà. Mai đang thực hiện <b>nghĩa vụ của con cháu trong gia đình</b> theo đạo lí và pháp luật.',
  steps: [
    { title: 'Gia đình và vai trò', html: `<p><b>Gia đình</b> là tập hợp những người gắn bó với nhau do hôn nhân, quan hệ huyết thống hoặc quan hệ nuôi dưỡng, làm phát sinh các quyền và nghĩa vụ giữa họ. Gia đình là nơi nuôi dưỡng, giáo dục, che chở mỗi người; là “tế bào” của xã hội.</p>
      <p>Hiến pháp năm 2013 (Điều 36) khẳng định: Nhà nước bảo hộ hôn nhân và gia đình, bảo hộ quyền lợi của người mẹ và trẻ em.</p>` },
    { title: 'Quyền và nghĩa vụ theo pháp luật', html: `<p>Luật Hôn nhân và gia đình năm 2014 quy định:</p>`,
      svg: S.table({ title: 'Quyền và nghĩa vụ trong gia đình (Luật HN&GĐ 2014)', head: ['Thành viên', 'Quy định chính (tóm tắt)'], rows: [['Cha mẹ (Điều 69)', 'Nuôi dưỡng, giáo dục con'], ['Con (Điều 70)', 'Hiếu thảo, phụng dưỡng'], ['Ông bà, cháu (Điều 104)', 'Chăm sóc – kính trọng'], ['Anh chị em (Điều 105)', 'Thương yêu, giúp đỡ nhau']], colW: 260 }), caption: 'Tóm tắt, diễn đạt lại; HN&GĐ: Hôn nhân và gia đình.' },
    { title: 'Hành vi vi phạm', html: `<p>Pháp luật nghiêm cấm: ngược đãi, hành hạ, bạo lực gia đình; bỏ mặc, không nuôi dưỡng con; con cháu xúc phạm, bỏ mặc ông bà, cha mẹ…</p>`,
      svg: S.compare({ title: 'Ứng xử của con cháu', left: { h: 'Thực hiện tốt', items: ['Lễ phép, vâng lời ông bà, cha mẹ', 'Chăm sóc khi ông bà, cha mẹ ốm', 'Nhường nhịn, giúp đỡ em', 'Chăm chỉ học tập'] }, right: { h: 'Vi phạm', items: ['Cãi lại, xúc phạm cha mẹ', 'Bỏ mặc ông bà già yếu', 'Đánh, bắt nạt em nhỏ', 'Đòi hỏi vượt khả năng gia đình'] } }), caption: 'Hiếu thảo vừa là đạo lí, vừa là nghĩa vụ pháp lí.' },
    { title: 'Học sinh làm gì?', html: `<p>Kính trọng, vâng lời ông bà, cha mẹ; giúp việc nhà vừa sức; yêu thương, giúp đỡ anh chị em; chăm học; góp ý nhẹ nhàng khi thấy bạn vô lễ với người thân.</p>
      <p>Ca dao: <i>“Công cha như núi Thái Sơn / Nghĩa mẹ như nước trong nguồn chảy ra”</i>.</p>
      <div class="box key">Mỗi thành viên đều có quyền và nghĩa vụ – yêu thương, chăm sóc nhau.</div>` }
  ],
  summary: 'Gia đình gắn bó bởi hôn nhân, huyết thống hoặc nuôi dưỡng, là nơi nuôi dưỡng, giáo dục mỗi người. Hiến pháp năm 2013 (Điều 36): Nhà nước bảo hộ hôn nhân và gia đình. Luật Hôn nhân và gia đình năm 2014: cha mẹ thương yêu, nuôi dưỡng, giáo dục con (Điều 69); con kính trọng, hiếu thảo, phụng dưỡng cha mẹ (Điều 70); ông bà – cháu (Điều 104); anh chị em thương yêu, giúp đỡ nhau (Điều 105). Nghiêm cấm ngược đãi, bạo lực, bỏ mặc người thân.',
  examples: [
    { title: 'Nhận diện quyền, nghĩa vụ', problem: 'Bố mẹ Lâm cho Lâm đi học đầy đủ và dành thời gian lắng nghe Lâm. Bố mẹ đang thực hiện điều gì?', solution: 'Nghĩa vụ của cha mẹ (thương yêu, tôn trọng ý kiến, chăm lo học tập cho con – Điều 69).' },
    { title: 'Vi phạm', problem: 'Anh Tú đã đi làm nhưng không quan tâm, bỏ mặc mẹ già ốm yếu. Anh Tú vi phạm gì?', solution: 'Vi phạm nghĩa vụ của con đối với cha mẹ (chăm sóc, phụng dưỡng – Điều 70).' },
    { title: 'Anh chị em', problem: 'Chị Hoa kèm em học bài mỗi tối. Đó là thực hiện quy định nào?', solution: 'Quyền, nghĩa vụ của anh chị em: thương yêu, chăm sóc, giúp đỡ nhau (Điều 105).' }
  ],
  exercises: [
    { question: 'Nêu hai nghĩa vụ của cha mẹ và hai nghĩa vụ của con theo Luật Hôn nhân và gia đình năm 2014.', hints: ['Điều 69 về cha mẹ.', 'Điều 70 về con.'], solution: 'Cha mẹ: thương yêu, tôn trọng ý kiến con; nuôi dưỡng, giáo dục con. Con: kính trọng, hiếu thảo; chăm sóc, phụng dưỡng cha mẹ.' },
    { question: 'Kể ba việc em làm để thực hiện nghĩa vụ với ông bà, cha mẹ.', hints: ['Lời nói, thái độ.', 'Việc nhà, học tập.'], solution: 'Lễ phép, hỏi thăm sức khoẻ; phụ giúp việc nhà; chăm chỉ học tập cho bố mẹ yên tâm.' },
    { question: 'Mỗi ngày em dành 30 phút giúp việc nhà. Một tuần là bao nhiêu giờ?', hints: ['30 × 7 phút.', 'Đổi ra giờ.'], solution: '210 phút = 3,5 giờ.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Con có bổn phận kính trọng, hiếu thảo, phụng dưỡng cha mẹ.', answer: true, explain: 'Điều 70 Luật HN&GĐ 2014.' },
    { type: 'mcq', q: 'Nghĩa vụ và quyền của cha mẹ được quy định tại:', options: ['Điều 69 Luật Hôn nhân và gia đình 2014', 'Điều 5 Luật Phòng, chống ma tuý', 'Điều 17 Hiến pháp', 'Điều 321 Bộ luật Hình sự'], answer: 0, explain: 'Điều 69.' },
    { type: 'short', q: 'Quyền, nghĩa vụ của anh, chị, em được quy định tại Điều mấy của Luật Hôn nhân và gia đình 2014?', answer: '105', calc: '105', explain: 'Điều 105.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Con đã lớn thì không còn nghĩa vụ chăm sóc cha mẹ già.', answer: false, explain: 'Vẫn có nghĩa vụ.' },
    { type: 'mcq', q: 'Hành vi vi phạm nghĩa vụ trong gia đình:', options: ['Bỏ mặc ông bà già yếu', 'Kèm em học bài', 'Chăm sóc mẹ ốm', 'Lễ phép với ông bà'], answer: 0, explain: 'Vi phạm.' },
    { type: 'short', q: 'Giúp việc nhà 40 phút mỗi ngày trong 6 ngày. Tổng bao nhiêu giờ?', answer: '4', unit: 'giờ', calc: '40*6/60', explain: '240 phút = 4 giờ.' },
    { type: 'mcq', q: 'Theo Hiến pháp năm 2013 (Điều 36), Nhà nước:', options: ['bảo hộ hôn nhân và gia đình', 'không can thiệp vào gia đình', 'quyết định thay cha mẹ', 'chỉ bảo vệ người lớn'], answer: 0, explain: 'Bảo hộ.' },
    { type: 'mcq', q: 'Quy định về ông bà và cháu nằm ở Điều mấy của Luật HN&GĐ 2014?', options: ['Điều 104', 'Điều 1', 'Điều 69', 'Điều 200'], answer: 0, explain: 'Điều 104.' }
  ]
});
})();
