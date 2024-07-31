# def removeMinus(text):
#     result=''
#     for i in range(len(text)):
#         if text[i]!='-':
#             result+=text[i]
#     return result
# nextStep='Y'
# while nextStep == "Y":
#     enterword=input("Enter a word :")
#     print(removeMinus(enterword))
#     nextStep =input("Do you want to continue (Y/N)")


def delet(text):
    result=''
    for i in range(len(text)):
        if text[i] !='-':
            result+=text[i]
    return result
nextstep='yes'
while nextstep=='yes':
    enter=input('please enter world :')
    print(delet(enter))
    nextstep=input('do you want to continues! yes/no')
