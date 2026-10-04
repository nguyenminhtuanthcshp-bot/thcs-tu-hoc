/* KHTN 7 – Bài 31. Trao đổi nước và chất dinh dưỡng ở động vật. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-31', {
  objectives: [
    'Trình bày được con đường trao đổi nước và nhu cầu sử dụng nước ở động vật (lấy ví dụ ở người).',
    'Dựa vào sơ đồ khái quát, mô tả được con đường thu nhận và tiêu hoá thức ăn trong ống tiêu hoá ở động vật (đại diện ở người).',
    'Mô tả được quá trình vận chuyển các chất ở động vật thông qua hệ tuần hoàn.',
    'Vận dụng được hiểu biết về trao đổi chất để xây dựng chế độ ăn uống hợp lí.'
  ],
  intro: 'Một bát cơm, một miếng thịt sau vài giờ đã trở thành những chất nhỏ bé đi khắp cơ thể qua dòng máu. Hành trình ấy diễn ra như thế nào?',
  steps: [
    { title: 'Trao đổi nước ở động vật', html: `<p>Động vật lấy nước chủ yếu qua <b>uống nước</b> và từ <b>thức ăn</b>; nước được hấp thụ vào máu ở ruột (chủ yếu ở ruột già và ruột non). Nước được thải ra qua <b>nước tiểu</b>, <b>mồ hôi</b>, hơi thở và phân.</p>
      <p>Nhu cầu nước phụ thuộc vào độ tuổi, cường độ hoạt động, điều kiện môi trường. Người trưởng thành cần khoảng <b>2 lít nước mỗi ngày</b> (kể cả nước trong thức ăn); trời nóng hoặc vận động mạnh cần nhiều hơn.</p>` },
    { title: 'Con đường thu nhận và tiêu hoá thức ăn ở người', html: `<p>Thức ăn đi qua ống tiêu hoá: <b>miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn</b>.</p>
      <ul><li>Miệng: nghiền nhỏ thức ăn, enzyme trong nước bọt biến đổi một phần tinh bột.</li><li>Dạ dày: co bóp, nhào trộn; dịch vị bắt đầu biến đổi protein.</li><li><b>Ruột non</b>: nhờ dịch tuỵ, dịch mật, dịch ruột, thức ăn được biến đổi hoàn toàn thành chất đơn giản (đường đơn, amino acid, glycerol và acid béo…) và <b>được hấp thụ vào máu</b>.</li><li>Ruột già: hấp thụ thêm nước; chất cặn bã tạo thành phân, thải ra qua hậu môn.</li></ul>`,
      svg: S.flow({ items: ['Miệng', 'Thực quản', 'Dạ dày', 'Ruột non (hấp thụ)', 'Ruột già', 'Hậu môn'], size: 14, label: 'Con đường thức ăn trong ống tiêu hoá ở người' }),
      caption: 'Thức ăn được tiêu hoá dần trong ống tiêu hoá; chất dinh dưỡng được hấp thụ chủ yếu ở ruột non.' },
    { title: 'Vận chuyển các chất qua hệ tuần hoàn', html: `<p>Hệ tuần hoàn gồm <b>tim</b> và <b>hệ mạch</b> (động mạch, tĩnh mạch, mao mạch). Tim co bóp đẩy máu đi theo hai vòng tuần hoàn:</p>
      <ul><li><b>Vòng tuần hoàn nhỏ</b> (tim – phổi): máu nhận oxygen, thải carbon dioxide ở phổi.</li><li><b>Vòng tuần hoàn lớn</b> (tim – các cơ quan): máu mang oxygen và chất dinh dưỡng đến các tế bào, nhận carbon dioxide và chất thải đưa đến cơ quan bài tiết (thận, phổi, da).</li></ul>`,
      svg: S.circulation(), caption: 'Sơ đồ hai vòng tuần hoàn: máu giàu oxygen (đỏ) và máu nghèo oxygen (xanh).' },
    { title: 'Chế độ ăn uống hợp lí', html: `<ul><li>Ăn đủ lượng, đủ chất, cân đối các nhóm chất dinh dưỡng; hạn chế đồ ăn nhiều đường, muối, dầu mỡ.</li><li>Uống đủ nước, chia đều trong ngày; ăn chín, uống sôi; ăn chậm, nhai kĩ.</li><li>Nhu cầu dinh dưỡng thay đổi theo lứa tuổi, giới tính, cường độ lao động.</li></ul>` }
  ],
  summary: 'Động vật lấy nước qua uống và thức ăn, thải nước qua nước tiểu, mồ hôi, hơi thở, phân. Thức ăn đi qua miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn; chất dinh dưỡng được hấp thụ chủ yếu ở ruột non. Hệ tuần hoàn (tim, mạch) vận chuyển oxygen, chất dinh dưỡng đến tế bào và mang chất thải đến cơ quan bài tiết.',
  examples: [
    { title: 'Tính lượng nước cần uống', problem: 'Một bạn cần 2 L nước mỗi ngày, trong đó khoảng 0,5 L được lấy từ thức ăn. Bạn cần uống thêm bao nhiêu lít? Nếu mỗi cốc 250 mL thì cần bao nhiêu cốc?', solution: 'Cần uống 2 − 0,5 = 1,5 L = 1 500 mL; số cốc: 1 500 : 250 = 6 cốc.' },
    { title: 'Tính số lần tim đập', problem: 'Tim một bạn học sinh đập trung bình 75 lần/phút. Trong 1 giờ tim đập bao nhiêu lần?', solution: '75 · 60 = 4 500 lần.' },
    { title: 'Giải thích', problem: 'Vì sao ruột non là nơi hấp thụ chất dinh dưỡng chủ yếu?', solution: 'Ruột non rất dài, mặt trong có nhiều nếp gấp và lông ruột làm diện tích hấp thụ rất lớn, có mạng mao mạch dày đặc; ở đây thức ăn đã được biến đổi thành các chất đơn giản.' }
  ],
  exercises: [
    { question: 'Nêu các con đường cơ thể người lấy nước vào và thải nước ra.', hints: ['Lấy vào qua ăn và uống.', 'Thải ra qua các cơ quan bài tiết và hô hấp.'], solution: 'Lấy vào: uống nước, nước trong thức ăn. Thải ra: nước tiểu (thận), mồ hôi (da), hơi nước khi thở ra (phổi), phân.' },
    { question: 'Vì sao khi bị tiêu chảy hoặc sốt cao cần bổ sung nước và muối khoáng (ví dụ uống oresol)?', hints: ['Tiêu chảy, sốt làm mất những gì?', 'Thiếu nước ảnh hưởng thế nào đến cơ thể?'], solution: 'Tiêu chảy, sốt cao làm cơ thể mất nhiều nước và muối khoáng, có thể gây mất nước nguy hiểm; cần bù nước và muối khoáng kịp thời.' },
    { question: 'Mỗi lần co bóp, tim đẩy khoảng 70 mL máu vào động mạch; tim đập 75 lần/phút. Mỗi phút tim đẩy bao nhiêu lít máu?', hints: ['Tính 70 · 75 mL.', 'Đổi mL sang L.'], solution: '70 · 75 = 5 250 mL = 5,25 L.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chất dinh dưỡng được hấp thụ chủ yếu ở ruột non.', answer: true, explain: 'Ruột non có diện tích hấp thụ rất lớn.' },
    { type: 'mcq', q: 'Thứ tự đúng của ống tiêu hoá ở người là:', options: ['Miệng → dạ dày → thực quản → ruột non → ruột già', 'Miệng → thực quản → dạ dày → ruột non → ruột già', 'Miệng → thực quản → ruột non → dạ dày → ruột già', 'Miệng → ruột non → dạ dày → ruột già → thực quản'], answer: 1, explain: 'Thức ăn đi qua thực quản xuống dạ dày rồi đến ruột non.' },
    { type: 'mcq', q: 'Cơ quan đẩy máu đi khắp cơ thể là:', options: ['phổi', 'tim', 'thận', 'dạ dày'], answer: 1, explain: 'Tim co bóp đẩy máu vào động mạch.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cơ thể người chỉ thải nước ra ngoài qua nước tiểu.', answer: false, explain: 'Còn qua mồ hôi, hơi thở, phân.' },
    { type: 'short', q: 'Tim đập 75 lần/phút. Trong 1 giờ tim đập bao nhiêu lần?', answer: '4500', unit: 'lần', calc: '75*60', explain: '75 · 60 = 4 500.' },
    { type: 'short', q: 'Cần uống 1,5 L nước; mỗi cốc 250 mL. Cần uống bao nhiêu cốc?', answer: '6', unit: 'cốc', calc: '1500/250', explain: '1 500 : 250 = 6 cốc.' },
    { type: 'mcq', q: 'Trong vòng tuần hoàn nhỏ, máu được trao đổi khí ở:', options: ['phổi', 'ruột non', 'gan', 'thận'], answer: 0, explain: 'Máu nhận oxygen, thải carbon dioxide ở phổi.' },
    { type: 'short', q: 'Mỗi lần co, tim đẩy 70 mL máu; tim đập 75 lần/phút. Mỗi phút tim đẩy bao nhiêu lít máu?', answer: '5,25', unit: 'L', calc: '70*75/1000', explain: '5 250 mL = 5,25 L.' }
  ]
});
})();
