const imageEl = document.querySelector(".image");
const homeEl = document.getElementById("home");
const workEl = document.getElementById("work");
const blogEl = document.getElementById("blog");
const aboutEl = document.getElementById("about");
const btns = document.querySelectorAll("ul li");

// console.log(btns)

homeEl.addEventListener("click", () => {
  btns.forEach((item) => {
    item.classList.remove("active");
  });
  homeEl.classList.add("active");
  imageEl.classList.remove("work");
  imageEl.classList.remove("blog");
  imageEl.classList.remove("about");
  imageEl.classList.add("home");
});

workEl.addEventListener("click", () => {
  btns.forEach((item) => {
    item.classList.remove("active");
  });
  workEl.classList.add("active");
  imageEl.classList.remove("home");
  imageEl.classList.remove("blog");
  imageEl.classList.remove("about");
  imageEl.classList.add("work");
});

blogEl.addEventListener("click", () => {
  btns.forEach((item) => {
    item.classList.remove("active");
  });

  blogEl.classList.add("active");
  imageEl.classList.remove("home");
  imageEl.classList.remove("work");
  imageEl.classList.remove("about");
  imageEl.classList.add("blog");
});

aboutEl.addEventListener("click", () => {
  btns.forEach((item) => {
    item.classList.remove("active");
  });
  aboutEl.classList.add("active");
  imageEl.classList.remove("home");
  imageEl.classList.remove("work");
  imageEl.classList.remove("blog");
  imageEl.classList.add("about");
});
