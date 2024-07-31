def checkUper(text):
    result=False
    for i in range(len(text)):
        if text[i]==text[i].upper() and text[i]!=' ':
            result=True
    return result
text='Food morning'
if checkUper(text):
    print('yes')
else:
    print('no')