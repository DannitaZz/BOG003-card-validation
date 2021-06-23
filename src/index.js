import validator from "./validator.js"; //conexión con validator.js



var creditCardNumber = null; 
var newpass = null; //null:vacío intencional

const extraeNumero = () => {
  // manipula las variables globales
  // creditNumber
  // etc.
  var creditCard = document.getElementById('pass'); //creando variable que me trae el ID del html "pass"
  creditCardNumber = creditCard.value; //se trae el valor de la variable creditCardNumber para extraer el numero
  
};

const cubreNumero = (creditCardNumber) => {

  var newpass = validator.maskify(creditCardNumber);
  var passField = document.getElementById('pass');
  passField.type = "text";
  document.getElementById("pass").value= newpass;

};

var cajita = document.getElementById('pass');

cajita.addEventListener("change", extraeNumero);
cajita.addEventListener("change", () => validator.maskify(creditCardNumber));
cajita.addEventListener("change", () => cubreNumero(creditCardNumber));

var boton = document.getElementById('boton-validar');

boton.addEventListener("click", () => validator.isValid(creditCardNumber));



