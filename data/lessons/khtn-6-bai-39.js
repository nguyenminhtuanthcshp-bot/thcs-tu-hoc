/* KHTN 6 – Bài 39. Tìm hiểu sinh vật ngoài thiên nhiên. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-39', {
  objectives: [
    'Lập được kế hoạch và thực hiện được buổi tìm hiểu sinh vật ngoài thiên nhiên (thực địa).',
    'Quan sát, ghi chép, chụp ảnh và phân loại được các sinh vật (thực vật, động vật, nấm…) tại khu vực thực địa.',
    'Viết được báo cáo và nêu được đề xuất bảo vệ sinh vật tại địa phương.'
  ],
  intro: 'Bài học cuối chương là một chuyến "thám hiểm" nhỏ: em cùng nhóm ra vườn trường, công viên hay cánh đồng để tìm hiểu có những sinh vật nào đang sống ở đó.',
  steps: [
    { title: 'Lập kế hoạch', html: `<ul><li>Chọn địa điểm: vườn trường, công viên, bờ ao, ruộng lúa, đồi cây…</li><li>Chia nhóm 4–6 bạn, phân công: người chụp ảnh, người ghi chép, người quan sát bằng kính lúp, người trình bày.</li>
      <li>Dụng cụ: kính lúp, ống nhòm, điện thoại/máy ảnh, sổ ghi chép, túi đựng mẫu lá, thước dây, găng tay, túi rác.</li></ul>
      <div class="box warn">Đi cùng giáo viên; không tự ý tách nhóm; tránh nơi nước sâu, bụi rậm, cây có gai, côn trùng đốt; không hái nấm, quả lạ; mang rác về.</div>` },
    { title: 'Quan sát và ghi chép thực địa', html: `<ol><li>Đánh dấu một ô quan sát (ví dụ 2 m × 2 m) hoặc đi theo một tuyến đường.</li><li>Ghi tên (hoặc mô tả) các sinh vật gặp được, nơi sống, số lượng ước tính; chụp ảnh.</li>
      <li>Với cây: quan sát rễ, thân, lá, hoa, quả; có thể lấy một lá rụng làm mẫu ép. Với động vật: quan sát cách di chuyển, thức ăn.</li><li>Chú ý cả nấm (trên gốc cây mục), rêu (tường ẩm).</li></ol>` },
    { title: 'Xử lí kết quả', html: `<p>Lập bảng phân loại và đếm số loài theo nhóm:</p><table class="tbl"><tr><th>Nhóm</th><th>Tên sinh vật</th><th>Số loài</th></tr>
      <tr><td>Thực vật</td><td>Cỏ may, bàng, phượng, rêu…</td><td>…</td></tr><tr><td>Động vật</td><td>Kiến, bướm, chim sẻ, giun đất…</td><td>…</td></tr><tr><td>Nấm</td><td>Nấm trên gốc cây mục…</td><td>…</td></tr></table>`,
      svg: S.bar({ cats: ['Thực vật', 'Động vật', 'Nấm'], series: [{ name: 'Số loài', values: [12, 9, 2] }], width: 520, height: 280, yLabel: 'Số loài', title: 'Số loài gặp được ở vườn trường (ví dụ)' }),
      caption: 'Ví dụ biểu đồ số loài một nhóm học sinh ghi nhận được ở vườn trường.' },
    { title: 'Báo cáo và đề xuất', html: `<ul><li>Báo cáo gồm: mục đích, địa điểm, thời gian, kết quả (bảng, ảnh, biểu đồ), nhận xét về mức độ đa dạng.</li>
      <li>Đề xuất: trồng thêm cây, làm nhà cho chim, không phun thuốc trừ sâu bừa bãi, dọn rác…</li></ul>` }
  ],
  summary: 'Tìm hiểu sinh vật ngoài thiên nhiên gồm: lập kế hoạch (địa điểm, phân công, dụng cụ, an toàn), quan sát – ghi chép – chụp ảnh, phân loại và thống kê sinh vật, viết báo cáo và đề xuất bảo vệ sinh vật tại địa phương.',
  examples: [
    { title: 'Tính diện tích ô quan sát', problem: 'Ô quan sát hình vuông cạnh 2 m có diện tích bao nhiêu?', solution: '2 × 2 = <b>4 m²</b>.' },
    { title: 'Thống kê', problem: 'Nhóm em ghi nhận 12 loài thực vật, 9 loài động vật và 2 loài nấm. Tổng số loài là bao nhiêu? Nhóm nào nhiều loài nhất?', solution: '12 + 9 + 2 = <b>23</b> loài. Nhiều nhất: <b>thực vật</b> (12 loài).' },
    { title: 'Phân công', problem: 'Vì sao nên phân công nhiệm vụ cho từng thành viên trước khi đi?', solution: 'Để mỗi bạn biết việc cần làm, không bỏ sót thông tin, tiết kiệm thời gian và đảm bảo an toàn cho cả nhóm.' }
  ],
  exercises: [
    { question: 'Kể ba quy tắc an toàn khi đi tìm hiểu sinh vật ngoài thiên nhiên.', hints: ['Đi với ai?', 'Cần tránh những gì?'], solution: 'Đi theo nhóm cùng giáo viên, không tự tách đoàn; tránh nơi nước sâu, bụi rậm; không chạm vào côn trùng đốt, không hái, nếm nấm, quả lạ (và mặc quần áo dài, đi giày).' },
    { question: 'Hai nhóm cùng quan sát một vườn: nhóm A ghi được 18 loài, nhóm B ghi được 11 loài. Nêu hai lí do có thể giải thích sự khác nhau này.', hints: ['Hai nhóm quan sát có giống nhau về chỗ, thời gian không?', 'Kĩ năng quan sát, dụng cụ?'], solution: 'Có thể do: khu vực/tuyến đi khác nhau; thời gian quan sát khác nhau; nhóm A quan sát kĩ hơn, có kính lúp, ống nhòm; nhóm B bỏ sót sinh vật nhỏ.' },
    { question: 'Ô quan sát hình chữ nhật dài 3 m, rộng 2 m. Tính diện tích.', hints: ['Diện tích hình chữ nhật = dài × rộng.', '3 × 2.'], solution: '3 × 2 = <b>6 m²</b>.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Việc đầu tiên khi tổ chức tìm hiểu sinh vật ngoài thiên nhiên là:', options: ['Lập kế hoạch', 'Viết báo cáo', 'Trình bày kết quả', 'Vẽ biểu đồ'], answer: 0, explain: 'Cần lập kế hoạch trước.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể hái nấm lạ ở gốc cây để nếm thử.', answer: false, explain: 'Nấm lạ có thể có độc.' },
    { type: 'mcq', q: 'Dụng cụ dùng để quan sát kĩ chiếc lá nhỏ, con côn trùng là:', options: ['Kính lúp', 'Ống nhòm', 'Thước dây', 'Túi rác'], answer: 0, explain: 'Kính lúp phóng to vật nhỏ.' },
    { type: 'short', q: 'Nhóm em ghi được 12 loài thực vật, 9 loài động vật, 2 loài nấm. Tổng số loài?', answer: '23', unit: 'loài', calc: '12+9+2', explain: '12 + 9 + 2 = 23.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Sau buổi thực địa cần mang rác về, không để lại nơi quan sát.', answer: true, explain: 'Bảo vệ môi trường sống của sinh vật.' },
    { type: 'mcq', q: 'Rêu thường được tìm thấy ở:', options: ['Tường ẩm, gốc cây', 'Cát khô nóng', 'Mặt đường nhựa', 'Trên mái tôn nắng'], answer: 0, explain: 'Rêu ưa ẩm.' },
    { type: 'short', q: 'Ô quan sát hình vuông cạnh 2 m có diện tích bao nhiêu m²?', answer: '4', unit: 'm²', calc: '2*2', explain: '2 × 2 = 4 m².' },
    { type: 'mcq', q: 'Nội dung nào KHÔNG cần có trong báo cáo thực địa?', options: ['Giá vé xem phim', 'Địa điểm, thời gian', 'Kết quả quan sát', 'Đề xuất bảo vệ sinh vật'], answer: 0, explain: 'Báo cáo chỉ gồm thông tin liên quan buổi thực địa.' }
  ]
});
})();
