/* KHTN 6 – Bài 41. Biểu diễn lực. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-41', {
  objectives: [
    'Nêu được lực có điểm đặt, phương, chiều và độ lớn.',
    'Biểu diễn được một lực bằng mũi tên theo tỉ xích cho trước.',
    'Đọc được thông tin (điểm đặt, phương, chiều, độ lớn) của lực từ hình biểu diễn.'
  ],
  intro: 'Đẩy chiếc hộp sang phải khác với kéo nó sang trái; đẩy nhẹ khác với đẩy mạnh. Để mô tả đầy đủ một lực, người ta vẽ nó bằng một <b>mũi tên</b>.',
  steps: [
    { title: 'Các yếu tố của lực', html: `<p>Mỗi lực có bốn yếu tố:</p><ul><li><b>Điểm đặt</b>: vị trí mà lực tác dụng lên vật.</li><li><b>Phương</b>: nằm ngang, thẳng đứng, xiên…</li>
      <li><b>Chiều</b>: từ trái sang phải, từ dưới lên, từ trên xuống…</li><li><b>Độ lớn</b> (cường độ): đo bằng niutơn (N).</li></ul>` },
    { title: 'Biểu diễn lực bằng mũi tên', html: `<ul><li><b>Gốc</b> mũi tên đặt tại <b>điểm đặt</b> của lực.</li><li><b>Phương và chiều</b> mũi tên trùng với phương và chiều của lực.</li>
      <li><b>Độ dài</b> mũi tên biểu diễn <b>độ lớn</b> của lực theo <b>tỉ xích</b> chọn trước.</li></ul>
      <p>Ví dụ: lực kéo 30 N, phương nằm ngang, chiều từ trái sang phải, tỉ xích 1 cm ứng với 10 N → vẽ mũi tên dài 3 cm hướng sang phải.</p>`,
      svg: S.forces({ w: 460, h: 200, ground: 150, box: { x: 70, y: 90, w: 110, h: 60, label: 'Hộp' }, arrows: [{ x: 180, y: 120, deg: 0, len: 150, label: 'F = 30 N' }], scale: { len: 50, text: '10 N', y: 184 } }),
      caption: 'Lực kéo 30 N nằm ngang, hướng sang phải; tỉ xích một đoạn ứng với 10 N (mũi tên dài gấp 3 lần).' },
    { title: 'Đọc hình biểu diễn lực', html: `<p>Nhìn mũi tên, ta đọc được: điểm đặt ở đâu, phương gì, chiều nào; đo độ dài mũi tên rồi nhân với tỉ xích để biết độ lớn.</p>`,
      svg: S.forces({ w: 460, h: 230, ground: 200, ball: { cx: 230, cy: 170, r: 30, label: 'Quả bóng' }, arrows: [{ x: 230, y: 140, deg: 90, len: 100, label: 'F = 20 N', color: '#2563eb' }], scale: { len: 50, text: '10 N', y: 220 } }),
      caption: 'Lực 20 N: điểm đặt trên quả bóng, phương thẳng đứng, chiều từ dưới lên.' },
    { title: 'Hai lực tác dụng lên một vật', html: `<p>Nếu hai lực có cùng phương, ngược chiều, cùng độ lớn tác dụng lên một vật đang đứng yên (như hai đội kéo co ngang sức) thì vật vẫn đứng yên – ta nói hai lực <b>cân bằng</b>.</p>`,
      svg: S.forces({ w: 480, h: 190, ground: 140, box: { x: 190, y: 90, w: 100, h: 50, label: 'Vật' }, arrows: [{ x: 290, y: 115, deg: 0, len: 120, label: 'F₁ = 40 N' }, { x: 190, y: 115, deg: 180, len: 120, label: 'F₂ = 40 N', color: '#2563eb' }], scale: { len: 30, text: '10 N', y: 175 } }),
      caption: 'Hai lực cân bằng: cùng phương, ngược chiều, cùng độ lớn.' }
  ],
  summary: 'Lực có điểm đặt, phương, chiều và độ lớn. Biểu diễn lực bằng mũi tên: gốc ở điểm đặt, phương chiều trùng với lực, độ dài tỉ lệ với độ lớn theo tỉ xích. Hai lực cùng phương, ngược chiều, cùng độ lớn tác dụng vào một vật là hai lực cân bằng.',
  examples: [
    { title: 'Tính độ dài mũi tên', problem: 'Biểu diễn lực 50 N với tỉ xích 1 cm ứng với 10 N. Mũi tên dài bao nhiêu?', solution: '50 : 10 = <b>5 cm</b>.' },
    { title: 'Đọc độ lớn', problem: 'Mũi tên dài 4 cm, tỉ xích 1 cm ứng với 5 N. Độ lớn lực là bao nhiêu?', solution: '4 × 5 = <b>20 N</b>.' },
    { title: 'Mô tả lực', problem: 'Mô tả lực trong hình ở bước 3.', solution: 'Điểm đặt trên quả bóng; phương <b>thẳng đứng</b>; chiều <b>từ dưới lên</b>; độ lớn <b>20 N</b> (mũi tên dài gấp 2 lần đoạn tỉ xích 10 N).' }
  ],
  exercises: [
    { question: 'Biểu diễn lực đẩy 60 N, phương nằm ngang, chiều từ phải sang trái, tỉ xích 1 cm ứng với 20 N. Mũi tên dài bao nhiêu và hướng thế nào?', hints: ['Độ dài = 60 : 20.', 'Chiều từ phải sang trái nghĩa là mũi tên chỉ sang trái.'], solution: 'Dài 60 : 20 = <b>3 cm</b>, nằm ngang, đầu mũi tên hướng <b>sang trái</b>, gốc đặt tại điểm đặt lực trên vật.' },
    { question: 'Một mũi tên thẳng đứng hướng xuống dài 2,5 cm, tỉ xích 1 cm ứng với 10 N. Lực đó có độ lớn bao nhiêu?', hints: ['Độ lớn = độ dài × giá trị mỗi cm.', '2,5 × 10.'], solution: '2,5 × 10 = <b>25 N</b>, phương thẳng đứng, chiều từ trên xuống.' },
    { question: 'Hai bạn kéo một chiếc hộp theo hai chiều ngược nhau, mỗi bạn kéo 15 N theo phương nằm ngang. Hộp có chuyển động không? Vì sao?', hints: ['So sánh độ lớn, phương, chiều của hai lực.', 'Hai lực như vậy gọi là gì?'], solution: 'Hộp <b>đứng yên</b> (nếu ban đầu đứng yên) vì hai lực cùng phương, ngược chiều, cùng độ lớn – hai lực cân bằng.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Bốn yếu tố của lực là:', options: ['Điểm đặt, phương, chiều, độ lớn', 'Khối lượng, thể tích, màu sắc, hình dạng', 'Tốc độ, thời gian, quãng đường, hướng', 'Nhiệt độ, áp suất, độ ẩm, gió'], answer: 0, explain: 'Một lực được xác định bởi 4 yếu tố này.' },
    { type: 'short', q: 'Tỉ xích 1 cm ứng với 10 N. Lực 40 N được biểu diễn bằng mũi tên dài bao nhiêu cm?', answer: '4', unit: 'cm', calc: '40/10', explain: '40 : 10 = 4 cm.' },
    { type: 'short', q: 'Mũi tên dài 3 cm, tỉ xích 1 cm ứng với 5 N. Độ lớn lực là bao nhiêu N?', answer: '15', unit: 'N', calc: '3*5', explain: '3 × 5 = 15 N.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Gốc mũi tên biểu diễn lực đặt tại điểm đặt của lực.', answer: true, explain: 'Gốc mũi tên là điểm đặt.' },
    { type: 'mcq', q: 'Lực trong hình có phương và chiều:', svg: S.forces({ w: 420, h: 180, ground: 140, box: { x: 220, y: 90, w: 90, h: 50, label: 'Vật' }, arrows: [{ x: 220, y: 115, deg: 180, len: 150, label: 'F' }], scale: { len: 50, text: '10 N', y: 168 } }), options: ['Nằm ngang, từ phải sang trái', 'Nằm ngang, từ trái sang phải', 'Thẳng đứng, từ dưới lên', 'Thẳng đứng, từ trên xuống'], answer: 0, explain: 'Mũi tên nằm ngang, đầu mũi tên chỉ sang trái.' },
    { type: 'short', q: 'Trong hình ở câu trên, mũi tên dài gấp 3 lần đoạn tỉ xích 10 N. Độ lớn lực F là bao nhiêu N?', answer: '30', unit: 'N', calc: '3*10', explain: '3 × 10 = 30 N.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai lực cân bằng có cùng phương, cùng chiều, cùng độ lớn.', answer: false, explain: 'Hai lực cân bằng cùng phương, ngược chiều, cùng độ lớn.' },
    { type: 'mcq', q: 'Độ dài mũi tên biểu diễn lực cho biết:', options: ['Độ lớn của lực', 'Điểm đặt của lực', 'Màu của vật', 'Khối lượng của vật'], answer: 0, explain: 'Độ dài tỉ lệ với độ lớn theo tỉ xích.' }
  ]
});
})();
