let products = [
    {product : 'Book', stock : 100, price : '5$'},
    {product : 'pen', stock : 2000, price : '3$'},
    {product : 'Computer', stock : 1000, price : '400$'},
    {product : 'IPhone 15pro', stock : 100, price : '2000$'},
    {product : 'Mouse pad', stock : 100, price : '1$'},
    {product : 'Keyborad', stock : 100, price : '12$'},
    {product : 'Keyborad Light', stock : 100, price : '20$'},
]
let number = 0;
let calculator = '';
let store;
let quantity;
let total;
let priceP;
let col = document.querySelector('.col')
function saveProduct() {
    localStorage.setItem('products', JSON.stringify(products));
}
function loadData() {
    return JSON.parse(localStorage.getItem('products'));
}
saveProduct()

function booking(e){

    let indexOfproduct =e.target.id 
    let productAddToCard=products[indexOfproduct];
    console.log(productAddToCard)

    let card =document.createElement('div');
    card.classList='card p-3 mt-3 flex-row justify-content-between border-danger border-2 select';

    let pNamespan=document.createElement('span');
    pNamespan.textContent=productAddToCard.product
    card.appendChild(pNamespan);

    let pPricespan=document.createElement('span');
    pPricespan.classList='col mt-1'
    pPricespan.textContent=productAddToCard.price;
    card.appendChild(pPricespan);

}
let i=0
function createCard(element) {
    let card = document.createElement('div');
    card.className = 'card p-3 mt-3 product border-danger border-2'
    let h3 = document.createElement('h3');
    h3.textContent = element.product;
    let pOne = document.createElement('p');
    pOne.textContent = 'Number in Stock: ' + element.stock;
    let pTwo = document.createElement('p');
    pTwo.textContent = 'Price : ' + element.price;

    let btn = document.createElement('button');
    btn.id=i
    btn.textContent = 'Add to card';
    btn.className = 'bg-info';
    btn.addEventListener('click', booking)
    card.appendChild(h3)
    card.appendChild(pOne)
    card.appendChild(pTwo)
    card.appendChild(btn)
    col.appendChild(card)
    i++
}
function displayCard() {
    products = loadData()
    for (let product of products) {
        createCard(product)
    }
}
displayCard();
loadData()