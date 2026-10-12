/* LS&ĐL 7 – Địa lí, Bài 4. Liên minh châu Âu. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-4', {
  objectives: [
    "Chứng minh được Liên minh châu Âu là một trong những trung tâm kinh tế lớn của thế giới.",
    "Nêu được quá trình hình thành Liên minh châu Âu.",
    "Trình bày được một số nét hợp tác trong Liên minh châu Âu."
  ],
  intro: "Người dân nhiều nước châu Âu có thể đi lại, học tập, làm việc ở các nước thành viên khác gần như ở chính nước mình, và cùng tiêu một đồng tiền: <b>ơ-rô</b>.",
  steps: [
    { title: "Quá trình hình thành", html: "<p>Năm <b>1957</b>, sáu nước kí Hiệp ước Rô-ma lập Cộng đồng Kinh tế châu Âu. Năm <b>1993</b>, Hiệp ước Ma-xtrích có hiệu lực, tổ chức mang tên <b>Liên minh châu Âu (EU)</b>. Năm 2020, Anh rời EU; hiện EU có <b>27</b> thành viên. Trụ sở chính ở Bruy-xen (Bỉ).</p>",
      svg: S.timeline({ title: "Liên minh châu Âu", items: [{ y: "1957", s: "Hiệp ước Rô-ma (6 nước)" }, { y: "1993", s: "Tên gọi EU" }, { y: "2002", s: "Lưu hành tiền ơ-rô" }, { y: "2020", s: "Anh rời EU" }] }), caption: "Đồng ơ-rô ra đời năm 1999 (dạng chuyển khoản), tiền mặt lưu hành từ năm 2002." },
    { title: "Trung tâm kinh tế lớn", html: "<p>EU là một trong những trung tâm kinh tế lớn nhất thế giới, đứng hàng đầu về thương mại; nhiều ngành công nghiệp hiện đại (hàng không, ô tô, dược phẩm) và dịch vụ (tài chính, du lịch).</p>" },
    { title: "Hợp tác trong EU", html: "<p>Thị trường chung với bốn tự do lưu thông:</p>",
      svg: S.mindmap({ center: "Thị trường chung EU", branches: [{ title: "Con người", items: ["Đi lại, cư trú"] }, { title: "Hàng hoá", items: ["Không thuế nội khối"] }, { title: "Dịch vụ", items: ["Ngân hàng, vận tải"] }, { title: "Tiền vốn", items: ["Đầu tư tự do"] }], w: 640, size: 13 }), caption: "Nhiều nước còn dùng chung đồng ơ-rô." },
    { title: "Ghi nhớ", html: "<div class=\"box key\">EU: thành lập từ 1957 (Cộng đồng Kinh tế châu Âu), tên EU từ 1993, 27 thành viên, trụ sở Bruy-xen; thị trường chung với bốn tự do lưu thông.</div>" }
  ],
  summary: "Năm 1957, sáu nước lập Cộng đồng Kinh tế châu Âu; năm 1993 có tên Liên minh châu Âu (EU). Sau khi Anh rời đi (2020), EU còn 27 thành viên, trụ sở ở Bruy-xen. EU là trung tâm kinh tế, thương mại hàng đầu thế giới, có thị trường chung với tự do lưu thông con người, hàng hoá, dịch vụ, tiền vốn; nhiều nước dùng chung đồng ơ-rô.",
  examples: [
    { title: "Tính", problem: "Từ 1957 đến 1993 là bao nhiêu năm?", solution: "36 năm." },
    { title: "Tính", problem: "Từ 6 nước ban đầu đến 27 thành viên, tăng thêm bao nhiêu nước?", solution: "21 nước." },
    { title: "Giải thích", problem: "Thị trường chung có lợi gì cho người dân?", solution: "Đi lại, làm việc dễ dàng; hàng hoá rẻ hơn do không thuế nội khối." }
  ],
  exercises: [
    { question: "Trụ sở chính của EU ở đâu?", hints: ["Thủ đô nước Bỉ.", "Bruy-…"], solution: "Bruy-xen." },
    { question: "Nước nào rời EU năm 2020?", hints: ["Một đảo quốc.", "Thủ đô Luân Đôn."], solution: "Vương quốc Anh." },
    { question: "Hiện nay EU có bao nhiêu thành viên?", hints: ["28 trừ 1.", "Sau khi Anh rời."], solution: "27 thành viên." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: EU có trụ sở chính ở Bruy-xen.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Tên gọi Liên minh châu Âu có từ năm:", options: ["1993", "1957", "2002", "2020"], answer: 0, explain: "1993." },
    { type: 'short', q: "EU có 6 nước ban đầu và 27 thành viên hiện nay. Đã tăng thêm bao nhiêu nước?", answer: "21", unit: "nước", calc: "27-6", explain: "21." },
    { type: 'mcq', q: "Đồng tiền chung của nhiều nước EU:", options: ["Ơ-rô", "Đô la", "Bảng Anh", "Yên"], answer: 0, explain: "Ơ-rô." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Hiện nay Vương quốc Anh vẫn là thành viên EU.", answer: false, explain: "Anh rời EU năm 2020." },
    { type: 'mcq', q: "Hiệp ước lập Cộng đồng Kinh tế châu Âu năm 1957:", options: ["Hiệp ước Rô-ma", "Hiệp ước Ma-xtrích", "Hiệp ước Nam Cực", "Hiệp ước Véc-xai"], answer: 0, explain: "Rô-ma." },
    { type: 'short', q: "Từ 1957 đến 1993 là bao nhiêu năm?", answer: "36", unit: "năm", calc: "1993-1957", explain: "36." },
    { type: 'mcq', q: "Không phải một “tự do lưu thông” của thị trường chung EU:", options: ["Tự do vũ khí", "Hàng hoá", "Con người", "Dịch vụ"], answer: 0, explain: "Bốn tự do: con người, hàng hoá, dịch vụ, tiền vốn." }
  ]
});
})();
