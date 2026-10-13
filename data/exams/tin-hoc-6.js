/* Tin học 6 – Ôn tập và đề kiểm tra định kì theo cấu trúc CV 7991/BGDĐT-GDTrH. Nội dung do nhóm biên soạn tự viết. */
THCS.registerExams("tin-hoc-6", {
 "split": "Chia theo thứ tự bài học SGK Tin học 6 – Kết nối tri thức với cuộc sống (17 bài, 6 chủ đề). <b>Giữa học kì 1:</b> Chủ đề 1 – 2 (Bài 1 – Bài 5). <b>Cuối học kì 1:</b> Bài 1 – Bài 9, trọng tâm Chủ đề 3 – 4. <b>Giữa học kì 2:</b> Chủ đề 5 (Bài 10 – Bài 14). <b>Cuối học kì 2:</b> Bài 10 – Bài 17, trọng tâm Chủ đề 6 (thuật toán, cấu trúc điều khiển, chương trình). Cách chia tham khảo; hãy xem đề cương của trường.",
 "structure": "Phần I – 12 câu nhiều lựa chọn (0,25 điểm/câu) 3,0 điểm; Phần II – 2 câu đúng/sai, mỗi câu 4 ý, 2,0 điểm (chấm theo số ý đúng: 1 ý 0,1; 2 ý 0,25; 3 ý 0,5; 4 ý 1 điểm, theo QĐ 764/QĐ-BGDĐT); Phần III – 4 câu trả lời ngắn (0,5 điểm/câu) 2,0 điểm; Phần IV – tự luận 3,0 điểm. Mức độ: Biết 4,0 – Hiểu 3,0 – Vận dụng 3,0 điểm. Đề phủ các chủ đề theo phạm vi từng kì; câu tự luận gắn với tình huống sử dụng máy tính thực tế.",
 "checkpoints": [
  {
   "id": "giua-ki-1",
   "name": "Giữa học kì 1",
   "scope": "Chủ đề 1. Máy tính và cộng đồng; Chủ đề 2. Mạng máy tính và Internet (Bài 1 – Bài 5).",
   "review": {
    "sections": [
     {
      "chapter": "cd1",
      "title": "Chủ đề 1. Máy tính và cộng đồng",
      "points": [
       "Thông tin là những gì đem lại hiểu biết; dữ liệu là những gì được ghi lại (chữ, số, hình ảnh, âm thanh).",
       "Xử lí thông tin: thu nhận → xử lí → lưu trữ → truyền.",
       "Máy tính biểu diễn thông tin bằng bit (0, 1); 1 byte = 8 bit; 1 KB = 1 024 byte; 1 MB = 1 024 KB; 1 GB = 1 024 MB."
      ],
      "example": "3 MB = 3 · 1 024 = 3 072 KB."
     },
     {
      "chapter": "cd2",
      "title": "Chủ đề 2. Mạng máy tính và Internet",
      "points": [
       "Mạng máy tính: thiết bị đầu cuối, thiết bị kết nối, phần mềm mạng; mạng có dây và không dây.",
       "Internet: phạm vi toàn cầu, tương tác, dễ tiếp cận, không thuộc sở hữu của ai.",
       "Lợi ích và tác hại; sử dụng Internet an toàn, hợp lí."
      ]
     }
    ],
    "mistakes": [
     "Nhầm thông tin với dữ liệu.",
     "Lấy 1 KB = 1 000 byte.",
     "Nhầm thiết bị đầu cuối với thiết bị kết nối."
    ],
    "forms": [
     "Phân biệt thông tin – dữ liệu.",
     "Đổi đơn vị dung lượng.",
     "Thành phần mạng máy tính.",
     "Lợi ích, tác hại Internet."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Tin học có 35 tiết/năm nên kiểm tra định kì thường làm 45 phút, có thể kết hợp phần thực hành trên máy; đề này là phần lí thuyết theo đúng tỉ lệ điểm (3 – 2 – 2 – 3) và mức độ (Biết 4 – Hiểu 3 – Vận dụng 3) của Phụ lục Công văn 7991.",
    "topics": [
     {
      "id": "t1",
      "chapter": "cd1",
      "content": "Thông tin và dữ liệu; xử lí thông tin; thông tin trong máy tính",
      "yccd": {
       "B": "Nhận biết thông tin, dữ liệu, bit, byte.",
       "H": "Phân biệt thông tin – dữ liệu; các bước xử lí thông tin.",
       "V": "Đổi đơn vị dung lượng; ước lượng lưu trữ."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "cd2",
      "content": "Mạng máy tính; Internet",
      "yccd": {
       "B": "Nhận biết thành phần mạng, đặc điểm Internet.",
       "H": "Phân biệt mạng có dây, không dây.",
       "V": "Nêu lợi ích, tác hại của Internet trong tình huống."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Đâu là ví dụ về <i>dữ liệu</i>?",
      "options": [
       "Kết luận “hôm nay trời nóng”",
       "Quyết định mang theo ô",
       "Các con số nhiệt độ ghi trong bảng theo dõi",
       "Sự hiểu biết của em về thời tiết"
      ],
      "answer": 2,
      "explain": "Dữ liệu là những gì được ghi lại (số, chữ, hình…); thông tin là ý nghĩa rút ra từ dữ liệu."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Đơn vị nhỏ nhất dùng để đo dung lượng thông tin là:",
      "options": [
       "Byte",
       "Bit",
       "Kilobyte",
       "Megabyte"
      ],
      "answer": 1,
      "explain": "Bit chỉ nhận một trong hai giá trị 0 hoặc 1."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Máy tính biểu diễn thông tin bằng:",
      "options": [
       "Dãy bit gồm các kí hiệu 0 và 1",
       "Các chữ số từ 0 đến 9",
       "Các chữ cái A – Z",
       "Hình vẽ"
      ],
      "answer": 0,
      "explain": "Mọi thông tin trong máy tính được mã hoá thành dãy bit."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Hoạt động xử lí thông tin gồm các bước:",
      "options": [
       "Chỉ có nhập và xuất",
       "Gõ phím và in",
       "Thu nhận, xử lí, lưu trữ, truyền thông tin",
       "Bật và tắt máy"
      ],
      "answer": 2,
      "explain": "Bốn hoạt động của quá trình xử lí thông tin."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Thiết bị nào sau đây là <i>thiết bị kết nối</i> trong mạng máy tính?",
      "options": [
       "Máy in",
       "Điện thoại thông minh",
       "Bộ định tuyến (router)",
       "Máy tính xách tay"
      ],
      "answer": 2,
      "explain": "Router, switch, access point là thiết bị kết nối; máy tính, điện thoại, máy in là thiết bị đầu cuối."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Mạng máy tính gồm ba thành phần cơ bản:",
      "options": [
       "Bàn phím, chuột, màn hình",
       "Ổ cứng, RAM, CPU",
       "Loa, micro, webcam",
       "Thiết bị đầu cuối, thiết bị kết nối, phần mềm mạng"
      ],
      "answer": 3,
      "explain": "Cấu tạo cơ bản của mạng máy tính."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Đặc điểm nào sau đây là của Internet?",
      "options": [
       "Có phạm vi toàn cầu",
       "Chỉ dùng trong một trường học",
       "Thuộc sở hữu của một công ty duy nhất",
       "Không thể truy cập bằng điện thoại"
      ],
      "answer": 0,
      "explain": "Internet có phạm vi toàn cầu, tính tương tác, dễ tiếp cận, không thuộc sở hữu của ai."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Mạng không dây truyền dữ liệu bằng:",
      "options": [
       "Sóng điện từ (sóng vô tuyến)",
       "Cáp đồng",
       "Cáp quang",
       "Dây điện thoại"
      ],
      "answer": 0,
      "explain": "Wi-Fi, Bluetooth dùng sóng vô tuyến."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "1 KB bằng bao nhiêu byte?",
      "options": [
       "1 000 byte",
       "8 byte",
       "100 byte",
       "1 024 byte"
      ],
      "answer": 3,
      "explain": "1 KB = 2<sup>10</sup> = 1 024 byte.",
      "calc": "Math.pow(2,10)"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Một tệp ảnh có dung lượng 3 MB. Dung lượng đó bằng bao nhiêu KB?",
      "options": [
       "3 000 KB",
       "3 072 KB",
       "300 KB",
       "24 KB"
      ],
      "answer": 1,
      "explain": "3 · 1 024 = 3 072 KB.",
      "calc": "3*1024"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Vì sao gia đình dùng Wi-Fi thì điện thoại và máy tính xách tay có thể kết nối Internet ở nhiều phòng?",
      "options": [
       "Vì Wi-Fi nhanh hơn mọi mạng có dây",
       "Vì Wi-Fi không cần thiết bị kết nối",
       "Vì điện thoại tự phát ra Internet",
       "Vì mạng không dây không cần dây cáp nối tới từng thiết bị"
      ],
      "answer": 3,
      "explain": "Thiết bị thu sóng từ điểm truy cập không dây."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Bạn An nhìn bảng điểm (dữ liệu) và nhận ra mình tiến bộ môn Toán. “Mình tiến bộ môn Toán” là:",
      "options": [
       "Dữ liệu thô",
       "Thông tin rút ra từ dữ liệu",
       "Vật mang tin",
       "Thiết bị lưu trữ"
      ],
      "answer": 1,
      "explain": "Thông tin là ý nghĩa con người thu được từ dữ liệu."
     }
    ],
    "tf": [
     {
      "topic": "t1",
      "q": "Một thẻ nhớ có dung lượng 4 GB.",
      "items": [
       {
        "s": "Thẻ nhớ là thiết bị lưu trữ dữ liệu.",
        "answer": true,
        "level": "B",
        "explain": "Thẻ nhớ dùng để lưu trữ."
       },
       {
        "s": "1 GB bằng 1 024 MB.",
        "answer": true,
        "level": "B",
        "explain": "Quy ước trong SGK.",
        "check": "1024===1024"
       },
       {
        "s": "Dung lượng thẻ bằng 4 000 MB.",
        "answer": false,
        "level": "H",
        "explain": "4 · 1 024 = 4 096 MB.",
        "check": "4*1024===4000"
       },
       {
        "s": "Mỗi bài hát khoảng 4 MB thì thẻ chứa được tối đa 1 024 bài hát.",
        "answer": true,
        "level": "V",
        "explain": "4 096 : 4 = 1 024 bài.",
        "check": "4*1024/4===1024"
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Các nhận định về Internet.",
      "items": [
       {
        "s": "Internet là mạng kết nối hàng triệu máy tính và mạng máy tính trên khắp thế giới.",
        "answer": true,
        "level": "B",
        "explain": "Định nghĩa."
       },
       {
        "s": "Internet thuộc quyền sở hữu của Nhà nước Việt Nam.",
        "answer": false,
        "level": "B",
        "explain": "Internet không thuộc sở hữu của bất kì ai."
       },
       {
        "s": "Dùng Internet giúp em học trực tuyến, tra cứu thông tin.",
        "answer": true,
        "level": "H",
        "explain": "Lợi ích của Internet."
       },
       {
        "s": "Bạn Bình dùng Internet đến 1 giờ sáng mỗi ngày để chơi trò chơi; đây là cách sử dụng hợp lí.",
        "answer": false,
        "level": "V",
        "explain": "Sử dụng quá mức gây hại sức khoẻ, học tập."
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t1",
      "q": "1 byte gồm bao nhiêu bit?",
      "answer": "8",
      "explain": "1 byte = 8 bit.",
      "calc": "8",
      "unit": "bit"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Một văn bản có 2 KB. Văn bản đó có bao nhiêu byte?",
      "answer": "2048",
      "explain": "2 · 1 024 = 2 048 byte.",
      "calc": "2*1024",
      "unit": "byte"
     },
     {
      "level": "V",
      "topic": "t1",
      "q": "Một ảnh chụp chiếm khoảng 2 MB. Một USB còn trống 1 GB thì lưu được tối đa bao nhiêu ảnh như vậy?",
      "answer": "512",
      "explain": "1 GB = 1 024 MB; 1 024 : 2 = 512 ảnh.",
      "calc": "1024/2",
      "unit": "ảnh"
     },
     {
      "level": "V",
      "topic": "t1",
      "q": "Mỗi kí tự tiếng Anh được mã hoá bằng 1 byte. Từ “COMPUTER” chiếm bao nhiêu bit?",
      "answer": "64",
      "explain": "8 kí tự · 8 bit = 64 bit.",
      "calc": "\"COMPUTER\".length*8",
      "unit": "bit"
     }
    ],
    "essay": [
     {
      "topic": "t1",
      "q": "Thông tin và xử lí thông tin.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Nêu các hoạt động của quá trình xử lí thông tin.",
        "answer": "Thu nhận, xử lí, lưu trữ và truyền thông tin.",
        "rubric": [
         [
          "Thu nhận, xử lí",
          0.25
         ],
         [
          "Lưu trữ, truyền",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 1.0,
        "q": "Khi em gọi món ở căng-tin, hãy chỉ ra các hoạt động thu nhận, xử lí, lưu trữ, truyền thông tin của người bán hàng.",
        "answer": "Thu nhận: nghe em gọi món. Xử lí: tính tiền, chọn món. Lưu trữ: ghi vào sổ / máy. Truyền: báo số tiền, đưa món cho em.",
        "rubric": [
         [
          "Thu nhận",
          0.25
         ],
         [
          "Xử lí",
          0.25
         ],
         [
          "Lưu trữ",
          0.25
         ],
         [
          "Truyền",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Internet trong học tập.",
      "parts": [
       {
        "level": "V",
        "points": 1.0,
        "q": "Nêu hai lợi ích và hai tác hại có thể gặp khi học sinh sử dụng Internet.",
        "answer": "Lợi ích: tra cứu tài liệu, học trực tuyến, liên lạc. Tác hại: nghiện game/mạng xã hội, gặp thông tin xấu, lừa đảo, lộ thông tin cá nhân.",
        "rubric": [
         [
          "Lợi ích 1",
          0.25
         ],
         [
          "Lợi ích 2",
          0.25
         ],
         [
          "Tác hại 1",
          0.25
         ],
         [
          "Tác hại 2",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Em sẽ làm gì để sử dụng Internet an toàn, hợp lí? Nêu hai việc cụ thể.",
        "answer": "Đặt thời gian sử dụng; không chia sẻ thông tin cá nhân; chỉ truy cập trang tin cậy; hỏi người lớn khi gặp nội dung lạ.",
        "rubric": [
         [
          "Việc làm 1",
          0.25
         ],
         [
          "Việc làm 2",
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
   "scope": "Bài 1 – Bài 9, trọng tâm Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin; Chủ đề 4. An toàn thông tin trên Internet.",
   "review": {
    "sections": [
     {
      "chapter": "cd3",
      "title": "Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
      "points": [
       "WWW gồm các trang web; website; trình duyệt; siêu liên kết; địa chỉ trang web.",
       "Máy tìm kiếm, từ khoá; dùng dấu ngoặc kép để tìm chính xác cụm từ.",
       "Thư điện tử: địa chỉ tên@tên miền; ưu điểm, nhược điểm; quy tắc khi viết thư."
      ]
     },
     {
      "chapter": "cd4",
      "title": "Chủ đề 4. An toàn thông tin trên Internet",
      "points": [
       "Tác hại: lừa đảo, bắt nạt, phần mềm độc hại, lộ thông tin cá nhân, nghiện Internet.",
       "Mật khẩu mạnh; không chia sẻ thông tin cá nhân; không mở thư, liên kết lạ.",
       "Khi gặp nguy hiểm: báo bố mẹ, thầy cô; lưu bằng chứng; chặn, báo cáo."
      ]
     }
    ],
    "mistakes": [
     "Nhầm địa chỉ trang web với địa chỉ thư điện tử.",
     "Dùng từ khoá quá chung chung.",
     "Chia sẻ mật khẩu cho bạn bè."
    ],
    "forms": [
     "Trang web, trình duyệt, máy tìm kiếm.",
     "Chọn từ khoá.",
     "Thư điện tử.",
     "Tình huống an toàn mạng."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Tin học có 35 tiết/năm nên kiểm tra định kì thường làm 45 phút, có thể kết hợp phần thực hành trên máy; đề này là phần lí thuyết theo đúng tỉ lệ điểm (3 – 2 – 2 – 3) và mức độ (Biết 4 – Hiểu 3 – Vận dụng 3) của Phụ lục Công văn 7991.",
    "topics": [
     {
      "id": "t1",
      "chapter": "cd3",
      "content": "Mạng thông tin toàn cầu; tìm kiếm thông tin; thư điện tử",
      "yccd": {
       "B": "Nhận biết trang web, trình duyệt, máy tìm kiếm, địa chỉ thư.",
       "H": "Chọn từ khoá; giải thích ưu nhược điểm thư điện tử.",
       "V": "Xử lí tình huống tìm kiếm, gửi thư."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "cd4",
      "content": "An toàn thông tin trên Internet",
      "yccd": {
       "B": "Nhận biết tác hại, nguy cơ.",
       "H": "Phân biệt mật khẩu mạnh – yếu.",
       "V": "Xử lí tình huống bị bắt nạt, lừa đảo trên mạng."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "cd1",
      "content": "Ôn tập: thông tin trong máy tính",
      "yccd": {
       "B": "Nhận biết đơn vị đo.",
       "H": "Đổi đơn vị.",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Phần mềm dùng để truy cập các trang web là:",
      "options": [
       "Trình duyệt web",
       "Phần mềm soạn thảo văn bản",
       "Phần mềm bảng tính",
       "Phần mềm diệt virus"
      ],
      "answer": 0,
      "explain": "Ví dụ: Chrome, Edge, Firefox, Cốc Cốc."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Mỗi trang web có một địa chỉ để truy cập, ví dụ:",
      "options": [
       "https://www.moet.gov.vn",
       "lan@gmail.com",
       "C:\\Tai lieu",
       "0912 345 678"
      ],
      "answer": 0,
      "explain": "Địa chỉ trang web bắt đầu bằng http(s)://; lan@gmail.com là địa chỉ thư điện tử."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Máy tìm kiếm là:",
      "options": [
       "Một loại máy tính đặc biệt",
       "Thiết bị kết nối mạng",
       "Website giúp tìm thông tin trên Internet theo từ khoá",
       "Phần mềm soạn thảo"
      ],
      "answer": 2,
      "explain": "Ví dụ: Google, Bing."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Địa chỉ thư điện tử nào viết đúng?",
      "options": [
       "minhanh2012.gmail.com",
       "@minhanh2012gmail.com",
       "minhanh 2012@gmail",
       "minhanh2012@gmail.com"
      ],
      "answer": 3,
      "explain": "Dạng &lt;tên đăng nhập&gt;@&lt;tên miền&gt;."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Siêu liên kết (hyperlink) dùng để:",
      "options": [
       "Tô màu chữ",
       "Tắt máy tính",
       "Lưu tệp vào ổ đĩa",
       "Chuyển tới trang web hoặc vị trí khác khi nháy chuột"
      ],
      "answer": 3,
      "explain": "Đặc trưng của trang web."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Mật khẩu nào sau đây mạnh nhất?",
      "options": [
       "123456",
       "abcdef",
       "Hoa#Sen2012!",
       "matkhau"
      ],
      "answer": 2,
      "explain": "Mật khẩu mạnh dài, kết hợp chữ hoa, chữ thường, số và kí tự đặc biệt."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Phần mềm độc hại có thể gây ra tác hại nào?",
      "options": [
       "Làm màn hình sáng hơn",
       "Đánh cắp, phá huỷ dữ liệu trên máy tính",
       "Tăng dung lượng ổ cứng",
       "Làm máy chạy nhanh hơn"
      ],
      "answer": 1,
      "explain": "Virus, phần mềm gián điệp gây mất dữ liệu."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "2 KB bằng bao nhiêu byte?",
      "options": [
       "2 000 byte",
       "16 byte",
       "200 byte",
       "2 048 byte"
      ],
      "answer": 3,
      "explain": "2 · 1 024 = 2 048 byte.",
      "calc": "2*1024"
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Muốn tìm thông tin về “cách trồng cây sen đá”, từ khoá nào giúp kết quả phù hợp nhất?",
      "options": [
       "\"cách trồng cây sen đá\"",
       "cây",
       "trồng",
       "hoa"
      ],
      "answer": 0,
      "explain": "Đặt cụm từ trong dấu ngoặc kép để tìm chính xác cụm từ."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Ưu điểm của thư điện tử so với thư gửi qua bưu điện là:",
      "options": [
       "Không cần Internet",
       "Gửi nhanh, có thể gửi cho nhiều người và kèm tệp",
       "Không cần địa chỉ người nhận",
       "Không bao giờ bị lộ thông tin"
      ],
      "answer": 1,
      "explain": "Thư điện tử cần Internet và địa chỉ người nhận."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Nhận được tin nhắn “Bạn trúng thưởng điện thoại, hãy gửi mật khẩu tài khoản để nhận quà”, em nên:",
      "options": [
       "Gửi ngay mật khẩu",
       "Không trả lời, không gửi mật khẩu và báo cho người lớn",
       "Chia sẻ cho bạn bè cùng nhận",
       "Nháy vào đường link để xem quà"
      ],
      "answer": 1,
      "explain": "Đây là dấu hiệu lừa đảo."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Vì sao không nên dùng chung một mật khẩu cho mọi tài khoản?",
      "options": [
       "Vì máy tính không cho phép",
       "Vì mật khẩu sẽ hết hạn",
       "Vì lộ một mật khẩu sẽ mất tất cả tài khoản",
       "Vì sẽ quên tên đăng nhập"
      ],
      "answer": 2,
      "explain": "Hạn chế rủi ro khi bị lộ mật khẩu."
     }
    ],
    "tf": [
     {
      "topic": "t1",
      "q": "Bạn Hà gửi thư điện tử đến cô giáo để nộp bài.",
      "items": [
       {
        "s": "Hà cần biết địa chỉ thư điện tử của cô giáo.",
        "answer": true,
        "level": "B",
        "explain": "Phải có địa chỉ người nhận."
       },
       {
        "s": "Hà có thể đính kèm tệp bài làm vào thư.",
        "answer": true,
        "level": "B",
        "explain": "Thư điện tử cho phép gửi tệp đính kèm."
       },
       {
        "s": "Thư chỉ đến được nếu cô giáo đang mở máy tính lúc Hà gửi.",
        "answer": false,
        "level": "H",
        "explain": "Thư được lưu trên máy chủ, cô giáo đọc khi đăng nhập."
       },
       {
        "s": "Hà nên ghi tiêu đề rõ ràng như “Nộp bài tập Tin học – Lớp 6A – Nguyễn Thu Hà”.",
        "answer": true,
        "level": "V",
        "explain": "Giúp người nhận dễ nhận biết, thể hiện lịch sự."
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Tình huống: Một người lạ làm quen với Nam trên mạng, rủ Nam gặp mặt và đề nghị Nam gửi ảnh, địa chỉ nhà.",
      "items": [
       {
        "s": "Đây là tình huống có thể nguy hiểm.",
        "answer": true,
        "level": "B",
        "explain": "Người lạ có thể lừa đảo, xâm hại."
       },
       {
        "s": "Nam nên giữ bí mật thông tin cá nhân.",
        "answer": true,
        "level": "B",
        "explain": "Không chia sẻ địa chỉ, ảnh riêng tư."
       },
       {
        "s": "Nam nên đi gặp một mình để giữ bí mật.",
        "answer": false,
        "level": "H",
        "explain": "Không được gặp người lạ quen qua mạng một mình."
       },
       {
        "s": "Nam nên kể với bố mẹ hoặc thầy cô và chặn tài khoản đó.",
        "answer": true,
        "level": "V",
        "explain": "Cách xử lí an toàn."
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t3",
      "q": "1 MB bằng bao nhiêu KB?",
      "answer": "1024",
      "explain": "1 MB = 1 024 KB.",
      "calc": "1024",
      "unit": "KB"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Mật khẩu “Hoa#Sen2012!” có bao nhiêu kí tự?",
      "answer": "12",
      "explain": "Đếm: H-o-a-#-S-e-n-2-0-1-2-! = 12 kí tự.",
      "calc": "\"Hoa#Sen2012!\".length",
      "unit": "kí tự"
     },
     {
      "level": "V",
      "topic": "t1",
      "q": "Hộp thư còn trống 15 MB. Mỗi ảnh đính kèm khoảng 3 MB. Có thể nhận thêm tối đa bao nhiêu ảnh?",
      "answer": "5",
      "explain": "15 : 3 = 5 ảnh.",
      "calc": "15/3",
      "unit": "ảnh"
     },
     {
      "level": "V",
      "topic": "t1",
      "q": "Máy tìm kiếm trả về 10 kết quả mỗi trang. Muốn xem kết quả thứ 47, em phải mở đến trang thứ mấy?",
      "answer": "5",
      "explain": "Trang 5 chứa kết quả 41 – 50.",
      "calc": "Math.ceil(47/10)"
     }
    ],
    "essay": [
     {
      "topic": "t1",
      "q": "Tìm kiếm thông tin.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Từ khoá là gì?",
        "answer": "Từ khoá là từ hoặc cụm từ liên quan đến nội dung cần tìm, do người dùng nhập vào máy tìm kiếm.",
        "rubric": [
         [
          "Từ/cụm từ liên quan nội dung",
          0.25
         ],
         [
          "Nhập vào máy tìm kiếm",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 1.0,
        "q": "Trình bày các bước tìm kiếm thông tin bằng máy tìm kiếm.",
        "answer": "Mở trình duyệt; truy cập máy tìm kiếm; gõ từ khoá vào ô tìm kiếm rồi nhấn Enter; xem danh sách kết quả, nháy vào liên kết phù hợp.",
        "rubric": [
         [
          "Mở trình duyệt, vào máy tìm kiếm",
          0.25
         ],
         [
          "Gõ từ khoá",
          0.25
         ],
         [
          "Nhấn Enter",
          0.25
         ],
         [
          "Chọn kết quả phù hợp",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t2",
      "q": "An toàn trên mạng.",
      "parts": [
       {
        "level": "V",
        "points": 1.0,
        "q": "Bạn Lan bị một nhóm bạn đăng ảnh chế giễu trên mạng xã hội. Nếu em là Lan, em sẽ làm gì?",
        "answer": "Không đáp trả bằng lời lẽ xúc phạm; lưu lại bằng chứng (chụp màn hình); báo cho bố mẹ, thầy cô; báo cáo/chặn tài khoản, đề nghị gỡ ảnh.",
        "rubric": [
         [
          "Không đáp trả tiêu cực",
          0.25
         ],
         [
          "Lưu bằng chứng",
          0.25
         ],
         [
          "Báo người lớn tin cậy",
          0.25
         ],
         [
          "Báo cáo, chặn tài khoản",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Đặt một mật khẩu mạnh cho tài khoản học tập và giải thích vì sao mạnh.",
        "answer": "Ví dụ: Tin6A@2026hoc – dài trên 8 kí tự, có chữ hoa, chữ thường, số, kí tự đặc biệt, không chứa thông tin dễ đoán.",
        "rubric": [
         [
          "Mật khẩu hợp lệ",
          0.25
         ],
         [
          "Giải thích đúng",
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
   "scope": "Chủ đề 5. Ứng dụng tin học: sơ đồ tư duy, định dạng văn bản, bảng, tìm kiếm và thay thế (Bài 10 – Bài 14).",
   "review": {
    "sections": [
     {
      "chapter": "cd5",
      "title": "Sơ đồ tư duy",
      "points": [
       "Gồm chủ đề chính (ở giữa), chủ đề nhánh, đường nối; có thể dùng màu sắc, hình ảnh.",
       "Ưu điểm: ngắn gọn, trực quan, dễ ghi nhớ; vẽ tay hoặc bằng phần mềm."
      ]
     },
     {
      "chapter": "cd5",
      "title": "Soạn thảo văn bản",
      "points": [
       "Định dạng kí tự (phông, cỡ, kiểu, màu); đoạn văn (căn lề, thụt lề, khoảng cách); trang (hướng, lề).",
       "Bảng: Insert → Table; số ô = số hàng · số cột; thêm, xoá hàng, cột.",
       "Tìm kiếm (Ctrl + F) và thay thế (Ctrl + H, Replace All)."
      ],
      "example": "Bảng 5 hàng, 4 cột có 20 ô."
     }
    ],
    "mistakes": [
     "Nhầm định dạng kí tự với định dạng đoạn.",
     "Nhầm Ctrl + F với Ctrl + H.",
     "Đếm sai số ô của bảng."
    ],
    "forms": [
     "Sơ đồ tư duy.",
     "Định dạng văn bản.",
     "Bảng.",
     "Tìm kiếm và thay thế."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Tin học có 35 tiết/năm nên kiểm tra định kì thường làm 45 phút, có thể kết hợp phần thực hành trên máy; đề này là phần lí thuyết theo đúng tỉ lệ điểm (3 – 2 – 2 – 3) và mức độ (Biết 4 – Hiểu 3 – Vận dụng 3) của Phụ lục Công văn 7991.",
    "topics": [
     {
      "id": "t1",
      "chapter": "cd5",
      "content": "Sơ đồ tư duy",
      "yccd": {
       "B": "Nhận biết thành phần sơ đồ tư duy.",
       "H": "Nêu ưu điểm sơ đồ tư duy.",
       "V": "Lập sơ đồ tư duy cho một chủ đề."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "cd5",
      "content": "Định dạng văn bản; trình bày bảng; tìm kiếm và thay thế",
      "yccd": {
       "B": "Nhận biết lệnh định dạng, phím tắt.",
       "H": "Phân biệt định dạng kí tự, đoạn, trang.",
       "V": "Tính toán bảng, xử lí văn bản thực tế."
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Sơ đồ tư duy có chủ đề chính đặt ở:",
      "options": [
       "Góc trên bên trái",
       "Cuối trang",
       "Trung tâm",
       "Bên ngoài sơ đồ"
      ],
      "answer": 2,
      "explain": "Từ chủ đề chính toả ra các nhánh."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Thành phần của sơ đồ tư duy gồm:",
      "options": [
       "Chỉ có bảng và hình",
       "Chỉ có văn bản dài",
       "Chủ đề chính, chủ đề nhánh, đường nối",
       "Chỉ có số liệu"
      ],
      "answer": 2,
      "explain": "Có thể thêm màu, hình ảnh."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Định dạng <i>kí tự</i> gồm:",
      "options": [
       "Căn lề đoạn văn",
       "Phông chữ, cỡ chữ, kiểu chữ, màu chữ",
       "Hướng trang",
       "Lề trang"
      ],
      "answer": 1,
      "explain": "Định dạng đoạn: căn lề, khoảng cách; định dạng trang: hướng, lề."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Lệnh căn giữa đoạn văn có tổ hợp phím:",
      "options": [
       "Ctrl + E",
       "Ctrl + B",
       "Ctrl + I",
       "Ctrl + U"
      ],
      "answer": 0,
      "explain": "Ctrl + B: đậm; Ctrl + I: nghiêng; Ctrl + U: gạch chân."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Hướng trang giấy gồm:",
      "options": [
       "Hướng trái và phải",
       "Hướng lên và xuống",
       "Hướng đứng và hướng nằm ngang",
       "Chỉ có hướng đứng"
      ],
      "answer": 2,
      "explain": "Portrait (đứng), Landscape (ngang)."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Tổ hợp phím mở hộp thoại <i>Tìm và thay thế</i> trong Word là:",
      "options": [
       "Ctrl + C",
       "Ctrl + V",
       "Ctrl + Z",
       "Ctrl + H"
      ],
      "answer": 3,
      "explain": "Ctrl + F: tìm kiếm; Ctrl + H: tìm và thay thế."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Để chèn bảng vào văn bản, em dùng lệnh:",
      "options": [
       "Home → Font",
       "Insert → Table",
       "File → Save",
       "View → Zoom"
      ],
      "answer": 1,
      "explain": "Chọn số hàng, số cột."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Ô của bảng là giao của:",
      "options": [
       "Hai hàng",
       "Một hàng và một cột",
       "Hai cột",
       "Hai bảng"
      ],
      "answer": 1,
      "explain": "Cấu trúc bảng."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Ưu điểm của sơ đồ tư duy so với ghi chép thông thường là:",
      "options": [
       "Ngắn gọn, trực quan, dễ thấy mối liên hệ giữa các ý",
       "Dài và chi tiết hơn",
       "Không cần suy nghĩ",
       "Chỉ vẽ được trên máy tính"
      ],
      "answer": 0,
      "explain": "Có thể vẽ tay hoặc dùng phần mềm."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Muốn sửa tất cả chữ “hs” thành “học sinh” trong văn bản dài, cách nhanh nhất là:",
      "options": [
       "Dùng Replace All trong hộp thoại Tìm và thay thế",
       "Gõ lại từng chữ",
       "Xoá văn bản và gõ lại",
       "Dùng lệnh căn lề"
      ],
      "answer": 0,
      "explain": "Thay thế toàn bộ một lần."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Bảng có 5 hàng và 4 cột có bao nhiêu ô?",
      "options": [
       "9 ô",
       "25 ô",
       "16 ô",
       "20 ô"
      ],
      "answer": 3,
      "explain": "5 · 4 = 20 ô.",
      "pick": "function(v,s){return Math.abs(parseFloat(s.replace(/(\\d) (?=\\d{3})/g,\"$1\").replace(\",\",\".\"))-(5*4))<1e-9}"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Định dạng nào sau đây là định dạng <i>đoạn văn</i>?",
      "options": [
       "Chữ in đậm",
       "Phông chữ Times New Roman",
       "Chữ màu đỏ",
       "Thụt lề dòng đầu tiên"
      ],
      "answer": 3,
      "explain": "Thụt lề, căn lề, khoảng cách dòng là định dạng đoạn."
     }
    ],
    "tf": [
     {
      "topic": "t2",
      "q": "Bạn Minh soạn bài giới thiệu lớp và muốn trình bày danh sách tổ bằng bảng 4 tổ, mỗi tổ ghi họ tên tổ trưởng và sĩ số.",
      "items": [
       {
        "s": "Minh có thể dùng lệnh Insert → Table.",
        "answer": true,
        "level": "B",
        "explain": "Lệnh chèn bảng."
       },
       {
        "s": "Bảng chỉ có thể có tối đa 2 cột.",
        "answer": false,
        "level": "B",
        "explain": "Có thể chèn nhiều hàng, cột."
       },
       {
        "s": "Bảng gồm 1 hàng tiêu đề và 4 hàng dữ liệu, 3 cột (Tổ, Tổ trưởng, Sĩ số) thì có 15 ô.",
        "answer": true,
        "level": "H",
        "explain": "5 · 3 = 15 ô.",
        "check": "5*3===15"
       },
       {
        "s": "Sĩ số các tổ là 9, 10, 9, 8 thì tổng sĩ số lớp là 36.",
        "answer": true,
        "level": "V",
        "explain": "9 + 10 + 9 + 8 = 36.",
        "check": "9+10+9+8===36"
       }
      ]
     },
     {
      "topic": "t1",
      "q": "Lan vẽ sơ đồ tư duy chủ đề “Bảo vệ môi trường”.",
      "items": [
       {
        "s": "“Bảo vệ môi trường” là chủ đề chính.",
        "answer": true,
        "level": "B",
        "explain": "Đặt ở trung tâm."
       },
       {
        "s": "Các nhánh như “Rác thải”, “Nước”, “Không khí” là chủ đề nhánh.",
        "answer": true,
        "level": "B",
        "explain": "Ý lớn toả ra từ chủ đề chính."
       },
       {
        "s": "Sơ đồ tư duy bắt buộc phải vẽ bằng phần mềm máy tính.",
        "answer": false,
        "level": "H",
        "explain": "Có thể vẽ tay trên giấy."
       },
       {
        "s": "Lan nên dùng từ khoá ngắn gọn, màu sắc và hình ảnh để sơ đồ dễ nhớ.",
        "answer": true,
        "level": "V",
        "explain": "Nguyên tắc trình bày sơ đồ tư duy."
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Hộp thoại Tìm và thay thế có mấy thẻ chính (Find, Replace, Go To)?",
      "answer": "3",
      "explain": "Ba thẻ: Find, Replace, Go To.",
      "calc": "3",
      "unit": "thẻ"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Bảng có 6 hàng và 5 cột. Bảng có bao nhiêu ô?",
      "answer": "30",
      "explain": "6 · 5 = 30 ô.",
      "calc": "6*5",
      "unit": "ô"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Văn bản có 12 chữ “hs”. Dùng Replace All thay “hs” (2 kí tự) bằng “học sinh” (8 kí tự, tính cả dấu cách). Văn bản dài thêm bao nhiêu kí tự?",
      "answer": "72",
      "explain": "Mỗi lần thay thêm 8 − 2 = 6 kí tự; 12 · 6 = 72.",
      "calc": "12*(8-2)",
      "unit": "kí tự"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Một bảng có 4 cột, cần thêm 2 cột nữa và có 7 hàng. Sau khi thêm, bảng có bao nhiêu ô?",
      "answer": "42",
      "explain": "(4 + 2) · 7 = 42 ô.",
      "calc": "(4+2)*7",
      "unit": "ô"
     }
    ],
    "essay": [
     {
      "topic": "t2",
      "q": "Định dạng văn bản.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Kể tên các thao tác định dạng kí tự.",
        "answer": "Chọn phông chữ, cỡ chữ, kiểu chữ (đậm, nghiêng, gạch chân), màu chữ.",
        "rubric": [
         [
          "Phông, cỡ chữ",
          0.25
         ],
         [
          "Kiểu chữ, màu chữ",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 1.0,
        "q": "Nêu các bước thay thế một từ bằng từ khác trong văn bản bằng lệnh Replace.",
        "answer": "Nhấn Ctrl + H (Home → Replace); gõ từ cần tìm vào ô Find what; gõ từ thay thế vào ô Replace with; nháy Replace (từng từ) hoặc Replace All (tất cả).",
        "rubric": [
         [
          "Mở hộp thoại",
          0.25
         ],
         [
          "Nhập Find what",
          0.25
         ],
         [
          "Nhập Replace with",
          0.25
         ],
         [
          "Replace / Replace All",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t1",
      "q": "Sơ đồ tư duy.",
      "parts": [
       {
        "level": "V",
        "points": 1.0,
        "q": "Hãy mô tả một sơ đồ tư duy cho chủ đề “Kế hoạch ôn tập học kì” (chủ đề chính và ít nhất 3 nhánh, mỗi nhánh có ý nhỏ).",
        "answer": "Chủ đề chính: Kế hoạch ôn tập. Nhánh: Môn học (Toán, Văn…), Thời gian (sáng, tối), Tài liệu (SGK, đề cương), Mục tiêu (điểm mong muốn).",
        "rubric": [
         [
          "Chủ đề chính đúng",
          0.25
         ],
         [
          "Ít nhất 3 nhánh hợp lí",
          0.25
         ],
         [
          "Có ý nhỏ cho nhánh",
          0.25
         ],
         [
          "Trình bày rõ ràng",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Vì sao sơ đồ tư duy giúp em ôn tập hiệu quả hơn?",
        "answer": "Ngắn gọn, thấy mối liên hệ giữa các kiến thức; màu sắc, hình ảnh giúp ghi nhớ lâu.",
        "rubric": [
         [
          "Thấy được mối liên hệ",
          0.25
         ],
         [
          "Dễ ghi nhớ",
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
   "scope": "Bài 10 – Bài 17, trọng tâm Chủ đề 6. Thuật toán, các cấu trúc điều khiển, chương trình máy tính.",
   "review": {
    "sections": [
     {
      "chapter": "cd5",
      "title": "Ôn nhanh Chủ đề 5",
      "points": [
       "Sơ đồ tư duy; định dạng kí tự, đoạn, trang.",
       "Bảng; tìm kiếm và thay thế."
      ]
     },
     {
      "chapter": "cd6",
      "title": "Chủ đề 6. Thuật toán và chương trình",
      "points": [
       "Thuật toán: dãy chỉ dẫn rõ ràng, có trình tự; đầu vào, đầu ra; mô tả bằng ngôn ngữ tự nhiên hoặc sơ đồ khối.",
       "Cấu trúc tuần tự, rẽ nhánh (nếu … thì … ngược lại …), lặp (số lần biết trước hoặc theo điều kiện).",
       "Chương trình máy tính: thuật toán viết bằng ngôn ngữ lập trình (Scratch)."
      ],
      "example": "Vẽ đa giác đều n cạnh: lặp n lần, xoay 360 : n độ."
     }
    ],
    "mistakes": [
     "Nhầm hình thoi (điều kiện) với hình chữ nhật (xử lí).",
     "Đếm sai số lần lặp.",
     "Tính góc xoay đa giác đều sai."
    ],
    "forms": [
     "Đầu vào – đầu ra thuật toán.",
     "Nhận biết cấu trúc điều khiển.",
     "Tính kết quả vòng lặp.",
     "Viết chương trình Scratch vẽ hình."
    ]
   },
   "exam": {
    "minutes": 45,
    "note": "Đề tham khảo 45 phút. Tin học có 35 tiết/năm nên kiểm tra định kì thường làm 45 phút, có thể kết hợp phần thực hành trên máy; đề này là phần lí thuyết theo đúng tỉ lệ điểm (3 – 2 – 2 – 3) và mức độ (Biết 4 – Hiểu 3 – Vận dụng 3) của Phụ lục Công văn 7991.",
    "topics": [
     {
      "id": "t1",
      "chapter": "cd6",
      "content": "Thuật toán; mô tả thuật toán",
      "yccd": {
       "B": "Nhận biết thuật toán, đầu vào, đầu ra.",
       "H": "Mô tả thuật toán bằng ngôn ngữ tự nhiên, sơ đồ khối.",
       "V": "Xác định kết quả thuật toán."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t2",
      "chapter": "cd6",
      "content": "Các cấu trúc điều khiển; chương trình máy tính (Scratch)",
      "yccd": {
       "B": "Nhận biết cấu trúc tuần tự, rẽ nhánh, lặp.",
       "H": "Xác định cấu trúc trong tình huống.",
       "V": "Tính kết quả chương trình có lặp, rẽ nhánh."
      },
      "nl": "TD, GQVĐ"
     },
     {
      "id": "t3",
      "chapter": "cd5",
      "content": "Ôn tập: soạn thảo văn bản",
      "yccd": {
       "B": "Nhận biết lệnh định dạng.",
       "H": "",
       "V": ""
      },
      "nl": "TD, GQVĐ"
     }
    ],
    "mcq": [
     {
      "level": "B",
      "topic": "t1",
      "q": "Thuật toán là:",
      "options": [
       "Một thiết bị phần cứng",
       "Một trang web",
       "Một tệp hình ảnh",
       "Dãy các chỉ dẫn rõ ràng, có trình tự để giải quyết một nhiệm vụ"
      ],
      "answer": 3,
      "explain": "Định nghĩa thuật toán."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Trong thuật toán pha nước chanh, “nước, chanh, đường” là:",
      "options": [
       "Đầu ra",
       "Đầu vào",
       "Cấu trúc lặp",
       "Chương trình"
      ],
      "answer": 1,
      "explain": "Đầu ra là cốc nước chanh."
     },
     {
      "level": "B",
      "topic": "t1",
      "q": "Có thể mô tả thuật toán bằng:",
      "options": [
       "Chỉ bằng hình ảnh",
       "Chỉ bằng âm thanh",
       "Chỉ bằng bảng tính",
       "Ngôn ngữ tự nhiên hoặc sơ đồ khối"
      ],
      "answer": 3,
      "explain": "Hai cách mô tả trong SGK."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Ba cấu trúc điều khiển cơ bản là:",
      "options": [
       "Đầu vào, đầu ra, xử lí",
       "Tuần tự, rẽ nhánh, lặp",
       "Bàn phím, chuột, màn hình",
       "Mở, lưu, đóng"
      ],
      "answer": 1,
      "explain": "Các cấu trúc điều khiển."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Câu “Nếu trời mưa thì em mang áo mưa” thể hiện cấu trúc:",
      "options": [
       "Tuần tự",
       "Lặp",
       "Không có cấu trúc",
       "Rẽ nhánh"
      ],
      "answer": 3,
      "explain": "“Nếu … thì …” là rẽ nhánh."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Trong Scratch, khối “lặp lại 10” thuộc cấu trúc:",
      "options": [
       "Lặp với số lần biết trước",
       "Rẽ nhánh",
       "Tuần tự",
       "Đầu vào"
      ],
      "answer": 0,
      "explain": "Lặp đủ 10 lần."
     },
     {
      "level": "B",
      "topic": "t2",
      "q": "Chương trình máy tính là:",
      "options": [
       "Một bức tranh",
       "Một văn bản thường",
       "Thuật toán được viết bằng ngôn ngữ lập trình để máy tính thực hiện",
       "Thiết bị phần cứng"
      ],
      "answer": 2,
      "explain": "Định nghĩa chương trình."
     },
     {
      "level": "B",
      "topic": "t3",
      "q": "Tổ hợp phím in đậm chữ trong Word là:",
      "options": [
       "Ctrl + E",
       "Ctrl + B",
       "Ctrl + H",
       "Ctrl + P"
      ],
      "answer": 1,
      "explain": "B = Bold."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Thuật toán: B1 nhập a, b; B2 nếu a > b thì in a, ngược lại in b. Với a = 7, b = 9, kết quả in ra là:",
      "options": [
       "9",
       "7",
       "16",
       "2"
      ],
      "answer": 0,
      "explain": "7 > 9 sai nên in b = 9.",
      "calc": "Math.max(7,9)"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Hoạt động “đánh răng mỗi sáng: lấy bàn chải → lấy kem → chải răng → súc miệng” có cấu trúc chủ yếu là:",
      "options": [
       "Tuần tự",
       "Rẽ nhánh",
       "Lặp với điều kiện",
       "Không thể mô tả"
      ],
      "answer": 0,
      "explain": "Các bước thực hiện lần lượt."
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Nhân vật Scratch thực hiện “lặp lại 4 lần: di chuyển 100 bước, xoay 90 độ”. Nhân vật vẽ nên hình:",
      "options": [
       "Hình tam giác",
       "Hình tròn",
       "Hình vuông",
       "Đoạn thẳng"
      ],
      "answer": 2,
      "explain": "4 cạnh bằng nhau, 4 góc vuông."
     },
     {
      "level": "H",
      "topic": "t1",
      "q": "Trong sơ đồ khối, hình thoi dùng để biểu diễn:",
      "options": [
       "Bắt đầu, kết thúc",
       "Một bước xử lí",
       "Điều kiện cần kiểm tra",
       "Hướng đi"
      ],
      "answer": 2,
      "explain": "Hình elip: bắt đầu/kết thúc; hình chữ nhật: xử lí; mũi tên: hướng."
     }
    ],
    "tf": [
     {
      "topic": "t2",
      "q": "Chương trình Scratch: biến S = 0; lặp lại 5 lần: S = S + 2; nói S.",
      "items": [
       {
        "s": "Chương trình có sử dụng cấu trúc lặp.",
        "answer": true,
        "level": "B",
        "explain": "Khối “lặp lại 5”."
       },
       {
        "s": "Số lần lặp là 5.",
        "answer": true,
        "level": "B",
        "explain": "Lặp lại 5 lần.",
        "check": "5===5"
       },
       {
        "s": "Sau mỗi lần lặp S tăng thêm 2.",
        "answer": true,
        "level": "H",
        "explain": "S = S + 2.",
        "check": "2===2"
       },
       {
        "s": "Kết quả nhân vật nói là 12.",
        "answer": false,
        "level": "V",
        "explain": "S = 5 · 2 = 10.",
        "check": "5*2===12"
       }
      ]
     },
     {
      "topic": "t1",
      "q": "Thuật toán tính tiền: nhập số quyển vở n và giá 8 000 đồng/quyển; nếu n ≥ 10 thì giảm 10% tổng tiền; in số tiền.",
      "items": [
       {
        "s": "Đầu vào của thuật toán là số quyển vở n.",
        "answer": true,
        "level": "B",
        "explain": "Giá đã biết."
       },
       {
        "s": "Thuật toán có cấu trúc rẽ nhánh.",
        "answer": true,
        "level": "B",
        "explain": "Câu “nếu … thì”."
       },
       {
        "s": "Mua 5 quyển phải trả 40 000 đồng.",
        "answer": true,
        "level": "H",
        "explain": "5 < 10, không giảm: 5 · 8 000.",
        "check": "5*8000===40000"
       },
       {
        "s": "Mua 10 quyển phải trả 80 000 đồng.",
        "answer": false,
        "level": "V",
        "explain": "n = 10 được giảm 10%: 80 000 · 0,9 = 72 000 đồng.",
        "check": "10*8000*0.9===80000"
       }
      ]
     }
    ],
    "short": [
     {
      "level": "B",
      "topic": "t2",
      "q": "Có bao nhiêu cấu trúc điều khiển cơ bản (tuần tự, rẽ nhánh, lặp)?",
      "answer": "3",
      "explain": "Ba cấu trúc.",
      "calc": "3",
      "unit": "cấu trúc"
     },
     {
      "level": "H",
      "topic": "t2",
      "q": "Để vẽ tam giác đều, nhân vật lặp “di chuyển 100 bước, xoay x độ” 3 lần. Góc xoay x bằng bao nhiêu độ?",
      "answer": "120",
      "explain": "Tổng góc quay 360°: 360 : 3 = 120°.",
      "calc": "360/3",
      "unit": "°"
     },
     {
      "level": "V",
      "topic": "t1",
      "q": "Thuật toán: S = 0; với i lần lượt từ 1 đến 5: S = S + i. Giá trị S cuối cùng?",
      "answer": "15",
      "explain": "1 + 2 + 3 + 4 + 5 = 15.",
      "calc": "1+2+3+4+5"
     },
     {
      "level": "V",
      "topic": "t2",
      "q": "Chương trình: n = 20; lặp khi n > 5: n = n − 4. Kết thúc, n bằng bao nhiêu?",
      "answer": "4",
      "explain": "20 → 16 → 12 → 8 → 4 (4 > 5 sai, dừng).",
      "calc": "(function(){var n=20;while(n>5)n-=4;return n})()"
     }
    ],
    "essay": [
     {
      "topic": "t1",
      "q": "Thuật toán.",
      "parts": [
       {
        "level": "B",
        "points": 0.5,
        "q": "Thuật toán là gì? Nêu đầu vào, đầu ra của thuật toán “luộc trứng”.",
        "answer": "Thuật toán là dãy chỉ dẫn rõ ràng, có trình tự để giải quyết nhiệm vụ. Đầu vào: trứng, nước, nồi, bếp; đầu ra: trứng chín.",
        "rubric": [
         [
          "Khái niệm",
          0.25
         ],
         [
          "Đầu vào, đầu ra đúng",
          0.25
         ]
        ]
       },
       {
        "level": "H",
        "points": 1.0,
        "q": "Mô tả bằng ngôn ngữ tự nhiên thuật toán kiểm tra một số nguyên n là chẵn hay lẻ.",
        "answer": "B1: Nhập n. B2: Chia n cho 2 lấy số dư. B3: Nếu dư bằng 0 thì thông báo “n chẵn”, ngược lại thông báo “n lẻ”. B4: Kết thúc.",
        "rubric": [
         [
          "Nhập n",
          0.25
         ],
         [
          "Tính số dư khi chia 2",
          0.25
         ],
         [
          "Rẽ nhánh đúng",
          0.25
         ],
         [
          "Thông báo, kết thúc",
          0.25
         ]
        ]
       }
      ]
     },
     {
      "topic": "t2",
      "q": "Chương trình Scratch.",
      "parts": [
       {
        "level": "V",
        "points": 1.0,
        "q": "Viết (mô tả các khối) chương trình Scratch để nhân vật vẽ hình vuông cạnh 80 bước. Chỉ rõ cấu trúc điều khiển đã dùng.",
        "answer": "Khi bấm lá cờ xanh → hạ bút → lặp lại 4 lần: di chuyển 80 bước, xoay phải 90 độ. Dùng cấu trúc tuần tự và lặp.",
        "rubric": [
         [
          "Có sự kiện bắt đầu, hạ bút",
          0.25
         ],
         [
          "Lặp 4 lần",
          0.25
         ],
         [
          "Di chuyển 80, xoay 90°",
          0.25
         ],
         [
          "Chỉ ra cấu trúc lặp, tuần tự",
          0.25
         ]
        ]
       },
       {
        "level": "V",
        "points": 0.5,
        "q": "Sửa chương trình trên để vẽ hình lục giác đều. Cần thay đổi những gì?",
        "answer": "Lặp lại 6 lần và xoay 360 : 6 = 60 độ.",
        "rubric": [
         [
          "Lặp 6 lần",
          0.25
         ],
         [
          "Xoay 60°",
          0.25
         ]
        ],
        "calc": "360/6"
       }
      ]
     }
    ]
   }
  }
 ]
});
