/* KHTN 7 – Bài 36. Khái quát về sinh trưởng và phát triển ở sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-36', {
  objectives: [
    'Phát biểu được khái niệm sinh trưởng và phát triển ở sinh vật; nêu được mối quan hệ giữa sinh trưởng và phát triển.',
    'Chỉ ra được mô phân sinh trên sơ đồ cắt ngang thân cây Hai lá mầm và nêu được chức năng của mô phân sinh.',
    'Dựa vào hình vẽ vòng đời của một sinh vật, trình bày được các giai đoạn sinh trưởng và phát triển của sinh vật đó.'
  ],
  intro: 'Từ một hạt nhỏ mọc lên cây rồi ra hoa, kết quả; từ quả trứng nở ra nòng nọc rồi thành ếch. Sinh vật không chỉ lớn lên mà còn “thay hình đổi dạng”.',
  steps: [
    { title: 'Sinh trưởng và phát triển', html: `<ul><li><b>Sinh trưởng</b> là sự tăng về <b>kích thước và khối lượng</b> của cơ thể do sự tăng lên về số lượng và kích thước của tế bào. Ví dụ: cây cao thêm, gà con tăng cân.</li><li><b>Phát triển</b> là những biến đổi diễn ra trong đời sống của sinh vật, gồm <b>sinh trưởng, phân hoá tế bào và phát sinh hình thái cơ quan</b> của cơ thể. Ví dụ: cây ra lá mới, ra hoa, kết quả; nòng nọc mọc chân, mất đuôi thành ếch.</li></ul>
      <div class="box key">Sinh trưởng và phát triển liên quan mật thiết: sinh trưởng tạo tiền đề cho phát triển; phát triển thúc đẩy sinh trưởng.</div>` },
    { title: 'Mô phân sinh', html: `<p><b>Mô phân sinh</b> ở thực vật gồm các tế bào chưa phân hoá, có khả năng phân chia tạo tế bào mới.</p>
      <ul><li><b>Mô phân sinh đỉnh</b> (ở chồi ngọn, chồi nách, đầu rễ): giúp thân, cành, rễ <b>dài ra</b>.</li><li><b>Mô phân sinh bên</b> (có ở cây Hai lá mầm, nằm ở thân, rễ): giúp thân, rễ <b>to ra</b>.</li><li><b>Mô phân sinh lóng</b> (ở cây Một lá mầm như lúa, ngô, tre): giúp tăng chiều dài lóng.</li></ul>`,
      svg: S.meristem(), caption: 'Vị trí mô phân sinh đỉnh (thân, rễ) và mô phân sinh bên trên lát cắt ngang thân cây Hai lá mầm.' },
    { title: 'Vòng đời của sinh vật', html: `<p><b>Vòng đời</b> là các giai đoạn sinh trưởng, phát triển của sinh vật lặp lại qua các thế hệ.</p>
      <ul><li>Ở cây có hoa: hạt → cây mầm → cây trưởng thành → cây ra hoa, tạo quả và hạt.</li><li>Ở ếch: trứng → nòng nọc → ếch con → ếch trưởng thành (nòng nọc sống dưới nước, thở bằng mang; ếch trưởng thành thở bằng phổi và da).</li><li>Ở bướm: trứng → sâu → nhộng → bướm (sâu và bướm khác hẳn nhau về hình thái).</li><li>Ở người: hợp tử → phôi, thai → sơ sinh → trẻ em → dậy thì → trưởng thành.</li></ul>`,
      svg: [S.lifeCycle({ stages: ['Trứng', 'Nòng nọc', 'Ếch con', 'Ếch trưởng thành'], title: 'Ếch', bw: 160 }), S.lifeCycle({ stages: ['Trứng', 'Sâu', 'Nhộng', 'Bướm'], title: 'Bướm' })],
      caption: 'Vòng đời của ếch và của bướm.' },
    { title: 'Ý nghĩa', html: `<p>Nắm được các giai đoạn trong vòng đời giúp con người chăm sóc cây trồng, vật nuôi đúng thời điểm và phòng trừ sinh vật gây hại hiệu quả (ví dụ diệt sâu non trước khi chúng hoá nhộng, thành bướm đẻ trứng).</p>` }
  ],
  summary: 'Sinh trưởng: tăng kích thước, khối lượng cơ thể do tăng số lượng, kích thước tế bào. Phát triển: sinh trưởng, phân hoá tế bào, phát sinh hình thái cơ quan. Mô phân sinh đỉnh làm cây dài ra, mô phân sinh bên làm thân to ra (cây Hai lá mầm), mô phân sinh lóng ở cây Một lá mầm. Vòng đời gồm các giai đoạn lặp lại qua các thế hệ.',
  examples: [
    { title: 'Phân biệt sinh trưởng và phát triển', problem: 'Hiện tượng nào là sinh trưởng, hiện tượng nào là phát triển: (1) cây bàng cao thêm 50 cm; (2) cây cam ra hoa; (3) nòng nọc rụng đuôi; (4) lợn tăng từ 20 kg lên 50 kg.', solution: 'Sinh trưởng: (1), (4). Phát triển: (2), (3).' },
    { title: 'Tính tốc độ sinh trưởng', problem: 'Một con lợn tăng từ 20 kg lên 50 kg trong 60 ngày. Trung bình mỗi ngày lợn tăng bao nhiêu gam?', solution: '(50 − 20) : 60 = 0,5 kg = 500 g mỗi ngày.' },
    { title: 'Vai trò mô phân sinh', problem: 'Vì sao bấm ngọn cây đậu, cây rau muống làm cây ra nhiều nhánh?', solution: 'Bấm ngọn loại bỏ mô phân sinh đỉnh ở chồi ngọn, cây ngừng cao lên; chất dinh dưỡng tập trung cho các chồi nách phát triển thành nhiều nhánh.' }
  ],
  exercises: [
    { question: 'Vì sao cây tre, cây lúa (Một lá mầm) cao lên nhanh nhưng thân hầu như không to ra theo năm tháng?', hints: ['Cây Một lá mầm có mô phân sinh bên không?', 'Mô phân sinh nào làm thân to ra?'], solution: 'Cây Một lá mầm không có mô phân sinh bên nên thân không to ra; chúng có mô phân sinh đỉnh và mô phân sinh lóng giúp cây cao nhanh.' },
    { question: 'Trình bày vòng đời của bướm và cho biết giai đoạn nào gây hại cho cây trồng.', hints: ['Bốn giai đoạn: trứng, sâu, nhộng, bướm.', 'Giai đoạn nào ăn lá?'], solution: 'Trứng → sâu → nhộng → bướm → đẻ trứng. Giai đoạn sâu ăn lá, gây hại nhiều nhất cho cây trồng.' },
    { question: 'Một cây bạch đàn tăng đường kính thân từ 10 cm lên 16 cm trong 4 năm. Trung bình mỗi năm đường kính tăng bao nhiêu cm? Nhờ mô phân sinh nào?', hints: ['Độ tăng = 16 − 10.', 'Thân to ra nhờ mô phân sinh gì?'], solution: '(16 − 10) : 4 = 1,5 cm/năm, nhờ mô phân sinh bên.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sinh trưởng là sự tăng kích thước và khối lượng của cơ thể.', answer: true, explain: 'Do tăng số lượng và kích thước tế bào.' },
    { type: 'mcq', q: 'Mô phân sinh giúp thân cây Hai lá mầm to ra là:', options: ['mô phân sinh đỉnh', 'mô phân sinh bên', 'mô phân sinh lóng', 'mô biểu bì'], answer: 1, explain: 'Mô phân sinh bên nằm ở thân, rễ.' },
    { type: 'mcq', q: 'Thứ tự các giai đoạn trong vòng đời của ếch là:', options: ['Trứng → ếch con → nòng nọc → ếch trưởng thành', 'Trứng → nòng nọc → ếch con → ếch trưởng thành', 'Nòng nọc → trứng → ếch con → ếch trưởng thành', 'Trứng → nhộng → nòng nọc → ếch'], answer: 1, explain: 'Nòng nọc biến đổi thành ếch con.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cây ra hoa là hiện tượng sinh trưởng, không phải phát triển.', answer: false, explain: 'Ra hoa là phát sinh hình thái cơ quan mới – phát triển.' },
    { type: 'short', q: 'Lợn tăng từ 20 kg lên 50 kg trong 60 ngày. Trung bình mỗi ngày tăng bao nhiêu kg?', answer: '0,5', unit: 'kg', calc: '(50-20)/60', explain: '30 : 60 = 0,5 kg.' },
    { type: 'mcq', q: 'Trong vòng đời của bướm, giai đoạn gây hại cây trồng nhiều nhất là:', options: ['trứng', 'sâu', 'nhộng', 'bướm'], answer: 1, explain: 'Sâu ăn lá.' },
    { type: 'short', q: 'Đường kính thân tăng từ 10 cm lên 16 cm trong 4 năm. Trung bình mỗi năm tăng bao nhiêu cm?', answer: '1,5', unit: 'cm', calc: '(16-10)/4', explain: '6 : 4 = 1,5 cm.' },
    { type: 'short', q: 'Cây ngô cao 20 cm, mỗi ngày cao thêm 3 cm. Sau 10 ngày cây cao bao nhiêu cm?', answer: '50', unit: 'cm', calc: '20+3*10', explain: '20 + 30 = 50 cm.' }
  ]
});
})();
