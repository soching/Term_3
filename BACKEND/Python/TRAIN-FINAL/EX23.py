# def checkUpper(text):
#     for i in range(len(text)):
#         if text[i]==text[i].upper() and text[i] !=" ":
#             return True
#     return False
# array='Gloo  hello'
# print(checkUpper(array))

def findbigLetter(string):
    result=False
    for i in range(len(string)):
        if string[i]==string[i].upper() and string[i]!=' ':
            result=True
    return result
text='ello haa'
print(findbigLetter(text))
