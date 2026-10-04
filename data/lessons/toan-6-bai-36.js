/* Toán 6 – Bài 36. Góc. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('toan-6/bai-36', {
  objectives: [
    'Nhận biết góc, đỉnh và cạnh của góc; đọc và viết đúng tên góc, kí hiệu góc.',
    'Nhận biết góc bẹt.',
    'Nhận biết điểm nằm trong góc; nhận ra góc trong các hình ảnh thực tế.'
  ],
  intro: 'Hai kim đồng hồ, chiếc compa đang mở, hai cạnh của cây kéo… đều tạo nên hình ảnh “góc”.',
  steps: [
    { title: 'Góc là gì?', html: `<p><b>Góc</b> là hình gồm hai tia chung gốc. Gốc chung là <b>đỉnh</b> của góc, hai tia là hai <b>cạnh</b> của góc.</p>
      <p>Góc tạo bởi hai tia Ox, Oy gọi là góc xOy (hoặc yOx, hoặc góc O), kí hiệu <span class="math">∠xOy</span>. Khi đọc tên góc, <b>tên đỉnh viết ở giữa</b>.</p>`,
      svg: S.angle({ deg: 40, label: '' }), caption: 'Góc xOy: đỉnh O, cạnh Ox và Oy.' },
    { title: 'Góc bẹt', html: `<p>Góc có hai cạnh là hai <b>tia đối nhau</b> gọi là <b>góc bẹt</b>.</p>`,
      svg: S.angle({ deg: 180, label: '' }), caption: 'Góc bẹt xOy: Ox và Oy là hai tia đối nhau.' },
    { title: 'Điểm nằm trong góc', html: `<p>Với góc xOy khác góc bẹt, điểm M nằm trong góc nếu M nằm “bên trong” phần mặt phẳng giới hạn bởi hai cạnh; khi đó tia OM nằm giữa hai tia Ox và Oy.</p><p>Cách nhận biết: lấy A trên Ox, B trên Oy; nếu M nằm trên đoạn AB (không trùng A, B) thì M nằm trong góc xOy.</p>`,
      svg: S.angle({ deg: 70, label: '', point: { deg: 35, dist: 95, name: 'M' } }), caption: 'Điểm M nằm trong góc xOy.' },
    { title: 'Góc trong thực tế', html: `<p>Kim giờ và kim phút tạo thành góc có đỉnh là tâm đồng hồ. Mỗi đỉnh của tam giác, hình vuông là đỉnh của một góc. Đếm góc: với n tia chung gốc (không có hai tia nào trùng nhau), số góc tạo thành là {{n · (n − 1)|2}}.</p>` }
  ],
  summary: 'Góc là hình gồm hai tia chung gốc; gốc là đỉnh, hai tia là cạnh. Kí hiệu ∠xOy, đỉnh viết giữa. Góc bẹt có hai cạnh là hai tia đối nhau. Điểm nằm trong góc xOy khi tia OM nằm giữa Ox và Oy.',
  examples: [
    { title: 'Gọi tên góc', problem: 'Tam giác ABC có bao nhiêu góc? Viết tên các góc.', solution: 'Có <b>3 góc</b>: ∠BAC (đỉnh A), ∠ABC (đỉnh B), ∠ACB (đỉnh C).' },
    { title: 'Đếm góc', problem: 'Vẽ 4 tia chung gốc O: Oa, Ob, Oc, Od (không có hai tia nào trùng nhau). Có bao nhiêu góc đỉnh O?', solution: 'Mỗi cặp tia tạo một góc: 4 · 3 : 2 = <b>6 góc</b>.' },
    { title: 'Nhận biết góc bẹt', problem: 'Trên đường thẳng xy lấy điểm O. Góc xOy là góc gì?', solution: 'Ox, Oy là hai tia đối nhau nên ∠xOy là <b>góc bẹt</b>.' }
  ],
  exercises: [
    { question: 'Hình vuông ABCD có bao nhiêu góc có đỉnh là một đỉnh của hình vuông và hai cạnh chứa hai cạnh của hình vuông? Kể tên.', hints: ['Mỗi đỉnh có một góc như vậy.', 'Đỉnh viết giữa.'], solution: '4 góc: <b>∠DAB, ∠ABC, ∠BCD, ∠CDA</b>.' },
    { question: 'Vẽ 3 tia chung gốc Ox, Oy, Oz (không có hai tia nào trùng nhau). Kể tên các góc đỉnh O.', hints: ['Chọn từng cặp tia.', 'Có 3 cặp.'], solution: '<b>∠xOy, ∠yOz, ∠xOz</b>.' },
    { question: 'Lúc 6 giờ đúng, hai kim đồng hồ tạo thành góc gì?', hints: ['Kim phút chỉ số 12, kim giờ chỉ số 6.', 'Hai kim nằm trên một đường thẳng, về hai phía tâm.'], solution: '<b>Góc bẹt</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Góc là hình gồm:', options: ['Hai đoạn thẳng', 'Hai tia chung gốc', 'Hai đường thẳng cắt nhau', 'Ba điểm'], answer: 1, explain: 'Định nghĩa góc.' },
    { type: 'mcq', q: 'Trong ∠MNP, đỉnh của góc là:', options: ['M', 'N', 'P', 'MP'], answer: 1, explain: 'Đỉnh viết ở giữa.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc bẹt có hai cạnh là hai tia đối nhau.', answer: true, explain: 'Định nghĩa góc bẹt.' },
    { type: 'short', q: 'Có 5 tia chung gốc (không có hai tia nào trùng nhau). Có bao nhiêu góc tạo thành?', answer: '10', calc: '5*4/2', explain: '5 · 4 : 2 = 10.' },
    { type: 'short', q: 'Một tam giác có bao nhiêu góc?', answer: '3', explain: 'Mỗi đỉnh một góc.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: ∠xOy và ∠yOx là hai góc khác nhau.', answer: false, explain: 'Đó là cùng một góc.' },
    { type: 'mcq', q: 'Lúc 3 giờ, hai kim đồng hồ tạo thành:', options: ['Góc bẹt', 'Góc vuông', 'Không tạo góc', 'Hai tia đối nhau'], answer: 1, explain: 'Kim phút chỉ 12, kim giờ chỉ 3: góc vuông.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu M nằm trên đoạn AB, A ∈ Ox, B ∈ Oy (M khác A, B) thì M nằm trong góc xOy (xOy không bẹt).', answer: true, explain: 'Đây là cách nhận biết điểm nằm trong góc.' }
  ]
});
})();
