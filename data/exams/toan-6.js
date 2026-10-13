/* Toán 6 – Ôn tập và đề kiểm tra định kì theo cấu trúc CV 7991/BGDĐT-GDTrH. Nội dung do nhóm biên soạn tự viết. */
THCS.registerExams("toan-6", {
 "split": "Nội dung được chia theo thứ tự bài học SGK Toán 6 “Kết nối tri thức với cuộc sống” và tiến độ năm học thường dùng (35 tuần: học kì I 18 tuần, học kì II 17 tuần). <b>Giữa kì 1</b> (khoảng tuần 8–9): Chương I – II. <b>Cuối kì 1</b> (khoảng tuần 16–17): Chương I – V, trọng tâm Chương III – V. <b>Giữa kì 2</b> (khoảng tuần 25–26): Chương VI – VII. <b>Cuối kì 2</b> (khoảng tuần 32–33): Chương VI – IX, trọng tâm Chương VIII – IX. Nhiều trường dạy song song mạch Số và mạch Hình học nên phạm vi thật có thể khác một chút – em nên hỏi thầy cô phạm vi chính thức của trường mình.",
 "checkpoints": [
  {
   "id": "giua-ki-1",
   "name": "Giữa học kì 1",
   "scope": "Chương I – II (Bài 1 – Bài 12): tập hợp số tự nhiên, phép tính, luỹ thừa, chia hết, số nguyên tố, ƯCLN, BCNN.",
   "review": {
    "sections": [
     {
      "chapter": "c1",
      "title": "Chương I. Tập hợp các số tự nhiên",
      "points": [
       "Tập hợp: viết bằng chữ in hoa; phần tử đặt trong { } và cách nhau bởi dấu “;”. Kí hiệu ∈ (thuộc), ∉ (không thuộc).",
       "Hai cách mô tả tập hợp: <b>liệt kê</b> các phần tử, hoặc <b>chỉ ra tính chất đặc trưng</b>. ℕ = {0; 1; 2; …}, ℕ* bỏ số 0.",
       "Hệ thập phân: giá trị mỗi chữ số phụ thuộc vị trí (hàng đơn vị, chục, trăm…). Số La Mã: I = 1, V = 5, X = 10; IV = 4, IX = 9.",
       "Phép cộng, nhân có tính chất giao hoán, kết hợp, phân phối: a(b + c) = ab + ac. Phép chia có dư: a = b · q + r với 0 ≤ r < b.",
       "Luỹ thừa: a<sup>n</sup> = a · a · … · a (n thừa số). a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>; a<sup>m</sup> : a<sup>n</sup> = a<sup>m−n</sup> (a ≠ 0, m ≥ n).",
       "Thứ tự thực hiện: ngoặc ( ) → [ ] → { }; trong ngoặc: luỹ thừa → nhân, chia → cộng, trừ (từ trái sang phải)."
      ],
      "example": "2 · 3<sup>2</sup> + 18 : 6 = 2 · 9 + 3 = 18 + 3 = 21."
     },
     {
      "chapter": "c2",
      "title": "Chương II. Tính chia hết trong tập hợp các số tự nhiên",
      "points": [
       "a chia hết cho b (b ≠ 0) nếu a = b · k. Khi đó a là bội của b, b là ước của a.",
       "Nếu mọi số hạng của tổng chia hết cho m thì tổng chia hết cho m; nếu chỉ có một số hạng không chia hết cho m thì tổng không chia hết cho m.",
       "Dấu hiệu chia hết: cho 2 – chữ số tận cùng chẵn; cho 5 – tận cùng 0 hoặc 5; cho 3 (cho 9) – tổng các chữ số chia hết cho 3 (cho 9).",
       "Số nguyên tố: số tự nhiên lớn hơn 1 chỉ có hai ước là 1 và chính nó. Số 0 và 1 không là số nguyên tố, cũng không là hợp số.",
       "Phân tích ra thừa số nguyên tố, ví dụ 60 = 2<sup>2</sup> · 3 · 5.",
       "ƯCLN: lấy các thừa số nguyên tố <b>chung</b> với số mũ <b>nhỏ nhất</b>. BCNN: lấy các thừa số <b>chung và riêng</b> với số mũ <b>lớn nhất</b>."
      ],
      "example": "24 = 2<sup>3</sup> · 3; 36 = 2<sup>2</sup> · 3<sup>2</sup> ⇒ ƯCLN = 2<sup>2</sup> · 3 = 12; BCNN = 2<sup>3</sup> · 3<sup>2</sup> = 72."
     }
    ],
    "mistakes": [
     "Tính 2<sup>5</sup> thành 2 · 5 = 10 (đúng là 32).",
     "Làm phép tính từ trái sang phải mà bỏ qua thứ tự: 20 − 12 : 4 phải chia trước.",
     "Coi 1 là số nguyên tố.",
     "Nhầm ƯCLN với BCNN trong bài toán thực tế: “chia đều nhiều nhất” → ƯCLN; “cùng lặp lại sớm nhất” → BCNN."
    ],
    "forms": [
     "Viết tập hợp bằng hai cách; điền kí hiệu ∈, ∉.",
     "Tính giá trị biểu thức; tính nhanh, tính hợp lí.",
     "Tìm x trong đẳng thức có luỹ thừa.",
     "Tìm chữ số chưa biết để một số chia hết cho 2, 3, 5, 9.",
     "Bài toán thực tế dùng ƯCLN (chia đều) và BCNN (lịch lặp lại)."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Không dùng máy tính cầm tay.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c1",
      "content": "Tập hợp; cách ghi số tự nhiên; thứ tự trong tập hợp số tự nhiên",
      "yccd": {
       "B": "Nhận biết phần tử thuộc/không thuộc tập hợp; đọc, viết số La Mã; giá trị của chữ số theo vị trí.",
       "H": "Mô tả tập hợp bằng hai cách; liệt kê đúng các phần tử theo điều kiện.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c1",
      "content": "Các phép tính với số tự nhiên; luỹ thừa; thứ tự thực hiện phép tính",
      "yccd": {
       "B": "Nhận biết luỹ thừa, nhân hai luỹ thừa cùng cơ số.",
       "H": "Thực hiện đúng thứ tự phép tính; tìm số chưa biết.",
       "V": "Giải bài toán thực tế bằng các phép tính với số tự nhiên."
      },
      "nl": "TD, GQVĐ, MHH"
     },
     {
      "id": "t3",
      "chapter": "c2",
      "content": "Quan hệ chia hết; dấu hiệu chia hết; số nguyên tố",
      "yccd": {
       "B": "Nhận biết dấu hiệu chia hết cho 2, 3, 5, 9; nhận biết số nguyên tố.",
       "H": "Vận dụng tính chất chia hết của một tổng; tìm chữ số chưa biết.",
       "V": "Lập luận chứng tỏ một biểu thức chia hết."
      },
      "nl": "TD, GT"
     },
     {
      "id": "t4",
      "chapter": "c2",
      "content": "Ước chung, ƯCLN; bội chung, BCNN",
      "yccd": {
       "B": "Nhận biết ước, bội của một số.",
       "H": "Tìm ƯCLN, BCNN bằng phân tích ra thừa số nguyên tố.",
       "V": "Giải bài toán thực tế dùng ƯCLN, BCNN."
      },
      "nl": "GQVĐ, MHH"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Cho tập hợp A = {2; 4; 6; 8}. Khẳng định nào sau đây đúng?",
      "options": [
       "5 ∈ A",
       "4 ∈ A",
       "8 ∉ A",
       "2 ∉ A"
      ],
      "answer": 1,
      "explain": "4 là một phần tử của A nên 4 ∈ A; 5 không có trong A; 8 và 2 đều thuộc A."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Số La Mã XIV biểu diễn số tự nhiên nào?",
      "options": [
       "16",
       "4",
       "114",
       "14"
      ],
      "answer": 3,
      "explain": "X = 10, IV = 4, nên XIV = 10 + 4 = 14.",
      "calc": "10+4"
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Trong số 25 307, chữ số 3 có giá trị bằng bao nhiêu?",
      "options": [
       "300",
       "3",
       "30",
       "3 000"
      ],
      "answer": 0,
      "explain": "Chữ số 3 ở hàng trăm nên có giá trị 3 · 100 = 300.",
      "calc": "3*100"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Giá trị của 2<sup>5</sup> là:",
      "options": [
       "32",
       "10",
       "25",
       "7"
      ],
      "answer": 0,
      "explain": "2<sup>5</sup> = 2 · 2 · 2 · 2 · 2 = 32 (không phải 2 · 5).",
      "calc": "Math.pow(2,5)"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Viết gọn tích 3<sup>4</sup> · 3<sup>2</sup> dưới dạng một luỹ thừa:",
      "options": [
       "3<sup>8</sup>",
       "9<sup>6</sup>",
       "3<sup>2</sup>",
       "3<sup>6</sup>"
      ],
      "answer": 3,
      "explain": "Nhân hai luỹ thừa cùng cơ số: giữ nguyên cơ số, cộng các số mũ: 4 + 2 = 6."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Số nào sau đây chia hết cho 9?",
      "options": [
       "1 234",
       "5 017",
       "2 025",
       "4 210"
      ],
      "answer": 2,
      "explain": "Tổng các chữ số của 2 025 là 2 + 0 + 2 + 5 = 9, chia hết cho 9. Các số còn lại có tổng chữ số 10; 13; 7.",
      "pick": "function(v){return v%9===0}"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Số nào sau đây là số nguyên tố?",
      "options": [
       "13",
       "1",
       "9",
       "21"
      ],
      "answer": 0,
      "explain": "13 chỉ có hai ước là 1 và 13. Số 1 không là số nguyên tố; 9 = 3 · 3; 21 = 3 · 7.",
      "pick": "function(v){if(v<2)return false;for(var d=2;d*d<=v;d++)if(v%d===0)return false;return true}"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Tập hợp tất cả các ước của 8 là:",
      "options": [
       "{1; 2; 4; 8}",
       "{2; 4}",
       "{1; 2; 4}",
       "{0; 8; 16}"
      ],
      "answer": 0,
      "explain": "8 chia hết cho 1, 2, 4, 8. Đáp án D là một số bội của 8."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Giá trị của biểu thức 20 − 12 : 4 · 2 là:",
      "options": [
       "4",
       "18",
       "14",
       "16"
      ],
      "answer": 2,
      "explain": "Nhân, chia trước theo thứ tự từ trái sang phải: 12 : 4 = 3, 3 · 2 = 6; sau đó 20 − 6 = 14.",
      "calc": "20-12/4*2"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tổng 15 + 30 + 42 chia hết cho số nào sau đây?",
      "options": [
       "5",
       "3",
       "9",
       "15"
      ],
      "answer": 1,
      "explain": "Cả ba số hạng đều chia hết cho 3 nên tổng chia hết cho 3. 42 không chia hết cho 5 nên tổng không chia hết cho 5 (tổng bằng 87).",
      "pick": "function(v){return (15+30+42)%v===0}"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "ƯCLN(18, 30) bằng:",
      "options": [
       "3",
       "6",
       "90",
       "2"
      ],
      "answer": 1,
      "explain": "18 = 2 · 3<sup>2</sup>; 30 = 2 · 3 · 5. Thừa số chung với số mũ nhỏ nhất: 2 · 3 = 6.",
      "calc": "gcd(18,30)"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "BCNN(4, 6) bằng:",
      "options": [
       "24",
       "2",
       "12",
       "10"
      ],
      "answer": 2,
      "explain": "4 = 2<sup>2</sup>; 6 = 2 · 3. BCNN = 2<sup>2</sup> · 3 = 12.",
      "calc": "lcm(4,6)"
     }
    ],
    "tf": [
     {
      "topic": "t1",
      "q": "Cho M là tập hợp các số tự nhiên lớn hơn 3 và không vượt quá 8.",
      "items": [
       {
        "s": "M = {4; 5; 6; 7; 8}.",
        "answer": true,
        "level": "B",
        "explain": "“Không vượt quá 8” nghĩa là nhỏ hơn hoặc bằng 8.",
        "check": "[4,5,6,7,8].join()===[0,1,2,3,4,5,6,7,8,9].filter(function(x){return x>3&&x<=8}).join()"
       },
       {
        "s": "3 ∈ M.",
        "answer": false,
        "level": "B",
        "explain": "3 không lớn hơn 3."
       },
       {
        "s": "M = {x ∈ ℕ | 3 < x < 8}.",
        "answer": false,
        "level": "H",
        "explain": "Viết như vậy thì thiếu phần tử 8; đúng phải là 3 < x ≤ 8.",
        "check": "[4,5,6,7,8].join()===[0,1,2,3,4,5,6,7,8,9].filter(function(x){return x>3&&x<8}).join()"
       },
       {
        "s": "Tổng các phần tử của M bằng 30.",
        "answer": true,
        "level": "H",
        "explain": "4 + 5 + 6 + 7 + 8 = 30.",
        "check": "4+5+6+7+8===30"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Cô giáo có 36 quyển vở và 48 chiếc bút, muốn chia đều vào các phần thưởng (mỗi phần có số vở như nhau, số bút như nhau).",
      "items": [
       {
        "s": "36 = 2<sup>2</sup> · 3<sup>2</sup>.",
        "answer": true,
        "level": "B",
        "explain": "2<sup>2</sup> · 3<sup>2</sup> = 4 · 9 = 36.",
        "check": "4*9===36"
       },
       {
        "s": "48 chia hết cho 9.",
        "answer": false,
        "level": "B",
        "explain": "Tổng chữ số 4 + 8 = 12 không chia hết cho 9.",
        "check": "48%9===0"
       },
       {
        "s": "ƯCLN(36, 48) = 12.",
        "answer": true,
        "level": "H",
        "explain": "36 = 2<sup>2</sup> · 3<sup>2</sup>, 48 = 2<sup>4</sup> · 3 ⇒ ƯCLN = 2<sup>2</sup> · 3 = 12.",
        "check": "gcd(36,48)===12"
       },
       {
        "s": "Cô chia được nhiều nhất 6 phần thưởng.",
        "answer": false,
        "level": "V",
        "explain": "Số phần thưởng nhiều nhất là ƯCLN(36, 48) = 12 (mỗi phần 3 vở, 4 bút).",
        "check": "gcd(36,48)===6"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Tính: 5<sup>2</sup> + 2<sup>3</sup>.",
      "answer": "33",
      "explain": "25 + 8 = 33.",
      "calc": "25+8"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tìm chữ số x để số <span class=\"math\">3x5</span> (gồm ba chữ số 3, x, 5) chia hết cho 9.",
      "answer": "1",
      "explain": "Tổng các chữ số 3 + x + 5 = 8 + x phải chia hết cho 9; x là chữ số nên x = 1.",
      "calc": "[0,1,2,3,4,5,6,7,8,9].filter(function(x){return (8+x)%9===0})[0]"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Một rạp chiếu phim có 18 hàng ghế, mỗi hàng 24 ghế. Buổi chiều đã bán 350 vé (mỗi vé một ghế). Hỏi còn bao nhiêu ghế trống?",
      "answer": "82",
      "explain": "Số ghế: 18 · 24 = 432; số ghế trống: 432 − 350 = 82.",
      "calc": "18*24-350",
      "unit": "ghế"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Lúc 6 giờ sáng, xe buýt tuyến A và tuyến B cùng xuất bến. Tuyến A cứ 15 phút có một chuyến, tuyến B cứ 20 phút có một chuyến. Sau ít nhất bao nhiêu phút hai tuyến lại cùng xuất bến?",
      "answer": "60",
      "explain": "Thời gian cần tìm là BCNN(15, 20) = 60 (phút), tức là lúc 7 giờ.",
      "calc": "lcm(15,20)",
      "unit": "phút"
     }
    ],
    "essay": [
     {
      "topic": "t2",
      "q": "Thực hiện các yêu cầu sau.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Tính một cách hợp lí: 25 · 17 · 4.",
        "answer": "25 · 17 · 4 = (25 · 4) · 17 = 100 · 17 = 1 700.",
        "rubric": [
         [
          "Nhóm 25 · 4 = 100 (tính chất giao hoán, kết hợp)",
          0.25
         ],
         [
          "Kết quả 1 700",
          0.25
         ]
        ],
        "calc": "25*17*4"
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Tìm số tự nhiên x, biết: 3x − 12 = 2<sup>4</sup> · 3.",
        "answer": "2<sup>4</sup> · 3 = 48 nên 3x − 12 = 48; 3x = 60; x = 20.",
        "rubric": [
         [
          "Tính 2<sup>4</sup> · 3 = 48",
          0.25
         ],
         [
          "Suy ra 3x = 60",
          0.25
         ],
         [
          "x = 20",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Lớp 6A có 24 bạn nam và 30 bạn nữ. Cô giáo muốn chia lớp thành các tổ sao cho số nam ở các tổ bằng nhau và số nữ ở các tổ bằng nhau.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Có thể chia lớp thành nhiều nhất bao nhiêu tổ? Khi đó mỗi tổ có bao nhiêu bạn nam, bao nhiêu bạn nữ?",
        "answer": "Số tổ là ước chung của 24 và 30; nhiều nhất là ƯCLN(24, 30). 24 = 2<sup>3</sup> · 3; 30 = 2 · 3 · 5 ⇒ ƯCLN = 2 · 3 = 6. Chia được nhiều nhất 6 tổ; mỗi tổ có 24 : 6 = 4 bạn nam và 30 : 6 = 5 bạn nữ.",
        "rubric": [
         [
          "Lập luận số tổ là ƯCLN(24, 30)",
          0.25
         ],
         [
          "Phân tích ra thừa số nguyên tố đúng",
          0.25
         ],
         [
          "ƯCLN = 6, kết luận 6 tổ",
          0.25
         ],
         [
          "Mỗi tổ 4 nam",
          0.25
         ],
         [
          "Mỗi tổ 5 nữ",
          0.25
         ]
        ],
        "calc": "gcd(24,30)"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Bài toán lập luận.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Chứng tỏ rằng tích của hai số tự nhiên liên tiếp luôn chia hết cho 2.",
        "answer": "Gọi hai số là n và n + 1. Nếu n chẵn thì n chia hết cho 2. Nếu n lẻ thì n + 1 chẵn, chia hết cho 2. Trong cả hai trường hợp, tích n(n + 1) có một thừa số chia hết cho 2 nên chia hết cho 2.",
        "rubric": [
         [
          "Xét hai trường hợp n chẵn / n lẻ",
          0.25
         ],
         [
          "Kết luận tích chia hết cho 2",
          0.25
         ]
        ]
       }
      ]
     }
    ]
   }
  },
  {
   "id": "cuoi-ki-1",
   "name": "Cuối học kì 1",
   "scope": "Chương I – V (Bài 1 – Bài 22), trọng tâm Chương III (số nguyên), IV (hình phẳng), V (tính đối xứng).",
   "review": {
    "sections": [
     {
      "chapter": "c1",
      "title": "Ôn nhanh Chương I – II",
      "points": [
       "Thứ tự thực hiện phép tính; luỹ thừa a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>.",
       "Dấu hiệu chia hết cho 2, 3, 5, 9; số nguyên tố; ƯCLN (chung, mũ nhỏ nhất), BCNN (chung và riêng, mũ lớn nhất)."
      ]
     },
     {
      "chapter": "c3",
      "title": "Chương III. Số nguyên",
      "points": [
       "ℤ = {…; −2; −1; 0; 1; 2; …}. Số âm dùng cho nhiệt độ dưới 0 °C, độ sâu dưới mực nước biển, số tiền nợ…",
       "Trên trục số nằm ngang, số bên trái nhỏ hơn số bên phải. Mọi số âm nhỏ hơn 0 và nhỏ hơn mọi số dương.",
       "Số đối của a là −a; a + (−a) = 0.",
       "Cộng hai số cùng dấu: cộng phần số, giữ dấu chung. Khác dấu: lấy phần số lớn trừ phần số nhỏ, lấy dấu của số có phần số lớn hơn.",
       "Trừ: a − b = a + (−b). Quy tắc dấu ngoặc: trước ngoặc có dấu “−” thì đổi dấu mọi số hạng trong ngoặc khi bỏ ngoặc.",
       "Nhân: cùng dấu → dương; khác dấu → âm. Tích có chẵn thừa số âm thì dương, lẻ thừa số âm thì âm."
      ],
      "example": "(−7) − (−10) = −7 + 10 = 3; (−3) · 5 = −15."
     },
     {
      "chapter": "c4",
      "title": "Chương IV. Một số hình phẳng trong thực tiễn",
      "points": [
       "Tam giác đều: 3 cạnh bằng nhau, 3 góc bằng nhau (60°). Hình vuông: 4 cạnh bằng nhau, 4 góc vuông, 2 đường chéo bằng nhau. Lục giác đều: 6 cạnh bằng nhau, 6 góc bằng nhau.",
       "Hình chữ nhật: cạnh đối bằng nhau, 4 góc vuông, đường chéo bằng nhau. Hình thoi: 4 cạnh bằng nhau, đường chéo vuông góc. Hình bình hành: cạnh đối song song và bằng nhau. Hình thang cân: hai cạnh bên bằng nhau, hai đường chéo bằng nhau.",
       "Chu vi: hình vuông 4a; hình chữ nhật 2(a + b). Diện tích: hình vuông a<sup>2</sup>; hình chữ nhật a · b; hình thoi {{1|2}} · d<sub>1</sub> · d<sub>2</sub>; hình bình hành a · h; hình thang {{1|2}} · (a + b) · h."
      ],
      "example": "Hình thang có hai đáy 6 cm và 10 cm, chiều cao 4 cm: S = {{1|2}} · (6 + 10) · 4 = 32 (cm²)."
     },
     {
      "chapter": "c5",
      "title": "Chương V. Tính đối xứng của hình phẳng trong tự nhiên",
      "points": [
       "Hình có trục đối xứng: gấp theo một đường thẳng thì hai nửa trùng khít. Hình vuông có 4 trục, hình chữ nhật 2 trục, tam giác đều 3 trục, lục giác đều 6 trục, đường tròn vô số trục.",
       "Hình có tâm đối xứng: quay nửa vòng (180°) quanh một điểm thì hình trùng với chính nó. Hình bình hành, hình chữ nhật, hình thoi, hình vuông, lục giác đều, đường tròn đều có tâm đối xứng; tam giác đều không có."
      ]
     }
    ],
    "mistakes": [
     "Cộng hai số âm nhưng quên dấu: (−25) + (−15) = −40, không phải 40.",
     "Bỏ ngoặc có dấu “−” đằng trước mà không đổi dấu.",
     "Nhầm chu vi với diện tích, nhầm đơn vị cm và cm².",
     "Cho rằng hình thang cân có tâm đối xứng."
    ],
    "forms": [
     "So sánh, sắp xếp số nguyên; tìm số đối.",
     "Tính giá trị biểu thức với số nguyên, tính hợp lí, tổng có quy luật.",
     "Tìm x là số nguyên.",
     "Tính chu vi, diện tích hình; bài toán thực tế (lát nền, trồng cỏ, rào vườn).",
     "Nhận biết hình có trục đối xứng, tâm đối xứng."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Không dùng máy tính cầm tay.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c1",
      "content": "Phép tính với số tự nhiên, luỹ thừa",
      "yccd": {
       "B": "Nhận biết giá trị luỹ thừa.",
       "H": "",
       "V": ""
      },
      "nl": "TD"
     },
     {
      "id": "t2",
      "chapter": "c2",
      "content": "Chia hết; ƯCLN, BCNN",
      "yccd": {
       "B": "Nhận biết dấu hiệu chia hết cho 2 và 5.",
       "H": "Tìm BCNN của hai số.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c3",
      "content": "Số nguyên: khái niệm, thứ tự, các phép tính",
      "yccd": {
       "B": "Nhận biết số đối, so sánh số nguyên, ý nghĩa số âm.",
       "H": "Cộng, trừ, nhân số nguyên; quy tắc dấu.",
       "V": "Giải bài toán thực tế với số nguyên; tính tổng có quy luật."
      },
      "nl": "TD, GQVĐ, MHH"
     },
     {
      "id": "t4",
      "chapter": "c4",
      "content": "Hình phẳng trong thực tiễn: tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân; chu vi, diện tích",
      "yccd": {
       "B": "Nhận biết các hình và tính chất góc, cạnh.",
       "H": "Tính chu vi, diện tích các hình đã học.",
       "V": "Giải bài toán thực tế về chu vi, diện tích."
      },
      "nl": "MHH, GQVĐ"
     },
     {
      "id": "t5",
      "chapter": "c5",
      "content": "Hình có trục đối xứng, hình có tâm đối xứng",
      "yccd": {
       "B": "Nhận biết hình có trục đối xứng.",
       "H": "Nhận biết hình có tâm đối xứng.",
       "V": ""
      },
      "nl": "TD"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Giá trị của 10<sup>3</sup> là:",
      "options": [
       "1 000",
       "30",
       "100",
       "10 000"
      ],
      "answer": 0,
      "explain": "10<sup>3</sup> = 10 · 10 · 10 = 1 000.",
      "calc": "Math.pow(10,3)"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Số nào sau đây chia hết cho cả 2 và 5?",
      "options": [
       "255",
       "1 352",
       "402",
       "1 250"
      ],
      "answer": 3,
      "explain": "Số chia hết cho cả 2 và 5 có chữ số tận cùng là 0.",
      "pick": "function(v){return v%10===0}"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Số đối của −9 là:",
      "options": [
       "−9",
       "0",
       "−1",
       "9"
      ],
      "answer": 3,
      "explain": "Hai số đối nhau có tổng bằng 0: (−9) + 9 = 0.",
      "calc": "9"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Khẳng định nào sau đây đúng?",
      "options": [
       "−5 > −3",
       "−5 < −3",
       "0 < −2",
       "−7 > 1"
      ],
      "answer": 1,
      "explain": "Trên trục số, −5 nằm bên trái −3 nên −5 < −3; mọi số âm đều nhỏ hơn 0 và nhỏ hơn số dương."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Nhiệt kế chỉ −3 °C nghĩa là:",
      "options": [
       "3 độ trên 0 °C",
       "0 °C",
       "3 độ dưới 0 °C",
       "30 độ dưới 0 °C"
      ],
      "answer": 2,
      "explain": "Dấu “−” chỉ nhiệt độ dưới 0 °C."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Hình nào có bốn cạnh bằng nhau và bốn góc vuông?",
      "options": [
       "Hình thoi",
       "Hình vuông",
       "Hình chữ nhật",
       "Hình thang cân"
      ],
      "answer": 1,
      "explain": "Hình thoi có bốn cạnh bằng nhau nhưng góc không nhất thiết vuông; hình chữ nhật có bốn góc vuông nhưng các cạnh không nhất thiết bằng nhau."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Mỗi góc của tam giác đều bằng:",
      "options": [
       "60°",
       "45°",
       "90°",
       "120°"
      ],
      "answer": 0,
      "explain": "Tam giác đều có ba góc bằng nhau, mỗi góc 60°.",
      "calc": "60"
     },
     {
      "level": "B",
      "topic": "t5",
      "q": "Chữ cái in hoa nào sau đây có trục đối xứng?",
      "options": [
       "N",
       "S",
       "Z",
       "A"
      ],
      "answer": 3,
      "explain": "Chữ A có trục đối xứng thẳng đứng. Các chữ N, S, Z có tâm đối xứng nhưng không có trục đối xứng."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Kết quả của phép tính (−15) + 8 là:",
      "options": [
       "−23",
       "7",
       "−7",
       "23"
      ],
      "answer": 2,
      "explain": "Hai số khác dấu: 15 − 8 = 7, lấy dấu của −15 (số có phần số lớn hơn) ⇒ −7.",
      "calc": "-15+8"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Giá trị của biểu thức (−6) · (−4) − 10 là:",
      "options": [
       "−34",
       "34",
       "14",
       "−14"
      ],
      "answer": 2,
      "explain": "(−6) · (−4) = 24 (hai số cùng dấu); 24 − 10 = 14.",
      "calc": "(-6)*(-4)-10"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Chu vi của hình chữ nhật có chiều dài 12 cm, chiều rộng 7 cm là:",
      "options": [
       "19 cm",
       "38 cm",
       "84 cm",
       "42 cm"
      ],
      "answer": 1,
      "explain": "C = 2 · (12 + 7) = 38 (cm). 84 cm² là diện tích, không phải chu vi.",
      "calc": "2*(12+7)"
     },
     {
      "level": "H",
      "topic": "t5",
      "q": "Hình nào sau đây có tâm đối xứng?",
      "options": [
       "Hình bình hành",
       "Tam giác đều",
       "Hình thang cân",
       "Tam giác vuông"
      ],
      "answer": 0,
      "explain": "Giao điểm hai đường chéo là tâm đối xứng của hình bình hành."
     }
    ],
    "tf": [
     {
      "topic": "t3",
      "q": "Cho các số nguyên: −8; 5; 0; −2; 7.",
      "items": [
       {
        "s": "Số nhỏ nhất trong các số đã cho là −8.",
        "answer": true,
        "level": "B",
        "explain": "−8 < −2 < 0 < 5 < 7.",
        "check": "Math.min(-8,5,0,-2,7)===-8"
       },
       {
        "s": "Trong các số đã cho có ba số nguyên âm.",
        "answer": false,
        "level": "B",
        "explain": "Chỉ có hai số nguyên âm là −8 và −2 (số 0 không âm, không dương).",
        "check": "[-8,5,0,-2,7].filter(function(x){return x<0}).length===3"
       },
       {
        "s": "Tổng của tất cả các số đã cho bằng 2.",
        "answer": true,
        "level": "H",
        "explain": "(−8) + 5 + 0 + (−2) + 7 = 2.",
        "check": "-8+5+0-2+7===2"
       },
       {
        "s": "Tích của các số khác 0 trong các số đã cho là một số dương.",
        "answer": true,
        "level": "H",
        "explain": "Có hai thừa số âm (số chẵn thừa số âm) nên tích dương: (−8) · 5 · (−2) · 7 = 560.",
        "check": "(-8)*5*(-2)*7>0"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Một mảnh vườn hình chữ nhật có chiều dài 20 m, chiều rộng 12 m.",
      "items": [
       {
        "s": "Diện tích mảnh vườn là 240 m².",
        "answer": true,
        "level": "B",
        "explain": "S = 20 · 12 = 240 (m²).",
        "check": "20*12===240"
       },
       {
        "s": "Chu vi mảnh vườn là 32 m.",
        "answer": false,
        "level": "B",
        "explain": "C = 2 · (20 + 12) = 64 (m); 32 m chỉ là nửa chu vi.",
        "check": "2*(20+12)===32"
       },
       {
        "s": "Hai đường chéo của mảnh vườn có độ dài bằng nhau.",
        "answer": true,
        "level": "H",
        "explain": "Hình chữ nhật có hai đường chéo bằng nhau."
       },
       {
        "s": "Rào xung quanh vườn, chừa một lối vào rộng 2 m, thì cần 62 m hàng rào.",
        "answer": true,
        "level": "V",
        "explain": "64 − 2 = 62 (m).",
        "check": "2*(20+12)-2===62"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "Tính: (−25) + (−15).",
      "answer": "-40",
      "explain": "Hai số cùng dấu âm: cộng phần số 25 + 15 = 40 rồi đặt dấu “−”.",
      "calc": "-25+(-15)",
      "answerText": "−40"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Tìm BCNN(12, 18).",
      "answer": "36",
      "explain": "12 = 2<sup>2</sup> · 3; 18 = 2 · 3<sup>2</sup> ⇒ BCNN = 2<sup>2</sup> · 3<sup>2</sup> = 36.",
      "calc": "lcm(12,18)"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Một tấm biển hình thoi có độ dài hai đường chéo là 6 dm và 8 dm. Tính diện tích tấm biển (đơn vị dm²).",
      "answer": "24",
      "explain": "S = {{1|2}} · 6 · 8 = 24 (dm²).",
      "calc": "6*8/2",
      "unit": "dm²"
     },
     {
      "level": "V",
      "topic": "t3",
      "q": "Một tàu ngầm đang ở độ cao −45 m so với mực nước biển. Tàu nổi lên thêm 18 m. Hỏi độ cao mới của tàu là bao nhiêu mét?",
      "answer": "-27",
      "explain": "Độ cao mới: −45 + 18 = −27 (m), tức là 27 m dưới mực nước biển.",
      "calc": "-45+18",
      "unit": "m",
      "answerText": "−27"
     }
    ],
    "essay": [
     {
      "topic": "t3",
      "q": "Thực hiện các yêu cầu sau.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Tính: (−37) + 52 + (−13).",
        "answer": "(−37) + (−13) + 52 = (−50) + 52 = 2.",
        "rubric": [
         [
          "Nhóm (−37) + (−13) = −50",
          0.25
         ],
         [
          "Kết quả 2",
          0.25
         ]
        ],
        "calc": "-37+52-13"
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Tìm số nguyên x, biết: x + 15 = −4.",
        "answer": "x = −4 − 15 = −19.",
        "rubric": [
         [
          "Chuyển vế/lập x = −4 − 15",
          0.25
         ],
         [
          "Tính đúng −4 − 15",
          0.25
         ],
         [
          "Kết luận x = −19",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Một khu đất hình chữ nhật dài 25 m, rộng 16 m. Ở giữa khu đất người ta xây một bể nước hình vuông cạnh 4 m; phần đất còn lại trồng cỏ với giá 30 000 đồng mỗi mét vuông.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Tính số tiền cần để trồng cỏ.",
        "answer": "Diện tích khu đất: 25 · 16 = 400 (m²). Diện tích bể: 4 · 4 = 16 (m²). Diện tích trồng cỏ: 400 − 16 = 384 (m²). Số tiền: 384 · 30 000 = 11 520 000 (đồng).",
        "rubric": [
         [
          "Diện tích khu đất 400 m²",
          0.25
         ],
         [
          "Diện tích bể 16 m²",
          0.25
         ],
         [
          "Diện tích trồng cỏ 384 m²",
          0.25
         ],
         [
          "Số tiền 11 520 000 đồng",
          0.5
         ]
        ],
        "calc": "(25*16-4*4)*30000"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Bài toán tính tổng có quy luật.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Tính: A = 1 + (−2) + 3 + (−4) + … + 99 + (−100).",
        "answer": "Nhóm từng cặp: [1 + (−2)] + [3 + (−4)] + … + [99 + (−100)]. Có 50 cặp, mỗi cặp bằng −1 nên A = 50 · (−1) = −50.",
        "rubric": [
         [
          "Nhóm thành 50 cặp, mỗi cặp bằng −1",
          0.25
         ],
         [
          "A = −50",
          0.25
         ]
        ],
        "calc": "(function(){var s=0;for(var i=1;i<=100;i++)s+=(i%2?i:-i);return s})()"
       }
      ]
     }
    ]
   }
  },
  {
   "id": "giua-ki-2",
   "name": "Giữa học kì 2",
   "scope": "Chương VI – VII (Bài 23 – Bài 31): phân số, số thập phân, tỉ số phần trăm.",
   "review": {
    "sections": [
     {
      "chapter": "c6",
      "title": "Chương VI. Phân số",
      "points": [
       "Phân số {{a|b}} với a, b ∈ ℤ, b ≠ 0. {{a|b}} = {{c|d}} khi a · d = b · c.",
       "Tính chất cơ bản: nhân hoặc chia cả tử và mẫu với cùng một số khác 0 (chia cho ước chung) thì được phân số bằng nó. Rút gọn đến tối giản: chia cho ƯCLN của tử và mẫu (lấy phần số).",
       "So sánh: đưa về cùng mẫu dương rồi so sánh tử. Phân số âm < 0 < phân số dương.",
       "Cộng, trừ: quy đồng mẫu rồi cộng, trừ tử, giữ mẫu. Nhân: tử nhân tử, mẫu nhân mẫu. Chia: nhân với số nghịch đảo của số chia.",
       "Giá trị phân số của một số: {{m|n}} của b là b · {{m|n}}. Tìm một số biết {{m|n}} của nó bằng a: a : {{m|n}}.",
       "Hỗn số: 2{{1|3}} = {{7|3}}."
      ],
      "example": "{{3|4}} : {{9|8}} = {{3|4}} · {{8|9}} = {{24|36}} = {{2|3}}."
     },
     {
      "chapter": "c7",
      "title": "Chương VII. Số thập phân",
      "points": [
       "Phân số thập phân có mẫu là luỹ thừa của 10; viết được dưới dạng số thập phân: {{−7|100}} = −0,07.",
       "So sánh số thập phân: số âm nhỏ hơn số dương; hai số âm, số nào có phần số lớn hơn thì nhỏ hơn.",
       "Cộng, trừ, nhân, chia số thập phân như với số nguyên, chú ý dấu và vị trí dấu phẩy.",
       "Làm tròn: nếu chữ số đầu tiên bị bỏ đi ≥ 5 thì cộng thêm 1 vào chữ số cuối giữ lại; nếu < 5 thì giữ nguyên.",
       "Tỉ số phần trăm của a và b: {{a · 100|b}}%. Tìm m% của b: b · {{m|100}}."
      ],
      "example": "Áo giá 300 000 đồng giảm 15%: được giảm 300 000 · 15% = 45 000 đồng, còn 255 000 đồng."
     }
    ],
    "mistakes": [
     "Cộng tử với tử, mẫu với mẫu: {{1|2}} + {{1|3}} ≠ {{2|5}}.",
     "Chia phân số nhưng quên đảo ngược số chia.",
     "Làm tròn 3,1416 đến hàng phần trăm thành 3,15.",
     "Viết 20% = 0,02 (đúng là 0,2)."
    ],
    "forms": [
     "Rút gọn, so sánh phân số; tìm phân số bằng nhau.",
     "Tính giá trị biểu thức phân số, tính hợp lí.",
     "Tìm x.",
     "Bài toán tìm giá trị phân số của một số, tìm một số biết giá trị phân số của nó.",
     "Phép tính và làm tròn số thập phân.",
     "Bài toán phần trăm: giảm giá, lãi suất, tỉ lệ học sinh."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Không dùng máy tính cầm tay.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c6",
      "content": "Phân số; tính chất cơ bản; so sánh phân số",
      "yccd": {
       "B": "Nhận biết phân số bằng nhau, phân số tối giản, so sánh phân số.",
       "H": "Rút gọn phân số; thực hiện phép tính đơn giản.",
       "V": "So sánh hai phân số bằng lập luận."
      },
      "nl": "TD"
     },
     {
      "id": "t2",
      "chapter": "c6",
      "content": "Các phép tính với phân số; hai bài toán về phân số",
      "yccd": {
       "B": "Nhận biết số nghịch đảo.",
       "H": "Cộng, trừ, nhân, chia phân số; tìm x.",
       "V": "Giải bài toán thực tế về phân số."
      },
      "nl": "TD, GQVĐ, MHH"
     },
     {
      "id": "t3",
      "chapter": "c7",
      "content": "Số thập phân; phép tính với số thập phân; làm tròn, ước lượng",
      "yccd": {
       "B": "Nhận biết số đối, phân số thập phân, làm tròn số thập phân.",
       "H": "Thực hiện phép tính với số thập phân.",
       "V": ""
      },
      "nl": "TD"
     },
     {
      "id": "t4",
      "chapter": "c7",
      "content": "Tỉ số và tỉ số phần trăm",
      "yccd": {
       "B": "Tính tỉ số phần trăm của hai số.",
       "H": "Tính giá trị phần trăm của một số.",
       "V": "Giải bài toán thực tế về phần trăm (giảm giá, lãi suất)."
      },
      "nl": "GQVĐ, MHH"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Phân số nào sau đây bằng phân số {{2|3}}?",
      "options": [
       "{{3|2}}",
       "{{2|6}}",
       "{{4|6}}",
       "{{4|9}}"
      ],
      "answer": 2,
      "explain": "Nhân cả tử và mẫu của {{2|3}} với 2 được {{4|6}}.",
      "pick": "function(v){return Math.abs(v-2/3)<1e-9}"
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Phân số nào sau đây là phân số tối giản?",
      "options": [
       "{{5|7}}",
       "{{6|8}}",
       "{{3|9}}",
       "{{10|15}}"
      ],
      "answer": 0,
      "explain": "ƯCLN(5, 7) = 1. Các phân số khác còn rút gọn được (chia cho 2, 3, 5).",
      "pick": "function(v,t){var m=/\\((\\d+)\\)\\/\\((\\d+)\\)/.exec(t);return gcd(+m[1],+m[2])===1}"
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Trong các số sau, số nào nhỏ nhất?",
      "options": [
       "{{3|4}}",
       "{{1|5}}",
       "0",
       "{{−1|2}}"
      ],
      "answer": 3,
      "explain": "Phân số âm nhỏ hơn 0 và nhỏ hơn mọi phân số dương.",
      "pick": "function(v,t,a){return v===Math.min.apply(null,a)}"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Số nghịch đảo của {{5|3}} là:",
      "options": [
       "{{−5|3}}",
       "{{−3|5}}",
       "{{5|3}}",
       "{{3|5}}"
      ],
      "answer": 3,
      "explain": "Hai số nghịch đảo có tích bằng 1: {{5|3}} · {{3|5}} = 1.",
      "pick": "function(v){return Math.abs(v*5/3-1)<1e-9}"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Số thập phân −2,5 được viết dưới dạng phân số thập phân là:",
      "options": [
       "{{−25|10}}",
       "{{−25|100}}",
       "{{25|10}}",
       "{{−2|5}}"
      ],
      "answer": 0,
      "explain": "−2,5 có một chữ số ở phần thập phân nên viết được {{−25|10}}.",
      "pick": "function(v){return Math.abs(v+2.5)<1e-9}"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Làm tròn số 3,1416 đến hàng phần trăm ta được:",
      "options": [
       "3,1",
       "3,14",
       "3,15",
       "3,142"
      ],
      "answer": 1,
      "explain": "Chữ số hàng phần nghìn là 1 < 5 nên giữ nguyên hàng phần trăm: 3,14.",
      "calc": "Math.round(3.1416*100)/100"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Tỉ số phần trăm của 3 và 4 là:",
      "options": [
       "75%",
       "34%",
       "0,75%",
       "133%"
      ],
      "answer": 0,
      "explain": "{{3|4}} = 0,75 = 75%.",
      "calc": "3/4*100"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Số đối của 4,2 là:",
      "options": [
       "4,2",
       "−4,2",
       "0,42",
       "−0,42"
      ],
      "answer": 1,
      "explain": "Hai số đối nhau có tổng bằng 0: 4,2 + (−4,2) = 0.",
      "calc": "-4.2"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Kết quả của phép tính {{1|2}} + {{1|3}} là:",
      "options": [
       "{{2|5}}",
       "{{5|6}}",
       "{{1|6}}",
       "{{2|6}}"
      ],
      "answer": 1,
      "explain": "Quy đồng mẫu 6: {{3|6}} + {{2|6}} = {{5|6}}.",
      "calc": "1/2+1/3"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Kết quả của phép tính {{−3|4}} · {{8|9}} là:",
      "options": [
       "{{2|3}}",
       "{{−11|13}}",
       "{{−2|3}}",
       "{{−3|2}}"
      ],
      "answer": 2,
      "explain": "{{−3 · 8|4 · 9}} = {{−24|36}} = {{−2|3}}.",
      "calc": "-3*8/(4*9)"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Kết quả của phép tính 2,5 · 0,4 là:",
      "options": [
       "10",
       "0,1",
       "1",
       "0,01"
      ],
      "answer": 2,
      "explain": "2,5 · 0,4 = 1,00 = 1 (hai thừa số có tổng cộng 2 chữ số thập phân).",
      "calc": "2.5*0.4"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "15% của 80 là:",
      "options": [
       "5,3",
       "120",
       "1,2",
       "12"
      ],
      "answer": 3,
      "explain": "80 · {{15|100}} = 12.",
      "calc": "80*15/100"
     }
    ],
    "tf": [
     {
      "topic": "t1",
      "q": "Cho phân số {{12|18}}.",
      "items": [
       {
        "s": "Rút gọn {{12|18}} đến tối giản được {{2|3}}.",
        "answer": true,
        "level": "B",
        "explain": "Chia cả tử và mẫu cho ƯCLN(12, 18) = 6.",
        "check": "gcd(12,18)===6&&12/6===2&&18/6===3"
       },
       {
        "s": "{{12|18}} lớn hơn 1.",
        "answer": false,
        "level": "B",
        "explain": "Tử nhỏ hơn mẫu (12 < 18) nên phân số nhỏ hơn 1.",
        "check": "12/18>1"
       },
       {
        "s": "{{12|18}} + {{1|3}} = 1.",
        "answer": true,
        "level": "H",
        "explain": "{{2|3}} + {{1|3}} = 1.",
        "check": "Math.abs(12/18+1/3-1)<1e-9"
       },
       {
        "s": "{{2|3}} của 18 bằng 12.",
        "answer": true,
        "level": "H",
        "explain": "18 · {{2|3}} = 12.",
        "check": "18*2/3===12"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Một cửa hàng bán áo khoác giá niêm yết 250 000 đồng/chiếc, nay giảm giá 20%.",
      "items": [
       {
        "s": "Số tiền được giảm cho mỗi chiếc áo là 50 000 đồng.",
        "answer": true,
        "level": "B",
        "explain": "250 000 · 20% = 50 000 (đồng).",
        "check": "250000*20/100===50000"
       },
       {
        "s": "20% viết dưới dạng số thập phân là 0,02.",
        "answer": false,
        "level": "B",
        "explain": "20% = {{20|100}} = 0,2.",
        "check": "20/100===0.02"
       },
       {
        "s": "Giá bán sau khi giảm là 200 000 đồng/chiếc.",
        "answer": true,
        "level": "H",
        "explain": "250 000 − 50 000 = 200 000 (đồng).",
        "check": "250000-50000===200000"
       },
       {
        "s": "Mua 3 chiếc áo và được giảm tiếp 5% trên tổng số tiền (đã giảm giá) nhờ thẻ thành viên, người mua phải trả 570 000 đồng.",
        "answer": true,
        "level": "V",
        "explain": "3 · 200 000 = 600 000; giảm tiếp 5%: 600 000 · 95% = 570 000 (đồng).",
        "check": "Math.round(3*200000*0.95)===570000"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "Tính: 3,25 + 1,75.",
      "answer": "5",
      "explain": "3,25 + 1,75 = 5,00 = 5.",
      "calc": "3.25+1.75"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Tìm x, biết: x − {{2|5}} = {{1|2}}. (Viết kết quả dạng phân số a/b hoặc số thập phân.)",
      "answer": [
       "9/10",
       "0.9"
      ],
      "explain": "x = {{1|2}} + {{2|5}} = {{5|10}} + {{4|10}} = {{9|10}} (= 0,9).",
      "calc": "1/2+2/5",
      "answerText": "9/10"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Lớp 6B có 40 học sinh, trong đó 35% số học sinh đạt kết quả học tập Tốt. Hỏi lớp 6B có bao nhiêu học sinh đạt kết quả Tốt?",
      "answer": "14",
      "explain": "40 · 35% = 40 · {{35|100}} = 14 (học sinh).",
      "calc": "40*35/100",
      "unit": "học sinh"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Một bể chứa 1 200 lít nước. Ngày thứ nhất dùng hết {{1|4}} lượng nước trong bể, ngày thứ hai dùng {{2|5}} lượng nước còn lại. Hỏi sau hai ngày trong bể còn bao nhiêu lít nước?",
      "answer": "540",
      "explain": "Ngày 1 dùng 1 200 · {{1|4}} = 300 lít, còn 900 lít. Ngày 2 dùng 900 · {{2|5}} = 360 lít. Còn lại 900 − 360 = 540 (lít).",
      "calc": "(1200-1200/4)*(1-2/5)",
      "unit": "lít"
     }
    ],
    "essay": [
     {
      "topic": "t2",
      "q": "Thực hiện các yêu cầu sau.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Tính: {{2|7}} + {{5|7}} − {{3|4}}.",
        "answer": "{{2|7}} + {{5|7}} = {{7|7}} = 1; 1 − {{3|4}} = {{1|4}}.",
        "rubric": [
         [
          "Cộng hai phân số cùng mẫu được 1",
          0.25
         ],
         [
          "Kết quả {{1|4}}",
          0.25
         ]
        ],
        "calc": "2/7+5/7-3/4"
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Tính một cách hợp lí: {{5|9}} · {{7|13}} + {{5|9}} · {{6|13}}.",
        "answer": "{{5|9}} · ({{7|13}} + {{6|13}}) = {{5|9}} · 1 = {{5|9}}.",
        "rubric": [
         [
          "Đặt {{5|9}} làm thừa số chung (tính chất phân phối)",
          0.25
         ],
         [
          "Tính tổng trong ngoặc bằng 1",
          0.25
         ],
         [
          "Kết quả {{5|9}}",
          0.25
         ]
        ],
        "calc": "5/9*7/13+5/9*6/13"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Bác An gửi tiết kiệm 50 000 000 đồng với lãi suất 6% một năm. Hết một năm, bác rút cả gốc lẫn lãi và dùng {{3|4}} số tiền đó để mua một chiếc xe máy.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Tính số tiền lãi bác An nhận được và số tiền bác còn lại sau khi mua xe.",
        "answer": "Tiền lãi: 50 000 000 · 6% = 3 000 000 (đồng). Cả gốc lẫn lãi: 53 000 000 đồng. Tiền mua xe: 53 000 000 · {{3|4}} = 39 750 000 (đồng). Còn lại: 53 000 000 − 39 750 000 = 13 250 000 (đồng).",
        "rubric": [
         [
          "Tiền lãi 3 000 000 đồng",
          0.25
         ],
         [
          "Gốc và lãi 53 000 000 đồng",
          0.25
         ],
         [
          "Tiền mua xe 39 750 000 đồng",
          0.5
         ],
         [
          "Còn lại 13 250 000 đồng",
          0.25
         ]
        ],
        "calc": "53000000/4"
       }
      ]
     },
     {
      "topic": "t1",
      "q": "Bài toán so sánh.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Không quy đồng mẫu, hãy so sánh A = {{2023|2024}} và B = {{2024|2025}}.",
        "answer": "1 − A = {{1|2024}}; 1 − B = {{1|2025}}. Vì {{1|2024}} > {{1|2025}} nên A thiếu nhiều hơn để bằng 1, do đó A < B.",
        "rubric": [
         [
          "Tính phần bù đến 1 của A và B",
          0.25
         ],
         [
          "So sánh và kết luận A < B",
          0.25
         ]
        ]
       }
      ]
     }
    ]
   }
  },
  {
   "id": "cuoi-ki-2",
   "name": "Cuối học kì 2",
   "scope": "Chương VI – IX (Bài 23 – Bài 43), trọng tâm Chương VIII (hình học cơ bản) và IX (dữ liệu, xác suất thực nghiệm).",
   "review": {
    "sections": [
     {
      "chapter": "c6",
      "title": "Ôn nhanh Chương VI – VII",
      "points": [
       "Phép tính phân số: quy đồng khi cộng, trừ; nhân với nghịch đảo khi chia.",
       "Hai bài toán: {{m|n}} của b là b · {{m|n}}; số có {{m|n}} bằng a là a : {{m|n}}.",
       "Số thập phân, làm tròn, tỉ số phần trăm và m% của một số."
      ]
     },
     {
      "chapter": "c8",
      "title": "Chương VIII. Những hình hình học cơ bản",
      "points": [
       "Có một và chỉ một đường thẳng đi qua hai điểm phân biệt. Ba điểm thẳng hàng khi cùng nằm trên một đường thẳng; trong ba điểm thẳng hàng có đúng một điểm nằm giữa hai điểm còn lại.",
       "Hai đường thẳng phân biệt có thể cắt nhau (một điểm chung) hoặc song song (không có điểm chung).",
       "Đoạn thẳng AB gồm A, B và các điểm nằm giữa A và B. Nếu C nằm giữa A và B thì AC + CB = AB.",
       "Trung điểm M của AB: M nằm giữa A, B và MA = MB = {{AB|2}}.",
       "Tia Ox: hình gồm điểm O và một phần đường thẳng bị chia ra bởi O. Hai tia chung gốc tạo thành đường thẳng là hai tia đối nhau.",
       "Góc: hình gồm hai tia chung gốc. Góc nhọn < 90°; góc vuông = 90°; 90° < góc tù < 180°; góc bẹt = 180°. Đo góc bằng thước đo góc."
      ],
      "example": "Trên tia Ox, OA = 2 cm, OB = 5 cm ⇒ A nằm giữa O và B, AB = 5 − 2 = 3 (cm)."
     },
     {
      "chapter": "c9",
      "title": "Chương IX. Dữ liệu và xác suất thực nghiệm",
      "points": [
       "Dữ liệu gồm số liệu (là số) và dữ liệu không phải số. Thu thập bằng quan sát, phỏng vấn, lập phiếu hỏi…",
       "Tổ chức dữ liệu bằng bảng thống kê; biểu diễn bằng biểu đồ tranh, biểu đồ cột, biểu đồ cột kép.",
       "Phép thử nghiệm, sự kiện; liệt kê các kết quả có thể (tung đồng xu: 2 kết quả; tung xúc xắc: 6 kết quả).",
       "Xác suất thực nghiệm của sự kiện A = {{số lần A xảy ra|tổng số lần thực hiện}}."
      ],
      "example": "Tung đồng xu 30 lần, có 12 lần ngửa: xác suất thực nghiệm mặt ngửa là {{12|30}} = {{2|5}}."
     }
    ],
    "mistakes": [
     "Quên kiểm tra điểm nào nằm giữa trước khi cộng/trừ độ dài đoạn thẳng.",
     "Nhầm góc tù với góc bẹt.",
     "Xác suất thực nghiệm lấy “số lần xảy ra : số lần không xảy ra”.",
     "Đọc biểu đồ cột kép nhưng lẫn hai bộ dữ liệu."
    ],
    "forms": [
     "Tính giá trị biểu thức phân số, số thập phân; tìm x.",
     "Tính độ dài đoạn thẳng, trung điểm; đếm đường thẳng/đoạn thẳng.",
     "Nhận biết và đo góc; góc trên mặt đồng hồ.",
     "Đọc, lập bảng thống kê và biểu đồ; tính tỉ số phần trăm từ dữ liệu.",
     "Tính xác suất thực nghiệm."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Không dùng máy tính cầm tay.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c6",
      "content": "Phân số và các phép tính; hỗn số",
      "yccd": {
       "B": "Đổi hỗn số ra phân số.",
       "H": "Chia phân số; tìm giá trị phân số của một số; tìm x.",
       "V": "Lập luận về phân số tối giản."
      },
      "nl": "TD"
     },
     {
      "id": "t2",
      "chapter": "c7",
      "content": "Số thập phân; làm tròn; tỉ số phần trăm",
      "yccd": {
       "B": "Đổi số thập phân sang phần trăm; làm tròn.",
       "H": "",
       "V": ""
      },
      "nl": "TD"
     },
     {
      "id": "t3",
      "chapter": "c8",
      "content": "Điểm, đường thẳng, tia, đoạn thẳng, trung điểm; góc và số đo góc",
      "yccd": {
       "B": "Nhận biết đường thẳng qua hai điểm, góc tù, trung điểm.",
       "H": "Tính độ dài đoạn thẳng; nhận biết góc vuông trong thực tế.",
       "V": "Đếm số đoạn thẳng tạo bởi n điểm."
      },
      "nl": "TD, GT"
     },
     {
      "id": "t4",
      "chapter": "c9",
      "content": "Thu thập, tổ chức, biểu diễn dữ liệu; biểu đồ; xác suất thực nghiệm",
      "yccd": {
       "B": "Nhận biết dữ liệu số; số kết quả có thể; công dụng biểu đồ cột kép.",
       "H": "Tính xác suất thực nghiệm; đọc bảng thống kê.",
       "V": "Lập bảng thống kê, tính tỉ lệ phần trăm từ dữ liệu."
      },
      "nl": "MHH, GT"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Hỗn số 2{{1|3}} được viết dưới dạng phân số là:",
      "options": [
       "{{5|3}}",
       "{{7|3}}",
       "{{6|3}}",
       "{{2|3}}"
      ],
      "answer": 1,
      "explain": "2{{1|3}} = {{2 · 3 + 1|3}} = {{7|3}}.",
      "calc": "2+1/3"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Số thập phân 0,6 viết dưới dạng tỉ số phần trăm là:",
      "options": [
       "6%",
       "0,6%",
       "60%",
       "600%"
      ],
      "answer": 2,
      "explain": "0,6 = {{60|100}} = 60%.",
      "calc": "0.6*100"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Qua hai điểm phân biệt có bao nhiêu đường thẳng?",
      "options": [
       "0",
       "1",
       "2",
       "Vô số"
      ],
      "answer": 1,
      "explain": "Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.",
      "calc": "1"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Góc có số đo 120° là:",
      "options": [
       "Góc tù",
       "Góc nhọn",
       "Góc vuông",
       "Góc bẹt"
      ],
      "answer": 0,
      "explain": "Góc tù lớn hơn 90° và nhỏ hơn 180°."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "M là trung điểm của đoạn thẳng AB dài 10 cm. Độ dài MA là:",
      "options": [
       "5 cm",
       "20 cm",
       "10 cm",
       "2,5 cm"
      ],
      "answer": 0,
      "explain": "Trung điểm chia đoạn thẳng thành hai phần bằng nhau: MA = 10 : 2 = 5 (cm).",
      "calc": "10/2"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Dữ liệu nào sau đây là số liệu?",
      "options": [
       "Màu sắc yêu thích của các bạn trong tổ",
       "Tên các bạn trong tổ",
       "Môn thể thao các bạn yêu thích",
       "Cân nặng (kg) của các bạn trong tổ"
      ],
      "answer": 3,
      "explain": "Cân nặng được biểu diễn bằng số nên là số liệu; các dữ liệu còn lại không phải số."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Khi tung một con xúc xắc 6 mặt, có bao nhiêu kết quả có thể xảy ra về số chấm xuất hiện?",
      "options": [
       "6",
       "1",
       "2",
       "12"
      ],
      "answer": 0,
      "explain": "Mặt xuất hiện có thể là 1, 2, 3, 4, 5 hoặc 6 chấm.",
      "calc": "6"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Biểu đồ cột kép thường được dùng để:",
      "options": [
       "Biểu diễn một số duy nhất",
       "Vẽ hình học",
       "Thay cho bảng cửu chương",
       "So sánh hai bộ dữ liệu cùng loại"
      ],
      "answer": 3,
      "explain": "Mỗi nhóm có hai cột đứng cạnh nhau nên dễ so sánh hai bộ dữ liệu."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Kết quả của phép chia {{−2|3}} : {{4|9}} là:",
      "options": [
       "{{−8|27}}",
       "{{3|2}}",
       "{{−3|2}}",
       "{{−2|3}}"
      ],
      "answer": 2,
      "explain": "{{−2|3}} · {{9|4}} = {{−18|12}} = {{−3|2}}.",
      "calc": "(-2/3)/(4/9)"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Trên tia Ox lấy hai điểm A, B sao cho OA = 3 cm, OB = 7 cm. Độ dài đoạn thẳng AB là:",
      "options": [
       "10 cm",
       "4 cm",
       "3 cm",
       "7 cm"
      ],
      "answer": 1,
      "explain": "A nằm giữa O và B (vì 3 < 7) nên AB = OB − OA = 4 (cm).",
      "calc": "7-3"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Gieo một con xúc xắc 50 lần, mặt 6 chấm xuất hiện 9 lần. Xác suất thực nghiệm xuất hiện mặt 6 chấm là:",
      "options": [
       "{{1|6}}",
       "{{41|50}}",
       "{{9|41}}",
       "{{9|50}}"
      ],
      "answer": 3,
      "explain": "Xác suất thực nghiệm = số lần xảy ra : tổng số lần thử = {{9|50}}.",
      "calc": "9/50"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Lúc 3 giờ đúng, kim giờ và kim phút của đồng hồ tạo thành góc:",
      "options": [
       "Nhọn",
       "Tù",
       "Vuông",
       "Bẹt"
      ],
      "answer": 2,
      "explain": "Mỗi khoảng giữa hai số liên tiếp trên mặt đồng hồ là 30°; từ số 12 đến số 3 là 3 · 30° = 90°."
     }
    ],
    "tf": [
     {
      "topic": "t3",
      "q": "Cho đoạn thẳng AB dài 8 cm. Điểm C nằm giữa A và B sao cho AC = 3 cm. Gọi D là trung điểm của đoạn thẳng CB.",
      "items": [
       {
        "s": "Điểm C thuộc đoạn thẳng AB.",
        "answer": true,
        "level": "B",
        "explain": "C nằm giữa A và B nên C thuộc đoạn thẳng AB."
       },
       {
        "s": "CB = 11 cm.",
        "answer": false,
        "level": "B",
        "explain": "CB = AB − AC = 8 − 3 = 5 (cm).",
        "check": "8-3===11"
       },
       {
        "s": "CD = 2,5 cm.",
        "answer": true,
        "level": "H",
        "explain": "CD = CB : 2 = 5 : 2 = 2,5 (cm).",
        "check": "(8-3)/2===2.5"
       },
       {
        "s": "AD = 5,5 cm.",
        "answer": true,
        "level": "H",
        "explain": "AD = AC + CD = 3 + 2,5 = 5,5 (cm).",
        "check": "3+(8-3)/2===5.5"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Kết quả khảo sát môn thể thao yêu thích nhất của các bạn lớp 6A (mỗi bạn chọn một môn): Bóng đá 12 bạn; Cầu lông 8 bạn; Bơi 6 bạn; Cờ vua 4 bạn.",
      "items": [
       {
        "s": "Có 30 bạn tham gia khảo sát.",
        "answer": true,
        "level": "B",
        "explain": "12 + 8 + 6 + 4 = 30.",
        "check": "12+8+6+4===30"
       },
       {
        "s": "Môn được chọn ít nhất là Bơi.",
        "answer": false,
        "level": "B",
        "explain": "Cờ vua chỉ có 4 bạn chọn, ít hơn Bơi (6 bạn)."
       },
       {
        "s": "Số bạn chọn Bóng đá chiếm 40% số bạn tham gia khảo sát.",
        "answer": true,
        "level": "H",
        "explain": "{{12|30}} = 0,4 = 40%.",
        "check": "12/30*100===40"
       },
       {
        "s": "Nếu chọn ngẫu nhiên một phiếu trong các phiếu khảo sát này thì khả năng chọn được phiếu ghi Cầu lông hoặc Cờ vua là {{2|5}}.",
        "answer": true,
        "level": "V",
        "explain": "Số phiếu Cầu lông hoặc Cờ vua: 8 + 4 = 12; tỉ số {{12|30}} = {{2|5}}.",
        "check": "Math.abs((8+4)/30-2/5)<1e-9"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Làm tròn số 12,467 đến hàng phần mười.",
      "answer": "12.5",
      "explain": "Chữ số hàng phần trăm là 6 ≥ 5 nên tăng chữ số hàng phần mười thêm 1: 12,5.",
      "calc": "Math.round(12.467*10)/10",
      "answerText": "12,5"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Tính {{3|4}} của 64.",
      "answer": "48",
      "explain": "64 · {{3|4}} = 48.",
      "calc": "64*3/4"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Một hộp có các quả bóng xanh và đỏ. Lấy ngẫu nhiên một quả, ghi màu rồi trả lại; làm như vậy 40 lần thì có 14 lần được bóng đỏ. Tính xác suất thực nghiệm của sự kiện “lấy được bóng <b>không phải</b> màu đỏ” (viết dưới dạng số thập phân).",
      "answer": "0.65",
      "explain": "Số lần không được bóng đỏ: 40 − 14 = 26. Xác suất thực nghiệm: {{26|40}} = 0,65.",
      "calc": "(40-14)/40",
      "answerText": "0,65"
     },
     {
      "level": "V",
      "topic": "t3",
      "q": "Cho 5 điểm phân biệt. Hỏi có bao nhiêu đoạn thẳng có hai đầu mút là hai trong 5 điểm đó?",
      "answer": "10",
      "explain": "Mỗi điểm nối với 4 điểm còn lại được 4 đoạn; 5 điểm được 5 · 4 = 20, nhưng mỗi đoạn được đếm hai lần nên có 20 : 2 = 10 đoạn.",
      "calc": "5*4/2",
      "unit": "đoạn"
     }
    ],
    "essay": [
     {
      "topic": "t1",
      "q": "Thực hiện các yêu cầu sau.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Tính: 1,25 · 8 − 3,5.",
        "answer": "1,25 · 8 = 10; 10 − 3,5 = 6,5.",
        "rubric": [
         [
          "1,25 · 8 = 10",
          0.25
         ],
         [
          "Kết quả 6,5",
          0.25
         ]
        ],
        "calc": "1.25*8-3.5"
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Tìm x, biết: {{2|3}}x + {{1|2}} = {{5|6}}.",
        "answer": "{{2|3}}x = {{5|6}} − {{1|2}} = {{2|6}} = {{1|3}}; x = {{1|3}} : {{2|3}} = {{1|3}} · {{3|2}} = {{1|2}}.",
        "rubric": [
         [
          "Tính {{2|3}}x = {{1|3}}",
          0.25
         ],
         [
          "Chia cho {{2|3}} (nhân với {{3|2}})",
          0.25
         ],
         [
          "x = {{1|2}}",
          0.25
         ]
        ],
        "calc": "(5/6-1/2)/(2/3)"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Điểm kiểm tra môn Toán của 8 bạn trong tổ 1 lần lượt là: 7; 8; 6; 9; 8; 10; 7; 8.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Lập bảng thống kê số bạn theo từng mức điểm.",
        "answer": "Điểm 6: 1 bạn; điểm 7: 2 bạn; điểm 8: 3 bạn; điểm 9: 1 bạn; điểm 10: 1 bạn (tổng 8 bạn).",
        "rubric": [
         [
          "Lập đúng dạng bảng (hàng điểm, hàng số bạn)",
          0.25
         ],
         [
          "Số liệu đúng, tổng bằng 8",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.75,
        "q": "Tính tỉ số phần trăm số bạn đạt từ 8 điểm trở lên so với cả tổ.",
        "answer": "Số bạn đạt từ 8 điểm trở lên: 3 + 1 + 1 = 5. Tỉ số phần trăm: {{5|8}} · 100% = 62,5%.",
        "rubric": [
         [
          "Đếm đúng 5 bạn",
          0.25
         ],
         [
          "Lập tỉ số {{5|8}}",
          0.25
         ],
         [
          "Kết quả 62,5%",
          0.25
         ]
        ],
        "calc": "5/8*100"
       }
      ]
     },
     {
      "topic": "t1",
      "q": "Bài toán lập luận.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Chứng tỏ rằng với mọi số tự nhiên n, phân số {{n + 1|n + 2}} là phân số tối giản.",
        "answer": "Gọi d là ước chung của n + 1 và n + 2 (d là số tự nhiên). Khi đó d là ước của (n + 2) − (n + 1) = 1, nên d = 1. Vậy tử và mẫu chỉ có ước chung là 1, phân số tối giản.",
        "rubric": [
         [
          "Gọi d là ước chung, xét hiệu (n + 2) − (n + 1) = 1",
          0.25
         ],
         [
          "Suy ra d = 1, kết luận",
          0.25
         ]
        ]
       }
      ]
     }
    ]
   }
  }
 ]
});
