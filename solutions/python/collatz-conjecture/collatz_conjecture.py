def steps(number):
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    
    i = number
    n = 0
    while (i > 1):
        # print(i)
        n += 1
        if i % 2 == 0:
            i //= 2
        elif i % 2 != 0:
            i = i* 3 + 1 
    
    # print(i)
    return n

print(steps(23333))
    
    
