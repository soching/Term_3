# def countLetterA(text):
#     count=0
#     for i in range(len(text)):
#         if text[i]=='a':
#             count+=1
#     return count
# print(countLetterA('ababaa'))
# def totalLetterA(arry):
#     total=0
#     for i in range(len(arry)):
#         total+=countLetterA(arry[i])
#     return total
# print(totalLetterA(['a','s','a']))
# array2D = [['apple', 'banana', 'cherry'], ['dog', 'elephant', 'fox'], ['grape', 'kiwi', 'lemon']]
# for i in range(len(array2D)):
#     array2D[i]=totalLetterA(array2D[i])
# print(array2D)





# def findCountLatterA(array):
#     count=0
#     for i in range(len(array)):
#         if array[i]=='a' or array[i]=='A':
#             count=1
#     return count
# def findLetterA(array):
#     total=0
#     for i in range(len(array)):
#         total+=findCountLatterA(array[i])
#     return total
# array2D=['hello','haaa','hany']
# for i in range(len(array2D)):
#     array2D[i]=findLetterA(array2D[i])
# print(array2D)



def countLetterA(array):
    count=0
    for i in range(len(array)):
        if array[i]=='a':
            count+=1
    return count
def findLetterA(array):
    total=0
    for i in range(len(array)):
        total+=countLetterA(array[i])
    return total
array2D=[['haa','jaa'],['ka','ya']]
for i in range(len(array2D)):
    array2D[i]=findLetterA(array2D[i])
print(array2D)