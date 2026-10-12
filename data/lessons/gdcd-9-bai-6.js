/* GDCD 9 – Bài 6. Quản lí thời gian hiệu quả. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-6', {
  objectives: [
    'Nêu được thế nào là quản lí thời gian hiệu quả.',
    'Giải thích được sự cần thiết phải quản lí thời gian hiệu quả.',
    'Biết cách quản lí thời gian: xác định mục tiêu, sắp xếp thứ tự ưu tiên, lập thời gian biểu.',
    'Thực hiện được kĩ năng quản lí thời gian trong học tập và sinh hoạt.'
  ],
  intro: 'Năm lớp 9, Thảo vừa ôn thi vào lớp 10, vừa tham gia đội văn nghệ, vừa giúp mẹ bán hàng. Có tuần Thảo thức đến 1 giờ sáng vẫn chưa xong bài. Sau khi học cách chia việc theo mức “quan trọng – khẩn cấp”, Thảo ngủ đủ giấc mà vẫn hoàn thành kế hoạch. Đó là <b>quản lí thời gian hiệu quả</b>.',
  steps: [
    { title: 'Quản lí thời gian hiệu quả là gì?', html: `<p><b>Quản lí thời gian hiệu quả</b> là sắp xếp, sử dụng thời gian hợp lí, khoa học để hoàn thành công việc đúng hạn, đạt kết quả cao, đồng thời cân bằng giữa học tập, làm việc, nghỉ ngơi.</p>` },
    { title: 'Sắp xếp thứ tự ưu tiên', html: `<p>Chia công việc theo hai tiêu chí: quan trọng và khẩn cấp.</p>`,
      svg: S.table({ title: 'Ma trận ưu tiên công việc', head: ['Nhóm việc', 'Cách xử lí'], rows: [['Quan trọng, khẩn cấp', 'Làm ngay'], ['Quan trọng, không khẩn cấp', 'Lên lịch làm'], ['Không quan trọng, khẩn cấp', 'Làm nhanh, nhờ hỗ trợ'], ['Không quan trọng, không khẩn cấp', 'Hạn chế, bỏ bớt']], colW: 250 }), caption: 'Ví dụ: bài kiểm tra ngày mai – làm ngay; lướt mạng – hạn chế.' },
    { title: 'Lập thời gian biểu', html: `<p>Ví dụ một ngày học tập của Thảo:</p>`,
      svg: S.pieChart({ title: 'Phân bổ 24 giờ một ngày của Thảo (minh hoạ)', parts: [{ v: 8, label: 'Ngủ: 8 giờ' }, { v: 7, label: 'Học ở trường: 7 giờ' }, { v: 3, label: 'Tự học: 3 giờ' }, { v: 6, label: 'Việc nhà, ăn, nghỉ, thể thao: 6 giờ' }] }), caption: 'Số liệu minh hoạ; ngủ đủ 8 giờ giúp học hiệu quả.' },
    { title: 'Vì sao cần quản lí thời gian?', html: `<ul><li>Hoàn thành công việc đúng hạn, chất lượng; giảm căng thẳng.</li><li>Có thời gian nghỉ ngơi, rèn luyện, cho gia đình.</li><li>Rèn tính kỉ luật, chủ động.</li></ul>
      <div class="box key">Mẹo: chia nhỏ việc lớn; tắt thông báo điện thoại khi học; làm việc khó vào lúc tỉnh táo nhất.</div>` }
  ],
  summary: 'Quản lí thời gian hiệu quả là sắp xếp, sử dụng thời gian hợp lí để hoàn thành công việc đúng hạn, cân bằng học tập và nghỉ ngơi. Cách làm: xác định mục tiêu, sắp xếp thứ tự ưu tiên (quan trọng – khẩn cấp), lập thời gian biểu, chia nhỏ việc, hạn chế yếu tố gây xao nhãng, đánh giá và điều chỉnh.',
  examples: [
    { title: 'Phân loại', problem: 'Xếp vào ma trận: ôn bài kiểm tra ngày mai; luyện tiếng Anh cho kì thi sau 3 tháng; xem video giải trí.', solution: 'Quan trọng – khẩn cấp; quan trọng – không khẩn cấp; không quan trọng – không khẩn cấp.' },
    { title: 'Tính thời gian', problem: 'Mỗi ngày Thảo dùng mạng xã hội 2 giờ. Giảm còn 30 phút thì một tuần tiết kiệm bao nhiêu giờ?', solution: '(2 − 0,5) × 7 = 10,5 giờ.' },
    { title: 'Kiểm tra tổng', problem: 'Theo biểu đồ, tổng thời gian có bằng 24 giờ không?', solution: '8 + 7 + 3 + 6 = 24 giờ. Đúng.' }
  ],
  exercises: [
    { question: 'Lập thời gian biểu buổi tối (18:00–22:30) cho em.', hints: ['Có ăn tối, học, nghỉ.', 'Đi ngủ trước 23:00.'], solution: 'Ví dụ: 18:00 ăn tối; 19:00–20:30 học Toán; 20:30–20:45 nghỉ; 20:45–22:00 học Văn, Anh; 22:00 chuẩn bị đồ; 22:30 đi ngủ.' },
    { question: 'Tự học 3 giờ/ngày, 6 ngày/tuần. Trong 4 tuần tự học bao nhiêu giờ?', hints: ['3 × 6 = 18 giờ/tuần.', 'Nhân 4.'], solution: '72 giờ.' },
    { question: 'Vì sao không nên vừa học vừa lướt điện thoại?', hints: ['Sự tập trung.', 'Thời gian thực tế.'], solution: 'Gây xao nhãng, giảm tập trung, mất nhiều thời gian hơn mà kết quả kém.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Quản lí thời gian hiệu quả giúp hoàn thành công việc đúng hạn và giảm căng thẳng.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Việc quan trọng và khẩn cấp nên:', options: ['Làm ngay', 'Bỏ qua', 'Để cuối tuần', 'Nhờ người khác làm hết'], answer: 0, explain: 'Làm ngay.' },
    { type: 'short', q: 'Giảm dùng mạng từ 2 giờ xuống 0,5 giờ mỗi ngày. Một tuần tiết kiệm bao nhiêu giờ?', answer: '10,5', unit: 'giờ', calc: '(2-0.5)*7', explain: '10,5.' },
    { type: 'short', q: 'Tự học 3 giờ/ngày, 6 ngày/tuần, trong 4 tuần là bao nhiêu giờ?', answer: '72', unit: 'giờ', calc: '3*6*4', explain: '72.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Thức khuya liên tục là cách quản lí thời gian tốt.', answer: false, explain: 'Cần nghỉ ngơi đủ.' },
    { type: 'mcq', q: 'Việc nên hạn chế:', options: ['Không quan trọng, không khẩn cấp', 'Quan trọng, khẩn cấp', 'Quan trọng, không khẩn cấp', 'Ôn thi'], answer: 0, explain: 'Hạn chế.' },
    { type: 'short', q: 'Ngủ 8 giờ chiếm bao nhiêu phần trăm của 24 giờ? (làm tròn đến hàng đơn vị)', answer: '33', unit: '%', calc: 'Math.round(8/24*100)', explain: 'Khoảng 33%.' },
    { type: 'mcq', q: 'Mẹo giúp tập trung khi học:', options: ['Tắt thông báo điện thoại', 'Mở nhạc to', 'Vừa học vừa xem phim', 'Học khi buồn ngủ'], answer: 0, explain: 'Đúng.' }
  ]
});
})();
