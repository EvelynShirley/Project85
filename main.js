canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQit-WEA5d8zsz2irbJ-BJ0OQCQqDnFjbxYP2KXIjBShzPqx44ZVt37maSWX3hUivlxEQ4&usqp=CAU";
car2_x = 10;
car2_y = 100;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image; // load image

	car1_imgTag = new Image(); //defining a variable with a new image
	car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
	car1_imgTag.src = car1_image; // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		car1Up();
		console.log("up");
	}
	if (keyPressed == '40') {
		car1Down();
		console.log("down");
	}
	if (keyPressed == '37') {
		car1Left();
		console.log("left");
	}
	if (keyPressed == '39') {
		car1Right();
		console.log("right");
	}
	if (keyPressed == '87') {
		car2Up();
		console.log("w key is pressed");
	}
	if (keyPressed == '83') {
		car2Down();
		console.log("s key is pressed");
	}
	if (keyPressed == '65') {
		car2Left();
		console.log("a key is pressed");
	}
	if (keyPressed == '68') {
		car2Right();
		console.log("d key is pressed");
	}
	if (car1_x >= 680) {
		document.getElementById("game_status").innerHTML = "Car 1 Won";
	} else if (car2_x >= 680) {
		document.getElementById("game_status").innerHTML = "Car 2 Won";
	}
}

function car1Up(){
	if(car1_y>=10){
		car1_y=car1_y-10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car1Down(){
	if(car1_y<=500){
		car1_y=car1_y+10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car1Right(){
	if(car1_x<=670){
		car1_x=car1_x+10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car1Left(){
	if(car1_x>=10){
		car1_x=car1_x-10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car2Up(){
	if(car2_y>=10){
		car2_y=car2_y-10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car2Down(){
	if(car2_y<=500){
		car2_y=car2_y+10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car2Right(){
	if(car2_x<=670){
		car2_x=car2_x+10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car1Left(){
	if(car2_x>=10){
		car2_x=car2_x-10;
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}