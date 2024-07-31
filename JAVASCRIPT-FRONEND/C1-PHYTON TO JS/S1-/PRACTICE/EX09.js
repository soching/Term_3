function SameNumber (number){
    for(i=0 ; i<SameNumber.length; i++){
        if(number[1] != number[i]){
            return false ;
        }
        else{
            return true ;
        }
    }
}
let item =[3,3,3,3,3];
console.log(SameNumber(item));