/* KHTN 9 – Bài 46. Đột biến nhiễm sắc thể. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-46', {
  objectives: [
    'Nêu được khái niệm đột biến NST; phân biệt đột biến cấu trúc và đột biến số lượng NST.',
    'Trình bày được các dạng đột biến cấu trúc (mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn) và đột biến số lượng (lệch bội, đa bội).',
    'Nêu được tác hại, vai trò của đột biến NST và một số ví dụ ở người, thực vật.'
  ],
  intro: 'Hội chứng Down do thừa một NST số 21; dưa hấu không hạt, chuối nhà có bộ NST tam bội (3n). Những biến đổi lớn ở mức NST có thể gây bệnh, nhưng cũng được con người tận dụng để tạo giống mới.',
  steps: [
    { title: 'Đột biến cấu trúc NST', html: `<p><b>Đột biến NST</b> là những biến đổi trong cấu trúc hoặc số lượng NST. <b>Đột biến cấu trúc NST</b> gồm:</p>
      <ul><li><b>Mất đoạn:</b> NST bị mất một đoạn (thường gây hại nặng).</li><li><b>Lặp đoạn:</b> một đoạn NST lặp lại một hay nhiều lần.</li><li><b>Đảo đoạn:</b> một đoạn NST đứt ra, quay 180° rồi gắn lại.</li><li><b>Chuyển đoạn:</b> một đoạn chuyển sang vị trí khác trên NST đó hoặc sang NST khác.</li></ul>`,
      svg: S.chromMutation({ kind: 'all' }), caption: 'Bốn dạng đột biến cấu trúc NST (sơ đồ, mỗi chữ cái là một đoạn NST).' },
    { title: 'Đột biến số lượng NST', html: `<ul><li><b>Lệch bội (dị bội):</b> thay đổi số lượng ở một hoặc một số cặp NST: thể ba (2n + 1), thể một (2n − 1).</li><li><b>Đa bội:</b> bộ NST tăng theo bội số của n, lớn hơn 2n: tam bội (3n), tứ bội (4n).</li></ul>
      <p>Ví dụ lúa 2n = 24: thể ba có 25 NST; thể một có 23 NST; tam bội có 36 NST; tứ bội có 48 NST.</p>`,
      svg: S.ploidy(), caption: 'So sánh bộ NST bình thường (2n) với thể lệch bội và thể đa bội (minh hoạ loài có n = 3).' },
    { title: 'Ví dụ ở người', html: `<table><tr><th>Hội chứng</th><th>Bộ NST</th></tr><tr><td>Down</td><td>3 NST số 21 (2n + 1 = 47)</td></tr><tr><td>Turner (nữ)</td><td>chỉ có 1 NST X (XO, 2n − 1 = 45)</td></tr><tr><td>Klinefelter (nam)</td><td>XXY (47 NST)</td></tr></table>`,
      svg: S.karyotype({ sex: 'XY', tri: 21 }), caption: 'Sơ đồ bộ NST của người mắc hội chứng Down: có 3 NST số 21.' },
    { title: 'Tác hại và vai trò', html: `<ul><li>Đột biến NST thường gây hại: chết, giảm sức sống, mất khả năng sinh sản, hội chứng bệnh ở người.</li><li><b>Vai trò:</b> thể đa bội ở thực vật thường có tế bào, cơ quan sinh dưỡng to, sinh trưởng mạnh ⇒ tạo giống cho năng suất cao (dưa hấu tam bội không hạt, nho tứ bội quả to). Đột biến cấu trúc cung cấp nguyên liệu cho tiến hoá, chọn giống.</li></ul>` }
  ],
  summary: 'Đột biến NST gồm đột biến cấu trúc (mất đoạn, lặp đoạn, đảo đoạn, chuyển đoạn) và đột biến số lượng: lệch bội (2n + 1, 2n − 1) và đa bội (3n, 4n…). Ở người: Down (3 NST 21), Turner (XO). Đột biến NST thường có hại nhưng thể đa bội được ứng dụng tạo giống cây trồng năng suất cao.',
  examples: [
    { title: 'Tính số NST', problem: 'Cà chua có 2n = 24. Tính số NST ở thể ba, thể một và thể tứ bội.', solution: 'Thể ba: 25; thể một: 23; tứ bội (4n): 48.' },
    { title: 'Nhận dạng đột biến', problem: 'NST ban đầu ABCDEFG, sau đột biến thành ABEDCFG. Đây là dạng đột biến gì?', solution: 'Đảo đoạn (đoạn CDE bị đảo thành EDC).' },
    { title: 'Hội chứng Down', problem: 'Người mắc hội chứng Down có bao nhiêu NST trong tế bào sinh dưỡng?', solution: '47 NST (thừa một NST số 21).' }
  ],
  exercises: [
    { question: 'NST ban đầu ABCDEFG. Viết NST sau đột biến mất đoạn DE và sau đột biến lặp đoạn BC.', hints: ['Mất đoạn: bỏ D, E.', 'Lặp đoạn: BC xuất hiện hai lần.'], solution: 'Mất đoạn: ABCFG. Lặp đoạn: ABCBCDEFG.' },
    { question: 'Lúa có 2n = 24. Tính số NST của thể tam bội và giải thích vì sao thể tam bội thường bất thụ.', hints: ['3n = ?', 'Khi giảm phân, các NST có chia đều về giao tử được không?'], solution: '3n = 36. Thể tam bội giảm phân rối loạn (mỗi bộ ba NST không chia đều được) nên thường không tạo giao tử bình thường, do đó bất thụ.' },
    { question: 'Phân biệt lệch bội và đa bội.', hints: ['Thay đổi ở một vài cặp hay toàn bộ bộ NST?', 'Ví dụ 2n + 1 và 3n.'], solution: 'Lệch bội: thay đổi số lượng ở một hoặc vài cặp NST (2n + 1, 2n − 1). Đa bội: tăng nguyên lần bộ đơn bội, lớn hơn 2n (3n, 4n).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Người mắc hội chứng Down có 3 NST số 21.', answer: true, explain: 'Thể ba ở cặp NST 21.' },
    { type: 'mcq', q: 'Dạng nào là đột biến cấu trúc NST?', options: ['Thể ba', 'Thể tam bội', 'Đảo đoạn', 'Thể một'], answer: 2, explain: 'Đảo đoạn thuộc đột biến cấu trúc.' },
    { type: 'short', q: 'Một loài có 2n = 14. Thể ba (2n + 1) của loài có bao nhiêu NST?', answer: '15', unit: 'NST', calc: '14+1', explain: '14 + 1 = 15.' },
    { type: 'short', q: 'Lúa có 2n = 24. Thể tứ bội (4n) có bao nhiêu NST?', answer: '48', unit: 'NST', calc: '24/2*4', explain: 'n = 12 ⇒ 4n = 48.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hội chứng Turner là do nữ giới có ba NST X.', answer: false, explain: 'Turner: chỉ có một NST X (XO).' },
    { type: 'mcq', q: 'Dưa hấu không hạt thường là thể:', options: ['lưỡng bội', 'tam bội', 'thể một', 'mất đoạn'], answer: 1, explain: 'Thể tam bội (3n) bất thụ nên không có hạt.' },
    { type: 'short', q: 'Người mắc hội chứng Turner (XO) có bao nhiêu NST trong tế bào sinh dưỡng?', answer: '45', unit: 'NST', calc: '46-1', explain: '2n − 1 = 45.' },
    { type: 'mcq', q: 'NST ABCDEFG đột biến thành ABCFG. Đây là:', options: ['lặp đoạn', 'mất đoạn', 'đảo đoạn', 'chuyển đoạn'], answer: 1, explain: 'Mất đoạn DE.' }
  ]
});
})();
