const btn = document.getElementById("btn");
const black = document.getElementById("black");
const red = document.getElementById("red");
const nav = document.getElementById("nav");
const clear = document.getElementById("clear");

btn.addEventListener("click", () => show());
clear.addEventListener("click", () => hide());

function show() {
  black.classList.add("hide");
  red.classList.add("hide");
  nav.classList.add("hide");
}

function hide() {
  black.classList.remove("hide");
  red.classList.remove("hide");
  nav.classList.remove("hide");
}
