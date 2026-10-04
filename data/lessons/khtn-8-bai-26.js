/* KHTN 8 – Bài 26. Năng lượng nhiệt và nội năng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-26', {
  objectives: [
    'Nêu được các phân tử luôn chuyển động hỗn loạn không ngừng; nhiệt độ càng cao chúng chuyển động càng nhanh.',
    'Nêu được khái niệm nội năng và năng lượng nhiệt của một vật.',
    'Nêu được nội năng có thể thay đổi bằng cách thực hiện công hoặc truyền nhiệt.',
    'Lấy được ví dụ về sự thay đổi nội năng trong đời sống.'
  ],
  intro: 'Nhỏ một giọt mực vào cốc nước nóng và một giọt vào cốc nước lạnh: ở cốc nước nóng, mực lan ra nhanh hơn hẳn. Điều gì đang diễn ra bên trong nước mà mắt ta không nhìn thấy?',
  steps: [
    { title: 'Chuyển động của phân tử', html: `<p>Các chất được cấu tạo từ các hạt riêng biệt (nguyên tử, phân tử). Các phân tử <b>chuyển động hỗn loạn không ngừng</b> và giữa chúng có khoảng cách.</p>
      <p>Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động <b>càng nhanh</b>. Vì vậy mực, đường khuếch tán vào nước nóng nhanh hơn vào nước lạnh.</p>`,
      svg: S.heatParticles(), caption: 'Nước nóng: các phân tử chuyển động nhanh hơn nước lạnh.' },
    { title: 'Nội năng', html: `<p>Phân tử chuyển động nên có <b>động năng</b>; giữa các phân tử có lực liên kết nên chúng có <b>thế năng</b>.</p>
      <div class="box key">Nội năng của một vật là tổng động năng và thế năng của các phân tử cấu tạo nên vật.</div>
      <p>Nhiệt độ của vật càng cao thì động năng của các phân tử càng lớn, nội năng của vật càng lớn. Đơn vị nội năng là jun (J).</p>` },
    { title: 'Năng lượng nhiệt', html: `<p><b>Năng lượng nhiệt</b> (nhiệt năng) của vật là năng lượng có được do chuyển động nhiệt của các phân tử, liên quan đến động năng của các phân tử. Khi vật nóng lên, năng lượng nhiệt của vật tăng.</p>
      <p>Phần năng lượng nhiệt mà vật nhận thêm hay mất bớt trong quá trình truyền nhiệt được gọi là <b>nhiệt lượng</b>, đơn vị jun (J).</p>` },
    { title: 'Thay đổi nội năng', html: `<ul><li><b>Thực hiện công</b>: cọ xát miếng kim loại trên mặt bàn, miếng kim loại nóng lên; bơm xe đạp, thân bơm nóng lên.</li><li><b>Truyền nhiệt</b>: thả miếng kim loại vào cốc nước nóng; kim loại nóng lên, nước nguội đi. Vật nóng hơn truyền năng lượng nhiệt cho vật lạnh hơn.</li></ul>
      <p>Ví dụ (số liệu tham khảo): để 1 kg nước nóng thêm 1 °C cần cung cấp khoảng 4 200 J.</p>` }
  ],
  summary: 'Phân tử chuyển động hỗn loạn không ngừng; nhiệt độ càng cao chuyển động càng nhanh. Nội năng = tổng động năng và thế năng của các phân tử. Nội năng thay đổi bằng thực hiện công hoặc truyền nhiệt; nhiệt lượng đo bằng jun (J).',
  examples: [
    { title: 'Giải thích hiện tượng', problem: 'Vì sao pha trà bằng nước nóng thì nhanh ngấm hơn nước lạnh?', solution: 'Nước nóng có các phân tử chuyển động nhanh hơn nên các chất trong lá trà khuếch tán vào nước nhanh hơn.' },
    { title: 'Cách thay đổi nội năng', problem: 'Xoa hai bàn tay vào nhau thấy tay ấm lên. Nội năng của tay thay đổi bằng cách nào?', solution: 'Bằng cách thực hiện công (cọ xát).' },
    { title: 'Ước lượng nhiệt lượng', problem: 'Cần khoảng 4 200 J để 1 kg nước tăng 1 °C. Để 1 kg nước tăng 10 °C cần khoảng bao nhiêu? (số liệu tham khảo)', solution: '4 200 · 10 = 42 000 (J).' }
  ],
  exercises: [
    { question: 'Nêu hai ví dụ làm thay đổi nội năng bằng truyền nhiệt và hai ví dụ bằng thực hiện công.', hints: ['Truyền nhiệt: vật tiếp xúc với vật nóng hơn hoặc lạnh hơn.', 'Thực hiện công: cọ xát, nén khí.'], solution: 'Truyền nhiệt: đun nước trên bếp; chườm đá lạnh. Thực hiện công: cưa gỗ làm lưỡi cưa nóng lên; bơm xe làm thân bơm nóng.' },
    { question: 'Một hòn bi thép được nung nóng rồi thả vào cốc nước lạnh. Nội năng của bi và của nước thay đổi thế nào?', hints: ['Vật nào nóng hơn?', 'Năng lượng nhiệt truyền từ đâu sang đâu?'], solution: 'Nội năng của bi giảm, nội năng của nước tăng (năng lượng nhiệt truyền từ bi sang nước).' },
    { question: 'Cần khoảng 4 200 J để 1 kg nước tăng 1 °C. Ước tính năng lượng để 2 kg nước tăng 5 °C.', hints: ['Năng lượng tỉ lệ với khối lượng.', 'Năng lượng tỉ lệ với độ tăng nhiệt độ.'], solution: '4 200 · 2 · 5 = 42 000 J (ước tính, số liệu tham khảo).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động càng nhanh.', answer: true, explain: 'Động năng phân tử tăng theo nhiệt độ.' },
    { type: 'mcq', q: 'Nội năng của một vật là:', options: ['động năng của vật', 'tổng động năng và thế năng của các phân tử cấu tạo nên vật', 'thế năng hấp dẫn của vật', 'nhiệt độ của vật'], answer: 1, explain: 'Đó là định nghĩa nội năng.' },
    { type: 'mcq', q: 'Cọ xát đồng xu lên mặt bàn, đồng xu nóng lên. Nội năng của đồng xu thay đổi bằng cách:', options: ['truyền nhiệt', 'thực hiện công', 'bức xạ nhiệt', 'đối lưu'], answer: 1, explain: 'Cọ xát là thực hiện công.' },
    { type: 'short', q: 'Để 1 kg nước tăng 1 °C cần khoảng 4 200 J. Để 1 kg nước tăng 20 °C cần khoảng bao nhiêu J?', answer: '84000', answerText: '84 000', unit: 'J', calc: '4200*20', explain: '4 200 · 20 = 84 000 J.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nội năng của một vật chỉ có thể thay đổi bằng cách truyền nhiệt.', answer: false, explain: 'Có thể thay đổi bằng thực hiện công hoặc truyền nhiệt.' },
    { type: 'short', q: 'Để 1 kg nước tăng 1 °C cần khoảng 4 200 J. Để 3 kg nước tăng 1 °C cần khoảng bao nhiêu J?', answer: '12600', answerText: '12 600', unit: 'J', calc: '4200*3', explain: '4 200 · 3 = 12 600 J.' },
    { type: 'mcq', q: 'Đơn vị của nhiệt lượng là:', options: ['°C', 'J', 'N', 'W'], answer: 1, explain: 'Nhiệt lượng đo bằng jun (J).' },
    { type: 'short', q: 'Một vật có nội năng 500 J, nhận thêm nhiệt lượng 120 J (không thực hiện công). Nội năng của vật sau đó là bao nhiêu J?', answer: '620', unit: 'J', calc: '500+120', explain: '500 + 120 = 620 J.' }
  ]
});
})();
