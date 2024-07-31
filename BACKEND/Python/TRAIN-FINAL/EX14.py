def replaceAllNumber7(array):
    for i in range(len(array)):
        if array[i]==7:
            array[i]=8
    return array
array2D=[[5,3,8,4],[3,8,6,1],[1,4,7,3]]
for i in range(len(array2D)):
    array2D[i]=replaceAllNumber7(array2D[i])
print(array2D)