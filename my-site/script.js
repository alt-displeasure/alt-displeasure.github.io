// Page select and switch
function aboutSwitch() {
  let about = document.getElementById("about");
  let book = document.getElementById("book");
  let projects = document.getElementById("projects");
  let blog = document.getElementById("blog");
  let home = document.getElementById("home");
  let resources = document.getElementById("resources");

  about.style.display = "block";
  book.style.display = "none";
  projects.style.display = "none";
  blog.style.display = "none";
  home.style.display = "none";
  resources.style.display = "none";;

  $("#about").load("about.html");
}