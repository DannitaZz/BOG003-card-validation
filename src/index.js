import validator from "./validator.js"; //conexión con validator.js



let creditCardNumber = ""; 
let newpass = null; //null:vacío intencional
let validacion = null;


const extraeNumero = () => {
  // manipula las variables globales
  // creditNumber
  // etc.
  let creditCard = document.getElementById('pass'); //creando variable que me trae el ID del html "pass"
  
  creditCardNumber = creditCard.value; //se trae el valor de la variable creditCardNumber para extraer el numero
  
};

const cubreNumero = () => {

  let newpass = validator.maskify(creditCardNumber);
  let passField = document.getElementById('pass');
  
  passField.type = "text";
  document.getElementById("pass").value= newpass;

};

const alertaValida = () => {

  let validacion = validator.isValid(creditCardNumber);
  if (creditCardNumber==="") {
    console.log("Llena el campo");
  } else {
    if (validacion == true) {
      alert("Tarjeta validada");
    } else  {
      alert("Tarjeta no válida");
    }

  }


}


let cajita = document.getElementById('pass');
cajita.setAttribute("required", "");

cajita.addEventListener("change", extraeNumero);
cajita.addEventListener("change", () => validator.maskify(creditCardNumber));
cajita.addEventListener("change", cubreNumero);

let boton = document.getElementById('boton-validar');

boton.addEventListener("click", () => {
  console.log(creditCardNumber);
  if (creditCardNumber==="") {
    document.getElementById("advertencia").innerHTML="*Este campo es obligatorio";  // Párrafo o span
    
  
  } else {
    validator.isValid(creditCardNumber)
  }

});
boton.addEventListener("click",  alertaValida);







