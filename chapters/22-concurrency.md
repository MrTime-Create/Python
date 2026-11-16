# บทที่ 22: Concurrency (Threading และ Async)

## threading
```python
import threading, time

def worker(name):
    for i in range(3):
        print(f"{name}: {i}")
        time.sleep(0.5)

t1 = threading.Thread(target=worker, args=("A",))
t2 = threading.Thread(target=worker, args=("B",))
t1.start(); t2.start()
t1.join(); t2.join()
print("เสร็จ")
```

## GIL (Global Interpreter Lock)
Python มี GIL ทำให้ CPU-bound ไม่ได้ประโยชน์จาก threading มากนัก ใช้ multiprocessing แทน

## multiprocessing
```python
from multiprocessing import Process

def f(x):
    print(x*x)

if __name__ == "__main__":
    p = Process(target=f, args=(5,))
    p.start(); p.join()
```

## asyncio
```python
import asyncio

async def fetch(name, delay):
    await asyncio.sleep(delay)
    print(f"{name} เสร็จ")
    return name

async def main():
    results = await asyncio.gather(
        fetch("A", 1),
        fetch("B", 2),
        fetch("C", 0.5),
    )
    print(results)

asyncio.run(main())
```

## แบบฝึกหัด
1. ใช้ threading ดาวน์โหลดหลายไฟล์พร้อมกัน (จำลองด้วย sleep)
2. แปลงโค้ด sync เป็น async ด้วย asyncio
3. เปรียบเทียบเวลา threading vs sequential
"