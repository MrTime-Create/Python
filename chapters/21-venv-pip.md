# บทที่ 21: Virtual Environment และ pip

## ทำไมต้องใช้ venv?
แยก dependencies ของแต่ละโปรเจกต์ ไม่ให้ปนกัน

## สร้าง venv
```bash
python -m venv .venv
```

## เปิดใช้งาน
```bash
# Windows
.venv\Scripts\activate
# macOS/Linux
source .venv/bin/activate
```
เมื่อเปิดใช้งาน prompt จะมี (.venv)

## ปิดใช้งาน
```bash
deactivate
```

## pip
```bash
pip install requests
pip install requests==2.31.0
pip uninstall requests
pip list
pip show requests
```

## requirements.txt
```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```

## .gitignore
อย่า commit .venv/ ขึ้น git

## แบบฝึกหัด
1. สร้าง venv สำหรับโปรเจกต์ใหม่
2. ติดตั้งแพ็กเกจและสร้าง requirements.txt
3. ลอง pip install -r requirements.txt ใน venv ใหม่
"