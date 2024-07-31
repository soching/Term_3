
//----------1
// let students = ['dara','sokha','rin']
// console.log(students.length)
// for (let i=0 ; i<students.length ; i++){
//     console.log(students[i])
// }


//-------2
// let number =[10,20,30,40]
// for (let index in number){
//     // console.log(i)
//     console.log(number[index])
// }

//---------3
// let numbers =[10,20,30,40,50]
// for (let value of numbers){
//     console.log(value)
// }


//----------4
// let numbers =[10,20,30,0,50]
// numbers.forEach(function(number){
//     console.log(number)
// })




//-------aro- function------
// let numbers =[0,20,30,0,50]
// numbers.forEach((number)=>{
//     console.log(number);
// })




//--------while-loop----
// let numbers =[0,2,30,0,50]
// let i=0
// while (i<numbers.length){
//     console.log(numbers[i]);
//     i++
// }


//---------2
// function hello(){
//     console.log('hi')
// }
// hello()


//---------3
// const sumNumber = (n1,n2) =>{
//     return n1+n2
// }
// console.log(sumNumber(1,3))










// let number =(array)=>{
//     let x =0;
//     let sum =0;
//     for (let value of array){
//         sum+=value;
//     }
//     x=sum/array.length;
//     return x;
// }
// let hello=[10,10,10,10]
// console.log(number(hello))


let number=[10,50,30,80];
let sum=0 ;
for(let value of number) {
    if (value>10 && value<50) {
        sum+=value;
    }
}
console.log(sum);