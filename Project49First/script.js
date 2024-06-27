const input = document.querySelector(".input");
const todoContainer = document.querySelector(".todo-items");

let todoData = [];
todoData = showList() ? showList() : [];

// console.log(todoData);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    todoData.push(e.target.value);
    addItem(todoData);
    location.reload();
    e.target.value = "";
  }
});

function addItem(listItems) {
  localStorage.setItem("todoItem", JSON.stringify(listItems));
}

function showList() {
  const items = JSON.parse(localStorage.getItem("todoItem"));
  if (items) {
    for (let i = 0; i < items.length; i++) {
      const element = document.createElement("div");
      element.classList.add("items");
      element.innerText = items[i];
      todoContainer.appendChild(element);
    }
    return items;
  }
}
