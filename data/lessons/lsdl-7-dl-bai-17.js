/* LS&ĐL 7 – Địa lí, Bài 17. Đặc điểm dân cư, xã hội Trung và Nam Mỹ, khai thác, sử dụng và bảo vệ rừng A-ma-dôn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-7/dl-bai-17', {
  objectives: [
    "Trình bày được đặc điểm dân cư, đô thị hoá ở Trung và Nam Mỹ.",
    "Trình bày được văn hoá Mỹ La-tinh.",
    "Phân tích được vấn đề khai thác, sử dụng và bảo vệ rừng A-ma-dôn."
  ],
  intro: "Rừng A-ma-dôn rộng khoảng 5,5 triệu km², được gọi là “lá phổi xanh” của Trái Đất. Nhưng mỗi năm, nhiều diện tích rừng nơi đây bị mất đi.",
  steps: [
    { title: "Dân cư, đô thị hoá", html: "<p>Phần lớn dân cư là <b>người lai</b> giữa người Anh-điêng, người gốc Âu và gốc Phi. Đô thị hoá cao, khoảng <b>80%</b> dân số sống ở thành thị; nhiều đô thị lớn: Xao Pao-lô, Mê-hi-cô Xi-ti, Bu-ê-nốt Ai-rét. Đô thị hoá nhanh gây ra nạn thất nghiệp, khu ổ chuột.</p>" },
    { title: "Văn hoá Mỹ La-tinh", html: "<p>Văn hoá độc đáo, pha trộn bản địa, Âu, Phi: tiếng Tây Ban Nha, Bồ Đào Nha; điệu nhảy xam-ba, tan-gô; lễ hội Các-na-van; bóng đá.</p>" },
    { title: "Rừng A-ma-dôn: vai trò và hiện trạng", html: "<p>Rừng A-ma-dôn điều hoà khí hậu, hấp thụ CO₂, có đa dạng sinh học rất cao. Phần lớn diện tích (khoảng 60%) thuộc Bra-xin. Rừng bị mất do chăn nuôi, trồng đậu tương, khai thác gỗ, khoáng sản, làm đường.</p>",
      svg: S.pieChart({ title: "Rừng A-ma-dôn theo quốc gia (gần đúng)", parts: [{ v: 60, label: "Bra-xin: khoảng 60%" }, { v: 13, label: "Pê-ru: khoảng 13%" }, { v: 27, label: "Các nước khác: khoảng 27%" }] }), caption: "Số liệu làm tròn, chỉ mang tính gần đúng." },
    { title: "Bảo vệ rừng", html: "<p>Các biện pháp:</p>",
      svg: S.flowchart({ title: "Bảo vệ rừng A-ma-dôn", steps: [{ t: 'start', s: "Giám sát bằng vệ tinh" }, { t: 'proc', s: "Lập khu bảo tồn" }, { t: 'proc', s: "Xử phạt phá rừng" }, { t: 'end', s: "Trồng, phục hồi rừng" }] }), caption: "Cần hợp tác của các nước có rừng và cộng đồng quốc tế." }
  ],
  summary: "Dân cư Trung và Nam Mỹ chủ yếu là người lai; đô thị hoá cao (khoảng 80%), nhiều đô thị lớn nhưng có nạn thất nghiệp, khu ổ chuột. Văn hoá Mỹ La-tinh pha trộn bản địa, Âu, Phi. Rừng A-ma-dôn (khoảng 5,5 triệu km², phần lớn thuộc Bra-xin) có vai trò rất lớn nhưng đang bị thu hẹp do chăn nuôi, trồng trọt, khai thác gỗ. Biện pháp: giám sát vệ tinh, lập khu bảo tồn, xử phạt, trồng rừng.",
  examples: [
    { title: "Tính", problem: "Bra-xin có khoảng 60% của 5,5 triệu km² rừng A-ma-dôn. Đó là bao nhiêu triệu km²?", solution: "5,5 × 60% = 3,3 triệu km²." },
    { title: "Giải thích", problem: "Vì sao gọi rừng A-ma-dôn là “lá phổi xanh”?", solution: "Rừng hấp thụ CO₂, thải ô-xi, điều hoà khí hậu Trái Đất." },
    { title: "Văn hoá", problem: "Kể một nét văn hoá Mỹ La-tinh.", solution: "Lễ hội Các-na-van, điệu xam-ba." }
  ],
  exercises: [
    { question: "Đô thị lớn nhất Bra-xin?", hints: ["Bắt đầu bằng “Xao”.", "Xao Pao-…"], solution: "Xao Pao-lô." },
    { question: "Nêu một nguyên nhân mất rừng A-ma-dôn.", hints: ["Gia súc.", "Hoặc đậu tương."], solution: "Chăn nuôi bò, trồng đậu tương, khai thác gỗ." },
    { question: "Đô thị hoá 80%, vậy nông thôn bao nhiêu %?", hints: ["100 − 80.", "…"], solution: "20%." }
  ],
  quiz: [
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Phần lớn rừng A-ma-dôn thuộc Bra-xin.", answer: true, explain: "Đúng." },
    { type: 'mcq', q: "Thành phần dân cư chủ yếu ở Trung và Nam Mỹ:", options: ["Người lai", "Người E-xki-mô", "Người Ma-ori", "Người Ả Rập"], answer: 0, explain: "Người lai." },
    { type: 'short', q: "Rừng A-ma-dôn khoảng 5,5 triệu km², Bra-xin chiếm 60%. Bao nhiêu triệu km²?", answer: "3.3", answerText: "3,3", unit: "triệu km²", calc: "5.5*60/100", explain: "3,3." },
    { type: 'mcq', q: "Lễ hội nổi tiếng ở Bra-xin:", options: ["Các-na-van", "Té nước", "Ô-bôn", "Đua voi"], answer: 0, explain: "Các-na-van." },
    { type: 'tf', q: "Khẳng định sau đúng hay sai: Đô thị hoá nhanh ở Mỹ La-tinh không gây ra vấn đề gì.", answer: false, explain: "Gây thất nghiệp, khu ổ chuột." },
    { type: 'mcq', q: "Biện pháp bảo vệ rừng A-ma-dôn:", options: ["Giám sát bằng vệ tinh", "Đốt rừng làm rẫy", "Mở rộng chăn nuôi", "Khai thác gỗ tự do"], answer: 0, explain: "Giám sát." },
    { type: 'short', q: "Tỉ lệ dân thành thị 80%. Nông thôn chiếm bao nhiêu %?", answer: "20", unit: "%", calc: "100-80", explain: "20." },
    { type: 'mcq', q: "Ngôn ngữ chính ở Bra-xin:", options: ["Bồ Đào Nha", "Tây Ban Nha", "Anh", "Pháp"], answer: 0, explain: "Bồ Đào Nha." }
  ]
});
})();
