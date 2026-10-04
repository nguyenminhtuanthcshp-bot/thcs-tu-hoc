/* KHTN 8 – Bài 13. Khối lượng riêng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-13', {
  objectives: [
    'Nêu được định nghĩa khối lượng riêng và công thức D = m : V.',
    'Nêu được đơn vị của khối lượng riêng (kg/m³, g/cm³) và đổi được giữa các đơn vị.',
    'Tính được khối lượng riêng, khối lượng hoặc thể tích của vật khi biết hai đại lượng còn lại.',
    'Dựa vào khối lượng riêng để nhận biết chất làm nên vật.'
  ],
  intro: '1 kg sắt và 1 kg bông, cái nào nặng hơn? Chúng nặng bằng nhau! Nhưng 1 kg bông chiếm thể tích lớn hơn rất nhiều. Đại lượng cho biết một chất “đặc” hay “nhẹ” như thế nào là <b>khối lượng riêng</b>.',
  steps: [
    { title: 'Khối lượng riêng', html: `<p><b>Khối lượng riêng</b> của một chất cho biết khối lượng của một đơn vị thể tích chất đó.</p>
      <div class="box key">D = {{m|V}} &nbsp;(D: khối lượng riêng; m: khối lượng; V: thể tích)</div>
      <p>Suy ra: m = D · V; &nbsp; V = m : D.</p>` },
    { title: 'Đơn vị khối lượng riêng', html: `<ul><li>Đơn vị trong hệ SI: <b>kilôgam trên mét khối (kg/m³)</b>.</li><li>Đơn vị thường dùng khác: g/cm³, g/mL, kg/L.</li></ul>
      <div class="box tip">1 g/cm³ = 1 000 kg/m³; &nbsp;1 cm³ = 1 mL; &nbsp;1 m³ = 1 000 000 cm³ = 1 000 L.</div>
      <p>Ví dụ: nước có D = 1 g/cm³ = 1 000 kg/m³.</p>` },
    { title: 'Khối lượng riêng của một số chất', html: `<table class="tbl"><tr><th>Chất</th><th>D (kg/m³)</th></tr><tr><td>Nước</td><td>1 000</td></tr><tr><td>Dầu ăn</td><td>khoảng 800</td></tr><tr><td>Nhôm</td><td>2 700</td></tr><tr><td>Sắt</td><td>7 800</td></tr><tr><td>Đồng</td><td>khoảng 8 900</td></tr><tr><td>Chì</td><td>11 300</td></tr><tr><td>Vàng</td><td>19 300</td></tr></table>`,
      svg: S.bar({ title: 'Khối lượng riêng của một số chất (kg/m³, giá trị gần đúng)', cats: ['Dầu ăn', 'Nước', 'Nhôm', 'Sắt', 'Chì', 'Vàng'], series: [{ name: 'D', values: [800, 1000, 2700, 7800, 11300, 19300], color: '#0891b2' }], yMax: 20000, yStep: 4000, width: 540, height: 290 }) },
    { title: 'Tính khối lượng riêng', html: `<p>Ví dụ: một khối nhôm có khối lượng 540 g, thể tích 200 cm³.</p><p class="math">D = {{540|200}} = 2,7 (g/cm³) = 2 700 kg/m³</p>
      <p>Đo thể tích vật rắn không thấm nước bằng ống đong: V = V<sub>2</sub> − V<sub>1</sub>.</p>`,
      svg: S.cylinderReading({ v1: 50, v2: 70, max: 100, step: 10, unit: 'cm³' }), caption: 'Mực nước dâng từ 50 cm³ lên 70 cm³: thể tích vật là 20 cm³.' },
    { title: 'Ứng dụng', html: `<ul><li>Nhận biết chất: tính D rồi so với bảng khối lượng riêng.</li><li>Tính khối lượng vật lớn mà không cần cân: m = D · V (ví dụ khối lượng một cột bê tông, một bể nước).</li><li>Vật có D nhỏ hơn D của nước (gỗ khô, dầu) thì nổi trên mặt nước.</li></ul>` }
  ],
  summary: 'D = m : V; đơn vị kg/m³ (1 g/cm³ = 1 000 kg/m³). Nước: 1 000 kg/m³; nhôm: 2 700 kg/m³; sắt: 7 800 kg/m³. Dùng D để nhận biết chất và tính m = D · V.',
  examples: [
    { title: 'Tính khối lượng', problem: 'Tính khối lượng của 2 m³ nước (D = 1 000 kg/m³).', solution: 'm = D · V = 1 000 · 2 = 2 000 (kg) = 2 tấn.' },
    { title: 'Nhận biết chất', problem: 'Một vật có khối lượng 390 g, thể tích 50 cm³. Vật làm bằng chất gì?', solution: 'D = 390 : 50 = 7,8 g/cm³ = 7 800 kg/m³ ⇒ vật làm bằng sắt.' },
    { title: 'Tính thể tích', problem: 'Tính thể tích của 1,6 kg dầu ăn (D = 800 kg/m³).', solution: 'V = m : D = 1,6 : 800 = 0,002 (m³) = 2 L.' }
  ],
  exercises: [
    { question: 'Đổi: 2,7 g/cm³ = ? kg/m³; 800 kg/m³ = ? g/cm³.', hints: ['1 g/cm³ = 1 000 kg/m³.', 'Chia cho 1 000 khi đổi từ kg/m³ sang g/cm³.'], solution: '2,7 g/cm³ = 2 700 kg/m³; 800 kg/m³ = 0,8 g/cm³.' },
    { question: 'Một thỏi kim loại hình hộp chữ nhật kích thước 2 cm × 3 cm × 5 cm, khối lượng 339 g. Tính khối lượng riêng và dự đoán kim loại.', hints: ['V = 2 · 3 · 5 = 30 cm³.', 'So sánh với bảng khối lượng riêng.'], solution: 'D = 339 : 30 = 11,3 g/cm³ = 11 300 kg/m³ ⇒ chì.' },
    { question: 'Vì sao nói “sắt nặng hơn bông” là chưa chính xác? Nên nói thế nào?', hints: ['1 kg sắt và 1 kg bông có khối lượng như nhau.', 'Điều khác nhau là khối lượng của cùng một thể tích.'], solution: 'Phải nói: khối lượng riêng của sắt lớn hơn của bông (cùng thể tích thì sắt có khối lượng lớn hơn).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đơn vị khối lượng riêng trong hệ SI là kg/m³.', answer: true, explain: 'D = m : V với m (kg), V (m³).' },
    { type: 'short', q: 'Một vật có khối lượng 810 g và thể tích 300 cm³. Khối lượng riêng của vật là bao nhiêu g/cm³?', answer: '2,7', unit: 'g/cm³', calc: '810/300', explain: 'D = 810 : 300 = 2,7 g/cm³ (nhôm).' },
    { type: 'mcq', q: '1 g/cm³ bằng:', options: ['10 kg/m³', '100 kg/m³', '1 000 kg/m³', '1 000 000 kg/m³'], answer: 2, explain: '1 g/cm³ = 1 000 kg/m³.' },
    { type: 'short', q: 'Khối lượng của 0,5 m³ sắt (D = 7 800 kg/m³) là bao nhiêu kg?', answer: '3900', answerText: '3 900', unit: 'kg', calc: '7800*0.5', explain: 'm = 7 800 · 0,5 = 3 900 kg.' },
    { type: 'mcq', q: 'Công thức tính khối lượng riêng là:', options: ['D = m · V', 'D = m : V', 'D = V : m', 'D = 10m'], answer: 1, explain: 'D = m : V.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai vật có cùng khối lượng thì luôn có cùng khối lượng riêng.', answer: false, explain: 'Còn phụ thuộc thể tích; ví dụ 1 kg sắt và 1 kg bông.' },
    { type: 'short', q: 'Thả một viên đá vào ống đong đang chứa 60 cm³ nước, mực nước dâng lên 85 cm³. Thể tích viên đá là bao nhiêu cm³?', answer: '25', unit: 'cm³', calc: '85-60', explain: 'V = 85 − 60 = 25 cm³.' },
    { type: 'short', q: 'Thể tích của 4 kg dầu ăn (D = 800 kg/m³) là bao nhiêu lít?', answer: '5', unit: 'L', calc: '4/800*1000', explain: 'V = 4 : 800 = 0,005 m³ = 5 L.' }
  ]
});
})();
