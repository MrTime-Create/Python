# บทที่ 15: Lambda และการเขียนโปรแกรมเชิงฟังก์ชัน

## Lambda
```python
add = lambda a, b: a + b
print(add(2, 3))  # 5

# ใช้กับ sorted
students = [("Anna", 85), ("Bob", 92), ("Cara", 78)]
print(sorted(students, key=lambda s: s[1], reverse=True))
```

## map
```python
nums = [1, 2, 3, 4]
doubled = list(map(lambda x: x*2, nums))
print(doubled)  # [2,4,6,8]
```

## filter
```python
nums = [1,2,3,4,5,6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)  # [2,4,6]
```

## reduce
```python
from functools import reduce
nums = [1,2,3,4]
prod = reduce(lambda a, b: a*b, nums)
print(prod)  # 24
```

## zip
```python
names = ["Anna","Bob"]
scores = [85, 92]
for n, s in zip(names, scores):
    print(n, s)
```

## enumerate
```python
for i, v in enumerate(["a","b","c"], start=1):
    print(i, v)
```

## any / all
```python
print(any([False, True, False]))  # True
print(all([True, True, True]))   # True
```

## แบบฝึกหัด
1. ใช้ map แปลง list สตริงเป็นตัวพิมพ์ใหญ่
2. ใช้ filter กรองเลขคี่
3. ใช้ reduce หาผลรวม
"