import validator from "./validator.js"; //conexión con validator.js



var creditCardNumber = null; 
var newpass = null; //null:vacío intencional
var validacion = null;


const extraeNumero = () => {
  // manipula las variables globales
  // creditNumber
  // etc.
  var creditCard = document.getElementById('pass'); //creando variable que me trae el ID del html "pass"
  
  creditCardNumber = creditCard.value; //se trae el valor de la variable creditCardNumber para extraer el numero
  
};

const cubreNumero = () => {

  var newpass = validator.maskify(creditCardNumber);
  var passField = document.getElementById('pass');
  
  passField.type = "text";
  document.getElementById("pass").value= newpass;

};

const alertaValida = () => {
  
  var validacion = validator.isValid(creditCardNumber);

  if (validacion == true) {
    alert("Tarjeta validada");
  } else  {
    alert("Tarjeta no válida");
  }
}


var cajita = document.getElementById('pass');
cajita.setAttribute("required", "");

cajita.addEventListener("change", extraeNumero);
cajita.addEventListener("change", () => validator.maskify(creditCardNumber));
cajita.addEventListener("change", cubreNumero);

var boton = document.getElementById('boton-validar');

boton.addEventListener("click", () => validator.isValid(creditCardNumber));
boton.addEventListener("click",  alertaValida);







