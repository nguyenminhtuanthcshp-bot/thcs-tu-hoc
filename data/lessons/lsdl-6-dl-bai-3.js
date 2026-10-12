/* LS&ĐL 6 – Địa lí, Bài 3. Tỉ lệ bản đồ. Tính khoảng cách thực tế. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-3', {
  objectives: [
    'Nêu được ý nghĩa của tỉ lệ bản đồ.',
    'Phân biệt tỉ lệ số và tỉ lệ thước.',
    'Tính được khoảng cách thực tế giữa hai địa điểm dựa vào tỉ lệ bản đồ.',
    'Tính ngược khoảng cách trên bản đồ từ khoảng cách thực tế.'
  ],
  intro: 'Trên bản đồ, từ trường em đến công viên chỉ dài 4 cm. Thực tế xa bao nhiêu? Câu trả lời nằm ở một dãy số nhỏ ở góc bản đồ: <b>tỉ lệ bản đồ</b>.',
  steps: [
    { title: 'Tỉ lệ bản đồ là gì?', html: `<p>Tỉ lệ bản đồ cho biết mức độ thu nhỏ khoảng cách trên bản đồ so với thực tế. Ví dụ <b>1 : 100 000</b> nghĩa là 1 cm trên bản đồ ứng với 100 000 cm = <b>1 km</b> ngoài thực tế.</p>` },
    { title: 'Hai dạng tỉ lệ', html: `<ul><li><b>Tỉ lệ số</b>: phân số có tử là 1, ví dụ 1 : 50 000. Mẫu số càng lớn, tỉ lệ càng nhỏ.</li><li><b>Tỉ lệ thước</b>: đoạn thước chia đoạn, mỗi đoạn ghi khoảng cách thực tế (ví dụ 1 cm = 5 km).</li></ul>`,
      svg: S.table({ title: 'Quy đổi nhanh tỉ lệ số', head: ['Tỉ lệ', '1 cm trên bản đồ ứng với'], rows: [['1 : 10 000', '100 m'], ['1 : 100 000', '1 km'], ['1 : 1 000 000', '10 km'], ['1 : 6 000 000', '60 km']], colW: 250 }), caption: 'Mẹo: bỏ 5 chữ số 0 ở mẫu số để ra km.' },
    { title: 'Tính khoảng cách thực tế', html: `<p>Công thức:</p>`,
      svg: S.flowchart({ title: 'Các bước tính', steps: [{ t: 'start', s: 'Đo trên bản đồ (cm)' }, { t: 'proc', s: 'Nhân với mẫu số' }, { t: 'proc', s: 'Được số cm thực tế' }, { t: 'end', s: 'Đổi ra m hoặc km' }] }), caption: '1 km = 100 000 cm; 1 m = 100 cm.' },
    { title: 'Tính ngược', html: `<p>Khoảng cách bản đồ = khoảng cách thực tế (cm) : mẫu số.</p>
      <div class="box key">Thực tế = Bản đồ × Mẫu số. Nhớ đổi cùng đơn vị!</div>` }
  ],
  summary: 'Tỉ lệ bản đồ cho biết mức độ thu nhỏ so với thực tế; có tỉ lệ số (1 : 100 000) và tỉ lệ thước. Mẫu số càng nhỏ, tỉ lệ càng lớn, bản đồ càng chi tiết. Khoảng cách thực tế = khoảng cách trên bản đồ × mẫu số; nhớ đổi đơn vị (1 km = 100 000 cm).',
  examples: [
    { title: 'Tính thực tế', problem: 'Bản đồ 1 : 100 000, hai điểm cách 4 cm. Thực tế bao xa?', solution: '4 × 100 000 = 400 000 cm = 4 km.' },
    { title: 'Tỉ lệ lớn', problem: 'Bản đồ 1 : 6 000 000, đo được 5 cm. Thực tế?', solution: '5 × 60 = 300 km.' },
    { title: 'Tính ngược', problem: 'Hai nơi cách 15 km, vẽ trên bản đồ 1 : 500 000 dài bao nhiêu cm?', solution: '15 km = 1 500 000 cm; 1 500 000 : 500 000 = 3 cm.' }
  ],
  exercises: [
    { question: 'Bản đồ 1 : 200 000, đo được 6 cm. Thực tế bao nhiêu km?', hints: ['6 × 200 000 cm.', 'Chia 100 000 để ra km.'], solution: '12 km.' },
    { question: 'Bản đồ 1 : 50 000, đo được 8 cm. Thực tế bao nhiêu km?', hints: ['8 × 50 000 = 400 000 cm.', 'Đổi ra km.'], solution: '4 km.' },
    { question: 'Hai điểm cách 20 km, bản đồ 1 : 1 000 000. Trên bản đồ dài bao nhiêu cm?', hints: ['1 cm = 10 km.', '20 : 10.'], solution: '2 cm.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bản đồ tỉ lệ 1 : 100 000 thì 1 cm ứng với 1 km thực tế.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Bản đồ 1 : 100 000, đo 4 cm. Thực tế bao nhiêu km?', answer: '4', unit: 'km', calc: '4*100000/100000', explain: '4.' },
    { type: 'mcq', q: 'Bản đồ nào có tỉ lệ lớn nhất?', options: ['1 : 10 000', '1 : 100 000', '1 : 1 000 000', '1 : 6 000 000'], answer: 0, explain: 'Mẫu số nhỏ nhất.' },
    { type: 'short', q: 'Bản đồ 1 : 6 000 000, đo 5 cm. Thực tế bao nhiêu km?', answer: '300', unit: 'km', calc: '5*6000000/100000', explain: '300.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mẫu số càng lớn thì bản đồ càng chi tiết.', answer: false, explain: 'Càng ít chi tiết.' },
    { type: 'short', q: '15 km vẽ trên bản đồ 1 : 500 000 dài bao nhiêu cm?', answer: '3', unit: 'cm', calc: '15*100000/500000', explain: '3.' },
    { type: 'short', q: 'Bản đồ 1 : 200 000, đo 6 cm. Thực tế bao nhiêu km?', answer: '12', unit: 'km', calc: '6*200000/100000', explain: '12.' },
    { type: 'mcq', q: '1 km bằng bao nhiêu cm?', options: ['100 000', '1 000', '10 000', '1 000 000'], answer: 0, explain: '100 000.' }
  ]
});
})();
