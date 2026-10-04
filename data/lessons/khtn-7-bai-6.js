/* KHTN 7 – Bài 6. Giới thiệu về liên kết hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-6', {
  objectives: [
    'Nêu được mô hình sắp xếp electron trong vỏ nguyên tử của một số nguyên tố khí hiếm.',
    'Nêu được sự hình thành liên kết ion, liên kết cộng hoá trị theo nguyên tắc dùng chung hoặc cho – nhận electron để đạt lớp vỏ bền như khí hiếm.',
    'Chỉ ra được sự khác nhau về một số tính chất của chất ion và chất cộng hoá trị.'
  ],
  intro: 'Vì sao các nguyên tử sodium và chlorine “bám chặt” vào nhau thành muối ăn, còn khí neon lại đứng một mình? Bí mật nằm ở <b>lớp electron ngoài cùng</b>.',
  steps: [
    { title: 'Lớp vỏ bền của khí hiếm', html: `<p>Nguyên tử khí hiếm có lớp electron ngoài cùng chứa <b>8 electron</b> (riêng He có 2 electron). Lớp vỏ như vậy rất bền, nên khí hiếm hầu như không liên kết với nguyên tử khác.</p>
      <p>Nguyên tử các nguyên tố khác có xu hướng <b>nhường, nhận</b> hoặc <b>dùng chung</b> electron để có lớp vỏ giống khí hiếm – khi đó chúng liên kết với nhau.</p>`,
      svg: S.row([{ svg: S.atomModel({ name: 'Helium (He)', p: 2, shells: [2] }) }, { svg: S.atomModel({ name: 'Neon (Ne)', p: 10, shells: [2, 8] }) }, { svg: S.atomModel({ name: 'Argon (Ar)', p: 18, shells: [2, 8, 8] }) }]),
      caption: 'Sự sắp xếp electron của ba khí hiếm đầu tiên.' },
    { title: 'Liên kết ion', html: `<p>Khi sodium gặp chlorine:</p>
      <ul><li>Nguyên tử Na (2, 8, 1) <b>nhường</b> 1 electron ⇒ ion dương Na<sup>+</sup> (2, 8), giống neon.</li><li>Nguyên tử Cl (2, 8, 7) <b>nhận</b> 1 electron ⇒ ion âm Cl<sup>−</sup> (2, 8, 8), giống argon.</li></ul>
      <p>Hai ion mang điện tích trái dấu hút nhau tạo thành <b>liên kết ion</b>.</p>
      <div class="box key">Liên kết ion là liên kết được tạo thành bởi lực hút giữa các ion mang điện tích trái dấu.</div>`,
      svg: S.bondScheme('ion'), caption: 'Nguyên tử Na nhường 1 electron cho nguyên tử Cl, tạo thành hai ion Na⁺ và Cl⁻.' },
    { title: 'Liên kết cộng hoá trị', html: `<p>Hai nguyên tử phi kim thường không cho – nhận mà <b>góp chung electron</b>:</p>
      <ul><li>Phân tử H<sub>2</sub>: mỗi nguyên tử H góp 1 electron tạo thành <b>1 cặp electron dùng chung</b>; mỗi H “có” 2 electron giống helium.</li><li>Phân tử H<sub>2</sub>O: nguyên tử O dùng chung với mỗi nguyên tử H một cặp electron; O có đủ 8 electron lớp ngoài cùng.</li></ul>
      <div class="box key">Liên kết cộng hoá trị là liên kết được tạo nên do hai nguyên tử dùng chung một hay nhiều cặp electron.</div>`,
      svg: [S.bondScheme('H2'), S.bondScheme('H2O')], caption: 'Cặp electron dùng chung trong phân tử hydrogen và phân tử nước.' },
    { title: 'Chất ion và chất cộng hoá trị', html: `<table class="tbl"><tr><th>Tính chất</th><th>Chất ion (NaCl, MgO…)</th><th>Chất cộng hoá trị (nước, đường, CO<sub>2</sub>…)</th></tr>
      <tr><td>Thể ở nhiệt độ thường</td><td>Rắn</td><td>Rắn, lỏng hoặc khí</td></tr>
      <tr><td>Nhiệt độ nóng chảy, sôi</td><td>Cao (NaCl nóng chảy ở khoảng 801 °C)</td><td>Thường thấp (nước sôi ở 100 °C)</td></tr>
      <tr><td>Dẫn điện</td><td>Dung dịch trong nước dẫn được điện</td><td>Thường không dẫn điện (dung dịch đường không dẫn điện)</td></tr></table>`,
      svg: S.saltLattice(), caption: 'Trong muối ăn, mỗi ion bị các ion trái dấu bao quanh và hút chặt – vì vậy muối ăn rắn, khó nóng chảy.' }
  ],
  summary: 'Khí hiếm có lớp ngoài cùng 8 electron (He: 2) nên bền. Liên kết ion: nguyên tử kim loại nhường electron, phi kim nhận electron, các ion trái dấu hút nhau (NaCl). Liên kết cộng hoá trị: các nguyên tử dùng chung cặp electron (H₂, H₂O). Chất ion thường rắn, nóng chảy ở nhiệt độ cao; chất cộng hoá trị có thể rắn, lỏng, khí.',
  examples: [
    { title: 'Ion magnesium', problem: 'Nguyên tử Mg (12 electron: 2, 8, 2) có xu hướng nhường hay nhận electron? Tạo ra ion gì?', solution: 'Mg nhường 2 electron lớp ngoài cùng để có vỏ 2, 8 giống neon ⇒ tạo ion Mg<sup>2+</sup> (còn 10 electron).' },
    { title: 'Liên kết trong MgO', problem: 'Giải thích sự tạo thành liên kết trong magnesium oxide MgO (O có 8 electron: 2, 6).', solution: 'Mg nhường 2 electron cho O: Mg ⇒ Mg<sup>2+</sup> (2, 8); O nhận 2 electron ⇒ O<sup>2−</sup> (2, 8). Hai ion trái dấu hút nhau tạo liên kết ion.' },
    { title: 'Phân tử chlorine', problem: 'Mô tả liên kết trong phân tử Cl<sub>2</sub> (Cl: 2, 8, 7).', solution: 'Mỗi nguyên tử Cl thiếu 1 electron so với argon. Hai nguyên tử góp chung mỗi bên 1 electron tạo 1 cặp electron dùng chung ⇒ liên kết cộng hoá trị; mỗi Cl có đủ 8 electron lớp ngoài cùng.' }
  ],
  exercises: [
    { question: 'Nguyên tử K (2, 8, 8, 1) tạo thành ion gì khi tham gia liên kết ion? Ion đó có bao nhiêu electron?', hints: ['K có 1 electron ở lớp ngoài cùng.', 'Nhường 1 electron thì còn 19 − 1 electron.'], solution: 'K nhường 1 electron ⇒ ion K<sup>+</sup> có 18 electron (2, 8, 8) giống argon.' },
    { question: 'Trong phân tử nước, mỗi nguyên tử H dùng chung với O bao nhiêu cặp electron? Tổng số cặp electron dùng chung trong phân tử là bao nhiêu?', hints: ['Mỗi H chỉ có 1 electron, cần thêm 1 để giống He.', 'Phân tử có 2 nguyên tử H.'], solution: 'Mỗi H dùng chung 1 cặp electron với O; phân tử H<sub>2</sub>O có 2 cặp electron dùng chung.' },
    { question: 'Một chất X ở thể rắn, nóng chảy ở 770 °C và dung dịch của nó trong nước dẫn được điện. X nhiều khả năng là chất ion hay chất cộng hoá trị?', hints: ['So sánh với bảng tính chất ở bước 4.', 'Nhiệt độ nóng chảy cao và dung dịch dẫn điện là đặc điểm của loại chất nào?'], solution: 'X nhiều khả năng là chất ion (rắn, nóng chảy ở nhiệt độ cao, dung dịch dẫn điện) – thực tế đây là potassium chloride KCl.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nguyên tử khí hiếm (trừ helium) có 8 electron ở lớp ngoài cùng.', answer: true, explain: 'Ne (2, 8), Ar (2, 8, 8) đều có 8 electron lớp ngoài cùng; He có 2.' },
    { type: 'mcq', q: 'Liên kết trong phân tử muối ăn NaCl là:', options: ['liên kết cộng hoá trị', 'liên kết ion', 'không có liên kết', 'liên kết kim loại'], answer: 1, explain: 'Na nhường, Cl nhận electron, ion Na⁺ và Cl⁻ hút nhau.' },
    { type: 'short', q: 'Ion Na<sup>+</sup> có bao nhiêu electron? (nguyên tử Na có 11 electron)', answer: '10', calc: '11-1', explain: 'Na nhường 1 electron: 11 − 1 = 10 electron.' },
    { type: 'short', q: 'Ion Cl<sup>−</sup> có bao nhiêu electron? (nguyên tử Cl có 17 electron)', answer: '18', calc: '17+1', explain: 'Cl nhận 1 electron: 17 + 1 = 18 electron.' },
    { type: 'mcq', q: 'Trong phân tử H<sub>2</sub>, hai nguyên tử liên kết với nhau bằng cách:', options: ['nhường – nhận electron', 'dùng chung một cặp electron', 'dùng chung ba cặp electron', 'trao đổi proton'], answer: 1, explain: 'Mỗi H góp 1 electron tạo 1 cặp dùng chung.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất cộng hoá trị luôn ở thể rắn ở nhiệt độ thường.', answer: false, explain: 'Chất cộng hoá trị có thể là khí (CO₂), lỏng (nước) hoặc rắn (đường).' },
    { type: 'short', q: 'Nguyên tử Mg có 12 electron. Để có lớp vỏ giống neon (10 electron), Mg phải nhường bao nhiêu electron?', answer: '2', calc: '12-10', explain: '12 − 10 = 2 electron ⇒ ion Mg²⁺.' },
    { type: 'mcq', q: 'Dung dịch nào dẫn được điện?', options: ['Dung dịch đường', 'Dung dịch muối ăn', 'Nước cất', 'Dung dịch rượu'], answer: 1, explain: 'Muối ăn là chất ion, dung dịch của nó dẫn điện.' }
  ]
});
})();
