/* Tin học 9 – Bài 6. Thực hành: Khai thác phần mềm mô phỏng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-9/bai-6', {
  objectives: [
    'Khai thác được một phần mềm mô phỏng: chọn thông số, chạy, quan sát, ghi kết quả.',
    'Ghi chép kết quả vào bảng, biểu diễn bằng biểu đồ và rút ra nhận xét, quy luật.',
    'So sánh được kết quả mô phỏng với kiến thức đã học.'
  ],
  intro: 'Trong mô phỏng con lắc đơn, em có thể đổi chiều dài dây, khối lượng quả nặng và đo chu kì dao động. Hãy làm như một nhà khoa học: <b>thay đổi một yếu tố – quan sát – ghi chép – kết luận</b>.',
  steps: [
    { title: 'Quy trình khai thác mô phỏng', html: `<p>Mỗi lần chỉ thay đổi <b>một</b> thông số, giữ nguyên các thông số khác, để biết thông số đó ảnh hưởng thế nào.</p>`,
      svg: S.flow({ items: ['Đặt câu hỏi', 'Chọn thông số thay đổi', 'Chạy, đo', 'Ghi bảng, vẽ đồ thị', 'Kết luận'], size: 12, label: 'Khai thác mô phỏng như thí nghiệm' }), caption: 'Thay đổi một yếu tố mỗi lần.' },
    { title: 'Ghi kết quả: con lắc đơn', html: `<p>Kết quả đo chu kì con lắc (trên Trái Đất, góc lệch nhỏ) khi đổi chiều dài dây (số liệu làm tròn từ mô phỏng):</p>`,
      svg: S.sheet({ title: 'Chu kì con lắc theo chiều dài dây', cols: ['A', 'B', 'C'], rows: [['Chiều dài (m)', 'Chu kì (s)', 'Khối lượng (g)'], ['0,25', '1,0', 50], ['1', '2,0', 50], ['1', '2,0', 100], ['2,25', '3,0', 50]], colW: 140, note: 'Đổi khối lượng 50 g → 100 g, chu kì không đổi' }), caption: 'Chiều dài tăng 4 lần thì chu kì tăng 2 lần.' },
    { title: 'Biểu diễn và nhận xét', html: `<p>Vẽ đồ thị chu kì theo chiều dài. Nhận xét: chu kì tăng khi dây dài hơn; khối lượng quả nặng hầu như không ảnh hưởng tới chu kì (khi góc lệch nhỏ).</p>`,
      svg: S.lineChart({ title: 'Chu kì theo chiều dài dây (từ mô phỏng)', cats: ['0,25 m', '1 m', '2,25 m', '4 m'], values: [1, 2, 3, 4], yMin: 0, yMax: 5, yStep: 1, yLabel: 's' }), caption: 'Chu kì tăng dần theo chiều dài.' },
    { title: 'Đối chiếu kiến thức', html: `<p>Kết quả phù hợp với công thức vật lí T ≈ 2π√(l/g) (sẽ học ở cấp trên): chiều dài tăng 4 lần thì chu kì tăng 2 lần. Mô phỏng giúp “khám phá” quy luật trước, kiến thức giúp giải thích.</p>
      <div class="box key">Một biến thay đổi – các biến khác giữ nguyên – ghi chép – kết luận.</div>` }
  ],
  summary: 'Khai thác mô phỏng như một thí nghiệm: đặt câu hỏi, mỗi lần thay đổi một thông số, chạy và đo, ghi bảng, vẽ đồ thị, rút ra kết luận và đối chiếu kiến thức. Ví dụ con lắc đơn: chu kì tăng theo chiều dài dây, gần như không phụ thuộc khối lượng.',
  examples: [
    { title: 'Biến cần giữ nguyên', problem: 'Muốn biết khối lượng có ảnh hưởng tới chu kì không, cần giữ nguyên những gì?', solution: 'Chiều dài dây, góc thả, nơi đặt con lắc (gia tốc trọng trường).' },
    { title: 'Dự đoán', problem: 'Theo bảng, dây dài 4 m thì chu kì khoảng bao nhiêu?', solution: 'Chiều dài gấp 4 lần 1 m → chu kì gấp 2 lần 2 s = 4 s.' },
    { title: 'Trung bình nhiều lần đo', problem: 'Ba lần đo chu kì được 2,02 s; 1,98 s; 2,00 s. Chu kì trung bình?', solution: '6,00 : 3 = 2,00 s.' }
  ],
  exercises: [
    { question: 'Vì sao mỗi lần chỉ nên thay đổi một thông số?', hints: ['Nếu đổi hai thông số cùng lúc thì sao?', 'Biết được nguyên nhân nào?'], solution: 'Để biết chắc sự thay đổi kết quả là do thông số đó gây ra.' },
    { question: 'Đề xuất câu hỏi khám phá cho mô phỏng con lắc khi đặt trên Mặt Trăng.', hints: ['Trên Mặt Trăng trọng lực yếu hơn.', 'Chu kì thay đổi thế nào?'], solution: 'Ví dụ: “Cùng chiều dài dây, chu kì con lắc trên Mặt Trăng dài hơn hay ngắn hơn trên Trái Đất?” (kết quả: dài hơn).' },
    { question: 'Bốn lần đo chu kì: 3,1 s; 2,9 s; 3,0 s; 3,0 s. Chu kì trung bình?', hints: ['Cộng bốn giá trị.', 'Chia 4.'], solution: '12,0 : 4 = 3,0 s.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi khai thác mô phỏng, mỗi lần nên thay đổi một thông số.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Theo mô phỏng, đổi khối lượng quả nặng (góc nhỏ) thì chu kì con lắc:', options: ['tăng gấp đôi', 'gần như không đổi', 'giảm một nửa', 'bằng 0'], answer: 1, explain: 'Không phụ thuộc khối lượng.' },
    { type: 'short', q: 'Ba lần đo: 1,9 s; 2,1 s; 2,0 s. Chu kì trung bình (s)?', answer: '2', unit: 's', calc: '(1.9+2.1+2.0)/3', explain: '6,0 : 3.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nên thay đổi đồng thời nhiều thông số để tiết kiệm thời gian.', answer: false, explain: 'Khó kết luận.' },
    { type: 'short', q: 'Dây 1 m có chu kì 2 s. Dây 4 m (cùng nơi) có chu kì bao nhiêu giây?', answer: '4', unit: 's', calc: '2*Math.sqrt(4)', explain: 'Chiều dài ×4 → chu kì ×2.' },
    { type: 'mcq', q: 'Dạng biểu đồ phù hợp thể hiện chu kì theo chiều dài dây:', options: ['đoạn thẳng', 'hình tròn', 'không cần biểu đồ', 'sơ đồ tư duy'], answer: 0, explain: 'Thấy xu hướng.' },
    { type: 'short', q: 'Con lắc thực hiện 10 dao động trong 20 giây. Chu kì (s)?', answer: '2', unit: 's', calc: '20/10', explain: '2 s.' },
    { type: 'mcq', q: 'Bước cuối của quy trình khai thác mô phỏng:', options: ['Kết luận, đối chiếu kiến thức', 'Đặt câu hỏi', 'Chọn thông số', 'Mở phần mềm'], answer: 0, explain: 'Kết luận.' }
  ]
});
})();
