# บทที่ 13: การสืบทอด (Inheritance) และพหุรูป (Polymorphism)

## การสืบทอด
```python
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return f"{self.name}:  Hav!"

class Cat(Animal):
    def speak(self):
        return f"{self.name}:  Meow!"

for a in [Dog("บัดดี้"), Cat("เหมียว")]:
    print(a.speak())
```

## super()
```python
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed
```

## isinstance / issubclass
```python
print(isinstance(Dog("x"), Animal))   # True
print(issubclass(Dog, Animal))       # True
```

## Multiple inheritance
```python
class A:
    def a(self): return "A"
class B:
    def b(self): return "B"
class C(A, B):
    pass

c = C()
print(c.a(), c.b())
```

## MRO (Method Resolution Order)
```python
print(C.__mro__)
```

## Abstract base class
```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2
```

## แบบฝึกหัด
1. สร้างคลาส Vehicle -> Car, Bicycle
2. ใช้ super() ใน constructor
3. สร้าง abstract class PaymentMethod
"