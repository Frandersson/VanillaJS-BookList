class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    static displayBooks() {
        const storedBooks = [
            {
                title: "Harry Potter",
                author: "JK Rowling",
                isbn: "2452462"
            },
            {
                title: "12 rules to life",
                author: "Jordan B. Peterson",
                isbn: "5245246"
            }
        ]

        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit

    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instantiate new book
    const book = new Book(title, author, isbn);

    // Add book to list
    UI.addBookToList(book);

    // Clear fields
    UI.clearFields();
    
});