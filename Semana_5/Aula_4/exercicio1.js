/*class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.borrow = false;
    }

    borrowBook() {
        if (this.borrow == true) {
            console.log(`${this.title} is already borrowed`);
        }

        else {
            console.log(`You borrow ${this.title}`);
            this.borrow = true;
        }
    }

    static sortByYear(list) {
        return list.sort((a, b) => a.year - b.year);
    }
}

class HQ extends Book {
    constructor(title, author, year, illustrator) {
        super(title, author, year);
        this.illustrator = illustrator;
    }

    illustratorName() {
        console.log(this.illustrator);
    }
}

const book1 = new Book('Book1', 'Author1', 1980);
const book2 = new Book('Book2', 'Author2', 2021);
const book3 = new Book('Book3', 'Author3', 1850);
const hq1 = new HQ('HQ', 'Author4', 1950, 'illustrator1');
const array = [book1, book2, book3, hq1];

console.log(Book.sortByYear(array));

hq1.illustratorName();

book1.borrowBook();
book2.borrowBook();
book1.borrowBook();*/

class Book {
    #title
    #author
    #year
    #borrow
    constructor(title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#borrow = false;
    }

    borrowBook() {
        if (this.#borrow == true) {
            console.log(`${this.#title} is already borrowed`);
        }

        else {
            console.log(`You borrow ${this.#title}`);
            this.#borrow = true;
        }
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get year() {
        return this.#year;
    }

    get borrow() {
        return this.#borrow;
    }

    

    static sortByYear(list) {
        return list.sort((a, b) => a.year - b.year);
    }

    toJSON() {
        return {
            title: this.#title,
            author: this.#author,
            year: this.#year,
            borrow: this.#borrow
        }
    }
}

class HQ extends Book {
    #illustrator
    constructor(title, author, year, illustrator) {
        super(title, author, year);
        this.#illustrator = illustrator;
    }

    get illustratorName() {
        console.log(this.illustrator);
    }

    toJSON() {
        return {
            title: this.title,
            author: this.author,
            year: this.year,
            borrow: this.borrow,
            illustrator: this.#illustrator
        }
    }
}

const book1 = new Book('Book1', 'Author1', 1980);
const book2 = new Book('Book2', 'Author2', 2021);
const book3 = new Book('Book3', 'Author3', 1850);
const hq1 = new HQ('HQ', 'Author4', 1950, 'illustrator1');
const array = [book1, book2, book3, hq1];
/*
console.log(Book.sortByYear(array));

//hq1.illustratorName();

book1.borrowBook();
book2.borrowBook();
book1.borrowBook();
*/
console.log(book1.toJSON());
console.log(hq1.toJSON());

//pra chamar as hq's no "sortByYear" tem que fazer rolê lá de .map