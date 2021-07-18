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

Book.prototype.changeStatus = function() {
    if(this.haveRead === false) {
        this.haveRead = true;
    } else {
        this.haveRead = false;
    }
}

Book.prototype.makeCard = function(indexNumber) {
    let newCard = document.createElement("div");
    let newCardTitleContainer = document.createElement("h2");
    let newCardTitle = document.createTextNode(this.title);
    newCardTitleContainer.append(newCardTitle);
    let newCardAuthorContainer = document.createElement("h3");
    let newCardAuthor = document.createTextNode(this.author);
    newCardAuthorContainer.append(newCardAuthor);
    let newPageCountContainer = document.createElement("h3");
    let newPageCount = document.createTextNode(this.pageCount+" Pages");
    newPageCountContainer.append(newPageCount);
    let newHaveReadButton = document.createElement("button");
    if(this.haveRead === true) {
        newHaveReadButton.innerHTML = "Have Read";
    } else {
        newHaveReadButton.innerHTML = "Not Read";
    }
    newHaveReadButton.classList.add("have-read-button");
    newHaveReadButton.setAttribute('data-index-number', indexNumber);
    let newRemoveButton = document.createElement("button");
    newRemoveButton.innerHTML = "Remove";
    newRemoveButton.classList.add("remove-button");
    newRemoveButton.setAttribute('data-index-number', indexNumber);
    newCard.append(newCardTitleContainer, newCardAuthorContainer, newPageCountContainer, 
        newHaveReadButton, newRemoveButton);
    newCard.classList.add("book-card");
    cardContainer.append(newCard);   
    console.log(newRemoveButton.dataset.indexNumber);
    console.log(newHaveReadButton.dataset.indexNumber);
}

const exampleOne = new Book("1", "1", "1", true); 
const exampleTwo = new Book("2", "2", "2", true); 
const exampleThree = new Book("3", "3", "3", true); 
const exampleFour = new Book("4", "4", "4", false); 
const exampleFive = new Book("5", "5", "5", true); 

function resetCards() {
    cardContainer.innerHTML = "";
}

function resetForm() {
    titleInput.value = "";
    authorInput.value = "";
    pageCountInput.value = null;
    haveReadInput.checked = false;
}

function addToLibrary(title, author, pageCount, haveRead) {
    myBook = new Book(title, author, pageCount, haveRead);
    myBook.prototype = Object.create(Book.prototype);
    myLibrary.push(myBook);
    fillPage();
};

function fillPage() {
    resetCards();
    for(i=0; i<myLibrary.length; i++) {
        myLibrary[i].makeCard(i);
    }
    activateHaveReadButtons();
    activateRemoveButtons();
    resetForm();
}

function activateHaveReadButtons() {
    haveReadButtons = document.querySelectorAll(".have-read-button");
    haveReadButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let indexNumber = parseInt(button.dataset.indexNumber);
            myLibrary[indexNumber].changeStatus();
            if(button.innerHTML ==="Have Read") {
                button.innerHTML = "Not Read";
            } else {
                button.innerHTML = "Have Read";
            }
        })
    })
}

function activateRemoveButtons() {
    removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let indexNumber = parseInt(button.dataset.indexNumber);
            myLibrary.splice(indexNumber, 1);
            fillPage();        
        })
    })
}

let myLibrary = [exampleOne, exampleTwo, exampleThree, exampleFour, exampleFive];

createBook.addEventListener("click", () => {
    addToLibrary(titleInput.value, authorInput.value, pageCountInput.value, haveReadInput.checked);
});




