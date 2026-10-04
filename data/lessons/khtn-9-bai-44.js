/* KHTN 9 – Bài 44. Nhiễm sắc thể giới tính và cơ chế xác định giới tính. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-44', {
  objectives: [
    'Phân biệt được NST thường và NST giới tính.',
    'Trình bày được cơ chế xác định giới tính ở người (XX, XY) và giải thích được tỉ lệ nam : nữ xấp xỉ 1 : 1.',
    'Nêu được ảnh hưởng của môi trường đến sự phân hoá giới tính và ứng dụng trong sản xuất.'
  ],
  intro: 'Con trai hay con gái do bố hay mẹ “quyết định”? Câu hỏi này từng gây nhiều hiểu lầm, thậm chí đổ lỗi cho người mẹ. Di truyền học đã đưa ra câu trả lời rõ ràng.',
  steps: [
    { title: 'NST thường và NST giới tính', html: `<table><tr><th></th><th>NST thường</th><th>NST giới tính</th></tr><tr><td>Số lượng</td><td>nhiều cặp (người: 22 cặp)</td><td>một cặp</td></tr><tr><td>Đặc điểm</td><td>luôn tồn tại thành cặp tương đồng, giống nhau ở hai giới</td><td>khác nhau ở hai giới: XX hoặc XY</td></tr><tr><td>Chức năng</td><td>mang gene quy định tính trạng thường</td><td>mang gene quy định giới tính và một số tính trạng liên kết giới tính</td></tr></table>`,
      svg: S.karyotype({ sex: 'XX' }), caption: 'Sơ đồ bộ NST của nữ giới: 22 cặp NST thường và cặp XX.' },
    { title: 'Cơ chế xác định giới tính ở người', html: `<ul><li>Nữ (XX) giảm phân cho <b>một loại</b> trứng mang X.</li><li>Nam (XY) giảm phân cho <b>hai loại</b> tinh trùng với tỉ lệ ngang nhau: mang X và mang Y.</li><li>Thụ tinh: trứng X + tinh trùng X → XX (con gái); trứng X + tinh trùng Y → XY (con trai).</li></ul>
      <div class="box key">Giới tính của con do loại tinh trùng (X hay Y) của bố kết hợp với trứng quyết định. Vì hai loại tinh trùng có tỉ lệ ngang nhau nên tỉ lệ con trai : con gái xấp xỉ 1 : 1.</div>`,
      svg: S.punnett({ g1: ['X', 'Y'], g2: ['X'], n1: 'Tinh trùng (bố XY)', n2: 'Trứng (mẹ XX)', label: 'Cơ chế xác định giới tính ở người' }), caption: 'Khung Punnett: 1/2 con gái (XX) : 1/2 con trai (XY).' },
    { title: 'Ở các loài khác', html: `<p>Ở người, động vật có vú, ruồi giấm: con cái XX, con đực XY. Ở chim, bướm, một số loài bò sát: ngược lại, con đực có cặp NST giới tính giống nhau, con cái có cặp khác nhau (thường kí hiệu ZZ – đực, ZW – cái).</p>` },
    { title: 'Ảnh hưởng của môi trường', html: `<p>Sự phân hoá giới tính còn chịu ảnh hưởng của <b>môi trường trong</b> (hormone sinh dục) và <b>môi trường ngoài</b> (nhiệt độ, ánh sáng…). Ví dụ: ở một số loài rùa, nhiệt độ ấp trứng ảnh hưởng tới tỉ lệ con đực, con cái.</p>
      <p>Ứng dụng: điều chỉnh tỉ lệ đực : cái trong chăn nuôi phù hợp mục đích sản xuất (nuôi bò sữa cần nhiều con cái…).</p>
      <div class="box note">Pháp luật Việt Nam nghiêm cấm lựa chọn giới tính thai nhi dưới mọi hình thức.</div>` }
  ],
  summary: 'NST giới tính (một cặp) khác nhau giữa hai giới, quy định giới tính; NST thường gồm nhiều cặp giống nhau ở hai giới. Ở người: nữ XX tạo một loại trứng X; nam XY tạo tinh trùng X và Y với tỉ lệ ngang nhau ⇒ con gái XX : con trai XY ≈ 1 : 1, giới tính do tinh trùng của bố quyết định. Môi trường cũng ảnh hưởng tới phân hoá giới tính.',
  examples: [
    { title: 'Ai quyết định giới tính?', problem: 'Quan niệm “người mẹ quyết định sinh con trai hay con gái” đúng hay sai? Giải thích.', solution: 'Sai. Mẹ chỉ cho trứng mang X; giới tính do tinh trùng mang X hay Y của bố quyết định (và mang tính ngẫu nhiên).' },
    { title: 'Xác suất', problem: 'Một cặp vợ chồng sinh một con. Xác suất con là con trai là bao nhiêu?', solution: '1/2 = 50 %.' },
    { title: 'Hai con', problem: 'Một cặp vợ chồng sinh hai con. Xác suất cả hai đều là con gái?', solution: '1/2 · 1/2 = 1/4 = 25 %.' }
  ],
  exercises: [
    { question: 'Tinh trùng của người có bao nhiêu NST? Gồm những NST giới tính nào?', hints: ['Giao tử có n = 23.', 'Bố XY cho tinh trùng X hoặc Y.'], solution: '23 NST: 22 NST thường + X, hoặc 22 NST thường + Y.' },
    { question: 'Vì sao tỉ lệ nam : nữ ở người xấp xỉ 1 : 1?', hints: ['Bố tạo mấy loại tinh trùng, tỉ lệ thế nào?', 'Khả năng thụ tinh của chúng.'], solution: 'Nam tạo hai loại tinh trùng X và Y với tỉ lệ ngang nhau, khả năng thụ tinh tương đương; nên hợp tử XX và XY xấp xỉ bằng nhau.' },
    { question: 'Một cặp vợ chồng sinh ba con. Tính xác suất cả ba đều là con trai.', hints: ['Mỗi lần sinh độc lập, xác suất 1/2.', '(1/2)<sup>3</sup>.'], solution: '1/8 = 12,5 %.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở người, giới tính của con do loại tinh trùng của bố quyết định.', answer: true, explain: 'Tinh trùng X → con gái, Y → con trai.' },
    { type: 'mcq', q: 'Người nữ có cặp NST giới tính:', options: ['XY', 'XX', 'XO', 'YY'], answer: 1, explain: 'Nữ XX.' },
    { type: 'short', q: 'Xác suất một cặp vợ chồng sinh con gái là bao nhiêu phần trăm?', answer: '50', unit: '%', calc: '1/2*100', explain: '1/2 = 50 %.' },
    { type: 'mcq', q: 'Người nam tạo ra mấy loại tinh trùng về NST giới tính?', options: ['1 loại', '2 loại: X và Y', '3 loại', '4 loại'], answer: 1, explain: 'X và Y với tỉ lệ ngang nhau.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ở người, NST giới tính chỉ có trong tế bào sinh dục.', answer: false, explain: 'NST giới tính có trong mọi tế bào có nhân.' },
    { type: 'short', q: 'Một cặp vợ chồng sinh hai con. Xác suất cả hai đều là con trai là bao nhiêu phần trăm?', answer: '25', unit: '%', calc: '0.5*0.5*100', explain: '1/2 · 1/2 = 25 %.' },
    { type: 'mcq', q: 'Ở loài nào con cái có cặp NST giới tính khác nhau (ZW)?', options: ['Người', 'Ruồi giấm', 'Gà', 'Chó'], answer: 2, explain: 'Ở chim, con mái ZW, con trống ZZ.' },
    { type: 'short', q: 'Trứng của người có bao nhiêu NST thường?', answer: '22', unit: 'NST', calc: '23-1', explain: '23 NST gồm 22 NST thường và 1 NST X.' }
  ]
});
})();
