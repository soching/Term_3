let array =[1,2,3,4];
let maxNumber =array[0];
for(i=0; i<array.length; i++){
    if(maxNumber<array[i]){
        maxNumber=array[i]
    }
}
console.log(maxNumber);