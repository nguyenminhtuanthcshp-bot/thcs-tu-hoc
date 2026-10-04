/* KHTN 7 – Bài 13. Độ to và độ cao của âm. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-7/bai-13', {
  objectives: [
    'Nêu được đơn vị của tần số là hertz (Hz); tính được tần số từ số dao động và thời gian.',
    'Nêu được sự liên quan của độ to của âm với biên độ âm và độ cao của âm với tần số âm.',
    'Nhận biết được hạ âm, siêu âm và giới hạn nghe của tai người.',
    'Sử dụng nhạc cụ hoặc học liệu điện tử, dao động kí để minh hoạ độ to, độ cao của âm.'
  ],
  intro: 'Tiếng sáo trong trẻo, tiếng trống trầm hùng; tiếng hét to, tiếng thì thầm nhỏ. Âm thanh khác nhau ở “độ cao” và “độ to” – hai đặc trưng gắn với cách nguồn âm dao động.',
  steps: [
    { title: 'Biên độ và độ to của âm', html: `<p><b>Biên độ dao động</b> là độ lệch lớn nhất của vật so với vị trí cân bằng.</p>
      <div class="box key">Biên độ dao động càng lớn, âm phát ra càng <b>to</b>; biên độ càng nhỏ, âm càng nhỏ.</div>
      <p>Gảy mạnh dây đàn (dây lệch nhiều) thì tiếng đàn to; gảy nhẹ thì tiếng đàn nhỏ. Độ to của âm thường được đo bằng đơn vị đêxiben (dB).</p>`,
      svg: S.oscillo({ traces: [{ A: 0.35, f: 3, label: 'Âm nhỏ (biên độ nhỏ)' }, { A: 0.9, f: 3, label: 'Âm to (biên độ lớn)' }] }),
      caption: 'Cùng tần số nhưng biên độ khác nhau: đồ thị “cao” hơn ứng với âm to hơn.' },
    { title: 'Tần số', html: `<p><b>Tần số</b> là số dao động vật thực hiện được trong một giây. Đơn vị tần số là <b>hertz</b>, kí hiệu <b>Hz</b>.</p>
      <p class="math">tần số = {{số dao động|thời gian (s)}}</p>
      <p>Ví dụ: một dây đàn thực hiện 880 dao động trong 2 s ⇒ tần số 440 Hz.</p>` },
    { title: 'Tần số và độ cao của âm', html: `<div class="box key">Tần số dao động càng lớn, âm phát ra càng <b>cao</b> (bổng); tần số càng nhỏ, âm càng <b>thấp</b> (trầm).</div>
      <p>Dây đàn căng hơn, ngắn hơn dao động nhanh hơn nên phát âm cao hơn. Giọng nữ thường cao hơn giọng nam vì dây thanh quản dao động với tần số lớn hơn.</p>`,
      svg: S.oscillo({ traces: [{ A: 0.7, f: 2, label: 'Âm trầm (tần số nhỏ)' }, { A: 0.7, f: 6, label: 'Âm bổng (tần số lớn)' }] }),
      caption: 'Cùng biên độ nhưng khác tần số: đồ thị “dày” hơn ứng với âm cao hơn.' },
    { title: 'Hạ âm và siêu âm', html: `<p>Tai người thường nghe được âm có tần số từ <b>20 Hz</b> đến <b>20 000 Hz</b>.</p>
      <ul><li>Âm có tần số dưới 20 Hz gọi là <b>hạ âm</b>.</li><li>Âm có tần số trên 20 000 Hz gọi là <b>siêu âm</b>.</li></ul>
      <p>Một số động vật nghe được hạ âm (voi) hoặc siêu âm (chó, dơi, cá heo). Siêu âm được dùng trong y học (siêu âm thai nhi) và đo độ sâu đáy biển.</p>`,
      svg: S.hearingRange(), caption: 'Miền tần số: hạ âm – âm nghe được – siêu âm.' }
  ],
  summary: 'Biên độ lớn ⇒ âm to. Tần số = số dao động trong 1 s, đơn vị Hz; tần số lớn ⇒ âm cao (bổng). Tai người nghe được từ 20 Hz đến 20 000 Hz; dưới 20 Hz là hạ âm, trên 20 000 Hz là siêu âm.',
  examples: [
    { title: 'Tính tần số', problem: 'Trong 5 s, một con muỗi vỗ cánh 3 000 lần. Tính tần số vỗ cánh. Ta có nghe thấy tiếng muỗi không?', solution: 'Tần số = 3 000 : 5 = 600 Hz, nằm trong khoảng 20 – 20 000 Hz nên tai người nghe được.' },
    { title: 'So sánh độ cao', problem: 'Vật A dao động 500 lần trong 10 s; vật B dao động 300 lần trong 5 s. Vật nào phát ra âm cao hơn?', solution: 'f<sub>A</sub> = 50 Hz; f<sub>B</sub> = 60 Hz ⇒ vật B có tần số lớn hơn nên phát âm cao hơn.' },
    { title: 'Âm to hay nhỏ', problem: 'Trên màn hình dao động kí, hai đồ thị có cùng số “sóng” nhưng đồ thị thứ hai có đỉnh cao gấp đôi. Nhận xét hai âm.', solution: 'Cùng tần số nên cùng độ cao; đồ thị thứ hai có biên độ lớn hơn nên âm thứ hai to hơn.' }
  ],
  exercises: [
    { question: 'Một lá thép dao động 600 lần trong 20 s. Tính tần số và cho biết tai người có nghe được âm đó không.', hints: ['Tần số = số dao động : thời gian.', 'So sánh với khoảng 20 Hz – 20 000 Hz.'], solution: 'f = 600 : 20 = 30 Hz, nằm trong khoảng 20 – 20 000 Hz nên tai người nghe được (một âm rất trầm).' },
    { question: 'Vì sao khi vặn cho dây đàn căng hơn thì âm phát ra cao hơn?', hints: ['Dây căng hơn dao động nhanh hơn hay chậm hơn?', 'Liên hệ tần số với độ cao.'], solution: 'Dây căng hơn dao động nhanh hơn (tần số lớn hơn) nên âm phát ra cao hơn.' },
    { question: 'Chó có thể nghe được âm có tần số 30 000 Hz còn người thì không. Vì sao? Âm đó gọi là gì?', hints: ['Giới hạn trên của tai người là bao nhiêu?', '30 000 Hz lớn hơn hay nhỏ hơn giới hạn đó?'], solution: '30 000 Hz > 20 000 Hz nên vượt quá giới hạn nghe của tai người; âm đó là siêu âm.' }
  ],
  quiz: [
    { type: 'mcq', q: 'Đơn vị của tần số là:', options: ['mét (m)', 'hertz (Hz)', 'giây (s)', 'đêxiben (dB)'], answer: 1, explain: 'Tần số đo bằng hertz (Hz).' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Biên độ dao động càng lớn thì âm phát ra càng to.', answer: true, explain: 'Độ to phụ thuộc biên độ.' },
    { type: 'short', q: 'Một vật dao động 200 lần trong 5 s. Tần số dao động là bao nhiêu Hz?', answer: '40', unit: 'Hz', calc: '200/5', explain: '200 : 5 = 40 Hz.' },
    { type: 'mcq', q: 'Âm có tần số 50 000 Hz là:', options: ['hạ âm', 'âm nghe được', 'siêu âm', 'tiếng ồn'], answer: 2, explain: 'Trên 20 000 Hz là siêu âm.' },
    { type: 'short', q: 'Dây đàn phát âm có tần số 440 Hz. Trong 3 s, dây đàn thực hiện bao nhiêu dao động?', answer: '1320', unit: 'dao động', calc: '440*3', explain: '440 · 3 = 1 320 dao động.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Âm có tần số 10 Hz là siêu âm.', answer: false, explain: 'Dưới 20 Hz là hạ âm.' },
    { type: 'mcq', q: 'Tần số dao động càng nhỏ thì âm phát ra:', options: ['càng to', 'càng trầm', 'càng bổng', 'càng nhanh'], answer: 1, explain: 'Tần số nhỏ ⇒ âm thấp (trầm).' },
    { type: 'short', q: 'Cánh ong vỗ 1 200 lần trong 4 s. Tần số là bao nhiêu Hz?', answer: '300', unit: 'Hz', calc: '1200/4', explain: '1 200 : 4 = 300 Hz.' }
  ]
});
})();
