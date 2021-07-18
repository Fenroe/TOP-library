let myLibrary = [];

function Book(title, author, pageCount, haveRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
}

function addToLibrary(title, author, pageCount, haveRead) {
    myBook = new Book(title, author, pageCount, haveRead);
    myLibrary.push(myBook);
};

function viewBooks() {
    myLibrary.forEach(book => {
        console.log(book);
    })
}

addToLibrary("Eric", "Johnny Bravo", 669, "Yes");
addToLibrary("Eric", "Johnny Bravo", 669, "Yes");
addToLibrary("Eric", "Johnny Bravo", 669, "Yes");
addToLibrary("Eric", "Johnny Bravo", 669, "Yes");
addToLibrary("Eric", "Johnny Bravo", 669, "Yes");

viewBooks();



