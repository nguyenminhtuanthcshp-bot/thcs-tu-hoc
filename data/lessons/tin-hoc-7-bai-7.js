/* Tin học 7 – Bài 7. Tính toán tự động trên bảng tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-7/bai-7', {
  objectives: [
    'Viết được công thức bắt đầu bằng dấu “=”, dùng các phép toán + − * / ^.',
    'Sử dụng được địa chỉ ô trong công thức và giải thích được vì sao kết quả tự cập nhật.',
    'Tính đúng giá trị của công thức theo thứ tự thực hiện phép tính.'
  ],
  intro: 'Nếu ô D2 chứa “=B2+C2”, khi em sửa điểm ở B2, D2 tự thay đổi theo. Đó là sức mạnh của <b>công thức</b> trong bảng tính.',
  steps: [
    { title: 'Công thức bắt đầu bằng dấu =', html: `<p>Mọi công thức bắt đầu bằng dấu <b>=</b>. Các phép toán: <b>+</b> (cộng), <b>−</b> (trừ), <b>*</b> (nhân), <b>/</b> (chia), <b>^</b> (luỹ thừa), dùng <b>()</b> để nhóm. Thứ tự: ngoặc → luỹ thừa → nhân, chia → cộng, trừ.</p>
      <p>Ví dụ: <code>=(5+3)*2</code> cho 16; <code>=5+3*2</code> cho 11; <code>=2^3</code> cho 8.</p>` },
    { title: 'Dùng địa chỉ ô trong công thức', html: `<p>Thay vì gõ số, hãy dùng <b>địa chỉ ô</b>. Khi dữ liệu trong ô thay đổi, kết quả công thức <b>tự động cập nhật</b>.</p>`,
      svg: S.sheet({ title: 'Tính tổng tiền', cols: ['A', 'B', 'C', 'D'], rows: [['Mặt hàng', 'Số lượng', 'Đơn giá', 'Thành tiền'], ['Vở', 10, 8000, 80000], ['Bút', 5, 6000, 30000]], active: 'D2', formula: '=B2*C2', colW: 120, note: 'D2 = B2 × C2; sửa B2 thì D2 tự tính lại' }), caption: 'Ô chứa công thức hiển thị kết quả; thanh công thức hiển thị công thức.' },
    { title: 'Thấy kết quả, xem công thức', html: `<p>Trong ô, em thấy <b>kết quả</b>; khi chọn ô, <b>thanh công thức</b> hiển thị công thức. Nếu quên dấu “=”, phần mềm coi nội dung là văn bản và không tính.</p>`,
      svg: S.table({ title: 'Ví dụ (A1 = 6, B1 = 4)', head: ['Công thức', 'Kết quả'], rows: [['=A1+B1', '10'], ['=A1*B1', '24'], ['=A1/B1', '1,5'], ['=(A1+B1)/2', '5'], ['=A1^2', '36'], ['A1+B1 (thiếu =)', 'văn bản “A1+B1”']], colW: 200 }), caption: 'Kết quả công thức với A1 = 6, B1 = 4.' },
    { title: 'Một số lỗi thường gặp', html: `<ul><li>Dùng dấu “x” thay cho “*”, hoặc “:” thay cho “/”.</li><li>Chia cho ô trống hoặc ô bằng 0 → lỗi <code>#DIV/0!</code>.</li><li>Thiếu ngoặc làm sai thứ tự tính.</li></ul>
      <div class="box key">= rồi mới đến công thức; dùng địa chỉ ô để kết quả tự cập nhật.</div>` }
  ],
  summary: 'Công thức bắt đầu bằng “=”, dùng + − * / ^ và ngoặc, theo thứ tự: ngoặc → luỹ thừa → nhân, chia → cộng, trừ. Dùng địa chỉ ô trong công thức để kết quả tự cập nhật khi dữ liệu thay đổi. Ô hiển thị kết quả, thanh công thức hiển thị công thức.',
  examples: [
    { title: 'Tính giá trị', problem: 'Tính =10-2*3 và =(10-2)*3.', solution: '10 − 6 = 4; 8 × 3 = 24.' },
    { title: 'Viết công thức', problem: 'B2 là điểm kiểm tra, C2 là điểm thi. Viết công thức tính điểm trung bình (điểm thi hệ số 2) vào D2.', solution: '=(B2+C2*2)/3' },
    { title: 'Tự cập nhật', problem: 'Ở bảng bước 2, sửa B2 thành 12. D2 bằng bao nhiêu?', solution: 'D2 = 12 × 8 000 = 96 000.' }
  ],
  exercises: [
    { question: 'Cho A1 = 8, B1 = 2. Tính =A1/B1+A1^2.', hints: ['Luỹ thừa và chia trước.', '8 : 2 = 4; 8² = 64.'], solution: '4 + 64 = 68.' },
    { question: 'Viết công thức tính chu vi hình chữ nhật có chiều dài ở A2, chiều rộng ở B2.', hints: ['Chu vi = (dài + rộng) × 2.', 'Nhớ dấu = và ngoặc.'], solution: '=(A2+B2)*2' },
    { question: 'Vì sao nên viết =B2*C2 thay vì =10*8000?', hints: ['Nếu số lượng thay đổi thì sao?', 'Công thức nào tự tính lại?'], solution: 'Dùng địa chỉ ô thì khi dữ liệu thay đổi, kết quả tự cập nhật; gõ số trực tiếp phải sửa tay.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Công thức trong bảng tính phải bắt đầu bằng dấu =.', answer: true, explain: 'Thiếu dấu = sẽ thành văn bản.' },
    { type: 'short', q: 'Kết quả của công thức =5+3*2 là bao nhiêu?', answer: '11', calc: '5+3*2', explain: 'Nhân trước: 5 + 6.' },
    { type: 'short', q: 'Kết quả của công thức =(5+3)*2 là bao nhiêu?', answer: '16', calc: '(5+3)*2', explain: '8 × 2.' },
    { type: 'mcq', q: 'Kí hiệu phép nhân trong công thức bảng tính là:', options: ['x', '*', '.', '×'], answer: 1, explain: 'Dùng dấu *.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu dùng địa chỉ ô, khi dữ liệu thay đổi phải gõ lại công thức.', answer: false, explain: 'Kết quả tự cập nhật.' },
    { type: 'short', q: 'A1 = 3. Kết quả của =A1^3 là bao nhiêu?', answer: '27', calc: '3**3', explain: '3³ = 27.' },
    { type: 'mcq', q: 'Công thức nào tính trung bình của A1 và B1 đúng?', options: ['=A1+B1/2', '=(A1+B1)/2', 'A1+B1/2', '=(A1+B1):2'], answer: 1, explain: 'Cần ngoặc và dấu /.' },
    { type: 'short', q: 'B2 = 12, C2 = 5000. Kết quả =B2*C2 là bao nhiêu?', answer: '60000', answerText: '60 000', calc: '12*5000', explain: '12 × 5 000.' }
  ]
});
})();
