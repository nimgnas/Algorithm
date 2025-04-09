def solution(a, b):
    a = str(a)
    b = str(b)
    return int(a + b) if int(a + b) >= int (b + a) else int(b + a)