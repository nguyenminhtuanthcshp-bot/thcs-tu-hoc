/* Toán 7 – Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
THCS.registerLesson('toan-7/bai-9', {
  objectives: [
    'Nhận biết các cặp góc so le trong, đồng vị, trong cùng phía tạo bởi một đường thẳng cắt hai đường thẳng.',
    'Phát biểu và vận dụng dấu hiệu nhận biết hai đường thẳng song song.',
    'Vẽ được đường thẳng đi qua một điểm và song song với một đường thẳng cho trước.'
  ],
  intro: 'Đường ray tàu hoả, các dòng kẻ trong vở là hình ảnh hai đường thẳng song song. Làm sao biết chắc hai đường thẳng song song khi không thể kéo dài chúng mãi? Ta nhờ đến các góc.',
  steps: [
    { title: 'Các góc tạo bởi một đường thẳng cắt hai đường thẳng', html: `<p>Đường thẳng c cắt hai đường thẳng a, b lần lượt tại A và B, tạo ra 8 góc (mỗi giao điểm 4 góc, đánh số 1–4 như hình).</p>
      <ul><li><b>So le trong</b>: ∠A<sub>3</sub> và ∠B<sub>1</sub>; ∠A<sub>4</sub> và ∠B<sub>2</sub>.</li><li><b>Đồng vị</b>: ∠A<sub>1</sub> và ∠B<sub>1</sub>; ∠A<sub>2</sub> và ∠B<sub>2</sub>; ∠A<sub>3</sub> và ∠B<sub>3</sub>; ∠A<sub>4</sub> và ∠B<sub>4</sub>.</li><li><b>Trong cùng phía</b>: ∠A<sub>3</sub> và ∠B<sub>2</sub>; ∠A<sub>4</sub> và ∠B<sub>1</sub>.</li></ul>`,
      svg: S.transversal({ parallel: false, tilt: 8, show: { A: [1, 2, 3, 4], B: [1, 2, 3, 4] }, mark: [['A', 3, C.orange], ['B', 1, C.orange]] }),
      caption: 'Cặp góc tô màu cam: ∠A₃ và ∠B₁ là hai góc so le trong (nằm giữa a, b và ở hai phía của c).' },
    { title: 'Tính chất', html: `<p>Nếu đường thẳng c cắt hai đường thẳng a, b và trong các góc tạo thành có <b>một cặp góc so le trong bằng nhau</b> thì:</p>
      <ul><li>hai góc so le trong còn lại bằng nhau;</li><li>các cặp góc đồng vị bằng nhau;</li><li>các cặp góc trong cùng phía bù nhau.</li></ul>` },
    { title: 'Dấu hiệu nhận biết hai đường thẳng song song', html: `<p>Hai đường thẳng song song là hai đường thẳng không có điểm chung. Kí hiệu a // b.</p>
      <div class="box note"><b>Dấu hiệu:</b> Nếu đường thẳng c cắt hai đường thẳng a, b và trong các góc tạo thành có một cặp góc <b>so le trong bằng nhau</b> (hoặc một cặp góc <b>đồng vị bằng nhau</b>) thì a // b.</div>
      <p>Hệ quả: hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song với nhau.</p>`,
      svg: S.transversal({ deg: 65, show: { A: [4], B: [2] }, mark: [['A', 4, C.green, '65°'], ['B', 2, C.green, '65°']] }),
      caption: '∠A₄ = ∠B₂ = 65° (so le trong) nên a // b.' },
    { title: 'Vẽ đường thẳng song song', html: `<p>Để vẽ đường thẳng b đi qua điểm M và song song với a:</p><ol><li>Vẽ đường thẳng c đi qua M, cắt a tại A.</li><li>Dùng thước đo góc vẽ tại M góc đồng vị (hoặc so le trong) bằng góc tạo bởi c và a tại A.</li><li>Cạnh mới của góc vừa vẽ chính là đường thẳng b.</li></ol><p>Cũng có thể trượt ê ke dọc theo thước thẳng để vẽ nhanh.</p>` }
  ],
  summary: 'Một đường thẳng cắt hai đường thẳng tạo các cặp góc so le trong, đồng vị, trong cùng phía. Có một cặp so le trong (hoặc đồng vị) bằng nhau ⇒ hai đường thẳng song song.',
  examples: [
    { title: 'Gọi tên cặp góc', problem: 'Ở hình bước 1, ∠A₂ và ∠B₂ là cặp góc gì? ∠A₄ và ∠B₁?', solution: '∠A₂ và ∠B₂ là cặp góc đồng vị (cùng vị trí “trên – trái”). ∠A₄ và ∠B₁ là cặp góc trong cùng phía.' },
    { title: 'Chứng tỏ song song', problem: 'Đường thẳng c cắt a, b tại A, B; ∠A₁ = 50°, ∠B₃ = 50°. Hỏi a có song song với b không?', solution: '∠A₃ đối đỉnh với ∠A₁ nên ∠A₃ = 50° = ∠B₃. Đây là cặp góc đồng vị bằng nhau nên a // b.' },
    { title: 'Tính góc', problem: 'Nếu ∠A₄ = ∠B₂ = 70° thì ∠A₃ + ∠B₂ bằng bao nhiêu?', solution: '∠A₃ = 180° − ∠A₄ = 110° (kề bù). ∠A₃ + ∠B₂ = 110° + 70° = 180° – đúng với tính chất trong cùng phía bù nhau.' }
  ],
  exercises: [
    { question: 'c cắt a, b tại A, B với ∠A₃ = 120°, ∠B₁ = 120°. Chứng tỏ a // b.', hints: ['∠A₃ và ∠B₁ là cặp góc gì?', 'Áp dụng dấu hiệu nhận biết.'], solution: '∠A₃ và ∠B₁ là hai góc so le trong bằng nhau nên a // b.' },
    { question: 'Hai đường thẳng a, b cùng vuông góc với đường thẳng c. Giải thích vì sao a // b.', hints: ['c cắt a, b tạo ra các góc 90°.', 'Hai góc đồng vị cùng bằng 90°.'], solution: 'Các góc đồng vị tại A và B đều bằng 90° nên bằng nhau ⇒ a // b.' },
    { question: 'Biết ∠A₁ = 75° và a // b (theo dấu hiệu đồng vị). Tính ∠B₁ và ∠B₂.', hints: ['∠B₁ đồng vị với ∠A₁.', '∠B₂ kề bù với ∠B₁.'], solution: '∠B₁ = 75°; ∠B₂ = 105°.' }
  ],
  quiz: [
    { type: 'mcq', q: '∠A₃ và ∠B₁ (theo cách đánh số trong bài) là cặp góc:', options: ['đồng vị', 'so le trong', 'trong cùng phía', 'đối đỉnh'], answer: 1, explain: 'Cả hai nằm giữa a và b, ở hai phía của c: so le trong.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu c cắt a, b và có một cặp góc đồng vị bằng nhau thì a // b.', answer: true, explain: 'Đây là dấu hiệu nhận biết hai đường thẳng song song.' },
    { type: 'short', calc: '180 - 70', q: 'Có một cặp góc so le trong bằng nhau và ∠A₄ = 70°. Góc ∠A₃ bằng bao nhiêu độ?', unit: 'độ', answer: '110', explain: '∠A₃ kề bù với ∠A₄.' },
    { type: 'mcq', q: 'Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì:', options: ['cắt nhau', 'trùng nhau', 'song song với nhau', 'vuông góc với nhau'], answer: 2, explain: 'Chúng tạo với đường thẳng thứ ba các góc đồng vị cùng bằng 90°.' },
    { type: 'short', calc: '180 - 75', q: '∠A₁ = ∠B₁ = 75°. Tính ∠B₂ (độ).', unit: 'độ', answer: '105', explain: '∠B₂ kề bù với ∠B₁: 180° − 75° = 105°.' },
    { type: 'mcq', q: 'Cặp góc nào là cặp góc trong cùng phía?', options: ['∠A₁ và ∠B₁', '∠A₃ và ∠B₂', '∠A₄ và ∠B₂', '∠A₂ và ∠B₄'], answer: 1, explain: '∠A₃ và ∠B₂ cùng nằm giữa a, b và cùng phía (trái) của c.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường thẳng không cắt nhau (trong mặt phẳng) thì song song.', answer: true, explain: 'Trong mặt phẳng, hai đường thẳng phân biệt không có điểm chung là hai đường thẳng song song.' },
    { type: 'short', calc: '50', q: 'c cắt a, b tại A, B. ∠A₁ = 50°. Để a // b theo dấu hiệu đồng vị thì ∠B₁ phải bằng bao nhiêu độ?', unit: 'độ', answer: '50', explain: '∠B₁ đồng vị với ∠A₁ nên phải bằng 50°.' }
  ]
});
})();
