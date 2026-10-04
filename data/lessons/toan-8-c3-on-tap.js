/* Toán 8 – Bài tập cuối chương III. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [70, 60], B = [300, 40], Cc = [330, 200], D = [40, 180];
  var M = G.mid(A, B), N = G.mid(B, Cc), P = G.mid(Cc, D), Q = G.mid(D, A);
  THCS.registerLesson('toan-8/c3-on-tap', {
    objectives: [
      'Hệ thống hoá định nghĩa, tính chất, dấu hiệu nhận biết của các tứ giác đặc biệt.',
      'Vận dụng tổng hợp các kiến thức về tứ giác để chứng minh và tính toán.',
      'Giải quyết một số bài toán thực tế liên quan đến tứ giác.'
    ],
    intro: 'Chương III có 5 loại tứ giác đặc biệt. Bảng tổng kết dưới đây giúp em so sánh chúng “trong một cái nhìn”.',
    steps: [
      { title: 'Bảng tổng kết tính chất đường chéo', html: `<table class="tbl"><tr><th>Hình</th><th>Cắt nhau tại trung điểm</th><th>Bằng nhau</th><th>Vuông góc</th></tr>
        <tr><td>Hình thang cân</td><td>–</td><td>✓</td><td>–</td></tr>
        <tr><td>Hình bình hành</td><td>✓</td><td>–</td><td>–</td></tr>
        <tr><td>Hình chữ nhật</td><td>✓</td><td>✓</td><td>–</td></tr>
        <tr><td>Hình thoi</td><td>✓</td><td>–</td><td>✓</td></tr>
        <tr><td>Hình vuông</td><td>✓</td><td>✓</td><td>✓</td></tr></table>` },
      { title: 'Tứ giác trung điểm', html: `<p>Với tứ giác ABCD bất kì, trung điểm M, N, P, Q của các cạnh tạo thành hình bình hành MNPQ (Varignon).</p>`,
        svg: S.geo({ w: 380, h: 240, P: { A: A, B: B, C: Cc, D: D, M: M, N: N, P: P, Q: Q }, seg: ['AB', 'BC', 'CD', 'DA', { s: 'MN', color: C.blue }, { s: 'NP', color: C.blue }, { s: 'PQ', color: C.blue }, { s: 'QM', color: C.blue }], dash: ['AC', 'BD'], fill: [['MNPQ', C.blueL]], ticks: [['AM', 1], ['MB', 1], ['BN', 2], ['NC', 2]] }), caption: 'MNPQ là hình bình hành.' },
      { title: 'Các bước chứng minh thường gặp', html: `<ol><li>Chứng minh tứ giác là hình bình hành.</li><li>Thêm điều kiện góc vuông / đường chéo bằng nhau → hình chữ nhật.</li><li>Thêm điều kiện cạnh kề bằng nhau / đường chéo vuông góc → hình thoi.</li><li>Kết hợp cả hai → hình vuông.</li></ol>` },
      { title: 'Công thức diện tích', html: `<ul><li>Hình chữ nhật: a · b. Hình vuông: a<sup>2</sup>.</li><li>Hình bình hành: cạnh đáy × chiều cao tương ứng.</li><li>Hình thang: (a + b) · h : 2.</li><li>Hình thoi: d<sub>1</sub> · d<sub>2</sub> : 2.</li></ul>` }
    ],
    summary: 'Nắm vững bảng tính chất đường chéo và “bậc thang” dấu hiệu: tứ giác → hình thang → hình bình hành → hình chữ nhật/hình thoi → hình vuông.',
    examples: [
      { title: 'Tổng hợp', problem: 'Tam giác ABC vuông tại A, M là trung điểm BC. D đối xứng với M qua AB (E là giao điểm của MD với AB). Chứng minh AMBD là hình thoi.', solution: 'MA = MB = BC : 2 (trung tuyến ứng với cạnh huyền) nên ΔMAB cân tại M; ME ⊥ AB nên ME cũng là trung tuyến, E là trung điểm AB. E là trung điểm của MD (đối xứng) và của AB ⇒ AMBD là hình bình hành; hai đường chéo AB ⊥ MD ⇒ AMBD là hình thoi.' },
      { title: 'Tính góc', problem: 'Hình thang cân ABCD (AB // CD) có ∠D = 50° và AD = AB. Tính ∠ACD.', solution: '∠DAB = 130°. ΔABD cân tại A nên ∠ABD = ∠ADB = 25°. Do AB // CD nên ∠BDC = ∠ABD = 25°. Hai đường chéo bằng nhau, ΔADC = ΔBCD nên ∠ACD = ∠BDC = 25°.' },
      { title: 'Thực tế', problem: 'Khung cửa sổ hình chữ nhật 1,2 m × 0,9 m. Người thợ kiểm tra khung có “vuông” không bằng cách đo hai đường chéo. Cần hai đường chéo thế nào?', solution: 'Khung là hình bình hành (cạnh đối bằng nhau); nếu hai đường chéo bằng nhau thì là hình chữ nhật. Mỗi đường chéo phải bằng √(1,44 + 0,81) = 1,5 m.' }
    ],
    exercises: [
      { question: 'Tứ giác ABCD có hai đường chéo vuông góc. M, N, P, Q là trung điểm các cạnh. MNPQ là hình gì?', hints: ['MNPQ luôn là hình bình hành.', 'Cạnh MN // AC, MQ // BD mà AC ⊥ BD.'], solution: 'MNPQ là hình chữ nhật.' },
      { question: 'Hình thoi có cạnh 10 cm và một đường chéo 12 cm. Tính đường chéo còn lại và diện tích.', hints: ['Nửa đường chéo đã biết: 6 cm; nửa đường chéo kia x thoả x<sup>2</sup> + 36 = 100.', 'x = 8 nên đường chéo kia 16 cm.'], solution: 'Đường chéo 16 cm; S = 12 · 16 : 2 = 96 cm<sup>2</sup>.' },
      { question: 'Hình bình hành ABCD có AB = 2AD, M là trung điểm AB. Chứng minh DM là phân giác của ∠ADC.', hints: ['AM = AD nên ΔADM cân tại A: ∠ADM = ∠AMD.', '∠AMD = ∠MDC (so le trong, AB // CD).'], solution: '∠ADM = ∠AMD = ∠MDC ⇒ DM là phân giác ∠ADC.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Tứ giác nào có hai đường chéo bằng nhau nhưng không nhất thiết cắt nhau tại trung điểm mỗi đường?', options: ['Hình chữ nhật', 'Hình thang cân', 'Hình vuông', 'Hình bình hành'], answer: 1, explain: 'Hình thang cân.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nối trung điểm bốn cạnh của một tứ giác bất kì luôn được một hình bình hành.', answer: true, explain: 'Định lí Varignon (chứng minh ở Bài 16).' },
      { type: 'short', calc: '12 * 16 / 2', q: 'Hình thoi có hai đường chéo 12 cm và 16 cm. Diện tích bằng bao nhiêu cm²?', unit: 'cm²', answer: '96', explain: '12 · 16 : 2.' },
      { type: 'short', calc: 'sqrt(1.2 * 1.2 + 0.9 * 0.9)', q: 'Khung chữ nhật 1,2 m × 0,9 m. Đường chéo dài bao nhiêu mét?', unit: 'm', answer: '1.5', answerText: '1,5', explain: '√(1,44 + 0,81) = √2,25 = 1,5.' },
      { type: 'mcq', q: 'Hình bình hành có một đường chéo là phân giác của một góc là:', options: ['Hình chữ nhật', 'Hình thoi', 'Hình thang cân', 'Hình thang vuông'], answer: 1, explain: 'Dấu hiệu nhận biết hình thoi.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hình chữ nhật có hai đường chéo vuông góc là hình vuông.', answer: true, explain: 'Dấu hiệu nhận biết hình vuông.' },
      { type: 'short', calc: '180 - 50', q: 'Hình thang cân ABCD (AB // CD) có ∠D = 50°. Tính ∠B (độ).', unit: 'độ', answer: '130', explain: '∠B = ∠A = 180° − 50°.' },
      { type: 'mcq', q: 'Tứ giác ABCD có hai đường chéo vuông góc. Tứ giác trung điểm MNPQ là:', options: ['Hình thoi', 'Hình chữ nhật', 'Hình vuông', 'Hình thang cân'], answer: 1, explain: 'Hình bình hành có các cạnh song song với hai đường chéo vuông góc nên có góc vuông.' }
    ]
  });
})();
