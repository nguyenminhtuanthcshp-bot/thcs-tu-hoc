/* KHTN 8 – Bài 14. Thực hành xác định khối lượng riêng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-14', {
  objectives: [
    'Xác định được khối lượng riêng của vật rắn có hình dạng đều (hình hộp) bằng cân và thước.',
    'Xác định được khối lượng riêng của vật rắn có hình dạng bất kì bằng cân và ống đong (hoặc bình tràn).',
    'Xác định được khối lượng riêng của một lượng chất lỏng bằng cân và ống đong.',
    'Ghi kết quả, tính giá trị trung bình qua nhiều lần đo.'
  ],
  intro: 'Muốn biết một chiếc vòng có phải bằng bạc thật không, người ta có thể xác định khối lượng riêng của nó. Bài thực hành này giúp em tự tay đo khối lượng riêng của vật rắn và chất lỏng.',
  steps: [
    { title: 'Dụng cụ và nguyên tắc', html: `<p>Dụng cụ: cân điện tử, thước, ống đong có vạch chia, bình tràn, cốc, vật rắn (khối hộp, viên sỏi), nước, chất lỏng cần đo.</p>
      <div class="box key">Nguyên tắc: đo khối lượng m (bằng cân) và thể tích V (bằng thước hoặc ống đong), rồi tính D = m : V.</div>` },
    { title: 'Vật rắn hình hộp chữ nhật', html: `<ol><li>Đo chiều dài a, chiều rộng b, chiều cao c bằng thước ⇒ V = a · b · c.</li><li>Cân vật được khối lượng m.</li><li>Tính D = m : V. Lặp lại 3 lần, lấy giá trị trung bình.</li></ol>
      <p>Ví dụ (số liệu minh hoạ): a = 5 cm, b = 4 cm, c = 2 cm ⇒ V = 40 cm³; m = 108 g ⇒ D = 2,7 g/cm³.</p>` },
    { title: 'Vật rắn có hình dạng bất kì', html: `<ol><li>Cân vật được m.</li><li>Đổ nước vào ống đong, đọc V<sub>1</sub>; thả chìm vật vào, đọc V<sub>2</sub> ⇒ V = V<sub>2</sub> − V<sub>1</sub>.</li><li>Nếu vật to không bỏ lọt ống đong: dùng bình tràn, hứng nước tràn ra rồi đổ vào ống đong để đo.</li></ol>`,
      svg: [S.cylinderReading({ v1: 40, v2: 55, max: 100, step: 10, unit: 'mL' }), S.overflowCan()], caption: 'Đo thể tích vật rắn không thấm nước bằng ống đong hoặc bình tràn.' },
    { title: 'Chất lỏng', html: `<ol><li>Cân ống đong (hoặc cốc) rỗng: m<sub>1</sub>.</li><li>Đổ chất lỏng vào, đọc thể tích V; cân lại được m<sub>2</sub>.</li><li>Khối lượng chất lỏng m = m<sub>2</sub> − m<sub>1</sub>; D = m : V.</li></ol>
      <p>Ví dụ (số liệu minh hoạ): m<sub>1</sub> = 80 g; đổ 50 mL dầu ăn, m<sub>2</sub> = 120 g ⇒ m = 40 g; D = 40 : 50 = 0,8 g/mL.</p>` },
    { title: 'Ghi kết quả và tính trung bình', html: `<p>Bảng kết quả đo viên sỏi (số liệu minh hoạ):</p>
      <table class="tbl"><tr><th>Lần đo</th><th>m (g)</th><th>V (cm³)</th><th>D (g/cm³)</th></tr><tr><td>1</td><td>39,0</td><td>15</td><td>2,60</td></tr><tr><td>2</td><td>39,2</td><td>14</td><td>2,80</td></tr><tr><td>3</td><td>39,1</td><td>15</td><td>2,61</td></tr></table>
      <p>D trung bình ≈ (2,60 + 2,80 + 2,61) : 3 ≈ 2,67 g/cm³.</p>
      <div class="box tip">Nguyên nhân sai số: đọc vạch chia không đúng (mắt phải nhìn ngang mực nước), vật thấm nước, còn bọt khí bám vào vật, cân chưa chỉnh về 0.</div>` }
  ],
  summary: 'D = m : V. Vật hình hộp: V = a · b · c. Vật bất kì: V = V<sub>2</sub> − V<sub>1</sub> (ống đong) hoặc đo nước tràn (bình tràn). Chất lỏng: m = m<sub>2</sub> − m<sub>1</sub>, đọc V trên ống đong. Đo nhiều lần, lấy trung bình.',
  examples: [
    { title: 'Vật hình hộp', problem: 'Khối gỗ hình hộp 10 cm × 5 cm × 4 cm có khối lượng 120 g. Tính D.', solution: 'V = 200 cm³; D = 120 : 200 = 0,6 (g/cm³) = 600 kg/m³.' },
    { title: 'Chất lỏng', problem: 'Cốc rỗng nặng 50 g; đổ 100 mL nước muối vào, cân được 160 g. Tính D của nước muối.', solution: 'm = 160 − 50 = 110 g; D = 110 : 100 = 1,1 (g/mL).' },
    { title: 'Giá trị trung bình', problem: 'Ba lần đo D của một vật được 7,7; 7,9; 7,8 g/cm³. Tính giá trị trung bình.', solution: 'D<sub>tb</sub> = (7,7 + 7,9 + 7,8) : 3 = 7,8 (g/cm³).' }
  ],
  exercises: [
    { question: 'Một viên sỏi có m = 26 g. Thả vào ống đong chứa 50 mL nước, mực nước lên 60 mL. Tính D của sỏi.', hints: ['V = 60 − 50 = 10 cm³.', 'D = m : V.'], solution: 'D = 26 : 10 = 2,6 (g/cm³).' },
    { question: 'Vì sao khi đọc thể tích trên ống đong, mắt phải nhìn ngang với mực chất lỏng?', hints: ['Nhìn từ trên xuống hoặc dưới lên thì sao?', 'Nghĩ đến sai số đọc.'], solution: 'Nhìn chếch sẽ đọc sai giá trị (lớn hơn hoặc nhỏ hơn thực tế); nhìn ngang mới đọc đúng vạch.' },
    { question: 'Có thể dùng ống đong để đo thể tích của một cục đường không? Vì sao?', hints: ['Đường có tan trong nước không?', 'Phương pháp chỉ dùng cho vật không tan, không thấm nước.'], solution: 'Không thể dùng nước vì đường tan trong nước; phải dùng chất lỏng không hoà tan đường hoặc cách khác.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể đo thể tích vật rắn không thấm nước bằng ống đong có nước.', answer: true, explain: 'V = V<sub>2</sub> − V<sub>1</sub>.' },
    { type: 'short', q: 'Khối hộp kích thước 4 cm × 3 cm × 2 cm có khối lượng 64,8 g. Khối lượng riêng là bao nhiêu g/cm³?', answer: '2,7', unit: 'g/cm³', calc: '64.8/(4*3*2)', explain: 'V = 24 cm³; D = 64,8 : 24 = 2,7 g/cm³.' },
    { type: 'mcq', q: 'Dụng cụ dùng để đo thể tích vật rắn lớn không bỏ lọt ống đong là:', options: ['Thước dây', 'Bình tràn', 'Lực kế', 'Nhiệt kế'], answer: 1, explain: 'Thể tích nước tràn ra bằng thể tích vật.' },
    { type: 'short', q: 'Cốc rỗng nặng 60 g, chứa 50 mL chất lỏng thì nặng 100 g. Khối lượng riêng của chất lỏng là bao nhiêu g/mL?', answer: '0,8', unit: 'g/mL', calc: '(100-60)/50', explain: 'm = 40 g; D = 40 : 50 = 0,8 g/mL.' },
    { type: 'mcq', q: 'Khi đo khối lượng riêng, việc đo nhiều lần rồi lấy trung bình nhằm:', options: ['tăng khối lượng vật', 'giảm sai số', 'tăng thể tích', 'đổi đơn vị'], answer: 1, explain: 'Giá trị trung bình giúp giảm sai số ngẫu nhiên.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu còn bọt khí bám vào vật khi thả trong ống đong thì thể tích đo được lớn hơn thực tế.', answer: true, explain: 'Bọt khí cũng làm nước dâng lên.' },
    { type: 'short', q: 'Ba lần đo được D = 2,6; 2,7; 2,8 g/cm³. Giá trị trung bình là bao nhiêu g/cm³?', answer: '2,7', unit: 'g/cm³', calc: '(2.6+2.7+2.8)/3', explain: '(2,6 + 2,7 + 2,8) : 3 = 2,7 g/cm³.' },
    { type: 'short', q: 'Mực nước trong ống đong từ 40 mL dâng lên 55 mL khi thả chìm vật. Thể tích vật là bao nhiêu cm³?', answer: '15', unit: 'cm³', calc: '55-40', explain: '55 − 40 = 15 mL = 15 cm³.' }
  ]
});
})();
