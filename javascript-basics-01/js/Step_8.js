var age = document.getElementById("age");

document.getElementById("validate").addEventListener("click", function(){
    if (age.value > 18){
        alert("you are over 18");
    }else{
        alert("you are under 18");
    }
});