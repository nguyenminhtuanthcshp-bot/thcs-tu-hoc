/* Toán 8 – Ôn tập và đề kiểm tra định kì theo cấu trúc CV 7991/BGDĐT-GDTrH. Nội dung do nhóm biên soạn tự viết. */
THCS.registerExams("toan-8", {
 "split": "Nội dung được chia theo thứ tự bài học SGK Toán 8 “Kết nối tri thức với cuộc sống” và tiến độ năm học thường dùng (35 tuần: học kì I 18 tuần, học kì II 17 tuần). <b>Giữa kì 1</b> (khoảng tuần 8–9): Chương I – II. <b>Cuối kì 1</b> (khoảng tuần 16–17): Chương I – V, trọng tâm Chương III – V. <b>Giữa kì 2</b> (khoảng tuần 25–26): Chương VI – VII. <b>Cuối kì 2</b> (khoảng tuần 32–33): Chương VI – X, trọng tâm Chương VIII – X. Nhiều trường dạy song song mạch Đại số và mạch Hình học nên phạm vi thật có thể khác một chút – em nên hỏi thầy cô phạm vi chính thức của trường mình.",
 "checkpoints": [
  {
   "id": "giua-ki-1",
   "name": "Giữa học kì 1",
   "scope": "Chương I – II (Bài 1 – Bài 9): đa thức, hằng đẳng thức đáng nhớ.",
   "review": {
    "sections": [
     {
      "chapter": "c1",
      "title": "Chương I. Đa thức",
      "points": [
       "Đơn thức: số, biến hoặc tích của số và biến; bậc là tổng số mũ các biến. Đơn thức đồng dạng có cùng phần biến.",
       "Đa thức: tổng các đơn thức; bậc là bậc của hạng tử bậc cao nhất (sau khi thu gọn).",
       "Cộng, trừ: cộng/trừ các hạng tử đồng dạng. Nhân: nhân từng hạng tử. Chia đa thức cho đơn thức: chia từng hạng tử."
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
      "example": "x<sup>2</sup> − 2xy + y<sup>2</sup> − 9 = (x − y)<sup>2</sup> − 3<sup>2</sup> = (x − y − 3)(x − y + 3)."
     }
    ],
    "mistakes": [
     "Khai triển (a − b)<sup>2</sup> thành a<sup>2</sup> − b<sup>2</sup>.",
     "Quên đổi dấu khi bỏ ngoặc có dấu trừ.",
     "Đặt nhân tử chung chưa triệt để."
    ],
    "forms": [
     "Thu gọn, cộng, trừ, nhân, chia đa thức.",
     "Tính nhanh, tính giá trị biểu thức bằng hằng đẳng thức.",
     "Phân tích thành nhân tử; tìm x."
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
       "H": "",
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
       "V": "Biểu diễn đại lượng thực tế bằng đa thức."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c2",
      "content": "Hằng đẳng thức đáng nhớ",
      "yccd": {
       "B": "Nhận biết bảy hằng đẳng thức.",
       "H": "Tính nhanh bằng hằng đẳng thức.",
       "V": "Tính giá trị biểu thức, chứng minh bất đẳng thức đơn giản."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c2",
      "content": "Phân tích đa thức thành nhân tử",
      "yccd": {
       "B": "",
       "H": "Đặt nhân tử chung; dùng hằng đẳng thức.",
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
      "explain": "Đơn thức là một số, một biến hoặc tích của số và các biến."
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
      "explain": "Hai đơn thức đồng dạng có cùng phần biến xy<sup>2</sup>."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Kết quả của x<sup>2</sup> · x<sup>3</sup> là:",
      "options": [
       "x<sup>5</sup>",
       "x<sup>6</sup>",
       "x<sup>1</sup>",
       "2x<sup>5</sup>"
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
       "a<sup>2</sup> − 2ab + b<sup>2</sup>",
       "a<sup>2</sup> + ab + b<sup>2</sup>",
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
       "(a − b)(a<sup>2</sup> + ab + b<sup>2</sup>)",
       "(a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)",
       "(a + b)(a<sup>2</sup> + b<sup>2</sup>)"
      ],
      "answer": 2,
      "explain": "Tổng hai lập phương."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Thu gọn 3x(x − 2) − 3x<sup>2</sup> được:",
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
      "q": "Tính nhanh 101<sup>2</sup> − 1 được:",
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
      "q": "Kết quả phép chia 6x<sup>3</sup>y<sup>2</sup> : 2xy là:",
      "options": [
       "3x<sup>3</sup>y",
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
      "q": "Phân tích x<sup>2</sup> − 4x thành nhân tử được:",
      "options": [
       "x(x − 4)",
       "x(x + 4)",
       "(x − 2)<sup>2</sup>",
       "4x(x − 1)"
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
        "s": "Bậc của đa thức A là 3.",
        "answer": true,
        "level": "B",
        "explain": "Hạng tử 2x<sup>2</sup>y có bậc 3."
       },
       {
        "s": "Hạng tử tự do (hạng tử không chứa biến) của A là −5.",
        "answer": false,
        "level": "B",
        "explain": "Hạng tử tự do của A là 5."
       },
       {
        "s": "A + B = 3x<sup>2</sup>y + 4.",
        "answer": true,
        "level": "H",
        "explain": "−3xy + 3xy = 0; 5 − 1 = 4.",
        "check": "(function(x,y){return 2*x*x*y-3*x*y+5+(x*x*y+3*x*y-1)===3*x*x*y+4})(2,3)"
       },
       {
        "s": "A − B = x<sup>2</sup>y − 6xy + 4.",
        "answer": false,
        "level": "H",
        "explain": "A − B = x<sup>2</sup>y − 6xy + 6.",
        "check": "(function(x,y){return 2*x*x*y-3*x*y+5-(x*x*y+3*x*y-1)===x*x*y-6*x*y+4})(2,3)"
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
        "check": "(function(x){return (x+3)*(x+3)===x*x+6*x+9})(5)"
       },
       {
        "s": "(2x − 1)<sup>2</sup> = 4x<sup>2</sup> − 1.",
        "answer": false,
        "level": "B",
        "explain": "(2x − 1)<sup>2</sup> = 4x<sup>2</sup> − 4x + 1.",
        "check": "(function(x){return (2*x-1)*(2*x-1)===4*x*x-1})(5)"
       },
       {
        "s": "x<sup>2</sup> − 9 = (x − 3)(x + 3).",
        "answer": true,
        "level": "H",
        "explain": "Hiệu hai bình phương.",
        "check": "(function(x){return x*x-9===(x-3)*(x+3)})(7)"
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
      "q": "Tìm hệ số của x trong khai triển (x + 2)(x − 5).",
      "answer": "-3",
      "explain": "x<sup>2</sup> − 5x + 2x − 10 = x<sup>2</sup> − 3x − 10.",
      "calc": "-5+2",
      "answerText": "−3"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Tìm x âm thoả mãn x<sup>2</sup> − 25 = 0.",
      "answer": "-5",
      "explain": "(x − 5)(x + 5) = 0 ⇒ x = 5 hoặc x = −5; chọn x = −5.",
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
        "q": "Thực hiện phép nhân: (2x + 1)(x − 3).",
        "answer": "2x<sup>2</sup> − 6x + x − 3 = 2x<sup>2</sup> − 5x − 3.",
        "rubric": [
         [
          "Nhân từng hạng tử",
          0.25
         ],
         [
          "Thu gọn đúng",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Phân tích đa thức x<sup>3</sup> − 4x thành nhân tử.",
        "answer": "x<sup>3</sup> − 4x = x(x<sup>2</sup> − 4) = x(x − 2)(x + 2).",
        "rubric": [
         [
          "Đặt nhân tử chung x",
          0.25
         ],
         [
          "Nhận ra x<sup>2</sup> − 4 là hiệu hai bình phương",
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
      "q": "Một mảnh vườn hình vuông cạnh x mét. Người ta mở rộng mỗi cạnh thêm 3 m để được mảnh vườn hình vuông mới.",
      "parts": [
       {
        "level": "V",
        "points": 0.75,
        "q": "Viết đa thức biểu thị phần diện tích tăng thêm và thu gọn.",
        "answer": "(x + 3)<sup>2</sup> − x<sup>2</sup> = x<sup>2</sup> + 6x + 9 − x<sup>2</sup> = 6x + 9 (m²).",
        "rubric": [
         [
          "Lập biểu thức (x + 3)<sup>2</sup> − x<sup>2</sup>",
          0.25
         ],
         [
          "Khai triển hằng đẳng thức",
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
        "answer": "x<sup>2</sup> − 2x + 2 = (x − 1)<sup>2</sup> + 1 ≥ 1 > 0.",
        "rubric": [
         [
          "Viết được (x − 1)<sup>2</sup> + 1",
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
       "Phép tính với đa thức; bảy hằng đẳng thức đáng nhớ; phân tích thành nhân tử.",
       "Tính nhanh bằng hằng đẳng thức: 99 · 101 = 100<sup>2</sup> − 1."
      ]
     },
     {
      "chapter": "c3",
      "title": "Chương III. Tứ giác",
      "points": [
       "Tổng bốn góc của tứ giác bằng 360°.",
       "Hình thang cân: hai góc kề một đáy bằng nhau, hai đường chéo bằng nhau.",
       "Hình bình hành: cạnh đối song song và bằng nhau, góc đối bằng nhau, đường chéo cắt nhau tại trung điểm mỗi đường.",
       "Hình chữ nhật: hình bình hành có một góc vuông hoặc hai đường chéo bằng nhau. Hình thoi: bốn cạnh bằng nhau, đường chéo vuông góc và là phân giác. Hình vuông: vừa là hình chữ nhật vừa là hình thoi."
      ]
     },
     {
      "chapter": "c4",
      "title": "Chương IV. Định lí Thalès",
      "points": [
       "MN ∥ BC ⇒ {{AM|AB}} = {{AN|AC}}; định lí đảo.",
       "Đường trung bình của tam giác song song với cạnh thứ ba và bằng nửa cạnh ấy.",
       "Đường phân giác AD: {{DB|DC}} = {{AB|AC}}."
      ]
     },
     {
      "chapter": "c5",
      "title": "Chương V. Dữ liệu và biểu đồ",
      "points": [
       "Dữ liệu định tính, định lượng; tính hợp lí của dữ liệu.",
       "Chọn biểu đồ phù hợp: cột, cột kép, quạt tròn, đoạn thẳng; phân tích số liệu dựa vào biểu đồ."
      ]
     }
    ],
    "mistakes": [
     "Nhầm tính chất đường chéo của hình thoi và hình chữ nhật.",
     "Lập sai tỉ số trong định lí Thalès (lấy đoạn của cạnh này chia đoạn của cạnh kia không tương ứng)."
    ],
    "forms": [
     "Tính góc, cạnh của tứ giác đặc biệt.",
     "Chứng minh tứ giác là hình bình hành, chữ nhật, thoi, vuông.",
     "Định lí Thalès, đường trung bình, đường phân giác; đo gián tiếp."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c2",
      "content": "Đa thức; hằng đẳng thức; phân tích thành nhân tử",
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
       "B": "Nhận biết tính chất các tứ giác đặc biệt.",
       "H": "Tính góc, độ dài trong tứ giác.",
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
       "V": "Đo gián tiếp chiều cao, khoảng cách."
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
       "V": "Phân tích số liệu từ bảng, biểu đồ."
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
       "90°",
       "360°"
      ],
      "answer": 3,
      "explain": "Tứ giác chia được thành hai tam giác.",
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
       "song song với nhau"
      ],
      "answer": 1,
      "explain": "Tính chất đường chéo của hình bình hành."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Hình chữ nhật có:",
      "options": [
       "hai đường chéo vuông góc",
       "bốn cạnh bằng nhau",
       "hai cạnh kề bằng nhau",
       "bốn góc vuông"
      ],
      "answer": 3,
      "explain": "Định nghĩa hình chữ nhật."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Tứ giác có bốn cạnh bằng nhau là:",
      "options": [
       "hình chữ nhật",
       "hình thoi",
       "hình thang cân",
       "hình bình hành có một góc vuông"
      ],
      "answer": 1,
      "explain": "Định nghĩa hình thoi."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Đường trung bình của tam giác:",
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
      "q": "Cho tam giác ABC, M ∈ AB, N ∈ AC và MN ∥ BC. Khẳng định đúng là:",
      "options": [
       "{{AM|AB}} = {{AC|AN}}",
       "{{AM|MB}} = {{AC|NC}}",
       "AM = AN",
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
       "Tên các tỉnh",
       "Chiều cao (cm) của học sinh",
       "Loại phương tiện đến trường"
      ],
      "answer": 2,
      "explain": "Dữ liệu định lượng là số đo, số đếm."
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
       "70°",
       "100°",
       "110°",
       "120°"
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
      "q": "AD là đường phân giác của tam giác ABC (D ∈ BC), AB = 6 cm, AC = 9 cm. Tỉ số {{DB|DC}} bằng:",
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
      "explain": "Hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường: OB = BD : 2 = 5 cm.",
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
        "explain": "Các cạnh đối bằng nhau."
       },
       {
        "s": "∠C = 110°.",
        "answer": false,
        "level": "B",
        "explain": "Các góc đối bằng nhau: ∠C = ∠A = 70°."
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
        "check": "10/2===10"
       },
       {
        "s": "MN = 5 cm.",
        "answer": true,
        "level": "H",
        "explain": "Tính chất đường trung bình.",
        "check": "10/2===5"
       },
       {
        "s": "Chu vi tam giác AMN bằng 12 cm.",
        "answer": true,
        "level": "V",
        "explain": "AM + AN + MN = 3 + 4 + 5 = 12 (cm).",
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
      "q": "Một cọc cao 1,5 m có bóng dài 2 m trên mặt đất; cùng lúc đó bóng của một cái cây dài 12 m. Tính chiều cao của cây (m).",
      "answer": "9",
      "explain": "Các tia nắng song song nên tỉ số chiều cao và bóng bằng nhau: h = 1,5 · 12 : 2 = 9.",
      "calc": "1.5*12/2",
      "unit": "m"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Doanh thu bốn quý của một cửa hàng lần lượt là 120; 150; 180; 150 triệu đồng. Doanh thu quý III chiếm bao nhiêu phần trăm doanh thu cả năm?",
      "answer": "30",
      "explain": "Cả năm 600 triệu; 180 : 600 = 30%.",
      "calc": "180/600*100",
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
          "Áp dụng hiệu hai bình phương",
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
        "answer": "(x − y)<sup>2</sup> − 9 = (x − y − 3)(x − y + 3).",
        "rubric": [
         [
          "Nhóm (x − y)<sup>2</sup>",
          0.25
         ],
         [
          "Nhận ra hiệu hai bình phương",
          0.25
         ],
         [
          "Kết quả",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Cho tam giác ABC. Gọi M, N, P lần lượt là trung điểm của AB, AC, BC.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Chứng minh tứ giác BMNP là hình bình hành.",
        "answer": "MN là đường trung bình của tam giác ABC nên MN ∥ BC và MN = {{BC|2}}. P là trung điểm BC nên BP = {{BC|2}}. Do đó MN ∥ BP và MN = BP, tứ giác BMNP có một cặp cạnh đối song song và bằng nhau nên là hình bình hành.",
        "rubric": [
         [
          "MN ∥ BC",
          0.25
         ],
         [
          "MN = BC : 2",
          0.25
         ],
         [
          "BP = BC : 2",
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
      "q": "Bài toán nhận biết.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Tứ giác có hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường là hình gì? Vì sao?",
        "answer": "Hai đường chéo cắt nhau tại trung điểm mỗi đường ⇒ hình bình hành; hình bình hành có hai đường chéo bằng nhau ⇒ hình chữ nhật.",
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
   "scope": "Chương VI – VII (Bài 21 – Bài 29): phân thức, phương trình bậc nhất, hàm số bậc nhất.",
   "review": {
    "sections": [
     {
      "chapter": "c6",
      "title": "Chương VI. Phân thức đại số",
      "points": [
       "Phân thức {{A|B}} (B ≠ 0); điều kiện xác định: mẫu khác 0.",
       "Tính chất cơ bản: nhân/chia cả tử và mẫu cho cùng một đa thức khác 0. Rút gọn: phân tích tử, mẫu thành nhân tử rồi chia cho nhân tử chung.",
       "Cộng, trừ: quy đồng mẫu. Nhân: tử nhân tử, mẫu nhân mẫu. Chia: nhân với phân thức nghịch đảo."
      ]
     },
     {
      "chapter": "c7",
      "title": "Chương VII. Phương trình bậc nhất và hàm số bậc nhất",
      "points": [
       "Phương trình ax + b = 0 (a ≠ 0) có nghiệm x = −{{b|a}}.",
       "Giải bài toán bằng cách lập phương trình: chọn ẩn, đặt điều kiện, lập phương trình, giải, đối chiếu, kết luận.",
       "Hàm số bậc nhất y = ax + b (a ≠ 0): đồ thị là đường thẳng cắt trục tung tại (0; b); a là hệ số góc.",
       "Hai đường thẳng song song khi a = a′ và b ≠ b′; cắt nhau khi a ≠ a′."
      ]
     }
    ],
    "mistakes": [
     "Quên điều kiện xác định của phân thức.",
     "Không đối chiếu điều kiện của ẩn khi giải bài toán.",
     "Nhầm điều kiện song song (cần b ≠ b′)."
    ],
    "forms": [
     "Rút gọn, tính toán phân thức.",
     "Giải phương trình bậc nhất; bài toán chuyển động, năng suất, tuổi.",
     "Hàm số bậc nhất: giá trị, đồ thị, song song, cắt nhau."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c6",
      "content": "Phân thức đại số; tính chất cơ bản",
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
       "H": "Thực hiện phép tính với phân thức.",
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
       "B": "Nhận biết hàm số bậc nhất, hệ số góc, tính giá trị.",
       "H": "Tìm giao điểm với trục, điều kiện song song.",
       "V": "Xác định hàm số từ điều kiện cho trước."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Điều kiện xác định của phân thức {{3|x − 2}} là:",
      "options": [
       "x ≠ −2",
       "x ≠ 3",
       "x ≠ 2",
       "x ≠ 0"
      ],
      "answer": 2,
      "explain": "Mẫu khác 0: x − 2 ≠ 0."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Phân thức {{2x|2x + 2}} (x ≠ −1) bằng phân thức:",
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
      "explain": "3x = 6 ⇒ x = 2.",
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
      "explain": "Hệ số góc là a = −3.",
      "calc": "-3"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Cho f(x) = 2x + 1. Giá trị f(3) là:",
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
      "q": "Kết quả của {{x|3}} + {{2x|3}} là:",
      "options": [
       "{{3x|6}}",
       "{{2x|3}}",
       "x",
       "3x"
      ],
      "answer": 2,
      "explain": "{{3x|3}} = x."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Rút gọn {{x<sup>2</sup> − 1|x + 1}} (x ≠ −1) được:",
      "options": [
       "x − 1",
       "x + 1",
       "x",
       "1"
      ],
      "answer": 0,
      "explain": "x<sup>2</sup> − 1 = (x − 1)(x + 1)."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Nghiệm của phương trình 2(x − 1) = x + 3 là:",
      "options": [
       "5",
       "1",
       "2",
       "−5"
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
      "q": "Đường thẳng y = ax − 2 song song với đường thẳng y = 3x + 1 khi a bằng:",
      "options": [
       "−3",
       "3",
       "1",
       "−2"
      ],
      "answer": 1,
      "explain": "Hai đường thẳng song song khi cùng hệ số góc và tung độ gốc khác nhau (−2 ≠ 1).",
      "calc": "3"
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
        "explain": "x<sup>2</sup> + 2x = x(x + 2) ≠ 0."
       },
       {
        "s": "Tử thức của P là x<sup>2</sup> + 2x.",
        "answer": false,
        "level": "B",
        "explain": "Tử thức là x<sup>2</sup> − 4."
       },
       {
        "s": "P = {{x − 2|x}} với mọi x thuộc điều kiện xác định.",
        "answer": true,
        "level": "H",
        "explain": "P = {{(x − 2)(x + 2)|x(x + 2)}}.",
        "check": "(function(x){return Math.abs((x*x-4)/(x*x+2*x)-(x-2)/x)<1e-12})(3)"
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
      "q": "Cho hàm số y = (m − 1)x + 3.",
      "items": [
       {
        "s": "Với m = 2, hàm số là y = x + 3.",
        "answer": true,
        "level": "B",
        "explain": "m − 1 = 1."
       },
       {
        "s": "Với m = 1, hàm số là hàm số bậc nhất.",
        "answer": false,
        "level": "B",
        "explain": "m = 1 thì a = 0, y = 3 không phải hàm bậc nhất."
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
      "calc": "15/5"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Tính giá trị của phân thức {{x<sup>2</sup> − 9|x − 3}} tại x = 7.",
      "answer": "10",
      "explain": "Rút gọn được x + 3 = 10.",
      "calc": "(49-9)/(7-3)"
     },
     {
      "level": "V",
      "topic": "t3",
      "q": "Tổng số tuổi của bố và con là 48; tuổi bố gấp 3 lần tuổi con. Tính tuổi con.",
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
        "q": "Giải phương trình: 3(x − 2) = x + 4.",
        "answer": "3x − 6 = x + 4 ⇒ 2x = 10 ⇒ x = 5.",
        "rubric": [
         [
          "Khai triển, chuyển vế",
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
        "q": "Rút gọn: {{1|x − 2}} + {{1|x + 2}} (x ≠ ±2).",
        "answer": "Mẫu chung (x − 2)(x + 2): {{x + 2 + x − 2|x<sup>2</sup> − 4}} = {{2x|x<sup>2</sup> − 4}}.",
        "rubric": [
         [
          "Quy đồng mẫu chung",
          0.25
         ],
         [
          "Cộng tử được 2x",
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
        "answer": "Gọi AB = x (km), x > 0. Thời gian đi {{x|50}}, về {{x|40}}. Ta có {{x|50}} + {{x|40}} = 9 ⇔ 4x + 5x = 1 800 ⇔ x = 200 (thoả mãn). Quãng đường AB dài 200 km.",
        "rubric": [
         [
          "Chọn ẩn và điều kiện",
          0.25
         ],
         [
          "Biểu diễn thời gian đi, về",
          0.25
         ],
         [
          "Lập phương trình",
          0.25
         ],
         [
          "Giải được x = 200",
          0.25
         ],
         [
          "Kết luận",
          0.25
         ]
        ],
        "calc": "1800/9"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Bài toán hàm số.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "Tìm m để đồ thị hàm số y = (2m − 1)x + m đi qua điểm A(1; 5).",
        "answer": "Thay x = 1, y = 5: 2m − 1 + m = 5 ⇒ m = 2; khi đó a = 3 ≠ 0 (hàm bậc nhất).",
        "rubric": [
         [
          "Thay toạ độ, lập phương trình theo m",
          0.25
         ],
         [
          "m = 2 và kiểm tra a ≠ 0",
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
       "Phân thức: điều kiện xác định, rút gọn, phép tính.",
       "Phương trình bậc nhất, bài toán lập phương trình; hàm số bậc nhất và đồ thị."
      ]
     },
     {
      "chapter": "c8",
      "title": "Chương VIII. Mở đầu về tính xác suất của biến cố",
      "points": [
       "Kết quả có thể; kết quả thuận lợi cho biến cố.",
       "Khi các kết quả đồng khả năng: P(A) = {{số kết quả thuận lợi|số kết quả có thể}}.",
       "Xác suất thực nghiệm gần với xác suất lí thuyết khi số lần thử lớn."
      ]
     },
     {
      "chapter": "c9",
      "title": "Chương IX. Tam giác đồng dạng",
      "points": [
       "Ba trường hợp đồng dạng: c.c.c, c.g.c, g.g; với tam giác vuông: một góc nhọn bằng nhau, hai cạnh góc vuông tỉ lệ, cạnh huyền – cạnh góc vuông tỉ lệ.",
       "Định lí Pythagore và định lí đảo.",
       "Hình đồng dạng, ứng dụng đo gián tiếp."
      ]
     },
     {
      "chapter": "c10",
      "title": "Chương X. Một số hình khối trong thực tiễn",
      "points": [
       "Hình chóp tam giác đều, tứ giác đều: đáy là đa giác đều, các mặt bên là tam giác cân bằng nhau.",
       "S<sub>xq</sub> = {{1|2}} · chu vi đáy · trung đoạn; V = {{1|3}} · S<sub>đáy</sub> · h."
      ]
     }
    ],
    "mistakes": [
     "Viết sai thứ tự đỉnh khi lập tỉ số của tam giác đồng dạng.",
     "Dùng Pythagore cho tam giác không vuông.",
     "Quên hệ số {{1|3}} trong công thức thể tích hình chóp."
    ],
    "forms": [
     "Tính xác suất bằng tỉ số.",
     "Chứng minh tam giác đồng dạng, suy ra hệ thức; Pythagore.",
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
       "B": "Nhận biết nghiệm của phương trình.",
       "H": "Giải phương trình đưa về bậc nhất.",
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
       "V": "Tính xác suất khi điều kiện thay đổi."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c9",
      "content": "Tam giác đồng dạng; định lí Pythagore",
      "yccd": {
       "B": "Nhận biết tam giác đồng dạng, định lí Pythagore.",
       "H": "Tính cạnh, nhận biết tam giác vuông.",
       "V": "Bài toán thực tế; chứng minh hệ thức."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c10",
      "content": "Hình chóp tam giác đều, hình chóp tứ giác đều",
      "yccd": {
       "B": "Nhận biết các yếu tố của hình chóp đều.",
       "H": "Tính thể tích hình chóp đều.",
       "V": "Tính diện tích xung quanh trong thực tế."
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
      "q": "Khi các kết quả có thể đồng khả năng, xác suất của biến cố A bằng:",
      "options": [
       "số kết quả thuận lợi cho A chia cho số kết quả có thể",
       "số kết quả có thể chia cho số kết quả thuận lợi",
       "số kết quả thuận lợi cho A",
       "số kết quả không thuận lợi"
      ],
      "answer": 0,
      "explain": "Công thức tính xác suất bằng tỉ số."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "ΔABC ∽ ΔDEF thì:",
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
      "q": "Tam giác vuông có hai cạnh góc vuông 3 cm và 4 cm. Cạnh huyền dài:",
      "options": [
       "7 cm",
       "5 cm",
       "25 cm",
       "12 cm"
      ],
      "answer": 1,
      "explain": "3<sup>2</sup> + 4<sup>2</sup> = 25 ⇒ cạnh huyền 5 cm.",
      "calc": "Math.sqrt(9+16)"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Tam giác ABC vuông tại A thì:",
      "options": [
       "AB<sup>2</sup> = BC<sup>2</sup> + AC<sup>2</sup>",
       "BC = AB + AC",
       "BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup>",
       "AC<sup>2</sup> = AB<sup>2</sup> + BC<sup>2</sup>"
      ],
      "answer": 2,
      "explain": "Định lí Pythagore."
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
      "explain": "Định nghĩa hình chóp tam giác đều."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Hình chóp tứ giác đều có bao nhiêu mặt bên?",
      "options": [
       "5",
       "3",
       "4",
       "8"
      ],
      "answer": 2,
      "explain": "Bốn mặt bên là các tam giác cân bằng nhau.",
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
      "q": "Hộp có 4 bi đỏ và 6 bi vàng. Lấy ngẫu nhiên một viên, xác suất lấy được bi vàng là:",
      "options": [
       "{{2|5}}",
       "{{3|5}}",
       "{{2|3}}",
       "{{1|6}}"
      ],
      "answer": 1,
      "explain": "{{6|10}} = {{3|5}}.",
      "calc": "6/10"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "ΔABC ∽ ΔDEF với tỉ số đồng dạng {{AB|DE}} = 2 và DE = 3 cm. Độ dài AB là:",
      "options": [
       "1,5 cm",
       "5 cm",
       "6 cm",
       "9 cm"
      ],
      "answer": 2,
      "explain": "AB = 2 · DE.",
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
       "30 cm³",
       "90 cm³",
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
        "explain": "Định lí Pythagore."
       },
       {
        "s": "BC = 14 cm.",
        "answer": false,
        "level": "B",
        "explain": "BC = 10 cm.",
        "check": "Math.sqrt(36+64)===14"
       },
       {
        "s": "BC = 10 cm.",
        "answer": true,
        "level": "H",
        "explain": "BC<sup>2</sup> = 36 + 64 = 100.",
        "check": "Math.sqrt(36+64)===10"
       },
       {
        "s": "Nếu ΔMNP ∽ ΔABC với MN = 3 cm (MN tương ứng với AB) thì NP = 5 cm.",
        "answer": true,
        "level": "H",
        "explain": "Tỉ số {{3|6}} = {{1|2}} nên NP = 10 : 2 = 5 cm.",
        "check": "10*3/6===5"
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Lớp 8A có 40 học sinh, trong đó 16 bạn đăng kí câu lạc bộ bóng rổ. Chọn ngẫu nhiên một bạn.",
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
        "s": "Nếu lớp có thêm 4 bạn mới và cả 4 bạn đều đăng kí bóng rổ thì xác suất chọn được bạn đăng kí bóng rổ là {{5|11}}.",
        "answer": true,
        "level": "V",
        "explain": "{{20|44}} = {{5|11}}.",
        "check": "Math.abs(20/44-5/11)<1e-12"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "Tam giác vuông có hai cạnh góc vuông 5 cm và 12 cm. Tính cạnh huyền (cm).",
      "answer": "13",
      "explain": "25 + 144 = 169 = 13<sup>2</sup>.",
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
      "q": "Một chiếc thang dài 5 m dựa vào tường, chân thang cách chân tường 3 m. Hỏi đầu thang chạm tường ở độ cao bao nhiêu mét?",
      "answer": "4",
      "explain": "h<sup>2</sup> = 5<sup>2</sup> − 3<sup>2</sup> = 16 ⇒ h = 4 (m).",
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
        "answer": "Xét ΔHBA và ΔABC: ∠AHB = ∠BAC = 90°, ∠B chung ⇒ ΔHBA ∽ ΔABC (g.g).",
        "rubric": [
         [
          "∠AHB = ∠BAC = 90°",
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
        "answer": "Từ ΔHBA ∽ ΔABC: {{HB|AB}} = {{AB|BC}} ⇒ AB<sup>2</sup> = BH · BC.",
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
        "q": "Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Tính xác suất để số đó chia hết cho 9.",
        "answer": "Có 90 số có hai chữ số. Các số chia hết cho 9: 18; 27; …; 99 (10 số). Xác suất {{10|90}} = {{1|9}}.",
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
        "calc": "(function(){var n=0;for(var i=10;i<100;i++)if(i%9===0)n++;return n/90})()"
       }
      ]
     }
    ]
   }
  }
 ]
});
