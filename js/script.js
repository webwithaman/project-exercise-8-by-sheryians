// Get Elements
let addBtn = document.querySelector("#add-btn");
let inputField = document.querySelector("input");
let itemsContainer = document.querySelector(".items-container");

// Adding Click Event on Add Button to Add Items
addBtn.onclick = () => {
  // Create li Element
  let li = document.createElement("li");

  // If Input Field is Non-Empty then Append li to Items Container
  if (inputField.value) {
    if (!itemsContainer.firstElementChild) itemsContainer.innerHTML = "";
    li.innerHTML = inputField.value;
    inputField.value = "";
    itemsContainer.appendChild(li);
  }
};
