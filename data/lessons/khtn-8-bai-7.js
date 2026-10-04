/* KHTN 8 – Bài 7. Tốc độ phản ứng và chất xúc tác. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-7', {
  objectives: [
    'Nêu được khái niệm tốc độ phản ứng; so sánh được phản ứng xảy ra nhanh, chậm.',
    'Trình bày được ảnh hưởng của nồng độ, nhiệt độ, diện tích bề mặt tiếp xúc đến tốc độ phản ứng.',
    'Nêu được khái niệm chất xúc tác và vai trò của chất xúc tác.',
    'Vận dụng giải thích một số hiện tượng trong đời sống (bảo quản thực phẩm, nhóm bếp…).'
  ],
  intro: 'Pháo hoa nổ trong tích tắc, còn chiếc xe đạp để ngoài mưa phải nhiều tháng mới gỉ. Vì sao có phản ứng xảy ra rất nhanh, có phản ứng lại rất chậm? Và làm thế nào để điều khiển nhanh, chậm theo ý muốn?',
  steps: [
    { title: 'Tốc độ phản ứng', html: `<p><b>Tốc độ phản ứng</b> là đại lượng đặc trưng cho sự nhanh hay chậm của phản ứng hoá học, được xác định bằng sự thay đổi lượng chất phản ứng hoặc sản phẩm trong một đơn vị thời gian.</p>
      <ul><li>Phản ứng nhanh: đốt cháy gas, pháo nổ, kết tủa BaSO<sub>4</sub>.</li><li>Phản ứng chậm: sắt gỉ, lên men rượu, thức ăn ôi thiu.</li></ul>
      <p>Ví dụ: trong 20 giây thu được 40 mL khí ⇒ tốc độ trung bình tạo khí là 40 : 20 = 2 mL/s.</p>` },
    { title: 'Ảnh hưởng của nồng độ', html: `<p>Cho hai viên kẽm như nhau vào hai ống nghiệm đựng dung dịch HCl có nồng độ khác nhau: ống có dung dịch <b>đặc hơn</b> sủi bọt khí mạnh hơn.</p>
      <div class="box key">Nồng độ chất phản ứng càng lớn, tốc độ phản ứng càng nhanh.</div>`,
      svg: S.tubesCompare({ title: 'Kẽm tác dụng với dung dịch HCl có nồng độ khác nhau', tubes: [{ label: 'HCl loãng', sub: 'ít bọt khí', liquid: '#e0f2fe', bubbles: 4, solid: 'chunk', solidColor: '#9ca3af' }, { label: 'HCl đặc hơn', sub: 'nhiều bọt khí', liquid: '#bfdbfe', bubbles: 18, solid: 'chunk', solidColor: '#9ca3af' }] }) },
    { title: 'Ảnh hưởng của nhiệt độ và diện tích bề mặt', html: `<ul><li><b>Nhiệt độ</b> càng cao, tốc độ phản ứng càng nhanh. Ví dụ: thức ăn để ngoài trời nhanh hỏng hơn thức ăn trong tủ lạnh.</li><li><b>Diện tích bề mặt tiếp xúc</b> càng lớn (chất rắn càng nhỏ, mịn), tốc độ phản ứng càng nhanh. Ví dụ: đá vôi dạng bột phản ứng với HCl nhanh hơn đá vôi dạng viên; than chẻ nhỏ cháy nhanh hơn khúc than to.</li></ul>`,
      svg: [S.tubesCompare({ title: 'Đá vôi (CaCO₃) tác dụng với dung dịch HCl cùng nồng độ', tubes: [{ label: 'Dạng viên', sub: 'bọt khí chậm', liquid: '#e0f2fe', bubbles: 5, solid: 'chunk', solidColor: '#f5f5f4' }, { label: 'Dạng bột', sub: 'bọt khí nhanh', liquid: '#e0f2fe', bubbles: 20, solid: 'powder', solidColor: '#f5f5f4' }] }),
        S.xyGraph({ series: [{ pts: [[0, 0], [20, 36], [40, 56], [60, 66], [80, 70], [100, 72], [120, 72]], label: 'Dạng bột', color: '#dc2626' }, { pts: [[0, 0], [20, 14], [40, 27], [60, 38], [80, 48], [100, 56], [120, 62]], label: 'Dạng viên', color: '#2563eb' }], xmax: 130, ymax: 90, xstep: 20, ystep: 10, xlabel: 't (s)', ylabel: 'V khí CO₂ (mL)', label: 'Thể tích khí thu được theo thời gian (số liệu minh hoạ)' })],
      caption: 'Cùng khối lượng đá vôi: dạng bột có diện tích tiếp xúc lớn hơn nên khí thoát ra nhanh hơn (đồ thị dùng số liệu minh hoạ).' },
    { title: 'Chất xúc tác', html: `<p><b>Chất xúc tác</b> là chất làm tăng tốc độ phản ứng nhưng <b>không bị biến đổi</b> (không bị tiêu hao) sau phản ứng.</p>
      <p>Ví dụ: dung dịch hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>) phân huỷ rất chậm; thêm một ít bột manganese dioxide (MnO<sub>2</sub>) thì sủi bọt khí oxygen mạnh:</p>
      <p class="math">2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub> &nbsp;(xúc tác MnO<sub>2</sub>)</p>
      <p>Enzyme trong cơ thể là chất xúc tác sinh học, ví dụ enzyme amylase trong nước bọt giúp biến đổi tinh bột.</p>`,
      svg: S.tubesCompare({ tubes: [{ label: 'H₂O₂', sub: 'rất ít bọt khí', liquid: '#f1f5f9', bubbles: 2 }, { label: 'H₂O₂ + MnO₂', sub: 'sủi bọt mạnh', liquid: '#f1f5f9', bubbles: 22, solid: 'powder', solidColor: '#1f2937' }], title: 'Ảnh hưởng của chất xúc tác MnO₂' }) },
    { title: 'Vận dụng trong đời sống', html: `<ul><li>Bảo quản thực phẩm trong tủ lạnh (giảm nhiệt độ) để làm chậm quá trình ôi thiu.</li><li>Chẻ nhỏ củi, quạt thêm không khí (tăng diện tích tiếp xúc, tăng nồng độ oxygen) để bếp cháy mạnh.</li><li>Nấu thức ăn bằng nồi áp suất (nhiệt độ cao hơn) cho nhanh chín.</li><li>Sản xuất công nghiệp dùng chất xúc tác để tăng năng suất.</li></ul>` }
  ],
  summary: 'Tốc độ phản ứng đặc trưng cho sự nhanh, chậm của phản ứng. Tăng nồng độ, tăng nhiệt độ, tăng diện tích bề mặt tiếp xúc, dùng chất xúc tác đều làm tăng tốc độ phản ứng. Chất xúc tác không bị tiêu hao sau phản ứng.',
  examples: [
    { title: 'Tính tốc độ trung bình', problem: 'Trong 50 giây đầu thu được 30 mL khí. Tính tốc độ trung bình tạo khí.', solution: 'v = 30 : 50 = 0,6 (mL/s).' },
    { title: 'Giải thích hiện tượng', problem: 'Vì sao nhóm bếp than người ta thường quạt gió vào bếp?', solution: 'Quạt gió cung cấp thêm oxygen (tăng nồng độ chất phản ứng) nên phản ứng cháy xảy ra nhanh hơn.' },
    { title: 'Đọc đồ thị', problem: 'Theo đồ thị ở bước 3, sau 40 s thể tích khí thu được ở ống đá vôi dạng bột nhiều hơn ống dạng viên bao nhiêu mL?', solution: '56 − 27 = 29 (mL). Đá vôi dạng bột phản ứng nhanh hơn (số liệu minh hoạ).' }
  ],
  exercises: [
    { question: 'Nêu hai cách làm tăng tốc độ phản ứng giữa đá vôi và dung dịch HCl.', hints: ['Nghĩ về kích thước hạt đá vôi.', 'Nghĩ về nồng độ acid hoặc nhiệt độ.'], solution: 'Ví dụ: nghiền nhỏ đá vôi; dùng dung dịch HCl đặc hơn; đun nóng nhẹ.' },
    { question: 'Vì sao thực phẩm để trong ngăn đá tủ lạnh giữ được lâu hơn?', hints: ['Ôi thiu là các phản ứng hoá học (có vi sinh vật tham gia).', 'Nhiệt độ thấp ảnh hưởng thế nào đến tốc độ phản ứng?'], solution: 'Nhiệt độ thấp làm giảm tốc độ các phản ứng gây ôi thiu nên thực phẩm được giữ lâu hơn.' },
    { question: 'Sau phản ứng phân huỷ H<sub>2</sub>O<sub>2</sub>, lọc lấy lại bột MnO<sub>2</sub>, sấy khô rồi cân thấy khối lượng không đổi. Điều đó chứng tỏ gì?', hints: ['Nhớ lại định nghĩa chất xúc tác.', 'MnO<sub>2</sub> có bị tiêu hao không?'], solution: 'MnO<sub>2</sub> không bị tiêu hao sau phản ứng, nó đóng vai trò chất xúc tác.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất xúc tác bị tiêu hao hoàn toàn sau phản ứng.', answer: false, explain: 'Chất xúc tác không bị biến đổi sau phản ứng.' },
    { type: 'mcq', q: 'Yếu tố nào làm tăng tốc độ phản ứng?', options: ['Giảm nhiệt độ', 'Tăng nồng độ chất phản ứng', 'Dùng chất rắn dạng khối lớn', 'Pha loãng dung dịch'], answer: 1, explain: 'Nồng độ lớn hơn thì tốc độ phản ứng nhanh hơn.' },
    { type: 'short', q: 'Trong 40 giây thu được 60 mL khí. Tốc độ trung bình tạo khí là bao nhiêu mL/s?', answer: '1,5', unit: 'mL/s', calc: '60/40', explain: 'v = 60 : 40 = 1,5 mL/s.' },
    { type: 'mcq', q: 'Đá vôi dạng nào phản ứng với dung dịch HCl nhanh nhất?', options: ['Một viên lớn', 'Vài viên nhỏ', 'Dạng bột mịn', 'Tốc độ như nhau'], answer: 2, explain: 'Dạng bột có diện tích bề mặt tiếp xúc lớn nhất.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bảo quản thực phẩm trong tủ lạnh là làm chậm tốc độ phản ứng bằng cách giảm nhiệt độ.', answer: true, explain: 'Nhiệt độ thấp làm chậm các phản ứng gây hỏng thực phẩm.' },
    { type: 'short', q: 'Một phản ứng tạo ra 0,02 mol khí trong 10 giây. Tốc độ trung bình tạo khí là bao nhiêu mol/s?', answer: '0,002', unit: 'mol/s', calc: '0.02/10', explain: '0,02 : 10 = 0,002 mol/s.' },
    { type: 'mcq', q: 'Trong phản ứng 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>, MnO<sub>2</sub> đóng vai trò:', options: ['chất phản ứng', 'sản phẩm', 'chất xúc tác', 'dung môi'], answer: 2, explain: 'MnO<sub>2</sub> làm phản ứng nhanh hơn và không bị tiêu hao.' },
    { type: 'short', q: 'Theo đồ thị minh hoạ ở bước 3, sau 20 s ống đá vôi dạng bột thu được 36 mL khí, dạng viên thu được 14 mL. Chênh lệch là bao nhiêu mL?', answer: '22', unit: 'mL', calc: '36-14', explain: '36 − 14 = 22 mL.' }
  ]
});
})();
