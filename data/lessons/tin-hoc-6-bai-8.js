/* Tin học 6 – Bài 8. Thư điện tử. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('tin-hoc-6/bai-8', {
  objectives: [
    'Nêu được thư điện tử là gì và ưu, nhược điểm của thư điện tử so với thư truyền thống.',
    'Nhận biết được cấu tạo của một địa chỉ thư điện tử.',
    'Thực hiện được các thao tác cơ bản: đăng nhập, soạn, gửi, nhận, trả lời, chuyển tiếp thư và sử dụng thư an toàn.'
  ],
  intro: 'Thư tay gửi qua bưu điện có thể mất vài ngày mới tới nơi, còn thư điện tử chỉ mất vài giây dù người nhận ở bên kia địa cầu. Thư điện tử hoạt động thế nào và dùng sao cho an toàn?',
  steps: [
    { title: 'Thư điện tử là gì?', html: `<p><b>Thư điện tử</b> (email) là dịch vụ gửi và nhận thư qua mạng máy tính. Muốn sử dụng, em cần có một <b>tài khoản thư điện tử</b> (gồm địa chỉ thư và mật khẩu) do nhà cung cấp dịch vụ cấp.</p>`,
      svg: S.email(), caption: 'Thư được gửi từ máy người gửi qua các máy chủ thư tới hộp thư người nhận.' },
    { title: 'Địa chỉ thư điện tử', html: `<p>Địa chỉ thư điện tử có dạng <b>tên đăng nhập@tên miền</b>. Mỗi địa chỉ là <b>duy nhất</b>.</p>`,
      svg: S.emailAddr(), caption: 'Cấu tạo một địa chỉ thư điện tử.' },
    { title: 'Ưu điểm và nhược điểm', html: `<table><tr><th>Ưu điểm</th><th>Nhược điểm</th></tr><tr><td>Gửi nhanh, chi phí thấp; gửi cùng lúc cho nhiều người; đính kèm tệp; lưu trữ, tìm lại thư dễ dàng.</td><td>Cần thiết bị và kết nối Internet; có thể nhận thư rác, thư lừa đảo, tệp chứa phần mềm độc hại; có thể bị lộ mật khẩu.</td></tr></table>` },
    { title: 'Các thao tác và quy tắc an toàn', html: `<p>Các thao tác: <b>đăng nhập</b>, <b>soạn thư</b> (người nhận, tiêu đề, nội dung, tệp đính kèm), <b>gửi</b>, <b>đọc</b>, <b>trả lời</b>, <b>chuyển tiếp</b>, <b>đăng xuất</b>.</p>
      <div class="box tip">Đặt mật khẩu mạnh và giữ bí mật; không mở thư, tệp đính kèm từ người lạ; đăng xuất khi dùng máy chung; viết thư lịch sự, có tiêu đề rõ ràng.</div>` }
  ],
  summary: 'Thư điện tử là dịch vụ gửi, nhận thư qua mạng. Địa chỉ thư có dạng tên đăng nhập@tên miền và là duy nhất. Thư điện tử nhanh, rẻ, đính kèm được tệp nhưng cần Internet và có nguy cơ thư rác, lừa đảo. Cần giữ bí mật mật khẩu, không mở tệp lạ, đăng xuất khi dùng máy chung.',
  examples: [
    { title: 'Nhận biết địa chỉ hợp lệ', problem: 'Địa chỉ nào hợp lệ: (a) lan anh@gmail.com; (b) lananh2012@gmail.com; (c) lananh2012.gmail.com?', solution: '(b) hợp lệ. (a) có dấu cách; (c) thiếu kí hiệu @.' },
    { title: 'Chọn thao tác', problem: 'Em nhận được thư mời của cô giáo và muốn gửi nguyên thư đó cho bạn cùng nhóm. Em dùng thao tác nào?', solution: 'Chuyển tiếp (Forward).' },
    { title: 'Tình huống an toàn', problem: 'Em nhận thư từ địa chỉ lạ báo “trúng thưởng, hãy nhập mật khẩu”. Em xử lí thế nào?', solution: 'Không làm theo, không nhập mật khẩu; xoá thư và báo cho người lớn.' }
  ],
  exercises: [
    { question: 'Chỉ ra tên đăng nhập và tên miền trong địa chỉ hocsinh.thcs@truong.edu.vn.', hints: ['Phần trước @ là gì?', 'Phần sau @ là gì?'], solution: 'Tên đăng nhập: hocsinh.thcs; tên miền: truong.edu.vn.' },
    { question: 'Nêu hai ưu điểm và một nhược điểm của thư điện tử.', hints: ['So sánh tốc độ, chi phí với thư tay.', 'Nghĩ đến thư rác, lừa đảo.'], solution: 'Ưu: nhanh, gửi nhiều người cùng lúc, đính kèm tệp. Nhược: cần Internet, có thư rác/lừa đảo.' },
    { question: 'Hộp thư có dung lượng 15 GB, đã dùng 3 GB. Còn trống bao nhiêu phần trăm?', hints: ['Dung lượng còn trống: 15 − 3.', 'Tỉ lệ: 12 : 15 × 100%.'], solution: '12 : 15 = 80%.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mỗi địa chỉ thư điện tử là duy nhất.', answer: true, explain: 'Không có hai tài khoản cùng địa chỉ.' },
    { type: 'mcq', q: 'Địa chỉ thư điện tử hợp lệ là:', options: ['minh an@gmail.com', 'minhan@gmail.com', 'minhan.gmail.com', '@minhan'], answer: 1, explain: 'Có dạng tên@tên miền, không có dấu cách.' },
    { type: 'mcq', q: 'Kí hiệu bắt buộc trong địa chỉ thư điện tử là:', options: ['#', '@', '&', '%'], answer: 1, explain: 'Kí hiệu @ ngăn cách tên đăng nhập và tên miền.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Có thể mở mọi tệp đính kèm từ người lạ vì thư điện tử luôn an toàn.', answer: false, explain: 'Tệp lạ có thể chứa phần mềm độc hại.' },
    { type: 'mcq', q: 'Muốn gửi lại thư nhận được cho người khác, dùng thao tác:', options: ['Trả lời', 'Chuyển tiếp', 'Xoá', 'Đăng xuất'], answer: 1, explain: 'Chuyển tiếp (Forward).' },
    { type: 'short', q: 'Em gửi một thư cho 3 nhóm, mỗi nhóm 5 bạn. Thư được gửi tới bao nhiêu người?', answer: '15', unit: 'người', calc: '3*5', explain: '3 × 5 = 15.' },
    { type: 'short', q: 'Hộp thư 15 GB đã dùng 6 GB. Đã dùng bao nhiêu phần trăm?', answer: '40', unit: '%', calc: '6/15*100', explain: '6 : 15 = 40%.' },
    { type: 'mcq', q: 'Khi dùng máy tính chung ở thư viện, sau khi đọc thư em cần:', options: ['để nguyên', 'đăng xuất', 'ghi mật khẩu lên giấy dán màn hình', 'tắt màn hình'], answer: 1, explain: 'Đăng xuất để bảo vệ tài khoản.' }
  ]
});
})();
