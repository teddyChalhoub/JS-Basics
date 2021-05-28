var firstNumber = document.getElementById("first_number");
var secondNumber = document.getElementById("second_number");

document.getElementById("validate").addEventListener("click", function () {
    alert(firstNumber.value * secondNumber.value);
  });
