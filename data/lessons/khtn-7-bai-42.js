/* KHTN 7 – Bài 42. Cơ thể sinh vật là một thể thống nhất. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-42', {
  objectives: [
    'Dựa vào sơ đồ mối quan hệ giữa tế bào – cơ thể – môi trường và sơ đồ quan hệ giữa các hoạt động sống, chứng minh được cơ thể sinh vật là một thể thống nhất.',
    'Nêu được mối quan hệ giữa trao đổi chất và chuyển hoá năng lượng, cảm ứng, sinh trưởng, phát triển và sinh sản.',
    'Lấy được ví dụ về sự phối hợp hoạt động giữa các cơ quan trong cơ thể thực vật và động vật.'
  ],
  intro: 'Khi em chạy thi, không chỉ đôi chân làm việc: tim đập nhanh, thở gấp, mồ hôi toát ra, não điều khiển từng bước chạy. Mọi bộ phận cùng phối hợp như một đội bóng ăn ý.',
  steps: [
    { title: 'Các cấp tổ chức của cơ thể', html: `<p>Cơ thể đa bào được tổ chức theo các cấp từ nhỏ đến lớn: <b>tế bào → mô → cơ quan → hệ cơ quan → cơ thể</b>. Mỗi cấp có cấu tạo và chức năng riêng nhưng liên hệ chặt chẽ với nhau; tế bào là đơn vị cấu trúc và chức năng của cơ thể.</p>`,
      svg: S.flow({ items: ['Tế bào', 'Mô', 'Cơ quan', 'Hệ cơ quan', 'Cơ thể'], size: 15, label: 'Các cấp tổ chức của cơ thể đa bào' }),
      caption: 'Các cấp tổ chức của cơ thể đa bào.' },
    { title: 'Quan hệ giữa tế bào – cơ thể – môi trường', html: `<p>Cơ thể lấy các chất từ môi trường (oxygen, nước, thức ăn…) đưa đến từng tế bào; tế bào thực hiện trao đổi chất và chuyển hoá năng lượng, tạo ra năng lượng và chất thải; chất thải được đưa ra môi trường. Mọi hoạt động của cơ thể đều bắt nguồn từ hoạt động sống của tế bào.</p>`,
      svg: S.flow({ items: ['Môi trường cung cấp oxygen, nước, chất dinh dưỡng', 'Cơ thể tiếp nhận, vận chuyển đến tế bào', 'Tế bào trao đổi chất, tạo năng lượng', 'Chất thải được đưa trả ra môi trường'], size: 14, label: 'Quan hệ tế bào – cơ thể – môi trường' }),
      caption: 'Tế bào, cơ thể và môi trường liên hệ với nhau qua trao đổi chất.' },
    { title: 'Quan hệ giữa các hoạt động sống', html: `<p>Các hoạt động sống liên quan mật thiết:</p>
      <ul><li><b>Trao đổi chất và chuyển hoá năng lượng</b> cung cấp nguyên liệu, năng lượng cho sinh trưởng, phát triển, cảm ứng, sinh sản.</li><li><b>Cảm ứng</b> giúp cơ thể thích nghi, tìm nguồn sống, tránh nguy hiểm.</li><li><b>Sinh trưởng, phát triển</b> giúp cơ thể trưởng thành để <b>sinh sản</b>, duy trì nòi giống.</li></ul>`,
      svg: S.unityWheel({ center: 'Cơ thể', items: ['Trao đổi chất và\nchuyển hoá năng lượng', 'Cảm ứng', 'Sinh trưởng và\nphát triển', 'Sinh sản'], bw: 190 }),
      caption: 'Các hoạt động sống của cơ thể có quan hệ qua lại, tạo thành một thể thống nhất.' },
    { title: 'Ví dụ về sự phối hợp giữa các cơ quan', html: `<ul><li><b>Ở cây xanh</b>: rễ hút nước, muối khoáng → mạch gỗ đưa lên lá → lá quang hợp tạo chất hữu cơ → mạch rây đưa chất hữu cơ nuôi rễ, thân, hoa, quả. Nếu rễ bị hỏng thì lá héo, cây không ra hoa, kết quả được.</li><li><b>Ở người</b>: khi vận động, hệ cơ hoạt động mạnh; hệ hô hấp tăng lấy oxygen; hệ tuần hoàn tăng vận chuyển oxygen, chất dinh dưỡng; da tiết mồ hôi; tất cả được <b>hệ thần kinh và hệ nội tiết điều khiển, điều hoà</b>.</li></ul>
      <div class="box key">Cơ thể sinh vật là một thể thống nhất: các cơ quan, hệ cơ quan và các hoạt động sống phối hợp nhịp nhàng, đồng thời thống nhất với môi trường.</div>` }
  ],
  summary: 'Cơ thể gồm các cấp tổ chức: tế bào → mô → cơ quan → hệ cơ quan → cơ thể. Tế bào, cơ thể và môi trường liên hệ qua trao đổi chất. Trao đổi chất và chuyển hoá năng lượng là cơ sở cho cảm ứng, sinh trưởng, phát triển và sinh sản. Các cơ quan phối hợp nhịp nhàng dưới sự điều khiển của hệ thần kinh và nội tiết ⇒ cơ thể là một thể thống nhất.',
  examples: [
    { title: 'Phối hợp khi chạy', problem: 'Khi chạy, những hệ cơ quan nào của cơ thể người tăng cường hoạt động? Vì sao?', solution: 'Hệ vận động (cơ co mạnh), hệ hô hấp (thở nhanh lấy oxygen), hệ tuần hoàn (tim đập nhanh vận chuyển oxygen, chất dinh dưỡng), da (tiết mồ hôi toả nhiệt), hệ thần kinh điều khiển. Vì cơ cần nhiều năng lượng, các hệ phải phối hợp cung cấp.' },
    { title: 'Tính nhịp tim', problem: 'Lúc nghỉ, tim đập 72 lần/phút; khi chạy tăng thêm 50%. Khi chạy tim đập bao nhiêu lần/phút?', solution: '72 + 72 · 50 : 100 = 72 + 36 = 108 lần/phút.' },
    { title: 'Mối quan hệ ở cây', problem: 'Vì sao cây bị sâu ăn trụi lá thường không ra hoa, kết quả được?', solution: 'Không có lá thì cây không quang hợp, thiếu chất hữu cơ và năng lượng cho sinh trưởng, phát triển và sinh sản.' }
  ],
  exercises: [
    { question: 'Chứng minh trao đổi chất và chuyển hoá năng lượng là cơ sở cho các hoạt động sống khác.', hints: ['Sinh trưởng cần gì?', 'Cảm ứng, sinh sản cần năng lượng từ đâu?'], solution: 'Sinh trưởng cần nguyên liệu để tạo tế bào mới; cảm ứng, vận động, sinh sản cần năng lượng. Nguyên liệu và năng lượng đều do trao đổi chất và chuyển hoá năng lượng cung cấp; ngừng trao đổi chất thì mọi hoạt động sống ngừng.' },
    { question: 'Lấy ví dụ chứng tỏ cơ thể thống nhất với môi trường.', hints: ['Khi trời nóng cơ thể phản ứng thế nào?', 'Khi trời lạnh thì sao?'], solution: 'Trời nóng: cơ thể tiết mồ hôi, mạch máu dưới da dãn để toả nhiệt; trời lạnh: nổi da gà, run để sinh nhiệt, giữ thân nhiệt ổn định. Cây thiếu nước thì khí khổng đóng để giảm mất nước.' },
    { question: 'Lúc nghỉ, một người thở 16 lần/phút; khi chạy thở 40 lần/phút. Nhịp thở khi chạy gấp bao nhiêu lần lúc nghỉ?', hints: ['Lấy nhịp khi chạy chia nhịp lúc nghỉ.', '40 : 16.'], solution: '40 : 16 = 2,5 lần.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các cơ quan trong cơ thể hoạt động phối hợp với nhau dưới sự điều khiển của hệ thần kinh và hệ nội tiết.', answer: true, explain: 'Cơ thể là một thể thống nhất.' },
    { type: 'mcq', q: 'Thứ tự đúng các cấp tổ chức của cơ thể đa bào là:', options: ['Mô → tế bào → cơ quan → hệ cơ quan → cơ thể', 'Tế bào → mô → cơ quan → hệ cơ quan → cơ thể', 'Tế bào → cơ quan → mô → cơ thể → hệ cơ quan', 'Cơ quan → mô → tế bào → cơ thể'], answer: 1, explain: 'Từ nhỏ đến lớn.' },
    { type: 'mcq', q: 'Hoạt động sống nào cung cấp nguyên liệu và năng lượng cho các hoạt động sống khác?', options: ['Cảm ứng', 'Sinh sản', 'Trao đổi chất và chuyển hoá năng lượng', 'Tập tính'], answer: 2, explain: 'Là cơ sở của sự sống.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Rễ cây bị hỏng không ảnh hưởng gì đến hoạt động của lá.', answer: false, explain: 'Lá thiếu nước sẽ héo, không quang hợp được.' },
    { type: 'short', q: 'Tim đập 72 lần/phút lúc nghỉ; khi chạy tăng 50%. Khi chạy tim đập bao nhiêu lần/phút?', answer: '108', unit: 'lần/phút', calc: '72*(1+50/100)', explain: '72 + 36 = 108.' },
    { type: 'short', q: 'Thở 16 lần/phút lúc nghỉ, 40 lần/phút khi chạy. Nhịp thở khi chạy gấp bao nhiêu lần?', answer: '2,5', unit: 'lần', calc: '40/16', explain: '40 : 16 = 2,5.' },
    { type: 'mcq', q: 'Khi trời nóng, cơ thể tiết nhiều mồ hôi. Điều này thể hiện:', options: ['cơ thể thống nhất với môi trường', 'cơ thể không liên hệ với môi trường', 'hệ tiêu hoá hoạt động mạnh', 'cơ thể ngừng trao đổi chất'], answer: 0, explain: 'Điều hoà thân nhiệt thích nghi với môi trường.' },
    { type: 'short', q: 'Một bạn chạy liên tục 20 phút, tim đập trung bình 108 lần/phút. Trong thời gian đó tim đập tổng cộng bao nhiêu lần?', answer: '2160', unit: 'lần', calc: '108*20', explain: '108 · 20 = 2 160 lần.' }
  ]
});
})();
