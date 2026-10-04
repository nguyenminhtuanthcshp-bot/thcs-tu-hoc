/* Toán 6 – Bài 32. Điểm và đường thẳng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
var fig1 = S.draw({ w: 380, h: 170, items: [{ line: [60, 120, 300, 60], ext: 30 }, { pt: [100, 110, 'A', -4, -12] }, { pt: [240, 75, 'B', 0, -12] }, { pt: [180, 145, 'C', 12, 4], color: C.orange }, { text: [345, 45, 'd'], bold: true, color: C.blue }] , aria: 'Đường thẳng d đi qua A và B, điểm C nằm ngoài d' });
var fig2 = S.draw({ w: 380, h: 150, items: [{ line: [50, 100, 330, 100], ext: 20 }, { pt: [90, 100, 'A', 0, 22] }, { pt: [190, 100, 'B', 0, 22] }, { pt: [290, 100, 'C', 0, 22] }, { pt: [210, 40, 'D', 12, 0], color: C.orange }], aria: 'Ba điểm A, B, C thẳng hàng; D không thẳng hàng với A, B' });
var cut = S.draw({ w: 200, h: 160, items: [{ line: [30, 40, 170, 120], ext: 10 }, { line: [30, 120, 170, 40], ext: 10 }, { pt: [100, 80, 'O', 0, -12], color: C.red }, { text: [184, 132, 'a'], bold: true, color: C.blue }, { text: [184, 36, 'b'], bold: true, color: C.blue }] });
var par = S.draw({ w: 200, h: 160, items: [{ line: [30, 55, 170, 35], ext: 10 }, { line: [30, 125, 170, 105], ext: 10 }, { text: [190, 36, 'a'], bold: true, color: C.blue }, { text: [190, 106, 'b'], bold: true, color: C.blue }] });
THCS.registerLesson('toan-6/bai-32', {
  objectives: [
    'Nhận biết điểm, đường thẳng; dùng đúng kí hiệu ∈, ∉ cho quan hệ điểm thuộc đường thẳng.',
    'Nhận biết ba điểm thẳng hàng, không thẳng hàng.',
    'Nhận biết hai đường thẳng cắt nhau, song song; biết qua hai điểm phân biệt có đúng một đường thẳng.'
  ],
  intro: 'Một chấm mực nhỏ trên giấy gợi cho ta hình ảnh của điểm; sợi chỉ căng thẳng gợi hình ảnh của đường thẳng. Đây là những “viên gạch” đầu tiên của hình học.',
  steps: [
    { title: 'Điểm và đường thẳng', html: `<p>Người ta dùng chữ cái in hoa để đặt tên điểm (A, B, C, …) và chữ cái thường để đặt tên đường thẳng (a, b, d, …). Đường thẳng không bị giới hạn về hai phía.</p>
      <p>Điểm A <b>thuộc</b> đường thẳng d: <span class="math">A ∈ d</span> (d đi qua A). Điểm C <b>không thuộc</b> d: <span class="math">C ∉ d</span>.</p>`,
      svg: fig1, caption: 'A ∈ d, B ∈ d, C ∉ d.' },
    { title: 'Qua hai điểm vẽ được mấy đường thẳng?', html: `<p>Có một và chỉ một đường thẳng đi qua hai điểm phân biệt A và B. Đường thẳng đó có thể gọi là đường thẳng AB (hoặc BA).</p>` },
    { title: 'Ba điểm thẳng hàng', html: `<p>Ba điểm cùng thuộc một đường thẳng gọi là ba điểm <b>thẳng hàng</b>. Nếu không có đường thẳng nào đi qua cả ba điểm thì chúng <b>không thẳng hàng</b>.</p>`,
      svg: fig2, caption: 'A, B, C thẳng hàng; A, B, D không thẳng hàng.' },
    { title: 'Vị trí của hai đường thẳng', html: `<ul><li>Hai đường thẳng <b>cắt nhau</b> nếu có đúng một điểm chung (giao điểm).</li><li>Hai đường thẳng <b>song song</b> nếu không có điểm chung nào, kí hiệu a ∥ b.</li><li>Hai đường thẳng <b>trùng nhau</b> nếu có hai điểm chung phân biệt (khi đó có vô số điểm chung).</li></ul>`,
      svg: S.row([{ svg: cut, caption: 'a cắt b tại O' }, { svg: par, caption: 'a ∥ b' }]) }
  ],
  summary: 'Điểm đặt tên bằng chữ in hoa, đường thẳng bằng chữ thường. A ∈ d hoặc A ∉ d. Qua hai điểm phân biệt có đúng một đường thẳng. Ba điểm cùng nằm trên một đường thẳng là thẳng hàng. Hai đường thẳng phân biệt hoặc cắt nhau, hoặc song song.',
  examples: [
    { title: 'Kí hiệu', problem: 'Quan sát hình ở bước 1, điền kí hiệu ∈ hoặc ∉: A … d; C … d; B … d.', solution: 'A <b>∈</b> d; C <b>∉</b> d; B <b>∈</b> d.' },
    { title: 'Đếm đường thẳng', problem: 'Cho 3 điểm A, B, C không thẳng hàng. Vẽ được bao nhiêu đường thẳng đi qua ít nhất hai trong ba điểm đó?', solution: 'Các đường thẳng AB, BC, CA: <b>3 đường thẳng</b>.' },
    { title: 'Thực tế', problem: 'Khi trồng cây thẳng hàng, người ta thường cắm hai cọc mốc rồi ngắm để cắm các cọc tiếp theo. Giải thích vì sao.', solution: 'Qua hai cọc mốc có đúng một đường thẳng; ngắm để các cọc sau nằm trên đường thẳng đó thì mọi cây đều <b>thẳng hàng</b>.' }
  ],
  exercises: [
    { question: 'Cho 4 điểm, trong đó không có ba điểm nào thẳng hàng. Vẽ được bao nhiêu đường thẳng đi qua hai trong bốn điểm đó?', hints: ['Mỗi điểm nối với 3 điểm còn lại.', 'Mỗi đường thẳng được đếm hai lần.'], solution: '4 · 3 : 2 = <b>6 đường thẳng</b>.' },
    { question: 'Hai đường thẳng a và b có hai điểm chung phân biệt. Em có nhận xét gì?', hints: ['Qua hai điểm phân biệt có mấy đường thẳng?', 'a và b cùng đi qua hai điểm đó.'], solution: 'a và b <b>trùng nhau</b>.' },
    { question: 'Điểm M thuộc cả đường thẳng a và đường thẳng b (a, b phân biệt). M gọi là gì?', hints: ['a, b có đúng một điểm chung.', 'Hai đường thẳng cắt nhau.'], solution: 'M là <b>giao điểm</b> của a và b.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Kí hiệu “A ∈ d” đọc là:', options: ['A không thuộc d', 'A thuộc d', 'd thuộc A', 'A song song d'], answer: 1, explain: '∈ đọc là “thuộc”.' },
    { type: 'short', q: 'Qua hai điểm phân biệt có bao nhiêu đường thẳng?', answer: '1', explain: 'Có một và chỉ một đường thẳng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường thẳng song song thì không có điểm chung.', answer: true, explain: 'Định nghĩa hai đường thẳng song song.' },
    { type: 'mcq', q: 'Hai đường thẳng phân biệt cắt nhau có bao nhiêu điểm chung?', options: ['0', '1', '2', 'Vô số'], answer: 1, calc: '1', explain: 'Đúng một giao điểm.' },
    { type: 'short', q: 'Cho 5 điểm, không có ba điểm nào thẳng hàng. Vẽ được bao nhiêu đường thẳng qua hai trong năm điểm?', answer: '10', calc: '5*4/2', explain: '5 · 4 : 2 = 10.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ba điểm bất kì luôn thẳng hàng.', answer: false, explain: 'Có những bộ ba điểm không thẳng hàng (ba đỉnh tam giác).' },
    { type: 'mcq', q: 'Chữ cái thường như a, b, d thường dùng để đặt tên:', options: ['Điểm', 'Đường thẳng', 'Góc', 'Đoạn thẳng'], answer: 1, explain: 'Điểm dùng chữ in hoa, đường thẳng dùng chữ thường.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai đường thẳng có hai điểm chung phân biệt thì trùng nhau.', answer: true, explain: 'Qua hai điểm chỉ có một đường thẳng.' }
  ]
});
})();
