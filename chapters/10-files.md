# บทที่ 10: การจัดการไฟล์ (File I/O)

## เปิดไฟล์
```python
# อ่าน
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# เขียน (ทับ)
with open("out.txt", "w", encoding="utf-8") as f:
    f.write("สวัสดี\n")

# เพิ่มท้าย (append)
with open("out.txt", "a", encoding="utf-8") as f:
    f.write("บรรทัดใหม่\n")
```

## โหมด
- `r` อ่าน
- `w` เขียน (ทับ)
- `a` เพิ่มท้าย
- `x` สร้างใหม่ (error ถ้ามีอยู่)
- `b` binary (rb, wb)

## อ่านทีละบรรทัด
```python
with open("data.txt", encoding="utf-8") as f:
    for line in f:
        print(line.strip())
```

## อ่านทั้งหมดเป็น list
```python
with open("data.txt", encoding="utf-8") as f:
    lines = f.readlines()
print(lines)
```

## CSV
```python
import csv
with open("data.csv", newline="", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# เขียน
with open("out.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "age"])
    writer.writerow(["Anna", 25])
```

## JSON ไฟล์ (ดูบท 19)

## จัดการ path
```python
from pathlib import Path
p = Path("folder/file.txt")
print(p.exists(), p.is_file())
p.parent.mkdir(parents=True, exist_ok=True)
```

## แบบฝึกหัด
1. อ่านไฟล์และนับจำนวนบรรทัด
2. คัดลอกไฟล์ (copy)
3. รวมไฟล์สองไฟล์เป็นหนึ่ง
"