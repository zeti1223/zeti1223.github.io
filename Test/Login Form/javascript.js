const container = document.querySelector(".container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const form = document.querySelector("form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const pass = document.querySelector(".pass");
const namefield = document.querySelector(".namefield");
const emailfield = document.querySelector(".emailfield");
const passfield = document.querySelector(".passfield");
const emailfield1 = document.querySelector(".emailfield1");
const passfield1 = document.querySelector(".passfield1");
const email1 = document.querySelector(".email1");
const pass1 = document.querySelector(".pass1");

function checkname() {
  const namepattern = /^[a-z\d]{6,12}$/i;
  if (!name.value.match(namepattern)) {
    return (namefield.style.display = "inline");
  }
  namefield.style.display = "none";
}

function checkemail() {
  const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailpattern)) {
    return (emailfield.style.display = "inline");
  }
  emailfield.style.display = "none";
}

function checkpass() {
  const passpattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
  if (!pass.value.match(passpattern)) {
    return (passfield.style.display = "inline");
  }
  passfield.style.display = "none";
}

function checkemail1() {
  const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email1.value.match(emailpattern)) {
    return (emailfield1.style.display = "inline");
  }
  emailfield1.style.display = "none";
}

function checkpass1() {
  const passpattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
  if (!pass1.value.match(passpattern)) {
    return (passfield1.style.display = "inline");
  }
  passfield1.style.display = "none";
}

const icons = document.querySelectorAll(".show-hide");
icons.forEach((lockicon) => {
  lockicon.addEventListener("click", () => {
    const pinput = lockicon.parentElement.querySelector("input");
    if (pinput.type === "password") {
      lockicon.classList.replace("fa-lock", "fa-unlock");
      return (pinput.type = "text");
    }
    lockicon.classList.replace("fa-unlock", "fa-lock");
    pinput.type = "password";
  });
});

name.addEventListener("keyup", checkname);
email.addEventListener("keyup", checkemail);
pass.addEventListener("keyup", checkpass);
email1.addEventListener("keyup", checkemail1);
pass1.addEventListener("keyup", checkpass1);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkname();
  checkemail();
  checkpass();
});
