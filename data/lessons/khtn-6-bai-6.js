/* KHTN 6 – Bài 6. Đo khối lượng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-6', {
  objectives: [
    'Nêu được khái niệm khối lượng và đơn vị đo khối lượng; đổi được các đơn vị tấn, tạ, yến, kg, g, mg.',
    'Kể tên được một số loại cân và xác định được GHĐ, ĐCNN của cân.',
    'Đo được khối lượng của vật bằng cân đúng cách.',
    'Hiểu ý nghĩa của “khối lượng tịnh” ghi trên bao bì.'
  ],
  intro: 'Đi chợ mua 2 kg gạo, nửa ki-lô-gam thịt; bác sĩ ghi cân nặng của em khi khám sức khoẻ… Tất cả đều là <b>đo khối lượng</b>.',
  steps: [
    { title: 'Khối lượng là gì?', html: `<p><b>Khối lượng</b> là số đo lượng chất tạo nên vật. Mọi vật đều có khối lượng.</p>
      <p>Đơn vị đo khối lượng trong hệ đo lường hợp pháp của Việt Nam là <b>ki-lô-gam (kg)</b>.</p>
      <table class="tbl"><tr><th>Đơn vị</th><th>Đổi</th></tr><tr><td>tấn</td><td>1 tấn = 1 000 kg</td></tr><tr><td>tạ</td><td>1 tạ = 100 kg</td></tr><tr><td>yến</td><td>1 yến = 10 kg</td></tr>
      <tr><td>gam (g)</td><td>1 kg = 1 000 g</td></tr><tr><td>mi-li-gam (mg)</td><td>1 g = 1 000 mg</td></tr></table>` },
    { title: 'Một số loại cân', html: `<p>Dụng cụ đo khối lượng là <b>cân</b>: cân đồng hồ, cân điện tử, cân đòn (cân Roberval), cân y tế, cân tiểu li (cân các vật rất nhẹ như vàng, thuốc)…</p>
      <p>Cân cũng có <b>GHĐ</b> (khối lượng lớn nhất cân được) và <b>ĐCNN</b> (khối lượng ứng với một vạch chia).</p>
      <p>Cân đồng hồ ở hình có GHĐ 5 kg; giữa hai số liên tiếp có 5 khoảng chia nên ĐCNN = 1 kg : 5 = <b>0,2 kg</b>. Kim đang chỉ <b>2,4 kg</b>.</p>`,
      svg: S.dial({ max: 5, step: 1, minor: 5, value: 2.4, unit: 'kg', title: 'Cân đồng hồ' }), caption: 'Kim chỉ 2,4 kg (2 kg và 2 vạch chia, mỗi vạch 0,2 kg).' },
    { title: 'Các bước đo khối lượng', html: `<ol><li><b>Ước lượng</b> khối lượng vật để chọn cân có GHĐ và ĐCNN phù hợp.</li>
      <li><b>Hiệu chỉnh cân</b> về số 0 trước khi cân (kim chỉ đúng vạch 0, hoặc màn hình cân điện tử hiện 0).</li>
      <li><b>Đặt vật</b> lên đĩa cân (đặt ở giữa đĩa).</li>
      <li><b>Mắt nhìn vuông góc</b> với mặt số (cân đồng hồ).</li>
      <li><b>Đọc và ghi kết quả</b> theo vạch chia gần nhất với đầu kim (hoặc số hiện trên màn hình), kèm đơn vị.</li></ol>` },
    { title: 'Khối lượng tịnh', html: `<p>Trên bao bì hàng hoá thường ghi <b>“Khối lượng tịnh”</b>, ví dụ: gói mì “Khối lượng tịnh: 75 g”. Đó là khối lượng của phần hàng bên trong, <b>không tính bao bì</b>.</p>
      <p>Ví dụ: hộp sữa có khối lượng tịnh 400 g, vỏ hộp nặng 50 g thì cả hộp nặng 400 + 50 = <b>450 g</b>.</p>
      <div class="box tip">Đừng nhầm khối lượng với kích thước: một túi bông to có thể nhẹ hơn một viên sắt nhỏ.</div>` }
  ],
  summary: 'Khối lượng là số đo lượng chất của vật, đơn vị kg (1 tấn = 1 000 kg; 1 kg = 1 000 g; 1 g = 1 000 mg). Dụng cụ đo là cân. Đo: ước lượng – chọn cân – hiệu chỉnh về 0 – đặt vật – mắt nhìn vuông góc – đọc theo vạch gần nhất. Khối lượng tịnh không tính bao bì.',
  examples: [
    { title: 'Đổi đơn vị', problem: 'Đổi: a) 2,5 tấn ra kg; b) 750 g ra kg; c) 3 yến ra kg.', solution: 'a) 2,5 × 1 000 = <b>2 500 kg</b>. b) 750 : 1 000 = <b>0,75 kg</b>. c) 3 × 10 = <b>30 kg</b>.' },
    { title: 'Đọc cân đồng hồ', problem: 'Một cân đồng hồ có GHĐ 5 kg, ĐCNN 0,2 kg. Kim chỉ ở vạch thứ ba sau số 1. Vật nặng bao nhiêu?', solution: '1 kg + 3 × 0,2 kg = <b>1,6 kg</b>.' },
    { title: 'Chọn cân', problem: 'Nên dùng loại cân nào để đo: a) khối lượng một chiếc nhẫn vàng; b) khối lượng cơ thể em?', solution: 'a) Nhẫn rất nhẹ (vài gam), cần độ chính xác cao: dùng <b>cân tiểu li</b> (hoặc cân điện tử chính xác đến 0,01 g). b) Dùng <b>cân y tế</b> (cân sức khoẻ).' }
  ],
  exercises: [
    { question: 'Một túi gạo có khối lượng tịnh 5 kg, vỏ túi nặng 20 g. Hỏi cả túi gạo nặng bao nhiêu gam?', hints: ['Đổi 5 kg ra gam.', 'Cộng thêm khối lượng vỏ túi.'], solution: '5 kg = 5 000 g. Cả túi nặng 5 000 + 20 = <b>5 020 g</b>.' },
    { question: 'Vì sao phải hiệu chỉnh cân về số 0 trước khi cân?', hints: ['Nếu khi chưa đặt vật, kim đã chỉ 0,2 kg thì sao?', 'Kết quả đọc được sẽ lớn hơn hay nhỏ hơn khối lượng thật?'], solution: 'Nếu cân chưa chỉ số 0 khi chưa có vật, mọi kết quả đọc được đều bị lệch (ví dụ kim đang ở 0,2 kg thì kết quả sẽ lớn hơn thật 0,2 kg). Hiệu chỉnh về 0 giúp kết quả đúng.' },
    { question: 'Mẹ mua 1,2 kg thịt và 800 g cá. Tổng khối lượng là bao nhiêu ki-lô-gam?', hints: ['Đổi về cùng một đơn vị.', '800 g = 0,8 kg.'], solution: '1,2 kg + 0,8 kg = <b>2 kg</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đơn vị đo khối lượng trong hệ đo lường hợp pháp của Việt Nam là:', options: ['gam (g)', 'ki-lô-gam (kg)', 'tấn', 'lạng'], answer: 1, explain: 'Đơn vị chuẩn là ki-lô-gam (kg).' },
    { type: 'short', q: 'Đổi 2,4 kg ra gam.', answer: '2400', answerText: '2 400', unit: 'g', calc: '2.4*1000', explain: '2,4 × 1 000 = 2 400 g.' },
    { type: 'short', q: '1 tạ bằng bao nhiêu ki-lô-gam?', answer: '100', unit: 'kg', calc: '100', explain: '1 tạ = 100 kg (1 yến = 10 kg, 1 tấn = 1 000 kg).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Khối lượng tịnh” ghi trên bao bì là khối lượng của cả hàng hoá lẫn bao bì.', answer: false, explain: 'Khối lượng tịnh chỉ là khối lượng của phần hàng bên trong, không tính bao bì.' },
    { type: 'mcq', q: 'Việc đầu tiên cần làm sau khi đã chọn được cân phù hợp là:', options: ['Đặt vật lên cân', 'Hiệu chỉnh cân về số 0', 'Đọc kết quả', 'Ghi đơn vị'], answer: 1, explain: 'Cân phải chỉ số 0 khi chưa đặt vật thì kết quả mới đúng.' },
    { type: 'short', q: 'Cân đồng hồ ở hình có ĐCNN 0,2 kg. Kim chỉ bao nhiêu ki-lô-gam?', svg: S.dial({ max: 5, step: 1, minor: 5, value: 3.6, unit: 'kg' }), answer: '3,6', unit: 'kg', calc: '3+3*0.2', explain: 'Kim ở vạch thứ 3 sau số 3: 3 + 3 × 0,2 = 3,6 kg.' },
    { type: 'mcq', q: 'Để cân một viên thuốc rất nhẹ (khoảng 500 mg), nên dùng:', options: ['Cân y tế', 'Cân đồng hồ 5 kg', 'Cân tiểu li (hoặc cân điện tử chính xác)', 'Cân ô tô'], answer: 2, explain: 'Vật rất nhẹ cần cân có ĐCNN rất nhỏ như cân tiểu li.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Vật có kích thước lớn hơn thì luôn có khối lượng lớn hơn.', answer: false, explain: 'Khối lượng phụ thuộc lượng chất, không phụ thuộc kích thước: túi bông to vẫn có thể nhẹ hơn viên bi sắt nhỏ.' }
  ]
});
})();
