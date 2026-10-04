/* KHTN 8 – Bài 40. Sinh sản ở người. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-40', {
  objectives: [
    'Nêu được chức năng của hệ sinh dục; kể tên các cơ quan sinh dục nam, nữ và chức năng của chúng.',
    'Nêu được hiện tượng kinh nguyệt, thụ tinh, thụ thai; các biện pháp tránh thai.',
    'Kể tên một số bệnh lây truyền qua đường tình dục và cách phòng tránh.',
    'Nêu được ý nghĩa và các biện pháp bảo vệ sức khoẻ sinh sản vị thành niên.'
  ],
  intro: 'Tuổi dậy thì mang đến nhiều thay đổi về cơ thể và tâm lí. Hiểu đúng về sinh sản giúp em tự tin, biết chăm sóc và bảo vệ bản thân.',
  steps: [
    { title: 'Hệ sinh dục', html: `<p>Hệ sinh dục có chức năng sinh sản, duy trì nòi giống; tuyến sinh dục tiết hormone sinh dục.</p>
      <table class="tbl"><tr><th>Nam</th><th>Nữ</th></tr><tr><td>Tinh hoàn: sản sinh tinh trùng, tiết testosterone</td><td>Buồng trứng: sản sinh trứng, tiết estrogen, progesterone</td></tr><tr><td>Ống dẫn tinh, túi tinh, tuyến tiền liệt: dẫn và nuôi tinh trùng</td><td>Ống dẫn trứng: nơi thường xảy ra thụ tinh</td></tr><tr><td>Dương vật</td><td>Tử cung: nơi phôi làm tổ và phát triển</td></tr></table>
      <p><b>Dậy thì</b> (khoảng 10 – 16 tuổi, tuỳ người): cơ thể lớn nhanh, xuất hiện các đặc điểm sinh dục phụ; nữ bắt đầu có kinh nguyệt, nam có hiện tượng xuất tinh lần đầu.</p>` },
    { title: 'Kinh nguyệt, thụ tinh và thụ thai', html: `<ul><li><b>Kinh nguyệt</b>: nếu trứng không được thụ tinh, lớp niêm mạc tử cung bong ra cùng máu, thoát ra ngoài. Chu kì kinh nguyệt thường khoảng 28 – 32 ngày (có thể khác nhau ở mỗi người).</li><li><b>Thụ tinh</b>: tinh trùng kết hợp với trứng tạo thành hợp tử (thường ở ống dẫn trứng).</li><li><b>Thụ thai</b>: phôi di chuyển xuống tử cung và làm tổ ở lớp niêm mạc; thai phát triển khoảng 9 tháng (khoảng 38 – 40 tuần).</li></ul>`,
      svg: S.flow({ items: ['Trứng rụng', 'Thụ tinh ở ống dẫn trứng → hợp tử', 'Phôi di chuyển xuống tử cung', 'Phôi làm tổ → thai phát triển'], size: 13, label: 'Quá trình thụ tinh và thụ thai' }) },
    { title: 'Các biện pháp tránh thai', html: `<p>Nguyên tắc: ngăn trứng chín và rụng; ngăn không cho tinh trùng gặp trứng; ngăn trứng đã thụ tinh làm tổ.</p>
      <ul><li>Sử dụng bao cao su (đồng thời giúp phòng bệnh lây truyền qua đường tình dục).</li><li>Thuốc tránh thai, dụng cụ tử cung… (theo tư vấn của nhân viên y tế).</li></ul>
      <div class="box warn">Mang thai ở tuổi vị thành niên có nhiều nguy cơ cho sức khoẻ, học tập và tương lai của cả mẹ và con.</div>` },
    { title: 'Bệnh lây truyền qua đường tình dục', html: `<ul><li>Một số bệnh: HIV/AIDS, lậu, giang mai, viêm gan B…</li><li>HIV lây qua đường máu, quan hệ tình dục không an toàn và từ mẹ sang con; <b>không</b> lây qua bắt tay, ôm, ăn uống chung.</li><li>Phòng tránh: sống lành mạnh; không dùng chung bơm kim tiêm, dao cạo; quan hệ tình dục an toàn khi trưởng thành; tiêm vaccine (ví dụ viêm gan B, HPV).</li></ul>`,
      svg: S.mindmap({ center: 'Phòng bệnh lây qua đường tình dục', branches: [{ title: 'Đường máu', items: ['không dùng chung kim tiêm, dao cạo'] }, { title: 'Tình dục', items: ['an toàn, dùng bao cao su'] }, { title: 'Mẹ sang con', items: ['khám thai, điều trị sớm'] }, { title: 'Vaccine', items: ['viêm gan B, HPV'] }], size: 13, label: 'Các biện pháp phòng bệnh lây truyền qua đường tình dục' }) },
    { title: 'Bảo vệ sức khoẻ sinh sản vị thành niên', html: `<ul><li>Giữ vệ sinh cơ thể, đặc biệt là vệ sinh cơ quan sinh dục; nữ giữ vệ sinh trong những ngày kinh nguyệt.</li><li>Ăn uống đủ chất, tập thể dục, ngủ đủ giấc.</li><li>Tìm hiểu kiến thức từ nguồn tin cậy (cha mẹ, thầy cô, nhân viên y tế); tránh các hành vi nguy cơ; nói không với chất gây nghiện.</li><li>Tôn trọng bản thân và người khác; biết nói “không” và tìm kiếm sự giúp đỡ khi cần.</li></ul>` }
  ],
  summary: 'Hệ sinh dục sản sinh giao tử, tiết hormone sinh dục. Tinh trùng gặp trứng ở ống dẫn trứng tạo hợp tử; phôi làm tổ ở tử cung. Chu kì kinh nguyệt thường khoảng 28 – 32 ngày. Tránh thai dựa trên ngăn rụng trứng, ngăn tinh trùng gặp trứng, ngăn làm tổ. Phòng bệnh lây qua đường tình dục; giữ gìn sức khoẻ sinh sản vị thành niên.',
  examples: [
    { title: 'Tính tuần thai', problem: 'Thai kì khoảng 280 ngày. Đổi ra tuần.', solution: '280 : 7 = 40 tuần.' },
    { title: 'HIV không lây qua', problem: 'Bắt tay, ngồi học cạnh người nhiễm HIV có lây bệnh không?', solution: 'Không. HIV chỉ lây qua đường máu, tình dục không an toàn và từ mẹ sang con. Cần tôn trọng, không kì thị người nhiễm HIV.' },
    { title: 'Nguyên tắc tránh thai', problem: 'Bao cao su tránh thai theo nguyên tắc nào?', solution: 'Ngăn không cho tinh trùng gặp trứng; đồng thời giúp phòng các bệnh lây truyền qua đường tình dục.' }
  ],
  exercises: [
    { question: 'Kể tên cơ quan sản sinh giao tử ở nam và nữ.', hints: ['Giao tử đực là tinh trùng.', 'Giao tử cái là trứng.'], solution: 'Nam: tinh hoàn; nữ: buồng trứng.' },
    { question: 'Một chu kì kinh nguyệt dài 28 ngày. Trong một năm (365 ngày) có khoảng bao nhiêu chu kì (làm tròn đến hàng đơn vị)?', hints: ['Chia 365 cho 28.', 'Làm tròn.'], solution: '365 : 28 ≈ 13 chu kì.' },
    { question: 'Nêu ba việc làm giúp bảo vệ sức khoẻ sinh sản vị thành niên.', hints: ['Vệ sinh.', 'Nguồn thông tin, hành vi.'], solution: 'Giữ vệ sinh cá nhân; tìm hiểu kiến thức từ nguồn tin cậy; tránh hành vi nguy cơ, nói không với chất gây nghiện.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sự thụ tinh thường diễn ra ở ống dẫn trứng.', answer: true, explain: 'Hợp tử sau đó di chuyển xuống tử cung.' },
    { type: 'mcq', q: 'Cơ quan sản sinh trứng là:', options: ['tử cung', 'buồng trứng', 'ống dẫn trứng', 'tinh hoàn'], answer: 1, explain: 'Buồng trứng sản sinh trứng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: HIV lây truyền qua bắt tay và ăn uống chung.', answer: false, explain: 'HIV lây qua máu, tình dục không an toàn, mẹ sang con.' },
    { type: 'short', q: 'Thai kì khoảng 280 ngày. Thời gian đó bằng bao nhiêu tuần?', answer: '40', unit: 'tuần', calc: '280/7', explain: '280 : 7 = 40 tuần.' },
    { type: 'mcq', q: 'Biện pháp vừa tránh thai vừa phòng bệnh lây qua đường tình dục là:', options: ['thuốc tránh thai', 'bao cao su', 'dụng cụ tử cung', 'tính ngày rụng trứng'], answer: 1, explain: 'Bao cao su ngăn tinh trùng gặp trứng và ngăn lây bệnh.' },
    { type: 'short', q: 'Một chu kì kinh nguyệt dài 30 ngày. Sau 12 chu kì là bao nhiêu ngày?', answer: '360', unit: 'ngày', calc: '30*12', explain: '30 · 12 = 360 ngày.' },
    { type: 'mcq', q: 'Nơi phôi làm tổ và phát triển thành thai là:', options: ['buồng trứng', 'tử cung', 'ống dẫn trứng', 'âm đạo'], answer: 1, explain: 'Tử cung.' },
    { type: 'short', q: 'Một bạn bắt đầu dậy thì lúc 11 tuổi, giai đoạn này kéo dài đến 16 tuổi. Giai đoạn dậy thì kéo dài bao nhiêu năm?', answer: '5', unit: 'năm', calc: '16-11', explain: '16 − 11 = 5 năm.' }
  ]
});
})();
