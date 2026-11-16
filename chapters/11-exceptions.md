# บทที่ 11: การจัดการข้อผิดพลาด (Exceptions)

## try ... except
```python
try:
    x = int("abc")
except ValueError:
    print("ไม่ใช่ตัวเลข")
```

## หลาย except
```python
try:
    a = 10 / 0
except ZeroDivisionError:
    print("หารด้วยศูนย์")
except ValueError:
    print("ค่าไม่ถูกต้อง")
```

## else และ finally
```python
try:
    x = int("5")
except ValueError:
    print("error")
else:
    print("สำเร็จ:", x)
finally:
    print("จบเสมอ")
```

## ดึงข้อความ error
```python
try:
    1/0
except Exception as e:
    print(type(e).__name__, e)
```

## raise
```python
def set_age(age):
    if age < 0:
        raise ValueError("อายุต้อง >= 0")
    return age

try:
    set_age(-5)
except ValueError as e:
    print(e)
```

## Custom exception
```python
class MyError(Exception):
    pass

raise MyError("เกิดข้อผิดพลาด")
```

## แบบฝึกหัด
1. จัดการการอ่านไฟล์ที่ไม่มีอยู่ (FileNotFoundError)
2. สร้างฟังก์ชันที่ raise เมื่อ input ไม่ถูกต้อง
3. ใช้ finally ปิด resource
"