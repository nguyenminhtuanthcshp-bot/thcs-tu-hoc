/* GDCD 9 – Bài 5. Bảo vệ hoà bình. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-9/bai-5', {
  objectives: [
    'Giải thích được thế nào là hoà bình và bảo vệ hoà bình.',
    'Nêu được ý nghĩa của bảo vệ hoà bình và các biểu hiện bảo vệ hoà bình.',
    'Tham gia các hoạt động bảo vệ hoà bình phù hợp lứa tuổi.',
    'Phê phán xu hướng hiếu chiến, bạo lực, gây xung đột.'
  ],
  intro: 'Trong giờ sinh hoạt, cô giáo cho lớp xem đoạn phim về trẻ em ở những vùng đang có chiến tranh: trường học đổ nát, nhiều em phải rời bỏ quê hương. An lặng đi rồi hỏi: “Chúng em có thể làm gì để <b>bảo vệ hoà bình</b>?”.',
  steps: [
    { title: 'Hoà bình và bảo vệ hoà bình', html: `<ul><li><b>Hoà bình</b> là tình trạng không có chiến tranh, xung đột vũ trang; là mối quan hệ hiểu biết, tôn trọng, bình đẳng, hợp tác giữa các quốc gia, dân tộc và giữa con người với nhau.</li><li><b>Bảo vệ hoà bình</b> là giữ gìn cuộc sống bình yên; dùng thương lượng, đàm phán để giải quyết mâu thuẫn; không để xảy ra chiến tranh, xung đột.</li></ul>` },
    { title: 'Hoà bình và chiến tranh', html: `<p>Hậu quả trái ngược:</p>`,
      svg: S.compare({ title: 'Hoà bình và chiến tranh', left: { h: 'Hoà bình mang lại', items: ['Cuộc sống bình yên, ấm no', 'Trẻ em được đến trường', 'Kinh tế, văn hoá phát triển', 'Hợp tác giữa các nước'] }, right: { h: 'Chiến tranh gây ra', items: ['Mất mát về người', 'Nhà cửa, trường học bị phá huỷ', 'Đói nghèo, dịch bệnh', 'Người dân phải lánh nạn'] } }), caption: 'Hoà bình là khát vọng của toàn nhân loại.' },
    { title: 'Biểu hiện bảo vệ hoà bình', html: `<ul><li><b>Trong quan hệ hằng ngày</b>: tôn trọng, thân thiện; giải quyết mâu thuẫn bằng đối thoại, không dùng bạo lực.</li><li><b>Trong quan hệ quốc tế</b>: Việt Nam kiên trì chính sách đối ngoại hoà bình, hữu nghị, hợp tác; giải quyết tranh chấp bằng biện pháp hoà bình.</li><li>Tham gia hoạt động vì hoà bình: vẽ tranh, viết thư, giao lưu hữu nghị.</li></ul>` },
    { title: 'Giải quyết mâu thuẫn hoà bình', html: `<p>Áp dụng trong lớp học:</p>`,
      svg: S.flowchart({ title: 'Giải quyết mâu thuẫn không bạo lực', steps: [{ t: 'start', s: 'Có mâu thuẫn' }, { t: 'proc', s: 'Bình tĩnh, lắng nghe nhau' }, { t: 'if', s: 'Tự thoả thuận được?', yes: 'Cùng thực hiện', no: 'Nhờ người trung gian' }, { t: 'end', s: 'Giữ đoàn kết' }] }), caption: 'Ngày Quốc tế Hoà bình của Liên hợp quốc: 21/9 hằng năm.' }
  ],
  summary: 'Hoà bình là không có chiến tranh, xung đột; là quan hệ hiểu biết, tôn trọng, hợp tác. Bảo vệ hoà bình là giữ gìn cuộc sống bình yên, giải quyết mâu thuẫn bằng thương lượng. Hoà bình đem lại cuộc sống ấm no, phát triển; chiến tranh gây mất mát, đổ nát. Học sinh sống thân thiện, giải quyết mâu thuẫn không bạo lực, tham gia hoạt động vì hoà bình.',
  examples: [
    { title: 'Câu hỏi của An', problem: 'Học sinh có thể làm gì để bảo vệ hoà bình?', solution: 'Sống thân thiện, không bạo lực; tham gia vẽ tranh, viết thư vì hoà bình; giao lưu hữu nghị; lên án hành vi gây xung đột.' },
    { title: 'Nhận diện', problem: 'Hai nhóm học sinh hẹn nhau “giải quyết” sau giờ học bằng đánh nhau. Đây là hành vi gì?', solution: 'Dùng bạo lực, đi ngược tinh thần hoà bình; cần báo thầy cô để hoà giải.' },
    { title: 'Tính thời gian', problem: 'Liên hợp quốc thành lập năm 1945. Đến năm 2026 là bao nhiêu năm?', solution: '81 năm.' }
  ],
  exercises: [
    { question: 'Kể ba việc học sinh có thể làm để bảo vệ hoà bình.', hints: ['Trong lớp.', 'Trên mạng xã hội.'], solution: 'Giải quyết mâu thuẫn bằng đối thoại; không chia sẻ nội dung kích động bạo lực, thù hằn; tham gia hoạt động giao lưu hữu nghị.' },
    { question: 'Từ năm 1975 (thống nhất đất nước) đến năm 2026 Việt Nam đã có hoà bình, thống nhất bao nhiêu năm?', hints: ['Trừ hai năm.', '2026 − 1975.'], solution: '51 năm.' },
    { question: 'Vì sao nói hoà bình là khát vọng của toàn nhân loại?', hints: ['Hậu quả chiến tranh.', 'Điều kiện để phát triển.'], solution: 'Vì chiến tranh gây đau thương cho mọi dân tộc; chỉ có hoà bình con người mới được sống an toàn, phát triển.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hoà bình là tình trạng không có chiến tranh, xung đột vũ trang.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Hành vi thể hiện bảo vệ hoà bình:', options: ['Giải quyết mâu thuẫn bằng đối thoại', 'Hẹn đánh nhau', 'Kích động thù hằn trên mạng', 'Chế giễu dân tộc khác'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Ngày Quốc tế Hoà bình là ngày 21 tháng mấy?', answer: '9', calc: '9', explain: '21/9.' },
    { type: 'mcq', q: 'Hậu quả của chiến tranh:', options: ['Mất mát về người, của', 'Kinh tế phát triển', 'Trẻ em được đến trường', 'Hợp tác quốc tế'], answer: 0, explain: 'Đúng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảo vệ hoà bình chỉ là việc của các nhà lãnh đạo.', answer: false, explain: 'Của mọi người.' },
    { type: 'short', q: 'Từ năm 1975 đến năm 2026 là bao nhiêu năm?', answer: '51', unit: 'năm', calc: '2026-1975', explain: '51.' },
    { type: 'mcq', q: 'Chính sách đối ngoại của Việt Nam:', options: ['Hoà bình, hữu nghị, hợp tác', 'Gây xung đột', 'Đóng cửa', 'Can thiệp nước khác'], answer: 0, explain: 'Đúng.' },
    { type: 'short', q: 'Liên hợp quốc thành lập năm 1945. Đến 2026 là bao nhiêu năm?', answer: '81', unit: 'năm', calc: '2026-1945', explain: '81.' }
  ]
});
})();
