const title = document.querySelector("h1");
const colors = ["#289AFF", "#9BFA73", "#497649", "#FF6A89"];

const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "mouse enter";
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = "mouse Leave";
    title.style.color = colors[1];
  },
  handleWindowResize: function () {
    title.innerText = "mouse resize";
    title.style.color = colors[2];
  },
  handleMouseRightClick: function () {
    title.innerText = "mouse right click";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
title.addEventListener("contextmenu", superEventHandler.handleMouseRightClick);
