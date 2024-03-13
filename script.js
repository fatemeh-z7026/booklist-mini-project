let $ = document;
let bookTitle = $.getElementById("title");
let bookAuthor = $.getElementById("author");
let bookYear = $.getElementById("year");
let booksContainer = $.getElementById("book-list");
let addBtn = $.querySelector(".add-btn");
let books = [];

function booksGenerator() {
  let newTr = $.createElement("tr");

  let newTitle = $.createElement("td");
  newTitle.innerHTML = bookTitle.value;

  let newAuthor = $.createElement("td");
  newAuthor.innerHTML = bookAuthor.value;

  let newYear = $.createElement("td");
  newYear.innerHTML = bookYear.value;

  newTr.append(newTitle, newAuthor, newYear);
  booksContainer.append(newTr);
}

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  booksGenerator();
});
