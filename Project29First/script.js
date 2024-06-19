const imgae = document.querySelector(".image");

imgae.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  const top = e.target.offsetTop;
  const left = e.target.offsetLeft;

  const xInside = x - left;
  const yInside = y - top;
  addHeart(xInside, yInside);
});



function addHeart(top, left) {
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");
  heart.style.height = "40px";
  heart.style.width = "40px";
  heart.style.bottom = top + "px";
  heart.style.left = left + "px";
  heart.style.zIndex = 1;
  heart.style.color = "red";

  imgae.appendChild(heart);
}
