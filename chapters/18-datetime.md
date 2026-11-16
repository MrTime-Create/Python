# บทที่ 18: วันที่และเวลา (datetime)

## date, time, datetime
```python
from datetime import date, time, datetime

today = date.today()
print(today)  # 2025-06-15

now = datetime.now()
print(now)

d = date(2025, 1, 1)
print(d.year, d.month, d.day)
```

## timedelta
```python
from datetime import timedelta
tomorrow = date.today() + timedelta(days=1)
print(tomorrow)

diff = date(2025,12,31) - date.today()
print(diff.days)
```

## strftime (format)
```python
now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))
print(now.strftime("%d/%m/%Y"))
```

## strptime (parse)
```python
s = "15/06/2025"
d = datetime.strptime(s, "%d/%m/%Y")
print(d.date())
```

## timezone
```python
from datetime import timezone
utc = datetime.now(timezone.utc)
print(utc)
```

## แบบฝึกหัด
1. คำนวณอายุจากวันเกิด
2. พิมพ์วันที่ปัจจุบันในรูปแบบ "วันจันทร์ 15 มิถุนายน 2025"
3. นับจำนวนวันจนถึงวันปีใหม่
"