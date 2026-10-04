/* KHTN 8 – Bài 23. Tác dụng của dòng điện. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-23', {
  objectives: [
    'Nêu được các tác dụng của dòng điện: tác dụng nhiệt, phát sáng, từ, hoá học, sinh lí.',
    'Lấy được ví dụ về ứng dụng của mỗi tác dụng trong đời sống và kĩ thuật.',
    'Nêu được các biện pháp sử dụng điện an toàn.'
  ],
  intro: 'Cùng một dòng điện nhưng làm bàn là nóng lên, làm bóng đèn sáng, làm quạt quay, làm chuông kêu… Dòng điện có những tác dụng gì?',
  steps: [
    { title: 'Tác dụng nhiệt', html: `<p>Dòng điện chạy qua vật dẫn làm vật dẫn <b>nóng lên</b>. Vật dẫn có điện trở lớn (dây nichrome, dây tungsten) nóng lên nhiều.</p>
      <p>Ứng dụng: bàn là, nồi cơm điện, ấm siêu tốc, máy sấy tóc, cầu chì.</p>
      <p>Tác dụng nhiệt có thể gây lãng phí điện hoặc cháy nổ khi dây dẫn quá tải.</p>` },
    { title: 'Tác dụng phát sáng', html: `<p>Dòng điện có thể làm bóng đèn phát sáng:</p><ul><li>Đèn sợi đốt: dây tóc nóng tới nhiệt độ cao thì phát sáng.</li><li>Đèn LED, đèn huỳnh quang: phát sáng khi có dòng điện chạy qua mà nóng lên không đáng kể nên tiết kiệm điện hơn.</li></ul>
      <p>Ví dụ (số liệu minh hoạ): với 100 J điện năng, đèn sợi đốt chỉ cho khoảng 5 J năng lượng ánh sáng, phần lớn còn lại chuyển thành nhiệt.</p>` },
    { title: 'Tác dụng từ', html: `<p>Dòng điện chạy qua cuộn dây làm cuộn dây trở thành <b>nam châm điện</b>: hút được sắt, thép, làm quay kim nam châm.</p>
      <p>Ứng dụng: chuông điện, cần cẩu điện, rơ le, động cơ điện (quạt, máy bơm), loa.</p>`,
      svg: S.electromagnet(), caption: 'Nam châm điện: cuộn dây có dòng điện hút các vật bằng sắt.' },
    { title: 'Tác dụng hoá học và sinh lí', html: `<ul><li><b>Tác dụng hoá học</b>: dòng điện chạy qua dung dịch muối có thể làm tách chất. Ví dụ: cho dòng điện qua dung dịch CuSO<sub>4</sub>, có lớp đồng bám vào điện cực âm. Ứng dụng: mạ điện (mạ đồng, mạ vàng), tinh chế kim loại.</li><li><b>Tác dụng sinh lí</b>: dòng điện qua cơ thể có thể làm co cơ, tim ngừng đập, gây bỏng, nguy hiểm đến tính mạng. Trong y học, dòng điện nhỏ được dùng để châm cứu điện, kích thích tim (máy khử rung tim).</li></ul>`,
      svg: S.mindmap({ center: 'Tác dụng của dòng điện', branches: [{ title: 'Nhiệt', items: ['bàn là, nồi cơm điện'] }, { title: 'Phát sáng', items: ['đèn LED, đèn sợi đốt'] }, { title: 'Từ', items: ['chuông điện, động cơ'] }, { title: 'Hoá học', items: ['mạ điện'] }, { title: 'Sinh lí', items: ['điện giật; y học'] }], size: 14, label: 'Các tác dụng của dòng điện' }) },
    { title: 'An toàn điện', html: `<ul><li>Không chạm vào ổ điện, dây điện hở; không dùng tay ướt cầm thiết bị điện.</li><li>Lắp cầu chì, aptomat phù hợp; dây điện có vỏ cách điện tốt.</li><li>Khi có người bị điện giật: ngắt nguồn điện ngay, dùng vật cách điện khô tách người ra khỏi nguồn điện, gọi người lớn và cơ sở y tế.</li></ul>` }
  ],
  summary: 'Dòng điện có tác dụng nhiệt (bàn là, nồi cơm điện), phát sáng (đèn), từ (nam châm điện, chuông, động cơ), hoá học (mạ điện), sinh lí (điện giật, ứng dụng y học). Sử dụng điện phải tuân thủ các quy tắc an toàn.',
  examples: [
    { title: 'Nhận biết tác dụng', problem: 'Nồi cơm điện, chuông điện, bình mạ vàng hoạt động chủ yếu dựa vào tác dụng nào của dòng điện?', solution: 'Nồi cơm điện: tác dụng nhiệt. Chuông điện: tác dụng từ. Mạ vàng: tác dụng hoá học.' },
    { title: 'Tiết kiệm điện', problem: 'Vì sao nên thay đèn sợi đốt bằng đèn LED?', solution: 'Đèn sợi đốt biến phần lớn điện năng thành nhiệt; đèn LED phát sáng mà ít nóng nên tiết kiệm điện hơn nhiều với cùng độ sáng.' },
    { title: 'Tính phần năng lượng', problem: 'Một đèn chuyển 20 % điện năng thành ánh sáng. Với 500 J điện năng, bao nhiêu J thành ánh sáng? (số liệu minh hoạ)', solution: '500 · 20 : 100 = 100 (J).' }
  ],
  exercises: [
    { question: 'Kể tên ba thiết bị trong nhà hoạt động dựa vào tác dụng nhiệt của dòng điện.', hints: ['Thiết bị dùng để đun nấu.', 'Thiết bị dùng để làm khô.'], solution: 'Ví dụ: ấm siêu tốc, bàn là, máy sấy tóc (nồi cơm điện, lò nướng).' },
    { question: 'Vì sao dòng điện đi qua cơ thể người lại nguy hiểm?', hints: ['Nghĩ đến tác dụng sinh lí.', 'Tim và cơ bắp hoạt động nhờ tín hiệu điện rất nhỏ.'], solution: 'Dòng điện gây co giật cơ, rối loạn hoặc ngừng tim, ngừng thở, bỏng, có thể gây tử vong.' },
    { question: 'Khi mạ đồng cho một chiếc chìa khoá bằng sắt, phải nối chìa khoá với cực nào của nguồn điện? Dựa vào tác dụng nào của dòng điện?', hints: ['Đồng bám vào điện cực nào?', 'Mạ điện dựa vào tác dụng hoá học.'], solution: 'Nối chìa khoá với cực âm (đồng bám vào điện cực âm); dựa vào tác dụng hoá học của dòng điện.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chuông điện hoạt động dựa vào tác dụng từ của dòng điện.', answer: true, explain: 'Chuông điện có nam châm điện.' },
    { type: 'mcq', q: 'Mạ điện là ứng dụng tác dụng nào của dòng điện?', options: ['Nhiệt', 'Phát sáng', 'Hoá học', 'Sinh lí'], answer: 2, explain: 'Dòng điện qua dung dịch muối làm kim loại bám vào điện cực.' },
    { type: 'mcq', q: 'Thiết bị nào hoạt động chủ yếu dựa vào tác dụng nhiệt?', options: ['Quạt điện', 'Nồi cơm điện', 'Loa', 'Chuông điện'], answer: 1, explain: 'Nồi cơm điện biến điện năng thành nhiệt.' },
    { type: 'short', q: 'Đèn sợi đốt chỉ chuyển khoảng 5 % điện năng thành ánh sáng. Với 200 J điện năng, khoảng bao nhiêu J chuyển thành ánh sáng? (số liệu minh hoạ)', answer: '10', unit: 'J', calc: '200*5/100', explain: '200 · 5 : 100 = 10 J.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi thấy người bị điện giật, cần dùng tay kéo ngay người đó ra.', answer: false, explain: 'Phải ngắt nguồn điện hoặc dùng vật cách điện khô, không chạm trực tiếp.' },
    { type: 'short', q: 'Một đèn LED chuyển 40 % điện năng thành ánh sáng. Với 300 J điện năng, bao nhiêu J thành ánh sáng? (số liệu minh hoạ)', answer: '120', unit: 'J', calc: '300*40/100', explain: '300 · 40 : 100 = 120 J.' },
    { type: 'mcq', q: 'Động cơ điện (quạt, máy bơm) hoạt động dựa vào tác dụng:', options: ['từ', 'hoá học', 'phát sáng', 'sinh lí'], answer: 0, explain: 'Động cơ điện hoạt động nhờ tác dụng từ.' },
    { type: 'short', q: 'Một bàn là tiêu thụ 1 000 J điện năng mỗi giây. Trong 60 giây bàn là tiêu thụ bao nhiêu J?', answer: '60000', answerText: '60 000', unit: 'J', calc: '1000*60', explain: '1 000 · 60 = 60 000 J.' }
  ]
});
})();
