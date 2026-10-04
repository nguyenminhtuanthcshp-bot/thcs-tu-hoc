/* KHTN 7 – Bài 40. Sinh sản hữu tính ở sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-40', {
  objectives: [
    'Phát biểu được khái niệm sinh sản hữu tính ở sinh vật; phân biệt được sinh sản vô tính và sinh sản hữu tính.',
    'Mô tả được cấu tạo của hoa, sự thụ phấn, thụ tinh và sự lớn lên của quả.',
    'Mô tả được khái quát quá trình sinh sản hữu tính ở động vật (lấy ví dụ ở người).',
    'Nêu được vai trò của sinh sản hữu tính đối với sinh vật và ứng dụng trong thực tiễn.'
  ],
  intro: 'Vì sao hai anh em ruột có cùng bố mẹ nhưng không giống nhau hoàn toàn? Vì sao hoa thường có màu sắc rực rỡ, hương thơm? Câu trả lời nằm ở sinh sản hữu tính.',
  steps: [
    { title: 'Khái niệm sinh sản hữu tính', html: `<p><b>Sinh sản hữu tính</b> là hình thức sinh sản có sự <b>kết hợp giữa giao tử đực và giao tử cái</b> tạo thành hợp tử; hợp tử phát triển thành cơ thể mới. Cơ thể con mang đặc điểm di truyền của cả bố và mẹ.</p>`,
      svg: S.zygoteFlow(), caption: 'Giao tử đực kết hợp với giao tử cái tạo hợp tử, phát triển thành phôi rồi thành cơ thể mới.' },
    { title: 'Sinh sản hữu tính ở thực vật có hoa', html: `<p><b>Cấu tạo hoa</b>: cuống, đế hoa, đài, tràng (cánh hoa), <b>nhị</b> (bao phấn chứa hạt phấn, chỉ nhị) và <b>nhuỵ</b> (đầu nhuỵ, vòi nhuỵ, bầu nhuỵ chứa noãn). Nhị và nhuỵ là bộ phận sinh sản chủ yếu. Hoa có đủ nhị và nhuỵ là <b>hoa lưỡng tính</b>; hoa chỉ có nhị hoặc nhuỵ là <b>hoa đơn tính</b>.</p>`,
      svg: S.flowerParts(), caption: 'Cấu tạo của hoa lưỡng tính.' },
    { title: 'Thụ phấn, thụ tinh, tạo quả và hạt', html: `<ul><li><b>Thụ phấn</b>: hạt phấn tiếp xúc với đầu nhuỵ. Tự thụ phấn: hạt phấn rơi vào đầu nhuỵ của chính hoa đó; giao phấn: hạt phấn được chuyển đến đầu nhuỵ hoa khác nhờ gió, côn trùng, nước, con người.</li><li><b>Thụ tinh</b>: hạt phấn nảy mầm tạo ống phấn đi qua vòi nhuỵ vào bầu nhuỵ; giao tử đực kết hợp với tế bào trứng trong noãn tạo thành hợp tử.</li><li><b>Tạo quả và hạt</b>: noãn phát triển thành <b>hạt</b> (hợp tử thành phôi), bầu nhuỵ phát triển thành <b>quả</b> chứa hạt.</li></ul>`,
      svg: S.flowerParts({ pollen: true }), caption: 'Hạt phấn nảy mầm tạo ống phấn đưa giao tử đực đến noãn.' },
    { title: 'Sinh sản hữu tính ở động vật và vai trò', html: `<p>Quá trình gồm: hình thành giao tử (tinh trùng, trứng) → <b>thụ tinh</b> tạo hợp tử → hợp tử phát triển thành phôi → cơ thể mới.</p>
      <ul><li><b>Thụ tinh ngoài</b> (trong môi trường nước): cá, ếch. <b>Thụ tinh trong</b> (trong cơ quan sinh dục cái): bò sát, chim, thú, người.</li><li>Ở người: tinh trùng kết hợp với trứng trong ống dẫn trứng tạo hợp tử; hợp tử di chuyển xuống tử cung, làm tổ và phát triển thành thai; thai kì khoảng 38 – 40 tuần (khoảng 9 tháng).</li></ul>
      <div class="box key">Vai trò: tạo ra các cá thể con đa dạng, có khả năng thích nghi tốt với môi trường thay đổi. Ứng dụng: lai tạo giống mới, thụ phấn nhân tạo, thụ tinh nhân tạo.</div>` }
  ],
  summary: 'Sinh sản hữu tính có sự kết hợp giao tử đực và cái tạo hợp tử; con mang đặc điểm của bố và mẹ. Hoa có nhị (bao phấn, chỉ nhị) và nhuỵ (đầu, vòi, bầu nhuỵ chứa noãn). Thụ phấn → thụ tinh → noãn thành hạt, bầu nhuỵ thành quả. Động vật: thụ tinh ngoài (cá, ếch) hoặc thụ tinh trong (chim, thú, người). Sinh sản hữu tính tạo con đa dạng, thích nghi tốt.',
  examples: [
    { title: 'Phân biệt vô tính và hữu tính', problem: 'Nêu hai điểm khác nhau giữa sinh sản vô tính và sinh sản hữu tính.', solution: 'Vô tính: không có kết hợp giao tử, con giống mẹ, ít đa dạng. Hữu tính: có kết hợp giao tử đực và cái, con mang đặc điểm của cả bố và mẹ, đa dạng, thích nghi tốt hơn.' },
    { title: 'Tính số hạt', problem: 'Một quả đậu có bầu nhuỵ chứa 8 noãn, trong đó 75% noãn được thụ tinh. Quả có bao nhiêu hạt?', solution: 'Mỗi noãn được thụ tinh phát triển thành một hạt: 8 · 75 : 100 = 6 hạt.' },
    { title: 'Thụ phấn nhờ côn trùng', problem: 'Hoa thụ phấn nhờ côn trùng thường có đặc điểm gì?', solution: 'Màu sắc sặc sỡ, có hương thơm, mật ngọt để thu hút côn trùng; hạt phấn to, có gai hoặc chất dính để bám vào cơ thể côn trùng.' }
  ],
  exercises: [
    { question: 'Vì sao người trồng ngô, bí thường thụ phấn bổ sung (thụ phấn nhân tạo) cho cây?', hints: ['Nếu thụ phấn tự nhiên không đầy đủ thì sao?', 'Liên hệ số noãn được thụ tinh với số hạt.'], solution: 'Khi thiếu côn trùng hoặc gió, thụ phấn tự nhiên không đầy đủ, nhiều noãn không được thụ tinh, quả ít hạt, lép. Thụ phấn nhân tạo giúp tăng tỉ lệ đậu quả, hạt, tăng năng suất.' },
    { question: 'Hoa bí có hoa đực và hoa cái riêng. Hoa bí thuộc loại hoa gì? Hoa bí có tự thụ phấn được không?', hints: ['Hoa chỉ có nhị hoặc chỉ có nhuỵ gọi là gì?', 'Tự thụ phấn cần nhị và nhuỵ cùng một hoa.'], solution: 'Hoa đơn tính. Không tự thụ phấn được (trong một hoa không có cả nhị và nhuỵ); phải giao phấn nhờ côn trùng hoặc con người.' },
    { question: 'Thai kì ở người khoảng 280 ngày. Khoảng thời gian đó bằng bao nhiêu tuần?', hints: ['1 tuần = 7 ngày.', 'Chia 280 cho 7.'], solution: '280 : 7 = 40 tuần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sinh sản hữu tính có sự kết hợp giữa giao tử đực và giao tử cái.', answer: true, explain: 'Tạo thành hợp tử.' },
    { type: 'mcq', q: 'Sau thụ tinh, bộ phận phát triển thành quả là:', options: ['noãn', 'bầu nhuỵ', 'bao phấn', 'cánh hoa'], answer: 1, explain: 'Noãn thành hạt, bầu nhuỵ thành quả.' },
    { type: 'mcq', q: 'Động vật nào thụ tinh ngoài?', options: ['Gà', 'Chó', 'Cá chép', 'Người'], answer: 2, explain: 'Cá chép thụ tinh trong môi trường nước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Bao phấn là bộ phận của nhuỵ.', answer: false, explain: 'Bao phấn thuộc nhị.' },
    { type: 'short', q: 'Bầu nhuỵ có 8 noãn, 75% được thụ tinh. Quả có bao nhiêu hạt?', answer: '6', unit: 'hạt', calc: '8*75/100', explain: '8 · 0,75 = 6 hạt.' },
    { type: 'short', q: 'Thai kì khoảng 280 ngày. Bằng bao nhiêu tuần?', answer: '40', unit: 'tuần', calc: '280/7', explain: '280 : 7 = 40 tuần.' },
    { type: 'mcq', q: 'Thụ phấn là hiện tượng:', options: ['hạt phấn tiếp xúc với đầu nhuỵ', 'giao tử đực kết hợp với trứng', 'noãn phát triển thành hạt', 'quả chín rụng xuống'], answer: 0, explain: 'Thụ tinh xảy ra sau thụ phấn.' },
    { type: 'short', q: 'Một bông hoa có 5 cánh hoa, 10 nhị và 1 nhuỵ. Tổng số nhị và nhuỵ là bao nhiêu?', answer: '11', unit: 'bộ phận', calc: '10+1', explain: '10 + 1 = 11.' }
  ]
});
})();
