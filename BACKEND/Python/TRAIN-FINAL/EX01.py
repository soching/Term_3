# text=0
# index=0
# while text !=68 and index<3:
#     number=int(input())
#     text =number
#     if text !=68 and index==2:
#         print("YOU LOST")
#     elif text !=68:
#         print("ENTER NUMBER AGAIN")
#     else:
#         print(" YON WON")
#     index+=1


number=0
index=0
while number!=68 and index<3:
    enter=int(input())
    number=enter
    if number!=68 and index==2:
        print('YOU LOST')
    elif number!=68:
        print('PLEASE AGAIN')
    else:
        print('YOU WIN')
    index+=1



