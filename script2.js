// set standard 16x16 gridBox
function buildGrid(size) {
    playGrid.style.gridTemplateColumns = "repeat(${size}, 1fr)"
  }
// fill div with boxes
function fillGrid {
    for (let i = 0; i < size**2; i++) {
      var box = document.createElement("div");
      // box.className = i;
      document.getElementById("playGrid").appendChild(box);
      box.addEventListener("mouseover", changeColor)
    }
  } 
// change box color on mouseover
function changeColor(b) {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    b.style.backgroundColor = "rgb(${r}, ${g}, ${b})"
}
accept custom grid size Input
    reject any input over 100
