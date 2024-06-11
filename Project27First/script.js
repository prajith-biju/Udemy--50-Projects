const button = document.querySelector("button");
const notification = document.querySelector(".notification");

let message = [];
let num = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

button.addEventListener("click", () => {
  notification.innerHTML = "";
  let randomColor = generateRandomColor();
  message.push(
    `<div class="message" style = "color: rgb(${randomColor.red}, ${
      randomColor.green
    }, ${randomColor.blue})">message ${num[Math.floor(Math.random() * 9)]}<div>`
  );

  loadHtml();
  setTimeout(() => {
    message.pop();

    loadHtml();
  }, 1000);
});

function loadHtml() {
  if (message.length === 0) {
    notification.innerHTML = "";
    return;
  }
  for (let i = 0; i < message.length; i++) {
    notification.innerHTML += message[i];
  }
}

function generateRandomColor() {
  return {
    red: Math.floor(Math.random() * 255) + 1,
    green: Math.floor(Math.random() * 255) + 1,
    blue: Math.floor(Math.random() * 255) + 1,
  };
}
