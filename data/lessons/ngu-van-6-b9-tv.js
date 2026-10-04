/* Ngữ văn 6 – Bài 9. Tiếng Việt: Từ mượn. Ví dụ do nhóm biên soạn tự viết. */
THCS.registerLesson('ngu-van-6/b9-tv', {
  objectives: [
    'Nhận biết được từ mượn và nguồn gốc của từ mượn (tiếng Hán, tiếng Pháp, tiếng Anh…).',
    'Nắm được cách viết từ mượn (Việt hoá hoàn toàn, dùng gạch nối, giữ nguyên dạng).',
    'Biết sử dụng từ mượn hợp lí, không lạm dụng; giữ gìn sự trong sáng của tiếng Việt.'
  ],
  intro: 'Mỗi ngày em dùng rất nhiều từ “đi mượn” mà không để ý: <i>ti vi, in-tơ-nét, xà phòng, ga, môi trường</i>… Bài học giúp em nhận ra chúng từ đâu đến và dùng thế nào cho đúng.',
  steps: [
    { title: 'Từ mượn là gì?', html: `<p><b>Từ mượn</b> là những từ vay mượn từ tiếng nước ngoài để biểu thị sự vật, hiện tượng, đặc điểm… mà tiếng Việt chưa có từ thật thích hợp. Bên cạnh <b>từ thuần Việt</b> (do ông cha ta tạo ra), tiếng Việt có nhiều từ mượn.</p>` },
    { title: 'Nguồn gốc từ mượn', html: `<table class="tbl"><tr><th>Nguồn</th><th>Ví dụ</th><th>Ghi chú</th></tr><tr><td>Tiếng Hán (từ Hán Việt)</td><td>môi trường, sinh quyển, khí hậu, quốc gia</td><td>Bộ phận quan trọng nhất</td></tr><tr><td>Tiếng Pháp</td><td>xà phòng, ga (nhà ga), pi-a-nô, cà phê</td><td>Nhiều từ đã Việt hoá</td></tr><tr><td>Tiếng Anh</td><td>in-tơ-nét (internet), video, email</td><td>Nhiều từ mới về công nghệ</td></tr><tr><td>Tiếng Nga và các tiếng khác</td><td>xô viết, bôn-sê-vích</td><td>Ít gặp</td></tr></table>` },
    { title: 'Cách viết từ mượn', html: `<ul><li><b>Việt hoá hoàn toàn</b>: viết như từ thuần Việt – <i>xà phòng, ga, phim, mít tinh</i>.</li><li><b>Việt hoá một phần</b>, các tiếng nối bằng gạch ngang – <i>ra-đi-ô, pi-a-nô, in-tơ-nét</i>.</li><li><b>Giữ nguyên dạng</b> (thường là từ khoa học, tên riêng, từ mới) – <i>video, email, UNESCO</i>.</li></ul>` },
    { title: 'Nguyên tắc sử dụng', html: `<div class="box tip">Dùng từ mượn khi cần thiết (tiếng Việt chưa có từ tương đương) để làm giàu tiếng Việt. <b>Không lạm dụng</b>: khi đã có từ thuần Việt rõ nghĩa thì ưu tiên dùng.</div><p>Ví dụ lạm dụng: “Hôm nay em rất <i>happy</i> vì được đi <i>shopping</i>.” → “Hôm nay em rất <b>vui</b> vì được đi <b>mua sắm</b>.”</p>` },
    { title: 'Từ mượn trong văn bản thông tin', html: `<p>Văn bản về môi trường dùng nhiều từ mượn gốc Hán (môi trường, sinh quyển, khí hậu) và từ mượn phiên âm (các-bô-níc). Đây là thuật ngữ cần thiết, giúp diễn đạt chính xác.</p>` }
  ],
  summary: 'Từ mượn là từ vay mượn từ tiếng nước ngoài (chủ yếu tiếng Hán; ngoài ra tiếng Pháp, Anh, Nga…). Cách viết: Việt hoá hoàn toàn, dùng gạch nối giữa các tiếng, hoặc giữ nguyên dạng. Dùng từ mượn khi cần, không lạm dụng.',
  examples: [
    { title: 'Xác định nguồn gốc', problem: 'Xếp các từ sau theo nguồn gốc: khí hậu, xà phòng, in-tơ-nét, quốc gia, ga.', solution: 'Gốc Hán: khí hậu, quốc gia. Gốc Pháp: xà phòng, ga. Gốc Anh: in-tơ-nét.' },
    { title: 'Sửa lỗi lạm dụng', problem: 'Sửa câu: “Bài thuyết trình của nhóm em rất ok, cô giáo rất like.”', solution: '“Bài thuyết trình của nhóm em rất tốt, cô giáo rất thích.”' },
    { title: 'Cách viết', problem: 'Vì sao “ra-đi-ô” viết có gạch nối còn “xà phòng” thì không?', solution: '“Ra-đi-ô” là từ Việt hoá một phần (vẫn giữ dáng dấp phiên âm, gồm nhiều tiếng không có nghĩa riêng) nên dùng gạch nối; “xà phòng” đã Việt hoá hoàn toàn nên viết như từ thuần Việt.' }
  ],
  exercises: [
    { question: 'Tìm từ mượn trong câu: “Mỗi sáng, bố em uống cà phê rồi đọc báo trên in-tơ-nét.”', hints: ['Có một từ gốc Pháp.', 'Có một từ gốc Anh.'], solution: '“cà phê” (gốc Pháp), “in-tơ-nét” (gốc Anh).' },
    { question: 'Tìm từ thuần Việt tương đương cho các từ mượn: “phu nhân”, “hải cẩu” – loại nào không có tương đương thuần Việt thông dụng?', hints: ['Phu nhân – vợ.', 'Hải cẩu là tên một loài vật.'], solution: '“Phu nhân” – “vợ” (phu nhân trang trọng hơn). “Hải cẩu” không có từ thuần Việt thông dụng tương đương.' },
    { question: 'Viết một câu có dùng từ mượn đúng chỗ và giải thích vì sao cần dùng.', hints: ['Chọn từ về công nghệ hoặc khoa học.', 'Tiếng Việt chưa có từ tương đương.'], solution: 'Ví dụ: “Em gửi bài tập cho cô qua email.” – “email” là từ chỉ thư điện tử, dùng phổ biến và ngắn gọn (có thể thay bằng “thư điện tử”).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bộ phận từ mượn quan trọng nhất trong tiếng Việt có nguồn gốc từ:', options: ['Tiếng Hán', 'Tiếng Anh', 'Tiếng Pháp', 'Tiếng Nga'], answer: 0, explain: 'Từ Hán Việt.' },
    { type: 'mcq', q: 'Từ nào có nguồn gốc tiếng Pháp?', options: ['xà phòng', 'quốc gia', 'email', 'khí hậu'], answer: 0, explain: 'savon → xà phòng.' },
    { type: 'mcq', q: 'Từ nào viết đúng theo cách dùng gạch nối?', options: ['pi-a-nô', 'pi a nô', 'pianô-', 'pi.a.nô'], answer: 0, explain: 'Các tiếng nối bằng gạch ngang.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên dùng thật nhiều từ tiếng Anh xen vào câu để thể hiện trình độ.', answer: false, explain: 'Không lạm dụng từ mượn.' },
    { type: 'mcq', q: '“Môi trường” là từ mượn gốc:', options: ['Hán', 'Pháp', 'Anh', 'Thuần Việt'], answer: 0, explain: 'Từ Hán Việt.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Từ mượn giúp làm giàu vốn từ tiếng Việt khi được dùng hợp lí.', answer: true, explain: 'Bổ sung từ chưa có.' },
    { type: 'mcq', q: 'Câu nào lạm dụng từ mượn?', options: ['Em rất happy khi đi shopping.', 'Em uống cà phê sữa.', 'Bố đọc báo trên in-tơ-nét.', 'Nhà ga rất đông.'], answer: 0, explain: 'Có từ thuần Việt “vui”, “mua sắm”.' },
    { type: 'mcq', q: '“Ga” (nhà ga) thuộc kiểu viết:', options: ['Việt hoá hoàn toàn', 'Dùng gạch nối', 'Giữ nguyên dạng', 'Viết hoa'], answer: 0, explain: 'Viết như từ thuần Việt.' }
  ]
});
