function checkPassword() {
  var input = document.getElementById("password").value;

  if (input === "1234") {

    localStorage.setItem("loggedIn", "true");

    document.getElementById("error").style.color = "#00ffcc";
    document.getElementById("error").innerText = "ACCESS GRANTED...";

    fadeAndRedirect("https://examplesite2026.vercel.app/Boyshitka.html");

  } else {

    document.getElementById("error").style.color = "red";
    document.getElementById("error").innerText = "Wrong password";

    fadeAndRedirect("https://examplesite2026.vercel.app/Trollface.html");
  }
}

function fadeAndRedirect(page) {
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = "0";

  setTimeout(function(){
    window.location.href = page;
  }, 700);
}

// ⌨️ ENTER KEY SUPPORT
document.getElementById("password").addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    checkPassword();
  }
});