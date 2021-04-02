const gridSpace = document.getElementById("playGrid");
const inputButton = document.getElementById("inputConfirm");

document.addEventListener("load", initializeGrid());
inputButton.addEventListener("click", function (e) {
  e.preventDefault();
  resizeGrid();
});

function initializeGrid() {
  gridSize(16);
  buildGrid(16);
}

function gridSize(size) {
  console.log(size);
  gridSpace.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function buildGrid(size) {
  for (let i = 0; i < size ** 2; i++) {
    var gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridSpace.appendChild(gridElement);
    gridElement.addEventListener("mouseover", changeColor);
  }
}

function changeColor(c) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  c.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function resizeGrid() {
  var size = document.getElementById("size").value;
  size = parseInt(size);
  if (size < 1 || size > 100 || Number.isNaN(size)) {
    alert("Try Again");
  } else {
    cleanHouse();
    gridSize(size);
    buildGrid(size);
  }
}

function cleanHouse() {
  while (gridSpace.firstChild) {
    gridSpace.removeChild(gridSpace.firstChild);
  }
}
