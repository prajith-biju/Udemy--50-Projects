const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message one",
  "Message two",
  "Message three",
  "Messgae four",
];

const types = ["success", "error", "info"];

button.addEventListener("click", () =>
  createNotification()
);

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomClass());

  notif.innerHTML = message ? message : getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomClass() {
  return types[Math.floor(Math.random() * types.length)];
}
