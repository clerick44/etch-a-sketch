// global variables

for (let i = 0; i < 16; i++) {
  var box = document.createElement("div");
  box.className = i;
  document.getElementById("playGrid").appendChild(box);
}
