# บทที่ 9: โมดูลและแพ็กเกจ

## import
```python
import math
print(math.sqrt(16))     # 4.0
print(math.pi)
```

### from ... import
```python
from math import sqrt, pi
print(sqrt(25), pi)
```

### alias
```python
import numpy as np  # ถ้าติดตั้งแล้ว
```

## โมดูลมาตรฐานที่ใช้บ่อย
```python
import random
print(random.randint(1, 6))
print(random.choice(["a","b","c"]))
random.shuffle([1,2,3])

import datetime
now = datetime.datetime.now()
print(now)

import os
print(os.getcwd())
print(os.listdir("."))
```

## สร้างโมดูลเอง
สร้างไฟล์ `mymath.py`:
```python
def add(a, b):
    return a + b

PI = 3.14
```
ใช้งาน:
```python
import mymath
print(mymath.add(2,3))
print(mymath.PI)
```

## __name__ == "__main__"
```python
def main():
    print("run as script")

if __name__ == "__main__":
    main()
```

## pip และแพ็กเกจภายนอก
```bash
pip install requests
pip list
pip freeze > requirements.txt
```

## แบบฝึกหัด
1. ใช้ random สุ่มเลข 1..100 แล้วให้ผู้ใช้ทาย
2. ใช้ datetime พิมพ์วันที่ปัจจุบันในรูปแบบไทย
3. สร้างโมดูล utils.py ที่มีฟังก์ชันช่วยเหลือ
"