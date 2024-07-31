let displays = document.getElementById('display')
let numbers = document.querySelectorAll('button')



let stors = []
let sum = 0;
let num = '';
function getNumber(e) {
    if (e.target.textContent != '=') {
        displays.value += e.target.textContent
        if (e.target.textContent != '+' && e.target.textContent != '-' && e.target.textContent != '*' && e.target.textContent != '/') {
            num += e.target.textContent
        }
        else {
            stors.push(num)
            stors.push(e.target.textContent)
            num = ''
        }
    }
    if (e.target.textContent === 'C') {
        num = ''
        stors = []
        displays.value = ''
        process = true
        sum = 0
    }
    if (e.target.textContent === '=') {
      
        stors.push(num)

        for (let i = 0; i < stors.length; i++) {
            if (stors[i] === '+' && i % 2 === 1) {
                sum = parseInt(stors[i - 1]) + parseInt(stors[i + 1])
                stors[i + 1] = sum
            }
            if (stors[i] === '-' && i % 2 === 1) {
                sum = parseInt(stors[i - 1]) - parseInt(stors[i + 1])
                stors[i + 1] = sum
            }
            if (stors[i] === '*' && i % 2 === 1) {
                sum = parseInt(stors[i - 1]) * parseInt(stors[i + 1])
                stors[i + 1] = sum
            }
            if (stors[i] === '/' && i % 2 === 1) {
                sum = parseInt(stors[i - 1]) / parseInt(stors[i + 1])
                stors[i + 1] = sum
            }
        }
        displays.value = sum
        stors = []
        num=sum
    }

}


for (let number of numbers) {
    number.addEventListener('click', getNumber)
}