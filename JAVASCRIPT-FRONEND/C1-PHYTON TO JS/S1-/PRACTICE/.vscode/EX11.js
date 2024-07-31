// let obj = {name: 'rady',age:17, position: 'trainer'}
// for(let value in obj){
//     console.log(obj[value]);
// }





// let obj = ['rady','apple','traineri','coconut','potato'];
// let array=[];
// for(let value in obj){
//     array.push(obj[value].length);
// }
// console.log(array);




let array =['rady','apple','traineri','coconut','potato'];
let max=array[0].length;
let result=array[0];
for (let i=0 ; i<array.length; i++){
    if(max<array[i].length){
        max=array[i].length
        result=array[i]
    }
}
console.log(result);

