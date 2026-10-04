/* KHTN 6 – Bài 43. Trọng lượng, lực hấp dẫn. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-43', {
  objectives: [
    'Phân biệt được khối lượng và trọng lượng; nêu được đơn vị của mỗi đại lượng.',
    'Nêu được khái niệm lực hấp dẫn; trọng lượng là độ lớn lực hút của Trái Đất tác dụng lên vật.',
    'Vận dụng được hệ thức gần đúng P = 10 × m (P tính bằng N, m tính bằng kg).'
  ],
  intro: 'Vì sao quả táo rời cành lại rơi xuống đất chứ không bay lên trời? Vì sao nhà du hành trên Mặt Trăng nhảy được rất cao? Câu trả lời nằm ở <b>lực hấp dẫn</b>.',
  steps: [
    { title: 'Khối lượng', html: `<p><b>Khối lượng</b> là số đo <b>lượng chất</b> của một vật. Đơn vị: <b>kilôgam (kg)</b>; ngoài ra có gam (g), tấn (t)… Đo bằng <b>cân</b>.</p>
      <p>Trên vỏ gói mì ghi "Khối lượng tịnh 75 g" nghĩa là lượng mì trong gói (không kể bao bì) là 75 g.</p>` },
    { title: 'Lực hấp dẫn', html: `<p><b>Lực hấp dẫn</b> là lực <b>hút</b> giữa các vật có khối lượng. Mọi vật đều hút nhau; vật có khối lượng càng lớn thì lực hút càng mạnh.</p>
      <ul><li>Trái Đất hút mọi vật về phía nó → vật rơi xuống đất.</li><li>Trái Đất hút Mặt Trăng, giữ Mặt Trăng quay quanh Trái Đất; Mặt Trời hút các hành tinh.</li></ul>
      <p>Lực hấp dẫn là <b>lực không tiếp xúc</b>.</p>` },
    { title: 'Trọng lượng', html: `<p><b>Trọng lượng</b> của một vật là <b>độ lớn lực hút của Trái Đất</b> tác dụng lên vật đó. Kí hiệu <b>P</b>, đơn vị <b>niutơn (N)</b>; đo bằng lực kế.</p>
      <p>Lực hút của Trái Đất có phương <b>thẳng đứng</b>, chiều <b>hướng về phía Trái Đất</b> (từ trên xuống).</p>
      <div class="box key">Trên Trái Đất, gần đúng: <b>P = 10 × m</b> &nbsp;(m tính bằng kg, P tính bằng N). Vật 1 kg có trọng lượng khoảng 10 N.</div>`,
      svg: S.forces({ w: 420, h: 250, ground: 220, box: { x: 160, y: 60, w: 100, h: 60, label: 'm = 2 kg' }, arrows: [{ x: 210, y: 120, deg: -90, len: 80, label: 'P = 20 N' }], scale: { len: 40, text: '10 N', y: 240 } }),
      caption: 'Trọng lực tác dụng lên vật 2 kg: phương thẳng đứng, chiều từ trên xuống, độ lớn 20 N.' },
    { title: 'Khối lượng không đổi, trọng lượng thay đổi', html: `<p>Khối lượng của vật <b>không đổi</b> dù ở đâu. Nhưng trọng lượng phụ thuộc vào lực hút của thiên thể: trên Mặt Trăng, lực hút chỉ bằng khoảng <b>1/6</b> trên Trái Đất.</p>
      <p>Ví dụ: nhà du hành 60 kg: trên Trái Đất P ≈ 600 N; trên Mặt Trăng khối lượng vẫn 60 kg nhưng trọng lượng chỉ khoảng 100 N – vì vậy nhảy được cao hơn.</p>
      <table class="tbl"><tr><th></th><th>Khối lượng</th><th>Trọng lượng</th></tr><tr><td>Là gì</td><td>Lượng chất của vật</td><td>Độ lớn lực hút của Trái Đất lên vật</td></tr>
      <tr><td>Đơn vị</td><td>kg</td><td>N</td></tr><tr><td>Dụng cụ đo</td><td>Cân</td><td>Lực kế</td></tr><tr><td>Thay đổi theo nơi?</td><td>Không</td><td>Có</td></tr></table>` }
  ],
  summary: 'Khối lượng là lượng chất của vật (kg, đo bằng cân). Lực hấp dẫn là lực hút giữa các vật có khối lượng. Trọng lượng là độ lớn lực hút của Trái Đất lên vật (N, đo bằng lực kế), phương thẳng đứng, chiều từ trên xuống. Trên Trái Đất P ≈ 10 × m. Trên Mặt Trăng, trọng lượng chỉ bằng khoảng 1/6.',
  examples: [
    { title: 'Tính trọng lượng', problem: 'Tính trọng lượng của bao gạo 25 kg.', solution: 'P = 10 × 25 = <b>250 N</b>.' },
    { title: 'Đổi đơn vị trước', problem: 'Tính trọng lượng của quả táo 200 g.', solution: '200 g = 0,2 kg. P = 10 × 0,2 = <b>2 N</b>.' },
    { title: 'Tìm khối lượng', problem: 'Một vật có trọng lượng 45 N. Khối lượng của vật là bao nhiêu?', solution: 'm = P : 10 = 45 : 10 = <b>4,5 kg</b>.' }
  ],
  exercises: [
    { question: 'Một học sinh có khối lượng 42 kg. Tính trọng lượng của bạn đó trên Trái Đất và ước tính trên Mặt Trăng.', hints: ['P = 10 × m.', 'Trên Mặt Trăng lấy 1/6 trọng lượng trên Trái Đất.'], solution: 'Trên Trái Đất: P = 10 × 42 = <b>420 N</b>. Trên Mặt Trăng: 420 : 6 = <b>70 N</b> (khối lượng vẫn 42 kg).' },
    { question: 'Hộp sữa ghi "Khối lượng tịnh 180 g" nghĩa là gì? Trọng lượng của lượng sữa đó là bao nhiêu?', hints: ['Khối lượng tịnh là khối lượng của gì?', 'Đổi 180 g sang kg.'], solution: 'Lượng sữa trong hộp (không tính vỏ hộp) là 180 g. 180 g = 0,18 kg → P = 10 × 0,18 = <b>1,8 N</b>.' },
    { question: 'Vì sao khi buông tay, quả bóng rơi thẳng xuống chứ không bay ngang?', hints: ['Lực nào tác dụng lên quả bóng?', 'Lực đó có phương, chiều thế nào?'], solution: 'Quả bóng chịu lực hút của Trái Đất có phương <b>thẳng đứng</b>, chiều <b>hướng về Trái Đất</b>, nên bóng rơi thẳng xuống.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đơn vị của trọng lượng là:', options: ['Niutơn (N)', 'Kilôgam (kg)', 'Gam (g)', 'Lít (l)'], answer: 0, explain: 'Trọng lượng là độ lớn của lực nên đo bằng N.' },
    { type: 'short', q: 'Tính trọng lượng của vật có khối lượng 3 kg.', answer: '30', unit: 'N', calc: '10*3', explain: 'P = 10 × 3 = 30 N.' },
    { type: 'short', q: 'Tính trọng lượng của vật có khối lượng 500 g.', answer: '5', unit: 'N', calc: '10*0.5', explain: '500 g = 0,5 kg; P = 5 N.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi lên Mặt Trăng, khối lượng của nhà du hành giảm còn 1/6.', answer: false, explain: 'Khối lượng không đổi; chỉ trọng lượng giảm còn khoảng 1/6.' },
    { type: 'mcq', q: 'Lực hút của Trái Đất có phương và chiều:', options: ['Thẳng đứng, từ trên xuống', 'Nằm ngang, từ trái sang phải', 'Thẳng đứng, từ dưới lên', 'Xiên'], answer: 0, explain: 'Hướng về phía Trái Đất.' },
    { type: 'mcq', q: 'Dụng cụ dùng để đo trọng lượng là:', options: ['Lực kế', 'Cân', 'Thước', 'Nhiệt kế'], answer: 0, explain: 'Trọng lượng là lực, đo bằng lực kế.' },
    { type: 'short', q: 'Một vật có trọng lượng 80 N. Khối lượng của vật là bao nhiêu kg?', answer: '8', unit: 'kg', calc: '80/10', explain: 'm = 80 : 10 = 8 kg.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lực hấp dẫn là lực không tiếp xúc.', answer: true, explain: 'Các vật hút nhau dù không chạm vào nhau.' }
  ]
});
})();
