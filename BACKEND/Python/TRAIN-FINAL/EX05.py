# def sum(number1,number2):
#     return number1+number2
# sumofNumber=int(input("Number of value:"))
# total=0
# for i in range(sumofNumber):
#     value=int(input("value"+str(i+1)+":"))
#     total=sum(value,total)
# print("The sum is :"+str(total))


def sumNumber(number1,number2):
    return number1+number2
enter=int(input('follow valuse of index'))
total=0
for i in range(enter):
    value=int(input('this is :'+str(i+1)+':'))
    total=sumNumber(value,total)
print('this is the sum number'+str(total))
