/* LS&ĐL 6 – Địa lí, Bài 7. Chuyển động tự quay quanh trục của Trái Đất và hệ quả. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-7', {
  objectives: [
    'Mô tả được chuyển động tự quay quanh trục của Trái Đất.',
    'Trình bày được hiện tượng ngày đêm luân phiên nhau.',
    'Nhận biết được giờ địa phương, giờ khu vực; tính được giờ ở các khu vực.',
    'Mô tả được sự lệch hướng chuyển động của vật thể theo chiều kinh tuyến.'
  ],
  intro: 'Khi ở Hà Nội là 19 giờ, ở Luân Đôn mới 12 giờ trưa. Cùng một lúc mà giờ lại khác nhau? Nguyên nhân là Trái Đất <b>tự quay quanh trục</b>.',
  steps: [
    { title: 'Chuyển động tự quay', html: `<ul><li>Trái Đất quay quanh một trục tưởng tượng nối hai cực, trục nghiêng 66°33′ so với mặt phẳng quỹ đạo.</li><li>Hướng quay: <b>từ Tây sang Đông</b>.</li><li>Thời gian quay một vòng: khoảng <b>24 giờ</b> (một ngày đêm).</li></ul>` },
    { title: 'Ngày đêm luân phiên', html: `<p>Trái Đất hình cầu nên Mặt Trời chỉ chiếu sáng được một nửa (ngày), nửa kia là đêm. Do tự quay, mọi nơi lần lượt có ngày và đêm.</p>` },
    { title: 'Giờ địa phương và giờ khu vực', html: `<p>Bề mặt Trái Đất chia thành <b>24 khu vực giờ</b>, mỗi khu vực rộng 15° kinh tuyến. Khu vực giờ gốc (số 0) có kinh tuyến gốc đi qua giữa. Việt Nam thuộc <b>khu vực giờ số 7</b>.</p>`,
      svg: S.table({ title: 'Ví dụ giờ khu vực (cùng thời điểm)', head: ['Nơi', 'Khu vực giờ / Giờ'], rows: [['Luân Đôn (Anh)', 'Số 0 – 12 giờ'], ['Hà Nội (Việt Nam)', 'Số 7 – 19 giờ'], ['Tô-ky-ô (Nhật Bản)', 'Số 9 – 21 giờ'], ['Niu Oóc (Hoa Kỳ)', 'Số −5 – 7 giờ']], colW: 250 }), caption: 'Phía Đông sớm hơn, phía Tây muộn hơn. Bỏ qua giờ mùa hè.' },
    { title: 'Lệch hướng chuyển động', html: `<p>Các vật chuyển động theo chiều kinh tuyến bị lệch: <b>nửa cầu Bắc lệch phải</b>, <b>nửa cầu Nam lệch trái</b> (theo hướng chuyển động).</p>
      <div class="box key">Giờ nơi cần tìm = giờ nơi đã biết + (hiệu số khu vực giờ). Đi về phía Đông: cộng; về phía Tây: trừ.</div>` }
  ],
  summary: 'Trái Đất tự quay quanh trục từ Tây sang Đông, một vòng khoảng 24 giờ, trục nghiêng 66°33′ so với mặt phẳng quỹ đạo. Hệ quả: ngày đêm luân phiên; giờ trên Trái Đất khác nhau – chia 24 khu vực giờ, mỗi khu vực 15° kinh tuyến, Việt Nam ở khu vực giờ số 7; các vật chuyển động bị lệch hướng (Bắc lệch phải, Nam lệch trái).',
  examples: [
    { title: 'Tính giờ', problem: 'Luân Đôn 8 giờ. Hà Nội (khu vực 7) mấy giờ?', solution: '8 + 7 = 15 giờ.' },
    { title: 'Tính giờ', problem: 'Hà Nội 10 giờ. Tô-ky-ô (khu vực 9) mấy giờ?', solution: '10 + (9 − 7) = 12 giờ.' },
    { title: 'Số khu vực', problem: 'Vì sao mỗi khu vực giờ rộng 15°?', solution: '360° : 24 = 15° (mỗi giờ Trái Đất quay 15°).' }
  ],
  exercises: [
    { question: 'Hà Nội 20 giờ. Luân Đôn mấy giờ?', hints: ['Luân Đôn ở phía Tây: trừ.', '20 − 7.'], solution: '13 giờ.' },
    { question: 'Hà Nội 14 giờ. Niu Oóc (khu vực −5) mấy giờ cùng ngày?', hints: ['Chênh lệch 7 − (−5) = 12.', '14 − 12.'], solution: '2 giờ (sáng cùng ngày).' },
    { question: 'Trong 4 giờ, Trái Đất quay được bao nhiêu độ?', hints: ['Mỗi giờ 15°.', '4 × 15.'], solution: '60°.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trái Đất tự quay quanh trục theo hướng từ Tây sang Đông.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Việt Nam thuộc khu vực giờ số:', options: ['7', '0', '9', '12'], answer: 0, explain: '7.' },
    { type: 'short', q: 'Luân Đôn 8 giờ. Hà Nội mấy giờ?', answer: '15', unit: 'giờ', calc: '8+7', explain: '15.' },
    { type: 'short', q: 'Mỗi khu vực giờ rộng bao nhiêu độ kinh tuyến?', answer: '15', unit: '°', calc: '360/24', explain: '15.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở nửa cầu Bắc, vật chuyển động bị lệch về bên trái.', answer: false, explain: 'Lệch phải.' },
    { type: 'short', q: 'Hà Nội 10 giờ. Tô-ky-ô (khu vực 9) mấy giờ?', answer: '12', unit: 'giờ', calc: '10+(9-7)', explain: '12.' },
    { type: 'mcq', q: 'Hiện tượng do Trái Đất tự quay gây ra:', options: ['Ngày đêm luân phiên', 'Các mùa trong năm', 'Động đất', 'Thuỷ triều đỏ'], answer: 0, explain: 'Ngày đêm.' },
    { type: 'short', q: 'Hà Nội 20 giờ. Luân Đôn mấy giờ?', answer: '13', unit: 'giờ', calc: '20-7', explain: '13.' }
  ]
});
})();
