let isPasswordSet = localStorage.getItem("Password");
let submit = document.querySelector(".pinCheck");
let input40 = document.querySelector("#input40");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input40.value === isPasswordSet) {
    window.location.href = "./main.html";
  } else {
    alert("wrong");
  }
});
