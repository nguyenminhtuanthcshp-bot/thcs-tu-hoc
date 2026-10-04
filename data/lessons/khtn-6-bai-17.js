/* KHTN 6 – Bài 17. Tách chất khỏi hỗn hợp. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-17', {
  objectives: [
    'Trình bày được một số cách đơn giản để tách chất ra khỏi hỗn hợp: lọc, cô cạn, chiết.',
    'Chọn được phương pháp tách phù hợp dựa vào tính chất khác nhau của các chất trong hỗn hợp.',
    'Nêu được ứng dụng của việc tách chất trong đời sống.'
  ],
  intro: 'Làm sao lấy được muối từ nước biển? Làm sao có nước trong từ nước giếng đục? Người ta dựa vào sự <b>khác nhau về tính chất</b> của các chất trong hỗn hợp để tách chúng ra.',
  steps: [
    { title: 'Nguyên tắc tách chất', html: `<p>Để tách một chất ra khỏi hỗn hợp, ta dựa vào sự khác nhau về <b>tính chất vật lí</b> giữa các chất: tan hay không tan trong nước, nặng hay nhẹ, dễ bay hơi hay không, có bị nam châm hút không…</p>
      <table class="tbl"><tr><th>Hỗn hợp</th><th>Tính chất khác nhau</th><th>Cách tách</th></tr>
      <tr><td>Cát lẫn nước</td><td>Cát không tan</td><td>Lọc</td></tr><tr><td>Muối tan trong nước</td><td>Nước bay hơi, muối không</td><td>Cô cạn</td></tr>
      <tr><td>Dầu ăn và nước</td><td>Không tan vào nhau, dầu nhẹ hơn</td><td>Chiết</td></tr><tr><td>Bột sắt lẫn cát</td><td>Sắt bị nam châm hút</td><td>Dùng nam châm</td></tr></table>` },
    { title: 'Lọc', html: `<p><b>Lọc</b> dùng để tách <b>chất rắn không tan</b> ra khỏi chất lỏng. Đổ hỗn hợp qua phễu có giấy lọc: chất rắn bị giữ lại trên giấy lọc, chất lỏng chảy xuống cốc.</p>`,
      svg: S.lab('loc'), caption: 'Lọc nước lẫn cát.' },
    { title: 'Cô cạn', html: `<p><b>Cô cạn</b> dùng để tách <b>chất rắn tan</b> ra khỏi dung dịch. Đun nóng dung dịch để nước bay hơi hết, chất rắn còn lại.</p>
      <p>Ứng dụng: làm muối từ nước biển ở các ruộng muối (dùng nắng và gió để nước bay hơi).</p>`,
      svg: S.lab('co-can'), caption: 'Cô cạn dung dịch nước muối để thu muối.' },
    { title: 'Chiết', html: `<p><b>Chiết</b> dùng để tách <b>hai chất lỏng không hoà tan vào nhau</b> (như dầu và nước). Cho hỗn hợp vào phễu chiết, để yên cho tách lớp, mở khoá cho chất lỏng ở dưới chảy xuống trước rồi khoá lại.</p>`,
      svg: S.lab('chiet'), caption: 'Tách dầu ăn khỏi nước bằng phễu chiết.' },
    { title: 'Tách chất trong đời sống', html: `<ul><li>Lọc nước giếng bằng bể lọc có các lớp sỏi, cát, than hoạt tính.</li><li>Làm muối từ nước biển; làm đường từ nước mía (cô đặc).</li>
      <li>Lắng rồi gạn lấy nước trong từ nước đục (để yên cho cặn lắng xuống, rồi nhẹ nhàng rót phần nước trong sang bình khác).</li><li>Dùng nam châm tách sắt vụn khỏi rác thải.</li></ul>` }
  ],
  summary: 'Tách chất dựa vào sự khác nhau về tính chất của các chất. Lọc: tách chất rắn không tan khỏi chất lỏng. Cô cạn: tách chất rắn tan khỏi dung dịch (làm bay hơi dung môi). Chiết: tách hai chất lỏng không tan vào nhau. Ngoài ra có thể lắng gạn, dùng nam châm…',
  examples: [
    { title: 'Chọn cách tách', problem: 'Nêu cách tách: a) muối ăn từ nước muối; b) sạn ra khỏi nước; c) nước ra khỏi dầu hoả.', solution: 'a) <b>Cô cạn</b>. b) <b>Lọc</b> (hoặc lắng gạn). c) <b>Chiết</b> (dầu hoả và nước không tan vào nhau).' },
    { title: 'Tách hỗn hợp ba chất', problem: 'Làm thế nào để tách riêng muối ăn và cát từ hỗn hợp muối lẫn cát?', solution: 'Bước 1: hoà hỗn hợp vào nước, khuấy cho muối tan hết. Bước 2: <b>lọc</b> để giữ cát lại trên giấy lọc. Bước 3: <b>cô cạn</b> nước lọc để thu muối.' },
    { title: 'Dùng nam châm', problem: 'Một hỗn hợp gồm mạt sắt và bột lưu huỳnh (màu vàng). Tách bằng cách nào nhanh nhất?', solution: 'Dùng <b>nam châm</b> (bọc trong túi nilon cho dễ gỡ) quét qua hỗn hợp: mạt sắt bị hút, còn lại bột lưu huỳnh.' }
  ],
  exercises: [
    { question: 'Vì sao có thể dùng cách lọc để tách cát ra khỏi nước, nhưng không thể dùng cách lọc để tách muối ra khỏi nước muối?', hints: ['Hạt cát có đi qua được lỗ giấy lọc không?', 'Muối tan trong nước ở dạng nào?'], solution: 'Cát không tan, hạt cát to hơn lỗ giấy lọc nên bị giữ lại. Muối đã tan hoàn toàn trong nước (hỗn hợp đồng nhất) nên đi qua giấy lọc cùng với nước; muốn tách muối phải cô cạn.' },
    { question: 'Trình bày các bước tách dầu ăn ra khỏi nước bằng phễu chiết.', hints: ['Sau khi đổ hỗn hợp vào phễu, cần chờ điều gì?', 'Chất lỏng nào ở dưới, chảy ra trước?'], solution: '(1) Đổ hỗn hợp vào phễu chiết (khoá đang đóng), để yên cho tách thành hai lớp: dầu ở trên, nước ở dưới. (2) Mở từ từ khoá phễu cho nước chảy xuống cốc. (3) Khi lớp dầu gần tới khoá thì đóng khoá lại. (4) Đổ phần dầu còn lại sang cốc khác.' },
    { question: 'Ở vùng biển, người dân làm muối như thế nào? Đó là phương pháp tách chất nào?', hints: ['Nước biển được dẫn vào đâu?', 'Nắng và gió làm gì với nước?'], solution: 'Dẫn nước biển vào các ô ruộng muối; nắng và gió làm nước <b>bay hơi</b> dần, muối kết tinh lại và được cào gom. Đây là phương pháp <b>cô cạn</b> (bay hơi tự nhiên).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Để tách cát ra khỏi hỗn hợp cát và nước, ta dùng cách:', options: ['Cô cạn', 'Lọc', 'Chiết', 'Dùng nam châm'], answer: 1, explain: 'Cát không tan, bị giữ lại trên giấy lọc.' },
    { type: 'mcq', q: 'Phương pháp chiết dùng để tách:', options: ['Chất rắn không tan khỏi chất lỏng', 'Chất rắn tan khỏi dung dịch', 'Hai chất lỏng không hoà tan vào nhau', 'Sắt khỏi cát'], answer: 2, explain: 'Ví dụ tách dầu ăn khỏi nước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng giấy lọc để tách đường ra khỏi nước đường.', answer: false, explain: 'Đường đã tan, đi qua giấy lọc; phải cô cạn.' },
    { type: 'mcq', q: 'Làm muối từ nước biển dựa trên phương pháp:', options: ['Lọc', 'Cô cạn (bay hơi)', 'Chiết', 'Dùng nam châm'], answer: 1, explain: 'Nước bay hơi, muối còn lại.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể dùng nam châm để tách mạt sắt ra khỏi cát.', answer: true, explain: 'Sắt bị nam châm hút, cát thì không.' },
    { type: 'mcq', q: 'Khi chiết hỗn hợp dầu ăn và nước, chất lỏng chảy ra khỏi phễu chiết trước là:', options: ['Dầu ăn', 'Nước', 'Cả hai cùng lúc', 'Không chất nào'], answer: 1, explain: 'Nước nặng hơn nên nằm ở lớp dưới, chảy ra trước.' },
    { type: 'short', q: 'Để tách muối ăn khỏi hỗn hợp muối lẫn cát, sau khi hoà vào nước và lọc bỏ cát, ta dùng phương pháp gì để thu muối? (điền 2 tiếng)', answer: ['cô cạn', 'co can'], answerText: 'cô cạn', explain: 'Cô cạn nước lọc (dung dịch muối) để thu muối.' },
    { type: 'mcq', q: 'Việc tách chất dựa vào:', options: ['Sự khác nhau về tính chất của các chất trong hỗn hợp', 'Màu của bình chứa', 'Khối lượng của cả hỗn hợp', 'Thời gian trong ngày'], answer: 0, explain: 'Mỗi cách tách tận dụng một tính chất khác nhau giữa các chất.' }
  ]
});
})();
