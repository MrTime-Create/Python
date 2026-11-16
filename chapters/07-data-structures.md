# บทที่ 7: โครงสร้างข้อมูล (List, Tuple, Set, Dict)

## List (รายการ)
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])        # apple
print(fruits[-1])       # cherry
fruits.append("mango")
fruits.insert(1, "kiwi")
fruits.remove("banana")
print(fruits)
print(len(fruits))
```

### Slicing
```python
nums = [0,1,2,3,4,5]
print(nums[1:4])   # [1,2,3]
print(nums[:3])    # [0,1,2]
print(nums[3:])    # [3,4,5]
print(nums[::-1])  # กลับลำดับ
```

### List methods
```python
nums = [3,1,4,1,5]
nums.sort()
print(nums)        # [1,1,3,4,5]
print(nums.count(1))  # 2
nums.reverse()
```

## Tuple (ทูเพิล) - แก้ไขไม่ได้
```python
point = (3, 4)
x, y = point  # unpacking
print(x, y)
```

## Set (เซต) - ไม่ซ้ำ ไม่มีลำดับ
```python
s = {1, 2, 3, 2}
print(s)  # {1,2,3}
s.add(4)
s.discard(10)  # ไม่ error ถ้าไม่มี
print(2 in s)
a = {1,2,3}; b = {2,3,4}
print(a | b)  # union {1,2,3,4}
print(a & b)  # intersection {2,3}
print(a - b)  # difference {1}
```

## Dict (พจนานุกรม) - key:value
```python
person = {"name": "Anna", "age": 25}
print(person["name"])
person["city"] = "Bangkok"
print(person.get("salary", 0))  # 0 default
for k, v in person.items():
    print(k, v)
print(list(person.keys()))
print(list(person.values()))
```

## แบบฝึกหัด
1. สร้าง list ของเลข 1..10 แล้วกรองเฉพาะเลขคู่
2. นับความถี่ของตัวอักษรในสตริง (ใช้ dict)
3. หา intersection ของสอง set
4. เรียง list ของ dict ตาม key
"