let $ = document;
let bookTitle = $.getElementById("title");
let bookAuthor = $.getElementById("author");
let bookYear = $.getElementById("year");
let booksContainer = $.getElementById("book-list");
let addBtn = $.querySelector(".add-btn");
let books = [];

addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    bookTitle.value === "" ||
    bookAuthor.value === "" ||
    bookYear.value === ""
  ) {
    alert("لطفا همه اینپوت ها را پر نمایید");
  } else {
    let bookNewObj = {
      id: books.length + 1,
      title: bookTitle.value,
      author: bookAuthor.value,
      year: bookYear.value,
    };
    books.push(bookNewObj);
    setIntoLocalStorage(books);
  }
});

function booksGenerator(bookArray) {
  booksContainer.innerHTML = "";
  bookArray.forEach(function (book) {
    let newTr = $.createElement("tr");

    let newTitle = $.createElement("td");
    newTitle.innerHTML = book.title;

    let newAuthor = $.createElement("td");
    newAuthor.innerHTML = book.author;

    let newYear = $.createElement("td");
    newYear.innerHTML = book.year;

    newTr.append(newTitle, newAuthor, newYear);
    booksContainer.append(newTr);
  });
}

function setIntoLocalStorage(bookArray) {
  localStorage.setItem("bookList", JSON.stringify(bookArray));
  booksGenerator(bookArray);
  emptyInputs();
}

function emptyInputs() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookYear.value = "";
}

function getBooksLocal() {
  let localStorageBooks = localStorage.getItem("bookList");

  if (localStorageBooks) {
    books = JSON.parse(localStorageBooks);
    booksGenerator(books);
  }
}
window.addEventListener("load", getBooksLocal);
