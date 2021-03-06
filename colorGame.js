numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i=0; i < squares.length; i++){
    //add initial colors to squres
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else {
           squares[i].style.display = "none"; 
        }
    }
});

hardBtn.addEventListener("click", function(){
   easyBtn.classList.remove("selected");
   hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i=0; i < squares.length; i++){
    //add initial colors to squres
            squares[i].style.backgroundColor = colors[i];
           squares[i].style.display = "block"; 
        
    }
});

resetButton.addEventListener("click", function(){
    this.textContent = "New Colors"
    h1.style.background = "steelblue";
   // generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i=0; i < squares.length; i++){
    //add initial colors to squres
    squares[i].style.backgroundColor = colors[i];
    }
});

for(var i=0; i < squares.length; i++){
    //add initial colors to squres
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
   for(var i=0; i < squares.length; i++){
    // change color of all squares
    squares[i].style.backgroundColor = color;
    
    } 
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);    
    return colors[random];
}

function generateRandomColors(num) {
    //make an Array
    var arr = []
    //add num random colors to array
    for(var i=0; i<num; i++) {
        
    }
    //add num random colors to array
    for(var i=0; i< num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    // make a red, green and blue from 0-255
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}