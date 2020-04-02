console.log("yerr");
let form = document.getElementById("create-task-form");
let description = document.getElementById("new-task-description");
// let submit_button = form.querySelectorAll('input')[1];
let list = document.getElementById("tasks");
let colors = [
  { color_name: "red", color_code: "#FE2E2E" },
  { color_name: "yellow", color_code: "#FFFF00" },
  { color_name: "green", color_code: "#00FF00" }
];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTask();

  function addTask() {
    let li = document.createElement("li");
    let button = document.createElement("button");
    // let formColor = document.createElement('form')
    // formColor.innerHTML =
    li.innerText = description.value;
    button.dataset.description = description.value;
    button.innerText = "X";
    li.appendChild(button);
    li.appendChild(formColor);
    list.appendChild(li);
  }

  console.log("submit listener worked");
});

document.addEventListener("click", function(event) {
  console.dir(event.target);
  if (event.target.nodeName == "button") {
    console.log(event.target);
    let parent = event.target.parentNode;
    parent.remove();
    console.log("in x");
  }
});
