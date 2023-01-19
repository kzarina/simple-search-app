let searchBar = document.getElementById("searchBar");
let movieList = document.getElementById("movieList");
let itemList = [
  "Batman",
  "Raging Bull",
  "Aliens",
  "Reservoir Dogs",
  "Wall E",
  "The Treasure of the Sierra Madre",
  "Whiplash",
  "Some Like It Hot",
  "Double Indemnity",
  "Taxi Driver",
  "Avengers",
  "Vertigo",
  "One the Waterfront",
  "Saving Private Ryan",
  "The Lord of the Rings",
  "Inception",
  "The Silence of the Lambs",
];
let searchTerm = null;

searchBar.addEventListener("keyup", function (event) {
  searchTerm = event.target.value.toLowerCase();
  renderList();
});

function loadList() {
  for (let item of itemList) {
    let li = document.createElement("li");
    li.innerText = item;
    movieList.append(li);
  }
}
loadList();

function renderList() {
  movieList.innerHTML = "";
  let filteredList = itemList.filter(function (item) {
    let lowerCaseItem = item.toLowerCase();
    let position = lowerCaseItem.indexOf(searchTerm);
    return !(position == -1);
  });
  for (let item of filteredList) {
    let li = document.createElement("li");
    li.innerText = item;
    movieList.append(li);
  }
}
