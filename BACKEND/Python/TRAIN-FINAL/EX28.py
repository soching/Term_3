
# def sumNumber(num):
#     res=0
#     count=0
#     for value in num:
#         res+=value
#         count+=1
#     res=res/count
#     return res
# def Find(array):
#     count=0
#     for value in array:
#         value['score']=sumNumber(value['score'])
#         if value['score']<50:
#             count+=1
#     return str(count) +' failed'
# num= [
#     {"name": "chamreth", "score":[90, 80, 20, 60]},
#     {"name": "Seyla", "score":[70, 80, 50, 30]},
#     {"name": "Sophorn", "score":[0, 10, 60, 60]},
#     {"name": "Sreymom", "score":[0, 60, 60, 60]},
#     {"name": "Phally", "score":[0, 30, 60, 60]},
#     {"name": "Sopheap", "score":[0, 0, 60, 60]},
# ]
# print(Find(num))


def sumScore(scores):
    total=0
    count=0
    for score in scores:
        total+=score
        count+=1
    total=total/count
    return total
def findscoreSmallerThan50(array):
    count=0
    for value in array:
        value['score']=sumScore(value['score'])
        if value['score']<50:
            count+=1
    return str(count) +' failed'
students=[
    {"name": "chamreth", "score":[90, 80, 20, 60]},
    {"name": "Seyla", "score":[70, 80, 50, 30]},
    {"name": "Sophorn", "score":[0, 10, 60, 60]},
    {"name": "Sreymom", "score":[0, 60, 60, 60]},
    {"name": "Phally", "score":[100, 30, 60, 60]},
    {"name": "Sopheap", "score":[0, 0, 60, 60]},
]
print(findscoreSmallerThan50(students))
