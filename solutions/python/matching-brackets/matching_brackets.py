def is_paired(input_string): 
    opn = "({["
    cls = ")}]" 
    cleaned_opn = ""
    paired = True
    for c in input_string:
        print(c)
        if c in cls:
            print("checking")
            if len(cleaned_opn) > 0 and cleaned_opn[-1] == opn[cls.find(c)]:
                print("closing")
                cleaned_opn = cleaned_opn[:-1]
            else:
                paired = False
                print("not paired")
                break
        if c in opn:
            print("adding")
            cleaned_opn += c
    if len(cleaned_opn) != 0:
        paired = False
    return paired

print(is_paired("[["))
