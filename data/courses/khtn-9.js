/* Khung chương trình Khoa học tự nhiên 9 – theo thứ tự bài học SGK "Kết nối tri thức với cuộc sống". */
THCS.registerCourse({
  subject: 'khtn', grade: 9, book: 'Kết nối tri thức với cuộc sống',
  chapters: [
    { id: 'mo-dau', title: 'Mở đầu', lessons: ['Bài 1. Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học'] },
    { id: 'c1', title: 'Chương I. Năng lượng cơ học', lessons: ['Bài 2. Động năng. Thế năng', 'Bài 3. Cơ năng', 'Bài 4. Công và công suất'] },
    { id: 'c2', title: 'Chương II. Ánh sáng', lessons: ['Bài 5. Khúc xạ ánh sáng', 'Bài 6. Phản xạ toàn phần', 'Bài 7. Lăng kính', 'Bài 8. Thấu kính', 'Bài 9. Thực hành đo tiêu cự của thấu kính hội tụ', 'Bài 10. Kính lúp. Bài tập thấu kính'] },
    { id: 'c3', title: 'Chương III. Điện', lessons: ['Bài 11. Điện trở. Định luật Ohm', 'Bài 12. Đoạn mạch nối tiếp, song song', 'Bài 13. Năng lượng của dòng điện và công suất điện'] },
    { id: 'c4', title: 'Chương IV. Điện từ', lessons: ['Bài 14. Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều', 'Bài 15. Tác dụng của dòng điện xoay chiều'] },
    { id: 'c5', title: 'Chương V. Năng lượng với cuộc sống', lessons: ['Bài 16. Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch', 'Bài 17. Một số dạng năng lượng tái tạo'] },
    { id: 'c6', title: 'Chương VI. Kim loại. Sự khác nhau cơ bản giữa phi kim và kim loại', lessons: ['Bài 18. Tính chất chung của kim loại', 'Bài 19. Dãy hoạt động hoá học', 'Bài 20. Tách kim loại và việc sử dụng hợp kim', 'Bài 21. Sự khác nhau cơ bản giữa phi kim và kim loại'] },
    { id: 'c7', title: 'Chương VII. Giới thiệu về chất hữu cơ. Hydrocarbon và nguồn nhiên liệu', lessons: ['Bài 22. Giới thiệu về hợp chất hữu cơ', 'Bài 23. Alkane', 'Bài 24. Alkene', 'Bài 25. Nguồn nhiên liệu'] },
    { id: 'c8', title: 'Chương VIII. Ethylic alcohol và acetic acid', lessons: ['Bài 26. Ethylic alcohol', 'Bài 27. Acetic acid'] },
    { id: 'c9', title: 'Chương IX. Lipid. Carbohydrate. Protein. Polymer', lessons: ['Bài 28. Lipid', 'Bài 29. Carbohydrate. Glucose và saccharose', 'Bài 30. Tinh bột và cellulose', 'Bài 31. Protein', 'Bài 32. Polymer'] },
    { id: 'c10', title: 'Chương X. Khai thác tài nguyên từ vỏ Trái Đất', lessons: ['Bài 33. Sơ lược về hoá học vỏ Trái Đất và khai thác tài nguyên từ vỏ Trái Đất', 'Bài 34. Khai thác đá vôi. Công nghiệp silicate', 'Bài 35. Khai thác nhiên liệu hoá thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu'] },
    { id: 'c11', title: 'Chương XI. Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền', lessons: ['Bài 36. Khái quát về di truyền học', 'Bài 37. Các quy luật di truyền của Mendel', 'Bài 38. Nucleic acid và gene', 'Bài 39. Tái bản DNA và phiên mã tạo RNA', 'Bài 40. Dịch mã và mối quan hệ từ gene đến tính trạng', 'Bài 41. Đột biến gene'] },
    { id: 'c12', title: 'Chương XII. Di truyền nhiễm sắc thể', lessons: ['Bài 42. Nhiễm sắc thể và bộ nhiễm sắc thể', 'Bài 43. Nguyên phân và giảm phân', 'Bài 44. Nhiễm sắc thể giới tính và cơ chế xác định giới tính', 'Bài 45. Di truyền liên kết', 'Bài 46. Đột biến nhiễm sắc thể'] },
    { id: 'c13', title: 'Chương XIII. Di truyền học với con người và đời sống', lessons: ['Bài 47. Di truyền học với con người', 'Bài 48. Ứng dụng công nghệ di truyền vào đời sống'] },
    { id: 'c14', title: 'Chương XIV. Tiến hoá', lessons: ['Bài 49. Khái niệm tiến hoá và các hình thức chọn lọc', 'Bài 50. Cơ chế tiến hoá', 'Bài 51. Sự phát sinh và phát triển sự sống trên Trái Đất'] }
  ],
  diagnostic: {
    questions: [
      { lesson: 'bai-1', type: 'tf', q: 'Khẳng định sau đúng hay sai: Khi cần ngửi mùi một hoá chất, ta đưa mũi sát miệng lọ và hít mạnh.', answer: false, explain: 'Không ngửi trực tiếp; dùng tay phẩy nhẹ hơi hoá chất về phía mũi để ngửi.' },
      { lesson: 'bai-2', type: 'short', q: 'Một quả bóng có khối lượng 2 kg đang bay với tốc độ 3 m/s. Động năng của quả bóng là bao nhiêu jun?', unit: 'J', answer: '9', calc: '0.5*2*3*3', explain: 'W<sub>đ</sub> = {{1|2}}mv<sup>2</sup> = {{1|2}} · 2 · 3<sup>2</sup> = 9 (J).' },
      { lesson: 'bai-8', type: 'mcq', q: 'Thấu kính hội tụ có đặc điểm:', options: ['phần rìa dày hơn phần giữa', 'phần rìa mỏng hơn phần giữa', 'hai mặt đều phẳng', 'làm chùm tia song song phân kì'], answer: 1, explain: 'Thấu kính hội tụ có phần rìa mỏng hơn phần giữa; chùm tia tới song song với trục chính cho chùm tia ló hội tụ tại tiêu điểm.' },
      { lesson: 'bai-11', type: 'short', q: 'Đặt hiệu điện thế 12 V vào hai đầu một điện trở 4 Ω. Cường độ dòng điện chạy qua điện trở là bao nhiêu ampe?', unit: 'A', answer: '3', calc: '12/4', explain: 'Định luật Ohm: I = U : R = 12 : 4 = 3 (A).' },
      { lesson: 'bai-14', type: 'tf', q: 'Khẳng định sau đúng hay sai: Trong cuộn dây dẫn kín xuất hiện dòng điện cảm ứng khi số đường sức từ xuyên qua tiết diện của cuộn dây biến thiên.', answer: true, explain: 'Đó là điều kiện xuất hiện dòng điện cảm ứng (hiện tượng cảm ứng điện từ).' },
      { lesson: 'bai-17', type: 'mcq', q: 'Nguồn năng lượng nào dưới đây là năng lượng tái tạo?', options: ['Than đá', 'Dầu mỏ', 'Năng lượng Mặt Trời', 'Khí tự nhiên'], answer: 2, explain: 'Năng lượng Mặt Trời được bổ sung liên tục nên là năng lượng tái tạo; than đá, dầu mỏ, khí tự nhiên là nhiên liệu hoá thạch.' },
      { lesson: 'bai-19', type: 'mcq', q: 'Kim loại nào dưới đây KHÔNG phản ứng với dung dịch HCl loãng?', options: ['Fe', 'Zn', 'Mg', 'Cu'], answer: 3, explain: 'Cu đứng sau H trong dãy hoạt động hoá học nên không đẩy được hydrogen ra khỏi dung dịch acid HCl loãng.' },
      { lesson: 'bai-23', type: 'mcq', q: 'Công thức phân tử của methane là:', options: ['CH<sub>4</sub>', 'C<sub>2</sub>H<sub>4</sub>', 'C<sub>2</sub>H<sub>6</sub>', 'CO<sub>2</sub>'], answer: 0, explain: 'Methane là alkane đơn giản nhất, công thức CH<sub>4</sub>. C<sub>2</sub>H<sub>4</sub> là ethylene (một alkene).' },
      { lesson: 'bai-26', type: 'mcq', q: 'Công thức cấu tạo thu gọn của ethylic alcohol là:', options: ['CH<sub>3</sub>COOH', 'C<sub>2</sub>H<sub>5</sub>OH', 'CH<sub>4</sub>', 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>'], answer: 1, explain: 'Ethylic alcohol: C<sub>2</sub>H<sub>5</sub>OH (hay CH<sub>3</sub>CH<sub>2</sub>OH). CH<sub>3</sub>COOH là acetic acid.' },
      { lesson: 'bai-29', type: 'short', q: 'Tính khối lượng mol của glucose C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (g/mol), biết C = 12, H = 1, O = 16.', unit: 'g/mol', answer: '180', calc: '6*12+12*1+6*16', explain: 'M = 6 · 12 + 12 · 1 + 6 · 16 = 180 (g/mol).' },
      { lesson: 'bai-34', type: 'tf', q: 'Khẳng định sau đúng hay sai: Thành phần chính của đá vôi là calcium carbonate (CaCO<sub>3</sub>).', answer: true, explain: 'Đá vôi chứa chủ yếu CaCO<sub>3</sub>; nung đá vôi thu được vôi sống CaO.' },
      { lesson: 'bai-37', type: 'mcq', q: 'Ở đậu Hà Lan, gene A quy định hạt vàng trội hoàn toàn so với gene a quy định hạt xanh. Cho P: AA × aa, kiểu hình ở F<sub>1</sub> là:', options: ['100% hạt vàng', '100% hạt xanh', '3 vàng : 1 xanh', '1 vàng : 1 xanh'], answer: 0, explain: 'P: AA × aa cho F<sub>1</sub> 100% Aa; A trội hoàn toàn nên F<sub>1</sub> đều hạt vàng.' },
      { lesson: 'bai-42', type: 'short', q: 'Bộ nhiễm sắc thể lưỡng bội (2n) ở tế bào sinh dưỡng của người gồm bao nhiêu nhiễm sắc thể?', unit: 'NST', answer: '46', calc: '2*23', explain: 'Người có 2n = 46 (23 cặp nhiễm sắc thể), trong đó có 1 cặp nhiễm sắc thể giới tính.' },
      { lesson: 'bai-47', type: 'tf', q: 'Khẳng định sau đúng hay sai: Người mắc hội chứng Down có 3 nhiễm sắc thể số 21 trong tế bào.', answer: true, explain: 'Hội chứng Down là thể ba nhiễm ở cặp NST số 21 (2n + 1 = 47).' },
      { lesson: 'bai-49', type: 'mcq', q: 'Động lực của chọn lọc tự nhiên là:', options: ['nhu cầu, thị hiếu của con người', 'đấu tranh sinh tồn của sinh vật', 'kĩ thuật lai giống', 'thuốc trừ sâu'], answer: 1, explain: 'Chọn lọc tự nhiên diễn ra qua đấu tranh sinh tồn; nhu cầu con người là động lực của chọn lọc nhân tạo.' }
    ]
  }
});
