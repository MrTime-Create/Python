# บทที่ 20: การทดสอบ (Testing)

## unittest
```python
import unittest

def add(a, b):
    return a + b

class TestAdd(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
    def test_add_neg(self):
        self.assertEqual(add(-1, 1), 0)

if __name__ == "__main__":
    unittest.main()
```

## pytest
ติดตั้ง: `pip install pytest`
สร้างไฟล์ `test_math.py`:
```python
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5

def test_add_zero():
    assert add(0, 0) == 0
```
รัน: `pytest -v`

## Fixtures
```python
import pytest

@pytest.fixture
def sample_list():
    return [1, 2, 3]

def test_len(sample_list):
    assert len(sample_list) == 3
```

## Parametrize
```python
import pytest

@pytest.mark.parametrize("a,b,expected", [(1,2,3),(0,0,0),(-1,1,0)])
def test_add(a, b, expected):
    assert a + b == expected
```

## แบบฝึกหัด
1. เขียน test สำหรับฟังก์ชัน is_prime
2. ใช้ pytest parametrize ทดสอบหลายกรณี
3. ทดสอบ exception ด้วย pytest.raises
"