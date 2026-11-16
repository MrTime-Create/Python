# บทที่ 8: สตริง (Strings)

## การสร้างสตริง
```python
s1 = "Hello"
s2 = 'World'
s3 = """หลาย
บรรทัด"""
s4 = 'It\'s ok'
```

## f-string (formatted string)
```python
name = "Anna"
age = 25
print(f"ชื่อ {name}, อายุ {age}")
print(f"π = {3.14159:.2f}")
print(f"{1000:,}")  # 1,000
```

## เมธอดที่ใช้บ่อย
```python
s = "  Hello, World!  "
print(s.strip())          # "Hello, World!"
print(s.lower())          # "  hello, world!  "
print(s.upper())
print(s.replace("World", "Python"))
print(s.split(","))       # ['  Hello', ' World!  ']
print(",".join(["a","b","c"]))  # "a,b,c"
print(s.startswith("  He"))
print(s.find("World"))    # 9
print(s.count("l"))       # 3
```

## Indexing & Slicing
```python
s = "Python"
print(s[0])     # P
print(s[-1])    # n
print(s[1:4])   # yth
print(s[::-1])  # nohtyP
```

## การตรวจสอบ
```python
print("abc".isalpha())   # True
print("123".isdigit())   # True
print("a1".isalnum())    # True
```

## Escape sequences
```python
print("line1\nline2")
print("col1\tcol2")
print("path\\to\\file")
```

## แบบฝึกหัด
1. กลับสตริง "Python" -> "nohtyP"
2. นับจำนวนคำในประโยค
3. แปลง "hello world" เป็น "Hello World" (title case)
4. ตรวจสอบว่าสตริงเป็น palindrome
"