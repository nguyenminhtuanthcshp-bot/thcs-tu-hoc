/* KHTN 6 – Bài 40. Lực là gì? Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-40', {
  objectives: [
    'Nêu được lực là sự đẩy hoặc sự kéo của vật này lên vật khác; lấy được ví dụ về lực.',
    'Nêu được tác dụng của lực: làm thay đổi tốc độ, hướng chuyển động, làm vật biến dạng.',
    'Phân biệt được lực tiếp xúc và lực không tiếp xúc; biết đo lực bằng lực kế với đơn vị niutơn (N).'
  ],
  intro: 'Đá quả bóng, kéo cánh cửa, bóp quả bóng cao su, nam châm hút chiếc đinh… Trong tất cả các ví dụ đó đều có <b>lực</b> tác dụng.',
  steps: [
    { title: 'Lực là gì?', html: `<p><b>Lực</b> là sự <b>đẩy</b> hoặc sự <b>kéo</b> của vật này lên vật khác.</p>
      <ul><li>Tay đẩy xe: tay tác dụng lực đẩy lên xe.</li><li>Trâu kéo cày: trâu tác dụng lực kéo lên cày.</li><li>Nam châm hút đinh sắt: nam châm tác dụng lực hút (kéo) lên đinh.</li></ul>
      <div class="box key">Khi nói về lực, luôn phải chỉ rõ: vật nào tác dụng lực lên vật nào.</div>` },
    { title: 'Tác dụng của lực', html: `<p>Lực tác dụng lên một vật có thể làm:</p><ul><li><b>Thay đổi tốc độ</b> chuyển động: quả bóng đang đứng yên bị đá thì lăn đi; xe đang chạy bị phanh thì chậm lại.</li>
      <li><b>Thay đổi hướng</b> chuyển động: thủ môn đấm bóng bay chệch hướng.</li><li><b>Biến dạng</b> vật (thay đổi hình dạng): bóp quả bóng cao su bị méo, kéo lò xo dãn ra.</li></ul>
      <p>Có khi lực gây ra đồng thời nhiều tác dụng: đá quả bóng vừa làm bóng biến dạng vừa làm bóng bay đi.</p>` },
    { title: 'Lực tiếp xúc và lực không tiếp xúc', html: `<table class="tbl"><tr><th>Loại lực</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
      <tr><td><b>Lực tiếp xúc</b></td><td>Vật gây ra lực có tiếp xúc với vật chịu lực</td><td>Tay đẩy cửa, chân đá bóng, gió thổi buồm</td></tr>
      <tr><td><b>Lực không tiếp xúc</b></td><td>Vật gây ra lực không tiếp xúc với vật chịu lực</td><td>Nam châm hút đinh từ xa, Trái Đất hút quả táo rơi</td></tr></table>` },
    { title: 'Đo lực: lực kế và đơn vị niutơn', html: `<p>Đơn vị đo lực là <b>niutơn</b>, kí hiệu <b>N</b>. Dụng cụ đo lực là <b>lực kế</b> (lực kế lò xo).</p>
      <ol><li>Ước lượng độ lớn lực để chọn lực kế có giới hạn đo (GHĐ) và độ chia nhỏ nhất (ĐCNN) phù hợp.</li><li>Hiệu chỉnh kim chỉ về vạch 0 khi chưa đo.</li>
      <li>Cầm lực kế sao cho lò xo nằm dọc theo phương của lực cần đo.</li><li>Đọc số chỉ khi kim đứng yên, mắt nhìn vuông góc với vạch chia.</li></ol>`,
      svg: S.row([{ svg: S.forceMeter({ max: 5, step: 1, minor: 5, value: 2.4, load: 'Vật' }), caption: 'GHĐ 5 N, ĐCNN 0,2 N' }, { svg: S.forceMeter({ max: 10, step: 2, minor: 4, value: 7, load: 'Vật' }), caption: 'GHĐ 10 N, ĐCNN 0,5 N' }]),
      caption: 'Hai lực kế: lực kế trái chỉ 2,4 N; lực kế phải chỉ 7 N.' }
  ],
  summary: 'Lực là sự đẩy hoặc kéo của vật này lên vật khác. Lực có thể làm thay đổi tốc độ, hướng chuyển động hoặc làm vật biến dạng. Lực tiếp xúc cần có sự tiếp xúc giữa hai vật; lực không tiếp xúc thì không (lực hút của nam châm, của Trái Đất). Đo lực bằng lực kế, đơn vị niutơn (N).',
  examples: [
    { title: 'Tác dụng của lực', problem: 'Nêu tác dụng của lực trong mỗi trường hợp: a) Phanh xe đạp, xe chậm dần; b) Gió thổi làm cành cây cong; c) Vợt đánh trả quả cầu lông bay ngược lại.', solution: 'a) Thay đổi <b>tốc độ</b>. b) Làm <b>biến dạng</b>. c) Thay đổi <b>hướng</b> (và tốc độ) chuyển động.' },
    { title: 'Đọc lực kế', problem: 'Lực kế có GHĐ 5 N, giữa hai số liền nhau (1 N) có 5 khoảng chia. Kim chỉ ở vạch thứ 2 sau số 2. Số chỉ là bao nhiêu?', solution: 'ĐCNN = 1 : 5 = 0,2 N. Số chỉ: 2 + 2 × 0,2 = <b>2,4 N</b>.' },
    { title: 'Tiếp xúc hay không', problem: 'Quả dừa rơi từ trên cây xuống. Lực làm quả dừa rơi là lực tiếp xúc hay không tiếp xúc?', solution: 'Lực hút của Trái Đất – <b>lực không tiếp xúc</b>.' }
  ],
  exercises: [
    { question: 'Lực kế có GHĐ 10 N; giữa hai số ghi liền nhau 0 và 2 có 4 khoảng chia. Tính ĐCNN. Kim chỉ ở vạch thứ 2 sau số 6 thì lực đo được là bao nhiêu?', hints: ['ĐCNN = 2 N : 4.', 'Số chỉ = 6 + 2 × ĐCNN.'], solution: 'ĐCNN = 2 : 4 = 0,5 N. Số chỉ: 6 + 2 × 0,5 = <b>7 N</b>.' },
    { question: 'Kể một ví dụ lực vừa làm vật biến dạng vừa làm thay đổi chuyển động của vật.', hints: ['Nghĩ về các môn thể thao với bóng.', 'Khi va chạm, quả bóng bị méo.'], solution: 'Cầu thủ sút quả bóng: bóng bị <b>méo</b> đi một chút (biến dạng) và <b>bay đi</b> nhanh (thay đổi tốc độ).' },
    { question: 'Muốn đo lực kéo khoảng 3 N, nên chọn lực kế GHĐ 2 N hay 5 N? Vì sao?', hints: ['GHĐ là lực lớn nhất đo được.', 'Nếu lực lớn hơn GHĐ thì sao?'], solution: 'Chọn lực kế <b>GHĐ 5 N</b>. Lực kế 2 N không đo được lực 3 N (vượt GHĐ, có thể làm hỏng lò xo).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Lực là:', options: ['Sự đẩy hoặc sự kéo của vật này lên vật khác', 'Khối lượng của vật', 'Tốc độ của vật', 'Thể tích của vật'], answer: 0, explain: 'Định nghĩa lực.' },
    { type: 'mcq', q: 'Đơn vị đo lực là:', options: ['Niutơn (N)', 'Kilôgam (kg)', 'Mét (m)', 'Giây (s)'], answer: 0, explain: 'Lực đo bằng niutơn.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nam châm hút đinh sắt từ xa là lực tiếp xúc.', answer: false, explain: 'Nam châm và đinh không chạm nhau – lực không tiếp xúc.' },
    { type: 'mcq', q: 'Bóp mạnh quả bóng cao su làm quả bóng méo đi. Lực đã:', options: ['Làm quả bóng biến dạng', 'Làm quả bóng chuyển động nhanh hơn', 'Không có tác dụng', 'Làm quả bóng nặng hơn'], answer: 0, explain: 'Thay đổi hình dạng – biến dạng.' },
    { type: 'short', q: 'Lực kế trong hình chỉ bao nhiêu niutơn? (dùng dấu phẩy cho số thập phân)', svg: S.forceMeter({ max: 5, step: 1, minor: 5, value: 3.6, load: 'Vật' }), answer: '3,6', unit: 'N', explain: 'ĐCNN 0,2 N; kim ở vạch thứ 3 sau số 3: 3 + 3 × 0,2 = 3,6 N.' },
    { type: 'mcq', q: 'Dụng cụ dùng để đo lực là:', options: ['Lực kế', 'Cân đồng hồ', 'Nhiệt kế', 'Thước dây'], answer: 0, explain: 'Lực kế lò xo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lực có thể làm thay đổi hướng chuyển động của vật.', answer: true, explain: 'Ví dụ thủ môn đẩy bóng chệch hướng.' },
    { type: 'short', q: 'Lực kế có vạch 0, 1, 2, 3 N và giữa hai số liền nhau có 10 khoảng chia. ĐCNN là bao nhiêu N? (dùng dấu phẩy)', answer: '0,1', unit: 'N', explain: '1 : 10 = 0,1 N.' }
  ]
});
})();
