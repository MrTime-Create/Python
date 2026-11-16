# บทที่ 5: ลูป (Loops)

## for loop
```python
for i in range(5):
    print(i)  # 0 1 2 3 4

for name in ["Anna", "Bob", "Cara"]:
    print("สวัสดี", name)
```

### range()
```python
print(list(range(5)))        # [0,1,2,3,4]
print(list(range(2, 8)))     # [2..7]
print(list(range(0, 10, 2))) # [0,2,4,6,8]
```

## while loop
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

## break และ continue
```python
for i in range(10):
    if i == 5:
        break
    if i % 2 == 0:
        continue
    print(i)  # 1 3
```

## else ในลูป
```python
for i in range(5):
    print(i)
else:
    print("ลูปจบปกติ")
```

## ลูปซ้อน (nested loops)
```python
for i in range(3):
    for j in range(3):
        print(i, j)
```

## แบบฝึกหัด
1. พิมพ์ตารางสูตรคูณแม่ 2
2. หาผลรวม 1..100
3.  Fibonacci 10 ตัวแรก
4. ตรวจสอบจำนวนเฉพาะ (prime)
"