/* KHTN 7 – Bài 17. Ảnh của vật qua gương phẳng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-17', {
  objectives: [
    'Nêu được tính chất ảnh của vật qua gương phẳng.',
    'Dựng được ảnh của một vật (điểm sáng, mũi tên) tạo bởi gương phẳng.',
    'Vận dụng tính chất đối xứng để tính khoảng cách từ ảnh đến gương, đến vật.'
  ],
  intro: 'Soi gương, em thấy “một em khác” đứng sau mặt gương, giống hệt em. Nhưng nếu đi ra sau gương thì chẳng thấy ai cả! Vậy ảnh trong gương là gì?',
  steps: [
    { title: 'Tính chất ảnh qua gương phẳng', html: `<p>Làm thí nghiệm với một tấm kính phẳng đặt thẳng đứng (thay cho gương), hai viên pin giống nhau và một màn chắn, ta thấy:</p>
      <ul><li>Ảnh là <b>ảnh ảo</b>: không hứng được trên màn chắn.</li><li>Ảnh <b>lớn bằng vật</b>.</li><li>Khoảng cách từ một điểm của vật đến gương <b>bằng</b> khoảng cách từ ảnh của điểm đó đến gương.</li></ul>
      <div class="box key">Ảnh và vật <b>đối xứng</b> với nhau qua mặt gương phẳng.</div>` },
    { title: 'Ảnh của một điểm sáng', html: `<p>Từ điểm sáng S, các tia tới gương cho các tia phản xạ có đường kéo dài <b>đi qua cùng một điểm S'</b> nằm sau gương. Mắt nhận các tia phản xạ và “thấy” chúng như phát ra từ S' – S' là ảnh ảo của S.</p>
      <p>S' đối xứng với S qua gương: SS' vuông góc với gương tại H và SH = HS'.</p>`,
      svg: S.mirrorImage({ kind: 'point' }), caption: 'Các tia phản xạ có đường kéo dài (nét đứt) cùng đi qua ảnh ảo S\'.' },
    { title: 'Dựng ảnh của một vật', html: `<p>Để dựng ảnh của vật AB:</p><ol><li>Dựng ảnh A' của điểm A (đối xứng với A qua gương).</li><li>Dựng ảnh B' của điểm B.</li><li>Nối A'B' bằng nét đứt (ảnh ảo) – đó là ảnh của vật AB.</li></ol>
      <p>Muốn vẽ tia sáng từ A phản xạ trên gương rồi đến mắt: nối ảnh A' với mắt, cắt gương tại điểm tới I; vẽ tia tới AI và tia phản xạ đi tới mắt.</p>`,
      svg: S.mirrorImage({ kind: 'arrow' }), caption: 'Ảnh A\'B\' của vật AB: cùng chiều, lớn bằng vật, đối xứng với vật qua gương.' },
    { title: 'Ứng dụng của gương phẳng', html: `<ul><li>Gương soi trong gia đình, gương trong tiệm cắt tóc (hai gương cho nhiều ảnh).</li><li>Kính tiềm vọng dùng hai gương phẳng đặt song song, nghiêng 45° để quan sát vật bị che khuất.</li><li>Đặt gương trong cửa hàng nhỏ làm căn phòng có vẻ rộng hơn.</li></ul>
      <div class="box note">Ảnh trong gương phẳng bị “đảo trái – phải”: khi em giơ tay phải, ảnh giơ tay nằm cùng phía với tay phải của em nhưng trông như tay trái của “người trong gương”. Vì vậy chữ “XE CỨU THƯƠNG” được in ngược trên đầu xe để người lái xe phía trước đọc đúng qua gương chiếu hậu.</div>` }
  ],
  summary: 'Ảnh qua gương phẳng là ảnh ảo, lớn bằng vật, đối xứng với vật qua gương (khoảng cách từ ảnh đến gương bằng khoảng cách từ vật đến gương). Dựng ảnh bằng tính đối xứng; các tia phản xạ có đường kéo dài đi qua ảnh.',
  examples: [
    { title: 'Khoảng cách vật – ảnh', problem: 'Một bạn đứng cách gương phẳng 1,5 m. Ảnh của bạn cách gương và cách bạn bao nhiêu?', solution: 'Ảnh cách gương 1,5 m; cách bạn 1,5 + 1,5 = 3 m.' },
    { title: 'Tiến lại gần gương', problem: 'Bạn ở ví dụ trên tiến lại gần gương 0,5 m. Khoảng cách giữa bạn và ảnh lúc này là bao nhiêu?', solution: 'Bạn cách gương 1 m ⇒ ảnh cách gương 1 m ⇒ khoảng cách bạn – ảnh là 2 m.' },
    { title: 'Chiều cao ảnh', problem: 'Một cây cột cao 3,2 m đứng thẳng bên bờ hồ nước phẳng lặng. Ảnh của cột dưới mặt nước cao bao nhiêu và có đặc điểm gì?', solution: 'Mặt nước phẳng lặng như gương phẳng: ảnh cao 3,2 m, là ảnh ảo, lộn ngược (đối xứng với cột qua mặt nước).' }
  ],
  exercises: [
    { question: 'Điểm sáng S cách gương phẳng 20 cm. Tính khoảng cách SS\' từ S đến ảnh của nó.', hints: ['S\' cách gương bằng S cách gương.', 'SS\' = 2 lần khoảng cách từ S đến gương.'], solution: 'SS\' = 20 + 20 = 40 cm.' },
    { question: 'Nêu cách dùng màn chắn để chứng tỏ ảnh qua gương phẳng là ảnh ảo.', hints: ['Đặt màn ở đâu?', 'Quan sát thấy gì trên màn?'], solution: 'Đặt màn chắn ở phía sau gương, đúng chỗ ta thấy ảnh: trên màn không có ảnh nào ⇒ ảnh không hứng được trên màn, là ảnh ảo.' },
    { question: 'Vì sao chữ “XE CỨU THƯƠNG” trên đầu xe lại được viết ngược?', hints: ['Người lái xe phía trước nhìn xe cứu thương qua dụng cụ gì?', 'Ảnh qua gương phẳng bị đảo chiều như thế nào?'], solution: 'Người lái xe phía trước nhìn qua gương chiếu hậu; ảnh qua gương bị đảo trái – phải nên chữ viết ngược sẽ hiện lên đúng chiều, dễ đọc để kịp nhường đường.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Ảnh của một vật qua gương phẳng là:', options: ['ảnh thật, lớn hơn vật', 'ảnh ảo, lớn bằng vật', 'ảnh ảo, nhỏ hơn vật', 'ảnh thật, bằng vật'], answer: 1, explain: 'Gương phẳng cho ảnh ảo, lớn bằng vật.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Ảnh ảo tạo bởi gương phẳng hứng được trên màn chắn.', answer: false, explain: 'Ảnh ảo không hứng được trên màn chắn.' },
    { type: 'short', q: 'Vật cách gương phẳng 2 m. Khoảng cách từ vật đến ảnh của nó là bao nhiêu mét?', answer: '4', unit: 'm', calc: '2*2', explain: '2 + 2 = 4 m.' },
    { type: 'short', q: 'Một người cao 1,6 m đứng trước gương phẳng. Ảnh của người đó cao bao nhiêu mét?', answer: '1,6', unit: 'm', calc: '1.6', explain: 'Ảnh lớn bằng vật: 1,6 m.' },
    { type: 'short', q: 'Người đứng cách gương 3 m rồi tiến lại gần gương 1 m. Khi đó người cách ảnh của mình bao nhiêu mét?', answer: '4', unit: 'm', calc: '2*(3-1)', explain: 'Người cách gương 2 m ⇒ cách ảnh 2 · 2 = 4 m.' },
    { type: 'mcq', q: 'Ảnh S\' của điểm sáng S qua gương phẳng:', options: ['nằm trước gương, cùng phía với S', 'đối xứng với S qua mặt gương', 'nằm trên mặt gương', 'ở vô cùng xa'], answer: 1, explain: 'Ảnh đối xứng với vật qua gương.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Các tia phản xạ từ gương phẳng có đường kéo dài đi qua ảnh ảo của điểm sáng.', answer: true, explain: 'Mắt nhìn thấy ảnh vì các tia phản xạ như phát ra từ ảnh.' },
    { type: 'short', q: 'Điểm sáng S cách gương 15 cm. Khoảng cách SS\' là bao nhiêu cm?', answer: '30', unit: 'cm', calc: '2*15', explain: 'SS\' = 15 + 15 = 30 cm.' }
  ]
});
})();
