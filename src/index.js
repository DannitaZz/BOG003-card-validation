import  validator   from "./validator.js";

//* const saludo = validator.hola();



const masky = validator.maskify();

function extraeNumero() {
  var passField = document.getElementById('pass');
    passField.type = "text";
  var input_tarjeta = document.getElementById('pass');
  var creditCardNumber = input_tarjeta.value;
      

    return creditCardNumber
}  

const extrae = extraeNumero();

function cubreNumero() {

  passField.value = newPass;

}  

const cubre = cubreNumero();








  
  
