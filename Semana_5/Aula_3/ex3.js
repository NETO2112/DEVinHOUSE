class Book {
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

const book1 = new Book('Book1', 'Author1', 1980);
const book2 = new Book('Book2', 'Author2', 2021);
const book3 = new Book('Book3', 'Author3', 1850);
const array = [book1, book2, book3];

console.log(Book.sortByYear(array));

book1.borrowBook();
book2.borrowBook();
book1.borrowBook();