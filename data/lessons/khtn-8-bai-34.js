/* KHTN 8 – Bài 34. Hệ hô hấp ở người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-34', {
  objectives: [
    'Kể tên và nêu được chức năng các cơ quan của hệ hô hấp.',
    'Mô tả được sự thông khí ở phổi (hít vào, thở ra) và sự trao đổi khí ở phổi, ở tế bào.',
    'Nêu được một số bệnh về đường hô hấp, tác hại của khói thuốc lá và biện pháp bảo vệ hệ hô hấp.',
    'Tính được lượng khí lưu thông trong các trường hợp đơn giản.'
  ],
  intro: 'Mỗi ngày em hít thở khoảng hơn hai mươi nghìn lần mà không hề để ý. Không khí đi vào cơ thể theo đường nào và oxygen được lấy vào máu ra sao?',
  steps: [
    { title: 'Các cơ quan hô hấp', html: `<ul><li><b>Đường dẫn khí</b>: mũi (làm ấm, làm ẩm, lọc không khí), họng, thanh quản (phát âm), khí quản, phế quản.</li><li><b>Hai lá phổi</b>: gồm rất nhiều <b>phế nang</b> (túi khí nhỏ) được bao bọc bởi mạng mao mạch dày đặc – nơi trao đổi khí.</li></ul>`,
      svg: S.humanBody({ organs: ['khi-quan', 'phoi', 'tim'], title: 'Khí quản và hai lá phổi trong khoang ngực' }) },
    { title: 'Thông khí ở phổi', html: `<ul><li><b>Hít vào</b>: cơ hoành co (hạ xuống), cơ liên sườn ngoài co ⇒ lồng ngực mở rộng, không khí đi vào phổi.</li><li><b>Thở ra</b>: cơ hoành và cơ liên sườn dãn ⇒ lồng ngực thu nhỏ, không khí từ phổi đi ra ngoài.</li></ul>
      <p>Người trưởng thành lúc nghỉ thở khoảng 16 – 18 lần/phút, mỗi lần hít vào khoảng 500 mL không khí (giá trị tham khảo).</p>` },
    { title: 'Trao đổi khí', html: `<ul><li><b>Ở phổi</b>: O<sub>2</sub> khuếch tán từ phế nang vào máu, CO<sub>2</sub> khuếch tán từ máu vào phế nang.</li><li><b>Ở tế bào</b>: O<sub>2</sub> khuếch tán từ máu vào tế bào, CO<sub>2</sub> từ tế bào vào máu.</li></ul>
      <table class="tbl"><tr><th>Khí</th><th>Khí hít vào</th><th>Khí thở ra</th></tr><tr><td>O<sub>2</sub></td><td>khoảng 21 %</td><td>khoảng 16 %</td></tr><tr><td>CO<sub>2</sub></td><td>khoảng 0,04 %</td><td>khoảng 4 %</td></tr></table>
      <p>(số liệu tham khảo, làm tròn)</p>`,
      svg: S.alveolus(), caption: 'Trao đổi khí giữa phế nang và mao mạch máu.' },
    { title: 'Bảo vệ hệ hô hấp', html: `<ul><li>Bệnh thường gặp: viêm mũi, viêm họng, viêm phế quản, viêm phổi, hen suyễn, lao phổi.</li><li>Khói thuốc lá chứa nicotine, CO, hắc ín… gây ung thư phổi, viêm phế quản; khói thuốc cũng hại người hít phải (hút thuốc thụ động).</li><li>Biện pháp: đeo khẩu trang nơi bụi, trồng cây xanh, không hút thuốc lá, tập thở sâu, luyện tập thể dục thể thao, tiêm vaccine phòng bệnh.</li></ul>` }
  ],
  summary: 'Hệ hô hấp gồm đường dẫn khí (mũi, họng, thanh quản, khí quản, phế quản) và hai lá phổi (phế nang). Hít vào: cơ hoành, cơ liên sườn co, lồng ngực mở rộng; thở ra: các cơ dãn. Trao đổi khí ở phổi và tế bào theo cơ chế khuếch tán. Không hút thuốc, đeo khẩu trang, tập thể dục để bảo vệ hệ hô hấp.',
  examples: [
    { title: 'Lượng khí mỗi phút', problem: 'Một người thở 16 lần/phút, mỗi lần hít vào 500 mL. Tính lượng khí hít vào mỗi phút.', solution: '16 · 500 = 8 000 mL = 8 L.' },
    { title: 'Vai trò của mũi', problem: 'Vì sao nên thở bằng mũi mà không thở bằng miệng?', solution: 'Mũi có lông mũi và lớp niêm mạc tiết chất nhầy giúp lọc bụi, làm ẩm; mạng mao mạch làm ấm không khí trước khi vào phổi.' },
    { title: 'So sánh khí hít vào và thở ra', problem: 'Vì sao khí thở ra có ít O<sub>2</sub> và nhiều CO<sub>2</sub> hơn khí hít vào?', solution: 'Ở phổi, O<sub>2</sub> khuếch tán vào máu để đến tế bào; CO<sub>2</sub> do tế bào thải ra được máu đưa đến phổi và khuếch tán vào phế nang rồi thở ra.' }
  ],
  exercises: [
    { question: 'Sắp xếp đường đi của không khí khi hít vào: phế quản, mũi, khí quản, phế nang, họng, thanh quản.', hints: ['Bắt đầu từ mũi.', 'Phế nang ở cuối cùng.'], solution: 'Mũi → họng → thanh quản → khí quản → phế quản → phế nang.' },
    { question: 'Khi chạy, một người thở 40 lần/phút, mỗi lần 1 000 mL. Lượng khí hít vào mỗi phút gấp mấy lần lúc nghỉ (16 lần/phút, 500 mL/lần)?', hints: ['Tính lượng khí mỗi phút trong từng trường hợp.', 'Chia hai kết quả.'], solution: 'Khi chạy: 40 000 mL; lúc nghỉ: 8 000 mL ⇒ gấp 5 lần.' },
    { question: 'Nêu ba tác hại của khói thuốc lá đối với hệ hô hấp.', hints: ['Nghĩ đến bệnh.', 'Nghĩ đến khí CO và hắc ín.'], solution: 'Ví dụ: hắc ín bám vào đường hô hấp gây viêm phế quản; CO chiếm chỗ O<sub>2</sub> trong hồng cầu; các chất độc gây ung thư phổi.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trao đổi khí ở phổi diễn ra giữa phế nang và mao mạch máu.', answer: true, explain: 'Theo cơ chế khuếch tán.' },
    { type: 'mcq', q: 'Khi hít vào, cơ hoành:', options: ['dãn và nâng lên', 'co và hạ xuống', 'không thay đổi', 'co và nâng lên'], answer: 1, explain: 'Cơ hoành co làm lồng ngực mở rộng.' },
    { type: 'short', q: 'Một người thở 18 lần/phút, mỗi lần hít vào 500 mL. Lượng khí hít vào mỗi phút là bao nhiêu mL?', answer: '9000', answerText: '9 000', unit: 'mL', calc: '18*500', explain: '18 · 500 = 9 000 mL.' },
    { type: 'mcq', q: 'Cơ quan có chức năng làm ấm, làm ẩm và lọc không khí là:', options: ['mũi', 'phổi', 'thanh quản', 'tim'], answer: 0, explain: 'Mũi lọc, làm ấm, làm ẩm không khí.' },
    { type: 'short', q: 'Khí hít vào có khoảng 21 % O<sub>2</sub>, khí thở ra có khoảng 16 %. Tỉ lệ O<sub>2</sub> giảm đi bao nhiêu %?', answer: '5', unit: '%', calc: '21-16', explain: '21 − 16 = 5 %.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hút thuốc lá thụ động (hít khói thuốc của người khác) không gây hại.', answer: false, explain: 'Khói thuốc gây hại cả cho người hít phải.' },
    { type: 'short', q: 'Mỗi lần hít vào 500 mL không khí, trong đó O<sub>2</sub> chiếm khoảng 21 %. Thể tích O<sub>2</sub> trong một lần hít vào là bao nhiêu mL?', answer: '105', unit: 'mL', calc: '500*21/100', explain: '500 · 21 : 100 = 105 mL.' },
    { type: 'mcq', q: 'Bệnh nào là bệnh về đường hô hấp?', options: ['Sâu răng', 'Lao phổi', 'Sỏi thận', 'Cận thị'], answer: 1, explain: 'Lao phổi do vi khuẩn lao gây ra ở phổi.' }
  ]
});
})();
