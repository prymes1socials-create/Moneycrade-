function login(){
let user=document.getElementById("username").value;
let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

if(user && email && pass){
localStorage.setItem("portalUser", JSON.stringify({user,email}));
window.location.href="dashboard.html";
}else{
alert("Fill all fields");
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
window.location.href="index.html";
}
