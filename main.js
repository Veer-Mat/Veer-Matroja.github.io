function nameofUser() {
    let userName = prompt("please enter your name:");

    if (userName) {
      document.getElementById("output").innerHTML = "Hello, "+ userName;
    }
  }

//Function to adjust Image - This is older code, remove the slashes to make it functional
  //function adjustImage() {
   // let image = document.getElementById("imageTemp");
    //image.classList.remove("image")
   // image.classList.add("tweakedImage") //calls on ImageTweak in CSS
//}

//To enlarde profile Image
document.addEventListener("DOMContentLoaded", function() {
  const image = document.getElementById("image");

  image.addEventListener("mousedown", function() {
      image.style.transform = "scale(1.2)";
  });

  image.addEventListener("mouseup", function() {
      image.style.transform = "scale(1)";
  });

  image.addEventListener("mouseleave", function() {
      image.style.transform = "scale(1)";
  });

});

//Animate when scrolling down to the content. 


//all the Buttons for video
function playandpause()
{
  const myVideo = document.getElementById("video1")
  if (myVideo.paused)
    {
      myVideo.play();
  } else
  {
    myVideo.pause();
  }
}

function Big()
{
  const video = document.getElementById("video1")
  video.width = 700;
  video.height = 600;
}

function Small()
{
  const video = document.getElementById("video1")
  video.width = 320;
  video.height = 100;
}

function Normal()
{
  const video = document.getElementById("video1")
  video.width = 560;
  video.height = 350;
}

function showAltText(elementId) {
  const element = document.getElementById(elementId);
  let altText;

  if (element.tagName == 'IMG') {
    altText = element.alt;

    alert(` ${altText}`);
  }
}

//all functions for increasing and decreasing texts and changing color
function IncreaseText() {
  const textElements = document.querySelectorAll('#effect');
  textElements.forEach(element => {
      const currentSize = window.getComputedStyle(element).fontSize;
      const newSize = parseFloat(currentSize) + 5;
      element.style.fontSize = newSize + 'px';
  });
}


function decreaseText() {
  const textElements = document.querySelectorAll('#effect');
  textElements.forEach(element => {
      const currentSize = window.getComputedStyle(element).fontSize;
      const newSize = parseFloat(currentSize) - 5;
      element.style.fontSize = newSize + 'px';
  });
}

function colorChangeText() {
  const elements = document.querySelectorAll('#effect');
    elements.forEach(function(element) { element.style.color = 'Red';});
}

function textResetColor() {
  const elements = document.querySelectorAll('#effect');
    elements.forEach(function(element) { element.style.color = '';});
}