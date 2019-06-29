var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked on square and compare to pickedColor
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
