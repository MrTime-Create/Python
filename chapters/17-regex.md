# บทที่ 17: Regular Expressions (regex)

## re module
```python
import re

text = "ติดต่อ 081-234-5678 หรือ 089-999-0000"
pattern = r"\d{3}-\d{3}-\d{4}"
matches = re.findall(pattern, text)
print(matches)  # ['081-234-5678', '089-999-0000']
```

## search, match, findall, finditer
```python
m = re.search(r"Python", "I love Python")
print(m.group() if m else None)

m = re.match(r"Hello", "Hello World")  # ต้นสตริงเท่านั้น
print(m)

for m in re.finditer(r"\d+", "a1 b22 c333"):
    print(m.group(), m.start())
```

## sub (แทนที่)
```python
text = "ราคา 100 บาท ลด 20%"
print(re.sub(r"\d+", "X", text))  # ราคา X บาท ลด X%
```

## compile
```python
pat = re.compile(r"\w+@\w+\.\w+")
emails = pat.findall("mail a@b.com and c@d.org")
print(emails)
```

## groups
```python
m = re.search(r"(\d{4})-(\d{2})-(\d{2})", "2025-06-15")
print(m.group(1), m.group(2), m.group(3))
print(m.groups())
```

## flags
```python
print(re.findall(r"python", "Python python", re.IGNORECASE))
print(re.findall(r"^line", "line1\nline2", re.MULTILINE))
```

## แบบฝึกหัด
1. ตรวจสอบรูปแบบอีเมล
2. ดึง URL ทั้งหมดจากข้อความ
3. แทนที่ช่องว่างหลายตัวเป็นช่องว่างเดียว
"