// let tasks = document.createElement("div");
// tasks.classList.add("tasks");
// if (body.classList.contains("dark_mode")) {
//   tasks.style = `color:black`;
// } else {
//   tasks.style = `color:black`;
// }
// inner.appendChild(tasks);

let input = document.createElement("input");
input.setAttribute("type", "checkbox");
input.classList.add("checkbox");
text.appendChild(input);
input.addEventListener("change", function () {
  if (this.checked) {
    p.style.textDecoration = "line-through";
  } else {
    p.style.textDecoration = "";
  }
});

tasksTxt.forEach((txt) => {});
let p = document.createElement("p");
// p.innerText = ;
text.appendChild(p);
// console.log(arrayOfTasks);
localStorage.setItem("Tasks", JSON.stringify(arrayOfTasks));

let btn = document.createElement("button");
btn.innerHTML = "<i class='fa fa-trash'></i>";
tasks.appendChild(btn);
