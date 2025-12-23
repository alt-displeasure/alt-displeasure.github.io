// Page select and switch
function aboutSwitch() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  document.getElementById("right-home").style.display = "block";
  document.getElementById("right-books").style.display = "none";

  document.getElementById("about").style.width = "55%";
  $("#about").load("about.html");
}

function homeSwitch() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  document.getElementById("right-home").style.display = "block";
  document.getElementById("right-books").style.display = "none";
}

function booksSwitch() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "block";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  document.getElementById("right-home").style.display = "none";
  document.getElementById("right-books").style.display = "block";

  document.getElementById("books").style.width = "55%";
  document.getElementById("right-books").style.width = "22%";
  $("#books").load("books.html");
  $("#right-books").load("books/aside-books.html");
}

// Books switch
function naufragoSw() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "block";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  document.getElementById("right-home").style.display = "none";
  document.getElementById("right-books").style.display = "block";

  document.getElementById("main-books-home").style.display = "none";
  document.getElementById("main-books-naufrago").style.display = "block";
  document.getElementById("main-books-principe").style.display = "none";

  document.getElementById("books").style.width = "55%";
  document.getElementById("right-books").style.width = "22%";
  $("#books").load("books.html");
  $("#right-books").load("books/aside-books.html");
  $("#main-books-naufrago").load("books/naufrago.html");
}