function nameofUser() {
    let userName = prompt("please enter your name:");

    if (userName) {
      document.getElementById("output").innerHTML = "Hello, "+ userName;
    }
  }

//Function to adjust Image
  function adjustImage() {
    let image = document.getElementById("imageTemp");
    image.classList.remove("image")
    image.classList.add("tweakedImage") //calls on ImageTweak in CSS
}

