/* Tin học 8 – Bài 1. Lược sử công cụ tính toán. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-8/bai-1', {
  objectives: [
    'Trình bày được sơ lược lịch sử phát triển của công cụ tính toán, từ bàn tính đến máy tính điện tử.',
    'Nêu được đặc điểm các thế hệ máy tính điện tử gắn với linh kiện chính.',
    'Nhận biết được sự phát triển của máy tính đã thay đổi cuộc sống con người.'
  ],
  intro: 'Từ những viên sỏi, que tính đến chiếc điện thoại trong túi em mạnh hơn cả căn phòng máy tính năm xưa – con người đã đi một chặng đường rất dài để chế tạo <b>công cụ tính toán</b>.',
  steps: [
    { title: 'Công cụ tính toán thô sơ và cơ học', html: `<ul><li><b>Bàn tính</b> (bàn tính gảy) đã được dùng từ hàng nghìn năm trước ở nhiều nền văn minh.</li><li>Đầu thế kỉ XVII: <b>que tính Napier</b> (1617) và <b>thước lôgarit</b> (khoảng 1620) giúp nhân, chia nhanh hơn.</li><li>1642: <b>Blaise Pascal</b> chế tạo máy Pascaline, thực hiện phép cộng, trừ bằng bánh răng.</li><li>Khoảng 1673: <b>Leibniz</b> chế tạo máy tính cơ học làm được cả nhân, chia.</li><li>Thế kỉ XIX: <b>Charles Babbage</b> thiết kế Máy phân tích – ý tưởng máy tính có thể lập trình; <b>Ada Lovelace</b> viết những ghi chú được coi là chương trình máy tính đầu tiên.</li></ul>`,
      svg: S.timeline({ title: 'Một số mốc của công cụ tính toán', items: [{ y: 'Cổ đại', s: 'Bàn tính' }, { y: '1617', s: 'Que tính Napier' }, { y: '1642', s: 'Máy Pascaline' }, { y: '~1673', s: 'Máy Leibniz' }, { y: '1830s', s: 'Máy phân tích', sub: 'Babbage' }, { y: '1945', s: 'ENIAC' }], note: 'Các mốc được làm tròn để dễ nhớ' }), caption: 'Từ bàn tính đến máy tính điện tử.' },
    { title: 'Máy tính điện tử ra đời', html: `<p><b>ENIAC</b> (Mĩ) hoàn thành năm 1945 và được giới thiệu năm 1946 – một trong những máy tính điện tử đa năng đầu tiên. Máy dùng khoảng 18 000 bóng đèn điện tử chân không, nặng khoảng 30 tấn, chiếm cả một căn phòng lớn.</p>` },
    { title: 'Các thế hệ máy tính điện tử', html: `<p>Người ta thường chia máy tính điện tử thành các thế hệ theo linh kiện chính:</p>`,
      svg: S.table({ title: 'Các thế hệ máy tính (mốc thời gian gần đúng)', head: ['Thế hệ', 'Linh kiện chính', 'Thời gian'], rows: [['1', 'Đèn điện tử chân không', '1945 – 1955'], ['2', 'Bóng bán dẫn (transistor)', '1955 – 1965'], ['3', 'Mạch tích hợp (IC)', '1965 – 1974'], ['4', 'Mạch tích hợp cỡ rất lớn (VLSI)', '1974 – nay'], ['5', 'Hướng tới trí tuệ nhân tạo', 'đang phát triển']], colW: 200 }), caption: 'Mỗi thế hệ máy nhỏ hơn, nhanh hơn, tiêu thụ ít điện hơn.' },
    { title: 'Máy tính thay đổi cuộc sống', html: `<p>Máy tính ngày càng nhỏ gọn, rẻ, mạnh: máy tính cá nhân, máy tính xách tay, điện thoại thông minh, thiết bị đeo… Chúng thay đổi cách con người học tập, làm việc, giao tiếp, giải trí, chữa bệnh, sản xuất.</p>
      <div class="box key">Thô sơ → cơ học → điện tử: đèn chân không → bóng bán dẫn → IC → VLSI.</div>` }
  ],
  summary: 'Công cụ tính toán phát triển từ bàn tính, que tính Napier, thước lôgarit, máy cơ học của Pascal (1642), Leibniz, ý tưởng Máy phân tích của Babbage, đến máy tính điện tử ENIAC (1945). Máy tính điện tử qua các thế hệ: đèn chân không, bóng bán dẫn, mạch tích hợp, mạch tích hợp cỡ rất lớn; thế hệ mới hướng tới trí tuệ nhân tạo.',
  examples: [
    { title: 'Sắp xếp mốc', problem: 'Sắp xếp theo thời gian: ENIAC, Pascaline, que tính Napier.', solution: 'Que tính Napier (1617) → Pascaline (1642) → ENIAC (1945).' },
    { title: 'Nhận biết thế hệ', problem: 'Máy tính dùng bóng bán dẫn thuộc thế hệ thứ mấy?', solution: 'Thế hệ thứ hai.' },
    { title: 'Tính khoảng thời gian', problem: 'Từ máy Pascaline (1642) đến ENIAC (1945) cách nhau bao nhiêu năm?', solution: '1945 − 1642 = 303 năm.' }
  ],
  exercises: [
    { question: 'Nêu một điểm khác nhau giữa máy Pascaline và máy của Leibniz.', hints: ['Pascaline làm được những phép tính nào?', 'Máy Leibniz làm thêm phép tính gì?'], solution: 'Pascaline chủ yếu cộng, trừ; máy Leibniz làm được cả nhân, chia.' },
    { question: 'Vì sao máy tính thế hệ sau thường nhỏ hơn, tốn ít điện hơn?', hints: ['So sánh bóng đèn chân không và bóng bán dẫn.', 'Mạch tích hợp chứa bao nhiêu linh kiện?'], solution: 'Linh kiện mới nhỏ hơn, tiêu thụ ít điện hơn; mạch tích hợp gói rất nhiều linh kiện trên một con chip.' },
    { question: 'ENIAC nặng khoảng 30 tấn. Một máy tính xách tay nặng khoảng 1,5 kg. ENIAC nặng gấp khoảng bao nhiêu lần?', hints: ['Đổi 30 tấn ra kg.', '30 000 : 1,5.'], solution: '30 000 : 1,5 = 20 000 lần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bàn tính là một công cụ tính toán thô sơ đã có từ rất lâu.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Máy Pascaline do ai chế tạo?', options: ['Leibniz', 'Blaise Pascal', 'Charles Babbage', 'Napier'], answer: 1, explain: 'Pascal, năm 1642.' },
    { type: 'short', q: 'Máy Pascaline ra đời năm nào?', answer: '1642', calc: '1642', explain: '1642.' },
    { type: 'mcq', q: 'Linh kiện chính của máy tính thế hệ thứ nhất là:', options: ['Bóng bán dẫn', 'Mạch tích hợp', 'Đèn điện tử chân không', 'Vi xử lí VLSI'], answer: 2, explain: 'Đèn chân không.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Máy tính thế hệ sau thường to và nặng hơn thế hệ trước.', answer: false, explain: 'Ngày càng nhỏ gọn.' },
    { type: 'short', q: 'Từ ENIAC (1945) đến năm 2025 là bao nhiêu năm?', answer: '80', unit: 'năm', calc: '2025-1945', explain: '80 năm.' },
    { type: 'mcq', q: 'Người thiết kế Máy phân tích ở thế kỉ XIX là:', options: ['Charles Babbage', 'Blaise Pascal', 'Ada Lovelace', 'Leibniz'], answer: 0, explain: 'Babbage.' },
    { type: 'mcq', q: 'Máy tính dùng mạch tích hợp (IC) thuộc thế hệ:', options: ['thứ nhất', 'thứ hai', 'thứ ba', 'thứ năm'], answer: 2, explain: 'Thứ ba.' }
  ]
});
})();
