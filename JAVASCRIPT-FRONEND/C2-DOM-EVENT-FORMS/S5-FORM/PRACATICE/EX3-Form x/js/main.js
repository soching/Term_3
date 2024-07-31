
function getValue(elements) {
    let result = []
    for (let element of elements) {
        if (element.checked) {
            result.push(element.value)
        }
    }
    return result
}

function showCase() {
    
    const cards = document.querySelectorAll('.card'); //list card
    let arrayCheckbox = getValue(checkboxes); // list array checkbox

    // TODO: 
    //If there is no check, all cards is visible
    if (arrayCheckbox.length === 0) {
        for (let card of cards) {
            card.classList.remove('hide');
        }
    }

    
    //If at least one of them is checked display that card to block otherwise is invisible.
    for (let card of cards) {
        if (arrayCheckbox.includes(card.id)) {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    }

}

// Main
const content = document.querySelector('.content');
const checkboxes = document.querySelectorAll('.lang');



for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', showCase);
}
