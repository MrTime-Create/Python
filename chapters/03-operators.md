# บทที่ 3: ตัวดำเนินการ (Operators)

## ตัวดำเนินการทางคณิตศาสตร์
```python
a, b = 10, 3
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3 (floor division)
print(a % b)   # 1 (modulus)
print(a ** b)  # 1000 (power)
```

## ตัวดำเนินการเปรียบเทียบ
```python
print(5 == 5)   # True
print(5 != 3)   # True
print(5 > 3)    # True
print(5 < 3)    # False
print(5 >= 5)   # True
print(5 <= 4)   # False
```

## ตัวดำเนินการตรรกะ
```python
print(True and False)  # False
print(True or False)   # True
print(not True)        # False
```

## ตัวดำเนินการกำหนดค่า
```python
x = 5
x += 3   # x = 8
x -= 2   # x = 6
x *= 2   # x = 12
x //= 3  # x = 4
```

## ตัวดำเนินการ membership / identity
```python
print(3 in [1,2,3])        # True
print("a" not in "hello")  # True
a = [1,2]; b = a; c = [1,2]
print(a is b)  # True
print(a is c)  # False
```

## ลำดับความสำคัญ (Precedence)
PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction

```python
print(2 + 3 * 4)      # 14
print((2 + 3) * 4)    # 20
```

## แบบฝึกหัด
1. คำนวณพื้นที่วงกลม (πr²) โดย r = 5
2. ตรวจสอบว่า 17 เป็นเลขคี่หรือไม่ (ใช้ %)
3. ใช้ตัวดำเนินการเปรียบเทียบตรวจสอบอายุ >= 18
"