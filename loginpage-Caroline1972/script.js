//console.log("hej")

//Get Elements for nav div
const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const form = document.getElementById("form");
const main = document.getElementById("main");
const fields = document.getElementById("fields");
const signInBtn = document.getElementById("signInBtn");

const Textmain = document.createElement("h2");
Textmain.textContent = "To Log In Enter Name and Password";
main.append(Textmain);

let uname = document.getElementById("uname");
let psw = document.getElementById("psw");

const unameInput = document.getElementById("uname");
const pswInput = document.getElementById("psw");

const positiveUnameValue = "janne";
const positivePswValue = "test";

signInBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (localStorage.getItem("uname") && localStorage.getItem("psw")) {
    localStorage.removeItem("uname");
    localStorage.removeItem("psw");

    Textmain.textContent = "To Log In Enter Name and Password";
    fields.style.display = "block"
    signInBtn.textContent = "Logga in"

    return;
  }

  if (unameInput.value === positiveUnameValue && pswInput.value === positivePswValue) {
    localStorage.setItem("uname", positiveUnameValue);
    localStorage.setItem("psw", positivePswValue);

    Textmain.textContent = `${localStorage.getItem("uname")} har loggat in`;

    fields.style.display = "none"
    signInBtn.textContent = "Logga ut"

  } else {
    Textmain.textContent = "Error! Wrong User Input or Password Input";
  }
});

// När sidan laddas, kolla om det finns en användare
if (localStorage.getItem("uname") && localStorage.getItem("psw")) {
  Textmain.textContent = `Du är inloggad som ${localStorage.getItem("uname")}`;
  fields.style.display = "none"
  signInBtn.textContent = "Logga ut"
}