/* KHTN 7 – Bài 12. Sóng âm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-12', {
  objectives: [
    'Nhận biết được nguồn âm là vật dao động; mô tả được các bước tiến hành thí nghiệm tạo sóng âm.',
    'Giải thích được sự truyền sóng âm trong không khí (các lớp nén, dãn).',
    'Nêu được âm truyền được trong chất rắn, lỏng, khí, không truyền được trong chân không; so sánh tốc độ truyền âm trong các môi trường.'
  ],
  intro: 'Đặt tay lên cổ họng rồi nói “a…”, em sẽ thấy cổ họng rung nhẹ. Mọi âm thanh đều bắt nguồn từ những rung động như thế và được truyền đến tai ta qua không khí.',
  steps: [
    { title: 'Nguồn âm là vật dao động', html: `<p>Vật phát ra âm gọi là <b>nguồn âm</b>. Khi phát ra âm, các vật đều <b>dao động</b> – chuyển động qua lại quanh một vị trí cân bằng.</p>
      <ul><li>Gõ âm thoa: hai nhánh âm thoa dao động (chạm nhẹ vào mặt nước thấy nước bắn tung).</li><li>Gảy đàn: dây đàn dao động. Gõ trống: mặt trống dao động (hạt gạo trên mặt trống nảy lên).</li><li>Khi nói: dây thanh quản dao động.</li></ul>` },
    { title: 'Sóng âm truyền trong không khí', html: `<p>Khi nhánh âm thoa dao động, nó lần lượt nén và làm dãn lớp không khí sát bên. Lớp không khí này lại tác động lên lớp kế tiếp… Cứ như vậy, dao động được lan truyền ra xa tạo thành <b>sóng âm</b>.</p>
      <div class="box key">Sóng âm là các dao động lan truyền trong môi trường. Các phần tử không khí chỉ dao động qua lại tại chỗ, không đi theo sóng đến tai ta.</div>`,
      svg: S.soundWave(), caption: 'Sóng âm trong không khí gồm các lớp nén (phần tử dày đặc) và lớp dãn (phần tử thưa) nối tiếp nhau.' },
    { title: 'Môi trường truyền âm', html: `<p>Âm truyền được qua <b>chất rắn, chất lỏng và chất khí</b>. Âm <b>không truyền được trong chân không</b> vì ở đó không có các phần tử để dao động.</p>
      <p>Thí nghiệm: đặt một chuông điện đang reo trong bình kín rồi hút dần không khí ra – tiếng chuông nhỏ dần rồi gần như không nghe thấy, dù vẫn thấy búa chuông gõ.</p>
      <div class="box note">Trên Mặt Trăng không có không khí, các nhà du hành phải nói chuyện với nhau qua bộ đàm (sóng vô tuyến).</div>` },
    { title: 'Tốc độ truyền âm', html: `<p>Âm truyền trong chất rắn nhanh hơn trong chất lỏng, trong chất lỏng nhanh hơn trong chất khí.</p>
      <table class="tbl"><tr><th>Môi trường</th><th>Tốc độ truyền âm gần đúng</th></tr><tr><td>Không khí (20 °C)</td><td>343 m/s</td></tr><tr><td>Nước</td><td>1 500 m/s</td></tr><tr><td>Thép</td><td>khoảng 5 000 – 6 000 m/s</td></tr></table>
      <p>Quãng đường âm truyền đi: s = v · t.</p>`,
      svg: S.bar({ cats: ['Không khí', 'Nước', 'Thép'], series: [{ name: 'Tốc độ (m/s)', values: [343, 1500, 5900] }], yMax: 6000, yStep: 1000, title: 'Tốc độ truyền âm (m/s, gần đúng)', width: 520, height: 280 }),
      caption: 'Âm truyền trong thép nhanh gấp khoảng 17 lần trong không khí.' }
  ],
  summary: 'Nguồn âm là vật dao động. Sóng âm là dao động lan truyền trong môi trường (các lớp nén, dãn). Âm truyền qua rắn, lỏng, khí, không truyền qua chân không. Tốc độ: rắn > lỏng > khí (không khí ≈ 343 m/s, nước ≈ 1 500 m/s).',
  examples: [
    { title: 'Nhận biết nguồn âm', problem: 'Khi thổi sáo, bộ phận nào dao động phát ra âm?', solution: 'Cột không khí bên trong ống sáo dao động phát ra âm.' },
    { title: 'Nghe tiếng sấm', problem: 'Em thấy tia chớp và 3 s sau mới nghe tiếng sấm. Tính khoảng cách từ chỗ có sét đến em (lấy tốc độ âm trong không khí 340 m/s).', solution: 'Ánh sáng đến gần như tức thời. s = v · t = 340 · 3 = 1 020 m ≈ 1 km.' },
    { title: 'Áp tai xuống đường ray', problem: 'Vì sao áp tai xuống đường ray có thể nghe thấy tiếng tàu từ xa sớm hơn so với nghe trong không khí?', solution: 'Âm truyền trong thép (chất rắn) nhanh hơn và ít bị yếu đi hơn trong không khí, nên đến tai sớm hơn và rõ hơn.' }
  ],
  exercises: [
    { question: 'Kể tên bộ phận dao động phát ra âm trong mỗi trường hợp: đánh trống, gảy đàn ghi-ta, con ong bay vo ve.', hints: ['Tìm bộ phận rung khi phát ra âm.', 'Ở con ong, bộ phận nào chuyển động rất nhanh?'], solution: 'Mặt trống; dây đàn (và thân đàn, không khí trong hộp đàn); đôi cánh ong.' },
    { question: 'Một người gõ vào một đầu ống thép dài. Âm truyền trong không khí mất 1 s để đến đầu kia. Nếu tốc độ âm trong không khí là 340 m/s thì ống dài bao nhiêu? Âm truyền trong thép đến trước hay sau?', hints: ['s = v · t với âm trong không khí.', 'So sánh tốc độ âm trong thép và trong không khí.'], solution: 'Ống dài 340 · 1 = 340 m. Âm truyền trong thép đến trước (vì truyền nhanh hơn nhiều).' },
    { question: 'Vì sao các nhà du hành vũ trụ trên Mặt Trăng không thể nói chuyện trực tiếp với nhau dù đứng gần?', hints: ['Mặt Trăng có khí quyển không?', 'Âm có truyền được trong chân không không?'], solution: 'Mặt Trăng gần như không có không khí (chân không) nên âm không truyền được; họ phải dùng bộ đàm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các vật phát ra âm đều dao động.', answer: true, explain: 'Nguồn âm là vật dao động.' },
    { type: 'mcq', q: 'Âm KHÔNG truyền được trong môi trường nào?', options: ['Nước', 'Thép', 'Không khí', 'Chân không'], answer: 3, explain: 'Chân không không có phần tử để dao động.' },
    { type: 'mcq', q: 'Sắp xếp tốc độ truyền âm từ nhỏ đến lớn:', options: ['Thép, nước, không khí', 'Không khí, nước, thép', 'Nước, không khí, thép', 'Không khí, thép, nước'], answer: 1, explain: 'Khí < lỏng < rắn.' },
    { type: 'short', q: 'Thấy chớp 2 s sau mới nghe tiếng sấm. Tính khoảng cách đến chỗ sét đánh (m), lấy tốc độ âm trong không khí 340 m/s.', answer: '680', unit: 'm', calc: '340*2', explain: 's = 340 · 2 = 680 m.' },
    { type: 'short', q: 'Âm truyền trong nước với tốc độ 1 500 m/s. Sau 4 s âm đi được bao nhiêu mét?', answer: '6000', unit: 'm', calc: '1500*4', explain: '1 500 · 4 = 6 000 m.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi sóng âm truyền trong không khí, các phần tử không khí di chuyển theo sóng từ nguồn âm đến tai ta.', answer: false, explain: 'Các phần tử chỉ dao động qua lại tại chỗ; dao động mới được truyền đi.' },
    { type: 'short', q: 'Âm truyền trong không khí với tốc độ 340 m/s. Thời gian âm đi hết 1 020 m là bao nhiêu giây?', answer: '3', unit: 's', calc: '1020/340', explain: 't = 1 020 : 340 = 3 s.' },
    { type: 'mcq', q: 'Khi ta nói, bộ phận dao động phát ra âm là:', options: ['lưỡi', 'môi', 'dây thanh quản', 'răng'], answer: 2, explain: 'Dây thanh quản dao động khi luồng khí đi qua.' }
  ]
});
})();
