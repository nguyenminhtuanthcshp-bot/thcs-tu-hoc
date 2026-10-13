/* Toán 9 – Ôn tập và đề kiểm tra định kì theo cấu trúc CV 7991/BGDĐT-GDTrH. Nội dung do nhóm biên soạn tự viết. */
THCS.registerExams("toan-9", {
 "split": "Nội dung được chia theo thứ tự bài học SGK Toán 9 “Kết nối tri thức với cuộc sống” và tiến độ năm học thường dùng (35 tuần: học kì I 18 tuần, học kì II 17 tuần). <b>Giữa kì 1</b> (khoảng tuần 8–9): Chương I – II. <b>Cuối kì 1</b> (khoảng tuần 16–17): Chương I – V, trọng tâm Chương III – V. <b>Giữa kì 2</b> (khoảng tuần 25–26): Chương VI – VII. <b>Cuối kì 2</b> (khoảng tuần 32–33): Chương VI – X, trọng tâm Chương VIII – X. Nhiều trường dạy song song mạch Đại số và mạch Hình học nên phạm vi thật có thể khác một chút – em nên hỏi thầy cô phạm vi chính thức của trường mình.",
 "checkpoints": [
  {
   "id": "giua-ki-1",
   "name": "Giữa học kì 1",
   "scope": "Chương I – II (Bài 1 – Bài 6): hệ hai phương trình bậc nhất hai ẩn; phương trình và bất phương trình bậc nhất một ẩn.",
   "review": {
    "sections": [
     {
      "chapter": "c1",
      "title": "Chương I. Phương trình và hệ hai phương trình bậc nhất hai ẩn",
      "points": [
       "Phương trình ax + by = c (a, b không đồng thời bằng 0) có vô số nghiệm; tập nghiệm biểu diễn bởi một đường thẳng.",
       "Giải hệ bằng phương pháp thế hoặc cộng đại số.",
       "Giải bài toán bằng cách lập hệ phương trình: chọn hai ẩn, đặt điều kiện, lập hai phương trình, giải, đối chiếu, kết luận."
      ]
     },
     {
      "chapter": "c2",
      "title": "Chương II. Phương trình và bất phương trình bậc nhất một ẩn",
      "points": [
       "Phương trình tích A · B = 0 ⇔ A = 0 hoặc B = 0.",
       "Phương trình chứa ẩn ở mẫu: tìm điều kiện xác định, quy đồng khử mẫu, giải, đối chiếu điều kiện.",
       "Tính chất bất đẳng thức: cộng một số giữ chiều; nhân số dương giữ chiều, nhân số âm đổi chiều; tính chất bắc cầu.",
       "Bất phương trình ax + b > 0 (a ≠ 0): chia cho a, nhớ đổi chiều nếu a < 0."
      ],
      "example": "−3x > 6 ⇔ x < −2."
     }
    ],
    "mistakes": [
     "Quên đổi chiều khi nhân/chia bất phương trình với số âm.",
     "Không đối chiếu điều kiện xác định khi giải phương trình chứa ẩn ở mẫu.",
     "Thế sai dấu khi giải hệ."
    ],
    "forms": [
     "Giải hệ phương trình bậc nhất hai ẩn.",
     "Giải bài toán bằng cách lập hệ.",
     "Giải phương trình tích, phương trình chứa ẩn ở mẫu.",
     "Giải bất phương trình, bài toán thực tế."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c1",
      "content": "Phương trình bậc nhất hai ẩn; hệ hai phương trình và cách giải",
      "yccd": {
       "B": "Nhận biết phương trình bậc nhất hai ẩn, nghiệm của hệ.",
       "H": "Giải hệ bằng phương pháp thế, cộng đại số.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c1",
      "content": "Giải bài toán bằng cách lập hệ phương trình",
      "yccd": {
       "B": "",
       "H": "Bài toán tổng – hiệu.",
       "V": "Giải bài toán thực tế bằng cách lập hệ."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c2",
      "content": "Phương trình tích; phương trình chứa ẩn ở mẫu",
      "yccd": {
       "B": "Nhận biết điều kiện xác định, nghiệm phương trình tích.",
       "H": "Giải phương trình chứa ẩn ở mẫu.",
       "V": "Giải phương trình và đối chiếu điều kiện."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c2",
      "content": "Bất đẳng thức; bất phương trình bậc nhất một ẩn",
      "yccd": {
       "B": "Nhận biết tính chất bất đẳng thức, bất phương trình bậc nhất.",
       "H": "Giải bất phương trình.",
       "V": "Bài toán thực tế dẫn đến bất phương trình; chứng minh bất đẳng thức."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Cặp số nào sau đây là nghiệm của phương trình 2x + y = 5?",
      "options": [
       "(2; 3)",
       "(0; 3)",
       "(3; 1)",
       "(1; 3)"
      ],
      "answer": 3,
      "explain": "2 · 1 + 3 = 5."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Phương trình nào sau đây là phương trình bậc nhất hai ẩn?",
      "options": [
       "x<sup>2</sup> + y = 1",
       "3x − 2y = 1",
       "xy = 2",
       "0x + 0y = 3"
      ],
      "answer": 1,
      "explain": "Dạng ax + by = c với a, b không đồng thời bằng 0."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Hệ phương trình x + y = 3 và x − y = 1 có nghiệm là:",
      "options": [
       "(2; 1)",
       "(1; 2)",
       "(3; 0)",
       "(2; −1)"
      ],
      "answer": 0,
      "explain": "Cộng hai phương trình: 2x = 4 ⇒ x = 2, y = 1."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Điều kiện xác định của phương trình {{1|x − 1}} + 2 = {{3|x}} là:",
      "options": [
       "x ≠ 1",
       "x ≠ 0",
       "x ≠ 1 và x ≠ 0",
       "x ≠ −1 và x ≠ 0"
      ],
      "answer": 2,
      "explain": "Các mẫu x − 1 và x phải khác 0."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Phương trình (x − 2)(x + 3) = 0 có nghiệm là:",
      "options": [
       "x = −2 hoặc x = 3",
       "x = 2",
       "x = −3",
       "x = 2 hoặc x = −3"
      ],
      "answer": 3,
      "explain": "Một tích bằng 0 khi một thừa số bằng 0."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Nếu a > b thì:",
      "options": [
       "a + 3 > b + 3",
       "a + 3 < b + 3",
       "a − 3 < b − 3",
       "3 − a > 3 − b"
      ],
      "answer": 0,
      "explain": "Cộng cùng một số vào hai vế giữ nguyên chiều bất đẳng thức."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Nếu a > b thì:",
      "options": [
       "−2a > −2b",
       "−2a = −2b",
       "−2a < −2b",
       "−2a ≥ −2b"
      ],
      "answer": 2,
      "explain": "Nhân hai vế với số âm thì đổi chiều bất đẳng thức."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Bất phương trình nào là bất phương trình bậc nhất một ẩn?",
      "options": [
       "x<sup>2</sup> − 1 > 0",
       "0x + 3 < 0",
       "{{1|x}} > 2",
       "2x − 5 > 0"
      ],
      "answer": 3,
      "explain": "Dạng ax + b > 0 với a ≠ 0."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Nghiệm (x; y) của hệ 2x + y = 7 và x − y = 2 có x bằng:",
      "options": [
       "3",
       "1",
       "2",
       "5"
      ],
      "answer": 0,
      "explain": "Cộng hai phương trình: 3x = 9 ⇒ x = 3.",
      "calc": "(7+2)/3"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Nghiệm của phương trình {{x|x − 2}} = 3 là:",
      "options": [
       "2",
       "−3",
       "3",
       "6"
      ],
      "answer": 2,
      "explain": "x = 3(x − 2) ⇒ 2x = 6 ⇒ x = 3 (thoả x ≠ 2).",
      "calc": "6/2"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Nghiệm của bất phương trình 3x − 6 < 0 là:",
      "options": [
       "x > 2",
       "x < 2",
       "x < −2",
       "x > −2"
      ],
      "answer": 1,
      "explain": "3x < 6 ⇒ x < 2."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Hai số có tổng bằng 20 và hiệu bằng 4. Số lớn là:",
      "options": [
       "8",
       "12",
       "16",
       "10"
      ],
      "answer": 1,
      "explain": "(20 + 4) : 2 = 12.",
      "calc": "(20+4)/2"
     }
    ],
    "tf": [
     {
      "topic": "t1",
      "q": "Cho hệ phương trình x + 2y = 5 và 3x − y = 1.",
      "items": [
       {
        "s": "(1; 2) là nghiệm của phương trình thứ nhất.",
        "answer": true,
        "level": "B",
        "explain": "1 + 4 = 5.",
        "check": "1+2*2===5"
       },
       {
        "s": "(1; 2) không là nghiệm của phương trình thứ hai.",
        "answer": false,
        "level": "B",
        "explain": "3 − 2 = 1 nên (1; 2) là nghiệm.",
        "check": "!(3*1-2===1)"
       },
       {
        "s": "Hệ có nghiệm duy nhất (1; 2).",
        "answer": true,
        "level": "H",
        "explain": "Hệ số không tỉ lệ (1/3 ≠ 2/(−1)) nên nghiệm duy nhất, chính là (1; 2)."
       },
       {
        "s": "Cộng từng vế hai phương trình ta được 4x + y = 6.",
        "answer": true,
        "level": "H",
        "explain": "(x + 3x) + (2y − y) = 5 + 1.",
        "check": "1+3===4&&2-1===1&&5+1===6"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Cho bất phương trình 2x − 3 ≥ x + 1.",
      "items": [
       {
        "s": "x = 5 là một nghiệm của bất phương trình.",
        "answer": true,
        "level": "B",
        "explain": "7 ≥ 6.",
        "check": "2*5-3>=5+1"
       },
       {
        "s": "x = 0 là một nghiệm của bất phương trình.",
        "answer": false,
        "level": "B",
        "explain": "−3 ≥ 1 là sai.",
        "check": "2*0-3>=0+1"
       },
       {
        "s": "Tập nghiệm của bất phương trình là x ≥ 4.",
        "answer": true,
        "level": "H",
        "explain": "2x − x ≥ 1 + 3."
       },
       {
        "s": "Số nguyên nhỏ nhất thoả mãn bất phương trình là 3.",
        "answer": false,
        "level": "V",
        "explain": "Số nguyên nhỏ nhất là 4.",
        "check": "[1,2,3,4,5,6].filter(function(x){return 2*x-3>=x+1})[0]===3"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "Tìm nghiệm âm của phương trình (x − 4)(2x + 6) = 0.",
      "answer": "-3",
      "explain": "2x + 6 = 0 ⇒ x = −3.",
      "calc": "-6/2",
      "answerText": "−3"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Cho x + y = 10 và x − y = 2. Tính x · y.",
      "answer": "24",
      "explain": "x = 6, y = 4 ⇒ xy = 24.",
      "calc": "6*4"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Mua 3 bút và 2 vở hết 26 nghìn đồng; mua 1 bút và 2 vở hết 18 nghìn đồng. Giá một chiếc bút là bao nhiêu nghìn đồng?",
      "answer": "4",
      "explain": "Trừ hai phương trình: 2 bút = 8 nghìn ⇒ 1 bút 4 nghìn.",
      "calc": "(26-18)/2",
      "unit": "nghìn đồng"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Taxi tính giá mở cửa 15 000 đồng và 12 000 đồng mỗi ki-lô-mét tiếp theo. Với 100 000 đồng, khách đi được nhiều nhất bao nhiêu ki-lô-mét (số nguyên)?",
      "answer": "7",
      "explain": "15 000 + 12 000x ≤ 100 000 ⇒ x ≤ 7,08… ⇒ nhiều nhất 7 km.",
      "calc": "Math.floor((100000-15000)/12000)",
      "unit": "km"
     }
    ],
    "essay": [
     {
      "topic": "t1",
      "q": "Giải các phương trình, hệ phương trình sau.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Giải hệ phương trình x + y = 5 và x − y = 1.",
        "answer": "Cộng: 2x = 6 ⇒ x = 3; y = 2. Nghiệm (3; 2).",
        "rubric": [
         [
          "Tìm x = 3",
          0.25
         ],
         [
          "Tìm y = 2, kết luận",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Giải phương trình {{2|x + 1}} = {{1|x − 2}}.",
        "answer": "ĐKXĐ: x ≠ −1, x ≠ 2. Quy đồng: 2(x − 2) = x + 1 ⇒ x = 5 (thoả mãn).",
        "rubric": [
         [
          "Nêu điều kiện xác định",
          0.25
         ],
         [
          "Khử mẫu, giải x = 5",
          0.25
         ],
         [
          "Đối chiếu điều kiện, kết luận",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Một mảnh vườn hình chữ nhật có chu vi 34 m. Nếu tăng chiều dài thêm 3 m và tăng chiều rộng thêm 2 m thì diện tích tăng thêm 45 m².",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Tính chiều dài và chiều rộng của mảnh vườn.",
        "answer": "Gọi chiều dài x, chiều rộng y (m), x > y > 0. Ta có x + y = 17 và (x + 3)(y + 2) − xy = 45 ⇔ 2x + 3y = 39. Từ x = 17 − y: 34 − 2y + 3y = 39 ⇒ y = 5, x = 12. Chiều dài 12 m, chiều rộng 5 m.",
        "rubric": [
         [
          "Gọi ẩn, điều kiện",
          0.25
         ],
         [
          "Lập phương trình x + y = 17",
          0.25
         ],
         [
          "Lập phương trình 2x + 3y = 39",
          0.25
         ],
         [
          "Giải được x = 12, y = 5",
          0.25
         ],
         [
          "Kết luận",
          0.25
         ]
        ],
        "calc": "(12+3)*(5+2)-12*5"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Bài toán chứng minh.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Chứng minh rằng với mọi số thực a, b ta có a<sup>2</sup> + b<sup>2</sup> ≥ 2ab.",
        "answer": "a<sup>2</sup> + b<sup>2</sup> − 2ab = (a − b)<sup>2</sup> ≥ 0 nên a<sup>2</sup> + b<sup>2</sup> ≥ 2ab. Dấu bằng khi a = b.",
        "rubric": [
         [
          "Xét hiệu bằng (a − b)<sup>2</sup>",
          0.25
         ],
         [
          "Kết luận",
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
   "scope": "Chương I – V (Bài 1 – Bài 17), trọng tâm Chương III (căn thức), IV (hệ thức lượng), V (đường tròn).",
   "review": {
    "sections": [
     {
      "chapter": "c2",
      "title": "Ôn nhanh Chương I – II",
      "points": [
       "Hệ phương trình bậc nhất hai ẩn; phương trình quy về bậc nhất; bất phương trình bậc nhất.",
       "Nhân hai vế bất phương trình với số âm phải đổi chiều."
      ]
     },
     {
      "chapter": "c3",
      "title": "Chương III. Căn bậc hai và căn bậc ba",
      "points": [
       "√A xác định khi A ≥ 0; √A<sup>2</sup> = |A|.",
       "√(AB) = √A · √B (A, B ≥ 0); √{{A|B}} = {{√A|√B}} (A ≥ 0, B > 0).",
       "Đưa thừa số ra ngoài/vào trong dấu căn; trục căn thức ở mẫu; rút gọn biểu thức.",
       "Căn bậc ba: ∛a = x ⇔ x<sup>3</sup> = a, xác định với mọi a."
      ]
     },
     {
      "chapter": "c4",
      "title": "Chương IV. Hệ thức lượng trong tam giác vuông",
      "points": [
       "sin = đối/huyền; cos = kề/huyền; tan = đối/kề; cot = kề/đối.",
       "Hai góc phụ nhau: sin góc này bằng cos góc kia.",
       "Cạnh góc vuông = cạnh huyền × sin góc đối = cạnh huyền × cos góc kề = cạnh góc vuông kia × tan góc đối."
      ],
      "example": "sin 30° = {{1|2}}; cos 60° = {{1|2}}; tan 45° = 1."
     },
     {
      "chapter": "c5",
      "title": "Chương V. Đường tròn",
      "points": [
       "Đường tròn (O; R); đường kính là dây lớn nhất; đường kính vuông góc với dây thì đi qua trung điểm của dây.",
       "Độ dài cung n°: l = {{πRn|180}}; diện tích hình quạt: S = {{πR²n|360}}.",
       "Vị trí đường thẳng – đường tròn: cắt (d < R), tiếp xúc (d = R), không giao (d > R). Tiếp tuyến vuông góc với bán kính tại tiếp điểm.",
       "Vị trí hai đường tròn: theo so sánh OO' với R + r và |R − r|."
      ]
     }
    ],
    "mistakes": [
     "Viết √A<sup>2</sup> = A khi A âm.",
     "Nhầm sin với cos (đối/kề).",
     "Dùng độ thay cho radian khi tính trên máy tính (chọn chế độ Deg)."
    ],
    "forms": [
     "Rút gọn biểu thức chứa căn.",
     "Tính cạnh, góc trong tam giác vuông; bài toán đo chiều cao.",
     "Khoảng cách từ tâm đến dây; vị trí tương đối; độ dài cung, diện tích hình quạt."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c2",
      "content": "Hệ phương trình; bất phương trình bậc nhất",
      "yccd": {
       "B": "Nhận biết nghiệm bất phương trình.",
       "H": "",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c3",
      "content": "Căn bậc hai, căn thức bậc hai, căn bậc ba; biến đổi căn thức",
      "yccd": {
       "B": "Nhận biết căn bậc hai số học, điều kiện xác định, căn bậc ba.",
       "H": "Biến đổi, rút gọn biểu thức chứa căn.",
       "V": "Rút gọn biểu thức chứa căn có điều kiện."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c4",
      "content": "Tỉ số lượng giác của góc nhọn; hệ thức cạnh – góc trong tam giác vuông",
      "yccd": {
       "B": "Nhận biết định nghĩa, giá trị lượng giác góc đặc biệt.",
       "H": "Tính cạnh trong tam giác vuông.",
       "V": "Giải bài toán đo đạc thực tế; chứng minh hệ thức."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c5",
      "content": "Đường tròn; cung, dây; độ dài cung, diện tích hình quạt; vị trí tương đối",
      "yccd": {
       "B": "Nhận biết đường tròn, vị trí tiếp xúc.",
       "H": "Tính độ dài cung.",
       "V": "Tính diện tích hình quạt; khoảng cách từ tâm đến dây."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Căn bậc hai số học của 81 là:",
      "options": [
       "−9",
       "9",
       "±9",
       "40,5"
      ],
      "answer": 1,
      "explain": "9 ≥ 0 và 9<sup>2</sup> = 81.",
      "calc": "Math.sqrt(81)"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Biểu thức √x xác định khi:",
      "options": [
       "x > 0",
       "x ≤ 0",
       "x ≥ 0",
       "mọi x"
      ],
      "answer": 2,
      "explain": "Biểu thức dưới dấu căn không âm."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "∛(−27) bằng:",
      "options": [
       "−3",
       "3",
       "−9",
       "Không xác định"
      ],
      "answer": 0,
      "explain": "(−3)<sup>3</sup> = −27; căn bậc ba của số âm là số âm.",
      "calc": "Math.cbrt(-27)"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Trong tam giác vuông, sin của góc nhọn α bằng:",
      "options": [
       "cạnh kề : cạnh huyền",
       "cạnh đối : cạnh kề",
       "cạnh kề : cạnh đối",
       "cạnh đối : cạnh huyền"
      ],
      "answer": 3,
      "explain": "Định nghĩa tỉ số lượng giác."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "sin 30° bằng:",
      "options": [
       "{{√3|2}}",
       "{{√2|2}}",
       "1",
       "{{1|2}}"
      ],
      "answer": 3,
      "explain": "Giá trị lượng giác của góc đặc biệt.",
      "calc": "Math.sin(Math.PI/6)"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Đường tròn tâm O bán kính R là tập hợp các điểm:",
      "options": [
       "cách O một khoảng nhỏ hơn R",
       "cách O một khoảng bằng R",
       "nằm trên một đường thẳng qua O",
       "cách O một khoảng bằng 2R"
      ],
      "answer": 1,
      "explain": "Định nghĩa đường tròn."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Đường thẳng a và đường tròn (O; R) tiếp xúc nhau khi khoảng cách d từ O đến a thoả mãn:",
      "options": [
       "d < R",
       "d = R",
       "d > R",
       "d = 2R"
      ],
      "answer": 1,
      "explain": "Tiếp xúc ⇔ d = R."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Nghiệm của bất phương trình x − 3 > 0 là:",
      "options": [
       "x > 3",
       "x < 3",
       "x > −3",
       "x < −3"
      ],
      "answer": 0,
      "explain": "x > 3."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "√12 · √3 bằng:",
      "options": [
       "36",
       "√15",
       "6",
       "3"
      ],
      "answer": 2,
      "explain": "√(12 · 3) = √36 = 6.",
      "calc": "Math.sqrt(36)"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "√(1 − √2)<sup>2</sup> bằng:",
      "options": [
       "√2 − 1",
       "1 − √2",
       "1 + √2",
       "−1"
      ],
      "answer": 0,
      "explain": "√A<sup>2</sup> = |A|; 1 − √2 < 0 nên kết quả là √2 − 1."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác vuông có cạnh huyền 10 cm, một góc nhọn 30°. Cạnh đối diện góc 30° dài:",
      "options": [
       "10 cm",
       "5√3 cm",
       "20 cm",
       "5 cm"
      ],
      "answer": 3,
      "explain": "10 · sin 30° = 5.",
      "calc": "10*Math.sin(Math.PI/6)"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Độ dài cung 60° của đường tròn bán kính 6 cm là:",
      "options": [
       "6π cm",
       "π cm",
       "2π cm",
       "12π cm"
      ],
      "answer": 2,
      "explain": "l = {{πRn|180}} = {{π · 6 · 60|180}} = 2π (cm)."
     }
    ],
    "tf": [
     {
      "topic": "t2",
      "q": "Cho A = √50 − √18 + √8.",
      "items": [
       {
        "s": "√50 = 5√2.",
        "answer": true,
        "level": "B",
        "explain": "√(25 · 2) = 5√2.",
        "check": "Math.abs(Math.sqrt(50)-5*Math.SQRT2)<1e-9"
       },
       {
        "s": "√18 = 9√2.",
        "answer": false,
        "level": "B",
        "explain": "√18 = 3√2.",
        "check": "Math.abs(Math.sqrt(18)-9*Math.SQRT2)<1e-9"
       },
       {
        "s": "A = 4√2.",
        "answer": true,
        "level": "H",
        "explain": "5√2 − 3√2 + 2√2 = 4√2.",
        "check": "Math.abs(Math.sqrt(50)-Math.sqrt(18)+Math.sqrt(8)-4*Math.SQRT2)<1e-9"
       },
       {
        "s": "A > 6.",
        "answer": false,
        "level": "H",
        "explain": "4√2 = √32 < √36 = 6.",
        "check": "Math.sqrt(50)-Math.sqrt(18)+Math.sqrt(8)>6"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Tam giác ABC vuông tại A có AB = 3 cm, AC = 4 cm.",
      "items": [
       {
        "s": "BC = 5 cm.",
        "answer": true,
        "level": "B",
        "explain": "√(9 + 16) = 5.",
        "check": "Math.sqrt(9+16)===5"
       },
       {
        "s": "sin B = {{3|5}}.",
        "answer": false,
        "level": "B",
        "explain": "sin B = {{AC|BC}} = {{4|5}}.",
        "check": "4/5===3/5"
       },
       {
        "s": "tan C = {{3|4}}.",
        "answer": true,
        "level": "H",
        "explain": "tan C = {{AB|AC}} = {{3|4}}.",
        "check": "3/4===0.75"
       },
       {
        "s": "Đường tròn đường kính BC đi qua A và có bán kính 2,5 cm.",
        "answer": true,
        "level": "V",
        "explain": "Trung điểm BC cách đều ba đỉnh của tam giác vuông; bán kính BC : 2 = 2,5 cm.",
        "check": "5/2===2.5"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Tính: √16 + ∛8.",
      "answer": "6",
      "explain": "4 + 2 = 6.",
      "calc": "Math.sqrt(16)+Math.cbrt(8)"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác vuông có cạnh huyền 8 cm, một góc nhọn 60°. Tính cạnh kề với góc 60° đó (cm).",
      "answer": "4",
      "explain": "8 · cos 60° = 4.",
      "calc": "8*Math.cos(Math.PI/3)",
      "unit": "cm"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Tính diện tích hình quạt tròn bán kính 6 cm, góc ở tâm 90° (làm tròn đến hàng phần mười, đơn vị cm²).",
      "answer": "28.3",
      "explain": "S = {{πR²n|360}} = 9π ≈ 28,27 ≈ 28,3 (cm²).",
      "calc": "Math.round(Math.PI*36*90/360*10)/10",
      "unit": "cm²",
      "answerText": "28,3"
     },
     {
      "level": "V",
      "topic": "t3",
      "q": "Bóng của một cột cờ trên mặt đất dài 12 m, tia nắng tạo với mặt đất góc 35°. Tính chiều cao cột cờ (làm tròn đến hàng đơn vị, mét).",
      "answer": "8",
      "explain": "h = 12 · tan 35° ≈ 8,40 ≈ 8 (m).",
      "calc": "Math.round(12*Math.tan(35*Math.PI/180))",
      "unit": "m"
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
        "q": "Tính: 2√3 + √27 − √12.",
        "answer": "2√3 + 3√3 − 2√3 = 3√3.",
        "rubric": [
         [
          "Đưa √27 = 3√3, √12 = 2√3",
          0.25
         ],
         [
          "Kết quả 3√3",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Rút gọn B = {{x|√x − 1}} − {{√x|√x − 1}} với x ≥ 0, x ≠ 1.",
        "answer": "B = {{x − √x|√x − 1}} = {{√x(√x − 1)|√x − 1}} = √x.",
        "rubric": [
         [
          "Trừ hai phân thức cùng mẫu",
          0.25
         ],
         [
          "Đặt nhân tử chung √x",
          0.25
         ],
         [
          "Rút gọn B = √x",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Cho đường tròn (O; 5 cm) và dây AB = 8 cm.",
      "parts": [
       {
        "level": "V",
        "points": 0.75,
        "q": "Tính khoảng cách từ O đến dây AB.",
        "answer": "Kẻ OH ⊥ AB thì H là trung điểm AB, AH = 4 cm. Trong tam giác vuông OHA: OH = √(5<sup>2</sup> − 4<sup>2</sup>) = 3 (cm).",
        "rubric": [
         [
          "Kẻ OH ⊥ AB, H là trung điểm",
          0.25
         ],
         [
          "AH = 4 cm",
          0.25
         ],
         [
          "OH = 3 cm",
          0.25
         ]
        ],
        "calc": "Math.sqrt(25-16)"
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Xác định vị trí tương đối của đường thẳng AB và đường tròn (O; 3 cm).",
        "answer": "Khoảng cách từ O đến AB bằng 3 cm, bằng bán kính, nên AB tiếp xúc với (O; 3 cm).",
        "rubric": [
         [
          "So sánh d = 3 với R = 3",
          0.25
         ],
         [
          "Kết luận tiếp xúc",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Bài toán chứng minh.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Cho góc nhọn α. Chứng minh sin<sup>2</sup>α + cos<sup>2</sup>α = 1.",
        "answer": "Xét tam giác vuông có góc nhọn α, cạnh đối a, cạnh kề b, cạnh huyền c. sin<sup>2</sup>α + cos<sup>2</sup>α = {{a² + b²|c²}} = 1 (Pythagore).",
        "rubric": [
         [
          "Viết sin α, cos α theo cạnh",
          0.25
         ],
         [
          "Dùng Pythagore kết luận",
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
   "id": "giua-ki-2",
   "name": "Giữa học kì 2",
   "scope": "Chương VI – VII (Bài 18 – Bài 24): hàm số y = ax², phương trình bậc hai, tần số.",
   "review": {
    "sections": [
     {
      "chapter": "c6",
      "title": "Chương VI. Hàm số y = ax² và phương trình bậc hai",
      "points": [
       "Đồ thị y = ax<sup>2</sup> là parabol đỉnh O, đối xứng qua trục tung; a > 0 nằm trên, a < 0 nằm dưới trục hoành.",
       "Phương trình ax<sup>2</sup> + bx + c = 0 (a ≠ 0): Δ = b<sup>2</sup> − 4ac. Δ > 0: hai nghiệm {{−b ± √Δ|2a}}; Δ = 0: nghiệm kép; Δ < 0: vô nghiệm. Có thể dùng Δ' với b = 2b'.",
       "Viète: x<sub>1</sub> + x<sub>2</sub> = −{{b|a}}; x<sub>1</sub>x<sub>2</sub> = {{c|a}}. Nếu a + b + c = 0 thì có nghiệm 1 và {{c|a}}.",
       "Giải bài toán bằng cách lập phương trình bậc hai: nhớ loại nghiệm không thoả điều kiện."
      ]
     },
     {
      "chapter": "c7",
      "title": "Chương VII. Tần số và tần số tương đối",
      "points": [
       "Bảng tần số, biểu đồ tần số (cột, đoạn thẳng).",
       "Tần số tương đối = tần số : tổng số dữ liệu; biểu đồ tần số tương đối (cột, hình quạt).",
       "Ghép nhóm số liệu: các nhóm [a; b); tần số và tần số tương đối ghép nhóm; biểu đồ tần số ghép nhóm."
      ]
     }
    ],
    "mistakes": [
     "Dùng Viète khi phương trình không có nghiệm.",
     "Quên loại nghiệm âm trong bài toán thực tế.",
     "Nhầm tần số với tần số tương đối."
    ],
    "forms": [
     "Xác định hệ số a của y = ax<sup>2</sup>.",
     "Giải phương trình bậc hai; dùng Viète tính biểu thức đối xứng.",
     "Bài toán lập phương trình bậc hai.",
     "Lập bảng tần số, tần số tương đối."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c6",
      "content": "Hàm số y = ax² (a ≠ 0) và đồ thị",
      "yccd": {
       "B": "Nhận biết điểm thuộc đồ thị, tính chất đồ thị.",
       "H": "Tìm hệ số a.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c6",
      "content": "Phương trình bậc hai một ẩn; định lí Viète; giải bài toán bằng cách lập phương trình",
      "yccd": {
       "B": "Nhận biết phương trình bậc hai, biệt thức, tổng nghiệm.",
       "H": "Giải phương trình; dùng Viète.",
       "V": "Giải bài toán bằng cách lập phương trình bậc hai; điều kiện nghiệm kép."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c7",
      "content": "Bảng tần số, biểu đồ tần số",
      "yccd": {
       "B": "Nhận biết tần số.",
       "H": "",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c7",
      "content": "Tần số tương đối; ghép nhóm",
      "yccd": {
       "B": "Nhận biết tần số tương đối.",
       "H": "Tính tần số tương đối.",
       "V": "Phân tích dữ liệu ghép nhóm."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Đồ thị hàm số y = 2x<sup>2</sup> đi qua điểm:",
      "options": [
       "(1; −2)",
       "(1; 2)",
       "(2; 4)",
       "(−1; −2)"
      ],
      "answer": 1,
      "explain": "2 · 1<sup>2</sup> = 2."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Với a > 0, đồ thị hàm số y = ax<sup>2</sup>:",
      "options": [
       "nằm phía trên trục hoành, đỉnh là gốc toạ độ",
       "nằm phía dưới trục hoành",
       "là một đường thẳng",
       "không đi qua gốc toạ độ"
      ],
      "answer": 0,
      "explain": "y = ax<sup>2</sup> ≥ 0 khi a > 0."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Phương trình nào là phương trình bậc hai một ẩn?",
      "options": [
       "2x − 3 = 0",
       "x<sup>2</sup> − 3x + 2 = 0",
       "0x<sup>2</sup> + x = 1",
       "{{1|x<sup>2</sup>}} = 4"
      ],
      "answer": 1,
      "explain": "Dạng ax<sup>2</sup> + bx + c = 0 với a ≠ 0."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Biệt thức Δ của phương trình x<sup>2</sup> − 4x + 3 = 0 là:",
      "options": [
       "16",
       "28",
       "4",
       "−4"
      ],
      "answer": 2,
      "explain": "Δ = (−4)<sup>2</sup> − 4 · 1 · 3 = 4.",
      "calc": "16-12"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Nếu x<sub>1</sub>, x<sub>2</sub> là nghiệm của x<sup>2</sup> − 5x + 6 = 0 thì x<sub>1</sub> + x<sub>2</sub> bằng:",
      "options": [
       "−5",
       "6",
       "5",
       "−6"
      ],
      "answer": 2,
      "explain": "Viète: x<sub>1</sub> + x<sub>2</sub> = −{{b|a}} = 5.",
      "calc": "5"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Tần số của một giá trị là:",
      "options": [
       "số lần giá trị đó xuất hiện trong mẫu dữ liệu",
       "giá trị lớn nhất",
       "tổng các giá trị",
       "tỉ lệ phần trăm của giá trị"
      ],
      "answer": 0,
      "explain": "Định nghĩa tần số."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Tần số tương đối của một giá trị bằng:",
      "options": [
       "tần số nhân tổng số dữ liệu",
       "tổng số dữ liệu chia tần số",
       "giá trị chia tần số",
       "tần số của giá trị đó chia cho tổng số dữ liệu"
      ],
      "answer": 3,
      "explain": "f = {{m|n}} (thường viết dạng %)."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Trong dãy dữ liệu 3; 5; 3; 7; 3, tần số của giá trị 3 là:",
      "options": [
       "5",
       "1",
       "2",
       "3"
      ],
      "answer": 3,
      "explain": "Giá trị 3 xuất hiện 3 lần.",
      "calc": "[3,5,3,7,3].filter(function(v){return v===3}).length"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Nghiệm của phương trình x<sup>2</sup> − 9 = 0 là:",
      "options": [
       "x = 3",
       "x = 3 hoặc x = −3",
       "x = 9",
       "x = −9"
      ],
      "answer": 1,
      "explain": "x<sup>2</sup> = 9."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Nếu x<sub>1</sub>, x<sub>2</sub> là nghiệm của 2x<sup>2</sup> + 3x − 8 = 0 thì x<sub>1</sub> · x<sub>2</sub> bằng:",
      "options": [
       "4",
       "−8",
       "−4",
       "{{−3|2}}"
      ],
      "answer": 2,
      "explain": "x<sub>1</sub>x<sub>2</sub> = {{c|a}} = −4 (a, c trái dấu nên phương trình có hai nghiệm).",
      "calc": "-8/2"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Đồ thị hàm số y = ax<sup>2</sup> đi qua điểm (2; 8). Giá trị của a là:",
      "options": [
       "4",
       "−2",
       "{{1|2}}",
       "2"
      ],
      "answer": 3,
      "explain": "8 = a · 4 ⇒ a = 2.",
      "calc": "8/4"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Lớp 9A có 40 học sinh, 10 bạn đạt điểm 9. Tần số tương đối của điểm 9 là:",
      "options": [
       "25%",
       "10%",
       "40%",
       "4%"
      ],
      "answer": 0,
      "explain": "10 : 40 = 25%.",
      "calc": "10/40*100"
     }
    ],
    "tf": [
     {
      "topic": "t2",
      "q": "Cho phương trình x<sup>2</sup> − 6x + 5 = 0.",
      "items": [
       {
        "s": "Các hệ số là a = 1, b = −6, c = 5.",
        "answer": true,
        "level": "B",
        "explain": "Đọc theo dạng ax<sup>2</sup> + bx + c = 0.",
        "check": "(function(){var a=1,b=-6,c=5;return a+b+c===0&&1-6+5===0&&25-30+5===0})()"
       },
       {
        "s": "Δ = 56.",
        "answer": false,
        "level": "B",
        "explain": "Δ = 36 − 20 = 16.",
        "check": "36-20===56"
       },
       {
        "s": "Phương trình có hai nghiệm 1 và 5.",
        "answer": true,
        "level": "H",
        "explain": "a + b + c = 0 ⇒ x<sub>1</sub> = 1, x<sub>2</sub> = {{c|a}} = 5.",
        "check": "1-6+5===0&&25-30+5===0"
       },
       {
        "s": "x<sub>1</sub><sup>2</sup> + x<sub>2</sub><sup>2</sup> = 36.",
        "answer": false,
        "level": "H",
        "explain": "1 + 25 = 26.",
        "check": "1+25===36"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Điểm kiểm tra của 20 học sinh: điểm 6 có 3 bạn, điểm 7 có 5 bạn, điểm 8 có 8 bạn, điểm 9 có 4 bạn.",
      "items": [
       {
        "s": "Tần số của điểm 8 là 8.",
        "answer": true,
        "level": "B",
        "explain": "Có 8 bạn được điểm 8."
       },
       {
        "s": "Mẫu dữ liệu có 4 giá trị khác nhau.",
        "answer": true,
        "level": "B",
        "explain": "6; 7; 8; 9."
       },
       {
        "s": "Tần số tương đối của điểm 7 là 20%.",
        "answer": false,
        "level": "H",
        "explain": "5 : 20 = 25%.",
        "check": "5/20*100===20"
       },
       {
        "s": "Số bạn đạt từ 8 điểm trở lên chiếm 60%.",
        "answer": true,
        "level": "V",
        "explain": "(8 + 4) : 20 = 60%.",
        "check": "(8+4)/20*100===60"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Cho hàm số y = −x<sup>2</sup>. Tính y tại x = 3.",
      "answer": "-9",
      "explain": "y = −9.",
      "calc": "-9",
      "answerText": "−9"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Tính tổng các nghiệm của phương trình x<sup>2</sup> + 4x − 21 = 0.",
      "answer": "-4",
      "explain": "a, c trái dấu nên có hai nghiệm; Viète: x<sub>1</sub> + x<sub>2</sub> = −4 (hai nghiệm là 3 và −7).",
      "calc": "3+(-7)",
      "answerText": "−4"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng 3 m và diện tích 70 m². Tính chiều rộng (m).",
      "answer": "7",
      "explain": "x(x + 3) = 70 ⇒ x<sup>2</sup> + 3x − 70 = 0 ⇒ x = 7 (loại −10).",
      "calc": "(-3+Math.sqrt(9+280))/2",
      "unit": "m"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Một mẫu gồm 50 số liệu chiều cao, nhóm [150; 155) có tần số 12. Tính tần số tương đối của nhóm này (%).",
      "answer": "24",
      "explain": "12 : 50 = 24%.",
      "calc": "12/50*100",
      "unit": "%"
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
        "q": "Giải phương trình x<sup>2</sup> − 7x + 10 = 0.",
        "answer": "Δ = 49 − 40 = 9; x = {{7 ± 3|2}} ⇒ x = 5 hoặc x = 2.",
        "rubric": [
         [
          "Tính Δ = 9",
          0.25
         ],
         [
          "Hai nghiệm 5 và 2",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Phương trình x<sup>2</sup> − 3x − 1 = 0 có hai nghiệm x<sub>1</sub>, x<sub>2</sub>. Không giải phương trình, tính x<sub>1</sub><sup>2</sup> + x<sub>2</sub><sup>2</sup>.",
        "answer": "Viète: S = 3, P = −1. x<sub>1</sub><sup>2</sup> + x<sub>2</sub><sup>2</sup> = S<sup>2</sup> − 2P = 9 + 2 = 11.",
        "rubric": [
         [
          "Viết đúng S = 3, P = −1",
          0.25
         ],
         [
          "Biến đổi về S<sup>2</sup> − 2P",
          0.25
         ],
         [
          "Kết quả 11",
          0.25
         ]
        ],
        "calc": "(function(){var d=Math.sqrt(13),a=(3+d)/2,b=(3-d)/2;return a*a+b*b})()"
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Một đội xe cần chở 120 tấn hàng. Nếu đội có thêm 2 xe thì mỗi xe chở ít hơn 2 tấn so với dự định (khối lượng mỗi xe chở như nhau).",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Tính số xe ban đầu của đội.",
        "answer": "Gọi số xe là x (x nguyên dương). {{120|x}} − {{120|x + 2}} = 2 ⇔ 240 = 2x(x + 2) ⇔ x<sup>2</sup> + 2x − 120 = 0 ⇔ x = 10 hoặc x = −12 (loại). Đội có 10 xe.",
        "rubric": [
         [
          "Gọi ẩn, điều kiện",
          0.25
         ],
         [
          "Lập phương trình",
          0.25
         ],
         [
          "Đưa về x<sup>2</sup> + 2x − 120 = 0",
          0.25
         ],
         [
          "Giải được x = 10, loại nghiệm âm",
          0.25
         ],
         [
          "Kết luận",
          0.25
         ]
        ],
        "calc": "120/10-120/12"
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Bài toán tham số.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Tìm m để phương trình x<sup>2</sup> − 2x + m = 0 có nghiệm kép và tìm nghiệm kép đó.",
        "answer": "Δ' = 1 − m = 0 ⇔ m = 1. Nghiệm kép x = 1.",
        "rubric": [
         [
          "Δ' = 1 − m = 0 ⇒ m = 1",
          0.25
         ],
         [
          "Nghiệm kép x = 1",
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
   "scope": "Chương VI – X (Bài 18 – Bài 32), trọng tâm Chương VIII (xác suất), IX (đường tròn ngoại tiếp, nội tiếp), X (hình trụ, nón, cầu).",
   "review": {
    "sections": [
     {
      "chapter": "c6",
      "title": "Ôn nhanh Chương VI – VII",
      "points": [
       "Hàm số y = ax<sup>2</sup>; phương trình bậc hai, Viète; bài toán lập phương trình.",
       "Tần số, tần số tương đối, ghép nhóm."
      ]
     },
     {
      "chapter": "c8",
      "title": "Chương VIII. Xác suất của biến cố trong một số mô hình đơn giản",
      "points": [
       "Phép thử ngẫu nhiên, không gian mẫu Ω (liệt kê hoặc lập bảng).",
       "Khi các kết quả đồng khả năng: P(A) = {{n(A)|n(Ω)}}."
      ]
     },
     {
      "chapter": "c9",
      "title": "Chương IX. Đường tròn ngoại tiếp và đường tròn nội tiếp",
      "points": [
       "Góc nội tiếp bằng nửa số đo cung bị chắn; các góc nội tiếp cùng chắn một cung thì bằng nhau; góc nội tiếp chắn nửa đường tròn là góc vuông.",
       "Tam giác vuông: tâm đường tròn ngoại tiếp là trung điểm cạnh huyền. Tam giác đều cạnh a: R = {{a√3|3}}, r = {{a√3|6}}.",
       "Tứ giác nội tiếp ⇔ tổng hai góc đối bằng 180°.",
       "Đa giác đều n cạnh: mỗi góc bằng {{(n − 2) · 180°|n}}."
      ]
     },
     {
      "chapter": "c10",
      "title": "Chương X. Một số hình khối trong thực tiễn",
      "points": [
       "Hình trụ: S<sub>xq</sub> = 2πrh; V = πr<sup>2</sup>h.",
       "Hình nón: S<sub>xq</sub> = πrl; V = {{1|3}}πr<sup>2</sup>h.",
       "Hình cầu: S = 4πR<sup>2</sup>; V = {{4|3}}πR<sup>3</sup>."
      ]
     }
    ],
    "mistakes": [
     "Nhầm góc nội tiếp với góc ở tâm.",
     "Đếm thiếu kết quả của không gian mẫu (SN và NS khác nhau).",
     "Quên hệ số {{1|3}} khi tính thể tích hình nón."
    ],
    "forms": [
     "Tính xác suất bằng không gian mẫu.",
     "Tính góc nội tiếp, chứng minh tứ giác nội tiếp.",
     "Tính diện tích, thể tích hình trụ, nón, cầu."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c6",
      "content": "Phương trình bậc hai một ẩn",
      "yccd": {
       "B": "Nhận biết biệt thức.",
       "H": "Giải phương trình bậc hai.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c8",
      "content": "Phép thử, không gian mẫu; xác suất của biến cố",
      "yccd": {
       "B": "Xác định không gian mẫu.",
       "H": "Tính xác suất.",
       "V": "Bài toán xác suất có nhiều bước."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c9",
      "content": "Góc nội tiếp; đường tròn ngoại tiếp, nội tiếp; tứ giác nội tiếp; đa giác đều",
      "yccd": {
       "B": "Nhận biết góc nội tiếp, tính chất tứ giác nội tiếp, đa giác đều.",
       "H": "Tính góc nội tiếp, góc của tứ giác nội tiếp.",
       "V": "Chứng minh tứ giác nội tiếp, tính góc."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c10",
      "content": "Hình trụ, hình nón, hình cầu",
      "yccd": {
       "B": "Nhận biết công thức thể tích, diện tích.",
       "H": "Tính thể tích hình nón.",
       "V": "Bài toán thực tế về diện tích mặt cầu, thể tích."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Gieo hai đồng xu. Không gian mẫu có bao nhiêu phần tử?",
      "options": [
       "2",
       "3",
       "4",
       "8"
      ],
      "answer": 2,
      "explain": "SS, SN, NS, NN.",
      "calc": "2*2"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Gieo một con xúc xắc hai lần liên tiếp. Không gian mẫu có bao nhiêu phần tử?",
      "options": [
       "12",
       "6",
       "36",
       "18"
      ],
      "answer": 2,
      "explain": "6 · 6 = 36.",
      "calc": "6*6"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Góc nội tiếp chắn nửa đường tròn là:",
      "options": [
       "góc nhọn",
       "góc vuông",
       "góc tù",
       "góc bẹt"
      ],
      "answer": 1,
      "explain": "Bằng nửa của 180°."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Trong một tứ giác nội tiếp, tổng hai góc đối bằng:",
      "options": [
       "180°",
       "90°",
       "360°",
       "120°"
      ],
      "answer": 0,
      "explain": "Tính chất tứ giác nội tiếp.",
      "calc": "180"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Mỗi góc của lục giác đều bằng:",
      "options": [
       "60°",
       "108°",
       "120°",
       "135°"
      ],
      "answer": 2,
      "explain": "(6 − 2) · 180° : 6 = 120°.",
      "calc": "(6-2)*180/6"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Thể tích hình trụ bán kính đáy r, chiều cao h là:",
      "options": [
       "2πrh",
       "{{1|3}}πr<sup>2</sup>h",
       "4πr<sup>2</sup>",
       "πr<sup>2</sup>h"
      ],
      "answer": 3,
      "explain": "V = S<sub>đáy</sub> · h."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Diện tích mặt cầu bán kính R là:",
      "options": [
       "{{4|3}}πR<sup>3</sup>",
       "πR<sup>2</sup>",
       "2πR",
       "4πR<sup>2</sup>"
      ],
      "answer": 3,
      "explain": "S = 4πR<sup>2</sup>."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Biệt thức Δ của phương trình x<sup>2</sup> + 2x + 1 = 0 là:",
      "options": [
       "8",
       "0",
       "4",
       "−4"
      ],
      "answer": 1,
      "explain": "Δ = 4 − 4 = 0 (nghiệm kép).",
      "calc": "4-4"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Góc nội tiếp chắn cung có số đo 100°. Số đo góc nội tiếp đó là:",
      "options": [
       "100°",
       "50°",
       "200°",
       "80°"
      ],
      "answer": 1,
      "explain": "Bằng nửa số đo cung bị chắn.",
      "calc": "100/2"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Gieo một con xúc xắc cân đối. Xác suất xuất hiện mặt có số chấm chẵn là:",
      "options": [
       "{{1|3}}",
       "{{1|6}}",
       "{{2|3}}",
       "{{1|2}}"
      ],
      "answer": 3,
      "explain": "Mặt 2, 4, 6: 3 trong 6 kết quả.",
      "calc": "3/6"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Thể tích hình nón có bán kính đáy 3 cm, chiều cao 4 cm là:",
      "options": [
       "12π cm³",
       "36π cm³",
       "48π cm³",
       "4π cm³"
      ],
      "answer": 0,
      "explain": "V = {{1|3}}π · 9 · 4 = 12π (cm³)."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tứ giác ABCD nội tiếp có ∠A = 75°. Số đo ∠C là:",
      "options": [
       "105°",
       "75°",
       "115°",
       "285°"
      ],
      "answer": 0,
      "explain": "∠A + ∠C = 180°.",
      "calc": "180-75"
     }
    ],
    "tf": [
     {
      "topic": "t3",
      "q": "Tam giác ABC nội tiếp đường tròn (O) có ∠BAC = 40°.",
      "items": [
       {
        "s": "∠BAC là góc nội tiếp.",
        "answer": true,
        "level": "B",
        "explain": "Đỉnh A nằm trên đường tròn, hai cạnh chứa hai dây."
       },
       {
        "s": "Số đo cung nhỏ BC là 40°.",
        "answer": false,
        "level": "B",
        "explain": "Số đo cung nhỏ BC bằng 2 · 40° = 80°.",
        "check": "2*40===40"
       },
       {
        "s": "∠BOC = 80°.",
        "answer": true,
        "level": "H",
        "explain": "Góc ở tâm bằng số đo cung bị chắn.",
        "check": "2*40===80"
       },
       {
        "s": "Nếu D là điểm thuộc cung lớn BC (D khác A) thì ∠BDC = 40°.",
        "answer": true,
        "level": "H",
        "explain": "Các góc nội tiếp cùng chắn cung BC thì bằng nhau.",
        "check": "40===40"
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Gieo đồng thời hai đồng xu cân đối.",
      "items": [
       {
        "s": "Không gian mẫu là {SS; SN; NS; NN}.",
        "answer": true,
        "level": "B",
        "explain": "Liệt kê đủ 4 kết quả."
       },
       {
        "s": "Phép thử có 3 kết quả có thể.",
        "answer": false,
        "level": "B",
        "explain": "Có 4 kết quả (SN khác NS).",
        "check": "2*2===3"
       },
       {
        "s": "Xác suất hai đồng xu xuất hiện cùng mặt là {{1|2}}.",
        "answer": true,
        "level": "H",
        "explain": "SS, NN: 2 trong 4.",
        "check": "2/4===0.5"
       },
       {
        "s": "Xác suất có ít nhất một đồng xu ngửa là {{3|4}}.",
        "answer": true,
        "level": "V",
        "explain": "Trừ trường hợp SS: 3 trong 4.",
        "check": "3/4===0.75"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t4",
      "q": "Hình trụ có bán kính đáy 2 cm, chiều cao 5 cm có thể tích bằng kπ cm³. Tìm k.",
      "answer": "20",
      "explain": "V = π · 4 · 5 = 20π.",
      "calc": "4*5"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Tìm nghiệm lớn hơn của phương trình x<sup>2</sup> − 5x + 4 = 0.",
      "answer": "4",
      "explain": "a + b + c = 0 ⇒ nghiệm 1 và 4.",
      "calc": "(5+Math.sqrt(25-16))/2"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Một quả bóng hình cầu bán kính 10 cm. Tính diện tích mặt quả bóng (lấy π ≈ 3,14; làm tròn đến hàng đơn vị, cm²).",
      "answer": "1256",
      "explain": "S = 4 · 3,14 · 100 = 1 256 (cm²).",
      "calc": "Math.round(4*3.14*100)",
      "unit": "cm²"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Hộp có 3 thẻ ghi số 1; 2; 3. Rút ngẫu nhiên lần lượt 2 thẻ (không hoàn lại). Tính xác suất tổng hai số là số chẵn (viết dạng phân số a/b).",
      "answer": "1/3",
      "explain": "Không gian mẫu 6 kết quả có thứ tự; tổng chẵn: (1; 3), (3; 1). Xác suất {{2|6}} = {{1|3}}.",
      "calc": "(function(){var c=0,n=0;for(var a=1;a<=3;a++)for(var b=1;b<=3;b++)if(a!==b){n++;if((a+b)%2===0)c++}return c/n})()"
     }
    ],
    "essay": [
     {
      "topic": "t1",
      "q": "Giải các phương trình sau.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "2x<sup>2</sup> − 8 = 0.",
        "answer": "x<sup>2</sup> = 4 ⇒ x = 2 hoặc x = −2.",
        "rubric": [
         [
          "x<sup>2</sup> = 4",
          0.25
         ],
         [
          "x = ±2",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "x<sup>2</sup> + 2x − 15 = 0.",
        "answer": "Δ' = 1 + 15 = 16; x = −1 ± 4 ⇒ x = 3 hoặc x = −5.",
        "rubric": [
         [
          "Tính Δ' = 16 (hoặc Δ = 64)",
          0.25
         ],
         [
          "x = 3",
          0.25
         ],
         [
          "x = −5",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Từ điểm A nằm ngoài đường tròn (O), kẻ hai tiếp tuyến AB, AC (B, C là tiếp điểm).",
      "parts": [
       {
        "level": "V",
        "points": 0.75,
        "q": "Chứng minh tứ giác ABOC nội tiếp.",
        "answer": "AB ⊥ OB, AC ⊥ OC (tiếp tuyến vuông góc bán kính) nên ∠ABO = ∠ACO = 90°. Tứ giác ABOC có tổng hai góc đối ∠ABO + ∠ACO = 180° nên nội tiếp.",
        "rubric": [
         [
          "∠ABO = 90°",
          0.25
         ],
         [
          "∠ACO = 90°",
          0.25
         ],
         [
          "Tổng hai góc đối 180°, kết luận",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Biết ∠BAC = 50°, tính ∠BOC.",
        "answer": "∠BOC = 360° − 90° − 90° − 50° = 130° (hoặc ∠BOC = 180° − ∠BAC).",
        "rubric": [
         [
          "Lập luận tổng góc / hai góc đối",
          0.25
         ],
         [
          "∠BOC = 130°",
          0.25
         ]
        ],
        "calc": "180-50"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Bài toán thực tế.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Một cốc hình trụ và một cốc hình nón có cùng bán kính đáy 4 cm và cùng chiều cao 10 cm. Cốc trụ đựng đầy nước. Đổ nước sang cốc nón thì được đầy bao nhiêu cốc nón?",
        "answer": "V<sub>trụ</sub> = πr<sup>2</sup>h, V<sub>nón</sub> = {{1|3}}πr<sup>2</sup>h nên V<sub>trụ</sub> = 3V<sub>nón</sub>: đầy 3 cốc nón.",
        "rubric": [
         [
          "So sánh hai công thức thể tích",
          0.25
         ],
         [
          "Kết luận 3 cốc",
          0.25
         ]
        ],
        "calc": "(Math.PI*16*10)/(Math.PI*16*10/3)"
       }
      ]
     }
    ]
   }
  }
 ]
});
