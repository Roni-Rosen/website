"use strict";

/* validateForm() function checks if all the fields of the contact form are filled in.
    If any of the fields are empty, it alerts the user to fill in all the fields and returns
    false to prevent the form from being submitted. If all the fields are filled in, the function returns true. */
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

/* clearForm() function sets the value of each input field
    in the contact form to an empty string, effectively clearing the form. */
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

/* This function is used to compose an email using values from the HTML form and open the default email client to send it.
    The recipient, subject and body of the email are constructed using the values from the "name", "email" and "message" input fields respectively.
    The function uses the "mailto:" protocol to open the email client with the constructed email details. */
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    window.location.href = "mailto:roni.rosen@runi.post.ac.il?subject=Email from " + name + "&body=" + message + "%0D%0A%0D%0AFrom: " + name + "%0D%0AEmail: " + email;
}

/* surprise() function changes the background color of the body to a random color,
    and also changes the position of the button with the id "target" to a random location on the screen. */
function surprise() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = color;
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    target.style.left = x + "px";
    target.style.top = y + "px";
}

/* playSound() function creates a new audio object and plays it.
    It also includes an event listener that when the audio ends, it loads the audio again */
function playSound() {
    var audio = new Audio("sounds/swamp.mp3");
    audio.play();
    audio.onended = function() {
        audio.load();
    };
  }

/* playVideo() function shows a gif in the same location as an image with the id "me",
    and also hides it after 3 seconds. */
function playVideo() {
    var video = document.getElementById("gif");
    var image = document.getElementById("me");
    video.style.display = "block";
    video.currentTime = 0;
    video.play();
    video.style.top = image.offsetTop + "px";
    video.style.left = image.offsetLeft + "px";
    setTimeout(function(){ 
        video.style.display = "none"; 
    }, 3000);
}

/* This function is used to toggle the visibility of the navigation menu by
    toggling the "display" property between "block" and "none".*/
function toggleNav() {
    var nav = document.getElementById("nav-menu");
    if(nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

