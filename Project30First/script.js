const text = document.querySelector(".text");
const speedEl = document.getElementById("speed");

const string = "We love Programming!";
const ArrayString = string.split("");
let i = 0;
let speed = 1000;

speedEl.addEventListener("change", (e) => {
  changeSpeed(e.target.value);
});

setInterval(() => {
  speed -= 100;
  text.innerHTML += ArrayString[i];

  i++;
  if (i > ArrayString.length) {
    text.innerHTML = "";
    i = 0;
  }
}, speed);

function changeSpeed(value) {
  speed -= value * 100;
  console.log(speed);
}
