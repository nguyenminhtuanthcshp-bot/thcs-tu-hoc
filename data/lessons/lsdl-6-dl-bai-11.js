/* LS&ĐL 6 – Địa lí, Bài 11. Quá trình nội sinh và ngoại sinh. Hiện tượng tạo núi. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('lsdl-6/dl-bai-11', {
  objectives: [
    'Phân biệt được quá trình nội sinh và ngoại sinh.',
    'Trình bày được tác động đồng thời của hai quá trình trong việc hình thành địa hình.',
    'Trình bày được hiện tượng tạo núi.',
    'Nêu ví dụ địa hình do mỗi quá trình tạo nên.'
  ],
  intro: 'Dãy Hi-ma-lay-a vẫn đang cao lên từng năm, trong khi gió, mưa, băng không ngừng bào mòn nó. Bề mặt Trái Đất luôn thay đổi nhờ hai “người thợ” làm việc trái ngược nhau: <b>nội sinh</b> và <b>ngoại sinh</b>.',
  steps: [
    { title: 'So sánh hai quá trình', html: `<p>Bảng so sánh:</p>`,
      svg: S.table({ title: 'Nội sinh và ngoại sinh', head: ['Nội sinh', 'Ngoại sinh'], rows: [['Xảy ra trong lòng Trái Đất', 'Xảy ra trên bề mặt Trái Đất'], ['Do năng lượng bên trong', 'Do Mặt Trời, gió, nước, sinh vật'], ['Uốn nếp, đứt gãy, nâng lên, hạ xuống', 'Phong hoá, xâm thực, bồi tụ'], ['Làm địa hình gồ ghề hơn', 'San bằng, hạ thấp địa hình']], colW: 250 }), caption: 'Hai quá trình diễn ra đồng thời, đối nghịch nhau.' },
    { title: 'Ví dụ tác động', html: `<ul><li>Nội sinh: tạo núi, động đất, núi lửa.</li><li>Ngoại sinh: hang động đá vôi (Phong Nha), đồng bằng phù sa (sông Hồng), cồn cát ven biển.</li></ul>` },
    { title: 'Hiện tượng tạo núi', html: `<p>Quá trình hình thành núi:</p>`,
      svg: S.flowchart({ title: 'Hiện tượng tạo núi', steps: [{ t: 'start', s: 'Hai mảng xô vào' }, { t: 'proc', s: 'Đá bị nén ép' }, { t: 'proc', s: 'Uốn nếp, nâng lên' }, { t: 'end', s: 'Hình thành núi' }] }), caption: 'Quá trình kéo dài hàng triệu năm.' },
    { title: 'Ghi nhớ', html: `<div class="box key">Nội sinh “xây”, ngoại sinh “phá và san” – cùng tạo nên bề mặt Trái Đất.</div>` }
  ],
  summary: 'Quá trình nội sinh xảy ra trong lòng Trái Đất (uốn nếp, đứt gãy, nâng lên, hạ xuống, núi lửa, động đất), làm địa hình gồ ghề. Quá trình ngoại sinh xảy ra trên bề mặt (phong hoá, xâm thực, bồi tụ), có xu hướng san bằng địa hình. Núi hình thành khi các mảng kiến tạo xô vào nhau, đá bị nén ép, uốn nếp và nâng lên.',
  examples: [
    { title: 'Phân loại', problem: 'Hang động Phong Nha hình thành chủ yếu do quá trình nào?', solution: 'Ngoại sinh (nước hoà tan đá vôi).' },
    { title: 'Tốc độ', problem: 'Một dãy núi cao thêm khoảng 5 mm mỗi năm. Sau 1 000 năm cao thêm bao nhiêu mét?', solution: '5 × 1 000 = 5 000 mm = 5 m.' },
    { title: 'Bồi tụ', problem: 'Đồng bằng sông Hồng hình thành do đâu?', solution: 'Phù sa sông bồi tụ (ngoại sinh) trên vùng sụt lún.' }
  ],
  exercises: [
    { question: 'Kể ba biểu hiện của quá trình ngoại sinh.', hints: ['Đá vỡ vụn.', 'Nước cuốn trôi, lắng đọng.'], solution: 'Phong hoá, xâm thực, bồi tụ.' },
    { question: 'Núi cao thêm 4 mm/năm. Sau 10 000 năm cao thêm bao nhiêu mét?', hints: ['4 × 10 000 mm.', 'Chia 1 000 ra m.'], solution: '40 m.' },
    { question: 'Vì sao địa hình không ngày càng cao mãi?', hints: ['Có quá trình nào đối nghịch?', 'San bằng.'], solution: 'Vì ngoại sinh luôn bào mòn, hạ thấp địa hình.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Quá trình nội sinh xảy ra trong lòng Trái Đất.', answer: true, explain: 'Đúng.' },
    { type: 'mcq', q: 'Biểu hiện của ngoại sinh:', options: ['Phong hoá đá', 'Núi lửa phun', 'Động đất', 'Uốn nếp'], answer: 0, explain: 'Phong hoá.' },
    { type: 'short', q: 'Núi cao thêm 5 mm/năm. Sau 1 000 năm thêm bao nhiêu mét?', answer: '5', unit: 'm', calc: '5*1000/1000', explain: '5.' },
    { type: 'mcq', q: 'Quá trình tạo ra núi:', options: ['Nội sinh', 'Ngoại sinh', 'Bồi tụ', 'Xâm thực'], answer: 0, explain: 'Nội sinh.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ngoại sinh làm địa hình ngày càng gồ ghề hơn.', answer: false, explain: 'San bằng.' },
    { type: 'short', q: 'Núi cao thêm 4 mm/năm. Sau 10 000 năm thêm bao nhiêu mét?', answer: '40', unit: 'm', calc: '4*10000/1000', explain: '40.' },
    { type: 'mcq', q: 'Đồng bằng phù sa hình thành do:', options: ['Bồi tụ', 'Uốn nếp', 'Núi lửa', 'Đứt gãy'], answer: 0, explain: 'Bồi tụ.' },
    { type: 'mcq', q: 'Nguồn năng lượng của quá trình ngoại sinh chủ yếu từ:', options: ['Mặt Trời', 'Nhân Trái Đất', 'Mặt Trăng', 'Sao chổi'], answer: 0, explain: 'Mặt Trời.' }
  ]
});
})();
