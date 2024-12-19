const board = document.getElementById("board");
const pixels = document.querySelectorAll("pixel");
let isToggling = false;

function enableToggle() {
  console.log("enableToggle");
  isToggling = true;
}

function disableToggle() {
  console.log("disableToggle");
  isToggling = false;
}

// for (let i = 0; i < 1024; i++) {
//   const pixel = document.createElement("div");
//   pixel.classList.add("pixel");
//   pixel.style.minWidth = "18.75px";
//   board.appendChild(pixel);
//   pixel.addEventListener("mousedown", enableToggle);
//   pixel.addEventListener("mouseup", disableToggle);
//   pixel.addEventListener("mouseover", () => {
//     if (isToggling === true) {
//       pixel.style.backgroundColor = "rgb(64, 46, 23)";
//       pixel.style.opacity -= "-0.1";
//     } // Only turns background black if mousedown
//   });
// } // 32x32 pixels on the board

for (let i = 0; i < 100; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.minWidth = "60px";
  board.appendChild(pixel);
  pixel.addEventListener("mousedown", enableToggle);
  pixel.addEventListener("click", () => {
    pixel.style.backgroundColor = "rgb(64, 46, 23)";
    pixel.style.opacity -= "-0.1";
  });
  pixel.addEventListener("mouseup", disableToggle);
  pixel.addEventListener("mouseover", () => {
    if (isToggling === true) {
      pixel.style.backgroundColor = "rgb(64, 46, 23)";
      pixel.style.opacity -= "-0.1";
    } // Only turns background black if mousedown
  });
} // 10x10 pixels on the board
