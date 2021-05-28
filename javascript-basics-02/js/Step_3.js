var input = document.querySelector("#name");
var div = document.querySelector("#div");

input.addEventListener("change", function(){
    div.innerHTML = input.value;
});