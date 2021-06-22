import  validator   from "./validator.js";

//* const saludo = validator.hola();



/* const masky = validator.maskify(); */


/* const extraeNumero = () => {
  
  //var input_tarjeta = document.getElementById('pass');
      //input_tarjeta.type = "text";
  //var creditCardNumber = input_tarjeta.value;
  console.log('Hola')
  
      

  //return creditCardNumber
}; */ 

var cajita = document.getElementById('pass');
cajita.addEventListener("change", validator.hola)

/* function cubreNumero() {

  var passField = document.getElementById('pass');
    passField.type = "text";
  passField.innerHTML = newPass;

}; */ 

/* const extrae = extraeNumero(); */
/* const cubre = cubreNumero(); */

