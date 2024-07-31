def text(array):
    result=[]
    for i in range(len(array)):
            if array[i]==array[i]:
                result.append(array[i].upper())
    return result
array2D=['banana', 'cococnut', 'mango']
for i in range(len(array2D)):
     array2D[i]=text(array2D[i])
print(array2D)
            
