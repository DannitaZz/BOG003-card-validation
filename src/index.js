import validator from "./validator.js";

//* const saludo = validator.hola();
/* const masky = validator.maskify(); */

var creditCardNumber = null;
var newpass = null;

const extraeNumero = () => {
  // manipula las variables globales
  // creditNumber
  // etc.
  var creditCard = document.getElementById('pass');
  creditCardNumber = creditCard.value;
  window.creditCardNumber_val = creditCardNumber;
};

const cubreNumero = (creditCardNumber) => {

  var passField = document.getElementById('pass');
  var newpass = validator.maskify(creditCardNumber);
  passField.value = newpass;
  
 // passField.value = validator.maskify(creditCardNumber);

};

var cajita = document.getElementById('pass');
cajita.addEventListener("change", validator.hola);
cajita.addEventListener("change", extraeNumero);
cajita.addEventListener("change", () => validator.maskify(creditCardNumber));
cajita.addEventListener("change", () => cubreNumero(creditCardNumber))


