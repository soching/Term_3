array2D=[[5,3,8,4],[3,8,6,1],[1,4,7,3]]
result =[]
for i in range(len(array2D)):
    for j in range(len(array2D[i])):
        if array2D[i][j]==7:
            result.append(i)
            result.append(j)
print(result)