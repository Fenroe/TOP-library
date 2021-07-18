let myLibrary = [];

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pageCountInput = document.getElementById("page-count");
const haveReadInput = document.getElementById("have-read");
const createBook = document.getElementById("add-book");
const cardContainer = document.querySelector(".book-card-container");

function Book(title, author, pageCount, haveRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
}

Book.prototype.makeCard = function() {
    let newCard = document.createElement("div");
    let newCardTitleContainer = document.createElement("h2");
    let newCardTitle = document.createTextNode(this.title);
    newCardTitleContainer.append(newCardTitle);
    let newCardAuthorContainer = document.createElement("h3");
    let newCardAuthor = document.createTextNode(this.author);
    newCardAuthorContainer.append(newCardAuthor);
    let newPageCountContainer = document.createElement("h3");
    let newPageCount = document.createTextNode(this.pageCount);
    newPageCountContainer.append(newPageCount);
    newCard.append(newCardTitleContainer, newCardAuthorContainer, newPageCountContainer);
    newCard.classList.add("book-card");
    cardContainer.append(newCard);   
}

function resetCards() {
    cardContainer.innerHTML = "";
}

function addToLibrary(title, author, pageCount, haveRead) {
    myBook = new Book(title, author, pageCount, haveRead);
    myBook.prototype = Object.create(Book.prototype);
    myLibrary.push(myBook);
    resetCards();
    myLibrary.forEach(book => book.makeCard());
};

function viewBooks() {
    myLibrary.forEach(book => {
        console.log(book);
    })
}

createBook.addEventListener("click", () => {
    addToLibrary(titleInput.value, authorInput.value, pageCountInput.value, haveReadInput.value);
});




