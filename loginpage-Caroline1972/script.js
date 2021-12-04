console.log("Hej");
let firstName = document.getElementById('fname');
let Password = document.getElementById('new-password');
let btn = document.getElementById('btn');

logIn.addEventListener("click", () => {
  if (firstName === "janne" && Password === "text"){
      console.log('Welcome!');
  } else { 
    console.log("Wrong name or password");
  }
  
})