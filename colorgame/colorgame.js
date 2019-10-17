var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
/*
for(var i=0; i< modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent ==="Easy" ? numSquare = 3: numSquare =6;
		
		reset();

	});
}

function reset() {
	colors = generateRandomColors(numSquare);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	reset.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	
	for(var i=0; i<squares.length; i++) {
		if(color[i]) {
			squares[i].style.background =colors[i];
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "null";
		}
		squares[i].style.background = colors[i];
	}	
	h1.style.background = "steelblue";
} */

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
 	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
 	}
})

resetButton.addEventListener("click",function(){
	colors = generateRandomColors(numSquare);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	
	messageDisplay.textContent = "";
	this.textContent = "NEW COLORS";
	for(var i=0; i<squares.length; i++) {
		squares[i].style.background = colors[i];
	}	
	h1.style.background = "steelblue";
})


colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++) {

	
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor); 
			h1.style.background = clickedColor;;		}	
		else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
			
	});
}

function changeColors(color) {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.background = color;	
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
