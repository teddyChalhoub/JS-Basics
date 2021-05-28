var nom = document.getElementById("name");
var surname = document.getElementById("surname");
var city = document.getElementById("city");

document.querySelector("button").addEventListener("click", function () {
  var r = confirm("Choose if you want to delete your values");

  if (r == true) {
    nom.value = "";
    surname.value = "";
    city.value = "";
  }
});
