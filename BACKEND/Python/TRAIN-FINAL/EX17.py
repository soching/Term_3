array=[['q,','d'],['w','e'],['e','e']]
row=int(input())
for i in range(len(array)):
    for j in range(len(array[i])):
        if i==row:
            array[i][j]='*'
        elif len(array)<2:
            array[i][j]='*'
print(array)