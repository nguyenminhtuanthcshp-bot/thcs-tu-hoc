/* Toán 8 – Luyện tập chung (sau Bài 14). Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  THCS.registerLesson('toan-8/c3-ltc-3', {
    objectives: [
      'Phân biệt được các tứ giác đặc biệt và mối quan hệ giữa chúng.',
      'Vận dụng dấu hiệu nhận biết hình chữ nhật, hình thoi, hình vuông để chứng minh.',
      'Tính độ dài, góc, diện tích trong các tứ giác đặc biệt.'
    ],
    intro: 'Hình thang, hình bình hành, hình chữ nhật, hình thoi, hình vuông có quan hệ “cha – con” với nhau. Nắm được sơ đồ quan hệ giúp em nhận biết hình nhanh hơn.',
    steps: [
      { title: 'Sơ đồ quan hệ', html: `<p>Mũi tên đọc là “có thêm điều kiện … thì trở thành”:</p>`,
        svg: S.flow({ items: [{ title: 'Tứ giác', text: '4 cạnh' }, { title: 'Hình thang', text: '1 cặp cạnh đối //' }, { title: 'Hình bình hành', text: '2 cặp cạnh đối //' }, { title: 'HCN / Hình thoi', text: '+ góc vuông / + 2 cạnh kề bằng nhau' }, { title: 'Hình vuông', text: 'vừa HCN vừa thoi' }], w: 680, size: 14 }), caption: 'Mỗi hình sau là trường hợp đặc biệt của hình trước.' },
      { title: 'Từ hình bình hành', html: `<ul><li>+ một góc vuông, hoặc hai đường chéo bằng nhau → <b>hình chữ nhật</b>.</li><li>+ hai cạnh kề bằng nhau, hoặc hai đường chéo vuông góc, hoặc một đường chéo là phân giác → <b>hình thoi</b>.</li><li>Vừa là hình chữ nhật vừa là hình thoi → <b>hình vuông</b>.</li></ul>` },
      { title: 'Tứ giác tạo bởi trung điểm', html: `<p>Nối trung điểm bốn cạnh của một tứ giác bất kì luôn được một hình bình hành (sẽ chứng minh ở Bài 16). Nếu hai đường chéo của tứ giác ban đầu vuông góc thì được hình chữ nhật; bằng nhau thì được hình thoi.</p>` },
      { title: 'Mẹo trình bày', html: `<p>Chứng minh theo “bậc thang”: chứng minh là hình bình hành trước, sau đó thêm một điều kiện để thành hình chữ nhật hoặc hình thoi, cuối cùng thành hình vuông.</p>` }
    ],
    summary: 'Hình bình hành + góc vuông = hình chữ nhật; + hai cạnh kề bằng nhau = hình thoi; hình chữ nhật + hình thoi = hình vuông.',
    examples: [
      { title: 'Nhận biết hình thoi', problem: 'Hình chữ nhật ABCD; M, N, P, Q là trung điểm AB, BC, CD, DA. Chứng minh MNPQ là hình thoi.', solution: 'Bốn tam giác vuông AMQ, BMN, CPN, DPQ bằng nhau (c.g.c) nên MQ = MN = PN = PQ. Tứ giác có bốn cạnh bằng nhau là hình thoi.' },
      { title: 'Tính góc', problem: 'Hình thoi ABCD có ∠ABD = 30°. Tính các góc của hình thoi.', solution: 'BD là phân giác ∠B nên ∠B = 60° = ∠D. ∠A = ∠C = 180° − 60° = 120°.' },
      { title: 'Tính diện tích', problem: 'Một viên gạch hình vuông cạnh 40 cm. Một mảnh sân hình chữ nhật 4 m × 6 m cần bao nhiêu viên gạch để lát kín?', solution: 'Diện tích sân: 24 m<sup>2</sup> = 240 000 cm<sup>2</sup>; một viên: 1600 cm<sup>2</sup>. Số viên: 240 000 : 1600 = 150 viên.' }
    ],
    exercises: [
      { question: 'Hình thoi ABCD có ∠A = 60°, cạnh 6 cm. Tính đường chéo BD.', hints: ['ΔABD cân tại A có góc A bằng 60°.', 'Tam giác cân có một góc 60° là tam giác đều.'], solution: 'BD = 6 cm.' },
      { question: 'Hình vuông có chu vi 36 cm. Tính diện tích.', hints: ['Cạnh = 36 : 4.', 'S = cạnh · cạnh.'], solution: '81 cm<sup>2</sup>.' },
      { question: 'Cho tam giác ABC vuông tại A, phân giác AD (D ∈ BC). Kẻ DE ⊥ AB, DF ⊥ AC. Tứ giác AEDF là hình gì?', hints: ['AEDF có ba góc vuông nên là hình chữ nhật.', 'Đường chéo AD là phân giác góc A.'], solution: 'Hình vuông.' }
    ],
    quiz: [
      { type: 'mcq', q: 'Hình bình hành có hai đường chéo vuông góc là:', options: ['Hình chữ nhật', 'Hình thoi', 'Hình thang cân', 'Hình thang vuông'], answer: 1, explain: 'Dấu hiệu nhận biết hình thoi.' },
      { type: 'short', calc: '2 * 30', q: 'Hình thoi ABCD có ∠ABD = 30°. Tính ∠ABC (độ).', unit: 'độ', answer: '60', explain: 'BD là phân giác ∠B.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi hình vuông đều là hình thoi.', answer: true, explain: 'Hình vuông có bốn cạnh bằng nhau.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mọi hình thoi đều là hình chữ nhật.', answer: false, explain: 'Hình thoi nói chung không có góc vuông.' },
      { type: 'short', calc: '(36 / 4) ** 2', q: 'Hình vuông có chu vi 36 cm. Diện tích bằng bao nhiêu cm²?', unit: 'cm²', answer: '81', explain: 'Cạnh 9 cm.' },
      { type: 'short', calc: '(400 * 600) / (40 * 40)', q: 'Cần bao nhiêu viên gạch vuông cạnh 40 cm để lát kín sân 4 m × 6 m?', unit: 'viên', answer: '150', explain: '240 000 : 1600.' },
      { type: 'mcq', q: 'Nối trung điểm bốn cạnh của hình chữ nhật ta được:', options: ['Hình chữ nhật', 'Hình thoi', 'Hình thang cân', 'Tam giác'], answer: 1, explain: 'Hai đường chéo của hình chữ nhật bằng nhau nên được hình thoi.' },
      { type: 'mcq', q: 'Hình thoi có một góc vuông là:', options: ['Hình vuông', 'Hình chữ nhật không vuông', 'Hình thang cân không đặc biệt', 'Hình bình hành không đặc biệt'], answer: 0, explain: 'Dấu hiệu nhận biết hình vuông.' }
    ]
  });
})();
