const board = document.getElementById("board");
let isToggling = false;

function enableToggle() {
  console.log("enableToggle");
  isToggling = true;
}

function disableToggle() {
  console.log("disableToggle");
  isToggling = false;
}

for (let i = 0; i < 100; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.minWidth = "60px";
  board.appendChild(pixel);
  pixel.addEventListener("mousedown", enableToggle);
  pixel.addEventListener("mouseup", disableToggle);
  pixel.addEventListener("mouseover", () => {
    if (isToggling === true) {
      pixel.style.backgroundColor = "black";
    } // Only turns background black if mousedown
  });
} // Creates the pixels on the board

// for (let i = 0; i < 100; i++) {
//   const pixel = document.createElement("div");
//   pixel.classList.add("pixel");
//   pixel.style.minWidth = "60px";
//   board.appendChild(pixel);
//   pixel.addEventListener("mouseover", () => {
//     pixel.style.backgroundColor = "black";
//   });
// } // Creates the pixels on the board
