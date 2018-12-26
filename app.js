class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isb = isbn;
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
        <td><a href = "#" class = "btn btn-danger btn-sm delete> X </a></td>
        `;

        list.appendChild(row);
    }
}

