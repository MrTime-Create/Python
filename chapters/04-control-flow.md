# บทที่ 4: โครงสร้างควบคุม (if / elif / else)

## if statement
```python
age = 18
if age >= 18:
    print("บรรลุนิติภาวะแล้ว")
```

## if ... else
```python
score = 75
if score >= 60:
    print("ผ่าน")
else:
    print("ไม่ผ่าน")
```

## if ... elif ... else
```python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print("เกรด:", grade)
```

## เงื่อนไขซ้อน (nested)
```python
x = 10
if x > 0:
    if x % 2 == 0:
        print("บวกและเป็นเลขคู่")
    else:
        print("บวกและเป็นเลขคี่")
else:
    print("ไม่เป็นบวก")
```

## ตัวดำเนินการสามทาง (Ternary)
```python
age = 20
status = "ผู้ใหญ่" if age >= 18 else "เด็ก"
print(status)
```

## match ... case (Python 3.10+)
```python
command = "start"
match command:
    case "start":
        print("เริ่มต้น")
    case "stop":
        print("หยุด")
    case _:
        print("ไม่รู้จักคำสั่ง")
```

## แบบฝึกหัด
1. รับคะแนน แล้วพิมพ์เกรด (A-F)
2. ตรวจสอบว่าจำนวนเป็นบวก/ลบ/ศูนย์
3. ตรวจสอบปีอธิกสุรทิน (leap year)
"