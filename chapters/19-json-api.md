# บทที่ 19: JSON และ API

## json module
```python
import json

data = {"name": "Anna", "age": 25, "skills": ["python", "sql"]}
text = json.dumps(data, ensure_ascii=False, indent=2)
print(text)

parsed = json.loads(text)
print(parsed["name"])
```

## อ่าน/เขียนไฟล์ JSON
```python
import json
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

with open("data.json", encoding="utf-8") as f:
    data = json.load(f)
print(data)
```

## requests (HTTP)
```python
import requests
resp = requests.get("https://api.github.com/users/octocat")
print(resp.status_code)
data = resp.json()
print(data["login"], data["public_repos"])
```

## POST
```python
payload = {"title": "foo", "body": "bar"}
resp = requests.post("https://jsonplaceholder.typicode.com/posts", json=payload)
print(resp.status_code, resp.json())
```

## แบบฝึกหัด
1. อ่านไฟล์ JSON แล้วพิมพ์ค่าที่ต้องการ
2. เรียก API สาธารณะแล้วแสดงข้อมูล
3. แปลง CSV เป็น JSON
"