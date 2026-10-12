/* GDCD 7 – Bài 9. Phòng, chống tệ nạn xã hội. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-7/bai-9', {
  objectives: [
    'Nêu được khái niệm, các loại tệ nạn xã hội phổ biến, nguyên nhân và tác hại.',
    'Nêu được một số quy định của pháp luật về phòng, chống tệ nạn xã hội (ma tuý, cờ bạc…).',
    'Thực hiện được các biện pháp phòng, chống tệ nạn xã hội phù hợp; biết từ chối khi bị rủ rê.'
  ],
  intro: 'Trên đường về, một người lạ mời Tuấn thử một loại “kẹo” và “nước uống” lạ, nói là “uống vào sẽ vui, học tỉnh táo”. Tuấn kiên quyết từ chối và báo bố mẹ. Biết <b>nhận diện và từ chối tệ nạn xã hội</b> là kĩ năng sống quan trọng.',
  steps: [
    { title: 'Tệ nạn xã hội là gì?', html: `<p><b>Tệ nạn xã hội</b> là những hành vi sai lệch chuẩn mực xã hội, vi phạm đạo đức và pháp luật, gây hậu quả xấu cho cá nhân, gia đình và xã hội. Các tệ nạn phổ biến: <b>ma tuý, cờ bạc, mại dâm</b>; ngoài ra còn trộm cắp, mê tín dị đoan, nghiện trò chơi trực tuyến (cá cược)…</p>` },
    { title: 'Nguyên nhân và tác hại', html: `<p>Tệ nạn xã hội có cả nguyên nhân chủ quan và khách quan:</p>`,
      svg: S.table({ title: 'Nguyên nhân và tác hại', head: ['', 'Nội dung'], rows: [['Nguyên nhân chủ quan', 'Tò mò, thiếu hiểu biết'], ['Nguyên nhân khách quan', 'Bị rủ rê, thiếu quan tâm'], ['Tác hại với bản thân', 'Hại sức khoẻ, vi phạm luật'], ['Tác hại với gia đình', 'Kiệt quệ, tan vỡ'], ['Tác hại với xã hội', 'Tăng tội phạm, mất trật tự']], colW: 250 }), caption: 'Tệ nạn gây hại cho cả bản thân, gia đình và xã hội.' },
    { title: 'Quy định của pháp luật', html: `<ul><li><b>Luật Phòng, chống ma tuý năm 2021</b> (Luật số 73/2021/QH14, hiệu lực từ 1/1/2022), <b>Điều 5</b> nghiêm cấm: trồng cây có chứa chất ma tuý; sản xuất, tàng trữ, vận chuyển, mua bán trái phép chất ma tuý; sử dụng, tổ chức sử dụng trái phép chất ma tuý; cưỡng bức, lôi kéo người khác sử dụng trái phép chất ma tuý…; đồng thời nghiêm cấm kì thị người sử dụng trái phép chất ma tuý, người cai nghiện.</li><li><b>Bộ luật Hình sự năm 2015</b> (sửa đổi, bổ sung năm 2017): Điều 321 – tội đánh bạc; Điều 322 – tội tổ chức đánh bạc hoặc gá bạc.</li><li><b>Luật Trẻ em năm 2016</b> (Điều 6 – các hành vi bị nghiêm cấm) cấm lôi kéo, dụ dỗ trẻ em vi phạm pháp luật và cấm bán cho trẻ em hoặc cho trẻ em sử dụng rượu, bia, thuốc lá, chất gây nghiện.</li></ul>` },
    { title: 'Phòng tránh và từ chối', html: `<p>Sống lành mạnh, tránh xa nơi có tệ nạn; không thử “dù chỉ một lần”; cảnh giác với đồ ăn, nước uống của người lạ; biết từ chối và báo người lớn.</p>`,
      svg: S.flowchart({ title: 'Khi bị rủ rê thử chất lạ hoặc cá cược', steps: [{ t: 'start', s: 'Bị rủ rê' }, { t: 'proc', s: 'Nói “Không” dứt khoát' }, { t: 'if', s: 'Vẫn bị ép?', yes: 'Rời đi, kêu cứu', no: 'Chuyển chủ đề' }, { t: 'end', s: 'Báo bố mẹ, thầy cô' }] }), caption: 'Từ chối dứt khoát, rời đi và báo người lớn.' }
  ],
  summary: 'Tệ nạn xã hội là hành vi sai lệch chuẩn mực, vi phạm đạo đức, pháp luật, gây hậu quả xấu; phổ biến là ma tuý, cờ bạc, mại dâm. Nguyên nhân: tò mò, thiếu hiểu biết, bị rủ rê, thiếu quan tâm. Luật Phòng, chống ma tuý năm 2021 (Điều 5) nghiêm cấm các hành vi trái phép về ma tuý; Bộ luật Hình sự 2015 quy định tội đánh bạc (Điều 321), tổ chức đánh bạc (Điều 322). Cần sống lành mạnh, từ chối dứt khoát, báo người lớn.',
  examples: [
    { title: 'Nhận diện', problem: 'Một nhóm học sinh góp tiền cá cược kết quả bóng đá. Đây là tệ nạn gì?', solution: 'Cờ bạc (cá cược trái phép) – có thể bị xử lí theo pháp luật.' },
    { title: 'Kĩ năng từ chối', problem: 'Bạn rủ: “Thử một hơi thuốc lá điện tử thôi, không sao đâu!” Em đáp thế nào?', solution: '“Không, mình không thử đâu, nó hại sức khoẻ.” Rồi chuyển chủ đề hoặc rời đi; nếu bạn có dấu hiệu dùng chất lạ, báo thầy cô.' },
    { title: 'Tác hại kinh tế', problem: 'Một người mỗi tuần thua cá cược 500 000 đồng. Sau 1 năm (52 tuần) mất bao nhiêu?', solution: '26 000 000 đồng.' }
  ],
  exercises: [
    { question: 'Kể ba tệ nạn xã hội phổ biến và một tác hại của mỗi loại.', hints: ['Ma tuý, cờ bạc, mại dâm.', 'Sức khoẻ, kinh tế, pháp luật.'], solution: 'Ma tuý – huỷ hoại sức khoẻ; cờ bạc – mất tiền, nợ nần; mại dâm – lây bệnh, vi phạm pháp luật.' },
    { question: 'Điều nào của Luật Phòng, chống ma tuý năm 2021 quy định các hành vi bị nghiêm cấm? Nêu hai hành vi.', hints: ['Điều 5.', 'Sử dụng, mua bán…'], solution: 'Điều 5; ví dụ: sử dụng trái phép chất ma tuý; lôi kéo người khác sử dụng trái phép chất ma tuý.' },
    { question: 'Vì sao không nên kì thị người đã cai nghiện ma tuý?', hints: ['Luật quy định thế nào?', 'Kì thị ảnh hưởng gì tới họ?'], solution: 'Pháp luật nghiêm cấm kì thị; kì thị khiến họ mặc cảm, dễ tái nghiện; cần giúp họ hoà nhập.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ma tuý, cờ bạc, mại dâm là những tệ nạn xã hội phổ biến.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Luật Phòng, chống ma tuý năm 2021 quy định các hành vi bị nghiêm cấm tại:', options: ['Điều 5', 'Điều 1', 'Điều 50', 'Điều 100'], answer: 0, explain: 'Điều 5.' },
    { type: 'short', q: 'Luật Phòng, chống ma tuý năm 2021 có hiệu lực từ năm nào?', answer: '2022', calc: '2022', explain: '1/1/2022.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thử ma tuý một lần thì không sao.', answer: false, explain: 'Rất dễ nghiện, vi phạm pháp luật.' },
    { type: 'mcq', q: 'Tội đánh bạc được quy định tại Điều mấy của Bộ luật Hình sự 2015?', options: ['Điều 321', 'Điều 17', 'Điều 5', 'Điều 39'], answer: 0, explain: 'Điều 321.' },
    { type: 'short', q: 'Mỗi tuần thua cá cược 200 000 đồng. Sau 52 tuần mất bao nhiêu đồng?', answer: '10400000', answerText: '10 400 000', unit: 'đồng', calc: '200000*52', explain: '10 400 000.' },
    { type: 'mcq', q: 'Người lạ mời ăn “kẹo” lạ, em nên:', options: ['từ chối, báo bố mẹ', 'ăn thử', 'mang về cho bạn', 'giữ bí mật'], answer: 0, explain: 'Từ chối.' },
    { type: 'mcq', q: 'Hành vi pháp luật nghiêm cấm đối với người cai nghiện:', options: ['Kì thị', 'Giúp đỡ hoà nhập', 'Động viên', 'Tạo việc làm'], answer: 0, explain: 'Cấm kì thị.' }
  ]
});
})();
