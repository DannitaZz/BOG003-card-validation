const validator = {
  
  
  
  maskify : (creditCardNumber) => {//funcion flecha o arrow function

    let cardLength = creditCardNumber.length;//el valor de cardLength es la longitud del string de creditCardNumber
    let masked = creditCardNumber.substring(0, cardLength - 4);//masked toma en cuenta solo del digito 0 (primer numero digitado), al -4 del string (teniendo en cuenta que no todas las tarjetas tienen 16 digitos)
    masked = masked.replace(/./g, '#'); //para  reemplazar los strings con numeral(#). "/./g," donde "." coincide con culaquier caracter y g significa global.
    let text = creditCardNumber.substring(cardLength - 4);//text es el numero de strings de creditCardNumber que no se esconden con numeral
    let newPass = masked + text;//newPass es la union de los strings ocultos más los que no lo están
    console.log(newPass)
    return newPass // retorna la función esperada ej. ############6789
  },

  isValid : (creditCardNumber) => {
  
    let cardNumber = 0, estado = false;
    
  
    for (let n = creditCardNumber.length - 1; n >= 0; n--) {
      let cDigito = creditCardNumber.charAt(n);
      let	nDigito = parseInt(cDigito, 10);
  
     
     if (estado && (nDigito *= 2) > 9) {
      nDigito -= 9;
     }
  
      cardNumber += nDigito;
      estado = !estado;
    }
    
    
    return (cardNumber % 10) == 0;
  }  



};

export default validator;
