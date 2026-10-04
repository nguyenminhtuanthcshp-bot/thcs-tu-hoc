/* Toán 8 – Bài 15. Định lí Thalès trong tam giác. Nội dung do nhóm biên soạn tự viết. */
(function () {
  var S = THCS.svg, C = S.C, G = S.geom;
  var A = [180, 30], B = [60, 210], Cc = [320, 210], M = G.along(A, B, 0.4), N = G.along(A, Cc, 0.4);
  var tri = function (txt) { return S.geo({ w: 380, h: 240, P: { A: A, B: B, C: Cc, M: M, N: N }, seg: ['AB', 'BC', 'CA', { s: 'MN', color: C.blue, width: 2.5 }], parallel: [['MN', 1], ['BC', 1]], text: txt || [] }); };
  THCS.registerLesson('toan-8/bai-15', {
    objectives: [
      'Nhận biết được tỉ số của hai đoạn thẳng và đoạn thẳng tỉ lệ.',
      'Giải thích được định lí Thalès trong tam giác (thuận và đảo).',
      'Tính được độ dài đoạn thẳng bằng cách sử dụng định lí Thalès.',
      'Giải quyết được một số vấn đề thực tiễn (đo khoảng cách, chiều cao) gắn với định lí Thalès.'
    ],
    intro: 'Tương truyền nhà toán học Thalès đã đo chiều cao kim tự tháp chỉ bằng một cây gậy và bóng nắng. Bí quyết của ông chính là định lí mang tên ông.',
    steps: [
      { title: 'Tỉ số của hai đoạn thẳng', html: `<p>Tỉ số của hai đoạn thẳng là tỉ số độ dài của chúng (cùng đơn vị đo): {{AB|CD}}.</p>
        <p>Hai đoạn AB, CD gọi là <b>tỉ lệ</b> với hai đoạn A'B', C'D' nếu {{AB|CD}} = {{A'B'|C'D'}}.</p>
        <div class="box tip">Ví dụ: AB = 30 cm, CD = 1,2 m = 120 cm ⇒ {{AB|CD}} = {{30|120}} = {{1|4}}. Phải đổi về cùng đơn vị!</div>` },
      { title: 'Định lí Thalès (thuận)', html: `<div class="box key">Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.</div>
        <p>ΔABC, MN // BC (M ∈ AB, N ∈ AC) ⇒ {{AM|AB}} = {{AN|AC}}; &nbsp; {{AM|MB}} = {{AN|NC}}; &nbsp; {{MB|AB}} = {{NC|AC}}.</p>`, svg: tri(), caption: 'MN // BC.' },
      { title: 'Định lí Thalès đảo', html: `<div class="box key">Nếu một đường thẳng cắt hai cạnh của một tam giác và định ra trên hai cạnh này những đoạn thẳng tương ứng tỉ lệ thì đường thẳng đó song song với cạnh còn lại.</div>
        <p>Nếu {{AM|MB}} = {{AN|NC}} thì MN // BC.</p>` },
      { title: 'Tính độ dài', html: `<p>Ví dụ: MN // BC, AM = 2 cm, MB = 3 cm, AN = 2,4 cm. Tìm NC.</p>
        <p>{{AM|MB}} = {{AN|NC}} ⇒ {{2|3}} = {{2,4|NC}} ⇒ NC = 2,4 · 3 : 2 = 3,6 cm.</p>`, svg: tri([[140, 66, '2', C.orange], [82, 152, '3', C.orange], [226, 66, '2,4', C.orange], [296, 152, '?', C.red]]), caption: 'Lập tỉ lệ thức rồi tìm đoạn chưa biết.' },
      { title: 'Hệ quả và ứng dụng thực tế', html: `<div class="box key">Hệ quả: nếu MN // BC (M ∈ AB, N ∈ AC) thì {{AM|AB}} = {{AN|AC}} = {{MN|BC}}.</div>
        <p>Để đo khoảng cách không đến được (bề rộng con sông, chiều cao cây…), ta tạo ra một tam giác có một đường thẳng song song với một cạnh rồi lập tỉ lệ thức.</p>` }
    ],
    summary: 'MN // BC trong ΔABC ⇔ {{AM|AB}} = {{AN|AC}} (hoặc {{AM|MB}} = {{AN|NC}}). Định lí thuận dùng để tính độ dài, định lí đảo dùng để chứng minh song song.',
    examples: [
      { title: 'Tìm x', problem: 'ΔABC có MN // BC (M ∈ AB, N ∈ AC), AM = 4, AB = 10, AC = 15. Tính AN.', solution: '{{AM|AB}} = {{AN|AC}} ⇒ {{4|10}} = {{AN|15}} ⇒ AN = 6.' },
      { title: 'Chứng minh song song', problem: 'ΔABC có AB = 9 cm, AC = 12 cm. Lấy D ∈ AB, E ∈ AC với AD = 3 cm, AE = 4 cm. Chứng minh DE // BC.', solution: '{{AD|AB}} = {{3|9}} = {{1|3}}; {{AE|AC}} = {{4|12}} = {{1|3}}. Hai tỉ số bằng nhau nên DE // BC (Thalès đảo).' },
      { title: 'Đo chiều rộng khúc sông', problem: 'Để đo khoảng cách từ điểm A trên bờ sông đến một cây B ở bờ bên kia, người ta chọn thêm các điểm C, D, E sao cho B, A, D thẳng hàng; B, C, E thẳng hàng và AC // DE. Đo được AD = 10 m, AC = 20 m, DE = 25 m. Tính AB.', solution: 'Theo hệ quả của định lí Thalès: {{BA|BD}} = {{AC|DE}} ⇒ {{AB|AB + 10}} = {{20|25}} ⇒ 25AB = 20AB + 200 ⇒ AB = 40 m.' }
    ],
    exercises: [
      { question: 'Tính tỉ số của hai đoạn thẳng AB = 45 cm và CD = 1,5 m.', hints: ['Đổi 1,5 m = 150 cm.', '{{45|150}} rút gọn.'], solution: '{{AB|CD}} = {{3|10}}.' },
      { question: 'ΔABC có DE // BC (D ∈ AB, E ∈ AC), AD = 6, DB = 4, EC = 3. Tính AE.', hints: ['{{AD|DB}} = {{AE|EC}}.', 'AE = 6 · 3 : 4.'], solution: 'AE = 4,5.' },
      { question: 'ΔMNP có MN = 8, MP = 10. Lấy I ∈ MN, K ∈ MP với MI = 2, MK = 2,5. IK có song song với NP không?', hints: ['So sánh {{MI|MN}} và {{MK|MP}}.', '{{2|8}} = {{1|4}}, {{2,5|10}} = {{1|4}}.'], solution: 'Có, IK // NP (Thalès đảo).' }
    ],
    quiz: [
      { type: 'short', requireSimplest: true, calc: '30 / 120', q: 'Tỉ số của hai đoạn thẳng AB = 30 cm và CD = 1,2 m là bao nhiêu? (Viết dạng a/b tối giản.)', answer: ['1/4'], answerText: '1/4', explain: '{{30|120}} = {{1|4}}.' },
      { type: 'short', calc: '4 * 15 / 10', q: 'MN // BC trong ΔABC, AM = 4, AB = 10, AC = 15. Tính AN.', answer: '6', explain: '{{4|10}} = {{AN|15}}.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: Nếu MN // BC (M ∈ AB, N ∈ AC) thì {{AM|MB}} = {{AN|NC}}.', answer: true, explain: 'Định lí Thalès.' },
      { type: 'mcq', q: 'MN // BC trong ΔABC (M ∈ AB, N ∈ AC). Tỉ lệ thức nào SAI?', options: ['{{AM|AB}} = {{AN|AC}}', '{{AM|MB}} = {{AN|NC}}', '{{AM|AN}} = {{AB|AC}}', '{{AM|AB}} = {{NC|AC}}'], answer: 3, explain: '{{AM|AB}} phải bằng {{AN|AC}}, không phải {{NC|AC}}.' },
      { type: 'short', calc: '6 * 3 / 4', q: 'DE // BC (D ∈ AB, E ∈ AC), AD = 6, DB = 4, EC = 3. Tính AE.', answer: '4.5', answerText: '4,5', explain: 'AE = 6 · 3 : 4 = 4,5.' },
      { type: 'tf', q: 'Khẳng định sau đúng hay sai: ΔABC có AB = 9, AC = 12, AD = 3 (D ∈ AB), AE = 5 (E ∈ AC) thì DE // BC.', answer: false, explain: '{{3|9}} ≠ {{5|12}}.' },
      { type: 'mcq', q: 'Định lí Thalès đảo dùng để:', options: ['Tính độ dài đoạn thẳng', 'Chứng minh hai đường thẳng song song', 'Tính số đo góc', 'Tính diện tích'], answer: 1, explain: 'Từ các đoạn tỉ lệ suy ra song song.' },
      { type: 'short', calc: '200 / 5', q: 'AC // DE, {{AB|AB + 10}} = {{20|25}}. Tính AB (m).', unit: 'm', answer: '40', explain: '25AB = 20AB + 200 ⇒ AB = 40.' }
    ]
  });
})();
