// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise

class Book {
    title;
    author;
    pages;
    isAvilable = true;
    
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow() {
        this.isAvailable = false;
        return this.isAvailable;
    }
    returnBook() {
        this.isAvailable = true;
        return this.isAvailable;
    }
    getInfo() {
        return `The ${this.title} by ${this.author} Tolkien (${this.pages} pages)`;
    }
    isLongBook() {
        return this.pages > 300 ? true : false;
    }
}


//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.
let book1 = new Book("Will", "Brothers", 300);
let book2 = new Book("Eleven", "Duff Brothers", 500);
let book3 = new Book("Hopper", "Hobb", 600);
let book4 = new Book("Lucas", "Maxi", 200);
let book5 = new Book("Pranay", "Mani", 3000);

//   2. Perform the following operations:

//       i. Display info of all books
console.log("Info of Book1:", book1.getInfo());
console.log("Info of Book2:", book2.getInfo());
console.log("Info of Book3:", book3.getInfo());
console.log("Info of Book4:", book4.getInfo());
console.log("Info of Book5:", book5.getInfo());
//       ii. Borrow 2 books and show their availability status
console.log(book1.borrow());
console.log(book2.borrow());
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books