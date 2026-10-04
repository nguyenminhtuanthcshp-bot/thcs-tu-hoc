/* KHTN 6 – Bài 7. Đo thời gian. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-7', {
  objectives: [
    'Nêu được đơn vị đo thời gian và đổi được giữa giờ, phút, giây.',
    'Kể tên được một số dụng cụ đo thời gian và chọn được dụng cụ phù hợp.',
    'Đo được khoảng thời gian bằng đồng hồ (đặc biệt là đồng hồ bấm giây) đúng cách.',
    'Tính được khoảng thời gian giữa hai thời điểm.'
  ],
  intro: 'Trong cuộc thi chạy 60 m, hai bạn về đích gần như cùng lúc. Ai nhanh hơn? Mắt thường không phân biệt được, nhưng một chiếc <b>đồng hồ bấm giây</b> có thể cho biết chênh lệch chỉ vài phần mười giây.',
  steps: [
    { title: 'Đơn vị đo thời gian', html: `<p>Đơn vị đo thời gian trong hệ đo lường hợp pháp của Việt Nam là <b>giây (s)</b>. Các đơn vị thường dùng khác: phút (min), giờ (h), ngày, tuần, tháng, năm…</p>
      <div class="box key">1 phút = 60 giây; 1 giờ = 60 phút = 3 600 giây; 1 ngày = 24 giờ.</div>` },
    { title: 'Dụng cụ đo thời gian', html: `<ul><li><b>Đồng hồ treo tường, đồng hồ đeo tay</b>: xem giờ hằng ngày (ĐCNN thường là 1 giây hoặc 1 phút).</li>
      <li><b>Đồng hồ bấm giây</b> (cơ hoặc điện tử): đo khoảng thời gian ngắn, cần chính xác như trong thể thao, thí nghiệm.</li>
      <li>Ngày xưa người ta còn dùng đồng hồ mặt trời, đồng hồ cát, đồng hồ nước.</li></ul>
      <p>Đọc đồng hồ kim: kim ngắn chỉ giờ, kim dài chỉ phút, kim mảnh (đỏ) chỉ giây. Đồng hồ ở hình chỉ <b>9 giờ 15 phút 30 giây</b>.</p>`,
      svg: S.clock({ h: 9, m: 15, s: 30 }), caption: 'Kim giờ gần số 9, kim phút chỉ số 3 (15 phút), kim giây chỉ số 6 (30 giây).' },
    { title: 'Các bước đo thời gian', html: `<ol><li><b>Ước lượng</b> khoảng thời gian cần đo để chọn đồng hồ phù hợp.</li>
      <li><b>Hiệu chỉnh</b> đồng hồ về số 0 (với đồng hồ bấm giây: bấm nút đặt lại – Reset).</li>
      <li><b>Bấm bắt đầu</b> (Start) đúng lúc sự việc bắt đầu; <b>bấm dừng</b> (Stop) đúng lúc sự việc kết thúc.</li>
      <li><b>Mắt nhìn đúng cách</b> và <b>đọc, ghi kết quả</b> kèm đơn vị.</li></ol>
      <div class="box tip">Phản xạ của người bấm cũng gây sai số (khoảng 0,1 – 0,3 giây). Vì vậy các cuộc thi lớn dùng cổng bấm giờ tự động.</div>` },
    { title: 'Tính khoảng thời gian', html: `<p class="math">Khoảng thời gian = thời điểm kết thúc − thời điểm bắt đầu</p>
      <p>Ví dụ: buổi học bắt đầu lúc 7 giờ 15 phút, kết thúc lúc 11 giờ 00 phút. Thời gian học là 11 giờ 00 − 7 giờ 15 = <b>3 giờ 45 phút</b>.</p>
      <p>Khi đổi: 2 phút 15 giây = 2 × 60 + 15 = <b>135 giây</b>.</p>` }
  ],
  summary: 'Đơn vị đo thời gian là giây (s); 1 phút = 60 s, 1 giờ = 60 phút = 3 600 s. Dùng đồng hồ phù hợp: đồng hồ bấm giây cho khoảng thời gian ngắn cần chính xác. Đo: ước lượng – chọn đồng hồ – đặt về 0 – bấm bắt đầu/dừng đúng lúc – đọc, ghi kết quả.',
  examples: [
    { title: 'Đổi đơn vị', problem: 'Đổi: a) 3 phút ra giây; b) 2 giờ ra phút; c) 150 giây ra phút và giây.', solution: 'a) 3 × 60 = <b>180 s</b>. b) 2 × 60 = <b>120 phút</b>. c) 150 = 2 × 60 + 30 → <b>2 phút 30 giây</b>.' },
    { title: 'Chọn đồng hồ', problem: 'Nên dùng đồng hồ nào để đo: a) thời gian chạy 100 m của một vận động viên; b) thời gian một tiết học?', solution: 'a) Chạy 100 m chỉ khoảng hơn chục giây, cần chính xác đến phần mười hoặc phần trăm giây: dùng <b>đồng hồ bấm giây</b>. b) Tiết học 45 phút: dùng <b>đồng hồ treo tường hoặc đeo tay</b> là đủ.' },
    { title: 'Tính thời gian đi học', problem: 'An rời nhà lúc 6 giờ 40 phút và đến trường lúc 7 giờ 05 phút. An đi hết bao lâu?', solution: 'Từ 6 giờ 40 đến 7 giờ 00 là 20 phút; từ 7 giờ 00 đến 7 giờ 05 là 5 phút. Tổng: <b>25 phút</b>.' }
  ],
  exercises: [
    { question: 'Một bộ phim dài 1 giờ 35 phút. Đổi ra phút và ra giây.', hints: ['1 giờ = 60 phút.', 'Sau khi có số phút, nhân với 60 để ra giây.'], solution: '1 giờ 35 phút = 60 + 35 = <b>95 phút</b> = 95 × 60 = <b>5 700 giây</b>.' },
    { question: 'Bạn Minh bấm đồng hồ đo thời gian chạy của bạn Hoa nhưng quên bấm nút đặt lại (Reset); đồng hồ đang chỉ sẵn 3,2 s. Khi Hoa về đích, đồng hồ chỉ 14,5 s. Thời gian chạy thật của Hoa là bao nhiêu? Minh đã quên bước nào?', hints: ['Đồng hồ đã “cộng thêm” phần thời gian chỉ sẵn từ trước.', 'Lấy số chỉ lúc cuối trừ số chỉ lúc đầu.'], solution: 'Thời gian chạy = 14,5 − 3,2 = <b>11,3 s</b>. Minh quên bước <b>hiệu chỉnh đồng hồ về số 0</b> trước khi đo.' },
    { question: 'Vì sao khi đo thời gian rơi của một vật từ độ cao thấp, người ta thường đo nhiều lần rồi lấy trung bình?', hints: ['Thời gian rơi rất ngắn, phản xạ tay có ảnh hưởng không?', 'Mỗi lần bấm có thể sớm hoặc muộn một chút.'], solution: 'Vì thời gian rơi rất ngắn, sai số do phản xạ khi bấm đồng hồ tương đối lớn. Đo nhiều lần và lấy giá trị trung bình giúp giảm ảnh hưởng của sai số, kết quả đáng tin cậy hơn.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đơn vị đo thời gian trong hệ đo lường hợp pháp của Việt Nam là:', options: ['phút', 'giờ', 'giây (s)', 'ngày'], answer: 2, explain: 'Đơn vị chuẩn là giây (s).' },
    { type: 'short', q: 'Đổi 2 phút 15 giây ra giây.', answer: '135', unit: 's', calc: '2*60+15', explain: '2 × 60 + 15 = 135 giây.' },
    { type: 'short', q: '1 giờ bằng bao nhiêu giây?', answer: '3600', answerText: '3 600', unit: 's', calc: '60*60', explain: '1 giờ = 60 phút = 60 × 60 = 3 600 giây.' },
    { type: 'mcq', q: 'Dụng cụ phù hợp nhất để đo thời gian chạy 60 m trong giờ thể dục là:', options: ['Đồng hồ treo tường', 'Đồng hồ bấm giây', 'Đồng hồ cát', 'Lịch'], answer: 1, explain: 'Đồng hồ bấm giây đo chính xác các khoảng thời gian ngắn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trước khi đo bằng đồng hồ bấm giây cần đặt đồng hồ về số 0.', answer: true, explain: 'Nếu không, kết quả sẽ bị cộng thêm số chỉ có sẵn.' },
    { type: 'short', q: 'Tiết học bắt đầu lúc 8 giờ 10 phút và kết thúc lúc 8 giờ 55 phút. Tiết học dài bao nhiêu phút?', answer: '45', unit: 'phút', calc: '55-10', explain: '8 giờ 55 − 8 giờ 10 = 45 phút.' },
    { type: 'mcq', q: 'Đồng hồ ở hình chỉ mấy giờ?', svg: S.clock({ h: 3, m: 30 }), options: ['3 giờ 30 phút', '6 giờ 15 phút', '3 giờ 6 phút', '6 giờ 3 phút'], answer: 0, explain: 'Kim ngắn nằm giữa số 3 và 4 (hơn 3 giờ), kim dài chỉ số 6 (30 phút): 3 giờ 30 phút.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: 90 phút bằng 1 giờ 30 phút.', answer: true, explain: '90 phút = 60 phút + 30 phút = 1 giờ 30 phút.' }
  ]
});
})();
