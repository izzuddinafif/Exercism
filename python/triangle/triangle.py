def equilateral(sides):
    if not is_a_triangle(sides):
        return False
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if a == b == c:
        return True  
    return False
    
    

def isosceles(sides):
    if not is_a_triangle(sides):
        return False
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if a == b != c or a !=b == c or a ==c != b or a== b == c:
        return True  
    return False

def scalene(sides):
    if not is_a_triangle(sides):
        return False
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if a != b != c and a != c:
        return True
    return False

def is_a_triangle(sides):
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if a >= b+c or b >= a+c or c >= a+b:
        return False
    return True