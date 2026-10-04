/* KHTN 8 – Bài 18. Tác dụng làm quay của lực. Moment lực. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-18', {
  objectives: [
    'Nêu được lực có thể làm vật quay quanh một trục khi giá của lực không song song và không đi qua trục quay.',
    'Nêu được khái niệm moment lực, công thức M = F · d và đơn vị N·m.',
    'Tính được moment lực và so sánh tác dụng làm quay của các lực.',
    'Giải thích được một số ứng dụng: cánh cửa, cờ lê, bập bênh.'
  ],
  intro: 'Muốn mở cửa dễ dàng, em đẩy ở mép cửa xa bản lề chứ không đẩy sát bản lề. Muốn vặn ốc chặt, thợ sửa xe dùng cờ lê cán dài. Vì sao vậy? Đó là do <b>tác dụng làm quay</b> của lực.',
  steps: [
    { title: 'Tác dụng làm quay của lực', html: `<p>Khi lực tác dụng vào một vật có trục quay cố định, lực có thể làm vật <b>quay quanh trục</b> nếu giá của lực <b>không song song</b> và <b>không đi qua</b> trục quay.</p>
      <p>Ví dụ: đẩy cánh cửa quay quanh bản lề; vặn vòi nước; đạp bàn đạp xe đạp làm đĩa quay.</p>
      <p>Nếu đẩy theo phương đi qua bản lề thì cửa không quay dù lực lớn.</p>` },
    { title: 'Moment lực', html: `<p>Tác dụng làm quay của lực được đặc trưng bằng <b>moment lực</b>:</p>
      <div class="box key">M = F · d</div>
      <ul><li>F: độ lớn của lực (N).</li><li>d: <b>cánh tay đòn</b> – khoảng cách từ trục quay đến giá của lực (m).</li><li>M: moment lực, đơn vị <b>N·m</b>.</li></ul>
      <p>Moment lực càng lớn thì tác dụng làm quay càng mạnh.</p>`,
      svg: S.momentForce(), caption: 'Cờ lê: lực F đặt càng xa trục quay (d lớn) thì tác dụng làm quay càng lớn.' },
    { title: 'Tính moment lực', html: `<p>Ví dụ: tác dụng lực 20 N vuông góc với cán cờ lê, cách trục ốc 0,25 m: M = 20 · 0,25 = 5 N·m.</p>
      <p>Muốn có cùng moment 5 N·m với cán dài 0,5 m chỉ cần lực F = 5 : 0,5 = 10 N ⇒ <b>cán càng dài, lực cần càng nhỏ</b>.</p>` },
    { title: 'Cân bằng của vật có trục quay', html: `<p>Hai lực làm vật quay theo hai chiều ngược nhau. Vật có trục quay cố định <b>cân bằng</b> khi moment lực làm vật quay theo chiều này bằng moment lực làm vật quay theo chiều ngược lại.</p>
      <p>Ví dụ: bập bênh cân bằng khi F<sub>1</sub> · d<sub>1</sub> = F<sub>2</sub> · d<sub>2</sub>. Bạn nặng hơn phải ngồi gần trục quay hơn.</p>`,
      svg: S.lever({ type: 1, ratio: 1.5, d1: '1,5 m', d2: '1 m', f1: 'F₁ = 200 N', f2: 'F₂ = 300 N', title: 'Bập bênh cân bằng: 200 · 1,5 = 300 · 1 (số liệu minh hoạ)' }) },
    { title: 'Ứng dụng', html: `<ul><li>Tay nắm cửa đặt xa bản lề.</li><li>Cờ lê, tua vít cán to, vô lăng lớn giúp tăng cánh tay đòn hoặc tăng lực.</li><li>Bập bênh, cân đòn, cần cẩu dùng đối trọng để cân bằng moment.</li></ul>` }
  ],
  summary: 'Lực làm vật quay khi giá của lực không song song và không đi qua trục quay. Moment lực M = F · d (N·m), d là cánh tay đòn. Vật có trục quay cân bằng khi moment theo hai chiều bằng nhau.',
  examples: [
    { title: 'Tính moment', problem: 'Lực 50 N tác dụng lên tay nắm cửa cách bản lề 0,8 m (lực vuông góc với cánh cửa). Tính moment lực.', solution: 'M = 50 · 0,8 = 40 (N·m).' },
    { title: 'Tìm lực', problem: 'Cần moment 12 N·m để vặn một con ốc. Dùng cờ lê có cánh tay đòn 0,3 m thì cần lực bao nhiêu?', solution: 'F = M : d = 12 : 0,3 = 40 (N).' },
    { title: 'Bập bênh', problem: 'Bạn A nặng 300 N ngồi cách trục bập bênh 1,2 m. Bạn B nặng 400 N phải ngồi cách trục bao xa để bập bênh cân bằng?', solution: '300 · 1,2 = 400 · d ⇒ d = 0,9 (m), ở phía bên kia trục.' }
  ],
  exercises: [
    { question: 'Vì sao đẩy cửa ở gần bản lề thì khó mở hơn đẩy ở mép xa bản lề?', hints: ['So sánh cánh tay đòn trong hai trường hợp.', 'M = F · d.'], solution: 'Gần bản lề thì cánh tay đòn d nhỏ, muốn có cùng moment phải dùng lực lớn hơn.' },
    { question: 'Tác dụng lực 30 N lên cán cờ lê dài 0,2 m. Tính moment lực. Nếu dùng cờ lê dài 0,3 m thì lực cần để tạo cùng moment là bao nhiêu?', hints: ['M = 30 · 0,2.', 'F = M : 0,3.'], solution: 'M = 6 N·m; F = 6 : 0,3 = 20 N.' },
    { question: 'Trường hợp nào lực không làm cánh cửa quay: đẩy vuông góc với mặt cửa ở mép cửa, hay đẩy dọc theo mặt cửa hướng vào bản lề? Giải thích.', hints: ['Giá của lực có đi qua trục quay không?', 'Khi giá lực đi qua trục thì d bằng bao nhiêu?'], solution: 'Đẩy dọc mặt cửa hướng vào bản lề: giá lực đi qua trục quay nên d = 0, M = 0, cửa không quay.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lực có giá đi qua trục quay thì không làm vật quay.', answer: true, explain: 'Khi đó d = 0 nên M = 0.' },
    { type: 'short', q: 'Lực 40 N có cánh tay đòn 0,5 m. Moment lực là bao nhiêu N·m?', answer: '20', unit: 'N·m', calc: '40*0.5', explain: 'M = 40 · 0,5 = 20 N·m.' },
    { type: 'mcq', q: 'Đơn vị của moment lực là:', options: ['N', 'N/m', 'N·m', 'N/m²'], answer: 2, explain: 'M = F · d có đơn vị N·m.' },
    { type: 'short', q: 'Để tạo moment 15 N·m bằng cờ lê có cánh tay đòn 0,25 m, cần lực bao nhiêu N?', answer: '60', unit: 'N', calc: '15/0.25', explain: 'F = 15 : 0,25 = 60 N.' },
    { type: 'mcq', q: 'Muốn vặn ốc dễ hơn (cần lực nhỏ hơn), nên:', options: ['dùng cờ lê cán ngắn', 'dùng cờ lê cán dài', 'cầm cờ lê sát đầu ốc', 'đẩy theo phương đi qua trục ốc'], answer: 1, explain: 'Cánh tay đòn dài hơn thì cần lực nhỏ hơn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cánh tay đòn là khoảng cách từ trục quay đến điểm đặt của lực trong mọi trường hợp.', answer: false, explain: 'Cánh tay đòn là khoảng cách từ trục quay đến giá của lực.' },
    { type: 'short', q: 'Bạn nặng 250 N ngồi cách trục bập bênh 1,6 m. Bạn nặng 400 N phải ngồi cách trục bao nhiêu mét để cân bằng?', answer: '1', unit: 'm', calc: '250*1.6/400', explain: 'd = 250 · 1,6 : 400 = 1 m.' },
    { type: 'mcq', q: 'Ví dụ nào KHÔNG thể hiện tác dụng làm quay của lực?', options: ['Mở vòi nước', 'Vặn ốc bằng cờ lê', 'Đẩy thùng hàng trượt trên sàn', 'Mở cánh cửa'], answer: 2, explain: 'Thùng hàng trượt tịnh tiến, không quay quanh trục.' }
  ]
});
})();
