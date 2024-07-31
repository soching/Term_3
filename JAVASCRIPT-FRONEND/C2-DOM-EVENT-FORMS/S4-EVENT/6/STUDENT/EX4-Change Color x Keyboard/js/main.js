const keyboardEvent = (event) => {
    let showElement = document.querySelector('h1')
    showElement.textContent=event.key

    // TODO 
    // https://www.w3schools.com/jsref/event_key_key.asp
}


document.addEventListener('keydown', keyboardEvent)

