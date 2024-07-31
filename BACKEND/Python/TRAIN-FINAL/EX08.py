# def replacenumber(text):
#     result=''
#     for i in range(len(text)):
#         if text[i]=='a':
#             result+='$'
#         else:
#             result+=text[i]
#     return result
# arry=(["ronan","rady",])
# for i in range(len(arry)):
#     arry[i]=replacenumber(arry[i])
# print(arry)



def changeleterto(text):
    result=''
    for i in range(len(text)):
        if text[i]=='a':
            result+='$'
        else:
            result+=text[i]
    return result
array=['jak','jay']
for i in range(len(array)):
    array[i]=changeleterto(array[i])
print(array)

