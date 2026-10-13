#!/usr/bin/env python3
"""Tiện ích (KHÔNG bắt buộc): tự cập nhật danh sách thẻ <script> dữ liệu trong index.html.
Cách dùng:  python3 tools/cap-nhat-index.py
Công cụ quét data/courses/*.js và data/lessons/*.js rồi ghi lại đoạn giữa hai dấu mốc
<!-- DATA:BEGIN --> và <!-- DATA:END --> trong index.html. Thầy cô cũng có thể tự thêm thẻ <script> bằng tay."""
import os, re, glob
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SUBJ = {'toan': 0, 'ngu-van': 1, 'khtn': 2, 'tin-hoc': 3, 'gdcd': 4, 'lsdl': 5}
def key(path):
    name = os.path.basename(path)[:-3]
    m = re.match(r'([a-z-]+?)-(\d)(?:-(.*))?$', name)
    if not m: return (9, 9, name, 0)
    rest = m.group(3) or ''
    n = re.search(r'(\d+)', rest)
    return (int(m.group(2)), SUBJ.get(m.group(1), 5), m.group(1), int(n.group(1)) if n else 0, rest)
courses = sorted(glob.glob(os.path.join(ROOT, 'data/courses/*.js')), key=key)
lessons = sorted(glob.glob(os.path.join(ROOT, 'data/lessons/*.js')), key=key)
lines = ['  <!-- Khung chương trình (mỗi môn – lớp một tệp) -->']
lines += ['  <script src="%s"></script>' % os.path.relpath(p, ROOT).replace(os.sep, '/') for p in courses]
lines += ['  <!-- Nội dung bài học (mỗi bài một tệp) -->']
lines += ['  <script src="%s"></script>' % os.path.relpath(p, ROOT).replace(os.sep, '/') for p in lessons]
exams = sorted(glob.glob(os.path.join(ROOT, 'data/exams/*.js')), key=key)
if exams:
    lines += ['  <!-- Ôn tập và đề kiểm tra định kì (mỗi môn – lớp một tệp) -->']
    lines += ['  <script src="%s"></script>' % os.path.relpath(p, ROOT).replace(os.sep, '/') for p in exams]
idx = os.path.join(ROOT, 'index.html')
html = open(idx, encoding='utf-8').read()
new = re.sub(r'<!-- DATA:BEGIN -->.*?<!-- DATA:END -->', lambda m: '<!-- DATA:BEGIN -->\n' + '\n'.join(lines) + '\n  <!-- DATA:END -->', html, flags=re.S)
open(idx, 'w', encoding='utf-8').write(new)
print('Đã cập nhật index.html: %d khung chương trình, %d bài học, %d gói đề.' % (len(courses), len(lessons), len(exams)))
