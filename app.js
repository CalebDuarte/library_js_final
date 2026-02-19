
const books = [
  "The Great Gatsby",
  "Sons and Lovers",
  "To Kill a Mockingbird",
  "Pride and Prejudice"
];

const bookList = document.getElementById("bookList");
const bookInput = document.getElementById("bookInput");

// update and display
function displayBooks() {
  let html = "";
  html += "<strong>Front of Shelf</strong><br>";
  if (books.length === 0) {
    html += "No books on shelf<br>";
  } else {
    books.forEach(function(book, index) {
      html += (index + 1) + ". " + book + "<br>";
    });
  }

  html += "<strong>End of Shelf</strong>";

  bookList.innerHTML = html;
}

// Add to front using unshift
function addFront() {
  let title = bookInput.value.trim();
  books.unshift(title);
  bookInput.value = "";
  displayBooks();
}

// Add to end using push
function addEnd() {
  let title = bookInput.value.trim();
  books.push(title);
  bookInput.value = "";
  displayBooks();
}

// Remove from front using shift
function removeFront() {
  books.shift();
  displayBooks();
}

// Remove from end using pop
function removeEnd() {
  books.pop();
  displayBooks();
}
//displays books on page load
displayBooks();