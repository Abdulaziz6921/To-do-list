let isPasswordSet = localStorage.getItem("Password");
let body = document.querySelector("body");
body.classList.add("shadowSet");

//   Form____________________________________________
let form_Settings = document.createElement("form");
form_Settings.classList.add("form_Settings");
body.appendChild(form_Settings);

//   Header__________________________________________
let h3 = document.createElement("h3");
h3.innerText = "Please enter your password:";
form_Settings.appendChild(h3);

//   Inputs___________________________________________
let inputWrapper = document.createElement("div");
inputWrapper.classList.add("inputWrapper");
form_Settings.appendChild(inputWrapper);

let label = document.createElement("label");
label.style = `margin-top:20px`;
label.textContent = "Password: ";
inputWrapper.appendChild(label);

let inputWrap = document.createElement("div");
inputWrap.classList.add("inputWrap");
inputWrapper.appendChild(inputWrap);

let inputType = document.createElement("input");
inputType.setAttribute("type", "password");
inputType.classList.add("name");
inputType.setAttribute("placeholder", "Enter your password");

let pswrdIcon = document.createElement("div");
pswrdIcon.classList.add("user");
pswrdIcon.innerHTML = "<i class='fa fa-lock'></i>";
inputWrap.appendChild(pswrdIcon);

inputWrap.appendChild(inputType);
//   Submit___________________________________________
let sbt = document.createElement("button");
sbt.classList.add("sbt");
sbt.textContent = "Submit";
form_Settings.appendChild(sbt);
sbt.addEventListener("click", (e) => {
  e.preventDefault();
  let regex2 = /^[0-9]{4,8}$/gm;
  let info2 = document.createElement("p");
  if (inputType.value !== "" && regex2.test(inputType.value)) {
    if (inputType.value !== isPasswordSet) {
      info2.innerText =
        "Incorrect. Not matching with the last submitted password ";
      inputWrap.style = `border:3px solid red;box-shadow: rgba(243, 5, 5, 0.25) 0px 54px 55px, rgba(255, 0, 0, 0.12) 0px -12px 30px, rgba(255, 0, 0, 0.12) 0px 4px 6px, rgba(255, 3, 3, 0.17) 0px 12px 13px, rgba(255, 0, 0, 0.09) 0px -3px 5px;`;
      pswrdIcon.style.color = "red";

      info2.style = `color:red; text-align:center; margin-top:15px`;
      form_Settings.insertBefore(info2, sbt);
      setTimeout(() => {
        inputWrap.style = `border:none; box-shadow:none`;
        pswrdIcon.style.color = "";
        form_Settings.removeChild(info2);
      }, 2000);
    } else {
      window.location.href = "./main.html";
    }
  } else {
    let hasSpace = /\s/;

    if (hasSpace.test(inputType.value)) {
      info2.innerText = "Please fill out 'password' field without any space";
    } else if (inputType.value == "") {
      info2.innerText = "Please fill out 'password' field";
    } else {
      if (!regex2.test(inputType.value)) {
        info2.innerText = "min~4 max~8 and only numbers allowed";
      }
    }

    inputWrap.style = `border:3px solid red;box-shadow: rgba(243, 5, 5, 0.25) 0px 54px 55px, rgba(255, 0, 0, 0.12) 0px -12px 30px, rgba(255, 0, 0, 0.12) 0px 4px 6px, rgba(255, 3, 3, 0.17) 0px 12px 13px, rgba(255, 0, 0, 0.09) 0px -3px 5px;`;
    pswrdIcon.style.color = "red";

    info2.style = `color:red; text-align:center;margin-top:15px`;
    form_Settings.insertBefore(info2, sbt);

    setTimeout(() => {
      inputWrap.style = `border:none; box-shadow:none`;
      pswrdIcon.style.color = "";
      form_Settings.removeChild(info2);
    }, 2000);
  }
});
