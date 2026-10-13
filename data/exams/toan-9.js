/* Toán 9 – Ôn tập và đề kiểm tra định kì theo cấu trúc CV 7991/BGDĐT-GDTrH. Nội dung do nhóm biên soạn tự viết. */
THCS.registerExams("toan-9", {
 "split": "Nội dung được chia theo thứ tự bài học SGK Toán 9 “Kết nối tri thức với cuộc sống” và tiến độ năm học thường dùng (35 tuần: học kì I 18 tuần, học kì II 17 tuần). <b>Giữa kì 1</b> (khoảng tuần 8–9): Chương I – II. <b>Cuối kì 1</b> (khoảng tuần 16–17): Chương I – V, trọng tâm Chương III – V. <b>Giữa kì 2</b> (khoảng tuần 25–26): Chương VI – VII. <b>Cuối kì 2</b> (khoảng tuần 32–33): Chương VI – X, trọng tâm Chương VIII – X. Nhiều trường dạy song song mạch Đại số và mạch Hình học nên phạm vi thật có thể khác một chút – em nên hỏi thầy cô phạm vi chính thức của trường mình.",
 "checkpoints": [
  {
   "id": "giua-ki-1",
   "name": "Giữa học kì 1",
   "scope": "Chương I – II (Bài 1 – Bài 6): hệ phương trình bậc nhất hai ẩn, phương trình và bất phương trình bậc nhất một ẩn.",
   "review": {
    "sections": [
     {
      "chapter": "c1",
      "title": "Chương I. Phương trình và hệ hai phương trình bậc nhất hai ẩn",
      "points": [
       "Phương trình bậc nhất hai ẩn ax + by = c có vô số nghiệm; tập nghiệm biểu diễn bởi một đường thẳng.",
       "Hệ hai phương trình: giải bằng phương pháp thế hoặc cộng đại số.",
       "Giải bài toán bằng cách lập hệ: chọn hai ẩn, đặt điều kiện, lập hai phương trình, giải, đối chiếu."
      ]
     },
     {
      "chapter": "c2",
      "title": "Chương II. Phương trình và bất phương trình bậc nhất một ẩn",
      "points": [
       "Phương trình tích A · B = 0 ⇔ A = 0 hoặc B = 0.",
       "Phương trình chứa ẩn ở mẫu: tìm ĐKXĐ, quy đồng khử mẫu, giải, đối chiếu ĐKXĐ.",
       "Bất đẳng thức: cộng cùng số giữ chiều; nhân số dương giữ chiều, nhân số âm đổi chiều.",
       "Bất phương trình ax + b > 0 (a ≠ 0): chuyển vế rồi chia cho a, chú ý dấu của a."
      ]
     }
    ],
    "mistakes": [
     "Quên đối chiếu điều kiện xác định của phương trình chứa ẩn ở mẫu.",
     "Nhân/chia bất phương trình với số âm mà không đổi chiều.",
     "Chọn ẩn nhưng không nêu điều kiện, không loại nghiệm."
    ],
    "forms": [
     "Giải hệ phương trình bằng thế, cộng đại số.",
     "Giải bài toán bằng cách lập hệ.",
     "Phương trình tích, chứa ẩn ở mẫu; bất phương trình bậc nhất."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c1",
      "content": "Phương trình và hệ hai phương trình bậc nhất hai ẩn; cách giải",
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
       "H": "Bài toán tổng – hiệu đơn giản.",
       "V": "Lập và giải hệ từ bài toán thực tế."
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
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c2",
      "content": "Bất đẳng thức; bất phương trình bậc nhất một ẩn",
      "yccd": {
       "B": "Nhận biết tính chất bất đẳng thức, bất phương trình bậc nhất.",
       "H": "Giải bất phương trình bậc nhất.",
       "V": "Bài toán thực tế dẫn đến bất phương trình; chứng minh bất đẳng thức."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Cặp số nào sau đây là một nghiệm của phương trình 2x + y = 5?",
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
      "q": "Hệ phương trình { x + y = 3; x − y = 1 } có nghiệm là:",
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
      "q": "Nghiệm của phương trình (x − 2)(x + 3) = 0 là:",
      "options": [
       "x = −2 hoặc x = 3",
       "x = 2",
       "x = −3",
       "x = 2 hoặc x = −3"
      ],
      "answer": 3,
      "explain": "Một tích bằng 0 khi một trong các thừa số bằng 0."
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
      "explain": "Cộng cùng một số vào hai vế, chiều bất đẳng thức không đổi."
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
      "explain": "Nhân với số âm thì đổi chiều bất đẳng thức."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Bất phương trình nào sau đây là bất phương trình bậc nhất một ẩn?",
      "options": [
       "x<sup>2</sup> − 1 > 0",
       "0x + 2 > 0",
       "{{1|x}} > 1",
       "2x − 5 > 0"
      ],
      "answer": 3,
      "explain": "Dạng ax + b > 0 với a ≠ 0."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Nghiệm (x; y) của hệ { 2x + y = 7; x − y = 2 } có x bằng:",
      "options": [
       "3",
       "1",
       "2",
       "4"
      ],
      "answer": 0,
      "explain": "Cộng hai phương trình: 3x = 9.",
      "calc": "9/3"
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
      "calc": "3"
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
      "q": "Cho hệ phương trình { x + 2y = 5; 3x − y = 1 }.",
      "items": [
       {
        "s": "(1; 2) là nghiệm của phương trình thứ nhất.",
        "answer": true,
        "level": "B",
        "explain": "1 + 4 = 5.",
        "check": "1+2*2===5"
       },
       {
        "s": "(1; 2) không phải là nghiệm của phương trình thứ hai.",
        "answer": false,
        "level": "B",
        "explain": "3 − 2 = 1 nên (1; 2) là nghiệm.",
        "check": "!(3*1-2===1)"
       },
       {
        "s": "Hệ có nghiệm duy nhất (1; 2).",
        "answer": true,
        "level": "H",
        "explain": "Hệ số không tỉ lệ (1 : 3 ≠ 2 : (−1)) nên hệ có nghiệm duy nhất; (1; 2) thoả cả hai phương trình.",
        "check": "1/3!==2/(-1)&&1+4===5&&3-2===1"
       },
       {
        "s": "Cộng từng vế hai phương trình ta được 4x + y = 6.",
        "answer": true,
        "level": "H",
        "explain": "(1 + 3)x + (2 − 1)y = 5 + 1.",
        "check": "1+3===4&&2-1===1&&5+1===6"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Cho bất phương trình 2x − 3 ≥ x + 1.",
      "items": [
       {
        "s": "x = 5 là một nghiệm.",
        "answer": true,
        "level": "B",
        "explain": "7 ≥ 6.",
        "check": "2*5-3>=5+1"
       },
       {
        "s": "x = 0 là một nghiệm.",
        "answer": false,
        "level": "B",
        "explain": "−3 ≥ 1 sai.",
        "check": "-3>=1"
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
      "q": "Cho (x; y) là nghiệm của hệ { x + y = 10; x − y = 2 }. Tính x · y.",
      "answer": "24",
      "explain": "x = 6, y = 4 ⇒ xy = 24.",
      "calc": "6*4"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Mua 3 cái bút và 2 quyển vở hết 26 nghìn đồng; mua 1 cái bút và 2 quyển vở hết 18 nghìn đồng. Giá một cái bút là bao nhiêu nghìn đồng?",
      "answer": "4",
      "explain": "3b + 2v = 26; b + 2v = 18 ⇒ 2b = 8 ⇒ b = 4.",
      "calc": "(26-18)/2",
      "unit": "nghìn đồng"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Giá cước taxi: 15 000 đồng khi lên xe và 12 000 đồng mỗi ki-lô-mét. Với 100 000 đồng, một người đi được nhiều nhất bao nhiêu ki-lô-mét (số nguyên)?",
      "answer": "7",
      "explain": "15 000 + 12 000x ≤ 100 000 ⇒ x ≤ 7,08… ⇒ nhiều nhất 7 km.",
      "calc": "Math.floor((100000-15000)/12000)",
      "unit": "km"
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
        "q": "Giải hệ phương trình { x + y = 5; x − y = 1 }.",
        "answer": "Cộng: 2x = 6 ⇒ x = 3; y = 2. Nghiệm (3; 2).",
        "rubric": [
         [
          "Cộng hai phương trình tìm x = 3",
          0.25
         ],
         [
          "y = 2, kết luận",
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
          "Điều kiện xác định",
          0.25
         ],
         [
          "Khử mẫu, giải x = 5",
          0.25
         ],
         [
          "Đối chiếu, kết luận",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Một mảnh vườn hình chữ nhật có chu vi 34 m. Nếu tăng chiều dài thêm 3 m và chiều rộng thêm 2 m thì diện tích tăng thêm 45 m².",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Tính chiều dài và chiều rộng của mảnh vườn.",
        "answer": "Gọi chiều dài x, chiều rộng y (m), x > y > 0. Ta có x + y = 17 và (x + 3)(y + 2) − xy = 45 ⇔ 2x + 3y = 39. Giải: y = 39 − 2 · 17 = 5, x = 12. Vậy chiều dài 12 m, chiều rộng 5 m.",
        "rubric": [
         [
          "Chọn ẩn, điều kiện",
          0.25
         ],
         [
          "Lập phương trình x + y = 17",
          0.25
         ],
         [
          "Lập 2x + 3y = 39",
          0.25
         ],
         [
          "Giải hệ được x = 12, y = 5",
          0.25
         ],
         [
          "Kết luận",
          0.25
         ]
        ],
        "calc": "39-2*17"
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
        "q": "Chứng minh a<sup>2</sup> + b<sup>2</sup> ≥ 2ab với mọi số thực a, b.",
        "answer": "a<sup>2</sup> + b<sup>2</sup> − 2ab = (a − b)<sup>2</sup> ≥ 0.",
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
       "Hệ hai phương trình bậc nhất hai ẩn; bài toán lập hệ.",
       "Phương trình tích, phương trình chứa ẩn ở mẫu, bất phương trình bậc nhất một ẩn."
      ]
     },
     {
      "chapter": "c3",
      "title": "Chương III. Căn bậc hai và căn bậc ba",
      "points": [
       "√a xác định khi a ≥ 0; √(A<sup>2</sup>) = |A|.",
       "Với A, B ≥ 0: √(AB) = √A · √B; với A ≥ 0, B > 0: √{{A|B}} = {{√A|√B}}.",
       "Đưa thừa số ra ngoài/vào trong dấu căn; trục căn thức ở mẫu; rút gọn biểu thức.",
       "Căn bậc ba ∛a xác định với mọi a; (∛a)<sup>3</sup> = a."
      ]
     },
     {
      "chapter": "c4",
      "title": "Chương IV. Hệ thức lượng trong tam giác vuông",
      "points": [
       "sin = đối/huyền; cos = kề/huyền; tan = đối/kề; cot = kề/đối.",
       "Hai góc phụ nhau: sin góc này bằng cos góc kia.",
       "Cạnh góc vuông = cạnh huyền · sin góc đối = cạnh huyền · cos góc kề = cạnh góc vuông kia · tan góc đối."
      ]
     },
     {
      "chapter": "c5",
      "title": "Chương V. Đường tròn",
      "points": [
       "Đường kính vuông góc với dây thì đi qua trung điểm dây.",
       "Độ dài cung n°: l = {{πRn|180}}; diện tích hình quạt: S = {{πR<sup>2</sup>n|360}}.",
       "Vị trí của đường thẳng và đường tròn: cắt (d < R), tiếp xúc (d = R), không giao (d > R). Tiếp tuyến vuông góc với bán kính tại tiếp điểm.",
       "Vị trí tương đối của hai đường tròn theo khoảng cách hai tâm."
      ]
     }
    ],
    "mistakes": [
     "Viết √((1 − √2)<sup>2</sup>) = 1 − √2 (quên giá trị tuyệt đối).",
     "Nhầm sin với cos (đối/kề).",
     "Máy tính để chế độ radian khi tính tỉ số lượng giác của góc theo độ."
    ],
    "forms": [
     "Rút gọn biểu thức chứa căn.",
     "Tính cạnh, góc tam giác vuông; bài toán đo chiều cao.",
     "Khoảng cách từ tâm đến dây; độ dài cung, diện tích hình quạt; tiếp tuyến."
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
      "content": "Căn bậc hai, căn thức bậc hai; căn bậc ba; biến đổi, rút gọn",
      "yccd": {
       "B": "Nhận biết căn bậc hai số học, điều kiện xác định, căn bậc ba.",
       "H": "Khai phương tích; đưa thừa số ra ngoài dấu căn; rút gọn.",
       "V": "Rút gọn biểu thức chứa căn."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c4",
      "content": "Tỉ số lượng giác của góc nhọn; hệ thức giữa cạnh và góc",
      "yccd": {
       "B": "Nhận biết tỉ số lượng giác, giá trị đặc biệt.",
       "H": "Tính cạnh tam giác vuông bằng tỉ số lượng giác.",
       "V": "Giải bài toán đo đạc thực tế; chứng minh hệ thức."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c5",
      "content": "Đường tròn; cung, dây; độ dài cung, diện tích hình quạt; vị trí tương đối",
      "yccd": {
       "B": "Nhận biết đường tròn, vị trí tương đối với đường thẳng.",
       "H": "Tính độ dài cung tròn.",
       "V": "Tính khoảng cách từ tâm đến dây; diện tích hình quạt."
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
      "q": "√x xác định khi:",
      "options": [
       "x > 0",
       "x ≤ 0",
       "x ≥ 0",
       "mọi x"
      ],
      "answer": 2,
      "explain": "Biểu thức dưới dấu căn bậc hai không âm."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "∛(−27) bằng:",
      "options": [
       "−3",
       "3",
       "−9",
       "không xác định"
      ],
      "answer": 0,
      "explain": "(−3)<sup>3</sup> = −27; căn bậc ba có nghĩa với mọi số thực.",
      "calc": "Math.cbrt(-27)"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Trong tam giác vuông, sin của một góc nhọn bằng:",
      "options": [
       "cạnh kề chia cạnh huyền",
       "cạnh đối chia cạnh kề",
       "cạnh kề chia cạnh đối",
       "cạnh đối chia cạnh huyền"
      ],
      "answer": 3,
      "explain": "Định nghĩa sin α."
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
      "explain": "Giá trị lượng giác đặc biệt.",
      "calc": "0.5"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Đường tròn tâm O bán kính R là:",
      "options": [
       "tập hợp các điểm cách O một khoảng nhỏ hơn R",
       "tập hợp các điểm cách O một khoảng bằng R",
       "hình gồm tâm O và bán kính R",
       "tập hợp các điểm cách O một khoảng 2R"
      ],
      "answer": 1,
      "explain": "Định nghĩa đường tròn."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Gọi d là khoảng cách từ tâm O đến đường thẳng a. Đường thẳng a tiếp xúc với đường tròn (O; R) khi:",
      "options": [
       "d < R",
       "d = R",
       "d > R",
       "d = 2R"
      ],
      "answer": 1,
      "explain": "Tiếp xúc khi có đúng một điểm chung, d = R."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Nghiệm của bất phương trình x − 3 > 0 là:",
      "options": [
       "x > 3",
       "x < 3",
       "x > −3",
       "x ≥ 3"
      ],
      "answer": 0,
      "explain": "Chuyển vế."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Kết quả của √12 · √3 là:",
      "options": [
       "36",
       "√15",
       "6",
       "9"
      ],
      "answer": 2,
      "explain": "√(12 · 3) = √36 = 6.",
      "calc": "Math.sqrt(36)"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "√((1 − √2)<sup>2</sup>) bằng:",
      "options": [
       "√2 − 1",
       "1 − √2",
       "1 + √2",
       "3 − 2√2"
      ],
      "answer": 0,
      "explain": "√(A<sup>2</sup>) = |A|; 1 − √2 < 0 nên kết quả là √2 − 1."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác vuông có cạnh huyền 10 cm và một góc nhọn 30°. Cạnh đối diện với góc 30° dài:",
      "options": [
       "10 cm",
       "5√3 cm",
       "20 cm",
       "5 cm"
      ],
      "answer": 3,
      "explain": "10 · sin 30° = 5 (cm).",
      "calc": "10*0.5"
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
        "explain": "Định lí Pythagore.",
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
        "explain": "tan C = {{AB|AC}}.",
        "check": "3/4===0.75"
       },
       {
        "s": "Đường tròn đường kính BC đi qua A và có bán kính 2,5 cm.",
        "answer": true,
        "level": "V",
        "explain": "Tam giác vuông nội tiếp đường tròn đường kính là cạnh huyền; R = 5 : 2.",
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
      "q": "Tam giác vuông có cạnh huyền 8 cm, một góc nhọn 60°. Tính độ dài cạnh kề góc 60° đó (cm).",
      "answer": "4",
      "explain": "8 · cos 60° = 8 · 0,5 = 4.",
      "calc": "8*Math.cos(Math.PI/3)",
      "unit": "cm"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Tính diện tích hình quạt tròn bán kính 6 cm, góc ở tâm 90° (làm tròn đến hàng phần mười, lấy π theo máy tính).",
      "answer": "28.3",
      "explain": "S = {{πR<sup>2</sup>n|360}} = 9π ≈ 28,27 ≈ 28,3 (cm²).",
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
        ],
        "calc": "2*Math.sqrt(3)+Math.sqrt(27)-Math.sqrt(12)"
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Rút gọn B = {{x|√x − 1}} − {{√x|√x − 1}} với x ≥ 0, x ≠ 1.",
        "answer": "B = {{x − √x|√x − 1}} = {{√x(√x − 1)|√x − 1}} = √x.",
        "rubric": [
         [
          "Gộp hai phân thức cùng mẫu",
          0.25
         ],
         [
          "Đặt nhân tử chung √x ở tử",
          0.25
         ],
         [
          "Kết quả B = √x",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Cho đường tròn (O; 5 cm) và dây AB = 8 cm. Gọi H là chân đường vuông góc kẻ từ O đến AB.",
      "parts": [
       {
        "level": "V",
        "points": 0.75,
        "q": "Tính khoảng cách OH từ tâm O đến dây AB.",
        "answer": "Đường kính vuông góc với dây đi qua trung điểm của dây: HA = 4 cm. Trong tam giác vuông OHA: OH<sup>2</sup> = 5<sup>2</sup> − 4<sup>2</sup> = 9 ⇒ OH = 3 cm.",
        "rubric": [
         [
          "HA = AB : 2 = 4 cm",
          0.25
         ],
         [
          "Áp dụng Pythagore",
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
        "answer": "Khoảng cách từ O đến AB bằng 3 cm = bán kính nên AB tiếp xúc với đường tròn (O; 3 cm) tại H.",
        "rubric": [
         [
          "So sánh d = 3 với R = 3",
          0.25
         ],
         [
          "Kết luận tiếp xúc tại H",
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
        "q": "Cho α là một góc nhọn. Chứng minh sin<sup>2</sup>α + cos<sup>2</sup>α = 1.",
        "answer": "Xét tam giác ABC vuông tại A có ∠B = α: sin α = {{AC|BC}}, cos α = {{AB|BC}}. Khi đó sin<sup>2</sup>α + cos<sup>2</sup>α = {{AC<sup>2</sup> + AB<sup>2</sup>|BC<sup>2</sup>}} = 1 (định lí Pythagore).",
        "rubric": [
         [
          "Viết sin, cos theo cạnh",
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
      "title": "Chương VI. Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn",
      "points": [
       "Đồ thị y = ax<sup>2</sup> là parabol đỉnh O, nhận Oy làm trục đối xứng; a > 0 hướng lên, a < 0 hướng xuống.",
       "ax<sup>2</sup> + bx + c = 0: Δ = b<sup>2</sup> − 4ac; Δ > 0 hai nghiệm phân biệt x = {{−b ± √Δ|2a}}; Δ = 0 nghiệm kép; Δ < 0 vô nghiệm. Có thể dùng Δ′ khi b = 2b′.",
       "Viète: x<sub>1</sub> + x<sub>2</sub> = −{{b|a}}, x<sub>1</sub>x<sub>2</sub> = {{c|a}}. Nhẩm nghiệm khi a + b + c = 0 hoặc a − b + c = 0.",
       "Giải bài toán bằng cách lập phương trình bậc hai, nhớ loại nghiệm không thoả mãn."
      ]
     },
     {
      "chapter": "c7",
      "title": "Chương VII. Tần số và tần số tương đối",
      "points": [
       "Bảng tần số, biểu đồ tần số (cột, đoạn thẳng).",
       "Tần số tương đối f = {{n|N}} · 100%; biểu đồ tần số tương đối (cột, quạt tròn).",
       "Ghép nhóm số liệu: các nhóm [a; b), tần số và tần số tương đối của nhóm."
      ]
     }
    ],
    "mistakes": [
     "Tính Δ sai dấu khi b âm (b<sup>2</sup> luôn không âm).",
     "Dùng Viète khi phương trình vô nghiệm.",
     "Nhầm tần số với tần số tương đối."
    ],
    "forms": [
     "Vẽ, đọc đồ thị y = ax<sup>2</sup>; tìm a.",
     "Giải phương trình bậc hai, dùng Viète.",
     "Lập bảng tần số, tần số tương đối, ghép nhóm."
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
       "H": "Tìm a khi biết điểm thuộc đồ thị.",
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
       "H": "Giải phương trình bậc hai, tính tích nghiệm.",
       "V": "Bài toán thực tế; điều kiện có nghiệm kép; biểu thức đối xứng."
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
      "content": "Tần số tương đối; bảng tần số ghép nhóm",
      "yccd": {
       "B": "Nhận biết công thức tần số tương đối.",
       "H": "Tính tần số tương đối.",
       "V": "Tính tần số tương đối của nhóm."
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
       "(2; 4)",
       "(1; 2)",
       "(1; 4)",
       "(−1; −2)"
      ],
      "answer": 1,
      "explain": "Với x = 1 thì y = 2."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Với a > 0, đồ thị hàm số y = ax<sup>2</sup>:",
      "options": [
       "nằm phía trên trục hoành, nhận O là điểm thấp nhất",
       "nằm phía dưới trục hoành",
       "là một đường thẳng",
       "không đi qua gốc toạ độ"
      ],
      "answer": 0,
      "explain": "Parabol hướng lên khi a > 0."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Phương trình nào sau đây là phương trình bậc hai một ẩn?",
      "options": [
       "2x + 1 = 0",
       "x<sup>2</sup> − 3x + 2 = 0",
       "0x<sup>2</sup> + x = 1",
       "x<sup>3</sup> = 1"
      ],
      "answer": 1,
      "explain": "Dạng ax<sup>2</sup> + bx + c = 0 với a ≠ 0."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Biệt thức Δ của phương trình x<sup>2</sup> − 4x + 3 = 0 là:",
      "options": [
       "28",
       "16",
       "4",
       "−4"
      ],
      "answer": 2,
      "explain": "Δ = b<sup>2</sup> − 4ac = 16 − 12 = 4.",
      "calc": "16-12"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Phương trình x<sup>2</sup> − 5x + 6 = 0 có hai nghiệm x<sub>1</sub>, x<sub>2</sub>. Tổng x<sub>1</sub> + x<sub>2</sub> bằng:",
      "options": [
       "−5",
       "6",
       "5",
       "−6"
      ],
      "answer": 2,
      "explain": "Theo Viète: x<sub>1</sub> + x<sub>2</sub> = −{{b|a}} = 5.",
      "calc": "5"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Tần số của một giá trị trong mẫu dữ liệu là:",
      "options": [
       "số lần giá trị đó xuất hiện",
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
       "số dữ liệu chia cho tần số",
       "tần số nhân với số dữ liệu",
       "tần số trừ số dữ liệu",
       "tần số của giá trị đó chia cho số dữ liệu"
      ],
      "answer": 3,
      "explain": "f = {{n|N}} (thường viết dạng %)."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Trong dãy dữ liệu 3; 5; 3; 7; 3, tần số của giá trị 3 là:",
      "options": [
       "5",
       "1",
       "15",
       "3"
      ],
      "answer": 3,
      "explain": "Giá trị 3 xuất hiện 3 lần.",
      "calc": "[3,5,3,7,3].filter(function(x){return x===3}).length"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Nghiệm của phương trình x<sup>2</sup> − 9 = 0 là:",
      "options": [
       "x = 3",
       "x = 3 hoặc x = −3",
       "x = 9",
       "x = 9 hoặc x = −9"
      ],
      "answer": 1,
      "explain": "x<sup>2</sup> = 9."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Phương trình 2x<sup>2</sup> + 3x − 8 = 0 có hai nghiệm. Tích hai nghiệm là:",
      "options": [
       "4",
       "{{−3|2}}",
       "−4",
       "−8"
      ],
      "answer": 2,
      "explain": "{{c|a}} = −4 (ac < 0 nên phương trình có hai nghiệm trái dấu).",
      "calc": "-8/2"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Đồ thị hàm số y = ax<sup>2</sup> đi qua điểm (2; 8). Giá trị của a là:",
      "options": [
       "4",
       "8",
       "{{1|2}}",
       "2"
      ],
      "answer": 3,
      "explain": "8 = a · 4.",
      "calc": "8/4"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Lớp có 40 học sinh, trong đó 10 bạn đạt 9 điểm. Tần số tương đối của điểm 9 là:",
      "options": [
       "25%",
       "10%",
       "40%",
       "4%"
      ],
      "answer": 0,
      "explain": "{{10|40}} = 25%.",
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
        "explain": "Đọc trực tiếp."
       },
       {
        "s": "Δ = 56.",
        "answer": false,
        "level": "B",
        "explain": "Δ = 36 − 20 = 16.",
        "check": "36-20===56"
       },
       {
        "s": "Phương trình có hai nghiệm là 1 và 5.",
        "answer": true,
        "level": "H",
        "explain": "x = {{6 ± 4|2}}.",
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
      "topic": "t4",
      "q": "Điểm kiểm tra của 20 học sinh: điểm 6 có 3 bạn, điểm 7 có 5 bạn, điểm 8 có 8 bạn, điểm 9 có 4 bạn.",
      "items": [
       {
        "s": "Tần số của điểm 8 là 8.",
        "answer": true,
        "level": "B",
        "explain": "Có 8 bạn đạt điểm 8."
       },
       {
        "s": "Mẫu dữ liệu có 4 giá trị khác nhau.",
        "answer": true,
        "level": "B",
        "explain": "Các giá trị 6; 7; 8; 9."
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
      "q": "Tính giá trị của hàm số y = −x<sup>2</sup> tại x = 3.",
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
      "explain": "Phương trình có hai nghiệm 3 và −7 (ac < 0); tổng = −4.",
      "calc": "3+(-7)",
      "answerText": "−4"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng 3 m và diện tích 70 m². Tính chiều rộng (m).",
      "answer": "7",
      "explain": "x(x + 3) = 70 ⇔ x<sup>2</sup> + 3x − 70 = 0 ⇒ x = 7 (loại x = −10).",
      "calc": "(-3+Math.sqrt(9+280))/2",
      "unit": "m"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Mẫu số liệu chiều cao của 50 học sinh có nhóm [150; 155) với tần số 12. Tính tần số tương đối của nhóm này (%).",
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
          "Δ = 9",
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
        "answer": "Theo Viète: x<sub>1</sub> + x<sub>2</sub> = 3, x<sub>1</sub>x<sub>2</sub> = −1. Khi đó x<sub>1</sub><sup>2</sup> + x<sub>2</sub><sup>2</sup> = 9 − 2 · (−1) = 11.",
        "rubric": [
         [
          "Viết tổng, tích theo Viète",
          0.25
         ],
         [
          "Biến đổi (x<sub>1</sub> + x<sub>2</sub>)<sup>2</sup> − 2x<sub>1</sub>x<sub>2</sub>",
          0.25
         ],
         [
          "Kết quả 11",
          0.25
         ]
        ],
        "calc": "9+2"
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Một đội xe dự định chở 120 tấn hàng, các xe chở như nhau. Lúc sắp khởi hành, đội được bổ sung thêm 2 xe nên mỗi xe chở ít hơn dự định 2 tấn.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Hỏi lúc đầu đội có bao nhiêu xe?",
        "answer": "Gọi số xe lúc đầu là x (x nguyên dương). Ta có {{120|x}} − {{120|x + 2}} = 2 ⇔ 240 = 2x(x + 2) ⇔ x<sup>2</sup> + 2x − 120 = 0 ⇒ x = 10 (loại x = −12). Lúc đầu có 10 xe.",
        "rubric": [
         [
          "Chọn ẩn, điều kiện",
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
          "Giải, loại nghiệm âm",
          0.25
         ],
         [
          "Kết luận 10 xe",
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
        "answer": "Δ′ = 1 − m = 0 ⇔ m = 1; nghiệm kép x = 1.",
        "rubric": [
         [
          "Δ′ = 0 ⇒ m = 1",
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
       "Hàm số y = ax<sup>2</sup>; phương trình bậc hai, Viète, bài toán lập phương trình.",
       "Bảng tần số, tần số tương đối, ghép nhóm."
      ]
     },
     {
      "chapter": "c8",
      "title": "Chương VIII. Xác suất của biến cố trong một số mô hình đơn giản",
      "points": [
       "Phép thử ngẫu nhiên; không gian mẫu Ω (liệt kê hoặc kẻ bảng khi có hai bước).",
       "Khi các kết quả đồng khả năng: P(A) = {{n(A)|n(Ω)}}."
      ]
     },
     {
      "chapter": "c9",
      "title": "Chương IX. Đường tròn ngoại tiếp và đường tròn nội tiếp",
      "points": [
       "Góc nội tiếp bằng nửa số đo cung bị chắn; góc nội tiếp chắn nửa đường tròn là góc vuông.",
       "Tam giác vuông nội tiếp đường tròn đường kính là cạnh huyền; tâm đường tròn ngoại tiếp tam giác đều là trọng tâm.",
       "Tứ giác nội tiếp: tổng hai góc đối bằng 180°.",
       "Đa giác đều n cạnh: mỗi góc {{(n − 2) · 180°|n}}; phép quay giữ nguyên đa giác đều."
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
     "Liệt kê thiếu phần tử của không gian mẫu (SN và NS là hai kết quả khác nhau).",
     "Nhầm góc nội tiếp với góc ở tâm.",
     "Quên hệ số {{1|3}} trong thể tích hình nón."
    ],
    "forms": [
     "Tính xác suất bằng không gian mẫu.",
     "Tính góc nội tiếp, chứng minh tứ giác nội tiếp.",
     "Diện tích, thể tích hình trụ, nón, cầu."
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
       "B": "Tính biệt thức.",
       "H": "Giải phương trình bậc hai.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c8",
      "content": "Phép thử ngẫu nhiên, không gian mẫu; xác suất của biến cố",
      "yccd": {
       "B": "Nhận biết không gian mẫu.",
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
       "B": "Nhận biết góc nội tiếp, tính chất tứ giác nội tiếp, góc đa giác đều.",
       "H": "Tính số đo góc.",
       "V": "Chứng minh tứ giác nội tiếp và tính góc."
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
       "V": "Bài toán thực tế về thể tích, diện tích."
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
      "explain": "SS; SN; NS; NN.",
      "calc": "2*2"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Gieo một con xúc xắc hai lần liên tiếp. Số phần tử của không gian mẫu là:",
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
      "explain": "Hệ quả của định lí góc nội tiếp."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Trong tứ giác nội tiếp, tổng hai góc đối bằng:",
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
      "explain": "Công thức diện tích mặt cầu."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Biệt thức Δ của phương trình x<sup>2</sup> + 2x + 1 = 0 bằng:",
      "options": [
       "8",
       "0",
       "4",
       "−4"
      ],
      "answer": 1,
      "explain": "Δ = 4 − 4 = 0: nghiệm kép.",
      "calc": "4-4"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Góc nội tiếp chắn cung có số đo 100° có số đo là:",
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
      "explain": "3 kết quả thuận lợi (2; 4; 6) trên 6.",
      "calc": "3/6"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Hình nón có bán kính đáy 3 cm, chiều cao 4 cm. Thể tích là:",
      "options": [
       "12π cm³",
       "36π cm³",
       "15π cm³",
       "4π cm³"
      ],
      "answer": 0,
      "explain": "V = {{1|3}} · π · 9 · 4 = 12π (cm³)."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tứ giác ABCD nội tiếp đường tròn có ∠A = 75°. Số đo ∠C là:",
      "options": [
       "105°",
       "75°",
       "115°",
       "15°"
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
        "s": "Số đo cung BC (không chứa A) bằng 40°.",
        "answer": false,
        "level": "B",
        "explain": "Bằng 2 · 40° = 80°.",
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
        "s": "Nếu D thuộc cung lớn BC (D khác A) thì ∠BDC = 40°.",
        "answer": true,
        "level": "H",
        "explain": "Các góc nội tiếp cùng chắn một cung thì bằng nhau."
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Gieo hai đồng xu cân đối (S: sấp, N: ngửa).",
      "items": [
       {
        "s": "Không gian mẫu là {SS; SN; NS; NN}.",
        "answer": true,
        "level": "B",
        "explain": "Liệt kê theo thứ tự đồng xu thứ nhất, thứ hai."
       },
       {
        "s": "Không gian mẫu có 3 phần tử.",
        "answer": false,
        "level": "B",
        "explain": "Có 4 phần tử.",
        "check": "2*2===3"
       },
       {
        "s": "Xác suất để hai mặt giống nhau là {{1|2}}.",
        "answer": true,
        "level": "H",
        "explain": "SS, NN: 2 trên 4.",
        "check": "2/4===0.5"
       },
       {
        "s": "Xác suất để có ít nhất một mặt ngửa là {{3|4}}.",
        "answer": true,
        "level": "V",
        "explain": "SN, NS, NN: 3 trên 4.",
        "check": "3/4===0.75"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t4",
      "q": "Hình trụ có bán kính đáy 2 cm, chiều cao 5 cm có thể tích kπ cm³. Tìm k.",
      "answer": "20",
      "explain": "V = π · 4 · 5 = 20π.",
      "calc": "4*5"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Tìm nghiệm lớn hơn của phương trình x<sup>2</sup> − 5x + 4 = 0.",
      "answer": "4",
      "explain": "a + b + c = 0 nên hai nghiệm là 1 và 4.",
      "calc": "4"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Một quả bóng có bán kính 10 cm. Tính diện tích mặt quả bóng (lấy π ≈ 3,14; đơn vị cm²).",
      "answer": "1256",
      "explain": "S = 4 · 3,14 · 100 = 1 256.",
      "calc": "Math.round(4*3.14*100)",
      "unit": "cm²"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Hộp có 3 thẻ ghi số 1; 2; 3. Rút lần lượt hai thẻ (không hoàn lại). Tính xác suất để tổng hai số là số chẵn (viết dạng phân số a/b).",
      "answer": [
       "1/3"
      ],
      "explain": "Không gian mẫu có 6 cặp có thứ tự; tổng chẵn: (1; 3), (3; 1) ⇒ {{2|6}} = {{1|3}}.",
      "calc": "2/6",
      "answerText": "1/3"
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
        "answer": "Δ′ = 1 + 15 = 16; x = −1 ± 4 ⇒ x = 3 hoặc x = −5.",
        "rubric": [
         [
          "Tính Δ′ = 16 (hoặc Δ = 64)",
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
      "q": "Từ điểm A nằm ngoài đường tròn (O), kẻ hai tiếp tuyến AB, AC (B, C là các tiếp điểm).",
      "parts": [
       {
        "level": "V",
        "points": 0.75,
        "q": "Chứng minh tứ giác ABOC nội tiếp.",
        "answer": "Tiếp tuyến vuông góc với bán kính tại tiếp điểm nên ∠ABO = ∠ACO = 90°. Tổng hai góc đối ∠ABO + ∠ACO = 180° nên ABOC nội tiếp.",
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
          "Tổng hai góc đối 180° ⇒ nội tiếp",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Biết ∠BAC = 50°, tính ∠BOC.",
        "answer": "∠BOC = 360° − 90° − 90° − 50° = 130° (hoặc 180° − 50°).",
        "rubric": [
         [
          "Dùng tổng các góc tứ giác",
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
        "q": "Một cốc hình trụ và một cốc hình nón có cùng bán kính đáy 4 cm và cùng chiều cao 10 cm. Cần đổ đầy cốc hình nón bao nhiêu lần để được lượng nước bằng thể tích cốc hình trụ?",
        "answer": "V<sub>trụ</sub> = πr<sup>2</sup>h, V<sub>nón</sub> = {{1|3}}πr<sup>2</sup>h nên cần 3 lần.",
        "rubric": [
         [
          "So sánh hai công thức thể tích",
          0.25
         ],
         [
          "Kết luận 3 lần",
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
