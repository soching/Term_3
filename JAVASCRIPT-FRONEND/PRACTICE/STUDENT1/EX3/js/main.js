let arrOne=[1, 3, 6, 7, 9];
let arrTwo=[4, 3, 5, 9, 1];
let result=[];
for(i=0 ; i<arrOne.length ; i++){
    if (arrOne[i]>arrTwo[i]){
        result.push(arrOne[i]);
    }
    else{
        result.push(arrTwo[i]);
    }
}
console.log(result);













