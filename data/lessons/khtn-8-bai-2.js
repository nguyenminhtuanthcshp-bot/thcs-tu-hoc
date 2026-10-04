/* KHTN 8 – Bài 2. Phản ứng hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-2', {
  objectives: [
    'Phân biệt được biến đổi vật lí và biến đổi hoá học.',
    'Nêu được khái niệm phản ứng hoá học, chất phản ứng và sản phẩm.',
    'Trình bày được diễn biến của phản ứng hoá học ở mức độ phân tử.',
    'Nhận biết được dấu hiệu có phản ứng xảy ra; phân biệt phản ứng toả nhiệt và thu nhiệt.'
  ],
  intro: 'Nước đá tan thành nước lỏng – nó vẫn là nước. Nhưng khi que diêm cháy, gỗ biến thành than, khói và khí – những chất hoàn toàn mới. Điều gì làm nên sự khác biệt?',
  steps: [
    { title: 'Biến đổi vật lí và biến đổi hoá học', html: `<ul><li><b>Biến đổi vật lí:</b> chất thay đổi trạng thái, hình dạng… nhưng <b>vẫn giữ nguyên là chất ban đầu</b>. Ví dụ: nước đá tan, đường hoà tan vào nước, bẻ gãy que diêm.</li>
      <li><b>Biến đổi hoá học:</b> có <b>chất mới</b> được tạo thành. Ví dụ: đốt cháy que diêm, sắt bị gỉ, cơm để lâu bị thiu.</li></ul>` },
    { title: 'Phản ứng hoá học', html: `<p><b>Phản ứng hoá học</b> là quá trình biến đổi từ chất này thành chất khác.</p>
      <ul><li>Chất ban đầu bị biến đổi gọi là <b>chất phản ứng</b> (chất tham gia).</li><li>Chất mới sinh ra gọi là <b>sản phẩm</b>.</li></ul>
      <p>Phương trình chữ: <span class="math">Chất phản ứng → Sản phẩm</span></p>
      <p>Ví dụ: Carbon + Oxygen → Carbon dioxide; &nbsp; Iron + Sulfur → Iron(II) sulfide.</p>` },
    { title: 'Diễn biến của phản ứng', html: `<p>Trong phản ứng hoá học, <b>liên kết giữa các nguyên tử thay đổi</b>, làm phân tử này biến đổi thành phân tử khác.</p>
      <p>Ví dụ: hydrogen phản ứng với oxygen tạo thành nước. Các nguyên tử H và O “đổi bạn”: ban đầu H liên kết với H, O liên kết với O; sau phản ứng H liên kết với O tạo phân tử nước.</p>
      <div class="box key">Số nguyên tử của mỗi nguyên tố <b>được giữ nguyên</b> trước và sau phản ứng; chỉ cách liên kết thay đổi.</div>`,
      svg: S.reactionParticles({ left: [['H', 'H'], ['H', 'H'], ['O', 'O']], right: [['H', 'O', 'H'], ['H', 'O', 'H']], leftLabel: 'Trước: 2 phân tử H₂, 1 phân tử O₂', rightLabel: 'Sau: 2 phân tử H₂O' }), caption: 'Mô hình phản ứng giữa hydrogen và oxygen: 4 nguyên tử H và 2 nguyên tử O được giữ nguyên, chỉ liên kết thay đổi.' },
    { title: 'Dấu hiệu nhận biết', html: `<p>Có thể dựa vào dấu hiệu có <b>chất mới</b> tạo thành:</p><ul><li>Có chất khí thoát ra (sủi bọt).</li><li>Có chất rắn không tan tạo thành (kết tủa).</li><li>Có sự thay đổi màu sắc.</li><li>Có sự toả nhiệt hoặc phát sáng.</li></ul>`,
      svg: S.tubesCompare({ title: 'Một số dấu hiệu có phản ứng hoá học xảy ra', tubes: [{ label: 'Sủi bọt khí', sub: 'giấm + vỏ trứng', liquid: '#e0f2fe', bubbles: 14, solid: 'chunk', solidColor: '#f5f5f4' }, { label: 'Kết tủa trắng', sub: 'BaCl₂ + Na₂SO₄', liquid: '#f1f5f9', solid: 'powder', solidColor: '#ffffff' }, { label: 'Đổi màu', sub: 'quỳ tím + giấm', liquid: '#fecaca' }] }), caption: 'Sủi bọt khí, xuất hiện kết tủa, thay đổi màu sắc là những dấu hiệu có chất mới tạo thành.' },
    { title: 'Phản ứng toả nhiệt và thu nhiệt', html: `<ul><li><b>Phản ứng toả nhiệt</b>: giải phóng năng lượng dạng nhiệt ra môi trường. Ví dụ: đốt cháy than, cồn, khí gas.</li>
      <li><b>Phản ứng thu nhiệt</b>: nhận năng lượng dạng nhiệt từ môi trường (thường phải đun nóng liên tục). Ví dụ: nung đá vôi tạo vôi sống.</li></ul>
      <p>Nhiên liệu cháy là các phản ứng toả nhiệt, cung cấp năng lượng cho đời sống và sản xuất.</p>` }
  ],
  summary: 'Phản ứng hoá học: chất phản ứng → sản phẩm (có chất mới). Liên kết thay đổi, số nguyên tử mỗi nguyên tố giữ nguyên. Dấu hiệu: khí, kết tủa, đổi màu, toả nhiệt/phát sáng.',
  examples: [
    { title: 'Phân loại biến đổi', problem: 'Hiện tượng nào là biến đổi hoá học: a) cồn bay hơi; b) cồn cháy; c) muối ăn tan trong nước; d) sữa để lâu bị chua?', solution: 'Biến đổi hoá học: b) cồn cháy và d) sữa bị chua (có chất mới tạo thành). a) và c) là biến đổi vật lí.' },
    { title: 'Viết phương trình chữ', problem: 'Đốt khí methane trong oxygen tạo thành carbon dioxide và nước. Viết phương trình chữ và chỉ ra chất phản ứng, sản phẩm.', solution: 'Methane + Oxygen → Carbon dioxide + Nước.<br>Chất phản ứng: methane, oxygen. Sản phẩm: carbon dioxide, nước.' },
    { title: 'Nhận biết dấu hiệu', problem: 'Nhỏ giấm vào vỏ trứng, thấy sủi bọt khí. Có phản ứng hoá học xảy ra không?', solution: 'Có. Dấu hiệu là có chất khí thoát ra (khí carbon dioxide), chứng tỏ có chất mới tạo thành.' }
  ],
  exercises: [
    { question: 'Khi đốt nến, nến vừa chảy lỏng vừa cháy. Quá trình nào là biến đổi vật lí, quá trình nào là biến đổi hoá học?', hints: ['Nến chảy lỏng: chất có thay đổi không?', 'Nến cháy tạo ra khí carbon dioxide và hơi nước.'], solution: 'Nến chảy lỏng là biến đổi vật lí (chỉ đổi trạng thái). Nến cháy là biến đổi hoá học (tạo ra chất mới).' },
    { question: 'Trong phản ứng giữa hydrogen và oxygen tạo thành nước, số nguyên tử oxygen trước và sau phản ứng thay đổi như thế nào?', hints: ['Trong phản ứng hoá học, nguyên tử có mất đi hay sinh ra không?', 'Chỉ liên kết giữa các nguyên tử thay đổi.'], solution: 'Số nguyên tử oxygen được giữ nguyên; chỉ có liên kết thay đổi (O từ liên kết với O chuyển sang liên kết với H).' },
    { question: 'Nung đá vôi phải cung cấp nhiệt liên tục; nếu ngừng đun phản ứng dừng lại. Đây là phản ứng toả nhiệt hay thu nhiệt?', hints: ['Phản ứng cần nhận nhiệt từ bên ngoài hay giải phóng nhiệt?', 'Phản ứng cần cung cấp nhiệt liên tục là phản ứng …'], solution: 'Phản ứng thu nhiệt.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Hiện tượng nào là biến đổi hoá học?', options: ['Nước đá tan', 'Sắt bị gỉ', 'Đường hoà tan trong nước', 'Thuỷ tinh bị vỡ'], answer: 1, explain: 'Gỉ sắt là chất mới được tạo thành.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong phản ứng hoá học, số nguyên tử của mỗi nguyên tố được giữ nguyên.', answer: true, explain: 'Chỉ liên kết giữa các nguyên tử thay đổi.' },
    { type: 'mcq', q: 'Trong phản ứng: Carbon + Oxygen → Carbon dioxide, sản phẩm là:', options: ['Carbon', 'Oxygen', 'Carbon dioxide', 'Carbon và oxygen'], answer: 2, explain: 'Chất mới sinh ra (bên phải mũi tên) là sản phẩm.' },
    { type: 'short', q: 'Có 3 phân tử O<sub>2</sub> tham gia một phản ứng. Sau phản ứng, tổng số nguyên tử O trong các sản phẩm là bao nhiêu?', answer: '6', unit: 'nguyên tử', calc: '3*2', explain: 'Số nguyên tử được giữ nguyên: 3 · 2 = 6 nguyên tử O.' },
    { type: 'mcq', q: 'Dấu hiệu nào sau đây KHÔNG chắc chắn cho thấy có phản ứng hoá học?', options: ['Có kết tủa tạo thành', 'Có khí thoát ra khi trộn hai dung dịch', 'Nước đá chuyển thành nước lỏng', 'Dung dịch đổi màu khi cho thêm chất khác'], answer: 2, explain: 'Nước đá tan chỉ là thay đổi trạng thái (biến đổi vật lí).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đốt cháy than là phản ứng thu nhiệt.', answer: false, explain: 'Đốt cháy than giải phóng nhiệt – phản ứng toả nhiệt.' },
    { type: 'short', q: 'Trong mô hình phản ứng: 2 phân tử H<sub>2</sub> + 1 phân tử O<sub>2</sub> → các phân tử H<sub>2</sub>O. Có tổng cộng bao nhiêu nguyên tử H tham gia phản ứng?', answer: '4', unit: 'nguyên tử', calc: '2*2', explain: 'Mỗi phân tử H<sub>2</sub> có 2 nguyên tử H: 2 · 2 = 4 nguyên tử; sau phản ứng vẫn có 4 nguyên tử H trong 2 phân tử H<sub>2</sub>O.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất ban đầu bị biến đổi trong phản ứng được gọi là sản phẩm.', answer: false, explain: 'Chất ban đầu là chất phản ứng; chất mới sinh ra mới là sản phẩm.' }
  ]
});
})();
