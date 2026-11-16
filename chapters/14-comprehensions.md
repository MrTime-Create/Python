# บทที่ 14: Comprehensions

## List comprehension
```python
squares = [x*x for x in range(10)]
print(squares)

evens = [x for x in range(20) if x % 2 == 0]
print(evens)
```

## Dict comprehension
```python
sq = {x: x*x for x in range(5)}
print(sq)
# {0:0, 1:1, ...}

# สลับ key/value
d = {"a":1, "b":2}
rev = {v: k for k, v in d.items()}
print(rev)
```

## Set comprehension
```python
s = {x % 3 for x in range(10)}
print(s)
```

## Generator expression
```python
gen = (x*x for x in range(10))
print(sum(gen))
```

## Nested comprehension
```python
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)
```

## แบบฝึกหัด
1. สร้าง list ของตัวเลขคู่ 0..20 ด้วย comprehension
2. สร้าง dict แม่สูตรคูณ (key=ตัวคูณ, value=ผลลัพธ์) สำหรับแม่ 5
3. กรองคำที่ยาวกว่า 3 ตัวอักษรจาก list
"