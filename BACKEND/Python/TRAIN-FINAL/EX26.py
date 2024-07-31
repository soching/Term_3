def findCountA(text):
    count=0
    for i in range(len(text)):
        if text[i]=='a':
            count+=1
    return count
resut=0
array=["Him","Mengheang","Sokhom"]
for i in range(len(array)):
    resut=findCountA(array[i])
    print('this is count letter A of '+array[i] +' : '+ str(resut))

