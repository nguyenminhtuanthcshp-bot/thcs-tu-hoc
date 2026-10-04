/* KHTN 9 – Bài 3. Cơ năng. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-9/bai-3', {
  objectives: [
    'Nêu được cơ năng là tổng động năng và thế năng của vật.',
    'Mô tả được sự chuyển hoá giữa động năng và thế năng trong một số trường hợp đơn giản.',
    'Vận dụng được định luật bảo toàn cơ năng (khi bỏ qua ma sát, lực cản) để giải bài tập đơn giản.'
  ],
  intro: 'Khi em chơi xích đu: lên cao thì chậm lại, xuống thấp thì nhanh dần. Năng lượng không biến mất mà chỉ “đổi dạng” liên tục giữa động năng và thế năng.',
  steps: [
    { title: 'Cơ năng là gì?', html: `<p><b>Cơ năng</b> của vật là tổng động năng và thế năng của nó:</p>
      <p class="math">W = W<sub>đ</sub> + W<sub>t</sub></p>
      <p>Ví dụ: một con chim bay ở độ cao nhất định có cả động năng (do bay) và thế năng (do ở trên cao).</p>` },
    { title: 'Động năng và thế năng chuyển hoá cho nhau', html: `<p>Thả một quả bóng rơi từ trên cao:</p><ul><li>Càng xuống thấp, h giảm ⇒ <b>thế năng giảm</b>.</li><li>Càng xuống, bóng rơi nhanh hơn ⇒ <b>động năng tăng</b>.</li></ul>
      <p>Thế năng đã <b>chuyển hoá thành</b> động năng. Khi ném vật lên cao thì ngược lại: động năng chuyển hoá thành thế năng.</p>`,
      svg: S.energyDrop({ m: 2, h: 5, points: [5, 3, 1, 0] }), caption: 'Vật 2 kg rơi từ độ cao 5 m: thế năng giảm bao nhiêu thì động năng tăng bấy nhiêu.' },
    { title: 'Con lắc đơn', html: `<p>Với con lắc dao động:</p><ul><li>Ở <b>vị trí cao nhất</b>: vật dừng lại trong khoảnh khắc ⇒ động năng bằng 0, thế năng lớn nhất.</li><li>Ở <b>vị trí thấp nhất</b>: vật đi nhanh nhất ⇒ động năng lớn nhất, thế năng nhỏ nhất.</li></ul>`,
      svg: S.pendulum() },
    { title: 'Bảo toàn cơ năng', html: `<div class="box key">Khi vật chuyển động chỉ chịu tác dụng của trọng lực (bỏ qua ma sát và lực cản không khí), <b>cơ năng của vật được bảo toàn</b>: W<sub>đ</sub> + W<sub>t</sub> = hằng số.</div>
      <p>Ví dụ: vật 0,2 kg thả rơi từ độ cao 5 m. Tại đó W = W<sub>t</sub> = 10 · 0,2 · 5 = 10 J. Khi chạm đất: W<sub>t</sub> = 0 ⇒ W<sub>đ</sub> = 10 J ⇒ {{1|2}} · 0,2 · v<sup>2</sup> = 10 ⇒ v<sup>2</sup> = 100 ⇒ v = 10 m/s.</p>
      <p>Trong thực tế có ma sát, lực cản nên cơ năng giảm dần (một phần chuyển thành nhiệt năng), vì thế xích đu sẽ dừng lại nếu không ai đẩy.</p>` }
  ],
  summary: 'Cơ năng W = W<sub>đ</sub> + W<sub>t</sub>. Động năng và thế năng chuyển hoá cho nhau. Bỏ qua ma sát, lực cản thì cơ năng được bảo toàn.',
  examples: [
    { title: 'Tính cơ năng', problem: 'Một con chim 0,5 kg bay ở độ cao 10 m với tốc độ 4 m/s. Tính cơ năng của con chim (mốc là mặt đất).', solution: 'W<sub>t</sub> = 10 · 0,5 · 10 = 50 J; W<sub>đ</sub> = {{1|2}} · 0,5 · 4<sup>2</sup> = 4 J.<br>W = 50 + 4 = 54 (J).' },
    { title: 'Ném vật lên cao', problem: 'Ném một vật 0,5 kg thẳng đứng lên từ mặt đất với tốc độ 6 m/s. Bỏ qua lực cản, vật lên cao tối đa bao nhiêu?', solution: 'Cơ năng ban đầu: W = W<sub>đ</sub> = {{1|2}} · 0,5 · 36 = 9 J.<br>Ở độ cao cực đại, v = 0 nên W<sub>t</sub> = 9 J ⇒ 10 · 0,5 · h = 9 ⇒ h = 1,8 m.' },
    { title: 'Tìm động năng ở độ cao trung gian', problem: 'Vật 1 kg thả rơi từ độ cao 2 m. Bỏ qua lực cản. Tính động năng của vật khi nó ở độ cao 0,5 m.', solution: 'W = 10 · 1 · 2 = 20 J. Tại h = 0,5 m: W<sub>t</sub> = 10 · 1 · 0,5 = 5 J.<br>W<sub>đ</sub> = W − W<sub>t</sub> = 20 − 5 = 15 (J).' }
  ],
  exercises: [
    { question: 'Một vật có thế năng 30 J và động năng 20 J. Tính cơ năng của vật.', hints: ['Cơ năng = động năng + thế năng.', '30 + 20 = ?'], solution: 'W = 30 + 20 = 50 (J).' },
    { question: 'Mô tả sự chuyển hoá năng lượng khi em trượt từ đỉnh cầu trượt xuống.', hints: ['Ở đỉnh, em ở cao nhất và gần như đứng yên.', 'Khi trượt xuống, độ cao giảm, tốc độ tăng.'], solution: 'Thế năng giảm dần, chuyển hoá thành động năng (tốc độ tăng). Do có ma sát nên một phần cơ năng chuyển thành nhiệt năng (mặt cầu trượt hơi ấm lên).' },
    { question: 'Một quả bóng 0,1 kg rơi từ độ cao 5 m. Bỏ qua lực cản, tính tốc độ của bóng ngay trước khi chạm đất.', hints: ['Cơ năng ban đầu = thế năng = 10 · 0,1 · 5.', 'Khi chạm đất, toàn bộ cơ năng là động năng: ½ · 0,1 · v² = 5.'], solution: 'W = 5 J. ½ · 0,1 · v² = 5 ⇒ v² = 100 ⇒ v = 10 m/s.' }
  ],
  quiz: [
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi vật rơi tự do, thế năng chuyển hoá thành động năng.', answer: true, explain: 'Độ cao giảm (thế năng giảm), tốc độ tăng (động năng tăng).' },
    { type: 'mcq', q: 'Cơ năng của một vật bằng:', options: ['Hiệu động năng và thế năng', 'Tổng động năng và thế năng', 'Tích động năng và thế năng', 'Chỉ bằng động năng'], answer: 1, explain: 'W = W<sub>đ</sub> + W<sub>t</sub>.' },
    { type: 'short', q: 'Một vật có động năng 12 J và thế năng 8 J. Cơ năng của vật là bao nhiêu jun?', answer: '20', unit: 'J', calc: '12+8', explain: '12 + 8 = 20 J.' },
    { type: 'mcq', q: 'Ở vị trí thấp nhất của con lắc đang dao động:', options: ['Động năng lớn nhất', 'Thế năng lớn nhất', 'Động năng bằng 0', 'Cơ năng bằng 0'], answer: 0, explain: 'Ở vị trí thấp nhất vật chuyển động nhanh nhất nên động năng lớn nhất.' },
    { type: 'short', q: 'Vật 2 kg thả rơi từ độ cao 3 m (bỏ qua lực cản). Động năng ngay trước khi chạm đất là bao nhiêu jun?', answer: '60', unit: 'J', calc: '10*2*3', explain: 'W = W<sub>t</sub> ban đầu = 10 · 2 · 3 = 60 J; chạm đất thì toàn bộ thành động năng.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong thực tế có ma sát, cơ năng của xích đu luôn được giữ nguyên.', answer: false, explain: 'Ma sát, lực cản làm cơ năng giảm dần (chuyển thành nhiệt năng).' },
    { type: 'mcq', q: 'Ném một hòn bi lên cao. Trong khi hòn bi đi lên:', options: ['Động năng tăng, thế năng giảm', 'Động năng giảm, thế năng tăng', 'Cả hai đều tăng', 'Cả hai đều giảm'], answer: 1, explain: 'Đi lên: chậm dần (động năng giảm), cao dần (thế năng tăng).' },
    { type: 'short', q: 'Vật 1 kg thả rơi từ độ cao 4 m (bỏ qua lực cản). Khi vật ở độ cao 1 m, động năng của vật là bao nhiêu jun?', answer: '30', unit: 'J', calc: '10*1*4-10*1*1', explain: 'W = 40 J; W<sub>t</sub> tại 1 m = 10 J ⇒ W<sub>đ</sub> = 30 J.' }
  ]
});
})();
