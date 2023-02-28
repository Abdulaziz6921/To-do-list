let settings = document.querySelector(".settings");
let body = document.querySelector("body");
let header = document.querySelector(".headers");
let leftSide = document.querySelector(".leftSide");
let box = document.querySelector(".box ");
let pic = document.querySelector(".pctr ");
let newTaskBtn = document.querySelector(".btn1");
let inner = document.querySelector(".inner");
let form = document.querySelector("form");
let done = document.querySelector(".btn3");

// Getting Name_____________________________________
let userName = localStorage.getItem("Name");
let user = document.createElement("h1");
user.innerText = userName;
header.appendChild(user);

if (userName.length > 9) {
  let h1 = document.querySelectorAll("h1");
  h1.forEach((el) => {
    el.style = `font-size:50px;line-height:60px;`;
  });
}

// Getting Date____________________________________________
let d = new Date().toString().split(" ");
let dayPlus = d[0];
let mmDot = d[1] + ".";

switch (dayPlus) {
  case "Tue":
    dayPlus = "Tuesday";
    break;
  case "Wed":
    dayPlus = "Wednesday";
    break;
  case "Thu":
    dayPlus = "Thursday";
    break;
  case "Sat":
    dayPlus = "Saturday";
    break;

  default:
    dayPlus += "day";
    break;
}

let fullDate = dayPlus + " " + mmDot + " " + d.splice(2, 2).join("  ");

let date = document.createElement("h3");
date.innerHTML = `<i>${fullDate}</i>`;
date.style = `color:#6E9BF6;  margin-top:20px`;
leftSide.insertBefore(date, box);

// Profile picture_____________________________________
let img = localStorage.getItem("Photo");
if (img === null) {
  pic.innerHTML = "<i>No picture yet</i>";
  pic.style = `background-color:#6e9bf6`;
} else {
  let photo = document.createElement("img");
  photo.src = img;
  pic.appendChild(photo);
}

// NEW Task_______________________________

newTaskBtn.addEventListener("click", () => {
  form.style = "display:flex";
  newTaskBtn.style.display = "none";
  inner.style.paddingTop = "0px";

  form.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let addTaskBtn = document.querySelector(".btn2");
let inputTask = addTaskBtn.previousElementSibling;
let onlyNumbers =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
let select = document.querySelector("#select");
let val = "text";
select.addEventListener("change", (e) => {
  val = e.target.value;
  if (val === "text") {
    inputTask.setAttribute("placeholder", "Add Task");
  } else {
    inputTask.setAttribute("placeholder", "dd.mm.yy, dd/mm/yy,  dd-mm-yy");
  }
});
let height;
addTaskBtn.addEventListener("click", () => {
  if (val === "text") {
    if (inputTask.value === "") {
      let close = document.querySelector(".close");
      form.appendChild(close);
      inputTask.style = ` border:2px solid red;box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(254, 254, 254, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px;`;
      let info = document.createElement("p");
      info.innerText = `Nothing is written`;
      close.appendChild(info);
      info.style = `color:white; text-align:center; font-size:18px`;

      setTimeout(() => {
        inputTask.style = `border:none`;
        info.innerText = ``;
      }, 2000);
    } else {
      let tasks = document.createElement("div");
      tasks.classList.add("tasks");
      inner.appendChild(tasks);

      let text = document.createElement("div");
      text.classList.add("text");
      tasks.appendChild(text);

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

      let p = document.createElement("p");
      p.innerText = inputTask.value;
      text.appendChild(p);

      let btn = document.createElement("button");
      btn.innerHTML = "<i class='fa fa-trash'></i>";
      tasks.appendChild(btn);

      btn.addEventListener("click", (e) => {
        let inn = e.target.parentElement.parentElement;
        inn.remove();
      });
    }
  } else {
    if (onlyNumbers.test(inputTask.value)) {
      let tasks = document.createElement("div");
      tasks.classList.add("tasks");
      inner.appendChild(tasks);

      let text = document.createElement("div");
      text.classList.add("text");
      tasks.appendChild(text);

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

      let p = document.createElement("p");
      p.innerText = inputTask.value;
      text.appendChild(p);

      let btn = document.createElement("button");
      btn.innerHTML = "<i class='fa fa-trash'></i>";
      tasks.appendChild(btn);

      btn.addEventListener("click", (e) => {
        let inn = e.target.parentElement.parentElement;
        inn.remove();
      });
    } else {
      let close = document.querySelector(".close");
      form.appendChild(close);
      inputTask.style = ` border:2px solid red;box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(254, 254, 254, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px;`;
      let info = document.createElement("p");

      if (inputTask.value === "") {
        info.innerText = `Nothing is written`;
      } else if (typeof inputTask.value === "string") {
        info.innerText = `Only formats:dd.mm.yy ... allowed`;
        info.style.textAlign = "right";
      }
      close.appendChild(info);
      info.style = `color:white; text-align:center; font-size:18px`;

      setTimeout(() => {
        inputTask.style = `border:none`;
        info.innerText = ``;
      }, 3000);
    }
  }

  done.style.display = "block";
  done.addEventListener("click", () => {
    form.style = "display:none";

    newTaskBtn.style.display = "block";
    inner.style.paddingTop = "25px";
  });

  inputTask.value = "";

  let main = document.querySelector("main");
  let rightSide = document.querySelector(".rightSide");
  let children = inner.childElementCount;

  // Solving media problem____________________________
  let width = window.innerWidth;
  // if (width <= 700 && children === 2) {
  //   body.height = "100%";
  // }
  if (children === 5) {
    main.style.height = "fit-content";
  }
  if (children === 7) {
    rightSide.style = `justify-content:flex-start; padding: 2.24vw 0;`;
  }
});

let allDelete = document.querySelector(".allDelete");

allDelete.addEventListener("click", () => {
  let allTasks = inner.getElementsByClassName("tasks");
  while (allTasks[0]) {
    allTasks[0].parentNode.removeChild(allTasks[0]);
  }
});

// Getting or Setting Settings____________________________
let sideBar = document.createElement("div");
body.appendChild(sideBar);

let btnName = document.createElement("button");

let txtName = document.createElement("p");
txtName.innerHTML = "<i class='fa fa-user'></i> Change name";

btnName.classList.add("settingBtn");

let password = localStorage.getItem("Password");
let btnPassword = document.createElement("button");
let txtPassword = document.createElement("p");
btnPassword.classList.add("settingBtn");
if (password === null) {
  txtPassword.innerHTML = "<i class='fa fa-wrench'></i> Set password";
} else {
  txtPassword.innerHTML = "<i class='fa fa-lock'></i> Change password";
}

let Photo = localStorage.getItem("Photo");
let btnPhoto = document.createElement("button");
let txtPhoto = document.createElement("p");
btnPhoto.classList.add("settingBtn");

if (Photo === null) {
  txtPhoto.innerHTML = "<i class='fa fa-wrench'></i> Set photo";
} else {
  txtPhoto.innerHTML = "<i class='fa fa-picture-o'></i> Change photo";
}

let btnMode = document.createElement("button");
btnMode.classList.add("settingBtn");
let txtBtn = document.createElement("p");
txtBtn.innerHTML = "<i class='fa fa-moon-o'></i> Dark Mode";

btnName.appendChild(txtName);
btnPassword.appendChild(txtPassword);
btnPhoto.appendChild(txtPhoto);
btnMode.appendChild(txtBtn);

settings.addEventListener("click", () => {
  sideBar.classList.toggle("sideBar");
  sideBar.appendChild(btnName);
  sideBar.appendChild(btnPassword);
  sideBar.appendChild(btnPhoto);
  sideBar.appendChild(btnMode);
});
btnName.innerHTML += "<i class='fa fa-chevron-right'></i>";
btnMode.innerHTML += "<i class='fa fa-chevron-right'></i>";
btnPassword.innerHTML += "<i class='fa fa-chevron-right'></i>";
btnPhoto.innerHTML += "<i class='fa fa-chevron-right'></i>";

btnMode.addEventListener("click", (e) => {
  body.classList.toggle("dark_mode");
  e.target.style.backgroundColor =
    e.target.style.backgroundColor === "red" ? "" : "red";
  e.target.style.color = e.target.style.color === "white" ? "" : "white";
});
