const goodEl = document.getElementById("good");
const cheapEl = document.getElementById("cheap");
const fastEl = document.getElementById("fast");


goodEl.addEventListener("click", () => {
  if (goodEl.classList.contains("active")) {
    goodEl.classList.remove("active");
  } else {
    goodEl.classList.add("active");
    fastEl.classList.remove("active");
  }
});

cheapEl.addEventListener("click", () => {
  if (cheapEl.classList.contains("active")) {
    cheapEl.classList.remove("active");
  } else {
    cheapEl.classList.add("active");
    goodEl.classList.remove("active");
  }
});

fastEl.addEventListener("click", () => {
  if (fastEl.classList.contains("active")) {
    fastEl.classList.remove("acticve");
  } else {
    fastEl.classList.add("active");
    cheapEl.classList.remove("active");
  }
});
