let text = "hello world [JavaScript] we [are] strong!";
let output = text.replace(/\[[^\]]+\]/g, '');
console.log(output);



let result = 0;
let isRun = false;
for (index in numbers){
    if (numbers[index] ===1 && ! isRun){
        isRun=true;
    }
    else if(numbers[index] === 0){
        isRun = false;

    }
    else if(isRun){
        result+=numbers[index]
    }
};
console.log(result);