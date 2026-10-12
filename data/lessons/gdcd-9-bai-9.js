/* GDCD 9 – Bài 9. Vi phạm pháp luật và trách nhiệm pháp lí. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-9', {
  objectives: [
    'Nêu được khái niệm, các loại vi phạm pháp luật.',
    'Nêu được khái niệm, các loại trách nhiệm pháp lí.',
    'Phân tích, đánh giá được các hành vi vi phạm pháp luật trong tình huống cụ thể.',
    'Nghiêm chỉnh chấp hành pháp luật; phê phán hành vi vi phạm.'
  ],
  intro: 'Tuấn (15 tuổi) mượn xe máy của anh trai, chở hai bạn đi chơi, không đội mũ bảo hiểm và bị cảnh sát giao thông dừng lại. Tuấn nghĩ: “Mình chưa đủ tuổi, chắc không sao”. Tuấn đã hiểu đúng về <b>vi phạm pháp luật và trách nhiệm pháp lí</b> chưa?',
  steps: [
    { title: 'Vi phạm pháp luật', html: `<p><b>Vi phạm pháp luật</b> là hành vi trái pháp luật, có lỗi, do người có năng lực trách nhiệm pháp lí thực hiện, xâm phạm các quan hệ xã hội được pháp luật bảo vệ.</p><p>Dấu hiệu: (1) trái pháp luật; (2) có lỗi (cố ý hoặc vô ý); (3) chủ thể có năng lực trách nhiệm pháp lí.</p>` },
    { title: 'Các loại vi phạm pháp luật', html: `<p>Bốn loại:</p>`,
      svg: S.table({ title: 'Các loại vi phạm pháp luật', head: ['Loại', 'Ví dụ'], rows: [['Hình sự (tội phạm)', 'Trộm cắp tài sản'], ['Hành chính', 'Vượt đèn đỏ'], ['Dân sự', 'Không trả tiền thuê nhà'], ['Kỉ luật', 'Công chức tự ý bỏ việc']], colW: 250 }), caption: 'Mỗi loại vi phạm dẫn tới trách nhiệm pháp lí tương ứng.' },
    { title: 'Trách nhiệm pháp lí', html: `<p><b>Trách nhiệm pháp lí</b> là nghĩa vụ phải gánh chịu hậu quả bất lợi do vi phạm pháp luật. Gồm: trách nhiệm hình sự, hành chính, dân sự, kỉ luật. Mục đích: buộc chấm dứt vi phạm, giáo dục, răn đe.</p>`,
      svg: S.table({ title: 'Độ tuổi chịu trách nhiệm theo luật', head: ['Độ tuổi', 'Trách nhiệm'], rows: [['Từ đủ 14 đến dưới 16', 'Hình sự: tội rất nghiêm trọng, ĐBNT'], ['Từ đủ 16', 'Hình sự: mọi tội phạm'], ['Từ đủ 14 đến dưới 16', 'Hành chính: vi phạm do cố ý'], ['Từ đủ 16', 'Hành chính: mọi vi phạm']], colW: 250 }), caption: 'ĐBNT: đặc biệt nghiêm trọng. BLHS 2015, Điều 12; Luật XLVPHC 2012, Điều 5.' },
    { title: 'Chấp hành pháp luật', html: `<ul><li>Tìm hiểu, tự giác chấp hành pháp luật (giao thông, an ninh mạng, trật tự…).</li><li>Không đua đòi, không để bị lôi kéo vào hành vi phạm pháp.</li><li>Phê phán, tố giác hành vi vi phạm.</li></ul>
      <div class="box key">Chưa đủ tuổi không có nghĩa là được vi phạm.</div>` }
  ],
  summary: 'Vi phạm pháp luật là hành vi trái pháp luật, có lỗi, do người có năng lực trách nhiệm pháp lí thực hiện. Có bốn loại: hình sự, hành chính, dân sự, kỉ luật; tương ứng là bốn loại trách nhiệm pháp lí. Theo Bộ luật Hình sự 2015 (Điều 12), người từ đủ 16 tuổi chịu trách nhiệm hình sự về mọi tội phạm; từ đủ 14 đến dưới 16 tuổi chịu trách nhiệm về một số tội rất nghiêm trọng, đặc biệt nghiêm trọng. Theo Luật Xử lý vi phạm hành chính 2012 (Điều 5), người từ đủ 14 đến dưới 16 tuổi bị xử phạt về vi phạm hành chính do cố ý.',
  examples: [
    { title: 'Tình huống của Tuấn', problem: 'Tuấn có vi phạm không?', solution: 'Có. Điều khiển xe máy khi chưa đủ tuổi, chở quá số người, không đội mũ bảo hiểm là vi phạm hành chính do cố ý; Tuấn 15 tuổi vẫn bị xử lí (có thể bị cảnh cáo). Người giao xe cho Tuấn cũng vi phạm.' },
    { title: 'Phân loại', problem: 'Bạn A cố ý đập vỡ kính cửa nhà hàng xóm và phải bồi thường. Đây là trách nhiệm gì?', solution: 'Trách nhiệm dân sự (bồi thường thiệt hại).' },
    { title: 'Tính tuổi', problem: 'Bạn sinh ngày 15/3/2011. Đến ngày nào bạn đủ 16 tuổi?', solution: '15/3/2027.' }
  ],
  exercises: [
    { question: 'Nêu ba dấu hiệu của vi phạm pháp luật.', hints: ['Trái với gì?', 'Lỗi và chủ thể.'], solution: 'Trái pháp luật; có lỗi; chủ thể có năng lực trách nhiệm pháp lí.' },
    { question: 'Một bạn sinh năm 2012. Năm nào bạn đủ 14 tuổi?', hints: ['Cộng 14.', '2012 + 14.'], solution: 'Năm 2026.' },
    { question: 'Vì sao học sinh cần tìm hiểu và chấp hành pháp luật?', hints: ['Bảo vệ bản thân.', 'Trách nhiệm công dân.'], solution: 'Để tự bảo vệ mình, tránh vi phạm, sống có trách nhiệm và góp phần giữ gìn trật tự xã hội.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vi phạm pháp luật là hành vi trái pháp luật, có lỗi, do người có năng lực trách nhiệm pháp lí thực hiện.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Vượt đèn đỏ là vi phạm:', options: ['hành chính', 'hình sự', 'dân sự', 'kỉ luật'], answer: 0, explain: 'Hành chính.' },
    { type: 'short', q: 'Theo Bộ luật Hình sự 2015, người từ đủ bao nhiêu tuổi chịu trách nhiệm hình sự về mọi tội phạm?', answer: '16', unit: 'tuổi', calc: '16', explain: 'Điều 12.' },
    { type: 'mcq', q: 'Không trả tiền thuê nhà đúng hợp đồng là vi phạm:', options: ['dân sự', 'hình sự', 'hành chính', 'kỉ luật'], answer: 0, explain: 'Dân sự.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Học sinh 15 tuổi cố ý vi phạm hành chính thì không bị xử lí gì.', answer: false, explain: 'Bị xử phạt (Luật XLVPHC, Điều 5).' },
    { type: 'short', q: 'Có bao nhiêu loại vi phạm pháp luật?', answer: '4', unit: 'loại', calc: '4', explain: 'Hình sự, hành chính, dân sự, kỉ luật.' },
    { type: 'short', q: 'Sinh năm 2012, năm nào đủ 14 tuổi?', answer: '2026', calc: '2012+14', explain: '2026.' },
    { type: 'mcq', q: 'Mục đích của trách nhiệm pháp lí:', options: ['Chấm dứt vi phạm, giáo dục, răn đe', 'Trả thù người vi phạm', 'Làm nhục người vi phạm', 'Không có mục đích'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
