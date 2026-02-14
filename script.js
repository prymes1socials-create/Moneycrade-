function login(){
let user=document.getElementById("username").value;
let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

if(user && email && pass){
localStorage.setItem("portalUser", JSON.stringify({user:user}));
window.location.replace("dashboard.html");
}else{
alert("Fill all fields");
}
}

function protectPage(){
let data=localStorage.getItem("portalUser");
if(!data){
window.location.replace("index.html");
}
}

function loadUser(){
let data=JSON.parse(localStorage.getItem("portalUser"));
if(data){
document.getElementById("welcomeText").innerText =
"Welcome back, " + data.user + " 👋";
}
}

function logout(){
localStorage.removeItem("portalUser");
window.location.replace("index.html");
}
