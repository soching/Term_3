
let arr = [1, 3, 6, 7, 9];
let result=[];
for(i=0; i<arr.length ; i++){
    if (arr[i]<5){
        result.push(9)
    }
    else{
        result.push(arr[i])
    }
}
console.log(result);