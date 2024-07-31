class library {
    name:string;
    address:string;
    books:book[]=[];
    constructor(name:string,address:string){
        this.name=name;
        this.address=address;
    }
    getBooks(book:book):void{
        this.books.push(book);
    }
}

class book {
    title:string;
    yearOfPublished:number;
    constructor(title:string, yearOfPublished:number){
        this.title=title;
        this.yearOfPublished=yearOfPublished;
    }
}


class puplisher {
    name:string;
    address:string;
    constructor(name:string,address:string){
        this.name=name;
        this.address=address;
    }
}

class author {
    name:string;
    constructor(name:string){
        this.name=name;
    }
}
let library1 = new library('PNC','Borey Sorla');
let book1 = new book('Kolap Pailen',2);
library1.getBooks(book1);
console.log(library1);
