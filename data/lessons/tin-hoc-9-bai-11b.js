/* Tin học 9 – Bài 11b. Thực hành: Dựng video theo kịch bản. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-11b', {
  objectives: [
    'Dựng được video theo kịch bản: sắp xếp cảnh, cắt, tách đoạn phim, đặt thời lượng.',
    'Thêm được hiệu ứng chuyển cảnh phù hợp và tính được ảnh hưởng tới tổng thời lượng.',
    'Phối hợp được trong nhóm để dựng các phần của video.'
  ],
  intro: 'Kịch bản đã có, tư liệu đã đủ. Giờ là lúc ghép các mảnh ghép lại thành câu chuyện liền mạch trên dòng thời gian.',
  steps: [
    { title: 'Sắp xếp cảnh theo kịch bản', html: `<p>Kéo các tư liệu từ thư viện lên rãnh video theo thứ tự cảnh 1, 2, 3… Có thể kéo thả để đổi thứ tự.</p>` },
    { title: 'Tách và cắt đoạn phim', html: `<p>Đặt đầu phát tại vị trí cần tách → lệnh <b>Split</b> (tách) chia đoạn phim làm hai; xoá phần thừa. <b>Trim</b> kéo mép đoạn để rút ngắn.</p>`,
      svg: S.videoTrack({ title: 'Tách đoạn phim tại giây 14 rồi xoá phần sau', total: 30, head: 14, tracks: [{ name: 'Trước', items: [{ s: 0, e: 22, t: 'Giờ học Tin (22 s)' }] }, { name: 'Tách', items: [{ s: 0, e: 14, t: 'Giữ (14 s)' }, { s: 14, e: 22, t: 'Xoá', c: '#fecaca' }] }, { name: 'Sau', items: [{ s: 0, e: 14, t: 'Giờ học Tin (14 s)' }] }] }), caption: 'Split tại đầu phát, rồi xoá đoạn không cần.' },
    { title: 'Hiệu ứng chuyển cảnh', html: `<p>Đặt hiệu ứng (mờ dần, trượt, hoà tan…) giữa hai cảnh để chuyển tiếp mượt. Nhiều phần mềm tạo chuyển cảnh bằng cách cho hai đoạn <b>chồng lên nhau</b> một khoảng ngắn, nên tổng thời lượng giảm đúng bằng phần chồng.</p>`,
      svg: S.videoTrack({ title: 'Ba cảnh 10 s, hai chuyển cảnh chồng 1 s', total: 30, tracks: [{ name: 'Video', items: [{ s: 0, e: 10, t: 'Cảnh 1' }, { s: 9, e: 19, t: 'Cảnh 2' }, { s: 18, e: 28, t: 'Cảnh 3' }] }], note: 'Tổng thời lượng: 30 − 2 × 1 = 28 giây' }), caption: 'Chuyển cảnh chồng làm video ngắn lại.' },
    { title: 'Làm việc nhóm', html: `<p>Chia nhóm dựng từng phần (mở đầu, thân, kết), thống nhất kiểu chữ, hiệu ứng, âm lượng; ghép lại và xem tổng thể.</p>
      <div class="box key">Split – Trim – sắp xếp – chuyển cảnh; luôn đối chiếu kịch bản.</div>` }
  ],
  summary: 'Dựng video theo kịch bản: sắp xếp cảnh trên rãnh video, tách (Split) tại đầu phát, cắt tỉa (Trim), đặt thời lượng. Hiệu ứng chuyển cảnh giúp liền mạch; nếu các đoạn chồng nhau thì tổng thời lượng giảm bằng phần chồng. Làm nhóm cần thống nhất phong cách.',
  examples: [
    { title: 'Thời lượng sau tách', problem: 'Đoạn phim 25 giây, tách tại giây 9 và xoá phần đầu. Đoạn còn lại dài bao nhiêu?', solution: '16 giây.' },
    { title: 'Chuyển cảnh chồng', problem: '4 cảnh, mỗi cảnh 12 giây, 3 chuyển cảnh mỗi chuyển chồng 1 giây. Tổng thời lượng?', solution: '48 − 3 = 45 giây.' },
    { title: 'Chọn hiệu ứng', problem: 'Video giới thiệu trang trọng về lịch sử trường nên dùng chuyển cảnh nào?', solution: 'Hiệu ứng nhẹ nhàng như mờ dần, hoà tan; tránh hiệu ứng xoay, nảy.' }
  ],
  exercises: [
    { question: 'Mô tả các bước xoá 5 giây đầu của một đoạn phim.', hints: ['Đặt đầu phát ở đâu?', 'Lệnh nào?'], solution: 'Đặt đầu phát ở giây 5 của đoạn → Split → chọn đoạn đầu (5 s) → Delete (hoặc kéo mép trái đoạn phim vào 5 giây).' },
    { question: '5 cảnh, mỗi cảnh 10 giây, chuyển cảnh chồng 0,5 giây giữa mỗi hai cảnh. Tổng thời lượng?', hints: ['Số chuyển cảnh = số cảnh − 1.', '50 − 4 × 0,5.'], solution: '48 giây.' },
    { question: 'Nêu hai lưu ý khi dùng hiệu ứng chuyển cảnh.', hints: ['Số lượng và kiểu hiệu ứng.', 'Phù hợp nội dung.'], solution: 'Dùng ít, thống nhất một vài kiểu; chọn hiệu ứng phù hợp nội dung, không làm rối mắt.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lệnh Split tách một đoạn phim thành hai tại vị trí đầu phát.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Đoạn phim 30 giây, xoá 8 giây cuối. Còn lại bao nhiêu giây?', answer: '22', unit: 'giây', calc: '30-8', explain: '22.' },
    { type: 'short', q: '3 cảnh mỗi cảnh 15 giây, 2 chuyển cảnh mỗi chuyển chồng 1 giây. Tổng thời lượng?', answer: '43', unit: 'giây', calc: '45-2', explain: '45 − 2.' },
    { type: 'mcq', q: 'Hiệu ứng giúp chuyển tiếp mượt giữa hai cảnh:', options: ['chuyển cảnh (transition)', 'độ phân giải', 'định dạng tệp', 'âm lượng'], answer: 0, explain: 'Transition.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng mỗi chuyển cảnh một kiểu hiệu ứng khác nhau cho sinh động.', answer: false, explain: 'Nên thống nhất.' },
    { type: 'short', q: '6 cảnh, chuyển cảnh giữa mỗi hai cảnh liên tiếp. Có bao nhiêu chuyển cảnh?', answer: '5', calc: '6-1', explain: '5.' },
    { type: 'mcq', q: 'Kéo mép đoạn phim để rút ngắn gọi là:', options: ['Trim', 'Export', 'Import', 'Mute'], answer: 0, explain: 'Trim.' },
    { type: 'mcq', q: 'Khi dựng video theo nhóm cần:', options: ['thống nhất kiểu chữ, hiệu ứng', 'mỗi người một phong cách', 'không cần xem lại', 'bỏ kịch bản'], answer: 0, explain: 'Thống nhất.' }
  ]
});
})();
