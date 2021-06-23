const validator = {
  
  
  
  maskify: function (creditCardNumber) {

    var cardLength = creditCardNumber.length;
    var masked = creditCardNumber.substring(0, cardLength - 4);
    masked = masked.replace(/./g, '#'); //The character is ASCII-7 (Press Alt+7 to type)
    var text = creditCardNumber.substring(cardLength - 4);
    var newPass = masked + text;
    console.log(newPass)
    return newPass
  },

  hola:  () => {
    console.log("Hola mundo");
  },



};

export default validator;
