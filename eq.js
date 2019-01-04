// function randomNumber(min, max) {
// 	number = Math.floor((Math.random()*(max-min))+ min);
// 	return number;
// }
// var purple, blue, cyan, green, yellow, orange, red;
// purple = 160;
// blue = 140;
// cyan = 100;
// green = 140;
// yellow = 180;
// orange = 70;
// red = 200;

// let playing=false;
// function changeHeight(column, height) {
// 	height-=randomNumber(-20,20);
// 	if (height>200) height=200;
// 	if (height<5) height=5;
// 	column.style.height=height + 'px';
// 	return height;
// }
// function animate() {
// 	if (playing) {
// 		purple = 
// 	changeHeight(document.getElementById("purple"),purple);
// 		blue = 
// 	changeHeight(document.getElementById("blue"),blue);
// 	 	cyan =
// 	changeHeight(document.getElementById("cyan"),cyan);
// 	  	green = 
// 	changeHeight(document.getElementById("green"),green);
// 		yellow =
// 	changeHeight(document.getElementById("yellow"),yellow);
// 		orange = 
// 	changeHeight(document.getElementById("orange"),orange);
// 		red = 
// 	changeHeight(document.getElementById("red"),red);

// 		setTimeout(animate, 50);
// 	}
// }
// function play() {
// 	if (playing) {
// 		playing=false;
// 	document.getElementById("button").value="Play";
// 	} else {
// 		playing=true;
// 	document.getElementById("button").value="Pause";
// 		animate();
// 	}
// }