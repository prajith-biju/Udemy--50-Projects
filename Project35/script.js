const images = document.querySelectorAll(".image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let i = 0;
function carosile() {
  if (i > 2) {
    i = 0;
    return i;
  }
  prev.addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = 1;
      return i
    }
  });
  next.addEventListener("click", () => {
    i++;
    if (i > 2) {
      console.log("high");
      i = 3
      return i;
    }
  });
  i++;
  return i;
}

setInterval(() => {
  images.forEach((img) => {
    img.classList.remove("active");
  });
  images[carosile()].classList.add("active");
}, 1000);
