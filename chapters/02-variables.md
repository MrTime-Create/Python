# บทที่ 2: ตัวแปรและชนิดข้อมูล

## ตัวแปร (Variables)
ตัวแปรใช้เก็บค่า ไม่ต้องประกาศชนิดล่วงหน้า (dynamic typing)

```python
name = "สมชาย"
age = 25
height = 175.5
is_student = True
```

### กฎการตั้งชื่อ
- ขึ้นต้นด้วยตัวอักษรหรือ _
- ประกอบด้วยตัวอักษร ตัวเลข _
- ห้ามใช้คำสงวน (reserved words)
- ตัวพิมพ์เล็ก-ใหญ่มีผล

```python
# ดี
user_name = "Anna"
# ไม่ดี
# 2name = "x"  # ขึ้นต้นด้วยตัวเลขไม่ได้
```

## ชนิดข้อมูลพื้นฐาน

### int (จำนวนเต็ม)
```python
x = 42
y = -7
print(type(x))  # <class 'int'>
```

### float (จำนวนจริง)
```python
pi = 3.14159
print(type(pi))  # <class 'float'>
```

### str (ข้อความ)
```python
s = "Hello"
print(s.upper(), s.lower(), len(s))
```

### bool (บูลีน)
```python
t = True
f = False
print(t and f, t or f, not t)
```

### None
```python
x = None
print(x is None)  # True
```

## การแปลงชนิด (Type Casting)
```python
print(int("42"))      # 42
print(float("3.14"))  # 3.14
print(str(100))       # "100"
print(bool(0), bool(1))  # False True
```

## input จากผู้ใช้
```python
name = input("ชื่อของคุณ: ")
age = int(input("อายุ: "))
print(f"สวัสดี {name}, อายุ {age} ปี")
```

## แบบฝึกหัด
1. สร้างตัวแปร name, age, gpa แล้วพิมพ์ออกมา
2. รับค่าตัวเลขสองจำนวนจาก input แล้วพิมพ์ผลบวก
3. แปลงสตริง "3.14" เป็น float แล้วคูณ 2
"