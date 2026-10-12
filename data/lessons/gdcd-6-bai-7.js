/* GDCD 6 – Bài 7. Ứng phó với tình huống nguy hiểm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('gdcd-6/bai-7', {
  objectives: [
    'Nhận biết được các tình huống nguy hiểm từ tự nhiên và từ con người.',
    'Nêu được hậu quả của tình huống nguy hiểm đối với trẻ em.',
    'Biết cách ứng phó với một số tình huống nguy hiểm; ghi nhớ các số điện thoại khẩn cấp.'
  ],
  intro: 'Tan học, trời đổ mưa to, nước dâng ngập đường. Một người lạ đề nghị chở An về nhà. An nên làm gì? Biết <b>ứng phó với tình huống nguy hiểm</b> giúp em bảo vệ bản thân.',
  steps: [
    { title: 'Tình huống nguy hiểm là gì?', html: `<p><b>Tình huống nguy hiểm</b> là những sự việc bất ngờ xảy ra có thể gây tổn hại về tính mạng, sức khoẻ, tài sản, tinh thần cho bản thân và người khác.</p>
      <ul><li><b>Từ tự nhiên</b>: lũ lụt, giông lốc, sét đánh, lũ quét, sạt lở đất, động đất…</li><li><b>Từ con người</b>: cháy nổ, đuối nước, tai nạn giao thông, bắt cóc, xâm hại, bạo lực, điện giật…</li></ul>` },
    { title: 'Số điện thoại khẩn cấp', html: `<p>Ở Việt Nam, các số khẩn cấp gọi miễn phí:</p>`,
      svg: S.table({ title: 'Các số điện thoại khẩn cấp', head: ['Số', 'Khi nào gọi'], rows: [['113', 'Công an (trộm cướp, bắt cóc)'], ['114', 'Cứu hoả, cứu nạn cứu hộ'], ['115', 'Cấp cứu y tế'], ['111', 'Tổng đài quốc gia bảo vệ trẻ em']], colW: 250 }), caption: 'Nói rõ địa chỉ, sự việc, giữ bình tĩnh khi gọi.' },
    { title: 'Ứng phó với người lạ', html: `<p>Quy tắc chung: <b>bình tĩnh – tránh xa nguy hiểm – kêu cứu, báo người tin cậy hoặc số khẩn cấp</b>.</p>`,
      svg: S.flowchart({ title: 'Người lạ rủ đi cùng hoặc cho quà', steps: [{ t: 'start', s: 'Người lạ tiếp cận' }, { t: 'if', s: 'Bố mẹ đã dặn trước?', yes: 'Vẫn gọi xác nhận', no: 'Từ chối, tránh xa' }, { t: 'proc', s: 'Đến nơi đông người, báo người lớn' }, { t: 'end', s: 'An toàn' }] }), caption: 'Không đi theo, không nhận quà của người lạ.' },
    { title: 'Ứng phó với thiên tai, cháy', html: `<ul><li>Giông sét: tránh xa cây cao, cột điện; không trú dưới gốc cây; vào nhà kiên cố.</li><li>Lũ: không lội qua dòng nước chảy xiết; di chuyển lên nơi cao.</li><li>Cháy: bình tĩnh, gọi 114, che mũi miệng bằng khăn ướt, cúi thấp, thoát theo lối thoát hiểm; không dùng thang máy.</li><li>Đuối nước: không tự nhảy xuống cứu nếu không biết bơi; kêu người lớn, ném phao, sào.</li></ul>` }
  ],
  summary: 'Tình huống nguy hiểm có thể đến từ tự nhiên (lũ, sét, sạt lở…) hoặc con người (cháy, đuối nước, tai nạn, bắt cóc, xâm hại…), gây tổn hại tính mạng, sức khoẻ, tài sản, tinh thần. Cách ứng phó chung: bình tĩnh, tránh xa nguy hiểm, kêu cứu, báo người tin cậy. Số khẩn cấp: 113 (công an), 114 (cứu hoả, cứu nạn), 115 (cấp cứu), 111 (bảo vệ trẻ em).',
  examples: [
    { title: 'Chọn số gọi', problem: 'Thấy khói bốc lên từ một căn nhà khoá cửa, em gọi số nào?', solution: '114 (cứu hoả), đồng thời báo người lớn xung quanh.' },
    { title: 'Bạn đuối nước', problem: 'Đi chơi ven sông, bạn trượt chân rơi xuống nước. Em không biết bơi. Làm gì?', solution: 'Không nhảy xuống; hô to gọi người lớn; ném vật nổi (can nhựa, phao), đưa sào, cành cây cho bạn bám.' },
    { title: 'Tình huống mở đầu', problem: 'Người lạ đề nghị chở An về khi trời mưa. An nên làm gì?', solution: 'Lịch sự từ chối; trú mưa ở nơi an toàn đông người (trường học); gọi điện cho bố mẹ đến đón.' }
  ],
  exercises: [
    { question: 'Phân loại các tình huống: sét đánh, bắt cóc, sạt lở đất, cháy chung cư, lũ quét, điện giật.', hints: ['Do thiên nhiên gây ra?', 'Do con người gây ra?'], solution: 'Tự nhiên: sét đánh, sạt lở đất, lũ quét. Con người: bắt cóc, cháy chung cư, điện giật.' },
    { question: 'Nêu các bước thoát khỏi đám cháy trong nhà.', hints: ['Gọi ai? Bảo vệ đường thở thế nào?', 'Đi lối nào?'], solution: 'Bình tĩnh, báo động, gọi 114; che mũi miệng bằng khăn ướt; cúi thấp đi theo lối thoát hiểm; không dùng thang máy; không quay lại lấy đồ.' },
    { question: 'Khi gọi số khẩn cấp, cần cung cấp những thông tin gì?', hints: ['Ở đâu?', 'Chuyện gì, mấy người?'], solution: 'Địa chỉ cụ thể, sự việc đang xảy ra, số người cần giúp, tình trạng; số điện thoại của mình; nghe hướng dẫn.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Lũ quét là tình huống nguy hiểm từ tự nhiên.', answer: true, explain: 'Đúng.' },
    { type: 'short', q: 'Số điện thoại cấp cứu y tế ở Việt Nam là số mấy?', answer: '115', calc: '115', explain: '115.' },
    { type: 'short', q: 'Tổng đài quốc gia bảo vệ trẻ em là số mấy?', answer: '111', calc: '111', explain: '111.' },
    { type: 'mcq', q: 'Khi có giông sét, KHÔNG nên:', options: ['trú dưới gốc cây cao', 'vào nhà kiên cố', 'tránh xa cột điện', 'tránh chỗ trống trải cao'], answer: 0, explain: 'Gốc cây dễ bị sét.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi có cháy trong toà nhà nên dùng thang máy để thoát nhanh.', answer: false, explain: 'Không dùng thang máy.' },
    { type: 'mcq', q: 'Người lạ cho quà và rủ đi chơi, em nên:', options: ['từ chối, tránh xa, báo người lớn', 'đi theo', 'nhận quà rồi đi', 'giữ bí mật'], answer: 0, explain: 'Từ chối.' },
    { type: 'mcq', q: 'Thấy bạn đuối nước, em không biết bơi, nên:', options: ['gọi người lớn, ném vật nổi', 'nhảy xuống cứu', 'bỏ chạy', 'quay video'], answer: 0, explain: 'Cứu gián tiếp.' },
    { type: 'short', q: 'Số điện thoại báo cháy, cứu nạn cứu hộ là số mấy?', answer: '114', calc: '114', explain: '114.' }
  ]
});
})();
