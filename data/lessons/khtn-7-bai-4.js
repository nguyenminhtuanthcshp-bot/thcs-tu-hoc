/* KHTN 7 – Bài 4. Sơ lược về bảng tuần hoàn các nguyên tố hoá học. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-4', {
  objectives: [
    'Nêu được các nguyên tắc xây dựng bảng tuần hoàn các nguyên tố hoá học.',
    'Mô tả được cấu tạo bảng tuần hoàn: ô nguyên tố, chu kì, nhóm.',
    'Xác định được vị trí (ô, chu kì, nhóm) của một nguyên tố từ sự phân bố electron và ngược lại.',
    'Chỉ ra được vùng các nguyên tố kim loại, phi kim, khí hiếm trong bảng tuần hoàn.'
  ],
  intro: 'Năm 1869, nhà hoá học Nga Mendeleev sắp xếp các nguyên tố đã biết thành một bảng và còn để trống vài ô cho những nguyên tố chưa được tìm ra. Về sau, người ta tìm thấy đúng những nguyên tố ấy! Bảng tuần hoàn giống như một “tấm bản đồ” giúp ta tra cứu và dự đoán tính chất của các nguyên tố.',
  steps: [
    { title: 'Nguyên tắc sắp xếp', html: `<p>Bảng tuần hoàn hiện nay được xây dựng theo ba nguyên tắc:</p>
      <ol><li>Các nguyên tố được xếp theo chiều <b>tăng dần của điện tích hạt nhân</b> (tức số proton).</li>
      <li>Các nguyên tố có <b>cùng số lớp electron</b> trong nguyên tử được xếp thành một <b>hàng</b>.</li>
      <li>Các nguyên tố có tính chất hoá học tương tự nhau (thường có cùng số electron lớp ngoài cùng) được xếp thành một <b>cột</b>.</li></ol>` },
    { title: 'Ô nguyên tố', html: `<p>Mỗi nguyên tố được xếp vào <b>một ô</b>. Ô nguyên tố cho biết:</p>
      <ul><li><b>Số hiệu nguyên tử</b> (bằng số thứ tự của ô) = số proton = số electron của nguyên tử.</li><li><b>Kí hiệu hoá học</b> và <b>tên</b> nguyên tố.</li><li><b>Khối lượng nguyên tử</b> (amu).</li></ul>
      <div class="box key">Magnesium ở ô số 12 ⇒ nguyên tử Mg có 12 proton và 12 electron.</div>`,
      svg: S.elementCell({ z: 12, sym: 'Mg', name: 'Magnesium', mass: '24' }), caption: 'Các thông tin trong một ô nguyên tố.' },
    { title: 'Chu kì', html: `<p><b>Chu kì</b> là dãy các nguyên tố mà nguyên tử của chúng có <b>cùng số lớp electron</b>, xếp theo chiều tăng dần điện tích hạt nhân. Bảng tuần hoàn có <b>7 chu kì</b>.</p>
      <div class="box key">Số thứ tự của chu kì = số lớp electron của nguyên tử.</div>
      <p>Ví dụ: Na (2, 8, 1) có 3 lớp electron ⇒ thuộc chu kì 3.</p>`,
      svg: S.periodicTable({ highlight: ['Na', 'Cl'] }), caption: 'Trích bảng tuần hoàn: 20 nguyên tố đầu tiên (chỉ gồm các nhóm A). Na và Cl cùng thuộc chu kì 3.' },
    { title: 'Nhóm', html: `<p><b>Nhóm</b> là tập hợp các nguyên tố xếp thành một <b>cột</b>, có tính chất hoá học tương tự nhau. Bảng tuần hoàn có các nhóm A (IA đến VIIIA) và các nhóm B.</p>
      <div class="box key">Với các nguyên tố nhóm A: số thứ tự nhóm = số electron lớp ngoài cùng (riêng helium có 2 electron nhưng xếp ở nhóm VIIIA vì lớp ngoài cùng đã bền).</div>
      <p>Ví dụ: Cl (2, 8, 7) có 7 electron lớp ngoài cùng ⇒ nhóm VIIA.</p>` },
    { title: 'Kim loại, phi kim, khí hiếm', html: `<ul><li><b>Kim loại</b> chiếm phần lớn bảng tuần hoàn, nằm ở bên trái và ở giữa (Na, Mg, Al, K, Ca, Fe, Cu…).</li>
      <li><b>Phi kim</b> nằm ở phía trên bên phải (C, N, O, F, P, S, Cl…); hydrogen cũng là phi kim.</li>
      <li><b>Khí hiếm</b> nằm ở nhóm VIIIA, cuối mỗi chu kì (He, Ne, Ar…); chúng rất khó tham gia phản ứng hoá học.</li>
      <li>Một số nguyên tố như B, Si có tính chất trung gian, được gọi là <b>á kim</b>.</li></ul>
      <p>Nhóm IA (trừ H) gọi là nhóm <b>kim loại kiềm</b>; nhóm VIIA là nhóm <b>halogen</b>.</p>` }
  ],
  summary: 'Bảng tuần hoàn xếp nguyên tố theo chiều tăng điện tích hạt nhân. Ô: số hiệu nguyên tử = số p = số e. Chu kì: cùng số lớp electron (số thứ tự chu kì = số lớp e). Nhóm A: số thứ tự nhóm = số e lớp ngoài cùng. Kim loại ở bên trái và giữa, phi kim ở trên bên phải, khí hiếm ở nhóm VIIIA.',
  examples: [
    { title: 'Xác định vị trí của sodium', problem: 'Sodium ở ô số 11. Hãy cho biết nguyên tử Na có bao nhiêu electron, phân bố electron theo lớp và vị trí của Na trong bảng tuần hoàn.', solution: 'Số e = 11, phân bố 2, 8, 1. Có 3 lớp electron ⇒ chu kì 3; có 1 electron lớp ngoài cùng ⇒ nhóm IA. Na là kim loại (kim loại kiềm).' },
    { title: 'Từ vị trí suy ra nguyên tố', problem: 'Nguyên tố X ở chu kì 2, nhóm VIA. Tìm số hiệu nguyên tử của X và gọi tên X.', solution: 'Chu kì 2 ⇒ 2 lớp electron; nhóm VIA ⇒ 6 electron lớp ngoài cùng. Phân bố: 2, 6 ⇒ có 8 electron ⇒ số hiệu nguyên tử 8. X là oxygen (phi kim).' },
    { title: 'Kim loại hay phi kim?', problem: 'Cho các nguyên tố: K, S, Ar, Al. Nguyên tố nào là kim loại, phi kim, khí hiếm?', solution: 'Kim loại: K (nhóm IA), Al (nhóm IIIA). Phi kim: S (nhóm VIA). Khí hiếm: Ar (nhóm VIIIA).' }
  ],
  exercises: [
    { question: 'Aluminium ở ô số 13. Xác định chu kì, nhóm của Al.', hints: ['Viết phân bố electron của 13 electron: lớp 1 tối đa 2, lớp 2 tối đa 8.', 'Đếm số lớp và số electron lớp ngoài cùng.'], solution: '13 electron: 2, 8, 3 ⇒ 3 lớp (chu kì 3), 3 electron lớp ngoài cùng (nhóm IIIA). Al là kim loại.' },
    { question: 'Nguyên tố Y ở chu kì 3, nhóm VIIA. Tính số hiệu nguyên tử của Y. Y là kim loại hay phi kim?', hints: ['Chu kì 3 ⇒ 3 lớp electron; nhóm VIIA ⇒ 7 electron lớp ngoài.', 'Tổng số electron = 2 + 8 + 7.'], solution: 'Phân bố 2, 8, 7 ⇒ 17 electron ⇒ số hiệu 17. Y là chlorine, một phi kim (halogen).' },
    { question: 'Vì sao helium chỉ có 2 electron lớp ngoài cùng nhưng lại được xếp ở nhóm VIIIA?', hints: ['Lớp thứ nhất chứa tối đa bao nhiêu electron?', 'Các nguyên tố nhóm VIIIA có tính chất chung gì?'], solution: 'Helium chỉ có một lớp electron và lớp này đã đủ tối đa 2 electron nên rất bền, gần như không phản ứng – giống Ne, Ar. Vì tính chất tương tự nên He được xếp cùng nhóm khí hiếm VIIIA.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Các nguyên tố trong bảng tuần hoàn được sắp xếp theo chiều tăng dần của:', options: ['khối lượng nguyên tử', 'điện tích hạt nhân', 'số neutron', 'số lớp electron'], answer: 1, explain: 'Nguyên tắc thứ nhất: xếp theo chiều tăng dần điện tích hạt nhân (số proton).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các nguyên tố trong cùng một chu kì có cùng số lớp electron.', answer: true, explain: 'Chu kì là dãy nguyên tố có cùng số lớp electron.' },
    { type: 'short', q: 'Nguyên tố ở chu kì 3, nhóm IIA có số hiệu nguyên tử là bao nhiêu?', answer: '12', calc: '2+8+2', explain: 'Phân bố electron 2, 8, 2 ⇒ 12 electron ⇒ số hiệu 12 (magnesium).' },
    { type: 'mcq', q: 'Nguyên tử potassium (ô 19) có phân bố electron 2, 8, 8, 1. K ở vị trí:', options: ['chu kì 4, nhóm IA', 'chu kì 1, nhóm IVA', 'chu kì 3, nhóm IA', 'chu kì 4, nhóm VIIIA'], answer: 0, explain: '4 lớp electron ⇒ chu kì 4; 1 electron lớp ngoài cùng ⇒ nhóm IA.' },
    { type: 'short', q: 'Nguyên tử sulfur (ô 16) có bao nhiêu electron ở lớp ngoài cùng?', answer: '6', calc: '16-2-8', explain: 'Phân bố 2, 8, 6 ⇒ lớp ngoài cùng có 16 − 2 − 8 = 6 electron (nhóm VIA).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Phần lớn các nguyên tố trong bảng tuần hoàn là phi kim.', answer: false, explain: 'Phần lớn các nguyên tố là kim loại.' },
    { type: 'mcq', q: 'Nhóm nào gồm các khí hiếm?', options: ['Nhóm IA', 'Nhóm IIA', 'Nhóm VIIA', 'Nhóm VIIIA'], answer: 3, explain: 'Khí hiếm (He, Ne, Ar…) ở nhóm VIIIA.' },
    { type: 'short', q: 'Nguyên tố ở chu kì 2, nhóm VIIA có số hiệu nguyên tử là bao nhiêu?', answer: '9', calc: '2+7', explain: 'Phân bố 2, 7 ⇒ 9 electron ⇒ số hiệu 9 (fluorine).' }
  ]
});
})();
