function login(){
  let user=document.getElementById("username").value;
  let email=document.getElementById("email").value;
  let pass=document.getElementById("password").value;

  if(user && email && pass){
    localStorage.setItem("portalUser", JSON.stringify({user,email,pass}));
    window.location.href="dashboard.html";
  } else {
    alert("Please fill all fields");
  }
}

function loadUser(){
  let data=JSON.parse(localStorage.getItem("portalUser"));
  if(data){
    document.getElementById("welcomeText").innerText =
      "Congratulations " + data.user + "! You are one of the selected individuals granted exclusive access to this portal.";
  }
}

function logout(){
  localStorage.removeItem("portalUser");
  window.location.href="index.html";
}
