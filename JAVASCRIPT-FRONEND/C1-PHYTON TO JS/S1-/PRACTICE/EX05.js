let number =(array)=>{
    let sum =0;
    let x =0;
    for (let value of array){
        sum+=value;
    }
    x=sum/array.length;
    return x;
}
let hello=[10,20,20];
console.log(number(hello))