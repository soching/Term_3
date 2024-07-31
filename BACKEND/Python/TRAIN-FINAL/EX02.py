def mulitply(number1,number2):
    return number1*number2
def productFromTo(start,end):
    total=1
    while start<end+1:
        total=mulitply(start,total)
        start+=1
    return total
startNumber=int(input("start number: "))
endNumber=int(input("end unmber"))
total=productFromTo(startNumber,endNumber)
print("This result is: ",str(total))