/* Toán 6 – Bài 27. Hai bài toán về phân số. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg, C = S.C;
function tape(parts, shaded, total, part, partLabel) { // băng giấy chia phần, có nhãn tổng và phần
  var W = 420, L = 20, w = (W - 2 * L) / parts, it = [];
  for (var i = 0; i < parts; i++) it.push({ poly: [[L + i * w, 40], [L + (i + 1) * w, 40], [L + (i + 1) * w, 80], [L + i * w, 80]], fill: i < shaded ? C.orangeL : '#fff', width: 1.6 });
  it.push({ seg: [L, 26, W - L, 26], color: C.blue, width: 2 }, { seg: [L, 20, L, 32], color: C.blue, width: 2 }, { seg: [W - L, 20, W - L, 32], color: C.blue, width: 2 }, { text: [W / 2, 16, total], color: C.blue, bold: true, size: 14 });
  it.push({ seg: [L, 94, L + shaded * w, 94], color: C.orange, width: 2 }, { seg: [L, 88, L, 100], color: C.orange, width: 2 }, { seg: [L + shaded * w, 88, L + shaded * w, 100], color: C.orange, width: 2 }, { text: [L + shaded * w / 2, 118, part], color: C.orange, bold: true, size: 14 });
  return S.draw({ w: W, h: 130, items: it, aria: partLabel || 'Sơ đồ băng giấy' });
}
THCS.registerLesson('toan-6/bai-27', {
  objectives: [
    'Tìm được giá trị phân số của một số cho trước.',
    'Tìm được một số khi biết giá trị một phân số của số đó.',
    'Nhận dạng đúng hai bài toán và vận dụng vào thực tế (giảm giá, tỉ lệ, quãng đường…).'
  ],
  intro: 'Lớp em có 40 bạn, {{3|5}} số bạn thích bơi. Có bao nhiêu bạn thích bơi? Ngược lại, nếu biết 24 bạn chiếm {{3|5}} cả lớp thì lớp có bao nhiêu bạn? Đó là hai bài toán cơ bản về phân số.',
  steps: [
    { title: 'Bài toán 1: Tìm giá trị phân số của một số', html: `<p>Muốn tìm {{m|n}} của số b, ta tính <span class="math">b · {{m|n}}</span>.</p><p>Ví dụ: {{3|5}} của 40 là 40 · {{3|5}} = 24 (bạn).</p>`,
      svg: tape(5, 3, '40 bạn', '? bạn'), caption: 'Chia 40 thành 5 phần bằng nhau, lấy 3 phần: 40 : 5 · 3 = 24.' },
    { title: 'Bài toán 2: Tìm một số biết giá trị phân số của nó', html: `<p>Muốn tìm một số biết {{m|n}} của nó bằng a, ta tính <span class="math">a : {{m|n}}</span>.</p><p>Ví dụ: {{3|5}} số bạn của lớp là 24 bạn ⇒ cả lớp có 24 : {{3|5}} = 24 · {{5|3}} = 40 (bạn).</p>`,
      svg: tape(5, 3, '? bạn', '24 bạn'), caption: '3 phần ứng với 24 bạn ⇒ 1 phần là 8 bạn ⇒ 5 phần là 40 bạn.' },
    { title: 'Phân biệt hai bài toán', html: `<ul><li>Biết <b>số tổng</b>, hỏi <b>một phần</b> ⇒ <b>nhân</b> với phân số.</li><li>Biết <b>một phần</b>, hỏi <b>số tổng</b> ⇒ <b>chia</b> cho phân số.</li></ul><p>Kiểm tra: đáp số bài toán 2 phải lớn hơn a nếu phân số nhỏ hơn 1.</p>` },
    { title: 'Ứng dụng: phần trăm và giảm giá', html: `<p>Phần trăm là phân số có mẫu 100: 25% = {{25|100}} = {{1|4}}.</p><p>Chiếc áo giá 200 000 đồng giảm 25%: số tiền giảm là 200 000 · {{1|4}} = 50 000 đồng; giá mới 150 000 đồng.</p>` }
  ],
  summary: '{{m|n}} của b là b · {{m|n}}. Nếu {{m|n}} của một số bằng a thì số đó là a : {{m|n}}. Biết tổng tìm phần: nhân; biết phần tìm tổng: chia.',
  examples: [
    { title: 'Bài toán 1', problem: 'Một quãng đường dài 120 km. Ô tô đã đi được {{5|8}} quãng đường. Hỏi ô tô đã đi bao nhiêu ki-lô-mét?', solution: '120 · {{5|8}} = <b>75 km</b>.' },
    { title: 'Bài toán 2', problem: '{{2|7}} số tiền tiết kiệm của Minh là 60 000 đồng. Minh tiết kiệm được bao nhiêu tiền?', solution: '60 000 : {{2|7}} = 60 000 · {{7|2}} = <b>210 000 đồng</b>.' },
    { title: 'Nhiều bước', problem: 'Một cửa hàng có 360 kg gạo. Ngày đầu bán {{1|3}} số gạo, ngày thứ hai bán {{3|8}} số gạo còn lại. Hỏi còn lại bao nhiêu ki-lô-gam?', solution: 'Ngày đầu: 360 · {{1|3}} = 120 kg ⇒ còn 240 kg. Ngày hai: 240 · {{3|8}} = 90 kg. Còn lại: 240 − 90 = <b>150 kg</b>.' }
  ],
  exercises: [
    { question: 'Tìm {{3|4}} của 56.', hints: ['Nhân 56 với {{3|4}}.', '56 : 4 = 14.'], solution: '14 · 3 = <b>42</b>.' },
    { question: 'Biết {{4|9}} số học sinh của một trường là 360 em. Trường có bao nhiêu học sinh?', hints: ['Đây là bài toán 2: chia cho phân số.', '360 : {{4|9}} = 360 · {{9|4}}.'], solution: '<b>810 học sinh</b>.' },
    { question: 'Một cuốn sách dày 240 trang. Ngày thứ nhất An đọc {{1|4}} cuốn, ngày thứ hai đọc {{2|5}} cuốn. Còn bao nhiêu trang chưa đọc?', hints: ['Tính số trang mỗi ngày: 240 · {{1|4}} và 240 · {{2|5}}.', 'Lấy 240 trừ tổng hai ngày.'], solution: '60 + 96 = 156 trang ⇒ còn <b>84 trang</b>.' }
  ],
  quiz: [
    { type: 'short', q: '{{2|3}} của 45 là bao nhiêu?', answer: '30', calc: '45*2/3', explain: '45 · {{2|3}} = 30.' },
    { type: 'short', q: 'Tìm một số biết {{3|7}} của nó bằng 21.', answer: '49', calc: '21/(3/7)', explain: '21 : {{3|7}} = 49.' },
    { type: 'mcq', q: 'Muốn tìm {{m|n}} của số b ta làm phép tính:', options: ['b : {{m|n}}', 'b · {{m|n}}', 'b + {{m|n}}', '{{m|n}} : b'], answer: 1, explain: 'Bài toán 1: nhân.' },
    { type: 'short', q: '25% của 80 là bao nhiêu?', answer: '20', calc: '80*25/100', explain: '80 · {{1|4}} = 20.' },
    { type: 'mcq', q: 'Chiếc cặp giá 300 000 đồng được giảm {{1|5}} giá. Giá sau khi giảm là:', options: ['60 000 đồng', '240 000 đồng', '250 000 đồng', '280 000 đồng'], answer: 1, calc: '300000-300000/5', explain: 'Giảm 60 000 ⇒ còn 240 000 đồng.' },
    { type: 'short', q: '{{5|6}} quãng đường là 40 km. Cả quãng đường dài bao nhiêu km?', answer: '48', unit: 'km', calc: '40/(5/6)', explain: '40 · {{6|5}} = 48 km.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu {{1|2}} của một số là 10 thì số đó là 5.', answer: false, explain: '10 : {{1|2}} = 20.' },
    { type: 'short', q: 'Lớp có 36 học sinh, {{5|9}} là nữ. Có bao nhiêu học sinh nam?', answer: '16', calc: '36-36*5/9', explain: 'Nữ: 20 ⇒ nam: 16.' }
  ]
});
})();
