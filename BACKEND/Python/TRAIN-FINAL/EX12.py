# def findMaxNumber(array):
#     maxNumber=array[0]
#     for i in range(len(array)):
#         if array[i]>maxNumber:
#             maxNumber=array[i]
#     return maxNumber
# def replaceNumber(array):
#     for i in range(len(array)):
#         if array[i]<5:
#             array[i]=findMaxNumber(array)
#     return array
# array2D = [[1,3,5,6,7], [4,3,6,7,8], [3,2,100]]
# for i in range(len(array2D)):
#     array2D[i]=replaceNumber(array2D[i])
# print(array2D)


def findMaxNumber(array):
    maxNumber=array[0]
    for i in range(len(array)):
        if array[i]>maxNumber:
            maxNumber=array[i]
    return maxNumber
print(findMaxNumber([1,2,3]))
def findNumbersmallerthanfive(array):
    for i in range(len(array)):
        if array[i]<5:
            array[i]=findMaxNumber(array[i])
    return array
array2D=[[1,2,6],[4,5,2],[1,2,9]]
for i in range(len(array2D)):
    array2D[i]=findNumbersmallerthanfive(array2D[i])
print(array2D)
