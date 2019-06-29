var squares = document.querySelectorAll(".square");
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];
var pickedColor = colors[3];
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
      alert("correct");
    } else {
      this.style.backgroundColor = "#232323";
    }
  });
}
