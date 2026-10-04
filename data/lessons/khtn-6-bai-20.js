/* KHTN 6 – Bài 20. Sự lớn lên và sinh sản của tế bào. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-20', {
  objectives: [
    'Mô tả được sự lớn lên của tế bào.',
    'Mô tả được quá trình sinh sản (phân chia) của tế bào: từ 1 tế bào tạo ra 2 tế bào con.',
    'Tính được số tế bào tạo thành sau n lần phân chia và nêu được ý nghĩa của sự lớn lên, sinh sản của tế bào.'
  ],
  intro: 'Em bé mới sinh nặng khoảng 3 kg, khi trưởng thành có thể nặng 50–60 kg. Cơ thể lớn lên như vậy là nhờ tế bào <b>lớn lên</b> và <b>sinh sản</b>.',
  steps: [
    { title: 'Tế bào lớn lên', html: `<p>Tế bào non mới hình thành có kích thước nhỏ. Nhờ lấy chất dinh dưỡng từ môi trường, tế bào <b>tăng dần kích thước</b> đến một mức nhất định (tế bào trưởng thành).</p>
      <p>Khi đã đủ lớn, một số tế bào có khả năng <b>phân chia</b>.</p>` },
    { title: 'Tế bào sinh sản (phân chia)', html: `<p>Quá trình phân chia của tế bào nhân thực diễn ra theo hai giai đoạn chính:</p>
      <ol><li><b>Phân chia nhân</b>: từ một nhân tạo thành hai nhân.</li><li><b>Phân chia tế bào chất</b>: tế bào chất chia đôi, tách thành <b>hai tế bào con</b>.</li></ol>
      <div class="box key">Từ <b>1</b> tế bào mẹ, sau một lần phân chia tạo thành <b>2</b> tế bào con.</div>` },
    { title: 'Tính số tế bào sau nhiều lần phân chia', html: `<p>Mỗi lần phân chia, số tế bào tăng gấp đôi:</p>
      <p>1 → 2 → 4 → 8 → 16 → …</p><div class="box key">Sau <b>n</b> lần phân chia, từ 1 tế bào tạo ra <b>2<sup>n</sup></b> tế bào. Từ a tế bào tạo ra <b>a × 2<sup>n</sup></b> tế bào.</div>`,
      svg: S.cellDivision({ gens: 3 }), caption: 'Từ 1 tế bào, sau 3 lần phân chia tạo ra 2 × 2 × 2 = 8 tế bào.' },
    { title: 'Ý nghĩa', html: `<ul><li>Giúp cơ thể <b>lớn lên</b> (tăng kích thước, khối lượng).</li><li><b>Thay thế</b> các tế bào già, chết hoặc bị tổn thương (vết thương lành lại, da thay mới).</li>
      <li>Ở sinh vật đơn bào, phân chia tế bào chính là <b>sinh sản</b> tạo ra cá thể mới.</li></ul>` }
  ],
  summary: 'Tế bào lớn lên nhờ lấy chất dinh dưỡng; khi đủ lớn, tế bào phân chia (chia nhân rồi chia tế bào chất) tạo ra 2 tế bào con. Sau n lần phân chia, 1 tế bào tạo ra 2ⁿ tế bào. Sự lớn lên và sinh sản của tế bào giúp cơ thể lớn lên và thay thế tế bào già, tổn thương.',
  examples: [
    { title: 'Tính số tế bào', problem: 'Một tế bào phân chia liên tiếp 4 lần. Tạo ra bao nhiêu tế bào con?', solution: '2<sup>4</sup> = 2 × 2 × 2 × 2 = <b>16</b> tế bào.' },
    { title: 'Nhiều tế bào ban đầu', problem: 'Có 3 tế bào, mỗi tế bào phân chia 2 lần. Tổng số tế bào tạo ra?', solution: '3 × 2<sup>2</sup> = 3 × 4 = <b>12</b> tế bào.' },
    { title: 'Tìm số lần phân chia', problem: 'Từ 1 tế bào tạo ra 32 tế bào. Tế bào đó đã phân chia mấy lần?', solution: '32 = 2 × 2 × 2 × 2 × 2 = 2<sup>5</sup> nên đã phân chia <b>5</b> lần.' }
  ],
  exercises: [
    { question: 'Một tế bào phân chia 6 lần liên tiếp. Tính số tế bào con.', hints: ['Dùng công thức 2ⁿ.', '2⁶ = 64.'], solution: '2<sup>6</sup> = <b>64</b> tế bào.' },
    { question: 'Có 5 tế bào, mỗi tế bào đều phân chia 3 lần. Tính tổng số tế bào con.', hints: ['Mỗi tế bào tạo ra 2³ tế bào.', 'Nhân với số tế bào ban đầu.'], solution: '5 × 2<sup>3</sup> = 5 × 8 = <b>40</b> tế bào.' },
    { question: 'Vì sao khi bị đứt tay nhẹ, sau vài ngày vết thương lại lành?', hints: ['Tế bào ở vết thương bị tổn thương, chết.', 'Tế bào xung quanh làm gì?'], solution: 'Các tế bào da ở xung quanh vết thương <b>lớn lên và phân chia</b> tạo ra tế bào mới, thay thế các tế bào bị tổn thương nên vết thương liền lại.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Từ một tế bào, sau một lần phân chia tạo ra:', options: ['1 tế bào', '2 tế bào', '3 tế bào', '4 tế bào'], answer: 1, explain: 'Một tế bào mẹ chia thành 2 tế bào con.' },
    { type: 'short', q: 'Một tế bào phân chia 3 lần liên tiếp tạo ra bao nhiêu tế bào?', answer: '8', unit: 'tế bào', calc: '2*2*2', explain: '2³ = 8.' },
    { type: 'short', q: 'Có 2 tế bào, mỗi tế bào phân chia 4 lần. Tổng số tế bào con là bao nhiêu?', answer: '32', unit: 'tế bào', calc: '2*2*2*2*2', explain: '2 × 2⁴ = 2 × 16 = 32.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi tế bào phân chia, phần tế bào chất phân chia trước, sau đó mới đến nhân.', answer: false, explain: 'Nhân phân chia trước, sau đó mới đến tế bào chất.' },
    { type: 'mcq', q: 'Sự lớn lên và sinh sản của tế bào có ý nghĩa:', options: ['Giúp cơ thể lớn lên và thay thế tế bào già, tổn thương', 'Làm cơ thể nhỏ lại', 'Chỉ có ở thực vật', 'Không có ý nghĩa gì'], answer: 0, explain: 'Đó là cơ sở cho sự lớn lên và phục hồi của cơ thể.' },
    { type: 'short', q: 'Từ 1 tế bào tạo ra 16 tế bào. Tế bào đã phân chia mấy lần?', answer: '4', unit: 'lần', explain: '16 = 2⁴.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Tế bào lớn lên nhờ lấy chất dinh dưỡng từ môi trường.', answer: true, explain: 'Tế bào hấp thụ chất dinh dưỡng để tăng kích thước.' },
    { type: 'mcq', q: 'Ở sinh vật đơn bào (như trùng roi), sự phân chia tế bào có ý nghĩa là:', options: ['Sinh sản, tạo ra cá thể mới', 'Làm lành vết thương', 'Tạo thành mô', 'Làm cơ thể chết đi'], answer: 0, explain: 'Mỗi tế bào con là một cá thể mới.' }
  ]
});
})();
