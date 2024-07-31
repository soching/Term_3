ingredientsWeNeed=[
    {'ingredient' : "rice","quantity" : 100},
    {"ingredient" : "beef", "quantity" : 100}
]
ingredientsKitchen=[
{"ingredient": "banana", "quantity": 100},
{"ingredient": "beef", "quantity": 200},
{"ingredient": "rice", "quantity": 30}
]
count=0
total=0
result=False
for weneed in ingredientsWeNeed:
    for kitchen in ingredientsKitchen:
        if weneed['ingredient']==kitchen['ingredient']:
            count+=1
            if weneed['quantity']<=kitchen['quantity']:
                total+=1
if count==total:
    result=True
print(result)
