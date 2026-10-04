/* KHTN 7 – Bài 10. Đồ thị quãng đường – thời gian. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
var g1 = S.xyGraph({ series: [{ pts: [[0, 0], [1, 40], [2, 40], [3, 100]], dots: true }], xmax: 3.5, ymax: 120, xstep: 0.5, ystep: 20, proj: [[1, 40], [3, 100]], marks: [[1, 40, 'A', 0, 0], [2, 40, 'B'], [3, 100, 'C', -12]], label: 'Đồ thị quãng đường – thời gian của ô tô' });
THCS.registerLesson('khtn-7/bai-10', {
  objectives: [
    'Vẽ được đồ thị quãng đường – thời gian cho chuyển động thẳng từ bảng số liệu.',
    'Từ đồ thị, xác định được quãng đường đi được, thời gian và tốc độ của vật.',
    'Nhận biết được đoạn đồ thị ứng với vật đứng yên và so sánh được tốc độ của các vật trên cùng một đồ thị.'
  ],
  intro: 'Một bảng số liệu dài rất khó “đọc”. Nhưng khi vẽ thành đồ thị, chỉ cần liếc qua là em biết lúc nào xe chạy nhanh, lúc nào xe dừng lại.',
  steps: [
    { title: 'Bảng số liệu', html: `<p>Một ô tô đi trên đường thẳng; quãng đường đi được sau mỗi giờ được ghi trong bảng:</p>
      <table class="tbl"><tr><th>Thời gian t (h)</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>Quãng đường s (km)</th><td>0</td><td>40</td><td>40</td><td>100</td></tr></table>
      <p>Mỗi cặp (t; s) được biểu diễn bằng một điểm trên hệ trục: trục nằm ngang là thời gian, trục thẳng đứng là quãng đường.</p>` },
    { title: 'Vẽ đồ thị', html: `<ol><li>Vẽ hai trục vuông góc: trục Ot (thời gian), trục Os (quãng đường); chọn tỉ lệ phù hợp.</li><li>Xác định các điểm O(0; 0), A(1; 40), B(2; 40), C(3; 100).</li><li>Nối các điểm liên tiếp bằng các đoạn thẳng.</li></ol>
      <p>Với chuyển động có tốc độ không đổi, đồ thị quãng đường – thời gian là một <b>đoạn thẳng nghiêng</b>.</p>`,
      svg: g1, caption: 'Đồ thị quãng đường – thời gian của ô tô: OA và BC nghiêng (xe chạy), AB nằm ngang (xe dừng).' },
    { title: 'Đọc đồ thị', html: `<ul><li><b>Đoạn OA</b> (0 → 1 h): đi được 40 km ⇒ v = 40 : 1 = 40 km/h.</li><li><b>Đoạn AB</b> (1 h → 2 h): s không đổi ⇒ xe <b>đứng yên</b> (nghỉ 1 giờ).</li><li><b>Đoạn BC</b> (2 h → 3 h): đi thêm 100 − 40 = 60 km ⇒ v = 60 km/h.</li></ul>
      <div class="box key">Đoạn đồ thị càng dốc thì tốc độ càng lớn. Đoạn nằm ngang: vật đứng yên.</div>` },
    { title: 'So sánh hai chuyển động', html: `<p>Vẽ đồ thị của hai vật trên cùng một hệ trục, vật có đường đồ thị <b>dốc hơn</b> thì chuyển động nhanh hơn.</p>`,
      svg: S.xyGraph({ series: [{ pts: [[0, 0], [4, 360]], label: 'Người đi bộ', color: '#16a34a' }, { pts: [[0, 0], [4, 1200]], label: 'Xe đạp', color: '#ea580c' }], xmax: 4.5, ymax: 1400, xstep: 1, ystep: 200, xlabel: 't (phút)', ylabel: 's (m)', label: 'So sánh hai chuyển động' }),
      caption: 'Sau 4 phút, xe đạp đi được 1 200 m (5 m/s), người đi bộ đi được 360 m (1,5 m/s): đồ thị của xe đạp dốc hơn.' }
  ],
  summary: 'Đồ thị quãng đường – thời gian: trục ngang là t, trục đứng là s. Tốc độ không đổi ⇒ đoạn thẳng nghiêng; càng dốc, tốc độ càng lớn; đoạn nằm ngang ⇒ vật đứng yên. Từ đồ thị đọc được s, t và tính v = s : t cho từng đoạn.',
  examples: [
    { title: 'Tốc độ từng đoạn', problem: 'Dựa vào đồ thị ở bước 2, tính tốc độ trung bình của ô tô trong cả 3 giờ.', solution: 'Tổng quãng đường 100 km trong 3 h: v = 100 : 3 ≈ 33,3 km/h (kể cả thời gian nghỉ).' },
    { title: 'Đọc thời điểm', problem: 'Trên đồ thị bước 2, ô tô đã đi được 70 km vào thời điểm nào?', solution: 'Trên đoạn BC, xe chạy 60 km/h bắt đầu từ lúc 2 h ở vị trí 40 km. Còn 70 − 40 = 30 km, mất 30 : 60 = 0,5 h ⇒ thời điểm 2,5 h.' },
    { title: 'Vẽ từ bảng', problem: 'Một bạn đi xe đạp: t = 0, 10, 20, 30 phút; s = 0; 2; 4; 6 km. Đồ thị có dạng gì? Tốc độ bao nhiêu?', solution: 'Các điểm thẳng hàng qua gốc O ⇒ đồ thị là đoạn thẳng nghiêng. Cứ 10 phút đi 2 km ⇒ v = 6 km : 0,5 h = 12 km/h.' }
  ],
  exercises: [
    { question: 'Một người đi bộ 2 km trong 0,5 h đầu, nghỉ 0,5 h, rồi đi tiếp 3 km trong 1 h. Lập bảng số liệu (t; s) tại các thời điểm 0; 0,5; 1; 2 h.', hints: ['Tại t = 1 h người đó vẫn ở vị trí 2 km (vì đang nghỉ).', 'Tại t = 2 h đã đi 2 + 3 km.'], solution: 't (h): 0; 0,5; 1; 2 – s (km): 0; 2; 2; 5.' },
    { question: 'Từ bảng ở bài trên, tính tốc độ của người đó trong đoạn đầu và đoạn cuối. Đoạn nào đồ thị dốc hơn?', hints: ['Đoạn đầu: 2 km trong 0,5 h.', 'Đoạn cuối: 3 km trong 1 h.'], solution: 'Đoạn đầu: 2 : 0,5 = 4 km/h; đoạn cuối: 3 : 1 = 3 km/h. Đoạn đầu dốc hơn.' },
    { question: 'Trên đồ thị s – t, hai đường của xe A và xe B cắt nhau tại điểm (2 h; 80 km). Điểm cắt nhau đó cho biết điều gì (hai xe cùng xuất phát tại một nơi, đi cùng chiều)?', hints: ['Tại điểm đó, hai xe có cùng t và cùng s.', 'Cùng quãng đường từ cùng điểm xuất phát nghĩa là…'], solution: 'Lúc 2 h, hai xe cùng đi được 80 km, tức là chúng gặp nhau (ở cùng vị trí cách nơi xuất phát 80 km).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Trên đồ thị quãng đường – thời gian, đoạn nằm ngang cho biết vật:', options: ['chuyển động nhanh', 'đứng yên', 'chuyển động chậm dần', 'quay đầu'], answer: 1, explain: 'Thời gian trôi qua nhưng quãng đường không đổi.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Đoạn đồ thị càng dốc thì tốc độ của vật càng lớn.', answer: true, explain: 'Cùng thời gian, quãng đường tăng nhiều hơn.' },
    { type: 'short', q: 'Theo đồ thị bên, tốc độ của ô tô trên đoạn OA là bao nhiêu km/h?', svg: g1, answer: '40', unit: 'km/h', calc: '40/1', explain: 'Đi 40 km trong 1 h ⇒ 40 km/h.' },
    { type: 'short', q: 'Cũng theo đồ thị đó, tốc độ của ô tô trên đoạn BC là bao nhiêu km/h?', answer: '60', unit: 'km/h', calc: '(100-40)/(3-2)', explain: '(100 − 40) : (3 − 2) = 60 km/h.' },
    { type: 'short', q: 'Cũng theo đồ thị đó, ô tô dừng lại trong bao nhiêu giờ?', answer: '1', unit: 'h', calc: '2-1', explain: 'Đoạn AB từ 1 h đến 2 h: dừng 1 h.' },
    { type: 'mcq', q: 'Trục nằm ngang của đồ thị quãng đường – thời gian biểu diễn:', options: ['quãng đường', 'tốc độ', 'thời gian', 'khối lượng'], answer: 2, explain: 'Trục ngang: t; trục đứng: s.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chuyển động có tốc độ không đổi thì đồ thị quãng đường – thời gian là một đường cong.', answer: false, explain: 'Tốc độ không đổi ⇒ đồ thị là đoạn thẳng nghiêng.' },
    { type: 'short', q: 'Đồ thị của một xe là đoạn thẳng đi qua gốc O và điểm (2 h; 90 km). Tốc độ của xe là bao nhiêu km/h?', answer: '45', unit: 'km/h', calc: '90/2', explain: 'v = 90 : 2 = 45 km/h.' }
  ]
});
})();
