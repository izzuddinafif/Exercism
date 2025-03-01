def square_root(number):
    x = (number + 1) / 2
    for i in range(5*3):
        y = x
        x = 0.5 * (x + (number/x))
        if y == x:
            break
    return x

print(square_root(4))