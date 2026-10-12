# THCS Tự Học – trang web tự học cho học sinh lớp 6–9

Trang web tĩnh giúp học sinh trung học cơ sở tự học các môn **Toán**, **Ngữ văn**, **Khoa học tự nhiên**, **Tin học**, **Giáo dục công dân** và **Lịch sử và Địa lí** theo
Chương trình giáo dục phổ thông 2018 (Thông tư 32/2018/TT-BGDĐT) và theo thứ tự bài học của bộ sách
“Kết nối tri thức với cuộc sống”.

> Toàn bộ lời giảng, ví dụ, bài tập, câu hỏi và văn bản minh hoạ đều do nhóm biên soạn **tự viết**,
> bám theo “yêu cầu cần đạt” của chương trình. Trang web **không sao chép** nội dung sách giáo khoa.
> Văn bản văn học dùng trong bài là truyện dân gian, tác phẩm đã thuộc phạm vi công cộng (được tóm lược, kể lại bằng lời mới)
> hoặc đoạn văn do nhóm biên soạn tự sáng tác.

## 1. Cách mở trang web

* **Không cần cài đặt, không cần mạng Internet.** Chỉ cần nhấp đúp vào tệp `index.html` để mở bằng trình duyệt
  (Chrome, Edge, Firefox, Cốc Cốc, Safari…). Trang chạy được trực tiếp qua giao thức `file://`.
* Có thể chép cả thư mục vào USB, máy tính phòng tin học, hoặc đưa lên bất kì dịch vụ lưu trữ web tĩnh nào.
* Tiến độ học (bài đã hoàn thành, điểm cao nhất, kết quả kiểm tra đầu vào, tên học sinh) được lưu trong
  `localStorage` của trình duyệt, **chỉ trên máy đang dùng**. Xoá dữ liệu trình duyệt hoặc bấm “Xoá toàn bộ tiến độ” sẽ mất tiến độ.

## 2. Cấu trúc thư mục

```
thcs-tu-hoc/
├── index.html              Trang duy nhất (ứng dụng một trang, định tuyến bằng dấu #)
├── css/style.css           Giao diện (tương thích điện thoại, máy tính bảng, máy tính)
├── js/core.js              Lõi: danh sách lớp, môn, màu sắc; hàm đăng kí dữ liệu
├── js/svg.js               Thư viện nhỏ vẽ hình minh hoạ SVG (trục số, hình phẳng, góc, biểu đồ…)
├── js/svg-khtn.js          Bổ sung hàm vẽ hình cho KHTN 6, 7, 8, 9 (tế bào, dụng cụ đo, lực, thiên văn, nguyên tử, âm, ánh sáng, từ, hoá học, áp suất, điện, nhiệt, cơ thể người, sinh thái, quang học thấu kính, cảm ứng điện từ, hoá hữu cơ, di truyền, tiến hoá…)
├── js/svg-tin.js           Bổ sung hàm vẽ hình cho Tin học (thành phần máy tính, dãy bit, đơn vị dung lượng, mạng, Internet, trang web, thư điện tử, cây thư mục, trang văn bản, bảng, sơ đồ khối, khối lệnh kiểu Scratch)
├── js/svg-toan.js          Bổ sung hàm vẽ hình cho Toán 7, 8, 9 (hình học toạ độ, đường tròn, cát tuyến, hình khối, biểu đồ, hình chóp đều, mặt phẳng toạ độ, parabol, đa giác đều, hình trụ – nón – cầu, sơ đồ cây)
├── js/app.js               Ứng dụng: định tuyến, trang bài học, kiểm tra, tiến độ, tìm kiếm
├── data/courses/           Khung chương trình + bài kiểm tra đầu vào (mỗi môn – lớp một tệp)
│   ├── toan-6.js … toan-9.js
│   ├── ngu-van-6.js … ngu-van-9.js
│   └── khtn-6.js … khtn-9.js
├── data/lessons/           Nội dung chi tiết từng bài học (mỗi bài một tệp)
│   └── <môn>-<lớp>-<mã bài>.js   ví dụ: toan-6-bai-1.js, ngu-van-7-b1-doc.js
├── tools/cap-nhat-index.py Tiện ích tự thêm thẻ <script> cho các tệp dữ liệu vào index.html
├── tools/kiem-tra-dap-an.js Kiểm tra cấu trúc bài học và tính lại đáp án số (cần Node.js)
└── README.md               Tài liệu này
```

Các địa chỉ trong trang (dùng được nút “Quay lại” của trình duyệt):

| Địa chỉ | Trang |
|---|---|
| `#/` | Trang chủ – chọn lớp |
| `#/lop-6` | Chọn môn của lớp 6 |
| `#/lop-6/toan` | Danh sách chương, bài của Toán 6 |
| `#/lop-6/toan/bai-1` | Một bài học |
| `#/lop-6/toan/kiem-tra-dau-vao` | Bài kiểm tra đầu vào của Toán 6 |
| `#/tien-do` | Tiến độ của em |
| `#/tim-kiem/<từ khoá>` | Kết quả tìm kiếm bài học |
| `#/huong-dan` | Hướng dẫn tự học |
| `#/gioi-thieu` | Về trang web |

## 3. Vì sao dữ liệu nằm trong tệp `.js` mà không phải `.json`?

Khi mở bằng `file://`, trình duyệt chặn việc đọc tệp JSON bằng `fetch()`. Vì vậy mỗi tệp dữ liệu là một đoạn
JavaScript rất đơn giản, gọi hàm `THCS.registerCourse(...)` hoặc `THCS.registerLesson(...)`, và được nạp bằng thẻ
`<script>` trong `index.html` (giữa hai dấu mốc `<!-- DATA:BEGIN -->` và `<!-- DATA:END -->`).
Thứ tự nạp: `js/core.js` → `js/svg.js` → `js/svg-khtn.js` → `js/svg-toan.js` → `js/svg-tin.js` → các tệp trong `data/` → `js/app.js`.

## 4. Định dạng khung chương trình (`data/courses/<môn>-<lớp>.js`)

```js
THCS.registerCourse({
  subject: 'toan',              // mã môn: 'toan' | 'ngu-van' | 'khtn' | 'tin-hoc' | 'gdcd' | 'lsdl' (hoặc môn mới, xem mục 7)
  grade: 6,                     // lớp: 6 | 7 | 8 | 9
  book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    { id: 'c1', title: 'Chương I. Tập hợp các số tự nhiên',
      lessons: [
        'Bài 1. Tập hợp',                         // chuỗi bắt đầu bằng "Bài N." → mã bài tự sinh là "bai-N"
        'Bài 2. Cách ghi số tự nhiên',
        { id: 'c1-ltc-1', title: 'Luyện tập chung' },   // hoặc tự đặt mã bằng đối tượng {id, title}
        { id: 'c1-on-tap', title: 'Bài tập cuối chương I' }
      ] }
  ],
  diagnostic: {                 // bài kiểm tra đầu vào (khuyến nghị 10–15 câu)
    intro: 'Lời dẫn (không bắt buộc)',
    questions: [
      { lesson: 'bai-1', type: 'mcq', q: 'Câu hỏi…', options: ['…', '…', '…', '…'], answer: 0, explain: 'Giải thích…' }
      // Mỗi câu BẮT BUỘC có "lesson" = mã bài mà câu hỏi kiểm tra, để trang gợi ý đúng bài cần học.
      // Chương của câu hỏi được suy ra từ bài đó.
    ]
  }
});
```

* Với Ngữ văn, mỗi “Bài” (chủ đề) của sách được coi là một chương; các bài học nhỏ theo kĩ năng có mã như
  `b1-doc` (Đọc hiểu), `b1-tv` (Thực hành tiếng Việt), `b1-viet` (Viết), `b1-noi` (Nói và nghe).
* Bài nào **chưa có** tệp nội dung trong `data/lessons/` sẽ tự hiển thị thông báo “Bài học đang được biên soạn”.
* Khung chưa có `diagnostic` (môn đang biên soạn) vẫn hiện đầy đủ danh sách chương, bài; trang môn hiện ghi chú “đang được biên soạn”
  và ẩn nút Kiểm tra đầu vào.
* Chương có thể có trường `part` (phân môn). Lịch sử và Địa lí dùng `part: 'Phân môn Lịch sử'`, `'Phân môn Địa lí'`, `'Chủ đề chung'`;
  trang môn in tiêu đề phân môn trước nhóm chương tương ứng. Vì hai phân môn đều đánh số “Bài 1, Bài 2…”, mã bài có tiền tố:
  `ls-bai-1`, `dl-bai-1`, `dl-mo-dau`, `cdc-1` (chủ đề chung). Tin học 8, 9 có bài lựa chọn `bai-8a`, `bai-8b`…

## 5. Định dạng một bài học (`data/lessons/<môn>-<lớp>-<mã bài>.js`)

```js
THCS.registerLesson('toan-6/bai-1', {          // khoá = "<môn>-<lớp>/<mã bài>"
  objectives: ['Mục tiêu 1', 'Mục tiêu 2'],     // hiển thị ở mục “Mục tiêu bài học”
  intro: 'Lời dẫn vào bài (không bắt buộc)',
  text: {                                        // KHÔNG bắt buộc – văn bản đọc (thường dùng cho Ngữ văn)
    title: 'Tên văn bản', html: '<p>Đoạn 1…</p><p>Đoạn 2…</p>', source: 'Nguồn / ghi chú bản quyền'
  },
  steps: [                                       // “Học từng bước”: mỗi bước hiện ra sau khi bấm “Tiếp tục”
    { title: 'Tên bước', html: '<p>Nội dung ngắn gọn…</p>',
      svg: THCS.svg.numberLine({ min: 0, max: 8, ray: true }),   // KHÔNG bắt buộc – hình minh hoạ SVG (chuỗi hoặc mảng chuỗi)
      caption: 'Chú thích dưới hình' }                           // KHÔNG bắt buộc
  ],
  summary: 'Ghi nhớ – hiện ra khi học xong các bước',
  examples: [                                    // “Ví dụ mẫu” có lời giải (bấm để xem)
    { title: 'Tên ví dụ', problem: 'Đề bài…', solution: 'Lời giải…' }
  ],
  exercises: [                                   // “Luyện tập”: Gợi ý 1 → Gợi ý 2 → Xem lời giải
    { question: 'Đề bài…', hints: ['Gợi ý 1', 'Gợi ý 2'], solution: 'Lời giải…' }
  ],
  quiz: [                                        // “Kiểm tra cuối bài” (5–10 câu), chấm tự động
    { type: 'mcq',   q: 'Câu hỏi trắc nghiệm', options: ['A', 'B', 'C', 'D'], answer: 2, explain: 'Giải thích' },
    { type: 'tf',    q: 'Khẳng định … đúng hay sai?', answer: true, explain: '…' },
    { type: 'short', q: 'Câu trả lời ngắn', answer: ['2/5', '0.4'], answerText: '2/5 (hoặc 0,4)', unit: 'kg', explain: '…' },
    { type: 'short', q: 'Tính 12 · 5 − 7', answer: '53', calc: '12*5-7', explain: '…' }   // calc: biểu thức để công cụ kiểm tra tính lại
  ]
});
```

Ghi chú về câu hỏi:

* `mcq`: `answer` là **chỉ số** của phương án đúng, tính từ 0. Thứ tự phương án được **xáo trộn** mỗi lần hiển thị;
  nếu một câu cần giữ nguyên thứ tự (ví dụ có phương án “Cả A và B”), thêm `keepOrder: true`.
* `tf`: `answer` là `true` (Đúng) hoặc `false` (Sai).
* `short`: `answer` là một chuỗi hoặc một mảng các đáp án chấp nhận được. Khi chấm:
  * so sánh số: chấp nhận dấu phẩy hoặc dấu chấm thập phân (`2,5` = `2.5`), phân số (`5/2`), dấu trừ `−` hoặc `-`,
    dấu chấm ngăn cách hàng nghìn (`1.000.000`), dấu cách (`1 023`). Trong **dữ liệu** (trường `answer`), dấu `.` luôn là dấu
    thập phân (`'0.225'` là 0,225); chỉ chữ học sinh gõ mới được hiểu theo kiểu nhóm hàng nghìn;
  * so sánh chữ: không phân biệt hoa/thường, không phân biệt có dấu/không dấu;
  * nếu có `unit`, học sinh có thể gõ kèm đơn vị (ví dụ `50 J`).
  * `answerText` (không bắt buộc) là cách hiển thị đáp án đúng cho đẹp.
  * `requireSimplest: true` (không bắt buộc): dùng cho câu yêu cầu kết quả **tối giản / rút gọn**. Khi có cờ này,
    câu trả lời chỉ được chấp nhận nếu là số nguyên hoặc phân số `a/b` tối giản (ƯCLN(a, b) = 1, b > 1): với đáp án `1/5`,
    học sinh gõ `6/30` sẽ bị chấm sai kèm thông báo “Đúng giá trị nhưng phân số chưa tối giản”. Công cụ kiểm tra báo lỗi nếu
    đáp án của câu có cờ chưa tối giản, hoặc nếu câu có chữ “tối giản/rút gọn” với đáp án phân số mà thiếu cờ.
* `svg` + `caption` (không bắt buộc) dùng được ở **bước học, ví dụ, bài tập, câu hỏi kiểm tra và câu hỏi đầu vào**.
  Hình được hiển thị trong khung `<figure class="fig">` ngay sau nội dung. Cũng có thể viết thẳng thẻ `<svg>` trong `html`.
* `calc` (không bắt buộc, chỉ dùng khi viết bài): biểu thức JavaScript cho kết quả bằng số. Công cụ `tools/kiem-tra-dap-an.js`
  tính lại và so với `answer` (câu `short`) hoặc với giá trị của phương án đúng (câu `mcq`); trang web không dùng trường này.
  Trong biểu thức có sẵn `gcd`, `lcm`, `divisors`, `round(x, số chữ số)`, `sqrt`, `sum(mảng)`, `mean(mảng)`,
  `poly([a0, a1, a2, …], x)` (giá trị đa thức a0 + a1·x + a2·x² + …) và `Math`. Với Toán 7, Toán 8, Toán 9, KHTN 7, KHTN 8 và KHTN 9, câu `short` có đáp án số bắt buộc phải có `calc`.
* Đạt từ **80%** số câu trở lên, bài học được đánh dấu **“Đã hoàn thành”** (hằng số `PASS` trong `js/app.js`).

## 6. Viết công thức và định dạng

* Không dùng thư viện ngoài (KaTeX, MathJax…). Viết bằng HTML/Unicode: `x<sup>2</sup>`, `√`, `≤`, `≥`, `≠`, `×`, `·`, `−`, `π`, `°`.
* **Phân số**: viết `{{tử|mẫu}}`, ví dụ `{{3|4}}`, `{{a + b|m}}` → hiển thị phân số dạng chồng.
* Hệ phương trình: `<span class="sys"><span>x + y = 5</span><span>x − y = 1</span></span>`.
* Gạch trên (số có nhiều chữ số): `<span class="ol">ab</span>`.
* Hộp nhấn mạnh: `<div class="box key">…</div>` (ghi nhớ), `<div class="box tip">…</div>` (lưu ý), `<div class="box note">…</div>` (ghi chú).
* Bảng: `<table class="tbl">…</table>`; dòng biểu thức nổi bật: `<p class="math">…</p>`; thơ: `<div class="poem">…</div>`.
* Có thể dùng dấu huyền ngược (backtick) cho chuỗi nhiều dòng, nhưng **tránh chuỗi `${`**; viết `&lt;` và `&gt;` thay cho `<`, `>` khi là dấu so sánh.

## 6b. Hình minh hoạ SVG (`js/svg.js`)

Mọi hình đều là SVG **nhúng trực tiếp** (không cần mạng), có `viewBox` và tự co giãn theo màn hình (`max-width: 100%`),
nhãn bằng tiếng Việt. Mỗi hàm trả về một chuỗi `<svg class="fig-svg" …>`; gán vào trường `svg` của bước/ví dụ/câu hỏi.
Trong tệp bài học nên bọc bằng `(function () { var S = THCS.svg; … })();`.

| Hàm | Dùng để vẽ |
|---|---|
| `S.numberLine({min, max, div, ray, marks:[{v, label, color}], jumps:[{from, to, label}], range:[a, b], fracLabels, decLabels})` | Tia số, trục số (số nguyên, phân số, số thập phân), bước nhảy cộng/trừ |
| `S.shape(kind, {names, ticks, angles, diag, height, dims, axes, center})` với `kind` = `tamgiacdeu`, `hinhvuong`, `lucgiacdeu`, `hcn`, `thoi`, `binhhanh`, `thangcan` | Hình phẳng có tên đỉnh, kí hiệu cạnh bằng nhau, góc vuông, đường chéo, đường cao, trục/tâm đối xứng |
| `S.angle({deg, names, label})`, `S.protractor({deg, names})` | Góc, thước đo góc |
| `S.draw({w, h, items:[…]})` | Hình tự do: `poly`, `seg`, `line`, `ray`, `pt`, `text`, `tick`, `right`, `arc`, `axis`, `circle`, `grid` |
| `S.bar({title, cats, series:[{name, values}], yMax, yStep, yLabel})` | Biểu đồ cột, cột kép |
| `S.picto({title, rows:[{label, n}], icon, key})` | Biểu đồ tranh |
| `S.pie({parts, shaded})`, `S.fracBars({bars:[{parts, shaded, label}]})` | Hình tròn, băng giấy chia phần (phân số) |
| `S.row([{svg, caption}])` | Xếp nhiều hình nhỏ thành một hàng |
| `S.flow({items:[chuỗi hoặc {title, text}], size})` | Chuỗi ô nối bằng mũi tên: quy trình viết/nói, trình tự sự việc |
| `S.mindmap({center, branches:[{title, items}]})` | Sơ đồ tư duy: dàn ý, sơ đồ lập luận, tổng hợp ôn tập |
| `S.storyArc({stages, peak, notes})` | “Ngọn núi” cốt truyện: mở đầu – phát triển – cao trào – kết thúc |

**Hình cho Khoa học tự nhiên (`js/svg-khtn.js`).** Tệp này nạp ngay sau `js/svg.js` và chỉ **gắn thêm** hàm vào `THCS.svg`
(không sửa `svg.js`). Các hàm chính:

| Hàm | Dùng để vẽ |
|---|---|
| `S.sign({kind, glyph, label})`, `S.signs([...])` | Biển báo phòng thực hành: `kind` = `cam`, `canh-bao`, `chi-dan`, `bat-buoc`; `glyph` = `lua`, `ly`, `thuoc`, `dien`, `doc`, `an-mon`, `thoat`, `binh`, `kinh` |
| `S.magnifier()`, `S.microscope()` | Kính lúp, kính hiển vi quang học có chú thích |
| `S.ruler({min, max, div, obj, shape})`, `S.thermometer({min, max, step, minor, value})`, `S.dial({max, step, minor, value, unit})`, `S.forceMeter({max, step, minor, value})`, `S.clock({h, m, s})` | Dụng cụ đo: thước, nhiệt kế, cân đồng hồ, lực kế, đồng hồ (đọc số chỉ) |
| `S.particles('ran'\|'long'\|'khi')`, `S.stateChange()`, `S.lab('loc'\|'co-can'\|'chiet')`, `S.pieChart({parts})` | Thể của chất, sự chuyển thể, dụng cụ tách chất, biểu đồ quạt (thành phần không khí) |
| `S.cell('dong-vat'\|'thuc-vat'\|'nhan-so')`, `S.cellDivision({gens})`, `S.bacteria()`, `S.virus('cau-tao'\|'hinh-dang')`, `S.taxonomy({example})`, `S.keyTree(cây, {w})` | Tế bào, phân chia tế bào, vi khuẩn, virus, bậc phân loại, khoá lưỡng phân |
| `S.labelled({w, h, body, labels:[[px, py, tx, ty, 'nhãn']]})` | Hình SVG tự vẽ kèm đường chú thích |
| `S.forces({w, h, ground, box, ball, arrows:[{x, y, deg, len, label}], scale})`, `S.springs({items:[{l, load, label}]})`, `S.energyFlow({input, outputs})` | Biểu diễn lực bằng mũi tên theo tỉ xích, lò xo treo vật, dòng năng lượng có ích/hao phí |
| `S.sunPath()`, `S.sunEarth()`, `S.moonOrbit()`, `S.moonStrip()`, `S.moonFace(p)`, `S.solarSystem()`, `S.constellation('bac-cuc'\|'lap-ho')`, `S.galaxy()` | Mặt Trời mọc – lặn, ngày đêm, pha Mặt Trăng, hệ Mặt Trời, chòm sao, Ngân Hà |
| `S.atomModel({name, p, n, shells})`, `S.periodicTable({highlight})`, `S.elementCell(…)`, `S.moleculeModel('H2O'…, {title})`, `S.saltLattice()`, `S.bondScheme('ion'\|'H2'\|'H2O')`, `S.valenceCross(…)` | KHTN 7 – mô hình nguyên tử Rutherford – Bohr, bảng tuần hoàn 20 nguyên tố đầu (khối lượng nguyên tử, phân loại kim loại/phi kim/khí hiếm), mô hình phân tử, mạng tinh thể muối ăn, liên kết ion/cộng hoá trị, lập công thức theo hoá trị |
| `S.xyGraph({series, xmax, ymax, xstep, ystep, xlabel, ylabel, proj, marks})`, `S.photoGate()`, `S.roadSafety()`, `S.motionStrip({rows})`, `S.speedCamera()` | Đồ thị quãng đường – thời gian (và mọi đồ thị x–y: quang hợp, sinh trưởng), cổng quang điện, khoảng cách an toàn, ảnh chụp hoạt nghiệm, bắn tốc độ |
| `S.soundWave()`, `S.oscillo({traces})`, `S.hearingRange()`, `S.echoScene('wall'\|'sonar'\|'barrier')` | Sóng âm (nén – dãn), dao động kí (biên độ, tần số), hạ âm – âm nghe được – siêu âm, phản xạ âm, sonar, tường chắn tiếng ồn |
| `S.lightBeams()`, `S.shadowScene({source})`, `S.reflectionRays({i}\|{kind:'diffuse'})`, `S.mirrorImage({kind})` | Chùm sáng, bóng tối – bóng nửa tối, định luật phản xạ, phản xạ khuếch tán, ảnh qua gương phẳng |
| `S.magnetField({compass}\|{filings})`, `S.magnetPoles()`, `S.compassRose()`, `S.earthField()`, `S.electromagnet()` | Đường sức từ, tương tác các cực, la bàn, từ trường Trái Đất, nam châm điện |
| `S.photosynthesisScheme()`, `S.respirationScheme()`, `S.stomataPair()`, `S.plantTransport()`, `S.starchTest()`, `S.elodeaExp()`, `S.respExperiment()`, `S.stemDyeExp()`, `S.circulation()`, `S.alveolus()` | Quang hợp, hô hấp tế bào, khí khổng, vận chuyển trong cây, thí nghiệm iodine – rong đuôi chó – nước vôi trong – nước màu, tuần hoàn, phế nang |
| `S.tropism('light'\|'gravity'\|'water'\|'touch'\|'tendril')`, `S.meristem()`, `S.lifeCycle({stages, title})`, `S.flowerParts({pollen})`, `S.vegProp('giam'\|'chiet'\|'ghep')`, `S.asexualAnimal('phan-doi'\|'nay-choi')`, `S.zygoteFlow()`, `S.unityWheel({center, items})` | Tính hướng, mô phân sinh, vòng đời, cấu tạo hoa – thụ phấn, giâm/chiết/ghép, phân đôi – nảy chồi, sinh sản hữu tính, cơ thể thống nhất |
| `S.apparatus({items})`, `S.burnerFlame()`, `S.heatTube()`, `S.gasCollect()`, `S.cylinderReading()`, `S.reactionParticles(…)`, `S.massBalance(…)`, `S.molMap()`, `S.solutionScheme(…)`, `S.tubesCompare({tubes, cw, title})` | KHTN 8 – dụng cụ, đèn cồn, đun ống nghiệm, thu khí, đọc ống đong, phản ứng hoá học dạng hạt, bảo toàn khối lượng, sơ đồ n – m – V, pha dung dịch, so sánh các ống nghiệm |
| `S.phScale({marks})`, `S.fertilizerBag({n, p, k})` | Thang pH có đánh dấu chất; bao phân bón ghi hàm lượng N – P₂O₅ – K₂O |
| `S.overflowCan()`, `S.pressureBricks()`, `S.liquidPressure()`, `S.communicatingVessels()`, `S.torricelli()`, `S.buoyancy({state})`, `S.archimedesExp()`, `S.momentForce()`, `S.lever({type, ratio})` | Bình tràn, áp suất chất rắn, áp suất chất lỏng, bình thông nhau, áp suất khí quyển, vật nổi/chìm/lơ lửng, thí nghiệm Archimedes, moment lực, ba loại đòn bẩy (điểm tựa đặt theo tỉ lệ) |
| `S.circuit({items})`, `S.circuitSymbols()`, `S.chargeScene('repel'\|'attract')`, `S.currentDir()`, `S.meter({kind:'A'\|'V', max, step, minor, value})`, `S.heatParticles()`, `S.joulemeter()`, `S.heatTransfer('dan'\|'doi-luu'\|'buc-xa')`, `S.expansion(…)` | Mạch điện với kí hiệu chuẩn, bảng kí hiệu, nhiễm điện, chiều dòng điện, ampe kế – vôn kế, chuyển động phân tử và nhiệt năng, đo năng lượng nhiệt, dẫn nhiệt – đối lưu – bức xạ, nở vì nhiệt (băng kép) |
| `S.humanBody({organs, title})`, `S.armMuscle()`, `S.boneLong()`, `S.bloodCells()`, `S.heart()`, `S.neuron()`, `S.eyeSection()`, `S.eyeFocus('normal'\|'can'\|'vien', {lens})`, `S.earSection()`, `S.skinSection()` | Cơ thể người với các cơ quan chọn lọc (não, tuyến nội tiết, phổi, tim, tiêu hoá, bài tiết…), cơ – xương, tế bào máu, cấu tạo tim, neuron, mắt và tật khúc xạ, tai, da |
| `S.foodChain({items})`, `S.foodWeb({nodes, links, w, h})`, `S.ecoPyramid({levels, unit, title, equal})`, `S.toleranceRange({name, min, max, lo, hi, unit})`, `S.ageStructure()`, `S.biosphere()` | Chuỗi và lưới thức ăn (màu theo bậc dinh dưỡng), tháp sinh thái, giới hạn sinh thái, tháp tuổi, sinh quyển |

| `S.energyDrop()`, `S.pendulum()`, `S.workForce({F, s})`, `S.renewables()`, `S.acWave({kind, cycles, label})` | KHTN 9 – động năng/thế năng khi vật rơi, con lắc và bảo toàn cơ năng, công của lực, các nguồn năng lượng tái tạo, đồ thị dòng điện xoay chiều/một chiều |
| `S.refraction({…})`, `S.opticalFiber()`, `S.prism({mode})`, `S.lensShapes()`, `S.lensRay({kind, f, d, h, twoF, note})`, `S.opticalBench()` | Khúc xạ ánh sáng (tia tới, pháp tuyến, góc i, r), phản xạ toàn phần trong sợi quang, lăng kính và tán sắc, hình dạng thấu kính, dựng ảnh qua thấu kính hội tụ/phân kì bằng hai tia đặc biệt (vị trí ảnh tính đúng theo 1/f = 1/d + 1/d′), giá quang học |
| `S.resCircuit({…})`, `S.wireRes()`, `S.induction({mode})`, `S.generator()` | Đoạn mạch điện trở nối tiếp/song song, điện trở dây dẫn phụ thuộc l, S, ρ, cảm ứng điện từ (nam châm – cuộn dây – điện kế), máy phát điện xoay chiều |
| `S.activitySeries({highlight, brackets})`, `S.structFormula({mol, u, title})`, `S.oilColumn()`, `S.blastFurnace()`, `S.polymerChain({kind})`, `S.carbonCycle()` | Dãy hoạt động hoá học của kim loại, công thức cấu tạo (methane, ethane, ethylene, acetylene, ethylic alcohol, acetic acid…), chưng cất dầu mỏ, lò cao luyện gang, mạch polymer (PE, tinh bột, protein), chu trình carbon |
| `S.punnett({…})`, `S.crossScheme({…})`, `S.dnaHelix()`, `S.strandPair({s1, rna, hl, codon, title})`, `S.replicationFork()`, `S.translation()` | Bảng Punnett, sơ đồ lai (P, G, F₁, F₂), chuỗi xoắn kép DNA, mạch bổ sung DNA – mRNA, tái bản DNA, dịch mã |
| `S.chromosome()`, `S.karyotype({sex, tri})`, `S.cellStages({kind})`, `S.linkedGenes()`, `S.chromMutation({kind})`, `S.ploidy()`, `S.pedigree({…})`, `S.geneTransfer()`, `S.evoTree({tree, root, title})`, `S.geoTimeline()` | Cấu trúc NST, bộ NST người 2n = 46 (cả thể ba 21), nguyên phân – giảm phân, di truyền liên kết, đột biến cấu trúc NST, thể dị bội – đa bội, phả hệ, chuyển gene tạo insulin, cây phát sinh chủng loại, các đại địa chất |

**Hình cho Toán 7, Toán 8, Toán 9 (`js/svg-toan.js`).** Cũng chỉ **gắn thêm** hàm vào `THCS.svg` (không sửa `svg.js`, không trùng tên với `svg-khtn.js`):

| Hàm | Dùng để vẽ |
|---|---|
| `S.geo({w, h, P:{A:[x,y], …}, seg, dash, line, ray, ext, ticks:[['AB', n]], arcs:[['BAC', n, nhãn, màu, r]], right:['AHB'], fill:[['ABC', màu]], parallel:[['AB', n]], hide, off:{A:[dx,dy]}, text, namePos})` | Hình học theo toạ độ: tam giác, kí hiệu cạnh bằng nhau (vạch), góc bằng nhau (cung), góc vuông, kí hiệu song song; tên chữ thường (x, y, t…) chỉ ghi tên, không chấm; tên có dấu phẩy/chỉ số (A', A1) tự tách, hoặc viết `"A'-B"` |
| `S.geom.mid / along / foot / dist / centroid / incenter / circumcenter / orthocenter / bisectFoot / polar / shift` | Tính toạ độ trung điểm, chân đường vuông góc, trọng tâm, tâm đường tròn nội/ngoại tiếp, trực tâm, chân đường phân giác, điểm theo góc |
| `S.transversal({parallel, tilt, deg, names, show:{A:[1,2,3,4]}, mark:[['A', 1, màu, '60°']], namePos})` | Hai đường thẳng a, b bị cắt bởi c; góc đánh số 1 = trên – phải, 2 = trên – trái, 3 = dưới – trái, 4 = dưới – phải |
| `S.solid({kind:'hhcn'\|'lapphuong'\|'langtru3'\|'langtru4', a, b, c, names, dims:{a, b, c}})` | Hình hộp chữ nhật, lập phương, lăng trụ đứng tam giác/tứ giác; cạnh khuất nét đứt |
| `S.sectorChart({title, parts:[{label, value}], unit})`, `S.lineChart({title, cats, values \| series, yMin, yMax, yStep, yLabel})` | Biểu đồ hình quạt tròn (phần trăm), biểu đồ đoạn thẳng |
| `S.pyramid({kind:'chop3'\|'chop4', names, height, apothem, diag, dims:{a, h, d, e}, fill})` | Hình chóp tam giác đều / tứ giác đều (Toán 8): cạnh khuất nét đứt, chiều cao SO (đỏ), trung đoạn SM (xanh lá) |
| `S.plane({x:[min,max], y:[min,max], u, grid, step, xMul, yMul, xName, yName, lines:[{a, b, label, color, dash, at}], curves:[{f, label, lx, dx, dy, color}], pts:[{x, y, label, proj}], title})` | Mặt phẳng toạ độ Oxy (Toán 8): đồ thị hàm số bậc nhất y = ax + b (cắt gọn trong lưới), đường thẳng đứng x = x0, điểm có đường gióng; đường cong bất kì như parabol y = ax² (Toán 9) có nhãn; nhãn luôn nằm trong khung |
| `S.geo({…, circles:[{c:'O'\|[x,y], r, color, dash, fill, width}], sectors:[{c, a, b, fill, big}], carcs:[{c, a, b, color, width, big, label}]})` | Bổ sung cho `geo` (Toán 9): đường tròn, hình quạt tô màu, tô đậm cung (cung nhỏ, hoặc cung lớn với `big`); khung hình tự nới theo đường tròn |
| `S.regPoly({n, R, rot, names, O, outer, inner, radii, apothem, fill, arcs, off})` | Đa giác đều n cạnh nội tiếp đường tròn (Toán 9): đường tròn ngoại tiếp/nội tiếp, bán kính, trung đoạn OH, góc quay |
| `S.round({kind:'tru'\|'non'\|'cau', r, h, dims:{r, h, l}, names:{O, O2, S}, fill})` | Hình trụ, hình nón, hình cầu (Toán 9): nửa sau của đáy nét đứt, chiều cao đỏ, bán kính xanh, đường sinh tím |
| `S.histogram({title, edges, values, yMax, yStep, unit, yLabel, xLabel, color})` | Biểu đồ tần số / tần số tương đối ghép nhóm (Toán 9): các cột sát nhau trên các nhóm [a; b) |
| `S.probTree({levels:[['S','N'], …], names, sep, mark, dx, dy, title})`, `S.outcomeGrid({rows, cols, rowName, colName, cell, mark, cw, ch})` | Sơ đồ cây và bảng kết quả của phép thử nhiều bước (Toán 9), tô màu các kết quả thuận lợi |

## 7. Thêm bài học, thêm môn

**Thêm một bài học**

1. Tạo tệp `data/lessons/<môn>-<lớp>-<mã bài>.js` theo mẫu ở mục 5 (mã bài phải trùng với mã trong khung chương trình).
2. Thêm thẻ `<script src="data/lessons/…"></script>` vào `index.html` (giữa hai dấu mốc DATA), **hoặc** chạy
   `python3 tools/cap-nhat-index.py` để công cụ tự thêm.
3. Chạy `node tools/kiem-tra-dap-an.js toan-6` (thay `toan-6` bằng môn – lớp, hoặc bỏ trống để kiểm tra tất cả):
   công cụ kiểm tra cấu trúc (mục tiêu, 4–5 bước, 3 ví dụ, 3 bài tập có 2 gợi ý, 8 câu kiểm tra…), tính lại các đáp án có `calc`,
   kiểm tra SVG và mã bài của câu hỏi đầu vào, rồi báo số bài đã soạn. Với Toán 7, Toán 8, Toán 9, KHTN 7, KHTN 8, KHTN 9, Tin học 6, Tin học 7, Tin học 8, Tin học 9 và GDCD 6 (danh sách `STRICT_CALC` trong công cụ), mọi câu
   `short` có đáp án là số **bắt buộc** có `calc`; công cụ in tỉ lệ câu có `calc` của từng môn – lớp.
4. Mở lại `index.html` và kiểm tra bài học.

**Thêm một môn mới** (ví dụ Công nghệ)

1. Thêm môn vào `subjects`/`subjectOrder` trong `js/core.js` (như sáu môn hiện có), hoặc trong một tệp dữ liệu gọi:
   ```js
   THCS.registerSubject('cong-nghe', { name: 'Công nghệ', icon: '🛠️', color: '#b45309', light: '#fef3c7', desc: 'Mô tả ngắn' });
   ```
2. Tạo các tệp `data/courses/cong-nghe-6.js`… và các bài học tương ứng, rồi thêm thẻ `<script>` như trên
   (nhớ thêm mã môn vào `SUBJ` trong `tools/cap-nhat-index.py` để sắp thứ tự).

## 8. Phạm vi phiên bản này

* Khung chương trình **đầy đủ** (toàn bộ chương, bài) cho **24 môn – lớp**: Toán, Ngữ văn, KHTN, Tin học, Giáo dục công dân,
  Lịch sử và Địa lí – lớp 6, 7, 8, 9. Mục lục ba môn mới đã đối chiếu với mục lục SGK “Kết nối tri thức với cuộc sống”:
  Tin học 6/7/8/9: 17/16/20/22 bài; GDCD 6/7/8/9: 12/10/10/10 bài; LS&ĐL 6/7/8/9: 51/39/33/47 mục (Lịch sử + Địa lí + chủ đề chung).
* **Toán 6: soạn đầy đủ cả 67 mục** (43 bài, 15 “Luyện tập chung”, 9 “Bài tập cuối chương”) của cả hai tập, kèm hình minh hoạ SVG.
* **Ngữ văn 6: soạn đầy đủ cả 41 mục** (Bài 1 – Bài 10 với Đọc, Thực hành tiếng Việt, Viết, Nói và nghe; 2 bài ôn tập học kì),
  kèm sơ đồ SVG (quy trình, dàn ý, cốt truyện) và bảng so sánh thể loại. **Bản quyền:** văn bản đọc chỉ dùng văn học dân gian
  (ca dao, truyền thuyết, cổ tích – kể lại bằng lời của nhóm biên soạn) hoặc đoạn văn/bài thơ do nhóm biên soạn tự viết để minh hoạ
  thể loại; mỗi văn bản đều ghi rõ nguồn trong trường `source`. Không sao chép văn bản hiện đại có bản quyền trong SGK.
* **Toán 7: soạn đầy đủ cả 65 mục** (37 bài, 18 “Luyện tập chung/Luyện tập”, 10 “Bài tập cuối chương”) của cả hai tập theo thứ tự SGK
  Kết nối tri thức, kèm hình SVG (trục số với số vô tỉ, góc đối đỉnh/kề bù, tia phân giác, cát tuyến cắt hai đường thẳng song song,
  tam giác bằng nhau có kí hiệu, tam giác cân, đường trung trực, các đường đồng quy, hình khối có cạnh khuất, biểu đồ quạt/đoạn thẳng)
  từ `js/svg-toan.js` – tổng cộng 89 hình trong 55 bài. Mọi câu hỏi có đáp án số (310 câu) đều có trường `calc` để công cụ kiểm tra tính lại.
* **KHTN 6: soạn đầy đủ cả 55 bài** (10 chương, Bài 1 – Bài 55), kèm hình SVG (biển báo, kính hiển vi, dụng cụ đo, tế bào,
  khoá lưỡng phân, lực, lò xo, năng lượng, pha Mặt Trăng, hệ Mặt Trời, chòm sao) từ `js/svg-khtn.js`.
* **KHTN 7: soạn đầy đủ cả 42 bài** (Mở đầu và 10 chương, Bài 1 – Bài 42 theo SGK Kết nối tri thức; SGK không có bài ôn tập riêng,
  giống KHTN 6), kèm 86 hình SVG (92 SVG): mô hình nguyên tử, bảng tuần hoàn, mô hình phân tử, đồ thị quãng đường – thời gian, sóng âm,
  dao động kí, phản xạ ánh sáng, ảnh qua gương phẳng, đường sức từ, quang hợp, hô hấp, khí khổng, tính hướng, vòng đời, cấu tạo hoa,
  sinh sản vô tính, … từ `js/svg-khtn.js`. Mọi câu hỏi có đáp án số (130 câu) đều có trường `calc`; KHTN 7 nằm trong `STRICT_CALC`.
* **KHTN 8: soạn đầy đủ cả 47 bài** (Mở đầu và 8 chương, Bài 1 – Bài 47 theo SGK Kết nối tri thức; SGK không có bài ôn tập riêng),
  kèm 110 hình SVG (117 SVG): dụng cụ thí nghiệm, sơ đồ phản ứng dạng hạt, bảo toàn khối lượng, sơ đồ mol – khối lượng – thể tích,
  thang pH, bao phân bón NPK, áp suất chất rắn/lỏng, bình thông nhau, thí nghiệm Torricelli, lực đẩy Archimedes, moment lực, đòn bẩy,
  mạch điện với kí hiệu chuẩn, ampe kế – vôn kế, truyền nhiệt, nở vì nhiệt, cơ thể người và các hệ cơ quan (tim, phế nang, neuron, mắt,
  tai, da…), giới hạn sinh thái, tháp tuổi, chuỗi – lưới thức ăn, tháp sinh thái, sinh quyển, … từ `js/svg-khtn.js`. Số liệu minh hoạ đều
  được ghi rõ. Mọi câu hỏi có đáp án số (150 câu) đều có trường `calc`; KHTN 8 nằm trong `STRICT_CALC`.
* **Ngữ văn 7: soạn đầy đủ cả 41 mục** (Bài 1 – Bài 10 với Đọc, Thực hành tiếng Việt, Viết, Nói và nghe; Bài 10 gồm Đọc mở rộng,
  Viết và “Về đích: Ngày hội với sách”; 2 bài ôn tập học kì) theo thứ tự SGK Kết nối tri thức: truyện, thơ bốn chữ – năm chữ,
  thơ trữ tình, tuỳ bút – tản văn, truyện ngụ ngôn và tục ngữ, truyện khoa học viễn tưởng, văn bản nghị luận, văn bản thông tin;
  kèm sơ đồ SVG (quy trình, sơ đồ tư duy, đường cốt truyện) dùng lại `THCS.svg` và bảng so sánh. **Bản quyền:** văn bản đọc chỉ dùng
  văn học dân gian (ca dao, đồng dao, tục ngữ, truyện ngụ ngôn), tác phẩm thuộc phạm vi công cộng được kể lại/tóm lược bằng lời
  của nhóm biên soạn (Aesop, Jules Verne, H. C. Andersen, Hector Malot) hoặc văn bản do nhóm biên soạn tự viết; mỗi văn bản đều ghi
  rõ nguồn trong trường `source`. Không sao chép văn bản hiện đại có bản quyền trong SGK.
* **Toán 8: soạn đầy đủ cả 66 mục** (39 bài, 17 “Luyện tập chung”, 10 “Bài tập cuối chương”) của cả hai tập theo thứ tự SGK
  Kết nối tri thức: đa thức, hằng đẳng thức đáng nhớ, phân tích đa thức thành nhân tử, tứ giác, định lí Thalès, dữ liệu và biểu đồ,
  phân thức đại số, phương trình bậc nhất và hàm số bậc nhất, xác suất thực nghiệm, tam giác đồng dạng và định lí Pythagore,
  hình chóp đều. Kèm hình SVG (tứ giác, hình thang, hình bình hành, định lí Thalès, đường trung bình, đường phân giác, tam giác đồng dạng,
  hình đồng dạng phối cảnh, đồ thị hàm số bậc nhất trên mặt phẳng toạ độ, biểu đồ cột/quạt/đoạn thẳng, hình chóp tam giác đều/tứ giác đều
  và hình khai triển) từ `js/svg-toan.js` – tổng cộng 80 hình trong 47 bài. Mọi câu hỏi có đáp án số (248 câu) đều có trường `calc`.
* **Toán 9: soạn đầy đủ cả 56 mục** (32 bài, 14 “Luyện tập chung”, 10 “Bài tập cuối chương”) của cả hai tập theo thứ tự SGK
  Kết nối tri thức: hệ hai phương trình bậc nhất hai ẩn, phương trình và bất phương trình bậc nhất một ẩn, căn bậc hai và căn bậc ba,
  hệ thức lượng trong tam giác vuông, đường tròn, hàm số y = ax² và phương trình bậc hai một ẩn, tần số và tần số tương đối,
  xác suất của biến cố trong một số mô hình xác suất đơn giản, đường tròn ngoại tiếp – nội tiếp (góc nội tiếp, tứ giác nội tiếp,
  đa giác đều), hình trụ – hình nón – hình cầu. Kèm hình SVG (đường thẳng biểu diễn nghiệm, tỉ số lượng giác trong tam giác vuông,
  dây – cung – góc ở tâm, hình quạt, tiếp tuyến, vị trí tương đối của hai đường tròn, parabol, biểu đồ tần số/tần số tương đối,
  biểu đồ ghép nhóm, sơ đồ cây và bảng kết quả phép thử, góc nội tiếp, đường tròn ngoại tiếp/nội tiếp, tứ giác nội tiếp, đa giác đều
  và phép quay, hình trụ – nón – cầu và hình khai triển) từ `js/svg-toan.js` – tổng cộng 97 hình (107 ảnh SVG) trong 55 bài.
  Mọi câu hỏi có đáp án số (256 câu) đều có trường `calc`.
* **Ngữ văn 8: soạn đầy đủ cả 41 mục** (Bài 1 – Bài 10 với Đọc, Thực hành tiếng Việt, Viết, Nói và nghe; Bài 10 gồm
  “Thách thức đầu tiên: Đọc như một hành trình”, “Thách thức thứ hai: Kết nối cộng đồng người đọc” và “Về đích: Ngày hội với sách”;
  2 bài ôn tập học kì) theo thứ tự SGK Kết nối tri thức: truyện lịch sử, thơ Đường luật, văn bản nghị luận, thơ trào phúng,
  hài kịch và truyện cười, truyện ngắn, thơ tự do, văn bản nghị luận văn học, văn bản thông tin và nghị luận về môi trường.
  Tiếng Việt: biệt ngữ xã hội, từ địa phương, từ tượng hình – tượng thanh, đảo ngữ, các kiểu đoạn văn, yếu tố Hán Việt, sắc thái nghĩa,
  câu hỏi tu từ, nghĩa tường minh – hàm ẩn, trợ từ – thán từ, thành phần biệt lập, kiểu câu theo mục đích nói, câu khẳng định – phủ định.
  Kèm 47 sơ đồ SVG (quy trình, sơ đồ tư duy, đường cốt truyện) trong cả 41 bài, dùng lại `THCS.svg`. Trắc nghiệm 328 câu
  (166 nhiều lựa chọn, 82 đúng/sai, 80 trả lời ngắn – bài nào cũng có đủ ba dạng). **Bản quyền:** văn bản đọc chỉ dùng văn học dân gian
  (ca dao, truyện cười dân gian), thơ cổ thuộc phạm vi công cộng (Nguyễn Khuyến, Hồ Xuân Hương, Bà Huyện Thanh Quan, “Nam quốc sơn hà”),
  tác phẩm thuộc phạm vi công cộng được kể lại/tóm lược bằng lời của nhóm biên soạn (Hoàng Lê nhất thống chí, Molière, Hector Malot,
  O. Henry, Daniel Defoe) hoặc văn bản do nhóm biên soạn tự viết (truyện ngắn, thơ tự do, thơ lục bát trào phúng, bài nghị luận,
  văn bản thông tin); mỗi văn bản đều ghi rõ nguồn trong trường `source`. Không sao chép văn bản hiện đại có bản quyền trong SGK.
* **Ngữ văn 9: soạn đầy đủ cả 41 mục** (Bài 1 – Bài 10 với Đọc, Thực hành tiếng Việt, Viết, Nói và nghe; Bài 10 “Văn học – lịch sử
  tâm hồn” gồm “Thách thức đầu tiên: Đọc để trưởng thành”, “Thách thức thứ hai: Quảng bá giá trị của sách” (quảng cáo sách dạng văn bản
  đa phương thức) và “Về đích: Ngày hội với sách” (phỏng vấn về sách và văn hoá đọc); 2 bài ôn tập học kì) theo thứ tự SGK Kết nối tri thức:
  truyện truyền kì, thơ song thất lục bát, truyện thơ Nôm, văn bản nghị luận văn học, bi kịch, truyện trinh thám, thơ sáu chữ – bảy chữ –
  tám chữ, văn bản nghị luận xã hội, văn bản thông tin (danh lam thắng cảnh, di tích lịch sử).
  Tiếng Việt: điển tích – điển cố, yếu tố Hán Việt, chơi chữ, điệp thanh – điệp vần, chữ Nôm – chữ Quốc ngữ, cách dẫn trực tiếp – gián tiếp,
  trích dẫn tài liệu tham khảo, câu rút gọn – câu đặc biệt, câu đơn – câu ghép và phương tiện nối, nghĩa của từ – phát triển từ vựng,
  so sánh – nhân hoá, tên viết tắt của tổ chức quốc tế, biến đổi và mở rộng cấu trúc câu.
  Kèm 75 sơ đồ SVG (quy trình, sơ đồ tư duy, đường cốt truyện) trong cả 41 bài, dùng lại `THCS.svg`. Trắc nghiệm 328 câu
  (167 nhiều lựa chọn, 82 đúng/sai, 79 trả lời ngắn – bài nào cũng có đủ ba dạng); bài kiểm tra đầu vào 15 câu gắn với 15 bài học.
  **Bản quyền:** văn bản đọc chỉ dùng văn học dân gian (ca dao, tục ngữ, câu đối), nguyên văn tiếng Việt/Hán – Nôm thuộc phạm vi công cộng
  (“Truyện Kiều”, “Độc Tiểu Thanh kí” – Nguyễn Du; “Lục Vân Tiên” – Nguyễn Đình Chiểu; “Chinh phụ ngâm” bản diễn Nôm; thơ Nguyễn Trãi,
  Nguyễn Khuyến, Hồ Xuân Hương; phiên âm thơ Lý Bạch kèm dịch nghĩa của nhóm biên soạn; khổ đầu “Đây thôn Vĩ Dạ” – Hàn Mặc Tử, mất 1940),
  tác phẩm thuộc phạm vi công cộng được kể lại/tóm lược bằng lời của nhóm biên soạn (Nguyễn Dữ, Bồ Tùng Linh, Shakespeare, Corneille,
  Conan Doyle, Edmondo De Amicis – lời thoại kịch do nhóm biên soạn viết lại, không trích bản dịch) hoặc văn bản do nhóm biên soạn tự viết
  (bài nghị luận, thơ sáu chữ – tám chữ – song thất lục bát, truyện có yếu tố trinh thám, văn bản thông tin, kịch bản nói và nghe);
  mỗi văn bản đều ghi rõ nguồn trong trường `source`. Không sao chép văn bản hiện đại có bản quyền trong SGK.
* **KHTN 9: soạn đầy đủ cả 51 bài** (Mở đầu và 14 chương, Bài 1 – Bài 51 theo SGK Kết nối tri thức; SGK không có bài ôn tập riêng):
  năng lượng cơ học, ánh sáng (khúc xạ, phản xạ toàn phần, lăng kính, thấu kính, kính lúp), điện, điện từ, năng lượng với cuộc sống,
  kim loại, hợp chất hữu cơ – hydrocarbon – nhiên liệu, ethylic alcohol – acetic acid, lipid – carbohydrate – protein – polymer,
  khai thác tài nguyên từ vỏ Trái Đất, di truyền học Mendel và cơ sở phân tử của di truyền, di truyền nhiễm sắc thể,
  di truyền học với con người, tiến hoá. Kèm 114 hình SVG: sơ đồ năng lượng, khúc xạ, dựng ảnh qua thấu kính, mạch điện, cảm ứng điện từ –
  máy phát điện, dãy hoạt động hoá học, công thức cấu tạo, chưng cất dầu mỏ, lò cao, chu trình carbon, bảng Punnett, DNA – mRNA,
  bộ NST người, nguyên phân – giảm phân, đột biến NST, phả hệ, cây phát sinh chủng loại, các đại địa chất, … từ `js/svg-khtn.js`.
  Trắc nghiệm 408 câu (172 nhiều lựa chọn, 104 đúng/sai, 132 trả lời ngắn – bài nào cũng có đủ ba dạng, câu đầu là đúng/sai).
  Số liệu minh hoạ và số liệu tham khảo đều được ghi rõ. Mọi câu hỏi có đáp án số (132 câu) đều có trường `calc`; KHTN 9 nằm trong `STRICT_CALC`.
  Bài kiểm tra đầu vào 15 câu trải đều Mở đầu và 14 chương.
* **Tin học 6: soạn đầy đủ cả 17 bài** (6 chủ đề), mỗi bài 3–4 mục tiêu, 4–5 bước, 3 ví dụ, 3 bài tập (2 gợi ý + lời giải), 8 câu kiểm tra
  đủ ba dạng; 34 hình SVG từ `js/svg-tin.js` và `js/svg.js` (thành phần máy tính, dãy bit, bậc đơn vị dung lượng, mạng có dây/không dây,
  Internet, siêu liên kết, trình duyệt, đường đi và cấu tạo địa chỉ thư điện tử, máy tìm kiếm, cây thư mục, trang văn bản đã định dạng,
  bảng, hộp thoại Tìm và thay thế, sơ đồ tư duy, sơ đồ khối tuần tự/rẽ nhánh/lặp, khối lệnh kiểu Scratch, hình do nhân vật vẽ).
  Tên phần mềm, khối lệnh chỉ mang tính minh hoạ; số liệu minh hoạ được ghi rõ. Mọi câu có đáp án số (36 câu) đều có `calc`;
  Tin học 6 nằm trong `STRICT_CALC`. Bài kiểm tra đầu vào 15 câu trải đủ 6 chủ đề.
* **Tin học 7: soạn đầy đủ cả 16 bài** (5 chủ đề), cùng chuẩn với Tin học 6; 38 hình SVG (thiết bị vào – ra, cây thư mục, bảng phần mở rộng tệp,
  sơ đồ kênh trao đổi thông tin, sơ đồ khối kiểm tra tin, trang tính có hộp tên – thanh công thức – vùng chọn, biểu đồ cột, trang chiếu
  tiêu đề/nội dung/hình ảnh, mô phỏng từng bước tìm kiếm tuần tự, tìm kiếm nhị phân, sắp xếp nổi bọt và sắp xếp chọn, sơ đồ khối lặp).
  Hàm mới trong `js/svg-tin.js`: `sheet`, `slide`, `arraySteps`. Trắc nghiệm 128 câu (55 nhiều lựa chọn, 32 đúng/sai, 41 trả lời ngắn);
  mọi câu có đáp án số (41 câu) đều có `calc`; Tin học 7 nằm trong `STRICT_CALC`. Bài kiểm tra đầu vào 15 câu trải đủ 5 chủ đề.
* **Tin học 8: soạn đầy đủ cả 20 bài**, gồm cả hai nhánh lựa chọn (8a–11a: soạn thảo và trình chiếu nâng cao; 8b–11b: chỉnh sửa ảnh);
  44 hình SVG (trục thời gian công cụ tính toán, thế hệ máy tính, đặc điểm thông tin số, kết quả tìm kiếm, địa chỉ tuyệt đối/hỗn hợp,
  sắp xếp và lọc, biểu đồ cột/đoạn thẳng/hình tròn, danh sách liệt kê, đầu trang – chân trang, trang chiếu, lớp ảnh, vùng cắt ảnh,
  chương trình Scratch có biến, rẽ nhánh, lặp, bảng kiểm thử – gỡ lỗi, sơ đồ nghề tin học). Hàm mới trong `js/svg-tin.js`: `timeline`,
  `layers`, `cropBox`, `pageHF` (và `docPage` nhận danh sách dòng). Trắc nghiệm 160 câu (71 nhiều lựa chọn, 40 đúng/sai, 49 trả lời ngắn);
  mọi câu có đáp án số (49 câu) đều có `calc`; Tin học 8 nằm trong `STRICT_CALC`. Kiểm tra đầu vào 15 câu trải đủ các chủ đề và cả hai nhánh.
* **Tin học 9: soạn đầy đủ cả 22 bài**, gồm cả hai nhánh lựa chọn (9a–13a: bảng tính nâng cao – xác thực dữ liệu, COUNTIF, SUMIF, IF,
  bảng tính tài chính gia đình; 9b–13b: tạo và chỉnh sửa video); 50 hình SVG (mô hình xử lí thông tin, tiêu chí chất lượng thông tin,
  bảng chấm điểm nguồn, văn bản pháp luật, mô phỏng con lắc, chọn hình thức trình bày, phân quyền chia sẻ, trang tính có công thức
  COUNTIF/SUMIF/IF, biểu đồ, dòng thời gian dựng video, kịch bản phân cảnh, sơ đồ khối, sơ đồ phân cấp, khối lệnh Scratch tự định nghĩa,
  bảng kiểm thử, nhóm nghề tin học). Hàm mới trong `js/svg-tin.js`: `videoTrack`. Trắc nghiệm 176 câu (72 nhiều lựa chọn, 44 đúng/sai, 60 trả lời ngắn); mọi câu có đáp án số (60 câu)
  đều có `calc`; Tin học 9 nằm trong `STRICT_CALC`. Kiểm tra đầu vào 15 câu trải đủ các chủ đề và cả hai nhánh.
* **GDCD 6: soạn đầy đủ cả 12 bài** (giáo dục đạo đức, kĩ năng sống, kinh tế, pháp luật); 25 hình SVG (thẻ tình huống, bảng
  “Nên / Không nên”, sơ đồ quyết định ứng xử, bảng số điện thoại khẩn cấp 113/114/115/111, bảng quyền và nghĩa vụ theo Hiến pháp năm 2013,
  các trường hợp có quốc tịch Việt Nam, bốn nhóm quyền trẻ em theo Luật Trẻ em năm 2016, biểu đồ chi tiêu minh hoạ). Hàm mới trong
  `js/svg-tin.js`: `card`, `compare`. Trắc nghiệm 96 câu (46 nhiều lựa chọn, 24 đúng/sai, 26 trả lời ngắn); câu có đáp án số (26 câu) đều có `calc`; GDCD 6 nằm trong `STRICT_CALC`.
  Tình huống đều tự viết; ca dao, tục ngữ dân gian được trích ngắn. Kiểm tra đầu vào 15 câu trải đủ 12 bài.
* Các môn Toán, Ngữ văn, KHTN (12 môn – lớp) đã hoàn chỉnh: **613 bài học**. Cùng Tin học 6–9 (đã hoàn chỉnh) và GDCD 6, trang hiện có **700 bài học** đã soạn
  và **17 bài kiểm tra đầu vào** (15 câu mỗi bài, mỗi câu gắn với một bài học cụ thể).
* **Đang biên soạn:** GDCD 7–9; LS&ĐL 6–9 (200 bài) – đã có khung chương trình đầy đủ để học sinh xem trước,
  các bài hiện thông báo “Bài học đang được biên soạn”.

## 9. Căn cứ

* Chương trình giáo dục phổ thông 2018 – Thông tư 32/2018/TT-BGDĐT ngày 26/12/2018 của Bộ Giáo dục và Đào tạo
  (được sửa đổi, bổ sung bởi Thông tư 13/2022/TT-BGDĐT).
* Thứ tự chương, bài theo bộ sách “Kết nối tri thức với cuộc sống” (Nhà xuất bản Giáo dục Việt Nam).
  Tên chương, tên bài chỉ được dùng để định vị kiến thức; nội dung bài học là nội dung biên soạn độc lập.
