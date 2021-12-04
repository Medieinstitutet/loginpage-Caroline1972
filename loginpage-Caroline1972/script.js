let firstName = document.querySelector('fname');
let Password = document.querySelector('new_password');
let btn = document.querySelector('btn');

//Login Function
if(window.localStorage){
localStorage.setItem("user", "janne");
localStorage.setItem("pass", "test");

let user = localStorage.getItem("user");
let word = localStorage.getItem("word");

let answer = document.querySelector(".answer");

btn.addEventListener("click",() => {
if(user === fname.value && word === new_password.value){
    answer.innerHTML = "Welcome!";

} else {
    answer.innerHTML ="Username or Password isnt correct. Please try again";
}
});

}else{
    console.log("Not Supported");
}