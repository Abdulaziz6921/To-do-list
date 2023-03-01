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

// NEW Task Button_______________________________

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

let appended = false;
settings.addEventListener("click", () => {
  let shadowBar = document.createElement("div");
  shadowBar.classList.add("shadowBar");
  body.appendChild(shadowBar);

  shadowBar.addEventListener("click", () => {
    shadowBar.classList.add("sideBarRemove");
    sideBar.classList.add("sideBarRemove");
  });

  let sideBar = document.createElement("div");
  body.appendChild(sideBar);
  sideBar.classList.add("sideBar");

  // Name Setting____________________________________________
  let btnName = document.createElement("button");
  let txtName = document.createElement("p");
  txtName.innerHTML = "<i class='fa fa-user'></i> Change name";
  btnName.classList.add("settingBtn");
  btnName.appendChild(txtName);
  sideBar.appendChild(btnName);

  btnName.addEventListener("click", () => {
    let shadowSetPhoto = document.createElement("div");
    shadowSetPhoto.classList.add("shadowSetPhoto");
    body.appendChild(shadowSetPhoto);
    //   Form____________________________________________

    let form_SetPhoto = document.createElement("form");
    form_SetPhoto.classList.add("form_SetPhoto");

    shadowSetPhoto.appendChild(form_SetPhoto);

    //   Header__________________________________________
    let h3 = document.createElement("h3");
    h3.innerText = "Change your user name:";
    form_SetPhoto.appendChild(h3);

    //   Inputs__________________________________________
    let inputs_SetPhoto = document.createElement("div");
    inputs_SetPhoto.classList.add("inputs_SetPhoto");
    form_SetPhoto.appendChild(inputs_SetPhoto);

    //   Input1__________________________________________
    let label = document.createElement("label");
    label.innerHTML = "Name: ";
    inputs_SetPhoto.appendChild(label);

    let input1 = document.createElement("div");
    input1.classList.add("input1");
    inputs_SetPhoto.appendChild(input1);

    let userIcon = document.createElement("div");
    userIcon.classList.add("user");
    input1.appendChild(userIcon);
    userIcon.innerHTML = "<i class='fa fa-user'></i>";

    let name = document.createElement("input");
    name.classList.add("name");
    input1.appendChild(name);
    name.setAttribute("placeholder", "Your name");
    name.setAttribute("required", "true");
    // name.setAttribute("minlength", "2");
    // name.setAttribute("maxlength", "25");
    name.style.textTransform = "capitalize";

    //   X-btn_________________________________________

    let x = document.createElement("button");
    x.classList.add("x-btn");
    x.innerHTML = "<i class='fa fa-times' ></i>";
    form_SetPhoto.appendChild(x);

    x.addEventListener("click", () => {
      body.removeChild(shadowSetPhoto);
    });

    //   Submit________________________________________
    let sbt = document.createElement("button");
    sbt.classList.add("sbt");
    sbt.textContent = "Submit";
    sbt.addEventListener("click", (e) => {
      e.preventDefault();
      let regex = /^[a-zA-Z]{2,25}$/gm;
      if (name.value !== "" && regex.test(name.value)) {
        let value = name.value.charAt().toUpperCase() + name.value.slice(1);
        localStorage.setItem("Name", value);
        window.location.reload();
      } else {
        input1.style = `border:3px solid red;box-shadow: rgba(243, 5, 5, 0.25) 0px 54px 55px, rgba(255, 0, 0, 0.12) 0px -12px 30px, rgba(255, 0, 0, 0.12) 0px 4px 6px, rgba(255, 3, 3, 0.17) 0px 12px 13px, rgba(255, 0, 0, 0.09) 0px -3px 5px;`;
        userIcon.style.color = "red";
        let info = document.createElement("p");
        let hasNumber = /\d/;
        let hasSpace = /\s/;

        if (hasNumber.test(name.value)) {
          info.innerText = "Please fill out 'name' field without numbers";
        } else if (hasSpace.test(name.value)) {
          info.innerText = "Please fill out 'name' field without any space";
        } else {
          info.innerText = "Please fill out 'name' field";
        }

        info.style = `color:red; text-align:center`;
        form_SetPhoto.insertBefore(info, sbt);
        setTimeout(() => {
          input1.style = `border:none; box-shadow:none`;
          userIcon.style.color = "";
          form_SetPhoto.removeChild(info);
        }, 2000);
      }
    });
    form_SetPhoto.appendChild(sbt);
  });

  // Password Setting____________________________________________
  let password = localStorage.getItem("Password");
  let btnPassword = document.createElement("button");
  let txtPassword = document.createElement("p");
  btnPassword.classList.add("settingBtn");
  btnPassword.appendChild(txtPassword);
  sideBar.appendChild(btnPassword);
  let header = document.createElement("h3");
  header.innerText = "Set your password";
  let passwordInput = document.createElement("input");
  passwordInput.classList.add("name");
  passwordInput.setAttribute("placeholder", "Create password");
  if (password === null) {
    txtPassword.innerHTML = "<i class='fa fa-wrench'></i> Set password";
  } else {
    header.innerText = "Change your password";
    txtPassword.innerHTML = "<i class='fa fa-lock'></i> Change password";
    passwordInput.setAttribute("placeholder", "Change the password");
  }

  btnPassword.addEventListener("click", () => {
    let shadowSetPhoto = document.createElement("div");
    shadowSetPhoto.classList.add("shadowSetPhoto");
    body.appendChild(shadowSetPhoto);
    //   Form____________________________________________

    let form_SetPhoto = document.createElement("form");
    form_SetPhoto.classList.add("form_SetPhoto");

    shadowSetPhoto.appendChild(form_SetPhoto);

    //   Header__________________________________________

    form_SetPhoto.appendChild(header);

    //   Inputs__________________________________________
    let inputs_SetPhoto = document.createElement("div");
    inputs_SetPhoto.classList.add("inputs_SetPhoto");
    form_SetPhoto.appendChild(inputs_SetPhoto);

    //   Input__________________________________________
    let label2 = document.createElement("label");
    label2.textContent = "Password: ";
    form_SetPhoto.appendChild(label2);

    let input2 = document.createElement("div");
    input2.classList.add("input1");
    form_SetPhoto.appendChild(input2);

    let pswrdIcon = document.createElement("div");
    pswrdIcon.classList.add("user");
    input2.appendChild(pswrdIcon);
    pswrdIcon.innerHTML = "<i class='fa fa-lock'></i>";

    input2.appendChild(passwordInput);
    passwordInput.setAttribute("type", "password");

    //   X-btn_________________________________________

    let x = document.createElement("button");
    x.classList.add("x-btn");
    x.innerHTML = "<i class='fa fa-times' ></i>";
    form_SetPhoto.appendChild(x);

    x.addEventListener("click", () => {
      body.removeChild(shadowSetPhoto);
    });

    //   Submit________________________________________
    let sbt = document.createElement("button");
    sbt.classList.add("sbt");
    sbt.textContent = "Submit";
    sbt.addEventListener("click", (e) => {
      e.preventDefault();
      let regex2 = /^[0-9]{4,8}$/gm;
      if (passwordInput.value !== "" && regex2.test(passwordInput.value)) {
        localStorage.setItem("Password", passwordInput.value);
        window.location.reload();
      } else {
        input2.style = `border:3px solid red;box-shadow: rgba(243, 5, 5, 0.25) 0px 54px 55px, rgba(255, 0, 0, 0.12) 0px -12px 30px, rgba(255, 0, 0, 0.12) 0px 4px 6px, rgba(255, 3, 3, 0.17) 0px 12px 13px, rgba(255, 0, 0, 0.09) 0px -3px 5px;`;
        pswrdIcon.style.color = "red";

        let info2 = document.createElement("p");
        let hasSpace = /\s/;
        if (hasSpace.test(passwordInput.value)) {
          info2.innerText =
            "Please fill out 'password' field without any space";
        } else {
          info2.innerText = "min~4 max~8 and only numbers allowed";
        }

        info2.style = `color:red; text-align:center`;
        form_SetPhoto.insertBefore(info2, sbt);

        setTimeout(() => {
          input2.style = `border:none; box-shadow:none`;
          pswrdIcon.style.color = "";
          form_SetPhoto.removeChild(info2);
        }, 2000);
      }
    });
    form_SetPhoto.appendChild(sbt);
  });

  // Photo Setting____________________________________________
  let Photo = localStorage.getItem("Photo");
  let btnPhoto = document.createElement("button");
  let txtPhoto = document.createElement("p");
  btnPhoto.classList.add("settingBtn");
  btnPhoto.appendChild(txtPhoto);
  sideBar.appendChild(btnPhoto);

  let h3 = document.createElement("h3");
  h3.innerText = "Set your profile picture";
  if (Photo === null) {
    txtPhoto.innerHTML = "<i class='fa fa-wrench'></i> Set photo";
  } else {
    h3.innerText = "Change your profile picture";
    txtPhoto.innerHTML = "<i class='fa fa-picture-o'></i> Change photo";
  }

  btnPhoto.addEventListener("click", () => {
    let shadowSetPhoto = document.createElement("div");
    shadowSetPhoto.classList.add("shadowSetPhoto");
    body.appendChild(shadowSetPhoto);
    //   Form____________________________________________

    let form_SetPhoto = document.createElement("form");
    form_SetPhoto.classList.add("form_SetPhoto");
    shadowSetPhoto.appendChild(form_SetPhoto);

    //   Header__________________________________________

    form_SetPhoto.appendChild(h3);

    //   Inputs__________________________________________
    let inputs_SetPhoto = document.createElement("div");
    inputs_SetPhoto.classList.add("inputs_SetPhoto");
    form_SetPhoto.appendChild(inputs_SetPhoto);

    //   Input1__________________________________________
    let label4 = document.createElement("label");
    label4.textContent = "Upload photo:";
    inputs_SetPhoto.appendChild(label4);

    let input3 = document.createElement("div");
    input3.classList.add("input3");
    inputs_SetPhoto.appendChild(input3);

    let label3 = document.createElement("label");
    label3.innerHTML =
      "<i class='fa fa-picture-o' style='margin-left:15px;margin-right:14px'></i> Choose";
    label3.classList.add("label3");
    label3.setAttribute("for", "getFile");
    input3.appendChild(label3);

    let prImg = document.createElement("img");
    prImg.classList.add("prImg");
    prImg.setAttribute("id", "pr-img");
    inputs_SetPhoto.appendChild(prImg);

    let photo = document.createElement("input");
    photo.style.display = "none";
    inputs_SetPhoto.appendChild(photo);
    photo.setAttribute("type", "file");
    photo.setAttribute("id", "getFile");
    photo.setAttribute("accept", "image/*");

    let preview = (e) => {
      let imgFiles = e.target.files;
      let imgFilesLength = imgFiles.length;
      if (imgFilesLength > 0) {
        let imgSrc = URL.createObjectURL(imgFiles[0]);
        let imgEl = document.querySelector("#pr-img");
        imgEl.src = imgSrc;
        imgEl.style.display = "block";
        // console.log(imgSrc);
      }
    };
    let PhotoPRofile = [];
    photo.addEventListener("change", (e) => {
      preview(e);
      const image = e.target.files[0];
      console.log(image);
      PhotoPRofile.push(image);
    });
    console.log(PhotoPRofile);

    //   X-btn_________________________________________

    let x = document.createElement("button");
    x.classList.add("x-btn");
    x.innerHTML = "<i class='fa fa-times' ></i>";
    form_SetPhoto.appendChild(x);

    x.addEventListener("click", () => {
      body.removeChild(shadowSetPhoto);
    });

    //   Submit________________________________________
    let sbt = document.createElement("button");
    sbt.classList.add("sbt");
    sbt.textContent = "Submit";
    sbt.addEventListener("click", () => {
      let img = PhotoPRofile[0];
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.addEventListener("load", () => {
        localStorage.setItem("Photo", reader.result);
      });
    });
    form_SetPhoto.appendChild(sbt);
  });

  // Mode Setting____________________________________________
  let btnMode = document.createElement("div");
  btnMode.classList.add("darkModeDiv");
  let txtBtn = document.createElement("p");
  txtBtn.innerHTML = "<i class='fa fa-moon-o'></i> Dark Mode";
  btnMode.appendChild(txtBtn);
  sideBar.appendChild(btnMode);

  btnName.innerHTML += "<i class='fa fa-chevron-right'></i>";

  // ON/OFF BTN______________________________________________

  let onOffBtn = document.createElement("button");
  onOffBtn.classList.add("onOffBtn");
  onOffBtn.innerText = "OFF";
  btnMode.appendChild(onOffBtn);
  onOffBtn.addEventListener("click", () => {
    body.classList.toggle("dark_mode");
    onOffBtn.innerText = onOffBtn.innerText === "ON" ? "OFF" : "ON";
    onOffBtn.style.backgroundColor =
      onOffBtn.style.backgroundColor === "green" ? "red" : "green";
  });

  if (body.classList.contains("dark_mode")) {
    onOffBtn.style = `background-color:green`;
    onOffBtn.innerText = "ON";
  }

  // ON/OFF BTN________________ENDS___________________________

  btnPassword.innerHTML += "<i class='fa fa-chevron-right'></i>";
  btnPhoto.innerHTML += "<i class='fa fa-chevron-right'></i>";
});
