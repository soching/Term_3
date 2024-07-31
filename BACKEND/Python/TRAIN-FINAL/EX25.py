# array=[3,4, 5, 1]
# count=[]
# for i in range(len(array)):
#     sum=[]
#     for j in range(array[i]):
#         sum.append(j+1)
#     count.append(sum)
#     print(count)


number=[3,4,5,6]
result=[]
for i in range(len(number)):
    count=[]
    for j in range(number[i]):
        count.append(j+1)
    result.append(count)
print(result)

