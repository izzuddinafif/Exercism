def is_armstrong_number(number):
    digits = []
    num = number
    while(number != 0):
        digit = number % 10
        number //= 10
        digits.append(digit)
    print(digits)
    for i in range(len(digits)):
        digits[i] = digits[i] ** len(digits)
    
    total = sum(digits)
    print(total, digits)
    return num == total  

print(is_armstrong_number(9))
print(is_armstrong_number(153))
print(is_armstrong_number(154))