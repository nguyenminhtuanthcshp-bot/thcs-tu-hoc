/* KHTN 7 – Bài 16. Sự phản xạ ánh sáng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-16', {
  objectives: [
    'Nêu được các khái niệm: tia sáng tới, tia sáng phản xạ, pháp tuyến, góc tới, góc phản xạ, mặt phẳng tới, ảnh.',
    'Phát biểu được nội dung định luật phản xạ ánh sáng và vận dụng để vẽ tia phản xạ, tính góc.',
    'Phân biệt được phản xạ và phản xạ khuếch tán.'
  ],
  intro: 'Chiếu đèn pin vào gương, vệt sáng bật lại lên trần nhà. Vệt sáng ấy luôn đi theo một quy luật rất chính xác – định luật phản xạ ánh sáng.',
  steps: [
    { title: 'Hiện tượng phản xạ ánh sáng', html: `<p>Khi chiếu một tia sáng tới mặt gương phẳng, tia sáng bị hắt trở lại theo một hướng xác định. Hiện tượng đó gọi là <b>sự phản xạ ánh sáng</b>.</p>
      <ul><li><b>SI</b>: tia sáng tới; <b>I</b>: điểm tới; <b>IR</b>: tia sáng phản xạ.</li><li><b>IN</b>: pháp tuyến – đường thẳng vuông góc với mặt gương tại điểm tới.</li><li>Góc <b>i</b> = góc SIN: góc tới; góc <b>i'</b> = góc NIR: góc phản xạ.</li><li>Mặt phẳng chứa tia tới và pháp tuyến gọi là <b>mặt phẳng tới</b>.</li></ul>` },
    { title: 'Định luật phản xạ ánh sáng', html: `<div class="box key"><ul><li>Tia phản xạ nằm trong mặt phẳng tới (cùng mặt phẳng với tia tới và pháp tuyến tại điểm tới).</li><li>Góc phản xạ bằng góc tới: <b>i' = i</b>.</li></ul></div>
      <p>Ví dụ: góc tới 40° thì góc phản xạ cũng là 40°; góc hợp bởi tia tới và tia phản xạ là 40° + 40° = 80°.</p>`,
      svg: S.reflectionRays({ i: 40 }), caption: 'Tia tới SI, pháp tuyến IN và tia phản xạ IR; góc phản xạ i\' bằng góc tới i.' },
    { title: 'Vẽ tia phản xạ', html: `<ol><li>Vẽ pháp tuyến IN vuông góc với mặt gương tại điểm tới I.</li><li>Dùng thước đo góc đo góc tới i = góc SIN.</li><li>Vẽ tia IR ở phía bên kia pháp tuyến sao cho góc NIR = i.</li></ol>
      <div class="box tip">Nếu đề cho góc giữa tia tới và <b>mặt gương</b> là α thì góc tới i = 90° − α.</div>` },
    { title: 'Phản xạ và phản xạ khuếch tán', html: `<ul><li>Chùm sáng song song chiếu tới một mặt <b>nhẵn bóng</b> (gương, mặt nước lặng) thì chùm phản xạ cũng song song: đó là <b>phản xạ</b> (phản xạ gương).</li><li>Chiếu tới một mặt <b>gồ ghề</b> (tờ giấy, bức tường) thì các tia phản xạ đi theo mọi hướng: đó là <b>phản xạ khuếch tán</b>.</li></ul>
      <p>Nhờ phản xạ khuếch tán mà ta nhìn thấy các vật không tự phát sáng từ nhiều hướng khác nhau.</p>`,
      svg: S.reflectionRays({ kind: 'diffuse' }), caption: 'Mặt nhẵn phản xạ chùm sáng song song; mặt gồ ghề làm ánh sáng phản xạ đi mọi hướng.' }
  ],
  summary: 'Định luật phản xạ ánh sáng: tia phản xạ nằm trong mặt phẳng tới; góc phản xạ bằng góc tới (i\' = i). Pháp tuyến vuông góc với gương tại điểm tới. Góc giữa tia tới và mặt gương là α thì i = 90° − α. Mặt nhẵn: phản xạ; mặt gồ ghề: phản xạ khuếch tán.',
  examples: [
    { title: 'Tính góc phản xạ', problem: 'Chiếu tia sáng tới gương phẳng với góc tới 35°. Tính góc phản xạ và góc hợp bởi tia tới và tia phản xạ.', solution: 'i\' = i = 35°. Góc giữa tia tới và tia phản xạ = 35° + 35° = 70°.' },
    { title: 'Góc với mặt gương', problem: 'Tia sáng tới hợp với mặt gương một góc 30°. Tính góc tới.', solution: 'Pháp tuyến vuông góc với mặt gương nên i = 90° − 30° = 60°; góc phản xạ cũng bằng 60°.' },
    { title: 'Tia phản xạ vuông góc', problem: 'Muốn tia phản xạ vuông góc với tia tới thì góc tới phải bằng bao nhiêu?', solution: 'i + i\' = 90° và i\' = i ⇒ i = 45°.' }
  ],
  exercises: [
    { question: 'Chiếu tia sáng vuông góc với mặt gương. Góc tới bằng bao nhiêu? Tia phản xạ đi thế nào?', hints: ['Tia tới trùng với pháp tuyến.', 'Góc giữa tia tới và pháp tuyến là bao nhiêu?'], solution: 'Góc tới i = 0° ⇒ i\' = 0°: tia phản xạ đi ngược trở lại theo đường cũ.' },
    { question: 'Góc hợp bởi tia tới và tia phản xạ là 100°. Tính góc tới và góc hợp bởi tia tới với mặt gương.', hints: ['i + i\' = 100° mà i\' = i.', 'Góc với mặt gương = 90° − i.'], solution: 'i = 50°; góc giữa tia tới và mặt gương = 90° − 50° = 40°.' },
    { question: 'Vì sao ta đọc được chữ trên trang sách từ nhiều hướng khác nhau, nhưng nhìn vào mặt gương có lúc bị chói?', hints: ['Mặt giấy nhẵn hay gồ ghề?', 'Mặt gương phản xạ chùm sáng thế nào?'], solution: 'Mặt giấy gồ ghề gây phản xạ khuếch tán, ánh sáng hắt ra mọi hướng nên đọc được từ nhiều phía. Gương phản xạ chùm sáng theo một hướng; nếu mắt ở đúng hướng đó sẽ nhận nhiều ánh sáng và bị chói.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Góc phản xạ luôn bằng góc tới.', answer: true, explain: 'Đó là nội dung định luật phản xạ ánh sáng.' },
    { type: 'short', q: 'Góc tới bằng 30°. Góc phản xạ bằng bao nhiêu độ?', answer: '30', unit: 'độ', calc: '30', explain: 'i\' = i = 30°.' },
    { type: 'mcq', q: 'Pháp tuyến tại điểm tới là đường thẳng:', options: ['song song với mặt gương', 'vuông góc với mặt gương tại điểm tới', 'trùng với tia tới', 'trùng với tia phản xạ'], answer: 1, explain: 'Pháp tuyến vuông góc với gương tại điểm tới.' },
    { type: 'short', q: 'Góc tới 40°. Góc hợp bởi tia tới và tia phản xạ bằng bao nhiêu độ?', answer: '80', unit: 'độ', calc: '2*40', explain: '40° + 40° = 80°.' },
    { type: 'short', q: 'Tia tới hợp với mặt gương một góc 25°. Góc tới bằng bao nhiêu độ?', answer: '65', unit: 'độ', calc: '90-25', explain: 'i = 90° − 25° = 65°.' },
    { type: 'mcq', q: 'Ta nhìn thấy trang sách từ mọi phía là nhờ:', options: ['phản xạ khuếch tán', 'phản xạ trên gương', 'trang sách tự phát sáng', 'ánh sáng truyền cong'], answer: 0, explain: 'Mặt giấy gồ ghề hắt ánh sáng đi mọi hướng.' },
    { type: 'short', q: 'Để tia phản xạ vuông góc với tia tới, góc tới phải bằng bao nhiêu độ?', answer: '45', unit: 'độ', calc: '90/2', explain: 'i + i\' = 90°, i\' = i ⇒ i = 45°.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Chùm sáng song song chiếu tới mặt gồ ghề thì chùm phản xạ vẫn song song.', answer: false, explain: 'Mặt gồ ghề gây phản xạ khuếch tán, tia phản xạ đi theo mọi hướng.' }
  ]
});
})();
