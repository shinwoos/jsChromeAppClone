const h1 = document.querySelector("body");

function handleWindowResize() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 600) {
    h1.classList.add("clicked");
    h1.classList.remove("clicked2");
    h1.classList.remove("clicked3");
  } else if (screenWidth > 600 && screenWidth <= 800) {
    h1.classList.add("clicked2");
    h1.classList.remove("clicked1");
    h1.classList.remove("clicked3");
  } else if (screenWidth > 800 && screenWidth <= 1500) {
    h1.classList.add("clicked3");
    h1.classList.remove("clicked2");
    h1.classList.remove("clicked");
  }
}

window.addEventListener("resize", handleWindowResize);
