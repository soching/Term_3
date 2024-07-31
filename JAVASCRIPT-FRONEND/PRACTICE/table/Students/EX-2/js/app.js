let posts = [{
    id: 1,
    title: "Natural in the world",
    image: "https://www.pure-leisure.co.uk/wp-content/uploads/2019/03/3-Reasons-Why-Conservation-Is-So-Important.jpg",
    description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
    date: "14 / April / 2021",
    author: "Rady Cody"
},
{
    id: 2,
    title: "Natural Tiger",
    image: "https://www.pmtoday.co.uk/wp-content/uploads/2020/09/tiger-wildlife-animal.jpg",
    description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
    date: "18 / April / 2021",
    author: "Dara Sisu"
},
{
    id: 3,
    title: "Natural in the world",
    image: "https://birdinflight.imgix.net/wp-content/uploads/2017/07/world-nature-contest_05.jpg?fm=pjpg&q=70&fit=crop&crop=faces&w=1200",
    description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
    date: "11 / April / 2021",
    author: "Sakira savi"
},
];
let body =document.querySelector('body');

console.log(posts[0].title);

// 0. loop on posts
for (let post of posts) {

    //1. create div with class name "container" and append it to "body"
    let container =document.createElement('div');
    container.classList='container';
    body.appendChild(container);
    //2. create div with class name "card" and append it to "container" div
    let card=document.createElement('div');
    card.classList='card';
    container.appendChild(card);
    //3. create div with class name "card-img" and append it to "card" div
    let cardimg=document.createElement('div');
    cardimg.classList='card-img';
    card.appendChild(cardimg);
    //4. create img tags with class name "img", use "src" attribute to display image and append it to "card-img" div
    // example: sample.src = post.image;
    let img=document.createElement('img');
    img.src=post.image;
    cardimg.appendChild(img);
    //5. create div with class name "card-body" and append it to "card" div
    let cardbody=document.createElement('div');
    cardbody.classList='card-body';
    card.appendChild(cardbody);
    //6. create h2 tags with class name "card-title", textContent = post.title and append it to "card-body" div
    let h2=document.createElement('h2');
    h2.classList='card-title';
    h2.textContent=post.title;
    cardbody.appendChild(h2);
    //7. create p tags with class name "description",
    // textContent = post.description
    let p=document.createElement('p');
    p.classList='description';
    p.textContent=post.description;
    // and then apppend it to "card-body" div
    cardbody.appendChild(p);
    //8. create div with class name "card-footer" and append it to "card" div
    let cardfooter=document.createElement('div');
    cardfooter.classList='card-footer';
    card.appendChild(cardfooter);
    //9. create span tags with id name "date", textContent = post.date and append it to "card-footer" div 
    let span =document.createElement('span');
    span.id='date';
    span.textContent=post.date;
    cardfooter.appendChild(span);
    //10. create span tags with id name "author", textContent = post.author  and append it to "card-footer" 
    let author=document.createElement('span');
    author.id='author';
    author.textContent=post.author;
    cardfooter.appendChild(author);

}