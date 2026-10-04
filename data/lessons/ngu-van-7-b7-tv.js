/* Ngữ văn 7 – Bài 7. Thực hành tiếng Việt: Mạch lạc và liên kết trong văn bản (phép lặp, phép thế, phép nối, từ đồng nghĩa); dấu chấm lửng. Ví dụ do nhóm biên soạn tự viết hoặc là văn học dân gian. */
(function () {
var S = THCS.svg;
THCS.registerLesson('ngu-van-7/b7-tv', {
  objectives: [
    'Nhận biết được mạch lạc của văn bản và các phép liên kết: phép lặp, phép thế, phép nối, dùng từ đồng nghĩa.',
    'Nhận biết và nêu được công dụng của dấu chấm lửng.',
    'Vận dụng liên kết và dấu chấm lửng khi viết đoạn văn.'
  ],
  intro: 'Một đoạn văn có câu nào cũng đúng ngữ pháp nhưng vẫn có thể “rời rạc như cát”. Muốn đoạn văn chặt chẽ, các câu phải cùng hướng về một chủ đề (mạch lạc) và được nối với nhau bằng từ ngữ (liên kết).',
  steps: [
    { title: 'Mạch lạc và liên kết', html: `<table class="tbl"><tr><th></th><th>Mạch lạc</th><th>Liên kết</th></tr>
      <tr><td>Là gì?</td><td>Sự thống nhất về chủ đề, các phần, các câu được sắp xếp theo trình tự hợp lí</td><td>Sự kết nối về hình thức giữa các câu, các đoạn bằng từ ngữ liên kết</td></tr>
      <tr><td>Biểu hiện</td><td>Mọi câu đều hướng về chủ đề; trình tự thời gian, không gian, nhân quả rõ</td><td>Phép lặp, phép thế, phép nối, từ đồng nghĩa</td></tr></table>
      <p>Hai yếu tố gắn bó: liên kết là “sợi chỉ” nhìn thấy được; mạch lạc là “ý” xuyên suốt bên trong.</p>` },
    { title: 'Các phép liên kết', html: `<p>Đoạn mẫu: <i>“<b>Thuyền trưởng Nemo</b> ít nói. <b>Ông</b> thường đứng hàng giờ bên ô kính. <b>Vị thuyền trưởng bí ẩn</b> ấy dường như chỉ trò chuyện với biển. <b>Nhưng</b> khi nói về đại dương, <b>ông</b> lại say sưa như một nhà thơ.”</i></p>`,
      svg: S.mindmap({ center: 'Phép liên kết', branches: [{ title: 'Phép lặp', items: ['Lặp lại từ ngữ ở câu trước', 'biển … biển'] }, { title: 'Phép thế', items: ['Dùng đại từ, từ ngữ thay thế', 'Nemo → ông'] }, { title: 'Phép nối', items: ['Quan hệ từ, từ ngữ nối', 'nhưng, vì vậy, tuy nhiên'] }, { title: 'Từ đồng nghĩa', items: ['Từ cùng nghĩa, gần nghĩa', 'Nemo → vị thuyền trưởng bí ẩn'] }] }),
      caption: 'Bốn phép liên kết thường gặp.' },
    { title: 'Nhận diện lỗi liên kết và mạch lạc', html: `<p>Đoạn lỗi: <i>“Em rất thích đọc truyện viễn tưởng. Hôm qua mẹ em đi chợ mua cá. Jules Verne là nhà văn Pháp.”</i></p>
      <ul><li>Lỗi mạch lạc: câu 2 không liên quan đến chủ đề “thích đọc truyện viễn tưởng”.</li><li>Lỗi liên kết: không có từ ngữ nối các câu.</li></ul>
      <p>Sửa: <i>“Em rất thích đọc truyện viễn tưởng. <b>Trong số đó</b>, em mê nhất <b>truyện</b> của Jules Verne. <b>Nhà văn Pháp này</b> đã đưa em xuống đáy biển, lên cả Mặt Trăng.”</i></p>` },
    { title: 'Dấu chấm lửng và công dụng', html: `<table class="tbl"><tr><th>Công dụng</th><th>Ví dụ</th></tr>
      <tr><td>Tỏ ý còn nhiều sự vật, hiện tượng chưa liệt kê hết</td><td>Trong tàu có phòng khách, thư viện, phòng máy…</td></tr>
      <tr><td>Thể hiện lời nói bỏ dở, ngập ngừng, ngắt quãng</td><td>– Thưa giáo sư… tôi… tôi không bơi nổi nữa…</td></tr>
      <tr><td>Làm giãn nhịp điệu câu văn, chuẩn bị cho sự xuất hiện của nội dung bất ngờ, hài hước</td><td>Họ bám được vào… lưng “quái vật”.</td></tr>
      <tr><td>Mô phỏng âm thanh kéo dài, ngắt quãng</td><td>Tiếng còi tàu u… u… vang lên.</td></tr></table>` },
    { title: 'Viết có liên kết', html: `<p>Quy trình kiểm tra một đoạn văn:</p>`,
      svg: S.flow({ items: [{ title: 'Chủ đề', text: 'Mọi câu cùng hướng về một ý?' }, { title: 'Trình tự', text: 'Thời gian, nhân quả hợp lí?' }, { title: 'Liên kết', text: 'Có lặp, thế, nối, đồng nghĩa?' }, { title: 'Tránh lặp', text: 'Thay từ lặp nhàm chán' }] }),
      caption: 'Bốn câu hỏi kiểm tra tính mạch lạc và liên kết.' }
  ],
  summary: 'Mạch lạc là sự thống nhất chủ đề và trình tự hợp lí; liên kết là sự kết nối hình thức giữa các câu, đoạn qua phép lặp, phép thế (đại từ, từ ngữ thay thế), phép nối (quan hệ từ, từ ngữ nối) và từ đồng nghĩa. Dấu chấm lửng: liệt kê chưa hết; lời nói bỏ dở, ngập ngừng; giãn nhịp chuẩn bị điều bất ngờ; mô phỏng âm thanh kéo dài.',
  examples: [
    { title: 'Chỉ ra phép liên kết', problem: '“Ned Land là thợ săn cá voi giỏi nhất. Anh có thể phóng lao trúng đích từ rất xa.” Hai câu liên kết bằng phép gì?', solution: 'Phép thế: đại từ “anh” ở câu 2 thay cho “Ned Land” ở câu 1.' },
    { title: 'Công dụng dấu chấm lửng', problem: 'Nêu công dụng của dấu chấm lửng: “Mở hộp quà ra, bên trong là… một cục tẩy.”', solution: 'Làm giãn nhịp câu văn, tạo sự chờ đợi để chuẩn bị cho nội dung bất ngờ, hài hước (quà chỉ là một cục tẩy).' },
    { title: 'Sửa đoạn lặp từ', problem: 'Sửa đoạn: “Con mèo nhà em rất lười. Con mèo suốt ngày nằm ngủ. Con mèo chỉ dậy khi đói.”', solution: '“Con mèo nhà em rất lười. Nó suốt ngày nằm ngủ. Chú mèo mướp ấy chỉ chịu dậy khi đói.” – dùng phép thế (“nó”) và từ ngữ đồng nghĩa (“chú mèo mướp ấy”) để tránh lặp nhàm chán.' }
  ],
  exercises: [
    { question: 'Chỉ ra các phép liên kết trong đoạn: “Kéo co là trò chơi dân gian quen thuộc. Trò chơi này cần sức mạnh và sự đoàn kết. Vì vậy, đội nào đồng lòng hơn thường giành chiến thắng.”', hints: ['“Trò chơi này” thay cho gì?', '“Vì vậy” là loại từ ngữ gì?'], solution: 'Phép lặp + phép thế: “trò chơi này” (lặp “trò chơi”, kết hợp chỉ từ “này” thay cho “kéo co”). Phép nối: “Vì vậy” nối câu 3 với câu 2 theo quan hệ nhân quả.' },
    { question: 'Đặt câu có dấu chấm lửng thể hiện lời nói ngập ngừng vì sợ hãi.', hints: ['Nhân vật có thể đang đối mặt điều đáng sợ.', 'Đặt dấu chấm lửng giữa các tiếng bị ngắt.'], solution: 'Ví dụ: “– Cái… cái bóng đen kia… là gì thế?” – dấu chấm lửng thể hiện lời nói đứt quãng vì sợ hãi.' },
    { question: 'Tìm câu làm đoạn văn mất mạch lạc và sửa: “(1) Tàu Nautilus là một con tàu kì diệu. (2) Nó chạy hoàn toàn bằng điện. (3) Em thích ăn kem sô-cô-la. (4) Trong tàu còn có cả một thư viện lớn.”', hints: ['Chủ đề của đoạn là gì?', 'Câu nào không nói về chủ đề?'], solution: 'Câu (3) lạc chủ đề (đoạn nói về tàu Nautilus). Bỏ câu (3) hoặc thay bằng câu đúng chủ đề, ví dụ: “Con tàu có cửa kính lớn để ngắm lòng biển.” Có thể thêm phép nối ở câu 4: “Không chỉ vậy, trong tàu còn có cả một thư viện lớn.”' }
  ],
  quiz: [
    { type: 'mcq', q: 'Dùng từ “ông” thay cho “thuyền trưởng Nemo” ở câu sau là phép liên kết:', options: ['Phép thế', 'Phép lặp', 'Phép nối', 'Phép liệt kê'], answer: 0, explain: 'Dùng đại từ thay thế.' },
    { type: 'mcq', q: 'Từ ngữ nào thường dùng trong phép nối?', options: ['Tuy nhiên, vì vậy, nhưng', 'Nó, họ, ấy', 'Rất, lắm, quá', 'Đẹp, xinh, tươi'], answer: 0, explain: 'Quan hệ từ, từ ngữ nối.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Một đoạn văn có đủ từ ngữ liên kết thì chắc chắn mạch lạc.', answer: false, explain: 'Có thể có liên kết hình thức nhưng các câu vẫn lạc chủ đề.' },
    { type: 'mcq', q: 'Dấu chấm lửng trong “Tiếng gà gáy ò… ó… o…” có công dụng:', options: ['Mô phỏng âm thanh kéo dài', 'Liệt kê chưa hết', 'Kết thúc câu hỏi', 'Đánh dấu lời dẫn'], answer: 0, explain: 'Mô phỏng âm thanh kéo dài, ngắt quãng.' },
    { type: 'mcq', q: '“Trong vườn có cam, bưởi, nhãn, ổi…” – dấu chấm lửng thể hiện:', options: ['Còn nhiều sự vật chưa liệt kê hết', 'Lời nói ngập ngừng', 'Sự bất ngờ', 'Âm thanh kéo dài'], answer: 0, explain: 'Liệt kê chưa hết.' },
    { type: 'short', q: 'Phép liên kết lặp lại từ ngữ đã có ở câu trước gọi là phép gì? (ghi hai tiếng)', answer: ['phép lặp', 'lặp'], answerText: 'phép lặp', explain: 'Phép lặp.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mạch lạc đòi hỏi các câu, các đoạn cùng hướng về một chủ đề và sắp xếp theo trình tự hợp lí.', answer: true, explain: 'Định nghĩa mạch lạc.' },
    { type: 'mcq', q: '“Anh mở cửa ra và… trời ơi, cả lớp đang đợi anh với bó hoa!” Dấu chấm lửng dùng để:', options: ['Giãn nhịp, chuẩn bị cho điều bất ngờ', 'Liệt kê chưa hết', 'Mô phỏng âm thanh', 'Chú thích'], answer: 0, explain: 'Tạo sự chờ đợi trước điều bất ngờ.' }
  ]
});
})();
