# def countLetterA(array):
#     count=0
#     for i in range(len(array)):
#         if array[i]=='A' or array[i]=='a':
#             count+=1
#     return count
# array=['banana','hello','cha']
# for i in range(len(array)):
#     print('this is A '+array[i]+'is:'+str(countLetterA(array[i])))



def findLetterA(array):
    count=0
    for i in range(len(array)):
        if array[i]=='a':
            count+=1
    return count
array=['hana','haa','has']
for i in range(len(array)):
   print('this is A '+array[i]+'is:'+str(findLetterA(array[i])))