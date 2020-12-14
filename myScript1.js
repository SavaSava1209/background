var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.getElementsByTagName("h3")[0];
var body = document.querySelector("body")
// === body = document.getElementById("body1")
var button = document.querySelector(".button");


function randomNumber() {
    var letters = "0123456789abcdef";
    result = "#";
    for(var i=0; i<6; i++) {
        result += letters[Math.floor(Math.random()*16)];
    } return result

}
button.addEventListener("click", function randomColor() {
    color1.value = randomNumber();
    color2.value = randomNumber();
    setGradient();
});


function setGradient() {    
    body.style.background = "linear-gradient(to right," + color1.value +"," + color2.value + ")" ;
    h3.textContent = body.style.background;

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


