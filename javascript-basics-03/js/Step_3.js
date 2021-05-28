var text = document.querySelector("p");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");

changeTexColor(green,text,"green");
changeTexColor(red,text,"red");
changeTexColor(blue,text,"blue");



function changeTexColor(div,text,color){
    div.addEventListener("click", function() {
        text.style.color=color;
     });
}