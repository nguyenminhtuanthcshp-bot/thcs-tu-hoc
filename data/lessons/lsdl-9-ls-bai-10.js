/* LS&ĐL 9 – Lịch sử, Bài 10. Liên Xô và Đông Âu từ năm 1945 đến năm 1991. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-9/ls-bai-10', {
  objectives: [
    "Trình bày được công cuộc khôi phục và xây dựng ở Liên Xô sau 1945.",
    "Nêu được thành tựu xây dựng chủ nghĩa xã hội ở Đông Âu.",
    "Giải thích được nguyên nhân sụp đổ của chế độ xã hội chủ nghĩa ở Liên Xô và Đông Âu."
  ],
  intro: "Năm 1957, vệ tinh nhân tạo đầu tiên của loài người do Liên Xô phóng lên. Nhưng chỉ hơn ba thập niên sau, Liên Xô tan rã. Vì sao?",
  steps: [
    { title: "Liên Xô 1945 – 1970", html: "<p>Liên Xô khôi phục kinh tế nhanh chóng (hoàn thành trước thời hạn kế hoạch 1946 – 1950); năm 1949 chế tạo thành công bom nguyên tử.</p>",
      svg: S.timeline({ title: "Thành tựu của Liên Xô", items: [{ y: "1949", s: "Bom nguyên tử" }, { y: "4/10/1957", s: "Vệ tinh nhân tạo" }, { y: "12/4/1961", s: "Ga-ga-rin bay vào vũ trụ" }] }), caption: "Liên Xô dẫn đầu về khoa học vũ trụ thời kì đầu." },
    { title: "Đông Âu", html: "<p>Các nước Đông Âu xây dựng chế độ dân chủ nhân dân, rồi đi lên chủ nghĩa xã hội; năm 1949 lập Hội đồng Tương trợ Kinh tế (SEV) cùng Liên Xô.</p>" },
    { title: "Khủng hoảng và tan rã", html: "<p>Từ thập niên 1970, kinh tế trì trệ; công cuộc cải tổ (từ 1985) mắc sai lầm. Các nước Đông Âu lần lượt thay đổi chế độ (1989 – 1990). Ngày <b>25/12/1991</b>, Liên Xô chấm dứt tồn tại.</p>",
      svg: S.flowchart({ title: "Từ khủng hoảng đến sụp đổ", steps: [{ t: 'start', s: "Trì trệ thập niên 1970" }, { t: 'proc', s: "Cải tổ từ 1985" }, { t: 'proc', s: "Đông Âu sụp đổ 1989 – 1990" }, { t: 'end', s: "Liên Xô tan rã 12/1991" }] }), caption: "Quá trình diễn ra trong khoảng 20 năm." },
    { title: "Nguyên nhân", html: "<div class=\"box key\">Mô hình kinh tế tập trung, quan liêu kéo dài; chậm sửa chữa sai lầm; cải tổ rời bỏ nguyên tắc; sự chống phá của các thế lực thù địch. Sự sụp đổ là của một mô hình chủ nghĩa xã hội chưa khoa học, không phải của lí tưởng xã hội chủ nghĩa.</div>" }
  ],
  summary: "Sau 1945, Liên Xô khôi phục nhanh, chế tạo bom nguyên tử (1949), phóng vệ tinh nhân tạo (1957), đưa Ga-ga-rin bay vào vũ trụ (1961). Các nước Đông Âu đi lên chủ nghĩa xã hội, lập SEV (1949). Từ thập niên 1970, khủng hoảng kéo dài; cải tổ thất bại; Đông Âu thay đổi chế độ (1989 – 1990), Liên Xô tan rã (25/12/1991).",
  examples: [
    { title: "Tính", problem: "Từ vệ tinh nhân tạo (1957) đến chuyến bay của Ga-ga-rin (1961) là mấy năm?", solution: "4 năm." },
    { title: "Giải thích", problem: "Vì sao mô hình kinh tế tập trung bộc lộ hạn chế?", solution: "Không khuyến khích năng suất, chậm đổi mới công nghệ, quan liêu." },
    { title: "Rút ra bài học", problem: "Bài học cho các nước xây dựng chủ nghĩa xã hội?", solution: "Đổi mới kịp thời, phù hợp thực tiễn, giữ vững nguyên tắc, phát huy dân chủ." }
  ],
  exercises: [
    { question: "Liên Xô tan rã ngày nào?", hints: ["Cuối năm 1991.", "Ngày 25/…"], solution: "25/12/1991." },
    { question: "Người đầu tiên bay vào vũ trụ?", hints: ["Phi công Liên Xô.", "Ga-…"], solution: "I. Ga-ga-rin (12/4/1961)." },
    { question: "SEV thành lập năm nào?", hints: ["Cùng năm Liên Xô có bom nguyên tử.", "194…"], solution: "Năm 1949." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Liên Xô phóng vệ tinh nhân tạo đầu tiên năm 1957.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Liên Xô chế tạo thành công bom nguyên tử năm:", options: ["1949", "1945", "1957", "1961"], answer: 0, explain: "1949." },
    { type: 'short', q: "Từ 1922 (thành lập) đến 1991 (tan rã) Liên Xô tồn tại bao nhiêu năm?", answer: "69", unit: "năm", calc: "1991-1922", explain: "69." },
    { type: 'mcq', q: "Người bay vào vũ trụ đầu tiên:", options: ["Ga-ga-rin", "Am-xtơ-rông", "Gooc-ba-chốp", "Tru-man"], answer: 0, explain: "Ga-ga-rin." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Liên Xô tan rã năm 1989.", answer: false, explain: "Năm 1991." },
    { type: 'mcq', q: "Tổ chức kinh tế của Liên Xô và Đông Âu:", options: ["SEV", "NATO", "EU", "ASEAN"], answer: 0, explain: "SEV." },
    { type: 'short', q: "Từ 1985 (cải tổ) đến 1991 là bao nhiêu năm?", answer: "6", unit: "năm", calc: "1991-1985", explain: "6." },
    { type: 'mcq', q: "Nguyên nhân sâu xa sự sụp đổ:", options: ["Mô hình chủ nghĩa xã hội có nhiều khuyết tật, chậm sửa đổi", "Thiên tai", "Thua chiến tranh", "Thiếu tài nguyên"], answer: 0, explain: "Mô hình chậm đổi mới." }
  ]
});
})();
