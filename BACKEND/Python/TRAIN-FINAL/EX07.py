# def reverString(text):
#     result=""
#     lastIndex=len(text)-1
#     for i in range(len(text)):
#         result += text[lastIndex - i]
#     return result
# print(reverString("Hello PNC"))
# print(reverString("Welcome 20204"))

def findopersition(text):
    result=''
    strin=len(text)-1
    for i in range(len(text)):
        result+=text[strin-i]
    return result
print(findopersition('hi'))





