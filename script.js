const books = [
    { id: 1, title: "Book One", author: "Author One", price: 10, image: "images/book1.jpg" },
    { id: 2, title: "Book Two", author: "Author Two", price: 15, image: "images/book2.jpg" },
    // Add more books here
];

let cart = [];

function displayBooks(bookList) {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = '';

    bookList.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}" width="100">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>$${book.price}</p>
            <button onclick="viewBookDetails(${book.id})">View Details</button>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookListElement.appendChild(bookItem);
    });
}

function searchBooks() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

function viewBookDetails(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        const detailsElement = document.getElementById('book-details');
        detailsElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}" width="200">
            <h2>${book.title}</h2>
            <p>by ${book.author}</p>
            <p>$${book.price}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
    }
}

function addToCart(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        cart.push(book);
        alert(`${book.title} added to cart`);
    }
}

function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cart.forEach((book, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}" width="100">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>$${book.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartElement.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    alert('Checkout not implemented');
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('book-list')) {
        displayBooks(books);
    }

    if (document.getElementById('cart')) {
        displayCart();
    }
});
