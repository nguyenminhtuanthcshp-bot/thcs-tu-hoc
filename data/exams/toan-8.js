/* Toán 8 – Ôn tập và đề kiểm tra định kì theo cấu trúc CV 7991/BGDĐT-GDTrH. Nội dung do nhóm biên soạn tự viết. */
THCS.registerExams("toan-8", {
 "split": "Nội dung được chia theo thứ tự bài học SGK Toán 8 “Kết nối tri thức với cuộc sống” và tiến độ năm học thường dùng (35 tuần: học kì I 18 tuần, học kì II 17 tuần). <b>Giữa kì 1</b> (khoảng tuần 8–9): Chương I – II. <b>Cuối kì 1</b> (khoảng tuần 16–17): Chương I – V, trọng tâm Chương III – V. <b>Giữa kì 2</b> (khoảng tuần 25–26): Chương VI – VII. <b>Cuối kì 2</b> (khoảng tuần 32–33): Chương VI – X, trọng tâm Chương VIII – X. Nhiều trường dạy song song mạch Đại số và mạch Hình học nên phạm vi thật có thể khác một chút – em nên hỏi thầy cô phạm vi chính thức của trường mình.",
 "checkpoints": [
  {
   "id": "giua-ki-1",
   "name": "Giữa học kì 1",
   "scope": "Chương I – II (Bài 1 – Bài 9): đa thức, hằng đẳng thức, phân tích thành nhân tử.",
   "review": {
    "sections": [
     {
      "chapter": "c1",
      "title": "Chương I. Đa thức",
      "points": [
       "Đơn thức: tích của số và các biến; bậc là tổng số mũ các biến. Đơn thức đồng dạng có cùng phần biến.",
       "Đa thức: tổng các đơn thức; bậc là bậc của hạng tử bậc cao nhất trong dạng thu gọn.",
       "Cộng, trừ đa thức: cộng/trừ các đơn thức đồng dạng. Nhân: nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia.",
       "Chia đa thức cho đơn thức: chia từng hạng tử."
      ]
     },
     {
      "chapter": "c2",
      "title": "Chương II. Hằng đẳng thức đáng nhớ và ứng dụng",
      "points": [
       "(A ± B)<sup>2</sup> = A<sup>2</sup> ± 2AB + B<sup>2</sup>; A<sup>2</sup> − B<sup>2</sup> = (A − B)(A + B).",
       "(A ± B)<sup>3</sup> = A<sup>3</sup> ± 3A<sup>2</sup>B + 3AB<sup>2</sup> ± B<sup>3</sup>.",
       "A<sup>3</sup> + B<sup>3</sup> = (A + B)(A<sup>2</sup> − AB + B<sup>2</sup>); A<sup>3</sup> − B<sup>3</sup> = (A − B)(A<sup>2</sup> + AB + B<sup>2</sup>).",
       "Phân tích thành nhân tử: đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử."
      ],
      "example": "4x<sup>2</sup> − 12x + 9 = (2x − 3)<sup>2</sup>."
     }
    ],
    "mistakes": [
     "Viết (a + b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>.",
     "Quên đổi dấu khi bỏ ngoặc có dấu trừ.",
     "Phân tích nhân tử chưa triệt để."
    ],
    "forms": [
     "Thu gọn, nhân, chia đa thức.",
     "Tính nhanh bằng hằng đẳng thức.",
     "Phân tích thành nhân tử; tìm x.",
     "Chứng minh biểu thức luôn dương."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c1",
      "content": "Đơn thức; đa thức",
      "yccd": {
       "B": "Nhận biết đơn thức, bậc, đơn thức đồng dạng.",
       "H": "Tính bậc, hệ số của đa thức.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c1",
      "content": "Cộng, trừ, nhân đa thức; chia đa thức cho đơn thức",
      "yccd": {
       "B": "Nhân hai luỹ thừa.",
       "H": "Thu gọn, nhân, chia đa thức.",
       "V": "Lập biểu thức đa thức từ bài toán thực tế."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c2",
      "content": "Bảy hằng đẳng thức đáng nhớ",
      "yccd": {
       "B": "Nhận biết các hằng đẳng thức.",
       "H": "Dùng hằng đẳng thức tính nhanh.",
       "V": "Tính giá trị biểu thức; chứng minh bất đẳng thức đơn giản."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c2",
      "content": "Phân tích đa thức thành nhân tử",
      "yccd": {
       "B": "",
       "H": "Đặt nhân tử chung, dùng hằng đẳng thức.",
       "V": "Giải bài toán tìm x bằng phân tích nhân tử."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Biểu thức nào sau đây là đơn thức?",
      "options": [
       "x + y",
       "{{2|x}}",
       "x − 1",
       "3x<sup>2</sup>y"
      ],
      "answer": 3,
      "explain": "Đơn thức là tích của số và các biến (không có phép cộng, trừ, chia cho biến)."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Bậc của đơn thức 5x<sup>3</sup>y<sup>2</sup> là:",
      "options": [
       "5",
       "3",
       "2",
       "6"
      ],
      "answer": 0,
      "explain": "Tổng số mũ các biến: 3 + 2 = 5.",
      "calc": "3+2"
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Đơn thức đồng dạng với 2xy<sup>2</sup> là:",
      "options": [
       "2x<sup>2</sup>y",
       "xy",
       "−3xy<sup>2</sup>",
       "2xy"
      ],
      "answer": 2,
      "explain": "Cùng phần biến xy<sup>2</sup>."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "x<sup>2</sup> · x<sup>3</sup> bằng:",
      "options": [
       "x<sup>5</sup>",
       "x<sup>6</sup>",
       "2x<sup>5</sup>",
       "x<sup>1</sup>"
      ],
      "answer": 0,
      "explain": "Cộng số mũ: 2 + 3 = 5."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "(a + b)<sup>2</sup> bằng:",
      "options": [
       "a<sup>2</sup> + b<sup>2</sup>",
       "a<sup>2</sup> + ab + b<sup>2</sup>",
       "a<sup>2</sup> − 2ab + b<sup>2</sup>",
       "a<sup>2</sup> + 2ab + b<sup>2</sup>"
      ],
      "answer": 3,
      "explain": "Bình phương của một tổng."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "a<sup>2</sup> − b<sup>2</sup> bằng:",
      "options": [
       "(a − b)<sup>2</sup>",
       "(a − b)(a + b)",
       "(a + b)<sup>2</sup>",
       "a(a − b)"
      ],
      "answer": 1,
      "explain": "Hiệu hai bình phương."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "(x − 1)<sup>3</sup> bằng:",
      "options": [
       "x<sup>3</sup> − 1",
       "x<sup>3</sup> − 3x<sup>2</sup> + 3x − 1",
       "x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1",
       "x<sup>3</sup> − 3x + 1"
      ],
      "answer": 1,
      "explain": "Lập phương của một hiệu."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "a<sup>3</sup> + b<sup>3</sup> bằng:",
      "options": [
       "(a + b)<sup>3</sup>",
       "(a + b)(a<sup>2</sup> + ab + b<sup>2</sup>)",
       "(a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)",
       "(a − b)(a<sup>2</sup> + ab + b<sup>2</sup>)"
      ],
      "answer": 2,
      "explain": "Tổng hai lập phương."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Thu gọn 3x(x − 2) − 3x<sup>2</sup> ta được:",
      "options": [
       "6x",
       "6x<sup>2</sup> − 6x",
       "−6",
       "−6x"
      ],
      "answer": 3,
      "explain": "3x<sup>2</sup> − 6x − 3x<sup>2</sup> = −6x."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tính nhanh: 101<sup>2</sup> − 1.",
      "options": [
       "10 000",
       "10 200",
       "10 100",
       "10 201"
      ],
      "answer": 1,
      "explain": "(101 − 1)(101 + 1) = 100 · 102 = 10 200.",
      "calc": "101*101-1"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "(6x<sup>3</sup>y<sup>2</sup>) : (2xy) bằng:",
      "options": [
       "3x<sup>2</sup>y<sup>2</sup>",
       "4x<sup>2</sup>y",
       "3x<sup>2</sup>y",
       "3xy"
      ],
      "answer": 2,
      "explain": "6 : 2 = 3; x<sup>3</sup> : x = x<sup>2</sup>; y<sup>2</sup> : y = y."
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Phân tích x<sup>2</sup> − 4x thành nhân tử:",
      "options": [
       "x(x − 4)",
       "x(x + 4)",
       "(x − 2)<sup>2</sup>",
       "(x − 2)(x + 2)"
      ],
      "answer": 0,
      "explain": "Đặt nhân tử chung x."
     }
    ],
    "tf": [
     {
      "topic": "t2",
      "q": "Cho A = 2x<sup>2</sup>y − 3xy + 5 và B = x<sup>2</sup>y + 3xy − 1.",
      "items": [
       {
        "s": "A là đa thức bậc 3.",
        "answer": true,
        "level": "B",
        "explain": "Hạng tử 2x<sup>2</sup>y có bậc 3 cao nhất."
       },
       {
        "s": "Hệ số tự do của A là −5.",
        "answer": false,
        "level": "B",
        "explain": "Hạng tử tự do của A là 5.",
        "check": "5===-5"
       },
       {
        "s": "A + B = 3x<sup>2</sup>y + 4.",
        "answer": true,
        "level": "H",
        "explain": "−3xy + 3xy = 0; 5 − 1 = 4.",
        "check": "(function(x,y){return (2*x*x*y-3*x*y+5)+(x*x*y+3*x*y-1)===3*x*x*y+4})(2,3)"
       },
       {
        "s": "A − B = x<sup>2</sup>y − 6xy + 4.",
        "answer": false,
        "level": "H",
        "explain": "A − B = x<sup>2</sup>y − 6xy + 6.",
        "check": "(function(x,y){return (2*x*x*y-3*x*y+5)-(x*x*y+3*x*y-1)===x*x*y-6*x*y+4})(2,3)"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Xét các đẳng thức sau (với mọi x).",
      "items": [
       {
        "s": "(x + 3)<sup>2</sup> = x<sup>2</sup> + 6x + 9.",
        "answer": true,
        "level": "B",
        "explain": "Bình phương của một tổng.",
        "check": "(function(x,y){return (x+3)*(x+3)===x*x+6*x+9})(2,0)"
       },
       {
        "s": "(2x − 1)<sup>2</sup> = 4x<sup>2</sup> − 1.",
        "answer": false,
        "level": "B",
        "explain": "(2x − 1)<sup>2</sup> = 4x<sup>2</sup> − 4x + 1.",
        "check": "(function(x,y){return (2*x-1)*(2*x-1)===4*x*x-1})(2,0)"
       },
       {
        "s": "x<sup>2</sup> − 9 = (x − 3)(x + 3).",
        "answer": true,
        "level": "H",
        "explain": "Hiệu hai bình phương.",
        "check": "(function(x,y){return x*x-9===(x-3)*(x+3)})(5,0)"
       },
       {
        "s": "Giá trị của x<sup>2</sup> − 6x + 9 tại x = 103 bằng 10 000.",
        "answer": true,
        "level": "V",
        "explain": "x<sup>2</sup> − 6x + 9 = (x − 3)<sup>2</sup> = 100<sup>2</sup> = 10 000.",
        "check": "103*103-6*103+9===10000"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "Tính nhanh: 99 · 101.",
      "answer": "9999",
      "explain": "(100 − 1)(100 + 1) = 10 000 − 1 = 9 999.",
      "calc": "99*101"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Tìm hệ số của x trong tích (x + 2)(x − 5).",
      "answer": "-3",
      "explain": "x<sup>2</sup> − 5x + 2x − 10 = x<sup>2</sup> − 3x − 10.",
      "calc": "-5+2",
      "answerText": "−3"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Tìm x, biết x<sup>2</sup> − 25 = 0 và x < 0.",
      "answer": "-5",
      "explain": "(x − 5)(x + 5) = 0 ⇒ x = 5 hoặc x = −5; x < 0 nên x = −5.",
      "calc": "-5",
      "answerText": "−5"
     },
     {
      "level": "V",
      "topic": "t3",
      "q": "Cho x + y = 5 và xy = 6. Tính x<sup>2</sup> + y<sup>2</sup>.",
      "answer": "13",
      "explain": "x<sup>2</sup> + y<sup>2</sup> = (x + y)<sup>2</sup> − 2xy = 25 − 12 = 13.",
      "calc": "25-12"
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
        "q": "Thu gọn: (2x + 1)(x − 3).",
        "answer": "2x<sup>2</sup> − 6x + x − 3 = 2x<sup>2</sup> − 5x − 3.",
        "rubric": [
         [
          "Nhân đa thức đúng",
          0.25
         ],
         [
          "Kết quả 2x<sup>2</sup> − 5x − 3",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Phân tích đa thức thành nhân tử: x<sup>3</sup> − 4x.",
        "answer": "x(x<sup>2</sup> − 4) = x(x − 2)(x + 2).",
        "rubric": [
         [
          "Đặt nhân tử chung x",
          0.25
         ],
         [
          "Nhận ra hiệu hai bình phương",
          0.25
         ],
         [
          "Kết quả x(x − 2)(x + 2)",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Một mảnh vườn hình vuông cạnh x mét. Người ta mở rộng mảnh vườn bằng cách tăng mỗi cạnh thêm 3 m.",
      "parts": [
       {
        "level": "V",
        "points": 0.75,
        "q": "Viết biểu thức (thu gọn) biểu thị phần diện tích tăng thêm.",
        "answer": "(x + 3)<sup>2</sup> − x<sup>2</sup> = x<sup>2</sup> + 6x + 9 − x<sup>2</sup> = 6x + 9 (m²).",
        "rubric": [
         [
          "Lập biểu thức (x + 3)<sup>2</sup> − x<sup>2</sup>",
          0.25
         ],
         [
          "Khai triển bình phương đúng",
          0.25
         ],
         [
          "Thu gọn 6x + 9",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Tính phần diện tích tăng thêm khi x = 12.",
        "answer": "6 · 12 + 9 = 81 (m²).",
        "rubric": [
         [
          "Thay x = 12",
          0.25
         ],
         [
          "Kết quả 81 m²",
          0.25
         ]
        ],
        "calc": "6*12+9"
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
        "q": "Chứng minh x<sup>2</sup> − 2x + 2 > 0 với mọi x.",
        "answer": "x<sup>2</sup> − 2x + 2 = (x − 1)<sup>2</sup> + 1 ≥ 1 > 0 với mọi x.",
        "rubric": [
         [
          "Biến đổi thành (x − 1)<sup>2</sup> + 1",
          0.25
         ],
         [
          "Lập luận ≥ 1 > 0",
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
   "scope": "Chương I – V (Bài 1 – Bài 20), trọng tâm Chương III (tứ giác), IV (định lí Thalès), V (dữ liệu và biểu đồ).",
   "review": {
    "sections": [
     {
      "chapter": "c2",
      "title": "Ôn nhanh Chương I – II",
      "points": [
       "Phép tính đa thức; bảy hằng đẳng thức đáng nhớ; phân tích thành nhân tử.",
       "Tính nhanh bằng hằng đẳng thức: 99<sup>2</sup> = (100 − 1)<sup>2</sup> = 9 801."
      ]
     },
     {
      "chapter": "c3",
      "title": "Chương III. Tứ giác",
      "points": [
       "Tổng các góc của tứ giác bằng 360°.",
       "Hình thang cân: hai góc kề một đáy bằng nhau, hai đường chéo bằng nhau.",
       "Hình bình hành: cạnh đối song song và bằng nhau, góc đối bằng nhau, đường chéo cắt nhau tại trung điểm mỗi đường.",
       "Hình chữ nhật: hình bình hành có một góc vuông hoặc hai đường chéo bằng nhau. Hình thoi: bốn cạnh bằng nhau; đường chéo vuông góc, là phân giác. Hình vuông: vừa là hình chữ nhật vừa là hình thoi."
      ]
     },
     {
      "chapter": "c4",
      "title": "Chương IV. Định lí Thalès",
      "points": [
       "Định lí Thalès và định lí đảo trong tam giác.",
       "Đường trung bình của tam giác song song với cạnh thứ ba và bằng nửa cạnh ấy.",
       "Đường phân giác AD của ΔABC: {{DB|DC}} = {{AB|AC}}."
      ]
     },
     {
      "chapter": "c5",
      "title": "Chương V. Dữ liệu và biểu đồ",
      "points": [
       "Dữ liệu định lượng (số) và định tính; tính hợp lí của dữ liệu.",
       "Chọn biểu đồ phù hợp: cột, cột kép, đoạn thẳng, hình quạt tròn.",
       "Phân tích số liệu: so sánh, tính tỉ lệ phần trăm, nhận xét xu hướng."
      ]
     }
    ],
    "mistakes": [
     "Nhầm tính chất hình thoi với hình chữ nhật.",
     "Áp dụng định lí Thalès khi chưa có hai đường thẳng song song.",
     "Lập sai tỉ số đường phân giác."
    ],
    "forms": [
     "Tính góc, cạnh trong các tứ giác đặc biệt.",
     "Chứng minh tứ giác là hình bình hành, chữ nhật, thoi, vuông.",
     "Dùng định lí Thalès, đường trung bình, đường phân giác.",
     "Phân tích số liệu thống kê."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c2",
      "content": "Đa thức; hằng đẳng thức; phân tích nhân tử",
      "yccd": {
       "B": "Nhận biết hằng đẳng thức.",
       "H": "Tính nhanh, phân tích thành nhân tử.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c3",
      "content": "Tứ giác; hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông",
      "yccd": {
       "B": "Nhận biết tính chất, dấu hiệu nhận biết các tứ giác.",
       "H": "Tính góc, cạnh, đường chéo.",
       "V": "Chứng minh tứ giác là hình đặc biệt."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c4",
      "content": "Định lí Thalès; đường trung bình; tính chất đường phân giác",
      "yccd": {
       "B": "Nhận biết định lí Thalès, đường trung bình.",
       "H": "Tính độ dài đoạn thẳng.",
       "V": "Giải bài toán đo đạc thực tế."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c5",
      "content": "Dữ liệu và biểu đồ",
      "yccd": {
       "B": "Nhận biết dữ liệu định lượng, định tính.",
       "H": "",
       "V": "Phân tích số liệu từ bảng."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Tổng các góc của một tứ giác bằng:",
      "options": [
       "180°",
       "270°",
       "540°",
       "360°"
      ],
      "answer": 3,
      "explain": "Tứ giác chia được thành hai tam giác: 2 · 180°.",
      "calc": "360"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Trong hình bình hành, hai đường chéo:",
      "options": [
       "luôn bằng nhau",
       "cắt nhau tại trung điểm của mỗi đường",
       "luôn vuông góc",
       "luôn là phân giác các góc"
      ],
      "answer": 1,
      "explain": "Tính chất đường chéo hình bình hành."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Hình chữ nhật có tính chất nào sau đây?",
      "options": [
       "Hai đường chéo vuông góc",
       "Bốn cạnh bằng nhau",
       "Hai cạnh kề bằng nhau",
       "Bốn góc vuông"
      ],
      "answer": 3,
      "explain": "Hình chữ nhật có bốn góc vuông; các tính chất khác chỉ đúng với hình vuông."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Tứ giác có bốn cạnh bằng nhau là:",
      "options": [
       "hình chữ nhật",
       "hình thoi",
       "hình thang cân",
       "hình bình hành bất kì"
      ],
      "answer": 1,
      "explain": "Dấu hiệu nhận biết hình thoi."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Đường trung bình của tam giác thì:",
      "options": [
       "vuông góc với cạnh thứ ba",
       "bằng cạnh thứ ba",
       "song song với cạnh thứ ba và bằng nửa cạnh ấy",
       "đi qua trọng tâm"
      ],
      "answer": 2,
      "explain": "Tính chất đường trung bình."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Cho tam giác ABC, M ∈ AB, N ∈ AC và MN ∥ BC. Khi đó:",
      "options": [
       "{{AM|AB}} = {{AC|AN}}",
       "AM = AN",
       "MN = BC",
       "{{AM|AB}} = {{AN|AC}}"
      ],
      "answer": 3,
      "explain": "Định lí Thalès trong tam giác."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Dữ liệu nào sau đây là dữ liệu định lượng?",
      "options": [
       "Màu áo yêu thích",
       "Nơi sinh",
       "Chiều cao (cm) của các bạn trong lớp",
       "Môn học yêu thích"
      ],
      "answer": 2,
      "explain": "Chiều cao biểu diễn bằng số."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "(x − 2)<sup>2</sup> bằng:",
      "options": [
       "x<sup>2</sup> − 4",
       "x<sup>2</sup> − 4x + 4",
       "x<sup>2</sup> + 4x + 4",
       "x<sup>2</sup> − 2x + 4"
      ],
      "answer": 1,
      "explain": "Bình phương của một hiệu."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Tứ giác ABCD có ∠A = 80°, ∠B = 100°, ∠C = 70°. Số đo ∠D là:",
      "options": [
       "100°",
       "90°",
       "110°",
       "70°"
      ],
      "answer": 2,
      "explain": "360° − 250° = 110°.",
      "calc": "360-80-100-70"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "MN là đường trung bình của tam giác ABC (MN ∥ BC), BC = 14 cm. Độ dài MN là:",
      "options": [
       "7 cm",
       "14 cm",
       "28 cm",
       "3,5 cm"
      ],
      "answer": 0,
      "explain": "MN = BC : 2.",
      "calc": "14/2"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác ABC có AD là phân giác (D ∈ BC), AB = 6 cm, AC = 9 cm. Tỉ số {{DB|DC}} bằng:",
      "options": [
       "{{2|3}}",
       "{{3|2}}",
       "{{6|15}}",
       "{{9|15}}"
      ],
      "answer": 0,
      "explain": "{{DB|DC}} = {{AB|AC}} = {{6|9}} = {{2|3}}.",
      "calc": "6/9"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Hình chữ nhật ABCD có đường chéo AC = 10 cm, O là giao điểm hai đường chéo. Độ dài OB là:",
      "options": [
       "5 cm",
       "10 cm",
       "20 cm",
       "2,5 cm"
      ],
      "answer": 0,
      "explain": "Hai đường chéo bằng nhau và cắt nhau tại trung điểm: OB = BD : 2 = 5 cm.",
      "calc": "10/2"
     }
    ],
    "tf": [
     {
      "topic": "t2",
      "q": "Cho hình bình hành ABCD có ∠A = 70°, AB = 8 cm, BC = 5 cm.",
      "items": [
       {
        "s": "CD = 8 cm.",
        "answer": true,
        "level": "B",
        "explain": "Các cạnh đối bằng nhau.",
        "check": "8===8"
       },
       {
        "s": "∠C = 110°.",
        "answer": false,
        "level": "B",
        "explain": "Các góc đối bằng nhau: ∠C = ∠A = 70°.",
        "check": "70===110"
       },
       {
        "s": "∠B = 110°.",
        "answer": true,
        "level": "H",
        "explain": "Hai góc kề một cạnh bù nhau: 180° − 70°.",
        "check": "180-70===110"
       },
       {
        "s": "Chu vi hình bình hành bằng 26 cm.",
        "answer": true,
        "level": "H",
        "explain": "2 · (8 + 5) = 26.",
        "check": "2*(8+5)===26"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Tam giác ABC có AB = 6 cm, AC = 8 cm, BC = 10 cm. M, N lần lượt là trung điểm của AB, AC.",
      "items": [
       {
        "s": "MN ∥ BC.",
        "answer": true,
        "level": "B",
        "explain": "MN là đường trung bình."
       },
       {
        "s": "MN = 10 cm.",
        "answer": false,
        "level": "B",
        "explain": "MN = BC : 2 = 5 cm.",
        "check": "10===10/2"
       },
       {
        "s": "MN = 5 cm.",
        "answer": true,
        "level": "H",
        "explain": "MN = {{1|2}}BC.",
        "check": "10/2===5"
       },
       {
        "s": "Chu vi tam giác AMN bằng 12 cm.",
        "answer": true,
        "level": "V",
        "explain": "AM = 3, AN = 4, MN = 5 ⇒ 12 cm.",
        "check": "3+4+5===12"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Tính nhanh: 52<sup>2</sup> − 48<sup>2</sup>.",
      "answer": "400",
      "explain": "(52 − 48)(52 + 48) = 4 · 100 = 400.",
      "calc": "52*52-48*48"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác ABC có MN ∥ BC (M ∈ AB, N ∈ AC), AM = 2 cm, MB = 3 cm, AN = 4 cm. Tính NC (cm).",
      "answer": "6",
      "explain": "{{AM|MB}} = {{AN|NC}} ⇒ NC = 4 · 3 : 2 = 6.",
      "calc": "4*3/2",
      "unit": "cm"
     },
     {
      "level": "V",
      "topic": "t3",
      "q": "Một cọc cao 1,5 m có bóng trên mặt đất dài 2 m. Cùng lúc đó, bóng của một cái cây dài 12 m. Cây cao bao nhiêu mét?",
      "answer": "9",
      "explain": "Tia nắng song song, theo định lí Thalès: chiều cao cây = 1,5 · 12 : 2 = 9 (m).",
      "calc": "1.5*12/2",
      "unit": "m"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Doanh thu bốn quý của một cửa hàng lần lượt là 120; 150; 180; 150 (triệu đồng). Doanh thu quý III chiếm bao nhiêu phần trăm doanh thu cả năm?",
      "answer": "30",
      "explain": "Cả năm 600 triệu; 180 : 600 = 30%.",
      "calc": "180/(120+150+180+150)*100",
      "unit": "%"
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
        "q": "Tính nhanh: 75<sup>2</sup> − 25<sup>2</sup>.",
        "answer": "(75 − 25)(75 + 25) = 50 · 100 = 5 000.",
        "rubric": [
         [
          "Dùng hiệu hai bình phương",
          0.25
         ],
         [
          "Kết quả 5 000",
          0.25
         ]
        ],
        "calc": "75*75-25*25"
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Phân tích thành nhân tử: x<sup>2</sup> − 2xy + y<sup>2</sup> − 9.",
        "answer": "(x − y)<sup>2</sup> − 3<sup>2</sup> = (x − y − 3)(x − y + 3).",
        "rubric": [
         [
          "Nhóm thành (x − y)<sup>2</sup>",
          0.25
         ],
         [
          "Viết dạng hiệu hai bình phương",
          0.25
         ],
         [
          "Kết quả (x − y − 3)(x − y + 3)",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Cho tam giác ABC. Gọi M, N, P lần lượt là trung điểm của AB, AC, BC.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Chứng minh tứ giác BMNP là hình bình hành.",
        "answer": "MN là đường trung bình của ΔABC nên MN ∥ BC và MN = {{1|2}}BC. P là trung điểm BC nên BP = {{1|2}}BC. Do đó MN ∥ BP và MN = BP. Tứ giác BMNP có một cặp cạnh đối song song và bằng nhau nên là hình bình hành.",
        "rubric": [
         [
          "MN ∥ BC",
          0.25
         ],
         [
          "MN = {{1|2}}BC",
          0.25
         ],
         [
          "BP = {{1|2}}BC",
          0.25
         ],
         [
          "MN ∥ BP và MN = BP",
          0.25
         ],
         [
          "Kết luận hình bình hành",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Bài toán lập luận.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Một tứ giác có hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường. Tứ giác đó là hình gì? Vì sao?",
        "answer": "Hai đường chéo cắt nhau tại trung điểm mỗi đường nên là hình bình hành; hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.",
        "rubric": [
         [
          "Lập luận là hình bình hành",
          0.25
         ],
         [
          "Kết luận hình chữ nhật",
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
   "scope": "Chương VI – VII (Bài 21 – Bài 29): phân thức đại số, phương trình và hàm số bậc nhất.",
   "review": {
    "sections": [
     {
      "chapter": "c6",
      "title": "Chương VI. Phân thức đại số",
      "points": [
       "Phân thức {{A|B}} (B ≠ 0); {{A|B}} = {{C|D}} khi A · D = B · C.",
       "Tính chất cơ bản: nhân/chia cả tử và mẫu với cùng một đa thức khác 0. Rút gọn: phân tích tử, mẫu thành nhân tử rồi chia cho nhân tử chung.",
       "Cộng, trừ: quy đồng mẫu. Nhân: tử nhân tử, mẫu nhân mẫu. Chia: nhân với phân thức nghịch đảo."
      ]
     },
     {
      "chapter": "c7",
      "title": "Chương VII. Phương trình bậc nhất và hàm số bậc nhất",
      "points": [
       "Phương trình ax + b = 0 (a ≠ 0) có nghiệm x = −{{b|a}}.",
       "Giải bài toán bằng cách lập phương trình: chọn ẩn, đặt điều kiện, lập phương trình, giải, đối chiếu và kết luận.",
       "Hàm số bậc nhất y = ax + b (a ≠ 0); đồ thị là đường thẳng cắt trục tung tại (0; b). a là hệ số góc.",
       "Hai đường thẳng y = ax + b và y = a'x + b' song song khi a = a' và b ≠ b'; cắt nhau khi a ≠ a'."
      ]
     }
    ],
    "mistakes": [
     "Quên đặt điều kiện xác định của phân thức.",
     "Rút gọn từng hạng tử thay vì nhân tử.",
     "Quên đối chiếu điều kiện của ẩn trong bài toán lập phương trình."
    ],
    "forms": [
     "Rút gọn, tính giá trị phân thức.",
     "Cộng, trừ, nhân, chia phân thức.",
     "Giải phương trình bậc nhất; giải bài toán bằng cách lập phương trình.",
     "Hàm số bậc nhất: đồ thị, song song, đi qua điểm."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c6",
      "content": "Phân thức đại số; tính chất cơ bản; rút gọn",
      "yccd": {
       "B": "Nhận biết điều kiện xác định, phân thức bằng nhau.",
       "H": "Rút gọn phân thức.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c6",
      "content": "Cộng, trừ, nhân, chia phân thức",
      "yccd": {
       "B": "Cộng phân thức cùng mẫu.",
       "H": "Cộng, trừ phân thức khác mẫu; tính giá trị.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c7",
      "content": "Phương trình bậc nhất một ẩn; giải bài toán bằng cách lập phương trình",
      "yccd": {
       "B": "Nhận biết phương trình bậc nhất, nghiệm.",
       "H": "Giải phương trình đưa về bậc nhất.",
       "V": "Giải bài toán bằng cách lập phương trình."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c7",
      "content": "Hàm số; hàm số bậc nhất và đồ thị; hệ số góc",
      "yccd": {
       "B": "Nhận biết hàm số bậc nhất, hệ số góc, tính giá trị hàm số.",
       "H": "Tìm giao điểm với trục, điều kiện song song.",
       "V": "Xác định hàm số thoả điều kiện."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Phân thức {{3|x − 2}} xác định khi:",
      "options": [
       "x ≠ 0",
       "x ≠ −2",
       "x ≠ 2",
       "x ≠ 3"
      ],
      "answer": 2,
      "explain": "Mẫu khác 0: x − 2 ≠ 0."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Phân thức {{2x|2x + 2}} (x ≠ −1) bằng phân thức nào?",
      "options": [
       "{{x|x + 2}}",
       "{{1|2}}",
       "{{x|x + 1}}",
       "{{2x|x + 1}}"
      ],
      "answer": 2,
      "explain": "Chia cả tử và mẫu cho 2."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Phương trình nào sau đây là phương trình bậc nhất một ẩn?",
      "options": [
       "0x + 2 = 0",
       "2x − 3 = 0",
       "x<sup>2</sup> = 1",
       "{{1|x}} = 2"
      ],
      "answer": 1,
      "explain": "Dạng ax + b = 0 với a ≠ 0."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Nghiệm của phương trình 3x − 6 = 0 là:",
      "options": [
       "−2",
       "3",
       "6",
       "2"
      ],
      "answer": 3,
      "explain": "x = 6 : 3 = 2.",
      "calc": "6/3"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Hàm số nào sau đây là hàm số bậc nhất?",
      "options": [
       "y = x<sup>2</sup>",
       "y = 2x − 1",
       "y = {{1|x}}",
       "y = 0x + 3"
      ],
      "answer": 1,
      "explain": "Dạng y = ax + b với a ≠ 0."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Hệ số góc của đường thẳng y = −3x + 5 là:",
      "options": [
       "−3",
       "5",
       "3",
       "−5"
      ],
      "answer": 0,
      "explain": "Hệ số góc là a.",
      "calc": "-3"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Cho f(x) = 2x + 1. Giá trị f(3) bằng:",
      "options": [
       "6",
       "5",
       "9",
       "7"
      ],
      "answer": 3,
      "explain": "2 · 3 + 1 = 7.",
      "calc": "2*3+1"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "{{x|3}} + {{2x|3}} bằng:",
      "options": [
       "{{3x|6}}",
       "{{x<sup>2</sup>|3}}",
       "x",
       "3x"
      ],
      "answer": 2,
      "explain": "{{3x|3}} = x."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Rút gọn {{x<sup>2</sup> − 1|x + 1}} (x ≠ −1) được:",
      "options": [
       "x − 1",
       "x + 1",
       "x<sup>2</sup>",
       "1"
      ],
      "answer": 0,
      "explain": "{{(x − 1)(x + 1)|x + 1}} = x − 1."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Nghiệm của phương trình 2(x − 1) = x + 3 là:",
      "options": [
       "5",
       "1",
       "−5",
       "4"
      ],
      "answer": 0,
      "explain": "2x − 2 = x + 3 ⇒ x = 5.",
      "calc": "5"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Đồ thị hàm số y = 2x − 4 cắt trục hoành tại điểm có hoành độ:",
      "options": [
       "−4",
       "4",
       "−2",
       "2"
      ],
      "answer": 3,
      "explain": "y = 0 ⇒ x = 2.",
      "calc": "4/2"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Hai đường thẳng y = 3x + 1 và y = ax − 2 song song với nhau khi:",
      "options": [
       "a = −3",
       "a = 3",
       "a = 1",
       "a = −2"
      ],
      "answer": 1,
      "explain": "Cùng hệ số góc và tung độ gốc khác nhau (1 ≠ −2)."
     }
    ],
    "tf": [
     {
      "topic": "t1",
      "q": "Cho P = {{x<sup>2</sup> − 4|x<sup>2</sup> + 2x}}.",
      "items": [
       {
        "s": "Điều kiện xác định của P là x ≠ 0 và x ≠ −2.",
        "answer": true,
        "level": "B",
        "explain": "x<sup>2</sup> + 2x = x(x + 2) ≠ 0.",
        "check": "[0,-2].every(function(x){return x*x+2*x===0})&&[1,-1,2,3].every(function(x){return x*x+2*x!==0})"
       },
       {
        "s": "Tử thức của P là x<sup>2</sup> + 2x.",
        "answer": false,
        "level": "B",
        "explain": "Đó là mẫu thức; tử thức là x<sup>2</sup> − 4.",
        "check": "false"
       },
       {
        "s": "P = {{x − 2|x}} (với điều kiện xác định).",
        "answer": true,
        "level": "H",
        "explain": "{{(x − 2)(x + 2)|x(x + 2)}}.",
        "check": "Math.abs((9-4)/(9+6)-(3-2)/3)<1e-9"
       },
       {
        "s": "Tại x = 4, P = {{1|2}}.",
        "answer": true,
        "level": "H",
        "explain": "{{4 − 2|4}} = {{1|2}}.",
        "check": "(16-4)/(16+8)===0.5"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Cho hàm số y = (m − 1)x + 3 (m là tham số).",
      "items": [
       {
        "s": "Với m = 2, hàm số là y = x + 3.",
        "answer": true,
        "level": "B",
        "explain": "m − 1 = 1.",
        "check": "2-1===1"
       },
       {
        "s": "Với m = 1, hàm số đã cho là hàm số bậc nhất.",
        "answer": false,
        "level": "B",
        "explain": "m − 1 = 0, hàm số là y = 3 (hàm hằng).",
        "check": "(1-1)!==0"
       },
       {
        "s": "Với m = 3, đồ thị đi qua điểm (1; 5).",
        "answer": true,
        "level": "H",
        "explain": "y = 2 · 1 + 3 = 5.",
        "check": "(3-1)*1+3===5"
       },
       {
        "s": "Đồ thị song song với đường thẳng y = 2x khi m = 3.",
        "answer": true,
        "level": "V",
        "explain": "m − 1 = 2 và 3 ≠ 0.",
        "check": "3-1===2"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "Giải phương trình 5x + 4 = 19.",
      "answer": "3",
      "explain": "5x = 15 ⇒ x = 3.",
      "calc": "(19-4)/5"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Tính giá trị của phân thức {{x<sup>2</sup> − 9|x − 3}} tại x = 7.",
      "answer": "10",
      "explain": "Rút gọn được x + 3; tại x = 7 bằng 10.",
      "calc": "(49-9)/(7-3)"
     },
     {
      "level": "V",
      "topic": "t3",
      "q": "Tổng số tuổi của bố và con là 48. Tuổi bố gấp 3 lần tuổi con. Con bao nhiêu tuổi?",
      "answer": "12",
      "explain": "x + 3x = 48 ⇒ x = 12.",
      "calc": "48/4",
      "unit": "tuổi"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Đường thẳng y = ax + b đi qua hai điểm (0; 2) và (1; 5). Tìm a.",
      "answer": "3",
      "explain": "b = 2; a + 2 = 5 ⇒ a = 3.",
      "calc": "5-2"
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
        "q": "Giải phương trình 3(x − 2) = x + 4.",
        "answer": "3x − 6 = x + 4 ⇒ 2x = 10 ⇒ x = 5.",
        "rubric": [
         [
          "Khai triển, chuyển vế 2x = 10",
          0.25
         ],
         [
          "x = 5",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Tính: {{1|x − 2}} + {{1|x + 2}} (x ≠ ±2).",
        "answer": "Mẫu chung (x − 2)(x + 2) = x<sup>2</sup> − 4. Tổng = {{x + 2 + x − 2|x<sup>2</sup> − 4}} = {{2x|x<sup>2</sup> − 4}}.",
        "rubric": [
         [
          "Tìm mẫu chung",
          0.25
         ],
         [
          "Quy đồng và cộng tử",
          0.25
         ],
         [
          "Kết quả {{2x|x<sup>2</sup> − 4}}",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Một ô tô đi từ A đến B với vận tốc 50 km/h rồi quay về A với vận tốc 40 km/h. Tổng thời gian đi và về là 9 giờ.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Tính quãng đường AB.",
        "answer": "Gọi quãng đường là x (km), x > 0. Thời gian đi {{x|50}}, về {{x|40}}. Ta có {{x|50}} + {{x|40}} = 9 ⇔ {{9x|200}} = 9 ⇔ x = 200 (thoả mãn). Quãng đường AB dài 200 km.",
        "rubric": [
         [
          "Gọi ẩn, đặt điều kiện",
          0.25
         ],
         [
          "Lập phương trình",
          0.5
         ],
         [
          "Giải x = 200",
          0.25
         ],
         [
          "Đối chiếu điều kiện, kết luận",
          0.25
         ]
        ],
        "calc": "200/50+200/40"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Bài toán về hàm số.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Tìm m để đồ thị hàm số y = (2m − 1)x + m đi qua điểm A(1; 5).",
        "answer": "Thay x = 1, y = 5: 2m − 1 + m = 5 ⇒ m = 2. Khi đó 2m − 1 = 3 ≠ 0 (hàm số bậc nhất).",
        "rubric": [
         [
          "Thay toạ độ lập phương trình",
          0.25
         ],
         [
          "m = 2",
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
   "scope": "Chương VI – X (Bài 21 – Bài 39), trọng tâm Chương VIII (xác suất), IX (tam giác đồng dạng), X (hình chóp đều).",
   "review": {
    "sections": [
     {
      "chapter": "c7",
      "title": "Ôn nhanh Chương VI – VII",
      "points": [
       "Phân thức đại số và các phép tính.",
       "Phương trình bậc nhất, giải bài toán bằng cách lập phương trình, hàm số bậc nhất."
      ]
     },
     {
      "chapter": "c8",
      "title": "Chương VIII. Mở đầu về tính xác suất của biến cố",
      "points": [
       "Kết quả có thể, kết quả thuận lợi cho biến cố.",
       "Khi các kết quả đồng khả năng: P(E) = số kết quả thuận lợi : số kết quả có thể.",
       "Xác suất thực nghiệm xấp xỉ xác suất khi số lần thử đủ lớn."
      ]
     },
     {
      "chapter": "c9",
      "title": "Chương IX. Tam giác đồng dạng",
      "points": [
       "Hai tam giác đồng dạng: góc tương ứng bằng nhau, cạnh tương ứng tỉ lệ (tỉ số k).",
       "Các trường hợp đồng dạng: c.c.c, c.g.c, g.g; tam giác vuông: một góc nhọn bằng nhau, hai cạnh góc vuông tỉ lệ, cạnh huyền – cạnh góc vuông tỉ lệ.",
       "Định lí Pythagore và định lí đảo."
      ],
      "example": "Tam giác vuông có cạnh huyền 13, một cạnh góc vuông 5 ⇒ cạnh còn lại √(169 − 25) = 12."
     },
     {
      "chapter": "c10",
      "title": "Chương X. Một số hình khối trong thực tiễn",
      "points": [
       "Hình chóp tam giác đều, tứ giác đều: đỉnh, mặt bên, mặt đáy, chiều cao, trung đoạn.",
       "S<sub>xq</sub> = {{1|2}} · chu vi đáy · trung đoạn; V = {{1|3}} · S<sub>đáy</sub> · h."
      ]
     }
    ],
    "mistakes": [
     "Viết sai thứ tự đỉnh tương ứng khi đồng dạng.",
     "Dùng Pythagore cho tam giác không vuông.",
     "Quên hệ số {{1|3}} khi tính thể tích hình chóp."
    ],
    "forms": [
     "Tính xác suất.",
     "Chứng minh tam giác đồng dạng, suy ra hệ thức.",
     "Pythagore trong bài toán thực tế.",
     "Diện tích xung quanh, thể tích hình chóp đều."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c7",
      "content": "Phương trình bậc nhất một ẩn",
      "yccd": {
       "B": "Nhận biết nghiệm.",
       "H": "Giải phương trình đưa về dạng bậc nhất.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c8",
      "content": "Kết quả có thể, kết quả thuận lợi; xác suất của biến cố",
      "yccd": {
       "B": "Nhận biết số kết quả có thể, công thức xác suất.",
       "H": "Tính xác suất.",
       "V": "Bài toán xác suất trong thực tế."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c9",
      "content": "Tam giác đồng dạng; định lí Pythagore",
      "yccd": {
       "B": "Nhận biết tỉ số đồng dạng, định lí Pythagore.",
       "H": "Tính cạnh bằng Pythagore, tam giác đồng dạng.",
       "V": "Chứng minh đồng dạng, hệ thức; bài toán thực tế."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c10",
      "content": "Hình chóp tam giác đều, hình chóp tứ giác đều",
      "yccd": {
       "B": "Nhận biết mặt đáy, mặt bên.",
       "H": "Tính thể tích hình chóp.",
       "V": "Tính diện tích xung quanh."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Tung một đồng xu. Số kết quả có thể là:",
      "options": [
       "2",
       "1",
       "3",
       "4"
      ],
      "answer": 0,
      "explain": "Sấp hoặc ngửa.",
      "calc": "2"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Khi các kết quả có thể là đồng khả năng, xác suất của biến cố E bằng:",
      "options": [
       "số kết quả thuận lợi cho E : số kết quả có thể",
       "số kết quả có thể : số kết quả thuận lợi cho E",
       "số kết quả thuận lợi cho E",
       "1 − số kết quả có thể"
      ],
      "answer": 0,
      "explain": "Định nghĩa xác suất theo tỉ số."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Nếu ΔABC ∽ ΔDEF thì:",
      "options": [
       "{{AB|EF}} = {{BC|DE}}",
       "AB = DE",
       "∠A = ∠E",
       "{{AB|DE}} = {{BC|EF}}"
      ],
      "answer": 3,
      "explain": "Các cạnh tương ứng tỉ lệ, các góc tương ứng bằng nhau."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Tam giác vuông có hai cạnh góc vuông 3 cm và 4 cm thì cạnh huyền dài:",
      "options": [
       "7 cm",
       "5 cm",
       "25 cm",
       "12 cm"
      ],
      "answer": 1,
      "explain": "√(9 + 16) = 5.",
      "calc": "Math.sqrt(9+16)"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Tam giác ABC vuông tại A. Theo định lí Pythagore:",
      "options": [
       "AB<sup>2</sup> = BC<sup>2</sup> + AC<sup>2</sup>",
       "AC<sup>2</sup> = AB<sup>2</sup> + BC<sup>2</sup>",
       "BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup>",
       "BC = AB + AC"
      ],
      "answer": 2,
      "explain": "Bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Mặt đáy của hình chóp tam giác đều là:",
      "options": [
       "tam giác đều",
       "tam giác vuông",
       "hình vuông",
       "tam giác cân bất kì"
      ],
      "answer": 0,
      "explain": "Đáy là tam giác đều, các mặt bên là tam giác cân bằng nhau."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Hình chóp tứ giác đều có bao nhiêu mặt bên?",
      "options": [
       "5",
       "8",
       "4",
       "6"
      ],
      "answer": 2,
      "explain": "4 mặt bên và 1 mặt đáy hình vuông.",
      "calc": "4"
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Nghiệm của phương trình x − 7 = 0 là:",
      "options": [
       "−7",
       "7",
       "0",
       "1"
      ],
      "answer": 1,
      "explain": "x = 7.",
      "calc": "7"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Hộp có 4 bi đỏ và 6 bi vàng. Lấy ngẫu nhiên một viên. Xác suất lấy được bi vàng là:",
      "options": [
       "{{2|5}}",
       "{{3|5}}",
       "{{2|3}}",
       "{{1|6}}"
      ],
      "answer": 1,
      "explain": "6 : 10 = {{3|5}}.",
      "calc": "6/10"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "ΔABC ∽ ΔDEF theo tỉ số k = 2, DE = 3 cm. Độ dài AB là:",
      "options": [
       "1,5 cm",
       "5 cm",
       "6 cm",
       "3 cm"
      ],
      "answer": 2,
      "explain": "AB = k · DE = 6 cm.",
      "calc": "2*3"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác có ba cạnh 6 cm, 8 cm, 10 cm là:",
      "options": [
       "tam giác đều",
       "tam giác tù",
       "tam giác cân",
       "tam giác vuông"
      ],
      "answer": 3,
      "explain": "6<sup>2</sup> + 8<sup>2</sup> = 100 = 10<sup>2</sup> (định lí Pythagore đảo)."
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Hình chóp tứ giác đều có cạnh đáy 6 cm, chiều cao 5 cm. Thể tích là:",
      "options": [
       "180 cm³",
       "90 cm³",
       "30 cm³",
       "60 cm³"
      ],
      "answer": 3,
      "explain": "V = {{1|3}} · 6<sup>2</sup> · 5 = 60 (cm³).",
      "calc": "36*5/3"
     }
    ],
    "tf": [
     {
      "topic": "t3",
      "q": "Tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm.",
      "items": [
       {
        "s": "BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup>.",
        "answer": true,
        "level": "B",
        "explain": "Định lí Pythagore.",
        "check": "6*6+8*8===10*10"
       },
       {
        "s": "BC = 14 cm.",
        "answer": false,
        "level": "B",
        "explain": "BC = √100 = 10 cm, không phải 6 + 8.",
        "check": "Math.sqrt(36+64)===14"
       },
       {
        "s": "BC = 10 cm.",
        "answer": true,
        "level": "H",
        "explain": "√(36 + 64) = 10.",
        "check": "Math.sqrt(36+64)===10"
       },
       {
        "s": "Nếu ΔMNP ∽ ΔABC và MN = 3 cm (MN tương ứng AB) thì NP = 5 cm.",
        "answer": true,
        "level": "H",
        "explain": "Tỉ số {{1|2}} ⇒ NP = BC : 2 = 5.",
        "check": "10*3/6===5"
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Lớp 8A có 40 học sinh, trong đó 16 bạn đăng kí câu lạc bộ bóng rổ. Chọn ngẫu nhiên một bạn của lớp.",
      "items": [
       {
        "s": "Số kết quả có thể là 40.",
        "answer": true,
        "level": "B",
        "explain": "Mỗi bạn là một kết quả."
       },
       {
        "s": "Xác suất chọn được bạn đăng kí bóng rổ là 0,6.",
        "answer": false,
        "level": "B",
        "explain": "16 : 40 = 0,4.",
        "check": "16/40===0.6"
       },
       {
        "s": "Xác suất chọn được bạn không đăng kí bóng rổ là 0,6.",
        "answer": true,
        "level": "H",
        "explain": "24 : 40 = 0,6.",
        "check": "24/40===0.6"
       },
       {
        "s": "Nếu lớp nhận thêm 4 bạn mới và cả 4 bạn đều đăng kí bóng rổ thì xác suất chọn được bạn đăng kí bóng rổ là {{5|11}}.",
        "answer": true,
        "level": "V",
        "explain": "20 : 44 = {{5|11}}.",
        "check": "Math.abs(20/44-5/11)<1e-12"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "Tam giác vuông có hai cạnh góc vuông 5 cm và 12 cm. Cạnh huyền dài bao nhiêu xăng-ti-mét?",
      "answer": "13",
      "explain": "√(25 + 144) = 13.",
      "calc": "Math.sqrt(25+144)",
      "unit": "cm"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Giải phương trình {{2x|3}} = 4.",
      "answer": "6",
      "explain": "2x = 12 ⇒ x = 6.",
      "calc": "4*3/2"
     },
     {
      "level": "V",
      "topic": "t3",
      "q": "Một chiếc thang dài 5 m dựa vào tường, chân thang cách chân tường 3 m. Đỉnh thang cao bao nhiêu mét so với mặt đất?",
      "answer": "4",
      "explain": "√(25 − 9) = 4.",
      "calc": "Math.sqrt(25-9)",
      "unit": "m"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Hình chóp tứ giác đều có cạnh đáy 4 cm, trung đoạn 5 cm. Tính diện tích xung quanh (cm²).",
      "answer": "40",
      "explain": "S<sub>xq</sub> = {{1|2}} · chu vi đáy · trung đoạn = {{1|2}} · 16 · 5 = 40.",
      "calc": "16*5/2",
      "unit": "cm²"
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
        "q": "4x − 5 = 2x + 7.",
        "answer": "2x = 12 ⇒ x = 6.",
        "rubric": [
         [
          "Chuyển vế 2x = 12",
          0.25
         ],
         [
          "x = 6",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "{{x + 1|2}} − {{x|3}} = 1.",
        "answer": "Nhân hai vế với 6: 3(x + 1) − 2x = 6 ⇒ x + 3 = 6 ⇒ x = 3.",
        "rubric": [
         [
          "Quy đồng, khử mẫu",
          0.25
         ],
         [
          "Thu gọn x + 3 = 6",
          0.25
         ],
         [
          "x = 3",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Cho tam giác ABC vuông tại A, đường cao AH (H ∈ BC).",
      "parts": [
       {
        "level": "V",
        "points": 0.75,
        "q": "Chứng minh ΔHBA ∽ ΔABC.",
        "answer": "Xét ΔHBA và ΔABC: ∠BHA = ∠BAC = 90°; ∠B chung. Vậy ΔHBA ∽ ΔABC (g.g).",
        "rubric": [
         [
          "∠BHA = ∠BAC = 90°",
          0.25
         ],
         [
          "∠B chung",
          0.25
         ],
         [
          "Kết luận đồng dạng (g.g)",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Chứng minh AB<sup>2</sup> = BH · BC.",
        "answer": "Từ ΔHBA ∽ ΔABC suy ra {{BH|AB}} = {{AB|BC}}, do đó AB<sup>2</sup> = BH · BC.",
        "rubric": [
         [
          "Lập tỉ số cạnh tương ứng",
          0.25
         ],
         [
          "Suy ra hệ thức",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Bài toán xác suất.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Tính xác suất số được chọn chia hết cho 9.",
        "answer": "Có 90 số có hai chữ số (10 → 99). Các số chia hết cho 9: 18; 27; …; 99, gồm 10 số. Xác suất = {{10|90}} = {{1|9}}.",
        "rubric": [
         [
          "Đếm 90 kết quả và 10 kết quả thuận lợi",
          0.25
         ],
         [
          "Xác suất {{1|9}}",
          0.25
         ]
        ],
        "calc": "(function(){var c=0;for(var n=10;n<100;n++)if(n%9===0)c++;return c})()"
       }
      ]
     }
    ]
   }
  }
 ]
});
