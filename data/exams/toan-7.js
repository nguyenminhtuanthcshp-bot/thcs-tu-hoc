/* Toán 7 – Ôn tập và đề kiểm tra định kì theo cấu trúc CV 7991/BGDĐT-GDTrH. Nội dung do nhóm biên soạn tự viết. */
THCS.registerExams("toan-7", {
 "split": "Nội dung được chia theo thứ tự bài học SGK Toán 7 “Kết nối tri thức với cuộc sống” và tiến độ năm học thường dùng (35 tuần: học kì I 18 tuần, học kì II 17 tuần). <b>Giữa kì 1</b> (khoảng tuần 8–9): Chương I – II. <b>Cuối kì 1</b> (khoảng tuần 16–17): Chương I – V, trọng tâm Chương III – V. <b>Giữa kì 2</b> (khoảng tuần 25–26): Chương VI – VII. <b>Cuối kì 2</b> (khoảng tuần 32–33): Chương VI – X, trọng tâm Chương VIII – X. Nhiều trường dạy song song mạch Đại số và mạch Hình học nên phạm vi thật có thể khác một chút – em nên hỏi thầy cô phạm vi chính thức của trường mình.",
 "checkpoints": [
  {
   "id": "giua-ki-1",
   "name": "Giữa học kì 1",
   "scope": "Chương I – II (Bài 1 – Bài 7): số hữu tỉ, số thực.",
   "review": {
    "sections": [
     {
      "chapter": "c1",
      "title": "Chương I. Số hữu tỉ",
      "points": [
       "Số hữu tỉ viết được dạng {{a|b}} (a, b ∈ ℤ, b ≠ 0); tập hợp ℚ. Mỗi số hữu tỉ biểu diễn bởi một điểm trên trục số.",
       "Cộng, trừ, nhân, chia số hữu tỉ như phân số; có thể đưa về số thập phân.",
       "Luỹ thừa: x<sup>m</sup> · x<sup>n</sup> = x<sup>m+n</sup>; x<sup>m</sup> : x<sup>n</sup> = x<sup>m−n</sup> (x ≠ 0, m ≥ n); (x<sup>m</sup>)<sup>n</sup> = x<sup>m·n</sup>.",
       "Quy tắc chuyển vế: chuyển một số hạng sang vế kia phải đổi dấu số hạng đó."
      ],
      "example": "(−2)<sup>4</sup> = 16; {{−2|3}} : {{4|9}} = {{−3|2}}."
     },
     {
      "chapter": "c2",
      "title": "Chương II. Số thực",
      "points": [
       "Số thập phân hữu hạn hoặc vô hạn tuần hoàn biểu diễn số hữu tỉ; vô hạn không tuần hoàn là số vô tỉ.",
       "Căn bậc hai số học của a ≥ 0 là số x ≥ 0 với x<sup>2</sup> = a, kí hiệu √a.",
       "Số thực gồm số hữu tỉ và số vô tỉ (tập ℝ). |x| = x nếu x ≥ 0; |x| = −x nếu x < 0.",
       "Làm tròn theo độ chính xác cho trước."
      ],
      "example": "|x| = 3 ⇒ x = 3 hoặc x = −3."
     }
    ],
    "mistakes": [
     "Quên đổi dấu khi chuyển vế.",
     "Viết (−2)<sup>3</sup> = 8.",
     "Nhầm √a với a : 2.",
     "Bỏ sót trường hợp âm khi giải |x| = a."
    ],
    "forms": [
     "Tính giá trị biểu thức số hữu tỉ.",
     "Tìm x (chuyển vế, luỹ thừa, giá trị tuyệt đối).",
     "Làm tròn, so sánh số thực.",
     "Bài toán thực tế với số hữu tỉ."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c1",
      "content": "Số hữu tỉ; cộng, trừ, nhân, chia số hữu tỉ",
      "yccd": {
       "B": "Nhận biết số hữu tỉ, số đối.",
       "H": "Thực hiện các phép tính với số hữu tỉ.",
       "V": "Giải bài toán thực tế với số hữu tỉ."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c1",
      "content": "Luỹ thừa của số hữu tỉ; thứ tự thực hiện phép tính; quy tắc chuyển vế",
      "yccd": {
       "B": "Nhận biết luỹ thừa, chia hai luỹ thừa cùng cơ số.",
       "H": "Tính giá trị biểu thức; tìm x bằng quy tắc chuyển vế.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c2",
      "content": "Số thập phân vô hạn tuần hoàn; số vô tỉ; căn bậc hai số học",
      "yccd": {
       "B": "Nhận biết số vô tỉ, căn bậc hai số học, số thập phân vô hạn tuần hoàn.",
       "H": "",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c2",
      "content": "Tập hợp số thực; giá trị tuyệt đối; làm tròn",
      "yccd": {
       "B": "Tính giá trị tuyệt đối.",
       "H": "Làm tròn số thực.",
       "V": "Tìm x trong đẳng thức chứa giá trị tuyệt đối; ước lượng, so sánh."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Số nào sau đây là số hữu tỉ âm?",
      "options": [
       "{{−3|5}}",
       "0",
       "{{2|7}}",
       "1,5"
      ],
      "answer": 0,
      "explain": "Số hữu tỉ âm là số hữu tỉ nhỏ hơn 0.",
      "pick": "function(v){return v<0}"
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Số đối của {{−2|3}} là:",
      "options": [
       "{{−3|2}}",
       "{{3|2}}",
       "{{−2|3}}",
       "{{2|3}}"
      ],
      "answer": 3,
      "explain": "Hai số đối nhau có tổng bằng 0.",
      "calc": "2/3"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Giá trị của (−2)<sup>3</sup> là:",
      "options": [
       "−8",
       "8",
       "−6",
       "6"
      ],
      "answer": 0,
      "explain": "(−2) · (−2) · (−2) = −8: luỹ thừa bậc lẻ của số âm là số âm.",
      "calc": "Math.pow(-2,3)"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Với x ≠ 0, thương x<sup>5</sup> : x<sup>2</sup> bằng:",
      "options": [
       "x<sup>7</sup>",
       "x<sup>3</sup>",
       "x<sup>10</sup>",
       "x<sup>2,5</sup>"
      ],
      "answer": 1,
      "explain": "Chia hai luỹ thừa cùng cơ số: giữ cơ số, trừ số mũ 5 − 2 = 3."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "√49 bằng:",
      "options": [
       "−7",
       "24,5",
       "7",
       "49"
      ],
      "answer": 2,
      "explain": "7 ≥ 0 và 7<sup>2</sup> = 49.",
      "calc": "Math.sqrt(49)"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Số nào sau đây là số vô tỉ?",
      "options": [
       "0,25",
       "{{−3|4}}",
       "√16",
       "√2"
      ],
      "answer": 3,
      "explain": "√2 = 1,41421356… là số thập phân vô hạn không tuần hoàn; √16 = 4 là số hữu tỉ."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "|−5,2| bằng:",
      "options": [
       "−5,2",
       "0",
       "52",
       "5,2"
      ],
      "answer": 3,
      "explain": "Giá trị tuyệt đối của một số âm là số đối của nó.",
      "calc": "Math.abs(-5.2)"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Phân số {{1|3}} viết dưới dạng số thập phân là:",
      "options": [
       "0,(3)",
       "0,3",
       "0,33",
       "3,(1)"
      ],
      "answer": 0,
      "explain": "1 : 3 = 0,333… = 0,(3) – số thập phân vô hạn tuần hoàn chu kì 3."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Kết quả của {{−1|2}} + {{3|4}} là:",
      "options": [
       "{{2|6}}",
       "{{1|4}}",
       "{{−1|4}}",
       "{{1|2}}"
      ],
      "answer": 1,
      "explain": "{{−2|4}} + {{3|4}} = {{1|4}}.",
      "calc": "-1/2+3/4"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Giá trị của (−0,5)<sup>2</sup> + 0,75 là:",
      "options": [
       "0,5",
       "−0,25",
       "1",
       "1,75"
      ],
      "answer": 2,
      "explain": "(−0,5)<sup>2</sup> = 0,25; 0,25 + 0,75 = 1.",
      "calc": "Math.pow(-0.5,2)+0.75"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Làm tròn √2 = 1,41421… đến hàng phần trăm ta được:",
      "options": [
       "1,42",
       "1,4",
       "1,41",
       "1,414"
      ],
      "answer": 2,
      "explain": "Chữ số hàng phần nghìn là 4 < 5 nên giữ nguyên: 1,41.",
      "calc": "Math.round(Math.SQRT2*100)/100"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Giá trị của x thoả mãn x + {{1|3}} = {{1|2}} là:",
      "options": [
       "{{5|6}}",
       "{{1|6}}",
       "{{−1|6}}",
       "{{2|5}}"
      ],
      "answer": 1,
      "explain": "x = {{1|2}} − {{1|3}} = {{1|6}}.",
      "calc": "1/2-1/3"
     }
    ],
    "tf": [
     {
      "topic": "t1",
      "q": "Cho x = {{−3|4}} và y = {{1|2}}.",
      "items": [
       {
        "s": "x là số hữu tỉ âm.",
        "answer": true,
        "level": "B",
        "explain": "−3/4 < 0.",
        "check": "-3/4<0"
       },
       {
        "s": "x > y.",
        "answer": false,
        "level": "B",
        "explain": "Số âm nhỏ hơn số dương.",
        "check": "-3/4>1/2"
       },
       {
        "s": "x + y = {{−1|4}}.",
        "answer": true,
        "level": "H",
        "explain": "{{−3|4}} + {{2|4}} = {{−1|4}}.",
        "check": "Math.abs(-3/4+1/2+1/4)<1e-9"
       },
       {
        "s": "x · y = {{−3|2}}.",
        "answer": false,
        "level": "H",
        "explain": "x · y = {{−3|8}}.",
        "check": "Math.abs(-3/4*1/2+3/2)<1e-9"
       }
      ]
     },
     {
      "topic": "t4",
      "q": "Xét các khẳng định về số thực.",
      "items": [
       {
        "s": "√25 = 5.",
        "answer": true,
        "level": "B",
        "explain": "5 ≥ 0 và 5<sup>2</sup> = 25.",
        "check": "Math.sqrt(25)===5"
       },
       {
        "s": "√3 là số hữu tỉ.",
        "answer": false,
        "level": "B",
        "explain": "√3 = 1,732… là số vô tỉ."
       },
       {
        "s": "|−7| + |3| = 10.",
        "answer": true,
        "level": "H",
        "explain": "7 + 3 = 10.",
        "check": "Math.abs(-7)+Math.abs(3)===10"
       },
       {
        "s": "Một mảnh đất hình vuông có diện tích 50 m² thì cạnh của nó dài khoảng 7,07 m (làm tròn đến hàng phần trăm).",
        "answer": true,
        "level": "V",
        "explain": "Cạnh = √50 ≈ 7,0711 ≈ 7,07 (m).",
        "check": "Math.round(Math.sqrt(50)*100)/100===7.07"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Tính: (−3)<sup>2</sup> + 2<sup>3</sup>.",
      "answer": "17",
      "explain": "9 + 8 = 17.",
      "calc": "9+8"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Tính: {{2|5}} · {{−15|4}}. (Viết dạng phân số a/b hoặc số thập phân.)",
      "answer": [
       "-3/2",
       "-1.5"
      ],
      "explain": "{{−30|20}} = {{−3|2}} = −1,5.",
      "calc": "2/5*(-15/4)",
      "answerText": "−3/2"
     },
     {
      "level": "V",
      "topic": "t1",
      "q": "Táo giá 45 000 đồng/kg. Mẹ mua 2,4 kg và được giảm {{1|10}} số tiền phải trả. Hỏi mẹ trả bao nhiêu đồng?",
      "answer": "97200",
      "explain": "2,4 · 45 000 = 108 000; giảm 10 800; trả 97 200 đồng.",
      "calc": "2.4*45000*0.9",
      "unit": "đồng"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Tìm số thực x âm thoả mãn |x − 2| = 5.",
      "answer": "-3",
      "explain": "x − 2 = 5 hoặc x − 2 = −5 ⇒ x = 7 hoặc x = −3; x âm nên x = −3.",
      "calc": "2-5",
      "answerText": "−3"
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
        "q": "Tính: (−0,25) · 8 + 1,5.",
        "answer": "(−0,25) · 8 = −2; −2 + 1,5 = −0,5.",
        "rubric": [
         [
          "(−0,25) · 8 = −2",
          0.25
         ],
         [
          "Kết quả −0,5",
          0.25
         ]
        ],
        "calc": "-0.25*8+1.5"
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Tìm x, biết: 2x − {{3|4}} = {{1|4}}.",
        "answer": "2x = {{1|4}} + {{3|4}} = 1; x = {{1|2}}.",
        "rubric": [
         [
          "Chuyển vế: 2x = {{1|4}} + {{3|4}}",
          0.25
         ],
         [
          "2x = 1",
          0.25
         ],
         [
          "x = {{1|2}}",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t1",
      "q": "Quãng đường từ nhà An đến nhà bà dài 3,6 km. Buổi sáng An đi được {{2|3}} quãng đường; buổi chiều An đi nốt phần còn lại với vận tốc 4,8 km/h.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Hỏi buổi chiều An đi trong bao nhiêu phút?",
        "answer": "Buổi sáng: 3,6 · {{2|3}} = 2,4 (km). Còn lại: 3,6 − 2,4 = 1,2 (km). Thời gian: 1,2 : 4,8 = 0,25 (giờ) = 15 phút.",
        "rubric": [
         [
          "Quãng đường buổi sáng 2,4 km",
          0.25
         ],
         [
          "Quãng đường còn lại 1,2 km",
          0.25
         ],
         [
          "Thời gian 0,25 giờ",
          0.5
         ],
         [
          "Đổi ra 15 phút",
          0.25
         ]
        ],
        "calc": "(3.6-3.6*2/3)/4.8*60"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "So sánh không dùng máy tính.",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "So sánh √17 + √26 và 9.",
        "answer": "√17 > √16 = 4 và √26 > √25 = 5, nên √17 + √26 > 4 + 5 = 9.",
        "rubric": [
         [
          "√17 > 4 và √26 > 5",
          0.25
         ],
         [
          "Kết luận tổng lớn hơn 9",
          0.25
         ]
        ],
        "calc": "Math.sqrt(17)+Math.sqrt(26)"
       }
      ]
     }
    ]
   }
  },
  {
   "id": "cuoi-ki-1",
   "name": "Cuối học kì 1",
   "scope": "Chương I – V (Bài 1 – Bài 19), trọng tâm Chương III (góc, đường thẳng song song), IV (tam giác bằng nhau), V (dữ liệu).",
   "review": {
    "sections": [
     {
      "chapter": "c2",
      "title": "Ôn nhanh Chương I – II",
      "points": [
       "Phép tính số hữu tỉ, luỹ thừa, quy tắc chuyển vế.",
       "Căn bậc hai số học, số vô tỉ, số thực, giá trị tuyệt đối, làm tròn."
      ]
     },
     {
      "chapter": "c3",
      "title": "Chương III. Góc và đường thẳng song song",
      "points": [
       "Hai góc đối đỉnh bằng nhau; hai góc kề bù có tổng 180°. Tia phân giác chia góc thành hai góc bằng nhau.",
       "Dấu hiệu: nếu một cặp góc so le trong (hoặc đồng vị) bằng nhau thì hai đường thẳng song song.",
       "Tiên đề Euclid; tính chất: hai đường thẳng song song tạo với cát tuyến các góc so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau.",
       "Định lí: giả thiết – kết luận; chứng minh định lí."
      ]
     },
     {
      "chapter": "c4",
      "title": "Chương IV. Tam giác bằng nhau",
      "points": [
       "Tổng ba góc của tam giác bằng 180°; trong tam giác vuông, hai góc nhọn phụ nhau.",
       "Ba trường hợp bằng nhau: c.c.c, c.g.c, g.c.g; tam giác vuông: thêm cạnh huyền – góc nhọn, cạnh huyền – cạnh góc vuông.",
       "Tam giác cân: hai cạnh bên bằng nhau, hai góc đáy bằng nhau. Đường trung trực của đoạn thẳng: mọi điểm trên đó cách đều hai đầu mút."
      ],
      "example": "Viết đúng thứ tự đỉnh tương ứng: ΔABC = ΔDEF thì ∠B = ∠E, AC = DF."
     },
     {
      "chapter": "c5",
      "title": "Chương V. Thu thập và biểu diễn dữ liệu",
      "points": [
       "Phân loại dữ liệu; kiểm tra tính hợp lí của dữ liệu.",
       "Biểu đồ hình quạt tròn: biểu diễn tỉ lệ phần trăm các phần trong tổng thể.",
       "Biểu đồ đoạn thẳng: biểu diễn sự thay đổi của một đại lượng theo thời gian."
      ]
     }
    ],
    "mistakes": [
     "Viết sai thứ tự đỉnh tương ứng của hai tam giác bằng nhau.",
     "Nhầm góc so le trong với góc trong cùng phía.",
     "Chưa nêu đủ ba điều kiện khi chứng minh hai tam giác bằng nhau."
    ],
    "forms": [
     "Tính số đo góc (đối đỉnh, kề bù, song song, tổng ba góc).",
     "Chứng minh hai tam giác bằng nhau, suy ra cạnh/góc bằng nhau.",
     "Đọc biểu đồ hình quạt tròn, đoạn thẳng."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c2",
      "content": "Số hữu tỉ, số thực, căn bậc hai, giá trị tuyệt đối",
      "yccd": {
       "B": "Tính căn bậc hai số học.",
       "H": "Tính giá trị biểu thức có giá trị tuyệt đối.",
       "V": "Thực hiện phép tính, tìm x."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c3",
      "content": "Góc ở vị trí đặc biệt; hai đường thẳng song song; tiên đề Euclid",
      "yccd": {
       "B": "Nhận biết góc đối đỉnh, kề bù, tiên đề Euclid.",
       "H": "Tính số đo góc.",
       "V": "Lập luận về quan hệ song song, vuông góc."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c4",
      "content": "Tổng ba góc của tam giác; tam giác bằng nhau; tam giác cân",
      "yccd": {
       "B": "Nhận biết tổng ba góc, các cạnh tương ứng, tính chất tam giác cân.",
       "H": "Tính góc trong tam giác.",
       "V": "Chứng minh hai tam giác bằng nhau."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c5",
      "content": "Thu thập dữ liệu; biểu đồ hình quạt tròn, biểu đồ đoạn thẳng",
      "yccd": {
       "B": "Nhận biết công dụng biểu đồ hình quạt tròn.",
       "H": "Đọc số liệu từ biểu đồ.",
       "V": "Tính số lượng từ tỉ lệ phần trăm."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "√64 bằng:",
      "options": [
       "32",
       "−8",
       "4",
       "8"
      ],
      "answer": 3,
      "explain": "8 ≥ 0 và 8<sup>2</sup> = 64.",
      "calc": "Math.sqrt(64)"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Hai góc đối đỉnh thì:",
      "options": [
       "bù nhau",
       "bằng nhau",
       "phụ nhau",
       "kề nhau"
      ],
      "answer": 1,
      "explain": "Tính chất của hai góc đối đỉnh."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Hai góc kề bù có tổng số đo bằng:",
      "options": [
       "90°",
       "360°",
       "120°",
       "180°"
      ],
      "answer": 3,
      "explain": "Hai góc kề bù tạo thành một góc bẹt.",
      "calc": "180"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Qua một điểm nằm ngoài một đường thẳng, có bao nhiêu đường thẳng song song với đường thẳng đó?",
      "options": [
       "0",
       "2",
       "1",
       "Vô số"
      ],
      "answer": 2,
      "explain": "Tiên đề Euclid: chỉ có một đường thẳng như vậy.",
      "calc": "1"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Tổng ba góc của một tam giác bằng:",
      "options": [
       "90°",
       "270°",
       "180°",
       "360°"
      ],
      "answer": 2,
      "explain": "Định lí tổng ba góc trong một tam giác.",
      "calc": "180"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Cho ΔABC = ΔDEF. Cạnh tương ứng với cạnh AB là:",
      "options": [
       "DE",
       "EF",
       "DF",
       "FD"
      ],
      "answer": 0,
      "explain": "Các đỉnh tương ứng: A ↔ D, B ↔ E, C ↔ F nên AB ↔ DE."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Tam giác ABC cân tại A thì:",
      "options": [
       "∠B = ∠C",
       "∠A = ∠B",
       "∠A = ∠C",
       "AB = BC"
      ],
      "answer": 0,
      "explain": "Trong tam giác cân, hai góc ở đáy bằng nhau."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Biểu đồ hình quạt tròn thường dùng để biểu diễn:",
      "options": [
       "tỉ lệ phần trăm của các phần so với toàn thể",
       "sự thay đổi của một đại lượng theo thời gian",
       "vị trí trên bản đồ",
       "số đo góc của tam giác"
      ],
      "answer": 0,
      "explain": "Mỗi hình quạt ứng với tỉ lệ của một phần trong tổng thể; biểu đồ đoạn thẳng mới biểu diễn sự thay đổi theo thời gian."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Hai góc kề bù, một góc bằng 65°. Góc còn lại bằng:",
      "options": [
       "25°",
       "115°",
       "65°",
       "125°"
      ],
      "answer": 1,
      "explain": "180° − 65° = 115°.",
      "calc": "180-65"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác ABC có ∠A = 70°, ∠B = 50°. Số đo góc C là:",
      "options": [
       "120°",
       "70°",
       "50°",
       "60°"
      ],
      "answer": 3,
      "explain": "∠C = 180° − 70° − 50° = 60°.",
      "calc": "180-70-50"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Một tam giác cân có góc ở đỉnh bằng 40°. Mỗi góc ở đáy bằng:",
      "options": [
       "140°",
       "40°",
       "70°",
       "50°"
      ],
      "answer": 2,
      "explain": "(180° − 40°) : 2 = 70°.",
      "calc": "(180-40)/2"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Trong biểu đồ hình quạt về môn học yêu thích của 40 học sinh, phần “Toán” chiếm 25%. Số học sinh thích Toán là:",
      "options": [
       "25",
       "10",
       "15",
       "4"
      ],
      "answer": 1,
      "explain": "40 · 25% = 10.",
      "calc": "40*25/100"
     }
    ],
    "tf": [
     {
      "topic": "t2",
      "q": "Đường thẳng c cắt hai đường thẳng song song a và b. Một góc tạo bởi c và a có số đo 55°.",
      "items": [
       {
        "s": "Hai góc so le trong tạo bởi c với a và b thì bằng nhau.",
        "answer": true,
        "level": "B",
        "explain": "Tính chất hai đường thẳng song song."
       },
       {
        "s": "Hai góc trong cùng phía tạo bởi c với a và b thì bằng nhau.",
        "answer": false,
        "level": "B",
        "explain": "Hai góc trong cùng phía bù nhau."
       },
       {
        "s": "Góc ở vị trí đồng vị với góc 55° nói trên (tạo bởi c và b) cũng bằng 55°.",
        "answer": true,
        "level": "H",
        "explain": "Hai góc đồng vị bằng nhau."
       },
       {
        "s": "Góc kề bù với góc 55° bằng 135°.",
        "answer": false,
        "level": "H",
        "explain": "180° − 55° = 125°.",
        "check": "180-55===135"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Cho ΔABC và ΔMNP có AB = MN, BC = NP, AC = MP; biết ∠A = 80°, ∠B = 40°.",
      "items": [
       {
        "s": "ΔABC = ΔMNP (c.c.c).",
        "answer": true,
        "level": "B",
        "explain": "Ba cặp cạnh tương ứng bằng nhau."
       },
       {
        "s": "∠M = 40°.",
        "answer": false,
        "level": "B",
        "explain": "∠M = ∠A = 80°."
       },
       {
        "s": "∠P = 60°.",
        "answer": true,
        "level": "H",
        "explain": "∠P = ∠C = 180° − 80° − 40° = 60°.",
        "check": "180-80-40===60"
       },
       {
        "s": "Nếu chu vi ΔABC bằng 24 cm thì chu vi ΔMNP cũng bằng 24 cm.",
        "answer": true,
        "level": "V",
        "explain": "Hai tam giác bằng nhau có các cạnh tương ứng bằng nhau nên chu vi bằng nhau."
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Tính: |−3,5| + 1,5.",
      "answer": "5",
      "explain": "3,5 + 1,5 = 5.",
      "calc": "Math.abs(-3.5)+1.5"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác ABC vuông tại A có ∠B = 35°. Tính số đo góc C (độ).",
      "answer": "55",
      "explain": "Hai góc nhọn của tam giác vuông phụ nhau: 90° − 35° = 55°.",
      "calc": "90-35",
      "unit": "°"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Khảo sát 200 học sinh, biểu đồ hình quạt cho thấy 35% thích thể thao. Có bao nhiêu học sinh thích thể thao?",
      "answer": "70",
      "explain": "200 · 35% = 70.",
      "calc": "200*35/100",
      "unit": "học sinh"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Hai góc kề bù, trong đó góc này gấp 4 lần góc kia. Tính số đo góc nhỏ hơn (độ).",
      "answer": "36",
      "explain": "Góc nhỏ chiếm 1 phần, góc lớn 4 phần; 180° : 5 = 36°.",
      "calc": "180/5",
      "unit": "°"
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
        "q": "Tính: {{−2|3}} + {{5|6}} − 0,5.",
        "answer": "{{−4|6}} + {{5|6}} = {{1|6}}; {{1|6}} − {{3|6}} = {{−1|3}}.",
        "rubric": [
         [
          "Quy đồng, tính {{1|6}}",
          0.25
         ],
         [
          "Kết quả {{−1|3}}",
          0.25
         ]
        ],
        "calc": "-2/3+5/6-0.5"
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Tìm x, biết: (x − {{1|2}})<sup>2</sup> = {{1|4}}.",
        "answer": "x − {{1|2}} = {{1|2}} hoặc x − {{1|2}} = {{−1|2}}; vậy x = 1 hoặc x = 0.",
        "rubric": [
         [
          "Xét hai trường hợp ±{{1|2}}",
          0.25
         ],
         [
          "x = 1",
          0.25
         ],
         [
          "x = 0",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Cho tam giác ABC cân tại A, M là trung điểm của BC.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Chứng minh ΔABM = ΔACM và AM ⊥ BC.",
        "answer": "Xét ΔABM và ΔACM: AB = AC (tam giác cân), MB = MC (M là trung điểm), AM là cạnh chung ⇒ ΔABM = ΔACM (c.c.c). Suy ra ∠AMB = ∠AMC; mà hai góc này kề bù nên mỗi góc bằng 90°. Vậy AM ⊥ BC.",
        "rubric": [
         [
          "Nêu đủ AB = AC, MB = MC, AM chung",
          0.25
         ],
         [
          "Kết luận ΔABM = ΔACM (c.c.c)",
          0.25
         ],
         [
          "Suy ra ∠AMB = ∠AMC",
          0.25
         ],
         [
          "Kề bù ⇒ mỗi góc 90°",
          0.25
         ],
         [
          "Kết luận AM ⊥ BC",
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
        "q": "Cho a ∥ b và đường thẳng c ⊥ a. Chứng minh c ⊥ b.",
        "answer": "c cắt a nên c cắt b (nếu không, qua giao điểm của c và a có hai đường thẳng song song với b, trái tiên đề Euclid). Góc tạo bởi c và a bằng 90°, góc đồng vị tạo bởi c và b cũng bằng 90°, nên c ⊥ b.",
        "rubric": [
         [
          "Dùng góc đồng vị bằng nhau (= 90°)",
          0.25
         ],
         [
          "Kết luận c ⊥ b",
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
   "scope": "Chương VI – VII (Bài 20 – Bài 28): tỉ lệ thức, đại lượng tỉ lệ, đa thức một biến.",
   "review": {
    "sections": [
     {
      "chapter": "c6",
      "title": "Chương VI. Tỉ lệ thức và đại lượng tỉ lệ",
      "points": [
       "Tỉ lệ thức {{a|b}} = {{c|d}} ⇒ ad = bc.",
       "Dãy tỉ số bằng nhau: {{a|b}} = {{c|d}} = {{a + c|b + d}} = {{a − c|b − d}} (mẫu khác 0).",
       "Tỉ lệ thuận: y = kx; tỉ lệ nghịch: xy = a. Bài toán chia một số thành các phần tỉ lệ thuận hoặc tỉ lệ nghịch."
      ]
     },
     {
      "chapter": "c7",
      "title": "Chương VII. Biểu thức đại số và đa thức một biến",
      "points": [
       "Biểu thức đại số, giá trị của biểu thức tại giá trị cho trước của biến.",
       "Đa thức một biến: thu gọn, sắp xếp, bậc, hệ số cao nhất, hệ số tự do. a là nghiệm của P(x) nếu P(a) = 0.",
       "Cộng, trừ đa thức: cộng/trừ các hạng tử cùng bậc. Nhân: nhân từng hạng tử rồi thu gọn. Chia đa thức một biến (chia hết, chia có dư)."
      ],
      "example": "(x − 2)(x + 2) = x<sup>2</sup> − 4."
     }
    ],
    "mistakes": [
     "Áp dụng sai tính chất dãy tỉ số (cộng tử mà không cộng mẫu).",
     "Nhầm tỉ lệ thuận với tỉ lệ nghịch trong bài toán công nhân – ngày công.",
     "Nhầm hệ số tự do với hệ số của x."
    ],
    "forms": [
     "Tìm x trong tỉ lệ thức; chia theo tỉ lệ.",
     "Bài toán tỉ lệ thuận, tỉ lệ nghịch.",
     "Thu gọn, cộng, trừ, nhân đa thức; tìm nghiệm."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c6",
      "content": "Tỉ lệ thức; tính chất dãy tỉ số bằng nhau",
      "yccd": {
       "B": "Nhận biết tính chất của tỉ lệ thức.",
       "H": "Tìm số chưa biết trong tỉ lệ thức, dãy tỉ số.",
       "V": "Bài toán chia theo tỉ lệ."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c6",
      "content": "Đại lượng tỉ lệ thuận; đại lượng tỉ lệ nghịch",
      "yccd": {
       "B": "Nhận biết công thức tỉ lệ thuận, tỉ lệ nghịch.",
       "H": "Tính giá trị tương ứng.",
       "V": "Giải bài toán thực tế về tỉ lệ."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c7",
      "content": "Biểu thức đại số; đa thức một biến; nghiệm của đa thức",
      "yccd": {
       "B": "Nhận biết bậc, hệ số, biểu thức đại số, giá trị của biểu thức.",
       "H": "Tìm nghiệm của đa thức bậc nhất.",
       "V": "Lập luận đa thức không có nghiệm."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c7",
      "content": "Cộng, trừ, nhân, chia đa thức một biến",
      "yccd": {
       "B": "",
       "H": "Cộng, trừ, nhân đa thức.",
       "V": "Xác định hệ số của tích hai đa thức."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Từ tỉ lệ thức {{a|b}} = {{c|d}} (b, d ≠ 0) suy ra:",
      "options": [
       "a · b = c · d",
       "a + d = b + c",
       "a · c = b · d",
       "a · d = b · c"
      ],
      "answer": 3,
      "explain": "Tích các ngoại tỉ bằng tích các trung tỉ."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Tìm x biết {{x|4}} = {{3|6}}. Khi đó x bằng:",
      "options": [
       "8",
       "2",
       "3",
       "4,5"
      ],
      "answer": 1,
      "explain": "x = 4 · 3 : 6 = 2.",
      "calc": "4*3/6"
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Đại lượng y tỉ lệ thuận với x theo hệ số tỉ lệ 3 khi:",
      "options": [
       "y = {{3|x}}",
       "y = x + 3",
       "y = 3x",
       "x · y = 3"
      ],
      "answer": 2,
      "explain": "Công thức tỉ lệ thuận y = kx với k = 3."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Đại lượng y tỉ lệ nghịch với x theo hệ số tỉ lệ a khi:",
      "options": [
       "x · y = a",
       "y = ax",
       "y = x + a",
       "y = x − a"
      ],
      "answer": 0,
      "explain": "y = {{a|x}} hay xy = a."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Bậc của đa thức 3x<sup>4</sup> − 2x + 1 là:",
      "options": [
       "3",
       "1",
       "7",
       "4"
      ],
      "answer": 3,
      "explain": "Số mũ lớn nhất của biến là 4.",
      "calc": "4"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Hệ số cao nhất của đa thức −5x<sup>3</sup> + 2x<sup>2</sup> − 7 là:",
      "options": [
       "2",
       "−7",
       "3",
       "−5"
      ],
      "answer": 3,
      "explain": "Hệ số của hạng tử có bậc cao nhất (x<sup>3</sup>).",
      "calc": "-5"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Giá trị của biểu thức 2x − 1 tại x = 3 là:",
      "options": [
       "6",
       "5",
       "7",
       "1"
      ],
      "answer": 1,
      "explain": "2 · 3 − 1 = 5.",
      "calc": "2*3-1"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Biểu thức biểu thị chu vi hình chữ nhật có chiều dài a, chiều rộng b là:",
      "options": [
       "2(a + b)",
       "a · b",
       "a + b",
       "2a + b"
      ],
      "answer": 0,
      "explain": "Chu vi bằng hai lần tổng chiều dài và chiều rộng."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Cho {{x|2}} = {{y|3}} và x + y = 15. Giá trị của x là:",
      "options": [
       "9",
       "3",
       "6",
       "5"
      ],
      "answer": 2,
      "explain": "{{x|2}} = {{y|3}} = {{x + y|5}} = 3 ⇒ x = 6.",
      "calc": "15/5*2"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "y tỉ lệ thuận với x; khi x = 2 thì y = 8. Khi x = 5 thì y bằng:",
      "options": [
       "20",
       "10",
       "40",
       "2"
      ],
      "answer": 0,
      "explain": "Hệ số k = 8 : 2 = 4; y = 4 · 5 = 20.",
      "calc": "8/2*5"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Kết quả của (2x + 3) + (x − 5) là:",
      "options": [
       "3x + 8",
       "3x − 2",
       "x − 2",
       "3x + 2"
      ],
      "answer": 1,
      "explain": "2x + x = 3x; 3 − 5 = −2."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Nghiệm của đa thức 2x − 6 là:",
      "options": [
       "−3",
       "6",
       "3",
       "12"
      ],
      "answer": 2,
      "explain": "2x − 6 = 0 ⇒ x = 3.",
      "calc": "6/2"
     }
    ],
    "tf": [
     {
      "topic": "t2",
      "q": "5 công nhân làm xong một công việc trong 12 ngày (năng suất mỗi người như nhau).",
      "items": [
       {
        "s": "Số công nhân và số ngày làm xong công việc là hai đại lượng tỉ lệ nghịch.",
        "answer": true,
        "level": "B",
        "explain": "Số người tăng bao nhiêu lần thì số ngày giảm bấy nhiêu lần."
       },
       {
        "s": "Hệ số tỉ lệ là 17.",
        "answer": false,
        "level": "B",
        "explain": "Hệ số tỉ lệ là 5 · 12 = 60.",
        "check": "5*12===17"
       },
       {
        "s": "10 công nhân sẽ làm xong công việc đó trong 6 ngày.",
        "answer": true,
        "level": "H",
        "explain": "60 : 10 = 6.",
        "check": "60/10===6"
       },
       {
        "s": "Muốn làm xong trong 4 ngày thì cần thêm 10 công nhân.",
        "answer": true,
        "level": "V",
        "explain": "Cần 60 : 4 = 15 người, tức là thêm 10 người.",
        "check": "60/4-5===10"
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Cho đa thức P(x) = x<sup>2</sup> − 3x + 2.",
      "items": [
       {
        "s": "P(x) có bậc 2.",
        "answer": true,
        "level": "B",
        "explain": "Số mũ lớn nhất là 2."
       },
       {
        "s": "Hệ số tự do của P(x) là −3.",
        "answer": false,
        "level": "B",
        "explain": "Hệ số tự do là 2; −3 là hệ số của x."
       },
       {
        "s": "P(1) = 0.",
        "answer": true,
        "level": "H",
        "explain": "1 − 3 + 2 = 0.",
        "check": "1-3+2===0"
       },
       {
        "s": "x = 3 là một nghiệm của P(x).",
        "answer": false,
        "level": "H",
        "explain": "P(3) = 9 − 9 + 2 = 2 ≠ 0.",
        "check": "9-9+2===0"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "Tính giá trị của biểu thức x<sup>2</sup> + 2x tại x = −3.",
      "answer": "3",
      "explain": "9 − 6 = 3.",
      "calc": "9+2*(-3)"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Cho {{a|3}} = {{b|5}} và b − a = 8. Tìm a.",
      "answer": "12",
      "explain": "{{b − a|5 − 3}} = 4 ⇒ a = 12.",
      "calc": "8/2*3"
     },
     {
      "level": "V",
      "topic": "t1",
      "q": "Chia 360 nghìn đồng thành ba phần tỉ lệ với 2; 3; 4. Phần lớn nhất bằng bao nhiêu nghìn đồng?",
      "answer": "160",
      "explain": "360 : (2 + 3 + 4) = 40; phần lớn nhất 40 · 4 = 160.",
      "calc": "360/9*4",
      "unit": "nghìn đồng"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Tìm hệ số của x trong tích (x + 2)(x − 3).",
      "answer": "-1",
      "explain": "(x + 2)(x − 3) = x<sup>2</sup> − x − 6.",
      "calc": "-3+2",
      "answerText": "−1"
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
        "q": "Thu gọn và sắp xếp theo luỹ thừa giảm dần: A(x) = 3x − 2x<sup>2</sup> + 5 + x<sup>2</sup> − x.",
        "answer": "A(x) = −x<sup>2</sup> + 2x + 5.",
        "rubric": [
         [
          "Thu gọn đúng các hạng tử đồng dạng",
          0.25
         ],
         [
          "Sắp xếp đúng",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Tính: (2x − 1)(x + 3).",
        "answer": "2x<sup>2</sup> + 6x − x − 3 = 2x<sup>2</sup> + 5x − 3.",
        "rubric": [
         [
          "Nhân từng hạng tử",
          0.25
         ],
         [
          "Thu gọn 5x",
          0.25
         ],
         [
          "Kết quả 2x<sup>2</sup> + 5x − 3",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t1",
      "q": "Ba lớp 7A, 7B, 7C trồng được tổng cộng 120 cây. Số cây của ba lớp tỉ lệ với 3; 4; 5.",
      "parts": [
       {
        "level": "V",
        "points": 1.25,
        "q": "Tính số cây mỗi lớp trồng được.",
        "answer": "Gọi số cây là x, y, z: {{x|3}} = {{y|4}} = {{z|5}} và x + y + z = 120. Theo tính chất dãy tỉ số bằng nhau: = {{120|12}} = 10. Vậy x = 30, y = 40, z = 50.",
        "rubric": [
         [
          "Gọi ẩn, lập dãy tỉ số và tổng 120",
          0.25
         ],
         [
          "Tính tỉ số chung bằng 10",
          0.25
         ],
         [
          "7A: 30 cây",
          0.25
         ],
         [
          "7B: 40 cây",
          0.25
         ],
         [
          "7C: 50 cây",
          0.25
         ]
        ],
        "calc": "120/12"
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
        "q": "Chứng tỏ đa thức Q(x) = x<sup>2</sup> + 1 không có nghiệm.",
        "answer": "Với mọi x, x<sup>2</sup> ≥ 0 nên x<sup>2</sup> + 1 ≥ 1 > 0. Vậy Q(x) không bằng 0 với bất kì x nào, tức là không có nghiệm.",
        "rubric": [
         [
          "x<sup>2</sup> ≥ 0 ⇒ Q(x) ≥ 1",
          0.25
         ],
         [
          "Kết luận không có nghiệm",
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
   "scope": "Chương VI – X (Bài 20 – Bài 37), trọng tâm Chương VIII (xác suất), IX (quan hệ trong tam giác), X (hình khối).",
   "review": {
    "sections": [
     {
      "chapter": "c7",
      "title": "Ôn nhanh Chương VI – VII",
      "points": [
       "Tỉ lệ thức, dãy tỉ số bằng nhau, tỉ lệ thuận – nghịch.",
       "Đa thức một biến: bậc, nghiệm, cộng, trừ, nhân, chia."
      ]
     },
     {
      "chapter": "c8",
      "title": "Chương VIII. Làm quen với biến cố và xác suất",
      "points": [
       "Biến cố chắc chắn (luôn xảy ra), không thể (không bao giờ xảy ra), ngẫu nhiên (có thể xảy ra hoặc không).",
       "Khi các kết quả đồng khả năng: xác suất = số kết quả thuận lợi : tổng số kết quả. Xác suất nằm trong đoạn từ 0 đến 1."
      ]
     },
     {
      "chapter": "c9",
      "title": "Chương IX. Quan hệ giữa các yếu tố trong một tam giác",
      "points": [
       "Góc lớn hơn đối diện cạnh lớn hơn và ngược lại.",
       "Đường vuông góc ngắn hơn mọi đường xiên; đường xiên lớn hơn thì hình chiếu lớn hơn.",
       "Bất đẳng thức tam giác: mỗi cạnh nhỏ hơn tổng và lớn hơn hiệu hai cạnh còn lại.",
       "Trọng tâm G: AG = {{2|3}} AM. Ba đường phân giác đồng quy tại điểm cách đều ba cạnh; ba đường trung trực đồng quy tại điểm cách đều ba đỉnh; ba đường cao đồng quy tại trực tâm."
      ]
     },
     {
      "chapter": "c10",
      "title": "Chương X. Một số hình khối trong thực tiễn",
      "points": [
       "Hình hộp chữ nhật: V = a · b · c; S<sub>xq</sub> = 2(a + b) · c. Hình lập phương: V = a<sup>3</sup>; S<sub>xq</sub> = 4a<sup>2</sup>.",
       "Lăng trụ đứng tam giác, tứ giác: V = S<sub>đáy</sub> · h; S<sub>xq</sub> = chu vi đáy · h."
      ]
     }
    ],
    "mistakes": [
     "Quên kiểm tra bất đẳng thức tam giác.",
     "Nhầm cạnh đối diện của một góc.",
     "Đổi đơn vị m³ sang lít sai (1 m³ = 1 000 lít)."
    ],
    "forms": [
     "Tính xác suất của biến cố.",
     "So sánh góc, cạnh trong tam giác; dùng trọng tâm.",
     "Tính thể tích, diện tích hình hộp, lăng trụ."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Ở nhiều trường, kiểm tra định kì môn Toán (trên 70 tiết/năm) có thể làm 60–90 phút; đề này giữ đúng tỉ lệ điểm và mức độ của Phụ lục Công văn 7991. Được dùng máy tính cầm tay nếu trường cho phép.",
    "topics": [
     {
      "id": "t1",
      "chapter": "c7",
      "content": "Đa thức một biến và các phép tính",
      "yccd": {
       "B": "Nhận biết bậc của đa thức.",
       "H": "Tính giá trị, cộng và chia đa thức.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "c8",
      "content": "Biến cố; xác suất của biến cố",
      "yccd": {
       "B": "Nhận biết biến cố chắc chắn, không thể, ngẫu nhiên; xác suất đơn giản.",
       "H": "Tính xác suất của biến cố.",
       "V": "Bài toán xác suất trong thực tế."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "c9",
      "content": "Quan hệ giữa các yếu tố trong tam giác; các đường đồng quy",
      "yccd": {
       "B": "Nhận biết quan hệ góc – cạnh đối diện, bất đẳng thức tam giác, trọng tâm.",
       "H": "So sánh góc, cạnh; tính độ dài liên quan trọng tâm.",
       "V": "Chứng minh, so sánh đoạn thẳng."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t4",
      "chapter": "c10",
      "content": "Hình hộp chữ nhật, hình lập phương, hình lăng trụ đứng",
      "yccd": {
       "B": "Nhận biết các yếu tố của hình; công thức thể tích.",
       "H": "Tính thể tích lăng trụ đứng.",
       "V": "Bài toán thực tế về thể tích, diện tích."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Biến cố “Mặt Trời mọc ở hướng đông” là:",
      "options": [
       "biến cố chắc chắn",
       "biến cố không thể",
       "biến cố ngẫu nhiên",
       "không phải biến cố"
      ],
      "answer": 0,
      "explain": "Sự kiện này luôn xảy ra."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Gieo một con xúc xắc cân đối. Xác suất xuất hiện mặt 6 chấm là:",
      "options": [
       "{{1|6}}",
       "{{1|2}}",
       "{{1|3}}",
       "6"
      ],
      "answer": 0,
      "explain": "Có 6 mặt đồng khả năng, 1 mặt thuận lợi.",
      "calc": "1/6"
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Trong một tam giác, cạnh đối diện với góc lớn nhất là:",
      "options": [
       "cạnh nhỏ nhất",
       "cạnh bất kì",
       "cạnh lớn nhất",
       "không xác định được"
      ],
      "answer": 2,
      "explain": "Góc lớn hơn đối diện cạnh lớn hơn."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Bộ ba độ dài nào sau đây là độ dài ba cạnh của một tam giác?",
      "options": [
       "3 cm; 4 cm; 5 cm",
       "1 cm; 2 cm; 3 cm",
       "2 cm; 3 cm; 6 cm",
       "1 cm; 1 cm; 3 cm"
      ],
      "answer": 0,
      "explain": "3 + 4 > 5; các bộ còn lại vi phạm bất đẳng thức tam giác (1 + 2 = 3; 2 + 3 < 6; 1 + 1 < 3)."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Giao điểm của ba đường trung tuyến của tam giác gọi là:",
      "options": [
       "trực tâm",
       "trọng tâm",
       "tâm đường tròn ngoại tiếp",
       "tâm đường tròn nội tiếp"
      ],
      "answer": 1,
      "explain": "Ba đường trung tuyến đồng quy tại trọng tâm."
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Hình lập phương có bao nhiêu mặt?",
      "options": [
       "8",
       "12",
       "6",
       "4"
      ],
      "answer": 2,
      "explain": "Hình lập phương có 6 mặt, 12 cạnh, 8 đỉnh.",
      "calc": "6"
     },
     {
      "level": "B",
      "topic": "t4",
      "q": "Thể tích hình hộp chữ nhật có ba kích thước 2 cm, 3 cm, 4 cm là:",
      "options": [
       "9 cm³",
       "24 cm³",
       "26 cm³",
       "12 cm³"
      ],
      "answer": 1,
      "explain": "V = 2 · 3 · 4 = 24 (cm³).",
      "calc": "2*3*4"
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Bậc của đa thức 5x<sup>3</sup> − x là:",
      "options": [
       "1",
       "5",
       "3",
       "4"
      ],
      "answer": 2,
      "explain": "Số mũ cao nhất là 3.",
      "calc": "3"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Một túi có 3 viên bi đỏ và 5 viên bi xanh cùng kích thước. Lấy ngẫu nhiên một viên. Xác suất lấy được bi đỏ là:",
      "options": [
       "{{3|5}}",
       "{{5|8}}",
       "{{1|3}}",
       "{{3|8}}"
      ],
      "answer": 3,
      "explain": "3 viên đỏ trong tổng 8 viên.",
      "calc": "3/8"
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "Tam giác ABC có AB = 5 cm, AC = 7 cm, BC = 6 cm. Góc lớn nhất của tam giác là:",
      "options": [
       "∠A",
       "∠C",
       "Ba góc bằng nhau",
       "∠B"
      ],
      "answer": 3,
      "explain": "Cạnh lớn nhất là AC, đối diện với góc B."
     },
     {
      "level": "H",
      "topic": "t3",
      "q": "G là trọng tâm của tam giác ABC, đường trung tuyến AM dài 9 cm. Độ dài AG là:",
      "options": [
       "3 cm",
       "4,5 cm",
       "9 cm",
       "6 cm"
      ],
      "answer": 3,
      "explain": "AG = {{2|3}} AM = 6 (cm).",
      "calc": "9*2/3"
     },
     {
      "level": "H",
      "topic": "t4",
      "q": "Hình lăng trụ đứng tam giác có diện tích đáy 6 cm² và chiều cao 10 cm. Thể tích của nó là:",
      "options": [
       "16 cm³",
       "60 cm³",
       "30 cm³",
       "20 cm³"
      ],
      "answer": 1,
      "explain": "V = S<sub>đáy</sub> · h = 60 (cm³).",
      "calc": "6*10"
     }
    ],
    "tf": [
     {
      "topic": "t3",
      "q": "Tam giác ABC có AB = 4 cm, AC = 6 cm.",
      "items": [
       {
        "s": "BC có thể bằng 3 cm.",
        "answer": true,
        "level": "B",
        "explain": "6 − 4 < 3 < 6 + 4.",
        "check": "6-4<3&&3<6+4"
       },
       {
        "s": "BC có thể bằng 11 cm.",
        "answer": false,
        "level": "B",
        "explain": "BC phải nhỏ hơn 4 + 6 = 10.",
        "check": "11<10"
       },
       {
        "s": "Nếu BC = 5 cm thì ∠B là góc lớn nhất của tam giác.",
        "answer": true,
        "level": "H",
        "explain": "Cạnh lớn nhất là AC = 6 cm, đối diện ∠B."
       },
       {
        "s": "Nếu độ dài BC (theo cm) là số nguyên chia hết cho 5 thì BC = 5 cm.",
        "answer": true,
        "level": "H",
        "explain": "BC là số nguyên trong khoảng 2 < BC < 10, chỉ có 5 chia hết cho 5.",
        "check": "[3,4,5,6,7,8,9].filter(function(x){return x%5===0}).join()==='5'"
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Một hộp có 10 tấm thẻ được đánh số 1; 2; …; 10. Rút ngẫu nhiên một thẻ.",
      "items": [
       {
        "s": "Biến cố “Rút được thẻ ghi số nhỏ hơn 11” là biến cố chắc chắn.",
        "answer": true,
        "level": "B",
        "explain": "Mọi thẻ đều ghi số nhỏ hơn 11."
       },
       {
        "s": "Biến cố “Rút được thẻ ghi số 0” là biến cố ngẫu nhiên.",
        "answer": false,
        "level": "B",
        "explain": "Không có thẻ số 0: đó là biến cố không thể."
       },
       {
        "s": "Xác suất rút được thẻ ghi số chẵn là {{1|2}}.",
        "answer": true,
        "level": "H",
        "explain": "Có 5 số chẵn trong 10 số.",
        "check": "5/10===0.5"
       },
       {
        "s": "Xác suất rút được thẻ ghi số nguyên tố là 0,4.",
        "answer": true,
        "level": "V",
        "explain": "Các số nguyên tố: 2; 3; 5; 7 (4 số); 4 : 10 = 0,4.",
        "check": "[2,3,5,7].length/10===0.4"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t4",
      "q": "Tính thể tích hình lập phương có cạnh 3 cm (đơn vị cm³).",
      "answer": "27",
      "explain": "3<sup>3</sup> = 27.",
      "calc": "27",
      "unit": "cm³"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Tính giá trị của đa thức x<sup>3</sup> − 2x tại x = 2.",
      "answer": "4",
      "explain": "8 − 4 = 4.",
      "calc": "8-4"
     },
     {
      "level": "V",
      "topic": "t4",
      "q": "Một bể nước hình hộp chữ nhật dài 2 m, rộng 1,5 m, cao 1 m đang chứa nước bằng 80% thể tích bể. Bể đang chứa bao nhiêu lít nước?",
      "answer": "2400",
      "explain": "Thể tích bể 2 · 1,5 · 1 = 3 m³ = 3 000 lít; 80% là 2 400 lít.",
      "calc": "2*1.5*1*1000*0.8",
      "unit": "lít"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Lớp 7A có 30 học sinh, trong đó 12 bạn nữ. Chọn ngẫu nhiên một bạn. Tính xác suất chọn được bạn nam (viết dạng số thập phân).",
      "answer": "0.6",
      "explain": "Có 18 bạn nam; 18 : 30 = 0,6.",
      "calc": "18/30",
      "answerText": "0,6"
     }
    ],
    "essay": [
     {
      "topic": "t1",
      "q": "Cho P(x) = 2x<sup>2</sup> − 3x + 1 và Q(x) = x<sup>2</sup> + 3x − 4.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Tính P(x) + Q(x).",
        "answer": "P(x) + Q(x) = 3x<sup>2</sup> − 3.",
        "rubric": [
         [
          "Cộng các hạng tử cùng bậc",
          0.25
         ],
         [
          "Kết quả 3x<sup>2</sup> − 3",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 0.75,
        "q": "Thực hiện phép chia (x<sup>2</sup> − 9) : (x − 3).",
        "answer": "x<sup>2</sup> : x = x; x(x − 3) = x<sup>2</sup> − 3x; dư 3x − 9; 3x : x = 3; 3(x − 3) = 3x − 9; dư 0. Thương là x + 3.",
        "rubric": [
         [
          "Bước chia thứ nhất được x",
          0.25
         ],
         [
          "Bước chia thứ hai được 3",
          0.25
         ],
         [
          "Thương x + 3, dư 0",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t3",
      "q": "Cho tam giác ABC vuông tại A có AB < AC. Kẻ AH vuông góc với BC (H ∈ BC).",
      "parts": [
       {
        "level": "V",
        "points": 0.5,
        "q": "So sánh ∠B và ∠C.",
        "answer": "AB < AC nên góc đối diện AB nhỏ hơn góc đối diện AC: ∠C < ∠B.",
        "rubric": [
         [
          "Nêu quan hệ góc – cạnh đối diện",
          0.25
         ],
         [
          "Kết luận ∠C < ∠B",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.75,
        "q": "So sánh HB và HC.",
        "answer": "HB, HC lần lượt là hình chiếu của các đường xiên AB, AC trên BC. Vì AB < AC nên HB < HC.",
        "rubric": [
         [
          "Xác định HB, HC là hình chiếu",
          0.25
         ],
         [
          "Dùng quan hệ đường xiên – hình chiếu",
          0.25
         ],
         [
          "Kết luận HB < HC",
          0.25
         ]
        ]
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
        "q": "Một hộp quà hình lập phương cạnh 20 cm. Cần bao nhiêu xăng-ti-mét vuông giấy để dán kín tất cả các mặt của hộp (không tính mép dán)?",
        "answer": "Một mặt: 20 · 20 = 400 (cm²); 6 mặt: 6 · 400 = 2 400 (cm²).",
        "rubric": [
         [
          "Diện tích một mặt 400 cm²",
          0.25
         ],
         [
          "Tổng 2 400 cm²",
          0.25
         ]
        ],
        "calc": "6*400"
       }
      ]
     }
    ]
   }
  }
 ]
});
