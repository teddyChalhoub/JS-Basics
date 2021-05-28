var userName = document.getElementById("name");
var surname = document.getElementById("surname");
var city = document.getElementById("city");

document.getElementById("validate").addEventListener("click", function () {
  alert("Nom : " + userName.value + "\n Prenom : " + surname.value + "\n city : " + city.value);
});
