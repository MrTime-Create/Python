# บทที่ 12: OOP - คลาสและอ็อบเจ็กต์

## คลาส (Class)
```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} พูดว่า  Hav!"

d = Dog("บัดดี้", 3)
print(d.bark())
print(d.name, d.age)
```

## __init__ และ self
`__init__` เป็น constructor, `self` คือ instance ปัจจุบัน

## แอตทริบิวต์ของคลาส vs instance
```python
class Counter:
    count = 0  # class attribute
    def __init__(self):
        Counter.count += 1
        self.id = Counter.count

a = Counter(); b = Counter()
print(a.id, b.id, Counter.count)
```

## เมธอด
```python
class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return self.w * self.h
    def perimeter(self):
        return 2*(self.w+self.h)

r = Rectangle(4, 5)
print(r.area(), r.perimeter())
```

## __str__ และ __repr__
```python
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __str__(self):
        return f"({self.x},{self.y})"
    def __repr__(self):
        return f"Point({self.x},{self.y})"

p = Point(3,4)
print(p)        # (3,4)
print(repr(p))  # Point(3,4)
```

## @property
```python
class Circle:
    def __init__(self, radius):
        self._r = radius
    @property
    def area(self):
        return 3.14159 * self._r ** 2

c = Circle(5)
print(c.area)  # ไม่ต้องใส่ ()
```

## แบบฝึกหัด
1. คลาส BankAccount ที่มี deposit/withdraw/balance
2. คลาส Student ที่คำนวณ GPA
3. ใช้ @property สำหรับ full_name
"