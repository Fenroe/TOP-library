const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageCountInput = document.getElementById('page-count');
const haveReadInput = document.getElementById('have-read');
const createBook = document.getElementById('add-book');
const cardContainer = document.querySelector('.book-card-container');

const myLibrary = [];

class Book {
  constructor(title, author, pageCount, haveRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
  }

  changeStatus() {
    if (this.haveRead === false) {
      this.haveRead = true;
    } else {
      this.haveRead = false;
    }
  }

  makeCard(indexNumber) {
    const newCard = document.createElement('div');
    const newCardTitleContainer = document.createElement('h2');
    const newCardTitle = document.createTextNode(this.title);
    newCardTitleContainer.append(newCardTitle);
    const newCardAuthorContainer = document.createElement('h3');
    const newCardAuthor = document.createTextNode(this.author);
    newCardAuthorContainer.append(newCardAuthor);
    const newPageCountContainer = document.createElement('h3');
    const newPageCount = document.createTextNode(`${this.pageCount} Pages`);
    newPageCountContainer.append(newPageCount);
    const newHaveReadButton = document.createElement('button');
    if (this.haveRead === true) {
      newHaveReadButton.innerHTML = 'Have Read';
    } else {
      newHaveReadButton.innerHTML = 'Not Read';
    }
    newHaveReadButton.classList.add('have-read-button');
    newHaveReadButton.setAttribute('data-index-number', indexNumber);
    const newRemoveButton = document.createElement('button');
    newRemoveButton.innerHTML = 'Remove';
    newRemoveButton.classList.add('remove-button');
    newRemoveButton.setAttribute('data-index-number', indexNumber);
    newCard.append(
      newCardTitleContainer,
      newCardAuthorContainer,
      newPageCountContainer,
      newHaveReadButton,
      newRemoveButton,
    );
    newCard.classList.add('book-card');
    cardContainer.append(newCard);
  }
}

function activateHaveReadButtons() {
  const haveReadButtons = document.querySelectorAll('.have-read-button');
  haveReadButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const indexNumber = parseInt(button.dataset.indexNumber, 10);
      myLibrary[indexNumber].changeStatus();
      if (button.textContent === 'Have Read') {
        button.textContent = 'Not Read';
      } else {
        button.textContent = 'Have Read';
      }
    });
  });
}

function activateRemoveButtons() {
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const indexNumber = parseInt(button.dataset.indexNumber, 10);
      myLibrary.splice(indexNumber, 1);
      fillPage();
    });
  });
}

function resetCards() {
  cardContainer.innerHTML = '';
}

function resetForm() {
  titleInput.value = '';
  authorInput.value = '';
  pageCountInput.value = null;
  haveReadInput.checked = false;
}

function fillPage() {
  resetCards();
  for (let i = 0; i < myLibrary.length; i += 1) {
    myLibrary[i].prototype = Object.create(Book.prototype);
    myLibrary[i].makeCard(i);
  }
  activateHaveReadButtons();
  activateRemoveButtons();
  resetForm();
}

function addToLibrary(title, author, pageCount, haveRead) {
  const myBook = new Book(title, author, pageCount, haveRead);
  myLibrary.push(myBook);
  fillPage();
}

createBook.addEventListener('click', () => {
  if (titleInput.value !== '' && authorInput.value !== '' && pageCountInput.value > 0) {
    addToLibrary(titleInput.value, authorInput.value, pageCountInput.value, haveReadInput.checked);
  }
});
