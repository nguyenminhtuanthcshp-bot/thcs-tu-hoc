/* KHTN 9 – Bài 19. Dãy hoạt động hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-19', {
  objectives: [
    'Nêu được dãy hoạt động hoá học của một số kim loại: K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au.',
    'Trình bày được ý nghĩa của dãy hoạt động hoá học.',
    'Vận dụng dãy hoạt động để dự đoán phản ứng của kim loại với nước, acid và dung dịch muối.'
  ],
  intro: 'Vì sao natri phải ngâm trong dầu hoả, còn vàng để hàng nghìn năm vẫn sáng bóng? Các kim loại có mức độ hoạt động hoá học rất khác nhau, và các nhà hoá học đã sắp xếp chúng thành một dãy.',
  steps: [
    { title: 'Thí nghiệm so sánh', html: `<ul><li>Na phản ứng mãnh liệt với nước ở nhiệt độ thường; Fe thì không.</li><li>Fe đẩy được Cu khỏi dung dịch CuSO<sub>4</sub>; Cu đẩy được Ag khỏi dung dịch AgNO<sub>3</sub>.</li><li>Zn, Fe đẩy được H khỏi dung dịch HCl; Cu, Ag thì không.</li></ul>
      <p>Từ các thí nghiệm như vậy, người ta sắp xếp kim loại theo chiều <b>giảm dần</b> mức độ hoạt động hoá học.</p>` },
    { title: 'Dãy hoạt động hoá học', html: `<p class="math">K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au</p>
      <div class="box tip">Mẹo nhớ: “<b>Khi Nào Cần May Áo Záp Sắt Phải Hỏi Cửa Á Âu</b>” – lần lượt ứng với K, Na, Ca, Mg, Al, Zn, Fe (Sắt), Pb, H, Cu, Ag (Á), Au (Âu).</div>`,
      svg: S.activitySeries({ brackets: true }), caption: 'Dãy hoạt động hoá học: mức độ hoạt động giảm dần từ trái sang phải.' },
    { title: 'Ý nghĩa của dãy', html: `<ol><li>Mức độ hoạt động hoá học của kim loại <b>giảm dần</b> từ trái sang phải.</li><li>Kim loại đứng trước Mg (K, Na, Ca…) phản ứng với nước ở điều kiện thường tạo base kiềm và H<sub>2</sub>: 2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>.</li><li>Kim loại đứng <b>trước H</b> phản ứng với dung dịch acid (HCl, H<sub>2</sub>SO<sub>4</sub> loãng) giải phóng H<sub>2</sub>.</li><li>Kim loại đứng trước (trừ K, Na, Ca…) đẩy được kim loại đứng sau ra khỏi dung dịch muối.</li></ol>` },
    { title: 'Vận dụng dự đoán phản ứng', html: `<table><tr><th>Cặp chất</th><th>Có phản ứng?</th></tr><tr><td>Zn + CuSO<sub>4</sub></td><td>Có (Zn đứng trước Cu)</td></tr><tr><td>Cu + FeSO<sub>4</sub></td><td>Không (Cu đứng sau Fe)</td></tr><tr><td>Ag + HCl</td><td>Không (Ag đứng sau H)</td></tr><tr><td>Mg + HCl</td><td>Có, giải phóng H<sub>2</sub></td></tr></table>`,
      svg: S.activitySeries({ highlight: ['Zn', 'Cu'], brackets: false }), caption: 'Zn đứng trước Cu nên đẩy được Cu khỏi dung dịch CuSO₄: Zn + CuSO₄ → ZnSO₄ + Cu.' }
  ],
  summary: 'Dãy hoạt động hoá học: K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au (giảm dần). K, Na, Ca… tác dụng với nước ở nhiệt độ thường. Kim loại trước H tác dụng với acid loãng giải phóng H₂. Kim loại trước (trừ K, Na, Ca…) đẩy kim loại sau ra khỏi dung dịch muối.',
  examples: [
    { title: 'Dự đoán phản ứng', problem: 'Cho Fe vào dung dịch AgNO<sub>3</sub>. Có phản ứng không? Viết phương trình.', solution: 'Có, vì Fe đứng trước Ag. Fe + 2AgNO<sub>3</sub> → Fe(NO<sub>3</sub>)<sub>2</sub> + 2Ag.' },
    { title: 'Sắp xếp', problem: 'Sắp xếp Al, Cu, Na, Fe theo chiều mức độ hoạt động giảm dần.', solution: 'Na, Al, Fe, Cu.' },
    { title: 'Tính toán', problem: 'Ngâm Zn dư vào dung dịch chứa 16 g CuSO<sub>4</sub>. Tính khối lượng Cu thu được.', solution: 'n<sub>CuSO₄</sub> = 16 / 160 = 0,1 mol. Zn + CuSO<sub>4</sub> → ZnSO<sub>4</sub> + Cu ⇒ m<sub>Cu</sub> = 0,1 · 64 = 6,4 g.' }
  ],
  exercises: [
    { question: 'Kim loại nào sau đây tác dụng được với dung dịch HCl: Mg, Cu, Al, Ag? Viết phương trình.', hints: ['Kim loại đứng trước H mới phản ứng.', 'Mg, Al đứng trước H.'], solution: 'Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>; 2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>. Cu, Ag không phản ứng.' },
    { question: 'Có nên dùng thùng bằng sắt để đựng dung dịch CuSO<sub>4</sub> không? Vì sao?', hints: ['Fe đứng trước hay sau Cu?', 'Điều gì xảy ra với thùng?'], solution: 'Không nên, vì Fe đẩy Cu ra khỏi muối (Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu), thùng bị ăn mòn và dung dịch bị biến đổi.' },
    { question: 'Làm sạch bột Ag có lẫn bột Cu bằng cách nào?', hints: ['Dùng dung dịch muối của kim loại nào?', 'Cu đẩy được Ag khỏi muối.'], solution: 'Ngâm hỗn hợp trong dung dịch AgNO<sub>3</sub> dư: Cu + 2AgNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2Ag; lọc lấy Ag.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong dãy hoạt động hoá học, mức độ hoạt động của kim loại giảm dần từ K đến Au.', answer: true, explain: 'Dãy được sắp xếp theo chiều giảm dần.' },
    { type: 'mcq', q: 'Kim loại nào phản ứng với nước ở nhiệt độ thường?', options: ['Fe', 'Cu', 'Na', 'Ag'], answer: 2, explain: '2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>.' },
    { type: 'mcq', q: 'Phản ứng nào KHÔNG xảy ra?', options: ['Zn + CuSO<sub>4</sub>', 'Fe + CuSO<sub>4</sub>', 'Cu + FeSO<sub>4</sub>', 'Cu + AgNO<sub>3</sub>'], answer: 2, explain: 'Cu đứng sau Fe nên không đẩy được Fe.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ag tác dụng với dung dịch HCl giải phóng khí H<sub>2</sub>.', answer: false, explain: 'Ag đứng sau H.' },
    { type: 'short', q: 'Ngâm Fe dư trong dung dịch chứa 0,2 mol CuSO<sub>4</sub>. Khối lượng Cu sinh ra là bao nhiêu gam?', answer: '12,8', unit: 'g', calc: '0.2*64', explain: '0,2 · 64 = 12,8 g.' },
    { type: 'mcq', q: 'Kim loại hoạt động hoá học mạnh nhất trong các kim loại: Mg, Al, Zn, Fe là:', options: ['Mg', 'Al', 'Zn', 'Fe'], answer: 0, explain: 'Mg đứng đầu trong bốn kim loại này.' },
    { type: 'short', q: 'Cho Cu dư vào dung dịch chứa 0,1 mol AgNO<sub>3</sub>. Khối lượng Ag thu được là bao nhiêu gam?', answer: '10,8', unit: 'g', calc: '0.1*108', explain: 'n<sub>Ag</sub> = n<sub>AgNO₃</sub> = 0,1 mol; m = 10,8 g.' },
    { type: 'short', q: 'Cho 1,2 g Mg tác dụng hết với HCl. Số mol H<sub>2</sub> thu được là bao nhiêu?', answer: '0,05', unit: 'mol', calc: '1.2/24', explain: 'n<sub>H₂</sub> = n<sub>Mg</sub> = 1,2 / 24 = 0,05 mol.' }
  ]
});
})();
