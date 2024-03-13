let $ = document;
let bookTitle = $.getElementById("title");
let bookAuthor = $.getElementById("author");
let bookYear = $.getElementById("year");
let booksContainer = $.getElementById("book-list");
let addBtn = $.querySelector(".add-btn");
let books = [];

function booksGenerator(bookArray) {
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

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let bookNewObj = {
    id: books.length + 1,
    title: bookTitle.value,
    author: bookAuthor.value,
    year: bookYear.value,
  };
  books.push(bookNewObj);
  setIntoLocalStorage(books);
});

function setIntoLocalStorage(bookArray) {
  localStorage.setItem("bookList", JSON.stringify(bookArray));
  booksGenerator(bookArray);
}
