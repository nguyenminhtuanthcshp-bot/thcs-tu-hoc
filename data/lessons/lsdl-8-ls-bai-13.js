/* LS&ĐL 8 – Lịch sử, Bài 13. Sự phát triển của khoa học, kĩ thuật, văn học, nghệ thuật trong các thế kỉ XVIII – XIX. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-8/ls-bai-13', {
  objectives: [
    "Nêu được những thành tựu chủ yếu về khoa học tự nhiên và xã hội.",
    "Nêu được những thành tựu về kĩ thuật.",
    "Giới thiệu được một số nhà văn, nghệ sĩ tiêu biểu.",
    "Phân tích được tác động của các thành tựu đó."
  ],
  intro: "Đèn điện, điện tín, thuyết tiến hoá… đều ra đời trong thế kỉ XIX – thế kỉ của những phát minh làm thay đổi cuộc sống loài người.",
  steps: [
    { title: "Khoa học tự nhiên", html: "<p>Tóm tắt:</p>",
      svg: S.table({ title: "Thành tựu khoa học tự nhiên", head: ["Nhà khoa học", "Thành tựu"], rows: [["Lô-mô-nô-xốp", "Bảo toàn vật chất, năng lượng"], ["Đác-uyn", "Thuyết tiến hoá (1859)"], ["Men-đê-lê-ép", "Bảng tuần hoàn (1869)"], ["Pa-xtơ", "Vắc xin phòng dại (1885)"]], colW: 250 }), caption: "Các mốc năm theo những tài liệu phổ biến." },
    { title: "Kĩ thuật", html: "<ul><li>Điện tín (Moóc-xơ, 1837); điện thoại (Ben, 1876).</li><li>Bóng đèn điện (Ê-đi-xơn, 1879).</li><li>Ô tô chạy xăng (Ben-xơ, 1885 – 1886).</li></ul>",
      svg: S.flowchart({ title: "Tác động của kĩ thuật", steps: [{ t: 'start', s: "Phát minh mới" }, { t: 'proc', s: "Sản xuất tăng" }, { t: 'proc', s: "Giao thông, liên lạc nhanh" }, { t: 'end', s: "Đời sống thay đổi" }] }), caption: "Thế kỉ XIX được gọi là “thế kỉ của sắt, máy móc và động cơ hơi nước”." },
    { title: "Khoa học xã hội", html: "<p>Triết học Đức (Hê-ghen), kinh tế chính trị học Anh (A. Xmít, Ri-các-đô), chủ nghĩa xã hội không tưởng và chủ nghĩa xã hội khoa học (Mác, Ăng-ghen).</p>" },
    { title: "Văn học, nghệ thuật", html: "<ul><li>Văn học: V. Huy-gô (“Những người khốn khổ”), L. Tôn-xtôi (“Chiến tranh và hoà bình”), M. Tuốc-vên.</li><li>Âm nhạc: Mô-da, Bét-tô-ven, Sô-panh.</li><li>Hội hoạ: trường phái ấn tượng (Mô-nê), Van Gốc.</li></ul>" }
  ],
  summary: "Thế kỉ XVIII – XIX có nhiều thành tựu khoa học: định luật bảo toàn (Lô-mô-nô-xốp), thuyết tiến hoá (Đác-uyn, 1859), bảng tuần hoàn (Men-đê-lê-ép, 1869), vắc xin phòng dại (Pa-xtơ, 1885). Kĩ thuật: điện tín, điện thoại, đèn điện, ô tô. Khoa học xã hội: triết học Hê-ghen, kinh tế học A. Xmít, chủ nghĩa xã hội khoa học. Văn học, nghệ thuật: Huy-gô, Tôn-xtôi, Mô-da, Bét-tô-ven, Van Gốc.",
  examples: [
    { title: "Tính", problem: "Từ 1859 đến 1869 là bao nhiêu năm?", solution: "10 năm." },
    { title: "Phân loại", problem: "Bảng tuần hoàn thuộc lĩnh vực nào?", solution: "Hoá học (khoa học tự nhiên)." },
    { title: "Tính", problem: "Từ 1876 (điện thoại) đến 1879 (đèn điện) là bao nhiêu năm?", solution: "3 năm." }
  ],
  exercises: [
    { question: "Ai xây dựng thuyết tiến hoá?", hints: ["Người Anh.", "Đác-…"], solution: "S. Đác-uyn." },
    { question: "Tác giả “Những người khốn khổ”?", hints: ["Nhà văn Pháp.", "V. Huy-…"], solution: "V. Huy-gô." },
    { question: "Từ 1837 đến 1876 là bao nhiêu năm?", hints: ["1876 − 1837.", "Gần 40."], solution: "39 năm." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Men-đê-lê-ép công bố bảng tuần hoàn năm 1869.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Người phát minh bóng đèn điện (1879):", options: ["Ê-đi-xơn", "Moóc-xơ", "Ben", "Pa-xtơ"], answer: 0, explain: "Ê-đi-xơn." },
    { type: 'short', q: "Từ 1859 đến 1869 là bao nhiêu năm?", answer: "10", unit: "năm", calc: "1869-1859", explain: "10." },
    { type: 'mcq', q: "Nhạc sĩ thiên tài người Đức:", options: ["Bét-tô-ven", "Huy-gô", "Đác-uyn", "Van Gốc"], answer: 0, explain: "Bét-tô-ven." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Pa-xtơ là người phát minh điện thoại.", answer: false, explain: "Pa-xtơ chế vắc xin phòng dại." },
    { type: 'mcq', q: "Tác giả “Chiến tranh và hoà bình”:", options: ["L. Tôn-xtôi", "V. Huy-gô", "M. Tuốc-vên", "Mô-da"], answer: 0, explain: "Tôn-xtôi." },
    { type: 'short', q: "Năm 1885 thuộc thế kỉ thứ mấy? (ghi số)", answer: "19", calc: "Math.floor((1885-1)/100)+1", explain: "Thế kỉ XIX." },
    { type: 'mcq', q: "Người đặt nền móng cho kinh tế chính trị học tư sản:", options: ["A. Xmít", "Hê-ghen", "Mô-nê", "Lê-nin"], answer: 0, explain: "A. Xmít." }
  ]
});
})();
