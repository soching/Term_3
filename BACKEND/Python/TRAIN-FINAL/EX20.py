def rectangle(number):
    result=""
    for i in range(number):
        for j in range(number):
            result+="X"
        result+="\n"
    return result
print(rectangle(6))
