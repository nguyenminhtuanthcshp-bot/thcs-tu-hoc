/* KHTN 7 – Bài 3. Nguyên tố hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-3', {
  objectives: [
    'Phát biểu được khái niệm nguyên tố hoá học.',
    'Biết số proton là số đặc trưng của một nguyên tố hoá học.',
    'Viết được kí hiệu hoá học và đọc được tên của 20 nguyên tố đầu tiên.',
    'Tránh được các lỗi thường gặp khi viết kí hiệu hoá học.'
  ],
  intro: 'Nước, đường, muối ăn, không khí… có hàng triệu chất khác nhau. Nhưng tất cả chỉ được tạo nên từ khoảng hơn một trăm “viên gạch” cơ bản gọi là <b>nguyên tố hoá học</b>.',
  steps: [
    { title: 'Nguyên tố hoá học là gì?', html: `<p><b>Nguyên tố hoá học</b> là tập hợp những nguyên tử cùng loại, có <b>cùng số proton</b> trong hạt nhân.</p>
      <p>Ví dụ: mọi nguyên tử có 8 proton đều thuộc nguyên tố oxygen; mọi nguyên tử có 1 proton đều thuộc nguyên tố hydrogen.</p>
      <div class="box key">Số proton là <b>số đặc trưng</b> của một nguyên tố. Các nguyên tử của cùng một nguyên tố có thể khác nhau về số neutron.</div>`,
      svg: S.row([{ svg: S.atomModel({ name: 'Hydrogen', p: 1, n: 0, shells: [1] }) }, { svg: S.atomModel({ name: 'Hydrogen nặng', p: 1, n: 1, shells: [1] }) }, { svg: S.atomModel({ name: 'Hydrogen siêu nặng', p: 1, n: 2, shells: [1] }) }]),
      caption: 'Ba loại nguyên tử cùng có 1 proton (khác số neutron) đều thuộc nguyên tố hydrogen.' },
    { title: 'Có bao nhiêu nguyên tố?', html: `<p>Đến nay, các nhà khoa học đã biết <b>118</b> nguyên tố hoá học. Một số có sẵn trong tự nhiên, một số do con người tạo ra trong phòng thí nghiệm.</p>
      <p>Oxygen là nguyên tố chiếm tỉ lệ khối lượng lớn nhất trong vỏ Trái Đất và cả trong cơ thể người.</p>`,
      svg: S.pieChart({ title: 'Tỉ lệ khối lượng các nguyên tố trong cơ thể người (gần đúng)', parts: [{ v: 65, label: 'Oxygen 65%' }, { v: 18, label: 'Carbon 18%' }, { v: 10, label: 'Hydrogen 10%' }, { v: 3, label: 'Nitrogen 3%' }, { v: 4, label: 'Các nguyên tố khác 4%', color: '#9ca3af' }] }),
      caption: 'Bốn nguyên tố O, C, H, N chiếm khoảng 96% khối lượng cơ thể người.' },
    { title: 'Kí hiệu hoá học', html: `<p>Mỗi nguyên tố được biểu diễn bằng một <b>kí hiệu hoá học</b> gồm 1 hoặc 2 chữ cái (theo IUPAC):</p>
      <ul><li><b>Chữ cái đầu viết in hoa</b>.</li><li>Chữ cái thứ hai (nếu có) <b>viết thường</b>.</li></ul>
      <p>Ví dụ: H (hydrogen), C (carbon), O (oxygen), N (nitrogen), Na (sodium), Ca (calcium), Cl (chlorine), Fe (iron – sắt).</p>` },
    { title: 'Một số nguyên tố quen thuộc', html: `<table class="tbl"><tr><th>Số proton</th><th>Tên nguyên tố</th><th>Kí hiệu</th></tr>
      <tr><td>1</td><td>Hydrogen</td><td>H</td></tr>
      <tr><td>2</td><td>Helium</td><td>He</td></tr>
      <tr><td>6</td><td>Carbon</td><td>C</td></tr>
      <tr><td>7</td><td>Nitrogen</td><td>N</td></tr>
      <tr><td>8</td><td>Oxygen</td><td>O</td></tr>
      <tr><td>10</td><td>Neon</td><td>Ne</td></tr>
      <tr><td>11</td><td>Sodium (natri)</td><td>Na</td></tr>
      <tr><td>12</td><td>Magnesium</td><td>Mg</td></tr>
      <tr><td>13</td><td>Aluminium</td><td>Al</td></tr>
      <tr><td>16</td><td>Sulfur</td><td>S</td></tr>
      <tr><td>17</td><td>Chlorine</td><td>Cl</td></tr>
      <tr><td>19</td><td>Potassium (kali)</td><td>K</td></tr>
      <tr><td>20</td><td>Calcium</td><td>Ca</td></tr></table>` },
    { title: 'Lỗi thường gặp', html: `<p>Viết sai chữ hoa, chữ thường có thể làm thay đổi hoàn toàn ý nghĩa:</p>
      <ul><li><b>Co</b> là kí hiệu nguyên tố cobalt (một kim loại).</li><li><b>CO</b> là hai kí hiệu C và O ghép lại, biểu diễn chất carbon monoxide (một khí độc).</li></ul>
      <div class="box tip">Không viết “CL”, “MG”, “na”. Viết đúng: Cl, Mg, Na.</div>` }
  ],
  summary: 'Nguyên tố hoá học: tập hợp nguyên tử cùng số proton. Kí hiệu hoá học: 1–2 chữ cái, chữ đầu in hoa, chữ sau viết thường. Hiện đã biết 118 nguyên tố.',
  examples: [
    { title: 'Xác định nguyên tố', problem: 'Nguyên tử X có 12 proton, 12 neutron; nguyên tử Y có 12 proton, 13 neutron. X và Y có thuộc cùng một nguyên tố không?', solution: 'Có. X và Y có cùng số proton (12) nên cùng thuộc nguyên tố magnesium (Mg), dù số neutron khác nhau.' },
    { title: 'Sửa lỗi kí hiệu', problem: 'Bạn Nam viết kí hiệu của sodium, chlorine, calcium là: NA, cl, CA. Hãy sửa lại cho đúng.', solution: 'Na, Cl, Ca (chữ đầu in hoa, chữ thứ hai viết thường).' },
    { title: 'Tra tên nguyên tố', problem: 'Nguyên tố có 6 proton trong hạt nhân là nguyên tố nào? Kí hiệu là gì?', solution: 'Đó là carbon, kí hiệu C.' }
  ],
  exercises: [
    { question: 'Viết kí hiệu hoá học của các nguyên tố: hydrogen, oxygen, nitrogen, sulfur.', hints: ['Các nguyên tố này đều có kí hiệu chỉ gồm một chữ cái.', 'Lấy chữ cái đầu của tên, viết in hoa.'], solution: 'H, O, N, S.' },
    { question: 'Nguyên tử của nguyên tố nào có 17 proton? Viết kí hiệu.', hints: ['Tra bảng ở bước 4.', 'Nguyên tố này là thành phần của muối ăn (cùng với sodium).'], solution: 'Chlorine, kí hiệu Cl.' },
    { question: 'Giải thích sự khác nhau giữa “Co” và “CO”.', hints: ['Chú ý chữ “o” viết hoa hay viết thường.', 'Một bên là kí hiệu một nguyên tố, một bên gồm hai kí hiệu.'], solution: 'Co (o thường) là kí hiệu nguyên tố cobalt. CO gồm hai kí hiệu C và O, biểu diễn chất carbon monoxide tạo bởi carbon và oxygen.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Nguyên tố hoá học là tập hợp những nguyên tử có cùng:', options: ['số neutron', 'số proton', 'khối lượng', 'số lớp electron'], answer: 1, explain: 'Số proton là số đặc trưng của nguyên tố hoá học.' },
    { type: 'mcq', q: 'Kí hiệu hoá học nào được viết đúng?', options: ['MG', 'mg', 'Mg', 'mG'], answer: 2, explain: 'Chữ đầu in hoa, chữ thứ hai viết thường: Mg.' },
    { type: 'short', q: 'Kí hiệu hoá học của nguyên tố oxygen là gì?', answer: 'O', explain: 'Oxygen: O.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Hai nguyên tử có cùng số proton nhưng khác số neutron thì thuộc hai nguyên tố khác nhau.', answer: false, explain: 'Cùng số proton thì cùng nguyên tố, dù số neutron khác nhau.' },
    { type: 'mcq', q: 'Kí hiệu Na là của nguyên tố:', options: ['Nitrogen', 'Neon', 'Sodium (natri)', 'Nickel'], answer: 2, explain: 'Na là kí hiệu của sodium (natri).' },
    { type: 'short', q: 'Một nguyên tử oxygen có 8 proton và 10 neutron. Khối lượng của nguyên tử này xấp xỉ bao nhiêu amu?', answer: '18', unit: 'amu', calc: '8+10', explain: 'Khối lượng ≈ số p + số n = 8 + 10 = 18 (amu). Nó vẫn thuộc nguyên tố oxygen vì có 8 proton.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: “Co” và “CO” có ý nghĩa giống nhau.', answer: false, explain: 'Co là nguyên tố cobalt; CO là chất carbon monoxide.' },
    { type: 'mcq', q: 'Nguyên tố có 20 proton là:', options: ['Potassium (K)', 'Calcium (Ca)', 'Carbon (C)', 'Chlorine (Cl)'], answer: 1, explain: 'Calcium có 20 proton; potassium có 19.' }
  ]
});
})();
