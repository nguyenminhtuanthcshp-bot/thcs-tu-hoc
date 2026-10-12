/* LS&ĐL 8 – Lịch sử, Bài 17. Cuộc kháng chiến chống thực dân Pháp xâm lược từ năm 1858 đến năm 1884. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-17', {
  objectives: [
    "Trình bày được quá trình thực dân Pháp xâm lược Việt Nam.",
    "Mô tả được cuộc kháng chiến của nhân dân ta.",
    "Nêu được nguyên nhân Việt Nam mất nước."
  ],
  intro: "“Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây” – lời khẳng khái của Nguyễn Trung Trực trước khi bị thực dân Pháp hành hình.",
  steps: [
    { title: "Pháp xâm lược", html: "<p>Ngày <b>1/9/1858</b>, liên quân Pháp – Tây Ban Nha nổ súng tấn công <b>Đà Nẵng</b>, mở đầu cuộc xâm lược. Quân dân ta chặn đứng kế hoạch “đánh nhanh thắng nhanh”. Năm 1859, Pháp chuyển vào đánh Gia Định.</p>" },
    { title: "Mất Nam Kì", html: "<p>Năm <b>1862</b>, triều đình kí Hiệp ước Nhâm Tuất cắt ba tỉnh miền Đông Nam Kì cho Pháp. Năm <b>1867</b>, Pháp chiếm nốt ba tỉnh miền Tây. Nhân dân vẫn kiên cường kháng chiến: Trương Định, Nguyễn Trung Trực.</p>",
      svg: S.timeline({ title: "Pháp xâm lược Việt Nam", items: [{ y: "1/9/1858", s: "Tấn công Đà Nẵng" }, { y: "1862", s: "Hiệp ước Nhâm Tuất" }, { y: "1867", s: "Mất 3 tỉnh miền Tây" }, { y: "1873", s: "Đánh Bắc Kì lần 1" }, { y: "1882", s: "Đánh Bắc Kì lần 2" }] }), caption: "Năm 1873 và 1883 có hai trận Cầu Giấy (Hà Nội)." },
    { title: "Pháp đánh Bắc Kì", html: "<p>Năm <b>1873</b>, Pháp đánh Bắc Kì lần 1; ngày 21/12/1873, quân ta thắng trận <b>Cầu Giấy</b> lần 1 (Gác-ni-ê bị giết). Năm 1882, Pháp đánh Bắc Kì lần 2; ngày 19/5/1883, thắng trận Cầu Giấy lần 2 (Ri-vi-e bị giết). Triều đình kí Hiệp ước Hác-măng (<b>1883</b>) và Pa-tơ-nốt (<b>1884</b>), thừa nhận nền bảo hộ của Pháp.</p>" },
    { title: "Nguyên nhân mất nước", html: "<div class=\"box key\">Triều Nguyễn bảo thủ, thiếu đường lối đúng đắn, không dựa vào sức dân, từng bước nhân nhượng, thoả hiệp; trong khi nhân dân kháng chiến rất anh dũng.</div>" }
  ],
  summary: "Ngày 1/9/1858, liên quân Pháp – Tây Ban Nha tấn công Đà Nẵng, mở đầu cuộc xâm lược. Năm 1862 triều đình kí Hiệp ước Nhâm Tuất; năm 1867 Pháp chiếm 6 tỉnh Nam Kì. Năm 1873 và 1882 Pháp đánh Bắc Kì; quân ta thắng hai trận Cầu Giấy (1873, 1883). Hiệp ước Hác-măng (1883) và Pa-tơ-nốt (1884) đánh dấu Việt Nam trở thành thuộc địa của Pháp. Nhân dân kháng chiến anh dũng nhưng triều Nguyễn nhân nhượng nên mất nước.",
  examples: [
    { title: "Tính", problem: "Từ 1858 đến 1884 là bao nhiêu năm?", solution: "26 năm." },
    { title: "Tính", problem: "Hai trận Cầu Giấy cách nhau khoảng bao nhiêu năm (1873 và 1883)?", solution: "10 năm." },
    { title: "Phân tích", problem: "Vì sao Pháp chọn Đà Nẵng để tấn công đầu tiên?", solution: "Gần kinh đô Huế, cảng biển sâu, có thể nhanh chóng uy hiếp triều đình." }
  ],
  exercises: [
    { question: "Hiệp ước năm 1862?", hints: ["Năm Nhâm Tuất.", "Nhâm …"], solution: "Hiệp ước Nhâm Tuất." },
    { question: "Ai nói câu “Bao giờ người Tây nhổ hết cỏ nước Nam…”?", hints: ["Lãnh tụ kháng chiến ở Nam Kì.", "Nguyễn Trung …"], solution: "Nguyễn Trung Trực." },
    { question: "Từ 1/9/1858 đến 1/9/2028 là bao nhiêu năm?", hints: ["2028 − 1858.", "Hơn một thế kỉ rưỡi."], solution: "170 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Ngày 1/9/1858, Pháp tấn công Đà Nẵng.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Hiệp ước kí năm 1884:", options: ["Pa-tơ-nốt", "Nhâm Tuất", "Hác-măng", "Giáp Tuất"], answer: 0, explain: "Pa-tơ-nốt." },
    { type: 'short', q: "Từ 1858 đến 1884 là bao nhiêu năm?", answer: "26", unit: "năm", calc: "1884-1858", explain: "26." },
    { type: 'mcq', q: "Tướng Pháp bị giết ở trận Cầu Giấy năm 1873:", options: ["Gác-ni-ê", "Ri-vi-e", "Pa-tơ-nốt", "Hác-măng"], answer: 0, explain: "Gác-ni-ê." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Năm 1862, Pháp chiếm cả 6 tỉnh Nam Kì.", answer: false, explain: "Năm 1862 mất 3 tỉnh miền Đông; năm 1867 mất 3 tỉnh miền Tây." },
    { type: 'mcq', q: "Thủ lĩnh kháng chiến ở Gò Công:", options: ["Trương Định", "Hoàng Hoa Thám", "Phan Đình Phùng", "Tôn Thất Thuyết"], answer: 0, explain: "Trương Định." },
    { type: 'short', q: "Từ 1862 đến 1867 là bao nhiêu năm?", answer: "5", unit: "năm", calc: "1867-1862", explain: "5." },
    { type: 'mcq', q: "Năm 1859, Pháp chuyển hướng tấn công:", options: ["Gia Định", "Hà Nội", "Huế", "Hải Phòng"], answer: 0, explain: "Gia Định." }
  ]
});
})();
