def display3Grid(positionOfCapitaine):
    GridSize=5
    grid=[]
    result=''
    for i in range(GridSize):
        row=[]
        for j in range(GridSize):
            row.append('0')
        grid.append(row)
    for i in range(len(positionOfCapitaine)):
        row=positionOfCapitaine[i][1]
        colum=positionOfCapitaine[i][0]
        grid[row][colum]='*'
    for i in range(len(grid)):
        for j in range(len(grid[i])):
            result+=grid[i][j]+' '
        if i !=len(grid)-1:
            result+='\n'
    return result
print(display3Grid([[1,2],[0,3]]))








