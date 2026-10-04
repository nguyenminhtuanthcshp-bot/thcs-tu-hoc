/* KHTN 7 – Bài 19. Từ trường. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-19', {
  objectives: [
    'Nêu được vùng không gian bao quanh một nam châm (hoặc dây dẫn mang dòng điện) mà vật liệu có tính chất từ đặt trong nó chịu tác dụng lực từ, được gọi là từ trường.',
    'Thực hiện thí nghiệm tạo ra từ phổ bằng mạt sắt; vẽ được đường sức từ quanh nam châm thẳng.',
    'Dựa vào ảnh (hoặc hình vẽ) khẳng định được Trái Đất có từ trường; nêu được cực Bắc địa từ và cực Bắc địa lí không trùng nhau.'
  ],
  intro: 'Đặt một kim nam châm ở gần thanh nam châm, kim lập tức xoay đi dù không ai chạm vào. Xung quanh nam châm có một “vùng ảnh hưởng” vô hình – gọi là <b>từ trường</b>.',
  steps: [
    { title: 'Từ trường', html: `<p>Không gian xung quanh nam châm, xung quanh dây dẫn có dòng điện có khả năng tác dụng <b>lực từ</b> lên kim nam châm (hoặc vật liệu từ) đặt trong nó. Ta nói không gian đó có <b>từ trường</b>.</p>
      <div class="box tip">Cách nhận biết từ trường: đặt một kim nam châm vào vùng không gian đó; nếu kim bị lệch khỏi hướng Bắc – Nam thì ở đó có từ trường.</div>` },
    { title: 'Từ phổ', html: `<p>Rắc đều mạt sắt lên tấm nhựa đặt trên thanh nam châm rồi gõ nhẹ. Mạt sắt sắp xếp thành những đường cong nối từ cực này sang cực kia; càng gần hai cực, mạt sắt càng dày.</p>
      <p>Hình ảnh các đường mạt sắt đó gọi là <b>từ phổ</b> – cho ta “nhìn thấy” từ trường.</p>`,
      svg: S.magnetField({ filings: true }), caption: 'Từ phổ của nam châm thẳng: mạt sắt xếp thành các đường cong nối hai cực.' },
    { title: 'Đường sức từ', html: `<p>Vẽ theo các đường mạt sắt ta được các <b>đường sức từ</b>. Quy ước:</p>
      <ul><li>Bên ngoài nam châm, đường sức từ có chiều <b>đi ra từ cực Bắc, đi vào cực Nam</b>.</li><li>Kim nam châm đặt trên một đường sức sẽ nằm dọc theo đường sức, cực Bắc của kim chỉ chiều của đường sức.</li><li>Nơi đường sức từ dày thì từ trường mạnh, nơi đường sức thưa thì từ trường yếu.</li></ul>`,
      svg: S.magnetField({ compass: true }), caption: 'Đường sức từ của nam châm thẳng và hướng của các kim nam châm nhỏ.' },
    { title: 'Từ trường Trái Đất', html: `<p>Kim la bàn ở mọi nơi trên Trái Đất đều chỉ hướng Bắc – Nam, chứng tỏ <b>Trái Đất có từ trường</b>; Trái Đất giống như một thanh nam châm khổng lồ.</p>
      <ul><li><b>Cực Bắc địa từ</b> (gần cực Bắc địa lí) và cực Bắc địa lí <b>không trùng nhau</b>.</li><li>Cực Bắc địa từ thực chất là một cực từ nam của “nam châm Trái Đất” nên nó hút cực Bắc của kim la bàn.</li></ul>
      <p>Một số loài chim di cư, rùa biển có thể cảm nhận từ trường Trái Đất để định hướng khi di chuyển xa.</p>`,
      svg: S.earthField(), caption: 'Trái Đất giống một nam châm khổng lồ; trục từ lệch so với trục địa lí.' }
  ],
  summary: 'Từ trường là không gian quanh nam châm, dòng điện có khả năng tác dụng lực từ lên kim nam châm. Từ phổ (mạt sắt) cho hình ảnh từ trường. Đường sức từ bên ngoài nam châm đi ra từ cực N, vào cực S; nơi đường sức dày, từ trường mạnh. Trái Đất có từ trường; cực Bắc địa từ không trùng cực Bắc địa lí.',
  examples: [
    { title: 'Nhận biết từ trường', problem: 'Làm thế nào để biết một sợi dây điện âm tường đang có dòng điện chạy qua hay không mà không chạm vào dây?', solution: 'Đưa la bàn (kim nam châm) lại gần dọc tường: nếu kim bị lệch khỏi hướng Bắc – Nam khi dây có điện thì xung quanh dây có từ trường ⇒ có dòng điện.' },
    { title: 'Chiều đường sức', problem: 'Một kim nam châm đặt ở bên phải cực N của thanh nam châm, trên trục của thanh. Cực Bắc của kim chỉ về phía nào?', solution: 'Đường sức đi ra từ cực N, nên ở bên phải cực N đường sức hướng sang phải ⇒ cực Bắc của kim chỉ sang phải (ra xa nam châm).' },
    { title: 'Từ trường mạnh ở đâu', problem: 'Trên từ phổ nam châm thẳng, mạt sắt dày nhất ở đâu? Điều đó cho biết gì?', solution: 'Dày nhất ở gần hai cực ⇒ từ trường ở hai cực mạnh nhất.' }
  ],
  exercises: [
    { question: 'Vẽ đường sức từ quanh một nam châm thẳng và đánh dấu chiều của ba đường sức.', hints: ['Các đường sức nối cực N với cực S, cong ra bên ngoài.', 'Chiều: đi ra từ N, đi vào S.'], solution: 'Vẽ các đường cong đối xứng phía trên và phía dưới thanh, nối hai cực; mũi tên trên mỗi đường hướng từ cực N sang cực S (bên ngoài nam châm), như hình ở bước 3.' },
    { question: 'Vì sao nói Trái Đất là một nam châm khổng lồ?', hints: ['Kim la bàn ở khắp nơi trên Trái Đất đều làm gì?', 'Điều gì làm kim nam châm quay về hướng xác định?'], solution: 'Ở mọi nơi trên Trái Đất, kim nam châm tự do đều quay về hướng Bắc – Nam, tức là chịu tác dụng của từ trường. Từ trường đó do Trái Đất tạo ra, giống từ trường của một thanh nam châm lớn.' },
    { question: 'Đi theo hướng kim la bàn chỉ, người ta có đến đúng cực Bắc địa lí không? Giải thích.', hints: ['Kim la bàn chỉ về cực nào?', 'Cực Bắc địa từ và cực Bắc địa lí có trùng nhau không?'], solution: 'Không hoàn toàn: kim la bàn chỉ về phía cực Bắc địa từ, mà cực này không trùng với cực Bắc địa lí (cách nhau hàng trăm kilômét), nên cần hiệu chỉnh khi định hướng chính xác.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Xung quanh nam châm có từ trường.', answer: true, explain: 'Từ trường tác dụng lực từ lên kim nam châm đặt gần.' },
    { type: 'mcq', q: 'Bên ngoài nam châm, đường sức từ có chiều:', options: ['đi ra từ cực S, đi vào cực N', 'đi ra từ cực N, đi vào cực S', 'đi từ giữa ra hai cực', 'không có chiều xác định'], answer: 1, explain: 'Quy ước: ra từ N, vào S.' },
    { type: 'mcq', q: 'Dụng cụ đơn giản để nhận biết từ trường là:', options: ['nhiệt kế', 'kim nam châm', 'thước dây', 'cân'], answer: 1, explain: 'Kim nam châm bị lệch khi đặt trong từ trường.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Cực Bắc địa từ trùng khít với cực Bắc địa lí.', answer: false, explain: 'Hai cực này không trùng nhau.' },
    { type: 'short', q: 'Kim la bàn chỉ hướng Bắc. Một bạn quay người sang phải để đi về hướng Đông. Bạn đã quay một góc bao nhiêu độ?', answer: '90', unit: 'độ', calc: '360/4', explain: 'Bắc → Đông: 90°.' },
    { type: 'mcq', q: 'Trên từ phổ của nam châm thẳng, mạt sắt dày nhất ở:', options: ['chính giữa nam châm', 'hai cực của nam châm', 'rất xa nam châm', 'phân bố đều'], answer: 1, explain: 'Từ trường mạnh nhất ở hai cực.' },
    { type: 'short', q: 'Người cầm la bàn đang đi về hướng Nam rồi quay ngược lại để đi về hướng Bắc. Người đó đã quay một góc bao nhiêu độ?', answer: '180', unit: 'độ', calc: '2*90', explain: 'Nam → Bắc là hai hướng ngược nhau: 180°.' },
    { type: 'short', q: 'Một bạn vẽ quanh nam châm thẳng 4 đường sức phía trên, 4 đường sức phía dưới và 2 đoạn trên trục (hai bên hai cực). Bạn đã vẽ tất cả bao nhiêu đường?', answer: '10', calc: '4+4+2', explain: '4 + 4 + 2 = 10 đường.' }
  ]
});
})();
