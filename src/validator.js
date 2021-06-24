const validator = {
  
  
  
  maskify : (creditCardNumber) => {

    let cardLength = creditCardNumber.length;
    let masked = creditCardNumber.substring(0, cardLength - 4);
    masked = masked.replace(/./g, '#'); //The character is ASCII-7 (Press Alt+7 to type)
    let text = creditCardNumber.substring(cardLength - 4);
    let newPass = masked + text;
    console.log(newPass)
    return newPass
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
