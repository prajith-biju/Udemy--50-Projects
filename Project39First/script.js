const password = document.getElementById("password");
const image = document.querySelector(".background-pic");

password.addEventListener("input", (e) => {
  let str = ``;
  str += e.target.value;
  let blur = 8;
  image.style.filter = `blur(${blur - str.length})`;
});
