var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementsByTagName("button")[0];




function setGradient() {
	console.log('main');
}
function randomGradient(){
let randomColor1 = "#"+Math.floor(Math.random()*16777215).toString(16);

let randomColor2 ="#"+Math.floor(Math.random()*16777215).toString(16);

color1.value=randomColor1;
color2.value=randomColor2;
setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
setGradient();
random.addEventListener("click",randomGradient);