let username = document.getElementById("username");
let password = document.getElementById("password");
let bth = document.getElementById("btn");

// LocalStorage function

 localStorage.setItem("username", "janne");
 localStorage.setItem("password", "test");
//Login Function
 let user = localStorage.getItem("username");
 let pass1 = localStorage.getItem("password");
 let answer = document.getElementById("answer");

 btn.addEventListener("click",() => { 
  if(user == username.janne && pass1 == password.test){
        answer.innerHTML = "Welcome!";
    
    } else {
        (user !== username.janne && pass1 !== password.test);{
        answer.innerHTML = "Error. Please try again";
    } 
 } 
})
