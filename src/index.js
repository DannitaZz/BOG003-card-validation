import validator from "./validator.js";



var creditCardNumber = null; 
var newpass = null;

const extraeNumero = () => {
  // manipula las variables globales
  // creditNumber
  // etc.
  var creditCard = document.getElementById('pass');
  creditCardNumber = creditCard.value;
  creditCardNumber_val = creditCardNumber;
};

const cubreNumero = (creditCardNumber) => {

  var newpass = validator.maskify(creditCardNumber);
  var passField = document.getElementById('pass');
  passField.type = "text";
  document.getElementById("pass").value= newpass;
  
  
  
 // passField.value = validator.maskify(creditCardNumber);

};

var cajita = document.getElementById('pass');

cajita.addEventListener("change", validator.hola);
cajita.addEventListener("change", extraeNumero);
cajita.addEventListener("change", () => validator.maskify(creditCardNumber));
cajita.addEventListener("change", () => cubreNumero(creditCardNumber));


