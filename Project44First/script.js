const ball = document.getElementById("ball");
const text = document.getElementById("text");

let value = -50;

ball.addEventListener("mousemove", (e) => {
  ball.style.transform = `translateX(${value}%)`;
});
