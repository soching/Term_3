let numbers = [1,2,3,2,1];
let sum =0 ;
for(let index in numbers){
    if(index>1){
        sum+=numbers[index];
    }
}
console.log(sum);