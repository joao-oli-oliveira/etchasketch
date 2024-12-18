const board = document.getElementById("board");

for (let i = 0; i < 100; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.minWidth = "60px";
  board.appendChild(pixel);
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "black";
  });
} // Creates the pixels on the board
