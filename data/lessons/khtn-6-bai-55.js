/* KHTN 6 – Bài 55. Ngân Hà. Nội dung do nhóm biên soạn tự viết. */
(function () {
var S = THCS.svg;
THCS.registerLesson('khtn-6/bai-55', {
  objectives: [
    'Nêu được Ngân Hà là một thiên hà gồm hàng trăm tỉ ngôi sao, trong đó có Mặt Trời.',
    'Nêu được năm ánh sáng là đơn vị đo khoảng cách trong vũ trụ và đổi được sang km (gần đúng).',
    'Nhận biết được một số chòm sao (Gấu Lớn, Gấu Nhỏ, Lạp Hộ) và cách tìm sao Bắc Cực để xác định hướng Bắc.'
  ],
  intro: 'Vào đêm trời quang, không trăng, ở nơi xa ánh đèn thành phố, em có thể thấy một dải sáng mờ vắt ngang bầu trời – người Việt gọi là <b>sông Ngân</b>. Đó chính là một phần thiên hà của chúng ta.',
  steps: [
    { title: 'Ngân Hà là gì?', html: `<ul><li><b>Thiên hà</b> là một tập hợp rất nhiều ngôi sao, khí, bụi… liên kết với nhau bởi lực hấp dẫn.</li>
      <li><b>Ngân Hà</b> là thiên hà chứa hệ Mặt Trời, gồm khoảng <b>hàng trăm tỉ</b> ngôi sao. Mặt Trời chỉ là một ngôi sao trung bình trong số đó.</li>
      <li>Ngân Hà có dạng đĩa xoắn ốc, đường kính khoảng <b>100 000 năm ánh sáng</b>; hệ Mặt Trời nằm ở một nhánh xoắn, cách xa tâm.</li>
      <li>Vì hệ Mặt Trời nằm <b>bên trong</b> đĩa, nhìn dọc theo đĩa ta thấy vô số sao chụm lại thành dải sáng mờ – dải Ngân Hà.</li></ul>`,
      svg: S.galaxy(), caption: 'Hình vẽ mô phỏng Ngân Hà nhìn từ trên xuống và vị trí hệ Mặt Trời.' },
    { title: 'Năm ánh sáng', html: `<p><b>Năm ánh sáng</b> là quãng đường ánh sáng đi được trong <b>một năm</b>. Đây là đơn vị đo <b>khoảng cách</b> (không phải đơn vị thời gian).</p>
      <div class="box key">1 năm ánh sáng ≈ 9 460 tỉ km (gần 10 000 tỉ km).</div>
      <p>Ngôi sao gần hệ Mặt Trời nhất (Cận Tinh, Proxima Centauri) cách chúng ta khoảng 4,2 năm ánh sáng.</p>` },
    { title: 'Chòm sao', html: `<p><b>Chòm sao</b> là một nhóm sao nhìn thấy gần nhau trên bầu trời, được người xưa tưởng tượng thành hình con vật, đồ vật, nhân vật. Ngày nay các nhà thiên văn chia bầu trời thành <b>88 chòm sao</b>.</p>
      <p>Các sao trong một chòm sao chỉ <b>trông</b> như gần nhau; thực tế chúng có thể ở rất xa nhau và xa Trái Đất khác nhau.</p>` },
    { title: 'Tìm sao Bắc Cực', html: `<p>Chòm <b>Gấu Lớn</b> có 7 sao sáng xếp thành hình cái gáo (cái muôi). Kéo dài đoạn nối hai sao ở mép "miệng gáo" khoảng 5 lần, ta gặp <b>sao Bắc Cực</b> – ngôi sao sáng ở đầu "đuôi" chòm <b>Gấu Nhỏ</b>. Sao Bắc Cực luôn ở phía <b>Bắc</b>, gần như đứng yên trên bầu trời nên dùng để xác định hướng.</p>`,
      svg: S.constellation('bac-cuc'), caption: 'Chòm Gấu Lớn, Gấu Nhỏ và cách tìm sao Bắc Cực (đường nét đứt).' },
    { title: 'Chòm sao Lạp Hộ', html: `<p><b>Lạp Hộ</b> (Orion, "người thợ săn") dễ nhận ra vào các đêm mùa đông nhờ <b>ba ngôi sao gần thẳng hàng</b> ở giữa (thắt lưng) cùng hai sao sáng: <b>Betelgeuse</b> màu đỏ và <b>Rigel</b> màu trắng xanh.</p>`,
      svg: S.constellation('lap-ho'), caption: 'Chòm sao Lạp Hộ.' }
  ],
  summary: 'Ngân Hà là thiên hà dạng đĩa xoắn ốc chứa hệ Mặt Trời, gồm hàng trăm tỉ ngôi sao, đường kính khoảng 100 000 năm ánh sáng. Năm ánh sáng là quãng đường ánh sáng đi trong một năm (≈ 9 460 tỉ km). Bầu trời được chia thành 88 chòm sao; dùng chòm Gấu Lớn để tìm sao Bắc Cực, xác định hướng Bắc; chòm Lạp Hộ có ba sao thắt lưng thẳng hàng.',
  examples: [
    { title: 'Đổi năm ánh sáng ra km', problem: 'Cận Tinh cách chúng ta khoảng 4,2 năm ánh sáng. Khoảng cách đó xấp xỉ bao nhiêu tỉ km? (1 năm ánh sáng ≈ 9 460 tỉ km)', solution: '4,2 × 9 460 = <b>39 732 tỉ km</b> (gần 40 nghìn tỉ km).' },
    { title: 'Năm ánh sáng là đơn vị gì?', problem: 'Bạn Nam nói: "Năm ánh sáng là đơn vị đo thời gian." Đúng hay sai?', solution: '<b>Sai</b>. Năm ánh sáng là đơn vị đo <b>khoảng cách</b> – quãng đường ánh sáng đi trong một năm.' },
    { title: 'Xác định hướng', problem: 'Ban đêm em tìm thấy sao Bắc Cực. Quay mặt về phía sao Bắc Cực thì tay phải chỉ hướng nào?', solution: 'Mặt hướng Bắc → tay phải chỉ hướng <b>Đông</b>, tay trái chỉ hướng Tây, sau lưng là hướng Nam.' }
  ],
  exercises: [
    { question: 'Vì sao ở thành phố lớn rất khó nhìn thấy dải Ngân Hà?', hints: ['Dải Ngân Hà sáng mạnh hay mờ?', 'Thành phố có nhiều gì vào ban đêm?'], solution: 'Dải Ngân Hà rất mờ; ở thành phố ánh đèn điện làm bầu trời sáng lên (ô nhiễm ánh sáng) và có khói bụi nên át mất ánh sáng mờ của dải Ngân Hà.' },
    { question: 'Đường kính Ngân Hà khoảng 100 000 năm ánh sáng. Ánh sáng cần bao lâu để đi hết đường kính đó?', hints: ['Nhớ lại định nghĩa năm ánh sáng.', '1 năm ánh sáng là quãng đường ánh sáng đi trong 1 năm.'], solution: 'Khoảng <b>100 000 năm</b>.' },
    { question: 'Nêu cách tìm sao Bắc Cực nhờ chòm Gấu Lớn.', hints: ['Tìm "cái gáo" 7 sao.', 'Dùng hai sao ở mép miệng gáo.'], solution: 'Tìm chòm Gấu Lớn hình cái gáo; nối hai sao ở mép ngoài "miệng gáo" rồi kéo dài về phía miệng gáo mở ra khoảng 5 lần khoảng cách giữa hai sao đó → gặp sao Bắc Cực (sao sáng ở cuối đuôi chòm Gấu Nhỏ).' }
  ],
  quiz: [
    { type: 'mcq', q: 'Ngân Hà là:', options: ['Thiên hà chứa hệ Mặt Trời', 'Một hành tinh', 'Một chòm sao', 'Một vệ tinh'], answer: 0, explain: 'Ngân Hà là thiên hà của chúng ta.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Năm ánh sáng là đơn vị đo thời gian.', answer: false, explain: 'Năm ánh sáng là đơn vị đo khoảng cách.' },
    { type: 'short', q: 'Hiện nay bầu trời được chia thành bao nhiêu chòm sao?', answer: '88', unit: 'chòm sao', explain: '88 chòm sao.' },
    { type: 'mcq', q: 'Sao Bắc Cực giúp ta xác định hướng:', options: ['Bắc', 'Nam', 'Đông', 'Tây'], answer: 0, explain: 'Sao Bắc Cực luôn ở phía Bắc.' },
    { type: 'mcq', q: 'Chòm sao dưới đây có ba sao gần thẳng hàng ở giữa là:', svg: S.constellation('lap-ho'), options: ['Lạp Hộ', 'Gấu Lớn', 'Gấu Nhỏ', 'Thiên Hậu'], answer: 0, explain: 'Ba sao thắt lưng của Lạp Hộ.' },
    { type: 'tf', q: 'Khẳng định sau đúng hay sai: Mặt Trời là một ngôi sao trong Ngân Hà.', answer: true, explain: 'Ngân Hà có hàng trăm tỉ ngôi sao, trong đó có Mặt Trời.' },
    { type: 'short', q: '2 năm ánh sáng xấp xỉ bao nhiêu tỉ km? (1 năm ánh sáng ≈ 9 460 tỉ km)', answer: '18920', unit: 'tỉ km', calc: '2*9460', explain: '2 × 9 460 = 18 920 tỉ km.' },
    { type: 'mcq', q: 'Đường kính Ngân Hà khoảng:', options: ['100 000 năm ánh sáng', '100 km', '1 au', '8 phút ánh sáng'], answer: 0, explain: 'Khoảng 100 000 năm ánh sáng.' }
  ]
});
})();
