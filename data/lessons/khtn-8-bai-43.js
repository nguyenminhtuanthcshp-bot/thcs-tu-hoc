/* KHTN 8 – Bài 43. Quần xã sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-8/bai-43', {
  objectives: [
    'Phát biểu được khái niệm quần xã sinh vật; lấy được ví dụ.',
    'Nêu được các đặc trưng cơ bản của quần xã: độ đa dạng, thành phần loài (loài ưu thế, loài đặc trưng).',
    'Nêu được một số biện pháp bảo vệ đa dạng sinh học trong quần xã.'
  ],
  intro: 'Trong một khu rừng có cây gỗ, dây leo, nấm, chim, thú, côn trùng… cùng sống với nhau. Tập hợp nhiều quần thể khác loài như vậy được gọi là gì và có những đặc điểm nào?',
  steps: [
    { title: 'Khái niệm quần xã', html: `<p><b>Quần xã sinh vật</b> là tập hợp các quần thể sinh vật thuộc <b>nhiều loài khác nhau</b>, cùng sống trong một không gian và thời gian nhất định; các sinh vật có mối quan hệ gắn bó với nhau như một thể thống nhất.</p>
      <p>Ví dụ: quần xã rừng mưa nhiệt đới, quần xã ao hồ, quần xã rạn san hô.</p>` },
    { title: 'Độ đa dạng', html: `<p><b>Độ đa dạng</b> thể hiện ở mức độ phong phú về số lượng loài và số cá thể mỗi loài. Quần xã có độ đa dạng càng cao thì càng ổn định.</p>
      <p>Ví dụ: rừng mưa nhiệt đới có độ đa dạng cao hơn nhiều so với hoang mạc hay đồng rêu.</p>`,
      svg: S.bar({ title: 'Số loài thực vật trong 1 ha (minh hoạ)', cats: ['Rừng mưa nhiệt đới', 'Rừng trồng keo', 'Hoang mạc'], series: [{ name: 'Số loài', values: [180, 25, 10], color: '#16a34a' }], yMax: 200, yStep: 40, width: 520, height: 280 }), caption: 'Số loài thực vật đếm được trong 1 ha ở ba quần xã (số liệu minh hoạ).' },
    { title: 'Thành phần loài', html: `<ul><li><b>Loài ưu thế</b>: loài có số lượng nhiều, vai trò quan trọng trong quần xã (ví dụ: cây lúa trong quần xã ruộng lúa; cây thông trong rừng thông).</li><li><b>Loài đặc trưng</b>: loài chỉ có ở một quần xã nào đó hoặc có số lượng nhiều hơn hẳn các loài khác (ví dụ: cây cọ ở vùng đồi Phú Thọ, cá cóc Tam Đảo ở Vườn quốc gia Tam Đảo).</li></ul>`,
      svg: S.pieChart({ title: 'Tỉ lệ số cây của các loài trong một khu rừng thông (số liệu minh hoạ)', parts: [{ label: 'Thông (ưu thế)', v: 70, color: '#15803d' }, { label: 'Sim, mua', v: 15, color: '#a855f7' }, { label: 'Cây bụi khác', v: 10, color: '#f59e0b' }, { label: 'Dương xỉ', v: 5, color: '#0ea5e9' }] }) },
    { title: 'Bảo vệ đa dạng sinh học', html: `<ul><li>Nguyên nhân suy giảm: phá rừng, săn bắt, khai thác quá mức, ô nhiễm môi trường, du nhập loài ngoại lai xâm hại, biến đổi khí hậu.</li><li>Biện pháp: bảo vệ rừng và trồng rừng; xây dựng khu bảo tồn, vườn quốc gia; cấm săn bắt động vật hoang dã; khai thác hợp lí; kiểm soát loài ngoại lai; tuyên truyền nâng cao ý thức.</li></ul>` }
  ],
  summary: 'Quần xã là tập hợp các quần thể khác loài cùng sống trong một không gian, thời gian, gắn bó như một thể thống nhất. Đặc trưng: độ đa dạng (số loài, số cá thể mỗi loài), thành phần loài (loài ưu thế, loài đặc trưng). Bảo vệ đa dạng sinh học giúp quần xã ổn định.',
  examples: [
    { title: 'Phân biệt quần thể – quần xã', problem: 'Rừng cọ Phú Thọ (chỉ xét cây cọ) và toàn bộ sinh vật trong rừng cọ, đâu là quần thể, đâu là quần xã?', solution: 'Tập hợp cây cọ là quần thể; toàn bộ các loài sinh vật trong rừng là quần xã.' },
    { title: 'Đọc biểu đồ', problem: 'Theo biểu đồ minh hoạ, số loài ở rừng mưa nhiệt đới gấp bao nhiêu lần rừng trồng keo?', solution: '180 : 25 = 7,2 lần.' },
    { title: 'Loài ưu thế', problem: 'Trong một khu rừng thông, cây thông chiếm 70 % số cây. Loài nào là loài ưu thế?', solution: 'Cây thông – có số lượng lớn và vai trò quan trọng nhất.' }
  ],
  exercises: [
    { question: 'Nêu hai đặc trưng cơ bản của quần xã.', hints: ['Liên quan đến số loài.', 'Liên quan đến vai trò các loài.'], solution: 'Độ đa dạng và thành phần loài (loài ưu thế, loài đặc trưng).' },
    { question: 'Một khu rừng có 2 000 cây, trong đó 1 400 cây thông. Tính tỉ lệ phần trăm cây thông.', hints: ['Lấy số cây thông chia tổng số cây.', 'Nhân 100 %.'], solution: '1 400 : 2 000 · 100 % = 70 %.' },
    { question: 'Vì sao quần xã có độ đa dạng cao thì ổn định hơn?', hints: ['Nhiều loài thì nhiều mối quan hệ dinh dưỡng.', 'Khi một loài giảm số lượng thì sao?'], solution: 'Khi có nhiều loài, nếu một loài bị suy giảm thì các loài khác có thể thay thế vai trò (ví dụ làm thức ăn), nên quần xã ít bị xáo trộn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Quần xã sinh vật gồm nhiều quần thể thuộc các loài khác nhau.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Quần xã nào thường có độ đa dạng cao nhất?', options: ['Hoang mạc', 'Đồng rêu', 'Rừng mưa nhiệt đới', 'Ruộng lúa'], answer: 2, explain: 'Rừng mưa nhiệt đới rất phong phú loài.' },
    { type: 'short', q: 'Một khu rừng có 2 500 cây, trong đó 1 750 cây thông. Cây thông chiếm bao nhiêu %?', answer: '70', unit: '%', calc: '1750/2500*100', explain: '1 750 : 2 500 · 100 = 70 %.' },
    { type: 'mcq', q: 'Cây lúa trong quần xã ruộng lúa là:', options: ['loài ưu thế', 'loài ngoại lai', 'sinh vật phân giải', 'loài kí sinh'], answer: 0, explain: 'Chiếm số lượng lớn, vai trò quan trọng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Du nhập loài ngoại lai xâm hại giúp tăng độ đa dạng của quần xã.', answer: false, explain: 'Loài ngoại lai xâm hại có thể lấn át, làm giảm đa dạng.' },
    { type: 'short', q: 'Theo biểu đồ minh hoạ, rừng mưa nhiệt đới có 180 loài, hoang mạc có 10 loài. Rừng mưa nhiều hơn bao nhiêu loài?', answer: '170', unit: 'loài', calc: '180-10', explain: '180 − 10 = 170 loài.' },
    { type: 'short', q: 'Theo biểu đồ minh hoạ, số loài ở rừng mưa nhiệt đới (180) gấp bao nhiêu lần rừng trồng keo (25)?', answer: '7,2', unit: 'lần', calc: '180/25', explain: '180 : 25 = 7,2 lần.' },
    { type: 'mcq', q: 'Biện pháp nào góp phần bảo vệ đa dạng sinh học?', options: ['Đốt rừng làm nương rẫy', 'Xây dựng khu bảo tồn', 'Săn bắt động vật hoang dã', 'Thả loài ngoại lai'], answer: 1, explain: 'Khu bảo tồn bảo vệ nơi sống của nhiều loài.' }
  ]
});
})();
