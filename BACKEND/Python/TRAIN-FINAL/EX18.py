def findPostitionOfcapitaine(array2D):
    result=[]
    for i in range(len(array2D)):
        for j in range(len(array2D[i])):
            if array2D[i][j]=='*':
                result.append(i)
                result.append(j)
    return result
def moveCapitaineToNextRight(array2D,positionOfCapitaine):
    if len(positionOfCapitaine)==0 or positionOfCapitaine[1]==len(array2D)-1:
        return array2D
    row=positionOfCapitaine[0]
    colum=positionOfCapitaine[1]
    array2D[row][colum]=array2D[row][colum+1]
    array2D[row][colum+1]='*'
    return array2D
def moveCapitaineToNextleft(array2D,positionOfCapitaine):
    if len(positionOfCapitaine)==0 or positionOfCapitaine[1]==0:
        return array2D
    row=positionOfCapitaine[0]
    colum=positionOfCapitaine[1]
    array2D[row][colum]=array2D[row][colum-1]
    array2D[row][colum-1]='*'
    return array2D
def moveCapitaineToNextUp(array2D,positionOfCapitaine):
    if len(positionOfCapitaine)==0 or positionOfCapitaine[0]==0:
        return array2D
    row=positionOfCapitaine[0]
    colum=positionOfCapitaine[1]
    array2D[row][colum]= array2D[row-1][colum]
    array2D[row-1][colum]='*'
    return array2D
def moveCapitaineToNextdown(array2D,positionOfCapitaine):
    if len(positionOfCapitaine)==0 or positionOfCapitaine[0]==len(array2D)-1:
        return array2D
    row=positionOfCapitaine[0]
    colum=positionOfCapitaine[1]
    array2D[row][colum]= array2D[row+1][colum]
    array2D[row+1][colum]='*'
    return array2D
def moveCapitaineToNextupRight(array2D,positionOfCapitaine):
    if len(positionOfCapitaine)==0 or positionOfCapitaine[1]==len(array2D)-1:
        return array2D
    row=positionOfCapitaine[0]
    colum=positionOfCapitaine[1]
    array2D[row][colum]= array2D[row-1][colum+1]
    array2D[row-1][colum+1]='*'
    return array2D
def moveCapitaineToNextupleft(array2D,positionOfCapitaine):
    if len(positionOfCapitaine)==0 or positionOfCapitaine[1]==len(array2D)-1:
        return array2D
    row=positionOfCapitaine[0]
    colum=positionOfCapitaine[1]
    array2D[row][colum]=array2D[row-1][colum-1]
    array2D[row-1][colum-1]='*'
    return array2D
array2D = [
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '*', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
]
while True:
    PostitionOfcapitaine=findPostitionOfcapitaine(array2D)
    direction=input('Please:')
    if direction=='R' :
        array2D=moveCapitaineToNextRight(array2D,PostitionOfcapitaine)
    elif direction=='L' :
        array2D=moveCapitaineToNextleft(array2D,PostitionOfcapitaine)
    elif direction=='U' :
        array2D=moveCapitaineToNextUp(array2D,PostitionOfcapitaine)
    elif direction=='D' :
        array2D=moveCapitaineToNextdown(array2D,PostitionOfcapitaine)
    elif direction=='UR':
        array2D=moveCapitaineToNextupRight(array2D,PostitionOfcapitaine)
    elif direction=='UL':
        array2D=moveCapitaineToNextupleft(array2D,PostitionOfcapitaine)
    output=''
    for i in range(len(array2D)):
        for j in range(len(array2D[i])):
            output+=array2D[i][j]+' '
        if i !=len(array2D)-1:
            output+='\n'
    print(output)