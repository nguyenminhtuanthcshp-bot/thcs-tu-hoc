/* KHTN 9 – Bài 17. Một số dạng năng lượng tái tạo. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-17', {
  objectives: [
    'Nêu được khái niệm năng lượng tái tạo và kể được một số dạng: mặt trời, gió, nước, sinh khối, địa nhiệt.',
    'Mô tả được sơ lược cách khai thác và chuyển hoá của các dạng năng lượng tái tạo.',
    'Nêu được ưu điểm, hạn chế của năng lượng tái tạo và vai trò của chúng với phát triển bền vững.'
  ],
  intro: 'Ninh Thuận, Bình Thuận có những cánh đồng pin mặt trời và tuabin gió trải dài. Sơn La, Hoà Bình có các nhà máy thuỷ điện lớn. Đó là những nguồn năng lượng không cạn kiệt – <b>năng lượng tái tạo</b>.',
  steps: [
    { title: 'Năng lượng tái tạo là gì?', html: `<p><b>Năng lượng tái tạo</b> là năng lượng từ các nguồn liên tục được bổ sung trong tự nhiên, gần như không cạn kiệt: <b>mặt trời, gió, nước (thuỷ năng), sinh khối, địa nhiệt</b>, sóng và thuỷ triều.</p>
      <p>Khi khai thác, chúng thải rất ít hoặc không thải khí nhà kính.</p>`,
      svg: S.renewables({ items: ['mat-troi', 'gio', 'nuoc', 'dia-nhiet', 'sinh-khoi'] }), caption: 'Một số dạng năng lượng tái tạo.' },
    { title: 'Khai thác các nguồn năng lượng', html: `<table><tr><th>Nguồn</th><th>Thiết bị</th><th>Chuyển hoá</th></tr><tr><td>Mặt trời</td><td>pin mặt trời</td><td>quang năng → điện</td></tr><tr><td>Mặt trời</td><td>bình nước nóng</td><td>quang năng → nhiệt</td></tr><tr><td>Gió</td><td>tuabin gió</td><td>động năng gió → điện</td></tr><tr><td>Nước</td><td>thuỷ điện</td><td>thế năng nước → điện</td></tr><tr><td>Sinh khối</td><td>lò đốt, hầm biogas</td><td>hoá năng → nhiệt, điện</td></tr><tr><td>Địa nhiệt</td><td>nhà máy địa nhiệt</td><td>nhiệt lòng đất → điện</td></tr></table>` },
    { title: 'Ưu điểm và hạn chế', html: `<ul><li><b>Ưu điểm:</b> không cạn kiệt; ít phát thải khí nhà kính và chất ô nhiễm; chi phí vận hành thấp.</li><li><b>Hạn chế:</b> phụ thuộc thời tiết (nắng, gió); vốn đầu tư ban đầu lớn; cần diện tích lớn; thuỷ điện lớn có thể làm ngập rừng, ảnh hưởng hệ sinh thái sông.</li></ul>`,
      svg: S.bar({ title: 'Công suất một tấm pin mặt trời trong ngày (số liệu minh hoạ)', cats: ['6 h', '9 h', '12 h', '15 h', '18 h'], series: [{ name: 'P (W)', values: [20, 250, 400, 260, 15], color: '#f59e0b' }], yMax: 450, yStep: 100, width: 560, height: 270 }), caption: 'Công suất pin mặt trời thay đổi theo cường độ nắng trong ngày (số liệu minh hoạ).' },
    { title: 'Tính toán đơn giản', html: `<p>Một hệ pin mặt trời mái nhà công suất 3 kW, trung bình hoạt động tương đương 4 giờ nắng đầy đủ mỗi ngày:</p>
      <p class="math">W = P · t = 3 kW · 4 h = 12 kW·h mỗi ngày</p>
      <p><i>(Số liệu minh hoạ; thực tế phụ thuộc vùng, mùa và thời tiết.)</i></p>` }
  ],
  summary: 'Năng lượng tái tạo đến từ nguồn liên tục được bổ sung: mặt trời, gió, nước, sinh khối, địa nhiệt, sóng biển. Ưu điểm: không cạn kiệt, ít ô nhiễm. Hạn chế: phụ thuộc thời tiết, chi phí đầu tư lớn. Phát triển năng lượng tái tạo góp phần giảm phát thải và phát triển bền vững.',
  examples: [
    { title: 'Chuyển hoá năng lượng', problem: 'Nêu sự chuyển hoá năng lượng ở tuabin gió.', solution: 'Động năng của gió → cơ năng (cánh quạt quay) → năng lượng điện (máy phát).' },
    { title: 'Điện năng pin mặt trời', problem: 'Hệ pin mặt trời 5 kW hoạt động tương đương 4 giờ/ngày. Tính điện năng trong 30 ngày.', solution: 'W = 5 · 4 · 30 = 600 kW·h.' },
    { title: 'Sinh khối', problem: 'Kể hai nguồn sinh khối có thể dùng để sản xuất năng lượng ở nông thôn Việt Nam.', solution: 'Rơm rạ, trấu, bã mía, phân gia súc (hầm biogas), gỗ vụn.' }
  ],
  exercises: [
    { question: 'Vì sao năng lượng gió được coi là năng lượng tái tạo?', hints: ['Gió do đâu mà có?', 'Gió có bị cạn kiệt khi khai thác không?'], solution: 'Gió hình thành liên tục do Mặt Trời làm nóng không khí không đều; khai thác không làm cạn kiệt nguồn gió.' },
    { question: 'Nêu một hạn chế của điện mặt trời và cách khắc phục.', hints: ['Ban đêm và trời mây thì sao?', 'Có thể lưu trữ điện bằng gì?'], solution: 'Không phát điện vào ban đêm, giảm khi trời mây. Khắc phục: dùng pin lưu trữ (acquy), kết hợp nhiều nguồn điện, nối lưới.' },
    { question: 'Tuabin gió 2 MW chạy đủ công suất trong 10 giờ cho bao nhiêu MW·h điện?', hints: ['W = P · t.', '2 · 10 = ?'], solution: '20 MW·h (= 20 000 kW·h).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năng lượng gió là năng lượng tái tạo.', answer: true, explain: 'Gió được bổ sung liên tục trong tự nhiên.' },
    { type: 'mcq', q: 'Pin mặt trời biến đổi trực tiếp:', options: ['quang năng thành năng lượng điện', 'nhiệt năng thành cơ năng', 'hoá năng thành điện', 'cơ năng thành điện'], answer: 0, explain: 'Pin quang điện biến ánh sáng thành điện.' },
    { type: 'mcq', q: 'Nguồn nào KHÔNG phải năng lượng tái tạo?', options: ['Địa nhiệt', 'Sinh khối', 'Khí tự nhiên', 'Thuỷ triều'], answer: 2, explain: 'Khí tự nhiên là nhiên liệu hoá thạch.' },
    { type: 'short', q: 'Hệ pin mặt trời 3 kW hoạt động tương đương 5 giờ/ngày tạo ra bao nhiêu kW·h mỗi ngày?', answer: '15', unit: 'kW·h', calc: '3*5', explain: '3 · 5 = 15 kW·h.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Điện mặt trời không phụ thuộc vào thời tiết.', answer: false, explain: 'Trời mây, ban đêm làm giảm hoặc dừng phát điện.' },
    { type: 'mcq', q: 'Ở nhà máy thuỷ điện, năng lượng được khai thác là:', options: ['thế năng của nước ở hồ chứa trên cao', 'nhiệt năng của nước', 'hoá năng của nước', 'quang năng'], answer: 0, explain: 'Nước từ trên cao chảy xuống làm quay tuabin.' },
    { type: 'short', q: 'Tuabin gió 1,5 MW chạy đủ công suất trong 8 giờ cho bao nhiêu MW·h?', answer: '12', unit: 'MW·h', calc: '1.5*8', explain: '1,5 · 8 = 12 MW·h.' },
    { type: 'mcq', q: 'Hầm biogas sản xuất khí đốt từ:', options: ['than đá', 'chất thải hữu cơ (phân, rác hữu cơ)', 'cát', 'nước biển'], answer: 1, explain: 'Chất thải hữu cơ phân huỷ yếm khí tạo khí sinh học (chủ yếu CH<sub>4</sub>).' }
  ]
});
})();
