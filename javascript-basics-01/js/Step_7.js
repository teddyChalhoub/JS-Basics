var shoeSize = document.getElementById("shoe_size");
var birthYear = document.getElementById("year");

document.getElementById("validate").addEventListener("click", function(){
    alert(mathShoesize(shoeSize.value,birthYear.value));
});



function mathShoesize(value, year){

    var size = value * 2;
    size = size + 5;
    size = size * 50;
    size = size - year;
    size = size + 1766;

    return size;
}