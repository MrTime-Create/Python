# บทที่ 6: ฟังก์ชัน (Functions)

## นิยามฟังก์ชัน
```python
def greet(name):
    return f"สวัสดี {name}"

print(greet("สมชาย"))
```

## พารามิเตอร์
```python
def add(a, b):
    return a + b

print(add(3, 5))  # 8
```

### ค่าเริ่มต้น (default)
```python
def greet(name="เพื่อน"):
    return f"สวัสดี {name}"

print(greet())         # สวัสดี เพื่อน
print(greet("Anna"))   # สวัสดี Anna
```

### keyword arguments
```python
def info(name, age):
    print(name, age)

info(age=25, name="Bob")
```

### *args และ **kwargs
```python
def total(*nums):
    return sum(nums)

print(total(1,2,3,4))  # 10

def show(**kw):
    for k, v in kw.items():
        print(k, v)

show(name="Anna", age=25)
```

## return หลายค่า
```python
def min_max(nums):
    return min(nums), max(nums)

lo, hi = min_max([3,1,4,1,5])
print(lo, hi)
```

## Scope (ขอบเขตตัวแปร)
```python
x = 10  # global
def f():
    x = 5  # local
    print("local", x)
f()
print("global", x)
```

### global / nonlocal
```python
counter = 0
def inc():
    global counter
    counter += 1
inc()
print(counter)  # 1
```

## Docstring
```python
def add(a, b):
    """คืนค่าผลบวกของ a และ b"""
    return a + b

print(add.__doc__)
```

## Lambda
```python
square = lambda x: x * x
print(square(5))  # 25
```

## แบบฝึกหัด
1. ฟังก์ชัน factorial(n)
2. ฟังก์ชัน is_prime(n)
3. ฟังก์ชัน reverse_string(s)
"