var pass = document.getElementById("password");
var confpass = document.getElementById("confirmation");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {

    if ( pass.value != confpass.value){
        pass.style.borderColor = "red";
        confpass.style.borderColor = "red";
    }
});
