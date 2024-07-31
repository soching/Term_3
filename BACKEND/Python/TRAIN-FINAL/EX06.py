def getAbsolute(number):
    if number < 0:
        result= -1 * number
    else:
        result= int(number)
    return result
print(getAbsolute(-5) + 10)