# def replaceNumber(array):
#     for i in range(len(array)):
#         if array[i]<0:
#             array[i]=168
#     return array
# array2D=[[-1,2,3],[-4,5,6]]
# for i in range(len(array2D)):
#     array2D[i]=replaceNumber(array2D[i])
# print(array2D)




def changeNumber(array):
    for i in range(len(array)):
        if array[i]<0:
            array[i]=168
    return array
array2D=[[1,2,-4],[1,2,-6,-5]]
for i in range(len(array2D)):
    array2D[i]=changeNumber(array2D[i])
print(array2D)





        

