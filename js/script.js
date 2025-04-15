let addBtn = document.querySelector("#add-btn");
let inputElemet = document.querySelector("input");
let itemsContainer = document.querySelector(".items-container");

addBtn.onclick = () => {
  let li = document.createElement("li");
  if (inputElemet.value) {
    li.innerHTML = inputElemet.value;
    inputElemet.value = "";
    itemsContainer.appendChild(li);
  }
};
