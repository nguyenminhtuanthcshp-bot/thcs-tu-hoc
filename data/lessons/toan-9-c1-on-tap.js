/* Toán 9 – Bài tập cuối chương I. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C;
  function sys(a, b) { return '<span class="sys"><span>' + a + '</span><span>' + b + '</span></span>'; }
  THCS.registerLesson('toan-9/c1-on-tap', {
    objectives: [
      'Hệ thống hoá khái niệm phương trình, hệ hai phương trình bậc nhất hai ẩn và các phương pháp giải.',
      'Giải hệ phương trình và biện luận số nghiệm bằng vị trí tương đối của hai đường thẳng.',
      'Giải bài toán thực tế bằng cách lập hệ phương trình (chuyển động, năng suất, pha trộn, giá cả).'
    ],
    intro: 'Chương I trang bị công cụ “hai ẩn – hai phương trình” để giải rất nhiều bài toán thực tế. Hãy ôn lại toàn bộ rồi thử sức với các bài tổng hợp.',
    steps: [
      { title: 'Sơ đồ chương', html: `<p>Các nội dung chính:</p>`,
        svg: S.mindmap({ center: 'Hệ hai phương trình bậc nhất hai ẩn', branches: [
          { title: 'Phương trình ax + by = c', items: ['Vô số nghiệm', 'Biểu diễn: đường thẳng'] },
          { title: 'Giải hệ', items: ['Phương pháp thế', 'Phương pháp cộng đại số'] },
          { title: 'Số nghiệm', items: ['Cắt nhau: 1 nghiệm', 'Song song: vô nghiệm', 'Trùng nhau: vô số'] },
          { title: 'Lập hệ', items: ['Chọn 2 ẩn, điều kiện', 'Lập 2 phương trình', 'Giải, đối chiếu'] }
        ] }) },
      { title: 'Các bước giải bài toán bằng cách lập hệ', html: `<ol><li>Chọn hai ẩn, ghi đơn vị và điều kiện.</li><li>Biểu diễn các đại lượng chưa biết qua ẩn, lập hai phương trình.</li><li>Giải hệ.</li><li>Đối chiếu điều kiện và trả lời.</li></ol>` },
      { title: 'Bài toán chuyển động', html: `<p>Quãng đường = vận tốc × thời gian. Xuôi dòng: v<sub>xuôi</sub> = v<sub>thuyền</sub> + v<sub>nước</sub>; ngược dòng: v<sub>ngược</sub> = v<sub>thuyền</sub> − v<sub>nước</sub>.</p>`,
        svg: S.flow({ items: [{ title: 'Xuôi dòng', text: 'v + u' }, { title: 'Ngược dòng', text: 'v − u' }, { title: 'Hệ', text: 'giải ra v, u' }] }) },
      { title: 'Sai lầm thường gặp', html: `<ul><li>Quên điều kiện của ẩn (số người, số sản phẩm phải là số tự nhiên).</li><li>Nhân một vế mà quên nhân vế kia.</li><li>Không thử lại nghiệm vào đề bài.</li></ul>` }
    ],
    summary: 'Hệ bậc nhất hai ẩn giải bằng thế hoặc cộng đại số; số nghiệm ứng với vị trí tương đối hai đường thẳng. Giải toán: chọn ẩn – lập hệ – giải – đối chiếu.',
    examples: [
      { title: 'Xuôi – ngược dòng', problem: 'Một ca nô đi xuôi dòng 60 km mất 2 giờ và ngược dòng 48 km cũng mất 2 giờ. Tìm vận tốc riêng của ca nô và vận tốc dòng nước.', solution: 'v + u = 30; v − u = 24 ⇒ v = 27 km/h, u = 3 km/h.' },
      { title: 'Pha trộn', problem: 'Cần trộn bao nhiêu lít dung dịch muối 10% và bao nhiêu lít dung dịch 30% để được 20 lít dung dịch 18%?', solution: 'x + y = 20; 0,1x + 0,3y = 3,6 ⇒ x + 3y = 36 ⇒ 2y = 16 ⇒ y = 8, x = 12. Cần 12 lít loại 10% và 8 lít loại 30%.' },
      { title: 'Năng suất', problem: 'Hai tổ làm được 700 sản phẩm. Tháng sau tổ I tăng 10%, tổ II tăng 20% nên làm được 810 sản phẩm. Tháng đầu mỗi tổ làm bao nhiêu sản phẩm?', solution: 'x + y = 700; 1,1x + 1,2y = 810 ⇒ 0,1y = 810 − 770 = 40 ⇒ y = 400, x = 300.' }
    ],
    exercises: [
      { question: 'Giải hệ ' + sys('2(x + y) − 3y = 1', '3x − (x − y) = 8'), hints: ['Thu gọn: 2x − y = 1; 2x + y = 8.', 'Cộng từng vế: 4x = 9.'], solution: 'x = 2,25; y = 3,5.' },
      { question: 'Một mảnh vườn hình chữ nhật có chu vi 56 m. Nếu tăng chiều rộng 4 m và giảm chiều dài 4 m thì vườn thành hình vuông. Tính kích thước vườn.', hints: ['Gọi dài x, rộng y: x + y = 28.', 'x − 4 = y + 4 ⇒ x − y = 8.'], solution: 'Dài 18 m, rộng 10 m.' },
      { question: 'Mua 3 quyển vở và 2 bút hết 36 nghìn đồng; mua 2 quyển vở và 3 bút hết 34 nghìn đồng. Tính giá mỗi quyển vở.', hints: ['3x + 2y = 36; 2x + 3y = 34.', 'Cộng: x + y = 14; trừ: x − y = 2.'], solution: 'Vở 8 nghìn đồng, bút 6 nghìn đồng.' }
    ],
    quiz: [
      { type: 'short', calc: '(30 + 24) / 2', q: 'Ca nô xuôi dòng 60 km mất 2 giờ, ngược dòng 48 km mất 2 giờ. Vận tốc riêng của ca nô (km/h)?', unit: 'km/h', answer: '27', explain: 'v + u = 30, v − u = 24.' },
      { type: 'short', calc: '(30 - 24) / 2', q: 'Với bài trên, vận tốc dòng nước là bao nhiêu km/h?', unit: 'km/h', answer: '3', explain: 'u = 3.' },
      { type: 'short', calc: '(36 - 20) / 2', q: 'Trộn dung dịch muối 10% và 30% để được 20 lít dung dịch 18%. Cần bao nhiêu lít loại 30%?', unit: 'lít', answer: '8', explain: 'x + y = 20; x + 3y = 36.' },
      { type: 'short', calc: '(810 - 1.1 * 700) / 0.1', q: 'Hai tổ làm 700 sản phẩm; tháng sau tổ I tăng 10%, tổ II tăng 20%, tổng 810. Tháng đầu tổ II làm bao nhiêu sản phẩm?', answer: '400', explain: '0,1y = 40.' },
      { type: 'mcq', q: 'Hệ ' + sys('x − 2y = 1', '−2x + 4y = −2') + ' có:', options: ['nghiệm duy nhất', 'vô nghiệm', 'vô số nghiệm', 'đúng hai nghiệm'], answer: 2, explain: 'Phương trình (2) bằng (1) nhân −2: hai đường thẳng trùng nhau.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mảnh vườn có chu vi 56 m, chiều dài hơn chiều rộng 8 m thì chiều rộng là 10 m.', answer: true, explain: 'x + y = 28, x − y = 8 ⇒ y = 10.' },
      { type: 'short', calc: '((36 + 34) / 5 + (36 - 34)) / 2', q: '3 vở + 2 bút = 36 nghìn; 2 vở + 3 bút = 34 nghìn. Giá một quyển vở (nghìn đồng)?', unit: 'nghìn đồng', answer: '8', explain: 'x + y = 14, x − y = 2.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi giải bài toán bằng cách lập hệ, không cần đối chiếu nghiệm với điều kiện của ẩn.', answer: false, explain: 'Luôn phải đối chiếu điều kiện.' }
    ]
  });
})();
