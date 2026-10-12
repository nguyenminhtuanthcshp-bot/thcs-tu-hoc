/* THCS Tự Học – lõi đăng kí dữ liệu. Nạp TRƯỚC mọi tệp trong thư mục data/. */
(function () {
  'use strict';
  function slugFromTitle(title, fallback) {
    var m = /^Bài\s+(\d+)/i.exec(title);
    return m ? 'bai-' + m[1] : fallback;
  }
  var THCS = {
    version: '1.1.0',
    grades: [6, 7, 8, 9],
    subjectOrder: ['toan', 'ngu-van', 'khtn', 'tin-hoc', 'gdcd', 'lsdl'],
    subjects: {
      'toan': { name: 'Toán', icon: '📐', color: '#2563eb', light: '#dbeafe', desc: 'Số và đại số, hình học và đo lường, thống kê và xác suất' },
      'ngu-van': { name: 'Ngữ văn', icon: '📖', color: '#db2777', light: '#fce7f3', desc: 'Đọc hiểu theo thể loại, thực hành tiếng Việt, viết, nói và nghe' },
      'khtn': { name: 'Khoa học tự nhiên', icon: '🔬', color: '#059669', light: '#d1fae5', desc: 'Chất và sự biến đổi, vật sống, năng lượng, Trái Đất và bầu trời' },
      'tin-hoc': { name: 'Tin học', icon: '💻', color: '#0e7490', light: '#cffafe', desc: 'Máy tính và cộng đồng, mạng và Internet, ứng dụng tin học, thuật toán và lập trình' },
      'gdcd': { name: 'Giáo dục công dân', icon: '🤝', color: '#c2410c', light: '#ffedd5', desc: 'Giáo dục đạo đức, kĩ năng sống, kinh tế và pháp luật' },
      'lsdl': { name: 'Lịch sử và Địa lí', icon: '🌏', color: '#7c3aed', light: '#ede9fe', desc: 'Hai phân môn: Lịch sử và Địa lí (kèm các chủ đề chung)' }
    },
    courses: {},   // khoá: "<môn>-<lớp>", ví dụ "toan-6"
    lessons: {},   // khoá: "<môn>-<lớp>/<mã bài>", ví dụ "toan-6/bai-1"
    errors: [],
    registerSubject: function (key, meta) {
      this.subjects[key] = meta;
      if (this.subjectOrder.indexOf(key) < 0) this.subjectOrder.push(key);
    },
    registerCourse: function (c) {
      if (!c || !c.subject || !c.grade || !Array.isArray(c.chapters)) {
        this.errors.push('Khung chương trình không hợp lệ'); return;
      }
      var key = c.subject + '-' + c.grade;
      c.key = key;
      c.chapters.forEach(function (ch, ci) {
        if (!ch.id) ch.id = 'chuong-' + (ci + 1);
        ch.lessons = (ch.lessons || []).map(function (l, li) {
          if (typeof l === 'string') l = { title: l };
          if (!l.id) l.id = slugFromTitle(l.title, ch.id + '-' + (li + 1));
          return l;
        });
      });
      this.courses[key] = c;
    },
    registerLesson: function (key, content) {
      if (!key || !content) { this.errors.push('Bài học không hợp lệ: ' + key); return; }
      this.lessons[key] = content;
    }
  };
  window.THCS = THCS;
})();
