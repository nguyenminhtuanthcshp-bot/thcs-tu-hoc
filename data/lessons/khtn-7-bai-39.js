/* KHTN 7 – Bài 39. Sinh sản vô tính ở sinh vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-39', {
  objectives: [
    'Phát biểu được khái niệm sinh sản vô tính ở sinh vật.',
    'Dựa vào hình ảnh, phân biệt được các hình thức sinh sản sinh dưỡng ở thực vật và các hình thức sinh sản vô tính ở động vật.',
    'Vận dụng được những hiểu biết về sinh sản vô tính ở thực vật vào thực tiễn (giâm cành, chiết cành, ghép, nuôi cấy mô).'
  ],
  intro: 'Chỉ cần cắm một đoạn thân sắn xuống đất ẩm, vài tuần sau đã mọc thành cây mới. Một chiếc lá thuốc bỏng rơi xuống cũng có thể nảy ra những cây con. Cây mới sinh ra mà không cần hoa, không cần hạt!',
  steps: [
    { title: 'Khái niệm sinh sản vô tính', html: `<p><b>Sinh sản vô tính</b> là hình thức sinh sản <b>không có sự kết hợp</b> giữa giao tử đực và giao tử cái; cơ thể con được hình thành từ một phần của cơ thể mẹ (hoặc bố) nên <b>giống nhau và giống cơ thể mẹ</b>.</p>` },
    { title: 'Sinh sản vô tính ở thực vật', html: `<p><b>Sinh sản sinh dưỡng</b>: cây mới mọc lên từ cơ quan sinh dưỡng (rễ, thân, lá) của cây mẹ.</p>
      <ul><li>Từ thân: thân củ khoai tây, thân rễ gừng, nghệ, thân bò rau má, cỏ tranh.</li><li>Từ rễ: rễ củ khoai lang.</li><li>Từ lá: lá thuốc bỏng (sống đời).</li></ul>
      <p><b>Nhân giống vô tính</b> do con người thực hiện:</p>
      <ul><li><b>Giâm cành</b>: cắm đoạn cành (sắn, mía, hoa hồng…) xuống đất ẩm cho ra rễ.</li><li><b>Chiết cành</b>: bóc một khoanh vỏ, bó đất ẩm cho ra rễ rồi cắt rời cành đem trồng (cam, bưởi, vải…).</li><li><b>Ghép</b>: gắn chồi hoặc cành của cây này lên gốc cây khác cùng loài hoặc loài gần gũi.</li><li><b>Nuôi cấy mô</b>: nuôi các tế bào, mô trong môi trường dinh dưỡng vô trùng để tạo ra rất nhiều cây con trong thời gian ngắn (lan, chuối, khoai tây…).</li></ul>`,
      svg: S.row([{ svg: S.vegProp('giam'), caption: 'Giâm cành' }, { svg: S.vegProp('chiet'), caption: 'Chiết cành' }, { svg: S.vegProp('ghep'), caption: 'Ghép cành' }]) },
    { title: 'Sinh sản vô tính ở động vật', html: `<ul><li><b>Phân đôi</b>: cơ thể mẹ tự chia thành hai cơ thể con (trùng biến hình, trùng giày).</li><li><b>Nảy chồi</b>: cơ thể con mọc ra như chồi trên cơ thể mẹ rồi tách ra sống độc lập hoặc ở dính với mẹ (thuỷ tức, san hô).</li><li><b>Phân mảnh</b>: từ một mảnh cơ thể phát triển thành cơ thể mới (sao biển, giun dẹp).</li><li><b>Trinh sản</b>: trứng không thụ tinh phát triển thành cơ thể mới (ong đực phát triển từ trứng không thụ tinh).</li></ul>`,
      svg: [S.asexualAnimal('phan-doi'), S.asexualAnimal('nay-choi')], caption: 'Sinh sản bằng phân đôi (trên) và thuỷ tức sinh sản bằng nảy chồi (dưới).' },
    { title: 'Vai trò và ứng dụng', html: `<div class="box key">Ưu điểm: tạo ra nhiều cá thể nhanh, giữ nguyên đặc tính tốt của cây mẹ, rút ngắn thời gian cho thu hoạch. Hạn chế: các cá thể giống hệt nhau nên khả năng thích nghi kém khi môi trường thay đổi.</div>
      <p>Ứng dụng: nhân nhanh giống cây ăn quả, hoa, cây lâm nghiệp; bảo tồn giống quý hiếm; tạo cây sạch bệnh bằng nuôi cấy mô.</p>` }
  ],
  summary: 'Sinh sản vô tính không có sự kết hợp giao tử, con giống mẹ. Thực vật: sinh sản sinh dưỡng từ rễ, thân, lá; con người nhân giống bằng giâm, chiết, ghép, nuôi cấy mô. Động vật: phân đôi, nảy chồi, phân mảnh, trinh sản. Ưu điểm: nhanh, giữ đặc tính tốt của mẹ.',
  examples: [
    { title: 'Nhận dạng hình thức', problem: 'Mỗi trường hợp sau thuộc hình thức sinh sản vô tính nào: (1) củ khoai tây mọc mầm thành cây; (2) thuỷ tức mọc chồi; (3) trùng giày chia đôi; (4) người trồng cắm cành hoa hồng xuống đất.', solution: '(1) sinh sản sinh dưỡng từ thân củ; (2) nảy chồi; (3) phân đôi; (4) giâm cành.' },
    { title: 'Tính số cá thể do phân đôi', problem: 'Một tế bào vi khuẩn cứ 20 phút phân đôi một lần. Sau 2 giờ, từ 1 tế bào tạo ra bao nhiêu tế bào?', solution: '2 giờ = 120 phút = 6 lần phân đôi; số tế bào: 2 · 2 · 2 · 2 · 2 · 2 = 64 tế bào.' },
    { title: 'Chọn phương pháp', problem: 'Người trồng muốn có cây cam cho quả sớm, giữ được vị ngọt của cây mẹ. Nên nhân giống bằng cách nào?', solution: 'Chiết cành (hoặc ghép) từ cây mẹ có quả ngọt: cây con giữ đặc tính của mẹ, cho quả sớm hơn trồng từ hạt.' }
  ],
  exercises: [
    { question: 'Vì sao cây trồng bằng cách chiết cành thường cho quả sớm hơn cây trồng từ hạt?', hints: ['Cành chiết đã ở giai đoạn nào?', 'Cây từ hạt phải trải qua những giai đoạn nào?'], solution: 'Cành chiết lấy từ cây mẹ đã trưởng thành, đã có khả năng ra hoa, nên trồng xuống sớm cho quả; cây từ hạt phải trải qua giai đoạn cây non kéo dài nhiều năm.' },
    { question: 'Từ một mẫu mô, sau mỗi tháng số cây con nuôi cấy tăng gấp 4 lần. Sau 3 tháng, từ 1 mẫu tạo ra bao nhiêu cây con?', hints: ['Mỗi tháng nhân 4.', '4 · 4 · 4.'], solution: '4 · 4 · 4 = 64 cây con.' },
    { question: 'Nêu một hạn chế của sinh sản vô tính và giải thích.', hints: ['Các cây con có giống nhau không?', 'Nếu có dịch bệnh hoặc môi trường thay đổi thì sao?'], solution: 'Các cá thể giống hệt nhau về di truyền nên khi môi trường thay đổi hoặc có dịch bệnh, cả quần thể dễ bị ảnh hưởng cùng lúc (khả năng thích nghi kém).' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sinh sản vô tính không có sự kết hợp giữa giao tử đực và giao tử cái.', answer: true, explain: 'Con được tạo từ một phần cơ thể mẹ.' },
    { type: 'mcq', q: 'Thuỷ tức sinh sản vô tính bằng hình thức:', options: ['phân đôi', 'nảy chồi', 'trinh sản', 'giâm cành'], answer: 1, explain: 'Chồi mọc trên cơ thể mẹ.' },
    { type: 'mcq', q: 'Cây mới mọc lên từ lá là ở:', options: ['khoai tây', 'gừng', 'cây thuốc bỏng', 'khoai lang'], answer: 2, explain: 'Mép lá thuốc bỏng mọc ra cây con.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cây con tạo ra bằng giâm cành mang đặc điểm khác hẳn cây mẹ.', answer: false, explain: 'Cây con giống cây mẹ.' },
    { type: 'short', q: 'Vi khuẩn phân đôi 20 phút một lần. Sau 1 giờ, từ 1 tế bào có bao nhiêu tế bào?', answer: '8', unit: 'tế bào', calc: '2*2*2', explain: '3 lần phân đôi: 2³ = 8.' },
    { type: 'short', q: 'Nuôi cấy mô: mỗi tháng số cây tăng gấp 4 lần. Sau 3 tháng từ 1 mẫu có bao nhiêu cây?', answer: '64', unit: 'cây', calc: '4*4*4', explain: '4³ = 64.' },
    { type: 'mcq', q: 'Phương pháp tạo nhiều cây con sạch bệnh nhất trong thời gian ngắn là:', options: ['giâm cành', 'chiết cành', 'nuôi cấy mô', 'gieo hạt'], answer: 2, explain: 'Nuôi cấy trong môi trường vô trùng.' },
    { type: 'short', q: 'Mỗi cây sắn mẹ cho 8 hom, mỗi hom trồng được 1 cây. Từ 25 cây mẹ trồng được bao nhiêu cây?', answer: '200', unit: 'cây', calc: '25*8', explain: '25 · 8 = 200 cây.' }
  ]
});
})();
