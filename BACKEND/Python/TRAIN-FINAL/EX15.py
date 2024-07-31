# array=[[1,2,3],[2,3,4],[1,2,3]]
# result=[]
# for i in range(len(array[0])):
#     sum=0
#     for j in range(len(array)):
#         sum+=array[j][i]
#     result.append(sum)
# print(result)




array2D=[[1,2,3],[2,3,4],[1,2,3]]
result=[]
for i in range(len(array2D[0])):
    sum=0
    for j in range(len(array2D)):
        sum+=array2D[j][i]
    result.append(sum)
    print(sum)
