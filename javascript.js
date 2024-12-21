const board = document.getElementById("board");
const pixels = document.querySelectorAll("pixel");
const resSelect = document.getElementById("resolution");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

let isToggling = false;
let isErase = false;
let isColour = false;

gameInit(1024);

function enableToggle(e) {
  console.log("enableToggle");
  console.log(e);
  isToggling = true;
  if (e.shiftKey === true) {
    isErase = true;
  }
}
function disableToggle() {
  console.log("disableToggle");
  isToggling = false;
  isErase = false;
}

window.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.code === "KeyC") {
    isColour = !isColour;
  }
});

const cgaColours = [
  "#000000",
  "#555555",
  "#aaaaaa",
  "#0000aa",
  "#ffffff",
  "#5555ff",
  "#00aa00",
  "#55ff55",
  "#00aaaa",
  "#55ffff",
  "#aa0000",
  "#ff5555",
  "#aa00aa",
  "#ff55ff",
  "#aa5500",
  "#ffff55",
];

for (let i = 0; i < 16; i++) {
  console.log(cgaColours[i]);
}

function setPenSettings(pixel, toggling, erasing) {
  if (!erasing && toggling) {
    pixel.style.backgroundColor = "rgb(64, 46, 23)";
    pixel.style.opacity -= "-0.1";
  }
  if (erasing && toggling) {
    pixel.style.backgroundColor = "rgb(199, 204, 208)";
    pixel.style.opacity = "0.1";
  }
}

resSelect.addEventListener("change", function (e) {
  gameInit(+resSelect.value);
});

function gameInit(tiles) {
  board.innerHTML = "";
  let calMinWidth = 600 / Math.sqrt(tiles);
  for (let i = 0; i < tiles; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.minWidth = `${calMinWidth + "px"}`;
    board.appendChild(pixel);
    pixel.addEventListener("mousedown", enableToggle);
    pixel.addEventListener("mouseup", disableToggle);
    pixel.addEventListener("click", (e) => {
      setPenSettings(pixel, true, e.shiftKey);
    });
    pixel.addEventListener("mouseover", (e) => {
      setPenSettings(pixel, isToggling, isErase);
    });
  }
}

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// function say() {
//   return "hello world";
// }

// function wrong(callback) {
//   console.log(callback);
// }
// function right(callback) {
//   console.log(callback);
// }
// function usage(callback) {
//   console.log(callback());
// }

// wrong(say());
// right(say);
// usage(say);
