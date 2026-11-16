# บทที่ 16: Decorators และ Generators

## Decorator
Decorator คือฟังก์ชันที่รับฟังก์ชันแล้วคืนฟังก์ชันใหม่

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("ก่อนเรียก")
        result = func(*args, **kwargs)
        print("หลังเรียก")
        return result
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

### Decorator ที่รับพารามิเตอร์
```python
def repeat(n):
    def decorator(func):
        def wrapper(*a, **k):
            for _ in range(n):
                func(*a, **k)
        return wrapper
    return decorator

@repeat(3)
def hi():
    print("hi")
hi()
```

### functools.wraps
```python
from functools import wraps

def dec(func):
    @wraps(func)
    def wrapper(*a, **k):
        return func(*a, **k)
    return wrapper
```

## Generator
ฟังก์ชันที่ใช้ `yield` คืนค่าทีละตัว

```python
def count_up(n):
    i = 0
    while i < n:
        yield i
        i += 1

for x in count_up(5):
    print(x)
```

### Generator expression
```python
gen = (x*x for x in range(5))
print(list(gen))
```

### send / next
```python
def echo():
    while True:
        val = yield
        print("got", val)

g = echo()
next(g)  # prime
g.send(42)
```

## แบบฝึกหัด
1. สร้าง decorator ที่จับเวลาการทำงาน
2. สร้าง generator ที่ให้ Fibonacci ไม่รู้จบ
3. สร้าง decorator ที่ cache ผลลัพธ์ (memoize)
"