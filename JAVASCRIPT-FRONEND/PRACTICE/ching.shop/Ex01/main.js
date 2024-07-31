let datas = [
    { name: 'addass', price: '$20',pic:'../img/adass.jpg'},
    { name: 'padta', price: '$10',pic:'../img/a.jpg'},
    { name: 'padta', price: '$12',pic:'../img/b.jpg'},
    { name: 'padta', price: '$15',pic:'../img/c.jpg'},
    { name: 'padta', price: '$17',pic:'../img/e.jpg'},
    { name: 'padta', price: '$9',pic:'../img/f.jpg'},
    { name: 'padta', price: '$15',pic:'../img/d.jpg'},
    { name: 'padta', price: '$18',pic:'../img/g.jpg'},
    { name: 'padta', price: '$11',pic:'../img/c.jpg'},
    { name: 'jean', price: '$19',pic:'../img/i.jpg'},
    { name: 'addass', price: '$14',pic:'../img/g.jpg'},
    { name: 'jean', price: '$10',pic:'../img/k.jpg'},
    { name: 'jean', price: '$10',pic:'../img/c.jpg'},
    { name: 'jean', price: '$10',pic:'../img/f.jpg'},
    { name: 'jean', price: '$10',pic:'../img/a.jpg'},
    { name: 'jean', price: '$10',pic:'../img/c.jpg'},
    { name: 'jean', price: '$10',pic:'../img/i.jpg'},
    { name: 'jean', price: '$10',pic:'../img/k.jpg'},
]
function save() {
    localStorage.setItem('datas', JSON.stringify(datas));
}

function load() {
    datas = JSON.parse(localStorage.getItem('datas'))
}
save();
let body = document.querySelector('body');
let navbar = document.createElement('div');
navbar.classList = 'navbar';
body.appendChild(navbar);

let navbar_left = document.createElement('div');
navbar_left.classList = 'navbar-left';
navbar.appendChild(navbar_left);
let h1 = document.createElement('h1');
h1.textContent = 'ching_shop';
navbar_left.appendChild(h1);

let navbar_right = document.createElement('div');
navbar_right.classList = 'navbar-right';
navbar.appendChild(navbar_right);

let uls = document.createElement('ul');
navbar_right.appendChild(uls);

let lis = document.createElement('li');
uls.appendChild(lis);

let li_home = document.createElement('li');
li_home.textContent = 'home';
uls.appendChild(li_home);

let li_contac = document.createElement('li');
li_contac.textContent = 'contact us';
uls.appendChild(li_contac);

let li_about = document.createElement('li');
li_about.textContent = 'about us';
uls.appendChild(li_about);

let header = document.createElement('div');
header.classList = 'header';
body.appendChild(header);

let searchbar = document.createElement('div');
searchbar.classList = 'search-bar';
header.appendChild(searchbar);

let input = document.createElement('input');
input.type = 'text'
input.placeholder = 'research on ching shop'
// input.setAttribute('type','text')
// input.setAttribute('placeholder','seddd')
searchbar.appendChild(input)

let cards = document.createElement('div');
cards.classList = 'cardproduct'
header.appendChild(cards);
function addCard() {
    for(let product of datas){

    let cardproduct = document.createElement('div');
    cardproduct.classList = 'card';
    cards.appendChild(cardproduct)

    let picters = document.createElement('div');
    picters.classList = 'picture';
    cardproduct.appendChild(picters);

    let img = document.createElement('img');
    img.src = product.pic;
    img.style.width = '100%'
    picters.appendChild(img);

    let nameandprice = document.createElement('div');
    nameandprice.classList = 'nameandprice';
    cardproduct.appendChild(nameandprice);

    let spanname = document.createElement('p')
    spanname.textContent = 'Name :'+' '+product.name;
    nameandprice.appendChild(spanname);

    let spanPrice = document.createElement('p')
    spanPrice.textContent = 'Price :'+' '+product.price;
    nameandprice.appendChild(spanPrice); 

    let btn =document.createElement('button');
        btn.textContent='buys now !'
        nameandprice.appendChild(btn)
    
    btn.addEventListener('click', totalPrice);
}
}
addCard()



function totalPrice(e){
    let getPrice=e.target.parentElement.children[1].textContent.replace('Price : $',' ');
    console.log(getPrice)
    
}


input.addEventListener('click',randomColors);
function randomColors(){
    let colors =['1','2','3','4','5','6','7','8','9','a','b','c','e'];
    let sign='#';
    for(let i=0; i<6 ;i++){
        let indext=Math.floor(Math.random()*colors.length);
        sign+=colors[indext]
    }
    document.body.style.background=sign;
}