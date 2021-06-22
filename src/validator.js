const validator = {
  memoria = {};

  maskify: function () {

    var passField = document.getElementById('creditCardNumber');
    passField.type = "text";
    let input_tarjeta = document.getElementById('creditCardNumber');
      memoria['creditCardNumber'] = input_tarjeta.value;
      console.log(memoria['creditCardNumber'])
    var passValue = passField.value;
    var passLength = passValue.length;
    var masked = passValue.substring(0, passLength - 4);
    masked = masked.replace(/./g, '#'); //The character is ASCII-7 (Press Alt+7 to type)
    var text = passValue.substring(passLength - 4);
    var newPass = masked + text;
    passField.value = newPass;
    
    return newPass
  }


  


  

  
};

export default validator;
