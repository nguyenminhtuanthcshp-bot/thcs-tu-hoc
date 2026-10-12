/* LS&ĐL 6 – Địa lí, Bài 1. Hệ thống kinh, vĩ tuyến. Toạ độ địa lí. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-1', {
  objectives: [
    'Xác định được trên bản đồ và quả Địa Cầu: kinh tuyến gốc, Xích đạo, các bán cầu.',
    'Hiểu được kinh tuyến, vĩ tuyến, kinh độ, vĩ độ.',
    'Ghi được toạ độ địa lí của một địa điểm trên bản đồ.',
    'Tính được số kinh tuyến, vĩ tuyến theo khoảng cách cho trước.'
  ],
  intro: 'Để tìm một con tàu giữa đại dương mênh mông, người ta không nói “gần hòn đảo kia” mà đọc hai con số, chẳng hạn 10°B, 115°Đ. Đó là <b>toạ độ địa lí</b> – “địa chỉ” chính xác của mọi điểm trên Trái Đất.',
  steps: [
    { title: 'Kinh tuyến và vĩ tuyến', html: `<ul><li><b>Kinh tuyến</b>: nửa đường tròn nối cực Bắc với cực Nam. Kinh tuyến gốc (0°) đi qua đài thiên văn Grin-uých (Luân Đôn, Anh).</li><li><b>Vĩ tuyến</b>: vòng tròn vuông góc với kinh tuyến. Vĩ tuyến gốc là <b>Xích đạo</b> (0°) – vĩ tuyến dài nhất.</li></ul>`,
      svg: S.globe({ title: 'Kinh tuyến, vĩ tuyến trên quả Địa Cầu', note: 'Hình minh hoạ đơn giản.' }), caption: 'Xích đạo chia Trái Đất thành nửa cầu Bắc và nửa cầu Nam.' },
    { title: 'Các bán cầu', html: `<ul><li>Xích đạo chia: nửa cầu Bắc – nửa cầu Nam.</li><li>Kinh tuyến 20°T và 160°Đ chia: nửa cầu Tây – nửa cầu Đông.</li><li>Kinh tuyến Đông ở bên phải, kinh tuyến Tây ở bên trái kinh tuyến gốc (khi nhìn bản đồ).</li></ul>` },
    { title: 'Kinh độ, vĩ độ, toạ độ', html: `<p><b>Kinh độ</b> của một điểm là số độ từ kinh tuyến đi qua điểm đó đến kinh tuyến gốc; <b>vĩ độ</b> là số độ từ vĩ tuyến đi qua điểm đó đến Xích đạo. Toạ độ địa lí = (vĩ độ, kinh độ).</p>`,
      svg: S.latLonGrid({ title: 'Lưới kinh, vĩ tuyến (cách nhau 30°)', step: 30, points: [{ lon: 106, lat: 21, label: 'Hà Nội' }, { lon: -60, lat: -30, label: 'A' }, { lon: 30, lat: 60, label: 'B' }], note: 'Hà Nội khoảng 21°B, 106°Đ. A: 30°N, 60°T; B: 60°B, 30°Đ.' }), caption: 'Đường đỏ là kinh tuyến gốc.' },
    { title: 'Đếm số đường', html: `<div class="box key">Nếu cách nhau 1°: có 360 kinh tuyến và 181 vĩ tuyến (90 ở Bắc, 90 ở Nam, cộng Xích đạo).</div>` }
  ],
  summary: 'Kinh tuyến nối hai cực, kinh tuyến gốc (0°) qua Grin-uých; vĩ tuyến vuông góc với kinh tuyến, vĩ tuyến gốc là Xích đạo (0°). Xích đạo chia nửa cầu Bắc – Nam; kinh tuyến 20°T và 160°Đ chia nửa cầu Tây – Đông. Kinh độ, vĩ độ của một điểm tạo thành toạ độ địa lí. Cách nhau 1° thì có 360 kinh tuyến, 181 vĩ tuyến.',
  examples: [
    { title: 'Ghi toạ độ', problem: 'Điểm nằm trên vĩ tuyến 21° Bắc, kinh tuyến 106° Đông. Ghi toạ độ.', solution: '(21°B, 106°Đ) – gần Hà Nội.' },
    { title: 'Đếm kinh tuyến', problem: 'Nếu các kinh tuyến cách nhau 10° thì có bao nhiêu kinh tuyến?', solution: '360 : 10 = 36 kinh tuyến.' },
    { title: 'Đếm vĩ tuyến', problem: 'Nếu các vĩ tuyến cách nhau 10° thì có bao nhiêu vĩ tuyến (kể cả Xích đạo)?', solution: 'Mỗi nửa cầu 90 : 10 = 9; tổng 9 + 9 + 1 = 19.' }
  ],
  exercises: [
    { question: 'Kinh tuyến gốc đi qua đâu?', hints: ['Một đài thiên văn.', 'Ở thủ đô nước Anh.'], solution: 'Đài thiên văn Grin-uých (Luân Đôn, Anh).' },
    { question: 'Các kinh tuyến cách nhau 15°. Có bao nhiêu kinh tuyến?', hints: ['Chia 360 cho 15.', '360 : 15.'], solution: '24 kinh tuyến.' },
    { question: 'Các vĩ tuyến cách nhau 30°. Có bao nhiêu vĩ tuyến (kể cả Xích đạo)?', hints: ['Mỗi nửa cầu: 90 : 30.', 'Nhân 2, cộng 1.'], solution: '3 + 3 + 1 = 7 vĩ tuyến.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xích đạo là vĩ tuyến dài nhất.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Kinh tuyến gốc có số độ:', options: ['0°', '90°', '180°', '360°'], answer: 0, explain: '0°.' },
    { type: 'short', q: 'Kinh tuyến cách nhau 10°. Có bao nhiêu kinh tuyến?', answer: '36', unit: 'kinh tuyến', calc: '360/10', explain: '36.' },
    { type: 'mcq', q: 'Đường chia Trái Đất thành nửa cầu Bắc và nửa cầu Nam:', options: ['Xích đạo', 'Kinh tuyến gốc', 'Chí tuyến Bắc', 'Vòng cực'], answer: 0, explain: 'Xích đạo.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các kinh tuyến có độ dài khác nhau.', answer: false, explain: 'Bằng nhau.' },
    { type: 'short', q: 'Vĩ tuyến cách nhau 10°. Có bao nhiêu vĩ tuyến (kể cả Xích đạo)?', answer: '19', unit: 'vĩ tuyến', calc: '90/10*2+1', explain: '19.' },
    { type: 'mcq', q: 'Toạ độ gần đúng của Hà Nội:', options: ['21°B, 106°Đ', '21°N, 106°T', '106°B, 21°Đ', '10°B, 106°T'], answer: 0, explain: 'Đúng.' },
    { type: 'mcq', q: 'Vĩ độ của một điểm là khoảng cách tính bằng độ từ điểm đó đến:', options: ['Xích đạo', 'Kinh tuyến gốc', 'Cực Bắc', 'Mặt Trời'], answer: 0, explain: 'Xích đạo.' }
  ]
});
})();
