const btn = document.querySelector("button");
const body = document.querySelector("body");

function colorc() {
  const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
  ];
  const colorOne = colors[Math.floor(Math.random() * colors.length)];
  const colorTwo = colors[Math.floor(Math.random() * colors.length)];
  console.log(colorOne);
  console.log(colorTwo);
  body.style.background = `linear-gradient(${colorOne},${colorTwo})`;
}

btn.addEventListener("click", colorc);
